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
async function evs(){let editId=null,editPdf=null,ev=[];
$("pn").innerHTML=`<form id="ef" style="max-width:640px"><h3 id="eft">Post an event</h3><label for="evt">Title *</label><input id="evt" required><label for="evd">Date and time *</label><input id="evd" type="datetime-local" required><label for="evl">Location</label><input id="evl"><label for="evx">Description</label><textarea id="evx" rows="3"></textarea><label for="evsch">Schedule (one item per line, e.g. 09:00 Registration)</label><textarea id="evsch" rows="6"></textarea><label for="evf">Schedule or programme PDF (optional, max 10 MB)</label><input id="evf" type="file" accept="application/pdf"><p class="note" id="evfn"></p><p><button class="btn g" id="evb">Post event</button> <button type="button" class="btn o" id="evc" hidden>Cancel edit</button></p><div class="err" id="evm"></div></form><h2>Posted events</h2><div id="evlist"></div>`;
const reset=()=>{editId=null;editPdf=null;$("ef").reset();$("eft").textContent="Post an event";$("evb").textContent="Post event";$("evc").hidden=true;$("evfn").textContent=""};
$("evc").onclick=reset;
$("ef").onsubmit=async e=>{e.preventDefault();$("evm").textContent="";const f=$("evf").files[0];
if(f&&(f.type!=="application/pdf"||f.size>10485760)){$("evm").textContent="Please choose a PDF under 10 MB.";return}
$("evb").disabled=true;let path=editPdf;
if(f){const np=Date.now()+"-"+f.name.replace(/[^a-z0-9.]+/gi,"-").toLowerCase();
const up=await sb.storage.from("event-files").upload(np,f,{contentType:"application/pdf"});
if(up.error){$("evm").textContent="PDF upload failed: "+up.error.message;$("evb").disabled=false;return}
if(editPdf)await sb.storage.from("event-files").remove([editPdf]);path=np}
const row={title:$("evt").value.trim(),event_date:new Date($("evd").value).toISOString(),location:$("evl").value.trim()||null,description:$("evx").value.trim()||null,schedule:$("evsch").value.trim()||null,pdf_path:path};
const {error}=editId?await sb.from("events").update(row).eq("id",editId):await sb.from("events").insert(row);
$("evb").disabled=false;if(error){$("evm").textContent="Could not save the event.";return}
reset();list()};
const list=async()=>{const {data}=await sb.from("events").select("*").order("event_date",{ascending:false});ev=data||[];
$("evlist").innerHTML=ev.map(v=>`<div class="card" style="margin:10px 0"><strong>${esc(v.title)}</strong> | ${new Date(v.event_date).toLocaleString()} | ${v.published?"Published":"Hidden"}${v.pdf_path?" | PDF attached":""}${v.schedule?" | Schedule added":""}<p><button class="btn o" data-ed="${v.id}">Edit</button> <button class="btn o" data-p="${v.id}" data-v="${v.published}">${v.published?"Hide":"Publish"}</button> <button class="btn o" data-x="${v.id}">Delete</button></p></div>`).join("")||"<p>No events yet.</p>";
document.querySelectorAll("[data-ed]").forEach(b=>b.onclick=()=>{const v=ev.find(x=>x.id===b.dataset.ed);if(!v)return;editId=v.id;editPdf=v.pdf_path;
const d=new Date(v.event_date),p=n=>String(n).padStart(2,"0");
$("evt").value=v.title;$("evd").value=`${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}`;
$("evl").value=v.location||"";$("evx").value=v.description||"";$("evsch").value=v.schedule||"";$("evf").value="";
$("evfn").textContent=v.pdf_path?"A PDF is attached. Choose a new file to replace it.":"";
$("eft").textContent="Edit event";$("evb").textContent="Save changes";$("evc").hidden=false;$("ef").scrollIntoView({behavior:"smooth"})});
document.querySelectorAll("[data-p]").forEach(b=>b.onclick=async()=>{await sb.from("events").update({published:b.dataset.v!=="true"}).eq("id",b.dataset.p);list()});
document.querySelectorAll("[data-x]").forEach(b=>b.onclick=async()=>{if(!confirm("Delete this event?"))return;const v=ev.find(x=>x.id===b.dataset.x);
if(v&&v.pdf_path)await sb.storage.from("event-files").remove([v.pdf_path]);await sb.from("events").delete().eq("id",b.dataset.x);list()})};
list()}
