import React from 'react';

const workflow = [
  ['01', 'Triage', 'OpenProse extracts bug intent'],
  ['02', 'Workspace', 'GoTemporal worker · Docker'],
  ['03', 'Resolve', 'Pi + Codex · edit and review agents'],
  ['04', 'Record', 'ActiveGraph monitoring · outcome log'],
];

export default function OracleStraiker(){
  return <section className="straiker-project reveal" id="straiker" aria-labelledby="straiker-title">
    <h2 id="straiker-title">Oracle Straiker</h2>
    <p className="straiker-subtitle">Autonomous bug resolution system</p>
    <p className="straiker-intro">Straiker triages bugs into isolated workspaces where agents edit and review code. I built the learning layer that lets later runs draw on what earlier runs discovered.</p>

    <div className="straiker-highlights" aria-label="My contribution and impact">
      <div><span className="straiker-kicker">My work</span><ul>
        <li>Recorded each agent run, its actions, and whether the fix succeeded in Oracle Database.</li>
        <li>Built a daily consolidation workflow that turns run histories into learning cards for human review.</li>
        <li>Fed approved cards back into the context of relevant future bugs.</li>
      </ul></div>
      <div className="straiker-impact"><span className="straiker-kicker">Impact</span><strong>+22%</strong><span>bug-resolution accuracy</span><p>Also reduced time to resolution.</p></div>
    </div>

    <figure className="straiker-flow" aria-labelledby="straiker-flow-title">
      <figcaption id="straiker-flow-title">Bug-resolution harness <span>existing system + my recording layer</span></figcaption>
      <ol>{workflow.map(([number,title,detail])=><li key={number}><span>{number}</span><strong>{title}</strong><small>{detail}</small></li>)}</ol>
    </figure>

    <figure className="straiker-memory" aria-labelledby="straiker-memory-title">
      <figcaption id="straiker-memory-title">Learning memory <span>designed and implemented by me</span></figcaption>
      <div className="straiker-memory-grid">
        <section className="straiker-memory-panel">
          <span className="straiker-panel-id">A / STORE</span>
          <h3>Oracle memory bank</h3>
          <p>Run histories and approved learning cards, stored for later retrieval.</p>
          <div className="straiker-memory-entries" aria-label="Stored memory types">
            <div><code>RUN</code><span>actions · outcome · source trace</span></div>
            <div><code>CARD</code><span>approved lesson · source run</span></div>
          </div>
        </section>
        <section className="straiker-memory-panel">
          <span className="straiker-panel-id">B / READ</span>
          <h3>Before a new bug</h3>
          <p>Use the extracted task intent to retrieve relevant approved cards.</p>
          <div className="straiker-mini-flow"><span>Bug intent</span><i aria-hidden="true">→</i><span>Rank cards</span><i aria-hidden="true">→</i><span>Agent context</span></div>
        </section>
        <section className="straiker-memory-panel">
          <span className="straiker-panel-id">C / WRITE</span>
          <h3>After completed runs</h3>
          <p>Consolidate recorded outcomes once a day; publish only reviewed lessons.</p>
          <div className="straiker-mini-flow"><span>Run traces</span><i aria-hidden="true">→</i><span>Daily agent</span><i aria-hidden="true">→</i><span>Human review</span></div>
        </section>
      </div>
      <div className="straiker-feedback"><span>Approved learning cards return to the memory bank</span><span aria-hidden="true">↺</span></div>
    </figure>

    <div className="straiker-references"><span>Related ideas and components</span><a href="https://arxiv.org/abs/2605.20616" target="_blank" rel="noopener noreferrer">Auto-Dreamer (inspiration) ↗</a><a href="https://arxiv.org/abs/2605.21997" target="_blank" rel="noopener noreferrer">ActiveGraph ↗</a><a href="https://prose.md/" target="_blank" rel="noopener noreferrer">OpenProse ↗</a></div>
  </section>
}
