import React from 'react';

const amazonArticle = 'https://www.aboutamazon.com/news/retail/how-to-use-amazon-shopping-ai-assistant';
const jobs = [
  {
    id: 'oracle', company: 'Oracle', dates: 'June – September 2026', location: 'Redwood City, CA',
    summary: 'Agent memory infrastructure and deployed customer workflows.',
    bullets: [
      'Engineered extensions to a Python agent harness and memory framework for an autonomous bug-resolution system. Converted agent mistakes into reusable context so later attempts could draw on previous experience, improving the bug-resolution rate by 22%.',
      'Designed the framework’s relational data model in Oracle DB and deployed the service to a Kubernetes beta environment on Oracle Cloud Infrastructure (OCI). Expanded integration and CI/CD test coverage by 25%.',
      'Designed, implemented, and deployed an automated customer-environment migration workflow in collaboration with product managers and engineers. Built its agents, tools, policies, and orchestration to coordinate the migration process.'
    ],
    skills: ['Python', 'Agent harnesses & memory', 'Relational data modeling', 'Oracle DB', 'Kubernetes', 'OCI', 'Integration testing', 'CI/CD', 'Agentic workflow orchestration'],
    learned: [
      'How to turn an agent’s past failures into useful context, and evaluate whether memory changes improve its ability to resolve bugs.',
      'How to carry an agentic workflow from customer requirements through implementation, testing, and deployment, coordinating tools and policies alongside the agents themselves.'
    ],
    reference: {url:'https://arxiv.org/abs/2605.20616',label:'Related research: Auto-Dreamer',description:'Auto-Dreamer explores consolidating agent experiences into reusable knowledge. It is a reference for the kind of memory infrastructure I worked on.'}
  },
  {
    id: 'amazon-2025', company: 'Amazon', dates: 'May – August 2025', location: 'Seattle, WA',
    summary: 'Built and deployed a full-stack product comparison experience for Alexa shopping.',
    bullets: [
      'Built and shipped a product comparison experience using TypeScript and Java across three Alexa device classes. The work was deployed within an Alexa shopping platform serving more than one million daily customers.',
      'Implemented a Java Spring Boot orchestration layer and REST API integrated with Alexa’s core shopping flow. Reduced response latency by 1.5–2 seconds, and validated components and services through unit and integration tests.',
      'Partnered with a UI designer and product manager to design and prototype the comparison interface in Figma. Incorporated feedback to refine layouts and interaction patterns before implementing the experience.'
    ],
    skills: ['TypeScript', 'Java', 'Spring Boot', 'REST APIs', 'Service orchestration', 'Latency optimization', 'Unit & integration testing', 'Figma', 'Cross-device UI development'],
    learned: [
      'How frontend decisions, API design, and backend orchestration fit together in a customer-facing shopping experience.',
      'How to balance responsiveness and consistency across device classes, and use feedback from design and product partners to refine an implementation before shipping.'
    ],
    reference: {url:amazonArticle+'#:~:text=Compare%20products%20from%20search%20results',label:'Product context: Amazon’s comparison features',description:'Amazon’s overview explains how shoppers compare products side by side. The link opens the product-comparison section.'}
  },
  {
    id: 'amazon-2024', company: 'Amazon', dates: 'May – August 2024', location: 'Seattle, WA',
    summary: 'LLM-based catalog classification and deployed Alexa shopping improvements.',
    bullets: [
      'Developed and evaluated an LLM-based product-title classification pipeline for Alexa, achieving 76% accuracy.',
      'Implemented the pipeline using AWS EC2, S3, DynamoDB, and Docker. Processed more than 20,000 JSON catalog records to support classification and evaluation.',
      'Diagnosed and resolved a multi-item add-to-cart defect in a Java Spring Boot service supporting Alexa shopping. My work on Alexa shopping was deployed.'
    ],
    skills: ['LLM evaluation', 'AWS EC2', 'Amazon S3', 'DynamoDB', 'Docker', 'JSON data pipelines', 'Java', 'Spring Boot', 'Backend debugging'],
    learned: [
      'How to evaluate an LLM pipeline against catalog data and connect model-quality measurements with the engineering needed to process a larger dataset.',
      'How to trace a customer-visible issue through a backend service and address the behavior of a multi-item shopping flow.'
    ],
    reference: {url:amazonArticle+'#:~:text=Effortlessly%20add%20items%20to%20your%20cart',label:'Product context: adding items with Alexa',description:'Amazon’s article describes the conversational add-to-cart experience supported by Alexa shopping services.'}
  },
  {
    id: 'trillium', company: 'Trillium Trading', dates: 'July 2023 – May 2024', location: 'New York, NY',
    summary: 'Internal training software and search tools for traders.',
    bullets: [
      'Built a TypeScript and React training web application for more than 50 day traders.',
      'Programmed an NLP-based search engine to retrieve information from more than 1,200 company pages through the Confluence REST API.'
    ],
    skills: ['TypeScript', 'React', 'NLP', 'Search & retrieval', 'Confluence REST API', 'Internal tool development'],
    learned: [
      'How to build an internal application around the needs of a specific user group and make company knowledge easier to find.',
      'How to connect an existing documentation platform to a search interface through its API.'
    ]
  }
];
const Outbound = ({href,children}) => <a className="text-link" href={href} target="_blank" rel="noopener noreferrer">{children} <span aria-hidden="true">↗</span></a>;
function Skills({items}){return <ul className="experience-skills" aria-label="Relevant skills">{items.map(item=><li key={item}>{item}</li>)}</ul>}
function Lessons({items}){return <><h4>What I learned</h4><ul className="experience-bullets lessons">{items.map(item=><li key={item}>{item}</li>)}</ul></>}
export default function Experience(){return <div className="experience-page">
  <section className="page-intro reveal"><h1>Experience</h1><p>Backend, infrastructure, systems, and AI work across industry and research.</p></section>
  <section className="industry-section" aria-labelledby="industry-heading"><h2 id="industry-heading">Industry</h2>
    {jobs.map(job=><article className="experience-role" id={job.id} key={job.id}>
      <header className="experience-meta"><h3>{job.company}</h3><p>Software Engineer Intern</p><p>{job.dates}<br/>{job.location}</p></header>
      <div className="experience-details"><p className="role-summary">{job.summary}</p><ul className="experience-bullets">{job.bullets.map(bullet=><li key={bullet}>{bullet}</li>)}</ul><h4>Skills used</h4><Skills items={job.skills}/><Lessons items={job.learned}/>{job.reference&&<aside className="experience-reference"><Outbound href={job.reference.url}>{job.reference.label}</Outbound><p>{job.reference.description}</p></aside>}</div>
    </article>)}
  </section>
  <section className="research-section" id="research" aria-labelledby="research-heading"><h2 id="research-heading">Research</h2><article className="experience-role">
    <header className="experience-meta"><h3>Columbia University</h3><p>Research Assistant<br/>Electrical Engineering Department</p><p>August 2024 – November 2025<br/>New York, NY</p></header>
    <div className="experience-details"><p className="role-summary">Agentic code analysis for detecting and repairing performance bugs.</p><ul className="experience-bullets"><li>Developed a Python agentic code-analysis pipeline to detect and repair false sharing in multithreaded C/C++ codebases. False sharing can slow a program when threads access different data on the same cache line.</li><li>Integrated retrieval-augmented generation, vector search, KNN retrieval, and iterative evaluation to analyze code and generate candidate fixes.</li><li>Achieved 75% detection accuracy. Generated fixes improved runtime in 56% of the evaluated benchmarks.</li></ul><h4>Skills used</h4><Skills items={['Python','C/C++ code analysis','Multithreading','RAG','Vector search','KNN retrieval','Agentic pipelines','Benchmarking & evaluation']}/><Lessons items={['How memory access patterns can create performance problems in parallel programs, even when threads are working with different data.','How to evaluate bug detection and generated repairs separately, using benchmark results to check whether a suggested fix actually improves runtime.']}/><Outbound href="https://github.com/angelica-moreira/CodeCure">CodeCure repository</Outbound></div>
  </article></section>
  <section className="experience-education"><h2>Education</h2><h3>Columbia University</h3><p>B.S. in Computer Science · Expected May 2027</p><p>Relevant coursework: Data Structures and Algorithms, Introduction to Databases, User Interface Design, Machine Learning, Artificial Intelligence, Advanced Programming in C, Fundamentals of Computer Systems, and Probability.</p></section>
</div>}
