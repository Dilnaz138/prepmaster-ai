
import { useState } from "react";
import { Link } from "react-router-dom";

export default function VocabularyReviewPage() {
  const [learned, setLearned] = useState<string[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem("learnedVocabulary") || "[]"
      );
    } catch {
      return [];
    }
  });

  const vocabulary = [
    {
      word: "Energy transition",
      meaning: "Moving from fossil fuels to cleaner energy sources.",
    },
    {
      word: "Intermittent",
      meaning: "Not continuous or regularly available.",
    },
    {
      word: "Energy security",
      meaning: "Reliable access to sufficient energy at affordable prices.",
    },
    {
      word: "Upfront costs",
      meaning: "Money paid at the beginning of a project.",
    },
    {
      word: "Grid infrastructure",
      meaning: "The network that transports electricity to consumers.",
    },
  ];

  const remaining = vocabulary.filter(
    (item) => !learned.includes(item.word)
  );
  const totalWords = vocabulary.length;
const learnedWords = vocabulary.filter((item) =>
  learned.includes(item.word)
).length;

const progress =
  totalWords > 0 ? (learnedWords / totalWords) * 100 : 0;

  const resetProgress = () => {
    localStorage.setItem("learnedVocabulary", "[]");
    setLearned([]);
  };

  return (
    <main className="mx-auto max-w-5xl p-8">
      <div className="mb-8 rounded-2xl bg-white p-6 shadow-sm">
  <h2 className="text-lg font-bold text-slate-900">
    Vocabulary Progress
  </h2>

  <p className="mt-2 text-gray-600">
    {learnedWords} of {totalWords} words learned
  </p>

  <div className="mt-4 h-3 overflow-hidden rounded-full bg-violet-100">
    <div
      className="h-full rounded-full bg-violet-600 transition-all"
      style={{ width: `${progress}%` }}
    />
  </div>
</div>
      <p className="text-sm font-semibold text-violet-600">
        PREPMASTER AI · VOCABULARY
      </p>

      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        Vocabulary Review
      </h1>

      <p className="mt-3 text-gray-500">
        Track your learned vocabulary and discover words you
        still need to practise.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Total Words</p>
          <p className="mt-2 text-3xl font-bold">
            {vocabulary.length}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">Learned</p>
          <p className="mt-2 text-3xl font-bold text-green-600">
            {vocabulary.length - remaining.length}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-gray-500">To Review</p>
          <p className="mt-2 text-3xl font-bold text-violet-600">
            {remaining.length}
          </p>
        </div>
      </div>

      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Words to Review</h2>

        {remaining.length === 0 ? (
          <p className="mt-4 text-green-700">
            Excellent! You've marked all the words as learned.
          </p>
        ) : (
          <div className="mt-5 space-y-3">
            {remaining.map((item) => (
              <div
                key={item.word}
                className="rounded-xl border border-slate-200 p-4"
              >
                <p className="font-semibold text-slate-900">
                  {item.word}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item.meaning}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
  to="/ielts/vocabulary/quiz"
  className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white"
>
  Practice Quiz
</Link>
          <Link
            to="/ielts/topics/renewable-energy"
            className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white"
          >
            Practise Flashcards
          </Link>

          <button
            type="button"
            onClick={resetProgress}
            className="rounded-xl border border-slate-200 px-5 py-3"
          >
            Reset Progress
          </button>
        </div>
      </section>
    </main>
  );
}
