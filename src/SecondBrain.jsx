import React from 'react';

export default function SecondBrain(){
  return <section className="simple-project second-brain-project reveal" id="second-brain" aria-labelledby="second-brain-title">
    <div>
      <h2 id="second-brain-title">AI Second Brain</h2>
      <p>Agents can lose the details of what we discussed when a new conversation starts. Inspired by <a className="inline-link" href="https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f" target="_blank" rel="noopener noreferrer">Andrej Karpathy’s LLM Wiki</a> and <a className="inline-link" href="https://github.com/garrytan/gbrain" target="_blank" rel="noopener noreferrer">Garry Tan’s GBrain</a>, I built an inspectable memory system that connects people, projects, topics, and decisions in a typed, source-backed graph.</p>
      <p>A Python CLI stores and deduplicates original sources, validates graph relationships, and rebuilds a SQLite FTS5 search and graph index from the private vault. Installed Codex hooks capture each supported local prompt and retrieve relevant pages as a conversation starts; during the turn, I can add verified facts and links, and the end-of-turn hook records the result and checks memory changes. Recall combines search, bounded graph traversal, and source verification before answering.</p>
      <p className="thesis-stack">Python · SQLite FTS5 · Knowledge graphs · Codex hooks · Obsidian</p>
      <div className="project-links"><a className="text-link" href="https://github.com/hibaa8/ai-second-brain" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true" className="arrow">↗</span></a><a className="text-link" href="https://www.youtube.com/watch?v=vJKHOTUYy80" target="_blank" rel="noopener noreferrer">Watch demo video <span aria-hidden="true" className="arrow">↗</span></a></div>
    </div>
    <figure className="second-brain-preview"><a href="./fictional-obsidian-vault.svg" target="_blank" rel="noopener noreferrer" aria-label="Open fictional Obsidian vault graph"><img src="./fictional-obsidian-vault.svg" alt="Fictional Obsidian-style vault with a file tree and linked knowledge graph" loading="lazy"/></a><figcaption>A fictional vault modeled on the project’s Obsidian view. Select to see it full size.</figcaption></figure>
  </section>
}
