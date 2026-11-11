
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  HeartHandshake,
  Lightbulb,
  Users,
} from "lucide-react";

const vocabulary = [
  {
    term: "volunteerism",
    definition: "The practice of giving time and effort to help others without payment.",
    example: "Volunteerism can strengthen relationships within a community.",
  },
  {
    term: "community service",
    definition: "Activities that benefit the people living in a particular area.",
    example: "Students can participate in community service projects.",
  },
  {
    term: "philanthropy",
    definition: "The desire to promote the welfare of others, often through donations or support.",
    example: "Corporate philanthropy can support local educational programmes.",
  },
  {
    term: "social responsibility",
    definition: "The duty to consider how actions affect society and other people.",
    example: "Social responsibility encourages individuals to contribute to society.",
  },
  {
    term: "civic engagement",
    definition: "Participation in activities that improve public and community life.",
    example: "Civic engagement allows residents to influence local decisions.",
  },
  {
    term: "collective action",
    definition: "People working together to achieve a shared goal.",
    example: "Collective action can help communities address environmental problems.",
  },
];

const questions = [
  {
    question: "What is a central characteristic of volunteering?",
    options: [
      "It always provides a financial reward",
      "It involves giving time to help others",
      "It is limited to professional workers",
    ],
    answer: 1,
    explanation:
      "Volunteering generally involves offering time, skills or effort to support others without expecting payment.",
  },
  {
    question: "How can volunteering benefit young people?",
    options: [
      "It removes the need for education",
      "It guarantees a particular career",
      "It can develop communication and teamwork skills",
    ],
    answer: 2,
    explanation:
      "Volunteering can help young people practise communication, cooperation and problem-solving.",
  },
  {
    question: "Why is community participation important?",
    options: [
      "It helps identify local needs and create shared solutions",
      "It means governments no longer have responsibilities",
      "It prevents people from expressing different opinions",
    ],
    answer: 0,
    explanation:
      "Community participation helps residents work together and contribute to solutions that reflect local needs.",
  },
];

export default function VolunteeringPage() {
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
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-orange-100 hover:text-orange-200"
        >
          <ArrowLeft size={16} />
          Back to Topic Academy
        </Link>

        {/* HERO */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-900 via-orange-800 to-slate-900 p-7 text-white sm:p-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-wider text-orange-200">
              <HeartHandshake size={15} />
              Society · B2–C1
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Volunteering and Community Service
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-orange-50 sm:text-lg">
              Explore how volunteering supports communities, develops
              practical skills and encourages people to take an active role
              in society.
            </p>

            <div className="mt-7 flex flex-wrap gap-5 text-sm font-medium text-orange-100">
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
              <Users size={92} strokeWidth={1.2} />
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
                What is volunteering?
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Volunteering is the act of offering time, knowledge or
                  practical assistance to support other people or a particular
                  cause. Unlike paid employment, volunteering is usually
                  carried out without financial compensation. People may
                  volunteer individually or as members of schools, charities,
                  universities and other organisations.
                </p>

                <p>
                  Community service can take many forms. Examples include
                  helping at food banks, supporting educational activities,
                  organising neighbourhood clean-ups and assisting at
                  community events. These activities respond to different
                  needs and can make local communities more connected.
                </p>

                <p>
                  Volunteering is not limited to one age group or profession.
                  People with different backgrounds can contribute through
                  their abilities, experience and available time.
                </p>
              </div>
            </section>

            {/* SECTION 2 */}
            <section id="community" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                02 · Benefits for communities
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Creating stronger communities
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Volunteers can help organisations provide services to
                  people who need additional support. For example, community
                  groups may organise educational workshops, collect essential
                  supplies or create activities for older residents.
                </p>

                <p>
                  These efforts can also build trust between residents.
                  Working towards a shared goal gives people opportunities
                  to meet others, exchange ideas and understand different
                  experiences. As a result, volunteering may encourage a
                  stronger sense of belonging.
                </p>

                <p>
                  However, volunteers cannot replace essential public
                  services or the responsibilities of professional
                  organisations. Effective community support often requires
                  cooperation between residents, charities, businesses and
                  government institutions.
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-[#F3F2FF] p-5">
                <div className="flex gap-3">
                  <Lightbulb className="mt-1 shrink-0 text-[#7669D8]" size={20} />
                  <p className="text-sm leading-7 text-slate-700">
                    <strong className="text-[#35365F]">Think about it:</strong>{" "}
                    What kinds of volunteer projects could make a positive
                    difference in your local community?
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION 3 */}
            <section id="personal" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                03 · Personal development
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Skills and experience gained through volunteering
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Volunteering can provide practical experience outside
                  traditional classrooms and workplaces. Participants may
                  develop communication, teamwork, leadership and
                  problem-solving skills while completing real tasks.
                </p>

                <p>
                  It can also expose people to different social situations.
                  For example, helping at a community event may require
                  volunteers to communicate with unfamiliar people, organise
                  activities and respond to unexpected challenges.
                </p>

                <p>
                  For students and young adults, these experiences can help
                  them explore interests and understand different career
                  fields. Nevertheless, volunteering should be a meaningful
                  choice rather than an activity undertaken only to improve
                  a CV.
                </p>
              </div>
            </section>

            {/* SECTION 4 */}
            <section id="challenges" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#8A8FA9]">
                04 · Challenges and opportunities
              </p>
              <h2 className="mb-4 text-xl font-bold text-[#252949]">
                Making volunteering more accessible
              </h2>

              <div className="space-y-4 text-[15px] leading-8 text-slate-700">
                <p>
                  Despite its benefits, volunteering can be difficult for
                  people who have limited free time, transport difficulties
                  or financial responsibilities. Some activities also require
                  specialist knowledge or training.
                </p>

                <p>
                  Organisations can make participation easier by offering
                  flexible schedules, clear information and different types
                  of tasks. Online volunteering may also allow people to
                  contribute remotely through translation, tutoring,
                  research or digital support.
                </p>

                <p>
                  Schools, universities and local authorities can promote
                  community projects and help residents discover suitable
                  opportunities. Recognition and constructive feedback can
                  also encourage volunteers to remain involved.
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
                              ? "bg-[#E9E7FF] text-orange-200"
                              : "bg-[#F3F4F8] text-orange-100 hover:bg-[#E9E7FF]"
                          }`}
                        >
                          {saved ? "Saved ✓" : "Save"}
                        </button>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-orange-100">
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
                      <p className="mt-3 text-sm leading-6 text-orange-100">
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
                  <p className="mt-2 text-sm text-orange-100">
                    Review the explanations above, then try the quiz again.
                  </p>
                  <button
                    onClick={() => {
                      setAnswers({});
                      setSubmitted(false);
                    }}
                    className="mt-4 rounded-xl border border-[#D9D5FA] bg-white px-4 py-2 text-sm font-semibold text-orange-200"
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
                Some people believe that everyone should be encouraged to
                participate in voluntary work in their local community.
                Others think that volunteering should remain a personal
                choice. Discuss both views and give your own opinion.
              </p>

              <div className="mt-5 rounded-2xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-white">
                  Remember to:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-6 text-[#D4D7E8]">
                  <li>Explain the benefits of community service.</li>
                  <li>Consider the importance of personal choice.</li>
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

              <nav className="mt-4 space-y-3 text-sm text-orange-100">
                <a className="block hover:text-[#6B5FD0]" href="#introduction">
                  Understanding the topic
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#community">
                  Community benefits
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#personal">
                  Personal development
                </a>
                <a className="block hover:text-[#6B5FD0]" href="#challenges">
                  Challenges and opportunities
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
                In IELTS essays, distinguish between individual
                responsibility and the responsibilities of governments
                and organisations.
              </p>
            </div>

            <Link
              to="/ielts/topics"
              className="flex items-center justify-center gap-2 rounded-2xl border border-[#E4E5EF] bg-white p-4 text-sm font-bold text-[#686D91] hover:border-[#C9C4F4] hover:text-orange-200"
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
