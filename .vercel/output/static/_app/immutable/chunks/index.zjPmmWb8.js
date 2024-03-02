var Y=Object.defineProperty;var Z=(t,e,n)=>e in t?Y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var R=(t,e,n)=>(Z(t,typeof e!="symbol"?e+"":e,n),n);import{n as x,r as v,j as D,k as E,l as q,m as H,p as tt,q as et,v as nt,w as it,x as O,y as rt,z as st,A as at}from"./scheduler.DncWI_c9.js";const I=typeof window<"u";let M=I?()=>window.performance.now():()=>Date.now(),B=I?t=>requestAnimationFrame(t):x;const g=new Set;function F(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&B(F)}function L(t){let e;return g.size===0&&B(F),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let k=!1;function lt(){k=!0}function ot(){k=!1}function ct(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function ft(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const a=[];for(let l=0;l<e.length;l++){const u=e[l];u.claim_order!==void 0&&a.push(u)}e=a}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let a=0;a<e.length;a++){const l=e[a].claim_order,u=(i>0&&e[n[i]].claim_order<=l?i+1:ct(1,i,_=>e[n[_]].claim_order,l))-1;r[a]=n[u]+1;const f=u+1;n[f]=a,i=Math.max(f,i)}const o=[],s=[];let c=e.length-1;for(let a=n[i]+1;a!=0;a=r[a-1]){for(o.push(e[a-1]);c>=a;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);o.reverse(),s.sort((a,l)=>a.claim_order-l.claim_order);for(let a=0,l=0;a<s.length;a++){for(;l<o.length&&s[a].claim_order>=o[l].claim_order;)l++;const u=l<o.length?o[l]:null;t.insertBefore(s[a],u)}}function ut(t,e){t.appendChild(e)}function G(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function _t(t){const e=V("style");return e.textContent="/* empty */",dt(G(t),e),e.sheet}function dt(t,e){return ut(t.head||t,e),e.sheet}function mt(t,e){if(k){for(ft(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function jt(t,e,n){k&&!n?mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function U(t){t.parentNode&&t.parentNode.removeChild(t)}function Rt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function V(t){return document.createElement(t)}function ht(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function Tt(){return P(" ")}function Bt(){return P("")}function pt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Pt(t,e){for(const n in e)pt(t,n,e[n])}function zt(t){return t.dataset.svelteH}function $t(t){return Array.from(t.childNodes)}function yt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,r,i=!1){yt(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const a=n(c);return a===void 0?t.splice(s,1):t[s]=a,i||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const a=n(c);return a===void 0?t.splice(s,1):t[s]=a,i?a===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function J(t,e,n,r){return W(t,i=>i.nodeName===e,i=>{const o=[];for(let s=0;s<i.attributes.length;s++){const c=i.attributes[s];n[c.name]||o.push(c.name)}o.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Ht(t,e,n){return J(t,e,n,V)}function Ot(t,e,n){return J(t,e,n,ht)}function gt(t,e){return W(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>P(e),!0)}function qt(t){return gt(t," ")}function It(t,e){e=""+e,t.data!==e&&(t.data=e)}function Mt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Ft(t,e,n){t.classList.toggle(e,!!n)}function xt(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Lt(t,e){const n=[];let r=0;for(const i of e.childNodes)if(i.nodeType===8){const o=i.textContent.trim();o===`HEAD_${t}_END`?(r-=1,n.push(i)):o===`HEAD_${t}_START`&&(r+=1,n.push(i))}else r>0&&n.push(i);return n}function Gt(t,e){return new t(e)}const b=new Map;let S=0;function wt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function vt(t,e){const n={stylesheet:_t(e),rules:{}};return b.set(t,n),n}function K(t,e,n,r,i,o,s,c=0){const a=16.666/r;let l=`{
`;for(let $=0;$<=1;$+=a){const p=e+(n-e)*o($);l+=$*100+`%{${s(p,1-p)}}
`}const u=l+`100% {${s(n,1-n)}}
}`,f=`__svelte_${wt(u)}_${c}`,_=G(t),{stylesheet:d,rules:m}=b.get(_)||vt(_,t);m[f]||(m[f]=!0,d.insertRule(`@keyframes ${f} ${u}`,d.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${i}ms 1 both`,S+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),S-=i,S||Nt())}function Nt(){B(()=>{S||(b.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&U(e)}),b.clear())})}let w;function Q(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function C(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const A=new Set;let y;function Ut(){y={r:0,c:[],p:y}}function Vt(){y.r||v(y.c),y=y.p}function At(t,e){t&&t.i&&(A.delete(t),t.i(e))}function Wt(t,e,n,r){if(t&&t.o){if(A.has(t))return;A.add(t),y.c.push(()=>{A.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const X={duration:0};function Jt(t,e,n){const r={direction:"in"};let i=e(t,n,r),o=!1,s,c,a=0;function l(){s&&T(t,s)}function u(){const{delay:_=0,duration:d=300,easing:m=q,tick:h=x,css:$}=i||X;$&&(s=K(t,0,1,d,_,m,$,a++)),h(0,1);const p=M()+_,N=p+d;c&&c.abort(),o=!0,E(()=>C(t,!0,"start")),c=L(j=>{if(o){if(j>=N)return h(1,0),C(t,!0,"end"),l(),o=!1;if(j>=p){const z=m((j-p)/d);h(z,1-z)}}return o})}let f=!1;return{start(){f||(f=!0,T(t),D(i)?(i=i(r),Q().then(u)):u())},invalidate(){f=!1},end(){o&&(l(),o=!1)}}}function Kt(t,e,n){const r={direction:"out"};let i=e(t,n,r),o=!0,s;const c=y;c.r+=1;let a;function l(){const{delay:u=0,duration:f=300,easing:_=q,tick:d=x,css:m}=i||X;m&&(s=K(t,1,0,f,u,_,m));const h=M()+u,$=h+f;E(()=>C(t,!1,"start")),"inert"in t&&(a=t.inert,t.inert=!0),L(p=>{if(o){if(p>=$)return d(0,1),C(t,!1,"end"),--c.r||v(c.c),!1;if(p>=h){const N=_((p-h)/f);d(1-N,N)}}return o})}return D(i)?Q().then(()=>{i=i(r),l()}):l(),{end(u){u&&"inert"in t&&(t.inert=a),u&&i.tick&&i.tick(1,0),o&&(s&&T(t,s),o=!1)}}}function Qt(t){t&&t.c()}function Xt(t,e){t&&t.l(e)}function Et(t,e,n){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),E(()=>{const o=t.$$.on_mount.map(rt).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),i.forEach(E)}function bt(t,e){const n=t.$$;n.fragment!==null&&(nt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function St(t,e){t.$$.dirty[0]===-1&&(st.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,r,i,o,s=null,c=[-1]){const a=it;O(t);const l=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:i,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:H(),dirty:c,skip_bound:!1,root:e.target||a.$$.root};s&&s(l.root);let u=!1;if(l.ctx=n?n(t,e.props||{},(f,_,...d)=>{const m=d.length?d[0]:_;return l.ctx&&i(l.ctx[f],l.ctx[f]=m)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](m),u&&St(t,f)),_}):[],l.update(),u=!0,v(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){lt();const f=$t(e.target);l.fragment&&l.fragment.l(f),f.forEach(U)}else l.fragment&&l.fragment.c();e.intro&&At(t.$$.fragment),Et(t,e.target,e.anchor),ot(),tt()}O(a)}class Zt{constructor(){R(this,"$$");R(this,"$$set")}$destroy(){bt(this,1),this.$destroy=x}$on(e,n){if(!D(n))return x;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!et(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ct);export{Vt as A,Mt as B,Ut as C,Gt as D,Ft as E,Jt as F,Kt as G,Zt as S,pt as a,mt as b,Ht as c,U as d,V as e,Qt as f,Xt as g,Lt as h,Yt as i,Wt as j,bt as k,P as l,Et as m,$t as n,qt as o,gt as p,jt as q,It as r,Tt as s,At as t,zt as u,ht as v,Bt as w,Ot as x,Pt as y,Rt as z};
