
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  BookOpen,
  PenLine,
  Brain,
  TrendingUp,
  Trash2,
  ChartNoAxesCombined,
} from "lucide-react";

type TestResult = {
  test: string;
  score: number;
  total: number;
  date: string;
};

type WritingEntry = {
  id: number;
  date: string;
  bandScore?: number;
};

type QuizResult = {
  date: string;
  score: number;
  total: number;
};

function readStorage<T>(key: string): T[] {
  try {
    const saved = localStorage.getItem(key);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function ProgressPage() {
  const [writingHistory, setWritingHistory] = useState<WritingEntry[]>([]);
  const [history, setHistory] = useState<TestResult[]>([]);
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>([]);

  useEffect(() => {
    setWritingHistory(readStorage<WritingEntry>("writingHistory"));
    setHistory(readStorage<TestResult>("readingHistory"));
    setQuizHistory(readStorage<QuizResult>("vocabularyQuizHistory"));
  }, []);

  const validReading = history.filter(
    (item) =>
      Number.isFinite(item.score) &&
      Number.isFinite(item.total) &&
      item.total > 0
  );

  const validQuizzes = quizHistory.filter(
    (item) =>
      Number.isFinite(item.score) &&
      Number.isFinite(item.total) &&
      item.total > 0
  );

  const writingScores = writingHistory
    .map((entry) => entry.bandScore)
    .filter(
      (score): score is number =>
        typeof score === "number" &&
        Number.isFinite(score) &&
        score > 0
    );

  const average = (values: number[]) =>
    values.length
      ? values.reduce((sum, value) => sum + value, 0) / values.length
      : null;

  const readingAverage = average(
    validReading.map((item) => (item.score / item.total) * 100)
  );

  const readingBest = validReading.length
    ? Math.max(
        ...validReading.map((item) => (item.score / item.total) * 100)
      )
    : null;

  const writingAverage = average(writingScores);
  const writingBest = writingScores.length ? Math.max(...writingScores) : null;

  const readingChart = validReading.map((item, index) => ({
    name: `Test ${index + 1}`,
    score: Math.round((item.score / item.total) * 100),
  }));

  const vocabularyChart = validQuizzes.map((item, index) => ({
    name: `Quiz ${index + 1}`,
    score: Math.round((item.score / item.total) * 100),
  }));

  const writingChart = writingHistory
    .filter(
      (item) =>
        typeof item.bandScore === "number" &&
        Number.isFinite(item.bandScore) &&
        item.bandScore > 0
    )
    .sort((a, b) => a.id - b.id)
    .map((item, index) => ({
      name: `Essay ${index + 1}`,
      band: item.bandScore,
    }));

  const clearReadingHistory = () => {
    if (!window.confirm("Delete all reading test results?")) return;
    localStorage.removeItem("readingHistory");
    setHistory([]);
  };

  const clearVocabularyHistory = () => {
    if (!window.confirm("Delete all vocabulary quiz results?")) return;
    localStorage.removeItem("vocabularyQuizHistory");
    setQuizHistory([]);
  };

  const clearWritingHistory = () => {
    if (!window.confirm("Delete all writing history?")) return;
    localStorage.removeItem("writingHistory");
    setWritingHistory([]);
  };

  const StatCard = ({
    title,
    value,
    icon: Icon,
    color,
  }: {
    title: string;
    value: string | number;
    icon: React.ElementType;
    color: string;
  }) => (
    <div className="rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm">
      <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${color}`}>
        <Icon size={21} />
      </div>
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="mt-2 text-3xl font-extrabold text-[#29294B]">
        {value}
      </h3>
    </div>
  );

  const ChartCard = ({
    title,
    description,
    data,
    dataKey,
    color,
    domain,
    emptyText,
  }: {
    title: string;
    description: string;
    data: { name: string; [key: string]: string | number | undefined }[];
    dataKey: string;
    color: string;
    domain: [number, number];
    emptyText: string;
  }) => (
    <section className="rounded-2xl border border-[#EEEEF6] bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{description}</p>

      {data.length === 0 ? (
        <div className="mt-6 rounded-xl bg-[#F8F8FC] px-4 py-10 text-center text-sm text-gray-500">
          {emptyText}
        </div>
      ) : (
        <div className="mt-6 h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#EEEEF5" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis domain={domain} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={3}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );

  return (
    <main className="min-h-screen bg-[#F8F9FD] px-5 py-9 text-[#1E2340] md:px-9">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <header className="mb-9">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-violet-500">
            YOUR LEARNING OVERVIEW
          </p>
          <h1 className="text-3xl font-extrabold md:text-4xl">
            My Progress
          </h1>
          <p className="mt-3 text-gray-500">
            Review your practice results and monitor your learning journey.
          </p>
        </header>

        {/* Reading */}
        <section className="mb-10">
          <div className="mb-5 flex items-center gap-3">
            <BookOpen className="text-violet-600" size={23} />
            <h2 className="text-xl font-bold">Reading Performance</h2>
          </div>

          <div className="mb-5 grid gap-5 sm:grid-cols-3">
            <StatCard
              title="Tests Completed"
              value={validReading.length}
              icon={BookOpen}
              color="bg-violet-50 text-violet-600"
            />
            <StatCard
              title="Average Score"
              value={readingAverage !== null ? `${Math.round(readingAverage)}%` : "—"}
              icon={TrendingUp}
              color="bg-blue-50 text-blue-600"
            />
            <StatCard
              title="Best Score"
              value={readingBest !== null ? `${Math.round(readingBest)}%` : "—"}
              icon={ChartNoAxesCombined}
              color="bg-indigo-50 text-indigo-600"
            />
          </div>

          <ChartCard
            title="Reading Score Progress"
            description="Your results across completed reading tests."
            data={readingChart}
            dataKey="score"
            color="#7772D5"
            domain={[0, 100]}
            emptyText="Complete a reading test to see your progress here."
          />

          <div className="mt-5 rounded-2xl border border-[#EEEEF6] bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h3 className="font-bold">Reading Test History</h3>
              {validReading.length > 0 && (
                <button
                  onClick={clearReadingHistory}
                  className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-700"
                >
                  <Trash2 size={16} /> Clear history
                </button>
              )}
            </div>

            {validReading.length === 0 ? (
              <p className="text-sm text-gray-500">No reading results yet.</p>
            ) : (
              <div className="space-y-3">
                {validReading.map((item, index) => (
                  <div
                    key={`${item.test}-${index}`}
                    className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#F8F8FC] p-4"
                  >
                    <div>
                      <p className="font-semibold">{item.test}</p>
                      <p className="mt-1 text-xs text-gray-400">{item.date}</p>
                    </div>
                    <span className="font-bold text-violet-600">
                      {item.score}/{item.total}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Vocabulary */}
        <section className="mb-10">
          <div className="mb-5 flex items-center gap-3">
            <Brain className="text-indigo-600" size={23} />
            <h2 className="text-xl font-bold">Vocabulary Performance</h2>
          </div>

          <ChartCard
            title="Vocabulary Quiz Progress"
            description="Your scores across completed vocabulary quizzes."
            data={vocabularyChart}
            dataKey="score"
            color="#818CF8"
            domain={[0, 100]}
            emptyText="Complete a vocabulary quiz to see your progress here."
          />

          <div className="mt-4 flex justify-end">
            {validQuizzes.length > 0 && (
              <button
                onClick={clearVocabularyHistory}
                className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-700"
              >
                <Trash2 size={16} /> Clear vocabulary history
              </button>
            )}
          </div>
        </section>

        {/* Writing */}
        <section className="mb-10">
          <div className="mb-5 flex items-center gap-3">
            <PenLine className="text-purple-600" size={23} />
            <h2 className="text-xl font-bold">Writing Performance</h2>
          </div>

          <div className="mb-5 grid gap-5 sm:grid-cols-3">
            <StatCard
              title="Essays Evaluated"
              value={writingHistory.length}
              icon={PenLine}
              color="bg-purple-50 text-purple-600"
            />
            <StatCard
              title="Average Writing Band"
              value={writingAverage !== null ? writingAverage.toFixed(1) : "—"}
              icon={TrendingUp}
              color="bg-pink-50 text-pink-600"
            />
            <StatCard
              title="Best Writing Band"
              value={writingBest !== null ? writingBest.toFixed(1) : "—"}
              icon={ChartNoAxesCombined}
              color="bg-indigo-50 text-indigo-600"
            />
          </div>

          <ChartCard
            title="IELTS Writing Progress"
            description="Your estimated AI writing band scores over time."
            data={writingChart}
            dataKey="band"
            color="#8B5CF6"
            domain={[0, 9]}
            emptyText="Complete an AI writing evaluation to see your scores here."
          />

          <p className="mt-3 text-xs text-gray-400">
            Writing scores are unofficial AI estimates, not official IELTS results.
          </p>

          <div className="mt-4 flex justify-end">
            {writingHistory.length > 0 && (
              <button
                onClick={clearWritingHistory}
                className="flex items-center gap-2 text-sm font-medium text-red-500 hover:text-red-700"
              >
                <Trash2 size={16} /> Clear writing history
              </button>
            )}
          </div>
        </section>

        <footer className="border-t border-gray-200 py-6 text-center text-xs text-gray-400">
          PrepMaster AI · Learn smarter. Practise better. Prepare with AI.
        </footer>
      </div>
    </main>
  );
}
