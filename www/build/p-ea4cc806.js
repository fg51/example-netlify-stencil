import{p as t}from"./p-58d13c5e.js";const n=new WeakMap,o=(t,o,e,c=0)=>{n.has(t)!==e&&(e?i(t,o,c):r(t,o))},e=t=>t===t.getRootNode().activeElement,i=(t,o,e)=>{const i=o.parentNode,r=o.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,i.appendChild(r),n.set(t,r);const c="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",o.style.transform=`translate3d(${c}px,${e}px,0) scale(0)`},r=(t,o)=>{const e=n.get(t);e&&(n.delete(t),e.remove()),t.style.pointerEvents="",o.style.transform=""},c="input, textarea, [no-blur]",a=async(t,n,e,i,r)=>{if(!e&&!i)return;const c=((t,n,o)=>((t,n,o,e)=>{const i=t.top,r=t.bottom,c=n.top,a=c+15,s=.5*Math.min(n.bottom,e-o)-r,u=a-i,l=Math.round(s<0?-s:u>0?-u:0),d=Math.min(l,i-c),f=Math.abs(d);return{scrollAmount:d,scrollDuration:Math.min(400,Math.max(150,f/.3)),scrollPadding:o,inputSafeY:4-(i-a)}})((t.closest("ion-item,[ion-item]")||t).getBoundingClientRect(),n.getBoundingClientRect(),o,t.ownerDocument.defaultView.innerHeight))(t,e||i,r);if(e&&Math.abs(c.scrollAmount)<4)n.focus();else if(o(t,n,!0,c.inputSafeY),n.focus(),"undefined"!=typeof window){let i;const r=async()=>{void 0!==i&&clearTimeout(i),window.removeEventListener("ionKeyboardDidShow",r),e&&await e.scrollByPoint(0,c.scrollAmount,c.scrollDuration),o(t,n,!1,c.inputSafeY),n.focus()};if(e){const t=await e.getScrollElement();if(c.scrollAmount>t.scrollHeight-t.clientHeight-t.scrollTop)return window.addEventListener("ionKeyboardDidShow",r),void(i=setTimeout(r,1e3))}r()}},s=(t,n)=>{if("INPUT"!==t.tagName)return;if(t.parentElement&&"ION-INPUT"===t.parentElement.tagName)return;if(t.parentElement&&t.parentElement.parentElement&&"ION-SEARCHBAR"===t.parentElement.parentElement.tagName)return;const o=t.closest("ion-content");if(null===o)return;const e=o.$ionPaddingTimer;e&&clearTimeout(e),n>0?o.style.setProperty("--keyboard-offset",n+"px"):o.$ionPaddingTimer=setTimeout(()=>{o.style.setProperty("--keyboard-offset","0px")},120)},u=n=>{const i=document,r=n.getNumber("keyboardHeight",290),u=n.getBoolean("scrollAssist",!0),l=n.getBoolean("hideCaretOnScroll",!0),d=n.getBoolean("inputBlurring",!0),f=n.getBoolean("scrollPadding",!0),p=Array.from(i.querySelectorAll("ion-input, ion-textarea")),h=new WeakMap,w=new WeakMap,m=async n=>{n.componentOnReady&&await n.componentOnReady();const i=n.shadowRoot||n,c=i.querySelector("input")||i.querySelector("textarea"),s=n.closest("ion-content"),d=s?null:n.closest("ion-footer");if(c){if(s&&l&&!h.has(n)){const t=((t,n,i)=>{if(!i||!n)return()=>{};const r=i=>{e(n)&&o(t,n,i)},c=()=>o(t,n,!1),a=()=>r(!0),s=()=>r(!1);return i.addEventListener("ionScrollStart",a),i.addEventListener("ionScrollEnd",s),n.addEventListener("blur",c),()=>{i.removeEventListener("ionScrollStart",a),i.removeEventListener("ionScrollEnd",s),n.addEventListener("ionBlur",c)}})(n,c,s);h.set(n,t)}if((s||d)&&u&&!w.has(n)){const o=((n,o,i,r,c)=>{let s;const u=n=>{s=t(n)},l=u=>{if(!s)return;const l=t(u);((t,n,o)=>{if(n&&o){const e=n.x-o.x,i=n.y-o.y;return e*e+i*i>t*t}return!1})(6,s,l)||e(o)||(u.preventDefault(),u.stopPropagation(),a(n,o,i,r,c))};return n.addEventListener("touchstart",u,!0),n.addEventListener("touchend",l,!0),()=>{n.removeEventListener("touchstart",u,!0),n.removeEventListener("touchend",l,!0)}})(n,c,s,d,r);w.set(n,o)}}};d&&(()=>{let t=!0,n=!1;const o=document;o.addEventListener("ionScrollStart",()=>{n=!0}),o.addEventListener("focusin",()=>{t=!0},!0),o.addEventListener("touchend",e=>{if(n)return void(n=!1);const i=o.activeElement;if(!i)return;if(i.matches(c))return;const r=e.target;r!==i&&(r.matches(c)||r.closest(c)||(t=!1,setTimeout(()=>{t||i.blur()},50)))},!1)})(),f&&(t=>{const n=document;n.addEventListener("focusin",n=>{s(n.target,t)}),n.addEventListener("focusout",t=>{s(t.target,0)})})(r);for(const t of p)m(t);i.addEventListener("ionInputDidLoad",t=>{m(t.detail)}),i.addEventListener("ionInputDidUnload",t=>{(t=>{if(l){const n=h.get(t);n&&n(),h.delete(t)}if(u){const n=w.get(t);n&&n(),w.delete(t)}})(t.detail)})};export{u as startInputShims}