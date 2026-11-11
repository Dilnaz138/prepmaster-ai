
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type WritingEntry = {
  id: number;
  date: string;
  essay: string;
  question: string;
  feedback: string;
  wordCount: number;
  bandScore?: number;
};

export default function WritingHistoryPage() {
  const [history, setHistory] = useState<WritingEntry[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem("writingHistory") || "[]"
      );
    } catch {
      return [];
    }
  });

  const [selected, setSelected] = useState<WritingEntry | null>(null);

  function deleteEntry(id: number) {
    const updated = history.filter((entry) => entry.id !== id);
    setHistory(updated);
    localStorage.setItem("writingHistory", JSON.stringify(updated));

    if (selected?.id === id) {
      setSelected(null);
    }
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Writing History
      </h1>
      <p className="mt-2 text-gray-500">
        Review your previous IELTS essays and AI feedback.
      </p>

      {selected ? (
        <div className="mt-8 space-y-6">
          <button
            onClick={() => setSelected(null)}
            className="font-medium text-purple-600 hover:underline"
          >
            ← Back to history
          </button>

          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold">Your Essay</h2>
            <p className="mt-2 text-sm text-gray-500">
              {selected.date} · {selected.wordCount} words
            </p>
            <p className="mt-4 font-semibold">{selected.question}</p>
            <p className="mt-4 whitespace-pre-wrap text-gray-700">
              {selected.essay}
            </p>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
            <h2 className="mb-4 text-xl font-bold text-purple-800">
              Gemini AI Feedback
            </h2>
            <div className="prose prose-purple max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {selected.feedback}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      ) : history.length === 0 ? (
        <div className="mt-8 rounded-2xl border bg-white p-10 text-center">
          <p className="text-gray-500">
            No essays saved yet. Submit an essay to get started!
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4">
          {history.map((entry) => (
            <div
              key={entry.id}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <p className="text-sm text-gray-500">{entry.date}</p>
              <h2 className="mt-2 text-lg font-semibold">
                {entry.question}
              </h2>
              <p className="mt-2 line-clamp-2 text-gray-600">
                {entry.essay}
              </p>
              <p className="mt-3 text-sm text-purple-600">
                {entry.wordCount} words
              </p>
              {entry.bandScore != null && entry.bandScore > 0 && (
  <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-purple-100 px-4 py-2">
    <span className="text-sm font-medium text-purple-700">
      Estimated IELTS Band
    </span>
    <span className="text-xl font-bold text-purple-800">
      {entry.bandScore.toFixed(1)}
    </span>
  </div>
)}

              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => setSelected(entry)}
                  className="rounded-xl bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                >
                  View Feedback
                </button>
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="rounded-xl border border-red-200 px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
