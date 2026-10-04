// CLIENT LOGOS: files live in images/. To add one, put the file in images/ and add a line: ["file-name-without-.svg","Name"]
const CL=[["worldvision","World Vision"],["global","Global Fund"],["compassion","Compassion Malawi"],["luanar","LUANAR"],["mzuni","MZUNI"],["must","MUST"],["plu","PLU"],["magu","MAGU"],["unima","University of Malawi"],["ccap","CCAP"],["cic","CIC"],["mbc","MBC"],["mibawa","Mibawa"],["zodiac","Zodiak"]];

const logoStrip=()=>{const set=d=>CL.map(c=>`<img${d?' class="d"':''} src="images/${c[0]}.svg" alt="${d?'':c[1]}" loading="lazy" onerror="this.remove()">`).join("");
return `<div class="mq" role="group" aria-label="Organizations we have served"><div class="mt">${set(0)}${set(1)}</div></div>`};

const testimonials=[
  ["\"Uthunthu Consultancy's contextualized BSD model helped our university mentors and student leaders bridge the gap between academic knowledge and practical character-driven leadership.\"", "Dean of Students", "Higher Education Partner", "LUANAR"],
  ["\"The strategic change and capacity development sessions delivered by Dr. Mkanda and his team energized our staff and aligned our teams around a unified mission.\"", "Country Programs Lead", "International NGO Partner", "World Vision Partner"],
  ["\"Their unique approach to team dynamics and personal empowerment created measurable improvements in accountability and leadership across departments.\"", "Human Resources Executive", "Financial & Corporate Sector", "Institutional Client"]
];

P.home=()=>`<div class="hero">
  <div class="w hg">
    <div class="ht">
      <div class="hero-badge-pill"><span>✦ Founded in 2014</span> • <span>Malawi's Leading Transformation Firm</span></div>
      <h1>Building Complete People. Transforming Organizations.</h1>
      <p>Empowering individuals and institutions through character development, mindset transformation and practical skills for sustainable growth.</p>
      <div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap">
        <a class="btn g" href="#/services">Explore Our Services</a>
        <a class="btn o" href="#/bsd">Discover the BSD Model</a>
      </div>
    </div>
  </div>
  <div class="hm">
    <div class="hero-float-badge badge-1">✦ 12+ Years of Impact</div>
    <div class="hero-float-badge badge-2">★ 5,000+ Leaders Trained</div>
    <div class="hero-float-badge badge-3">✔ 100% Contextualized</div>
    <img src="images/gallery/front.svg" data-e="0" alt="Team members collaborating in a workshop" onerror="this.src='images/gallery/front.jpg'">
  </div>
</div>

<section><div class="w">
  <span class="eyebrow">Since 2014</span>
  <h2>Transformation Begins Within</h2>
  <p style="max-width:760px;font-size:1.12rem">Uthunthu Consultancy is a holistic development and transformation firm committed to empowering individuals and organizations to reach their fullest potential. Sustainable progress requires more than technical skills: it also needs strong character, creative thinking, a positive mindset and the ability to turn knowledge into action. Founded in 2014 by Dr. Caswel Mkanda, the name comes from the Chichewa word for completeness.</p>
</div></section>

<section class="stats"><div class="w">
  <span class="eyebrow">Proven Track Record</span>
  <h2>Lives and Leaders Transformed</h2>
  <div class="grid">
    ${[
      [5000, "Leaders Trained", "Across NGOs, faith institutions, and corporate boards", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`],
      [5000, "Inmates Supported", "Personal development & transformation programmes", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`],
      [1000, "Students Coached", "University mentoring, leadership & management programs", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`],
      [12, "Years Experience", "Dedicated excellence in human capability development", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`]
    ].map(x=>`<div class="st">
      <div class="st-icon">${x[3]}</div>
      <b data-n="${x[0]}">${x[0].toLocaleString("en-US")}+</b>
      <span class="st-label">${x[1]}</span>
      <p class="note" style="color:#c9c9ea;margin-top:6px;font-size:0.88rem">${x[2]}</p>
    </div>`).join("")}
  </div>
</div></section>

<section class="alt"><div class="w">
  <span class="eyebrow">The BSD Framework</span>
  <h2>The Foundation of Transformation</h2>
  ${bsdBlock}
  <p style="margin-top:28px"><a class="btn" href="#/bsd">Explore the Complete BSD Model</a></p>
</div></section>

<section><div class="w">
  <span class="eyebrow">Holistic Solutions</span>
  <h2>Solutions That Develop People and Strengthen Institutions</h2>
  <div class="grid">${svc.map(s=>`<div class="card">
    <span class="tag" style="align-self:flex-start;margin-bottom:12px">${s[4]||"Service"}</span>
    <h3>${s[0]}</h3>
    <p>${s[1]}</p>
    <a href="#/services" style="margin-top:auto;font-weight:700">Learn more &rarr;</a>
  </div>`).join("")}</div>
  <p style="margin-top:32px"><a class="btn" href="#/services">View All Services</a></p>
</div></section>

<section class="alt"><div class="w">
  <span class="eyebrow">Cross-Sector Impact</span>
  <h2>Developing People Across Diverse Sectors</h2>
  <div class="grid">${[
    ["Universities & Higher Education", "Mentoring, emotional intelligence, and leadership transitions for students and faculties."],
    ["NGOs & Development Agencies", "Governance, program sustainability, and community capacity strengthening."],
    ["Churches & Faith Leaders", "Pastoral leadership development, spiritual integrity, and financial empowerment."],
    ["Corporate & Executive Teams", "Strategic change management, executive alignment, and high-performance cultures."],
    ["Youth & Skills Empowerment", "Mindset transformation, entrepreneurship, and practical life competencies."],
    ["Rehabilitation & Personal Growth", "Holistic reformation programs restoring purpose, values, and self-worth."]
  ].map(x=>`<div class="card"><h3>${x[0]}</h3><p class="note">${x[1]}</p></div>`).join("")}</div>
  <div style="margin-top:40px">
    <p class="note" style="text-align:center">Trusted by institutions across Malawi including World Vision, Global Fund, Compassion Malawi, LUANAR, MZUNI, MUST, MAGU, and PLU.</p>
    ${logoStrip()}
  </div>
</div></section>

<section><div class="w">
  <span class="eyebrow">Client Endorsements</span>
  <h2>What Leaders Say About Uthunthu</h2>
  <div class="grid">${testimonials.map(t=>`<div class="card testimonial-card">
    <div class="test-stars">★★★★★</div>
    <p class="test-quote">${t[0]}</p>
    <div style="margin-top:auto;padding-top:16px;border-top:1px solid var(--ln)">
      <strong>${t[1]}</strong>
      <div class="note">${t[2]} · ${t[3]}</div>
    </div>
  </div>`).join("")}</div>
</div></section>

<section class="alt"><div class="w">
  <span class="eyebrow">The Uthunthu Advantage</span>
  <h2>Why Organizations Partner With Us</h2>
  <div class="grid">${[
    ["Personalized Approach","Programs are custom-tailored to each client's specific institutional context, goals, and culture.", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`],
    ["Proven Domain Expertise","Over 12 years of hands-on experience facilitating transformations across academia, government, and civil society.", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`],
    ["Co-Creation & Collaboration","We partner closely with leadership teams to design curriculums that ensure internal buy-in and sustainability.", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`],
    ["Measurable Transformation","Focused on tangible, lasting behavioral change that reflects positively on institutional performance.", `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`]
  ].map(x=>`<div class="card why-card">
    <div class="why-icon">${x[2]}</div>
    <h3>${x[0]}</h3>
    <p>${x[1]}</p>
  </div>`).join("")}</div>
</div></section>

${cta("Ready to Build Complete People and Transform Your Organization?","Whether you are developing leaders, strengthening governance or empowering youth, Uthunthu Consultancy is ready to partner with you.")}`;

AFTER.home=()=>{
  const els=document.querySelectorAll(".st b"),fmt=n=>n.toLocaleString("en-US");
  const run=el=>{
    const t=+el.dataset.n;
    if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
    const d=1600,s0=performance.now();
    const f=now=>{
      const p=Math.min((now-s0)/d,1);
      el.textContent=fmt(Math.round(t*(1-Math.pow(1-p,3))))+"+";
      if(p<1)requestAnimationFrame(f);
    };
    requestAnimationFrame(f);
  };
  if(!("IntersectionObserver" in window))return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{
    if(e.isIntersecting){run(e.target);io.unobserve(e.target);}
  }),{threshold:0.5});
  els.forEach(e=>io.observe(e));
};
