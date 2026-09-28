P.events=()=>`<section><div class="w"><h1>Events</h1><div id="ev"><p>Loading...</p></div></div></section>`;
AFTER.events=async()=>{const el=$("ev");
if(!sb){el.innerHTML='<p class="note">Events will appear once Supabase is connected.</p>';return}
const {data,error}=await sb.from("events").select("*").eq("published",true).gte("event_date",new Date(Date.now()-864e5).toISOString()).order("event_date");
el.innerHTML=error?'<p class="err">Could not load events.</p>':(data.length?data.map(e=>`<div class="card" style="margin:14px 0"><span class="eyebrow">${new Date(e.event_date).toLocaleString([],{dateStyle:"full",timeStyle:"short"})}</span><h3>${esc(e.title)}</h3>${e.location?`<p class="note">${esc(e.location)}</p>`:""}<p>${esc(e.description)}</p></div>`).join(""):"<p>No upcoming events yet. Please check back soon.</p>")};
