import React, {useState} from 'react';

const demos = [
  {id:'plan-adjustment', title:'Adjusting a plan through chat', description:'Ask for a workout that fits a change in your day. The conversation updates the plan, which you can then view in the app.', duration:'37 seconds'},
  {id:'voice-demo-audio', poster:'voice-demo', title:'Talking with an AI coach', description:'A 45-second excerpt of a live conversation with Simone, one of Vaylo’s distinct AI coach personas. Audio is included.', duration:'45 seconds'},
  {id:'workout-logging', title:'Logging a workout', description:'Describe the workout in chat, confirm the details, and see the completed session in your workout history.', duration:'39 seconds'},
  {id:'progress', title:'Reviewing progress', description:'A quick look at the progress dashboard, calorie insights, and workout logs.', duration:'19 seconds'},
  {id:'onboarding', title:'Getting to know a new user', description:'The onboarding assistant asks about goals and experience before the user chooses a coach. This excerpt starts after account creation.', duration:'1 minute 45 seconds'},
];
const External = ({href,children}) => <a className="text-link" href={href} target="_blank" rel="noreferrer">{children} ↗</a>;
export default function Vaylo(){
  const [selected,setSelected]=useState(0);
  const demo=demos[selected];
  return <article className="case-study">
    <section className="page-intro reveal"><a className="text-link" href="./projects.html">← Projects</a><h1>Vaylo Fitness</h1><p>A personal AI fitness coach, available through chat and voice.</p><div className="project-links"><External href="https://www.vaylofitness.com/">Website</External></div></section>
    <section className="case-section"><h2>The idea</h2><p>People respond to different kinds of coaching. Vaylo gives users a choice of AI agents with distinct personalities and coaching styles, tailored to their goals and preferences. Users can message or call their coach to talk through a workout, change a plan, or log what they have done.</p><p>I designed and shipped the Swift iOS client and worked on the Python/LangGraph backend, including the interface, state management, and integrations with HealthKit, PostgreSQL, and Redis. The voice and calling stack also includes ElevenLabs and Twilio.</p><div className="case-screens"><figure><img src="./vaylo/coaches.png" alt="Vaylo coach selection, showing different coaching personalities" loading="lazy"/><figcaption>Choose a coach with a style that fits.</figcaption></figure><figure><img src="./vaylo/chat.jpg" alt="A chat with Alex Rivera adjusting a workout to cardio" loading="lazy"/><figcaption>Adapt a workout through a conversation.</figcaption></figure><figure><img src="./vaylo/voice.png" alt="Live AI call interface with Alex Rivera and a conversation transcript" loading="lazy"/><figcaption>Call the same coach for live guidance.</figcaption></figure></div></section>
    <section className="case-section"><h2>Feature demos</h2><p>Short recordings from the app. Select a feature to watch.</p><div className="demo-layout"><div className="demo-choices" aria-label="Choose a feature demo">{demos.map((item,i)=><button type="button" key={item.id} aria-pressed={selected===i} onClick={()=>setSelected(i)}>{item.title}<span>{item.duration}</span></button>)}<p className="demo-description" id="demo-description">{demo.description}</p></div><figure className="phone-demo"><video key={demo.id} controls playsInline preload="none" poster={`./vaylo/${demo.poster||demo.id}.jpg`} aria-label={demo.title} aria-describedby="demo-description"><source src={`./vaylo/${demo.id}.mp4`} type="video/mp4"/>Your browser cannot play this video. <a href={`./vaylo/${demo.id}.mp4`}>Download demo</a>.</video><figcaption>{demo.title}</figcaption></figure></div></section>
    <section className="case-section"><h2>How it fits together</h2><p>A simplified view of the application’s main components.</p><figure className="system-diagram" aria-label="Vaylo architecture overview">
<div className="system-client"><span className="system-label">Client</span><h3>Swift iOS app</h3><p>Chat · calls · workout plans · progress</p><div className="system-integration"><strong>Apple HealthKit</strong><span>Health & activity data</span></div></div>
<div className="system-connector"><span aria-hidden="true">↕</span><span>Conversations & app data</span></div>
<div className="system-core"><span className="system-label">Backend & orchestration</span><h3>Python + LangGraph</h3><p>Coach personas · conversation context · planning & logging tools</p></div>
<div className="system-branches" aria-hidden="true"><span></span><span></span><span></span></div>
<div className="system-services">
<section><span className="system-label">AI</span><h4>OpenAI</h4><p>Language models</p><h4>LangChain</h4><p>Model & tool integration</p></section>
<section><span className="system-label">Voice & calling</span><h4>ElevenLabs</h4><p>AI voice</p><h4>Twilio</h4><p>Calling infrastructure</p></section>
<section><span className="system-label">Data & state</span><h4>Supabase / PostgreSQL</h4><p>Persistent application data</p><h4>Redis</h4><p>State & caching</p></section>
</div><figcaption>Component overview of Vaylo’s app, AI, voice, and data stack.</figcaption></figure></section>
    <section className="case-section status-section"><h2>Where things stand</h2><p>Vaylo was published on iOS and used for a period, reaching <strong>around 50 users on the app</strong> before being paused.</p><p>The project is currently paused while we secure funding to restart the app and support a wider launch. We plan to resume development once that funding is in place.</p><External href="mailto:hibaaltaf98@gmail.com">Get in touch about Vaylo</External></section>
  </article>
}
