/* Drop-down menus for the top navigation (About, Services, Our Work). Edit the MENU list to change items. */
(function(){
  var MENU={
    "#/about":[["Our Story","#/about"],["Our Team","#/about/team"]],
    "#/services":[["Strategic Planning & Management","#/services/s0"],["Capacity Building","#/services/s1"],["Change Management","#/services/s2"],["Personal & Talent Development","#/services/s3"],["Team Building","#/services/s4"]],
    "#/work":[["Projects","#/work/projects"],["Workshops","#/work/workshops"],["Events","#/work/events"],["Gallery","#/work/gallery"]]
  };
  var css=".links .dd{position:relative;display:flex;align-items:center}"+
  ".links .dd>.chev{background:none;border:0;cursor:pointer;color:var(--mu);padding:6px 6px 6px 0;margin-left:-6px;display:flex;align-items:center}"+
  ".links .dd>.chev svg{width:12px;height:12px;transition:transform .2s}"+
  ".links .sub{display:none;position:absolute;top:100%;left:0;min-width:250px;padding:8px;background:var(--bg);border:1px solid var(--ln);border-radius:14px;box-shadow:var(--sh);z-index:30;flex-direction:column}"+
  ".links .sub a{display:block;padding:11px 14px;border-radius:10px;white-space:nowrap;font-size:.93rem}"+
  ".links .sub a:hover{background:var(--sf);color:var(--in)}"+
  "@media(min-width:1041px){.links .dd::after{content:'';position:absolute;left:0;right:0;top:100%;height:10px}.links .dd:hover>.sub,.links .dd:focus-within>.sub,.links .dd.open>.sub{display:flex}.links .dd:hover>.chev svg,.links .dd.open>.chev svg{transform:rotate(180deg)}}"+
  "@media(max-width:1040px){.links .dd{flex-wrap:wrap}.links .dd>a{flex:1}.links .dd>.chev{padding:10px 14px}.links .sub{position:static;width:100%;box-shadow:none;border:0;border-left:2px solid var(--ln);border-radius:0;margin:0 0 6px 14px;padding:2px 0 2px 6px;min-width:0}.links .sub a{white-space:normal}.links .dd.open>.sub{display:flex}.links .dd.open>.chev svg{transform:rotate(180deg)}}";
  var st=document.createElement("style");st.textContent=css;document.head.appendChild(st);
  function build(){
    var lk=document.getElementById("lk");if(!lk||lk.querySelector(".dd"))return;
    [].slice.call(lk.children).forEach(function(a){
      var items=MENU[a.getAttribute("href")];if(!items||a.tagName!=="A")return;
      var d=document.createElement("div");d.className="dd";
      lk.insertBefore(d,a);d.appendChild(a);
      var b=document.createElement("button");b.type="button";b.className="chev";b.setAttribute("aria-label","Open "+a.textContent+" menu");b.setAttribute("aria-expanded","false");
      b.innerHTML='<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4.5l4 4 4-4"/></svg>';
      b.onclick=function(e){e.stopPropagation();var o=d.classList.toggle("open");b.setAttribute("aria-expanded",o)};
      d.appendChild(b);
      var s=document.createElement("div");s.className="sub";
      items.forEach(function(i){var l=document.createElement("a");l.href=i[1];l.textContent=i[0];s.appendChild(l)});
      d.appendChild(s);
    });
    document.addEventListener("click",function(e){[].forEach.call(document.querySelectorAll(".dd.open"),function(d){if(!d.contains(e.target))d.classList.remove("open")})});
    lk.addEventListener("click",function(e){if(e.target.closest(".sub a")){[].forEach.call(document.querySelectorAll(".dd.open"),function(d){d.classList.remove("open")});var s=e.target.closest(".dd");if(s){s.classList.add("clicked");setTimeout(function(){s.classList.remove("clicked")},300)}}});
  }
  function team(){if(location.hash!=="#/about/team")return;setTimeout(function(){var h=[].slice.call(document.querySelectorAll("main h2, #app h2")).filter(function(x){return /our team/i.test(x.textContent)})[0];if(h)h.scrollIntoView({behavior:"smooth"})},60)}
  addEventListener("hashchange",team);
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",function(){build();team()});else{build();team()}
})();
