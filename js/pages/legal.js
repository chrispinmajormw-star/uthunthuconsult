// LEGAL PAGE: edit the wording here. Each section: [id, title, [[subheading, text or list of bullets], ...]]
const LG=[
["terms","Terms &amp; Conditions",[
["Acceptance of Terms","By accessing or using the Uthunthu Consultancy website, you agree to these terms. If you do not agree, please stop using the website."],
["About Our Website","This website provides information about Uthunthu Consultancy, its services and professional activities, and ways to contact us."],
["Use of Website Content","Website content, including text, branding, graphics and photographs, is provided for informational purposes. You must not reproduce, distribute or commercially exploit protected material without our permission, except where the law allows."],
["Accuracy of Information","We make reasonable efforts to keep the information on this website accurate and current, but service descriptions and other details may change. Please contact us to confirm specific service details."],
["Professional Services","Information on this website does not by itself create a consultancy agreement. Actual services, deliverables, fees, timelines and responsibilities are set out in a separate agreement with the client."],
["Third-Party Links","This website may link to external websites. Uthunthu Consultancy is not responsible for the content, privacy practices or availability of third-party sites."],
["Limitation of Liability","Information on this website is provided for general informational purposes. To the extent permitted by applicable law, Uthunthu Consultancy's liability arising from your use of the website is limited. Nothing in these terms excludes or limits any liability that cannot be excluded or limited under applicable law.","liability"],
["Changes to These Terms","We may update these terms from time to time. The updated version will be published on this page."]]],
["privacy","Privacy Policy",[
["Introduction","Uthunthu Consultancy respects your privacy and aims to handle personal information responsibly."],
["Information We May Collect",["When you send a contact or consultation request: your name, organization (optional), email address, phone number (optional), service of interest and the message you write.","Technical information: this website does not run analytics tools. As with most websites, our hosting and font providers may automatically receive standard technical details, such as IP address and browser type, when pages load."]],
["How We Use Information",["To respond to enquiries and consultation requests.","To communicate about services you have asked about.","To improve the website and user experience.","To maintain website security.","To meet applicable legal obligations."]],
["Sharing of Information","Personal information is not made public simply because you submit an enquiry. Requests are stored in a database provided by our service provider (Supabase) and are accessible only to authorized Uthunthu administrators. Information may also be shared with other authorized service providers or where the law requires, subject to applicable safeguards."],
["Data Security","We use reasonable technical and organizational measures to protect personal information. No internet transmission or storage system can be guaranteed to be completely secure."],
["Data Retention","We keep information only for as long as reasonably necessary for the purpose it was collected for, subject to applicable legal and operational requirements."],
["Your Privacy Rights","Depending on applicable law, you may have the right to ask for access to, correction of, or deletion of your personal information. To make a privacy request, contact us using the details below."],
["Contact About Privacy","Uthunthu Consultancy<br>Plot 12/324, Lilongwe, Malawi<br><a href=\"tel:+265888355602\">+265 888 355 602</a><br><a href=\"tel:+265994040040\">+265 994 040 040</a><br>You can also use our <a href=\"#/contact\">contact form</a>."]]],
["cookies","Cookies Policy",[
["What Are Cookies?","Cookies are small files stored on your device that help websites remember your preferences and support certain features."],
["How We May Use Cookies",["Essential: support necessary functionality and security. This website does not set cookies for visitors. Staff sign-in to the admin area stores a session in the browser's storage, for administrators only.","Preference: remember settings or choices. Not currently used.","Analytics: help understand website usage. Not currently used.","Marketing: support advertising or measurement. Not currently used."]],
["Managing Cookies","You can manage or delete cookies and site data through your browser settings. If optional cookies are introduced in future, you will be given controls to manage them."],
["Cookie Consent","Because this website does not currently use non-essential cookies or tracking technologies, it does not show a cookie banner. If we add any, we will ask for your consent first and will not activate them before you agree."],
["Changes to This Policy","We may update this policy when the website's features, technologies or legal requirements change."]]]
];
const lgBody=b=>typeof b=="string"?`<p>${b}</p>`:`<ul>${b.map(x=>`<li>${x}</li>`).join("")}</ul>`;
P.legal=()=>`<section style="padding-bottom:0"><div class="w"><h1>Legal &amp; Privacy</h1><p style="max-width:760px">At Uthunthu Consultancy, we value transparency, trust and the privacy of everyone who interacts with us. This page explains the terms governing the use of our website, how we handle personal information and how cookies may be used.</p><p class="note">Last updated: 29 September 2026</p></div></section>
<nav class="lgn" aria-label="Legal sections">${LG.map(s=>`<a href="#/legal/${s[0]}" data-s="${s[0]}">${s[1]}</a>`).join("")}</nav>
<div class="w">${LG.map(s=>`<section class="lgs" id="${s[0]}"><h2>${s[1]}</h2>${s[2].map(x=>`<h3 class="sub"${x[2]?` id="${x[2]}"`:""}>${x[0]}</h3>${lgBody(x[1])}`).join("")}<a class="bt" href="#/legal" data-top>Back to Top &uarr;</a></section>`).join("")}</div>`;
AFTER.legal=()=>{const links=[...document.querySelectorAll(".lgn a")];
const go=(id)=>{const el=$(id);if(el)el.scrollIntoView({behavior:"smooth"});history.replaceState(null,"","#/legal/"+id)};
links.forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.s)});
document.querySelectorAll("[data-top]").forEach(a=>a.onclick=e=>{e.preventDefault();window.scrollTo({top:0,behavior:"smooth"});history.replaceState(null,"","#/legal")});
if(!("IntersectionObserver" in window))return;
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.dataset.s===e.target.id))}),{rootMargin:"-25% 0px -65% 0px"});
document.querySelectorAll(".lgs").forEach(s=>io.observe(s))};
