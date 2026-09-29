P.contact=()=>`<section><div class="w"><h1>Contact Us</h1><div class="grid"><div><p><strong>Office:</strong> Area 43/692, Capital City, Lilongwe</p><p><a class="btn g" href="tel:+265888355602">Call +265 888 355 602</a></p><p><a class="btn g" href="tel:+265994040040">Call +265 994 040 040</a></p></div>
<form id="f" novalidate><p class="note" id="cn"></p>
<label for="n">Name *</label><input id="n" required><div class="err" id="en"></div><label for="o">Organization</label><input id="o"><label for="e">Email *</label><input id="e" type="email" required><div class="err" id="ee"></div><label for="p">Phone</label><input id="p" type="tel">
<label for="sv">Service of interest</label><select id="sv"><option>${svc.map(s=>s[0]).join("</option><option>")}</option><option>${spec.join("</option><option>")}</option></select>
<label for="m">Message *</label><textarea id="m" rows="4" required></textarea><div class="err" id="em"></div><p><button class="btn" type="submit">Submit</button></p><div id="res" role="status"></div></form></div></div></section>`;

AFTER.contact=()=>{const f=$("f"),res=$("res");
$("cn").textContent=sb?"":"Demo mode: Supabase is not configured, so requests are not saved. Please call us.";
f.onsubmit=async ev=>{ev.preventDefault();let ok=true;
const c=(id,er,msg,bad)=>{$(er).textContent=bad?msg:"";if(bad)ok=false};
c("n","en","Please enter your name.",!$("n").value.trim());
c("e","ee","Enter a valid email address.",!/^\S+@\S+\.\S+$/.test($("e").value));
c("m","em","Please write a message.",!$("m").value.trim());
if(!ok){res.innerHTML='<div class="err">Please fix the highlighted fields.</div>';return}
if(!sb){res.innerHTML='<div class="ok">Demo mode: not saved. Please call +265 888 355 602 or +265 994 040 040.</div>';return}
const {error}=await sb.from("consultation_requests").insert({name:$("n").value.trim(),organization:$("o").value.trim()||null,email:$("e").value.trim(),phone:$("p").value.trim()||null,service:$("sv").value,message:$("m").value.trim()});
res.innerHTML=error?'<div class="err">Sorry, we could not send your request. Please call us.</div>':'<div class="ok">Thank you. Your request has been received and our team will be in touch.</div>';
if(!error)f.reset()}};
