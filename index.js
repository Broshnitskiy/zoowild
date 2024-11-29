(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const o=anime.timeline({easing:"easeOutQuad",duration:2e3});o.add({targets:[".hero__image-caracal",".hero__image-snake"],translateX:(t,n)=>n===0?["-100%","0%"]:["100%","0%"],opacity:[0,1],duration:2500});o.add({targets:".hero__title",scale:[.9,1],opacity:[0,1],duration:1e3,easing:"easeOutBack"});o.add({targets:".hero__description",translateY:["50px","0px"],opacity:[0,1],duration:1500});o.add({targets:".hero__button",translateY:["50px","0px"],opacity:[0,1],duration:1e3});const m=document.querySelectorAll(".statistics__number"),g=new IntersectionObserver((t,n)=>{t.forEach(i=>{if(i.isIntersecting){const r=i.target,e=parseInt(r.getAttribute("data-target"),10),s=parseInt(r.textContent,10),a=e>1e3?10:1;anime({targets:r,innerHTML:[s,e],easing:"easeOutExpo",duration:2e3,round:1,update:function(p){const f=Math.floor(p.animations[0].currentValue),l=Math.floor(f/a)*a;e===100?r.innerHTML=`${l}%`:e>1e3?r.innerHTML=`${l}<span aria-hidden="true" class="statistics__plus">+</span>`:r.innerHTML=l}}),n.unobserve(r)}})},{threshold:.5});m.forEach(t=>g.observe(t));const h=document.querySelector(".hero"),c=document.querySelector(".hero__image-caracal"),d=document.querySelector(".hero__image-snake");h.addEventListener("mousemove",function(t){const n=window.innerWidth>=1200;if(t.target.closest(".hero")&&n){const i=t.clientX/window.innerWidth*20-10,r=t.clientY/window.innerHeight*20-10;c.style.transform=`translate(${i}px, ${r}px)`,d.style.transform=`translate(${-i}px, ${-r}px)`}else c.style.transform="translate(0px, 0px)",d.style.transform="translate(0px, 0px)"});const S=document.querySelector("[data-offer-current-slide]"),y=document.querySelector("[data-offer-total-slide]");new Swiper(".offers__swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:"[data-offer-pagination-button-right]",prevEl:"[data-offer-pagination-button-left]"},loop:!1,on:{slideChange:function(){const t=this.realIndex+1,n=this.slides.length;S.textContent=String(t).padStart(2,"0"),y.textContent=`/${String(n).padStart(2,"0")}`}}});const w=document.querySelector("[data-advise-current-slide]"),b=document.querySelector("[data-advise-total-slide]"),u=document.querySelector(".advise-pagination");new Swiper(".advise__swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:"[data-advise-nav-next-btn]",prevEl:"[data-advise-nav-prev-btn]"},loop:!1,on:{init:function(){v.call(this)},slideChange:function(){const t=this.params.slidesPerView,n=this.realIndex+1,i=this.slides.length,r=Math.ceil(i/t);w.textContent=String(n).padStart(2,"0"),b.textContent=`/${String(r).padStart(2,"0")}`}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:23},1200:{slidesPerView:3,spaceBetween:35}}});function v(){const t=this.slides.length,n=this.params.slidesPerView;t<=n?u.style.display="none":u.style.display=""}
//# sourceMappingURL=index.js.map
