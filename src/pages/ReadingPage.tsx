
import { useEffect, useState } from "react";
import { Clock, BookOpen, CheckCircle2, RotateCcw } from "lucide-react";

const questions = [
  {
    question: "Why are urban gardens becoming popular?",
    options: [
      "They replace all supermarkets",
      "They provide fresh food and green spaces",
      "They require no maintenance",
    ],
    answer: 1,
    explanation:
      "The passage says urban gardens provide fresh food and create green spaces in cities.",
  },
  {
    question: "What can people learn from urban gardening?",
    options: [
      "How to grow plants",
      "How to build skyscrapers",
      "How to drive buses",
    ],
    answer: 0,
    explanation:
      "Urban gardening helps communities learn about growing plants and caring for the environment.",
  },
  {
    question: "Urban gardens can only be created on rooftops.",
    options: ["True", "False", "Not Given"],
    answer: 1,
    explanation:
      "The passage also mentions balconies and small gardens. Therefore, the statement is False.",
  },
  {
    question: "Most urban gardeners spend more than five hours a week gardening.",
    options: ["True", "False", "Not Given"],
    answer: 2,
    explanation:
      "The passage does not mention how many hours people spend gardening. Therefore, the answer is Not Given.",
  },
];

const PASSAGE =
  "Urban gardening is becoming increasingly popular in cities around the world. People grow vegetables, fruits, and flowers in small gardens, on rooftops, and even on balconies. These gardens provide fresh food and create green spaces in busy urban areas. They also help communities learn about growing plants and caring for the environment.";

export default function ReadingPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  const saveResult = () => {
    try {
      const result = {
        test: "Urban Gardening",
        score,
        total: questions.length,
        date: new Date().toLocaleDateString(),
      };

      const saved = localStorage.getItem("readingHistory");
      const history = saved ? JSON.parse(saved) : [];

      if (Array.isArray(history)) {
        localStorage.setItem(
          "readingHistory",
          JSON.stringify([...history, result])
        );
      }
    } catch {
      console.error("Could not save reading result.");
    }
  };

  const finishTest = () => {
    if (submitted) return;
    saveResult();
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      finishTest();
      return;
    }

    const timer = window.setTimeout(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [timeLeft, submitted]);

  const restartTest = () => {
    setAnswers({});
    setTimeLeft(10 * 60);
    setSubmitted(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="min-h-screen bg-[#F8F9FD] px-5 py-9 text-[#1E2340] md:px-9">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-violet-500">
            IELTS PREPARATION
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Reading Practice
          </h1>
          <p className="mt-3 text-gray-500">
            Develop your reading comprehension and practise IELTS-style questions.
          </p>
        </header>

        {/* Test information */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#EEEEF6] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <BookOpen size={22} />
            </div>
            <div>
              <p className="font-bold">Urban Gardening</p>
              <p className="text-sm text-gray-500">
                {questions.length} questions · 10 minutes
              </p>
            </div>
          </div>

          <div className={`flex items-center gap-2 rounded-xl px-4 py-2 font-bold ${
            timeLeft < 60 && !submitted
              ? "bg-red-50 text-red-600"
              : "bg-violet-50 text-violet-700"
          }`}>
            <Clock size={18} />
            {minutes}:{String(seconds).padStart(2, "0")}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-7 rounded-2xl border border-[#EEEEF6] bg-white p-5 shadow-sm">
          <div className="mb-3 flex justify-between text-sm">
            <span className="font-semibold">Your progress</span>
            <span className="text-gray-500">
              {answeredCount}/{questions.length} answered
            </span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-violet-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main content */}
        <div className="grid items-start gap-6 lg:grid-cols-2">

          {/* Reading passage */}
          <article className="rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-5 flex items-center gap-2 text-violet-600">
              <BookOpen size={20} />
              <span className="text-sm font-bold uppercase tracking-wide">
                Reading Passage
              </span>
            </div>

            <h2 className="mb-5 text-2xl font-bold">
              Urban Gardening
            </h2>

            <p className="text-[15px] leading-8 text-gray-600">
              {PASSAGE}
            </p>

            <div className="mt-7 rounded-xl bg-[#F8F7FF] p-4">
              <p className="text-sm font-semibold text-violet-700">
                Reading tip
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Read the passage carefully. Pay attention to specific details
                and avoid choosing answers based only on general knowledge.
              </p>
            </div>
          </article>

          {/* Questions */}
          <section className="rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm md:p-8">
            <h2 className="mb-6 text-xl font-bold">Questions</h2>

            {questions.map((question, index) => (
              <div
                key={index}
                className="mb-7 border-b border-gray-100 pb-6 last:border-0"
              >
                <div className="mb-3 flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm font-bold text-violet-700">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold leading-6">
                    {question.question}
                  </h3>
                </div>

                <div className="space-y-2 pl-10">
                  {question.options.map((option, optionIndex) => {
                    const selected = answers[index] === optionIndex;
                    const correct = question.answer === optionIndex;

                    let style =
                      "border-gray-200 hover:border-violet-300 hover:bg-violet-50";

                    if (selected && !submitted) {
                      style = "border-violet-500 bg-violet-50 text-violet-800";
                    }

                    if (submitted && correct) {
                      style = "border-green-300 bg-green-50 text-green-800";
                    } else if (submitted && selected) {
                      style = "border-red-300 bg-red-50 text-red-800";
                    }

                    return (
                      <label
                        key={optionIndex}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 text-sm transition ${style} ${
                          submitted ? "cursor-default" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name={`question-${index}`}
                          checked={selected}
                          disabled={submitted}
                          onChange={() =>
                            setAnswers((previous) => ({
                              ...previous,
                              [index]: optionIndex,
                            }))
                          }
                          className="accent-violet-600"
                        />
                        <span>{option}</span>
                        {submitted && correct && (
                          <CheckCircle2 className="ml-auto shrink-0 text-green-600" size={17} />
                        )}
                      </label>
                    );
                  })}
                </div>

                {submitted && (
                  <div className="ml-10 mt-3 rounded-xl bg-[#F8F8FC] p-4">
                    <p className="text-sm font-bold text-violet-700">
                      {answers[index] === question.answer
                        ? "Correct answer!"
                        : "Incorrect answer"}
                    </p>
                    <p className="mt-2 text-sm text-gray-600">
                      Correct answer: {question.options[question.answer]}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            ))}

            {!submitted ? (
              <div>
                <p className="mb-4 text-sm text-gray-500">
                  {questions.length - answeredCount} question(s) remaining.
                </p>
                <button
                  onClick={finishTest}
                  disabled={answeredCount !== questions.length}
                  className="w-full rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit Answers
                </button>
              </div>
            ) : (
              <div className="rounded-2xl bg-violet-50 p-5">
                <p className="text-sm font-semibold text-violet-700">
                  Test completed
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-violet-800">
                  {score}/{questions.length}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  You answered {score} questions correctly.
                </p>
                <button
                  onClick={restartTest}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700"
                >
                  <RotateCcw size={17} />
                  Try Again
                </button>
              </div>
            )}
          </section>
        </div>

        <footer className="mt-12 border-t border-gray-200 py-6 text-center text-xs text-gray-400">
          PrepMaster AI · Learn smarter. Practise better. Prepare with AI.
        </footer>
      </div>
    </main>
  );
}
