
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
  Recycle,
  Trash2,
  Leaf,
} from "lucide-react";

const vocabulary = [
  { word: "Plastic pollution", meaning: "The accumulation of plastic waste in the natural environment.", example: "Plastic pollution threatens ecosystems around the world." },
  { word: "Waste management", meaning: "The collection, treatment and disposal of waste materials.", example: "Effective waste management is essential for sustainable cities." },
  { word: "Biodegradable", meaning: "Able to break down naturally through biological processes.", example: "Some packaging materials are designed to be biodegradable." },
  { word: "Recycling", meaning: "The process of converting used materials into new products.", example: "Recycling can reduce the amount of waste sent to landfills." },
  { word: "Single-use plastics", meaning: "Plastic products designed to be used once before being discarded.", example: "Many governments are considering restrictions on single-use plastics." },
  { word: "Circular economy", meaning: "An economic system that keeps products and materials in use for as long as possible.", example: "A circular economy encourages repairing and reusing products." },
];

const questions = [
  {
    question: "Why is plastic pollution a long-term environmental concern?",
    options: ["Plastic always disappears immediately", "Many plastic materials break down very slowly", "Plastic cannot enter water systems"],
    answer: 1,
    explanation: "Many plastics remain in the environment for long periods and can break into smaller pieces.",
  },
  {
    question: "What is one purpose of a circular economy?",
    options: ["To increase unnecessary waste", "To encourage products to be discarded quickly", "To keep materials in use for longer"],
    answer: 2,
    explanation: "A circular economy focuses on reducing waste through reuse, repair and recycling.",
  },
  {
    question: "Which approach can help reduce plastic waste?",
    options: ["Using reusable products", "Increasing unnecessary packaging", "Avoiding waste collection systems"],
    answer: 0,
    explanation: "Reusable products can reduce demand for disposable plastic items.",
  },
];

export default function PlasticPollutionPage() {
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
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 hover:text-[#115E59]"
        >
          <ArrowLeft size={16} /> Back to Topic Academy
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-[#716DC2]">
              ENVIRONMENT
            </span>
            <span className="text-sm text-blue-100">B2–C1 · 8 min read</span>
          </div>
          <div className="max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7772D5] shadow-sm">
              <Recycle size={25} />
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Plastic Pollution and Waste Management
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              Understand the environmental impact of plastic waste and explore
              practical approaches to recycling, responsible consumption and
              sustainable waste management.
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
                Plastic has become an essential material in modern society
                because it is lightweight, durable and relatively inexpensive
                to produce. It is widely used in packaging, transportation,
                healthcare, construction and everyday household products.
                However, the convenience of plastic has created a major
                environmental challenge: the growing amount of plastic waste.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                When plastic products are not collected or managed properly,
                they can enter rivers, oceans and other natural environments.
                Addressing this problem requires more than simply cleaning up
                litter. Governments, manufacturers and consumers all have a
                role in reducing unnecessary waste.
              </p>
            </section>

            <section id="causes" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Trash2 className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">2. Causes of Plastic Pollution</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                One major source of plastic pollution is single-use packaging.
                Shopping bags, food containers and disposable bottles are often
                used for a short time before being thrown away. In places where
                waste collection systems are limited, these items may be
                discarded in streets, waterways or open areas.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Another contributing factor is the widespread production and
                consumption of inexpensive plastic products. Some packaging
                combines several different materials, making it difficult to
                separate and recycle. In addition, a lack of public awareness
                and recycling infrastructure can make responsible disposal
                more challenging.
              </p>
            </section>

            <section id="effects" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Leaf className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">3. Environmental Consequences</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Plastic waste can harm wildlife when animals become trapped in
                discarded materials or mistake small plastic pieces for food.
                Marine environments are particularly affected because waste
                can travel through rivers and eventually reach the ocean.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Many plastic materials break down very slowly. Over time, they
                can fragment into microplastics, which have been detected in
                different environmental settings. Plastic pollution can also
                affect landscapes, block drainage systems and create additional
                costs for communities responsible for waste collection and
                environmental protection.
              </p>
            </section>

            <section id="management" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Recycle className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">4. Improving Waste Management</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Effective waste management begins with reducing unnecessary
                consumption. Individuals can choose reusable bags, bottles and
                containers instead of disposable alternatives. Separating
                recyclable materials from general waste can also improve the
                efficiency of recycling systems.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Governments can invest in reliable collection services,
                recycling facilities and public education programmes.
                Manufacturers can contribute by designing products that are
                easier to repair, reuse or recycle. Clear labelling and
                accessible recycling points can make responsible disposal
                simpler for consumers.
              </p>
            </section>

            <section id="solutions" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">5. Towards a Circular Economy</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                A circular economy offers a different approach to production
                and consumption. Instead of following a model in which products
                are made, used and quickly discarded, this system aims to keep
                materials in use for as long as possible. Repairing, sharing,
                reusing and recycling can all support this goal.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                However, recycling alone cannot solve the entire problem.
                Reducing unnecessary packaging, improving product design and
                strengthening waste infrastructure are equally important.
                Long-term progress depends on cooperation between public
                institutions, businesses and communities.
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
                Some people believe that governments should introduce stricter
                laws to reduce plastic pollution, while others think
                individuals should take greater responsibility for reducing
                waste.
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
                  ["causes", "Causes of Pollution"],
                  ["effects", "Environmental Effects"],
                  ["management", "Waste Management"],
                  ["solutions", "Circular Economy"],
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
