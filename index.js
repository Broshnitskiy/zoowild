(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".hero"),c=document.querySelector(".hero__image-caracal"),a=document.querySelector(".hero__image-snake");l.addEventListener("mousemove",function(n){const r=window.innerWidth>=1200?20:10;if(n.target.closest(".hero")){const o=n.clientX/window.innerWidth*r-r/2,e=n.clientY/window.innerHeight*r-r/2;c.style.transform=`translateX(-50%) translate(${o}px, ${e}px)`,a.style.transform=`translate(${-o}px, ${-e}px)`}else c.style.transform="translateX(-50%)",a.style.transform="translate(0px, 0px)"});
//# sourceMappingURL=index.js.map
