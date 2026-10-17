(()=>{var ui={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},oh=0,Xa=1,ah=2;var Tc=1,Ca=2,An=3,qn=0,Gt=1,en=2;var Vn=0,Oi=1,qa=2,Ya=3,Za=4,lh=5,ei=100,ch=101,hh=102,Ja=103,Ka=104,uh=200,dh=201,fh=202,ph=203,ko=204,Vo=205,mh=206,gh=207,_h=208,xh=209,yh=210,vh=211,Mh=212,Eh=213,Sh=214,bh=0,wh=1,Th=2,hr=3,Ah=4,Rh=5,Ch=6,Ph=7,Ac=0,Ih=1,Lh=2,Gn=0,Dh=1,Uh=2,Nh=3,Pa=4,Oh=5,Fh=6;var Rc=300,Hi=301,ki=302,Go=303,Wo=304,Xr=306,ds=1e3,hn=1001,Xo=1002,Yt=1003,$a=1004;var so=1005;var nn=1006,Bh=1007;var fs=1008;var Wn=1009,zh=1010,Hh=1011,Ia=1012,Cc=1013,Hn=1014,kn=1015,ps=1016,Pc=1017,Ic=1018,ii=1020,kh=1021,un=1023,Vh=1024,Gh=1025,si=1026,Vi=1027,Wh=1028,Lc=1029,Xh=1030,Dc=1031,Uc=1033,ro=33776,oo=33777,ao=33778,lo=33779,ja=35840,Qa=35841,el=35842,tl=35843,Nc=36196,nl=37492,il=37496,sl=37808,rl=37809,ol=37810,al=37811,ll=37812,cl=37813,hl=37814,ul=37815,dl=37816,fl=37817,pl=37818,ml=37819,gl=37820,_l=37821,co=36492,xl=36494,yl=36495,qh=36283,vl=36284,Ml=36285,El=36286;var ur=2300,dr=2301,ho=2302,Sl=2400,bl=2401,wl=2402;var Oc=3e3,ri=3001,Yh=3200,Zh=3201,Fc=0,Jh=1,sn="",Rt="srgb",Cn="srgb-linear",La="display-p3",qr="display-p3-linear",fr="linear",Mt="srgb",pr="rec709",mr="p3";var gi=7680;var Tl=519,Kh=512,$h=513,jh=514,Bc=515,Qh=516,eu=517,tu=518,nu=519,Al=35044;var Rl="300 es",qo=1035,Rn=2e3,gr=2001,_n=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cl=1234567,Fi=Math.PI/180,ms=180/Math.PI;function fi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function Da(i,e){return(i%e+e)%e}function iu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function su(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function ru(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function ou(i,e=1){return e-Math.abs(Da(i,e*2)-e)}function au(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function lu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hu(i,e){return i+Math.random()*(e-i)}function uu(i){return i*(.5-Math.random())}function du(i){i!==void 0&&(Cl=i);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fu(i){return i*Fi}function pu(i){return i*ms}function Yo(i){return(i&i-1)===0&&i!==0}function mu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function _r(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),d=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),y=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*d,l*p,o*c);break;case"YZY":i.set(l*p,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*p,o*u,o*c);break;case"XZX":i.set(o*u,l*y,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*y,o*c);break;case"ZYZ":i.set(l*y,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Li(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var zc={DEG2RAD:Fi,RAD2DEG:ms,generateUUID:fi,clamp:Dt,euclideanModulo:Da,mapLinear:iu,inverseLerp:su,lerp:as,damp:ru,pingpong:ou,smoothstep:au,smootherstep:lu,randInt:cu,randFloat:hu,randFloatSpread:uu,seededRandom:du,degToRad:fu,radToDeg:pu,isPowerOfTwo:Yo,ceilPowerOfTwo:mu,floorPowerOfTwo:_r,setQuaternionFromProperEuler:gu,normalize:Xt,denormalize:Li},we=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ut=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],m=n[5],y=n[8],b=s[0],g=s[3],f=s[6],w=s[1],v=s[4],I=s[7],k=s[2],U=s[5],N=s[8];return r[0]=a*b+o*w+l*k,r[3]=a*g+o*v+l*U,r[6]=a*f+o*I+l*N,r[1]=c*b+u*w+d*k,r[4]=c*g+u*v+d*U,r[7]=c*f+u*I+d*N,r[2]=p*b+m*w+y*k,r[5]=p*g+m*v+y*U,r[8]=p*f+m*I+y*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*r,m=c*r-a*l,y=t*d+n*p+s*m;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/y;return e[0]=d*b,e[1]=(s*c-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=p*b,e[4]=(u*t-s*l)*b,e[5]=(s*r-o*t)*b,e[6]=m*b,e[7]=(n*l-c*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uo=new ut;function Hc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _u(){let i=xr("canvas");return i.style.display="block",i}var Pl={};function ls(i){i in Pl||(Pl[i]=!0,console.warn(i))}var Il=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Cn]:{transfer:fr,primaries:pr,toReference:i=>i,fromReference:i=>i},[Rt]:{transfer:Mt,primaries:pr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[qr]:{transfer:fr,primaries:mr,toReference:i=>i.applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Il)},[La]:{transfer:Mt,primaries:mr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Il).convertLinearToSRGB()}},xu=new Set([Cn,qr]),yt={enabled:!0,_workingColorSpace:Cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!xu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Us[e].toReference,s=Us[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Us[i].primaries},getTransfer:function(i){return i===sn?fr:Us[i].transfer}};function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var _i,yr=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_i===void 0&&(_i=xr("canvas")),_i.width=e.width,_i.height=e.height;let n=_i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yu=0,vr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=fi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(po(s[a].image)):r.push(po(s[a]))}else r=po(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vu=0,rn=class i extends _n{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hn,s=hn,r=nn,a=fs,o=un,l=Wn,c=i.DEFAULT_ANISOTROPY,u=sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vu++}),this.uuid=fi(),this.name="",this.source=new vr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ri?Rt:sn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ds:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ds:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Rt?ri:Oc}set encoding(e){ls("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ri?Rt:sn}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Rc;rn.DEFAULT_ANISOTROPY=1;var St=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],y=l[9],b=l[2],g=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-b)<.01&&Math.abs(y-g)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+b)<.1&&Math.abs(y+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,I=(m+1)/2,k=(f+1)/2,U=(u+p)/4,N=(d+b)/4,Q=(y+g)/4;return v>I&&v>k?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=U/n,r=N/n):I>k?I<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(I),n=U/s,r=Q/s):k<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(k),n=N/r,s=Q/r),this.set(n,s,r,t),this}let w=Math.sqrt((g-y)*(g-y)+(d-b)*(d-b)+(p-u)*(p-u));return Math.abs(w)<.001&&(w=1),this.x=(g-y)/w,this.y=(d-b)/w,this.z=(p-u)/w,this.w=Math.acos((c+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zo=class extends _n{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);let s={width:e,height:t,depth:1};n.encoding!==void 0&&(ls("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ri?Rt:sn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new vr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Zo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mr=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jo=class extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],p=r[a+0],m=r[a+1],y=r[a+2],b=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=y,e[t+3]=b;return}if(d!==b||l!==p||c!==m||u!==y){let g=1-o,f=l*p+c*m+u*y+d*b,w=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){let k=Math.sqrt(v),U=Math.atan2(k,f*w);g=Math.sin(g*U)/k,o=Math.sin(o*U)/k}let I=o*w;if(l=l*g+p*I,c=c*g+m*I,u=u*g+y*I,d=d*g+b*I,g===1-o){let k=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=k,c*=k,u*=k,d*=k}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],p=r[a+1],m=r[a+2],y=r[a+3];return e[t]=o*y+u*d+l*m-c*p,e[t+1]=l*y+u*p+c*d-o*m,e[t+2]=c*y+u*m+o*p-l*d,e[t+3]=u*y-o*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),p=l(n/2),m=l(s/2),y=l(r/2);switch(a){case"XYZ":this._x=p*u*d+c*m*y,this._y=c*m*d-p*u*y,this._z=c*u*y+p*m*d,this._w=c*u*d-p*m*y;break;case"YXZ":this._x=p*u*d+c*m*y,this._y=c*m*d-p*u*y,this._z=c*u*y-p*m*d,this._w=c*u*d+p*m*y;break;case"ZXY":this._x=p*u*d-c*m*y,this._y=c*m*d+p*u*y,this._z=c*u*y+p*m*d,this._w=c*u*d-p*m*y;break;case"ZYX":this._x=p*u*d-c*m*y,this._y=c*m*d+p*u*y,this._z=c*u*y-p*m*d,this._w=c*u*d+p*m*y;break;case"YZX":this._x=p*u*d+c*m*y,this._y=c*m*d+p*u*y,this._z=c*u*y-p*m*d,this._w=c*u*d-p*m*y;break;case"XZY":this._x=p*u*d-c*m*y,this._y=c*m*d-p*u*y,this._z=c*u*y+p*m*d,this._w=c*u*d+p*m*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mo.copy(this).projectOnVector(e),this.sub(mo)}reflect(e){return this.sub(mo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mo=new L,Dl=new dn,oi=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(r,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ns),Os.subVectors(this.max,ns),xi.subVectors(e.a,ns),yi.subVectors(e.b,ns),vi.subVectors(e.c,ns),Nn.subVectors(yi,xi),On.subVectors(vi,yi),Jn.subVectors(xi,vi);let t=[0,-Nn.z,Nn.y,0,-On.z,On.y,0,-Jn.z,Jn.y,Nn.z,0,-Nn.x,On.z,0,-On.x,Jn.z,0,-Jn.x,-Nn.y,Nn.x,0,-On.y,On.x,0,-Jn.y,Jn.x,0];return!go(t,xi,yi,vi,Os)||(t=[1,0,0,0,1,0,0,0,1],!go(t,xi,yi,vi,Os))?!1:(Fs.crossVectors(Nn,On),t=[Fs.x,Fs.y,Fs.z],go(t,xi,yi,vi,Os))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},En=[new L,new L,new L,new L,new L,new L,new L,new L],an=new L,Ns=new oi,xi=new L,yi=new L,vi=new L,Nn=new L,On=new L,Jn=new L,ns=new L,Os=new L,Fs=new L,Kn=new L;function go(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Kn.fromArray(i,r);let o=s.x*Math.abs(Kn.x)+s.y*Math.abs(Kn.y)+s.z*Math.abs(Kn.z),l=e.dot(Kn),c=t.dot(Kn),u=n.dot(Kn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Mu=new oi,is=new L,_o=new L,Gi=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;is.subVectors(e,this.center);let t=is.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(is,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(is.copy(e.center).add(_o)),this.expandByPoint(is.copy(e.center).sub(_o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Sn=new L,xo=new L,Bs=new L,Fn=new L,yo=new L,zs=new L,vo=new L,ai=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xo.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(xo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Bs),o=Fn.dot(this.direction),l=-Fn.dot(Bs),c=Fn.lengthSq(),u=Math.abs(1-a*a),d,p,m,y;if(u>0)if(d=a*l-o,p=a*o-l,y=r*u,d>=0)if(p>=-y)if(p<=y){let b=1/u;d*=b,p*=b,m=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p<=-y?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=y?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(xo).addScaledVector(Bs,p),m}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);let n=Sn.dot(this.direction),s=Sn.dot(Sn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,s,r){yo.subVectors(t,e),zs.subVectors(n,e),vo.crossVectors(yo,zs);let a=this.direction.dot(vo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Fn.subVectors(this.origin,e);let l=o*this.direction.dot(zs.crossVectors(Fn,zs));if(l<0)return null;let c=o*this.direction.dot(yo.cross(Fn));if(c<0||l+c>a)return null;let u=-o*Fn.dot(vo);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(e,t,n,s,r,a,o,l,c,u,d,p,m,y,b,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,p,m,y,b,g)}set(e,t,n,s,r,a,o,l,c,u,d,p,m,y,b,g){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=m,f[7]=y,f[11]=b,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Mi.setFromMatrixColumn(e,0).length(),r=1/Mi.setFromMatrixColumn(e,1).length(),a=1/Mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let p=a*u,m=a*d,y=o*u,b=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+y*c,t[5]=p-b*c,t[9]=-o*l,t[2]=b-p*c,t[6]=y+m*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*u,m=l*d,y=c*u,b=c*d;t[0]=p+b*o,t[4]=y*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-y,t[6]=b+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*u,m=l*d,y=c*u,b=c*d;t[0]=p-b*o,t[4]=-a*d,t[8]=y+m*o,t[1]=m+y*o,t[5]=a*u,t[9]=b-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*u,m=a*d,y=o*u,b=o*d;t[0]=l*u,t[4]=y*c-m,t[8]=p*c+b,t[1]=l*d,t[5]=b*c+p,t[9]=m*c-y,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,m=a*c,y=o*l,b=o*c;t[0]=l*u,t[4]=b-p*d,t[8]=y*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+y,t[10]=p-b*d}else if(e.order==="XZY"){let p=a*l,m=a*c,y=o*l,b=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+b,t[5]=a*u,t[9]=m*d-y,t[2]=y*d-m,t[6]=o*u,t[10]=b*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eu,e,Su)}lookAt(e,t,n){let s=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Bn.crossVectors(n,$t),Bn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Bn.crossVectors(n,$t)),Bn.normalize(),Hs.crossVectors($t,Bn),s[0]=Bn.x,s[4]=Hs.x,s[8]=$t.x,s[1]=Bn.y,s[5]=Hs.y,s[9]=$t.y,s[2]=Bn.z,s[6]=Hs.z,s[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],m=n[13],y=n[2],b=n[6],g=n[10],f=n[14],w=n[3],v=n[7],I=n[11],k=n[15],U=s[0],N=s[4],Q=s[8],P=s[12],R=s[1],Z=s[5],ce=s[9],xe=s[13],z=s[2],Y=s[6],te=s[10],de=s[14],ne=s[3],ae=s[7],me=s[11],pe=s[15];return r[0]=a*U+o*R+l*z+c*ne,r[4]=a*N+o*Z+l*Y+c*ae,r[8]=a*Q+o*ce+l*te+c*me,r[12]=a*P+o*xe+l*de+c*pe,r[1]=u*U+d*R+p*z+m*ne,r[5]=u*N+d*Z+p*Y+m*ae,r[9]=u*Q+d*ce+p*te+m*me,r[13]=u*P+d*xe+p*de+m*pe,r[2]=y*U+b*R+g*z+f*ne,r[6]=y*N+b*Z+g*Y+f*ae,r[10]=y*Q+b*ce+g*te+f*me,r[14]=y*P+b*xe+g*de+f*pe,r[3]=w*U+v*R+I*z+k*ne,r[7]=w*N+v*Z+I*Y+k*ae,r[11]=w*Q+v*ce+I*te+k*me,r[15]=w*P+v*xe+I*de+k*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],y=e[3],b=e[7],g=e[11],f=e[15];return y*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*m-n*l*m)+b*(+t*l*m-t*c*p+r*a*p-s*a*m+s*c*u-r*l*u)+g*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+f*(-s*o*u-t*l*d+t*o*p+s*a*d-n*a*p+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],y=e[12],b=e[13],g=e[14],f=e[15],w=d*g*c-b*p*c+b*l*m-o*g*m-d*l*f+o*p*f,v=y*p*c-u*g*c-y*l*m+a*g*m+u*l*f-a*p*f,I=u*b*c-y*d*c+y*o*m-a*b*m-u*o*f+a*d*f,k=y*d*l-u*b*l-y*o*p+a*b*p+u*o*g-a*d*g,U=t*w+n*v+s*I+r*k;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/U;return e[0]=w*N,e[1]=(b*p*r-d*g*r-b*s*m+n*g*m+d*s*f-n*p*f)*N,e[2]=(o*g*r-b*l*r+b*s*c-n*g*c-o*s*f+n*l*f)*N,e[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*m-n*l*m)*N,e[4]=v*N,e[5]=(u*g*r-y*p*r+y*s*m-t*g*m-u*s*f+t*p*f)*N,e[6]=(y*l*r-a*g*r-y*s*c+t*g*c+a*s*f-t*l*f)*N,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*m+t*l*m)*N,e[8]=I*N,e[9]=(y*d*r-u*b*r-y*n*m+t*b*m+u*n*f-t*d*f)*N,e[10]=(a*b*r-y*o*r+y*n*c-t*b*c-a*n*f+t*o*f)*N,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*m-t*o*m)*N,e[12]=k*N,e[13]=(u*b*s-y*d*s+y*n*p-t*b*p-u*n*g+t*d*g)*N,e[14]=(y*o*s-a*b*s-y*n*l+t*b*l+a*n*g-t*o*g)*N,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*p+t*o*p)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,p=r*c,m=r*u,y=r*d,b=a*u,g=a*d,f=o*d,w=l*c,v=l*u,I=l*d,k=n.x,U=n.y,N=n.z;return s[0]=(1-(b+f))*k,s[1]=(m+I)*k,s[2]=(y-v)*k,s[3]=0,s[4]=(m-I)*U,s[5]=(1-(p+f))*U,s[6]=(g+w)*U,s[7]=0,s[8]=(y+v)*N,s[9]=(g-w)*N,s[10]=(1-(p+b))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Mi.set(s[0],s[1],s[2]).length(),a=Mi.set(s[4],s[5],s[6]).length(),o=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],ln.copy(this);let c=1/r,u=1/a,d=1/o;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=d,ln.elements[9]*=d,ln.elements[10]*=d,t.setFromRotationMatrix(ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Rn){let l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),m,y;if(o===Rn)m=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===gr)m=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Rn){let l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),p=(t+e)*c,m=(n+s)*u,y,b;if(o===Rn)y=(a+r)*d,b=-2*d;else if(o===gr)y=r*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=b,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Mi=new L,ln=new wt,Eu=new L(0,0,0),Su=new L(1,1,1),Bn=new L,Hs=new L,$t=new L,Ul=new wt,Nl=new dn,Wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nl.setFromEuler(this),this.setFromQuaternion(Nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wi.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bu=0,Ol=new L,Ei=new dn,bn=new wt,ks=new L,ss=new L,wu=new L,Tu=new dn,Fl=new L(1,0,0),Bl=new L(0,1,0),zl=new L(0,0,1),Au={type:"added"},Ru={type:"removed"},Wt=class i extends _n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new L,t=new Wi,n=new dn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new ut}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.multiply(Ei),this}rotateOnWorldAxis(e,t){return Ei.setFromAxisAngle(e,t),this.quaternion.premultiply(Ei),this}rotateX(e){return this.rotateOnAxis(Fl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return Ol.copy(e).applyQuaternion(this.quaternion),this.position.add(Ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ks.copy(e):ks.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(ss,ks,this.up):bn.lookAt(ks,ss,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ei.setFromRotationMatrix(bn),this.quaternion.premultiply(Ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Au)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ru)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(bn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,e,wu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ss,Tu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),m=a(e.animations),y=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Wt.DEFAULT_UP=new L(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new L,wn=new L,Mo=new L,Tn=new L,Si=new L,bi=new L,Hl=new L,Eo=new L,So=new L,bo=new L,Vs=!1,ni=class i{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),cn.subVectors(e,t),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){cn.subVectors(s,t),wn.subVectors(n,t),Mo.subVectors(e,t);let a=cn.dot(cn),o=cn.dot(wn),l=cn.dot(Mo),c=wn.dot(wn),u=wn.dot(Mo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let p=1/d,m=(c*l-o*u)*p,y=(a*u-o*l)*p;return r.set(1-m-y,y,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getUV(e,t,n,s,r,a,o,l){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),this.getInterpolation(e,t,n,s,r,a,o,l)}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Tn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Tn.x),l.addScaledVector(a,Tn.y),l.addScaledVector(o,Tn.z),l)}static isFrontFacing(e,t,n,s){return cn.subVectors(n,t),wn.subVectors(e,t),cn.cross(wn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),cn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,r){return Vs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Vs=!0),i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Si.subVectors(s,n),bi.subVectors(r,n),Eo.subVectors(e,n);let l=Si.dot(Eo),c=bi.dot(Eo);if(l<=0&&c<=0)return t.copy(n);So.subVectors(e,s);let u=Si.dot(So),d=bi.dot(So);if(u>=0&&d<=u)return t.copy(s);let p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Si,a);bo.subVectors(e,r);let m=Si.dot(bo),y=bi.dot(bo);if(y>=0&&m<=y)return t.copy(r);let b=m*c-l*y;if(b<=0&&c>=0&&y<=0)return o=c/(c-y),t.copy(n).addScaledVector(bi,o);let g=u*y-m*d;if(g<=0&&d-u>=0&&m-y>=0)return Hl.subVectors(r,s),o=(d-u)/(d-u+(m-y)),t.copy(s).addScaledVector(Hl,o);let f=1/(g+b+p);return a=b*f,o=p*f,t.copy(n).addScaledVector(Si,a).addScaledVector(bi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Gs={h:0,s:0,l:0};function wo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var it=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=yt.workingColorSpace){if(e=Da(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wo(a,r,e+1/3),this.g=wo(a,r,e),this.b=wo(a,r,e-1/3)}return yt.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return yt.fromWorkingColorSpace(kt.copy(this),e),Math.round(Dt(kt.r*255,0,255))*65536+Math.round(Dt(kt.g*255,0,255))*256+Math.round(Dt(kt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(kt.copy(this),t);let n=kt.r,s=kt.g,r=kt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Rt){yt.fromWorkingColorSpace(kt.copy(this),e);let t=kt.r,n=kt.g,s=kt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(zn),this.setHSL(zn.h+e,zn.s+t,zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(zn),e.getHSL(Gs);let n=as(zn.h,Gs.h,t),s=as(zn.s,Gs.s,t),r=as(zn.l,Gs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},kt=new it;it.NAMES=kc;var Cu=0,In=class extends _n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Oi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Vo,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(n.blending=this.blending),this.side!==qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Vo&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Zt=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Pt=new L,Ws=new we,Kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Al,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),n=Xt(n,this.array),s=Xt(s,this.array),r=Xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Al&&(e.usage=this.usage),e}};var Er=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Sr=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Pu=0,tn=new wt,To=new Wt,wi=new L,jt=new oi,rs=new oi,Bt=new L,Ut=class i extends _n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hc(e)?Sr:Er)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ut().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new dt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(jt.min,rs.min),jt.expandByPoint(Bt),Bt.addVectors(jt.max,rs.max),jt.expandByPoint(Bt)):(jt.expandByPoint(rs.min),jt.expandByPoint(rs.max))}jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Bt.fromBufferAttribute(o,c),l&&(wi.fromBufferAttribute(e,c),Bt.add(wi)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<o;R++)c[R]=new L,u[R]=new L;let d=new L,p=new L,m=new L,y=new we,b=new we,g=new we,f=new L,w=new L;function v(R,Z,ce){d.fromArray(s,R*3),p.fromArray(s,Z*3),m.fromArray(s,ce*3),y.fromArray(a,R*2),b.fromArray(a,Z*2),g.fromArray(a,ce*2),p.sub(d),m.sub(d),b.sub(y),g.sub(y);let xe=1/(b.x*g.y-g.x*b.y);isFinite(xe)&&(f.copy(p).multiplyScalar(g.y).addScaledVector(m,-b.y).multiplyScalar(xe),w.copy(m).multiplyScalar(b.x).addScaledVector(p,-g.x).multiplyScalar(xe),c[R].add(f),c[Z].add(f),c[ce].add(f),u[R].add(w),u[Z].add(w),u[ce].add(w))}let I=this.groups;I.length===0&&(I=[{start:0,count:n.length}]);for(let R=0,Z=I.length;R<Z;++R){let ce=I[R],xe=ce.start,z=ce.count;for(let Y=xe,te=xe+z;Y<te;Y+=3)v(n[Y+0],n[Y+1],n[Y+2])}let k=new L,U=new L,N=new L,Q=new L;function P(R){N.fromArray(r,R*3),Q.copy(N);let Z=c[R];k.copy(Z),k.sub(N.multiplyScalar(N.dot(Z))).normalize(),U.crossVectors(Q,Z);let xe=U.dot(u[R])<0?-1:1;l[R*4]=k.x,l[R*4+1]=k.y,l[R*4+2]=k.z,l[R*4+3]=xe}for(let R=0,Z=I.length;R<Z;++R){let ce=I[R],xe=ce.start,z=ce.count;for(let Y=xe,te=xe+z;Y<te;Y+=3)P(n[Y+0]),P(n[Y+1]),P(n[Y+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let p=0,m=e.count;p<m;p+=3){let y=e.getX(p+0),b=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u),m=0,y=0;for(let b=0,g=l.length;b<g;b++){o.isInterleavedBufferAttribute?m=l[b]*o.data.stride+o.offset:m=l[b]*u;for(let f=0;f<u;f++)p[y++]=c[m++]}return new Kt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let p=c[u],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){let m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],d=r[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kl=new wt,$n=new ai,Xs=new Gi,Vl=new L,Ti=new L,Ai=new L,Ri=new L,Ao=new L,qs=new L,Ys=new we,Zs=new we,Js=new we,Gl=new L,Wl=new L,Xl=new L,Ks=new L,$s=new L,Ke=class extends Wt{constructor(e=new Ut,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){qs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(Ao.fromBufferAttribute(d,e),a?qs.addScaledVector(Ao,u):qs.addScaledVector(Ao.sub(t),u))}t.add(qs)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(Xs.containsPoint($n.origin)===!1&&($n.intersectSphere(Xs,Vl)===null||$n.origin.distanceToSquared(Vl)>(e.far-e.near)**2))&&(kl.copy(r).invert(),$n.copy(e.ray).applyMatrix4(kl),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,b=p.length;y<b;y++){let g=p[y],f=a[g.materialIndex],w=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let I=w,k=v;I<k;I+=3){let U=o.getX(I),N=o.getX(I+1),Q=o.getX(I+2);s=js(this,f,e,n,c,u,d,U,N,Q),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),b=Math.min(o.count,m.start+m.count);for(let g=y,f=b;g<f;g+=3){let w=o.getX(g),v=o.getX(g+1),I=o.getX(g+2);s=js(this,a,e,n,c,u,d,w,v,I),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,b=p.length;y<b;y++){let g=p[y],f=a[g.materialIndex],w=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let I=w,k=v;I<k;I+=3){let U=I,N=I+1,Q=I+2;s=js(this,f,e,n,c,u,d,U,N,Q),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let y=Math.max(0,m.start),b=Math.min(l.count,m.start+m.count);for(let g=y,f=b;g<f;g+=3){let w=g,v=g+1,I=g+2;s=js(this,a,e,n,c,u,d,w,v,I),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Iu(i,e,t,n,s,r,a,o){let l;if(e.side===Gt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qn,o),l===null)return null;$s.copy(o),$s.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($s);return c<t.near||c>t.far?null:{distance:c,point:$s.clone(),object:i}}function js(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ti),i.getVertexPosition(l,Ai),i.getVertexPosition(c,Ri);let u=Iu(i,e,t,n,Ti,Ai,Ri,Ks);if(u){s&&(Ys.fromBufferAttribute(s,o),Zs.fromBufferAttribute(s,l),Js.fromBufferAttribute(s,c),u.uv=ni.getInterpolation(Ks,Ti,Ai,Ri,Ys,Zs,Js,new we)),r&&(Ys.fromBufferAttribute(r,o),Zs.fromBufferAttribute(r,l),Js.fromBufferAttribute(r,c),u.uv1=ni.getInterpolation(Ks,Ti,Ai,Ri,Ys,Zs,Js,new we),u.uv2=u.uv1),a&&(Gl.fromBufferAttribute(a,o),Wl.fromBufferAttribute(a,l),Xl.fromBufferAttribute(a,c),u.normal=ni.getInterpolation(Ks,Ti,Ai,Ri,Gl,Wl,Xl,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new L,materialIndex:0};ni.getNormal(Ti,Ai,Ri,d.normal),u.face=d}return u}var zt=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],p=0,m=0;y("z","y","x",-1,-1,n,t,e,a,r,0),y("z","y","x",1,-1,n,t,-e,a,r,1),y("x","z","y",1,1,e,n,t,s,a,2),y("x","z","y",1,-1,e,n,-t,s,a,3),y("x","y","z",1,-1,e,t,n,s,r,4),y("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(u,3)),this.setAttribute("uv",new dt(d,2));function y(b,g,f,w,v,I,k,U,N,Q,P){let R=I/N,Z=k/Q,ce=I/2,xe=k/2,z=U/2,Y=N+1,te=Q+1,de=0,ne=0,ae=new L;for(let me=0;me<te;me++){let pe=me*Z-xe;for(let Le=0;Le<Y;Le++){let $=Le*R-ce;ae[b]=$*w,ae[g]=pe*v,ae[f]=z,c.push(ae.x,ae.y,ae.z),ae[b]=0,ae[g]=0,ae[f]=U>0?1:-1,u.push(ae.x,ae.y,ae.z),d.push(Le/N),d.push(1-me/Q),de+=1}}for(let me=0;me<Q;me++)for(let pe=0;pe<N;pe++){let Le=p+pe+Y*me,$=p+pe+Y*(me+1),_e=p+(pe+1)+Y*(me+1),ze=p+(pe+1)+Y*me;l.push(Le,$,ze),l.push($,_e,ze),ne+=6}o.addGroup(m,ne,P),m+=ne,p+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Xi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function qt(i){let e={};for(let t=0;t<i.length;t++){let n=Xi(i[t]);for(let s in n)e[s]=n[s]}return e}function Lu(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vc(i){return i.getRenderTarget()===null?i.outputColorSpace:yt.workingColorSpace}var Du={clone:Xi,merge:qt},Uu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uu,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xi(e.uniforms),this.uniformsGroups=Lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},br=class extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vt=class extends br{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ci=-90,Pi=1,Ko=class extends Wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Ci,Pi,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Ci,Pi,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Ci,Pi,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Ci,Pi,e,t);o.layers=this.layers,this.add(o);let l=new Vt(Ci,Pi,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Ci,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},wr=class extends rn{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Hi,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$o=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(ls("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ri?Rt:sn),this.texture=new wr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gt,blending:Vn});r.uniforms.tEquirect.value=t;let a=new Ke(s,r),o=t.minFilter;return t.minFilter===fs&&(t.minFilter=nn),new Ko(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ro=new L,Ou=new L,Fu=new ut,Qt=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ro.subVectors(n,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ro),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Fu.getNormalMatrix(e),s=this.coplanarPoint(Ro).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},jn=new Gi,Qs=new L,_s=class{constructor(e=new Qt,t=new Qt,n=new Qt,s=new Qt,r=new Qt,a=new Qt){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],p=s[7],m=s[8],y=s[9],b=s[10],g=s[11],f=s[12],w=s[13],v=s[14],I=s[15];if(n[0].setComponents(l-r,p-c,g-m,I-f).normalize(),n[1].setComponents(l+r,p+c,g+m,I+f).normalize(),n[2].setComponents(l+a,p+u,g+y,I+w).normalize(),n[3].setComponents(l-a,p-u,g-y,I-w).normalize(),n[4].setComponents(l-o,p-d,g-b,I-v).normalize(),t===Rn)n[5].setComponents(l+o,p+d,g+b,I+v).normalize();else if(t===gr)n[5].setComponents(o,d,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qs.x=s.normal.x>0?e.max.x:e.min.x,Qs.y=s.normal.y>0?e.max.y:e.min.y,Qs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Gc(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bu(i,e){let t=e.isWebGL2,n=new WeakMap;function s(c,u){let d=c.array,p=c.usage,m=d.byteLength,y=i.createBuffer();i.bindBuffer(u,y),i.bufferData(u,d,p),c.onUploadCallback();let b;if(d instanceof Float32Array)b=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)b=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)b=i.SHORT;else if(d instanceof Uint32Array)b=i.UNSIGNED_INT;else if(d instanceof Int32Array)b=i.INT;else if(d instanceof Int8Array)b=i.BYTE;else if(d instanceof Uint8Array)b=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)b=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:y,type:b,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,d){let p=u.array,m=u._updateRange,y=u.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&y.length===0&&i.bufferSubData(d,0,p),y.length!==0){for(let b=0,g=y.length;b<g;b++){let f=y[b];t?i.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(d,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){let p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=n.get(c);if(d===void 0)n.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}var xn=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,p=t/l,m=[],y=[],b=[],g=[];for(let f=0;f<u;f++){let w=f*p-a;for(let v=0;v<c;v++){let I=v*d-r;y.push(I,-w,0),b.push(0,0,1),g.push(v/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<o;w++){let v=w+c*f,I=w+c*(f+1),k=w+1+c*(f+1),U=w+1+c*f;m.push(v,I,U),m.push(I,k,U)}this.setIndex(m),this.setAttribute("position",new dt(y,3)),this.setAttribute("normal",new dt(b,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},zu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hu=`#ifdef USE_ALPHAHASH
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
#endif`,ku=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xu=`#ifdef USE_AOMAP
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
#endif`,qu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yu=`#ifdef USE_BATCHING
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
#endif`,Zu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$u=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ju=`#ifdef USE_IRIDESCENCE
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
#endif`,Qu=`#ifdef USE_BUMPMAP
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
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ld=`#define PI 3.141592653589793
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
} // validated`,cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hd=`vec3 transformedNormal = objectNormal;
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
#endif`,ud=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,md="gl_FragColor = linearToOutputTexel( gl_FragColor );",gd=`
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
}`,_d=`#ifdef USE_ENVMAP
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
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Td=`#ifdef USE_GRADIENTMAP
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
}`,Ad=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Rd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Id=`uniform bool receiveShadow;
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
#endif`,Ld=`#ifdef USE_ENVMAP
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
#endif`,Dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
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
#endif`,Bd=`struct PhysicalMaterial {
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
}`,zd=`
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,kd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jd=`#if defined( USE_POINTS_UV )
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
#endif`,Kd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$d=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qd=`#ifdef USE_MORPHNORMALS
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
#endif`,ef=`#ifdef USE_MORPHTARGETS
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
#endif`,tf=`#ifdef USE_MORPHTARGETS
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
#endif`,nf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lf=`#ifdef USE_NORMALMAP
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
#endif`,cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ff=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bf=`float getShadowMask() {
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
}`,wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tf=`#ifdef USE_SKINNING
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
#endif`,Af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,Cf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,If=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Df=`#ifdef USE_TRANSMISSION
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
#endif`,Uf=`#ifdef USE_TRANSMISSION
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
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`#include <common>
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
}`,qf=`#if DEPTH_PACKING == 3200
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
}`,Yf=`#define DISTANCE
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
}`,Zf=`#define DISTANCE
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$f=`uniform float scale;
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
}`,jf=`uniform vec3 diffuse;
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
}`,Qf=`#include <common>
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
}`,ep=`uniform vec3 diffuse;
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
}`,tp=`#define LAMBERT
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
}`,np=`#define LAMBERT
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
}`,ip=`#define MATCAP
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
}`,sp=`#define MATCAP
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
}`,rp=`#define NORMAL
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
}`,op=`#define NORMAL
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
}`,ap=`#define PHONG
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
}`,lp=`#define PHONG
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
}`,cp=`#define STANDARD
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
}`,hp=`#define STANDARD
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
}`,up=`#define TOON
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
}`,dp=`#define TOON
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
}`,fp=`uniform float size;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 color;
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
}`,_p=`uniform float rotation;
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
}`,xp=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:zu,alphahash_pars_fragment:Hu,alphamap_fragment:ku,alphamap_pars_fragment:Vu,alphatest_fragment:Gu,alphatest_pars_fragment:Wu,aomap_fragment:Xu,aomap_pars_fragment:qu,batching_pars_vertex:Yu,batching_vertex:Zu,begin_vertex:Ju,beginnormal_vertex:Ku,bsdfs:$u,iridescence_fragment:ju,bumpmap_pars_fragment:Qu,clipping_planes_fragment:ed,clipping_planes_pars_fragment:td,clipping_planes_pars_vertex:nd,clipping_planes_vertex:id,color_fragment:sd,color_pars_fragment:rd,color_pars_vertex:od,color_vertex:ad,common:ld,cube_uv_reflection_fragment:cd,defaultnormal_vertex:hd,displacementmap_pars_vertex:ud,displacementmap_vertex:dd,emissivemap_fragment:fd,emissivemap_pars_fragment:pd,colorspace_fragment:md,colorspace_pars_fragment:gd,envmap_fragment:_d,envmap_common_pars_fragment:xd,envmap_pars_fragment:yd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Ld,envmap_vertex:Md,fog_vertex:Ed,fog_pars_vertex:Sd,fog_fragment:bd,fog_pars_fragment:wd,gradientmap_pars_fragment:Td,lightmap_fragment:Ad,lightmap_pars_fragment:Rd,lights_lambert_fragment:Cd,lights_lambert_pars_fragment:Pd,lights_pars_begin:Id,lights_toon_fragment:Dd,lights_toon_pars_fragment:Ud,lights_phong_fragment:Nd,lights_phong_pars_fragment:Od,lights_physical_fragment:Fd,lights_physical_pars_fragment:Bd,lights_fragment_begin:zd,lights_fragment_maps:Hd,lights_fragment_end:kd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Wd,logdepthbuf_vertex:Xd,map_fragment:qd,map_pars_fragment:Yd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:Kd,metalnessmap_pars_fragment:$d,morphcolor_vertex:jd,morphnormal_vertex:Qd,morphtarget_pars_vertex:ef,morphtarget_vertex:tf,normal_fragment_begin:nf,normal_fragment_maps:sf,normal_pars_fragment:rf,normal_pars_vertex:of,normal_vertex:af,normalmap_pars_fragment:lf,clearcoat_normal_fragment_begin:cf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:uf,iridescence_pars_fragment:df,opaque_fragment:ff,packing:pf,premultiplied_alpha_fragment:mf,project_vertex:gf,dithering_fragment:_f,dithering_pars_fragment:xf,roughnessmap_fragment:yf,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:Ef,shadowmap_vertex:Sf,shadowmask_pars_fragment:bf,skinbase_vertex:wf,skinning_pars_vertex:Tf,skinning_vertex:Af,skinnormal_vertex:Rf,specularmap_fragment:Cf,specularmap_pars_fragment:Pf,tonemapping_fragment:If,tonemapping_pars_fragment:Lf,transmission_fragment:Df,transmission_pars_fragment:Uf,uv_pars_fragment:Nf,uv_pars_vertex:Of,uv_vertex:Ff,worldpos_vertex:Bf,background_vert:zf,background_frag:Hf,backgroundCube_vert:kf,backgroundCube_frag:Vf,cube_vert:Gf,cube_frag:Wf,depth_vert:Xf,depth_frag:qf,distanceRGBA_vert:Yf,distanceRGBA_frag:Zf,equirect_vert:Jf,equirect_frag:Kf,linedashed_vert:$f,linedashed_frag:jf,meshbasic_vert:Qf,meshbasic_frag:ep,meshlambert_vert:tp,meshlambert_frag:np,meshmatcap_vert:ip,meshmatcap_frag:sp,meshnormal_vert:rp,meshnormal_frag:op,meshphong_vert:ap,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:hp,meshtoon_vert:up,meshtoon_frag:dp,points_vert:fp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:_p,sprite_frag:xp},Be={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},gn={basic:{uniforms:qt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:qt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new it(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:qt([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:qt([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:qt([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new it(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:qt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:qt([Be.points,Be.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:qt([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:qt([Be.common,Be.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:qt([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:qt([Be.sprite,Be.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:qt([Be.common,Be.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:qt([Be.lights,Be.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};gn.physical={uniforms:qt([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var er={r:0,b:0,g:0};function yp(i,e,t,n,s,r,a){let o=new it(0),l=r===!0?0:1,c,u,d=null,p=0,m=null;function y(g,f){let w=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?b(o,l):v&&v.isColor&&(b(v,1),w=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Xr)?(u===void 0&&(u=new Ke(new zt(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Xi(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(k,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=yt.getTransfer(v.colorSpace)!==Mt,(d!==v||p!==v.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=v,p=v.version,m=i.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ke(new xn(2,2),new Ln({name:"BackgroundMaterial",uniforms:Xi(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=yt.getTransfer(v.colorSpace)!==Mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||p!==v.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,p=v.version,m=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function b(g,f){g.getRGB(er,Vc(i)),n.buffers.color.setClear(er.r,er.g,er.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(g,f=1){o.set(g),l=f,b(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,b(o,l)},render:y}}function vp(i,e,t,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=g(null),c=l,u=!1;function d(z,Y,te,de,ne){let ae=!1;if(a){let me=b(de,te,Y);c!==me&&(c=me,m(c.object)),ae=f(z,de,te,ne),ae&&w(z,de,te,ne)}else{let me=Y.wireframe===!0;(c.geometry!==de.id||c.program!==te.id||c.wireframe!==me)&&(c.geometry=de.id,c.program=te.id,c.wireframe=me,ae=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,Q(z,Y,te,de),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(z){return n.isWebGL2?i.bindVertexArray(z):r.bindVertexArrayOES(z)}function y(z){return n.isWebGL2?i.deleteVertexArray(z):r.deleteVertexArrayOES(z)}function b(z,Y,te){let de=te.wireframe===!0,ne=o[z.id];ne===void 0&&(ne={},o[z.id]=ne);let ae=ne[Y.id];ae===void 0&&(ae={},ne[Y.id]=ae);let me=ae[de];return me===void 0&&(me=g(p()),ae[de]=me),me}function g(z){let Y=[],te=[],de=[];for(let ne=0;ne<s;ne++)Y[ne]=0,te[ne]=0,de[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:te,attributeDivisors:de,object:z,attributes:{},index:null}}function f(z,Y,te,de){let ne=c.attributes,ae=Y.attributes,me=0,pe=te.getAttributes();for(let Le in pe)if(pe[Le].location>=0){let _e=ne[Le],ze=ae[Le];if(ze===void 0&&(Le==="instanceMatrix"&&z.instanceMatrix&&(ze=z.instanceMatrix),Le==="instanceColor"&&z.instanceColor&&(ze=z.instanceColor)),_e===void 0||_e.attribute!==ze||ze&&_e.data!==ze.data)return!0;me++}return c.attributesNum!==me||c.index!==de}function w(z,Y,te,de){let ne={},ae=Y.attributes,me=0,pe=te.getAttributes();for(let Le in pe)if(pe[Le].location>=0){let _e=ae[Le];_e===void 0&&(Le==="instanceMatrix"&&z.instanceMatrix&&(_e=z.instanceMatrix),Le==="instanceColor"&&z.instanceColor&&(_e=z.instanceColor));let ze={};ze.attribute=_e,_e&&_e.data&&(ze.data=_e.data),ne[Le]=ze,me++}c.attributes=ne,c.attributesNum=me,c.index=de}function v(){let z=c.newAttributes;for(let Y=0,te=z.length;Y<te;Y++)z[Y]=0}function I(z){k(z,0)}function k(z,Y){let te=c.newAttributes,de=c.enabledAttributes,ne=c.attributeDivisors;te[z]=1,de[z]===0&&(i.enableVertexAttribArray(z),de[z]=1),ne[z]!==Y&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,Y),ne[z]=Y)}function U(){let z=c.newAttributes,Y=c.enabledAttributes;for(let te=0,de=Y.length;te<de;te++)Y[te]!==z[te]&&(i.disableVertexAttribArray(te),Y[te]=0)}function N(z,Y,te,de,ne,ae,me){me===!0?i.vertexAttribIPointer(z,Y,te,ne,ae):i.vertexAttribPointer(z,Y,te,de,ne,ae)}function Q(z,Y,te,de){if(n.isWebGL2===!1&&(z.isInstancedMesh||de.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let ne=de.attributes,ae=te.getAttributes(),me=Y.defaultAttributeValues;for(let pe in ae){let Le=ae[pe];if(Le.location>=0){let $=ne[pe];if($===void 0&&(pe==="instanceMatrix"&&z.instanceMatrix&&($=z.instanceMatrix),pe==="instanceColor"&&z.instanceColor&&($=z.instanceColor)),$!==void 0){let _e=$.normalized,ze=$.itemSize,C=t.get($);if(C===void 0)continue;let J=C.buffer,ee=C.type,fe=C.bytesPerElement,ue=n.isWebGL2===!0&&(ee===i.INT||ee===i.UNSIGNED_INT||$.gpuType===Cc);if($.isInterleavedBufferAttribute){let Te=$.data,D=Te.stride,Ee=$.offset;if(Te.isInstancedInterleavedBuffer){for(let se=0;se<Le.locationSize;se++)k(Le.location+se,Te.meshPerAttribute);z.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let se=0;se<Le.locationSize;se++)I(Le.location+se);i.bindBuffer(i.ARRAY_BUFFER,J);for(let se=0;se<Le.locationSize;se++)N(Le.location+se,ze/Le.locationSize,ee,_e,D*fe,(Ee+ze/Le.locationSize*se)*fe,ue)}else{if($.isInstancedBufferAttribute){for(let Te=0;Te<Le.locationSize;Te++)k(Le.location+Te,$.meshPerAttribute);z.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Te=0;Te<Le.locationSize;Te++)I(Le.location+Te);i.bindBuffer(i.ARRAY_BUFFER,J);for(let Te=0;Te<Le.locationSize;Te++)N(Le.location+Te,ze/Le.locationSize,ee,_e,ze*fe,ze/Le.locationSize*Te*fe,ue)}}else if(me!==void 0){let _e=me[pe];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(Le.location,_e);break;case 3:i.vertexAttrib3fv(Le.location,_e);break;case 4:i.vertexAttrib4fv(Le.location,_e);break;default:i.vertexAttrib1fv(Le.location,_e)}}}}U()}function P(){ce();for(let z in o){let Y=o[z];for(let te in Y){let de=Y[te];for(let ne in de)y(de[ne].object),delete de[ne];delete Y[te]}delete o[z]}}function R(z){if(o[z.id]===void 0)return;let Y=o[z.id];for(let te in Y){let de=Y[te];for(let ne in de)y(de[ne].object),delete de[ne];delete Y[te]}delete o[z.id]}function Z(z){for(let Y in o){let te=o[Y];if(te[z.id]===void 0)continue;let de=te[z.id];for(let ne in de)y(de[ne].object),delete de[ne];delete te[z.id]}}function ce(){xe(),u=!0,c!==l&&(c=l,m(c.object))}function xe(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:ce,resetDefaultState:xe,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:v,enableAttribute:I,disableUnusedAttributes:U}}function Mp(i,e,t,n){let s=n.isWebGL2,r;function a(u){r=u}function o(u,d){i.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,p){if(p===0)return;let m,y;if(s)m=i,y="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[y](r,u,d,p),t.update(d,r,p)}function c(u,d,p){if(p===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let y=0;y<p;y++)this.render(u[y],d[y]);else{m.multiDrawArraysWEBGL(r,u,0,d,0,p);let y=0;for(let b=0;b<p;b++)y+=d[b];t.update(y,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function Ep(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let N=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(N){if(N==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",o=t.precision!==void 0?t.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),b=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,I=a||e.has("OES_texture_float"),k=v&&I,U=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:y,maxAttributes:b,maxVertexUniforms:g,maxVaryings:f,maxFragmentUniforms:w,vertexTextures:v,floatFragmentTextures:I,floatVertexTextures:k,maxSamples:U}}function Sp(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Qt,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){let m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){let y=d.clippingPlanes,b=d.clipIntersection,g=d.clipShadows,f=i.get(d);if(!s||y===null||y.length===0||r&&!g)r?u(null):c();else{let w=r?0:n,v=w*4,I=f.clippingState||null;l.value=I,I=u(y,p,v,m);for(let k=0;k!==v;++k)I[k]=t[k];f.clippingState=I,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,m,y){let b=d!==null?d.length:0,g=null;if(b!==0){if(g=l.value,y!==!0||g===null){let f=m+b*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<f)&&(g=new Float32Array(f));for(let v=0,I=m;v!==b;++v,I+=4)a.copy(d[v]).applyMatrix4(w,o),a.normal.toArray(g,I),g[I+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,g}}function bp(i){let e=new WeakMap;function t(a,o){return o===Go?a.mapping=Hi:o===Wo&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Go||o===Wo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new $o(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Tr=class extends br{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Di=4,ql=[.125,.215,.35,.446,.526,.582],ti=20,Co=new Tr,Yl=new it,Po=null,Io=0,Lo=0,Qn=(1+Math.sqrt(5))/2,Ii=1/Qn,Zl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Qn,Ii),new L(0,Qn,-Ii),new L(Ii,0,Qn),new L(-Ii,0,Qn),new L(Qn,Ii,0),new L(-Qn,Ii,0)],qi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Po=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Io,Lo),e.scissorTest=!1,tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ps,format:un,colorSpace:Cn,depthBuffer:!1},s=Jl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jl(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wp(r)),this._blurMaterial=Tp(r,e,t)}return s}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,n,s){let o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Yl),u.toneMapping=Gn,u.autoClear=!1;let m=new Zt({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1}),y=new Ke(new zt,m),b=!1,g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,b=!0):(m.color.copy(Yl),b=!0);for(let f=0;f<6;f++){let w=f%3;w===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):w===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));let v=this._cubeSize;tr(s,w*v,f>2?v:0,v,v),u.setRenderTarget(s),b&&u.render(y,o),u.render(e,o)}y.geometry.dispose(),y.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Hi||e.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kl());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Co)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Zl[(s-1)%Zl.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ke(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ti-1),b=r/y,g=isFinite(r)?1+Math.floor(u*b):ti;g>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ti}`);let f=[],w=0;for(let N=0;N<ti;++N){let Q=N/b,P=Math.exp(-Q*Q/2);f.push(P),N===0?w+=P:N<g&&(w+=2*P)}for(let N=0;N<f.length;N++)f[N]=f[N]/w;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);let{_lodMax:v}=this;p.dTheta.value=y,p.mipInt.value=v-n;let I=this._sizeLods[s],k=3*I*(s>v-Di?s-v+Di:0),U=4*(this._cubeSize-I);tr(t,k,U,3*I,2*I),l.setRenderTarget(t),l.render(d,Co)}};function wp(i){let e=[],t=[],n=[],s=i,r=i-Di+1+ql.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Di?l=ql[a-i+Di-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,y=6,b=3,g=2,f=1,w=new Float32Array(b*y*m),v=new Float32Array(g*y*m),I=new Float32Array(f*y*m);for(let U=0;U<m;U++){let N=U%3*2/3-1,Q=U>2?0:-1,P=[N,Q,0,N+2/3,Q,0,N+2/3,Q+1,0,N,Q,0,N+2/3,Q+1,0,N,Q+1,0];w.set(P,b*y*U),v.set(p,g*y*U);let R=[U,U,U,U,U,U];I.set(R,f*y*U)}let k=new Ut;k.setAttribute("position",new Kt(w,b)),k.setAttribute("uv",new Kt(v,g)),k.setAttribute("faceIndex",new Kt(I,f)),e.push(k),s>Di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Jl(i,e,t){let n=new Pn(i,e,t);return n.texture.mapping=Xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tp(i,e,t){let n=new Float32Array(ti),s=new L(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Kl(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ua(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function $l(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Ua(){return`

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
	`}function Ap(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Go||l===Wo,u=l===Hi||l===ki;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new qi(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{let d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new qi(i));let p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rp(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Cp(i,e,t,n){let s={},r=new WeakMap;function a(d){let p=d.target;p.index!==null&&e.remove(p.index);for(let y in p.attributes)e.remove(p.attributes[y]);for(let y in p.morphAttributes){let b=p.morphAttributes[y];for(let g=0,f=b.length;g<f;g++)e.remove(b[g])}p.removeEventListener("dispose",a),delete s[p.id];let m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(d){let p=d.attributes;for(let y in p)e.update(p[y],i.ARRAY_BUFFER);let m=d.morphAttributes;for(let y in m){let b=m[y];for(let g=0,f=b.length;g<f;g++)e.update(b[g],i.ARRAY_BUFFER)}}function c(d){let p=[],m=d.index,y=d.attributes.position,b=0;if(m!==null){let w=m.array;b=m.version;for(let v=0,I=w.length;v<I;v+=3){let k=w[v+0],U=w[v+1],N=w[v+2];p.push(k,U,U,N,N,k)}}else if(y!==void 0){let w=y.array;b=y.version;for(let v=0,I=w.length/3-1;v<I;v+=3){let k=v+0,U=v+1,N=v+2;p.push(k,U,U,N,N,k)}}else return;let g=new(Hc(p)?Sr:Er)(p,1);g.version=b;let f=r.get(d);f&&e.remove(f),r.set(d,g)}function u(d){let p=r.get(d);if(p){let m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Pp(i,e,t,n){let s=n.isWebGL2,r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,y){i.drawElements(r,y,o,m*l),t.update(y,r,1)}function d(m,y,b){if(b===0)return;let g,f;if(s)g=i,f="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[f](r,y,o,m*l,b),t.update(y,r,b)}function p(m,y,b){if(b===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<b;f++)this.render(m[f]/l,y[f]);else{g.multiDrawElementsWEBGL(r,y,0,o,m,0,b);let f=0;for(let w=0;w<b;w++)f+=y[w];t.update(f,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function Ip(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Lp(i,e){return i[0]-e[0]}function Dp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Up(i,e,t){let n={},s=new Float32Array(8),r=new WeakMap,a=new St,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=m!==void 0?m.length:0,b=r.get(u);if(b===void 0||b.count!==y){let z=function(){ce.dispose(),r.delete(u),u.removeEventListener("dispose",z)};b!==void 0&&b.texture.dispose();let w=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,I=u.morphAttributes.color!==void 0,k=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],N=u.morphAttributes.color||[],Q=0;w===!0&&(Q=1),v===!0&&(Q=2),I===!0&&(Q=3);let P=u.attributes.position.count*Q,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let Z=new Float32Array(P*R*4*y),ce=new Mr(Z,P,R,y);ce.type=kn,ce.needsUpdate=!0;let xe=Q*4;for(let Y=0;Y<y;Y++){let te=k[Y],de=U[Y],ne=N[Y],ae=P*R*4*Y;for(let me=0;me<te.count;me++){let pe=me*xe;w===!0&&(a.fromBufferAttribute(te,me),Z[ae+pe+0]=a.x,Z[ae+pe+1]=a.y,Z[ae+pe+2]=a.z,Z[ae+pe+3]=0),v===!0&&(a.fromBufferAttribute(de,me),Z[ae+pe+4]=a.x,Z[ae+pe+5]=a.y,Z[ae+pe+6]=a.z,Z[ae+pe+7]=0),I===!0&&(a.fromBufferAttribute(ne,me),Z[ae+pe+8]=a.x,Z[ae+pe+9]=a.y,Z[ae+pe+10]=a.z,Z[ae+pe+11]=ne.itemSize===4?a.w:1)}}b={count:y,texture:ce,size:new we(P,R)},r.set(u,b),u.addEventListener("dispose",z)}let g=0;for(let w=0;w<p.length;w++)g+=p[w];let f=u.morphTargetsRelative?1:1-g;d.getUniforms().setValue(i,"morphTargetBaseInfluence",f),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",b.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",b.size)}else{let m=p===void 0?0:p.length,y=n[u.id];if(y===void 0||y.length!==m){y=[];for(let v=0;v<m;v++)y[v]=[v,0];n[u.id]=y}for(let v=0;v<m;v++){let I=y[v];I[0]=v,I[1]=p[v]}y.sort(Dp);for(let v=0;v<8;v++)v<m&&y[v][1]?(o[v][0]=y[v][0],o[v][1]=y[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Lp);let b=u.morphAttributes.position,g=u.morphAttributes.normal,f=0;for(let v=0;v<8;v++){let I=o[v],k=I[0],U=I[1];k!==Number.MAX_SAFE_INTEGER&&U?(b&&u.getAttribute("morphTarget"+v)!==b[k]&&u.setAttribute("morphTarget"+v,b[k]),g&&u.getAttribute("morphNormal"+v)!==g[k]&&u.setAttribute("morphNormal"+v,g[k]),s[v]=U,f+=U):(b&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),g&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),s[v]=0)}let w=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(i,"morphTargetBaseInfluence",w),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Np(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Ar=class extends rn{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:si,u!==si&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===si&&(n=Hn),n===void 0&&u===Vi&&(n=ii),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Yt,this.minFilter=l!==void 0?l:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Wc=new rn,Xc=new Ar(1,1);Xc.compareFunction=Bc;var qc=new Mr,Yc=new Jo,Zc=new wr,jl=[],Ql=[],ec=new Float32Array(16),tc=new Float32Array(9),nc=new Float32Array(4);function $i(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=jl[s];if(r===void 0&&(r=new Float32Array(s),jl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Yr(i,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Op(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function Bp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Hp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;nc.set(n),i.uniformMatrix2fv(this.addr,!1,nc),Ot(t,n)}}function kp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;tc.set(n),i.uniformMatrix3fv(this.addr,!1,tc),Ot(t,n)}}function Vp(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;ec.set(n),i.uniformMatrix4fv(this.addr,!1,ec),Ot(t,n)}}function Gp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function Xp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function qp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function Yp(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function Jp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function Kp(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function $p(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Xc:Wc;t.setTexture2D(e||r,s)}function jp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yc,s)}function Qp(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Zc,s)}function em(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qc,s)}function tm(i){switch(i){case 5126:return Op;case 35664:return Fp;case 35665:return Bp;case 35666:return zp;case 35674:return Hp;case 35675:return kp;case 35676:return Vp;case 5124:case 35670:return Gp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return qp;case 5125:return Yp;case 36294:return Zp;case 36295:return Jp;case 36296:return Kp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}function nm(i,e){i.uniform1fv(this.addr,e)}function im(i,e){let t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function sm(i,e){let t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function rm(i,e){let t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function om(i,e){let t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function am(i,e){let t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lm(i,e){let t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cm(i,e){i.uniform1iv(this.addr,e)}function hm(i,e){i.uniform2iv(this.addr,e)}function um(i,e){i.uniform3iv(this.addr,e)}function dm(i,e){i.uniform4iv(this.addr,e)}function fm(i,e){i.uniform1uiv(this.addr,e)}function pm(i,e){i.uniform2uiv(this.addr,e)}function mm(i,e){i.uniform3uiv(this.addr,e)}function gm(i,e){i.uniform4uiv(this.addr,e)}function _m(i,e,t){let n=this.cache,s=e.length,r=Yr(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Wc,r[a])}function xm(i,e,t){let n=this.cache,s=e.length,r=Yr(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yc,r[a])}function ym(i,e,t){let n=this.cache,s=e.length,r=Yr(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Zc,r[a])}function vm(i,e,t){let n=this.cache,s=e.length,r=Yr(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qc,r[a])}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return om;case 35675:return am;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return vm}}var jo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tm(t.type)}},Qo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mm(t.type)}},ea=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Do=/(\w+)(\])?(\[|\.)?/g;function ic(i,e){i.seq.push(e),i.map[e.id]=e}function Em(i,e,t){let n=i.name,s=n.length;for(Do.lastIndex=0;;){let r=Do.exec(n),a=Do.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ic(t,c===void 0?new jo(o,i,e):new Qo(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new ea(o),ic(t,d)),t=d}}}var zi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Em(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function sc(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Sm=37297,bm=0;function wm(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Tm(i){let e=yt.getPrimaries(yt.workingColorSpace),t=yt.getPrimaries(i),n;switch(e===t?n="":e===mr&&t===pr?n="LinearDisplayP3ToLinearSRGB":e===pr&&t===mr&&(n="LinearSRGBToLinearDisplayP3"),i){case Cn:case qr:return[n,"LinearTransferOETF"];case Rt:case La:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rc(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+wm(i.getShaderSource(e),a)}else return s}function Am(i,e){let t=Tm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rm(i,e){let t;switch(e){case Dh:t="Linear";break;case Uh:t="Reinhard";break;case Nh:t="OptimizedCineon";break;case Pa:t="ACESFilmic";break;case Fh:t="AgX";break;case Oh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Cm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function Pm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ui).join(`
`)}function Im(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lm(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ui(i){return i!==""}function oc(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ta(i){return i.replace(Dm,Nm)}var Um=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Nm(i,e){let t=ht[e];if(t===void 0){let n=Um.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ta(t)}var Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lc(i){return i.replace(Om,Fm)}function Fm(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cc(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ca?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===An&&(e="SHADOWMAP_TYPE_VSM"),e}function zm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Hi:case ki:e="ENVMAP_TYPE_CUBE";break;case Xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ki&&(e="ENVMAP_MODE_REFRACTION"),e}function km(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ac:e="ENVMAP_BLENDING_MULTIPLY";break;case Ih:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function Vm(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Gm(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Bm(t),c=zm(t),u=Hm(t),d=km(t),p=Vm(t),m=t.isWebGL2?"":Cm(t),y=Pm(t),b=Im(r),g=s.createProgram(),f,w,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ui).join(`
`),f.length>0&&(f+=`
`),w=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Ui).join(`
`),w.length>0&&(w+=`
`)):(f=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),w=[m,cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?ht.tonemapping_pars_fragment:"",t.toneMapping!==Gn?Rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Am("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ui).join(`
`)),a=ta(a),a=oc(a,t),a=ac(a,t),o=ta(o),o=oc(o,t),o=ac(o,t),a=lc(a),o=lc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);let I=v+f+a,k=v+w+o,U=sc(s,s.VERTEX_SHADER,I),N=sc(s,s.FRAGMENT_SHADER,k);s.attachShader(g,U),s.attachShader(g,N),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function Q(ce){if(i.debug.checkShaderErrors){let xe=s.getProgramInfoLog(g).trim(),z=s.getShaderInfoLog(U).trim(),Y=s.getShaderInfoLog(N).trim(),te=!0,de=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,U,N);else{let ne=rc(s,U,"vertex"),ae=rc(s,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+xe+`
`+ne+`
`+ae)}else xe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",xe):(z===""||Y==="")&&(de=!1);de&&(ce.diagnostics={runnable:te,programLog:xe,vertexShader:{log:z,prefix:f},fragmentShader:{log:Y,prefix:w}})}s.deleteShader(U),s.deleteShader(N),P=new zi(s,g),R=Lm(s,g)}let P;this.getUniforms=function(){return P===void 0&&Q(this),P};let R;this.getAttributes=function(){return R===void 0&&Q(this),R};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(g,Sm)),Z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=U,this.fragmentShader=N,this}var Wm=0,na=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ia(e),t.set(e,n)),n}},ia=class{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}};function Xm(i,e,t,n,s,r,a){let o=new gs,l=new na,c=[],u=s.isWebGL2,d=s.logarithmicDepthBuffer,p=s.vertexTextures,m=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(P){return P===0?"uv":`uv${P}`}function g(P,R,Z,ce,xe){let z=ce.fog,Y=xe.geometry,te=P.isMeshStandardMaterial?ce.environment:null,de=(P.isMeshStandardMaterial?t:e).get(P.envMap||te),ne=de&&de.mapping===Xr?de.image.height:null,ae=y[P.type];P.precision!==null&&(m=s.getMaxPrecision(P.precision),m!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",m,"instead."));let me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=me!==void 0?me.length:0,Le=0;Y.morphAttributes.position!==void 0&&(Le=1),Y.morphAttributes.normal!==void 0&&(Le=2),Y.morphAttributes.color!==void 0&&(Le=3);let $,_e,ze,C;if(ae){let Lt=gn[ae];$=Lt.vertexShader,_e=Lt.fragmentShader}else $=P.vertexShader,_e=P.fragmentShader,l.update(P),ze=l.getVertexShaderID(P),C=l.getFragmentShaderID(P);let J=i.getRenderTarget(),ee=xe.isInstancedMesh===!0,fe=xe.isBatchedMesh===!0,ue=!!P.map,Te=!!P.matcap,D=!!de,Ee=!!P.aoMap,se=!!P.lightMap,le=!!P.bumpMap,ie=!!P.normalMap,De=!!P.displacementMap,Ae=!!P.emissiveMap,A=!!P.metalnessMap,T=!!P.roughnessMap,X=P.anisotropy>0,ve=P.clearcoat>0,Me=P.iridescence>0,ye=P.sheen>0,Ge=P.transmission>0,Oe=X&&!!P.anisotropyMap,ke=ve&&!!P.clearcoatMap,$e=ve&&!!P.clearcoatNormalMap,st=ve&&!!P.clearcoatRoughnessMap,Se=Me&&!!P.iridescenceMap,ct=Me&&!!P.iridescenceThicknessMap,O=ye&&!!P.sheenColorMap,be=ye&&!!P.sheenRoughnessMap,Fe=!!P.specularMap,Ce=!!P.specularColorMap,Je=!!P.specularIntensityMap,ot=Ge&&!!P.transmissionMap,at=Ge&&!!P.thicknessMap,lt=!!P.gradientMap,Ue=!!P.alphaMap,V=P.alphaTest>0,Ie=!!P.alphaHash,Pe=!!P.extensions,je=!!Y.attributes.uv1,Ze=!!Y.attributes.uv2,ft=!!Y.attributes.uv3,pt=Gn;return P.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(pt=i.toneMapping),{isWebGL2:u,shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:$,fragmentShader:_e,defines:P.defines,customVertexShaderID:ze,customFragmentShaderID:C,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:m,batching:fe,instancing:ee,instancingColor:ee&&xe.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Cn,map:ue,matcap:Te,envMap:D,envMapMode:D&&de.mapping,envMapCubeUVHeight:ne,aoMap:Ee,lightMap:se,bumpMap:le,normalMap:ie,displacementMap:p&&De,emissiveMap:Ae,normalMapObjectSpace:ie&&P.normalMapType===Jh,normalMapTangentSpace:ie&&P.normalMapType===Fc,metalnessMap:A,roughnessMap:T,anisotropy:X,anisotropyMap:Oe,clearcoat:ve,clearcoatMap:ke,clearcoatNormalMap:$e,clearcoatRoughnessMap:st,iridescence:Me,iridescenceMap:Se,iridescenceThicknessMap:ct,sheen:ye,sheenColorMap:O,sheenRoughnessMap:be,specularMap:Fe,specularColorMap:Ce,specularIntensityMap:Je,transmission:Ge,transmissionMap:ot,thicknessMap:at,gradientMap:lt,opaque:P.transparent===!1&&P.blending===Oi,alphaMap:Ue,alphaTest:V,alphaHash:Ie,combine:P.combine,mapUv:ue&&b(P.map.channel),aoMapUv:Ee&&b(P.aoMap.channel),lightMapUv:se&&b(P.lightMap.channel),bumpMapUv:le&&b(P.bumpMap.channel),normalMapUv:ie&&b(P.normalMap.channel),displacementMapUv:De&&b(P.displacementMap.channel),emissiveMapUv:Ae&&b(P.emissiveMap.channel),metalnessMapUv:A&&b(P.metalnessMap.channel),roughnessMapUv:T&&b(P.roughnessMap.channel),anisotropyMapUv:Oe&&b(P.anisotropyMap.channel),clearcoatMapUv:ke&&b(P.clearcoatMap.channel),clearcoatNormalMapUv:$e&&b(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&b(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&b(P.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&b(P.iridescenceThicknessMap.channel),sheenColorMapUv:O&&b(P.sheenColorMap.channel),sheenRoughnessMapUv:be&&b(P.sheenRoughnessMap.channel),specularMapUv:Fe&&b(P.specularMap.channel),specularColorMapUv:Ce&&b(P.specularColorMap.channel),specularIntensityMapUv:Je&&b(P.specularIntensityMap.channel),transmissionMapUv:ot&&b(P.transmissionMap.channel),thicknessMapUv:at&&b(P.thicknessMap.channel),alphaMapUv:Ue&&b(P.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ie||X),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,vertexUv1s:je,vertexUv2s:Ze,vertexUv3s:ft,pointsUvs:xe.isPoints===!0&&!!Y.attributes.uv&&(ue||Ue),fog:!!z,useFog:P.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:xe.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:P.dithering,shadowMapEnabled:i.shadowMap.enabled&&Z.length>0,shadowMapType:i.shadowMap.type,toneMapping:pt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:ue&&P.map.isVideoTexture===!0&&yt.getTransfer(P.map.colorSpace)===Mt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===en,flipSided:P.side===Gt,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionDerivatives:Pe&&P.extensions.derivatives===!0,extensionFragDepth:Pe&&P.extensions.fragDepth===!0,extensionDrawBuffers:Pe&&P.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pe&&P.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pe&&P.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()}}function f(P){let R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(let Z in P.defines)R.push(Z),R.push(P.defines[Z]);return P.isRawShaderMaterial===!1&&(w(R,P),v(R,P),R.push(i.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function w(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function v(P,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),P.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),P.push(o.mask)}function I(P){let R=y[P.type],Z;if(R){let ce=gn[R];Z=Du.clone(ce.uniforms)}else Z=P.uniforms;return Z}function k(P,R){let Z;for(let ce=0,xe=c.length;ce<xe;ce++){let z=c[ce];if(z.cacheKey===R){Z=z,++Z.usedTimes;break}}return Z===void 0&&(Z=new Gm(i,R,P,r),c.push(Z)),Z}function U(P){if(--P.usedTimes===0){let R=c.indexOf(P);c[R]=c[c.length-1],c.pop(),P.destroy()}}function N(P){l.remove(P)}function Q(){l.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:I,acquireProgram:k,releaseProgram:U,releaseShaderCache:N,programs:c,dispose:Q}}function qm(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Ym(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uc(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,m,y,b,g){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:y,renderOrder:d.renderOrder,z:b,group:g},i[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=y,f.renderOrder=d.renderOrder,f.z=b,f.group=g),e++,f}function o(d,p,m,y,b,g){let f=a(d,p,m,y,b,g);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function l(d,p,m,y,b,g){let f=a(d,p,m,y,b,g);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||Ym),n.length>1&&n.sort(p||hc),s.length>1&&s.sort(p||hc)}function u(){for(let d=e,p=i.length;d<p;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Zm(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new uc,i.set(n,[a])):s>=r.length?(a=new uc,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Jm(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new it};break;case"SpotLight":t={position:new L,direction:new L,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Km(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var $m=0;function jm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qm(i,e){let t=new Jm,n=Km(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new L);let r=new L,a=new wt,o=new wt;function l(u,d){let p=0,m=0,y=0;for(let ce=0;ce<9;ce++)s.probe[ce].set(0,0,0);let b=0,g=0,f=0,w=0,v=0,I=0,k=0,U=0,N=0,Q=0,P=0;u.sort(jm);let R=d===!0?Math.PI:1;for(let ce=0,xe=u.length;ce<xe;ce++){let z=u[ce],Y=z.color,te=z.intensity,de=z.distance,ne=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)p+=Y.r*te*R,m+=Y.g*te*R,y+=Y.b*te*R;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(z.sh.coefficients[ae],te);P++}else if(z.isDirectionalLight){let ae=t.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity*R),z.castShadow){let me=z.shadow,pe=n.get(z);pe.shadowBias=me.bias,pe.shadowNormalBias=me.normalBias,pe.shadowRadius=me.radius,pe.shadowMapSize=me.mapSize,s.directionalShadow[b]=pe,s.directionalShadowMap[b]=ne,s.directionalShadowMatrix[b]=z.shadow.matrix,I++}s.directional[b]=ae,b++}else if(z.isSpotLight){let ae=t.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(Y).multiplyScalar(te*R),ae.distance=de,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,s.spot[f]=ae;let me=z.shadow;if(z.map&&(s.spotLightMap[N]=z.map,N++,me.updateMatrices(z),z.castShadow&&Q++),s.spotLightMatrix[f]=me.matrix,z.castShadow){let pe=n.get(z);pe.shadowBias=me.bias,pe.shadowNormalBias=me.normalBias,pe.shadowRadius=me.radius,pe.shadowMapSize=me.mapSize,s.spotShadow[f]=pe,s.spotShadowMap[f]=ne,U++}f++}else if(z.isRectAreaLight){let ae=t.get(z);ae.color.copy(Y).multiplyScalar(te),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),s.rectArea[w]=ae,w++}else if(z.isPointLight){let ae=t.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity*R),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){let me=z.shadow,pe=n.get(z);pe.shadowBias=me.bias,pe.shadowNormalBias=me.normalBias,pe.shadowRadius=me.radius,pe.shadowMapSize=me.mapSize,pe.shadowCameraNear=me.camera.near,pe.shadowCameraFar=me.camera.far,s.pointShadow[g]=pe,s.pointShadowMap[g]=ne,s.pointShadowMatrix[g]=z.shadow.matrix,k++}s.point[g]=ae,g++}else if(z.isHemisphereLight){let ae=t.get(z);ae.skyColor.copy(z.color).multiplyScalar(te*R),ae.groundColor.copy(z.groundColor).multiplyScalar(te*R),s.hemi[v]=ae,v++}}w>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=y;let Z=s.hash;(Z.directionalLength!==b||Z.pointLength!==g||Z.spotLength!==f||Z.rectAreaLength!==w||Z.hemiLength!==v||Z.numDirectionalShadows!==I||Z.numPointShadows!==k||Z.numSpotShadows!==U||Z.numSpotMaps!==N||Z.numLightProbes!==P)&&(s.directional.length=b,s.spot.length=f,s.rectArea.length=w,s.point.length=g,s.hemi.length=v,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=k,s.pointShadowMap.length=k,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=k,s.spotLightMatrix.length=U+N-Q,s.spotLightMap.length=N,s.numSpotLightShadowsWithMaps=Q,s.numLightProbes=P,Z.directionalLength=b,Z.pointLength=g,Z.spotLength=f,Z.rectAreaLength=w,Z.hemiLength=v,Z.numDirectionalShadows=I,Z.numPointShadows=k,Z.numSpotShadows=U,Z.numSpotMaps=N,Z.numLightProbes=P,s.version=$m++)}function c(u,d){let p=0,m=0,y=0,b=0,g=0,f=d.matrixWorldInverse;for(let w=0,v=u.length;w<v;w++){let I=u[w];if(I.isDirectionalLight){let k=s.directional[p];k.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),k.direction.sub(r),k.direction.transformDirection(f),p++}else if(I.isSpotLight){let k=s.spot[y];k.position.setFromMatrixPosition(I.matrixWorld),k.position.applyMatrix4(f),k.direction.setFromMatrixPosition(I.matrixWorld),r.setFromMatrixPosition(I.target.matrixWorld),k.direction.sub(r),k.direction.transformDirection(f),y++}else if(I.isRectAreaLight){let k=s.rectArea[b];k.position.setFromMatrixPosition(I.matrixWorld),k.position.applyMatrix4(f),o.identity(),a.copy(I.matrixWorld),a.premultiply(f),o.extractRotation(a),k.halfWidth.set(I.width*.5,0,0),k.halfHeight.set(0,I.height*.5,0),k.halfWidth.applyMatrix4(o),k.halfHeight.applyMatrix4(o),b++}else if(I.isPointLight){let k=s.point[m];k.position.setFromMatrixPosition(I.matrixWorld),k.position.applyMatrix4(f),m++}else if(I.isHemisphereLight){let k=s.hemi[g];k.direction.setFromMatrixPosition(I.matrixWorld),k.direction.transformDirection(f),g++}}}return{setup:l,setupView:c,state:s}}function dc(i,e){let t=new Qm(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function e0(i,e){let t=new WeakMap;function n(r,a=0){let o=t.get(r),l;return o===void 0?(l=new dc(i,e),t.set(r,[l])):a>=o.length?(l=new dc(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}var sa=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ra=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n0=`uniform sampler2D shadow_pass;
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
}`;function i0(i,e,t){let n=new _s,s=new we,r=new we,a=new St,o=new sa({depthPacking:Zh}),l=new ra,c={},u=t.maxTextureSize,d={[qn]:Gt,[Gt]:qn,[en]:en},p=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:t0,fragmentShader:n0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let y=new Ut;y.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ke(y,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let f=this.type;this.render=function(U,N,Q){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||U.length===0)return;let P=i.getRenderTarget(),R=i.getActiveCubeFace(),Z=i.getActiveMipmapLevel(),ce=i.state;ce.setBlending(Vn),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);let xe=f!==An&&this.type===An,z=f===An&&this.type!==An;for(let Y=0,te=U.length;Y<te;Y++){let de=U[Y],ne=de.shadow;if(ne===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(ne.autoUpdate===!1&&ne.needsUpdate===!1)continue;s.copy(ne.mapSize);let ae=ne.getFrameExtents();if(s.multiply(ae),r.copy(ne.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ae.x),s.x=r.x*ae.x,ne.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ae.y),s.y=r.y*ae.y,ne.mapSize.y=r.y)),ne.map===null||xe===!0||z===!0){let pe=this.type!==An?{minFilter:Yt,magFilter:Yt}:{};ne.map!==null&&ne.map.dispose(),ne.map=new Pn(s.x,s.y,pe),ne.map.texture.name=de.name+".shadowMap",ne.camera.updateProjectionMatrix()}i.setRenderTarget(ne.map),i.clear();let me=ne.getViewportCount();for(let pe=0;pe<me;pe++){let Le=ne.getViewport(pe);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),ce.viewport(a),ne.updateMatrices(de,pe),n=ne.getFrustum(),I(N,Q,ne.camera,de,this.type)}ne.isPointLightShadow!==!0&&this.type===An&&w(ne,Q),ne.needsUpdate=!1}f=this.type,g.needsUpdate=!1,i.setRenderTarget(P,R,Z)};function w(U,N){let Q=e.update(b);p.defines.VSM_SAMPLES!==U.blurSamples&&(p.defines.VSM_SAMPLES=U.blurSamples,m.defines.VSM_SAMPLES=U.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Pn(s.x,s.y)),p.uniforms.shadow_pass.value=U.map.texture,p.uniforms.resolution.value=U.mapSize,p.uniforms.radius.value=U.radius,i.setRenderTarget(U.mapPass),i.clear(),i.renderBufferDirect(N,null,Q,p,b,null),m.uniforms.shadow_pass.value=U.mapPass.texture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,i.setRenderTarget(U.map),i.clear(),i.renderBufferDirect(N,null,Q,m,b,null)}function v(U,N,Q,P){let R=null,Z=Q.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(Z!==void 0)R=Z;else if(R=Q.isPointLight===!0?l:o,i.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){let ce=R.uuid,xe=N.uuid,z=c[ce];z===void 0&&(z={},c[ce]=z);let Y=z[xe];Y===void 0&&(Y=R.clone(),z[xe]=Y,N.addEventListener("dispose",k)),R=Y}if(R.visible=N.visible,R.wireframe=N.wireframe,P===An?R.side=N.shadowSide!==null?N.shadowSide:N.side:R.side=N.shadowSide!==null?N.shadowSide:d[N.side],R.alphaMap=N.alphaMap,R.alphaTest=N.alphaTest,R.map=N.map,R.clipShadows=N.clipShadows,R.clippingPlanes=N.clippingPlanes,R.clipIntersection=N.clipIntersection,R.displacementMap=N.displacementMap,R.displacementScale=N.displacementScale,R.displacementBias=N.displacementBias,R.wireframeLinewidth=N.wireframeLinewidth,R.linewidth=N.linewidth,Q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let ce=i.properties.get(R);ce.light=Q}return R}function I(U,N,Q,P,R){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&R===An)&&(!U.frustumCulled||n.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld);let xe=e.update(U),z=U.material;if(Array.isArray(z)){let Y=xe.groups;for(let te=0,de=Y.length;te<de;te++){let ne=Y[te],ae=z[ne.materialIndex];if(ae&&ae.visible){let me=v(U,ae,P,R);U.onBeforeShadow(i,U,N,Q,xe,me,ne),i.renderBufferDirect(Q,null,xe,me,U,ne),U.onAfterShadow(i,U,N,Q,xe,me,ne)}}}else if(z.visible){let Y=v(U,z,P,R);U.onBeforeShadow(i,U,N,Q,xe,Y,null),i.renderBufferDirect(Q,null,xe,Y,U,null),U.onAfterShadow(i,U,N,Q,xe,Y,null)}}let ce=U.children;for(let xe=0,z=ce.length;xe<z;xe++)I(ce[xe],N,Q,P,R)}function k(U){U.target.removeEventListener("dispose",k);for(let Q in c){let P=c[Q],R=U.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function s0(i,e,t){let n=t.isWebGL2;function s(){let V=!1,Ie=new St,Pe=null,je=new St(0,0,0,0);return{setMask:function(Ze){Pe!==Ze&&!V&&(i.colorMask(Ze,Ze,Ze,Ze),Pe=Ze)},setLocked:function(Ze){V=Ze},setClear:function(Ze,ft,pt,At,Lt){Lt===!0&&(Ze*=At,ft*=At,pt*=At),Ie.set(Ze,ft,pt,At),je.equals(Ie)===!1&&(i.clearColor(Ze,ft,pt,At),je.copy(Ie))},reset:function(){V=!1,Pe=null,je.set(-1,0,0,0)}}}function r(){let V=!1,Ie=null,Pe=null,je=null;return{setTest:function(Ze){Ze?fe(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(Ze){Ie!==Ze&&!V&&(i.depthMask(Ze),Ie=Ze)},setFunc:function(Ze){if(Pe!==Ze){switch(Ze){case bh:i.depthFunc(i.NEVER);break;case wh:i.depthFunc(i.ALWAYS);break;case Th:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Ah:i.depthFunc(i.EQUAL);break;case Rh:i.depthFunc(i.GEQUAL);break;case Ch:i.depthFunc(i.GREATER);break;case Ph:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=Ze}},setLocked:function(Ze){V=Ze},setClear:function(Ze){je!==Ze&&(i.clearDepth(Ze),je=Ze)},reset:function(){V=!1,Ie=null,Pe=null,je=null}}}function a(){let V=!1,Ie=null,Pe=null,je=null,Ze=null,ft=null,pt=null,At=null,Lt=null;return{setTest:function(gt){V||(gt?fe(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(gt){Ie!==gt&&!V&&(i.stencilMask(gt),Ie=gt)},setFunc:function(gt,Ct,Jt){(Pe!==gt||je!==Ct||Ze!==Jt)&&(i.stencilFunc(gt,Ct,Jt),Pe=gt,je=Ct,Ze=Jt)},setOp:function(gt,Ct,Jt){(ft!==gt||pt!==Ct||At!==Jt)&&(i.stencilOp(gt,Ct,Jt),ft=gt,pt=Ct,At=Jt)},setLocked:function(gt){V=gt},setClear:function(gt){Lt!==gt&&(i.clearStencil(gt),Lt=gt)},reset:function(){V=!1,Ie=null,Pe=null,je=null,Ze=null,ft=null,pt=null,At=null,Lt=null}}}let o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap,p={},m={},y=new WeakMap,b=[],g=null,f=!1,w=null,v=null,I=null,k=null,U=null,N=null,Q=null,P=new it(0,0,0),R=0,Z=!1,ce=null,xe=null,z=null,Y=null,te=null,de=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ne=!1,ae=0,me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(me)[1]),ne=ae>=1):me.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),ne=ae>=2);let pe=null,Le={},$=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),ze=new St().fromArray($),C=new St().fromArray(_e);function J(V,Ie,Pe,je){let Ze=new Uint8Array(4),ft=i.createTexture();i.bindTexture(V,ft),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let pt=0;pt<Pe;pt++)n&&(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)?i.texImage3D(Ie,0,i.RGBA,1,1,je,0,i.RGBA,i.UNSIGNED_BYTE,Ze):i.texImage2D(Ie+pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ze);return ft}let ee={};ee[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ee[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(i.DEPTH_TEST),l.setFunc(hr),Ae(!1),A(Xa),fe(i.CULL_FACE),ie(Vn);function fe(V){p[V]!==!0&&(i.enable(V),p[V]=!0)}function ue(V){p[V]!==!1&&(i.disable(V),p[V]=!1)}function Te(V,Ie){return m[V]!==Ie?(i.bindFramebuffer(V,Ie),m[V]=Ie,n&&(V===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=Ie),V===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=Ie)),!0):!1}function D(V,Ie){let Pe=b,je=!1;if(V)if(Pe=y.get(Ie),Pe===void 0&&(Pe=[],y.set(Ie,Pe)),V.isWebGLMultipleRenderTargets){let Ze=V.texture;if(Pe.length!==Ze.length||Pe[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,pt=Ze.length;ft<pt;ft++)Pe[ft]=i.COLOR_ATTACHMENT0+ft;Pe.length=Ze.length,je=!0}}else Pe[0]!==i.COLOR_ATTACHMENT0&&(Pe[0]=i.COLOR_ATTACHMENT0,je=!0);else Pe[0]!==i.BACK&&(Pe[0]=i.BACK,je=!0);je&&(t.isWebGL2?i.drawBuffers(Pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Pe))}function Ee(V){return g!==V?(i.useProgram(V),g=V,!0):!1}let se={[ei]:i.FUNC_ADD,[ch]:i.FUNC_SUBTRACT,[hh]:i.FUNC_REVERSE_SUBTRACT};if(n)se[Ja]=i.MIN,se[Ka]=i.MAX;else{let V=e.get("EXT_blend_minmax");V!==null&&(se[Ja]=V.MIN_EXT,se[Ka]=V.MAX_EXT)}let le={[uh]:i.ZERO,[dh]:i.ONE,[fh]:i.SRC_COLOR,[ko]:i.SRC_ALPHA,[yh]:i.SRC_ALPHA_SATURATE,[_h]:i.DST_COLOR,[mh]:i.DST_ALPHA,[ph]:i.ONE_MINUS_SRC_COLOR,[Vo]:i.ONE_MINUS_SRC_ALPHA,[xh]:i.ONE_MINUS_DST_COLOR,[gh]:i.ONE_MINUS_DST_ALPHA,[vh]:i.CONSTANT_COLOR,[Mh]:i.ONE_MINUS_CONSTANT_COLOR,[Eh]:i.CONSTANT_ALPHA,[Sh]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(V,Ie,Pe,je,Ze,ft,pt,At,Lt,gt){if(V===Vn){f===!0&&(ue(i.BLEND),f=!1);return}if(f===!1&&(fe(i.BLEND),f=!0),V!==lh){if(V!==w||gt!==Z){if((v!==ei||U!==ei)&&(i.blendEquation(i.FUNC_ADD),v=ei,U=ei),gt)switch(V){case Oi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.ONE,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Za:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Oi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ya:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Za:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,k=null,N=null,Q=null,P.set(0,0,0),R=0,w=V,Z=gt}return}Ze=Ze||Ie,ft=ft||Pe,pt=pt||je,(Ie!==v||Ze!==U)&&(i.blendEquationSeparate(se[Ie],se[Ze]),v=Ie,U=Ze),(Pe!==I||je!==k||ft!==N||pt!==Q)&&(i.blendFuncSeparate(le[Pe],le[je],le[ft],le[pt]),I=Pe,k=je,N=ft,Q=pt),(At.equals(P)===!1||Lt!==R)&&(i.blendColor(At.r,At.g,At.b,Lt),P.copy(At),R=Lt),w=V,Z=!1}function De(V,Ie){V.side===en?ue(i.CULL_FACE):fe(i.CULL_FACE);let Pe=V.side===Gt;Ie&&(Pe=!Pe),Ae(Pe),V.blending===Oi&&V.transparent===!1?ie(Vn):ie(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),l.setFunc(V.depthFunc),l.setTest(V.depthTest),l.setMask(V.depthWrite),o.setMask(V.colorWrite);let je=V.stencilWrite;c.setTest(je),je&&(c.setMask(V.stencilWriteMask),c.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),c.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),X(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(V){ce!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),ce=V)}function A(V){V!==oh?(fe(i.CULL_FACE),V!==xe&&(V===Xa?i.cullFace(i.BACK):V===ah?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),xe=V}function T(V){V!==z&&(ne&&i.lineWidth(V),z=V)}function X(V,Ie,Pe){V?(fe(i.POLYGON_OFFSET_FILL),(Y!==Ie||te!==Pe)&&(i.polygonOffset(Ie,Pe),Y=Ie,te=Pe)):ue(i.POLYGON_OFFSET_FILL)}function ve(V){V?fe(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function Me(V){V===void 0&&(V=i.TEXTURE0+de-1),pe!==V&&(i.activeTexture(V),pe=V)}function ye(V,Ie,Pe){Pe===void 0&&(pe===null?Pe=i.TEXTURE0+de-1:Pe=pe);let je=Le[Pe];je===void 0&&(je={type:void 0,texture:void 0},Le[Pe]=je),(je.type!==V||je.texture!==Ie)&&(pe!==Pe&&(i.activeTexture(Pe),pe=Pe),i.bindTexture(V,Ie||ee[V]),je.type=V,je.texture=Ie)}function Ge(){let V=Le[pe];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{i.compressedTexImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function $e(){try{i.texSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function st(){try{i.texSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function O(){try{i.texStorage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function be(){try{i.texStorage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(V){ze.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ze.copy(V))}function ot(V){C.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),C.copy(V))}function at(V,Ie){let Pe=d.get(Ie);Pe===void 0&&(Pe=new WeakMap,d.set(Ie,Pe));let je=Pe.get(V);je===void 0&&(je=i.getUniformBlockIndex(Ie,V.name),Pe.set(V,je))}function lt(V,Ie){let je=d.get(Ie).get(V);u.get(Ie)!==je&&(i.uniformBlockBinding(Ie,je,V.__bindingPointIndex),u.set(Ie,je))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},pe=null,Le={},m={},y=new WeakMap,b=[],g=null,f=!1,w=null,v=null,I=null,k=null,U=null,N=null,Q=null,P=new it(0,0,0),R=0,Z=!1,ce=null,xe=null,z=null,Y=null,te=null,ze.set(0,0,i.canvas.width,i.canvas.height),C.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:ue,bindFramebuffer:Te,drawBuffers:D,useProgram:Ee,setBlending:ie,setMaterial:De,setFlipSided:Ae,setCullFace:A,setLineWidth:T,setPolygonOffset:X,setScissorTest:ve,activeTexture:Me,bindTexture:ye,unbindTexture:Ge,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:Fe,texImage3D:Ce,updateUBOMapping:at,uniformBlockBinding:lt,texStorage2D:O,texStorage3D:be,texSubImage2D:$e,texSubImage3D:st,compressedTexSubImage2D:Se,compressedTexSubImage3D:ct,scissor:Je,viewport:ot,reset:Ue}}function r0(i,e,t,n,s,r,a){let o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,d,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,T){return m?new OffscreenCanvas(A,T):xr("canvas")}function b(A,T,X,ve){let Me=1;if((A.width>ve||A.height>ve)&&(Me=ve/Math.max(A.width,A.height)),Me<1||T===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let ye=T?_r:Math.floor,Ge=ye(Me*A.width),Oe=ye(Me*A.height);d===void 0&&(d=y(Ge,Oe));let ke=X?y(Ge,Oe):d;return ke.width=Ge,ke.height=Oe,ke.getContext("2d").drawImage(A,0,0,Ge,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ge+"x"+Oe+")."),ke}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return Yo(A.width)&&Yo(A.height)}function f(A){return o?!1:A.wrapS!==hn||A.wrapT!==hn||A.minFilter!==Yt&&A.minFilter!==nn}function w(A,T){return A.generateMipmaps&&T&&A.minFilter!==Yt&&A.minFilter!==nn}function v(A){i.generateMipmap(A)}function I(A,T,X,ve,Me=!1){if(o===!1)return T;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ye=T;if(T===i.RED&&(X===i.FLOAT&&(ye=i.R32F),X===i.HALF_FLOAT&&(ye=i.R16F),X===i.UNSIGNED_BYTE&&(ye=i.R8)),T===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(ye=i.R8UI),X===i.UNSIGNED_SHORT&&(ye=i.R16UI),X===i.UNSIGNED_INT&&(ye=i.R32UI),X===i.BYTE&&(ye=i.R8I),X===i.SHORT&&(ye=i.R16I),X===i.INT&&(ye=i.R32I)),T===i.RG&&(X===i.FLOAT&&(ye=i.RG32F),X===i.HALF_FLOAT&&(ye=i.RG16F),X===i.UNSIGNED_BYTE&&(ye=i.RG8)),T===i.RGBA){let Ge=Me?fr:yt.getTransfer(ve);X===i.FLOAT&&(ye=i.RGBA32F),X===i.HALF_FLOAT&&(ye=i.RGBA16F),X===i.UNSIGNED_BYTE&&(ye=Ge===Mt?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(ye=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(ye=i.RGB5_A1)}return(ye===i.R16F||ye===i.R32F||ye===i.RG16F||ye===i.RG32F||ye===i.RGBA16F||ye===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function k(A,T,X){return w(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==Yt&&A.minFilter!==nn?Math.log2(Math.max(T.width,T.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?T.mipmaps.length:1}function U(A){return A===Yt||A===$a||A===so?i.NEAREST:i.LINEAR}function N(A){let T=A.target;T.removeEventListener("dispose",N),P(T),T.isVideoTexture&&u.delete(T)}function Q(A){let T=A.target;T.removeEventListener("dispose",Q),Z(T)}function P(A){let T=n.get(A);if(T.__webglInit===void 0)return;let X=A.source,ve=p.get(X);if(ve){let Me=ve[T.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&R(A),Object.keys(ve).length===0&&p.delete(X)}n.remove(A)}function R(A){let T=n.get(A);i.deleteTexture(T.__webglTexture);let X=A.source,ve=p.get(X);delete ve[T.__cacheKey],a.memory.textures--}function Z(A){let T=A.texture,X=n.get(A),ve=n.get(T);if(ve.__webglTexture!==void 0&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(X.__webglFramebuffer[Me]))for(let ye=0;ye<X.__webglFramebuffer[Me].length;ye++)i.deleteFramebuffer(X.__webglFramebuffer[Me][ye]);else i.deleteFramebuffer(X.__webglFramebuffer[Me]);X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer[Me])}else{if(Array.isArray(X.__webglFramebuffer))for(let Me=0;Me<X.__webglFramebuffer.length;Me++)i.deleteFramebuffer(X.__webglFramebuffer[Me]);else i.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&i.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&i.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let Me=0;Me<X.__webglColorRenderbuffer.length;Me++)X.__webglColorRenderbuffer[Me]&&i.deleteRenderbuffer(X.__webglColorRenderbuffer[Me]);X.__webglDepthRenderbuffer&&i.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Me=0,ye=T.length;Me<ye;Me++){let Ge=n.get(T[Me]);Ge.__webglTexture&&(i.deleteTexture(Ge.__webglTexture),a.memory.textures--),n.remove(T[Me])}n.remove(T),n.remove(A)}let ce=0;function xe(){ce=0}function z(){let A=ce;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),ce+=1,A}function Y(A){let T=[];return T.push(A.wrapS),T.push(A.wrapT),T.push(A.wrapR||0),T.push(A.magFilter),T.push(A.minFilter),T.push(A.anisotropy),T.push(A.internalFormat),T.push(A.format),T.push(A.type),T.push(A.generateMipmaps),T.push(A.premultiplyAlpha),T.push(A.flipY),T.push(A.unpackAlignment),T.push(A.colorSpace),T.join()}function te(A,T){let X=n.get(A);if(A.isVideoTexture&&De(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){let ve=A.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(X,A,T);return}}t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+T)}function de(A,T){let X=n.get(A);if(A.version>0&&X.__version!==A.version){ze(X,A,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+T)}function ne(A,T){let X=n.get(A);if(A.version>0&&X.__version!==A.version){ze(X,A,T);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+T)}function ae(A,T){let X=n.get(A);if(A.version>0&&X.__version!==A.version){C(X,A,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+T)}let me={[ds]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},pe={[Yt]:i.NEAREST,[$a]:i.NEAREST_MIPMAP_NEAREST,[so]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[Bh]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},Le={[Kh]:i.NEVER,[nu]:i.ALWAYS,[$h]:i.LESS,[Bc]:i.LEQUAL,[jh]:i.EQUAL,[tu]:i.GEQUAL,[Qh]:i.GREATER,[eu]:i.NOTEQUAL};function $(A,T,X){if(X?(i.texParameteri(A,i.TEXTURE_WRAP_S,me[T.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,me[T.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,me[T.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,pe[T.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,pe[T.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==hn||T.wrapT!==hn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,U(T.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,U(T.minFilter)),T.minFilter!==Yt&&T.minFilter!==nn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Le[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let ve=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Yt||T.minFilter!==so&&T.minFilter!==fs||T.type===kn&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===ps&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(A,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function _e(A,T){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,T.addEventListener("dispose",N));let ve=T.source,Me=p.get(ve);Me===void 0&&(Me={},p.set(ve,Me));let ye=Y(T);if(ye!==A.__cacheKey){Me[ye]===void 0&&(Me[ye]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,X=!0),Me[ye].usedTimes++;let Ge=Me[A.__cacheKey];Ge!==void 0&&(Me[A.__cacheKey].usedTimes--,Ge.usedTimes===0&&R(T)),A.__cacheKey=ye,A.__webglTexture=Me[ye].texture}return X}function ze(A,T,X){let ve=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ve=i.TEXTURE_3D);let Me=_e(A,T),ye=T.source;t.bindTexture(ve,A.__webglTexture,i.TEXTURE0+X);let Ge=n.get(ye);if(ye.version!==Ge.__version||Me===!0){t.activeTexture(i.TEXTURE0+X);let Oe=yt.getPrimaries(yt.workingColorSpace),ke=T.colorSpace===sn?null:yt.getPrimaries(T.colorSpace),$e=T.colorSpace===sn||Oe===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let st=f(T)&&g(T.image)===!1,Se=b(T.image,st,!1,s.maxTextureSize);Se=Ae(T,Se);let ct=g(Se)||o,O=r.convert(T.format,T.colorSpace),be=r.convert(T.type),Fe=I(T.internalFormat,O,be,T.colorSpace,T.isVideoTexture);$(ve,T,ct);let Ce,Je=T.mipmaps,ot=o&&T.isVideoTexture!==!0&&Fe!==Nc,at=Ge.__version===void 0||Me===!0,lt=k(T,Se,ct);if(T.isDepthTexture)Fe=i.DEPTH_COMPONENT,o?T.type===kn?Fe=i.DEPTH_COMPONENT32F:T.type===Hn?Fe=i.DEPTH_COMPONENT24:T.type===ii?Fe=i.DEPTH24_STENCIL8:Fe=i.DEPTH_COMPONENT16:T.type===kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===si&&Fe===i.DEPTH_COMPONENT&&T.type!==Ia&&T.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Hn,be=r.convert(T.type)),T.format===Vi&&Fe===i.DEPTH_COMPONENT&&(Fe=i.DEPTH_STENCIL,T.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ii,be=r.convert(T.type))),at&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Fe,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,Fe,Se.width,Se.height,0,O,be,null));else if(T.isDataTexture)if(Je.length>0&&ct){ot&&at&&t.texStorage2D(i.TEXTURE_2D,lt,Fe,Je[0].width,Je[0].height);for(let Ue=0,V=Je.length;Ue<V;Ue++)Ce=Je[Ue],ot?t.texSubImage2D(i.TEXTURE_2D,Ue,0,0,Ce.width,Ce.height,O,be,Ce.data):t.texImage2D(i.TEXTURE_2D,Ue,Fe,Ce.width,Ce.height,0,O,be,Ce.data);T.generateMipmaps=!1}else ot?(at&&t.texStorage2D(i.TEXTURE_2D,lt,Fe,Se.width,Se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,O,be,Se.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,Se.width,Se.height,0,O,be,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Fe,Je[0].width,Je[0].height,Se.depth);for(let Ue=0,V=Je.length;Ue<V;Ue++)Ce=Je[Ue],T.format!==un?O!==null?ot?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ue,0,0,0,Ce.width,Ce.height,Se.depth,O,Ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ue,Fe,Ce.width,Ce.height,Se.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ue,0,0,0,Ce.width,Ce.height,Se.depth,O,be,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ue,Fe,Ce.width,Ce.height,Se.depth,0,O,be,Ce.data)}else{ot&&at&&t.texStorage2D(i.TEXTURE_2D,lt,Fe,Je[0].width,Je[0].height);for(let Ue=0,V=Je.length;Ue<V;Ue++)Ce=Je[Ue],T.format!==un?O!==null?ot?t.compressedTexSubImage2D(i.TEXTURE_2D,Ue,0,0,Ce.width,Ce.height,O,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,Ue,Fe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?t.texSubImage2D(i.TEXTURE_2D,Ue,0,0,Ce.width,Ce.height,O,be,Ce.data):t.texImage2D(i.TEXTURE_2D,Ue,Fe,Ce.width,Ce.height,0,O,be,Ce.data)}else if(T.isDataArrayTexture)ot?(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Fe,Se.width,Se.height,Se.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,O,be,Se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,Se.width,Se.height,Se.depth,0,O,be,Se.data);else if(T.isData3DTexture)ot?(at&&t.texStorage3D(i.TEXTURE_3D,lt,Fe,Se.width,Se.height,Se.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,O,be,Se.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,Se.width,Se.height,Se.depth,0,O,be,Se.data);else if(T.isFramebufferTexture){if(at)if(ot)t.texStorage2D(i.TEXTURE_2D,lt,Fe,Se.width,Se.height);else{let Ue=Se.width,V=Se.height;for(let Ie=0;Ie<lt;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Fe,Ue,V,0,O,be,null),Ue>>=1,V>>=1}}else if(Je.length>0&&ct){ot&&at&&t.texStorage2D(i.TEXTURE_2D,lt,Fe,Je[0].width,Je[0].height);for(let Ue=0,V=Je.length;Ue<V;Ue++)Ce=Je[Ue],ot?t.texSubImage2D(i.TEXTURE_2D,Ue,0,0,O,be,Ce):t.texImage2D(i.TEXTURE_2D,Ue,Fe,O,be,Ce);T.generateMipmaps=!1}else ot?(at&&t.texStorage2D(i.TEXTURE_2D,lt,Fe,Se.width,Se.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,O,be,Se)):t.texImage2D(i.TEXTURE_2D,0,Fe,O,be,Se);w(T,ct)&&v(ve),Ge.__version=ye.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function C(A,T,X){if(T.image.length!==6)return;let ve=_e(A,T),Me=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+X);let ye=n.get(Me);if(Me.version!==ye.__version||ve===!0){t.activeTexture(i.TEXTURE0+X);let Ge=yt.getPrimaries(yt.workingColorSpace),Oe=T.colorSpace===sn?null:yt.getPrimaries(T.colorSpace),ke=T.colorSpace===sn||Ge===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let $e=T.isCompressedTexture||T.image[0].isCompressedTexture,st=T.image[0]&&T.image[0].isDataTexture,Se=[];for(let Ue=0;Ue<6;Ue++)!$e&&!st?Se[Ue]=b(T.image[Ue],!1,!0,s.maxCubemapSize):Se[Ue]=st?T.image[Ue].image:T.image[Ue],Se[Ue]=Ae(T,Se[Ue]);let ct=Se[0],O=g(ct)||o,be=r.convert(T.format,T.colorSpace),Fe=r.convert(T.type),Ce=I(T.internalFormat,be,Fe,T.colorSpace),Je=o&&T.isVideoTexture!==!0,ot=ye.__version===void 0||ve===!0,at=k(T,ct,O);$(i.TEXTURE_CUBE_MAP,T,O);let lt;if($e){Je&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ce,ct.width,ct.height);for(let Ue=0;Ue<6;Ue++){lt=Se[Ue].mipmaps;for(let V=0;V<lt.length;V++){let Ie=lt[V];T.format!==un?be!==null?Je?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V,0,0,Ie.width,Ie.height,be,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V,Ce,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V,0,0,Ie.width,Ie.height,be,Fe,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V,Ce,Ie.width,Ie.height,0,be,Fe,Ie.data)}}}else{lt=T.mipmaps,Je&&ot&&(lt.length>0&&at++,t.texStorage2D(i.TEXTURE_CUBE_MAP,at,Ce,Se[0].width,Se[0].height));for(let Ue=0;Ue<6;Ue++)if(st){Je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,Se[Ue].width,Se[Ue].height,be,Fe,Se[Ue].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ce,Se[Ue].width,Se[Ue].height,0,be,Fe,Se[Ue].data);for(let V=0;V<lt.length;V++){let Pe=lt[V].image[Ue].image;Je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V+1,0,0,Pe.width,Pe.height,be,Fe,Pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V+1,Ce,Pe.width,Pe.height,0,be,Fe,Pe.data)}}else{Je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,0,0,be,Fe,Se[Ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ce,be,Fe,Se[Ue]);for(let V=0;V<lt.length;V++){let Ie=lt[V];Je?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V+1,0,0,be,Fe,Ie.image[Ue]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,V+1,Ce,be,Fe,Ie.image[Ue])}}}w(T,O)&&v(i.TEXTURE_CUBE_MAP),ye.__version=Me.version,T.onUpdate&&T.onUpdate(T)}A.__version=T.version}function J(A,T,X,ve,Me,ye){let Ge=r.convert(X.format,X.colorSpace),Oe=r.convert(X.type),ke=I(X.internalFormat,Ge,Oe,X.colorSpace);if(!n.get(T).__hasExternalTextures){let st=Math.max(1,T.width>>ye),Se=Math.max(1,T.height>>ye);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,ye,ke,st,Se,T.depth,0,Ge,Oe,null):t.texImage2D(Me,ye,ke,st,Se,0,Ge,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ie(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,Me,n.get(X).__webglTexture,0,le(T)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,Me,n.get(X).__webglTexture,ye),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(A,T,X){if(i.bindRenderbuffer(i.RENDERBUFFER,A),T.depthBuffer&&!T.stencilBuffer){let ve=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(X||ie(T)){let Me=T.depthTexture;Me&&Me.isDepthTexture&&(Me.type===kn?ve=i.DEPTH_COMPONENT32F:Me.type===Hn&&(ve=i.DEPTH_COMPONENT24));let ye=le(T);ie(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ve,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ve,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ve,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(T.depthBuffer&&T.stencilBuffer){let ve=le(T);X&&ie(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,T.width,T.height):ie(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let ve=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Me=0;Me<ve.length;Me++){let ye=ve[Me],Ge=r.convert(ye.format,ye.colorSpace),Oe=r.convert(ye.type),ke=I(ye.internalFormat,Ge,Oe,ye.colorSpace),$e=le(T);X&&ie(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,ke,T.width,T.height):ie(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$e,ke,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ke,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(A,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),te(T.depthTexture,0);let ve=n.get(T.depthTexture).__webglTexture,Me=le(T);if(T.depthTexture.format===si)ie(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Vi)ie(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function ue(A){let T=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!T.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,A)}else if(X){T.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ve]),T.__webglDepthbuffer[ve]=i.createRenderbuffer(),ee(T.__webglDepthbuffer[ve],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),ee(T.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(A,T,X){let ve=n.get(A);T!==void 0&&J(ve.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ue(A)}function D(A){let T=A.texture,X=n.get(A),ve=n.get(T);A.addEventListener("dispose",Q),A.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=T.version,a.memory.textures++);let Me=A.isWebGLCubeRenderTarget===!0,ye=A.isWebGLMultipleRenderTargets===!0,Ge=g(A)||o;if(Me){X.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(o&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer[Oe]=[];for(let ke=0;ke<T.mipmaps.length;ke++)X.__webglFramebuffer[Oe][ke]=i.createFramebuffer()}else X.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){X.__webglFramebuffer=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)X.__webglFramebuffer[Oe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(ye)if(s.drawBuffers){let Oe=A.texture;for(let ke=0,$e=Oe.length;ke<$e;ke++){let st=n.get(Oe[ke]);st.__webglTexture===void 0&&(st.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&ie(A)===!1){let Oe=ye?T:[T];X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ke=0;ke<Oe.length;ke++){let $e=Oe[ke];X.__webglColorRenderbuffer[ke]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ke]);let st=r.convert($e.format,$e.colorSpace),Se=r.convert($e.type),ct=I($e.internalFormat,st,Se,$e.colorSpace,A.isXRRenderTarget===!0),O=le(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,O,ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,X.__webglColorRenderbuffer[ke])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),$(i.TEXTURE_CUBE_MAP,T,Ge);for(let Oe=0;Oe<6;Oe++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)J(X.__webglFramebuffer[Oe][ke],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ke);else J(X.__webglFramebuffer[Oe],A,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);w(T,Ge)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){let Oe=A.texture;for(let ke=0,$e=Oe.length;ke<$e;ke++){let st=Oe[ke],Se=n.get(st);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),$(i.TEXTURE_2D,st,Ge),J(X.__webglFramebuffer,A,st,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,0),w(st,Ge)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?Oe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Oe,ve.__webglTexture),$(Oe,T,Ge),o&&T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)J(X.__webglFramebuffer[ke],A,T,i.COLOR_ATTACHMENT0,Oe,ke);else J(X.__webglFramebuffer,A,T,i.COLOR_ATTACHMENT0,Oe,0);w(T,Ge)&&v(Oe),t.unbindTexture()}A.depthBuffer&&ue(A)}function Ee(A){let T=g(A)||o,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ve=0,Me=X.length;ve<Me;ve++){let ye=X[ve];if(w(ye,T)){let Ge=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Oe=n.get(ye).__webglTexture;t.bindTexture(Ge,Oe),v(Ge),t.unbindTexture()}}}function se(A){if(o&&A.samples>0&&ie(A)===!1){let T=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,ve=A.height,Me=i.COLOR_BUFFER_BIT,ye=[],Ge=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(A),ke=A.isWebGLMultipleRenderTargets===!0;if(ke)for(let $e=0;$e<T.length;$e++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){ye.push(i.COLOR_ATTACHMENT0+$e),A.depthBuffer&&ye.push(Ge);let st=Oe.__ignoreDepthValues!==void 0?Oe.__ignoreDepthValues:!1;if(st===!1&&(A.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),ke&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[$e]),st===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ge]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ge])),ke){let Se=n.get(T[$e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Se,0)}i.blitFramebuffer(0,0,X,ve,0,0,X,ve,Me,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ye)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ke)for(let $e=0;$e<T.length;$e++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[$e]);let st=n.get(T[$e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,st,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}}function le(A){return Math.min(s.maxSamples,A.samples)}function ie(A){let T=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function De(A){let T=a.render.frame;u.get(A)!==T&&(u.set(A,T),A.update())}function Ae(A,T){let X=A.colorSpace,ve=A.format,Me=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===qo||X!==Cn&&X!==sn&&(yt.getTransfer(X)===Mt?o===!1?e.has("EXT_sRGB")===!0&&ve===un?(A.format=qo,A.minFilter=nn,A.generateMipmaps=!1):T=yr.sRGBToLinear(T):(ve!==un||Me!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),T}this.allocateTextureUnit=z,this.resetTextureUnits=xe,this.setTexture2D=te,this.setTexture2DArray=de,this.setTexture3D=ne,this.setTextureCube=ae,this.rebindTextures=Te,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=J,this.useMultisampledRTT=ie}function o0(i,e,t){let n=t.isWebGL2;function s(r,a=sn){let o,l=yt.getTransfer(a);if(r===Wn)return i.UNSIGNED_BYTE;if(r===Pc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Ic)return i.UNSIGNED_SHORT_5_5_5_1;if(r===zh)return i.BYTE;if(r===Hh)return i.SHORT;if(r===Ia)return i.UNSIGNED_SHORT;if(r===Cc)return i.INT;if(r===Hn)return i.UNSIGNED_INT;if(r===kn)return i.FLOAT;if(r===ps)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===kh)return i.ALPHA;if(r===un)return i.RGBA;if(r===Vh)return i.LUMINANCE;if(r===Gh)return i.LUMINANCE_ALPHA;if(r===si)return i.DEPTH_COMPONENT;if(r===Vi)return i.DEPTH_STENCIL;if(r===qo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Wh)return i.RED;if(r===Lc)return i.RED_INTEGER;if(r===Xh)return i.RG;if(r===Dc)return i.RG_INTEGER;if(r===Uc)return i.RGBA_INTEGER;if(r===ro||r===oo||r===ao||r===lo)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===ro)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===ro)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ja||r===Qa||r===el||r===tl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===el)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===tl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nl||r===il)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===nl)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===il)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sl||r===rl||r===ol||r===al||r===ll||r===cl||r===hl||r===ul||r===dl||r===fl||r===pl||r===ml||r===gl||r===_l)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===sl)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rl)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ol)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===al)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ll)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cl)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hl)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ul)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===dl)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fl)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pl)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ml)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gl)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_l)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===co||r===xl||r===yl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===co)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===qh||r===vl||r===Ml||r===El)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===co)return o.COMPRESSED_RED_RGTC1_EXT;if(r===vl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ml)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===El)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ii?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var oa=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},et=class extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},a0={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let b of e.hand.values()){let g=t.getJointPose(b,n),f=this._getHandJoint(c,b);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,y=.005;c.inputState.pinching&&p>m+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(a0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},aa=class extends _n{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,y=null,b=t.getContextAttributes(),g=null,f=null,w=[],v=[],I=new we,k=null,U=new Vt;U.layers.enable(1),U.viewport=new St;let N=new Vt;N.layers.enable(2),N.viewport=new St;let Q=[U,N],P=new oa;P.layers.enable(1),P.layers.enable(2);let R=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let _e=w[$];return _e===void 0&&(_e=new cs,w[$]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function($){let _e=w[$];return _e===void 0&&(_e=new cs,w[$]=_e),_e.getGripSpace()},this.getHand=function($){let _e=w[$];return _e===void 0&&(_e=new cs,w[$]=_e),_e.getHandSpace()};function ce($){let _e=v.indexOf($.inputSource);if(_e===-1)return;let ze=w[_e];ze!==void 0&&(ze.update($.inputSource,$.frame,c||a),ze.dispatchEvent({type:$.type,data:$.inputSource}))}function xe(){s.removeEventListener("select",ce),s.removeEventListener("selectstart",ce),s.removeEventListener("selectend",ce),s.removeEventListener("squeeze",ce),s.removeEventListener("squeezestart",ce),s.removeEventListener("squeezeend",ce),s.removeEventListener("end",xe),s.removeEventListener("inputsourceschange",z);for(let $=0;$<w.length;$++){let _e=v[$];_e!==null&&(v[$]=null,w[$].disconnect(_e))}R=null,Z=null,e.setRenderTarget(g),m=null,p=null,d=null,s=null,f=null,Le.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(g=e.getRenderTarget(),s.addEventListener("select",ce),s.addEventListener("selectstart",ce),s.addEventListener("selectend",ce),s.addEventListener("squeeze",ce),s.addEventListener("squeezestart",ce),s.addEventListener("squeezeend",ce),s.addEventListener("end",xe),s.addEventListener("inputsourceschange",z),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let _e={antialias:s.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),f=new Pn(m.framebufferWidth,m.framebufferHeight,{format:un,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let _e=null,ze=null,C=null;b.depth&&(C=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=b.stencil?Vi:si,ze=b.stencil?ii:Hn);let J={colorFormat:t.RGBA8,depthFormat:C,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(J),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),f=new Pn(p.textureWidth,p.textureHeight,{format:un,type:Wn,depthTexture:new Ar(p.textureWidth,p.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});let ee=e.properties.get(f);ee.__ignoreDepthValues=p.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Le.setContext(s),Le.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function z($){for(let _e=0;_e<$.removed.length;_e++){let ze=$.removed[_e],C=v.indexOf(ze);C>=0&&(v[C]=null,w[C].disconnect(ze))}for(let _e=0;_e<$.added.length;_e++){let ze=$.added[_e],C=v.indexOf(ze);if(C===-1){for(let ee=0;ee<w.length;ee++)if(ee>=v.length){v.push(ze),C=ee;break}else if(v[ee]===null){v[ee]=ze,C=ee;break}if(C===-1)break}let J=w[C];J&&J.connect(ze)}}let Y=new L,te=new L;function de($,_e,ze){Y.setFromMatrixPosition(_e.matrixWorld),te.setFromMatrixPosition(ze.matrixWorld);let C=Y.distanceTo(te),J=_e.projectionMatrix.elements,ee=ze.projectionMatrix.elements,fe=J[14]/(J[10]-1),ue=J[14]/(J[10]+1),Te=(J[9]+1)/J[5],D=(J[9]-1)/J[5],Ee=(J[8]-1)/J[0],se=(ee[8]+1)/ee[0],le=fe*Ee,ie=fe*se,De=C/(-Ee+se),Ae=De*-Ee;_e.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ae),$.translateZ(De),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();let A=fe+De,T=ue+De,X=le-Ae,ve=ie+(C-Ae),Me=Te*ue/T*A,ye=D*ue/T*A;$.projectionMatrix.makePerspective(X,ve,Me,ye,A,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function ne($,_e){_e===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(_e.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;P.near=N.near=U.near=$.near,P.far=N.far=U.far=$.far,(R!==P.near||Z!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),R=P.near,Z=P.far);let _e=$.parent,ze=P.cameras;ne(P,_e);for(let C=0;C<ze.length;C++)ne(ze[C],_e);ze.length===2?de(P,U,N):P.projectionMatrix.copy(U.projectionMatrix),ae($,P,_e)};function ae($,_e,ze){ze===null?$.matrix.copy(_e.matrixWorld):($.matrix.copy(ze.matrixWorld),$.matrix.invert(),$.matrix.multiply(_e.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(_e.projectionMatrix),$.projectionMatrixInverse.copy(_e.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ms*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)};let me=null;function pe($,_e){if(u=_e.getViewerPose(c||a),y=_e,u!==null){let ze=u.views;m!==null&&(e.setRenderTargetFramebuffer(f,m.framebuffer),e.setRenderTarget(f));let C=!1;ze.length!==P.cameras.length&&(P.cameras.length=0,C=!0);for(let J=0;J<ze.length;J++){let ee=ze[J],fe=null;if(m!==null)fe=m.getViewport(ee);else{let Te=d.getViewSubImage(p,ee);fe=Te.viewport,J===0&&(e.setRenderTargetTextures(f,Te.colorTexture,p.ignoreDepthValues?void 0:Te.depthStencilTexture),e.setRenderTarget(f))}let ue=Q[J];ue===void 0&&(ue=new Vt,ue.layers.enable(J),ue.viewport=new St,Q[J]=ue),ue.matrix.fromArray(ee.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(ee.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(fe.x,fe.y,fe.width,fe.height),J===0&&(P.matrix.copy(ue.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),C===!0&&P.cameras.push(ue)}}for(let ze=0;ze<w.length;ze++){let C=v[ze],J=w[ze];C!==null&&J!==void 0&&J.update(C,_e,c||a)}me&&me($,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),y=null}let Le=new Gc;Le.setAnimationLoop(pe),this.setAnimationLoop=function($){me=$},this.dispose=function(){}}};function l0(i,e){function t(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function n(g,f){f.color.getRGB(g.fogColor.value,Vc(i)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function s(g,f,w,v,I){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(g,f):f.isMeshToonMaterial?(r(g,f),d(g,f)):f.isMeshPhongMaterial?(r(g,f),u(g,f)):f.isMeshStandardMaterial?(r(g,f),p(g,f),f.isMeshPhysicalMaterial&&m(g,f,I)):f.isMeshMatcapMaterial?(r(g,f),y(g,f)):f.isMeshDepthMaterial?r(g,f):f.isMeshDistanceMaterial?(r(g,f),b(g,f)):f.isMeshNormalMaterial?r(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,w,v):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,t(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Gt&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,t(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Gt&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,t(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,t(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);let w=e.get(f).envMap;if(w&&(g.envMap.value=w,g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap){g.lightMap.value=f.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,g.lightMapTransform)}f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,w,v){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*w,g.scale.value=v*.5,f.map&&(g.map.value=f.map,t(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,t(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,t(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,g.roughnessMapTransform)),e.get(f).envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,w){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Gt&&g.clearcoatNormalScale.value.negate())),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,g.specularIntensityMapTransform))}function y(g,f){f.matcap&&(g.matcap.value=f.matcap)}function b(g,f){let w=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c0(i,e,t,n){let s={},r={},a=[],o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(w,v){let I=v.program;n.uniformBlockBinding(w,I)}function c(w,v){let I=s[w.id];I===void 0&&(y(w),I=u(w),s[w.id]=I,w.addEventListener("dispose",g));let k=v.program;n.updateUBOMapping(w,k);let U=e.render.frame;r[w.id]!==U&&(p(w),r[w.id]=U)}function u(w){let v=d();w.__bindingPointIndex=v;let I=i.createBuffer(),k=w.__size,U=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,k,U),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,I),I}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){let v=s[w.id],I=w.uniforms,k=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let U=0,N=I.length;U<N;U++){let Q=Array.isArray(I[U])?I[U]:[I[U]];for(let P=0,R=Q.length;P<R;P++){let Z=Q[P];if(m(Z,U,P,k)===!0){let ce=Z.__offset,xe=Array.isArray(Z.value)?Z.value:[Z.value],z=0;for(let Y=0;Y<xe.length;Y++){let te=xe[Y],de=b(te);typeof te=="number"||typeof te=="boolean"?(Z.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,ce+z,Z.__data)):te.isMatrix3?(Z.__data[0]=te.elements[0],Z.__data[1]=te.elements[1],Z.__data[2]=te.elements[2],Z.__data[3]=0,Z.__data[4]=te.elements[3],Z.__data[5]=te.elements[4],Z.__data[6]=te.elements[5],Z.__data[7]=0,Z.__data[8]=te.elements[6],Z.__data[9]=te.elements[7],Z.__data[10]=te.elements[8],Z.__data[11]=0):(te.toArray(Z.__data,z),z+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ce,Z.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(w,v,I,k){let U=w.value,N=v+"_"+I;if(k[N]===void 0)return typeof U=="number"||typeof U=="boolean"?k[N]=U:k[N]=U.clone(),!0;{let Q=k[N];if(typeof U=="number"||typeof U=="boolean"){if(Q!==U)return k[N]=U,!0}else if(Q.equals(U)===!1)return Q.copy(U),!0}return!1}function y(w){let v=w.uniforms,I=0,k=16;for(let N=0,Q=v.length;N<Q;N++){let P=Array.isArray(v[N])?v[N]:[v[N]];for(let R=0,Z=P.length;R<Z;R++){let ce=P[R],xe=Array.isArray(ce.value)?ce.value:[ce.value];for(let z=0,Y=xe.length;z<Y;z++){let te=xe[z],de=b(te),ne=I%k;ne!==0&&k-ne<de.boundary&&(I+=k-ne),ce.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=I,I+=de.storage}}}let U=I%k;return U>0&&(I+=k-U),w.__size=I,w.__cache={},this}function b(w){let v={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(v.boundary=4,v.storage=4):w.isVector2?(v.boundary=8,v.storage=8):w.isVector3||w.isColor?(v.boundary=16,v.storage=12):w.isVector4?(v.boundary=16,v.storage=16):w.isMatrix3?(v.boundary=48,v.storage=48):w.isMatrix4?(v.boundary=64,v.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),v}function g(w){let v=w.target;v.removeEventListener("dispose",g);let I=a.indexOf(v.__bindingPointIndex);a.splice(I,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:f}}var xs=class{constructor(e={}){let{canvas:t=_u(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;let m=new Uint32Array(4),y=new Int32Array(4),b=null,g=null,f=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=Gn,this.toneMappingExposure=1;let v=this,I=!1,k=0,U=0,N=null,Q=-1,P=null,R=new St,Z=new St,ce=null,xe=new it(0),z=0,Y=t.width,te=t.height,de=1,ne=null,ae=null,me=new St(0,0,Y,te),pe=new St(0,0,Y,te),Le=!1,$=new _s,_e=!1,ze=!1,C=null,J=new wt,ee=new we,fe=new L,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Te(){return N===null?de:1}let D=n;function Ee(h,_){for(let M=0;M<h.length;M++){let x=h[M],S=t.getContext(x,_);if(S!==null)return S}return null}try{let h={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r160"),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),D===null){let _=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&_.shift(),D=Ee(_,h),D===null)throw Ee(_)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(h){throw console.error("THREE.WebGLRenderer: "+h.message),h}let se,le,ie,De,Ae,A,T,X,ve,Me,ye,Ge,Oe,ke,$e,st,Se,ct,O,be,Fe,Ce,Je,ot;function at(){se=new Rp(D),le=new Ep(D,se,e),se.init(le),Ce=new o0(D,se,le),ie=new s0(D,se,le),De=new Ip(D),Ae=new qm,A=new r0(D,se,ie,Ae,le,Ce,De),T=new bp(v),X=new Ap(v),ve=new Bu(D,le),Je=new vp(D,se,ve,le),Me=new Cp(D,ve,De,Je),ye=new Np(D,Me,ve,De),O=new Up(D,le,A),st=new Sp(Ae),Ge=new Xm(v,T,X,se,le,Je,st),Oe=new l0(v,Ae),ke=new Zm,$e=new e0(se,le),ct=new yp(v,T,X,ie,ye,p,l),Se=new i0(v,ye,le),ot=new c0(D,De,le,ie),be=new Mp(D,se,De,le),Fe=new Pp(D,se,De,le),De.programs=Ge.programs,v.capabilities=le,v.extensions=se,v.properties=Ae,v.renderLists=ke,v.shadowMap=Se,v.state=ie,v.info=De}at();let lt=new aa(v,D);this.xr=lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let h=se.get("WEBGL_lose_context");h&&h.loseContext()},this.forceContextRestore=function(){let h=se.get("WEBGL_lose_context");h&&h.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(h){h!==void 0&&(de=h,this.setSize(Y,te,!1))},this.getSize=function(h){return h.set(Y,te)},this.setSize=function(h,_,M=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=h,te=_,t.width=Math.floor(h*de),t.height=Math.floor(_*de),M===!0&&(t.style.width=h+"px",t.style.height=_+"px"),this.setViewport(0,0,h,_)},this.getDrawingBufferSize=function(h){return h.set(Y*de,te*de).floor()},this.setDrawingBufferSize=function(h,_,M){Y=h,te=_,de=M,t.width=Math.floor(h*M),t.height=Math.floor(_*M),this.setViewport(0,0,h,_)},this.getCurrentViewport=function(h){return h.copy(R)},this.getViewport=function(h){return h.copy(me)},this.setViewport=function(h,_,M,x){h.isVector4?me.set(h.x,h.y,h.z,h.w):me.set(h,_,M,x),ie.viewport(R.copy(me).multiplyScalar(de).floor())},this.getScissor=function(h){return h.copy(pe)},this.setScissor=function(h,_,M,x){h.isVector4?pe.set(h.x,h.y,h.z,h.w):pe.set(h,_,M,x),ie.scissor(Z.copy(pe).multiplyScalar(de).floor())},this.getScissorTest=function(){return Le},this.setScissorTest=function(h){ie.setScissorTest(Le=h)},this.setOpaqueSort=function(h){ne=h},this.setTransparentSort=function(h){ae=h},this.getClearColor=function(h){return h.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(h=!0,_=!0,M=!0){let x=0;if(h){let S=!1;if(N!==null){let E=N.texture.format;S=E===Uc||E===Dc||E===Lc}if(S){let E=N.texture.type,F=E===Wn||E===Hn||E===Ia||E===ii||E===Pc||E===Ic,H=ct.getClearColor(),B=ct.getClearAlpha(),W=H.r,K=H.g,q=H.b;F?(m[0]=W,m[1]=K,m[2]=q,m[3]=B,D.clearBufferuiv(D.COLOR,0,m)):(y[0]=W,y[1]=K,y[2]=q,y[3]=B,D.clearBufferiv(D.COLOR,0,y))}else x|=D.COLOR_BUFFER_BIT}_&&(x|=D.DEPTH_BUFFER_BIT),M&&(x|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(x)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),ke.dispose(),$e.dispose(),Ae.dispose(),T.dispose(),X.dispose(),ye.dispose(),Je.dispose(),ot.dispose(),Ge.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",Lt),lt.removeEventListener("sessionend",gt),C&&(C.dispose(),C=null),Ct.stop()};function Ue(h){h.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function V(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let h=De.autoReset,_=Se.enabled,M=Se.autoUpdate,x=Se.needsUpdate,S=Se.type;at(),De.autoReset=h,Se.enabled=_,Se.autoUpdate=M,Se.needsUpdate=x,Se.type=S}function Ie(h){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",h.statusMessage)}function Pe(h){let _=h.target;_.removeEventListener("dispose",Pe),je(_)}function je(h){Ze(h),Ae.remove(h)}function Ze(h){let _=Ae.get(h).programs;_!==void 0&&(_.forEach(function(M){Ge.releaseProgram(M)}),h.isShaderMaterial&&Ge.releaseShaderCache(h))}this.renderBufferDirect=function(h,_,M,x,S,E){_===null&&(_=ue);let F=S.isMesh&&S.matrixWorld.determinant()<0,H=io(h,_,M,x,S);ie.setMaterial(x,F);let B=M.index,W=1;if(x.wireframe===!0){if(B=Me.getWireframeAttribute(M),B===void 0)return;W=2}let K=M.drawRange,q=M.attributes.position,oe=K.start*W,ge=(K.start+K.count)*W;E!==null&&(oe=Math.max(oe,E.start*W),ge=Math.min(ge,(E.start+E.count)*W)),B!==null?(oe=Math.max(oe,0),ge=Math.min(ge,B.count)):q!=null&&(oe=Math.max(oe,0),ge=Math.min(ge,q.count));let G=ge-oe;if(G<0||G===1/0)return;Je.setup(S,x,H,M,B);let j,re=be;if(B!==null&&(j=ve.get(B),re=Fe,re.setIndex(j)),S.isMesh)x.wireframe===!0?(ie.setLineWidth(x.wireframeLinewidth*Te()),re.setMode(D.LINES)):re.setMode(D.TRIANGLES);else if(S.isLine){let he=x.linewidth;he===void 0&&(he=1),ie.setLineWidth(he*Te()),S.isLineSegments?re.setMode(D.LINES):S.isLineLoop?re.setMode(D.LINE_LOOP):re.setMode(D.LINE_STRIP)}else S.isPoints?re.setMode(D.POINTS):S.isSprite&&re.setMode(D.TRIANGLES);if(S.isBatchedMesh)re.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else if(S.isInstancedMesh)re.renderInstances(oe,G,S.count);else if(M.isInstancedBufferGeometry){let he=M._maxInstanceCount!==void 0?M._maxInstanceCount:1/0,We=Math.min(M.instanceCount,he);re.renderInstances(oe,G,We)}else re.render(oe,G)};function ft(h,_,M){h.transparent===!0&&h.side===en&&h.forceSinglePass===!1?(h.side=Gt,h.needsUpdate=!0,mi(h,_,M),h.side=qn,h.needsUpdate=!0,mi(h,_,M),h.side=en):mi(h,_,M)}this.compile=function(h,_,M=null){M===null&&(M=h),g=$e.get(M),g.init(),w.push(g),M.traverseVisible(function(S){S.isLight&&S.layers.test(_.layers)&&(g.pushLight(S),S.castShadow&&g.pushShadow(S))}),h!==M&&h.traverseVisible(function(S){S.isLight&&S.layers.test(_.layers)&&(g.pushLight(S),S.castShadow&&g.pushShadow(S))}),g.setupLights(v._useLegacyLights);let x=new Set;return h.traverse(function(S){let E=S.material;if(E)if(Array.isArray(E))for(let F=0;F<E.length;F++){let H=E[F];ft(H,M,S),x.add(H)}else ft(E,M,S),x.add(E)}),w.pop(),g=null,x},this.compileAsync=function(h,_,M=null){let x=this.compile(h,_,M);return new Promise(S=>{function E(){if(x.forEach(function(F){Ae.get(F).currentProgram.isReady()&&x.delete(F)}),x.size===0){S(h);return}setTimeout(E,10)}se.get("KHR_parallel_shader_compile")!==null?E():setTimeout(E,10)})};let pt=null;function At(h){pt&&pt(h)}function Lt(){Ct.stop()}function gt(){Ct.start()}let Ct=new Gc;Ct.setAnimationLoop(At),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(h){pt=h,lt.setAnimationLoop(h),h===null?Ct.stop():Ct.start()},lt.addEventListener("sessionstart",Lt),lt.addEventListener("sessionend",gt),this.render=function(h,_){if(_!==void 0&&_.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;h.matrixWorldAutoUpdate===!0&&h.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(_),_=lt.getCamera()),h.isScene===!0&&h.onBeforeRender(v,h,_,N),g=$e.get(h,w.length),g.init(),w.push(g),J.multiplyMatrices(_.projectionMatrix,_.matrixWorldInverse),$.setFromProjectionMatrix(J),ze=this.localClippingEnabled,_e=st.init(this.clippingPlanes,ze),b=ke.get(h,f.length),b.init(),f.push(b),Jt(h,_,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(ne,ae),this.info.render.frame++,_e===!0&&st.beginShadows();let M=g.state.shadowsArray;if(Se.render(M,h,_),_e===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(b,h),g.setupLights(v._useLegacyLights),_.isArrayCamera){let x=_.cameras;for(let S=0,E=x.length;S<E;S++){let F=x[S];pi(b,h,F,F.viewport)}}else pi(b,h,_);N!==null&&(A.updateMultisampleRenderTarget(N),A.updateRenderTargetMipmap(N)),h.isScene===!0&&h.onAfterRender(v,h,_),Je.resetDefaultState(),Q=-1,P=null,w.pop(),w.length>0?g=w[w.length-1]:g=null,f.pop(),f.length>0?b=f[f.length-1]:b=null};function Jt(h,_,M,x){if(h.visible===!1)return;if(h.layers.test(_.layers)){if(h.isGroup)M=h.renderOrder;else if(h.isLOD)h.autoUpdate===!0&&h.update(_);else if(h.isLight)g.pushLight(h),h.castShadow&&g.pushShadow(h);else if(h.isSprite){if(!h.frustumCulled||$.intersectsSprite(h)){x&&fe.setFromMatrixPosition(h.matrixWorld).applyMatrix4(J);let F=ye.update(h),H=h.material;H.visible&&b.push(h,F,H,M,fe.z,null)}}else if((h.isMesh||h.isLine||h.isPoints)&&(!h.frustumCulled||$.intersectsObject(h))){let F=ye.update(h),H=h.material;if(x&&(h.boundingSphere!==void 0?(h.boundingSphere===null&&h.computeBoundingSphere(),fe.copy(h.boundingSphere.center)):(F.boundingSphere===null&&F.computeBoundingSphere(),fe.copy(F.boundingSphere.center)),fe.applyMatrix4(h.matrixWorld).applyMatrix4(J)),Array.isArray(H)){let B=F.groups;for(let W=0,K=B.length;W<K;W++){let q=B[W],oe=H[q.materialIndex];oe&&oe.visible&&b.push(h,F,oe,M,fe.z,q)}}else H.visible&&b.push(h,F,H,M,fe.z,null)}}let E=h.children;for(let F=0,H=E.length;F<H;F++)Jt(E[F],_,M,x)}function pi(h,_,M,x){let S=h.opaque,E=h.transmissive,F=h.transparent;g.setupLightsView(M),_e===!0&&st.setGlobalState(v.clippingPlanes,M),E.length>0&&no(S,E,_,M),x&&ie.viewport(R.copy(x)),S.length>0&&Mn(S,_,M),E.length>0&&Mn(E,_,M),F.length>0&&Mn(F,_,M),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function no(h,_,M,x){if((M.isScene===!0?M.overrideMaterial:null)!==null)return;let E=le.isWebGL2;C===null&&(C=new Pn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")?ps:Wn,minFilter:fs,samples:E?4:0})),v.getDrawingBufferSize(ee),E?C.setSize(ee.x,ee.y):C.setSize(_r(ee.x),_r(ee.y));let F=v.getRenderTarget();v.setRenderTarget(C),v.getClearColor(xe),z=v.getClearAlpha(),z<1&&v.setClearColor(16777215,.5),v.clear();let H=v.toneMapping;v.toneMapping=Gn,Mn(h,M,x),A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C);let B=!1;for(let W=0,K=_.length;W<K;W++){let q=_[W],oe=q.object,ge=q.geometry,G=q.material,j=q.group;if(G.side===en&&oe.layers.test(x.layers)){let re=G.side;G.side=Gt,G.needsUpdate=!0,Zn(oe,M,x,ge,G,j),G.side=re,G.needsUpdate=!0,B=!0}}B===!0&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),v.setRenderTarget(F),v.setClearColor(xe,z),v.toneMapping=H}function Mn(h,_,M){let x=_.isScene===!0?_.overrideMaterial:null;for(let S=0,E=h.length;S<E;S++){let F=h[S],H=F.object,B=F.geometry,W=x===null?F.material:x,K=F.group;H.layers.test(M.layers)&&Zn(H,_,M,B,W,K)}}function Zn(h,_,M,x,S,E){h.onBeforeRender(v,_,M,x,S,E),h.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,h.matrixWorld),h.normalMatrix.getNormalMatrix(h.modelViewMatrix),S.onBeforeRender(v,_,M,x,h,E),S.transparent===!0&&S.side===en&&S.forceSinglePass===!1?(S.side=Gt,S.needsUpdate=!0,v.renderBufferDirect(M,_,x,S,h,E),S.side=qn,S.needsUpdate=!0,v.renderBufferDirect(M,_,x,S,h,E),S.side=en):v.renderBufferDirect(M,_,x,S,h,E),h.onAfterRender(v,_,M,x,S,E)}function mi(h,_,M){_.isScene!==!0&&(_=ue);let x=Ae.get(h),S=g.state.lights,E=g.state.shadowsArray,F=S.state.version,H=Ge.getParameters(h,S.state,E,_,M),B=Ge.getProgramCacheKey(H),W=x.programs;x.environment=h.isMeshStandardMaterial?_.environment:null,x.fog=_.fog,x.envMap=(h.isMeshStandardMaterial?X:T).get(h.envMap||x.environment),W===void 0&&(h.addEventListener("dispose",Pe),W=new Map,x.programs=W);let K=W.get(B);if(K!==void 0){if(x.currentProgram===K&&x.lightsStateVersion===F)return Tt(h,H),K}else H.uniforms=Ge.getUniforms(h),h.onBuild(M,H,v),h.onBeforeCompile(H,v),K=Ge.acquireProgram(H,B),W.set(B,K),x.uniforms=H.uniforms;let q=x.uniforms;return(!h.isShaderMaterial&&!h.isRawShaderMaterial||h.clipping===!0)&&(q.clippingPlanes=st.uniform),Tt(h,H),x.needsLights=Ds(h),x.lightsStateVersion=F,x.needsLights&&(q.ambientLightColor.value=S.state.ambient,q.lightProbe.value=S.state.probe,q.directionalLights.value=S.state.directional,q.directionalLightShadows.value=S.state.directionalShadow,q.spotLights.value=S.state.spot,q.spotLightShadows.value=S.state.spotShadow,q.rectAreaLights.value=S.state.rectArea,q.ltc_1.value=S.state.rectAreaLTC1,q.ltc_2.value=S.state.rectAreaLTC2,q.pointLights.value=S.state.point,q.pointLightShadows.value=S.state.pointShadow,q.hemisphereLights.value=S.state.hemi,q.directionalShadowMap.value=S.state.directionalShadowMap,q.directionalShadowMatrix.value=S.state.directionalShadowMatrix,q.spotShadowMap.value=S.state.spotShadowMap,q.spotLightMatrix.value=S.state.spotLightMatrix,q.spotLightMap.value=S.state.spotLightMap,q.pointShadowMap.value=S.state.pointShadowMap,q.pointShadowMatrix.value=S.state.pointShadowMatrix),x.currentProgram=K,x.uniformsList=null,K}function es(h){if(h.uniformsList===null){let _=h.currentProgram.getUniforms();h.uniformsList=zi.seqWithValue(_.seq,h.uniforms)}return h.uniformsList}function Tt(h,_){let M=Ae.get(h);M.outputColorSpace=_.outputColorSpace,M.batching=_.batching,M.instancing=_.instancing,M.instancingColor=_.instancingColor,M.skinning=_.skinning,M.morphTargets=_.morphTargets,M.morphNormals=_.morphNormals,M.morphColors=_.morphColors,M.morphTargetsCount=_.morphTargetsCount,M.numClippingPlanes=_.numClippingPlanes,M.numIntersection=_.numClipIntersection,M.vertexAlphas=_.vertexAlphas,M.vertexTangents=_.vertexTangents,M.toneMapping=_.toneMapping}function io(h,_,M,x,S){_.isScene!==!0&&(_=ue),A.resetTextureUnits();let E=_.fog,F=x.isMeshStandardMaterial?_.environment:null,H=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Cn,B=(x.isMeshStandardMaterial?X:T).get(x.envMap||F),W=x.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,K=!!M.attributes.tangent&&(!!x.normalMap||x.anisotropy>0),q=!!M.morphAttributes.position,oe=!!M.morphAttributes.normal,ge=!!M.morphAttributes.color,G=Gn;x.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(G=v.toneMapping);let j=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,re=j!==void 0?j.length:0,he=Ae.get(x),We=g.state.lights;if(_e===!0&&(ze===!0||h!==P)){let rt=h===P&&x.id===Q;st.setState(x,h,rt)}let Re=!1;x.version===he.__version?(he.needsLights&&he.lightsStateVersion!==We.state.version||he.outputColorSpace!==H||S.isBatchedMesh&&he.batching===!1||!S.isBatchedMesh&&he.batching===!0||S.isInstancedMesh&&he.instancing===!1||!S.isInstancedMesh&&he.instancing===!0||S.isSkinnedMesh&&he.skinning===!1||!S.isSkinnedMesh&&he.skinning===!0||S.isInstancedMesh&&he.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&he.instancingColor===!1&&S.instanceColor!==null||he.envMap!==B||x.fog===!0&&he.fog!==E||he.numClippingPlanes!==void 0&&(he.numClippingPlanes!==st.numPlanes||he.numIntersection!==st.numIntersection)||he.vertexAlphas!==W||he.vertexTangents!==K||he.morphTargets!==q||he.morphNormals!==oe||he.morphColors!==ge||he.toneMapping!==G||le.isWebGL2===!0&&he.morphTargetsCount!==re)&&(Re=!0):(Re=!0,he.__version=x.version);let Ne=he.currentProgram;Re===!0&&(Ne=mi(x,_,S));let nt=!1,He=!1,Ye=!1,Ve=Ne.getUniforms(),Xe=he.uniforms;if(ie.useProgram(Ne.program)&&(nt=!0,He=!0,Ye=!0),x.id!==Q&&(Q=x.id,He=!0),nt||P!==h){Ve.setValue(D,"projectionMatrix",h.projectionMatrix),Ve.setValue(D,"viewMatrix",h.matrixWorldInverse);let rt=Ve.map.cameraPosition;rt!==void 0&&rt.setValue(D,fe.setFromMatrixPosition(h.matrixWorld)),le.logarithmicDepthBuffer&&Ve.setValue(D,"logDepthBufFC",2/(Math.log(h.far+1)/Math.LN2)),(x.isMeshPhongMaterial||x.isMeshToonMaterial||x.isMeshLambertMaterial||x.isMeshBasicMaterial||x.isMeshStandardMaterial||x.isShaderMaterial)&&Ve.setValue(D,"isOrthographic",h.isOrthographicCamera===!0),P!==h&&(P=h,He=!0,Ye=!0)}if(S.isSkinnedMesh){Ve.setOptional(D,S,"bindMatrix"),Ve.setOptional(D,S,"bindMatrixInverse");let rt=S.skeleton;rt&&(le.floatVertexTextures?(rt.boneTexture===null&&rt.computeBoneTexture(),Ve.setValue(D,"boneTexture",rt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}S.isBatchedMesh&&(Ve.setOptional(D,S,"batchingTexture"),Ve.setValue(D,"batchingTexture",S._matricesTexture,A));let tt=M.morphAttributes;if((tt.position!==void 0||tt.normal!==void 0||tt.color!==void 0&&le.isWebGL2===!0)&&O.update(S,M,Ne),(He||he.receiveShadow!==S.receiveShadow)&&(he.receiveShadow=S.receiveShadow,Ve.setValue(D,"receiveShadow",S.receiveShadow)),x.isMeshGouraudMaterial&&x.envMap!==null&&(Xe.envMap.value=B,Xe.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1),He&&(Ve.setValue(D,"toneMappingExposure",v.toneMappingExposure),he.needsLights&&Ls(Xe,Ye),E&&x.fog===!0&&Oe.refreshFogUniforms(Xe,E),Oe.refreshMaterialUniforms(Xe,x,de,te,C),zi.upload(D,es(he),Xe,A)),x.isShaderMaterial&&x.uniformsNeedUpdate===!0&&(zi.upload(D,es(he),Xe,A),x.uniformsNeedUpdate=!1),x.isSpriteMaterial&&Ve.setValue(D,"center",S.center),Ve.setValue(D,"modelViewMatrix",S.modelViewMatrix),Ve.setValue(D,"normalMatrix",S.normalMatrix),Ve.setValue(D,"modelMatrix",S.matrixWorld),x.isShaderMaterial||x.isRawShaderMaterial){let rt=x.uniformsGroups;for(let xt=0,Ft=rt.length;xt<Ft;xt++)if(le.isWebGL2){let ts=rt[xt];ot.update(ts,Ne),ot.bind(ts,Ne)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ne}function Ls(h,_){h.ambientLightColor.needsUpdate=_,h.lightProbe.needsUpdate=_,h.directionalLights.needsUpdate=_,h.directionalLightShadows.needsUpdate=_,h.pointLights.needsUpdate=_,h.pointLightShadows.needsUpdate=_,h.spotLights.needsUpdate=_,h.spotLightShadows.needsUpdate=_,h.rectAreaLights.needsUpdate=_,h.hemisphereLights.needsUpdate=_}function Ds(h){return h.isMeshLambertMaterial||h.isMeshToonMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isShadowMaterial||h.isShaderMaterial&&h.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(h,_,M){Ae.get(h.texture).__webglTexture=_,Ae.get(h.depthTexture).__webglTexture=M;let x=Ae.get(h);x.__hasExternalTextures=!0,x.__hasExternalTextures&&(x.__autoAllocateDepthBuffer=M===void 0,x.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),x.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(h,_){let M=Ae.get(h);M.__webglFramebuffer=_,M.__useDefaultFramebuffer=_===void 0},this.setRenderTarget=function(h,_=0,M=0){N=h,k=_,U=M;let x=!0,S=null,E=!1,F=!1;if(h){let B=Ae.get(h);B.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(D.FRAMEBUFFER,null),x=!1):B.__webglFramebuffer===void 0?A.setupRenderTarget(h):B.__hasExternalTextures&&A.rebindTextures(h,Ae.get(h.texture).__webglTexture,Ae.get(h.depthTexture).__webglTexture);let W=h.texture;(W.isData3DTexture||W.isDataArrayTexture||W.isCompressedArrayTexture)&&(F=!0);let K=Ae.get(h).__webglFramebuffer;h.isWebGLCubeRenderTarget?(Array.isArray(K[_])?S=K[_][M]:S=K[_],E=!0):le.isWebGL2&&h.samples>0&&A.useMultisampledRTT(h)===!1?S=Ae.get(h).__webglMultisampledFramebuffer:Array.isArray(K)?S=K[M]:S=K,R.copy(h.viewport),Z.copy(h.scissor),ce=h.scissorTest}else R.copy(me).multiplyScalar(de).floor(),Z.copy(pe).multiplyScalar(de).floor(),ce=Le;if(ie.bindFramebuffer(D.FRAMEBUFFER,S)&&le.drawBuffers&&x&&ie.drawBuffers(h,S),ie.viewport(R),ie.scissor(Z),ie.setScissorTest(ce),E){let B=Ae.get(h.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+_,B.__webglTexture,M)}else if(F){let B=Ae.get(h.texture),W=_||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,B.__webglTexture,M||0,W)}Q=-1},this.readRenderTargetPixels=function(h,_,M,x,S,E,F){if(!(h&&h.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let H=Ae.get(h).__webglFramebuffer;if(h.isWebGLCubeRenderTarget&&F!==void 0&&(H=H[F]),H){ie.bindFramebuffer(D.FRAMEBUFFER,H);try{let B=h.texture,W=B.format,K=B.type;if(W!==un&&Ce.convert(W)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let q=K===ps&&(se.has("EXT_color_buffer_half_float")||le.isWebGL2&&se.has("EXT_color_buffer_float"));if(K!==Wn&&Ce.convert(K)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(K===kn&&(le.isWebGL2||se.has("OES_texture_float")||se.has("WEBGL_color_buffer_float")))&&!q){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}_>=0&&_<=h.width-x&&M>=0&&M<=h.height-S&&D.readPixels(_,M,x,S,Ce.convert(W),Ce.convert(K),E)}finally{let B=N!==null?Ae.get(N).__webglFramebuffer:null;ie.bindFramebuffer(D.FRAMEBUFFER,B)}}},this.copyFramebufferToTexture=function(h,_,M=0){let x=Math.pow(2,-M),S=Math.floor(_.image.width*x),E=Math.floor(_.image.height*x);A.setTexture2D(_,0),D.copyTexSubImage2D(D.TEXTURE_2D,M,0,0,h.x,h.y,S,E),ie.unbindTexture()},this.copyTextureToTexture=function(h,_,M,x=0){let S=_.image.width,E=_.image.height,F=Ce.convert(M.format),H=Ce.convert(M.type);A.setTexture2D(M,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,M.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,M.unpackAlignment),_.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,x,h.x,h.y,S,E,F,H,_.image.data):_.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,x,h.x,h.y,_.mipmaps[0].width,_.mipmaps[0].height,F,_.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,x,h.x,h.y,F,H,_.image),x===0&&M.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(h,_,M,x,S=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let E=h.max.x-h.min.x+1,F=h.max.y-h.min.y+1,H=h.max.z-h.min.z+1,B=Ce.convert(x.format),W=Ce.convert(x.type),K;if(x.isData3DTexture)A.setTexture3D(x,0),K=D.TEXTURE_3D;else if(x.isDataArrayTexture||x.isCompressedArrayTexture)A.setTexture2DArray(x,0),K=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,x.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,x.unpackAlignment);let q=D.getParameter(D.UNPACK_ROW_LENGTH),oe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ge=D.getParameter(D.UNPACK_SKIP_PIXELS),G=D.getParameter(D.UNPACK_SKIP_ROWS),j=D.getParameter(D.UNPACK_SKIP_IMAGES),re=M.isCompressedTexture?M.mipmaps[S]:M.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,re.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,re.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,h.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,h.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,h.min.z),M.isDataTexture||M.isData3DTexture?D.texSubImage3D(K,S,_.x,_.y,_.z,E,F,H,B,W,re.data):M.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(K,S,_.x,_.y,_.z,E,F,H,B,re.data)):D.texSubImage3D(K,S,_.x,_.y,_.z,E,F,H,B,W,re),D.pixelStorei(D.UNPACK_ROW_LENGTH,q),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ge),D.pixelStorei(D.UNPACK_SKIP_ROWS,G),D.pixelStorei(D.UNPACK_SKIP_IMAGES,j),S===0&&x.generateMipmaps&&D.generateMipmap(K),ie.unbindTexture()},this.initTexture=function(h){h.isCubeTexture?A.setTextureCube(h,0):h.isData3DTexture?A.setTexture3D(h,0):h.isDataArrayTexture||h.isCompressedArrayTexture?A.setTexture2DArray(h,0):A.setTexture2D(h,0),ie.unbindTexture()},this.resetState=function(){k=0,U=0,N=null,ie.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===La?"display-p3":"srgb",t.unpackColorSpace=yt.workingColorSpace===qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Rt?ri:Oc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ri?Rt:Cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},la=class extends xs{};la.prototype.isWebGL1Renderer=!0;var Yi=class extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var ys=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},fc=new L,pc=new L,mc=new wt,Uo=new ai,nr=new Gi,ca=class extends Wt{constructor(e=new Ut,t=new ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)fc.fromBufferAttribute(t,s-1),pc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=fc.distanceTo(pc);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(s),nr.radius+=r,e.ray.intersectsSphere(nr)===!1)return;mc.copy(s).invert(),Uo.copy(e.ray).applyMatrix4(mc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,u=new L,d=new L,p=new L,m=this.isLineSegments?2:1,y=n.index,g=n.attributes.position;if(y!==null){let f=Math.max(0,a.start),w=Math.min(y.count,a.start+a.count);for(let v=f,I=w-1;v<I;v+=m){let k=y.getX(v),U=y.getX(v+1);if(c.fromBufferAttribute(g,k),u.fromBufferAttribute(g,U),Uo.distanceSqToSegment(c,u,p,d)>l)continue;p.applyMatrix4(this.matrixWorld);let Q=e.ray.origin.distanceTo(p);Q<e.near||Q>e.far||t.push({distance:Q,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let v=f,I=w-1;v<I;v+=m){if(c.fromBufferAttribute(g,v),u.fromBufferAttribute(g,v+1),Uo.distanceSqToSegment(c,u,p,d)>l)continue;p.applyMatrix4(this.matrixWorld);let U=e.ray.origin.distanceTo(p);U<e.near||U>e.far||t.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}},gc=new L,_c=new L,Rr=class extends ca{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gc.fromBufferAttribute(t,s),_c.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gc.distanceTo(_c);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var vs=class extends rn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],p=n[s+1]-u,m=(a-u)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new L,s=[],r=[],a=[],o=new L,l=new wt;for(let m=0;m<=e;m++){let y=m/e;s[m]=this.getTangentAt(y,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let y=Math.acos(Dt(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,y))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(Dt(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let y=1;y<=e;y++)r[y].applyMatrix4(l.makeRotationAxis(s[y],m*y)),a[y].crossVectors(s[y],r[y])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ms=class extends on{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let n=t||new we,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*u-m*d+this.aX,c=p*d+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ha=class extends Ms{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Na(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let p=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+d)+(l-o)/d;p*=u,m*=u,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var ir=new L,No=new Na,Oo=new Na,Fo=new Na,Es=class extends on{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new L){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),c=ir);let d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=ir),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,y=Math.pow(c.distanceToSquared(d),m),b=Math.pow(d.distanceToSquared(p),m),g=Math.pow(p.distanceToSquared(u),m);b<1e-4&&(b=1),y<1e-4&&(y=b),g<1e-4&&(g=b),No.initNonuniformCatmullRom(c.x,d.x,p.x,u.x,y,b,g),Oo.initNonuniformCatmullRom(c.y,d.y,p.y,u.y,y,b,g),Fo.initNonuniformCatmullRom(c.z,d.z,p.z,u.z,y,b,g)}else this.curveType==="catmullrom"&&(No.initCatmullRom(c.x,d.x,p.x,u.x,this.tension),Oo.initCatmullRom(c.y,d.y,p.y,u.y,this.tension),Fo.initCatmullRom(c.z,d.z,p.z,u.z,this.tension));return n.set(No.calc(l),Oo.calc(l),Fo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new L().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function h0(i,e){let t=1-i;return t*t*e}function u0(i,e){return 2*(1-i)*i*e}function d0(i,e){return i*i*e}function hs(i,e,t,n){return h0(i,e)+u0(i,t)+d0(i,n)}function f0(i,e){let t=1-i;return t*t*t*e}function p0(i,e){let t=1-i;return 3*t*t*i*e}function m0(i,e){return 3*(1-i)*i*i*e}function g0(i,e){return i*i*i*e}function us(i,e,t,n,s){return f0(i,e)+p0(i,t)+m0(i,n)+g0(i,s)}var Cr=class extends on{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(us(e,s.x,r.x,a.x,o.x),us(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends on{constructor(e=new L,t=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(us(e,s.x,r.x,a.x,o.x),us(e,s.y,r.y,a.y,o.y),us(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pr=class extends on{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends on{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ir=class extends on{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(hs(e,s.x,r.x,a.x),hs(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zi=class extends on{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(hs(e,s.x,r.x,a.x),hs(e,s.y,r.y,a.y),hs(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lr=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(xc(o,l.x,c.x,u.x,d.x),xc(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},Dr=Object.freeze({__proto__:null,ArcCurve:ha,CatmullRomCurve3:Es,CubicBezierCurve:Cr,CubicBezierCurve3:ua,EllipseCurve:Ms,LineCurve:Pr,LineCurve3:da,QuadraticBezierCurve:Ir,QuadraticBezierCurve3:Zi,SplineCurve:Lr}),fa=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dr[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Dr[s.type]().fromJSON(s))}return this}},Ur=class extends fa{constructor(e){super(),this.type="Path",this.currentPoint=new we,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Pr(this.currentPoint.clone(),new we(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ir(this.currentPoint.clone(),new we(e,t),new we(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Cr(this.currentPoint.clone(),new we(e,t),new we(n,s),new we(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Lr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ms(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Nr=class i extends Ut{constructor(e=[new we(0,-.5),new we(.5,0),new we(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Dt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,d=new L,p=new we,m=new L,y=new L,b=new L,g=0,f=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:g=e[w+1].x-e[w].x,f=e[w+1].y-e[w].y,m.x=f*1,m.y=-g,m.z=f*0,b.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:g=e[w+1].x-e[w].x,f=e[w+1].y-e[w].y,m.x=f*1,m.y=-g,m.z=f*0,y.copy(m),m.x+=b.x,m.y+=b.y,m.z+=b.z,m.normalize(),l.push(m.x,m.y,m.z),b.copy(y)}for(let w=0;w<=t;w++){let v=n+w*u*s,I=Math.sin(v),k=Math.cos(v);for(let U=0;U<=e.length-1;U++){d.x=e[U].x*I,d.y=e[U].y,d.z=e[U].x*k,a.push(d.x,d.y,d.z),p.x=w/t,p.y=U/(e.length-1),o.push(p.x,p.y);let N=l[3*U+0]*I,Q=l[3*U+1],P=l[3*U+0]*k;c.push(N,Q,P)}}for(let w=0;w<t;w++)for(let v=0;v<e.length-1;v++){let I=v+w*e.length,k=I,U=I+e.length,N=I+e.length+1,Q=I+1;r.push(k,U,Q),r.push(N,Q,U)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var _t=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],p=[],m=[],y=0,b=[],g=n/2,f=0;w(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(m,2));function w(){let I=new L,k=new L,U=0,N=(t-e)/n;for(let Q=0;Q<=r;Q++){let P=[],R=Q/r,Z=R*(t-e)+e;for(let ce=0;ce<=s;ce++){let xe=ce/s,z=xe*l+o,Y=Math.sin(z),te=Math.cos(z);k.x=Z*Y,k.y=-R*n+g,k.z=Z*te,d.push(k.x,k.y,k.z),I.set(Y,N,te).normalize(),p.push(I.x,I.y,I.z),m.push(xe,1-R),P.push(y++)}b.push(P)}for(let Q=0;Q<s;Q++)for(let P=0;P<r;P++){let R=b[P][Q],Z=b[P+1][Q],ce=b[P+1][Q+1],xe=b[P][Q+1];u.push(R,Z,xe),u.push(Z,ce,xe),U+=6}c.addGroup(f,U,0),f+=U}function v(I){let k=y,U=new we,N=new L,Q=0,P=I===!0?e:t,R=I===!0?1:-1;for(let ce=1;ce<=s;ce++)d.push(0,g*R,0),p.push(0,R,0),m.push(.5,.5),y++;let Z=y;for(let ce=0;ce<=s;ce++){let z=ce/s*l+o,Y=Math.cos(z),te=Math.sin(z);N.x=P*te,N.y=g*R,N.z=P*Y,d.push(N.x,N.y,N.z),p.push(0,R,0),U.x=Y*.5+.5,U.y=te*.5*R+.5,m.push(U.x,U.y),y++}for(let ce=0;ce<s;ce++){let xe=k+ce,z=Z+ce;I===!0?u.push(z,z+1,xe):u.push(z+1,z,xe),Q+=3}c.addGroup(f,Q,I===!0?1:2),f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Or=class i extends _t{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var sr=new L,rr=new L,Bo=new L,or=new ni,Fr=class extends Ut{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Fi*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),p={},m=[];for(let y=0;y<l;y+=3){a?(c[0]=a.getX(y),c[1]=a.getX(y+1),c[2]=a.getX(y+2)):(c[0]=y,c[1]=y+1,c[2]=y+2);let{a:b,b:g,c:f}=or;if(b.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),f.fromBufferAttribute(o,c[2]),or.getNormal(Bo),d[0]=`${Math.round(b.x*s)},${Math.round(b.y*s)},${Math.round(b.z*s)}`,d[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,d[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let w=0;w<3;w++){let v=(w+1)%3,I=d[w],k=d[v],U=or[u[w]],N=or[u[v]],Q=`${I}_${k}`,P=`${k}_${I}`;P in p&&p[P]?(Bo.dot(p[P].normal)<=r&&(m.push(U.x,U.y,U.z),m.push(N.x,N.y,N.z)),p[P]=null):Q in p||(p[Q]={index0:c[w],index1:c[v],normal:Bo.clone()})}}for(let y in p)if(p[y]){let{index0:b,index1:g}=p[y];sr.fromBufferAttribute(o,b),rr.fromBufferAttribute(o,g),m.push(sr.x,sr.y,sr.z),m.push(rr.x,rr.y,rr.z)}this.setAttribute("position",new dt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Dn=class extends Ur{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ur().fromJSON(s))}return this}},_0={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Jc(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,u,d,p,m;if(n&&(r=E0(i,e,r,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let y=t;y<s;y+=t)d=i[y],p=i[y+1],d<o&&(o=d),p<l&&(l=p),d>c&&(c=d),p>u&&(u=p);m=Math.max(c-o,u-l),m=m!==0?32767/m:0}return Ss(r,a,t,o,l,m,0),a}};function Jc(i,e,t,n,s){let r,a;if(s===D0(i,e,t,n)>0)for(r=e;r<t;r+=n)a=yc(r,i[r],i[r+1],a);else for(r=t-n;r>=e;r-=n)a=yc(r,i[r],i[r+1],a);return a&&Zr(a,a.next)&&(ws(a),a=a.next),a}function li(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Zr(t,t.next)||bt(t.prev,t,t.next)===0)){if(ws(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ss(i,e,t,n,s,r,a){if(!i)return;!a&&r&&A0(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?y0(i,n,s,r):x0(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ws(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=v0(li(i),e,t),Ss(i,e,t,n,s,r,2)):a===2&&M0(i,e,t,n,s,r):Ss(li(i),e,t,n,s,r,1);break}}}function x0(i){let e=i.prev,t=i,n=i.next;if(bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,p=s>r?s>a?s:a:r>a?r:a,m=o>l?o>c?o:c:l>c?l:c,y=n.next;for(;y!==e;){if(y.x>=u&&y.x<=p&&y.y>=d&&y.y<=m&&Ni(s,o,r,l,a,c,y.x,y.y)&&bt(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function y0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(bt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,p=a.y,m=o<l?o<c?o:c:l<c?l:c,y=u<d?u<p?u:p:d<p?d:p,b=o>l?o>c?o:c:l>c?l:c,g=u>d?u>p?u:p:d>p?d:p,f=pa(m,y,e,t,n),w=pa(b,g,e,t,n),v=i.prevZ,I=i.nextZ;for(;v&&v.z>=f&&I&&I.z<=w;){if(v.x>=m&&v.x<=b&&v.y>=y&&v.y<=g&&v!==s&&v!==a&&Ni(o,u,l,d,c,p,v.x,v.y)&&bt(v.prev,v,v.next)>=0||(v=v.prevZ,I.x>=m&&I.x<=b&&I.y>=y&&I.y<=g&&I!==s&&I!==a&&Ni(o,u,l,d,c,p,I.x,I.y)&&bt(I.prev,I,I.next)>=0))return!1;I=I.nextZ}for(;v&&v.z>=f;){if(v.x>=m&&v.x<=b&&v.y>=y&&v.y<=g&&v!==s&&v!==a&&Ni(o,u,l,d,c,p,v.x,v.y)&&bt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;I&&I.z<=w;){if(I.x>=m&&I.x<=b&&I.y>=y&&I.y<=g&&I!==s&&I!==a&&Ni(o,u,l,d,c,p,I.x,I.y)&&bt(I.prev,I,I.next)>=0)return!1;I=I.nextZ}return!0}function v0(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!Zr(s,r)&&Kc(s,n,n.next,r)&&bs(s,r)&&bs(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ws(n),ws(n.next),n=i=r),n=n.next}while(n!==i);return li(n)}function M0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&P0(a,o)){let l=$c(a,o);a=li(a,a.next),l=li(l,l.next),Ss(a,e,t,n,s,r,0),Ss(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function E0(i,e,t,n){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Jc(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(C0(c));for(s.sort(S0),r=0;r<s.length;r++)t=b0(s[r],t);return t}function S0(i,e){return i.x-e.x}function b0(i,e){let t=w0(i,e);if(!t)return e;let n=$c(t,i);return li(n,n.next),li(t,t.next)}function w0(i,e){let t=e,n=-1/0,s,r=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let p=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,u=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&Ni(a<c?r:n,a,l,c,a<c?n:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),bs(t,i)&&(d<u||d===u&&(t.x>s.x||t.x===s.x&&T0(s,t)))&&(s=t,u=d)),t=t.next;while(t!==o);return s}function T0(i,e){return bt(i.prev,i,e.prev)<0&&bt(e.next,i,i.next)<0}function A0(i,e,t,n){let s=i;do s.z===0&&(s.z=pa(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,R0(s)}function R0(i){let e,t,n,s,r,a,o,l,c=1;do{for(t=i,i=null,r=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(a>1);return i}function pa(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function C0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Ni(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function P0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!I0(i,e)&&(bs(i,e)&&bs(e,i)&&L0(i,e)&&(bt(i.prev,i,e.prev)||bt(i,e.prev,e))||Zr(i,e)&&bt(i.prev,i,i.next)>0&&bt(e.prev,e,e.next)>0)}function bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Zr(i,e){return i.x===e.x&&i.y===e.y}function Kc(i,e,t,n){let s=lr(bt(i,e,t)),r=lr(bt(i,e,n)),a=lr(bt(t,n,i)),o=lr(bt(t,n,e));return!!(s!==r&&a!==o||s===0&&ar(i,t,e)||r===0&&ar(i,n,e)||a===0&&ar(t,i,n)||o===0&&ar(t,e,n))}function ar(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function lr(i){return i>0?1:i<0?-1:0}function I0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Kc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function bs(i,e){return bt(i.prev,i,i.next)<0?bt(i,e,i.next)>=0&&bt(i,i.prev,e)>=0:bt(i,e,i.prev)<0||bt(i,i.next,e)<0}function L0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function $c(i,e){let t=new ma(i.i,i.x,i.y),n=new ma(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function yc(i,e,t,n){let s=new ma(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ma(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function D0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xn=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];vc(e),Mc(n,e);let a=e.length;t.forEach(vc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Mc(n,t[l]);let o=_0.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function vc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Mc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Br=class i extends Ut{constructor(e=new Dn([new we(.5,.5),new we(-.5,.5),new we(-.5,-.5),new we(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:m-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,f=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:U0,v,I=!1,k,U,N,Q;f&&(v=f.getSpacedPoints(u),I=!0,p=!1,k=f.computeFrenetFrames(u,!1),U=new L,N=new L,Q=new L),p||(g=0,m=0,y=0,b=0);let P=o.extractPoints(c),R=P.shape,Z=P.holes;if(!Xn.isClockWise(R)){R=R.reverse();for(let D=0,Ee=Z.length;D<Ee;D++){let se=Z[D];Xn.isClockWise(se)&&(Z[D]=se.reverse())}}let xe=Xn.triangulateShape(R,Z),z=R;for(let D=0,Ee=Z.length;D<Ee;D++){let se=Z[D];R=R.concat(se)}function Y(D,Ee,se){return Ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(Ee,se)}let te=R.length,de=xe.length;function ne(D,Ee,se){let le,ie,De,Ae=D.x-Ee.x,A=D.y-Ee.y,T=se.x-D.x,X=se.y-D.y,ve=Ae*Ae+A*A,Me=Ae*X-A*T;if(Math.abs(Me)>Number.EPSILON){let ye=Math.sqrt(ve),Ge=Math.sqrt(T*T+X*X),Oe=Ee.x-A/ye,ke=Ee.y+Ae/ye,$e=se.x-X/Ge,st=se.y+T/Ge,Se=(($e-Oe)*X-(st-ke)*T)/(Ae*X-A*T);le=Oe+Ae*Se-D.x,ie=ke+A*Se-D.y;let ct=le*le+ie*ie;if(ct<=2)return new we(le,ie);De=Math.sqrt(ct/2)}else{let ye=!1;Ae>Number.EPSILON?T>Number.EPSILON&&(ye=!0):Ae<-Number.EPSILON?T<-Number.EPSILON&&(ye=!0):Math.sign(A)===Math.sign(X)&&(ye=!0),ye?(le=-A,ie=Ae,De=Math.sqrt(ve)):(le=Ae,ie=A,De=Math.sqrt(ve/2))}return new we(le/De,ie/De)}let ae=[];for(let D=0,Ee=z.length,se=Ee-1,le=D+1;D<Ee;D++,se++,le++)se===Ee&&(se=0),le===Ee&&(le=0),ae[D]=ne(z[D],z[se],z[le]);let me=[],pe,Le=ae.concat();for(let D=0,Ee=Z.length;D<Ee;D++){let se=Z[D];pe=[];for(let le=0,ie=se.length,De=ie-1,Ae=le+1;le<ie;le++,De++,Ae++)De===ie&&(De=0),Ae===ie&&(Ae=0),pe[le]=ne(se[le],se[De],se[Ae]);me.push(pe),Le=Le.concat(pe)}for(let D=0;D<g;D++){let Ee=D/g,se=m*Math.cos(Ee*Math.PI/2),le=y*Math.sin(Ee*Math.PI/2)+b;for(let ie=0,De=z.length;ie<De;ie++){let Ae=Y(z[ie],ae[ie],le);J(Ae.x,Ae.y,-se)}for(let ie=0,De=Z.length;ie<De;ie++){let Ae=Z[ie];pe=me[ie];for(let A=0,T=Ae.length;A<T;A++){let X=Y(Ae[A],pe[A],le);J(X.x,X.y,-se)}}}let $=y+b;for(let D=0;D<te;D++){let Ee=p?Y(R[D],Le[D],$):R[D];I?(N.copy(k.normals[0]).multiplyScalar(Ee.x),U.copy(k.binormals[0]).multiplyScalar(Ee.y),Q.copy(v[0]).add(N).add(U),J(Q.x,Q.y,Q.z)):J(Ee.x,Ee.y,0)}for(let D=1;D<=u;D++)for(let Ee=0;Ee<te;Ee++){let se=p?Y(R[Ee],Le[Ee],$):R[Ee];I?(N.copy(k.normals[D]).multiplyScalar(se.x),U.copy(k.binormals[D]).multiplyScalar(se.y),Q.copy(v[D]).add(N).add(U),J(Q.x,Q.y,Q.z)):J(se.x,se.y,d/u*D)}for(let D=g-1;D>=0;D--){let Ee=D/g,se=m*Math.cos(Ee*Math.PI/2),le=y*Math.sin(Ee*Math.PI/2)+b;for(let ie=0,De=z.length;ie<De;ie++){let Ae=Y(z[ie],ae[ie],le);J(Ae.x,Ae.y,d+se)}for(let ie=0,De=Z.length;ie<De;ie++){let Ae=Z[ie];pe=me[ie];for(let A=0,T=Ae.length;A<T;A++){let X=Y(Ae[A],pe[A],le);I?J(X.x,X.y+v[u-1].y,v[u-1].x+se):J(X.x,X.y,d+se)}}}_e(),ze();function _e(){let D=s.length/3;if(p){let Ee=0,se=te*Ee;for(let le=0;le<de;le++){let ie=xe[le];ee(ie[2]+se,ie[1]+se,ie[0]+se)}Ee=u+g*2,se=te*Ee;for(let le=0;le<de;le++){let ie=xe[le];ee(ie[0]+se,ie[1]+se,ie[2]+se)}}else{for(let Ee=0;Ee<de;Ee++){let se=xe[Ee];ee(se[2],se[1],se[0])}for(let Ee=0;Ee<de;Ee++){let se=xe[Ee];ee(se[0]+te*u,se[1]+te*u,se[2]+te*u)}}n.addGroup(D,s.length/3-D,0)}function ze(){let D=s.length/3,Ee=0;C(z,Ee),Ee+=z.length;for(let se=0,le=Z.length;se<le;se++){let ie=Z[se];C(ie,Ee),Ee+=ie.length}n.addGroup(D,s.length/3-D,1)}function C(D,Ee){let se=D.length;for(;--se>=0;){let le=se,ie=se-1;ie<0&&(ie=D.length-1);for(let De=0,Ae=u+g*2;De<Ae;De++){let A=te*De,T=te*(De+1),X=Ee+le+A,ve=Ee+ie+A,Me=Ee+ie+T,ye=Ee+le+T;fe(X,ve,Me,ye)}}}function J(D,Ee,se){l.push(D),l.push(Ee),l.push(se)}function ee(D,Ee,se){ue(D),ue(Ee),ue(se);let le=s.length/3,ie=w.generateTopUV(n,s,le-3,le-2,le-1);Te(ie[0]),Te(ie[1]),Te(ie[2])}function fe(D,Ee,se,le){ue(D),ue(Ee),ue(le),ue(Ee),ue(se),ue(le);let ie=s.length/3,De=w.generateSideWallUV(n,s,ie-6,ie-3,ie-2,ie-1);Te(De[0]),Te(De[1]),Te(De[3]),Te(De[1]),Te(De[2]),Te(De[3])}function ue(D){s.push(l[D*3+0]),s.push(l[D*3+1]),s.push(l[D*3+2])}function Te(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return N0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Dr[s.type]().fromJSON(s)),new i(n,e.options)}},U0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new we(r,a),new we(o,l),new we(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],p=e[s*3],m=e[s*3+1],y=e[s*3+2],b=e[r*3],g=e[r*3+1],f=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new we(a,1-l),new we(c,1-d),new we(p,1-y),new we(b,1-f)]:[new we(o,1-l),new we(u,1-d),new we(m,1-y),new we(g,1-f)]}};function N0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var zr=class i extends Ut{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],d=e,p=(t-e)/s,m=new L,y=new we;for(let b=0;b<=s;b++){for(let g=0;g<=n;g++){let f=r+g/n*a;m.x=d*Math.cos(f),m.y=d*Math.sin(f),l.push(m.x,m.y,m.z),c.push(0,0,1),y.x=(m.x/t+1)/2,y.y=(m.y/t+1)/2,u.push(y.x,y.y)}d+=p}for(let b=0;b<s;b++){let g=b*(n+1);for(let f=0;f<n;f++){let w=f+g,v=w,I=w+n+1,k=w+n+2,U=w+1;o.push(v,I,U),o.push(I,k,U)}}this.setIndex(o),this.setAttribute("position",new dt(l,3)),this.setAttribute("normal",new dt(c,3)),this.setAttribute("uv",new dt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ts=class i extends Ut{constructor(e=new Dn([new we(0,.5),new we(-.5,-.5),new we(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new dt(s,3)),this.setAttribute("normal",new dt(r,3)),this.setAttribute("uv",new dt(a,2));function c(u){let d=s.length/3,p=u.extractPoints(t),m=p.shape,y=p.holes;Xn.isClockWise(m)===!1&&(m=m.reverse());for(let g=0,f=y.length;g<f;g++){let w=y[g];Xn.isClockWise(w)===!0&&(y[g]=w.reverse())}let b=Xn.triangulateShape(m,y);for(let g=0,f=y.length;g<f;g++){let w=y[g];m=m.concat(w)}for(let g=0,f=m.length;g<f;g++){let w=m[g];s.push(w.x,w.y,0),r.push(0,0,1),a.push(w.x,w.y)}for(let g=0,f=b.length;g<f;g++){let w=b[g],v=w[0]+d,I=w[1]+d,k=w[2]+d;n.push(v,I,k),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return O0(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function O0(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Yn=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new L,p=new L,m=[],y=[],b=[],g=[];for(let f=0;f<=n;f++){let w=[],v=f/n,I=0;f===0&&a===0?I=.5/t:f===n&&l===Math.PI&&(I=-.5/t);for(let k=0;k<=t;k++){let U=k/t;d.x=-e*Math.cos(s+U*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(s+U*r)*Math.sin(a+v*o),y.push(d.x,d.y,d.z),p.copy(d).normalize(),b.push(p.x,p.y,p.z),g.push(U+I,1-v),w.push(c++)}u.push(w)}for(let f=0;f<n;f++)for(let w=0;w<t;w++){let v=u[f][w+1],I=u[f][w],k=u[f+1][w],U=u[f+1][w+1];(f!==0||a>0)&&m.push(v,I,U),(f!==n-1||l<Math.PI)&&m.push(I,k,U)}this.setIndex(m),this.setAttribute("position",new dt(y,3)),this.setAttribute("normal",new dt(b,3)),this.setAttribute("uv",new dt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ji=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new L,d=new L,p=new L;for(let m=0;m<=n;m++)for(let y=0;y<=s;y++){let b=y/s*r,g=m/n*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(b),d.y=(e+t*Math.cos(g))*Math.sin(b),d.z=t*Math.sin(g),o.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(y/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let y=1;y<=s;y++){let b=(s+1)*m+y-1,g=(s+1)*(m-1)+y-1,f=(s+1)*(m-1)+y,w=(s+1)*m+y;a.push(b,g,w),a.push(g,f,w)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var As=class i extends Ut{constructor(e=new Zi(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,c=new we,u=new L,d=[],p=[],m=[],y=[];b(),this.setIndex(y),this.setAttribute("position",new dt(d,3)),this.setAttribute("normal",new dt(p,3)),this.setAttribute("uv",new dt(m,2));function b(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),w(),f()}function g(v){u=e.getPointAt(v/t,u);let I=a.normals[v],k=a.binormals[v];for(let U=0;U<=s;U++){let N=U/s*Math.PI*2,Q=Math.sin(N),P=-Math.cos(N);l.x=P*I.x+Q*k.x,l.y=P*I.y+Q*k.y,l.z=P*I.z+Q*k.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=t;v++)for(let I=1;I<=s;I++){let k=(s+1)*(v-1)+(I-1),U=(s+1)*v+(I-1),N=(s+1)*v+I,Q=(s+1)*(v-1)+I;y.push(k,U,Q),y.push(U,N,Q)}}function w(){for(let v=0;v<=t;v++)for(let I=0;I<=s;I++)c.x=v/t,c.y=I/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Dr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Hr=class extends In{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new it(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var qe=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function cr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function F0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ga=class extends Ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sl,endingEnd:Sl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case bl:r=e,o=2*t-n;break;case wl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case bl:a=e,l=2*n-t;break;case wl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,p=this._weightPrev,m=this._weightNext,y=(n-t)/(s-t),b=y*y,g=b*y,f=-p*g+2*p*b-p*y,w=(1+p)*g+(-1.5-2*p)*b+(-.5+p)*y+1,v=(-1-m)*g+(1.5+m)*b+.5*y,I=m*g-m*b;for(let k=0;k!==o;++k)r[k]=f*a[u+k]+w*a[c+k]+v*a[l+k]+I*a[d+k];return r}},_a=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),d=1-u;for(let p=0;p!==o;++p)r[p]=a[c+p]*d+a[l+p]*u;return r}},xa=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cr(t,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cr(e.times,Array),values:cr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new xa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ga(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case dr:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return dr;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&F0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ho,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,p=d-n,m=d+n;for(let y=0;y!==n;++y){let b=t[d+y];if(b!==t[p+y]||b!==t[m+y]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[d+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=dr;var ci=class extends fn{};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=ur;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends fn{};ya.prototype.ValueTypeName="color";var va=class extends fn{};va.prototype.ValueTypeName="number";var Ma=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Rs=class extends fn{InterpolantFactoryMethodLinear(e){return new Ma(this.times,this.values,this.getValueSize(),e)}};Rs.prototype.ValueTypeName="quaternion";Rs.prototype.DefaultInterpolation=dr;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends fn{};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=ur;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends fn{};Ea.prototype.ValueTypeName="vector";var Sa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,p=c.length;d<p;d+=2){let m=c[d],y=c[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return y}return null}}},B0=new Sa,ba=class{constructor(e){this.manager=e!==void 0?e:B0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ba.DEFAULT_MATERIAL_NAME="__DEFAULT";var Cs=class extends Wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},kr=class extends Cs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new it(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},zo=new wt,Ec=new L,Sc=new L,Vr=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _s,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ec),Sc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sc),t.updateMatrixWorld(),zo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var bc=new wt,os=new L,Ho=new L,wa=class extends Vr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),n.position.copy(os),Ho.copy(n.position),Ho.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ho),n.updateMatrixWorld(),s.makeTranslation(-os.x,-os.y,-os.z),bc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc)}},Un=class extends Cs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wa}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ta=class extends Vr{constructor(){super(new Tr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gr=class extends Cs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new Ta}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Oa="\\[\\]\\.:\\/",z0=new RegExp("["+Oa+"]","g"),Fa="[^"+Oa+"]",H0="[^"+Oa.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",Fa),V0=/(WCOD+)?/.source.replace("WCOD",H0),G0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fa),W0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fa),X0=new RegExp("^"+k0+V0+G0+W0+"$"),q0=["material","materials","bones","map"],Aa=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(z0,"")}static parseTrackName(e){let t=X0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);q0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Aa;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j0=new Float32Array(1);var Wr=class{constructor(e,t,n=0,s=1/0){this.ray=new ai(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Ra(e,this,n,t),n.sort(wc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ra(e[s],this,n,t);return n.sort(wc),n}};function wc(i,e){return i.distance-e.distance}function Ra(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){let s=i.children;for(let r=0,a=s.length;r<a;r++)Ra(s[r],e,t,!0)}}var Ps=class{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"160"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="160");var Qc={type:"change"},Ba={type:"start"},eh={type:"end"},Jr=new ai,th=new Qt,Y0=Math.cos(70*zc.DEG2RAD),Kr=class extends _n{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ui.ROTATE,MIDDLE:ui.DOLLY,RIGHT:ui.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",ye),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ye),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Qc),n.update(),r=s.NONE},this.update=(function(){let O=new L,be=new dn().setFromUnitVectors(e.up,new L(0,1,0)),Fe=be.clone().invert(),Ce=new L,Je=new dn,ot=new L,at=2*Math.PI;return function(Ue=null){let V=n.object.position;O.copy(V).sub(n.target),O.applyQuaternion(be),o.setFromVector3(O),n.autoRotate&&r===s.NONE&&Z(P(Ue)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ie=n.minAzimuthAngle,Pe=n.maxAzimuthAngle;isFinite(Ie)&&isFinite(Pe)&&(Ie<-Math.PI?Ie+=at:Ie>Math.PI&&(Ie-=at),Pe<-Math.PI?Pe+=at:Pe>Math.PI&&(Pe-=at),Ie<=Pe?o.theta=Math.max(Ie,Math.min(Pe,o.theta)):o.theta=o.theta>(Ie+Pe)/2?Math.max(Ie,o.theta):Math.min(Pe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&U||n.object.isOrthographicCamera?o.radius=ae(o.radius):o.radius=ae(o.radius*c),O.setFromSpherical(o),O.applyQuaternion(Fe),V.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let je=!1;if(n.zoomToCursor&&U){let Ze=null;if(n.object.isPerspectiveCamera){let ft=O.length();Ze=ae(ft*c);let pt=ft-Ze;n.object.position.addScaledVector(I,pt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){let ft=new L(k.x,k.y,0);ft.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),je=!0;let pt=new L(k.x,k.y,0);pt.unproject(n.object),n.object.position.sub(pt).add(ft),n.object.updateMatrixWorld(),Ze=O.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ze).add(n.object.position):(Jr.origin.copy(n.object.position),Jr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Jr.direction))<Y0?e.lookAt(n.target):(th.setFromNormalAndCoplanarPoint(n.object.up,n.target),Jr.intersectPlane(th,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),je=!0);return c=1,U=!1,je||Ce.distanceToSquared(n.object.position)>a||8*(1-Je.dot(n.object.quaternion))>a||ot.distanceToSquared(n.target)>0?(n.dispatchEvent(Qc),Ce.copy(n.object.position),Je.copy(n.object.quaternion),ot.copy(n.target),!0):!1}})(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ke),n.domElement.removeEventListener("pointerdown",Ae),n.domElement.removeEventListener("pointercancel",T),n.domElement.removeEventListener("wheel",Me),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",T),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ye),n._domElementKeyEvents=null)};let n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},r=s.NONE,a=1e-6,o=new Ps,l=new Ps,c=1,u=new L,d=new we,p=new we,m=new we,y=new we,b=new we,g=new we,f=new we,w=new we,v=new we,I=new L,k=new we,U=!1,N=[],Q={};function P(O){return O!==null?2*Math.PI/60*n.autoRotateSpeed*O:2*Math.PI/60/60*n.autoRotateSpeed}function R(O){let be=Math.abs(O)/(100*(window.devicePixelRatio|0));return Math.pow(.95,n.zoomSpeed*be)}function Z(O){l.theta-=O}function ce(O){l.phi-=O}let xe=(function(){let O=new L;return function(Fe,Ce){O.setFromMatrixColumn(Ce,0),O.multiplyScalar(-Fe),u.add(O)}})(),z=(function(){let O=new L;return function(Fe,Ce){n.screenSpacePanning===!0?O.setFromMatrixColumn(Ce,1):(O.setFromMatrixColumn(Ce,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(Fe),u.add(O)}})(),Y=(function(){let O=new L;return function(Fe,Ce){let Je=n.domElement;if(n.object.isPerspectiveCamera){let ot=n.object.position;O.copy(ot).sub(n.target);let at=O.length();at*=Math.tan(n.object.fov/2*Math.PI/180),xe(2*Fe*at/Je.clientHeight,n.object.matrix),z(2*Ce*at/Je.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(xe(Fe*(n.object.right-n.object.left)/n.object.zoom/Je.clientWidth,n.object.matrix),z(Ce*(n.object.top-n.object.bottom)/n.object.zoom/Je.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function te(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function de(O){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=O:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(O,be){if(!n.zoomToCursor)return;U=!0;let Fe=n.domElement.getBoundingClientRect(),Ce=O-Fe.left,Je=be-Fe.top,ot=Fe.width,at=Fe.height;k.x=Ce/ot*2-1,k.y=-(Je/at)*2+1,I.set(k.x,k.y,1).unproject(n.object).sub(n.object.position).normalize()}function ae(O){return Math.max(n.minDistance,Math.min(n.maxDistance,O))}function me(O){d.set(O.clientX,O.clientY)}function pe(O){ne(O.clientX,O.clientX),f.set(O.clientX,O.clientY)}function Le(O){y.set(O.clientX,O.clientY)}function $(O){p.set(O.clientX,O.clientY),m.subVectors(p,d).multiplyScalar(n.rotateSpeed);let be=n.domElement;Z(2*Math.PI*m.x/be.clientHeight),ce(2*Math.PI*m.y/be.clientHeight),d.copy(p),n.update()}function _e(O){w.set(O.clientX,O.clientY),v.subVectors(w,f),v.y>0?te(R(v.y)):v.y<0&&de(R(v.y)),f.copy(w),n.update()}function ze(O){b.set(O.clientX,O.clientY),g.subVectors(b,y).multiplyScalar(n.panSpeed),Y(g.x,g.y),y.copy(b),n.update()}function C(O){ne(O.clientX,O.clientY),O.deltaY<0?de(R(O.deltaY)):O.deltaY>0&&te(R(O.deltaY)),n.update()}function J(O){let be=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?ce(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,n.keyPanSpeed),be=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?ce(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(0,-n.keyPanSpeed),be=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?Z(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(n.keyPanSpeed,0),be=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?Z(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Y(-n.keyPanSpeed,0),be=!0;break}be&&(O.preventDefault(),n.update())}function ee(O){if(N.length===1)d.set(O.pageX,O.pageY);else{let be=ct(O),Fe=.5*(O.pageX+be.x),Ce=.5*(O.pageY+be.y);d.set(Fe,Ce)}}function fe(O){if(N.length===1)y.set(O.pageX,O.pageY);else{let be=ct(O),Fe=.5*(O.pageX+be.x),Ce=.5*(O.pageY+be.y);y.set(Fe,Ce)}}function ue(O){let be=ct(O),Fe=O.pageX-be.x,Ce=O.pageY-be.y,Je=Math.sqrt(Fe*Fe+Ce*Ce);f.set(0,Je)}function Te(O){n.enableZoom&&ue(O),n.enablePan&&fe(O)}function D(O){n.enableZoom&&ue(O),n.enableRotate&&ee(O)}function Ee(O){if(N.length==1)p.set(O.pageX,O.pageY);else{let Fe=ct(O),Ce=.5*(O.pageX+Fe.x),Je=.5*(O.pageY+Fe.y);p.set(Ce,Je)}m.subVectors(p,d).multiplyScalar(n.rotateSpeed);let be=n.domElement;Z(2*Math.PI*m.x/be.clientHeight),ce(2*Math.PI*m.y/be.clientHeight),d.copy(p)}function se(O){if(N.length===1)b.set(O.pageX,O.pageY);else{let be=ct(O),Fe=.5*(O.pageX+be.x),Ce=.5*(O.pageY+be.y);b.set(Fe,Ce)}g.subVectors(b,y).multiplyScalar(n.panSpeed),Y(g.x,g.y),y.copy(b)}function le(O){let be=ct(O),Fe=O.pageX-be.x,Ce=O.pageY-be.y,Je=Math.sqrt(Fe*Fe+Ce*Ce);w.set(0,Je),v.set(0,Math.pow(w.y/f.y,n.zoomSpeed)),te(v.y),f.copy(w);let ot=(O.pageX+be.x)*.5,at=(O.pageY+be.y)*.5;ne(ot,at)}function ie(O){n.enableZoom&&le(O),n.enablePan&&se(O)}function De(O){n.enableZoom&&le(O),n.enableRotate&&Ee(O)}function Ae(O){n.enabled!==!1&&(N.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",A),n.domElement.addEventListener("pointerup",T)),$e(O),O.pointerType==="touch"?Ge(O):X(O))}function A(O){n.enabled!==!1&&(O.pointerType==="touch"?Oe(O):ve(O))}function T(O){st(O),N.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",A),n.domElement.removeEventListener("pointerup",T)),n.dispatchEvent(eh),r=s.NONE}function X(O){let be;switch(O.button){case 0:be=n.mouseButtons.LEFT;break;case 1:be=n.mouseButtons.MIDDLE;break;case 2:be=n.mouseButtons.RIGHT;break;default:be=-1}switch(be){case ui.DOLLY:if(n.enableZoom===!1)return;pe(O),r=s.DOLLY;break;case ui.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;Le(O),r=s.PAN}else{if(n.enableRotate===!1)return;me(O),r=s.ROTATE}break;case ui.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;me(O),r=s.ROTATE}else{if(n.enablePan===!1)return;Le(O),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ba)}function ve(O){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;$(O);break;case s.DOLLY:if(n.enableZoom===!1)return;_e(O);break;case s.PAN:if(n.enablePan===!1)return;ze(O);break}}function Me(O){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(O.preventDefault(),n.dispatchEvent(Ba),C(O),n.dispatchEvent(eh))}function ye(O){n.enabled===!1||n.enablePan===!1||J(O)}function Ge(O){switch(Se(O),N.length){case 1:switch(n.touches.ONE){case di.ROTATE:if(n.enableRotate===!1)return;ee(O),r=s.TOUCH_ROTATE;break;case di.PAN:if(n.enablePan===!1)return;fe(O),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case di.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(O),r=s.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;D(O),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Ba)}function Oe(O){switch(Se(O),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ee(O),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;se(O),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;ie(O),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(O),n.update();break;default:r=s.NONE}}function ke(O){n.enabled!==!1&&O.preventDefault()}function $e(O){N.push(O.pointerId)}function st(O){delete Q[O.pointerId];for(let be=0;be<N.length;be++)if(N[be]==O.pointerId){N.splice(be,1);return}}function Se(O){let be=Q[O.pointerId];be===void 0&&(be=new we,Q[O.pointerId]=be),be.set(O.pageX,O.pageY)}function ct(O){let be=O.pointerId===N[0]?N[1]:N[0];return Q[be]}n.domElement.addEventListener("contextmenu",ke),n.domElement.addEventListener("pointerdown",Ae),n.domElement.addEventListener("pointercancel",T),n.domElement.addEventListener("wheel",Me,{passive:!1}),this.update()}};var $r=class extends Yi{constructor(e=null){super();let t=new zt;t.deleteAttribute("uv");let n=new qe({side:Gt}),s=new qe,r=5;e!==null&&e._useLegacyLights===!1&&(r=900);let a=new Un(16777215,r,28,2);a.position.set(.418,16.199,.3),this.add(a);let o=new Ke(t,n);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);let l=new Ke(t,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new Ke(t,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let u=new Ke(t,s);u.position.set(6.167,.857,7.803),u.rotation.set(0,.561,0),u.scale.set(3.927,6.285,3.687),this.add(u);let d=new Ke(t,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let p=new Ke(t,s);p.position.set(2.291,-.756,-2.621),p.rotation.set(0,-.286,0),p.scale.set(1.546,1.552,1.496),this.add(p);let m=new Ke(t,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let y=new Ke(t,ji(50));y.position.set(-16.116,14.37,8.208),y.scale.set(.1,2.428,2.739),this.add(y);let b=new Ke(t,ji(50));b.position.set(-16.109,18.021,-8.207),b.scale.set(.1,2.425,2.751),this.add(b);let g=new Ke(t,ji(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let f=new Ke(t,ji(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let w=new Ke(t,ji(20));w.position.set(3.235,11.486,-12.541),w.scale.set(2.5,2,.1),this.add(w);let v=new Ke(t,ji(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ji(i){let e=new Zt;return e.color.setScalar(i),e}function jr(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ut,c=0;for(let u=0;u<i.length;++u){let d=i[u],p=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in d.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(d.attributes[m]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in d.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[m]===void 0&&(a[m]=[]),a[m].push(d.morphAttributes[m])}if(e){let m;if(t)m=d.index.count;else if(d.attributes.position!==void 0)m=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,m,u),c+=m}}if(t){let u=0,d=[];for(let p=0;p<i.length;++p){let m=i[p].index;for(let y=0;y<m.count;++y)d.push(m.getX(y)+u);u+=i[p].attributes.position.count}l.setIndex(d)}for(let u in r){let d=nh(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let p=0;p<d;++p){let m=[];for(let b=0;b<a[u].length;++b)m.push(a[u][b][p]);let y=nh(m);if(!y)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(y)}}return l}function nh(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let a=new e(r),o=0;for(let c=0;c<i.length;++c)a.set(i[c].array,o),o+=i[c].array.length;let l=new Kt(a,t,n);return s!==void 0&&(l.gpuType=s),l}var Z0={N:[1,0],S:[-1,0],W:[0,-1],E:[0,1]},za={N:[0,1],S:[0,-1],W:[1,0],E:[-1,0]};function J0(i){let e=i>>>0||1;return()=>(e=e*16807%2147483647)/2147483647}var Qr=1;function pn(i,e=48){return e=Math.max(12,Math.round(e*Qr)),new Nr(i.map(([t,n])=>new we(t,n)),e)}function ih({P:i,texMat:e,plan:t,room:n,night:s,cam:r,noPendant:a,lite:o}){if(!t||!t.walls)return null;Qr=o?.45:1;let l=(C,J)=>[Math.max(8,Math.round(C*Qr)),Math.max(6,Math.round(J*Qr))],c=J0(4711),u=new et;u.name="deko";let{W:d,D:p,H:m}=n,y=(t.ah||90)/100,b={N:[0,0],S:[d,p],W:[0,p],E:[d,0]},g=(C,J,ee)=>{let fe=b[C],ue=Z0[C],Te=za[C];return new L(fe[0]+ue[0]*J+Te[0]*ee,y,fe[1]+ue[1]*J+Te[1]*ee)},f=C=>Math.atan2(za[C][0],za[C][1]),w={glaze:i({color:"#f1ece2",roughness:.18,clearcoat:.7,clearcoatRoughness:.08}),stone:i({color:"#c9bba5",roughness:.82}),stoneDark:i({color:"#3d3a36",roughness:.7}),lemon:i({color:"#e9c21d",roughness:.42,clearcoat:.25,clearcoatRoughness:.3}),apple:i({color:"#8fae3c",roughness:.3,clearcoat:.5,clearcoatRoughness:.15}),appleRed:i({color:"#a8261f",roughness:.28,clearcoat:.55,clearcoatRoughness:.12}),orange:i({color:"#e5801f",roughness:.55,clearcoat:.2,clearcoatRoughness:.4}),banana:i({color:"#e6c84a",roughness:.5,sheen:.2}),bananaTip:i({color:"#3b3020",roughness:.8}),machine:i({color:"#1c1d1f",roughness:.22,clearcoat:.8,clearcoatRoughness:.1}),alu:i({color:"#c3c6c9",metalness:1,roughness:.32}),screen:i({color:"#071822",roughness:.15,emissive:new it("#5fb7e6"),emissiveIntensity:s?2.2:.9}),leaf:i({color:"#5f6e43",roughness:.55,side:en,sheen:.3,sheenColor:new it("#9fae8a")}),leafHerb:i({color:"#3f7a2c",roughness:.5,side:en}),twig:i({color:"#6b5a45",roughness:.8}),glass:i({color:"#f4faf6",roughness:.01,transmission:1,ior:1.5,thickness:.003}),oil:i({color:"#9b8a1f",roughness:.02,transmission:.92,ior:1.47,thickness:.05,attenuationColor:new it("#7c6b10"),attenuationDistance:.06}),cork:i({color:"#a7835a",roughness:.85}),terracotta:i({color:"#b3653f",roughness:.85}),soil:i({color:"#2b2118",roughness:1}),pages:i({color:"#f3efe6",roughness:.9}),book:["#8a9a7b","#c26e4b","#e7dcc7","#2f3a4a","#b9a17a"].map(C=>i({color:C,roughness:.75,sheen:.2})),wood:e("eiche",{roughness:1},1),woodDark:e("nuss",{roughness:1},.9),soap:i({color:"#e8e2d6",roughness:.25,clearcoat:.6}),chrome:i({color:"#e9ecef",metalness:1,roughness:.08}),black:i({color:"#141414",roughness:.55}),shadeIn:i({color:"#f6f3ee",roughness:.5}),bulb:i({color:"#000",emissive:new it("#ffd7a1"),emissiveIntensity:s?25:0})};Object.values(w).forEach(C=>(Array.isArray(C)?C:[C]).forEach(J=>{J&&!J.transmission&&(J.side=en)}));let v=(C,J,ee,fe=0,ue=u)=>{let Te=new Ke(C,J);return Te.position.copy(ee),Te.rotation.y=fe,ue.add(Te),Te};function I(C,J,ee="lemon"){let fe=new et;fe.position.copy(C),fe.rotation.y=J,u.add(fe),v(pn([[0,0],[.055,0],[.06,.004],[.11,.045],[.135,.085],[.13,.088],[.106,.05],[.05,.012],[0,.01]],64),w.glaze,new L,0,fe);let Te=ee==="mix",D=Te?[w.orange,w.appleRed,w.apple,w.orange,w.appleRed,w.orange]:[ee==="lemon"?w.lemon:w.apple],Ee=6,se=new Yn(.036,...l(32,24));for(let le=0;le<Ee;le++){let ie=le/Ee*Math.PI*2+c()*.4,De=le<5?.055:0,Ae=D[le%D.length],A=new Ke(se,Ae);A.position.set(Math.cos(ie)*De,le<5?.05:.085,Math.sin(ie)*De),ee==="lemon"?A.scale.set(1.18,.9,.9):Ae===w.orange?A.scale.setScalar(1.08):A.scale.set(1,.92,1),A.rotation.set(c()*3,c()*3,c()*3),fe.add(A)}if(Te)for(let le=0;le<3;le++){let ie=(le-1)*.022,De=new Zi(new L(-.1,.1+le*.004,ie-.02),new L(0,.07+le*.004,ie+.035),new L(.1,.11+le*.004,ie-.01));v(new As(De,...l(18,8),.015,!1),w.banana,new L,0,fe),[0,1].forEach(Ae=>{let A=De.getPoint(Ae);v(new Yn(.009,8,6),w.bananaTip,A,0,fe)})}}function k(C,J){let ee=new et;ee.position.copy(C),ee.rotation.y=J,u.add(ee);let fe=(D,Ee,se,le,ie,De,Ae)=>v(new zt(D,Ee,se),le,new L(ie,De,Ae),0,ee);fe(.24,.34,.26,w.machine,0,.17,-.07),fe(.24,.12,.14,w.machine,0,.28,.13),fe(.02,.22,.14,w.machine,-.11,.11,.13),fe(.02,.22,.14,w.machine,.11,.11,.13),fe(.2,.022,.14,w.alu,0,.011,.13),fe(.2,.004,.12,w.black,0,.0235,.13),fe(.236,.1,.006,w.alu,0,.28,.203),fe(.1,.034,.003,w.screen,-.035,.29,.2075),v(new _t(.016,.016,.01,24),w.alu,new L(.07,.29,.21),0,ee).rotation.x=Math.PI/2,[-.012,.012].forEach(D=>v(new _t(.006,.007,.03,16),w.chrome,new L(D,.205,.13),0,ee)),v(new _t(.055,.055,.012,32),w.black,new L(0,.346,-.1),0,ee);let ue=new et;ue.position.set(0,.024,.13),ee.add(ue),v(pn([[0,0],[.022,0],[.024,.004],[.03,.05],[.031,.062],[.028,.062],[.027,.051],[.021,.006],[0,.006]],40),w.glaze,new L,0,ue);let Te=v(new Ji(.012,.0035,8,20,Math.PI),w.glaze,new L(.031,.032,0),0,ue);Te.rotation.z=-Math.PI/2,v(new _t(.026,.026,.002,24),i({color:"#3a2214",roughness:.2,clearcoat:.6}),new L(0,.05,0),0,ue)}function U(C,J,ee=.55){if(o)return;let fe=new et;fe.position.copy(C),fe.rotation.y=J,u.add(fe),v(pn([[0,0],[.055,0],[.075,.06],[.08,.14],[.06,.22],[.035,.27],[.038,.29],[.03,.29],[.028,.2],[0,.2]],64),w.stone,new L,0,fe);let ue=[],Te=[],D=new Dn;D.moveTo(0,0),D.quadraticCurveTo(.009,.022,0,.05),D.quadraticCurveTo(-.009,.022,0,0);let Ee=new Ts(D,4);for(let se=0;se<6;se++){let le=se/6*Math.PI*2+c()*.5,ie=.12+c()*.2,De=ee*(.75+c()*.35),Ae=[];for(let T=0;T<=1.0001;T+=.25)Ae.push(new L(Math.cos(le)*ie*T*De+Math.cos(le)*.01,.27+T*De,Math.sin(le)*ie*T*De+Math.sin(le)*.01).add(new L((c()-.5)*.03*T,0,(c()-.5)*.03*T)));let A=new Es(Ae);ue.push(new As(A,16,.0028,6,!1));for(let T=0;T<26;T++){let X=.25+T/26*.75,ve=A.getPoint(X),Me=A.getTangent(X),ye=Ee.clone(),Ge=new wt,Oe=c()*Math.PI*2,ke=.5+c()*.7;Ge.makeRotationFromEuler(new Wi(ke*(T%2?1:-1),Oe,(c()-.5)*.6)),ye.applyMatrix4(Ge),ye.scale(.8+c()*.5,.8+c()*.5,1),ye.translate(ve.x+Me.x*.004,ve.y,ve.z+Me.z*.004),Te.push(ye)}}v(jr(ue),w.twig,new L,0,fe),v(jr(Te),w.leaf,new L,0,fe)}function N(C,J){let ee=new et;ee.position.copy(C),ee.rotation.y=J,u.add(ee);let fe=new Ke(new zt(.42,.3,.022),w.wood);fe.position.set(0,.15,-.18+.03),fe.rotation.x=-.16,ee.add(fe);let ue=new Ke(new zt(.32,.22,.02),w.woodDark);ue.position.set(.12,.11,-.15+.03),ue.rotation.x=-.13,ee.add(ue);let Te=[[0,0],[.032,0],[.034,.004],[.034,.17],[.03,.2],[.013,.235],[.012,.26],[.014,.262],[.014,.27],[0,.27]],D=new et;D.position.set(-.16,0,.04),ee.add(D),v(pn(Te,48),w.glass,new L,0,D),v(pn([[0,.004],[.031,.004],[.031,.15],[0,.15]],48),w.oil,new L,0,D),v(new _t(.011,.012,.03,20),w.cork,new L(0,.272,0),0,D),v(pn([[0,0],[.028,0],[.03,.02],[.024,.09],[.03,.15],[.022,.19],[.012,.205],[0,.21]],40),w.woodDark,new L(-.07,0,.1),0,ee),v(pn([[0,0],[.024,0],[.026,.015],[.02,.07],[.024,.12],[.018,.15],[.01,.16],[0,.162]],40),w.chrome,new L(-.01,0,.13),0,ee)}function Q(C,J){let ee=new et;ee.position.copy(C),ee.rotation.y=J,u.add(ee);let fe=0;[[.24,.03,.17],[.22,.025,.16],[.2,.035,.15]].forEach(([se,le,ie],De)=>{let Ae=new et;Ae.position.set((c()-.5)*.02,fe,(c()-.5)*.02),Ae.rotation.y=(c()-.5)*.25,ee.add(Ae),v(new zt(se,le,ie),w.book[De%w.book.length],new L(0,le/2,0),0,Ae),v(new zt(se-.01,le-.006,ie-.004),w.pages,new L(.006,le/2,0),0,Ae),fe+=le});let ue=new et;ue.position.set(.2,0,.02),ee.add(ue),v(pn([[0,0],[.045,0],[.06,.1],[.065,.1],[.065,.115],[0,.115]],40),w.terracotta,new L,0,ue),v(new _t(.058,.058,.005,32),w.soil,new L(0,.105,0),0,ue);let Te=[],D=new Dn;D.moveTo(0,0),D.quadraticCurveTo(.018,.02,0,.045),D.quadraticCurveTo(-.018,.02,0,0);let Ee=new Ts(D,4);for(let se=0;se<(o?0:46);se++){let le=c()*Math.PI*2,ie=c()*.045,De=Ee.clone();De.rotateX(-.4-c()*.9),De.rotateY(le),De.translate(Math.cos(le)*ie,.11+c()*.09,Math.sin(le)*ie),Te.push(De)}Te.length&&v(jr(Te),w.leafHerb,new L,0,ue)}function P(C,J){let ee=new et;ee.position.copy(C),ee.rotation.y=J,u.add(ee),v(pn([[0,0],[.032,0],[.034,.01],[.034,.13],[.028,.15],[0,.15]],40),w.soap,new L,0,ee),v(new _t(.008,.008,.03,16),w.chrome,new L(0,.165,0),0,ee),v(new zt(.04,.008,.012),w.chrome,new L(.016,.18,0),0,ee)}function R(C,J,ee){let fe=new et;fe.position.set(C,ee,J),u.add(fe),v(new _t(.0018,.0018,m-ee-.02,8),w.black,new L(0,(m-ee)/2+.01,0),0,fe),v(new _t(.03,.03,.012,24),w.black,new L(0,m-ee-.006,0),0,fe);let ue=pn([[.012,.12],[.03,.11],[.09,.05],[.15,0],[.148,-.003],[.088,.046],[.028,.104],[.01,.114]],64);v(ue,w.black,new L,0,fe),v(pn([[.146,-.002],[.087,.044],[.027,.1],[.012,.108]],64),w.shadeIn,new L(0,-.001,0),0,fe),v(new Yn(.03,...l(24,16)),w.bulb,new L(0,.05,0),0,fe)}let Z=[],ce=(C,J)=>Z.every(([ee,fe,ue])=>Math.hypot(C.x-ee,C.z-fe)>J+ue),xe=(C,J)=>Z.push([C.x,C.z,J]),z=[];(t.kw||[]).forEach(C=>{let J=t.walls[C];if(!J)return;let ee=(J.up||[]).map(ue=>[ue.s/100,(ue.s+ue.w)/100]),fe=ue=>ee.some(([Te,D])=>ue>Te-.02&&ue<D+.02);(J.base||[]).forEach(ue=>{let Te=ue.s/100,D=(ue.s+ue.w)/100;if(ue.kind==="t"){xe(g(C,(Te+D)/2,.3),Math.max(.3,ue.w/200));return}if(ue.app==="kf"||ue.app==="ko"){z.push({k:C,a0:Te,a1:D,tag:"kf"}),xe(g(C,(Te+D)/2,.3),ue.w/200*.9);return}if(ue.app==="sp"){z.push({k:C,a0:Te,a1:D,tag:"sp"}),xe(g(C,(Te+D)/2,.3),ue.w/200*.9);return}z.push({k:C,a0:Te,a1:D,tag:"frei",up:fe((Te+D)/2)})})});let Y=(C,J,ee)=>z.some(fe=>fe.tag===C&&fe.k===J&&Math.min(Math.abs(fe.a0-ee),Math.abs(fe.a1-ee))<.7),te=C=>{if(!r)return 0;let J=g(C.k,(C.a0+C.a1)/2,.3).project(r);return J.z>1||Math.abs(J.x)>.95||Math.abs(J.y)>.95?9:Math.abs(J.x)},de=z.filter(C=>C.tag==="frei"&&C.a1-C.a0>=.3).sort((C,J)=>te(C)-te(J)),ne=new Set,ae=(C,J,ee,fe)=>{for(let ue of[.5,.3,.7,.2,.8]){let Te=C.a0+(C.a1-C.a0)*ue,D=g(C.k,Te,J);if(ce(D,ee))return xe(D,ee),fe(D,f(C.k),Te),!0}return!1},me=(C,J,ee,fe)=>{let ue=[...C,...de.filter(Te=>!C.includes(Te))].filter(Te=>!ne.has(Te));for(let Te of ue)if(ae(Te,J,ee,fe))return ne.add(Te),!0;return!1},pe=de.find(C=>(Y("kf",C.k,C.a0)||Y("kf",C.k,C.a1))&&te(C)<9)||de.find(C=>Y("kf",C.k,C.a0)||Y("kf",C.k,C.a1));pe&&ae(pe,.2,.24,(C,J)=>N(C,J))&&ne.add(pe);{let C=de.filter(ee=>te(ee)<9&&ee.a1-ee.a0>=.45&&!(Y("kf",ee.k,ee.a0)&&Y("kf",ee.k,ee.a1))),J=[...C.filter(ee=>ee.up),...C.filter(ee=>!ee.up)];for(let ee of J){if(ne.has(ee))continue;let fe=ee.a1-ee.a0,ue=!1;for(let Te of[.75,.25,.5]){let D=ee.a0+Math.max(.15,Math.min(fe-.15,fe*Te)),Ee=g(ee.k,D,.25);if(ce(Ee,.2)){xe(Ee,.2),k(Ee,f(ee.k)),ue=!0;break}}if(ue){ne.add(ee);break}}}let Le=z.find(C=>C.tag==="sp");if(Le){let C=Le.a1+.06<(t.walls[Le.k].len||0)/100?Le.a1+.06:Le.a0-.06,J=g(Le.k,C,.12);ce(J,.05)&&(xe(J,.05),P(J,f(Le.k)))}let $=t.island;if($){let J=$.x/100,ee=$.z/100,fe=$.w/100,Te=$.v==="kochfeld"||$.v==="spuele"?Math.max(.35,fe/2-.3):.3;if(I(new L(J-Te,.9,ee+.05),0,"mix"),U(new L(J+Te,.9,ee-.08),0,.5),$.v!=="kochfeld"&&!a){let D=fe>=2?3:2,Ee=Math.min(.8,fe/D);for(let se=0;se<D;se++)R(J+(se-(D-1)/2)*Ee,ee,1.65)}}window.__rtDebug&&console.log("Deko spans",JSON.stringify(z.map(C=>[C.k,+C.a0.toFixed(2),+C.a1.toFixed(2),C.tag,!!C.up])),JSON.stringify(Z.map(C=>C.map(J=>+J.toFixed(2)))));let _e=de.filter(C=>te(C)<9).sort((C,J)=>J.a1-J.a0-(C.a1-C.a0));$||me(_e.slice(0,2),.3,.16,(C,J)=>I(C,J,"mix"));let ze=de.filter(C=>!C.up&&te(C)<9);return me(ze,.22,.14,(C,J,ee)=>{let fe=z.find(ue=>ue.a0<=ee&&ue.a1>=ee);U(C,J,fe&&fe.up?.3:.55)}),me([],.2,.2,(C,J)=>Q(C,J)),u}var mt=.1,It=.04,Qe=.004,yn=1.45,mn=.72,K0=2.16,vt=.018,Is=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,Ha=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Qi(i,e,t){let n=document.createElement("canvas");n.width=i,n.height=e,t(n.getContext("2d"),i,e);let s=new vs(n);return s.colorSpace=Rt,s.wrapS=s.wrapT=ds,s.anisotropy=8,s}var vn=(i=>()=>(i=i*16807%2147483647)/2147483647)(987654);function to(i,e){return Qi(1024,256,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s);for(let r=0;r<170;r++){let a=vn()*s,o=.04+vn()*.12;t.strokeStyle=`rgba(${e},${o})`,t.lineWidth=.5+vn()*2.2,t.beginPath(),t.moveTo(0,a);for(let l=0;l<=n;l+=32)t.lineTo(l,a+Math.sin(l/90+r)*3+(vn()-.5)*2);t.stroke()}})}function ka(i,e,t=!0){return Qi(1024,512,(n,s,r)=>{n.fillStyle=i,n.fillRect(0,0,s,r);let a=n.getImageData(0,0,s,r),o=a.data;for(let l=0;l<o.length;l+=4){let c=(vn()-.5)*14;o[l]+=c,o[l+1]+=c,o[l+2]+=c}if(n.putImageData(a,0,0),t)for(let l=0;l<14;l++){n.strokeStyle=e,n.globalAlpha=.25+vn()*.5,n.lineWidth=.6+vn()*2,n.beginPath();let c=vn()*s,u=0;for(n.moveTo(c,u);u<r;)c+=(vn()-.45)*60,u+=20+vn()*30,n.lineTo(c,u);n.stroke()}n.globalAlpha=1})}function sh(i,e){return Qi(512,512,(t,n,s)=>{t.fillStyle=i,t.fillRect(0,0,n,s),t.strokeStyle=e,t.lineWidth=3;for(let r=0;r<=2;r++)t.beginPath(),t.moveTo(0,r*s/2),t.lineTo(n,r*s/2),t.stroke(),t.beginPath(),t.moveTo(r*n/2,0),t.lineTo(r*n/2,s),t.stroke()})}var eo={eiche:()=>({map:to("#b98a5c","70,42,18"),roughness:.55}),nuss:()=>({map:to("#6b4a32","30,16,6"),roughness:.5}),beton:()=>({map:ka("#9b9893","rgba(0,0,0,.2)",!1),roughness:.8}),marmor:()=>({map:ka("#1d1d1f","#d9d4cc"),roughness:.18}),keramik:()=>({map:ka("#ecebe7","#b9b4ac"),roughness:.3}),schwarz:()=>({color:"#161616",roughness:.35})},rh={eiche:()=>{let i=to("#c9a77f","90,60,30");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.7}},grau:()=>{let i=sh("#a7a49f","rgba(0,0,0,.18)");return i.repeat.set(4,4),{map:i,roughness:.6}},hell:()=>{let i=sh("#e8e4dd","rgba(0,0,0,.08)");return i.repeat.set(4,4),{map:i,roughness:.5}},dunkel:()=>{let i=to("#5c4330","20,10,4");return i.repeat.set(3,12),i.rotation=Math.PI/2,{map:i,roughness:.6}}},Va={matt:.62,seide:.38,glanz:.12};function $0(i,e={}){let t=!!e.photo,n=new xs({antialias:!0,preserveDrawingBuffer:!0,alpha:t});n.setPixelRatio(Math.min(2,devicePixelRatio||1)),n.outputColorSpace=Rt,n.toneMapping=Pa,n.toneMappingExposure=1.05,n.shadowMap.enabled=!0,n.shadowMap.type=Ca,t&&n.setClearColor(0,0),i.appendChild(n.domElement);let s=new Yi;s.background=t?null:new it("#ebe6de");let r=new qi(n);s.environment=r.fromScene(new $r(n),.04).texture;let a=new Vt(40,1,.05,80),o=t?null:new Kr(a,n.domElement),l=!1;o&&(o.addEventListener("start",()=>{l=!1}),o.enableDamping=!0,o.minPolarAngle=.2,o.maxPolarAngle=1.45,o.minDistance=1.5,o.maxDistance=16,o.screenSpacePanning=!0);let c=!1,u="perspektive",d=!0,p=!1,m=!1,y=0,b=0,g=null,f=()=>{d=!0,b=0,w()};function w(){!y&&!m&&(y=requestAnimationFrame(Ls))}o&&o.addEventListener("change",f),n.domElement.addEventListener("pointerdown",()=>{c=!0,g=null,f(),e.onInteract&&e.onInteract()}),n.domElement.addEventListener("wheel",()=>{g=null,f()},{passive:!0});let v=new Gr("#fff6ea",2);v.castShadow=!0,v.shadow.mapSize.set(2048,2048),v.shadow.bias=-4e-4,v.shadow.radius=4,s.add(v,v.target);let I=new kr("#ffffff","#bfae98",.55);s.add(I);let k=s.environment,U="tag";function N(){let h=U==="abend";v.intensity=h?.05:2,I.intensity=h?.3:.55,I.color.set(h?"#ffd9b0":"#ffffff"),s.environment=h?null:k,s.background&&s.background.set(h?"#1d1a17":"#ebe6de"),n.toneMappingExposure=t?Q:h?1.25:1.05,ee.m&&(ee.m.sky.color.set(h?"#1b2640":"#dcefff"),ee.m.led.color.set(h?"#fff7e0":"#fff3d6")),f()}let Q=1,P={},R=(h,_)=>P[h]||(P[h]=_()),Z=new et,ce=new et;Z.add(ce),s.add(Z);let xe=null,z=null,Y="",te={w:4.8,d:3.8},de={},ne={},ae=new Set,me=!1,pe=[],Le=e.acc||"#c0673f",$=new et;$.renderOrder=5;{let h=new Rr(new Fr(new zt(1,1,1)),new ys({color:Le,transparent:!0,opacity:.95})),_=new Ke(new zt(1,1,1),new Zt({color:Le,transparent:!0,opacity:.13,depthWrite:!1}));h.raycast=_.raycast=()=>{},$.add(h,_)}let _e=null,ze=new zt(1,1,1);function C(h,_,M,x,S,E,F,H,B=!0){let W=new Ke(ze,x);return W.scale.set(Math.max(h,.001),Math.max(_,.001),Math.max(M,.001)),W.position.set(S,E,F),W.castShadow=B,W.receiveShadow=!0,H.add(W),W}function J(h,_,M,x,S,E,F,H,B,W){let K=R("cy"+(W||[h,_,M,x].join()),()=>new _t(h,_,M,x)),q=new Ke(K,S);return q.position.set(E,F,H),B.add(q),q}function ee(h){let _=JSON.stringify([h.front,h.finish,h.wood,h.top,h.handle,h.wall,h.floor,h.accent,h.back,h.backC,h.backWood,h.sink,h.tap]);if(ee.k===_)return ee.m;ee.k=_;let M=new qe({color:h.front,roughness:Va[h.finish]??.5,envMapIntensity:.9}),x=h.wood?new qe({...R("w"+h.wood,()=>eo[h.wood]()),roughness:.6}):null,S=h.accent?new qe({color:h.accent,roughness:Va[h.finish]??.5}):null,E=new qe({color:"#c8c8c8",roughness:.25,metalness:1}),F=new qe({color:"#2a2a2a",roughness:.8}),H=new qe({color:"#efece6",roughness:.8}),B=x||M,W=(q,oe)=>{let ge=oe?B:F,G=[ge,ge,ge,ge,ge,ge];return G[q]=H,G},K=x?new qe({...R("w"+h.wood,()=>eo[h.wood]()),roughness:.6,color:"#d2d2d2"}):new qe({color:new it(h.front).multiplyScalar(.9),roughness:Va[h.finish]??.5,envMapIntensity:.9});return ee.m={F:x||M,FA:S||x||M,FD:K,carcass:F,inner:H,cs:{L:W(0,1),R:W(1,1),B:W(2),Tp:W(3),K:W(4)},plinth:new qe({color:"#1e1e1e",roughness:.7}),top:new qe({...R("t"+h.top,()=>eo[h.top]())}),steel:E,black:new qe({color:"#0b0b0c",roughness:.08,metalness:.2}),glass:new qe({color:"#111",roughness:.05,metalness:.5}),glassClear:new qe({color:"#cfd8d8",roughness:.05,metalness:.1,transparent:!0,opacity:.35}),handle:h.handle==="gold"?new qe({color:"#b08a4a",roughness:.3,metalness:1}):h.handle==="schwarz"?new qe({color:"#111",roughness:.4,metalness:.6}):E,wall:new qe({color:h.wall||"#f2eee8",roughness:.95}),floor:new qe({...R("f"+h.floor,()=>(rh[h.floor]||rh.eiche)())}),frame:new qe({color:"#ffffff",roughness:.5}),sky:new Zt({color:"#dcefff"}),door:new qe({color:"#d8d2c8",roughness:.7}),led:new Zt({color:"#fff3d6"}),stool:new qe({color:"#1c1c1c",roughness:.5,metalness:.4}),seat:new qe({color:"#8a6a4a",roughness:.6}),glow:new Zt({color:"#ffe7b8"}),fridge:new qe({color:"#bfc2c4",roughness:.3,metalness:.8}),tile:new qe({...R("metro",()=>{let q=Qi(512,512,(oe,ge,G)=>{oe.fillStyle="#d9d4cc",oe.fillRect(0,0,ge,G);for(let j=0;j<8;j++)for(let re=-1;re<5;re++){let he=re*128+j%2*64,We=j*64;oe.fillStyle="#f6f4ef",oe.fillRect(he+3,We+3,122,58),oe.fillStyle="rgba(255,255,255,.5)",oe.fillRect(he+6,We+6,116,10)}});return q.repeat.set(4,1.1),{map:q}}),roughness:.2}),backGlass:new qe({color:h.backC||(h.wood?"#2a2420":h.front),roughness:.04,metalness:.1,envMapIntensity:1.4}),backDibond:new qe({color:h.backC||(h.wood?"#2a2420":h.front),roughness:.62,metalness:.05}),backWood:new qe({...R("bw"+(h.backWood||"eiche"),()=>{let q=eo[h.backWood==="nuss"?"nuss":"eiche"](),oe=q.map.clone();return oe.needsUpdate=!0,oe.repeat.set(1.6,1),{...q,map:oe}}),roughness:.55}),sinkM:(()=>{let q=h.sink||"#c9cccf",oe=q==="#c9cccf";return new qe({color:q,roughness:oe?.28:q==="#f7f6f2"?.12:.42,metalness:oe?1:0,envMapIntensity:oe?1:.8})})(),sinkIn:(()=>{let q=new it(h.sink||"#c9cccf"),oe=(h.sink||"#c9cccf")==="#c9cccf";return new qe({color:q.clone().multiplyScalar(oe?.82:.78),roughness:oe?.35:.5,metalness:oe?1:0})})(),tapM:new qe({chrom:{color:"#e9edf0",roughness:.06,metalness:1},edel:{color:"#c3c6c8",roughness:.34,metalness:1},schwarz:{color:"#161617",roughness:.55,metalness:.25},gold:{color:"#c09a5f",roughness:.3,metalness:1}}[h.tap]||{color:"#e9edf0",roughness:.06,metalness:1}),dside:R("m_ds",()=>new qe({color:"#5b5d60",roughness:.4,metalness:.6})),dbot:R("m_db",()=>new qe({color:"#e7e5e0",roughness:.85})),plate:R("m_pl",()=>new qe({color:"#fbfaf6",roughness:.25})),cup:R("m_cu",()=>new qe({color:"#d9cdb8",roughness:.35})),bottleG:R("m_bg",()=>new qe({color:"#2d4a2a",roughness:.12,metalness:.15})),bottleB:R("m_bb",()=>new qe({color:"#6a3a16",roughness:.12,metalness:.15})),bottleW:R("m_bw",()=>new qe({color:"#c9b37a",roughness:.2})),jar:R("m_ja",()=>new qe({color:"#e3d6bd",roughness:.3})),jarLid:R("m_jl",()=>new qe({color:"#3c3a37",roughness:.4,metalness:.3})),bin:R("m_bi",()=>new qe({color:"#7d8083",roughness:.55})),binY:R("m_by",()=>new qe({color:"#d9b441",roughness:.5})),binB:R("m_bl",()=>new qe({color:"#4f78a8",roughness:.5})),binG:R("m_bgn",()=>new qe({color:"#7a6a55",roughness:.5})),fridgeIn:R("m_fi",()=>new qe({color:"#f3f6f7",roughness:.35})),fridgeLight:R("m_fl",()=>new Zt({color:"#f2f8ff"})),glassShelf:R("m_gs",()=>new qe({color:"#dfeaea",roughness:.05,transparent:!0,opacity:.5})),green:R("m_gr",()=>new qe({color:"#6f8f4e",roughness:.6})),broom:R("m_br",()=>new qe({color:"#b5a27c",roughness:.6}))},ee.m}function fe(h,_,M,x,S,E,F,H,B,W={}){let K=S+E;H.forEach((q,oe)=>{let ge=E*q;if(C(M-Qe*2,ge-Qe,.02,W.mat||_.F,x,K-ge/2,F,h),B.handle!=="grifflos"&&!W.noHandle)if(W.vertical){let G=Math.min(W.hl||.32,ge*.42),re=(W.vpos&&W.vpos[oe]||"bottom")==="top"?K-.07-G/2:K-ge+.07+G/2;C(.016,G,.025,_.handle,x+(W.side||1)*(M/2-.055),re,F+.02,h)}else C(Math.min(.4,M*.6),.015,.025,_.handle,x,K-.05,F+.02,h);K-=ge}),B.handle==="grifflos"&&!W.noHandle&&C(M,.02,.01,_.steel,x,S+E-.012,F-.004,h,!1)}function ue(h,_,M,x,S,E={}){let F=.9-It-mt;C(x-Qe,F,S-.02,_.carcass,0,mt+F/2,-.01,h),C(x,mt,S-.06,_.plinth,0,mt/2,-.03,h),E.noFront||fe(h,_,x,0,mt,F-Qe,S/2-.01,E.parts||[.25,.375,.375],M,E),E.noTop||C(x+.002,It,S+.02,_.top,0,.9-It/2,.01,h)}function Te(h,_,M,x,S=.9){let E=Math.min(.55,Math.max(.3,M-.2));C(E,.008,.44,_.sinkM,0,S+.004,-.02,h,!1),C(E-.07,.004,.34,_.sinkIn,-0,S+.0085,-.01,h,!1),J(.022,.022,.003,18,R("m_drain",()=>new qe({color:"#3a3c3e",roughness:.3,metalness:.8})),0,S+.011,0,h,"drain");let F=_.tapM||_.steel,H=new Ke(R("faucet",()=>new _t(.015,.018,.3,16)),F);H.position.set(0,S+.15,-x/2+.1),H.castShadow=!0,h.add(H);let B=new Ke(R("arc",()=>new Ji(.09,.012,10,24,Math.PI)),F);B.position.set(0,S+.3,-x/2+.19),B.rotation.y=Math.PI/2,B.castShadow=!0,h.add(B);let W=new Ke(R("spout",()=>new _t(.013,.011,.06,14)),F);W.position.set(0,S+.27,-x/2+.28),h.add(W);let K=new Ke(R("lever",()=>new _t(.006,.006,.07,8)),F);K.rotation.z=Math.PI/2.4,K.position.set(.035,S+.22,-x/2+.1),h.add(K)}let D=()=>R("grille",()=>Qi(64,256,(h,_,M)=>{h.fillStyle="#4b4f53",h.fillRect(0,0,_,M),h.fillStyle="#111214";for(let x=6;x<M;x+=12)h.fillRect(6,x,_-12,6)}));function Ee(h,_,M,x,S=.9,E=-.02,F){let H=F?F/100:Math.min(.8,M-.08),B=Math.min(1.12,H/.78);C(H,.008,.52,_.glass,0,S+.004,E,h,!1);let W=R("ringgeo",()=>new zr(.06,.068,32)),K=R("ringmat",()=>new Zt({color:"#555"}));[[-.17,-.12],[.17,-.12],[-.17,.12],[.17,.12]].forEach(([q,oe])=>{let ge=new Ke(W,K);ge.rotation.x=-Math.PI/2,ge.position.set(q*Math.max(.72,B)+(x?Math.sign(q)*.015:0),S+.009,E+oe),h.add(ge)}),x&&C(.09,.004,.5,R("m_grille",()=>new qe({map:D(),roughness:.45,metalness:.6})),0,S+.0095,E,h,!1)}function se(h,_,M,x,S,E){let F=-S/2,H=S/2-.02,B=H-F,W=(F+H)/2,K=_.cs,q=M-2*vt-Qe;return C(vt,x,B,K.L,-M/2+vt/2+Qe/2,E+x/2,W,h),C(vt,x,B,K.R,M/2-vt/2-Qe/2,E+x/2,W,h),C(q,vt,B,K.B,0,E+vt/2,W,h,!1),C(q,vt,B,K.Tp,0,E+x-vt/2,W,h,!1),C(q,x-2*vt,.008,K.K,0,E+x/2,F+.004,h,!1),{zf:H,zb:F}}function le(h,_,M,x,S,E,F){let{M:H,s:B}=h;if(B.handle!=="grifflos"){if(B.handle==="knopf"){let W=J(.014,.011,.026,18,H.handle,M,x,S-.002,_,"knob");W.rotation.x=Math.PI/2,W.castShadow=!0;return}F?C(.016,E,.025,H.handle,M,x,S,_):C(E,.015,.025,H.handle,M,x,S,_)}}let ie=1.05;function De(h,_,M,x,S,E,F,H){let B=h.s.frame&&M>.1&&x>.09,W=C(M,x,.02,B&&(S===h.M.F||S===h.M.FA)?h.M.FD:S,E,F,H,_);if(B){let K=Math.min(.058,M*.15,x*.2),q=H+.0135;C(M,K,.007,S,E,F+x/2-K/2,q,_),C(M,K,.007,S,E,F-x/2+K/2,q,_),C(K,x-2*K,.007,S,E-M/2+K/2,F,q,_),C(K,x-2*K,.007,S,E+M/2-K/2,F,q,_)}return W}function Ae(h,_,M,x,S=0,E=.0215){h.kind!=="u"||h.s.handle!=="grifflos"||C(M,.012,.003,h.M.carcass,S,x+.007,E,_,!1)}function A(h,_,M,x,S){let E={o:_,k:M,to:x,ez:S,b:M==="rx"?_.rotation.x:M==="ry"?_.rotation.y:M==="px"?_.position.x:M==="py"?_.position.y:_.position.z};return h.anims.push(E),E}let T=h=>{let _=h-1;return 1+1.9*_*_*_+.9*_*_},X=(h,_)=>_?T(h):Ha(h);function ve(h,_){let M=new et;return _.add(M),h.hide.push(M),M}function Me(h,_,M,x,S,E,F,H){let B=h.M,W=Math.max(1,Math.floor(x/.14)),K=q=>(Math.sin((H+q)*12.9898)*43758.5453%1+1)%1;if(F==="plates"){let q=Math.max(1,Math.floor(x/.3));for(let oe=0;oe<q;oe++)for(let ge=0;ge<5;ge++)J(.1,.095,.012,24,B.plate,M-x/2+(oe+.5)*x/q,S+.008+ge*.014,E,_,"plate");return}for(let q=0;q<W;q++){let oe=M-x/2+(q+.5)*x/W,ge=K(q);if(ge<.4)J(.04,.04,.1,14,B.jar,oe,S+.05,E,_,"jar"),J(.042,.042,.02,14,B.jarLid,oe,S+.11,E,_,"jarl");else if(ge<.75)for(let G=0;G<3;G++)J(.045,.035,.08,14,B.cup,oe,S+.04+G*.085,E,_,"cup");else for(let G=0;G<4;G++)J(.09,.085,.012,22,B.plate,oe,S+.008+G*.014,E,_,"plate2")}}function ye(h,_,M,x,S,E,F,H,B){let{M:W,zf:K,zb:q}=h,oe=x-2*vt-.006,ge=K-q-.03,G=(K+q)/2-.01;for(let j=1;j<=F;j++){let re=S+E*j/(F+1);C(oe,.016,ge,B?W.glassShelf:W.inner,M,re,G,_,!1),H&&Me(h,_,M,oe-.04,re+.008,G,H,j*7+M*13)}H&&Me(h,_,M,oe-.04,S+vt,G,H,99+M*5)}function Ge(h,_,M,x,S,E,F){let H=_.in||"shelf",B=F?h.g:ve(h,h.g),W=h.M,{zf:K,zb:q}=h,oe=(K+q)/2;if(H==="none")return;if(H==="fridge"){let G=x-2*vt-.01,j=K-q-.02;C(G,E-.02,.01,W.fridgeIn,M,S+E/2,q+.02,B,!1),C(.01,E-.02,j,W.fridgeIn,M-G/2+.005,S+E/2,oe,B,!1),C(.01,E-.02,j,W.fridgeIn,M+G/2-.005,S+E/2,oe,B,!1);let re=Math.max(1,Math.round(E/.3));for(let he=1;he<=re;he++){let We=S+E*he/(re+1);C(G,.008,j-.03,W.glassShelf,M,We,oe,B,!1),he===1&&(J(.04,.04,.12,12,W.bottleW,M-G/4,We+.065,oe,B,"milk"),J(.05,.05,.06,14,W.green,M+G/6,We+.035,oe,B,"bowl"))}C(G*.6,.012,.02,W.fridgeLight,M,S+E-.03,K-.08,B,!1);return}if(H==="broom"){C(x-2*vt-.006,.016,K-q-.03,W.inner,M,S+E-.3,oe,B,!1),J(.012,.012,1.2,8,W.broom,M-x/5,S+.65,oe+.05,B,"stick"),C(.24,.05,.06,W.stool,M-x/5,S+.06,oe+.05,B,!1),C(Math.min(.22,x-.1),.3,.22,W.bin,M+x/6,S+.16,oe,B,!1);return}if(H==="lazy"){let G=Math.max(.1,Math.min(x*.62,K-q-.04)/2),j=new et;j.position.set(M,0,oe),B.add(j);let re=R("lazy"+G.toFixed(2),()=>new _t(G,G,.014,36,1,!1,0,Math.PI*1.5)),he=R("lazyr"+G.toFixed(2),()=>new _t(G+.004,G+.004,.035,36,1,!0,0,Math.PI*1.5)),We=E>.6?2:1;for(let Re=0;Re<We;Re++){let Ne=S+.04+Re*E/(We+.2),nt=new Ke(re,W.inner);nt.position.y=Ne,j.add(nt);let He=new Ke(he,W.steel);He.position.y=Ne+.016,j.add(He);for(let Ye=0;Ye<3;Ye++){let Ve=.5+Ye*1.35,Xe=Math.sin(Ve)*G*.6,tt=Math.cos(Ve)*G*.6;if(Ye===1)for(let rt=0;rt<3;rt++)J(.045,.035,.08,14,W.cup,Xe,Ne+.05+rt*.085,tt,j,"cup");else J(.04,.04,.1,14,W.jar,Xe,Ne+.06,tt,j,"jar"),J(.042,.042,.02,14,W.jarLid,Xe,Ne+.12,tt,j,"jarl")}}J(.01,.01,E-.04,8,W.steel,0,S+E/2,0,j,"lazyax"+E.toFixed(2)),A(h,j,"ry",h.lazyDir||1.1);return}let ge=h.kind==="t"?Math.max(1,Math.floor(E/.38)):h.kind==="u"&&E>.6?2:1;ye(h,B,M,x,S,E,ge,_.dec||(F&&h.kind==="u"?"mix":null),!1)}function Oe(h,_,M,x,S,E,F,H){let{M:B,s:W,g:K,kind:q,zf:oe}=h,ge=F==="l"?1:-1,G=M-ge*x/2,j=new et;j.position.set(G,0,oe),K.add(j);let re=h.mat||B.F,he=x-Qe*2,We=E-Qe,Re=S+E/2;if(H){let Ne=Math.min(W.frame?.065:.05,he*(W.frame?.16:.12));C(he,Ne,.02,re,ge*x/2,S+E-Qe/2-Ne/2,.01,j),C(he,Ne,.02,re,ge*x/2,S+Qe/2+Ne/2,.01,j),C(Ne,We-2*Ne,.02,re,ge*(Qe+Ne/2),Re,.01,j),C(Ne,We-2*Ne,.02,re,ge*(x-Qe-Ne/2),Re,.01,j),C(he-2*Ne,We-2*Ne,.006,B.glassClear,ge*x/2,Re,.01,j,!1)}else De(h,j,he,We,re,ge*x/2,Re,.01);if(Ae(h,j,he,S+Qe/2,ge*x/2),!_.nh&&W.handle!=="grifflos"){let Ne=q==="b"?Math.min(.14,E*.4):Math.min(q==="u"?.2:_.hl||.32,E*.42),nt=_.hp||(q==="u"?"bottom":q==="b"?"top":"bottom"),He=S+.06+Ne/2,Ye=S+E-.06-Ne/2,Ve=q==="t"?S<ie-.1?Math.max(He,Math.min(Ye,ie)):He:nt==="top"?Ye:nt==="mid"?Re:He;le(h,j,ge*(x-.055),Ve,.03,Ne,!0)}A(h,j,"ry",-ge*(_.ang||1.62))}function ke(h,_,M,x,S,E,F,H){let{M:B,s:W,g:K,zf:q,zb:oe,d:ge}=h,G=new et;K.add(G),De(h,G,x-Qe*2,E-Qe,h.mat||B.F,M,S+E/2,q+.01),_.nh||le(h,G,M,h.kind==="t"&&E>.7?Math.max(S+.08,Math.min(S+E-.08,ie)):S+E-.05,q+.03,Math.min(.4,x*.6),!1);let j=ve(h,G),re=x-2*vt-.03,he=q-oe-.05,We=q-.004,Re=We-he,Ne=(Re+We)/2,nt=S+.02,He=_.in||(_.k==="pull"?"shelf":"box"),Ye=(Ve,Xe=j,tt=nt)=>{C(.012,Ve,he,B.dside,M-re/2+.006,tt+Ve/2,Ne,Xe,!1),C(.012,Ve,he,B.dside,M+re/2-.006,tt+Ve/2,Ne,Xe,!1),C(re,Ve*.8,.012,B.dside,M,tt+Ve*.4,Re+.006,Xe,!1),C(re-.02,.01,he,B.dbot,M,tt+.005,Ne,Xe,!1)};if(_.k==="drawer"){let Ve=Math.max(.06,Math.min(E-.05,.24));if(Ye(Ve),He==="cutlery"||He==="box"&&F===0&&H>2)for(let Xe=1;Xe<4;Xe++)C(.006,.04,he-.03,B.dbot,M-re/2+re*Xe/4,nt+.03,Ne,j,!1);else if(He==="plates"&&Ve>.15){let Xe=Math.max(1,Math.floor(re/.26));for(let tt=0;tt<Xe;tt++)for(let rt=0;rt<6;rt++)J(.1,.095,.012,24,B.plate,M-re/2+(tt+.5)*re/Xe,nt+.016+rt*.014,Ne,j,"plate")}else if(He==="pots"&&Ve>.15){let Xe=Math.max(1,Math.floor(re/.26));for(let tt=0;tt<Xe;tt++)J(.1,.1,.12,24,B.steel,M-re/2+(tt+.5)*re/Xe,nt+.07,Ne,j,"pot")}else if(He==="id"){let Xe=new et;j.add(Xe);let tt=.08,rt=S+E-.04-tt;Ye(tt,Xe,rt),C(re-.01,tt,.016,h.mat||B.F,M,rt+tt/2,We-.01,Xe,!1);for(let xt=1;xt<3;xt++)C(.005,.035,he-.04,B.dbot,M-re/2+re*xt/3,rt+.025,Ne,Xe,!1);if(A(h,Xe,"pz",.14),E>.3){let xt=Math.max(1,Math.floor(re/.26));for(let Ft=0;Ft<xt;Ft++)J(.1,.1,.1,24,B.steel,M-re/2+(Ft+.5)*re/xt,nt+.06,Ne,j,"pot2")}}A(h,G,"pz",Math.min(.45,he*.8));return}if(C(.012,E-.06,he,B.dside,M-re/2+.006,S+E/2,Ne,j,!1),C(re,E-.06,.012,B.dside,M,S+E/2,Re+.006,j,!1),He==="bottles"){let Ve=Math.max(1,Math.floor(E/.32)),Xe=Math.max(1,Math.round(re/.08));for(let tt=0;tt<Ve;tt++){let rt=S+.03+tt*E/Ve;C(re,.01,he,B.dside,M,rt,Ne,j,!1);for(let xt=0;xt<Xe;xt++)for(let Ft=0;Ft<3;Ft++){let ts=M-re/2+(xt+.5)*re/Xe,Ga=Re+(Ft+.5)*he/3,Wa=(xt+Ft+tt)%3===0?B.bottleB:B.bottleG;J(.032,.032,.19,12,Wa,ts,rt+.1,Ga,j,"bot"),J(.011,.015,.07,8,Wa,ts,rt+.23,Ga,j,"neck")}}}else if(He==="baskets"){let Ve=Math.max(2,Math.floor(E/.2));for(let Xe=0;Xe<Ve;Xe++){let tt=S+.03+Xe*(E-.06)/Ve;C(re,.008,he,B.dside,M,tt,Ne,j,!1),C(re,.04,.006,B.steel,M,tt+.03,Re+.01,j,!1),C(re,.04,.006,B.steel,M,tt+.03,We-.03,j,!1);let rt=Math.max(1,Math.floor(he/.11));for(let xt=0;xt<rt;xt++){let Ft=Re+(xt+.5)*he/rt;re>.1?(J(.035,.035,.09,12,B.jar,M,tt+.05,Ft,j,"jar2"),J(.037,.037,.015,12,B.jarLid,M,tt+.1,Ft,j,"jarl2")):C(.05,.1,.07,(xt+Xe)%2?B.bottleW:B.cup,M,tt+.055,Ft,j,!1)}}}else if(He==="bins"){let Ve=re>.4?3:2,Xe=re/Ve-.015,tt=[B.binY,B.binB,B.binG];for(let rt=0;rt<Ve;rt++){let xt=M-re/2+(rt+.5)*re/Ve,Ft=Math.min(.36,E-.14);C(Xe,Ft,he-.04,B.bin,xt,S+.04+Ft/2,Ne,j,!1),C(Xe+.006,.02,he-.02,tt[rt],xt,S+.05+Ft,Ne,j,!1)}}else{let Ve=Math.max(1,Math.floor(E/.3));for(let Xe=0;Xe<Ve;Xe++)C(re,.01,he,B.dbot,M,S+.03+Xe*E/Ve,Ne,j,!1)}A(h,G,"pz",Math.min(.55,he*.88))}function $e(h,_,M,x,S,E,F,H){let{M:B,s:W,g:K,zf:q}=h,oe=_.k||"door";if(oe==="open"){Ge(h,{in:_.in||"shelf",dec:_.dec||"mix"},M,x,S,E,!0);return}if(oe==="blind"){De(h,K,x-Qe*2,E-Qe,h.mat||B.F,M,S+E/2,q+.01);return}if(oe==="oven"||oe==="micro"){C(x-Qe*2,E-Qe,.02,B.glass,M,S+E/2,q+.01,K),C(x-.1,E*.62,.004,R("m_ov",()=>new qe({color:"#202326",roughness:.2,metalness:.4})),M,S+E*.44,q+.022,K,!1),C(x*.8,.018,.03,B.steel,M,S+E-.06,q+.04,K),oe==="oven"&&C(x*.5,.02,.004,B.steel,M,S+E-.025,q+.022,K,!1);return}if(oe==="drawer"||oe==="pull"){ke(h,_,M,x,S,E,F,H);return}if(oe==="door"||oe==="glass"){Oe(h,_,M,x,S,E,_.a||"l",oe==="glass"),Ge(h,_,M,x,S,E,oe==="glass");return}if(oe==="door2"||oe==="glass2"){let ge=oe==="glass2";Oe(h,_,M-x/4,x/2,S,E,"l",ge),Oe(h,_,M+x/4,x/2,S,E,"r",ge),Ge(h,_,M,x,S,E,ge);return}if(oe==="flap"){let ge=new et;ge.position.set(M,S+E,q),K.add(ge),De(h,ge,x-Qe*2,E-Qe,h.mat||B.F,0,-E/2,.01),Ae(h,ge,x-Qe*2,-E+Qe/2),_.nh||le(h,ge,0,-E+.05,.03,Math.min(.4,x*.6),!1),A(h,ge,"rx",-1.75,X),Ge(h,_,M,x,S,E,!1);return}if(oe==="lift"){let ge=new et;ge.position.set(M,0,q),K.add(ge),De(h,ge,x-Qe*2,E-Qe,h.mat||B.F,0,S+E/2,.01),Ae(h,ge,x-Qe*2,S+Qe/2),_.nh||le(h,ge,0,S+.05,.03,Math.min(.4,x*.6),!1),A(h,ge,"py",E+.03,X),A(h,ge,"pz",1,(G,j)=>{let re=X(G,j);return .06*re+.1*Math.sin(Math.PI*Math.min(1,re))}),A(h,ge,"rx",1,(G,j)=>-.16*Math.sin(Math.PI*Math.min(1,X(G,j)))),Ge(h,_,M,x,S,E,!1);return}if(oe==="fold"){let ge=E/2,G=h.mat||B.F,j=new et;j.position.set(M,S+E,q),K.add(j),De(h,j,x-Qe*2,ge-Qe/2,G,0,-ge/2+Qe/4,.01);let re=new et;re.position.set(0,-ge,0),j.add(re),De(h,re,x-Qe*2,ge-Qe/2,G,0,-ge/2-Qe/4,.01),Ae(h,re,x-Qe*2,-ge+Qe/4),C(x-Qe*2-.01,.004,.004,B.carcass,0,0,.002,re,!1),_.nh||le(h,re,0,-ge+.05,.03,Math.min(.4,x*.6),!1);let he=1.42;A(h,j,"rx",-he,X),A(h,re,"rx",2*he,X),Ge(h,_,M,x,S,E,!1);return}if(oe==="dw"){let ge=new et;ge.position.set(M,S,q),K.add(ge),De(h,ge,x-Qe*2,E-Qe,h.mat||B.F,0,E/2,.01),le(h,ge,0,E-.05,.03,Math.min(.4,x*.6),!1);let G=ve(h,K),j=x-2*vt-.02,{zb:re}=h,he=q-re-.06,We=(q+re)/2;C(j,E-.04,.01,B.steel,M,S+E/2,re+.03,G,!1),[.14,.44].forEach((Re,Ne)=>{let nt=new et;G.add(nt),C(j-.02,.006,he,B.dside,M,S+Re,We,nt,!1),C(j-.02,.07,.006,B.dside,M,S+Re+.035,We+he/2,nt,!1);let He=Math.max(4,Math.floor(j/.05));for(let Ye=0;Ye<He;Ye++){let Ve=new Ke(R("dwplate",()=>new _t(.1,.1,.01,20)),B.plate);Ve.rotation.x=Math.PI/2,Ve.position.set(M-j/2+.04+Ye*(j-.08)/(He-1),S+Re+.1,We-.06*Ne),nt.add(Ve)}Ne===0&&A(h,nt,"pz",.32)}),A(h,ge,"rx",1.45);return}}function st(h,_,M,x,S,E){let F=_.reduce((K,q)=>K+(q.cm!=null?q.cm/100:0),0),H=_.reduce((K,q)=>K+(q.cm==null?q.p||1:0),0)||1,B=Math.max(0,E-F),W=S+E;_.forEach((K,q)=>{let oe=K.cm!=null?K.cm/100:B*(K.p||1)/H;oe>.005&&$e(h,K,M,x,W-oe,oe,q,_.length),W-=oe})}function Se(h,_,M,x){let{g:S,M:E,s:F}=h,H=.6,B=.9+x,W=mt+x,K=B-It-W,q=.3,oe=new et;S.add(oe),_.corner.side==="r"&&(oe.scale.x=-1);let ge=-M/2,G=-M/2+.6;C(M,mt+x,H-.06,E.plinth,0,(mt+x)/2,-.03,oe),C(.6-.06,mt+x,q+.06,E.plinth,ge+.27,(mt+x)/2,H/2+q/2-.03,oe),C(M-Qe,K,.008,E.carcass,0,W+K/2,-H/2+.004,oe),C(vt,K,H+q-.02,E.carcass,ge+vt/2,W+K/2,(q-.02)/2,oe),C(vt,K,H-.02,E.carcass,M/2-vt/2,W+K/2,-.01,oe),C(.6,K,vt,E.carcass,ge+.3,W+K/2,H/2+q-.02-vt/2,oe),C(M-Qe,vt,H-.02,E.inner,0,W+vt/2,-.01,oe,!1),C(.6,vt,q,E.inner,ge+.3,W+vt/2,H/2+q/2-.01,oe,!1),C(M,It,H+.02,E.top,0,B-It/2,.01,oe),C(.62,It,q-.02,E.top,ge+.31,B-It/2,H/2+.02+(q-.02)/2,oe);let j=H/2-.02,re=h.mat||E.F,he=M/2-G,We=new et;We.position.set(M/2,0,j),oe.add(We),C(he-Qe*2,K-Qe,.02,re,-he/2,W+K/2,.01,We);let Re=new et;if(Re.position.set(G+.02,0,H/2+q-.02),oe.add(Re),C(.02,K-Qe,q-Qe*2,re,.01,W+K/2,-q/2+.01,Re),le(h,We,-he+.05,B-It-.12,.03,.14,!0),F.handle!=="grifflos")if(F.handle==="knopf"){let Ye=J(.014,.011,.026,18,E.handle,.03,B-It-.12,-q+.06,Re,"knob");Ye.rotation.z=Math.PI/2}else C(.025,.14,.016,E.handle,.03,B-It-.12,-q+.06,Re);A(h,We,"ry",1.62),A(h,Re,"ry",-1.62);let Ne=new et;Ne.position.set(ge+.45,0,.15),oe.add(Ne),h.hide.push(Ne);let nt=R("kardisc",()=>new _t(.4,.4,.02,40,1,!1,Math.PI/2,Math.PI*1.5)),He=R("karrim",()=>new _t(.405,.405,.05,40,1,!0,Math.PI/2,Math.PI*1.5));[.22,.5].forEach((Ye,Ve)=>{let Xe=new Ke(nt,E.inner);Xe.position.y=W+Ye,Ne.add(Xe);let tt=new Ke(He,E.steel);tt.position.y=W+Ye+.025,Ne.add(tt);for(let rt=0;rt<4;rt++){let xt=Math.PI/2+.5+rt*.9;J(.07,.06,.1+Ve*.02,16,rt%2?E.steel:E.jar,Math.sin(xt)*.25,W+Ye+.06,Math.cos(xt)*.25,Ne,"karpot"+Ve)}}),J(.012,.012,K-.04,8,E.steel,0,W+K/2,0,Ne,"karax"),A(h,Ne,"ry",-Math.PI/2)}function ct(h,_,M,x,S,E){let{M:F}=h,H=new et;h.g.add(H),h.hide.push(H);let B=R("lemans",()=>{let W=new Dn;return W.moveTo(-.22,-.16),W.lineTo(.18,-.16),W.quadraticCurveTo(.26,-.16,.26,-.06),W.lineTo(.26,.1),W.quadraticCurveTo(.26,.18,.16,.18),W.lineTo(-.06,.18),W.quadraticCurveTo(-.22,.18,-.24,.02),W.quadraticCurveTo(-.26,-.16,-.22,-.16),new Br(W,{depth:.03,bevelEnabled:!1})});[.2,.48].forEach(W=>{let K=x+W*S/.72,q=new Ke(B,F.inner);q.rotation.x=-Math.PI/2,q.position.set(0,K,0),H.add(q);for(let oe=0;oe<3;oe++)J(.06,.05,.09,16,oe===1?F.steel:F.jar,-.12+oe*.13,K+.075,.01,H,"lmpot")}),H.position.set(_+E*.14,0,-.02),A(h,H,"px",-E*.16),A(h,H,"pz",.42),A(h,H,"ry",-E*.45)}let O=()=>R("contact",()=>Qi(128,128,(h,_,M)=>{h.clearRect(0,0,_,M),h.shadowColor="rgba(0,0,0,1)",h.shadowBlur=22,h.fillStyle="#000",h.fillRect(30,30,68,68)}));function be(h,_,M){let x=new Ke(R("cgeo",()=>new xn(1,1)),R("cmat",()=>new Zt({map:O(),transparent:!0,opacity:.5,depthWrite:!1,color:"#000"})));x.rotation.x=-Math.PI/2,x.scale.set(_/.56,M/.56,1),x.position.set(0,.0015,-.02),x.renderOrder=-1,x.raycast=()=>{},h.add(x)}function Fe(h,_,M,x,S){let E=x.kind||"b",F=x.w/100,H=(x.d||(E==="u"?35:60))/100,B=E==="b"?((x.ah||90)-90)/100:0;if(E!=="u"&&be(h,F,H-.04),S.kind=E,S.d=H,S.mat=x.acc?_.FA:x.dekor==="top"?_.top:null,x.eqk&&(h.userData.eq={k:x.eqk,wall:x.eqw}),x.corner&&x.corner.kind==="kar"){Se(S,x,F,B);return}let W,K;if(E==="u")W=(x.y0||145)/100,K=(x.h||72)/100;else if(E==="t")W=mt,K=(x.h||216)/100-mt,C(F,mt,H-.06,_.plinth,0,mt/2,-.03,h);else{W=mt+B,K=.9+B-It-W;let he=x.plExt||[0,0];C(F+(he[0]+he[1])/100,mt+B,H-.06,_.plinth,(he[1]-he[0])/200,(mt+B)/2,-.03,h)}let{zf:q,zb:oe}=se(h,_,F,K,H,W);S.zf=q,S.zb=oe;let ge=x.cols||[{fr:x.fr||[{k:"door"}]}],G=ge.reduce((he,We)=>he+(We.cm?We.cm/100:0),0),j=ge.filter(he=>!he.cm).length||1,re=-F/2;if(ge.forEach(he=>{let We=he.cm?he.cm/100:(F-G)/j,Re=K-Qe;st(S,he.fr,re+We/2,We,W+Qe/2,Re),he.lemans&&ct(S,re+We/2,We,W,K,he.lemans),re+=We}),M.handle==="grifflos"&&E!=="u"&&!x.noGrip&&C(F,.02,.01,_.steel,0,W+K-.012,q-.004,h,!1),E==="b"){let he=x.topCut||[0,0];if(C(F-(he[0]+he[1])/100,It,H+.02,_.top,(he[0]-he[1])/200,.9+B-It/2,.01,h),x.app){let We=new et;h.add(We),We.userData.eq={k:x.app==="sp"?"sp":"kf",id:x.id},x.app==="sp"?Te(We,_,F,H,.9+B):Ee(We,_,F,x.app==="kfb"||!!M.hobDD,.9+B,-.02,x.hob)}}E==="u"&&x.led!==!1&&C(F-.02,.01,.02,_.led,0,W-.004,q-.05,h,!1)}let Ce={us:(h,_,M,x)=>ue(h,_,M,x.w/100,.6,{parts:x.v==="tuer"?[.18,.82]:[.25,.375,.375],vertical:!1}),sp:(h,_,M,x)=>{ue(h,_,M,x.w/100,.6,{parts:[1]}),Te(h,_,x.w/100,.6)},kf:(h,_,M,x)=>{if(x.v==="ofen"){let S=x.w/100;ue(h,_,M,S,.6,{parts:[.2,.8]});let E=.9-It-mt;C(S-.05,E*.8-.1,.022,_.glass,0,mt+E*.8/2,.3,h),C(S*.8,.018,.03,_.steel,0,mt+E*.8-.06,.32,h),Ee(h,_,S,!1);return}ue(h,_,M,x.w/100,.6,{parts:[.25,.375,.375]}),Ee(h,_,x.w/100,x.v!=="normal")},gs:(h,_,M,x)=>ue(h,_,M,x.w/100,.6,{parts:[1],noHandle:M.handle==="grifflos"}),ec:(h,_,M,x)=>ue(h,_,M,x.w/100,.6,{parts:[.18,.82]}),hs:(h,_,M,x)=>{let S=x.w/100,E=.6,F=K0-mt;C(S-Qe,F,E,_.carcass,0,mt+F/2,-.01,h),C(S,mt,E-.06,_.plinth,0,mt/2,-.03,h);let H=E/2;x.v==="backofen"||x.v==="dampf"?(fe(h,_,S,0,mt,.7,H,[.5,.5],M),C(S-.04,.58,.022,_.glass,0,mt+.7+.3,H,h),C(S*.8,.02,.03,_.steel,0,mt+.7+.55,H+.02,h),x.v==="dampf"?(C(S-.04,.44,.022,_.glass,0,mt+1.32+.22,H,h),fe(h,_,S,0,mt+1.78,F-1.78,H,[1],M,{vertical:!0,vpos:["bottom"],hl:.2})):fe(h,_,S,0,mt+1.32,F-1.32,H,[1],M,{vertical:!0,vpos:["bottom"],hl:.26})):x.v==="kuehl"?fe(h,_,S,0,mt,F,H,[.6,.4],M,{vertical:!0,side:-1,vpos:["bottom","top"]}):fe(h,_,S,0,mt,F,H,[.5,.5],M,{vertical:!0,vpos:["bottom","top"]})},kfr:(h,_,M,x)=>{let S=x.w/100,E=.7,F=1.78;C(S-.01,F,E-.02,_.fridge,0,F/2,0,h),C(.004,F-.02,.02,_.black,0,F/2,E/2,h),C(.02,.7,.04,_.steel,-.06,1.1,E/2+.03,h),C(.02,.7,.04,_.steel,.06,1.1,E/2+.03,h),C(.18,.3,.01,_.black,-.22,1.15,E/2+.001,h)},ws:(h,_,M,x)=>{let S=x.w/100,E=.35;if(x.v==="offen"){[0,.36,.72].forEach(F=>C(S-.01,.025,E-.02,_.F,0,yn+F+.012,0,h)),C(.025,mn,E-.02,_.F,-S/2+.012,yn+mn/2,0,h),C(.025,mn,E-.02,_.F,S/2-.012,yn+mn/2,0,h);return}C(S-Qe,mn,E,_.carcass,0,yn+mn/2,0,h),x.v==="glas"?(C(S-Qe*2,mn-Qe,.02,_.glassClear,0,yn+mn/2,E/2+.005,h),C(S-.04,.015,E-.04,_.inner,0,yn+mn/2,0,h)):C(S-Qe*2,mn-Qe,.02,_.FA,0,yn+mn/2,E/2+.005,h),M.handle!=="grifflos"&&x.v!=="glas"&&C(.016,.2,.025,_.handle,S/2-.055,yn+.06+.1,E/2+.025,h),C(S-.02,.01,.02,_.led,0,yn-.004,E/2-.05,h,!1)},ns:(h,_,M,x)=>{let S=x.w/100,E=(x.h||55)/100,F=((x.ah||90)-90)/100;if(E<=.01)return;h.userData.eq={k:"bs",wall:x.wall};let H=M.back==="platte"?_.top:M.back==="fliese"?_.tile:M.back==="glas"?_.backGlass:M.back==="dibond"?_.backDibond:M.back==="holz"?_.backWood:null;if(M.back==="motiv")if(V&&x.nW){let B=V.image,W=x.nW/55,K=B.width/B.height,q=1,oe=1;K>W?q=W/K:oe=K/W;let ge=V.clone();ge.repeat.set(x.w/x.nW*q,E/.55*oe),ge.offset.set((1-q)/2+x.nx/x.nW*q,(1-oe)/2),ge.needsUpdate=!0,H=new qe({map:ge,roughness:.07,metalness:.05,envMapIntensity:1.1})}else H=_.backGlass;if(H&&M.backLed&&U==="abend"){let B=H;H=B.map&&M.back==="motiv"?B:R("nsg"+ee.k,()=>B.clone()),H.emissive=new it("#ffd49a"),H.emissiveIntensity=M.back==="motiv"?.5:.32,B.map&&(H.emissiveMap=B.map)}if(H&&C(S,E,.012,H,0,.9+F+E/2,0,h,!1),M.backLed&&E>.3&&(C(S,.008,.012,_.led,0,.9+F+E-.006,.014,h,!1),h.userData.led=.9+F+E-.03),!H){let B=C(S,E,.004,R("m_inv",()=>new Zt({visible:!1})),0,.9+F+E/2,-.004,h,!1);B.castShadow=!1}},hb:(h,_,M,x)=>{let S=x.w/100,E=x.v||"schraeg",F=-.25;if(h.userData.eq={k:"dh",id:x.id,wall:x.wall},E==="esse"){C(.3,.9,.24,_.steel,0,2.15,F+.12,h),C(S,.05,.5,_.steel,0,1.6,0,h);let B=new et;B.position.set(0,1.775,F+.25),B.scale.set(1,1,.5/S),h.add(B);let W=new Ke(R("pyr",()=>new _t(.24,.7071,.3,4,1)),_.steel);W.rotation.y=Math.PI/4,W.scale.set(S,1,S),W.castShadow=!0,B.add(W);return}if(E==="flach"){C(S-.004,.72,.33,_.F,0,1.45+.36,F+.165,h),De({s:M,M:_},h,S-.006,.7,_.F,0,1.45+.37,F+.34),C(S-.02,.03,.3,_.steel,0,1.45-.012,F+.2,h),C(S-.06,.006,.004,_.black,0,1.45-.02,F+.352,h,!1);return}if(E==="decke"){C(Math.max(.9,S+.1),.05,.6,R("m_ceil",()=>new qe({color:"#eef0f1",roughness:.4})),0,2.575,.05,h,!1),C(Math.max(.9,S+.1)-.12,.006,.44,R("m_grille",()=>new qe({map:D(),roughness:.45,metalness:.6})),0,2.548,.05,h,!1);return}C(.28,.66,.22,_.steel,0,2.27,F+.11,h),C(S*.96,.2,.22,_.steel,0,1.94,F+.11,h);let H=C(S,.54,.022,_.black,0,1.83,F+.33,h);H.rotation.x=-.64,C(S,.02,.05,_.steel,0,1.6,F+.48,h)},hz:(h,_,M,x)=>{let S=(x.w||100)/100,E=(x.h||60)/100,F=(x.y0??10)/100;C(S,E,.06,_.frame,0,F+E/2,-.01,h);for(let H=-S/2+.03;H<S/2-.02;H+=.05)C(.014,E-.03,.008,_.frame,H,F+E/2,.023,h);C(S,.02,.07,_.frame,0,F+E+.01,-.01,h,!1),J(.022,.022,.07,12,_.steel,S/2-.03,F+E+.06,0,h,"thermo"),C(.03,.05,.04,_.steel,S/2-.03,F-.03,-.02,h,!1)},wg:(h,_,M,x)=>{let S=(x.h||90)/100;h.userData.eq={k:"wg",wall:x.wall},C(.025,S,.62,x.dekor==="front"?_.F:_.top,0,S/2,0,h)},rg:(h,_,M,x)=>{let S=x.w/100;[0,.38].forEach(E=>C(S,.04,.26,_.top,0,1.5+E,0,h))},in:(h,_,M,x)=>{let S=x.w/100,E=(x.d||100)/100,F=E-.3,H=-E/2+F/2,B=Math.max(2,Math.round(S/.6)),W=S/B;for(let G=0;G<B;G++){let j=-S/2+W*G+W/2,re=new et;re.position.set(j,0,H),ue(re,_,M,W,F,{noTop:!0,parts:x.v==="spuele"&&G===Math.floor(B/2)?[1]:[.25,.375,.375]}),h.add(re)}let K=x.dekor==="front"?_.F:_.top;C(S+.08,It,E,_.top,0,.9-It/2,0,h),[-1,1].forEach(G=>{let j=new et;j.userData.eq={k:"wg"},h.add(j),C(.04,.9-It,E,K,G*(S/2+.02),(.9-It)/2,0,j)});let q=x.ih||"mulde";if(x.v==="kochfeld"){let G=new et;if(G.position.set(0,0,H+.05),G.userData.eq={k:"isl"},Ee(G,_,.8,q==="mulde",.9,-.02,x.hob),h.add(G),q==="insel"){let j=new et;j.position.set(0,0,H+.03),j.userData.eq={k:"isl"},C(.9,.09,.6,_.steel,0,1.68,0,j),C(.32,.86,.28,_.steel,0,2.17,0,j),C(.86,.006,.54,R("m_grille",()=>new qe({map:D(),roughness:.45,metalness:.6})),0,1.632,0,j,!1),h.add(j)}if(q==="decke"){let j=new et;j.position.set(0,0,H+.03),j.userData.eq={k:"isl"},C(1,.05,.6,R("m_ceil",()=>new qe({color:"#eef0f1",roughness:.4})),0,2.575,0,j,!1),C(.88,.006,.46,R("m_grille",()=>new qe({map:D(),roughness:.45,metalness:.6})),0,2.548,0,j,!1),h.add(j)}}let oe=x.v==="kochfeld"&&q!=="mulde";if(x.v==="spuele"){let G=new et;G.position.set((Math.floor(B/2)+.5)*W-S/2,0,H+.05),Te(G,_,W,F+.3),h.add(G)}let ge=Math.max(2,Math.floor(S/.55));for(let G=0;G<ge;G++){let j=-S/2+S/(ge+1)*(G+1),re=E/2+.22,he=new Ke(R("leg",()=>new _t(.02,.02,.62,12)),_.stool);he.position.set(j,.31,re),he.castShadow=!0,h.add(he);let We=new Ke(R("seatg",()=>new _t(.18,.17,.05,24)),_.seat);We.position.set(j,.64,re),We.castShadow=!0,h.add(We)}for(let G=0;G<3;G++){if(oe&&(G===1||S<1.6))continue;let j=oe?(G===0?-1:1)*(S/2-.22):-S/2+S/4*(G+1),re=new Ke(R("lamp",()=>new Or(.12,.22,24,1,!0)),_.stool);re.position.set(j,1.82,0),h.add(re);let he=new Ke(R("bulb",()=>new Yn(.04,12,12)),_.glow);he.position.set(j,1.74,0),h.add(he);let We=new Ke(R("cord",()=>new _t(.004,.004,.7,6)),_.stool);We.position.set(j,2.28,0),h.add(We)}},th:(h,_,M,x)=>{let S=x.w/100,E=(x.d||40)/100;C(S,1.06,.06,_.FA,0,.53,-E/2+.05,h),C(S+.04,It,E+.04,_.top,0,1.08,0,h);let F=Math.max(2,Math.floor(S/.55));for(let H=0;H<F;H++){let B=-S/2+S/(F+1)*(H+1),W=E/2+.22,K=new Ke(R("leg2",()=>new _t(.02,.02,.78,12)),_.stool);K.position.set(B,.39,W),h.add(K);let q=new Ke(R("seatg",()=>new _t(.18,.17,.05,24)),_.seat);q.position.set(B,.8,W),q.castShadow=!0,h.add(q)}}};function Je(h){let _=(h.d||(h.kind==="u"?35:60))/100,M=h.w/100,x=0,S;return h.kind==="u"?(x=(h.y0||145)/100,S=x+(h.h||72)/100):h.kind==="t"?S=(h.h||216)/100:S=.9+((h.ah||90)-90)/100,[M+.02,S-x+.02,_+.04,(x+S)/2]}function ot(h){let _=h.userData.hb;_&&($.scale.set(_[0],_[1],_[2]),$.position.set(0,_[3],.005),h.add($))}function at(h){h=h==null?null:String(h),h!==_e&&(_e=h,$.parent&&$.parent.remove($),h!=null&&ne[h]?ot(ne[h]):_e=null,f())}function lt(h){for(let _=pe.length-1;_>=0;_--){let M=pe[_];if(h<M.s)continue;let x=Math.min(1,(h-M.s)/M.d);if(M.kind==="out"){let E=x*x,F=Math.max(.001,1-E);M.g.scale.setScalar(F),M.g.position.y=M.y0+M.yc*(1-F)+.12*E,x>=1&&(M.g.parent&&M.g.parent.remove(M.g),pe.splice(_,1));continue}let S=1-Math.pow(1-x,3);if(M.g.position.lerpVectors(M.p0,M.p1,S),M.kind==="in"){let E=.88+.12*S;M.g.scale.setScalar(E),M.g.position.y+=M.yc*(1-E)}x>=1&&(M.g.position.copy(M.p1),M.g.scale.setScalar(1),pe.splice(_,1))}return!0}function Ue(h){let _=h.userData.st,M=Ha(_.c);_.anims.forEach(x=>{let S=x.b+x.to*(x.ez?x.ez(_.c,_.ez):M);x.k==="rx"?x.o.rotation.x=S:x.k==="ry"?x.o.rotation.y=S:x.k==="px"?x.o.position.x=S:x.k==="py"?x.o.position.y=S:x.o.position.z=S}),_.hide.forEach(x=>{x.visible=_.c>.001})}let V=null,Ie=null,Pe=null;function je(h){Pe=h;let _=h.style,M=h.room,x=ee(_);(h.motif||null)!==Ie&&(Ie=h.motif||null,V&&V.dispose(),V=Ie?new vs(Ie):null,V&&(V.colorSpace=Rt,V.anisotropy=8));let S=ne,E={};for(let G in S){let j=S[G];E[G]={p:j.position.clone(),ry:j.rotation.y,g:j}}for(let G=pe.length-1;G>=0;G--)pe[G].kind!=="out"&&pe.splice(G,1);$.parent&&$.parent.remove($),z&&ce.remove(z),z=new et,ce.add(z),ne={};let F=M.w/100,H=M.d/100,B=2.6;if(t){let G=new Ke(new xn(F+6,H+6),R("shadowcatch",()=>new Hr({opacity:.34})));G.rotation.x=-Math.PI/2,G.position.set(F/2,0,H/2),G.receiveShadow=!0,z.add(G)}else{let G=new Ke(new xn(F+4,H+4),x.floor);G.rotation.x=-Math.PI/2,G.position.set(F/2,0,H/2),G.receiveShadow=!0,z.add(G)}let W=t?{}:M.walls||{N:1,E:1,S:1,W:1},K={N:[F,F/2,0,0],S:[F,F/2,H,Math.PI],W:[H,0,H/2,Math.PI/2],E:[H,F,H/2,-Math.PI/2]};de={};for(let G in K){if(!W[G])continue;let[j,re,he,We]=K[G],Re=new et;Re.userData={p:new L(re,0,he),n:{N:[0,1],S:[0,-1],W:[1,0],E:[-1,0]}[G]},de[G]=Re,z.add(Re);let Ne=new Ke(new xn(j,B),x.wall);Ne.position.set(re,B/2,he),Ne.rotation.y=We,Ne.receiveShadow=!0,Re.add(Ne)}(h.open||[]).forEach(G=>{if(!W[G.wall])return;let[j,re,he,We]=K[G.wall],Re=new et;Re.rotation.y=We;let Ne=G.s/100+G.w/200,nt={N:[Ne,0],S:[F-Ne,H],W:[0,H-Ne],E:[F,Ne]}[G.wall];Re.position.set(nt[0],0,nt[1]);let He=G.w/100;if(G.t==="fenster"){let Ye=(G.y||100)/100,Ve=(G.h||120)/100,Xe=new Ke(R("pane",()=>new xn(1,1)),x.sky);Xe.scale.set(He,Ve,1),Xe.position.set(0,Ye+Ve/2,.003),Re.add(Xe),C(He+.08,.06,.06,x.frame,0,Ye,.03,Re,!1),C(He+.08,.06,.06,x.frame,0,Ye+Ve,.03,Re,!1),C(.06,Ve,.06,x.frame,-He/2,Ye+Ve/2,.03,Re,!1),C(.06,Ve,.06,x.frame,He/2,Ye+Ve/2,.03,Re,!1);let tt=G.fl?G.fl===2:He>.9;if(tt&&C(.04,Ve,.04,x.frame,0,Ye+Ve/2,.03,Re,!1),C(He+.1,.03,.12,x.frame,0,Ye-.015,.06,Re,!1),G.k!=="fest"){let rt=tt?.045:G.a==="r"?-He/2+.06:He/2-.06,xt=Ye+Math.min(Ve*.5,Math.max(.25,1.05-Ye));C(.02,.12,.025,x.steel,rt,xt,.055,Re)}}else if(G.t==="balkon"){let Ye=(G.h||216)/100,Ve=G.fl?G.fl===2:He>1.1,Xe=new Ke(R("pane",()=>new xn(1,1)),x.sky);Xe.scale.set(He,Ye,1),Xe.position.set(0,Ye/2,.003),Re.add(Xe),C(He+.08,.06,.06,x.frame,0,Ye,.03,Re,!1),C(He+.08,.04,.08,x.frame,0,.02,.04,Re,!1),C(.06,Ye,.06,x.frame,-He/2,Ye/2,.03,Re,!1),C(.06,Ye,.06,x.frame,He/2,Ye/2,.03,Re,!1),(Ve||G.k==="hs")&&C(.05,Ye,.05,x.frame,0,Ye/2,.03,Re,!1),C(He,.05,.03,x.frame,0,.45,.025,Re,!1);let tt=Ve||G.k==="hs"?.06:G.a==="r"?-He/2+.07:He/2-.07;C(.022,G.k==="hs"?.3:.13,.025,x.steel,tt,1.05,.055,Re)}else{let Ye=(G.h||205)/100,Ve=G.fl===2,Xe=(G.a||"r")==="r";C(He,Ye,.01,G.t==="durchgang"?x.plinth:x.door,0,Ye/2,.006,Re,!1),C(He+.1,.06,.05,x.frame,0,Ye+.03,.025,Re,!1),C(.05,Ye,.05,x.frame,-He/2-.025,Ye/2,.025,Re,!1),C(.05,Ye,.05,x.frame,He/2+.025,Ye/2,.025,Re,!1),G.t==="tuer"&&(G.k==="schiebe"?(C(He*2+.1,.04,.05,x.steel,Xe?-He/2:He/2,Ye+.1,.07,Re),C(.025,.32,.02,x.steel,Xe?-He/2+.07:He/2-.07,1.05,.03,Re)):Ve?(C(.012,Ye,.012,x.frame,0,Ye/2,.012,Re,!1),C(.12,.02,.04,x.steel,-.08,1.05,.04,Re),C(.12,.02,.04,x.steel,.08,1.05,.04,Re)):C(.12,.02,.04,x.steel,Xe?-He/2+.1:He/2-.1,1.05,.04,Re))}de[G.wall].add(Re)});let q=[];h.items.forEach(G=>{let j=new et;if(G.t==="cab"){let re={g:j,M:x,s:_,anims:[],hide:[]};Fe(j,x,_,G,re),(re.anims.length||G.id!=null)&&(j.userData.st={c:0,t:0,go:0,anims:re.anims,hide:re.hide},j.userData.pid=G.id,j.userData.label=G.label||"",j.userData.wcm=G.w,j.userData.hb=Je(G),G.id!=null&&(ne[G.id]=j))}else{let re=Ce[G.t];if(!re)return;re(j,x,_,G)}j.position.set(G.x/100,0,G.z/100),j.rotation.y=(G.r||0)*Math.PI/180,z.add(j),G.t==="ns"&&j.userData.led&&(j.updateMatrixWorld(),q.unshift(j.localToWorld(new L(0,j.userData.led,.1)))),(G.t==="ws"&&G.v!=="offen"||G.t==="cab"&&G.kind==="u"&&G.led!==!1)&&(j.updateMatrixWorld(),q.push(j.localToWorld(new L(0,(G.t==="cab"?(G.y0||145)/100:yn)-.05,.06))))});for(let G in ne){let j=ne[G],re=j.userData.st;re.t=re.c=me||ae.has(String(G))?1:0,Ue(j)}if(!t&&!Is){let G=Object.keys(ne),j=Object.keys(E),re=performance.now(),he=G.filter(Ne=>!E[Ne]),We=j.filter(Ne=>!ne[Ne]),Re=he.filter(Ne=>We.some(nt=>E[nt].p.distanceTo(ne[Ne].position)<.01&&E[nt].g.userData.wcm===ne[Ne].userData.wcm));if(Re.length){let Ne=new Set(Re);We=We.filter(nt=>!Re.some(He=>E[nt].p.distanceTo(ne[He].position)<.01)),he=he.filter(nt=>!Ne.has(nt))}j.length&&he.length<=3&&We.length<=3&&he.length<Math.max(2,G.length/2)&&(he.forEach((Ne,nt)=>{let He=ne[Ne],Ye=He.position.clone(),Ve=He.rotation.y,Xe=He.userData.hb?He.userData.hb[3]:.5,tt=Ye.clone().add(new L(Math.sin(Ve)*.55,.18,Math.cos(Ve)*.55));He.position.copy(tt),He.scale.setScalar(.88),pe.push({kind:"in",g:He,p0:tt,p1:Ye,yc:Xe,s:re+nt*70,d:620})}),G.forEach(Ne=>{let nt=E[Ne];if(!nt)return;let He=ne[Ne];if(Math.abs(nt.ry-He.rotation.y)>.01||nt.p.distanceTo(He.position)<.002||nt.p.distanceTo(He.position)>3)return;let Ye=He.position.clone();He.position.copy(nt.p),pe.push({kind:"mv",g:He,p0:nt.p.clone(),p1:Ye,yc:0,s:re,d:460})}),We.forEach(Ne=>{let nt=E[Ne].g;nt&&(ce.add(nt),pe.push({kind:"out",g:nt,y0:nt.position.y,yc:nt.userData.hb?nt.userData.hb[3]:.5,s:re,d:420}))}))}if(_e!=null&&ne[_e]?ot(ne[_e]):_e=null,U==="abend"){let G=new Un("#ffe2c0",26,0,2);G.position.set(F/2,2.5,H/2+.3),z.add(G);let j=new Un("#ffcf96",10,0,2);if(j.position.set(F/2,1.9,H-.4),z.add(j),q.slice(0,10).forEach(re=>{let he=new Un("#ffe4b8",3.2,1.8,2);he.position.copy(re),z.add(he)}),h.items.some(re=>re.t==="in")){let re=h.items.find(We=>We.t==="in"),he=new Un("#ffd09a",2.5,2.5,2);he.position.set(re.x/100,1.7,re.z/100),z.add(he)}}N();let oe=M.w+"x"+M.d;te={w:F,d:H},t?v.position.set(F/2+1.2,6,H/2+4):v.position.set(F/2-3,7,H/2+5),v.target.position.set(F/2,0,H/2);let ge=Math.max(F,H)/2+1.5;Object.assign(v.shadow.camera,{left:-ge,right:ge,top:ge,bottom:-ge}),v.shadow.camera.updateProjectionMatrix(),oe!==Y&&(Y=oe,o&&(o.target.set(F/2,.9,H/2),Ze("perspektive"))),f()}function Ze(h,_){if(u=h,!o)return;let M=te.w,x=te.d,S={x:M/2,z:x/2},E=Math.max(M,x)*(a.aspect<1?1.75:a.aspect<1.3?1.3:1.05),F={perspektive:[S.x+E*.42,1.5+E*.55,S.z+E*1],front:[S.x,1.6,S.z+E*.95+.8],top:[S.x,E*1.45+2,S.z+.01],ecke:[S.x-E*.5,1.6+E*.45,S.z+E*.95],augen:[S.x,1.62,x-.35]}[h];if(!F){f();return}let H=h==="augen"?new L(S.x,1.25,.3):new L(M/2,.9,x/2),B=new L(...F);if(l=!1,_&&!Is&&a.position.distanceTo(B)>.05){g={p0:a.position.clone(),p1:B,t0:o.target.clone(),t1:H,s:performance.now(),d:850},f();return}g=null,l=!1,a.position.copy(B),o.target.copy(H),o.update(),f()}function ft(h){let _=g,M=Math.min(1,(h-_.s)/_.d),x=Ha(M);return a.position.lerpVectors(_.p0,_.p1,x),a.position.y+=Math.sin(Math.PI*x)*.35*Math.min(1,_.p0.distanceTo(_.p1)/3),o.target.lerpVectors(_.t0,_.t1,x),o.update(),M>=1&&(g=null),!0}function pt(){let h=i.clientWidth,_=i.clientHeight;!h||!_||(n.setSize(h,_,!1),n.domElement.style.width=h+"px",n.domElement.style.height=_+"px",a.aspect=h/_,a.updateProjectionMatrix(),!c&&Y&&o&&Ze(u),f())}pt();let At=new ResizeObserver(pt);At.observe(i);let Lt=!0,gt=new IntersectionObserver(([h])=>{Lt=h.isIntersecting,Lt&&f()});gt.observe(i);let Ct=!1,Jt=0;function pi(h,_){let M=h.userData.st;M.anims.length&&(M.t=_?1:0,Is?(M.c=M.t,Ue(h),f()):Ct=!0,f())}function no(h){let _=Math.min(.08,(h-(Jt||h))/1e3);Jt=h;let M=!1;for(let x in ne){let S=ne[x],E=S.userData.st;E.c===E.t||!E.anims.length||(M=!0,!(E.go&&h<E.go)&&(E.go=0,E.c<=0&&E.t===1?E.ez=1:E.c>=1&&E.t===0&&(E.ez=0),E.c=E.t>E.c?Math.min(E.t,E.c+_/.65):Math.max(E.t,E.c-_/.55),Ue(S)))}return M||(Ct=!1,Jt=0),M}let Mn=new Wr,Zn=new we;function mi(h){for(let _=h;_;_=_.parent)if(!_.visible)return!1;return!0}function es(h,_){if(!z)return null;let M=n.domElement.getBoundingClientRect();Zn.set((h-M.left)/M.width*2-1,-(_-M.top)/M.height*2+1),Mn.setFromCamera(Zn,a);let x=Mn.intersectObject(z,!0);for(let S of x)if(!(!mi(S.object)&&!(S.object.material&&S.object.material.visible===!1))){for(let E=S.object;E&&E!==z;E=E.parent){if(E.userData&&E.userData.eq&&e.onEq)return{isEq:1,eq:E.userData.eq};if(E.userData&&E.userData.st)return E}if(!(S.object.isMesh&&S.object.material&&S.object.material.isShadowMaterial))return null}return null}let Tt=null,io={sp:"Sp\xFCle \xB7 antippen f\xFCr Becken & Armatur",kf:"Kochfeld \xB7 antippen f\xFCr Breite & Abzug",dh:"Dunstabzug \xB7 antippen f\xFCr die Bauform",bs:"K\xFCchenr\xFCckwand \xB7 antippen f\xFCr Material & Motiv",isl:"Kochinsel \xB7 antippen f\xFCr Kochfeld & Abzug"};if(!t){Tt=document.createElement("div"),Tt.setAttribute("aria-hidden","true"),Tt.style.cssText="position:absolute;z-index:3;pointer-events:none;padding:6px 10px;border-radius:10px;background:rgba(24,22,20,.86);color:#fff;font:600 12px/1.3 system-ui,sans-serif;white-space:nowrap;opacity:0;transition:opacity .15s;transform:translate(-50%,-130%)",getComputedStyle(i).position==="static"&&(i.style.position="relative"),i.appendChild(Tt);let h=null,_=0;n.domElement.addEventListener("pointerdown",E=>{h={x:E.clientX,y:E.clientY,t:performance.now()}});let M=0,x=(E,F)=>{let H=E.userData,B=H.st.anims.length;return(H.label||"")+(H.wcm?" \xB7 "+H.wcm+" cm":"")+(B?F?H.st.t>.5?" \xB7 \xF6ffnet":" \xB7 schlie\xDFt":H.st.t>.5?" \xB7 klicken zum Schlie\xDFen":" \xB7 klicken zum \xD6ffnen":"")},S=(E,F,H,B)=>{let W=i.getBoundingClientRect();Tt.textContent=x(E,B),Tt.style.left=Math.max(70,Math.min(W.width-70,F-W.left))+"px",Tt.style.top=Math.max(40,H-W.top)+"px",Tt.style.opacity=1};n.domElement.addEventListener("pointerup",E=>{if(!h)return;let F=Math.hypot(E.clientX-h.x,E.clientY-h.y),H=performance.now()-h.t;if(h=null,F>6||H>600)return;let B=es(E.clientX,E.clientY);if(!B)return;if(B.isEq){Tt.style.opacity=0,e.onEq(B.eq,E.clientX,E.clientY);return}if(E.pointerType!=="mouse"&&B.userData.label&&(S(B,E.clientX,E.clientY,!0),clearTimeout(M),M=setTimeout(()=>{Tt.style.opacity=0,_e===String(B.userData.pid)&&(at(null),e.onHover&&e.onHover(null))},1400),at(B.userData.pid),e.onHover&&e.onHover(B.userData.pid)),!B.userData.st.anims.length)return;let W=String(B.userData.pid),K=!(B.userData.st.t>.5);if(K?ae.add(W):ae.delete(W),!K&&me){me=!1;for(let q in ne)q!==W&&ne[q].userData.st.t>.5&&ae.add(q)}B.userData.st.go=0,pi(B,K),e.onPick&&e.onPick(B.userData.pid,K),E.pointerType==="mouse"&&S(B,E.clientX,E.clientY)}),n.domElement.addEventListener("pointermove",E=>{if(E.pointerType!=="mouse"||E.buttons){Tt.style.opacity=0;return}let F=performance.now();if(F-_<60)return;_=F;let H=es(E.clientX,E.clientY),B=H&&H.isEq?null:H;if(H&&H.isEq){let K=i.getBoundingClientRect();Tt.textContent=io[H.eq.k]||"",Tt.style.left=Math.max(70,Math.min(K.width-70,E.clientX-K.left))+"px",Tt.style.top=Math.max(40,E.clientY-K.top)+"px",Tt.style.opacity=1,n.domElement.style.cursor="pointer"}else B&&B.userData.label?(S(B,E.clientX,E.clientY),n.domElement.style.cursor=B.userData.st.anims.length?"pointer":""):(Tt.style.opacity=0,n.domElement.style.cursor="");let W=B?String(B.userData.pid):null;W!==_e&&(at(W),e.onHover&&e.onHover(W))}),n.domElement.addEventListener("pointerleave",()=>{Tt.style.opacity=0,_e!=null&&(at(null),e.onHover&&e.onHover(null))})}function Ls(h){if(y=0,m||p||!Lt||!i.clientWidth)return;let _=!1;if(g&&ft(h)&&(_=!0),o&&!l&&o.update()&&(_=!0),Ct&&no(h)&&(_=!0),pe.length&&lt(h)&&(_=!0),_&&(d=!0),d){d=!1,_=!0;for(let M in de){let x=de[M].userData;de[M].visible=(a.position.x-x.p.x)*x.n[0]+(a.position.z-x.p.z)*x.n[1]>0}n.render(s,a)}_?b=0:b++,b<24&&!y&&(y=requestAnimationFrame(Ls))}w();let Ds={set:je,view:h=>{c=!1,Ze(h,!0)},mood:(h,_)=>{U=h,_?je(_):N()},snapshot:()=>(n.render(s,a),n.domElement.toDataURL("image/jpeg",.9)),toggle:(h,_)=>{let M=ne[h];if(!M||!M.userData.st.anims.length)return!1;let x=_==null?!(M.userData.st.t>.5):!!_;return x?ae.add(String(h)):ae.delete(String(h)),M.userData.st.go=0,pi(M,x),x},openAll:h=>{me=!!h,h||ae.clear();let _=new L,M=Object.values(ne).filter(E=>E.userData.st.anims.length).map(E=>(E.getWorldPosition(_),_.project(a),[_.x,E])).sort((E,F)=>me?E[0]-F[0]:F[0]-E[0]),x=Math.min(.085,1.5/Math.max(1,M.length)),S=performance.now();return M.forEach(([,E],F)=>{let H=E.userData.st;H.go=Is||(me?H.c>.99:H.c<.01)?0:S+F*x*1e3,pi(E,me)}),me},highlight:h=>{t||at(h)},focus:h=>{let _=ne[String(h)];if(!_||!o)return!1;let M=_.userData.hb||[.6,.8,.6,.45],x=_.rotation.y,S=new L(Math.sin(x),0,Math.cos(x)),E=new L(Math.cos(x),0,-Math.sin(x)),F=_.localToWorld(new L(0,M[3],0)).addScaledVector(S,M[3]<.7?.22:.1),H=Math.max(1.9,M[1]*1.1+M[0]*.9)*(a.aspect<1?1.5:1),B=F.clone().addScaledVector(S,H).addScaledVector(E,H*.34);return B.y=Math.max(1.35,F.y+(M[3]<.7?1:.2)),c=!0,Is?(a.position.copy(B),o.target.copy(F),o.update(),f(),!0):(g={p0:a.position.clone(),p1:B,t0:o.target.clone(),t1:F,s:performance.now(),d:900},f(),!0)},isAllOpen:()=>me,pause:h=>{p=!!h,h||f()},busy:()=>!!(y||Ct||pe.length||g),camera:a,rig:Z,setPhoto:({pos:h,quat:_,fov:M})=>{h&&a.position.set(h[0],h[1],h[2]),_&&a.quaternion.set(_[0],_[1],_[2],_[3]),M&&(a.fov=M),a.updateProjectionMatrix(),a.updateMatrixWorld(),f()},lookAt:(h,_,M)=>{g=null,l=!0,a.position.set(h[0],h[1],h[2]),a.up.set(0,1,0),o&&o.target.set(_[0],_[1],_[2]),a.lookAt(_[0],_[1],_[2]),M&&(a.fov=M),a.updateProjectionMatrix(),a.updateMatrixWorld(),f()},setRig:({x:h=0,z:_=0,ry:M=0,s:x=1,cx:S=0,cz:E=0})=>{Z.position.set(S+h,0,E+_),Z.rotation.y=M,Z.scale.setScalar(x),ce.position.set(-S,0,-E),f()},floorAt:(h,_)=>{Zn.set(h,_),Mn.setFromCamera(Zn,a);let M=new L;return Mn.ray.intersectPlane(new Qt(new L(0,1,0),0),M)?{x:M.x,z:M.z}:null},exposure:h=>{Q=h,n.toneMappingExposure=h,f()},render:()=>{n.render(s,a)},capture:(h,_)=>{let M=n.getPixelRatio(),x=i.clientWidth,S=i.clientHeight;n.setPixelRatio(1),n.setSize(h,_,!1),a.aspect=h/_,a.updateProjectionMatrix(),n.render(s,a);let E=document.createElement("canvas");return E.width=h,E.height=_,E.getContext("2d").drawImage(n.domElement,0,0,h,_),n.setPixelRatio(M),n.setSize(x,S,!1),n.domElement.style.width=x+"px",n.domElement.style.height=S+"px",a.aspect=x/S,a.updateProjectionMatrix(),f(),E},renderHQ:(h=1600,_=1e3,M={})=>{let x=M.lite?1.25:Math.max(1,Math.min(2,4096/Math.max(h,_))),S=v.shadow.mapSize.x,E=W=>{v.shadow.mapSize.set(W,W),v.shadow.map&&(v.shadow.map.dispose(),v.shadow.map=null)};E(M.lite?2048:4096);let F;try{F=Ds.capture(Math.round(h*x),Math.round(_*x))}finally{E(S)}let H=document.createElement("canvas");H.width=h,H.height=_;let B=H.getContext("2d");return B.imageSmoothingEnabled=!0,B.imageSmoothingQuality="high",B.drawImage(F,0,0,h,_),f(),H},deko:(h,_={})=>{if(xe&&xe.parent&&xe.parent.remove(xe),xe=null,!h||!z||!Pe){f();return}let M=E=>{let F=new qe({color:E.color||"#ffffff",roughness:E.roughness??.5,metalness:E.metalness||0});return E.transmission&&(F.transparent=!0,F.opacity=.32,F.depthWrite=!1),E.emissive&&(F.emissive=E.emissive,F.emissiveIntensity=Math.min(1.5,E.emissiveIntensity||0)),E.side&&(F.side=E.side),F},x={eiche:"#b98a5c",nuss:"#76553b"},S=E=>new qe({color:x[E]||"#b98a5c",roughness:.7});try{a.updateMatrixWorld(),xe=ih({P:M,texMat:S,plan:h,room:{W:Pe.room.w/100,D:Pe.room.d/100,H:2.6},night:U==="abend",cam:a,noPendant:!1,lite:!!_.lite})}catch{xe=null}xe&&(xe.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),z.add(xe)),f()},_rt:()=>({scene:s,cam:a,group:z,wallGroups:de,M:ee.m,state:Pe,room:te,mood:U,H:2.6,renderer:n}),camInfo:()=>({pos:a.position.toArray(),target:o?o.target.toArray():a.getWorldDirection(new L).add(a.position).toArray(),fov:a.fov,aspect:a.aspect}),dispose:()=>{m=!0,At.disconnect(),gt.disconnect(),o&&o.dispose(),n.dispose();try{n.forceContextLoss()}catch{}n.domElement.remove(),Tt&&Tt.remove()}};return Ds}window.PelPlanner3D=window.PelPlanner3D||$0;})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
