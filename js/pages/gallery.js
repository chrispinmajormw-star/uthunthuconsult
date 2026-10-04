// PHOTO DATA for Our Work (Projects, Workshops, Gallery). Put photos in images/gallery/ and list them here.
// Each line: [category, caption, "file name"]. To add a photo, copy a line, paste it below, and edit it.
const IMG="images/gallery/";
const gal=[
["University Mentoring Programs","LUANAR - University mentoring programs","luanar-mentoring-1.jpg"],
["University Mentoring Programs","LUANAR - University mentoring programs","luanar-mentoring-2.jpg"],
["Team Building","Team building exercise with CIC","team-building-global-fund.jpg"],
["Leadership Training","Uthunthu Leadership Training - Advanced Diploma in Leadership and Management","leadership-diploma.jpg"],
["Economic Empowerment","Economic Empowerment sessions","economic-empowerment.jpg"],
["Skills Development","Skills Development and Financial Empowerment Youth Training","youth-skills-1.jpg"],
["Skills Development","Skills Development and Financial Empowerment Youth Training","youth-skills-2.jpg"],
["Skills Development","Compassion Malawi youth skills development and mindset change training","compassion-youth-training.jpg"],
["Conference at Crossroads Hotel","World Vision faith leaders' empowerment sessions","faith-leaders-1.jpg"],
["Faith Leaders' Empowerment","World Vision faith leaders' empowerment sessions","faith-leaders-2.jpg"],
["Faith Leaders' Empowerment","World Vision National Prayer Day meeting","national-prayer-day.jpg"],
["Team Building session with Operation Smile","Team building","governance.jpg"],
["Media Houses Mentoring","Media","media-houses-mentoring.svg"],
["Religious Leaders Forum","Religion","religious-leaders-forum.svg"],
["Governance and Capacity Building","World Vision Capacity Building training","wv-lilongwe-capacity.jpg"],
["Staff Annual Retreats and Retirement Preparation","Annual Retreats","retreats.jpg"]
];
// Photos can be .jpg, .jpeg, .png, .webp or .svg: the site tries each type, so only the name before the dot must match.
const EXT=["svg","jpg","png","webp","jpeg"]; // the first type is tried first; put your main photo type first to avoid 404 messages
function tryNext(img){const i=+img.dataset.e+1;if(i<EXT.length){img.dataset.e=i;img.src=IMG+img.dataset.b+"."+EXT[i]}else img.parentNode.classList.add("no")}
const cats=["All",...new Set(gal.map(g=>g[0]))];
let currentLbIndex=0;
function showLightboxIndex(idx){
  if(idx<0)idx=gal.length-1;
  if(idx>=gal.length)idx=0;
  currentLbIndex=idx;
  const g=gal[idx];
  let o=$("lb");
  if(!o){
    o=document.createElement("div");o.id="lb";o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");
    document.body.appendChild(o);
  }
  const imgSrc=IMG+g[2].replace(/\.\w+$/,"")+"."+EXT[0];
  o.innerHTML=`<button id="lx" aria-label="Close dialog">&times;</button>
  <button id="lprev" class="lb-nav" aria-label="Previous photo">&#10094;</button>
  <div class="lb-content">
    <img src="${imgSrc}" data-b="${g[2].replace(/\.\w+$/,"")}" data-e="0" alt="${esc(g[1])}" onerror="tryNext(this)">
    <div class="lb-caption">
      <span class="eyebrow">${esc(g[0])}</span>
      <p>${esc(g[1])}</p>
      <span class="lb-counter">${currentLbIndex+1} of ${gal.length}</span>
    </div>
  </div>
  <button id="lnext" class="lb-nav" aria-label="Next photo">&#10095;</button>`;
  o.className="on";
  $("lx").onclick=()=>o.className="";
  $("lprev").onclick=e=>{e.stopPropagation();showLightboxIndex(currentLbIndex-1)};
  $("lnext").onclick=e=>{e.stopPropagation();showLightboxIndex(currentLbIndex+1)};
  o.onclick=e=>{if(e.target.id==="lb")o.className=""};
}
function lightbox(i){showLightboxIndex(i)}
document.addEventListener("keydown",e=>{
  const o=$("lb");
  if(!o||!o.classList.contains("on"))return;
  if(e.key==="Escape")o.className="";
  if(e.key==="ArrowLeft")showLightboxIndex(currentLbIndex-1);
  if(e.key==="ArrowRight")showLightboxIndex(currentLbIndex+1);
});
