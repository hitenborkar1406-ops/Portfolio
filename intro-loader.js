/* Independent five-second Genesis timeline with skip and deterministic cleanup. */
(function(){"use strict";var DURATION=5000,root=document.documentElement,el=document.getElementById("introLoader");if(!el)return;
function unlock(){root.classList.remove("intro-lock")}function remove(){if(el&&el.parentNode)el.parentNode.removeChild(el)}
function cleanup(){if(typeof window.__introGenesisUnmount==="function")window.__introGenesisUnmount()}
function hasWebGL2(){try{return !!document.createElement("canvas").getContext("webgl2")}catch(e){return false}}
if(!root.classList.contains("js")||!hasWebGL2()||window.matchMedia("(prefers-reduced-motion: reduce)").matches){unlock();cleanup();remove();return}
var fill=document.getElementById("introFill"),pct=document.getElementById("introPct"),bar=document.getElementById("introBar"),skip=document.getElementById("introSkip"),start=performance.now(),raf=0,last=-1,leaving=false;
function progress(t){if(fill)fill.style.transform="scaleX("+t+")";var n=Math.floor(t*100);if(n!==last){last=n;if(pct)pct.textContent=(n<10?"0":"")+n+"%";if(bar)bar.setAttribute("aria-valuenow",String(n))}}
function leave(){if(leaving)return;leaving=true;cancelAnimationFrame(raf);window.removeEventListener("keydown",onKey);unlock();el.classList.add("is-leaving");var done=false;function finish(){if(done)return;done=true;cleanup();remove()}el.addEventListener("transitionend",function(e){if(e.target===el)finish()});setTimeout(finish,1300)}
function tick(now){var t=Math.min(1,Math.max(0,(now-start)/DURATION));progress(t);if(t<1)raf=requestAnimationFrame(tick);else leave()}
function skipNow(){progress(1);leave()}function onKey(e){if(e.key==="Escape")skipNow()}
if(skip)skip.addEventListener("click",skipNow);window.addEventListener("keydown",onKey);raf=requestAnimationFrame(tick)})();