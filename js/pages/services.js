P.services=()=>`<section><div class="w"><h1>Our Services</h1>${svc.map((s,i)=>`<div class="card svc-card" style="margin:24px 0" id="s${i}">
<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:10px;margin-bottom:12px">
<span class="eyebrow" style="margin-bottom:0">${s[4]||"Core Service"}</span>
<span class="tag" style="margin:0;font-size:0.8rem;background:var(--sf)">${s[3].split(",")[0]}</span>
</div>
<h2>${s[0]}</h2>
<p>${s[1]}</p>
<p><strong>Target Audience:</strong> ${s[2]}</p>
<p class="note"><strong>Formats &amp; Delivery:</strong> ${s[3]}</p>
<div style="margin-top:20px;display:flex;gap:12px;flex-wrap:wrap">
<a class="btn g" href="#/contact/${encodeURIComponent(s[0])}">Request Proposal for this Service</a>
<a class="btn o" href="https://wa.me/265994040040?text=Hello%20Uthunthu%20Consultancy%2C%20I%20am%20interested%20in%20${encodeURIComponent(s[0])}" target="_blank" rel="noopener">Inquire via WhatsApp</a>
</div>
</div>`).join("")}
<div class="card" style="border-top-color:var(--in);margin-top:32px;padding:36px 32px">
  <span class="eyebrow">Proprietary Framework</span>
  <h2 style="margin-top:8px">Team Building: The TEAM Concept</h2>
  <p style="max-width:700px">Uthunthu's proprietary team-building framework harmonizes diverse personalities and strengths toward a unified organizational purpose. Every great team is built from four essential roles:</p>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:20px;margin-top:28px">
    ${[["T","Thinkers","Strategic analysis and thoughtful planning.","#5b56d6","#37338a"],["E","Encouragers","Team cohesion, empathy and morale boosting.","#2fb361","#1a7a40"],["A","Achievers","Goal orientation, execution and accountability.","#5b56d6","#37338a"],["M","Motivators","Inspiration, drive and catalytic energy.","#2fb361","#1a7a40"]].map(x=>`<div style="background:var(--sf);border:1px solid var(--ln);border-radius:14px;padding:26px 18px;text-align:center"><div style="width:54px;height:54px;border-radius:50%;background:linear-gradient(135deg,${x[3]},${x[4]});display:flex;align-items:center;justify-content:center;margin:0 auto 14px;font-size:1.45rem;font-weight:800;color:#fff;font-family:'Plus Jakarta Sans',sans-serif">${x[0]}</div><h3 style="font-size:1.05rem;margin-bottom:8px">${x[1]}</h3><p style="font-size:0.88rem;color:var(--mu);margin:0">${x[2]}</p></div>`).join("")}
  </div>
  <div style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap">
    <a class="btn g" href="#/contact/Team%20Building">Request a Team Building Session</a>
    <a class="btn o" href="https://wa.me/265994040040?text=Hello%20Uthunthu%20Consultancy%2C%20I%20am%20interested%20in%20Team%20Building" target="_blank" rel="noopener">Inquire via WhatsApp</a>
  </div>
</div>
<h2 style="margin-top:48px">Specialized Consulting &amp; Training</h2>
<div style="display:flex;flex-wrap:wrap;gap:8px">${spec.map(x=>`<a href="#/contact/${encodeURIComponent(x)}" class="tag" style="text-decoration:none;color:var(--tx)" title="Inquire about ${x}">${x} &rarr;</a>`).join("")}</div>
</div></section>`;
