import React from 'react';

const harness = [
  {id:'01', title:'Bug intake', system:'OpenProse', detail:'Extract task intent from the incoming bug.'},
  {id:'02', title:'Workspace', system:'GoTemporal · Docker', detail:'Triage into an isolated worker-run container.'},
  {id:'03', title:'Context', system:'Memory-building agent', detail:'Assemble task context and relevant approved lessons.'},
  {id:'04', title:'Resolution', system:'Pi · Codex', detail:'Delegate code edits and review to specialist agents.'},
  {id:'05', title:'Run record', system:'ActiveGraph · Oracle DB', detail:'Monitor activity; persist actions and fix outcome.'},
];

export default function OracleStraiker(){
  return <section className="straiker-project reveal" id="straiker" aria-labelledby="straiker-title">
    <h2 id="straiker-title">Oracle Straiker</h2>
    <p className="straiker-subtitle">Autonomous bug resolution system</p>
    <p className="straiker-intro">Straiker routes bugs to isolated GoTemporal and Docker workspaces where Pi coordinates Codex-powered editing and review agents. I built the learning layer that records run outcomes, consolidates lessons, and brings approved knowledge into future runs.</p>

    <div className="straiker-highlights" aria-label="My contribution and impact">
      <div><span className="straiker-kicker">What I built</span><ul>
        <li>Added per-run recording of the agent’s actions and whether its fix succeeded.</li>
        <li>Built a daily offline workflow that reviews those runs, extracts reusable lessons, and proposes learning cards.</li>
        <li>Added human review before approved cards become retrievable context for future bugs.</li>
      </ul></div>
      <div className="straiker-impact"><span className="straiker-kicker">Impact</span><strong>+22%</strong><span>bug-resolution accuracy</span><p>Resolution time also decreased.</p></div>
    </div>

    <details className="straiker-technical">
      <summary><strong>Explore the technical workflow</strong><span>Agent harness · memory read/write loop</span><span className="straiker-toggle" aria-hidden="true">+</span></summary>
      <div className="straiker-technical-content">
    <figure className="straiker-harness" aria-labelledby="straiker-harness-title">
      <figcaption id="straiker-harness-title"><span>01 / ONLINE</span><strong>End-to-end resolution harness</strong><small>Existing agent system with my run-recording layer</small></figcaption>
      <ol>{harness.map(step=><li key={step.id}><span className="straiker-step-id">{step.id}</span><h3>{step.title}</h3><code>{step.system}</code><p>{step.detail}</p></li>)}</ol>
    </figure>

    <figure className="straiker-memory" aria-labelledby="straiker-memory-title">
      <figcaption id="straiker-memory-title"><span>02 / LEARNING LOOP</span><strong>Persistent memory, read, and write</strong><small>My self-learning layer, inspired by offline consolidation in Auto-Dreamer</small></figcaption>
      <div className="straiker-memory-grid">
        <section className="straiker-memory-panel">
          <span className="straiker-panel-id">A / MEMORY BANK</span>
          <h3>Oracle Database</h3>
          <p>Two linked kinds of memory are kept across bug workspaces.</p>
          <div className="straiker-record"><code>RUN RECORD</code><span>bug intent · action/observation trace · fix outcome</span></div>
          <div className="straiker-record"><code>LEARNING CARD</code><span>reusable lesson · source runs · approval state</span></div>
          <div className="straiker-panel-note">Only approved cards are read into future agent context.</div>
        </section>
        <section className="straiker-memory-panel">
          <span className="straiker-panel-id">B / READ OPERATION</span>
          <h3>Before a bug run</h3>
          <ol className="straiker-operation">
            <li><code>INPUT</code><span>OpenProse task intent</span></li>
            <li><code>QUERY</code><span>Retrieve relevant approved cards from the memory bank</span></li>
            <li><code>OUTPUT</code><span>Memory agent assembles context for Pi and its edit/review agents</span></li>
          </ol>
        </section>
        <section className="straiker-memory-panel">
          <span className="straiker-panel-id">C / WRITE OPERATION</span>
          <h3>After completed runs</h3>
          <ol className="straiker-operation">
            <li><code>CAPTURE</code><span>Save run trace and success/failure result</span></li>
            <li><code>DAILY</code><span>Consolidation agent compares histories and drafts learning cards</span></li>
            <li><code>REVIEW</code><span>Humans approve cards in a dashboard before they enter the bank</span></li>
          </ol>
        </section>
      </div>
      <div className="straiker-feedback"><span>Completed run → consolidated lesson → human approval → future bug context</span><span aria-hidden="true">↺</span></div>
    </figure>
      </div>
    </details>

    <div className="straiker-references"><span>Related ideas and components</span><a href="https://arxiv.org/abs/2605.20616" target="_blank" rel="noopener noreferrer">Auto-Dreamer (inspiration) ↗</a><a href="https://arxiv.org/abs/2605.21997" target="_blank" rel="noopener noreferrer">ActiveGraph ↗</a><a href="https://prose.md/" target="_blank" rel="noopener noreferrer">OpenProse ↗</a></div>
  </section>
}
