import{r as t,d as i,h as s,H as e,c as h}from"./p-9c7debc1.js";import{g as o}from"./p-0c76def7.js";import{c as r}from"./p-58d13c5e.js";import{b as n,c as a,a as p}from"./p-01d898c5.js";const c=class{constructor(s){t(this,s),this.optHeight=0,this.rotateFactor=0,this.scaleFactor=1,this.velocity=0,this.y=0,this.noAnimate=!0,this.ionPickerColChange=i(this,"ionPickerColChange",7)}colChanged(){this.refresh()}async connectedCallback(){let t=0,i=.81;"ios"===o(this)&&(t=-.46,i=1),this.rotateFactor=t,this.scaleFactor=i,this.gesture=(await __sc_import_app("./p-dea53824.js")).createGesture({el:this.el,gestureName:"picker-swipe",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(),this.tmrId=setTimeout(()=>{this.noAnimate=!1,this.refresh(!0)},250)}componentDidLoad(){const t=this.optsEl;t&&(this.optHeight=t.firstElementChild?t.firstElementChild.clientHeight:0),this.refresh()}disconnectedCallback(){cancelAnimationFrame(this.rafId),clearTimeout(this.tmrId),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}emitColChange(){this.ionPickerColChange.emit(this.col)}setSelected(t,i){const s=t>-1?-t*this.optHeight:0;this.velocity=0,cancelAnimationFrame(this.rafId),this.update(s,i,!0),this.emitColChange()}update(t,i,s){if(!this.optsEl)return;let e=0,h=0;const{col:o,rotateFactor:r}=this,a=o.selectedIndex=this.indexForY(-t),p=0===i?"":i+"ms",c=`scale(${this.scaleFactor})`,d=this.optsEl.children;for(let n=0;n<d.length;n++){const s=d[n],f=o.options[n],x=n*this.optHeight+t;let k="";if(0!==r){const t=x*r;Math.abs(t)<=90?(e=0,h=90,k=`rotateX(${t}deg) `):e=-9999}else h=0,e=x;const m=a===n;k+=`translate3d(0px,${e}px,${h}px) `,1===this.scaleFactor||m||(k+=c),this.noAnimate?(f.duration=0,s.style.transitionDuration=""):i!==f.duration&&(f.duration=i,s.style.transitionDuration=p),k!==f.transform&&(f.transform=k,s.style.transform=k),m!==f.selected&&(f.selected=m,m?s.classList.add(l):s.classList.remove(l))}this.col.prevSelected=a,s&&(this.y=t),this.lastIndex!==a&&(n(),this.lastIndex=a)}decelerate(){if(0!==this.velocity){this.velocity*=d,this.velocity=this.velocity>0?Math.max(this.velocity,1):Math.min(this.velocity,-1);let t=this.y+this.velocity;t>this.minY?(t=this.minY,this.velocity=0):t<this.maxY&&(t=this.maxY,this.velocity=0),this.update(t,0,!0),Math.round(t)%this.optHeight!=0||Math.abs(this.velocity)>1?this.rafId=requestAnimationFrame(()=>this.decelerate()):(this.velocity=0,this.emitColChange(),a())}else if(this.y%this.optHeight!=0){const t=Math.abs(this.y%this.optHeight);this.velocity=t>this.optHeight/2?1:-1,this.decelerate()}}indexForY(t){return Math.min(Math.max(Math.abs(Math.round(t/this.optHeight)),0),this.col.options.length-1)}onStart(t){t.event.preventDefault(),t.event.stopPropagation(),p(),cancelAnimationFrame(this.rafId);const i=this.col.options;let s=i.length-1,e=0;for(let h=0;h<i.length;h++)i[h].disabled||(s=Math.min(s,h),e=Math.max(e,h));this.minY=-s*this.optHeight,this.maxY=-e*this.optHeight}onMove(t){t.event.preventDefault(),t.event.stopPropagation();let i=this.y+t.deltaY;i>this.minY?(i=Math.pow(i,.8),this.bounceFrom=i):i<this.maxY?(i+=Math.pow(this.maxY-i,.9),this.bounceFrom=i):this.bounceFrom=0,this.update(i,0,!1)}onEnd(t){if(this.bounceFrom>0)return this.update(this.minY,100,!0),void this.emitColChange();if(this.bounceFrom<0)return this.update(this.maxY,100,!0),void this.emitColChange();if(this.velocity=r(-f,23*t.velocityY,f),0===this.velocity&&0===t.deltaY){const i=t.event.target.closest(".picker-opt");i&&i.hasAttribute("opt-index")&&this.setSelected(parseInt(i.getAttribute("opt-index"),10),x)}else{if(this.y+=t.deltaY,Math.abs(t.velocityY)<.05){const i=t.deltaY>0,s=Math.abs(this.y)%this.optHeight/this.optHeight;i&&s>.5?this.velocity=-1*Math.abs(this.velocity):!i&&s<=.5&&(this.velocity=Math.abs(this.velocity))}this.decelerate()}}refresh(t){let i=this.col.options.length-1,s=0;const e=this.col.options;for(let o=0;o<e.length;o++)e[o].disabled||(i=Math.min(i,o),s=Math.max(s,o));if(0!==this.velocity)return;const h=r(i,this.col.selectedIndex||0,s);if(this.col.prevSelected!==h||t){const t=h*this.optHeight*-1;this.velocity=0,this.update(t,x,!0)}}render(){const t=this.col,i=o(this);return s(e,{class:{[i]:!0,"picker-col":!0,"picker-opts-left":"left"===this.col.align,"picker-opts-right":"right"===this.col.align},style:{"max-width":this.col.columnWidth}},t.prefix&&s("div",{class:"picker-prefix",style:{width:t.prefixWidth}},t.prefix),s("div",{class:"picker-opts",style:{maxWidth:t.optionsWidth},ref:t=>this.optsEl=t},t.options.map((t,i)=>s("button",{type:"button",class:{"picker-opt":!0,"picker-opt-disabled":!!t.disabled},"opt-index":i},t.text))),t.suffix&&s("div",{class:"picker-suffix",style:{width:t.suffixWidth}},t.suffix))}get el(){return h(this)}static get watchers(){return{col:["colChanged"]}}},l="picker-opt-selected",d=.97,f=90,x=150;c.style={md:".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}[dir=rtl] .picker-opt,:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{padding-left:8px;padding-right:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}"};export{c as ion_picker_column}