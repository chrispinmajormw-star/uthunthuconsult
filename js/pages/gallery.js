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
function lightbox(i,src){const g=gal[i];let o=$("lb");
if(!o){o=document.createElement("div");o.id="lb";o.setAttribute("role","dialog");o.setAttribute("aria-modal","true");document.body.appendChild(o)}
o.innerHTML=`<button id="lx" aria-label="Close">&times;</button><img src="${src}" alt="${esc(g[1])}"><p>${esc(g[1])}</p>`;
o.className="on";$("lx").focus();o.onclick=e=>{if(e.target.tagName!=="IMG")o.className=""}}
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&$("lb"))$("lb").className=""});
