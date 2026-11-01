P.bsd=()=>`<section><div class="w">
  <span class="eyebrow">Proprietary Methodology</span>
  <h1>Our Approach: The BSD Model</h1>
  <p style="max-width:760px;font-size:1.15rem">True transformation begins with the inner development of people. Named from the Chichewa word for <em>completeness</em>, Uthunthu's proprietary <strong>BSD Model</strong> harmonizes character development (Being), mindset transformation (Seeing), and practical competence (Doing).</p>
  
  ${bsdBlock}
</div></section>

<section class="alt"><div class="w">
  <span class="eyebrow">The Cost of Incompleteness</span>
  <h2>Why Most Corporate Training Fails</h2>
  <p style="max-width:740px">Conventional training programs focus exclusively on technical skills while neglecting personal values and mental paradigms. The BSD Model closes this critical gap:</p>
  
  <div class="grid" style="margin-top:32px">${[
    ["Doing Without Being","Skills Without Character","Produces technically competent professionals who may lack ethical grounding, accountability, or moral courage — leading to organizational vulnerability and governance failure."],
    ["Seeing Without Doing","Vision Without Action","Produces inspiring ideas and ambitious strategy documents that never translate into measurable execution, operational discipline, or sustainable impact."],
    ["Being Without Seeing","Character Without Mindset","Produces well-intentioned individuals who remain trapped in outdated paradigms, resistant to innovation, and unable to perceive strategic opportunities."],
    ["The BSD Advantage","The Complete Individual & Organization","By integrating moral character (Being), creative vision (Seeing), and execution excellence (Doing), Uthunthu builds leaders who are ethical, innovative, and highly productive."]
  ].map((x,i)=>`<div class="card" style="border-top:4px solid ${i===3?'var(--gr)':'var(--in)'}">
    <span class="eyebrow" style="color:${i===3?'var(--gr)':'var(--mu)'}">${x[0]}</span>
    <h3>${x[1]}</h3>
    <p>${x[2]}</p>
  </div>`).join("")}</div>
</div></section>

<section><div class="w">
  <div class="card" style="border-top:4px solid var(--gd);padding:36px 30px;background:linear-gradient(135deg,var(--sf) 0%,var(--bg) 100%)">
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px">
      <div>
        <span class="eyebrow" style="margin-bottom:4px">Academic &amp; Corporate Research</span>
        <h2 style="margin:4px 0 8px">Download the Complete BSD Framework (PDF)</h2>
        <p style="max-width:680px;font-size:1.02rem">Explore Dr. Caswel Mkanda's full institutional paper on applying the BSD Model to higher education mentoring, NGO capacity strengthening, and executive team retreats.</p>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a class="btn g" href="images/gallery/UCProfileV1.0.pdf" download="Uthunthu-Consultancy-Institutional-Profile-V1.0.pdf">Download Institutional Profile (PDF)</a>
        <a class="btn o" href="images/gallery/UCProfileV1.0.pdf" target="_blank" rel="noopener">View in Browser</a>
      </div>
    </div>
  </div>
</div></section>

${cta("Interested in Applying the BSD Model in Your Organization?","Discuss a tailored leadership development or capacity strengthening programme shaped around your team.")}`;
