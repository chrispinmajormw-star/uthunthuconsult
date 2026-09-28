P.nf=()=>`<section><div class="w"><h1>Page not found</h1><p><a class="btn" href="#/">Back to Home</a></p></div></section>`;
const S=" | Uthunthu Consultancy";
const T={"":["home","Uthunthu Consultancy | Building Complete People"],about:["about","About Us"+S],bsd:["bsd","The BSD Model"+S],services:["services","Services"+S],impact:["impact","Our Impact"+S],gallery:["gallery","Gallery"+S],events:["events","Events"+S],contact:["contact","Contact Us"+S],admin:["admin","Admin"+S]};
function route(){const k=location.hash.replace(/^#\/?/,"");const t=T[k]||["nf","Not found"+S];
$("app").innerHTML=P[t[0]]();document.title=t[1];window.scrollTo(0,0);
document.querySelectorAll(".links a:not(.btn)").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#/"+k));
$("lk").classList.remove("open");
const bp=$("bp");
if(bp){const show=i=>{bp.innerHTML=`<h3>${bsd[i][0]} - ${bsd[i][1]}</h3><p><strong>${bsd[i][2]}</strong></p><p>${bsd[i][3]}</p>`;document.querySelectorAll(".tabs button").forEach((b,j)=>b.setAttribute("aria-selected",j==i));document.querySelectorAll("svg g").forEach((g,j)=>g.querySelector("circle").setAttribute("r",j==i?50:42))};
show(0);document.querySelectorAll("[data-i]").forEach(el=>{el.onclick=()=>show(+el.dataset.i);el.onkeydown=e=>{if(e.key==="Enter"||e.key===" ")show(+el.dataset.i)}})}
if(AFTER[t[0]])AFTER[t[0]]()}
$("mb").onclick=function(){const o=$("lk").classList.toggle("open");this.setAttribute("aria-expanded",o)};
addEventListener("hashchange",route);route();
