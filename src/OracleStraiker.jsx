import React from 'react';

const stages = [
  {title:'Bug intake', detail:'OpenProse extracts the task intent.'},
  {title:'Isolated workspace', detail:'GoTemporal workers start Docker containers.'},
  {title:'Agent run', detail:'A memory agent prepares context. Pi runs a Codex model and delegates code edits and review to agents; ActiveGraph records agent activity.'},
  {title:'Session outcome', detail:'Actions and fix results are saved in Oracle Database.'},
];

const learning = [
  {title:'Daily consolidation', detail:'An offline agent reviews session memories and identifies reusable lessons.'},
  {title:'Human review', detail:'Candidate learning cards appear on a dashboard for approval.'},
  {title:'Next bug', detail:'Approved cards return to memory and guide later debugging runs.'},
];

export default function OracleStraiker(){
  return <section className="straiker-project reveal" id="straiker" aria-labelledby="straiker-title">
    <h2 id="straiker-title">Oracle Straiker</h2>
    <p className="straiker-subtitle">Autonomous bug resolution system</p>
    <p className="straiker-summary">At Oracle, I built a self-learning loop on top of an existing bug-resolution agent harness. I added session outcome recording, a daily workflow that consolidated those memories into learning cards, and a human review step before approved lessons entered the agent’s future context. This improved bug-resolution accuracy by <strong>22%</strong> and reduced the time needed to resolve new bugs.</p>
    <figure className="straiker-diagram" aria-labelledby="straiker-diagram-caption">
      <div className="straiker-diagram-group">
        <h3>Resolve a bug</h3>
        <ol className="straiker-steps">{stages.map((stage,i)=><li key={stage.title}><span className="straiker-number">0{i+1}</span><strong>{stage.title}</strong><span>{stage.detail}</span></li>)}</ol>
      </div>
      <div className="straiker-loop-note" aria-hidden="true"><span>↓</span> Experience becomes reusable memory <span>↺</span></div>
      <div className="straiker-diagram-group">
        <h3>Learn from completed runs</h3>
        <ol className="straiker-steps straiker-learning">{learning.map((stage,i)=><li key={stage.title}><span className="straiker-number">0{i+1}</span><strong>{stage.title}</strong><span>{stage.detail}</span></li>)}</ol>
      </div>
      <figcaption id="straiker-diagram-caption">Approved learning cards are stored in Oracle Database and retrieved for relevant future bugs.</figcaption>
    </figure>
    <div className="straiker-references"><span>Related ideas and components</span><a href="https://arxiv.org/abs/2605.20616" target="_blank" rel="noopener noreferrer">Auto-Dreamer (inspiration) ↗</a><a href="https://arxiv.org/abs/2605.21997" target="_blank" rel="noopener noreferrer">ActiveGraph ↗</a><a href="https://prose.md/" target="_blank" rel="noopener noreferrer">OpenProse ↗</a></div>
  </section>
}
