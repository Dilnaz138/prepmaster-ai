import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Clock3,
  GraduationCap,
  HeartPulse,
  Laptop,
  Leaf,
  Search,
  Sparkles,
  Users,
} from "lucide-react";

type Category =
  | "All topics"
  | "Education"
  | "Environment"
  | "Technology"
  | "Society"
  | "Health";

type Article = {
  title: string;
  category: Exclude<Category, "All topics">;
  level: string;
  readingTime: string;
  description: string;
  path?: string;
  icon: typeof BookOpen;
  accent: string;
  number: string;
};

const articles: Article[] = [
  {
    title: "Should Governments Invest More in Renewable Energy?",
    category: "Environment",
    level: "B2–C1",
    readingTime: "7 min read",
    description:
      "Explore clean energy, economic challenges, energy security, and the choices shaping a more sustainable future.",
    path: "/ielts/topics/renewable-energy",
    icon: Leaf,
    accent: "from-emerald-500/15 to-teal-500/5 text-emerald-700",
    number: "01",
  },
  {
    title: "Air Pollution and Urban Development",
    category: "Environment",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/air-pollution",
    description:
      "Explore the causes of urban air pollution, its effects on communities, and possible solutions.",
    icon: Leaf,
    accent: "from-emerald-500/15 to-teal-500/5 text-emerald-700",
    number: "02",
  },
  {
    title: "Plastic Pollution and Waste Management",
    category: "Environment",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/plastic-pollution",
    description:
      "Learn about consumer habits, recycling systems, and responsibility for reducing waste.",
    icon: Leaf,
    accent: "from-emerald-500/15 to-teal-500/5 text-emerald-700",
    number: "03",
  },
  {
    title: "Is Online Education as Effective as Classroom Learning?",
    category: "Education",
    level: "B2–C1",
    readingTime: "6 min read",
    description:
      "Understand digital access, student motivation, learning outcomes, and the continuing role of the classroom.",
    path: "/ielts/topics/online-education",
    icon: GraduationCap,
    accent: "from-blue-500/15 to-indigo-500/5 text-blue-700",
    number: "04",
  },
  {
    title: "The Importance of Higher Education",
    category: "Education",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/higher-education",
    description:
      "Consider university education, career opportunities, practical skills, and equal access to learning.",
    icon: GraduationCap,
    accent: "from-blue-500/15 to-indigo-500/5 text-blue-700",
    number: "05",
  },
  {
    title: "Why Learning Foreign Languages Matters",
    category: "Education",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/foreign-languages",
    description:
      "Explore communication, cultural understanding, education, and opportunities in a connected world.",
    icon: GraduationCap,
    accent: "from-blue-500/15 to-indigo-500/5 text-blue-700",
    number: "06",
  },
  {
    title: "How Artificial Intelligence Is Changing Employment",
    category: "Technology",
    level: "B2–C1",
    readingTime: "7 min read",
    description:
      "Examine automation, changing job markets, new career opportunities, and the skills workers may need.",
    path: "/ielts/topics/ai-employment",
    icon: Laptop,
    accent: "from-violet-500/15 to-fuchsia-500/5 text-violet-700",
    number: "07",
  },
  {
    title: "Social Media and Society",
    category: "Technology",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/social-media",
    description:
      "Examine online communication, misinformation, digital communities, and privacy.",
    icon: Laptop,
    accent: "from-violet-500/15 to-fuchsia-500/5 text-violet-700",
    number: "08",
  },
  {
    title: "Technology and Personal Privacy",
    category: "Technology",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/technology-privacy",
    description:
      "Understand personal data, online security, and the balance between convenience and privacy.",
    icon: Laptop,
    accent: "from-violet-500/15 to-fuchsia-500/5 text-violet-700",
    number: "09",
  },
  {
    title: "Urbanisation and Public Transport",
    category: "Society",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/urbanisation",
    description:
      "Explore city growth, traffic, public transport, and the planning of liveable communities.",
    icon: Users,
    accent: "from-amber-500/15 to-orange-500/5 text-amber-700",
    number: "10",
  },
  {
    title: "Volunteering and Community Service",
    category: "Society",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/volunteering",
    description:
      "Consider civic responsibility, community support, and the value of volunteering.",
    icon: Users,
    accent: "from-amber-500/15 to-orange-500/5 text-amber-700",
    number: "11",
  },
  {
    title: "Work-Life Balance in Modern Society",
    category: "Society",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/work-life-balance",
    description:
      "Learn about working patterns, personal time, productivity, and family responsibilities.",
    icon: Users,
    accent: "from-amber-500/15 to-orange-500/5 text-amber-700",
    number: "12",
  },
  {
    title: "Healthy Lifestyle and Nutrition",
    category: "Health",
    level: "B2–C1",
    readingTime: "Coming soon",
    description:
      "Explore balanced nutrition, physical activity, prevention, and public health education.",
    icon: HeartPulse,
    accent: "from-rose-500/15 to-pink-500/5 text-rose-700",
    number: "13",
    path: "/ielts/topics/healthy-lifestyle",
  },
  {
    title: "Public Healthcare Systems",
    category: "Health",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/public-healthcare",
    description:
      "Consider healthcare access, preventive services, public funding, and health inequalities.",
    icon: HeartPulse,
    accent: "from-rose-500/15 to-pink-500/5 text-rose-700",
    number: "14",
  },
  {
    title: "Mental Well-being in Modern Society",
    category: "Health",
    level: "B2–C1",
    readingTime: "Coming soon",
    path: "/ielts/topics/mental-wellbeing",
    description:
      "Explore stress, social support, daily routines, and the importance of mental well-being.",
    icon: HeartPulse,
    accent: "from-rose-500/15 to-pink-500/5 text-rose-700",
    number: "15",
  },
];

const categories: Category[] = [
  "All topics",
  "Education",
  "Environment",
  "Technology",
  "Society",
  "Health",
];

export default function TopicAcademyPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All topics");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All topics" || article.category === activeCategory;

      const searchableText = [
        article.title,
        article.description,
        article.category,
        article.title.toLowerCase().includes("artificial intelligence")
          ? "AI"
          : "",
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !query ||
        (query.length <= 2
          ? searchableText.split(/[^a-z0-9]+/).includes(query)
          : searchableText.includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-wide text-violet-200">
            <Sparkles size={14} />
            PREPMASTER AI · TOPIC ACADEMY
          </div>

          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
              Learn beyond the vocabulary list
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build knowledge.
              <span className="block text-violet-300">Write with confidence.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Explore important IELTS themes through informative articles,
              useful academic vocabulary, and short reading checks. Build your
              understanding before you develop your own ideas.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <BookOpen size={17} className="text-violet-300" />
              15 learning topics
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <GraduationCap size={18} className="text-violet-300" />
              Academic vocabulary
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <Sparkles size={17} className="text-violet-300" />
              IELTS practice
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
              Explore the library
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Choose a topic to explore
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              Browse five IELTS themes. New reading guides are being added to
              the library.
            </p>
          </div>

          <div className="relative w-full sm:max-w-xs">
            <Search
              size={18}
              className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search topics..."
              aria-label="Search topics"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter by category">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-violet-600 text-white shadow-sm shadow-violet-600/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-violet-200 hover:text-violet-700"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p className="mt-5 text-sm text-slate-500">
          Showing {filteredArticles.length} of {articles.length} topics
        </p>

        <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article) => {
            const Icon = article.icon;
            return (
              <article
                key={article.number}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg hover:shadow-slate-200/60"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${article.accent}`}
                  >
                    <Icon size={23} />
                  </div>
                  <span className="text-sm font-semibold tracking-widest text-slate-300">
                    {article.number}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold">
                  <span className="rounded-full bg-violet-50 px-3 py-1.5 text-violet-700">
                    {article.category}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">
                    {article.level}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                    <Clock3 size={14} />
                    {article.readingTime}
                  </span>
                  {article.path ? (
                    <Link
                      to={article.path}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition group-hover:gap-3 hover:text-violet-900"
                    >
                      Read article
                      <ArrowRight size={17} />
                    </Link>
                  ) : (
                    <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-500">
                      Coming soon
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {filteredArticles.length === 0 && (
          <div className="mt-7 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
            <BookOpen className="mx-auto text-slate-300" size={28} />
            <h3 className="mt-3 font-semibold text-slate-800">No topics found</h3>
            <p className="mt-1 text-sm text-slate-500">
              Try another search or choose a different category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All topics");
              }}
              className="mt-4 text-sm font-semibold text-violet-700 hover:text-violet-900"
            >
              Clear filters
            </button>
          </div>
        )}

        <div className="mt-12 rounded-2xl border border-violet-100 bg-violet-50/70 p-6 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-8">
          <div>
            <p className="text-sm font-semibold text-violet-700">
              A better way to prepare
            </p>
            <h3 className="mt-2 text-xl font-bold text-slate-900">
              Understand the topic before you write.
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Read actively, notice how academic words are used, and then apply
              what you have learned in your own IELTS response.
            </p>
          </div>
          <div className="mt-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-sm sm:mt-0">
            <BookOpen size={23} />
          </div>
        </div>
      </section>
    </main>
  );
}
