
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Heart,
  Lightbulb,
  Users,
} from "lucide-react";

const vocabulary = [
  {
    term: "mental well-being",
    definition: "A person's emotional, psychological and social well-being.",
    example: "Mental well-being is an important part of overall quality of life.",
  },
  {
    term: "social support",
    definition: "Help and encouragement received from family, friends or a community.",
    example: "Social support can help people manage difficult situations.",
  },
  {
    term: "work-related stress",
    definition: "Pressure or tension caused by responsibilities and conditions at work.",
    example: "Unrealistic deadlines can contribute to work-related stress.",
  },
  {
    term: "awareness campaign",
    definition: "An organised activity designed to inform the public about an issue.",
    example: "An awareness campaign can encourage people to discuss mental well-being.",
  },
  {
    term: "stigma",
    definition: "Negative attitudes or unfair beliefs about a person or group.",
    example: "Social stigma can prevent people from seeking appropriate support.",
  },
  {
    term: "quality of life",
    definition: "A person's general level of comfort, health and satisfaction.",
    example: "Access to education and community services can improve quality of life.",
  },
];

const questions = [
  {
    question: "Which statement best describes mental well-being?",
    options: [
      "It only refers to the absence of physical illness",
      "It includes emotional, psychological and social well-being",
      "It is determined entirely by financial income",
    ],
    answer: 1,
    explanation:
      "Mental well-being is connected to emotional, psychological and social aspects of life.",
  },
  {
    question: "What is one possible benefit of social support?",
    options: [
      "It guarantees that problems disappear",
      "It removes the need for public services",
      "It can help people manage difficult situations",
    ],
    answer: 2,
    explanation:
      "Support from family, friends and communities can help people deal with everyday challenges.",
  },
  {
    question: "Why can public awareness campaigns be useful?",
    options: [
      "They can reduce misunderstanding and stigma",
      "They can replace all professional services",
      "They can make every person think in the same way",
    ],
    answer: 0,
    explanation:
      "Awareness campaigns can provide reliable information and encourage more open discussions.",
  },
];

export default function MentalWellbeingPage() {
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
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-purple-100 hover:text-purple-200"
        >
          <ArrowLeft size={16} />
          Back to Topic Academy
        </Link>

        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-200">
              <Heart size={15} />
              Health · B2–C1
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Mental Well-being in Modern Society
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-purple-50 sm:text-lg">
              Discover how modern lifestyles, social relationships and public
              awareness influence mental well-being in communities.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-purple-100">
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
              <Heart size={90} strokeWidth={1.2} />
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
                What is mental well-being?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Mental well-being is an important part of a person's overall
                  quality of life. It involves emotional, psychological and
                  social aspects of everyday experience. It can influence how
                  people communicate, make decisions, manage responsibilities
                  and participate in their communities.
                </p>

                <p>
                  Mental well-being is not simply the absence of difficulties.
                  People experience different emotions and challenges
                  throughout their lives. A supportive environment, meaningful
                  relationships, access to education and suitable public
                  services can all contribute to a healthier society.
                </p>

                <p>
                  In recent years, mental well-being has become a more visible
                  topic in schools, workplaces and public discussions. This
                  change reflects a growing understanding that social
                  conditions are closely connected to people's everyday lives.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="modern-life" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                02 · Modern lifestyles
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                The influence of modern society
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Modern technology has changed the way people communicate,
                  study and work. Social networks allow individuals to exchange
                  information and maintain relationships across long
                  distances. At the same time, constant notifications and
                  pressure to remain available can make it harder to separate
                  work, study and personal time.
                </p>

                <p>
                  Work-related stress is another important social issue.
                  Heavy workloads, unclear expectations and limited
                  opportunities for rest can affect employees and their
                  working environments. Educational institutions also face
                  the challenge of supporting students who balance academic
                  responsibilities with other commitments.
                </p>

                <p>
                  However, technology and modern lifestyles do not have only
                  negative effects. Online communities can connect people with
                  similar interests, while digital services can make useful
                  information and support more accessible.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F3F2FF] p-5">
                <div className="flex gap-3">
                  <Lightbulb className="mt-1 shrink-0 text-[#7669D8]" size={20} />
                  <p className="text-sm leading-7 text-slate-700">
                    <strong className="text-[#35365F]">Think about it:</strong>{" "}
                    Does modern technology improve people's social lives, or
                    does it sometimes create additional pressure?
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="relationships" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                03 · Relationships and communities
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                The importance of social support
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Human relationships play an important role in community
                  life. Family members, friends, classmates and colleagues can
                  provide encouragement, practical assistance and a sense of
                  belonging. Social support can help people feel connected
                  rather than isolated.
                </p>

                <p>
                  Schools and universities can contribute by creating
                  respectful environments where students feel comfortable
                  discussing challenges. Employers can also support their
                  workforce through fair policies, reasonable workloads and
                  access to appropriate workplace support.
                </p>

                <p>
                  Community organisations, sports clubs and volunteering
                  projects offer additional opportunities for social
                  participation. These activities can strengthen relationships
                  and help people develop a shared sense of responsibility.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="awareness" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                04 · Public awareness
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Reducing stigma through education
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Stigma can create barriers to open conversations about
                  mental well-being. Misunderstanding and negative stereotypes
                  may cause people to feel uncomfortable discussing personal
                  difficulties or asking where appropriate support is
                  available.
                </p>

                <p>
                  Public awareness campaigns can help address these problems.
                  Schools, universities, governments and community
                  organisations can share reliable information and encourage
                  respectful discussions. Educational programmes can also
                  explain where people can find qualified support.
                </p>

                <p>
                  A responsible approach recognises that individuals have
                  different experiences and needs. Public information should
                  avoid oversimplifying complex issues and should direct people
                  towards appropriate professional services when necessary.
                </p>
              </div>
            </section>

            {/* SECTION 5 */}
            <section id="solutions" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                05 · A shared responsibility
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                How can society create supportive environments?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Improving mental well-being requires cooperation between
                  individuals, educational institutions, employers, healthcare
                  providers and governments. No single organisation can solve
                  every social challenge independently.
                </p>

                <p>
                  Governments can invest in accessible services, education and
                  community programmes. Schools can teach students about
                  respectful communication and provide information about
                  available support. Employers can develop policies that
                  encourage fair working conditions and a healthier balance
                  between professional and personal responsibilities.
                </p>

                <p>
                  Ultimately, a supportive society is one in which people are
                  treated with respect, reliable information is available and
                  asking for appropriate help is not viewed negatively.
                </p>
              </div>
            </section>

            {/* VOCABULARY */}
            <section id="vocabulary" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-6">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                  06 · Academic vocabulary
                </p>

                <h2 className="text-xl font-bold text-[#252949]">
                  Learn the key terms
                </h2>

                <p className="mt-2 text-sm text-[#858AA3]">
                  Save useful words for revision and practise using them in
                  your own sentences.
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
                              ? "bg-[#E9E7FF] text-purple-200"
                              : "bg-[#F3F4F8] text-purple-100 hover:bg-[#E9E7FF]"
                          }`}
                        >
                          {saved ? "Saved ✓" : "Save"}
                        </button>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-purple-100">
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
                  07 · Check your understanding
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
                      <p className="mt-3 text-sm leading-6 text-purple-100">
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

                  <p className="mt-2 text-sm text-purple-100">
                    Review the explanations above, then try the quiz again.
                  </p>

                  <button
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                    }}
                    className="mt-4 rounded-xl border border-[#D9D5FA] bg-white px-4 py-2 text-sm font-semibold text-purple-200"
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
                In modern society, people are experiencing increasing levels
                of stress due to work, education and technology. Some people
                believe that governments should take responsibility for
                improving public mental well-being, while others think this
                is mainly an individual responsibility. Discuss both views
                and give your own opinion.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">
                  Remember to:
                </p>

                <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-6 text-[#D4D7E8]">
                  <li>Discuss both perspectives fairly.</li>
                  <li>Give relevant examples.</li>
                  <li>Explain your own opinion clearly.</li>
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

              <nav className="mt-4 space-y-3 text-sm text-purple-100">
                <a className="block hover:text-[#6B5FD0]" href="#introduction">
                  Understanding the topic
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#modern-life">
                  Modern lifestyles
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#relationships">
                  Social support
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#awareness">
                  Public awareness
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
                <Users size={18} />
                Study tip
              </div>

              <p className="mt-3 text-sm leading-6 text-[#686D91]">
                In IELTS essays about society, connect individual experiences
                with wider factors such as education, public policy and
                community support.
              </p>
            </div>

            <Link
              to="/ielts/topics"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#E4E5EF] bg-white p-4 text-sm font-bold text-[#686D91] hover:border-[#C9C4F4] hover:text-purple-200"
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
