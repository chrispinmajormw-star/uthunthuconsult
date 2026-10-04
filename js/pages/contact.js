P.contact=()=>`<section><div class="w"><h1>Request a Consultation</h1><div class="grid"><div>
<div class="card" style="margin-bottom:20px;border-top:4px solid var(--gd)">
<h3>Direct Inquiries</h3>
<p>Speak directly with our team to discuss your institution's specific requirements.</p>
<p><strong>Office Location:</strong><br>Area 43/692, Capital City, Lilongwe, Malawi</p>
<div style="display:flex;flex-direction:column;gap:10px;margin-top:16px">
<a class="btn g" href="tel:+265888355602">Call +265 888 355 602</a>
<a class="btn g" href="tel:+265994040040">Call +265 994 040 040</a>
<a class="btn o" href="https://wa.me/265888355602?text=Hello%20Uthunthu%20Consultancy%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener" style="text-align:center">Chat on WhatsApp &rarr;</a>
</div>
</div>
</div>
<form id="f" novalidate>
<p class="note" id="cn"></p>
<div style="display:none" aria-hidden="true"><input id="hp" tabindex="-1" autocomplete="off"></div>
<label for="n">Full Name *</label><input id="n" required placeholder="e.g. Chimwemwe Phiri"><div class="err" id="en"></div>
<label for="o">Organization / Institution</label><input id="o" placeholder="e.g. NGO, University, Corporate">
<label for="e">Email Address *</label><input id="e" type="email" required placeholder="name@organization.com"><div class="err" id="ee"></div>
<label for="p">Phone / WhatsApp Number</label><input id="p" type="tel" placeholder="+265 888 000 000">
<label for="sv">Service of Interest</label><select id="sv"><option value="">-- Select a Service / Topic --</option><option>${svc.map(s=>s[0]).join("</option><option>")}</option><option>${spec.join("</option><option>")}</option></select>
<label for="m">Your Message or Program Goals *</label><textarea id="m" rows="4" required placeholder="Tell us about your team size, dates, and transformation goals..."></textarea><div class="err" id="em"></div>
<p style="margin-top:20px"><button class="btn" id="sbtn" type="submit">Submit Request</button></p>
<div id="res" role="status"></div>
</form></div></div></section>`;

AFTER.contact=()=>{const f=$("f"),res=$("res"),sbtn=$("sbtn");
if(window._preselectService&&$("sv")){
  const match=[...$("sv").options].find(o=>o.value.toLowerCase()===decodeURIComponent(window._preselectService).toLowerCase());
  if(match){$("sv").value=match.value}
  window._preselectService=null;
}
$("cn").textContent=sb?"":"Demo mode: Supabase is not configured, so requests are not saved. Please call us.";
f.onsubmit=async ev=>{ev.preventDefault();let ok=true;
if($("hp")&&$("hp").value)return; // Bot detected
const c=(id,er,msg,bad)=>{$(er).textContent=bad?msg:"";if(bad)ok=false};
c("n","en","Please enter your name.",!$("n").value.trim());
c("e","ee","Enter a valid email address.",!/^\S+@\S+\.\S+$/.test($("e").value));
c("m","em","Please write a message.",!$("m").value.trim());
if(!ok){res.innerHTML='<div class="err">Please fix the highlighted fields above.</div>';return}
if(!sb){res.innerHTML='<div class="ok">Demo mode: not saved. Please call +265 888 355 602 or +265 994 040 040.</div>';return}
sbtn.disabled=true;sbtn.textContent="Submitting...";
const {error}=await sb.from("consultation_requests").insert({name:$("n").value.trim(),organization:$("o").value.trim()||null,email:$("e").value.trim(),phone:$("p").value.trim()||null,service:$("sv").value||null,message:$("m").value.trim()});
sbtn.disabled=false;sbtn.textContent="Submit Request";
res.innerHTML=error?'<div class="err">Sorry, we could not send your request right now. Please call us directly.</div>':'<div class="ok"><strong>Thank you!</strong> Your consultation request has been received. Our leadership team will review and respond promptly.</div>';
if(!error)f.reset()}};
