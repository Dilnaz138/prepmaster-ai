
import { Link } from "react-router-dom";
import {
  BookOpen,
  Clock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const tests = [
  {
    id: 1,
    title: "Urban Gardening",
    level: "Easy",
    questions: 4,
    duration: "10 min",
    description:
      "Explore how urban gardens provide fresh food and green spaces in modern cities.",
    path: "/ielts/reading",
    color: "bg-green-50 text-green-600",
  },
  {
    id: 2,
    title: "Technology in Education",
    level: "Medium",
    questions: 6,
    duration: "15 min",
    description:
      "Discover how digital tools are changing modern education and learning.",
    path: "/ielts/reading/technology",
    color: "bg-blue-50 text-blue-600",
  },
  {
    id: 3,
    title: "Climate Change",
    level: "Hard",
    questions: 8,
    duration: "20 min",
    description:
      "Understand the causes and consequences of climate change around the world.",
    path: "/ielts/reading/climate",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function ReadingTestsPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FD] px-5 py-9 text-[#1E2340] md:px-9">
      <div className="mx-auto max-w-6xl">

        <header className="mb-9">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-violet-500">
            IELTS PREPARATION
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            Reading Tests
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-gray-500">
            Choose a reading passage, practise IELTS-style questions
            and track your results.
          </p>
        </header>

        <div className="mb-8 rounded-3xl bg-gradient-to-r from-[#716BD0] to-[#9690EA] p-7 text-white md:p-9">
          <div className="flex items-center gap-3">
            <BookOpen size={28} />
            <h2 className="text-2xl font-bold">Build your reading skills</h2>
          </div>
          <p className="mt-3 max-w-xl leading-7 text-violet-100">
            Practise understanding main ideas, finding details and
            identifying information in academic texts.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm text-violet-100">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} /> Interactive questions
            </span>
            <span className="flex items-center gap-2">
              <Clock size={17} /> Timed practice
            </span>
          </div>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-bold">Available Practice Tests</h2>
          <p className="mt-1 text-sm text-gray-500">
            Select a test to begin.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <article
              key={test.id}
              className="flex flex-col rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${test.color}`}>
                  <BookOpen size={23} />
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    test.level === "Easy"
                      ? "bg-green-50 text-green-700"
                      : test.level === "Medium"
                      ? "bg-yellow-50 text-yellow-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {test.level}
                </span>
              </div>

              <h3 className="text-xl font-bold">{test.title}</h3>

              <p className="mt-3 flex-1 text-sm leading-6 text-gray-500">
                {test.description}
              </p>

              <div className="mt-5 flex items-center gap-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
                <span>{test.questions} questions</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {test.duration}
                </span>
              </div>

              <Link
                to={test.path}
                className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                Start Test <ArrowRight size={17} />
              </Link>
            </article>
          ))}
        </div>

        <footer className="mt-12 border-t border-gray-200 py-6 text-center text-xs text-gray-400">
          PrepMaster AI · Learn smarter. Practise better. Prepare with AI.
        </footer>
      </div>
    </main>
  );
}
