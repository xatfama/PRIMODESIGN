import{o as r,c as a,r as I,n as u,a as x,b as M,d as s,e as C,f as v,w as y,_ as f,F as S,g as $,h as g,i as j,j as o,u as h,k as b,p as k,l as H,t as L}from"./index-bffc7f99.js";const _=(t,e)=>{const i=t.__vccOpts||t;for(const[c,n]of e)i[c]=n;return i},P={name:"Slide",props:{index:{type:Number}},data(){return{parent:this.$parent,styles:{},zIndex:999}},computed:{isCurrent(){return this.index===this.parent.currentIndex},leftIndex(){return this.parent.oneDirectional&&this.getSideIndex(this.parent.leftIndices)>this.parent.currentIndex-1?-1:this.getSideIndex(this.parent.leftIndices)},rightIndex(){return this.parent.oneDirectional&&this.getSideIndex(this.parent.rightIndices)>this.parent.total-this.parent.currentIndex-2?-1:this.getSideIndex(this.parent.rightIndices)},slideStyle(){let t={};if(!this.isCurrent){const e=this.leftIndex,i=this.rightIndex;(i>=0||e>=0)&&(t=i>=0?this.calculatePosition(i,!0,this.zIndex):this.calculatePosition(e,!1,this.zIndex),t.opacity=1,t.visibility="visible"),this.parent.hasHiddenSlides&&(this.matchIndex(this.parent.leftOutIndex)?t=this.calculatePosition(this.parent.leftIndices.length-1,!1,this.zIndex):this.matchIndex(this.parent.rightOutIndex)&&(t=this.calculatePosition(this.parent.rightIndices.length-1,!0,this.zIndex)))}return Object.assign(t,{"border-width":this.parent.border+"px",width:this.parent.slideWidth+"px",height:this.parent.slideHeight+"px",transition:" transform "+this.parent.animationSpeed+"ms,                opacity "+this.parent.animationSpeed+"ms,                visibility "+this.parent.animationSpeed+"ms"})},computedClasses(){return{[`left-${this.leftIndex+1}`]:this.leftIndex>=0,[`right-${this.rightIndex+1}`]:this.rightIndex>=0,current:this.isCurrent}}},methods:{getSideIndex(t){let e=-1;return t.forEach((i,c)=>{this.matchIndex(i)&&(e=c)}),e},matchIndex(t){return t>=0?this.index===t:this.parent.total+t===this.index},calculatePosition(t,e,i){const c=this.parent.disable3d?0:parseInt(this.parent.inverseScaling)+(t+1)*100,n=this.parent.disable3d?0:parseInt(this.parent.perspective),l=this.parent.space==="auto"?parseInt((t+1)*(this.parent.width/1.5),10):parseInt((t+1)*this.parent.space,10),p=e?"translateX("+l+"px) translateZ(-"+c+"px) rotateY(-"+n+"deg)":"translateX(-"+l+"px) translateZ(-"+c+"px) rotateY("+n+"deg)",w=this.parent.space==="auto"?0:parseInt((t+1)*this.parent.space);return{transform:p,top:w,zIndex:i-(Math.abs(t)+1)}},goTo(){if(!this.isCurrent)this.parent.clickable===!0&&this.parent.goFar(this.index);else{const{index:t}=this;this.parent.onMainSlideClick({index:t})}}}};function N(t,e,i,c,n,l){return r(),a("div",{class:u(["carousel-3d-slide",l.computedClasses]),style:x(l.slideStyle),onClick:e[0]||(e[0]=p=>l.goTo())},[I(t.$slots,"default",{index:i.index,isCurrent:l.isCurrent,leftIndex:l.leftIndex,rightIndex:l.rightIndex})],6)}const O=_(P,[["render",N]]),Z={props:{autoplay:{type:Boolean,default:!1},autoplayTimeout:{type:Number,default:2e3},autoplayHoverPause:{type:Boolean,default:!0}},data(){return{autoplayInterval:null}},destroyed(){this.process_server||(this.pauseAutoplay(),this.$el.removeEventListener("mouseenter",this.pauseAutoplay),this.$el.removeEventListener("mouseleave",this.startAutoplay))},methods:{pauseAutoplay(){this.autoplayInterval&&(this.autoplayInterval=clearInterval(this.autoplayInterval))},startAutoplay(){this.autoplay&&(this.autoplayInterval=setInterval(()=>{this.dir==="ltr"?this.goPrev():this.goNext()},this.autoplayTimeout))}},mounted(){!this.process_server&&this.autoplayHoverPause&&(this.$el.addEventListener("mouseenter",this.pauseAutoplay),this.$el.addEventListener("mouseleave",this.startAutoplay),this.startAutoplay())}},A={name:"Controls",props:{width:{type:[String,Number],default:50},height:{type:[String,Number],default:60},prevHtml:{type:String,default:"&lsaquo;"},nextHtml:{type:String,default:"&rsaquo;"}},data(){return{parent:this.$parent}}},D={class:"carousel-3d-controls"},X=["innerHTML"],B=["innerHTML"];function E(t,e,i,c,n,l){return r(),a("div",D,[s("a",{href:"#",class:u(["prev",{disabled:!n.parent.isPrevPossible}]),onClick:e[0]||(e[0]=y(p=>n.parent.goPrev(),["prevent"])),style:x(`width: ${i.width}px; height: ${i.height}px; line-height: ${i.height}px;`),"aria-label":"Previous slide"},[s("span",{innerHTML:i.prevHtml},null,8,X)],6),s("a",{href:"#",class:u(["next",{disabled:!n.parent.isNextPossible}]),onClick:e[1]||(e[1]=y(p=>n.parent.goNext(),["prevent"])),style:x(`width: ${i.width}px; height: ${i.height}px; line-height: ${i.height}px;`),"aria-label":"Next slide"},[s("span",{innerHTML:i.nextHtml},null,8,B)],6)])}const F=_(A,[["render",E],["__scopeId","data-v-475a7b20"]]),m=()=>{},V={name:"Carousel3d",components:{Controls:F},props:{count:{type:[Number,String],default:0},perspective:{type:[Number,String],default:35},display:{type:[Number,String],default:5},loop:{type:Boolean,default:!0},animationSpeed:{type:[Number,String],default:500},dir:{type:String,default:"rtl"},width:{type:[Number,String],default:360},height:{type:[Number,String],default:270},border:{type:[Number,String],default:1},space:{type:[Number,String],default:"auto"},startIndex:{type:[Number,String],default:0},clickable:{type:Boolean,default:!0},disable3d:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:10},inverseScaling:{type:[Number,String],default:300},controlsVisible:{type:Boolean,default:!1},controlsPrevHtml:{type:String,default:"&lsaquo;"},controlsNextHtml:{type:String,default:"&rsaquo;"},controlsWidth:{type:[String,Number],default:50},controlsHeight:{type:[String,Number],default:50},onLastSlide:{type:Function,default:m},onSlideChange:{type:Function,default:m},bias:{type:String,default:"left"},onMainSlideClick:{type:Function,default:m},oneDirectional:{type:Boolean,default:!1}},data(){return{viewport:0,currentIndex:0,total:0,dragOffsetX:0,dragStartX:0,dragOffsetY:0,dragStartY:0,mousedown:!1,zIndex:998,process_server:typeof window===void 0}},mixins:[Z],watch:{count(){this.computeData()}},computed:{isLastSlide(){return this.currentIndex===this.total-1},isFirstSlide(){return this.currentIndex===0},isNextPossible(){return!(!this.loop&&this.isLastSlide)},isPrevPossible(){return!(!this.loop&&this.isFirstSlide)},slideWidth(){const t=this.viewport,e=parseInt(this.width)+parseInt(this.border,10)*2;return t<e&&!this.process_server?t:e},slideHeight(){const t=parseInt(this.width,10)+parseInt(this.border,10)*2,e=parseInt(parseInt(this.height)+this.border*2,10),i=this.calculateAspectRatio(t,e);return this.slideWidth/i},visible(){return this.display>this.total?this.total:this.display},hasHiddenSlides(){return this.total>this.visible},leftIndices(){let t=(this.visible-1)/2;t=this.bias.toLowerCase()==="left"?Math.ceil(t):Math.floor(t);const e=[];for(let i=1;i<=t;i++)e.push(this.dir==="ltr"?(this.currentIndex+i)%this.total:(this.currentIndex-i)%this.total);return e},rightIndices(){let t=(this.visible-1)/2;t=this.bias.toLowerCase()==="right"?Math.ceil(t):Math.floor(t);const e=[];for(let i=1;i<=t;i++)e.push(this.dir==="ltr"?(this.currentIndex-i)%this.total:(this.currentIndex+i)%this.total);return e},leftOutIndex(){let t=(this.visible-1)/2;return t=this.bias.toLowerCase()==="left"?Math.ceil(t):Math.floor(t),t++,this.dir==="ltr"?this.total-this.currentIndex-t<=0?-parseInt(this.total-this.currentIndex-t):this.currentIndex+t:this.currentIndex-t},rightOutIndex(){let t=(this.visible-1)/2;return t=this.bias.toLowerCase()==="right"?Math.ceil(t):Math.floor(t),t++,this.dir==="ltr"?this.currentIndex-t:this.total-this.currentIndex-t<=0?-parseInt(this.total-this.currentIndex-t,10):this.currentIndex+t}},methods:{goNext(){this.isNextPossible&&(this.isLastSlide?this.goSlide(0):this.goSlide(this.currentIndex+1))},goPrev(){this.isPrevPossible&&(this.isFirstSlide?this.goSlide(this.total-1):this.goSlide(this.currentIndex-1))},goSlide(t){this.currentIndex=t<0||t>this.total-1?0:t,this.isLastSlide&&(this.onLastSlide!==m&&console.warn("onLastSlide deprecated, please use @last-slide"),this.onLastSlide(this.currentIndex),this.$emit("last-slide",this.currentIndex)),this.$emit("before-slide-change",this.currentIndex),setTimeout(()=>this.animationEnd(),this.animationSpeed)},goFar(t){let e=t===this.total-1&&this.isFirstSlide?-1:t-this.currentIndex;this.isLastSlide&&t===0&&(e=1);const i=e<0?-e:e;let c=0,n=0;for(;n<i;)n+=1,setTimeout(()=>e<0?this.goPrev(i):this.goNext(i),i===1?0:c),c+=this.animationSpeed/i},animationEnd(){this.onSlideChange!==m&&console.warn("onSlideChange deprecated, please use @after-slide-change"),this.onSlideChange(this.currentIndex),this.$emit("after-slide-change",this.currentIndex)},handleMouseup(){this.mousedown=!1,this.dragOffsetX=0,this.dragOffsetY=0},handleMousedown(t){t.touches||t.preventDefault(),this.mousedown=!0,this.dragStartX="ontouchstart"in window?t.touches[0].clientX:t.clientX,this.dragStartY="ontouchstart"in window?t.touches[0].clientY:t.clientY},handleMousemove(t){if(!this.mousedown)return;const e="ontouchstart"in window?t.touches[0].clientX:t.clientX,i="ontouchstart"in window?t.touches[0].clientY:t.clientY,c=this.dragStartX-e,n=this.dragStartY-i;this.dragOffsetX=c,this.dragOffsetY=n,!(Math.abs(this.dragOffsetY)>Math.abs(this.dragOffsetX))&&(this.dragOffsetX>this.minSwipeDistance?(this.handleMouseup(),this.goNext()):this.dragOffsetX<-this.minSwipeDistance&&(this.handleMouseup(),this.goPrev()))},attachMutationObserver(){const t=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(t){const e={attributes:!0,childList:!0,characterData:!0};this.mutationObserver=new t(()=>{this.$nextTick(()=>{this.computeData()})}),this.$el&&this.mutationObserver.observe(this.$el,e)}},detachMutationObserver(){this.mutationObserver&&this.mutationObserver.disconnect()},getSlideCount(){const t=this.$slots.default();return t.length>0?t[0].children.length:0},calculateAspectRatio(t,e){return Math.min(t/e)},computeData(t){this.total=this.getSlideCount(),(t||this.currentIndex>=this.total)&&(this.currentIndex=parseInt(this.startIndex)>this.total-1?this.total-1:parseInt(this.startIndex)),this.viewport=this.$el.clientWidth},setSize(){this.$el.style.cssText+="height:"+this.slideHeight+"px;",this.$el.childNodes[0].style.cssText+="width:"+this.slideWidth+"px; height:"+this.slideHeight+"px;"}},mounted(){this.process_server||(this.computeData(!0),this.attachMutationObserver(),window.addEventListener("resize",this.setSize),"ontouchstart"in window?(this.$el.addEventListener("touchstart",this.handleMousedown),this.$el.addEventListener("touchend",this.handleMouseup),this.$el.addEventListener("touchmove",this.handleMousemove)):(this.$el.addEventListener("mousedown",this.handleMousedown),this.$el.addEventListener("mouseup",this.handleMouseup),this.$el.addEventListener("mousemove",this.handleMousemove)))},beforeDestroy(){this.process_server||(this.detachMutationObserver(),"ontouchstart"in window?this.$el.removeEventListener("touchmove",this.handleMousemove):this.$el.removeEventListener("mousemove",this.handleMousemove),window.removeEventListener("resize",this.setSize))}};function z(t,e,i,c,n,l){const p=M("controls");return r(),a("div",{class:"carousel-3d-container",style:x({height:this.slideHeight+"px"})},[s("div",{class:"carousel-3d-slider",style:x({width:this.slideWidth+"px",height:this.slideHeight+"px"})},[I(t.$slots,"default",{},void 0,!0)],4),i.controlsVisible?(r(),C(p,{key:0,"next-html":i.controlsNextHtml,"prev-html":i.controlsPrevHtml,width:i.controlsWidth,height:i.controlsHeight},null,8,["next-html","prev-html","width","height"])):v("",!0)],4)}const T=_(V,[["render",z],["__scopeId","data-v-d1f6685d"]]);function Y(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"fill-rule":"evenodd",d:"M4.5 3.75a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-15Zm9 4.5a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5Zm1.5 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5H16.5v2.25H18a.75.75 0 0 1 0 1.5h-1.5v3a.75.75 0 0 1-1.5 0v-7.5ZM6.636 9.78c.404-.575.867-.78 1.25-.78s.846.205 1.25.78a.75.75 0 0 0 1.228-.863C9.738 8.027 8.853 7.5 7.886 7.5c-.966 0-1.852.527-2.478 1.417-.62.882-.908 2-.908 3.083 0 1.083.288 2.201.909 3.083.625.89 1.51 1.417 2.477 1.417.967 0 1.852-.527 2.478-1.417a.75.75 0 0 0 .136-.431V12a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0 0 1.5H9v1.648c-.37.44-.774.602-1.114.602-.383 0-.846-.205-1.25-.78C6.226 13.638 6 12.837 6 12c0-.837.226-1.638.636-2.22Z","clip-rule":"evenodd"})])}function W(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{d:"M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"}),s("path",{d:"m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"})])}function G(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"fill-rule":"evenodd",d:"M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z","clip-rule":"evenodd"})])}function R(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"fill-rule":"evenodd",d:"M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z","clip-rule":"evenodd"})])}function q(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{d:"M5.625 3.75a2.625 2.625 0 1 0 0 5.25h12.75a2.625 2.625 0 0 0 0-5.25H5.625ZM3.75 11.25a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75ZM3 15.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75ZM3.75 18.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z"})])}function K(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"fill-rule":"evenodd",d:"M1.5 7.125c0-1.036.84-1.875 1.875-1.875h6c1.036 0 1.875.84 1.875 1.875v3.75c0 1.036-.84 1.875-1.875 1.875h-6A1.875 1.875 0 0 1 1.5 10.875v-3.75Zm12 1.5c0-1.036.84-1.875 1.875-1.875h5.25c1.035 0 1.875.84 1.875 1.875v8.25c0 1.035-.84 1.875-1.875 1.875h-5.25a1.875 1.875 0 0 1-1.875-1.875v-8.25ZM3 16.125c0-1.036.84-1.875 1.875-1.875h5.25c1.036 0 1.875.84 1.875 1.875v2.25c0 1.035-.84 1.875-1.875 1.875h-5.25A1.875 1.875 0 0 1 3 18.375v-2.25Z","clip-rule":"evenodd"})])}function J(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{d:"M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z"})])}function Q(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{"fill-rule":"evenodd",d:"M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z","clip-rule":"evenodd"}),s("path",{d:"M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z"})])}function U(t,e){return r(),a("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[s("path",{d:"M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z"})])}const tt={},et={class:"px-4 pb-4"};function st(t,e){return r(),a("div",et," Contenido ")}const it=f(tt,[["render",st]]),nt={},rt={class:"px-4 pb-4"};function at(t,e){return r(),a("div",rt," Contenido ")}const lt=f(nt,[["render",at]]),ot={},dt={class:"px-4 pb-4"};function ct(t,e){return r(),a("div",dt," Contenido ")}const ht=f(ot,[["render",ct]]),ut={},pt={class:"px-4 pb-4"};function vt(t,e){return r(),a("div",pt," Contenido ")}const ft=f(ut,[["render",vt]]),mt={},xt={class:"px-4 pb-4"};function gt(t,e){return r(),a("div",xt," Contenido ")}const _t=f(mt,[["render",gt]]),wt={},yt={class:"px-4 pb-4"};function bt(t,e){return r(),a("div",yt," Contenido ")}const It=f(wt,[["render",bt]]),St={},$t={class:"px-4 pb-4"},Mt=s("div",null,"Galeria",-1),Ct={class:"text-center"},jt={class:"inline-flex p-4"},kt=g('<div class="max-w-56 border bg-indigo-700/20 border-white/70 rounded-xl overflow-hidden box glowing relative"><div><img src="https://xatimg.com/image/jl1HmS0PSoZ0.jpg" class="w-full aspect-video object-cover object-center"></div><div class="text-xl">Modelo 1</div><div class="pb-2">750 xats</div><div class="flex"><button class="w-full text-center bg-indigo-600 hover:bg-indigo-500 border-t border-r">Detalle</button><a class="w-full text-center bg-indigo-600 hover:bg-indigo-500 border-t border-l" href="https://xatfama.github.io/MODEL001/" target="_blank"> Abrir</a></div></div>',1),Ht=[kt];function Lt(t,e){return r(),a("div",$t,[Mt,s("div",Ct,[(r(),a(S,null,$(10,i=>s("div",jt,Ht)),64))])])}const Pt=f(St,[["render",Lt]]);const d=t=>(k("data-v-9f72754e"),t=t(),H(),t),Nt={class:"w-screen h-screen flex justify-center items-start overflow-hidden sm:overflow-auto sm:py-16 animate__animated animate__fadeIn"},Ot={key:0,class:"sm:flex w-full h-full relative sm:max-w-[95%] sm:max-4xl sm:h-[700px] overflow-hidden md:rounded-xl bg-indigo-950/50 text-white font-bold sm:border sm:border-white/50 sm:rounded-xl object-blur sm:drop-shadow-border"},Zt={class:"w-full sm:w-24 lg:w-52 border-b sm:border-r border-white/50"},At=g('<div class="text-center flex sm:block justify-center items-center p-1" data-v-9f72754e><div class="p-1 sm:p-2 lg:p-5 pb-0" data-v-9f72754e><div class="w-12 sm:w-full aspect-[1/1] mr-2 sm:mt-2" data-v-9f72754e><img src="https://xatimg.com/image/OtDpZKptSVTd.jpg" class="w-full h-full rounded-full shadow-lg shadow-gray-700 border-2 border-white/50" data-v-9f72754e></div></div><div class="block sm:hidden lg:block" data-v-9f72754e><div class="text-xl" data-v-9f72754e>PrimoDesign</div><div class="text-sm" data-v-9f72754e>(1497539991)</div></div></div>',1),Dt={class:"px-2 flex justify-center sm:my-4 sm:block w-full sm:border-none border-white/50 transition-all"},Xt={class:"w-full lg:w-[30%] min-w-7 flex justify-center lg:justify-end items-center sm:pr-1"},Bt=d(()=>s("div",{class:"w-[70%] hidden lg:flex justify-start items-center"},"Inicio",-1)),Et={class:"w-full lg:w-[30%] min-w-7 flex justify-center lg:justify-end items-center sm:pr-1"},Ft=d(()=>s("div",{class:"w-[70%] hidden lg:flex justify-start items-center"},"Xatspaces",-1)),Vt={class:"w-full lg:w-[30%] min-w-7 flex justify-center lg:justify-end items-center sm:pr-1"},zt=d(()=>s("div",{class:"w-[70%] hidden lg:flex justify-start items-center"},"Xatframes",-1)),Tt={class:"w-full lg:w-[30%] min-w-7 flex justify-center lg:justify-end items-center sm:pr-1"},Yt=d(()=>s("div",{class:"w-[70%] hidden lg:flex justify-start items-center"},"Repros",-1)),Wt={class:"w-full lg:w-[30%] min-w-7 flex justify-center lg:justify-end items-center sm:pr-1"},Gt=d(()=>s("div",{class:"w-[70%] hidden lg:flex justify-start items-center"},"Fondos",-1)),Rt={class:"w-full lg:w-[30%] min-w-7 flex justify-center lg:justify-end items-center sm:pr-1"},qt=d(()=>s("div",{class:"w-[70%] hidden lg:flex justify-start items-center"},"Pcbacks",-1)),Kt={class:"w-full lg:w-[30%] min-w-7 flex justify-center lg:justify-end items-center sm:pr-1"},Jt=d(()=>s("div",{class:"w-[70%] hidden lg:flex justify-start items-center"},"Pstyles",-1)),Qt={class:"w-full lg:w-[30%] min-w-7 flex justify-center lg:justify-end items-center sm:pr-1"},Ut=d(()=>s("div",{class:"w-[70%] hidden lg:flex justify-start items-center"},"Gifs",-1)),te={class:"w-full h-full min-h-max py-4 sm:py-6"},ee={key:0,class:"w-full"},se=d(()=>s("div",{class:"text-2xl px-4"},"Inicio",-1)),ie={class:"w-full"},ne=d(()=>s("div",{class:"text-justify px-4"},"Este espace es creado como caleria , para mostrar y ofrecer diseños como xatspaces, xatframes, Repros, Fondos, Pcbacks, Pstyles, Gifs, entre otros.",-1)),re={class:"flex justify-center items-center w-full"},ae={class:"relative w-full h-full"},le=["src"],oe={class:"absolute bottom-4 left-6 space-y-1 sm:space-y-2"},de={class:"text-lg sm:text-3xl"},ce=["onClick"],he=d(()=>s("div",null,"Ver Galeria",-1)),ue=g('<div class="text-center flex justify-center items-center p-1 pt-8" data-v-9f72754e><div class="relative flex justify-center items-center p-1" data-v-9f72754e><div class="-mr-2 w-36 aspect-[1/1] z-10" data-v-9f72754e><img src="https://xatimg.com/image/OtDpZKptSVTd.jpg" class="animate__animated animate__rotateIn w-full h-full rounded-full shadow-lg shadow-gray-700 border-[6px] border-indigo-300/70" data-v-9f72754e></div><div class="-ml-2 block text-start border-y border-r border-indigo-300/70 pl-7 pr-4 p-3 rounded-r-xl bg-indigo-800/25 animate__animated animate__rotateInDownLeft animate__delay-[500ms]" data-v-9f72754e><div class="text-2xl" data-v-9f72754e>PrimoDesign</div><div class="text-sm" data-v-9f72754e>(1497539991)</div><div class="text-xs text-white/80" data-v-9f72754e>Diseñador</div></div></div></div>',1),pe={key:1},ve=d(()=>s("div",{class:"text-2xl px-4"},"Xatspaces",-1)),fe={key:2},me=d(()=>s("div",{class:"text-2xl px-4"},"Xatframes",-1)),xe={key:3},ge=d(()=>s("div",{class:"text-2xl px-4"},"Repros",-1)),_e={key:4},we=d(()=>s("div",{class:"text-2xl px-4"},"Fondos",-1)),ye={key:5},be=d(()=>s("div",{class:"text-2xl px-4"},"Pcbacks",-1)),Ie={key:6},Se=d(()=>s("div",{class:"text-2xl px-4"},"Pstyles",-1)),$e={key:7},Me=d(()=>s("div",{class:"text-2xl px-4"},"Gifs",-1)),Ce={__name:"Index",setup(t){const e=j(0),i=[{title:"Xatspaces",src:"https://i.pinimg.com/originals/a5/55/c1/a555c1672583ddfdab2699aeca5ae357.gif"},{title:"XatFrames",src:"https://i.gifer.com/ILoL.gif"},{title:"Repros",src:"https://i.gifer.com/4bo8.gif"},{title:"Fondos",src:"https://i.gifer.com/6D.gif"},{title:"PcBacks",src:"https://i.gifer.com/xK.gif"},{title:"Pstyles",src:"https://i.gifer.com/Ax74.gif"},{title:"Gifs",src:"https://i.gifer.com/75ku.gif"}];return(c,n)=>(r(),a("div",Nt,[(r(),a("div",Ot,[s("div",Zt,[At,s("div",Dt,[s("button",{onClick:n[0]||(n[0]=l=>e.value=0),class:u(["w-[42px] sm:w-full py-1 sm:py-2 inline-flex sm:flex rounded-t-lg sm:rounded-lg transition-all justify-center",e.value==0?"bg-gray-200/30":""])},[s("div",Xt,[o(h(W),{class:"h-6 w-6"})]),Bt],2),s("button",{onClick:n[1]||(n[1]=l=>e.value=1),class:u(["w-[42px] sm:w-full py-1 sm:py-2 inline-flex sm:flex rounded-t-lg sm:rounded-lg transition-all justify-center",e.value==1?"bg-gray-200/30":""])},[s("div",Et,[o(h(Q),{class:"h-6 w-6"})]),Ft],2),s("button",{onClick:n[2]||(n[2]=l=>e.value=2),class:u(["w-[42px] sm:w-full py-1 sm:py-2 sm:flex rounded-t-lg sm:rounded-lg transition-all justify-center",e.value==2?"bg-gray-200/30":""])},[s("div",Vt,[o(h(K),{class:"h-6 w-6"})]),zt],2),s("button",{onClick:n[3]||(n[3]=l=>e.value=3),class:u(["w-[42px] sm:w-full py-1 sm:py-2 sm:flex rounded-t-lg sm:rounded-lg transition-all justify-center",e.value==3?"bg-gray-200/30":""])},[s("div",Tt,[o(h(G),{class:"h-6 w-6"})]),Yt],2),s("button",{onClick:n[4]||(n[4]=l=>e.value=4),class:u(["w-[42px] sm:w-full py-1 sm:py-2 sm:flex rounded-t-lg sm:rounded-lg transition-all justify-center",e.value==4?"bg-gray-200/30":""])},[s("div",Wt,[o(h(R),{class:"h-6 w-6"})]),Gt],2),s("button",{onClick:n[5]||(n[5]=l=>e.value=5),class:u(["w-[42px] sm:w-full py-1 sm:py-2 sm:flex rounded-t-lg sm:rounded-lg transition-all justify-center",e.value==5?"bg-gray-200/30":""])},[s("div",Rt,[o(h(J),{class:"h-6 w-6"})]),qt],2),s("button",{onClick:n[6]||(n[6]=l=>e.value=6),class:u(["w-[42px] sm:w-full py-1 sm:py-2 sm:flex rounded-t-lg sm:rounded-lg transition-all justify-center",e.value==6?"bg-gray-200/30":""])},[s("div",Kt,[o(h(q),{class:"h-6 w-6"})]),Jt],2),s("button",{onClick:n[7]||(n[7]=l=>e.value=7),class:u(["w-[42px] sm:w-full py-1 sm:py-2 sm:flex rounded-t-lg sm:rounded-lg transition-all justify-center",e.value==7?"bg-gray-200/30":""])},[s("div",Qt,[o(h(Y),{class:"h-6 w-6"})]),Ut],2)])]),s("div",te,[e.value==0?(r(),a("div",ee,[se,s("div",ie,[ne,s("div",re,[o(h(T),{display:5,perspective:10,width:500,height:250,"inverse-scaling":50,loop:!0,clickable:!0,autoplay:!0,autoplayTimeout:5e3,border:0,"controls-visible":!1,autoplayHoverPause:!0},{default:b(()=>[(r(),a(S,null,$(i,(l,p)=>o(h(O),{key:p,index:p,class:"!rounded-lg !bg-transparent cursor-grab bg-red-500"},{default:b(()=>[s("div",ae,[s("img",{src:l.src,class:"rounded-lg sm:rounded-3xl border-t border-r border-indigo-200/50 object-cover object-center w-full h-full"},null,8,le),s("div",oe,[s("div",de,L(l.title),1),s("div",null,[s("button",{onClick:w=>e.value=p+1,class:"flex justify-end space-x-1 sm:space-x-2 items-center rounded-lg sm:rounded-2xl sm:font-light px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-base uppercase bg-white/30 hover:bg-white/100 hover:text-indigo-900 transition-all"},[he,o(h(U),{class:"h-6 w-6"})],8,ce)])])])]),_:2},1032,["index"])),64))]),_:1})]),ue])])):v("",!0),e.value==1?(r(),a("div",pe,[ve,s("div",null,[o(Pt)])])):v("",!0),e.value==2?(r(),a("div",fe,[me,s("div",null,[o(It)])])):v("",!0),e.value==3?(r(),a("div",xe,[ge,s("div",null,[o(_t)])])):v("",!0),e.value==4?(r(),a("div",_e,[we,s("div",null,[o(it)])])):v("",!0),e.value==5?(r(),a("div",ye,[be,s("div",null,[o(ht)])])):v("",!0),e.value==6?(r(),a("div",Ie,[Se,s("div",null,[o(ft)])])):v("",!0),e.value==7?(r(),a("div",$e,[Me,s("div",null,[o(lt)])])):v("",!0)])]))]))}},ke=f(Ce,[["__scopeId","data-v-9f72754e"]]);export{ke as default};
