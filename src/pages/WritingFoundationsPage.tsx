import { useState } from "react";
export default function WritingFoundationsPage() {
  const [practiceAnswer, setPracticeAnswer] = useState("");
  const [showExample, setShowExample] = useState(false);
  return (
    <main className="mx-auto max-w-4xl p-8">
      <p className="text-sm font-semibold text-violet-600">
        WRITING ACADEMY · LESSON 1
      </p>

      <h1 className="mt-3 text-4xl font-bold text-slate-900">
        How to Write a High-Level IELTS Essay
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        Great essays are not created by memorising complicated
        vocabulary or using as many linking words as possible.
        They are built through clear reasoning, precise language,
        and logical connections between ideas.
      </p>
      
<section className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-6">
  <div className="mb-4 flex items-center gap-3">
    <span className="text-2xl">🎯</span>
    <h2 className="text-xl font-bold text-slate-900">
      What You Will Learn
    </h2>
  </div>

  <p className="mb-4 text-sm text-slate-600">
    By the end of this lesson, you will be able to:
  </p>

  <ul className="space-y-3">
    {[
      "Structure an IELTS Writing Task 2 essay clearly.",
      "Develop arguments using explanations and examples.",
      "Connect ideas naturally without overusing linking words.",
      "Improve vocabulary with precise academic language.",
      "Recognise the differences between stronger and weaker writing."
    ].map((objective, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
          {index + 1}
        </span>
        <span className="text-sm leading-6 text-slate-700">
          {objective}
        </span>
      </li>
    ))}
  </ul>
</section>

      <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          1. Understand the Essay Structure
        </h2>

        <p className="mt-4 text-gray-600">
          A clear four-paragraph structure works well for many
          IELTS Writing Task 2 questions.
        </p>

        <div className="mt-6 space-y-4">
          {[
            {
              title: "Introduction",
              description:
                "Introduce the topic and present your position clearly.",
            },
            {
              title: "Body Paragraph 1",
              description:
                "Present your first main argument and develop it with reasoning and examples.",
            },
            {
              title: "Body Paragraph 2",
              description:
                "Develop a second relevant argument or perspective.",
            },
            {
              title: "Conclusion",
              description:
                "Summarise your position without introducing new arguments.",
            },
          ].map((part, index) => (
            <div
              key={part.title}
              className="flex gap-4 rounded-xl bg-violet-50 p-5"
            >
              <span className="font-bold text-violet-600">
                0{index + 1}
              </span>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {part.title}
                </h3>

                <p className="mt-1 text-gray-600">
                  {part.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
<section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
  <div className="mb-6">
    <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
      Writing Skills · Comparison
    </span>
    <h2 className="mt-2 text-2xl font-bold text-slate-900">
      Band 6 vs. Band 8: What Makes Writing Stronger?
    </h2>
    <p className="mt-3 text-gray-600">
      Compare two responses to the same IELTS question.
      Notice how stronger writing develops ideas rather than
      simply using difficult words.
    </p>
  </div>

  <div className="rounded-xl bg-slate-50 p-5">
    <p className="text-sm font-semibold text-slate-500">
      IELTS Writing Task 2 — Practice Topic
    </p>
    <p className="mt-2 font-medium text-slate-900">
      Some people believe that online education is more
      effective than traditional classroom learning.
      Discuss both views and give your own opinion.
    </p>
  </div>

  <div className="mt-6 grid gap-5 md:grid-cols-2">
    <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
      <h3 className="font-bold text-amber-800">
        Weaker Paragraph
      </h3>
      <p className="mt-3 leading-7 text-slate-700">
        Online education is good because students can study
        at home. It is convenient and saves time. Many people
        like online education because it is easy. Therefore,
        online learning has many advantages.
      </p>
      <p className="mt-4 text-sm text-amber-900">
        <strong>Why it is weaker:</strong> The paragraph
        repeats similar ideas without explaining how
        flexibility benefits students.
      </p>
    </div>

    <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
      <h3 className="font-bold text-emerald-800">
        Stronger Paragraph
      </h3>
      <p className="mt-3 leading-7 text-slate-700">
        One major advantage of online education is its
        flexibility. Students can attend lessons without
        travelling to a physical classroom, allowing them
        to manage their time more effectively. This is
        particularly beneficial for learners who live far
        from educational institutions or balance their
        studies with other responsibilities.
      </p>
      <p className="mt-4 text-sm text-emerald-900">
        <strong>Why it is stronger:</strong> The paragraph
        presents one clear argument, explains its impact,
        and supports it with relevant examples.
      </p>
    </div>
  </div>

  <div className="mt-6 rounded-xl border border-violet-200 bg-violet-50 p-5">
    <h3 className="font-bold text-violet-900">
      Key Lesson
    </h3>
    <p className="mt-2 text-sm leading-6 text-slate-700">
      Higher-scoring writing is not necessarily more
      complicated. Focus on clear arguments, logical
      development, precise vocabulary, and grammatical
      accuracy. IELTS bands are awarded for the complete
      response across four assessment criteria, so these
      paragraphs are illustrations rather than official
      Band 6 or Band 8 scores.
    </p>
  </div>
</section>

      <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-slate-900">
          2. Connect Ideas Naturally
        </h2>

        <p className="mt-4 text-gray-600">
          Cohesion means that sentences and paragraphs connect
          logically. You do not need to begin every sentence with
          a linking word.
        </p>

        <div className="mt-6 rounded-xl bg-red-50 p-5">
          <p className="mb-2 font-semibold text-red-700">
            Mechanical linking
          </p>
          <p className="text-gray-700">
            Firstly, online education is convenient. Moreover,
            students can study anywhere. Furthermore, they save
            time. Therefore, online education is beneficial.
          </p>
        </div>

        <div className="mt-4 rounded-xl bg-green-50 p-5">
          <p className="mb-2 font-semibold text-green-700">
            Natural cohesion
          </p>
          <p className="text-gray-700">
            One major advantage of online education is its
            flexibility. Students can attend lessons regardless
            of where they live, reducing the time they would
            otherwise spend travelling. This flexibility is
            particularly valuable for students balancing
            education with other responsibilities.
          </p>
        </div>

        <p className="mt-5 text-gray-600">
          Notice how the second paragraph uses explanation,
          reference, and logical progression instead of
          repeatedly adding linking words.
        </p>
      </section>
      
<section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
  <h2 className="text-2xl font-bold text-slate-900">
    3. Develop Strong Arguments
  </h2>

  <p className="mt-4 text-gray-600">
    A strong IELTS essay does more than state an opinion.
    It explains why an argument is convincing and shows
    how it relates to the question.
  </p>

  <div className="mt-6 rounded-xl bg-violet-50 p-5">
    <h3 className="font-semibold text-violet-700">
      The Argument Development Method
    </h3>

    <p className="mt-3 font-medium text-slate-800">
      Main idea → Explanation → Consequence → Example
    </p>

    <p className="mt-2 text-sm text-gray-600">
      This is a learning framework, not a rigid formula.
      Use examples when they genuinely strengthen your argument.
    </p>
  </div>

  <div className="mt-6 space-y-4">
    <div className="rounded-xl border border-gray-200 p-5">
      <p className="font-semibold text-gray-500">
        Basic argument
      </p>
      <p className="mt-2 text-gray-700">
        Governments should invest in public transport
        because it reduces pollution.
      </p>
    </div>

    <div className="rounded-xl border border-violet-200 p-5">
      <p className="font-semibold text-violet-700">
        Developed argument
      </p>
      <p className="mt-2 leading-7 text-gray-700">
        Investing in reliable public transport can
        reduce urban air pollution by encouraging
        commuters to rely less on private vehicles.
        When buses and trains are affordable and
        convenient, more people may choose them
        for their daily journeys. This can reduce
        traffic congestion and vehicle emissions,
        particularly in densely populated cities.
      </p>
    </div>
  </div>

  <div className="mt-6 rounded-xl bg-slate-50 p-5">
    <h3 className="font-semibold text-slate-900">
      Your turn
    </h3>

    <p className="mt-2 text-gray-600">
      Develop this idea into a convincing paragraph:
    </p>

    <p className="mt-3 font-medium text-slate-800">
      Online learning can make education more accessible.
    </p>

    <textarea
      className="mt-4 min-h-36 w-full rounded-xl border border-gray-200 bg-white p-4 outline-none focus:border-violet-500"
      placeholder="Explain why, describe the consequences, and add a relevant example if useful..."
    />
  </div>
</section>
    
<section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
  <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
    Interactive Practice
  </span>

  <h2 className="mt-2 text-2xl font-bold text-slate-900">
    Improve a Weak Argument
  </h2>

  <p className="mt-3 text-slate-600">
    Rewrite the paragraph below using a clear argument,
    explanation, and relevant example.
  </p>

  <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5">
    <p className="text-sm font-semibold text-amber-800">
      Original Paragraph
    </p>
    <p className="mt-2 text-slate-700">
      Online education is good. It is easy and convenient.
      Students like it because it saves time.
    </p>
  </div>

  <label
    htmlFor="writing-practice"
    className="mt-6 block font-semibold text-slate-900"
  >
    Your Improved Paragraph
  </label>

  <textarea
    id="writing-practice"
    value={practiceAnswer}
    onChange={(e) => setPracticeAnswer(e.target.value)}
    placeholder="Write your improved paragraph here..."
    className="mt-3 min-h-40 w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-violet-500"
  />

  <p className="mt-2 text-sm text-slate-500">
    Word count: {
      practiceAnswer.trim()
        ? practiceAnswer.trim().split(/\s+/).length
        : 0
    }
  </p>

  <button
    type="button"
    onClick={() => setShowExample(!showExample)}
    className="mt-5 rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700"
  >
    {showExample ? "Hide Model Answer" : "Show Model Answer"}
  </button>

  {showExample && (
    <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
      <h3 className="font-bold text-emerald-800">
        Model Answer
      </h3>

      <p className="mt-3 leading-7 text-slate-700">
        One significant benefit of online education is
        the flexibility it provides. Students can attend
        lessons from home, reducing the time they spend
        travelling to educational institutions. This
        allows them to devote more time to studying,
        particularly when they have other responsibilities.
      </p>

      <p className="mt-4 text-sm text-emerald-800">
        Notice how the paragraph introduces one main idea,
        explains its benefit, and develops it with a
        specific situation.
      </p>
    </div>
  )}
</section>

    </main>
  );
}
