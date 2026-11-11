
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
  LockKeyhole,
  ShieldCheck,
  Database,
} from "lucide-react";

const vocabulary = [
  { word: "Data privacy", meaning: "The protection and appropriate use of personal information.", example: "Data privacy has become a major concern in the digital age." },
  { word: "Cybersecurity", meaning: "The protection of computer systems, networks and data from digital threats.", example: "Cybersecurity measures help protect organisations from online attacks." },
  { word: "Personal information", meaning: "Details that can identify or describe an individual.", example: "Users should be careful when sharing personal information online." },
  { word: "Data collection", meaning: "The process of gathering information from different sources.", example: "Many digital services rely on data collection to improve their features." },
  { word: "Surveillance", meaning: "The monitoring of people, activities or information.", example: "Digital surveillance raises questions about privacy and individual freedom." },
  { word: "Consent", meaning: "Permission given voluntarily and with an understanding of what is involved.", example: "Companies should obtain clear consent before using personal data." },
];

const questions = [
  {
    question: "What is data privacy mainly concerned with?",
    options: ["Making all online information public", "Protecting and controlling the use of personal information", "Increasing the number of digital advertisements"],
    answer: 1,
    explanation: "Data privacy concerns how personal information is collected, stored, accessed and used.",
  },
  {
    question: "Why can data collection create privacy concerns?",
    options: ["Personal information may be used without clear permission", "It always improves internet speed", "It removes the need for digital services"],
    answer: 0,
    explanation: "Problems can occur when organisations collect or use personal information without appropriate transparency or consent.",
  },
  {
    question: "What is one way individuals can improve their digital privacy?",
    options: ["Share passwords publicly", "Ignore privacy settings", "Review app permissions and privacy controls"],
    answer: 2,
    explanation: "Reviewing permissions and privacy settings helps people make more informed decisions about their information.",
  },
];

export default function TechnologyPrivacyPage() {
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
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-[#115E59]"
        >
          <ArrowLeft size={16} /> Back to Topic Academy
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-900 via-cyan-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-[#716DC2]">
              TECHNOLOGY
            </span>
            <span className="text-sm text-cyan-100">B2–C1 · 8 min read</span>
          </div>
          <div className="max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7772D5] shadow-sm">
              <LockKeyhole size={25} />
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Technology and Personal Privacy
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              Explore how digital technologies collect personal information,
              why online privacy matters and how individuals and organisations
              can protect data in an increasingly connected world.
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
                Digital technology has transformed the way people communicate,
                study, shop and work. Smartphones, websites and online
                platforms make many everyday activities faster and more
                convenient. However, these services often depend on collecting
                and processing personal information.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                As a result, personal privacy has become an important issue in
                modern society. People may not always understand what
                information is being collected, how long it is stored or who
                can access it. Balancing technological progress with
                individual privacy requires responsible decisions from
                businesses, governments and users.
              </p>
            </section>

            <section id="data" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Database className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">2. How Personal Data Is Collected</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Many digital services collect information when people create
                accounts, make online purchases or use applications. Depending
                on the service and its settings, this information may include
                contact details, location data, browsing activity and user
                preferences.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Organisations may analyse this information to personalise
                services, understand customer needs and improve their products.
                For example, recommendation systems can use previous activity
                to suggest content. Although this can be convenient, users
                should be able to understand how their information is used.
              </p>
            </section>

            <section id="risks" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <ShieldCheck className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">3. Risks to Digital Privacy</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                One important risk is unauthorised access to personal data.
                Data breaches can expose information that individuals and
                organisations expected to remain private. Such incidents may
                result in financial losses, identity-related problems and
                reduced public trust in digital services.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Another concern is the excessive or unclear use of personal
                information. People may feel uncomfortable when their online
                activities are monitored without sufficient transparency.
                Digital surveillance also raises wider questions about
                individual freedom, accountability and the boundaries of
                technological monitoring.
              </p>
            </section>

            <section id="responsibility" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <LockKeyhole className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">4. Protecting Personal Information</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Individuals can take practical steps to manage their digital
                privacy. These include reviewing privacy settings, checking
                application permissions, using strong and unique passwords
                and avoiding unnecessary sharing of personal information.
                Users should also consider whether a digital service is
                trustworthy before providing sensitive details.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Organisations also have significant responsibilities. They
                should explain their data practices clearly, protect stored
                information and collect only what is necessary for a legitimate
                purpose. Clear consent and appropriate security measures can
                help build trust between service providers and users.
              </p>
            </section>

            <section id="future" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">5. The Future of Privacy and Technology</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                New technologies, including artificial intelligence and
                connected devices, create additional opportunities as well as
                privacy challenges. Automated systems can process large
                quantities of information, making transparency and responsible
                data governance increasingly important.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Governments can establish clear legal standards, while
                technology companies can develop products with privacy in
                mind. Education is equally important because users need to
                understand their digital rights and make informed choices.
                Technological innovation should support society without
                overlooking individual rights and responsibilities.
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
                Modern technology makes it easier for organisations to collect
                personal information. Some people believe this development
                improves services, while others are concerned about the loss
                of privacy.
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
                  ["data", "Data Collection"],
                  ["risks", "Privacy Risks"],
                  ["responsibility", "Protecting Data"],
                  ["future", "Future of Privacy"],
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
