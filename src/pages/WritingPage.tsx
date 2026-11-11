
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WritingPage() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      <div className="mb-10">
        <span className="text-sm font-semibold text-violet-600">
          PREPMASTER AI · WRITING ACADEMY
        </span>

        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          Master IELTS Writing
        </h1>

        <p className="mt-3 max-w-2xl text-gray-500">
          Learn how to develop strong arguments, structure
          sophisticated essays, and connect ideas naturally.
        </p>
      </div>

      <section className="rounded-2xl border border-violet-100 bg-violet-50 p-8">
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="text-violet-600" size={28} />
          <span className="text-sm font-medium text-violet-700">
            WRITING FOUNDATIONS
          </span>
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Lesson 1: How to Write a High-Level IELTS Essay
        </h2>

        <p className="mt-3 max-w-2xl text-gray-600">
          Discover what makes an essay clear, convincing,
          well-organised and cohesive — without relying
          on memorised templates or excessive linking words.
        </p>

        <Link
          to="/ielts/writing/foundations"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-700"
        >
          Start Learning
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}
