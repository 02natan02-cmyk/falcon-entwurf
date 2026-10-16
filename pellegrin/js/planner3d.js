(()=>{var ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zc=0,Oo=1,Jc=2;var _c=1,Eo=2,En=3,Vn=0,kt=1,bn=2;var zn=0,Ii=1,Fo=2,Bo=3,zo=4,Kc=5,Jn=100,$c=101,jc=102,Ho=103,ko=104,Qc=200,eh=201,th=202,nh=203,La=204,Ia=205,ih=206,sh=207,rh=208,ah=209,oh=210,lh=211,ch=212,hh=213,uh=214,dh=0,fh=1,ph=2,sr=3,mh=4,gh=5,_h=6,xh=7,xc=0,yh=1,vh=2,Hn=0,Mh=1,Sh=2,Eh=3,bo=4,bh=5,wh=6;var yc=300,Oi=301,Fi=302,Da=303,Ua=304,Hr=306,os=1e3,ln=1001,Na=1002,Xt=1003,Vo=1004;var Jr=1005;var Qt=1006,Th=1007;var ls=1008;var kn=1009,Ah=1010,Rh=1011,wo=1012,vc=1013,Fn=1014,Bn=1015,cs=1016,Mc=1017,Sc=1018,jn=1020,Ch=1021,cn=1023,Ph=1024,Lh=1025,Qn=1026,Bi=1027,Ih=1028,Ec=1029,Dh=1030,bc=1031,wc=1033,Kr=33776,$r=33777,jr=33778,Qr=33779,Go=35840,Wo=35841,Xo=35842,qo=35843,Tc=36196,Yo=37492,Zo=37496,Jo=37808,Ko=37809,$o=37810,jo=37811,Qo=37812,el=37813,tl=37814,nl=37815,il=37816,sl=37817,rl=37818,al=37819,ol=37820,ll=37821,ea=36492,cl=36494,hl=36495,Uh=36283,ul=36284,dl=36285,fl=36286;var rr=2300,ar=2301,ta=2302,pl=2400,ml=2401,gl=2402;var Ac=3e3,ei=3001,Nh=3200,Oh=3201,Rc=0,Fh=1,en="",At="srgb",Tn="srgb-linear",To="display-p3",kr="display-p3-linear",or="linear",Mt="srgb",lr="rec709",cr="p3";var di=7680;var _l=519,Bh=512,zh=513,Hh=514,Cc=515,kh=516,Vh=517,Gh=518,Wh=519,xl=35044;var yl="300 es",Oa=1035,wn=2e3,hr=2001,mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=1234567,Di=Math.PI/180,hs=180/Math.PI;function li(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function Ao(i,e){return(i%e+e)%e}function Xh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function qh(i,e,t){return i!==e?(t-i)/(e-i):0}function ts(i,e,t){return(1-t)*i+t*e}function Yh(i,e,t,n){return ts(i,e,1-Math.exp(-t*n))}function Zh(i,e=1){return e-Math.abs(Ao(i,e*2)-e)}function Jh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Kh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function $h(i,e){return i+Math.floor(Math.random()*(e-i+1))}function jh(i,e){return i+Math.random()*(e-i)}function Qh(i){return i*(.5-Math.random())}function eu(i){i!==void 0&&(vl=i);let e=vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tu(i){return i*Di}function nu(i){return i*hs}function Fa(i){return(i&i-1)===0&&i!==0}function iu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ur(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function su(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),f=o((e-n)/2),g=r((n-e)/2),v=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*v,l*g,a*c);break;case"YXY":i.set(l*g,a*h,l*v,a*c);break;case"ZYZ":i.set(l*v,l*g,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ri(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Pc={DEG2RAD:Di,RAD2DEG:hs,generateUUID:li,clamp:Ft,euclideanModulo:Ao,mapLinear:Xh,inverseLerp:qh,lerp:ts,damp:Yh,pingpong:Zh,smoothstep:Jh,smootherstep:Kh,randInt:$h,randFloat:jh,randFloatSpread:Qh,seededRandom:eu,degToRad:tu,radToDeg:nu,isPowerOfTwo:Fa,ceilPowerOfTwo:iu,floorPowerOfTwo:ur,setQuaternionFromProperEuler:su,normalize:Gt,denormalize:Ri},Ee=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],g=n[5],v=n[8],S=s[0],m=s[3],p=s[6],C=s[1],E=s[4],L=s[7],V=s[2],B=s[5],N=s[8];return r[0]=o*S+a*C+l*V,r[3]=o*m+a*E+l*B,r[6]=o*p+a*L+l*N,r[1]=c*S+h*C+d*V,r[4]=c*m+h*E+d*B,r[7]=c*p+h*L+d*N,r[2]=f*S+g*C+v*V,r[5]=f*m+g*E+v*B,r[8]=f*p+g*L+v*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,g=c*r-o*l,v=t*d+n*f+s*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let S=1/v;return e[0]=d*S,e[1]=(s*c-h*n)*S,e[2]=(a*n-s*o)*S,e[3]=f*S,e[4]=(h*t-s*l)*S,e[5]=(s*r-a*t)*S,e[6]=g*S,e[7]=(n*l-c*t)*S,e[8]=(o*t-n*r)*S,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},na=new lt;function Lc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ru(){let i=dr("canvas");return i.style.display="block",i}var Ml={};function ns(i){i in Ml||(Ml[i]=!0,console.warn(i))}var Sl=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),El=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[Tn]:{transfer:or,primaries:lr,toReference:i=>i,fromReference:i=>i},[At]:{transfer:Mt,primaries:lr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[kr]:{transfer:or,primaries:cr,toReference:i=>i.applyMatrix3(El),fromReference:i=>i.applyMatrix3(Sl)},[To]:{transfer:Mt,primaries:cr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(El),fromReference:i=>i.applyMatrix3(Sl).convertLinearToSRGB()}},au=new Set([Tn,kr]),_t={enabled:!0,_workingColorSpace:Tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!au.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Rs[e].toReference,s=Rs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===en?or:Rs[i].transfer}};function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var fi,fr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=dr("canvas")),fi.width=e.width,fi.height=e.height;let n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ui(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ou=0,pr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=li(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sa(s[o].image)):r.push(sa(s[o]))}else r=sa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var lu=0,nn=class i extends mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ln,s=ln,r=Qt,o=ls,a=cn,l=kn,c=i.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=li(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?At:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===At?ei:Ac}set encoding(e){ns("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ei?At:en}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=yc;nn.DEFAULT_ANISOTROPY=1;var bt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],g=l[5],v=l[9],S=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+S)<.1&&Math.abs(v+m)<.1&&Math.abs(c+g+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,L=(g+1)/2,V=(p+1)/2,B=(h+f)/4,N=(d+S)/4,ee=(v+m)/4;return E>L&&E>V?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=B/n,r=N/n):L>V?L<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(L),n=B/s,r=ee/s):V<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),n=N/r,s=ee/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-v)*(m-v)+(d-S)*(d-S)+(f-h)*(f-h));return Math.abs(C)<.001&&(C=1),this.x=(m-v)/C,this.y=(d-S)/C,this.z=(f-h)/C,this.w=Math.acos((c+g+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends mn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ns("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ei?At:en),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new pr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},An=class extends Ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},mr=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var za=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],g=r[o+1],v=r[o+2],S=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=g,e[t+2]=v,e[t+3]=S;return}if(d!==S||l!==f||c!==g||h!==v){let m=1-a,p=l*f+c*g+h*v+d*S,C=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let V=Math.sqrt(E),B=Math.atan2(V,p*C);m=Math.sin(m*B)/V,a=Math.sin(a*B)/V}let L=a*C;if(l=l*m+f*L,c=c*m+g*L,h=h*m+v*L,d=d*m+S*L,m===1-a){let V=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=V,c*=V,h*=V,d*=V}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],f=r[o+1],g=r[o+2],v=r[o+3];return e[t]=a*v+h*d+l*g-c*f,e[t+1]=l*v+h*f+c*d-a*g,e[t+2]=c*v+h*g+a*f-l*d,e[t+3]=h*v-a*d-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),f=l(n/2),g=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*g*v,this._y=c*g*d-f*h*v,this._z=c*h*v+f*g*d,this._w=c*h*d-f*g*v;break;case"YXZ":this._x=f*h*d+c*g*v,this._y=c*g*d-f*h*v,this._z=c*h*v-f*g*d,this._w=c*h*d+f*g*v;break;case"ZXY":this._x=f*h*d-c*g*v,this._y=c*g*d+f*h*v,this._z=c*h*v+f*g*d,this._w=c*h*d-f*g*v;break;case"ZYX":this._x=f*h*d-c*g*v,this._y=c*g*d+f*h*v,this._z=c*h*v-f*g*d,this._w=c*h*d+f*g*v;break;case"YZX":this._x=f*h*d+c*g*v,this._y=c*g*d+f*h*v,this._z=c*h*v-f*g*d,this._w=c*h*d-f*g*v;break;case"XZY":this._x=f*h*d-c*g*v,this._y=c*g*d-f*h*v,this._z=c*h*v+f*g*d,this._w=c*h*d+f*g*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){let g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new F,bl=new hn,ti=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Ps.subVectors(this.max,Ki),pi.subVectors(e.a,Ki),mi.subVectors(e.b,Ki),gi.subVectors(e.c,Ki),In.subVectors(mi,pi),Dn.subVectors(gi,mi),Wn.subVectors(pi,gi);let t=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!aa(t,pi,mi,gi,Ps)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,pi,mi,gi,Ps))?!1:(Ls.crossVectors(In,Dn),t=[Ls.x,Ls.y,Ls.z],aa(t,pi,mi,gi,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},xn=[new F,new F,new F,new F,new F,new F,new F,new F],rn=new F,Cs=new ti,pi=new F,mi=new F,gi=new F,In=new F,Dn=new F,Wn=new F,Ki=new F,Ps=new F,Ls=new F,Xn=new F;function aa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xn.fromArray(i,r);let a=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cu=new ti,$i=new F,oa=new F,zi=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$i.subVectors(e,this.center);let t=$i.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($i,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($i.copy(e.center).add(oa)),this.expandByPoint($i.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},yn=new F,la=new F,Is=new F,Un=new F,ca=new F,Ds=new F,ha=new F,ni=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yn.copy(this.origin).addScaledVector(this.direction,t),yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){la.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(la);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Is),a=Un.dot(this.direction),l=-Un.dot(Is),c=Un.lengthSq(),h=Math.abs(1-o*o),d,f,g,v;if(h>0)if(d=o*l-a,f=o*a-l,v=r*h,d>=0)if(f>=-v)if(f<=v){let S=1/h;d*=S,f*=S,g=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;else f<=-v?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c):f<=v?(d=0,f=Math.min(Math.max(-r,-l),r),g=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),g=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(la).addScaledVector(Is,f),g}intersectSphere(e,t){yn.subVectors(e.center,this.origin);let n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,yn)!==null}intersectTriangle(e,t,n,s,r){ca.subVectors(t,e),Ds.subVectors(n,e),ha.crossVectors(ca,Ds);let o=this.direction.dot(ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,e);let l=a*this.direction.dot(Ds.crossVectors(Un,Ds));if(l<0)return null;let c=a*this.direction.dot(ca.cross(Un));if(c<0||l+c>o)return null;let h=-a*Un.dot(ha);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,f,g,v,S,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,f,g,v,S,m)}set(e,t,n,s,r,o,a,l,c,h,d,f,g,v,S,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=g,p[7]=v,p[11]=S,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/_i.setFromMatrixColumn(e,0).length(),r=1/_i.setFromMatrixColumn(e,1).length(),o=1/_i.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,g=o*d,v=a*h,S=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=g+v*c,t[5]=f-S*c,t[9]=-a*l,t[2]=S-f*c,t[6]=v+g*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,g=l*d,v=c*h,S=c*d;t[0]=f+S*a,t[4]=v*a-g,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=g*a-v,t[6]=S+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,g=l*d,v=c*h,S=c*d;t[0]=f-S*a,t[4]=-o*d,t[8]=v+g*a,t[1]=g+v*a,t[5]=o*h,t[9]=S-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,g=o*d,v=a*h,S=a*d;t[0]=l*h,t[4]=v*c-g,t[8]=f*c+S,t[1]=l*d,t[5]=S*c+f,t[9]=g*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,g=o*c,v=a*l,S=a*c;t[0]=l*h,t[4]=S-f*d,t[8]=v*d+g,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*d+v,t[10]=f-S*d}else if(e.order==="XZY"){let f=o*l,g=o*c,v=a*l,S=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+S,t[5]=o*h,t[9]=g*d-v,t[2]=v*d-g,t[6]=a*h,t[10]=S*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hu,e,uu)}lookAt(e,t,n){let s=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Nn.crossVectors(n,Zt),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Nn.crossVectors(n,Zt)),Nn.normalize(),Us.crossVectors(Zt,Nn),s[0]=Nn.x,s[4]=Us.x,s[8]=Zt.x,s[1]=Nn.y,s[5]=Us.y,s[9]=Zt.y,s[2]=Nn.z,s[6]=Us.z,s[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],g=n[13],v=n[2],S=n[6],m=n[10],p=n[14],C=n[3],E=n[7],L=n[11],V=n[15],B=s[0],N=s[4],ee=s[8],b=s[12],P=s[1],J=s[5],te=s[9],ye=s[13],k=s[2],q=s[6],K=s[10],le=s[14],re=s[3],ne=s[7],de=s[11],ce=s[15];return r[0]=o*B+a*P+l*k+c*re,r[4]=o*N+a*J+l*q+c*ne,r[8]=o*ee+a*te+l*K+c*de,r[12]=o*b+a*ye+l*le+c*ce,r[1]=h*B+d*P+f*k+g*re,r[5]=h*N+d*J+f*q+g*ne,r[9]=h*ee+d*te+f*K+g*de,r[13]=h*b+d*ye+f*le+g*ce,r[2]=v*B+S*P+m*k+p*re,r[6]=v*N+S*J+m*q+p*ne,r[10]=v*ee+S*te+m*K+p*de,r[14]=v*b+S*ye+m*le+p*ce,r[3]=C*B+E*P+L*k+V*re,r[7]=C*N+E*J+L*q+V*ne,r[11]=C*ee+E*te+L*K+V*de,r[15]=C*b+E*ye+L*le+V*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],g=e[14],v=e[3],S=e[7],m=e[11],p=e[15];return v*(+r*l*d-s*c*d-r*a*f+n*c*f+s*a*g-n*l*g)+S*(+t*l*g-t*c*f+r*o*f-s*o*g+s*c*h-r*l*h)+m*(+t*c*d-t*a*g-r*o*d+n*o*g+r*a*h-n*c*h)+p*(-s*a*h-t*l*d+t*a*f+s*o*d-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],g=e[11],v=e[12],S=e[13],m=e[14],p=e[15],C=d*m*c-S*f*c+S*l*g-a*m*g-d*l*p+a*f*p,E=v*f*c-h*m*c-v*l*g+o*m*g+h*l*p-o*f*p,L=h*S*c-v*d*c+v*a*g-o*S*g-h*a*p+o*d*p,V=v*d*l-h*S*l-v*a*f+o*S*f+h*a*m-o*d*m,B=t*C+n*E+s*L+r*V;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/B;return e[0]=C*N,e[1]=(S*f*r-d*m*r-S*s*g+n*m*g+d*s*p-n*f*p)*N,e[2]=(a*m*r-S*l*r+S*s*c-n*m*c-a*s*p+n*l*p)*N,e[3]=(d*l*r-a*f*r-d*s*c+n*f*c+a*s*g-n*l*g)*N,e[4]=E*N,e[5]=(h*m*r-v*f*r+v*s*g-t*m*g-h*s*p+t*f*p)*N,e[6]=(v*l*r-o*m*r-v*s*c+t*m*c+o*s*p-t*l*p)*N,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*g+t*l*g)*N,e[8]=L*N,e[9]=(v*d*r-h*S*r-v*n*g+t*S*g+h*n*p-t*d*p)*N,e[10]=(o*S*r-v*a*r+v*n*c-t*S*c-o*n*p+t*a*p)*N,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*g-t*a*g)*N,e[12]=V*N,e[13]=(h*S*s-v*d*s+v*n*f-t*S*f-h*n*m+t*d*m)*N,e[14]=(v*a*s-o*S*s-v*n*l+t*S*l+o*n*m-t*a*m)*N,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*f+t*a*f)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,g=r*h,v=r*d,S=o*h,m=o*d,p=a*d,C=l*c,E=l*h,L=l*d,V=n.x,B=n.y,N=n.z;return s[0]=(1-(S+p))*V,s[1]=(g+L)*V,s[2]=(v-E)*V,s[3]=0,s[4]=(g-L)*B,s[5]=(1-(f+p))*B,s[6]=(m+C)*B,s[7]=0,s[8]=(v+E)*N,s[9]=(m-C)*N,s[10]=(1-(f+S))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=_i.set(s[0],s[1],s[2]).length(),o=_i.set(s[4],s[5],s[6]).length(),a=_i.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);let c=1/r,h=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=wn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(a===wn)g=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===hr)g=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=wn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),f=(t+e)*c,g=(n+s)*h,v,S;if(a===wn)v=(o+r)*d,S=-2*d;else if(a===hr)v=r*d,S=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},_i=new F,an=new Rt,hu=new F(0,0,0),uu=new F(1,1,1),Nn=new F,Us=new F,Zt=new F,wl=new Rt,Tl=new hn,gr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gr.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},du=0,Al=new F,xi=new hn,vn=new Rt,Ns=new F,ji=new F,fu=new F,pu=new hn,Rl=new F(1,0,0),Cl=new F(0,1,0),Pl=new F(0,0,1),mu={type:"added"},gu={type:"removed"},Vt=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:du++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new gr,n=new hn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new lt}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.multiply(xi),this}rotateOnWorldAxis(e,t){return xi.setFromAxisAngle(e,t),this.quaternion.premultiply(xi),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ns.copy(e):Ns.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(ji,Ns,this.up):vn.lookAt(Ns,ji,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),xi.setFromRotationMatrix(vn),this.quaternion.premultiply(xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gu)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,e,fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,pu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),g=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new F(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new F,Mn=new F,ua=new F,Sn=new F,yi=new F,vi=new F,Ll=new F,da=new F,fa=new F,pa=new F,Os=!1,$n=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Mn.subVectors(n,t),ua.subVectors(e,t);let o=on.dot(on),a=on.dot(Mn),l=on.dot(ua),c=Mn.dot(Mn),h=Mn.dot(ua),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,g=(c*l-a*h)*f,v=(o*h-a*l)*f;return r.set(1-g-v,v,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getUV(e,t,n,s,r,o,a,l){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(o,Sn.y),l.addScaledVector(a,Sn.z),l)}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Mn.subVectors(e,t),on.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),on.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;yi.subVectors(s,n),vi.subVectors(r,n),da.subVectors(e,n);let l=yi.dot(da),c=vi.dot(da);if(l<=0&&c<=0)return t.copy(n);fa.subVectors(e,s);let h=yi.dot(fa),d=vi.dot(fa);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(yi,o);pa.subVectors(e,r);let g=yi.dot(pa),v=vi.dot(pa);if(v>=0&&g<=v)return t.copy(r);let S=g*c-l*v;if(S<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(vi,a);let m=h*v-g*d;if(m<=0&&d-h>=0&&g-v>=0)return Ll.subVectors(r,s),a=(d-h)/(d-h+(g-v)),t.copy(s).addScaledVector(Ll,a);let p=1/(m+S+f);return o=S*p,a=f*p,t.copy(n).addScaledVector(yi,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=Ao(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ma(o,r,e+1/3),this.g=ma(o,r,e),this.b=ma(o,r,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=At){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=Ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return _t.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ft(zt.r*255,0,255))*65536+Math.round(Ft(zt.g*255,0,255))*256+Math.round(Ft(zt.b*255,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=At){_t.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,s=zt.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(Fs);let n=ts(On.h,Fs.h,t),s=ts(On.s,Fs.s,t),r=ts(On.l,Fs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new it;it.NAMES=Ic;var _u=0,Rn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_u++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Ii,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_l,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_l&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qt=class extends Rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new F,Bs=new Ee,tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xl&&(e.usage=this.usage),e}};var _r=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xr=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var yt=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var xu=0,jt=new Rt,ga=new Vt,Mi=new F,Jt=new ti,Qi=new ti,Ot=new F,Yt=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?xr:_r)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Jt.min,Qi.min),Jt.expandByPoint(Ot),Ot.addVectors(Jt.max,Qi.max),Jt.expandByPoint(Ot)):(Jt.expandByPoint(Qi.min),Jt.expandByPoint(Qi.max))}Jt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(e,c),Ot.add(Mi)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<a;P++)c[P]=new F,h[P]=new F;let d=new F,f=new F,g=new F,v=new Ee,S=new Ee,m=new Ee,p=new F,C=new F;function E(P,J,te){d.fromArray(s,P*3),f.fromArray(s,J*3),g.fromArray(s,te*3),v.fromArray(o,P*2),S.fromArray(o,J*2),m.fromArray(o,te*2),f.sub(d),g.sub(d),S.sub(v),m.sub(v);let ye=1/(S.x*m.y-m.x*S.y);isFinite(ye)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(g,-S.y).multiplyScalar(ye),C.copy(g).multiplyScalar(S.x).addScaledVector(f,-m.x).multiplyScalar(ye),c[P].add(p),c[J].add(p),c[te].add(p),h[P].add(C),h[J].add(C),h[te].add(C))}let L=this.groups;L.length===0&&(L=[{start:0,count:n.length}]);for(let P=0,J=L.length;P<J;++P){let te=L[P],ye=te.start,k=te.count;for(let q=ye,K=ye+k;q<K;q+=3)E(n[q+0],n[q+1],n[q+2])}let V=new F,B=new F,N=new F,ee=new F;function b(P){N.fromArray(r,P*3),ee.copy(N);let J=c[P];V.copy(J),V.sub(N.multiplyScalar(N.dot(J))).normalize(),B.crossVectors(ee,J);let ye=B.dot(h[P])<0?-1:1;l[P*4]=V.x,l[P*4+1]=V.y,l[P*4+2]=V.z,l[P*4+3]=ye}for(let P=0,J=L.length;P<J;++P){let te=L[P],ye=te.start,k=te.count;for(let q=ye,K=ye+k;q<K;q+=3)b(n[q+0]),b(n[q+1]),b(n[q+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,g=n.count;f<g;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,g=e.count;f<g;f+=3){let v=e.getX(f+0),S=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,S),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=t.count;f<g;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),g=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?g=l[S]*a.data.stride+a.offset:g=l[S]*h;for(let p=0;p<h;p++)f[v++]=c[g++]}return new tn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],g=e(f,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,g=d.length;f<g;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Il=new Rt,qn=new ni,zs=new zi,Dl=new F,Si=new F,Ei=new F,bi=new F,_a=new F,Hs=new F,ks=new Ee,Vs=new Ee,Gs=new Ee,Ul=new F,Nl=new F,Ol=new F,Ws=new F,Xs=new F,je=class extends Vt{constructor(e=new Yt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(_a.fromBufferAttribute(d,e),o?Hs.addScaledVector(_a,h):Hs.addScaledVector(_a.sub(t),h))}t.add(Hs)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),qn.copy(e.ray).recast(e.near),!(zs.containsPoint(qn.origin)===!1&&(qn.intersectSphere(zs,Dl)===null||qn.origin.distanceToSquared(Dl)>(e.far-e.near)**2))&&(Il.copy(r).invert(),qn.copy(e.ray).applyMatrix4(Il),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){let m=f[v],p=o[m.materialIndex],C=Math.max(m.start,g.start),E=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let L=C,V=E;L<V;L+=3){let B=a.getX(L),N=a.getX(L+1),ee=a.getX(L+2);s=qs(this,p,e,n,c,h,d,B,N,ee),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,g.start),S=Math.min(a.count,g.start+g.count);for(let m=v,p=S;m<p;m+=3){let C=a.getX(m),E=a.getX(m+1),L=a.getX(m+2);s=qs(this,o,e,n,c,h,d,C,E,L),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){let m=f[v],p=o[m.materialIndex],C=Math.max(m.start,g.start),E=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let L=C,V=E;L<V;L+=3){let B=L,N=L+1,ee=L+2;s=qs(this,p,e,n,c,h,d,B,N,ee),s&&(s.faceIndex=Math.floor(L/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,g.start),S=Math.min(l.count,g.start+g.count);for(let m=v,p=S;m<p;m+=3){let C=m,E=m+1,L=m+2;s=qs(this,o,e,n,c,h,d,C,E,L),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function yu(i,e,t,n,s,r,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Vn,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xs);return c<t.near||c>t.far?null:{distance:c,point:Xs.clone(),object:i}}function qs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Si),i.getVertexPosition(l,Ei),i.getVertexPosition(c,bi);let h=yu(i,e,t,n,Si,Ei,bi,Ws);if(h){s&&(ks.fromBufferAttribute(s,a),Vs.fromBufferAttribute(s,l),Gs.fromBufferAttribute(s,c),h.uv=$n.getInterpolation(Ws,Si,Ei,bi,ks,Vs,Gs,new Ee)),r&&(ks.fromBufferAttribute(r,a),Vs.fromBufferAttribute(r,l),Gs.fromBufferAttribute(r,c),h.uv1=$n.getInterpolation(Ws,Si,Ei,bi,ks,Vs,Gs,new Ee),h.uv2=h.uv1),o&&(Ul.fromBufferAttribute(o,a),Nl.fromBufferAttribute(o,l),Ol.fromBufferAttribute(o,c),h.normal=$n.getInterpolation(Ws,Si,Ei,bi,Ul,Nl,Ol,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};$n.getNormal(Si,Ei,bi,d.normal),h.face=d}return h}var un=class i extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,g=0;v("z","y","x",-1,-1,n,t,e,o,r,0),v("z","y","x",1,-1,n,t,-e,o,r,1),v("x","z","y",1,1,e,n,t,s,o,2),v("x","z","y",1,-1,e,n,-t,s,o,3),v("x","y","z",1,-1,e,t,n,s,r,4),v("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2));function v(S,m,p,C,E,L,V,B,N,ee,b){let P=L/N,J=V/ee,te=L/2,ye=V/2,k=B/2,q=N+1,K=ee+1,le=0,re=0,ne=new F;for(let de=0;de<K;de++){let ce=de*J-ye;for(let Re=0;Re<q;Re++){let ie=Re*P-te;ne[S]=ie*C,ne[m]=ce*E,ne[p]=k,c.push(ne.x,ne.y,ne.z),ne[S]=0,ne[m]=0,ne[p]=B>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(Re/N),d.push(1-de/ee),le+=1}}for(let de=0;de<ee;de++)for(let ce=0;ce<N;ce++){let Re=f+ce+q*de,ie=f+ce+q*(de+1),I=f+(ce+1)+q*(de+1),_e=f+(ce+1)+q*de;l.push(Re,ie,_e),l.push(ie,I,_e),re+=6}a.addGroup(g,re,b),g+=re,f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=Hi(i[t]);for(let s in n)e[s]=n[s]}return e}function vu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dc(i){return i.getRenderTarget()===null?i.outputColorSpace:_t.workingColorSpace}var Mu={clone:Hi,merge:Wt},Su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Cn=class extends Rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Su,this.fragmentShader=Eu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=vu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yr=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Di*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},wi=-90,Ti=1,Ha=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(wi,Ti,e,t);s.layers=this.layers,this.add(s);let r=new Ht(wi,Ti,e,t);r.layers=this.layers,this.add(r);let o=new Ht(wi,Ti,e,t);o.layers=this.layers,this.add(o);let a=new Ht(wi,Ti,e,t);a.layers=this.layers,this.add(a);let l=new Ht(wi,Ti,e,t);l.layers=this.layers,this.add(l);let c=new Ht(wi,Ti,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=S,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}},vr=class extends nn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Oi,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ka=class extends An{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ns("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ei?At:en),this.texture=new vr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:zn});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===ls&&(t.minFilter=Qt),new Ha(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xa=new F,bu=new F,wu=new lt,Kt=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xa.subVectors(n,t).cross(bu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wu.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yn=new zi,Ys=new F,ds=class{constructor(e=new Kt,t=new Kt,n=new Kt,s=new Kt,r=new Kt,o=new Kt){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],g=s[8],v=s[9],S=s[10],m=s[11],p=s[12],C=s[13],E=s[14],L=s[15];if(n[0].setComponents(l-r,f-c,m-g,L-p).normalize(),n[1].setComponents(l+r,f+c,m+g,L+p).normalize(),n[2].setComponents(l+o,f+h,m+v,L+C).normalize(),n[3].setComponents(l-o,f-h,m-v,L-C).normalize(),n[4].setComponents(l-a,f-d,m-S,L-E).normalize(),t===wn)n[5].setComponents(l+a,f+d,m+S,L+E).normalize();else if(t===hr)n[5].setComponents(a,d,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Tu(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,f=c.usage,g=d.byteLength,v=i.createBuffer();i.bindBuffer(h,v),i.bufferData(h,d,f),c.onUploadCallback();let S;if(d instanceof Float32Array)S=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)S=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else S=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=i.SHORT;else if(d instanceof Uint32Array)S=i.UNSIGNED_INT;else if(d instanceof Int32Array)S=i.INT;else if(d instanceof Int8Array)S=i.BYTE;else if(d instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,d){let f=h.array,g=h._updateRange,v=h.updateRanges;if(i.bindBuffer(d,c),g.count===-1&&v.length===0&&i.bufferSubData(d,0,f),v.length!==0){for(let S=0,m=v.length;S<m;S++){let p=v[S];t?i.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(d,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f,g.offset,g.count):i.bufferSubData(d,g.offset*f.BYTES_PER_ELEMENT,f.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Pn=class i extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,g=[],v=[],S=[],m=[];for(let p=0;p<h;p++){let C=p*f-o;for(let E=0;E<c;E++){let L=E*d-r;v.push(L,-C,0),S.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<a;C++){let E=C+c*p,L=C+c*(p+1),V=C+1+c*(p+1),B=C+1+c*p;g.push(E,L,B),g.push(L,V,B)}this.setIndex(g),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(S,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Au=`#ifdef USE_ALPHAHASH
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
}`,at={alphahash_fragment:Au,alphahash_pars_fragment:Ru,alphamap_fragment:Cu,alphamap_pars_fragment:Pu,alphatest_fragment:Lu,alphatest_pars_fragment:Iu,aomap_fragment:Du,aomap_pars_fragment:Uu,batching_pars_vertex:Nu,batching_vertex:Ou,begin_vertex:Fu,beginnormal_vertex:Bu,bsdfs:zu,iridescence_fragment:Hu,bumpmap_pars_fragment:ku,clipping_planes_fragment:Vu,clipping_planes_pars_fragment:Gu,clipping_planes_pars_vertex:Wu,clipping_planes_vertex:Xu,color_fragment:qu,color_pars_fragment:Yu,color_pars_vertex:Zu,color_vertex:Ju,common:Ku,cube_uv_reflection_fragment:$u,defaultnormal_vertex:ju,displacementmap_pars_vertex:Qu,displacementmap_vertex:ed,emissivemap_fragment:td,emissivemap_pars_fragment:nd,colorspace_fragment:id,colorspace_pars_fragment:sd,envmap_fragment:rd,envmap_common_pars_fragment:ad,envmap_pars_fragment:od,envmap_pars_vertex:ld,envmap_physical_pars_fragment:vd,envmap_vertex:cd,fog_vertex:hd,fog_pars_vertex:ud,fog_fragment:dd,fog_pars_fragment:fd,gradientmap_pars_fragment:pd,lightmap_fragment:md,lightmap_pars_fragment:gd,lights_lambert_fragment:_d,lights_lambert_pars_fragment:xd,lights_pars_begin:yd,lights_toon_fragment:Md,lights_toon_pars_fragment:Sd,lights_phong_fragment:Ed,lights_phong_pars_fragment:bd,lights_physical_fragment:wd,lights_physical_pars_fragment:Td,lights_fragment_begin:Ad,lights_fragment_maps:Rd,lights_fragment_end:Cd,logdepthbuf_fragment:Pd,logdepthbuf_pars_fragment:Ld,logdepthbuf_pars_vertex:Id,logdepthbuf_vertex:Dd,map_fragment:Ud,map_pars_fragment:Nd,map_particle_fragment:Od,map_particle_pars_fragment:Fd,metalnessmap_fragment:Bd,metalnessmap_pars_fragment:zd,morphcolor_vertex:Hd,morphnormal_vertex:kd,morphtarget_pars_vertex:Vd,morphtarget_vertex:Gd,normal_fragment_begin:Wd,normal_fragment_maps:Xd,normal_pars_fragment:qd,normal_pars_vertex:Yd,normal_vertex:Zd,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:Kd,clearcoat_normal_fragment_maps:$d,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Qd,opaque_fragment:ef,packing:tf,premultiplied_alpha_fragment:nf,project_vertex:sf,dithering_fragment:rf,dithering_pars_fragment:af,roughnessmap_fragment:of,roughnessmap_pars_fragment:lf,shadowmap_pars_fragment:cf,shadowmap_pars_vertex:hf,shadowmap_vertex:uf,shadowmask_pars_fragment:df,skinbase_vertex:ff,skinning_pars_vertex:pf,skinning_vertex:mf,skinnormal_vertex:gf,specularmap_fragment:_f,specularmap_pars_fragment:xf,tonemapping_fragment:yf,tonemapping_pars_fragment:vf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:Ef,uv_pars_vertex:bf,uv_vertex:wf,worldpos_vertex:Tf,background_vert:Af,background_frag:Rf,backgroundCube_vert:Cf,backgroundCube_frag:Pf,cube_vert:Lf,cube_frag:If,depth_vert:Df,depth_frag:Uf,distanceRGBA_vert:Nf,distanceRGBA_frag:Of,equirect_vert:Ff,equirect_frag:Bf,linedashed_vert:zf,linedashed_frag:Hf,meshbasic_vert:kf,meshbasic_frag:Vf,meshlambert_vert:Gf,meshlambert_frag:Wf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:Zf,meshphong_vert:Jf,meshphong_frag:Kf,meshphysical_vert:$f,meshphysical_frag:jf,meshtoon_vert:Qf,meshtoon_frag:ep,points_vert:tp,points_frag:np,shadow_vert:ip,shadow_frag:sp,sprite_vert:rp,sprite_frag:ap},Le={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},pn={basic:{uniforms:Wt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Wt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new it(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Wt([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Wt([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Wt([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new it(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Wt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Wt([Le.points,Le.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Wt([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Wt([Le.common,Le.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Wt([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Wt([Le.sprite,Le.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Wt([Le.common,Le.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Wt([Le.lights,Le.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};pn.physical={uniforms:Wt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};var Zs={r:0,b:0,g:0};function op(i,e,t,n,s,r,o){let a=new it(0),l=r===!0?0:1,c,h,d=null,f=0,g=null;function v(m,p){let C=!1,E=p.isScene===!0?p.background:null;E&&E.isTexture&&(E=(p.backgroundBlurriness>0?t:e).get(E)),E===null?S(a,l):E&&E.isColor&&(S(E,1),C=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Hr)?(h===void 0&&(h=new je(new un(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Hi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,B,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=_t.getTransfer(E.colorSpace)!==Mt,(d!==E||f!==E.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,g=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new je(new Pn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Hi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_t.getTransfer(E.colorSpace)!==Mt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,g=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function S(m,p){m.getRGB(Zs,Dc(i)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,S(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,S(a,l)},render:v}}function lp(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(k,q,K,le,re){let ne=!1;if(o){let de=S(le,K,q);c!==de&&(c=de,g(c.object)),ne=p(k,le,K,re),ne&&C(k,le,K,re)}else{let de=q.wireframe===!0;(c.geometry!==le.id||c.program!==K.id||c.wireframe!==de)&&(c.geometry=le.id,c.program=K.id,c.wireframe=de,ne=!0)}re!==null&&t.update(re,i.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,ee(k,q,K,le),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function v(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function S(k,q,K){let le=K.wireframe===!0,re=a[k.id];re===void 0&&(re={},a[k.id]=re);let ne=re[q.id];ne===void 0&&(ne={},re[q.id]=ne);let de=ne[le];return de===void 0&&(de=m(f()),ne[le]=de),de}function m(k){let q=[],K=[],le=[];for(let re=0;re<s;re++)q[re]=0,K[re]=0,le[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:K,attributeDivisors:le,object:k,attributes:{},index:null}}function p(k,q,K,le){let re=c.attributes,ne=q.attributes,de=0,ce=K.getAttributes();for(let Re in ce)if(ce[Re].location>=0){let I=re[Re],_e=ne[Re];if(_e===void 0&&(Re==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),Re==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor)),I===void 0||I.attribute!==_e||_e&&I.data!==_e.data)return!0;de++}return c.attributesNum!==de||c.index!==le}function C(k,q,K,le){let re={},ne=q.attributes,de=0,ce=K.getAttributes();for(let Re in ce)if(ce[Re].location>=0){let I=ne[Re];I===void 0&&(Re==="instanceMatrix"&&k.instanceMatrix&&(I=k.instanceMatrix),Re==="instanceColor"&&k.instanceColor&&(I=k.instanceColor));let _e={};_e.attribute=I,I&&I.data&&(_e.data=I.data),re[Re]=_e,de++}c.attributes=re,c.attributesNum=de,c.index=le}function E(){let k=c.newAttributes;for(let q=0,K=k.length;q<K;q++)k[q]=0}function L(k){V(k,0)}function V(k,q){let K=c.newAttributes,le=c.enabledAttributes,re=c.attributeDivisors;K[k]=1,le[k]===0&&(i.enableVertexAttribArray(k),le[k]=1),re[k]!==q&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,q),re[k]=q)}function B(){let k=c.newAttributes,q=c.enabledAttributes;for(let K=0,le=q.length;K<le;K++)q[K]!==k[K]&&(i.disableVertexAttribArray(K),q[K]=0)}function N(k,q,K,le,re,ne,de){de===!0?i.vertexAttribIPointer(k,q,K,re,ne):i.vertexAttribPointer(k,q,K,le,re,ne)}function ee(k,q,K,le){if(n.isWebGL2===!1&&(k.isInstancedMesh||le.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();let re=le.attributes,ne=K.getAttributes(),de=q.defaultAttributeValues;for(let ce in ne){let Re=ne[ce];if(Re.location>=0){let ie=re[ce];if(ie===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(ie=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(ie=k.instanceColor)),ie!==void 0){let I=ie.normalized,_e=ie.itemSize,Oe=t.get(ie);if(Oe===void 0)continue;let Ne=Oe.buffer,qe=Oe.type,et=Oe.bytesPerElement,ze=n.isWebGL2===!0&&(qe===i.INT||qe===i.UNSIGNED_INT||ie.gpuType===vc);if(ie.isInterleavedBufferAttribute){let Qe=ie.data,z=Qe.stride,Me=ie.offset;if(Qe.isInstancedInterleavedBuffer){for(let oe=0;oe<Re.locationSize;oe++)V(Re.location+oe,Qe.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let oe=0;oe<Re.locationSize;oe++)L(Re.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let oe=0;oe<Re.locationSize;oe++)N(Re.location+oe,_e/Re.locationSize,qe,I,z*et,(Me+_e/Re.locationSize*oe)*et,ze)}else{if(ie.isInstancedBufferAttribute){for(let Qe=0;Qe<Re.locationSize;Qe++)V(Re.location+Qe,ie.meshPerAttribute);k.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Qe=0;Qe<Re.locationSize;Qe++)L(Re.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Qe=0;Qe<Re.locationSize;Qe++)N(Re.location+Qe,_e/Re.locationSize,qe,I,_e*et,_e/Re.locationSize*Qe*et,ze)}}else if(de!==void 0){let I=de[ce];if(I!==void 0)switch(I.length){case 2:i.vertexAttrib2fv(Re.location,I);break;case 3:i.vertexAttrib3fv(Re.location,I);break;case 4:i.vertexAttrib4fv(Re.location,I);break;default:i.vertexAttrib1fv(Re.location,I)}}}}B()}function b(){te();for(let k in a){let q=a[k];for(let K in q){let le=q[K];for(let re in le)v(le[re].object),delete le[re];delete q[K]}delete a[k]}}function P(k){if(a[k.id]===void 0)return;let q=a[k.id];for(let K in q){let le=q[K];for(let re in le)v(le[re].object),delete le[re];delete q[K]}delete a[k.id]}function J(k){for(let q in a){let K=a[q];if(K[k.id]===void 0)continue;let le=K[k.id];for(let re in le)v(le[re].object),delete le[re];delete K[k.id]}}function te(){ye(),h=!0,c!==l&&(c=l,g(c.object))}function ye(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:ye,dispose:b,releaseStatesOfGeometry:P,releaseStatesOfProgram:J,initAttributes:E,enableAttribute:L,disableUnusedAttributes:B}}function cp(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,f){if(f===0)return;let g,v;if(s)g=i,v="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](r,h,d,f),t.update(d,r,f)}function c(h,d,f){if(f===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<f;v++)this.render(h[v],d[v]);else{g.multiDrawArraysWEBGL(r,h,0,d,0,f);let v=0;for(let S=0;S<f;S++)v+=d[S];t.update(v,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function hp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,L=o||e.has("OES_texture_float"),V=E&&L,B=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:v,maxAttributes:S,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:C,vertexTextures:E,floatFragmentTextures:L,floatVertexTextures:V,maxSamples:B}}function up(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Kt,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let g=d.length!==0||f||n!==0||s;return s=f,n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,g){let v=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||v===null||v.length===0||r&&!m)r?h(null):c();else{let C=r?0:n,E=C*4,L=p.clippingState||null;l.value=L,L=h(v,f,E,g);for(let V=0;V!==E;++V)L[V]=t[V];p.clippingState=L,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,g,v){let S=d!==null?d.length:0,m=null;if(S!==0){if(m=l.value,v!==!0||m===null){let p=g+S*4,C=f.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,L=g;E!==S;++E,L+=4)o.copy(d[E]).applyMatrix4(C,a),o.normal.toArray(m,L),m[L+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function dp(i){let e=new WeakMap;function t(o,a){return a===Da?o.mapping=Oi:a===Ua&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Da||a===Ua)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ka(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Mr=class extends yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ci=4,Fl=[.125,.215,.35,.446,.526,.582],Kn=20,ya=new Mr,Bl=new it,va=null,Ma=0,Sa=0,Zn=(1+Math.sqrt(5))/2,Ai=1/Zn,zl=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Zn,Ai),new F(0,Zn,-Ai),new F(Ai,0,Zn),new F(-Ai,0,Zn),new F(Zn,Ai,0),new F(-Zn,Ai,0)],ki=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){va=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va,Ma,Sa),e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Fi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:cs,format:cn,colorSpace:Tn,depthBuffer:!1},s=Hl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fp(r)),this._blurMaterial=pp(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,s){let a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Bl),h.toneMapping=Hn,h.autoClear=!1;let g=new qt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),v=new je(new un,g),S=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,S=!0):(g.color.copy(Bl),S=!0);for(let p=0;p<6;p++){let C=p%3;C===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):C===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let E=this._cubeSize;Js(s,C*E,p>2?E:0,E,E),h.setRenderTarget(s),S&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Oi||e.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ya)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=zl[(s-1)%zl.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new je(this._lodPlanes[s],c),f=c.uniforms,g=this._sizeLods[n]-1,v=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*Kn-1),S=r/v,m=isFinite(r)?1+Math.floor(h*S):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);let p=[],C=0;for(let N=0;N<Kn;++N){let ee=N/S,b=Math.exp(-ee*ee/2);p.push(b),N===0?C+=b:N<m&&(C+=2*b)}for(let N=0;N<p.length;N++)p[N]=p[N]/C;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-n;let L=this._sizeLods[s],V=3*L*(s>E-Ci?s-E+Ci:0),B=4*(this._cubeSize-L);Js(t,V,B,3*L,2*L),l.setRenderTarget(t),l.render(d,ya)}};function fp(i){let e=[],t=[],n=[],s=i,r=i-Ci+1+Fl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ci?l=Fl[o-i+Ci-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,v=6,S=3,m=2,p=1,C=new Float32Array(S*v*g),E=new Float32Array(m*v*g),L=new Float32Array(p*v*g);for(let B=0;B<g;B++){let N=B%3*2/3-1,ee=B>2?0:-1,b=[N,ee,0,N+2/3,ee,0,N+2/3,ee+1,0,N,ee,0,N+2/3,ee+1,0,N,ee+1,0];C.set(b,S*v*B),E.set(f,m*v*B);let P=[B,B,B,B,B,B];L.set(P,p*v*B)}let V=new Yt;V.setAttribute("position",new tn(C,S)),V.setAttribute("uv",new tn(E,m)),V.setAttribute("faceIndex",new tn(L,p)),e.push(V),s>Ci&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Hl(i,e,t){let n=new An(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function pp(i,e,t){let n=new Float32Array(Kn),s=new F(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function kl(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Vl(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function mp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Da||l===Ua,h=l===Oi||l===Fi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new ki(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new ki(i));let f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function gp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function _p(i,e,t,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let v in f.attributes)e.remove(f.attributes[v]);for(let v in f.morphAttributes){let S=f.morphAttributes[v];for(let m=0,p=S.length;m<p;m++)e.remove(S[m])}f.removeEventListener("dispose",o),delete s[f.id];let g=r.get(f);g&&(e.remove(g),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let v in f)e.update(f[v],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let v in g){let S=g[v];for(let m=0,p=S.length;m<p;m++)e.update(S[m],i.ARRAY_BUFFER)}}function c(d){let f=[],g=d.index,v=d.attributes.position,S=0;if(g!==null){let C=g.array;S=g.version;for(let E=0,L=C.length;E<L;E+=3){let V=C[E+0],B=C[E+1],N=C[E+2];f.push(V,B,B,N,N,V)}}else if(v!==void 0){let C=v.array;S=v.version;for(let E=0,L=C.length/3-1;E<L;E+=3){let V=E+0,B=E+1,N=E+2;f.push(V,B,B,N,N,V)}}else return;let m=new(Lc(f)?xr:_r)(f,1);m.version=S;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let f=r.get(d);if(f){let g=d.index;g!==null&&f.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function xp(i,e,t,n){let s=n.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,v){i.drawElements(r,v,a,g*l),t.update(v,r,1)}function d(g,v,S){if(S===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,v,a,g*l,S),t.update(v,r,S)}function f(g,v,S){if(S===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<S;p++)this.render(g[p]/l,v[p]);else{m.multiDrawElementsWEBGL(r,v,0,a,g,0,S);let p=0;for(let C=0;C<S;C++)p+=v[C];t.update(p,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function yp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function vp(i,e){return i[0]-e[0]}function Mp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Sp(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new bt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0,S=r.get(h);if(S===void 0||S.count!==v){let k=function(){te.dispose(),r.delete(h),h.removeEventListener("dispose",k)};S!==void 0&&S.texture.dispose();let C=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,V=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],N=h.morphAttributes.color||[],ee=0;C===!0&&(ee=1),E===!0&&(ee=2),L===!0&&(ee=3);let b=h.attributes.position.count*ee,P=1;b>e.maxTextureSize&&(P=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let J=new Float32Array(b*P*4*v),te=new mr(J,b,P,v);te.type=Bn,te.needsUpdate=!0;let ye=ee*4;for(let q=0;q<v;q++){let K=V[q],le=B[q],re=N[q],ne=b*P*4*q;for(let de=0;de<K.count;de++){let ce=de*ye;C===!0&&(o.fromBufferAttribute(K,de),J[ne+ce+0]=o.x,J[ne+ce+1]=o.y,J[ne+ce+2]=o.z,J[ne+ce+3]=0),E===!0&&(o.fromBufferAttribute(le,de),J[ne+ce+4]=o.x,J[ne+ce+5]=o.y,J[ne+ce+6]=o.z,J[ne+ce+7]=0),L===!0&&(o.fromBufferAttribute(re,de),J[ne+ce+8]=o.x,J[ne+ce+9]=o.y,J[ne+ce+10]=o.z,J[ne+ce+11]=re.itemSize===4?o.w:1)}}S={count:v,texture:te,size:new Ee(b,P)},r.set(h,S),h.addEventListener("dispose",k)}let m=0;for(let C=0;C<f.length;C++)m+=f[C];let p=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",p),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",S.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",S.size)}else{let g=f===void 0?0:f.length,v=n[h.id];if(v===void 0||v.length!==g){v=[];for(let E=0;E<g;E++)v[E]=[E,0];n[h.id]=v}for(let E=0;E<g;E++){let L=v[E];L[0]=E,L[1]=f[E]}v.sort(Mp);for(let E=0;E<8;E++)E<g&&v[E][1]?(a[E][0]=v[E][0],a[E][1]=v[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(vp);let S=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let E=0;E<8;E++){let L=a[E],V=L[0],B=L[1];V!==Number.MAX_SAFE_INTEGER&&B?(S&&h.getAttribute("morphTarget"+E)!==S[V]&&h.setAttribute("morphTarget"+E,S[V]),m&&h.getAttribute("morphNormal"+E)!==m[V]&&h.setAttribute("morphNormal"+E,m[V]),s[E]=B,p+=B):(S&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),m&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),s[E]=0)}let C=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(i,"morphTargetBaseInfluence",C),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Ep(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Sr=class extends nn{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:Qn,h!==Qn&&h!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qn&&(n=Fn),n===void 0&&h===Bi&&(n=jn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Nc=new nn,Oc=new Sr(1,1);Oc.compareFunction=Cc;var Fc=new mr,Bc=new za,zc=new vr,Gl=[],Wl=[],Xl=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function Wi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vr(i,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function bp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Rp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Yl.set(n),i.uniformMatrix2fv(this.addr,!1,Yl),Ut(t,n)}}function Cp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),Ut(t,n)}}function Pp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),Ut(t,n)}}function Lp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ip(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function Np(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Op(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function zp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Oc:Nc;t.setTexture2D(e||r,s)}function Hp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bc,s)}function kp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zc,s)}function Vp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Fc,s)}function Gp(i){switch(i){case 5126:return bp;case 35664:return wp;case 35665:return Tp;case 35666:return Ap;case 35674:return Rp;case 35675:return Cp;case 35676:return Pp;case 5124:case 35670:return Lp;case 35667:case 35671:return Ip;case 35668:case 35672:return Dp;case 35669:case 35673:return Up;case 5125:return Np;case 36294:return Op;case 36295:return Fp;case 36296:return Bp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return kp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Wp(i,e){i.uniform1fv(this.addr,e)}function Xp(i,e){let t=Wi(e,this.size,2);i.uniform2fv(this.addr,t)}function qp(i,e){let t=Wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Yp(i,e){let t=Wi(e,this.size,4);i.uniform4fv(this.addr,t)}function Zp(i,e){let t=Wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Jp(i,e){let t=Wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Kp(i,e){let t=Wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $p(i,e){i.uniform1iv(this.addr,e)}function jp(i,e){i.uniform2iv(this.addr,e)}function Qp(i,e){i.uniform3iv(this.addr,e)}function em(i,e){i.uniform4iv(this.addr,e)}function tm(i,e){i.uniform1uiv(this.addr,e)}function nm(i,e){i.uniform2uiv(this.addr,e)}function im(i,e){i.uniform3uiv(this.addr,e)}function sm(i,e){i.uniform4uiv(this.addr,e)}function rm(i,e,t){let n=this.cache,s=e.length,r=Vr(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Nc,r[o])}function am(i,e,t){let n=this.cache,s=e.length,r=Vr(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bc,r[o])}function om(i,e,t){let n=this.cache,s=e.length,r=Vr(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zc,r[o])}function lm(i,e,t){let n=this.cache,s=e.length,r=Vr(t,s);Dt(n,r)||(i.uniform1iv(this.addr,r),Ut(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Fc,r[o])}function cm(i){switch(i){case 5126:return Wp;case 35664:return Xp;case 35665:return qp;case 35666:return Yp;case 35674:return Zp;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return $p;case 35667:case 35671:return jp;case 35668:case 35672:return Qp;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return rm;case 35679:case 36299:case 36307:return am;case 35680:case 36300:case 36308:case 36293:return om;case 36289:case 36303:case 36311:case 36292:return lm}}var Va=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gp(t.type)}},Ga=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cm(t.type)}},Wa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ea=/(\w+)(\])?(\[|\.)?/g;function Zl(i,e){i.seq.push(e),i.map[e.id]=e}function hm(i,e,t){let n=i.name,s=n.length;for(Ea.lastIndex=0;;){let r=Ea.exec(n),o=Ea.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Zl(t,c===void 0?new Va(a,i,e):new Ga(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Wa(a),Zl(t,d)),t=d}}}var Ni=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);hm(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Jl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var um=37297,dm=0;function fm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function pm(i){let e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i),n;switch(e===t?n="":e===cr&&t===lr?n="LinearDisplayP3ToLinearSRGB":e===lr&&t===cr&&(n="LinearSRGBToLinearDisplayP3"),i){case Tn:case kr:return[n,"LinearTransferOETF"];case At:case To:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kl(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+fm(i.getShaderSource(e),o)}else return s}function mm(i,e){let t=pm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function gm(i,e){let t;switch(e){case Mh:t="Linear";break;case Sh:t="Reinhard";break;case Eh:t="OptimizedCineon";break;case bo:t="ACESFilmic";break;case wh:t="AgX";break;case bh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function _m(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pi).join(`
`)}function xm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Pi).join(`
`)}function ym(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Pi(i){return i!==""}function $l(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(Mm,Em)}var Sm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Em(i,e){let t=at[e];if(t===void 0){let n=Sm.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xa(t)}var bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(i){return i.replace(bm,wm)}function wm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ec(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===_c?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(e="SHADOWMAP_TYPE_VSM"),e}function Am(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Fi:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Fi&&(e="ENVMAP_MODE_REFRACTION"),e}function Cm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case yh:e="ENVMAP_BLENDING_MIX";break;case vh:e="ENVMAP_BLENDING_ADD";break}return e}function Pm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Lm(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Tm(t),c=Am(t),h=Rm(t),d=Cm(t),f=Pm(t),g=t.isWebGL2?"":_m(t),v=xm(t),S=ym(r),m=s.createProgram(),p,C,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Pi).join(`
`),p.length>0&&(p+=`
`),C=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Pi).join(`
`),C.length>0&&(C+=`
`)):(p=[ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pi).join(`
`),C=[g,ec(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?at.tonemapping_pars_fragment:"",t.toneMapping!==Hn?gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,mm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pi).join(`
`)),o=Xa(o),o=$l(o,t),o=jl(o,t),a=Xa(a),a=$l(a,t),a=jl(a,t),o=Ql(o),a=Ql(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);let L=E+p+o,V=E+C+a,B=Jl(s,s.VERTEX_SHADER,L),N=Jl(s,s.FRAGMENT_SHADER,V);s.attachShader(m,B),s.attachShader(m,N),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function ee(te){if(i.debug.checkShaderErrors){let ye=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(B).trim(),q=s.getShaderInfoLog(N).trim(),K=!0,le=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,B,N);else{let re=Kl(s,B,"vertex"),ne=Kl(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ye+`
`+re+`
`+ne)}else ye!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ye):(k===""||q==="")&&(le=!1);le&&(te.diagnostics={runnable:K,programLog:ye,vertexShader:{log:k,prefix:p},fragmentShader:{log:q,prefix:C}})}s.deleteShader(B),s.deleteShader(N),b=new Ni(s,m),P=vm(s,m)}let b;this.getUniforms=function(){return b===void 0&&ee(this),b};let P;this.getAttributes=function(){return P===void 0&&ee(this),P};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=s.getProgramParameter(m,um)),J},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=dm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=B,this.fragmentShader=N,this}var Im=0,qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ya(e),t.set(e,n)),n}},Ya=class{constructor(e){this.id=Im++,this.code=e,this.usedTimes=0}};function Dm(i,e,t,n,s,r,o){let a=new us,l=new qa,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return b===0?"uv":`uv${b}`}function m(b,P,J,te,ye){let k=te.fog,q=ye.geometry,K=b.isMeshStandardMaterial?te.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),re=le&&le.mapping===Hr?le.image.height:null,ne=v[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));let de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ce=de!==void 0?de.length:0,Re=0;q.morphAttributes.position!==void 0&&(Re=1),q.morphAttributes.normal!==void 0&&(Re=2),q.morphAttributes.color!==void 0&&(Re=3);let ie,I,_e,Oe;if(ne){let Ct=pn[ne];ie=Ct.vertexShader,I=Ct.fragmentShader}else ie=b.vertexShader,I=b.fragmentShader,l.update(b),_e=l.getVertexShaderID(b),Oe=l.getFragmentShaderID(b);let Ne=i.getRenderTarget(),qe=ye.isInstancedMesh===!0,et=ye.isBatchedMesh===!0,ze=!!b.map,Qe=!!b.matcap,z=!!le,Me=!!b.aoMap,oe=!!b.lightMap,me=!!b.bumpMap,ae=!!b.normalMap,De=!!b.displacementMap,Ue=!!b.emissiveMap,A=!!b.metalnessMap,w=!!b.roughnessMap,Y=b.anisotropy>0,ge=b.clearcoat>0,he=b.iridescence>0,ue=b.sheen>0,He=b.transmission>0,Ie=Y&&!!b.anisotropyMap,Fe=ge&&!!b.clearcoatMap,Ze=ge&&!!b.clearcoatNormalMap,nt=ge&&!!b.clearcoatRoughnessMap,fe=he&&!!b.iridescenceMap,st=he&&!!b.iridescenceThicknessMap,U=ue&&!!b.sheenColorMap,pe=ue&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,Se=!!b.specularColorMap,ke=!!b.specularIntensityMap,rt=He&&!!b.transmissionMap,ot=He&&!!b.thicknessMap,tt=!!b.gradientMap,we=!!b.alphaMap,H=b.alphaTest>0,Te=!!b.alphaHash,be=!!b.extensions,Ke=!!q.attributes.uv1,Ge=!!q.attributes.uv2,dt=!!q.attributes.uv3,ft=Hn;return b.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(ft=i.toneMapping),{isWebGL2:h,shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:ie,fragmentShader:I,defines:b.defines,customVertexShaderID:_e,customFragmentShaderID:Oe,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:et,instancing:qe,instancingColor:qe&&ye.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ne===null?i.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:Tn,map:ze,matcap:Qe,envMap:z,envMapMode:z&&le.mapping,envMapCubeUVHeight:re,aoMap:Me,lightMap:oe,bumpMap:me,normalMap:ae,displacementMap:f&&De,emissiveMap:Ue,normalMapObjectSpace:ae&&b.normalMapType===Fh,normalMapTangentSpace:ae&&b.normalMapType===Rc,metalnessMap:A,roughnessMap:w,anisotropy:Y,anisotropyMap:Ie,clearcoat:ge,clearcoatMap:Fe,clearcoatNormalMap:Ze,clearcoatRoughnessMap:nt,iridescence:he,iridescenceMap:fe,iridescenceThicknessMap:st,sheen:ue,sheenColorMap:U,sheenRoughnessMap:pe,specularMap:Ce,specularColorMap:Se,specularIntensityMap:ke,transmission:He,transmissionMap:rt,thicknessMap:ot,gradientMap:tt,opaque:b.transparent===!1&&b.blending===Ii,alphaMap:we,alphaTest:H,alphaHash:Te,combine:b.combine,mapUv:ze&&S(b.map.channel),aoMapUv:Me&&S(b.aoMap.channel),lightMapUv:oe&&S(b.lightMap.channel),bumpMapUv:me&&S(b.bumpMap.channel),normalMapUv:ae&&S(b.normalMap.channel),displacementMapUv:De&&S(b.displacementMap.channel),emissiveMapUv:Ue&&S(b.emissiveMap.channel),metalnessMapUv:A&&S(b.metalnessMap.channel),roughnessMapUv:w&&S(b.roughnessMap.channel),anisotropyMapUv:Ie&&S(b.anisotropyMap.channel),clearcoatMapUv:Fe&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:st&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:U&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:pe&&S(b.sheenRoughnessMap.channel),specularMapUv:Ce&&S(b.specularMap.channel),specularColorMapUv:Se&&S(b.specularColorMap.channel),specularIntensityMapUv:ke&&S(b.specularIntensityMap.channel),transmissionMapUv:rt&&S(b.transmissionMap.channel),thicknessMapUv:ot&&S(b.thicknessMap.channel),alphaMapUv:we&&S(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ae||Y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,vertexUv1s:Ke,vertexUv2s:Ge,vertexUv3s:dt,pointsUvs:ye.isPoints===!0&&!!q.attributes.uv&&(ze||we),fog:!!k,useFog:b.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ye.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Re,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&J.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ze&&b.map.isVideoTexture===!0&&_t.getTransfer(b.map.colorSpace)===Mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bn,flipSided:b.side===kt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:be&&b.extensions.derivatives===!0,extensionFragDepth:be&&b.extensions.fragDepth===!0,extensionDrawBuffers:be&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:be&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:be&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){let P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(let J in b.defines)P.push(J),P.push(b.defines[J]);return b.isRawShaderMaterial===!1&&(C(P,b),E(P,b),P.push(i.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function C(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function E(b,P){a.disableAll(),P.isWebGL2&&a.enable(0),P.supportsVertexTextures&&a.enable(1),P.instancing&&a.enable(2),P.instancingColor&&a.enable(3),P.matcap&&a.enable(4),P.envMap&&a.enable(5),P.normalMapObjectSpace&&a.enable(6),P.normalMapTangentSpace&&a.enable(7),P.clearcoat&&a.enable(8),P.iridescence&&a.enable(9),P.alphaTest&&a.enable(10),P.vertexColors&&a.enable(11),P.vertexAlphas&&a.enable(12),P.vertexUv1s&&a.enable(13),P.vertexUv2s&&a.enable(14),P.vertexUv3s&&a.enable(15),P.vertexTangents&&a.enable(16),P.anisotropy&&a.enable(17),P.alphaHash&&a.enable(18),P.batching&&a.enable(19),b.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.skinning&&a.enable(4),P.morphTargets&&a.enable(5),P.morphNormals&&a.enable(6),P.morphColors&&a.enable(7),P.premultipliedAlpha&&a.enable(8),P.shadowMapEnabled&&a.enable(9),P.useLegacyLights&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function L(b){let P=v[b.type],J;if(P){let te=pn[P];J=Mu.clone(te.uniforms)}else J=b.uniforms;return J}function V(b,P){let J;for(let te=0,ye=c.length;te<ye;te++){let k=c[te];if(k.cacheKey===P){J=k,++J.usedTimes;break}}return J===void 0&&(J=new Lm(i,P,b,r),c.push(J)),J}function B(b){if(--b.usedTimes===0){let P=c.indexOf(b);c[P]=c[c.length-1],c.pop(),b.destroy()}}function N(b){l.remove(b)}function ee(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:L,acquireProgram:V,releaseProgram:B,releaseShaderCache:N,programs:c,dispose:ee}}function Um(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function tc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function nc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,f,g,v,S,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:g,groupOrder:v,renderOrder:d.renderOrder,z:S,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=g,p.groupOrder=v,p.renderOrder=d.renderOrder,p.z=S,p.group=m),e++,p}function a(d,f,g,v,S,m){let p=o(d,f,g,v,S,m);g.transmission>0?n.push(p):g.transparent===!0?s.push(p):t.push(p)}function l(d,f,g,v,S,m){let p=o(d,f,g,v,S,m);g.transmission>0?n.unshift(p):g.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Nm),n.length>1&&n.sort(f||tc),s.length>1&&s.sort(f||tc)}function h(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Om(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new nc,i.set(n,[o])):s>=r.length?(o=new nc,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new it};break;case"SpotLight":t={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Bm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var zm=0;function Hm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function km(i,e){let t=new Fm,n=Bm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new F);let r=new F,o=new Rt,a=new Rt;function l(h,d){let f=0,g=0,v=0;for(let te=0;te<9;te++)s.probe[te].set(0,0,0);let S=0,m=0,p=0,C=0,E=0,L=0,V=0,B=0,N=0,ee=0,b=0;h.sort(Hm);let P=d===!0?Math.PI:1;for(let te=0,ye=h.length;te<ye;te++){let k=h[te],q=k.color,K=k.intensity,le=k.distance,re=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)f+=q.r*K*P,g+=q.g*K*P,v+=q.b*K*P;else if(k.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(k.sh.coefficients[ne],K);b++}else if(k.isDirectionalLight){let ne=t.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity*P),k.castShadow){let de=k.shadow,ce=n.get(k);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,s.directionalShadow[S]=ce,s.directionalShadowMap[S]=re,s.directionalShadowMatrix[S]=k.shadow.matrix,L++}s.directional[S]=ne,S++}else if(k.isSpotLight){let ne=t.get(k);ne.position.setFromMatrixPosition(k.matrixWorld),ne.color.copy(q).multiplyScalar(K*P),ne.distance=le,ne.coneCos=Math.cos(k.angle),ne.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ne.decay=k.decay,s.spot[p]=ne;let de=k.shadow;if(k.map&&(s.spotLightMap[N]=k.map,N++,de.updateMatrices(k),k.castShadow&&ee++),s.spotLightMatrix[p]=de.matrix,k.castShadow){let ce=n.get(k);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,s.spotShadow[p]=ce,s.spotShadowMap[p]=re,B++}p++}else if(k.isRectAreaLight){let ne=t.get(k);ne.color.copy(q).multiplyScalar(K),ne.halfWidth.set(k.width*.5,0,0),ne.halfHeight.set(0,k.height*.5,0),s.rectArea[C]=ne,C++}else if(k.isPointLight){let ne=t.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity*P),ne.distance=k.distance,ne.decay=k.decay,k.castShadow){let de=k.shadow,ce=n.get(k);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,ce.shadowCameraNear=de.camera.near,ce.shadowCameraFar=de.camera.far,s.pointShadow[m]=ce,s.pointShadowMap[m]=re,s.pointShadowMatrix[m]=k.shadow.matrix,V++}s.point[m]=ne,m++}else if(k.isHemisphereLight){let ne=t.get(k);ne.skyColor.copy(k.color).multiplyScalar(K*P),ne.groundColor.copy(k.groundColor).multiplyScalar(K*P),s.hemi[E]=ne,E++}}C>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=g,s.ambient[2]=v;let J=s.hash;(J.directionalLength!==S||J.pointLength!==m||J.spotLength!==p||J.rectAreaLength!==C||J.hemiLength!==E||J.numDirectionalShadows!==L||J.numPointShadows!==V||J.numSpotShadows!==B||J.numSpotMaps!==N||J.numLightProbes!==b)&&(s.directional.length=S,s.spot.length=p,s.rectArea.length=C,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=V,s.pointShadowMap.length=V,s.spotShadow.length=B,s.spotShadowMap.length=B,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=V,s.spotLightMatrix.length=B+N-ee,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=ee,s.numLightProbes=b,J.directionalLength=S,J.pointLength=m,J.spotLength=p,J.rectAreaLength=C,J.hemiLength=E,J.numDirectionalShadows=L,J.numPointShadows=V,J.numSpotShadows=B,J.numSpotMaps=N,J.numLightProbes=b,s.version=zm++)}function c(h,d){let f=0,g=0,v=0,S=0,m=0,p=d.matrixWorldInverse;for(let C=0,E=h.length;C<E;C++){let L=h[C];if(L.isDirectionalLight){let V=s.directional[f];V.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),V.direction.sub(r),V.direction.transformDirection(p),f++}else if(L.isSpotLight){let V=s.spot[v];V.position.setFromMatrixPosition(L.matrixWorld),V.position.applyMatrix4(p),V.direction.setFromMatrixPosition(L.matrixWorld),r.setFromMatrixPosition(L.target.matrixWorld),V.direction.sub(r),V.direction.transformDirection(p),v++}else if(L.isRectAreaLight){let V=s.rectArea[S];V.position.setFromMatrixPosition(L.matrixWorld),V.position.applyMatrix4(p),a.identity(),o.copy(L.matrixWorld),o.premultiply(p),a.extractRotation(o),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),V.halfWidth.applyMatrix4(a),V.halfHeight.applyMatrix4(a),S++}else if(L.isPointLight){let V=s.point[g];V.position.setFromMatrixPosition(L.matrixWorld),V.position.applyMatrix4(p),g++}else if(L.isHemisphereLight){let V=s.hemi[m];V.direction.setFromMatrixPosition(L.matrixWorld),V.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:s}}function ic(i,e){let t=new km(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Vm(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new ic(i,e),t.set(r,[l])):o>=a.length?(l=new ic(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Za=class extends Rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends Rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Gm=`void main() {
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
}`;function Xm(i,e,t){let n=new ds,s=new Ee,r=new Ee,o=new bt,a=new Za({depthPacking:Oh}),l=new Ja,c={},h=t.maxTextureSize,d={[Vn]:kt,[kt]:Vn,[bn]:bn},f=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:Gm,fragmentShader:Wm}),g=f.clone();g.defines.HORIZONTAL_PASS=1;let v=new Yt;v.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let S=new je(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let p=this.type;this.render=function(B,N,ee){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||B.length===0)return;let b=i.getRenderTarget(),P=i.getActiveCubeFace(),J=i.getActiveMipmapLevel(),te=i.state;te.setBlending(zn),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);let ye=p!==En&&this.type===En,k=p===En&&this.type!==En;for(let q=0,K=B.length;q<K;q++){let le=B[q],re=le.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);let ne=re.getFrameExtents();if(s.multiply(ne),r.copy(re.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,re.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,re.mapSize.y=r.y)),re.map===null||ye===!0||k===!0){let ce=this.type!==En?{minFilter:Xt,magFilter:Xt}:{};re.map!==null&&re.map.dispose(),re.map=new An(s.x,s.y,ce),re.map.texture.name=le.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();let de=re.getViewportCount();for(let ce=0;ce<de;ce++){let Re=re.getViewport(ce);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),te.viewport(o),re.updateMatrices(le,ce),n=re.getFrustum(),L(N,ee,re.camera,le,this.type)}re.isPointLightShadow!==!0&&this.type===En&&C(re,ee),re.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,P,J)};function C(B,N){let ee=e.update(S);f.defines.VSM_SAMPLES!==B.blurSamples&&(f.defines.VSM_SAMPLES=B.blurSamples,g.defines.VSM_SAMPLES=B.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new An(s.x,s.y)),f.uniforms.shadow_pass.value=B.map.texture,f.uniforms.resolution.value=B.mapSize,f.uniforms.radius.value=B.radius,i.setRenderTarget(B.mapPass),i.clear(),i.renderBufferDirect(N,null,ee,f,S,null),g.uniforms.shadow_pass.value=B.mapPass.texture,g.uniforms.resolution.value=B.mapSize,g.uniforms.radius.value=B.radius,i.setRenderTarget(B.map),i.clear(),i.renderBufferDirect(N,null,ee,g,S,null)}function E(B,N,ee,b){let P=null,J=ee.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(J!==void 0)P=J;else if(P=ee.isPointLight===!0?l:a,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let te=P.uuid,ye=N.uuid,k=c[te];k===void 0&&(k={},c[te]=k);let q=k[ye];q===void 0&&(q=P.clone(),k[ye]=q,N.addEventListener("dispose",V)),P=q}if(P.visible=N.visible,P.wireframe=N.wireframe,b===En?P.side=N.shadowSide!==null?N.shadowSide:N.side:P.side=N.shadowSide!==null?N.shadowSide:d[N.side],P.alphaMap=N.alphaMap,P.alphaTest=N.alphaTest,P.map=N.map,P.clipShadows=N.clipShadows,P.clippingPlanes=N.clippingPlanes,P.clipIntersection=N.clipIntersection,P.displacementMap=N.displacementMap,P.displacementScale=N.displacementScale,P.displacementBias=N.displacementBias,P.wireframeLinewidth=N.wireframeLinewidth,P.linewidth=N.linewidth,ee.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let te=i.properties.get(P);te.light=ee}return P}function L(B,N,ee,b,P){if(B.visible===!1)return;if(B.layers.test(N.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&P===En)&&(!B.frustumCulled||n.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,B.matrixWorld);let ye=e.update(B),k=B.material;if(Array.isArray(k)){let q=ye.groups;for(let K=0,le=q.length;K<le;K++){let re=q[K],ne=k[re.materialIndex];if(ne&&ne.visible){let de=E(B,ne,b,P);B.onBeforeShadow(i,B,N,ee,ye,de,re),i.renderBufferDirect(ee,null,ye,de,B,re),B.onAfterShadow(i,B,N,ee,ye,de,re)}}}else if(k.visible){let q=E(B,k,b,P);B.onBeforeShadow(i,B,N,ee,ye,q,null),i.renderBufferDirect(ee,null,ye,q,B,null),B.onAfterShadow(i,B,N,ee,ye,q,null)}}let te=B.children;for(let ye=0,k=te.length;ye<k;ye++)L(te[ye],N,ee,b,P)}function V(B){B.target.removeEventListener("dispose",V);for(let ee in c){let b=c[ee],P=B.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}function qm(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Te=new bt,be=null,Ke=new bt(0,0,0,0);return{setMask:function(Ge){be!==Ge&&!H&&(i.colorMask(Ge,Ge,Ge,Ge),be=Ge)},setLocked:function(Ge){H=Ge},setClear:function(Ge,dt,ft,Tt,Ct){Ct===!0&&(Ge*=Tt,dt*=Tt,ft*=Tt),Te.set(Ge,dt,ft,Tt),Ke.equals(Te)===!1&&(i.clearColor(Ge,dt,ft,Tt),Ke.copy(Te))},reset:function(){H=!1,be=null,Ke.set(-1,0,0,0)}}}function r(){let H=!1,Te=null,be=null,Ke=null;return{setTest:function(Ge){Ge?et(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Ge){Te!==Ge&&!H&&(i.depthMask(Ge),Te=Ge)},setFunc:function(Ge){if(be!==Ge){switch(Ge){case dh:i.depthFunc(i.NEVER);break;case fh:i.depthFunc(i.ALWAYS);break;case ph:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case mh:i.depthFunc(i.EQUAL);break;case gh:i.depthFunc(i.GEQUAL);break;case _h:i.depthFunc(i.GREATER);break;case xh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Ge}},setLocked:function(Ge){H=Ge},setClear:function(Ge){Ke!==Ge&&(i.clearDepth(Ge),Ke=Ge)},reset:function(){H=!1,Te=null,be=null,Ke=null}}}function o(){let H=!1,Te=null,be=null,Ke=null,Ge=null,dt=null,ft=null,Tt=null,Ct=null;return{setTest:function(mt){H||(mt?et(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!H&&(i.stencilMask(mt),Te=mt)},setFunc:function(mt,It,$t){(be!==mt||Ke!==It||Ge!==$t)&&(i.stencilFunc(mt,It,$t),be=mt,Ke=It,Ge=$t)},setOp:function(mt,It,$t){(dt!==mt||ft!==It||Tt!==$t)&&(i.stencilOp(mt,It,$t),dt=mt,ft=It,Tt=$t)},setLocked:function(mt){H=mt},setClear:function(mt){Ct!==mt&&(i.clearStencil(mt),Ct=mt)},reset:function(){H=!1,Te=null,be=null,Ke=null,Ge=null,dt=null,ft=null,Tt=null,Ct=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},g={},v=new WeakMap,S=[],m=null,p=!1,C=null,E=null,L=null,V=null,B=null,N=null,ee=null,b=new it(0,0,0),P=0,J=!1,te=null,ye=null,k=null,q=null,K=null,le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ne=0,de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(de)[1]),re=ne>=1):de.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),re=ne>=2);let ce=null,Re={},ie=i.getParameter(i.SCISSOR_BOX),I=i.getParameter(i.VIEWPORT),_e=new bt().fromArray(ie),Oe=new bt().fromArray(I);function Ne(H,Te,be,Ke){let Ge=new Uint8Array(4),dt=i.createTexture();i.bindTexture(H,dt),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<be;ft++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Te,0,i.RGBA,1,1,Ke,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Te+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return dt}let qe={};qe[i.TEXTURE_2D]=Ne(i.TEXTURE_2D,i.TEXTURE_2D,1),qe[i.TEXTURE_CUBE_MAP]=Ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(qe[i.TEXTURE_2D_ARRAY]=Ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),qe[i.TEXTURE_3D]=Ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),et(i.DEPTH_TEST),l.setFunc(sr),Ue(!1),A(Oo),et(i.CULL_FACE),ae(zn);function et(H){f[H]!==!0&&(i.enable(H),f[H]=!0)}function ze(H){f[H]!==!1&&(i.disable(H),f[H]=!1)}function Qe(H,Te){return g[H]!==Te?(i.bindFramebuffer(H,Te),g[H]=Te,n&&(H===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Te),H===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Te)),!0):!1}function z(H,Te){let be=S,Ke=!1;if(H)if(be=v.get(Te),be===void 0&&(be=[],v.set(Te,be)),H.isWebGLMultipleRenderTargets){let Ge=H.texture;if(be.length!==Ge.length||be[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,ft=Ge.length;dt<ft;dt++)be[dt]=i.COLOR_ATTACHMENT0+dt;be.length=Ge.length,Ke=!0}}else be[0]!==i.COLOR_ATTACHMENT0&&(be[0]=i.COLOR_ATTACHMENT0,Ke=!0);else be[0]!==i.BACK&&(be[0]=i.BACK,Ke=!0);Ke&&(t.isWebGL2?i.drawBuffers(be):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(be))}function Me(H){return m!==H?(i.useProgram(H),m=H,!0):!1}let oe={[Jn]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};if(n)oe[Ho]=i.MIN,oe[ko]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(oe[Ho]=H.MIN_EXT,oe[ko]=H.MAX_EXT)}let me={[Qc]:i.ZERO,[eh]:i.ONE,[th]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[oh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[ih]:i.DST_ALPHA,[nh]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[sh]:i.ONE_MINUS_DST_ALPHA,[lh]:i.CONSTANT_COLOR,[ch]:i.ONE_MINUS_CONSTANT_COLOR,[hh]:i.CONSTANT_ALPHA,[uh]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(H,Te,be,Ke,Ge,dt,ft,Tt,Ct,mt){if(H===zn){p===!0&&(ze(i.BLEND),p=!1);return}if(p===!1&&(et(i.BLEND),p=!0),H!==Kc){if(H!==C||mt!==J){if((E!==Jn||B!==Jn)&&(i.blendEquation(i.FUNC_ADD),E=Jn,B=Jn),mt)switch(H){case Ii:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.ONE,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ii:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Bo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}L=null,V=null,N=null,ee=null,b.set(0,0,0),P=0,C=H,J=mt}return}Ge=Ge||Te,dt=dt||be,ft=ft||Ke,(Te!==E||Ge!==B)&&(i.blendEquationSeparate(oe[Te],oe[Ge]),E=Te,B=Ge),(be!==L||Ke!==V||dt!==N||ft!==ee)&&(i.blendFuncSeparate(me[be],me[Ke],me[dt],me[ft]),L=be,V=Ke,N=dt,ee=ft),(Tt.equals(b)===!1||Ct!==P)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Ct),b.copy(Tt),P=Ct),C=H,J=!1}function De(H,Te){H.side===bn?ze(i.CULL_FACE):et(i.CULL_FACE);let be=H.side===kt;Te&&(be=!be),Ue(be),H.blending===Ii&&H.transparent===!1?ae(zn):ae(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let Ke=H.stencilWrite;c.setTest(Ke),Ke&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Y(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(H){te!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),te=H)}function A(H){H!==Zc?(et(i.CULL_FACE),H!==ye&&(H===Oo?i.cullFace(i.BACK):H===Jc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),ye=H}function w(H){H!==k&&(re&&i.lineWidth(H),k=H)}function Y(H,Te,be){H?(et(i.POLYGON_OFFSET_FILL),(q!==Te||K!==be)&&(i.polygonOffset(Te,be),q=Te,K=be)):ze(i.POLYGON_OFFSET_FILL)}function ge(H){H?et(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function he(H){H===void 0&&(H=i.TEXTURE0+le-1),ce!==H&&(i.activeTexture(H),ce=H)}function ue(H,Te,be){be===void 0&&(ce===null?be=i.TEXTURE0+le-1:be=ce);let Ke=Re[be];Ke===void 0&&(Ke={type:void 0,texture:void 0},Re[be]=Ke),(Ke.type!==H||Ke.texture!==Te)&&(ce!==be&&(i.activeTexture(be),ce=be),i.bindTexture(H,Te||qe[H]),Ke.type=H,Ke.texture=Te)}function He(){let H=Re[ce];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function nt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function st(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function U(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(H){_e.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),_e.copy(H))}function rt(H){Oe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Oe.copy(H))}function ot(H,Te){let be=d.get(Te);be===void 0&&(be=new WeakMap,d.set(Te,be));let Ke=be.get(H);Ke===void 0&&(Ke=i.getUniformBlockIndex(Te,H.name),be.set(H,Ke))}function tt(H,Te){let Ke=d.get(Te).get(H);h.get(Te)!==Ke&&(i.uniformBlockBinding(Te,Ke,H.__bindingPointIndex),h.set(Te,Ke))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,Re={},g={},v=new WeakMap,S=[],m=null,p=!1,C=null,E=null,L=null,V=null,B=null,N=null,ee=null,b=new it(0,0,0),P=0,J=!1,te=null,ye=null,k=null,q=null,K=null,_e.set(0,0,i.canvas.width,i.canvas.height),Oe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:et,disable:ze,bindFramebuffer:Qe,drawBuffers:z,useProgram:Me,setBlending:ae,setMaterial:De,setFlipSided:Ue,setCullFace:A,setLineWidth:w,setPolygonOffset:Y,setScissorTest:ge,activeTexture:he,bindTexture:ue,unbindTexture:He,compressedTexImage2D:Ie,compressedTexImage3D:Fe,texImage2D:Ce,texImage3D:Se,updateUBOMapping:ot,uniformBlockBinding:tt,texStorage2D:U,texStorage3D:pe,texSubImage2D:Ze,texSubImage3D:nt,compressedTexSubImage2D:fe,compressedTexSubImage3D:st,scissor:ke,viewport:rt,reset:we}}function Ym(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,w){return g?new OffscreenCanvas(A,w):dr("canvas")}function S(A,w,Y,ge){let he=1;if((A.width>ge||A.height>ge)&&(he=ge/Math.max(A.width,A.height)),he<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ue=w?ur:Math.floor,He=ue(he*A.width),Ie=ue(he*A.height);d===void 0&&(d=v(He,Ie));let Fe=Y?v(He,Ie):d;return Fe.width=He,Fe.height=Ie,Fe.getContext("2d").drawImage(A,0,0,He,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+He+"x"+Ie+")."),Fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Fa(A.width)&&Fa(A.height)}function p(A){return a?!1:A.wrapS!==ln||A.wrapT!==ln||A.minFilter!==Xt&&A.minFilter!==Qt}function C(A,w){return A.generateMipmaps&&w&&A.minFilter!==Xt&&A.minFilter!==Qt}function E(A){i.generateMipmap(A)}function L(A,w,Y,ge,he=!1){if(a===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue=w;if(w===i.RED&&(Y===i.FLOAT&&(ue=i.R32F),Y===i.HALF_FLOAT&&(ue=i.R16F),Y===i.UNSIGNED_BYTE&&(ue=i.R8)),w===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(ue=i.R8UI),Y===i.UNSIGNED_SHORT&&(ue=i.R16UI),Y===i.UNSIGNED_INT&&(ue=i.R32UI),Y===i.BYTE&&(ue=i.R8I),Y===i.SHORT&&(ue=i.R16I),Y===i.INT&&(ue=i.R32I)),w===i.RG&&(Y===i.FLOAT&&(ue=i.RG32F),Y===i.HALF_FLOAT&&(ue=i.RG16F),Y===i.UNSIGNED_BYTE&&(ue=i.RG8)),w===i.RGBA){let He=he?or:_t.getTransfer(ge);Y===i.FLOAT&&(ue=i.RGBA32F),Y===i.HALF_FLOAT&&(ue=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(ue=He===Mt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(ue=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(ue=i.RGB5_A1)}return(ue===i.R16F||ue===i.R32F||ue===i.RG16F||ue===i.RG32F||ue===i.RGBA16F||ue===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function V(A,w,Y){return C(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==Qt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function B(A){return A===Xt||A===Vo||A===Jr?i.NEAREST:i.LINEAR}function N(A){let w=A.target;w.removeEventListener("dispose",N),b(w),w.isVideoTexture&&h.delete(w)}function ee(A){let w=A.target;w.removeEventListener("dispose",ee),J(w)}function b(A){let w=n.get(A);if(w.__webglInit===void 0)return;let Y=A.source,ge=f.get(Y);if(ge){let he=ge[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&P(A),Object.keys(ge).length===0&&f.delete(Y)}n.remove(A)}function P(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let Y=A.source,ge=f.get(Y);delete ge[w.__cacheKey],o.memory.textures--}function J(A){let w=A.texture,Y=n.get(A),ge=n.get(w);if(ge.__webglTexture!==void 0&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(Y.__webglFramebuffer[he]))for(let ue=0;ue<Y.__webglFramebuffer[he].length;ue++)i.deleteFramebuffer(Y.__webglFramebuffer[he][ue]);else i.deleteFramebuffer(Y.__webglFramebuffer[he]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[he])}else{if(Array.isArray(Y.__webglFramebuffer))for(let he=0;he<Y.__webglFramebuffer.length;he++)i.deleteFramebuffer(Y.__webglFramebuffer[he]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let he=0;he<Y.__webglColorRenderbuffer.length;he++)Y.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[he]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let he=0,ue=w.length;he<ue;he++){let He=n.get(w[he]);He.__webglTexture&&(i.deleteTexture(He.__webglTexture),o.memory.textures--),n.remove(w[he])}n.remove(w),n.remove(A)}let te=0;function ye(){te=0}function k(){let A=te;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),te+=1,A}function q(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function K(A,w){let Y=n.get(A);if(A.isVideoTexture&&De(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){let ge=A.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(Y,A,w);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+w)}function le(A,w){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){_e(Y,A,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+w)}function re(A,w){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){_e(Y,A,w);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+w)}function ne(A,w){let Y=n.get(A);if(A.version>0&&Y.__version!==A.version){Oe(Y,A,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+w)}let de={[os]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},ce={[Xt]:i.NEAREST,[Vo]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Th]:i.LINEAR_MIPMAP_NEAREST,[ls]:i.LINEAR_MIPMAP_LINEAR},Re={[Bh]:i.NEVER,[Wh]:i.ALWAYS,[zh]:i.LESS,[Cc]:i.LEQUAL,[Hh]:i.EQUAL,[Gh]:i.GEQUAL,[kh]:i.GREATER,[Vh]:i.NOTEQUAL};function ie(A,w,Y){if(Y?(i.texParameteri(A,i.TEXTURE_WRAP_S,de[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,de[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,de[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ce[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ce[w.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==ln||w.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,B(w.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,B(w.minFilter)),w.minFilter!==Xt&&w.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Re[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ge=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Xt||w.minFilter!==Jr&&w.minFilter!==ls||w.type===Bn&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===cs&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,ge.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function I(A,w){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",N));let ge=w.source,he=f.get(ge);he===void 0&&(he={},f.set(ge,he));let ue=q(w);if(ue!==A.__cacheKey){he[ue]===void 0&&(he[ue]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),he[ue].usedTimes++;let He=he[A.__cacheKey];He!==void 0&&(he[A.__cacheKey].usedTimes--,He.usedTimes===0&&P(w)),A.__cacheKey=ue,A.__webglTexture=he[ue].texture}return Y}function _e(A,w,Y){let ge=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=i.TEXTURE_3D);let he=I(A,w),ue=w.source;t.bindTexture(ge,A.__webglTexture,i.TEXTURE0+Y);let He=n.get(ue);if(ue.version!==He.__version||he===!0){t.activeTexture(i.TEXTURE0+Y);let Ie=_t.getPrimaries(_t.workingColorSpace),Fe=w.colorSpace===en?null:_t.getPrimaries(w.colorSpace),Ze=w.colorSpace===en||Ie===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let nt=p(w)&&m(w.image)===!1,fe=S(w.image,nt,!1,s.maxTextureSize);fe=Ue(w,fe);let st=m(fe)||a,U=r.convert(w.format,w.colorSpace),pe=r.convert(w.type),Ce=L(w.internalFormat,U,pe,w.colorSpace,w.isVideoTexture);ie(ge,w,st);let Se,ke=w.mipmaps,rt=a&&w.isVideoTexture!==!0&&Ce!==Tc,ot=He.__version===void 0||he===!0,tt=V(w,fe,st);if(w.isDepthTexture)Ce=i.DEPTH_COMPONENT,a?w.type===Bn?Ce=i.DEPTH_COMPONENT32F:w.type===Fn?Ce=i.DEPTH_COMPONENT24:w.type===jn?Ce=i.DEPTH24_STENCIL8:Ce=i.DEPTH_COMPONENT16:w.type===Bn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Qn&&Ce===i.DEPTH_COMPONENT&&w.type!==wo&&w.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Fn,pe=r.convert(w.type)),w.format===Bi&&Ce===i.DEPTH_COMPONENT&&(Ce=i.DEPTH_STENCIL,w.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=jn,pe=r.convert(w.type))),ot&&(rt?t.texStorage2D(i.TEXTURE_2D,1,Ce,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,U,pe,null));else if(w.isDataTexture)if(ke.length>0&&st){rt&&ot&&t.texStorage2D(i.TEXTURE_2D,tt,Ce,ke[0].width,ke[0].height);for(let we=0,H=ke.length;we<H;we++)Se=ke[we],rt?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,U,pe,Se.data):t.texImage2D(i.TEXTURE_2D,we,Ce,Se.width,Se.height,0,U,pe,Se.data);w.generateMipmaps=!1}else rt?(ot&&t.texStorage2D(i.TEXTURE_2D,tt,Ce,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe.width,fe.height,U,pe,fe.data)):t.texImage2D(i.TEXTURE_2D,0,Ce,fe.width,fe.height,0,U,pe,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Ce,ke[0].width,ke[0].height,fe.depth);for(let we=0,H=ke.length;we<H;we++)Se=ke[we],w.format!==cn?U!==null?rt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Se.width,Se.height,fe.depth,U,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,we,Ce,Se.width,Se.height,fe.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,we,0,0,0,Se.width,Se.height,fe.depth,U,pe,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,we,Ce,Se.width,Se.height,fe.depth,0,U,pe,Se.data)}else{rt&&ot&&t.texStorage2D(i.TEXTURE_2D,tt,Ce,ke[0].width,ke[0].height);for(let we=0,H=ke.length;we<H;we++)Se=ke[we],w.format!==cn?U!==null?rt?t.compressedTexSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,U,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,we,Ce,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?t.texSubImage2D(i.TEXTURE_2D,we,0,0,Se.width,Se.height,U,pe,Se.data):t.texImage2D(i.TEXTURE_2D,we,Ce,Se.width,Se.height,0,U,pe,Se.data)}else if(w.isDataArrayTexture)rt?(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Ce,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,U,pe,fe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,fe.width,fe.height,fe.depth,0,U,pe,fe.data);else if(w.isData3DTexture)rt?(ot&&t.texStorage3D(i.TEXTURE_3D,tt,Ce,fe.width,fe.height,fe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,U,pe,fe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,fe.width,fe.height,fe.depth,0,U,pe,fe.data);else if(w.isFramebufferTexture){if(ot)if(rt)t.texStorage2D(i.TEXTURE_2D,tt,Ce,fe.width,fe.height);else{let we=fe.width,H=fe.height;for(let Te=0;Te<tt;Te++)t.texImage2D(i.TEXTURE_2D,Te,Ce,we,H,0,U,pe,null),we>>=1,H>>=1}}else if(ke.length>0&&st){rt&&ot&&t.texStorage2D(i.TEXTURE_2D,tt,Ce,ke[0].width,ke[0].height);for(let we=0,H=ke.length;we<H;we++)Se=ke[we],rt?t.texSubImage2D(i.TEXTURE_2D,we,0,0,U,pe,Se):t.texImage2D(i.TEXTURE_2D,we,Ce,U,pe,Se);w.generateMipmaps=!1}else rt?(ot&&t.texStorage2D(i.TEXTURE_2D,tt,Ce,fe.width,fe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,U,pe,fe)):t.texImage2D(i.TEXTURE_2D,0,Ce,U,pe,fe);C(w,st)&&E(ge),He.__version=ue.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Oe(A,w,Y){if(w.image.length!==6)return;let ge=I(A,w),he=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+Y);let ue=n.get(he);if(he.version!==ue.__version||ge===!0){t.activeTexture(i.TEXTURE0+Y);let He=_t.getPrimaries(_t.workingColorSpace),Ie=w.colorSpace===en?null:_t.getPrimaries(w.colorSpace),Fe=w.colorSpace===en||He===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let Ze=w.isCompressedTexture||w.image[0].isCompressedTexture,nt=w.image[0]&&w.image[0].isDataTexture,fe=[];for(let we=0;we<6;we++)!Ze&&!nt?fe[we]=S(w.image[we],!1,!0,s.maxCubemapSize):fe[we]=nt?w.image[we].image:w.image[we],fe[we]=Ue(w,fe[we]);let st=fe[0],U=m(st)||a,pe=r.convert(w.format,w.colorSpace),Ce=r.convert(w.type),Se=L(w.internalFormat,pe,Ce,w.colorSpace),ke=a&&w.isVideoTexture!==!0,rt=ue.__version===void 0||ge===!0,ot=V(w,st,U);ie(i.TEXTURE_CUBE_MAP,w,U);let tt;if(Ze){ke&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Se,st.width,st.height);for(let we=0;we<6;we++){tt=fe[we].mipmaps;for(let H=0;H<tt.length;H++){let Te=tt[H];w.format!==cn?pe!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,Te.width,Te.height,pe,Te.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Se,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,Te.width,Te.height,pe,Ce,Te.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Se,Te.width,Te.height,0,pe,Ce,Te.data)}}}else{tt=w.mipmaps,ke&&rt&&(tt.length>0&&ot++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ot,Se,fe[0].width,fe[0].height));for(let we=0;we<6;we++)if(nt){ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,fe[we].width,fe[we].height,pe,Ce,fe[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Se,fe[we].width,fe[we].height,0,pe,Ce,fe[we].data);for(let H=0;H<tt.length;H++){let be=tt[H].image[we].image;ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,be.width,be.height,pe,Ce,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Se,be.width,be.height,0,pe,Ce,be.data)}}else{ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,pe,Ce,fe[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Se,pe,Ce,fe[we]);for(let H=0;H<tt.length;H++){let Te=tt[H];ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,pe,Ce,Te.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Se,pe,Ce,Te.image[we])}}}C(w,U)&&E(i.TEXTURE_CUBE_MAP),ue.__version=he.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Ne(A,w,Y,ge,he,ue){let He=r.convert(Y.format,Y.colorSpace),Ie=r.convert(Y.type),Fe=L(Y.internalFormat,He,Ie,Y.colorSpace);if(!n.get(w).__hasExternalTextures){let nt=Math.max(1,w.width>>ue),fe=Math.max(1,w.height>>ue);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ue,Fe,nt,fe,w.depth,0,He,Ie,null):t.texImage2D(he,ue,Fe,nt,fe,0,He,Ie,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ae(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,he,n.get(Y).__webglTexture,0,me(w)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,he,n.get(Y).__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(A,w,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let ge=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||ae(w)){let he=w.depthTexture;he&&he.isDepthTexture&&(he.type===Bn?ge=i.DEPTH_COMPONENT32F:he.type===Fn&&(ge=i.DEPTH_COMPONENT24));let ue=me(w);ae(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,ge,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,ge,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,ge,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let ge=me(w);Y&&ae(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,w.width,w.height):ae(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ge=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let he=0;he<ge.length;he++){let ue=ge[he],He=r.convert(ue.format,ue.colorSpace),Ie=r.convert(ue.type),Fe=L(ue.internalFormat,He,Ie,ue.colorSpace),Ze=me(w);Y&&ae(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,Fe,w.width,w.height):ae(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ze,Fe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),K(w.depthTexture,0);let ge=n.get(w.depthTexture).__webglTexture,he=me(w);if(w.depthTexture.format===Qn)ae(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Bi)ae(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function ze(A){let w=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");et(w.__webglFramebuffer,A)}else if(Y){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]=i.createRenderbuffer(),qe(w.__webglDepthbuffer[ge],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),qe(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(A,w,Y){let ge=n.get(A);w!==void 0&&Ne(ge.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&ze(A)}function z(A){let w=A.texture,Y=n.get(A),ge=n.get(w);A.addEventListener("dispose",ee),A.isWebGLMultipleRenderTargets!==!0&&(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=w.version,o.memory.textures++);let he=A.isWebGLCubeRenderTarget===!0,ue=A.isWebGLMultipleRenderTargets===!0,He=m(A)||a;if(he){Y.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(a&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Ie]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)Y.__webglFramebuffer[Ie][Fe]=i.createFramebuffer()}else Y.__webglFramebuffer[Ie]=i.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ie=0;Ie<w.mipmaps.length;Ie++)Y.__webglFramebuffer[Ie]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(ue)if(s.drawBuffers){let Ie=A.texture;for(let Fe=0,Ze=Ie.length;Fe<Ze;Fe++){let nt=n.get(Ie[Fe]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ae(A)===!1){let Ie=ue?w:[w];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Fe=0;Fe<Ie.length;Fe++){let Ze=Ie[Fe];Y.__webglColorRenderbuffer[Fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Fe]);let nt=r.convert(Ze.format,Ze.colorSpace),fe=r.convert(Ze.type),st=L(Ze.internalFormat,nt,fe,Ze.colorSpace,A.isXRRenderTarget===!0),U=me(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,U,st,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(Y.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),ie(i.TEXTURE_CUBE_MAP,w,He);for(let Ie=0;Ie<6;Ie++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ne(Y.__webglFramebuffer[Ie][Fe],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,Fe);else Ne(Y.__webglFramebuffer[Ie],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);C(w,He)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){let Ie=A.texture;for(let Fe=0,Ze=Ie.length;Fe<Ze;Fe++){let nt=Ie[Fe],fe=n.get(nt);t.bindTexture(i.TEXTURE_2D,fe.__webglTexture),ie(i.TEXTURE_2D,nt,He),Ne(Y.__webglFramebuffer,A,nt,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,0),C(nt,He)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let Ie=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ie,ge.__webglTexture),ie(Ie,w,He),a&&w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ne(Y.__webglFramebuffer[Fe],A,w,i.COLOR_ATTACHMENT0,Ie,Fe);else Ne(Y.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,Ie,0);C(w,He)&&E(Ie),t.unbindTexture()}A.depthBuffer&&ze(A)}function Me(A){let w=m(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ge=0,he=Y.length;ge<he;ge++){let ue=Y[ge];if(C(ue,w)){let He=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ie=n.get(ue).__webglTexture;t.bindTexture(He,Ie),E(He),t.unbindTexture()}}}function oe(A){if(a&&A.samples>0&&ae(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,ge=A.height,he=i.COLOR_BUFFER_BIT,ue=[],He=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(A),Fe=A.isWebGLMultipleRenderTargets===!0;if(Fe)for(let Ze=0;Ze<w.length;Ze++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ze=0;Ze<w.length;Ze++){ue.push(i.COLOR_ATTACHMENT0+Ze),A.depthBuffer&&ue.push(He);let nt=Ie.__ignoreDepthValues!==void 0?Ie.__ignoreDepthValues:!1;if(nt===!1&&(A.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Fe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ze]),nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[He]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[He])),Fe){let fe=n.get(w[Ze]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,Y,ge,0,0,Y,ge,he,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Fe)for(let Ze=0;Ze<w.length;Ze++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ze]);let nt=n.get(w[Ze]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ze,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}}function me(A){return Math.min(s.maxSamples,A.samples)}function ae(A){let w=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function De(A){let w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Ue(A,w){let Y=A.colorSpace,ge=A.format,he=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Oa||Y!==Tn&&Y!==en&&(_t.getTransfer(Y)===Mt?a===!1?e.has("EXT_sRGB")===!0&&ge===cn?(A.format=Oa,A.minFilter=Qt,A.generateMipmaps=!1):w=fr.sRGBToLinear(w):(ge!==cn||he!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}this.allocateTextureUnit=k,this.resetTextureUnits=ye,this.setTexture2D=K,this.setTexture2DArray=le,this.setTexture3D=re,this.setTextureCube=ne,this.rebindTextures=Qe,this.setupRenderTarget=z,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=ae}function Zm(i,e,t){let n=t.isWebGL2;function s(r,o=en){let a,l=_t.getTransfer(o);if(r===kn)return i.UNSIGNED_BYTE;if(r===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Ah)return i.BYTE;if(r===Rh)return i.SHORT;if(r===wo)return i.UNSIGNED_SHORT;if(r===vc)return i.INT;if(r===Fn)return i.UNSIGNED_INT;if(r===Bn)return i.FLOAT;if(r===cs)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ch)return i.ALPHA;if(r===cn)return i.RGBA;if(r===Ph)return i.LUMINANCE;if(r===Lh)return i.LUMINANCE_ALPHA;if(r===Qn)return i.DEPTH_COMPONENT;if(r===Bi)return i.DEPTH_STENCIL;if(r===Oa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ih)return i.RED;if(r===Ec)return i.RED_INTEGER;if(r===Dh)return i.RG;if(r===bc)return i.RG_INTEGER;if(r===wc)return i.RGBA_INTEGER;if(r===Kr||r===$r||r===jr||r===Qr)if(l===Mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Go||r===Wo||r===Xo||r===qo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Go)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Wo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Xo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tc)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Yo||r===Zo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Yo)return l===Mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Zo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jo||r===Ko||r===$o||r===jo||r===Qo||r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===al||r===ol||r===ll)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Jo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ko)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$o)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qo)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===el)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tl)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nl)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===il)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sl)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rl)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===al)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ol)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ll)return l===Mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ea||r===cl||r===hl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ea)return l===Mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Uh||r===ul||r===dl||r===fl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ea)return a.COMPRESSED_RED_RGTC1_EXT;if(r===ul)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===jn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ka=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Jm={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let S of e.hand.values()){let m=t.getJointPose(S,n),p=this._getHandJoint(c,S);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),g=.02,v=.005;c.inputState.pinching&&f>g+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$a=class extends mn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,g=null,v=null,S=t.getContextAttributes(),m=null,p=null,C=[],E=[],L=new Ee,V=null,B=new Ht;B.layers.enable(1),B.viewport=new bt;let N=new Ht;N.layers.enable(2),N.viewport=new bt;let ee=[B,N],b=new Ka;b.layers.enable(1),b.layers.enable(2);let P=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let I=C[ie];return I===void 0&&(I=new is,C[ie]=I),I.getTargetRaySpace()},this.getControllerGrip=function(ie){let I=C[ie];return I===void 0&&(I=new is,C[ie]=I),I.getGripSpace()},this.getHand=function(ie){let I=C[ie];return I===void 0&&(I=new is,C[ie]=I),I.getHandSpace()};function te(ie){let I=E.indexOf(ie.inputSource);if(I===-1)return;let _e=C[I];_e!==void 0&&(_e.update(ie.inputSource,ie.frame,c||o),_e.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ye(){s.removeEventListener("select",te),s.removeEventListener("selectstart",te),s.removeEventListener("selectend",te),s.removeEventListener("squeeze",te),s.removeEventListener("squeezestart",te),s.removeEventListener("squeezeend",te),s.removeEventListener("end",ye),s.removeEventListener("inputsourceschange",k);for(let ie=0;ie<C.length;ie++){let I=E[ie];I!==null&&(E[ie]=null,C[ie].disconnect(I))}P=null,J=null,e.setRenderTarget(m),g=null,f=null,d=null,s=null,p=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",te),s.addEventListener("selectstart",te),s.addEventListener("selectend",te),s.addEventListener("squeeze",te),s.addEventListener("squeezestart",te),s.addEventListener("squeezeend",te),s.addEventListener("end",ye),s.addEventListener("inputsourceschange",k),S.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let I={antialias:s.renderState.layers===void 0?S.antialias:!0,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,I),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),p=new An(g.framebufferWidth,g.framebufferHeight,{format:cn,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let I=null,_e=null,Oe=null;S.depth&&(Oe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,I=S.stencil?Bi:Qn,_e=S.stencil?jn:Fn);let Ne={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(Ne),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new An(f.textureWidth,f.textureHeight,{format:cn,type:kn,depthTexture:new Sr(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,I),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0});let qe=e.properties.get(p);qe.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(ie){for(let I=0;I<ie.removed.length;I++){let _e=ie.removed[I],Oe=E.indexOf(_e);Oe>=0&&(E[Oe]=null,C[Oe].disconnect(_e))}for(let I=0;I<ie.added.length;I++){let _e=ie.added[I],Oe=E.indexOf(_e);if(Oe===-1){for(let qe=0;qe<C.length;qe++)if(qe>=E.length){E.push(_e),Oe=qe;break}else if(E[qe]===null){E[qe]=_e,Oe=qe;break}if(Oe===-1)break}let Ne=C[Oe];Ne&&Ne.connect(_e)}}let q=new F,K=new F;function le(ie,I,_e){q.setFromMatrixPosition(I.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);let Oe=q.distanceTo(K),Ne=I.projectionMatrix.elements,qe=_e.projectionMatrix.elements,et=Ne[14]/(Ne[10]-1),ze=Ne[14]/(Ne[10]+1),Qe=(Ne[9]+1)/Ne[5],z=(Ne[9]-1)/Ne[5],Me=(Ne[8]-1)/Ne[0],oe=(qe[8]+1)/qe[0],me=et*Me,ae=et*oe,De=Oe/(-Me+oe),Ue=De*-Me;I.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ue),ie.translateZ(De),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();let A=et+De,w=ze+De,Y=me-Ue,ge=ae+(Oe-Ue),he=Qe*ze/w*A,ue=z*ze/w*A;ie.projectionMatrix.makePerspective(Y,ge,he,ue,A,w),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function re(ie,I){I===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(I.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;b.near=N.near=B.near=ie.near,b.far=N.far=B.far=ie.far,(P!==b.near||J!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,J=b.far);let I=ie.parent,_e=b.cameras;re(b,I);for(let Oe=0;Oe<_e.length;Oe++)re(_e[Oe],I);_e.length===2?le(b,B,N):b.projectionMatrix.copy(B.projectionMatrix),ne(ie,b,I)};function ne(ie,I,_e){_e===null?ie.matrix.copy(I.matrixWorld):(ie.matrix.copy(_e.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(I.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(I.projectionMatrix),ie.projectionMatrixInverse.copy(I.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=hs*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)};let de=null;function ce(ie,I){if(h=I.getViewerPose(c||o),v=I,h!==null){let _e=h.views;g!==null&&(e.setRenderTargetFramebuffer(p,g.framebuffer),e.setRenderTarget(p));let Oe=!1;_e.length!==b.cameras.length&&(b.cameras.length=0,Oe=!0);for(let Ne=0;Ne<_e.length;Ne++){let qe=_e[Ne],et=null;if(g!==null)et=g.getViewport(qe);else{let Qe=d.getViewSubImage(f,qe);et=Qe.viewport,Ne===0&&(e.setRenderTargetTextures(p,Qe.colorTexture,f.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(p))}let ze=ee[Ne];ze===void 0&&(ze=new Ht,ze.layers.enable(Ne),ze.viewport=new bt,ee[Ne]=ze),ze.matrix.fromArray(qe.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(qe.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(et.x,et.y,et.width,et.height),Ne===0&&(b.matrix.copy(ze.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Oe===!0&&b.cameras.push(ze)}}for(let _e=0;_e<C.length;_e++){let Oe=E[_e],Ne=C[_e];Oe!==null&&Ne!==void 0&&Ne.update(Oe,I,c||o)}de&&de(ie,I),I.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:I}),v=null}let Re=new Uc;Re.setAnimationLoop(ce),this.setAnimationLoop=function(ie){de=ie},this.dispose=function(){}}};function Km(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,C,E,L){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&g(m,p,L)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),S(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,C,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===kt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===kt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let C=e.get(p).envMap;if(C&&(m.envMap.value=C,m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let E=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*E,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,C,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*C,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function g(m,p,C){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===kt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function S(m,p){let C=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function $m(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,E){let L=E.program;n.uniformBlockBinding(C,L)}function c(C,E){let L=s[C.id];L===void 0&&(v(C),L=h(C),s[C.id]=L,C.addEventListener("dispose",m));let V=E.program;n.updateUBOMapping(C,V);let B=e.render.frame;r[C.id]!==B&&(f(C),r[C.id]=B)}function h(C){let E=d();C.__bindingPointIndex=E;let L=i.createBuffer(),V=C.__size,B=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,V,B),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,L),L}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(C){let E=s[C.id],L=C.uniforms,V=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let B=0,N=L.length;B<N;B++){let ee=Array.isArray(L[B])?L[B]:[L[B]];for(let b=0,P=ee.length;b<P;b++){let J=ee[b];if(g(J,B,b,V)===!0){let te=J.__offset,ye=Array.isArray(J.value)?J.value:[J.value],k=0;for(let q=0;q<ye.length;q++){let K=ye[q],le=S(K);typeof K=="number"||typeof K=="boolean"?(J.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,te+k,J.__data)):K.isMatrix3?(J.__data[0]=K.elements[0],J.__data[1]=K.elements[1],J.__data[2]=K.elements[2],J.__data[3]=0,J.__data[4]=K.elements[3],J.__data[5]=K.elements[4],J.__data[6]=K.elements[5],J.__data[7]=0,J.__data[8]=K.elements[6],J.__data[9]=K.elements[7],J.__data[10]=K.elements[8],J.__data[11]=0):(K.toArray(J.__data,k),k+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,J.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(C,E,L,V){let B=C.value,N=E+"_"+L;if(V[N]===void 0)return typeof B=="number"||typeof B=="boolean"?V[N]=B:V[N]=B.clone(),!0;{let ee=V[N];if(typeof B=="number"||typeof B=="boolean"){if(ee!==B)return V[N]=B,!0}else if(ee.equals(B)===!1)return ee.copy(B),!0}return!1}function v(C){let E=C.uniforms,L=0,V=16;for(let N=0,ee=E.length;N<ee;N++){let b=Array.isArray(E[N])?E[N]:[E[N]];for(let P=0,J=b.length;P<J;P++){let te=b[P],ye=Array.isArray(te.value)?te.value:[te.value];for(let k=0,q=ye.length;k<q;k++){let K=ye[k],le=S(K),re=L%V;re!==0&&V-re<le.boundary&&(L+=V-re),te.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=L,L+=le.storage}}}let B=L%V;return B>0&&(L+=V-B),C.__size=L,C.__cache={},this}function S(C){let E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function m(C){let E=C.target;E.removeEventListener("dispose",m);let L=o.indexOf(E.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var fs=class{constructor(e={}){let{canvas:t=ru(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let g=new Uint32Array(4),v=new Int32Array(4),S=null,m=null,p=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=At,this._useLegacyLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1;let E=this,L=!1,V=0,B=0,N=null,ee=-1,b=null,P=new bt,J=new bt,te=null,ye=new it(0),k=0,q=t.width,K=t.height,le=1,re=null,ne=null,de=new bt(0,0,q,K),ce=new bt(0,0,q,K),Re=!1,ie=new ds,I=!1,_e=!1,Oe=null,Ne=new Rt,qe=new Ee,et=new F,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return N===null?le:1}let z=n;function Me(u,_){for(let M=0;M<u.length;M++){let x=u[M],R=t.getContext(x,_);if(R!==null)return R}return null}try{let u={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Te,!1),z===null){let _=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&_.shift(),z=Me(_,u),z===null)throw Me(_)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let oe,me,ae,De,Ue,A,w,Y,ge,he,ue,He,Ie,Fe,Ze,nt,fe,st,U,pe,Ce,Se,ke,rt;function ot(){oe=new gp(z),me=new hp(z,oe,e),oe.init(me),Se=new Zm(z,oe,me),ae=new qm(z,oe,me),De=new yp(z),Ue=new Um,A=new Ym(z,oe,ae,Ue,me,Se,De),w=new dp(E),Y=new mp(E),ge=new Tu(z,me),ke=new lp(z,oe,ge,me),he=new _p(z,ge,De,ke),ue=new Ep(z,he,ge,De),U=new Sp(z,me,A),nt=new up(Ue),He=new Dm(E,w,Y,oe,me,ke,nt),Ie=new Km(E,Ue),Fe=new Om,Ze=new Vm(oe,me),st=new op(E,w,Y,ae,ue,f,l),fe=new Xm(E,ue,me),rt=new $m(z,De,me,ae),pe=new cp(z,oe,De,me),Ce=new xp(z,oe,De,me),De.programs=He.programs,E.capabilities=me,E.extensions=oe,E.properties=Ue,E.renderLists=Fe,E.shadowMap=fe,E.state=ae,E.info=De}ot();let tt=new $a(E,z);this.xr=tt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let u=oe.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){let u=oe.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(u){u!==void 0&&(le=u,this.setSize(q,K,!1))},this.getSize=function(u){return u.set(q,K)},this.setSize=function(u,_,M=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=u,K=_,t.width=Math.floor(u*le),t.height=Math.floor(_*le),M===!0&&(t.style.width=u+"px",t.style.height=_+"px"),this.setViewport(0,0,u,_)},this.getDrawingBufferSize=function(u){return u.set(q*le,K*le).floor()},this.setDrawingBufferSize=function(u,_,M){q=u,K=_,le=M,t.width=Math.floor(u*M),t.height=Math.floor(_*M),this.setViewport(0,0,u,_)},this.getCurrentViewport=function(u){return u.copy(P)},this.getViewport=function(u){return u.copy(de)},this.setViewport=function(u,_,M,x){u.isVector4?de.set(u.x,u.y,u.z,u.w):de.set(u,_,M,x),ae.viewport(P.copy(de).multiplyScalar(le).floor())},this.getScissor=function(u){return u.copy(ce)},this.setScissor=function(u,_,M,x){u.isVector4?ce.set(u.x,u.y,u.z,u.w):ce.set(u,_,M,x),ae.scissor(J.copy(ce).multiplyScalar(le).floor())},this.getScissorTest=function(){return Re},this.setScissorTest=function(u){ae.setScissorTest(Re=u)},this.setOpaqueSort=function(u){re=u},this.setTransparentSort=function(u){ne=u},this.getClearColor=function(u){return u.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor.apply(st,arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha.apply(st,arguments)},this.clear=function(u=!0,_=!0,M=!0){let x=0;if(u){let R=!1;if(N!==null){let O=N.texture.format;R=O===wc||O===bc||O===Ec}if(R){let O=N.texture.type,D=O===kn||O===Fn||O===wo||O===jn||O===Mc||O===Sc,G=st.getClearColor(),Z=st.getClearAlpha(),X=G.r,j=G.g,Q=G.b;D?(g[0]=X,g[1]=j,g[2]=Q,g[3]=Z,z.clearBufferuiv(z.COLOR,0,g)):(v[0]=X,v[1]=j,v[2]=Q,v[3]=Z,z.clearBufferiv(z.COLOR,0,v))}else x|=z.COLOR_BUFFER_BIT}_&&(x|=z.DEPTH_BUFFER_BIT),M&&(x|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),Fe.dispose(),Ze.dispose(),Ue.dispose(),w.dispose(),Y.dispose(),ue.dispose(),ke.dispose(),rt.dispose(),He.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Ct),tt.removeEventListener("sessionend",mt),Oe&&(Oe.dispose(),Oe=null),It.stop()};function we(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let u=De.autoReset,_=fe.enabled,M=fe.autoUpdate,x=fe.needsUpdate,R=fe.type;ot(),De.autoReset=u,fe.enabled=_,fe.autoUpdate=M,fe.needsUpdate=x,fe.type=R}function Te(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function be(u){let _=u.target;_.removeEventListener("dispose",be),Ke(_)}function Ke(u){Ge(u),Ue.remove(u)}function Ge(u){let _=Ue.get(u).programs;_!==void 0&&(_.forEach(function(M){He.releaseProgram(M)}),u.isShaderMaterial&&He.releaseShaderCache(u))}this.renderBufferDirect=function(u,_,M,x,R,O){_===null&&(_=ze);let D=R.isMesh&&R.matrixWorld.determinant()<0,G=Ts(u,_,M,x,R);ae.setMaterial(x,D);let Z=M.index,X=1;if(x.wireframe===!0){if(Z=he.getWireframeAttribute(M),Z===void 0)return;X=2}let j=M.drawRange,Q=M.attributes.position,W=j.start*X,$=(j.start+j.count)*X;O!==null&&(W=Math.max(W,O.start*X),$=Math.min($,(O.start+O.count)*X)),Z!==null?(W=Math.max(W,0),$=Math.min($,Z.count)):Q!=null&&(W=Math.max(W,0),$=Math.min($,Q.count));let se=$-W;if(se<0||se===1/0)return;ke.setup(R,x,G,M,Z);let xe,Ae=pe;if(Z!==null&&(xe=ge.get(Z),Ae=Ce,Ae.setIndex(xe)),R.isMesh)x.wireframe===!0?(ae.setLineWidth(x.wireframeLinewidth*Qe()),Ae.setMode(z.LINES)):Ae.setMode(z.TRIANGLES);else if(R.isLine){let ve=x.linewidth;ve===void 0&&(ve=1),ae.setLineWidth(ve*Qe()),R.isLineSegments?Ae.setMode(z.LINES):R.isLineLoop?Ae.setMode(z.LINE_LOOP):Ae.setMode(z.LINE_STRIP)}else R.isPoints?Ae.setMode(z.POINTS):R.isSprite&&Ae.setMode(z.TRIANGLES);if(R.isBatchedMesh)Ae.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else if(R.isInstancedMesh)Ae.renderInstances(W,se,R.count);else if(M.isInstancedBufferGeometry){let ve=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,Pe=Math.min(M.instanceCount,ve);Ae.renderInstances(W,se,Pe)}else Ae.render(W,se)};function dt(u,_,M){u.transparent===!0&&u.side===bn&&u.forceSinglePass===!1?(u.side=kt,u.needsUpdate=!0,St(u,_,M),u.side=Vn,u.needsUpdate=!0,St(u,_,M),u.side=bn):St(u,_,M)}this.compile=function(u,_,M=null){M===null&&(M=u),m=Ze.get(M),m.init(),C.push(m),M.traverseVisible(function(R){R.isLight&&R.layers.test(_.layers)&&(m.pushLight(R),R.castShadow&&m.pushShadow(R))}),u!==M&&u.traverseVisible(function(R){R.isLight&&R.layers.test(_.layers)&&(m.pushLight(R),R.castShadow&&m.pushShadow(R))}),m.setupLights(E._useLegacyLights);let x=new Set;return u.traverse(function(R){let O=R.material;if(O)if(Array.isArray(O))for(let D=0;D<O.length;D++){let G=O[D];dt(G,M,R),x.add(G)}else dt(O,M,R),x.add(O)}),C.pop(),m=null,x},this.compileAsync=function(u,_,M=null){let x=this.compile(u,_,M);return new Promise(R=>{function O(){if(x.forEach(function(D){Ue.get(D).currentProgram.isReady()&&x.delete(D)}),x.size===0){R(u);return}setTimeout(O,10)}oe.get("KHR_parallel_shader_compile")!==null?O():setTimeout(O,10)})};let ft=null;function Tt(u){ft&&ft(u)}function Ct(){It.stop()}function mt(){It.start()}let It=new Uc;It.setAnimationLoop(Tt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(u){ft=u,tt.setAnimationLoop(u),u===null?It.stop():It.start()},tt.addEventListener("sessionstart",Ct),tt.addEventListener("sessionend",mt),this.render=function(u,_){if(_!==void 0&&_.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(_),_=tt.getCamera()),u.isScene===!0&&u.onBeforeRender(E,u,_,N),m=Ze.get(u,C.length),m.init(),C.push(m),Ne.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),ie.setFromProjectionMatrix(Ne),_e=this.localClippingEnabled,I=nt.init(this.clippingPlanes,_e),S=Fe.get(u,p.length),S.init(),p.push(S),$t(u,_,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(re,ne),this.info.render.frame++,I===!0&&nt.beginShadows();let M=m.state.shadowsArray;if(fe.render(M,u,_),I===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.render(S,u),m.setupLights(E._useLegacyLights),_.isArrayCamera){let x=_.cameras;for(let R=0,O=x.length;R<O;R++){let D=x[R];Gn(S,u,D,D.viewport)}}else Gn(S,u,_);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),u.isScene===!0&&u.onAfterRender(E,u,_),ke.resetDefaultState(),ee=-1,b=null,C.pop(),C.length>0?m=C[C.length-1]:m=null,p.pop(),p.length>0?S=p[p.length-1]:S=null};function $t(u,_,M,x){if(u.visible===!1)return;if(u.layers.test(_.layers)){if(u.isGroup)M=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(_);else if(u.isLight)m.pushLight(u),u.castShadow&&m.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||ie.intersectsSprite(u)){x&&et.setFromMatrixPosition(u.matrixWorld).applyMatrix4(Ne);let D=ue.update(u),G=u.material;G.visible&&S.push(u,D,G,M,et.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||ie.intersectsObject(u))){let D=ue.update(u),G=u.material;if(x&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),et.copy(u.boundingSphere.center)):(D.boundingSphere===null&&D.computeBoundingSphere(),et.copy(D.boundingSphere.center)),et.applyMatrix4(u.matrixWorld).applyMatrix4(Ne)),Array.isArray(G)){let Z=D.groups;for(let X=0,j=Z.length;X<j;X++){let Q=Z[X],W=G[Q.materialIndex];W&&W.visible&&S.push(u,D,W,M,et.z,Q)}}else G.visible&&S.push(u,D,G,M,et.z,null)}}let O=u.children;for(let D=0,G=O.length;D<G;D++)$t(O[D],_,M,x)}function Gn(u,_,M,x){let R=u.opaque,O=u.transmissive,D=u.transparent;m.setupLightsView(M),I===!0&&nt.setGlobalState(E.clippingPlanes,M),O.length>0&&ci(R,O,_,M),x&&ae.viewport(P.copy(x)),R.length>0&&hi(R,_,M),O.length>0&&hi(O,_,M),D.length>0&&hi(D,_,M),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function ci(u,_,M,x){if((M.isScene===!0?M.overrideMaterial:null)!==null)return;let O=me.isWebGL2;Oe===null&&(Oe=new An(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")?cs:kn,minFilter:ls,samples:O?4:0})),E.getDrawingBufferSize(qe),O?Oe.setSize(qe.x,qe.y):Oe.setSize(ur(qe.x),ur(qe.y));let D=E.getRenderTarget();E.setRenderTarget(Oe),E.getClearColor(ye),k=E.getClearAlpha(),k<1&&E.setClearColor(16777215,.5),E.clear();let G=E.toneMapping;E.toneMapping=Hn,hi(u,M,x),A.updateMultisampleRenderTarget(Oe),A.updateRenderTargetMipmap(Oe);let Z=!1;for(let X=0,j=_.length;X<j;X++){let Q=_[X],W=Q.object,$=Q.geometry,se=Q.material,xe=Q.group;if(se.side===bn&&W.layers.test(x.layers)){let Ae=se.side;se.side=kt,se.needsUpdate=!0,Yi(W,M,x,$,se,xe),se.side=Ae,se.needsUpdate=!0,Z=!0}}Z===!0&&(A.updateMultisampleRenderTarget(Oe),A.updateRenderTargetMipmap(Oe)),E.setRenderTarget(D),E.setClearColor(ye,k),E.toneMapping=G}function hi(u,_,M){let x=_.isScene===!0?_.overrideMaterial:null;for(let R=0,O=u.length;R<O;R++){let D=u[R],G=D.object,Z=D.geometry,X=x===null?D.material:x,j=D.group;G.layers.test(M.layers)&&Yi(G,_,M,Z,X,j)}}function Yi(u,_,M,x,R,O){u.onBeforeRender(E,_,M,x,R,O),u.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),R.onBeforeRender(E,_,M,x,u,O),R.transparent===!0&&R.side===bn&&R.forceSinglePass===!1?(R.side=kt,R.needsUpdate=!0,E.renderBufferDirect(M,_,x,R,u,O),R.side=Vn,R.needsUpdate=!0,E.renderBufferDirect(M,_,x,R,u,O),R.side=bn):E.renderBufferDirect(M,_,x,R,u,O),u.onAfterRender(E,_,M,x,R,O)}function St(u,_,M){_.isScene!==!0&&(_=ze);let x=Ue.get(u),R=m.state.lights,O=m.state.shadowsArray,D=R.state.version,G=He.getParameters(u,R.state,O,_,M),Z=He.getProgramCacheKey(G),X=x.programs;x.environment=u.isMeshStandardMaterial?_.environment:null,x.fog=_.fog,x.envMap=(u.isMeshStandardMaterial?Y:w).get(u.envMap||x.environment),X===void 0&&(u.addEventListener("dispose",be),X=new Map,x.programs=X);let j=X.get(Z);if(j!==void 0){if(x.currentProgram===j&&x.lightsStateVersion===D)return Zi(u,G),j}else G.uniforms=He.getUniforms(u),u.onBuild(M,G,E),u.onBeforeCompile(G,E),j=He.acquireProgram(G,Z),X.set(Z,j),x.uniforms=G.uniforms;let Q=x.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&(Q.clippingPlanes=nt.uniform),Zi(u,G),x.needsLights=T(u),x.lightsStateVersion=D,x.needsLights&&(Q.ambientLightColor.value=R.state.ambient,Q.lightProbe.value=R.state.probe,Q.directionalLights.value=R.state.directional,Q.directionalLightShadows.value=R.state.directionalShadow,Q.spotLights.value=R.state.spot,Q.spotLightShadows.value=R.state.spotShadow,Q.rectAreaLights.value=R.state.rectArea,Q.ltc_1.value=R.state.rectAreaLTC1,Q.ltc_2.value=R.state.rectAreaLTC2,Q.pointLights.value=R.state.point,Q.pointLightShadows.value=R.state.pointShadow,Q.hemisphereLights.value=R.state.hemi,Q.directionalShadowMap.value=R.state.directionalShadowMap,Q.directionalShadowMatrix.value=R.state.directionalShadowMatrix,Q.spotShadowMap.value=R.state.spotShadowMap,Q.spotLightMatrix.value=R.state.spotLightMatrix,Q.spotLightMap.value=R.state.spotLightMap,Q.pointShadowMap.value=R.state.pointShadowMap,Q.pointShadowMatrix.value=R.state.pointShadowMatrix),x.currentProgram=j,x.uniformsList=null,j}function ws(u){if(u.uniformsList===null){let _=u.currentProgram.getUniforms();u.uniformsList=Ni.seqWithValue(_.seq,u.uniforms)}return u.uniformsList}function Zi(u,_){let M=Ue.get(u);M.outputColorSpace=_.outputColorSpace,M.batching=_.batching,M.instancing=_.instancing,M.instancingColor=_.instancingColor,M.skinning=_.skinning,M.morphTargets=_.morphTargets,M.morphNormals=_.morphNormals,M.morphColors=_.morphColors,M.morphTargetsCount=_.morphTargetsCount,M.numClippingPlanes=_.numClippingPlanes,M.numIntersection=_.numClipIntersection,M.vertexAlphas=_.vertexAlphas,M.vertexTangents=_.vertexTangents,M.toneMapping=_.toneMapping}function Ts(u,_,M,x,R){_.isScene!==!0&&(_=ze),A.resetTextureUnits();let O=_.fog,D=x.isMeshStandardMaterial?_.environment:null,G=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Tn,Z=(x.isMeshStandardMaterial?Y:w).get(x.envMap||D),X=x.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,j=!!M.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),Q=!!M.morphAttributes.position,W=!!M.morphAttributes.normal,$=!!M.morphAttributes.color,se=Hn;x.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(se=E.toneMapping);let xe=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,Ae=xe!==void 0?xe.length:0,ve=Ue.get(x),Pe=m.state.lights;if(I===!0&&(_e===!0||u!==b)){let gt=u===b&&x.id===ee;nt.setState(x,u,gt)}let Be=!1;x.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Pe.state.version||ve.outputColorSpace!==G||R.isBatchedMesh&&ve.batching===!1||!R.isBatchedMesh&&ve.batching===!0||R.isInstancedMesh&&ve.instancing===!1||!R.isInstancedMesh&&ve.instancing===!0||R.isSkinnedMesh&&ve.skinning===!1||!R.isSkinnedMesh&&ve.skinning===!0||R.isInstancedMesh&&ve.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&ve.instancingColor===!1&&R.instanceColor!==null||ve.envMap!==Z||x.fog===!0&&ve.fog!==O||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==nt.numPlanes||ve.numIntersection!==nt.numIntersection)||ve.vertexAlphas!==X||ve.vertexTangents!==j||ve.morphTargets!==Q||ve.morphNormals!==W||ve.morphColors!==$||ve.toneMapping!==se||me.isWebGL2===!0&&ve.morphTargetsCount!==Ae)&&(Be=!0):(Be=!0,ve.__version=x.version);let We=ve.currentProgram;Be===!0&&(We=St(x,_,R));let ht=!1,Ye=!1,$e=!1,Xe=We.getUniforms(),ut=ve.uniforms;if(ae.useProgram(We.program)&&(ht=!0,Ye=!0,$e=!0),x.id!==ee&&(ee=x.id,Ye=!0),ht||b!==u){Xe.setValue(z,"projectionMatrix",u.projectionMatrix),Xe.setValue(z,"viewMatrix",u.matrixWorldInverse);let gt=Xe.map.cameraPosition;gt!==void 0&&gt.setValue(z,et.setFromMatrixPosition(u.matrixWorld)),me.logarithmicDepthBuffer&&Xe.setValue(z,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)&&Xe.setValue(z,"isOrthographic",u.isOrthographicCamera===!0),b!==u&&(b=u,Ye=!0,$e=!0)}if(R.isSkinnedMesh){Xe.setOptional(z,R,"bindMatrix"),Xe.setOptional(z,R,"bindMatrixInverse");let gt=R.skeleton;gt&&(me.floatVertexTextures?(gt.boneTexture===null&&gt.computeBoneTexture(),Xe.setValue(z,"boneTexture",gt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}R.isBatchedMesh&&(Xe.setOptional(z,R,"batchingTexture"),Xe.setValue(z,"batchingTexture",R._matricesTexture,A));let xt=M.morphAttributes;if((xt.position!==void 0||xt.normal!==void 0||xt.color!==void 0&&me.isWebGL2===!0)&&U.update(R,M,We),(Ye||ve.receiveShadow!==R.receiveShadow)&&(ve.receiveShadow=R.receiveShadow,Xe.setValue(z,"receiveShadow",R.receiveShadow)),x.isMeshGouraudMaterial&&x.envMap!==null&&(ut.envMap.value=Z,ut.flipEnvMap.value=Z.isCubeTexture&&Z.isRenderTargetTexture===!1?-1:1),Ye&&(Xe.setValue(z,"toneMappingExposure",E.toneMappingExposure),ve.needsLights&&y(ut,$e),O&&x.fog===!0&&Ie.refreshFogUniforms(ut,O),Ie.refreshMaterialUniforms(ut,x,le,K,Oe),Ni.upload(z,ws(ve),ut,A)),x.isShaderMaterial&&x.uniformsNeedUpdate===!0&&(Ni.upload(z,ws(ve),ut,A),x.uniformsNeedUpdate=!1),x.isSpriteMaterial&&Xe.setValue(z,"center",R.center),Xe.setValue(z,"modelViewMatrix",R.modelViewMatrix),Xe.setValue(z,"normalMatrix",R.normalMatrix),Xe.setValue(z,"modelMatrix",R.matrixWorld),x.isShaderMaterial||x.isRawShaderMaterial){let gt=x.uniformsGroups;for(let ui=0,As=gt.length;ui<As;ui++)if(me.isWebGL2){let Ji=gt[ui];rt.update(Ji,We),rt.bind(Ji,We)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return We}function y(u,_){u.ambientLightColor.needsUpdate=_,u.lightProbe.needsUpdate=_,u.directionalLights.needsUpdate=_,u.directionalLightShadows.needsUpdate=_,u.pointLights.needsUpdate=_,u.pointLightShadows.needsUpdate=_,u.spotLights.needsUpdate=_,u.spotLightShadows.needsUpdate=_,u.rectAreaLights.needsUpdate=_,u.hemisphereLights.needsUpdate=_}function T(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(u,_,M){Ue.get(u.texture).__webglTexture=_,Ue.get(u.depthTexture).__webglTexture=M;let x=Ue.get(u);x.__hasExternalTextures=!0,x.__hasExternalTextures&&(x.__autoAllocateDepthBuffer=M===void 0,x.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),x.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(u,_){let M=Ue.get(u);M.__webglFramebuffer=_,M.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(u,_=0,M=0){N=u,V=_,B=M;let x=!0,R=null,O=!1,D=!1;if(u){let Z=Ue.get(u);Z.__useDefaultFramebuffer!==void 0?(ae.bindFramebuffer(z.FRAMEBUFFER,null),x=!1):Z.__webglFramebuffer===void 0?A.setupRenderTarget(u):Z.__hasExternalTextures&&A.rebindTextures(u,Ue.get(u.texture).__webglTexture,Ue.get(u.depthTexture).__webglTexture);let X=u.texture;(X.isData3DTexture||X.isDataArrayTexture||X.isCompressedArrayTexture)&&(D=!0);let j=Ue.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(j[_])?R=j[_][M]:R=j[_],O=!0):me.isWebGL2&&u.samples>0&&A.useMultisampledRTT(u)===!1?R=Ue.get(u).__webglMultisampledFramebuffer:Array.isArray(j)?R=j[M]:R=j,P.copy(u.viewport),J.copy(u.scissor),te=u.scissorTest}else P.copy(de).multiplyScalar(le).floor(),J.copy(ce).multiplyScalar(le).floor(),te=Re;if(ae.bindFramebuffer(z.FRAMEBUFFER,R)&&me.drawBuffers&&x&&ae.drawBuffers(u,R),ae.viewport(P),ae.scissor(J),ae.setScissorTest(te),O){let Z=Ue.get(u.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+_,Z.__webglTexture,M)}else if(D){let Z=Ue.get(u.texture),X=_||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Z.__webglTexture,M||0,X)}ee=-1},this.readRenderTargetPixels=function(u,_,M,x,R,O,D){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let G=Ue.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&D!==void 0&&(G=G[D]),G){ae.bindFramebuffer(z.FRAMEBUFFER,G);try{let Z=u.texture,X=Z.format,j=Z.type;if(X!==cn&&Se.convert(X)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Q=j===cs&&(oe.has("EXT_color_buffer_half_float")||me.isWebGL2&&oe.has("EXT_color_buffer_float"));if(j!==kn&&Se.convert(j)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(j===Bn&&(me.isWebGL2||oe.has("OES_texture_float")||oe.has("WEBGL_color_buffer_float")))&&!Q){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=u.width-x&&M>=0&&M<=u.height-R&&z.readPixels(_,M,x,R,Se.convert(X),Se.convert(j),O)}finally{let Z=N!==null?Ue.get(N).__webglFramebuffer:null;ae.bindFramebuffer(z.FRAMEBUFFER,Z)}}},this.copyFramebufferToTexture=function(u,_,M=0){let x=Math.pow(2,-M),R=Math.floor(_.image.width*x),O=Math.floor(_.image.height*x);A.setTexture2D(_,0),z.copyTexSubImage2D(z.TEXTURE_2D,M,0,0,u.x,u.y,R,O),ae.unbindTexture()},this.copyTextureToTexture=function(u,_,M,x=0){let R=_.image.width,O=_.image.height,D=Se.convert(M.format),G=Se.convert(M.type);A.setTexture2D(M,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,M.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,M.unpackAlignment),_.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,x,u.x,u.y,R,O,D,G,_.image.data):_.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,x,u.x,u.y,_.mipmaps[0].width,_.mipmaps[0].height,D,_.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,x,u.x,u.y,D,G,_.image),x===0&&M.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),ae.unbindTexture()},this.copyTextureToTexture3D=function(u,_,M,x,R=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let O=u.max.x-u.min.x+1,D=u.max.y-u.min.y+1,G=u.max.z-u.min.z+1,Z=Se.convert(x.format),X=Se.convert(x.type),j;if(x.isData3DTexture)A.setTexture3D(x,0),j=z.TEXTURE_3D;else if(x.isDataArrayTexture||x.isCompressedArrayTexture)A.setTexture2DArray(x,0),j=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,x.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=z.getParameter(z.UNPACK_ROW_LENGTH),W=z.getParameter(z.UNPACK_IMAGE_HEIGHT),$=z.getParameter(z.UNPACK_SKIP_PIXELS),se=z.getParameter(z.UNPACK_SKIP_ROWS),xe=z.getParameter(z.UNPACK_SKIP_IMAGES),Ae=M.isCompressedTexture?M.mipmaps[R]:M.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,Ae.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ae.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,u.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,u.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,u.min.z),M.isDataTexture||M.isData3DTexture?z.texSubImage3D(j,R,_.x,_.y,_.z,O,D,G,Z,X,Ae.data):M.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(j,R,_.x,_.y,_.z,O,D,G,Z,Ae.data)):z.texSubImage3D(j,R,_.x,_.y,_.z,O,D,G,Z,X,Ae),z.pixelStorei(z.UNPACK_ROW_LENGTH,Q),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,W),z.pixelStorei(z.UNPACK_SKIP_PIXELS,$),z.pixelStorei(z.UNPACK_SKIP_ROWS,se),z.pixelStorei(z.UNPACK_SKIP_IMAGES,xe),R===0&&x.generateMipmaps&&z.generateMipmap(j),ae.unbindTexture()},this.initTexture=function(u){u.isCubeTexture?A.setTextureCube(u,0):u.isData3DTexture?A.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?A.setTexture2DArray(u,0):A.setTexture2D(u,0),ae.unbindTexture()},this.resetState=function(){V=0,B=0,N=null,ae.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===To?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===kr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===At?ei:Ac}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ei?At:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ja=class extends fs{};ja.prototype.isWebGL1Renderer=!0;var Vi=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ps=class extends Rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},sc=new F,rc=new F,ac=new Rt,ba=new ni,Ks=new zi,Qa=class extends Vt{constructor(e=new Yt,t=new ps){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)sc.fromBufferAttribute(t,s-1),rc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=sc.distanceTo(rc);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;ac.copy(s).invert(),ba.copy(e.ray).applyMatrix4(ac);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new F,h=new F,d=new F,f=new F,g=this.isLineSegments?2:1,v=n.index,m=n.attributes.position;if(v!==null){let p=Math.max(0,o.start),C=Math.min(v.count,o.start+o.count);for(let E=p,L=C-1;E<L;E+=g){let V=v.getX(E),B=v.getX(E+1);if(c.fromBufferAttribute(m,V),h.fromBufferAttribute(m,B),ba.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let ee=e.ray.origin.distanceTo(f);ee<e.near||ee>e.far||t.push({distance:ee,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),C=Math.min(m.count,o.start+o.count);for(let E=p,L=C-1;E<L;E+=g){if(c.fromBufferAttribute(m,E),h.fromBufferAttribute(m,E+1),ba.distanceSqToSegment(c,h,f,d)>l)continue;f.applyMatrix4(this.matrixWorld);let B=e.ray.origin.distanceTo(f);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},oc=new F,lc=new F,Er=class extends Qa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)oc.fromBufferAttribute(t,s),lc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+oc.distanceTo(lc);e.setAttribute("lineDistance",new yt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ms=class extends nn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,g=(o-h)/f;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ee:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new F,s=[],r=[],o=[],a=new F,l=new Rt;for(let g=0;g<=e;g++){let v=g/e;s[g]=this.getTangentAt(v,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let v=Math.acos(Ft(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,v))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(Ft(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let v=1;v<=e;v++)r[v].applyMatrix4(l.makeRotationAxis(s[v],g*v)),o[v].crossVectors(s[v],r[v])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},gs=class extends sn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new Ee,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,g=c-this.aY;l=f*h-g*d+this.aX,c=f*d+g*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},eo=class extends gs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Co(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,g*=h,s(o,a,f,g)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var $s=new F,wa=new Co,Ta=new Co,Aa=new Co,to=class extends sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($s.subVectors(s[0],s[1]).add(s[0]),c=$s);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($s.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$s),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,v=Math.pow(c.distanceToSquared(d),g),S=Math.pow(d.distanceToSquared(f),g),m=Math.pow(f.distanceToSquared(h),g);S<1e-4&&(S=1),v<1e-4&&(v=S),m<1e-4&&(m=S),wa.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,v,S,m),Ta.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,v,S,m),Aa.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,v,S,m)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ta.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Aa.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(wa.calc(l),Ta.calc(l),Aa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function jm(i,e){let t=1-i;return t*t*e}function Qm(i,e){return 2*(1-i)*i*e}function eg(i,e){return i*i*e}function ss(i,e,t,n){return jm(i,e)+Qm(i,t)+eg(i,n)}function tg(i,e){let t=1-i;return t*t*t*e}function ng(i,e){let t=1-i;return 3*t*t*i*e}function ig(i,e){return 3*(1-i)*i*i*e}function sg(i,e){return i*i*i*e}function rs(i,e,t,n,s){return tg(i,e)+ng(i,t)+ig(i,n)+sg(i,s)}var br=class extends sn{constructor(e=new Ee,t=new Ee,n=new Ee,s=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,s.x,r.x,o.x,a.x),rs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends sn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(e,s.x,r.x,o.x,a.x),rs(e,s.y,r.y,o.y,a.y),rs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wr=class extends sn{constructor(e=new Ee,t=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ee){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ee){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends sn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tr=class extends sn{constructor(e=new Ee,t=new Ee,n=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ee){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(e,s.x,r.x,o.x),ss(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends sn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(e,s.x,r.x,o.x),ss(e,s.y,r.y,o.y),ss(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ar=class extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ee){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(cc(a,l.x,c.x,h.x,d.x),cc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ee().fromArray(s))}return this}},ro=Object.freeze({__proto__:null,ArcCurve:eo,CatmullRomCurve3:to,CubicBezierCurve:br,CubicBezierCurve3:no,EllipseCurve:gs,LineCurve:wr,LineCurve3:io,QuadraticBezierCurve:Tr,QuadraticBezierCurve3:so,SplineCurve:Ar}),ao=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ro[s.type]().fromJSON(s))}return this}},Rr=class extends ao{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wr(this.currentPoint.clone(),new Ee(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Tr(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new br(this.currentPoint.clone(),new Ee(e,t),new Ee(n,s),new Ee(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ar(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new gs(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Nt=class i extends Yt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],g=[],v=0,S=[],m=n/2,p=0;C(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(f,3)),this.setAttribute("uv",new yt(g,2));function C(){let L=new F,V=new F,B=0,N=(t-e)/n;for(let ee=0;ee<=r;ee++){let b=[],P=ee/r,J=P*(t-e)+e;for(let te=0;te<=s;te++){let ye=te/s,k=ye*l+a,q=Math.sin(k),K=Math.cos(k);V.x=J*q,V.y=-P*n+m,V.z=J*K,d.push(V.x,V.y,V.z),L.set(q,N,K).normalize(),f.push(L.x,L.y,L.z),g.push(ye,1-P),b.push(v++)}S.push(b)}for(let ee=0;ee<s;ee++)for(let b=0;b<r;b++){let P=S[b][ee],J=S[b+1][ee],te=S[b+1][ee+1],ye=S[b][ee+1];h.push(P,J,ye),h.push(J,te,ye),B+=6}c.addGroup(p,B,0),p+=B}function E(L){let V=v,B=new Ee,N=new F,ee=0,b=L===!0?e:t,P=L===!0?1:-1;for(let te=1;te<=s;te++)d.push(0,m*P,0),f.push(0,P,0),g.push(.5,.5),v++;let J=v;for(let te=0;te<=s;te++){let k=te/s*l+a,q=Math.cos(k),K=Math.sin(k);N.x=b*K,N.y=m*P,N.z=b*q,d.push(N.x,N.y,N.z),f.push(0,P,0),B.x=q*.5+.5,B.y=K*.5*P+.5,g.push(B.x,B.y),v++}for(let te=0;te<s;te++){let ye=V+te,k=J+te;L===!0?h.push(k,k+1,ye):h.push(k+1,k,ye),ee+=3}c.addGroup(p,ee,L===!0?1:2),p+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cr=class i extends Nt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var js=new F,Qs=new F,Ra=new F,er=new $n,Pr=class extends Yt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Di*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},g=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);let{a:S,b:m,c:p}=er;if(S.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),p.fromBufferAttribute(a,c[2]),er.getNormal(Ra),d[0]=`${Math.round(S.x*s)},${Math.round(S.y*s)},${Math.round(S.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let C=0;C<3;C++){let E=(C+1)%3,L=d[C],V=d[E],B=er[h[C]],N=er[h[E]],ee=`${L}_${V}`,b=`${V}_${L}`;b in f&&f[b]?(Ra.dot(f[b].normal)<=r&&(g.push(B.x,B.y,B.z),g.push(N.x,N.y,N.z)),f[b]=null):ee in f||(f[ee]={index0:c[C],index1:c[E],normal:Ra.clone()})}}for(let v in f)if(f[v]){let{index0:S,index1:m}=f[v];js.fromBufferAttribute(a,S),Qs.fromBufferAttribute(a,m),g.push(js.x,js.y,js.z),g.push(Qs.x,Qs.y,Qs.z)}this.setAttribute("position",new yt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},_s=class extends Rr{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Rr().fromJSON(s))}return this}},rg={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Hc(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,f,g;if(n&&(r=hg(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let v=t;v<s;v+=t)d=i[v],f=i[v+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);g=Math.max(c-a,h-l),g=g!==0?32767/g:0}return xs(r,o,t,a,l,g,0),o}};function Hc(i,e,t,n,s){let r,o;if(s===Mg(i,e,t,n)>0)for(r=e;r<t;r+=n)o=hc(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=hc(r,i[r],i[r+1],o);return o&&Gr(o,o.next)&&(vs(o),o=o.next),o}function ii(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||wt(t.prev,t,t.next)===0)){if(vs(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function xs(i,e,t,n,s,r,o){if(!i)return;!o&&r&&mg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?og(i,n,s,r):ag(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),vs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=lg(ii(i),e,t),xs(i,e,t,n,s,r,2)):o===2&&cg(i,e,t,n,s,r):xs(ii(i),e,t,n,s,r,1);break}}}function ag(i){let e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,g=a>l?a>c?a:c:l>c?l:c,v=n.next;for(;v!==e;){if(v.x>=h&&v.x<=f&&v.y>=d&&v.y<=g&&Li(s,a,r,l,o,c,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.next}return!0}function og(i,e,t,n){let s=i.prev,r=i,o=i.next;if(wt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,f=o.y,g=a<l?a<c?a:c:l<c?l:c,v=h<d?h<f?h:f:d<f?d:f,S=a>l?a>c?a:c:l>c?l:c,m=h>d?h>f?h:f:d>f?d:f,p=oo(g,v,e,t,n),C=oo(S,m,e,t,n),E=i.prevZ,L=i.nextZ;for(;E&&E.z>=p&&L&&L.z<=C;){if(E.x>=g&&E.x<=S&&E.y>=v&&E.y<=m&&E!==s&&E!==o&&Li(a,h,l,d,c,f,E.x,E.y)&&wt(E.prev,E,E.next)>=0||(E=E.prevZ,L.x>=g&&L.x<=S&&L.y>=v&&L.y<=m&&L!==s&&L!==o&&Li(a,h,l,d,c,f,L.x,L.y)&&wt(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;E&&E.z>=p;){if(E.x>=g&&E.x<=S&&E.y>=v&&E.y<=m&&E!==s&&E!==o&&Li(a,h,l,d,c,f,E.x,E.y)&&wt(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;L&&L.z<=C;){if(L.x>=g&&L.x<=S&&L.y>=v&&L.y<=m&&L!==s&&L!==o&&Li(a,h,l,d,c,f,L.x,L.y)&&wt(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function lg(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Gr(s,r)&&kc(s,n,n.next,r)&&ys(s,r)&&ys(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),vs(n),vs(n.next),n=i=r),n=n.next}while(n!==i);return ii(n)}function cg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xg(o,a)){let l=Vc(o,a);o=ii(o,o.next),l=ii(l,l.next),xs(o,e,t,n,s,r,0),xs(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function hg(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=Hc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(_g(c));for(s.sort(ug),r=0;r<s.length;r++)t=dg(s[r],t);return t}function ug(i,e){return i.x-e.x}function dg(i,e){let t=fg(i,e);if(!t)return e;let n=Vc(t,i);return ii(n,n.next),ii(t,t.next)}function fg(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Li(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),ys(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&pg(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function pg(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function mg(i,e,t,n){let s=i;do s.z===0&&(s.z=oo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,gg(s)}function gg(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function oo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function _g(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Li(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function xg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!yg(i,e)&&(ys(i,e)&&ys(e,i)&&vg(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||Gr(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function kc(i,e,t,n){let s=nr(wt(i,e,t)),r=nr(wt(i,e,n)),o=nr(wt(t,n,i)),a=nr(wt(t,n,e));return!!(s!==r&&o!==a||s===0&&tr(i,t,e)||r===0&&tr(i,n,e)||o===0&&tr(t,i,n)||a===0&&tr(t,e,n))}function tr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function nr(i){return i>0?1:i<0?-1:0}function yg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&kc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ys(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function vg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Vc(i,e){let t=new lo(i.i,i.x,i.y),n=new lo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hc(i,e,t,n){let s=new lo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function vs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lo(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var as=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];uc(e),dc(n,e);let o=e.length;t.forEach(uc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,dc(n,t[l]);let a=rg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function uc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function dc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Lr=class i extends Yt{constructor(e=new _s([new Ee(.5,.5),new Ee(-.5,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new yt(s,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,v=t.bevelSize!==void 0?t.bevelSize:g-.1,S=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Sg,E,L=!1,V,B,N,ee;p&&(E=p.getSpacedPoints(h),L=!0,f=!1,V=p.computeFrenetFrames(h,!1),B=new F,N=new F,ee=new F),f||(m=0,g=0,v=0,S=0);let b=a.extractPoints(c),P=b.shape,J=b.holes;if(!as.isClockWise(P)){P=P.reverse();for(let z=0,Me=J.length;z<Me;z++){let oe=J[z];as.isClockWise(oe)&&(J[z]=oe.reverse())}}let ye=as.triangulateShape(P,J),k=P;for(let z=0,Me=J.length;z<Me;z++){let oe=J[z];P=P.concat(oe)}function q(z,Me,oe){return Me||console.error("THREE.ExtrudeGeometry: vec does not exist"),z.clone().addScaledVector(Me,oe)}let K=P.length,le=ye.length;function re(z,Me,oe){let me,ae,De,Ue=z.x-Me.x,A=z.y-Me.y,w=oe.x-z.x,Y=oe.y-z.y,ge=Ue*Ue+A*A,he=Ue*Y-A*w;if(Math.abs(he)>Number.EPSILON){let ue=Math.sqrt(ge),He=Math.sqrt(w*w+Y*Y),Ie=Me.x-A/ue,Fe=Me.y+Ue/ue,Ze=oe.x-Y/He,nt=oe.y+w/He,fe=((Ze-Ie)*Y-(nt-Fe)*w)/(Ue*Y-A*w);me=Ie+Ue*fe-z.x,ae=Fe+A*fe-z.y;let st=me*me+ae*ae;if(st<=2)return new Ee(me,ae);De=Math.sqrt(st/2)}else{let ue=!1;Ue>Number.EPSILON?w>Number.EPSILON&&(ue=!0):Ue<-Number.EPSILON?w<-Number.EPSILON&&(ue=!0):Math.sign(A)===Math.sign(Y)&&(ue=!0),ue?(me=-A,ae=Ue,De=Math.sqrt(ge)):(me=Ue,ae=A,De=Math.sqrt(ge/2))}return new Ee(me/De,ae/De)}let ne=[];for(let z=0,Me=k.length,oe=Me-1,me=z+1;z<Me;z++,oe++,me++)oe===Me&&(oe=0),me===Me&&(me=0),ne[z]=re(k[z],k[oe],k[me]);let de=[],ce,Re=ne.concat();for(let z=0,Me=J.length;z<Me;z++){let oe=J[z];ce=[];for(let me=0,ae=oe.length,De=ae-1,Ue=me+1;me<ae;me++,De++,Ue++)De===ae&&(De=0),Ue===ae&&(Ue=0),ce[me]=re(oe[me],oe[De],oe[Ue]);de.push(ce),Re=Re.concat(ce)}for(let z=0;z<m;z++){let Me=z/m,oe=g*Math.cos(Me*Math.PI/2),me=v*Math.sin(Me*Math.PI/2)+S;for(let ae=0,De=k.length;ae<De;ae++){let Ue=q(k[ae],ne[ae],me);Ne(Ue.x,Ue.y,-oe)}for(let ae=0,De=J.length;ae<De;ae++){let Ue=J[ae];ce=de[ae];for(let A=0,w=Ue.length;A<w;A++){let Y=q(Ue[A],ce[A],me);Ne(Y.x,Y.y,-oe)}}}let ie=v+S;for(let z=0;z<K;z++){let Me=f?q(P[z],Re[z],ie):P[z];L?(N.copy(V.normals[0]).multiplyScalar(Me.x),B.copy(V.binormals[0]).multiplyScalar(Me.y),ee.copy(E[0]).add(N).add(B),Ne(ee.x,ee.y,ee.z)):Ne(Me.x,Me.y,0)}for(let z=1;z<=h;z++)for(let Me=0;Me<K;Me++){let oe=f?q(P[Me],Re[Me],ie):P[Me];L?(N.copy(V.normals[z]).multiplyScalar(oe.x),B.copy(V.binormals[z]).multiplyScalar(oe.y),ee.copy(E[z]).add(N).add(B),Ne(ee.x,ee.y,ee.z)):Ne(oe.x,oe.y,d/h*z)}for(let z=m-1;z>=0;z--){let Me=z/m,oe=g*Math.cos(Me*Math.PI/2),me=v*Math.sin(Me*Math.PI/2)+S;for(let ae=0,De=k.length;ae<De;ae++){let Ue=q(k[ae],ne[ae],me);Ne(Ue.x,Ue.y,d+oe)}for(let ae=0,De=J.length;ae<De;ae++){let Ue=J[ae];ce=de[ae];for(let A=0,w=Ue.length;A<w;A++){let Y=q(Ue[A],ce[A],me);L?Ne(Y.x,Y.y+E[h-1].y,E[h-1].x+oe):Ne(Y.x,Y.y,d+oe)}}}I(),_e();function I(){let z=s.length/3;if(f){let Me=0,oe=K*Me;for(let me=0;me<le;me++){let ae=ye[me];qe(ae[2]+oe,ae[1]+oe,ae[0]+oe)}Me=h+m*2,oe=K*Me;for(let me=0;me<le;me++){let ae=ye[me];qe(ae[0]+oe,ae[1]+oe,ae[2]+oe)}}else{for(let Me=0;Me<le;Me++){let oe=ye[Me];qe(oe[2],oe[1],oe[0])}for(let Me=0;Me<le;Me++){let oe=ye[Me];qe(oe[0]+K*h,oe[1]+K*h,oe[2]+K*h)}}n.addGroup(z,s.length/3-z,0)}function _e(){let z=s.length/3,Me=0;Oe(k,Me),Me+=k.length;for(let oe=0,me=J.length;oe<me;oe++){let ae=J[oe];Oe(ae,Me),Me+=ae.length}n.addGroup(z,s.length/3-z,1)}function Oe(z,Me){let oe=z.length;for(;--oe>=0;){let me=oe,ae=oe-1;ae<0&&(ae=z.length-1);for(let De=0,Ue=h+m*2;De<Ue;De++){let A=K*De,w=K*(De+1),Y=Me+me+A,ge=Me+ae+A,he=Me+ae+w,ue=Me+me+w;et(Y,ge,he,ue)}}}function Ne(z,Me,oe){l.push(z),l.push(Me),l.push(oe)}function qe(z,Me,oe){ze(z),ze(Me),ze(oe);let me=s.length/3,ae=C.generateTopUV(n,s,me-3,me-2,me-1);Qe(ae[0]),Qe(ae[1]),Qe(ae[2])}function et(z,Me,oe,me){ze(z),ze(Me),ze(me),ze(Me),ze(oe),ze(me);let ae=s.length/3,De=C.generateSideWallUV(n,s,ae-6,ae-3,ae-2,ae-1);Qe(De[0]),Qe(De[1]),Qe(De[3]),Qe(De[1]),Qe(De[2]),Qe(De[3])}function ze(z){s.push(l[z*3+0]),s.push(l[z*3+1]),s.push(l[z*3+2])}function Qe(z){r.push(z.x),r.push(z.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Eg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ro[s.type]().fromJSON(s)),new i(n,e.options)}},Sg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new Ee(r,o),new Ee(a,l),new Ee(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[s*3],g=e[s*3+1],v=e[s*3+2],S=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Ee(o,1-l),new Ee(c,1-d),new Ee(f,1-v),new Ee(S,1-p)]:[new Ee(a,1-l),new Ee(h,1-d),new Ee(g,1-v),new Ee(m,1-p)]}};function Eg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ir=class i extends Yt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,f=(t-e)/s,g=new F,v=new Ee;for(let S=0;S<=s;S++){for(let m=0;m<=n;m++){let p=r+m/n*o;g.x=d*Math.cos(p),g.y=d*Math.sin(p),l.push(g.x,g.y,g.z),c.push(0,0,1),v.x=(g.x/t+1)/2,v.y=(g.y/t+1)/2,h.push(v.x,v.y)}d+=f}for(let S=0;S<s;S++){let m=S*(n+1);for(let p=0;p<n;p++){let C=p+m,E=C,L=C+n+1,V=C+n+2,B=C+1;a.push(E,L,B),a.push(L,V,B)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Dr=class i extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new F,f=new F,g=[],v=[],S=[],m=[];for(let p=0;p<=n;p++){let C=[],E=p/n,L=0;p===0&&o===0?L=.5/t:p===n&&l===Math.PI&&(L=-.5/t);for(let V=0;V<=t;V++){let B=V/t;d.x=-e*Math.cos(s+B*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+B*r)*Math.sin(o+E*a),v.push(d.x,d.y,d.z),f.copy(d).normalize(),S.push(f.x,f.y,f.z),m.push(B+L,1-E),C.push(c++)}h.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){let E=h[p][C+1],L=h[p][C],V=h[p+1][C],B=h[p+1][C+1];(p!==0||o>0)&&g.push(E,L,B),(p!==n-1||l<Math.PI)&&g.push(L,V,B)}this.setIndex(g),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(S,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ur=class i extends Yt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new F,d=new F,f=new F;for(let g=0;g<=n;g++)for(let v=0;v<=s;v++){let S=v/s*r,m=g/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(S),d.y=(e+t*Math.cos(m))*Math.sin(S),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(v/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let v=1;v<=s;v++){let S=(s+1)*g+v-1,m=(s+1)*(g-1)+v-1,p=(s+1)*(g-1)+v,C=(s+1)*g+v;o.push(S,m,C),o.push(m,p,C)}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Nr=class extends Rn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Ve=class extends Rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ir(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},co=class extends Gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pl,endingEnd:pl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ml:r=e,a=2*t-n;break;case gl:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ml:o=e,l=2*n-t;break;case gl:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,g=this._weightNext,v=(n-t)/(s-t),S=v*v,m=S*v,p=-f*m+2*f*S-f*v,C=(1+f)*m+(-1.5-2*f)*S+(-.5+f)*v+1,E=(-1-g)*m+(1.5+g)*S+.5*v,L=g*m-g*S;for(let V=0;V!==a;++V)r[V]=p*o[h+V]+C*o[c+V]+E*o[l+V]+L*o[d+V];return r}},ho=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},uo=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new co(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case ar:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ar;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&bg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,f=d-n,g=d+n;for(let v=0;v!==n;++v){let S=t[d+v];if(S!==t[f+v]||S!==t[g+v]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,f=o*n;for(let g=0;g!==n;++g)t[f+g]=t[d+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ar;var si=class extends dn{};si.prototype.ValueTypeName="bool";si.prototype.ValueBufferType=Array;si.prototype.DefaultInterpolation=rr;si.prototype.InterpolantFactoryMethodLinear=void 0;si.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends dn{};fo.prototype.ValueTypeName="color";var po=class extends dn{};po.prototype.ValueTypeName="number";var mo=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ms=class extends dn{InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}};Ms.prototype.ValueTypeName="quaternion";Ms.prototype.DefaultInterpolation=ar;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;var ri=class extends dn{};ri.prototype.ValueTypeName="string";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=rr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends dn{};go.prototype.ValueTypeName="vector";var _o=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let g=c[d],v=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return v}return null}}},wg=new _o,xo=class{constructor(e){this.manager=e!==void 0?e:wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Or=class extends Ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ca=new Rt,fc=new F,pc=new F,Fr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var mc=new Rt,es=new F,Pa=new F,yo=class extends Fr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ee(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),es.setFromMatrixPosition(e.matrixWorld),n.position.copy(es),Pa.copy(n.position),Pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pa),n.updateMatrixWorld(),s.makeTranslation(-es.x,-es.y,-es.z),mc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc)}},Ln=class extends Ss{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vo=class extends Fr{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new vo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Po="\\[\\]\\.:\\/",Tg=new RegExp("["+Po+"]","g"),Lo="[^"+Po+"]",Ag="[^"+Po.replace("\\.","")+"]",Rg=/((?:WC+[\/:])*)/.source.replace("WC",Lo),Cg=/(WCOD+)?/.source.replace("WCOD",Ag),Pg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lo),Lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lo),Ig=new RegExp("^"+Rg+Cg+Pg+Lg+"$"),Dg=["material","materials","bones","map"],Mo=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tg,"")}static parseTrackName(e){let t=Ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Mo;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bg=new Float32Array(1);var zr=class{constructor(e,t,n=0,s=1/0){this.ray=new ni(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return So(e,this,n,t),n.sort(gc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)So(e[s],this,n,t);return n.sort(gc),n}};function gc(i,e){return i.distance-e.distance}function So(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)So(s[r],e,t,!0)}}var Es=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Gc={type:"change"},Io={type:"start"},Wc={type:"end"},Wr=new ni,Xc=new Kt,Ng=Math.cos(70*Pc.DEG2RAD),Xr=class extends mn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",ue),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ue),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Gc),n.update(),r=s.NONE},this.update=(function(){let U=new F,pe=new hn().setFromUnitVectors(e.up,new F(0,1,0)),Ce=pe.clone().invert(),Se=new F,ke=new hn,rt=new F,ot=2*Math.PI;return function(we=null){let H=n.object.position;U.copy(H).sub(n.target),U.applyQuaternion(pe),a.setFromVector3(U),n.autoRotate&&r===s.NONE&&J(b(we)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Te=n.minAzimuthAngle,be=n.maxAzimuthAngle;isFinite(Te)&&isFinite(be)&&(Te<-Math.PI?Te+=ot:Te>Math.PI&&(Te-=ot),be<-Math.PI?be+=ot:be>Math.PI&&(be-=ot),Te<=be?a.theta=Math.max(Te,Math.min(be,a.theta)):a.theta=a.theta>(Te+be)/2?Math.max(Te,a.theta):Math.min(be,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&B||n.object.isOrthographicCamera?a.radius=ne(a.radius):a.radius=ne(a.radius*c),U.setFromSpherical(a),U.applyQuaternion(Ce),H.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Ke=!1;if(n.zoomToCursor&&B){let Ge=null;if(n.object.isPerspectiveCamera){let dt=U.length();Ge=ne(dt*c);let ft=dt-Ge;n.object.position.addScaledVector(L,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let dt=new F(V.x,V.y,0);dt.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ke=!0;let ft=new F(V.x,V.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(dt),n.object.updateMatrixWorld(),Ge=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ge).add(n.object.position):(Wr.origin.copy(n.object.position),Wr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Wr.direction))<Ng?e.lookAt(n.target):(Xc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Wr.intersectPlane(Xc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Ke=!0);return c=1,B=!1,Ke||Se.distanceToSquared(n.object.position)>o||8*(1-ke.dot(n.object.quaternion))>o||rt.distanceToSquared(n.target)>0?(n.dispatchEvent(Gc),Se.copy(n.object.position),ke.copy(n.object.quaternion),rt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Fe),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",he),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",w),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ue),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new Es,l=new Es,c=1,h=new F,d=new Ee,f=new Ee,g=new Ee,v=new Ee,S=new Ee,m=new Ee,p=new Ee,C=new Ee,E=new Ee,L=new F,V=new Ee,B=!1,N=[],ee={};function b(U){return U!==null?2*Math.PI/60*n.autoRotateSpeed*U:2*Math.PI/60/60*n.autoRotateSpeed}function P(U){let pe=Math.abs(U)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*pe)}function J(U){l.theta-=U}function te(U){l.phi-=U}let ye=(function(){let U=new F;return function(Ce,Se){U.setFromMatrixColumn(Se,0),U.multiplyScalar(-Ce),h.add(U)}})(),k=(function(){let U=new F;return function(Ce,Se){n.screenSpacePanning===!0?U.setFromMatrixColumn(Se,1):(U.setFromMatrixColumn(Se,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(Ce),h.add(U)}})(),q=(function(){let U=new F;return function(Ce,Se){let ke=n.domElement;if(n.object.isPerspectiveCamera){let rt=n.object.position;U.copy(rt).sub(n.target);let ot=U.length();ot*=Math.tan(n.object.fov/2*Math.PI/180),ye(2*Ce*ot/ke.clientHeight,n.object.matrix),k(2*Se*ot/ke.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ye(Ce*(n.object.right-n.object.left)/n.object.zoom/ke.clientWidth,n.object.matrix),k(Se*(n.object.top-n.object.bottom)/n.object.zoom/ke.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function K(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(U){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function re(U,pe){if(!n.zoomToCursor)return;B=!0;let Ce=n.domElement.getBoundingClientRect(),Se=U-Ce.left,ke=pe-Ce.top,rt=Ce.width,ot=Ce.height;V.x=Se/rt*2-1,V.y=-(ke/ot)*2+1,L.set(V.x,V.y,1).unproject(n.object).sub(n.object.position).normalize()}function ne(U){return Math.max(n.minDistance,Math.min(n.maxDistance,U))}function de(U){d.set(U.clientX,U.clientY)}function ce(U){re(U.clientX,U.clientX),p.set(U.clientX,U.clientY)}function Re(U){v.set(U.clientX,U.clientY)}function ie(U){f.set(U.clientX,U.clientY),g.subVectors(f,d).multiplyScalar(n.rotateSpeed);let pe=n.domElement;J(2*Math.PI*g.x/pe.clientHeight),te(2*Math.PI*g.y/pe.clientHeight),d.copy(f),n.update()}function I(U){C.set(U.clientX,U.clientY),E.subVectors(C,p),E.y>0?K(P(E.y)):E.y<0&&le(P(E.y)),p.copy(C),n.update()}function _e(U){S.set(U.clientX,U.clientY),m.subVectors(S,v).multiplyScalar(n.panSpeed),q(m.x,m.y),v.copy(S),n.update()}function Oe(U){re(U.clientX,U.clientY),U.deltaY<0?le(P(U.deltaY)):U.deltaY>0&&K(P(U.deltaY)),n.update()}function Ne(U){let pe=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?te(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,n.keyPanSpeed),pe=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?te(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(0,-n.keyPanSpeed),pe=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?J(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(n.keyPanSpeed,0),pe=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?J(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):q(-n.keyPanSpeed,0),pe=!0;break}pe&&(U.preventDefault(),n.update())}function qe(U){if(N.length===1)d.set(U.pageX,U.pageY);else{let pe=st(U),Ce=.5*(U.pageX+pe.x),Se=.5*(U.pageY+pe.y);d.set(Ce,Se)}}function et(U){if(N.length===1)v.set(U.pageX,U.pageY);else{let pe=st(U),Ce=.5*(U.pageX+pe.x),Se=.5*(U.pageY+pe.y);v.set(Ce,Se)}}function ze(U){let pe=st(U),Ce=U.pageX-pe.x,Se=U.pageY-pe.y,ke=Math.sqrt(Ce*Ce+Se*Se);p.set(0,ke)}function Qe(U){n.enableZoom&&ze(U),n.enablePan&&et(U)}function z(U){n.enableZoom&&ze(U),n.enableRotate&&qe(U)}function Me(U){if(N.length==1)f.set(U.pageX,U.pageY);else{let Ce=st(U),Se=.5*(U.pageX+Ce.x),ke=.5*(U.pageY+Ce.y);f.set(Se,ke)}g.subVectors(f,d).multiplyScalar(n.rotateSpeed);let pe=n.domElement;J(2*Math.PI*g.x/pe.clientHeight),te(2*Math.PI*g.y/pe.clientHeight),d.copy(f)}function oe(U){if(N.length===1)S.set(U.pageX,U.pageY);else{let pe=st(U),Ce=.5*(U.pageX+pe.x),Se=.5*(U.pageY+pe.y);S.set(Ce,Se)}m.subVectors(S,v).multiplyScalar(n.panSpeed),q(m.x,m.y),v.copy(S)}function me(U){let pe=st(U),Ce=U.pageX-pe.x,Se=U.pageY-pe.y,ke=Math.sqrt(Ce*Ce+Se*Se);C.set(0,ke),E.set(0,Math.pow(C.y/p.y,n.zoomSpeed)),K(E.y),p.copy(C);let rt=(U.pageX+pe.x)*.5,ot=(U.pageY+pe.y)*.5;re(rt,ot)}function ae(U){n.enableZoom&&me(U),n.enablePan&&oe(U)}function De(U){n.enableZoom&&me(U),n.enableRotate&&Me(U)}function Ue(U){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",w)),Ze(U),U.pointerType==="touch"?He(U):Y(U))}function A(U){n.enabled!==!1&&(U.pointerType==="touch"?Ie(U):ge(U))}function w(U){nt(U),N.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",w)),n.dispatchEvent(Wc),r=s.NONE}function Y(U){let pe;switch(U.button){case 0:pe=n.mouseButtons.LEFT;break;case 1:pe=n.mouseButtons.MIDDLE;break;case 2:pe=n.mouseButtons.RIGHT;break;default:pe=-1}switch(pe){case ai.DOLLY:if(n.enableZoom===!1)return;ce(U),r=s.DOLLY;break;case ai.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;Re(U),r=s.PAN}else{if(n.enableRotate===!1)return;de(U),r=s.ROTATE}break;case ai.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;de(U),r=s.ROTATE}else{if(n.enablePan===!1)return;Re(U),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Io)}function ge(U){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;ie(U);break;case s.DOLLY:if(n.enableZoom===!1)return;I(U);break;case s.PAN:if(n.enablePan===!1)return;_e(U);break}}function he(U){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(U.preventDefault(),n.dispatchEvent(Io),Oe(U),n.dispatchEvent(Wc))}function ue(U){n.enabled===!1||n.enablePan===!1||Ne(U)}function He(U){switch(fe(U),N.length){case 1:switch(n.touches.ONE){case oi.ROTATE:if(n.enableRotate===!1)return;qe(U),r=s.TOUCH_ROTATE;break;case oi.PAN:if(n.enablePan===!1)return;et(U),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case oi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qe(U),r=s.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(U),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Io)}function Ie(U){switch(fe(U),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(U),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;oe(U),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ae(U),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(U),n.update();break;default:r=s.NONE}}function Fe(U){n.enabled!==!1&&U.preventDefault()}function Ze(U){N.push(U.pointerId)}function nt(U){delete ee[U.pointerId];for(let pe=0;pe<N.length;pe++)if(N[pe]==U.pointerId){N.splice(pe,1);return}}function fe(U){let pe=ee[U.pointerId];pe===void 0&&(pe=new Ee,ee[U.pointerId]=pe),pe.set(U.pageX,U.pageY)}function st(U){let pe=U.pointerId===N[0]?N[1]:N[0];return ee[pe]}n.domElement.addEventListener("contextmenu",Fe),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",he,{passive:!1}),this.update()}};var qr=class extends Vi{constructor(e=null){super();let t=new un;t.deleteAttribute("uv");let n=new Ve({side:kt}),s=new Ve,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new Ln(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new je(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new je(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new je(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new je(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new je(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let f=new je(t,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let g=new je(t,s);g.position.set(-2.193,-.369,-5.547),g.rotation.set(0,.516,0),g.scale.set(3.875,3.487,2.986),this.add(g);let v=new je(t,Xi(50));v.position.set(-16.116,14.37,8.208),v.scale.set(.1,2.428,2.739),this.add(v);let S=new je(t,Xi(50));S.position.set(-16.109,18.021,-8.207),S.scale.set(.1,2.425,2.751),this.add(S);let m=new je(t,Xi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new je(t,Xi(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let C=new je(t,Xi(20));C.position.set(3.235,11.486,-12.541),C.scale.set(2.5,2,.1),this.add(C);let E=new je(t,Xi(100));E.position.set(0,20,0),E.scale.set(1,.1,1),this.add(E)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Xi(i){let e=new qt;return e.color.setScalar(i),e}var pt=.1,Lt=.04,Je=.004,gn=1.45,fn=.72,Og=2.16,vt=.018,bs=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Do=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function qi(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new ms(n);return s.colorSpace=At,s.wrapS=s.wrapT=os,s.anisotropy=8,s}var _n=(i=>()=>(i=i*16807%2147483647)/2147483647)(987654);function Zr(i,e){return qi(1024,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<170;r++){let o=_n()*s,a=.04+_n()*.12;t.strokeStyle=`rgba(${e},${a})`,t.lineWidth=.5+_n()*2.2,t.beginPath(),t.moveTo(0,o);for(let l=0;l<=n;l+=32)t.lineTo(l,o+Math.sin(l/90+r)*3+(_n()-.5)*2);t.stroke()}})}function Uo(i,e,t=!0){return qi(1024,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let o=n.getImageData(0,0,s,r),a=o.data;for(let l=0;l<a.length;l+=4){let c=(_n()-.5)*14;a[l]+=c,a[l+1]+=c,a[l+2]+=c}if(n.putImageData(o,0,0),t)for(let l=0;l<14;l++){n.strokeStyle=e,n.globalAlpha=.25+_n()*.5,n.lineWidth=.6+_n()*2,n.beginPath();let c=_n()*s,h=0;for(n.moveTo(c,h);h<r;)c+=(_n()-.45)*60,h+=20+_n()*30,n.lineTo(c,h);n.stroke()}n.globalAlpha=1})}function qc(i,e){return qi(512,512,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s),t.strokeStyle=e,t.lineWidth=3;for(let r=0;r<=2;r++)t.beginPath(),t.moveTo(0,r*s/2),t.lineTo(n,r*s/2),t.stroke(),t.beginPath(),t.moveTo(r*n/2,0),t.lineTo(r*n/2,s),t.stroke()})}var Yr={eiche:()=>({map:Zr("#b98a5c","70,42,18"),roughness:.55}),nuss:()=>({map:Zr("#6b4a32","30,16,6"),roughness:.5}),beton:()=>({map:Uo("#9b9893","rgba(0,0,0,.2)",!1),roughness:.8}),marmor:()=>({map:Uo("#1d1d1f","#d9d4cc"),roughness:.18}),keramik:()=>({map:Uo("#ecebe7","#b9b4ac"),roughness:.3}),schwarz:()=>({color:"#161616",roughness:.35})},Yc={eiche:()=>{let i=Zr("#c9a77f","90,60,30");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.7}},grau:()=>{let i=qc("#a7a49f","rgba(0,0,0,.18)");return i.repeat.set(4,4),{map:i,roughness:.6}},hell:()=>{let i=qc("#e8e4dd","rgba(0,0,0,.08)");return i.repeat.set(4,4),{map:i,roughness:.5}},dunkel:()=>{let i=Zr("#5c4330","20,10,4");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.6}}},No={matt:.62,seide:.38,glanz:.12};function Fg(i,e={}){let t=!!e.photo,n=new fs({antialias:!0,preserveDrawingBuffer:!0,alpha:t});n.setPixelRatio(Math.min(2,devicePixelRatio||1)),n.outputColorSpace=At,n.toneMapping=bo,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=Eo,t&&n.setClearColor(0,0),i.appendChild(n.domElement);let s=new Vi;s.background=t?null:new it("#ebe6de");let r=new ki(n);s.environment=r.fromScene(new qr(n),.04).texture;let o=new Ht(40,1,.05,80),a=t?null:new Xr(o,n.domElement);a&&(a.enableDamping=!0,a.minPolarAngle=.2,a.maxPolarAngle=1.45,a.minDistance=1.5,a.maxDistance=16,a.screenSpacePanning=!0);let l=!1,c="perspektive",h=!0,d=!1,f=!1,g=0,v=0,S=null,m=()=>{h=!0,v=0,p()};function p(){!g&&!f&&(g=requestAnimationFrame(Zi))}a&&a.addEventListener("change",m),n.domElement.addEventListener("pointerdown",()=>{l=!0,S=null,m(),e.onInteract&&e.onInteract()}),n.domElement.addEventListener("wheel",()=>{S=null,m()},{passive:!0});let C=new Br("#fff6ea",2);C.castShadow=!0,C.shadow.mapSize.set(2048,2048),C.shadow.bias=-4e-4,C.shadow.radius=4,s.add(C,C.target);let E=new Or("#ffffff","#bfae98",.55);s.add(E);let L=s.environment,V="tag";function B(){let y=V==="abend";C.intensity=y?.05:2,E.intensity=y?.3:.55,E.color.set(y?"#ffd9b0":"#ffffff"),s.environment=y?null:L,s.background&&s.background.set(y?"#1d1a17":"#ebe6de"),n.toneMappingExposure=t?N:y?1.25:1.05,Oe.m&&(Oe.m.sky.color.set(y?"#1b2640":"#dcefff"),Oe.m.led.color.set(y?"#fff7e0":"#fff3d6")),m()}let N=1,ee={},b=(y,T)=>ee[y]||(ee[y]=T()),P=new ct,J=new ct;P.add(J),s.add(P);let te=null,ye="",k={w:4.8,d:3.8},q={},K={},le=new Set,re=!1,ne=[],de=e.acc||"#c0673f",ce=new ct;ce.renderOrder=5;{let y=new Er(new Pr(new un(1,1,1)),new ps({color:de,transparent:!0,opacity:.95})),T=new je(new un(1,1,1),new qt({color:de,transparent:!0,opacity:.13,depthWrite:!1}));y.raycast=T.raycast=()=>{},ce.add(y,T)}let Re=null,ie=new un(1,1,1);function I(y,T,u,_,M,x,R,O,D=!0){let G=new je(ie,_);return G.scale.set(Math.max(y,.001),Math.max(T,.001),Math.max(u,.001)),G.position.set(M,x,R),G.castShadow=D,G.receiveShadow=!0,O.add(G),G}function _e(y,T,u,_,M,x,R,O,D,G){let Z=b("cy"+(G||[y,T,u,_].join()),()=>new Nt(y,T,u,_)),X=new je(Z,M);return X.position.set(x,R,O),D.add(X),X}function Oe(y){let T=JSON.stringify([y.front,y.finish,y.wood,y.top,y.handle,y.wall,y.floor,y.accent,y.back,y.backC,y.backWood,y.sink,y.tap]);if(Oe.k===T)return Oe.m;Oe.k=T;let u=new Ve({color:y.front,roughness:No[y.finish]??.5,envMapIntensity:.9}),_=y.wood?new Ve({...b("w"+y.wood,()=>Yr[y.wood]()),roughness:.6}):null,M=y.accent?new Ve({color:y.accent,roughness:No[y.finish]??.5}):null,x=new Ve({color:"#c8c8c8",roughness:.25,metalness:1}),R=new Ve({color:"#2a2a2a",roughness:.8}),O=new Ve({color:"#efece6",roughness:.8}),D=_||u,G=(X,j)=>{let Q=j?D:R,W=[Q,Q,Q,Q,Q,Q];return W[X]=O,W},Z=_?new Ve({...b("w"+y.wood,()=>Yr[y.wood]()),roughness:.6,color:"#d2d2d2"}):new Ve({color:new it(y.front).multiplyScalar(.9),roughness:No[y.finish]??.5,envMapIntensity:.9});return Oe.m={F:_||u,FA:M||_||u,FD:Z,carcass:R,inner:O,cs:{L:G(0,1),R:G(1,1),B:G(2),Tp:G(3),K:G(4)},plinth:new Ve({color:"#1e1e1e",roughness:.7}),top:new Ve({...b("t"+y.top,()=>Yr[y.top]())}),steel:x,black:new Ve({color:"#0b0b0c",roughness:.08,metalness:.2}),glass:new Ve({color:"#111",roughness:.05,metalness:.5}),glassClear:new Ve({color:"#cfd8d8",roughness:.05,metalness:.1,transparent:!0,opacity:.35}),handle:y.handle==="gold"?new Ve({color:"#b08a4a",roughness:.3,metalness:1}):y.handle==="schwarz"?new Ve({color:"#111",roughness:.4,metalness:.6}):x,wall:new Ve({color:y.wall||"#f2eee8",roughness:.95}),floor:new Ve({...b("f"+y.floor,()=>(Yc[y.floor]||Yc.eiche)())}),frame:new Ve({color:"#ffffff",roughness:.5}),sky:new qt({color:"#dcefff"}),door:new Ve({color:"#d8d2c8",roughness:.7}),led:new qt({color:"#fff3d6"}),stool:new Ve({color:"#1c1c1c",roughness:.5,metalness:.4}),seat:new Ve({color:"#8a6a4a",roughness:.6}),glow:new qt({color:"#ffe7b8"}),fridge:new Ve({color:"#bfc2c4",roughness:.3,metalness:.8}),tile:new Ve({...b("metro",()=>{let X=qi(512,512,(j,Q,W)=>{j.fillStyle="#d9d4cc",j.fillRect(0,0,Q,W);for(let $=0;$<8;$++)for(let se=-1;se<5;se++){let xe=se*128+$%2*64,Ae=$*64;j.fillStyle="#f6f4ef",j.fillRect(xe+3,Ae+3,122,58),j.fillStyle="rgba(255,255,255,.5)",j.fillRect(xe+6,Ae+6,116,10)}});return X.repeat.set(4,1.1),{map:X}}),roughness:.2}),backGlass:new Ve({color:y.backC||(y.wood?"#2a2420":y.front),roughness:.04,metalness:.1,envMapIntensity:1.4}),backDibond:new Ve({color:y.backC||(y.wood?"#2a2420":y.front),roughness:.62,metalness:.05}),backWood:new Ve({...b("bw"+(y.backWood||"eiche"),()=>{let X=Yr[y.backWood==="nuss"?"nuss":"eiche"](),j=X.map.clone();return j.needsUpdate=!0,j.repeat.set(1.6,1),{...X,map:j}}),roughness:.55}),sinkM:(()=>{let X=y.sink||"#c9cccf",j=X==="#c9cccf";return new Ve({color:X,roughness:j?.28:X==="#f7f6f2"?.12:.42,metalness:j?1:0,envMapIntensity:j?1:.8})})(),sinkIn:(()=>{let X=new it(y.sink||"#c9cccf"),j=(y.sink||"#c9cccf")==="#c9cccf";return new Ve({color:X.clone().multiplyScalar(j?.82:.78),roughness:j?.35:.5,metalness:j?1:0})})(),tapM:new Ve({chrom:{color:"#e9edf0",roughness:.06,metalness:1},edel:{color:"#c3c6c8",roughness:.34,metalness:1},schwarz:{color:"#161617",roughness:.55,metalness:.25},gold:{color:"#c09a5f",roughness:.3,metalness:1}}[y.tap]||{color:"#e9edf0",roughness:.06,metalness:1}),dside:b("m_ds",()=>new Ve({color:"#5b5d60",roughness:.4,metalness:.6})),dbot:b("m_db",()=>new Ve({color:"#e7e5e0",roughness:.85})),plate:b("m_pl",()=>new Ve({color:"#fbfaf6",roughness:.25})),cup:b("m_cu",()=>new Ve({color:"#d9cdb8",roughness:.35})),bottleG:b("m_bg",()=>new Ve({color:"#2d4a2a",roughness:.12,metalness:.15})),bottleB:b("m_bb",()=>new Ve({color:"#6a3a16",roughness:.12,metalness:.15})),bottleW:b("m_bw",()=>new Ve({color:"#c9b37a",roughness:.2})),jar:b("m_ja",()=>new Ve({color:"#e3d6bd",roughness:.3})),jarLid:b("m_jl",()=>new Ve({color:"#3c3a37",roughness:.4,metalness:.3})),bin:b("m_bi",()=>new Ve({color:"#7d8083",roughness:.55})),binY:b("m_by",()=>new Ve({color:"#d9b441",roughness:.5})),binB:b("m_bl",()=>new Ve({color:"#4f78a8",roughness:.5})),binG:b("m_bgn",()=>new Ve({color:"#7a6a55",roughness:.5})),fridgeIn:b("m_fi",()=>new Ve({color:"#f3f6f7",roughness:.35})),fridgeLight:b("m_fl",()=>new qt({color:"#f2f8ff"})),glassShelf:b("m_gs",()=>new Ve({color:"#dfeaea",roughness:.05,transparent:!0,opacity:.5})),green:b("m_gr",()=>new Ve({color:"#6f8f4e",roughness:.6})),broom:b("m_br",()=>new Ve({color:"#b5a27c",roughness:.6}))},Oe.m}function Ne(y,T,u,_,M,x,R,O,D,G={}){let Z=M+x;O.forEach((X,j)=>{let Q=x*X;if(I(u-Je*2,Q-Je,.02,G.mat||T.F,_,Z-Q/2,R,y),D.handle!=="grifflos"&&!G.noHandle)if(G.vertical){let W=Math.min(G.hl||.32,Q*.42),se=(G.vpos&&G.vpos[j]||"bottom")==="top"?Z-.07-W/2:Z-Q+.07+W/2;I(.016,W,.025,T.handle,_+(G.side||1)*(u/2-.055),se,R+.02,y)}else I(Math.min(.4,u*.6),.015,.025,T.handle,_,Z-.05,R+.02,y);Z-=Q}),D.handle==="grifflos"&&!G.noHandle&&I(u,.02,.01,T.steel,_,M+x-.012,R-.004,y,!1)}function qe(y,T,u,_,M,x={}){let R=.9-Lt-pt;I(_-Je,R,M-.02,T.carcass,0,pt+R/2,-.01,y),I(_,pt,M-.06,T.plinth,0,pt/2,-.03,y),x.noFront||Ne(y,T,_,0,pt,R-Je,M/2-.01,x.parts||[.25,.375,.375],u,x),x.noTop||I(_+.002,Lt,M+.02,T.top,0,.9-Lt/2,.01,y)}function et(y,T,u,_,M=.9){let x=Math.min(.55,u-.2);I(x,.008,.44,T.sinkM,0,M+.004,-.02,y,!1),I(x-.07,.004,.34,T.sinkIn,-0,M+.0085,-.01,y,!1),_e(.022,.022,.003,18,b("m_drain",()=>new Ve({color:"#3a3c3e",roughness:.3,metalness:.8})),0,M+.011,0,y,"drain");let R=T.tapM||T.steel,O=new je(b("faucet",()=>new Nt(.015,.018,.3,16)),R);O.position.set(0,M+.15,-_/2+.1),O.castShadow=!0,y.add(O);let D=new je(b("arc",()=>new Ur(.09,.012,10,24,Math.PI)),R);D.position.set(0,M+.3,-_/2+.19),D.rotation.y=Math.PI/2,D.castShadow=!0,y.add(D);let G=new je(b("spout",()=>new Nt(.013,.011,.06,14)),R);G.position.set(0,M+.27,-_/2+.28),y.add(G);let Z=new je(b("lever",()=>new Nt(.006,.006,.07,8)),R);Z.rotation.z=Math.PI/2.4,Z.position.set(.035,M+.22,-_/2+.1),y.add(Z)}let ze=()=>b("grille",()=>qi(64,256,(y,T,u)=>{y.fillStyle="#4b4f53",y.fillRect(0,0,T,u),y.fillStyle="#111214";for(let _=6;_<u;_+=12)y.fillRect(6,_,T-12,6)}));function Qe(y,T,u,_,M=.9,x=-.02,R){let O=R?R/100:Math.min(.8,u-.08),D=Math.min(1.12,O/.78);I(O,.008,.52,T.glass,0,M+.004,x,y,!1);let G=b("ringgeo",()=>new Ir(.06,.068,32)),Z=b("ringmat",()=>new qt({color:"#555"}));[[-.17,-.12],[.17,-.12],[-.17,.12],[.17,.12]].forEach(([X,j])=>{let Q=new je(G,Z);Q.rotation.x=-Math.PI/2,Q.position.set(X*Math.max(.72,D)+(_?Math.sign(X)*.015:0),M+.009,x+j),y.add(Q)}),_&&I(.09,.004,.5,b("m_grille",()=>new Ve({map:ze(),roughness:.45,metalness:.6})),0,M+.0095,x,y,!1)}function z(y,T,u,_,M,x){let R=-M/2,O=M/2-.02,D=O-R,G=(R+O)/2,Z=T.cs,X=u-2*vt-Je;return I(vt,_,D,Z.L,-u/2+vt/2+Je/2,x+_/2,G,y),I(vt,_,D,Z.R,u/2-vt/2-Je/2,x+_/2,G,y),I(X,vt,D,Z.B,0,x+vt/2,G,y,!1),I(X,vt,D,Z.Tp,0,x+_-vt/2,G,y,!1),I(X,_-2*vt,.008,Z.K,0,x+_/2,R+.004,y,!1),{zf:O,zb:R}}function Me(y,T,u,_,M,x,R){let{M:O,s:D}=y;if(D.handle!=="grifflos"){if(D.handle==="knopf"){let G=_e(.014,.011,.026,18,O.handle,u,_,M-.002,T,"knob");G.rotation.x=Math.PI/2,G.castShadow=!0;return}R?I(.016,x,.025,O.handle,u,_,M,T):I(x,.015,.025,O.handle,u,_,M,T)}}let oe=1.05;function me(y,T,u,_,M,x,R,O){let D=y.s.frame&&u>.1&&_>.09,G=I(u,_,.02,D&&(M===y.M.F||M===y.M.FA)?y.M.FD:M,x,R,O,T);if(D){let Z=Math.min(.058,u*.15,_*.2),X=O+.0135;I(u,Z,.007,M,x,R+_/2-Z/2,X,T),I(u,Z,.007,M,x,R-_/2+Z/2,X,T),I(Z,_-2*Z,.007,M,x-u/2+Z/2,R,X,T),I(Z,_-2*Z,.007,M,x+u/2-Z/2,R,X,T)}return G}function ae(y,T,u,_,M=0,x=.0215){y.kind!=="u"||y.s.handle!=="grifflos"||I(u,.012,.003,y.M.carcass,M,_+.007,x,T,!1)}function De(y,T,u,_,M){let x={o:T,k:u,to:_,ez:M,b:u==="rx"?T.rotation.x:u==="ry"?T.rotation.y:u==="px"?T.position.x:u==="py"?T.position.y:T.position.z};return y.anims.push(x),x}let Ue=y=>{let T=y-1;return 1+1.9*T*T*T+.9*T*T},A=(y,T)=>T?Ue(y):Do(y);function w(y,T){let u=new ct;return T.add(u),y.hide.push(u),u}function Y(y,T,u,_,M,x,R,O){let D=y.M,G=Math.max(1,Math.floor(_/.14)),Z=X=>(Math.sin((O+X)*12.9898)*43758.5453%1+1)%1;if(R==="plates"){let X=Math.max(1,Math.floor(_/.3));for(let j=0;j<X;j++)for(let Q=0;Q<5;Q++)_e(.1,.095,.012,24,D.plate,u-_/2+(j+.5)*_/X,M+.008+Q*.014,x,T,"plate");return}for(let X=0;X<G;X++){let j=u-_/2+(X+.5)*_/G,Q=Z(X);if(Q<.4)_e(.04,.04,.1,14,D.jar,j,M+.05,x,T,"jar"),_e(.042,.042,.02,14,D.jarLid,j,M+.11,x,T,"jarl");else if(Q<.75)for(let W=0;W<3;W++)_e(.045,.035,.08,14,D.cup,j,M+.04+W*.085,x,T,"cup");else for(let W=0;W<4;W++)_e(.09,.085,.012,22,D.plate,j,M+.008+W*.014,x,T,"plate2")}}function ge(y,T,u,_,M,x,R,O,D){let{M:G,zf:Z,zb:X}=y,j=_-2*vt-.006,Q=Z-X-.03,W=(Z+X)/2-.01;for(let $=1;$<=R;$++){let se=M+x*$/(R+1);I(j,.016,Q,D?G.glassShelf:G.inner,u,se,W,T,!1),O&&Y(y,T,u,j-.04,se+.008,W,O,$*7+u*13)}O&&Y(y,T,u,j-.04,M+vt,W,O,99+u*5)}function he(y,T,u,_,M,x,R){let O=T.in||"shelf",D=R?y.g:w(y,y.g),G=y.M,{zf:Z,zb:X}=y,j=(Z+X)/2;if(O==="none")return;if(O==="fridge"){let W=_-2*vt-.01,$=Z-X-.02;I(W,x-.02,.01,G.fridgeIn,u,M+x/2,X+.02,D,!1),I(.01,x-.02,$,G.fridgeIn,u-W/2+.005,M+x/2,j,D,!1),I(.01,x-.02,$,G.fridgeIn,u+W/2-.005,M+x/2,j,D,!1);let se=Math.max(1,Math.round(x/.3));for(let xe=1;xe<=se;xe++){let Ae=M+x*xe/(se+1);I(W,.008,$-.03,G.glassShelf,u,Ae,j,D,!1),xe===1&&(_e(.04,.04,.12,12,G.bottleW,u-W/4,Ae+.065,j,D,"milk"),_e(.05,.05,.06,14,G.green,u+W/6,Ae+.035,j,D,"bowl"))}I(W*.6,.012,.02,G.fridgeLight,u,M+x-.03,Z-.08,D,!1);return}if(O==="broom"){I(_-2*vt-.006,.016,Z-X-.03,G.inner,u,M+x-.3,j,D,!1),_e(.012,.012,1.2,8,G.broom,u-_/5,M+.65,j+.05,D,"stick"),I(.24,.05,.06,G.stool,u-_/5,M+.06,j+.05,D,!1),I(Math.min(.22,_-.1),.3,.22,G.bin,u+_/6,M+.16,j,D,!1);return}if(O==="lazy"){let W=Math.max(.1,Math.min(_*.62,Z-X-.04)/2),$=new ct;$.position.set(u,0,j),D.add($);let se=b("lazy"+W.toFixed(2),()=>new Nt(W,W,.014,36,1,!1,0,Math.PI*1.5)),xe=b("lazyr"+W.toFixed(2),()=>new Nt(W+.004,W+.004,.035,36,1,!0,0,Math.PI*1.5)),Ae=x>.6?2:1;for(let ve=0;ve<Ae;ve++){let Pe=M+.04+ve*x/(Ae+.2),Be=new je(se,G.inner);Be.position.y=Pe,$.add(Be);let We=new je(xe,G.steel);We.position.y=Pe+.016,$.add(We);for(let ht=0;ht<3;ht++){let Ye=.5+ht*1.35,$e=Math.sin(Ye)*W*.6,Xe=Math.cos(Ye)*W*.6;if(ht===1)for(let ut=0;ut<3;ut++)_e(.045,.035,.08,14,G.cup,$e,Pe+.05+ut*.085,Xe,$,"cup");else _e(.04,.04,.1,14,G.jar,$e,Pe+.06,Xe,$,"jar"),_e(.042,.042,.02,14,G.jarLid,$e,Pe+.12,Xe,$,"jarl")}}_e(.01,.01,x-.04,8,G.steel,0,M+x/2,0,$,"lazyax"+x.toFixed(2)),De(y,$,"ry",y.lazyDir||1.1);return}let Q=y.kind==="t"?Math.max(1,Math.floor(x/.38)):y.kind==="u"&&x>.6?2:1;ge(y,D,u,_,M,x,Q,T.dec||(R&&y.kind==="u"?"mix":null),!1)}function ue(y,T,u,_,M,x,R,O){let{M:D,s:G,g:Z,kind:X,zf:j}=y,Q=R==="l"?1:-1,W=u-Q*_/2,$=new ct;$.position.set(W,0,j),Z.add($);let se=y.mat||D.F,xe=_-Je*2,Ae=x-Je,ve=M+x/2;if(O){let Pe=Math.min(G.frame?.065:.05,xe*(G.frame?.16:.12));I(xe,Pe,.02,se,Q*_/2,M+x-Je/2-Pe/2,.01,$),I(xe,Pe,.02,se,Q*_/2,M+Je/2+Pe/2,.01,$),I(Pe,Ae-2*Pe,.02,se,Q*(Je+Pe/2),ve,.01,$),I(Pe,Ae-2*Pe,.02,se,Q*(_-Je-Pe/2),ve,.01,$),I(xe-2*Pe,Ae-2*Pe,.006,D.glassClear,Q*_/2,ve,.01,$,!1)}else me(y,$,xe,Ae,se,Q*_/2,ve,.01);if(ae(y,$,xe,M+Je/2,Q*_/2),!T.nh&&G.handle!=="grifflos"){let Pe=X==="b"?Math.min(.14,x*.4):Math.min(X==="u"?.2:T.hl||.32,x*.42),Be=T.hp||(X==="u"?"bottom":X==="b"?"top":"bottom"),We=M+.06+Pe/2,ht=M+x-.06-Pe/2,Ye=X==="t"?M<oe-.1?Math.max(We,Math.min(ht,oe)):We:Be==="top"?ht:Be==="mid"?ve:We;Me(y,$,Q*(_-.055),Ye,.03,Pe,!0)}De(y,$,"ry",-Q*(T.ang||1.62))}function He(y,T,u,_,M,x,R,O){let{M:D,s:G,g:Z,zf:X,zb:j,d:Q}=y,W=new ct;Z.add(W),me(y,W,_-Je*2,x-Je,y.mat||D.F,u,M+x/2,X+.01),T.nh||Me(y,W,u,y.kind==="t"&&x>.7?Math.max(M+.08,Math.min(M+x-.08,oe)):M+x-.05,X+.03,Math.min(.4,_*.6),!1);let $=w(y,W),se=_-2*vt-.03,xe=X-j-.05,Ae=X-.004,ve=Ae-xe,Pe=(ve+Ae)/2,Be=M+.02,We=T.in||(T.k==="pull"?"shelf":"box"),ht=(Ye,$e=$,Xe=Be)=>{I(.012,Ye,xe,D.dside,u-se/2+.006,Xe+Ye/2,Pe,$e,!1),I(.012,Ye,xe,D.dside,u+se/2-.006,Xe+Ye/2,Pe,$e,!1),I(se,Ye*.8,.012,D.dside,u,Xe+Ye*.4,ve+.006,$e,!1),I(se-.02,.01,xe,D.dbot,u,Xe+.005,Pe,$e,!1)};if(T.k==="drawer"){let Ye=Math.max(.06,Math.min(x-.05,.24));if(ht(Ye),We==="cutlery"||We==="box"&&R===0&&O>2)for(let $e=1;$e<4;$e++)I(.006,.04,xe-.03,D.dbot,u-se/2+se*$e/4,Be+.03,Pe,$,!1);else if(We==="plates"&&Ye>.15){let $e=Math.max(1,Math.floor(se/.26));for(let Xe=0;Xe<$e;Xe++)for(let ut=0;ut<6;ut++)_e(.1,.095,.012,24,D.plate,u-se/2+(Xe+.5)*se/$e,Be+.016+ut*.014,Pe,$,"plate")}else if(We==="pots"&&Ye>.15){let $e=Math.max(1,Math.floor(se/.26));for(let Xe=0;Xe<$e;Xe++)_e(.1,.1,.12,24,D.steel,u-se/2+(Xe+.5)*se/$e,Be+.07,Pe,$,"pot")}else if(We==="id"){let $e=new ct;$.add($e);let Xe=.08,ut=M+x-.04-Xe;ht(Xe,$e,ut),I(se-.01,Xe,.016,y.mat||D.F,u,ut+Xe/2,Ae-.01,$e,!1);for(let xt=1;xt<3;xt++)I(.005,.035,xe-.04,D.dbot,u-se/2+se*xt/3,ut+.025,Pe,$e,!1);if(De(y,$e,"pz",.14),x>.3){let xt=Math.max(1,Math.floor(se/.26));for(let gt=0;gt<xt;gt++)_e(.1,.1,.1,24,D.steel,u-se/2+(gt+.5)*se/xt,Be+.06,Pe,$,"pot2")}}De(y,W,"pz",Math.min(.45,xe*.8));return}if(I(.012,x-.06,xe,D.dside,u-se/2+.006,M+x/2,Pe,$,!1),I(se,x-.06,.012,D.dside,u,M+x/2,ve+.006,$,!1),We==="bottles"){let Ye=Math.max(1,Math.floor(x/.32)),$e=Math.max(1,Math.round(se/.08));for(let Xe=0;Xe<Ye;Xe++){let ut=M+.03+Xe*x/Ye;I(se,.01,xe,D.dside,u,ut,Pe,$,!1);for(let xt=0;xt<$e;xt++)for(let gt=0;gt<3;gt++){let ui=u-se/2+(xt+.5)*se/$e,As=ve+(gt+.5)*xe/3,Ji=(xt+gt+Xe)%3===0?D.bottleB:D.bottleG;_e(.032,.032,.19,12,Ji,ui,ut+.1,As,$,"bot"),_e(.011,.015,.07,8,Ji,ui,ut+.23,As,$,"neck")}}}else if(We==="baskets"){let Ye=Math.max(2,Math.floor(x/.2));for(let $e=0;$e<Ye;$e++){let Xe=M+.03+$e*(x-.06)/Ye;I(se,.008,xe,D.dside,u,Xe,Pe,$,!1),I(se,.04,.006,D.steel,u,Xe+.03,ve+.01,$,!1),I(se,.04,.006,D.steel,u,Xe+.03,Ae-.03,$,!1);let ut=Math.max(1,Math.floor(xe/.11));for(let xt=0;xt<ut;xt++){let gt=ve+(xt+.5)*xe/ut;se>.1?(_e(.035,.035,.09,12,D.jar,u,Xe+.05,gt,$,"jar2"),_e(.037,.037,.015,12,D.jarLid,u,Xe+.1,gt,$,"jarl2")):I(.05,.1,.07,(xt+$e)%2?D.bottleW:D.cup,u,Xe+.055,gt,$,!1)}}}else if(We==="bins"){let Ye=se>.4?3:2,$e=se/Ye-.015,Xe=[D.binY,D.binB,D.binG];for(let ut=0;ut<Ye;ut++){let xt=u-se/2+(ut+.5)*se/Ye,gt=Math.min(.36,x-.14);I($e,gt,xe-.04,D.bin,xt,M+.04+gt/2,Pe,$,!1),I($e+.006,.02,xe-.02,Xe[ut],xt,M+.05+gt,Pe,$,!1)}}else{let Ye=Math.max(1,Math.floor(x/.3));for(let $e=0;$e<Ye;$e++)I(se,.01,xe,D.dbot,u,M+.03+$e*x/Ye,Pe,$,!1)}De(y,W,"pz",Math.min(.55,xe*.88))}function Ie(y,T,u,_,M,x,R,O){let{M:D,s:G,g:Z,zf:X}=y,j=T.k||"door";if(j==="open"){he(y,{in:T.in||"shelf",dec:T.dec||"mix"},u,_,M,x,!0);return}if(j==="blind"){me(y,Z,_-Je*2,x-Je,y.mat||D.F,u,M+x/2,X+.01);return}if(j==="oven"||j==="micro"){I(_-Je*2,x-Je,.02,D.glass,u,M+x/2,X+.01,Z),I(_-.1,x*.62,.004,b("m_ov",()=>new Ve({color:"#202326",roughness:.2,metalness:.4})),u,M+x*.44,X+.022,Z,!1),I(_*.8,.018,.03,D.steel,u,M+x-.06,X+.04,Z),j==="oven"&&I(_*.5,.02,.004,D.steel,u,M+x-.025,X+.022,Z,!1);return}if(j==="drawer"||j==="pull"){He(y,T,u,_,M,x,R,O);return}if(j==="door"||j==="glass"){ue(y,T,u,_,M,x,T.a||"l",j==="glass"),he(y,T,u,_,M,x,j==="glass");return}if(j==="door2"||j==="glass2"){let Q=j==="glass2";ue(y,T,u-_/4,_/2,M,x,"l",Q),ue(y,T,u+_/4,_/2,M,x,"r",Q),he(y,T,u,_,M,x,Q);return}if(j==="flap"){let Q=new ct;Q.position.set(u,M+x,X),Z.add(Q),me(y,Q,_-Je*2,x-Je,y.mat||D.F,0,-x/2,.01),ae(y,Q,_-Je*2,-x+Je/2),T.nh||Me(y,Q,0,-x+.05,.03,Math.min(.4,_*.6),!1),De(y,Q,"rx",-1.75,A),he(y,T,u,_,M,x,!1);return}if(j==="lift"){let Q=new ct;Q.position.set(u,0,X),Z.add(Q),me(y,Q,_-Je*2,x-Je,y.mat||D.F,0,M+x/2,.01),ae(y,Q,_-Je*2,M+Je/2),T.nh||Me(y,Q,0,M+.05,.03,Math.min(.4,_*.6),!1),De(y,Q,"py",x+.03,A),De(y,Q,"pz",1,(W,$)=>{let se=A(W,$);return .06*se+.1*Math.sin(Math.PI*Math.min(1,se))}),De(y,Q,"rx",1,(W,$)=>-.16*Math.sin(Math.PI*Math.min(1,A(W,$)))),he(y,T,u,_,M,x,!1);return}if(j==="fold"){let Q=x/2,W=y.mat||D.F,$=new ct;$.position.set(u,M+x,X),Z.add($),me(y,$,_-Je*2,Q-Je/2,W,0,-Q/2+Je/4,.01);let se=new ct;se.position.set(0,-Q,0),$.add(se),me(y,se,_-Je*2,Q-Je/2,W,0,-Q/2-Je/4,.01),ae(y,se,_-Je*2,-Q+Je/4),I(_-Je*2-.01,.004,.004,D.carcass,0,0,.002,se,!1),T.nh||Me(y,se,0,-Q+.05,.03,Math.min(.4,_*.6),!1);let xe=1.42;De(y,$,"rx",-xe,A),De(y,se,"rx",2*xe,A),he(y,T,u,_,M,x,!1);return}if(j==="dw"){let Q=new ct;Q.position.set(u,M,X),Z.add(Q),me(y,Q,_-Je*2,x-Je,y.mat||D.F,0,x/2,.01),Me(y,Q,0,x-.05,.03,Math.min(.4,_*.6),!1);let W=w(y,Z),$=_-2*vt-.02,{zb:se}=y,xe=X-se-.06,Ae=(X+se)/2;I($,x-.04,.01,D.steel,u,M+x/2,se+.03,W,!1),[.14,.44].forEach((ve,Pe)=>{let Be=new ct;W.add(Be),I($-.02,.006,xe,D.dside,u,M+ve,Ae,Be,!1),I($-.02,.07,.006,D.dside,u,M+ve+.035,Ae+xe/2,Be,!1);let We=Math.max(4,Math.floor($/.05));for(let ht=0;ht<We;ht++){let Ye=new je(b("dwplate",()=>new Nt(.1,.1,.01,20)),D.plate);Ye.rotation.x=Math.PI/2,Ye.position.set(u-$/2+.04+ht*($-.08)/(We-1),M+ve+.1,Ae-.06*Pe),Be.add(Ye)}Pe===0&&De(y,Be,"pz",.32)}),De(y,Q,"rx",1.45);return}}function Fe(y,T,u,_,M,x){let R=T.reduce((Z,X)=>Z+(X.cm!=null?X.cm/100:0),0),O=T.reduce((Z,X)=>Z+(X.cm==null?X.p||1:0),0)||1,D=Math.max(0,x-R),G=M+x;T.forEach((Z,X)=>{let j=Z.cm!=null?Z.cm/100:D*(Z.p||1)/O;j>.005&&Ie(y,Z,u,_,G-j,j,X,T.length),G-=j})}function Ze(y,T,u,_){let{g:M,M:x,s:R}=y,O=.6,D=.9+_,G=pt+_,Z=D-Lt-G,X=.3,j=new ct;M.add(j),T.corner.side==="r"&&(j.scale.x=-1);let Q=-u/2,W=-u/2+.6;I(u,pt+_,O-.06,x.plinth,0,(pt+_)/2,-.03,j),I(.6-.06,pt+_,X+.06,x.plinth,Q+.27,(pt+_)/2,O/2+X/2-.03,j),I(u-Je,Z,.008,x.carcass,0,G+Z/2,-O/2+.004,j),I(vt,Z,O+X-.02,x.carcass,Q+vt/2,G+Z/2,(X-.02)/2,j),I(vt,Z,O-.02,x.carcass,u/2-vt/2,G+Z/2,-.01,j),I(.6,Z,vt,x.carcass,Q+.3,G+Z/2,O/2+X-.02-vt/2,j),I(u-Je,vt,O-.02,x.inner,0,G+vt/2,-.01,j,!1),I(.6,vt,X,x.inner,Q+.3,G+vt/2,O/2+X/2-.01,j,!1),I(u,Lt,O+.02,x.top,0,D-Lt/2,.01,j),I(.62,Lt,X-.02,x.top,Q+.31,D-Lt/2,O/2+.02+(X-.02)/2,j);let $=O/2-.02,se=y.mat||x.F,xe=u/2-W,Ae=new ct;Ae.position.set(u/2,0,$),j.add(Ae),I(xe-Je*2,Z-Je,.02,se,-xe/2,G+Z/2,.01,Ae);let ve=new ct;if(ve.position.set(W+.02,0,O/2+X-.02),j.add(ve),I(.02,Z-Je,X-Je*2,se,.01,G+Z/2,-X/2+.01,ve),Me(y,Ae,-xe+.05,D-Lt-.12,.03,.14,!0),R.handle!=="grifflos")if(R.handle==="knopf"){let ht=_e(.014,.011,.026,18,x.handle,.03,D-Lt-.12,-X+.06,ve,"knob");ht.rotation.z=Math.PI/2}else I(.025,.14,.016,x.handle,.03,D-Lt-.12,-X+.06,ve);De(y,Ae,"ry",1.62),De(y,ve,"ry",-1.62);let Pe=new ct;Pe.position.set(Q+.45,0,.15),j.add(Pe),y.hide.push(Pe);let Be=b("kardisc",()=>new Nt(.4,.4,.02,40,1,!1,Math.PI/2,Math.PI*1.5)),We=b("karrim",()=>new Nt(.405,.405,.05,40,1,!0,Math.PI/2,Math.PI*1.5));[.22,.5].forEach((ht,Ye)=>{let $e=new je(Be,x.inner);$e.position.y=G+ht,Pe.add($e);let Xe=new je(We,x.steel);Xe.position.y=G+ht+.025,Pe.add(Xe);for(let ut=0;ut<4;ut++){let xt=Math.PI/2+.5+ut*.9;_e(.07,.06,.1+Ye*.02,16,ut%2?x.steel:x.jar,Math.sin(xt)*.25,G+ht+.06,Math.cos(xt)*.25,Pe,"karpot"+Ye)}}),_e(.012,.012,Z-.04,8,x.steel,0,G+Z/2,0,Pe,"karax"),De(y,Pe,"ry",-Math.PI/2)}function nt(y,T,u,_,M,x){let{M:R}=y,O=new ct;y.g.add(O),y.hide.push(O);let D=b("lemans",()=>{let G=new _s;return G.moveTo(-.22,-.16),G.lineTo(.18,-.16),G.quadraticCurveTo(.26,-.16,.26,-.06),G.lineTo(.26,.1),G.quadraticCurveTo(.26,.18,.16,.18),G.lineTo(-.06,.18),G.quadraticCurveTo(-.22,.18,-.24,.02),G.quadraticCurveTo(-.26,-.16,-.22,-.16),new Lr(G,{depth:.03,bevelEnabled:!1})});[.2,.48].forEach(G=>{let Z=_+G*M/.72,X=new je(D,R.inner);X.rotation.x=-Math.PI/2,X.position.set(0,Z,0),O.add(X);for(let j=0;j<3;j++)_e(.06,.05,.09,16,j===1?R.steel:R.jar,-.12+j*.13,Z+.075,.01,O,"lmpot")}),O.position.set(T+x*.14,0,-.02),De(y,O,"px",-x*.16),De(y,O,"pz",.42),De(y,O,"ry",-x*.45)}let fe=()=>b("contact",()=>qi(128,128,(y,T,u)=>{y.clearRect(0,0,T,u),y.shadowColor="rgba(0,0,0,1)",y.shadowBlur=22,y.fillStyle="#000",y.fillRect(30,30,68,68)}));function st(y,T,u){let _=new je(b("cgeo",()=>new Pn(1,1)),b("cmat",()=>new qt({map:fe(),transparent:!0,opacity:.5,depthWrite:!1,color:"#000"})));_.rotation.x=-Math.PI/2,_.scale.set(T/.56,u/.56,1),_.position.set(0,.0015,-.02),_.renderOrder=-1,_.raycast=()=>{},y.add(_)}function U(y,T,u,_,M){let x=_.kind||"b",R=_.w/100,O=(_.d||(x==="u"?35:60))/100,D=x==="b"?((_.ah||90)-90)/100:0;if(x!=="u"&&st(y,R,O-.04),M.kind=x,M.d=O,M.mat=_.acc?T.FA:_.dekor==="top"?T.top:null,_.eqk&&(y.userData.eq={k:_.eqk,wall:_.eqw}),_.corner&&_.corner.kind==="kar"){Ze(M,_,R,D);return}let G,Z;if(x==="u")G=(_.y0||145)/100,Z=(_.h||72)/100;else if(x==="t")G=pt,Z=(_.h||216)/100-pt,I(R,pt,O-.06,T.plinth,0,pt/2,-.03,y);else{G=pt+D,Z=.9+D-Lt-G;let xe=_.plExt||[0,0];I(R+(xe[0]+xe[1])/100,pt+D,O-.06,T.plinth,(xe[1]-xe[0])/200,(pt+D)/2,-.03,y)}let{zf:X,zb:j}=z(y,T,R,Z,O,G);M.zf=X,M.zb=j;let Q=_.cols||[{fr:_.fr||[{k:"door"}]}],W=Q.reduce((xe,Ae)=>xe+(Ae.cm?Ae.cm/100:0),0),$=Q.filter(xe=>!xe.cm).length||1,se=-R/2;if(Q.forEach(xe=>{let Ae=xe.cm?xe.cm/100:(R-W)/$,ve=Z-Je;Fe(M,xe.fr,se+Ae/2,Ae,G+Je/2,ve),xe.lemans&&nt(M,se+Ae/2,Ae,G,Z,xe.lemans),se+=Ae}),u.handle==="grifflos"&&x!=="u"&&!_.noGrip&&I(R,.02,.01,T.steel,0,G+Z-.012,X-.004,y,!1),x==="b"){let xe=_.topCut||[0,0];if(I(R-(xe[0]+xe[1])/100,Lt,O+.02,T.top,(xe[0]-xe[1])/200,.9+D-Lt/2,.01,y),_.app){let Ae=new ct;y.add(Ae),Ae.userData.eq={k:_.app==="sp"?"sp":"kf",id:_.id},_.app==="sp"?et(Ae,T,R,O,.9+D):Qe(Ae,T,R,_.app==="kfb"||!!u.hobDD,.9+D,-.02,_.hob)}}x==="u"&&_.led!==!1&&I(R-.02,.01,.02,T.led,0,G-.004,X-.05,y,!1)}let pe={us:(y,T,u,_)=>qe(y,T,u,_.w/100,.6,{parts:_.v==="tuer"?[.18,.82]:[.25,.375,.375],vertical:!1}),sp:(y,T,u,_)=>{qe(y,T,u,_.w/100,.6,{parts:[1]}),et(y,T,_.w/100,.6)},kf:(y,T,u,_)=>{if(_.v==="ofen"){let M=_.w/100;qe(y,T,u,M,.6,{parts:[.2,.8]});let x=.9-Lt-pt;I(M-.05,x*.8-.1,.022,T.glass,0,pt+x*.8/2,.3,y),I(M*.8,.018,.03,T.steel,0,pt+x*.8-.06,.32,y),Qe(y,T,M,!1);return}qe(y,T,u,_.w/100,.6,{parts:[.25,.375,.375]}),Qe(y,T,_.w/100,_.v!=="normal")},gs:(y,T,u,_)=>qe(y,T,u,_.w/100,.6,{parts:[1],noHandle:u.handle==="grifflos"}),ec:(y,T,u,_)=>qe(y,T,u,_.w/100,.6,{parts:[.18,.82]}),hs:(y,T,u,_)=>{let M=_.w/100,x=.6,R=Og-pt;I(M-Je,R,x,T.carcass,0,pt+R/2,-.01,y),I(M,pt,x-.06,T.plinth,0,pt/2,-.03,y);let O=x/2;_.v==="backofen"||_.v==="dampf"?(Ne(y,T,M,0,pt,.7,O,[.5,.5],u),I(M-.04,.58,.022,T.glass,0,pt+.7+.3,O,y),I(M*.8,.02,.03,T.steel,0,pt+.7+.55,O+.02,y),_.v==="dampf"?(I(M-.04,.44,.022,T.glass,0,pt+1.32+.22,O,y),Ne(y,T,M,0,pt+1.78,R-1.78,O,[1],u,{vertical:!0,vpos:["bottom"],hl:.2})):Ne(y,T,M,0,pt+1.32,R-1.32,O,[1],u,{vertical:!0,vpos:["bottom"],hl:.26})):_.v==="kuehl"?Ne(y,T,M,0,pt,R,O,[.6,.4],u,{vertical:!0,side:-1,vpos:["bottom","top"]}):Ne(y,T,M,0,pt,R,O,[.5,.5],u,{vertical:!0,vpos:["bottom","top"]})},kfr:(y,T,u,_)=>{let M=_.w/100,x=.7,R=1.78;I(M-.01,R,x-.02,T.fridge,0,R/2,0,y),I(.004,R-.02,.02,T.black,0,R/2,x/2,y),I(.02,.7,.04,T.steel,-.06,1.1,x/2+.03,y),I(.02,.7,.04,T.steel,.06,1.1,x/2+.03,y),I(.18,.3,.01,T.black,-.22,1.15,x/2+.001,y)},ws:(y,T,u,_)=>{let M=_.w/100,x=.35;if(_.v==="offen"){[0,.36,.72].forEach(R=>I(M-.01,.025,x-.02,T.F,0,gn+R+.012,0,y)),I(.025,fn,x-.02,T.F,-M/2+.012,gn+fn/2,0,y),I(.025,fn,x-.02,T.F,M/2-.012,gn+fn/2,0,y);return}I(M-Je,fn,x,T.carcass,0,gn+fn/2,0,y),_.v==="glas"?(I(M-Je*2,fn-Je,.02,T.glassClear,0,gn+fn/2,x/2+.005,y),I(M-.04,.015,x-.04,T.inner,0,gn+fn/2,0,y)):I(M-Je*2,fn-Je,.02,T.FA,0,gn+fn/2,x/2+.005,y),u.handle!=="grifflos"&&_.v!=="glas"&&I(.016,.2,.025,T.handle,M/2-.055,gn+.06+.1,x/2+.025,y),I(M-.02,.01,.02,T.led,0,gn-.004,x/2-.05,y,!1)},ns:(y,T,u,_)=>{let M=_.w/100,x=(_.h||55)/100,R=((_.ah||90)-90)/100;if(x<=.01)return;y.userData.eq={k:"bs",wall:_.wall};let O=u.back==="platte"?T.top:u.back==="fliese"?T.tile:u.back==="glas"?T.backGlass:u.back==="dibond"?T.backDibond:u.back==="holz"?T.backWood:null;if(u.back==="motiv")if(tt&&_.nW){let D=tt.image,G=_.nW/55,Z=D.width/D.height,X=1,j=1;Z>G?X=G/Z:j=Z/G;let Q=tt.clone();Q.repeat.set(_.w/_.nW*X,x/.55*j),Q.offset.set((1-X)/2+_.nx/_.nW*X,(1-j)/2),Q.needsUpdate=!0,O=new Ve({map:Q,roughness:.07,metalness:.05,envMapIntensity:1.1})}else O=T.backGlass;if(O&&u.backLed&&V==="abend"){let D=O;O=D.map&&u.back==="motiv"?D:b("nsg"+Oe.k,()=>D.clone()),O.emissive=new it("#ffd49a"),O.emissiveIntensity=u.back==="motiv"?.5:.32,D.map&&(O.emissiveMap=D.map)}if(O&&I(M,x,.012,O,0,.9+R+x/2,0,y,!1),u.backLed&&x>.3&&(I(M,.008,.012,T.led,0,.9+R+x-.006,.014,y,!1),y.userData.led=.9+R+x-.03),!O){let D=I(M,x,.004,b("m_inv",()=>new qt({visible:!1})),0,.9+R+x/2,-.004,y,!1);D.castShadow=!1}},hb:(y,T,u,_)=>{let M=_.w/100,x=_.v||"schraeg",R=-.25;if(y.userData.eq={k:"dh",id:_.id,wall:_.wall},x==="esse"){I(.3,.9,.24,T.steel,0,2.15,R+.12,y),I(M,.05,.5,T.steel,0,1.6,0,y);let D=new ct;D.position.set(0,1.775,R+.25),D.scale.set(1,1,.5/M),y.add(D);let G=new je(b("pyr",()=>new Nt(.24,.7071,.3,4,1)),T.steel);G.rotation.y=Math.PI/4,G.scale.set(M,1,M),G.castShadow=!0,D.add(G);return}if(x==="flach"){I(M-.004,.72,.33,T.F,0,1.45+.36,R+.165,y),me({s:u,M:T},y,M-.006,.7,T.F,0,1.45+.37,R+.34),I(M-.02,.03,.3,T.steel,0,1.45-.012,R+.2,y),I(M-.06,.006,.004,T.black,0,1.45-.02,R+.352,y,!1);return}if(x==="decke"){I(Math.max(.9,M+.1),.05,.6,b("m_ceil",()=>new Ve({color:"#eef0f1",roughness:.4})),0,2.575,.05,y,!1),I(Math.max(.9,M+.1)-.12,.006,.44,b("m_grille",()=>new Ve({map:ze(),roughness:.45,metalness:.6})),0,2.548,.05,y,!1);return}I(.28,.66,.22,T.steel,0,2.27,R+.11,y),I(M*.96,.2,.22,T.steel,0,1.94,R+.11,y);let O=I(M,.54,.022,T.black,0,1.83,R+.33,y);O.rotation.x=-.64,I(M,.02,.05,T.steel,0,1.6,R+.48,y)},wg:(y,T,u,_)=>{let M=(_.h||90)/100;y.userData.eq={k:"wg",wall:_.wall},I(.025,M,.62,_.dekor==="front"?T.F:T.top,0,M/2,0,y)},rg:(y,T,u,_)=>{let M=_.w/100;[0,.38].forEach(x=>I(M,.04,.26,T.top,0,1.5+x,0,y))},in:(y,T,u,_)=>{let M=_.w/100,x=(_.d||100)/100,R=x-.3,O=-x/2+R/2,D=Math.max(2,Math.round(M/.6)),G=M/D;for(let W=0;W<D;W++){let $=-M/2+G*W+G/2,se=new ct;se.position.set($,0,O),qe(se,T,u,G,R,{noTop:!0,parts:_.v==="spuele"&&W===Math.floor(D/2)?[1]:[.25,.375,.375]}),y.add(se)}let Z=_.dekor==="front"?T.F:T.top;I(M+.08,Lt,x,T.top,0,.9-Lt/2,0,y),[-1,1].forEach(W=>{let $=new ct;$.userData.eq={k:"wg"},y.add($),I(.04,.9-Lt,x,Z,W*(M/2+.02),(.9-Lt)/2,0,$)});let X=_.ih||"mulde";if(_.v==="kochfeld"){let W=new ct;if(W.position.set(0,0,O+.05),W.userData.eq={k:"isl"},Qe(W,T,.8,X==="mulde",.9,-.02,_.hob),y.add(W),X==="insel"){let $=new ct;$.position.set(0,0,O+.03),$.userData.eq={k:"isl"},I(.9,.09,.6,T.steel,0,1.68,0,$),I(.32,.86,.28,T.steel,0,2.17,0,$),I(.86,.006,.54,b("m_grille",()=>new Ve({map:ze(),roughness:.45,metalness:.6})),0,1.632,0,$,!1),y.add($)}if(X==="decke"){let $=new ct;$.position.set(0,0,O+.03),$.userData.eq={k:"isl"},I(1,.05,.6,b("m_ceil",()=>new Ve({color:"#eef0f1",roughness:.4})),0,2.575,0,$,!1),I(.88,.006,.46,b("m_grille",()=>new Ve({map:ze(),roughness:.45,metalness:.6})),0,2.548,0,$,!1),y.add($)}}let j=_.v==="kochfeld"&&X!=="mulde";if(_.v==="spuele"){let W=new ct;W.position.set((Math.floor(D/2)+.5)*G-M/2,0,O+.05),et(W,T,G,R+.3),y.add(W)}let Q=Math.max(2,Math.floor(M/.55));for(let W=0;W<Q;W++){let $=-M/2+M/(Q+1)*(W+1),se=x/2+.22,xe=new je(b("leg",()=>new Nt(.02,.02,.62,12)),T.stool);xe.position.set($,.31,se),xe.castShadow=!0,y.add(xe);let Ae=new je(b("seatg",()=>new Nt(.18,.17,.05,24)),T.seat);Ae.position.set($,.64,se),Ae.castShadow=!0,y.add(Ae)}for(let W=0;W<3;W++){if(j&&(W===1||M<1.6))continue;let $=j?(W===0?-1:1)*(M/2-.22):-M/2+M/4*(W+1),se=new je(b("lamp",()=>new Cr(.12,.22,24,1,!0)),T.stool);se.position.set($,1.82,0),y.add(se);let xe=new je(b("bulb",()=>new Dr(.04,12,12)),T.glow);xe.position.set($,1.74,0),y.add(xe);let Ae=new je(b("cord",()=>new Nt(.004,.004,.7,6)),T.stool);Ae.position.set($,2.28,0),y.add(Ae)}},th:(y,T,u,_)=>{let M=_.w/100,x=(_.d||40)/100;I(M,1.06,.06,T.FA,0,.53,-x/2+.05,y),I(M+.04,Lt,x+.04,T.top,0,1.08,0,y);let R=Math.max(2,Math.floor(M/.55));for(let O=0;O<R;O++){let D=-M/2+M/(R+1)*(O+1),G=x/2+.22,Z=new je(b("leg2",()=>new Nt(.02,.02,.78,12)),T.stool);Z.position.set(D,.39,G),y.add(Z);let X=new je(b("seatg",()=>new Nt(.18,.17,.05,24)),T.seat);X.position.set(D,.8,G),X.castShadow=!0,y.add(X)}}};function Ce(y){let T=(y.d||(y.kind==="u"?35:60))/100,u=y.w/100,_=0,M;return y.kind==="u"?(_=(y.y0||145)/100,M=_+(y.h||72)/100):y.kind==="t"?M=(y.h||216)/100:M=.9+((y.ah||90)-90)/100,[u+.02,M-_+.02,T+.04,(_+M)/2]}function Se(y){let T=y.userData.hb;T&&(ce.scale.set(T[0],T[1],T[2]),ce.position.set(0,T[3],.005),y.add(ce))}function ke(y){y=y==null?null:String(y),y!==Re&&(Re=y,ce.parent&&ce.parent.remove(ce),y!=null&&K[y]?Se(K[y]):Re=null,m())}function rt(y){for(let T=ne.length-1;T>=0;T--){let u=ne[T];if(y<u.s)continue;let _=Math.min(1,(y-u.s)/u.d);if(u.kind==="out"){let x=_*_,R=Math.max(.001,1-x);u.g.scale.setScalar(R),u.g.position.y=u.y0+u.yc*(1-R)+.12*x,_>=1&&(u.g.parent&&u.g.parent.remove(u.g),ne.splice(T,1));continue}let M=1-Math.pow(1-_,3);if(u.g.position.lerpVectors(u.p0,u.p1,M),u.kind==="in"){let x=.88+.12*M;u.g.scale.setScalar(x),u.g.position.y+=u.yc*(1-x)}_>=1&&(u.g.position.copy(u.p1),u.g.scale.setScalar(1),ne.splice(T,1))}return!0}function ot(y){let T=y.userData.st,u=Do(T.c);T.anims.forEach(_=>{let M=_.b+_.to*(_.ez?_.ez(T.c,T.ez):u);_.k==="rx"?_.o.rotation.x=M:_.k==="ry"?_.o.rotation.y=M:_.k==="px"?_.o.position.x=M:_.k==="py"?_.o.position.y=M:_.o.position.z=M}),T.hide.forEach(_=>{_.visible=T.c>.001})}let tt=null,we=null,H=null;function Te(y){H=y;let T=y.style,u=y.room,_=Oe(T);(y.motif||null)!==we&&(we=y.motif||null,tt&&tt.dispose(),tt=we?new ms(we):null,tt&&(tt.colorSpace=At,tt.anisotropy=8));let M=K,x={};for(let W in M){let $=M[W];x[W]={p:$.position.clone(),ry:$.rotation.y,g:$}}for(let W=ne.length-1;W>=0;W--)ne[W].kind!=="out"&&ne.splice(W,1);ce.parent&&ce.parent.remove(ce),te&&J.remove(te),te=new ct,J.add(te),K={};let R=u.w/100,O=u.d/100,D=2.6;if(t){let W=new je(new Pn(R+6,O+6),b("shadowcatch",()=>new Nr({opacity:.34})));W.rotation.x=-Math.PI/2,W.position.set(R/2,0,O/2),W.receiveShadow=!0,te.add(W)}else{let W=new je(new Pn(R+4,O+4),_.floor);W.rotation.x=-Math.PI/2,W.position.set(R/2,0,O/2),W.receiveShadow=!0,te.add(W)}let G=t?{}:u.walls||{N:1,E:1,S:1,W:1},Z={N:[R,R/2,0,0],S:[R,R/2,O,Math.PI],W:[O,0,O/2,Math.PI/2],E:[O,R,O/2,-Math.PI/2]};q={};for(let W in Z){if(!G[W])continue;let[$,se,xe,Ae]=Z[W],ve=new ct;ve.userData={p:new F(se,0,xe),n:{N:[0,1],S:[0,-1],W:[1,0],E:[-1,0]}[W]},q[W]=ve,te.add(ve);let Pe=new je(new Pn($,D),_.wall);Pe.position.set(se,D/2,xe),Pe.rotation.y=Ae,Pe.receiveShadow=!0,ve.add(Pe)}(y.open||[]).forEach(W=>{if(!G[W.wall])return;let[$,se,xe,Ae]=Z[W.wall],ve=new ct;ve.rotation.y=Ae;let Pe=W.s/100+W.w/200,Be={N:[Pe,0],S:[R-Pe,O],W:[0,O-Pe],E:[R,Pe]}[W.wall];ve.position.set(Be[0],0,Be[1]);let We=W.w/100;if(W.t==="fenster"){let ht=(W.y||100)/100,Ye=(W.h||120)/100,$e=new je(b("pane",()=>new Pn(1,1)),_.sky);$e.scale.set(We,Ye,1),$e.position.set(0,ht+Ye/2,.003),ve.add($e),I(We+.08,.06,.06,_.frame,0,ht,.03,ve,!1),I(We+.08,.06,.06,_.frame,0,ht+Ye,.03,ve,!1),I(.06,Ye,.06,_.frame,-We/2,ht+Ye/2,.03,ve,!1),I(.06,Ye,.06,_.frame,We/2,ht+Ye/2,.03,ve,!1),We>.9&&I(.04,Ye,.04,_.frame,0,ht+Ye/2,.03,ve,!1),I(We+.1,.03,.12,_.frame,0,ht-.015,.06,ve,!1)}else I(We,2.05,.01,W.t==="durchgang"?_.plinth:_.door,0,2.05/2,.006,ve,!1),I(We+.1,.06,.05,_.frame,0,2.05+.03,.025,ve,!1),I(.05,2.05,.05,_.frame,-We/2-.025,2.05/2,.025,ve,!1),I(.05,2.05,.05,_.frame,We/2+.025,2.05/2,.025,ve,!1),W.t==="tuer"&&I(.12,.02,.04,_.steel,We/2-.1,1.05,.04,ve);q[W.wall].add(ve)});let X=[];y.items.forEach(W=>{let $=new ct;if(W.t==="cab"){let se={g:$,M:_,s:T,anims:[],hide:[]};U($,_,T,W,se),(se.anims.length||W.id!=null)&&($.userData.st={c:0,t:0,go:0,anims:se.anims,hide:se.hide},$.userData.pid=W.id,$.userData.label=W.label||"",$.userData.wcm=W.w,$.userData.hb=Ce(W),W.id!=null&&(K[W.id]=$))}else{let se=pe[W.t];if(!se)return;se($,_,T,W)}$.position.set(W.x/100,0,W.z/100),$.rotation.y=(W.r||0)*Math.PI/180,te.add($),W.t==="ns"&&$.userData.led&&($.updateMatrixWorld(),X.unshift($.localToWorld(new F(0,$.userData.led,.1)))),(W.t==="ws"&&W.v!=="offen"||W.t==="cab"&&W.kind==="u"&&W.led!==!1)&&($.updateMatrixWorld(),X.push($.localToWorld(new F(0,(W.t==="cab"?(W.y0||145)/100:gn)-.05,.06))))});for(let W in K){let $=K[W],se=$.userData.st;se.t=se.c=re||le.has(String(W))?1:0,ot($)}if(!t&&!bs){let W=Object.keys(K),$=Object.keys(x),se=performance.now(),xe=W.filter(Pe=>!x[Pe]),Ae=$.filter(Pe=>!K[Pe]),ve=xe.filter(Pe=>Ae.some(Be=>x[Be].p.distanceTo(K[Pe].position)<.01&&x[Be].g.userData.wcm===K[Pe].userData.wcm));if(ve.length){let Pe=new Set(ve);Ae=Ae.filter(Be=>!ve.some(We=>x[Be].p.distanceTo(K[We].position)<.01)),xe=xe.filter(Be=>!Pe.has(Be))}$.length&&xe.length<=3&&Ae.length<=3&&xe.length<Math.max(2,W.length/2)&&(xe.forEach((Pe,Be)=>{let We=K[Pe],ht=We.position.clone(),Ye=We.rotation.y,$e=We.userData.hb?We.userData.hb[3]:.5,Xe=ht.clone().add(new F(Math.sin(Ye)*.55,.18,Math.cos(Ye)*.55));We.position.copy(Xe),We.scale.setScalar(.88),ne.push({kind:"in",g:We,p0:Xe,p1:ht,yc:$e,s:se+Be*70,d:620})}),W.forEach(Pe=>{let Be=x[Pe];if(!Be)return;let We=K[Pe];if(Math.abs(Be.ry-We.rotation.y)>.01||Be.p.distanceTo(We.position)<.002||Be.p.distanceTo(We.position)>3)return;let ht=We.position.clone();We.position.copy(Be.p),ne.push({kind:"mv",g:We,p0:Be.p.clone(),p1:ht,yc:0,s:se,d:460})}),Ae.forEach(Pe=>{let Be=x[Pe].g;Be&&(J.add(Be),ne.push({kind:"out",g:Be,y0:Be.position.y,yc:Be.userData.hb?Be.userData.hb[3]:.5,s:se,d:420}))}))}if(Re!=null&&K[Re]?Se(K[Re]):Re=null,V==="abend"){let W=new Ln("#ffe2c0",26,0,2);W.position.set(R/2,2.5,O/2+.3),te.add(W);let $=new Ln("#ffcf96",10,0,2);if($.position.set(R/2,1.9,O-.4),te.add($),X.slice(0,10).forEach(se=>{let xe=new Ln("#ffe4b8",3.2,1.8,2);xe.position.copy(se),te.add(xe)}),y.items.some(se=>se.t==="in")){let se=y.items.find(Ae=>Ae.t==="in"),xe=new Ln("#ffd09a",2.5,2.5,2);xe.position.set(se.x/100,1.7,se.z/100),te.add(xe)}}B();let j=u.w+"x"+u.d;k={w:R,d:O},t?C.position.set(R/2+1.2,6,O/2+4):C.position.set(R/2-3,7,O/2+5),C.target.position.set(R/2,0,O/2);let Q=Math.max(R,O)/2+1.5;Object.assign(C.shadow.camera,{left:-Q,right:Q,top:Q,bottom:-Q}),C.shadow.camera.updateProjectionMatrix(),j!==ye&&(ye=j,a&&(a.target.set(R/2,.9,O/2),be("perspektive"))),m()}function be(y,T){if(c=y,!a)return;let u=k.w,_=k.d,M={x:u/2,z:_/2},x=Math.max(u,_)*(o.aspect<1?1.75:o.aspect<1.3?1.3:1.05),R={perspektive:[M.x+x*.42,1.5+x*.55,M.z+x*1],front:[M.x,1.6,M.z+x*.95+.8],top:[M.x,x*1.45+2,M.z+.01],ecke:[M.x-x*.5,1.6+x*.45,M.z+x*.95],augen:[M.x,1.62,_-.35]}[y];if(!R){m();return}let O=y==="augen"?new F(M.x,1.25,.3):new F(u/2,.9,_/2),D=new F(...R);if(T&&!bs&&o.position.distanceTo(D)>.05){S={p0:o.position.clone(),p1:D,t0:a.target.clone(),t1:O,s:performance.now(),d:850},m();return}S=null,o.position.copy(D),a.target.copy(O),a.update(),m()}function Ke(y){let T=S,u=Math.min(1,(y-T.s)/T.d),_=Do(u);return o.position.lerpVectors(T.p0,T.p1,_),o.position.y+=Math.sin(Math.PI*_)*.35*Math.min(1,T.p0.distanceTo(T.p1)/3),a.target.lerpVectors(T.t0,T.t1,_),a.update(),u>=1&&(S=null),!0}function Ge(){let y=i.clientWidth,T=i.clientHeight;!y||!T||(n.setSize(y,T,!1),n.domElement.style.width=y+"px",n.domElement.style.height=T+"px",o.aspect=y/T,o.updateProjectionMatrix(),!l&&ye&&a&&be(c),m())}Ge();let dt=new ResizeObserver(Ge);dt.observe(i);let ft=!0,Tt=new IntersectionObserver(([y])=>{ft=y.isIntersecting,ft&&m()});Tt.observe(i);let Ct=!1,mt=0;function It(y,T){let u=y.userData.st;u.anims.length&&(u.t=T?1:0,bs?(u.c=u.t,ot(y),m()):Ct=!0,m())}function $t(y){let T=Math.min(.08,(y-(mt||y))/1e3);mt=y;let u=!1;for(let _ in K){let M=K[_],x=M.userData.st;x.c===x.t||!x.anims.length||(u=!0,!(x.go&&y<x.go)&&(x.go=0,x.c<=0&&x.t===1?x.ez=1:x.c>=1&&x.t===0&&(x.ez=0),x.c=x.t>x.c?Math.min(x.t,x.c+T/.65):Math.max(x.t,x.c-T/.55),ot(M)))}return u||(Ct=!1,mt=0),u}let Gn=new zr,ci=new Ee;function hi(y){for(let T=y;T;T=T.parent)if(!T.visible)return!1;return!0}function Yi(y,T){if(!te)return null;let u=n.domElement.getBoundingClientRect();ci.set((y-u.left)/u.width*2-1,-(T-u.top)/u.height*2+1),Gn.setFromCamera(ci,o);let _=Gn.intersectObject(te,!0);for(let M of _)if(!(!hi(M.object)&&!(M.object.material&&M.object.material.visible===!1))){for(let x=M.object;x&&x!==te;x=x.parent){if(x.userData&&x.userData.eq&&e.onEq)return{isEq:1,eq:x.userData.eq};if(x.userData&&x.userData.st)return x}if(!(M.object.isMesh&&M.object.material&&M.object.material.isShadowMaterial))return null}return null}let St=null,ws={sp:"Sp\xFCle \xB7 antippen f\xFCr Becken & Armatur",kf:"Kochfeld \xB7 antippen f\xFCr Breite & Abzug",dh:"Dunstabzug \xB7 antippen f\xFCr die Bauform",bs:"K\xFCchenr\xFCckwand \xB7 antippen f\xFCr Material & Motiv",isl:"Kochinsel \xB7 antippen f\xFCr Kochfeld & Abzug"};if(!t){St=document.createElement("div"),St.setAttribute("aria-hidden","true"),St.style.cssText="position:absolute;z-index:3;pointer-events:none;padding:6px 10px;border-radius:10px;background:rgba(24,22,20,.86);color:#fff;font:600 12px/1.3 system-ui,sans-serif;white-space:nowrap;opacity:0;transition:opacity .15s;transform:translate(-50%,-130%)",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(St);let y=null,T=0;n.domElement.addEventListener("pointerdown",x=>{y={x:x.clientX,y:x.clientY,t:performance.now()}});let u=0,_=(x,R)=>{let O=x.userData,D=O.st.anims.length;return(O.label||"")+(O.wcm?" \xB7 "+O.wcm+" cm":"")+(D?R?O.st.t>.5?" \xB7 \xF6ffnet":" \xB7 schlie\xDFt":O.st.t>.5?" \xB7 klicken zum Schlie\xDFen":" \xB7 klicken zum \xD6ffnen":"")},M=(x,R,O,D)=>{let G=i.getBoundingClientRect();St.textContent=_(x,D),St.style.left=Math.max(70,Math.min(G.width-70,R-G.left))+"px",St.style.top=Math.max(40,O-G.top)+"px",St.style.opacity=1};n.domElement.addEventListener("pointerup",x=>{if(!y)return;let R=Math.hypot(x.clientX-y.x,x.clientY-y.y),O=performance.now()-y.t;if(y=null,R>6||O>600)return;let D=Yi(x.clientX,x.clientY);if(!D)return;if(D.isEq){St.style.opacity=0,e.onEq(D.eq,x.clientX,x.clientY);return}if(x.pointerType!=="mouse"&&D.userData.label&&(M(D,x.clientX,x.clientY,!0),clearTimeout(u),u=setTimeout(()=>{St.style.opacity=0,Re===String(D.userData.pid)&&(ke(null),e.onHover&&e.onHover(null))},1400),ke(D.userData.pid),e.onHover&&e.onHover(D.userData.pid)),!D.userData.st.anims.length)return;let G=String(D.userData.pid),Z=!(D.userData.st.t>.5);if(Z?le.add(G):le.delete(G),!Z&&re){re=!1;for(let X in K)X!==G&&K[X].userData.st.t>.5&&le.add(X)}D.userData.st.go=0,It(D,Z),e.onPick&&e.onPick(D.userData.pid,Z),x.pointerType==="mouse"&&M(D,x.clientX,x.clientY)}),n.domElement.addEventListener("pointermove",x=>{if(x.pointerType!=="mouse"||x.buttons){St.style.opacity=0;return}let R=performance.now();if(R-T<60)return;T=R;let O=Yi(x.clientX,x.clientY),D=O&&O.isEq?null:O;if(O&&O.isEq){let Z=i.getBoundingClientRect();St.textContent=ws[O.eq.k]||"",St.style.left=Math.max(70,Math.min(Z.width-70,x.clientX-Z.left))+"px",St.style.top=Math.max(40,x.clientY-Z.top)+"px",St.style.opacity=1,n.domElement.style.cursor="pointer"}else D&&D.userData.label?(M(D,x.clientX,x.clientY),n.domElement.style.cursor=D.userData.st.anims.length?"pointer":""):(St.style.opacity=0,n.domElement.style.cursor="");let G=D?String(D.userData.pid):null;G!==Re&&(ke(G),e.onHover&&e.onHover(G))}),n.domElement.addEventListener("pointerleave",()=>{St.style.opacity=0,Re!=null&&(ke(null),e.onHover&&e.onHover(null))})}function Zi(y){if(g=0,f||d||!ft||!i.clientWidth)return;let T=!1;if(S&&Ke(y)&&(T=!0),a&&a.update()&&(T=!0),Ct&&$t(y)&&(T=!0),ne.length&&rt(y)&&(T=!0),T&&(h=!0),h){h=!1,T=!0;for(let u in q){let _=q[u].userData;q[u].visible=(o.position.x-_.p.x)*_.n[0]+(o.position.z-_.p.z)*_.n[1]>0}n.render(s,o)}T?v=0:v++,v<24&&!g&&(g=requestAnimationFrame(Zi))}p();let Ts={set:Te,view:y=>{l=!1,be(y,!0)},mood:(y,T)=>{V=y,T?Te(T):B()},snapshot:()=>(n.render(s,o),n.domElement.toDataURL("image/jpeg",.9)),toggle:(y,T)=>{let u=K[y];if(!u||!u.userData.st.anims.length)return!1;let _=T==null?!(u.userData.st.t>.5):!!T;return _?le.add(String(y)):le.delete(String(y)),u.userData.st.go=0,It(u,_),_},openAll:y=>{re=!!y,y||le.clear();let T=new F,u=Object.values(K).filter(x=>x.userData.st.anims.length).map(x=>(x.getWorldPosition(T),T.project(o),[T.x,x])).sort((x,R)=>re?x[0]-R[0]:R[0]-x[0]),_=Math.min(.085,1.5/Math.max(1,u.length)),M=performance.now();return u.forEach(([,x],R)=>{let O=x.userData.st;O.go=bs||(re?O.c>.99:O.c<.01)?0:M+R*_*1e3,It(x,re)}),re},highlight:y=>{t||ke(y)},focus:y=>{let T=K[String(y)];if(!T||!a)return!1;let u=T.userData.hb||[.6,.8,.6,.45],_=T.rotation.y,M=new F(Math.sin(_),0,Math.cos(_)),x=new F(Math.cos(_),0,-Math.sin(_)),R=T.localToWorld(new F(0,u[3],0)).addScaledVector(M,u[3]<.7?.22:.1),O=Math.max(1.9,u[1]*1.1+u[0]*.9)*(o.aspect<1?1.5:1),D=R.clone().addScaledVector(M,O).addScaledVector(x,O*.34);return D.y=Math.max(1.35,R.y+(u[3]<.7?1:.2)),l=!0,bs?(o.position.copy(D),a.target.copy(R),a.update(),m(),!0):(S={p0:o.position.clone(),p1:D,t0:a.target.clone(),t1:R,s:performance.now(),d:900},m(),!0)},isAllOpen:()=>re,pause:y=>{d=!!y,y||m()},busy:()=>!!(g||Ct||ne.length||S),camera:o,rig:P,setPhoto:({pos:y,quat:T,fov:u})=>{y&&o.position.set(y[0],y[1],y[2]),T&&o.quaternion.set(T[0],T[1],T[2],T[3]),u&&(o.fov=u),o.updateProjectionMatrix(),o.updateMatrixWorld(),m()},lookAt:(y,T,u)=>{o.position.set(y[0],y[1],y[2]),o.up.set(0,1,0),o.lookAt(T[0],T[1],T[2]),u&&(o.fov=u),o.updateProjectionMatrix(),o.updateMatrixWorld(),m()},setRig:({x:y=0,z:T=0,ry:u=0,s:_=1,cx:M=0,cz:x=0})=>{P.position.set(M+y,0,x+T),P.rotation.y=u,P.scale.setScalar(_),J.position.set(-M,0,-x),m()},floorAt:(y,T)=>{ci.set(y,T),Gn.setFromCamera(ci,o);let u=new F;return Gn.ray.intersectPlane(new Kt(new F(0,1,0),0),u)?{x:u.x,z:u.z}:null},exposure:y=>{N=y,n.toneMappingExposure=y,m()},render:()=>{n.render(s,o)},capture:(y,T)=>{let u=n.getPixelRatio(),_=i.clientWidth,M=i.clientHeight;n.setPixelRatio(1),n.setSize(y,T,!1),o.aspect=y/T,o.updateProjectionMatrix(),n.render(s,o);let x=document.createElement("canvas");return x.width=y,x.height=T,x.getContext("2d").drawImage(n.domElement,0,0,y,T),n.setPixelRatio(u),n.setSize(_,M,!1),n.domElement.style.width=_+"px",n.domElement.style.height=M+"px",o.aspect=_/M,o.updateProjectionMatrix(),m(),x},renderHQ:(y=1600,T=1e3)=>{let u=Math.max(1,Math.min(2,4096/Math.max(y,T))),_=C.shadow.mapSize.x,M=D=>{C.shadow.mapSize.set(D,D),C.shadow.map&&(C.shadow.map.dispose(),C.shadow.map=null)};M(4096);let x;try{x=Ts.capture(Math.round(y*u),Math.round(T*u))}finally{M(_)}let R=document.createElement("canvas");R.width=y,R.height=T;let O=R.getContext("2d");return O.imageSmoothingEnabled=!0,O.imageSmoothingQuality="high",O.drawImage(x,0,0,y,T),m(),R},_rt:()=>({scene:s,cam:o,group:te,wallGroups:q,M:Oe.m,state:H,room:k,mood:V,H:2.6,renderer:n}),dispose:()=>{f=!0,dt.disconnect(),Tt.disconnect(),a&&a.dispose(),n.dispose();try{n.forceContextLoss()}catch{}n.domElement.remove(),St&&St.remove()}};return Ts}window.PelPlanner3D=window.PelPlanner3D||Fg;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
