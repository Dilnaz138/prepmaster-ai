
import os
from pathlib import Path

from dotenv import load_dotenv
from google import genai

load_dotenv(Path(__file__).parent / ".env")


from google.genai import types

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY"),
    http_options=types.HttpOptions(
        timeout=120000
    ),
)



def evaluate_writing(essay: str, question: str) -> str:
    prompt = f"""
You are an IELTS Academic Writing Task 2 tutor.

Evaluate the student's essay using the four IELTS criteria:

1. Task Response
2. Coherence and Cohesion
3. Lexical Resource
4. Grammatical Range and Accuracy

Essay question:
{question}

Student essay:
{essay}

Provide:

1. An estimated overall IELTS band score.
2. An estimated band score for each criterion.
3. Specific strengths and weaknesses.
4. Grammar mistakes with corrections and explanations.
5. Vocabulary improvements with natural alternatives.
6. Analysis of how well the arguments are developed.
7. Three actionable recommendations for improvement.

Be constructive, specific, and realistic.
Do not award high scores without evidence.
Explain that scores are unofficial estimates.
Formatting rules:
- Use standard Markdown.
- Use the Unicode arrow → for vocabulary replacements.
- Do not use LaTeX or mathematical notation.
- Complete all seven feedback sections.
"""

   

    response = client.models.generate_content(
        model="gemini-3.5-flash-lite",
        contents=prompt,
        config=types.GenerateContentConfig(
            max_output_tokens=2000,
        ),
    )

    if not response.text:
        raise ValueError("Gemini returned an empty response")

    return response.text

