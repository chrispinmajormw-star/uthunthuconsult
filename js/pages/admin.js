P.admin=()=>`<section><div class="w"><h1>Admin</h1><div id="ad"></div></div></section>`;
const signOut=async()=>{await sb.auth.signOut();route()};
AFTER.admin=async()=>{const el=$("ad");
if(!sb){el.innerHTML="<p>Add your Supabase details in js/config.js first.</p>";return}
const {data:{session}}=await sb.auth.getSession();
if(!session){el.innerHTML=`<form id="lf" style="max-width:380px"><label for="ae">Email</label><input id="ae" type="email" required><label for="ap">Password</label><input id="ap" type="password" required><p><button class="btn">Sign in</button></p><div class="err" id="le"></div></form>`;
$("lf").onsubmit=async e=>{e.preventDefault();const {error}=await sb.auth.signInWithPassword({email:$("ae").value,password:$("ap").value});if(error)$("le").textContent="Sign-in failed.";else route()};return}
const {data:adm}=await sb.from("admins").select("user_id").eq("user_id",session.user.id).maybeSingle();
if(!adm){el.innerHTML='<p class="err">This account is not an administrator.</p><button class="btn o" id="lo">Sign out</button>';$("lo").onclick=signOut;return}
el.innerHTML=`<p><button class="btn o" id="lo">Sign out</button></p><div class="tabs"><button data-t="r">Requests</button><button data-t="v">Events</button></div><div id="pn"></div>`;
$("lo").onclick=signOut;const tabs=[...el.querySelectorAll(".tabs button")];
const go=t=>{tabs.forEach(b=>b.setAttribute("aria-selected",b.dataset.t==t));t=="r"?reqs():evs()};
tabs.forEach(b=>b.onclick=()=>go(b.dataset.t));go("r")};
async function reqs(){const {data,error}=await sb.from("consultation_requests").select("*").order("created_at",{ascending:false});
$("pn").innerHTML=error?'<p class="err">Could not load requests.</p>':(data.length?data.map(r=>`<div class="card" style="margin:12px 0"><span class="eyebrow">${new Date(r.created_at).toLocaleString()} | ${esc(r.status)}</span><h3>${esc(r.name)}${r.organization?" | "+esc(r.organization):""}</h3><p><a href="mailto:${esc(r.email)}">${esc(r.email)}</a>${r.phone?` | <a href="tel:${esc(r.phone)}">${esc(r.phone)}</a>`:""}</p><p class="note">${esc(r.service)}</p><p>${esc(r.message)}</p><button class="btn o" data-s="${r.id}" data-v="contacted">Mark contacted</button> <button class="btn o" data-s="${r.id}" data-v="closed">Close</button> <button class="btn o" data-d="${r.id}">Delete</button></div>`).join(""):"<p>No requests yet.</p>");
document.querySelectorAll("[data-s]").forEach(b=>b.onclick=async()=>{await sb.from("consultation_requests").update({status:b.dataset.v}).eq("id",b.dataset.s);reqs()});
document.querySelectorAll("[data-d]").forEach(b=>b.onclick=async()=>{if(confirm("Delete this request?")){await sb.from("consultation_requests").delete().eq("id",b.dataset.d);reqs()}})}
async function evs(){$("pn").innerHTML=`<form id="ef" style="max-width:560px"><label for="evt">Title *</label><input id="evt" required><label for="evd">Date and time *</label><input id="evd" type="datetime-local" required><label for="evl">Location</label><input id="evl"><label for="evx">Description</label><textarea id="evx" rows="3"></textarea><p><button class="btn g">Post event</button></p><div class="err" id="evm"></div></form><h2>Posted events</h2><div id="evlist"></div>`;
const list=async()=>{const {data}=await sb.from("events").select("*").order("event_date",{ascending:false});
$("evlist").innerHTML=(data||[]).map(v=>`<div class="card" style="margin:10px 0"><strong>${esc(v.title)}</strong> | ${new Date(v.event_date).toLocaleString()} | ${v.published?"Published":"Hidden"}<p><button class="btn o" data-p="${v.id}" data-v="${v.published}">${v.published?"Hide":"Publish"}</button> <button class="btn o" data-x="${v.id}">Delete</button></p></div>`).join("")||"<p>No events yet.</p>";
document.querySelectorAll("[data-p]").forEach(b=>b.onclick=async()=>{await sb.from("events").update({published:b.dataset.v!=="true"}).eq("id",b.dataset.p);list()});
document.querySelectorAll("[data-x]").forEach(b=>b.onclick=async()=>{if(confirm("Delete this event?")){await sb.from("events").delete().eq("id",b.dataset.x);list()}})};
$("ef").onsubmit=async e=>{e.preventDefault();const {error}=await sb.from("events").insert({title:$("evt").value.trim(),event_date:new Date($("evd").value).toISOString(),location:$("evl").value.trim()||null,description:$("evx").value.trim()||null});
$("evm").textContent=error?"Could not post event.":"";if(!error){$("ef").reset();list()}};list()}
