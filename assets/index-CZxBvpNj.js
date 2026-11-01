const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunk-BsNQe3qd.js","./chunk-j6OW_3Rk.js","./chunk-BJv5DdM8.js","./chunk-CPCdlX-g.js","./chunk-F_idWiMR.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Qx="modulepreload",ey=function(r,e){return new URL(r,e).href},Rm={},to=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(u){return Promise.all(u.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=a?.nonce||a?.getAttribute("nonce");i=c(t.map(u=>{if(u=ey(u,n),u in Rm)return;Rm[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!n)for(let _=o.length-1;_>=0;_--){const g=o[_];if(g.href===u&&(!h||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":Qx,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((_,g)=>{m.addEventListener("load",_),m.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mp="180",ty=0,Cm=1,ny=2,n0=1,i0=2,Pr=3,$r=0,Un=1,hn=2,kr=0,ta=1,Gl=2,Pm=3,Lm=4,iy=5,Js=100,ry=101,sy=102,oy=103,ay=104,ly=200,cy=201,uy=202,hy=203,If=204,Nf=205,fy=206,dy=207,py=208,my=209,gy=210,_y=211,vy=212,xy=213,yy=214,Uf=0,Of=1,Ff=2,ga=3,Bf=4,kf=5,zf=6,Hf=7,gp=0,Sy=1,My=2,ys=0,r0=1,s0=2,o0=3,_p=4,a0=5,l0=6,c0=7,Dm="attached",Ty="detached",u0=300,_a=301,va=302,Vf=303,Gf=304,oh=306,xa=1e3,cs=1001,Bu=1002,Jn=1003,h0=1004,ol=1005,Si=1006,pu=1007,Ur=1008,xr=1009,f0=1010,d0=1011,Wl=1012,vp=1013,po=1014,Ji=1015,Zi=1016,xp=1017,yp=1018,Xl=1020,p0=35902,m0=35899,g0=1021,_0=1022,ki=1023,Yl=1026,ql=1027,Sp=1028,Mp=1029,v0=1030,Tp=1031,Ep=1033,mu=33776,gu=33777,_u=33778,vu=33779,Wf=35840,Xf=35841,Yf=35842,qf=35843,$f=36196,jf=37492,Kf=37496,Jf=37808,Zf=37809,Qf=37810,ed=37811,td=37812,nd=37813,id=37814,rd=37815,sd=37816,od=37817,ad=37818,ld=37819,cd=37820,ud=37821,hd=36492,fd=36494,dd=36495,pd=36283,md=36284,gd=36285,_d=36286,$l=2300,jl=2301,bh=2302,Im=2400,Nm=2401,Um=2402,Ey=2500,by=0,x0=1,vd=2,wy=3200,Ay=3201,bp=0,Ry=1,ls="",Jt="srgb",Fn="srgb-linear",ku="linear",wt="srgb",Eo=7680,Om=519,Cy=512,Py=513,Ly=514,y0=515,Dy=516,Iy=517,Ny=518,Uy=519,xd=35044,Fm="300 es",cr=2e3,zu=2001;class Oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bm=1234567;const vl=Math.PI/180,ya=180/Math.PI;function Vi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[n&255]+wn[n>>8&255]+wn[n>>16&255]+wn[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function wp(r,e){return(r%e+e)%e}function Oy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Fy(r,e,t){return r!==e?(t-r)/(e-r):0}function xl(r,e,t){return(1-t)*r+t*e}function By(r,e,t,n){return xl(r,e,1-Math.exp(-t*n))}function ky(r,e=1){return e-Math.abs(wp(r,e*2)-e)}function zy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Hy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Vy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Gy(r,e){return r+Math.random()*(e-r)}function Wy(r){return r*(.5-Math.random())}function Xy(r){r!==void 0&&(Bm=r);let e=Bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Yy(r){return r*vl}function qy(r){return r*ya}function $y(r){return(r&r-1)===0&&r!==0}function jy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ky(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Jy(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*u,l*h,l*f,a*c);break;case"YZY":r.set(l*f,a*u,l*h,a*c);break;case"ZXZ":r.set(l*h,l*f,a*u,a*c);break;case"XZX":r.set(a*u,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*u,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const vt={DEG2RAD:vl,RAD2DEG:ya,generateUUID:Vi,clamp:ct,euclideanModulo:wp,mapLinear:Oy,inverseLerp:Fy,lerp:xl,damp:By,pingpong:ky,smoothstep:zy,smootherstep:Hy,randInt:Vy,randFloat:Gy,randFloatSpread:Wy,seededRandom:Xy,degToRad:Yy,radToDeg:qy,isPowerOfTwo:$y,ceilPowerOfTwo:jy,floorPowerOfTwo:Ky,setQuaternionFromProperEuler:Jy,normalize:At,denormalize:Ki};class se{constructor(e=0,t=0){se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ps{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[o+0],d=s[o+1],m=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(h!==_||l!==f||c!==d||u!==m){let g=1-a;const p=l*f+c*d+u*m+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),E=Math.atan2(S,p*x);g=Math.sin(g*E)/S,a=Math.sin(a*E)/S}const v=a*x;if(l=l*g+f*v,c=c*g+d*v,u=u*g+m*v,h=h*g+_*v,g===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*h+l*d-c*f,e[t+1]=l*m+u*f+c*h-a*d,e[t+2]=c*m+u*d+a*f-l*h,e[t+3]=u*m-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(km.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new N,km=new Ps;class st{constructor(e,t,n,i,s,o,a,l,c){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],_=i[0],g=i[3],p=i[6],x=i[1],y=i[4],v=i[7],S=i[2],E=i[5],b=i[8];return s[0]=o*_+a*x+l*S,s[3]=o*g+a*y+l*E,s[6]=o*p+a*v+l*b,s[1]=c*_+u*x+h*S,s[4]=c*g+u*y+h*E,s[7]=c*p+u*v+h*b,s[2]=f*_+d*x+m*S,s[5]=f*g+d*y+m*E,s[8]=f*p+d*v+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=t*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ah=new st;function S0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Kl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zy(){const r=Kl("canvas");return r.style.display="block",r}const zm={};function Jl(r){r in zm||(zm[r]=!0,console.warn(r))}function Qy(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Hm=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eS(){const r={enabled:!0,workingColorSpace:Fn,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(i.r=zr(i.r),i.g=zr(i.g),i.b=zr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(i.r=na(i.r),i.g=na(i.g),i.b=na(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?ku:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Jl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Jl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Fn]:{primaries:e,whitePoint:n,transfer:ku,toXYZ:Hm,fromXYZ:Vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:wt,toXYZ:Hm,fromXYZ:Vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),r}const gt=eS();function zr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function na(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bo;class tS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{bo===void 0&&(bo=Kl("canvas")),bo.width=e.width,bo.height=e.height;const i=bo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=bo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=zr(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zr(t[n]/255)*255):t[n]=zr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nS=0;class Ap{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Rh(i[o].image)):s.push(Rh(i[o]))}else s=Rh(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Rh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?tS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iS=0;const Ch=new N;class dn extends Oa{constructor(e=dn.DEFAULT_IMAGE,t=dn.DEFAULT_MAPPING,n=cs,i=cs,s=Si,o=Ur,a=ki,l=xr,c=dn.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Vi(),this.name="",this.source=new Ap(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case cs:e.x=e.x<0?0:1;break;case Bu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case cs:e.y=e.y<0?0:1;break;case Bu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=u0;dn.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,i=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,S=(p+1)/2,E=(u+f)/4,b=(h+_)/4,C=(m+g)/4;return y>v&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=b/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=C/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=C/s),this.set(n,i,s,t),this}let x=Math.sqrt((g-m)*(g-m)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(g-m)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rS extends Oa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new dn(i);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Si,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ap(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends rS{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class M0 extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sS extends dn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=cs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Xi):Xi.fromBufferAttribute(s,o),Xi.applyMatrix4(e.matrixWorld),this.expandByPoint(Xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_c.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_c.copy(n.boundingBox)),_c.applyMatrix4(e.matrixWorld),this.union(_c)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xi),Xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),vc.subVectors(this.max,Ga),wo.subVectors(e.a,Ga),Ao.subVectors(e.b,Ga),Ro.subVectors(e.c,Ga),Jr.subVectors(Ao,wo),Zr.subVectors(Ro,Ao),Ns.subVectors(wo,Ro);let t=[0,-Jr.z,Jr.y,0,-Zr.z,Zr.y,0,-Ns.z,Ns.y,Jr.z,0,-Jr.x,Zr.z,0,-Zr.x,Ns.z,0,-Ns.x,-Jr.y,Jr.x,0,-Zr.y,Zr.x,0,-Ns.y,Ns.x,0];return!Ph(t,wo,Ao,Ro,vc)||(t=[1,0,0,0,1,0,0,0,1],!Ph(t,wo,Ao,Ro,vc))?!1:(xc.crossVectors(Jr,Zr),t=[xc.x,xc.y,xc.z],Ph(t,wo,Ao,Ro,vc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Er=[new N,new N,new N,new N,new N,new N,new N,new N],Xi=new N,_c=new er,wo=new N,Ao=new N,Ro=new N,Jr=new N,Zr=new N,Ns=new N,Ga=new N,vc=new N,xc=new N,Us=new N;function Ph(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Us.fromArray(r,s);const a=i.x*Math.abs(Us.x)+i.y*Math.abs(Us.y)+i.z*Math.abs(Us.z),l=e.dot(Us),c=t.dot(Us),u=n.dot(Us);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const oS=new er,Wa=new N,Lh=new N;class Mr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oS.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const t=Wa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Lh)),this.expandByPoint(Wa.copy(e.center).sub(Lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const br=new N,Dh=new N,yc=new N,Qr=new N,Ih=new N,Sc=new N,Nh=new N;class ah{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(br.copy(this.origin).addScaledVector(this.direction,t),br.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dh.copy(e).add(t).multiplyScalar(.5),yc.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Dh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(yc),a=Qr.dot(this.direction),l=-Qr.dot(yc),c=Qr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){const _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Dh).addScaledVector(yc,f),d}intersectSphere(e,t){br.subVectors(e.center,this.origin);const n=br.dot(this.direction),i=br.dot(br)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,br)!==null}intersectTriangle(e,t,n,i,s){Ih.subVectors(t,e),Sc.subVectors(n,e),Nh.crossVectors(Ih,Sc);let o=this.direction.dot(Nh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qr.subVectors(this.origin,e);const l=a*this.direction.dot(Sc.crossVectors(Qr,Sc));if(l<0)return null;const c=a*this.direction.dot(Ih.cross(Qr));if(c<0||l+c>o)return null;const u=-a*Qr.dot(Nh);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,g){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,g)}set(e,t,n,i,s,o,a,l,c,u,h,f,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Co.setFromMatrixColumn(e,0).length(),s=1/Co.setFromMatrixColumn(e,1).length(),o=1/Co.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,m=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,m=a*u,_=a*h;t[0]=l*u,t[4]=m*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=m*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+m,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-m,t[2]=m*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aS,e,lS)}lookAt(e,t,n){const i=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),es.crossVectors(n,ui),es.lengthSq()===0&&(Math.abs(n.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),es.crossVectors(n,ui)),es.normalize(),Mc.crossVectors(ui,es),i[0]=es.x,i[4]=Mc.x,i[8]=ui.x,i[1]=es.y,i[5]=Mc.y,i[9]=ui.y,i[2]=es.z,i[6]=Mc.z,i[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],_=n[6],g=n[10],p=n[14],x=n[3],y=n[7],v=n[11],S=n[15],E=i[0],b=i[4],C=i[8],M=i[12],T=i[1],P=i[5],D=i[9],B=i[13],k=i[2],W=i[6],H=i[10],Y=i[14],X=i[3],ne=i[7],U=i[11],pe=i[15];return s[0]=o*E+a*T+l*k+c*X,s[4]=o*b+a*P+l*W+c*ne,s[8]=o*C+a*D+l*H+c*U,s[12]=o*M+a*B+l*Y+c*pe,s[1]=u*E+h*T+f*k+d*X,s[5]=u*b+h*P+f*W+d*ne,s[9]=u*C+h*D+f*H+d*U,s[13]=u*M+h*B+f*Y+d*pe,s[2]=m*E+_*T+g*k+p*X,s[6]=m*b+_*P+g*W+p*ne,s[10]=m*C+_*D+g*H+p*U,s[14]=m*M+_*B+g*Y+p*pe,s[3]=x*E+y*T+v*k+S*X,s[7]=x*b+y*P+v*W+S*ne,s[11]=x*C+y*D+v*H+S*U,s[15]=x*M+y*B+v*Y+S*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+s*l*h-i*c*h-s*a*f+n*c*f+i*a*d-n*l*d)+_*(+t*l*d-t*c*f+s*o*f-i*o*d+i*c*u-s*l*u)+g*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],x=h*g*c-_*f*c+_*l*d-a*g*d-h*l*p+a*f*p,y=m*f*c-u*g*c-m*l*d+o*g*d+u*l*p-o*f*p,v=u*_*c-m*h*c+m*a*d-o*_*d-u*a*p+o*h*p,S=m*h*l-u*_*l-m*a*f+o*_*f+u*a*g-o*h*g,E=t*x+n*y+i*v+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=x*b,e[1]=(_*f*s-h*g*s-_*i*d+n*g*d+h*i*p-n*f*p)*b,e[2]=(a*g*s-_*l*s+_*i*c-n*g*c-a*i*p+n*l*p)*b,e[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*b,e[4]=y*b,e[5]=(u*g*s-m*f*s+m*i*d-t*g*d-u*i*p+t*f*p)*b,e[6]=(m*l*s-o*g*s-m*i*c+t*g*c+o*i*p-t*l*p)*b,e[7]=(o*f*s-u*l*s+u*i*c-t*f*c-o*i*d+t*l*d)*b,e[8]=v*b,e[9]=(m*h*s-u*_*s-m*n*d+t*_*d+u*n*p-t*h*p)*b,e[10]=(o*_*s-m*a*s+m*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*b,e[12]=S*b,e[13]=(u*_*i-m*h*i+m*n*f-t*_*f-u*n*g+t*h*g)*b,e[14]=(m*a*i-o*_*i-m*n*l+t*_*l+o*n*g-t*a*g)*b,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,_=o*u,g=o*h,p=a*h,x=l*c,y=l*u,v=l*h,S=n.x,E=n.y,b=n.z;return i[0]=(1-(_+p))*S,i[1]=(d+v)*S,i[2]=(m-y)*S,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+p))*E,i[6]=(g+x)*E,i[7]=0,i[8]=(m+y)*b,i[9]=(g-x)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Co.set(i[0],i[1],i[2]).length();const o=Co.set(i[4],i[5],i[6]).length(),a=Co.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yi.copy(this);const c=1/s,u=1/o,h=1/a;return Yi.elements[0]*=c,Yi.elements[1]*=c,Yi.elements[2]*=c,Yi.elements[4]*=u,Yi.elements[5]*=u,Yi.elements[6]*=u,Yi.elements[8]*=h,Yi.elements[9]*=h,Yi.elements[10]*=h,t.setFromRotationMatrix(Yi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=cr,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,_;if(l)m=s/(o-s),_=o*s/(o-s);else if(a===cr)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===zu)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=cr,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i);let m,_;if(l)m=1/(o-s),_=o/(o-s);else if(a===cr)m=-2/(o-s),_=-(o+s)/(o-s);else if(a===zu)m=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Co=new N,Yi=new Je,aS=new N(0,0,0),lS=new N(1,1,1),es=new N,Mc=new N,ui=new N,Gm=new Je,Wm=new Ps;class Qi{constructor(e=0,t=0,n=0,i=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class T0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cS=0;const Xm=new N,Po=new Ps,wr=new Je,Tc=new N,Xa=new N,uS=new N,hS=new Ps,Ym=new N(1,0,0),qm=new N(0,1,0),$m=new N(0,0,1),jm={type:"added"},fS={type:"removed"},Lo={type:"childadded",child:null},Uh={type:"childremoved",child:null};class Ut extends Oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new N,t=new Qi,n=new Ps,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Je},normalMatrix:{value:new st}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new T0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Po.setFromAxisAngle(e,t),this.quaternion.multiply(Po),this}rotateOnWorldAxis(e,t){return Po.setFromAxisAngle(e,t),this.quaternion.premultiply(Po),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis(qm,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,t){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis(qm,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tc.copy(e):Tc.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wr.lookAt(Xa,Tc,this.up):wr.lookAt(Tc,Xa,this.up),this.quaternion.setFromRotationMatrix(wr),i&&(wr.extractRotation(i.matrixWorld),Po.setFromRotationMatrix(wr),this.quaternion.premultiply(Po.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fS),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wr.multiply(e.parent.matrixWorld)),e.applyMatrix4(wr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,uS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,hS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ut.DEFAULT_UP=new N(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qi=new N,Ar=new N,Oh=new N,Rr=new N,Do=new N,Io=new N,Km=new N,Fh=new N,Bh=new N,kh=new N,zh=new xt,Hh=new xt,Vh=new xt;class Bi{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qi.subVectors(e,t),i.cross(qi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qi.subVectors(i,t),Ar.subVectors(n,t),Oh.subVectors(e,t);const o=qi.dot(qi),a=qi.dot(Ar),l=qi.dot(Oh),c=Ar.dot(Ar),u=Ar.dot(Oh),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Rr)===null?!1:Rr.x>=0&&Rr.y>=0&&Rr.x+Rr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Rr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rr.x),l.addScaledVector(o,Rr.y),l.addScaledVector(a,Rr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return zh.setScalar(0),Hh.setScalar(0),Vh.setScalar(0),zh.fromBufferAttribute(e,t),Hh.fromBufferAttribute(e,n),Vh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(zh,s.x),o.addScaledVector(Hh,s.y),o.addScaledVector(Vh,s.z),o}static isFrontFacing(e,t,n,i){return qi.subVectors(n,t),Ar.subVectors(e,t),qi.cross(Ar).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),Ar.subVectors(this.a,this.b),qi.cross(Ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Bi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Do.subVectors(i,n),Io.subVectors(s,n),Fh.subVectors(e,n);const l=Do.dot(Fh),c=Io.dot(Fh);if(l<=0&&c<=0)return t.copy(n);Bh.subVectors(e,i);const u=Do.dot(Bh),h=Io.dot(Bh);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Do,o);kh.subVectors(e,s);const d=Do.dot(kh),m=Io.dot(kh);if(m>=0&&d<=m)return t.copy(s);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Io,a);const g=u*m-d*h;if(g<=0&&h-u>=0&&d-m>=0)return Km.subVectors(s,i),a=(h-u)/(h-u+(d-m)),t.copy(i).addScaledVector(Km,a);const p=1/(g+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Do,o).addScaledVector(Io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const E0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Gh(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=gt.workingColorSpace){if(e=wp(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Gh(o,s,e+1/3),this.g=Gh(o,s,e),this.b=Gh(o,s,e-1/3)}return gt.colorSpaceToWorking(this,i),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){const n=E0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zr(e.r),this.g=zr(e.g),this.b=zr(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return gt.workingToColorSpace(An.copy(this),e),Math.round(ct(An.r*255,0,255))*65536+Math.round(ct(An.g*255,0,255))*256+Math.round(ct(An.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(An.copy(this),t);const n=An.r,i=An.g,s=An.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(An.copy(this),t),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Jt){gt.workingToColorSpace(An.copy(this),e);const t=An.r,n=An.g,i=An.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Ec);const n=xl(ts.h,Ec.h,t),i=xl(ts.s,Ec.s,t),s=xl(ts.l,Ec.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new Oe;Oe.NAMES=E0;let dS=0;class Gi extends Oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=ta,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Nf,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Eo,this.stencilZFail=Eo,this.stencilZPass=Eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(n.blending=this.blending),this.side!==$r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==If&&(n.blendSrc=this.blendSrc),this.blendDst!==Nf&&(n.blendDst=this.blendDst),this.blendEquation!==Js&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Eo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Eo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Eo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Nn extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rn=new N,bc=new se;let pS=0;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xd,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bc.fromBufferAttribute(this,t),bc.applyMatrix3(e),this.setXY(t,bc.x,bc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xd&&(e.usage=this.usage),e}}class b0 extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class w0 extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mS=0;const Di=new Je,Wh=new Ut,No=new N,hi=new er,Ya=new er,_n=new N;class Ct extends Oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mS++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S0(e)?w0:b0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,n){return Di.makeTranslation(e,t,n),this.applyMatrix4(Di),this}scale(e,t,n){return Di.makeScale(e,t,n),this.applyMatrix4(Di),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new nt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hi.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ya.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(hi.min,Ya.min),hi.expandByPoint(_n),_n.addVectors(hi.max,Ya.max),hi.expandByPoint(_n)):(hi.expandByPoint(Ya.min),hi.expandByPoint(Ya.max))}hi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(No.fromBufferAttribute(e,c),_n.add(No)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;const c=new N,u=new N,h=new N,f=new se,d=new se,m=new se,_=new N,g=new N;function p(C,M,T){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,T),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),m.fromBufferAttribute(s,T),u.sub(c),h.sub(c),d.sub(f),m.sub(f);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(P),g.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),a[C].add(_),a[M].add(_),a[T].add(_),l[C].add(g),l[M].add(g),l[T].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,M=x.length;C<M;++C){const T=x[C],P=T.start,D=T.count;for(let B=P,k=P+D;B<k;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new N,v=new N,S=new N,E=new N;function b(C){S.fromBufferAttribute(i,C),E.copy(S);const M=a[C];y.copy(M),y.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(E,M);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,M=x.length;C<M;++C){const T=x[C],P=T.start,D=T.count;for(let B=P,k=P+D;B<k;B+=3)b(e.getX(B+0)),b(e.getX(B+1)),b(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,h=new N;if(e)for(let f=0,d=e.count;f<d;f+=3){const m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ct,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jm=new Je,Os=new ah,wc=new Mr,Zm=new N,Ac=new N,Rc=new N,Cc=new N,Xh=new N,Pc=new N,Qm=new N,Lc=new N;class Nt extends Ut{constructor(e=new Ct,t=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Pc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Xh.fromBufferAttribute(h,e),o?Pc.addScaledVector(Xh,u):Pc.addScaledVector(Xh.sub(t),u))}t.add(Pc)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wc.copy(n.boundingSphere),wc.applyMatrix4(s),Os.copy(e.ray).recast(e.near),!(wc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(wc,Zm)===null||Os.origin.distanceToSquared(Zm)>(e.far-e.near)**2))&&(Jm.copy(s).invert(),Os.copy(e.ray).applyMatrix4(Jm),!(n.boundingBox!==null&&Os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Os)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,S=y;v<S;v+=3){const E=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=Dc(this,p,e,n,c,u,h,E,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=Dc(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){const g=f[m],p=o[g.materialIndex],x=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=x,S=y;v<S;v+=3){const E=v,b=v+1,C=v+2;i=Dc(this,p,e,n,c,u,h,E,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const x=g,y=g+1,v=g+2;i=Dc(this,o,e,n,c,u,h,x,y,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function gS(r,e,t,n,i,s,o,a){let l;if(e.side===Un?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===$r,a),l===null)return null;Lc.copy(a),Lc.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Lc);return c<t.near||c>t.far?null:{distance:c,point:Lc.clone(),object:r}}function Dc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ac),r.getVertexPosition(l,Rc),r.getVertexPosition(c,Cc);const u=gS(r,e,t,n,Ac,Rc,Cc,Qm);if(u){const h=new N;Bi.getBarycoord(Qm,Ac,Rc,Cc,h),i&&(u.uv=Bi.getInterpolatedAttribute(i,a,l,c,h,new se)),s&&(u.uv1=Bi.getInterpolatedAttribute(s,a,l,c,h,new se)),o&&(u.normal=Bi.getInterpolatedAttribute(o,a,l,c,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};Bi.getNormal(Ac,Rc,Cc,f.normal),u.face=f,u.barycoord=h}return u}class Hr extends Ct{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(h,2));function m(_,g,p,x,y,v,S,E,b,C,M){const T=v/b,P=S/C,D=v/2,B=S/2,k=E/2,W=b+1,H=C+1;let Y=0,X=0;const ne=new N;for(let U=0;U<H;U++){const pe=U*P-B;for(let Fe=0;Fe<W;Fe++){const it=Fe*T-D;ne[_]=it*x,ne[g]=pe*y,ne[p]=k,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[g]=0,ne[p]=E>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Fe/b),h.push(1-U/C),Y+=1}}for(let U=0;U<C;U++)for(let pe=0;pe<b;pe++){const Fe=f+pe+W*U,it=f+pe+W*(U+1),$e=f+(pe+1)+W*(U+1),Ye=f+(pe+1)+W*U;l.push(Fe,it,Ye),l.push(it,$e,Ye),X+=6}a.addGroup(d,X,M),d+=X,f+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sa(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wn(r){const e={};for(let t=0;t<r.length;t++){const n=Sa(r[t]);for(const i in n)e[i]=n[i]}return e}function _S(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function A0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Ma={clone:Sa,merge:Wn};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=xS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sa(e.uniforms),this.uniformsGroups=_S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class R0 extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=cr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new N,eg=new se,tg=new se;class Mn extends R0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,eg,tg),t.subVectors(tg,eg)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Uo=-90,Oo=1;class yS extends Ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Mn(Uo,Oo,e,t);i.layers=this.layers,this.add(i);const s=new Mn(Uo,Oo,e,t);s.layers=this.layers,this.add(s);const o=new Mn(Uo,Oo,e,t);o.layers=this.layers,this.add(o);const a=new Mn(Uo,Oo,e,t);a.layers=this.layers,this.add(a);const l=new Mn(Uo,Oo,e,t);l.layers=this.layers,this.add(l);const c=new Mn(Uo,Oo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===cr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===zu)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class C0 extends dn{constructor(e=[],t=_a,n,i,s,o,a,l,c,u){super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SS extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new C0(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Hr(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:Sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Un,blending:kr});s.uniforms.tEquirect.value=t;const o=new Nt(i,s),a=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Si),new yS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class ur extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MS={type:"move"};class Yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Rp{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new Rp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cp extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class P0{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xd,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Hn=new N;class Zl{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),i=At(i,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class TS extends Gi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Fo;const qa=new N,Bo=new N,ko=new N,zo=new se,$a=new se,L0=new Je,Ic=new N,ja=new N,Nc=new N,ng=new se,qh=new se,ig=new se;class dP extends Ut{constructor(e=new TS){if(super(),this.isSprite=!0,this.type="Sprite",Fo===void 0){Fo=new Ct;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new P0(t,5);Fo.setIndex([0,1,2,0,2,3]),Fo.setAttribute("position",new Zl(n,3,0,!1)),Fo.setAttribute("uv",new Zl(n,2,3,!1))}this.geometry=Fo,this.material=e,this.center=new se(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Bo.setFromMatrixScale(this.matrixWorld),L0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ko.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Bo.multiplyScalar(-ko.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Uc(Ic.set(-.5,-.5,0),ko,o,Bo,i,s),Uc(ja.set(.5,-.5,0),ko,o,Bo,i,s),Uc(Nc.set(.5,.5,0),ko,o,Bo,i,s),ng.set(0,0),qh.set(1,0),ig.set(1,1);let a=e.ray.intersectTriangle(Ic,ja,Nc,!1,qa);if(a===null&&(Uc(ja.set(-.5,.5,0),ko,o,Bo,i,s),qh.set(0,1),a=e.ray.intersectTriangle(Ic,Nc,ja,!1,qa),a===null))return;const l=e.ray.origin.distanceTo(qa);l<e.near||l>e.far||t.push({distance:l,point:qa.clone(),uv:Bi.getInterpolation(qa,Ic,ja,Nc,ng,qh,ig,new se),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Uc(r,e,t,n,i,s){zo.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?($a.x=s*zo.x-i*zo.y,$a.y=i*zo.x+s*zo.y):$a.copy(zo),r.copy(e),r.x+=$a.x,r.y+=$a.y,r.applyMatrix4(L0)}const rg=new N,sg=new xt,og=new xt,ES=new N,ag=new Je,Oc=new N,$h=new Mr,lg=new Je,jh=new ah;class bS extends Nt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dm,this.bindMatrix=new Je,this.bindMatrixInverse=new Je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new er),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oc),this.boundingBox.expandByPoint(Oc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Oc),this.boundingSphere.expandByPoint(Oc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$h.copy(this.boundingSphere),$h.applyMatrix4(i),e.ray.intersectsSphere($h)!==!1&&(lg.copy(i).invert(),jh.copy(e.ray).applyMatrix4(lg),!(this.boundingBox!==null&&jh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ty?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;sg.fromBufferAttribute(i.attributes.skinIndex,e),og.fromBufferAttribute(i.attributes.skinWeight,e),rg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=og.getComponent(s);if(o!==0){const a=sg.getComponent(s);ag.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ES.copy(rg).applyMatrix4(ag),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class D0 extends Ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class I0 extends dn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=Jn,u=Jn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cg=new Je,wS=new Je;class Pp{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:wS;cg.multiplyMatrices(a,t[s]),cg.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Pp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new I0(t,e,e,ki,Ji);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new D0),this.bones.push(o),this.boneInverses.push(new Je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class yd extends pn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ho=new Je,ug=new Je,Fc=[],hg=new er,AS=new Je,Ka=new Nt,Ja=new Mr;class ia extends Nt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,AS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ho),hg.copy(e.boundingBox).applyMatrix4(Ho),this.boundingBox.union(hg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ho),Ja.copy(e.boundingSphere).applyMatrix4(Ho),this.boundingSphere.union(Ja)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ka.geometry=this.geometry,Ka.material=this.material,Ka.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ja.copy(this.boundingSphere),Ja.applyMatrix4(n),e.ray.intersectsSphere(Ja)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ho),ug.multiplyMatrices(n,Ho),Ka.matrixWorld=ug,Ka.raycast(e,Fc);for(let o=0,a=Fc.length;o<a;o++){const l=Fc[o];l.instanceId=s,l.object=this,t.push(l)}Fc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new I0(new Float32Array(i*this.count),i,this.count,Sp,Ji));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kh=new N,RS=new N,CS=new st;class as{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Kh.subVectors(n,t).cross(RS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||CS.getNormalMatrix(e),i=this.coplanarPoint(Kh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Mr,PS=new se(.5,.5),Bc=new N;class lh{constructor(e=new as,t=new as,n=new as,i=new as,s=new as,o=new as){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cr,n=!1){const i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],_=s[9],g=s[10],p=s[11],x=s[12],y=s[13],v=s[14],S=s[15];if(i[0].setComponents(c-o,d-u,p-m,S-x).normalize(),i[1].setComponents(c+o,d+u,p+m,S+x).normalize(),i[2].setComponents(c+a,d+h,p+_,S+y).normalize(),i[3].setComponents(c-a,d-h,p-_,S-y).normalize(),n)i[4].setComponents(l,f,g,v).normalize(),i[5].setComponents(c-l,d-f,p-g,S-v).normalize();else if(i[4].setComponents(c-l,d-f,p-g,S-v).normalize(),t===cr)i[5].setComponents(c+l,d+f,p+g,S+v).normalize();else if(t===zu)i[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const t=PS.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Bc.x=i.normal.x>0?e.max.x:e.min.x,Bc.y=i.normal.y>0?e.max.y:e.min.y,Bc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ch extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hu=new N,Vu=new N,fg=new Je,Za=new ah,kc=new Mr,Jh=new N,dg=new N;class uh extends Ut{constructor(e=new Ct,t=new ch){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Hu.fromBufferAttribute(t,i-1),Vu.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Hu.distanceTo(Vu);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kc.copy(n.boundingSphere),kc.applyMatrix4(i),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;fg.copy(i).invert(),Za.copy(e.ray).applyMatrix4(fg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=u.getX(_),x=u.getX(_+1),y=zc(this,e,Za,l,p,x,_);y&&t.push(y)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=zc(this,e,Za,l,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=zc(this,e,Za,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=zc(this,e,Za,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function zc(r,e,t,n,i,s,o){const a=r.geometry.attributes.position;if(Hu.fromBufferAttribute(a,i),Vu.fromBufferAttribute(a,s),t.distanceSqToSegment(Hu,Vu,Jh,dg)>n)return;Jh.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Jh);if(!(c<e.near||c>e.far))return{distance:c,point:dg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}const pg=new N,mg=new N;class N0 extends uh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)pg.fromBufferAttribute(t,i),mg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pg.distanceTo(mg);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class LS extends uh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Lp extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gg=new Je,Sd=new ah,Hc=new Mr,Vc=new N;class Dp extends Ut{constructor(e=new Ct,t=new Lp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hc.copy(n.boundingSphere),Hc.applyMatrix4(i),Hc.radius+=s,e.ray.intersectsSphere(Hc)===!1)return;gg.copy(i).invert(),Sd.copy(e.ray).applyMatrix4(gg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,_=d;m<_;m++){const g=c.getX(m);Vc.fromBufferAttribute(h,g),_g(Vc,g,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,_=d;m<_;m++)Vc.fromBufferAttribute(h,m),_g(Vc,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function _g(r,e,t,n,i,s,o){const a=Sd.distanceSqToPoint(r);if(a<t){const l=new N;Sd.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class DS extends dn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class U0 extends dn{constructor(e,t,n=po,i,s,o,a=Jn,l=Jn,c,u=Yl,h=1){if(u!==Yl&&u!==ql)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ap(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class O0 extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class F0 extends Ct{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new N,u=new se;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const d=n+h/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(a,3)),this.setAttribute("uv",new nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new F0(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yl extends Ct{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],d=[];let m=0;const _=[],g=n/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function x(){const v=new N,S=new N;let E=0;const b=(t-e)/n;for(let C=0;C<=s;C++){const M=[],T=C/s,P=T*(t-e)+e;for(let D=0;D<=i;D++){const B=D/i,k=B*l+a,W=Math.sin(k),H=Math.cos(k);S.x=P*W,S.y=-T*n+g,S.z=P*H,h.push(S.x,S.y,S.z),v.set(W,b,H).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-T),M.push(m++)}_.push(M)}for(let C=0;C<i;C++)for(let M=0;M<s;M++){const T=_[M][C],P=_[M+1][C],D=_[M+1][C+1],B=_[M][C+1];(e>0||M!==0)&&(u.push(T,P,B),E+=3),(t>0||M!==s-1)&&(u.push(P,D,B),E+=3)}c.addGroup(p,E,0),p+=E}function y(v){const S=m,E=new se,b=new N;let C=0;const M=v===!0?e:t,T=v===!0?1:-1;for(let D=1;D<=i;D++)h.push(0,g*T,0),f.push(0,T,0),d.push(.5,.5),m++;const P=m;for(let D=0;D<=i;D++){const k=D/i*l+a,W=Math.cos(k),H=Math.sin(k);b.x=M*H,b.y=g*T,b.z=M*W,h.push(b.x,b.y,b.z),f.push(0,T,0),E.x=W*.5+.5,E.y=H*.5*T+.5,d.push(E.x,E.y),m++}for(let D=0;D<i;D++){const B=S+D,k=P+D;v===!0?u.push(k,k+1,B):u.push(k+1,k,B),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new se:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new N,i=[],s=[],o=[],a=new N,l=new Je;for(let d=0;d<=e;d++){const m=d/e;i[d]=this.getTangentAt(m,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ct(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(ct(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ip extends tr{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new se){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class IS extends Ip{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Np(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Gc=new N,Zh=new Np,Qh=new Np,ef=new Np;class Up extends tr{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new N){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(Gc.subVectors(i[0],i[1]).add(i[0]),c=Gc);const h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(Gc.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Gc),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),g=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Zh.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,_,g),Qh.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,_,g),ef.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,_,g)}else this.curveType==="catmullrom"&&(Zh.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Qh.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),ef.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Zh.calc(l),Qh.calc(l),ef.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new N().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vg(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function NS(r,e){const t=1-r;return t*t*e}function US(r,e){return 2*(1-r)*r*e}function OS(r,e){return r*r*e}function Sl(r,e,t,n){return NS(r,e)+US(r,t)+OS(r,n)}function FS(r,e){const t=1-r;return t*t*t*e}function BS(r,e){const t=1-r;return 3*t*t*r*e}function kS(r,e){return 3*(1-r)*r*r*e}function zS(r,e){return r*r*r*e}function Ml(r,e,t,n,i){return FS(r,e)+BS(r,t)+kS(r,n)+zS(r,i)}class B0 extends tr{constructor(e=new se,t=new se,n=new se,i=new se){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ml(e,i.x,s.x,o.x,a.x),Ml(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class HS extends tr{constructor(e=new N,t=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Ml(e,i.x,s.x,o.x,a.x),Ml(e,i.y,s.y,o.y,a.y),Ml(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class k0 extends tr{constructor(e=new se,t=new se){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new se){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new se){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class VS extends tr{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class z0 extends tr{constructor(e=new se,t=new se,n=new se){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new se){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Sl(e,i.x,s.x,o.x),Sl(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class H0 extends tr{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Sl(e,i.x,s.x,o.x),Sl(e,i.y,s.y,o.y),Sl(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class V0 extends tr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new se){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(vg(a,l.x,c.x,u.x,h.x),vg(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new se().fromArray(i))}return this}}var Md=Object.freeze({__proto__:null,ArcCurve:IS,CatmullRomCurve3:Up,CubicBezierCurve:B0,CubicBezierCurve3:HS,EllipseCurve:Ip,LineCurve:k0,LineCurve3:VS,QuadraticBezierCurve:z0,QuadraticBezierCurve3:H0,SplineCurve:V0});class GS extends tr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Md[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Md[i.type]().fromJSON(i))}return this}}class xg extends GS{constructor(e){super(),this.type="Path",this.currentPoint=new se,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new k0(this.currentPoint.clone(),new se(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new z0(this.currentPoint.clone(),new se(e,t),new se(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new B0(this.currentPoint.clone(),new se(e,t),new se(n,i),new se(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new V0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Ip(e,t,n,i,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Td extends xg{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new xg().fromJSON(i))}return this}}function WS(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=G0(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=jS(r,e,s,t)),r.length>80*t){a=1/0,l=1/0;let u=-1/0,h=-1/0;for(let f=t;f<i;f+=t){const d=r[f],m=r[f+1];d<a&&(a=d),m<l&&(l=m),d>u&&(u=d),m>h&&(h=m)}c=Math.max(u-a,h-l),c=c!==0?32767/c:0}return Ql(s,o,t,a,l,c,0),o}function G0(r,e,t,n,i){let s;if(i===oM(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=yg(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=yg(o/n|0,r[o],r[o+1],s);return s&&Ta(s,s.next)&&(tc(s),s=s.next),s}function mo(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ta(t,t.next)||$t(t.prev,t,t.next)===0)){if(tc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ql(r,e,t,n,i,s,o){if(!r)return;!o&&s&&eM(r,n,i,s);let a=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?YS(r,n,i,s):XS(r)){e.push(l.i,r.i,c.i),tc(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=qS(mo(r),e),Ql(r,e,t,n,i,s,2)):o===2&&$S(r,e,t,n,i,s):Ql(mo(r),e,t,n,i,s,1);break}}}function XS(r){const e=r.prev,t=r,n=r.next;if($t(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=Math.min(i,s,o),h=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=f&&m.y>=h&&m.y<=d&&al(i,a,s,l,o,c,m.x,m.y)&&$t(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function YS(r,e,t,n){const i=r.prev,s=r,o=r.next;if($t(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,u=i.y,h=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(u,h,f),_=Math.max(a,l,c),g=Math.max(u,h,f),p=Ed(d,m,e,t,n),x=Ed(_,g,e,t,n);let y=r.prevZ,v=r.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&al(a,u,l,h,c,f,y.x,y.y)&&$t(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&al(a,u,l,h,c,f,v.x,v.y)&&$t(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&al(a,u,l,h,c,f,y.x,y.y)&&$t(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=_&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&al(a,u,l,h,c,f,v.x,v.y)&&$t(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function qS(r,e){let t=r;do{const n=t.prev,i=t.next.next;!Ta(n,i)&&X0(n,t,t.next,i)&&ec(n,i)&&ec(i,n)&&(e.push(n.i,t.i,i.i),tc(t),tc(t.next),t=r=i),t=t.next}while(t!==r);return mo(t)}function $S(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&iM(o,a)){let l=Y0(o,a);o=mo(o,o.next),l=mo(l,l.next),Ql(o,e,t,n,i,s,0),Ql(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function jS(r,e,t,n){const i=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=G0(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(nM(c))}i.sort(KS);for(let s=0;s<i.length;s++)t=JS(i[s],t);return t}function KS(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function JS(r,e){const t=ZS(r,e);if(!t)return e;const n=Y0(t,r);return mo(n,n.next),mo(t,t.next)}function ZS(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,o;if(Ta(r,t))return t;do{if(Ta(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&W0(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const h=Math.abs(i-t.y)/(n-t.x);ec(t,r)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&QS(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function QS(r,e){return $t(r.prev,r,e.prev)<0&&$t(e.next,r,r.next)<0}function eM(r,e,t,n){let i=r;do i.z===0&&(i.z=Ed(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,tM(i)}function tM(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function Ed(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function nM(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function W0(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function al(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&W0(r,e,t,n,i,s,o,a)}function iM(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!rM(r,e)&&(ec(r,e)&&ec(e,r)&&sM(r,e)&&($t(r.prev,r,e.prev)||$t(r,e.prev,e))||Ta(r,e)&&$t(r.prev,r,r.next)>0&&$t(e.prev,e,e.next)>0)}function $t(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ta(r,e){return r.x===e.x&&r.y===e.y}function X0(r,e,t,n){const i=Xc($t(r,e,t)),s=Xc($t(r,e,n)),o=Xc($t(t,n,r)),a=Xc($t(t,n,e));return!!(i!==s&&o!==a||i===0&&Wc(r,t,e)||s===0&&Wc(r,n,e)||o===0&&Wc(t,r,n)||a===0&&Wc(t,e,n))}function Wc(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Xc(r){return r>0?1:r<0?-1:0}function rM(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&X0(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ec(r,e){return $t(r.prev,r,r.next)<0?$t(r,e,r.next)>=0&&$t(r,r.prev,e)>=0:$t(r,e,r.prev)<0||$t(r,r.next,e)<0}function sM(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Y0(r,e){const t=bd(r.i,r.x,r.y),n=bd(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function yg(r,e,t,n){const i=bd(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tc(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function bd(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function oM(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class aM{static triangulate(e,t,n=2){return WS(e,t,n)}}class ra{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return ra.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];Sg(e),Mg(n,e);let o=e.length;t.forEach(Sg);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,Mg(n,t[l]);const a=aM.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Sg(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Mg(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ls extends Ct{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const x=p*f-o;for(let y=0;y<c;y++){const v=y*h-s;m.push(v,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),S=x+1+c*(p+1),E=x+1+c*p;d.push(y,v,E),d.push(v,S,E)}this.setIndex(d),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class q0 extends Ct{constructor(e=.5,t=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/i,d=new N,m=new se;for(let _=0;_<=i;_++){for(let g=0;g<=n;g++){const p=s+g/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,u.push(m.x,m.y)}h+=f}for(let _=0;_<i;_++){const g=_*(n+1);for(let p=0;p<n;p++){const x=p+g,y=x,v=x+n+1,S=x+n+2,E=x+1;a.push(y,v,E),a.push(v,S,E)}}this.setIndex(a),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new q0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Gu extends Ct{constructor(e=new Td([new se(0,.5),new se(-.5,-.5),new se(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(a,l,u),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new nt(i,3)),this.setAttribute("normal",new nt(s,3)),this.setAttribute("uv",new nt(o,2));function c(u){const h=i.length/3,f=u.extractPoints(t);let d=f.shape;const m=f.holes;ra.isClockWise(d)===!1&&(d=d.reverse());for(let g=0,p=m.length;g<p;g++){const x=m[g];ra.isClockWise(x)===!0&&(m[g]=x.reverse())}const _=ra.triangulateShape(d,m);for(let g=0,p=m.length;g<p;g++){const x=m[g];d=d.concat(x)}for(let g=0,p=d.length;g<p;g++){const x=d[g];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let g=0,p=_.length;g<p;g++){const x=_[g],y=x[0]+h,v=x[1]+h,S=x[2]+h;n.push(y,v,S),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return lM(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const o=t[e.shapes[i]];n.push(o)}return new Gu(n,e.curveSegments)}}function lM(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Vr extends Ct{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new N,f=new N,d=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let S=0;S<=t;S++){const E=S/t;h.x=-e*Math.cos(i+E*s)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+E*s)*Math.sin(o+y*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),g.push(E+v,1-y),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=u[p][x+1],v=u[p][x],S=u[p+1][x],E=u[p+1][x+1];(p!==0||o>0)&&d.push(y,v,E),(p!==n-1||l<Math.PI)&&d.push(v,S,E)}this.setIndex(d),this.setAttribute("position",new nt(m,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $0 extends Ct{constructor(e=new H0(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new N,l=new N,c=new se;let u=new N;const h=[],f=[],d=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(f,3)),this.setAttribute("uv",new nt(d,2));function _(){for(let y=0;y<t;y++)g(y);g(s===!1?t:0),x(),p()}function g(y){u=e.getPointAt(y/t,u);const v=o.normals[y],S=o.binormals[y];for(let E=0;E<=i;E++){const b=E/i*Math.PI*2,C=Math.sin(b),M=-Math.cos(b);l.x=M*v.x+C*S.x,l.y=M*v.y+C*S.y,l.z=M*v.z+C*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=t;y++)for(let v=1;v<=i;v++){const S=(i+1)*(y-1)+(v-1),E=(i+1)*y+(v-1),b=(i+1)*y+v,C=(i+1)*(y-1)+v;m.push(S,E,C),m.push(E,b,C)}}function x(){for(let y=0;y<=t;y++)for(let v=0;v<=i;v++)c.x=y/t,c.y=v/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new $0(new Md[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class cM extends fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class di extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tr extends di{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class pP extends Gi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bp,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class uM extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hM extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Yc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function fM(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function dM(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Tg(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function j0(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push(...o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class pc{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class pM extends pc{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Im,endingEnd:Im}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Nm:s=e,a=2*t-n;break;case Um:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Nm:o=e,l=2*n-t;break;case Um:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,x=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,y=(-1-d)*g+(1.5+d)*_+.5*m,v=d*g-d*_;for(let S=0;S!==a;++S)s[S]=p*o[u+S]+x*o[c+S]+y*o[l+S]+v*o[h+S];return s}}class mM extends pc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class gM extends pc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class nr{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yc(t,this.TimeBufferType),this.values=Yc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yc(e.times,Array),values:Yc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mM(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new pM(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $l:t=this.InterpolantFactoryMethodDiscrete;break;case jl:t=this.InterpolantFactoryMethodLinear;break;case bh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $l;case this.InterpolantFactoryMethodLinear:return jl;case this.InterpolantFactoryMethodSmooth:return bh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&fM(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bh,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){const _=t[h+m];if(_!==t[f+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}nr.prototype.ValueTypeName="";nr.prototype.TimeBufferType=Float32Array;nr.prototype.ValueBufferType=Float32Array;nr.prototype.DefaultInterpolation=jl;class Fa extends nr{constructor(e,t,n){super(e,t,n)}}Fa.prototype.ValueTypeName="bool";Fa.prototype.ValueBufferType=Array;Fa.prototype.DefaultInterpolation=$l;Fa.prototype.InterpolantFactoryMethodLinear=void 0;Fa.prototype.InterpolantFactoryMethodSmooth=void 0;class K0 extends nr{constructor(e,t,n,i){super(e,t,n,i)}}K0.prototype.ValueTypeName="color";class Ea extends nr{constructor(e,t,n,i){super(e,t,n,i)}}Ea.prototype.ValueTypeName="number";class _M extends pc{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ps.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ba extends nr{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _M(this.times,this.values,this.getValueSize(),e)}}ba.prototype.ValueTypeName="quaternion";ba.prototype.InterpolantFactoryMethodSmooth=void 0;class Ba extends nr{constructor(e,t,n){super(e,t,n)}}Ba.prototype.ValueTypeName="string";Ba.prototype.ValueBufferType=Array;Ba.prototype.DefaultInterpolation=$l;Ba.prototype.InterpolantFactoryMethodLinear=void 0;Ba.prototype.InterpolantFactoryMethodSmooth=void 0;class wa extends nr{constructor(e,t,n,i){super(e,t,n,i)}}wa.prototype.ValueTypeName="vector";class vM{constructor(e="",t=-1,n=[],i=Ey){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(yM(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=n.length;s!==o;++s)t.push(nr.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=dM(l);l=Tg(l,1,u),c=Tg(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Ea(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,m,_){if(d.length!==0){const g=[],p=[];j0(d,g,p,m),g.length!==0&&_.push(new h(f,g,p))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let m;for(m=0;m<f.length;m++)if(f[m].morphTargets)for(let _=0;_<f[m].morphTargets.length;_++)d[f[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let x=0;x!==f[m].morphTargets.length;++x){const y=f[m];g.push(y.time),p.push(y.morphTarget===_?1:0)}i.push(new Ea(".morphTargetInfluence["+_+"]",g,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(wa,d+".position",f,"pos",i),n(ba,d+".quaternion",f,"rot",i),n(wa,d+".scale",f,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function xM(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ea;case"vector":case"vector2":case"vector3":case"vector4":return wa;case"color":return K0;case"quaternion":return ba;case"bool":case"boolean":return Fa;case"string":return Ba}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function yM(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xM(r.type);if(r.times===void 0){const t=[],n=[];j0(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Or={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class SM{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const MM=new SM;class So{constructor(e){this.manager=e!==void 0?e:MM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}So.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr={};class TM extends Error{constructor(e,t){super(e),this.response=t}}class Wu extends So{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Or.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Cr[e]!==void 0){Cr[e].push({onLoad:t,onProgress:n,onError:i});return}Cr[e]=[],Cr[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Cr[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){x();function x(){h.read().then(({done:y,value:v})=>{if(y)p.close();else{_+=v.byteLength;const S=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let E=0,b=u.length;E<b;E++){const C=u[E];C.onProgress&&C.onProgress(S)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(g)}else throw new TM(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{Or.add(`file:${e}`,c);const u=Cr[e];delete Cr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Cr[e];if(u===void 0)throw this.manager.itemError(e),c;delete Cr[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Vo=new WeakMap;class EM extends So{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Or.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let h=Vo.get(o);h===void 0&&(h=[],Vo.set(o,h)),h.push({onLoad:t,onError:i})}return o}const a=Kl("img");function l(){u(),t&&t(this);const h=Vo.get(this)||[];for(let f=0;f<h.length;f++){const d=h[f];d.onLoad&&d.onLoad(this)}Vo.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),Or.remove(`image:${e}`);const f=Vo.get(this)||[];for(let d=0;d<f.length;d++){const m=f[d];m.onError&&m.onError(h)}Vo.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Or.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class bM extends So{constructor(e){super(e)}load(e,t,n,i){const s=new dn,o=new EM(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class hh extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class wM extends hh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tf=new Je,Eg=new N,bg=new N;class Op{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=xr,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eg),bg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bg),t.updateMatrixWorld(),tf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tf,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class AM extends Op{constructor(){super(new Mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ya*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class J0 extends hh{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new AM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wg=new Je,Qa=new N,nf=new N;class RM extends Op{constructor(){super(new Mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new xt(2,1,1,1),new xt(0,1,1,1),new xt(3,1,1,1),new xt(1,1,1,1),new xt(3,0,1,1),new xt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Qa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qa),nf.copy(n.position),nf.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nf),n.updateMatrixWorld(),i.makeTranslation(-Qa.x,-Qa.y,-Qa.z),wg.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wg,n.coordinateSystem,n.reversedDepth)}}class CM extends hh{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new RM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class fh extends R0{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class PM extends Op{constructor(){super(new fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Z0 extends hh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new PM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tl{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const rf=new WeakMap;class LM extends So{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Or.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(rf.has(o)===!0)i&&i(rf.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Or.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){i&&i(c),rf.set(l,c),Or.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Or.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class DM extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class IM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Fp="\\[\\]\\.:\\/",NM=new RegExp("["+Fp+"]","g"),Bp="[^"+Fp+"]",UM="[^"+Fp.replace("\\.","")+"]",OM=/((?:WC+[\/:])*)/.source.replace("WC",Bp),FM=/(WCOD+)?/.source.replace("WCOD",UM),BM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bp),kM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bp),zM=new RegExp("^"+OM+FM+BM+kM+"$"),HM=["material","materials","bones","map"];class VM{constructor(e,t,n){const i=n||Rt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Rt{constructor(e,t,n){this.path=t,this.parsedPath=n||Rt.parseTrackName(t),this.node=Rt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Rt.Composite(e,t,n):new Rt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(NM,"")}static parseTrackName(e){const t=zM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);HM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Rt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Rt.Composite=VM;Rt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Rt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Rt.prototype.GetterByBindingType=[Rt.prototype._getValue_direct,Rt.prototype._getValue_array,Rt.prototype._getValue_arrayElement,Rt.prototype._getValue_toArray];Rt.prototype.SetterByBindingTypeAndVersioning=[[Rt.prototype._setValue_direct,Rt.prototype._setValue_direct_setNeedsUpdate,Rt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_array,Rt.prototype._setValue_array_setNeedsUpdate,Rt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_arrayElement,Rt.prototype._setValue_arrayElement_setNeedsUpdate,Rt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Rt.prototype._setValue_fromArray,Rt.prototype._setValue_fromArray_setNeedsUpdate,Rt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Ag=new se;class GM{constructor(e=new se(1/0,1/0),t=new se(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ag.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ag).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}function Rg(r,e,t,n){const i=WM(n);switch(t){case g0:return r*e;case Sp:return r*e/i.components*i.byteLength;case Mp:return r*e/i.components*i.byteLength;case v0:return r*e*2/i.components*i.byteLength;case Tp:return r*e*2/i.components*i.byteLength;case _0:return r*e*3/i.components*i.byteLength;case ki:return r*e*4/i.components*i.byteLength;case Ep:return r*e*4/i.components*i.byteLength;case mu:case gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Xf:case qf:return Math.max(r,16)*Math.max(e,8)/4;case Wf:case Yf:return Math.max(r,8)*Math.max(e,8)/2;case $f:case jf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Kf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ed:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case td:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case nd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case id:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case rd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case sd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case od:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ad:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ld:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case cd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case ud:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hd:case fd:case dd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case pd:case md:return Math.ceil(r/4)*Math.ceil(e/4)*8;case gd:case _d:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function WM(r){switch(r){case xr:case f0:return{byteLength:1,components:1};case Wl:case d0:case Zi:return{byteLength:2,components:1};case xp:case yp:return{byteLength:2,components:4};case po:case vp:case Ji:return{byteLength:4,components:1};case p0:case m0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Q0(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function XM(r){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){const m=h[f],_=h[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$M=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,JM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,iT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,sT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,oT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,mT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_T=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,yT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ST=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MT="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ET=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,PT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,OT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,BT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,WT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$T=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,tE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,lE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,uE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,mE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_E=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,SE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ME=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,RE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,CE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,PE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,LE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,IE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,UE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,FE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,BE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,HE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,VE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,GE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,WE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$E=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ZE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,QE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,eb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ib=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ob=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ub=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,db=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,gb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_b=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:YM,alphahash_pars_fragment:qM,alphamap_fragment:$M,alphamap_pars_fragment:jM,alphatest_fragment:KM,alphatest_pars_fragment:JM,aomap_fragment:ZM,aomap_pars_fragment:QM,batching_pars_vertex:eT,batching_vertex:tT,begin_vertex:nT,beginnormal_vertex:iT,bsdfs:rT,iridescence_fragment:sT,bumpmap_pars_fragment:oT,clipping_planes_fragment:aT,clipping_planes_pars_fragment:lT,clipping_planes_pars_vertex:cT,clipping_planes_vertex:uT,color_fragment:hT,color_pars_fragment:fT,color_pars_vertex:dT,color_vertex:pT,common:mT,cube_uv_reflection_fragment:gT,defaultnormal_vertex:_T,displacementmap_pars_vertex:vT,displacementmap_vertex:xT,emissivemap_fragment:yT,emissivemap_pars_fragment:ST,colorspace_fragment:MT,colorspace_pars_fragment:TT,envmap_fragment:ET,envmap_common_pars_fragment:bT,envmap_pars_fragment:wT,envmap_pars_vertex:AT,envmap_physical_pars_fragment:BT,envmap_vertex:RT,fog_vertex:CT,fog_pars_vertex:PT,fog_fragment:LT,fog_pars_fragment:DT,gradientmap_pars_fragment:IT,lightmap_pars_fragment:NT,lights_lambert_fragment:UT,lights_lambert_pars_fragment:OT,lights_pars_begin:FT,lights_toon_fragment:kT,lights_toon_pars_fragment:zT,lights_phong_fragment:HT,lights_phong_pars_fragment:VT,lights_physical_fragment:GT,lights_physical_pars_fragment:WT,lights_fragment_begin:XT,lights_fragment_maps:YT,lights_fragment_end:qT,logdepthbuf_fragment:$T,logdepthbuf_pars_fragment:jT,logdepthbuf_pars_vertex:KT,logdepthbuf_vertex:JT,map_fragment:ZT,map_pars_fragment:QT,map_particle_fragment:eE,map_particle_pars_fragment:tE,metalnessmap_fragment:nE,metalnessmap_pars_fragment:iE,morphinstance_vertex:rE,morphcolor_vertex:sE,morphnormal_vertex:oE,morphtarget_pars_vertex:aE,morphtarget_vertex:lE,normal_fragment_begin:cE,normal_fragment_maps:uE,normal_pars_fragment:hE,normal_pars_vertex:fE,normal_vertex:dE,normalmap_pars_fragment:pE,clearcoat_normal_fragment_begin:mE,clearcoat_normal_fragment_maps:gE,clearcoat_pars_fragment:_E,iridescence_pars_fragment:vE,opaque_fragment:xE,packing:yE,premultiplied_alpha_fragment:SE,project_vertex:ME,dithering_fragment:TE,dithering_pars_fragment:EE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:wE,shadowmap_pars_fragment:AE,shadowmap_pars_vertex:RE,shadowmap_vertex:CE,shadowmask_pars_fragment:PE,skinbase_vertex:LE,skinning_pars_vertex:DE,skinning_vertex:IE,skinnormal_vertex:NE,specularmap_fragment:UE,specularmap_pars_fragment:OE,tonemapping_fragment:FE,tonemapping_pars_fragment:BE,transmission_fragment:kE,transmission_pars_fragment:zE,uv_pars_fragment:HE,uv_pars_vertex:VE,uv_vertex:GE,worldpos_vertex:WE,background_vert:XE,background_frag:YE,backgroundCube_vert:qE,backgroundCube_frag:$E,cube_vert:jE,cube_frag:KE,depth_vert:JE,depth_frag:ZE,distanceRGBA_vert:QE,distanceRGBA_frag:eb,equirect_vert:tb,equirect_frag:nb,linedashed_vert:ib,linedashed_frag:rb,meshbasic_vert:sb,meshbasic_frag:ob,meshlambert_vert:ab,meshlambert_frag:lb,meshmatcap_vert:cb,meshmatcap_frag:ub,meshnormal_vert:hb,meshnormal_frag:fb,meshphong_vert:db,meshphong_frag:pb,meshphysical_vert:mb,meshphysical_frag:gb,meshtoon_vert:_b,meshtoon_frag:vb,points_vert:xb,points_frag:yb,shadow_vert:Sb,shadow_frag:Mb,sprite_vert:Tb,sprite_frag:Eb},Ee={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},or={basic:{uniforms:Wn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Wn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Oe(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Wn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Wn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Wn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Oe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Wn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Wn([Ee.points,Ee.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Wn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Wn([Ee.common,Ee.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Wn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Wn([Ee.sprite,Ee.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Wn([Ee.common,Ee.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Wn([Ee.lights,Ee.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};or.physical={uniforms:Wn([or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const qc={r:0,b:0,g:0},Bs=new Qi,bb=new Je;function wb(r,e,t,n,i,s,o){const a=new Oe(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const S=m(y);S===null?p(a,l):S&&S.isColor&&(p(S,1),v=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(y,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===oh)?(u===void 0&&(u=new Nt(new Hr(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Sa(or.backgroundCube.uniforms),vertexShader:or.backgroundCube.vertexShader,fragmentShader:or.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Bs.copy(v.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bb.makeRotationFromEuler(Bs)),u.material.toneMapped=gt.getTransfer(S.colorSpace)!==wt,(h!==S||f!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Nt(new Ls(2,2),new fn({name:"BackgroundMaterial",uniforms:Sa(or.background.uniforms),vertexShader:or.background.vertexShader,fragmentShader:or.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=gt.getTransfer(S.colorSpace)!==wt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,v){y.getRGB(qc,A0(r)),n.buffers.color.setClear(qc.r,qc.g,qc.b,v,o)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:_,addToRenderList:g,dispose:x}}function Ab(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null);let s=i,o=!1;function a(T,P,D,B,k){let W=!1;const H=h(B,D,P);s!==H&&(s=H,c(s.object)),W=d(T,B,D,k),W&&m(T,B,D,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(T,P,D,B),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(T){return r.bindVertexArray(T)}function u(T){return r.deleteVertexArray(T)}function h(T,P,D){const B=D.wireframe===!0;let k=n[T.id];k===void 0&&(k={},n[T.id]=k);let W=k[P.id];W===void 0&&(W={},k[P.id]=W);let H=W[B];return H===void 0&&(H=f(l()),W[B]=H),H}function f(T){const P=[],D=[],B=[];for(let k=0;k<t;k++)P[k]=0,D[k]=0,B[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:B,object:T,attributes:{},index:null}}function d(T,P,D,B){const k=s.attributes,W=P.attributes;let H=0;const Y=D.getAttributes();for(const X in Y)if(Y[X].location>=0){const U=k[X];let pe=W[X];if(pe===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor)),U===void 0||U.attribute!==pe||pe&&U.data!==pe.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function m(T,P,D,B){const k={},W=P.attributes;let H=0;const Y=D.getAttributes();for(const X in Y)if(Y[X].location>=0){let U=W[X];U===void 0&&(X==="instanceMatrix"&&T.instanceMatrix&&(U=T.instanceMatrix),X==="instanceColor"&&T.instanceColor&&(U=T.instanceColor));const pe={};pe.attribute=U,U&&U.data&&(pe.data=U.data),k[X]=pe,H++}s.attributes=k,s.attributesNum=H,s.index=B}function _(){const T=s.newAttributes;for(let P=0,D=T.length;P<D;P++)T[P]=0}function g(T){p(T,0)}function p(T,P){const D=s.newAttributes,B=s.enabledAttributes,k=s.attributeDivisors;D[T]=1,B[T]===0&&(r.enableVertexAttribArray(T),B[T]=1),k[T]!==P&&(r.vertexAttribDivisor(T,P),k[T]=P)}function x(){const T=s.newAttributes,P=s.enabledAttributes;for(let D=0,B=P.length;D<B;D++)P[D]!==T[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function y(T,P,D,B,k,W,H){H===!0?r.vertexAttribIPointer(T,P,D,k,W):r.vertexAttribPointer(T,P,D,B,k,W)}function v(T,P,D,B){_();const k=B.attributes,W=D.getAttributes(),H=P.defaultAttributeValues;for(const Y in W){const X=W[Y];if(X.location>=0){let ne=k[Y];if(ne===void 0&&(Y==="instanceMatrix"&&T.instanceMatrix&&(ne=T.instanceMatrix),Y==="instanceColor"&&T.instanceColor&&(ne=T.instanceColor)),ne!==void 0){const U=ne.normalized,pe=ne.itemSize,Fe=e.get(ne);if(Fe===void 0)continue;const it=Fe.buffer,$e=Fe.type,Ye=Fe.bytesPerElement,K=$e===r.INT||$e===r.UNSIGNED_INT||ne.gpuType===vp;if(ne.isInterleavedBufferAttribute){const Q=ne.data,_e=Q.stride,we=ne.offset;if(Q.isInstancedInterleavedBuffer){for(let Ce=0;Ce<X.locationSize;Ce++)p(X.location+Ce,Q.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ce=0;Ce<X.locationSize;Ce++)g(X.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Ce=0;Ce<X.locationSize;Ce++)y(X.location+Ce,pe/X.locationSize,$e,U,_e*Ye,(we+pe/X.locationSize*Ce)*Ye,K)}else{if(ne.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,ne.meshPerAttribute);T.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Q=0;Q<X.locationSize;Q++)g(X.location+Q);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Q=0;Q<X.locationSize;Q++)y(X.location+Q,pe/X.locationSize,$e,U,pe*Ye,pe/X.locationSize*Q*Ye,K)}}else if(H!==void 0){const U=H[Y];if(U!==void 0)switch(U.length){case 2:r.vertexAttrib2fv(X.location,U);break;case 3:r.vertexAttrib3fv(X.location,U);break;case 4:r.vertexAttrib4fv(X.location,U);break;default:r.vertexAttrib1fv(X.location,U)}}}}x()}function S(){C();for(const T in n){const P=n[T];for(const D in P){const B=P[D];for(const k in B)u(B[k].object),delete B[k];delete P[D]}delete n[T]}}function E(T){if(n[T.id]===void 0)return;const P=n[T.id];for(const D in P){const B=P[D];for(const k in B)u(B[k].object),delete B[k];delete P[D]}delete n[T.id]}function b(T){for(const P in n){const D=n[P];if(D[T.id]===void 0)continue;const B=D[T.id];for(const k in B)u(B[k].object),delete B[k];delete D[T.id]}}function C(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Rb(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*f[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Cb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==ki&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==xr&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ji&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=m>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:S,maxSamples:E}}function Pb(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new as,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const m=h.clippingPlanes,_=h.clipIntersection,g=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!g)s?u(null):c();else{const x=s?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=u(m,f,y,d);for(let S=0;S!==y;++S)v[S]=t[S];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,m){const _=h!==null?h.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=d;y!==_;++y,v+=4)o.copy(h[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function Lb(r){let e=new WeakMap;function t(o,a){return a===Vf?o.mapping=_a:a===Gf&&(o.mapping=va),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vf||a===Gf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new SS(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Jo=4,Cg=[.125,.215,.35,.446,.526,.582],Zs=20,sf=new fh,Pg=new Oe;let of=null,af=0,lf=0,cf=!1;const Xs=(1+Math.sqrt(5))/2,Go=1/Xs,Lg=[new N(-Xs,Go,0),new N(Xs,Go,0),new N(-Go,0,Xs),new N(Go,0,Xs),new N(0,Xs,-Go),new N(0,Xs,Go),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Db=new N;class wd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:o=256,position:a=Db}=s;of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ig(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(of,af,lf),this._renderer.xr.enabled=cf,e.scissorTest=!1,$c(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_a||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),of=this._renderer.getRenderTarget(),af=this._renderer.getActiveCubeFace(),lf=this._renderer.getActiveMipmapLevel(),cf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:Zi,format:ki,colorSpace:Fn,depthBuffer:!1},i=Dg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dg(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ib(s)),this._blurMaterial=Nb(s,e,t)}return i}_compileMaterial(e){const t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,sf)}_sceneToCubeUV(e,t,n,i,s){const l=new Mn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Pg),h.toneMapping=ys,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const _=new Nn({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1}),g=new Nt(new Hr,_);let p=!1;const x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,p=!0):(_.color.copy(Pg),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const S=this._cubeSize;$c(i,v*S,y>2?S:0,S,S),h.setRenderTarget(i),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_a||e.mapping===va;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ig());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$c(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,sf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Lg[(i-s-1)%Lg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Nt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Zs-1),_=s/m,g=isFinite(s)?1+Math.floor(u*_):Zs;g>Zs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zs}`);const p=[];let x=0;for(let b=0;b<Zs;++b){const C=b/_,M=Math.exp(-C*C/2);p.push(M),b===0?x+=M:b<g&&(x+=2*M)}for(let b=0;b<p.length;b++)p[b]=p[b]/x;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-n;const v=this._sizeLods[i],S=3*v*(i>y-Jo?i-y+Jo:0),E=4*(this._cubeSize-v);$c(t,S,E,3*v,2*v),l.setRenderTarget(t),l.render(h,sf)}}function Ib(r){const e=[],t=[],n=[];let i=r;const s=r-Jo+1+Cg.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Jo?l=Cg[o-r+Jo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,_=3,g=2,p=1,x=new Float32Array(_*m*d),y=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let E=0;E<d;E++){const b=E%3*2/3-1,C=E>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];x.set(M,_*m*E),y.set(f,g*m*E);const T=[E,E,E,E,E,E];v.set(T,p*m*E)}const S=new Ct;S.setAttribute("position",new pn(x,_)),S.setAttribute("uv",new pn(y,g)),S.setAttribute("faceIndex",new pn(v,p)),e.push(S),i>Jo&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dg(r,e,t){const n=new Ei(r,e,t);return n.texture.mapping=oh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $c(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Nb(r,e,t){const n=new Float32Array(Zs),i=new N(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Ig(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function Ng(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function kp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ub(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vf||l===Gf,u=l===_a||l===va;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new wd(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new wd(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ob(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Jl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Fb(r,e,t,n){const i={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,m=h.attributes.position;let _=0;if(d!==null){const x=d.array;_=d.version;for(let y=0,v=x.length;y<v;y+=3){const S=x[y+0],E=x[y+1],b=x[y+2];f.push(S,E,E,b,b,S)}}else if(m!==void 0){const x=m.array;_=m.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const S=y+0,E=y+1,b=y+2;f.push(S,E,E,b,b,S)}}else return;const g=new(S0(f)?w0:b0)(f,1);g.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,g)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Bb(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),t.update(d,n,m))}function u(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,n,1)}function h(f,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,_,0,m);let p=0;for(let x=0;x<m;x++)p+=d[x]*_[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function kb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function zb(r,e,t){const n=new WeakMap,i=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;d===!0&&(y=1),m===!0&&(y=2),_===!0&&(y=3);let v=a.attributes.position.count*y,S=1;v>e.maxTextureSize&&(S=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*S*4*h),b=new M0(E,v,S,h);b.type=Ji,b.needsUpdate=!0;const C=y*4;for(let T=0;T<h;T++){const P=g[T],D=p[T],B=x[T],k=v*S*4*T;for(let W=0;W<P.count;W++){const H=W*C;d===!0&&(i.fromBufferAttribute(P,W),E[k+H+0]=i.x,E[k+H+1]=i.y,E[k+H+2]=i.z,E[k+H+3]=0),m===!0&&(i.fromBufferAttribute(D,W),E[k+H+4]=i.x,E[k+H+5]=i.y,E[k+H+6]=i.z,E[k+H+7]=0),_===!0&&(i.fromBufferAttribute(B,W),E[k+H+8]=i.x,E[k+H+9]=i.y,E[k+H+10]=i.z,E[k+H+11]=B.itemSize===4?i.w:1)}}f={count:h,texture:b,size:new se(v,S)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function Hb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ev=new dn,Ug=new U0(1,1),tv=new M0,nv=new sS,iv=new C0,Og=[],Fg=[],Bg=new Float32Array(16),kg=new Float32Array(9),zg=new Float32Array(4);function ka(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Og[i];if(s===void 0&&(s=new Float32Array(i),Og[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function mn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function gn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function dh(r,e){let t=Fg[e];t===void 0&&(t=new Int32Array(e),Fg[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Vb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;r.uniform2fv(this.addr,e),gn(t,e)}}function Wb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;r.uniform3fv(this.addr,e),gn(t,e)}}function Xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;r.uniform4fv(this.addr,e),gn(t,e)}}function Yb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;zg.set(n),r.uniformMatrix2fv(this.addr,!1,zg),gn(t,n)}}function qb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;kg.set(n),r.uniformMatrix3fv(this.addr,!1,kg),gn(t,n)}}function $b(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;Bg.set(n),r.uniformMatrix4fv(this.addr,!1,Bg),gn(t,n)}}function jb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Kb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;r.uniform2iv(this.addr,e),gn(t,e)}}function Jb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;r.uniform3iv(this.addr,e),gn(t,e)}}function Zb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;r.uniform4iv(this.addr,e),gn(t,e)}}function Qb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ew(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;r.uniform2uiv(this.addr,e),gn(t,e)}}function tw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;r.uniform3uiv(this.addr,e),gn(t,e)}}function nw(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;r.uniform4uiv(this.addr,e),gn(t,e)}}function iw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ug.compareFunction=y0,s=Ug):s=ev,t.setTexture2D(e||s,i)}function rw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||nv,i)}function sw(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||iv,i)}function ow(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||tv,i)}function aw(r){switch(r){case 5126:return Vb;case 35664:return Gb;case 35665:return Wb;case 35666:return Xb;case 35674:return Yb;case 35675:return qb;case 35676:return $b;case 5124:case 35670:return jb;case 35667:case 35671:return Kb;case 35668:case 35672:return Jb;case 35669:case 35673:return Zb;case 5125:return Qb;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return ow}}function lw(r,e){r.uniform1fv(this.addr,e)}function cw(r,e){const t=ka(e,this.size,2);r.uniform2fv(this.addr,t)}function uw(r,e){const t=ka(e,this.size,3);r.uniform3fv(this.addr,t)}function hw(r,e){const t=ka(e,this.size,4);r.uniform4fv(this.addr,t)}function fw(r,e){const t=ka(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function dw(r,e){const t=ka(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function pw(r,e){const t=ka(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function mw(r,e){r.uniform1iv(this.addr,e)}function gw(r,e){r.uniform2iv(this.addr,e)}function _w(r,e){r.uniform3iv(this.addr,e)}function vw(r,e){r.uniform4iv(this.addr,e)}function xw(r,e){r.uniform1uiv(this.addr,e)}function yw(r,e){r.uniform2uiv(this.addr,e)}function Sw(r,e){r.uniform3uiv(this.addr,e)}function Mw(r,e){r.uniform4uiv(this.addr,e)}function Tw(r,e,t){const n=this.cache,i=e.length,s=dh(t,i);mn(n,s)||(r.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||ev,s[o])}function Ew(r,e,t){const n=this.cache,i=e.length,s=dh(t,i);mn(n,s)||(r.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||nv,s[o])}function bw(r,e,t){const n=this.cache,i=e.length,s=dh(t,i);mn(n,s)||(r.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||iv,s[o])}function ww(r,e,t){const n=this.cache,i=e.length,s=dh(t,i);mn(n,s)||(r.uniform1iv(this.addr,s),gn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||tv,s[o])}function Aw(r){switch(r){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return hw;case 35674:return fw;case 35675:return dw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return _w;case 35669:case 35673:return vw;case 5125:return xw;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Tw;case 35679:case 36299:case 36307:return Ew;case 35680:case 36300:case 36308:case 36293:return bw;case 36289:case 36303:case 36311:case 36292:return ww}}class Rw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aw(t.type)}}class Cw{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Aw(t.type)}}class Pw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const uf=/(\w+)(\])?(\[|\.)?/g;function Hg(r,e){r.seq.push(e),r.map[e.id]=e}function Lw(r,e,t){const n=r.name,i=n.length;for(uf.lastIndex=0;;){const s=uf.exec(n),o=uf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hg(t,c===void 0?new Rw(a,r,e):new Cw(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new Pw(a),Hg(t,h)),t=h}}}class xu{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Lw(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Vg(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Dw=37297;let Iw=0;function Nw(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Gg=new st;function Uw(r){gt._getMatrix(Gg,gt.workingColorSpace,r);const e=`mat3( ${Gg.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(r)){case ku:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wg(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Nw(r.getShaderSource(e),a)}else return s}function Ow(r,e){const t=Uw(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Fw(r,e){let t;switch(e){case r0:t="Linear";break;case s0:t="Reinhard";break;case o0:t="Cineon";break;case _p:t="ACESFilmic";break;case l0:t="AgX";break;case c0:t="Neutral";break;case a0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jc=new N;function Bw(){gt.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),e=jc.y.toFixed(4),t=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function zw(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hw(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ll(r){return r!==""}function Xg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ad(r){return r.replace(Vw,Ww)}const Gw=new Map;function Ww(r,e){let t=at[e];if(t===void 0){const n=Gw.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ad(t)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(r){return r.replace(Xw,Yw)}function Yw(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $g(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qw(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===n0?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pr&&(e="SHADOWMAP_TYPE_VSM"),e}function $w(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _a:case va:e="ENVMAP_TYPE_CUBE";break;case oh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jw(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function Kw(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case gp:e="ENVMAP_BLENDING_MULTIPLY";break;case Sy:e="ENVMAP_BLENDING_MIX";break;case My:e="ENVMAP_BLENDING_ADD";break}return e}function Jw(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Zw(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=qw(t),c=$w(t),u=jw(t),h=Kw(t),f=Jw(t),d=kw(t),m=zw(s),_=i.createProgram();let g,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ll).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ll).join(`
`),p.length>0&&(p+=`
`)):(g=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),p=[$g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ys?"#define TONE_MAPPING":"",t.toneMapping!==ys?at.tonemapping_pars_fragment:"",t.toneMapping!==ys?Fw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Ow("linearToOutputTexel",t.outputColorSpace),Bw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ll).join(`
`)),o=Ad(o),o=Xg(o,t),o=Yg(o,t),a=Ad(a),a=Xg(a,t),a=Yg(a,t),o=qg(o),a=qg(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+g+o,v=x+p+a,S=Vg(i,i.VERTEX_SHADER,y),E=Vg(i,i.FRAGMENT_SHADER,v);i.attachShader(_,S),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(_)||"",B=i.getShaderInfoLog(S)||"",k=i.getShaderInfoLog(E)||"",W=D.trim(),H=B.trim(),Y=k.trim();let X=!0,ne=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(X=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,E);else{const U=Wg(i,S,"vertex"),pe=Wg(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+U+`
`+pe)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(H===""||Y==="")&&(ne=!1);ne&&(P.diagnostics={runnable:X,programLog:W,vertexShader:{log:H,prefix:g},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(S),i.deleteShader(E),C=new xu(i,_),M=Hw(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(_,Dw)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Iw++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=E,this}let Qw=0;class e1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new t1(e),t.set(e,n)),n}}class t1{constructor(e){this.id=Qw++,this.code=e,this.usedTimes=0}}function n1(r,e,t,n,i,s,o){const a=new T0,l=new e1,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,T,P,D,B){const k=D.fog,W=B.geometry,H=M.isMeshStandardMaterial?D.environment:null,Y=(M.isMeshStandardMaterial?t:e).get(M.envMap||H),X=Y&&Y.mapping===oh?Y.image.height:null,ne=m[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const U=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pe=U!==void 0?U.length:0;let Fe=0;W.morphAttributes.position!==void 0&&(Fe=1),W.morphAttributes.normal!==void 0&&(Fe=2),W.morphAttributes.color!==void 0&&(Fe=3);let it,$e,Ye,K;if(ne){const be=or[ne];it=be.vertexShader,$e=be.fragmentShader}else it=M.vertexShader,$e=M.fragmentShader,l.update(M),Ye=l.getVertexShaderID(M),K=l.getFragmentShaderID(M);const Q=r.getRenderTarget(),_e=r.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,Ve=!!M.map,ut=!!M.matcap,R=!!Y,te=!!M.aoMap,le=!!M.lightMap,oe=!!M.bumpMap,F=!!M.normalMap,xe=!!M.displacementMap,ae=!!M.emissiveMap,ue=!!M.metalnessMap,Me=!!M.roughnessMap,Ue=M.anisotropy>0,L=M.clearcoat>0,w=M.dispersion>0,G=M.iridescence>0,J=M.sheen>0,Z=M.transmission>0,j=Ue&&!!M.anisotropyMap,Ae=L&&!!M.clearcoatMap,fe=L&&!!M.clearcoatNormalMap,Ie=L&&!!M.clearcoatRoughnessMap,ye=G&&!!M.iridescenceMap,he=G&&!!M.iridescenceThicknessMap,ve=J&&!!M.sheenColorMap,Ge=J&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,ge=!!M.specularColorMap,Ze=!!M.specularIntensityMap,O=Z&&!!M.transmissionMap,ce=Z&&!!M.thicknessMap,de=!!M.gradientMap,Te=!!M.alphaMap,re=M.alphaTest>0,ee=!!M.alphaHash,Pe=!!M.extensions;let Xe=ys;M.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Xe=r.toneMapping);const yt={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:it,fragmentShader:$e,defines:M.defines,customVertexShaderID:Ye,customFragmentShaderID:K,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Fn,alphaToCoverage:!!M.alphaToCoverage,map:Ve,matcap:ut,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:X,aoMap:te,lightMap:le,bumpMap:oe,normalMap:F,displacementMap:f&&xe,emissiveMap:ae,normalMapObjectSpace:F&&M.normalMapType===Ry,normalMapTangentSpace:F&&M.normalMapType===bp,metalnessMap:ue,roughnessMap:Me,anisotropy:Ue,anisotropyMap:j,clearcoat:L,clearcoatMap:Ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ie,dispersion:w,iridescence:G,iridescenceMap:ye,iridescenceThicknessMap:he,sheen:J,sheenColorMap:ve,sheenRoughnessMap:Ge,specularMap:Ne,specularColorMap:ge,specularIntensityMap:Ze,transmission:Z,transmissionMap:O,thicknessMap:ce,gradientMap:de,opaque:M.transparent===!1&&M.blending===ta&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:re,alphaHash:ee,combine:M.combine,mapUv:Ve&&_(M.map.channel),aoMapUv:te&&_(M.aoMap.channel),lightMapUv:le&&_(M.lightMap.channel),bumpMapUv:oe&&_(M.bumpMap.channel),normalMapUv:F&&_(M.normalMap.channel),displacementMapUv:xe&&_(M.displacementMap.channel),emissiveMapUv:ae&&_(M.emissiveMap.channel),metalnessMapUv:ue&&_(M.metalnessMap.channel),roughnessMapUv:Me&&_(M.roughnessMap.channel),anisotropyMapUv:j&&_(M.anisotropyMap.channel),clearcoatMapUv:Ae&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&_(M.sheenRoughnessMap.channel),specularMapUv:Ne&&_(M.specularMap.channel),specularColorMapUv:ge&&_(M.specularColorMap.channel),specularIntensityMapUv:Ze&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:Te&&_(M.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(F||Ue),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Ve||Te),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ve&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===wt,decodeVideoTextureEmissive:ae&&M.emissiveMap.isVideoTexture===!0&&gt.getTransfer(M.emissiveMap.colorSpace)===wt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===hn,flipSided:M.side===Un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Pe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&M.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)T.push(P),T.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(T,M),y(T,M),T.push(r.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function x(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function y(M,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),T.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const T=m[M.type];let P;if(T){const D=or[T];P=Ma.clone(D.uniforms)}else P=M.uniforms;return P}function S(M,T){let P;for(let D=0,B=u.length;D<B;D++){const k=u[D];if(k.cacheKey===T){P=k,++P.usedTimes;break}}return P===void 0&&(P=new Zw(r,T,M,s),u.push(P)),P}function E(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:b,programs:u,dispose:C}}function i1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function r1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Kg(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,m,_,g){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:_,group:g},r[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=_,p.group=g),e++,p}function a(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,m,_,g){const p=o(h,f,d,m,_,g);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||r1),n.length>1&&n.sort(f||jg),i.length>1&&i.sort(f||jg)}function u(){for(let h=e,f=r.length;h<f;h++){const d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function s1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Kg,r.set(n,[o])):i>=s.length?(o=new Kg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function o1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function a1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let l1=0;function c1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function u1(r){const e=new o1,t=a1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);const i=new N,s=new Je,o=new Je;function a(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,x=0,y=0,v=0,S=0,E=0,b=0;c.sort(c1);for(let M=0,T=c.length;M<T;M++){const P=c[M],D=P.color,B=P.intensity,k=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=D.r*B,h+=D.g*B,f+=D.b*B;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],B);b++}else if(P.isDirectionalLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Y=P.shadow,X=t.get(P);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=W,n.directionalShadowMatrix[d]=P.shadow.matrix,x++}n.directional[d]=H,d++}else if(P.isSpotLight){const H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(D).multiplyScalar(B),H.distance=k,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;const Y=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,Y.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Y.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=W,v++}_++}else if(P.isRectAreaLight){const H=e.get(P);H.color.copy(D).multiplyScalar(B),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=H,g++}else if(P.isPointLight){const H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Y=P.shadow,X=t.get(P);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,n.pointShadow[m]=X,n.pointShadowMap[m]=W,n.pointShadowMatrix[m]=P.shadow.matrix,y++}n.point[m]=H,m++}else if(P.isHemisphereLight){const H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(B),H.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=H,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==S||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,C.directionalLength=d,C.pointLength=m,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=S,C.numLightProbes=b,n.version=l1++)}function l(c,u){let h=0,f=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(y.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function Jg(r){const e=new u1(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function h1(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Jg(r),e.set(i,[a])):s>=o.length?(a=new Jg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const f1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function p1(r,e,t){let n=new lh;const i=new se,s=new se,o=new xt,a=new uM({depthPacking:Ay}),l=new hM,c={},u=t.maxTextureSize,h={[$r]:Un,[Un]:$r,[hn]:hn},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:f1,fragmentShader:d1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const m=new Ct;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Nt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=n0;let p=this.type;this.render=function(E,b,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const M=r.getRenderTarget(),T=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(kr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const B=p!==Pr&&this.type===Pr,k=p===Pr&&this.type!==Pr;for(let W=0,H=E.length;W<H;W++){const Y=E[W],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const ne=X.getFrameExtents();if(i.multiply(ne),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/ne.x),i.x=s.x*ne.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/ne.y),i.y=s.y*ne.y,X.mapSize.y=s.y)),X.map===null||B===!0||k===!0){const pe=this.type!==Pr?{minFilter:Jn,magFilter:Jn}:{};X.map!==null&&X.map.dispose(),X.map=new Ei(i.x,i.y,pe),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const U=X.getViewportCount();for(let pe=0;pe<U;pe++){const Fe=X.getViewport(pe);o.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),D.viewport(o),X.updateMatrices(Y,pe),n=X.getFrustum(),v(b,C,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Pr&&x(X,C),X.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(M,T,P)};function x(E,b){const C=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ei(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(b,null,C,f,_,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(b,null,C,d,_,null)}function y(E,b,C,M){let T=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)T=P;else if(T=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const D=T.uuid,B=b.uuid;let k=c[D];k===void 0&&(k={},c[D]=k);let W=k[B];W===void 0&&(W=T.clone(),k[B]=W,b.addEventListener("dispose",S)),T=W}if(T.visible=b.visible,T.wireframe=b.wireframe,M===Pr?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:h[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,C.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const D=r.properties.get(T);D.light=C}return T}function v(E,b,C,M,T){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&T===Pr)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const B=e.update(E),k=E.material;if(Array.isArray(k)){const W=B.groups;for(let H=0,Y=W.length;H<Y;H++){const X=W[H],ne=k[X.materialIndex];if(ne&&ne.visible){const U=y(E,ne,M,T);E.onBeforeShadow(r,E,b,C,B,U,X),r.renderBufferDirect(C,null,B,U,E,X),E.onAfterShadow(r,E,b,C,B,U,X)}}}else if(k.visible){const W=y(E,k,M,T);E.onBeforeShadow(r,E,b,C,B,W,null),r.renderBufferDirect(C,null,B,W,E,null),E.onAfterShadow(r,E,b,C,B,W,null)}}const D=E.children;for(let B=0,k=D.length;B<k;B++)v(D[B],b,C,M,T)}function S(E){E.target.removeEventListener("dispose",S);for(const C in c){const M=c[C],T=E.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const m1={[Uf]:Of,[Ff]:zf,[Bf]:Hf,[ga]:kf,[Of]:Uf,[zf]:Ff,[Hf]:Bf,[kf]:ga};function g1(r,e){function t(){let O=!1;const ce=new xt;let de=null;const Te=new xt(0,0,0,0);return{setMask:function(re){de!==re&&!O&&(r.colorMask(re,re,re,re),de=re)},setLocked:function(re){O=re},setClear:function(re,ee,Pe,Xe,yt){yt===!0&&(re*=Xe,ee*=Xe,Pe*=Xe),ce.set(re,ee,Pe,Xe),Te.equals(ce)===!1&&(r.clearColor(re,ee,Pe,Xe),Te.copy(ce))},reset:function(){O=!1,de=null,Te.set(-1,0,0,0)}}}function n(){let O=!1,ce=!1,de=null,Te=null,re=null;return{setReversed:function(ee){if(ce!==ee){const Pe=e.get("EXT_clip_control");ee?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),ce=ee;const Xe=re;re=null,this.setClear(Xe)}},getReversed:function(){return ce},setTest:function(ee){ee?Q(r.DEPTH_TEST):_e(r.DEPTH_TEST)},setMask:function(ee){de!==ee&&!O&&(r.depthMask(ee),de=ee)},setFunc:function(ee){if(ce&&(ee=m1[ee]),Te!==ee){switch(ee){case Uf:r.depthFunc(r.NEVER);break;case Of:r.depthFunc(r.ALWAYS);break;case Ff:r.depthFunc(r.LESS);break;case ga:r.depthFunc(r.LEQUAL);break;case Bf:r.depthFunc(r.EQUAL);break;case kf:r.depthFunc(r.GEQUAL);break;case zf:r.depthFunc(r.GREATER);break;case Hf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=ee}},setLocked:function(ee){O=ee},setClear:function(ee){re!==ee&&(ce&&(ee=1-ee),r.clearDepth(ee),re=ee)},reset:function(){O=!1,de=null,Te=null,re=null,ce=!1}}}function i(){let O=!1,ce=null,de=null,Te=null,re=null,ee=null,Pe=null,Xe=null,yt=null;return{setTest:function(be){O||(be?Q(r.STENCIL_TEST):_e(r.STENCIL_TEST))},setMask:function(be){ce!==be&&!O&&(r.stencilMask(be),ce=be)},setFunc:function(be,Be,tt){(de!==be||Te!==Be||re!==tt)&&(r.stencilFunc(be,Be,tt),de=be,Te=Be,re=tt)},setOp:function(be,Be,tt){(ee!==be||Pe!==Be||Xe!==tt)&&(r.stencilOp(be,Be,tt),ee=be,Pe=Be,Xe=tt)},setLocked:function(be){O=be},setClear:function(be){yt!==be&&(r.clearStencil(be),yt=be)},reset:function(){O=!1,ce=null,de=null,Te=null,re=null,ee=null,Pe=null,Xe=null,yt=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,S=null,E=null,b=new Oe(0,0,0),C=0,M=!1,T=null,P=null,D=null,B=null,k=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const X=r.getParameter(r.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=Y>=2);let ne=null,U={};const pe=r.getParameter(r.SCISSOR_BOX),Fe=r.getParameter(r.VIEWPORT),it=new xt().fromArray(pe),$e=new xt().fromArray(Fe);function Ye(O,ce,de,Te){const re=new Uint8Array(4),ee=r.createTexture();r.bindTexture(O,ee),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Pe=0;Pe<de;Pe++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,re):r.texImage2D(ce+Pe,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,re);return ee}const K={};K[r.TEXTURE_2D]=Ye(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Ye(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Ye(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Ye(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(ga),oe(!1),F(Cm),Q(r.CULL_FACE),te(kr);function Q(O){u[O]!==!0&&(r.enable(O),u[O]=!0)}function _e(O){u[O]!==!1&&(r.disable(O),u[O]=!1)}function we(O,ce){return h[O]!==ce?(r.bindFramebuffer(O,ce),h[O]=ce,O===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ce),O===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ce(O,ce){let de=d,Te=!1;if(O){de=f.get(ce),de===void 0&&(de=[],f.set(ce,de));const re=O.textures;if(de.length!==re.length||de[0]!==r.COLOR_ATTACHMENT0){for(let ee=0,Pe=re.length;ee<Pe;ee++)de[ee]=r.COLOR_ATTACHMENT0+ee;de.length=re.length,Te=!0}}else de[0]!==r.BACK&&(de[0]=r.BACK,Te=!0);Te&&r.drawBuffers(de)}function Ve(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const ut={[Js]:r.FUNC_ADD,[ry]:r.FUNC_SUBTRACT,[sy]:r.FUNC_REVERSE_SUBTRACT};ut[oy]=r.MIN,ut[ay]=r.MAX;const R={[ly]:r.ZERO,[cy]:r.ONE,[uy]:r.SRC_COLOR,[If]:r.SRC_ALPHA,[gy]:r.SRC_ALPHA_SATURATE,[py]:r.DST_COLOR,[fy]:r.DST_ALPHA,[hy]:r.ONE_MINUS_SRC_COLOR,[Nf]:r.ONE_MINUS_SRC_ALPHA,[my]:r.ONE_MINUS_DST_COLOR,[dy]:r.ONE_MINUS_DST_ALPHA,[_y]:r.CONSTANT_COLOR,[vy]:r.ONE_MINUS_CONSTANT_COLOR,[xy]:r.CONSTANT_ALPHA,[yy]:r.ONE_MINUS_CONSTANT_ALPHA};function te(O,ce,de,Te,re,ee,Pe,Xe,yt,be){if(O===kr){_===!0&&(_e(r.BLEND),_=!1);return}if(_===!1&&(Q(r.BLEND),_=!0),O!==iy){if(O!==g||be!==M){if((p!==Js||v!==Js)&&(r.blendEquation(r.FUNC_ADD),p=Js,v=Js),be)switch(O){case ta:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gl:r.blendFunc(r.ONE,r.ONE);break;case Pm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Lm:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ta:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Pm:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lm:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}x=null,y=null,S=null,E=null,b.set(0,0,0),C=0,g=O,M=be}return}re=re||ce,ee=ee||de,Pe=Pe||Te,(ce!==p||re!==v)&&(r.blendEquationSeparate(ut[ce],ut[re]),p=ce,v=re),(de!==x||Te!==y||ee!==S||Pe!==E)&&(r.blendFuncSeparate(R[de],R[Te],R[ee],R[Pe]),x=de,y=Te,S=ee,E=Pe),(Xe.equals(b)===!1||yt!==C)&&(r.blendColor(Xe.r,Xe.g,Xe.b,yt),b.copy(Xe),C=yt),g=O,M=!1}function le(O,ce){O.side===hn?_e(r.CULL_FACE):Q(r.CULL_FACE);let de=O.side===Un;ce&&(de=!de),oe(de),O.blending===ta&&O.transparent===!1?te(kr):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Te=O.stencilWrite;a.setTest(Te),Te&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):_e(r.SAMPLE_ALPHA_TO_COVERAGE)}function oe(O){T!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),T=O)}function F(O){O!==ty?(Q(r.CULL_FACE),O!==P&&(O===Cm?r.cullFace(r.BACK):O===ny?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):_e(r.CULL_FACE),P=O}function xe(O){O!==D&&(H&&r.lineWidth(O),D=O)}function ae(O,ce,de){O?(Q(r.POLYGON_OFFSET_FILL),(B!==ce||k!==de)&&(r.polygonOffset(ce,de),B=ce,k=de)):_e(r.POLYGON_OFFSET_FILL)}function ue(O){O?Q(r.SCISSOR_TEST):_e(r.SCISSOR_TEST)}function Me(O){O===void 0&&(O=r.TEXTURE0+W-1),ne!==O&&(r.activeTexture(O),ne=O)}function Ue(O,ce,de){de===void 0&&(ne===null?de=r.TEXTURE0+W-1:de=ne);let Te=U[de];Te===void 0&&(Te={type:void 0,texture:void 0},U[de]=Te),(Te.type!==O||Te.texture!==ce)&&(ne!==de&&(r.activeTexture(de),ne=de),r.bindTexture(O,ce||K[O]),Te.type=O,Te.texture=ce)}function L(){const O=U[ne];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ye(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(O){it.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),it.copy(O))}function Ge(O){$e.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),$e.copy(O))}function Ne(O,ce){let de=c.get(ce);de===void 0&&(de=new WeakMap,c.set(ce,de));let Te=de.get(O);Te===void 0&&(Te=r.getUniformBlockIndex(ce,O.name),de.set(O,Te))}function ge(O,ce){const Te=c.get(ce).get(O);l.get(ce)!==Te&&(r.uniformBlockBinding(ce,Te,O.__bindingPointIndex),l.set(ce,Te))}function Ze(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ne=null,U={},h={},f=new WeakMap,d=[],m=null,_=!1,g=null,p=null,x=null,y=null,v=null,S=null,E=null,b=new Oe(0,0,0),C=0,M=!1,T=null,P=null,D=null,B=null,k=null,it.set(0,0,r.canvas.width,r.canvas.height),$e.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:_e,bindFramebuffer:we,drawBuffers:Ce,useProgram:Ve,setBlending:te,setMaterial:le,setFlipSided:oe,setCullFace:F,setLineWidth:xe,setPolygonOffset:ae,setScissorTest:ue,activeTexture:Me,bindTexture:Ue,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:G,texImage2D:ye,texImage3D:he,updateUBOMapping:Ne,uniformBlockBinding:ge,texStorage2D:fe,texStorage3D:Ie,texSubImage2D:J,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:Ae,scissor:ve,viewport:Ge,reset:Ze}}function _1(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new se,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,w){return d?new OffscreenCanvas(L,w):Kl("canvas")}function _(L,w,G){let J=1;const Z=Ue(L);if((Z.width>G||Z.height>G)&&(J=G/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(J*Z.width),Ae=Math.floor(J*Z.height);h===void 0&&(h=m(j,Ae));const fe=w?m(j,Ae):h;return fe.width=j,fe.height=Ae,fe.getContext("2d").drawImage(L,0,0,j,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+Ae+")."),fe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function g(L){return L.generateMipmaps}function p(L){r.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(L,w,G,J,Z=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=w;if(w===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8)),w===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),w===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8)),w===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),w===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),w===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),w===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),w===r.RGBA){const Ae=Z?ku:gt.getTransfer(J);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=Ae===wt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(L,w){let G;return L?w===null||w===po||w===Xl?G=r.DEPTH24_STENCIL8:w===Ji?G=r.DEPTH32F_STENCIL8:w===Wl&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===po||w===Xl?G=r.DEPTH_COMPONENT24:w===Ji?G=r.DEPTH_COMPONENT32F:w===Wl&&(G=r.DEPTH_COMPONENT16),G}function S(L,w){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Jn&&L.minFilter!==Si?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function E(L){const w=L.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&u.delete(w)}function b(L){const w=L.target;w.removeEventListener("dispose",b),T(w)}function C(L){const w=n.get(L);if(w.__webglInit===void 0)return;const G=L.source,J=f.get(G);if(J){const Z=J[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(L),Object.keys(J).length===0&&f.delete(G)}n.remove(L)}function M(L){const w=n.get(L);r.deleteTexture(w.__webglTexture);const G=L.source,J=f.get(G);delete J[w.__cacheKey],o.memory.textures--}function T(L){const w=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Z=0;Z<w.__webglFramebuffer[J].length;Z++)r.deleteFramebuffer(w.__webglFramebuffer[J][Z]);else r.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)r.deleteFramebuffer(w.__webglFramebuffer[J]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=L.textures;for(let J=0,Z=G.length;J<Z;J++){const j=n.get(G[J]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(G[J])}n.remove(L)}let P=0;function D(){P=0}function B(){const L=P;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),P+=1,L}function k(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function W(L,w){const G=n.get(L);if(L.isVideoTexture&&ue(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&G.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(G,L,w);return}}else L.isExternalTexture&&(G.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+w)}function H(L,w){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){K(G,L,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+w)}function Y(L,w){const G=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&G.__version!==L.version){K(G,L,w);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+w)}function X(L,w){const G=n.get(L);if(L.version>0&&G.__version!==L.version){Q(G,L,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+w)}const ne={[xa]:r.REPEAT,[cs]:r.CLAMP_TO_EDGE,[Bu]:r.MIRRORED_REPEAT},U={[Jn]:r.NEAREST,[h0]:r.NEAREST_MIPMAP_NEAREST,[ol]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[pu]:r.LINEAR_MIPMAP_NEAREST,[Ur]:r.LINEAR_MIPMAP_LINEAR},pe={[Cy]:r.NEVER,[Uy]:r.ALWAYS,[Py]:r.LESS,[y0]:r.LEQUAL,[Ly]:r.EQUAL,[Ny]:r.GEQUAL,[Dy]:r.GREATER,[Iy]:r.NOTEQUAL};function Fe(L,w){if(w.type===Ji&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Si||w.magFilter===pu||w.magFilter===ol||w.magFilter===Ur||w.minFilter===Si||w.minFilter===pu||w.minFilter===ol||w.minFilter===Ur)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,ne[w.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,ne[w.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,ne[w.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,U[w.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,U[w.minFilter]),w.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Jn||w.minFilter!==ol&&w.minFilter!==Ur||w.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(L,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function it(L,w){let G=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let Z=f.get(J);Z===void 0&&(Z={},f.set(J,Z));const j=k(w);if(j!==L.__cacheKey){Z[j]===void 0&&(Z[j]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Z[j].usedTimes++;const Ae=Z[L.__cacheKey];Ae!==void 0&&(Z[L.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(w)),L.__cacheKey=j,L.__webglTexture=Z[j].texture}return G}function $e(L,w,G){return Math.floor(Math.floor(L/G)/w)}function Ye(L,w,G,J){const j=L.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,G,J,w.data);else{j.sort((he,ve)=>he.start-ve.start);let Ae=0;for(let he=1;he<j.length;he++){const ve=j[Ae],Ge=j[he],Ne=ve.start+ve.count,ge=$e(Ge.start,w.width,4),Ze=$e(ve.start,w.width,4);Ge.start<=Ne+1&&ge===Ze&&$e(Ge.start+Ge.count-1,w.width,4)===ge?ve.count=Math.max(ve.count,Ge.start+Ge.count-ve.start):(++Ae,j[Ae]=Ge)}j.length=Ae+1;const fe=r.getParameter(r.UNPACK_ROW_LENGTH),Ie=r.getParameter(r.UNPACK_SKIP_PIXELS),ye=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let he=0,ve=j.length;he<ve;he++){const Ge=j[he],Ne=Math.floor(Ge.start/4),ge=Math.ceil(Ge.count/4),Ze=Ne%w.width,O=Math.floor(Ne/w.width),ce=ge,de=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Ze,O,ce,de,G,J,w.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,fe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,ye)}}function K(L,w,G){let J=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=r.TEXTURE_3D);const Z=it(L,w),j=w.source;t.bindTexture(J,L.__webglTexture,r.TEXTURE0+G);const Ae=n.get(j);if(j.version!==Ae.__version||Z===!0){t.activeTexture(r.TEXTURE0+G);const fe=gt.getPrimaries(gt.workingColorSpace),Ie=w.colorSpace===ls?null:gt.getPrimaries(w.colorSpace),ye=w.colorSpace===ls||fe===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let he=_(w.image,!1,i.maxTextureSize);he=Me(w,he);const ve=s.convert(w.format,w.colorSpace),Ge=s.convert(w.type);let Ne=y(w.internalFormat,ve,Ge,w.colorSpace,w.isVideoTexture);Fe(J,w);let ge;const Ze=w.mipmaps,O=w.isVideoTexture!==!0,ce=Ae.__version===void 0||Z===!0,de=j.dataReady,Te=S(w,he);if(w.isDepthTexture)Ne=v(w.format===ql,w.type),ce&&(O?t.texStorage2D(r.TEXTURE_2D,1,Ne,he.width,he.height):t.texImage2D(r.TEXTURE_2D,0,Ne,he.width,he.height,0,ve,Ge,null));else if(w.isDataTexture)if(Ze.length>0){O&&ce&&t.texStorage2D(r.TEXTURE_2D,Te,Ne,Ze[0].width,Ze[0].height);for(let re=0,ee=Ze.length;re<ee;re++)ge=Ze[re],O?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,ve,Ge,ge.data):t.texImage2D(r.TEXTURE_2D,re,Ne,ge.width,ge.height,0,ve,Ge,ge.data);w.generateMipmaps=!1}else O?(ce&&t.texStorage2D(r.TEXTURE_2D,Te,Ne,he.width,he.height),de&&Ye(w,he,ve,Ge)):t.texImage2D(r.TEXTURE_2D,0,Ne,he.width,he.height,0,ve,Ge,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ne,Ze[0].width,Ze[0].height,he.depth);for(let re=0,ee=Ze.length;re<ee;re++)if(ge=Ze[re],w.format!==ki)if(ve!==null)if(O){if(de)if(w.layerUpdates.size>0){const Pe=Rg(ge.width,ge.height,w.format,w.type);for(const Xe of w.layerUpdates){const yt=ge.data.subarray(Xe*Pe/ge.data.BYTES_PER_ELEMENT,(Xe+1)*Pe/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Xe,ge.width,ge.height,1,ve,yt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,he.depth,ve,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,Ne,ge.width,ge.height,he.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?de&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,ge.width,ge.height,he.depth,ve,Ge,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,Ne,ge.width,ge.height,he.depth,0,ve,Ge,ge.data)}else{O&&ce&&t.texStorage2D(r.TEXTURE_2D,Te,Ne,Ze[0].width,Ze[0].height);for(let re=0,ee=Ze.length;re<ee;re++)ge=Ze[re],w.format!==ki?ve!==null?O?de&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,re,Ne,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ge.width,ge.height,ve,Ge,ge.data):t.texImage2D(r.TEXTURE_2D,re,Ne,ge.width,ge.height,0,ve,Ge,ge.data)}else if(w.isDataArrayTexture)if(O){if(ce&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Te,Ne,he.width,he.height,he.depth),de)if(w.layerUpdates.size>0){const re=Rg(he.width,he.height,w.format,w.type);for(const ee of w.layerUpdates){const Pe=he.data.subarray(ee*re/he.data.BYTES_PER_ELEMENT,(ee+1)*re/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ee,he.width,he.height,1,ve,Ge,Pe)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,ve,Ge,he.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,he.width,he.height,he.depth,0,ve,Ge,he.data);else if(w.isData3DTexture)O?(ce&&t.texStorage3D(r.TEXTURE_3D,Te,Ne,he.width,he.height,he.depth),de&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,ve,Ge,he.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,he.width,he.height,he.depth,0,ve,Ge,he.data);else if(w.isFramebufferTexture){if(ce)if(O)t.texStorage2D(r.TEXTURE_2D,Te,Ne,he.width,he.height);else{let re=he.width,ee=he.height;for(let Pe=0;Pe<Te;Pe++)t.texImage2D(r.TEXTURE_2D,Pe,Ne,re,ee,0,ve,Ge,null),re>>=1,ee>>=1}}else if(Ze.length>0){if(O&&ce){const re=Ue(Ze[0]);t.texStorage2D(r.TEXTURE_2D,Te,Ne,re.width,re.height)}for(let re=0,ee=Ze.length;re<ee;re++)ge=Ze[re],O?de&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ve,Ge,ge):t.texImage2D(r.TEXTURE_2D,re,Ne,ve,Ge,ge);w.generateMipmaps=!1}else if(O){if(ce){const re=Ue(he);t.texStorage2D(r.TEXTURE_2D,Te,Ne,re.width,re.height)}de&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Ge,he)}else t.texImage2D(r.TEXTURE_2D,0,Ne,ve,Ge,he);g(w)&&p(J),Ae.__version=j.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function Q(L,w,G){if(w.image.length!==6)return;const J=it(L,w),Z=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+G);const j=n.get(Z);if(Z.version!==j.__version||J===!0){t.activeTexture(r.TEXTURE0+G);const Ae=gt.getPrimaries(gt.workingColorSpace),fe=w.colorSpace===ls?null:gt.getPrimaries(w.colorSpace),Ie=w.colorSpace===ls||Ae===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const ye=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!ye&&!he?ve[ee]=_(w.image[ee],!0,i.maxCubemapSize):ve[ee]=he?w.image[ee].image:w.image[ee],ve[ee]=Me(w,ve[ee]);const Ge=ve[0],Ne=s.convert(w.format,w.colorSpace),ge=s.convert(w.type),Ze=y(w.internalFormat,Ne,ge,w.colorSpace),O=w.isVideoTexture!==!0,ce=j.__version===void 0||J===!0,de=Z.dataReady;let Te=S(w,Ge);Fe(r.TEXTURE_CUBE_MAP,w);let re;if(ye){O&&ce&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,Ze,Ge.width,Ge.height);for(let ee=0;ee<6;ee++){re=ve[ee].mipmaps;for(let Pe=0;Pe<re.length;Pe++){const Xe=re[Pe];w.format!==ki?Ne!==null?O?de&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Xe.width,Xe.height,Ne,Xe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Ze,Xe.width,Xe.height,0,Xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,0,0,Xe.width,Xe.height,Ne,ge,Xe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe,Ze,Xe.width,Xe.height,0,Ne,ge,Xe.data)}}}else{if(re=w.mipmaps,O&&ce){re.length>0&&Te++;const ee=Ue(ve[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,Ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(he){O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Ne,ge,ve[ee].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,ve[ee].width,ve[ee].height,0,Ne,ge,ve[ee].data);for(let Pe=0;Pe<re.length;Pe++){const yt=re[Pe].image[ee].image;O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,yt.width,yt.height,Ne,ge,yt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Ze,yt.width,yt.height,0,Ne,ge,yt.data)}}else{O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ne,ge,ve[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,Ne,ge,ve[ee]);for(let Pe=0;Pe<re.length;Pe++){const Xe=re[Pe];O?de&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,0,0,Ne,ge,Xe.image[ee]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Pe+1,Ze,Ne,ge,Xe.image[ee])}}}g(w)&&p(r.TEXTURE_CUBE_MAP),j.__version=Z.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function _e(L,w,G,J,Z,j){const Ae=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),Ie=y(G.internalFormat,Ae,fe,G.colorSpace),ye=n.get(w),he=n.get(G);if(he.__renderTarget=w,!ye.__hasExternalTextures){const ve=Math.max(1,w.width>>j),Ge=Math.max(1,w.height>>j);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,Ie,ve,Ge,w.depth,0,Ae,fe,null):t.texImage2D(Z,j,Ie,ve,Ge,0,Ae,fe,null)}t.bindFramebuffer(r.FRAMEBUFFER,L),ae(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Z,he.__webglTexture,0,xe(w)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Z,he.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(L,w,G){if(r.bindRenderbuffer(r.RENDERBUFFER,L),w.depthBuffer){const J=w.depthTexture,Z=J&&J.isDepthTexture?J.type:null,j=v(w.stencilBuffer,Z),Ae=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=xe(w);ae(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,fe,j,w.width,w.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,fe,j,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,j,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,L)}else{const J=w.textures;for(let Z=0;Z<J.length;Z++){const j=J[Z],Ae=s.convert(j.format,j.colorSpace),fe=s.convert(j.type),Ie=y(j.internalFormat,Ae,fe,j.colorSpace),ye=xe(w);G&&ae(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,Ie,w.width,w.height):ae(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ye,Ie,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const Z=J.__webglTexture,j=xe(w);if(w.depthTexture.format===Yl)ae(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(w.depthTexture.format===ql)ae(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ve(L){const w=n.get(L),G=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",Z)};J.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=J}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const J=L.texture.mipmaps;J&&J.length>0?Ce(w.__webglFramebuffer[0],L):Ce(w.__webglFramebuffer,L)}else if(G){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=r.createRenderbuffer(),we(w.__webglDepthbuffer[J],L,!1);else{const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,j)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),we(w.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(L,w,G){const J=n.get(L);w!==void 0&&_e(J.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ve(L)}function R(L){const w=L.texture,G=n.get(L),J=n.get(w);L.addEventListener("dispose",b);const Z=L.textures,j=L.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=w.version,o.memory.textures++),j){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)G.__webglFramebuffer[fe][Ie]=r.createFramebuffer()}else G.__webglFramebuffer[fe]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)G.__webglFramebuffer[fe]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let fe=0,Ie=Z.length;fe<Ie;fe++){const ye=n.get(Z[fe]);ye.__webglTexture===void 0&&(ye.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&ae(L)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<Z.length;fe++){const Ie=Z[fe];G.__webglColorRenderbuffer[fe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const ye=s.convert(Ie.format,Ie.colorSpace),he=s.convert(Ie.type),ve=y(Ie.internalFormat,ye,he,Ie.colorSpace,L.isXRRenderTarget===!0),Ge=xe(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,ve,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+fe,r.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),we(G.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Fe(r.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)_e(G.__webglFramebuffer[fe][Ie],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie);else _e(G.__webglFramebuffer[fe],L,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(w)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,Ie=Z.length;fe<Ie;fe++){const ye=Z[fe],he=n.get(ye);let ve=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ve=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ve,he.__webglTexture),Fe(ve,ye),_e(G.__webglFramebuffer,L,ye,r.COLOR_ATTACHMENT0+fe,ve,0),g(ye)&&p(ve)}t.unbindTexture()}else{let fe=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(fe=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(fe,J.__webglTexture),Fe(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let Ie=0;Ie<w.mipmaps.length;Ie++)_e(G.__webglFramebuffer[Ie],L,w,r.COLOR_ATTACHMENT0,fe,Ie);else _e(G.__webglFramebuffer,L,w,r.COLOR_ATTACHMENT0,fe,0);g(w)&&p(fe),t.unbindTexture()}L.depthBuffer&&Ve(L)}function te(L){const w=L.textures;for(let G=0,J=w.length;G<J;G++){const Z=w[G];if(g(Z)){const j=x(L),Ae=n.get(Z).__webglTexture;t.bindTexture(j,Ae),p(j),t.unbindTexture()}}}const le=[],oe=[];function F(L){if(L.samples>0){if(ae(L)===!1){const w=L.textures,G=L.width,J=L.height;let Z=r.COLOR_BUFFER_BIT;const j=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=n.get(L),fe=w.length>1;if(fe)for(let ye=0;ye<w.length;ye++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Ie=L.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ye=0;ye<w.length;ye++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),fe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const he=n.get(w[ye]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,he,0)}r.blitFramebuffer(0,0,G,J,0,0,G,J,Z,r.NEAREST),l===!0&&(le.length=0,oe.length=0,le.push(r.COLOR_ATTACHMENT0+ye),L.depthBuffer&&L.resolveDepthBuffer===!1&&(le.push(j),oe.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,oe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<w.length;ye++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const he=n.get(w[ye]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ye,r.TEXTURE_2D,he,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const w=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function xe(L){return Math.min(i.maxSamples,L.samples)}function ae(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ue(L){const w=o.render.frame;u.get(L)!==w&&(u.set(L,w),L.update())}function Me(L,w){const G=L.colorSpace,J=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||G!==Fn&&G!==ls&&(gt.getTransfer(G)===wt?(J!==ki||Z!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function Ue(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=W,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=ut,this.setupRenderTarget=R,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=ae}function v1(r,e){function t(n,i=ls){let s;const o=gt.getTransfer(i);if(n===xr)return r.UNSIGNED_BYTE;if(n===xp)return r.UNSIGNED_SHORT_4_4_4_4;if(n===yp)return r.UNSIGNED_SHORT_5_5_5_1;if(n===p0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===m0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===f0)return r.BYTE;if(n===d0)return r.SHORT;if(n===Wl)return r.UNSIGNED_SHORT;if(n===vp)return r.INT;if(n===po)return r.UNSIGNED_INT;if(n===Ji)return r.FLOAT;if(n===Zi)return r.HALF_FLOAT;if(n===g0)return r.ALPHA;if(n===_0)return r.RGB;if(n===ki)return r.RGBA;if(n===Yl)return r.DEPTH_COMPONENT;if(n===ql)return r.DEPTH_STENCIL;if(n===Sp)return r.RED;if(n===Mp)return r.RED_INTEGER;if(n===v0)return r.RG;if(n===Tp)return r.RG_INTEGER;if(n===Ep)return r.RGBA_INTEGER;if(n===mu||n===gu||n===_u||n===vu)if(o===wt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_u)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gu)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_u)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wf||n===Xf||n===Yf||n===qf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$f||n===jf||n===Kf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$f||n===jf)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Kf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jf||n===Zf||n===Qf||n===ed||n===td||n===nd||n===id||n===rd||n===sd||n===od||n===ad||n===ld||n===cd||n===ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qf)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ed)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===td)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===id)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===od)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ad)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ld)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ud)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hd||n===fd||n===dd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===hd)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pd||n===md||n===gd||n===_d)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===pd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===md)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_d)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xl?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class S1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new O0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new fn({vertexShader:x1,fragmentShader:y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M1 extends Oa{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null;const _=typeof XRWebGLBinding<"u",g=new S1,p={},x=t.getContextAttributes();let y=null,v=null;const S=[],E=[],b=new se;let C=null;const M=new Mn;M.viewport=new xt;const T=new Mn;T.viewport=new xt;const P=[M,T],D=new DM;let B=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Q=S[K];return Q===void 0&&(Q=new Yh,S[K]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(K){let Q=S[K];return Q===void 0&&(Q=new Yh,S[K]=Q),Q.getGripSpace()},this.getHand=function(K){let Q=S[K];return Q===void 0&&(Q=new Yh,S[K]=Q),Q.getHandSpace()};function W(K){const Q=E.indexOf(K.inputSource);if(Q===-1)return;const _e=S[Q];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",Y);for(let K=0;K<S.length;K++){const Q=E[K];Q!==null&&(E[K]=null,S[K].disconnect(Q))}B=null,k=null,g.reset();for(const K in p)delete p[K];e.setRenderTarget(y),d=null,f=null,h=null,i=null,v=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(y=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",H),i.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,we=null,Ce=null;x.depth&&(Ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=x.stencil?ql:Yl,we=x.stencil?Xl:po);const Ve={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ve),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Ei(f.textureWidth,f.textureHeight,{format:ki,type:xr,depthTexture:new U0(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const _e={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,_e),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Ei(d.framebufferWidth,d.framebufferHeight,{format:ki,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(K){for(let Q=0;Q<K.removed.length;Q++){const _e=K.removed[Q],we=E.indexOf(_e);we>=0&&(E[we]=null,S[we].disconnect(_e))}for(let Q=0;Q<K.added.length;Q++){const _e=K.added[Q];let we=E.indexOf(_e);if(we===-1){for(let Ve=0;Ve<S.length;Ve++)if(Ve>=E.length){E.push(_e),we=Ve;break}else if(E[Ve]===null){E[Ve]=_e,we=Ve;break}if(we===-1)break}const Ce=S[we];Ce&&Ce.connect(_e)}}const X=new N,ne=new N;function U(K,Q,_e){X.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(_e.matrixWorld);const we=X.distanceTo(ne),Ce=Q.projectionMatrix.elements,Ve=_e.projectionMatrix.elements,ut=Ce[14]/(Ce[10]-1),R=Ce[14]/(Ce[10]+1),te=(Ce[9]+1)/Ce[5],le=(Ce[9]-1)/Ce[5],oe=(Ce[8]-1)/Ce[0],F=(Ve[8]+1)/Ve[0],xe=ut*oe,ae=ut*F,ue=we/(-oe+F),Me=ue*-oe;if(Q.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Me),K.translateZ(ue),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ce[10]===-1)K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ue=ut+ue,L=R+ue,w=xe-Me,G=ae+(we-Me),J=te*R/L*Ue,Z=le*R/L*Ue;K.projectionMatrix.makePerspective(w,G,J,Z,Ue,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function pe(K,Q){Q===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Q.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let Q=K.near,_e=K.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),D.near=T.near=M.near=Q,D.far=T.far=M.far=_e,(B!==D.near||k!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,k=D.far),D.layers.mask=K.layers.mask|6,M.layers.mask=D.layers.mask&3,T.layers.mask=D.layers.mask&5;const we=K.parent,Ce=D.cameras;pe(D,we);for(let Ve=0;Ve<Ce.length;Ve++)pe(Ce[Ve],we);Ce.length===2?U(D,M,T):D.projectionMatrix.copy(M.projectionMatrix),Fe(K,D,we)};function Fe(K,Q,_e){_e===null?K.matrix.copy(Q.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(Q.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Q.projectionMatrix),K.projectionMatrixInverse.copy(Q.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=ya*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let it=null;function $e(K,Q){if(u=Q.getViewerPose(c||o),m=Q,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let we=!1;_e.length!==D.cameras.length&&(D.cameras.length=0,we=!0);for(let R=0;R<_e.length;R++){const te=_e[R];let le=null;if(d!==null)le=d.getViewport(te);else{const F=h.getViewSubImage(f,te);le=F.viewport,R===0&&(e.setRenderTargetTextures(v,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(v))}let oe=P[R];oe===void 0&&(oe=new Mn,oe.layers.enable(R),oe.viewport=new xt,P[R]=oe),oe.matrix.fromArray(te.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(te.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(le.x,le.y,le.width,le.height),R===0&&(D.matrix.copy(oe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),we===!0&&D.cameras.push(oe)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const R=h.getDepthInformation(_e[0]);R&&R.isValid&&R.texture&&g.init(R,i.renderState)}if(Ce&&Ce.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let R=0;R<_e.length;R++){const te=_e[R].camera;if(te){let le=p[te];le||(le=new O0,p[te]=le);const oe=h.getCameraImage(te);le.sourceTexture=oe}}}}for(let _e=0;_e<S.length;_e++){const we=E[_e],Ce=S[_e];we!==null&&Ce!==void 0&&Ce.update(we,Q,c||o)}it&&it(K,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const Ye=new Q0;Ye.setAnimationLoop($e),this.setAnimationLoop=function(K){it=K},this.dispose=function(){}}}const ks=new Qi,T1=new Je;function E1(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,A0(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),h(g,p)):p.isMeshPhongMaterial?(s(g,p),u(g,p)):p.isMeshStandardMaterial?(s(g,p),f(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(s(g,p),m(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),_(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,x,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Un&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Un&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,ks.copy(v),ks.x*=-1,ks.y*=-1,ks.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),g.envMapRotation.value.setFromMatrix4(T1.makeRotationFromEuler(ks)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Un&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const x=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function b1(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(m(x),v=u(x),i[x.id]=v,x.addEventListener("dispose",g));const S=y.program;n.updateUBOMapping(x,S);const E=e.render.frame;s[x.id]!==E&&(f(x),s[x.id]=E)}function u(x){const y=h();x.__bindingPointIndex=y;const v=r.createBuffer(),S=x.__size,E=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,S,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=i[x.id],v=x.uniforms,S=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,b=v.length;E<b;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,T=C.length;M<T;M++){const P=C[M];if(d(P,E,M,S)===!0){const D=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let W=0;W<B.length;W++){const H=B[W],Y=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,r.bufferSubData(r.UNIFORM_BUFFER,D+k,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,k),k+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,y,v,S){const E=x.value,b=y+"_"+v;if(S[b]===void 0)return typeof E=="number"||typeof E=="boolean"?S[b]=E:S[b]=E.clone(),!0;{const C=S[b];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return S[b]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function m(x){const y=x.uniforms;let v=0;const S=16;for(let b=0,C=y.length;b<C;b++){const M=Array.isArray(y[b])?y[b]:[y[b]];for(let T=0,P=M.length;T<P;T++){const D=M[T],B=Array.isArray(D.value)?D.value:[D.value];for(let k=0,W=B.length;k<W;k++){const H=B[k],Y=_(H),X=v%S,ne=X%Y.boundary,U=X+ne;v+=ne,U!==0&&S-U<Y.storage&&(v+=S-U),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=Y.storage}}}const E=v%S;return E>0&&(v+=S-E),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class w1{constructor(e={}){const{canvas:t=Zy(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ys,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=Jt;let E=0,b=0,C=null,M=-1,T=null;const P=new xt,D=new xt;let B=null;const k=new Oe(0);let W=0,H=t.width,Y=t.height,X=1,ne=null,U=null;const pe=new xt(0,0,H,Y),Fe=new xt(0,0,H,Y);let it=!1;const $e=new lh;let Ye=!1,K=!1;const Q=new Je,_e=new N,we=new xt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ut(){return C===null?X:1}let R=n;function te(A,z){return t.getContext(A,z)}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${mp}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",re,!1),R===null){const z="webgl2";if(R=te(z,A),R===null)throw te(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let le,oe,F,xe,ae,ue,Me,Ue,L,w,G,J,Z,j,Ae,fe,Ie,ye,he,ve,Ge,Ne,ge,Ze;function O(){le=new Ob(R),le.init(),Ne=new v1(R,le),oe=new Cb(R,le,e,Ne),F=new g1(R,le),oe.reversedDepthBuffer&&f&&F.buffers.depth.setReversed(!0),xe=new kb(R),ae=new i1,ue=new _1(R,le,F,ae,oe,Ne,xe),Me=new Lb(v),Ue=new Ub(v),L=new XM(R),ge=new Ab(R,L),w=new Fb(R,L,xe,ge),G=new Hb(R,w,L,xe),he=new zb(R,oe,ue),fe=new Pb(ae),J=new n1(v,Me,Ue,le,oe,ge,fe),Z=new E1(v,ae),j=new s1,Ae=new h1(le),ye=new wb(v,Me,Ue,F,G,d,l),Ie=new p1(v,G,oe),Ze=new b1(R,xe,oe,F),ve=new Rb(R,le,xe),Ge=new Bb(R,le,xe),xe.programs=J.programs,v.capabilities=oe,v.extensions=le,v.properties=ae,v.renderLists=j,v.shadowMap=Ie,v.state=F,v.info=xe}O();const ce=new M1(v,R);this.xr=ce,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const A=le.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=le.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(H,Y,!1))},this.getSize=function(A){return A.set(H,Y)},this.setSize=function(A,z,q=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=A,Y=z,t.width=Math.floor(A*X),t.height=Math.floor(z*X),q===!0&&(t.style.width=A+"px",t.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(H*X,Y*X).floor()},this.setDrawingBufferSize=function(A,z,q){H=A,Y=z,X=q,t.width=Math.floor(A*q),t.height=Math.floor(z*q),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,z,q,$){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,z,q,$),F.viewport(P.copy(pe).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,z,q,$){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,z,q,$),F.scissor(D.copy(Fe).multiplyScalar(X).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(A){F.setScissorTest(it=A)},this.setOpaqueSort=function(A){ne=A},this.setTransparentSort=function(A){U=A},this.getClearColor=function(A){return A.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,q=!0){let $=0;if(A){let V=!1;if(C!==null){const ie=C.texture.format;V=ie===Ep||ie===Tp||ie===Mp}if(V){const ie=C.texture.type,me=ie===xr||ie===po||ie===Wl||ie===Xl||ie===xp||ie===yp,Le=ye.getClearColor(),Re=ye.getClearAlpha(),We=Le.r,ze=Le.g,ke=Le.b;me?(m[0]=We,m[1]=ze,m[2]=ke,m[3]=Re,R.clearBufferuiv(R.COLOR,0,m)):(_[0]=We,_[1]=ze,_[2]=ke,_[3]=Re,R.clearBufferiv(R.COLOR,0,_))}else $|=R.COLOR_BUFFER_BIT}z&&($|=R.DEPTH_BUFFER_BIT),q&&($|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",re,!1),ye.dispose(),j.dispose(),Ae.dispose(),ae.dispose(),Me.dispose(),Ue.dispose(),G.dispose(),ge.dispose(),Ze.dispose(),J.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",tt),ce.removeEventListener("sessionend",Se),je.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=xe.autoReset,z=Ie.enabled,q=Ie.autoUpdate,$=Ie.needsUpdate,V=Ie.type;O(),xe.autoReset=A,Ie.enabled=z,Ie.autoUpdate=q,Ie.needsUpdate=$,Ie.type=V}function re(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){const z=A.target;z.removeEventListener("dispose",ee),Pe(z)}function Pe(A){Xe(A),ae.remove(A)}function Xe(A){const z=ae.get(A).programs;z!==void 0&&(z.forEach(function(q){J.releaseProgram(q)}),A.isShaderMaterial&&J.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,q,$,V,ie){z===null&&(z=Ce);const me=V.isMesh&&V.matrixWorld.determinant()<0,Le=Et(A,z,q,$,V);F.setMaterial($,me);let Re=q.index,We=1;if($.wireframe===!0){if(Re=w.getWireframeAttribute(q),Re===void 0)return;We=2}const ze=q.drawRange,ke=q.attributes.position;let rt=ze.start*We,dt=(ze.start+ze.count)*We;ie!==null&&(rt=Math.max(rt,ie.start*We),dt=Math.min(dt,(ie.start+ie.count)*We)),Re!==null?(rt=Math.max(rt,0),dt=Math.min(dt,Re.count)):ke!=null&&(rt=Math.max(rt,0),dt=Math.min(dt,ke.count));const Kt=dt-rt;if(Kt<0||Kt===1/0)return;ge.setup(V,$,Le,q,Re);let Bt,Lt=ve;if(Re!==null&&(Bt=L.get(Re),Lt=Ge,Lt.setIndex(Bt)),V.isMesh)$.wireframe===!0?(F.setLineWidth($.wireframeLinewidth*ut()),Lt.setMode(R.LINES)):Lt.setMode(R.TRIANGLES);else if(V.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),F.setLineWidth(Ke*ut()),V.isLineSegments?Lt.setMode(R.LINES):V.isLineLoop?Lt.setMode(R.LINE_LOOP):Lt.setMode(R.LINE_STRIP)}else V.isPoints?Lt.setMode(R.POINTS):V.isSprite&&Lt.setMode(R.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Jl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))Lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ke=V._multiDrawStarts,Vt=V._multiDrawCounts,St=V._multiDrawCount,li=Re?L.get(Re).bytesPerElement:1,To=ae.get($).currentProgram.getUniforms();for(let ci=0;ci<St;ci++)To.setValue(R,"_gl_DrawID",ci),Lt.render(Ke[ci]/li,Vt[ci])}else if(V.isInstancedMesh)Lt.renderInstances(rt,Kt,V.count);else if(q.isInstancedBufferGeometry){const Ke=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Vt=Math.min(q.instanceCount,Ke);Lt.renderInstances(rt,Kt,Vt)}else Lt.render(rt,Kt)};function yt(A,z,q){A.transparent===!0&&A.side===hn&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,en(A,z,q),A.side=$r,A.needsUpdate=!0,en(A,z,q),A.side=hn):en(A,z,q)}this.compile=function(A,z,q=null){q===null&&(q=A),p=Ae.get(q),p.init(z),y.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),A!==q&&A.traverseVisible(function(V){V.isLight&&V.layers.test(z.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return A.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ie=V.material;if(ie)if(Array.isArray(ie))for(let me=0;me<ie.length;me++){const Le=ie[me];yt(Le,q,V),$.add(Le)}else yt(ie,q,V),$.add(ie)}),p=y.pop(),$},this.compileAsync=function(A,z,q=null){const $=this.compile(A,z,q);return new Promise(V=>{function ie(){if($.forEach(function(me){ae.get(me).currentProgram.isReady()&&$.delete(me)}),$.size===0){V(A);return}setTimeout(ie,10)}le.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let be=null;function Be(A){be&&be(A)}function tt(){je.stop()}function Se(){je.start()}const je=new Q0;je.setAnimationLoop(Be),typeof self<"u"&&je.setContext(self),this.setAnimationLoop=function(A){be=A,ce.setAnimationLoop(A),A===null?je.stop():je.start()},ce.addEventListener("sessionstart",tt),ce.addEventListener("sessionend",Se),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(z),z=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,z,C),p=Ae.get(A,y.length),p.init(z),y.push(p),Q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$e.setFromProjectionMatrix(Q,cr,z.reversedDepth),K=this.localClippingEnabled,Ye=fe.init(this.clippingPlanes,K),g=j.get(A,x.length),g.init(),x.push(g),ce.enabled===!0&&ce.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&He(ie,z,-1/0,v.sortObjects)}He(A,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ne,U),Ve=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ve&&ye.addToRenderList(g,A),this.info.render.frame++,Ye===!0&&fe.beginShadows();const q=p.state.shadowsArray;Ie.render(q,A,z),Ye===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,V=g.transmissive;if(p.setupLights(),z.isArrayCamera){const ie=z.cameras;if(V.length>0)for(let me=0,Le=ie.length;me<Le;me++){const Re=ie[me];Qt($,V,A,Re)}Ve&&ye.render(A);for(let me=0,Le=ie.length;me<Le;me++){const Re=ie[me];et(g,A,Re,Re.viewport)}}else V.length>0&&Qt($,V,A,z),Ve&&ye.render(A),et(g,A,z);C!==null&&b===0&&(ue.updateMultisampleRenderTarget(C),ue.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,z),ge.resetDefaultState(),M=-1,T=null,y.pop(),y.length>0?(p=y[y.length-1],Ye===!0&&fe.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function He(A,z,q,$){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||$e.intersectsSprite(A)){$&&we.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Q);const me=G.update(A),Le=A.material;Le.visible&&g.push(A,me,Le,q,we.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||$e.intersectsObject(A))){const me=G.update(A),Le=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),we.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),we.copy(me.boundingSphere.center)),we.applyMatrix4(A.matrixWorld).applyMatrix4(Q)),Array.isArray(Le)){const Re=me.groups;for(let We=0,ze=Re.length;We<ze;We++){const ke=Re[We],rt=Le[ke.materialIndex];rt&&rt.visible&&g.push(A,me,rt,q,we.z,ke)}}else Le.visible&&g.push(A,me,Le,q,we.z,null)}}const ie=A.children;for(let me=0,Le=ie.length;me<Le;me++)He(ie[me],z,q,$)}function et(A,z,q,$){const V=A.opaque,ie=A.transmissive,me=A.transparent;p.setupLightsView(q),Ye===!0&&fe.setGlobalState(v.clippingPlanes,q),$&&F.viewport(P.copy($)),V.length>0&&ot(V,z,q),ie.length>0&&ot(ie,z,q),me.length>0&&ot(me,z,q),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Qt(A,z,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Ei(1,1,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float")?Zi:xr,minFilter:Ur,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ie=p.state.transmissionRenderTarget[$.id],me=$.viewport||P;ie.setSize(me.z*v.transmissionResolutionScale,me.w*v.transmissionResolutionScale);const Le=v.getRenderTarget(),Re=v.getActiveCubeFace(),We=v.getActiveMipmapLevel();v.setRenderTarget(ie),v.getClearColor(k),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Ve&&ye.render(q);const ze=v.toneMapping;v.toneMapping=ys;const ke=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),Ye===!0&&fe.setGlobalState(v.clippingPlanes,$),ot(A,q,$),ue.updateMultisampleRenderTarget(ie),ue.updateRenderTargetMipmap(ie),le.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let dt=0,Kt=z.length;dt<Kt;dt++){const Bt=z[dt],Lt=Bt.object,Ke=Bt.geometry,Vt=Bt.material,St=Bt.group;if(Vt.side===hn&&Lt.layers.test($.layers)){const li=Vt.side;Vt.side=Un,Vt.needsUpdate=!0,kt(Lt,q,$,Ke,Vt,St),Vt.side=li,Vt.needsUpdate=!0,rt=!0}}rt===!0&&(ue.updateMultisampleRenderTarget(ie),ue.updateRenderTargetMipmap(ie))}v.setRenderTarget(Le,Re,We),v.setClearColor(k,W),ke!==void 0&&($.viewport=ke),v.toneMapping=ze}function ot(A,z,q){const $=z.isScene===!0?z.overrideMaterial:null;for(let V=0,ie=A.length;V<ie;V++){const me=A[V],Le=me.object,Re=me.geometry,We=me.group;let ze=me.material;ze.allowOverride===!0&&$!==null&&(ze=$),Le.layers.test(q.layers)&&kt(Le,z,q,Re,ze,We)}}function kt(A,z,q,$,V,ie){A.onBeforeRender(v,z,q,$,V,ie),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),V.onBeforeRender(v,z,q,$,A,ie),V.transparent===!0&&V.side===hn&&V.forceSinglePass===!1?(V.side=Un,V.needsUpdate=!0,v.renderBufferDirect(q,z,$,V,A,ie),V.side=$r,V.needsUpdate=!0,v.renderBufferDirect(q,z,$,V,A,ie),V.side=hn):v.renderBufferDirect(q,z,$,V,A,ie),A.onAfterRender(v,z,q,$,V,ie)}function en(A,z,q){z.isScene!==!0&&(z=Ce);const $=ae.get(A),V=p.state.lights,ie=p.state.shadowsArray,me=V.state.version,Le=J.getParameters(A,V.state,ie,z,q),Re=J.getProgramCacheKey(Le);let We=$.programs;$.environment=A.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(A.isMeshStandardMaterial?Ue:Me).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",ee),We=new Map,$.programs=We);let ze=We.get(Re);if(ze!==void 0){if($.currentProgram===ze&&$.lightsStateVersion===me)return Pt(A,Le),ze}else Le.uniforms=J.getUniforms(A),A.onBeforeCompile(Le,v),ze=J.acquireProgram(Le,Re),We.set(Re,ze),$.uniforms=Le.uniforms;const ke=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ke.clippingPlanes=fe.uniform),Pt(A,Le),$.needsLights=Ft(A),$.lightsStateVersion=me,$.needsLights&&(ke.ambientLightColor.value=V.state.ambient,ke.lightProbe.value=V.state.probe,ke.directionalLights.value=V.state.directional,ke.directionalLightShadows.value=V.state.directionalShadow,ke.spotLights.value=V.state.spot,ke.spotLightShadows.value=V.state.spotShadow,ke.rectAreaLights.value=V.state.rectArea,ke.ltc_1.value=V.state.rectAreaLTC1,ke.ltc_2.value=V.state.rectAreaLTC2,ke.pointLights.value=V.state.point,ke.pointLightShadows.value=V.state.pointShadow,ke.hemisphereLights.value=V.state.hemi,ke.directionalShadowMap.value=V.state.directionalShadowMap,ke.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ke.spotShadowMap.value=V.state.spotShadowMap,ke.spotLightMatrix.value=V.state.spotLightMatrix,ke.spotLightMap.value=V.state.spotLightMap,ke.pointShadowMap.value=V.state.pointShadowMap,ke.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=ze,$.uniformsList=null,ze}function Ot(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=xu.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Pt(A,z){const q=ae.get(A);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Et(A,z,q,$,V){z.isScene!==!0&&(z=Ce),ue.resetTextureUnits();const ie=z.fog,me=$.isMeshStandardMaterial?z.environment:null,Le=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Fn,Re=($.isMeshStandardMaterial?Ue:Me).get($.envMap||me),We=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ze=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ke=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,dt=!!q.morphAttributes.color;let Kt=ys;$.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Kt=v.toneMapping);const Bt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Lt=Bt!==void 0?Bt.length:0,Ke=ae.get($),Vt=p.state.lights;if(Ye===!0&&(K===!0||A!==T)){const zn=A===T&&$.id===M;fe.setState($,A,zn)}let St=!1;$.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Vt.state.version||Ke.outputColorSpace!==Le||V.isBatchedMesh&&Ke.batching===!1||!V.isBatchedMesh&&Ke.batching===!0||V.isBatchedMesh&&Ke.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ke.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ke.instancing===!1||!V.isInstancedMesh&&Ke.instancing===!0||V.isSkinnedMesh&&Ke.skinning===!1||!V.isSkinnedMesh&&Ke.skinning===!0||V.isInstancedMesh&&Ke.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ke.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ke.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ke.instancingMorph===!1&&V.morphTexture!==null||Ke.envMap!==Re||$.fog===!0&&Ke.fog!==ie||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==fe.numPlanes||Ke.numIntersection!==fe.numIntersection)||Ke.vertexAlphas!==We||Ke.vertexTangents!==ze||Ke.morphTargets!==ke||Ke.morphNormals!==rt||Ke.morphColors!==dt||Ke.toneMapping!==Kt||Ke.morphTargetsCount!==Lt)&&(St=!0):(St=!0,Ke.__version=$.version);let li=Ke.currentProgram;St===!0&&(li=en($,z,V));let To=!1,ci=!1,Va=!1;const Gt=li.getUniforms(),Pi=Ke.uniforms;if(F.useProgram(li.program)&&(To=!0,ci=!0,Va=!0),$.id!==M&&(M=$.id,ci=!0),To||T!==A){F.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Gt.setValue(R,"projectionMatrix",A.projectionMatrix),Gt.setValue(R,"viewMatrix",A.matrixWorldInverse);const Zn=Gt.map.cameraPosition;Zn!==void 0&&Zn.setValue(R,_e.setFromMatrixPosition(A.matrixWorld)),oe.logarithmicDepthBuffer&&Gt.setValue(R,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Gt.setValue(R,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,ci=!0,Va=!0)}if(V.isSkinnedMesh){Gt.setOptional(R,V,"bindMatrix"),Gt.setOptional(R,V,"bindMatrixInverse");const zn=V.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Gt.setValue(R,"boneTexture",zn.boneTexture,ue))}V.isBatchedMesh&&(Gt.setOptional(R,V,"batchingTexture"),Gt.setValue(R,"batchingTexture",V._matricesTexture,ue),Gt.setOptional(R,V,"batchingIdTexture"),Gt.setValue(R,"batchingIdTexture",V._indirectTexture,ue),Gt.setOptional(R,V,"batchingColorTexture"),V._colorsTexture!==null&&Gt.setValue(R,"batchingColorTexture",V._colorsTexture,ue));const Li=q.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&he.update(V,q,li),(ci||Ke.receiveShadow!==V.receiveShadow)&&(Ke.receiveShadow=V.receiveShadow,Gt.setValue(R,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Pi.envMap.value=Re,Pi.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(Pi.envMapIntensity.value=z.environmentIntensity),ci&&(Gt.setValue(R,"toneMappingExposure",v.toneMappingExposure),Ke.needsLights&&ai(Pi,Va),ie&&$.fog===!0&&Z.refreshFogUniforms(Pi,ie),Z.refreshMaterialUniforms(Pi,$,X,Y,p.state.transmissionRenderTarget[A.id]),xu.upload(R,Ot(Ke),Pi,ue)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(xu.upload(R,Ot(Ke),Pi,ue),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Gt.setValue(R,"center",V.center),Gt.setValue(R,"modelViewMatrix",V.modelViewMatrix),Gt.setValue(R,"normalMatrix",V.normalMatrix),Gt.setValue(R,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const zn=$.uniformsGroups;for(let Zn=0,Eh=zn.length;Zn<Eh;Zn++){const Is=zn[Zn];Ze.update(Is,li),Ze.bind(Is,li)}}return li}function ai(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Ft(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,z,q){const $=ae.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),ae.get(A.texture).__webglTexture=z,ae.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){const q=ae.get(A);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const kn=R.createFramebuffer();this.setRenderTarget=function(A,z=0,q=0){C=A,E=z,b=q;let $=!0,V=null,ie=!1,me=!1;if(A){const Re=ae.get(A);if(Re.__useDefaultFramebuffer!==void 0)F.bindFramebuffer(R.FRAMEBUFFER,null),$=!1;else if(Re.__webglFramebuffer===void 0)ue.setupRenderTarget(A);else if(Re.__hasExternalTextures)ue.rebindTextures(A,ae.get(A.texture).__webglTexture,ae.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ke=A.depthTexture;if(Re.__boundDepthTexture!==ke){if(ke!==null&&ae.has(ke)&&(A.width!==ke.image.width||A.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(A)}}const We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(me=!0);const ze=ae.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?V=ze[z][q]:V=ze[z],ie=!0):A.samples>0&&ue.useMultisampledRTT(A)===!1?V=ae.get(A).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[q]:V=ze,P.copy(A.viewport),D.copy(A.scissor),B=A.scissorTest}else P.copy(pe).multiplyScalar(X).floor(),D.copy(Fe).multiplyScalar(X).floor(),B=it;if(q!==0&&(V=kn),F.bindFramebuffer(R.FRAMEBUFFER,V)&&$&&F.drawBuffers(A,V),F.viewport(P),F.scissor(D),F.setScissorTest(B),ie){const Re=ae.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,Re.__webglTexture,q)}else if(me){const Re=z;for(let We=0;We<A.textures.length;We++){const ze=ae.get(A.textures[We]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+We,ze.__webglTexture,q,Re)}}else if(A!==null&&q!==0){const Re=ae.get(A.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Re.__webglTexture,q)}M=-1},this.readRenderTargetPixels=function(A,z,q,$,V,ie,me,Le=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Re=Re[me]),Re){F.bindFramebuffer(R.FRAMEBUFFER,Re);try{const We=A.textures[Le],ze=We.format,ke=We.type;if(!oe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!oe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-$&&q>=0&&q<=A.height-V&&(A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le),R.readPixels(z,q,$,V,Ne.convert(ze),Ne.convert(ke),ie))}finally{const We=C!==null?ae.get(C).__webglFramebuffer:null;F.bindFramebuffer(R.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,z,q,$,V,ie,me,Le=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=ae.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&me!==void 0&&(Re=Re[me]),Re)if(z>=0&&z<=A.width-$&&q>=0&&q<=A.height-V){F.bindFramebuffer(R.FRAMEBUFFER,Re);const We=A.textures[Le],ze=We.format,ke=We.type;if(!oe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!oe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,rt),R.bufferData(R.PIXEL_PACK_BUFFER,ie.byteLength,R.STREAM_READ),A.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Le),R.readPixels(z,q,$,V,Ne.convert(ze),Ne.convert(ke),0);const dt=C!==null?ae.get(C).__webglFramebuffer:null;F.bindFramebuffer(R.FRAMEBUFFER,dt);const Kt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Qy(R,Kt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,rt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ie),R.deleteBuffer(rt),R.deleteSync(Kt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,q=0){const $=Math.pow(2,-q),V=Math.floor(A.image.width*$),ie=Math.floor(A.image.height*$),me=z!==null?z.x:0,Le=z!==null?z.y:0;ue.setTexture2D(A,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,me,Le,V,ie),F.unbindTexture()};const Ci=R.createFramebuffer(),ln=R.createFramebuffer();this.copyTextureToTexture=function(A,z,q=null,$=null,V=0,ie=null){ie===null&&(V!==0?(Jl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=V,V=0):ie=0);let me,Le,Re,We,ze,ke,rt,dt,Kt;const Bt=A.isCompressedTexture?A.mipmaps[ie]:A.image;if(q!==null)me=q.max.x-q.min.x,Le=q.max.y-q.min.y,Re=q.isBox3?q.max.z-q.min.z:1,We=q.min.x,ze=q.min.y,ke=q.isBox3?q.min.z:0;else{const Li=Math.pow(2,-V);me=Math.floor(Bt.width*Li),Le=Math.floor(Bt.height*Li),A.isDataArrayTexture?Re=Bt.depth:A.isData3DTexture?Re=Math.floor(Bt.depth*Li):Re=1,We=0,ze=0,ke=0}$!==null?(rt=$.x,dt=$.y,Kt=$.z):(rt=0,dt=0,Kt=0);const Lt=Ne.convert(z.format),Ke=Ne.convert(z.type);let Vt;z.isData3DTexture?(ue.setTexture3D(z,0),Vt=R.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(ue.setTexture2DArray(z,0),Vt=R.TEXTURE_2D_ARRAY):(ue.setTexture2D(z,0),Vt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,z.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,z.unpackAlignment);const St=R.getParameter(R.UNPACK_ROW_LENGTH),li=R.getParameter(R.UNPACK_IMAGE_HEIGHT),To=R.getParameter(R.UNPACK_SKIP_PIXELS),ci=R.getParameter(R.UNPACK_SKIP_ROWS),Va=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Bt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Bt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,We),R.pixelStorei(R.UNPACK_SKIP_ROWS,ze),R.pixelStorei(R.UNPACK_SKIP_IMAGES,ke);const Gt=A.isDataArrayTexture||A.isData3DTexture,Pi=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){const Li=ae.get(A),zn=ae.get(z),Zn=ae.get(Li.__renderTarget),Eh=ae.get(zn.__renderTarget);F.bindFramebuffer(R.READ_FRAMEBUFFER,Zn.__webglFramebuffer),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,Eh.__webglFramebuffer);for(let Is=0;Is<Re;Is++)Gt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(A).__webglTexture,V,ke+Is),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ae.get(z).__webglTexture,ie,Kt+Is)),R.blitFramebuffer(We,ze,me,Le,rt,dt,me,Le,R.DEPTH_BUFFER_BIT,R.NEAREST);F.bindFramebuffer(R.READ_FRAMEBUFFER,null),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(V!==0||A.isRenderTargetTexture||ae.has(A)){const Li=ae.get(A),zn=ae.get(z);F.bindFramebuffer(R.READ_FRAMEBUFFER,Ci),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,ln);for(let Zn=0;Zn<Re;Zn++)Gt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Li.__webglTexture,V,ke+Zn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Li.__webglTexture,V),Pi?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,zn.__webglTexture,ie,Kt+Zn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,zn.__webglTexture,ie),V!==0?R.blitFramebuffer(We,ze,me,Le,rt,dt,me,Le,R.COLOR_BUFFER_BIT,R.NEAREST):Pi?R.copyTexSubImage3D(Vt,ie,rt,dt,Kt+Zn,We,ze,me,Le):R.copyTexSubImage2D(Vt,ie,rt,dt,We,ze,me,Le);F.bindFramebuffer(R.READ_FRAMEBUFFER,null),F.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Pi?A.isDataTexture||A.isData3DTexture?R.texSubImage3D(Vt,ie,rt,dt,Kt,me,Le,Re,Lt,Ke,Bt.data):z.isCompressedArrayTexture?R.compressedTexSubImage3D(Vt,ie,rt,dt,Kt,me,Le,Re,Lt,Bt.data):R.texSubImage3D(Vt,ie,rt,dt,Kt,me,Le,Re,Lt,Ke,Bt):A.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ie,rt,dt,me,Le,Lt,Ke,Bt.data):A.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ie,rt,dt,Bt.width,Bt.height,Lt,Bt.data):R.texSubImage2D(R.TEXTURE_2D,ie,rt,dt,me,Le,Lt,Ke,Bt);R.pixelStorei(R.UNPACK_ROW_LENGTH,St),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,li),R.pixelStorei(R.UNPACK_SKIP_PIXELS,To),R.pixelStorei(R.UNPACK_SKIP_ROWS,ci),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Va),ie===0&&z.generateMipmaps&&R.generateMipmap(Vt),F.unbindTexture()},this.initRenderTarget=function(A){ae.get(A).__webglFramebuffer===void 0&&ue.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ue.setTextureCube(A,0):A.isData3DTexture?ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ue.setTexture2DArray(A,0):ue.setTexture2D(A,0),F.unbindTexture()},this.resetState=function(){E=0,b=0,C=null,F.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const yu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class za{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const A1=new fh(-1,1,1,-1,0,1);class R1 extends Ct{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}}const C1=new R1;class zp{constructor(e){this._mesh=new Nt(C1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,A1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rv extends za{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof fn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ma.clone(e.uniforms),this.material=new fn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new zp(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Zg extends za{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class P1 extends za{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class L1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new se);this._width=n.width,this._height=n.height,t=new Ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rv(yu),this.copyPass.material.blending=kr,this.clock=new IM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zg!==void 0&&(o instanceof Zg?n=!0:o instanceof P1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class D1 extends za{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const I1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Aa extends za{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new se(e.x,e.y):new se(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ei(s,o,{type:Zi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new Ei(s,o,{type:Zi});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Ei(s,o,{type:Zi});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}const a=I1;this.highPassUniforms=Ma.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new se(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ma.clone(yu.uniforms),this.blendMaterial=new fn({uniforms:this.copyUniforms,vertexShader:yu.vertexShader,fragmentShader:yu.fragmentShader,blending:Gl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new Nn,this._fsQuad=new zp(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new se(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Aa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Aa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new fn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new se(.5,.5)},direction:{value:new se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new fn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Aa.BlurDirectionX=new se(1,0);Aa.BlurDirectionY=new se(0,1);const Kc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class N1 extends za{constructor(){super(),this.uniforms=Ma.clone(Kc.uniforms),this.material=new cM({name:Kc.name,uniforms:this.uniforms,vertexShader:Kc.vertexShader,fragmentShader:Kc.fragmentShader}),this._fsQuad=new zp(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===r0?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===s0?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===o0?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===_p?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===l0?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===c0?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===a0&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const U1={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new se(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`};function Rd(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new Ct;let c=0;for(let u=0;u<r.length;++u){const h=r[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,u),c+=d}}if(t){let u=0;const h=[];for(let f=0;f<r.length;++f){const d=r[f].index;for(let m=0;m<d.count;++m)h.push(d.getX(m)+u);u+=r[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=Qg(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);const m=Qg(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function Qg(r){let e,t,n,i=-1,s=0;for(let c=0;c<r.length;++c){const u=r[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new pn(o,t,n);let l=0;for(let c=0;c<r.length;++c){const u=r[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,d=u.count;f<d;f++)for(let m=0;m<t;m++){const _=u.getComponent(f,m);a.setComponent(f+h,m,_)}}else o.set(u.array,l);l+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function e_(r,e){if(e===by)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===vd||e===x0){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===vd)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class O1 extends So{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new H1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new J1(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new tA(t)})}load(e,t,n,i){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Tl.extractUrlBase(e);o=Tl.resolveURL(c,this.path)}else o=Tl.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Wu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===sv){try{o[pt.KHR_BINARY_GLTF]=new nA(e)}catch(h){i&&i(h);return}s=JSON.parse(o[pt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new mA(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case pt.KHR_MATERIALS_UNLIT:o[h]=new k1;break;case pt.KHR_DRACO_MESH_COMPRESSION:o[h]=new iA(s,this.dracoLoader);break;case pt.KHR_TEXTURE_TRANSFORM:o[h]=new rA;break;case pt.KHR_MESH_QUANTIZATION:o[h]=new sA;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function F1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class B1{constructor(e){this.parser=e,this.name=pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Fn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Z0(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new CM(u),c.distance=h;break;case"spot":c=new J0(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ir(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class k1{constructor(){this.name=pt.KHR_MATERIALS_UNLIT}getMaterialType(){return Nn}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Fn),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Jt))}return Promise.all(i)}}class z1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class H1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new se(a,a)}return Promise.all(s)}}class V1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class G1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class W1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Fn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Jt)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class X1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Y1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],Fn),Promise.all(s)}}class q1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class $1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],Fn),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Jt)),Promise.all(s)}}class j1{constructor(e){this.parser=e,this.name=pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(s)}}class K1{constructor(e){this.parser=e,this.name=pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Tr}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class J1{constructor(e){this.parser=e,this.name=pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Z1{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class Q1{constructor(e){this.parser=e,this.name=pt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}}class eA{constructor(e){this.name=pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class tA{constructor(e){this.name=pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ni.TRIANGLES&&c.mode!==Ni.TRIANGLE_STRIP&&c.mode!==Ni.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const m of h){const _=new Je,g=new N,p=new Ps,x=new N(1,1,1),y=new ia(m.geometry,m.material,f);for(let v=0;v<f;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,_.compose(g,p,x));for(const v in l)if(v==="_COLOR_0"){const S=l[v];y.instanceColor=new yd(S.array,S.itemSize,S.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,l[v]);Ut.prototype.copy.call(y,m),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const sv="glTF",el=12,t_={JSON:1313821514,BIN:5130562};class nA{constructor(e){this.name=pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,el),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sv)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-el,s=new DataView(e,el);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===t_.JSON){const c=new Uint8Array(e,el+o,a);this.content=n.decode(c)}else if(l===t_.BIN){const c=el+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class iA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Cd[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Cd[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=sa[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const m in d.attributes){const _=d.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}h(d)},a,c,Fn,f)})})}}class rA{constructor(){this.name=pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class sA{constructor(){this.name=pt.KHR_MESH_QUANTIZATION}}class ov extends pc{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,m=e*c,_=m-c,g=-2*d+3*f,p=d-f,x=1-g,y=p-f+h;for(let v=0;v!==a;v++){const S=o[_+v+a],E=o[_+v+l]*u,b=o[m+v+a],C=o[m+v]*u;s[v]=x*S+y*E+g*b+p*C}return s}}const oA=new Ps;class aA extends ov{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return oA.fromArray(s).normalize().toArray(s),s}}const Ni={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},sa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},n_={9728:Jn,9729:Si,9984:h0,9985:pu,9986:ol,9987:Ur},i_={33071:cs,33648:Bu,10497:xa},hf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Cd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lA={CUBICSPLINE:void 0,LINEAR:jl,STEP:$l},ff={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cA(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new di({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$r})),r.DefaultMaterial}function zs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ir(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function uA(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;a.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=f),r.morphTargetsRelative=!0,r})}function hA(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fA(r){let e;const t=r.extensions&&r.extensions[pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+df(t.attributes):e=r.indices+":"+df(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+df(r.targets[n]);return e}function df(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Pd(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function dA(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const pA=new Je;class mA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new F1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&o<98?this.textureLoader=new bM(this.options.manager):this.textureLoader=new LM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return zs(s,a,i),ir(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[pt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(Tl.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=hf[i.type],a=sa[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new pn(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=hf[i.type],c=sa[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let _,g;if(d&&d!==h){const p=Math.floor(f/d),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(x);y||(_=new c(a,p*d,i.count*d/u),y=new P0(_,d/u),t.cache.add(x,y)),g=new Zl(y,l,f%d/u,m)}else a===null?_=new c(i.count*l):_=new c(a,f,i.count*l),g=new pn(_,l,m);if(i.sparse!==void 0){const p=hf.SCALAR,x=sa[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,S=new x(o[1],y,i.sparse.count*p),E=new c(o[2],v,i.sparse.count*l);a!==null&&(g=new pn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let b=0,C=S.length;b<C;b++){const M=S[b];if(g.setX(M,E[b*l]),l>=2&&g.setY(M,E[b*l+1]),l>=3&&g.setZ(M,E[b*l+2]),l>=4&&g.setW(M,E[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(s.samplers||{})[o.sampler]||{};return u.magFilter=n_[f.magFilter]||Si,u.minFilter=n_[f.minFilter]||Ur,u.wrapS=i_[f.wrapS]||xa,u.wrapT=i_[f.wrapT]||xa,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jn&&u.minFilter!==Si,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let m=f;t.isImageBitmapLoader===!0&&(m=function(_){const g=new dn(_);g.needsUpdate=!0,f(g)}),t.load(Tl.resolveURL(h,s.path),m,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),ir(h,o),h.userData.mimeType=o.mimeType||dA(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[pt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Lp,Gi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ch,Gi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return di}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[pt.KHR_MATERIALS_UNLIT]){const h=i[pt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,s,t))}else{const h=s.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Fn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Jt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=hn);const u=s.alphaMode||ff.OPAQUE;if(u===ff.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===ff.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Nn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new se(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;a.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&o!==Nn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Nn){const h=s.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],Fn)}return s.emissiveTexture!==void 0&&o!==Nn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Jt)),Promise.all(c).then(function(){const h=new o(a);return s.name&&(h.name=s.name),ir(h,s),t.associations.set(h,{materials:e}),s.extensions&&zs(i,h,s),h})}createUniqueName(e){const t=Rt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return r_(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=fA(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[pt.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=r_(new Ct,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?cA(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,m=u.length;d<m;d++){const _=u[d],g=o[d];let p;const x=c[d];if(g.mode===Ni.TRIANGLES||g.mode===Ni.TRIANGLE_STRIP||g.mode===Ni.TRIANGLE_FAN||g.mode===void 0)p=s.isSkinnedMesh===!0?new bS(_,x):new Nt(_,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Ni.TRIANGLE_STRIP?p.geometry=e_(p.geometry,x0):g.mode===Ni.TRIANGLE_FAN&&(p.geometry=e_(p.geometry,vd));else if(g.mode===Ni.LINES)p=new N0(_,x);else if(g.mode===Ni.LINE_STRIP)p=new uh(_,x);else if(g.mode===Ni.LINE_LOOP)p=new LS(_,x);else if(g.mode===Ni.POINTS)p=new Dp(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&hA(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ir(p,s),g.extensions&&zs(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let d=0,m=h.length;d<m;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return s.extensions&&zs(i,h[0],s),h[0];const f=new ur;s.extensions&&zs(i,f,s),t.associations.set(f,{meshes:e});for(let d=0,m=h.length;d<m;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Mn(vt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new fh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ir(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new Je;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Pp(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],m=i.samplers[d.sampler],_=d.target,g=_.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],m=h[2],_=h[3],g=h[4],p=[];for(let y=0,v=f.length;y<v;y++){const S=f[y],E=d[y],b=m[y],C=_[y],M=g[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const T=n._createAnimationTracks(S,E,b,C,M);if(T)for(let P=0;P<T.length;P++)p.push(T[P])}const x=new vM(s,void 0,p);return ir(x,i),x})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,pA)});for(let d=0,m=h.length;d<m;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new D0:c.length>1?u=new ur:c.length===1?u=c[0]:u=new Ut,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=o),ir(u,s),s.extensions&&zs(n,u,s),s.matrix!==void 0){const h=new Je;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ur;n.name&&(s.name=i.createUniqueName(n.name)),ir(s,n),n.extensions&&zs(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Gi||f instanceof dn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const o=[],a=e.name?e.name:e.uuid,l=[];is[s.path]===is.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(is[s.path]){case is.weights:c=Ea;break;case is.rotation:c=ba;break;case is.translation:case is.scale:c=wa;break;default:switch(n.itemSize){case 1:c=Ea;break;case 2:case 3:default:c=wa;break}break}const u=i.interpolation!==void 0?lA[i.interpolation]:jl,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const m=new c(l[f]+"."+is[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pd(t.constructor),i=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ba?aA:ov;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function gA(r,e,t){const n=e.attributes,i=new er;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=Pd(sa[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,m=f.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),f.normalized){const _=Pd(sa[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Mr;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function r_(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=Cd[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return gt.workingColorSpace!==Fn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${gt.workingColorSpace}" not supported.`),ir(r,e),gA(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?uA(r,e.targets,t):r})}const pf=new WeakMap;class _A extends So{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new Wu(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Jt,n).catch(n)}decodeDracoFile(e,t,n,i,s=Fn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(pf.has(e)){const l=pf.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[s]={resolve:c,reject:u},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),pf.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Ct;e.index&&t.setIndex(new pn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new pn(o,a);s==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Jt)return;const n=new Oe;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i),gt.colorSpaceToWorking(n,Jt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Wu(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=vA.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function vA(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(u){r.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),m=d.attributes.map(_=>_.array.buffer);d.index&&m.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},m)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const m=a.GetEncodedGeometryType(l);if(m===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(m===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const _={index:null,attributes:[]};for(const g in u){const p=self[h[g]];let x,y;if(c.useUniqueIDs)y=u[g],x=a.GetAttributeByUniqueId(f,y);else{if(y=a.GetAttributeId(f,o[u[g]]),y===-1)continue;x=a.GetAttribute(f,y)}const v=i(o,a,f,g,p,x);g==="color"&&(v.vertexColorSpace=c.vertexColorSpace),_.attributes.push(v)}return m===o.TRIANGULAR_MESH&&(_.index=n(o,a,f)),o.destroy(f),_}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),m=l.num_points()*f,_=m*u.BYTES_PER_ELEMENT,g=s(o,u),p=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,h,g,_,p);const x=new u(o.HEAPF32.buffer,p,m).slice();return o._free(p),{name:c,array:x,itemSize:f}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function xA(){return new _A().setDecoderPath("assets/draco/").setDecoderConfig({type:"wasm"}).setWorkerLimit(2)}const Ld={"Al Bidda Tower":"assets/landmarks/Al-Bidda-Tower.glb","Burj Al Mana":"assets/landmarks/Burj-AlMana.glb","Tornado Tower":"assets/landmarks/tornado_tower_low.glb","Doha Tower":"assets/landmarks/doha_tower_low.glb","World Trade Center":"assets/landmarks/world_trade_center_tower_low.glb"},yA=r=>r in Ld,SA=xA(),MA=new O1().setDRACOLoader(SA);function TA(r,e,t,n,i){const s=r.clone(),o=/glass/i.test(r.name);"transmission"in s&&(s.transmission=0),o&&(s.roughness=.24,s.metalness=.48);const a=r.emissiveIntensity||1,l=n==="Tornado Tower",c=n==="Al Bidda Tower",u=n==="Burj Al Mana";return(i==="diagrid-low"||i==="junction-low")&&(s.color.set(1061242),s.metalness=.35,s.roughness=.38),i==="almana-frame"&&(s.color.set(3303864),s.metalness=.35,s.roughness=.38),i==="wtc-crown"&&(s.color.set(1457548),s.metalness=.45,s.roughness=.32),i==="wtc-spire"&&s.color.set(9981973),i==="wtc-dots"&&s.color.multiplyScalar(.08),(i==="doha-screen"||i==="doha-floors"||i==="doha-spire")&&(s.color.set(i==="doha-screen"?16157205:i==="doha-spire"?15264229:7885100),i==="doha-screen"&&s.color.multiplyScalar(.35),s.metalness=.25,s.roughness=.55),l&&/Window/.test(r.name)&&s.color.multiplyScalar(.12),l&&/CrownLight/.test(r.name)&&(s.emissive.setRGB(.015,.12,1),s.emissiveIntensity=1),s.onBeforeCompile=h=>{h.uniforms.uNight=e,h.vertexShader=`varying vec3 vBuilding; varying vec3 vBuildingNormal;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vBuilding=position; vBuildingNormal=normal;`),h.fragmentShader=`uniform float uNight; varying vec3 vBuilding; varying vec3 vBuildingNormal;
      float officeHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
      `+h.fragmentShader,h.fragmentShader=h.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      totalEmissiveRadiance *= uNight * ${Math.min(1,1.35/a).toFixed(4)};
      ${l?`totalEmissiveRadiance *= ${/Window/.test(r.name)?".045":".35"};`:""}
      ${i==="diagrid"?"totalEmissiveRadiance += vec3(.005,.11,.8)*uNight;":""}
      ${i==="diagrid-low"?"totalEmissiveRadiance += vec3(.018,.16,1.8)*uNight;":""}
      ${i==="junction-low"?"totalEmissiveRadiance += vec3(.055,.42,3.2)*uNight;":""}
      ${i==="almana-frame"?"totalEmissiveRadiance += vec3(.025,.25,1.7)*uNight;":""}
      ${i==="wtc-crown"?"totalEmissiveRadiance += vec3(.006,.55,1.8)*uNight;":""}
      ${i==="wtc-spire"?"totalEmissiveRadiance += vec3(1.1,.22,.008)*uNight;":""}
      ${i==="wtc-dots"?`
      vec3 wtcFace=normalize(vBuildingNormal);
      float wtcAlong=abs(wtcFace.x)>abs(wtcFace.z)?vBuilding.z:vBuilding.x;
      vec2 dotCell=fract(vec2(wtcAlong/3.2,vBuilding.y/4.25))-.5;
      float dotAA=max(length(fwidth(vec2(wtcAlong/3.2,vBuilding.y/4.25))),.025);
      float dotDistance=length(dotCell);
      float dot=1.-smoothstep(.055,.105+dotAA*.35,dotDistance);
      float dotHalo=1.-smoothstep(.10,.25+dotAA*.2,dotDistance);
      totalEmissiveRadiance+=(vec3(.008,.25,5.)*dot+vec3(.002,.04,.7)*dotHalo)*(1.-smoothstep(.65,.9,abs(wtcFace.y)))*uNight;
      `:""}
      ${i==="doha-screen"?"float screen=smoothstep(.08,.3,max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b))); float floorBand=1.-smoothstep(.04,.15,abs(fract(vBuilding.y/4.25)-.5)); totalEmissiveRadiance += (vec3(.18,.05,.002)+vec3(1.35,.37,.011)*screen+vec3(.1,.028,.001)*screen*floorBand)*uNight;":""}
      ${i==="doha-floors"?"totalEmissiveRadiance += vec3(.65,.15,.01)*uNight;":""}
      ${i==="doha-spire"?"totalEmissiveRadiance += vec3(2.8,3.,3.1)*uNight;":""}
      ${o?`
      vec3 n=normalize(vBuildingNormal);
      float along=abs(n.x)>abs(n.z)?vBuilding.z:vBuilding.x;
      vec2 cells=vec2(along/2.6,vBuilding.y/4.05);
      vec2 grid=fract(cells), aa=max(fwidth(cells),vec2(.015));
      vec2 pane=smoothstep(vec2(.12),vec2(.12)+aa,grid)*(1.-smoothstep(vec2(.86)-aa,vec2(.86),grid));
      float room=officeHash(floor(cells/vec2(2.,1.))+${t.toFixed(3)});
      float floorUse=officeHash(vec2(floor(cells.y),${t.toFixed(3)}));
      float occupied=step(.48,room)*step(.13,floorUse);
      vec3 lamp=mix(vec3(1.,.66,.34),vec3(.64,.79,1.),smoothstep(.48,.83,room));
      float blinds=mix(.56,1.,step(.25,fract(vBuilding.y*2.4)));
      float mask=pane.x*pane.y*(1.-smoothstep(.65,.9,abs(n.y)));
      diffuseColor.rgb*=mix(.56,1.,mask);
      totalEmissiveRadiance+=lamp*occupied*mask*blinds*uNight*(.35+room*1.35)*${l?".065":c?".25":n==="World Trade Center"?".08":"1."};
      ${u?"totalEmissiveRadiance+=vec3(.012,.09,.65)*uNight*(1.-mask*.65);":""}
      ${c?`
      float band=1.-smoothstep(.065,.065+max(fwidth(vBuilding.y/4.9),.025),abs(fract(vBuilding.y/4.9)-.5));
      float bay=step(.52,fract((along+vBuilding.y*.055)/16.));
      float zone=step(12.,vBuilding.y)*(1.-step(208.,vBuilding.y));
      totalEmissiveRadiance+=vec3(1.8,.005,.48)*band*bay*zone*uNight*(1.-smoothstep(.65,.9,abs(n.y)));
      `:""}
      `:""}
    `)},s.customProgramCacheKey=()=>`night-${o}-${t}-${a}-${n}-${i}`,s}async function EA(r,e,t,n,i){let s;try{s=await MA.loadAsync(Ld[r])}catch(p){throw new Error(`The ${r} model could not be loaded. Reload to retry.`,{cause:p})}const o=s.scene;o.updateMatrixWorld(!0);const a=new er().setFromObject(o),l=a.getSize(new N),c=a.getCenter(new N),u=t/l.y,h=new Je().makeScale(u,u,u).multiply(new Je().makeTranslation(-c.x,-a.min.y,-c.z)),f=new Map,d=new Map;o.traverse(p=>{if(!p.isMesh)return;const x=Array.isArray(p.material)?p.material:[p.material],y=r==="Tornado Tower"&&/^Diagrid_/.test(p.name)?"diagrid":r==="Tornado Tower"&&p.name==="Tornado_1165"?"diagrid-low":r==="Tornado Tower"&&p.name==="Tornado_1269"?"junction-low":r==="Burj Al Mana"&&/^Sail \| (continuous silver perimeter|fine star subdivision braces|white triangular structural lattice)/.test(p.name)?"almana-frame":r==="Doha Tower"&&p.name==="Doha_493"?"doha-screen":r==="Doha Tower"&&p.name==="Doha_1245"?"doha-floors":r==="Doha Tower"&&p.name==="Doha_506"?"doha-spire":"facade";if(y==="diagrid"){p.geometry.computeBoundingBox();const E=p.geometry.boundingBox,b=E.getSize(new N),C=["x","y","z"].sort((M,T)=>b[T]-b[M])[0];for(const M of["min","max"]){const T=E.getCenter(new N);T[C]=E[M][C],T.applyMatrix4(p.matrixWorld).applyMatrix4(h);const P=new N(T.x,0,T.z).normalize();T.addScaledVector(P,.25),T.y=vt.clamp(T.y,.35,t-.35),d.set(T.toArray().map(D=>Math.round(D*1.5)).join(","),T)}}const v=p.geometry.index?p.geometry.toNonIndexed():p.geometry.clone();v.applyMatrix4(p.matrixWorld).applyMatrix4(h);const S=v.groups.length?v.groups:[{start:0,count:v.attributes.position.count,materialIndex:0}];for(const E of S){const b=x[E.materialIndex],C=r==="World Trade Center"&&/round_shape_mtl\.001/.test(b.name)?"wtc-crown":r==="World Trade Center"&&/GOLD_SIMPLE/.test(b.name)?"wtc-spire":r==="World Trade Center"&&/(gray_full_coverage|wall_with_line|Balcony|glass_texture_mtl|round_shape_mtl_0)/.test(b.name)?"wtc-dots":y,M=b.uuid+C;f.has(M)||f.set(M,{material:b,role:C,geometries:[]});const T=new Ct;for(const P of["position","normal","uv","uv1"]){const D=v.getAttribute(P);D?T.setAttribute(P,new pn(D.array.slice(E.start*D.itemSize,(E.start+E.count)*D.itemSize),D.itemSize)):(P==="uv"||P==="uv1")&&T.setAttribute(P,new nt(new Float32Array(E.count*2),2))}f.get(M).geometries.push(T)}v.dispose()});const m=new ur;if(m.name=r,m.position.set(e.x,2.2,e.y),r==="Burj Al Mana"){let p=0,x=0,y=0;for(const v of n){const S=v.x-e.x,E=v.y-e.y;p+=S*S,x+=E*E,y+=S*E}m.rotation.y=Math.PI/2-.5*Math.atan2(2*y,p-x)}let _=0;for(const{material:p,role:x,geometries:y}of f.values()){const v=Rd(y);y.forEach(E=>E.dispose());const S=new Nt(v,TA(p,i,r.length*17.3,r,x));S.castShadow=!0,S.receiveShadow=!0,m.add(S),_+=v.attributes.position.count/3,p.dispose()}if(o.traverse(p=>{p.geometry?.dispose()}),d.size){const p=new Nn({color:new Oe(.06,.42,9)});p.onBeforeCompile=S=>{S.uniforms.uNight=i,S.fragmentShader=`uniform float uNight;
`+S.fragmentShader,S.fragmentShader=S.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=uNight;`)};const x=new ia(new Vr(.28,6,4),p,d.size),y=new Je;let v=0;for(const S of d.values())x.setMatrixAt(v++,y.makeTranslation(S.x,S.y,S.z));x.name="Blue diagrid junction lights",m.add(x)}if(r==="World Trade Center"){const p=new Nn({color:new Oe(.006,.16,3.2)});p.onBeforeCompile=v=>{v.uniforms.uNight=i,v.fragmentShader=`uniform float uNight;
`+v.fragmentShader,v.fragmentShader=v.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=uNight;`)};const x=new ia(new Vr(.5,6,4),p,48),y=new Je;for(let v=0;v<48;v++){const S=v*Math.PI*2/48;x.setMatrixAt(v,y.makeTranslation(1.45+Math.cos(S)*18.65,194.5,-2.15+Math.sin(S)*18.65))}x.name="World Trade Center blue crown dots",m.add(x)}const g=[];for(const p of[-1,1]){const x=new J0(r==="Burj Al Mana"?3309055:r==="Al Bidda Tower"?15477133:r==="Doha Tower"?16157205:1461247,r==="Doha Tower"?1e3:38e3,300,.32,.75,2);x.position.set(p*l.x*u*.65,5,l.z*u*.65),x.target.position.set(p*l.x*u*.18,t*.58,0),m.add(x,x.target),g.push(x)}return m.userData={source:Ld[r],height:t,scale:u,triangles:_,orientation:m.rotation.y,washLights:g},m}const s_=[51.53,25.32],cl=r=>Array.isArray(r)?new se(r[0]/10,r[1]/10):new se((r.lon-s_[0])*100647,(s_[1]-r.lat)*111195),mi=r=>{const e=Math.sin(r*127.1+311.7)*43758.5453;return e-Math.floor(e)};let bA;const av=()=>bA??=fetch("data/west-bay-osm.json").then(r=>{if(!r.ok)throw new Error("The local West Bay geography could not be loaded.");return r.json()});function tl(r,e,t=0,n=8624035){r.index&&(r=r.toNonIndexed());const i=r.attributes.position.count,s=new Oe(n);r.setAttribute("aSeed",new nt(new Float32Array(i).fill(e),1)),r.setAttribute("aStyle",new nt(new Float32Array(i).fill(t),1));const o=new Float32Array(i*3);for(let a=0;a<i;a++)s.toArray(o,a*3);return r.setAttribute("color",new nt(o,3)),r}function wA(r){const e=new di({color:12110551,metalness:.65,roughness:.3,vertexColors:!0,side:hn});return e.onBeforeCompile=t=>{t.uniforms.uLight=r,t.vertexShader=`attribute float aSeed; attribute float aStyle; varying vec2 vFacade; varying float vSeed; varying float vStyle;
`+t.vertexShader,t.vertexShader=t.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vFacade = uv; vSeed = aSeed; vStyle = aStyle;`),t.fragmentShader=`uniform float uLight; varying vec2 vFacade; varying float vSeed; varying float vStyle;
      float hash21(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float lineAA(float d, float w) { return 1.0-smoothstep(w,w+max(fwidth(d),.002),d); }
      `+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      vec2 cell = vFacade / vec2(2.25, 4.0);
      vec2 grid = fract(cell);
      float win = smoothstep(.09,.17,grid.x)*(1.0-smoothstep(.82,.91,grid.x))*smoothstep(.18,.27,grid.y)*(1.0-smoothstep(.78,.87,grid.y));
      float roof = step(-.5,vFacade.y);
      float office = hash21(floor(cell / vec2(3.0, 1.0))+vSeed*321.0);
      float occupied = step(.48+vSeed*.24, office);
      float bank = step(.24,hash21(vec2(floor(cell.x/7.0)+vSeed,floor(cell.y/3.0))));
      float floorLine = lineAA(min(grid.y,1.0-grid.y),.045);
      float mullion = lineAA(min(grid.x,1.0-grid.x),.035);
      diffuseColor.rgb *= mix(.68,1.0,win) * (1.0-.25*max(floorLine,mullion));
      diffuseColor.rgb *= .85 + .15*hash21(floor(cell)+vSeed);
    `),t.fragmentShader=t.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      float switchOn = smoothstep(vSeed*.34,vSeed*.34+.45,uLight);
      vec3 lampColor = mix(vec3(1.0,.56,.22),vec3(.52,.70,1.0),step(.54,hash21(floor(cell/vec2(2.,1.))+vSeed+72.)));
      lampColor = mix(lampColor,vec3(1.0,.86,.62),hash21(vec2(floor(cell.y),vSeed))*.4);
      totalEmissiveRadiance += lampColor * occupied * bank * win * roof * switchOn * (.08 + hash21(floor(cell/vec2(3.0,1.0))+vSeed)*.60);
      totalEmissiveRadiance += vec3(1.,.43,.12)*win*roof*switchOn*(1.-smoothstep(5.,12.,vFacade.y))*.45;
      // Doha Tower's dense mashrabiya screen, and Tornado's structural diagrid.
      float diagonal = min(abs(fract(cell.x*.24+cell.y*.20)-.5),abs(fract(cell.x*.24-cell.y*.20)-.5));
      if(vStyle>.5 && vStyle<1.5) {
        float fineDiagonal = min(abs(fract(cell.x*.6+cell.y*.45)-.5),abs(fract(cell.x*.6-cell.y*.45)-.5));
        float lace = max(lineAA(diagonal,.012),lineAA(fineDiagonal,.016)*.55);
        diffuseColor.rgb = mix(diffuseColor.rgb,vec3(.39,.27,.13),lace);
        totalEmissiveRadiance = vec3(1.0,.31,.025)*switchOn*(lace*.80+.26);
      }
      if(vStyle>1.5 && vStyle<2.5) {
        float lattice = lineAA(diagonal,.018);
        diffuseColor.rgb = mix(diffuseColor.rgb,vec3(.36,.40,.42),lattice);
        totalEmissiveRadiance += vec3(.11,.47,.68)*switchOn*lattice*.43;
      }
      if(vStyle>2.5 && vStyle<3.5) {
        float fin = lineAA(abs(fract(vFacade.x/12.0)-.5),.055);
        totalEmissiveRadiance += vec3(.44,.59,.82)*fin*switchOn*.55;
      }
      if(vStyle>3.5 && vStyle<4.5) {
        vec2 ledCell=fract(vFacade/vec2(3.2,4.25))-.5;
        float footprint=max(length(fwidth(vFacade/vec2(3.2,4.25))),.025);
        float led=(1.-smoothstep(.075,.075+footprint,length(ledCell)))*pow(.075/(.075+footprint*.5),2.);
        float floorStrip=lineAA(abs(fract(vFacade.y/4.25)-.5),.018);
        totalEmissiveRadiance=totalEmissiveRadiance*.32+vec3(.018,.34,4.5)*led*roof*switchOn;
        totalEmissiveRadiance+=vec3(.006,.035,.20)*floorStrip*roof*switchOn;
      }
    `)},e}function AA(r,e,t=2.1){const n=r.slice();if(n[0].distanceTo(n.at(-1))<.01&&n.pop(),n.length<3)return null;const i=[],s=[],o=(c,u)=>{i.push(...c),s.push(...u)};let a=0;for(let c=0;c<n.length;c++){const u=n[c],h=n[(c+1)%n.length],f=a+u.distanceTo(h),d=[[u.x,t,u.y],[h.x,t,h.y],[h.x,e,h.y],[u.x,e,u.y]],m=[[a,t],[f,t],[f,e],[a,e]];for(const _ of[0,1,2,0,2,3])o(d[_],m[_]);a=f}for(const c of ra.triangulateShape(n,[]))for(const u of c)o([n[u].x,e,n[u].y],[n[u].x,-10]);const l=new Ct;return l.setAttribute("position",new nt(i,3)),l.setAttribute("uv",new nt(s,2)),l.computeVertexNormals(),l}function Jc(r,e,t,n,i){const s=[],o=[],a=[];for(let c=0;c<=n;c++){const u=c/n;for(let h=0;h<=t;h++){const f=h/t*Math.PI*2,[d,m]=i(f,u);if(s.push(r.x+d,2.2+u*e,r.y+m),o.push(h/t*190,u*e),c<n&&h<t){const _=c*(t+1)+h;a.push(_,_+t+1,_+1,_+1,_+t+1,_+t+2)}}}const l=new Ct;return l.setAttribute("position",new nt(s,3)),l.setAttribute("uv",new nt(o,2)),l.setIndex(a),l.computeVertexNormals(),l}function nl(r,e,t){const n=[];for(let s=0;s<r.length-1;s++){const o=r[s],a=r[s+1],l=o.distanceTo(a);if(l<.01)continue;const c=(a.x-o.x)/l*e/2,u=(a.y-o.y)/l*e/2,h=[[o.x-u,t,o.y+c],[o.x+u,t,o.y-c],[a.x+u,t,a.y-c],[a.x-u,t,a.y+c]];for(const f of[0,1,2,0,2,3])n.push(...h[f])}const i=new Ct;return i.setAttribute("position",new nt(n,3)),i.computeVertexNormals(),i}async function RA(r,e){const t=await av(),n=t.elements.filter(R=>R.tags.building||R.tags["building:part"]),i=[],s=[],o=[],a=[],l=[],c=[],u=[],h=[],f=[],d=[],m=[],_=[],g=[],p=[],x=[],y=new Oe(16758636),v=new di({color:7899030,roughness:.46,metalness:.65}),S=new Nn({color:16437401,toneMapped:!1}),E=wA(e),b=R=>{R.index&&(R=R.toNonIndexed()),R.deleteAttribute("uv"),s.push(R)},C=(R,te,le,oe,F,xe)=>new Hr(oe,F,xe).translate(R,te,le);for(const R of n){const te=R.tags["name:en"]||R.tags.name||"";if(!/^(Doha Tower|Tornado Tower|Burj Al Mana|World Trade Center|Palm Tower [12]|Al Bidda Tower|Sheraton Doha|Navigation Tower)$/.test(te))continue;const le=R.geometry.map(cl);le[0].distanceTo(le.at(-1))<.01&&le.pop();const oe=le.reduce((ue,Me)=>ue.add(Me),new se).multiplyScalar(1/le.length);p.push({center:oe,radius:te==="Sheraton Doha"?65:25,id:R.id});const F=mi(R.id);let xe,ae=te==="Doha Tower"?238:parseFloat(R.tags.height)||64;if(yA(te))x.push(EA(te,oe,ae,le,e).then(ue=>(r.add(ue),ue)));else if(te==="Doha Tower")ae=238,xe=Jc(oe,221,80,55,(ue,Me)=>{const Ue=22.7*(Me<.78?1:Math.sqrt(Math.max(.001,1-Math.pow((Me-.78)/.22,2))));return[Math.cos(ue)*Ue,Math.sin(ue)*Ue]}),i.push(tl(xe,F,1,12099713)),b(new yl(.13,1.4,19,8).translate(oe.x,231.5,oe.y));else if(te.startsWith("Palm Tower")){xe=Jc(oe,245,6,32,(ue,Me)=>{const Ue=27*(.88+.12*Math.sin(Me*Math.PI));return[Math.cos(ue+.3)*Ue,Math.sin(ue+.3)*Ue]}),i.push(tl(xe,F,3,7704223));for(let ue=0;ue<6;ue++){const Me=ue/6*Math.PI*2+.3;b(C(oe.x+Math.cos(Me)*26,128,oe.y+Math.sin(Me)*26,1.1,252,1.1))}}else if(te==="Sheraton Doha"){ae=64,xe=Jc(oe,64,3,14,(ue,Me)=>[Math.cos(ue)*(85*(1-Me)+9),Math.sin(ue)*(85*(1-Me)+9)]),i.push(tl(xe,F,0,13285278));for(let ue=0;ue<14;ue++){const Me=ue/14,Ue=[];for(let L=0;L<=3;L++){const w=L/3*Math.PI*2;Ue.push(new se(oe.x+Math.cos(w)*(85*(1-Me)+10),oe.y+Math.sin(w)*(85*(1-Me)+10)))}o.push(nl(Ue,.65,3+ue*4.57))}}else xe=Jc(oe,ae,48,45,(ue,Me)=>{const Ue=24*(1-.35*Me);return[Math.cos(ue)*Ue+18*Math.sin(Me*Math.PI/2),Math.sin(ue)*Ue*1.28]}),i.push(tl(xe,F,0,7637399));g.push({name:te,height:ae,position:[oe.x,ae/2,oe.y],osmId:R.id})}let M=0,T=0;for(const R of n){const te=R.geometry.map(cl);if(te.length<4)continue;const le=te.reduce((Ue,L)=>Ue.add(L),new se).multiplyScalar(1/te.length);if(p.some(Ue=>Ue.id===R.id||le.distanceTo(Ue.center)<Ue.radius))continue;const oe=mi(R.id),F=R.tags;let xe=parseFloat(F.height);xe?M++:(xe=(parseFloat(F["building:levels"])||(/house|residential|villa/.test(F.building)?2:3))*3.6,T++);const ae=Math.max(2.2,parseFloat(F.min_height)||(+F["building:min_level"]||0)*3.6);xe=Math.max(xe,ae+1);const ue=AA(te,xe,ae);if(!ue)continue;const Me=xe>70?[6521745,9544879,7642278,8816531,10135207]:[12367010,10328978,11709088];if(i.push(tl(ue,oe,0,Me[Math.floor(oe*Me.length)])),xe>50){const Ue=new GM().setFromPoints(te),L=Ue.getSize(new se);b(C(le.x,xe+1.5,le.y,Math.min(L.x*.3,13),3,Math.min(L.y*.3,10)));for(let w=0;w<3;w++)b(C(le.x+(w-1)*4,xe+.7,le.y+L.y*.2,2.5,1.4,3.3));xe>140&&(h.push(le.x,xe+5,le.y),f.push(2.4,.13,.06))}}const P=Rd(i);i.forEach(R=>R.dispose());const D=new Nt(P,E);D.castShadow=!0,D.receiveShadow=!0,r.add(D);const B=t.elements.filter(R=>R.tags.natural==="coastline").map(R=>R.geometry.map(cl)),k=[];for(;B.length;){let R=B.pop(),te=!0;for(;te;){te=!1;for(let le=B.length-1;le>=0;le--){const oe=B[le];R.at(-1).distanceTo(oe[0])<.05?(R.push(...oe.slice(1)),B.splice(le,1),te=!0):oe.at(-1).distanceTo(R[0])<.05&&(R=[...oe.slice(0,-1),...R],B.splice(le,1),te=!0)}}k.push(R)}const W=new di({color:3620157,roughness:1,side:hn});for(const R of k){const le=R[0].distanceTo(R.at(-1))<.05?R:[...R,new se(-1e4,R.at(-1).y),new se(-1e4,R[0].y)],oe=new Td(le.map(xe=>new se(xe.x,-xe.y))),F=new Gu(oe);F.rotateX(-Math.PI/2),F.translate(0,1.4,0),r.add(new Nt(F,W)),l.push(nl(R,5,1.65)),o.push(nl(R,.25,2.2));for(let xe=0;xe<R.length-1;xe++){const ae=R[xe],ue=R[xe+1],Me=Math.floor(ae.distanceTo(ue)/26);for(let Ue=0;Ue<Me;Ue++){const L=ae.clone().lerp(ue,Ue/Math.max(1,Me));h.push(L.x,3.2,L.y),y.clone().multiplyScalar(2.3).toArray(f,f.length);const w=ue.clone().sub(ae).normalize(),G=new se(w.y,-w.x);L.y<1250&&L.y>-1700&&(_.push(L.clone().addScaledVector(G,10)),m.push({x:L.x,y:L.y,scale:8}))}}}for(const R of t.elements){const te=R.geometry.map(cl);if(R.tags.leisure==="park"&&te.length>3){const ae=new Gu(new Td(te.map(ue=>new se(ue.x,-ue.y))));ae.rotateX(-Math.PI/2),ae.translate(0,1.6,0),c.push(ae)}const le=R.tags.highway;if(!le)continue;const oe=/^(primary|secondary|tertiary|trunk)(|_link)$/.test(le);if(!(oe||/^(residential|service|unclassified)$/.test(le)))continue;const xe=(parseFloat(R.tags.lanes)||(oe?2:1))*3.3;if(a.push(nl(te,xe,1.9)),oe){l.push(nl(te,xe+2.5,1.8)),te.length>2&&d.push(te);let ae=0;for(let ue=0;ue<te.length-1;ue++){const Me=te[ue],Ue=te[ue+1],L=Me.distanceTo(Ue);if(L<.1)continue;const w=Ue.clone().sub(Me).normalize(),G=new se(-w.y,w.x);for(let J=ae;J<L;J+=36){const Z=Me.clone().addScaledVector(w,J).addScaledVector(G,xe*.5+1.2),j=new yl(.13,.2,8,4).translate(Z.x,5.6,Z.y);u.push(j),h.push(Z.x,9.6,Z.y),y.clone().multiplyScalar(2).toArray(f,f.length),m.push({x:Z.x-G.x*xe*.3,y:Z.y-G.y*xe*.3,scale:13}),mi(ue+Z.x)>.66&&Z.y<1600&&Z.y>-1800&&_.push(Z.clone().addScaledVector(G,4))}ae=(ae-L)%36,ae<0&&(ae+=36)}}}const H=(R,te)=>{if(!R.length)return;const le=R.map(F=>F.index?F.toNonIndexed():F),oe=Rd(le);oe&&r.add(new Nt(oe,te)),R.forEach(F=>F.dispose())};H(a,new di({color:1317923,roughness:1,side:hn})),H(l,new di({color:7106668,roughness:.93,side:hn})),H(c,new di({color:2308912,roughness:1,side:hn})),H(u,v),H(s,v),H(o,S);const Y=new Ct;Y.setAttribute("position",new nt(h,3)),Y.setAttribute("color",new nt(f,3));const X=new fn({uniforms:{uLight:e},vertexShader:"attribute vec3 color; varying vec3 vColor; varying float vDistance; void main(){vColor=color;vec4 p=modelViewMatrix*vec4(position,1.);vDistance=-p.z;gl_PointSize=clamp(4800./max(1.,-p.z),2.2,14.);gl_Position=projectionMatrix*p;}",fragmentShader:"uniform float uLight;varying vec3 vColor;varying float vDistance;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float a=exp(-d*d*5.);gl_FragColor=vec4(vColor*uLight*exp(-vDistance*.00011),a);}",transparent:!0,depthWrite:!1,blending:Gl,toneMapped:!1});r.add(new Dp(Y,X));const ne=new fn({uniforms:{uLight:e},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float uLight;void main(){float d=length(vUv-.5)*2.;if(d>1.)discard;float falloff=pow(1.-d*d,3.);gl_FragColor=vec4(vec3(.70,.41,.16)*uLight,falloff*.18*uLight);}",transparent:!0,depthWrite:!1,blending:Gl,side:hn}),U=new ia(new Ls(1,1).rotateX(-Math.PI/2),ne,m.length),pe=new Ut;m.forEach((R,te)=>{pe.position.set(R.x,2.02,R.y),pe.scale.setScalar(R.scale*2),pe.updateMatrix(),U.setMatrixAt(te,pe.matrix)}),r.add(U);const Fe=[],it=[];for(let R=0;R<_.length;R++){const te=_[R],le=6.5+mi(R)*3.5;Fe.push(new yl(.16,.33,le,5).translate(te.x,2+le/2,te.y));for(let oe=0;oe<9;oe++){const F=oe/9*Math.PI*2+mi(R),xe=[];for(let ue=0;ue<5;ue++){const Me=ue/4,Ue=Me*3.9,L=2+le+Math.sin(Me*Math.PI)*1.6-Me*.8,w=Math.sin(Me*Math.PI)*.46;xe.push(te.x+Math.cos(F)*Ue-Math.sin(F)*w,L,te.y+Math.sin(F)*Ue+Math.cos(F)*w,te.x+Math.cos(F)*Ue+Math.sin(F)*w,L,te.y+Math.sin(F)*Ue-Math.cos(F)*w)}const ae=new Ct;ae.setAttribute("position",new nt(xe,3)),ae.setIndex([0,1,2,1,3,2,2,3,4,3,5,4,4,5,6,5,7,6,6,7,8,7,9,8]),ae.computeVertexNormals(),it.push(ae)}}H(Fe,new di({color:6313028,roughness:1})),H(it,new di({color:4084802,roughness:.9,side:hn}));const $e=d.filter((R,te)=>te%5===0&&R.length>2).slice(0,100),Ye=new ia(new Hr(1.7,.75,4.3),new di({color:10528426,roughness:.34,metalness:.45}),$e.length),K=new ia(new Hr(1.2,.16,.15),S,$e.length);r.add(Ye,K);const Q=$e.map(R=>new Up(R.map(te=>new N(te.x,2.5,te.y)))),_e=Q.map(R=>R.getLength()),we=new Ut,Ce=new N,Ve=new N,ut=await Promise.all(x);return{trafficView:Q.find((R,te)=>_e[te]>60&&_e[te]<150)?.getPointAt(.5)||new N(-260,2,360),landmarks:g,models:ut,stats:{features:n.length,measured:M,estimated:T,landmarks:g.length,modelLandmarks:ut.length,modelTriangles:ut.reduce((R,te)=>R+te.userData.triangles,0)},getModelStats(){return ut.map(R=>({name:R.name,meshes:R.children.filter(te=>te.isMesh).length,bounds:new er().setFromObject(R).getSize(new N).toArray(),position:R.position.toArray(),height:R.userData.height}))},update(R){for(const te of ut)for(const le of te.userData.washLights)le.intensity=(te.name==="Doha Tower"?1e3:38e3)*e.value;S.color.setRGB(1,.67,.34).multiplyScalar(.04+e.value*2.2);for(let te=0;te<Q.length;te++){const le=(mi(te)*.98+R*9/Math.max(1,_e[te]))%1;Q[te].getPointAt(le,Ce),Q[te].getTangentAt(le,Ve),we.position.copy(Ce),we.rotation.set(0,Math.atan2(Ve.x,Ve.z),0),we.updateMatrix(),Ye.setMatrixAt(te,we.matrix),we.position.addScaledVector(Ve,2.2),we.updateMatrix(),K.setMatrixAt(te,we.matrix)}Ye.instanceMatrix.needsUpdate=!0,K.instanceMatrix.needsUpdate=!0}}}class ph extends Nt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Mn;const n=this,i=t.color!==void 0?new Oe(t.color):new Oe(8355711),s=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||ph.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,u=new as,h=new N,f=new N,d=new N,m=new Je,_=new N(0,0,-1),g=new xt,p=new N,x=new N,y=new xt,v=new Je,S=this.camera,E=new Ei(s,o,{samples:c,type:Zi}),b=new fn({name:l.name!==void 0?l.name:"unspecified",uniforms:Ma.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});b.uniforms.tDiffuse.value=E.texture,b.uniforms.color.value=i,b.uniforms.textureMatrix.value=v,this.material=b,this.onBeforeRender=function(C,M,T){if(f.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(T.matrixWorld),m.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(m),p.subVectors(f,d),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(f),m.extractRotation(T.matrixWorld),_.set(0,0,-1),_.applyMatrix4(m),_.add(d),x.subVectors(f,_),x.reflect(h).negate(),x.add(f),S.position.copy(p),S.up.set(0,1,0),S.up.applyMatrix4(m),S.up.reflect(h),S.lookAt(x),S.far=T.far,S.updateMatrixWorld(),S.projectionMatrix.copy(T.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(S.projectionMatrix),v.multiply(S.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,f),u.applyMatrix4(S.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const D=S.projectionMatrix;y.x=(Math.sign(g.x)+D.elements[8])/D.elements[0],y.y=(Math.sign(g.y)+D.elements[9])/D.elements[5],y.z=-1,y.w=(1+D.elements[10])/D.elements[14],g.multiplyScalar(2/g.dot(y)),D.elements[2]=g.x,D.elements[6]=g.y,D.elements[10]=g.z+1-a,D.elements[14]=g.w,n.visible=!1;const B=C.getRenderTarget(),k=C.xr.enabled,W=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(E),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(M,S),C.xr.enabled=k,C.shadowMap.autoUpdate=W,C.setRenderTarget(B);const H=T.viewport;H!==void 0&&C.state.viewport(H),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}ph.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const CA="varying vec3 vPosition;void main(){vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",PA=`
uniform float uLight;varying vec3 vPosition;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}
void main(){
 vec3 dir=normalize(vPosition);float h=max(0.,dir.y);
 vec3 zenith=vec3(.006,.008,.019);vec3 horizon=vec3(.025,.028,.044);
 float haze=exp(-h*9.0);vec3 c=mix(zenith,horizon,haze);
 float west=pow(max(0.,dot(normalize(vec2(dir.x,dir.z)),normalize(vec2(-1.,.2)))),5.);
 c+=vec3(.025,.018,.014)*west*exp(-h*15.);
 vec2 p=dir.xz/(.16+abs(dir.y))*2.4;
 float cloud=noise(p)*.55+noise(p*2.1)*.27+noise(p*4.2)*.13;
 float streak=smoothstep(.49,.81,cloud)*smoothstep(.005,.10,h)*(1.-smoothstep(.25,.8,h));
 c=mix(c,c*.7,streak*.4);
 c*=mix(.07,1.,uLight);
 gl_FragColor=vec4(c,1.);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;function LA(r,e,t){const n=new fn({uniforms:{uLight:t},vertexShader:CA,fragmentShader:PA,side:Un,depthWrite:!1}),i=new Nt(new Vr(16e3,128,64),n);i.frustumCulled=!1,r.add(i);const s=new Cp,o=n.clone();o.uniforms.uLight={value:1},s.add(new Nt(new Vr(200,32,16),o));const a=new Nt(new Vr(160,32,16),new Nn({color:3424853,side:Un}));a.scale.y=.08,s.add(a);for(let _=0;_<64;_++){const g=_/64*Math.PI*2,p=120,x=4+mi(_+710)*25,y=new Nt(new Ls(2+mi(_+812)*5,x),new Nn({color:new Oe().setRGB(.25+mi(_)*.4,.28+mi(_+1)*.3,.3+mi(_+2)*.35),side:hn}));y.position.set(Math.cos(g)*p,x*.5-4,Math.sin(g)*p),y.lookAt(0,x*.5-4,0),s.add(y)}const l=new wd(e),c=l.fromScene(s,.035);r.environment=c.texture,r.environmentIntensity=.7,l.dispose(),s.traverse(_=>{_.geometry?.dispose(),_.material&&_.material.dispose()});const u=[];for(let _=0;_<40;_++){const g=mi(_+37)*Math.PI*2,p=.3+mi(_+803)*.65,x=Math.sqrt(1-p*p)*12e3;u.push(Math.cos(g)*x,p*12e3,Math.sin(g)*x)}const h=new Ct;h.setAttribute("position",new nt(u,3));const f=new Lp({color:7573681,size:8,sizeAttenuation:!0,transparent:!0,opacity:.4,depthWrite:!1});r.add(new Dp(h,f));const d=new wM(9549280,3289131,.7);r.add(d);const m=new Z0(9416410,1.6);return m.position.set(-1200,1800,800),r.add(m),m.castShadow=!0,m.shadow.mapSize.set(2048,2048),m.shadow.camera.left=-1200,m.shadow.camera.right=1200,m.shadow.camera.top=1100,m.shadow.camera.bottom=-1100,m.shadow.camera.near=100,m.shadow.camera.far=4500,m.shadow.normalBias=1.2,m.shadow.bias=-15e-5,r.fog=new Rp(1383210,16e-5),{update(){d.intensity=.06+t.value*.32,m.intensity=.03+t.value*.58,r.environmentIntensity=.06+t.value*.64,f.opacity=t.value*.07},dispose(){c.dispose()}}}function DA(r,e){const t={uniforms:{color:{value:new Oe(1586759)},tDiffuse:{value:null},textureMatrix:{value:new Je},uTime:{value:0},uLight:e},vertexShader:"uniform mat4 textureMatrix;varying vec4 vReflection;varying vec3 vWorld;void main(){vReflection=textureMatrix*vec4(position,1.);vWorld=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uTime;uniform float uLight;varying vec4 vReflection;varying vec3 vWorld;
    void main(){
      vec3 eye=normalize(cameraPosition-vWorld);
      float d=length(cameraPosition-vWorld);
      vec2 p=vWorld.xz;
      float a=sin(p.x*.067+p.y*.043+uTime*.64),b=sin(p.x*.029-p.y*.11-uTime*.47),c=sin(p.x*.25+p.y*.15+uTime*.92);
      vec2 ripple=vec2(a+b*.45,b+c*.23);
      vec2 uv=vReflection.xy/vReflection.w;
      vec2 offset=vec2(ripple.x*.0018,ripple.y*.004)*clamp(1100./d,.4,2.);
      vec3 refl=vec3(0.);float weights=0.;
      for(int i=-4;i<=4;i++){
        float fi=float(i),w=exp(-fi*fi*.16);
        refl+=texture2D(tDiffuse,uv+offset+vec2(fi*.0005,fi*.007)*clamp(1300./d,.45,1.8)).rgb*w;weights+=w;
      }
      refl/=weights;
      float fresnel=.20+.64*pow(1.-max(0.,eye.y),4.);
      vec3 water=vec3(.008,.022,.032)*(.2+uLight*.8);
      float wave=(a*b*.5+.5);
      float glint=.88+.12*sin(p.y*.73+sin(p.x*.13)+uTime*.4);
      vec3 col=mix(water,refl*.88*glint,fresnel);
      col+=vec3(.004,.007,.010)*wave*uLight*exp(-d*.00023);
      col=mix(col,vec3(.018,.034,.049)*uLight,1.-exp(-d*.000032));
      gl_FragColor=vec4(col,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`},n=new ph(new Ls(35e3,35e3),{textureWidth:1024,textureHeight:512,multisample:0,clipBias:.003,shader:t});return n.rotation.x=-Math.PI/2,n.position.y=.3,r.add(n),n.material.uniforms.uLight=e,{mesh:n,update(i){n.material.uniforms.uTime.value=i},resize(i,s){n.getRenderTarget().setSize(i,s)}}}const Su=new N(1050,12,2200),Mu=new N(-203.628,160,78.452),IA=Su.clone().lerp(Mu,1-150/Math.hypot(Mu.x-Su.x,Mu.z-Su.z));class NA extends tr{getPoint(e,t=new N){t.copy(Su).lerp(IA,e);const n=vt.smoothstep(e,.05,.78),i=vt.smoothstep(e,.78,1);return t.y=12+388*n-220*i,t}}const lv=new NA;lv.arcLengthDivisions=1200;function Hp(r,e,t){const n=vt.smoothstep(r,0,1);lv.getPointAt(n,e),t.copy(Mu)}function Lr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function cv(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var bi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nc={duration:.5,overwrite:!1,delay:0},Vp,bn,Ht,zi=1e8,It=1/zi,Dd=Math.PI*2,UA=Dd/4,OA=0,uv=Math.sqrt,FA=Math.cos,BA=Math.sin,Sn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},jr=function(e){return typeof e=="number"},Gp=function(e){return typeof e>"u"},yr=function(e){return typeof e=="object"},ti=function(e){return e!==!1},Wp=function(){return typeof window<"u"},Zc=function(e){return Zt(e)||Sn(e)},hv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},On=Array.isArray,kA=/random\([^)]+\)/g,zA=/,\s*/g,o_=/(?:-?\.?\d|\.)+/gi,fv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Zo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dv=/[+-]=-?[.\d]+/,HA=/[^,'"\[\]\s]+/gi,VA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,rr,Id,Xp,Ai={},Xu={},pv,mv=function(e){return(Xu=Ra(e,Ai))&&si},Yp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ic=function(e,t){return!t&&console.warn(e)},gv=function(e,t){return e&&(Ai[e]=t)&&Xu&&(Xu[e]=t)||Ai},rc=function(){return 0},GA={suppressEvents:!0,isStart:!0,kill:!1},Tu={suppressEvents:!0,kill:!1},WA={suppressEvents:!0},qp={},Ss=[],Nd={},_v,gi={},gf={},a_=30,Eu=[],$p="",jp=function(e){var t=e[0],n,i;if(yr(t)||Zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Eu.length;i--&&!Eu[i].targetTest(t););n=Eu[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new kv(e[i],n)))||e.splice(i,1);return e},oo=function(e){return e._gsap||jp(Hi(e))[0]._gsap},vv=function(e,t,n){return(n=e[t])&&Zt(n)?e[t]():Gp(n)&&e.getAttribute&&e.getAttribute(t)||n},ni=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},oa=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},XA=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Yu=function(){var e=Ss.length,t=Ss.slice(0),n,i;for(Nd={},Ss.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Kp=function(e){return!!(e._initted||e._startAt||e.add)},xv=function(e,t,n,i){Ss.length&&!bn&&Yu(),e.render(t,n,!!(bn&&t<0&&Kp(e))),Ss.length&&!bn&&Yu()},yv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(HA).length<2?t:Sn(e)?e.trim():e},Sv=function(e){return e},Ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},YA=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ra=function(e,t){for(var n in t)e[n]=t[n];return e},l_=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=yr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},qu=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},El=function(e){var t=e.parent||qt,n=e.keyframes?YA(On(e.keyframes)):Ri;if(ti(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},qA=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Mv=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},mh=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Es=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ao=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},$A=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ud=function(e,t,n,i){return e._startAt&&(bn?e._startAt.revert(Tu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},jA=function r(e){return!e||e._ts&&r(e.parent)},c_=function(e){return e._repeat?Ca(e._tTime,e=e.duration()+e._rDelay)*e:0},Ca=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},$u=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},gh=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||It)||0))},_h=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),gh(e),n._dirty||ao(n,e)),e},Tv=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=$u(e.rawTime(),t),(!t._dur||mc(0,t.totalDuration(),n)-t._tTime>It)&&t.render(n,!0)),ao(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-It}},ar=function(e,t,n,i){return t.parent&&Es(t),t._start=Xt((jr(n)?n:n||e!==qt?Ii(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Mv(e,t,"_first","_last",e._sort?"_start":0),Od(t)||(e._recent=t),i||Tv(e,t),e._ts<0&&_h(e,e._tTime),e},Ev=function(e,t){return(Ai.ScrollTrigger||Yp("scrollTrigger",t))&&Ai.ScrollTrigger.create(t,e)},bv=function(e,t,n,i,s){if(Zp(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_v!==xi.frame)return Ss.push(e),e._lazy=[s,i],1},KA=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Od=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},JA=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&KA(e)&&!(!e._initted&&Od(e))||(e._ts<0||e._dp._ts<0)&&!Od(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=mc(0,e._tDur,t),u=Ca(l,a),e._yoyo&&u&1&&(o=1-o),u!==Ca(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||bn||i||e._zTime===It||!t&&e._zTime){if(!e._initted&&bv(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?It:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ud(e,t,n,!0),e._onUpdate&&!n&&Mi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Mi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Es(e,1),!n&&!bn&&(Mi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ZA=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Pa=function(e,t,n,i){var s=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Xt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&_h(e,e._tTime=e._tDur*a),e.parent&&gh(e),n||ao(e.parent,e),e},u_=function(e){return e instanceof ei?ao(e):Pa(e,e._dur)},QA={_start:0,endTime:rc,totalDuration:rc},Ii=function r(e,t,n){var i=e.labels,s=e._recent||QA,o=e.duration()>=zi?s.endTime(!1):e._dur,a,l,c;return Sn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(On(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},bl=function(e,t,n){var i=jr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ti(l.vars.inherit)&&l.parent;o.immediateRender=ti(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new on(t[0],o,t[s+1])},Ds=function(e,t){return e||e===0?t(e):t},mc=function(e,t,n){return n<e?e:n>t?t:n},Ln=function(e,t){return!Sn(e)||!(t=VA.exec(e))?"":t[1]},eR=function(e,t,n){return Ds(n,function(i){return mc(e,t,i)})},Fd=[].slice,wv=function(e,t){return e&&yr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yr(e[0]))&&!e.nodeType&&e!==rr},tR=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Sn(i)&&!t||wv(i,1)?(s=n).push.apply(s,Hi(i)):n.push(i)})||n},Hi=function(e,t,n){return Ht&&!t&&Ht.selector?Ht.selector(e):Sn(e)&&!n&&(Id||!La())?Fd.call((t||Xp).querySelectorAll(e),0):On(e)?tR(e,n):wv(e)?Fd.call(e,0):e?[e]:[]},Bd=function(e){return e=Hi(e)[0]||ic("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Hi(t,n.querySelectorAll?n:n===e?ic("Invalid scope")||Xp.createElement("div"):e)}},Av=function(e){return e.sort(function(){return .5-Math.random()})},Rv=function(e){if(Zt(e))return e;var t=yr(e)?e:{each:e},n=lo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return Sn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,m){var _=(m||t).length,g=o[_],p,x,y,v,S,E,b,C,M;if(!g){if(M=t.grid==="auto"?0:(t.grid||[1,zi])[1],!M){for(b=-zi;b<(b=m[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(g=o[_]=[],p=l?Math.min(M,_)*u-.5:i%M,x=M===zi?0:l?_*h/M-.5:i/M|0,b=0,C=zi,E=0;E<_;E++)y=E%M-p,v=x-(E/M|0),g[E]=S=c?Math.abs(c==="y"?v:y):uv(y*y+v*v),S>b&&(b=S),S<C&&(C=S);i==="random"&&Av(g),g.max=b-C,g.min=C,g.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),g.b=_<0?s-_:s,g.u=Ln(t.amount||t.each)||0,n=n&&_<0?pR(n):n}return _=(g[f]-g.min)/g.max||0,Xt(g.b+(n?n(_):_)*g.v)+g.u}},kd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(jr(n)?0:Ln(n))}},Cv=function(e,t){var n=On(e),i,s;return!n&&yr(e)&&(i=n=e.radius||zi,e.values?(e=Hi(e.values),(s=!jr(e[0]))&&(i*=i)):e=kd(e.increment)),Ds(t,n?Zt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=zi,u=0,h=e.length,f,d;h--;)s?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,s||u===o||jr(o)?u:u+Ln(o)}:kd(e))},Pv=function(e,t,n,i){return Ds(On(e)?!t:n===!0?!!(n=0):!i,function(){return On(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},nR=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},iR=function(e,t){return function(n){return e(parseFloat(n))+(t||Ln(n))}},rR=function(e,t,n){return Dv(e,t,0,1,n)},Lv=function(e,t,n){return Ds(n,function(i){return e[~~t(i)]})},sR=function r(e,t,n){var i=t-e;return On(e)?Lv(e,r(0,e.length),t):Ds(n,function(s){return(i+(s-e)%i)%i+e})},oR=function r(e,t,n){var i=t-e,s=i*2;return On(e)?Lv(e,r(0,e.length-1),t):Ds(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},sc=function(e){return e.replace(kA,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(zA);return Pv(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Dv=function(e,t,n,i,s){var o=t-e,a=i-n;return Ds(s,function(l){return n+((l-e)/o*a||0)})},aR=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Sn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(On(e)&&!On(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(f,~~m);return u[_](m-_)},n=t}else i||(e=Ra(On(e)?[]:{},e));if(!u){for(l in t)Jp.call(a,e,l,"get",t[l]);s=function(m){return tm(m,a)||(o?e.p:e)}}}return Ds(n,s)},h_=function(e,t,n){var i=e.labels,s=zi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Mi=function(e,t,n){var i=e.vars,s=i[t],o=Ht,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Ss.length&&Yu(),a&&(Ht=a),u=l?s.apply(c,l):s.call(c),Ht=o,u},ul=function(e){return Es(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&Mi(e,"onInterrupt"),e},Qo,Iv=[],Nv=function(e){if(e)if(e=!e.name&&e.default||e,Wp()||e.headless){var t=e.name,n=Zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:rc,render:tm,add:Jp,kill:ER,modifier:TR,rawVars:0},o={targetTest:0,get:0,getSetter:em,aliases:{},register:0};if(La(),e!==i){if(gi[t])return;Ri(i,Ri(qu(e,s),o)),Ra(i.prototype,Ra(s,qu(e,o))),gi[i.prop=t]=i,e.targetTest&&(Eu.push(i),qp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}gv(t,i),e.register&&e.register(si,i,ii)}else Iv.push(e)},Dt=255,hl={aqua:[0,Dt,Dt],lime:[0,Dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Dt],navy:[0,0,128],white:[Dt,Dt,Dt],olive:[128,128,0],yellow:[Dt,Dt,0],orange:[Dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Dt,0,0],pink:[Dt,192,203],cyan:[0,Dt,Dt],transparent:[Dt,Dt,Dt,0]},_f=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Dt+.5|0},Uv=function(e,t,n){var i=e?jr(e)?[e>>16,e>>8&Dt,e&Dt]:0:hl.black,s,o,a,l,c,u,h,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),hl[e])i=hl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Dt,i&Dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Dt,e&Dt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(o_),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=_f(l+1/3,s,o),i[1]=_f(l,s,o),i[2]=_f(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(fv),n&&i.length<4&&(i[3]=1),i}else i=e.match(o_)||hl.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/Dt,o=i[1]/Dt,a=i[2]/Dt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Ov=function(e){var t=[],n=[],i=-1;return e.split(Ms).forEach(function(s){var o=s.match(Zo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},f_=function(e,t,n){var i="",s=(e+i).match(Ms),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Uv(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Ov(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ms,"1").split(Zo),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ms),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Ms=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in hl)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),lR=/hsl[a]?\(/,Fv=function(e){var t=e.join(" "),n;if(Ms.lastIndex=0,Ms.test(t))return n=lR.test(t),e[1]=f_(e[1],n),e[0]=f_(e[0],n,Ov(e[1])),!0},oc,xi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function _(g){var p=r()-i,x=g===!0,y,v,S,E;if((p>e||p<0)&&(n+=p-t),i+=p,S=i-n,y=S-o,(y>0||x)&&(E=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=y+(y>=s?4:s-y),v=1),x||(l=c(_)),v)for(d=0;d<a.length;d++)a[d](S,f,E,g)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(g){return f/(1e3/(g||60))},wake:function(){pv&&(!Id&&Wp()&&(rr=Id=window,Xp=rr.document||{},Ai.gsap=si,(rr.gsapVersions||(rr.gsapVersions=[])).push(si.version),mv(Xu||rr.GreenSockGlobals||!rr.gsap&&rr||{}),Iv.forEach(Nv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(g){return setTimeout(g,o-h.time*1e3+1|0)},oc=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),oc=0,c=rc},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=h.time*1e3+s},add:function(g,p,x){var y=p?function(v,S,E,b){g(v,S,E,b),h.remove(y)}:g;return h.remove(g),a[x?"unshift":"push"](y),La(),y},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),La=function(){return!oc&&xi.wake()},_t={},cR=/^[\d.\-M][\d.\-,\s]/,uR=/["']/g,hR=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(uR,"").trim():+c,i=l.substr(a+1).trim();return t},fR=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dR=function(e){var t=(e+"").split("("),n=_t[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hR(t[1])]:fR(e).split(",").map(yv)):_t._CE&&cR.test(e)?_t._CE("",e):n},pR=function(e){return function(t){return 1-e(1-t)}},lo=function(e,t){return e&&(Zt(e)?e:_t[e]||dR(e))||t},Mo=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return ni(e,function(a){_t[a]=Ai[a]=s,_t[o=a.toLowerCase()]=n;for(var l in s)_t[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=_t[a+"."+l]=s[l]}),s},Bv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vf=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Dd*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*BA((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Bv(a);return s=Dd/s,l.config=function(c,u){return r(e,c,u)},l},xf=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Bv(n);return i.config=function(s){return r(e,s)},i};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Mo(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});_t.Linear.easeNone=_t.none=_t.Linear.easeIn;Mo("Elastic",vf("in"),vf("out"),vf());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Mo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Mo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Mo("Circ",function(r){return-(uv(1-r*r)-1)});Mo("Sine",function(r){return r===1?1:-FA(r*UA)+1});Mo("Back",xf("in"),xf("out"),xf());_t.SteppedEase=_t.steps=Ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-It;return function(a){return((i*mc(0,o,a)|0)+s)*n}}};nc.ease=_t["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $p+=r+","+r+"Params,"});var kv=function(e,t){this.id=OA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vv,this.set=t?t.getSetter:em},ac=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Pa(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),oc||xi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Pa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(La(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(_h(this,n),!s._dp||s.parent||Tv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===It||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xv(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+c_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+c_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ca(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-It?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?$u(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-It?0:this._rts,this.totalTime(mc(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),gh(this),$A(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(La(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==It&&(this._tTime-=It)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Xt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ar(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$u(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=WA);var i=bn;return bn=n,Kp(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,u_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,u_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Ii(this,n),ti(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ti(i)),this._dur||(this._zTime=-It),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-It:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-It,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-It)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Zt(n)?n:Sv,l=function(){var u=i.then;i.then=null,s&&s(),Zt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ul(this)},r})();Ri(ac.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-It,_prom:0,_ps:!1,_rts:1});var ei=(function(r){cv(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ti(n.sortChildren),qt&&ar(n.parent||qt,Lr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ev(Lr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return bl(0,arguments,this),this},t.from=function(i,s,o){return bl(1,arguments,this),this},t.fromTo=function(i,s,o,a){return bl(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,El(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new on(i,s,Ii(this,o),1),this},t.call=function(i,s,o){return ar(this,on.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new on(i,o,Ii(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,El(o).immediateRender=ti(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,El(a).immediateRender=ti(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Xt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,_,g,p,x,y,v,S,E,b;if(this!==qt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,v=this._start,y=this._ts,p=!y,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(f=Xt(u%g),u===l?(_=this._repeat,f=c):(S=Xt(u/g),_=~~S,_&&_===S&&(f=c,_--),f>c&&(f=c)),S=Ca(this._tTime,g),!a&&this._tTime&&S!==_&&this._tTime-S*g-this._dur<=0&&(S=_),E&&_&1&&(f=c-f,b=1),_!==S&&!this._lock){var C=E&&S&1,M=C===(E&&_&1);if(_<S&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(b?0:Xt(_*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Mi(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,S=_),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=ZA(this,Xt(a),Xt(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!S&&(Mi(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=-It);break}}d=m}else{d=this._last;for(var T=i<0?i:f;d;){if(m=d._prev,(d._act||T<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||bn&&Kp(d)),f!==this._time||!this._ts&&!p){x=0,m&&(u+=this._zTime=T?-It:It);break}}d=m}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-It)._zTime=f>=a?1:-1,this._ts))return this._start=v,gh(this),this.render(i,s,o);this._onUpdate&&!s&&Mi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Es(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Mi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(jr(s)||(s=Ii(this,s,i)),!(i instanceof ac)){if(On(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Sn(i))return this.addLabel(i,s);if(Zt(i))i=on.delayedCall(0,i);else return this}return this!==i?ar(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-zi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof on?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Sn(i)?this.removeLabel(i):Zt(i)?this.killTweensOf(i):(i.parent===this&&mh(this,i),i===this._recent&&(this._recent=this._last),ao(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(xi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=on.delayedCall(0,s||rc,o);return a.data="isPause",this._hasPause=1,ar(this,a,Ii(this,i))},t.removePause=function(i){var s=this._first;for(i=Ii(this,i);s;)s._start===i&&s.data==="isPause"&&Es(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)us!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Hi(i),l=this._first,c=jr(s),u;l;)l instanceof on?XA(l._targets,a)&&(c?(!us||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Ii(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=on.to(o,Ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||It,onStart:function(){if(o.pause(),!d){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==g&&Pa(m,g,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Ri({startAt:{time:Ii(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),h_(this,Ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),h_(this,Ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+It)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Xt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ao(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ao(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=zi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ar(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Xt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Pa(o,o===qt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(qt._ts&&(xv(qt,$u(i,qt)),_v=xi.frame),xi.frame>=a_){a_+=bi.autoSleep||120;var s=qt._first;if((!s||!s._ts)&&bi.autoSleep&&xi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xi.sleep()}}},e})(ac);Ri(ei.prototype,{_lock:0,_hasPause:0,_forcing:0});var mR=function(e,t,n,i,s,o,a){var l=new ii(this._pt,e,t,0,1,Xv,null,s),c=0,u=0,h,f,d,m,_,g,p,x;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=sc(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(mf)||[];h=mf.exec(i);)m=h[0],_=i.substring(c,h.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(g=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:g,c:m.charAt(1)==="="?oa(g,m)-g:parseFloat(m)-g,m:d&&d<4?Math.round:0},c=mf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(dv.test(i)||p)&&(l.e=0),this._pt=l,l},Jp=function(e,t,n,i,s,o,a,l,c,u){Zt(i)&&(i=i(s||0,e,o));var h=e[t],f=n!=="get"?n:Zt(h)?c?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Zt(h)?c?yR:Gv:Qp,m;if(Sn(i)&&(~i.indexOf("random(")&&(i=sc(i)),i.charAt(1)==="="&&(m=oa(f,i)+(Ln(f)||0),(m||m===0)&&(i=m))),!u||f!==i||zd)return!isNaN(f*i)&&i!==""?(m=new ii(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?MR:Wv,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!h&&!(t in e)&&Yp(t,i),mR.call(this,e,t,f,i,d,l||bi.stringFilter,c))},gR=function(e,t,n,i,s){if(Zt(e)&&(e=wl(e,s,t,n,i)),!yr(e)||e.style&&e.nodeType||On(e)||hv(e))return Sn(e)?wl(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=wl(e[a],s,t,n,i);return o},zv=function(e,t,n,i,s,o){var a,l,c,u;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:gR(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new ii(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Qo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},us,zd,Zp=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,g=e._targets,p=e.parent,x=p&&p.data==="nested"?p.vars.targets:g,y=e._overwrite==="auto"&&!Vp,v=e.timeline,S=i.easeReverse||h,E,b,C,M,T,P,D,B,k,W,H,Y,X;if(v&&(!f||!s)&&(s="none"),e._ease=lo(s,nc.ease),e._rEase=S&&(lo(S)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||f&&!i.stagger){if(B=g[0]?oo(g[0]).harness:0,Y=B&&i[B.prop],E=qu(i,qp),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&m?Tu:GA),_._lazy=0),o){if(Es(e._startAt=on.set(g,Ri({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&ti(l),startAt:null,delay:0,onUpdate:c&&function(){return Mi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!a&&!d)&&e._startAt.revert(Tu),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(a=!1),C=Ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ti(l),immediateRender:a,stagger:0,parent:p},E),Y&&(C[B.prop]=Y),Es(e._startAt=on.set(g,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(Tu):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,It,It);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&ti(l)||l&&!m,b=0;b<g.length;b++){if(T=g[b],D=T._gsap||jp(g)[b]._gsap,e._ptLookup[b]=W={},Nd[D.id]&&Ss.length&&Yu(),H=x===g?b:x.indexOf(T),B&&(k=new B).init(T,Y||E,e,H,x)!==!1&&(e._pt=M=new ii(e._pt,T,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(ne){W[ne]=M}),k.priority&&(P=1)),!B||Y)for(C in E)gi[C]&&(k=zv(C,E,e,H,T,x))?k.priority&&(P=1):W[C]=M=Jp.call(e,T,C,"get",E[C],H,x,0,i.stringFilter);e._op&&e._op[b]&&e.kill(T,e._op[b]),y&&e._pt&&(us=e,qt.killTweensOf(T,W,e.globalTime(t)),X=!e.parent,us=0),e._pt&&l&&(Nd[D.id]=1)}P&&Yv(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&v.render(zi,!0,!0)},_R=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return zd=1,e.vars[t]="+=0",Zp(e,a),zd=0,l?ic(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=tn(n)+Ln(h.e)),h.b&&(h.b=u.s+Ln(h.b))},vR=function(e,t){var n=e[0]?oo(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ra({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},xR=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(On(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},wl=function(e,t,n,i,s){return Zt(e)?e.call(t,n,i,s):Sn(e)&&~e.indexOf("random(")?sc(e):e},Hv=$p+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vv={};ni(Hv+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Vv[r]=1});var on=(function(r){cv(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:El(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,_=l.defaults,g=l.scrollTrigger,p=i.parent||qt,x=(On(n)||hv(n)?jr(n[0]):"length"in i)?[n]:Hi(n),y,v,S,E,b,C,M,T;if(a._targets=x.length?jp(x):ic("GSAP target "+n+" not found. https://gsap.com",!bi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||Zc(c)||Zc(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(y=a.timeline=new ei({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:x}),y.kill(),y.parent=y._dp=Lr(a),y._start=0,f||Zc(c)||Zc(u)){if(E=x.length,M=f&&Rv(f),yr(f))for(b in f)~Hv.indexOf(b)&&(T||(T={}),T[b]=f[b]);for(v=0;v<E;v++)S=qu(i,Vv),S.stagger=0,P&&(S.easeReverse=P),T&&Ra(S,T),C=x[v],S.duration=+wl(c,Lr(a),v,C,x),S.delay=(+wl(u,Lr(a),v,C,x)||0)-a._delay,!f&&E===1&&S.delay&&(a._delay=u=S.delay,a._start+=u,S.delay=0),y.to(C,S,M?M(v,C,x):0),y._ease=_t.none;y.duration()?c=u=0:a.timeline=0}else if(m){El(Ri(y.vars.defaults,{ease:"none"})),y._ease=lo(m.ease||i.ease||"none");var D=0,B,k,W;if(On(m))m.forEach(function(H){return y.to(x,H,">")}),y.duration();else{S={};for(b in m)b==="ease"||b==="easeEach"||xR(b,m[b],S,m.easeEach);for(b in S)for(B=S[b].sort(function(H,Y){return H.t-Y.t}),D=0,v=0;v<B.length;v++)k=B[v],W={ease:k.e,duration:(k.t-(v?B[v-1].t:0))/100*c},W[b]=k.v,y.to(x,W,D),D+=W.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!Vp&&(us=Lr(a),qt.killTweensOf(x),us=0),ar(p,Lr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===Xt(p._time)&&ti(h)&&jA(Lr(a))&&p.data!=="nested")&&(a._tTime=-It,a.render(Math.max(0,-u)||0)),g&&Ev(Lr(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-It&&!u?l:i<It?0:i,f,d,m,_,g,p,x,y;if(!c)JA(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,o);if(f=Xt(h%_),h===l?(m=this._repeat,f=c):(g=Xt(h/_),m=~~g,m&&m===g?(f=c,m--):f>c&&(f=c)),p=this._yoyo&&m&1,p&&(f=c-f),g=Ca(this._tTime,_),f===a&&!o&&this._initted&&m===g)return this._tTime=h,this;m!==g&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Xt(_*m),!0).invalidate()._lock=0)}if(!this._initted){if(bv(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var v=f<a;if(v!==this._inv){var S=v?a:c-a;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=S?(v?-1:1)/S:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=x=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=x=this._ease(f/c);if(this._from&&(this.ratio=x=1-x),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!s&&!g&&(Mi(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ud(this,i,s,o),Mi(this,"onUpdate")),this._repeat&&m!==g&&this.vars.onRepeat&&!s&&this.parent&&Mi(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ud(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Es(this,1),!s&&!(u&&!a)&&(h||a||p)&&(Mi(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){oc||xi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Zp(this,c),u=this._ease(c/this._dur),_R(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(_h(this,0),this.parent||Mv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ul(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,us&&us.vars.overwrite!==!0)._first||ul(this),this.parent&&o!==this.timeline.totalDuration()&&Pa(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Hi(i):a,c=this._ptLookup,u=this._pt,h,f,d,m,_,g,p;if((!s||s==="all")&&qA(a,l))return s==="all"&&(this._pt=0),ul(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(_={},ni(s,function(x){return _[x]=1}),s=_),s=vR(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,m=f,d={}):(d=h[p]=h[p]||{},m=s);for(_ in m)g=f&&f[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&mh(this,g,"_pt"),delete f[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ul(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return bl(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return bl(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return qt.killTweensOf(i,s,o)},e})(ac);Ri(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(r){on[r]=function(){var e=new ei,t=Fd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Qp=function(e,t,n){return e[t]=n},Gv=function(e,t,n){return e[t](n)},yR=function(e,t,n,i){return e[t](i.fp,n)},SR=function(e,t,n){return e.setAttribute(t,n)},em=function(e,t){return Zt(e[t])?Gv:Gp(e[t])&&e.setAttribute?SR:Qp},Wv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},MR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Xv=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},tm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},TR=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},ER=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?mh(this,t,"_pt"):t.dep||(n=1),t=i;return!n},bR=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Yv=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},ii=(function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Wv,this.d=l||this,this.set=c||Qp,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=bR,this.m=n,this.mt=s,this.tween=i},r})();ni($p+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return qp[r]=1});Ai.TweenMax=Ai.TweenLite=on;Ai.TimelineLite=Ai.TimelineMax=ei;qt=new ei({sortChildren:!1,defaults:nc,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});bi.stringFilter=Fv;var co=[],bu={},wR=[],d_=0,AR=0,yf=function(e){return(bu[e]||wR).map(function(t){return t()})},Hd=function(){var e=Date.now(),t=[];e-d_>2&&(yf("matchMediaInit"),co.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=rr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),yf("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),d_=e,yf("matchMedia"))},qv=(function(){function r(t,n){this.selector=n&&Bd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=AR++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Zt(n)&&(s=i,i=n,n=Zt);var o=this,a=function(){var c=Ht,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Bd(s)),Ht=o,h=i.apply(o,arguments),Zt(h)&&o._r.push(h),Ht=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Zt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ht;Ht=null,n(this),Ht=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof on&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof ei?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof on)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=co.length;o--;)co[o].id===this.id&&co.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),RR=(function(){function r(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){yr(n)||(n={matches:n});var o=new qv(0,s||this.scope),a=o.conditions={},l,c,u;Ht&&!o.selector&&(o.selector=Ht.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=rr.matchMedia(n[c]),l&&(co.indexOf(o)<0&&co.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hd):l.addEventListener("change",Hd)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),ju={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Nv(i)})},timeline:function(e){return new ei(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Sn(e)&&(e=Hi(e)[0]);var s=oo(e||{}).get,o=n?Sv:yv;return n==="native"&&(n=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,n,i)):function(a,l,c){return o((gi[a]&&gi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Hi(e),e.length>1){var i=e.map(function(u){return si.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var o=gi[t],a=oo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Qo._pt=0,h.init(e,n?u+n:u,Qo,0,[e]),h.render(1,h),Qo._pt&&tm(1,Qo)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=si.to(e,Ri((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=lo(e.ease,nc.ease)),l_(nc,e||{})},config:function(e){return l_(bi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!gi[a]&&!Ai[a]&&ic(t+" effect requires "+a+" plugin.")}),gf[t]=function(a,l,c){return n(Hi(a),Ri(l||{},s),c)},o&&(ei.prototype[t]=function(a,l,c){return this.add(gf[t](a,yr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){_t[e]=lo(t)},parseEase:function(e,t){return arguments.length?lo(e,t):_t},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ei(e),i,s;for(n.smoothChildTiming=ti(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,i=qt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof on&&i.vars.onComplete===i._targets[0]))&&ar(n,i,i._start-i._delay),i=s;return ar(qt,n,0),n},context:function(e,t){return e?new qv(e,t):Ht},matchMedia:function(e){return new RR(e)},matchMediaRefresh:function(){return co.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hd()},addEventListener:function(e,t){var n=bu[e]||(bu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=bu[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:sR,wrapYoyo:oR,distribute:Rv,random:Pv,snap:Cv,normalize:rR,getUnit:Ln,clamp:eR,splitColor:Uv,toArray:Hi,selector:Bd,mapRange:Dv,pipe:nR,unitize:iR,interpolate:aR,shuffle:Av},install:mv,effects:gf,ticker:xi,updateRoot:ei.updateRoot,plugins:gi,globalTimeline:qt,core:{PropTween:ii,globals:gv,Tween:on,Timeline:ei,Animation:ac,getCache:oo,_removeLinkedListItem:mh,reverting:function(){return bn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return Vp=e}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ju[r]=on[r]});xi.add(ei.updateRoot);Qo=ju.to({},{duration:0});var CR=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},PR=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=CR(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Sf=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Sn(s)&&(l={},ni(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}PR(a,s)}}}},si=ju.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Sf("roundProps",kd),Sf("modifiers"),Sf("snap",Cv))||ju;on.version=ei.version=si.version="3.15.0";pv=1;Wp()&&La();_t.Power0;_t.Power1;_t.Power2;_t.Power3;_t.Power4;_t.Linear;_t.Quad;_t.Cubic;_t.Quart;_t.Quint;_t.Strong;_t.Elastic;_t.Back;_t.SteppedEase;_t.Bounce;_t.Sine;_t.Expo;_t.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var p_,hs,aa,nm,no,m_,im,LR=function(){return typeof window<"u"},Kr={},Ys=180/Math.PI,la=Math.PI/180,Wo=Math.atan2,g_=1e8,rm=/([A-Z])/g,DR=/(left|right|width|margin|padding|x)/i,IR=/[\s,\(]\S/,hr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},NR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},UR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},OR=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},FR=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},$v=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},jv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},BR=function(e,t,n){return e.style[t]=n},kR=function(e,t,n){return e.style.setProperty(t,n)},zR=function(e,t,n){return e._gsap[t]=n},HR=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},VR=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},GR=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},jt="transform",ri=jt+"Origin",WR=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Kr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=hr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ir(i,a)}):this.tfm[e]=o.x?o[e]:Ir(i,e),e===ri&&(this.tfm.zOrigin=o.zOrigin);else return hr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(jt)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=jt}(s||t)&&this.props.push(e,t,s[e])},Kv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},XR=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=im(),(!s||!s.isStart)&&!n[jt]&&(Kv(n),i.zOrigin&&n[ri]&&(n[ri]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Jv=function(e,t){var n={target:e,props:[],revert:XR,save:WR};return e._gsap||si.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Zv,Gd=function(e,t){var n=hs.createElementNS?hs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hs.createElement(e);return n&&n.style?n:hs.createElement(e)},Ti=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rm,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Da(t)||t,1)||""},__="O,Moz,ms,Ms,Webkit".split(","),Da=function(e,t,n){var i=t||no,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(__[o]+e in s););return o<0?null:(o===3?"ms":o>=0?__[o]:"")+e},Wd=function(){LR()&&window.document&&(p_=window,hs=p_.document,aa=hs.documentElement,no=Gd("div")||{style:{}},Gd("div"),jt=Da(jt),ri=jt+"Origin",no.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zv=!!Da("perspective"),im=si.core.reverting,nm=1)},v_=function(e){var t=e.ownerSVGElement,n=Gd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),aa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),aa.removeChild(n),s},x_=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Qv=function(e){var t,n;try{t=e.getBBox()}catch{t=v_(e),n=1}return t&&(t.width||t.height)||n||(t=v_(e)),t&&!t.width&&!t.x&&!t.y?{x:+x_(e,["x","cx","x1"])||0,y:+x_(e,["y","cy","y1"])||0,width:0,height:0}:t},ex=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Qv(e))},bs=function(e,t){if(t){var n=e.style,i;t in Kr&&t!==ri&&(t=jt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(rm,"-$1").toLowerCase())):n.removeAttribute(t)}},fs=function(e,t,n,i,s,o){var a=new ii(e._pt,t,n,0,1,o?jv:$v);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},y_={deg:1,rad:1,turn:1},YR={grid:1,flex:1},ws=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=no.style,l=DR.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",m,_,g,p;if(i===o||!s||y_[i]||y_[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),p=e.getCTM&&ex(e),(d||o==="%")&&(Kr[t]||~t.indexOf("adius")))return m=p?e.getBBox()[l?"width":"height"]:e[u],tn(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===hs||!_.appendChild)&&(_=hs.body),g=_._gsap,g&&d&&g.width&&l&&g.time===xi.time&&!g.uncache)return tn(s/g.width*h);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,m=e[u],x?e.style[t]=x:bs(e,t)}else(d||o==="%")&&!YR[Ti(_,"display")]&&(a.position=Ti(e,"position")),_===e&&(a.position="static"),_.appendChild(no),m=no[u],_.removeChild(no),a.position="absolute";return l&&d&&(g=oo(_),g.time=xi.time,g.width=_[u]),tn(f?m*s/h:m&&s?h/m*s:0)},Ir=function(e,t,n,i){var s;return nm||Wd(),t in hr&&t!=="transform"&&(t=hr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Kr[t]&&t!=="transform"?(s=cc(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ju(Ti(e,ri))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ku[t]&&Ku[t](e,t,n)||Ti(e,t)||vv(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ws(e,t,s,n)+n:s},qR=function(e,t,n,i){if(!n||n==="none"){var s=Da(t,e,1),o=s&&Ti(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ti(e,"borderTopColor"))}var a=new ii(this._pt,e.style,t,0,1,Xv),l=0,c=0,u,h,f,d,m,_,g,p,x,y,v,S;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Ti(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Ti(e,t)||i,_?e.style[t]=_:bs(e,t)),u=[n,i],Fv(u),n=u[0],i=u[1],f=n.match(Zo)||[],S=i.match(Zo)||[],S.length){for(;h=Zo.exec(i);)g=h[0],x=i.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),g!==(_=f[c++]||"")&&(d=parseFloat(_)||0,v=_.substr((d+"").length),g.charAt(1)==="="&&(g=oa(d,g)+v),p=parseFloat(g),y=g.substr((p+"").length),l=Zo.lastIndex-y.length,y||(y=y||bi.units[t]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(d=ws(e,t,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:p-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?jv:$v;return dv.test(i)&&(a.e=0),this._pt=a,a},S_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},$R=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=S_[n]||n,t[1]=S_[i]||i,t.join(" ")},jR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Kr[a]&&(l=1,a=a==="transformOrigin"?ri:jt),bs(n,a);l&&(bs(n,jt),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",cc(n,1),o.uncache=1,Kv(i)))}},Ku={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new ii(e._pt,t,n,0,0,jR);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},lc=[1,0,0,1,0,0],tx={},nx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},M_=function(e){var t=Ti(e,jt);return nx(t)?lc:t.substr(7).match(fv).map(tn)},sm=function(e,t){var n=e._gsap||oo(e),i=e.style,s=M_(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?lc:s):(s===lc&&!e.offsetParent&&e!==aa&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,aa.appendChild(e)),s=M_(e),l?i.display=l:bs(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):aa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Xd=function(e,t,n,i,s,o){var a=e._gsap,l=s||sm(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],_=l[2],g=l[3],p=l[4],x=l[5],y=t.split(" "),v=parseFloat(y[0])||0,S=parseFloat(y[1])||0,E,b,C,M;n?l!==lc&&(b=d*g-m*_)&&(C=v*(g/b)+S*(-_/b)+(_*x-g*p)/b,M=v*(-m/b)+S*(d/b)-(d*x-m*p)/b,v=C,S=M):(E=Qv(e),v=E.x+(~y[0].indexOf("%")?v/100*E.width:v),S=E.y+(~(y[1]||y[0]).indexOf("%")?S/100*E.height:S)),i||i!==!1&&a.smooth?(p=v-c,x=S-u,a.xOffset=h+(p*d+x*_)-p,a.yOffset=f+(p*m+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=S,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ri]="0px 0px",o&&(fs(o,a,"xOrigin",c,v),fs(o,a,"yOrigin",u,S),fs(o,a,"xOffset",h,a.xOffset),fs(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+S)},cc=function(e,t){var n=e._gsap||new kv(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ti(e,ri)||"0",u,h,f,d,m,_,g,p,x,y,v,S,E,b,C,M,T,P,D,B,k,W,H,Y,X,ne,U,pe,Fe,it,$e,Ye;return u=h=f=_=g=p=x=y=v=0,d=m=1,n.svg=!!(e.getCTM&&ex(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[jt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[jt]!=="none"?l[jt]:"")),i.scale=i.rotate=i.translate="none"),b=sm(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Xd(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,b)),S=n.xOrigin||0,E=n.yOrigin||0,b!==lc&&(P=b[0],D=b[1],B=b[2],k=b[3],u=W=b[4],h=H=b[5],b.length===6?(d=Math.sqrt(P*P+D*D),m=Math.sqrt(k*k+B*B),_=P||D?Wo(D,P)*Ys:0,x=B||k?Wo(B,k)*Ys+_:0,x&&(m*=Math.abs(Math.cos(x*la))),n.svg&&(u-=S-(S*P+E*B),h-=E-(S*D+E*k))):(Ye=b[6],it=b[7],U=b[8],pe=b[9],Fe=b[10],$e=b[11],u=b[12],h=b[13],f=b[14],C=Wo(Ye,Fe),g=C*Ys,C&&(M=Math.cos(-C),T=Math.sin(-C),Y=W*M+U*T,X=H*M+pe*T,ne=Ye*M+Fe*T,U=W*-T+U*M,pe=H*-T+pe*M,Fe=Ye*-T+Fe*M,$e=it*-T+$e*M,W=Y,H=X,Ye=ne),C=Wo(-B,Fe),p=C*Ys,C&&(M=Math.cos(-C),T=Math.sin(-C),Y=P*M-U*T,X=D*M-pe*T,ne=B*M-Fe*T,$e=k*T+$e*M,P=Y,D=X,B=ne),C=Wo(D,P),_=C*Ys,C&&(M=Math.cos(C),T=Math.sin(C),Y=P*M+D*T,X=W*M+H*T,D=D*M-P*T,H=H*M-W*T,P=Y,W=X),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,p=180-p),d=tn(Math.sqrt(P*P+D*D+B*B)),m=tn(Math.sqrt(H*H+Ye*Ye)),C=Wo(W,H),x=Math.abs(C)>2e-4?C*Ys:0,v=$e?1/($e<0?-$e:$e):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!nx(Ti(e,jt)),Y&&e.setAttribute("transform",Y))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=tn(d),n.scaleY=tn(m),n.rotation=tn(_)+a,n.rotationX=tn(g)+a,n.rotationY=tn(p)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ri]=Ju(c)),n.xOffset=n.yOffset=0,n.force3D=bi.force3D,n.renderTransform=n.svg?JR:Zv?ix:KR,n.uncache=0,n},Ju=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mf=function(e,t,n){var i=Ln(t);return tn(parseFloat(t)+parseFloat(ws(e,"x",n+"px",i)))+i},KR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,ix(e,t)},Hs="0deg",il="0px",Vs=") ",ix=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,_=n.scaleY,g=n.transformPerspective,p=n.force3D,x=n.target,y=n.zOrigin,v="",S=p==="auto"&&e&&e!==1||p===!0;if(y&&(h!==Hs||u!==Hs)){var E=parseFloat(u)*la,b=Math.sin(E),C=Math.cos(E),M;E=parseFloat(h)*la,M=Math.cos(E),o=Mf(x,o,b*M*-y),a=Mf(x,a,-Math.sin(E)*-y),l=Mf(x,l,C*M*-y+y)}g!==il&&(v+="perspective("+g+Vs),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||o!==il||a!==il||l!==il)&&(v+=l!==il||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vs),c!==Hs&&(v+="rotate("+c+Vs),u!==Hs&&(v+="rotateY("+u+Vs),h!==Hs&&(v+="rotateX("+h+Vs),(f!==Hs||d!==Hs)&&(v+="skew("+f+", "+d+Vs),(m!==1||_!==1)&&(v+="scale("+m+", "+_+Vs),x.style[jt]=v||"translate(0, 0)"},JR=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,_=n.yOrigin,g=n.xOffset,p=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),S,E,b,C,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=la,c*=la,S=Math.cos(l)*h,E=Math.sin(l)*h,b=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(u*=la,M=Math.tan(c-u),M=Math.sqrt(1+M*M),b*=M,C*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),S*=M,E*=M)),S=tn(S),E=tn(E),b=tn(b),C=tn(C)):(S=h,C=f,E=b=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=ws(d,"x",o,"px"),v=ws(d,"y",a,"px")),(m||_||g||p)&&(y=tn(y+m-(m*S+_*b)+g),v=tn(v+_-(m*E+_*C)+p)),(i||s)&&(M=d.getBBox(),y=tn(y+i/100*M.width),v=tn(v+s/100*M.height)),M="matrix("+S+","+E+","+b+","+C+","+y+","+v+")",d.setAttribute("transform",M),x&&(d.style[jt]=M)},ZR=function(e,t,n,i,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ys:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*g_)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*g_)%o-~~(c/o)*o)),e._pt=f=new ii(e._pt,t,n,i,c,NR),f.e=u,f.u="deg",e._props.push(n),f},T_=function(e,t){for(var n in t)e[n]=t[n];return e},QR=function(e,t,n){var i=T_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[jt]=t,a=cc(n,1),bs(n,jt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[jt],o[jt]=t,a=cc(n,1),o[jt]=c);for(l in Kr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=Ln(c),m=Ln(u),h=d!==m?ws(n,l,c,m):parseFloat(c),f=parseFloat(u),e._pt=new ii(e._pt,a,l,h,f-h,Vd),e._pt.u=m||0,e._props.push(l));T_(a,i)};ni("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Ku[e>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return Ir(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,_){return d[m]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,d,h)}});var rx={name:"css",register:Wd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,m,_,g,p,x,y,v,S,E,b,C,M;nm||Wd(),this.styles=this.styles||Jv(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(gi[_]&&zv(_,t,n,i,e,s)))){if(d=typeof u,m=Ku[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=sc(u)),m)m(this,e,_,u,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ms.lastIndex=0,Ms.test(c)||(g=Ln(c),p=Ln(u),p?g!==p&&(c=ws(e,_,c,p)+p):g&&(u+=g)),this.add(a,"setProperty",c,u,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Sn(c)&&~c.indexOf("random(")&&(c=sc(c)),Ln(c+"")||c==="auto"||(c+=bi.units[_]||Ln(Ir(e,_))||""),(c+"").charAt(1)==="="&&(c=Ir(e,_))):c=Ir(e,_),f=parseFloat(c),x=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in hr&&(_==="autoAlpha"&&(f===1&&Ir(e,"visibility")==="hidden"&&h&&(f=0),C.push("visibility",0,a.visibility),fs(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=hr[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Kr,y){if(this.styles.save(_),M=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=Ti(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var T=e.style.perspective;e.style.perspective=u,u=Ti(e,"perspective"),T?e.style.perspective=T:bs(e,"perspective")}h=parseFloat(u)}if(v||(S=e._gsap,S.renderTransform&&!t.parseTransform||cc(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,v=this._pt=new ii(this._pt,a,jt,0,1,S.renderTransform,S,0,-1),v.dep=1),_==="scale")this._pt=new ii(this._pt,S,"scaleY",S.scaleY,(x?oa(S.scaleY,x+h):h)-S.scaleY||0,Vd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(ri,0,a[ri]),u=$R(u),S.svg?Xd(e,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&fs(this,S,"zOrigin",S.zOrigin,p),fs(this,a,_,Ju(c),Ju(u)));continue}else if(_==="svgOrigin"){Xd(e,u,1,E,0,this);continue}else if(_ in tx){ZR(this,S,_,f,x?oa(f,x+u):u);continue}else if(_==="smoothOrigin"){fs(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){QR(this,u,e);continue}}else _ in a||(_=Da(_)||_);if(y||(h||h===0)&&(f||f===0)&&!IR.test(u)&&_ in a)g=(c+"").substr((f+"").length),h||(h=0),p=Ln(u)||(_ in bi.units?bi.units[_]:g),g!==p&&(f=ws(e,_,c,p)),this._pt=new ii(this._pt,y?S:a,_,f,(x?oa(f,x+h):h)-f,!y&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?FR:Vd),this._pt.u=p||0,y&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=OR):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=UR);else if(_ in a)qR.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Yp(_,u);continue}y||(_ in a?C.push(_,0,a[_]):typeof e[_]=="function"?C.push(_,2,e[_]()):C.push(_,1,c||e[_])),o.push(_)}}b&&Yv(this)},render:function(e,t){if(t.tween._time||!im())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ir,aliases:hr,getSetter:function(e,t,n){var i=hr[t];return i&&i.indexOf(",")<0&&(t=i),t in Kr&&t!==ri&&(e._gsap.x||Ir(e,"x"))?n&&m_===n?t==="scale"?HR:zR:(m_=n||{})&&(t==="scale"?VR:GR):e.style&&!Gp(e.style[t])?BR:~t.indexOf("-")?kR:em(e,t)},core:{_removeProperty:bs,_getMatrix:sm}};si.utils.checkPrefix=Da;si.core.getStyleSaver=Jv;(function(r,e,t,n){var i=ni(r+","+e+","+t,function(s){Kr[s]=1});ni(e,function(s){bi.units[s]="deg",tx[s]=1}),hr[i[13]]=r+","+e,ni(n,function(s){var o=s.split(":");hr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){bi.units[r]="px"});si.registerPlugin(rx);var Yt=si.registerPlugin(rx)||si;Yt.core.Tween;const Al={logAltitude:Math.log(35),fov:55},eC=Yt.timeline({paused:!0}).to(Al,{logAltitude:Math.log(1260),fov:28,duration:28,ease:"power2.inOut"},0).to(Al,{fov:32,duration:16,ease:"power2.inOut"},28);function tC(r,e,t,n){eC.time(vt.clamp(r-150,0,44),!1),e.position.set(-1600,-536,-1960+Math.exp(Al.logAltitude)*(n?1.2:1)),t.set(-1600,-536,-1960),e.up.set(0,1,0),e.fov=Al.fov+(n?15:0),e.near=Math.max(.5,Math.exp(Al.logAltitude)*.015),e.far=25e3,e.updateProjectionMatrix(),e.lookAt(t)}const om=206,Yd=[[0,"01","THE CITY","Doha, Westbay","One skyline. A thousand stories."],[48,"02","THE NETWORK","Connected by readiness.","One signal. A shared picture."],[72,"03","LUSAIL STADIUM","Every arrival matters.","Perimeter · Access · Crowd · Response"],[100,"04","ACCESS","A welcome. A clear passage.","Identity verification · Concept visualization"],[120,"05","COMMAND CENTER","One shared perspective.","SSOC — Safety & Security Operations Committee"],[150,"06","COOPERATION","EXPERIENCE SHARED","BEYOND BORDERS."],[180,"07","READINESS","SAFETY THROUGH READINESS","SECURITY THROUGH COORDINATION"]],am=r=>Yd.findLast(e=>r>=e[0])||Yd[0],Gr=(r,e,t)=>vt.smoothstep(t,r,e),fr=(r,e,t)=>new N(r,e,t),uc=fr(-1600,4,-2500),Wr=(r,e,t)=>uc.clone().add(fr(r,e,t));function nC(r,e,t){const n=Math.atan2(4.5,198)-vt.degToRad(40)*(1-t);return Wr(Math.sin(n)*r,e,Math.cos(n)*r)}const sx=fr(0,0,0);Hp(1,fr(0,0,0),sx);const ox=fr(-350,750,300),ax=fr(-600,50,-500),Pn=[[48,ox.toArray(),ax.toArray(),56],[55,[-550,800,-200],[-700,30,-900],56],[63,[-700,720,-600],[-1030,10,-1230],52],[72,nC(503,245,0).toArray(),Wr(0,28,0).toArray(),46]];let wu=[],Qs=[],lx=1;function mP(r){Pn.push(...r),Pn.sort((o,a)=>o[0]-a[0]);let e=-1/0;wu=Pn.slice(3).map(o=>{const a=o[1][0]-uc.x,l=o[1][2]-uc.z;let c=Math.atan2(a,l);for(;c<e;)c+=Math.PI*2;return e=c,{angle:c,radius:Math.hypot(a,l)}});const t=new Mn,n=new N,i=[];for(let o=48.5;o<=99;o+=.5){hc(o-.25,t,n);const a=t.position.clone(),l=n.clone(),c=a.distanceTo(l);hc(o+.25,t,n),i.push((a.distanceTo(t.position)+.5*l.distanceTo(n))/Math.max(1,c))}Qs=i.map((o,a)=>{const l=i.slice(Math.max(0,a-3),Math.min(i.length,a+4));return l.reduce((c,u)=>c+u,0)/l.length});const s=[...Qs].sort((o,a)=>o-a);lx=s[Math.floor(s.length/2)]||1}function iC(r){if(r<48||r>=100||!Qs.length)return 1;const e=vt.clamp((r-48.5)/.5,0,Qs.length-1),t=Math.floor(e),n=vt.lerp(Qs[t],Qs[Math.min(t+1,Qs.length-1)],e-t);return vt.clamp(Math.sqrt(lx/Math.max(n,1e-4)),.45,2.2)}function Gs(r,e,t,n,i){const s=Pn[e],o=Pn[e+1];if(!o)return t(e);const a=o[0]-s[0],l=vt.clamp((r-s[0])/a,0,1),c=f=>{if(f<=n||f>=i)return 0;const d=Pn[f][0]-Pn[f-1][0],m=Pn[f+1][0]-Pn[f][0],_=(t(f)-t(f-1))/d,g=(t(f+1)-t(f))/m;if(_*g<=0)return 0;const p=2*m+d,x=m+2*d;return(p+x)/(p/_+x/g)},u=l*l,h=u*l;return(2*h-3*u+1)*t(e)+(h-2*u+l)*a*c(e)+(-2*h+3*u)*t(e+1)+(h-u)*a*c(e+1)}const lm=Math.atan2(4.5,11.8),rC=vt.degToRad(320),sC=vt.degToRad(200),qd=lm+rC,oC=Wr(Math.sin(qd)*180,80,186.2+Math.cos(qd)*180),Rl=[[100,lm,0,Math.hypot(4.5,11.8),2.9],[104,Math.atan2(4.6,1),.42,Math.hypot(4.6,1),2.85],[109,Math.atan2(2.5,-4.1),.55,Math.hypot(2.5,4.1),2.65],[118,qd,0,Math.hypot(2.5,4.1),2.65]];function cx(r,e,t){const n=t*t,i=n*t,s=e[0]-r[0];return(2*i-3*n+1)*r[1]+(i-2*n+t)*s*r[2]+(-2*i+3*n)*e[1]+(i-n)*s*e[2]}const aC=(()=>{const r=Rl[2],e=Rl[3];let t=0,n=1;for(let i=0;i<40;i++){const s=(t+n)/2;cx(r,e,s)<lm+sC?t=s:n=s}return vt.lerp(r[0],e[0],(t+n)/2)})();function lC(r,e,t){const n=Math.min(r,118),i=Math.min(2,Math.max(0,Rl.findLastIndex(_=>_[0]<=n))),s=Rl[i],o=Rl[i+1],a=o[0]-s[0],l=(n-s[0])/a,c=l*l,u=cx(s,o,l),h=c*(3-2*l),f=Gr(aC,120,r),d=vt.lerp(vt.lerp(s[3],o[3],h),180,f),m=vt.lerp(vt.lerp(s[4],o[4],h),80,f);e.position.copy(Wr(Math.sin(u)*d,m,186.2+Math.cos(u)*d)),t.copy(Wr(0,vt.lerp(2.3,2.1,Gr(100,104,r)),vt.lerp(189,186.2,Gr(100,104,r)))).lerp(Wr(0,24,80),f)}function hc(r,e,t,n=!1){if(r>=148){tC(Math.max(150,r),e,t,n);return}if(r>=120&&r<148){e.position.copy(oC),t.copy(Wr(0,24,80)),e.fov=48+(n?10:0),e.near=.08,e.updateProjectionMatrix(),e.lookAt(t);return}if(r>=148&&r<150){hc(150,e,t,n);return}if(r<=48)Hp(r/48,e.position,t),e.fov=n?55:34+Gr(.35,.8,r/48)*22;else if(r>=100)lC(r,e,t),e.fov=48+(n?10:0);else{const i=Math.max(0,Pn.findLastIndex(o=>o[0]<=r)),s=Pn.length-1;if(r<72||wu.length<2)e.position.x=Gs(r,i,o=>Pn[o][1][0],0,3),e.position.z=Gs(r,i,o=>Pn[o][1][2],0,3);else{const o=Gs(r,i,l=>wu[l-3].angle,3,s),a=Gs(r,i,l=>wu[l-3].radius,3,s);e.position.x=uc.x+Math.sin(o)*a,e.position.z=uc.z+Math.cos(o)*a}if(e.position.y=Gs(r,i,o=>Pn[o][1][1],0,s),t.set(...[0,1,2].map(o=>Gs(r,i,a=>Pn[a][2][o],0,s))),e.fov=Gs(r,i,o=>Pn[o][3],0,s)+(n?10:0),n){const o=Gr(66,73,r)*(1-Gr(86,98,r));e.position.sub(t).multiplyScalar(1+o*.8).add(t)}}e.near=r>=96&&r<210?.08:.5,e.updateProjectionMatrix(),e.lookAt(t)}function cC(r,e,t=13875341,n=.7){const i=new ch({color:t,transparent:!0,opacity:n,depthWrite:!1}),s=new uh(new Ct().setFromPoints(e),i);return r.add(s),s}function gP(r,e={}){return new di({color:r,roughness:.65,...e})}function _P(r,e,t,n,i,s,o,a){const l=new Nt(new Hr(e,t,n),a);return l.position.set(i,s,o),r.add(l),l}function vP(r,e,t,n,i,s,o,a={}){const l=document.createElement("canvas");l.width=1024,l.height=Math.round(1024*n/t);const c=l.getContext("2d");c.fillStyle=a.background||"#14222c",c.fillRect(0,0,l.width,l.height),c.fillStyle=a.color||"#e7e7df",c.font=`500 ${Math.min(l.height*.48,80)}px Lusail, Arial`,c.textAlign="center",c.textBaseline="middle",c.fillText(e,l.width/2,l.height/2,l.width*.9);const u=new DS(l);u.colorSpace=Jt;const h=new Nt(new Ls(t,n),new Nn({map:u,side:hn}));return h.position.set(i,s,o),r.add(h),h}async function uC(r){const e=new ur;e.name="02 Network · conceptual connections",r.add(e);const t=await av(),n=[];for(const c of t.elements.filter(u=>["primary","secondary","tertiary"].includes(u.tags?.highway)).slice(0,120)){if(!c.geometry)continue;const u=c.geometry.map(h=>{const f=cl(h);return fr(f.x,3.2,f.y)});for(let h=1;h<u.length;h++)n.push(u[h-1],u[h])}const i=new N0(new Ct().setFromPoints(n),new ch({color:14204816,transparent:!0,opacity:0}));e.add(i);const s=new Up([sx.clone(),fr(-260,15,-80),fr(-600,5,-480),fr(-1040,5,-1400),Wr(140,4,260),Wr(0,4,180)]),o=cC(e,s.getPoints(220),15323041,.4),a=new Nt(new Vr(2.7,12,8),new Nn({color:new Oe(3,2.1,1.1)}));e.add(a);const l=new Nt(new Vr(6,12,8),new Nn({color:15653034,transparent:!0,opacity:.12,depthWrite:!1}));return a.add(l),{group:e,update(c){e.visible=c>=48&&c<102,i.material.opacity=.55*Gr(48,55,c),o.material.opacity=.6*Gr(48,51,c),a.position.copy(s.getPointAt(Gr(49,74,c))),a.visible=c<78}}}const hC={identityStatus:"Temporary typographic treatment · approval pending"};function fC(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function dC(r,e,t){return e&&fC(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tn,Au,yi,ds,ps,ca,ux,qs,ua,hx,Fr,$i,fx,dx=function(){return Tn||typeof window<"u"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},px=1,ea=[],ft=[],pr=[],Cl=Date.now,$d=function(e,t){return t},pC=function(){var e=ua.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ft),i.push.apply(i,pr),ft=n,pr=i,$d=function(o,a){return t[o](a)}},Ts=function(e,t){return~pr.indexOf(e)&&pr[pr.indexOf(e)+1][t]},Pl=function(e){return!!~hx.indexOf(e)},Gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Qc="scrollLeft",eu="scrollTop",jd=function(){return Fr&&Fr.isPressed||ft.cache++},Zu=function(e,t){var n=function i(s){if(s||s===0){px&&(yi.history.scrollRestoration="manual");var o=Fr&&Fr.isPressed;s=i.v=Math.round(s)||(Fr&&Fr.iOS?1:0),e(s),i.cacheID=ft.cache,o&&$d("ss",s)}else(t||ft.cache!==i.cacheID||$d("ref"))&&(i.cacheID=ft.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},jn={s:Qc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Zu(function(r){return arguments.length?yi.scrollTo(r,un.sc()):yi.pageXOffset||ds[Qc]||ps[Qc]||ca[Qc]||0})},un={s:eu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:jn,sc:Zu(function(r){return arguments.length?yi.scrollTo(jn.sc(),r):yi.pageYOffset||ds[eu]||ps[eu]||ca[eu]||0})},Qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Tn.utils.toArray)(e)[0]||(typeof e=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mC=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},As=function(e,t){var n=t.s,i=t.sc;Pl(e)&&(e=ds.scrollingElement||ps);var s=ft.indexOf(e),o=i===un.sc?1:2;!~s&&(s=ft.push(e)-1),ft[s+o]||Gn(e,"scroll",jd);var a=ft[s+o],l=a||(ft[s+o]=Zu(Ts(e,n),!0)||(Pl(e)?i:Zu(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Tn.getProperty(e,"scrollBehavior")==="smooth"),l},Kd=function(e,t,n){var i=e,s=e,o=Cl(),a=o,l=t||50,c=Math.max(500,l*3),u=function(m,_){var g=Cl();_||g-o>l?(s=i,i=m,a=o,o=g):n?i+=m:i=s+(m-s)/(g-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(m){var _=a,g=s,p=Cl();return(m||m===0)&&m!==i&&u(m),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-_)*1e3};return{update:u,reset:h,getVelocity:f}},rl=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},E_=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},mx=function(){ua=Tn.core.globals().ScrollTrigger,ua&&ua.core&&pC()},gx=function(e){return Tn=e||dx(),!Au&&Tn&&typeof document<"u"&&document.body&&(yi=window,ds=document,ps=ds.documentElement,ca=ds.body,hx=[yi,ds,ps,ca],Tn.utils.clamp,fx=Tn.core.context||function(){},qs="onpointerenter"in ca?"pointer":"mouse",ux=nn.isTouch=yi.matchMedia&&yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$i=nn.eventTypes=("ontouchstart"in ps?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ps?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return px=0},500),Au=1),ua||mx(),Au};jn.op=un;ft.cache=0;var nn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Au||gx(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),ua||mx();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,_=n.event,g=n.onDragStart,p=n.onDragEnd,x=n.onDrag,y=n.onPress,v=n.onRelease,S=n.onRight,E=n.onLeft,b=n.onUp,C=n.onDown,M=n.onChangeX,T=n.onChangeY,P=n.onChange,D=n.onToggleX,B=n.onToggleY,k=n.onHover,W=n.onHoverEnd,H=n.onMove,Y=n.ignoreCheck,X=n.isNormalizer,ne=n.onGestureStart,U=n.onGestureEnd,pe=n.onWheel,Fe=n.onEnable,it=n.onDisable,$e=n.onClick,Ye=n.scrollSpeed,K=n.capture,Q=n.allowClicks,_e=n.lockAxis,we=n.onLockAxis;this.target=a=Qn(a)||ps,this.vars=n,d&&(d=Tn.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,Ye=Ye||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(yi.getComputedStyle(ca).lineHeight)||22);var Ce,Ve,ut,R,te,le,oe,F=this,xe=0,ae=0,ue=n.passive||!u&&n.passive!==!1,Me=As(a,jn),Ue=As(a,un),L=Me(),w=Ue(),G=~o.indexOf("touch")&&!~o.indexOf("pointer")&&$i[0]==="pointerdown",J=Pl(a),Z=a.ownerDocument||ds,j=[0,0,0],Ae=[0,0,0],fe=0,Ie=function(){return fe=Cl()},ye=function(Be,tt){return(F.event=Be)&&d&&mC(Be.target,d)||tt&&G&&Be.pointerType!=="touch"||Y&&Y(Be,tt)},he=function(){F._vx.reset(),F._vy.reset(),Ve.pause(),h&&h(F)},ve=function(){var Be=F.deltaX=E_(j),tt=F.deltaY=E_(Ae),Se=Math.abs(Be)>=i,je=Math.abs(tt)>=i;P&&(Se||je)&&P(F,Be,tt,j,Ae),Se&&(S&&F.deltaX>0&&S(F),E&&F.deltaX<0&&E(F),M&&M(F),D&&F.deltaX<0!=xe<0&&D(F),xe=F.deltaX,j[0]=j[1]=j[2]=0),je&&(C&&F.deltaY>0&&C(F),b&&F.deltaY<0&&b(F),T&&T(F),B&&F.deltaY<0!=ae<0&&B(F),ae=F.deltaY,Ae[0]=Ae[1]=Ae[2]=0),(R||ut)&&(H&&H(F),ut&&(g&&ut===1&&g(F),x&&x(F),ut=0),R=!1),le&&!(le=!1)&&we&&we(F),te&&(pe(F),te=!1),Ce=0},Ge=function(Be,tt,Se){j[Se]+=Be,Ae[Se]+=tt,F._vx.update(Be),F._vy.update(tt),c?Ce||(Ce=requestAnimationFrame(ve)):ve()},Ne=function(Be,tt){_e&&!oe&&(F.axis=oe=Math.abs(Be)>Math.abs(tt)?"x":"y",le=!0),oe!=="y"&&(j[2]+=Be,F._vx.update(Be,!0)),oe!=="x"&&(Ae[2]+=tt,F._vy.update(tt,!0)),c?Ce||(Ce=requestAnimationFrame(ve)):ve()},ge=function(Be){if(!ye(Be,1)){Be=rl(Be,u);var tt=Be.clientX,Se=Be.clientY,je=tt-F.x,He=Se-F.y,et=F.isDragging;F.x=tt,F.y=Se,(et||(je||He)&&(Math.abs(F.startX-tt)>=s||Math.abs(F.startY-Se)>=s))&&(ut||(ut=et?2:1),et||(F.isDragging=!0),Ne(je,He))}},Ze=F.onPress=function(be){ye(be,1)||be&&be.button||(F.axis=oe=null,Ve.pause(),F.isPressed=!0,be=rl(be),xe=ae=0,F.startX=F.x=be.clientX,F.startY=F.y=be.clientY,F._vx.reset(),F._vy.reset(),Gn(X?a:Z,$i[1],ge,ue,!0),F.deltaX=F.deltaY=0,y&&y(F))},O=F.onRelease=function(be){if(!ye(be,1)){Vn(X?a:Z,$i[1],ge,!0);var Be=!isNaN(F.y-F.startY),tt=F.isDragging,Se=tt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),je=rl(be);!Se&&Be&&(F._vx.reset(),F._vy.reset(),u&&Q&&Tn.delayedCall(.08,function(){if(Cl()-fe>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(Z.createEvent){var He=Z.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,yi,1,je.screenX,je.screenY,je.clientX,je.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(He)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&tt&&!X&&Ve.restart(!0),ut&&ve(),p&&tt&&p(F),v&&v(F,Se)}},ce=function(Be){return Be.touches&&Be.touches.length>1&&(F.isGesturing=!0)&&ne(Be,F.isDragging)},de=function(){return(F.isGesturing=!1)||U(F)},Te=function(Be){if(!ye(Be)){var tt=Me(),Se=Ue();Ge((tt-L)*Ye,(Se-w)*Ye,1),L=tt,w=Se,h&&Ve.restart(!0)}},re=function(Be){if(!ye(Be)){Be=rl(Be,u),pe&&(te=!0);var tt=(Be.deltaMode===1?l:Be.deltaMode===2?yi.innerHeight:1)*m;Ge(Be.deltaX*tt,Be.deltaY*tt,0),h&&!X&&Ve.restart(!0)}},ee=function(Be){if(!ye(Be)){var tt=Be.clientX,Se=Be.clientY,je=tt-F.x,He=Se-F.y;F.x=tt,F.y=Se,R=!0,h&&Ve.restart(!0),(je||He)&&Ne(je,He)}},Pe=function(Be){F.event=Be,k(F)},Xe=function(Be){F.event=Be,W(F)},yt=function(Be){return ye(Be)||rl(Be,u)&&$e(F)};Ve=F._dc=Tn.delayedCall(f||.25,he).pause(),F.deltaX=F.deltaY=0,F._vx=Kd(0,50,!0),F._vy=Kd(0,50,!0),F.scrollX=Me,F.scrollY=Ue,F.isDragging=F.isGesturing=F.isPressed=!1,fx(this),F.enable=function(be){return F.isEnabled||(Gn(J?Z:a,"scroll",jd),o.indexOf("scroll")>=0&&Gn(J?Z:a,"scroll",Te,ue,K),o.indexOf("wheel")>=0&&Gn(a,"wheel",re,ue,K),(o.indexOf("touch")>=0&&ux||o.indexOf("pointer")>=0)&&(Gn(a,$i[0],Ze,ue,K),Gn(Z,$i[2],O),Gn(Z,$i[3],O),Q&&Gn(a,"click",Ie,!0,!0),$e&&Gn(a,"click",yt),ne&&Gn(Z,"gesturestart",ce),U&&Gn(Z,"gestureend",de),k&&Gn(a,qs+"enter",Pe),W&&Gn(a,qs+"leave",Xe),H&&Gn(a,qs+"move",ee)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=R=ut=!1,F._vx.reset(),F._vy.reset(),L=Me(),w=Ue(),be&&be.type&&Ze(be),Fe&&Fe(F)),F},F.disable=function(){F.isEnabled&&(ea.filter(function(be){return be!==F&&Pl(be.target)}).length||Vn(J?Z:a,"scroll",jd),F.isPressed&&(F._vx.reset(),F._vy.reset(),Vn(X?a:Z,$i[1],ge,!0)),Vn(J?Z:a,"scroll",Te,K),Vn(a,"wheel",re,K),Vn(a,$i[0],Ze,K),Vn(Z,$i[2],O),Vn(Z,$i[3],O),Vn(a,"click",Ie,!0),Vn(a,"click",yt),Vn(Z,"gesturestart",ce),Vn(Z,"gestureend",de),Vn(a,qs+"enter",Pe),Vn(a,qs+"leave",Xe),Vn(a,qs+"move",ee),F.isEnabled=F.isPressed=F.isDragging=!1,it&&it(F))},F.kill=F.revert=function(){F.disable();var be=ea.indexOf(F);be>=0&&ea.splice(be,1),Fr===F&&(Fr=0)},ea.push(F),X&&Pl(a)&&(Fr=F),F.enable(_)},dC(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();nn.version="3.15.0";nn.create=function(r){return new nn(r)};nn.register=gx;nn.getAll=function(){return ea.slice()};nn.getById=function(r){return ea.filter(function(e){return e.vars.id===r})[0]};dx()&&Tn.registerPlugin(nn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,$o,ht,bt,vi,Tt,cm,Qu,fc,Ll,fl,tu,Rn,vh,Jd,Yn,b_,w_,jo,_x,Tf,vx,Xn,Zd,xx,yx,os,Qd,um,ha,hm,Dl,ep,Ef,nu=1,Cn=Date.now,bf=Cn(),Wi=0,dl=0,A_=function(e,t,n){var i=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},R_=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},gC=function r(){return dl&&requestAnimationFrame(r)},C_=function(){return vh=1},P_=function(){return vh=0},sr=function(e){return e},pl=function(e){return Math.round(e*1e5)/1e5||0},Sx=function(){return typeof window<"u"},Mx=function(){return De||Sx()&&(De=window.gsap)&&De.registerPlugin&&De},go=function(e){return!!~cm.indexOf(e)},Tx=function(e){return(e==="Height"?hm:ht["inner"+e])||vi["client"+e]||Tt["client"+e]},Ex=function(e){return Ts(e,"getBoundingClientRect")||(go(e)?function(){return Du.width=ht.innerWidth,Du.height=hm,Du}:function(){return Nr(e)})},_C=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ts(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Tx(s):e["client"+s])||0}},vC=function(e,t){return!t||~pr.indexOf(e)?Ex(e):function(){return Du}},dr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ts(e,n))?o()-Ex(e)()[s]:go(e)?(vi[n]||Tt[n])-Tx(i):e[n]-e["offset"+i])},iu=function(e,t){for(var n=0;n<jo.length;n+=3)(!t||~t.indexOf(jo[n+1]))&&e(jo[n],jo[n+1],jo[n+2])},pi=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},ml=function(e){return typeof e=="number"},$s=function(e){return typeof e=="object"},sl=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Xo=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Yo=Math.abs,bx="left",wx="top",fm="right",dm="bottom",uo="width",ho="height",Il="Right",Nl="Left",Ul="Top",Ol="Bottom",sn="padding",Oi="margin",Ia="Width",pm="Height",cn="px",Fi=function(e){return ht.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},xC=function(e){var t=Fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},L_=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Nr=function(e,t){var n=t&&Fi(e)[Jd]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},eh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Ax=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},yC=function(e){return function(t){return De.utils.snap(Ax(e),t)}},mm=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},SC=function(e){return function(t,n){return mm(Ax(e))(t,n.direction)}},ru=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},su=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},D_={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ou={toggleActions:"play",anticipatePin:0},th={top:0,left:0,center:.5,bottom:1,right:1},Ru=function(e,t){if(pi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in th?th[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},au=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=bt.createElement("div"),_=go(n)||Ts(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=_?Tt:n.tagName==="IFRAME"?n.contentDocument.body:n,x=e.indexOf("start")!==-1,y=x?c:u,v="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(v+=(i===un?fm:dm)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=x,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],Cu(m,0,i,x),m},Cu=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Ia]=1,s["border"+a+Ia]=0,s[n.p]=t+"px",De.set(e,s)},lt=[],tp={},dc,I_=function(){return Cn()-Wi>34&&(dc||(dc=requestAnimationFrame(Xr)))},qo=function(){(!Xn||!Xn.isPressed||Xn.startX>Tt.clientWidth)&&(ft.cache++,Xn?dc||(dc=requestAnimationFrame(Xr)):Xr(),Wi||vo("scrollStart"),Wi=Cn())},wf=function(){yx=ht.innerWidth,xx=ht.innerHeight},gl=function(e){ft.cache++,(e===!0||!Rn&&!vx&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!Zd||yx!==ht.innerWidth||Math.abs(ht.innerHeight-xx)>ht.innerHeight*.25))&&Qu.restart(!0)},_o={},MC=[],Rx=function r(){return vn(Qe,"scrollEnd",r)||io(!0)},vo=function(e){return _o[e]&&_o[e].map(function(t){return t()})||MC},fi=[],Cx=function(e){for(var t=0;t<fi.length;t+=5)(!e||fi[t+4]&&fi[t+4].query===e)&&(fi[t].style.cssText=fi[t+1],fi[t].getBBox&&fi[t].setAttribute("transform",fi[t+2]||""),fi[t+3].uncache=1)},Px=function(){return ft.forEach(function(e){return Dn(e)&&++e.cacheID&&(e.rec=e())})},gm=function(e,t){var n;for(Yn=0;Yn<lt.length;Yn++)n=lt[Yn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Dl=!0,t&&Cx(t),t||vo("revert")},Lx=function(e,t){ft.cache++,(t||!qn)&&ft.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),pi(e)&&(ht.history.scrollRestoration=um=e)},qn,fo=0,N_,TC=function(){if(N_!==fo){var e=N_=fo;requestAnimationFrame(function(){return e===fo&&io(!0)})}},Dx=function(){Tt.appendChild(ha),hm=!Xn&&ha.offsetHeight||ht.innerHeight,Tt.removeChild(ha)},U_=function(e){return fc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},io=function(e,t){if(vi=bt.documentElement,Tt=bt.body,cm=[ht,bt,vi,Tt],Wi&&!e&&!Dl){xn(Qe,"scrollEnd",Rx);return}Dx(),qn=Qe.isRefreshing=!0,Dl||Px();var n=vo("refreshInit");_x&&Qe.sort(),t||gm(),ft.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),lt.slice(0).forEach(function(i){return i.refresh()}),Dl=!1,lt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),ep=1,U_(!0),lt.forEach(function(i){var s=dr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),U_(!1),ep=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ft.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Lx(um,1),Qu.pause(),fo++,qn=2,Xr(2),lt.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),qn=Qe.isRefreshing=!1,vo("refresh")},np=0,Pu=1,Fl,Xr=function(e){if(e===2||!qn&&!Dl){Qe.isUpdating=!0,Fl&&Fl.update(0);var t=lt.length,n=Cn(),i=n-bf>=50,s=t&&lt[0].scroll();if(Pu=np>s?-1:1,qn||(np=s),i&&(Wi&&!vh&&n-Wi>200&&(Wi=0,vo("scrollEnd")),fl=bf,bf=n),Pu<0){for(Yn=t;Yn-- >0;)lt[Yn]&&lt[Yn].update(0,i);Pu=1}else for(Yn=0;Yn<t;Yn++)lt[Yn]&&lt[Yn].update(0,i);Qe.isUpdating=!1}dc=0},ip=[bx,wx,dm,fm,Oi+Ol,Oi+Il,Oi+Ul,Oi+Nl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Lu=ip.concat([uo,ho,"boxSizing","max"+Ia,"max"+pm,"position",Oi,sn,sn+Ul,sn+Il,sn+Ol,sn+Nl]),EC=function(e,t,n){fa(n);var i=e._gsap;if(i.spacerIsNative)fa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Af=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=ip.length,o=t.style,a=e.style,l;s--;)l=ip[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[dm]=a[fm]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[uo]=eh(e,jn)+cn,o[ho]=eh(e,un)+cn,o[sn]=a[Oi]=a[wx]=a[bx]="0",fa(i),a[uo]=a["max"+Ia]=n[uo],a[ho]=a["max"+pm]=n[ho],a[sn]=n[sn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},bC=/([A-Z])/g,fa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(bC,"-$1").toLowerCase())}},lu=function(e){for(var t=Lu.length,n=e.style,i=[],s=0;s<t;s++)i.push(Lu[s],n[Lu[s]]);return i.t=e,i},wC=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Du={left:0,top:0},O_=function(e,t,n,i,s,o,a,l,c,u,h,f,d,m){Dn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Ru("0"+e.substr(3),n):0));var _=d?d.time():0,g,p,x;if(d&&d.seek(0),isNaN(e)||(e=+e),ml(e))d&&(e=De.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Cu(a,n,i,!0);else{Dn(t)&&(t=t(l));var y=(e||"0").split(" "),v,S,E,b;x=Qn(t,l)||Tt,v=Nr(x)||{},(!v||!v.left&&!v.top)&&Fi(x).display==="none"&&(b=x.style.display,x.style.display="block",v=Nr(x),b?x.style.display=b:x.style.removeProperty("display")),S=Ru(y[0],v[i.d]),E=Ru(y[1]||"0",n),e=v[i.p]-c[i.p]-u+S+s-E,a&&Cu(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var C=e+n,M=o._isStart;g="scroll"+i.d2,Cu(o,C,i,M&&C>20||!M&&(h?Math.max(Tt[g],vi[g]):o.parentNode[g])<=C+1),h&&(c=Nr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+cn))}return d&&x&&(g=Nr(x),d.seek(f),p=Nr(x),d._caScrollDist=g[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(_),d?e:Math.round(e)},AC=/(webkit|moz|length|cssText|inset)/i,F_=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Tt){e._stOrig=s.cssText,a=Fi(e);for(o in a)!+o&&!AC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},Ix=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},cu=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},B_=function(e,t){var n=As(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||n();var _=Ix(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return _(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ft.cache++,o.tween&&Xr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=De.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},xn(e,"wheel",n.wheelHandler),Qe.isTouch&&xn(e,"touchmove",n.wheelHandler),s},Qe=(function(){function r(t,n){$o||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Qd(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!dl){this.update=this.refresh=this.kill=sr;return}n=L_(pi(n)||ml(n)||n.nodeType?{trigger:n}:n,ou);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,_=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,x=s.onSnapComplete,y=s.once,v=s.snap,S=s.pinReparent,E=s.pinSpacer,b=s.containerAnimation,C=s.fastScrollEnd,M=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?jn:un,P=!h&&h!==0,D=Qn(n.scroller||ht),B=De.core.getCache(D),k=go(D),W=("pinType"in n?n.pinType:Ts(D,"pinType")||k&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=P&&n.toggleActions.split(" "),X="markers"in n?n.markers:ou.markers,ne=k?0:parseFloat(Fi(D)["border"+T.p2+Ia])||0,U=this,pe=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Fe=_C(D,k,T),it=vC(D,k),$e=0,Ye=0,K=0,Q=As(D,T),_e,we,Ce,Ve,ut,R,te,le,oe,F,xe,ae,ue,Me,Ue,L,w,G,J,Z,j,Ae,fe,Ie,ye,he,ve,Ge,Ne,ge,Ze,O,ce,de,Te,re,ee,Pe,Xe;if(U._startClamp=U._endClamp=!1,U._dir=T,g*=45,U.scroller=D,U.scroll=b?b.time.bind(b):Q,Ve=Q(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(_x=1,n.refreshPriority===-9999&&(Fl=U)),B.tweenScroll=B.tweenScroll||{top:B_(D,un),left:B_(D,jn)},U.tweenTo=_e=B.tweenScroll[T.p],U.scrubDuration=function(Se){ce=ml(Se)&&Se,ce?O?O.duration(Se):O=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return p&&p(U)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(h),ge=0,l||(l=i.vars.id)),v&&((!$s(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Tt.style&&De.set(k?[Tt,vi]:D,{scrollBehavior:"auto"}),ft.forEach(function(Se){return Dn(Se)&&Se.target===(k?bt.scrollingElement||vi:D)&&(Se.smooth=!1)}),Ce=Dn(v.snapTo)?v.snapTo:v.snapTo==="labels"?yC(i):v.snapTo==="labelsDirectional"?SC(i):v.directional!==!1?function(Se,je){return mm(v.snapTo)(Se,Cn()-Ye<500?0:je.direction)}:De.utils.snap(v.snapTo),de=v.duration||{min:.1,max:2},de=$s(de)?Ll(de.min,de.max):Ll(de,de),Te=De.delayedCall(v.delay||ce/2||.1,function(){var Se=Q(),je=Cn()-Ye<500,He=_e.tween;if((je||Math.abs(U.getVelocity())<10)&&!He&&!vh&&$e!==Se){var et=(Se-R)/Me,Qt=i&&!P?i.totalProgress():et,ot=je?0:(Qt-Ze)/(Cn()-fl)*1e3||0,kt=De.utils.clamp(-et,1-et,Yo(ot/2)*ot/.185),en=et+(v.inertia===!1?0:kt),Ot,Pt,Et=v,ai=Et.onStart,Ft=Et.onInterrupt,kn=Et.onComplete;if(Ot=Ce(en,U),ml(Ot)||(Ot=en),Pt=Math.max(0,Math.round(R+Ot*Me)),Se<=te&&Se>=R&&Pt!==Se){if(He&&!He._initted&&He.data<=Yo(Pt-Se))return;v.inertia===!1&&(kt=Ot-et),_e(Pt,{duration:de(Yo(Math.max(Yo(en-Qt),Yo(Ot-Qt))*.185/ot/.05||0)),ease:v.ease||"power3",data:Yo(Pt-Se),onInterrupt:function(){return Te.restart(!0)&&Ft&&Xo(U,Ft)},onComplete:function(){U.update(),$e=Q(),i&&!P&&(O?O.resetTo("totalProgress",Ot,i._tTime/i._tDur):i.progress(Ot)),ge=Ze=i&&!P?i.totalProgress():U.progress,x&&x(U),kn&&Xo(U,kn)}},Se,kt*Me,Pt-Se-kt*Me),ai&&Xo(U,ai,_e.tween)}}else U.isActive&&$e!==Se&&Te.restart(!0)}).pause()),l&&(tp[l]=U),f=U.trigger=Qn(f||d!==!0&&d),Xe=f&&f._gsap&&f._gsap.stRevert,Xe&&(Xe=Xe(U)),d=d===!0?f:Qn(d),pi(a)&&(a={targets:f,className:a}),d&&(m===!1||m===Oi||(m=!m&&d.parentNode&&d.parentNode.style&&Fi(d.parentNode).display==="flex"?!1:sn),U.pin=d,we=De.core.getCache(d),we.spacer?Ue=we.pinState:(E&&(E=Qn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),we.spacerIsNative=!!E,E&&(we.spacerState=lu(E))),we.spacer=G=E||bt.createElement("div"),G.classList.add("pin-spacer"),l&&G.classList.add("pin-spacer-"+l),we.pinState=Ue=lu(d)),n.force3D!==!1&&De.set(d,{force3D:!0}),U.spacer=G=we.spacer,Ne=Fi(d),Ie=Ne[m+T.os2],Z=De.getProperty(d),j=De.quickSetter(d,T.a,cn),Af(d,G,Ne),w=lu(d)),X){ae=$s(X)?L_(X,D_):D_,F=au("scroller-start",l,D,T,ae,0),xe=au("scroller-end",l,D,T,ae,0,F),J=F["offset"+T.op.d2];var yt=Qn(Ts(D,"content")||D);le=this.markerStart=au("start",l,yt,T,ae,J,0,b),oe=this.markerEnd=au("end",l,yt,T,ae,J,0,b),b&&(Pe=De.quickSetter([le,oe],T.a,cn)),!W&&!(pr.length&&Ts(D,"fixedMarkers")===!0)&&(xC(k?Tt:D),De.set([F,xe],{force3D:!0}),he=De.quickSetter(F,T.a,cn),Ge=De.quickSetter(xe,T.a,cn))}if(b){var be=b.vars.onUpdate,Be=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){U.update(0,0,1),be&&be.apply(b,Be||[])})}if(U.previous=function(){return lt[lt.indexOf(U)-1]},U.next=function(){return lt[lt.indexOf(U)+1]},U.revert=function(Se,je){if(!je)return U.kill(!0);var He=Se!==!1||!U.enabled,et=Rn;He!==U.isReverted&&(He&&(re=Math.max(Q(),U.scroll.rec||0),K=U.progress,ee=i&&i.progress()),le&&[le,oe,F,xe].forEach(function(Qt){return Qt.style.display=He?"none":"block"}),He&&(Rn=U,U.update(He)),d&&(!S||!U.isActive)&&(He?EC(d,G,Ue):Af(d,G,Fi(d),ye)),He||U.update(He),Rn=et,U.isReverted=He)},U.refresh=function(Se,je,He,et){if(!((Rn||!U.enabled)&&!je)){if(d&&Se&&Wi){xn(r,"scrollEnd",Rx);return}!qn&&pe&&pe(U),Rn=U,_e.tween&&!He&&(_e.tween.kill(),_e.tween=0),O&&O.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(dt){return dt.vars.immediateRender&&dt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Qt=Fe(),ot=it(),kt=b?b.duration():dr(D,T),en=Me<=.01||!Me,Ot=0,Pt=et||0,Et=$s(He)?He.end:n.end,ai=n.endTrigger||f,Ft=$s(He)?He.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),kn=U.pinnedContainer=n.pinnedContainer&&Qn(n.pinnedContainer,U),Ci=f&&Math.max(0,lt.indexOf(U))||0,ln=Ci,A,z,q,$,V,ie,me,Le,Re,We,ze,ke,rt;for(X&&$s(He)&&(ke=De.getProperty(F,T.p),rt=De.getProperty(xe,T.p));ln-- >0;)ie=lt[ln],ie.end||ie.refresh(0,1)||(Rn=U),me=ie.pin,me&&(me===f||me===d||me===kn)&&!ie.isReverted&&(We||(We=[]),We.unshift(ie),ie.revert(!0,!0)),ie!==lt[ln]&&(Ci--,ln--);for(Dn(Ft)&&(Ft=Ft(U)),Ft=A_(Ft,"start",U),R=O_(Ft,f,Qt,T,Q(),le,F,U,ot,ne,W,kt,b,U._startClamp&&"_startClamp")||(d?-.001:0),Dn(Et)&&(Et=Et(U)),pi(Et)&&!Et.indexOf("+=")&&(~Et.indexOf(" ")?Et=(pi(Ft)?Ft.split(" ")[0]:"")+Et:(Ot=Ru(Et.substr(2),Qt),Et=pi(Ft)?Ft:(b?De.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,R):R)+Ot,ai=f)),Et=A_(Et,"end",U),te=Math.max(R,O_(Et||(ai?"100% 0":kt),ai,Qt,T,Q()+Ot,oe,xe,U,ot,ne,W,kt,b,U._endClamp&&"_endClamp"))||-.001,Ot=0,ln=Ci;ln--;)ie=lt[ln]||{},me=ie.pin,me&&ie.start-ie._pinPush<=R&&!b&&ie.end>0&&(A=ie.end-(U._startClamp?Math.max(0,ie.start):ie.start),(me===f&&ie.start-ie._pinPush<R||me===kn)&&isNaN(Ft)&&(Ot+=A*(1-ie.progress)),me===d&&(Pt+=A));if(R+=Ot,te+=Ot,U._startClamp&&(U._startClamp+=Ot),U._endClamp&&!qn&&(U._endClamp=te||-.001,te=Math.min(te,dr(D,T))),Me=te-R||(R-=.01)&&.001,en&&(K=De.utils.clamp(0,1,De.utils.normalize(R,te,re))),U._pinPush=Pt,le&&Ot&&(A={},A[T.a]="+="+Ot,kn&&(A[T.p]="-="+Q()),De.set([le,oe],A)),d&&!(ep&&U.end>=dr(D,T)))A=Fi(d),$=T===un,q=Q(),Ae=parseFloat(Z(T.a))+Pt,!kt&&te>1&&(ze=(k?bt.scrollingElement||vi:D).style,ze={style:ze,value:ze["overflow"+T.a.toUpperCase()]},k&&Fi(Tt)["overflow"+T.a.toUpperCase()]!=="scroll"&&(ze.style["overflow"+T.a.toUpperCase()]="scroll")),Af(d,G,A),w=lu(d),z=Nr(d,!0),Le=W&&As(D,$?jn:un)(),m?(ye=[m+T.os2,Me+Pt+cn],ye.t=G,ln=m===sn?eh(d,T)+Me+Pt:0,ln&&(ye.push(T.d,ln+cn),G.style.flexBasis!=="auto"&&(G.style.flexBasis=ln+cn)),fa(ye),kn&&lt.forEach(function(dt){dt.pin===kn&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),W&&Q(re)):(ln=eh(d,T),ln&&G.style.flexBasis!=="auto"&&(G.style.flexBasis=ln+cn)),W&&(V={top:z.top+($?q-R:Le)+cn,left:z.left+($?Le:q-R)+cn,boxSizing:"border-box",position:"fixed"},V[uo]=V["max"+Ia]=Math.ceil(z.width)+cn,V[ho]=V["max"+pm]=Math.ceil(z.height)+cn,V[Oi]=V[Oi+Ul]=V[Oi+Il]=V[Oi+Ol]=V[Oi+Nl]="0",V[sn]=A[sn],V[sn+Ul]=A[sn+Ul],V[sn+Il]=A[sn+Il],V[sn+Ol]=A[sn+Ol],V[sn+Nl]=A[sn+Nl],L=wC(Ue,V,S),qn&&Q(0)),i?(Re=i._initted,Tf(1),i.render(i.duration(),!0,!0),fe=Z(T.a)-Ae+Me+Pt,ve=Math.abs(Me-fe)>1,W&&ve&&L.splice(L.length-2,2),i.render(0,!0,!0),Re||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Tf(0)):fe=Me,ze&&(ze.value?ze.style["overflow"+T.a.toUpperCase()]=ze.value:ze.style.removeProperty("overflow-"+T.a));else if(f&&Q()&&!b)for(z=f.parentNode;z&&z!==Tt;)z._pinOffset&&(R-=z._pinOffset,te-=z._pinOffset),z=z.parentNode;We&&We.forEach(function(dt){return dt.revert(!1,!0)}),U.start=R,U.end=te,Ve=ut=qn?re:Q(),!b&&!qn&&(Ve<re&&Q(re),U.scroll.rec=0),U.revert(!1,!0),Ye=Cn(),Te&&($e=-1,Te.restart(!0)),Rn=0,i&&P&&(i._initted||ee)&&i.progress()!==ee&&i.progress(ee||0,!0).render(i.time(),!0,!0),(en||K!==U.progress||b||_||i&&!i._initted)&&(i&&!P&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(b&&R<-.001&&!K?De.utils.normalize(R,te,0):K,!0),U.progress=en||(Ve-R)/Me===K?0:K),d&&m&&(G._pinOffset=Math.round(U.progress*fe)),O&&O.invalidate(),isNaN(ke)||(ke-=De.getProperty(F,T.p),rt-=De.getProperty(xe,T.p),cu(F,T,ke),cu(le,T,ke-(et||0)),cu(xe,T,rt),cu(oe,T,rt-(et||0))),en&&!qn&&U.update(),u&&!qn&&!ue&&(ue=!0,u(U),ue=!1)}},U.getVelocity=function(){return(Q()-ut)/(Cn()-fl)*1e3||0},U.endAnimation=function(){sl(U.callbackAnimation),i&&(O?O.progress(1):i.paused()?P||sl(i,U.direction<0,1):sl(i,i.reversed()))},U.labelToScroll=function(Se){return i&&i.labels&&(R||U.refresh()||R)+i.labels[Se]/i.duration()*Me||0},U.getTrailing=function(Se){var je=lt.indexOf(U),He=U.direction>0?lt.slice(0,je).reverse():lt.slice(je+1);return(pi(Se)?He.filter(function(et){return et.vars.preventOverlaps===Se}):He).filter(function(et){return U.direction>0?et.end<=R:et.start>=te})},U.update=function(Se,je,He){if(!(b&&!He&&!Se)){var et=qn===!0?re:U.scroll(),Qt=Se?0:(et-R)/Me,ot=Qt<0?0:Qt>1?1:Qt||0,kt=U.progress,en,Ot,Pt,Et,ai,Ft,kn,Ci;if(je&&(ut=Ve,Ve=b?Q():et,v&&(Ze=ge,ge=i&&!P?i.totalProgress():ot)),g&&d&&!Rn&&!nu&&Wi&&(!ot&&R<et+(et-ut)/(Cn()-fl)*g?ot=1e-4:ot===1&&te>et+(et-ut)/(Cn()-fl)*g&&(ot=.9999)),ot!==kt&&U.enabled){if(en=U.isActive=!!ot&&ot<1,Ot=!!kt&&kt<1,Ft=en!==Ot,ai=Ft||!!ot!=!!kt,U.direction=ot>kt?1:-1,U.progress=ot,ai&&!Rn&&(Pt=ot&&!kt?0:ot===1?1:kt===1?2:3,P&&(Et=!Ft&&Y[Pt+1]!=="none"&&Y[Pt+1]||Y[Pt],Ci=i&&(Et==="complete"||Et==="reset"||Et in i))),M&&(Ft||Ci)&&(Ci||h||!i)&&(Dn(M)?M(U):U.getTrailing(M).forEach(function(q){return q.endAnimation()})),P||(O&&!Rn&&!nu?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",ot,i._tTime/i._tDur):(O.vars.totalProgress=ot,O.invalidate().restart())):i&&i.totalProgress(ot,!!(Rn&&(Ye||Se)))),d){if(Se&&m&&(G.style[m+T.os2]=Ie),!W)j(pl(Ae+fe*ot));else if(ai){if(kn=!Se&&ot>kt&&te+1>et&&et+1>=dr(D,T),S)if(!Se&&(en||kn)){var ln=Nr(d,!0),A=et-R;F_(d,Tt,ln.top+(T===un?A:0)+cn,ln.left+(T===un?0:A)+cn)}else F_(d,G);fa(en||kn?L:w),ve&&ot<1&&en||j(Ae+(ot===1&&!kn?fe:0))}}v&&!_e.tween&&!Rn&&!nu&&Te.restart(!0),a&&(Ft||y&&ot&&(ot<1||!Ef))&&fc(a.targets).forEach(function(q){return q.classList[en||y?"add":"remove"](a.className)}),o&&!P&&!Se&&o(U),ai&&!Rn?(P&&(Ci&&(Et==="complete"?i.pause().totalProgress(1):Et==="reset"?i.restart(!0).pause():Et==="restart"?i.restart(!0):i[Et]()),o&&o(U)),(Ft||!Ef)&&(c&&Ft&&Xo(U,c),H[Pt]&&Xo(U,H[Pt]),y&&(ot===1?U.kill(!1,1):H[Pt]=0),Ft||(Pt=ot===1?1:3,H[Pt]&&Xo(U,H[Pt]))),C&&!en&&Math.abs(U.getVelocity())>(ml(C)?C:2500)&&(sl(U.callbackAnimation),O?O.progress(1):sl(i,Et==="reverse"?1:!ot,1))):P&&o&&!Rn&&o(U)}if(Ge){var z=b?et/b.duration()*(b._caScrollDist||0):et;he(z+(F._isFlipped?1:0)),Ge(z)}Pe&&Pe(-et/b.duration()*(b._caScrollDist||0))}},U.enable=function(Se,je){U.enabled||(U.enabled=!0,xn(D,"resize",gl),k||xn(D,"scroll",qo),pe&&xn(r,"refreshInit",pe),Se!==!1&&(U.progress=K=0,Ve=ut=$e=Q()),je!==!1&&U.refresh())},U.getTween=function(Se){return Se&&_e?_e.tween:O},U.setPositions=function(Se,je,He,et){if(b){var Qt=b.scrollTrigger,ot=b.duration(),kt=Qt.end-Qt.start;Se=Qt.start+kt*Se/ot,je=Qt.start+kt*je/ot}U.refresh(!1,!1,{start:R_(Se,He&&!!U._startClamp),end:R_(je,He&&!!U._endClamp)},et),U.update()},U.adjustPinSpacing=function(Se){if(ye&&Se){var je=ye.indexOf(T.d)+1;ye[je]=parseFloat(ye[je])+Se+cn,ye[1]=parseFloat(ye[1])+Se+cn,fa(ye)}},U.disable=function(Se,je){if(Se!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,je||O&&O.pause(),re=0,we&&(we.uncache=1),pe&&vn(r,"refreshInit",pe),Te&&(Te.pause(),_e.tween&&_e.tween.kill()&&(_e.tween=0)),!k)){for(var He=lt.length;He--;)if(lt[He].scroller===D&&lt[He]!==U)return;vn(D,"resize",gl),k||vn(D,"scroll",qo)}},U.kill=function(Se,je){U.disable(Se,je),O&&!je&&O.kill(),l&&delete tp[l];var He=lt.indexOf(U);He>=0&&lt.splice(He,1),He===Yn&&Pu>0&&Yn--,He=0,lt.forEach(function(et){return et.scroller===U.scroller&&(He=1)}),He||qn||(U.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),je||i.kill()),le&&[le,oe,F,xe].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),Fl===U&&(Fl=0),d&&(we&&(we.uncache=1),He=0,lt.forEach(function(et){return et.pin===d&&He++}),He||(we.spacer=0)),n.onKill&&n.onKill(U)},lt.push(U),U.enable(!1,!1),Xe&&Xe(U),i&&i.add&&!Me){var tt=U.update;U.update=function(){U.update=tt,ft.cache++,R||te||U.refresh()},De.delayedCall(.01,U.update),Me=.01,R=te=0}else U.refresh();d&&TC()},r.register=function(n){return $o||(De=n||Mx(),Sx()&&window.document&&r.enable(),$o=dl),$o},r.defaults=function(n){if(n)for(var i in n)ou[i]=n[i];return ou},r.disable=function(n,i){dl=0,lt.forEach(function(o){return o[i?"kill":"disable"](n)}),vn(ht,"wheel",qo),vn(bt,"scroll",qo),clearInterval(tu),vn(bt,"touchcancel",sr),vn(Tt,"touchstart",sr),ru(vn,bt,"pointerdown,touchstart,mousedown",C_),ru(vn,bt,"pointerup,touchend,mouseup",P_),Qu.kill(),iu(vn);for(var s=0;s<ft.length;s+=3)su(vn,ft[s],ft[s+1]),su(vn,ft[s],ft[s+2])},r.enable=function(){if(ht=window,bt=document,vi=bt.documentElement,Tt=bt.body,De){if(fc=De.utils.toArray,Ll=De.utils.clamp,Qd=De.core.context||sr,Tf=De.core.suppressOverwrites||sr,um=ht.history.scrollRestoration||"auto",np=ht.pageYOffset||0,De.core.globals("ScrollTrigger",r),Tt){dl=1,ha=document.createElement("div"),ha.style.height="100vh",ha.style.position="absolute",Dx(),gC(),nn.register(De),r.isTouch=nn.isTouch,os=nn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zd=nn.isTouch===1,xn(ht,"wheel",qo),cm=[ht,bt,vi,Tt],De.matchMedia?(r.matchMedia=function(u){var h=De.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},De.addEventListener("matchMediaInit",function(){Px(),gm()}),De.addEventListener("matchMediaRevert",function(){return Cx()}),De.addEventListener("matchMedia",function(){io(0,1),vo("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return wf(),wf})):console.warn("Requires GSAP 3.11.0 or later"),wf(),xn(bt,"scroll",qo);var n=Tt.hasAttribute("style"),i=Tt.style,s=i.borderTopStyle,o=De.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Nr(Tt),un.m=Math.round(a.top+un.sc())||0,jn.m=Math.round(a.left+jn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Tt.setAttribute("style",""),Tt.removeAttribute("style")),tu=setInterval(I_,250),De.delayedCall(.5,function(){return nu=0}),xn(bt,"touchcancel",sr),xn(Tt,"touchstart",sr),ru(xn,bt,"pointerdown,touchstart,mousedown",C_),ru(xn,bt,"pointerup,touchend,mouseup",P_),Jd=De.utils.checkPrefix("transform"),Lu.push(Jd),$o=Cn(),Qu=De.delayedCall(.2,io).pause(),jo=[bt,"visibilitychange",function(){var u=ht.innerWidth,h=ht.innerHeight;bt.hidden?(b_=u,w_=h):(b_!==u||w_!==h)&&gl()},bt,"DOMContentLoaded",io,ht,"load",io,ht,"resize",gl],iu(xn),lt.forEach(function(u){return u.enable(0,1)}),l=0;l<ft.length;l+=3)su(vn,ft[l],ft[l+1]),su(vn,ft[l],ft[l+2])}else if(bt){var c=function u(){r.enable(),bt.removeEventListener("DOMContentLoaded",u)};bt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Ef=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(tu)||(tu=i)&&setInterval(I_,i),"ignoreMobileResize"in n&&(Zd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(iu(vn)||iu(xn,n.autoRefreshEvents||"none"),vx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Qn(n),o=ft.indexOf(s),a=go(s);~o&&ft.splice(o,a?6:2),i&&(a?pr.unshift(ht,i,Tt,i,vi,i):pr.unshift(s,i))},r.clearMatchMedia=function(n){lt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(pi(n)?Qn(n):n).getBoundingClientRect(),a=o[s?uo:ho]*i||0;return s?o.right-a>0&&o.left+a<ht.innerWidth:o.bottom-a>0&&o.top+a<ht.innerHeight},r.positionInViewport=function(n,i,s){pi(n)&&(n=Qn(n));var o=n.getBoundingClientRect(),a=o[s?uo:ho],l=i==null?a/2:i in th?th[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ht.innerWidth:(o.top+l)/ht.innerHeight},r.killAll=function(n){if(lt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=_o.killAll||[];_o={},i.forEach(function(s){return s()})}},r})();Qe.version="3.15.0";Qe.saveStyles=function(r){return r?fc(r).forEach(function(e){if(e&&e.style){var t=fi.indexOf(e);t>=0&&fi.splice(t,5),fi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),Qd())}}):fi};Qe.revert=function(r,e){return gm(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?gl(!0):($o||Qe.register())&&io(!0)};Qe.update=function(r){return++ft.cache&&Xr(r===!0?2:0)};Qe.clearScrollMemory=Lx;Qe.maxScroll=function(r,e){return dr(r,e?jn:un)};Qe.getScrollFunc=function(r,e){return As(Qn(r),e?jn:un)};Qe.getById=function(r){return tp[r]};Qe.getAll=function(){return lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Wi};Qe.snapDirectional=mm;Qe.addEventListener=function(r,e){var t=_o[r]||(_o[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=_o[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=De.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Dn(s)&&(s=s(),xn(Qe,"refresh",function(){return s=e.batchMax()})),fc(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var k_=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Rf=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(nn.isTouch?" pinch-zoom":""):"none",e===vi&&r(Tt,t)},uu={auto:1,scroll:1},RC=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||De.core.getCache(s),a=Cn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Tt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(uu[(l=Fi(s)).overflowY]||uu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!go(s)&&(uu[(l=Fi(s)).overflowY]||uu[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Nx=function(e,t,n,i){return nn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&RC,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&xn(bt,nn.eventTypes[0],H_,!1,!0)},onDisable:function(){return vn(bt,nn.eventTypes[0],H_,!0)}})},CC=/(input|label|select|textarea)/i,z_,H_=function(e){var t=CC.test(e.target.tagName);(t||z_)&&(e._gsapAllow=!0,z_=t)},PC=function(e){$s(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Qn(e.target)||vi,u=De.core.globals().ScrollSmoother,h=u&&u.get(),f=os&&(e.content&&Qn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=As(c,un),m=As(c,jn),_=1,g=(nn.isTouch&&ht.visualViewport?ht.visualViewport.scale*ht.visualViewport.width:ht.outerWidth)/ht.innerWidth,p=0,x=Dn(i)?function(){return i(a)}:function(){return i||2.8},y,v,S=Nx(c,e.type,!0,s),E=function(){return v=!1},b=sr,C=sr,M=function(){l=dr(c,un),C=Ll(os?1:0,l),n&&(b=Ll(0,dr(c,jn))),y=fo},T=function(){f._gsap.y=pl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(v){requestAnimationFrame(E);var X=pl(a.deltaY/2),ne=C(d.v-X);if(f&&ne!==d.v+d.offset){d.offset=ne-d.v;var U=pl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",f._gsap.y=U+"px",d.cacheID=ft.cache,Xr()}return!0}d.offset&&T(),v=!0},D,B,k,W,H=function(){M(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return f&&De.set(f,{y:"+=0"}),e.ignoreCheck=function(Y){return os&&Y.type==="touchmove"&&P()||_>1.05&&Y.type!=="touchstart"||a.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){v=!1;var Y=_;_=pl((ht.visualViewport&&ht.visualViewport.scale||1)/g),D.pause(),Y!==_&&Rf(c,_>1.01?!0:n?!1:"x"),B=m(),k=d(),M(),y=fo},e.onRelease=e.onGestureStart=function(Y,X){if(d.offset&&T(),!X)W.restart(!0);else{ft.cache++;var ne=x(),U,pe;n&&(U=m(),pe=U+ne*.05*-Y.velocityX/.227,ne*=k_(m,U,pe,dr(c,jn)),D.vars.scrollX=b(pe)),U=d(),pe=U+ne*.05*-Y.velocityY/.227,ne*=k_(d,U,pe,dr(c,un)),D.vars.scrollY=C(pe),D.invalidate().duration(ne).play(.01),(os&&D.vars.scrollY>=l||U>=l-1)&&De.to({},{onUpdate:H,duration:ne})}o&&o(Y)},e.onWheel=function(){D._ts&&D.pause(),Cn()-p>1e3&&(y=0,p=Cn())},e.onChange=function(Y,X,ne,U,pe){if(fo!==y&&M(),X&&n&&m(b(U[2]===X?B+(Y.startX-Y.x):m()+X-U[1])),ne){d.offset&&T();var Fe=pe[2]===ne,it=Fe?k+Y.startY-Y.y:d()+ne-pe[1],$e=C(it);Fe&&it!==$e&&(k+=$e-it),d($e)}(ne||X)&&Xr()},e.onEnable=function(){Rf(c,n?!1:"x"),Qe.addEventListener("refresh",H),xn(ht,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),S.enable()},e.onDisable=function(){Rf(c,!0),vn(ht,"resize",H),Qe.removeEventListener("refresh",H),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new nn(e),a.iOS=os,os&&!d()&&d(1),os&&De.ticker.add(sr),W=a._dc,D=De.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Ix(d,d(),function(){return D.pause()})},onUpdate:Xr,onComplete:W.vars.onComplete}),a};Qe.sort=function(r){if(Dn(r))return lt.sort(r);var e=ht.pageYOffset||0;return Qe.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ht.innerHeight}),lt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new nn(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return Xn;if(r===!0&&Xn)return Xn.enable();if(r===!1){Xn&&Xn.kill(),Xn=r;return}var e=r instanceof nn?r:PC(r);return Xn&&Xn.target===e.target&&Xn.kill(),go(e.target)&&(Xn=e),e};Qe.core={_getVelocityProp:Kd,_inputObserver:Nx,_scrollers:ft,_proxies:pr,bridge:{ss:function(){Wi||vo("scrollStart"),Wi=Cn()},ref:function(){return Rn}}};Mx()&&De.registerPlugin(Qe);const Mt=27,Ha=64,xo=6,En=Ha+xo,hu=1/.018,LC=(r,e=!1)=>r<=Mt?r:r<Mt+En?Mt+(e?0:(r-Mt)*xo/En):r-Ha,_m=r=>r<=Mt?r:r<Mt+xo?Mt+(r-Mt)*En/xo:r+Ha;function DC(r,e,t=!1){if(t||r<=Mt||e>=48)return 0;if(r<Mt+En)return 200*Math.PI/180*(r-Mt)/En;const n=Math.max(0,Math.min(1,(e-Mt-xo)/(48-Mt-xo)));return(200+160*(n*n*(3-2*n)))*Math.PI/180}function IC(r,e,t=!1){if(t||r<=Mt||r>=Mt+En)return e;const n=(r-Mt)/En,i=(s,o)=>{const a=Math.max(0,Math.min(1,(n-s)/(o-s)));return a*a*(3-2*a)};return n<=.25?e:n<.375?e+(200-e)*i(.25,.375):n<=.5?200:n<.625?200+200*i(.5,.625):n<=.75?400:n<.875?400-20*i(.75,.875):380+(e-380)*i(.875,1)}function NC({scroller:r,duration:e,reduced:t=!1}){Yt.registerPlugin(Qe);const n=document.createElement("div");n.className="city-story-host",n.innerHTML=`<section class="city-story" aria-label="Doha: city and waterfront">
    <div class="city-story-panels">
      <article class="city-story-panel city-story-intro" aria-labelledby="city-story-title-1">
        <div class="city-story-kicker">01 / THE CITY <span>DOHA, QATAR</span></div>
        <div class="city-story-rule"></div>
        <div class="city-story-intro-grid"><div><h2 id="city-story-title-1">DOHA<span>ALWAYS ON</span></h2><p>A city shaped by its coastline, its neighborhoods and the people who call it home.</p><div class="city-story-coordinate">25.285° N &nbsp; 51.531° E</div></div>
        <img class="city-story-map" src="assets/city-story/qatar.svg" width="245" height="365" alt="Qatar coastline with Doha marked on the eastern coast" /></div>
        <div class="city-story-bottom"><span>DOHA / QATAR</span><span>01 — 04</span></div>
      </article>
      <article class="city-story-panel" aria-labelledby="city-story-title-2">
        <div class="city-story-kicker">02 / WEST BAY <span>THE SKYLINE</span></div><div class="city-story-rule"></div>
        <h2 id="city-story-title-2">WEST BAY.<span>A DISTINCTIVE SKYLINE.</span></h2>
        <figure><img data-src="assets/city-story/west-bay.jpg" width="800" height="530" alt="The West Bay skyline photographed across Doha Bay at night" decoding="async" /><figcaption>WEST BAY / DOHA AFTER DARK</figcaption></figure>
        <p>Along the water, modern towers give Doha a skyline with a character all its own.</p>
        <div class="city-story-place">THE SKYLINE &nbsp; / &nbsp; THE BAY &nbsp; / &nbsp; THE CORNICHE</div>
        <div class="city-story-bottom"><span>THE CITY BY THE SEA</span><span>02 — 04</span></div>
      </article>
      <article class="city-story-panel" aria-labelledby="city-story-title-3">
        <div class="city-story-kicker">03 / THE ARCHITECTURE <span>CITY LANDMARKS</span></div><div class="city-story-rule"></div>
        <h2 id="city-story-title-3">DOHA IN<span>DETAIL.</span></h2>
        <figure><img data-src="assets/city-story/doha-landmark.jpg" width="800" height="1062" alt="A Doha tower illuminated at night" decoding="async" /><figcaption>AN ILLUMINATED DOHA LANDMARK</figcaption></figure>
        <p>After dark, light brings out the forms and textures of the buildings that define the city.</p>
        <div class="city-story-place">ARCHITECTURE &nbsp; / &nbsp; LIGHT &nbsp; / &nbsp; PLACE</div>
        <div class="city-story-bottom"><span>DOHA AFTER DARK</span><span>03 — 04</span></div>
      </article>
      <article class="city-story-panel city-story-outro" aria-labelledby="city-story-title-4">
        <div class="city-story-kicker">04 / THE CITY CONTINUES <span>FOLLOW THE VIEW</span></div><div class="city-story-rule"></div>
        <h2 id="city-story-title-4">A CITY<span>IN MOTION.</span></h2>
        <div class="city-story-signpost" aria-hidden="true"><span>WEST BAY</span><i></i><span>DOHA</span></div>
        <p>From the waterfront, the view opens onto more of Doha. Follow the city as the journey continues.</p>
        <div class="city-story-cue">CONTINUE THE JOURNEY <span>↓</span></div>
        <div class="city-story-bottom"><span>A CITY WORTH EXPLORING</span><span>04 — 04</span></div>
      </article>
    </div><span class="sr-only city-story-announcement" role="status" aria-live="polite"></span>
  </section>`,r.append(n);const i=n.querySelector("section"),s=[...n.querySelectorAll("article")];let o,a,l,c=0,u=0,h=NaN,f=!1,d,m=-1;const _={scrollTop(E){return arguments.length&&(u=E),u},scrollHeight:()=>(e+Ha)*hu+innerHeight,getBoundingClientRect:()=>({top:0,left:0,width:innerWidth,height:innerHeight}),pinType:"fixed"};Qe.scrollerProxy(r,_);const g=()=>{cancelAnimationFrame(d),d=requestAnimationFrame(()=>{f||(Qe.refresh(),y(c,!0))})};function p(){const E=[...n.querySelectorAll("img[data-src]")];E.length&&Promise.allSettled(E.map(b=>(b.src=b.dataset.src,delete b.dataset.src,b.decode().catch(()=>{f||(b.closest("figure").classList.add("image-unavailable"),b.alt="Reference image unavailable")})))).then(()=>{f||g()})}function x(){o?.revert(),o=Yt.context(()=>{Yt.set(s,{autoAlpha:0,yPercent:0,scale:1}),a=Yt.timeline({paused:!0}),s.forEach((E,b)=>{t?a.set(E,{autoAlpha:1},b+.02).set(E,{autoAlpha:0},b+.98):(a.fromTo(E,{autoAlpha:0,yPercent:4},{autoAlpha:1,yPercent:0,duration:.16,ease:"power1.out",immediateRender:!1},b+.02),a.fromTo(E.querySelector(".city-story-rule"),{scaleX:0,transformOrigin:"left center"},{scaleX:1,duration:.22,ease:"power1.out",immediateRender:!1},b+.06),a.to(E,{autoAlpha:0,yPercent:-2,duration:.14,ease:"power1.in"},b+.84))}),a.set({},{},4),l=Qe.create({id:"ssoc-city-story",scroller:r,trigger:i,pin:i,pinSpacing:!1,start:Mt*hu,end:(Mt+En)*hu,scrub:!0,animation:a,invalidateOnRefresh:!0})},n),g()}function y(E,b=!1){if(f||!b&&E===h)return;c=E,h=E,u=E*hu,Qe.update();const C=Math.max(0,Math.min(1,(E-Mt)/En)),M=E>Mt&&E<Mt+En;document.body.classList.toggle("city-story-active",M),n.setAttribute("aria-hidden",String(!M)),E>Mt-8&&p();const T=C*4,P=Math.min(3,Math.floor(T)),D=T-P;s.forEach((k,W)=>{const H=M&&W===P&&D>=.02&&D<.98;k.inert=!H,k.setAttribute("aria-hidden",String(!H))}),s.forEach((k,W)=>{const Y=M&&!t&&W===P&&(D<.2||D>.84)?"transform, opacity":"";k.style.willChange!==Y&&(k.style.willChange=Y)});const B=M?P:-1;B!==m&&(m=B,n.querySelector(".city-story-announcement").textContent=B<0?"":s[B].querySelector("h2").textContent)}const v=()=>g();window.addEventListener("resize",v);const S=E=>{E.persisted&&g()};return window.addEventListener("pageshow",S),x(),y(0,!0),document.fonts?.ready.then(()=>{f||g()}),{update:y,refresh:g,setReduced(E){t!==E&&(t=E,x(),y(c,!0))},getState:()=>({position:c,progress:l.progress,active:l.isActive,panel:m,holdTime:Mt,holdSpan:En,cameraTravel:xo}),destroy(){f=!0,cancelAnimationFrame(d),window.removeEventListener("resize",v),window.removeEventListener("pageshow",S),o.revert(),Qe.scrollerProxy(r,null);const E=Qe.core._proxies,b=E.indexOf(_);b>0&&E[b-1]===r&&E.splice(b-1,2),n.remove(),document.body.classList.remove("city-story-active")}}}const Br=109,nh=72,xh=2,Cf=_m(nh),vm=(Br-nh)*(xh-1),rp=_m(Br),yh=2*xh,ih=rp+vm,yn=ih+yh,Kn=90,xm=120,Sh=4,Ux=(xm-Br)*(Sh-1),sp=yn+Kn,UC=sp+(xm-Br)*Sh,OC=om+Ha+vm+yh+Kn+Ux,V_=1/.018,FC=(r,e=!1)=>LC(r<Cf?r:r<ih?Cf+(r-Cf)/xh:r<sp?rp:r<UC?rp+(r-sp)/Sh:r-Kn-yh-Ux-vm,e),Ox=r=>_m(r)+Math.min(Math.max(r-nh,0),Br-nh)*(xh-1)+(r>Br?yh+Kn+Math.min(Math.max(r-Br,0),xm-Br)*(Sh-1):0),BC=[{label:"01 / STADIUM SECURITY",title:"Every great event begins with a secure environment.",description:"Stadium security, controlled spectator access and trained personnel help protect thousands of visitors throughout major sporting events.",alt:"Mounted security officers and spectators outside Lusail Stadium",className:"stadium-story-first"},{label:"02 / ACCESS CONTROL",title:"A secure welcome for every spectator.",description:"Organized entry points, security screening and controlled access help thousands of visitors enter stadiums safely and efficiently, balancing protection with a welcoming experience.",alt:"Security screening checkpoints at a stadium entrance",className:"stadium-story-reverse"},{label:"03 / VENUE PROTECTION",title:"Protection at every level.",description:"From spectator areas to restricted zones, trained security personnel and carefully planned protective measures help safeguard stadium facilities, athletes and event participants.",alt:"Security personnel outside a venue at night",className:"stadium-story-third"},{label:"04 / CROWD SAFETY",title:"Thousands of people. One safe experience.",description:"Managing spectator movement is essential to major-event security. Clearly defined routes, ground-level crowd monitoring and coordinated venue personnel help maintain safe circulation.",alt:"Spectators arriving at Lusail Stadium and moving through entry routes",className:"stadium-story-reverse stadium-story-fourth"},{label:"05 / SAFE EVENT EXPERIENCE",title:"From the opening gates to the final departure.",description:"Stadium security continues beyond the final whistle. Managed exits, protected pedestrian routes and organized departures help ensure visitors leave safely.",alt:"Lusail Stadium illuminated by fireworks at night",className:"stadium-story-finale"}],kC=r=>r.split(" ").map(e=>`<span class="stadium-story-word">${e}</span>`).join(" ");function zC({scroller:r,reduced:e=!1}){Yt.registerPlugin(Qe);const t=document.createElement("div");t.className="stadium-story-host",t.innerHTML=`<section class="stadium-story" aria-label="Stadium security photography">
    <div class="stadium-story-chapters">${BC.map((v,S)=>`
      <article class="stadium-story-chapter ${v.className}" aria-labelledby="stadium-story-title-${S+1}">
        <figure class="stadium-story-media"><img data-src="assets/stadium-story/${String(S+1).padStart(2,"0")}.jpg" alt="${v.alt}" width="1600" height="1000" decoding="async"></figure>
        <div class="stadium-story-shade" aria-hidden="true"></div>
        <div class="stadium-story-copy">
          <span class="stadium-story-kicker">${v.label}<span>SSOC / QATAR</span></span>
          <h2 id="stadium-story-title-${S+1}">${kC(v.title)}</h2>
          <p>${v.description}</p>
          <span class="stadium-story-counter">${String(S+1).padStart(2,"0")} <i></i> 05</span>
        </div>
      </article>`).join("")}</div>
    <span class="sr-only stadium-story-announcement" role="status" aria-live="polite"></span>
  </section>`,r.append(t);const n=t.querySelector("section"),i=[...t.querySelectorAll("article")];let s,o,a,l=0,c=NaN,u=!1,h,f=-1,d=!1;const m=()=>{cancelAnimationFrame(h),h=requestAnimationFrame(()=>{u||(Qe.refresh(),p(l,!0))})};function _(){if(d)return;d=!0;const v=[...t.querySelectorAll("img[data-src]")],S=E=>(E.src=E.dataset.src,delete E.dataset.src,E.decode().catch(()=>{u||(E.closest("figure").classList.add("image-unavailable"),E.alt="Reference photograph unavailable")}));Promise.allSettled(v.slice(0,2).map(S)).then(()=>{if(u)return;const E=()=>v.slice(2).forEach(S);"requestIdleCallback"in window?requestIdleCallback(E,{timeout:1200}):setTimeout(E,60)})}function g(){s?.revert(),s=Yt.context(()=>{Yt.set(i,{autoAlpha:0}),o=Yt.timeline({paused:!0}),i.forEach((v,S)=>{const E=v.querySelector(".stadium-story-media"),b=E.querySelector("img"),C=v.querySelector(".stadium-story-copy"),M=[...v.querySelectorAll(".stadium-story-word")];if(e){o.set(v,{autoAlpha:1},S+.02).set(v,{autoAlpha:0},S+.98);return}const T=["inset(0% 0% 0% 0%)","inset(48% 0% 48% 0%)","polygon(0 0, 16% 0, 0 100%, 0 100%)","inset(0% 0% 0% 0%)","inset(0% 0% 0% 0%)"],P=S===2?"polygon(0 0, 100% 0, 100% 100%, 0 100%)":"inset(0% 0% 0% 0%)",D=S!==0&&S!==4,B=S===0?S+.02:S-.07;Yt.set(E,{...D?{clipPath:T[S]}:{},xPercent:S===1?18:S===3?26:0,scale:S===0?.72:S===4?.78:1}),Yt.set(b,{scale:S===4?1.12:1.08,xPercent:S===1?-5:S===3?5:0,yPercent:S===2?-4:0}),Yt.set(C.children,{autoAlpha:0,yPercent:15}),Yt.set(M,{autoAlpha:0,yPercent:65}),o.to(v,{autoAlpha:1,duration:.1,ease:"power1.out"},B),o.to(E,{...D?{clipPath:P}:{},xPercent:0,scale:1,duration:S===4?.32:.29,ease:"power2.out"},B+.02),o.to(b,{scale:1,xPercent:0,yPercent:0,duration:.78,ease:"none"},B+.07),o.to(C.children,{autoAlpha:1,yPercent:0,duration:.2,stagger:.045,ease:"power2.out"},B+.12),o.to(M,{autoAlpha:1,yPercent:0,duration:.23,stagger:.018,ease:"power2.out"},B+.18),o.to(C,{autoAlpha:0,yPercent:-3,duration:.13,ease:"power1.in"},S+.85),o.to(v,{autoAlpha:0,duration:.13,ease:"power1.in"},S+.87)}),o.set({},{},5),a=Qe.create({id:"ssoc-stadium-story",scroller:r,trigger:n,pin:n,pinSpacing:!1,start:yn*V_,end:(yn+Kn)*V_,scrub:!0,animation:o,invalidateOnRefresh:!0})},t),m()}function p(v,S=!1){if(u||!S&&v===c)return;l=v,c=v,v>yn-40&&_();const E=v>yn&&v<yn+Kn;document.body.classList.toggle("stadium-story-active",E),t.setAttribute("aria-hidden",String(!E));const b=Math.max(0,Math.min(5,(v-yn)/Kn*5)),C=Math.min(4,Math.floor(b)),M=b-C;i.forEach((k,W)=>{const H=E&&W===C&&M>=.02&&M<.98;k.inert=!H,k.setAttribute("aria-hidden",String(!H));const Y=E&&!e&&W===C&&(M<.35||M>.85)?"transform, opacity":"";k.style.willChange!==Y&&(k.style.willChange=Y)});const T=i[0].querySelector(".stadium-story-media"),D=!e&&v>yn-8&&v<yn+Kn*.12?"transform, opacity":"";T.style.willChange!==D&&(T.style.willChange=D);const B=E?C:-1;B!==f&&(f=B,t.querySelector(".stadium-story-announcement").textContent=B<0?"":i[B].querySelector("h2").textContent)}const x=()=>m();window.addEventListener("resize",x);const y=v=>{v.persisted&&m()};return window.addEventListener("pageshow",y),g(),p(0,!0),document.fonts?.ready.then(()=>{u||m()}),{update:p,refresh:m,setReduced(v){e!==v&&(e=v,g(),p(l,!0))},getState:()=>({position:l,progress:a.progress,active:a.isActive,panel:f,holdTime:Br,start:yn,holdSpan:Kn}),destroy(){u=!0,cancelAnimationFrame(h),window.removeEventListener("resize",x),window.removeEventListener("pageshow",y),s.revert(),t.remove(),document.body.classList.remove("stadium-story-active")}}}const ym=136,an=Ox(ym),In=120,HC=OC+In,op=an+In,G_=1/.018,VC=(r,e=!1)=>FC(r<an?r:r<op?an:r-In,e),ap=r=>Ox(r)+(r>ym?In:0),Pf=[{eyebrow:"01 / STREETS & TRAFFIC",heading:"KEEPING THE CITY MOVING.",description:"Monitor traffic conditions, road congestion and critical routes connecting major event venues across Qatar.",alt:"Busy Qatar road intersection with moving traffic"},{eyebrow:"02 / VENUES & PERIMETERS",heading:"EVERY VENUE. EVERY APPROACH.",description:"Maintain visibility across event venues, access points, surrounding areas and security perimeters.",alt:"Security personnel and vehicles near an illuminated event venue"},{eyebrow:"03 / CROWD MOVEMENT",heading:"UNDERSTANDING MOVEMENT. SUPPORTING SAFETY.",description:"Follow crowd density, pedestrian movement and congestion around venues and public gathering areas.",alt:"Spectators and event security personnel at a venue entrance"},{eyebrow:"04 / METRO & TRANSPORT",heading:"CONNECTING EVERY JOURNEY.",description:"Follow passenger movement and transport connections as visitors travel between the city and major event venues.",alt:"Passengers boarding a Doha Metro train"},{eyebrow:"05 / SECURITY RESPONSE",heading:"FROM AWARENESS TO COORDINATED ACTION.",description:"Bring together operational information to support effective communication, timely decisions and coordinated security response.",alt:"Line of Qatar police vehicles travelling along a road"}],W_=r=>`assets/command-story/${String(r+1).padStart(2,"0")}.jpg`;function GC({scroller:r,reduced:e=!1,onNavigate:t=()=>{}}){Yt.registerPlugin(Qe);const n=document.createElement("div");n.className="command-story-host",n.innerHTML=`<section class="command-story" aria-label="Five illustrative operational perspectives">
    ${Pf.map((P,D)=>`<article class="command-story-chapter command-story-chapter-${D+1} ${D%2?"command-story-reverse":""}" aria-labelledby="command-story-title-${D+1}">
      <figure class="command-story-media"><img data-src="${W_(D)}" width="${D===4?1200:1536}" height="${D===4?800:1024}" decoding="async" alt="${P.alt}"></figure>
      <div class="command-story-copy"><span class="command-story-eyebrow">${P.eyebrow}</span><h2 id="command-story-title-${D+1}">${P.heading}</h2><p>${P.description}</p><span class="command-story-note">ILLUSTRATIVE VIEW <b>${String(D+1).padStart(2,"0")} / 05</b></span></div>
    </article>`).join("")}
    <article class="command-story-finale" aria-labelledby="command-story-finale-title"><div class="command-story-grid" aria-label="Five operational perspectives shown together">${Pf.map((P,D)=>`<figure><img data-src="${W_(D)}" width="${D===4?1200:1536}" height="${D===4?800:1024}" decoding="async" alt="${P.alt}"><figcaption>${P.eyebrow.slice(5)}</figcaption></figure>`).join("")}</div><div class="command-story-finale-copy"><span>SSOC / QATAR · CONCEPT VISUALIZATION</span><h2 id="command-story-finale-title">ONE SHARED PERSPECTIVE.</h2><p>Connected information. Coordinated operations. Safer events.</p></div></article>
    <nav class="command-story-dots" aria-label="Command Room chapters">${Pf.map((P,D)=>`<button type="button" aria-label="Go to chapter ${D+1}: ${P.eyebrow.slice(5)}" title="${P.eyebrow.slice(5)}"><span></span></button>`).join("")}</nav>
    <span class="sr-only command-story-announcement" role="status" aria-live="polite"></span>
  </section>`,r.append(n);const i=n.querySelector("section"),s=[...n.querySelectorAll(".command-story-chapter")],o=n.querySelector(".command-story-finale"),a=[...n.querySelectorAll(".command-story-dots button")],l=n.querySelector(".command-story-announcement");let c,u,h,f=0,d=NaN,m=-1,_=!1,g,p=!1;const x=P=>{const D=s[P],B=D.querySelector(".command-story-media"),[k,W,H,Y]=D.querySelector(".command-story-copy").children;return{panel:D,media:B,eyebrow:k,heading:W,description:H,note:Y}},y=()=>{cancelAnimationFrame(g),g=requestAnimationFrame(()=>{_||(Qe.refresh(),E(f,!0))})};function v(){if(p)return;p=!0;const P=[...n.querySelectorAll("img[data-src]")],D=B=>(B.src=B.dataset.src,delete B.dataset.src,B.decode().catch(()=>{_||B.closest("figure").classList.add("image-unavailable")}));Promise.allSettled(P.slice(0,2).map(D)).then(()=>{if(_)return;const B=()=>P.slice(2).forEach(D);"requestIdleCallback"in window?requestIdleCallback(B,{timeout:900}):setTimeout(B,40)})}function S(){c?.revert(),c=Yt.context(()=>{Yt.set([...s,o],{autoAlpha:0}),u=Yt.timeline({paused:!0}),s.forEach((B,k)=>{const W=x(k),H=[W.eyebrow,W.heading,W.description,W.note];if(e){u.set(B,{autoAlpha:1},k+.02).set(B,{autoAlpha:0},k+.98);return}Yt.set(W.media,{autoAlpha:0,xPercent:-24}),Yt.set(H,{autoAlpha:0,yPercent:32}),u.to(B,{autoAlpha:1,duration:.06,ease:"power1.out"},k+.01),u.to(W.media,{autoAlpha:1,xPercent:0,duration:.24,ease:"power1.out"},k+.03),u.to(W.eyebrow,{autoAlpha:1,yPercent:0,duration:.12,ease:"power1.out"},k+.1),u.to(W.heading,{autoAlpha:1,yPercent:0,duration:.16,ease:"power1.out"},k+.13),u.to(W.description,{autoAlpha:1,yPercent:0,duration:.15,ease:"power1.out"},k+.24),u.to(W.note,{autoAlpha:1,yPercent:0,duration:.12,ease:"power1.out"},k+.3),u.to(H,{autoAlpha:0,yPercent:-27,duration:.11,ease:"power2.inOut"},k+.77),u.to(W.media,{autoAlpha:0,xPercent:k%2?36:-36,duration:.14,ease:"power2.inOut"},k+.82),u.to(B,{autoAlpha:0,duration:.05,ease:"power2.inOut"},k+.94)});const P=[...o.querySelectorAll("figure")],D=[...o.querySelector(".command-story-finale-copy").children];e?u.set(o,{autoAlpha:1},5.02).set(o,{autoAlpha:0},5.98):(Yt.set(P,{autoAlpha:0,yPercent:16}),Yt.set(D,{autoAlpha:0,yPercent:20}),u.to(o,{autoAlpha:1,duration:.07,ease:"power1.out"},5.02),u.to(P,{autoAlpha:1,yPercent:0,duration:.2,stagger:.025,ease:"power1.out"},5.08),u.to(D,{autoAlpha:1,yPercent:0,duration:.18,stagger:.045,ease:"power1.out"},5.23),u.to(o,{autoAlpha:0,duration:.14,ease:"power2.inOut"},5.84)),u.set({},{},6),h=Qe.create({id:"ssoc-command-story",scroller:r,trigger:i,pin:i,pinSpacing:!1,start:an*G_,end:op*G_,scrub:!0,animation:u,invalidateOnRefresh:!0})},n),y()}function E(P,D=!1){if(_||!D&&P===d)return;f=d=P,P>an-55&&v();const B=P>an&&P<op;document.body.classList.toggle("command-story-active",B),n.setAttribute("aria-hidden",String(!B));const k=Math.max(0,Math.min(6,(P-an)/In*6)),W=Math.min(5,Math.floor(k)),H=k-W;s.forEach((ne,U)=>{const pe=B&&U===W&&H>=.01&&H<.99;ne.inert=!pe,ne.setAttribute("aria-hidden",String(!pe));const Fe=pe&&!e&&(H<.4||H>.77)?"transform, opacity":"";ne.style.willChange!==Fe&&(ne.style.willChange=Fe)});const Y=B&&W===5&&H>=.02&&H<.98;o.inert=!Y,o.setAttribute("aria-hidden",String(!Y));const X=B&&W<5?W:-1;X!==m&&(m=X,a.forEach((ne,U)=>{ne.setAttribute("aria-current",U===X?"step":"false"),Yt.to(ne.firstElementChild,{scale:U===X?1.4:1,duration:e?0:.26,ease:"power2.out",overwrite:!0})}),l.textContent=X<0?"":s[X].querySelector("h2").textContent)}const b=P=>{const D=a.indexOf(P.currentTarget);D>=0&&t(an+(D+.5)*In/6)},C=P=>{if(!["ArrowUp","ArrowDown","PageUp","PageDown"].includes(P.key)||(P.preventDefault(),P.stopPropagation(),P.repeat))return;const D=a.indexOf(P.currentTarget)+(P.key.endsWith("Up")?-1:1);D>=0&&D<5&&t(an+(D+.5)*In/6)};a.forEach(P=>{P.addEventListener("click",b),P.addEventListener("keydown",C)});const M=()=>y();window.addEventListener("resize",M);const T=P=>{P.persisted&&y()};return window.addEventListener("pageshow",T),S(),E(0,!0),document.fonts?.ready.then(()=>{_||y()}),{update:E,jumpToPosition:P=>E(P,!0),refresh:y,setReduced(P){e!==P&&(e=P,S(),E(f,!0))},getState:()=>({position:f,progress:h.progress,active:h.isActive,panel:m,holdTime:ym,start:an,holdSpan:In}),destroy(){_=!0,cancelAnimationFrame(g),a.forEach(P=>{P.removeEventListener("click",b),P.removeEventListener("keydown",C)}),window.removeEventListener("resize",M),window.removeEventListener("pageshow",T),c.revert(),n.remove(),document.body.classList.remove("command-story-active")}}}const Fx=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),xP=(r,e,t)=>r+(e-r)*t,X_=(r,e,t)=>{const n=Fx((t-r)/(e-r));return n*n*(3-2*n)},yP=(r,e,t,n=.012)=>X_(e,e+n,r)*(1-X_(t-n,t,r)),SP=r=>{const e=Math.sin(r*127.1+311.7)*43758.5453;return e-Math.floor(e)},Sm=.84,WC=.56+.44*Sm,ro=.56/WC,MP=r=>({mission:r/ro,flight:Fx((r-ro)/(1-ro))*Sm,inFlight:r>=ro}),XC=136,oi=an+In,Sr=264,Bx=150,Mm=ap(Bx)-oi,kx=HC+Sr-Mm,YC=[.834,.85,.87,.887].map(r=>oi+Sr*ro*r),Tm=r=>oi+Sr*(ro+r/Sm*(1-ro)),zx=oi+Sr,qC=(r,e=!1)=>VC(r<oi?r:r<zx?oi:r-Sr+Mm,e),$C=r=>r<=XC?ap(r):r<=Bx?oi:ap(r)+Sr-Mm;function jC({scroller:r}){const e=document.createElement("div");e.className="cooperation-story-host",e.setAttribute("aria-label","International cooperation journey"),e.setAttribute("aria-hidden","true"),r.append(e);let t,n=!1,i=0;to(async()=>{const{mountCooperationExperience:o}=await import("./chunk-BsNQe3qd.js");return{mountCooperationExperience:o}},__vite__mapDeps([0,1]),import.meta.url).then(({mountCooperationExperience:o})=>{n||(t=o(e,()=>{e.classList.add("is-ready"),s(i)},a=>{console.error("Cooperation scene failed to load",a),t?.dispose(),(e.shadowRoot??e).textContent="The cooperation scene could not be loaded. Reload to retry.",e.classList.add("is-ready","has-error")}),s(i))}).catch(o=>{console.error("Cooperation scene module failed to load",o),e.textContent="The cooperation scene could not be loaded. Reload to retry.",e.classList.add("is-ready","has-error")});function s(o){i=o;const a=o>=oi&&o<zx;e.classList.toggle("is-active",a),e.setAttribute("aria-hidden",String(!a));const l=Math.max(0,Math.min(1,(o-oi)/Sr));t?.setProgress(l,a,document.body.classList.contains("reduced-motion"))}return{update:s,destroy(){n=!0,t?.dispose(),e.remove()}}}const Rs=kx,Em=32,mr=Rs+Em,Mh=12,Hx=150,wi=mr+Mh,Yr=(r,e=!1)=>qC(Math.min(r,kx),e),lr=r=>$C(r),Y_=[{category:"OUR MISSION",title:"A Shared Approach to Safety in Qatar",description:"Explore how SSOC brings planning, communication and on-the-ground teams together around a common goal: a safe, welcoming experience.",image:"assets/news/coordination.jpg",alt:"Security operations room with multiple monitoring screens"},{category:"EVENT SECURITY",title:"Readiness Begins Before the Gates Open",description:"From venue preparation to arrival routes, see the connected decisions that support a smooth visitor journey at major events in Qatar.",image:"assets/news/technology.jpg",alt:"Connected digital globe and monitoring network"},{category:"VISITOR EXPERIENCE",title:"People at the Heart of Every Event",description:"A closer look at the teams, spaces and shared awareness that help visitors move confidently from the city to the stadium.",image:"assets/news/partnership.jpg",alt:"Partners meeting around a table in an operations room"},{category:"COORDINATION",title:"One View Across the Event Journey",description:"Discover the value of a shared perspective as teams follow activity across the city, venue approaches and event spaces.",image:"assets/news/technology.jpg",alt:"Connected digital globe and monitoring network"},{category:"OPERATIONS",title:"Clear Communication, Timely Decisions",description:"See how information can move between teams so each part of an event journey is understood in context.",image:"assets/news/coordination.jpg",alt:"Security operations room with multiple monitoring screens"},{category:"VENUE ACCESS",title:"A Considered Approach to Entry",description:"Explore how wayfinding, screening and staff support contribute to an orderly arrival at the venue.",image:"assets/news/partnership.jpg",alt:"Partners meeting around a table in an operations room"},{category:"GLOBAL COOPERATION",title:"Working Together Across Borders",description:"Shared planning and open communication connect local and international partners around event safety in Qatar.",image:"assets/news/partnership.jpg",alt:"Partners meeting around a table in an operations room"},{category:"CROWD MOVEMENT",title:"Supporting the Flow of People",description:"Follow the visitor journey through public spaces and see why coordinated movement matters throughout an event.",image:"assets/news/technology.jpg",alt:"Connected digital globe and monitoring network"},{category:"SHARED READINESS",title:"Prepared Together for Every Moment",description:"SSOC Qatar brings the story back to the people and partnerships behind a calm, connected event experience.",image:"assets/news/coordination.jpg",alt:"Security operations room with multiple monitoring screens"}],Lf=r=>Math.max(0,Math.min(1,r));function KC({scroller:r,getFooterHeight:e=()=>0}){const t=document.createElement("section");t.className="news-story-host",t.setAttribute("aria-label","Upcoming news"),t.setAttribute("aria-hidden","true"),t.innerHTML=`<div class="news-map-mask" aria-hidden="true"></div>
    <div class="news-panel">
      <header class="news-heading"><span class="news-heading-rule" aria-hidden="true"></span><h2>UPCOMING NEWS</h2>
        <nav class="news-controls" aria-label="News pages">
          <button class="news-arrow news-previous" type="button" aria-label="Previous news page"><img src="assets/news/arrow-left.svg" width="12" height="12" alt=""></button>
          <span class="news-page" aria-live="polite">1 / 3</span>
          <button class="news-arrow news-next" type="button" aria-label="Next news page"><img src="assets/news/arrow-right.svg" width="12" height="12" alt=""></button>
        </nav>
      </header>
      <div class="news-content">
        <div class="news-carousel" aria-label="SSOC Qatar news stories">
          <div class="news-card-list">${Y_.map((x,y)=>`<article class="news-card" data-news-card="${y}">
          <img class="news-card-image" src="${x.image}" alt="${x.alt}" width="340" height="160" loading="lazy" decoding="async">
          <div class="news-card-content"><span class="news-category">${x.category}</span><h3>${x.title}</h3><p>${x.description}</p>
            <div class="news-card-footer"><span>SSOC QATAR</span><button type="button" data-news-detail="${y}" aria-label="Read more: ${x.title}"><img src="assets/news/arrow-right.svg" width="12" height="12" alt="">READ MORE</button></div>
          </div>
        </article>`).join("")}</div>
        </div>
      </div>
    </div>
    <dialog class="news-detail" aria-labelledby="news-detail-title"><button class="news-detail-close" type="button" aria-label="Close news details">&times;</button><span class="news-detail-category"></span><h2 id="news-detail-title"></h2><p class="news-detail-description"></p><span class="news-detail-status">SSOC QATAR</span></dialog>`,r.append(t);const n=[...t.querySelectorAll(".news-card")],i=t.querySelector(".news-page"),s=t.querySelector(".news-previous"),o=t.querySelector(".news-next"),a=t.querySelector(".news-card-list"),l=t.querySelector(".news-carousel"),c=t.querySelector(".news-panel"),u=t.querySelector(".news-detail");let h=0;const f=()=>matchMedia("(max-width: 760px)").matches?1:matchMedia("(max-width: 1100px)").matches?2:3,d=()=>Math.ceil(n.length/f());function m(x,y=!0){h=Math.max(0,Math.min(d()-1,x));const v=Math.min(h*f(),n.length-f()),S=n[v].offsetLeft-n[0].offsetLeft;a.style.transitionDuration=y?"":"0ms",a.style.transform=`translate3d(${-S}px,0,0)`,y||requestAnimationFrame(()=>{a.style.transitionDuration=""}),i.textContent=`${h+1} / ${d()}`,s.disabled=h===0,o.disabled=h===d()-1,n.forEach((E,b)=>{const C=b>=v&&b<v+f();E.inert=!C,E.setAttribute("aria-hidden",String(!C))})}s.addEventListener("click",()=>m(h-1)),o.addEventListener("click",()=>m(h+1));const _=new ResizeObserver(()=>m(h,!1));_.observe(l);let g;l.addEventListener("touchstart",x=>{g={x:x.touches[0].clientX,y:x.touches[0].clientY}},{passive:!0}),l.addEventListener("touchmove",x=>{if(!g)return;const y=x.touches[0].clientX-g.x,v=x.touches[0].clientY-g.y;Math.abs(y)>Math.abs(v)+8&&x.stopPropagation()},{passive:!0}),l.addEventListener("touchend",x=>{if(!g)return;const y=x.changedTouches[0].clientX-g.x,v=x.changedTouches[0].clientY-g.y;Math.abs(y)>50&&Math.abs(y)>Math.abs(v)&&m(h+(y<0?1:-1)),g=null}),t.querySelectorAll("[data-news-detail]").forEach(x=>x.addEventListener("click",()=>{const y=Y_[Number(x.dataset.newsDetail)];u.querySelector(".news-detail-category").textContent=y.category,u.querySelector("#news-detail-title").textContent=y.title,u.querySelector(".news-detail-description").textContent=y.description,u.showModal()})),t.querySelector(".news-detail-close").addEventListener("click",()=>u.close()),u.addEventListener("click",x=>{x.target===u&&u.close()}),m(0,!1);function p(x,y=!1){const v=Lf((x-Rs)/Em),S=x>Rs+.001,E=y?Number(S):1-Math.pow(1-Lf(v/.65),3),b=Lf((x-mr)/Mh),C=y?+(x>mr):b*b*(3-2*b),M=c.offsetTop+c.offsetHeight+Hx+e()-innerHeight;t.style.setProperty("--news-mask",E.toFixed(4)),t.style.setProperty("--news-translate",`calc(${((1-E)*100).toFixed(2)}svh - ${(C*M).toFixed(2)}px)`),t.style.setProperty("--news-opacity",x>mr?"0.7":E.toFixed(4)),t.classList.toggle("is-active",S),t.setAttribute("aria-hidden",String(!S)),t.inert=!S,c.inert=C>.01,c.setAttribute("aria-hidden",String(C>.01)),document.body.classList.toggle("news-story-active",S);const T=document.querySelector('.primary-nav [data-scene="news"]');S?(document.querySelectorAll(".primary-nav [data-scene]").forEach(P=>P.removeAttribute("aria-current")),T?.setAttribute("aria-current","step")):T?.removeAttribute("aria-current"),S&&document.body.classList.remove("globe-draggable")}return{update:p,getPanelBottom:()=>c.offsetTop+c.offsetHeight,destroy(){_.disconnect(),u.open&&u.close(),t.remove(),document.body.classList.remove("news-story-active")}}}const q_=r=>Math.max(0,Math.min(1,r));function JC({scroller:r,onNavigate:e,getNewsBottom:t}){const n=document.createElement("section");n.className="footer-story-host",n.setAttribute("aria-label","Site footer"),n.setAttribute("aria-hidden","true"),n.innerHTML=`<footer class="site-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <img class="footer-crest" src="assets/footer/crest.png" width="72" height="92" alt="Safety and Security Operations Committee crest" decoding="async">
          <strong class="footer-brand-en">Safety and Security<br>Operations Committee</strong>
          <span class="footer-brand-rule" aria-hidden="true"></span>
          <strong class="footer-brand-ar" lang="ar" dir="rtl">لجنة عمليات<br>الأمن والسلامة</strong>
        </div>
        <div class="footer-spacer" aria-hidden="true"></div>
        <nav class="footer-menu" aria-label="Footer navigation">
          <h2>Menu</h2>
          <button type="button" data-footer-scene="home">Home</button>
          <button type="button" data-footer-scene="mission">About</button>
          <button type="button" data-footer-scene="event-security">Experience</button>
          <button type="button" data-footer-scene="operations">Competences</button>
          <button type="button" data-footer-scene="cooperation">Collaborations</button>
          <button type="button" data-footer-scene="news">News</button>
        </nav>
        <div class="footer-contacts">
          <h2>Contacts</h2>
          <div class="footer-contact-row"><img src="assets/footer/phone.svg" width="14" height="14" alt=""><span>+974 00000000</span></div>
          <div class="footer-contact-row"><img src="assets/footer/mail.svg" width="14" height="14" alt=""><span>mail@sc.qa</span></div>
          <div class="footer-contact-row footer-address"><img src="assets/footer/map-pin.svg" width="14" height="14" alt=""><span>Qatar, Doha,<br>Al Sadd Str.</span></div>
          <div class="footer-socials" aria-label="Social platforms">
            <span role="img" aria-label="Instagram"><img src="assets/footer/instagram.svg" width="18" height="18" alt=""></span>
            <span role="img" aria-label="Facebook"><img src="assets/footer/facebook.svg" width="18" height="18" alt=""></span>
            <span role="img" aria-label="LinkedIn"><img src="assets/footer/linkedin.svg" width="18" height="18" alt=""></span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© All rights reserved.</span>
        <span>All rights to the materials published on the site belong to SSOC</span>
        <span>2017 — 2024</span>
      </div>
    </footer>`,r.append(n),n.querySelectorAll("[data-footer-scene]").forEach(o=>{o.addEventListener("click",()=>e(o.dataset.footerScene))});const i=n.querySelector(".site-footer");function s(o,a=!1){const l=q_((o-mr)/Mh),c=o>mr+.001,u=a?Number(c):l*l*(3-2*l),h=t()+Hx,f=innerHeight-i.offsetHeight,d=a?Number(c):1-Math.pow(1-q_(l/.55),2);n.style.setProperty("--footer-opacity",d.toFixed(4)),n.style.setProperty("--footer-translate",`${(h+(f-h)*u).toFixed(2)}px`),n.classList.toggle("is-active",c),n.setAttribute("aria-hidden",String(d<.5)),n.inert=d<.5,document.body.classList.toggle("footer-story-active",u>.6)}return{update:s,getHeight:()=>i.offsetHeight,destroy(){n.remove(),document.body.classList.remove("footer-story-active")}}}const qe=r=>document.getElementById(r),$n=(r,e,t)=>vt.smoothstep(t,r,e);let Bl=0,js=0,kl=0,fu=0,Vx;const ZC=new Promise(r=>{Vx=r});function Gx(r){const e=fu?Math.min(r-fu,40):16;fu=r,js=Math.min(Bl,js+Math.min(1,e*.06));const t=Math.floor(js);if(qe("loading-progress").setAttribute("aria-valuenow",String(t)),qe("loading-progress").querySelector(".loading-fill").style.width=`${js}%`,qe("loading-percent").textContent=`${t}%`,js>=100){kl=0,Vx();return}js<Bl?kl=requestAnimationFrame(Gx):(kl=0,fu=0)}function ji(r){Bl=Math.max(Bl,Math.min(r,100)),!kl&&js<Bl&&(kl=requestAnimationFrame(Gx))}const Wx=matchMedia("(prefers-reduced-motion: reduce)"),I={time:0,targetTime:0,scrollTime:0,scrollTarget:0,reduced:Wx.matches,ready:!1,scale:innerWidth<700?.8:1,fps:0},QC=500,eP=.75,tP=.5,$_=Mt+En,j_=Tm(.75),nP=Tm(.82),iP=Tm(.84),Xx=[...Array.from({length:5},(r,e)=>({position:yn+(e+.5)*Kn/5,duration:tP})),...YC.map(r=>({position:r,duration:eP}))];let Iu=0,Nu=1,lp=-1,Uu=0,Ou=!1,da=!1;function Bn(r){if(da===r)return;da=r,Iu=0,Nu=1,lp=r?Xx.findIndex(t=>t.position>I.scrollTime+.05):-1,Uu=0,Ou=!1,r||(I.scrollTarget=I.scrollTime,I.targetTime=Yr(I.scrollTime,I.reduced));const e=qe("autoplay-toggle");e.setAttribute("aria-pressed",String(r)),e.setAttribute("aria-label",r?"Pause cinematic journey":"Play cinematic journey")}function rP(r){I.scrollTarget=vt.clamp(I.scrollTarget+r,Math.max(0,I.scrollTime-8),Math.min(wi,I.scrollTime+8)),I.targetTime=Yr(I.scrollTarget,I.reduced)}function sP(r){Iu+=r;const e=Xx[lp];if(e&&I.scrollTarget>=e.position-.001){I.scrollTarget=e.position,I.targetTime=Yr(e.position,I.reduced),Ou||(Ou=!0,Uu=e.duration),Uu-=r,Uu<=0&&(lp++,Ou=!1,Iu=0);return}const t=1+$n(68,76,I.time)*(1-$n(106,112,I.time)),n=1-.3*$n($_-8,$_+8,I.scrollTime)*(1-$n(ih-12,ih,I.scrollTime)),i=1-.4*$n(j_-2,j_+2,I.scrollTime)*(1-$n(nP,iP,I.scrollTime));Nu=vt.damp(Nu,t*iC(I.time)*n*i,3,r);let s=QC*r*Nu*$n(0,.4,Iu);if(e){const o=e.position-I.scrollTarget;s*=.18+.82*$n(0,1.35,o),s=Math.min(s,o/.018)}gc(s,"autoplay")}I.preparationTimings=[];let mt,Wt,zt,Ui,K_,cp,_l,yo,Yx,up,_i,zl,rh,gr,du,so,ms,gs,_s,pa,vs,xs,Hl=0,ma=null;async function oP(){return du||(du=(async()=>{const r=performance.now(),e=document.fonts.load("500 80px Lusail"),t=to(async()=>{const{buildCommand:a}=await import("./chunk-DqI9EBOM.js");return{buildCommand:a}},[],import.meta.url).then(({buildCommand:a})=>a(Wt)).then(a=>{rh=a,rh.update(I.time)}),n=to(()=>import("./chunk-BJv5DdM8.js"),__vite__mapDeps([2,1,3]),import.meta.url).then(async({buildVenue:a})=>(await e,a(Wt,innerWidth<700))).then(async a=>{_i=a;const{buildAccess:l}=await to(async()=>{const{buildAccess:c}=await import("./chunk-F_idWiMR.js");return{buildAccess:c}},__vite__mapDeps([4,3]),import.meta.url);zl=l(Wt,_i,innerWidth<700),zl.update(I.time)}),i=uC(Wt).then(a=>{up=a,up.update(I.time)});await n,ji(65),I.stadiumAssetsReadyMs=performance.now(),I.preparationTimings.push({stage:"venue-built",ms:performance.now()-r,at:performance.now()}),await Promise.all([t,i]);const{buildWorldShell:s}=await to(async()=>{const{buildWorldShell:a}=await import("./chunk-DrKXnvuZ.js");return{buildWorldShell:a}},[],import.meta.url);gr=s(Wt,innerWidth<700,zt),gr.update(I.time),ji(75),I.preparationTimings.push({stage:"journey-built",ms:performance.now()-r,at:performance.now()});const o=yo.mesh.onBeforeRender;yo.mesh.onBeforeRender=function(...a){const l=[_i.root,zl.root,gr?.root].filter(Boolean),c=l.map(u=>u.visible);l.forEach(u=>u.visible=!1);try{o.apply(this,a)}finally{l.forEach((u,h)=>u.visible=c[h])}},_r=NaN,vr()})(),du)}async function aP(){const r=new Ei(32,32,{type:Zi}),e=[],t=[],n=new Set,i=performance.now();let s=i+4;const o=async()=>{performance.now()>=s&&(await new Promise(requestAnimationFrame),s=performance.now()+4)};try{for(const c of[56,88,110,174]){await new Promise(requestAnimationFrame);const u=I.time;try{I.time=c,_r=NaN,vr(),c===174&&gr.update(c,!0),Wt.updateMatrixWorld(!0);const h=new Cp;h.environment=Wt.environment,h.environmentIntensity=Wt.environmentIntensity,h.fog=Wt.fog?.clone();const f=new Map,d=zt.clone(),m=new N,_=[],[g,p]=c===56?[56,72]:c===88?[72,122]:c<120?[92,115]:[148,206];for(let x=g;x<=p;x+=2)hc(x,d,m,innerWidth<700),d.updateProjectionMatrix(),d.lookAt(m),d.updateMatrixWorld(!0),_.push(new lh().setFromProjectionMatrix(new Je().multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse)));Wt.traverseVisible(x=>{if(x.isLight){const b=x.clone();b.position.copy(x.getWorldPosition(new N)),h.add(b);return}if(!(x.isMesh||x.isPoints||x.isLine||x.isSprite)||x===yo.mesh)return;let y=x,v=!1;for(;y;){if(y===so){v=!0;break}y=y.parent}if(v&&(c<100||c>=120)||!v&&x.frustumCulled&&!_.some(b=>x.isSprite?b.intersectsSprite(x):b.intersectsObject(x)))return;const S=x.clone(!1);S.matrixAutoUpdate=!1,S.matrix.copy(x.matrixWorld),S.frustumCulled=!1;const E=b=>{for(const M of Object.values(b))M?.isTexture&&!M.isRenderTargetTexture&&n.add(M);for(const M of Object.values(b.uniforms||{}))M.value?.isTexture&&!M.value.isRenderTargetTexture&&n.add(M.value);const C=b.uuid+"/"+!!x.isInstancedMesh+"/"+!!x.instanceColor;if(!f.has(C)){const M=b.clone();M.onBeforeCompile=b.onBeforeCompile,M.customProgramCacheKey=b.customProgramCacheKey,f.set(C,M),t.push(M)}return f.get(C)};S.material=Array.isArray(x.material)?x.material.map(E):E(x.material),S.userData.warmOriginalMaterial=x.material,h.add(S)}),e.push({snapshot:h,view:zt.clone()})}finally{I.time=u,_r=NaN,vr()}}const a=[];for(const{snapshot:c,view:u}of e)try{mt.setRenderTarget(r),a.push(mt.compileAsync(c,u))}finally{mt.setRenderTarget(null)}await Promise.all(a);for(const{snapshot:c,view:u}of e){for(const f of c.children)f.userData.warmOriginalMaterial&&(f.material=f.userData.warmOriginalMaterial);let h;try{mt.setRenderTarget(r),h=mt.compileAsync(c,u)}finally{mt.setRenderTarget(null)}await h}I.preparationTimings.push({stage:"background-programs",ms:performance.now()-i,at:performance.now()}),ji(85);for(const c of n)await o(),I.preparation="texture "+c.image?.width,mt.initTexture(c);const l=new Set;for(const{snapshot:c,view:u}of e){const h=c.children.filter(d=>d.isLight),f=c.children.filter(d=>!d.isLight);for(let d=0;d<f.length;d+=16){const m=f.slice(d,d+16).filter(p=>p.isInstancedMesh||!l.has(p.geometry));if(!m.length)continue;await o(),I.preparation="buffer upload";const _=new Map;for(const p of m)p.geometry&&!_.has(p.geometry)&&(_.set(p.geometry,{...p.geometry.drawRange}),p.geometry.setDrawRange(0,0),l.add(p.geometry));const g=c.children;c.children=[...h,...m];try{mt.setRenderTarget(r),mt.render(c,u)}finally{mt.setRenderTarget(null),c.children=g;for(const[p,x]of _)p.setDrawRange(x.start,x.count)}}}I.venueReadyMs=performance.now(),I.preparation="ready",ji(90)}finally{mt.setRenderTarget(null),r.dispose(),t.forEach(a=>a.dispose()),Na=!0}}async function lP(r){I.worldLoadStartedMs=performance.now();const{loadWorldTextures:e}=await to(async()=>{const{loadWorldTextures:n}=await import("./chunk-DrKXnvuZ.js");return{loadWorldTextures:n}},[],import.meta.url),t=await e(innerWidth<700);await r;for(const n of t)await new Promise(requestAnimationFrame),mt.initTexture(n);gr.setTextures(t),gr.update(I.time),ji(95),I.worldReadyMs=performance.now(),I.worldReady=!0,_r=NaN,Na=!0,vr()}async function cP(){try{await oP();const r=aP();await Promise.all([r,lP(r)]),I.journeyReady=!0,I.journeyReadyMs=performance.now()}catch(r){throw I.preparationError=r.message,console.error("Background scene preparation failed:",r),r}}const eo={value:0},Dr=new N;let J_=0,rs=[],Fu=0,Df=0,_r=NaN,Z_=0,Q_=0,e0=NaN,Na=!0;function bm(){if(!mt||!Ui)return;Na=!0;const r=innerWidth,e=innerHeight,t=Math.min(devicePixelRatio,1.7)*I.scale;mt.setPixelRatio(t),mt.setSize(r,e,!1),Ui.setPixelRatio(t),Ui.setSize(r,e),zt.aspect=r/e,zt.updateProjectionMatrix(),cp.material.uniforms.resolution.value.set(1/(r*t),1/(e*t));const n=Math.round(1024*Math.min(1,I.scale));yo.resize(n,Math.max(256,Math.round(n*e/r)))}function qx(r){Bn(!1),I.time=I.targetTime=vt.clamp(r,0,om),I.scrollTime=I.scrollTarget=lr(I.time),ms?.update(I.scrollTime),gs?.update(I.scrollTime),_s?.update(I.scrollTime),pa?.update(I.scrollTime),vs?.update(I.scrollTime,I.reduced),xs?.update(I.scrollTime,I.reduced),I.ready&&(vr(),hp())}function $x(){const r=document.body.classList.toggle("ui-hidden");qe("show-ui").hidden=!r}function vr(){if(I.time===_r&&zt.aspect===Z_)return;_r=I.time,Z_=zt.aspect,eo.value=$n(2.5,21,I.time),hc(I.time,zt,Dr,innerWidth<700);const r=DC(I.scrollTime,I.time,I.reduced);if(r){const i=zt.position.x-Dr.x,s=zt.position.z-Dr.z,o=Math.cos(r),a=Math.sin(r),l=Math.hypot(i,s),c=I.time>33?700*(1-$n(43,48,I.time)):0,u=Math.max(l,c)/l;zt.position.x=Dr.x+(i*o+s*a)*u,zt.position.z=Dr.z+(-i*a+s*o)*u}if(zt.position.y=IC(I.scrollTime,zt.position.y,I.reduced),I.time>=44&&I.time<=48){const i=$n(44,48,I.time);zt.position.lerp(ox,i),Dr.lerp(ax,i)}zt.updateProjectionMatrix(),zt.lookAt(Dr),mt.toneMappingExposure=.85+eo.value*.3,Yx.update(),I.time<122&&(yo.update(I.time),_l.update(I.time)),up?.update(I.time),_i?.update(I.time),zl?.update(I.time),rh?.update(I.time),gr?.update(I.time),document.body.classList.toggle("globe-draggable",I.time>=150&&!!gr?.root.visible&&(I.scrollTime<oi||I.scrollTime>=oi+Sr)),I.time>=122&&I.time<150&&_i&&(_i.root.visible=!1),so&&(so.visible=I.time<122),yo.mesh.visible=I.time<122,Wt.fog.density=16e-5*(1-$n(150,164,I.time)),qe("blackout").style.opacity=String(1-$n(.4,4.5,I.time)),qe("scene-caption").style.opacity=String($n(3.5,8,I.time)*(1-$n(25,34,I.time)));const t=am(I.time);I.time>=48&&(qe("scene-caption").style.opacity="1"),document.body.dataset.chapter!==t[1]&&(qe("scene-caption").querySelector(".eyebrow").textContent=I.time<48?"A CITY COMES TO LIGHT":`${t[1]} / ${t[2]}`,qe("scene-caption").querySelector("h1").textContent=t[3],qe("scene-caption").querySelector("p").textContent=t[4],document.body.dataset.chapter=t[1]),qe("opening").hidden=I.time>.4||!I.ready,qe("concept-note").hidden=I.time<72,qe("finale-action").hidden=I.time<197;const n=I.time>=104&&I.time<112;if(qe("scene-status").hidden=!n,n&&(qe("status-kicker").textContent="ACCESS / ILLUSTRATIVE SCAN",qe("status-title").textContent=I.time<106?"VERIFYING":"IDENTITY VERIFIED",qe("status-description").textContent="A clear passage. A calm welcome."),qe("chapter-announcement").dataset.chapter!==t[1]){qe("chapter-announcement").dataset.chapter=t[1],qe("chapter-announcement").textContent=`Scene ${t[1]}: ${t[2]}. ${t[3]} ${t[4]}`;const i=I.scrollTime>Rs?"news":{"01":"mission","02":"mission","03":"event-security","04":"event-security","05":"operations","06":"cooperation"}[t[1]];document.querySelectorAll(".primary-nav [data-scene]").forEach(s=>{s.dataset.scene===i?s.setAttribute("aria-current","step"):s.removeAttribute("aria-current")})}}function jx(){const r=I.scrollTime/wi*100;qe("scroll-progress").setAttribute("aria-valuenow",String(Math.round(r))),qe("scroll-progress").setAttribute("aria-valuetext",I.scrollTime>mr?"Footer":I.scrollTime>Rs?"Upcoming news":am(I.time)[2]),qe("scroll-progress").style.setProperty("--progress",`${r}%`)}function hp(){jx()}function Kx(r){if(!I.ready)return;const e=Fu?Math.min((r-Fu)/1e3,.1):0;if(Fu=r,!document.hidden){if(qe("ssoc-overview").open)da&&Bn(!1);else{Math.abs(Yr(I.scrollTarget,I.reduced)-I.targetTime)>1e-6&&(I.scrollTarget=lr(I.targetTime)),da&&sP(e);const t=I.scrollTarget;I.scrollTime=I.reduced?t:vt.damp(I.scrollTime,t,9,Math.min(e,.05)),Math.abs(t-I.scrollTime)<1e-4&&(I.scrollTime=t),I.time=Yr(I.scrollTime,I.reduced),I.targetTime=Yr(t,I.reduced),da&&t===wi&&I.scrollTime>=wi-.01&&Bn(!1)}I.cityStoryHolding=I.scrollTime>Mt&&I.scrollTime<Mt+En,I.stadiumStoryHolding=I.scrollTime>yn&&I.scrollTime<yn+Kn,I.commandStoryHolding=I.scrollTime>an&&I.scrollTime<an+In,ms?.update(I.scrollTime),gs?.update(I.scrollTime),_s?.update(I.scrollTime),pa?.update(I.scrollTime),vs?.update(I.scrollTime,I.reduced),xs?.update(I.scrollTime,I.reduced),e>0&&rs.push(e*1e3),rs.length>180&&rs.shift(),vr(),jx(),(Na||I.time!==e0)&&((I.time<121||I.time>=148)&&Ui.render(),e0=I.time,Na=!1),r-J_>500&&(I.fps=rs.length?1e3/(rs.reduce((t,n)=>t+n,0)/rs.length):0,J_=r,!I.cityStoryHolding&&!I.stadiumStoryHolding&&!I.commandStoryHolding&&rs.length>=120&&Math.abs(I.targetTime-I.time)<.001&&r-Q_>1e4&&(Df++,Df>=6&&(Df=0,I.fps<52&&I.scale>.6&&(I.scale=Math.max(.6,I.scale-.1),bm(),Q_=r,rs=[]))))}}async function uP(){ji(5),mt=new w1({canvas:qe("scene"),antialias:!1,powerPreference:"high-performance",alpha:!1}),mt.outputColorSpace=Jt,mt.toneMapping=_p,mt.shadowMap.enabled=!0,mt.shadowMap.type=i0,mt.shadowMap.autoUpdate=!1,mt.shadowMap.needsUpdate=!0,Wt=new Cp,Wt.background=new Oe(529186),zt=new Mn(34,innerWidth/innerHeight,.5,25e3),Hp(0,zt.position,Dr),zt.lookAt(Dr),Yx=LA(Wt,mt,eo),yo=DA(Wt,eo);const r=await to(()=>import("./chunk-BJv5DdM8.js"),__vite__mapDeps([2,1,3]),import.meta.url);r.prepareVenueLighting(Wt),r.preloadVenueAssets(innerWidth<700).catch(()=>{}),ji(10);const t=new Set(Wt.children);_l=await RA(Wt,eo),ji(40),so=new ur,so.name="Original Scene 01 city";for(const s of[...Wt.children])t.has(s)||so.add(s);Wt.add(so),Ui=new L1(mt),Ui.addPass(new D1(Wt,zt)),K_=new Aa(new se(innerWidth,innerHeight),.22,.65,1.15),Ui.addPass(K_),Ui.addPass(new N1),cp=new rv(U1),Ui.addPass(cp),bm(),ji(45),eo.value=1,mt.setRenderTarget(Ui.readBuffer);let n;try{n=mt.compileAsync(Wt,zt).then(()=>ji(50))}finally{mt.setRenderTarget(null)}await Promise.all([n,cP()]),Ui.render(),eo.value=0,I.time=I.reduced?27:0;const i=new URLSearchParams(location.search);i.has("time")&&(I.time=vt.clamp(Number(i.get("time"))||0,0,om)),I.targetTime=I.time,I.scrollTime=I.scrollTarget=lr(I.time),ms=NC({scroller:qe("experience"),duration:wi-Ha,reduced:I.reduced}),ms.update(I.scrollTime),gs=zC({scroller:qe("experience"),reduced:I.reduced}),gs.update(I.scrollTime),_s=GC({scroller:qe("experience"),reduced:I.reduced,onNavigate:s=>{Bn(!1),window.__journey?.seekStory(s)}}),_s.update(I.scrollTime),pa=jC({scroller:qe("experience")}),pa.update(I.scrollTime),vs=KC({scroller:qe("experience"),getFooterHeight:()=>xs?.getHeight()??0}),vs.update(I.scrollTime,I.reduced),xs=JC({scroller:qe("experience"),getNewsBottom:()=>vs.getPanelBottom(),onNavigate:s=>{Bn(!1),s==="home"?window.__journey?.seekStory(0):document.querySelector(`.topbar [data-scene="${s}"]`)?.click()}}),xs.update(I.scrollTime,I.reduced),_r=NaN,I.cityReadyMs=performance.now(),_r=NaN,vr(),I.ready=!0,_r=NaN,vr(),Ui.render(),I.initialReadyMs=performance.now(),ji(100),await ZC,await new Promise(s=>setTimeout(s,160)),qe("loading").hidden=!0,document.body.classList.add("is-ready"),hp(),mt.setAnimationLoop(Kx),Hl&&(gc(Hl),Hl=0),window.__scene01={state:I,renderer:mt,scene:Wt,camera:zt,city:_l,seek:qx,getStats(){return{...I,camera:zt.position.toArray(),landmarks:_l.landmarks,geometry:_l.stats,renderer:mt.getContext().getParameter(mt.getContext().RENDERER)}}},window.__journey=window.__scene01,window.__journey.getCityStoryState=()=>ms.getState(),window.__journey.getStadiumStoryState=()=>gs.getState(),window.__journey.getCommandStoryState=()=>_s.getState(),window.__journey.seekStory=s=>{I.scrollTime=I.scrollTarget=vt.clamp(s,0,wi),I.time=I.targetTime=Yr(I.scrollTime,I.reduced),ms.update(I.scrollTime),gs.update(I.scrollTime),_s.jumpToPosition(I.scrollTime),pa.update(I.scrollTime),vs.update(I.scrollTime,I.reduced),xs.update(I.scrollTime,I.reduced),vr(),hp()},ma!==null&&(window.__journey.seekStory(ma),ma=null),qe("autoplay-toggle").disabled=!1,window.__journey.getVenueStats=()=>_i?.stadium?.userData,window.__journey.getOperationsState=()=>({crowdCount:_i?.crowds.count,queueCount:_i?.queues.count,crowdMix:_i?.crowds.counts,people:_i?.crowds.getState(),cars:_i?.plaza.getState(),trafficCount:_i?.plaza.moving,inspection:zl?.getState()}),window.__journey.getCooperationState=()=>gr?.getState(),window.__journey.getFeedChecksums=()=>rh?.targets.map(s=>{const o=new Uint16Array(s.width*s.height*4);mt.readRenderTargetPixels(s,0,0,s.width,s.height,o);let a=2166136261;for(let l=0;l<o.length;l+=97)a=Math.imul(a^o[l],16777619);return(a>>>0).toString(16)})}qe("show-ui").addEventListener("click",$x);qe("reload").addEventListener("click",()=>location.reload());qe("autoplay-toggle").addEventListener("click",()=>{if(I.ready){if(da){Bn(!1);return}I.scrollTime>=wi-.01&&window.__journey.seekStory(0),Bn(!0)}});document.querySelector(".topbar").addEventListener("click",r=>{const e=r.target.closest("button[data-scene]");if(!e)return;Bn(!1);const n={mission:lr(18),"event-security":lr(81),operations:an+In/12,cooperation:oi+1,news:mr}[e.dataset.scene];!I.ready||!window.__journey?.seekStory?ma=n:window.__journey.seekStory(n)});document.addEventListener("keydown",r=>{!I.ready||qe("ssoc-overview").open||/INPUT|SELECT|TEXTAREA|BUTTON/.test(r.target.tagName)||r.key.toLowerCase()==="h"&&$x()});document.addEventListener("visibilitychange",()=>{document.hidden?(Bn(!1),I.targetTime=I.time,I.scrollTarget=I.scrollTime,mt?.setAnimationLoop(null)):I.ready&&(Fu=0,mt.setAnimationLoop(Kx))});window.addEventListener("resize",bm);const qr=qe("scroll-progress"),hP=qr.querySelector(".scroll-progress-track");let Ua=null,Vl=0,fp=0;function wm(){Vl&&(cancelAnimationFrame(Vl),Vl=0),!I.ready||!window.__journey?.seekStory?ma=fp:window.__journey.seekStory(fp)}function Am(r){const e=hP.getBoundingClientRect();fp=vt.clamp((r-e.top)/e.height,0,1)*wi,Vl||(Vl=requestAnimationFrame(wm))}qr.addEventListener("pointerdown",r=>{r.pointerType==="mouse"&&r.button!==0||(Bn(!1),r.preventDefault(),Ua=r.pointerId,qr.setPointerCapture(r.pointerId),qr.focus({preventScroll:!0}),Am(r.clientY))});qr.addEventListener("pointermove",r=>{r.pointerId===Ua&&Am(r.clientY)});qr.addEventListener("pointerup",r=>{r.pointerId===Ua&&(Am(r.clientY),wm(),Ua=null,qr.releasePointerCapture(r.pointerId))});qr.addEventListener("pointercancel",r=>{r.pointerId===Ua&&(Ua=null,wm())});qr.addEventListener("keydown",r=>{const e={ArrowDown:1,ArrowUp:-1,PageDown:10,PageUp:-10}[r.key];if(e===void 0&&r.key!=="Home"&&r.key!=="End")return;r.preventDefault(),r.stopPropagation(),Bn(!1);const t=r.key==="Home"?0:r.key==="End"?wi:vt.clamp(I.scrollTime+e*wi/100,0,wi);!I.ready||!window.__journey?.seekStory?ma=t:window.__journey.seekStory(t)});function Jx(r,e){const t=r.closest(".news-panel,.site-footer");return t&&t.scrollHeight>t.clientHeight+1&&(e>0?t.scrollTop<t.scrollHeight-t.clientHeight-1:t.scrollTop>1)}window.addEventListener("wheel",r=>{r.deltaY&&Bn(!1),!(r.ctrlKey||qe("ssoc-overview").open||r.target.closest("dialog")||Jx(r.target,r.deltaY))&&(r.preventDefault(),gc(r.deltaY*(r.deltaMode===1?16:r.deltaMode===2?innerHeight:1),r.deltaMode===1?"wheel-line":"wheel"))},{passive:!1});document.addEventListener("scroll",()=>Bn(!1),!0);let Ks;window.addEventListener("touchstart",r=>{Ks=r.touches[0]?.clientY},{passive:!0});window.addEventListener("touchmove",r=>{const e=r.touches[0]?.clientY,t=Ks===void 0?0:Ks-e;if(t&&Bn(!1),qe("ssoc-overview").open||r.target.closest("button,input,select,dialog,#scroll-progress")){Ks=e;return}if(Ks!==void 0){if(Jx(r.target,t)){Ks=e;return}r.preventDefault(),gc(t*3.2,"touch")}Ks=e},{passive:!1});qe("scene").addEventListener("webglcontextlost",r=>{r.preventDefault(),I.targetTime=I.time,mt?.setAnimationLoop(null),qe("failure").hidden=!1,qe("failure-message").textContent="The graphics context was interrupted. Reload to resume the journey."});let sh=null,dp=0,pp=0;const Cs=qe("scene");Cs.addEventListener("pointerdown",r=>{r.pointerType!=="mouse"||r.button!==0||!document.body.classList.contains("globe-draggable")||(sh=r.pointerId,dp=r.clientX,pp=r.clientY,Cs.setPointerCapture(r.pointerId),document.body.classList.add("globe-dragging"),r.preventDefault())});Cs.addEventListener("pointermove",r=>{if(r.pointerId!==sh)return;if(!document.body.classList.contains("globe-draggable")){Th(r);return}const e=r.clientX-dp,t=r.clientY-pp;dp=r.clientX,pp=r.clientY,!(!e&&!t)&&(Bn(!1),gr?.rotateBy(e,t),_r=NaN,Na=!0,vr())});function Th(r){r.pointerId===sh&&(sh=null,document.body.classList.remove("globe-dragging"),Cs.hasPointerCapture(r.pointerId)&&Cs.releasePointerCapture(r.pointerId))}Cs.addEventListener("pointerup",Th);Cs.addEventListener("pointercancel",Th);Cs.addEventListener("lostpointercapture",Th);const Ko=[27,60,86,107,141,150,206];let ss=0,t0=0,Ws=0;function fP(r){I.ready&&qx(Ko[vt.clamp(r,0,Yd.length-1)])}function gc(r,e="wheel"){if(r&&e!=="autoplay"&&Bn(!1),!I.ready){Hl=vt.clamp(Hl+r,-240,240);return}if(Math.sign(r)!==Math.sign(Ws)&&(Ws=0),Ws=vt.clamp(Ws+r,-32,32),Math.abs(Ws)>=8&&(document.body.classList.toggle("nav-hidden",Ws>0),Ws=0),I.reduced){if(ss+=r,Math.abs(ss)>70&&performance.now()-t0>600){const t=[0,...[.125,.375,.625,.875].map(i=>Mt+i*En),...Ko.slice(1,4).map(lr),...[.1,.3,.5,.7,.9].map(i=>yn+i*Kn),...[1,3,5,7,9,11].map(i=>an+i*In/12),lr(Ko[4]),...Array.from({length:8},(i,s)=>oi+(s+.5)*Sr/8),Rs,Rs+Em/2,mr,mr+Mh/2,wi];let n;if(I.scrollTime>Mt&&I.scrollTime<Mt+En){const i=Math.floor((I.scrollTime-Mt)/En*4)+Math.sign(ss);n=i<0?0:i>3?lr(Ko[1]):Mt+(i+.5)*En/4}else if(I.scrollTime>yn&&I.scrollTime<yn+Kn){const i=Math.floor((I.scrollTime-yn)/Kn*5)+Math.sign(ss);n=i<0?lr(Ko[3]):i>4?an+In/12:yn+(i+.5)*Kn/5}else if(I.scrollTime>an&&I.scrollTime<an+In){const i=Math.floor((I.scrollTime-an)/In*6)+Math.sign(ss);n=i<0?lr(Ko[3]):i>5?oi+Sr/16:an+(i+.5)*In/6}else n=ss>0?t.find(i=>i>I.scrollTime+.01):t.findLast(i=>i<I.scrollTime-.01);I.scrollTarget=n??(ss>0?wi:0),I.targetTime=Yr(I.scrollTarget,I.reduced),t0=performance.now(),ss=0}}else r*(I.scrollTarget-I.scrollTime)<0&&(I.scrollTarget=I.scrollTime),rP(vt.clamp(r,-240,240)*.018)}function Zx(r){I.reduced=r,I.targetTime=Yr(I.scrollTime,r),I.scrollTarget=I.scrollTime,ms?.setReduced(r),gs?.setReduced(r),_s?.setReduced(r),document.body.classList.toggle("reduced-motion",r),vs?.update(I.scrollTime,r),xs?.update(I.scrollTime,r),r&&I.ready&&I.scrollTime<=Rs&&!I.cityStoryHolding&&!I.stadiumStoryHolding&&!I.commandStoryHolding&&fP(Number(am(I.time)[1])-1)}Zx(I.reduced);Wx.addEventListener("change",r=>Zx(r.matches));qe("identity-note").textContent=hC.identityStatus;qe("close-overview").addEventListener("click",()=>qe("ssoc-overview").close());document.addEventListener("keydown",r=>{if(!(!I.ready||qe("ssoc-overview").open||/INPUT|SELECT|TEXTAREA|BUTTON/.test(r.target.tagName))&&["ArrowDown","ArrowUp","PageDown","PageUp"," "].includes(r.key)){r.preventDefault();const e=r.key.endsWith("Up")||r.key===" "&&r.shiftKey;gc((e?-1:1)*(r.key.startsWith("Arrow")?100:240),"keyboard")}});window.addEventListener("pagehide",r=>{r.persisted||(xs?.destroy(),vs?.destroy(),pa?.destroy(),_s?.destroy(),gs?.destroy(),ms?.destroy())});uP().catch(r=>{console.error(r),qe("loading").hidden=!0,qe("failure").hidden=!1,qe("failure-message").textContent=r.message.includes("WebGL")?"This scene needs a browser with WebGL 2 and hardware acceleration.":r.message});export{Up as $,Gl as A,er as B,Oe as C,hn as D,Z0 as E,$r as F,ur as G,wM as H,ia as I,CM as J,pn as K,yd as L,Je as M,I0 as N,Ut as O,Ls as P,LM as Q,xa as R,Mr as S,bM as T,dn as U,N as V,fr as W,Ps as X,Yt as Y,fn as Z,Vr as _,O1 as a,$0 as a0,uh as a1,ch as a2,dP as a3,TS as a4,Qi as a5,vt as a6,_A as a7,Cp as a8,pP as a9,SP as aa,Rp as ab,X_ as ac,Fx as ad,yP as ae,xP as af,N0 as ag,J0 as ah,wd as ai,i0 as aj,Mn as ak,L1 as al,D1 as am,Aa as an,se as ao,N1 as ap,MP as aq,sS as ar,Sp as as,Si as at,Sm as au,IM as av,w1 as aw,_p as ax,di as b,xA as c,Nt as d,Gr as e,Nn as f,Hr as g,F0 as h,Jt as i,yl as j,Un as k,q0 as l,Rd as m,DS as n,uc as o,gP as p,_P as q,mi as r,vP as s,Ct as t,nt as u,Dp as v,Lp as w,mP as x,nC as y,Wr as z};
