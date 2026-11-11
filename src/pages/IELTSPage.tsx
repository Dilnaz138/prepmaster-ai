
import { Link } from "react-router-dom";
import {
  BookOpen,
  PenLine,
  Brain,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const modules = [
  {
    name: "Reading Practice",
    icon: BookOpen,
    description: "Improve reading comprehension with IELTS passages and interactive questions.",
    path: "/ielts/reading/tests",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Writing Practice",
    icon: PenLine,
    description: "Learn essay structure, develop arguments and practise IELTS writing tasks.",
    path: "/ielts/writing",
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "Topic Academy",
    icon: Brain,
    description: "Explore 15 academic topics, expand your vocabulary and develop ideas.",
    path: "/ielts/topics",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    name: "AI Writing Tutor",
    icon: Sparkles,
    description: "Submit your writing and receive AI-powered feedback to improve your work.",
    path: "/ai-tutor",
    color: "bg-pink-50 text-pink-600",
  },
];

export default function IELTSPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FD] px-5 py-10 text-[#1E2340] md:px-10">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-violet-500">
            PREPMASTER AI
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            IELTS Preparation
          </h1>
          <p className="mt-3 max-w-2xl leading-7 text-gray-500">
            Everything you need to develop your academic English skills
            and prepare for the IELTS examination.
          </p>
        </div>

        <div className="mb-9 rounded-3xl bg-gradient-to-r from-[#716BD0] to-[#9690EA] p-7 text-white md:p-9">
          <h2 className="text-2xl font-bold">
            Your journey starts here.
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-violet-100">
            Practise reading, improve your writing and explore academic
            topics with interactive learning tools and AI feedback.
          </p>
          <Link
            to="/ielts/topics"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
          >
            Explore learning topics <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mb-5">
          <h2 className="text-xl font-bold">Learning Modules</h2>
          <p className="mt-1 text-sm text-gray-500">
            Choose a section to continue learning.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {modules.map(({ name, icon: Icon, description, path, color }) => (
            <Link
              key={name}
              to={path}
              className="group rounded-2xl border border-[#EEEEF6] bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
                <Icon size={24} />
              </div>

              <h3 className="text-xl font-bold">{name}</h3>
              <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                {description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-violet-600">
                Open module
                <ArrowRight
                  size={17}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>

        <footer className="mt-12 border-t border-gray-200 py-6 text-center text-xs text-gray-400">
          PrepMaster AI · Learn smarter. Practise better. Prepare with AI.
        </footer>

      </div>
    </main>
  );
}
