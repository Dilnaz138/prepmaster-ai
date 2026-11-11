
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Lightbulb,
  Scale,
  Clock,
} from "lucide-react";

const vocabulary = [
  {
    term: "work-life balance",
    definition: "A healthy relationship between the time spent working and other parts of life.",
    example: "Flexible schedules may help employees achieve a better work-life balance.",
  },
  {
    term: "occupational stress",
    definition: "Mental or emotional pressure experienced in connection with work.",
    example: "High workloads can contribute to occupational stress.",
  },
  {
    term: "flexible working arrangements",
    definition: "Work schedules or locations that can be adjusted to suit different needs.",
    example: "Flexible working arrangements allow some employees to organise their time differently.",
  },
  {
    term: "productivity",
    definition: "The amount of useful work produced within a particular period.",
    example: "Adequate rest can support concentration and productivity.",
  },
  {
    term: "professional obligations",
    definition: "Responsibilities that a person must fulfil as part of their job.",
    example: "Employees need to manage their professional obligations effectively.",
  },
  {
    term: "personal fulfilment",
    definition: "A feeling of satisfaction gained from meaningful personal activities or achievements.",
    example: "Hobbies and relationships can contribute to personal fulfilment.",
  },
];

const questions = [
  {
    question: "What does work-life balance refer to?",
    options: [
      "Working as many hours as possible",
      "Managing professional responsibilities alongside personal life",
      "Avoiding all professional responsibilities",
    ],
    answer: 1,
    explanation:
      "Work-life balance involves managing work alongside personal responsibilities, relationships, rest and interests.",
  },
  {
    question: "What is one possible benefit of flexible working arrangements?",
    options: [
      "They always remove workplace responsibilities",
      "They guarantee higher salaries",
      "They can give employees more control over their schedules",
    ],
    answer: 2,
    explanation:
      "Flexible arrangements can help employees organise their work around other responsibilities, depending on the job.",
  },
  {
    question: "Why is rest important for employees?",
    options: [
      "It can support concentration and productivity",
      "It makes professional skills unnecessary",
      "It eliminates every workplace challenge",
    ],
    answer: 0,
    explanation:
      "Sufficient rest can support concentration, energy and effective performance at work.",
  },
];

export default function WorkLifeBalancePage() {
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce(
    (total, item, index) =>
      total + (answers[index] === item.answer ? 1 : 0),
    0
  );

  const toggleWord = (term: string) => {
    setSavedWords((current) =>
      current.includes(term)
        ? current.filter((word) => word !== term)
        : [...current, term]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 lg:px-10">
        <Link
          to="/ielts/topics"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-teal-100 hover:text-teal-200"
        >
          <ArrowLeft size={16} />
          Back to Topic Academy
        </Link>

        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-200">
              <Scale size={15} />
              Society · B2–C1
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Work-Life Balance in Modern Society
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-teal-50 sm:text-lg">
              Explore how working patterns, technology and personal
              responsibilities influence people's lives, and consider
              ways to create more balanced working environments.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-teal-100">
              <span className="flex items-center gap-2">
                <BookOpen size={16} /> 6 min read
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap size={17} /> IELTS Topic
              </span>
              <span className="flex items-center gap-2">
                <ClipboardList size={16} /> Reading + Quiz
              </span>
            </div>
          </div>

          <div className="absolute -right-8 -top-10 hidden h-72 w-72 items-center justify-center rounded-full bg-white/35 lg:flex">
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-white/60 text-[#0D9488]">
              <Clock size={92} strokeWidth={1.2} />
            </div>
          </div>
        </header>

        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_230px]">
          <main className="min-w-0 space-y-8">

            {/* SECTION 1 */}
            <section id="introduction" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                01 · Understanding the topic
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                What is work-life balance?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Work-life balance describes how people manage their
                  professional responsibilities alongside personal activities
                  and commitments. These may include family life, education,
                  friendships, hobbies, rest and community participation.
                </p>

                <p>
                  In modern society, work patterns have changed considerably.
                  Digital communication, international business and remote
                  working have made it possible for some employees to work
                  from different locations. However, these developments can
                  also make it harder to separate professional and personal
                  time.
                </p>

                <p>
                  A balanced routine does not necessarily mean spending
                  exactly the same amount of time on work and personal
                  activities. It means finding an arrangement that allows
                  people to meet their responsibilities while maintaining
                  time for other important parts of life.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="challenges" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                02 · Modern challenges
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Why can balance be difficult to achieve?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  One major challenge is the pressure to remain constantly
                  available. Emails, messaging platforms and online meetings
                  can extend communication beyond traditional working hours.
                  As a result, some employees may find it difficult to
                  disconnect from professional tasks.
                </p>

                <p>
                  Long working hours and demanding schedules can also
                  interfere with family responsibilities, education and
                  leisure activities. In some industries, employees have
                  limited control over when they work, making flexibility
                  difficult.
                </p>

                <p>
                  Financial pressures may create additional challenges.
                  People sometimes accept extra shifts or multiple jobs to
                  meet their expenses. This shows that work-life balance is
                  influenced not only by individual choices but also by
                  economic and workplace conditions.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F3F2FF] p-5">
                <div className="flex gap-3">
                  <Lightbulb className="mt-1 shrink-0 text-[#7669D8]" size={20} />
                  <p className="text-sm leading-7 text-slate-700">
                    <strong className="text-[#35365F]">Think about it:</strong>{" "}
                    Should employers be responsible for helping workers
                    maintain a healthy balance between work and personal life?
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="technology" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                03 · Technology and flexibility
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                How technology changes working life
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Technology has created new opportunities for flexible
                  employment. Remote work can reduce commuting time and allow
                  some employees to organise their schedules more effectively.
                  Online collaboration tools also make it possible for teams
                  to work together across different locations.
                </p>

                <p>
                  Nevertheless, flexibility has potential disadvantages.
                  Working from home may reduce face-to-face interaction, and
                  digital notifications can interrupt personal activities.
                  Some workers may also feel pressure to respond immediately
                  because their colleagues can contact them online.
                </p>

                <p>
                  Therefore, technology alone cannot guarantee a better
                  work-life balance. Clear communication rules, reasonable
                  expectations and appropriate boundaries are also important.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="solutions" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                04 · Possible solutions
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Creating more balanced workplaces
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Employers can support employees through reasonable workloads,
                  predictable schedules and flexible working arrangements
                  where possible. Clear expectations about communication
                  outside working hours can also help protect personal time.
                </p>

                <p>
                  Governments may contribute through labour regulations,
                  parental leave policies and workplace safety standards.
                  These measures can establish basic protections and encourage
                  fair employment conditions.
                </p>

                <p>
                  Individuals can also organise their responsibilities,
                  communicate their availability and make time for activities
                  outside work. However, personal time-management strategies
                  are most effective when supported by reasonable workplace
                  policies.
                </p>
              </div>
            </section>

            {/* VOCABULARY */}
            <section id="vocabulary" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                  05 · Academic vocabulary
                </p>
                <h2 className="text-xl font-bold text-[#252949]">
                  Learn the key terms
                </h2>
                <p className="mt-2 text-sm text-[#858AA3]">
                  Save useful words and practise using them in your own sentences.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {vocabulary.map((item) => {
                  const saved = savedWords.includes(item.term);

                  return (
                    <div key={item.term} className="rounded-2xl border border-[#ECEEF5] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-bold text-[#33365C]">
                          {item.term}
                        </h3>
                        <button
                          onClick={() => toggleWord(item.term)}
                          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                            saved
                              ? "bg-[#E9E7FF] text-teal-200"
                              : "bg-[#F3F4F8] text-teal-100 hover:bg-[#E9E7FF]"
                          }`}
                        >
                          {saved ? "Saved ✓" : "Save"}
                        </button>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-teal-100">
                        {item.definition}
                      </p>
                      <p className="mt-3 text-sm italic leading-6 text-[#5E6482]">
                        “{item.example}”
                      </p>
                    </div>
                  );
                })}
              </div>

              {savedWords.length > 0 && (
                <p className="mt-4 text-sm font-medium text-[#6B60C8]">
                  {savedWords.length} {savedWords.length === 1 ? "word" : "words"} saved in this session.
                </p>
              )}
            </section>

            {/* QUIZ */}
            <section id="quiz" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                  06 · Check your understanding
                </p>
                <h2 className="text-xl font-bold text-[#252949]">
                  Reading comprehension quiz
                </h2>
                <p className="mt-2 text-sm text-[#858AA3]">
                  Choose one answer for each question, then check your score.
                </p>
              </div>

              <div className="space-y-6">
                {questions.map((item, index) => (
                  <div key={item.question} className="border-b border-[#EFF0F5] pb-5 last:border-0 last:pb-0">
                    <h3 className="font-semibold leading-7 text-[#33365C]">
                      {index + 1}. {item.question}
                    </h3>

                    <div className="mt-3 space-y-2">
                      {item.options.map((option, optionIndex) => {
                        const selected = answers[index] === optionIndex;
                        const correct = item.answer === optionIndex;

                        let style = selected
                          ? "border-[#8175E0] bg-[#115E59] text-[#5146A7]"
                          : "border-[#ECEEF5] text-[#69708D] hover:border-[#C9C4F4]";

                        if (submitted && correct) {
                          style = "border-[#8AC9A7] bg-[#EFFAF3] text-[#28764B]";
                        }

                        if (submitted && selected && !correct) {
                          style = "border-[#E7A1A1] bg-[#FFF2F2] text-[#A44848]";
                        }

                        return (
                          <button
                            key={option}
                            disabled={submitted}
                            onClick={() =>
                              setAnswers((current) => ({
                                ...current,
                                [index]: optionIndex,
                              }))
                            }
                            className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm transition ${style}`}
                          >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-xs font-bold">
                              {String.fromCharCode(65 + optionIndex)}
                            </span>
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <p className="mt-3 text-sm leading-6 text-teal-100">
                        {item.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {!submitted ? (
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={Object.keys(answers).length !== questions.length}
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#7064D6] px-5 py-3 text-sm font-bold text-white hover:bg-[#5E52C4] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Check answers <ArrowRight size={16} />
                </button>
              ) : (
                <div className="mt-6 rounded-2xl bg-[#115E59] p-5">
                  <div className="flex items-center gap-2 font-bold text-[#5146A7]">
                    <CheckCircle2 size={20} />
                    Your score: {score}/{questions.length}
                  </div>
                  <p className="mt-2 text-sm text-teal-100">
                    Review the explanations above, then try the quiz again.
                  </p>
                  <button
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                    }}
                    className="mt-4 rounded-xl border border-[#D9D5FA] bg-white px-4 py-2 text-sm font-semibold text-teal-200"
                  >
                    Try again
                  </button>
                </div>
              )}
            </section>

            {/* IELTS WRITING */}
            <section id="writing" className="rounded-3xl bg-[#252949] p-6 text-white shadow-sm sm:p-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#D5D1FF]">
                <GraduationCap size={15} />
                IELTS Writing Task 2
              </div>

              <h2 className="text-xl font-bold">Essay practice</h2>

              <p className="mt-4 text-[15px] leading-8 text-[#D4D7E8]">
                In many countries, employees are working longer hours than
                in the past. Some people believe that employers should be
                responsible for ensuring a good work-life balance, while
                others think individuals should manage this themselves.
                Discuss both views and give your own opinion.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">
                  Remember to:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-6 text-[#D4D7E8]">
                  <li>Discuss the responsibilities of employers.</li>
                  <li>Consider individual responsibility and time management.</li>
                  <li>Give examples to support your arguments.</li>
                  <li>Use academic vocabulary from this article.</li>
                </ul>
              </div>

              <Link
                to="/ielts/writing/feedback"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#5146A7] hover:bg-[#F0EFFF]"
              >
                Practise with AI feedback <ArrowRight size={16} />
              </Link>
            </section>
          </main>

          {/* SIDEBAR */}
          <aside className="h-fit space-y-5 lg:sticky lg:top-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-bold text-[#33365C]">
                In this article
              </h2>

              <nav className="mt-4 space-y-3 text-sm text-teal-100">
                <a className="block hover:text-[#6B5FD0]" href="#introduction">
                  Understanding the topic
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#challenges">
                  Modern challenges
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#technology">
                  Technology and flexibility
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#solutions">
                  Possible solutions
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#vocabulary">
                  Academic vocabulary
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#quiz">
                  Reading quiz
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#writing">
                  IELTS writing task
                </a>
              </nav>
            </div>

            <div className="rounded-3xl bg-[#EEEFFF] p-5">
              <div className="flex items-center gap-2 font-bold text-[#5146A7]">
                <Lightbulb size={18} />
                Study tip
              </div>
              <p className="mt-3 text-sm leading-6 text-[#686D91]">
                In IELTS essays, compare the roles of individuals,
                employers and governments when discussing workplace issues.
              </p>
            </div>

            <Link
              to="/ielts/topics"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#E4E5EF] bg-white p-4 text-sm font-bold text-[#686D91] hover:border-[#C9C4F4] hover:text-teal-200"
            >
              <ArrowLeft size={16} />
              All topics
            </Link>
          </aside>
        </div>
      </div>
    </div>
  );
}
