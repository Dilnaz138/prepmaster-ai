
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Languages,
  Lightbulb,
  MessageCircle,
  Globe,
} from "lucide-react";

const vocabulary = [
  { word: "Bilingual", meaning: "Able to speak two languages fluently.", example: "Bilingual employees may have more career opportunities." },
  { word: "Fluency", meaning: "The ability to speak or write a language easily and accurately.", example: "Regular practice helps learners develop fluency." },
  { word: "Cultural awareness", meaning: "Understanding and respecting different cultures.", example: "Learning languages can improve cultural awareness." },
  { word: "Communication barrier", meaning: "A difficulty that prevents people from understanding each other.", example: "Language differences can create communication barriers." },
  { word: "Proficiency", meaning: "A high level of skill or ability in something.", example: "Language proficiency is useful in international business." },
  { word: "Linguistic diversity", meaning: "The existence of many different languages.", example: "Linguistic diversity is an important part of cultural heritage." },
];

const questions = [
  {
    question: "According to the article, what is one major benefit of learning another language?",
    options: ["It guarantees a high salary", "It improves communication across cultures", "It removes the need for education"],
    answer: 1,
    explanation: "Learning another language helps people communicate with individuals from different cultural backgrounds.",
  },
  {
    question: "How can language learning support professional development?",
    options: ["By limiting career choices", "By replacing technical knowledge", "By creating opportunities in international workplaces"],
    answer: 2,
    explanation: "Language skills can help people work with international clients and organisations.",
  },
  {
    question: "What is one effective way to improve language proficiency?",
    options: ["Avoiding conversations", "Practising regularly in different situations", "Memorising words without context"],
    answer: 1,
    explanation: "Consistent practice through reading, listening, writing and speaking supports language development.",
  },
];

export default function ForeignLanguagesPage() {
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

  const score = questions.filter((question, index) => answers[index] === question.answer).length;

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 text-slate-800 md:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/ielts/topics"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-200 hover:text-[#115E59]"
        >
          <ArrowLeft size={16} /> Back to Topic Academy
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900 via-violet-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-[#716DC2]">
              EDUCATION
            </span>
            <span className="text-sm text-violet-100">B2–C1 · 8 min read</span>
          </div>
          <div className="max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7772D5] shadow-sm">
              <Languages size={25} />
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Why Learning Foreign Languages Matters
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              Discover how language learning improves communication, develops
              cultural understanding and creates opportunities in an
              increasingly connected world.
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
                In today's interconnected world, the ability to communicate in
                more than one language has become increasingly valuable.
                International travel, global business and digital communication
                bring people from different linguistic backgrounds together.
                As a result, foreign language education is no longer simply an
                additional academic subject; it is an important life skill.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Although translation technologies have made communication
                easier, learning a language allows individuals to express
                themselves directly, understand cultural differences and build
                stronger relationships. It also encourages curiosity and
                develops a broader understanding of the world.
              </p>
            </section>

            <section id="communication" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <MessageCircle className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">2. Communication and Global Connections</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                One of the most obvious advantages of learning a foreign
                language is improved communication. People who speak additional
                languages can interact with a wider range of individuals,
                participate in international projects and access information
                from different countries.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Language skills can also reduce communication barriers in
                education, tourism and business. For example, international
                students who understand the language used at their university
                may find it easier to participate in discussions, work in teams
                and build friendships.
              </p>
            </section>

            <section id="culture" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">3. Cultural Understanding</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Language is closely connected to culture, traditions and
                identity. Learning another language gives students an
                opportunity to explore how people from different societies
                express ideas, celebrate traditions and understand the world.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                This experience can develop cultural awareness, empathy and
                respect. Instead of relying on stereotypes, learners become
                more interested in understanding different perspectives.
                These abilities are particularly important in multicultural
                communities and international workplaces.
              </p>
            </section>

            <section id="careers" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <GraduationCap className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">4. Education and Career Opportunities</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Knowledge of foreign languages can expand educational and
                professional opportunities. Students may access international
                academic programmes, exchange opportunities and educational
                materials that are not always available in their first
                language.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                In the workplace, multilingual employees may be valuable in
                international companies, tourism, diplomacy, customer service
                and technology. However, language proficiency is most effective
                when combined with professional knowledge, practical
                experience and other relevant skills.
              </p>
            </section>

            <section id="challenges" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">5. Challenges and Effective Learning</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Despite its advantages, learning a foreign language requires
                time, patience and consistent effort. Students may struggle
                with pronunciation, grammar, unfamiliar vocabulary or a lack
                of opportunities to practise with other speakers.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                A balanced learning approach can make the process more
                effective. Reading articles, watching educational videos,
                listening to podcasts and participating in conversations all
                provide useful practice. Setting realistic goals and reviewing
                progress regularly can also help learners remain motivated.
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
                Some people believe that learning a foreign language should be
                compulsory in schools. Others think students should decide
                whether to study another language.
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
                  ["communication", "Communication"],
                  ["culture", "Cultural Understanding"],
                  ["careers", "Education & Careers"],
                  ["challenges", "Learning Challenges"],
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
