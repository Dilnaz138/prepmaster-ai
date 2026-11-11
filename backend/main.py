
import os

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from ai_feedback import evaluate_writing

app = FastAPI()

frontend_url = os.getenv("FRONTEND_URL", "")

allowed_origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

if frontend_url:
    allowed_origins.append(frontend_url.rstrip("/"))

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


class EssayRequest(BaseModel):
    essay: str
    question: str


@app.get("/")
def home():
    return {"message": "PrepMaster AI backend is running!"}


@app.post("/evaluate")
def evaluate_essay(request: EssayRequest):
    word_count = len(request.essay.split())

    try:
        feedback = evaluate_writing(
            essay=request.essay,
            question=request.question,
        )

        return {
            "status": "evaluated",
            "message": "AI evaluation completed",
            "word_count": word_count,
            "feedback": feedback,
        }

    except Exception as error:
        print(f"Gemini error: {error}", flush=True)
        raise HTTPException(
            status_code=503,
            detail="AI evaluation is temporarily unavailable. Please try again."
        ) from error
