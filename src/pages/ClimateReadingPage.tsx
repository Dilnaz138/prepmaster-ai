
import { useEffect, useState } from "react";
import { Clock, BookOpen, CheckCircle2, RotateCcw } from "lucide-react";

const passage = `Climate change is one of the most significant
environmental challenges facing the world today.
Rising global temperatures affect ecosystems,
agriculture, and human communities.

One major cause is the increasing concentration
of greenhouse gases in the atmosphere. Human
activities, particularly burning fossil fuels
and deforestation, contribute to these emissions.

Scientists have observed changes in rainfall
patterns, rising sea levels, and more frequent
extreme weather events in many regions.

Governments are introducing policies to reduce
emissions, while businesses are investing in
renewable energy technologies. Individuals can
also contribute by conserving energy and reducing
waste.

However, addressing climate change requires
international cooperation and long-term planning.`;

const questions = [
  {
    question: "What is a major cause of climate change?",
    options: [
      "Greenhouse gas emissions",
      "Ocean exploration",
      "Improved agriculture",
    ],
    answer: 0,
    explanation:
      "The passage identifies increasing greenhouse gas concentrations as a major cause of climate change.",
  },
  {
    question: "Which human activity contributes to emissions?",
    options: [
      "Planting trees",
      "Burning fossil fuels",
      "Using public libraries",
    ],
    answer: 1,
    explanation:
      "Burning fossil fuels is one of the human activities that contributes to greenhouse gas emissions.",
  },
  {
    question: "What have scientists observed?",
    options: [
      "Stable sea levels everywhere",
      "No changes in rainfall",
      "Changes in rainfall patterns",
    ],
    answer: 2,
    explanation:
      "The passage mentions changes in rainfall patterns, rising sea levels and extreme weather events.",
  },
  {
    question: "What are businesses investing in?",
    options: [
      "Renewable energy technologies",
      "More deforestation",
      "Traditional paper records",
    ],
    answer: 0,
    explanation:
      "Businesses are investing in renewable energy technologies to support emissions reduction.",
  },
  {
    question: "How can individuals contribute?",
    options: [
      "Increasing energy consumption",
      "Reducing waste",
      "Ignoring environmental issues",
    ],
    answer: 1,
    explanation:
      "Individuals can help by conserving energy and reducing waste.",
  },
  {
    question: "What does climate action require?",
    options: [
      "Only local decisions",
      "Short-term solutions alone",
      "International cooperation",
    ],
    answer: 2,
    explanation:
      "The final paragraph explains that climate action requires international cooperation and long-term planning.",
  },
  {
    question: "Which sector is affected by rising temperatures?",
    options: [
      "Agriculture",
      "Only entertainment",
      "Only transportation",
    ],
    answer: 0,
    explanation:
      "The first paragraph states that rising temperatures affect agriculture, ecosystems and human communities.",
  },
  {
    question: "What is the main purpose of the passage?",
    options: [
      "To describe a single weather event",
      "To explain climate change and responses to it",
      "To promote one renewable energy company",
    ],
    answer: 1,
    explanation:
      "The passage discusses climate change, its causes, its effects and possible responses.",
  },
];

export default function ClimateReadingPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20 * 60);

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  const saveResult = () => {
    try {
      const result = {
        test: "Climate Change",
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
    setTimeLeft(20 * 60);
    setSubmitted(false);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <main className="min-h-screen bg-[#F8F9FD] px-5 py-9 text-[#1E2340] md:px-9">
      <div className="mx-auto max-w-7xl">

        <header className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-violet-500">
            IELTS PREPARATION
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Climate Change
          </h1>
          <p className="mt-3 text-gray-500">
            Reading Practice · Hard Level
          </p>
        </header>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#EEEEF6] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <BookOpen size={22} />
            </div>
            <div>
              <p className="font-bold">Climate Change</p>
              <p className="text-sm text-gray-500">
                8 questions · 20 minutes
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

        <div className="grid items-start gap-6 lg:grid-cols-2">

          <article className="rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm md:p-8">
            <div className="mb-5 flex items-center gap-2 text-violet-600">
              <BookOpen size={20} />
              <span className="text-sm font-bold uppercase tracking-wide">
                Reading Passage
              </span>
            </div>

            <h2 className="mb-5 text-2xl font-bold">
              Climate Change
            </h2>

            <p className="whitespace-pre-line text-[15px] leading-8 text-gray-600">
              {passage}
            </p>

            <div className="mt-7 rounded-xl bg-[#F8F7FF] p-4">
              <p className="text-sm font-semibold text-violet-700">
                Reading tip
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Focus on the main ideas and supporting details.
                Pay attention to cause-and-effect relationships
                and the author's overall purpose.
              </p>
            </div>
          </article>

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
                          <CheckCircle2
                            className="ml-auto shrink-0 text-green-600"
                            size={17}
                          />
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
