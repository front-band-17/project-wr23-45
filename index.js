import{a as g,S as b,i as d,A as w}from"./assets/vendor-DC4YsHNk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();function h(){const t=document.querySelector(".header-menu-button"),e=document.querySelector(".nav-list"),s=document.querySelector(".mobile-menu-container"),n=document.querySelector(".mobile-menu-button"),o=document.querySelector(".mobile-menu-close-button");document.querySelector(".mobile-menu-nav");const r=document.querySelectorAll(".mobile-menu-nav .nav-link"),a=document.querySelector(".order-button-mobile-menu");t.addEventListener("click",c=>{if(c.preventDefault(),e.classList.contains("menu-visible")){e.classList.remove("menu-visible");return}e.classList.add("menu-visible")}),document.addEventListener("click",c=>{!(s.contains(c.target)||t.contains(c.target))&&e.classList.contains("menu-visible")&&e.classList.remove("menu-visible")}),n.addEventListener("click",i),o.addEventListener("click",u);function i(){s.classList.add("show"),document.body.classList.add("modal-body-lock")}function u(){s.classList.remove("show"),document.body.classList.remove("modal-body-lock")}r.forEach(c=>{c.addEventListener("click",m=>{u();const p=c.getAttribute("href"),l=document.querySelector(p);l&&l.scrollIntoView({behavior:"smooth"})})}),a.addEventListener("click",c=>{u();const m=document.querySelector("#work-together");m&&m.scrollIntoView({behavior:"smooth"})})}const L="https://portfolio-js.b.goit.study/api/reviews";async function S(){return await g.get(L).then(t=>t.data).catch(t=>{throw new Error(t)})}function E(t){return t.map(({author:e,avatar_url:s,review:n})=>`
        <li class="reviews-item swiper-slide">
            <img class="reviews-photo" src="${s}" alt="${e}" width="48" height="48">
            <h3 class="reviews-name">${e}</h3>
            <p class="reviews-content">${n}</p>
        </li>
    `).join("")}function q(t,e){t.insertAdjacentHTML("beforeend",e),new b(".swiper",{slidesPerView:4,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",enabled:!0},keyboard:{enabled:!0},breakpoints:{320:{slidesPerView:1,slidesSizesGrid:343},768:{slidesPerView:2,slidesSizesGrid:344},1440:{slidesPerView:4,slidesSizesGrid:332}}})}function k(){d.error({backgroundColor:"#EF4040",messageColor:"#FAFAFB",theme:"dark",progressBarColor:"#B51B1B",maxWidth:"432",messageSize:"16",position:"topRight",message:"Error loading reviews: Not found"})}function C(){document.querySelector(".swiper").style.display="none",document.querySelector(".not-found").style.display="block"}function M(){document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".work-together__form"),e=t==null?void 0:t.querySelector('input[name="email"]'),s=t==null?void 0:t.querySelector('input[name="message"]'),n=document.getElementById("popup");if(!t||!e||!s||!n)return;const o=n.querySelector("h3"),r=n.querySelector("p"),a=n.querySelector(".popup__close");[e,s].forEach(i=>{i.addEventListener("blur",()=>{i.value.length>25&&(i.dataset.fullValue=i.value,i.value=i.value.slice(0,25)+"...")})}),t.addEventListener("submit",async i=>{i.preventDefault(),e.dataset.fullValue&&(e.value=e.dataset.fullValue),s.dataset.fullValue&&(s.value=s.dataset.fullValue);const u=e.value.trim(),c=s.value.trim(),m=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;if(!u||!c){d.warning({title:"Warning",message:"Please fill out both fields."});return}if(!m.test(u)){d.warning({title:"Warning",message:"Please enter a valid email address."});return}const p={email:u,comment:c};try{const l=await g.post("https://portfolio-js.b.goit.study/api/requests",p,{headers:{Accept:"application/json"}});if(l.status!==201)return;const y=l.data;o&&(o.textContent=y.title),r&&(r.textContent=y.message),n.classList.add("active"),document.body.classList.add("modal-popup-open"),t.reset();const f=()=>{n.classList.remove("active"),document.body.classList.remove("modal-popup-open")};a==null||a.addEventListener("click",f),n.addEventListener("click",v=>{v.target===n&&f()}),document.addEventListener("keydown",v=>{v.key==="Escape"&&f()})}catch(l){if(!l.response){d.error({title:"Error",message:`Network error: ${l.message}`});return}switch(l.response.status){case 400:d.error({title:"Error",message:"Bad Request: Invalid request body."});break;case 404:d.error({title:"Error",message:"Not Found: Endpoint does not exist."});break;case 500:d.error({title:"Error",message:"Server Error: Please try again later."});break;default:d.error({title:"Error",message:l.response.statusText});break}}})})}function P(){new w(".about-me-ac-container",{openOnInit:[0],elementClass:"about-me-ac-item",panelClass:"about-me-ac-panel"}),new b(".about-me-swiper-container",{keyboard:{enabled:!0},loop:!0,navigation:{nextEl:".about-me-swiper-button-next",enabled:!0},breakpoints:{320:{slidesPerView:2,slidesSizesGrid:343},768:{slidesPerView:3,slidesSizesGrid:600},1440:{slidesPerView:6,slidesSizesGrid:332}}}),document.querySelector(".about-me-ac-container").style.display="block",document.querySelector(".about-me-swiper").style.display="flex"}function x(){document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".covers"),e=document.querySelectorAll(".covers-tiles-line"),s={root:null,rootMargin:"0px",threshold:.1};new IntersectionObserver((o,r)=>{o.forEach(a=>{a.isIntersecting?e.forEach(i=>i.classList.add("animate")):e.forEach(i=>i.classList.remove("animate"))})},s).observe(t)})}function V(){new b(".swiper-projects",{keyboard:{enabled:!0},slidesPerView:"auto",navigation:{nextEl:".project-swiper-button-next",prevEl:".project-swiper-button-prev",enabled:!0}}),document.querySelector(".section-projects").style.display="block"}function I(){document.addEventListener("DOMContentLoaded",function(){new w(".js-accordion",{duration:400,showMultiple:!0,elementClass:"faq-ac-item",triggerClass:"faq-ac-header",panelClass:"faq-ac-panel",activeClass:"is-active"})})}h();x();M();I();V();(async()=>{const t=await S();try{const e=document.querySelector(".reviews-list");q(e,E(t))}catch{k(),C()}})();P();
//# sourceMappingURL=index.js.map
