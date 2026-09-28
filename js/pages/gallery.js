// PHOTO GALLERY. Put photos in images/gallery/ and list them here.
// Each line: [category, caption, "file name"]. To add a photo, copy a line, paste it below, and edit it.
const IMG="images/gallery/";
const gal=[
["University Mentoring Programs","LUANAR - University mentoring programs","luanar-mentoring-1.jpg"],
["University Mentoring Programs","LUANAR - University mentoring programs","luanar-mentoring-2.jpg"],
["Team Building","Team building exercise with Global Fund","team-building-global-fund.jpg"],
["Leadership Training","Uthunthu Leadership Training - Advanced Diploma in Leadership and Management","leadership-diploma.jpg"],
["Economic Empowerment","Economic Empowerment sessions","economic-empowerment.jpg"],
["Skills Development","Skills Development and Financial Empowerment Youth Training","youth-skills-1.jpg"],
["Skills Development","Skills Development and Financial Empowerment Youth Training","youth-skills-2.jpg"],
["Skills Development","Compassion Malawi youth skills development and mindset change training","compassion-youth-training.jpg"],
["Faith Leaders' Empowerment","World Vision faith leaders' empowerment sessions","faith-leaders-1.jpg"],
["Faith Leaders' Empowerment","World Vision faith leaders' empowerment sessions","faith-leaders-2.jpg"],
["Faith Leaders' Empowerment","World Vision National Prayer Day meeting","national-prayer-day.jpg"],
["Governance and Capacity Building","Governance Empowerment sessions","governance.jpg"],
["Governance and Capacity Building","World Vision Lilongwe Team Capacity Building training","wv-lilongwe-capacity.jpg"],
["Staff Retreats and Retirement Preparation","Retrenchment and Retirement preparation with World Vision staff","retirement-preparation.jpg"],
["Staff Retreats and Retirement Preparation","Retreats","retreats.jpg"]
];
const cats=["All",...new Set(gal.map(g=>g[0]))];
P.gallery=()=>`<section><div class="w"><h1>Gallery</h1><div class="tabs" id="gf">${cats.map((c,i)=>`<button data-c="${esc(c)}" aria-selected="${i==0}">${esc(c)}</button>`).join("")}</div><div class="gal" id="gg"></div></div></section>`;
AFTER.gallery=()=>{
const draw=c=>{$("gg").innerHTML=gal.map((g,i)=>[g,i]).filter(([g])=>c=="All"||g[0]==c).map(([g,i])=>`<figure class="ph" data-i="${i}" tabindex="0" role="button" aria-label="Open photo: ${esc(g[1])}"><img src="${IMG+g[2]}" alt="${esc(g[1])}" loading="lazy" onerror="this.parentNode.classList.add('no')"><figcaption><span class="eyebrow">${esc(g[0])}</span>${esc(g[1])}</figcaption></figure>`).join("");
document.querySelectorAll(".ph").forEach(f=>{const open=()=>{if(!f.classList.contains("no"))lightbox(+f.dataset.i)};f.onclick=open;f.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open()}}})};
document.querySelectorAll("#gf button").forEach(b=>b.onclick=()=>{document.querySelectorAll("#gf button").forEach(x=>x.setAttribute("aria-selected",x===b));draw(b.dataset.c)});
draw("All")};
function lightbox(i){const g=gal[i];let o=$("lb");
if(!o){o=document.createElement("div");o.id="lb";o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");document.body.appendChild(o)}
o.innerHTML=`<button id="lx" aria-label="Close">&times;</button><img src="${IMG+g[2]}" alt="${esc(g[1])}"><p>${esc(g[1])}</p>`;
o.className="on";$("lx").focus();o.onclick=e=>{if(e.target.tagName!=="IMG")o.className=""}}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("lb"))$("lb").className=""});
