
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
  
} from "lucide-react";

const vocabulary = [
  {
    term: "higher education",
    definition: "Education provided by universities and other institutions after secondary school.",
    example: "Higher education can prepare students for specialised careers.",
  },
  {
    term: "academic qualifications",
    definition: "Certificates or degrees awarded after completing a course of study.",
    example: "Some professions require specific academic qualifications.",
  },
  {
    term: "critical thinking",
    definition: "The ability to examine information and make reasoned judgements.",
    example: "University discussions can help students develop critical thinking.",
  },
  {
    term: "employability",
    definition: "The skills and qualities that help someone obtain and maintain employment.",
    example: "Work placements can improve graduates' employability.",
  },
  {
    term: "tuition fees",
    definition: "Money paid for teaching and educational instruction.",
    example: "High tuition fees may limit access to university for some students.",
  },
  {
    term: "lifelong learning",
    definition: "The continuous development of knowledge and skills throughout life.",
    example: "Lifelong learning helps people adapt to changes in their careers.",
  },
];

const questions = [
  {
    question: "What is one purpose of higher education?",
    options: [
      "To eliminate the need for practical experience",
      "To develop specialised knowledge and skills",
      "To guarantee employment for every graduate",
    ],
    answer: 1,
    explanation:
      "Universities provide opportunities to develop subject knowledge, practical abilities and transferable skills.",
  },
  {
    question: "What can make university education less accessible?",
    options: [
      "Student discussions",
      "Academic research",
      "High tuition fees and living costs",
    ],
    answer: 2,
    explanation:
      "The financial cost of studying can create barriers for students from lower-income backgrounds.",
  },
  {
    question: "Why is lifelong learning important?",
    options: [
      "It helps people update their knowledge and skills",
      "It means formal education never ends",
      "It guarantees promotion at work",
    ],
    answer: 0,
    explanation:
      "Continuous learning can help people respond to new technologies and changing employment requirements.",
  },
];

export default function HigherEducationPage() {
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
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-indigo-100 hover:text-indigo-200"
        >
          <ArrowLeft size={16} />
          Back to Topic Academy
        </Link>

        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-indigo-200">
              <GraduationCap size={15} />
              Education · B2–C1
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              The Importance of Higher Education
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-indigo-50 sm:text-lg">
              Discover how universities contribute to personal development,
              professional opportunities and society, while exploring the
              challenges surrounding access to education.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-indigo-100">
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
              <GraduationCap size={92} strokeWidth={1.2} />
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
                What is higher education?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Higher education refers to learning that takes place after
                  secondary school, usually at universities, colleges and
                  other specialised institutions. Students can study a wide
                  range of subjects, from engineering and medicine to
                  economics, languages and the arts.
                </p>

                <p>
                  Universities provide more than academic information.
                  Students are encouraged to analyse ideas, conduct research,
                  discuss different perspectives and apply knowledge to
                  practical situations. These experiences can help develop
                  independence and intellectual curiosity.
                </p>

                <p>
                  Higher education also allows people to explore particular
                  interests in greater depth. However, attending university
                  is not the only path to success. Vocational training,
                  apprenticeships and professional experience can also
                  provide valuable career opportunities.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="benefits" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                02 · Personal and professional benefits
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                How university education can help individuals
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  One important benefit of higher education is the opportunity
                  to gain specialised knowledge. Certain careers, including
                  medicine, law and engineering, require extensive formal
                  education and professional qualifications.
                </p>

                <p>
                  University life can also develop transferable skills.
                  Group projects encourage teamwork, presentations improve
                  communication, and research assignments require students
                  to evaluate information and think critically.
                </p>

                <p>
                  These skills may improve employability, although a degree
                  does not guarantee a job. Employers often consider practical
                  experience, communication abilities and individual
                  performance alongside academic qualifications.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F3F2FF] p-5">
                <div className="flex gap-3">
                  <Lightbulb className="mt-1 shrink-0 text-[#7669D8]" size={20} />
                  <p className="text-sm leading-7 text-slate-700">
                    <strong className="text-[#35365F]">Think about it:</strong>{" "}
                    Should students choose a university degree based mainly
                    on career opportunities or personal interests?
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="society" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                03 · Benefits for society
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                The role of universities in social development
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Universities contribute to society through research,
                  innovation and the education of skilled professionals.
                  Scientific discoveries and new technologies developed
                  through academic research can influence healthcare,
                  industry, agriculture and communication.
                </p>

                <p>
                  Higher education can also support economic development.
                  A skilled workforce may help businesses introduce new
                  products, improve services and respond to technological
                  changes.
                </p>

                <p>
                  In addition, universities bring together people with
                  different experiences and perspectives. Academic discussion
                  can encourage debate, cultural understanding and informed
                  participation in public life.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="challenges" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                04 · Challenges and accessibility
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Is higher education equally accessible?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Despite its potential benefits, access to higher education
                  is not equal for everyone. Tuition fees, accommodation,
                  transport and study materials can create significant
                  financial barriers.
                </p>

                <p>
                  Students living in rural areas may also have fewer nearby
                  institutions or limited access to educational resources.
                  Differences in school quality and internet access can
                  influence how prepared students are for university.
                </p>

                <p>
                  Governments and educational institutions can address some
                  of these challenges through scholarships, affordable
                  accommodation, financial support and accessible online
                  courses. Clear information about admission requirements
                  can also help students make informed decisions.
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
                              ? "bg-[#E9E7FF] text-indigo-200"
                              : "bg-[#F3F4F8] text-indigo-100 hover:bg-[#E9E7FF]"
                          }`}
                        >
                          {saved ? "Saved ✓" : "Save"}
                        </button>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-indigo-100">
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
                      <p className="mt-3 text-sm leading-6 text-indigo-100">
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
                  <p className="mt-2 text-sm text-indigo-100">
                    Review the explanations above, then try the quiz again.
                  </p>
                  <button
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                    }}
                    className="mt-4 rounded-xl border border-[#D9D5FA] bg-white px-4 py-2 text-sm font-semibold text-indigo-200"
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
                Some people believe that university education should be free
                for everyone, while others think students should pay for
                their own studies. Discuss both views and give your own opinion.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">
                  Remember to:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-6 text-[#D4D7E8]">
                  <li>Discuss the advantages of free education.</li>
                  <li>Consider the financial responsibilities of students.</li>
                  <li>Support your arguments with examples.</li>
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

              <nav className="mt-4 space-y-3 text-sm text-indigo-100">
                <a className="block hover:text-[#6B5FD0]" href="#introduction">
                  Understanding the topic
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#benefits">
                  Personal and professional benefits
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#society">
                  Benefits for society
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#challenges">
                  Challenges and accessibility
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
                When discussing education, compare individual benefits
                with its wider economic and social impact.
              </p>
            </div>

            <Link
              to="/ielts/topics"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#E4E5EF] bg-white p-4 text-sm font-bold text-[#686D91] hover:border-[#C9C4F4] hover:text-indigo-200"
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
