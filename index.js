/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const b=document.querySelector("[data-advise-current-slide]"),w=document.querySelector("[data-advise-total-slide]"),m=document.querySelector(".advise-pagination");new Swiper(".advise__swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:"[data-advise-nav-next-btn]",prevEl:"[data-advise-nav-prev-btn]"},loop:!1,on:{init:function(){_.call(this)},slideChange:function(){const e=this.params.slidesPerView,n=this.realIndex+1,o=this.slides.length,a=Math.ceil(o/e);b.textContent=String(n).padStart(2,"0"),w.textContent=`/${String(a).padStart(2,"0")}`}},breakpoints:{320:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2,spaceBetween:23},1200:{slidesPerView:3,spaceBetween:35}}});function _(){const e=this.slides.length,n=this.params.slidesPerView;e<=n?m.style.display="none":m.style.display=""}const x=anime.timeline({easing:"easeOutQuad",duration:2e3});document.querySelector(".hero__title");x.add({targets:".hero__title",scale:[.5,1],opacity:[0,1],duration:2e3,easing:"easeOutBack"}).add({targets:".hero__description",translateY:["50px","0px"],opacity:[0,1],duration:1500,easing:"easeOutQuad"}).add({targets:".hero__button",translateY:["50px","0px"],opacity:[0,1],duration:1e3,easing:"easeOutQuad"},"-=1000").add({targets:".hero__image-caracal",translateX:["-100%","0%"],opacity:[0,1],duration:2500},"-=1500").add({targets:".hero__image-snake",translateX:["100%","0%"],opacity:[0,1],duration:2500},"-=2500").add({targets:".hero__image-parrot-secondary",translateY:["-150%","0%"],opacity:[1,1],duration:2e3},"-=1500").add({targets:".hero__image-parrot",translateY:["-150%","0%"],opacity:[1,1],duration:2e3},"-=2000");const E=document.querySelectorAll(".statistics__number"),L=new IntersectionObserver((e,n)=>{e.forEach(o=>{if(o.isIntersecting){const a=o.target,t=parseInt(a.getAttribute("data-target"),10),r=parseInt(a.textContent,10),s=t>1e3?10:1;anime({targets:a,innerHTML:[r,t],easing:"easeOutExpo",duration:2e3,round:1,update:function(i){const S=Math.floor(i.animations[0].currentValue),u=Math.floor(S/s)*s;t===100?a.innerHTML=`${u}%`:t>1e3?a.innerHTML=`${u}<span aria-hidden="true" class="statistics__plus">+</span>`:a.innerHTML=u}}),n.unobserve(a)}})},{threshold:.5});E.forEach(e=>L.observe(e));function c({targetsSelector:e,animationProps:n,threshold:o=.2}){const a=new IntersectionObserver((r,s)=>{r.forEach(i=>{i.isIntersecting&&(anime({targets:i.target,...n}),s.unobserve(i.target))})},{threshold:o});document.querySelectorAll(e).forEach(r=>a.observe(r))}c({targetsSelector:".animate-up",animationProps:{translateY:["50px","0px"],opacity:[0,1],duration:1e3,easing:"easeOutQuad"}});c({targetsSelector:".zoom-up",animationProps:{scale:[.5,1],opacity:[0,1],duration:1300,easing:"easeOutQuad"},threshold:.4});c({targetsSelector:".zoom-up-rotate",animationProps:{scale:[.5,1],opacity:[0,1],rotate:["240deg","-30deg"],duration:1300,easing:"easeOutQuad"},threshold:.4});c({targetsSelector:".animate-right",animationProps:{translateX:["100%","0%"],opacity:[0,1],duration:1500,easing:"easeOutQuad",delay:500},threshold:.3});c({targetsSelector:".animate-left",animationProps:{translateX:["-100%","0%"],opacity:[0,1],duration:1500,easing:"easeOutQuad",delay:500},threshold:.3});const O=document.querySelector("[data-offer-current-slide]"),P=document.querySelector("[data-offer-total-slide]");new Swiper(".offers__swiper",{slidesPerView:1,spaceBetween:10,navigation:{nextEl:"[data-offer-pagination-button-right]",prevEl:"[data-offer-pagination-button-left]"},loop:!1,on:{slideChange:function(){const e=this.realIndex+1,n=this.slides.length;O.textContent=String(e).padStart(2,"0"),P.textContent=`/${String(n).padStart(2,"0")}`}}});const q=document.querySelector(".hero"),f=document.querySelector(".hero__image-caracal"),g=document.querySelector(".hero__image-snake");q.addEventListener("mousemove",function(e){const n=window.innerWidth>=1200;if(e.target.closest(".hero")&&n){const o=e.clientX/window.innerWidth*20-10,a=e.clientY/window.innerHeight*20-10;f.style.transform=`translate(${o}px, ${a}px)`,g.style.transform=`translate(${-o}px, ${-a}px)`}else f.style.transform="translate(0px, 0px)",g.style.transform="translate(0px, 0px)"});const V=document.querySelector("[data-open-video-modal]"),h=document.querySelector("[data-close-video-modal]"),d=document.querySelector("[data-video-modal]"),p=document.querySelector(".video-iframe iframe");V.addEventListener("click",k);function k(){d.classList.remove("is-hidden"),d.addEventListener("click",v),document.body.style.overflowY="hidden",h.addEventListener("click",l),document.addEventListener("keydown",y)}function l(){d.classList.add("is-hidden"),d.removeEventListener("click",v),document.body.style.overflowY="visible",document.removeEventListener("keydown",y),h.removeEventListener("click",l),M()}function M(){const e=p.src;p.src="",p.src=e}function y(e){e.key==="Escape"&&l()}function v(e){e.target===e.currentTarget&&l()}document.querySelectorAll(".product-card__button").forEach(e=>{e.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation()})});
//# sourceMappingURL=index.js.map
