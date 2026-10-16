(()=>{var li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zc=0,Oo=1,Jc=2;var _c=1,So=2,bn=3,Gn=0,kt=1,wn=2;var Hn=0,Di=1,Fo=2,Bo=3,zo=4,Kc=5,$n=100,$c=101,jc=102,Ho=103,ko=104,Qc=200,eh=201,th=202,nh=203,Pa=204,La=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,dh=0,fh=1,ph=2,nr=3,mh=4,gh=5,_h=6,xh=7,xc=0,yh=1,vh=2,kn=0,Mh=1,Sh=2,Eh=3,Eo=4,bh=5,wh=6;var yc=300,Fi=301,Bi=302,Ia=303,Da=304,Br=306,os=1e3,cn=1001,Ua=1002,Yt=1003,Vo=1004;var Zr=1005;var en=1006,Th=1007;var ls=1008;var Vn=1009,Ah=1010,Rh=1011,bo=1012,vc=1013,Bn=1014,zn=1015,cs=1016,Mc=1017,Sc=1018,ei=1020,Ch=1021,hn=1023,Ph=1024,Lh=1025,ti=1026,zi=1027,Ih=1028,Ec=1029,Dh=1030,bc=1031,wc=1033,Jr=33776,Kr=33777,$r=33778,jr=33779,Go=35840,Wo=35841,Xo=35842,qo=35843,Tc=36196,Yo=37492,Zo=37496,Jo=37808,Ko=37809,$o=37810,jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,Qr=36492,cl=36494,hl=36495,Uh=36283,ul=36284,dl=36285,fl=36286;var ir=2300,sr=2301,ea=2302,pl=2400,ml=2401,gl=2402;var Ac=3e3,ni=3001,Nh=3200,Oh=3201,Rc=0,Fh=1,tn="",Tt="srgb",An="srgb-linear",wo="display-p3",zr="display-p3-linear",rr="linear",vt="srgb",ar="rec709",or="p3";var fi=7680;var _l=519,Bh=512,zh=513,Hh=514,Cc=515,kh=516,Vh=517,Gh=518,Wh=519,xl=35044;var yl="300 es",Na=1035,Tn=2e3,lr=2001,gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=1234567,Ui=Math.PI/180,hs=180/Math.PI;function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ot(i,e,t){return Math.max(e,Math.min(t,i))}function To(i,e){return(i%e+e)%e}function Xh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qh(i,e,t){return i!==e?(t-i)/(e-i):0}function ts(i,e,t){return(1-t)*i+t*e}function Yh(i,e,t,n){return ts(i,e,1-Math.exp(-t*n))}function Zh(i,e=1){return e-Math.abs(To(i,e*2)-e)}function Jh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $h(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jh(i,e){return i+Math.random()*(e-i)}function Qh(i){return i*(.5-Math.random())}function eu(i){i!==void 0&&(vl=i);let e=vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tu(i){return i*Ui}function nu(i){return i*hs}function Oa(i){return(i&i-1)===0&&i!==0}function iu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function cr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function su(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),g=r((n-e)/2),y=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*y,l*g,a*c);break;case"YXY":i.set(l*g,a*h,l*y,a*c);break;case"ZYZ":i.set(l*y,l*g,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Pc={DEG2RAD:Ui,RAD2DEG:hs,generateUUID:hi,clamp:Ot,euclideanModulo:To,mapLinear:Xh,inverseLerp:qh,lerp:ts,damp:Yh,pingpong:Zh,smoothstep:Jh,smootherstep:Kh,randInt:$h,randFloat:jh,randFloatSpread:Qh,seededRandom:eu,degToRad:tu,radToDeg:nu,isPowerOfTwo:Oa,ceilPowerOfTwo:iu,floorPowerOfTwo:cr,setQuaternionFromProperEuler:su,normalize:Xt,denormalize:Ci},Ee=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ht=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],g=n[5],y=n[8],M=s[0],m=s[3],p=s[6],C=s[1],S=s[4],I=s[7],V=s[2],B=s[5],O=s[8];return r[0]=o*M+a*C+l*V,r[3]=o*m+a*S+l*B,r[6]=o*p+a*I+l*O,r[1]=c*M+h*C+d*V,r[4]=c*m+h*S+d*B,r[7]=c*p+h*I+d*O,r[2]=f*M+g*C+y*V,r[5]=f*m+g*S+y*B,r[8]=f*p+g*I+y*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,g=c*r-o*l,y=t*d+n*f+s*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/y;return e[0]=d*M,e[1]=(s*c-h*n)*M,e[2]=(a*n-s*o)*M,e[3]=f*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-a*t)*M,e[6]=g*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ta=new ht;function Lc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=hr("canvas");return i.style.display="block",i}var Ml={};function ns(i){i in Ml||(Ml[i]=!0,console.warn(i))}var Sl=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),El=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ts={[An]:{transfer:rr,primaries:ar,toReference:i=>i,fromReference:i=>i},[Tt]:{transfer:vt,primaries:ar,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zr]:{transfer:rr,primaries:or,toReference:i=>i.applyMatrix3(El),fromReference:i=>i.applyMatrix3(Sl)},[wo]:{transfer:vt,primaries:or,toReference:i=>i.convertSRGBToLinear().applyMatrix3(El),fromReference:i=>i.applyMatrix3(Sl).convertLinearToSRGB()}},au=new Set([An,zr]),_t={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!au.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ts[e].toReference,s=Ts[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ts[i].primaries},getTransfer:function(i){return i===tn?rr:Ts[i].transfer}};function Ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var pi,ur=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pi===void 0&&(pi=hr("canvas")),pi.width=e.width,pi.height=e.height;let n=pi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=pi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=hr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ni(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ni(t[n]/255)*255):t[n]=Ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ou=0,dr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=hi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ia(s[o].image)):r.push(ia(s[o]))}else r=ia(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ur.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lu=0,sn=class i extends gn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=cn,s=cn,r=en,o=ls,a=hn,l=Vn,c=i.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=hi(),this.name="",this.source=new dr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ni?Tt:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case cn:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case cn:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?ni:Ac}set encoding(e){ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ni?Tt:tn}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=yc;sn.DEFAULT_ANISOTROPY=1;var St=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],g=l[5],y=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-M)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+M)<.1&&Math.abs(y+m)<.1&&Math.abs(c+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,I=(g+1)/2,V=(p+1)/2,B=(h+f)/4,O=(d+M)/4,ee=(y+m)/4;return S>I&&S>V?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=B/n,r=O/n):I>V?I<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),n=B/s,r=ee/s):V<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),n=O/r,s=ee/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-y)*(m-y)+(d-M)*(d-M)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(m-y)/C,this.y=(d-M)/C,this.z=(f-h)/C,this.w=Math.acos((c+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Fa=class extends gn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ni?Tt:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new dr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Fa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fr=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ba=class extends sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],g=r[o+1],y=r[o+2],M=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=y,e[t+3]=M;return}if(d!==M||l!==f||c!==g||h!==y){let m=1-a,p=l*f+c*g+h*y+d*M,C=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let V=Math.sqrt(S),B=Math.atan2(V,p*C);m=Math.sin(m*B)/V,a=Math.sin(a*B)/V}let I=a*C;if(l=l*m+f*I,c=c*m+g*I,h=h*m+y*I,d=d*m+M*I,m===1-a){let V=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=V,c*=V,h*=V,d*=V}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],g=r[o+2],y=r[o+3];return e[t]=a*y+h*d+l*g-c*f,e[t+1]=l*y+h*f+c*d-a*g,e[t+2]=c*y+h*g+a*f-l*d,e[t+3]=h*y-a*d-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),g=l(s/2),y=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*g*y,this._y=c*g*d-f*h*y,this._z=c*h*y+f*g*d,this._w=c*h*d-f*g*y;break;case"YXZ":this._x=f*h*d+c*g*y,this._y=c*g*d-f*h*y,this._z=c*h*y-f*g*d,this._w=c*h*d+f*g*y;break;case"ZXY":this._x=f*h*d-c*g*y,this._y=c*g*d+f*h*y,this._z=c*h*y+f*g*d,this._w=c*h*d-f*g*y;break;case"ZYX":this._x=f*h*d-c*g*y,this._y=c*g*d+f*h*y,this._z=c*h*y-f*g*d,this._w=c*h*d+f*g*y;break;case"YZX":this._x=f*h*d+c*g*y,this._y=c*g*d+f*h*y,this._z=c*h*y-f*g*d,this._w=c*h*d-f*g*y;break;case"XZY":this._x=f*h*d-c*g*y,this._y=c*g*d-f*h*y,this._z=c*h*y+f*g*d,this._w=c*h*d+f*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sa.copy(this).projectOnVector(e),this.sub(sa)}reflect(e){return this.sub(sa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sa=new F,bl=new un,ii=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Rs.subVectors(this.max,Ki),mi.subVectors(e.a,Ki),gi.subVectors(e.b,Ki),_i.subVectors(e.c,Ki),Dn.subVectors(gi,mi),Un.subVectors(_i,gi),qn.subVectors(mi,_i);let t=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-qn.z,qn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,qn.z,0,-qn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-qn.y,qn.x,0];return!ra(t,mi,gi,_i,Rs)||(t=[1,0,0,0,1,0,0,0,1],!ra(t,mi,gi,_i,Rs))?!1:(Cs.crossVectors(Dn,Un),t=[Cs.x,Cs.y,Cs.z],ra(t,mi,gi,_i,Rs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yn=[new F,new F,new F,new F,new F,new F,new F,new F],an=new F,As=new ii,mi=new F,gi=new F,_i=new F,Dn=new F,Un=new F,qn=new F,Ki=new F,Rs=new F,Cs=new F,Yn=new F;function ra(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Yn.fromArray(i,r);let a=s.x*Math.abs(Yn.x)+s.y*Math.abs(Yn.y)+s.z*Math.abs(Yn.z),l=e.dot(Yn),c=t.dot(Yn),h=n.dot(Yn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cu=new ii,$i=new F,aa=new F,Hi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);let t=$i.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(aa)),this.expandByPoint($i.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new F,oa=new F,Ps=new F,Nn=new F,la=new F,Ls=new F,ca=new F,si=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(oa);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ps),a=Nn.dot(this.direction),l=-Nn.dot(Ps),c=Nn.lengthSq(),h=Math.abs(1-o*o),d,f,g,y;if(h>0)if(d=o*l-a,f=o*a-l,y=r*h,d>=0)if(f>=-y)if(f<=y){let M=1/h;d*=M,f*=M,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f<=-y?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c):f<=y?(d=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(oa).addScaledVector(Ps,f),g}intersectSphere(e,t){vn.subVectors(e.center,this.origin);let n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,s,r){la.subVectors(t,e),Ls.subVectors(n,e),ca.crossVectors(la,Ls);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,e);let l=a*this.direction.dot(Ls.crossVectors(Nn,Ls));if(l<0)return null;let c=a*this.direction.dot(la.cross(Nn));if(c<0||l+c>o)return null;let h=-a*Nn.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,f,g,y,M,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,g,y,M,m)}set(e,t,n,s,r,o,a,l,c,h,d,f,g,y,M,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=g,p[7]=y,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),o=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,g=o*d,y=a*h,M=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=g+y*c,t[5]=f-M*c,t[9]=-a*l,t[2]=M-f*c,t[6]=y+g*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,g=l*d,y=c*h,M=c*d;t[0]=f+M*a,t[4]=y*a-g,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=g*a-y,t[6]=M+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,g=l*d,y=c*h,M=c*d;t[0]=f-M*a,t[4]=-o*d,t[8]=y+g*a,t[1]=g+y*a,t[5]=o*h,t[9]=M-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,g=o*d,y=a*h,M=a*d;t[0]=l*h,t[4]=y*c-g,t[8]=f*c+M,t[1]=l*d,t[5]=M*c+f,t[9]=g*c-y,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,g=o*c,y=a*l,M=a*c;t[0]=l*h,t[4]=M-f*d,t[8]=y*d+g,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*d+y,t[10]=f-M*d}else if(e.order==="XZY"){let f=o*l,g=o*c,y=a*l,M=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+M,t[5]=o*h,t[9]=g*d-y,t[2]=y*d-g,t[6]=a*h,t[10]=M*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hu,e,uu)}lookAt(e,t,n){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),On.crossVectors(n,Kt),On.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),On.crossVectors(n,Kt)),On.normalize(),Is.crossVectors(Kt,On),s[0]=On.x,s[4]=Is.x,s[8]=Kt.x,s[1]=On.y,s[5]=Is.y,s[9]=Kt.y,s[2]=On.z,s[6]=Is.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],g=n[13],y=n[2],M=n[6],m=n[10],p=n[14],C=n[3],S=n[7],I=n[11],V=n[15],B=s[0],O=s[4],ee=s[8],E=s[12],L=s[1],K=s[5],te=s[9],ve=s[13],k=s[2],Z=s[6],$=s[10],le=s[14],re=s[3],ne=s[7],pe=s[11],he=s[15];return r[0]=o*B+a*L+l*k+c*re,r[4]=o*O+a*K+l*Z+c*ne,r[8]=o*ee+a*te+l*$+c*pe,r[12]=o*E+a*ve+l*le+c*he,r[1]=h*B+d*L+f*k+g*re,r[5]=h*O+d*K+f*Z+g*ne,r[9]=h*ee+d*te+f*$+g*pe,r[13]=h*E+d*ve+f*le+g*he,r[2]=y*B+M*L+m*k+p*re,r[6]=y*O+M*K+m*Z+p*ne,r[10]=y*ee+M*te+m*$+p*pe,r[14]=y*E+M*ve+m*le+p*he,r[3]=C*B+S*L+I*k+V*re,r[7]=C*O+S*K+I*Z+V*ne,r[11]=C*ee+S*te+I*$+V*pe,r[15]=C*E+S*ve+I*le+V*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],g=e[14],y=e[3],M=e[7],m=e[11],p=e[15];return y*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*g-n*l*g)+M*(+t*l*g-t*c*f+r*o*f-s*o*g+s*c*h-r*l*h)+m*(+t*c*d-t*a*g-r*o*d+n*o*g+r*a*h-n*c*h)+p*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],g=e[11],y=e[12],M=e[13],m=e[14],p=e[15],C=d*m*c-M*f*c+M*l*g-a*m*g-d*l*p+a*f*p,S=y*f*c-h*m*c-y*l*g+o*m*g+h*l*p-o*f*p,I=h*M*c-y*d*c+y*a*g-o*M*g-h*a*p+o*d*p,V=y*d*l-h*M*l-y*a*f+o*M*f+h*a*m-o*d*m,B=t*C+n*S+s*I+r*V;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/B;return e[0]=C*O,e[1]=(M*f*r-d*m*r-M*s*g+n*m*g+d*s*p-n*f*p)*O,e[2]=(a*m*r-M*l*r+M*s*c-n*m*c-a*s*p+n*l*p)*O,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*g-n*l*g)*O,e[4]=S*O,e[5]=(h*m*r-y*f*r+y*s*g-t*m*g-h*s*p+t*f*p)*O,e[6]=(y*l*r-o*m*r-y*s*c+t*m*c+o*s*p-t*l*p)*O,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*g+t*l*g)*O,e[8]=I*O,e[9]=(y*d*r-h*M*r-y*n*g+t*M*g+h*n*p-t*d*p)*O,e[10]=(o*M*r-y*a*r+y*n*c-t*M*c-o*n*p+t*a*p)*O,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*g-t*a*g)*O,e[12]=V*O,e[13]=(h*M*s-y*d*s+y*n*f-t*M*f-h*n*m+t*d*m)*O,e[14]=(y*a*s-o*M*s-y*n*l+t*M*l+o*n*m-t*a*m)*O,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*O,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,g=r*h,y=r*d,M=o*h,m=o*d,p=a*d,C=l*c,S=l*h,I=l*d,V=n.x,B=n.y,O=n.z;return s[0]=(1-(M+p))*V,s[1]=(g+I)*V,s[2]=(y-S)*V,s[3]=0,s[4]=(g-I)*B,s[5]=(1-(f+p))*B,s[6]=(m+C)*B,s[7]=0,s[8]=(y+S)*O,s[9]=(m-C)*O,s[10]=(1-(f+M))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),a=xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);let c=1/r,h=1/o,d=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Tn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(a===Tn)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===lr)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Tn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),f=(t+e)*c,g=(n+s)*h,y,M;if(a===Tn)y=(o+r)*d,M=-2*d;else if(a===lr)y=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=M,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xi=new F,on=new At,hu=new F(0,0,0),uu=new F(1,1,1),On=new F,Is=new F,Kt=new F,wl=new At,Tl=new un,pr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};pr.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},du=0,Al=new F,yi=new un,Mn=new At,Ds=new F,ji=new F,fu=new F,pu=new un,Rl=new F(1,0,0),Cl=new F(0,1,0),Pl=new F(0,0,1),mu={type:"added"},gu={type:"removed"},Vt=class i extends gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new pr,n=new un,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new ht}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.multiply(yi),this}rotateOnWorldAxis(e,t){return yi.setFromAxisAngle(e,t),this.quaternion.premultiply(yi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ds.copy(e):Ds.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ji,Ds,this.up):Mn.lookAt(Ds,ji,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),yi.setFromRotationMatrix(Mn),this.quaternion.premultiply(yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),y=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new F(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new F,Sn=new F,ha=new F,En=new F,vi=new F,Mi=new F,Ll=new F,ua=new F,da=new F,fa=new F,Us=!1,Qn=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ln.subVectors(e,t),s.cross(ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ln.subVectors(s,t),Sn.subVectors(n,t),ha.subVectors(e,t);let o=ln.dot(ln),a=ln.dot(Sn),l=ln.dot(ha),c=Sn.dot(Sn),h=Sn.dot(ha),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,g=(c*l-a*h)*f,y=(o*h-a*l)*f;return r.set(1-g-y,y,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,n,s,r,o,a,l){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(e,t,n,s){return ln.subVectors(n,t),Sn.subVectors(e,t),ln.cross(Sn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),ln.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Us===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Us=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;vi.subVectors(s,n),Mi.subVectors(r,n),ua.subVectors(e,n);let l=vi.dot(ua),c=Mi.dot(ua);if(l<=0&&c<=0)return t.copy(n);da.subVectors(e,s);let h=vi.dot(da),d=Mi.dot(da);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(vi,o);fa.subVectors(e,r);let g=vi.dot(fa),y=Mi.dot(fa);if(y>=0&&g<=y)return t.copy(r);let M=g*c-l*y;if(M<=0&&c>=0&&y<=0)return a=c/(c-y),t.copy(n).addScaledVector(Mi,a);let m=h*y-g*d;if(m<=0&&d-h>=0&&g-y>=0)return Ll.subVectors(r,s),a=(d-h)/(d-h+(g-y)),t.copy(s).addScaledVector(Ll,a);let p=1/(m+M+f);return o=M*p,a=f*p,t.copy(n).addScaledVector(vi,o).addScaledVector(Mi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function pa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=To(e,1),t=Ot(t,0,1),n=Ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=pa(o,r,e+1/3),this.g=pa(o,r,e),this.b=pa(o,r,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return _t.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ot(zt.r*255,0,255))*65536+Math.round(Ot(zt.g*255,0,255))*256+Math.round(Ot(zt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Tt){_t.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,s=zt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Ns);let n=ts(Fn.h,Ns.h,t),s=ts(Fn.s,Ns.s,t),r=ts(Fn.l,Ns.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new rt;rt.NAMES=Ic;var _u=0,Cn=class extends gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Di,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pa,this.blendDst=La,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Pa&&(n.blendSrc=this.blendSrc),this.blendDst!==La&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new F,Os=new Ee,nn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Os.fromBufferAttribute(this,t),Os.applyMatrix3(e),this.setXY(t,Os.x,Os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),e}};var mr=class extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var gr=class extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var xu=0,Qt=new At,ma=new Vt,Si=new F,$t=new ii,Qi=new ii,Nt=new F,Jt=class i extends gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?gr:mr)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors($t.min,Qi.min),$t.expandByPoint(Nt),Nt.addVectors($t.max,Qi.max),$t.expandByPoint(Nt)):($t.expandByPoint(Qi.min),$t.expandByPoint(Qi.max))}$t.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Nt.fromBufferAttribute(a,c),l&&(Si.fromBufferAttribute(e,c),Nt.add(Si)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<a;L++)c[L]=new F,h[L]=new F;let d=new F,f=new F,g=new F,y=new Ee,M=new Ee,m=new Ee,p=new F,C=new F;function S(L,K,te){d.fromArray(s,L*3),f.fromArray(s,K*3),g.fromArray(s,te*3),y.fromArray(o,L*2),M.fromArray(o,K*2),m.fromArray(o,te*2),f.sub(d),g.sub(d),M.sub(y),m.sub(y);let ve=1/(M.x*m.y-m.x*M.y);isFinite(ve)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(g,-M.y).multiplyScalar(ve),C.copy(g).multiplyScalar(M.x).addScaledVector(f,-m.x).multiplyScalar(ve),c[L].add(p),c[K].add(p),c[te].add(p),h[L].add(C),h[K].add(C),h[te].add(C))}let I=this.groups;I.length===0&&(I=[{start:0,count:n.length}]);for(let L=0,K=I.length;L<K;++L){let te=I[L],ve=te.start,k=te.count;for(let Z=ve,$=ve+k;Z<$;Z+=3)S(n[Z+0],n[Z+1],n[Z+2])}let V=new F,B=new F,O=new F,ee=new F;function E(L){O.fromArray(r,L*3),ee.copy(O);let K=c[L];V.copy(K),V.sub(O.multiplyScalar(O.dot(K))).normalize(),B.crossVectors(ee,K);let ve=B.dot(h[L])<0?-1:1;l[L*4]=V.x,l[L*4+1]=V.y,l[L*4+2]=V.z,l[L*4+3]=ve}for(let L=0,K=I.length;L<K;++L){let te=I[L],ve=te.start,k=te.count;for(let Z=ve,$=ve+k;Z<$;Z+=3)E(n[Z+0]),E(n[Z+1]),E(n[Z+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,g=e.count;f<g;f+=3){let y=e.getX(f+0),M=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),g=0,y=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?g=l[M]*a.data.stride+a.offset:g=l[M]*h;for(let p=0;p<h;p++)f[y++]=c[g++]}return new nn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],g=e(f,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Il=new At,Zn=new si,Fs=new Hi,Dl=new F,Ei=new F,bi=new F,wi=new F,ga=new F,Bs=new F,zs=new Ee,Hs=new Ee,ks=new Ee,Ul=new F,Nl=new F,Ol=new F,Vs=new F,Gs=new F,Je=class extends Vt{constructor(e=new Jt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Bs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ga.fromBufferAttribute(d,e),o?Bs.addScaledVector(ga,h):Bs.addScaledVector(ga.sub(t),h))}t.add(Bs)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),Zn.copy(e.ray).recast(e.near),!(Fs.containsPoint(Zn.origin)===!1&&(Zn.intersectSphere(Fs,Dl)===null||Zn.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Il.copy(r).invert(),Zn.copy(e.ray).applyMatrix4(Il),!(n.boundingBox!==null&&Zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,M=f.length;y<M;y++){let m=f[y],p=o[m.materialIndex],C=Math.max(m.start,g.start),S=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let I=C,V=S;I<V;I+=3){let B=a.getX(I),O=a.getX(I+1),ee=a.getX(I+2);s=Ws(this,p,e,n,c,h,d,B,O,ee),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,g.start),M=Math.min(a.count,g.start+g.count);for(let m=y,p=M;m<p;m+=3){let C=a.getX(m),S=a.getX(m+1),I=a.getX(m+2);s=Ws(this,o,e,n,c,h,d,C,S,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,M=f.length;y<M;y++){let m=f[y],p=o[m.materialIndex],C=Math.max(m.start,g.start),S=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let I=C,V=S;I<V;I+=3){let B=I,O=I+1,ee=I+2;s=Ws(this,p,e,n,c,h,d,B,O,ee),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let y=Math.max(0,g.start),M=Math.min(l.count,g.start+g.count);for(let m=y,p=M;m<p;m+=3){let C=m,S=m+1,I=m+2;s=Ws(this,o,e,n,c,h,d,C,S,I),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function yu(i,e,t,n,s,r,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Gn,a),l===null)return null;Gs.copy(a),Gs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:i}}function Ws(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Ei),i.getVertexPosition(l,bi),i.getVertexPosition(c,wi);let h=yu(i,e,t,n,Ei,bi,wi,Vs);if(h){s&&(zs.fromBufferAttribute(s,a),Hs.fromBufferAttribute(s,l),ks.fromBufferAttribute(s,c),h.uv=Qn.getInterpolation(Vs,Ei,bi,wi,zs,Hs,ks,new Ee)),r&&(zs.fromBufferAttribute(r,a),Hs.fromBufferAttribute(r,l),ks.fromBufferAttribute(r,c),h.uv1=Qn.getInterpolation(Vs,Ei,bi,wi,zs,Hs,ks,new Ee),h.uv2=h.uv1),o&&(Ul.fromBufferAttribute(o,a),Nl.fromBufferAttribute(o,l),Ol.fromBufferAttribute(o,c),h.normal=Qn.getInterpolation(Vs,Ei,bi,wi,Ul,Nl,Ol,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};Qn.getNormal(Ei,bi,wi,d.normal),h.face=d}return h}var dn=class i extends Jt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,g=0;y("z","y","x",-1,-1,n,t,e,o,r,0),y("z","y","x",1,-1,n,t,-e,o,r,1),y("x","z","y",1,1,e,n,t,s,o,2),y("x","z","y",1,-1,e,n,-t,s,o,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function y(M,m,p,C,S,I,V,B,O,ee,E){let L=I/O,K=V/ee,te=I/2,ve=V/2,k=B/2,Z=O+1,$=ee+1,le=0,re=0,ne=new F;for(let pe=0;pe<$;pe++){let he=pe*K-ve;for(let Te=0;Te<Z;Te++){let ie=Te*L-te;ne[M]=ie*C,ne[m]=he*S,ne[p]=k,c.push(ne.x,ne.y,ne.z),ne[M]=0,ne[m]=0,ne[p]=B>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(Te/O),d.push(1-pe/ee),le+=1}}for(let pe=0;pe<ee;pe++)for(let he=0;he<O;he++){let Te=f+he+Z*pe,ie=f+he+Z*(pe+1),U=f+(he+1)+Z*(pe+1),ye=f+(he+1)+Z*pe;l.push(Te,ie,ye),l.push(ie,U,ye),re+=6}a.addGroup(g,re,E),g+=re,f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ki(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=ki(i[t]);for(let s in n)e[s]=n[s]}return e}function vu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dc(i){return i.getRenderTarget()===null?i.outputColorSpace:_t.workingColorSpace}var Mu={clone:ki,merge:qt},Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},_r=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends _r{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ui*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Ui*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ui*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ti=-90,Ai=1,za=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(Ti,Ai,e,t);s.layers=this.layers,this.add(s);let r=new Ht(Ti,Ai,e,t);r.layers=this.layers,this.add(r);let o=new Ht(Ti,Ai,e,t);o.layers=this.layers,this.add(o);let a=new Ht(Ti,Ai,e,t);a.layers=this.layers,this.add(a);let l=new Ht(Ti,Ai,e,t);l.layers=this.layers,this.add(l);let c=new Ht(Ti,Ai,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},xr=class extends sn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ha=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ni?Tt:tn),this.texture=new xr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new dn(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Hn});r.uniforms.tEquirect.value=t;let o=new Je(s,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=en),new za(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},_a=new F,bu=new F,wu=new ht,jt=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_a.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wu.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Jn=new Hi,Xs=new F,ds=class{constructor(e=new jt,t=new jt,n=new jt,s=new jt,r=new jt,o=new jt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],g=s[8],y=s[9],M=s[10],m=s[11],p=s[12],C=s[13],S=s[14],I=s[15];if(n[0].setComponents(l-r,f-c,m-g,I-p).normalize(),n[1].setComponents(l+r,f+c,m+g,I+p).normalize(),n[2].setComponents(l+o,f+h,m+y,I+C).normalize(),n[3].setComponents(l-o,f-h,m-y,I-C).normalize(),n[4].setComponents(l-a,f-d,m-M,I-S).normalize(),t===Tn)n[5].setComponents(l+a,f+d,m+M,I+S).normalize();else if(t===lr)n[5].setComponents(a,d,M,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(e){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xs.x=s.normal.x>0?e.max.x:e.min.x,Xs.y=s.normal.y>0?e.max.y:e.min.y,Xs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tu(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,g=d.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,d,f),c.onUploadCallback();let M;if(d instanceof Float32Array)M=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)M=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=i.SHORT;else if(d instanceof Uint32Array)M=i.UNSIGNED_INT;else if(d instanceof Int32Array)M=i.INT;else if(d instanceof Int8Array)M=i.BYTE;else if(d instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,d){let f=h.array,g=h._updateRange,y=h.updateRanges;if(i.bindBuffer(d,c),g.count===-1&&y.length===0&&i.bufferSubData(d,0,f),y.length!==0){for(let M=0,m=y.length;M<m;M++){let p=y[M];t?i.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):i.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Ln=class i extends Jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,g=[],y=[],M=[],m=[];for(let p=0;p<h;p++){let C=p*f-o;for(let S=0;S<c;S++){let I=S*d-r;y.push(I,-C,0),M.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){let S=C+c*p,I=C+c*(p+1),V=C+1+c*(p+1),B=C+1+c*p;g.push(S,I,B),g.push(I,V,B)}this.setIndex(g),this.setAttribute("position",new xt(y,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Au=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ru=`#ifdef USE_ALPHAHASH
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
#endif`,Cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Iu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Du=`#ifdef USE_AOMAP
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
#endif`,Uu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nu=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Ou=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
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
#endif`,ku=`#ifdef USE_BUMPMAP
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
#endif`,Vu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ku=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,$u=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ju=`vec3 transformedNormal = objectNormal;
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
#endif`,Qu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,id="gl_FragColor = linearToOutputTexel( gl_FragColor );",sd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,rd=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,ad=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cd=`#ifdef USE_ENVMAP
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
#endif`,hd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pd=`#ifdef USE_GRADIENTMAP
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
}`,md=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_d=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yd=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,vd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Md=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
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
#endif`,Td=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Ad=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Rd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Id=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ud=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fd=`#if defined( USE_POINTS_UV )
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
#endif`,Bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jd=`#ifdef USE_NORMALMAP
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
#endif`,Kd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$d=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,af=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,of=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,df=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ff=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pf=`#ifdef USE_SKINNING
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
#endif`,mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vf=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Af=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
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
}`,Cf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,If=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Df=`#include <common>
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
}`,Uf=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Nf=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
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
}`,Vf=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gf=`#define LAMBERT
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
}`,Wf=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Xf=`#define MATCAP
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
}`,qf=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yf=`#define NORMAL
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
}`,Zf=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Jf=`#define PHONG
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
}`,Kf=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,$f=`#define STANDARD
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
}`,jf=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Qf=`#define TOON
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
}`,ep=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,tp=`uniform float size;
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
}`,np=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,sp=`uniform vec3 color;
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
}`,rp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ap=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lt={alphahash_fragment:Au,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Iu,aomap_fragment:Du,aomap_pars_fragment:Uu,batching_pars_vertex:Nu,batching_vertex:Ou,begin_vertex:Fu,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:Hu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:Yu,color_pars_vertex:Zu,color_vertex:Ju,common:Ku,cube_uv_reflection_fragment:$u,defaultnormal_vertex:ju,displacementmap_pars_vertex:Qu,displacementmap_vertex:ed,emissivemap_fragment:td,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:ad,envmap_pars_fragment:od,envmap_pars_vertex:ld,envmap_physical_pars_fragment:vd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:dd,fog_pars_fragment:fd,gradientmap_pars_fragment:pd,lightmap_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:xd,lights_pars_begin:yd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:Ed,lights_phong_pars_fragment:bd,lights_physical_fragment:wd,lights_physical_pars_fragment:Td,lights_fragment_begin:Ad,lights_fragment_maps:Rd,lights_fragment_end:Cd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Dd,map_fragment:Ud,map_pars_fragment:Nd,map_particle_fragment:Od,map_particle_pars_fragment:Fd,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:zd,morphcolor_vertex:Hd,morphnormal_vertex:kd,morphtarget_pars_vertex:Vd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Zd,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:$d,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Qd,opaque_fragment:ef,packing:tf,premultiplied_alpha_fragment:nf,project_vertex:sf,dithering_fragment:rf,dithering_pars_fragment:af,roughnessmap_fragment:of,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:df,skinbase_vertex:ff,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:xf,tonemapping_fragment:yf,tonemapping_pars_fragment:vf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:Ef,uv_pars_vertex:bf,uv_vertex:wf,worldpos_vertex:Tf,background_vert:Af,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:Lf,cube_frag:If,depth_vert:Df,depth_frag:Uf,distanceRGBA_vert:Nf,distanceRGBA_frag:Of,equirect_vert:Ff,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:Hf,meshbasic_vert:kf,meshbasic_frag:Vf,meshlambert_vert:Gf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:Zf,meshphong_vert:Jf,meshphong_frag:Kf,meshphysical_vert:$f,meshphysical_frag:jf,meshtoon_vert:Qf,meshtoon_frag:ep,points_vert:tp,points_frag:np,shadow_vert:ip,shadow_frag:sp,sprite_vert:rp,sprite_frag:ap},Ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},mn={basic:{uniforms:qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:qt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:qt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:qt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:qt([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:qt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:qt([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:qt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:qt([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:qt([Ce.common,Ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:qt([Ce.lights,Ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};mn.physical={uniforms:qt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var qs={r:0,b:0,g:0};function op(i,e,t,n,s,r,o){let a=new rt(0),l=r===!0?0:1,c,h,d=null,f=0,g=null;function y(m,p){let C=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=(p.backgroundBlurriness>0?t:e).get(S)),S===null?M(a,l):S&&S.isColor&&(M(S,1),C=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Br)?(h===void 0&&(h=new Je(new dn(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ki(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_t.getTransfer(S.colorSpace)!==vt,(d!==S||f!==S.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=S,f=S.version,g=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Je(new Ln(2,2),new Pn({name:"BackgroundMaterial",uniforms:ki(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_t.getTransfer(S.colorSpace)!==vt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,g=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function M(m,p){m.getRGB(qs,Dc(i)),n.buffers.color.setClear(qs.r,qs.g,qs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,M(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,M(a,l)},render:y}}function lp(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(k,Z,$,le,re){let ne=!1;if(o){let pe=M(le,$,Z);c!==pe&&(c=pe,g(c.object)),ne=p(k,le,$,re),ne&&C(k,le,$,re)}else{let pe=Z.wireframe===!0;(c.geometry!==le.id||c.program!==$.id||c.wireframe!==pe)&&(c.geometry=le.id,c.program=$.id,c.wireframe=pe,ne=!0)}re!==null&&t.update(re,i.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,ee(k,Z,$,le),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function y(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function M(k,Z,$){let le=$.wireframe===!0,re=a[k.id];re===void 0&&(re={},a[k.id]=re);let ne=re[Z.id];ne===void 0&&(ne={},re[Z.id]=ne);let pe=ne[le];return pe===void 0&&(pe=m(f()),ne[le]=pe),pe}function m(k){let Z=[],$=[],le=[];for(let re=0;re<s;re++)Z[re]=0,$[re]=0,le[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:$,attributeDivisors:le,object:k,attributes:{},index:null}}function p(k,Z,$,le){let re=c.attributes,ne=Z.attributes,pe=0,he=$.getAttributes();for(let Te in he)if(he[Te].location>=0){let U=re[Te],ye=ne[Te];if(ye===void 0&&(Te==="instanceMatrix"&&k.instanceMatrix&&(ye=k.instanceMatrix),Te==="instanceColor"&&k.instanceColor&&(ye=k.instanceColor)),U===void 0||U.attribute!==ye||ye&&U.data!==ye.data)return!0;pe++}return c.attributesNum!==pe||c.index!==le}function C(k,Z,$,le){let re={},ne=Z.attributes,pe=0,he=$.getAttributes();for(let Te in he)if(he[Te].location>=0){let U=ne[Te];U===void 0&&(Te==="instanceMatrix"&&k.instanceMatrix&&(U=k.instanceMatrix),Te==="instanceColor"&&k.instanceColor&&(U=k.instanceColor));let ye={};ye.attribute=U,U&&U.data&&(ye.data=U.data),re[Te]=ye,pe++}c.attributes=re,c.attributesNum=pe,c.index=le}function S(){let k=c.newAttributes;for(let Z=0,$=k.length;Z<$;Z++)k[Z]=0}function I(k){V(k,0)}function V(k,Z){let $=c.newAttributes,le=c.enabledAttributes,re=c.attributeDivisors;$[k]=1,le[k]===0&&(i.enableVertexAttribArray(k),le[k]=1),re[k]!==Z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Z),re[k]=Z)}function B(){let k=c.newAttributes,Z=c.enabledAttributes;for(let $=0,le=Z.length;$<le;$++)Z[$]!==k[$]&&(i.disableVertexAttribArray($),Z[$]=0)}function O(k,Z,$,le,re,ne,pe){pe===!0?i.vertexAttribIPointer(k,Z,$,re,ne):i.vertexAttribPointer(k,Z,$,le,re,ne)}function ee(k,Z,$,le){if(n.isWebGL2===!1&&(k.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();let re=le.attributes,ne=$.getAttributes(),pe=Z.defaultAttributeValues;for(let he in ne){let Te=ne[he];if(Te.location>=0){let ie=re[he];if(ie===void 0&&(he==="instanceMatrix"&&k.instanceMatrix&&(ie=k.instanceMatrix),he==="instanceColor"&&k.instanceColor&&(ie=k.instanceColor)),ie!==void 0){let U=ie.normalized,ye=ie.itemSize,Fe=t.get(ie);if(Fe===void 0)continue;let Ue=Fe.buffer,We=Fe.type,je=Fe.bytesPerElement,ze=n.isWebGL2===!0&&(We===i.INT||We===i.UNSIGNED_INT||ie.gpuType===vc);if(ie.isInterleavedBufferAttribute){let $e=ie.data,z=$e.stride,Me=ie.offset;if($e.isInstancedInterleavedBuffer){for(let oe=0;oe<Te.locationSize;oe++)V(Te.location+oe,$e.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let oe=0;oe<Te.locationSize;oe++)I(Te.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let oe=0;oe<Te.locationSize;oe++)O(Te.location+oe,ye/Te.locationSize,We,U,z*je,(Me+ye/Te.locationSize*oe)*je,ze)}else{if(ie.isInstancedBufferAttribute){for(let $e=0;$e<Te.locationSize;$e++)V(Te.location+$e,ie.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let $e=0;$e<Te.locationSize;$e++)I(Te.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ue);for(let $e=0;$e<Te.locationSize;$e++)O(Te.location+$e,ye/Te.locationSize,We,U,ye*je,ye/Te.locationSize*$e*je,ze)}}else if(pe!==void 0){let U=pe[he];if(U!==void 0)switch(U.length){case 2:i.vertexAttrib2fv(Te.location,U);break;case 3:i.vertexAttrib3fv(Te.location,U);break;case 4:i.vertexAttrib4fv(Te.location,U);break;default:i.vertexAttrib1fv(Te.location,U)}}}}B()}function E(){te();for(let k in a){let Z=a[k];for(let $ in Z){let le=Z[$];for(let re in le)y(le[re].object),delete le[re];delete Z[$]}delete a[k]}}function L(k){if(a[k.id]===void 0)return;let Z=a[k.id];for(let $ in Z){let le=Z[$];for(let re in le)y(le[re].object),delete le[re];delete Z[$]}delete a[k.id]}function K(k){for(let Z in a){let $=a[Z];if($[k.id]===void 0)continue;let le=$[k.id];for(let re in le)y(le[re].object),delete le[re];delete $[k.id]}}function te(){ve(),h=!0,c!==l&&(c=l,g(c.object))}function ve(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:ve,dispose:E,releaseStatesOfGeometry:L,releaseStatesOfProgram:K,initAttributes:S,enableAttribute:I,disableUnusedAttributes:B}}function cp(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let g,y;if(s)g=i,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<f;y++)this.render(h[y],d[y]);else{g.multiDrawArraysWEBGL(r,h,0,d,0,f);let y=0;for(let M=0;M<f;M++)y+=d[M];t.update(y,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function hp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let O=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),M=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,I=o||e.has("OES_texture_float"),V=S&&I,B=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:C,vertexTextures:S,floatFragmentTextures:I,floatVertexTextures:V,maxSamples:B}}function up(i){let e=this,t=null,n=0,s=!1,r=!1,o=new jt,a=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let g=d.length!==0||f||n!==0||s;return s=f,n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,g){let y=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||y===null||y.length===0||r&&!m)r?h(null):c();else{let C=r?0:n,S=C*4,I=p.clippingState||null;l.value=I,I=h(y,f,S,g);for(let V=0;V!==S;++V)I[V]=t[V];p.clippingState=I,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,g,y){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,y!==!0||m===null){let p=g+M*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,I=g;S!==M;++S,I+=4)o.copy(d[S]).applyMatrix4(C,a),o.normal.toArray(m,I),m[I+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function dp(i){let e=new WeakMap;function t(o,a){return a===Ia?o.mapping=Fi:a===Da&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ia||a===Da)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ha(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var yr=class extends _r{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pi=4,Fl=[.125,.215,.35,.446,.526,.582],jn=20,xa=new yr,Bl=new rt,ya=null,va=0,Ma=0,Kn=(1+Math.sqrt(5))/2,Ri=1/Kn,zl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Kn,Ri),new F(0,Kn,-Ri),new F(Ri,0,Kn),new F(-Ri,0,Kn),new F(Kn,Ri,0),new F(-Kn,Ri,0)],Vi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ya=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,va,Ma),e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),va=this._renderer.getActiveCubeFace(),Ma=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:cs,format:hn,colorSpace:An,depthBuffer:!1},s=Hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fp(r)),this._blurMaterial=pp(r,e,t)}return s}_compileMaterial(e){let t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,n,s){let a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Bl),h.toneMapping=kn,h.autoClear=!1;let g=new Zt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),y=new Je(new dn,g),M=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,M=!0):(g.color.copy(Bl),M=!0);for(let p=0;p<6;p++){let C=p%3;C===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):C===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;Ys(s,C*S,p>2?S:0,S,S),h.setRenderTarget(s),M&&h.render(y,a),h.render(e,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Fi||e.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zl[(s-1)%zl.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Je(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*jn-1),M=r/y,m=isFinite(r)?1+Math.floor(h*M):jn;m>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jn}`);let p=[],C=0;for(let O=0;O<jn;++O){let ee=O/M,E=Math.exp(-ee*ee/2);p.push(E),O===0?C+=E:O<m&&(C+=2*E)}for(let O=0;O<p.length;O++)p[O]=p[O]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:S}=this;f.dTheta.value=y,f.mipInt.value=S-n;let I=this._sizeLods[s],V=3*I*(s>S-Pi?s-S+Pi:0),B=4*(this._cubeSize-I);Ys(t,V,B,3*I,2*I),l.setRenderTarget(t),l.render(d,xa)}};function fp(i){let e=[],t=[],n=[],s=i,r=i-Pi+1+Fl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Pi?l=Fl[o-i+Pi-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,y=6,M=3,m=2,p=1,C=new Float32Array(M*y*g),S=new Float32Array(m*y*g),I=new Float32Array(p*y*g);for(let B=0;B<g;B++){let O=B%3*2/3-1,ee=B>2?0:-1,E=[O,ee,0,O+2/3,ee,0,O+2/3,ee+1,0,O,ee,0,O+2/3,ee+1,0,O,ee+1,0];C.set(E,M*y*B),S.set(f,m*y*B);let L=[B,B,B,B,B,B];I.set(L,p*y*B)}let V=new Jt;V.setAttribute("position",new nn(C,M)),V.setAttribute("uv",new nn(S,m)),V.setAttribute("faceIndex",new nn(I,p)),e.push(V),s>Pi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hl(i,e,t){let n=new Rn(i,e,t);return n.texture.mapping=Br,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pp(i,e,t){let n=new Float32Array(jn),s=new F(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function kl(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ao(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Vl(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ao(){return`

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
	`}function mp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ia||l===Da,h=l===Fi||l===Bi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Vi(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Vi(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _p(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let y in f.attributes)e.remove(f.attributes[y]);for(let y in f.morphAttributes){let M=f.morphAttributes[y];for(let m=0,p=M.length;m<p;m++)e.remove(M[m])}f.removeEventListener("dispose",o),delete s[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let y in f)e.update(f[y],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let y in g){let M=g[y];for(let m=0,p=M.length;m<p;m++)e.update(M[m],i.ARRAY_BUFFER)}}function c(d){let f=[],g=d.index,y=d.attributes.position,M=0;if(g!==null){let C=g.array;M=g.version;for(let S=0,I=C.length;S<I;S+=3){let V=C[S+0],B=C[S+1],O=C[S+2];f.push(V,B,B,O,O,V)}}else if(y!==void 0){let C=y.array;M=y.version;for(let S=0,I=C.length/3-1;S<I;S+=3){let V=S+0,B=S+1,O=S+2;f.push(V,B,B,O,O,V)}}else return;let m=new(Lc(f)?gr:mr)(f,1);m.version=M;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let f=r.get(d);if(f){let g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function xp(i,e,t,n){let s=n.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,y){i.drawElements(r,y,a,g*l),t.update(y,r,1)}function d(g,y,M){if(M===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,y,a,g*l,M),t.update(y,r,M)}function f(g,y,M){if(M===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<M;p++)this.render(g[p]/l,y[p]);else{m.multiDrawElementsWEBGL(r,y,0,a,g,0,M);let p=0;for(let C=0;C<M;C++)p+=y[C];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function yp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,e){return i[0]-e[0]}function Mp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Sp(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0,M=r.get(h);if(M===void 0||M.count!==y){let k=function(){te.dispose(),r.delete(h),h.removeEventListener("dispose",k)};M!==void 0&&M.texture.dispose();let C=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,V=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],O=h.morphAttributes.color||[],ee=0;C===!0&&(ee=1),S===!0&&(ee=2),I===!0&&(ee=3);let E=h.attributes.position.count*ee,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);let K=new Float32Array(E*L*4*y),te=new fr(K,E,L,y);te.type=zn,te.needsUpdate=!0;let ve=ee*4;for(let Z=0;Z<y;Z++){let $=V[Z],le=B[Z],re=O[Z],ne=E*L*4*Z;for(let pe=0;pe<$.count;pe++){let he=pe*ve;C===!0&&(o.fromBufferAttribute($,pe),K[ne+he+0]=o.x,K[ne+he+1]=o.y,K[ne+he+2]=o.z,K[ne+he+3]=0),S===!0&&(o.fromBufferAttribute(le,pe),K[ne+he+4]=o.x,K[ne+he+5]=o.y,K[ne+he+6]=o.z,K[ne+he+7]=0),I===!0&&(o.fromBufferAttribute(re,pe),K[ne+he+8]=o.x,K[ne+he+9]=o.y,K[ne+he+10]=o.z,K[ne+he+11]=re.itemSize===4?o.w:1)}}M={count:y,texture:te,size:new Ee(E,L)},r.set(h,M),h.addEventListener("dispose",k)}let m=0;for(let C=0;C<f.length;C++)m+=f[C];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",M.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",M.size)}else{let g=f===void 0?0:f.length,y=n[h.id];if(y===void 0||y.length!==g){y=[];for(let S=0;S<g;S++)y[S]=[S,0];n[h.id]=y}for(let S=0;S<g;S++){let I=y[S];I[0]=S,I[1]=f[S]}y.sort(Mp);for(let S=0;S<8;S++)S<g&&y[S][1]?(a[S][0]=y[S][0],a[S][1]=y[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(vp);let M=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let S=0;S<8;S++){let I=a[S],V=I[0],B=I[1];V!==Number.MAX_SAFE_INTEGER&&B?(M&&h.getAttribute("morphTarget"+S)!==M[V]&&h.setAttribute("morphTarget"+S,M[V]),m&&h.getAttribute("morphNormal"+S)!==m[V]&&h.setAttribute("morphNormal"+S,m[V]),s[S]=B,p+=B):(M&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),m&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),s[S]=0)}let C=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",C),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ep(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var vr=class extends sn{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ti,h!==ti&&h!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ti&&(n=Bn),n===void 0&&h===zi&&(n=ei),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nc=new sn,Oc=new vr(1,1);Oc.compareFunction=Cc;var Fc=new fr,Bc=new Ba,zc=new xr,Gl=[],Wl=[],Xl=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function Xi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hr(i,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Rp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),Dt(t,n)}}function Cp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),Dt(t,n)}}function Pp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),Dt(t,n)}}function Lp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Np(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function zp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Oc:Nc;t.setTexture2D(e||r,s)}function Hp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bc,s)}function kp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zc,s)}function Vp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fc,s)}function Gp(i){switch(i){case 5126:return bp;case 35664:return wp;case 35665:return Tp;case 35666:return Ap;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Lp;case 35667:case 35671:return Ip;case 35668:case 35672:return Dp;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Op;case 36295:return Fp;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Wp(i,e){i.uniform1fv(this.addr,e)}function Xp(i,e){let t=Xi(e,this.size,2);i.uniform2fv(this.addr,t)}function qp(i,e){let t=Xi(e,this.size,3);i.uniform3fv(this.addr,t)}function Yp(i,e){let t=Xi(e,this.size,4);i.uniform4fv(this.addr,t)}function Zp(i,e){let t=Xi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jp(i,e){let t=Xi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kp(i,e){let t=Xi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $p(i,e){i.uniform1iv(this.addr,e)}function jp(i,e){i.uniform2iv(this.addr,e)}function Qp(i,e){i.uniform3iv(this.addr,e)}function em(i,e){i.uniform4iv(this.addr,e)}function tm(i,e){i.uniform1uiv(this.addr,e)}function nm(i,e){i.uniform2uiv(this.addr,e)}function im(i,e){i.uniform3uiv(this.addr,e)}function sm(i,e){i.uniform4uiv(this.addr,e)}function rm(i,e,t){let n=this.cache,s=e.length,r=Hr(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nc,r[o])}function am(i,e,t){let n=this.cache,s=e.length,r=Hr(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bc,r[o])}function om(i,e,t){let n=this.cache,s=e.length,r=Hr(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zc,r[o])}function lm(i,e,t){let n=this.cache,s=e.length,r=Hr(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fc,r[o])}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return $p;case 35667:case 35671:return jp;case 35668:case 35672:return Qp;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}var ka=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gp(t.type)}},Va=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cm(t.type)}},Ga=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Sa=/(\w+)(\])?(\[|\.)?/g;function Zl(i,e){i.seq.push(e),i.map[e.id]=e}function hm(i,e,t){let n=i.name,s=n.length;for(Sa.lastIndex=0;;){let r=Sa.exec(n),o=Sa.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zl(t,c===void 0?new ka(a,i,e):new Va(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Ga(a),Zl(t,d)),t=d}}}var Oi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hm(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Jl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var um=37297,dm=0;function fm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pm(i){let e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i),n;switch(e===t?n="":e===or&&t===ar?n="LinearDisplayP3ToLinearSRGB":e===ar&&t===or&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case zr:return[n,"LinearTransferOETF"];case Tt:case wo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fm(i.getShaderSource(e),o)}else return s}function mm(i,e){let t=pm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gm(i,e){let t;switch(e){case Mh:t="Linear";break;case Sh:t="Reinhard";break;case Eh:t="OptimizedCineon";break;case Eo:t="ACESFilmic";break;case wh:t="AgX";break;case bh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _m(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Li).join(`
`)}function xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Li).join(`
`)}function ym(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Li(i){return i!==""}function $l(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(i){return i.replace(Mm,Em)}var Sm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Em(i,e){let t=lt[e];if(t===void 0){let n=Sm.get(e);if(n!==void 0)t=lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wa(t)}var bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(bm,wm)}function wm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ec(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===So?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Bi:e="ENVMAP_TYPE_CUBE";break;case Br:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Bi&&(e="ENVMAP_MODE_REFRACTION"),e}function Cm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case yh:e="ENVMAP_BLENDING_MIX";break;case vh:e="ENVMAP_BLENDING_ADD";break}return e}function Pm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lm(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Tm(t),c=Am(t),h=Rm(t),d=Cm(t),f=Pm(t),g=t.isWebGL2?"":_m(t),y=xm(t),M=ym(r),m=s.createProgram(),p,C,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Li).join(`
`),p.length>0&&(p+=`
`),C=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Li).join(`
`),C.length>0&&(C+=`
`)):(p=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Li).join(`
`),C=[g,ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?lt.tonemapping_pars_fragment:"",t.toneMapping!==kn?gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,mm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Li).join(`
`)),o=Wa(o),o=$l(o,t),o=jl(o,t),a=Wa(a),a=$l(a,t),a=jl(a,t),o=Ql(o),a=Ql(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);let I=S+p+o,V=S+C+a,B=Jl(s,s.VERTEX_SHADER,I),O=Jl(s,s.FRAGMENT_SHADER,V);s.attachShader(m,B),s.attachShader(m,O),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function ee(te){if(i.debug.checkShaderErrors){let ve=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(B).trim(),Z=s.getShaderInfoLog(O).trim(),$=!0,le=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,B,O);else{let re=Kl(s,B,"vertex"),ne=Kl(s,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ve+`
`+re+`
`+ne)}else ve!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ve):(k===""||Z==="")&&(le=!1);le&&(te.diagnostics={runnable:$,programLog:ve,vertexShader:{log:k,prefix:p},fragmentShader:{log:Z,prefix:C}})}s.deleteShader(B),s.deleteShader(O),E=new Oi(s,m),L=vm(s,m)}let E;this.getUniforms=function(){return E===void 0&&ee(this),E};let L;this.getAttributes=function(){return L===void 0&&ee(this),L};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=s.getProgramParameter(m,um)),K},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=B,this.fragmentShader=O,this}var Im=0,Xa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qa(e),t.set(e,n)),n}},qa=class{constructor(e){this.id=Im++,this.code=e,this.usedTimes=0}};function Dm(i,e,t,n,s,r,o){let a=new us,l=new Xa,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return E===0?"uv":`uv${E}`}function m(E,L,K,te,ve){let k=te.fog,Z=ve.geometry,$=E.isMeshStandardMaterial?te.environment:null,le=(E.isMeshStandardMaterial?t:e).get(E.envMap||$),re=le&&le.mapping===Br?le.image.height:null,ne=y[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));let pe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,he=pe!==void 0?pe.length:0,Te=0;Z.morphAttributes.position!==void 0&&(Te=1),Z.morphAttributes.normal!==void 0&&(Te=2),Z.morphAttributes.color!==void 0&&(Te=3);let ie,U,ye,Fe;if(ne){let Lt=mn[ne];ie=Lt.vertexShader,U=Lt.fragmentShader}else ie=E.vertexShader,U=E.fragmentShader,l.update(E),ye=l.getVertexShaderID(E),Fe=l.getFragmentShaderID(E);let Ue=i.getRenderTarget(),We=ve.isInstancedMesh===!0,je=ve.isBatchedMesh===!0,ze=!!E.map,$e=!!E.matcap,z=!!le,Me=!!E.aoMap,oe=!!E.lightMap,_e=!!E.bumpMap,ae=!!E.normalMap,Ie=!!E.displacementMap,De=!!E.emissiveMap,T=!!E.metalnessMap,b=!!E.roughnessMap,Y=E.anisotropy>0,xe=E.clearcoat>0,ue=E.iridescence>0,de=E.sheen>0,He=E.transmission>0,Pe=Y&&!!E.anisotropyMap,Be=xe&&!!E.clearcoatMap,qe=xe&&!!E.clearcoatNormalMap,tt=xe&&!!E.clearcoatRoughnessMap,me=ue&&!!E.iridescenceMap,at=ue&&!!E.iridescenceThicknessMap,N=de&&!!E.sheenColorMap,ge=de&&!!E.sheenRoughnessMap,Re=!!E.specularMap,Se=!!E.specularColorMap,ke=!!E.specularIntensityMap,ot=He&&!!E.transmissionMap,ct=He&&!!E.thicknessMap,Qe=!!E.gradientMap,we=!!E.alphaMap,H=E.alphaTest>0,be=!!E.alphaHash,Ae=!!E.extensions,Ye=!!Z.attributes.uv1,Ge=!!Z.attributes.uv2,dt=!!Z.attributes.uv3,ft=kn;return E.toneMapped&&(Ue===null||Ue.isXRRenderTarget===!0)&&(ft=i.toneMapping),{isWebGL2:h,shaderID:ne,shaderType:E.type,shaderName:E.name,vertexShader:ie,fragmentShader:U,defines:E.defines,customVertexShaderID:ye,customFragmentShaderID:Fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:je,instancing:We,instancingColor:We&&ve.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ue===null?i.outputColorSpace:Ue.isXRRenderTarget===!0?Ue.texture.colorSpace:An,map:ze,matcap:$e,envMap:z,envMapMode:z&&le.mapping,envMapCubeUVHeight:re,aoMap:Me,lightMap:oe,bumpMap:_e,normalMap:ae,displacementMap:f&&Ie,emissiveMap:De,normalMapObjectSpace:ae&&E.normalMapType===Fh,normalMapTangentSpace:ae&&E.normalMapType===Rc,metalnessMap:T,roughnessMap:b,anisotropy:Y,anisotropyMap:Pe,clearcoat:xe,clearcoatMap:Be,clearcoatNormalMap:qe,clearcoatRoughnessMap:tt,iridescence:ue,iridescenceMap:me,iridescenceThicknessMap:at,sheen:de,sheenColorMap:N,sheenRoughnessMap:ge,specularMap:Re,specularColorMap:Se,specularIntensityMap:ke,transmission:He,transmissionMap:ot,thicknessMap:ct,gradientMap:Qe,opaque:E.transparent===!1&&E.blending===Di,alphaMap:we,alphaTest:H,alphaHash:be,combine:E.combine,mapUv:ze&&M(E.map.channel),aoMapUv:Me&&M(E.aoMap.channel),lightMapUv:oe&&M(E.lightMap.channel),bumpMapUv:_e&&M(E.bumpMap.channel),normalMapUv:ae&&M(E.normalMap.channel),displacementMapUv:Ie&&M(E.displacementMap.channel),emissiveMapUv:De&&M(E.emissiveMap.channel),metalnessMapUv:T&&M(E.metalnessMap.channel),roughnessMapUv:b&&M(E.roughnessMap.channel),anisotropyMapUv:Pe&&M(E.anisotropyMap.channel),clearcoatMapUv:Be&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:qe&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:at&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:N&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:ge&&M(E.sheenRoughnessMap.channel),specularMapUv:Re&&M(E.specularMap.channel),specularColorMapUv:Se&&M(E.specularColorMap.channel),specularIntensityMapUv:ke&&M(E.specularIntensityMap.channel),transmissionMapUv:ot&&M(E.transmissionMap.channel),thicknessMapUv:ct&&M(E.thicknessMap.channel),alphaMapUv:we&&M(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ae||Y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,vertexUv1s:Ye,vertexUv2s:Ge,vertexUv3s:dt,pointsUvs:ve.isPoints===!0&&!!Z.attributes.uv&&(ze||we),fog:!!k,useFog:E.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ve.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Te,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ze&&E.map.isVideoTexture===!0&&_t.getTransfer(E.map.colorSpace)===vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wn,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionDerivatives:Ae&&E.extensions.derivatives===!0,extensionFragDepth:Ae&&E.extensions.fragDepth===!0,extensionDrawBuffers:Ae&&E.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ae&&E.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()}}function p(E){let L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(let K in E.defines)L.push(K),L.push(E.defines[K]);return E.isRawShaderMaterial===!1&&(C(L,E),S(L,E),L.push(i.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function C(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapCubeUVHeight),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.morphAttributeCount),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function S(E,L){a.disableAll(),L.isWebGL2&&a.enable(0),L.supportsVertexTextures&&a.enable(1),L.instancing&&a.enable(2),L.instancingColor&&a.enable(3),L.matcap&&a.enable(4),L.envMap&&a.enable(5),L.normalMapObjectSpace&&a.enable(6),L.normalMapTangentSpace&&a.enable(7),L.clearcoat&&a.enable(8),L.iridescence&&a.enable(9),L.alphaTest&&a.enable(10),L.vertexColors&&a.enable(11),L.vertexAlphas&&a.enable(12),L.vertexUv1s&&a.enable(13),L.vertexUv2s&&a.enable(14),L.vertexUv3s&&a.enable(15),L.vertexTangents&&a.enable(16),L.anisotropy&&a.enable(17),L.alphaHash&&a.enable(18),L.batching&&a.enable(19),E.push(a.mask),a.disableAll(),L.fog&&a.enable(0),L.useFog&&a.enable(1),L.flatShading&&a.enable(2),L.logarithmicDepthBuffer&&a.enable(3),L.skinning&&a.enable(4),L.morphTargets&&a.enable(5),L.morphNormals&&a.enable(6),L.morphColors&&a.enable(7),L.premultipliedAlpha&&a.enable(8),L.shadowMapEnabled&&a.enable(9),L.useLegacyLights&&a.enable(10),L.doubleSided&&a.enable(11),L.flipSided&&a.enable(12),L.useDepthPacking&&a.enable(13),L.dithering&&a.enable(14),L.transmission&&a.enable(15),L.sheen&&a.enable(16),L.opaque&&a.enable(17),L.pointsUvs&&a.enable(18),L.decodeVideoTexture&&a.enable(19),E.push(a.mask)}function I(E){let L=y[E.type],K;if(L){let te=mn[L];K=Mu.clone(te.uniforms)}else K=E.uniforms;return K}function V(E,L){let K;for(let te=0,ve=c.length;te<ve;te++){let k=c[te];if(k.cacheKey===L){K=k,++K.usedTimes;break}}return K===void 0&&(K=new Lm(i,L,E,r),c.push(K)),K}function B(E){if(--E.usedTimes===0){let L=c.indexOf(E);c[L]=c[c.length-1],c.pop(),E.destroy()}}function O(E){l.remove(E)}function ee(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:I,acquireProgram:V,releaseProgram:B,releaseShaderCache:O,programs:c,dispose:ee}}function Um(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,g,y,M,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,groupOrder:y,renderOrder:d.renderOrder,z:M,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.groupOrder=y,p.renderOrder=d.renderOrder,p.z=M,p.group=m),e++,p}function a(d,f,g,y,M,m){let p=o(d,f,g,y,M,m);g.transmission>0?n.push(p):g.transparent===!0?s.push(p):t.push(p)}function l(d,f,g,y,M,m){let p=o(d,f,g,y,M,m);g.transmission>0?n.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Nm),n.length>1&&n.sort(f||tc),s.length>1&&s.sort(f||tc)}function h(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Om(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new nc,i.set(n,[o])):s>=r.length?(o=new nc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new rt};break;case"SpotLight":t={position:new F,direction:new F,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Bm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var zm=0;function Hm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function km(i,e){let t=new Fm,n=Bm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new At,a=new At;function l(h,d){let f=0,g=0,y=0;for(let te=0;te<9;te++)s.probe[te].set(0,0,0);let M=0,m=0,p=0,C=0,S=0,I=0,V=0,B=0,O=0,ee=0,E=0;h.sort(Hm);let L=d===!0?Math.PI:1;for(let te=0,ve=h.length;te<ve;te++){let k=h[te],Z=k.color,$=k.intensity,le=k.distance,re=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=Z.r*$*L,g+=Z.g*$*L,y+=Z.b*$*L;else if(k.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(k.sh.coefficients[ne],$);E++}else if(k.isDirectionalLight){let ne=t.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity*L),k.castShadow){let pe=k.shadow,he=n.get(k);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,s.directionalShadow[M]=he,s.directionalShadowMap[M]=re,s.directionalShadowMatrix[M]=k.shadow.matrix,I++}s.directional[M]=ne,M++}else if(k.isSpotLight){let ne=t.get(k);ne.position.setFromMatrixPosition(k.matrixWorld),ne.color.copy(Z).multiplyScalar($*L),ne.distance=le,ne.coneCos=Math.cos(k.angle),ne.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ne.decay=k.decay,s.spot[p]=ne;let pe=k.shadow;if(k.map&&(s.spotLightMap[O]=k.map,O++,pe.updateMatrices(k),k.castShadow&&ee++),s.spotLightMatrix[p]=pe.matrix,k.castShadow){let he=n.get(k);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,s.spotShadow[p]=he,s.spotShadowMap[p]=re,B++}p++}else if(k.isRectAreaLight){let ne=t.get(k);ne.color.copy(Z).multiplyScalar($),ne.halfWidth.set(k.width*.5,0,0),ne.halfHeight.set(0,k.height*.5,0),s.rectArea[C]=ne,C++}else if(k.isPointLight){let ne=t.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity*L),ne.distance=k.distance,ne.decay=k.decay,k.castShadow){let pe=k.shadow,he=n.get(k);he.shadowBias=pe.bias,he.shadowNormalBias=pe.normalBias,he.shadowRadius=pe.radius,he.shadowMapSize=pe.mapSize,he.shadowCameraNear=pe.camera.near,he.shadowCameraFar=pe.camera.far,s.pointShadow[m]=he,s.pointShadowMap[m]=re,s.pointShadowMatrix[m]=k.shadow.matrix,V++}s.point[m]=ne,m++}else if(k.isHemisphereLight){let ne=t.get(k);ne.skyColor.copy(k.color).multiplyScalar($*L),ne.groundColor.copy(k.groundColor).multiplyScalar($*L),s.hemi[S]=ne,S++}}C>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_FLOAT_1,s.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ce.LTC_HALF_1,s.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=y;let K=s.hash;(K.directionalLength!==M||K.pointLength!==m||K.spotLength!==p||K.rectAreaLength!==C||K.hemiLength!==S||K.numDirectionalShadows!==I||K.numPointShadows!==V||K.numSpotShadows!==B||K.numSpotMaps!==O||K.numLightProbes!==E)&&(s.directional.length=M,s.spot.length=p,s.rectArea.length=C,s.point.length=m,s.hemi.length=S,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=V,s.pointShadowMap.length=V,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=V,s.spotLightMatrix.length=B+O-ee,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=ee,s.numLightProbes=E,K.directionalLength=M,K.pointLength=m,K.spotLength=p,K.rectAreaLength=C,K.hemiLength=S,K.numDirectionalShadows=I,K.numPointShadows=V,K.numSpotShadows=B,K.numSpotMaps=O,K.numLightProbes=E,s.version=zm++)}function c(h,d){let f=0,g=0,y=0,M=0,m=0,p=d.matrixWorldInverse;for(let C=0,S=h.length;C<S;C++){let I=h[C];if(I.isDirectionalLight){let V=s.directional[f];V.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(r),V.direction.transformDirection(p),f++}else if(I.isSpotLight){let V=s.spot[y];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(p),V.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),V.direction.sub(r),V.direction.transformDirection(p),y++}else if(I.isRectAreaLight){let V=s.rectArea[M];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(p),a.identity(),o.copy(I.matrixWorld),o.premultiply(p),a.extractRotation(o),V.halfWidth.set(I.width*.5,0,0),V.halfHeight.set(0,I.height*.5,0),V.halfWidth.applyMatrix4(a),V.halfHeight.applyMatrix4(a),M++}else if(I.isPointLight){let V=s.point[g];V.position.setFromMatrixPosition(I.matrixWorld),V.position.applyMatrix4(p),g++}else if(I.isHemisphereLight){let V=s.hemi[m];V.direction.setFromMatrixPosition(I.matrixWorld),V.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function ic(i,e){let t=new km(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Vm(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new ic(i,e),t.set(r,[l])):o>=a.length?(l=new ic(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ya=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Za=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Gm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wm=`uniform sampler2D shadow_pass;
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
}`;function Xm(i,e,t){let n=new ds,s=new Ee,r=new Ee,o=new St,a=new Ya({depthPacking:Oh}),l=new Za,c={},h=t.maxTextureSize,d={[Gn]:kt,[kt]:Gn,[wn]:wn},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Gm,fragmentShader:Wm}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let y=new Jt;y.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Je(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let p=this.type;this.render=function(B,O,ee){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||B.length===0)return;let E=i.getRenderTarget(),L=i.getActiveCubeFace(),K=i.getActiveMipmapLevel(),te=i.state;te.setBlending(Hn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);let ve=p!==bn&&this.type===bn,k=p===bn&&this.type!==bn;for(let Z=0,$=B.length;Z<$;Z++){let le=B[Z],re=le.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);let ne=re.getFrameExtents();if(s.multiply(ne),r.copy(re.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,re.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,re.mapSize.y=r.y)),re.map===null||ve===!0||k===!0){let he=this.type!==bn?{minFilter:Yt,magFilter:Yt}:{};re.map!==null&&re.map.dispose(),re.map=new Rn(s.x,s.y,he),re.map.texture.name=le.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();let pe=re.getViewportCount();for(let he=0;he<pe;he++){let Te=re.getViewport(he);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),te.viewport(o),re.updateMatrices(le,he),n=re.getFrustum(),I(O,ee,re.camera,le,this.type)}re.isPointLightShadow!==!0&&this.type===bn&&C(re,ee),re.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,L,K)};function C(B,O){let ee=e.update(M);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,g.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Rn(s.x,s.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(O,null,ee,f,M,null),g.uniforms.shadow_pass.value=B.mapPass.texture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(O,null,ee,g,M,null)}function S(B,O,ee,E){let L=null,K=ee.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(K!==void 0)L=K;else if(L=ee.isPointLight===!0?l:a,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){let te=L.uuid,ve=O.uuid,k=c[te];k===void 0&&(k={},c[te]=k);let Z=k[ve];Z===void 0&&(Z=L.clone(),k[ve]=Z,O.addEventListener("dispose",V)),L=Z}if(L.visible=O.visible,L.wireframe=O.wireframe,E===bn?L.side=O.shadowSide!==null?O.shadowSide:O.side:L.side=O.shadowSide!==null?O.shadowSide:d[O.side],L.alphaMap=O.alphaMap,L.alphaTest=O.alphaTest,L.map=O.map,L.clipShadows=O.clipShadows,L.clippingPlanes=O.clippingPlanes,L.clipIntersection=O.clipIntersection,L.displacementMap=O.displacementMap,L.displacementScale=O.displacementScale,L.displacementBias=O.displacementBias,L.wireframeLinewidth=O.wireframeLinewidth,L.linewidth=O.linewidth,ee.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let te=i.properties.get(L);te.light=ee}return L}function I(B,O,ee,E,L){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&L===bn)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,B.matrixWorld);let ve=e.update(B),k=B.material;if(Array.isArray(k)){let Z=ve.groups;for(let $=0,le=Z.length;$<le;$++){let re=Z[$],ne=k[re.materialIndex];if(ne&&ne.visible){let pe=S(B,ne,E,L);B.onBeforeShadow(i,B,O,ee,ve,pe,re),i.renderBufferDirect(ee,null,ve,pe,B,re),B.onAfterShadow(i,B,O,ee,ve,pe,re)}}}else if(k.visible){let Z=S(B,k,E,L);B.onBeforeShadow(i,B,O,ee,ve,Z,null),i.renderBufferDirect(ee,null,ve,Z,B,null),B.onAfterShadow(i,B,O,ee,ve,Z,null)}}let te=B.children;for(let ve=0,k=te.length;ve<k;ve++)I(te[ve],O,ee,E,L)}function V(B){B.target.removeEventListener("dispose",V);for(let ee in c){let E=c[ee],L=B.target.uuid;L in E&&(E[L].dispose(),delete E[L])}}}function qm(i,e,t){let n=t.isWebGL2;function s(){let H=!1,be=new St,Ae=null,Ye=new St(0,0,0,0);return{setMask:function(Ge){Ae!==Ge&&!H&&(i.colorMask(Ge,Ge,Ge,Ge),Ae=Ge)},setLocked:function(Ge){H=Ge},setClear:function(Ge,dt,ft,Et,Lt){Lt===!0&&(Ge*=Et,dt*=Et,ft*=Et),be.set(Ge,dt,ft,Et),Ye.equals(be)===!1&&(i.clearColor(Ge,dt,ft,Et),Ye.copy(be))},reset:function(){H=!1,Ae=null,Ye.set(-1,0,0,0)}}}function r(){let H=!1,be=null,Ae=null,Ye=null;return{setTest:function(Ge){Ge?je(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Ge){be!==Ge&&!H&&(i.depthMask(Ge),be=Ge)},setFunc:function(Ge){if(Ae!==Ge){switch(Ge){case dh:i.depthFunc(i.NEVER);break;case fh:i.depthFunc(i.ALWAYS);break;case ph:i.depthFunc(i.LESS);break;case nr:i.depthFunc(i.LEQUAL);break;case mh:i.depthFunc(i.EQUAL);break;case gh:i.depthFunc(i.GEQUAL);break;case _h:i.depthFunc(i.GREATER);break;case xh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=Ge}},setLocked:function(Ge){H=Ge},setClear:function(Ge){Ye!==Ge&&(i.clearDepth(Ge),Ye=Ge)},reset:function(){H=!1,be=null,Ae=null,Ye=null}}}function o(){let H=!1,be=null,Ae=null,Ye=null,Ge=null,dt=null,ft=null,Et=null,Lt=null;return{setTest:function(mt){H||(mt?je(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(mt){be!==mt&&!H&&(i.stencilMask(mt),be=mt)},setFunc:function(mt,Ft,Gt){(Ae!==mt||Ye!==Ft||Ge!==Gt)&&(i.stencilFunc(mt,Ft,Gt),Ae=mt,Ye=Ft,Ge=Gt)},setOp:function(mt,Ft,Gt){(dt!==mt||ft!==Ft||Et!==Gt)&&(i.stencilOp(mt,Ft,Gt),dt=mt,ft=Ft,Et=Gt)},setLocked:function(mt){H=mt},setClear:function(mt){Lt!==mt&&(i.clearStencil(mt),Lt=mt)},reset:function(){H=!1,be=null,Ae=null,Ye=null,Ge=null,dt=null,ft=null,Et=null,Lt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},g={},y=new WeakMap,M=[],m=null,p=!1,C=null,S=null,I=null,V=null,B=null,O=null,ee=null,E=new rt(0,0,0),L=0,K=!1,te=null,ve=null,k=null,Z=null,$=null,le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ne=0,pe=i.getParameter(i.VERSION);pe.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(pe)[1]),re=ne>=1):pe.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),re=ne>=2);let he=null,Te={},ie=i.getParameter(i.SCISSOR_BOX),U=i.getParameter(i.VIEWPORT),ye=new St().fromArray(ie),Fe=new St().fromArray(U);function Ue(H,be,Ae,Ye){let Ge=new Uint8Array(4),dt=i.createTexture();i.bindTexture(H,dt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<Ae;ft++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(be,0,i.RGBA,1,1,Ye,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(be+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return dt}let We={};We[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),We[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),We[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),je(i.DEPTH_TEST),l.setFunc(nr),De(!1),T(Oo),je(i.CULL_FACE),ae(Hn);function je(H){f[H]!==!0&&(i.enable(H),f[H]=!0)}function ze(H){f[H]!==!1&&(i.disable(H),f[H]=!1)}function $e(H,be){return g[H]!==be?(i.bindFramebuffer(H,be),g[H]=be,n&&(H===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=be),H===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=be)),!0):!1}function z(H,be){let Ae=M,Ye=!1;if(H)if(Ae=y.get(be),Ae===void 0&&(Ae=[],y.set(be,Ae)),H.isWebGLMultipleRenderTargets){let Ge=H.texture;if(Ae.length!==Ge.length||Ae[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,ft=Ge.length;dt<ft;dt++)Ae[dt]=i.COLOR_ATTACHMENT0+dt;Ae.length=Ge.length,Ye=!0}}else Ae[0]!==i.COLOR_ATTACHMENT0&&(Ae[0]=i.COLOR_ATTACHMENT0,Ye=!0);else Ae[0]!==i.BACK&&(Ae[0]=i.BACK,Ye=!0);Ye&&(t.isWebGL2?i.drawBuffers(Ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ae))}function Me(H){return m!==H?(i.useProgram(H),m=H,!0):!1}let oe={[$n]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};if(n)oe[Ho]=i.MIN,oe[ko]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(oe[Ho]=H.MIN_EXT,oe[ko]=H.MAX_EXT)}let _e={[Qc]:i.ZERO,[eh]:i.ONE,[th]:i.SRC_COLOR,[Pa]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[La]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[uh]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(H,be,Ae,Ye,Ge,dt,ft,Et,Lt,mt){if(H===Hn){p===!0&&(ze(i.BLEND),p=!1);return}if(p===!1&&(je(i.BLEND),p=!0),H!==Kc){if(H!==C||mt!==K){if((S!==$n||B!==$n)&&(i.blendEquation(i.FUNC_ADD),S=$n,B=$n),mt)switch(H){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}I=null,V=null,O=null,ee=null,E.set(0,0,0),L=0,C=H,K=mt}return}Ge=Ge||be,dt=dt||Ae,ft=ft||Ye,(be!==S||Ge!==B)&&(i.blendEquationSeparate(oe[be],oe[Ge]),S=be,B=Ge),(Ae!==I||Ye!==V||dt!==O||ft!==ee)&&(i.blendFuncSeparate(_e[Ae],_e[Ye],_e[dt],_e[ft]),I=Ae,V=Ye,O=dt,ee=ft),(Et.equals(E)===!1||Lt!==L)&&(i.blendColor(Et.r,Et.g,Et.b,Lt),E.copy(Et),L=Lt),C=H,K=!1}function Ie(H,be){H.side===wn?ze(i.CULL_FACE):je(i.CULL_FACE);let Ae=H.side===kt;be&&(Ae=!Ae),De(Ae),H.blending===Di&&H.transparent===!1?ae(Hn):ae(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let Ye=H.stencilWrite;c.setTest(Ye),Ye&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Y(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?je(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(H){te!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),te=H)}function T(H){H!==Zc?(je(i.CULL_FACE),H!==ve&&(H===Oo?i.cullFace(i.BACK):H===Jc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),ve=H}function b(H){H!==k&&(re&&i.lineWidth(H),k=H)}function Y(H,be,Ae){H?(je(i.POLYGON_OFFSET_FILL),(Z!==be||$!==Ae)&&(i.polygonOffset(be,Ae),Z=be,$=Ae)):ze(i.POLYGON_OFFSET_FILL)}function xe(H){H?je(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function ue(H){H===void 0&&(H=i.TEXTURE0+le-1),he!==H&&(i.activeTexture(H),he=H)}function de(H,be,Ae){Ae===void 0&&(he===null?Ae=i.TEXTURE0+le-1:Ae=he);let Ye=Te[Ae];Ye===void 0&&(Ye={type:void 0,texture:void 0},Te[Ae]=Ye),(Ye.type!==H||Ye.texture!==be)&&(he!==Ae&&(i.activeTexture(Ae),he=Ae),i.bindTexture(H,be||We[H]),Ye.type=H,Ye.texture=be)}function He(){let H=Te[he];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function N(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(H){ye.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ye.copy(H))}function ot(H){Fe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Fe.copy(H))}function ct(H,be){let Ae=d.get(be);Ae===void 0&&(Ae=new WeakMap,d.set(be,Ae));let Ye=Ae.get(H);Ye===void 0&&(Ye=i.getUniformBlockIndex(be,H.name),Ae.set(H,Ye))}function Qe(H,be){let Ye=d.get(be).get(H);h.get(be)!==Ye&&(i.uniformBlockBinding(be,Ye,H.__bindingPointIndex),h.set(be,Ye))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},he=null,Te={},g={},y=new WeakMap,M=[],m=null,p=!1,C=null,S=null,I=null,V=null,B=null,O=null,ee=null,E=new rt(0,0,0),L=0,K=!1,te=null,ve=null,k=null,Z=null,$=null,ye.set(0,0,i.canvas.width,i.canvas.height),Fe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:je,disable:ze,bindFramebuffer:$e,drawBuffers:z,useProgram:Me,setBlending:ae,setMaterial:Ie,setFlipSided:De,setCullFace:T,setLineWidth:b,setPolygonOffset:Y,setScissorTest:xe,activeTexture:ue,bindTexture:de,unbindTexture:He,compressedTexImage2D:Pe,compressedTexImage3D:Be,texImage2D:Re,texImage3D:Se,updateUBOMapping:ct,uniformBlockBinding:Qe,texStorage2D:N,texStorage3D:ge,texSubImage2D:qe,texSubImage3D:tt,compressedTexSubImage2D:me,compressedTexSubImage3D:at,scissor:ke,viewport:ot,reset:we}}function Ym(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,b){return g?new OffscreenCanvas(T,b):hr("canvas")}function M(T,b,Y,xe){let ue=1;if((T.width>xe||T.height>xe)&&(ue=xe/Math.max(T.width,T.height)),ue<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){let de=b?cr:Math.floor,He=de(ue*T.width),Pe=de(ue*T.height);d===void 0&&(d=y(He,Pe));let Be=Y?y(He,Pe):d;return Be.width=He,Be.height=Pe,Be.getContext("2d").drawImage(T,0,0,He,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+He+"x"+Pe+")."),Be}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function m(T){return Oa(T.width)&&Oa(T.height)}function p(T){return a?!1:T.wrapS!==cn||T.wrapT!==cn||T.minFilter!==Yt&&T.minFilter!==en}function C(T,b){return T.generateMipmaps&&b&&T.minFilter!==Yt&&T.minFilter!==en}function S(T){i.generateMipmap(T)}function I(T,b,Y,xe,ue=!1){if(a===!1)return b;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de=b;if(b===i.RED&&(Y===i.FLOAT&&(de=i.R32F),Y===i.HALF_FLOAT&&(de=i.R16F),Y===i.UNSIGNED_BYTE&&(de=i.R8)),b===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(de=i.R8UI),Y===i.UNSIGNED_SHORT&&(de=i.R16UI),Y===i.UNSIGNED_INT&&(de=i.R32UI),Y===i.BYTE&&(de=i.R8I),Y===i.SHORT&&(de=i.R16I),Y===i.INT&&(de=i.R32I)),b===i.RG&&(Y===i.FLOAT&&(de=i.RG32F),Y===i.HALF_FLOAT&&(de=i.RG16F),Y===i.UNSIGNED_BYTE&&(de=i.RG8)),b===i.RGBA){let He=ue?rr:_t.getTransfer(xe);Y===i.FLOAT&&(de=i.RGBA32F),Y===i.HALF_FLOAT&&(de=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(de=He===vt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function V(T,b,Y){return C(T,Y)===!0||T.isFramebufferTexture&&T.minFilter!==Yt&&T.minFilter!==en?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function B(T){return T===Yt||T===Vo||T===Zr?i.NEAREST:i.LINEAR}function O(T){let b=T.target;b.removeEventListener("dispose",O),E(b),b.isVideoTexture&&h.delete(b)}function ee(T){let b=T.target;b.removeEventListener("dispose",ee),K(b)}function E(T){let b=n.get(T);if(b.__webglInit===void 0)return;let Y=T.source,xe=f.get(Y);if(xe){let ue=xe[b.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&L(T),Object.keys(xe).length===0&&f.delete(Y)}n.remove(T)}function L(T){let b=n.get(T);i.deleteTexture(b.__webglTexture);let Y=T.source,xe=f.get(Y);delete xe[b.__cacheKey],o.memory.textures--}function K(T){let b=T.texture,Y=n.get(T),xe=n.get(b);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(Y.__webglFramebuffer[ue]))for(let de=0;de<Y.__webglFramebuffer[ue].length;de++)i.deleteFramebuffer(Y.__webglFramebuffer[ue][de]);else i.deleteFramebuffer(Y.__webglFramebuffer[ue]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[ue])}else{if(Array.isArray(Y.__webglFramebuffer))for(let ue=0;ue<Y.__webglFramebuffer.length;ue++)i.deleteFramebuffer(Y.__webglFramebuffer[ue]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ue=0;ue<Y.__webglColorRenderbuffer.length;ue++)Y.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[ue]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let ue=0,de=b.length;ue<de;ue++){let He=n.get(b[ue]);He.__webglTexture&&(i.deleteTexture(He.__webglTexture),o.memory.textures--),n.remove(b[ue])}n.remove(b),n.remove(T)}let te=0;function ve(){te=0}function k(){let T=te;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),te+=1,T}function Z(T){let b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function $(T,b){let Y=n.get(T);if(T.isVideoTexture&&Ie(T),T.isRenderTargetTexture===!1&&T.version>0&&Y.__version!==T.version){let xe=T.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Y,T,b);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+b)}function le(T,b){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){ye(Y,T,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+b)}function re(T,b){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){ye(Y,T,b);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+b)}function ne(T,b){let Y=n.get(T);if(T.version>0&&Y.__version!==T.version){Fe(Y,T,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+b)}let pe={[os]:i.REPEAT,[cn]:i.CLAMP_TO_EDGE,[Ua]:i.MIRRORED_REPEAT},he={[Yt]:i.NEAREST,[Vo]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[Th]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Te={[Bh]:i.NEVER,[Wh]:i.ALWAYS,[zh]:i.LESS,[Cc]:i.LEQUAL,[Hh]:i.EQUAL,[Gh]:i.GEQUAL,[kh]:i.GREATER,[Vh]:i.NOTEQUAL};function ie(T,b,Y){if(Y?(i.texParameteri(T,i.TEXTURE_WRAP_S,pe[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,pe[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,pe[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,he[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,he[b.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(b.wrapS!==cn||b.wrapT!==cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,B(b.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,B(b.minFilter)),b.minFilter!==Yt&&b.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===Yt||b.minFilter!==Zr&&b.minFilter!==ls||b.type===zn&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===cs&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(i.texParameterf(T,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function U(T,b){let Y=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",O));let xe=b.source,ue=f.get(xe);ue===void 0&&(ue={},f.set(xe,ue));let de=Z(b);if(de!==T.__cacheKey){ue[de]===void 0&&(ue[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ue[de].usedTimes++;let He=ue[T.__cacheKey];He!==void 0&&(ue[T.__cacheKey].usedTimes--,He.usedTimes===0&&L(b)),T.__cacheKey=de,T.__webglTexture=ue[de].texture}return Y}function ye(T,b,Y){let xe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xe=i.TEXTURE_3D);let ue=U(T,b),de=b.source;t.bindTexture(xe,T.__webglTexture,i.TEXTURE0+Y);let He=n.get(de);if(de.version!==He.__version||ue===!0){t.activeTexture(i.TEXTURE0+Y);let Pe=_t.getPrimaries(_t.workingColorSpace),Be=b.colorSpace===tn?null:_t.getPrimaries(b.colorSpace),qe=b.colorSpace===tn||Pe===Be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let tt=p(b)&&m(b.image)===!1,me=M(b.image,tt,!1,s.maxTextureSize);me=De(b,me);let at=m(me)||a,N=r.convert(b.format,b.colorSpace),ge=r.convert(b.type),Re=I(b.internalFormat,N,ge,b.colorSpace,b.isVideoTexture);ie(xe,b,at);let Se,ke=b.mipmaps,ot=a&&b.isVideoTexture!==!0&&Re!==Tc,ct=He.__version===void 0||ue===!0,Qe=V(b,me,at);if(b.isDepthTexture)Re=i.DEPTH_COMPONENT,a?b.type===zn?Re=i.DEPTH_COMPONENT32F:b.type===Bn?Re=i.DEPTH_COMPONENT24:b.type===ei?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:b.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ti&&Re===i.DEPTH_COMPONENT&&b.type!==bo&&b.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Bn,ge=r.convert(b.type)),b.format===zi&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,b.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=ei,ge=r.convert(b.type))),ct&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Re,me.width,me.height):t.texImage2D(i.TEXTURE_2D,0,Re,me.width,me.height,0,N,ge,null));else if(b.isDataTexture)if(ke.length>0&&at){ot&&ct&&t.texStorage2D(i.TEXTURE_2D,Qe,Re,ke[0].width,ke[0].height);for(let we=0,H=ke.length;we<H;we++)Se=ke[we],ot?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,N,ge,Se.data):t.texImage2D(i.TEXTURE_2D,we,Re,Se.width,Se.height,0,N,ge,Se.data);b.generateMipmaps=!1}else ot?(ct&&t.texStorage2D(i.TEXTURE_2D,Qe,Re,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,me.width,me.height,N,ge,me.data)):t.texImage2D(i.TEXTURE_2D,0,Re,me.width,me.height,0,N,ge,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Re,ke[0].width,ke[0].height,me.depth);for(let we=0,H=ke.length;we<H;we++)Se=ke[we],b.format!==hn?N!==null?ot?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Se.width,Se.height,me.depth,N,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,Re,Se.width,Se.height,me.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Se.width,Se.height,me.depth,N,ge,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,Re,Se.width,Se.height,me.depth,0,N,ge,Se.data)}else{ot&&ct&&t.texStorage2D(i.TEXTURE_2D,Qe,Re,ke[0].width,ke[0].height);for(let we=0,H=ke.length;we<H;we++)Se=ke[we],b.format!==hn?N!==null?ot?t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,N,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,we,Re,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,N,ge,Se.data):t.texImage2D(i.TEXTURE_2D,we,Re,Se.width,Se.height,0,N,ge,Se.data)}else if(b.isDataArrayTexture)ot?(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,Re,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,N,ge,me.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,me.width,me.height,me.depth,0,N,ge,me.data);else if(b.isData3DTexture)ot?(ct&&t.texStorage3D(i.TEXTURE_3D,Qe,Re,me.width,me.height,me.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,N,ge,me.data)):t.texImage3D(i.TEXTURE_3D,0,Re,me.width,me.height,me.depth,0,N,ge,me.data);else if(b.isFramebufferTexture){if(ct)if(ot)t.texStorage2D(i.TEXTURE_2D,Qe,Re,me.width,me.height);else{let we=me.width,H=me.height;for(let be=0;be<Qe;be++)t.texImage2D(i.TEXTURE_2D,be,Re,we,H,0,N,ge,null),we>>=1,H>>=1}}else if(ke.length>0&&at){ot&&ct&&t.texStorage2D(i.TEXTURE_2D,Qe,Re,ke[0].width,ke[0].height);for(let we=0,H=ke.length;we<H;we++)Se=ke[we],ot?t.texSubImage2D(i.TEXTURE_2D,we,0,0,N,ge,Se):t.texImage2D(i.TEXTURE_2D,we,Re,N,ge,Se);b.generateMipmaps=!1}else ot?(ct&&t.texStorage2D(i.TEXTURE_2D,Qe,Re,me.width,me.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,N,ge,me)):t.texImage2D(i.TEXTURE_2D,0,Re,N,ge,me);C(b,at)&&S(xe),He.__version=de.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Fe(T,b,Y){if(b.image.length!==6)return;let xe=U(T,b),ue=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+Y);let de=n.get(ue);if(ue.version!==de.__version||xe===!0){t.activeTexture(i.TEXTURE0+Y);let He=_t.getPrimaries(_t.workingColorSpace),Pe=b.colorSpace===tn?null:_t.getPrimaries(b.colorSpace),Be=b.colorSpace===tn||He===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let qe=b.isCompressedTexture||b.image[0].isCompressedTexture,tt=b.image[0]&&b.image[0].isDataTexture,me=[];for(let we=0;we<6;we++)!qe&&!tt?me[we]=M(b.image[we],!1,!0,s.maxCubemapSize):me[we]=tt?b.image[we].image:b.image[we],me[we]=De(b,me[we]);let at=me[0],N=m(at)||a,ge=r.convert(b.format,b.colorSpace),Re=r.convert(b.type),Se=I(b.internalFormat,ge,Re,b.colorSpace),ke=a&&b.isVideoTexture!==!0,ot=de.__version===void 0||xe===!0,ct=V(b,at,N);ie(i.TEXTURE_CUBE_MAP,b,N);let Qe;if(qe){ke&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Se,at.width,at.height);for(let we=0;we<6;we++){Qe=me[we].mipmaps;for(let H=0;H<Qe.length;H++){let be=Qe[H];b.format!==hn?ge!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,be.width,be.height,ge,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Se,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,be.width,be.height,ge,Re,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Se,be.width,be.height,0,ge,Re,be.data)}}}else{Qe=b.mipmaps,ke&&ot&&(Qe.length>0&&ct++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Se,me[0].width,me[0].height));for(let we=0;we<6;we++)if(tt){ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,me[we].width,me[we].height,ge,Re,me[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Se,me[we].width,me[we].height,0,ge,Re,me[we].data);for(let H=0;H<Qe.length;H++){let Ae=Qe[H].image[we].image;ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,Ae.width,Ae.height,ge,Re,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Se,Ae.width,Ae.height,0,ge,Re,Ae.data)}}else{ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ge,Re,me[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Se,ge,Re,me[we]);for(let H=0;H<Qe.length;H++){let be=Qe[H];ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,ge,Re,be.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Se,ge,Re,be.image[we])}}}C(b,N)&&S(i.TEXTURE_CUBE_MAP),de.__version=ue.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Ue(T,b,Y,xe,ue,de){let He=r.convert(Y.format,Y.colorSpace),Pe=r.convert(Y.type),Be=I(Y.internalFormat,He,Pe,Y.colorSpace);if(!n.get(b).__hasExternalTextures){let tt=Math.max(1,b.width>>de),me=Math.max(1,b.height>>de);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,de,Be,tt,me,b.depth,0,He,Pe,null):t.texImage2D(ue,de,Be,tt,me,0,He,Pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ae(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ue,n.get(Y).__webglTexture,0,_e(b)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,ue,n.get(Y).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(T,b,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer&&!b.stencilBuffer){let xe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||ae(b)){let ue=b.depthTexture;ue&&ue.isDepthTexture&&(ue.type===zn?xe=i.DEPTH_COMPONENT32F:ue.type===Bn&&(xe=i.DEPTH_COMPONENT24));let de=_e(b);ae(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,xe,b.width,b.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,xe,b.width,b.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,b.width,b.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(b.depthBuffer&&b.stencilBuffer){let xe=_e(b);Y&&ae(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,b.width,b.height):ae(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{let xe=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ue=0;ue<xe.length;ue++){let de=xe[ue],He=r.convert(de.format,de.colorSpace),Pe=r.convert(de.type),Be=I(de.internalFormat,He,Pe,de.colorSpace),qe=_e(b);Y&&ae(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,Be,b.width,b.height):ae(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,Be,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Be,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);let xe=n.get(b.depthTexture).__webglTexture,ue=_e(b);if(b.depthTexture.format===ti)ae(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(b.depthTexture.format===zi)ae(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function ze(T){let b=n.get(T),Y=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");je(b.__webglFramebuffer,T)}else if(Y){b.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[xe]),b.__webglDepthbuffer[xe]=i.createRenderbuffer(),We(b.__webglDepthbuffer[xe],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=i.createRenderbuffer(),We(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(T,b,Y){let xe=n.get(T);b!==void 0&&Ue(xe.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ze(T)}function z(T){let b=T.texture,Y=n.get(T),xe=n.get(b);T.addEventListener("dispose",ee),T.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=b.version,o.memory.textures++);let ue=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultipleRenderTargets===!0,He=m(T)||a;if(ue){Y.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(a&&b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[Pe]=[];for(let Be=0;Be<b.mipmaps.length;Be++)Y.__webglFramebuffer[Pe][Be]=i.createFramebuffer()}else Y.__webglFramebuffer[Pe]=i.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)Y.__webglFramebuffer[Pe]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(de)if(s.drawBuffers){let Pe=T.texture;for(let Be=0,qe=Pe.length;Be<qe;Be++){let tt=n.get(Pe[Be]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&ae(T)===!1){let Pe=de?b:[b];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Be=0;Be<Pe.length;Be++){let qe=Pe[Be];Y.__webglColorRenderbuffer[Be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Be]);let tt=r.convert(qe.format,qe.colorSpace),me=r.convert(qe.type),at=I(qe.internalFormat,tt,me,qe.colorSpace,T.isXRRenderTarget===!0),N=_e(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,N,at,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Be,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Be])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),We(Y.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),ie(i.TEXTURE_CUBE_MAP,b,He);for(let Pe=0;Pe<6;Pe++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)Ue(Y.__webglFramebuffer[Pe][Be],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Be);else Ue(Y.__webglFramebuffer[Pe],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);C(b,He)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){let Pe=T.texture;for(let Be=0,qe=Pe.length;Be<qe;Be++){let tt=Pe[Be],me=n.get(tt);t.bindTexture(i.TEXTURE_2D,me.__webglTexture),ie(i.TEXTURE_2D,tt,He),Ue(Y.__webglFramebuffer,T,tt,i.COLOR_ATTACHMENT0+Be,i.TEXTURE_2D,0),C(tt,He)&&S(i.TEXTURE_2D)}t.unbindTexture()}else{let Pe=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?Pe=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Pe,xe.__webglTexture),ie(Pe,b,He),a&&b.mipmaps&&b.mipmaps.length>0)for(let Be=0;Be<b.mipmaps.length;Be++)Ue(Y.__webglFramebuffer[Be],T,b,i.COLOR_ATTACHMENT0,Pe,Be);else Ue(Y.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,Pe,0);C(b,He)&&S(Pe),t.unbindTexture()}T.depthBuffer&&ze(T)}function Me(T){let b=m(T)||a,Y=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let xe=0,ue=Y.length;xe<ue;xe++){let de=Y[xe];if(C(de,b)){let He=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(de).__webglTexture;t.bindTexture(He,Pe),S(He),t.unbindTexture()}}}function oe(T){if(a&&T.samples>0&&ae(T)===!1){let b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],Y=T.width,xe=T.height,ue=i.COLOR_BUFFER_BIT,de=[],He=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(T),Be=T.isWebGLMultipleRenderTargets===!0;if(Be)for(let qe=0;qe<b.length;qe++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let qe=0;qe<b.length;qe++){de.push(i.COLOR_ATTACHMENT0+qe),T.depthBuffer&&de.push(He);let tt=Pe.__ignoreDepthValues!==void 0?Pe.__ignoreDepthValues:!1;if(tt===!1&&(T.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),Be&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[qe]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[He]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[He])),Be){let me=n.get(b[qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,me,0)}i.blitFramebuffer(0,0,Y,xe,0,0,Y,xe,ue,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Be)for(let qe=0;qe<b.length;qe++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[qe]);let tt=n.get(b[qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}}function _e(T){return Math.min(s.maxSamples,T.samples)}function ae(T){let b=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ie(T){let b=o.render.frame;h.get(T)!==b&&(h.set(T,b),T.update())}function De(T,b){let Y=T.colorSpace,xe=T.format,ue=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Na||Y!==An&&Y!==tn&&(_t.getTransfer(Y)===vt?a===!1?e.has("EXT_sRGB")===!0&&xe===hn?(T.format=Na,T.minFilter=en,T.generateMipmaps=!1):b=ur.sRGBToLinear(b):(xe!==hn||ue!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}this.allocateTextureUnit=k,this.resetTextureUnits=ve,this.setTexture2D=$,this.setTexture2DArray=le,this.setTexture3D=re,this.setTextureCube=ne,this.rebindTextures=$e,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=ae}function Zm(i,e,t){let n=t.isWebGL2;function s(r,o=tn){let a,l=_t.getTransfer(o);if(r===Vn)return i.UNSIGNED_BYTE;if(r===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Ah)return i.BYTE;if(r===Rh)return i.SHORT;if(r===bo)return i.UNSIGNED_SHORT;if(r===vc)return i.INT;if(r===Bn)return i.UNSIGNED_INT;if(r===zn)return i.FLOAT;if(r===cs)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ch)return i.ALPHA;if(r===hn)return i.RGBA;if(r===Ph)return i.LUMINANCE;if(r===Lh)return i.LUMINANCE_ALPHA;if(r===ti)return i.DEPTH_COMPONENT;if(r===zi)return i.DEPTH_STENCIL;if(r===Na)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ih)return i.RED;if(r===Ec)return i.RED_INTEGER;if(r===Dh)return i.RG;if(r===bc)return i.RG_INTEGER;if(r===wc)return i.RGBA_INTEGER;if(r===Jr||r===Kr||r===$r||r===jr)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Jr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Jr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Go||r===Wo||r===Xo||r===qo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Go)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yo||r===Zo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Yo)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Zo)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jo||r===Ko||r===$o||r===jo||r===Qo||r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===al||r===ol||r===ll)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Jo)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ko)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$o)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jo)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qo)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===el)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===il)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===al)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ol)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ll)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Qr||r===cl||r===hl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Qr)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uh||r===ul||r===dl||r===fl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Qr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ul)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ei?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ja=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ut=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jm={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,y=.005;c.inputState.pinching&&f>g+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ka=class extends gn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,g=null,y=null,M=t.getContextAttributes(),m=null,p=null,C=[],S=[],I=new Ee,V=null,B=new Ht;B.layers.enable(1),B.viewport=new St;let O=new Ht;O.layers.enable(2),O.viewport=new St;let ee=[B,O],E=new Ja;E.layers.enable(1),E.layers.enable(2);let L=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let U=C[ie];return U===void 0&&(U=new is,C[ie]=U),U.getTargetRaySpace()},this.getControllerGrip=function(ie){let U=C[ie];return U===void 0&&(U=new is,C[ie]=U),U.getGripSpace()},this.getHand=function(ie){let U=C[ie];return U===void 0&&(U=new is,C[ie]=U),U.getHandSpace()};function te(ie){let U=S.indexOf(ie.inputSource);if(U===-1)return;let ye=C[U];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,c||o),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ve(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ve),s.removeEventListener("inputsourceschange",k);for(let ie=0;ie<C.length;ie++){let U=S[ie];U!==null&&(S[ie]=null,C[ie].disconnect(U))}L=null,K=null,e.setRenderTarget(m),g=null,f=null,d=null,s=null,p=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ve),s.addEventListener("inputsourceschange",k),M.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let U={antialias:s.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,U),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),p=new Rn(g.framebufferWidth,g.framebufferHeight,{format:hn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil})}else{let U=null,ye=null,Fe=null;M.depth&&(Fe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,U=M.stencil?zi:ti,ye=M.stencil?ei:Bn);let Ue={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ue),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Rn(f.textureWidth,f.textureHeight,{format:hn,type:Vn,depthTexture:new vr(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0});let We=e.properties.get(p);We.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(ie){for(let U=0;U<ie.removed.length;U++){let ye=ie.removed[U],Fe=S.indexOf(ye);Fe>=0&&(S[Fe]=null,C[Fe].disconnect(ye))}for(let U=0;U<ie.added.length;U++){let ye=ie.added[U],Fe=S.indexOf(ye);if(Fe===-1){for(let We=0;We<C.length;We++)if(We>=S.length){S.push(ye),Fe=We;break}else if(S[We]===null){S[We]=ye,Fe=We;break}if(Fe===-1)break}let Ue=C[Fe];Ue&&Ue.connect(ye)}}let Z=new F,$=new F;function le(ie,U,ye){Z.setFromMatrixPosition(U.matrixWorld),$.setFromMatrixPosition(ye.matrixWorld);let Fe=Z.distanceTo($),Ue=U.projectionMatrix.elements,We=ye.projectionMatrix.elements,je=Ue[14]/(Ue[10]-1),ze=Ue[14]/(Ue[10]+1),$e=(Ue[9]+1)/Ue[5],z=(Ue[9]-1)/Ue[5],Me=(Ue[8]-1)/Ue[0],oe=(We[8]+1)/We[0],_e=je*Me,ae=je*oe,Ie=Fe/(-Me+oe),De=Ie*-Me;U.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(De),ie.translateZ(Ie),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();let T=je+Ie,b=ze+Ie,Y=_e-De,xe=ae+(Fe-De),ue=$e*ze/b*T,de=z*ze/b*T;ie.projectionMatrix.makePerspective(Y,xe,ue,de,T,b),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function re(ie,U){U===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(U.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;E.near=O.near=B.near=ie.near,E.far=O.far=B.far=ie.far,(L!==E.near||K!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,K=E.far);let U=ie.parent,ye=E.cameras;re(E,U);for(let Fe=0;Fe<ye.length;Fe++)re(ye[Fe],U);ye.length===2?le(E,B,O):E.projectionMatrix.copy(B.projectionMatrix),ne(ie,E,U)};function ne(ie,U,ye){ye===null?ie.matrix.copy(U.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(U.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(U.projectionMatrix),ie.projectionMatrixInverse.copy(U.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=hs*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)};let pe=null;function he(ie,U){if(h=U.getViewerPose(c||o),y=U,h!==null){let ye=h.views;g!==null&&(e.setRenderTargetFramebuffer(p,g.framebuffer),e.setRenderTarget(p));let Fe=!1;ye.length!==E.cameras.length&&(E.cameras.length=0,Fe=!0);for(let Ue=0;Ue<ye.length;Ue++){let We=ye[Ue],je=null;if(g!==null)je=g.getViewport(We);else{let $e=d.getViewSubImage(f,We);je=$e.viewport,Ue===0&&(e.setRenderTargetTextures(p,$e.colorTexture,f.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(p))}let ze=ee[Ue];ze===void 0&&(ze=new Ht,ze.layers.enable(Ue),ze.viewport=new St,ee[Ue]=ze),ze.matrix.fromArray(We.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(We.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(je.x,je.y,je.width,je.height),Ue===0&&(E.matrix.copy(ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Fe===!0&&E.cameras.push(ze)}}for(let ye=0;ye<C.length;ye++){let Fe=S[ye],Ue=C[ye];Fe!==null&&Ue!==void 0&&Ue.update(Fe,U,c||o)}pe&&pe(ie,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),y=null}let Te=new Uc;Te.setAnimationLoop(he),this.setAnimationLoop=function(ie){pe=ie},this.dispose=function(){}}};function Km(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,S,I){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&g(m,p,I)):p.isMeshMatcapMaterial?(r(m,p),y(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p).envMap;if(C&&(m.envMap.value=C,m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let S=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*S,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $m(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,S){let I=S.program;n.uniformBlockBinding(C,I)}function c(C,S){let I=s[C.id];I===void 0&&(y(C),I=h(C),s[C.id]=I,C.addEventListener("dispose",m));let V=S.program;n.updateUBOMapping(C,V);let B=e.render.frame;r[C.id]!==B&&(f(C),r[C.id]=B)}function h(C){let S=d();C.__bindingPointIndex=S;let I=i.createBuffer(),V=C.__size,B=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,V,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,I),I}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let S=s[C.id],I=C.uniforms,V=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let B=0,O=I.length;B<O;B++){let ee=Array.isArray(I[B])?I[B]:[I[B]];for(let E=0,L=ee.length;E<L;E++){let K=ee[E];if(g(K,B,E,V)===!0){let te=K.__offset,ve=Array.isArray(K.value)?K.value:[K.value],k=0;for(let Z=0;Z<ve.length;Z++){let $=ve[Z],le=M($);typeof $=="number"||typeof $=="boolean"?(K.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,te+k,K.__data)):$.isMatrix3?(K.__data[0]=$.elements[0],K.__data[1]=$.elements[1],K.__data[2]=$.elements[2],K.__data[3]=0,K.__data[4]=$.elements[3],K.__data[5]=$.elements[4],K.__data[6]=$.elements[5],K.__data[7]=0,K.__data[8]=$.elements[6],K.__data[9]=$.elements[7],K.__data[10]=$.elements[8],K.__data[11]=0):($.toArray(K.__data,k),k+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,K.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(C,S,I,V){let B=C.value,O=S+"_"+I;if(V[O]===void 0)return typeof B=="number"||typeof B=="boolean"?V[O]=B:V[O]=B.clone(),!0;{let ee=V[O];if(typeof B=="number"||typeof B=="boolean"){if(ee!==B)return V[O]=B,!0}else if(ee.equals(B)===!1)return ee.copy(B),!0}return!1}function y(C){let S=C.uniforms,I=0,V=16;for(let O=0,ee=S.length;O<ee;O++){let E=Array.isArray(S[O])?S[O]:[S[O]];for(let L=0,K=E.length;L<K;L++){let te=E[L],ve=Array.isArray(te.value)?te.value:[te.value];for(let k=0,Z=ve.length;k<Z;k++){let $=ve[k],le=M($),re=I%V;re!==0&&V-re<le.boundary&&(I+=V-re),te.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=I,I+=le.storage}}}let B=I%V;return B>0&&(I+=V-B),C.__size=I,C.__cache={},this}function M(C){let S={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(S.boundary=4,S.storage=4):C.isVector2?(S.boundary=8,S.storage=8):C.isVector3||C.isColor?(S.boundary=16,S.storage=12):C.isVector4?(S.boundary=16,S.storage=16):C.isMatrix3?(S.boundary=48,S.storage=48):C.isMatrix4?(S.boundary=64,S.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),S}function m(C){let S=C.target;S.removeEventListener("dispose",m);let I=o.indexOf(S.__bindingPointIndex);o.splice(I,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var fs=class{constructor(e={}){let{canvas:t=ru(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let g=new Uint32Array(4),y=new Int32Array(4),M=null,m=null,p=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;let S=this,I=!1,V=0,B=0,O=null,ee=-1,E=null,L=new St,K=new St,te=null,ve=new rt(0),k=0,Z=t.width,$=t.height,le=1,re=null,ne=null,pe=new St(0,0,Z,$),he=new St(0,0,Z,$),Te=!1,ie=new ds,U=!1,ye=!1,Fe=null,Ue=new At,We=new Ee,je=new F,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return O===null?le:1}let z=n;function Me(u,v){for(let _=0;_<u.length;_++){let R=u[_],A=t.getContext(R,v);if(A!==null)return A}return null}try{let u={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",be,!1),z===null){let v=["webgl2","webgl","experimental-webgl"];if(S.isWebGL1Renderer===!0&&v.shift(),z=Me(v,u),z===null)throw Me(v)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let oe,_e,ae,Ie,De,T,b,Y,xe,ue,de,He,Pe,Be,qe,tt,me,at,N,ge,Re,Se,ke,ot;function ct(){oe=new gp(z),_e=new hp(z,oe,e),oe.init(_e),Se=new Zm(z,oe,_e),ae=new qm(z,oe,_e),Ie=new yp(z),De=new Um,T=new Ym(z,oe,ae,De,_e,Se,Ie),b=new dp(S),Y=new mp(S),xe=new Tu(z,_e),ke=new lp(z,oe,xe,_e),ue=new _p(z,xe,Ie,ke),de=new Ep(z,ue,xe,Ie),N=new Sp(z,_e,T),tt=new up(De),He=new Dm(S,b,Y,oe,_e,ke,tt),Pe=new Km(S,De),Be=new Om,qe=new Vm(oe,_e),at=new op(S,b,Y,ae,de,f,l),me=new Xm(S,de,_e),ot=new $m(z,Ie,_e,ae),ge=new cp(z,oe,Ie,_e),Re=new xp(z,oe,Ie,_e),Ie.programs=He.programs,S.capabilities=_e,S.extensions=oe,S.properties=De,S.renderLists=Be,S.shadowMap=me,S.state=ae,S.info=Ie}ct();let Qe=new Ka(S,z);this.xr=Qe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let u=oe.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){let u=oe.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(u){u!==void 0&&(le=u,this.setSize(Z,$,!1))},this.getSize=function(u){return u.set(Z,$)},this.setSize=function(u,v,_=!0){if(Qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=u,$=v,t.width=Math.floor(u*le),t.height=Math.floor(v*le),_===!0&&(t.style.width=u+"px",t.style.height=v+"px"),this.setViewport(0,0,u,v)},this.getDrawingBufferSize=function(u){return u.set(Z*le,$*le).floor()},this.setDrawingBufferSize=function(u,v,_){Z=u,$=v,le=_,t.width=Math.floor(u*_),t.height=Math.floor(v*_),this.setViewport(0,0,u,v)},this.getCurrentViewport=function(u){return u.copy(L)},this.getViewport=function(u){return u.copy(pe)},this.setViewport=function(u,v,_,R){u.isVector4?pe.set(u.x,u.y,u.z,u.w):pe.set(u,v,_,R),ae.viewport(L.copy(pe).multiplyScalar(le).floor())},this.getScissor=function(u){return u.copy(he)},this.setScissor=function(u,v,_,R){u.isVector4?he.set(u.x,u.y,u.z,u.w):he.set(u,v,_,R),ae.scissor(K.copy(he).multiplyScalar(le).floor())},this.getScissorTest=function(){return Te},this.setScissorTest=function(u){ae.setScissorTest(Te=u)},this.setOpaqueSort=function(u){re=u},this.setTransparentSort=function(u){ne=u},this.getClearColor=function(u){return u.copy(at.getClearColor())},this.setClearColor=function(){at.setClearColor.apply(at,arguments)},this.getClearAlpha=function(){return at.getClearAlpha()},this.setClearAlpha=function(){at.setClearAlpha.apply(at,arguments)},this.clear=function(u=!0,v=!0,_=!0){let R=0;if(u){let A=!1;if(O!==null){let D=O.texture.format;A=D===wc||D===bc||D===Ec}if(A){let D=O.texture.type,W=D===Vn||D===Bn||D===bo||D===ei||D===Mc||D===Sc,q=at.getClearColor(),X=at.getClearAlpha(),j=q.r,Q=q.g,G=q.b;W?(g[0]=j,g[1]=Q,g[2]=G,g[3]=X,z.clearBufferuiv(z.COLOR,0,g)):(y[0]=j,y[1]=Q,y[2]=G,y[3]=X,z.clearBufferiv(z.COLOR,0,y))}else R|=z.COLOR_BUFFER_BIT}v&&(R|=z.DEPTH_BUFFER_BIT),_&&(R|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Be.dispose(),qe.dispose(),De.dispose(),b.dispose(),Y.dispose(),de.dispose(),ke.dispose(),ot.dispose(),He.dispose(),Qe.dispose(),Qe.removeEventListener("sessionstart",Lt),Qe.removeEventListener("sessionend",mt),Fe&&(Fe.dispose(),Fe=null),Ft.stop()};function we(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let u=Ie.autoReset,v=me.enabled,_=me.autoUpdate,R=me.needsUpdate,A=me.type;ct(),Ie.autoReset=u,me.enabled=v,me.autoUpdate=_,me.needsUpdate=R,me.type=A}function be(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Ae(u){let v=u.target;v.removeEventListener("dispose",Ae),Ye(v)}function Ye(u){Ge(u),De.remove(u)}function Ge(u){let v=De.get(u).programs;v!==void 0&&(v.forEach(function(_){He.releaseProgram(_)}),u.isShaderMaterial&&He.releaseShaderCache(u))}this.renderBufferDirect=function(u,v,_,R,A,D){v===null&&(v=ze);let W=A.isMesh&&A.matrixWorld.determinant()<0,q=x(u,v,_,R,A);ae.setMaterial(R,W);let X=_.index,j=1;if(R.wireframe===!0){if(X=ue.getWireframeAttribute(_),X===void 0)return;j=2}let Q=_.drawRange,G=_.attributes.position,J=Q.start*j,se=(Q.start+Q.count)*j;D!==null&&(J=Math.max(J,D.start*j),se=Math.min(se,(D.start+D.count)*j)),X!==null?(J=Math.max(J,0),se=Math.min(se,X.count)):G!=null&&(J=Math.max(J,0),se=Math.min(se,G.count));let fe=se-J;if(fe<0||fe===1/0)return;ke.setup(A,R,q,_,X);let Oe,Le=ge;if(X!==null&&(Oe=xe.get(X),Le=Re,Le.setIndex(Oe)),A.isMesh)R.wireframe===!0?(ae.setLineWidth(R.wireframeLinewidth*$e()),Le.setMode(z.LINES)):Le.setMode(z.TRIANGLES);else if(A.isLine){let ce=R.linewidth;ce===void 0&&(ce=1),ae.setLineWidth(ce*$e()),A.isLineSegments?Le.setMode(z.LINES):A.isLineLoop?Le.setMode(z.LINE_LOOP):Le.setMode(z.LINE_STRIP)}else A.isPoints?Le.setMode(z.POINTS):A.isSprite&&Le.setMode(z.TRIANGLES);if(A.isBatchedMesh)Le.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else if(A.isInstancedMesh)Le.renderInstances(J,fe,A.count);else if(_.isInstancedBufferGeometry){let ce=_._maxInstanceCount!==void 0?_._maxInstanceCount:1/0,et=Math.min(_.instanceCount,ce);Le.renderInstances(J,fe,et)}else Le.render(J,fe)};function dt(u,v,_){u.transparent===!0&&u.side===wn&&u.forceSinglePass===!1?(u.side=kt,u.needsUpdate=!0,ui(u,v,_),u.side=Gn,u.needsUpdate=!0,ui(u,v,_),u.side=wn):ui(u,v,_)}this.compile=function(u,v,_=null){_===null&&(_=u),m=qe.get(_),m.init(),C.push(m),_.traverseVisible(function(A){A.isLight&&A.layers.test(v.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),u!==_&&u.traverseVisible(function(A){A.isLight&&A.layers.test(v.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),m.setupLights(S._useLegacyLights);let R=new Set;return u.traverse(function(A){let D=A.material;if(D)if(Array.isArray(D))for(let W=0;W<D.length;W++){let q=D[W];dt(q,_,A),R.add(q)}else dt(D,_,A),R.add(D)}),C.pop(),m=null,R},this.compileAsync=function(u,v,_=null){let R=this.compile(u,v,_);return new Promise(A=>{function D(){if(R.forEach(function(W){De.get(W).currentProgram.isReady()&&R.delete(W)}),R.size===0){A(u);return}setTimeout(D,10)}oe.get("KHR_parallel_shader_compile")!==null?D():setTimeout(D,10)})};let ft=null;function Et(u){ft&&ft(u)}function Lt(){Ft.stop()}function mt(){Ft.start()}let Ft=new Uc;Ft.setAnimationLoop(Et),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(u){ft=u,Qe.setAnimationLoop(u),u===null?Ft.stop():Ft.start()},Qe.addEventListener("sessionstart",Lt),Qe.addEventListener("sessionend",mt),this.render=function(u,v){if(v!==void 0&&v.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(v),v=Qe.getCamera()),u.isScene===!0&&u.onBeforeRender(S,u,v,O),m=qe.get(u,C.length),m.init(),C.push(m),Ue.multiplyMatrices(v.projectionMatrix,v.matrixWorldInverse),ie.setFromProjectionMatrix(Ue),ye=this.localClippingEnabled,U=tt.init(this.clippingPlanes,ye),M=Be.get(u,p.length),M.init(),p.push(M),Gt(u,v,0,S.sortObjects),M.finish(),S.sortObjects===!0&&M.sort(re,ne),this.info.render.frame++,U===!0&&tt.beginShadows();let _=m.state.shadowsArray;if(me.render(_,u,v),U===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),at.render(M,u),m.setupLights(S._useLegacyLights),v.isArrayCamera){let R=v.cameras;for(let A=0,D=R.length;A<D;A++){let W=R[A];Wn(M,u,W,W.viewport)}}else Wn(M,u,v);O!==null&&(T.updateMultisampleRenderTarget(O),T.updateRenderTargetMipmap(O)),u.isScene===!0&&u.onAfterRender(S,u,v),ke.resetDefaultState(),ee=-1,E=null,C.pop(),C.length>0?m=C[C.length-1]:m=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function Gt(u,v,_,R){if(u.visible===!1)return;if(u.layers.test(v.layers)){if(u.isGroup)_=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(v);else if(u.isLight)m.pushLight(u),u.castShadow&&m.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||ie.intersectsSprite(u)){R&&je.setFromMatrixPosition(u.matrixWorld).applyMatrix4(Ue);let W=de.update(u),q=u.material;q.visible&&M.push(u,W,q,_,je.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||ie.intersectsObject(u))){let W=de.update(u),q=u.material;if(R&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),je.copy(u.boundingSphere.center)):(W.boundingSphere===null&&W.computeBoundingSphere(),je.copy(W.boundingSphere.center)),je.applyMatrix4(u.matrixWorld).applyMatrix4(Ue)),Array.isArray(q)){let X=W.groups;for(let j=0,Q=X.length;j<Q;j++){let G=X[j],J=q[G.materialIndex];J&&J.visible&&M.push(u,W,J,_,je.z,G)}}else q.visible&&M.push(u,W,q,_,je.z,null)}}let D=u.children;for(let W=0,q=D.length;W<q;W++)Gt(D[W],v,_,R)}function Wn(u,v,_,R){let A=u.opaque,D=u.transmissive,W=u.transparent;m.setupLightsView(_),U===!0&&tt.setGlobalState(S.clippingPlanes,_),D.length>0&&Yr(A,D,v,_),R&&ae.viewport(L.copy(R)),A.length>0&&Xn(A,v,_),D.length>0&&Xn(D,v,_),W.length>0&&Xn(W,v,_),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function Yr(u,v,_,R){if((_.isScene===!0?_.overrideMaterial:null)!==null)return;let D=_e.isWebGL2;Fe===null&&(Fe=new Rn(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?cs:Vn,minFilter:ls,samples:D?4:0})),S.getDrawingBufferSize(We),D?Fe.setSize(We.x,We.y):Fe.setSize(cr(We.x),cr(We.y));let W=S.getRenderTarget();S.setRenderTarget(Fe),S.getClearColor(ve),k=S.getClearAlpha(),k<1&&S.setClearColor(16777215,.5),S.clear();let q=S.toneMapping;S.toneMapping=kn,Xn(u,_,R),T.updateMultisampleRenderTarget(Fe),T.updateRenderTargetMipmap(Fe);let X=!1;for(let j=0,Q=v.length;j<Q;j++){let G=v[j],J=G.object,se=G.geometry,fe=G.material,Oe=G.group;if(fe.side===wn&&J.layers.test(R.layers)){let Le=fe.side;fe.side=kt,fe.needsUpdate=!0,wt(J,_,R,se,fe,Oe),fe.side=Le,fe.needsUpdate=!0,X=!0}}X===!0&&(T.updateMultisampleRenderTarget(Fe),T.updateRenderTargetMipmap(Fe)),S.setRenderTarget(W),S.setClearColor(ve,k),S.toneMapping=q}function Xn(u,v,_){let R=v.isScene===!0?v.overrideMaterial:null;for(let A=0,D=u.length;A<D;A++){let W=u[A],q=W.object,X=W.geometry,j=R===null?W.material:R,Q=W.group;q.layers.test(_.layers)&&wt(q,v,_,X,j,Q)}}function wt(u,v,_,R,A,D){u.onBeforeRender(S,v,_,R,A,D),u.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),A.onBeforeRender(S,v,_,R,u,D),A.transparent===!0&&A.side===wn&&A.forceSinglePass===!1?(A.side=kt,A.needsUpdate=!0,S.renderBufferDirect(_,v,R,A,u,D),A.side=Gn,A.needsUpdate=!0,S.renderBufferDirect(_,v,R,A,u,D),A.side=wn):S.renderBufferDirect(_,v,R,A,u,D),u.onAfterRender(S,v,_,R,A,D)}function ui(u,v,_){v.isScene!==!0&&(v=ze);let R=De.get(u),A=m.state.lights,D=m.state.shadowsArray,W=A.state.version,q=He.getParameters(u,A.state,D,v,_),X=He.getProgramCacheKey(q),j=R.programs;R.environment=u.isMeshStandardMaterial?v.environment:null,R.fog=v.fog,R.envMap=(u.isMeshStandardMaterial?Y:b).get(u.envMap||R.environment),j===void 0&&(u.addEventListener("dispose",Ae),j=new Map,R.programs=j);let Q=j.get(X);if(Q!==void 0){if(R.currentProgram===Q&&R.lightsStateVersion===W)return Ji(u,q),Q}else q.uniforms=He.getUniforms(u),u.onBuild(_,q,S),u.onBeforeCompile(q,S),Q=He.acquireProgram(q,X),j.set(X,Q),R.uniforms=q.uniforms;let G=R.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(G.clippingPlanes=tt.uniform),Ji(u,q),R.needsLights=P(u),R.lightsStateVersion=W,R.needsLights&&(G.ambientLightColor.value=A.state.ambient,G.lightProbe.value=A.state.probe,G.directionalLights.value=A.state.directional,G.directionalLightShadows.value=A.state.directionalShadow,G.spotLights.value=A.state.spot,G.spotLightShadows.value=A.state.spotShadow,G.rectAreaLights.value=A.state.rectArea,G.ltc_1.value=A.state.rectAreaLTC1,G.ltc_2.value=A.state.rectAreaLTC2,G.pointLights.value=A.state.point,G.pointLightShadows.value=A.state.pointShadow,G.hemisphereLights.value=A.state.hemi,G.directionalShadowMap.value=A.state.directionalShadowMap,G.directionalShadowMatrix.value=A.state.directionalShadowMatrix,G.spotShadowMap.value=A.state.spotShadowMap,G.spotLightMatrix.value=A.state.spotLightMatrix,G.spotLightMap.value=A.state.spotLightMap,G.pointShadowMap.value=A.state.pointShadowMap,G.pointShadowMatrix.value=A.state.pointShadowMatrix),R.currentProgram=Q,R.uniformsList=null,Q}function Zi(u){if(u.uniformsList===null){let v=u.currentProgram.getUniforms();u.uniformsList=Oi.seqWithValue(v.seq,u.uniforms)}return u.uniformsList}function Ji(u,v){let _=De.get(u);_.outputColorSpace=v.outputColorSpace,_.batching=v.batching,_.instancing=v.instancing,_.instancingColor=v.instancingColor,_.skinning=v.skinning,_.morphTargets=v.morphTargets,_.morphNormals=v.morphNormals,_.morphColors=v.morphColors,_.morphTargetsCount=v.morphTargetsCount,_.numClippingPlanes=v.numClippingPlanes,_.numIntersection=v.numClipIntersection,_.vertexAlphas=v.vertexAlphas,_.vertexTangents=v.vertexTangents,_.toneMapping=v.toneMapping}function x(u,v,_,R,A){v.isScene!==!0&&(v=ze),T.resetTextureUnits();let D=v.fog,W=R.isMeshStandardMaterial?v.environment:null,q=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:An,X=(R.isMeshStandardMaterial?Y:b).get(R.envMap||W),j=R.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,Q=!!_.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),G=!!_.morphAttributes.position,J=!!_.morphAttributes.normal,se=!!_.morphAttributes.color,fe=kn;R.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(fe=S.toneMapping);let Oe=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,Le=Oe!==void 0?Oe.length:0,ce=De.get(R),et=m.state.lights;if(U===!0&&(ye===!0||u!==E)){let Wt=u===E&&R.id===ee;tt.setState(R,u,Wt)}let Ne=!1;R.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==et.state.version||ce.outputColorSpace!==q||A.isBatchedMesh&&ce.batching===!1||!A.isBatchedMesh&&ce.batching===!0||A.isInstancedMesh&&ce.instancing===!1||!A.isInstancedMesh&&ce.instancing===!0||A.isSkinnedMesh&&ce.skinning===!1||!A.isSkinnedMesh&&ce.skinning===!0||A.isInstancedMesh&&ce.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&ce.instancingColor===!1&&A.instanceColor!==null||ce.envMap!==X||R.fog===!0&&ce.fog!==D||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==tt.numPlanes||ce.numIntersection!==tt.numIntersection)||ce.vertexAlphas!==j||ce.vertexTangents!==Q||ce.morphTargets!==G||ce.morphNormals!==J||ce.morphColors!==se||ce.toneMapping!==fe||_e.isWebGL2===!0&&ce.morphTargetsCount!==Le)&&(Ne=!0):(Ne=!0,ce.__version=R.version);let st=ce.currentProgram;Ne===!0&&(st=ui(R,v,A));let Ke=!1,Xe=!1,nt=!1,it=st.getUniforms(),gt=ce.uniforms;if(ae.useProgram(st.program)&&(Ke=!0,Xe=!0,nt=!0),R.id!==ee&&(ee=R.id,Xe=!0),Ke||E!==u){it.setValue(z,"projectionMatrix",u.projectionMatrix),it.setValue(z,"viewMatrix",u.matrixWorldInverse);let Wt=it.map.cameraPosition;Wt!==void 0&&Wt.setValue(z,je.setFromMatrixPosition(u.matrixWorld)),_e.logarithmicDepthBuffer&&it.setValue(z,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&it.setValue(z,"isOrthographic",u.isOrthographicCamera===!0),E!==u&&(E=u,Xe=!0,nt=!0)}if(A.isSkinnedMesh){it.setOptional(z,A,"bindMatrix"),it.setOptional(z,A,"bindMatrixInverse");let Wt=A.skeleton;Wt&&(_e.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),it.setValue(z,"boneTexture",Wt.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}A.isBatchedMesh&&(it.setOptional(z,A,"batchingTexture"),it.setValue(z,"batchingTexture",A._matricesTexture,T));let Rt=_.morphAttributes;if((Rt.position!==void 0||Rt.normal!==void 0||Rt.color!==void 0&&_e.isWebGL2===!0)&&N.update(A,_,st),(Xe||ce.receiveShadow!==A.receiveShadow)&&(ce.receiveShadow=A.receiveShadow,it.setValue(z,"receiveShadow",A.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(gt.envMap.value=X,gt.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1),Xe&&(it.setValue(z,"toneMappingExposure",S.toneMappingExposure),ce.needsLights&&w(gt,nt),D&&R.fog===!0&&Pe.refreshFogUniforms(gt,D),Pe.refreshMaterialUniforms(gt,R,le,$,Fe),Oi.upload(z,Zi(ce),gt,T)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(Oi.upload(z,Zi(ce),gt,T),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&it.setValue(z,"center",A.center),it.setValue(z,"modelViewMatrix",A.modelViewMatrix),it.setValue(z,"normalMatrix",A.normalMatrix),it.setValue(z,"modelMatrix",A.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){let Wt=R.uniformsGroups;for(let di=0,ws=Wt.length;di<ws;di++)if(_e.isWebGL2){let No=Wt[di];ot.update(No,st),ot.bind(No,st)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return st}function w(u,v){u.ambientLightColor.needsUpdate=v,u.lightProbe.needsUpdate=v,u.directionalLights.needsUpdate=v,u.directionalLightShadows.needsUpdate=v,u.pointLights.needsUpdate=v,u.pointLightShadows.needsUpdate=v,u.spotLights.needsUpdate=v,u.spotLightShadows.needsUpdate=v,u.rectAreaLights.needsUpdate=v,u.hemisphereLights.needsUpdate=v}function P(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(u,v,_){De.get(u.texture).__webglTexture=v,De.get(u.depthTexture).__webglTexture=_;let R=De.get(u);R.__hasExternalTextures=!0,R.__hasExternalTextures&&(R.__autoAllocateDepthBuffer=_===void 0,R.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(u,v){let _=De.get(u);_.__webglFramebuffer=v,_.__useDefaultFramebuffer=v===void 0},this.setRenderTarget=function(u,v=0,_=0){O=u,V=v,B=_;let R=!0,A=null,D=!1,W=!1;if(u){let X=De.get(u);X.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(z.FRAMEBUFFER,null),R=!1):X.__webglFramebuffer===void 0?T.setupRenderTarget(u):X.__hasExternalTextures&&T.rebindTextures(u,De.get(u.texture).__webglTexture,De.get(u.depthTexture).__webglTexture);let j=u.texture;(j.isData3DTexture||j.isDataArrayTexture||j.isCompressedArrayTexture)&&(W=!0);let Q=De.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(Q[v])?A=Q[v][_]:A=Q[v],D=!0):_e.isWebGL2&&u.samples>0&&T.useMultisampledRTT(u)===!1?A=De.get(u).__webglMultisampledFramebuffer:Array.isArray(Q)?A=Q[_]:A=Q,L.copy(u.viewport),K.copy(u.scissor),te=u.scissorTest}else L.copy(pe).multiplyScalar(le).floor(),K.copy(he).multiplyScalar(le).floor(),te=Te;if(ae.bindFramebuffer(z.FRAMEBUFFER,A)&&_e.drawBuffers&&R&&ae.drawBuffers(u,A),ae.viewport(L),ae.scissor(K),ae.setScissorTest(te),D){let X=De.get(u.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+v,X.__webglTexture,_)}else if(W){let X=De.get(u.texture),j=v||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,X.__webglTexture,_||0,j)}ee=-1},this.readRenderTargetPixels=function(u,v,_,R,A,D,W){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=De.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&W!==void 0&&(q=q[W]),q){ae.bindFramebuffer(z.FRAMEBUFFER,q);try{let X=u.texture,j=X.format,Q=X.type;if(j!==hn&&Se.convert(j)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let G=Q===cs&&(oe.has("EXT_color_buffer_half_float")||_e.isWebGL2&&oe.has("EXT_color_buffer_float"));if(Q!==Vn&&Se.convert(Q)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Q===zn&&(_e.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!G){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}v>=0&&v<=u.width-R&&_>=0&&_<=u.height-A&&z.readPixels(v,_,R,A,Se.convert(j),Se.convert(Q),D)}finally{let X=O!==null?De.get(O).__webglFramebuffer:null;ae.bindFramebuffer(z.FRAMEBUFFER,X)}}},this.copyFramebufferToTexture=function(u,v,_=0){let R=Math.pow(2,-_),A=Math.floor(v.image.width*R),D=Math.floor(v.image.height*R);T.setTexture2D(v,0),z.copyTexSubImage2D(z.TEXTURE_2D,_,0,0,u.x,u.y,A,D),ae.unbindTexture()},this.copyTextureToTexture=function(u,v,_,R=0){let A=v.image.width,D=v.image.height,W=Se.convert(_.format),q=Se.convert(_.type);T.setTexture2D(_,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,_.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,_.unpackAlignment),v.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,R,u.x,u.y,A,D,W,q,v.image.data):v.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,R,u.x,u.y,v.mipmaps[0].width,v.mipmaps[0].height,W,v.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,R,u.x,u.y,W,q,v.image),R===0&&_.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(u,v,_,R,A=0){if(S.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let D=u.max.x-u.min.x+1,W=u.max.y-u.min.y+1,q=u.max.z-u.min.z+1,X=Se.convert(R.format),j=Se.convert(R.type),Q;if(R.isData3DTexture)T.setTexture3D(R,0),Q=z.TEXTURE_3D;else if(R.isDataArrayTexture||R.isCompressedArrayTexture)T.setTexture2DArray(R,0),Q=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,R.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,R.unpackAlignment);let G=z.getParameter(z.UNPACK_ROW_LENGTH),J=z.getParameter(z.UNPACK_IMAGE_HEIGHT),se=z.getParameter(z.UNPACK_SKIP_PIXELS),fe=z.getParameter(z.UNPACK_SKIP_ROWS),Oe=z.getParameter(z.UNPACK_SKIP_IMAGES),Le=_.isCompressedTexture?_.mipmaps[A]:_.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Le.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,u.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,u.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,u.min.z),_.isDataTexture||_.isData3DTexture?z.texSubImage3D(Q,A,v.x,v.y,v.z,D,W,q,X,j,Le.data):_.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Q,A,v.x,v.y,v.z,D,W,q,X,Le.data)):z.texSubImage3D(Q,A,v.x,v.y,v.z,D,W,q,X,j,Le),z.pixelStorei(z.UNPACK_ROW_LENGTH,G),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,J),z.pixelStorei(z.UNPACK_SKIP_PIXELS,se),z.pixelStorei(z.UNPACK_SKIP_ROWS,fe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Oe),A===0&&R.generateMipmaps&&z.generateMipmap(Q),ae.unbindTexture()},this.initTexture=function(u){u.isCubeTexture?T.setTextureCube(u,0):u.isData3DTexture?T.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?T.setTexture2DArray(u,0):T.setTexture2D(u,0),ae.unbindTexture()},this.resetState=function(){V=0,B=0,O=null,ae.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===wo?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===zr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?ni:Ac}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ni?Tt:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},$a=class extends fs{};$a.prototype.isWebGL1Renderer=!0;var Gi=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ps=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new F,rc=new F,ac=new At,Ea=new si,Zs=new Hi,ja=class extends Vt{constructor(e=new Jt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sc.fromBufferAttribute(t,s-1),rc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sc.distanceTo(rc);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zs.copy(n.boundingSphere),Zs.applyMatrix4(s),Zs.radius+=r,e.ray.intersectsSphere(Zs)===!1)return;ac.copy(s).invert(),Ea.copy(e.ray).applyMatrix4(ac);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,d=new F,f=new F,g=this.isLineSegments?2:1,y=n.index,m=n.attributes.position;if(y!==null){let p=Math.max(0,o.start),C=Math.min(y.count,o.start+o.count);for(let S=p,I=C-1;S<I;S+=g){let V=y.getX(S),B=y.getX(S+1);if(c.fromBufferAttribute(m,V),h.fromBufferAttribute(m,B),Ea.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let ee=e.ray.origin.distanceTo(f);ee<e.near||ee>e.far||t.push({distance:ee,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),C=Math.min(m.count,o.start+o.count);for(let S=p,I=C-1;S<I;S+=g){if(c.fromBufferAttribute(m,S),h.fromBufferAttribute(m,S+1),Ea.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(f);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:S,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},oc=new F,lc=new F,Mr=class extends ja{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)oc.fromBufferAttribute(t,s),lc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oc.distanceTo(lc);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ms=class extends sn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,g=(o-h)/f;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ee:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],o=[],a=new F,l=new At;for(let g=0;g<=e;g++){let y=g/e;s[g]=this.getTangentAt(y,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let y=Math.acos(Ot(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,y))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(Ot(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],g*y)),o[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gs=class extends rn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new Ee,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*h-g*d+this.aX,c=f*d+g*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qa=class extends gs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ro(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,g*=h,s(o,a,f,g)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Js=new F,ba=new Ro,wa=new Ro,Ta=new Ro,eo=class extends rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Js.subVectors(s[0],s[1]).add(s[0]),c=Js);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Js.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Js),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(d),g),M=Math.pow(d.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(h),g);M<1e-4&&(M=1),y<1e-4&&(y=M),m<1e-4&&(m=M),ba.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,y,M,m),wa.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,y,M,m),Ta.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,y,M,m)}else this.curveType==="catmullrom"&&(ba.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),wa.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Ta.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(ba.calc(l),wa.calc(l),Ta.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function jm(i,e){let t=1-i;return t*t*e}function Qm(i,e){return 2*(1-i)*i*e}function eg(i,e){return i*i*e}function ss(i,e,t,n){return jm(i,e)+Qm(i,t)+eg(i,n)}function tg(i,e){let t=1-i;return t*t*t*e}function ng(i,e){let t=1-i;return 3*t*t*i*e}function ig(i,e){return 3*(1-i)*i*i*e}function sg(i,e){return i*i*i*e}function rs(i,e,t,n,s){return tg(i,e)+ng(i,t)+ig(i,n)+sg(i,s)}var Sr=class extends rn{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,s.x,r.x,o.x,a.x),rs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},to=class extends rn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,s.x,r.x,o.x,a.x),rs(e,s.y,r.y,o.y,a.y),rs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Er=class extends rn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},no=class extends rn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},br=class extends rn{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(e,s.x,r.x,o.x),ss(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends rn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(e,s.x,r.x,o.x),ss(e,s.y,r.y,o.y),ss(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wr=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(cc(a,l.x,c.x,h.x,d.x),cc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},so=Object.freeze({__proto__:null,ArcCurve:Qa,CatmullRomCurve3:eo,CubicBezierCurve:Sr,CubicBezierCurve3:to,EllipseCurve:gs,LineCurve:Er,LineCurve3:no,QuadraticBezierCurve:br,QuadraticBezierCurve3:io,SplineCurve:wr}),ro=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new so[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new so[s.type]().fromJSON(s))}return this}},Tr=class extends ro{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Er(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new br(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Sr(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new wr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new gs(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Ut=class i extends Jt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],g=[],y=0,M=[],m=n/2,p=0;C(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(g,2));function C(){let I=new F,V=new F,B=0,O=(t-e)/n;for(let ee=0;ee<=r;ee++){let E=[],L=ee/r,K=L*(t-e)+e;for(let te=0;te<=s;te++){let ve=te/s,k=ve*l+a,Z=Math.sin(k),$=Math.cos(k);V.x=K*Z,V.y=-L*n+m,V.z=K*$,d.push(V.x,V.y,V.z),I.set(Z,O,$).normalize(),f.push(I.x,I.y,I.z),g.push(ve,1-L),E.push(y++)}M.push(E)}for(let ee=0;ee<s;ee++)for(let E=0;E<r;E++){let L=M[E][ee],K=M[E+1][ee],te=M[E+1][ee+1],ve=M[E][ee+1];h.push(L,K,ve),h.push(K,te,ve),B+=6}c.addGroup(p,B,0),p+=B}function S(I){let V=y,B=new Ee,O=new F,ee=0,E=I===!0?e:t,L=I===!0?1:-1;for(let te=1;te<=s;te++)d.push(0,m*L,0),f.push(0,L,0),g.push(.5,.5),y++;let K=y;for(let te=0;te<=s;te++){let k=te/s*l+a,Z=Math.cos(k),$=Math.sin(k);O.x=E*$,O.y=m*L,O.z=E*Z,d.push(O.x,O.y,O.z),f.push(0,L,0),B.x=Z*.5+.5,B.y=$*.5*L+.5,g.push(B.x,B.y),y++}for(let te=0;te<s;te++){let ve=V+te,k=K+te;I===!0?h.push(k,k+1,ve):h.push(k+1,k,ve),ee+=3}c.addGroup(p,ee,I===!0?1:2),p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ar=class i extends Ut{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Ks=new F,$s=new F,Aa=new F,js=new Qn,Rr=class extends Jt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ui*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},g=[];for(let y=0;y<l;y+=3){o?(c[0]=o.getX(y),c[1]=o.getX(y+1),c[2]=o.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);let{a:M,b:m,c:p}=js;if(M.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),js.getNormal(Aa),d[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let C=0;C<3;C++){let S=(C+1)%3,I=d[C],V=d[S],B=js[h[C]],O=js[h[S]],ee=`${I}_${V}`,E=`${V}_${I}`;E in f&&f[E]?(Aa.dot(f[E].normal)<=r&&(g.push(B.x,B.y,B.z),g.push(O.x,O.y,O.z)),f[E]=null):ee in f||(f[ee]={index0:c[C],index1:c[S],normal:Aa.clone()})}}for(let y in f)if(f[y]){let{index0:M,index1:m}=f[y];Ks.fromBufferAttribute(a,M),$s.fromBufferAttribute(a,m),g.push(Ks.x,Ks.y,Ks.z),g.push($s.x,$s.y,$s.z)}this.setAttribute("position",new xt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},_s=class extends Tr{constructor(e){super(e),this.uuid=hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Tr().fromJSON(s))}return this}},rg={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hc(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,f,g;if(n&&(r=hg(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let y=t;y<s;y+=t)d=i[y],f=i[y+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);g=Math.max(c-a,h-l),g=g!==0?32767/g:0}return xs(r,o,t,a,l,g,0),o}};function Hc(i,e,t,n,s){let r,o;if(s===Mg(i,e,t,n)>0)for(r=e;r<t;r+=n)o=hc(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=hc(r,i[r],i[r+1],o);return o&&kr(o,o.next)&&(vs(o),o=o.next),o}function ri(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(kr(t,t.next)||bt(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&mg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?og(i,n,s,r):ag(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),vs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=lg(ri(i),e,t),xs(i,e,t,n,s,r,2)):o===2&&cg(i,e,t,n,s,r):xs(ri(i),e,t,n,s,r,1);break}}}function ag(i){let e=i.prev,t=i,n=i.next;if(bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,g=a>l?a>c?a:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=h&&y.x<=f&&y.y>=d&&y.y<=g&&Ii(s,a,r,l,o,c,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function og(i,e,t,n){let s=i.prev,r=i,o=i.next;if(bt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,g=a<l?a<c?a:c:l<c?l:c,y=h<d?h<f?h:f:d<f?d:f,M=a>l?a>c?a:c:l>c?l:c,m=h>d?h>f?h:f:d>f?d:f,p=ao(g,y,e,t,n),C=ao(M,m,e,t,n),S=i.prevZ,I=i.nextZ;for(;S&&S.z>=p&&I&&I.z<=C;){if(S.x>=g&&S.x<=M&&S.y>=y&&S.y<=m&&S!==s&&S!==o&&Ii(a,h,l,d,c,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0||(S=S.prevZ,I.x>=g&&I.x<=M&&I.y>=y&&I.y<=m&&I!==s&&I!==o&&Ii(a,h,l,d,c,f,I.x,I.y)&&bt(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;S&&S.z>=p;){if(S.x>=g&&S.x<=M&&S.y>=y&&S.y<=m&&S!==s&&S!==o&&Ii(a,h,l,d,c,f,S.x,S.y)&&bt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;I&&I.z<=C;){if(I.x>=g&&I.x<=M&&I.y>=y&&I.y<=m&&I!==s&&I!==o&&Ii(a,h,l,d,c,f,I.x,I.y)&&bt(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0}function lg(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!kr(s,r)&&kc(s,n,n.next,r)&&ys(s,r)&&ys(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),vs(n),vs(n.next),n=i=r),n=n.next}while(n!==i);return ri(n)}function cg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xg(o,a)){let l=Vc(o,a);o=ri(o,o.next),l=ri(l,l.next),xs(o,e,t,n,s,r,0),xs(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hg(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Hc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(_g(c));for(s.sort(ug),r=0;r<s.length;r++)t=dg(s[r],t);return t}function ug(i,e){return i.x-e.x}function dg(i,e){let t=fg(i,e);if(!t)return e;let n=Vc(t,i);return ri(n,n.next),ri(t,t.next)}function fg(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ii(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),ys(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&pg(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function pg(i,e){return bt(i.prev,i,e.prev)<0&&bt(e.next,i,i.next)<0}function mg(i,e,t,n){let s=i;do s.z===0&&(s.z=ao(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gg(s)}function gg(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function ao(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _g(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ii(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function xg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yg(i,e)&&(ys(i,e)&&ys(e,i)&&vg(i,e)&&(bt(i.prev,i,e.prev)||bt(i,e.prev,e))||kr(i,e)&&bt(i.prev,i,i.next)>0&&bt(e.prev,e,e.next)>0)}function bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function kr(i,e){return i.x===e.x&&i.y===e.y}function kc(i,e,t,n){let s=er(bt(i,e,t)),r=er(bt(i,e,n)),o=er(bt(t,n,i)),a=er(bt(t,n,e));return!!(s!==r&&o!==a||s===0&&Qs(i,t,e)||r===0&&Qs(i,n,e)||o===0&&Qs(t,i,n)||a===0&&Qs(t,e,n))}function Qs(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function er(i){return i>0?1:i<0?-1:0}function yg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&kc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ys(i,e){return bt(i.prev,i,i.next)<0?bt(i,e,i.next)>=0&&bt(i,i.prev,e)>=0:bt(i,e,i.prev)<0||bt(i,i.next,e)<0}function vg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vc(i,e){let t=new oo(i.i,i.x,i.y),n=new oo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hc(i,e,t,n){let s=new oo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oo(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var as=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];uc(e),dc(n,e);let o=e.length;t.forEach(uc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,dc(n,t[l]);let a=rg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Cr=class i extends Jt{constructor(e=new _s([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:g-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Sg,S,I=!1,V,B,O,ee;p&&(S=p.getSpacedPoints(h),I=!0,f=!1,V=p.computeFrenetFrames(h,!1),B=new F,O=new F,ee=new F),f||(m=0,g=0,y=0,M=0);let E=a.extractPoints(c),L=E.shape,K=E.holes;if(!as.isClockWise(L)){L=L.reverse();for(let z=0,Me=K.length;z<Me;z++){let oe=K[z];as.isClockWise(oe)&&(K[z]=oe.reverse())}}let ve=as.triangulateShape(L,K),k=L;for(let z=0,Me=K.length;z<Me;z++){let oe=K[z];L=L.concat(oe)}function Z(z,Me,oe){return Me||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(Me,oe)}let $=L.length,le=ve.length;function re(z,Me,oe){let _e,ae,Ie,De=z.x-Me.x,T=z.y-Me.y,b=oe.x-z.x,Y=oe.y-z.y,xe=De*De+T*T,ue=De*Y-T*b;if(Math.abs(ue)>Number.EPSILON){let de=Math.sqrt(xe),He=Math.sqrt(b*b+Y*Y),Pe=Me.x-T/de,Be=Me.y+De/de,qe=oe.x-Y/He,tt=oe.y+b/He,me=((qe-Pe)*Y-(tt-Be)*b)/(De*Y-T*b);_e=Pe+De*me-z.x,ae=Be+T*me-z.y;let at=_e*_e+ae*ae;if(at<=2)return new Ee(_e,ae);Ie=Math.sqrt(at/2)}else{let de=!1;De>Number.EPSILON?b>Number.EPSILON&&(de=!0):De<-Number.EPSILON?b<-Number.EPSILON&&(de=!0):Math.sign(T)===Math.sign(Y)&&(de=!0),de?(_e=-T,ae=De,Ie=Math.sqrt(xe)):(_e=De,ae=T,Ie=Math.sqrt(xe/2))}return new Ee(_e/Ie,ae/Ie)}let ne=[];for(let z=0,Me=k.length,oe=Me-1,_e=z+1;z<Me;z++,oe++,_e++)oe===Me&&(oe=0),_e===Me&&(_e=0),ne[z]=re(k[z],k[oe],k[_e]);let pe=[],he,Te=ne.concat();for(let z=0,Me=K.length;z<Me;z++){let oe=K[z];he=[];for(let _e=0,ae=oe.length,Ie=ae-1,De=_e+1;_e<ae;_e++,Ie++,De++)Ie===ae&&(Ie=0),De===ae&&(De=0),he[_e]=re(oe[_e],oe[Ie],oe[De]);pe.push(he),Te=Te.concat(he)}for(let z=0;z<m;z++){let Me=z/m,oe=g*Math.cos(Me*Math.PI/2),_e=y*Math.sin(Me*Math.PI/2)+M;for(let ae=0,Ie=k.length;ae<Ie;ae++){let De=Z(k[ae],ne[ae],_e);Ue(De.x,De.y,-oe)}for(let ae=0,Ie=K.length;ae<Ie;ae++){let De=K[ae];he=pe[ae];for(let T=0,b=De.length;T<b;T++){let Y=Z(De[T],he[T],_e);Ue(Y.x,Y.y,-oe)}}}let ie=y+M;for(let z=0;z<$;z++){let Me=f?Z(L[z],Te[z],ie):L[z];I?(O.copy(V.normals[0]).multiplyScalar(Me.x),B.copy(V.binormals[0]).multiplyScalar(Me.y),ee.copy(S[0]).add(O).add(B),Ue(ee.x,ee.y,ee.z)):Ue(Me.x,Me.y,0)}for(let z=1;z<=h;z++)for(let Me=0;Me<$;Me++){let oe=f?Z(L[Me],Te[Me],ie):L[Me];I?(O.copy(V.normals[z]).multiplyScalar(oe.x),B.copy(V.binormals[z]).multiplyScalar(oe.y),ee.copy(S[z]).add(O).add(B),Ue(ee.x,ee.y,ee.z)):Ue(oe.x,oe.y,d/h*z)}for(let z=m-1;z>=0;z--){let Me=z/m,oe=g*Math.cos(Me*Math.PI/2),_e=y*Math.sin(Me*Math.PI/2)+M;for(let ae=0,Ie=k.length;ae<Ie;ae++){let De=Z(k[ae],ne[ae],_e);Ue(De.x,De.y,d+oe)}for(let ae=0,Ie=K.length;ae<Ie;ae++){let De=K[ae];he=pe[ae];for(let T=0,b=De.length;T<b;T++){let Y=Z(De[T],he[T],_e);I?Ue(Y.x,Y.y+S[h-1].y,S[h-1].x+oe):Ue(Y.x,Y.y,d+oe)}}}U(),ye();function U(){let z=s.length/3;if(f){let Me=0,oe=$*Me;for(let _e=0;_e<le;_e++){let ae=ve[_e];We(ae[2]+oe,ae[1]+oe,ae[0]+oe)}Me=h+m*2,oe=$*Me;for(let _e=0;_e<le;_e++){let ae=ve[_e];We(ae[0]+oe,ae[1]+oe,ae[2]+oe)}}else{for(let Me=0;Me<le;Me++){let oe=ve[Me];We(oe[2],oe[1],oe[0])}for(let Me=0;Me<le;Me++){let oe=ve[Me];We(oe[0]+$*h,oe[1]+$*h,oe[2]+$*h)}}n.addGroup(z,s.length/3-z,0)}function ye(){let z=s.length/3,Me=0;Fe(k,Me),Me+=k.length;for(let oe=0,_e=K.length;oe<_e;oe++){let ae=K[oe];Fe(ae,Me),Me+=ae.length}n.addGroup(z,s.length/3-z,1)}function Fe(z,Me){let oe=z.length;for(;--oe>=0;){let _e=oe,ae=oe-1;ae<0&&(ae=z.length-1);for(let Ie=0,De=h+m*2;Ie<De;Ie++){let T=$*Ie,b=$*(Ie+1),Y=Me+_e+T,xe=Me+ae+T,ue=Me+ae+b,de=Me+_e+b;je(Y,xe,ue,de)}}}function Ue(z,Me,oe){l.push(z),l.push(Me),l.push(oe)}function We(z,Me,oe){ze(z),ze(Me),ze(oe);let _e=s.length/3,ae=C.generateTopUV(n,s,_e-3,_e-2,_e-1);$e(ae[0]),$e(ae[1]),$e(ae[2])}function je(z,Me,oe,_e){ze(z),ze(Me),ze(_e),ze(Me),ze(oe),ze(_e);let ae=s.length/3,Ie=C.generateSideWallUV(n,s,ae-6,ae-3,ae-2,ae-1);$e(Ie[0]),$e(Ie[1]),$e(Ie[3]),$e(Ie[1]),$e(Ie[2]),$e(Ie[3])}function ze(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function $e(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Eg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new so[s.type]().fromJSON(s)),new i(n,e.options)}},Sg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ee(r,o),new Ee(a,l),new Ee(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],g=e[s*3+1],y=e[s*3+2],M=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-d),new Ee(f,1-y),new Ee(M,1-p)]:[new Ee(a,1-l),new Ee(h,1-d),new Ee(g,1-y),new Ee(m,1-p)]}};function Eg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pr=class i extends Jt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,f=(t-e)/s,g=new F,y=new Ee;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let p=r+m/n*o;g.x=d*Math.cos(p),g.y=d*Math.sin(p),l.push(g.x,g.y,g.z),c.push(0,0,1),y.x=(g.x/t+1)/2,y.y=(g.y/t+1)/2,h.push(y.x,y.y)}d+=f}for(let M=0;M<s;M++){let m=M*(n+1);for(let p=0;p<n;p++){let C=p+m,S=C,I=C+n+1,V=C+n+2,B=C+1;a.push(S,I,B),a.push(I,V,B)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Lr=class i extends Jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new F,f=new F,g=[],y=[],M=[],m=[];for(let p=0;p<=n;p++){let C=[],S=p/n,I=0;p===0&&o===0?I=.5/t:p===n&&l===Math.PI&&(I=-.5/t);for(let V=0;V<=t;V++){let B=V/t;d.x=-e*Math.cos(s+B*r)*Math.sin(o+S*a),d.y=e*Math.cos(o+S*a),d.z=e*Math.sin(s+B*r)*Math.sin(o+S*a),y.push(d.x,d.y,d.z),f.copy(d).normalize(),M.push(f.x,f.y,f.z),m.push(B+I,1-S),C.push(c++)}h.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){let S=h[p][C+1],I=h[p][C],V=h[p+1][C],B=h[p+1][C+1];(p!==0||o>0)&&g.push(S,I,B),(p!==n-1||l<Math.PI)&&g.push(I,V,B)}this.setIndex(g),this.setAttribute("position",new xt(y,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ir=class i extends Jt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,d=new F,f=new F;for(let g=0;g<=n;g++)for(let y=0;y<=s;y++){let M=y/s*r,m=g/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(M),d.y=(e+t*Math.cos(m))*Math.sin(M),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(y/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let y=1;y<=s;y++){let M=(s+1)*g+y-1,m=(s+1)*(g-1)+y-1,p=(s+1)*(g-1)+y,C=(s+1)*g+y;o.push(M,m,C),o.push(m,p,C)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Dr=class extends Cn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new rt(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Ve=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function tr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lo=class extends Wi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ml:r=e,a=2*t-n;break;case gl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ml:o=e,l=2*n-t;break;case gl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,y=(n-t)/(s-t),M=y*y,m=M*y,p=-f*m+2*f*M-f*y,C=(1+f)*m+(-1.5-2*f)*M+(-.5+f)*y+1,S=(-1-g)*m+(1.5+g)*M+.5*y,I=g*m-g*M;for(let V=0;V!==a;++V)r[V]=p*o[h+V]+C*o[c+V]+S*o[l+V]+I*o[d+V];return r}},co=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},ho=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tr(t,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tr(e.times,Array),values:tr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case sr:t=this.InterpolantFactoryMethodLinear;break;case ea:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return sr;case this.InterpolantFactoryMethodSmooth:return ea}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&bg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ea,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,g=d+n;for(let y=0;y!==n;++y){let M=t[d+y];if(M!==t[f+y]||M!==t[g+y]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let g=0;g!==n;++g)t[f+g]=t[d+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=sr;var ai=class extends fn{};ai.prototype.ValueTypeName="bool";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=ir;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends fn{};uo.prototype.ValueTypeName="color";var fo=class extends fn{};fo.prototype.ValueTypeName="number";var po=class extends Wi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)un.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ms=class extends fn{InterpolantFactoryMethodLinear(e){return new po(this.times,this.values,this.getValueSize(),e)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.DefaultInterpolation=sr;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var oi=class extends fn{};oi.prototype.ValueTypeName="string";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=ir;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends fn{};mo.prototype.ValueTypeName="vector";var go=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let g=c[d],y=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return y}return null}}},wg=new go,_o=class{constructor(e){this.manager=e!==void 0?e:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Ur=class extends Ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ra=new At,fc=new F,pc=new F,Nr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var mc=new At,es=new F,Ca=new F,xo=class extends Nr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),Ca.copy(n.position),Ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ca),n.updateMatrixWorld(),s.makeTranslation(-es.x,-es.y,-es.z),mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc)}},In=class extends Ss{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new xo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},yo=class extends Nr{constructor(){super(new yr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new yo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Co="\\[\\]\\.:\\/",Tg=new RegExp("["+Co+"]","g"),Po="[^"+Co+"]",Ag="[^"+Co.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",Po),Cg=/(WCOD+)?/.source.replace("WCOD",Ag),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Po),Lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Po),Ig=new RegExp("^"+Rg+Cg+Pg+Lg+"$"),Dg=["material","materials","bones","map"],vo=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(e){let t=Ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=vo;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);var Fr=class{constructor(e,t,n=0,s=1/0){this.ray=new si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Mo(e,this,n,t),n.sort(gc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Mo(e[s],this,n,t);return n.sort(gc),n}};function gc(i,e){return i.distance-e.distance}function Mo(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)Mo(s[r],e,t,!0)}}var Es=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Gc={type:"change"},Lo={type:"start"},Wc={type:"end"},Vr=new si,Xc=new jt,Ng=Math.cos(70*Pc.DEG2RAD),Gr=class extends gn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",de),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gc),n.update(),r=s.NONE},this.update=(function(){let N=new F,ge=new un().setFromUnitVectors(e.up,new F(0,1,0)),Re=ge.clone().invert(),Se=new F,ke=new un,ot=new F,ct=2*Math.PI;return function(we=null){let H=n.object.position;N.copy(H).sub(n.target),N.applyQuaternion(ge),a.setFromVector3(N),n.autoRotate&&r===s.NONE&&K(E(we)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let be=n.minAzimuthAngle,Ae=n.maxAzimuthAngle;isFinite(be)&&isFinite(Ae)&&(be<-Math.PI?be+=ct:be>Math.PI&&(be-=ct),Ae<-Math.PI?Ae+=ct:Ae>Math.PI&&(Ae-=ct),be<=Ae?a.theta=Math.max(be,Math.min(Ae,a.theta)):a.theta=a.theta>(be+Ae)/2?Math.max(be,a.theta):Math.min(Ae,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&B||n.object.isOrthographicCamera?a.radius=ne(a.radius):a.radius=ne(a.radius*c),N.setFromSpherical(a),N.applyQuaternion(Re),H.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ye=!1;if(n.zoomToCursor&&B){let Ge=null;if(n.object.isPerspectiveCamera){let dt=N.length();Ge=ne(dt*c);let ft=dt-Ge;n.object.position.addScaledVector(I,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let dt=new F(V.x,V.y,0);dt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ye=!0;let ft=new F(V.x,V.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(dt),n.object.updateMatrixWorld(),Ge=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ge).add(n.object.position):(Vr.origin.copy(n.object.position),Vr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Vr.direction))<Ng?e.lookAt(n.target):(Xc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Vr.intersectPlane(Xc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ye=!0);return c=1,B=!1,Ye||Se.distanceToSquared(n.object.position)>o||8*(1-ke.dot(n.object.quaternion))>o||ot.distanceToSquared(n.target)>0?(n.dispatchEvent(Gc),Se.copy(n.object.position),ke.copy(n.object.quaternion),ot.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Be),n.domElement.removeEventListener("pointerdown",De),n.domElement.removeEventListener("pointercancel",b),n.domElement.removeEventListener("wheel",ue),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",b),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",de),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Es,l=new Es,c=1,h=new F,d=new Ee,f=new Ee,g=new Ee,y=new Ee,M=new Ee,m=new Ee,p=new Ee,C=new Ee,S=new Ee,I=new F,V=new Ee,B=!1,O=[],ee={};function E(N){return N!==null?2*Math.PI/60*n.autoRotateSpeed*N:2*Math.PI/60/60*n.autoRotateSpeed}function L(N){let ge=Math.abs(N)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*ge)}function K(N){l.theta-=N}function te(N){l.phi-=N}let ve=(function(){let N=new F;return function(Re,Se){N.setFromMatrixColumn(Se,0),N.multiplyScalar(-Re),h.add(N)}})(),k=(function(){let N=new F;return function(Re,Se){n.screenSpacePanning===!0?N.setFromMatrixColumn(Se,1):(N.setFromMatrixColumn(Se,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(Re),h.add(N)}})(),Z=(function(){let N=new F;return function(Re,Se){let ke=n.domElement;if(n.object.isPerspectiveCamera){let ot=n.object.position;N.copy(ot).sub(n.target);let ct=N.length();ct*=Math.tan(n.object.fov/2*Math.PI/180),ve(2*Re*ct/ke.clientHeight,n.object.matrix),k(2*Se*ct/ke.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ve(Re*(n.object.right-n.object.left)/n.object.zoom/ke.clientWidth,n.object.matrix),k(Se*(n.object.top-n.object.bottom)/n.object.zoom/ke.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function $(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(N){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(N,ge){if(!n.zoomToCursor)return;B=!0;let Re=n.domElement.getBoundingClientRect(),Se=N-Re.left,ke=ge-Re.top,ot=Re.width,ct=Re.height;V.x=Se/ot*2-1,V.y=-(ke/ct)*2+1,I.set(V.x,V.y,1).unproject(n.object).sub(n.object.position).normalize()}function ne(N){return Math.max(n.minDistance,Math.min(n.maxDistance,N))}function pe(N){d.set(N.clientX,N.clientY)}function he(N){re(N.clientX,N.clientX),p.set(N.clientX,N.clientY)}function Te(N){y.set(N.clientX,N.clientY)}function ie(N){f.set(N.clientX,N.clientY),g.subVectors(f,d).multiplyScalar(n.rotateSpeed);let ge=n.domElement;K(2*Math.PI*g.x/ge.clientHeight),te(2*Math.PI*g.y/ge.clientHeight),d.copy(f),n.update()}function U(N){C.set(N.clientX,N.clientY),S.subVectors(C,p),S.y>0?$(L(S.y)):S.y<0&&le(L(S.y)),p.copy(C),n.update()}function ye(N){M.set(N.clientX,N.clientY),m.subVectors(M,y).multiplyScalar(n.panSpeed),Z(m.x,m.y),y.copy(M),n.update()}function Fe(N){re(N.clientX,N.clientY),N.deltaY<0?le(L(N.deltaY)):N.deltaY>0&&$(L(N.deltaY)),n.update()}function Ue(N){let ge=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),ge=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),ge=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?K(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),ge=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?K(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),ge=!0;break}ge&&(N.preventDefault(),n.update())}function We(N){if(O.length===1)d.set(N.pageX,N.pageY);else{let ge=at(N),Re=.5*(N.pageX+ge.x),Se=.5*(N.pageY+ge.y);d.set(Re,Se)}}function je(N){if(O.length===1)y.set(N.pageX,N.pageY);else{let ge=at(N),Re=.5*(N.pageX+ge.x),Se=.5*(N.pageY+ge.y);y.set(Re,Se)}}function ze(N){let ge=at(N),Re=N.pageX-ge.x,Se=N.pageY-ge.y,ke=Math.sqrt(Re*Re+Se*Se);p.set(0,ke)}function $e(N){n.enableZoom&&ze(N),n.enablePan&&je(N)}function z(N){n.enableZoom&&ze(N),n.enableRotate&&We(N)}function Me(N){if(O.length==1)f.set(N.pageX,N.pageY);else{let Re=at(N),Se=.5*(N.pageX+Re.x),ke=.5*(N.pageY+Re.y);f.set(Se,ke)}g.subVectors(f,d).multiplyScalar(n.rotateSpeed);let ge=n.domElement;K(2*Math.PI*g.x/ge.clientHeight),te(2*Math.PI*g.y/ge.clientHeight),d.copy(f)}function oe(N){if(O.length===1)M.set(N.pageX,N.pageY);else{let ge=at(N),Re=.5*(N.pageX+ge.x),Se=.5*(N.pageY+ge.y);M.set(Re,Se)}m.subVectors(M,y).multiplyScalar(n.panSpeed),Z(m.x,m.y),y.copy(M)}function _e(N){let ge=at(N),Re=N.pageX-ge.x,Se=N.pageY-ge.y,ke=Math.sqrt(Re*Re+Se*Se);C.set(0,ke),S.set(0,Math.pow(C.y/p.y,n.zoomSpeed)),$(S.y),p.copy(C);let ot=(N.pageX+ge.x)*.5,ct=(N.pageY+ge.y)*.5;re(ot,ct)}function ae(N){n.enableZoom&&_e(N),n.enablePan&&oe(N)}function Ie(N){n.enableZoom&&_e(N),n.enableRotate&&Me(N)}function De(N){n.enabled!==!1&&(O.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",T),n.domElement.addEventListener("pointerup",b)),qe(N),N.pointerType==="touch"?He(N):Y(N))}function T(N){n.enabled!==!1&&(N.pointerType==="touch"?Pe(N):xe(N))}function b(N){tt(N),O.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",T),n.domElement.removeEventListener("pointerup",b)),n.dispatchEvent(Wc),r=s.NONE}function Y(N){let ge;switch(N.button){case 0:ge=n.mouseButtons.LEFT;break;case 1:ge=n.mouseButtons.MIDDLE;break;case 2:ge=n.mouseButtons.RIGHT;break;default:ge=-1}switch(ge){case li.DOLLY:if(n.enableZoom===!1)return;he(N),r=s.DOLLY;break;case li.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;Te(N),r=s.PAN}else{if(n.enableRotate===!1)return;pe(N),r=s.ROTATE}break;case li.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;pe(N),r=s.ROTATE}else{if(n.enablePan===!1)return;Te(N),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Lo)}function xe(N){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;ie(N);break;case s.DOLLY:if(n.enableZoom===!1)return;U(N);break;case s.PAN:if(n.enablePan===!1)return;ye(N);break}}function ue(N){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(N.preventDefault(),n.dispatchEvent(Lo),Fe(N),n.dispatchEvent(Wc))}function de(N){n.enabled===!1||n.enablePan===!1||Ue(N)}function He(N){switch(me(N),O.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;We(N),r=s.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;je(N),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;$e(N),r=s.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(N),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Lo)}function Pe(N){switch(me(N),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(N),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;oe(N),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(N),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ie(N),n.update();break;default:r=s.NONE}}function Be(N){n.enabled!==!1&&N.preventDefault()}function qe(N){O.push(N.pointerId)}function tt(N){delete ee[N.pointerId];for(let ge=0;ge<O.length;ge++)if(O[ge]==N.pointerId){O.splice(ge,1);return}}function me(N){let ge=ee[N.pointerId];ge===void 0&&(ge=new Ee,ee[N.pointerId]=ge),ge.set(N.pageX,N.pageY)}function at(N){let ge=N.pointerId===O[0]?O[1]:O[0];return ee[ge]}n.domElement.addEventListener("contextmenu",Be),n.domElement.addEventListener("pointerdown",De),n.domElement.addEventListener("pointercancel",b),n.domElement.addEventListener("wheel",ue,{passive:!1}),this.update()}};var Wr=class extends Gi{constructor(e=null){super();let t=new dn;t.deleteAttribute("uv");let n=new Ve({side:kt}),s=new Ve,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new In(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Je(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new Je(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Je(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new Je(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new Je(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let f=new Je(t,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let g=new Je(t,s);g.position.set(-2.193,-.369,-5.547),g.rotation.set(0,.516,0),g.scale.set(3.875,3.487,2.986),this.add(g);let y=new Je(t,qi(50));y.position.set(-16.116,14.37,8.208),y.scale.set(.1,2.428,2.739),this.add(y);let M=new Je(t,qi(50));M.position.set(-16.109,18.021,-8.207),M.scale.set(.1,2.425,2.751),this.add(M);let m=new Je(t,qi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Je(t,qi(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let C=new Je(t,qi(20));C.position.set(3.235,11.486,-12.541),C.scale.set(2.5,2,.1),this.add(C);let S=new Je(t,qi(100));S.position.set(0,20,0),S.scale.set(1,.1,1),this.add(S)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function qi(i){let e=new Zt;return e.color.setScalar(i),e}var pt=.1,Pt=.04,Ze=.004,_n=1.45,pn=.72,Og=2.16,yt=.018,bs=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Io=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Yi(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new ms(n);return s.colorSpace=Tt,s.wrapS=s.wrapT=os,s.anisotropy=8,s}var xn=(i=>()=>(i=i*16807%2147483647)/2147483647)(987654);function qr(i,e){return Yi(1024,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<170;r++){let o=xn()*s,a=.04+xn()*.12;t.strokeStyle=`rgba(${e},${a})`,t.lineWidth=.5+xn()*2.2,t.beginPath(),t.moveTo(0,o);for(let l=0;l<=n;l+=32)t.lineTo(l,o+Math.sin(l/90+r)*3+(xn()-.5)*2);t.stroke()}})}function Do(i,e,t=!0){return Yi(1024,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let o=n.getImageData(0,0,s,r),a=o.data;for(let l=0;l<a.length;l+=4){let c=(xn()-.5)*14;a[l]+=c,a[l+1]+=c,a[l+2]+=c}if(n.putImageData(o,0,0),t)for(let l=0;l<14;l++){n.strokeStyle=e,n.globalAlpha=.25+xn()*.5,n.lineWidth=.6+xn()*2,n.beginPath();let c=xn()*s,h=0;for(n.moveTo(c,h);h<r;)c+=(xn()-.45)*60,h+=20+xn()*30,n.lineTo(c,h);n.stroke()}n.globalAlpha=1})}function qc(i,e){return Yi(512,512,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s),t.strokeStyle=e,t.lineWidth=3;for(let r=0;r<=2;r++)t.beginPath(),t.moveTo(0,r*s/2),t.lineTo(n,r*s/2),t.stroke(),t.beginPath(),t.moveTo(r*n/2,0),t.lineTo(r*n/2,s),t.stroke()})}var Xr={eiche:()=>({map:qr("#b98a5c","70,42,18"),roughness:.55}),nuss:()=>({map:qr("#6b4a32","30,16,6"),roughness:.5}),beton:()=>({map:Do("#9b9893","rgba(0,0,0,.2)",!1),roughness:.8}),marmor:()=>({map:Do("#1d1d1f","#d9d4cc"),roughness:.18}),keramik:()=>({map:Do("#ecebe7","#b9b4ac"),roughness:.3}),schwarz:()=>({color:"#161616",roughness:.35})},Yc={eiche:()=>{let i=qr("#c9a77f","90,60,30");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.7}},grau:()=>{let i=qc("#a7a49f","rgba(0,0,0,.18)");return i.repeat.set(4,4),{map:i,roughness:.6}},hell:()=>{let i=qc("#e8e4dd","rgba(0,0,0,.08)");return i.repeat.set(4,4),{map:i,roughness:.5}},dunkel:()=>{let i=qr("#5c4330","20,10,4");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.6}}},Uo={matt:.62,seide:.38,glanz:.12};function Fg(i,e={}){let t=!!e.photo,n=new fs({antialias:!0,preserveDrawingBuffer:!0,alpha:t});n.setPixelRatio(Math.min(2,devicePixelRatio||1)),n.outputColorSpace=Tt,n.toneMapping=Eo,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=So,t&&n.setClearColor(0,0),i.appendChild(n.domElement);let s=new Gi;s.background=t?null:new rt("#ebe6de");let r=new Vi(n);s.environment=r.fromScene(new Wr(n),.04).texture;let o=new Ht(40,1,.05,80),a=t?null:new Gr(o,n.domElement);a&&(a.enableDamping=!0,a.minPolarAngle=.2,a.maxPolarAngle=1.45,a.minDistance=1.5,a.maxDistance=16,a.screenSpacePanning=!0);let l=!1,c="perspektive",h=!0,d=!1,f=!1,g=0,y=0,M=null,m=()=>{h=!0,y=0,p()};function p(){!g&&!f&&(g=requestAnimationFrame(Zi))}a&&a.addEventListener("change",m),n.domElement.addEventListener("pointerdown",()=>{l=!0,M=null,m(),e.onInteract&&e.onInteract()}),n.domElement.addEventListener("wheel",()=>{M=null,m()},{passive:!0});let C=new Or("#fff6ea",2);C.castShadow=!0,C.shadow.mapSize.set(2048,2048),C.shadow.bias=-4e-4,C.shadow.radius=4,s.add(C,C.target);let S=new Ur("#ffffff","#bfae98",.55);s.add(S);let I=s.environment,V="tag";function B(){let x=V==="abend";C.intensity=x?.05:2,S.intensity=x?.3:.55,S.color.set(x?"#ffd9b0":"#ffffff"),s.environment=x?null:I,s.background&&s.background.set(x?"#1d1a17":"#ebe6de"),n.toneMappingExposure=t?O:x?1.25:1.05,Fe.m&&(Fe.m.sky.color.set(x?"#1b2640":"#dcefff"),Fe.m.led.color.set(x?"#fff7e0":"#fff3d6")),m()}let O=1,ee={},E=(x,w)=>ee[x]||(ee[x]=w()),L=new ut,K=new ut;L.add(K),s.add(L);let te=null,ve="",k={w:4.8,d:3.8},Z={},$={},le=new Set,re=!1,ne=[],pe=e.acc||"#c0673f",he=new ut;he.renderOrder=5;{let x=new Mr(new Rr(new dn(1,1,1)),new ps({color:pe,transparent:!0,opacity:.95})),w=new Je(new dn(1,1,1),new Zt({color:pe,transparent:!0,opacity:.13,depthWrite:!1}));x.raycast=w.raycast=()=>{},he.add(x,w)}let Te=null,ie=new dn(1,1,1);function U(x,w,P,u,v,_,R,A,D=!0){let W=new Je(ie,u);return W.scale.set(Math.max(x,.001),Math.max(w,.001),Math.max(P,.001)),W.position.set(v,_,R),W.castShadow=D,W.receiveShadow=!0,A.add(W),W}function ye(x,w,P,u,v,_,R,A,D,W){let q=E("cy"+(W||[x,w,P,u].join()),()=>new Ut(x,w,P,u)),X=new Je(q,v);return X.position.set(_,R,A),D.add(X),X}function Fe(x){let w=JSON.stringify([x.front,x.finish,x.wood,x.top,x.handle,x.wall,x.floor,x.accent,x.back,x.backC,x.backWood,x.sink,x.tap]);if(Fe.k===w)return Fe.m;Fe.k=w;let P=new Ve({color:x.front,roughness:Uo[x.finish]??.5,envMapIntensity:.9}),u=x.wood?new Ve({...E("w"+x.wood,()=>Xr[x.wood]()),roughness:.6}):null,v=x.accent?new Ve({color:x.accent,roughness:Uo[x.finish]??.5}):null,_=new Ve({color:"#c8c8c8",roughness:.25,metalness:1}),R=new Ve({color:"#2a2a2a",roughness:.8}),A=new Ve({color:"#efece6",roughness:.8}),D=u||P,W=(X,j)=>{let Q=j?D:R,G=[Q,Q,Q,Q,Q,Q];return G[X]=A,G},q=u?new Ve({...E("w"+x.wood,()=>Xr[x.wood]()),roughness:.6,color:"#d2d2d2"}):new Ve({color:new rt(x.front).multiplyScalar(.9),roughness:Uo[x.finish]??.5,envMapIntensity:.9});return Fe.m={F:u||P,FA:v||u||P,FD:q,carcass:R,inner:A,cs:{L:W(0,1),R:W(1,1),B:W(2),Tp:W(3),K:W(4)},plinth:new Ve({color:"#1e1e1e",roughness:.7}),top:new Ve({...E("t"+x.top,()=>Xr[x.top]())}),steel:_,black:new Ve({color:"#0b0b0c",roughness:.08,metalness:.2}),glass:new Ve({color:"#111",roughness:.05,metalness:.5}),glassClear:new Ve({color:"#cfd8d8",roughness:.05,metalness:.1,transparent:!0,opacity:.35}),handle:x.handle==="gold"?new Ve({color:"#b08a4a",roughness:.3,metalness:1}):x.handle==="schwarz"?new Ve({color:"#111",roughness:.4,metalness:.6}):_,wall:new Ve({color:x.wall||"#f2eee8",roughness:.95}),floor:new Ve({...E("f"+x.floor,()=>(Yc[x.floor]||Yc.eiche)())}),frame:new Ve({color:"#ffffff",roughness:.5}),sky:new Zt({color:"#dcefff"}),door:new Ve({color:"#d8d2c8",roughness:.7}),led:new Zt({color:"#fff3d6"}),stool:new Ve({color:"#1c1c1c",roughness:.5,metalness:.4}),seat:new Ve({color:"#8a6a4a",roughness:.6}),glow:new Zt({color:"#ffe7b8"}),fridge:new Ve({color:"#bfc2c4",roughness:.3,metalness:.8}),tile:new Ve({...E("metro",()=>{let X=Yi(512,512,(j,Q,G)=>{j.fillStyle="#d9d4cc",j.fillRect(0,0,Q,G);for(let J=0;J<8;J++)for(let se=-1;se<5;se++){let fe=se*128+J%2*64,Oe=J*64;j.fillStyle="#f6f4ef",j.fillRect(fe+3,Oe+3,122,58),j.fillStyle="rgba(255,255,255,.5)",j.fillRect(fe+6,Oe+6,116,10)}});return X.repeat.set(4,1.1),{map:X}}),roughness:.2}),backGlass:new Ve({color:x.backC||(x.wood?"#2a2420":x.front),roughness:.04,metalness:.1,envMapIntensity:1.4}),backDibond:new Ve({color:x.backC||(x.wood?"#2a2420":x.front),roughness:.62,metalness:.05}),backWood:new Ve({...E("bw"+(x.backWood||"eiche"),()=>{let X=Xr[x.backWood==="nuss"?"nuss":"eiche"](),j=X.map.clone();return j.needsUpdate=!0,j.repeat.set(1.6,1),{...X,map:j}}),roughness:.55}),sinkM:(()=>{let X=x.sink||"#c9cccf",j=X==="#c9cccf";return new Ve({color:X,roughness:j?.28:X==="#f7f6f2"?.12:.42,metalness:j?1:0,envMapIntensity:j?1:.8})})(),sinkIn:(()=>{let X=new rt(x.sink||"#c9cccf"),j=(x.sink||"#c9cccf")==="#c9cccf";return new Ve({color:X.clone().multiplyScalar(j?.82:.78),roughness:j?.35:.5,metalness:j?1:0})})(),tapM:new Ve({chrom:{color:"#e9edf0",roughness:.06,metalness:1},edel:{color:"#c3c6c8",roughness:.34,metalness:1},schwarz:{color:"#161617",roughness:.55,metalness:.25},gold:{color:"#c09a5f",roughness:.3,metalness:1}}[x.tap]||{color:"#e9edf0",roughness:.06,metalness:1}),dside:E("m_ds",()=>new Ve({color:"#5b5d60",roughness:.4,metalness:.6})),dbot:E("m_db",()=>new Ve({color:"#e7e5e0",roughness:.85})),plate:E("m_pl",()=>new Ve({color:"#fbfaf6",roughness:.25})),cup:E("m_cu",()=>new Ve({color:"#d9cdb8",roughness:.35})),bottleG:E("m_bg",()=>new Ve({color:"#2d4a2a",roughness:.12,metalness:.15})),bottleB:E("m_bb",()=>new Ve({color:"#6a3a16",roughness:.12,metalness:.15})),bottleW:E("m_bw",()=>new Ve({color:"#c9b37a",roughness:.2})),jar:E("m_ja",()=>new Ve({color:"#e3d6bd",roughness:.3})),jarLid:E("m_jl",()=>new Ve({color:"#3c3a37",roughness:.4,metalness:.3})),bin:E("m_bi",()=>new Ve({color:"#7d8083",roughness:.55})),binY:E("m_by",()=>new Ve({color:"#d9b441",roughness:.5})),binB:E("m_bl",()=>new Ve({color:"#4f78a8",roughness:.5})),binG:E("m_bgn",()=>new Ve({color:"#7a6a55",roughness:.5})),fridgeIn:E("m_fi",()=>new Ve({color:"#f3f6f7",roughness:.35})),fridgeLight:E("m_fl",()=>new Zt({color:"#f2f8ff"})),glassShelf:E("m_gs",()=>new Ve({color:"#dfeaea",roughness:.05,transparent:!0,opacity:.5})),green:E("m_gr",()=>new Ve({color:"#6f8f4e",roughness:.6})),broom:E("m_br",()=>new Ve({color:"#b5a27c",roughness:.6}))},Fe.m}function Ue(x,w,P,u,v,_,R,A,D,W={}){let q=v+_;A.forEach((X,j)=>{let Q=_*X;if(U(P-Ze*2,Q-Ze,.02,W.mat||w.F,u,q-Q/2,R,x),D.handle!=="grifflos"&&!W.noHandle)if(W.vertical){let G=Math.min(W.hl||.32,Q*.42),se=(W.vpos&&W.vpos[j]||"bottom")==="top"?q-.07-G/2:q-Q+.07+G/2;U(.016,G,.025,w.handle,u+(W.side||1)*(P/2-.055),se,R+.02,x)}else U(Math.min(.4,P*.6),.015,.025,w.handle,u,q-.05,R+.02,x);q-=Q}),D.handle==="grifflos"&&!W.noHandle&&U(P,.02,.01,w.steel,u,v+_-.012,R-.004,x,!1)}function We(x,w,P,u,v,_={}){let R=.9-Pt-pt;U(u-Ze,R,v-.02,w.carcass,0,pt+R/2,-.01,x),U(u,pt,v-.06,w.plinth,0,pt/2,-.03,x),_.noFront||Ue(x,w,u,0,pt,R-Ze,v/2-.01,_.parts||[.25,.375,.375],P,_),_.noTop||U(u+.002,Pt,v+.02,w.top,0,.9-Pt/2,.01,x)}function je(x,w,P,u,v=.9){let _=Math.min(.55,P-.2);U(_,.008,.44,w.sinkM,0,v+.004,-.02,x,!1),U(_-.07,.004,.34,w.sinkIn,-0,v+.0085,-.01,x,!1),ye(.022,.022,.003,18,E("m_drain",()=>new Ve({color:"#3a3c3e",roughness:.3,metalness:.8})),0,v+.011,0,x,"drain");let R=w.tapM||w.steel,A=new Je(E("faucet",()=>new Ut(.015,.018,.3,16)),R);A.position.set(0,v+.15,-u/2+.1),A.castShadow=!0,x.add(A);let D=new Je(E("arc",()=>new Ir(.09,.012,10,24,Math.PI)),R);D.position.set(0,v+.3,-u/2+.19),D.rotation.y=Math.PI/2,D.castShadow=!0,x.add(D);let W=new Je(E("spout",()=>new Ut(.013,.011,.06,14)),R);W.position.set(0,v+.27,-u/2+.28),x.add(W);let q=new Je(E("lever",()=>new Ut(.006,.006,.07,8)),R);q.rotation.z=Math.PI/2.4,q.position.set(.035,v+.22,-u/2+.1),x.add(q)}let ze=()=>E("grille",()=>Yi(64,256,(x,w,P)=>{x.fillStyle="#4b4f53",x.fillRect(0,0,w,P),x.fillStyle="#111214";for(let u=6;u<P;u+=12)x.fillRect(6,u,w-12,6)}));function $e(x,w,P,u,v=.9,_=-.02,R){let A=R?R/100:Math.min(.8,P-.08),D=Math.min(1.12,A/.78);U(A,.008,.52,w.glass,0,v+.004,_,x,!1);let W=E("ringgeo",()=>new Pr(.06,.068,32)),q=E("ringmat",()=>new Zt({color:"#555"}));[[-.17,-.12],[.17,-.12],[-.17,.12],[.17,.12]].forEach(([X,j])=>{let Q=new Je(W,q);Q.rotation.x=-Math.PI/2,Q.position.set(X*Math.max(.72,D)+(u?Math.sign(X)*.015:0),v+.009,_+j),x.add(Q)}),u&&U(.09,.004,.5,E("m_grille",()=>new Ve({map:ze(),roughness:.45,metalness:.6})),0,v+.0095,_,x,!1)}function z(x,w,P,u,v,_){let R=-v/2,A=v/2-.02,D=A-R,W=(R+A)/2,q=w.cs,X=P-2*yt-Ze;return U(yt,u,D,q.L,-P/2+yt/2+Ze/2,_+u/2,W,x),U(yt,u,D,q.R,P/2-yt/2-Ze/2,_+u/2,W,x),U(X,yt,D,q.B,0,_+yt/2,W,x,!1),U(X,yt,D,q.Tp,0,_+u-yt/2,W,x,!1),U(X,u-2*yt,.008,q.K,0,_+u/2,R+.004,x,!1),{zf:A,zb:R}}function Me(x,w,P,u,v,_,R){let{M:A,s:D}=x;if(D.handle!=="grifflos"){if(D.handle==="knopf"){let W=ye(.014,.011,.026,18,A.handle,P,u,v-.002,w,"knob");W.rotation.x=Math.PI/2,W.castShadow=!0;return}R?U(.016,_,.025,A.handle,P,u,v,w):U(_,.015,.025,A.handle,P,u,v,w)}}let oe=1.05;function _e(x,w,P,u,v,_,R,A){let D=x.s.frame&&P>.1&&u>.09,W=U(P,u,.02,D&&(v===x.M.F||v===x.M.FA)?x.M.FD:v,_,R,A,w);if(D){let q=Math.min(.058,P*.15,u*.2),X=A+.0135;U(P,q,.007,v,_,R+u/2-q/2,X,w),U(P,q,.007,v,_,R-u/2+q/2,X,w),U(q,u-2*q,.007,v,_-P/2+q/2,R,X,w),U(q,u-2*q,.007,v,_+P/2-q/2,R,X,w)}return W}function ae(x,w,P,u,v=0,_=.0215){x.kind!=="u"||x.s.handle!=="grifflos"||U(P,.012,.003,x.M.carcass,v,u+.007,_,w,!1)}function Ie(x,w,P,u,v){let _={o:w,k:P,to:u,ez:v,b:P==="rx"?w.rotation.x:P==="ry"?w.rotation.y:P==="px"?w.position.x:P==="py"?w.position.y:w.position.z};return x.anims.push(_),_}let De=x=>{let w=x-1;return 1+1.9*w*w*w+.9*w*w},T=(x,w)=>w?De(x):Io(x);function b(x,w){let P=new ut;return w.add(P),x.hide.push(P),P}function Y(x,w,P,u,v,_,R,A){let D=x.M,W=Math.max(1,Math.floor(u/.14)),q=X=>(Math.sin((A+X)*12.9898)*43758.5453%1+1)%1;if(R==="plates"){let X=Math.max(1,Math.floor(u/.3));for(let j=0;j<X;j++)for(let Q=0;Q<5;Q++)ye(.1,.095,.012,24,D.plate,P-u/2+(j+.5)*u/X,v+.008+Q*.014,_,w,"plate");return}for(let X=0;X<W;X++){let j=P-u/2+(X+.5)*u/W,Q=q(X);if(Q<.4)ye(.04,.04,.1,14,D.jar,j,v+.05,_,w,"jar"),ye(.042,.042,.02,14,D.jarLid,j,v+.11,_,w,"jarl");else if(Q<.75)for(let G=0;G<3;G++)ye(.045,.035,.08,14,D.cup,j,v+.04+G*.085,_,w,"cup");else for(let G=0;G<4;G++)ye(.09,.085,.012,22,D.plate,j,v+.008+G*.014,_,w,"plate2")}}function xe(x,w,P,u,v,_,R,A,D){let{M:W,zf:q,zb:X}=x,j=u-2*yt-.006,Q=q-X-.03,G=(q+X)/2-.01;for(let J=1;J<=R;J++){let se=v+_*J/(R+1);U(j,.016,Q,D?W.glassShelf:W.inner,P,se,G,w,!1),A&&Y(x,w,P,j-.04,se+.008,G,A,J*7+P*13)}A&&Y(x,w,P,j-.04,v+yt,G,A,99+P*5)}function ue(x,w,P,u,v,_,R){let A=w.in||"shelf",D=R?x.g:b(x,x.g),W=x.M,{zf:q,zb:X}=x,j=(q+X)/2;if(A==="none")return;if(A==="fridge"){let G=u-2*yt-.01,J=q-X-.02;U(G,_-.02,.01,W.fridgeIn,P,v+_/2,X+.02,D,!1),U(.01,_-.02,J,W.fridgeIn,P-G/2+.005,v+_/2,j,D,!1),U(.01,_-.02,J,W.fridgeIn,P+G/2-.005,v+_/2,j,D,!1);let se=Math.max(1,Math.round(_/.3));for(let fe=1;fe<=se;fe++){let Oe=v+_*fe/(se+1);U(G,.008,J-.03,W.glassShelf,P,Oe,j,D,!1),fe===1&&(ye(.04,.04,.12,12,W.bottleW,P-G/4,Oe+.065,j,D,"milk"),ye(.05,.05,.06,14,W.green,P+G/6,Oe+.035,j,D,"bowl"))}U(G*.6,.012,.02,W.fridgeLight,P,v+_-.03,q-.08,D,!1);return}if(A==="broom"){U(u-2*yt-.006,.016,q-X-.03,W.inner,P,v+_-.3,j,D,!1),ye(.012,.012,1.2,8,W.broom,P-u/5,v+.65,j+.05,D,"stick"),U(.24,.05,.06,W.stool,P-u/5,v+.06,j+.05,D,!1),U(Math.min(.22,u-.1),.3,.22,W.bin,P+u/6,v+.16,j,D,!1);return}if(A==="lazy"){let G=Math.max(.1,Math.min(u*.62,q-X-.04)/2),J=new ut;J.position.set(P,0,j),D.add(J);let se=E("lazy"+G.toFixed(2),()=>new Ut(G,G,.014,36,1,!1,0,Math.PI*1.5)),fe=E("lazyr"+G.toFixed(2),()=>new Ut(G+.004,G+.004,.035,36,1,!0,0,Math.PI*1.5)),Oe=_>.6?2:1;for(let Le=0;Le<Oe;Le++){let ce=v+.04+Le*_/(Oe+.2),et=new Je(se,W.inner);et.position.y=ce,J.add(et);let Ne=new Je(fe,W.steel);Ne.position.y=ce+.016,J.add(Ne);for(let st=0;st<3;st++){let Ke=.5+st*1.35,Xe=Math.sin(Ke)*G*.6,nt=Math.cos(Ke)*G*.6;if(st===1)for(let it=0;it<3;it++)ye(.045,.035,.08,14,W.cup,Xe,ce+.05+it*.085,nt,J,"cup");else ye(.04,.04,.1,14,W.jar,Xe,ce+.06,nt,J,"jar"),ye(.042,.042,.02,14,W.jarLid,Xe,ce+.12,nt,J,"jarl")}}ye(.01,.01,_-.04,8,W.steel,0,v+_/2,0,J,"lazyax"+_.toFixed(2)),Ie(x,J,"ry",x.lazyDir||1.1);return}let Q=x.kind==="t"?Math.max(1,Math.floor(_/.38)):x.kind==="u"&&_>.6?2:1;xe(x,D,P,u,v,_,Q,w.dec||(R&&x.kind==="u"?"mix":null),!1)}function de(x,w,P,u,v,_,R,A){let{M:D,s:W,g:q,kind:X,zf:j}=x,Q=R==="l"?1:-1,G=P-Q*u/2,J=new ut;J.position.set(G,0,j),q.add(J);let se=x.mat||D.F,fe=u-Ze*2,Oe=_-Ze,Le=v+_/2;if(A){let ce=Math.min(W.frame?.065:.05,fe*(W.frame?.16:.12));U(fe,ce,.02,se,Q*u/2,v+_-Ze/2-ce/2,.01,J),U(fe,ce,.02,se,Q*u/2,v+Ze/2+ce/2,.01,J),U(ce,Oe-2*ce,.02,se,Q*(Ze+ce/2),Le,.01,J),U(ce,Oe-2*ce,.02,se,Q*(u-Ze-ce/2),Le,.01,J),U(fe-2*ce,Oe-2*ce,.006,D.glassClear,Q*u/2,Le,.01,J,!1)}else _e(x,J,fe,Oe,se,Q*u/2,Le,.01);if(ae(x,J,fe,v+Ze/2,Q*u/2),!w.nh&&W.handle!=="grifflos"){let ce=X==="b"?Math.min(.14,_*.4):Math.min(X==="u"?.2:w.hl||.32,_*.42),et=w.hp||(X==="u"?"bottom":X==="b"?"top":"bottom"),Ne=v+.06+ce/2,st=v+_-.06-ce/2,Ke=X==="t"?v<oe-.1?Math.max(Ne,Math.min(st,oe)):Ne:et==="top"?st:et==="mid"?Le:Ne;Me(x,J,Q*(u-.055),Ke,.03,ce,!0)}Ie(x,J,"ry",-Q*(w.ang||1.62))}function He(x,w,P,u,v,_,R,A){let{M:D,s:W,g:q,zf:X,zb:j,d:Q}=x,G=new ut;q.add(G),_e(x,G,u-Ze*2,_-Ze,x.mat||D.F,P,v+_/2,X+.01),w.nh||Me(x,G,P,x.kind==="t"&&_>.7?Math.max(v+.08,Math.min(v+_-.08,oe)):v+_-.05,X+.03,Math.min(.4,u*.6),!1);let J=b(x,G),se=u-2*yt-.03,fe=X-j-.05,Oe=X-.004,Le=Oe-fe,ce=(Le+Oe)/2,et=v+.02,Ne=w.in||(w.k==="pull"?"shelf":"box"),st=(Ke,Xe=J,nt=et)=>{U(.012,Ke,fe,D.dside,P-se/2+.006,nt+Ke/2,ce,Xe,!1),U(.012,Ke,fe,D.dside,P+se/2-.006,nt+Ke/2,ce,Xe,!1),U(se,Ke*.8,.012,D.dside,P,nt+Ke*.4,Le+.006,Xe,!1),U(se-.02,.01,fe,D.dbot,P,nt+.005,ce,Xe,!1)};if(w.k==="drawer"){let Ke=Math.max(.06,Math.min(_-.05,.24));if(st(Ke),Ne==="cutlery"||Ne==="box"&&R===0&&A>2)for(let Xe=1;Xe<4;Xe++)U(.006,.04,fe-.03,D.dbot,P-se/2+se*Xe/4,et+.03,ce,J,!1);else if(Ne==="plates"&&Ke>.15){let Xe=Math.max(1,Math.floor(se/.26));for(let nt=0;nt<Xe;nt++)for(let it=0;it<6;it++)ye(.1,.095,.012,24,D.plate,P-se/2+(nt+.5)*se/Xe,et+.016+it*.014,ce,J,"plate")}else if(Ne==="pots"&&Ke>.15){let Xe=Math.max(1,Math.floor(se/.26));for(let nt=0;nt<Xe;nt++)ye(.1,.1,.12,24,D.steel,P-se/2+(nt+.5)*se/Xe,et+.07,ce,J,"pot")}else if(Ne==="id"){let Xe=new ut;J.add(Xe);let nt=.08,it=v+_-.04-nt;st(nt,Xe,it),U(se-.01,nt,.016,x.mat||D.F,P,it+nt/2,Oe-.01,Xe,!1);for(let gt=1;gt<3;gt++)U(.005,.035,fe-.04,D.dbot,P-se/2+se*gt/3,it+.025,ce,Xe,!1);if(Ie(x,Xe,"pz",.14),_>.3){let gt=Math.max(1,Math.floor(se/.26));for(let Rt=0;Rt<gt;Rt++)ye(.1,.1,.1,24,D.steel,P-se/2+(Rt+.5)*se/gt,et+.06,ce,J,"pot2")}}Ie(x,G,"pz",Math.min(.45,fe*.8));return}if(U(.012,_-.06,fe,D.dside,P-se/2+.006,v+_/2,ce,J,!1),U(se,_-.06,.012,D.dside,P,v+_/2,Le+.006,J,!1),Ne==="bottles"){let Ke=Math.max(1,Math.floor(_/.32)),Xe=Math.max(1,Math.round(se/.08));for(let nt=0;nt<Ke;nt++){let it=v+.03+nt*_/Ke;U(se,.01,fe,D.dside,P,it,ce,J,!1);for(let gt=0;gt<Xe;gt++)for(let Rt=0;Rt<3;Rt++){let Wt=P-se/2+(gt+.5)*se/Xe,di=Le+(Rt+.5)*fe/3,ws=(gt+Rt+nt)%3===0?D.bottleB:D.bottleG;ye(.032,.032,.19,12,ws,Wt,it+.1,di,J,"bot"),ye(.011,.015,.07,8,ws,Wt,it+.23,di,J,"neck")}}}else if(Ne==="baskets"){let Ke=Math.max(2,Math.floor(_/.2));for(let Xe=0;Xe<Ke;Xe++){let nt=v+.03+Xe*(_-.06)/Ke;U(se,.008,fe,D.dside,P,nt,ce,J,!1),U(se,.04,.006,D.steel,P,nt+.03,Le+.01,J,!1),U(se,.04,.006,D.steel,P,nt+.03,Oe-.03,J,!1);let it=Math.max(1,Math.floor(fe/.11));for(let gt=0;gt<it;gt++){let Rt=Le+(gt+.5)*fe/it;se>.1?(ye(.035,.035,.09,12,D.jar,P,nt+.05,Rt,J,"jar2"),ye(.037,.037,.015,12,D.jarLid,P,nt+.1,Rt,J,"jarl2")):U(.05,.1,.07,(gt+Xe)%2?D.bottleW:D.cup,P,nt+.055,Rt,J,!1)}}}else if(Ne==="bins"){let Ke=se>.4?3:2,Xe=se/Ke-.015,nt=[D.binY,D.binB,D.binG];for(let it=0;it<Ke;it++){let gt=P-se/2+(it+.5)*se/Ke,Rt=Math.min(.36,_-.14);U(Xe,Rt,fe-.04,D.bin,gt,v+.04+Rt/2,ce,J,!1),U(Xe+.006,.02,fe-.02,nt[it],gt,v+.05+Rt,ce,J,!1)}}else{let Ke=Math.max(1,Math.floor(_/.3));for(let Xe=0;Xe<Ke;Xe++)U(se,.01,fe,D.dbot,P,v+.03+Xe*_/Ke,ce,J,!1)}Ie(x,G,"pz",Math.min(.55,fe*.88))}function Pe(x,w,P,u,v,_,R,A){let{M:D,s:W,g:q,zf:X}=x,j=w.k||"door";if(j==="open"){ue(x,{in:w.in||"shelf",dec:w.dec||"mix"},P,u,v,_,!0);return}if(j==="blind"){_e(x,q,u-Ze*2,_-Ze,x.mat||D.F,P,v+_/2,X+.01);return}if(j==="oven"||j==="micro"){U(u-Ze*2,_-Ze,.02,D.glass,P,v+_/2,X+.01,q),U(u-.1,_*.62,.004,E("m_ov",()=>new Ve({color:"#202326",roughness:.2,metalness:.4})),P,v+_*.44,X+.022,q,!1),U(u*.8,.018,.03,D.steel,P,v+_-.06,X+.04,q),j==="oven"&&U(u*.5,.02,.004,D.steel,P,v+_-.025,X+.022,q,!1);return}if(j==="drawer"||j==="pull"){He(x,w,P,u,v,_,R,A);return}if(j==="door"||j==="glass"){de(x,w,P,u,v,_,w.a||"l",j==="glass"),ue(x,w,P,u,v,_,j==="glass");return}if(j==="door2"||j==="glass2"){let Q=j==="glass2";de(x,w,P-u/4,u/2,v,_,"l",Q),de(x,w,P+u/4,u/2,v,_,"r",Q),ue(x,w,P,u,v,_,Q);return}if(j==="flap"){let Q=new ut;Q.position.set(P,v+_,X),q.add(Q),_e(x,Q,u-Ze*2,_-Ze,x.mat||D.F,0,-_/2,.01),ae(x,Q,u-Ze*2,-_+Ze/2),w.nh||Me(x,Q,0,-_+.05,.03,Math.min(.4,u*.6),!1),Ie(x,Q,"rx",-1.75,T),ue(x,w,P,u,v,_,!1);return}if(j==="lift"){let Q=new ut;Q.position.set(P,0,X),q.add(Q),_e(x,Q,u-Ze*2,_-Ze,x.mat||D.F,0,v+_/2,.01),ae(x,Q,u-Ze*2,v+Ze/2),w.nh||Me(x,Q,0,v+.05,.03,Math.min(.4,u*.6),!1),Ie(x,Q,"py",_+.03,T),Ie(x,Q,"pz",1,(G,J)=>{let se=T(G,J);return .06*se+.1*Math.sin(Math.PI*Math.min(1,se))}),Ie(x,Q,"rx",1,(G,J)=>-.16*Math.sin(Math.PI*Math.min(1,T(G,J)))),ue(x,w,P,u,v,_,!1);return}if(j==="fold"){let Q=_/2,G=x.mat||D.F,J=new ut;J.position.set(P,v+_,X),q.add(J),_e(x,J,u-Ze*2,Q-Ze/2,G,0,-Q/2+Ze/4,.01);let se=new ut;se.position.set(0,-Q,0),J.add(se),_e(x,se,u-Ze*2,Q-Ze/2,G,0,-Q/2-Ze/4,.01),ae(x,se,u-Ze*2,-Q+Ze/4),U(u-Ze*2-.01,.004,.004,D.carcass,0,0,.002,se,!1),w.nh||Me(x,se,0,-Q+.05,.03,Math.min(.4,u*.6),!1);let fe=1.42;Ie(x,J,"rx",-fe,T),Ie(x,se,"rx",2*fe,T),ue(x,w,P,u,v,_,!1);return}if(j==="dw"){let Q=new ut;Q.position.set(P,v,X),q.add(Q),_e(x,Q,u-Ze*2,_-Ze,x.mat||D.F,0,_/2,.01),Me(x,Q,0,_-.05,.03,Math.min(.4,u*.6),!1);let G=b(x,q),J=u-2*yt-.02,{zb:se}=x,fe=X-se-.06,Oe=(X+se)/2;U(J,_-.04,.01,D.steel,P,v+_/2,se+.03,G,!1),[.14,.44].forEach((Le,ce)=>{let et=new ut;G.add(et),U(J-.02,.006,fe,D.dside,P,v+Le,Oe,et,!1),U(J-.02,.07,.006,D.dside,P,v+Le+.035,Oe+fe/2,et,!1);let Ne=Math.max(4,Math.floor(J/.05));for(let st=0;st<Ne;st++){let Ke=new Je(E("dwplate",()=>new Ut(.1,.1,.01,20)),D.plate);Ke.rotation.x=Math.PI/2,Ke.position.set(P-J/2+.04+st*(J-.08)/(Ne-1),v+Le+.1,Oe-.06*ce),et.add(Ke)}ce===0&&Ie(x,et,"pz",.32)}),Ie(x,Q,"rx",1.45);return}}function Be(x,w,P,u,v,_){let R=w.reduce((q,X)=>q+(X.cm!=null?X.cm/100:0),0),A=w.reduce((q,X)=>q+(X.cm==null?X.p||1:0),0)||1,D=Math.max(0,_-R),W=v+_;w.forEach((q,X)=>{let j=q.cm!=null?q.cm/100:D*(q.p||1)/A;j>.005&&Pe(x,q,P,u,W-j,j,X,w.length),W-=j})}function qe(x,w,P,u){let{g:v,M:_,s:R}=x,A=.6,D=.9+u,W=pt+u,q=D-Pt-W,X=.3,j=new ut;v.add(j),w.corner.side==="r"&&(j.scale.x=-1);let Q=-P/2,G=-P/2+.6;U(P,pt+u,A-.06,_.plinth,0,(pt+u)/2,-.03,j),U(.6-.06,pt+u,X+.06,_.plinth,Q+.27,(pt+u)/2,A/2+X/2-.03,j),U(P-Ze,q,.008,_.carcass,0,W+q/2,-A/2+.004,j),U(yt,q,A+X-.02,_.carcass,Q+yt/2,W+q/2,(X-.02)/2,j),U(yt,q,A-.02,_.carcass,P/2-yt/2,W+q/2,-.01,j),U(.6,q,yt,_.carcass,Q+.3,W+q/2,A/2+X-.02-yt/2,j),U(P-Ze,yt,A-.02,_.inner,0,W+yt/2,-.01,j,!1),U(.6,yt,X,_.inner,Q+.3,W+yt/2,A/2+X/2-.01,j,!1),U(P,Pt,A+.02,_.top,0,D-Pt/2,.01,j),U(.62,Pt,X-.02,_.top,Q+.31,D-Pt/2,A/2+.02+(X-.02)/2,j);let J=A/2-.02,se=x.mat||_.F,fe=P/2-G,Oe=new ut;Oe.position.set(P/2,0,J),j.add(Oe),U(fe-Ze*2,q-Ze,.02,se,-fe/2,W+q/2,.01,Oe);let Le=new ut;if(Le.position.set(G+.02,0,A/2+X-.02),j.add(Le),U(.02,q-Ze,X-Ze*2,se,.01,W+q/2,-X/2+.01,Le),Me(x,Oe,-fe+.05,D-Pt-.12,.03,.14,!0),R.handle!=="grifflos")if(R.handle==="knopf"){let st=ye(.014,.011,.026,18,_.handle,.03,D-Pt-.12,-X+.06,Le,"knob");st.rotation.z=Math.PI/2}else U(.025,.14,.016,_.handle,.03,D-Pt-.12,-X+.06,Le);Ie(x,Oe,"ry",1.62),Ie(x,Le,"ry",-1.62);let ce=new ut;ce.position.set(Q+.45,0,.15),j.add(ce),x.hide.push(ce);let et=E("kardisc",()=>new Ut(.4,.4,.02,40,1,!1,Math.PI/2,Math.PI*1.5)),Ne=E("karrim",()=>new Ut(.405,.405,.05,40,1,!0,Math.PI/2,Math.PI*1.5));[.22,.5].forEach((st,Ke)=>{let Xe=new Je(et,_.inner);Xe.position.y=W+st,ce.add(Xe);let nt=new Je(Ne,_.steel);nt.position.y=W+st+.025,ce.add(nt);for(let it=0;it<4;it++){let gt=Math.PI/2+.5+it*.9;ye(.07,.06,.1+Ke*.02,16,it%2?_.steel:_.jar,Math.sin(gt)*.25,W+st+.06,Math.cos(gt)*.25,ce,"karpot"+Ke)}}),ye(.012,.012,q-.04,8,_.steel,0,W+q/2,0,ce,"karax"),Ie(x,ce,"ry",-Math.PI/2)}function tt(x,w,P,u,v,_){let{M:R}=x,A=new ut;x.g.add(A),x.hide.push(A);let D=E("lemans",()=>{let W=new _s;return W.moveTo(-.22,-.16),W.lineTo(.18,-.16),W.quadraticCurveTo(.26,-.16,.26,-.06),W.lineTo(.26,.1),W.quadraticCurveTo(.26,.18,.16,.18),W.lineTo(-.06,.18),W.quadraticCurveTo(-.22,.18,-.24,.02),W.quadraticCurveTo(-.26,-.16,-.22,-.16),new Cr(W,{depth:.03,bevelEnabled:!1})});[.2,.48].forEach(W=>{let q=u+W*v/.72,X=new Je(D,R.inner);X.rotation.x=-Math.PI/2,X.position.set(0,q,0),A.add(X);for(let j=0;j<3;j++)ye(.06,.05,.09,16,j===1?R.steel:R.jar,-.12+j*.13,q+.075,.01,A,"lmpot")}),A.position.set(w+_*.14,0,-.02),Ie(x,A,"px",-_*.16),Ie(x,A,"pz",.42),Ie(x,A,"ry",-_*.45)}let me=()=>E("contact",()=>Yi(128,128,(x,w,P)=>{x.clearRect(0,0,w,P),x.shadowColor="rgba(0,0,0,1)",x.shadowBlur=22,x.fillStyle="#000",x.fillRect(30,30,68,68)}));function at(x,w,P){let u=new Je(E("cgeo",()=>new Ln(1,1)),E("cmat",()=>new Zt({map:me(),transparent:!0,opacity:.5,depthWrite:!1,color:"#000"})));u.rotation.x=-Math.PI/2,u.scale.set(w/.56,P/.56,1),u.position.set(0,.0015,-.02),u.renderOrder=-1,u.raycast=()=>{},x.add(u)}function N(x,w,P,u,v){let _=u.kind||"b",R=u.w/100,A=(u.d||(_==="u"?35:60))/100,D=_==="b"?((u.ah||90)-90)/100:0;if(_!=="u"&&at(x,R,A-.04),v.kind=_,v.d=A,v.mat=u.acc?w.FA:u.dekor==="top"?w.top:null,u.eqk&&(x.userData.eq={k:u.eqk,wall:u.eqw}),u.corner&&u.corner.kind==="kar"){qe(v,u,R,D);return}let W,q;if(_==="u")W=(u.y0||145)/100,q=(u.h||72)/100;else if(_==="t")W=pt,q=(u.h||216)/100-pt,U(R,pt,A-.06,w.plinth,0,pt/2,-.03,x);else{W=pt+D,q=.9+D-Pt-W;let fe=u.plExt||[0,0];U(R+(fe[0]+fe[1])/100,pt+D,A-.06,w.plinth,(fe[1]-fe[0])/200,(pt+D)/2,-.03,x)}let{zf:X,zb:j}=z(x,w,R,q,A,W);v.zf=X,v.zb=j;let Q=u.cols||[{fr:u.fr||[{k:"door"}]}],G=Q.reduce((fe,Oe)=>fe+(Oe.cm?Oe.cm/100:0),0),J=Q.filter(fe=>!fe.cm).length||1,se=-R/2;if(Q.forEach(fe=>{let Oe=fe.cm?fe.cm/100:(R-G)/J,Le=q-Ze;Be(v,fe.fr,se+Oe/2,Oe,W+Ze/2,Le),fe.lemans&&tt(v,se+Oe/2,Oe,W,q,fe.lemans),se+=Oe}),P.handle==="grifflos"&&_!=="u"&&!u.noGrip&&U(R,.02,.01,w.steel,0,W+q-.012,X-.004,x,!1),_==="b"){let fe=u.topCut||[0,0];if(U(R-(fe[0]+fe[1])/100,Pt,A+.02,w.top,(fe[0]-fe[1])/200,.9+D-Pt/2,.01,x),u.app){let Oe=new ut;x.add(Oe),Oe.userData.eq={k:u.app==="sp"?"sp":"kf",id:u.id},u.app==="sp"?je(Oe,w,R,A,.9+D):$e(Oe,w,R,u.app==="kfb"||!!P.hobDD,.9+D,-.02,u.hob)}}_==="u"&&u.led!==!1&&U(R-.02,.01,.02,w.led,0,W-.004,X-.05,x,!1)}let ge={us:(x,w,P,u)=>We(x,w,P,u.w/100,.6,{parts:u.v==="tuer"?[.18,.82]:[.25,.375,.375],vertical:!1}),sp:(x,w,P,u)=>{We(x,w,P,u.w/100,.6,{parts:[1]}),je(x,w,u.w/100,.6)},kf:(x,w,P,u)=>{if(u.v==="ofen"){let v=u.w/100;We(x,w,P,v,.6,{parts:[.2,.8]});let _=.9-Pt-pt;U(v-.05,_*.8-.1,.022,w.glass,0,pt+_*.8/2,.3,x),U(v*.8,.018,.03,w.steel,0,pt+_*.8-.06,.32,x),$e(x,w,v,!1);return}We(x,w,P,u.w/100,.6,{parts:[.25,.375,.375]}),$e(x,w,u.w/100,u.v!=="normal")},gs:(x,w,P,u)=>We(x,w,P,u.w/100,.6,{parts:[1],noHandle:P.handle==="grifflos"}),ec:(x,w,P,u)=>We(x,w,P,u.w/100,.6,{parts:[.18,.82]}),hs:(x,w,P,u)=>{let v=u.w/100,_=.6,R=Og-pt;U(v-Ze,R,_,w.carcass,0,pt+R/2,-.01,x),U(v,pt,_-.06,w.plinth,0,pt/2,-.03,x);let A=_/2;u.v==="backofen"||u.v==="dampf"?(Ue(x,w,v,0,pt,.7,A,[.5,.5],P),U(v-.04,.58,.022,w.glass,0,pt+.7+.3,A,x),U(v*.8,.02,.03,w.steel,0,pt+.7+.55,A+.02,x),u.v==="dampf"?(U(v-.04,.44,.022,w.glass,0,pt+1.32+.22,A,x),Ue(x,w,v,0,pt+1.78,R-1.78,A,[1],P,{vertical:!0,vpos:["bottom"],hl:.2})):Ue(x,w,v,0,pt+1.32,R-1.32,A,[1],P,{vertical:!0,vpos:["bottom"],hl:.26})):u.v==="kuehl"?Ue(x,w,v,0,pt,R,A,[.6,.4],P,{vertical:!0,side:-1,vpos:["bottom","top"]}):Ue(x,w,v,0,pt,R,A,[.5,.5],P,{vertical:!0,vpos:["bottom","top"]})},kfr:(x,w,P,u)=>{let v=u.w/100,_=.7,R=1.78;U(v-.01,R,_-.02,w.fridge,0,R/2,0,x),U(.004,R-.02,.02,w.black,0,R/2,_/2,x),U(.02,.7,.04,w.steel,-.06,1.1,_/2+.03,x),U(.02,.7,.04,w.steel,.06,1.1,_/2+.03,x),U(.18,.3,.01,w.black,-.22,1.15,_/2+.001,x)},ws:(x,w,P,u)=>{let v=u.w/100,_=.35;if(u.v==="offen"){[0,.36,.72].forEach(R=>U(v-.01,.025,_-.02,w.F,0,_n+R+.012,0,x)),U(.025,pn,_-.02,w.F,-v/2+.012,_n+pn/2,0,x),U(.025,pn,_-.02,w.F,v/2-.012,_n+pn/2,0,x);return}U(v-Ze,pn,_,w.carcass,0,_n+pn/2,0,x),u.v==="glas"?(U(v-Ze*2,pn-Ze,.02,w.glassClear,0,_n+pn/2,_/2+.005,x),U(v-.04,.015,_-.04,w.inner,0,_n+pn/2,0,x)):U(v-Ze*2,pn-Ze,.02,w.FA,0,_n+pn/2,_/2+.005,x),P.handle!=="grifflos"&&u.v!=="glas"&&U(.016,.2,.025,w.handle,v/2-.055,_n+.06+.1,_/2+.025,x),U(v-.02,.01,.02,w.led,0,_n-.004,_/2-.05,x,!1)},ns:(x,w,P,u)=>{let v=u.w/100,_=(u.h||55)/100,R=((u.ah||90)-90)/100;if(_<=.01)return;x.userData.eq={k:"bs",wall:u.wall};let A=P.back==="platte"?w.top:P.back==="fliese"?w.tile:P.back==="glas"?w.backGlass:P.back==="dibond"?w.backDibond:P.back==="holz"?w.backWood:null;if(P.back==="motiv")if(Qe&&u.nW){let D=Qe.image,W=u.nW/55,q=D.width/D.height,X=1,j=1;q>W?X=W/q:j=q/W;let Q=Qe.clone();Q.repeat.set(u.w/u.nW*X,_/.55*j),Q.offset.set((1-X)/2+u.nx/u.nW*X,(1-j)/2),Q.needsUpdate=!0,A=new Ve({map:Q,roughness:.07,metalness:.05,envMapIntensity:1.1})}else A=w.backGlass;if(A&&P.backLed&&V==="abend"){let D=A;A=D.map&&P.back==="motiv"?D:E("nsg"+Fe.k,()=>D.clone()),A.emissive=new rt("#ffd49a"),A.emissiveIntensity=P.back==="motiv"?.5:.32,D.map&&(A.emissiveMap=D.map)}if(A&&U(v,_,.012,A,0,.9+R+_/2,0,x,!1),P.backLed&&_>.3&&(U(v,.008,.012,w.led,0,.9+R+_-.006,.014,x,!1),x.userData.led=.9+R+_-.03),!A){let D=U(v,_,.004,E("m_inv",()=>new Zt({visible:!1})),0,.9+R+_/2,-.004,x,!1);D.castShadow=!1}},hb:(x,w,P,u)=>{let v=u.w/100,_=u.v||"schraeg",R=-.25;if(x.userData.eq={k:"dh",id:u.id,wall:u.wall},_==="esse"){U(.3,.9,.24,w.steel,0,2.15,R+.12,x),U(v,.05,.5,w.steel,0,1.6,0,x);let D=new ut;D.position.set(0,1.775,R+.25),D.scale.set(1,1,.5/v),x.add(D);let W=new Je(E("pyr",()=>new Ut(.24,.7071,.3,4,1)),w.steel);W.rotation.y=Math.PI/4,W.scale.set(v,1,v),W.castShadow=!0,D.add(W);return}if(_==="flach"){U(v-.004,.72,.33,w.carcass,0,1.45+.36,R+.165,x),_e({s:P,M:w},x,v-.006,.7,w.F,0,1.45+.37,R+.34),U(v-.02,.03,.3,w.steel,0,1.45-.012,R+.2,x),U(v-.06,.006,.004,w.black,0,1.45-.02,R+.352,x,!1);return}if(_==="decke"){U(Math.max(.9,v+.1),.05,.6,E("m_ceil",()=>new Ve({color:"#eef0f1",roughness:.4})),0,2.575,.05,x,!1),U(Math.max(.9,v+.1)-.12,.006,.44,E("m_grille",()=>new Ve({map:ze(),roughness:.45,metalness:.6})),0,2.548,.05,x,!1);return}U(.28,.66,.22,w.steel,0,2.27,R+.11,x),U(v*.96,.2,.22,w.steel,0,1.94,R+.11,x);let A=U(v,.54,.022,w.black,0,1.83,R+.33,x);A.rotation.x=-.64,U(v,.02,.05,w.steel,0,1.6,R+.48,x)},wg:(x,w,P,u)=>{let v=(u.h||90)/100;x.userData.eq={k:"wg",wall:u.wall},U(.025,v,.62,u.dekor==="front"?w.F:w.top,0,v/2,0,x)},rg:(x,w,P,u)=>{let v=u.w/100;[0,.38].forEach(_=>U(v,.04,.26,w.top,0,1.5+_,0,x))},in:(x,w,P,u)=>{let v=u.w/100,_=(u.d||100)/100,R=_-.3,A=-_/2+R/2,D=Math.max(2,Math.round(v/.6)),W=v/D;for(let G=0;G<D;G++){let J=-v/2+W*G+W/2,se=new ut;se.position.set(J,0,A),We(se,w,P,W,R,{noTop:!0,parts:u.v==="spuele"&&G===Math.floor(D/2)?[1]:[.25,.375,.375]}),x.add(se)}let q=u.dekor==="front"?w.F:w.top;U(v+.08,Pt,_,w.top,0,.9-Pt/2,0,x),[-1,1].forEach(G=>{let J=new ut;J.userData.eq={k:"wg"},x.add(J),U(.04,.9-Pt,_,q,G*(v/2+.02),(.9-Pt)/2,0,J)});let X=u.ih||"mulde";if(u.v==="kochfeld"){let G=new ut;if(G.position.set(0,0,A+.05),G.userData.eq={k:"isl"},$e(G,w,.8,X==="mulde",.9,-.02,u.hob),x.add(G),X==="insel"){let J=new ut;J.position.set(0,0,A+.03),J.userData.eq={k:"isl"},U(.9,.09,.6,w.steel,0,1.68,0,J),U(.32,.86,.28,w.steel,0,2.17,0,J),U(.86,.006,.54,E("m_grille",()=>new Ve({map:ze(),roughness:.45,metalness:.6})),0,1.632,0,J,!1),x.add(J)}if(X==="decke"){let J=new ut;J.position.set(0,0,A+.03),J.userData.eq={k:"isl"},U(1,.05,.6,E("m_ceil",()=>new Ve({color:"#eef0f1",roughness:.4})),0,2.575,0,J,!1),U(.88,.006,.46,E("m_grille",()=>new Ve({map:ze(),roughness:.45,metalness:.6})),0,2.548,0,J,!1),x.add(J)}}let j=u.v==="kochfeld"&&X!=="mulde";if(u.v==="spuele"){let G=new ut;G.position.set((Math.floor(D/2)+.5)*W-v/2,0,A+.05),je(G,w,W,R+.3),x.add(G)}let Q=Math.max(2,Math.floor(v/.55));for(let G=0;G<Q;G++){let J=-v/2+v/(Q+1)*(G+1),se=_/2+.22,fe=new Je(E("leg",()=>new Ut(.02,.02,.62,12)),w.stool);fe.position.set(J,.31,se),fe.castShadow=!0,x.add(fe);let Oe=new Je(E("seatg",()=>new Ut(.18,.17,.05,24)),w.seat);Oe.position.set(J,.64,se),Oe.castShadow=!0,x.add(Oe)}for(let G=0;G<3;G++){if(j&&(G===1||v<1.6))continue;let J=j?(G===0?-1:1)*(v/2-.22):-v/2+v/4*(G+1),se=new Je(E("lamp",()=>new Ar(.12,.22,24,1,!0)),w.stool);se.position.set(J,1.82,0),x.add(se);let fe=new Je(E("bulb",()=>new Lr(.04,12,12)),w.glow);fe.position.set(J,1.74,0),x.add(fe);let Oe=new Je(E("cord",()=>new Ut(.004,.004,.7,6)),w.stool);Oe.position.set(J,2.28,0),x.add(Oe)}},th:(x,w,P,u)=>{let v=u.w/100,_=(u.d||40)/100;U(v,1.06,.06,w.FA,0,.53,-_/2+.05,x),U(v+.04,Pt,_+.04,w.top,0,1.08,0,x);let R=Math.max(2,Math.floor(v/.55));for(let A=0;A<R;A++){let D=-v/2+v/(R+1)*(A+1),W=_/2+.22,q=new Je(E("leg2",()=>new Ut(.02,.02,.78,12)),w.stool);q.position.set(D,.39,W),x.add(q);let X=new Je(E("seatg",()=>new Ut(.18,.17,.05,24)),w.seat);X.position.set(D,.8,W),X.castShadow=!0,x.add(X)}}};function Re(x){let w=(x.d||(x.kind==="u"?35:60))/100,P=x.w/100,u=0,v;return x.kind==="u"?(u=(x.y0||145)/100,v=u+(x.h||72)/100):x.kind==="t"?v=(x.h||216)/100:v=.9+((x.ah||90)-90)/100,[P+.02,v-u+.02,w+.04,(u+v)/2]}function Se(x){let w=x.userData.hb;w&&(he.scale.set(w[0],w[1],w[2]),he.position.set(0,w[3],.005),x.add(he))}function ke(x){x=x==null?null:String(x),x!==Te&&(Te=x,he.parent&&he.parent.remove(he),x!=null&&$[x]?Se($[x]):Te=null,m())}function ot(x){for(let w=ne.length-1;w>=0;w--){let P=ne[w];if(x<P.s)continue;let u=Math.min(1,(x-P.s)/P.d);if(P.kind==="out"){let _=u*u,R=Math.max(.001,1-_);P.g.scale.setScalar(R),P.g.position.y=P.y0+P.yc*(1-R)+.12*_,u>=1&&(P.g.parent&&P.g.parent.remove(P.g),ne.splice(w,1));continue}let v=1-Math.pow(1-u,3);if(P.g.position.lerpVectors(P.p0,P.p1,v),P.kind==="in"){let _=.88+.12*v;P.g.scale.setScalar(_),P.g.position.y+=P.yc*(1-_)}u>=1&&(P.g.position.copy(P.p1),P.g.scale.setScalar(1),ne.splice(w,1))}return!0}function ct(x){let w=x.userData.st,P=Io(w.c);w.anims.forEach(u=>{let v=u.b+u.to*(u.ez?u.ez(w.c,w.ez):P);u.k==="rx"?u.o.rotation.x=v:u.k==="ry"?u.o.rotation.y=v:u.k==="px"?u.o.position.x=v:u.k==="py"?u.o.position.y=v:u.o.position.z=v}),w.hide.forEach(u=>{u.visible=w.c>.001})}let Qe=null,we=null;function H(x){let w=x.style,P=x.room,u=Fe(w);(x.motif||null)!==we&&(we=x.motif||null,Qe&&Qe.dispose(),Qe=we?new ms(we):null,Qe&&(Qe.colorSpace=Tt,Qe.anisotropy=8));let v=$,_={};for(let G in v){let J=v[G];_[G]={p:J.position.clone(),ry:J.rotation.y,g:J}}for(let G=ne.length-1;G>=0;G--)ne[G].kind!=="out"&&ne.splice(G,1);he.parent&&he.parent.remove(he),te&&K.remove(te),te=new ut,K.add(te),$={};let R=P.w/100,A=P.d/100,D=2.6;if(t){let G=new Je(new Ln(R+6,A+6),E("shadowcatch",()=>new Dr({opacity:.34})));G.rotation.x=-Math.PI/2,G.position.set(R/2,0,A/2),G.receiveShadow=!0,te.add(G)}else{let G=new Je(new Ln(R+4,A+4),u.floor);G.rotation.x=-Math.PI/2,G.position.set(R/2,0,A/2),G.receiveShadow=!0,te.add(G)}let W=t?{}:P.walls||{N:1,E:1,S:1,W:1},q={N:[R,R/2,0,0],S:[R,R/2,A,Math.PI],W:[A,0,A/2,Math.PI/2],E:[A,R,A/2,-Math.PI/2]};Z={};for(let G in q){if(!W[G])continue;let[J,se,fe,Oe]=q[G],Le=new ut;Le.userData={p:new F(se,0,fe),n:{N:[0,1],S:[0,-1],W:[1,0],E:[-1,0]}[G]},Z[G]=Le,te.add(Le);let ce=new Je(new Ln(J,D),u.wall);ce.position.set(se,D/2,fe),ce.rotation.y=Oe,ce.receiveShadow=!0,Le.add(ce)}(x.open||[]).forEach(G=>{if(!W[G.wall])return;let[J,se,fe,Oe]=q[G.wall],Le=new ut;Le.rotation.y=Oe;let ce=G.s/100+G.w/200,et={N:[ce,0],S:[R-ce,A],W:[0,A-ce],E:[R,ce]}[G.wall];Le.position.set(et[0],0,et[1]);let Ne=G.w/100;if(G.t==="fenster"){let st=(G.y||100)/100,Ke=(G.h||120)/100,Xe=new Je(E("pane",()=>new Ln(1,1)),u.sky);Xe.scale.set(Ne,Ke,1),Xe.position.set(0,st+Ke/2,.003),Le.add(Xe),U(Ne+.08,.06,.06,u.frame,0,st,.03,Le,!1),U(Ne+.08,.06,.06,u.frame,0,st+Ke,.03,Le,!1),U(.06,Ke,.06,u.frame,-Ne/2,st+Ke/2,.03,Le,!1),U(.06,Ke,.06,u.frame,Ne/2,st+Ke/2,.03,Le,!1),Ne>.9&&U(.04,Ke,.04,u.frame,0,st+Ke/2,.03,Le,!1),U(Ne+.1,.03,.12,u.frame,0,st-.015,.06,Le,!1)}else U(Ne,2.05,.01,G.t==="durchgang"?u.plinth:u.door,0,2.05/2,.006,Le,!1),U(Ne+.1,.06,.05,u.frame,0,2.05+.03,.025,Le,!1),U(.05,2.05,.05,u.frame,-Ne/2-.025,2.05/2,.025,Le,!1),U(.05,2.05,.05,u.frame,Ne/2+.025,2.05/2,.025,Le,!1),G.t==="tuer"&&U(.12,.02,.04,u.steel,Ne/2-.1,1.05,.04,Le);Z[G.wall].add(Le)});let X=[];x.items.forEach(G=>{let J=new ut;if(G.t==="cab"){let se={g:J,M:u,s:w,anims:[],hide:[]};N(J,u,w,G,se),(se.anims.length||G.id!=null)&&(J.userData.st={c:0,t:0,go:0,anims:se.anims,hide:se.hide},J.userData.pid=G.id,J.userData.label=G.label||"",J.userData.wcm=G.w,J.userData.hb=Re(G),G.id!=null&&($[G.id]=J))}else{let se=ge[G.t];if(!se)return;se(J,u,w,G)}J.position.set(G.x/100,0,G.z/100),J.rotation.y=(G.r||0)*Math.PI/180,te.add(J),G.t==="ns"&&J.userData.led&&(J.updateMatrixWorld(),X.unshift(J.localToWorld(new F(0,J.userData.led,.1)))),(G.t==="ws"&&G.v!=="offen"||G.t==="cab"&&G.kind==="u"&&G.led!==!1)&&(J.updateMatrixWorld(),X.push(J.localToWorld(new F(0,(G.t==="cab"?(G.y0||145)/100:_n)-.05,.06))))});for(let G in $){let J=$[G],se=J.userData.st;se.t=se.c=re||le.has(String(G))?1:0,ct(J)}if(!t&&!bs){let G=Object.keys($),J=Object.keys(_),se=performance.now(),fe=G.filter(ce=>!_[ce]),Oe=J.filter(ce=>!$[ce]),Le=fe.filter(ce=>Oe.some(et=>_[et].p.distanceTo($[ce].position)<.01&&_[et].g.userData.wcm===$[ce].userData.wcm));if(Le.length){let ce=new Set(Le);Oe=Oe.filter(et=>!Le.some(Ne=>_[et].p.distanceTo($[Ne].position)<.01)),fe=fe.filter(et=>!ce.has(et))}J.length&&fe.length<=3&&Oe.length<=3&&fe.length<Math.max(2,G.length/2)&&(fe.forEach((ce,et)=>{let Ne=$[ce],st=Ne.position.clone(),Ke=Ne.rotation.y,Xe=Ne.userData.hb?Ne.userData.hb[3]:.5,nt=st.clone().add(new F(Math.sin(Ke)*.55,.18,Math.cos(Ke)*.55));Ne.position.copy(nt),Ne.scale.setScalar(.88),ne.push({kind:"in",g:Ne,p0:nt,p1:st,yc:Xe,s:se+et*70,d:620})}),G.forEach(ce=>{let et=_[ce];if(!et)return;let Ne=$[ce];if(Math.abs(et.ry-Ne.rotation.y)>.01||et.p.distanceTo(Ne.position)<.002||et.p.distanceTo(Ne.position)>3)return;let st=Ne.position.clone();Ne.position.copy(et.p),ne.push({kind:"mv",g:Ne,p0:et.p.clone(),p1:st,yc:0,s:se,d:460})}),Oe.forEach(ce=>{let et=_[ce].g;et&&(K.add(et),ne.push({kind:"out",g:et,y0:et.position.y,yc:et.userData.hb?et.userData.hb[3]:.5,s:se,d:420}))}))}if(Te!=null&&$[Te]?Se($[Te]):Te=null,V==="abend"){let G=new In("#ffe2c0",26,0,2);G.position.set(R/2,2.5,A/2+.3),te.add(G);let J=new In("#ffcf96",10,0,2);if(J.position.set(R/2,1.9,A-.4),te.add(J),X.slice(0,10).forEach(se=>{let fe=new In("#ffe4b8",3.2,1.8,2);fe.position.copy(se),te.add(fe)}),x.items.some(se=>se.t==="in")){let se=x.items.find(Oe=>Oe.t==="in"),fe=new In("#ffd09a",2.5,2.5,2);fe.position.set(se.x/100,1.7,se.z/100),te.add(fe)}}B();let j=P.w+"x"+P.d;k={w:R,d:A},t?C.position.set(R/2+1.2,6,A/2+4):C.position.set(R/2-3,7,A/2+5),C.target.position.set(R/2,0,A/2);let Q=Math.max(R,A)/2+1.5;Object.assign(C.shadow.camera,{left:-Q,right:Q,top:Q,bottom:-Q}),C.shadow.camera.updateProjectionMatrix(),j!==ve&&(ve=j,a&&(a.target.set(R/2,.9,A/2),be("perspektive"))),m()}function be(x,w){if(c=x,!a)return;let P=k.w,u=k.d,v={x:P/2,z:u/2},_=Math.max(P,u)*(o.aspect<1?1.75:o.aspect<1.3?1.3:1.05),R={perspektive:[v.x+_*.42,1.5+_*.55,v.z+_*1],front:[v.x,1.6,v.z+_*.95+.8],top:[v.x,_*1.45+2,v.z+.01],ecke:[v.x-_*.5,1.6+_*.45,v.z+_*.95],augen:[v.x,1.62,u-.35]}[x];if(!R){m();return}let A=x==="augen"?new F(v.x,1.25,.3):new F(P/2,.9,u/2),D=new F(...R);if(w&&!bs&&o.position.distanceTo(D)>.05){M={p0:o.position.clone(),p1:D,t0:a.target.clone(),t1:A,s:performance.now(),d:850},m();return}M=null,o.position.copy(D),a.target.copy(A),a.update(),m()}function Ae(x){let w=M,P=Math.min(1,(x-w.s)/w.d),u=Io(P);return o.position.lerpVectors(w.p0,w.p1,u),o.position.y+=Math.sin(Math.PI*u)*.35*Math.min(1,w.p0.distanceTo(w.p1)/3),a.target.lerpVectors(w.t0,w.t1,u),a.update(),P>=1&&(M=null),!0}function Ye(){let x=i.clientWidth,w=i.clientHeight;!x||!w||(n.setSize(x,w,!1),n.domElement.style.width=x+"px",n.domElement.style.height=w+"px",o.aspect=x/w,o.updateProjectionMatrix(),!l&&ve&&a&&be(c),m())}Ye();let Ge=new ResizeObserver(Ye);Ge.observe(i);let dt=!0,ft=new IntersectionObserver(([x])=>{dt=x.isIntersecting,dt&&m()});ft.observe(i);let Et=!1,Lt=0;function mt(x,w){let P=x.userData.st;P.anims.length&&(P.t=w?1:0,bs?(P.c=P.t,ct(x),m()):Et=!0,m())}function Ft(x){let w=Math.min(.08,(x-(Lt||x))/1e3);Lt=x;let P=!1;for(let u in $){let v=$[u],_=v.userData.st;_.c===_.t||!_.anims.length||(P=!0,!(_.go&&x<_.go)&&(_.go=0,_.c<=0&&_.t===1?_.ez=1:_.c>=1&&_.t===0&&(_.ez=0),_.c=_.t>_.c?Math.min(_.t,_.c+w/.65):Math.max(_.t,_.c-w/.55),ct(v)))}return P||(Et=!1,Lt=0),P}let Gt=new Fr,Wn=new Ee;function Yr(x){for(let w=x;w;w=w.parent)if(!w.visible)return!1;return!0}function Xn(x,w){if(!te)return null;let P=n.domElement.getBoundingClientRect();Wn.set((x-P.left)/P.width*2-1,-(w-P.top)/P.height*2+1),Gt.setFromCamera(Wn,o);let u=Gt.intersectObject(te,!0);for(let v of u)if(!(!Yr(v.object)&&!(v.object.material&&v.object.material.visible===!1))){for(let _=v.object;_&&_!==te;_=_.parent){if(_.userData&&_.userData.eq&&e.onEq)return{isEq:1,eq:_.userData.eq};if(_.userData&&_.userData.st)return _}if(!(v.object.isMesh&&v.object.material&&v.object.material.isShadowMaterial))return null}return null}let wt=null,ui={sp:"Sp\xFCle \xB7 antippen f\xFCr Becken & Armatur",kf:"Kochfeld \xB7 antippen f\xFCr Breite & Abzug",dh:"Dunstabzug \xB7 antippen f\xFCr die Bauform",bs:"K\xFCchenr\xFCckwand \xB7 antippen f\xFCr Material & Motiv",isl:"Kochinsel \xB7 antippen f\xFCr Kochfeld & Abzug"};if(!t){wt=document.createElement("div"),wt.setAttribute("aria-hidden","true"),wt.style.cssText="position:absolute;z-index:3;pointer-events:none;padding:6px 10px;border-radius:10px;background:rgba(24,22,20,.86);color:#fff;font:600 12px/1.3 system-ui,sans-serif;white-space:nowrap;opacity:0;transition:opacity .15s;transform:translate(-50%,-130%)",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(wt);let x=null,w=0;n.domElement.addEventListener("pointerdown",_=>{x={x:_.clientX,y:_.clientY,t:performance.now()}});let P=0,u=(_,R)=>{let A=_.userData,D=A.st.anims.length;return(A.label||"")+(A.wcm?" \xB7 "+A.wcm+" cm":"")+(D?R?A.st.t>.5?" \xB7 \xF6ffnet":" \xB7 schlie\xDFt":A.st.t>.5?" \xB7 klicken zum Schlie\xDFen":" \xB7 klicken zum \xD6ffnen":"")},v=(_,R,A,D)=>{let W=i.getBoundingClientRect();wt.textContent=u(_,D),wt.style.left=Math.max(70,Math.min(W.width-70,R-W.left))+"px",wt.style.top=Math.max(40,A-W.top)+"px",wt.style.opacity=1};n.domElement.addEventListener("pointerup",_=>{if(!x)return;let R=Math.hypot(_.clientX-x.x,_.clientY-x.y),A=performance.now()-x.t;if(x=null,R>6||A>600)return;let D=Xn(_.clientX,_.clientY);if(!D)return;if(D.isEq){wt.style.opacity=0,e.onEq(D.eq,_.clientX,_.clientY);return}if(_.pointerType!=="mouse"&&D.userData.label&&(v(D,_.clientX,_.clientY,!0),clearTimeout(P),P=setTimeout(()=>{wt.style.opacity=0,Te===String(D.userData.pid)&&(ke(null),e.onHover&&e.onHover(null))},1400),ke(D.userData.pid),e.onHover&&e.onHover(D.userData.pid)),!D.userData.st.anims.length)return;let W=String(D.userData.pid),q=!(D.userData.st.t>.5);if(q?le.add(W):le.delete(W),!q&&re){re=!1;for(let X in $)X!==W&&$[X].userData.st.t>.5&&le.add(X)}D.userData.st.go=0,mt(D,q),e.onPick&&e.onPick(D.userData.pid,q),_.pointerType==="mouse"&&v(D,_.clientX,_.clientY)}),n.domElement.addEventListener("pointermove",_=>{if(_.pointerType!=="mouse"||_.buttons){wt.style.opacity=0;return}let R=performance.now();if(R-w<60)return;w=R;let A=Xn(_.clientX,_.clientY),D=A&&A.isEq?null:A;if(A&&A.isEq){let q=i.getBoundingClientRect();wt.textContent=ui[A.eq.k]||"",wt.style.left=Math.max(70,Math.min(q.width-70,_.clientX-q.left))+"px",wt.style.top=Math.max(40,_.clientY-q.top)+"px",wt.style.opacity=1,n.domElement.style.cursor="pointer"}else D&&D.userData.label?(v(D,_.clientX,_.clientY),n.domElement.style.cursor=D.userData.st.anims.length?"pointer":""):(wt.style.opacity=0,n.domElement.style.cursor="");let W=D?String(D.userData.pid):null;W!==Te&&(ke(W),e.onHover&&e.onHover(W))}),n.domElement.addEventListener("pointerleave",()=>{wt.style.opacity=0,Te!=null&&(ke(null),e.onHover&&e.onHover(null))})}function Zi(x){if(g=0,f||d||!dt||!i.clientWidth)return;let w=!1;if(M&&Ae(x)&&(w=!0),a&&a.update()&&(w=!0),Et&&Ft(x)&&(w=!0),ne.length&&ot(x)&&(w=!0),w&&(h=!0),h){h=!1,w=!0;for(let P in Z){let u=Z[P].userData;Z[P].visible=(o.position.x-u.p.x)*u.n[0]+(o.position.z-u.p.z)*u.n[1]>0}n.render(s,o)}w?y=0:y++,y<24&&!g&&(g=requestAnimationFrame(Zi))}p();let Ji={set:H,view:x=>{l=!1,be(x,!0)},mood:(x,w)=>{V=x,w?H(w):B()},snapshot:()=>(n.render(s,o),n.domElement.toDataURL("image/jpeg",.9)),toggle:(x,w)=>{let P=$[x];if(!P||!P.userData.st.anims.length)return!1;let u=w==null?!(P.userData.st.t>.5):!!w;return u?le.add(String(x)):le.delete(String(x)),P.userData.st.go=0,mt(P,u),u},openAll:x=>{re=!!x,x||le.clear();let w=new F,P=Object.values($).filter(_=>_.userData.st.anims.length).map(_=>(_.getWorldPosition(w),w.project(o),[w.x,_])).sort((_,R)=>re?_[0]-R[0]:R[0]-_[0]),u=Math.min(.085,1.5/Math.max(1,P.length)),v=performance.now();return P.forEach(([,_],R)=>{let A=_.userData.st;A.go=bs||(re?A.c>.99:A.c<.01)?0:v+R*u*1e3,mt(_,re)}),re},highlight:x=>{t||ke(x)},focus:x=>{let w=$[String(x)];if(!w||!a)return!1;let P=w.userData.hb||[.6,.8,.6,.45],u=w.rotation.y,v=new F(Math.sin(u),0,Math.cos(u)),_=new F(Math.cos(u),0,-Math.sin(u)),R=w.localToWorld(new F(0,P[3],0)).addScaledVector(v,P[3]<.7?.22:.1),A=Math.max(1.9,P[1]*1.1+P[0]*.9)*(o.aspect<1?1.5:1),D=R.clone().addScaledVector(v,A).addScaledVector(_,A*.34);return D.y=Math.max(1.35,R.y+(P[3]<.7?1:.2)),l=!0,bs?(o.position.copy(D),a.target.copy(R),a.update(),m(),!0):(M={p0:o.position.clone(),p1:D,t0:a.target.clone(),t1:R,s:performance.now(),d:900},m(),!0)},isAllOpen:()=>re,pause:x=>{d=!!x,x||m()},busy:()=>!!(g||Et||ne.length||M),camera:o,rig:L,setPhoto:({pos:x,quat:w,fov:P})=>{x&&o.position.set(x[0],x[1],x[2]),w&&o.quaternion.set(w[0],w[1],w[2],w[3]),P&&(o.fov=P),o.updateProjectionMatrix(),o.updateMatrixWorld(),m()},lookAt:(x,w,P)=>{o.position.set(x[0],x[1],x[2]),o.up.set(0,1,0),o.lookAt(w[0],w[1],w[2]),P&&(o.fov=P),o.updateProjectionMatrix(),o.updateMatrixWorld(),m()},setRig:({x=0,z:w=0,ry:P=0,s:u=1,cx:v=0,cz:_=0})=>{L.position.set(v+x,0,_+w),L.rotation.y=P,L.scale.setScalar(u),K.position.set(-v,0,-_),m()},floorAt:(x,w)=>{Wn.set(x,w),Gt.setFromCamera(Wn,o);let P=new F;return Gt.ray.intersectPlane(new jt(new F(0,1,0),0),P)?{x:P.x,z:P.z}:null},exposure:x=>{O=x,n.toneMappingExposure=x,m()},render:()=>{n.render(s,o)},capture:(x,w)=>{let P=n.getPixelRatio(),u=i.clientWidth,v=i.clientHeight;n.setPixelRatio(1),n.setSize(x,w,!1),o.aspect=x/w,o.updateProjectionMatrix(),n.render(s,o);let _=document.createElement("canvas");return _.width=x,_.height=w,_.getContext("2d").drawImage(n.domElement,0,0,x,w),n.setPixelRatio(P),n.setSize(u,v,!1),n.domElement.style.width=u+"px",n.domElement.style.height=v+"px",o.aspect=u/v,o.updateProjectionMatrix(),m(),_},renderHQ:(x=1600,w=1e3)=>{let P=Math.max(1,Math.min(2,4096/Math.max(x,w))),u=C.shadow.mapSize.x,v=D=>{C.shadow.mapSize.set(D,D),C.shadow.map&&(C.shadow.map.dispose(),C.shadow.map=null)};v(4096);let _;try{_=Ji.capture(Math.round(x*P),Math.round(w*P))}finally{v(u)}let R=document.createElement("canvas");R.width=x,R.height=w;let A=R.getContext("2d");return A.imageSmoothingEnabled=!0,A.imageSmoothingQuality="high",A.drawImage(_,0,0,x,w),m(),R},dispose:()=>{f=!0,Ge.disconnect(),ft.disconnect(),a&&a.dispose(),n.dispose();try{n.forceContextLoss()}catch{}n.domElement.remove(),wt&&wt.remove()}};return Ji}window.PelPlanner3D=Fg;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
