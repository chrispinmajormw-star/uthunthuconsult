P.nf=()=>`<section><div class="w"><h1>Page not found</h1><p><a class="btn" href="#/">Back to Home</a></p></div></section>`;
const S=" | Uthunthu Consultancy";
const T={"":["home","Uthunthu Consultancy | Building Complete People"],about:["about","About Us"+S],bsd:["bsd","The BSD Model"+S],services:["services","Services"+S],impact:["impact","Our Impact"+S],gallery:["gallery","Gallery"+S],events:["events","Events"+S],contact:["contact","Contact Us"+S],admin:["admin","Admin"+S],legal:["legal","Legal & Privacy"+S]};
function route(){const raw=location.hash.replace(/^#\/?/,"");const [k,sub]=raw.split("/");const t=T[k]||["nf","Not found"+S];
$("app").innerHTML=P[t[0]]();document.title=t[1];if(sub&&$(sub))$(sub).scrollIntoView();else window.scrollTo(0,0);
document.querySelectorAll(".links a:not(.btn)").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#/"+k));
$("lk").classList.remove("open");
const bp=$("bp");
if(bp){const show=i=>{bp.innerHTML=`<h3>${bsd[i][0]} - ${bsd[i][1]}</h3><p><strong>${bsd[i][2]}</strong></p><p>${bsd[i][3]}</p>`;document.querySelectorAll(".tabs button").forEach((b,j)=>b.setAttribute("aria-selected",j==i));document.querySelectorAll("svg g").forEach((g,j)=>g.querySelector("circle").setAttribute("r",j==i?50:42))};
show(0);document.querySelectorAll("[data-i]").forEach(el=>{el.onclick=()=>show(+el.dataset.i);el.onkeydown=e=>{if(e.key==="Enter"||e.key===" ")show(+el.dataset.i)}})}
if(AFTER[t[0]])AFTER[t[0]]();reveal()}
$("mb").onclick=function(){const o=$("lk").classList.toggle("open");this.setAttribute("aria-expanded",o)};
addEventListener("hashchange",route);route();
function reveal(){if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window))return;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.08});
document.querySelectorAll("main .card,main section h2,main .panel").forEach(el=>{el.classList.add("rv");io.observe(el)})}
