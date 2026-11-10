import React from 'react';

export default function ThesisLedger(){
  return <section className="simple-project thesis-project reveal" id="thesis-ledger" aria-labelledby="thesis-ledger-title">
    <div>
      <h2 id="thesis-ledger-title">Thesis Ledger</h2>
      <p>An evidence-first research workbench for U.S. stocks. I built a Python/FastAPI dashboard with streaming research chat, market data, and a multi-agent workflow: four analysts examine a dated evidence snapshot in parallel, bull and bear researchers debate, then a manager synthesizes the case and a risk reviewer can recommend abstaining.</p>
      <p>Forecast scenarios enter at synthesis so the initial arguments can form independently. A SQLite ledger preserves reports, source dates, and thesis revisions, making it possible to revisit a claim as evidence changes. The same research workflow is available through the browser and MCP tools.</p>
      <p className="thesis-stack">Python · FastAPI · OpenAI · SQLite · MCP · Alpha Vantage · Alpaca</p>
      <div className="project-links"><a className="text-link" href="https://github.com/hibaa8/thesis-ledger" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true" className="arrow">↗</span></a><a className="text-link" href="https://thesis-ledger.onrender.com/" target="_blank" rel="noopener noreferrer">Live app <span aria-hidden="true" className="arrow">↗</span></a></div>
    </div>
    <figure className="thesis-preview"><a href="./thesis-ledger-dashboard.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open full Thesis Ledger dashboard screenshot"><img src="./thesis-ledger-dashboard.jpg" alt="Thesis Ledger research desk showing a research conclusion, forecast chart, analyst views, and bull and bear debate" loading="lazy"/></a><figcaption>Research desk shown with synthetic demo data. Select to view the full screenshot.</figcaption></figure>
  </section>
}
