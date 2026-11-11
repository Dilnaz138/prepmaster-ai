
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
  MessageCircle,
  Users,
  Globe,
} from "lucide-react";

const vocabulary = [
  { word: "Social networking", meaning: "The use of online platforms to communicate and build relationships.", example: "Social networking allows people to connect across countries." },
  { word: "Digital footprint", meaning: "The information a person leaves behind through online activities.", example: "Users should consider their digital footprint before posting content." },
  { word: "Misinformation", meaning: "False or inaccurate information shared without necessarily intending to deceive.", example: "Misinformation can spread quickly through social media." },
  { word: "Public awareness", meaning: "The level of understanding people have about an issue.", example: "Social campaigns can increase public awareness of environmental problems." },
  { word: "Online engagement", meaning: "The ways users interact with digital content and communities.", example: "Online engagement can help organisations reach wider audiences." },
  { word: "Media literacy", meaning: "The ability to access, analyse and evaluate media information.", example: "Media literacy helps users recognise unreliable online sources." },
];

const questions = [
  {
    question: "What is one positive effect of social media?",
    options: ["It always provides accurate information", "It makes face-to-face communication unnecessary", "It helps people maintain connections over long distances"],
    answer: 2,
    explanation: "Social platforms allow people to communicate and maintain relationships regardless of geographical distance.",
  },
  {
    question: "What is misinformation?",
    options: ["Information that is false or inaccurate", "Information verified by experts", "A private online conversation"],
    answer: 0,
    explanation: "Misinformation refers to inaccurate information, whether or not it is shared deliberately.",
  },
  {
    question: "Why is media literacy important?",
    options: ["It encourages users to believe every post", "It helps people evaluate online information critically", "It prevents people from using technology"],
    answer: 1,
    explanation: "Media literacy supports critical thinking and helps users assess the reliability of digital content.",
  },
];

export default function SocialMediaPage() {
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
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-fuchsia-200 hover:text-[#115E59]"
        >
          <ArrowLeft size={16} /> Back to Topic Academy
        </Link>

        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-fuchsia-900 via-fuchsia-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-[#716DC2]">
              TECHNOLOGY
            </span>
            <span className="text-sm text-fuchsia-100">B2–C1 · 8 min read</span>
          </div>
          <div className="max-w-3xl">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#7772D5] shadow-sm">
              <MessageCircle size={25} />
            </div>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Social Media and Society
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
              Explore how social media influences communication, relationships,
              public discussions and the way people access information.
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
                Social media has become an important part of modern life.
                Platforms that allow users to share messages, photographs,
                videos and ideas have changed how individuals communicate and
                access information. People can maintain friendships, follow
                current events and participate in communities without being
                physically present in the same location.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                However, the growing influence of social networking also raises
                questions about privacy, misinformation, online behaviour and
                the quality of human relationships. Understanding both the
                benefits and limitations of these platforms is essential for
                responsible digital participation.
              </p>
            </section>

            <section id="communication" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <MessageCircle className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">2. Communication and Connectivity</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                One of the main advantages of social media is its ability to
                connect people across geographical boundaries. Families,
                friends and colleagues can communicate quickly, while online
                communities allow individuals with shared interests to
                exchange ideas and experiences.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Social platforms can also support education and professional
                development. Students may join learning communities, discover
                useful resources and communicate with people working in their
                fields of interest. Nevertheless, digital communication does
                not always provide the same depth as direct personal
                interaction.
              </p>
            </section>

            <section id="information" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Globe className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">3. Information and Public Awareness</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Social media has changed how news and information circulate.
                Users can learn about events quickly, follow discussions and
                discover different perspectives. Charities, educational
                organisations and public institutions can also use digital
                campaigns to increase awareness of important issues.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                At the same time, inaccurate information can spread rapidly.
                Posts may be shared before their claims are checked, and
                emotionally engaging content can attract attention regardless
                of its reliability. Developing media literacy and checking
                information against trustworthy sources are therefore
                important skills.
              </p>
            </section>

            <section id="challenges" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Users className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">4. Social and Personal Challenges</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Although social media can strengthen connections, excessive
                use may compete with time for study, sleep, hobbies and
                face-to-face activities. Constant notifications can also make
                it difficult for some users to concentrate on a single task.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Online spaces can expose users to cyberbullying, unrealistic
                comparisons and unwanted contact. The way platforms collect
                and use personal information is another important concern.
                These challenges highlight the need for digital awareness,
                privacy controls and respectful online behaviour.
              </p>
            </section>

            <section id="responsibility" className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <div className="mb-4 flex items-center gap-3">
                <Lightbulb className="text-[#817BD7]" />
                <h2 className="text-xl font-bold">5. Responsible Use of Social Media</h2>
              </div>
              <p className="leading-8 text-[#626783]">
                Responsible social media use involves thinking carefully
                before publishing content, respecting other users and
                protecting personal information. Individuals can review
                privacy settings, question unfamiliar claims and take breaks
                from digital platforms when necessary.
              </p>
              <p className="mt-4 leading-8 text-[#626783]">
                Schools can support media literacy by teaching students how to
                evaluate sources and communicate respectfully online.
                Technology companies also have a role in improving content
                moderation, transparency and user safety. A balanced approach
                allows society to benefit from digital communication while
                recognising its limitations.
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
                Social media has become an essential part of modern
                communication. Some people believe it has a positive influence
                on society, while others argue that it creates more problems
                than benefits.
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
                  ["information", "Information & Awareness"],
                  ["challenges", "Social Challenges"],
                  ["responsibility", "Responsible Use"],
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
