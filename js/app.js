P.nf=()=>`<section><div class="w"><h1>Page not found</h1><p><a class="btn" href="#/">Back to Home</a></p></div></section>`;
const S=" | Uthunthu Consultancy";
const T={"":["home","Uthunthu Consultancy | Building Complete People"],about:["about","About Us"+S],bsd:["bsd","Our Approach"+S],services:["services","Services"+S],impact:["impact","Our Impact"+S],work:["work","Our Work"+S],contact:["contact","Contact Us"+S],admin:["admin","Admin"+S],legal:["legal","Legal & Privacy"+S]};

function route(){
  const raw=location.hash.replace(/^#\/?/,"");
  const [k,sub]=raw.split("/");
  if(k==="contact"&&sub){
    window._preselectService=sub;
  }
  if(["gallery","events","projects","workshops"].includes(k)){
    location.replace("#/work/"+k);
    return;
  }
  const t=T[k]||["nf","Not found"+S];
  $("app").innerHTML=P[t[0]]();
  document.title=t[1];
  
  if(sub&&$(sub))$(sub).scrollIntoView({behavior:"smooth"});
  else window.scrollTo(0,0);

  // Set focus on app for screen readers & keyboard navigation
  $("app").focus({preventScroll:true});

  document.querySelectorAll(".links a:not(.btn)").forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#/"+k));
  
  // Close mobile nav
  $("lk").classList.remove("open");
  $("mb").setAttribute("aria-expanded","false");

  // Synchronize BSD Model (Tabs + SVG nodes + 3-Pillar Cards)
  const bp=$("bp");
  if(bp){
    const show=i=>{
      bp.innerHTML=`<h3>${bsd[i][0]} · ${bsd[i][1]}</h3><p class="eyebrow">${bsd[i][2]}</p><p><strong>${bsd[i][3]}</strong></p><p>${bsd[i][4]}</p><p class="note"><strong>Focus Areas:</strong> ${bsd[i][5]}</p>`;
      document.querySelectorAll(".tabs button").forEach((b,j)=>b.setAttribute("aria-selected",j==i));
      document.querySelectorAll(".bsd-node").forEach((g,j)=>{
        const c=g.querySelector("circle");
        if(c){
          c.setAttribute("r",j==i?50:42);
          c.style.filter=j==i?"drop-shadow(0 0 10px rgba(47,179,97,.6))":"none";
        }
      });
      document.querySelectorAll(".bsd-card").forEach((card,j)=>{
        card.classList.toggle("active",j==i);
      });
    };
    show(0);
    document.querySelectorAll("[data-i]").forEach(el=>{
      el.onclick=()=>show(+el.dataset.i);
      el.onkeydown=e=>{if(e.key==="Enter"||e.key===" ")show(+el.dataset.i)};
    });
  }

  if(AFTER[t[0]])AFTER[t[0]]();
  reveal();
}

// Mobile Menu toggle & outside dismiss
$("mb").onclick=function(e){
  e.stopPropagation();
  const o=$("lk").classList.toggle("open");
  this.setAttribute("aria-expanded",o);
};
document.addEventListener("click",e=>{
  if(!e.target.closest("header")&&$("lk").classList.contains("open")){
    $("lk").classList.remove("open");
    $("mb").setAttribute("aria-expanded","false");
  }
});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape"&&$("lk").classList.contains("open")){
    $("lk").classList.remove("open");
    $("mb").setAttribute("aria-expanded","false");
    $("mb").focus();
  }
});

// Theme Switcher (Dark / Light)
const themeBtn=$("theme-toggle");
if(themeBtn){
  themeBtn.onclick=()=>{
    const cur=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";
    document.documentElement.setAttribute("data-theme",cur);
    localStorage.setItem("theme",cur);
  };
}

// Toast Notification helper
window.showToast=(msg,duration=3000)=>{
  const t=$("toast");
  if(!t)return;
  t.textContent=msg;
  t.classList.add("show");
  clearTimeout(t._tid);
  t._tid=setTimeout(()=>t.classList.remove("show"),duration);
};

// Scroll listener: progress bar & back-to-top
window.addEventListener("scroll",()=>{
  const h=document.documentElement,b=document.body;
  const st="scrollTop"in h?h.scrollTop:b.scrollTop;
  const sh="scrollHeight"in h?h.scrollHeight:b.scrollHeight;
  const ch=h.clientHeight||window.innerHeight;
  const pct=(st/(sh-ch))*100;
  
  const pb=$("scroll-progress");
  if(pb)pb.style.width=Math.min(100,Math.max(0,pct))+"%";
  
  const btt=$("back-to-top");
  if(btt)btt.classList.toggle("show",st>350);
},{passive:true});

const btt=$("back-to-top");
if(btt){
  btt.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
}

addEventListener("hashchange",route);
route();

function reveal(){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches||!("IntersectionObserver" in window))return;
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.08});
  document.querySelectorAll("main .card,main section h2,main .panel").forEach(el=>{el.classList.add("rv");io.observe(el)});
}
