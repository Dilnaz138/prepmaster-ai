import { useState } from "react";

const questions = [
  {
    question: "Why can recorded lessons be useful even when students have a teacher?",
    options: ["They remove the need for feedback", "Students can revisit difficult explanations", "They guarantee higher exam scores"],
    answer: 1,
    explanation: "Replaying explanations supports revision, but it does not replace feedback or guarantee results.",
  },
  {
    question: "What does the digital divide refer to?",
    options: ["Differences in access to devices, internet and digital skills", "The gap between school holidays", "The difference between online and printed exams"],
    answer: 0,
    explanation: "Access is not just owning a device: connectivity, digital skills and a suitable study space matter too.",
  },
  {
    question: "Which conclusion best matches the article?",
    options: ["All education should move online", "Online learning is always less effective", "Effective learning depends on teaching design, support and context"],
    answer: 2,
    explanation: "The article argues against a simple online-versus-classroom answer.",
  },
];

const vocabulary = [
  { term: "Digital divide", definition: "Unequal access to digital technology and the skills needed to use it.", example: "The digital divide can widen existing educational inequalities." },
  { term: "Self-paced learning", definition: "Learning at a speed that suits the individual.", example: "Self-paced learning helps students revisit difficult concepts." },
  { term: "Student engagement", definition: "The attention and active participation learners bring to a course.", example: "Regular feedback can improve student engagement." },
  { term: "Blended learning", definition: "A combination of online and face-to-face teaching.", example: "Blended learning can combine flexible resources with classroom discussion." },
  { term: "Accessibility", definition: "How easily a service or opportunity can be reached and used.", example: "Remote lessons may improve accessibility for students far from campus." },
  { term: "Learning outcomes", definition: "The knowledge and abilities learners develop through study.", example: "Course designers should evaluate learning outcomes, not just attendance." },
];

export default function OnlineEducationPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [savedWords, setSavedWords] = useState<string[]>([]);
  const [reflection, setReflection] = useState("");
  const [showExample, setShowExample] = useState(false);
  const score = questions.filter((q, i) => answers[i] === q.answer).length;
  const wordCount = reflection.trim() ? reflection.trim().split(/\s+/).length : 0;

  function toggleWord(term: string) {
    setSavedWords((current) => current.includes(term) ? current.filter((word) => word !== term) : [...current, term]);
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-slate-800 sm:px-6 lg:py-12">
      <a href="/ielts/topics" className="text-sm font-semibold text-violet-700 hover:underline">← Back to Topic Academy</a>

      <header className="mt-7 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-950 via-indigo-900 to-slate-900 px-6 py-10 text-white sm:px-10 sm:py-14">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">Topic Academy / Education / B2</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">Can Online Education Really Replace the Classroom?</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-indigo-100">A closer look at access, motivation, human connection and what actually makes learning effective.</p>
        <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold">
          <span className="rounded-full bg-white/15 px-3 py-2">~7 min reading</span>
          <span className="rounded-full bg-white/15 px-3 py-2">6 expressions</span>
          <span className="rounded-full bg-white/15 px-3 py-2">3 comprehension questions</span>
        </div>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_230px]">
        <article className="min-w-0 space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
          <section>
            <p className="text-lg leading-9 text-slate-700">Imagine two students attending the same university course. One travels an hour to a lecture hall each morning. The other opens a laptop at home, watches the lesson and pauses whenever an explanation becomes confusing. Both have access to the same subject, but their experiences are different. Which student is receiving the better education?</p>
            <p className="mt-4 leading-8 text-slate-700">It is tempting to choose a side. Yet the more useful question is not whether a screen is better than a classroom. It is <strong>what conditions help people learn</strong>—and whether those conditions can exist in both places.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">A classroom without borders</h2>
            <p className="mt-4 leading-8">For many learners, the most important benefit of online education is not convenience; it is opportunity. Someone living far from a university may be able to study without moving to another city. A working adult may follow lessons outside normal office hours. A student who needs more time with a difficult concept can replay an explanation instead of hoping to remember every word from a live lecture.</p>
            <p className="mt-4 leading-8">This flexibility is often described as <strong>self-paced learning</strong>. However, flexibility alone does not guarantee success. Learners still need a clear course structure, meaningful tasks and feedback that tells them whether they are improving.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">The hidden cost of being connected</h2>
            <p className="mt-4 leading-8">Online education can appear inexpensive because students may spend less on travel or accommodation. But participation has its own requirements: a reliable internet connection, an appropriate device, enough data and somewhere reasonably quiet to concentrate. These resources are not distributed equally.</p>
            <p className="mt-4 leading-8">This inequality is called the <strong>digital divide</strong>. A student who shares one phone with family members may struggle to complete a video-based assignment, even when the course itself is free. Digital skills matter too: knowing how to find files, communicate with teachers and judge whether online information is trustworthy can shape a learner's experience.</p>
            <aside className="mt-5 rounded-2xl border-l-4 border-violet-500 bg-violet-50 p-5 text-sm leading-7 text-violet-950"><strong>Think about it:</strong> If two students receive the same online materials but have very different internet access and home environments, are they receiving equal educational opportunities?</aside>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">Why human interaction still matters</h2>
            <p className="mt-4 leading-8">A good lesson is more than information delivered from a teacher to a student. In classrooms, learners can ask unexpected questions, notice when classmates are confused and develop ideas through discussion. Group activities also provide practice in explaining, negotiating and listening to different opinions.</p>
            <p className="mt-4 leading-8">Online courses can support these experiences through live discussions, small-group activities and timely teacher feedback. But simply uploading long videos does not create a learning community. Strong <strong>student engagement</strong> requires deliberate design: clear expectations, opportunities to participate and a sense that someone is paying attention to progress.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">The best approach may be a combination</h2>
            <p className="mt-4 leading-8">Instead of choosing between two extremes, many educators use <strong>blended learning</strong>: online resources combined with face-to-face activities. Students might watch an explanation before class and then spend classroom time debating, solving problems or asking questions. In this arrangement, technology handles some forms of content delivery while teachers focus on interaction and support.</p>
            <p className="mt-4 leading-8">Not every subject or learner needs the same balance. A theoretical lecture may work well as a recording, while practical laboratory work can require equipment, supervision and collaboration. A highly independent adult learner may enjoy an online course; a younger student may benefit from a more structured environment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">So, can online learning replace school?</h2>
            <p className="mt-4 leading-8">In some situations, online learning can provide an excellent alternative. In others, it works best as a supplement. Its success depends on access, teaching quality, feedback, social connection and the needs of individual students.</p>
            <p className="mt-4 leading-8">The real goal should not be to defend a particular format. It should be to create education that people can access, participate in and learn from. When we judge education by its <strong>learning outcomes</strong> rather than by where students sit, the debate becomes much more useful.</p>
          </section>

          <footer className="border-t border-slate-200 pt-5 text-sm leading-7 text-slate-600">
            <p className="font-bold text-slate-900">Further reading</p>
            <p>This is an original educational overview, not a reproduction of a news article. For deeper research, explore:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li><a className="text-violet-700 underline" href="https://www.unesco.org/en/digital-education" target="_blank" rel="noreferrer">UNESCO — Digital education</a></li>
              <li><a className="text-violet-700 underline" href="https://www.oecd.org/en/topics/digital-education.html" target="_blank" rel="noreferrer">OECD — Digital education</a></li>
            </ul>
            <p className="mt-2 text-xs">These are general background resources; the article does not claim to summarize a specific study.</p>
          </footer>
        </article>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-6">
          <h2 className="font-bold text-slate-900">In this lesson</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
            <li>Understand the issue</li><li>Learn vocabulary</li><li>Check comprehension</li><li>Develop your own view</li>
          </ol>
          <p className="mt-5 rounded-xl bg-violet-50 p-3 text-sm text-violet-900">Read for ideas first. You don't need to memorize paragraphs to write a good essay.</p>
        </aside>
      </div>

      <section className="mt-9 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-700">Vocabulary in context</p>
        <h2 className="mt-2 text-2xl font-bold">Useful language from the article</h2>
        <p className="mt-2 text-sm text-slate-600">Save the expressions you want to practise. Saved selections stay on this page until you refresh.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {vocabulary.map((item) => (
            <div key={item.term} className="rounded-2xl border border-slate-200 p-5">
              <div className="flex items-start justify-between gap-2"><h3 className="font-bold text-violet-800">{item.term}</h3><button type="button" onClick={() => toggleWord(item.term)} className="shrink-0 rounded-lg border border-violet-200 px-3 py-1 text-xs font-semibold text-violet-800 hover:bg-violet-50">{savedWords.includes(item.term) ? "✓ Saved" : "+ Save"}</button></div>
              <p className="mt-2 text-sm leading-6 text-slate-700">{item.definition}</p>
              <p className="mt-3 text-sm italic leading-6 text-slate-500">“{item.example}”</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-9 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-700">Reading comprehension</p>
        <h2 className="mt-2 text-2xl font-bold">Did you understand the article?</h2>
        <div className="mt-6 space-y-7">
          {questions.map((item, i) => (
            <fieldset key={item.question} className="space-y-3">
              <legend className="font-semibold text-slate-900">{i + 1}. {item.question}</legend>
              {item.options.map((option, j) => (
                <label key={option} className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 text-sm ${answers[i] === j ? "border-violet-500 bg-violet-50" : "border-slate-200 hover:bg-slate-50"}`}>
                  <input type="radio" name={`question-${i}`} checked={answers[i] === j} onChange={() => { setAnswers((prev) => ({ ...prev, [i]: j })); setChecked(false); }} className="mt-0.5 accent-violet-600" />{option}
                </label>
              ))}
              {checked && <p className={`text-sm ${answers[i] === item.answer ? "text-emerald-700" : "text-amber-800"}`}>{answers[i] === item.answer ? "Correct. " : "Review: "}{item.explanation}</p>}
            </fieldset>
          ))}
        </div>
        <button type="button" onClick={() => setChecked(true)} disabled={Object.keys(answers).length !== questions.length} className="mt-6 rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-40">Check answers</button>
        {checked && <p className="mt-3 font-semibold text-slate-800">Your score: {score} / {questions.length}</p>}
      </section>

      <section className="mt-9 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
        <p className="text-xs font-bold uppercase tracking-widest text-violet-700">From knowledge to expression</p>
        <h2 className="mt-2 text-2xl font-bold">What do you think?</h2>
        <p className="mt-3 leading-7 text-slate-700">An IELTS-style question: <strong>Some people believe online education can replace traditional classroom learning. To what extent do you agree or disagree?</strong></p>
        <p className="mt-3 text-sm leading-7 text-slate-600">Write 80–120 words explaining your own opinion. Use one idea from the article, then add a real or plausible example. There is no single correct position.</p>
        <textarea value={reflection} onChange={(event) => setReflection(event.target.value)} className="mt-5 min-h-44 w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-violet-500" placeholder="I believe that online education..." aria-label="Your opinion about online education" />
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3"><span className="text-sm text-slate-500">{wordCount} words</span><button type="button" onClick={() => setShowExample((current) => !current)} className="rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-800 hover:bg-violet-50">{showExample ? "Hide sample" : "See a sample response"}</button></div>
        {showExample && <div className="mt-5 rounded-2xl bg-emerald-50 p-5 text-sm leading-7 text-slate-800"><strong>One possible response:</strong> I do not think online education should completely replace classrooms. Recorded lessons can help students review difficult material, and remote courses may make education more accessible to people who live far from universities. However, learning also depends on interaction. In a classroom, students can discuss ideas and receive immediate feedback from their teachers. For example, a science student may understand a concept through an online video but still need practical laboratory experience. Therefore, I believe a blended approach is more effective than relying entirely on either method.</div>}
        <p className="mt-5 text-xs text-slate-500">This exercise is for independent practice. It does not automatically submit your response to AI feedback.</p>
      </section>
    </main>
  );
}
