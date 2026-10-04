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
<div class="card" style="border-top-color:var(--in);margin-top:32px"><h2>Team Building: The TEAM Concept</h2><p>Uthunthu's proprietary team-building framework: harmonizing diverse personalities and strengths toward a unified organizational purpose.</p><div class="grid">${[["T","Thinkers","Strategic analysis and thoughtful planning."],["E","Encouragers","Team cohesion, empathy and morale boosting."],["A","Achievers","Goal orientation, execution and accountability."],["M","Motivators","Inspiration, drive and catalytic energy."]].map(x=>`<div class="card" style="text-align:center"><div class="bsd-badge" style="margin:0 auto 12px;background:linear-gradient(135deg,var(--in),var(--gd))">${x[0]}</div><h3>${x[1]}</h3><p class="note">${x[2]}</p></div>`).join("")}</div></div>
<h2 style="margin-top:48px">Specialized Consulting &amp; Training</h2><div style="display:flex;flex-wrap:wrap;gap:8px">${spec.map(x=>`<a href="#/contact/${encodeURIComponent(x)}" class="tag" style="text-decoration:none;color:var(--tx)" title="Inquire about ${x}">${x} &rarr;</a>`).join("")}</div></div></section>`;
