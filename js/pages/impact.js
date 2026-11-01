P.impact=()=>`<section><div class="w">
  <span class="eyebrow">Proven Track Record</span>
  <h1>Our Impact Across Malawi</h1>
  <p style="max-width:760px;font-size:1.1rem">Since 2014, Uthunthu Consultancy has delivered measurable transformation across universities, NGOs, faith communities, corporate institutions, and prisons. Every engagement is designed to produce lasting behavioral change — not just short-term training.</p>

  <div class="grid" style="margin-top:36px">${[
    ["5,000+","Leaders Trained","Across NGOs, faith institutions, and corporate boards","Our flagship leadership and management programmes have equipped over 5,000 executives, managers and board members with the strategic thinking, emotional intelligence, and character-driven leadership skills needed for sustainable institutional growth.",`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`],
    ["5,000+","Inmates Supported","Personal development & transformation programmes","Working in partnership with correctional services, Uthunthu has facilitated holistic reformation programmes for over 5,000 incarcerated individuals — restoring dignity, purpose, and transferable life skills through character formation and vocational development.",`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`],
    ["1,000+","Students Coached","University mentoring, leadership & management programs","University partnerships at LUANAR, MZUNI, MUST, and PLU have seen over 1,000 students receive structured mentoring in emotional intelligence, academic leadership, and personal mastery — equipping them for professional life before graduation.",`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`],
    ["12+","Years Experience","Dedicated excellence in human capability development","Over twelve years of uninterrupted practice have given Uthunthu a deep, research-backed understanding of how African institutions learn, grow, and sustain transformation — making every programme more relevant, contextualized, and impactful than standard off-the-shelf training.",`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`]
  ].map(x=>`<div class="card why-card">
    <div class="why-icon">${x[4]}</div>
    <b style="font-size:2rem;color:var(--in)">${x[0]}</b>
    <h3 style="margin:4px 0 8px">${x[1]}</h3>
    <p class="note" style="font-size:0.82rem;font-weight:700;color:var(--mu);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px">${x[2]}</p>
    <p style="font-size:0.93rem">${x[3]}</p>
  </div>`).join("")}
  </div>

  <div style="margin-top:56px">
    <span class="eyebrow">Sectors We Serve</span>
    <h2>Transformation Across Every Sector</h2>
    <div class="grid">${[
      ["Universities & Higher Education","Mentoring, holistic development and personal growth programs for students and faculty. Partnerships with LUANAR, MZUNI, MUST, PLU, MAGU and UNIMA.","luanar.svg"],
      ["NGOs & Development Agencies","Capacity building, leadership development, empowerment and organizational training. Clients include World Vision International, Global Fund, Compassion Malawi and Baylor Foundation.","worldvision.svg"],
      ["Churches & Faith Communities","Leadership development, personal development and faith leaders' empowerment programs. Denominations served include CCAP, Anglican, Roman Catholic and Pentecostal churches.","ccap.svg"],
      ["Corporate & Executive Teams","Strategic retreats, change management, team dynamics and executive alignment programs for corporate boards and management teams.","cic.svg"],
      ["Youth & Skills Empowerment","Skills development, financial literacy, mindset change and economic empowerment for youth groups, students and young professionals.","compassion.svg"],
      ["Rehabilitation & Personal Growth","Holistic reformation programmes restoring purpose, values and self-worth for individuals in correctional facilities and rehabilitation centres.","mbc.svg"]
    ].map(x=>`<div class="card">
      <img src="images/${x[2]}" alt="${x[0]}" style="height:28px;width:auto;margin-bottom:12px;opacity:0.65" onerror="this.style.display='none'">
      <h3>${x[0]}</h3>
      <p class="note">${x[1]}</p>
    </div>`).join("")}</div>
  </div>

  <div style="margin-top:56px">
    <h2>Clients &amp; Institutional Partners</h2>
    <p style="margin-bottom:20px">Trusted by leading institutions across Malawi and the region.</p>
    <p>${["World Vision International","Global Fund","Compassion Malawi","LUANAR","MZUNI","MUST","PLU","MAGU","CCAP","Anglican","Roman Catholic","Pentecostal churches","Zodiak TV","MBC TV","Mibawa TV","ABC Radio","CAN Radio","TWR","Radio Maria","Malawi Revenue Authority","Reserve Bank of Malawi","Operation Smile","Baylor Foundation"].map(x=>`<span class="tag">${x}</span>`).join("")}</p>
  </div>
  <p style="margin-top:32px"><a class="btn" href="#/work">View Project Gallery &rarr;</a></p>
</div></section>`;
