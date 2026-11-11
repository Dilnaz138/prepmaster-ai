
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const vocabulary = [
  {
    term: "universal healthcare",
    definition: "A system that aims to provide healthcare services to everyone.",
    example: "Universal healthcare can reduce financial barriers to treatment.",
  },
  {
    term: "access to care",
    definition: "The ability to obtain suitable health services when needed.",
    example: "Rural communities may have less access to care than large cities.",
  },
  {
    term: "preventive care",
    definition: "Medical services that help prevent illness or identify problems early.",
    example: "Vaccinations and regular check-ups are forms of preventive care.",
  },
  {
    term: "public funding",
    definition: "Money provided by the government, usually through taxation.",
    example: "Public funding can support hospitals and essential medical services.",
  },
  {
    term: "health inequality",
    definition: "An unfair difference in health or healthcare between groups.",
    example: "Long travel distances can contribute to health inequality.",
  },
  {
    term: "healthcare workforce",
    definition: "People who provide health services, including doctors and nurses.",
    example: "A strong healthcare workforce is essential for an effective system.",
  },
];

const questions = [
  {
    question: "What is one central aim of universal healthcare?",
    options: [
      "To make all medical services private",
      "To help everyone obtain essential healthcare",
      "To replace all local clinics with large hospitals",
    ],
    answer: 1,
    explanation:
      "Universal healthcare aims to make essential health services available to everyone.",
  },
  {
    question: "Why is preventive care important?",
    options: [
      "It can identify health problems earlier",
      "It guarantees nobody becomes ill",
      "It removes the need for medical staff",
    ],
    answer: 0,
    explanation:
      "Preventive care can identify risks and health problems earlier, although it cannot prevent every illness.",
  },
  {
    question: "Which factor can make healthcare access difficult?",
    options: [
      "A convenient local clinic",
      "Clear information about services",
      "A long distance to the nearest medical facility",
    ],
    answer: 2,
    explanation:
      "Distance, transport difficulties, cost and staff shortages can create barriers to healthcare.",
  },
];

export default function PublicHealthcarePage() {
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
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-red-100 hover:text-red-200"
        >
          <ArrowLeft size={16} />
          Back to Topic Academy
        </Link>

        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900 via-red-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-red-200">
              <HeartPulse size={15} />
              Health · B2–C1
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Public Healthcare Systems
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-red-50 sm:text-lg">
              Explore how countries organise medical services, why equal access
              matters, and what governments can do to build stronger healthcare
              systems.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-red-100">
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
              <Stethoscope size={92} strokeWidth={1.2} />
            </div>
          </div>
        </header>

        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,1fr)_230px]">

          <main className="min-w-0 space-y-8">

            {/* SECTION 1 */}
            <section id="understanding" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-2xl bg-[#EEEEFF] p-3 text-[#7165D5]">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                    01 · Understanding the topic
                  </p>
                  <h2 className="text-xl font-bold text-[#252949]">
                    What is a public healthcare system?
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  A public healthcare system is a structure through which the
                  government organises, finances or provides medical services
                  for the population. The exact model differs from country to
                  country. In some places, hospitals and clinics are mainly
                  publicly operated, while in others, public insurance helps
                  people pay for services provided by a mixture of public and
                  private organisations.
                </p>

                <p>
                  One important idea behind many public systems is that access
                  to essential treatment should not depend entirely on a
                  person's income. Governments may use taxes or insurance
                  contributions to fund services such as emergency treatment,
                  vaccinations, maternity care and visits to general
                  practitioners. However, what is covered and how patients
                  contribute to costs varies considerably.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="access" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                02 · Access and equality
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Why equal access matters
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Access to healthcare is influenced by more than the number
                  of hospitals in a country. Household income, geographical
                  location, transport, disability access, language and the
                  availability of trained professionals can all affect
                  whether someone receives care at the right time.
                </p>

                <p>
                  For example, people living in remote areas may need to travel
                  for several hours to reach a specialist. Families with
                  limited financial resources may delay appointments if they
                  are concerned about fees or transport costs. These barriers
                  can contribute to health inequalities between communities.
                </p>

                <p>
                  Governments can respond by supporting local clinics,
                  improving public transport links, investing in accessible
                  facilities and making reliable health information available
                  in different languages. Digital consultations may also help
                  some patients, although they cannot replace every in-person
                  examination.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F3F2FF] p-5">
                <div className="flex gap-3">
                  <Lightbulb className="mt-1 shrink-0 text-[#7669D8]" size={20} />
                  <p className="text-sm leading-7 text-slate-700">
                    <strong className="text-[#35365F]">Think about it:</strong>{" "}
                    Is a healthcare service truly accessible if it is free but
                    located too far away for some people to reach?
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="funding" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                03 · Prevention and resources
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Prevention, funding and quality
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Effective healthcare systems do not focus only on treating
                  illness. Preventive care, including vaccination programmes,
                  health education and screening, can help identify risks at an
                  earlier stage. Primary care services are particularly
                  important because they are often the first point of contact
                  between patients and healthcare professionals.
                </p>

                <p>
                  Funding is another major challenge. Public authorities must
                  decide how to distribute limited resources among hospitals,
                  medical equipment, staff salaries, research and community
                  services. An ageing population and the rising cost of new
                  treatments can place additional pressure on public budgets.
                </p>

                <p>
                  Spending more money does not automatically guarantee better
                  outcomes. Systems also need transparent management,
                  effective planning, well-trained staff and clear ways to
                  measure service quality. Long waiting times and shortages
                  of professionals can remain serious problems even when
                  healthcare is publicly funded.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="future" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                04 · Looking ahead
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Building sustainable healthcare systems
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  The future of public healthcare will depend on balancing
                  fairness, quality and financial sustainability. Technology
                  can support this goal through electronic records, online
                  appointment systems and carefully designed remote services.
                  Nevertheless, digital solutions must protect personal data
                  and remain available to people who have limited internet
                  access or digital skills.
                </p>

                <p>
                  Ultimately, a strong healthcare system requires cooperation
                  between governments, medical professionals, communities and
                  individuals. Public policy can create the conditions for
                  better health, while informed communities can help services
                  understand local needs and improve over time.
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
                  Save useful words for revision and notice how each term is
                  used in context.
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
                              ? "bg-[#E9E7FF] text-red-200"
                              : "bg-[#F3F4F8] text-red-100 hover:bg-[#E9E7FF]"
                          }`}
                        >
                          {saved ? "Saved ✓" : "Save"}
                        </button>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-red-100">
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
                      <p className="mt-3 text-sm leading-6 text-red-100">
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

                  <p className="mt-2 text-sm text-red-100">
                    Review the explanations above, then try the quiz again.
                  </p>

                  <button
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                    }}
                    className="mt-4 rounded-xl border border-[#D9D5FA] bg-white px-4 py-2 text-sm font-semibold text-red-200"
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
                Some people believe that governments should provide free
                healthcare for all citizens, while others think individuals
                should be responsible for paying for their own medical
                treatment. Discuss both views and give your own opinion.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">
                  Remember to:
                </p>

                <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-6 text-[#D4D7E8]">
                  <li>Discuss both perspectives fairly.</li>
                  <li>Use examples to support your ideas.</li>
                  <li>Explain your own position clearly.</li>
                  <li>Organise your response into clear paragraphs.</li>
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
              <h2 className="font-bold text-[#33365C]">In this article</h2>

              <nav className="mt-4 space-y-3 text-sm text-red-100">
                <a className="block hover:text-[#6B5FD0]" href="#understanding">
                  Understanding the topic
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#access">
                  Access and equality
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#funding">
                  Prevention and resources
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#future">
                  Sustainable systems
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
                When discussing public services, compare their benefits with
                practical challenges such as cost, staffing and equal access.
              </p>
            </div>

            <Link
              to="/ielts/topics"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#E4E5EF] bg-white p-4 text-sm font-bold text-[#686D91] hover:border-[#C9C4F4] hover:text-red-200"
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
