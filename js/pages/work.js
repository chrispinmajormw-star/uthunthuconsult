// OUR WORK page: Projects, Workshops, Events (from Supabase) and Gallery.
// Projects and Workshops show photos listed in gallery.js. Edit the file names below to change what appears.
const WORK={
projects:["luanar-mentoring-1.jpg","compassion-youth-training.jpg","youth-skills-1.jpg","economic-empowerment.jpg"],
workshops:["leadership-diploma.jpg","team-building-global-fund.jpg","wv-lilongwe-capacity.jpg","retreats.jpg","faith-leaders-1.jpg","governance.jpg"]};
// The Gallery shows only photos that are not already shown in Projects or Workshops, so nothing appears twice.
const galRest=()=>gal.map((g,i)=>[g,i]).filter(([g])=>!WORK.projects.includes(g[2])&&!WORK.workshops.includes(g[2]));
const galCats=()=>["All",...new Set(galRest().map(([g])=>g[0]))];
const WS=[["projects","Projects","Programs for students, youth and communities."],["workshops","Workshops","Training sessions for leaders, teams and institutions."],["events","Events","Upcoming events from Uthunthu Consultancy."],["gallery","Gallery","Photos from our programs, workshops and retreats."]];
const phFig=(g,i)=>`<figure class="ph" data-i="${i}" tabindex="0" role="button" aria-label="Open photo: ${esc(g[1])}"><img data-b="${g[2].replace(/\.\w+$/,"")}" data-e="0" src="${IMG+g[2].replace(/\.\w+$/,"")}.${EXT[0]}" alt="${esc(g[1])}" loading="lazy" onerror="tryNext(this)"><figcaption><span class="eyebrow">${esc(g[0])}</span>${esc(g[1])}</figcaption></figure>`;
function bindPh(root){root.querySelectorAll(".ph").forEach(f=>{const open=()=>{if(!f.classList.contains("no"))lightbox(+f.dataset.i,f.querySelector("img").src)};f.onclick=open;f.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}}})}
const wkBody={projects:'<div class="gal wk" id="wkp"></div>',workshops:'<div class="gal wk" id="wkw"></div>',events:'<div id="ev"><p>Loading...</p></div>',
gallery:()=>`<div class="tabs" id="gf">${galCats().map((c,i)=>`<button data-c="${esc(c)}" aria-selected="${i==0}">${esc(c)}</button>`).join("")}</div><div class="gal" id="gg"></div>`};
P.work=()=>`<section style="padding-bottom:0"><div class="w"><h1>Our Work</h1><p style="max-width:760px">A look at the programs, workshops and events delivered by Uthunthu Consultancy, and the people and institutions we have worked with.</p></div></section>
<nav class="lgn" aria-label="Our work sections">${WS.map(s=>`<a href="#/work/${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("")}</nav>
<div class="w">${WS.map(s=>`<section class="lgs" id="${s[0]}"><h2>${s[1]}</h2><p class="note">${s[2]}</p>${typeof wkBody[s[0]]=="function"?wkBody[s[0]]():wkBody[s[0]]}<a class="bt" href="#/work" data-top>Back to Top &uarr;</a></section>`).join("")}</div>`;
AFTER.work=()=>{
const fill=(id,files)=>{const el=$(id);el.innerHTML=files.map(f=>gal.findIndex(g=>g[2]===f)).filter(i=>i>=0).map(i=>phFig(gal[i],i)).join("");bindPh(el)};
fill("wkp",WORK.projects);fill("wkw",WORK.workshops);
const draw=c=>{const el=$("gg");el.innerHTML=galRest().filter(([g])=>c=="All"||g[0]==c).map(([g,i])=>phFig(g,i)).join("");bindPh(el)};
document.querySelectorAll("#gf button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#gf button").forEach(x=>x.setAttribute("aria-selected",x===b));draw(b.dataset.c)});
draw("All");loadEvents();
const links=[...document.querySelectorAll(".lgn a")];
links.forEach(a=>a.onclick=e=>{e.preventDefault();const el=$(a.dataset.s);if(el)el.scrollIntoView({behavior:"smooth"});history.replaceState(null,"","#/work/"+a.dataset.s)});
document.querySelectorAll("[data-top]").forEach(a=>a.onclick=e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});history.replaceState(null,"","#/work")});
if(!("IntersectionObserver" in window))return;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.dataset.s===e.target.id))}),{rootMargin:"-25% 0px -65% 0px"});
document.querySelectorAll(".lgs").forEach(s=>io.observe(s))};
