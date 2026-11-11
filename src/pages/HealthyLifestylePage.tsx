import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  HeartPulse,
  Lightbulb,
  RotateCcw,
} from "lucide-react";

const vocabulary = [
  {
    word: "balanced diet",
    type: "noun phrase",
    meaning: "A way of eating that includes a suitable variety of foods and nutrients.",
    example: "A balanced diet can support general health and daily energy needs.",
  },
  {
    word: "nutrient",
    type: "noun",
    meaning: "A substance in food that the body needs to function and grow.",
    example: "Fruit and vegetables provide important nutrients.",
  },
  {
    word: "sedentary",
    type: "adjective",
    meaning: "Involving a lot of sitting and very little physical movement.",
    example: "Long periods of sedentary behaviour are common in some office jobs.",
  },
  {
    word: "preventive care",
    type: "noun phrase",
    meaning: "Healthcare that aims to prevent illness or identify problems early.",
    example: "Health education and regular check-ups are parts of preventive care.",
  },
  {
    word: "well-being",
    type: "noun",
    meaning: "A person's general state of health, comfort, and happiness.",
    example: "Sleep, social connections, and activity can contribute to well-being.",
  },
  {
    word: "public health",
    type: "noun phrase",
    meaning: "The health of a population and the organised efforts to protect and improve it.",
    example: "Clean water and vaccination programmes are important public health measures.",
  },
];

const questions = [
  {
    question: "What is the main idea of a balanced diet in the article?",
    options: [
      "Eating only one type of healthy food",
      "Including a suitable variety of foods",
      "Avoiding all carbohydrates",
    ],
    answer: 1,
    explanation:
      "A balanced diet means variety and suitable proportions, rather than relying on one food group.",
  },
  {
    question: "What does the term 'sedentary' describe?",
    options: [
      "A lifestyle with little physical movement",
      "A diet containing many nutrients",
      "A type of preventive medical check",
    ],
    answer: 0,
    explanation:
      "Sedentary describes behaviour that involves sitting for long periods and little movement.",
  },
  {
    question: "Which is an example of preventive care?",
    options: [
      "Ignoring early symptoms",
      "Waiting until a condition becomes serious",
      "Health education and appropriate check-ups",
    ],
    answer: 2,
    explanation:
      "Preventive care aims to reduce risks or identify potential problems early.",
  },
];

export default function HealthyLifestylePage() {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [showResults, setShowResults] = useState(false);
  const [savedWords, setSavedWords] = useState<string[]>([]);

  const score = questions.reduce(
    (total, question, index) =>
      total + (selectedAnswers[index] === question.answer ? 1 : 0),
    0,
  );

  const toggleWord = (word: string) => {
    setSavedWords((current) =>
      current.includes(word)
        ? current.filter((item) => item !== word)
        : [...current, word],
    );
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 pt-8 sm:px-8">
        <Link to="/ielts/topics" className="inline-flex items-center gap-2 text-sm font-medium text-rose-700 transition hover:text-rose-900">
          <ArrowLeft size={16} />
          Back to Topic Academy
        </Link>
      </div>
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-900 via-rose-800 to-slate-900 p-7 text-white sm:p-10">
        <div className="mx-auto max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
<div className="mt-9 inline-flex items-center gap-2 rounded-full border border-rose-300/20 bg-rose-300/10 px-3 py-1.5 text-xs font-semibold text-rose-200">
            <HeartPulse size={14} />
            HEALTH · B2–C1
          </div>

          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Healthy Lifestyle and Nutrition
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            How do everyday habits, food choices, and public health education
            influence the way people live? Explore the issue before forming
            your own IELTS opinion.
          </p>

          <div className="mt-7 flex flex-wrap gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2">
              <Clock3 size={16} /> 6 min read
            </span>
            <span className="inline-flex items-center gap-2">
              <BookOpen size={16} /> Reading + vocabulary + quiz
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[minmax(0,1fr)_230px] lg:py-14">
        <article className="min-w-0 space-y-10">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rose-600">
              Informative reading
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              What does a healthy lifestyle really involve?
            </h2>

            <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600">
              <p>
                A healthy lifestyle is often described as a combination of
                everyday choices rather than one single habit. Food, movement,
                sleep, relationships, and access to healthcare can all affect
                people's general well-being. These factors are connected:
                regular activity may support sleep, while a varied diet can
                provide nutrients that the body needs.
              </p>

              <h3 className="pt-2 text-lg font-bold text-slate-900">
                Food choices and nutrition
              </h3>
              <p>
                A balanced diet includes a variety of foods in suitable
                proportions. Different foods provide different nutrients, so
                variety matters. However, people's diets are shaped by more
                than personal preference. Food prices, working hours, local
                shops, family routines, and nutrition education can influence
                what people are able to eat.
              </p>

              <h3 className="pt-2 text-lg font-bold text-slate-900">
                Movement in everyday life
              </h3>
              <p>
                Modern routines can involve long periods of sitting, especially
                when people study, work at a desk, or travel by car. Walking,
                cycling, active hobbies, and movement breaks are examples of
                ways people can be less sedentary. The most suitable activity
                depends on a person's age, circumstances, and abilities.
              </p>

              <h3 className="pt-2 text-lg font-bold text-slate-900">
                Prevention and public health
              </h3>
              <p>
                Health is not only an individual responsibility. Schools,
                workplaces, communities, and governments can help people make
                informed choices. Public health measures may include clear
                nutrition information, safe places to be active, health
                education, clean environments, and access to appropriate
                preventive care.
              </p>

              <h3 className="pt-2 text-lg font-bold text-slate-900">
                A shared responsibility
              </h3>
              <p>
                Some people argue that health mainly depends on personal
                discipline, while others emphasise the influence of society
                and the environment. In practice, both perspectives offer
                useful points for discussion. Individuals make daily
                decisions, but their options are affected by the opportunities
                and resources around them.
              </p>
            </div>

            <div className="mt-7 rounded-xl border border-amber-100 bg-amber-50 p-4">
              <div className="flex items-center gap-2 font-semibold text-amber-900">
                <Lightbulb size={18} />
                Think critically
              </div>
              <p className="mt-2 text-sm leading-6 text-amber-900/80">
                If healthy choices are important, should governments focus
                more on public education, affordable services, or improving
                the places where people live?
              </p>
            </div>
          </section>

          <section>
            <div className="mb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rose-700">
                Learn in context
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">
                Academic vocabulary
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                Save useful expressions for your own vocabulary review.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {vocabulary.map((item) => {
                const isSaved = savedWords.includes(item.word);
                return (
                  <div
                    key={item.word}
                    className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-slate-900">
                          {item.word}
                        </h3>
                        <p className="mt-1 text-xs italic text-rose-700">
                          {item.type}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleWord(item.word)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                          isSaved
                            ? "bg-rose-100 text-rose-700"
                            : "bg-slate-100 text-slate-600 hover:bg-rose-100 hover:text-rose-700"
                        }`}
                      >
                        {isSaved ? "Saved" : "Save word"}
                      </button>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {item.meaning}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      <span className="font-semibold text-slate-700">
                        Example:
                      </span>{" "}
                      {item.example}
                    </p>
                  </div>
                );
              })}
            </div>
            {savedWords.length > 0 && (
              <p className="mt-3 text-sm text-rose-700">
                {savedWords.length} {savedWords.length === 1 ? "word" : "words"}{" "}
                saved in this page session.
              </p>
            )}
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rose-700">
              Check your understanding
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Reading comprehension
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Choose one answer for each question, then check your result.
            </p>

            <div className="mt-6 space-y-7">
              {questions.map((question, index) => (
                <div key={question.question}>
                  <h3 className="font-semibold leading-6 text-slate-900">
                    {index + 1}. {question.question}
                  </h3>
                  <div className="mt-3 space-y-2">
                    {question.options.map((option, optionIndex) => {
                      const isSelected =
                        selectedAnswers[index] === optionIndex;
                      const isCorrect = question.answer === optionIndex;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => {
                            setSelectedAnswers((current) => ({
                              ...current,
                              [index]: optionIndex,
                            }));
                            setShowResults(false);
                          }}
                          className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
                            isSelected
                              ? "border-rose-400 bg-rose-50 text-rose-900"
                              : "border-slate-200 text-slate-600 hover:border-rose-200"
                          }`}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current text-xs">
                            {String.fromCharCode(65 + optionIndex)}
                          </span>
                          <span className="flex-1">{option}</span>
                          {showResults && isCorrect && (
                            <CheckCircle2
                              size={17}
                              className="text-rose-600"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  {showResults && (
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {question.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={Object.keys(selectedAnswers).length !== questions.length}
                onClick={() => setShowResults(true)}
                className="rounded-xl bg-rose-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Check answers
              </button>
              <button
                type="button"
                onClick={() => {
                  setSelectedAnswers({});
                  setShowResults(false);
                }}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
              >
                <RotateCcw size={15} />
                Try again
              </button>
              {showResults && (
                <span className="font-semibold text-slate-800">
                  Your score: {score}/{questions.length}
                </span>
              )}
            </div>
          </section>

          <section className="rounded-2xl border border-rose-100 bg-rose-50/70 p-6 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-rose-700">
              IELTS Writing Task 2
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Apply what you have learned
            </h2>
            <p className="mt-4 text-base font-medium leading-7 text-slate-800">
              Some people believe that individuals should be responsible for
              maintaining a healthy lifestyle, while others think governments
              should do more to improve public health. Discuss both views and
              give your own opinion.
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Consider personal choices, access to healthy food, public
              education, and community facilities. Use examples to support
              your ideas.
            </p>
            <Link
              to="/ielts/writing/feedback"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-rose-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700"
            >
              Practise with AI feedback
              <ArrowRight size={17} />
            </Link>
          </section>
        </article>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-8">
          <p className="text-sm font-bold text-slate-900">In this article</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Food choices and nutrition</li>
            <li>Movement in everyday life</li>
            <li>Prevention and public health</li>
            <li>A shared responsibility</li>
            <li>Academic vocabulary</li>
            <li>Reading comprehension</li>
            <li>IELTS Writing Task 2</li>
          </ul>
          <div className="mt-6 border-t border-slate-100 pt-5">
            <Link
              to="/ielts/topics"
              className="inline-flex items-center gap-2 text-sm font-semibold text-rose-700 hover:text-rose-900"
            >
              Explore more topics <ArrowRight size={15} />
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
