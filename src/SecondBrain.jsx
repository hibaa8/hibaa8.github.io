import React from 'react';

export default function SecondBrain(){
  return <section className="simple-project second-brain-project reveal" id="second-brain" aria-labelledby="second-brain-title">
    <div>
      <h2 id="second-brain-title">AI Second Brain</h2>
      <p>I wanted a way for Codex to carry useful context across conversations without turning personal notes into an opaque memory store. I built a local, inspectable memory layer: original sources are registered with hashes, and durable facts and decisions become cited Markdown pages in an Obsidian vault.</p>
      <p>A small Python CLI checks those pages and rebuilds a SQLite full-text index and typed relationship graph. When a question comes in, Codex finds relevant pages, checks the underlying sources, and answers with citations or calls out gaps. Optional local hooks capture bounded chat context; the private vault stays separate from the public code.</p>
      <p className="thesis-stack">Python · SQLite FTS5 · Markdown · Obsidian · Codex</p>
      <div className="project-links"><a className="text-link" href="https://github.com/hibaa8/ai-second-brain" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true" className="arrow">↗</span></a></div>
    </div>
    <figure className="second-brain-preview"><a href="./second-brain-demo-graph.svg" target="_blank" rel="noopener noreferrer" aria-label="Open synthetic Second Brain graph example"><img src="./second-brain-demo-graph.svg" alt="Fictional example of four linked wiki pages with source-backed relationships" loading="lazy"/></a><figcaption>A fictional example of source-backed wiki links. The personal vault is private.</figcaption></figure>
  </section>
}
