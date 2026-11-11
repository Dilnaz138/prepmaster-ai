
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function WritingFeedbackPage() {
  const [essay, setEssay] = useState(() => {
  return localStorage.getItem("ieltsWritingDraft") || "";
});
  const [showFeedback, setShowFeedback] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const [aiFeedback, setAiFeedback] = useState("");
  const getCriterionScore = (criterion: string) => {
  if (!aiFeedback) return null;

  const escaped = criterion.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const match = aiFeedback.match(
    new RegExp(
      `${escaped}\\s*:?\\s*(?:\\*\\*)?\\s*(?:Band\\s*)?(\\d+(?:\\.5)?)`,
      "i"
    )
  );

  return match ? match[1] : null;
};

const getOverallBand = () => {
  if (!aiFeedback) return null;

  const match = aiFeedback.match(
    /Estimated Overall IELTS Band Score[\s\S]{0,100}?\bBand\s*(\d+(?:\.\d+)?)/i
  );

  return match ? match[1] : null;
};

  const wordCount = essay.trim()
    ? essay.trim().split(/\s+/).length
    : 0;

async function submitEssay() {
  setLoading(true);
  setApiMessage("");
  setShowFeedback(false);

  try {
    const signal = AbortSignal.timeout(60000);
    const response = await fetch("http://127.0.0.1:8000/evaluate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal,
      body: JSON.stringify({
        essay: essay,
        question:
          "Some people believe that online education is more effective than traditional classroom learning, while others think that face-to-face teaching provides better results. Discuss both views and give your own opinion.",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit essay");
    }

    const data = await response.json();
    console.log("Gemini API response:", data);
    setAiFeedback(data.feedback);
    const savedHistory = JSON.parse(
  localStorage.getItem("writingHistory") || "[]"
);

const newResult = {
  id: Date.now(),
  date: new Date().toLocaleString(),
  essay: essay,
  question:
    "Some people believe online education is more effective than traditional classroom learning.",
  feedback: data.feedback,
  bandScore: Number(
  data.feedback.match(
    /(?:Estimated Overall IELTS Band Score|Overall Band Score)[\s\S]{0,100}?(?:Band\s*)?([0-9](?:\.5)?)\b/i
  )?.[1] ?? 0
),
  wordCount: wordCount,
};

localStorage.setItem(
  "writingHistory",
  JSON.stringify([newResult, ...savedHistory])
);

    setApiMessage(
      `Essay received successfully! Word count: ${data.word_count}`
    );
    setShowFeedback(true);
  
} catch (error) {
  console.error("Error submitting essay:", error);

  if (error instanceof Error && error.name === "TimeoutError") {
    setApiMessage(
      "AI evaluation is taking longer than expected. Please try again."
    );
  } else {
    setApiMessage(
      "Unable to evaluate your essay right now. Please try again."
    );
  }

  setShowFeedback(true);
} finally {

    setLoading(false);
  }
}

  return (
    <main className="mx-auto max-w-5xl p-8">
      <p className="text-sm font-semibold text-violet-600">
        PREPMASTER AI · WRITING ACADEMY
      </p>

      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        IELTS Writing Feedback
      </h1>
      <a
  href="/ielts/writing/history"
  className="inline-flex items-center gap-2 rounded-xl border border-purple-200 bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-700 transition hover:bg-purple-100"
>
  📚 View Writing History
</a>
      <p className="mt-3 text-gray-500">
        Write your essay, develop your arguments,
        and discover how to improve your writing.
      </p>
      
<section className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-6">
  <p className="text-sm font-semibold text-violet-700">
    IELTS Academic · Writing Task 2
  </p>

  <h2 className="mt-3 text-lg font-semibold text-slate-900">
    Essay Question
  </h2>

  <p className="mt-4 leading-8 text-slate-700">
    Some people believe that online education is more
    effective than traditional classroom learning,
    while others think that face-to-face teaching
    provides better results.
  </p>

  <p className="mt-3 font-medium text-slate-900">
    Discuss both views and give your own opinion.
  </p>

  <p className="mt-4 text-sm text-slate-500">
    Give reasons for your answer and include relevant
    examples from your knowledge or experience.
    Write at least 250 words.
  </p>
</section>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">
          Your Essay
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          IELTS Academic Writing Task 2
        </p>

        <textarea
          value={essay}
          
onChange={(e) => {
  const text = e.target.value;
  setEssay(text);
  localStorage.setItem("ieltsWritingDraft", text);
}}

          placeholder="Start writing your essay here..."
          className="mt-5 min-h-80 w-full resize-y rounded-xl border border-gray-200 p-5 outline-none focus:border-violet-500"
        />

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {wordCount} words · Recommended minimum: 250
          </span>

          <button
            type="button"
            onClick={submitEssay}
            disabled={!essay.trim() || loading}
            className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white disabled:opacity-40"
          >
           {loading ? "Analyzing your essay..." : "Get Writing Feedback"}
          </button>
        </div>
      </section>

{showFeedback && (
  <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
    <h2 className="text-2xl font-bold text-slate-900">
      Your Writing Feedback
    </h2>
    <p className="mt-3 text-sm text-violet-700">
  {apiMessage}
</p>

   
{aiFeedback && (
  <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6 text-center">
    <p className="text-sm font-semibold text-violet-700">
      Estimated Overall IELTS Band
    </p>

    <p className="mt-2 text-5xl font-bold text-violet-800">
      {getOverallBand() ?? "N/A"}
    </p>

    <p className="mt-3 text-xs text-slate-500">
      Unofficial AI estimate · Not an official IELTS result
    </p>
  </div>
)}
{aiFeedback && (
  <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50 p-6">
    <h3 className="mb-4 text-lg font-semibold text-violet-900">
      Gemini AI Evaluation
    </h3>

    
<div className="text-sm leading-7 text-slate-800 [&_h1]:mt-6 [&_h1]:text-2xl [&_h1]:font-bold [&_h2]:mt-5 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:mt-4 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_table]:my-4 [&_table]:w-full [&_th]:border [&_th]:p-2 [&_td]:border [&_td]:p-2">

      
<ReactMarkdown remarkPlugins={[remarkGfm]}>
  {aiFeedback}
</ReactMarkdown>

    </div>
  </div>
)}
    


    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {[
        "Task Response",
        "Coherence and Cohesion",
        "Lexical Resource",
        "Grammatical Range and Accuracy",
      ].map((criterion) => (
        <div
          key={criterion}
          className="rounded-xl border border-gray-200 p-5"
        >
          <h3 className="font-semibold text-slate-900">
            {criterion}
          </h3>
          <p className="mt-3 text-xl font-bold text-violet-700">
            {getCriterionScore(criterion)
  ? `Estimated Band ${getCriterionScore(criterion)}`
  : "Score not available"}
          </p>
        </div>
      ))}
    </div>
  </section>
)}

    </main>
  );
}
