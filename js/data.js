const $=i=>document.getElementById(i);
const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const AFTER={};
const sb=(window.supabase&&CFG.SUPABASE_URL)?supabase.createClient(CFG.SUPABASE_URL,CFG.SUPABASE_ANON_KEY):null;
const P={};
const cta=(t,s)=>`<section class="alt"><div class="w" style="text-align:center"><h2>${t}</h2><p>${s}</p><a class="btn" href="#/contact">Request a Consultation</a> <a class="btn o" href="#/contact">Contact Our Team</a></div></section>`;
const svc=[
  ["Strategic Planning & Management","Designing and implementing strategies that support organizational growth, innovation and competitiveness.","Organizations needing direction, growth plans or stronger competitiveness.","Strategic Retreats, Planning Workshops, Institutional Advisory","Strategy & Advisory"],
  ["Capacity Building","Strengthening the knowledge, skills and institutional capacity needed to achieve objectives and improve performance. Performance reflects capacity, not just opportunity.","Institutions, boards, managers and staff teams.","Leadership & Governance Training, Staff Capacity Sessions","Institutional Development"],
  ["Change Management","Helping organizations navigate transformation while minimizing disruption and maximizing benefits.","Organizations facing transitions, restructuring or new ways of working.","Transition Workshops, Restructuring & Retirement Preparation","Organizational Transition"],
  ["Personal & Talent Development","Equipping individuals and teams with skills, capabilities and personal development tools to improve performance.","Individuals, students, youth and staff teams.","Mentoring Programs, Youth Mindset & Skills Training","Talent & Mentorship"],
  ["Team Building","Helping teams combine different personalities, strengths and working styles toward a shared purpose.","Teams and departments of any size.","Facilitated Team-Building Exercises & Corporate Retreats","Culture & Collaboration"]
];
const spec=["Emotional Intelligence Training","Stress Management","Group Dynamics Facilitation","Business Consultancy","Proposal Development","Problem Solving and Decision Making","Skills Development","Practical Farming Trainings"];
const bsd=[
  ["B","Being","Character · Heart · Spiritual Formation","Develops integrity, personal values, character and a strong internal foundation.","Focuses on who you are: ethical grounding, authentic leadership, self-discipline and emotional resilience.","Ethical Grounding · Self-Discipline · Personal Values"],
  ["S","Seeing","Creativity · Mind · Mindset Transformation","Develops new perspectives, creative thinking, self-awareness and the ability to see opportunities differently.","Transforms how you perceive challenges: shifting from limitation to possibility, fostering innovation and strategic foresight.","Creative Perspective · Innovation · Strategic Mindset"],
  ["D","Doing","Competence · Action · Skills Development","Builds practical skills, capabilities and confidence to turn knowledge and ideas into tangible results.","Translates character and vision into disciplined execution, teamwork, measurable performance and sustainable impact.","Execution Excellence · Practical Competence · Measurable Action"]
];
const bsdBlock=`<div class="bsd">
<svg viewBox="0 0 300 280" role="img" aria-label="BSD Model: Being, Seeing and Doing connected">
<path d="M150 50L60 210H240Z" fill="none" stroke="var(--ln)" stroke-width="3"/>
${[[150,50,"B",0],[60,210,"S",1],[240,210,"D",2]].map(([x,y,l,i])=>`<g class="bsd-node" data-i="${i}" tabindex="0" role="button" aria-label="${bsd[i][1]}"><circle id="c${i}" cx="${x}" cy="${y}" r="42" fill="${i==1?'#37338a':'#2fb361'}"/><text x="${x}" y="${y+12}" text-anchor="middle" font-size="34" font-weight="700" fill="#fff" font-family="Plus Jakarta Sans,Helvetica,sans-serif">${l}</text></g>`).join("")}
<text x="150" y="156" text-anchor="middle" font-size="14" font-weight="700" fill="var(--tx)">Uthunthu</text>
<text x="150" y="174" text-anchor="middle" font-size="12" fill="var(--mu)">Completeness</text>
</svg>
<div>
<div class="tabs" role="tablist">${bsd.map((b,i)=>`<button role="tab" data-i="${i}" aria-selected="${i==0}">${b[0]} · ${b[1]}</button>`).join("")}</div>
<div class="panel" id="bp" aria-live="polite"></div>
</div>
</div>
<div class="bsd-cards grid">${bsd.map((b,i)=>`<div class="card bsd-card" data-i="${i}" tabindex="0" role="button">
<div class="bsd-badge" style="background:${i==1?'var(--in)':'var(--gd)'}">${b[0]}</div>
<span class="eyebrow">${b[2]}</span>
<h3>${b[0]} – ${b[1]}</h3>
<p>${b[3]}</p>
<p class="note" style="margin-top:auto"><strong>Focus:</strong> ${b[5]}</p>
</div>`).join("")}</div>`;
