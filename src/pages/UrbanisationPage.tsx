
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
  TrainFront,
  Building2,
} from "lucide-react";

const vocabulary = [
  {
    term: "urbanisation",
    definition: "The process through which an increasing proportion of people live in cities.",
    example: "Rapid urbanisation creates new demands for housing and transport.",
  },
  {
    term: "infrastructure",
    definition: "The basic systems and facilities needed for a community to function.",
    example: "Governments must invest in infrastructure to support growing cities.",
  },
  {
    term: "public transport",
    definition: "Shared transportation services available to the general public.",
    example: "Reliable public transport can reduce dependence on private cars.",
  },
  {
    term: "traffic congestion",
    definition: "A situation in which roads become crowded with vehicles.",
    example: "Traffic congestion increases travel times during busy hours.",
  },
  {
    term: "sustainable development",
    definition: "Development that meets present needs without harming future generations.",
    example: "Sustainable development requires careful urban planning.",
  },
  {
    term: "commuter",
    definition: "A person who regularly travels between home and work or education.",
    example: "Many commuters use trains to travel into the city centre.",
  },
];

const questions = [
  {
    question: "What does urbanisation describe?",
    options: [
      "A decrease in the number of cities",
      "An increasing proportion of people living in cities",
      "The replacement of all public transport",
    ],
    answer: 1,
    explanation:
      "Urbanisation is the process in which a growing proportion of the population lives in urban areas.",
  },
  {
    question: "How can reliable public transport benefit cities?",
    options: [
      "It can reduce dependence on private cars",
      "It always eliminates traffic",
      "It makes urban planning unnecessary",
    ],
    answer: 0,
    explanation:
      "Public transport can provide an alternative to private vehicles and help reduce road congestion.",
  },
  {
    question: "What is one challenge of rapid urbanisation?",
    options: [
      "A complete absence of commuters",
      "A reduced need for housing",
      "Pressure on infrastructure and public services",
    ],
    answer: 2,
    explanation:
      "Rapid population growth can place pressure on housing, roads, transport and other public services.",
  },
];

export default function UrbanisationPage() {
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
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-100 hover:text-amber-200"
        >
          <ArrowLeft size={16} />
          Back to Topic Academy
        </Link>

        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-900 via-amber-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-amber-200">
              <Building2 size={15} />
              Society · B2–C1
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Urbanisation and Public Transport
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-amber-50 sm:text-lg">
              Discover how growing cities affect transportation, infrastructure
              and everyday life, and explore how better urban planning can
              create more sustainable communities.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-amber-100">
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
              <TrainFront size={92} strokeWidth={1.2} />
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
                What is urbanisation?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Urbanisation is the process through which an increasing
                  proportion of a country's population lives in towns and
                  cities. People may move to urban areas in search of
                  employment, education, healthcare and other opportunities.
                  As cities expand, they often become important centres of
                  business, culture and innovation.
                </p>

                <p>
                  However, rapid population growth also creates challenges.
                  Cities need sufficient housing, roads, schools, hospitals
                  and public transport. If infrastructure does not develop
                  at the same pace as the population, residents may experience
                  overcrowding, longer journeys and pressure on public services.
                </p>

                <p>
                  Urban planning helps local authorities prepare for these
                  changes. It involves decisions about how land, buildings,
                  transport networks and public spaces should be organised.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="transport" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                02 · Transportation challenges
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Why transport matters in growing cities
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Transportation connects people with workplaces, schools,
                  shops and essential services. When a city grows, the number
                  of daily journeys often increases. If road networks and
                  transport services cannot meet this demand, traffic
                  congestion may become a major problem.
                </p>

                <p>
                  Long journeys can affect productivity and reduce the time
                  people have for family, education and leisure. Heavy traffic
                  can also contribute to air pollution and make some urban
                  areas less pleasant to live in.
                </p>

                <p>
                  Public transport offers an alternative to private cars.
                  Buses, metro systems, trams and trains can carry many
                  passengers using shared infrastructure. Their effectiveness
                  depends on factors such as affordability, reliability,
                  frequency, safety and coverage across different
                  neighbourhoods.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F3F2FF] p-5">
                <div className="flex gap-3">
                  <Lightbulb className="mt-1 shrink-0 text-[#7669D8]" size={20} />
                  <p className="text-sm leading-7 text-slate-700">
                    <strong className="text-[#35365F]">Think about it:</strong>{" "}
                    Would people use public transport more often if it were
                    cheaper, faster and more reliable?
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="environment" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                03 · Environmental impact
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Building greener urban environments
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  The way people travel has an influence on the urban
                  environment. A high dependence on private vehicles can
                  increase emissions, noise and demand for road space.
                  Expanding public transport may help cities use space more
                  efficiently and reduce the number of individual car journeys.
                </p>

                <p>
                  Walking and cycling are also important parts of sustainable
                  transport planning. Safe pavements, cycling lanes and
                  pedestrian-friendly streets can make short journeys easier
                  without requiring a car.
                </p>

                <p>
                  Nevertheless, greener transport requires investment.
                  Authorities must maintain existing services, improve
                  connections and ensure that transport options are available
                  in both central and outer districts. A transport system
                  should be convenient for different groups of residents.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="solutions" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                04 · Possible solutions
              </p>

              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                How can cities become more sustainable?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Local governments can improve urban mobility through
                  long-term planning. This may include expanding bus and metro
                  networks, introducing integrated ticketing systems and
                  coordinating transport schedules. Reliable connections
                  between different services can make journeys more convenient.
                </p>

                <p>
                  Another approach is to develop neighbourhoods where
                  essential services are located closer to residential areas.
                  This can reduce the need for long daily journeys and
                  encourage walking and cycling.
                </p>

                <p>
                  Public participation is also valuable. Residents understand
                  the transport problems they experience every day. Consulting
                  local communities can help authorities identify priorities
                  and design services that respond to real needs.
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
                              ? "bg-[#E9E7FF] text-amber-200"
                              : "bg-[#F3F4F8] text-amber-100 hover:bg-[#E9E7FF]"
                          }`}
                        >
                          {saved ? "Saved ✓" : "Save"}
                        </button>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-amber-100">
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
                      <p className="mt-3 text-sm leading-6 text-amber-100">
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

                  <p className="mt-2 text-sm text-amber-100">
                    Review the explanations above, then try the quiz again.
                  </p>

                  <button
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                    }}
                    className="mt-4 rounded-xl border border-[#D9D5FA] bg-white px-4 py-2 text-sm font-semibold text-amber-200"
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
                Many cities around the world are experiencing increasing
                traffic congestion. Some people believe that governments
                should invest more in public transport, while others think
                improving roads is a better solution. Discuss both views
                and give your own opinion.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">
                  Remember to:
                </p>

                <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-6 text-[#D4D7E8]">
                  <li>Discuss both perspectives fairly.</li>
                  <li>Use examples to support your arguments.</li>
                  <li>Explain your own position clearly.</li>
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

              <nav className="mt-4 space-y-3 text-sm text-amber-100">
                <a className="block hover:text-[#6B5FD0]" href="#introduction">
                  Understanding the topic
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#transport">
                  Transport challenges
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#environment">
                  Environmental impact
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
                When writing about cities, connect transport policies with
                their economic, environmental and social consequences.
              </p>
            </div>

            <Link
              to="/ielts/topics"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#E4E5EF] bg-white p-4 text-sm font-bold text-[#686D91] hover:border-[#C9C4F4] hover:text-amber-200"
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
