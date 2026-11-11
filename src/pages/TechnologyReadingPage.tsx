
import { useEffect, useState } from "react";
import { Clock, BookOpen, CheckCircle2, RotateCcw } from "lucide-react";

const passage = `Technology has changed the way students learn.
Many schools now use digital textbooks, online
platforms, and educational applications.

One important advantage is flexibility. Students
can access lessons from home and study at their
own pace. Online resources also allow learners
to review difficult topics several times.

However, technology can create challenges.
Some students become distracted by social media,
while others do not have reliable internet access.

Teachers play an important role in helping
students use technology effectively. Combining
traditional teaching methods with digital tools
can create a balanced learning environment.`;

const questions = [
  {
    question: "What is one advantage of online learning?",
    options: [
      "It removes the need for teachers",
      "Students can study at their own pace",
      "It guarantees perfect grades",
    ],
    answer: 1,
    explanation:
      "The passage explains that online learning allows students to study at their own pace.",
  },
  {
    question: "What can distract students?",
    options: ["Social media", "Digital textbooks", "Teachers"],
    answer: 0,
    explanation: "The passage says social media can distract students.",
  },
  {
    question: "What problem do some students face?",
    options: [
      "Too many teachers",
      "Unreliable internet access",
      "Too many classrooms",
    ],
    answer: 1,
    explanation: "Some students do not have reliable internet access.",
  },
  {
    question: "Why are online resources useful?",
    options: [
      "They replace all exams",
      "They make school unnecessary",
      "They allow students to review topics",
    ],
    answer: 2,
    explanation:
      "Online resources allow learners to review difficult topics several times.",
  },
  {
    question: "What role do teachers play?",
    options: [
      "They help students use technology effectively",
      "They stop students using computers",
      "They replace online platforms",
    ],
    answer: 0,
    explanation: "Teachers help students use technology effectively.",
  },
  {
    question: "What creates a balanced learning environment?",
    options: [
      "Only traditional teaching",
      "Only digital learning",
      "Combining traditional and digital methods",
    ],
    answer: 2,
    explanation:
      "Combining traditional teaching methods with digital tools creates a balanced learning environment.",
  },
];

export default function TechnologyReadingPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / questions.length) * 100;

  const saveResult = () => {
    try {
      const result = {
        test: "Technology in Education",
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
    setTimeLeft(15 * 60);
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
            Technology in Education
          </h1>
          <p className="mt-3 text-gray-500">
            Reading Practice · Medium Level
          </p>
        </header>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#EEEEF6] bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BookOpen size={22} />
            </div>
            <div>
              <p className="font-bold">Technology in Education</p>
              <p className="text-sm text-gray-500">
                6 questions · 15 minutes
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
              Technology in Education
            </h2>

            <p className="whitespace-pre-line text-[15px] leading-8 text-gray-600">
              {passage}
            </p>

            <div className="mt-7 rounded-xl bg-[#F8F7FF] p-4">
              <p className="text-sm font-semibold text-violet-700">
                Reading tip
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Look for keywords in the questions and find the
                corresponding information in the passage.
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
