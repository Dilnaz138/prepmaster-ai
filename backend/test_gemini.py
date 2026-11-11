
import os
from pathlib import Path
from dotenv import load_dotenv
from google import genai

# Load the API key from backend/.env
load_dotenv(Path(__file__).parent / ".env")

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in backend/.env")

client = genai.Client(api_key=api_key)

response = client.models.generate_content(
    
 model="gemini-3.1-flash-lite",

    contents="Give one useful IELTS Writing Task 2 tip in one sentence."
)

print(response.text)

print("\nAvailable Gemini models:")

for model in client.models.list():
    if "generateContent" in (model.supported_actions or []):
        print(model.name)
