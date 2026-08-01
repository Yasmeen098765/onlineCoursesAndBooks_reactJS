import{g as e,u as t,x as n}from"./index-BrNujwly.js";import{A as r,B as i,D as a,I as o,S as s,V as c,f as l,m as u,n as d,r as f,u as p,w as m,z as h}from"./createSimplePaletteValueFilter-Bm4QV5vI.js";import{a as g,r as _}from"./prop-types-COj69xoO.js";function v(e){try{return e.matches(`:focus-visible`)}catch{}return!1}var y=n(e(),1);function b(e){let{focusableWhenDisabled:t,disabled:n,composite:r=!1,tabIndex:i=0,isNativeButton:a}=e,o=r&&t!==!1,s=r&&t===!1;return y.useMemo(()=>{let e={onKeyDown(e){n&&t&&e.key!==`Tab`&&e.preventDefault()}};return r||(e.tabIndex=i,!a&&n&&(e.tabIndex=t?i:-1)),(a&&(t||o)||!a&&n)&&(e[`aria-disabled`]=n),a&&(!t||s)&&(e.disabled=n),e},[r,n,t,o,s,a,i])}var x={};function S(e){let{nativeButton:t,nativeButtonProp:n,internalNativeButton:r=t,allowInferredHostMismatch:i=!1,disabled:a,type:o,hasFormAction:s=!1,tabIndex:c=0,focusableWhenDisabled:l,stopEventPropagation:u=!1,onBeforeKeyDown:d,onBeforeKeyUp:f}=e,p=y.useRef(null),m=l===!0,h=b({focusableWhenDisabled:m,disabled:a,isNativeButton:t,tabIndex:c}),g=y.useCallback(()=>{let e=p.current;return e==null?t:e.tagName===`BUTTON`?!0:!!(e.tagName===`A`&&e.href)},[t]),_=y.useMemo(()=>{let e=m?{}:{tabIndex:a?-1:c};return t?(e.type=o===void 0&&!s?`button`:o,m||(e.disabled=a)):(e.role=`button`,!m&&a&&(e[`aria-disabled`]=a)),m?{...e,...h}:e},[a,m,h,s,t,c,o]);return{getButtonProps:y.useCallback((e=x)=>{let{onClick:t,onKeyDown:n,onKeyUp:r,...i}=e,o=e=>{if(u&&e.stopPropagation(),a){e.preventDefault();return}t?.(e)},s=e=>{if(m&&h.onKeyDown(e),!a&&(d?.(e),n?.(e),!(e.target!==e.currentTarget||g()))){if(e.key===` `){e.preventDefault();return}e.key===`Enter`&&(e.preventDefault(),e.currentTarget.click())}},c=e=>{a||(f?.(e),r?.(e),e.target===e.currentTarget&&!g()&&e.key===` `&&!e.defaultPrevented&&e.currentTarget.click())};return{..._,...i,onClick:o,onKeyDown:s,onKeyUp:c}},[_,a,m,h,g,d,f,u]),rootRef:p}}var C=class e{static create(){return new e}static use(){let t=l(e.create).current,[n,r]=y.useState(!1);return t.shouldMount=n,t.setShouldMount=r,y.useEffect(t.mountEffect,[n]),t}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=T(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())};start(...e){this.mount().then(()=>this.ref.current?.start(...e))}stop(...e){this.mount().then(()=>this.ref.current?.stop(...e))}pulsate(...e){this.mount().then(()=>this.ref.current?.pulsate(...e))}};function w(){return C.use()}function T(){let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n}var E=t();function D(e){let{className:t,classes:n,pulsate:r=!1,rippleX:i,rippleY:a,rippleSize:o,in:s,onExited:l,timeout:u}=e,[f,p]=y.useState(!1),m=d(),h=y.useRef(!1),g=y.useRef(l);g.current=l;let _=l!=null,v=c(t,n.ripple,n.rippleVisible,r&&n.ripplePulsate),b={width:o,height:o,top:-(o/2)+a,left:-(o/2)+i},x=c(n.child,f&&n.childLeaving,r&&n.childPulsate);return!s&&!f&&p(!0),y.useEffect(()=>{!s&&_?h.current||(h.current=!0,m.start(u,()=>{h.current=!1,g.current?.()})):(h.current=!1,m.clear())},[m,_,s,u]),(0,E.jsx)(`span`,{className:v,style:b,children:(0,E.jsx)(`span`,{className:x})})}var O=h(`MuiTouchRipple`,[`root`,`ripple`,`rippleVisible`,`ripplePulsate`,`child`,`childLeaving`,`childPulsate`]),k=550,A={},j=[],M=()=>{};function N(e,t){let n=new Set(t),r=new Map,i=[];for(let t of e)n.has(t)?i.length>0&&(r.set(t,i),i=[]):i.push(t);let a=[];for(let e of t){let t=r.get(e);t&&a.push(...t),a.push(e)}return a.push(...i),a}function P({event:e,element:t,center:n}){let r=t?t.getBoundingClientRect():{width:0,height:0,left:0,top:0},i,a;if(n||e===void 0||e.clientX===0&&e.clientY===0||!e.clientX&&!e.touches)i=Math.round(r.width/2),a=Math.round(r.height/2);else{let{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;i=Math.round(t-r.left),a=Math.round(n-r.top)}let o;if(n)o=Math.sqrt((2*r.width**2+r.height**2)/3),o%2==0&&(o+=1);else{let e=Math.max(Math.abs((t?t.clientWidth:0)-i),i)*2+2,n=Math.max(Math.abs((t?t.clientHeight:0)-a),a)*2+2;o=Math.sqrt(e**2+n**2)}return{rippleX:i,rippleY:a,rippleSize:o}}var F=g`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,I=g`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,L=g`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`;function R(e){if(e.motion.reducedMotion===`always`)return null;let t=_`
    &.${O.rippleVisible} {
      animation-name: ${F};
      animation-duration: ${k}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    &.${O.ripplePulsate} {
      animation-duration: ${e.transitions.duration.shorter}ms;
    }

    & .${O.childLeaving} {
      animation-name: ${I};
      animation-duration: ${k}ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
    }

    & .${O.childPulsate} {
      animation-name: ${L};
      animation-duration: 2500ms;
      animation-timing-function: ${e.transitions.easing.easeInOut};
      animation-iteration-count: infinite;
      animation-delay: 200ms;
    }
  `;return e.motion.reducedMotion===`system`?_`
      @media (prefers-reduced-motion: no-preference) {
        ${t}
      }
    `:t}var z=a(`span`,{name:`MuiTouchRipple`,slot:`Root`})({overflow:`hidden`,pointerEvents:`none`,position:`absolute`,zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:`inherit`}),B=a(D,{name:`MuiTouchRipple`,slot:`Ripple`})`
  opacity: 0;
  position: absolute;

  &.${O.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
  }

  /*
   * Order matters: 'child', 'childLeaving' and 'childPulsate' apply to the same
   * element with equal specificity, so the later rule wins. 'child' must come
   * before 'childLeaving' so the leaving 'opacity: 0' takes precedence. A focus
   * (pulsate) ripple keeps 'pulsateKeyframe' (no opacity animation) on exit, so
   * it relies on this static 'opacity: 0' to disappear on blur instead of
   * lingering until removal.
   */
  & .${O.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${O.childLeaving} {
    opacity: 0;
  }

  & .${O.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
  }

  ${({theme:e})=>R(e)}
`,ee=y.forwardRef(function(e,t){let n=m({props:e,name:`MuiTouchRipple`}),i=p(r().motion.reducedMotion,!1),{center:a=!1,classes:o=A,className:s,...l}=n,[h,g]=y.useState({items:j,order:j}),_=h.items,v=y.useRef(0),b=y.useRef(null),x=y.useRef(!1);f(()=>(x.current=!0,()=>{x.current=!1})),y.useEffect(()=>{b.current&&=(b.current(),null)},[_]);let S=y.useRef(!1),C=d(),w=y.useRef(null),T=y.useRef(null),D=u(e=>{x.current&&g(t=>{let n=t.items.filter(t=>t.key!==e);return{items:n,order:N(t.order.filter(t=>t!==e),n.filter(e=>!e.exiting).map(e=>e.key))}})}),F=u(e=>{let{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e,o=v.current;v.current+=1,g(e=>{let a=[...e.items,{key:o,pulsate:t,rippleX:n,rippleY:r,rippleSize:i,exiting:!1}];return{items:a,order:N(e.order,a.filter(e=>!e.exiting).map(e=>e.key))}}),b.current=a}),I=u((e=A,t=A,n=M)=>{let{pulsate:r=!1,center:i=a||t.pulsate,fakeElement:o=!1}=t;if(e?.type===`mousedown`&&S.current){S.current=!1;return}e?.type===`touchstart`&&(S.current=!0);let{rippleX:s,rippleY:c,rippleSize:l}=P({event:e,element:o?null:T.current,center:i});e?.touches?w.current===null&&(w.current=()=>{F({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})},C.start(80,()=>{w.current&&=(w.current(),null)})):F({pulsate:r,rippleX:s,rippleY:c,rippleSize:l,cb:n})}),L=u(()=>{I(A,{pulsate:!0})}),R=u((e,t)=>{if(C.clear(),e?.type===`touchend`&&w.current){w.current(),w.current=null,C.start(0,()=>{R(e,t)});return}w.current=null,g(e=>{let t=e.items.findIndex(e=>!e.exiting);if(t===-1)return e;let n=e.items.slice();return n[t]={...n[t],exiting:!0},{items:n,order:N(e.order,n.filter(e=>!e.exiting).map(e=>e.key))}}),b.current=t});y.useImperativeHandle(t,()=>({pulsate:L,start:I,stop:R}),[L,I,R]);let ee=new Map(_.map(e=>[e.key,e])),V=h.order.map(e=>ee.get(e)).filter(Boolean);return(0,E.jsx)(z,{className:c(O.root,o.root,s),ref:T,...l,children:V.map(e=>(0,E.jsx)(B,{classes:{ripple:c(o.ripple,O.ripple),rippleVisible:c(o.rippleVisible,O.rippleVisible),ripplePulsate:c(o.ripplePulsate,O.ripplePulsate),child:c(o.child,O.child),childLeaving:c(o.childLeaving,O.childLeaving),childPulsate:c(o.childPulsate,O.childPulsate)},timeout:i.shouldReduceMotion?0:k,pulsate:e.pulsate,rippleX:e.rippleX,rippleY:e.rippleY,rippleSize:e.rippleSize,in:!e.exiting,onExited:()=>D(e.key)},e.key))})});function V(e){return i(`MuiButtonBase`,e)}var H=h(`MuiButtonBase`,[`root`,`disabled`,`focusVisible`]),te=e=>{let{disabled:t,focusVisible:n,focusVisibleClassName:r,suppressFocusVisible:i,classes:a}=e,s=o({root:[`root`,t&&`disabled`,n&&!i&&`focusVisible`]},V,a);return n&&!i&&r&&(s.root+=` ${r}`),s},ne=a(`button`,{name:`MuiButtonBase`,slot:`Root`})({display:`inline-flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,boxSizing:`border-box`,WebkitTapHighlightColor:`transparent`,backgroundColor:`transparent`,outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:`pointer`,userSelect:`none`,verticalAlign:`middle`,MozAppearance:`none`,WebkitAppearance:`none`,textDecoration:`none`,color:`inherit`,"&::-moz-focus-inner":{borderStyle:`none`},[`&.${H.disabled}`]:{pointerEvents:`none`,cursor:`default`},"@media print":{colorAdjust:`exact`}}),U=y.forwardRef(function(e,t){let n=m({props:e,name:`MuiButtonBase`}),{action:r,centerRipple:i=!1,children:a,className:o,component:l=`button`,disabled:d=!1,disableRipple:f=!1,disableTouchRipple:p=!1,focusRipple:h=!1,focusVisibleClassName:g,focusableWhenDisabled:_,suppressFocusVisible:b=!1,internalNativeButton:x,LinkComponent:C=`a`,nativeButton:T,onBlur:D,onClick:O,onContextMenu:k,onDragLeave:A,onFocus:j,onFocusVisible:M,onKeyDown:N,onKeyUp:P,onMouseDown:F,onMouseLeave:I,onMouseUp:L,onTouchEnd:R,onTouchMove:z,onTouchStart:B,tabIndex:V=0,TouchRippleProps:H,touchRippleRef:U,type:re,...G}=n,K=!!(G.href||G.to),ie=!!G.formAction,q=l;q===`button`&&K&&(q=C);let J=typeof q==`string`?q===`button`:x??!1,ae=T??J,Y=w(),oe=s(Y.ref,U),[X,Z]=y.useState(!1);(d||b)&&X&&Z(!1);let se=u(e=>{h&&!e.repeat&&X&&e.key===` `&&Y.stop(e,()=>{Y.start(e)})}),ce=u(e=>{h&&e.key===` `&&X&&!e.defaultPrevented&&Y.stop(e,()=>{Y.pulsate(e)})}),{getButtonProps:le,rootRef:Q}=S({nativeButton:ae,nativeButtonProp:T,internalNativeButton:J,allowInferredHostMismatch:K||typeof q==`string`,disabled:d,type:re,hasFormAction:ie,tabIndex:V,onBeforeKeyDown:se,onBeforeKeyUp:ce}),{onClick:ue,onKeyDown:de,onKeyUp:fe,...pe}=le({onClick:O,onKeyDown:N,onKeyUp:P});y.useImperativeHandle(r,()=>({focusVisible:()=>{Z(!0),Q.current.focus()}}),[Q]);let me=Y.shouldMount&&!f&&!d;y.useEffect(()=>{X&&h&&!f&&Y.pulsate()},[f,h,X,Y]);let he=W(Y,`start`,F,p),ge=W(Y,`stop`,k,p),_e=W(Y,`stop`,A,p),ve=W(Y,`stop`,L,p),ye=W(Y,`stop`,e=>{X&&e.preventDefault(),I&&I(e)},p),be=W(Y,`start`,B,p),xe=W(Y,`stop`,R,p),Se=W(Y,`stop`,z,p),Ce=W(Y,`stop`,e=>{v(e.target)||Z(!1),D&&D(e)},!1),we=u(e=>{Q.current||=e.currentTarget,!b&&v(e.target)&&(Z(!0),M&&M(e)),j&&j(e)}),$={};K&&($.tabIndex=d?-1:V,d&&($[`aria-disabled`]=d),$.type=re);let Te=s(t,Q),Ee={...n,centerRipple:i,component:l,disabled:d,disableRipple:f,disableTouchRipple:p,focusRipple:h,suppressFocusVisible:b,tabIndex:V,focusVisible:X},De=te(Ee);return(0,E.jsxs)(ne,{as:q,className:c(De.root,o),ownerState:Ee,onBlur:Ce,onClick:ue,onContextMenu:ge,onFocus:we,onKeyDown:de,onKeyUp:fe,onMouseDown:he,onMouseLeave:ye,onMouseUp:ve,onDragLeave:_e,onTouchEnd:xe,onTouchMove:Se,onTouchStart:be,ref:Te,...K?$:pe,...G,children:[a,me?(0,E.jsx)(ee,{ref:oe,center:i,...H}):null]})});function W(e,t,n,r=!1){return u(i=>(n&&n(i),r||e[t](i),!0))}export{U as t};