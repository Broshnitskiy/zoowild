(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const u={opacity:[1,1],duration:3e3,easing:"easeOutQuad"};anime({targets:".hero__image-caracal",translateX:["-100%","0"],...u});anime({targets:".hero__image-snake",translateX:["100%","0%"],delay:1e3,...u});const m=document.querySelectorAll(".statistics__number"),g=new IntersectionObserver((n,r)=>{n.forEach(i=>{if(i.isIntersecting){const t=i.target,e=parseInt(t.getAttribute("data-target"),10),s=parseInt(t.textContent,10),o=e>1e3?10:1;anime({targets:t,innerHTML:[s,e],easing:"easeOutExpo",duration:2e3,round:1,update:function(p){const f=Math.floor(p.animations[0].currentValue),a=Math.floor(f/o)*o;e===100?t.innerHTML=`${a}%`:e>1e3?t.innerHTML=`${a}<span aria-hidden="true" class="statistics__plus">+</span>`:t.innerHTML=a}}),r.unobserve(t)}})},{threshold:.5});m.forEach(n=>g.observe(n));const h=document.querySelector(".hero"),l=document.querySelector(".hero__image-caracal"),c=document.querySelector(".hero__image-snake");h.addEventListener("mousemove",function(n){const r=window.innerWidth>=1200;if(n.target.closest(".hero")&&r){const i=n.clientX/window.innerWidth*20-10,t=n.clientY/window.innerHeight*20-10;l.style.transform=`translate(${i}px, ${t}px)`,c.style.transform=`translate(${-i}px, ${-t}px)`}else l.style.transform="translate(0px, 0px)",c.style.transform="translate(0px, 0px)"});const S=document.querySelector("[data-offer-current-slide]"),y=document.querySelector("[data-offer-total-slide]");new Swiper(".offers__swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:"[data-offer-pagination-button-right]",prevEl:"[data-offer-pagination-button-left]"},loop:!1,on:{slideChange:function(){const n=this.realIndex+1,r=this.slides.length;S.textContent=String(n).padStart(2,"0"),y.textContent=`/${String(r).padStart(2,"0")}`}}});const w=document.querySelector("[data-advise-current-slide]"),b=document.querySelector("[data-advise-total-slide]"),d=document.querySelector(".advise-pagination");new Swiper(".advise__swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:"[data-advise-nav-next-btn]",prevEl:"[data-advise-nav-prev-btn]"},loop:!1,on:{init:function(){v.call(this)},slideChange:function(){const n=this.params.slidesPerView,r=this.realIndex+1,i=this.slides.length,t=Math.ceil(i/n);w.textContent=String(r).padStart(2,"0"),b.textContent=`/${String(t).padStart(2,"0")}`}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:23},1200:{slidesPerView:3,spaceBetween:35}}});function v(){const n=this.slides.length,r=this.params.slidesPerView;n<=r?d.style.display="none":d.style.display=""}
//# sourceMappingURL=index.js.map
