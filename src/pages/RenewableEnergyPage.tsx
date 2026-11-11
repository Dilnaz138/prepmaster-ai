import { useState } from "react";
import { Link } from "react-router-dom";
import VocabularyFlashcards from "../components/VocabularyFlashcards";

const vocabulary = [
  { word: "Energy transition", meaning: "The shift from fossil fuels to lower-emission energy sources.", example: "The energy transition also requires changes to electricity networks." },
  { word: "Intermittent", meaning: "Available at some times but not continuously.", example: "Wind and solar generation are intermittent because weather conditions change." },
  { word: "Energy security", meaning: "Reliable access to energy at affordable prices.", example: "A diverse mix of energy sources can improve energy security." },
  { word: "Upfront costs", meaning: "Expenses paid at the beginning of a project.", example: "Solar farms have upfront costs but relatively low operating costs." },
  { word: "Grid infrastructure", meaning: "The equipment and networks that move electricity from producers to users.", example: "Better grid infrastructure can connect windy regions to cities." },
  { word: "Energy storage", meaning: "Methods of saving energy for use at a later time.", example: "Energy storage can help supply electricity after sunset." },
];

const questions = [
  { question: "Why doesn't installing more solar panels automatically guarantee reliable electricity?", options: ["Panels always produce power at night", "Electricity supply and demand must be balanced across time", "Solar power cannot connect to the grid"], answer: 1, explanation: "Generation changes with daylight and weather, so grids also need flexibility, storage and transmission." },
  { question: "Which statement best describes the role of batteries?", options: ["They create additional energy", "They store electricity for use later", "They replace every other energy source"], answer: 1, explanation: "Batteries move electricity from one time to another; they do not generate energy themselves." },
  { question: "What is the article's central conclusion?", options: ["Renewables are useless without perfect weather", "All countries should follow the same plan", "Successful transitions require coordinated investment beyond generation"], answer: 2, explanation: "The article emphasizes electricity generation, networks, storage, affordability and local conditions together." },
];

export default function RenewableEnergyPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [reflection, setReflection] = useState("");
  const [showExample, setShowExample] = useState(false);
  const score = questions.filter((q, i) => answers[i] === q.answer).length;
  const wordCount = reflection.trim() ? reflection.trim().split(/\s+/).length : 0;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 text-slate-800 sm:px-6 lg:px-8">
      <Link to="/ielts/topics" className="mb-6 inline-block text-sm font-semibold text-violet-700 hover:underline">← Back to Topic Academy</Link>
      <header className="overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-teal-800 to-slate-900 p-7 text-white sm:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Topic Academy / Environment</p>
        <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl">Can Renewable Energy Really Power Our Future?</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50">Wind and solar energy are transforming electricity systems. The difficult question is not only how to produce cleaner power, but how to deliver it whenever people need it.</p>
        <div className="mt-7 flex flex-wrap gap-2 text-xs font-semibold"><span className="rounded-full bg-white/15 px-3 py-2">B2–C1</span><span className="rounded-full bg-white/15 px-3 py-2">8–10 min read</span><span className="rounded-full bg-white/15 px-3 py-2">Article + quiz + writing</span></div>
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_230px]">
        <article className="min-w-0 space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">The big picture</p>
            <h2 className="mt-2 text-2xl font-bold">The challenge behind the clean-energy revolution</h2>
            <div className="mt-5 space-y-5 text-[16px] leading-8 text-slate-700">
              <p>Imagine a city on a windy afternoon. Turbines outside the city are producing more electricity than homes and businesses need. A few hours later, the wind slows just as people return home, turn on their lights and begin cooking. The city still needs power—but the turbines are now generating less. This simple example reveals one of the central challenges of renewable energy: electricity must be available at the moment it is needed.</p>
              <p>For much of the last century, electricity systems were built around large power stations that could be operated according to demand. Today, many countries are adding solar panels and wind turbines because they generate electricity without burning fuel during operation. Their expansion can reduce greenhouse gas emissions and, in some places, dependence on imported fossil fuels. Yet the <strong>energy transition</strong> involves far more than replacing one power plant with another.</p>
              <h3 className="text-xl font-bold text-slate-900">Why sunshine and wind are only part of the answer</h3>
              <p>Solar panels convert sunlight into electricity, while wind turbines use moving air to turn a generator. Both technologies depend on natural conditions. Solar output falls in the evening, and wind speeds can change unexpectedly. This variability is often described as <strong>intermittency</strong>. It does not make renewable energy impractical, but it means the electricity system must become more flexible.</p>
              <p>One solution is <strong>energy storage</strong>. Batteries can absorb electricity when production is plentiful and release it later. However, a battery is not a new source of energy: it simply shifts energy from one period to another. Other options include pumped-storage hydropower, flexible demand, and electricity generation that can respond when wind and solar output is low. Different regions need different combinations of these solutions.</p>
              <h3 className="text-xl font-bold text-slate-900">The invisible importance of the grid</h3>
              <p>Renewable resources are not always located near major cities. A windy plain or sunny desert may offer excellent conditions for power generation but be far from the people who use the electricity. Transmission lines and other <strong>grid infrastructure</strong> are needed to transport that power. When networks are congested or outdated, renewable electricity may be wasted even when turbines and panels are capable of producing it.</p>
              <p>Building new lines can take time. Projects may require permits, public consultation and cooperation across regions. This helps explain why a country can invest heavily in renewable generation while still struggling to use all of the electricity it produces.</p>
              <h3 className="text-xl font-bold text-slate-900">Is renewable energy affordable?</h3>
              <p>Costs are more complicated than the price of a solar panel. Wind and solar projects often have substantial <strong>upfront costs</strong>, followed by relatively low fuel expenses because sunlight and wind are free. But an entire electricity system must also pay for networks, storage, maintenance and backup arrangements. Comparing technologies fairly therefore requires looking at both the cost of generating power and the cost of delivering reliable electricity.</p>
              <p>There is also a social question: who pays for the transition? Governments may support cleaner infrastructure because society benefits from lower pollution and more diverse energy supplies. Yet public budgets are limited, and spending decisions must be weighed against other priorities. Well-designed policies can encourage private investment while protecting households that may struggle with energy bills.</p>
              <h3 className="text-xl font-bold text-slate-900">A future built on combinations, not slogans</h3>
              <p>No single technology solves every problem. A country with powerful rivers may rely partly on hydropower, while another with strong coastal winds may expand offshore wind farms. Some regions can share electricity across borders; others need stronger local storage or more flexible demand. Energy efficiency matters too: reducing wasted electricity makes the whole challenge easier.</p>
              <p>The most useful question is therefore not whether renewable energy is “good” or “bad.” It is how countries can build systems that are <strong>clean, reliable and affordable at the same time</strong>. The answer depends on geography, infrastructure, economic resources and careful planning. Renewable energy can be a major part of that future, but successful transitions require coordinated decisions—not just more turbines and panels.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-700">Learn in context</p>
            <h2 className="mt-2 text-2xl font-bold">Academic vocabulary</h2>
            <p className="mt-2 text-slate-600">These expressions appeared in the reading. Notice how each describes a real concept, not just an IELTS phrase.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">{vocabulary.map((item) => <div key={item.word} className="rounded-2xl border border-slate-200 p-4"><h3 className="font-bold text-emerald-800">{item.word}</h3><p className="mt-2 text-sm text-slate-700">{item.meaning}</p><p className="mt-2 text-sm italic text-slate-500">{item.example}</p></div>)}</div>
          </section>
          <VocabularyFlashcards words={vocabulary} />

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-700">Reading comprehension</p>
            <h2 className="mt-2 text-2xl font-bold">Check what you understood</h2>
            <div className="mt-6 space-y-6">{questions.map((q, i) => <div key={q.question} className="rounded-2xl bg-slate-50 p-5"><h3 className="font-semibold">{i + 1}. {q.question}</h3><div className="mt-3 space-y-2">{q.options.map((option, j) => <label key={option} className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 text-sm"><input type="radio" name={`energy-q-${i}`} checked={answers[i] === j} onChange={() => { setAnswers((prev) => ({ ...prev, [i]: j })); setChecked(false); }} className="mt-1 accent-emerald-700" /><span>{option}</span></label>)}</div>{checked && <p className={`mt-3 text-sm ${answers[i] === q.answer ? "text-emerald-700" : "text-amber-800"}`}><strong>{answers[i] === q.answer ? "Correct." : "Review this answer."}</strong> {q.explanation}</p>}</div>)}</div>
            <button type="button" onClick={() => setChecked(true)} disabled={Object.keys(answers).length < questions.length} className="mt-5 rounded-xl bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50">Check answers</button>
            {checked && <p className="mt-3 font-semibold">Your score: {score} / {questions.length}</p>}
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-violet-700">Make the ideas your own</p>
            <h2 className="mt-2 text-2xl font-bold">From reading to IELTS writing</h2>
            <p className="mt-4 leading-7 text-slate-700"><strong>Practice prompt:</strong> Some people believe governments should invest more in renewable energy, while others think public funds should be spent on more immediate needs. Discuss both views and give your opinion.</p>
            <p className="mt-4 text-slate-600">Before writing a full essay, choose one insight from the article. Explain why it matters, give an example, and acknowledge one possible limitation. Aim for 80–120 words.</p>
            <textarea value={reflection} onChange={(e) => setReflection(e.target.value)} placeholder="One idea that stood out to me was..." className="mt-4 min-h-44 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-violet-500" />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-slate-500">{wordCount} words</p><button type="button" onClick={() => setShowExample(!showExample)} className="rounded-xl border border-violet-300 px-4 py-2 font-semibold text-violet-700 hover:bg-violet-50">{showExample ? "Hide example" : "See an example approach"}</button></div>
            {showExample && <div className="mt-4 rounded-xl bg-violet-50 p-5 text-sm leading-7 text-slate-700"><strong>Example approach (not for memorising):</strong> Governments should consider investing in electricity networks alongside renewable generation. For example, a new wind farm may produce plenty of power, but without sufficient transmission capacity that electricity cannot reach distant cities. Better networks can therefore make existing renewable projects more useful. However, transmission upgrades can be expensive and may take years to approve. This suggests that public spending should be planned around the needs of the whole electricity system rather than individual projects alone.</div>}
            <Link to="/ielts/vocabulary/review" className="mt-6 inline-block rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white hover:bg-violet-800">Review vocabulary →</Link>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"><h2 className="text-xl font-bold">Explore reliable sources</h2><p className="mt-2 text-sm text-slate-600">For further research, these organisations publish accessible explanations and data. This article is an original educational overview, not a quotation from these sources.</p><ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-violet-700"><li><a className="hover:underline" href="https://www.iea.org/topics/renewables" target="_blank" rel="noreferrer">International Energy Agency — Renewables</a></li><li><a className="hover:underline" href="https://www.irena.org/" target="_blank" rel="noreferrer">International Renewable Energy Agency</a></li><li><a className="hover:underline" href="https://www.energy.gov/eere/renewable-energy" target="_blank" rel="noreferrer">U.S. Department of Energy — Renewable Energy</a></li></ul></section>
        </article>
        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 lg:sticky lg:top-6"><h2 className="font-bold">Your reading journey</h2><ol className="mt-4 space-y-3 text-sm text-slate-600"><li>01 · Understand the issue</li><li>02 · Learn vocabulary</li><li>03 · Test comprehension</li><li>04 · Form your own opinion</li></ol><p className="mt-5 border-t pt-4 text-xs leading-5 text-slate-500">Tip: Read once for the main idea. Read again to notice examples, contrasts and useful vocabulary.</p></aside>
      </div>
    </main>
  );
}
