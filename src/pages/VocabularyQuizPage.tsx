
import { useState } from "react";
import { Link } from "react-router-dom";

const questions = [
  {
    question: "What does 'energy transition' mean?",
    options: [
      "Increasing fossil fuel production",
      "Moving towards cleaner energy sources",
      "Building more roads",
      "Reducing electricity access",
    ],
    correct: 1,
  },
  {
    question: "What does 'intermittent' mean?",
    options: [
      "Always available",
      "Very expensive",
      "Not continuously available",
      "Environmentally friendly",
    ],
    correct: 2,
  },
  {
    question: "What does 'energy security' mean?",
    options: [
      "Reliable access to sufficient energy",
      "Protecting buildings from theft",
      "Stopping electricity production",
      "Using only solar panels",
    ],
    correct: 0,
  },
  {
    question: "What are 'upfront costs'?",
    options: [
      "Money earned from a project",
      "Expenses paid at the beginning",
      "Monthly salaries",
      "Government taxes",
    ],
    correct: 1,
  },
  {
    question: "What is 'grid infrastructure'?",
    options: [
      "A public transport system",
      "A collection of solar panels",
      "A system for transporting electricity",
      "A type of renewable fuel",
    ],
    correct: 2,
  },
];

export default function VocabularyQuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const finished = current >= questions.length;
  const question = questions[current];

function nextQuestion() {
  const correct = selected === question.correct;
  const newScore = score + (correct ? 1 : 0);

  if (correct) {
    setScore(newScore);
  }

  // Save the result when the last question is answered
  if (current === questions.length - 1) {
    const result = {
      date: new Date().toLocaleDateString(),
      score: newScore,
      total: questions.length,
    };

    const history = JSON.parse(
      localStorage.getItem("vocabularyQuizHistory") || "[]"
    );

    localStorage.setItem(
      "vocabularyQuizHistory",
      JSON.stringify([...history, result])
    );
  }

  setSelected(null);
  setCurrent((previous) => previous + 1);
}


  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
  }

  return (
    <main className="mx-auto max-w-3xl p-8">
      <p className="text-sm font-semibold text-violet-600">
        PREPMASTER AI · VOCABULARY PRACTICE
      </p>

      <h1 className="mt-3 text-3xl font-bold text-slate-900">
        Renewable Energy Vocabulary Quiz
      </h1>

      {finished ? (
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Quiz Completed!
          </h2>

          <p className="mt-4 text-xl">
            Your score: {score} / {questions.length}
          </p>

          <button
            onClick={restart}
            className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-white"
          >
            Try Again
          </button>

          <Link
            to="/ielts/vocabulary/review"
            className="ml-4 text-violet-600"
          >
            Back to Vocabulary
          </Link>
        </section>
      ) : (
        <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm text-gray-500">
            Question {current + 1} of {questions.length}
          </p>

          <h2 className="mt-4 text-xl font-bold">
            {question.question}
          </h2>

          <div className="mt-6 space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`block w-full rounded-xl border p-4 text-left ${
                  selected === index
                    ? "border-violet-600 bg-violet-50"
                    : "border-gray-200"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selected !== null && (
            <p className={`mt-5 font-semibold ${
              selected === question.correct
                ? "text-green-600"
                : "text-red-600"
            }`}>
              {selected === question.correct
                ? "Correct! Great job."
                : `Not quite. Correct answer: ${
                    question.options[question.correct]
                  }`}
            </p>
          )}

          <button
            disabled={selected === null}
            onClick={nextQuestion}
            className="mt-6 rounded-xl bg-violet-600 px-6 py-3 text-white disabled:opacity-40"
          >
            {current === questions.length - 1
              ? "Finish Quiz"
              : "Next Question"}
          </button>
        </section>
      )}
    </main>
  );
}
