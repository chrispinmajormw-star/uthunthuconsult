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
  if(!sb || !data || !data.length){
    el.innerHTML=`<div class="card" style="max-width:780px;padding:36px 30px;border-top:4px solid var(--gd)">
      <span class="eyebrow">Public Calendar</span>
      <h3 style="margin:6px 0 10px;font-size:1.45rem">Upcoming Public Symposia &amp; Executive Retreats</h3>
      <p style="font-size:1.02rem;max-width:640px">We are currently curating our upcoming season of public masterclasses, university student symposia, and executive leadership retreats across Lilongwe and Blantyre.</p>
      <div style="background:var(--sf);border:1px solid var(--ln);border-radius:12px;padding:18px 20px;margin:20px 0">
        <strong style="color:var(--tx)">Looking to Host a Session Sooner?</strong>
        <p class="note" style="margin:4px 0 0">All our flagship programmes — from Strategic Change to Team Building — can be scheduled on-demand as private in-house retreats or board sessions for your institution.</p>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <a class="btn g" href="#/contact">Request In-House Training</a>
        <a class="btn o" href="https://wa.me/265994040040?text=Hello%20Uthunthu%2C%20I%20would%20like%20to%20inquire%20about%20scheduling%20an%20in-house%20workshop." target="_blank" rel="noopener">Inquire via WhatsApp &rarr;</a>
      </div>
    </div>`;
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
