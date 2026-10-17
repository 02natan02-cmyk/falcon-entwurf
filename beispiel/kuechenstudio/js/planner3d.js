(()=>{var oi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jc=0,Fo=1,Kc=2;var xc=1,Eo=2,bn=3,Gn=0,kt=1,wn=2;var Hn=0,Li=1,Bo=2,zo=3,Ho=4,$c=5,Kn=100,jc=101,Qc=102,ko=103,Vo=104,eh=200,th=201,nh=202,ih=203,La=204,Ia=205,sh=206,rh=207,ah=208,oh=209,lh=210,ch=211,hh=212,uh=213,dh=214,fh=0,ph=1,mh=2,sr=3,gh=4,_h=5,xh=6,yh=7,yc=0,vh=1,Mh=2,kn=0,Sh=1,Eh=2,bh=3,bo=4,wh=5,Th=6;var vc=300,Ni=301,Oi=302,Da=303,Ua=304,Hr=306,ss=1e3,ln=1001,Na=1002,Xt=1003,Go=1004;var Jr=1005;var Qt=1006,Ah=1007;var rs=1008;var Vn=1009,Rh=1010,Ch=1011,wo=1012,Mc=1013,Bn=1014,zn=1015,as=1016,Sc=1017,Ec=1018,Qn=1020,Ph=1021,cn=1023,Lh=1024,Ih=1025,ei=1026,Fi=1027,Dh=1028,bc=1029,Uh=1030,wc=1031,Tc=1033,Kr=33776,$r=33777,jr=33778,Qr=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,Ac=36196,Zo=37492,Jo=37496,Ko=37808,$o=37809,jo=37810,Qo=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,ea=36492,hl=36494,ul=36495,Nh=36283,dl=36284,fl=36285,pl=36286;var rr=2300,ar=2301,ta=2302,ml=2400,gl=2401,_l=2402;var Rc=3e3,ti=3001,Oh=3200,Fh=3201,Cc=0,Bh=1,en="",Tt="srgb",An="srgb-linear",To="display-p3",kr="display-p3-linear",or="linear",vt="srgb",lr="rec709",cr="p3";var ui=7680;var xl=519,zh=512,Hh=513,kh=514,Pc=515,Vh=516,Gh=517,Wh=518,Xh=519,yl=35044;var vl="300 es",Oa=1035,Tn=2e3,hr=2001,mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ml=1234567,Ii=Math.PI/180,os=180/Math.PI;function ci(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ft(i,e,t){return Math.max(e,Math.min(t,i))}function Ao(i,e){return(i%e+e)%e}function qh(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Yh(i,e,t){return i!==e?(t-i)/(e-i):0}function ji(i,e,t){return(1-t)*i+t*e}function Zh(i,e,t,n){return ji(i,e,1-Math.exp(-t*n))}function Jh(i,e=1){return e-Math.abs(Ao(i,e*2)-e)}function Kh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function $h(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function jh(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Qh(i,e){return i+Math.random()*(e-i)}function eu(i){return i*(.5-Math.random())}function tu(i){i!==void 0&&(Ml=i);let e=Ml+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nu(i){return i*Ii}function iu(i){return i*os}function Fa(i){return(i&i-1)===0&&i!==0}function su(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ur(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ru(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),d=r((e-n)/2),p=o((e-n)/2),g=r((n-e)/2),M=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*d,l*p,a*c);break;case"YZY":i.set(l*p,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*p,a*h,a*c);break;case"XZX":i.set(a*h,l*M,l*g,a*c);break;case"YXY":i.set(l*g,a*h,l*M,a*c);break;case"ZYZ":i.set(l*M,l*g,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Lc={DEG2RAD:Ii,RAD2DEG:os,generateUUID:ci,clamp:Ft,euclideanModulo:Ao,mapLinear:qh,inverseLerp:Yh,lerp:ji,damp:Zh,pingpong:Jh,smoothstep:Kh,smootherstep:$h,randInt:jh,randFloat:Qh,randFloatSpread:eu,seededRandom:tu,degToRad:nu,radToDeg:iu,isPowerOfTwo:Fa,ceilPowerOfTwo:su,floorPowerOfTwo:ur,setQuaternionFromProperEuler:ru,normalize:Gt,denormalize:Ai},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},lt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],p=n[2],g=n[5],M=n[8],b=s[0],m=s[3],f=s[6],C=s[1],E=s[4],P=s[7],V=s[2],D=s[5],I=s[8];return r[0]=o*b+a*C+l*V,r[3]=o*m+a*E+l*D,r[6]=o*f+a*P+l*I,r[1]=c*b+h*C+d*V,r[4]=c*m+h*E+d*D,r[7]=c*f+h*P+d*I,r[2]=p*b+g*C+M*V,r[5]=p*m+g*E+M*D,r[8]=p*f+g*P+M*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,p=a*l-h*r,g=c*r-o*l,M=t*d+n*p+s*g;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/M;return e[0]=d*b,e[1]=(s*c-h*n)*b,e[2]=(a*n-s*o)*b,e[3]=p*b,e[4]=(h*t-s*l)*b,e[5]=(s*r-a*t)*b,e[6]=g*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(na.makeScale(e,t)),this}rotate(e){return this.premultiply(na.makeRotation(-e)),this}translate(e,t){return this.premultiply(na.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},na=new lt;function Ic(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function au(){let i=dr("canvas");return i.style.display="block",i}var Sl={};function Qi(i){i in Sl||(Sl[i]=!0,console.warn(i))}var El=new lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bl=new lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[An]:{transfer:or,primaries:lr,toReference:i=>i,fromReference:i=>i},[Tt]:{transfer:vt,primaries:lr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[kr]:{transfer:or,primaries:cr,toReference:i=>i.applyMatrix3(bl),fromReference:i=>i.applyMatrix3(El)},[To]:{transfer:vt,primaries:cr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(bl),fromReference:i=>i.applyMatrix3(El).convertLinearToSRGB()}},ou=new Set([An,kr]),_t={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ou.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Rs[e].toReference,s=Rs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===en?or:Rs[i].transfer}};function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ia(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var di,fr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{di===void 0&&(di=dr("canvas")),di.width=e.width,di.height=e.height;let n=di.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=di}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=dr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Di(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lu=0,pr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=ci(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(sa(s[o].image)):r.push(sa(s[o]))}else r=sa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var cu=0,nn=class i extends mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ln,s=ln,r=Qt,o=rs,a=cn,l=Vn,c=i.DEFAULT_ANISOTROPY,h=en){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ci(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ti?Tt:en),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case ln:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case ln:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Tt?ti:Rc}set encoding(e){Qi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ti?Tt:en}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=vc;nn.DEFAULT_ANISOTROPY=1;var St=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],g=l[5],M=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(d-b)<.01&&Math.abs(M-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+b)<.1&&Math.abs(M+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,P=(g+1)/2,V=(f+1)/2,D=(h+p)/4,I=(d+b)/4,ee=(M+m)/4;return E>P&&E>V?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=D/n,r=I/n):P>V?P<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(P),n=D/s,r=ee/s):V<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(V),n=I/r,s=ee/r),this.set(n,s,r,t),this}let C=Math.sqrt((m-M)*(m-M)+(d-b)*(d-b)+(p-h)*(p-h));return Math.abs(C)<.001&&(C=1),this.x=(m-M)/C,this.y=(d-b)/C,this.z=(p-h)/C,this.w=Math.acos((c+g+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ba=class extends mn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(Qi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ti?Tt:en),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new nn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new pr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Rn=class extends Ba{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},mr=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var za=class extends nn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],p=r[o+0],g=r[o+1],M=r[o+2],b=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=p,e[t+1]=g,e[t+2]=M,e[t+3]=b;return}if(d!==b||l!==p||c!==g||h!==M){let m=1-a,f=l*p+c*g+h*M+d*b,C=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let V=Math.sqrt(E),D=Math.atan2(V,f*C);m=Math.sin(m*D)/V,a=Math.sin(a*D)/V}let P=a*C;if(l=l*m+p*P,c=c*m+g*P,h=h*m+M*P,d=d*m+b*P,m===1-a){let V=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=V,c*=V,h*=V,d*=V}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],p=r[o+1],g=r[o+2],M=r[o+3];return e[t]=a*M+h*d+l*g-c*p,e[t+1]=l*M+h*p+c*d-a*g,e[t+2]=c*M+h*g+a*p-l*d,e[t+3]=h*M-a*d-l*p-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),p=l(n/2),g=l(s/2),M=l(r/2);switch(o){case"XYZ":this._x=p*h*d+c*g*M,this._y=c*g*d-p*h*M,this._z=c*h*M+p*g*d,this._w=c*h*d-p*g*M;break;case"YXZ":this._x=p*h*d+c*g*M,this._y=c*g*d-p*h*M,this._z=c*h*M-p*g*d,this._w=c*h*d+p*g*M;break;case"ZXY":this._x=p*h*d-c*g*M,this._y=c*g*d+p*h*M,this._z=c*h*M+p*g*d,this._w=c*h*d-p*g*M;break;case"ZYX":this._x=p*h*d-c*g*M,this._y=c*g*d+p*h*M,this._z=c*h*M-p*g*d,this._w=c*h*d+p*g*M;break;case"YZX":this._x=p*h*d+c*g*M,this._y=c*g*d+p*h*M,this._z=c*h*M-p*g*d,this._w=c*h*d-p*g*M;break;case"XZY":this._x=p*h*d-c*g*M,this._y=c*g*d-p*h*M,this._z=c*h*M+p*g*d,this._w=c*h*d+p*g*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],p=n+a+d;if(p>0){let g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(h-l)*g,this._y=(r-c)*g,this._z=(o-s)*g}else if(n>a&&n>d){let g=2*Math.sqrt(1+n-a-d);this._w=(h-l)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(r+c)/g}else if(a>d){let g=2*Math.sqrt(1+a-n-d);this._w=(r-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(l+h)/g}else{let g=2*Math.sqrt(1+d-n-a);this._w=(o-s)/g,this._x=(r+c)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*s+t*this._y,this._z=g*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,p=Math.sin(t*h)/c;return this._w=o*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),d=2*(r*n-o*t);return this.x=t+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new O,wl=new hn,ni=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cs.copy(n.boundingBox)),Cs.applyMatrix4(e.matrixWorld),this.union(Cs)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yi),Ps.subVectors(this.max,Yi),fi.subVectors(e.a,Yi),pi.subVectors(e.b,Yi),mi.subVectors(e.c,Yi),Dn.subVectors(pi,fi),Un.subVectors(mi,pi),Xn.subVectors(fi,mi);let t=[0,-Dn.z,Dn.y,0,-Un.z,Un.y,0,-Xn.z,Xn.y,Dn.z,0,-Dn.x,Un.z,0,-Un.x,Xn.z,0,-Xn.x,-Dn.y,Dn.x,0,-Un.y,Un.x,0,-Xn.y,Xn.x,0];return!aa(t,fi,pi,mi,Ps)||(t=[1,0,0,0,1,0,0,0,1],!aa(t,fi,pi,mi,Ps))?!1:(Ls.crossVectors(Dn,Un),t=[Ls.x,Ls.y,Ls.z],aa(t,fi,pi,mi,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yn=[new O,new O,new O,new O,new O,new O,new O,new O],rn=new O,Cs=new ni,fi=new O,pi=new O,mi=new O,Dn=new O,Un=new O,Xn=new O,Yi=new O,Ps=new O,Ls=new O,qn=new O;function aa(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){qn.fromArray(i,r);let a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=e.dot(qn),c=t.dot(qn),h=n.dot(qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var hu=new ni,Zi=new O,oa=new O,Bi=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):hu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);let t=Zi.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(oa)),this.expandByPoint(Zi.copy(e.center).sub(oa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},vn=new O,la=new O,Is=new O,Nn=new O,ca=new O,Ds=new O,ha=new O,ii=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vn.copy(this.origin).addScaledVector(this.direction,t),vn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){la.copy(e).add(t).multiplyScalar(.5),Is.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(la);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Is),a=Nn.dot(this.direction),l=-Nn.dot(Is),c=Nn.lengthSq(),h=Math.abs(1-o*o),d,p,g,M;if(h>0)if(d=o*l-a,p=o*a-l,M=r*h,d>=0)if(p>=-M)if(p<=M){let b=1/h;d*=b,p*=b,g=d*(d+o*p+2*a)+p*(o*d+p+2*l)+c}else p=r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;else p<=-M?(d=Math.max(0,-(-o*r+a)),p=d>0?-r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+c):p<=M?(d=0,p=Math.min(Math.max(-r,-l),r),g=p*(p+2*l)+c):(d=Math.max(0,-(o*r+a)),p=d>0?r:Math.min(Math.max(-r,-l),r),g=-d*d+p*(p+2*l)+c);else p=o>0?-r:r,d=Math.max(0,-(o*p+a)),g=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(la).addScaledVector(Is,p),g}intersectSphere(e,t){vn.subVectors(e.center,this.origin);let n=vn.dot(this.direction),s=vn.dot(vn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(a=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vn)!==null}intersectTriangle(e,t,n,s,r){ca.subVectors(t,e),Ds.subVectors(n,e),ha.crossVectors(ca,Ds);let o=this.direction.dot(ha),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Nn.subVectors(this.origin,e);let l=a*this.direction.dot(Ds.crossVectors(Nn,Ds));if(l<0)return null;let c=a*this.direction.dot(ca.cross(Nn));if(c<0||l+c>o)return null;let h=-a*Nn.dot(ha);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class i{constructor(e,t,n,s,r,o,a,l,c,h,d,p,g,M,b,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,d,p,g,M,b,m)}set(e,t,n,s,r,o,a,l,c,h,d,p,g,M,b,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=p,f[3]=g,f[7]=M,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/gi.setFromMatrixColumn(e,0).length(),r=1/gi.setFromMatrixColumn(e,1).length(),o=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=o*h,g=o*d,M=a*h,b=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=g+M*c,t[5]=p-b*c,t[9]=-a*l,t[2]=b-p*c,t[6]=M+g*c,t[10]=o*l}else if(e.order==="YXZ"){let p=l*h,g=l*d,M=c*h,b=c*d;t[0]=p+b*a,t[4]=M*a-g,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=g*a-M,t[6]=b+p*a,t[10]=o*l}else if(e.order==="ZXY"){let p=l*h,g=l*d,M=c*h,b=c*d;t[0]=p-b*a,t[4]=-o*d,t[8]=M+g*a,t[1]=g+M*a,t[5]=o*h,t[9]=b-p*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let p=o*h,g=o*d,M=a*h,b=a*d;t[0]=l*h,t[4]=M*c-g,t[8]=p*c+b,t[1]=l*d,t[5]=b*c+p,t[9]=g*c-M,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let p=o*l,g=o*c,M=a*l,b=a*c;t[0]=l*h,t[4]=b-p*d,t[8]=M*d+g,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=g*d+M,t[10]=p-b*d}else if(e.order==="XZY"){let p=o*l,g=o*c,M=a*l,b=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=p*d+b,t[5]=o*h,t[9]=g*d-M,t[2]=M*d-g,t[6]=a*h,t[10]=b*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uu,e,du)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),On.crossVectors(n,Jt),On.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),On.crossVectors(n,Jt)),On.normalize(),Us.crossVectors(Jt,On),s[0]=On.x,s[4]=Us.x,s[8]=Jt.x,s[1]=On.y,s[5]=Us.y,s[9]=Jt.y,s[2]=On.z,s[6]=Us.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],p=n[9],g=n[13],M=n[2],b=n[6],m=n[10],f=n[14],C=n[3],E=n[7],P=n[11],V=n[15],D=s[0],I=s[4],ee=s[8],R=s[12],T=s[1],Z=s[5],re=s[9],ue=s[13],k=s[2],Y=s[6],j=s[10],te=s[14],le=s[3],ne=s[7],ce=s[11],ge=s[15];return r[0]=o*D+a*T+l*k+c*le,r[4]=o*I+a*Z+l*Y+c*ne,r[8]=o*ee+a*re+l*j+c*ce,r[12]=o*R+a*ue+l*te+c*ge,r[1]=h*D+d*T+p*k+g*le,r[5]=h*I+d*Z+p*Y+g*ne,r[9]=h*ee+d*re+p*j+g*ce,r[13]=h*R+d*ue+p*te+g*ge,r[2]=M*D+b*T+m*k+f*le,r[6]=M*I+b*Z+m*Y+f*ne,r[10]=M*ee+b*re+m*j+f*ce,r[14]=M*R+b*ue+m*te+f*ge,r[3]=C*D+E*T+P*k+V*le,r[7]=C*I+E*Z+P*Y+V*ne,r[11]=C*ee+E*re+P*j+V*ce,r[15]=C*R+E*ue+P*te+V*ge,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],p=e[10],g=e[14],M=e[3],b=e[7],m=e[11],f=e[15];return M*(+r*l*d-s*c*d-r*a*p+n*c*p+s*a*g-n*l*g)+b*(+t*l*g-t*c*p+r*o*p-s*o*g+s*c*h-r*l*h)+m*(+t*c*d-t*a*g-r*o*d+n*o*g+r*a*h-n*c*h)+f*(-s*a*h-t*l*d+t*a*p+s*o*d-n*o*p+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],p=e[10],g=e[11],M=e[12],b=e[13],m=e[14],f=e[15],C=d*m*c-b*p*c+b*l*g-a*m*g-d*l*f+a*p*f,E=M*p*c-h*m*c-M*l*g+o*m*g+h*l*f-o*p*f,P=h*b*c-M*d*c+M*a*g-o*b*g-h*a*f+o*d*f,V=M*d*l-h*b*l-M*a*p+o*b*p+h*a*m-o*d*m,D=t*C+n*E+s*P+r*V;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/D;return e[0]=C*I,e[1]=(b*p*r-d*m*r-b*s*g+n*m*g+d*s*f-n*p*f)*I,e[2]=(a*m*r-b*l*r+b*s*c-n*m*c-a*s*f+n*l*f)*I,e[3]=(d*l*r-a*p*r-d*s*c+n*p*c+a*s*g-n*l*g)*I,e[4]=E*I,e[5]=(h*m*r-M*p*r+M*s*g-t*m*g-h*s*f+t*p*f)*I,e[6]=(M*l*r-o*m*r-M*s*c+t*m*c+o*s*f-t*l*f)*I,e[7]=(o*p*r-h*l*r+h*s*c-t*p*c-o*s*g+t*l*g)*I,e[8]=P*I,e[9]=(M*d*r-h*b*r-M*n*g+t*b*g+h*n*f-t*d*f)*I,e[10]=(o*b*r-M*a*r+M*n*c-t*b*c-o*n*f+t*a*f)*I,e[11]=(h*a*r-o*d*r-h*n*c+t*d*c+o*n*g-t*a*g)*I,e[12]=V*I,e[13]=(h*b*s-M*d*s+M*n*p-t*b*p-h*n*m+t*d*m)*I,e[14]=(M*a*s-o*b*s-M*n*l+t*b*l+o*n*m-t*a*m)*I,e[15]=(o*d*s-h*a*s+h*n*l-t*d*l-o*n*p+t*a*p)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,p=r*c,g=r*h,M=r*d,b=o*h,m=o*d,f=a*d,C=l*c,E=l*h,P=l*d,V=n.x,D=n.y,I=n.z;return s[0]=(1-(b+f))*V,s[1]=(g+P)*V,s[2]=(M-E)*V,s[3]=0,s[4]=(g-P)*D,s[5]=(1-(p+f))*D,s[6]=(m+C)*D,s[7]=0,s[8]=(M+E)*I,s[9]=(m-C)*I,s[10]=(1-(p+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=gi.set(s[0],s[1],s[2]).length(),o=gi.set(s[4],s[5],s[6]).length(),a=gi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],an.copy(this);let c=1/r,h=1/o,d=1/a;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=h,an.elements[5]*=h,an.elements[6]*=h,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,t.setFromRotationMatrix(an),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Tn){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,M;if(a===Tn)g=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===hr)g=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Tn){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(o-r),p=(t+e)*c,g=(n+s)*h,M,b;if(a===Tn)M=(o+r)*d,b=-2*d;else if(a===hr)M=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=b,l[14]=-M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gi=new O,an=new At,uu=new O(0,0,0),du=new O(1,1,1),On=new O,Us=new O,Jt=new O,Tl=new At,Al=new hn,gr=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],p=s[6],g=s[10];switch(t){case"XYZ":this._y=Math.asin(Ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ft(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ft(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-Ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Al.setFromEuler(this),this.setFromQuaternion(Al,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gr.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fu=0,Rl=new O,_i=new hn,Mn=new At,Ns=new O,Ji=new O,pu=new O,mu=new hn,Cl=new O(1,0,0),Pl=new O(0,1,0),Ll=new O(0,0,1),gu={type:"added"},_u={type:"removed"},Vt=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fu++}),this.uuid=ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new gr,n=new hn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new lt}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(Cl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Ll,e)}translateOnAxis(e,t){return Rl.copy(e).applyQuaternion(this.quaternion),this.position.add(Rl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ns.copy(e):Ns.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(Ji,Ns,this.up):Mn.lookAt(Ns,Ji,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(Mn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_u)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,mu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),p=o(e.skeletons),g=o(e.animations),M=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),M.length>0&&(n.nodes=M)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Vt.DEFAULT_UP=new O(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var on=new O,Sn=new O,ua=new O,En=new O,xi=new O,yi=new O,Il=new O,da=new O,fa=new O,pa=new O,Os=!1,jn=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),on.subVectors(e,t),s.cross(on);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){on.subVectors(s,t),Sn.subVectors(n,t),ua.subVectors(e,t);let o=on.dot(on),a=on.dot(Sn),l=on.dot(ua),c=Sn.dot(Sn),h=Sn.dot(ua),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let p=1/d,g=(c*l-a*h)*p,M=(o*h-a*l)*p;return r.set(1-g-M,M,g)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,n,s,r,o,a,l){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),this.getInterpolation(e,t,n,s,r,o,a,l)}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static isFrontFacing(e,t,n,s){return on.subVectors(n,t),Sn.subVectors(e,t),on.cross(Sn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return on.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),on.cross(Sn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Os=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;xi.subVectors(s,n),yi.subVectors(r,n),da.subVectors(e,n);let l=xi.dot(da),c=yi.dot(da);if(l<=0&&c<=0)return t.copy(n);fa.subVectors(e,s);let h=xi.dot(fa),d=yi.dot(fa);if(h>=0&&d<=h)return t.copy(s);let p=l*d-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(xi,o);pa.subVectors(e,r);let g=xi.dot(pa),M=yi.dot(pa);if(M>=0&&g<=M)return t.copy(r);let b=g*c-l*M;if(b<=0&&c>=0&&M<=0)return a=c/(c-M),t.copy(n).addScaledVector(yi,a);let m=h*M-g*d;if(m<=0&&d-h>=0&&g-M>=0)return Il.subVectors(r,s),a=(d-h)/(d-h+(g-M)),t.copy(s).addScaledVector(Il,a);let f=1/(m+b+p);return o=b*f,a=p*f,t.copy(n).addScaledVector(xi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var st=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=Ao(e,1),t=Ft(t,0,1),n=Ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ma(o,r,e+1/3),this.g=ma(o,r,e),this.b=ma(o,r,e-1/3)}return _t.toWorkingColorSpace(this,s),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){let n=Dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return _t.fromWorkingColorSpace(zt.copy(this),e),Math.round(Ft(zt.r*255,0,255))*65536+Math.round(Ft(zt.g*255,0,255))*256+Math.round(Ft(zt.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(zt.copy(this),t);let n=zt.r,s=zt.g,r=zt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(zt.copy(this),t),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Tt){_t.fromWorkingColorSpace(zt.copy(this),e);let t=zt.r,n=zt.g,s=zt.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Fs);let n=ji(Fn.h,Fs.h,t),s=ji(Fn.s,Fs.s,t),r=ji(Fn.l,Fs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new st;st.NAMES=Dc;var xu=0,Cn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=ci(),this.name="",this.type="Material",this.blending=Li,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=sr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Li&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==sr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},qt=class extends Cn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new O,Bs=new we,tn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),e}};var _r=class extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xr=class extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var xt=class extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}};var yu=0,jt=new At,ga=new Vt,vi=new O,Kt=new ni,Ki=new ni,Ot=new O,Zt=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ic(e)?xr:_r)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new lt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return ga.lookAt(e),ga.updateMatrix(),this.applyMatrix4(ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new xt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kt.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ki.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Kt.min,Ki.min),Kt.expandByPoint(Ot),Ot.addVectors(Kt.max,Ki.max),Kt.expandByPoint(Ot)):(Kt.expandByPoint(Ki.min),Kt.expandByPoint(Ki.max))}Kt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ot.fromBufferAttribute(a,c),l&&(vi.fromBufferAttribute(e,c),Ot.add(vi)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let T=0;T<a;T++)c[T]=new O,h[T]=new O;let d=new O,p=new O,g=new O,M=new we,b=new we,m=new we,f=new O,C=new O;function E(T,Z,re){d.fromArray(s,T*3),p.fromArray(s,Z*3),g.fromArray(s,re*3),M.fromArray(o,T*2),b.fromArray(o,Z*2),m.fromArray(o,re*2),p.sub(d),g.sub(d),b.sub(M),m.sub(M);let ue=1/(b.x*m.y-m.x*b.y);isFinite(ue)&&(f.copy(p).multiplyScalar(m.y).addScaledVector(g,-b.y).multiplyScalar(ue),C.copy(g).multiplyScalar(b.x).addScaledVector(p,-m.x).multiplyScalar(ue),c[T].add(f),c[Z].add(f),c[re].add(f),h[T].add(C),h[Z].add(C),h[re].add(C))}let P=this.groups;P.length===0&&(P=[{start:0,count:n.length}]);for(let T=0,Z=P.length;T<Z;++T){let re=P[T],ue=re.start,k=re.count;for(let Y=ue,j=ue+k;Y<j;Y+=3)E(n[Y+0],n[Y+1],n[Y+2])}let V=new O,D=new O,I=new O,ee=new O;function R(T){I.fromArray(r,T*3),ee.copy(I);let Z=c[T];V.copy(Z),V.sub(I.multiplyScalar(I.dot(Z))).normalize(),D.crossVectors(ee,Z);let ue=D.dot(h[T])<0?-1:1;l[T*4]=V.x,l[T*4+1]=V.y,l[T*4+2]=V.z,l[T*4+3]=ue}for(let T=0,Z=P.length;T<Z;++T){let re=P[T],ue=re.start,k=re.count;for(let Y=ue,j=ue+k;Y<j;Y+=3)R(n[Y+0]),R(n[Y+1]),R(n[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let p=0,g=e.count;p<g;p+=3){let M=e.getX(p+0),b=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,M),r.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,M),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(M,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,g=t.count;p<g;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,p=new c.constructor(l.length*h),g=0,M=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?g=l[b]*a.data.stride+a.offset:g=l[b]*h;for(let f=0;f<h;f++)p[M++]=c[g++]}return new tn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let p=c[h],g=e(p,n);l.push(g)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,p=c.length;d<p;d++){let g=c[d];h.push(g.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let p=0,g=d.length;p<g;p++)h.push(d[p].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dl=new At,Yn=new ii,zs=new Bi,Ul=new O,Mi=new O,Si=new O,Ei=new O,_a=new O,Hs=new O,ks=new we,Vs=new we,Gs=new we,Nl=new O,Ol=new O,Fl=new O,Ws=new O,Xs=new O,je=class extends Vt{constructor(e=new Zt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(_a.fromBufferAttribute(d,e),o?Hs.addScaledVector(_a,h):Hs.addScaledVector(_a.sub(t),h))}t.add(Hs)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zs.copy(n.boundingSphere),zs.applyMatrix4(r),Yn.copy(e.ray).recast(e.near),!(zs.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(zs,Ul)===null||Yn.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Dl.copy(r).invert(),Yn.copy(e.ray).applyMatrix4(Dl),!(n.boundingBox!==null&&Yn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yn)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,g=r.drawRange;if(a!==null)if(Array.isArray(o))for(let M=0,b=p.length;M<b;M++){let m=p[M],f=o[m.materialIndex],C=Math.max(m.start,g.start),E=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let P=C,V=E;P<V;P+=3){let D=a.getX(P),I=a.getX(P+1),ee=a.getX(P+2);s=qs(this,f,e,n,c,h,d,D,I,ee),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let M=Math.max(0,g.start),b=Math.min(a.count,g.start+g.count);for(let m=M,f=b;m<f;m+=3){let C=a.getX(m),E=a.getX(m+1),P=a.getX(m+2);s=qs(this,o,e,n,c,h,d,C,E,P),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let M=0,b=p.length;M<b;M++){let m=p[M],f=o[m.materialIndex],C=Math.max(m.start,g.start),E=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let P=C,V=E;P<V;P+=3){let D=P,I=P+1,ee=P+2;s=qs(this,f,e,n,c,h,d,D,I,ee),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let M=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let m=M,f=b;m<f;m+=3){let C=m,E=m+1,P=m+2;s=qs(this,o,e,n,c,h,d,C,E,P),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vu(i,e,t,n,s,r,o,a){let l;if(e.side===kt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Gn,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Xs);return c<t.near||c>t.far?null:{distance:c,point:Xs.clone(),object:i}}function qs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Mi),i.getVertexPosition(l,Si),i.getVertexPosition(c,Ei);let h=vu(i,e,t,n,Mi,Si,Ei,Ws);if(h){s&&(ks.fromBufferAttribute(s,a),Vs.fromBufferAttribute(s,l),Gs.fromBufferAttribute(s,c),h.uv=jn.getInterpolation(Ws,Mi,Si,Ei,ks,Vs,Gs,new we)),r&&(ks.fromBufferAttribute(r,a),Vs.fromBufferAttribute(r,l),Gs.fromBufferAttribute(r,c),h.uv1=jn.getInterpolation(Ws,Mi,Si,Ei,ks,Vs,Gs,new we),h.uv2=h.uv1),o&&(Nl.fromBufferAttribute(o,a),Ol.fromBufferAttribute(o,l),Fl.fromBufferAttribute(o,c),h.normal=jn.getInterpolation(Ws,Mi,Si,Ei,Nl,Ol,Fl,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new O,materialIndex:0};jn.getNormal(Mi,Si,Ei,d.normal),h.face=d}return h}var un=class i extends Zt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],p=0,g=0;M("z","y","x",-1,-1,n,t,e,o,r,0),M("z","y","x",1,-1,n,t,-e,o,r,1),M("x","z","y",1,1,e,n,t,s,o,2),M("x","z","y",1,-1,e,n,-t,s,o,3),M("x","y","z",1,-1,e,t,n,s,r,4),M("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(d,2));function M(b,m,f,C,E,P,V,D,I,ee,R){let T=P/I,Z=V/ee,re=P/2,ue=V/2,k=D/2,Y=I+1,j=ee+1,te=0,le=0,ne=new O;for(let ce=0;ce<j;ce++){let ge=ce*Z-ue;for(let Te=0;Te<Y;Te++){let Q=Te*T-re;ne[b]=Q*C,ne[m]=ge*E,ne[f]=k,c.push(ne.x,ne.y,ne.z),ne[b]=0,ne[m]=0,ne[f]=D>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(Te/I),d.push(1-ce/ee),te+=1}}for(let ce=0;ce<ee;ce++)for(let ge=0;ge<I;ge++){let Te=p+ge+Y*ce,Q=p+ge+Y*(ce+1),_e=p+(ge+1)+Y*(ce+1),z=p+(ge+1)+Y*ce;l.push(Te,Q,z),l.push(Q,_e,z),le+=6}a.addGroup(g,le,R),g+=le,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=zi(i[t]);for(let s in n)e[s]=n[s]}return e}function Mu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uc(i){return i.getRenderTarget()===null?i.outputColorSpace:_t.workingColorSpace}var Su={clone:zi,merge:Wt},Eu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Cn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eu,this.fragmentShader=bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=Mu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},yr=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ht=class extends yr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(Ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ii*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bi=-90,wi=1,Ha=class extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(bi,wi,e,t);s.layers=this.layers,this.add(s);let r=new Ht(bi,wi,e,t);r.layers=this.layers,this.add(r);let o=new Ht(bi,wi,e,t);o.layers=this.layers,this.add(o);let a=new Ht(bi,wi,e,t);a.layers=this.layers,this.add(a);let l=new Ht(bi,wi,e,t);l.layers=this.layers,this.add(l);let c=new Ht(bi,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,p,g),e.xr.enabled=M,n.texture.needsPMREMUpdate=!0}},vr=class extends nn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ka=class extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Qi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ti?Tt:en),this.texture=new vr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Hn});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=Qt),new Ha(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xa=new O,wu=new O,Tu=new lt,$t=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xa.subVectors(n,t).cross(wu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tu.getNormalMatrix(e),s=this.coplanarPoint(xa).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new Bi,Ys=new O,cs=class{constructor(e=new $t,t=new $t,n=new $t,s=new $t,r=new $t,o=new $t){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],p=s[7],g=s[8],M=s[9],b=s[10],m=s[11],f=s[12],C=s[13],E=s[14],P=s[15];if(n[0].setComponents(l-r,p-c,m-g,P-f).normalize(),n[1].setComponents(l+r,p+c,m+g,P+f).normalize(),n[2].setComponents(l+o,p+h,m+M,P+C).normalize(),n[3].setComponents(l-o,p-h,m-M,P-C).normalize(),n[4].setComponents(l-a,p-d,m-b,P-E).normalize(),t===Tn)n[5].setComponents(l+a,p+d,m+b,P+E).normalize();else if(t===hr)n[5].setComponents(a,d,b,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ys.x=s.normal.x>0?e.max.x:e.min.x,Ys.y=s.normal.y>0?e.max.y:e.min.y,Ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Au(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,h){let d=c.array,p=c.usage,g=d.byteLength,M=i.createBuffer();i.bindBuffer(h,M),i.bufferData(h,d,p),c.onUploadCallback();let b;if(d instanceof Float32Array)b=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=i.SHORT;else if(d instanceof Uint32Array)b=i.UNSIGNED_INT;else if(d instanceof Int32Array)b=i.INT;else if(d instanceof Int8Array)b=i.BYTE;else if(d instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:M,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,h,d){let p=h.array,g=h._updateRange,M=h.updateRanges;if(i.bindBuffer(d,c),g.count===-1&&M.length===0&&i.bufferSubData(d,0,p),M.length!==0){for(let b=0,m=M.length;b<m;b++){let f=M[b];t?i.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(d,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):i.bufferSubData(d,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=n.get(c);h&&(i.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var Ln=class i extends Zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=e/a,p=t/l,g=[],M=[],b=[],m=[];for(let f=0;f<h;f++){let C=f*p-o;for(let E=0;E<c;E++){let P=E*d-r;M.push(P,-C,0),b.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let C=0;C<a;C++){let E=C+c*f,P=C+c*(f+1),V=C+1+c*(f+1),D=C+1+c*f;g.push(E,P,D),g.push(P,V,D)}this.setIndex(g),this.setAttribute("position",new xt(M,3)),this.setAttribute("normal",new xt(b,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ru=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cu=`#ifdef USE_ALPHAHASH
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
#endif`,Pu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uu=`#ifdef USE_AOMAP
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
#endif`,Nu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
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
#endif`,Fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Bu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ku=`#ifdef USE_IRIDESCENCE
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
#endif`,Vu=`#ifdef USE_BUMPMAP
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
#endif`,Gu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$u=`#define PI 3.141592653589793
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
} // validated`,ju=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qu=`vec3 transformedNormal = objectNormal;
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
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,td=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,id=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sd="gl_FragColor = linearToOutputTexel( gl_FragColor );",rd=`
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
}`,ad=`#ifdef USE_ENVMAP
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
#endif`,od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,md=`#ifdef USE_GRADIENTMAP
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
}`,gd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
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
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
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
#endif`,Ad=`struct PhysicalMaterial {
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
}`,Rd=`
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
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vd=`#ifdef USE_MORPHNORMALS
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
#endif`,Gd=`#ifdef USE_MORPHTARGETS
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
#endif`,Wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
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
#endif`,$d=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,df=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ff=`float getShadowMask() {
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
}`,pf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mf=`#ifdef USE_SKINNING
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
#endif`,gf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,xf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#ifdef USE_TRANSMISSION
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
#endif`,bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cf=`uniform sampler2D t2D;
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
}`,Pf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uf=`#include <common>
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
}`,Nf=`#if DEPTH_PACKING == 3200
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
}`,Of=`#define DISTANCE
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
}`,Ff=`#define DISTANCE
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hf=`uniform float scale;
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
}`,kf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Gf=`uniform vec3 diffuse;
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
}`,Wf=`#define LAMBERT
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define MATCAP
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
}`,Yf=`#define MATCAP
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
}`,Zf=`#define NORMAL
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
}`,Jf=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,$f=`#define PHONG
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
}`,jf=`#define STANDARD
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
}`,Qf=`#define STANDARD
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
}`,ep=`#define TOON
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
}`,tp=`#define TOON
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
}`,np=`uniform float size;
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,ap=`uniform float rotation;
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
}`,op=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:Ru,alphahash_pars_fragment:Cu,alphamap_fragment:Pu,alphamap_pars_fragment:Lu,alphatest_fragment:Iu,alphatest_pars_fragment:Du,aomap_fragment:Uu,aomap_pars_fragment:Nu,batching_pars_vertex:Ou,batching_vertex:Fu,begin_vertex:Bu,beginnormal_vertex:zu,bsdfs:Hu,iridescence_fragment:ku,bumpmap_pars_fragment:Vu,clipping_planes_fragment:Gu,clipping_planes_pars_fragment:Wu,clipping_planes_pars_vertex:Xu,clipping_planes_vertex:qu,color_fragment:Yu,color_pars_fragment:Zu,color_pars_vertex:Ju,color_vertex:Ku,common:$u,cube_uv_reflection_fragment:ju,defaultnormal_vertex:Qu,displacementmap_pars_vertex:ed,displacementmap_vertex:td,emissivemap_fragment:nd,emissivemap_pars_fragment:id,colorspace_fragment:sd,colorspace_pars_fragment:rd,envmap_fragment:ad,envmap_common_pars_fragment:od,envmap_pars_fragment:ld,envmap_pars_vertex:cd,envmap_physical_pars_fragment:Md,envmap_vertex:hd,fog_vertex:ud,fog_pars_vertex:dd,fog_fragment:fd,fog_pars_fragment:pd,gradientmap_pars_fragment:md,lightmap_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:xd,lights_lambert_pars_fragment:yd,lights_pars_begin:vd,lights_toon_fragment:Sd,lights_toon_pars_fragment:Ed,lights_phong_fragment:bd,lights_phong_pars_fragment:wd,lights_physical_fragment:Td,lights_physical_pars_fragment:Ad,lights_fragment_begin:Rd,lights_fragment_maps:Cd,lights_fragment_end:Pd,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Dd,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Od,map_particle_fragment:Fd,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Hd,morphcolor_vertex:kd,morphnormal_vertex:Vd,morphtarget_pars_vertex:Gd,morphtarget_vertex:Wd,normal_fragment_begin:Xd,normal_fragment_maps:qd,normal_pars_fragment:Yd,normal_pars_vertex:Zd,normal_vertex:Jd,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:$d,clearcoat_normal_fragment_maps:jd,clearcoat_pars_fragment:Qd,iridescence_pars_fragment:ef,opaque_fragment:tf,packing:nf,premultiplied_alpha_fragment:sf,project_vertex:rf,dithering_fragment:af,dithering_pars_fragment:of,roughnessmap_fragment:lf,roughnessmap_pars_fragment:cf,shadowmap_pars_fragment:hf,shadowmap_pars_vertex:uf,shadowmap_vertex:df,shadowmask_pars_fragment:ff,skinbase_vertex:pf,skinning_pars_vertex:mf,skinning_vertex:gf,skinnormal_vertex:_f,specularmap_fragment:xf,specularmap_pars_fragment:yf,tonemapping_fragment:vf,tonemapping_pars_fragment:Mf,transmission_fragment:Sf,transmission_pars_fragment:Ef,uv_pars_fragment:bf,uv_pars_vertex:wf,uv_vertex:Tf,worldpos_vertex:Af,background_vert:Rf,background_frag:Cf,backgroundCube_vert:Pf,backgroundCube_frag:Lf,cube_vert:If,cube_frag:Df,depth_vert:Uf,depth_frag:Nf,distanceRGBA_vert:Of,distanceRGBA_frag:Ff,equirect_vert:Bf,equirect_frag:zf,linedashed_vert:Hf,linedashed_frag:kf,meshbasic_vert:Vf,meshbasic_frag:Gf,meshlambert_vert:Wf,meshlambert_frag:Xf,meshmatcap_vert:qf,meshmatcap_frag:Yf,meshnormal_vert:Zf,meshnormal_frag:Jf,meshphong_vert:Kf,meshphong_frag:$f,meshphysical_vert:jf,meshphysical_frag:Qf,meshtoon_vert:ep,meshtoon_frag:tp,points_vert:np,points_frag:ip,shadow_vert:sp,shadow_frag:rp,sprite_vert:ap,sprite_frag:op},Ie={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},pn={basic:{uniforms:Wt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Wt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new st(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Wt([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Wt([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Wt([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new st(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Wt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Wt([Ie.points,Ie.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Wt([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Wt([Ie.common,Ie.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Wt([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Wt([Ie.sprite,Ie.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Wt([Ie.common,Ie.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Wt([Ie.lights,Ie.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};pn.physical={uniforms:Wt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Zs={r:0,b:0,g:0};function lp(i,e,t,n,s,r,o){let a=new st(0),l=r===!0?0:1,c,h,d=null,p=0,g=null;function M(m,f){let C=!1,E=f.isScene===!0?f.background:null;E&&E.isTexture&&(E=(f.backgroundBlurriness>0?t:e).get(E)),E===null?b(a,l):E&&E.isColor&&(b(E,1),C=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||C)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Hr)?(h===void 0&&(h=new je(new un(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:zi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(V,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=_t.getTransfer(E.colorSpace)!==vt,(d!==E||p!==E.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,p=E.version,g=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new je(new Ln(2,2),new Pn({name:"BackgroundMaterial",uniforms:zi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=_t.getTransfer(E.colorSpace)!==vt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||p!==E.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,p=E.version,g=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function b(m,f){m.getRGB(Zs,Uc(i)),n.buffers.color.setClear(Zs.r,Zs.g,Zs.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,b(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,b(a,l)},render:M}}function cp(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null),c=l,h=!1;function d(k,Y,j,te,le){let ne=!1;if(o){let ce=b(te,j,Y);c!==ce&&(c=ce,g(c.object)),ne=f(k,te,j,le),ne&&C(k,te,j,le)}else{let ce=Y.wireframe===!0;(c.geometry!==te.id||c.program!==j.id||c.wireframe!==ce)&&(c.geometry=te.id,c.program=j.id,c.wireframe=ce,ne=!0)}le!==null&&t.update(le,i.ELEMENT_ARRAY_BUFFER),(ne||h)&&(h=!1,ee(k,Y,j,te),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function g(k){return n.isWebGL2?i.bindVertexArray(k):r.bindVertexArrayOES(k)}function M(k){return n.isWebGL2?i.deleteVertexArray(k):r.deleteVertexArrayOES(k)}function b(k,Y,j){let te=j.wireframe===!0,le=a[k.id];le===void 0&&(le={},a[k.id]=le);let ne=le[Y.id];ne===void 0&&(ne={},le[Y.id]=ne);let ce=ne[te];return ce===void 0&&(ce=m(p()),ne[te]=ce),ce}function m(k){let Y=[],j=[],te=[];for(let le=0;le<s;le++)Y[le]=0,j[le]=0,te[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:j,attributeDivisors:te,object:k,attributes:{},index:null}}function f(k,Y,j,te){let le=c.attributes,ne=Y.attributes,ce=0,ge=j.getAttributes();for(let Te in ge)if(ge[Te].location>=0){let _e=le[Te],z=ne[Te];if(z===void 0&&(Te==="instanceMatrix"&&k.instanceMatrix&&(z=k.instanceMatrix),Te==="instanceColor"&&k.instanceColor&&(z=k.instanceColor)),_e===void 0||_e.attribute!==z||z&&_e.data!==z.data)return!0;ce++}return c.attributesNum!==ce||c.index!==te}function C(k,Y,j,te){let le={},ne=Y.attributes,ce=0,ge=j.getAttributes();for(let Te in ge)if(ge[Te].location>=0){let _e=ne[Te];_e===void 0&&(Te==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),Te==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor));let z={};z.attribute=_e,_e&&_e.data&&(z.data=_e.data),le[Te]=z,ce++}c.attributes=le,c.attributesNum=ce,c.index=te}function E(){let k=c.newAttributes;for(let Y=0,j=k.length;Y<j;Y++)k[Y]=0}function P(k){V(k,0)}function V(k,Y){let j=c.newAttributes,te=c.enabledAttributes,le=c.attributeDivisors;j[k]=1,te[k]===0&&(i.enableVertexAttribArray(k),te[k]=1),le[k]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,Y),le[k]=Y)}function D(){let k=c.newAttributes,Y=c.enabledAttributes;for(let j=0,te=Y.length;j<te;j++)Y[j]!==k[j]&&(i.disableVertexAttribArray(j),Y[j]=0)}function I(k,Y,j,te,le,ne,ce){ce===!0?i.vertexAttribIPointer(k,Y,j,le,ne):i.vertexAttribPointer(k,Y,j,te,le,ne)}function ee(k,Y,j,te){if(n.isWebGL2===!1&&(k.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();let le=te.attributes,ne=j.getAttributes(),ce=Y.defaultAttributeValues;for(let ge in ne){let Te=ne[ge];if(Te.location>=0){let Q=le[ge];if(Q===void 0&&(ge==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),ge==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor)),Q!==void 0){let _e=Q.normalized,z=Q.itemSize,Pe=t.get(Q);if(Pe===void 0)continue;let De=Pe.buffer,We=Pe.type,qe=Pe.bytesPerElement,Be=n.isWebGL2===!0&&(We===i.INT||We===i.UNSIGNED_INT||Q.gpuType===Mc);if(Q.isInterleavedBufferAttribute){let Qe=Q.data,F=Qe.stride,Ce=Q.offset;if(Qe.isInstancedInterleavedBuffer){for(let se=0;se<Te.locationSize;se++)V(Te.location+se,Qe.meshPerAttribute);k.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Qe.meshPerAttribute*Qe.count)}else for(let se=0;se<Te.locationSize;se++)P(Te.location+se);i.bindBuffer(i.ARRAY_BUFFER,De);for(let se=0;se<Te.locationSize;se++)I(Te.location+se,z/Te.locationSize,We,_e,F*qe,(Ce+z/Te.locationSize*se)*qe,Be)}else{if(Q.isInstancedBufferAttribute){for(let Qe=0;Qe<Te.locationSize;Qe++)V(Te.location+Qe,Q.meshPerAttribute);k.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Qe=0;Qe<Te.locationSize;Qe++)P(Te.location+Qe);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Qe=0;Qe<Te.locationSize;Qe++)I(Te.location+Qe,z/Te.locationSize,We,_e,z*qe,z/Te.locationSize*Qe*qe,Be)}}else if(ce!==void 0){let _e=ce[ge];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(Te.location,_e);break;case 3:i.vertexAttrib3fv(Te.location,_e);break;case 4:i.vertexAttrib4fv(Te.location,_e);break;default:i.vertexAttrib1fv(Te.location,_e)}}}}D()}function R(){re();for(let k in a){let Y=a[k];for(let j in Y){let te=Y[j];for(let le in te)M(te[le].object),delete te[le];delete Y[j]}delete a[k]}}function T(k){if(a[k.id]===void 0)return;let Y=a[k.id];for(let j in Y){let te=Y[j];for(let le in te)M(te[le].object),delete te[le];delete Y[j]}delete a[k.id]}function Z(k){for(let Y in a){let j=a[Y];if(j[k.id]===void 0)continue;let te=j[k.id];for(let le in te)M(te[le].object),delete te[le];delete j[k.id]}}function re(){ue(),h=!0,c!==l&&(c=l,g(c.object))}function ue(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:re,resetDefaultState:ue,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:Z,initAttributes:E,enableAttribute:P,disableUnusedAttributes:D}}function hp(i,e,t,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,d){i.drawArrays(r,h,d),t.update(d,r,1)}function l(h,d,p){if(p===0)return;let g,M;if(s)g=i,M="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[M](r,h,d,p),t.update(d,r,p)}function c(h,d,p){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let M=0;M<p;M++)this.render(h[M],d[M]);else{g.multiDrawArraysWEBGL(r,h,0,d,0,p);let M=0;for(let b=0;b<p;b++)M+=d[b];t.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function up(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),M=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=p>0,P=o||e.has("OES_texture_float"),V=E&&P,D=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:C,vertexTextures:E,floatFragmentTextures:P,floatVertexTextures:V,maxSamples:D}}function dp(i){let e=this,t=null,n=0,s=!1,r=!1,o=new $t,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let g=d.length!==0||p||n!==0||s;return s=p,n=d.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=h(d,p,0)},this.setState=function(d,p,g){let M=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!s||M===null||M.length===0||r&&!m)r?h(null):c();else{let C=r?0:n,E=C*4,P=f.clippingState||null;l.value=P,P=h(M,p,E,g);for(let V=0;V!==E;++V)P[V]=t[V];f.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,p,g,M){let b=d!==null?d.length:0,m=null;if(b!==0){if(m=l.value,M!==!0||m===null){let f=g+b*4,C=p.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,P=g;E!==b;++E,P+=4)o.copy(d[E]).applyMatrix4(C,a),o.normal.toArray(m,P),m[P+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function fp(i){let e=new WeakMap;function t(o,a){return a===Da?o.mapping=Ni:a===Ua&&(o.mapping=Oi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Da||a===Ua)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ka(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Mr=class extends yr{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ri=4,Bl=[.125,.215,.35,.446,.526,.582],$n=20,ya=new Mr,zl=new st,va=null,Ma=0,Sa=0,Jn=(1+Math.sqrt(5))/2,Ti=1/Jn,Hl=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Jn,Ti),new O(0,Jn,-Ti),new O(Ti,0,Jn),new O(-Ti,0,Jn),new O(Jn,Ti,0),new O(-Jn,Ti,0)],Hi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){va=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(va,Ma,Sa),e.scissorTest=!1,Js(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),va=this._renderer.getRenderTarget(),Ma=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:as,format:cn,colorSpace:An,depthBuffer:!1},s=kl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pp(r)),this._blurMaterial=mp(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,n,s){let a=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(zl),h.toneMapping=kn,h.autoClear=!1;let g=new qt({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),M=new je(new un,g),b=!1,m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,b=!0):(g.color.copy(zl),b=!0);for(let f=0;f<6;f++){let C=f%3;C===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):C===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let E=this._cubeSize;Js(s,C*E,f>2?E:0,E,E),h.setRenderTarget(s),b&&h.render(M,a),h.render(e,a)}M.geometry.dispose(),M.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ni||e.mapping===Oi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vl());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new je(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Js(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ya)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Hl[(s-1)%Hl.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new je(this._lodPlanes[s],c),p=c.uniforms,g=this._sizeLods[n]-1,M=isFinite(r)?Math.PI/(2*g):2*Math.PI/(2*$n-1),b=r/M,m=isFinite(r)?1+Math.floor(h*b):$n;m>$n&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);let f=[],C=0;for(let I=0;I<$n;++I){let ee=I/b,R=Math.exp(-ee*ee/2);f.push(R),I===0?C+=R:I<m&&(C+=2*R)}for(let I=0;I<f.length;I++)f[I]=f[I]/C;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:E}=this;p.dTheta.value=M,p.mipInt.value=E-n;let P=this._sizeLods[s],V=3*P*(s>E-Ri?s-E+Ri:0),D=4*(this._cubeSize-P);Js(t,V,D,3*P,2*P),l.setRenderTarget(t),l.render(d,ya)}};function pp(i){let e=[],t=[],n=[],s=i,r=i-Ri+1+Bl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Ri?l=Bl[o-i+Ri-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,p=[h,h,d,h,d,d,h,h,d,d,h,d],g=6,M=6,b=3,m=2,f=1,C=new Float32Array(b*M*g),E=new Float32Array(m*M*g),P=new Float32Array(f*M*g);for(let D=0;D<g;D++){let I=D%3*2/3-1,ee=D>2?0:-1,R=[I,ee,0,I+2/3,ee,0,I+2/3,ee+1,0,I,ee,0,I+2/3,ee+1,0,I,ee+1,0];C.set(R,b*M*D),E.set(p,m*M*D);let T=[D,D,D,D,D,D];P.set(T,f*M*D)}let V=new Zt;V.setAttribute("position",new tn(C,b)),V.setAttribute("uv",new tn(E,m)),V.setAttribute("faceIndex",new tn(P,f)),e.push(V),s>Ri&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function kl(i,e,t){let n=new Rn(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Js(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function mp(i,e,t){let n=new Float32Array($n),s=new O(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Vl(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ro(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Gl(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ro(){return`

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
	`}function gp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Da||l===Ua,h=l===Ni||l===Oi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Hi(i)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){t===null&&(t=new Hi(i));let p=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",r),p.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _p(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function xp(i,e,t,n){let s={},r=new WeakMap;function o(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let M in p.attributes)e.remove(p.attributes[M]);for(let M in p.morphAttributes){let b=p.morphAttributes[M];for(let m=0,f=b.length;m<f;m++)e.remove(b[m])}p.removeEventListener("dispose",o),delete s[p.id];let g=r.get(p);g&&(e.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(d,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let M in p)e.update(p[M],i.ARRAY_BUFFER);let g=d.morphAttributes;for(let M in g){let b=g[M];for(let m=0,f=b.length;m<f;m++)e.update(b[m],i.ARRAY_BUFFER)}}function c(d){let p=[],g=d.index,M=d.attributes.position,b=0;if(g!==null){let C=g.array;b=g.version;for(let E=0,P=C.length;E<P;E+=3){let V=C[E+0],D=C[E+1],I=C[E+2];p.push(V,D,D,I,I,V)}}else if(M!==void 0){let C=M.array;b=M.version;for(let E=0,P=C.length/3-1;E<P;E+=3){let V=E+0,D=E+1,I=E+2;p.push(V,D,D,I,I,V)}}else return;let m=new(Ic(p)?xr:_r)(p,1);m.version=b;let f=r.get(d);f&&e.remove(f),r.set(d,m)}function h(d){let p=r.get(d);if(p){let g=d.index;g!==null&&p.version<g.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function yp(i,e,t,n){let s=n.isWebGL2,r;function o(g){r=g}let a,l;function c(g){a=g.type,l=g.bytesPerElement}function h(g,M){i.drawElements(r,M,a,g*l),t.update(M,r,1)}function d(g,M,b){if(b===0)return;let m,f;if(s)m=i,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,M,a,g*l,b),t.update(M,r,b)}function p(g,M,b){if(b===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<b;f++)this.render(g[f]/l,M[f]);else{m.multiDrawElementsWEBGL(r,M,0,a,g,0,b);let f=0;for(let C=0;C<b;C++)f+=M[C];t.update(f,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function vp(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Mp(i,e){return i[0]-e[0]}function Sp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Ep(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,o=new St,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=g!==void 0?g.length:0,b=r.get(h);if(b===void 0||b.count!==M){let k=function(){re.dispose(),r.delete(h),h.removeEventListener("dispose",k)};b!==void 0&&b.texture.dispose();let C=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,V=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],I=h.morphAttributes.color||[],ee=0;C===!0&&(ee=1),E===!0&&(ee=2),P===!0&&(ee=3);let R=h.attributes.position.count*ee,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);let Z=new Float32Array(R*T*4*M),re=new mr(Z,R,T,M);re.type=zn,re.needsUpdate=!0;let ue=ee*4;for(let Y=0;Y<M;Y++){let j=V[Y],te=D[Y],le=I[Y],ne=R*T*4*Y;for(let ce=0;ce<j.count;ce++){let ge=ce*ue;C===!0&&(o.fromBufferAttribute(j,ce),Z[ne+ge+0]=o.x,Z[ne+ge+1]=o.y,Z[ne+ge+2]=o.z,Z[ne+ge+3]=0),E===!0&&(o.fromBufferAttribute(te,ce),Z[ne+ge+4]=o.x,Z[ne+ge+5]=o.y,Z[ne+ge+6]=o.z,Z[ne+ge+7]=0),P===!0&&(o.fromBufferAttribute(le,ce),Z[ne+ge+8]=o.x,Z[ne+ge+9]=o.y,Z[ne+ge+10]=o.z,Z[ne+ge+11]=le.itemSize===4?o.w:1)}}b={count:M,texture:re,size:new we(R,T)},r.set(h,b),h.addEventListener("dispose",k)}let m=0;for(let C=0;C<p.length;C++)m+=p[C];let f=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{let g=p===void 0?0:p.length,M=n[h.id];if(M===void 0||M.length!==g){M=[];for(let E=0;E<g;E++)M[E]=[E,0];n[h.id]=M}for(let E=0;E<g;E++){let P=M[E];P[0]=E,P[1]=p[E]}M.sort(Sp);for(let E=0;E<8;E++)E<g&&M[E][1]?(a[E][0]=M[E][0],a[E][1]=M[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(Mp);let b=h.morphAttributes.position,m=h.morphAttributes.normal,f=0;for(let E=0;E<8;E++){let P=a[E],V=P[0],D=P[1];V!==Number.MAX_SAFE_INTEGER&&D?(b&&h.getAttribute("morphTarget"+E)!==b[V]&&h.setAttribute("morphTarget"+E,b[V]),m&&h.getAttribute("morphNormal"+E)!==m[V]&&h.setAttribute("morphNormal"+E,m[V]),s[E]=D,f+=D):(b&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),m&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),s[E]=0)}let C=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",C),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function bp(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Sr=class extends nn{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ei,h!==ei&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ei&&(n=Bn),n===void 0&&h===Fi&&(n=Qn),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xt,this.minFilter=l!==void 0?l:Xt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Oc=new nn,Fc=new Sr(1,1);Fc.compareFunction=Pc;var Bc=new mr,zc=new za,Hc=new vr,Wl=[],Xl=[],ql=new Float32Array(16),Yl=new Float32Array(9),Zl=new Float32Array(4);function Gi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wl[s];if(r===void 0&&(r=new Float32Array(s),Wl[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Dt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vr(i,e){let t=Xl[e];t===void 0&&(t=new Int32Array(e),Xl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Tp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Dt(t,e)}}function Ap(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Dt(t,e)}}function Rp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Dt(t,e)}}function Cp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Zl.set(n),i.uniformMatrix2fv(this.addr,!1,Zl),Dt(t,n)}}function Pp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;Yl.set(n),i.uniformMatrix3fv(this.addr,!1,Yl),Dt(t,n)}}function Lp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;ql.set(n),i.uniformMatrix4fv(this.addr,!1,ql),Dt(t,n)}}function Ip(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Dp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Dt(t,e)}}function Up(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Dt(t,e)}}function Np(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Dt(t,e)}}function Op(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Dt(t,e)}}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Dt(t,e)}}function zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Dt(t,e)}}function Hp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Fc:Oc;t.setTexture2D(e||r,s)}function kp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zc,s)}function Vp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Hc,s)}function Gp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bc,s)}function Wp(i){switch(i){case 5126:return wp;case 35664:return Tp;case 35665:return Ap;case 35666:return Rp;case 35674:return Cp;case 35675:return Pp;case 35676:return Lp;case 5124:case 35670:return Ip;case 35667:case 35671:return Dp;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Op;case 36294:return Fp;case 36295:return Bp;case 36296:return zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Hp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Gp}}function Xp(i,e){i.uniform1fv(this.addr,e)}function qp(i,e){let t=Gi(e,this.size,2);i.uniform2fv(this.addr,t)}function Yp(i,e){let t=Gi(e,this.size,3);i.uniform3fv(this.addr,t)}function Zp(i,e){let t=Gi(e,this.size,4);i.uniform4fv(this.addr,t)}function Jp(i,e){let t=Gi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kp(i,e){let t=Gi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function $p(i,e){let t=Gi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jp(i,e){i.uniform1iv(this.addr,e)}function Qp(i,e){i.uniform2iv(this.addr,e)}function em(i,e){i.uniform3iv(this.addr,e)}function tm(i,e){i.uniform4iv(this.addr,e)}function nm(i,e){i.uniform1uiv(this.addr,e)}function im(i,e){i.uniform2uiv(this.addr,e)}function sm(i,e){i.uniform3uiv(this.addr,e)}function rm(i,e){i.uniform4uiv(this.addr,e)}function am(i,e,t){let n=this.cache,s=e.length,r=Vr(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Oc,r[o])}function om(i,e,t){let n=this.cache,s=e.length,r=Vr(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||zc,r[o])}function lm(i,e,t){let n=this.cache,s=e.length,r=Vr(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Hc,r[o])}function cm(i,e,t){let n=this.cache,s=e.length,r=Vr(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Dt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bc,r[o])}function hm(i){switch(i){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return Zp;case 35674:return Jp;case 35675:return Kp;case 35676:return $p;case 5124:case 35670:return jp;case 35667:case 35671:return Qp;case 35668:case 35672:return em;case 35669:case 35673:return tm;case 5125:return nm;case 36294:return im;case 36295:return sm;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return lm;case 36289:case 36303:case 36311:case 36292:return cm}}var Va=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wp(t.type)}},Ga=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hm(t.type)}},Wa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Ea=/(\w+)(\])?(\[|\.)?/g;function Jl(i,e){i.seq.push(e),i.map[e.id]=e}function um(i,e,t){let n=i.name,s=n.length;for(Ea.lastIndex=0;;){let r=Ea.exec(n),o=Ea.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Jl(t,c===void 0?new Va(a,i,e):new Ga(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Wa(a),Jl(t,d)),t=d}}}var Ui=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);um(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Kl(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var dm=37297,fm=0;function pm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function mm(i){let e=_t.getPrimaries(_t.workingColorSpace),t=_t.getPrimaries(i),n;switch(e===t?n="":e===cr&&t===lr?n="LinearDisplayP3ToLinearSRGB":e===lr&&t===cr&&(n="LinearSRGBToLinearDisplayP3"),i){case An:case kr:return[n,"LinearTransferOETF"];case Tt:case To:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function $l(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pm(i.getShaderSource(e),o)}else return s}function gm(i,e){let t=mm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function _m(i,e){let t;switch(e){case Sh:t="Linear";break;case Eh:t="Reinhard";break;case bh:t="OptimizedCineon";break;case bo:t="ACESFilmic";break;case Th:t="AgX";break;case wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function xm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ci).join(`
`)}function ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ci).join(`
`)}function vm(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Mm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ci(i){return i!==""}function jl(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ql(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(Sm,bm)}var Em=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bm(i,e){let t=ot[e];if(t===void 0){let n=Em.get(e);if(n!==void 0)t=ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xa(t)}var wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(i){return i.replace(wm,Tm)}function Tm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Am(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Eo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Oi:e="ENVMAP_TYPE_CUBE";break;case Hr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Oi&&(e="ENVMAP_MODE_REFRACTION"),e}function Pm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yc:e="ENVMAP_BLENDING_MULTIPLY";break;case vh:e="ENVMAP_BLENDING_MIX";break;case Mh:e="ENVMAP_BLENDING_ADD";break}return e}function Lm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Im(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Am(t),c=Rm(t),h=Cm(t),d=Pm(t),p=Lm(t),g=t.isWebGL2?"":xm(t),M=ym(t),b=vm(r),m=s.createProgram(),f,C,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ci).join(`
`),f.length>0&&(f+=`
`),C=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ci).join(`
`),C.length>0&&(C+=`
`)):(f=[tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ci).join(`
`),C=[g,tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?ot.tonemapping_pars_fragment:"",t.toneMapping!==kn?_m("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,gm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ci).join(`
`)),o=Xa(o),o=jl(o,t),o=Ql(o,t),a=Xa(a),a=jl(a,t),a=Ql(a,t),o=ec(o),a=ec(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,f=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,C=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+C);let P=E+f+o,V=E+C+a,D=Kl(s,s.VERTEX_SHADER,P),I=Kl(s,s.FRAGMENT_SHADER,V);s.attachShader(m,D),s.attachShader(m,I),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function ee(re){if(i.debug.checkShaderErrors){let ue=s.getProgramInfoLog(m).trim(),k=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(I).trim(),j=!0,te=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,D,I);else{let le=$l(s,D,"vertex"),ne=$l(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+le+`
`+ne)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(k===""||Y==="")&&(te=!1);te&&(re.diagnostics={runnable:j,programLog:ue,vertexShader:{log:k,prefix:f},fragmentShader:{log:Y,prefix:C}})}s.deleteShader(D),s.deleteShader(I),R=new Ui(s,m),T=Mm(s,m)}let R;this.getUniforms=function(){return R===void 0&&ee(this),R};let T;this.getAttributes=function(){return T===void 0&&ee(this),T};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(m,dm)),Z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=D,this.fragmentShader=I,this}var Dm=0,qa=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ya(e),t.set(e,n)),n}},Ya=class{constructor(e){this.id=Dm++,this.code=e,this.usedTimes=0}};function Um(i,e,t,n,s,r,o){let a=new ls,l=new qa,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,g=s.precision,M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(R){return R===0?"uv":`uv${R}`}function m(R,T,Z,re,ue){let k=re.fog,Y=ue.geometry,j=R.isMeshStandardMaterial?re.environment:null,te=(R.isMeshStandardMaterial?t:e).get(R.envMap||j),le=te&&te.mapping===Hr?te.image.height:null,ne=M[R.type];R.precision!==null&&(g=s.getMaxPrecision(R.precision),g!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",g,"instead."));let ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ge=ce!==void 0?ce.length:0,Te=0;Y.morphAttributes.position!==void 0&&(Te=1),Y.morphAttributes.normal!==void 0&&(Te=2),Y.morphAttributes.color!==void 0&&(Te=3);let Q,_e,z,Pe;if(ne){let Nt=pn[ne];Q=Nt.vertexShader,_e=Nt.fragmentShader}else Q=R.vertexShader,_e=R.fragmentShader,l.update(R),z=l.getVertexShaderID(R),Pe=l.getFragmentShaderID(R);let De=i.getRenderTarget(),We=ue.isInstancedMesh===!0,qe=ue.isBatchedMesh===!0,Be=!!R.map,Qe=!!R.matcap,F=!!te,Ce=!!R.aoMap,se=!!R.lightMap,Me=!!R.bumpMap,ie=!!R.normalMap,ze=!!R.displacementMap,Se=!!R.emissiveMap,A=!!R.metalnessMap,w=!!R.roughnessMap,q=R.anisotropy>0,xe=R.clearcoat>0,fe=R.iridescence>0,de=R.sheen>0,Fe=R.transmission>0,Ue=q&&!!R.anisotropyMap,Ne=xe&&!!R.clearcoatMap,Ye=xe&&!!R.clearcoatNormalMap,tt=xe&&!!R.clearcoatRoughnessMap,pe=fe&&!!R.iridescenceMap,rt=fe&&!!R.iridescenceThicknessMap,L=de&&!!R.sheenColorMap,me=de&&!!R.sheenRoughnessMap,Le=!!R.specularMap,be=!!R.specularColorMap,ke=!!R.specularIntensityMap,nt=Fe&&!!R.transmissionMap,ht=Fe&&!!R.thicknessMap,it=!!R.gradientMap,Ee=!!R.alphaMap,H=R.alphaTest>0,Ae=!!R.alphaHash,Re=!!R.extensions,Xe=!!Y.attributes.uv1,Ge=!!Y.attributes.uv2,ut=!!Y.attributes.uv3,ft=kn;return R.toneMapped&&(De===null||De.isXRRenderTarget===!0)&&(ft=i.toneMapping),{isWebGL2:h,shaderID:ne,shaderType:R.type,shaderName:R.name,vertexShader:Q,fragmentShader:_e,defines:R.defines,customVertexShaderID:z,customFragmentShaderID:Pe,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:g,batching:qe,instancing:We,instancingColor:We&&ue.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:De===null?i.outputColorSpace:De.isXRRenderTarget===!0?De.texture.colorSpace:An,map:Be,matcap:Qe,envMap:F,envMapMode:F&&te.mapping,envMapCubeUVHeight:le,aoMap:Ce,lightMap:se,bumpMap:Me,normalMap:ie,displacementMap:p&&ze,emissiveMap:Se,normalMapObjectSpace:ie&&R.normalMapType===Bh,normalMapTangentSpace:ie&&R.normalMapType===Cc,metalnessMap:A,roughnessMap:w,anisotropy:q,anisotropyMap:Ue,clearcoat:xe,clearcoatMap:Ne,clearcoatNormalMap:Ye,clearcoatRoughnessMap:tt,iridescence:fe,iridescenceMap:pe,iridescenceThicknessMap:rt,sheen:de,sheenColorMap:L,sheenRoughnessMap:me,specularMap:Le,specularColorMap:be,specularIntensityMap:ke,transmission:Fe,transmissionMap:nt,thicknessMap:ht,gradientMap:it,opaque:R.transparent===!1&&R.blending===Li,alphaMap:Ee,alphaTest:H,alphaHash:Ae,combine:R.combine,mapUv:Be&&b(R.map.channel),aoMapUv:Ce&&b(R.aoMap.channel),lightMapUv:se&&b(R.lightMap.channel),bumpMapUv:Me&&b(R.bumpMap.channel),normalMapUv:ie&&b(R.normalMap.channel),displacementMapUv:ze&&b(R.displacementMap.channel),emissiveMapUv:Se&&b(R.emissiveMap.channel),metalnessMapUv:A&&b(R.metalnessMap.channel),roughnessMapUv:w&&b(R.roughnessMap.channel),anisotropyMapUv:Ue&&b(R.anisotropyMap.channel),clearcoatMapUv:Ne&&b(R.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&b(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&b(R.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&b(R.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&b(R.iridescenceThicknessMap.channel),sheenColorMapUv:L&&b(R.sheenColorMap.channel),sheenRoughnessMapUv:me&&b(R.sheenRoughnessMap.channel),specularMapUv:Le&&b(R.specularMap.channel),specularColorMapUv:be&&b(R.specularColorMap.channel),specularIntensityMapUv:ke&&b(R.specularIntensityMap.channel),transmissionMapUv:nt&&b(R.transmissionMap.channel),thicknessMapUv:ht&&b(R.thicknessMap.channel),alphaMapUv:Ee&&b(R.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ie||q),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:Xe,vertexUv2s:Ge,vertexUv3s:ut,pointsUvs:ue.isPoints===!0&&!!Y.attributes.uv&&(Be||Ee),fog:!!k,useFog:R.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ue.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:R.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Be&&R.map.isVideoTexture===!0&&_t.getTransfer(R.map.colorSpace)===vt,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===wn,flipSided:R.side===kt,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:Re&&R.extensions.derivatives===!0,extensionFragDepth:Re&&R.extensions.fragDepth===!0,extensionDrawBuffers:Re&&R.extensions.drawBuffers===!0,extensionShaderTextureLOD:Re&&R.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Re&&R.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()}}function f(R){let T=[];if(R.shaderID?T.push(R.shaderID):(T.push(R.customVertexShaderID),T.push(R.customFragmentShaderID)),R.defines!==void 0)for(let Z in R.defines)T.push(Z),T.push(R.defines[Z]);return R.isRawShaderMaterial===!1&&(C(T,R),E(T,R),T.push(i.outputColorSpace)),T.push(R.customProgramCacheKey),T.join()}function C(R,T){R.push(T.precision),R.push(T.outputColorSpace),R.push(T.envMapMode),R.push(T.envMapCubeUVHeight),R.push(T.mapUv),R.push(T.alphaMapUv),R.push(T.lightMapUv),R.push(T.aoMapUv),R.push(T.bumpMapUv),R.push(T.normalMapUv),R.push(T.displacementMapUv),R.push(T.emissiveMapUv),R.push(T.metalnessMapUv),R.push(T.roughnessMapUv),R.push(T.anisotropyMapUv),R.push(T.clearcoatMapUv),R.push(T.clearcoatNormalMapUv),R.push(T.clearcoatRoughnessMapUv),R.push(T.iridescenceMapUv),R.push(T.iridescenceThicknessMapUv),R.push(T.sheenColorMapUv),R.push(T.sheenRoughnessMapUv),R.push(T.specularMapUv),R.push(T.specularColorMapUv),R.push(T.specularIntensityMapUv),R.push(T.transmissionMapUv),R.push(T.thicknessMapUv),R.push(T.combine),R.push(T.fogExp2),R.push(T.sizeAttenuation),R.push(T.morphTargetsCount),R.push(T.morphAttributeCount),R.push(T.numDirLights),R.push(T.numPointLights),R.push(T.numSpotLights),R.push(T.numSpotLightMaps),R.push(T.numHemiLights),R.push(T.numRectAreaLights),R.push(T.numDirLightShadows),R.push(T.numPointLightShadows),R.push(T.numSpotLightShadows),R.push(T.numSpotLightShadowsWithMaps),R.push(T.numLightProbes),R.push(T.shadowMapType),R.push(T.toneMapping),R.push(T.numClippingPlanes),R.push(T.numClipIntersection),R.push(T.depthPacking)}function E(R,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),R.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),R.push(a.mask)}function P(R){let T=M[R.type],Z;if(T){let re=pn[T];Z=Su.clone(re.uniforms)}else Z=R.uniforms;return Z}function V(R,T){let Z;for(let re=0,ue=c.length;re<ue;re++){let k=c[re];if(k.cacheKey===T){Z=k,++Z.usedTimes;break}}return Z===void 0&&(Z=new Im(i,T,R,r),c.push(Z)),Z}function D(R){if(--R.usedTimes===0){let T=c.indexOf(R);c[T]=c[c.length-1],c.pop(),R.destroy()}}function I(R){l.remove(R)}function ee(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:P,acquireProgram:V,releaseProgram:D,releaseShaderCache:I,programs:c,dispose:ee}}function Nm(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ic(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d,p,g,M,b,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:g,groupOrder:M,renderOrder:d.renderOrder,z:b,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=g,f.groupOrder=M,f.renderOrder=d.renderOrder,f.z=b,f.group=m),e++,f}function a(d,p,g,M,b,m){let f=o(d,p,g,M,b,m);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):t.push(f)}function l(d,p,g,M,b,m){let f=o(d,p,g,M,b,m);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||Om),n.length>1&&n.sort(p||nc),s.length>1&&s.sort(p||nc)}function h(){for(let d=e,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Fm(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ic,i.set(n,[o])):s>=r.length?(o=new ic,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Bm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new st};break;case"SpotLight":t={position:new O,direction:new O,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function zm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Hm=0;function km(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Vm(i,e){let t=new Bm,n=zm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new O);let r=new O,o=new At,a=new At;function l(h,d){let p=0,g=0,M=0;for(let re=0;re<9;re++)s.probe[re].set(0,0,0);let b=0,m=0,f=0,C=0,E=0,P=0,V=0,D=0,I=0,ee=0,R=0;h.sort(km);let T=d===!0?Math.PI:1;for(let re=0,ue=h.length;re<ue;re++){let k=h[re],Y=k.color,j=k.intensity,te=k.distance,le=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)p+=Y.r*j*T,g+=Y.g*j*T,M+=Y.b*j*T;else if(k.isLightProbe){for(let ne=0;ne<9;ne++)s.probe[ne].addScaledVector(k.sh.coefficients[ne],j);R++}else if(k.isDirectionalLight){let ne=t.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity*T),k.castShadow){let ce=k.shadow,ge=n.get(k);ge.shadowBias=ce.bias,ge.shadowNormalBias=ce.normalBias,ge.shadowRadius=ce.radius,ge.shadowMapSize=ce.mapSize,s.directionalShadow[b]=ge,s.directionalShadowMap[b]=le,s.directionalShadowMatrix[b]=k.shadow.matrix,P++}s.directional[b]=ne,b++}else if(k.isSpotLight){let ne=t.get(k);ne.position.setFromMatrixPosition(k.matrixWorld),ne.color.copy(Y).multiplyScalar(j*T),ne.distance=te,ne.coneCos=Math.cos(k.angle),ne.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ne.decay=k.decay,s.spot[f]=ne;let ce=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,ce.updateMatrices(k),k.castShadow&&ee++),s.spotLightMatrix[f]=ce.matrix,k.castShadow){let ge=n.get(k);ge.shadowBias=ce.bias,ge.shadowNormalBias=ce.normalBias,ge.shadowRadius=ce.radius,ge.shadowMapSize=ce.mapSize,s.spotShadow[f]=ge,s.spotShadowMap[f]=le,D++}f++}else if(k.isRectAreaLight){let ne=t.get(k);ne.color.copy(Y).multiplyScalar(j),ne.halfWidth.set(k.width*.5,0,0),ne.halfHeight.set(0,k.height*.5,0),s.rectArea[C]=ne,C++}else if(k.isPointLight){let ne=t.get(k);if(ne.color.copy(k.color).multiplyScalar(k.intensity*T),ne.distance=k.distance,ne.decay=k.decay,k.castShadow){let ce=k.shadow,ge=n.get(k);ge.shadowBias=ce.bias,ge.shadowNormalBias=ce.normalBias,ge.shadowRadius=ce.radius,ge.shadowMapSize=ce.mapSize,ge.shadowCameraNear=ce.camera.near,ge.shadowCameraFar=ce.camera.far,s.pointShadow[m]=ge,s.pointShadowMap[m]=le,s.pointShadowMatrix[m]=k.shadow.matrix,V++}s.point[m]=ne,m++}else if(k.isHemisphereLight){let ne=t.get(k);ne.skyColor.copy(k.color).multiplyScalar(j*T),ne.groundColor.copy(k.groundColor).multiplyScalar(j*T),s.hemi[E]=ne,E++}}C>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_FLOAT_1,s.rectAreaLTC2=Ie.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ie.LTC_HALF_1,s.rectAreaLTC2=Ie.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=g,s.ambient[2]=M;let Z=s.hash;(Z.directionalLength!==b||Z.pointLength!==m||Z.spotLength!==f||Z.rectAreaLength!==C||Z.hemiLength!==E||Z.numDirectionalShadows!==P||Z.numPointShadows!==V||Z.numSpotShadows!==D||Z.numSpotMaps!==I||Z.numLightProbes!==R)&&(s.directional.length=b,s.spot.length=f,s.rectArea.length=C,s.point.length=m,s.hemi.length=E,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=V,s.pointShadowMap.length=V,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=V,s.spotLightMatrix.length=D+I-ee,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=ee,s.numLightProbes=R,Z.directionalLength=b,Z.pointLength=m,Z.spotLength=f,Z.rectAreaLength=C,Z.hemiLength=E,Z.numDirectionalShadows=P,Z.numPointShadows=V,Z.numSpotShadows=D,Z.numSpotMaps=I,Z.numLightProbes=R,s.version=Hm++)}function c(h,d){let p=0,g=0,M=0,b=0,m=0,f=d.matrixWorldInverse;for(let C=0,E=h.length;C<E;C++){let P=h[C];if(P.isDirectionalLight){let V=s.directional[p];V.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),V.direction.sub(r),V.direction.transformDirection(f),p++}else if(P.isSpotLight){let V=s.spot[M];V.position.setFromMatrixPosition(P.matrixWorld),V.position.applyMatrix4(f),V.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),V.direction.sub(r),V.direction.transformDirection(f),M++}else if(P.isRectAreaLight){let V=s.rectArea[b];V.position.setFromMatrixPosition(P.matrixWorld),V.position.applyMatrix4(f),a.identity(),o.copy(P.matrixWorld),o.premultiply(f),a.extractRotation(o),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),V.halfWidth.applyMatrix4(a),V.halfHeight.applyMatrix4(a),b++}else if(P.isPointLight){let V=s.point[g];V.position.setFromMatrixPosition(P.matrixWorld),V.position.applyMatrix4(f),g++}else if(P.isHemisphereLight){let V=s.hemi[m];V.direction.setFromMatrixPosition(P.matrixWorld),V.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:s}}function sc(i,e){let t=new Vm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function o(d){n.push(d)}function a(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Gm(i,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),l;return a===void 0?(l=new sc(i,e),t.set(r,[l])):o>=a.length?(l=new sc(i,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var Za=class extends Cn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ja=class extends Cn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xm=`uniform sampler2D shadow_pass;
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
}`;function qm(i,e,t){let n=new cs,s=new we,r=new we,o=new St,a=new Za({depthPacking:Fh}),l=new Ja,c={},h=t.maxTextureSize,d={[Gn]:kt,[kt]:Gn,[wn]:wn},p=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:Wm,fragmentShader:Xm}),g=p.clone();g.defines.HORIZONTAL_PASS=1;let M=new Zt;M.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new je(M,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let f=this.type;this.render=function(D,I,ee){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let R=i.getRenderTarget(),T=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),re=i.state;re.setBlending(Hn),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);let ue=f!==bn&&this.type===bn,k=f===bn&&this.type!==bn;for(let Y=0,j=D.length;Y<j;Y++){let te=D[Y],le=te.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;s.copy(le.mapSize);let ne=le.getFrameExtents();if(s.multiply(ne),r.copy(le.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,le.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,le.mapSize.y=r.y)),le.map===null||ue===!0||k===!0){let ge=this.type!==bn?{minFilter:Xt,magFilter:Xt}:{};le.map!==null&&le.map.dispose(),le.map=new Rn(s.x,s.y,ge),le.map.texture.name=te.name+".shadowMap",le.camera.updateProjectionMatrix()}i.setRenderTarget(le.map),i.clear();let ce=le.getViewportCount();for(let ge=0;ge<ce;ge++){let Te=le.getViewport(ge);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),re.viewport(o),le.updateMatrices(te,ge),n=le.getFrustum(),P(I,ee,le.camera,te,this.type)}le.isPointLightShadow!==!0&&this.type===bn&&C(le,ee),le.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(R,T,Z)};function C(D,I){let ee=e.update(b);p.defines.VSM_SAMPLES!==D.blurSamples&&(p.defines.VSM_SAMPLES=D.blurSamples,g.defines.VSM_SAMPLES=D.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Rn(s.x,s.y)),p.uniforms.shadow_pass.value=D.map.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(I,null,ee,p,b,null),g.uniforms.shadow_pass.value=D.mapPass.texture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(I,null,ee,g,b,null)}function E(D,I,ee,R){let T=null,Z=ee.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(Z!==void 0)T=Z;else if(T=ee.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let re=T.uuid,ue=I.uuid,k=c[re];k===void 0&&(k={},c[re]=k);let Y=k[ue];Y===void 0&&(Y=T.clone(),k[ue]=Y,I.addEventListener("dispose",V)),T=Y}if(T.visible=I.visible,T.wireframe=I.wireframe,R===bn?T.side=I.shadowSide!==null?I.shadowSide:I.side:T.side=I.shadowSide!==null?I.shadowSide:d[I.side],T.alphaMap=I.alphaMap,T.alphaTest=I.alphaTest,T.map=I.map,T.clipShadows=I.clipShadows,T.clippingPlanes=I.clippingPlanes,T.clipIntersection=I.clipIntersection,T.displacementMap=I.displacementMap,T.displacementScale=I.displacementScale,T.displacementBias=I.displacementBias,T.wireframeLinewidth=I.wireframeLinewidth,T.linewidth=I.linewidth,ee.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let re=i.properties.get(T);re.light=ee}return T}function P(D,I,ee,R,T){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&T===bn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,D.matrixWorld);let ue=e.update(D),k=D.material;if(Array.isArray(k)){let Y=ue.groups;for(let j=0,te=Y.length;j<te;j++){let le=Y[j],ne=k[le.materialIndex];if(ne&&ne.visible){let ce=E(D,ne,R,T);D.onBeforeShadow(i,D,I,ee,ue,ce,le),i.renderBufferDirect(ee,null,ue,ce,D,le),D.onAfterShadow(i,D,I,ee,ue,ce,le)}}}else if(k.visible){let Y=E(D,k,R,T);D.onBeforeShadow(i,D,I,ee,ue,Y,null),i.renderBufferDirect(ee,null,ue,Y,D,null),D.onAfterShadow(i,D,I,ee,ue,Y,null)}}let re=D.children;for(let ue=0,k=re.length;ue<k;ue++)P(re[ue],I,ee,R,T)}function V(D){D.target.removeEventListener("dispose",V);for(let ee in c){let R=c[ee],T=D.target.uuid;T in R&&(R[T].dispose(),delete R[T])}}}function Ym(i,e,t){let n=t.isWebGL2;function s(){let H=!1,Ae=new St,Re=null,Xe=new St(0,0,0,0);return{setMask:function(Ge){Re!==Ge&&!H&&(i.colorMask(Ge,Ge,Ge,Ge),Re=Ge)},setLocked:function(Ge){H=Ge},setClear:function(Ge,ut,ft,bt,Nt){Nt===!0&&(Ge*=bt,ut*=bt,ft*=bt),Ae.set(Ge,ut,ft,bt),Xe.equals(Ae)===!1&&(i.clearColor(Ge,ut,ft,bt),Xe.copy(Ae))},reset:function(){H=!1,Re=null,Xe.set(-1,0,0,0)}}}function r(){let H=!1,Ae=null,Re=null,Xe=null;return{setTest:function(Ge){Ge?qe(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Ge){Ae!==Ge&&!H&&(i.depthMask(Ge),Ae=Ge)},setFunc:function(Ge){if(Re!==Ge){switch(Ge){case fh:i.depthFunc(i.NEVER);break;case ph:i.depthFunc(i.ALWAYS);break;case mh:i.depthFunc(i.LESS);break;case sr:i.depthFunc(i.LEQUAL);break;case gh:i.depthFunc(i.EQUAL);break;case _h:i.depthFunc(i.GEQUAL);break;case xh:i.depthFunc(i.GREATER);break;case yh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=Ge}},setLocked:function(Ge){H=Ge},setClear:function(Ge){Xe!==Ge&&(i.clearDepth(Ge),Xe=Ge)},reset:function(){H=!1,Ae=null,Re=null,Xe=null}}}function o(){let H=!1,Ae=null,Re=null,Xe=null,Ge=null,ut=null,ft=null,bt=null,Nt=null;return{setTest:function(gt){H||(gt?qe(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(gt){Ae!==gt&&!H&&(i.stencilMask(gt),Ae=gt)},setFunc:function(gt,Lt,Yt){(Re!==gt||Xe!==Lt||Ge!==Yt)&&(i.stencilFunc(gt,Lt,Yt),Re=gt,Xe=Lt,Ge=Yt)},setOp:function(gt,Lt,Yt){(ut!==gt||ft!==Lt||bt!==Yt)&&(i.stencilOp(gt,Lt,Yt),ut=gt,ft=Lt,bt=Yt)},setLocked:function(gt){H=gt},setClear:function(gt){Nt!==gt&&(i.clearStencil(gt),Nt=gt)},reset:function(){H=!1,Ae=null,Re=null,Xe=null,Ge=null,ut=null,ft=null,bt=null,Nt=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,p={},g={},M=new WeakMap,b=[],m=null,f=!1,C=null,E=null,P=null,V=null,D=null,I=null,ee=null,R=new st(0,0,0),T=0,Z=!1,re=null,ue=null,k=null,Y=null,j=null,te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),le=!1,ne=0,ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(ce)[1]),le=ne>=1):ce.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),le=ne>=2);let ge=null,Te={},Q=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),z=new St().fromArray(Q),Pe=new St().fromArray(_e);function De(H,Ae,Re,Xe){let Ge=new Uint8Array(4),ut=i.createTexture();i.bindTexture(H,ut),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<Re;ft++)n&&(H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ae,0,i.RGBA,1,1,Xe,0,i.RGBA,i.UNSIGNED_BYTE,Ge):i.texImage2D(Ae+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ge);return ut}let We={};We[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),We[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(We[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),We[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),qe(i.DEPTH_TEST),l.setFunc(sr),Se(!1),A(Fo),qe(i.CULL_FACE),ie(Hn);function qe(H){p[H]!==!0&&(i.enable(H),p[H]=!0)}function Be(H){p[H]!==!1&&(i.disable(H),p[H]=!1)}function Qe(H,Ae){return g[H]!==Ae?(i.bindFramebuffer(H,Ae),g[H]=Ae,n&&(H===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=Ae),H===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function F(H,Ae){let Re=b,Xe=!1;if(H)if(Re=M.get(Ae),Re===void 0&&(Re=[],M.set(Ae,Re)),H.isWebGLMultipleRenderTargets){let Ge=H.texture;if(Re.length!==Ge.length||Re[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,ft=Ge.length;ut<ft;ut++)Re[ut]=i.COLOR_ATTACHMENT0+ut;Re.length=Ge.length,Xe=!0}}else Re[0]!==i.COLOR_ATTACHMENT0&&(Re[0]=i.COLOR_ATTACHMENT0,Xe=!0);else Re[0]!==i.BACK&&(Re[0]=i.BACK,Xe=!0);Xe&&(t.isWebGL2?i.drawBuffers(Re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Re))}function Ce(H){return m!==H?(i.useProgram(H),m=H,!0):!1}let se={[Kn]:i.FUNC_ADD,[jc]:i.FUNC_SUBTRACT,[Qc]:i.FUNC_REVERSE_SUBTRACT};if(n)se[ko]=i.MIN,se[Vo]=i.MAX;else{let H=e.get("EXT_blend_minmax");H!==null&&(se[ko]=H.MIN_EXT,se[Vo]=H.MAX_EXT)}let Me={[eh]:i.ZERO,[th]:i.ONE,[nh]:i.SRC_COLOR,[La]:i.SRC_ALPHA,[lh]:i.SRC_ALPHA_SATURATE,[ah]:i.DST_COLOR,[sh]:i.DST_ALPHA,[ih]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[oh]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[ch]:i.CONSTANT_COLOR,[hh]:i.ONE_MINUS_CONSTANT_COLOR,[uh]:i.CONSTANT_ALPHA,[dh]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(H,Ae,Re,Xe,Ge,ut,ft,bt,Nt,gt){if(H===Hn){f===!0&&(Be(i.BLEND),f=!1);return}if(f===!1&&(qe(i.BLEND),f=!0),H!==$c){if(H!==C||gt!==Z){if((E!==Kn||D!==Kn)&&(i.blendEquation(i.FUNC_ADD),E=Kn,D=Kn),gt)switch(H){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.ONE,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Bo:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case zo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ho:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}P=null,V=null,I=null,ee=null,R.set(0,0,0),T=0,C=H,Z=gt}return}Ge=Ge||Ae,ut=ut||Re,ft=ft||Xe,(Ae!==E||Ge!==D)&&(i.blendEquationSeparate(se[Ae],se[Ge]),E=Ae,D=Ge),(Re!==P||Xe!==V||ut!==I||ft!==ee)&&(i.blendFuncSeparate(Me[Re],Me[Xe],Me[ut],Me[ft]),P=Re,V=Xe,I=ut,ee=ft),(bt.equals(R)===!1||Nt!==T)&&(i.blendColor(bt.r,bt.g,bt.b,Nt),R.copy(bt),T=Nt),C=H,Z=!1}function ze(H,Ae){H.side===wn?Be(i.CULL_FACE):qe(i.CULL_FACE);let Re=H.side===kt;Ae&&(Re=!Re),Se(Re),H.blending===Li&&H.transparent===!1?ie(Hn):ie(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),l.setFunc(H.depthFunc),l.setTest(H.depthTest),l.setMask(H.depthWrite),a.setMask(H.colorWrite);let Xe=H.stencilWrite;c.setTest(Xe),Xe&&(c.setMask(H.stencilWriteMask),c.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),c.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),q(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?qe(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function Se(H){re!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),re=H)}function A(H){H!==Jc?(qe(i.CULL_FACE),H!==ue&&(H===Fo?i.cullFace(i.BACK):H===Kc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),ue=H}function w(H){H!==k&&(le&&i.lineWidth(H),k=H)}function q(H,Ae,Re){H?(qe(i.POLYGON_OFFSET_FILL),(Y!==Ae||j!==Re)&&(i.polygonOffset(Ae,Re),Y=Ae,j=Re)):Be(i.POLYGON_OFFSET_FILL)}function xe(H){H?qe(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function fe(H){H===void 0&&(H=i.TEXTURE0+te-1),ge!==H&&(i.activeTexture(H),ge=H)}function de(H,Ae,Re){Re===void 0&&(ge===null?Re=i.TEXTURE0+te-1:Re=ge);let Xe=Te[Re];Xe===void 0&&(Xe={type:void 0,texture:void 0},Te[Re]=Xe),(Xe.type!==H||Xe.texture!==Ae)&&(ge!==Re&&(i.activeTexture(Re),ge=Re),i.bindTexture(H,Ae||We[H]),Xe.type=H,Xe.texture=Ae)}function Fe(){let H=Te[ge];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ue(){try{i.compressedTexImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ye(){try{i.texSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function L(){try{i.texStorage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function me(){try{i.texStorage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(){try{i.texImage2D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(){try{i.texImage3D.apply(i,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(H){z.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),z.copy(H))}function nt(H){Pe.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Pe.copy(H))}function ht(H,Ae){let Re=d.get(Ae);Re===void 0&&(Re=new WeakMap,d.set(Ae,Re));let Xe=Re.get(H);Xe===void 0&&(Xe=i.getUniformBlockIndex(Ae,H.name),Re.set(H,Xe))}function it(H,Ae){let Xe=d.get(Ae).get(H);h.get(Ae)!==Xe&&(i.uniformBlockBinding(Ae,Xe,H.__bindingPointIndex),h.set(Ae,Xe))}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},ge=null,Te={},g={},M=new WeakMap,b=[],m=null,f=!1,C=null,E=null,P=null,V=null,D=null,I=null,ee=null,R=new st(0,0,0),T=0,Z=!1,re=null,ue=null,k=null,Y=null,j=null,z.set(0,0,i.canvas.width,i.canvas.height),Pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:qe,disable:Be,bindFramebuffer:Qe,drawBuffers:F,useProgram:Ce,setBlending:ie,setMaterial:ze,setFlipSided:Se,setCullFace:A,setLineWidth:w,setPolygonOffset:q,setScissorTest:xe,activeTexture:fe,bindTexture:de,unbindTexture:Fe,compressedTexImage2D:Ue,compressedTexImage3D:Ne,texImage2D:Le,texImage3D:be,updateUBOMapping:ht,uniformBlockBinding:it,texStorage2D:L,texStorage3D:me,texSubImage2D:Ye,texSubImage3D:tt,compressedTexSubImage2D:pe,compressedTexSubImage3D:rt,scissor:ke,viewport:nt,reset:Ee}}function Zm(i,e,t,n,s,r,o){let a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,w){return g?new OffscreenCanvas(A,w):dr("canvas")}function b(A,w,q,xe){let fe=1;if((A.width>xe||A.height>xe)&&(fe=xe/Math.max(A.width,A.height)),fe<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let de=w?ur:Math.floor,Fe=de(fe*A.width),Ue=de(fe*A.height);d===void 0&&(d=M(Fe,Ue));let Ne=q?M(Fe,Ue):d;return Ne.width=Fe,Ne.height=Ue,Ne.getContext("2d").drawImage(A,0,0,Fe,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Fe+"x"+Ue+")."),Ne}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Fa(A.width)&&Fa(A.height)}function f(A){return a?!1:A.wrapS!==ln||A.wrapT!==ln||A.minFilter!==Xt&&A.minFilter!==Qt}function C(A,w){return A.generateMipmaps&&w&&A.minFilter!==Xt&&A.minFilter!==Qt}function E(A){i.generateMipmap(A)}function P(A,w,q,xe,fe=!1){if(a===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let de=w;if(w===i.RED&&(q===i.FLOAT&&(de=i.R32F),q===i.HALF_FLOAT&&(de=i.R16F),q===i.UNSIGNED_BYTE&&(de=i.R8)),w===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(de=i.R8UI),q===i.UNSIGNED_SHORT&&(de=i.R16UI),q===i.UNSIGNED_INT&&(de=i.R32UI),q===i.BYTE&&(de=i.R8I),q===i.SHORT&&(de=i.R16I),q===i.INT&&(de=i.R32I)),w===i.RG&&(q===i.FLOAT&&(de=i.RG32F),q===i.HALF_FLOAT&&(de=i.RG16F),q===i.UNSIGNED_BYTE&&(de=i.RG8)),w===i.RGBA){let Fe=fe?or:_t.getTransfer(xe);q===i.FLOAT&&(de=i.RGBA32F),q===i.HALF_FLOAT&&(de=i.RGBA16F),q===i.UNSIGNED_BYTE&&(de=Fe===vt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)}return(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function V(A,w,q){return C(A,q)===!0||A.isFramebufferTexture&&A.minFilter!==Xt&&A.minFilter!==Qt?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function D(A){return A===Xt||A===Go||A===Jr?i.NEAREST:i.LINEAR}function I(A){let w=A.target;w.removeEventListener("dispose",I),R(w),w.isVideoTexture&&h.delete(w)}function ee(A){let w=A.target;w.removeEventListener("dispose",ee),Z(w)}function R(A){let w=n.get(A);if(w.__webglInit===void 0)return;let q=A.source,xe=p.get(q);if(xe){let fe=xe[w.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&T(A),Object.keys(xe).length===0&&p.delete(q)}n.remove(A)}function T(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let q=A.source,xe=p.get(q);delete xe[w.__cacheKey],o.memory.textures--}function Z(A){let w=A.texture,q=n.get(A),xe=n.get(w);if(xe.__webglTexture!==void 0&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(q.__webglFramebuffer[fe]))for(let de=0;de<q.__webglFramebuffer[fe].length;de++)i.deleteFramebuffer(q.__webglFramebuffer[fe][de]);else i.deleteFramebuffer(q.__webglFramebuffer[fe]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[fe])}else{if(Array.isArray(q.__webglFramebuffer))for(let fe=0;fe<q.__webglFramebuffer.length;fe++)i.deleteFramebuffer(q.__webglFramebuffer[fe]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let fe=0;fe<q.__webglColorRenderbuffer.length;fe++)q.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[fe]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let fe=0,de=w.length;fe<de;fe++){let Fe=n.get(w[fe]);Fe.__webglTexture&&(i.deleteTexture(Fe.__webglTexture),o.memory.textures--),n.remove(w[fe])}n.remove(w),n.remove(A)}let re=0;function ue(){re=0}function k(){let A=re;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),re+=1,A}function Y(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function j(A,w){let q=n.get(A);if(A.isVideoTexture&&ze(A),A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){let xe=A.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(q,A,w);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+w)}function te(A,w){let q=n.get(A);if(A.version>0&&q.__version!==A.version){z(q,A,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+w)}function le(A,w){let q=n.get(A);if(A.version>0&&q.__version!==A.version){z(q,A,w);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+w)}function ne(A,w){let q=n.get(A);if(A.version>0&&q.__version!==A.version){Pe(q,A,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+w)}let ce={[ss]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},ge={[Xt]:i.NEAREST,[Go]:i.NEAREST_MIPMAP_NEAREST,[Jr]:i.NEAREST_MIPMAP_LINEAR,[Qt]:i.LINEAR,[Ah]:i.LINEAR_MIPMAP_NEAREST,[rs]:i.LINEAR_MIPMAP_LINEAR},Te={[zh]:i.NEVER,[Xh]:i.ALWAYS,[Hh]:i.LESS,[Pc]:i.LEQUAL,[kh]:i.EQUAL,[Wh]:i.GEQUAL,[Vh]:i.GREATER,[Gh]:i.NOTEQUAL};function Q(A,w,q){if(q?(i.texParameteri(A,i.TEXTURE_WRAP_S,ce[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ce[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ce[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ge[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ge[w.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==ln||w.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,D(w.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,D(w.minFilter)),w.minFilter!==Xt&&w.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Te[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let xe=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===Xt||w.minFilter!==Jr&&w.minFilter!==rs||w.type===zn&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===as&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,xe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function _e(A,w){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",I));let xe=w.source,fe=p.get(xe);fe===void 0&&(fe={},p.set(xe,fe));let de=Y(w);if(de!==A.__cacheKey){fe[de]===void 0&&(fe[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),fe[de].usedTimes++;let Fe=fe[A.__cacheKey];Fe!==void 0&&(fe[A.__cacheKey].usedTimes--,Fe.usedTimes===0&&T(w)),A.__cacheKey=de,A.__webglTexture=fe[de].texture}return q}function z(A,w,q){let xe=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(xe=i.TEXTURE_3D);let fe=_e(A,w),de=w.source;t.bindTexture(xe,A.__webglTexture,i.TEXTURE0+q);let Fe=n.get(de);if(de.version!==Fe.__version||fe===!0){t.activeTexture(i.TEXTURE0+q);let Ue=_t.getPrimaries(_t.workingColorSpace),Ne=w.colorSpace===en?null:_t.getPrimaries(w.colorSpace),Ye=w.colorSpace===en||Ue===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let tt=f(w)&&m(w.image)===!1,pe=b(w.image,tt,!1,s.maxTextureSize);pe=Se(w,pe);let rt=m(pe)||a,L=r.convert(w.format,w.colorSpace),me=r.convert(w.type),Le=P(w.internalFormat,L,me,w.colorSpace,w.isVideoTexture);Q(xe,w,rt);let be,ke=w.mipmaps,nt=a&&w.isVideoTexture!==!0&&Le!==Ac,ht=Fe.__version===void 0||fe===!0,it=V(w,pe,rt);if(w.isDepthTexture)Le=i.DEPTH_COMPONENT,a?w.type===zn?Le=i.DEPTH_COMPONENT32F:w.type===Bn?Le=i.DEPTH_COMPONENT24:w.type===Qn?Le=i.DEPTH24_STENCIL8:Le=i.DEPTH_COMPONENT16:w.type===zn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ei&&Le===i.DEPTH_COMPONENT&&w.type!==wo&&w.type!==Bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Bn,me=r.convert(w.type)),w.format===Fi&&Le===i.DEPTH_COMPONENT&&(Le=i.DEPTH_STENCIL,w.type!==Qn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Qn,me=r.convert(w.type))),ht&&(nt?t.texStorage2D(i.TEXTURE_2D,1,Le,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Le,pe.width,pe.height,0,L,me,null));else if(w.isDataTexture)if(ke.length>0&&rt){nt&&ht&&t.texStorage2D(i.TEXTURE_2D,it,Le,ke[0].width,ke[0].height);for(let Ee=0,H=ke.length;Ee<H;Ee++)be=ke[Ee],nt?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,be.width,be.height,L,me,be.data):t.texImage2D(i.TEXTURE_2D,Ee,Le,be.width,be.height,0,L,me,be.data);w.generateMipmaps=!1}else nt?(ht&&t.texStorage2D(i.TEXTURE_2D,it,Le,pe.width,pe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,L,me,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Le,pe.width,pe.height,0,L,me,pe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){nt&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,Le,ke[0].width,ke[0].height,pe.depth);for(let Ee=0,H=ke.length;Ee<H;Ee++)be=ke[Ee],w.format!==cn?L!==null?nt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,be.width,be.height,pe.depth,L,be.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ee,Le,be.width,be.height,pe.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ee,0,0,0,be.width,be.height,pe.depth,L,me,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ee,Le,be.width,be.height,pe.depth,0,L,me,be.data)}else{nt&&ht&&t.texStorage2D(i.TEXTURE_2D,it,Le,ke[0].width,ke[0].height);for(let Ee=0,H=ke.length;Ee<H;Ee++)be=ke[Ee],w.format!==cn?L!==null?nt?t.compressedTexSubImage2D(i.TEXTURE_2D,Ee,0,0,be.width,be.height,L,be.data):t.compressedTexImage2D(i.TEXTURE_2D,Ee,Le,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,be.width,be.height,L,me,be.data):t.texImage2D(i.TEXTURE_2D,Ee,Le,be.width,be.height,0,L,me,be.data)}else if(w.isDataArrayTexture)nt?(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,it,Le,pe.width,pe.height,pe.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,L,me,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,L,me,pe.data);else if(w.isData3DTexture)nt?(ht&&t.texStorage3D(i.TEXTURE_3D,it,Le,pe.width,pe.height,pe.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,L,me,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,L,me,pe.data);else if(w.isFramebufferTexture){if(ht)if(nt)t.texStorage2D(i.TEXTURE_2D,it,Le,pe.width,pe.height);else{let Ee=pe.width,H=pe.height;for(let Ae=0;Ae<it;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Le,Ee,H,0,L,me,null),Ee>>=1,H>>=1}}else if(ke.length>0&&rt){nt&&ht&&t.texStorage2D(i.TEXTURE_2D,it,Le,ke[0].width,ke[0].height);for(let Ee=0,H=ke.length;Ee<H;Ee++)be=ke[Ee],nt?t.texSubImage2D(i.TEXTURE_2D,Ee,0,0,L,me,be):t.texImage2D(i.TEXTURE_2D,Ee,Le,L,me,be);w.generateMipmaps=!1}else nt?(ht&&t.texStorage2D(i.TEXTURE_2D,it,Le,pe.width,pe.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,L,me,pe)):t.texImage2D(i.TEXTURE_2D,0,Le,L,me,pe);C(w,rt)&&E(xe),Fe.__version=de.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function Pe(A,w,q){if(w.image.length!==6)return;let xe=_e(A,w),fe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);let de=n.get(fe);if(fe.version!==de.__version||xe===!0){t.activeTexture(i.TEXTURE0+q);let Fe=_t.getPrimaries(_t.workingColorSpace),Ue=w.colorSpace===en?null:_t.getPrimaries(w.colorSpace),Ne=w.colorSpace===en||Fe===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Ye=w.isCompressedTexture||w.image[0].isCompressedTexture,tt=w.image[0]&&w.image[0].isDataTexture,pe=[];for(let Ee=0;Ee<6;Ee++)!Ye&&!tt?pe[Ee]=b(w.image[Ee],!1,!0,s.maxCubemapSize):pe[Ee]=tt?w.image[Ee].image:w.image[Ee],pe[Ee]=Se(w,pe[Ee]);let rt=pe[0],L=m(rt)||a,me=r.convert(w.format,w.colorSpace),Le=r.convert(w.type),be=P(w.internalFormat,me,Le,w.colorSpace),ke=a&&w.isVideoTexture!==!0,nt=de.__version===void 0||xe===!0,ht=V(w,rt,L);Q(i.TEXTURE_CUBE_MAP,w,L);let it;if(Ye){ke&&nt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ht,be,rt.width,rt.height);for(let Ee=0;Ee<6;Ee++){it=pe[Ee].mipmaps;for(let H=0;H<it.length;H++){let Ae=it[H];w.format!==cn?me!==null?ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,H,0,0,Ae.width,Ae.height,me,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,H,be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,H,0,0,Ae.width,Ae.height,me,Le,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,H,be,Ae.width,Ae.height,0,me,Le,Ae.data)}}}else{it=w.mipmaps,ke&&nt&&(it.length>0&&ht++,t.texStorage2D(i.TEXTURE_CUBE_MAP,ht,be,pe[0].width,pe[0].height));for(let Ee=0;Ee<6;Ee++)if(tt){ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,pe[Ee].width,pe[Ee].height,me,Le,pe[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,be,pe[Ee].width,pe[Ee].height,0,me,Le,pe[Ee].data);for(let H=0;H<it.length;H++){let Re=it[H].image[Ee].image;ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,H+1,0,0,Re.width,Re.height,me,Le,Re.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,H+1,be,Re.width,Re.height,0,me,Le,Re.data)}}else{ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,me,Le,pe[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,be,me,Le,pe[Ee]);for(let H=0;H<it.length;H++){let Ae=it[H];ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,H+1,0,0,me,Le,Ae.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,H+1,be,me,Le,Ae.image[Ee])}}}C(w,L)&&E(i.TEXTURE_CUBE_MAP),de.__version=fe.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function De(A,w,q,xe,fe,de){let Fe=r.convert(q.format,q.colorSpace),Ue=r.convert(q.type),Ne=P(q.internalFormat,Fe,Ue,q.colorSpace);if(!n.get(w).__hasExternalTextures){let tt=Math.max(1,w.width>>de),pe=Math.max(1,w.height>>de);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,de,Ne,tt,pe,w.depth,0,Fe,Ue,null):t.texImage2D(fe,de,Ne,tt,pe,0,Fe,Ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ie(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,fe,n.get(q).__webglTexture,0,Me(w)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,fe,n.get(q).__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(A,w,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let xe=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||ie(w)){let fe=w.depthTexture;fe&&fe.isDepthTexture&&(fe.type===zn?xe=i.DEPTH_COMPONENT32F:fe.type===Bn&&(xe=i.DEPTH_COMPONENT24));let de=Me(w);ie(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,xe,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,xe,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,xe,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){let xe=Me(w);q&&ie(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,w.width,w.height):ie(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let xe=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let fe=0;fe<xe.length;fe++){let de=xe[fe],Fe=r.convert(de.format,de.colorSpace),Ue=r.convert(de.type),Ne=P(de.internalFormat,Fe,Ue,de.colorSpace),Ye=Me(w);q&&ie(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Ne,w.width,w.height):ie(w)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Ne,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qe(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),j(w.depthTexture,0);let xe=n.get(w.depthTexture).__webglTexture,fe=Me(w);if(w.depthTexture.format===ei)ie(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(w.depthTexture.format===Fi)ie(w)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Be(A){let w=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");qe(w.__webglFramebuffer,A)}else if(q){w.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[xe]),w.__webglDepthbuffer[xe]=i.createRenderbuffer(),We(w.__webglDepthbuffer[xe],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),We(w.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(A,w,q){let xe=n.get(A);w!==void 0&&De(xe.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Be(A)}function F(A){let w=A.texture,q=n.get(A),xe=n.get(w);A.addEventListener("dispose",ee),A.isWebGLMultipleRenderTargets!==!0&&(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=w.version,o.memory.textures++);let fe=A.isWebGLCubeRenderTarget===!0,de=A.isWebGLMultipleRenderTargets===!0,Fe=m(A)||a;if(fe){q.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(a&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer[Ue]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)q.__webglFramebuffer[Ue][Ne]=i.createFramebuffer()}else q.__webglFramebuffer[Ue]=i.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ue=0;Ue<w.mipmaps.length;Ue++)q.__webglFramebuffer[Ue]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(de)if(s.drawBuffers){let Ue=A.texture;for(let Ne=0,Ye=Ue.length;Ne<Ye;Ne++){let tt=n.get(Ue[Ne]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ie(A)===!1){let Ue=de?w:[w];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Ue.length;Ne++){let Ye=Ue[Ne];q.__webglColorRenderbuffer[Ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Ne]);let tt=r.convert(Ye.format,Ye.colorSpace),pe=r.convert(Ye.type),rt=P(Ye.internalFormat,tt,pe,Ye.colorSpace,A.isXRRenderTarget===!0),L=Me(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,L,rt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,q.__webglColorRenderbuffer[Ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),We(q.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(fe){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),Q(i.TEXTURE_CUBE_MAP,w,Fe);for(let Ue=0;Ue<6;Ue++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)De(q.__webglFramebuffer[Ue][Ne],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ne);else De(q.__webglFramebuffer[Ue],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);C(w,Fe)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){let Ue=A.texture;for(let Ne=0,Ye=Ue.length;Ne<Ye;Ne++){let tt=Ue[Ne],pe=n.get(tt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Q(i.TEXTURE_2D,tt,Fe),De(q.__webglFramebuffer,A,tt,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,0),C(tt,Fe)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let Ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?Ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ue,xe.__webglTexture),Q(Ue,w,Fe),a&&w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)De(q.__webglFramebuffer[Ne],A,w,i.COLOR_ATTACHMENT0,Ue,Ne);else De(q.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,Ue,0);C(w,Fe)&&E(Ue),t.unbindTexture()}A.depthBuffer&&Be(A)}function Ce(A){let w=m(A)||a,q=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xe=0,fe=q.length;xe<fe;xe++){let de=q[xe];if(C(de,w)){let Fe=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ue=n.get(de).__webglTexture;t.bindTexture(Fe,Ue),E(Fe),t.unbindTexture()}}}function se(A){if(a&&A.samples>0&&ie(A)===!1){let w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],q=A.width,xe=A.height,fe=i.COLOR_BUFFER_BIT,de=[],Fe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(A),Ne=A.isWebGLMultipleRenderTargets===!0;if(Ne)for(let Ye=0;Ye<w.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ye=0;Ye<w.length;Ye++){de.push(i.COLOR_ATTACHMENT0+Ye),A.depthBuffer&&de.push(Fe);let tt=Ue.__ignoreDepthValues!==void 0?Ue.__ignoreDepthValues:!1;if(tt===!1&&(A.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),Ne&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ye]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Fe])),Ne){let pe=n.get(w[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,q,xe,0,0,q,xe,fe,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ne)for(let Ye=0;Ye<w.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ye]);let tt=n.get(w[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}}function Me(A){return Math.min(s.maxSamples,A.samples)}function ie(A){let w=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ze(A){let w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Se(A,w){let q=A.colorSpace,xe=A.format,fe=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Oa||q!==An&&q!==en&&(_t.getTransfer(q)===vt?a===!1?e.has("EXT_sRGB")===!0&&xe===cn?(A.format=Oa,A.minFilter=Qt,A.generateMipmaps=!1):w=fr.sRGBToLinear(w):(xe!==cn||fe!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),w}this.allocateTextureUnit=k,this.resetTextureUnits=ue,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=le,this.setTextureCube=ne,this.rebindTextures=Qe,this.setupRenderTarget=F,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ie}function Jm(i,e,t){let n=t.isWebGL2;function s(r,o=en){let a,l=_t.getTransfer(o);if(r===Vn)return i.UNSIGNED_BYTE;if(r===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ec)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Rh)return i.BYTE;if(r===Ch)return i.SHORT;if(r===wo)return i.UNSIGNED_SHORT;if(r===Mc)return i.INT;if(r===Bn)return i.UNSIGNED_INT;if(r===zn)return i.FLOAT;if(r===as)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ph)return i.ALPHA;if(r===cn)return i.RGBA;if(r===Lh)return i.LUMINANCE;if(r===Ih)return i.LUMINANCE_ALPHA;if(r===ei)return i.DEPTH_COMPONENT;if(r===Fi)return i.DEPTH_STENCIL;if(r===Oa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Dh)return i.RED;if(r===bc)return i.RED_INTEGER;if(r===Uh)return i.RG;if(r===wc)return i.RG_INTEGER;if(r===Tc)return i.RGBA_INTEGER;if(r===Kr||r===$r||r===jr||r===Qr)if(l===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===jr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$r)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===jr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Wo||r===Xo||r===qo||r===Yo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Wo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Xo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Yo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ac)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Zo||r===Jo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Zo)return l===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Jo)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ko||r===$o||r===jo||r===Qo||r===el||r===tl||r===nl||r===il||r===sl||r===rl||r===al||r===ol||r===ll||r===cl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ko)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$o)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jo)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qo)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===el)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===il)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===al)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ol)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ll)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cl)return l===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ea||r===hl||r===ul)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ea)return l===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ul)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nh||r===dl||r===fl||r===pl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ea)return a.COMPRESSED_RED_RGTC1_EXT;if(r===dl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Ka=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Km={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let b of e.hand.values()){let m=t.getJointPose(b,n),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=h.position.distanceTo(d.position),g=.02,M=.005;c.inputState.pinching&&p>g+M?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=g-M&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Km)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},$a=class extends mn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,p=null,g=null,M=null,b=t.getContextAttributes(),m=null,f=null,C=[],E=[],P=new we,V=null,D=new Ht;D.layers.enable(1),D.viewport=new St;let I=new Ht;I.layers.enable(2),I.viewport=new St;let ee=[D,I],R=new Ka;R.layers.enable(1),R.layers.enable(2);let T=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let _e=C[Q];return _e===void 0&&(_e=new es,C[Q]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Q){let _e=C[Q];return _e===void 0&&(_e=new es,C[Q]=_e),_e.getGripSpace()},this.getHand=function(Q){let _e=C[Q];return _e===void 0&&(_e=new es,C[Q]=_e),_e.getHandSpace()};function re(Q){let _e=E.indexOf(Q.inputSource);if(_e===-1)return;let z=C[_e];z!==void 0&&(z.update(Q.inputSource,Q.frame,c||o),z.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ue(){s.removeEventListener("select",re),s.removeEventListener("selectstart",re),s.removeEventListener("selectend",re),s.removeEventListener("squeeze",re),s.removeEventListener("squeezestart",re),s.removeEventListener("squeezeend",re),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",k);for(let Q=0;Q<C.length;Q++){let _e=E[Q];_e!==null&&(E[Q]=null,C[Q].disconnect(_e))}T=null,Z=null,e.setRenderTarget(m),g=null,p=null,d=null,s=null,f=null,Te.stop(),n.isPresenting=!1,e.setPixelRatio(V),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return d},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",re),s.addEventListener("selectstart",re),s.addEventListener("selectend",re),s.addEventListener("squeeze",re),s.addEventListener("squeezestart",re),s.addEventListener("squeezeend",re),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let _e={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),f=new Rn(g.framebufferWidth,g.framebufferHeight,{format:cn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let _e=null,z=null,Pe=null;b.depth&&(Pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Fi:ei,z=b.stencil?Qn:Bn);let De={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(De),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new Rn(p.textureWidth,p.textureHeight,{format:cn,type:Vn,depthTexture:new Sr(p.textureWidth,p.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let We=e.properties.get(f);We.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Te.setContext(s),Te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(Q){for(let _e=0;_e<Q.removed.length;_e++){let z=Q.removed[_e],Pe=E.indexOf(z);Pe>=0&&(E[Pe]=null,C[Pe].disconnect(z))}for(let _e=0;_e<Q.added.length;_e++){let z=Q.added[_e],Pe=E.indexOf(z);if(Pe===-1){for(let We=0;We<C.length;We++)if(We>=E.length){E.push(z),Pe=We;break}else if(E[We]===null){E[We]=z,Pe=We;break}if(Pe===-1)break}let De=C[Pe];De&&De.connect(z)}}let Y=new O,j=new O;function te(Q,_e,z){Y.setFromMatrixPosition(_e.matrixWorld),j.setFromMatrixPosition(z.matrixWorld);let Pe=Y.distanceTo(j),De=_e.projectionMatrix.elements,We=z.projectionMatrix.elements,qe=De[14]/(De[10]-1),Be=De[14]/(De[10]+1),Qe=(De[9]+1)/De[5],F=(De[9]-1)/De[5],Ce=(De[8]-1)/De[0],se=(We[8]+1)/We[0],Me=qe*Ce,ie=qe*se,ze=Pe/(-Ce+se),Se=ze*-Ce;_e.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Se),Q.translateZ(ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();let A=qe+ze,w=Be+ze,q=Me-Se,xe=ie+(Pe-Se),fe=Qe*Be/w*A,de=F*Be/w*A;Q.projectionMatrix.makePerspective(q,xe,fe,de,A,w),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function le(Q,_e){_e===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(_e.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;R.near=I.near=D.near=Q.near,R.far=I.far=D.far=Q.far,(T!==R.near||Z!==R.far)&&(s.updateRenderState({depthNear:R.near,depthFar:R.far}),T=R.near,Z=R.far);let _e=Q.parent,z=R.cameras;le(R,_e);for(let Pe=0;Pe<z.length;Pe++)le(z[Pe],_e);z.length===2?te(R,D,I):R.projectionMatrix.copy(D.projectionMatrix),ne(Q,R,_e)};function ne(Q,_e,z){z===null?Q.matrix.copy(_e.matrixWorld):(Q.matrix.copy(z.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(_e.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(_e.projectionMatrix),Q.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=os*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(Q){l=Q,p!==null&&(p.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)};let ce=null;function ge(Q,_e){if(h=_e.getViewerPose(c||o),M=_e,h!==null){let z=h.views;g!==null&&(e.setRenderTargetFramebuffer(f,g.framebuffer),e.setRenderTarget(f));let Pe=!1;z.length!==R.cameras.length&&(R.cameras.length=0,Pe=!0);for(let De=0;De<z.length;De++){let We=z[De],qe=null;if(g!==null)qe=g.getViewport(We);else{let Qe=d.getViewSubImage(p,We);qe=Qe.viewport,De===0&&(e.setRenderTargetTextures(f,Qe.colorTexture,p.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(f))}let Be=ee[De];Be===void 0&&(Be=new Ht,Be.layers.enable(De),Be.viewport=new St,ee[De]=Be),Be.matrix.fromArray(We.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(We.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(qe.x,qe.y,qe.width,qe.height),De===0&&(R.matrix.copy(Be.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Pe===!0&&R.cameras.push(Be)}}for(let z=0;z<C.length;z++){let Pe=E[z],De=C[z];Pe!==null&&De!==void 0&&De.update(Pe,_e,c||o)}ce&&ce(Q,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),M=null}let Te=new Nc;Te.setAnimationLoop(ge),this.setAnimationLoop=function(Q){ce=Q},this.dispose=function(){}}};function $m(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Uc(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,C,E,P){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),p(m,f),f.isMeshPhysicalMaterial&&g(m,f,P)):f.isMeshMatcapMaterial?(r(m,f),M(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),b(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,C,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===kt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===kt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let C=e.get(f).envMap;if(C&&(m.envMap.value=C,m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;let E=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*E,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,C,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*C,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,C){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===kt&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function M(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let C=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jm(i,e,t,n){let s={},r={},o=[],a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(C,E){let P=E.program;n.uniformBlockBinding(C,P)}function c(C,E){let P=s[C.id];P===void 0&&(M(C),P=h(C),s[C.id]=P,C.addEventListener("dispose",m));let V=E.program;n.updateUBOMapping(C,V);let D=e.render.frame;r[C.id]!==D&&(p(C),r[C.id]=D)}function h(C){let E=d();C.__bindingPointIndex=E;let P=i.createBuffer(),V=C.__size,D=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,V,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,P),P}function d(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(C){let E=s[C.id],P=C.uniforms,V=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let D=0,I=P.length;D<I;D++){let ee=Array.isArray(P[D])?P[D]:[P[D]];for(let R=0,T=ee.length;R<T;R++){let Z=ee[R];if(g(Z,D,R,V)===!0){let re=Z.__offset,ue=Array.isArray(Z.value)?Z.value:[Z.value],k=0;for(let Y=0;Y<ue.length;Y++){let j=ue[Y],te=b(j);typeof j=="number"||typeof j=="boolean"?(Z.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,re+k,Z.__data)):j.isMatrix3?(Z.__data[0]=j.elements[0],Z.__data[1]=j.elements[1],Z.__data[2]=j.elements[2],Z.__data[3]=0,Z.__data[4]=j.elements[3],Z.__data[5]=j.elements[4],Z.__data[6]=j.elements[5],Z.__data[7]=0,Z.__data[8]=j.elements[6],Z.__data[9]=j.elements[7],Z.__data[10]=j.elements[8],Z.__data[11]=0):(j.toArray(Z.__data,k),k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,re,Z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(C,E,P,V){let D=C.value,I=E+"_"+P;if(V[I]===void 0)return typeof D=="number"||typeof D=="boolean"?V[I]=D:V[I]=D.clone(),!0;{let ee=V[I];if(typeof D=="number"||typeof D=="boolean"){if(ee!==D)return V[I]=D,!0}else if(ee.equals(D)===!1)return ee.copy(D),!0}return!1}function M(C){let E=C.uniforms,P=0,V=16;for(let I=0,ee=E.length;I<ee;I++){let R=Array.isArray(E[I])?E[I]:[E[I]];for(let T=0,Z=R.length;T<Z;T++){let re=R[T],ue=Array.isArray(re.value)?re.value:[re.value];for(let k=0,Y=ue.length;k<Y;k++){let j=ue[k],te=b(j),le=P%V;le!==0&&V-le<te.boundary&&(P+=V-le),re.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=P,P+=te.storage}}}let D=P%V;return D>0&&(P+=V-D),C.__size=P,C.__cache={},this}function b(C){let E={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(E.boundary=4,E.storage=4):C.isVector2?(E.boundary=8,E.storage=8):C.isVector3||C.isColor?(E.boundary=16,E.storage=12):C.isVector4?(E.boundary=16,E.storage=16):C.isMatrix3?(E.boundary=48,E.storage=48):C.isMatrix4?(E.boundary=64,E.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),E}function m(C){let E=C.target;E.removeEventListener("dispose",m);let P=o.indexOf(E.__bindingPointIndex);o.splice(P,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function f(){for(let C in s)i.deleteBuffer(s[C]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}var hs=class{constructor(e={}){let{canvas:t=au(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=o;let g=new Uint32Array(4),M=new Int32Array(4),b=null,m=null,f=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=kn,this.toneMappingExposure=1;let E=this,P=!1,V=0,D=0,I=null,ee=-1,R=null,T=new St,Z=new St,re=null,ue=new st(0),k=0,Y=t.width,j=t.height,te=1,le=null,ne=null,ce=new St(0,0,Y,j),ge=new St(0,0,Y,j),Te=!1,Q=new cs,_e=!1,z=!1,Pe=null,De=new At,We=new we,qe=new O,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Qe(){return I===null?te:1}let F=n;function Ce(u,y){for(let x=0;x<u.length;x++){let S=u[x],_=t.getContext(S,y);if(_!==null)return _}return null}try{let u={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",H,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),F===null){let y=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&y.shift(),F=Ce(y,u),F===null)throw Ce(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&F instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(u){throw console.error("THREE.WebGLRenderer: "+u.message),u}let se,Me,ie,ze,Se,A,w,q,xe,fe,de,Fe,Ue,Ne,Ye,tt,pe,rt,L,me,Le,be,ke,nt;function ht(){se=new _p(F),Me=new up(F,se,e),se.init(Me),be=new Jm(F,se,Me),ie=new Ym(F,se,Me),ze=new vp(F),Se=new Nm,A=new Zm(F,se,ie,Se,Me,be,ze),w=new fp(E),q=new gp(E),xe=new Au(F,Me),ke=new cp(F,se,xe,Me),fe=new xp(F,xe,ze,ke),de=new bp(F,fe,xe,ze),L=new Ep(F,Me,A),tt=new dp(Se),Fe=new Um(E,w,q,se,Me,ke,tt),Ue=new $m(E,Se),Ne=new Fm,Ye=new Gm(se,Me),rt=new lp(E,w,q,ie,de,p,l),pe=new qm(E,de,Me),nt=new jm(F,ze,Me,ie),me=new hp(F,se,ze,Me),Le=new yp(F,se,ze,Me),ze.programs=Fe.programs,E.capabilities=Me,E.extensions=se,E.properties=Se,E.renderLists=Ne,E.shadowMap=pe,E.state=ie,E.info=ze}ht();let it=new $a(E,F);this.xr=it,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let u=se.get("WEBGL_lose_context");u&&u.loseContext()},this.forceContextRestore=function(){let u=se.get("WEBGL_lose_context");u&&u.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(u){u!==void 0&&(te=u,this.setSize(Y,j,!1))},this.getSize=function(u){return u.set(Y,j)},this.setSize=function(u,y,x=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=u,j=y,t.width=Math.floor(u*te),t.height=Math.floor(y*te),x===!0&&(t.style.width=u+"px",t.style.height=y+"px"),this.setViewport(0,0,u,y)},this.getDrawingBufferSize=function(u){return u.set(Y*te,j*te).floor()},this.setDrawingBufferSize=function(u,y,x){Y=u,j=y,te=x,t.width=Math.floor(u*x),t.height=Math.floor(y*x),this.setViewport(0,0,u,y)},this.getCurrentViewport=function(u){return u.copy(T)},this.getViewport=function(u){return u.copy(ce)},this.setViewport=function(u,y,x,S){u.isVector4?ce.set(u.x,u.y,u.z,u.w):ce.set(u,y,x,S),ie.viewport(T.copy(ce).multiplyScalar(te).floor())},this.getScissor=function(u){return u.copy(ge)},this.setScissor=function(u,y,x,S){u.isVector4?ge.set(u.x,u.y,u.z,u.w):ge.set(u,y,x,S),ie.scissor(Z.copy(ge).multiplyScalar(te).floor())},this.getScissorTest=function(){return Te},this.setScissorTest=function(u){ie.setScissorTest(Te=u)},this.setOpaqueSort=function(u){le=u},this.setTransparentSort=function(u){ne=u},this.getClearColor=function(u){return u.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(u=!0,y=!0,x=!0){let S=0;if(u){let _=!1;if(I!==null){let N=I.texture.format;_=N===Tc||N===wc||N===bc}if(_){let N=I.texture.type,B=N===Vn||N===Bn||N===wo||N===Qn||N===Sc||N===Ec,U=rt.getClearColor(),G=rt.getClearAlpha(),K=U.r,X=U.g,$=U.b;B?(g[0]=K,g[1]=X,g[2]=$,g[3]=G,F.clearBufferuiv(F.COLOR,0,g)):(M[0]=K,M[1]=X,M[2]=$,M[3]=G,F.clearBufferiv(F.COLOR,0,M))}else S|=F.COLOR_BUFFER_BIT}y&&(S|=F.DEPTH_BUFFER_BIT),x&&(S|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(S)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",H,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ne.dispose(),Ye.dispose(),Se.dispose(),w.dispose(),q.dispose(),de.dispose(),ke.dispose(),nt.dispose(),Fe.dispose(),it.dispose(),it.removeEventListener("sessionstart",Nt),it.removeEventListener("sessionend",gt),Pe&&(Pe.dispose(),Pe=null),Lt.stop()};function Ee(u){u.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let u=ze.autoReset,y=pe.enabled,x=pe.autoUpdate,S=pe.needsUpdate,_=pe.type;ht(),ze.autoReset=u,pe.enabled=y,pe.autoUpdate=x,pe.needsUpdate=S,pe.type=_}function Ae(u){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",u.statusMessage)}function Re(u){let y=u.target;y.removeEventListener("dispose",Re),Xe(y)}function Xe(u){Ge(u),Se.remove(u)}function Ge(u){let y=Se.get(u).programs;y!==void 0&&(y.forEach(function(x){Fe.releaseProgram(x)}),u.isShaderMaterial&&Fe.releaseShaderCache(u))}this.renderBufferDirect=function(u,y,x,S,_,N){y===null&&(y=Be);let B=_.isMesh&&_.matrixWorld.determinant()<0,U=ws(u,y,x,S,_);ie.setMaterial(S,B);let G=x.index,K=1;if(S.wireframe===!0){if(G=fe.getWireframeAttribute(x),G===void 0)return;K=2}let X=x.drawRange,$=x.attributes.position,ae=X.start*K,W=(X.start+X.count)*K;N!==null&&(ae=Math.max(ae,N.start*K),W=Math.min(W,(N.start+N.count)*K)),G!==null?(ae=Math.max(ae,0),W=Math.min(W,G.count)):$!=null&&(ae=Math.max(ae,0),W=Math.min(W,$.count));let J=W-ae;if(J<0||J===1/0)return;ke.setup(_,S,U,x,G);let oe,he=me;if(G!==null&&(oe=xe.get(G),he=Le,he.setIndex(oe)),_.isMesh)S.wireframe===!0?(ie.setLineWidth(S.wireframeLinewidth*Qe()),he.setMode(F.LINES)):he.setMode(F.TRIANGLES);else if(_.isLine){let ye=S.linewidth;ye===void 0&&(ye=1),ie.setLineWidth(ye*Qe()),_.isLineSegments?he.setMode(F.LINES):_.isLineLoop?he.setMode(F.LINE_LOOP):he.setMode(F.LINE_STRIP)}else _.isPoints?he.setMode(F.POINTS):_.isSprite&&he.setMode(F.TRIANGLES);if(_.isBatchedMesh)he.renderMultiDraw(_._multiDrawStarts,_._multiDrawCounts,_._multiDrawCount);else if(_.isInstancedMesh)he.renderInstances(ae,J,_.count);else if(x.isInstancedBufferGeometry){let ye=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,Ve=Math.min(x.instanceCount,ye);he.renderInstances(ae,J,Ve)}else he.render(ae,J)};function ut(u,y,x){u.transparent===!0&&u.side===wn&&u.forceSinglePass===!1?(u.side=kt,u.needsUpdate=!0,Wn(u,y,x),u.side=Gn,u.needsUpdate=!0,Wn(u,y,x),u.side=wn):Wn(u,y,x)}this.compile=function(u,y,x=null){x===null&&(x=u),m=Ye.get(x),m.init(),C.push(m),x.traverseVisible(function(_){_.isLight&&_.layers.test(y.layers)&&(m.pushLight(_),_.castShadow&&m.pushShadow(_))}),u!==x&&u.traverseVisible(function(_){_.isLight&&_.layers.test(y.layers)&&(m.pushLight(_),_.castShadow&&m.pushShadow(_))}),m.setupLights(E._useLegacyLights);let S=new Set;return u.traverse(function(_){let N=_.material;if(N)if(Array.isArray(N))for(let B=0;B<N.length;B++){let U=N[B];ut(U,x,_),S.add(U)}else ut(N,x,_),S.add(N)}),C.pop(),m=null,S},this.compileAsync=function(u,y,x=null){let S=this.compile(u,y,x);return new Promise(_=>{function N(){if(S.forEach(function(B){Se.get(B).currentProgram.isReady()&&S.delete(B)}),S.size===0){_(u);return}setTimeout(N,10)}se.get("KHR_parallel_shader_compile")!==null?N():setTimeout(N,10)})};let ft=null;function bt(u){ft&&ft(u)}function Nt(){Lt.stop()}function gt(){Lt.start()}let Lt=new Nc;Lt.setAnimationLoop(bt),typeof self<"u"&&Lt.setContext(self),this.setAnimationLoop=function(u){ft=u,it.setAnimationLoop(u),u===null?Lt.stop():Lt.start()},it.addEventListener("sessionstart",Nt),it.addEventListener("sessionend",gt),this.render=function(u,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;u.matrixWorldAutoUpdate===!0&&u.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(y),y=it.getCamera()),u.isScene===!0&&u.onBeforeRender(E,u,y,I),m=Ye.get(u,C.length),m.init(),C.push(m),De.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),Q.setFromProjectionMatrix(De),z=this.localClippingEnabled,_e=tt.init(this.clippingPlanes,z),b=Ne.get(u,f.length),b.init(),f.push(b),Yt(u,y,0,E.sortObjects),b.finish(),E.sortObjects===!0&&b.sort(le,ne),this.info.render.frame++,_e===!0&&tt.beginShadows();let x=m.state.shadowsArray;if(pe.render(x,u,y),_e===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),rt.render(b,u),m.setupLights(E._useLegacyLights),y.isArrayCamera){let S=y.cameras;for(let _=0,N=S.length;_<N;_++){let B=S[_];Ss(b,u,B,B.viewport)}}else Ss(b,u,y);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),u.isScene===!0&&u.onAfterRender(E,u,y),ke.resetDefaultState(),ee=-1,R=null,C.pop(),C.length>0?m=C[C.length-1]:m=null,f.pop(),f.length>0?b=f[f.length-1]:b=null};function Yt(u,y,x,S){if(u.visible===!1)return;if(u.layers.test(y.layers)){if(u.isGroup)x=u.renderOrder;else if(u.isLOD)u.autoUpdate===!0&&u.update(y);else if(u.isLight)m.pushLight(u),u.castShadow&&m.pushShadow(u);else if(u.isSprite){if(!u.frustumCulled||Q.intersectsSprite(u)){S&&qe.setFromMatrixPosition(u.matrixWorld).applyMatrix4(De);let B=de.update(u),U=u.material;U.visible&&b.push(u,B,U,x,qe.z,null)}}else if((u.isMesh||u.isLine||u.isPoints)&&(!u.frustumCulled||Q.intersectsObject(u))){let B=de.update(u),U=u.material;if(S&&(u.boundingSphere!==void 0?(u.boundingSphere===null&&u.computeBoundingSphere(),qe.copy(u.boundingSphere.center)):(B.boundingSphere===null&&B.computeBoundingSphere(),qe.copy(B.boundingSphere.center)),qe.applyMatrix4(u.matrixWorld).applyMatrix4(De)),Array.isArray(U)){let G=B.groups;for(let K=0,X=G.length;K<X;K++){let $=G[K],ae=U[$.materialIndex];ae&&ae.visible&&b.push(u,B,ae,x,qe.z,$)}}else U.visible&&b.push(u,B,U,x,qe.z,null)}}let N=u.children;for(let B=0,U=N.length;B<U;B++)Yt(N[B],y,x,S)}function Ss(u,y,x,S){let _=u.opaque,N=u.transmissive,B=u.transparent;m.setupLightsView(x),_e===!0&&tt.setGlobalState(E.clippingPlanes,x),N.length>0&&hi(_,N,y,x),S&&ie.viewport(T.copy(S)),_.length>0&&xn(_,y,x),N.length>0&&xn(N,y,x),B.length>0&&xn(B,y,x),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function hi(u,y,x,S){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;let N=Me.isWebGL2;Pe===null&&(Pe=new Rn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?as:Vn,minFilter:rs,samples:N?4:0})),E.getDrawingBufferSize(We),N?Pe.setSize(We.x,We.y):Pe.setSize(ur(We.x),ur(We.y));let B=E.getRenderTarget();E.setRenderTarget(Pe),E.getClearColor(ue),k=E.getClearAlpha(),k<1&&E.setClearColor(16777215,.5),E.clear();let U=E.toneMapping;E.toneMapping=kn,xn(u,x,S),A.updateMultisampleRenderTarget(Pe),A.updateRenderTargetMipmap(Pe);let G=!1;for(let K=0,X=y.length;K<X;K++){let $=y[K],ae=$.object,W=$.geometry,J=$.material,oe=$.group;if(J.side===wn&&ae.layers.test(S.layers)){let he=J.side;J.side=kt,J.needsUpdate=!0,Es(ae,x,S,W,J,oe),J.side=he,J.needsUpdate=!0,G=!0}}G===!0&&(A.updateMultisampleRenderTarget(Pe),A.updateRenderTargetMipmap(Pe)),E.setRenderTarget(B),E.setClearColor(ue,k),E.toneMapping=U}function xn(u,y,x){let S=y.isScene===!0?y.overrideMaterial:null;for(let _=0,N=u.length;_<N;_++){let B=u[_],U=B.object,G=B.geometry,K=S===null?B.material:S,X=B.group;U.layers.test(x.layers)&&Es(U,y,x,G,K,X)}}function Es(u,y,x,S,_,N){u.onBeforeRender(E,y,x,S,_,N),u.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,u.matrixWorld),u.normalMatrix.getNormalMatrix(u.modelViewMatrix),_.onBeforeRender(E,y,x,S,u,N),_.transparent===!0&&_.side===wn&&_.forceSinglePass===!1?(_.side=kt,_.needsUpdate=!0,E.renderBufferDirect(x,y,S,_,u,N),_.side=Gn,_.needsUpdate=!0,E.renderBufferDirect(x,y,S,_,u,N),_.side=wn):E.renderBufferDirect(x,y,S,_,u,N),u.onAfterRender(E,y,x,S,_,N)}function Wn(u,y,x){y.isScene!==!0&&(y=Be);let S=Se.get(u),_=m.state.lights,N=m.state.shadowsArray,B=_.state.version,U=Fe.getParameters(u,_.state,N,y,x),G=Fe.getProgramCacheKey(U),K=S.programs;S.environment=u.isMeshStandardMaterial?y.environment:null,S.fog=y.fog,S.envMap=(u.isMeshStandardMaterial?q:w).get(u.envMap||S.environment),K===void 0&&(u.addEventListener("dispose",Re),K=new Map,S.programs=K);let X=K.get(G);if(X!==void 0){if(S.currentProgram===X&&S.lightsStateVersion===B)return bs(u,U),X}else U.uniforms=Fe.getUniforms(u),u.onBuild(x,U,E),u.onBeforeCompile(U,E),X=Fe.acquireProgram(U,G),K.set(G,X),S.uniforms=U.uniforms;let $=S.uniforms;return(!u.isShaderMaterial&&!u.isRawShaderMaterial||u.clipping===!0)&&($.clippingPlanes=tt.uniform),bs(u,U),S.needsLights=v(u),S.lightsStateVersion=B,S.needsLights&&($.ambientLightColor.value=_.state.ambient,$.lightProbe.value=_.state.probe,$.directionalLights.value=_.state.directional,$.directionalLightShadows.value=_.state.directionalShadow,$.spotLights.value=_.state.spot,$.spotLightShadows.value=_.state.spotShadow,$.rectAreaLights.value=_.state.rectArea,$.ltc_1.value=_.state.rectAreaLTC1,$.ltc_2.value=_.state.rectAreaLTC2,$.pointLights.value=_.state.point,$.pointLightShadows.value=_.state.pointShadow,$.hemisphereLights.value=_.state.hemi,$.directionalShadowMap.value=_.state.directionalShadowMap,$.directionalShadowMatrix.value=_.state.directionalShadowMatrix,$.spotShadowMap.value=_.state.spotShadowMap,$.spotLightMatrix.value=_.state.spotLightMatrix,$.spotLightMap.value=_.state.spotLightMap,$.pointShadowMap.value=_.state.pointShadowMap,$.pointShadowMatrix.value=_.state.pointShadowMatrix),S.currentProgram=X,S.uniformsList=null,X}function wt(u){if(u.uniformsList===null){let y=u.currentProgram.getUniforms();u.uniformsList=Ui.seqWithValue(y.seq,u.uniforms)}return u.uniformsList}function bs(u,y){let x=Se.get(u);x.outputColorSpace=y.outputColorSpace,x.batching=y.batching,x.instancing=y.instancing,x.instancingColor=y.instancingColor,x.skinning=y.skinning,x.morphTargets=y.morphTargets,x.morphNormals=y.morphNormals,x.morphColors=y.morphColors,x.morphTargetsCount=y.morphTargetsCount,x.numClippingPlanes=y.numClippingPlanes,x.numIntersection=y.numClipIntersection,x.vertexAlphas=y.vertexAlphas,x.vertexTangents=y.vertexTangents,x.toneMapping=y.toneMapping}function ws(u,y,x,S,_){y.isScene!==!0&&(y=Be),A.resetTextureUnits();let N=y.fog,B=S.isMeshStandardMaterial?y.environment:null,U=I===null?E.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:An,G=(S.isMeshStandardMaterial?q:w).get(S.envMap||B),K=S.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,X=!!x.attributes.tangent&&(!!S.normalMap||S.anisotropy>0),$=!!x.morphAttributes.position,ae=!!x.morphAttributes.normal,W=!!x.morphAttributes.color,J=kn;S.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(J=E.toneMapping);let oe=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,he=oe!==void 0?oe.length:0,ye=Se.get(S),Ve=m.state.lights;if(_e===!0&&(z===!0||u!==R)){let dt=u===R&&S.id===ee;tt.setState(S,u,dt)}let ve=!1;S.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ve.state.version||ye.outputColorSpace!==U||_.isBatchedMesh&&ye.batching===!1||!_.isBatchedMesh&&ye.batching===!0||_.isInstancedMesh&&ye.instancing===!1||!_.isInstancedMesh&&ye.instancing===!0||_.isSkinnedMesh&&ye.skinning===!1||!_.isSkinnedMesh&&ye.skinning===!0||_.isInstancedMesh&&ye.instancingColor===!0&&_.instanceColor===null||_.isInstancedMesh&&ye.instancingColor===!1&&_.instanceColor!==null||ye.envMap!==G||S.fog===!0&&ye.fog!==N||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==tt.numPlanes||ye.numIntersection!==tt.numIntersection)||ye.vertexAlphas!==K||ye.vertexTangents!==X||ye.morphTargets!==$||ye.morphNormals!==ae||ye.morphColors!==W||ye.toneMapping!==J||Me.isWebGL2===!0&&ye.morphTargetsCount!==he)&&(ve=!0):(ve=!0,ye.__version=S.version);let Ze=ye.currentProgram;ve===!0&&(Ze=Wn(S,y,_));let Je=!1,at=!1,$e=!1,Oe=Ze.getUniforms(),et=ye.uniforms;if(ie.useProgram(Ze.program)&&(Je=!0,at=!0,$e=!0),S.id!==ee&&(ee=S.id,at=!0),Je||R!==u){Oe.setValue(F,"projectionMatrix",u.projectionMatrix),Oe.setValue(F,"viewMatrix",u.matrixWorldInverse);let dt=Oe.map.cameraPosition;dt!==void 0&&dt.setValue(F,qe.setFromMatrixPosition(u.matrixWorld)),Me.logarithmicDepthBuffer&&Oe.setValue(F,"logDepthBufFC",2/(Math.log(u.far+1)/Math.LN2)),(S.isMeshPhongMaterial||S.isMeshToonMaterial||S.isMeshLambertMaterial||S.isMeshBasicMaterial||S.isMeshStandardMaterial||S.isShaderMaterial)&&Oe.setValue(F,"isOrthographic",u.isOrthographicCamera===!0),R!==u&&(R=u,at=!0,$e=!0)}if(_.isSkinnedMesh){Oe.setOptional(F,_,"bindMatrix"),Oe.setOptional(F,_,"bindMatrixInverse");let dt=_.skeleton;dt&&(Me.floatVertexTextures?(dt.boneTexture===null&&dt.computeBoneTexture(),Oe.setValue(F,"boneTexture",dt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}_.isBatchedMesh&&(Oe.setOptional(F,_,"batchingTexture"),Oe.setValue(F,"batchingTexture",_._matricesTexture,A));let pt=x.morphAttributes;if((pt.position!==void 0||pt.normal!==void 0||pt.color!==void 0&&Me.isWebGL2===!0)&&L.update(_,x,Ze),(at||ye.receiveShadow!==_.receiveShadow)&&(ye.receiveShadow=_.receiveShadow,Oe.setValue(F,"receiveShadow",_.receiveShadow)),S.isMeshGouraudMaterial&&S.envMap!==null&&(et.envMap.value=G,et.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1),at&&(Oe.setValue(F,"toneMappingExposure",E.toneMappingExposure),ye.needsLights&&Ts(et,$e),N&&S.fog===!0&&Ue.refreshFogUniforms(et,N),Ue.refreshMaterialUniforms(et,S,te,j,Pe),Ui.upload(F,wt(ye),et,A)),S.isShaderMaterial&&S.uniformsNeedUpdate===!0&&(Ui.upload(F,wt(ye),et,A),S.uniformsNeedUpdate=!1),S.isSpriteMaterial&&Oe.setValue(F,"center",_.center),Oe.setValue(F,"modelViewMatrix",_.modelViewMatrix),Oe.setValue(F,"normalMatrix",_.normalMatrix),Oe.setValue(F,"modelMatrix",_.matrixWorld),S.isShaderMaterial||S.isRawShaderMaterial){let dt=S.uniformsGroups;for(let Rt=0,As=dt.length;Rt<As;Rt++)if(Me.isWebGL2){let qi=dt[Rt];nt.update(qi,Ze),nt.bind(qi,Ze)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ze}function Ts(u,y){u.ambientLightColor.needsUpdate=y,u.lightProbe.needsUpdate=y,u.directionalLights.needsUpdate=y,u.directionalLightShadows.needsUpdate=y,u.pointLights.needsUpdate=y,u.pointLightShadows.needsUpdate=y,u.spotLights.needsUpdate=y,u.spotLightShadows.needsUpdate=y,u.rectAreaLights.needsUpdate=y,u.hemisphereLights.needsUpdate=y}function v(u){return u.isMeshLambertMaterial||u.isMeshToonMaterial||u.isMeshPhongMaterial||u.isMeshStandardMaterial||u.isShadowMaterial||u.isShaderMaterial&&u.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(u,y,x){Se.get(u.texture).__webglTexture=y,Se.get(u.depthTexture).__webglTexture=x;let S=Se.get(u);S.__hasExternalTextures=!0,S.__hasExternalTextures&&(S.__autoAllocateDepthBuffer=x===void 0,S.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),S.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(u,y){let x=Se.get(u);x.__webglFramebuffer=y,x.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(u,y=0,x=0){I=u,V=y,D=x;let S=!0,_=null,N=!1,B=!1;if(u){let G=Se.get(u);G.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(F.FRAMEBUFFER,null),S=!1):G.__webglFramebuffer===void 0?A.setupRenderTarget(u):G.__hasExternalTextures&&A.rebindTextures(u,Se.get(u.texture).__webglTexture,Se.get(u.depthTexture).__webglTexture);let K=u.texture;(K.isData3DTexture||K.isDataArrayTexture||K.isCompressedArrayTexture)&&(B=!0);let X=Se.get(u).__webglFramebuffer;u.isWebGLCubeRenderTarget?(Array.isArray(X[y])?_=X[y][x]:_=X[y],N=!0):Me.isWebGL2&&u.samples>0&&A.useMultisampledRTT(u)===!1?_=Se.get(u).__webglMultisampledFramebuffer:Array.isArray(X)?_=X[x]:_=X,T.copy(u.viewport),Z.copy(u.scissor),re=u.scissorTest}else T.copy(ce).multiplyScalar(te).floor(),Z.copy(ge).multiplyScalar(te).floor(),re=Te;if(ie.bindFramebuffer(F.FRAMEBUFFER,_)&&Me.drawBuffers&&S&&ie.drawBuffers(u,_),ie.viewport(T),ie.scissor(Z),ie.setScissorTest(re),N){let G=Se.get(u.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+y,G.__webglTexture,x)}else if(B){let G=Se.get(u.texture),K=y||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,G.__webglTexture,x||0,K)}ee=-1},this.readRenderTargetPixels=function(u,y,x,S,_,N,B){if(!(u&&u.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let U=Se.get(u).__webglFramebuffer;if(u.isWebGLCubeRenderTarget&&B!==void 0&&(U=U[B]),U){ie.bindFramebuffer(F.FRAMEBUFFER,U);try{let G=u.texture,K=G.format,X=G.type;if(K!==cn&&be.convert(K)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let $=X===as&&(se.has("EXT_color_buffer_half_float")||Me.isWebGL2&&se.has("EXT_color_buffer_float"));if(X!==Vn&&be.convert(X)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(X===zn&&(Me.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!$){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=u.width-S&&x>=0&&x<=u.height-_&&F.readPixels(y,x,S,_,be.convert(K),be.convert(X),N)}finally{let G=I!==null?Se.get(I).__webglFramebuffer:null;ie.bindFramebuffer(F.FRAMEBUFFER,G)}}},this.copyFramebufferToTexture=function(u,y,x=0){let S=Math.pow(2,-x),_=Math.floor(y.image.width*S),N=Math.floor(y.image.height*S);A.setTexture2D(y,0),F.copyTexSubImage2D(F.TEXTURE_2D,x,0,0,u.x,u.y,_,N),ie.unbindTexture()},this.copyTextureToTexture=function(u,y,x,S=0){let _=y.image.width,N=y.image.height,B=be.convert(x.format),U=be.convert(x.type);A.setTexture2D(x,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,x.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,x.unpackAlignment),y.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,S,u.x,u.y,_,N,B,U,y.image.data):y.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,S,u.x,u.y,y.mipmaps[0].width,y.mipmaps[0].height,B,y.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,S,u.x,u.y,B,U,y.image),S===0&&x.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(u,y,x,S,_=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let N=u.max.x-u.min.x+1,B=u.max.y-u.min.y+1,U=u.max.z-u.min.z+1,G=be.convert(S.format),K=be.convert(S.type),X;if(S.isData3DTexture)A.setTexture3D(S,0),X=F.TEXTURE_3D;else if(S.isDataArrayTexture||S.isCompressedArrayTexture)A.setTexture2DArray(S,0),X=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,S.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,S.unpackAlignment);let $=F.getParameter(F.UNPACK_ROW_LENGTH),ae=F.getParameter(F.UNPACK_IMAGE_HEIGHT),W=F.getParameter(F.UNPACK_SKIP_PIXELS),J=F.getParameter(F.UNPACK_SKIP_ROWS),oe=F.getParameter(F.UNPACK_SKIP_IMAGES),he=x.isCompressedTexture?x.mipmaps[_]:x.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,he.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,he.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,u.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,u.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,u.min.z),x.isDataTexture||x.isData3DTexture?F.texSubImage3D(X,_,y.x,y.y,y.z,N,B,U,G,K,he.data):x.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(X,_,y.x,y.y,y.z,N,B,U,G,he.data)):F.texSubImage3D(X,_,y.x,y.y,y.z,N,B,U,G,K,he),F.pixelStorei(F.UNPACK_ROW_LENGTH,$),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ae),F.pixelStorei(F.UNPACK_SKIP_PIXELS,W),F.pixelStorei(F.UNPACK_SKIP_ROWS,J),F.pixelStorei(F.UNPACK_SKIP_IMAGES,oe),_===0&&S.generateMipmaps&&F.generateMipmap(X),ie.unbindTexture()},this.initTexture=function(u){u.isCubeTexture?A.setTextureCube(u,0):u.isData3DTexture?A.setTexture3D(u,0):u.isDataArrayTexture||u.isCompressedArrayTexture?A.setTexture2DArray(u,0):A.setTexture2D(u,0),ie.unbindTexture()},this.resetState=function(){V=0,D=0,I=null,ie.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===To?"display-p3":"srgb",t.unpackColorSpace=_t.workingColorSpace===kr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Tt?ti:Rc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ti?Tt:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},ja=class extends hs{};ja.prototype.isWebGL1Renderer=!0;var ki=class extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var us=class extends Cn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rc=new O,ac=new O,oc=new At,ba=new ii,Ks=new Bi,Qa=class extends Vt{constructor(e=new Zt,t=new us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)rc.fromBufferAttribute(t,s-1),ac.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=rc.distanceTo(ac);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(s),Ks.radius+=r,e.ray.intersectsSphere(Ks)===!1)return;oc.copy(s).invert(),ba.copy(e.ray).applyMatrix4(oc);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,h=new O,d=new O,p=new O,g=this.isLineSegments?2:1,M=n.index,m=n.attributes.position;if(M!==null){let f=Math.max(0,o.start),C=Math.min(M.count,o.start+o.count);for(let E=f,P=C-1;E<P;E+=g){let V=M.getX(E),D=M.getX(E+1);if(c.fromBufferAttribute(m,V),h.fromBufferAttribute(m,D),ba.distanceSqToSegment(c,h,p,d)>l)continue;p.applyMatrix4(this.matrixWorld);let ee=e.ray.origin.distanceTo(p);ee<e.near||ee>e.far||t.push({distance:ee,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),C=Math.min(m.count,o.start+o.count);for(let E=f,P=C-1;E<P;E+=g){if(c.fromBufferAttribute(m,E),h.fromBufferAttribute(m,E+1),ba.distanceSqToSegment(c,h,p,d)>l)continue;p.applyMatrix4(this.matrixWorld);let D=e.ray.origin.distanceTo(p);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},lc=new O,cc=new O,Er=class extends Qa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)lc.fromBufferAttribute(t,s),cc.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lc.distanceTo(cc);e.setAttribute("lineDistance",new xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ds=class extends nn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,g=(o-h)/p;return(s+g)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new we:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new O,s=[],r=[],o=[],a=new O,l=new At;for(let g=0;g<=e;g++){let M=g/e;s[g]=this.getTangentAt(M,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let g=1;g<=e;g++){if(r[g]=r[g-1].clone(),o[g]=o[g-1].clone(),a.crossVectors(s[g-1],s[g]),a.length()>Number.EPSILON){a.normalize();let M=Math.acos(Ft(s[g-1].dot(s[g]),-1,1));r[g].applyMatrix4(l.makeRotationAxis(a,M))}o[g].crossVectors(s[g],r[g])}if(t===!0){let g=Math.acos(Ft(r[0].dot(r[e]),-1,1));g/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(g=-g);for(let M=1;M<=e;M++)r[M].applyMatrix4(l.makeRotationAxis(s[M],g*M)),o[M].crossVectors(s[M],r[M])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fs=class extends sn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){let n=t||new we,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,g=c-this.aY;l=p*h-g*d+this.aX,c=p*d+g*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},eo=class extends fs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Co(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let p=(o-r)/c-(a-r)/(c+h)+(a-o)/h,g=(a-o)/h-(l-o)/(h+d)+(l-a)/d;p*=h,g*=h,s(o,a,p,g)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var $s=new O,wa=new Co,Ta=new Co,Aa=new Co,to=class extends sn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:($s.subVectors(s[0],s[1]).add(s[0]),c=$s);let d=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:($s.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=$s),this.curveType==="centripetal"||this.curveType==="chordal"){let g=this.curveType==="chordal"?.5:.25,M=Math.pow(c.distanceToSquared(d),g),b=Math.pow(d.distanceToSquared(p),g),m=Math.pow(p.distanceToSquared(h),g);b<1e-4&&(b=1),M<1e-4&&(M=b),m<1e-4&&(m=b),wa.initNonuniformCatmullRom(c.x,d.x,p.x,h.x,M,b,m),Ta.initNonuniformCatmullRom(c.y,d.y,p.y,h.y,M,b,m),Aa.initNonuniformCatmullRom(c.z,d.z,p.z,h.z,M,b,m)}else this.curveType==="catmullrom"&&(wa.initCatmullRom(c.x,d.x,p.x,h.x,this.tension),Ta.initCatmullRom(c.y,d.y,p.y,h.y,this.tension),Aa.initCatmullRom(c.z,d.z,p.z,h.z,this.tension));return n.set(wa.calc(l),Ta.calc(l),Aa.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function Qm(i,e){let t=1-i;return t*t*e}function eg(i,e){return 2*(1-i)*i*e}function tg(i,e){return i*i*e}function ts(i,e,t,n){return Qm(i,e)+eg(i,t)+tg(i,n)}function ng(i,e){let t=1-i;return t*t*t*e}function ig(i,e){let t=1-i;return 3*t*t*i*e}function sg(i,e){return 3*(1-i)*i*i*e}function rg(i,e){return i*i*i*e}function ns(i,e,t,n,s){return ng(i,e)+ig(i,t)+sg(i,n)+rg(i,s)}var br=class extends sn{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ns(e,s.x,r.x,o.x,a.x),ns(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},no=class extends sn{constructor(e=new O,t=new O,n=new O,s=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ns(e,s.x,r.x,o.x,a.x),ns(e,s.y,r.y,o.y,a.y),ns(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wr=class extends sn{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},io=class extends sn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tr=class extends sn{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ts(e,s.x,r.x,o.x),ts(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},so=class extends sn{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ts(e,s.x,r.x,o.x),ts(e,s.y,r.y,o.y),ts(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ar=class extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(hc(a,l.x,c.x,h.x,d.x),hc(a,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},ro=Object.freeze({__proto__:null,ArcCurve:eo,CatmullRomCurve3:to,CubicBezierCurve:br,CubicBezierCurve3:no,EllipseCurve:fs,LineCurve:wr,LineCurve3:io,QuadraticBezierCurve:Tr,QuadraticBezierCurve3:so,SplineCurve:Ar}),ao=class extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ro[s.type]().fromJSON(s))}return this}},Rr=class extends ao{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wr(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Tr(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new br(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ar(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new fs(e,t,n,s,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}};var Ut=class i extends Zt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],p=[],g=[],M=0,b=[],m=n/2,f=0;C(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new xt(d,3)),this.setAttribute("normal",new xt(p,3)),this.setAttribute("uv",new xt(g,2));function C(){let P=new O,V=new O,D=0,I=(t-e)/n;for(let ee=0;ee<=r;ee++){let R=[],T=ee/r,Z=T*(t-e)+e;for(let re=0;re<=s;re++){let ue=re/s,k=ue*l+a,Y=Math.sin(k),j=Math.cos(k);V.x=Z*Y,V.y=-T*n+m,V.z=Z*j,d.push(V.x,V.y,V.z),P.set(Y,I,j).normalize(),p.push(P.x,P.y,P.z),g.push(ue,1-T),R.push(M++)}b.push(R)}for(let ee=0;ee<s;ee++)for(let R=0;R<r;R++){let T=b[R][ee],Z=b[R+1][ee],re=b[R+1][ee+1],ue=b[R][ee+1];h.push(T,Z,ue),h.push(Z,re,ue),D+=6}c.addGroup(f,D,0),f+=D}function E(P){let V=M,D=new we,I=new O,ee=0,R=P===!0?e:t,T=P===!0?1:-1;for(let re=1;re<=s;re++)d.push(0,m*T,0),p.push(0,T,0),g.push(.5,.5),M++;let Z=M;for(let re=0;re<=s;re++){let k=re/s*l+a,Y=Math.cos(k),j=Math.sin(k);I.x=R*j,I.y=m*T,I.z=R*Y,d.push(I.x,I.y,I.z),p.push(0,T,0),D.x=Y*.5+.5,D.y=j*.5*T+.5,g.push(D.x,D.y),M++}for(let re=0;re<s;re++){let ue=V+re,k=Z+re;P===!0?h.push(k,k+1,ue):h.push(k+1,k,ue),ee+=3}c.addGroup(f,ee,P===!0?1:2),f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Cr=class i extends Ut{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var js=new O,Qs=new O,Ra=new O,er=new jn,Pr=class extends Zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ii*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),p={},g=[];for(let M=0;M<l;M+=3){o?(c[0]=o.getX(M),c[1]=o.getX(M+1),c[2]=o.getX(M+2)):(c[0]=M,c[1]=M+1,c[2]=M+2);let{a:b,b:m,c:f}=er;if(b.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),er.getNormal(Ra),d[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let C=0;C<3;C++){let E=(C+1)%3,P=d[C],V=d[E],D=er[h[C]],I=er[h[E]],ee=`${P}_${V}`,R=`${V}_${P}`;R in p&&p[R]?(Ra.dot(p[R].normal)<=r&&(g.push(D.x,D.y,D.z),g.push(I.x,I.y,I.z)),p[R]=null):ee in p||(p[ee]={index0:c[C],index1:c[E],normal:Ra.clone()})}}for(let M in p)if(p[M]){let{index0:b,index1:m}=p[M];js.fromBufferAttribute(a,b),Qs.fromBufferAttribute(a,m),g.push(js.x,js.y,js.z),g.push(Qs.x,Qs.y,Qs.z)}this.setAttribute("position",new xt(g,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ps=class extends Rr{constructor(e){super(e),this.uuid=ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Rr().fromJSON(s))}return this}},ag={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=kc(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,d,p,g;if(n&&(r=ug(i,e,r,t)),i.length>80*t){a=c=i[0],l=h=i[1];for(let M=t;M<s;M+=t)d=i[M],p=i[M+1],d<a&&(a=d),p<l&&(l=p),d>c&&(c=d),p>h&&(h=p);g=Math.max(c-a,h-l),g=g!==0?32767/g:0}return ms(r,o,t,a,l,g,0),o}};function kc(i,e,t,n,s){let r,o;if(s===Sg(i,e,t,n)>0)for(r=e;r<t;r+=n)o=uc(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=uc(r,i[r],i[r+1],o);return o&&Gr(o,o.next)&&(_s(o),o=o.next),o}function si(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gr(t,t.next)||Et(t.prev,t,t.next)===0)){if(_s(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ms(i,e,t,n,s,r,o){if(!i)return;!o&&r&&gg(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?lg(i,n,s,r):og(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),_s(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=cg(si(i),e,t),ms(i,e,t,n,s,r,2)):o===2&&hg(i,e,t,n,s,r):ms(si(i),e,t,n,s,r,1);break}}}function og(i){let e=i.prev,t=i,n=i.next;if(Et(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,p=s>r?s>o?s:o:r>o?r:o,g=a>l?a>c?a:c:l>c?l:c,M=n.next;for(;M!==e;){if(M.x>=h&&M.x<=p&&M.y>=d&&M.y<=g&&Pi(s,a,r,l,o,c,M.x,M.y)&&Et(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function lg(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Et(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,p=o.y,g=a<l?a<c?a:c:l<c?l:c,M=h<d?h<p?h:p:d<p?d:p,b=a>l?a>c?a:c:l>c?l:c,m=h>d?h>p?h:p:d>p?d:p,f=oo(g,M,e,t,n),C=oo(b,m,e,t,n),E=i.prevZ,P=i.nextZ;for(;E&&E.z>=f&&P&&P.z<=C;){if(E.x>=g&&E.x<=b&&E.y>=M&&E.y<=m&&E!==s&&E!==o&&Pi(a,h,l,d,c,p,E.x,E.y)&&Et(E.prev,E,E.next)>=0||(E=E.prevZ,P.x>=g&&P.x<=b&&P.y>=M&&P.y<=m&&P!==s&&P!==o&&Pi(a,h,l,d,c,p,P.x,P.y)&&Et(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;E&&E.z>=f;){if(E.x>=g&&E.x<=b&&E.y>=M&&E.y<=m&&E!==s&&E!==o&&Pi(a,h,l,d,c,p,E.x,E.y)&&Et(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;P&&P.z<=C;){if(P.x>=g&&P.x<=b&&P.y>=M&&P.y<=m&&P!==s&&P!==o&&Pi(a,h,l,d,c,p,P.x,P.y)&&Et(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function cg(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Gr(s,r)&&Vc(s,n,n.next,r)&&gs(s,r)&&gs(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),_s(n),_s(n.next),n=i=r),n=n.next}while(n!==i);return si(n)}function hg(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&yg(o,a)){let l=Gc(o,a);o=si(o,o.next),l=si(l,l.next),ms(o,e,t,n,s,r,0),ms(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ug(i,e,t,n){let s=[],r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=kc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(xg(c));for(s.sort(dg),r=0;r<s.length;r++)t=fg(s[r],t);return t}function dg(i,e){return i.x-e.x}function fg(i,e){let t=pg(i,e);if(!t)return e;let n=Gc(t,i);return si(n,n.next),si(t,t.next)}function pg(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Pi(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(r-t.x),gs(t,i)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&mg(s,t)))&&(s=t,h=d)),t=t.next;while(t!==a);return s}function mg(i,e){return Et(i.prev,i,e.prev)<0&&Et(e.next,i,i.next)<0}function gg(i,e,t,n){let s=i;do s.z===0&&(s.z=oo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_g(s)}function _g(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function oo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function xg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Pi(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function yg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!vg(i,e)&&(gs(i,e)&&gs(e,i)&&Mg(i,e)&&(Et(i.prev,i,e.prev)||Et(i,e.prev,e))||Gr(i,e)&&Et(i.prev,i,i.next)>0&&Et(e.prev,e,e.next)>0)}function Et(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gr(i,e){return i.x===e.x&&i.y===e.y}function Vc(i,e,t,n){let s=nr(Et(i,e,t)),r=nr(Et(i,e,n)),o=nr(Et(t,n,i)),a=nr(Et(t,n,e));return!!(s!==r&&o!==a||s===0&&tr(i,t,e)||r===0&&tr(i,n,e)||o===0&&tr(t,i,n)||a===0&&tr(t,e,n))}function tr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function nr(i){return i>0?1:i<0?-1:0}function vg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function gs(i,e){return Et(i.prev,i,i.next)<0?Et(i,e,i.next)>=0&&Et(i,i.prev,e)>=0:Et(i,e,i.prev)<0||Et(i,i.next,e)<0}function Mg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gc(i,e){let t=new lo(i.i,i.x,i.y),n=new lo(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uc(i,e,t,n){let s=new lo(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function _s(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lo(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Sg(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var is=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];dc(e),fc(n,e);let o=e.length;t.forEach(dc);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,fc(n,t[l]);let a=ag.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function dc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Lr=class i extends Zt{constructor(e=new ps([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,g=t.bevelThickness!==void 0?t.bevelThickness:.2,M=t.bevelSize!==void 0?t.bevelSize:g-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:Eg,E,P=!1,V,D,I,ee;f&&(E=f.getSpacedPoints(h),P=!0,p=!1,V=f.computeFrenetFrames(h,!1),D=new O,I=new O,ee=new O),p||(m=0,g=0,M=0,b=0);let R=a.extractPoints(c),T=R.shape,Z=R.holes;if(!is.isClockWise(T)){T=T.reverse();for(let F=0,Ce=Z.length;F<Ce;F++){let se=Z[F];is.isClockWise(se)&&(Z[F]=se.reverse())}}let ue=is.triangulateShape(T,Z),k=T;for(let F=0,Ce=Z.length;F<Ce;F++){let se=Z[F];T=T.concat(se)}function Y(F,Ce,se){return Ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),F.clone().addScaledVector(Ce,se)}let j=T.length,te=ue.length;function le(F,Ce,se){let Me,ie,ze,Se=F.x-Ce.x,A=F.y-Ce.y,w=se.x-F.x,q=se.y-F.y,xe=Se*Se+A*A,fe=Se*q-A*w;if(Math.abs(fe)>Number.EPSILON){let de=Math.sqrt(xe),Fe=Math.sqrt(w*w+q*q),Ue=Ce.x-A/de,Ne=Ce.y+Se/de,Ye=se.x-q/Fe,tt=se.y+w/Fe,pe=((Ye-Ue)*q-(tt-Ne)*w)/(Se*q-A*w);Me=Ue+Se*pe-F.x,ie=Ne+A*pe-F.y;let rt=Me*Me+ie*ie;if(rt<=2)return new we(Me,ie);ze=Math.sqrt(rt/2)}else{let de=!1;Se>Number.EPSILON?w>Number.EPSILON&&(de=!0):Se<-Number.EPSILON?w<-Number.EPSILON&&(de=!0):Math.sign(A)===Math.sign(q)&&(de=!0),de?(Me=-A,ie=Se,ze=Math.sqrt(xe)):(Me=Se,ie=A,ze=Math.sqrt(xe/2))}return new we(Me/ze,ie/ze)}let ne=[];for(let F=0,Ce=k.length,se=Ce-1,Me=F+1;F<Ce;F++,se++,Me++)se===Ce&&(se=0),Me===Ce&&(Me=0),ne[F]=le(k[F],k[se],k[Me]);let ce=[],ge,Te=ne.concat();for(let F=0,Ce=Z.length;F<Ce;F++){let se=Z[F];ge=[];for(let Me=0,ie=se.length,ze=ie-1,Se=Me+1;Me<ie;Me++,ze++,Se++)ze===ie&&(ze=0),Se===ie&&(Se=0),ge[Me]=le(se[Me],se[ze],se[Se]);ce.push(ge),Te=Te.concat(ge)}for(let F=0;F<m;F++){let Ce=F/m,se=g*Math.cos(Ce*Math.PI/2),Me=M*Math.sin(Ce*Math.PI/2)+b;for(let ie=0,ze=k.length;ie<ze;ie++){let Se=Y(k[ie],ne[ie],Me);De(Se.x,Se.y,-se)}for(let ie=0,ze=Z.length;ie<ze;ie++){let Se=Z[ie];ge=ce[ie];for(let A=0,w=Se.length;A<w;A++){let q=Y(Se[A],ge[A],Me);De(q.x,q.y,-se)}}}let Q=M+b;for(let F=0;F<j;F++){let Ce=p?Y(T[F],Te[F],Q):T[F];P?(I.copy(V.normals[0]).multiplyScalar(Ce.x),D.copy(V.binormals[0]).multiplyScalar(Ce.y),ee.copy(E[0]).add(I).add(D),De(ee.x,ee.y,ee.z)):De(Ce.x,Ce.y,0)}for(let F=1;F<=h;F++)for(let Ce=0;Ce<j;Ce++){let se=p?Y(T[Ce],Te[Ce],Q):T[Ce];P?(I.copy(V.normals[F]).multiplyScalar(se.x),D.copy(V.binormals[F]).multiplyScalar(se.y),ee.copy(E[F]).add(I).add(D),De(ee.x,ee.y,ee.z)):De(se.x,se.y,d/h*F)}for(let F=m-1;F>=0;F--){let Ce=F/m,se=g*Math.cos(Ce*Math.PI/2),Me=M*Math.sin(Ce*Math.PI/2)+b;for(let ie=0,ze=k.length;ie<ze;ie++){let Se=Y(k[ie],ne[ie],Me);De(Se.x,Se.y,d+se)}for(let ie=0,ze=Z.length;ie<ze;ie++){let Se=Z[ie];ge=ce[ie];for(let A=0,w=Se.length;A<w;A++){let q=Y(Se[A],ge[A],Me);P?De(q.x,q.y+E[h-1].y,E[h-1].x+se):De(q.x,q.y,d+se)}}}_e(),z();function _e(){let F=s.length/3;if(p){let Ce=0,se=j*Ce;for(let Me=0;Me<te;Me++){let ie=ue[Me];We(ie[2]+se,ie[1]+se,ie[0]+se)}Ce=h+m*2,se=j*Ce;for(let Me=0;Me<te;Me++){let ie=ue[Me];We(ie[0]+se,ie[1]+se,ie[2]+se)}}else{for(let Ce=0;Ce<te;Ce++){let se=ue[Ce];We(se[2],se[1],se[0])}for(let Ce=0;Ce<te;Ce++){let se=ue[Ce];We(se[0]+j*h,se[1]+j*h,se[2]+j*h)}}n.addGroup(F,s.length/3-F,0)}function z(){let F=s.length/3,Ce=0;Pe(k,Ce),Ce+=k.length;for(let se=0,Me=Z.length;se<Me;se++){let ie=Z[se];Pe(ie,Ce),Ce+=ie.length}n.addGroup(F,s.length/3-F,1)}function Pe(F,Ce){let se=F.length;for(;--se>=0;){let Me=se,ie=se-1;ie<0&&(ie=F.length-1);for(let ze=0,Se=h+m*2;ze<Se;ze++){let A=j*ze,w=j*(ze+1),q=Ce+Me+A,xe=Ce+ie+A,fe=Ce+ie+w,de=Ce+Me+w;qe(q,xe,fe,de)}}}function De(F,Ce,se){l.push(F),l.push(Ce),l.push(se)}function We(F,Ce,se){Be(F),Be(Ce),Be(se);let Me=s.length/3,ie=C.generateTopUV(n,s,Me-3,Me-2,Me-1);Qe(ie[0]),Qe(ie[1]),Qe(ie[2])}function qe(F,Ce,se,Me){Be(F),Be(Ce),Be(Me),Be(Ce),Be(se),Be(Me);let ie=s.length/3,ze=C.generateSideWallUV(n,s,ie-6,ie-3,ie-2,ie-1);Qe(ze[0]),Qe(ze[1]),Qe(ze[3]),Qe(ze[1]),Qe(ze[2]),Qe(ze[3])}function Be(F){s.push(l[F*3+0]),s.push(l[F*3+1]),s.push(l[F*3+2])}function Qe(F){r.push(F.x),r.push(F.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return bg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ro[s.type]().fromJSON(s)),new i(n,e.options)}},Eg={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new we(r,o),new we(a,l),new we(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],p=e[s*3],g=e[s*3+1],M=e[s*3+2],b=e[r*3],m=e[r*3+1],f=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new we(o,1-l),new we(c,1-d),new we(p,1-M),new we(b,1-f)]:[new we(a,1-l),new we(h,1-d),new we(g,1-M),new we(m,1-f)]}};function bg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ir=class i extends Zt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,p=(t-e)/s,g=new O,M=new we;for(let b=0;b<=s;b++){for(let m=0;m<=n;m++){let f=r+m/n*o;g.x=d*Math.cos(f),g.y=d*Math.sin(f),l.push(g.x,g.y,g.z),c.push(0,0,1),M.x=(g.x/t+1)/2,M.y=(g.y/t+1)/2,h.push(M.x,M.y)}d+=p}for(let b=0;b<s;b++){let m=b*(n+1);for(let f=0;f<n;f++){let C=f+m,E=C,P=C+n+1,V=C+n+2,D=C+1;a.push(E,P,D),a.push(P,V,D)}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Dr=class i extends Zt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new O,p=new O,g=[],M=[],b=[],m=[];for(let f=0;f<=n;f++){let C=[],E=f/n,P=0;f===0&&o===0?P=.5/t:f===n&&l===Math.PI&&(P=-.5/t);for(let V=0;V<=t;V++){let D=V/t;d.x=-e*Math.cos(s+D*r)*Math.sin(o+E*a),d.y=e*Math.cos(o+E*a),d.z=e*Math.sin(s+D*r)*Math.sin(o+E*a),M.push(d.x,d.y,d.z),p.copy(d).normalize(),b.push(p.x,p.y,p.z),m.push(D+P,1-E),C.push(c++)}h.push(C)}for(let f=0;f<n;f++)for(let C=0;C<t;C++){let E=h[f][C+1],P=h[f][C],V=h[f+1][C],D=h[f+1][C+1];(f!==0||o>0)&&g.push(E,P,D),(f!==n-1||l<Math.PI)&&g.push(P,V,D)}this.setIndex(g),this.setAttribute("position",new xt(M,3)),this.setAttribute("normal",new xt(b,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ur=class i extends Zt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new O,d=new O,p=new O;for(let g=0;g<=n;g++)for(let M=0;M<=s;M++){let b=M/s*r,m=g/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(b),d.y=(e+t*Math.cos(m))*Math.sin(b),d.z=t*Math.sin(m),a.push(d.x,d.y,d.z),h.x=e*Math.cos(b),h.y=e*Math.sin(b),p.subVectors(d,h).normalize(),l.push(p.x,p.y,p.z),c.push(M/s),c.push(g/n)}for(let g=1;g<=n;g++)for(let M=1;M<=s;M++){let b=(s+1)*g+M-1,m=(s+1)*(g-1)+M-1,f=(s+1)*(g-1)+M,C=(s+1)*g+M;o.push(b,m,C),o.push(m,f,C)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(l,3)),this.setAttribute("uv",new xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Nr=class extends Cn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new st(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var He=class extends Cn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function ir(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Vi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},co=class extends Vi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case gl:r=e,a=2*t-n;break;case _l:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gl:o=e,l=2*n-t;break;case _l:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,g=this._weightNext,M=(n-t)/(s-t),b=M*M,m=b*M,f=-p*m+2*p*b-p*M,C=(1+p)*m+(-1.5-2*p)*b+(-.5+p)*M+1,E=(-1-g)*m+(1.5+g)*b+.5*M,P=g*m-g*b;for(let V=0;V!==a;++V)r[V]=f*o[h+V]+C*o[c+V]+E*o[l+V]+P*o[d+V];return r}},ho=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),d=1-h;for(let p=0;p!==a;++p)r[p]=o[c+p]*d+o[l+p]*h;return r}},uo=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ir(t,this.TimeBufferType),this.values=ir(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ir(e.times,Array),values:ir(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new co(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case rr:t=this.InterpolantFactoryMethodDiscrete;break;case ar:t=this.InterpolantFactoryMethodLinear;break;case ta:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rr;case this.InterpolantFactoryMethodLinear:return ar;case this.InterpolantFactoryMethodSmooth:return ta}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&wg(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ta,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*n,p=d-n,g=d+n;for(let M=0;M!==n;++M){let b=t[d+M];if(b!==t[p+M]||b!==t[g+M]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*n,p=o*n;for(let g=0;g!==n;++g)t[p+g]=t[d+g]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=ar;var ri=class extends dn{};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=rr;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends dn{};fo.prototype.ValueTypeName="color";var po=class extends dn{};po.prototype.ValueTypeName="number";var mo=class extends Vi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)hn.slerpFlat(r,0,o,c-a,o,c,l);return r}},xs=class extends dn{InterpolantFactoryMethodLinear(e){return new mo(this.times,this.values,this.getValueSize(),e)}};xs.prototype.ValueTypeName="quaternion";xs.prototype.DefaultInterpolation=ar;xs.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends dn{};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=rr;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends dn{};go.prototype.ValueTypeName="vector";var _o=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,p=c.length;d<p;d+=2){let g=c[d],M=c[d+1];if(g.global&&(g.lastIndex=0),g.test(h))return M}return null}}},Tg=new _o,xo=class{constructor(e){this.manager=e!==void 0?e:Tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ys=class extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},Or=class extends ys{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ca=new At,pc=new O,mc=new O,Fr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pc.setFromMatrixPosition(e.matrixWorld),t.position.copy(pc),mc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mc),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var gc=new At,$i=new O,Pa=new O,yo=class extends Fr{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),n.position.copy($i),Pa.copy(n.position),Pa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Pa),n.updateMatrixWorld(),s.makeTranslation(-$i.x,-$i.y,-$i.z),gc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc)}},In=class extends ys{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yo}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vo=class extends Fr{constructor(){super(new Mr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Br=class extends ys{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new vo}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Po="\\[\\]\\.:\\/",Ag=new RegExp("["+Po+"]","g"),Lo="[^"+Po+"]",Rg="[^"+Po.replace("\\.","")+"]",Cg=/((?:WC+[\/:])*)/.source.replace("WC",Lo),Pg=/(WCOD+)?/.source.replace("WCOD",Rg),Lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lo),Ig=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lo),Dg=new RegExp("^"+Cg+Pg+Lg+Ig+"$"),Ug=["material","materials","bones","map"],Mo=class{constructor(e,t,n){let s=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Mt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ag,"")}static parseTrackName(e){let t=Dg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ug.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Mo;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zg=new Float32Array(1);var zr=class{constructor(e,t,n=0,s=1/0){this.ray=new ii(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return So(e,this,n,t),n.sort(_c),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)So(e[s],this,n,t);return n.sort(_c),n}};function _c(i,e){return i.distance-e.distance}function So(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,o=s.length;r<o;r++)So(s[r],e,t,!0)}}var vs=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ft(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Wc={type:"change"},Io={type:"start"},Xc={type:"end"},Wr=new ii,qc=new $t,Og=Math.cos(70*Lc.DEG2RAD),Xr=class extends mn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oi.ROTATE,MIDDLE:oi.DOLLY,RIGHT:oi.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",de),this._domElementKeyEvents=L},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",de),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Wc),n.update(),r=s.NONE},this.update=(function(){let L=new O,me=new hn().setFromUnitVectors(e.up,new O(0,1,0)),Le=me.clone().invert(),be=new O,ke=new hn,nt=new O,ht=2*Math.PI;return function(Ee=null){let H=n.object.position;L.copy(H).sub(n.target),L.applyQuaternion(me),a.setFromVector3(L),n.autoRotate&&r===s.NONE&&Z(R(Ee)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Ae=n.minAzimuthAngle,Re=n.maxAzimuthAngle;isFinite(Ae)&&isFinite(Re)&&(Ae<-Math.PI?Ae+=ht:Ae>Math.PI&&(Ae-=ht),Re<-Math.PI?Re+=ht:Re>Math.PI&&(Re-=ht),Ae<=Re?a.theta=Math.max(Ae,Math.min(Re,a.theta)):a.theta=a.theta>(Ae+Re)/2?Math.max(Ae,a.theta):Math.min(Re,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&D||n.object.isOrthographicCamera?a.radius=ne(a.radius):a.radius=ne(a.radius*c),L.setFromSpherical(a),L.applyQuaternion(Le),H.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let Xe=!1;if(n.zoomToCursor&&D){let Ge=null;if(n.object.isPerspectiveCamera){let ut=L.length();Ge=ne(ut*c);let ft=ut-Ge;n.object.position.addScaledVector(P,ft),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ut=new O(V.x,V.y,0);ut.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Xe=!0;let ft=new O(V.x,V.y,0);ft.unproject(n.object),n.object.position.sub(ft).add(ut),n.object.updateMatrixWorld(),Ge=L.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ge!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ge).add(n.object.position):(Wr.origin.copy(n.object.position),Wr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Wr.direction))<Og?e.lookAt(n.target):(qc.setFromNormalAndCoplanarPoint(n.object.up,n.target),Wr.intersectPlane(qc,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Xe=!0);return c=1,D=!1,Xe||be.distanceToSquared(n.object.position)>o||8*(1-ke.dot(n.object.quaternion))>o||nt.distanceToSquared(n.target)>0?(n.dispatchEvent(Wc),be.copy(n.object.position),ke.copy(n.object.quaternion),nt.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Ne),n.domElement.removeEventListener("pointerdown",Se),n.domElement.removeEventListener("pointercancel",w),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",w),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",de),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,o=1e-6,a=new vs,l=new vs,c=1,h=new O,d=new we,p=new we,g=new we,M=new we,b=new we,m=new we,f=new we,C=new we,E=new we,P=new O,V=new we,D=!1,I=[],ee={};function R(L){return L!==null?2*Math.PI/60*n.autoRotateSpeed*L:2*Math.PI/60/60*n.autoRotateSpeed}function T(L){let me=Math.abs(L)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*me)}function Z(L){l.theta-=L}function re(L){l.phi-=L}let ue=(function(){let L=new O;return function(Le,be){L.setFromMatrixColumn(be,0),L.multiplyScalar(-Le),h.add(L)}})(),k=(function(){let L=new O;return function(Le,be){n.screenSpacePanning===!0?L.setFromMatrixColumn(be,1):(L.setFromMatrixColumn(be,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(Le),h.add(L)}})(),Y=(function(){let L=new O;return function(Le,be){let ke=n.domElement;if(n.object.isPerspectiveCamera){let nt=n.object.position;L.copy(nt).sub(n.target);let ht=L.length();ht*=Math.tan(n.object.fov/2*Math.PI/180),ue(2*Le*ht/ke.clientHeight,n.object.matrix),k(2*be*ht/ke.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ue(Le*(n.object.right-n.object.left)/n.object.zoom/ke.clientWidth,n.object.matrix),k(be*(n.object.top-n.object.bottom)/n.object.zoom/ke.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function j(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function te(L){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=L:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(L,me){if(!n.zoomToCursor)return;D=!0;let Le=n.domElement.getBoundingClientRect(),be=L-Le.left,ke=me-Le.top,nt=Le.width,ht=Le.height;V.x=be/nt*2-1,V.y=-(ke/ht)*2+1,P.set(V.x,V.y,1).unproject(n.object).sub(n.object.position).normalize()}function ne(L){return Math.max(n.minDistance,Math.min(n.maxDistance,L))}function ce(L){d.set(L.clientX,L.clientY)}function ge(L){le(L.clientX,L.clientX),f.set(L.clientX,L.clientY)}function Te(L){M.set(L.clientX,L.clientY)}function Q(L){p.set(L.clientX,L.clientY),g.subVectors(p,d).multiplyScalar(n.rotateSpeed);let me=n.domElement;Z(2*Math.PI*g.x/me.clientHeight),re(2*Math.PI*g.y/me.clientHeight),d.copy(p),n.update()}function _e(L){C.set(L.clientX,L.clientY),E.subVectors(C,f),E.y>0?j(T(E.y)):E.y<0&&te(T(E.y)),f.copy(C),n.update()}function z(L){b.set(L.clientX,L.clientY),m.subVectors(b,M).multiplyScalar(n.panSpeed),Y(m.x,m.y),M.copy(b),n.update()}function Pe(L){le(L.clientX,L.clientY),L.deltaY<0?te(T(L.deltaY)):L.deltaY>0&&j(T(L.deltaY)),n.update()}function De(L){let me=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?re(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),me=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?re(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),me=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),me=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),me=!0;break}me&&(L.preventDefault(),n.update())}function We(L){if(I.length===1)d.set(L.pageX,L.pageY);else{let me=rt(L),Le=.5*(L.pageX+me.x),be=.5*(L.pageY+me.y);d.set(Le,be)}}function qe(L){if(I.length===1)M.set(L.pageX,L.pageY);else{let me=rt(L),Le=.5*(L.pageX+me.x),be=.5*(L.pageY+me.y);M.set(Le,be)}}function Be(L){let me=rt(L),Le=L.pageX-me.x,be=L.pageY-me.y,ke=Math.sqrt(Le*Le+be*be);f.set(0,ke)}function Qe(L){n.enableZoom&&Be(L),n.enablePan&&qe(L)}function F(L){n.enableZoom&&Be(L),n.enableRotate&&We(L)}function Ce(L){if(I.length==1)p.set(L.pageX,L.pageY);else{let Le=rt(L),be=.5*(L.pageX+Le.x),ke=.5*(L.pageY+Le.y);p.set(be,ke)}g.subVectors(p,d).multiplyScalar(n.rotateSpeed);let me=n.domElement;Z(2*Math.PI*g.x/me.clientHeight),re(2*Math.PI*g.y/me.clientHeight),d.copy(p)}function se(L){if(I.length===1)b.set(L.pageX,L.pageY);else{let me=rt(L),Le=.5*(L.pageX+me.x),be=.5*(L.pageY+me.y);b.set(Le,be)}m.subVectors(b,M).multiplyScalar(n.panSpeed),Y(m.x,m.y),M.copy(b)}function Me(L){let me=rt(L),Le=L.pageX-me.x,be=L.pageY-me.y,ke=Math.sqrt(Le*Le+be*be);C.set(0,ke),E.set(0,Math.pow(C.y/f.y,n.zoomSpeed)),j(E.y),f.copy(C);let nt=(L.pageX+me.x)*.5,ht=(L.pageY+me.y)*.5;le(nt,ht)}function ie(L){n.enableZoom&&Me(L),n.enablePan&&se(L)}function ze(L){n.enableZoom&&Me(L),n.enableRotate&&Ce(L)}function Se(L){n.enabled!==!1&&(I.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",w)),Ye(L),L.pointerType==="touch"?Fe(L):q(L))}function A(L){n.enabled!==!1&&(L.pointerType==="touch"?Ue(L):xe(L))}function w(L){tt(L),I.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",w)),n.dispatchEvent(Xc),r=s.NONE}function q(L){let me;switch(L.button){case 0:me=n.mouseButtons.LEFT;break;case 1:me=n.mouseButtons.MIDDLE;break;case 2:me=n.mouseButtons.RIGHT;break;default:me=-1}switch(me){case oi.DOLLY:if(n.enableZoom===!1)return;ge(L),r=s.DOLLY;break;case oi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;Te(L),r=s.PAN}else{if(n.enableRotate===!1)return;ce(L),r=s.ROTATE}break;case oi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;ce(L),r=s.ROTATE}else{if(n.enablePan===!1)return;Te(L),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Io)}function xe(L){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;Q(L);break;case s.DOLLY:if(n.enableZoom===!1)return;_e(L);break;case s.PAN:if(n.enablePan===!1)return;z(L);break}}function fe(L){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(L.preventDefault(),n.dispatchEvent(Io),Pe(L),n.dispatchEvent(Xc))}function de(L){n.enabled===!1||n.enablePan===!1||De(L)}function Fe(L){switch(pe(L),I.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;We(L),r=s.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;qe(L),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Qe(L),r=s.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;F(L),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Io)}function Ue(L){switch(pe(L),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(L),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;se(L),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(L),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ze(L),n.update();break;default:r=s.NONE}}function Ne(L){n.enabled!==!1&&L.preventDefault()}function Ye(L){I.push(L.pointerId)}function tt(L){delete ee[L.pointerId];for(let me=0;me<I.length;me++)if(I[me]==L.pointerId){I.splice(me,1);return}}function pe(L){let me=ee[L.pointerId];me===void 0&&(me=new we,ee[L.pointerId]=me),me.set(L.pageX,L.pageY)}function rt(L){let me=L.pointerId===I[0]?I[1]:I[0];return ee[me]}n.domElement.addEventListener("contextmenu",Ne),n.domElement.addEventListener("pointerdown",Se),n.domElement.addEventListener("pointercancel",w),n.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}};var qr=class extends ki{constructor(e=null){super();let t=new un;t.deleteAttribute("uv");let n=new He({side:kt}),s=new He,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let o=new In(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new je(t,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new je(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new je(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new je(t,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new je(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let p=new je(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let g=new je(t,s);g.position.set(-2.193,-.369,-5.547),g.rotation.set(0,.516,0),g.scale.set(3.875,3.487,2.986),this.add(g);let M=new je(t,Wi(50));M.position.set(-16.116,14.37,8.208),M.scale.set(.1,2.428,2.739),this.add(M);let b=new je(t,Wi(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);let m=new je(t,Wi(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let f=new je(t,Wi(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let C=new je(t,Wi(20));C.position.set(3.235,11.486,-12.541),C.scale.set(2.5,2,.1),this.add(C);let E=new je(t,Wi(100));E.position.set(0,20,0),E.scale.set(1,.1,1),this.add(E)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Wi(i){let e=new qt;return e.color.setScalar(i),e}var mt=.1,Pt=.04,Ke=.004,gn=1.45,fn=.72,Fg=2.16,yt=.018,Ms=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Do=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Xi(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new ds(n);return s.colorSpace=Tt,s.wrapS=s.wrapT=ss,s.anisotropy=8,s}var _n=(i=>()=>(i=i*16807%2147483647)/2147483647)(987654);function Zr(i,e){return Xi(1024,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<170;r++){let o=_n()*s,a=.04+_n()*.12;t.strokeStyle=`rgba(${e},${a})`,t.lineWidth=.5+_n()*2.2,t.beginPath(),t.moveTo(0,o);for(let l=0;l<=n;l+=32)t.lineTo(l,o+Math.sin(l/90+r)*3+(_n()-.5)*2);t.stroke()}})}function Uo(i,e,t=!0){return Xi(1024,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let o=n.getImageData(0,0,s,r),a=o.data;for(let l=0;l<a.length;l+=4){let c=(_n()-.5)*14;a[l]+=c,a[l+1]+=c,a[l+2]+=c}if(n.putImageData(o,0,0),t)for(let l=0;l<14;l++){n.strokeStyle=e,n.globalAlpha=.25+_n()*.5,n.lineWidth=.6+_n()*2,n.beginPath();let c=_n()*s,h=0;for(n.moveTo(c,h);h<r;)c+=(_n()-.45)*60,h+=20+_n()*30,n.lineTo(c,h);n.stroke()}n.globalAlpha=1})}function Yc(i,e){return Xi(512,512,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s),t.strokeStyle=e,t.lineWidth=3;for(let r=0;r<=2;r++)t.beginPath(),t.moveTo(0,r*s/2),t.lineTo(n,r*s/2),t.stroke(),t.beginPath(),t.moveTo(r*n/2,0),t.lineTo(r*n/2,s),t.stroke()})}var Yr={eiche:()=>({map:Zr("#b98a5c","70,42,18"),roughness:.55}),nuss:()=>({map:Zr("#6b4a32","30,16,6"),roughness:.5}),beton:()=>({map:Uo("#9b9893","rgba(0,0,0,.2)",!1),roughness:.8}),marmor:()=>({map:Uo("#1d1d1f","#d9d4cc"),roughness:.18}),keramik:()=>({map:Uo("#ecebe7","#b9b4ac"),roughness:.3}),schwarz:()=>({color:"#161616",roughness:.35})},Zc={eiche:()=>{let i=Zr("#c9a77f","90,60,30");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.7}},grau:()=>{let i=Yc("#a7a49f","rgba(0,0,0,.18)");return i.repeat.set(4,4),{map:i,roughness:.6}},hell:()=>{let i=Yc("#e8e4dd","rgba(0,0,0,.08)");return i.repeat.set(4,4),{map:i,roughness:.5}},dunkel:()=>{let i=Zr("#5c4330","20,10,4");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.6}}},No={matt:.62,seide:.38,glanz:.12};function Bg(i,e={}){let t=!!e.photo,n=new hs({antialias:!0,preserveDrawingBuffer:!0,alpha:t});n.setPixelRatio(Math.min(2,devicePixelRatio||1)),n.outputColorSpace=Tt,n.toneMapping=bo,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=Eo,t&&n.setClearColor(0,0),i.appendChild(n.domElement);let s=new ki;s.background=t?null:new st("#ebe6de");let r=new Hi(n);s.environment=r.fromScene(new qr(n),.04).texture;let o=new Ht(40,1,.05,80),a=t?null:new Xr(o,n.domElement),l=!1;a&&(a.addEventListener("start",()=>{l=!1}),a.enableDamping=!0,a.minPolarAngle=.2,a.maxPolarAngle=1.45,a.minDistance=1.5,a.maxDistance=16,a.screenSpacePanning=!0);let c=!1,h="perspektive",d=!0,p=!1,g=!1,M=0,b=0,m=null,f=()=>{d=!0,b=0,C()};function C(){!M&&!g&&(M=requestAnimationFrame(ws))}a&&a.addEventListener("change",f),n.domElement.addEventListener("pointerdown",()=>{c=!0,m=null,f(),e.onInteract&&e.onInteract()}),n.domElement.addEventListener("wheel",()=>{m=null,f()},{passive:!0});let E=new Br("#fff6ea",2);E.castShadow=!0,E.shadow.mapSize.set(2048,2048),E.shadow.bias=-4e-4,E.shadow.radius=4,s.add(E,E.target);let P=new Or("#ffffff","#bfae98",.55);s.add(P);let V=s.environment,D="tag";function I(){let v=D==="abend";E.intensity=v?.05:2,P.intensity=v?.3:.55,P.color.set(v?"#ffd9b0":"#ffffff"),s.environment=v?null:V,s.background&&s.background.set(v?"#1d1a17":"#ebe6de"),n.toneMappingExposure=t?ee:v?1.25:1.05,De.m&&(De.m.sky.color.set(v?"#1b2640":"#dcefff"),De.m.led.color.set(v?"#fff7e0":"#fff3d6")),f()}let ee=1,R={},T=(v,u)=>R[v]||(R[v]=u()),Z=new ct,re=new ct;Z.add(re),s.add(Z);let ue=null,k="",Y={w:4.8,d:3.8},j={},te={},le=new Set,ne=!1,ce=[],ge=e.acc||"#c0673f",Te=new ct;Te.renderOrder=5;{let v=new Er(new Pr(new un(1,1,1)),new us({color:ge,transparent:!0,opacity:.95})),u=new je(new un(1,1,1),new qt({color:ge,transparent:!0,opacity:.13,depthWrite:!1}));v.raycast=u.raycast=()=>{},Te.add(v,u)}let Q=null,_e=new un(1,1,1);function z(v,u,y,x,S,_,N,B,U=!0){let G=new je(_e,x);return G.scale.set(Math.max(v,.001),Math.max(u,.001),Math.max(y,.001)),G.position.set(S,_,N),G.castShadow=U,G.receiveShadow=!0,B.add(G),G}function Pe(v,u,y,x,S,_,N,B,U,G){let K=T("cy"+(G||[v,u,y,x].join()),()=>new Ut(v,u,y,x)),X=new je(K,S);return X.position.set(_,N,B),U.add(X),X}function De(v){let u=JSON.stringify([v.front,v.finish,v.wood,v.top,v.handle,v.wall,v.floor,v.accent,v.back,v.backC,v.backWood,v.sink,v.tap]);if(De.k===u)return De.m;De.k=u;let y=new He({color:v.front,roughness:No[v.finish]??.5,envMapIntensity:.9}),x=v.wood?new He({...T("w"+v.wood,()=>Yr[v.wood]()),roughness:.6}):null,S=v.accent?new He({color:v.accent,roughness:No[v.finish]??.5}):null,_=new He({color:"#c8c8c8",roughness:.25,metalness:1}),N=new He({color:"#2a2a2a",roughness:.8}),B=new He({color:"#efece6",roughness:.8}),U=x||y,G=(X,$)=>{let ae=$?U:N,W=[ae,ae,ae,ae,ae,ae];return W[X]=B,W},K=x?new He({...T("w"+v.wood,()=>Yr[v.wood]()),roughness:.6,color:"#d2d2d2"}):new He({color:new st(v.front).multiplyScalar(.9),roughness:No[v.finish]??.5,envMapIntensity:.9});return De.m={F:x||y,FA:S||x||y,FD:K,carcass:N,inner:B,cs:{L:G(0,1),R:G(1,1),B:G(2),Tp:G(3),K:G(4)},plinth:new He({color:"#1e1e1e",roughness:.7}),top:new He({...T("t"+v.top,()=>Yr[v.top]())}),steel:_,black:new He({color:"#0b0b0c",roughness:.08,metalness:.2}),glass:new He({color:"#111",roughness:.05,metalness:.5}),glassClear:new He({color:"#cfd8d8",roughness:.05,metalness:.1,transparent:!0,opacity:.35}),handle:v.handle==="gold"?new He({color:"#b08a4a",roughness:.3,metalness:1}):v.handle==="schwarz"?new He({color:"#111",roughness:.4,metalness:.6}):_,wall:new He({color:v.wall||"#f2eee8",roughness:.95}),floor:new He({...T("f"+v.floor,()=>(Zc[v.floor]||Zc.eiche)())}),frame:new He({color:"#ffffff",roughness:.5}),sky:new qt({color:"#dcefff"}),door:new He({color:"#d8d2c8",roughness:.7}),led:new qt({color:"#fff3d6"}),stool:new He({color:"#1c1c1c",roughness:.5,metalness:.4}),seat:new He({color:"#8a6a4a",roughness:.6}),glow:new qt({color:"#ffe7b8"}),fridge:new He({color:"#bfc2c4",roughness:.3,metalness:.8}),tile:new He({...T("metro",()=>{let X=Xi(512,512,($,ae,W)=>{$.fillStyle="#d9d4cc",$.fillRect(0,0,ae,W);for(let J=0;J<8;J++)for(let oe=-1;oe<5;oe++){let he=oe*128+J%2*64,ye=J*64;$.fillStyle="#f6f4ef",$.fillRect(he+3,ye+3,122,58),$.fillStyle="rgba(255,255,255,.5)",$.fillRect(he+6,ye+6,116,10)}});return X.repeat.set(4,1.1),{map:X}}),roughness:.2}),backGlass:new He({color:v.backC||(v.wood?"#2a2420":v.front),roughness:.04,metalness:.1,envMapIntensity:1.4}),backDibond:new He({color:v.backC||(v.wood?"#2a2420":v.front),roughness:.62,metalness:.05}),backWood:new He({...T("bw"+(v.backWood||"eiche"),()=>{let X=Yr[v.backWood==="nuss"?"nuss":"eiche"](),$=X.map.clone();return $.needsUpdate=!0,$.repeat.set(1.6,1),{...X,map:$}}),roughness:.55}),sinkM:(()=>{let X=v.sink||"#c9cccf",$=X==="#c9cccf";return new He({color:X,roughness:$?.28:X==="#f7f6f2"?.12:.42,metalness:$?1:0,envMapIntensity:$?1:.8})})(),sinkIn:(()=>{let X=new st(v.sink||"#c9cccf"),$=(v.sink||"#c9cccf")==="#c9cccf";return new He({color:X.clone().multiplyScalar($?.82:.78),roughness:$?.35:.5,metalness:$?1:0})})(),tapM:new He({chrom:{color:"#e9edf0",roughness:.06,metalness:1},edel:{color:"#c3c6c8",roughness:.34,metalness:1},schwarz:{color:"#161617",roughness:.55,metalness:.25},gold:{color:"#c09a5f",roughness:.3,metalness:1}}[v.tap]||{color:"#e9edf0",roughness:.06,metalness:1}),dside:T("m_ds",()=>new He({color:"#5b5d60",roughness:.4,metalness:.6})),dbot:T("m_db",()=>new He({color:"#e7e5e0",roughness:.85})),plate:T("m_pl",()=>new He({color:"#fbfaf6",roughness:.25})),cup:T("m_cu",()=>new He({color:"#d9cdb8",roughness:.35})),bottleG:T("m_bg",()=>new He({color:"#2d4a2a",roughness:.12,metalness:.15})),bottleB:T("m_bb",()=>new He({color:"#6a3a16",roughness:.12,metalness:.15})),bottleW:T("m_bw",()=>new He({color:"#c9b37a",roughness:.2})),jar:T("m_ja",()=>new He({color:"#e3d6bd",roughness:.3})),jarLid:T("m_jl",()=>new He({color:"#3c3a37",roughness:.4,metalness:.3})),bin:T("m_bi",()=>new He({color:"#7d8083",roughness:.55})),binY:T("m_by",()=>new He({color:"#d9b441",roughness:.5})),binB:T("m_bl",()=>new He({color:"#4f78a8",roughness:.5})),binG:T("m_bgn",()=>new He({color:"#7a6a55",roughness:.5})),fridgeIn:T("m_fi",()=>new He({color:"#f3f6f7",roughness:.35})),fridgeLight:T("m_fl",()=>new qt({color:"#f2f8ff"})),glassShelf:T("m_gs",()=>new He({color:"#dfeaea",roughness:.05,transparent:!0,opacity:.5})),green:T("m_gr",()=>new He({color:"#6f8f4e",roughness:.6})),broom:T("m_br",()=>new He({color:"#b5a27c",roughness:.6}))},De.m}function We(v,u,y,x,S,_,N,B,U,G={}){let K=S+_;B.forEach((X,$)=>{let ae=_*X;if(z(y-Ke*2,ae-Ke,.02,G.mat||u.F,x,K-ae/2,N,v),U.handle!=="grifflos"&&!G.noHandle)if(G.vertical){let W=Math.min(G.hl||.32,ae*.42),oe=(G.vpos&&G.vpos[$]||"bottom")==="top"?K-.07-W/2:K-ae+.07+W/2;z(.016,W,.025,u.handle,x+(G.side||1)*(y/2-.055),oe,N+.02,v)}else z(Math.min(.4,y*.6),.015,.025,u.handle,x,K-.05,N+.02,v);K-=ae}),U.handle==="grifflos"&&!G.noHandle&&z(y,.02,.01,u.steel,x,S+_-.012,N-.004,v,!1)}function qe(v,u,y,x,S,_={}){let N=.9-Pt-mt;z(x-Ke,N,S-.02,u.carcass,0,mt+N/2,-.01,v),z(x,mt,S-.06,u.plinth,0,mt/2,-.03,v),_.noFront||We(v,u,x,0,mt,N-Ke,S/2-.01,_.parts||[.25,.375,.375],y,_),_.noTop||z(x+.002,Pt,S+.02,u.top,0,.9-Pt/2,.01,v)}function Be(v,u,y,x,S=.9){let _=Math.min(.55,Math.max(.3,y-.2));z(_,.008,.44,u.sinkM,0,S+.004,-.02,v,!1),z(_-.07,.004,.34,u.sinkIn,-0,S+.0085,-.01,v,!1),Pe(.022,.022,.003,18,T("m_drain",()=>new He({color:"#3a3c3e",roughness:.3,metalness:.8})),0,S+.011,0,v,"drain");let N=u.tapM||u.steel,B=new je(T("faucet",()=>new Ut(.015,.018,.3,16)),N);B.position.set(0,S+.15,-x/2+.1),B.castShadow=!0,v.add(B);let U=new je(T("arc",()=>new Ur(.09,.012,10,24,Math.PI)),N);U.position.set(0,S+.3,-x/2+.19),U.rotation.y=Math.PI/2,U.castShadow=!0,v.add(U);let G=new je(T("spout",()=>new Ut(.013,.011,.06,14)),N);G.position.set(0,S+.27,-x/2+.28),v.add(G);let K=new je(T("lever",()=>new Ut(.006,.006,.07,8)),N);K.rotation.z=Math.PI/2.4,K.position.set(.035,S+.22,-x/2+.1),v.add(K)}let Qe=()=>T("grille",()=>Xi(64,256,(v,u,y)=>{v.fillStyle="#4b4f53",v.fillRect(0,0,u,y),v.fillStyle="#111214";for(let x=6;x<y;x+=12)v.fillRect(6,x,u-12,6)}));function F(v,u,y,x,S=.9,_=-.02,N){let B=N?N/100:Math.min(.8,y-.08),U=Math.min(1.12,B/.78);z(B,.008,.52,u.glass,0,S+.004,_,v,!1);let G=T("ringgeo",()=>new Ir(.06,.068,32)),K=T("ringmat",()=>new qt({color:"#555"}));[[-.17,-.12],[.17,-.12],[-.17,.12],[.17,.12]].forEach(([X,$])=>{let ae=new je(G,K);ae.rotation.x=-Math.PI/2,ae.position.set(X*Math.max(.72,U)+(x?Math.sign(X)*.015:0),S+.009,_+$),v.add(ae)}),x&&z(.09,.004,.5,T("m_grille",()=>new He({map:Qe(),roughness:.45,metalness:.6})),0,S+.0095,_,v,!1)}function Ce(v,u,y,x,S,_){let N=-S/2,B=S/2-.02,U=B-N,G=(N+B)/2,K=u.cs,X=y-2*yt-Ke;return z(yt,x,U,K.L,-y/2+yt/2+Ke/2,_+x/2,G,v),z(yt,x,U,K.R,y/2-yt/2-Ke/2,_+x/2,G,v),z(X,yt,U,K.B,0,_+yt/2,G,v,!1),z(X,yt,U,K.Tp,0,_+x-yt/2,G,v,!1),z(X,x-2*yt,.008,K.K,0,_+x/2,N+.004,v,!1),{zf:B,zb:N}}function se(v,u,y,x,S,_,N){let{M:B,s:U}=v;if(U.handle!=="grifflos"){if(U.handle==="knopf"){let G=Pe(.014,.011,.026,18,B.handle,y,x,S-.002,u,"knob");G.rotation.x=Math.PI/2,G.castShadow=!0;return}N?z(.016,_,.025,B.handle,y,x,S,u):z(_,.015,.025,B.handle,y,x,S,u)}}let Me=1.05;function ie(v,u,y,x,S,_,N,B){let U=v.s.frame&&y>.1&&x>.09,G=z(y,x,.02,U&&(S===v.M.F||S===v.M.FA)?v.M.FD:S,_,N,B,u);if(U){let K=Math.min(.058,y*.15,x*.2),X=B+.0135;z(y,K,.007,S,_,N+x/2-K/2,X,u),z(y,K,.007,S,_,N-x/2+K/2,X,u),z(K,x-2*K,.007,S,_-y/2+K/2,N,X,u),z(K,x-2*K,.007,S,_+y/2-K/2,N,X,u)}return G}function ze(v,u,y,x,S=0,_=.0215){v.kind!=="u"||v.s.handle!=="grifflos"||z(y,.012,.003,v.M.carcass,S,x+.007,_,u,!1)}function Se(v,u,y,x,S){let _={o:u,k:y,to:x,ez:S,b:y==="rx"?u.rotation.x:y==="ry"?u.rotation.y:y==="px"?u.position.x:y==="py"?u.position.y:u.position.z};return v.anims.push(_),_}let A=v=>{let u=v-1;return 1+1.9*u*u*u+.9*u*u},w=(v,u)=>u?A(v):Do(v);function q(v,u){let y=new ct;return u.add(y),v.hide.push(y),y}function xe(v,u,y,x,S,_,N,B){let U=v.M,G=Math.max(1,Math.floor(x/.14)),K=X=>(Math.sin((B+X)*12.9898)*43758.5453%1+1)%1;if(N==="plates"){let X=Math.max(1,Math.floor(x/.3));for(let $=0;$<X;$++)for(let ae=0;ae<5;ae++)Pe(.1,.095,.012,24,U.plate,y-x/2+($+.5)*x/X,S+.008+ae*.014,_,u,"plate");return}for(let X=0;X<G;X++){let $=y-x/2+(X+.5)*x/G,ae=K(X);if(ae<.4)Pe(.04,.04,.1,14,U.jar,$,S+.05,_,u,"jar"),Pe(.042,.042,.02,14,U.jarLid,$,S+.11,_,u,"jarl");else if(ae<.75)for(let W=0;W<3;W++)Pe(.045,.035,.08,14,U.cup,$,S+.04+W*.085,_,u,"cup");else for(let W=0;W<4;W++)Pe(.09,.085,.012,22,U.plate,$,S+.008+W*.014,_,u,"plate2")}}function fe(v,u,y,x,S,_,N,B,U){let{M:G,zf:K,zb:X}=v,$=x-2*yt-.006,ae=K-X-.03,W=(K+X)/2-.01;for(let J=1;J<=N;J++){let oe=S+_*J/(N+1);z($,.016,ae,U?G.glassShelf:G.inner,y,oe,W,u,!1),B&&xe(v,u,y,$-.04,oe+.008,W,B,J*7+y*13)}B&&xe(v,u,y,$-.04,S+yt,W,B,99+y*5)}function de(v,u,y,x,S,_,N){let B=u.in||"shelf",U=N?v.g:q(v,v.g),G=v.M,{zf:K,zb:X}=v,$=(K+X)/2;if(B==="none")return;if(B==="fridge"){let W=x-2*yt-.01,J=K-X-.02;z(W,_-.02,.01,G.fridgeIn,y,S+_/2,X+.02,U,!1),z(.01,_-.02,J,G.fridgeIn,y-W/2+.005,S+_/2,$,U,!1),z(.01,_-.02,J,G.fridgeIn,y+W/2-.005,S+_/2,$,U,!1);let oe=Math.max(1,Math.round(_/.3));for(let he=1;he<=oe;he++){let ye=S+_*he/(oe+1);z(W,.008,J-.03,G.glassShelf,y,ye,$,U,!1),he===1&&(Pe(.04,.04,.12,12,G.bottleW,y-W/4,ye+.065,$,U,"milk"),Pe(.05,.05,.06,14,G.green,y+W/6,ye+.035,$,U,"bowl"))}z(W*.6,.012,.02,G.fridgeLight,y,S+_-.03,K-.08,U,!1);return}if(B==="broom"){z(x-2*yt-.006,.016,K-X-.03,G.inner,y,S+_-.3,$,U,!1),Pe(.012,.012,1.2,8,G.broom,y-x/5,S+.65,$+.05,U,"stick"),z(.24,.05,.06,G.stool,y-x/5,S+.06,$+.05,U,!1),z(Math.min(.22,x-.1),.3,.22,G.bin,y+x/6,S+.16,$,U,!1);return}if(B==="lazy"){let W=Math.max(.1,Math.min(x*.62,K-X-.04)/2),J=new ct;J.position.set(y,0,$),U.add(J);let oe=T("lazy"+W.toFixed(2),()=>new Ut(W,W,.014,36,1,!1,0,Math.PI*1.5)),he=T("lazyr"+W.toFixed(2),()=>new Ut(W+.004,W+.004,.035,36,1,!0,0,Math.PI*1.5)),ye=_>.6?2:1;for(let Ve=0;Ve<ye;Ve++){let ve=S+.04+Ve*_/(ye+.2),Ze=new je(oe,G.inner);Ze.position.y=ve,J.add(Ze);let Je=new je(he,G.steel);Je.position.y=ve+.016,J.add(Je);for(let at=0;at<3;at++){let $e=.5+at*1.35,Oe=Math.sin($e)*W*.6,et=Math.cos($e)*W*.6;if(at===1)for(let pt=0;pt<3;pt++)Pe(.045,.035,.08,14,G.cup,Oe,ve+.05+pt*.085,et,J,"cup");else Pe(.04,.04,.1,14,G.jar,Oe,ve+.06,et,J,"jar"),Pe(.042,.042,.02,14,G.jarLid,Oe,ve+.12,et,J,"jarl")}}Pe(.01,.01,_-.04,8,G.steel,0,S+_/2,0,J,"lazyax"+_.toFixed(2)),Se(v,J,"ry",v.lazyDir||1.1);return}let ae=v.kind==="t"?Math.max(1,Math.floor(_/.38)):v.kind==="u"&&_>.6?2:1;fe(v,U,y,x,S,_,ae,u.dec||(N&&v.kind==="u"?"mix":null),!1)}function Fe(v,u,y,x,S,_,N,B){let{M:U,s:G,g:K,kind:X,zf:$}=v,ae=N==="l"?1:-1,W=y-ae*x/2,J=new ct;J.position.set(W,0,$),K.add(J);let oe=v.mat||U.F,he=x-Ke*2,ye=_-Ke,Ve=S+_/2;if(B){let ve=Math.min(G.frame?.065:.05,he*(G.frame?.16:.12));z(he,ve,.02,oe,ae*x/2,S+_-Ke/2-ve/2,.01,J),z(he,ve,.02,oe,ae*x/2,S+Ke/2+ve/2,.01,J),z(ve,ye-2*ve,.02,oe,ae*(Ke+ve/2),Ve,.01,J),z(ve,ye-2*ve,.02,oe,ae*(x-Ke-ve/2),Ve,.01,J),z(he-2*ve,ye-2*ve,.006,U.glassClear,ae*x/2,Ve,.01,J,!1)}else ie(v,J,he,ye,oe,ae*x/2,Ve,.01);if(ze(v,J,he,S+Ke/2,ae*x/2),!u.nh&&G.handle!=="grifflos"){let ve=X==="b"?Math.min(.14,_*.4):Math.min(X==="u"?.2:u.hl||.32,_*.42),Ze=u.hp||(X==="u"?"bottom":X==="b"?"top":"bottom"),Je=S+.06+ve/2,at=S+_-.06-ve/2,$e=X==="t"?S<Me-.1?Math.max(Je,Math.min(at,Me)):Je:Ze==="top"?at:Ze==="mid"?Ve:Je;se(v,J,ae*(x-.055),$e,.03,ve,!0)}Se(v,J,"ry",-ae*(u.ang||1.62))}function Ue(v,u,y,x,S,_,N,B){let{M:U,s:G,g:K,zf:X,zb:$,d:ae}=v,W=new ct;K.add(W),ie(v,W,x-Ke*2,_-Ke,v.mat||U.F,y,S+_/2,X+.01),u.nh||se(v,W,y,v.kind==="t"&&_>.7?Math.max(S+.08,Math.min(S+_-.08,Me)):S+_-.05,X+.03,Math.min(.4,x*.6),!1);let J=q(v,W),oe=x-2*yt-.03,he=X-$-.05,ye=X-.004,Ve=ye-he,ve=(Ve+ye)/2,Ze=S+.02,Je=u.in||(u.k==="pull"?"shelf":"box"),at=($e,Oe=J,et=Ze)=>{z(.012,$e,he,U.dside,y-oe/2+.006,et+$e/2,ve,Oe,!1),z(.012,$e,he,U.dside,y+oe/2-.006,et+$e/2,ve,Oe,!1),z(oe,$e*.8,.012,U.dside,y,et+$e*.4,Ve+.006,Oe,!1),z(oe-.02,.01,he,U.dbot,y,et+.005,ve,Oe,!1)};if(u.k==="drawer"){let $e=Math.max(.06,Math.min(_-.05,.24));if(at($e),Je==="cutlery"||Je==="box"&&N===0&&B>2)for(let Oe=1;Oe<4;Oe++)z(.006,.04,he-.03,U.dbot,y-oe/2+oe*Oe/4,Ze+.03,ve,J,!1);else if(Je==="plates"&&$e>.15){let Oe=Math.max(1,Math.floor(oe/.26));for(let et=0;et<Oe;et++)for(let pt=0;pt<6;pt++)Pe(.1,.095,.012,24,U.plate,y-oe/2+(et+.5)*oe/Oe,Ze+.016+pt*.014,ve,J,"plate")}else if(Je==="pots"&&$e>.15){let Oe=Math.max(1,Math.floor(oe/.26));for(let et=0;et<Oe;et++)Pe(.1,.1,.12,24,U.steel,y-oe/2+(et+.5)*oe/Oe,Ze+.07,ve,J,"pot")}else if(Je==="id"){let Oe=new ct;J.add(Oe);let et=.08,pt=S+_-.04-et;at(et,Oe,pt),z(oe-.01,et,.016,v.mat||U.F,y,pt+et/2,ye-.01,Oe,!1);for(let dt=1;dt<3;dt++)z(.005,.035,he-.04,U.dbot,y-oe/2+oe*dt/3,pt+.025,ve,Oe,!1);if(Se(v,Oe,"pz",.14),_>.3){let dt=Math.max(1,Math.floor(oe/.26));for(let Rt=0;Rt<dt;Rt++)Pe(.1,.1,.1,24,U.steel,y-oe/2+(Rt+.5)*oe/dt,Ze+.06,ve,J,"pot2")}}Se(v,W,"pz",Math.min(.45,he*.8));return}if(z(.012,_-.06,he,U.dside,y-oe/2+.006,S+_/2,ve,J,!1),z(oe,_-.06,.012,U.dside,y,S+_/2,Ve+.006,J,!1),Je==="bottles"){let $e=Math.max(1,Math.floor(_/.32)),Oe=Math.max(1,Math.round(oe/.08));for(let et=0;et<$e;et++){let pt=S+.03+et*_/$e;z(oe,.01,he,U.dside,y,pt,ve,J,!1);for(let dt=0;dt<Oe;dt++)for(let Rt=0;Rt<3;Rt++){let As=y-oe/2+(dt+.5)*oe/Oe,qi=Ve+(Rt+.5)*he/3,Oo=(dt+Rt+et)%3===0?U.bottleB:U.bottleG;Pe(.032,.032,.19,12,Oo,As,pt+.1,qi,J,"bot"),Pe(.011,.015,.07,8,Oo,As,pt+.23,qi,J,"neck")}}}else if(Je==="baskets"){let $e=Math.max(2,Math.floor(_/.2));for(let Oe=0;Oe<$e;Oe++){let et=S+.03+Oe*(_-.06)/$e;z(oe,.008,he,U.dside,y,et,ve,J,!1),z(oe,.04,.006,U.steel,y,et+.03,Ve+.01,J,!1),z(oe,.04,.006,U.steel,y,et+.03,ye-.03,J,!1);let pt=Math.max(1,Math.floor(he/.11));for(let dt=0;dt<pt;dt++){let Rt=Ve+(dt+.5)*he/pt;oe>.1?(Pe(.035,.035,.09,12,U.jar,y,et+.05,Rt,J,"jar2"),Pe(.037,.037,.015,12,U.jarLid,y,et+.1,Rt,J,"jarl2")):z(.05,.1,.07,(dt+Oe)%2?U.bottleW:U.cup,y,et+.055,Rt,J,!1)}}}else if(Je==="bins"){let $e=oe>.4?3:2,Oe=oe/$e-.015,et=[U.binY,U.binB,U.binG];for(let pt=0;pt<$e;pt++){let dt=y-oe/2+(pt+.5)*oe/$e,Rt=Math.min(.36,_-.14);z(Oe,Rt,he-.04,U.bin,dt,S+.04+Rt/2,ve,J,!1),z(Oe+.006,.02,he-.02,et[pt],dt,S+.05+Rt,ve,J,!1)}}else{let $e=Math.max(1,Math.floor(_/.3));for(let Oe=0;Oe<$e;Oe++)z(oe,.01,he,U.dbot,y,S+.03+Oe*_/$e,ve,J,!1)}Se(v,W,"pz",Math.min(.55,he*.88))}function Ne(v,u,y,x,S,_,N,B){let{M:U,s:G,g:K,zf:X}=v,$=u.k||"door";if($==="open"){de(v,{in:u.in||"shelf",dec:u.dec||"mix"},y,x,S,_,!0);return}if($==="blind"){ie(v,K,x-Ke*2,_-Ke,v.mat||U.F,y,S+_/2,X+.01);return}if($==="oven"||$==="micro"){z(x-Ke*2,_-Ke,.02,U.glass,y,S+_/2,X+.01,K),z(x-.1,_*.62,.004,T("m_ov",()=>new He({color:"#202326",roughness:.2,metalness:.4})),y,S+_*.44,X+.022,K,!1),z(x*.8,.018,.03,U.steel,y,S+_-.06,X+.04,K),$==="oven"&&z(x*.5,.02,.004,U.steel,y,S+_-.025,X+.022,K,!1);return}if($==="drawer"||$==="pull"){Ue(v,u,y,x,S,_,N,B);return}if($==="door"||$==="glass"){Fe(v,u,y,x,S,_,u.a||"l",$==="glass"),de(v,u,y,x,S,_,$==="glass");return}if($==="door2"||$==="glass2"){let ae=$==="glass2";Fe(v,u,y-x/4,x/2,S,_,"l",ae),Fe(v,u,y+x/4,x/2,S,_,"r",ae),de(v,u,y,x,S,_,ae);return}if($==="flap"){let ae=new ct;ae.position.set(y,S+_,X),K.add(ae),ie(v,ae,x-Ke*2,_-Ke,v.mat||U.F,0,-_/2,.01),ze(v,ae,x-Ke*2,-_+Ke/2),u.nh||se(v,ae,0,-_+.05,.03,Math.min(.4,x*.6),!1),Se(v,ae,"rx",-1.75,w),de(v,u,y,x,S,_,!1);return}if($==="lift"){let ae=new ct;ae.position.set(y,0,X),K.add(ae),ie(v,ae,x-Ke*2,_-Ke,v.mat||U.F,0,S+_/2,.01),ze(v,ae,x-Ke*2,S+Ke/2),u.nh||se(v,ae,0,S+.05,.03,Math.min(.4,x*.6),!1),Se(v,ae,"py",_+.03,w),Se(v,ae,"pz",1,(W,J)=>{let oe=w(W,J);return .06*oe+.1*Math.sin(Math.PI*Math.min(1,oe))}),Se(v,ae,"rx",1,(W,J)=>-.16*Math.sin(Math.PI*Math.min(1,w(W,J)))),de(v,u,y,x,S,_,!1);return}if($==="fold"){let ae=_/2,W=v.mat||U.F,J=new ct;J.position.set(y,S+_,X),K.add(J),ie(v,J,x-Ke*2,ae-Ke/2,W,0,-ae/2+Ke/4,.01);let oe=new ct;oe.position.set(0,-ae,0),J.add(oe),ie(v,oe,x-Ke*2,ae-Ke/2,W,0,-ae/2-Ke/4,.01),ze(v,oe,x-Ke*2,-ae+Ke/4),z(x-Ke*2-.01,.004,.004,U.carcass,0,0,.002,oe,!1),u.nh||se(v,oe,0,-ae+.05,.03,Math.min(.4,x*.6),!1);let he=1.42;Se(v,J,"rx",-he,w),Se(v,oe,"rx",2*he,w),de(v,u,y,x,S,_,!1);return}if($==="dw"){let ae=new ct;ae.position.set(y,S,X),K.add(ae),ie(v,ae,x-Ke*2,_-Ke,v.mat||U.F,0,_/2,.01),se(v,ae,0,_-.05,.03,Math.min(.4,x*.6),!1);let W=q(v,K),J=x-2*yt-.02,{zb:oe}=v,he=X-oe-.06,ye=(X+oe)/2;z(J,_-.04,.01,U.steel,y,S+_/2,oe+.03,W,!1),[.14,.44].forEach((Ve,ve)=>{let Ze=new ct;W.add(Ze),z(J-.02,.006,he,U.dside,y,S+Ve,ye,Ze,!1),z(J-.02,.07,.006,U.dside,y,S+Ve+.035,ye+he/2,Ze,!1);let Je=Math.max(4,Math.floor(J/.05));for(let at=0;at<Je;at++){let $e=new je(T("dwplate",()=>new Ut(.1,.1,.01,20)),U.plate);$e.rotation.x=Math.PI/2,$e.position.set(y-J/2+.04+at*(J-.08)/(Je-1),S+Ve+.1,ye-.06*ve),Ze.add($e)}ve===0&&Se(v,Ze,"pz",.32)}),Se(v,ae,"rx",1.45);return}}function Ye(v,u,y,x,S,_){let N=u.reduce((K,X)=>K+(X.cm!=null?X.cm/100:0),0),B=u.reduce((K,X)=>K+(X.cm==null?X.p||1:0),0)||1,U=Math.max(0,_-N),G=S+_;u.forEach((K,X)=>{let $=K.cm!=null?K.cm/100:U*(K.p||1)/B;$>.005&&Ne(v,K,y,x,G-$,$,X,u.length),G-=$})}function tt(v,u,y,x){let{g:S,M:_,s:N}=v,B=.6,U=.9+x,G=mt+x,K=U-Pt-G,X=.3,$=new ct;S.add($),u.corner.side==="r"&&($.scale.x=-1);let ae=-y/2,W=-y/2+.6;z(y,mt+x,B-.06,_.plinth,0,(mt+x)/2,-.03,$),z(.6-.06,mt+x,X+.06,_.plinth,ae+.27,(mt+x)/2,B/2+X/2-.03,$),z(y-Ke,K,.008,_.carcass,0,G+K/2,-B/2+.004,$),z(yt,K,B+X-.02,_.carcass,ae+yt/2,G+K/2,(X-.02)/2,$),z(yt,K,B-.02,_.carcass,y/2-yt/2,G+K/2,-.01,$),z(.6,K,yt,_.carcass,ae+.3,G+K/2,B/2+X-.02-yt/2,$),z(y-Ke,yt,B-.02,_.inner,0,G+yt/2,-.01,$,!1),z(.6,yt,X,_.inner,ae+.3,G+yt/2,B/2+X/2-.01,$,!1),z(y,Pt,B+.02,_.top,0,U-Pt/2,.01,$),z(.62,Pt,X-.02,_.top,ae+.31,U-Pt/2,B/2+.02+(X-.02)/2,$);let J=B/2-.02,oe=v.mat||_.F,he=y/2-W,ye=new ct;ye.position.set(y/2,0,J),$.add(ye),z(he-Ke*2,K-Ke,.02,oe,-he/2,G+K/2,.01,ye);let Ve=new ct;if(Ve.position.set(W+.02,0,B/2+X-.02),$.add(Ve),z(.02,K-Ke,X-Ke*2,oe,.01,G+K/2,-X/2+.01,Ve),se(v,ye,-he+.05,U-Pt-.12,.03,.14,!0),N.handle!=="grifflos")if(N.handle==="knopf"){let at=Pe(.014,.011,.026,18,_.handle,.03,U-Pt-.12,-X+.06,Ve,"knob");at.rotation.z=Math.PI/2}else z(.025,.14,.016,_.handle,.03,U-Pt-.12,-X+.06,Ve);Se(v,ye,"ry",1.62),Se(v,Ve,"ry",-1.62);let ve=new ct;ve.position.set(ae+.45,0,.15),$.add(ve),v.hide.push(ve);let Ze=T("kardisc",()=>new Ut(.4,.4,.02,40,1,!1,Math.PI/2,Math.PI*1.5)),Je=T("karrim",()=>new Ut(.405,.405,.05,40,1,!0,Math.PI/2,Math.PI*1.5));[.22,.5].forEach((at,$e)=>{let Oe=new je(Ze,_.inner);Oe.position.y=G+at,ve.add(Oe);let et=new je(Je,_.steel);et.position.y=G+at+.025,ve.add(et);for(let pt=0;pt<4;pt++){let dt=Math.PI/2+.5+pt*.9;Pe(.07,.06,.1+$e*.02,16,pt%2?_.steel:_.jar,Math.sin(dt)*.25,G+at+.06,Math.cos(dt)*.25,ve,"karpot"+$e)}}),Pe(.012,.012,K-.04,8,_.steel,0,G+K/2,0,ve,"karax"),Se(v,ve,"ry",-Math.PI/2)}function pe(v,u,y,x,S,_){let{M:N}=v,B=new ct;v.g.add(B),v.hide.push(B);let U=T("lemans",()=>{let G=new ps;return G.moveTo(-.22,-.16),G.lineTo(.18,-.16),G.quadraticCurveTo(.26,-.16,.26,-.06),G.lineTo(.26,.1),G.quadraticCurveTo(.26,.18,.16,.18),G.lineTo(-.06,.18),G.quadraticCurveTo(-.22,.18,-.24,.02),G.quadraticCurveTo(-.26,-.16,-.22,-.16),new Lr(G,{depth:.03,bevelEnabled:!1})});[.2,.48].forEach(G=>{let K=x+G*S/.72,X=new je(U,N.inner);X.rotation.x=-Math.PI/2,X.position.set(0,K,0),B.add(X);for(let $=0;$<3;$++)Pe(.06,.05,.09,16,$===1?N.steel:N.jar,-.12+$*.13,K+.075,.01,B,"lmpot")}),B.position.set(u+_*.14,0,-.02),Se(v,B,"px",-_*.16),Se(v,B,"pz",.42),Se(v,B,"ry",-_*.45)}let rt=()=>T("contact",()=>Xi(128,128,(v,u,y)=>{v.clearRect(0,0,u,y),v.shadowColor="rgba(0,0,0,1)",v.shadowBlur=22,v.fillStyle="#000",v.fillRect(30,30,68,68)}));function L(v,u,y){let x=new je(T("cgeo",()=>new Ln(1,1)),T("cmat",()=>new qt({map:rt(),transparent:!0,opacity:.5,depthWrite:!1,color:"#000"})));x.rotation.x=-Math.PI/2,x.scale.set(u/.56,y/.56,1),x.position.set(0,.0015,-.02),x.renderOrder=-1,x.raycast=()=>{},v.add(x)}function me(v,u,y,x,S){let _=x.kind||"b",N=x.w/100,B=(x.d||(_==="u"?35:60))/100,U=_==="b"?((x.ah||90)-90)/100:0;if(_!=="u"&&L(v,N,B-.04),S.kind=_,S.d=B,S.mat=x.acc?u.FA:x.dekor==="top"?u.top:null,x.eqk&&(v.userData.eq={k:x.eqk,wall:x.eqw}),x.corner&&x.corner.kind==="kar"){tt(S,x,N,U);return}let G,K;if(_==="u")G=(x.y0||145)/100,K=(x.h||72)/100;else if(_==="t")G=mt,K=(x.h||216)/100-mt,z(N,mt,B-.06,u.plinth,0,mt/2,-.03,v);else{G=mt+U,K=.9+U-Pt-G;let he=x.plExt||[0,0];z(N+(he[0]+he[1])/100,mt+U,B-.06,u.plinth,(he[1]-he[0])/200,(mt+U)/2,-.03,v)}let{zf:X,zb:$}=Ce(v,u,N,K,B,G);S.zf=X,S.zb=$;let ae=x.cols||[{fr:x.fr||[{k:"door"}]}],W=ae.reduce((he,ye)=>he+(ye.cm?ye.cm/100:0),0),J=ae.filter(he=>!he.cm).length||1,oe=-N/2;if(ae.forEach(he=>{let ye=he.cm?he.cm/100:(N-W)/J,Ve=K-Ke;Ye(S,he.fr,oe+ye/2,ye,G+Ke/2,Ve),he.lemans&&pe(S,oe+ye/2,ye,G,K,he.lemans),oe+=ye}),y.handle==="grifflos"&&_!=="u"&&!x.noGrip&&z(N,.02,.01,u.steel,0,G+K-.012,X-.004,v,!1),_==="b"){let he=x.topCut||[0,0];if(z(N-(he[0]+he[1])/100,Pt,B+.02,u.top,(he[0]-he[1])/200,.9+U-Pt/2,.01,v),x.app){let ye=new ct;v.add(ye),ye.userData.eq={k:x.app==="sp"?"sp":"kf",id:x.id},x.app==="sp"?Be(ye,u,N,B,.9+U):F(ye,u,N,x.app==="kfb"||!!y.hobDD,.9+U,-.02,x.hob)}}_==="u"&&x.led!==!1&&z(N-.02,.01,.02,u.led,0,G-.004,X-.05,v,!1)}let Le={us:(v,u,y,x)=>qe(v,u,y,x.w/100,.6,{parts:x.v==="tuer"?[.18,.82]:[.25,.375,.375],vertical:!1}),sp:(v,u,y,x)=>{qe(v,u,y,x.w/100,.6,{parts:[1]}),Be(v,u,x.w/100,.6)},kf:(v,u,y,x)=>{if(x.v==="ofen"){let S=x.w/100;qe(v,u,y,S,.6,{parts:[.2,.8]});let _=.9-Pt-mt;z(S-.05,_*.8-.1,.022,u.glass,0,mt+_*.8/2,.3,v),z(S*.8,.018,.03,u.steel,0,mt+_*.8-.06,.32,v),F(v,u,S,!1);return}qe(v,u,y,x.w/100,.6,{parts:[.25,.375,.375]}),F(v,u,x.w/100,x.v!=="normal")},gs:(v,u,y,x)=>qe(v,u,y,x.w/100,.6,{parts:[1],noHandle:y.handle==="grifflos"}),ec:(v,u,y,x)=>qe(v,u,y,x.w/100,.6,{parts:[.18,.82]}),hs:(v,u,y,x)=>{let S=x.w/100,_=.6,N=Fg-mt;z(S-Ke,N,_,u.carcass,0,mt+N/2,-.01,v),z(S,mt,_-.06,u.plinth,0,mt/2,-.03,v);let B=_/2;x.v==="backofen"||x.v==="dampf"?(We(v,u,S,0,mt,.7,B,[.5,.5],y),z(S-.04,.58,.022,u.glass,0,mt+.7+.3,B,v),z(S*.8,.02,.03,u.steel,0,mt+.7+.55,B+.02,v),x.v==="dampf"?(z(S-.04,.44,.022,u.glass,0,mt+1.32+.22,B,v),We(v,u,S,0,mt+1.78,N-1.78,B,[1],y,{vertical:!0,vpos:["bottom"],hl:.2})):We(v,u,S,0,mt+1.32,N-1.32,B,[1],y,{vertical:!0,vpos:["bottom"],hl:.26})):x.v==="kuehl"?We(v,u,S,0,mt,N,B,[.6,.4],y,{vertical:!0,side:-1,vpos:["bottom","top"]}):We(v,u,S,0,mt,N,B,[.5,.5],y,{vertical:!0,vpos:["bottom","top"]})},kfr:(v,u,y,x)=>{let S=x.w/100,_=.7,N=1.78;z(S-.01,N,_-.02,u.fridge,0,N/2,0,v),z(.004,N-.02,.02,u.black,0,N/2,_/2,v),z(.02,.7,.04,u.steel,-.06,1.1,_/2+.03,v),z(.02,.7,.04,u.steel,.06,1.1,_/2+.03,v),z(.18,.3,.01,u.black,-.22,1.15,_/2+.001,v)},ws:(v,u,y,x)=>{let S=x.w/100,_=.35;if(x.v==="offen"){[0,.36,.72].forEach(N=>z(S-.01,.025,_-.02,u.F,0,gn+N+.012,0,v)),z(.025,fn,_-.02,u.F,-S/2+.012,gn+fn/2,0,v),z(.025,fn,_-.02,u.F,S/2-.012,gn+fn/2,0,v);return}z(S-Ke,fn,_,u.carcass,0,gn+fn/2,0,v),x.v==="glas"?(z(S-Ke*2,fn-Ke,.02,u.glassClear,0,gn+fn/2,_/2+.005,v),z(S-.04,.015,_-.04,u.inner,0,gn+fn/2,0,v)):z(S-Ke*2,fn-Ke,.02,u.FA,0,gn+fn/2,_/2+.005,v),y.handle!=="grifflos"&&x.v!=="glas"&&z(.016,.2,.025,u.handle,S/2-.055,gn+.06+.1,_/2+.025,v),z(S-.02,.01,.02,u.led,0,gn-.004,_/2-.05,v,!1)},ns:(v,u,y,x)=>{let S=x.w/100,_=(x.h||55)/100,N=((x.ah||90)-90)/100;if(_<=.01)return;v.userData.eq={k:"bs",wall:x.wall};let B=y.back==="platte"?u.top:y.back==="fliese"?u.tile:y.back==="glas"?u.backGlass:y.back==="dibond"?u.backDibond:y.back==="holz"?u.backWood:null;if(y.back==="motiv")if(Ee&&x.nW){let U=Ee.image,G=x.nW/55,K=U.width/U.height,X=1,$=1;K>G?X=G/K:$=K/G;let ae=Ee.clone();ae.repeat.set(x.w/x.nW*X,_/.55*$),ae.offset.set((1-X)/2+x.nx/x.nW*X,(1-$)/2),ae.needsUpdate=!0,B=new He({map:ae,roughness:.07,metalness:.05,envMapIntensity:1.1})}else B=u.backGlass;if(B&&y.backLed&&D==="abend"){let U=B;B=U.map&&y.back==="motiv"?U:T("nsg"+De.k,()=>U.clone()),B.emissive=new st("#ffd49a"),B.emissiveIntensity=y.back==="motiv"?.5:.32,U.map&&(B.emissiveMap=U.map)}if(B&&z(S,_,.012,B,0,.9+N+_/2,0,v,!1),y.backLed&&_>.3&&(z(S,.008,.012,u.led,0,.9+N+_-.006,.014,v,!1),v.userData.led=.9+N+_-.03),!B){let U=z(S,_,.004,T("m_inv",()=>new qt({visible:!1})),0,.9+N+_/2,-.004,v,!1);U.castShadow=!1}},hb:(v,u,y,x)=>{let S=x.w/100,_=x.v||"schraeg",N=-.25;if(v.userData.eq={k:"dh",id:x.id,wall:x.wall},_==="esse"){z(.3,.9,.24,u.steel,0,2.15,N+.12,v),z(S,.05,.5,u.steel,0,1.6,0,v);let U=new ct;U.position.set(0,1.775,N+.25),U.scale.set(1,1,.5/S),v.add(U);let G=new je(T("pyr",()=>new Ut(.24,.7071,.3,4,1)),u.steel);G.rotation.y=Math.PI/4,G.scale.set(S,1,S),G.castShadow=!0,U.add(G);return}if(_==="flach"){z(S-.004,.72,.33,u.F,0,1.45+.36,N+.165,v),ie({s:y,M:u},v,S-.006,.7,u.F,0,1.45+.37,N+.34),z(S-.02,.03,.3,u.steel,0,1.45-.012,N+.2,v),z(S-.06,.006,.004,u.black,0,1.45-.02,N+.352,v,!1);return}if(_==="decke"){z(Math.max(.9,S+.1),.05,.6,T("m_ceil",()=>new He({color:"#eef0f1",roughness:.4})),0,2.575,.05,v,!1),z(Math.max(.9,S+.1)-.12,.006,.44,T("m_grille",()=>new He({map:Qe(),roughness:.45,metalness:.6})),0,2.548,.05,v,!1);return}z(.28,.66,.22,u.steel,0,2.27,N+.11,v),z(S*.96,.2,.22,u.steel,0,1.94,N+.11,v);let B=z(S,.54,.022,u.black,0,1.83,N+.33,v);B.rotation.x=-.64,z(S,.02,.05,u.steel,0,1.6,N+.48,v)},wg:(v,u,y,x)=>{let S=(x.h||90)/100;v.userData.eq={k:"wg",wall:x.wall},z(.025,S,.62,x.dekor==="front"?u.F:u.top,0,S/2,0,v)},rg:(v,u,y,x)=>{let S=x.w/100;[0,.38].forEach(_=>z(S,.04,.26,u.top,0,1.5+_,0,v))},in:(v,u,y,x)=>{let S=x.w/100,_=(x.d||100)/100,N=_-.3,B=-_/2+N/2,U=Math.max(2,Math.round(S/.6)),G=S/U;for(let W=0;W<U;W++){let J=-S/2+G*W+G/2,oe=new ct;oe.position.set(J,0,B),qe(oe,u,y,G,N,{noTop:!0,parts:x.v==="spuele"&&W===Math.floor(U/2)?[1]:[.25,.375,.375]}),v.add(oe)}let K=x.dekor==="front"?u.F:u.top;z(S+.08,Pt,_,u.top,0,.9-Pt/2,0,v),[-1,1].forEach(W=>{let J=new ct;J.userData.eq={k:"wg"},v.add(J),z(.04,.9-Pt,_,K,W*(S/2+.02),(.9-Pt)/2,0,J)});let X=x.ih||"mulde";if(x.v==="kochfeld"){let W=new ct;if(W.position.set(0,0,B+.05),W.userData.eq={k:"isl"},F(W,u,.8,X==="mulde",.9,-.02,x.hob),v.add(W),X==="insel"){let J=new ct;J.position.set(0,0,B+.03),J.userData.eq={k:"isl"},z(.9,.09,.6,u.steel,0,1.68,0,J),z(.32,.86,.28,u.steel,0,2.17,0,J),z(.86,.006,.54,T("m_grille",()=>new He({map:Qe(),roughness:.45,metalness:.6})),0,1.632,0,J,!1),v.add(J)}if(X==="decke"){let J=new ct;J.position.set(0,0,B+.03),J.userData.eq={k:"isl"},z(1,.05,.6,T("m_ceil",()=>new He({color:"#eef0f1",roughness:.4})),0,2.575,0,J,!1),z(.88,.006,.46,T("m_grille",()=>new He({map:Qe(),roughness:.45,metalness:.6})),0,2.548,0,J,!1),v.add(J)}}let $=x.v==="kochfeld"&&X!=="mulde";if(x.v==="spuele"){let W=new ct;W.position.set((Math.floor(U/2)+.5)*G-S/2,0,B+.05),Be(W,u,G,N+.3),v.add(W)}let ae=Math.max(2,Math.floor(S/.55));for(let W=0;W<ae;W++){let J=-S/2+S/(ae+1)*(W+1),oe=_/2+.22,he=new je(T("leg",()=>new Ut(.02,.02,.62,12)),u.stool);he.position.set(J,.31,oe),he.castShadow=!0,v.add(he);let ye=new je(T("seatg",()=>new Ut(.18,.17,.05,24)),u.seat);ye.position.set(J,.64,oe),ye.castShadow=!0,v.add(ye)}for(let W=0;W<3;W++){if($&&(W===1||S<1.6))continue;let J=$?(W===0?-1:1)*(S/2-.22):-S/2+S/4*(W+1),oe=new je(T("lamp",()=>new Cr(.12,.22,24,1,!0)),u.stool);oe.position.set(J,1.82,0),v.add(oe);let he=new je(T("bulb",()=>new Dr(.04,12,12)),u.glow);he.position.set(J,1.74,0),v.add(he);let ye=new je(T("cord",()=>new Ut(.004,.004,.7,6)),u.stool);ye.position.set(J,2.28,0),v.add(ye)}},th:(v,u,y,x)=>{let S=x.w/100,_=(x.d||40)/100;z(S,1.06,.06,u.FA,0,.53,-_/2+.05,v),z(S+.04,Pt,_+.04,u.top,0,1.08,0,v);let N=Math.max(2,Math.floor(S/.55));for(let B=0;B<N;B++){let U=-S/2+S/(N+1)*(B+1),G=_/2+.22,K=new je(T("leg2",()=>new Ut(.02,.02,.78,12)),u.stool);K.position.set(U,.39,G),v.add(K);let X=new je(T("seatg",()=>new Ut(.18,.17,.05,24)),u.seat);X.position.set(U,.8,G),X.castShadow=!0,v.add(X)}}};function be(v){let u=(v.d||(v.kind==="u"?35:60))/100,y=v.w/100,x=0,S;return v.kind==="u"?(x=(v.y0||145)/100,S=x+(v.h||72)/100):v.kind==="t"?S=(v.h||216)/100:S=.9+((v.ah||90)-90)/100,[y+.02,S-x+.02,u+.04,(x+S)/2]}function ke(v){let u=v.userData.hb;u&&(Te.scale.set(u[0],u[1],u[2]),Te.position.set(0,u[3],.005),v.add(Te))}function nt(v){v=v==null?null:String(v),v!==Q&&(Q=v,Te.parent&&Te.parent.remove(Te),v!=null&&te[v]?ke(te[v]):Q=null,f())}function ht(v){for(let u=ce.length-1;u>=0;u--){let y=ce[u];if(v<y.s)continue;let x=Math.min(1,(v-y.s)/y.d);if(y.kind==="out"){let _=x*x,N=Math.max(.001,1-_);y.g.scale.setScalar(N),y.g.position.y=y.y0+y.yc*(1-N)+.12*_,x>=1&&(y.g.parent&&y.g.parent.remove(y.g),ce.splice(u,1));continue}let S=1-Math.pow(1-x,3);if(y.g.position.lerpVectors(y.p0,y.p1,S),y.kind==="in"){let _=.88+.12*S;y.g.scale.setScalar(_),y.g.position.y+=y.yc*(1-_)}x>=1&&(y.g.position.copy(y.p1),y.g.scale.setScalar(1),ce.splice(u,1))}return!0}function it(v){let u=v.userData.st,y=Do(u.c);u.anims.forEach(x=>{let S=x.b+x.to*(x.ez?x.ez(u.c,u.ez):y);x.k==="rx"?x.o.rotation.x=S:x.k==="ry"?x.o.rotation.y=S:x.k==="px"?x.o.position.x=S:x.k==="py"?x.o.position.y=S:x.o.position.z=S}),u.hide.forEach(x=>{x.visible=u.c>.001})}let Ee=null,H=null,Ae=null;function Re(v){Ae=v;let u=v.style,y=v.room,x=De(u);(v.motif||null)!==H&&(H=v.motif||null,Ee&&Ee.dispose(),Ee=H?new ds(H):null,Ee&&(Ee.colorSpace=Tt,Ee.anisotropy=8));let S=te,_={};for(let W in S){let J=S[W];_[W]={p:J.position.clone(),ry:J.rotation.y,g:J}}for(let W=ce.length-1;W>=0;W--)ce[W].kind!=="out"&&ce.splice(W,1);Te.parent&&Te.parent.remove(Te),ue&&re.remove(ue),ue=new ct,re.add(ue),te={};let N=y.w/100,B=y.d/100,U=2.6;if(t){let W=new je(new Ln(N+6,B+6),T("shadowcatch",()=>new Nr({opacity:.34})));W.rotation.x=-Math.PI/2,W.position.set(N/2,0,B/2),W.receiveShadow=!0,ue.add(W)}else{let W=new je(new Ln(N+4,B+4),x.floor);W.rotation.x=-Math.PI/2,W.position.set(N/2,0,B/2),W.receiveShadow=!0,ue.add(W)}let G=t?{}:y.walls||{N:1,E:1,S:1,W:1},K={N:[N,N/2,0,0],S:[N,N/2,B,Math.PI],W:[B,0,B/2,Math.PI/2],E:[B,N,B/2,-Math.PI/2]};j={};for(let W in K){if(!G[W])continue;let[J,oe,he,ye]=K[W],Ve=new ct;Ve.userData={p:new O(oe,0,he),n:{N:[0,1],S:[0,-1],W:[1,0],E:[-1,0]}[W]},j[W]=Ve,ue.add(Ve);let ve=new je(new Ln(J,U),x.wall);ve.position.set(oe,U/2,he),ve.rotation.y=ye,ve.receiveShadow=!0,Ve.add(ve)}(v.open||[]).forEach(W=>{if(!G[W.wall])return;let[J,oe,he,ye]=K[W.wall],Ve=new ct;Ve.rotation.y=ye;let ve=W.s/100+W.w/200,Ze={N:[ve,0],S:[N-ve,B],W:[0,B-ve],E:[N,ve]}[W.wall];Ve.position.set(Ze[0],0,Ze[1]);let Je=W.w/100;if(W.t==="fenster"){let at=(W.y||100)/100,$e=(W.h||120)/100,Oe=new je(T("pane",()=>new Ln(1,1)),x.sky);Oe.scale.set(Je,$e,1),Oe.position.set(0,at+$e/2,.003),Ve.add(Oe),z(Je+.08,.06,.06,x.frame,0,at,.03,Ve,!1),z(Je+.08,.06,.06,x.frame,0,at+$e,.03,Ve,!1),z(.06,$e,.06,x.frame,-Je/2,at+$e/2,.03,Ve,!1),z(.06,$e,.06,x.frame,Je/2,at+$e/2,.03,Ve,!1),Je>.9&&z(.04,$e,.04,x.frame,0,at+$e/2,.03,Ve,!1),z(Je+.1,.03,.12,x.frame,0,at-.015,.06,Ve,!1)}else z(Je,2.05,.01,W.t==="durchgang"?x.plinth:x.door,0,2.05/2,.006,Ve,!1),z(Je+.1,.06,.05,x.frame,0,2.05+.03,.025,Ve,!1),z(.05,2.05,.05,x.frame,-Je/2-.025,2.05/2,.025,Ve,!1),z(.05,2.05,.05,x.frame,Je/2+.025,2.05/2,.025,Ve,!1),W.t==="tuer"&&z(.12,.02,.04,x.steel,Je/2-.1,1.05,.04,Ve);j[W.wall].add(Ve)});let X=[];v.items.forEach(W=>{let J=new ct;if(W.t==="cab"){let oe={g:J,M:x,s:u,anims:[],hide:[]};me(J,x,u,W,oe),(oe.anims.length||W.id!=null)&&(J.userData.st={c:0,t:0,go:0,anims:oe.anims,hide:oe.hide},J.userData.pid=W.id,J.userData.label=W.label||"",J.userData.wcm=W.w,J.userData.hb=be(W),W.id!=null&&(te[W.id]=J))}else{let oe=Le[W.t];if(!oe)return;oe(J,x,u,W)}J.position.set(W.x/100,0,W.z/100),J.rotation.y=(W.r||0)*Math.PI/180,ue.add(J),W.t==="ns"&&J.userData.led&&(J.updateMatrixWorld(),X.unshift(J.localToWorld(new O(0,J.userData.led,.1)))),(W.t==="ws"&&W.v!=="offen"||W.t==="cab"&&W.kind==="u"&&W.led!==!1)&&(J.updateMatrixWorld(),X.push(J.localToWorld(new O(0,(W.t==="cab"?(W.y0||145)/100:gn)-.05,.06))))});for(let W in te){let J=te[W],oe=J.userData.st;oe.t=oe.c=ne||le.has(String(W))?1:0,it(J)}if(!t&&!Ms){let W=Object.keys(te),J=Object.keys(_),oe=performance.now(),he=W.filter(ve=>!_[ve]),ye=J.filter(ve=>!te[ve]),Ve=he.filter(ve=>ye.some(Ze=>_[Ze].p.distanceTo(te[ve].position)<.01&&_[Ze].g.userData.wcm===te[ve].userData.wcm));if(Ve.length){let ve=new Set(Ve);ye=ye.filter(Ze=>!Ve.some(Je=>_[Ze].p.distanceTo(te[Je].position)<.01)),he=he.filter(Ze=>!ve.has(Ze))}J.length&&he.length<=3&&ye.length<=3&&he.length<Math.max(2,W.length/2)&&(he.forEach((ve,Ze)=>{let Je=te[ve],at=Je.position.clone(),$e=Je.rotation.y,Oe=Je.userData.hb?Je.userData.hb[3]:.5,et=at.clone().add(new O(Math.sin($e)*.55,.18,Math.cos($e)*.55));Je.position.copy(et),Je.scale.setScalar(.88),ce.push({kind:"in",g:Je,p0:et,p1:at,yc:Oe,s:oe+Ze*70,d:620})}),W.forEach(ve=>{let Ze=_[ve];if(!Ze)return;let Je=te[ve];if(Math.abs(Ze.ry-Je.rotation.y)>.01||Ze.p.distanceTo(Je.position)<.002||Ze.p.distanceTo(Je.position)>3)return;let at=Je.position.clone();Je.position.copy(Ze.p),ce.push({kind:"mv",g:Je,p0:Ze.p.clone(),p1:at,yc:0,s:oe,d:460})}),ye.forEach(ve=>{let Ze=_[ve].g;Ze&&(re.add(Ze),ce.push({kind:"out",g:Ze,y0:Ze.position.y,yc:Ze.userData.hb?Ze.userData.hb[3]:.5,s:oe,d:420}))}))}if(Q!=null&&te[Q]?ke(te[Q]):Q=null,D==="abend"){let W=new In("#ffe2c0",26,0,2);W.position.set(N/2,2.5,B/2+.3),ue.add(W);let J=new In("#ffcf96",10,0,2);if(J.position.set(N/2,1.9,B-.4),ue.add(J),X.slice(0,10).forEach(oe=>{let he=new In("#ffe4b8",3.2,1.8,2);he.position.copy(oe),ue.add(he)}),v.items.some(oe=>oe.t==="in")){let oe=v.items.find(ye=>ye.t==="in"),he=new In("#ffd09a",2.5,2.5,2);he.position.set(oe.x/100,1.7,oe.z/100),ue.add(he)}}I();let $=y.w+"x"+y.d;Y={w:N,d:B},t?E.position.set(N/2+1.2,6,B/2+4):E.position.set(N/2-3,7,B/2+5),E.target.position.set(N/2,0,B/2);let ae=Math.max(N,B)/2+1.5;Object.assign(E.shadow.camera,{left:-ae,right:ae,top:ae,bottom:-ae}),E.shadow.camera.updateProjectionMatrix(),$!==k&&(k=$,a&&(a.target.set(N/2,.9,B/2),Xe("perspektive"))),f()}function Xe(v,u){if(h=v,!a)return;let y=Y.w,x=Y.d,S={x:y/2,z:x/2},_=Math.max(y,x)*(o.aspect<1?1.75:o.aspect<1.3?1.3:1.05),N={perspektive:[S.x+_*.42,1.5+_*.55,S.z+_*1],front:[S.x,1.6,S.z+_*.95+.8],top:[S.x,_*1.45+2,S.z+.01],ecke:[S.x-_*.5,1.6+_*.45,S.z+_*.95],augen:[S.x,1.62,x-.35]}[v];if(!N){f();return}let B=v==="augen"?new O(S.x,1.25,.3):new O(y/2,.9,x/2),U=new O(...N);if(l=!1,u&&!Ms&&o.position.distanceTo(U)>.05){m={p0:o.position.clone(),p1:U,t0:a.target.clone(),t1:B,s:performance.now(),d:850},f();return}m=null,l=!1,o.position.copy(U),a.target.copy(B),a.update(),f()}function Ge(v){let u=m,y=Math.min(1,(v-u.s)/u.d),x=Do(y);return o.position.lerpVectors(u.p0,u.p1,x),o.position.y+=Math.sin(Math.PI*x)*.35*Math.min(1,u.p0.distanceTo(u.p1)/3),a.target.lerpVectors(u.t0,u.t1,x),a.update(),y>=1&&(m=null),!0}function ut(){let v=i.clientWidth,u=i.clientHeight;!v||!u||(n.setSize(v,u,!1),n.domElement.style.width=v+"px",n.domElement.style.height=u+"px",o.aspect=v/u,o.updateProjectionMatrix(),!c&&k&&a&&Xe(h),f())}ut();let ft=new ResizeObserver(ut);ft.observe(i);let bt=!0,Nt=new IntersectionObserver(([v])=>{bt=v.isIntersecting,bt&&f()});Nt.observe(i);let gt=!1,Lt=0;function Yt(v,u){let y=v.userData.st;y.anims.length&&(y.t=u?1:0,Ms?(y.c=y.t,it(v),f()):gt=!0,f())}function Ss(v){let u=Math.min(.08,(v-(Lt||v))/1e3);Lt=v;let y=!1;for(let x in te){let S=te[x],_=S.userData.st;_.c===_.t||!_.anims.length||(y=!0,!(_.go&&v<_.go)&&(_.go=0,_.c<=0&&_.t===1?_.ez=1:_.c>=1&&_.t===0&&(_.ez=0),_.c=_.t>_.c?Math.min(_.t,_.c+u/.65):Math.max(_.t,_.c-u/.55),it(S)))}return y||(gt=!1,Lt=0),y}let hi=new zr,xn=new we;function Es(v){for(let u=v;u;u=u.parent)if(!u.visible)return!1;return!0}function Wn(v,u){if(!ue)return null;let y=n.domElement.getBoundingClientRect();xn.set((v-y.left)/y.width*2-1,-(u-y.top)/y.height*2+1),hi.setFromCamera(xn,o);let x=hi.intersectObject(ue,!0);for(let S of x)if(!(!Es(S.object)&&!(S.object.material&&S.object.material.visible===!1))){for(let _=S.object;_&&_!==ue;_=_.parent){if(_.userData&&_.userData.eq&&e.onEq)return{isEq:1,eq:_.userData.eq};if(_.userData&&_.userData.st)return _}if(!(S.object.isMesh&&S.object.material&&S.object.material.isShadowMaterial))return null}return null}let wt=null,bs={sp:"Sp\xFCle \xB7 antippen f\xFCr Becken & Armatur",kf:"Kochfeld \xB7 antippen f\xFCr Breite & Abzug",dh:"Dunstabzug \xB7 antippen f\xFCr die Bauform",bs:"K\xFCchenr\xFCckwand \xB7 antippen f\xFCr Material & Motiv",isl:"Kochinsel \xB7 antippen f\xFCr Kochfeld & Abzug"};if(!t){wt=document.createElement("div"),wt.setAttribute("aria-hidden","true"),wt.style.cssText="position:absolute;z-index:3;pointer-events:none;padding:6px 10px;border-radius:10px;background:rgba(24,22,20,.86);color:#fff;font:600 12px/1.3 system-ui,sans-serif;white-space:nowrap;opacity:0;transition:opacity .15s;transform:translate(-50%,-130%)",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(wt);let v=null,u=0;n.domElement.addEventListener("pointerdown",_=>{v={x:_.clientX,y:_.clientY,t:performance.now()}});let y=0,x=(_,N)=>{let B=_.userData,U=B.st.anims.length;return(B.label||"")+(B.wcm?" \xB7 "+B.wcm+" cm":"")+(U?N?B.st.t>.5?" \xB7 \xF6ffnet":" \xB7 schlie\xDFt":B.st.t>.5?" \xB7 klicken zum Schlie\xDFen":" \xB7 klicken zum \xD6ffnen":"")},S=(_,N,B,U)=>{let G=i.getBoundingClientRect();wt.textContent=x(_,U),wt.style.left=Math.max(70,Math.min(G.width-70,N-G.left))+"px",wt.style.top=Math.max(40,B-G.top)+"px",wt.style.opacity=1};n.domElement.addEventListener("pointerup",_=>{if(!v)return;let N=Math.hypot(_.clientX-v.x,_.clientY-v.y),B=performance.now()-v.t;if(v=null,N>6||B>600)return;let U=Wn(_.clientX,_.clientY);if(!U)return;if(U.isEq){wt.style.opacity=0,e.onEq(U.eq,_.clientX,_.clientY);return}if(_.pointerType!=="mouse"&&U.userData.label&&(S(U,_.clientX,_.clientY,!0),clearTimeout(y),y=setTimeout(()=>{wt.style.opacity=0,Q===String(U.userData.pid)&&(nt(null),e.onHover&&e.onHover(null))},1400),nt(U.userData.pid),e.onHover&&e.onHover(U.userData.pid)),!U.userData.st.anims.length)return;let G=String(U.userData.pid),K=!(U.userData.st.t>.5);if(K?le.add(G):le.delete(G),!K&&ne){ne=!1;for(let X in te)X!==G&&te[X].userData.st.t>.5&&le.add(X)}U.userData.st.go=0,Yt(U,K),e.onPick&&e.onPick(U.userData.pid,K),_.pointerType==="mouse"&&S(U,_.clientX,_.clientY)}),n.domElement.addEventListener("pointermove",_=>{if(_.pointerType!=="mouse"||_.buttons){wt.style.opacity=0;return}let N=performance.now();if(N-u<60)return;u=N;let B=Wn(_.clientX,_.clientY),U=B&&B.isEq?null:B;if(B&&B.isEq){let K=i.getBoundingClientRect();wt.textContent=bs[B.eq.k]||"",wt.style.left=Math.max(70,Math.min(K.width-70,_.clientX-K.left))+"px",wt.style.top=Math.max(40,_.clientY-K.top)+"px",wt.style.opacity=1,n.domElement.style.cursor="pointer"}else U&&U.userData.label?(S(U,_.clientX,_.clientY),n.domElement.style.cursor=U.userData.st.anims.length?"pointer":""):(wt.style.opacity=0,n.domElement.style.cursor="");let G=U?String(U.userData.pid):null;G!==Q&&(nt(G),e.onHover&&e.onHover(G))}),n.domElement.addEventListener("pointerleave",()=>{wt.style.opacity=0,Q!=null&&(nt(null),e.onHover&&e.onHover(null))})}function ws(v){if(M=0,g||p||!bt||!i.clientWidth)return;let u=!1;if(m&&Ge(v)&&(u=!0),a&&!l&&a.update()&&(u=!0),gt&&Ss(v)&&(u=!0),ce.length&&ht(v)&&(u=!0),u&&(d=!0),d){d=!1,u=!0;for(let y in j){let x=j[y].userData;j[y].visible=(o.position.x-x.p.x)*x.n[0]+(o.position.z-x.p.z)*x.n[1]>0}n.render(s,o)}u?b=0:b++,b<24&&!M&&(M=requestAnimationFrame(ws))}C();let Ts={set:Re,view:v=>{c=!1,Xe(v,!0)},mood:(v,u)=>{D=v,u?Re(u):I()},snapshot:()=>(n.render(s,o),n.domElement.toDataURL("image/jpeg",.9)),toggle:(v,u)=>{let y=te[v];if(!y||!y.userData.st.anims.length)return!1;let x=u==null?!(y.userData.st.t>.5):!!u;return x?le.add(String(v)):le.delete(String(v)),y.userData.st.go=0,Yt(y,x),x},openAll:v=>{ne=!!v,v||le.clear();let u=new O,y=Object.values(te).filter(_=>_.userData.st.anims.length).map(_=>(_.getWorldPosition(u),u.project(o),[u.x,_])).sort((_,N)=>ne?_[0]-N[0]:N[0]-_[0]),x=Math.min(.085,1.5/Math.max(1,y.length)),S=performance.now();return y.forEach(([,_],N)=>{let B=_.userData.st;B.go=Ms||(ne?B.c>.99:B.c<.01)?0:S+N*x*1e3,Yt(_,ne)}),ne},highlight:v=>{t||nt(v)},focus:v=>{let u=te[String(v)];if(!u||!a)return!1;let y=u.userData.hb||[.6,.8,.6,.45],x=u.rotation.y,S=new O(Math.sin(x),0,Math.cos(x)),_=new O(Math.cos(x),0,-Math.sin(x)),N=u.localToWorld(new O(0,y[3],0)).addScaledVector(S,y[3]<.7?.22:.1),B=Math.max(1.9,y[1]*1.1+y[0]*.9)*(o.aspect<1?1.5:1),U=N.clone().addScaledVector(S,B).addScaledVector(_,B*.34);return U.y=Math.max(1.35,N.y+(y[3]<.7?1:.2)),c=!0,Ms?(o.position.copy(U),a.target.copy(N),a.update(),f(),!0):(m={p0:o.position.clone(),p1:U,t0:a.target.clone(),t1:N,s:performance.now(),d:900},f(),!0)},isAllOpen:()=>ne,pause:v=>{p=!!v,v||f()},busy:()=>!!(M||gt||ce.length||m),camera:o,rig:Z,setPhoto:({pos:v,quat:u,fov:y})=>{v&&o.position.set(v[0],v[1],v[2]),u&&o.quaternion.set(u[0],u[1],u[2],u[3]),y&&(o.fov=y),o.updateProjectionMatrix(),o.updateMatrixWorld(),f()},lookAt:(v,u,y)=>{m=null,l=!0,o.position.set(v[0],v[1],v[2]),o.up.set(0,1,0),a&&a.target.set(u[0],u[1],u[2]),o.lookAt(u[0],u[1],u[2]),y&&(o.fov=y),o.updateProjectionMatrix(),o.updateMatrixWorld(),f()},setRig:({x:v=0,z:u=0,ry:y=0,s:x=1,cx:S=0,cz:_=0})=>{Z.position.set(S+v,0,_+u),Z.rotation.y=y,Z.scale.setScalar(x),re.position.set(-S,0,-_),f()},floorAt:(v,u)=>{xn.set(v,u),hi.setFromCamera(xn,o);let y=new O;return hi.ray.intersectPlane(new $t(new O(0,1,0),0),y)?{x:y.x,z:y.z}:null},exposure:v=>{ee=v,n.toneMappingExposure=v,f()},render:()=>{n.render(s,o)},capture:(v,u)=>{let y=n.getPixelRatio(),x=i.clientWidth,S=i.clientHeight;n.setPixelRatio(1),n.setSize(v,u,!1),o.aspect=v/u,o.updateProjectionMatrix(),n.render(s,o);let _=document.createElement("canvas");return _.width=v,_.height=u,_.getContext("2d").drawImage(n.domElement,0,0,v,u),n.setPixelRatio(y),n.setSize(x,S,!1),n.domElement.style.width=x+"px",n.domElement.style.height=S+"px",o.aspect=x/S,o.updateProjectionMatrix(),f(),_},renderHQ:(v=1600,u=1e3)=>{let y=Math.max(1,Math.min(2,4096/Math.max(v,u))),x=E.shadow.mapSize.x,S=U=>{E.shadow.mapSize.set(U,U),E.shadow.map&&(E.shadow.map.dispose(),E.shadow.map=null)};S(4096);let _;try{_=Ts.capture(Math.round(v*y),Math.round(u*y))}finally{S(x)}let N=document.createElement("canvas");N.width=v,N.height=u;let B=N.getContext("2d");return B.imageSmoothingEnabled=!0,B.imageSmoothingQuality="high",B.drawImage(_,0,0,v,u),f(),N},_rt:()=>({scene:s,cam:o,group:ue,wallGroups:j,M:De.m,state:Ae,room:Y,mood:D,H:2.6,renderer:n}),camInfo:()=>({pos:o.position.toArray(),target:a?a.target.toArray():o.getWorldDirection(new O).add(o.position).toArray(),fov:o.fov,aspect:o.aspect}),dispose:()=>{g=!0,ft.disconnect(),Nt.disconnect(),a&&a.dispose(),n.dispose();try{n.forceContextLoss()}catch{}n.domElement.remove(),wt&&wt.remove()}};return Ts}window.PelPlanner3D=window.PelPlanner3D||Bg;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
