// Loads upcoming events from Supabase into the Events section of the Our Work page.
const pubFile=(p,dl)=>sb?sb.storage.from("event-files").getPublicUrl(p,dl?{download:true}:undefined).data.publicUrl:"#";

function makeGoogleCalUrl(e){
  const start=new Date(e.event_date);
  const end=new Date(start.getTime()+2*3600000);
  const fmt=d=>d.toISOString().replace(/-|:|\.\d+/g,"");
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.title)}&dates=${fmt(start)}/${fmt(end)}&details=${encodeURIComponent(e.description||'')}&location=${encodeURIComponent(e.location||'Lilongwe, Malawi')}`;
}

function makeIcsDataUrl(e){
  const start=new Date(e.event_date);
  const end=new Date(start.getTime()+2*3600000);
  const fmt=d=>d.toISOString().replace(/-|:|\.\d+/g,"");
  const ics=`BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Uthunthu Consultancy//Events//EN\nBEGIN:VEVENT\nSUMMARY:${e.title}\nDESCRIPTION:${(e.description||'').replace(/\n/g,'\\n')}\nLOCATION:${e.location||'Lilongwe, Malawi'}\nDTSTART:${fmt(start)}\nDTEND:${fmt(end)}\nEND:VEVENT\nEND:VCALENDAR`;
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}`;
}

async function loadEvents(){
  const el=$("ev");
  if(!el)return;
  if(!sb){
    el.innerHTML='<div class="card" style="max-width:760px"><p class="note">Events will appear once Supabase is connected.</p></div>';
    return;
  }
  el.innerHTML=`<div class="card skeleton-card" style="max-width:760px;margin:14px 0"><div class="skeleton-line" style="width:40%;height:20px;margin-bottom:12px"></div><div class="skeleton-line" style="width:75%;height:28px;margin-bottom:14px"></div><div class="skeleton-line" style="width:100%;height:16px;margin-bottom:8px"></div><div class="skeleton-line" style="width:60%;height:16px"></div></div>`;
  
  const {data,error}=await sb.from("events").select("*").eq("published",true).gte("event_date",new Date(Date.now()-864e5).toISOString()).order("event_date");
  
  if(error){
    el.innerHTML='<p class="err">Could not load events.</p>';
    return;
  }
  if(!data||!data.length){
    el.innerHTML='<div class="card" style="max-width:760px;text-align:center;padding:40px"><span class="eyebrow">Stay Tuned</span><h3>No Upcoming Public Events Scheduled</h3><p class="note">Check back soon for upcoming executive retreats, workshops, and youth leadership symposiums.</p><p><a class="btn" href="#/contact">Request an In-House Program</a></p></div>';
    return;
  }
  
  el.innerHTML=data.map(e=>{
    const d=new Date(e.event_date);
    const m=d.toLocaleString("en-US",{month:"short"}).toUpperCase();
    const day=d.getDate();
    const time=d.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"});
    const fullDate=d.toLocaleString("en-US",{dateStyle:"full"});
    
    return `<div class="card ev-card" style="margin:20px 0;max-width:780px">
      <div class="ev-header">
        <div class="ev-date-badge">
          <span class="ev-month">${m}</span>
          <span class="ev-day">${day}</span>
          <span class="ev-time">${time}</span>
        </div>
        <div class="ev-details">
          <span class="eyebrow">${fullDate}</span>
          <h3>${esc(e.title)}</h3>
          ${e.location?`<p class="note" style="display:flex;align-items:center;gap:6px"><svg style="width:16px;height:16px;flex:none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>${esc(e.location)}</p>`:""}
        </div>
      </div>
      <p style="margin-top:14px">${esc(e.description||"")}</p>
      ${e.schedule?`<h4 class="sh" style="margin-top:16px">Program Schedule</h4><ul class="sch">${e.schedule.split("\n").filter(x=>x.trim()).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`:""}
      <div class="ev-actions" style="display:flex;flex-wrap:wrap;gap:10px;margin-top:20px">
        <a class="btn o" href="${makeGoogleCalUrl(e)}" target="_blank" rel="noopener">Add to Google Calendar</a>
        <a class="btn o" href="${makeIcsDataUrl(e)}" download="uthunthu-event.ics">Download .ics</a>
        ${e.pdf_path?`<a class="btn g" href="${pubFile(e.pdf_path)}" target="_blank" rel="noopener">View Event PDF</a>`:""}
        <a class="btn" href="#/contact">Register / Inquire</a>
      </div>
    </div>`;
  }).join("");
}
