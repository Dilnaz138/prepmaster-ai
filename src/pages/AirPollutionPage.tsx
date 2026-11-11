
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
  Leaf,
  Building2,
  Wind,
} from "lucide-react";

const vocabulary = [
  { word: "Air pollution", meaning: "The presence of harmful substances in the air.", example: "Air pollution is a serious problem in many large cities." },
  { word: "Emissions", meaning: "Gases or substances released into the atmosphere.", example: "Vehicle emissions contribute to poor air quality." },
  { word: "Urbanisation", meaning: "The growth of towns and cities as more people move into urban areas.", example: "Rapid urbanisation can increase pressure on public services." },
  { word: "Renewable energy", meaning: "Energy from sources that naturally replenish.", example: "Renewable energy can reduce dependence on fossil fuels." },
  { word: "Sustainable development", meaning: "Development that meets present needs without harming future generations.", example: "Sustainable development requires responsible urban planning." },
  { word: "Public transport", meaning: "Shared transportation services available to the public.", example: "Reliable public transport can reduce the number of private cars." },
];

const questions = [
  {
    question: "What is one major source of air pollution in cities?",
    options: ["Urban gardens", "Vehicle emissions", "Public libraries"],
    answer: 1,
    explanation: "Cars and other vehicles release emissions that can contribute to poor urban air quality.",
  },
  {
    question: "How can public transport help reduce pollution?",
    options: ["By encouraging more private cars", "By increasing road traffic", "By reducing the number of individual vehicles"],
    answer: 2,
    explanation: "When more people use shared transport, fewer individual vehicles may be needed on the roads.",
  },
  {
    question: "What is an important part of sustainable urban development?",
    options: ["Combining environmental protection with city planning", "Removing all public spaces", "Ignoring air quality"],
    answer: 0,
    explanation: "Sustainable development considers environmental, social and economic needs together.",
  },
];

export default function AirPollutionPage() {
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleWord = (word: string) => {
    setSavedWords((current) =>
      current.includes(word)
        ? current.filter((item) => item !== word)
        : [...current, word]
    );
  };

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 md:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/ielts/topics"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-200 hover:text-[#115E59]"
        >
          <ArrowLeft size={16} /> Back to Topic Academy
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-900 via-sky-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-[#716DC2]">
              ENVIRONMENT
            </span>
            <span className="text-sm text-sky-100">B2–C1 · 8 min read</span>
          </div>
          <div className="max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7772D5] shadow-sm">
              <Wind size={25} />
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Air Pollution and Urban Development
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              Explore the causes of urban air pollution, its effects on cities
              and the strategies that can create cleaner and more sustainable
              communities.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[minmax(0,1fr)_230px]">
          <main className="min-w-0 space-y-7">
            <section id="introduction" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <BookOpen className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">1. Introduction</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Urbanisation has transformed societies by creating larger
                cities, expanding economies and providing access to education
                and employment. However, rapid urban growth also creates
                environmental challenges. One of the most significant is air
                pollution, which affects the quality of life in many urban
                communities.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                As cities become more populated, demand for transportation,
                energy and industrial production increases. Without effective
                planning, these activities can release pollutants into the
                atmosphere. Addressing this issue requires cooperation between
                governments, businesses and citizens.
              </p>
            </section>

            <section id="causes" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Building2 className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">2. Main Causes of Urban Air Pollution</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Transportation is an important source of air pollution in many
                cities. Private cars, buses and trucks release gases and small
                particles through fuel combustion. Traffic congestion can
                increase the time vehicles spend on roads and contribute to
                local pollution.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Industrial facilities and electricity generation can also
                affect air quality, particularly when they depend heavily on
                fossil fuels. Construction activities may produce dust, while
                household heating can contribute to emissions during colder
                seasons. The main sources differ between cities depending on
                their infrastructure and energy systems.
              </p>
            </section>

            <section id="effects" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Wind className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">3. Environmental and Social Effects</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Poor air quality can affect both the natural environment and
                public well-being. Air pollution is associated with respiratory
                and cardiovascular health risks, while some pollutants can
                contribute to damage to plants, soil and water systems.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                These challenges can also create economic costs. Communities
                may face increased healthcare demands, reduced productivity
                and damage to buildings. Furthermore, pollution does not always
                affect all neighbourhoods equally. Areas located close to busy
                roads or industrial sites may experience greater exposure.
              </p>
            </section>

            <section id="solutions" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Leaf className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">4. Solutions for Cleaner Cities</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Governments can improve urban air quality by investing in
                reliable public transport, cycling infrastructure and
                pedestrian-friendly streets. These measures can make it easier
                for residents to travel without depending entirely on private
                cars.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Another important strategy is the transition towards cleaner
                energy sources. Renewable energy, energy-efficient buildings
                and stricter industrial standards can help reduce emissions.
                Urban green spaces and trees can provide additional
                environmental and social benefits, although they cannot replace
                measures that reduce pollution at its source.
              </p>
            </section>

            <section id="future" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">5. The Future of Sustainable Urban Development</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Creating cleaner cities requires long-term planning rather than
                temporary solutions. Urban planners need to consider housing,
                transportation, energy consumption and access to green spaces
                when designing new neighbourhoods.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Technology can support these efforts through air-quality
                monitoring systems, smarter traffic management and more
                efficient energy networks. However, successful environmental
                policies also depend on public participation, transparent
                decision-making and consistent investment.
              </p>
            </section>

            <section id="vocabulary" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-[#817BD7]" />
                  <h2 className="text-xl font-bold">Academic Vocabulary</h2>
                </div>
                <span className="text-xs font-semibold text-[#8585A2]">
                  {savedWords.length} saved
                </span>
              </div>
              <div className="space-y-3">
                {vocabulary.map((item) => {
                  const isSaved = savedWords.includes(item.word);
                  return (
                    <div key={item.word} className="rounded-2xl border border-[#EEEEF7] p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-bold text-[#34365D]">{item.word}</h3>
                        <button
                          onClick={() => toggleWord(item.word)}
                          className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${
                            isSaved
                              ? "bg-[#064E3B] text-[#6964C5]"
                              : "bg-[#F5F5FA] text-[#77788E] hover:bg-[#064E3B]"
                          }`}
                        >
                          {isSaved ? "✓ Saved" : "+ Save word"}
                        </button>
                      </div>
                      <p className="mt-2 text-sm text-[#626783]">{item.meaning}</p>
                      <p className="mt-2 text-sm italic text-[#9292A9]">
                        Example: {item.example}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="quiz" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-5 flex items-center gap-3">
                <ClipboardList className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">Reading Comprehension Quiz</h2>
              </div>
              <p className="mb-6 text-sm text-[#8585A2]">
                Test your understanding of the article.
              </p>
              <div className="space-y-7">
                {questions.map((item, index) => (
                  <div key={index}>
                    <h3 className="mb-3 font-semibold">
                      {index + 1}. {item.question}
                    </h3>
                    <div className="space-y-2">
                      {item.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          disabled={submitted}
                          onClick={() =>
                            setAnswers((current) => {
                              const updated = [...current];
                              updated[index] = optionIndex;
                              return updated;
                            })
                          }
                          className={`w-full rounded-xl border p-3 text-left text-sm transition ${
                            answers[index] === optionIndex
                              ? "border-[#817BD7] bg-[#F0EFFF] text-[#514BA8]"
                              : "border-[#EEEEF7] hover:bg-[#F8F8FD]"
                          } ${submitted && optionIndex === item.answer ? "border-green-300 bg-green-50" : ""}`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {submitted && (
                      <p className="mt-3 rounded-xl bg-[#F7F7FC] p-3 text-sm text-[#626783]">
                        {answers[index] === item.answer ? "Correct! " : "Not quite. "}
                        {item.explanation}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              {!submitted ? (
                <button
                  onClick={() => setSubmitted(true)}
                  disabled={answers.filter((answer) => answer !== undefined).length !== questions.length}
                  className="mt-7 rounded-xl bg-[#7772D5] px-6 py-3 font-semibold text-white transition hover:bg-[#625DC0] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Check answers
                </button>
              ) : (
                <div className="mt-7 rounded-2xl bg-[#F0EFFF] p-5">
                  <p className="text-lg font-bold text-[#514BA8]">
                    Your score: {score}/{questions.length}
                  </p>
                  <button
                    onClick={() => {
                      setAnswers([]);
                      setSubmitted(false);
                    }}
                    className="mt-3 text-sm font-bold text-[#6964C5] hover:underline"
                  >
                    Try again
                  </button>
                </div>
              )}
            </section>

            <section id="writing" className="rounded-3xl bg-[#252746] p-6 text-white shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="text-[#B7B2FF]" />
                <span className="text-sm font-bold uppercase tracking-wider text-[#B7B2FF]">
                  IELTS Writing Task 2
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold">Essay Practice</h2>
              <p className="mb-5 leading-8 text-[#E0E0F0]">
                Air pollution is becoming a serious problem in many large
                cities. Some people believe that governments should be
                responsible for solving this issue, while others think
                individuals should change their daily habits.
              </p>
              <p className="mb-6 font-semibold text-white">
                Discuss both views and give your own opinion.
              </p>
              <Link
                to="/ielts/writing/feedback"
                className="inline-flex items-center gap-2 rounded-xl bg-[#8580E5] px-5 py-3 font-semibold text-white transition hover:bg-[#716BD0]"
              >
                Practise with AI Feedback <ArrowRight size={17} />
              </Link>
            </section>
          </main>

          <aside className="lg:sticky lg:top-8">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <h3 className="mb-4 font-bold">On this page</h3>
              <nav className="space-y-1 text-sm">
                {[
                  ["introduction", "Introduction"],
                  ["causes", "Main Causes"],
                  ["effects", "Environmental Effects"],
                  ["solutions", "Cleaner Cities"],
                  ["future", "Sustainable Development"],
                  ["vocabulary", "Academic Vocabulary"],
                  ["quiz", "Reading Quiz"],
                  ["writing", "IELTS Writing Task 2"],
                ].map(([id, label]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="block rounded-xl px-3 py-2 text-[#74758F] transition hover:bg-[#115E59] hover:text-[#6964C5]"
                  >
                    {label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 border-t border-[#EEEEF7] pt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#A0A0B5]">
                  Your learning
                </p>
                <div className="flex items-center gap-2 text-sm text-[#74758F]">
                  <CheckCircle2 size={17} className="text-[#7772D5]" />
                  Interactive vocabulary
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#74758F]">
                  <CheckCircle2 size={17} className="text-[#7772D5]" />
                  Reading comprehension
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-[#74758F]">
                  <CheckCircle2 size={17} className="text-[#7772D5]" />
                  IELTS writing practice
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
