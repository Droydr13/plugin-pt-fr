var __metodos = [
  ["gowaru", (function () {
var module = { exports: {} };
var exports = module.exports;
/**
 * nakios - Built from src/nakios/
 * Generated: 2026-09-21T23:55:31.918931877Z
 */
var __provider=(()=>{var Te=Object.defineProperty,xe=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var ee=(e,t,n)=>t in e?Te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||(t={}))te.call(t,n)&&ee(e,n,t[n]);if(V)for(var n of V(t))ne.call(t,n)&&ee(e,n,t[n]);return e},R=(e,t)=>xe(e,ke(t));var De=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,n)=>(typeof require!="undefined"?require:t)[n]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var re=(e,t)=>{var n={};for(var r in e)te.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&V)for(var r of V(e))t.indexOf(r)<0&&ne.call(e,r)&&(n[r]=e[r]);return n};var H=(e,t)=>()=>(e&&(t=e(e=0)),t);var Ue=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var y=(e,t,n)=>new Promise((r,s)=>{var i=p=>{try{u(n.next(p))}catch(f){s(f)}},c=p=>{try{u(n.throw(p))}catch(f){s(f)}},u=p=>p.done?r(p.value):Promise.resolve(p.value).then(i,c);u((n=n.apply(e,t)).next())});function Le(e){let t=Date.now()+e;return new Promise(n=>{let r=()=>Date.now()>=t?n():Promise.resolve().then(r);r()})}function Fe(e=1e3,t=.3){let n=new Map;return function(s){return y(this,null,function*(){let i=Date.now(),c=n.get(s)||0,u=i-c,p=e*t*(Math.random()*2-1),f=Math.max(0,e+p-u);f>0&&(yield Le(f)),n.set(s,Date.now())})}}function ae(e=200,t=.4){return Fe(e,t)}function ce(e,t,n={}){let r=M(`NUVIO_TIMEOUT_${e.toUpperCase().replace(/[^a-z0-9]/g,"_")}`,n.timeout||45e3),s=n.quality||{includeCodec:!0,includeFps:!1},i=n.maxStreams||80;return function(l,o,m,S){return y(this,arguments,function*(u,p,f,d,a={}){let v=p==="movie"?"":` S${f}E${d}`,g=`${e} ${p} ${u}${v}`,w=a&&a.signal?a.signal:null,{signal:$}=Oe(w);if(U($))return[];let D=Date.now();console.log(`[${e}] Request: ${g} (build ${Me})`);try{let h=yield ue(t(u,p,f,d,{signal:$}),r,g),E=Array.isArray(h)?h:[],x=new Set,L=[];for(let C of E){if(!C)continue;let T=C.url;if(typeof T=="string"){if(!T||T.includes("[object"))continue;let O=`${T}|${String(C.language||"").toUpperCase()}`;if(x.has(O))continue;x.add(O)}L.push(C)}let F=L.slice(0,i*2),k=yield tt(F,s),J=Date.now()-D;return console.log(`[${e}] Done: ${k.length} streams in ${J}ms`),k.slice(0,i)}catch(h){return h&&h.message&&h.message.includes("[Timeout]")?console.warn(`[${e}] ${h.message}`):h&&h.name==="AbortError"?console.warn(`[${e}] Request aborted: ${g}`):console.error(`[${e}] Error:`,h&&h.message||h),[]}})}}function Oe(e){let t=le(),n=t?t.signal:e;if(t&&e&&!e.aborted)try{typeof e.addEventListener=="function"&&e.addEventListener("abort",function(){try{t.abort()}catch(r){}})}catch(r){}return{signal:n,controller:t}}function Ie(e){if(!e||e<=0)return null;let t=e/(1024*1024*1024);if(t>=1)return`${Math.round(t*10)/10} GB`;let n=e/(1024*1024);if(n>=1)return`${Math.round(n*10)/10} MB`;let r=e/1024;return`${Math.round(r)} KB`}function He(n){return y(this,arguments,function*(e,t={}){if(!e)return null;try{let r=yield N(e,{method:"HEAD",headers:t,timeout:5e3});if(!r||!r.ok)return null;let s=r.headers["content-length"];return s?Ie(Number(s)):null}catch(r){return null}})}function le(){try{if(typeof AbortController!="undefined")return new AbortController}catch(e){}return null}function U(e){return e&&(typeof e.aborted=="boolean"?e.aborted:!1)}function M(e,t){try{if(typeof process!="undefined"&&process.env&&process.env[e]){let n=parseInt(process.env[e],10);return isNaN(n)?t:n}}catch(n){}return t}function ue(e,t,n="Operation"){return y(this,null,function*(){if(!t||t<=0||typeof setTimeout=="undefined")return e;let r,s=new Promise((i,c)=>{r=setTimeout(()=>c(new Error(`[Timeout] ${n} exceeded ${t}ms`)),t)});try{return yield Promise.race([e,s])}finally{clearTimeout(r)}})}function Pe(e){if(!e||typeof e!="string")return!0;let t=e.toLowerCase();return t.includes("test-videos.co.uk")||t.includes("big_buck_bunny")||t.includes("bigbuckbunny")||t.includes("sample-videos.com")||t.includes("example.com")||t.includes("localhost")||t.includes("/troll/master.m3u8")}function fe(e){if(!Number.isFinite(e)||e<=0)return j;let t=z[0],n=Math.abs(e-t);for(let r of z){let s=Math.abs(e-r);s<n&&(n=s,t=r)}return t}function b(e){let t=String(e||"").trim().toLowerCase();if(!t)return`${j}p`;if(t==="4k"||t==="uhd"||t.includes("2160"))return"2160p";if(t.includes("fhd")||t.includes("fullhd")||t.includes("1080"))return"1080p";if(t.includes("hd")||t.includes("720"))return"720p";let n=t.match(/(\d{3,4})\s*p?/i);return n?`${fe(Number(n[1]))}p`:`${j}p`}function qe(e){if(!e||typeof e!="string")return{video:null,audio:null};let t=e.split(",").map(s=>s.trim()),n=null,r=null;for(let s of t){let i=s.split(".")[0].toLowerCase(),c=Be[i];c&&(["H.264","H.265","AV1","VP9"].includes(c)?n||(n={codec:c,raw:s}):["AAC","AC3","EAC3","Opus"].includes(c)&&(r||(r={codec:c,raw:s})))}return{video:n,audio:r}}function ze(e){let t=de.get(e);return t&&Date.now()-t.ts<Ve?t.data:null}function je(e,t){de.set(e,{data:t,ts:Date.now()})}function Je(e){let t=P.get(e);return t&&Date.now()-t.ts<We?t.data:null}function Ke(e,t){if(P.size>=300){let n=Math.ceil(60),r=[...P.entries()].sort((s,i)=>s[1].ts-i[1].ts).slice(0,n);for(let[s]of r)P.delete(s)}P.set(e,{data:t,ts:Date.now()})}function W(e){let n=b(e).toLowerCase().match(/(\d{3,4})p/),r=n?Number(n[1]):j,s=fe(r);return z.length-1-z.indexOf(s)}function Ge(e,t,n,r){let s=[],i=b(t);return i&&!(e||"").includes(i)&&s.push(i),n&&n!=="H.264"&&s.push(n),r&&r>30&&s.push(`${r}fps`),s.length===0?e:`${e} [${s.join(" ")}]`}function K(e){if(!e||typeof e!="string")return null;let t=e.toLowerCase();return t.includes(".m3u8")||t.includes("/hls/")||t.includes("/hls2/")||t.includes("master.m3u8")||t.includes("playlist.m3u8")?"hls":t.includes(".mpd")?"dash":t.includes(".mp4")?"mp4":t.includes(".mkv")?"mkv":t.includes(".webm")?"webm":t.includes(".ts")&&!t.includes("test")&&!t.includes("textures")?"hls":null}function Xe(e){let t=b(e.quality||"HD"),n=[t];if(e.codec){let r=String(e.codec).toUpperCase();r&&!t.toUpperCase().includes(r)&&n.push(r)}if(e.audioCodec){let r=String(e.audioCodec).toUpperCase();r&&!n.some(s=>s.toUpperCase()===r)&&n.push(r)}return n.join(" ")}function Ye(e,t){if(!e)return e;let n=[];return t.codec&&n.push(String(t.codec).toUpperCase()),t.audioCodec&&n.push(String(t.audioCodec).toUpperCase()),n.length===0?e:`${e} ${n.join(" ")}`}function X(e){if(!e)return null;let t=String(e).trim().toUpperCase();return t?oe[t]?oe[t]:t.toLowerCase():null}function ie(e){if(e.language)return e.language;let n=(e.name||"").match(/\((\w+)\)/);if(n){let r=n[1].toUpperCase();if(["VF","VOSTFR","VO","VOSTF","VOA","VOST"].includes(r))return r}return null}function Qe(n){return y(this,arguments,function*(e,t={}){var m,S,v,g,w,$,D;if(!e||!e.url||typeof e.url!="string")return[];let r=e.url,s=r.toLowerCase();if(!s.includes(".m3u8")&&!s.includes("/hls/"))return[R(_({},e),{quality:b(e.quality||"HD"),type:K(r)})];let i=r;if(!t.forceRefresh){let h=ze(i);if(h)return h}let c=null;try{c=yield ue(N(r,{headers:e.headers||{},timeout:t.manifestTimeout||12e3}),t.manifestTimeout||12e3,"manifest-parse")}catch(h){c=null}if(!c)return[R(_({},e),{quality:b(e.quality||"HD"),type:"hls"})];let u=yield c.text();if(!/#EXT-X-STREAM-INF/i.test(u))return[R(_({},e),{quality:b(e.quality||"HD"),type:"hls"})];let p=u.split(/\r?\n/).map(h=>h.trim()).filter(Boolean),f=[];for(let h=0;h<p.length;h++){let E=p[h];if(!E.startsWith("#EXT-X-STREAM-INF:"))continue;let x=p[h+1];if(!x||x.startsWith("#"))continue;let L=(m=E.match(/RESOLUTION=\d+x(\d+)/i))==null?void 0:m[1],F=(S=E.match(/FRAME-RATE=([0-9.]+)/i))==null?void 0:S[1],k=(v=E.match(/BANDWIDTH=(\d+)/i))==null?void 0:v[1],J=(g=E.match(/CODECS="([^"]+)"/i))==null?void 0:g[1],C=L?`${L}p`:null;if(!C&&k){let I=Number(k);I>=8e6?C="2160p":I>=5e6?C="1080p":I>=25e5?C="720p":I>=12e5?C="480p":C="360p"}!C&&F&&(C=`${b(e.quality||"HD")}`);let T=qe(J),O=F?Math.round(parseFloat(F)):null,Z=x;try{Z=new URL(x,r).toString()}catch(I){}f.push(R(_({},e),{url:Z,quality:b(C||e.quality||"HD"),type:"hls",codec:((w=T.video)==null?void 0:w.codec)||null,audioCodec:(($=T.audio)==null?void 0:$.codec)||null,fps:O,bandwidth:k?parseInt(k):null,title:Ge(e.title||e.name||"Stream",C||e.quality||"HD",t.includeCodec!==!1?(D=T.video)==null?void 0:D.codec:null,t.includeFps!==!1?O:null)}))}if(f.length===0)return[R(_({},e),{quality:b(e.quality||"HD"),type:"hls"})];let d=[],a=new Set;for(let h of f)a.has(h.url)||(a.add(h.url),d.push(h));d.sort((h,E)=>W(E.quality)-W(h.quality));let l=t.maxVariants||d.length,o=d.slice(0,l);return je(i,o),o})}function Ze(e,t){if(!t||!e.length)return e;let n=t.toUpperCase();return e.some(s=>{var i;return((i=s.codec)==null?void 0:i.toUpperCase())===n})?e.filter(s=>{var i;return((i=s.codec)==null?void 0:i.toUpperCase())===n}):e}function et(e){return[...e].sort((t,n)=>{let r=W(n.quality)-W(t.quality);if(r!==0)return r;if(t.codec&&n.codec){let s=i=>se.indexOf(i)>=0?se.indexOf(i):99;return s(t.codec)-s(n.codec)}return 0})}function tt(n){return y(this,arguments,function*(e,t={}){let r=Array.isArray(e)?e:[],s=[],i=yield Promise.allSettled(r.map(a=>Qe(a,t)));for(let a=0;a<i.length;a++){let l=i[a],o=r[a];if(l.status==="fulfilled")for(let m of l.value)s.push(m);else o&&s.push(R(_({},o),{quality:b(o.quality||"HD"),type:K(o.url)}))}let c=[],u=new Set;for(let a of s){if(!(a!=null&&a.url)||Pe(a.url))continue;let l=a.language||ie(a)||"",o=`${a.url}|${String(l).toUpperCase()}`;u.has(o)||(u.add(o),c.push(a))}let p=et(c);p=p.map(a=>{let l=ie(a)||a.language||null,o=X(l),m=a.title||a.name,S=a.title;l&&o&&m&&String(l).toUpperCase()!==o.toUpperCase()&&!m.toUpperCase().includes(String(l).toUpperCase())&&(S=`${m} [${String(l).toUpperCase()}]`);let v=Xe(a);return R(_(_(_({},a),S!==a.title?{title:S}:{}),v!==a.quality?{quality:v}:{}),{type:a.type||K(a.url),language:o})});let f=/\.(mp4|mkv|webm)(\?.*)?$/i,d=p.filter(a=>!a.size&&a.url&&f.test(a.url)).slice(0,5);if(d.length>0){let a=yield Promise.allSettled(d.map(l=>He(l.url,l.headers)));for(let l=0;l<d.length;l++){let o=a[l].status==="fulfilled"?a[l].value:null;o&&(d[l].size=Ye(o,d[l]))}}return t.preferredCodec?Ze(p,t.preferredCodec):p})}function N(n){return y(this,arguments,function*(e,t={}){let r=Date.now(),s=15e3,i=(t.method||"GET").toUpperCase(),c="";if(t.headers&&typeof t.headers=="object"){let f=Object.keys(t.headers).sort();f.length&&(c="|"+f.map(d=>`${d.toLowerCase()}=${String(t.headers[d]).slice(0,80)}`).join("&"))}let u=i+"|"+e+c;if(i==="GET"){let f=Je(u);if(f)return{text:()=>Promise.resolve(f.bodyText),json:()=>y(null,null,function*(){try{return JSON.parse(f.bodyText)}catch(d){throw d}}),ok:f.ok,status:f.status,url:f.finalUrl||e,headers:f.headers||{}}}try{let p=t,{timeout:f,signal:d}=p,a=re(p,["timeout","signal"]);if(U(d))return null;let l=R(_({},a),{headers:_(_({},G),a.headers),redirect:"follow"});if(f>0&&typeof AbortSignal!="undefined"&&typeof AbortSignal.timeout!="undefined"){let g=AbortSignal.timeout(f);if(d){let w=le();if(w){l.signal=w.signal;let $=()=>{w.abort()};try{d.addEventListener("abort",$)}catch(D){}try{g.addEventListener("abort",$)}catch(D){}}else l.signal=d}else l.signal=g}else d&&(l.signal=d);let o=yield fetch(e,l),m=Date.now()-r;if(m>s&&console.warn(`[safeFetch] Slow request (${m}ms): ${(e||"").slice(0,120)}`),!o)return null;let S=o.status,v="";try{let g=yield o.text();g&&g.length>1048576?(console.warn(`[safeFetch] Response truncated (${g.length} bytes > 1048576): ${(e||"").slice(0,100)}`),v=g.slice(0,1048576)):v=g||""}catch(g){v=""}return i==="GET"&&S>=200&&S<300&&Ke(u,{bodyText:v,ok:!0,status:S,finalUrl:o.url,headers:o.headers}),{text:()=>Promise.resolve(v),json:()=>y(null,null,function*(){try{return JSON.parse(v)}catch(g){throw g}}),ok:o.ok,status:S,url:o.url,headers:o.headers}}catch(f){let d=Date.now()-r;return d>s&&console.warn(`[safeFetch] Slow request failed (${d}ms): ${(e||"").slice(0,120)}`),null}})}var Me,yt,Ne,G,gt,wt,se,z,j,Be,de,Ve,We,P,oe,B=H(()=>{Me="214f32aa",yt=typeof crypto!="undefined"&&typeof crypto.subtle!="undefined"&&typeof TextEncoder!="undefined"&&typeof TextDecoder!="undefined",Ne=null;try{Ne=De("crypto")}catch(e){}G={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36"},gt=G["User-Agent"],wt=_({},G);se=["AV1","H.265","H.264","VP9"];z=[2160,1080,720,480,360,240],j=720;Be={avc1:"H.264",h264:"H.264",hev1:"H.265",hvc1:"H.265",h265:"H.265",av01:"AV1",av1:"AV1",vp9:"VP9",vp09:"VP9",mp4a:"AAC","ac-3":"AC3","ec-3":"EAC3",opus:"Opus"};de=new Map,Ve=12e4;We=3e5,P=new Map;oe={VF:"fr",VFQ:"fr",VFF:"fr",VFI:"fr",VFK:"fr",FRA:"fr",FR:"fr",FRENCH:"fr",FRAN\u00C7AIS:"fr",VOSTFR:"fr",VOSTF:"fr",VOST:"fr",SUBF:"fr",MULTI:"multi",FAN:"multi",EN:"en",ENG:"en",ENGLISH:"en",VOA:"en",VO:"ja",JA:"ja",JP:"ja",JAP:"ja",JAPANESE:"ja",VOSTA:"ja"}});function he(e){pe=e}function Y(n){return y(this,arguments,function*(e,t={}){let r=t.signal||pe;if(U(r))return null;let s=`${st}${e}`;yield nt(rt),console.log(`[Nakios] API: ${s}`);let i=_(_({},it),t.headers||{}),c=yield N(s,{headers:i,timeout:t.timeout||ot,signal:r});if(!c||!c.ok){let u=c&&typeof c.status=="number"?c.status:"no-response";return console.warn(`[Nakios] HTTP ${u} for ${s}`),null}try{return yield c.json()}catch(u){return console.warn(`[Nakios] JSON parse error for ${s}: ${u==null?void 0:u.message}`),null}})}var nt,pe,rt,q,st,ot,it,me=H(()=>{B();nt=ae(),pe=null;rt="api.nakios.store",q=M("NUVIO_NAKIOS_SITE_URL","https://nakios.cyou"),st=M("NUVIO_NAKIOS_API_URL","https://api.nakios.store"),ot=15e3,it={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36",Accept:"application/json, text/plain, */*","Accept-Language":"fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",Referer:`${q}/`,Origin:q}});function at(e){let t=Date.now(),n=[];for(let[r,s]of A)t-s.ts>=s.ttl&&n.push(r);for(let r of n)A.delete(r);if(A.size>150){let s=[...A.entries()].sort((i,c)=>i[1].ts-c[1].ts).slice(0,A.size-150);for(let[i]of s)A.delete(i)}n.length>0&&console.log(`[${e}] Cache: ${n.length} expir\xE9es supprim\xE9es, ${A.size} entr\xE9es restantes`),ye=t}function ge(e,t,n={}){let r=t||e.toUpperCase(),s=`${e}_`,i=n.successTtl||3e5,c=n.failureTtl||3e4,u=n.maxSize||150;function p(a){return`${s}${String(a).replace(/[^a-zA-Z0-9]/g,"_").replace(/_+/g,"_").replace(/^_|_$/g,"")}`}function f(a){let l=A.get(a);if(!l)return;if(Date.now()-l.ts>=l.ttl){A.delete(a);return}return l.data}function d(a,l,o=!0){if(Date.now()-ye>6e4&&at(r),A.size>=u){let m=Math.ceil(u*.2),S=[...A.entries()].sort((v,g)=>v[1].ts-g[1].ts).slice(0,m);for(let[v]of S)A.delete(v)}A.set(a,{data:l,ts:Date.now(),ttl:o?i:c,success:o})}return function(S,v){return y(this,arguments,function*(l,o,m={}){let g=p(l);if(!m.bypass){let w=f(g);if(w!==void 0)return console.log(`[${r}] Cache HIT: ${l.slice(0,60)}`),w}console.log(`[${r}] Cache MISS: ${l.slice(0,60)}`);try{let w=yield o(),$=w!=null;return d(g,w,$),$||console.log(`[${r}] Cache: negative result cached (30s TTL)`),w}catch(w){throw console.warn(`[${r}] Cache: error, not caching: ${w==null?void 0:w.message}`),w}})}}var A,ye,we=H(()=>{A=new Map,ye=Date.now()});function ve(e,t){return y(this,null,function*(){let r=`${lt}/${t==="tv"?"tv":"movie"}/${e}?api_key=${ct}&language=fr-FR`;try{let s=yield N(r);if(!s||!s.ok)return{title:null,year:null};let i=yield s.json();if(!i||i.success===!1)return{title:null,year:null};let c=i.title||i.name||null,u=parseInt((i.release_date||i.first_air_date||"").slice(0,4),10)||null;return c&&console.log(`[SearchFallback] TMDB title: ${c} (${u||"?"}) (${e})`),{title:c,year:u}}catch(s){return console.warn(`[SearchFallback] TMDB title error for ${e}: ${s==null?void 0:s.message}`),{title:null,year:null}}})}var ct,lt,Se=H(()=>{B();ct="8265bd1679663a7ea12ac168da84d2e8",lt="https://api.themoviedb.org/3"});function Q(e){if(!e||typeof e!="string")return!1;let t=e.toLowerCase().trim();if(!t.startsWith("https://"))return!1;for(let n of ft)if(t.includes(n))return console.log(`[Nakios] Filtered out blocked URL (${n}): ${t.slice(0,80)}`),!1;return!0}function $e(e){return y(this,null,function*(){return Ae(`source_${e}`,()=>y(null,null,function*(){let t=yield Y(e);if(!t)return null;if(t.sources&&Array.isArray(t.sources)&&t.sources.length>0){for(let n of t.sources)if(n.url&&Q(n.url)&&n.isPremium!==!0)return n;if(ut)return console.log("[Nakios] Premium sources excluded (NUVIO_NAKIOS_EXCLUDE_PREMIUM=1)"),null;for(let n of t.sources)if(n.url&&Q(n.url))return console.log(`[Nakios] Using premium source (${n.name||"?"}) - no free source available`),n;return console.warn(`[Nakios] All ${t.sources.length} source(s) filtered out (invalid URLs)`),null}return t.url?Q(t.url)?t:(console.warn(`[Nakios] Source filtered out (invalid URL): ${(t.url||"").slice(0,80)}`),null):null}))})}function _e(e){return y(this,null,function*(){let t=`/api/search/multi?query=${encodeURIComponent(e)}`;return Ae(`search_${e.toLowerCase().replace(/[^a-z0-9]+/g,"_")}`,()=>y(null,null,function*(){try{let n=yield Y(t);return!n||!n.results||!Array.isArray(n.results)?[]:n.results.filter(r=>r.media_type==="movie"||r.media_type==="tv").map(r=>({id:r.id,media_type:r.media_type,title:r.title||r.name||"",year:(r.release_date||r.first_air_date||"").slice(0,4)}))}catch(n){return console.warn(`[Nakios] Search error: ${n==null?void 0:n.message}`),[]}}))})}function dt(e,t,n,r){return y(this,null,function*(){console.log(`[Nakios] Fallback search for ${t} ${e}...`);let s=t==="tv"||t==="series"?"tv":"movie",{title:i,year:c}=yield ve(e,s);if(!i)return console.warn(`[Nakios] Fallback: cannot get TMDB title for ${e}`),null;let u=yield _e(i);if(u.length===0){let p=i.split(":")[0].trim();if(p!==i){let f=yield _e(p);if(f.length>0)return Ce(f,e,s,n,r,i,c)}return console.warn(`[Nakios] Fallback: no results for "${i}"`),null}return Ce(u,e,s,n,r,i,c)})}function Ce(e,t,n,r,s,i,c){return y(this,null,function*(){console.log(`[Nakios] Fallback: ${e.length} result(s) from search`);let u=n==="tv"||n==="series"?"tv":"movie",p=o=>(o||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g," ").trim(),f=p(i),d=e.filter(o=>o.media_type==="tv"!=(u==="tv")?(console.log(`[Nakios] Fallback: skip ${o.id} (${o.media_type} \u2260 ${u})`),!1):p(o.title)!==f?(console.log(`[Nakios] Fallback: skip ${o.id} (titre "${o.title}" \u2260 "${i}")`),!1):c&&o.year&&Math.abs(parseInt(o.year,10)-c)>1?(console.log(`[Nakios] Fallback: skip ${o.id} (ann\xE9e ${o.year} \u2260 ${c}\xB11)`),!1):!0);if(d.length===0)return console.log("[Nakios] Fallback: aucun r\xE9sultat de m\xEAme type/titre/ann\xE9e \u2014 abandon (\xE9vite le faux-positif)"),null;let l=[...d].sort((o,m)=>o.id===Number(t)?-1:m.id===Number(t)?1:0).filter(o=>o.id!==Number(t)).slice(0,3);for(let o of l){console.log(`[Nakios] Fallback: trying TMDB ${o.id} (${o.title})`);let m;if(o.media_type==="movie")m=`/api/sources/movie/${o.id}`;else if(o.media_type==="tv")m=`/api/sources/tv/${o.id}/${Number(r)||1}/${Number(s)||1}`;else{console.log(`[Nakios] Fallback: skipping ${o.id} (unknown type: ${o.media_type})`);continue}let S=yield $e(m);if(S&&S.url)return console.log(`[Nakios] Fallback SUCCESS: TMDB ${o.id} \u2192 source found!`),S}return console.warn("[Nakios] Fallback: no alternate ID yielded a source"),null})}function pt(e){let t=e.quality||"HD",n=e.lang||e.language||"VF",r=X(n)||"fr",s=e.name||e.provider||"Nakios",c=e.isM3U8===!0?"hls":"mp4",u={name:s,title:`[${n}] ${s} - ${t}`,url:e.url,quality:t,language:r,type:c,headers:{Referer:`${q}/`,Origin:q}};return e.id&&(u.id=e.id),e.isPremium===!0&&(u.isPremium=!0),e.isEmbed===!0&&(u.isEmbed=!0),e.size&&(u.size=e.size),u}function be(i,c,u,p){return y(this,arguments,function*(e,t,n,r,s={}){let f=(s==null?void 0:s.signal)||null;if(U(f))return[];he(f),console.log(`[Nakios] Looking up ${t} ${e}`);let d;if(t==="movie")d=`/api/sources/movie/${e}`;else{let o=Number(n)||1,m=Number(r)||1;d=`/api/sources/tv/${e}/${o}/${m}`,console.log(`[Nakios] Looking for S${o}E${m} (TMDB: ${e})`)}let a=yield $e(d);if((!a||!a.url)&&(console.warn(`[Nakios] No source for ${d}, trying search fallback...`),a=yield dt(e,t,n,r)),!a||!a.url)return console.warn(`[Nakios] No source found for ${t} ${e}`),[];let l=pt(a);return console.log(`[Nakios] Stream: ${l.quality} ${l.type} | ${l.name} | ${l.language}`),[l]})}var Ae,ut,ft,Ee=H(()=>{me();we();Se();B();Ae=ge("nk","Nakios",{failureTtl:12e4}),ut=M("NUVIO_NAKIOS_EXCLUDE_PREMIUM",0)===1,ft=["t.me","telegram.me","telegram.org","cheksum.lol","doubleclick.net","googleadservices.com","googlesyndication.com"]});var ht=Ue((Ot,Re)=>{Ee();B();Re.exports={getStreams:ce("Nakios",be)}});return ht();})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = __provider;
}
if (__provider && __provider.getStreams) {
    if (typeof globalThis !== 'undefined') {
        globalThis.getStreams = __provider.getStreams;
    }
    if (typeof global !== 'undefined') {
        global.getStreams = __provider.getStreams;
    }
    if (typeof self !== 'undefined') {
        self.getStreams = __provider.getStreams;
    }
}
;return module.exports;
})()],
  ["aio", (function () {
var module = { exports: {} };
var exports = module.exports;
var setTimeout = typeof globalThis.setTimeout === "function" ? globalThis.setTimeout : function (fn, ms) {
  if (typeof fn === "function" && (Number(ms) || 0) < 5000) Promise.resolve().then(fn);
  return 0;
};
var clearTimeout = typeof globalThis.clearTimeout === "function" ? globalThis.clearTimeout : function () {};
var TMDB_KEY = "f3d757824f08ea2cff45eb8f47ca3a1e";
var NAKIOS_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";
var DOMAINS_URL = "https://raw.githubusercontent.com/wooodyhood/nuvio-repo/main/domains.json";
var NAKIOS_FALLBACK = "click";
var _cachedEndpoint = null;
function getTmdbMetadata(_0x45dacc, _0x547f97) {
  var _0x2adc87 = "https://api.themoviedb.org/3/" + (_0x547f97 === "tv" ? "tv" : "movie") + "/" + _0x45dacc + "?api_key=" + TMDB_KEY + "&language=en-US";
  return fetch(_0x2adc87).then(function (_0x51291e) {
    return _0x51291e.json();
  }).then(function (_0x32fcd0) {
    var _0x308a6b = _0x32fcd0.title || _0x32fcd0.name || "Nakios";
    var _0x2a2412 = _0x32fcd0.release_date || _0x32fcd0.first_air_date || "";
    var _0x230dee = _0x2a2412 ? _0x2a2412.split("-")[0] : "";
    var _0x46fb31 = "";
    if (_0x547f97 === "movie" && _0x32fcd0.runtime) {
      _0x46fb31 = _0x32fcd0.runtime + " min";
    } else if (_0x547f97 === "tv" && _0x32fcd0.episode_run_time && _0x32fcd0.episode_run_time.length > 0) {
      _0x46fb31 = _0x32fcd0.episode_run_time[0] + " min";
    }
    return {
      name: _0x308a6b,
      year: _0x230dee,
      duration: _0x46fb31
    };
  }).catch(function () {
    return {
      name: "Nakios",
      year: "",
      duration: ""
    };
  });
}
function getEpisodeInfo(_0x250583, _0x289e12, _0x2d109d) {
  if (!_0x250583 || !_0x289e12 || !_0x2d109d) {
    return Promise.resolve(null);
  }
  var _0x949365 = "https://api.themoviedb.org/3/tv/" + _0x250583 + "/season/" + _0x289e12 + "/episode/" + _0x2d109d + "?api_key=" + TMDB_KEY + "&language=en-US";
  return fetch(_0x949365).then(function (_0x250aba) {
    return _0x250aba.json();
  }).then(function (_0x568341) {
    return {
      name: _0x568341.name || null,
      duration: _0x568341.runtime ? _0x568341.runtime + " min" : null
    };
  }).catch(function () {
    return null;
  });
}
function buildEndpoint(_0x8995ab) {
  var _0x4322a1 = _0x8995ab.includes("nakios") ? _0x8995ab : "nakios." + _0x8995ab;
  return {
    base: "https://" + _0x4322a1,
    api: "https://api." + _0x4322a1 + "/api",
    referer: "https://" + _0x4322a1 + "/"
  };
}
function detectEndpoint() {
  if (_cachedEndpoint) {
    return Promise.resolve(_cachedEndpoint);
  }
  return fetch(DOMAINS_URL).then(function (_0xeaa3fb) {
    if (_0xeaa3fb.ok) {
      return _0xeaa3fb.json();
    } else {
      return Promise.reject();
    }
  }).then(function (_0x4a6009) {
    _cachedEndpoint = buildEndpoint(_0x4a6009.nakios || NAKIOS_FALLBACK);
    return _cachedEndpoint;
  }).catch(function () {
    _cachedEndpoint = buildEndpoint(NAKIOS_FALLBACK);
    return _cachedEndpoint;
  });
}
function extractOrigin(_0x4aa458) {
  var _0x4e98d4 = _0x4aa458.match(/^(https?:\/\/[^\/]+)/);
  if (_0x4e98d4) {
    return _0x4e98d4[1];
  } else {
    return null;
  }
}
function resolveSource(_0x11af07, _0x5ed86c) {
  var _0x224c51 = _0x11af07.url || "";
  if (_0x224c51.startsWith("http")) {
    return {
      url: _0x224c51,
      format: _0x11af07.isM3U8 || _0x224c51.indexOf(".m3u8") !== -1 ? "m3u8" : "mp4",
      referer: _0x5ed86c.referer,
      origin: _0x5ed86c.base
    };
  }
  if (_0x224c51.charAt(0) === "/") {
    var _0x524f0f = _0x224c51.match(/[?&]url=([^&]+)/);
    if (!_0x524f0f) {
      return null;
    }
    var _0x12fe4e;
    try {
      _0x12fe4e = decodeURIComponent(_0x524f0f[1]);
    } catch (_0x396c9f) {
      return null;
    }
    var _0x208919 = extractOrigin(_0x12fe4e);
    return {
      url: _0x12fe4e,
      format: "m3u8",
      referer: _0x208919 ? _0x208919 + "/" : _0x5ed86c.referer,
      origin: _0x208919 || _0x5ed86c.base
    };
  }
  return null;
}
function normalizeSources(_0x250cd4, _0x46a02a, _0xaf122e, _0x33b35f, _0x4de12e, _0x352f17) {
  var _0x423049 = [];
  for (var _0x4026bc = 0; _0x4026bc < _0x250cd4.length; _0x4026bc++) {
    var _0x5eb8c2 = _0x250cd4[_0x4026bc];
    if (_0x5eb8c2.isEmbed) {
      continue;
    }
    var _0x2bc749 = resolveSource(_0x5eb8c2, _0x46a02a);
    if (!_0x2bc749) {
      continue;
    }
    var _0x20e31d = _0x5eb8c2.quality || "HD";
    var _0x576bf8 = (_0x5eb8c2.lang || "MULTI").toUpperCase();
    var _0x5d6e29 = _0x2bc749.format.toUpperCase();
    var _0x15350e = "🇫🇷";
    var _0x252ab6 = "VF";
    if (_0x576bf8.indexOf("MULTI") !== -1 || _0x5eb8c2.name && _0x5eb8c2.name.toUpperCase().indexOf("MULTI") !== -1) {
      _0x15350e = "🌍";
      _0x252ab6 = "MULTI";
    } else if (_0x576bf8.indexOf("VOST") !== -1) {
      _0x15350e = "🔡";
      _0x252ab6 = "VOSTFR";
    }
    var _0x5949d1 = "🎬 ";
    if (_0x33b35f && _0x4de12e) {
      var _0x9aa953 = _0x352f17 && _0x352f17.name ? " - " + _0x352f17.name : "";
      _0x5949d1 += "S" + _0x33b35f + " E" + _0x4de12e + _0x9aa953 + " | " + _0xaf122e.name;
    } else {
      _0x5949d1 += _0xaf122e.name + (_0xaf122e.year ? " - " + _0xaf122e.year : "");
    }
    var _0x3a0676 = ["📺 " + _0x20e31d, _0x15350e + " " + _0x252ab6, "🎞️ " + _0x5d6e29];
    if (_0x5eb8c2.size) {
      _0x3a0676.push("💾 " + _0x5eb8c2.size);
    }
    var _0x49da3a = _0x352f17 && _0x352f17.duration ? _0x352f17.duration : _0xaf122e.duration;
    if (_0x49da3a) {
      _0x3a0676.push("⏱️ " + _0x49da3a);
    }
    _0x423049.push({
      name: "Nakios - " + _0x20e31d,
      title: _0x5949d1 + "\n" + _0x3a0676.join(" | "),
      url: _0x2bc749.url,
      quality: _0x20e31d,
      format: _0x2bc749.format,
      headers: {
        "User-Agent": NAKIOS_UA,
        Referer: _0x2bc749.referer,
        Origin: _0x2bc749.origin
      }
    });
  }
  return _0x423049;
}
function getStreams(_0x4cb892, _0x4394b5, _0x4ca306, _0x1478d9) {
  return Promise.all([getTmdbMetadata(_0x4cb892, _0x4394b5), _0x4394b5 === "tv" ? getEpisodeInfo(_0x4cb892, _0x4ca306, _0x1478d9) : Promise.resolve(null), detectEndpoint()]).then(function (_0x368e90) {
    var _0x1b9f68 = _0x368e90[0];
    var _0x5214c9 = _0x368e90[1];
    var _0x3e704b = _0x368e90[2];
    var _0x4e50cd = _0x4394b5 === "tv" ? _0x3e704b.api + "/sources/tv/" + _0x4cb892 + "/" + (_0x4ca306 || 1) + "/" + (_0x1478d9 || 1) : _0x3e704b.api + "/sources/movie/" + _0x4cb892;
    return fetch(_0x4e50cd, {
      headers: {
        "User-Agent": NAKIOS_UA,
        Referer: _0x3e704b.referer
      }
    }).then(function (_0x4eb8ae) {
      return _0x4eb8ae.json();
    }).then(function (_0x3c19c8) {
      if (!_0x3c19c8.success || !_0x3c19c8.sources) {
        return [];
      }
      var _0x4d3b6e = _0x4394b5 === "tv" ? _0x4ca306 : null;
      var _0xa51308 = _0x4394b5 === "tv" ? _0x1478d9 : null;
      return normalizeSources(_0x3c19c8.sources, _0x3e704b, _0x1b9f68, _0x4d3b6e, _0xa51308, _0x5214c9);
    });
  }).catch(function () {
    return [];
  });
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getStreams: getStreams
  };
} else {
  global.getStreams = getStreams;
}
;return module.exports;
})()]
];
module.exports = {
  getStreams: async function () {
    const args = arguments;
    const tele = typeof __plugin_sleep !== "function" && typeof __cheerio_load === "function";
    const correr = async (par) => {
      try {
        const r = par[1] && typeof par[1].getStreams === "function" ? await par[1].getStreams.apply(null, args) : [];
        return (Array.isArray(r) ? r : []).filter(Boolean).map((s) => Object.assign({}, s, { _metodo: par[0] }));
      } catch (e) {
        return [];
      }
    };
    if (tele) {
      for (const par of __metodos) {
        const r = await correr(par);
        if (r.length) return r;
      }
      return [];
    }
    const todos = await Promise.all(__metodos.map(correr));
    return todos.find((r) => r.length) || [];
  }
};
if (__metodos[0][1] && typeof __metodos[0][1].onSettings === "function") module.exports.onSettings = __metodos[0][1].onSettings;


;(function () {
  const FUENTE = "Nakios";
  const POR_DEFECTO = "";
  const HOSTS = [
    [/uqload/i, "Uqload"], [/voe/i, "Voe"], [/vidmoly/i, "Vidmoly"], [/sibnet/i, "Sibnet"], [/sendvid/i, "Sendvid"],
    [/dood|d0000d|ds2play|dsvplay/i, "Doodstream"], [/streamtape|stape/i, "Streamtape"], [/filemoon|byse/i, "Filemoon"],
    [/luluvdo|lulustream|lulu/i, "LuluStream"], [/vidoza/i, "Vidoza"], [/upstream/i, "Upstream"], [/mixdrop/i, "Mixdrop"],
    [/myvi/i, "MyVi"], [/ok\.ru|okru/i, "OK.ru"], [/mail\.ru/i, "Mail.ru"], [/vk\.com|vkvideo/i, "VK"], [/mp4upload/i, "Mp4Upload"],
    [/streamwish|hlswish|swish/i, "StreamWish"], [/vidhide|filelions/i, "VidHide"], [/smoothpre/i, "SmoothPre"],
    [/vidzy/i, "Vidzy"], [/gupload/i, "GUpload"], [/fsvid/i, "FSVid"], [/younetu|netu|hqq/i, "Netu"],
    [/lecteurvideo/i, "LecteurVideo"], [/hgcloud/i, "HGCloud"], [/up4fun/i, "Up4Fun"], [/vidhsareup/i, "VidShare"],
    [/(^|[^a-z])moon([^a-z]|$)/i, "Filemoon"]
  ];

  function servidorGowaru(s) {
    const texto = `${s.title || ""} ${s.name || ""}`;
    for (const [patron, nombre] of HOSTS) if (patron.test(texto)) return nombre;
    const m = String(s.title || "").match(/^\[[A-Z]+\]\s+\S+\s+-\s+([^\[\]]+?)\s*(\[|$)/);
    const resto = m ? m[1].trim() : "";
    if (!resto || resto.length > 24 || /^(\d{3,4}p|hd|sd|4k|auto)$/i.test(resto) || resto.toLowerCase() === FUENTE.toLowerCase()) return "";
    return resto.charAt(0).toUpperCase() + resto.slice(1);
  }

  function audioGowaru(s) {
    const t = ` ${s.title || ""} ${s.name || ""} `.toUpperCase();
    if (/[^A-Z](VOSTFR|VOSTF|VOST|SUBFR|SUBF)[^A-Z]/.test(t)) return "Original (sub. francés)";
    if (/[^A-Z]VFQ[^A-Z]/.test(t)) return "Francés (Quebec)";
    if (/[^A-Z](VFF|TRUEFRENCH)[^A-Z]/.test(t)) return "Francés (VFF)";
    if (/[^A-Z]MULTI[^A-Z]/.test(t)) return "Multi (francés)";
    if (/[^A-Z](VF|VFI|FRENCH)[^A-Z]/.test(t)) return "Francés";
    const codigo = String(s.language || "").toLowerCase();
    if (codigo === "fr") return POR_DEFECTO || "Francés";
    if (codigo === "multi") return "Multi (francés)";
    if (codigo === "en" || codigo === "ja" || codigo === "vo") return "";
    return POR_DEFECTO || "Francés";
  }

  async function adaptarGowaru(s) {
    const audio = audioGowaru(s);
    if (!audio) return null;
    return tarjeta({ fuente: FUENTE, servidor: servidorGowaru(s), calidad: calidadDe(s.quality), tamano: tamanoDe(s.size), audio, url: s.url, headers: cabecerasDe(s), subtitles: s.subtitles, titulo: s.title });
  }

  async function adaptarAio(s) {
    const texto = String(s.title || "");
    const lengua = (texto.match(/\b(VOSTFR|MULTI|VF)\b/) || [])[1] || "VF";
    const audio = lengua === "VOSTFR" ? "Original (sub. francés)" : lengua === "MULTI" ? "Multi (francés)" : "Francés";
    return tarjeta({ fuente: "Nakios", calidad: calidadDe(s.quality || s.name), tamano: tamanoDe(lineaCon(texto, "💾")), audio, url: s.url, headers: cabecerasDe(s), subtitles: s.subtitles, titulo: texto.split("\n")[0] });
  }
  async function adaptar(s, contexto) {
    return s._metodo === "aio" ? adaptarAio(s, contexto) : adaptarGowaru(s);
  }

  const original = module.exports && module.exports.getStreams;
  if (typeof original !== "function") return;
  const TELE = typeof __plugin_sleep !== "function" && typeof __cheerio_load === "function";
  const FRANCES = /(^|[^a-z])(fr|fra|fre|fr-fr|fr-ca|french|fran[cç]ais|francais|vf|vff|vfq|vfi|vf2|truefrench)([^a-z]|$)/i;
  const PORTUGUES = /(^|[^a-z])(pt|por|pt-br|pt_br|ptbr|pt-pt|portuguese|portugu[eê]s|brazil|brasil|brazilian|dublado)([^a-z]|$)/i;
  const BRASIL = /(br|brazil|brasil|brazilian|dublado)/i;

  function limpiar(t) {
    return String(t || "").replace(/[​﻿]/g, "").trim();
  }

  function idiomaDe(texto) {
    const t = limpiar(texto);
    if (!t) return "";
    if (FRANCES.test(t)) return "Francés";
    if (PORTUGUES.test(t)) return BRASIL.test(t) ? "Portugués (Brasil)" : "Portugués";
    return "";
  }

  function calidadDe(texto) {
    const t = limpiar(texto);
    if (/2160|\b4k\b/i.test(t)) return "4K";
    const m = t.match(/(\d{3,4})\s*p?/i);
    if (m && Number(m[1]) >= 240 && Number(m[1]) <= 4320) return `${m[1]}p`;
    if (/\bhd\b/i.test(t)) return "HD";
    return "Auto";
  }

  function cabecerasDe(s) {
    if (s && s.headers && Object.keys(s.headers).length) return s.headers;
    const h = s && s.behaviorHints && s.behaviorHints.proxyHeaders && s.behaviorHints.proxyHeaders.request;
    return h && Object.keys(h).length ? h : null;
  }

  function tarjeta(d) {
    const nombre = d.servidor ? `${d.fuente} (${d.servidor})` : d.fuente;
    const s = { name: nombre, title: limpiar(d.titulo) || nombre, url: d.url, quality: `Calidad: ${d.calidad || "Auto"}`, provider: d.fuente };
    if (d.tamano) s.size = `Tamaño: ${d.tamano}`;
    if (d.audio) s.language = `Audio: ${d.audio}`;
    if (TELE) {
      s.size = [s.quality, s.size].filter(Boolean).join(" • ");
      s.quality = s.name;
    }
    if (d.headers && Object.keys(d.headers).length) s.headers = d.headers;
    if (d.subtitles && d.subtitles.length) s.subtitles = d.subtitles;
    if (d.infoHash) s.infoHash = d.infoHash;
    return s;
  }

  function nombreAudio(atributos) {
    const idioma = (atributos.match(/LANGUAGE="([^"]*)"/i) || [])[1] || "";
    const nombre = (atributos.match(/NAME="([^"]*)"/i) || [])[1] || "";
    return idiomaDe(`${idioma} ${nombre}`);
  }

  async function audiosHls(url, headers) {
    if (!/\.m3u8|\/hls|master|playlist/i.test(String(url || ""))) return [];
    try {
      const r = await fetch(url, { headers: headers || {} });
      if (!r || !r.ok) return [];
      const texto = await r.text();
      const lista = [];
      for (const linea of String(texto || "").split(/\r?\n/)) {
        if (!/^#EXT-X-MEDIA:/i.test(linea) || !/TYPE=AUDIO/i.test(linea)) continue;
        const idioma = nombreAudio(linea);
        if (idioma && !lista.includes(idioma)) lista.push(idioma);
      }
      return lista;
    } catch (e) {
      return [];
    }
  }

  const originales = {};

  async function idiomaOriginal(contexto) {
    const id = String((contexto && contexto.tmdbId) || "").replace(/\D/g, "");
    if (!id) return "";
    const tipo = contexto.tipo === "tv" || contexto.tipo === "series" ? "tv" : "movie";
    const clave = `${tipo}/${id}`;
    if (!(clave in originales)) {
      originales[clave] = (async () => {
        try {
          const r = await fetch(`https://api.themoviedb.org/3/${clave}?api_key=439c478a771f35c05022f9feabcca01c`);
          const d = r && r.ok ? await r.json() : null;
          const codigo = String((d && d.original_language) || "").toLowerCase();
          const paises = [].concat((d && d.origin_country) || [], ((d && d.production_countries) || []).map((x) => x.iso_3166_1));
          if (codigo === "fr") return "Francés (original)";
          if (codigo === "pt") return paises.includes("BR") ? "Portugués de Brasil (original)" : "Portugués (original)";
          return "";
        } catch (e) {
          return "";
        }
      })();
    }
    return originales[clave];
  }

  function textoAudios(lista) {
    return lista.length ? `${lista.join(", ")} (multi-audio)` : "";
  }

  function tamanoDe(texto) {
    const m = limpiar(texto).match(/(\d+(?:[.,]\d+)?)\s*(GB|MB|GiB|MiB)/i);
    return m ? `${m[1].replace(",", ".")} ${m[2].toUpperCase().replace("I", "")}` : "";
  }

  function lineaCon(texto, simbolo) {
    return (String(texto || "").split("\n").find((l) => l.includes(simbolo)) || "");
  }

  module.exports.getStreams = async function () {
    const contexto = { tmdbId: arguments[0], tipo: arguments[1] };
    let lista = [];
    try {
      lista = (await original.apply(this, arguments)) || [];
    } catch (e) {
      lista = [];
    }
    const salida = [];
    const vistos = new Set();
    for (const s of Array.isArray(lista) ? lista : []) {
      if (!s || !s.url) continue;
      let t = null;
      try {
        t = await adaptar(s, contexto);
      } catch (e) {
        t = null;
      }
      if (t && !vistos.has(t.url + t.name + (t.language || ""))) {
        vistos.add(t.url + t.name + (t.language || ""));
        salida.push(t);
      }
    }
    return salida;
  };
})();
if (typeof globalThis !== "undefined" && module.exports && typeof module.exports.getStreams === "function") globalThis.getStreams = module.exports.getStreams;
