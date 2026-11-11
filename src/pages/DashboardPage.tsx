
import {
  ArrowRight,
  BookOpen,
  Brain,
  ChartNoAxesCombined,
  GraduationCap,
  PenLine,
  Sparkles,
  Target,
  BookMarked,
} from "lucide-react";
import { Link } from "react-router-dom";

const learningCards = [
  {
    title: "Reading Practice",
    description: "Improve comprehension with IELTS reading exercises.",
    icon: BookOpen,
    path: "/ielts/reading",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Writing Practice",
    description: "Develop your academic writing skills.",
    icon: PenLine,
    path: "/ielts/writing",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Topic Academy",
    description: "Explore 15 articles and learn academic vocabulary.",
    icon: GraduationCap,
    path: "/ielts/topics",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "AI Writing Tutor",
    description: "Get AI-powered feedback on your writing.",
    icon: Brain,
    path: "/ai-tutor",
    color: "bg-pink-50 text-pink-600",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FD] px-5 py-7 text-[#1E2340] md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-violet-600">
              PrepMaster AI
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Your personal IELTS learning space
            </p>
          </div>

          <Link
            to="/progress"
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#555477] shadow-sm transition hover:bg-violet-50"
          >
            <ChartNoAxesCombined size={18} />
            My Progress
          </Link>
        </header>

        {/* Welcome */}
        <section className="mb-8">
          <p className="mb-2 text-sm font-semibold text-violet-500">
            YOUR LEARNING JOURNEY
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Welcome back!
          </h2>
          <p className="mt-3 max-w-xl text-gray-500">
            Build your English skills, practise IELTS tasks and move closer
            to your academic goals.
          </p>
        </section>

        {/* Main Banner */}
        <section className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#716BD0] to-[#9690EA] p-7 text-white shadow-sm md:p-9">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-violet-100">
              <Sparkles size={17} />
              YOUR IELTS JOURNEY
            </div>

            <h3 className="text-2xl font-bold md:text-3xl">
              Learn smarter. Prepare better.
            </h3>

            <p className="mt-3 max-w-lg leading-7 text-violet-100">
              Discover learning materials, practise academic English
              and improve your writing with AI-powered feedback.
            </p>

            <Link
              to="/ielts/topics"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50"
            >
              Explore Topic Academy
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="absolute -right-10 -top-16 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div className="absolute -bottom-24 right-32 h-48 w-48 rounded-full bg-white/10" />
        </section>

        {/* Learning Features */}
        <section className="mb-10">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold">Your Learning Space</h3>
              <p className="mt-1 text-sm text-gray-500">
                Choose what you want to practise today.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {learningCards.map((card) => {
              const Icon = card.icon;

              return (
                <Link
                  key={card.title}
                  to={card.path}
                  className="group rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${card.color}`}>
                    <Icon size={23} />
                  </div>

                  <h4 className="font-bold">{card.title}</h4>

                  <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                    {card.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-600">
                    Open feature
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Bottom Sections */}
        <div className="grid gap-5 lg:grid-cols-2">

          <section className="rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Target size={22} />
              </div>
              <div>
                <h3 className="font-bold">Set Your Goals</h3>
                <p className="text-sm text-gray-500">
                  Keep your IELTS preparation focused.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Consistent practice in reading, writing and academic vocabulary
              can help you develop the skills needed for IELTS.
            </p>

            <Link
              to="/ielts"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-800"
            >
              Explore IELTS preparation
              <ArrowRight size={16} />
            </Link>
          </section>

          <section className="rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <BookMarked size={22} />
              </div>
              <div>
                <h3 className="font-bold">Keep Learning</h3>
                <p className="text-sm text-gray-500">
                  Build your academic English vocabulary.
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-6 text-gray-500">
              Review useful vocabulary, explore new topics and test your
              understanding with interactive exercises.
            </p>

            <Link
              to="/ielts/vocabulary/review"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-600 hover:text-violet-800"
            >
              Review vocabulary
              <ArrowRight size={16} />
            </Link>
          </section>

        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-[#E9E9F2] py-6 text-center text-xs text-gray-400">
          PrepMaster AI · Learn smarter. Practise better. Prepare with AI.
        </footer>

      </div>
    </div>
  );
}
