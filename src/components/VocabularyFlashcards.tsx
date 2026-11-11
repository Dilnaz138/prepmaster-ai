
import { useEffect, useState } from "react";

type VocabularyItem = {
  word: string;
  meaning: string;
  example: string;
};

type Props = {
  words: VocabularyItem[];
};

export default function VocabularyFlashcards({ words }: Props) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [learned, setLearned] = useState<string[]>(() => {
  try {
    return JSON.parse(localStorage.getItem("learnedVocabulary") || "[]");
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("learnedVocabulary", JSON.stringify(learned));
}, [learned]);

const toggleLearned = () => {
  const word = words[index].word;

  setLearned((previous) =>
    previous.includes(word)
      ? previous.filter((item) => item !== word)
      : [...previous, word]
  );
};

  if (words.length === 0) return null;

  const current = words[index];

  const next = () => {
    setIndex((index + 1) % words.length);
    setFlipped(false);
  };

  const previous = () => {
    setIndex((index - 1 + words.length) % words.length);
    setFlipped(false);
  };

  return (
    <section className="mt-8 rounded-2xl bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Vocabulary Flashcards
      </h2>

      <p className="mt-2 text-gray-500">
        Test yourself before revealing the meaning.
      </p>

      <p className="mt-5 text-center text-sm text-gray-500">
        Card {index + 1} of {words.length}
      </p>

      <button
        type="button"
        onClick={() => setFlipped(!flipped)}
        className="mt-3 flex min-h-64 w-full flex-col items-center justify-center rounded-2xl border-2 border-violet-200 bg-violet-50 p-6 text-center transition hover:border-violet-500"
      >
        {flipped ? (
          <>
            <p className="text-lg font-semibold text-slate-900">
              {current.meaning}
            </p>
            <p className="mt-4 italic text-gray-600">
              {current.example}
            </p>
          </>
        ) : (
          <p className="text-2xl font-bold text-violet-700">
            {current.word}
          </p>
        )}

        <span className="mt-6 text-sm text-violet-500">
          Click to {flipped ? "see the word" : "reveal the meaning"}
        </span>
      </button>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={previous}
          className="rounded-xl border border-gray-200 px-5 py-3 font-medium hover:bg-gray-50"
        >
          ← Previous
        </button>
      <div className="mt-4 flex items-center justify-between gap-4">
  <p className="text-sm text-gray-500">
    {words.filter((item) => learned.includes(item.word)).length}
    {" / "}
    {words.length} words learned
  </p>

  <button
    type="button"
    onClick={toggleLearned}
    className="rounded-xl bg-green-100 px-4 py-2 font-medium text-green-700 hover:bg-green-200"
  >
    {learned.includes(current.word)
      ? "✓ Learned"
      : "Mark as Learned"}
  </button>
</div>
        <button
          type="button"
          onClick={next}
          className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
