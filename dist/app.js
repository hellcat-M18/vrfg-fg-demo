var Se={enabled:!1,model:"fg_ncorr",size:"auto",compare:!1,genOnly:!1,showStats:!0,engine:"wgsl",fp16:!0,gain:1,smooth:0,mult:2},Be={spire_pass4_ps2_s2d:"\u88DC\u9593 SPIRE pass4\uFF0Bps2\uFF0BS2D (\u6700\u65B0\u30FBpass4\uFF0Bps2 \u306E\u4E0A\u306B 1.2 \u306E S2D Refine \u3092 2 \u6BB5\u76EE\u306B\u5F8C\u304B\u3089 50k\u30FBW8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_pass4_ps2:"\u88DC\u9593 SPIRE pass4\uFF0Bps2 (1.0 \u306E\u672C\u4F53\uFF0B\u6BB5\u306E\u9593\u306E\u7279\u5FB4 4ch\uFF0B\u5B66\u7FD2\u3057\u305F\u62E1\u5927 PixelShuffle 2\xD72\u30FBW8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001100k\u3001WGSL \u306E\u307F)",spire_1_2:"\u88DC\u9593 SPIRE 1.2 (g8h4\uFF0BS2D Refine 12ch flow_mask\u30FB\u51688bit W8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u300150k\u3001WGSL \u306E\u307F)",spire_1_1:"\u88DC\u9593 SPIRE 1.1 (g8h4\uFF0B2\u6BB5Refine [4,8] flow_mask\u30FB\u51688bit W8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_postg_w8a8:"\u88DC\u9593 SPIRE post_gamma W8A8 (\u51688bit QAT\uFF0Bsnorm8\uFF0Bpost_gamma\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_g8h4_w8a8:"\u88DC\u9593 SPIRE g8h4 W8A8 (\u8D85\u8EFD\u91CF \u221264% MAC\u30FB7.9k\u91CD\u307F\u30FB\u51688bit QAT\uFF0Bsnorm8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_postg:"\u88DC\u9593 SPIRE post_gamma (fp32\u30FB\u03B4\u5F8C\u03B31\u56DE\u4ED5\u4E0A\u3052\uFF0Btemporal\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire:"\u88DC\u9593 SPIRE (temporal\u30FB\u5171\u6709\u30D4\u30E9\u30DF\u30C3\u30C9\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",vi_disrule:"\u88DC\u9593 VRFG i_dis\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 (\u524D\u5F8C\u3067\u8272\u304C\u307B\u307C\u540C\u3058\u753B\u7D20\u306F\u30EF\u30FC\u30D7\u3057\u306A\u3044\u5E73\u5747\u3001\u03C4=0.01\u3001WGSL \u306E\u307F)",vi_disfine:"\u88DC\u9593 VRFG i_dis_fine (\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\u306E\u4EE3\u308F\u308A\u306B DIS \u3092 1/2 \u306E\u6BB5\u307E\u3067\uFF0B\u5C0F\u578BNN\u3001\u88DC\u6B63\u6BB5\u306A\u3057\u3001WGSL \u306E\u307F)",vi_dis:"\u88DC\u9593 VRFG i_dis (\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\u306E\u4EE3\u308F\u308A\u306B DIS\uFF08OpenCV \u306E ULTRAFAST \u76F8\u5F53\uFF09\uFF0B\u5C0F\u578BNN\u3001\u88DC\u6B63\u6BB5\u306A\u3057\u3001WGSL \u306E\u307F)",vi_light:"\u88DC\u9593 VRFG i_refine_light_ov (\u5B57\u5E55\u30FBUI \u306E\u91CD\u306D\u5408\u308F\u305B\u3067\u5B66\u7FD2\u3001\u88DC\u6B63\u6BB5\u3092 1\xD71 \u3067\u8EFD\u91CF\u5316\u3001WGSL \u306E\u307F)",vi_refine:"\u88DC\u9593 VRFG i_refine_bi (\u53CC\u65B9\u5411\u30FBcost volume\u30FB\u30D5\u30EB\u89E3\u50CF\u5EA6\u306E\u88DC\u6B63\u6BB5\u30FB\u8272\u306E\u88DC\u6B63\u3001LPIPS \u3067 RIFE lite \u8D85\u3048\u3001WGSL \u306E\u307F)",vi_shuffle:"\u88DC\u9593 VRFG i_shuffle (i_core \u306E\u62E1\u5927\u3092\u30D4\u30AF\u30BB\u30EB\u30B7\u30E3\u30C3\u30D5\u30EB\u306B\u3001LPIPS \u6539\u5584\u3001WGSL \u306E\u307F)",vi_core:"\u88DC\u9593 VRFG i_core (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6\u3001\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\uFF0B\u5C0F\u578BNN\u3001WGSL \u306E\u307F)",rife_v425lite:"\u88DC\u9593 RIFE 4.25 lite (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6)",rife_v425:"\u88DC\u9593 RIFE 4.25 (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6)",fg_ncorr:"n_corr: cost volume (6.2 GMAC, val \u6700\u826F)",fg_nratio:"n_ratio: \u52D5\u304D\u3092\u5927\u80C6\u306B (\u8868\u793A\u4E0A\u306E\u4F4D\u7F6E\u306E\u640D\u5931)",fg_nb:"n_base: s2d8\u30FB\u5207\u308A\u51FA\u3057448 (\u6BD4\u8F03\u7528)",fg_c:"C (\u65E7\u57FA\u6E96, 5.0 GMAC@540p)",fg_s2d8:"s2d8 (\u65E7, \u5165\u53E3\u3092\u8EFD\u91CF\u5316)"};function be(o,e){return o!=="auto"?o.split("x").map(Number):e>0&&e<=400?[640,352]:[960,544]}function Ee(o,e,i,n=32){let[s,u]=be(o,i);if(!(e>0&&i>0))return[s,u];let t=e/i,r=Math.sqrt(s*u*t),a=Math.sqrt(s*u/t),l=Math.min(1,e/r,i/a);r*=l,a*=l;let d=(f,p)=>Math.max(2*n,Math.min(Math.round(f/n),Math.floor(p/n))*n);return[d(r,Math.max(e,2*n)),d(a,Math.max(i,2*n))]}async function xe(){if(!("gpu"in navigator))throw new Error("WebGPU is not available in this browser");let o=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!o)throw new Error("No WebGPU adapter");let i=["shader-f16","timestamp-query","float32-filterable","subgroups"].filter(s=>o.features.has(s));return{device:await o.requestDevice({requiredFeatures:i,requiredLimits:{maxStorageBufferBindingSize:o.limits.maxStorageBufferBindingSize,maxBufferSize:o.limits.maxBufferSize,maxStorageBuffersPerShaderStage:Math.min(16,o.limits.maxStorageBuffersPerShaderStage)}}),adapterInfo:o.info,f16:i.includes("shader-f16"),timestamps:i.includes("timestamp-query")}}var Ge=()=>{throw new Error("onnxruntime-web is not bundled in the web demo")},se={create:Ge},Z={fromGpuBuffer:Ge},K={wasm:{},webgpu:{}};function ae(o){let e=[],i=n=>{typeof n=="string"&&e.push(n)};Array.isArray(o.in)?o.in.forEach(i):i(o.in),i(o.a),o.op!=="conv"&&o.op!=="deconv"&&i(o.b);for(let n of[o.base,o.init,o.flow,o.fwd,o.bwd,o.res,o.prev])i(n);return e}function ie(o){let e=o.out?[o.out]:[];return o.op==="bimatch"&&o.cost&&e.push(o.cost),e}var J=o=>{let e=String(Math.fround(o));return/[.eE]/.test(e)?e:`${e}.0`},ne=class{bufs=[];decl=[];names=new Map;in(e){return this.bind(e,"read")}out(e){return this.bind(e,"read_write")}bind(e,i){let n=this.names.get(e);return n||(n=`b${this.bufs.length}`,this.decl.push(`@group(0) @binding(${this.bufs.length}) var<storage, ${i}> ${n}: array<f32>;`),this.bufs.push(e),this.names.set(e,n)),n}};function fe(o,e,i,n,s,u,t,r=a=>a){let a=(l,d)=>r(`${e}[base + ${l} * ${i}u + ${d}]`);return`
fn ${o}(x: u32, y: u32, c: u32) -> f32 {
  let sx = max((f32(x) + 0.5) * ${i}.0 / ${s}.0 - 0.5, 0.0);
  let sy = max((f32(y) + 0.5) * ${n}.0 / ${u}.0 - 0.5, 0.0);
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, ${i-1}u); let y1 = min(y0 + 1u, ${n-1}u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = c * ${i*n}u;
  return mix(mix(${a("y0","x0")}, ${a("y0","x1")}, tx), mix(${a("y1","x0")}, ${a("y1","x1")}, tx), ty) * ${J(t)};
}`}function Fe(o,e,i,n){let s=o.ops,u=new Map,t=new Map;s.forEach((c,w)=>{for(let v of ie(c))u.set(v,w);for(let v of ae(c))t.has(v)||t.set(v,[]),t.get(v).push(w)});let r=c=>t.get(c)??[],a=c=>{let w=o.tensors[c];return{c:w.c,s:w.s,w:i/w.s,h:n/w.s}},l=new Set,d=c=>c!==void 0&&!l.has(c),f=(c,w)=>c.op==="conv"&&Array.isArray(c.in)&&c.in.length===1&&c.in[0]===w&&c.k===1&&c.s===1&&c.p===0&&c.cin===3&&c.cout===1&&(!c.act||c.act==="none")&&!c.res,p=(c,w,v)=>c.op==="pool"&&c.in===w&&c.r===v,m=(c,w)=>`${J(e[c.b])} + ${w}.x * ${J(e[c.w])} + ${w}.y * ${J(e[c.w+1])} + ${w}.z * ${J(e[c.w+2])}`,S=[],z=c=>{if(c===void 0||s[c].op!=="midflow")return;let w=s[c],v=u.get(w.fwd),b=u.get(w.bwd);if(v===void 0||b===void 0||s[v].op!=="resize"||s[b].op!=="resize")return;let x=a(w.fwd),B=a(w.out);if(x.c!==2||B.c!==4||x.w!==B.w||x.h!==B.h||a(w.bwd).w!==B.w)return;let F=s[v].in,G=s[b].in,A=a(F),E=a(G);if(!(A.c!==2||E.c!==2))return{m:c,rf:v,rb:b,fs:F,bs:G,w:B.w,h:B.h,fns:k=>fe("upF",k.in(F),A.w,A.h,B.w,B.h,s[v].mul??1)+fe("upB",k.in(G),E.w,E.h,B.w,B.h,s[b].mul??1),expr:`let fv = vec2f(upF(x, y, 0u), upF(x, y, 1u));
  let bv = vec2f(upB(x, y, 0u), upB(x, y, 1u));
  let m = 0.25 * (bv - fv);`}};for(let c of Object.keys(o.tensors)){if(u.has(c))continue;let w=a(c);if(w.c!==3||w.s!==1||i%32||n%32)continue;let v=r(c).filter(F=>d(F)&&f(s[F],c)),b=r(c).filter(F=>d(F)&&p(s[F],c,4)),x=v.map(F=>{let G=[],A=s[F].out;for(;G.length<5;){let E=r(A).find(k=>d(k)&&p(s[k],A,2));if(E===void 0)break;G.push(E),A=s[E].out}return G}),B=[...v,...x.flat(),...b];B.length<2||(B.forEach(F=>l.add(F)),S.push({ops:B,reads:[c],label:"front",kernels:F=>{let G=new ne,A=G.in(c),E=i*n,k=x.filter(D=>D.length).length,g=k,h="",_=0,y=[[],[],[],[],[],[]];v.forEach((D,U)=>{let L=s[D];if(h+=`
  var c${U}: array<f32, 4>;
  for (var q = 0u; q < 4u; q++) { c${U}[q] = ${m(L,"px[q]")}; }`,F.has(L.out)){let M=G.out(L.out);h+=`
  for (var q = 0u; q < 4u; q++) { ${M}[(y0 + q / 2u) * ${i}u + x0 + q % 2u] = c${U}[q]; }`}let O=x[U];if(!O.length)return;let q=_++,R=s[O[0]].out;h+=`
  { let v = (((c${U}[0] + c${U}[1]) + c${U}[2]) + c${U}[3]) / 4.0;
    sh[${q*256}u + li] = v;${F.has(R)?`
    ${G.out(R)}[(wid.y * 16u + lid.y) * ${i/2}u + wid.x * 16u + lid.x] = v;`:""} }`;for(let M=2;M<=O.length;M++){let j=32>>M,W=s[O[M-1]].out;y[M].push(`
    if (on) {
      let b = ${q*256}u + (2u * lid.y) * ${2*j}u + 2u * lid.x;
      v${q} = (((sh[b] + sh[b + 1u]) + sh[b + ${2*j}u]) + sh[b + ${2*j+1}u]) / 4.0;${F.has(W)?`
      ${G.out(W)}[(wid.y * ${j}u + lid.y) * ${i>>M}u + wid.x * ${j}u + lid.x] = v${q};`:""}
    }`),y[M].push(`
    if (on) { sh[${q*256}u + lid.y * ${j}u + lid.x] = v${q}; }`)}});for(let D=2;D<=5;D++){if(!y[D].length)continue;let U=32>>D,L=y[D].filter((q,R)=>R%2===0),O=y[D].filter((q,R)=>R%2===1);h+=`
  workgroupBarrier();
  {
    let on = lid.x < ${U}u && lid.y < ${U}u;
    ${Array.from({length:k},(q,R)=>`var v${R} = 0.0;`).join(" ")}
    ${L.join("")}
    workgroupBarrier();
    ${O.join("")}
  }`}if(b.length){let D=b.filter(U=>F.has(s[U].out)).map(U=>G.out(s[U].out));h+=`
  for (var c = 0u; c < 3u; c++) { sh[(${g}u + c) * 256u + li] = ((px[0][c] + px[1][c]) + px[2][c]) + px[3][c]; }
  workgroupBarrier();
  if (lid.x < 8u && lid.y < 8u) {
    let b = (2u * lid.y) * 16u + 2u * lid.x;
    let oi = (wid.y * 8u + lid.y) * ${i/4}u + wid.x * 8u + lid.x;
    for (var c = 0u; c < 3u; c++) {
      let sb = (${g}u + c) * 256u + b;
      let v = (((sh[sb] + sh[sb + 1u]) + sh[sb + 16u]) + sh[sb + 17u]) / 16.0;
      ${D.map(U=>`${U}[c * ${E/16}u + oi] = v;`).join(" ")}
    }
  }`}let P=Math.max(1,k+(b.length?3:0));return[{code:`
${G.decl.join(`
`)}
var<workgroup> sh: array<f32, ${256*P}>;
@compute @workgroup_size(16, 16)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 16u + lid.x;
  let x0 = wid.x * 32u + lid.x * 2u; let y0 = wid.y * 32u + lid.y * 2u;
  var px: array<vec3f, 4>;
  for (var q = 0u; q < 4u; q++) {
    let i = (y0 + q / 2u) * ${i}u + x0 + q % 2u;
    px[q] = vec3f(${A}[i], ${A}[${E}u + i], ${A}[${2*E}u + i]);
  }${h}
}`,bufs:G.bufs,wg:[i/32,n/32,1]}]}}))}for(let[c,w]of s.entries()){if(w.op!=="midflow"||l.has(c))continue;let v=z(c);if(!v||!d(v.rf)||!d(v.rb)||v.w%16||v.h%16)continue;let{w:b,h:x}=v,B=w.fwd,F=w.bwd,G=w.out,A=r(B).filter(y=>d(y)&&p(s[y],B,4)),E=r(F).filter(y=>d(y)&&p(s[y],F,4)),k=r(G).filter(y=>{let P=s[y];if(!d(y)||P.op!=="warp"||P.flow!==G||P.fc!==0&&P.fc!==2)return!1;let C=a(P.in);return C.c===3&&C.w===b&&C.h===x}),g=k.map(y=>r(s[y].out).filter(P=>d(P)&&f(s[P],s[y].out))),h=k.map(y=>r(s[y].out).filter(P=>d(P)&&p(s[P],s[y].out,4))),_=[v.rf,v.rb,c,...A,...E,...k,...g.flat(),...h.flat()];_.forEach(y=>l.add(y)),S.push({ops:_,reads:[v.fs,v.bs,...k.map(y=>s[y].in)],label:"mid",kernels:y=>{let P=new ne,C=b*x,D=v.fns(P),U=v.expr,L=[];if(y.has(B)&&(U+=`
  ${P.out(B)}[i] = fv.x; ${P.out(B)}[${C}u + i] = fv.y;`),y.has(F)&&(U+=`
  ${P.out(F)}[i] = bv.x; ${P.out(F)}[${C}u + i] = bv.y;`),y.has(G)){let R=P.out(G);U+=`
  ${R}[i] = m.x; ${R}[${C}u + i] = m.y; ${R}[${2*C}u + i] = -m.x; ${R}[${3*C}u + i] = -m.y;`}for(let R of A)for(let M=0;M<2;M++)L.push([`fv[${M}]`,y.has(s[R].out)?P.out(s[R].out):void 0,M]);for(let R of E)for(let M=0;M<2;M++)L.push([`bv[${M}]`,y.has(s[R].out)?P.out(s[R].out):void 0,M]);k.forEach((R,M)=>{let j=s[R],W=P.in(j.in),ke=j.fc===0?"":"-";if(U+=`
  var w${M}: vec3f;
  {
    let sx = clamp(f32(x) + ${ke}m.x, 0.0, ${b-1}.0);
    let sy = clamp(f32(y) + ${ke}m.y, 0.0, ${x-1}.0);
    let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
    let x1 = min(x0 + 1u, ${b-1}u); let y1 = min(y0 + 1u, ${x-1}u);
    let tx = sx - f32(x0); let ty = sy - f32(y0);
    for (var c = 0u; c < 3u; c++) {
      let base = c * ${C}u;
      w${M}[c] = mix(mix(${W}[base + y0 * ${b}u + x0], ${W}[base + y0 * ${b}u + x1], tx),
                     mix(${W}[base + y1 * ${b}u + x0], ${W}[base + y1 * ${b}u + x1], tx), ty);
    }
  }`,y.has(j.out)){let N=P.out(j.out);U+=`
  ${N}[i] = w${M}.x; ${N}[${C}u + i] = w${M}.y; ${N}[${2*C}u + i] = w${M}.z;`}for(let N of g[M])y.has(s[N].out)&&(U+=`
  ${P.out(s[N].out)}[i] = ${m(s[N],`w${M}`)};`);for(let N of h[M])for(let le=0;le<3;le++)L.push([`w${M}[${le}]`,y.has(s[N].out)?P.out(s[N].out):void 0,le])});let O=L.filter(R=>R[1]);return O.length&&(U+=`
  ${O.map(([R],M)=>`sh[${M*256}u + li] = ${R};`).join(`
  `)}
  workgroupBarrier();
  for (var t = li; t < ${16*O.length}u; t += 256u) {
    let ch = t / 16u; let o = t % 16u; let ox = o % 4u; let oy = o / 4u;
    var s = 0.0;
    for (var j = 0u; j < 4u; j++) { for (var q = 0u; q < 4u; q++) { s += sh[ch * 256u + (oy * 4u + j) * 16u + ox * 4u + q]; } }
    let v = s / 16.0;
    let oi = (wid.y * 4u + oy) * ${b/4}u + wid.x * 4u + ox;
    ${O.map(([,R,M],j)=>`${j?"else ":""}if (ch == ${j}u) { ${R}[${M*(C/16)}u + oi] = v; }`).join(`
    `)}
  }`),[{code:`
${P.decl.join(`
`)}
${O.length?`var<workgroup> sh: array<f32, ${256*O.length}>;`:""}
${D}
@compute @workgroup_size(16, 16)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 16u + lid.x;
  let x = wid.x * 16u + lid.x; let y = wid.y * 16u + lid.y;
  let i = y * ${b}u + x;
  ${U}
}`,bufs:P.bufs,wg:[b/16,x/16,1]}]}})}for(let[c,w]of s.entries()){if(w.op!=="add"||l.has(c))continue;let v=w.b,b=[w.a,v].map(C=>{let D=u.get(C);if(!d(D)||s[D].op!=="resize"||r(C).length!==1)return;let U=u.get(s[D].in);if(!(!d(U)||s[U].op!=="slice"||r(s[D].in).length!==1))return{rr:D,sl:U}}),x=b[1]?1:b[0]?0:-1;if(x<0)continue;let{rr:B,sl:F}=b[x],G=x===1?w.a:v,A=s[F].in,E=a(w.out),k=a(A),g=a(s[F].out);if(a(G).w!==E.w||a(G).c!==g.c||E.w%16||E.h%16)continue;let h=z(u.get(G)),_=!!h&&E.c===4&&E.w===h.w&&E.h===h.h,y=[];for(let C of r(A)){if(!d(C)||C===F||s[C].op!=="slice"||a(s[C].out).c!==1)continue;let D=r(s[C].out);if(D.length!==1||!d(D[0])||s[D[0]].op!=="sigmoid")continue;let U=r(s[D[0]].out);if(U.length!==1||!d(U[0])||s[U[0]].op!=="resize")continue;let L=a(s[U[0]].out);if(!(L.w!==E.w||L.h!==E.h)){y=[C,D[0],U[0]];break}}let P=[F,B,c,...y];P.forEach(C=>l.add(C)),S.push({ops:P,reads:[A,..._?[h.fs,h.bs]:[G]],label:"tail",kernels:C=>{let D=new ne,U=E.w*E.h,L=D.in(A),O=s[F],q=fe("upH",L,k.w,k.h,E.w,E.h,s[B].mul??1,j=>`(${j} * ${J(O.mul??1)})`),R="";if(_)q+=h.fns(D),R+=h.expr+`
  let dv = array<f32, 4>(m.x, m.y, -m.x, -m.y);`;else{let j=D.in(G);R+=`
  var dv: array<f32, ${g.c}>;
  for (var c = 0u; c < ${g.c}u; c++) { dv[c] = ${j}[c * ${U}u + i]; }`}if(C.has(w.out)){let j=D.out(w.out),W=x===1?"dv[c] + r":"r + dv[c]";R+=`
  for (var c = 0u; c < ${g.c}u; c++) { let r = upH(x, y, ${O.c0??0}u + c); ${j}[c * ${U}u + i] = ${W}; }`}if(y.length&&C.has(s[y[2]].out)){let j=s[y[0]];q+=fe("upM",L,k.w,k.h,E.w,E.h,s[y[2]].mul??1,W=>`(1.0 / (1.0 + exp(-(${W} * ${J(j.mul??1)}))))`),R+=`
  ${D.out(s[y[2]].out)}[i] = upM(x, y, ${j.c0??0}u);`}return[{code:`
${D.decl.join(`
`)}
${q}
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let x = gid.x; let y = gid.y;
  let i = y * ${E.w}u + x;
  ${R}
}`,bufs:D.bufs,wg:[E.w/16,E.h/16,1]}]}})}return S}async function Te(o){let[e,i]=await Promise.all([fetch(`${o}.json`),fetch(`${o}.bin`)]);if(!e.ok||!i.ok)throw new Error(`${o}.json/.bin \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 (npm run fg-models)`);let n=await e.json(),s=new Float32Array(await i.arrayBuffer());if(n.format!=="vrfg-ir/1"||s.length!==n.weightCount)throw new Error(`invalid model ${o}`);return{ir:n,weights:s}}var Y=8;function Me(o,e,i,n){return n>=8?[4,Math.min(4,i)]:i>=32&&o*e>=8e3?[2,2]:i<=4?[1,1]:[1,Math.min(2,i)]}function we(o,e,i){return e==="lrelu"?`${o} = max(${o}, ${o} * ${i.toFixed(6)});`:e==="tanh_snorm8"?`${o} = round(clamp(tanh(clamp(${o}, vec4f(-20.0), vec4f(20.0))), vec4f(-1.0), vec4f(1.0)) * 127.0) / 127.0;`:""}function Re(o,e,i,n,s,u){let t=e.reduce((p,m)=>p+m,0),r=e.map((p,m)=>`@group(0) @binding(${3+m}) var<storage, read> in${m}: array<f32>;`).join(`
`),a=Array.from({length:i},(p,m)=>m),l="",d=0;e.forEach((p,m)=>{l+=`${m?" else ":""}if (c < ${d+p}u) { v = in${m}[(c - ${d}u) * planeIn + idx]; }`,d+=p});let f=we("r",n,s);return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
${r}
${u?`@group(0) @binding(${3+o}) var<storage, read> rs: array<f32>;`:""}
@group(0) @binding(${3+o+(u?1:0)}) var<storage, read_write> o: array<f32>;
var<workgroup> sh: array<vec4f, 100>;
fn readCh(c: u32, idx: u32, planeIn: u32) -> f32 {
  if (c >= ${t}u) { return 0.0; }
  var v = 0.0;
  ${l}
  return v;
}
@compute @workgroup_size(8, 8)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 8u + lid.x;
  let ox = wid.x * 8u + lid.x; let oy = wid.y * 8u + lid.y;
  let og = wid.z * ${i}u;
  if (og >= d.cout4) { return; }
  let bx = i32(wid.x * 8u) - 1; let by = i32(wid.y * 8u) - 1;
  let planeIn = d.inW * d.inH;
  ${a.map(p=>`var a${p} = b[og + ${p}u];`).join(" ")}
  for (var cb = 0u; cb < ${t}u; cb += 4u) {
    for (var t = li; t < 100u; t += 64u) {
      let gx = bx + i32(t % 10u); let gy = by + i32(t / 10u);
      var v = vec4f(0.0);
      if (gx >= 0 && gx < i32(d.inW) && gy >= 0 && gy < i32(d.inH)) {
        let idx = u32(gy) * d.inW + u32(gx);
        v = vec4f(readCh(cb, idx, planeIn), readCh(cb + 1u, idx, planeIn), readCh(cb + 2u, idx, planeIn), readCh(cb + 3u, idx, planeIn));
      }
      sh[t] = v;
    }
    workgroupBarrier();
    let base = (lid.y * 10u + lid.x);
    for (var ky = 0u; ky < 3u; ky++) {
      for (var kx = 0u; kx < 3u; kx++) {
        let s = sh[base + ky * 10u + kx];
        let tap = ky * 3u + kx;
        ${a.map(p=>`{ let wb = (og + ${p}u) * ${t*9}u + cb * 9u + tap;
          a${p} += s.x * w[wb];
          if (cb + 1u < ${t}u) { a${p} += s.y * w[wb + 9u]; }
          if (cb + 2u < ${t}u) { a${p} += s.z * w[wb + 18u]; }
          if (cb + 3u < ${t}u) { a${p} += s.w * w[wb + 27u]; } }`).join(`
        `)}
      }
    }
    workgroupBarrier();
  }
  if (ox >= d.outW || oy >= d.outH) { return; }
  let plane = d.outW * d.outH; let pi = oy * d.outW + ox;
  ${a.map(p=>`{ var r = a${p}; let c0 = (og + ${p}u) * 4u;
    ${u?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { r[j] += rs[(c0 + j) * plane + pi]; } }":""}
    ${f}
    for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = r[j]; } } }`).join(`
  `)}
}`}function Ae(o,e,i,n,s,u,t,r,a=.1,l=!1){let d=e.reduce((b,x)=>b+x,0),f=e.map((b,x)=>`@group(0) @binding(${3+x}) var<storage, read> in${x}: array<f32>;`).join(`
`),p=Array.from({length:u},(b,x)=>x),m=Array.from({length:r},(b,x)=>x),S=p.flatMap(b=>m.map(x=>`var a${b}_${x} = b[og + ${b}u];`)).join(`
  `),z="",c=0;for(let b=0;b<o;b++)i===1&&n===1&&s===0?z+=`
  for (var ci = 0u; ci < ${e[b]}u; ci++) {
    let row = ci * d.inH * d.inW + oy * d.inW;
    let wi = ${c}u + ci;
    ${p.map(x=>`let w${x} = w[(og + ${x}u) * ${d}u + wi];`).join(" ")}
    ${m.map(x=>`{ let ix = ox0 + ${x}u; if (ix < d.inW) { let v = in${b}[row + ix]; ${p.map(B=>`a${B}_${x} += v * w${B};`).join(" ")} } }`).join(`
    `)}
  }`:z+=`
  for (var ci = 0u; ci < ${e[b]}u; ci++) {
    let base = ci * d.inH * d.inW;
    for (var ky = 0u; ky < ${i}u; ky++) {
      let iy = i32(oy * ${n}u + ky) - ${s};
      if (iy < 0 || iy >= i32(d.inH)) { continue; }
      let row = base + u32(iy) * d.inW;
      for (var kx = 0u; kx < ${i}u; kx++) {
        let wi = (${c}u + ci) * ${i*i}u + ky * ${i}u + kx;
        ${p.map(x=>`let w${x} = w[(og + ${x}u) * ${d*i*i}u + wi];`).join(" ")}
        ${m.map(x=>`{ let ix = i32((ox0 + ${x}u) * ${n}u + kx) - ${s};
          if (ix >= 0 && ix < i32(d.inW)) { let v = in${b}[row + u32(ix)]; ${p.map(B=>`a${B}_${x} += v * w${B};`).join(" ")} } }`).join(`
        `)}
      }
    }
  }`,c+=e[b];let w=we("r",t,a),v=m.map(b=>`
  if (ox0 + ${b}u < d.outW) {
    ${p.map(x=>`{ var r = a${x}_${b}; let c0 = (og + ${x}u) * 4u; let pi = oy * d.outW + ox0 + ${b}u;
      ${l?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { r[j] += rs[(c0 + j) * plane + pi]; } }":""}
      ${w}
      for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = r[j]; } } }`).join(`
    `)}
  }`).join("");return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
${f}
${l?`@group(0) @binding(${3+o}) var<storage, read> rs: array<f32>;`:""}
@group(0) @binding(${3+o+(l?1:0)}) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(${Y}, ${Y})
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let ox0 = gid.x * ${r}u; let oy = gid.y;
  if (ox0 >= d.outW || oy >= d.outH) { return; }
  let og = gid.z * ${u}u;
  if (og >= d.cout4) { return; }
  let plane = d.outW * d.outH;
  ${S}
  ${z}
  ${v}
}`}var Le=`
struct D { w: u32, h: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> f0: array<f32>;
@group(0) @binding(2) var<storage, read> f1: array<f32>;
@group(0) @binding(3) var<storage, read> f2: array<f32>;
@group(0) @binding(4) var<storage, read_write> x: array<f32>;
@group(0) @binding(5) var<storage, read_write> x0: array<f32>;
@group(0) @binding(6) var<storage, read_write> x1: array<f32>;
@group(0) @binding(7) var<storage, read_write> x2: array<f32>;
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h;
  let i = gid.y * d.w + gid.x;
  for (var c = 0u; c < 3u; c++) {
    let a = f0[c * n + i] * 2.0 - 1.0;
    let b = f1[c * n + i] * 2.0 - 1.0;
    let e = f2[c * n + i] * 2.0 - 1.0;
    x[c * n + i] = a; x[(3u + c) * n + i] = b; x[(6u + c) * n + i] = e;
    x[(9u + c) * n + i] = b - a; x[(12u + c) * n + i] = e - b;
    x0[c * n + i] = a; x1[c * n + i] = b; x2[c * n + i] = e;
  }
}`,je=`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, c: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.outW || gid.y >= d.outH) { return; }
  let ib = gid.z * d.inW * d.inH + gid.y * 2u * d.inW + gid.x * 2u;
  o[gid.z * d.outW * d.outH + gid.y * d.outW + gid.x] = (a[ib] + a[ib + 1u] + a[ib + d.inW] + a[ib + d.inW + 1u]) * 0.25;
}`,Ie=`
struct D { w: u32, h: u32, c: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  var s = 0.0;
  for (var c = 0u; c < d.c; c++) { let v = a[c * n + i]; s += v * v; }
  let k = 1.0 / sqrt(s + 1e-24);
  for (var c = 0u; c < d.c; c++) { o[c * n + i] = a[c * n + i] * k; }
}`,Oe=`
struct D { w: u32, h: u32, c: u32, r: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  let k = 2u * d.r + 1u;
  let dy = i32(gid.z / k) - i32(d.r);   // one displacement per z
  let dx = i32(gid.z % k) - i32(d.r);
  let y = i32(gid.y) + dy; let x = i32(gid.x) + dx;
  var s = 0.0;
  if (y >= 0 && y < i32(d.h) && x >= 0 && x < i32(d.w)) {
    let j = u32(y) * d.w + u32(x);
    for (var c = 0u; c < d.c; c++) { s += a[c * n + i] * b[c * n + j]; }
  }
  o[gid.z * n + i] = s;
}`,qe=`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, mul: f32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.outW || gid.y >= d.outH) { return; }
  let sx = max((f32(gid.x) + 0.5) * f32(d.inW) / f32(d.outW) - 0.5, 0.0);
  let sy = max((f32(gid.y) + 0.5) * f32(d.inH) / f32(d.outH) - 0.5, 0.0);
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.inW - 1u); let y1 = min(y0 + 1u, d.inH - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = gid.z * d.inW * d.inH;
  let v = mix(mix(a[base + y0 * d.inW + x0], a[base + y0 * d.inW + x1], tx),
              mix(a[base + y1 * d.inW + x0], a[base + y1 * d.inW + x1], tx), ty);
  o[gid.z * d.outW * d.outH + gid.y * d.outW + gid.x] = v * d.mul;
}`;function We(o,e,i,n,s){let u=Array.from({length:s},(t,r)=>r);return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
@group(0) @binding(3) var<storage, read> a: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(${Y}, ${Y})
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let ox = gid.x; let oy = gid.y;
  if (ox >= d.outW || oy >= d.outH) { return; }
  let og = gid.z * ${s}u;
  if (og >= d.cout4) { return; }
  ${u.map(t=>`var a${t} = b[og + ${t}u];`).join(" ")}
  for (var ci = 0u; ci < ${o}u; ci++) {
    let base = ci * d.inH * d.inW;
    for (var ky = (oy + ${n}u) % ${i}u; ky < ${e}u; ky += ${i}u) {
      let ny = i32(oy) + ${n} - i32(ky);
      if (ny < 0) { continue; }
      let iy = u32(ny) / ${i}u;
      if (iy >= d.inH) { continue; }
      for (var kx = (ox + ${n}u) % ${i}u; kx < ${e}u; kx += ${i}u) {
        let nx = i32(ox) + ${n} - i32(kx);
        if (nx < 0) { continue; }
        let ix = u32(nx) / ${i}u;
        if (ix >= d.inW) { continue; }
        let v = a[base + iy * d.inW + ix];
        let wi = ci * ${e*e}u + ky * ${e}u + kx;
        ${u.map(t=>`a${t} += v * w[(og + ${t}u) * ${o*e*e}u + wi];`).join(" ")}
      }
    }
  }
  let plane = d.outW * d.outH; let pi = oy * d.outW + ox;
  ${u.map(t=>`{ let c0 = (og + ${t}u) * 4u; for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = a${t}[j]; } } }`).join(`
  `)}
}`}function He(o,e,i,n,s,u,t,r,a=!1){let l=e.reduce((z,c)=>z+c,0),d=i*i,f=e.map((z,c)=>`@group(0) @binding(${3+c}) var<storage, read> in${c}: array<f32>;`).join(`
`),p="",m=0;e.forEach((z,c)=>{p+=`${c?" else ":""}if (ci < ${m+z}u) { v = in${c}[(ci - ${m}u) * d.inH * d.inW + idx]; }`,m+=z});let S=a?`
  let svec = subgroupAdd(acc);
  let nSg = 64u / sgs;
  if (li % sgs == 0u) { part[li / sgs] = svec; }
  if (nSg > 1u) { workgroupBarrier(); }
  if (li == 0u) {
    var sum = part[0];
    for (var si = 1u; si < nSg; si++) { sum += part[si]; }
    var rv = sum + b[og];`:`
  part[li] = acc;
  workgroupBarrier();
  for (var st = 32u; st > 0u; st >>= 1u) {
    if (li < st) { part[li] += part[li + st]; }
    workgroupBarrier();
  }
  if (li == 0u) {
    var rv = part[0] + b[og];`;return`${a?`enable subgroups;
`:""}
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
${f}
${r?`@group(0) @binding(${3+o}) var<storage, read> rs: array<f32>;`:""}
@group(0) @binding(${3+o+(r?1:0)}) var<storage, read_write> o: array<f32>;
var<workgroup> part: array<vec4f, 64>;
@compute @workgroup_size(64)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_index) li: u32${a?", @builtin(subgroup_size) sgs: u32":""}) {
  let ox = wid.x; let oy = wid.y; let og = wid.z;
  var acc = vec4f(0.0);
  for (var t = li; t < ${l*d}u; t += 64u) {
    let ci = t / ${d}u; let r = t % ${d}u; let ky = r / ${i}u; let kx = r % ${i}u;
    let iy = i32(oy * ${n}u + ky) - ${s}; let ix = i32(ox * ${n}u + kx) - ${s};
    if (iy < 0 || iy >= i32(d.inH) || ix < 0 || ix >= i32(d.inW)) { continue; }
    let idx = u32(iy) * d.inW + u32(ix);
    var v = 0.0;
    ${p}
    acc += v * w[og * ${l*d}u + t];
  }
  ${S}
    let plane = d.outW * d.outH; let pi = oy * d.outW + ox; let c0 = og * 4u;
    ${r?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { rv[j] += rs[(c0 + j) * plane + pi]; } }":""}
    ${we("rv",u,t)}
    for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = rv[j]; } }
  }
}`}var Ne=1024,Ve=`
struct D { outW: u32, outH: u32, r: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.outW || gid.y >= d.outH) { return; }
  let inW = d.outW / d.r; let inH = d.outH / d.r;
  let ci = gid.z * d.r * d.r + (gid.y % d.r) * d.r + (gid.x % d.r);
  o[gid.z * d.outW * d.outH + gid.y * d.outW + gid.x] = a[ci * inW * inH + (gid.y / d.r) * inW + gid.x / d.r];
}`,Ce=`
struct D { n: u32, c0: u32, p0: u32, p1: u32, mul: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.y * d.n + gid.x] = a[(d.c0 + gid.y) * d.n + gid.x] * d.mul;
}`,Ke=`
struct D { n: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let i = gid.y * 65535u * 256u + gid.x;
  if (i >= d.n) { return; }
  o[i] = a[i] + b[i];
}`,Ye=`
struct D { n: u32, p0: u32, p1: u32, p2: u32, v: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.x] = d.v;
}`,Qe=`
struct D { n: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.x] = 1.0 / (1.0 + exp(-a[gid.x]));
}`,Xe=`
struct D { w: u32, h: u32, fc: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> fl: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  let sx = clamp(f32(gid.x) + fl[d.fc * n + i], 0.0, f32(d.w - 1u));
  let sy = clamp(f32(gid.y) + fl[(d.fc + 1u) * n + i], 0.0, f32(d.h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.w - 1u); let y1 = min(y0 + 1u, d.h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = gid.z * n;
  o[base + i] = mix(mix(a[base + y0 * d.w + x0], a[base + y0 * d.w + x1], tx),
                    mix(a[base + y1 * d.w + x0], a[base + y1 * d.w + x1], tx), ty);
}`,Ze=`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, r: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.outW || gid.y >= d.outH) { return; }
  let base = gid.z * d.inW * d.inH;
  var s = 0.0;
  for (var j = 0u; j < d.r; j++) {
    let row = base + (gid.y * d.r + j) * d.inW + gid.x * d.r;
    for (var i = 0u; i < d.r; i++) { s += a[row + i]; }
  }
  o[gid.z * d.outW * d.outH + gid.y * d.outW + gid.x] = s / f32(d.r * d.r);
}`,Je=`
struct D { w: u32, h: u32, k: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let base = gid.z * d.w * d.h;
  let hk = i32(d.k / 2u);
  var s = 0.0; var n = 0.0;
  for (var y = i32(gid.y) - hk; y <= i32(gid.y) + hk; y++) {
    if (y < 0 || y >= i32(d.h)) { continue; }
    for (var x = i32(gid.x) - hk; x <= i32(gid.x) + hk; x++) {
      if (x < 0 || x >= i32(d.w)) { continue; }
      s += a[base + u32(y) * d.w + u32(x)]; n += 1.0;
    }
  }
  let i = base + gid.y * d.w + gid.x;
  o[i] = a[i] - s / n;
}`,Q=8;function et(o){let e=2*o+1;return`
struct D { w: u32, h: u32, k: u32, p0: u32, penalty: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> base: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
var<workgroup> cost: array<f32, ${Q*e*e}>;
fn sub(cm: f32, c0: f32, cp: f32) -> f32 {
  let den = 2.0 * (max(cm, cp) - c0);
  if (den > 1e-9) { return clamp((cm - cp) / den, -0.5, 0.5); }
  return 0.0;
}
@compute @workgroup_size(${e}, ${Q})
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let cell = wid.x * ${Q}u + lid.y;        // cells in row-major order
  let n2 = d.w * d.h;
  let valid = cell < n2;
  let cx = i32(cell % d.w); let cy = i32(cell / d.w);
  let W = i32(d.w); let H = i32(d.h);
  let hk = i32(d.k / 2u);
  let dy = i32(lid.x) - ${o};
  let cb = lid.y * ${e*e}u + lid.x * ${e}u;
  if (valid) {
    var s: array<f32, ${e}>;
    var n = 0.0;
    for (var qy = cy - hk; qy <= cy + hk; qy++) {
      if (qy < 0 || qy >= H) { continue; }
      let by = u32(clamp(qy + dy, 0, H - 1)) * d.w;
      let ay = u32(qy) * d.w;
      for (var qx = cx - hk; qx <= cx + hk; qx++) {
        if (qx < 0 || qx >= W) { continue; }
        let av = a[ay + u32(qx)];
        n += 1.0;
        for (var j = 0; j < ${e}; j++) {
          s[j] += abs(av - b[by + u32(clamp(qx + j - ${o}, 0, W - 1))]);
        }
      }
    }
    for (var j = 0; j < ${e}; j++) {
      let dx = j - ${o};
      cost[cb + u32(j)] = s[j] / n + d.penalty * sqrt(f32(dx * dx + dy * dy));
    }
  }
  workgroupBarrier();
  if (!valid || lid.x != 0u) { return; }
  let c = lid.y * ${e*e}u;
  var best = 3.4e38; var bi = 0;
  for (var t = 0; t < ${e*e}; t++) {
    let v = cost[c + u32(t)];
    if (v < best) { best = v; bi = t; }
  }
  let iy = bi / ${e}; let ix = bi % ${e};
  let c0 = best;
  var cxm = c0; var cxp = c0; var cym = c0; var cyp = c0;
  if (ix > 0) { cxm = cost[c + u32(bi - 1)]; }
  if (ix < ${e-1}) { cxp = cost[c + u32(bi + 1)]; }
  if (iy > 0) { cym = cost[c + u32(bi - ${e})]; }
  if (iy < ${e-1}) { cyp = cost[c + u32(bi + ${e})]; }
  o[cell] = base[cell] + f32(ix - ${o}) + sub(cxm, c0, cxp);
  o[n2 + cell] = base[n2 + cell] + f32(iy - ${o}) + sub(cym, c0, cyp);
}`}var tt=`
struct D { w: u32, h: u32, p0: u32, p1: u32, sign: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> base: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  let half = vec2f(f32(gid.z % 2u), f32(gid.z / 2u)) * 0.5;
  let sx = clamp(f32(gid.x) + d.sign * (base[i] + half.x), 0.0, f32(d.w - 1u));
  let sy = clamp(f32(gid.y) + d.sign * (base[n + i] + half.y), 0.0, f32(d.h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.w - 1u); let y1 = min(y0 + 1u, d.h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  o[gid.z * n + i] = mix(mix(a[y0 * d.w + x0], a[y0 * d.w + x1], tx), mix(a[y1 * d.w + x0], a[y1 * d.w + x1], tx), ty);
}`;function it(o){let e=2*o+1;return`
struct D { w: u32, h: u32, k: u32, p0: u32, penalty: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> base: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
@group(0) @binding(5) var<storage, read_write> oc: array<f32>;
var<workgroup> cost: array<f32, ${Q*e*e}>;
fn sub(cm: f32, c0: f32, cp: f32) -> f32 {
  let den = 2.0 * (max(cm, cp) - c0);
  if (den > 1e-9) { return clamp((cm - cp) / den, -0.5, 0.5); }
  return 0.0;
}
fn par(m: i32) -> i32 { return ((m % 2) + 2) % 2; }
@compute @workgroup_size(${e}, ${Q})
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let cell = wid.x * ${Q}u + lid.y;
  let n2 = d.w * d.h;
  let valid = cell < n2;
  let cx = i32(cell % d.w); let cy = i32(cell / d.w);
  let W = i32(d.w); let H = i32(d.h);
  let hk = i32(d.k / 2u);
  let my = i32(lid.x) - ${o};
  let py = par(my); let ky = (my - py) / 2;
  let cb = lid.y * ${e*e}u + lid.x * ${e}u;
  if (valid) {
    var s: array<f32, ${e}>;
    var n = 0.0;
    for (var qy = cy - hk; qy <= cy + hk; qy++) {
      if (qy < 0 || qy >= H) { continue; }
      let ay = u32(clamp(qy - ky, 0, H - 1)) * d.w;
      let by = u32(clamp(qy + ky, 0, H - 1)) * d.w;
      for (var qx = cx - hk; qx <= cx + hk; qx++) {
        if (qx < 0 || qx >= W) { continue; }
        n += 1.0;
        for (var j = 0; j < ${e}; j++) {
          let mx = j - ${o};
          let px = par(mx); let kx = (mx - px) / 2;
          let ch = u32(py * 2 + px) * n2;
          s[j] += abs(a[ch + ay + u32(clamp(qx - kx, 0, W - 1))] - b[ch + by + u32(clamp(qx + kx, 0, W - 1))]);
        }
      }
    }
    for (var j = 0; j < ${e}; j++) {
      let mx = j - ${o};
      cost[cb + u32(j)] = s[j] / n + d.penalty * sqrt(f32(mx * mx + my * my));
    }
  }
  workgroupBarrier();
  if (!valid || lid.x != 0u) { return; }
  let c = lid.y * ${e*e}u;
  var best = 3.4e38; var bi = 0;
  for (var t = 0; t < ${e*e}; t++) {
    let v = cost[c + u32(t)];
    if (v < best) { best = v; bi = t; }
  }
  let iy = bi / ${e}; let ix = bi % ${e};
  let c0 = best;
  var cxm = c0; var cxp = c0; var cym = c0; var cyp = c0;
  if (ix > 0) { cxm = cost[c + u32(bi - 1)]; }
  if (ix < ${e-1}) { cxp = cost[c + u32(bi + 1)]; }
  if (iy > 0) { cym = cost[c + u32(bi - ${e})]; }
  if (iy < ${e-1}) { cyp = cost[c + u32(bi + ${e})]; }
  o[cell] = base[cell] + (f32(ix - ${o}) + sub(cxm, c0, cxp)) * 0.5;
  o[n2 + cell] = base[n2 + cell] + (f32(iy - ${o}) + sub(cym, c0, cyp)) * 0.5;
  oc[cell] = c0;
}`}function rt(o,e,i){let n=o*e,s=8*i+2*n,u=2*o+1;return`
struct D { w: u32, h: u32, r: u32, step: u32, cell: u32, p0: u32, p1: u32, p2: u32, mul: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
var<workgroup> ta: array<f32, ${s*s}>;
var<workgroup> tb: array<f32, ${s*s}>;
@compute @workgroup_size(8, 8)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let ow = d.w / ${i}u; let oh = d.h / ${i}u;
  let li = lid.y * 8u + lid.x;
  let gx = i32(wid.x * ${8*i}u) - ${n}; let gy = i32(wid.y * ${8*i}u) - ${n};
  for (var t = li; t < ${s*s}u; t += 64u) {
    let y = u32(clamp(gy + i32(t / ${s}u), 0, i32(d.h) - 1)); let x = u32(clamp(gx + i32(t % ${s}u), 0, i32(d.w) - 1));
    ta[t] = a[y * d.w + x]; tb[t] = b[y * d.w + x];
  }
  workgroupBarrier();
  let cx = wid.x * 8u + lid.x; let cy = wid.y * 8u + lid.y;
  if (cx >= ow || cy >= oh) { return; }
  for (var z = 0u; z < ${u*u}u; z++) {
    let dy = (i32(z / ${u}u) - ${o}) * ${e}; let dx = (i32(z % ${u}u) - ${o}) * ${e};
    var s = 0.0;
    for (var j = 0; j < ${i}; j++) {
      let y = i32(lid.y) * ${i} + j + ${n};
      let ay = u32(y + dy) * ${s}u; let by = u32(y - dy) * ${s}u;
      for (var i = 0; i < ${i}; i++) {
        let x = i32(lid.x) * ${i} + i + ${n};
        s += abs(ta[ay + u32(x + dx)] - tb[by + u32(x - dx)]);
      }
    }
    o[z * ow * oh + cy * ow + cx] = s / f32(${i*i}u) * d.mul;
  }
}`}var st=`
struct D { w: u32, h: u32, p0: u32, p1: u32, mul: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let base = gid.z * d.w * d.h;
  var p: array<f32, 9>;
  for (var j = 0; j < 3; j++) {
    let y = u32(clamp(i32(gid.y) + j - 1, 0, i32(d.h) - 1));
    for (var i = 0; i < 3; i++) {
      let x = u32(clamp(i32(gid.x) + i - 1, 0, i32(d.w) - 1));
      p[j * 3 + i] = a[base + y * d.w + x];
    }
  }
  ${[[1,2],[4,5],[7,8],[0,1],[3,4],[6,7],[1,2],[4,5],[7,8],[0,3],[5,8],[4,7],[3,6],[1,4],[2,5],[4,7],[4,2],[6,4],[4,2]].map(([o,e])=>`{ let lo = min(p[${o}], p[${e}]); p[${e}] = max(p[${o}], p[${e}]); p[${o}] = lo; }`).join(`
  `)}
  o[base + gid.y * d.w + gid.x] = p[4] * d.mul;
}`,nt=`
struct D { n: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> fwd: array<f32>;
@group(0) @binding(2) var<storage, read> bwd: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= 2u * d.n) { return; }
  let m = 0.25 * (bwd[gid.x] - fwd[gid.x]);
  o[gid.x] = m; o[2u * d.n + gid.x] = -m;
}`;function at(o,e=!1){let i=o*o,n=e?`
var<workgroup> part: array<vec4f, ${2*i}>;
var<private> slot = 0u;
fn sum4(l: u32, v: vec4f) -> vec4f {
  let s = subgroupAdd(v);
  let n = ${i}u / sgSize;
  let base = slot * ${i}u;
  slot = 1u - slot;
  if (l % sgSize == 0u) { part[base + l / sgSize] = s; }
  workgroupBarrier();
  var r = part[base];
  for (var i = 1u; i < n; i++) { r += part[base + i]; }
  return r;
}`:`
var<workgroup> red: array<vec4f, ${i}>;
fn sum4(l: u32, v: vec4f) -> vec4f {
  red[l] = v;
  workgroupBarrier();
  for (var s = ${i/2}u; s > 0u; s >>= 1u) {
    if (l < s) { red[l] += red[l + s]; }
    workgroupBarrier();
  }
  let r = red[0];
  workgroupBarrier();
  return r;
}`;return`${e?"enable subgroups;":""}
struct D { w: u32, h: u32, px: u32, py: u32, stride: u32, iters: u32, mean: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> init: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
${e?"var<private> sgSize: u32;":""}
fn A(x: i32, y: i32) -> f32 {
  return a[u32(clamp(y, 0, i32(d.h) - 1)) * d.w + u32(clamp(x, 0, i32(d.w) - 1))];
}
fn B(px: f32, py: f32) -> f32 {
  let sx = clamp(px, 0.0, f32(d.w - 1u)); let sy = clamp(py, 0.0, f32(d.h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.w - 1u); let y1 = min(y0 + 1u, d.h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  return mix(mix(b[y0 * d.w + x0], b[y0 * d.w + x1], tx), mix(b[y1 * d.w + x0], b[y1 * d.w + x1], tx), ty);
}
${n}
@compute @workgroup_size(${i})
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_index) l: u32${e?", @builtin(subgroup_size) sgs: u32":""}) {
  ${e?"sgSize = sgs;":""}
  let st = i32(d.stride);
  let x = i32(wid.x) * st + i32(l % ${o}u); let y = i32(wid.y) * st + i32(l / ${o}u);
  let mn = d.mean != 0u;
  let T = A(x, y);
  var gx = (A(x + 1, y - 1) + 2.0 * A(x + 1, y) + A(x + 1, y + 1) - A(x - 1, y - 1) - 2.0 * A(x - 1, y) - A(x - 1, y + 1)) / 8.0;
  var gy = (A(x - 1, y + 1) + 2.0 * A(x, y + 1) + A(x + 1, y + 1) - A(x - 1, y - 1) - 2.0 * A(x, y - 1) - A(x + 1, y - 1)) / 8.0;
  let gm = sum4(l, vec4f(gx, gy, 0.0, 0.0)) / ${i}.0;
  if (mn) { gx -= gm.x; gy -= gm.y; }
  let hs = sum4(l, vec4f(gx * gx, gx * gy, gy * gy, 0.0));
  var det = hs.x * hs.z - hs.y * hs.y;
  let ok = det > 1e-6 * (hs.x + hs.z) * (hs.x + hs.z) + 1e-6;
  if (!ok) { det = 1.0; }
  let n = d.w * d.h;
  let ci = u32(clamp(i32(wid.y) * st + ${o>>1}, 0, i32(d.h) - 1)) * d.w + u32(clamp(i32(wid.x) * st + ${o>>1}, 0, i32(d.w) - 1));
  let u0 = vec2f(init[ci], init[n + ci]);
  var u = u0;
  var bestU = u0; var bestE = 0.0;
  let fx = f32(x); let fy = f32(y);
  // iterations 0..iters-1 update u; the extra pass only scores the last u (as the PyTorch version)
  ${e?`// one sum per iteration: with m = mean(rr), sum((rr - m)^2) = sum(rr^2) - m sum(rr) and
  // sum(g (rr - m)) = sum(g rr) - m sum(g)
  let gs = sum4(l, vec4f(gx, gy, 0.0, 0.0));`:""}
  for (var it = 0u; it <= d.iters; it++) {
    let rr = B(fx + u.x, fy + u.y) - T;
    ${e?`let q = sum4(l, vec4f(rr, rr * rr, gx * rr, gy * rr));
    var s = q.yzw;
    if (mn) { let m = q.x / ${i}.0; s -= m * vec3f(q.x, gs.x, gs.y); }`:`let m = sum4(l, vec4f(rr, 0.0, 0.0, 0.0)).x / ${i}.0;
    let r = select(rr, rr - m, mn);
    let s = sum4(l, vec4f(r * r, gx * r, gy * r, 0.0));`}
    if (it == 0u || s.x < bestE) { bestE = s.x; bestU = u; }
    if (ok) { u -= vec2f(hs.z * s.y - hs.y * s.z, hs.x * s.z - hs.y * s.y) / det; }
  }
  if (length(bestU - u0) > ${o}.0) { bestU = u0; }
  if (l == 0u) {
    let pi = wid.y * d.px + wid.x;
    o[pi] = bestU.x; o[d.px * d.py + pi] = bestU.y;
  }
}`}var ot=`
struct D { w: u32, h: u32, px: u32, py: u32, stride: u32, psize: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> pf: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
fn B(px: f32, py: f32) -> f32 {
  let sx = clamp(px, 0.0, f32(d.w - 1u)); let sy = clamp(py, 0.0, f32(d.h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.w - 1u); let y1 = min(y0 + 1u, d.h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  return mix(mix(b[y0 * d.w + x0], b[y0 * d.w + x1], tx), mix(b[y1 * d.w + x0], b[y1 * d.w + x1], tx), ty);
}
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let x = i32(gid.x); let y = i32(gid.y);
  let st = i32(d.stride); let P = i32(d.psize);
  let i = gid.y * d.w + gid.x;
  let T = a[i];
  let np = d.px * d.py;
  var num = vec2f(0.0); var den = 0.0;
  for (var j = max(0, (y - P + st) / st); j <= min(i32(d.py) - 1, y / st); j++) {
    for (var k = max(0, (x - P + st) / st); k <= min(i32(d.px) - 1, x / st); k++) {
      let q = u32(j) * d.px + u32(k);
      let u = vec2f(pf[q], pf[np + q]);
      let wgt = 1.0 / max(1.0, abs(B(f32(x) + u.x, f32(y) + u.y) - T));
      num += wgt * u; den += wgt;
    }
  }
  let n = d.w * d.h;
  o[i] = num.x / den; o[n + i] = num.y / den;
}`;function ut(o,e){let i=2*o+1,n=i*i,s=8+2*o,u=Array.from({length:n},(d,f)=>f),t=u.map(d=>{let f=Math.floor(d/i)-o,p=d%i-o;return[d,f,p]}),r=u.map(d=>`var a${d} = 0.0;`).join(" "),a=t.map(([d,f,p])=>`a${d} += ta[u32(ly - (${f})) * ${s}u + u32(lx - (${p}))] * tb[u32(ly + (${f})) * ${s}u + u32(lx + (${p}))];`).join(`
    `),l=u.map(d=>{let f=e?`round(clamp(a${d} * inv, -1.0, 1.0) * 127.0) / 127.0`:`a${d} * inv`;return`o[${d}u * n + i] = ${f};`}).join(" ");return`
struct D { w: u32, h: u32, c: u32, r: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
var<workgroup> ta: array<f32, ${s*s}>;
var<workgroup> tb: array<f32, ${s*s}>;
@compute @workgroup_size(8, 8)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 8u + lid.x;
  let n = d.w * d.h;
  let gx = i32(wid.x * 8u) - ${o}; let gy = i32(wid.y * 8u) - ${o};
  let W = i32(d.w) - 1; let H = i32(d.h) - 1;
  ${r}
  for (var c = 0u; c < d.c; c++) {
    let base = c * n;
    for (var t = li; t < ${s*s}u; t += 64u) {
      let y = u32(clamp(gy + i32(t / ${s}u), 0, H));
      let x = u32(clamp(gx + i32(t % ${s}u), 0, W));
      let idx = base + y * d.w + x;
      ta[t] = a[idx]; tb[t] = b[idx];
    }
    workgroupBarrier();
    let ly = i32(lid.y) + ${o}; let lx = i32(lid.x) + ${o};
    ${a}
    workgroupBarrier();
  }
  let ox = wid.x * 8u + lid.x; let oy = wid.y * 8u + lid.y;
  if (ox >= d.w || oy >= d.h) { return; }
  let i = oy * d.w + ox; let inv = 1.0 / f32(d.c);
  ${l}
}`}var dt=`
struct D { n: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> wp: array<f32>;
@group(0) @binding(2) var<storage, read> wn: array<f32>;
@group(0) @binding(3) var<storage, read> fl: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) g: vec3u) {
  let i = g.y * 65535u * 256u + g.x;
  if (i >= d.n) { return; }
  let n = d.n;
  let r0 = wp[i]; let g0 = wp[n + i]; let b0 = wp[2u * n + i];
  let r1 = wn[i]; let g1 = wn[n + i]; let b1 = wn[2u * n + i];
  o[i] = r0 * 2.0 - 1.0;
  o[n + i] = g0 * 2.0 - 1.0;
  o[2u * n + i] = b0 * 2.0 - 1.0;
  o[3u * n + i] = r1 * 2.0 - 1.0;
  o[4u * n + i] = g1 * 2.0 - 1.0;
  o[5u * n + i] = b1 * 2.0 - 1.0;
  o[6u * n + i] = (abs(r0 - r1) + abs(g0 - g1) + abs(b0 - b1)) * (2.0 / 3.0);
  o[7u * n + i] = fl[i] * 0.0625;
  o[8u * n + i] = fl[n + i] * 0.0625;
  o[9u * n + i] = fl[2u * n + i] * 0.0625;
  o[10u * n + i] = fl[3u * n + i] * 0.0625;
}`,lt=`
struct D { w2: u32, h2: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> im0: array<f32>;
@group(0) @binding(2) var<storage, read> im1: array<f32>;
@group(0) @binding(3) var<storage, read> fl: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
fn sample0(c: u32, px: f32, py: f32, w: u32, h: u32, n: u32) -> f32 {
  let sx = clamp(px, 0.0, f32(w - 1u)); let sy = clamp(py, 0.0, f32(h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, w - 1u); let y1 = min(y0 + 1u, h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = c * n;
  return mix(mix(im0[base + y0 * w + x0], im0[base + y0 * w + x1], tx),
             mix(im0[base + y1 * w + x0], im0[base + y1 * w + x1], tx), ty);
}
fn sample1(c: u32, px: f32, py: f32, w: u32, h: u32, n: u32) -> f32 {
  let sx = clamp(px, 0.0, f32(w - 1u)); let sy = clamp(py, 0.0, f32(h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, w - 1u); let y1 = min(y0 + 1u, h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = c * n;
  return mix(mix(im1[base + y0 * w + x0], im1[base + y0 * w + x1], tx),
             mix(im1[base + y1 * w + x0], im1[base + y1 * w + x1], tx), ty);
}
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) g: vec3u) {
  if (g.x >= d.w2 || g.y >= d.h2) { return; }
  let w = d.w2 * 2u; let h = d.h2 * 2u;
  let n = w * h; let n2 = d.w2 * d.h2;
  let oIdx = g.y * d.w2 + g.x;
  var f0: f32 = 0.0; var f1: f32 = 0.0; var f2: f32 = 0.0; var f3: f32 = 0.0;
  for (var dy: u32 = 0u; dy < 2u; dy++) {
    let y = g.y * 2u + dy; let fy = f32(y);
    for (var dx: u32 = 0u; dx < 2u; dx++) {
      let x = g.x * 2u + dx; let fx = f32(x);
      let i = y * w + x;
      let sub = dy * 2u + dx;
      let u0 = fl[i]; let v0 = fl[n + i]; let u1 = fl[2u * n + i]; let v1 = fl[3u * n + i];
      f0 += u0; f1 += v0; f2 += u1; f3 += v1;
      let p0x = fx + u0; let p0y = fy + v0;
      let p1x = fx + u1; let p1y = fy + v1;
      let r0 = sample0(0u, p0x, p0y, w, h, n);
      let g0 = sample0(1u, p0x, p0y, w, h, n);
      let b0 = sample0(2u, p0x, p0y, w, h, n);
      let r1 = sample1(0u, p1x, p1y, w, h, n);
      let g1 = sample1(1u, p1x, p1y, w, h, n);
      let b1 = sample1(2u, p1x, p1y, w, h, n);
      o[(0u * 4u + sub) * n2 + oIdx] = r0 * 2.0 - 1.0;
      o[(1u * 4u + sub) * n2 + oIdx] = g0 * 2.0 - 1.0;
      o[(2u * 4u + sub) * n2 + oIdx] = b0 * 2.0 - 1.0;
      o[(3u * 4u + sub) * n2 + oIdx] = r1 * 2.0 - 1.0;
      o[(4u * 4u + sub) * n2 + oIdx] = g1 * 2.0 - 1.0;
      o[(5u * 4u + sub) * n2 + oIdx] = b1 * 2.0 - 1.0;
      o[(6u * 4u + sub) * n2 + oIdx] = (abs(r0 - r1) + abs(g0 - g1) + abs(b0 - b1)) * (2.0 / 3.0);
    }
  }
  o[28u * n2 + oIdx] = f0 * 0.015625;
  o[29u * n2 + oIdx] = f1 * 0.015625;
  o[30u * n2 + oIdx] = f2 * 0.015625;
  o[31u * n2 + oIdx] = f3 * 0.015625;
}`,ft=`
struct D { wr: u32, hr: u32, r: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> im0: array<f32>;
@group(0) @binding(2) var<storage, read> im1: array<f32>;
@group(0) @binding(3) var<storage, read> fl: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
fn sample0(c: u32, px: f32, py: f32, w: u32, h: u32, n: u32) -> f32 {
  let sx = clamp(px, 0.0, f32(w - 1u)); let sy = clamp(py, 0.0, f32(h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, w - 1u); let y1 = min(y0 + 1u, h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = c * n;
  return mix(mix(im0[base + y0 * w + x0], im0[base + y0 * w + x1], tx),
             mix(im0[base + y1 * w + x0], im0[base + y1 * w + x1], tx), ty);
}
fn sample1(c: u32, px: f32, py: f32, w: u32, h: u32, n: u32) -> f32 {
  let sx = clamp(px, 0.0, f32(w - 1u)); let sy = clamp(py, 0.0, f32(h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, w - 1u); let y1 = min(y0 + 1u, h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = c * n;
  return mix(mix(im1[base + y0 * w + x0], im1[base + y0 * w + x1], tx),
             mix(im1[base + y1 * w + x0], im1[base + y1 * w + x1], tx), ty);
}
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) g: vec3u) {
  if (g.x >= d.wr || g.y >= d.hr) { return; }
  let r = d.r; let rr = r * r;
  let w = d.wr * r; let h = d.hr * r;
  let n = w * h; let nr = d.wr * d.hr;
  let oIdx = g.y * d.wr + g.x;
  for (var dy: u32 = 0u; dy < r; dy++) {
    let y = g.y * r + dy; let fy = f32(y);
    for (var dx: u32 = 0u; dx < r; dx++) {
      let x = g.x * r + dx; let fx = f32(x);
      let i = y * w + x;
      let sub = dy * r + dx;
      let p0x = fx + fl[i]; let p0y = fy + fl[n + i];
      let p1x = fx + fl[2u * n + i]; let p1y = fy + fl[3u * n + i];
      let r0 = sample0(0u, p0x, p0y, w, h, n);
      let g0 = sample0(1u, p0x, p0y, w, h, n);
      let b0 = sample0(2u, p0x, p0y, w, h, n);
      let r1 = sample1(0u, p1x, p1y, w, h, n);
      let g1 = sample1(1u, p1x, p1y, w, h, n);
      let b1 = sample1(2u, p1x, p1y, w, h, n);
      o[(0u * rr + sub) * nr + oIdx] = r0 * 2.0 - 1.0;
      o[(1u * rr + sub) * nr + oIdx] = g0 * 2.0 - 1.0;
      o[(2u * rr + sub) * nr + oIdx] = b0 * 2.0 - 1.0;
      o[(3u * rr + sub) * nr + oIdx] = r1 * 2.0 - 1.0;
      o[(4u * rr + sub) * nr + oIdx] = g1 * 2.0 - 1.0;
      o[(5u * rr + sub) * nr + oIdx] = b1 * 2.0 - 1.0;
      o[(6u * rr + sub) * nr + oIdx] = (abs(r0 - r1) + abs(g0 - g1) + abs(b0 - b1)) * (2.0 / 3.0);
    }
  }
}`,ct=`
struct D { n: u32, p0: u32, p1: u32, p2: u32, v: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) g: vec3u) {
  let i = g.y * 65535u * 256u + g.x;
  if (i >= d.n) { return; }
  o[i] = clamp(a[i] + d.v, 0.0, 1.0);
}`,gt=`
struct D { w: u32, h: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> base: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) g: vec3u) {
  if (g.x >= d.w || g.y >= d.h) { return; }
  let w2 = d.w >> 1u; let n1 = d.w * d.h; let n2 = w2 * (d.h >> 1u);
  let i1 = g.y * d.w + g.x;
  let i2 = (g.y >> 1u) * w2 + (g.x >> 1u);
  let sub = (g.y & 1u) * 2u + (g.x & 1u);
  for (var c: u32 = 0u; c < 4u; c++) {
    o[c * n1 + i1] = base[c * n1 + i1] + a[(c * 4u + sub) * n2 + i2];
  }
}`,pt=`
struct D { w: u32, h: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) g: vec3u) {
  if (g.x >= d.w || g.y >= d.h) { return; }
  let w2 = d.w >> 1u; let n2 = w2 * (d.h >> 1u);
  let i1 = g.y * d.w + g.x;
  let i2 = (g.y >> 1u) * w2 + (g.x >> 1u);
  let sub = (g.y & 1u) * 2u + (g.x & 1u);
  let v = a[(16u + sub) * n2 + i2];
  o[i1] = 1.0 / (1.0 + exp(-v));
}`,ht=`
struct D { pw: u32, ph: u32, gw: u32, gh: u32, k: u32, fc: u32, gate: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> prev: array<f32>;
@group(0) @binding(2) var<storage, read> fa: array<f32>;
@group(0) @binding(3) var<storage, read> fb: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
fn samplePrev(chBase: u32, px: f32, py: f32) -> f32 {
  let sx = clamp(px, 0.0, f32(d.pw - 1u)); let sy = clamp(py, 0.0, f32(d.ph - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.pw - 1u); let y1 = min(y0 + 1u, d.ph - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  return mix(mix(prev[chBase + y0 * d.pw + x0], prev[chBase + y0 * d.pw + x1], tx),
             mix(prev[chBase + y1 * d.pw + x0], prev[chBase + y1 * d.pw + x1], tx), ty);
}
fn sampleFa(chBase: u32, px: f32, py: f32) -> f32 {
  let sx = clamp(px, 0.0, f32(d.gw - 1u)); let sy = clamp(py, 0.0, f32(d.gh - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.gw - 1u); let y1 = min(y0 + 1u, d.gh - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  return mix(mix(fa[chBase + y0 * d.gw + x0], fa[chBase + y0 * d.gw + x1], tx),
             mix(fa[chBase + y1 * d.gw + x0], fa[chBase + y1 * d.gw + x1], tx), ty);
}
fn sampleFb(chBase: u32, px: f32, py: f32) -> f32 {
  let sx = clamp(px, 0.0, f32(d.gw - 1u)); let sy = clamp(py, 0.0, f32(d.gh - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.gw - 1u); let y1 = min(y0 + 1u, d.gh - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  return mix(mix(fb[chBase + y0 * d.gw + x0], fb[chBase + y0 * d.gw + x1], tx),
             mix(fb[chBase + y1 * d.gw + x0], fb[chBase + y1 * d.gw + x1], tx), ty);
}
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.gw || gid.y >= d.gh) { return; }
  let pn = d.pw * d.ph;
  var s = vec2f(0.0);
  for (var jy = 0u; jy < d.k; jy++) {
    let fy = gid.y * d.k + jy;
    for (var jx = 0u; jx < d.k; jx++) {
      let fx = gid.x * d.k + jx;
      let pi = fy * d.pw + fx;
      let sx = f32(fx) - 2.0 * prev[pi];
      let sy = f32(fy) - 2.0 * prev[pn + pi];
      s.x += samplePrev(0u, sx, sy);
      s.y += samplePrev(pn, sx, sy);
    }
  }
  var d0 = s / f32(d.k * d.k * d.k);
  let gn = d.gw * d.gh; let gi = gid.y * d.gw + gid.x;
  if (d.gate != 0u) {
    let fx = f32(gid.x); let fy = f32(gid.y);
    var dot1 = 0.0; var na1 = 0.0; var nb1 = 0.0;
    var dot0 = 0.0; var na0 = 0.0; var nb0 = 0.0;
    for (var c = 0u; c < d.fc; c++) {
      let base = c * gn;
      let wp = sampleFa(base, fx - d0.x, fy - d0.y);
      let wn = sampleFb(base, fx + d0.x, fy + d0.y);
      dot1 += wp * wn; na1 += wp * wp; nb1 += wn * wn;
      let a0 = fa[base + gi]; let b0 = fb[base + gi];
      dot0 += a0 * b0; na0 += a0 * a0; nb0 += b0 * b0;
    }
    let c1 = dot1 / max(sqrt(na1) * sqrt(nb1), 1e-6);
    let c0 = dot0 / max(sqrt(na0) * sqrt(nb0), 1e-6);
    if (!(c1 > c0)) { d0 = vec2f(0.0); }
  }
  o[gi] = d0.x; o[gn + gi] = d0.y;
}`,mt=`
struct D { w: u32, h: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read_write> sa: array<f32>;
@group(0) @binding(4) var<storage, read_write> sb: array<f32>;
fn A(x: i32, y: i32) -> f32 { return a[u32(clamp(y, 0, i32(d.h) - 1)) * d.w + u32(clamp(x, 0, i32(d.w) - 1))]; }
fn B(x: i32, y: i32) -> f32 { return b[u32(clamp(y, 0, i32(d.h) - 1)) * d.w + u32(clamp(x, 0, i32(d.w) - 1))]; }
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let x = i32(gid.x); let y = i32(gid.y);
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  sa[i] = a[i];
  sa[n + i] = (A(x + 1, y - 1) + 2.0 * A(x + 1, y) + A(x + 1, y + 1) - A(x - 1, y - 1) - 2.0 * A(x - 1, y) - A(x - 1, y + 1)) / 8.0;
  sa[2u * n + i] = (A(x - 1, y + 1) + 2.0 * A(x, y + 1) + A(x + 1, y + 1) - A(x - 1, y - 1) - 2.0 * A(x, y - 1) - A(x + 1, y - 1)) / 8.0;
  sb[i] = b[i];
  sb[n + i] = (B(x + 1, y - 1) + 2.0 * B(x + 1, y) + B(x + 1, y + 1) - B(x - 1, y - 1) - 2.0 * B(x - 1, y) - B(x - 1, y + 1)) / 8.0;
  sb[2u * n + i] = (B(x - 1, y + 1) + 2.0 * B(x, y + 1) + B(x + 1, y + 1) - B(x - 1, y - 1) - 2.0 * B(x, y - 1) - B(x + 1, y - 1)) / 8.0;
}`,yt=`
struct D { w: u32, h: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> sa: array<f32>;
@group(0) @binding(2) var<storage, read> sb: array<f32>;
@group(0) @binding(3) var<storage, read> fl: array<f32>;
@group(0) @binding(4) var<storage, read_write> rg: array<f32>;
fn sample3A(px: f32, py: f32) -> vec3f {
  let sx = clamp(px, 0.0, f32(d.w - 1u)); let sy = clamp(py, 0.0, f32(d.h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.w - 1u); let y1 = min(y0 + 1u, d.h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let n = d.w * d.h;
  let i00 = y0 * d.w + x0; let i01 = y0 * d.w + x1; let i10 = y1 * d.w + x0; let i11 = y1 * d.w + x1;
  var r: vec3f;
  for (var c = 0u; c < 3u; c++) {
    let base = c * n;
    r[c] = mix(mix(sa[base + i00], sa[base + i01], tx), mix(sa[base + i10], sa[base + i11], tx), ty);
  }
  return r;
}
fn sample3B(px: f32, py: f32) -> vec3f {
  let sx = clamp(px, 0.0, f32(d.w - 1u)); let sy = clamp(py, 0.0, f32(d.h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.w - 1u); let y1 = min(y0 + 1u, d.h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let n = d.w * d.h;
  let i00 = y0 * d.w + x0; let i01 = y0 * d.w + x1; let i10 = y1 * d.w + x0; let i11 = y1 * d.w + x1;
  var r: vec3f;
  for (var c = 0u; c < 3u; c++) {
    let base = c * n;
    r[c] = mix(mix(sb[base + i00], sb[base + i01], tx), mix(sb[base + i10], sb[base + i11], tx), ty);
  }
  return r;
}
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  let dx = fl[i]; let dy = fl[n + i];
  let va = sample3A(f32(gid.x) - dx, f32(gid.y) - dy);
  let vb = sample3B(f32(gid.x) + dx, f32(gid.y) + dy);
  rg[i] = vb.x - va.x;
  rg[n + i] = vb.y + va.y;
  rg[2u * n + i] = vb.z + va.z;
}`;function bt(o){let e=8+2*o,i=2*o+1;return`
struct D { w: u32, h: u32, hw: u32, first: u32, robust: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> rg: array<f32>;
@group(0) @binding(2) var<storage, read> fl: array<f32>;
@group(0) @binding(3) var<storage, read_write> best: array<f32>;
@group(0) @binding(4) var<storage, read_write> wr: array<f32>;
var<workgroup> shR: array<f32, ${e*e}>;
var<workgroup> shH: array<vec2f, ${e*8}>;
@compute @workgroup_size(8, 8)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 8u + lid.x;
  let n = d.w * d.h;
  let bx = i32(wid.x * 8u) - ${o}; let by = i32(wid.y * 8u) - ${o};
  for (var t = li; t < ${e*e}u; t += 64u) {
    let gx = bx + i32(t % ${e}u); let gy = by + i32(t / ${e}u);
    var v = 0.0;
    if (gx >= 0 && gx < i32(d.w) && gy >= 0 && gy < i32(d.h)) { v = rg[u32(gy) * d.w + u32(gx)]; }
    shR[t] = v;
  }
  workgroupBarrier();
  for (var t = li; t < ${e*8}u; t += 64u) {
    let lx = t % 8u; let sy = t / 8u;
    let row = sy * ${e}u + lx;
    var acc = vec2f(0.0);
    for (var kx = 0u; kx < ${i}u; kx++) {
      let r = shR[row + kx];
      acc += vec2f(r, r * r);
    }
    shH[t] = acc;
  }
  workgroupBarrier();
  let ox = wid.x * 8u + lid.x; let oy = wid.y * 8u + lid.y;
  if (ox >= d.w || oy >= d.h) { return; }
  let x0 = max(0, i32(ox) - ${o}); let x1 = min(i32(d.w) - 1, i32(ox) + ${o});
  let y0 = max(0, i32(oy) - ${o}); let y1 = min(i32(d.h) - 1, i32(oy) + ${o});
  let cnt = f32((x1 - x0 + 1) * (y1 - y0 + 1));
  var acc = vec2f(0.0);
  for (var ky = 0u; ky < ${i}u; ky++) { acc += shH[(lid.y + ky) * 8u + lid.x]; }
  let mr = acc.x / cnt;
  let e = acc.y / cnt - mr * mr;
  let i = oy * d.w + ox;
  if (d.first != 0u || e < best[2u * n + i]) {
    best[i] = fl[i];
    best[n + i] = fl[n + i];
    best[2u * n + i] = e;
  }
  wr[i] = select(1.0, 1.0 / max(1.0, abs(rg[i] - mr)), d.robust != 0u);
}`}function xt(o){let e=8+2*o,i=2*o+1;return`
struct D { w: u32, h: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> rg: array<f32>;
@group(0) @binding(2) var<storage, read> wr: array<f32>;
@group(0) @binding(3) var<storage, read> flIn: array<f32>;
@group(0) @binding(4) var<storage, read_write> flOut: array<f32>;
var<workgroup> shV: array<vec4f, ${e*e}>;
var<workgroup> shH0: array<vec4f, ${e*8}>;
var<workgroup> shH1: array<vec4f, ${e*8}>;
var<workgroup> shH2: array<f32, ${e*8}>;
@compute @workgroup_size(8, 8)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 8u + lid.x;
  let n = d.w * d.h;
  let bx = i32(wid.x * 8u) - ${o}; let by = i32(wid.y * 8u) - ${o};
  for (var t = li; t < ${e*e}u; t += 64u) {
    let gx = bx + i32(t % ${e}u); let gy = by + i32(t / ${e}u);
    var v = vec4f(0.0);
    if (gx >= 0 && gx < i32(d.w) && gy >= 0 && gy < i32(d.h)) {
      let j = u32(gy) * d.w + u32(gx);
      v = vec4f(wr[j], rg[j], rg[n + j], rg[2u * n + j]);
    }
    shV[t] = v;
  }
  workgroupBarrier();
  for (var t = li; t < ${e*8}u; t += 64u) {
    let lx = t % 8u; let sy = t / 8u;
    let row = sy * ${e}u + lx;
    var a0 = vec4f(0.0); var a1 = vec4f(0.0); var a2 = 0.0;
    for (var kx = 0u; kx < ${i}u; kx++) {
      let v = shV[row + kx]; // [w, r, gx, gy]
      let w = v.x; let r = v.y; let gx = v.z; let gy = v.w;
      let wgx = w * gx; let wgy = w * gy;
      a0 += vec4f(w, wgx, wgy, w * r);
      a1 += vec4f(wgx * gx, wgx * gy, wgy * gy, wgx * r);
      a2 += wgy * r;
    }
    shH0[t] = a0; shH1[t] = a1; shH2[t] = a2;
  }
  workgroupBarrier();
  let ox = wid.x * 8u + lid.x; let oy = wid.y * 8u + lid.y;
  if (ox >= d.w || oy >= d.h) { return; }
  let x0 = max(0, i32(ox) - ${o}); let x1 = min(i32(d.w) - 1, i32(ox) + ${o});
  let y0 = max(0, i32(oy) - ${o}); let y1 = min(i32(d.h) - 1, i32(oy) + ${o});
  let cnt = f32((x1 - x0 + 1) * (y1 - y0 + 1));
  var a0 = vec4f(0.0); var a1 = vec4f(0.0); var a2 = 0.0;
  for (var ky = 0u; ky < ${i}u; ky++) {
    let idx = (lid.y + ky) * 8u + lid.x;
    a0 += shH0[idx]; a1 += shH1[idx]; a2 += shH2[idx];
  }
  let den = max(a0.x / cnt, 1e-6);
  let inv = 1.0 / (cnt * den);
  let mx = a0.y * inv; let my = a0.z * inv; let mr2 = a0.w * inv;
  let hxx = a1.x * inv - mx * mx;
  let hxy = a1.y * inv - mx * my;
  let hyy = a1.z * inv - my * my;
  let bxx = a1.w * inv - mx * mr2;
  let byy = a2 * inv - my * mr2;
  let det = hxx * hyy - hxy * hxy;
  let tr = hxx + hyy;
  var st = vec2f(0.0);
  if (det > 1e-3 * tr * tr && tr > 1e-2) {
    st = vec2f(-(hyy * bxx - hxy * byy) / det, -(hxx * byy - hxy * bxx) / det);
    st *= 1.0 / max(length(st), 1.0);
  }
  let i = oy * d.w + ox;
  flOut[i] = flIn[i] + st.x;
  flOut[n + i] = flIn[n + i] + st.y;
}`}var wt=`
struct D { w: u32, h: u32, hw: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> rg: array<f32>;
@group(0) @binding(2) var<storage, read_write> eh: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let row = gid.y * d.w;
  let hw = i32(d.hw); let x0 = max(0, i32(gid.x) - hw); let x1 = min(i32(d.w) - 1, i32(gid.x) + hw);
  var sr = 0.0; var srr = 0.0;
  for (var x = x0; x <= x1; x++) {
    let r = rg[row + u32(x)];
    sr += r; srr += r * r;
  }
  let i = row + gid.x;
  eh[i] = sr; eh[n + i] = srr;
}`,vt=`
struct D { w: u32, h: u32, hw: u32, first: u32, robust: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> eh: array<f32>;
@group(0) @binding(2) var<storage, read> rg: array<f32>;
@group(0) @binding(3) var<storage, read> fl: array<f32>;
@group(0) @binding(4) var<storage, read_write> best: array<f32>;
@group(0) @binding(5) var<storage, read_write> wr: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  let hw = i32(d.hw);
  let x0 = max(0, i32(gid.x) - hw); let x1 = min(i32(d.w) - 1, i32(gid.x) + hw);
  let y0 = max(0, i32(gid.y) - hw); let y1 = min(i32(d.h) - 1, i32(gid.y) + hw);
  let cnt = f32((x1 - x0 + 1) * (y1 - y0 + 1));
  var sr = 0.0; var srr = 0.0;
  for (var y = y0; y <= y1; y++) {
    let j = u32(y) * d.w + gid.x;
    sr += eh[j]; srr += eh[n + j];
  }
  let mr = sr / cnt;
  let e = srr / cnt - mr * mr;
  if (d.first != 0u || e < best[2u * n + i]) {
    best[i] = fl[i];
    best[n + i] = fl[n + i];
    best[2u * n + i] = e;
  }
  wr[i] = select(1.0, 1.0 / max(1.0, abs(rg[i] - mr)), d.robust != 0u);
}`,$t=`
struct D { w: u32, h: u32, hw: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> rg: array<f32>;
@group(0) @binding(2) var<storage, read> wr: array<f32>;
@group(0) @binding(3) var<storage, read_write> bh: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let row = gid.y * d.w;
  let hw = i32(d.hw); let x0 = max(0, i32(gid.x) - hw); let x1 = min(i32(d.w) - 1, i32(gid.x) + hw);
  var s0 = 0.0; var s1 = 0.0; var s2 = 0.0; var s3 = 0.0;
  var s4 = 0.0; var s5 = 0.0; var s6 = 0.0; var s7 = 0.0; var s8 = 0.0;
  for (var x = x0; x <= x1; x++) {
    let j = row + u32(x);
    let w = wr[j];
    let r = rg[j]; let gx = rg[n + j]; let gy = rg[2u * n + j];
    let wgx = w * gx; let wgy = w * gy;
    s0 += w; s1 += wgx; s2 += wgy; s3 += w * r;
    s4 += wgx * gx; s5 += wgx * gy; s6 += wgy * gy; s7 += wgx * r; s8 += wgy * r;
  }
  let i = row + gid.x;
  bh[i] = s0; bh[n + i] = s1; bh[2u * n + i] = s2; bh[3u * n + i] = s3;
  bh[4u * n + i] = s4; bh[5u * n + i] = s5; bh[6u * n + i] = s6; bh[7u * n + i] = s7; bh[8u * n + i] = s8;
}`,_t=`
struct D { w: u32, h: u32, hw: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> bh: array<f32>;
@group(0) @binding(2) var<storage, read> flIn: array<f32>;
@group(0) @binding(3) var<storage, read_write> flOut: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  let hw = i32(d.hw);
  let x0 = max(0, i32(gid.x) - hw); let x1 = min(i32(d.w) - 1, i32(gid.x) + hw);
  let y0 = max(0, i32(gid.y) - hw); let y1 = min(i32(d.h) - 1, i32(gid.y) + hw);
  let cnt = f32((x1 - x0 + 1) * (y1 - y0 + 1));
  var s0 = 0.0; var s1 = 0.0; var s2 = 0.0; var s3 = 0.0;
  var s4 = 0.0; var s5 = 0.0; var s6 = 0.0; var s7 = 0.0; var s8 = 0.0;
  for (var y = y0; y <= y1; y++) {
    let j = u32(y) * d.w + gid.x;
    s0 += bh[j]; s1 += bh[n + j]; s2 += bh[2u * n + j]; s3 += bh[3u * n + j];
    s4 += bh[4u * n + j]; s5 += bh[5u * n + j]; s6 += bh[6u * n + j]; s7 += bh[7u * n + j]; s8 += bh[8u * n + j];
  }
  let den = max(s0 / cnt, 1e-6);
  let inv = 1.0 / (cnt * den);
  let mx = s1 * inv; let my = s2 * inv; let mr2 = s3 * inv;
  let hxx = s4 * inv - mx * mx;
  let hxy = s5 * inv - mx * my;
  let hyy = s6 * inv - my * my;
  let bx = s7 * inv - mx * mr2;
  let by = s8 * inv - my * mr2;
  let det = hxx * hyy - hxy * hxy;
  let tr = hxx + hyy;
  var st = vec2f(0.0);
  if (det > 1e-3 * tr * tr && tr > 1e-2) {
    st = vec2f(-(hyy * bx - hxy * by) / det, -(hxx * by - hxy * bx) / det);
    let nrm = length(st);
    st *= 1.0 / max(nrm, 1.0);
  }
  flOut[i] = flIn[i] + st.x;
  flOut[n + i] = flIn[n + i] + st.y;
}`,Pt=`
struct D { w: u32, h: u32, s: u32, p0: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> best: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
fn sampleA(px: f32, py: f32) -> f32 {
  let sx = clamp(px, 0.0, f32(d.w - 1u)); let sy = clamp(py, 0.0, f32(d.h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.w - 1u); let y1 = min(y0 + 1u, d.h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  return mix(mix(a[y0 * d.w + x0], a[y0 * d.w + x1], tx), mix(a[y1 * d.w + x0], a[y1 * d.w + x1], tx), ty);
}
fn sampleB(px: f32, py: f32) -> f32 {
  let sx = clamp(px, 0.0, f32(d.w - 1u)); let sy = clamp(py, 0.0, f32(d.h - 1u));
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, d.w - 1u); let y1 = min(y0 + 1u, d.h - 1u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  return mix(mix(b[y0 * d.w + x0], b[y0 * d.w + x1], tx), mix(b[y1 * d.w + x0], b[y1 * d.w + x1], tx), ty);
}
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.w || gid.y >= d.h) { return; }
  let n = d.w * d.h; let i = gid.y * d.w + gid.x;
  let x = i32(gid.x); let y = i32(gid.y);
  let W = i32(d.w) - 1; let H = i32(d.h) - 1;
  let s = i32(d.s);
  var num = vec2f(0.0); var den = 0.0;
  for (var ky = -1; ky <= 1; ky++) {
    let qy = u32(clamp(y + ky * s, 0, H)) * d.w;
    for (var kx = -1; kx <= 1; kx++) {
      let qi = qy + u32(clamp(x + kx * s, 0, W));
      let c = vec2f(best[qi], best[n + qi]);
      let wgt = 1.0 / max(1.0, abs(sampleB(f32(x) + c.x, f32(y) + c.y) - sampleA(f32(x) - c.x, f32(y) - c.y)));
      num += wgt * c; den += wgt;
    }
  }
  o[i] = num.x / den; o[n + i] = num.y / den;
}`,ee=class o{constructor(e,i,n,s,u,t,r={}){this.device=e;this.ir=i;this.weights=n;this.w=s;this.h=u;this.cfg=t;this.opts=r}device;ir;weights;w;h;cfg;opts;kind="wgsl";bufs=new Map;steps=[];stepsCached=[];cachePairs=[];owned=[];pipeCache=new Map;get hasFrameCache(){return this.cachePairs.length>0}convCfgs={};external=new Set;static async create(e,i,n,s,u,t,r){if(s%32||u%32)throw new Error("input size must be a multiple of 32");let a=new o(e,i,n,s,u,t,r);for(let[l,d]of Object.entries(i.tensors)){let f=d.c*(u/d.s)*(s/d.s);a.bufs.set(l,a.buffer(f*4,l))}return a}buffer(e,i,n=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let s=this.device.createBuffer({size:Math.max(16,Math.ceil(e/16)*16),usage:n,label:i});return this.owned.push(s),s}uniform(e,i=[]){let n=this.buffer(32,"dims",GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),s=new ArrayBuffer(32);return new Uint32Array(s,0,8).set(e),i.length&&new Float32Array(s,16,4).set(i),this.device.queue.writeBuffer(n,0,s),n}pipeline(e){let i=this.pipeCache.get(e);return i||(i=this.device.createComputePipelineAsync({layout:"auto",compute:{module:this.device.createShaderModule({code:e}),entryPoint:"main"}}),this.pipeCache.set(e,i)),i}dims(e){let i=this.ir.tensors[e];return{c:i.c,w:this.w/i.s,h:this.h/i.s}}async bind(e,i){this.bufs.set("flow",i),this.external.add("flow"),await this.build(e)}async bindNamed(e){for(let[i,n]of Object.entries(e))this.bufs.set(i,n),this.external.add(i);await this.build([])}async build(e){let i=this.device,n=this.ir,s=0,u,t=!1,r=(g,h,_)=>{this.steps.push({pipe:g,wg:_,op:s,label:u,img0Only:t,bind:i.createBindGroup({layout:g.getBindGroupLayout(0),entries:h.map((y,P)=>({binding:P,resource:{buffer:y}}))})})},a=this.opts.fuse??!0,l=a?Fe(n,this.weights,this.w,this.h):[],d=new Set(l.flatMap(g=>g.ops)),f=l.map(g=>({ops:g.ops,reads:g.reads,writes:g.ops.flatMap(h=>ie(n.ops[h])),group:g}));n.ops.forEach((g,h)=>{d.has(h)||f.push({ops:[h],reads:ae(g),writes:ie(g)})});let p=new Set(f.flatMap(g=>g.writes)),m=new Set(this.external);for(let g of f)for(let h of g.writes)f.some(_=>_!==g&&_.reads.includes(h))&&m.add(h);let S=new Set,z=f.sort((g,h)=>Math.min(...g.ops)-Math.min(...h.ops)),c=[];for(;z.length;){let g=z.findIndex(_=>_.reads.every(y=>S.has(y)||!p.has(y)));if(g<0)throw new Error("fusion: no schedulable op");let[h]=z.splice(g,1);c.push(h),h.writes.forEach(_=>S.add(_))}let w=new Map([["img0","img0"],["img1","img1"]]),v=new Map([["img0","SRC"],["img1","SRC"]]),b=new Map;n.ops.forEach((g,h)=>{for(let _ of ie(g))b.set(_,h)});let x=g=>{let h=ae(g);if(!h.length)return"mixed";let _;for(let y of h){let P=w.get(y)??"mixed";if(P==="mixed"||_&&_!==P)return"mixed";_=P}return _??"mixed"},B=g=>{if(v.has(g))return v.get(g);let h=b.get(g);if(h===void 0)return`EXT:${g}`;let _=n.ops[h],y=n.tensors[g],P=ae(_).map(B).join(","),C=_.op==="conv"?`conv(${_.cin},${_.cout},${_.k},${_.s},${_.p},${_.act},${_.w},${_.b},${y.c},${y.s};${P})`:_.op==="pool"?`pool(${_.r},${y.c},${y.s};${P})`:`op(${_.op},${h})`;return v.set(g,C),C};for(let g of n.ops){let h=x(g);for(let _ of ie(g))w.set(_,h)}let F=new Set;for(let g of c)g.writes.length&&g.writes.every(h=>w.get(h)==="img0")&&g.reads.every(h=>w.get(h)==="img0")&&F.add(g);let G=new Set;for(let g of c)if(!F.has(g))for(let h of g.reads)w.get(h)==="img0"&&G.add(h);let A=new Map;for(let g of p)w.get(g)==="img1"&&A.set(B(g),g);let E=[],k=F.size>0&&G.size>0;for(let g of G){let h=A.get(B(g));if(!h||!m.has(g)){k=!1;break}let _=this.bufs.get(g),y=this.bufs.get(h);if(!_||!y||_.size!==y.size){k=!1;break}m.add(h),E.push([y,_])}for(let g of c)if(s=Math.min(...g.ops),u=g.group?.label,t=k&&F.has(g),g.group)for(let h of g.group.kernels(m))r(await this.pipeline(h.code),h.bufs.map(_=>this.bufs.get(_)),h.wg);else if(a&&n.ops[s].op==="fill"){let h=n.ops[s],_=this.dims(h.out);i.queue.writeBuffer(this.bufs.get(h.out),0,new Float32Array(_.c*_.w*_.h).fill(h.v??0))}else await this.buildOp(s,e,r);k?(this.cachePairs=E,this.stepsCached=this.steps.filter(g=>!g.img0Only)):(this.cachePairs=[],this.stepsCached=this.steps)}async buildOp(e,i,n){let s=this.device,u=(r,a)=>Math.ceil(r/a),t=this.ir.ops[e];if(t.op==="prep"){let r=await this.pipeline(Le);n(r,[this.uniform([this.w,this.h]),...i,...["x","x0","x1","x2"].map(a=>this.bufs.get(a))],[u(this.w,16),u(this.h,16),1])}else if(t.op==="conv"){let r=t.in,a=r.map(k=>this.ir.tensors[k].c),l=this.dims(r[0]),d=this.dims(t.out),f=Math.ceil(t.cout/4),p=Me(d.w,d.h,f,t.k),[m,S]=this.cfg?this.cfg(e,p):p;this.convCfgs[e]=[m,S];let z=t.k,c=t.cin,w=z*z,v=new Float32Array(f*c*w*4);for(let k=0;k<t.cout;k++)for(let g=0;g<c;g++)for(let h=0;h<w;h++)v[((Math.floor(k/4)*c+g)*w+h)*4+k%4]=this.weights[t.w+(k*c+g)*w+h];let b=new Float32Array(f*4);b.set(this.weights.subarray(t.b,t.b+t.cout));let x=t.act??"none",B=d.w*d.h,F=B<=Ne&&!this.cfg,G=this.buffer(v.byteLength,`${t.out}-w`),A=this.buffer(b.byteLength,`${t.out}-b`);s.queue.writeBuffer(G,0,v),s.queue.writeBuffer(A,0,b);let E=[this.uniform([l.w,l.h,d.w,d.h,t.cout,f]),G,A,...r.map(k=>this.bufs.get(k)),...t.res?[this.bufs.get(t.res)]:[],this.bufs.get(t.out)];if(F){let k=this.device.features.has("subgroups")&&(this.opts.subgroups??!0),g=await this.pipeline(He(r.length,a,z,t.s,t.p,x,t.slope??.1,!!t.res,k));n(g,E,[d.w,d.h,f])}else if(!this.cfg&&z===3&&t.s===1&&t.p===1&&f<=4&&c>=4){let k=B>=3e4?f:1,g=await this.pipeline(Re(r.length,a,k,x,t.slope??.1,!!t.res));n(g,E,[u(d.w,8),u(d.h,8),u(f,k)])}else{let k=!this.cfg&&z===1&&t.s===1&&t.p===0&&f<=4&&c>=16?f:S,g=await this.pipeline(Ae(r.length,a,z,t.s,t.p,k,x,m,t.slope??.1,!!t.res));n(g,E,[u(d.w,Y*m),u(d.h,Y),u(f,k)])}}else if(t.op==="pool2"){let r=this.dims(t.in),a=this.dims(t.out);n(await this.pipeline(je),[this.uniform([r.w,r.h,a.w,a.h,r.c]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(a.w,8),u(a.h,8),r.c])}else if(t.op==="norm"){let r=this.dims(t.in);n(await this.pipeline(Ie),[this.uniform([r.w,r.h,r.c]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="corr"){let r=this.dims(t.a),a=t.r,l=t.b;n(await this.pipeline(Oe),[this.uniform([r.w,r.h,r.c,a]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),(2*a+1)**2])}else if(t.op==="resize"){let r=this.dims(t.in),a=this.dims(t.like??t.out);n(await this.pipeline(qe),[this.uniform([r.w,r.h,a.w,a.h],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(a.w,8),u(a.h,8),r.c])}else if(t.op==="deconv"){let r=this.dims(t.in),a=this.dims(t.out),l=Math.ceil(t.cout/4),d=Math.min(2,l),f=t.k,p=t.cin,m=t.cout,S=f*f,z=new Float32Array(l*p*S*4);for(let b=0;b<p;b++)for(let x=0;x<m;x++)for(let B=0;B<S;B++)z[((Math.floor(x/4)*p+b)*S+B)*4+x%4]=this.weights[t.w+(b*m+x)*S+B];let c=new Float32Array(l*4);c.set(this.weights.subarray(t.b,t.b+m));let w=this.buffer(z.byteLength,`${t.out}-w`),v=this.buffer(c.byteLength,`${t.out}-b`);s.queue.writeBuffer(w,0,z),s.queue.writeBuffer(v,0,c),n(await this.pipeline(We(p,f,t.s,t.p,d)),[this.uniform([r.w,r.h,a.w,a.h,m,l]),w,v,this.bufs.get(t.in),this.bufs.get(t.out)],[u(a.w,Y),u(a.h,Y),u(l,d)])}else if(t.op==="pixshuffle"){let r=this.dims(t.out);n(await this.pipeline(Ve),[this.uniform([r.w,r.h,t.r]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),r.c])}else if(t.op==="slice"){let r=this.dims(t.out),a=r.w*r.h;n(await this.pipeline(Ce),[this.uniform([a,t.c0??0],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(a,256),r.c,1])}else if(t.op==="warp"){let r=this.dims(t.in);n(await this.pipeline(Xe),[this.uniform([r.w,r.h,t.fc??0]),this.bufs.get(t.in),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),r.c])}else if(t.op==="add"){let r=this.dims(t.out),a=r.c*r.w*r.h,l=t.b;n(await this.pipeline(Ke),[this.uniform([a]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[Math.min(65535,u(a,256)),u(a,256*65535),1])}else if(t.op==="fill"){let r=this.dims(t.out),a=r.c*r.w*r.h;n(await this.pipeline(Ye),[this.uniform([a],[t.v??0]),this.bufs.get(t.out)],[u(a,256),1,1])}else if(t.op==="sigmoid"){let r=this.dims(t.out),a=r.c*r.w*r.h;n(await this.pipeline(Qe),[this.uniform([a]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(a,256),1,1])}else if(t.op==="pool"){let r=this.dims(t.in),a=this.dims(t.out);n(await this.pipeline(Ze),[this.uniform([r.w,r.h,a.w,a.h,t.r]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(a.w,8),u(a.h,8),r.c])}else if(t.op==="zmean"){let r=this.dims(t.in);n(await this.pipeline(Je),[this.uniform([r.w,r.h,t.k]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),r.c])}else if(t.op==="bmatch"){let r=this.dims(t.a),a=t.b;n(await this.pipeline(et(t.r)),[this.uniform([r.w,r.h,t.k],[t.penalty??0]),this.bufs.get(t.a),this.bufs.get(a),this.bufs.get(t.base),this.bufs.get(t.out)],[u(r.w*r.h,Q),1,1])}else if(t.op==="biwarp"){let r=this.dims(t.in);n(await this.pipeline(tt),[this.uniform([r.w,r.h],[t.sign??1]),this.bufs.get(t.in),this.bufs.get(t.base),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),4])}else if(t.op==="bimatch"){let r=this.dims(t.a),a=t.b;n(await this.pipeline(it(t.r)),[this.uniform([r.w,r.h,t.k],[t.penalty??0]),this.bufs.get(t.a),this.bufs.get(a),this.bufs.get(t.base),this.bufs.get(t.out),this.bufs.get(t.cost)],[u(r.w*r.h,Q),1,1])}else if(t.op==="rescost"){let r=this.dims(t.a),a=this.dims(t.out),l=t.b,d=this.buffer(48,"dims",GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),f=new ArrayBuffer(48);new Uint32Array(f,0,5).set([r.w,r.h,t.r,t.step,t.cell]),new Float32Array(f,32,1).set([t.mul??1]),s.queue.writeBuffer(d,0,f),n(await this.pipeline(rt(t.r,t.step,t.cell)),[d,this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(a.w,8),u(a.h,8),1])}else if(t.op==="median3"){let r=this.dims(t.in);n(await this.pipeline(st),[this.uniform([r.w,r.h],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),r.c])}else if(t.op==="midflow"){let r=this.dims(t.fwd),a=r.w*r.h;n(await this.pipeline(nt),[this.uniform([a]),this.bufs.get(t.fwd),this.bufs.get(t.bwd),this.bufs.get(t.out)],[u(2*a,256),1,1])}else if(t.op==="dis"){let r=this.dims(t.a),a=t.patch,l=t.stride;if(a&a-1||a>16)throw new Error(`dis: patch ${a} must be a power of two <= 16`);let d=Math.max(0,Math.ceil((r.w-a)/l))+1,f=Math.max(0,Math.ceil((r.h-a)/l))+1,p=this.buffer(2*d*f*4,`${t.out}-patch`),m=this.bufs.get(t.a),S=this.bufs.get(t.b),z=this.device.features.has("subgroups")&&(this.opts.subgroups??!0);n(await this.pipeline(at(a,z)),[this.uniform([r.w,r.h,d,f,l,t.iters,t.mean??1]),m,S,this.bufs.get(t.init),p],[d,f,1]),n(await this.pipeline(ot),[this.uniform([r.w,r.h,d,f,l,a]),m,S,p,this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="bicorr"){let r=this.dims(t.a),a=t.r,l=t.b;n(await this.pipeline(ut(a,!!t.q8)),[this.uniform([r.w,r.h,r.c,a]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="refine_in"){let r=this.dims(t.a),a=r.w*r.h,l=t.b;n(await this.pipeline(dt),[this.uniform([a]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.flow),this.bufs.get(t.out)],[Math.min(65535,u(a,256)),u(a,256*65535),1])}else if(t.op==="refine_s2d_in"){let r=this.dims(t.out),a=t.b;n(await this.pipeline(lt),[this.uniform([r.w,r.h]),this.bufs.get(t.a),this.bufs.get(a),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="refine_up_in"){let r=this.dims(t.out),a=t.b;n(await this.pipeline(ft),[this.uniform([r.w,r.h,t.r]),this.bufs.get(t.a),this.bufs.get(a),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="addclamp"){let r=this.dims(t.out),a=r.c*r.w*r.h;n(await this.pipeline(ct),[this.uniform([a],[t.v??0]),this.bufs.get(t.in),this.bufs.get(t.out)],[Math.min(65535,u(a,256)),u(a,256*65535),1])}else if(t.op==="ps2_flow"){let r=this.dims(t.out);n(await this.pipeline(gt),[this.uniform([r.w,r.h]),this.bufs.get(t.in),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="ps2_mask"){let r=this.dims(t.out);n(await this.pipeline(pt),[this.uniform([r.w,r.h]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="tinit"){let r=this.dims(t.prev),a=this.dims(t.out),l=this.dims(t.a),d=t.b,f=r.w/a.w;n(await this.pipeline(ht),[this.uniform([r.w,r.h,a.w,a.h,f,l.c,t.gate??1]),this.bufs.get(t.prev),this.bufs.get(t.a),this.bufs.get(d),this.bufs.get(t.out)],[u(a.w,8),u(a.h,8),1])}else if(t.op==="lk"){let r=this.dims(t.a),a=r.w*r.h,l=Math.floor((t.win??9)/2),d=t.iters??4,f=t.robust??1,p=t.dense??1,m=[u(r.w,8),u(r.h,8),1],S=this.bufs.get(t.a),z=this.bufs.get(t.b),c=this.buffer(3*a*4,`${t.out}-sa`),w=this.buffer(3*a*4,`${t.out}-sb`),v=this.buffer(3*a*4,`${t.out}-rg`),b=this.buffer(a*4,`${t.out}-wr`),x=this.buffer(3*a*4,`${t.out}-best`),B=this.buffer(2*a*4,`${t.out}-d0`),F=this.buffer(2*a*4,`${t.out}-d1`),G=this.uniform([r.w,r.h]),A=this.uniform([r.w,r.h,l,1,f]),E=this.uniform([r.w,r.h,l,0,f]),k=await this.pipeline(mt),g=await this.pipeline(yt);if(l<=4){let h=await this.pipeline(bt(l)),_=await this.pipeline(xt(l));n(k,[G,S,z,c,w],m);let y=this.bufs.get(t.init);for(let P=0;P<d;P++){let C=P%2===0?B:F;n(g,[G,c,w,y,v],m),n(h,[P===0?A:E,v,y,x,b],m),n(_,[G,v,b,y,C],m),y=C}n(g,[G,c,w,y,v],m),n(h,[d===0?A:E,v,y,x,b],m)}else{let h=this.buffer(2*a*4,`${t.out}-eh`),_=this.buffer(9*a*4,`${t.out}-bh`),y=this.uniform([r.w,r.h,l]),P=await this.pipeline(wt),C=await this.pipeline(vt),D=await this.pipeline($t),U=await this.pipeline(_t);n(k,[G,S,z,c,w],m);let L=this.bufs.get(t.init);for(let O=0;O<d;O++){let q=O%2===0?B:F;n(g,[G,c,w,L,v],m),n(P,[y,v,h],m),n(C,[O===0?A:E,h,v,L,x,b],m),n(D,[y,v,b,_],m),n(U,[y,_,L,q],m),L=q}n(g,[G,c,w,L,v],m),n(P,[y,v,h],m),n(C,[d===0?A:E,h,v,L,x,b],m)}if(p){let h=this.uniform([r.w,r.h,l]);n(await this.pipeline(Pt),[h,S,z,x,this.bufs.get(t.out)],m)}else n(await this.pipeline(Ce),[this.uniform([a,0],[1]),x,this.bufs.get(t.out)],[u(a,256),2,1])}else throw new Error(`unknown op ${t.op}`)}copyCached(e){for(let[i,n]of this.cachePairs)e.copyBufferToBuffer(i,0,n,0,i.size)}encode(e,i=!1){let n=i&&this.cachePairs.length?this.stepsCached:this.steps;for(let s of n)e.setPipeline(s.pipe),e.setBindGroup(0,s.bind),e.dispatchWorkgroups(...s.wg)}async profile(e=!1){let i=this.device,n=e&&this.cachePairs.length?this.stepsCached:this.steps,s=n.length,u=i.createQuerySet({type:"timestamp",count:2*s}),t=i.createBuffer({size:16*s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),r=i.createBuffer({size:16*s,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),a=i.createCommandEncoder();e&&this.cachePairs.length&&this.copyCached(a),n.forEach((p,m)=>{let S=a.beginComputePass({timestampWrites:{querySet:u,beginningOfPassWriteIndex:2*m,endOfPassWriteIndex:2*m+1}});S.setPipeline(p.pipe),S.setBindGroup(0,p.bind),S.dispatchWorkgroups(...p.wg),S.end()}),a.resolveQuerySet(u,0,2*s,t,0),a.copyBufferToBuffer(t,0,r,0,16*s),i.queue.submit([a.finish()]),await r.mapAsync(GPUMapMode.READ);let l=new BigInt64Array(r.getMappedRange()),d=this.ir.ops.map(p=>`${p.op} ${p.out??""} ${p.op==="conv"?`${p.cin}->${p.cout} k${p.k}s${p.s}`:""}`),f=n.map((p,m)=>({op:p.label?`${p.label} `:d[p.op],ms:Number(l[2*m+1]-l[2*m])/1e6}));return r.unmap(),f}destroy(){for(let e of this.owned)e.destroy()}};var ue=16,ce=`
struct VsOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs(@builtin(vertex_index) i: u32) -> VsOut {
  let p = vec2f(f32((i << 1u) & 2u), f32(i & 2u));
  var o: VsOut;
  o.pos = vec4f(p * 2.0 - 1.0, 0.0, 1.0);
  o.uv = vec2f(p.x, 1.0 - p.y);
  return o;
}`,ge=`
@group(0) @binding(0) var ext: texture_external;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var<storage, read_write> outb: array<f32>;
@group(0) @binding(3) var<uniform> dims: vec4u;
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) id: vec3u) {
  let w = dims.x; let h = dims.y;
  if (id.x >= w || id.y >= h) { return; }
  let size = vec2f(f32(w), f32(h));
  let c = (vec2f(id.xy) + 0.5) / size;
  let d = 0.25 / size; // 4 bilinear taps: roughly an area filter for ~2x downscaling
  let rgb = (textureSampleBaseClampToEdge(ext, samp, c + vec2f(-d.x, -d.y)).rgb
           + textureSampleBaseClampToEdge(ext, samp, c + vec2f( d.x, -d.y)).rgb
           + textureSampleBaseClampToEdge(ext, samp, c + vec2f(-d.x,  d.y)).rgb
           + textureSampleBaseClampToEdge(ext, samp, c + vec2f( d.x,  d.y)).rgb) * 0.25;
  let i = id.y * w + id.x; let n = w * h;
  outb[i] = rgb.r; outb[n + i] = rgb.g; outb[2u * n + i] = rgb.b;
}`,kt=`
@group(0) @binding(0) var<storage, read> raw: array<f32>;
@group(0) @binding(1) var<storage, read_write> flow: array<f32>;
@group(0) @binding(2) var<uniform> k: vec4f; // x: weight of the previous flow (0 = none)
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= arrayLength(&raw)) { return; }
  flow[id.x] = mix(raw[id.x], flow[id.x], k.x);
}`,pe=`
@group(0) @binding(0) var ext: texture_external;
@group(0) @binding(1) var samp: sampler;
@fragment fn fs(@location(0) uv: vec2f) -> @location(0) vec4f {
  return vec4f(textureSampleBaseClampToEdge(ext, samp, uv).rgb, 1.0);
}`,St=`
struct P { mode: u32, compare: u32, gw: u32, gh: u32, pw: f32, ph: f32, split: f32, gain: f32 };
@group(0) @binding(0) var cur: texture_2d<f32>;
@group(0) @binding(1) var samp: sampler;
@group(0) @binding(2) var<storage, read> flow: array<f32>;
@group(0) @binding(3) var<uniform> p: P;
fn grid(x: i32, y: i32) -> vec2f {
  let i = u32(y) * p.gw + u32(x);
  return vec2f(flow[i], flow[p.gw * p.gh + i]);
}
@fragment fn fs(@location(0) uv: vec2f) -> @location(0) vec4f {
  var suv = uv;
  if (p.mode == 1u && !(p.compare == 1u && uv.x < p.split)) {
    let size = vec2f(p.pw, p.ph);
    let q = uv * size - 0.5;                       // network pixel (centre = integer)
    let hi = vec2f(f32(p.gw - 1u), f32(p.gh - 1u));
    let g = clamp((q + 0.5) / ${ue}.0 - 0.5, vec2f(0.0), hi); // bilinear, align_corners=False
    let g0 = vec2i(floor(g));
    let g1 = min(g0 + 1, vec2i(hi));
    let t = g - vec2f(g0);
    let f = mix(mix(grid(g0.x, g0.y), grid(g1.x, g0.y), t.x), mix(grid(g0.x, g1.y), grid(g1.x, g1.y), t.x), t.y);
    suv = (q + f * p.gain + 0.5) / size;           // backward flow: take the newest frame at x + flow
  }
  var c = textureSampleLevel(cur, samp, suv, 0.0).rgb;
  if (p.compare == 1u && abs(uv.x - p.split) < 0.0012) { c = vec3f(1.0); }
  return vec4f(c, 1.0);
}`;function ze(o){K.wasm.numThreads=1,K.wasm.proxy=!1,K.wasm.wasmPaths={wasm:`${o.wasmPaths}ort-wasm-simd-threaded.asyncify.wasm`},K.logLevel="warning"}var oe=class{constructor(e,i,n,s){this.session=e;this.w=i;this.h=n;this.graphCapture=s}session;w;h;graphCapture;kind="onnx";feeds={};out;async bind(e,i){e.forEach((n,s)=>{this.feeds[`f${s}`]=Z.fromGpuBuffer(n,{dataType:"float32",dims:[1,3,this.h,this.w]})}),this.out=Z.fromGpuBuffer(i,{dataType:"float32",dims:[1,2,this.h/ue,this.w/ue]})}async run(){await this.session.run(this.feeds,{flow:this.out})}async destroy(){await this.session.release()}},de=class o{constructor(e,i,n,s){this.device=e;this.net=i;this.w=n,this.h=s,this.gw=n/ue,this.gh=s/ue,this.format=navigator.gpu.getPreferredCanvasFormat();let u=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;for(let r=0;r<3;r++){let a=e.createBuffer({size:3*n*s*4,usage:u,label:`fg-in${r}`});this.ins.push(a)}let t=2*this.gw*this.gh*4;this.raw=e.createBuffer({size:t,usage:u,label:"fg-flow-raw"}),this.flow=e.createBuffer({size:t,usage:u,label:"fg-flow"}),this.dims=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.dims,0,new Uint32Array([n,s,0,0])),this.params=e.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.smoothK=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear"})}device;net;w;h;gw;gh;ins=[];raw;flow;hasFlow=!1;count=0;cur;dims;params;smoothK;sampler;capturePipe;smoothPipe;copyPipe;displayPipe;format;static async create(e,i,n,s=!1){let u=new Uint8Array(e),t=f=>({executionProviders:["webgpu"],preferredOutputLocation:"gpu-buffer",graphOptimizationLevel:"all",enableGraphCapture:f}),r,a=s;try{r=await se.create(u,t(a))}catch(f){if(!a)throw f;console.warn("[YT-MLSR FG] graph capture unavailable:",f),a=!1,r=await se.create(u,t(!1))}let l=await K.webgpu.device,d=new o(l,new oe(r,i,n,a),i,n);return await d.net.bind(d.ins,d.raw),await d.buildPipelines(),d}static async createWgsl(e,i,n,s,u){let t=await ee.create(e,i,n,s,u),r=new o(e,t,s,u);return await t.bind(r.ins,r.raw),await r.buildPipelines(),r}get graphCapture(){return this.net instanceof oe&&this.net.graphCapture}get engine(){return this.net.kind}async buildPipelines(){let e=this.device,i=async s=>e.createComputePipelineAsync({layout:"auto",compute:{module:e.createShaderModule({code:s}),entryPoint:"main"}});this.capturePipe=await i(ge),this.smoothPipe=await i(kt);let n=e.createShaderModule({code:ce});this.copyPipe=await e.createRenderPipelineAsync({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:e.createShaderModule({code:pe}),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}}),this.displayPipe=await e.createRenderPipelineAsync({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:e.createShaderModule({code:St}),entryPoint:"fs",targets:[{format:this.format}]}})}reset(){this.count=0,this.hasFlow=!1}shift(e){let i=3*this.w*this.h*4;e.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,i),e.copyBufferToBuffer(this.ins[2],0,this.ins[1],0,i)}ingest(e,i,n,s){let u=this.device;this.shift(e);let t=e.beginComputePass();t.setPipeline(this.capturePipe),t.setBindGroup(0,u.createBindGroup({layout:this.capturePipe.getBindGroupLayout(0),entries:[{binding:0,resource:i},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.ins[2]}},{binding:3,resource:{buffer:this.dims}}]})),t.dispatchWorkgroups(Math.ceil(this.w/16),Math.ceil(this.h/16)),t.end(),(!this.cur||this.cur.width!==n||this.cur.height!==s)&&(this.cur?.destroy(),this.cur=u.createTexture({size:[n,s],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));let r=e.beginRenderPass({colorAttachments:[{view:this.cur.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});r.setPipeline(this.copyPipe),r.setBindGroup(0,u.createBindGroup({layout:this.copyPipe.getBindGroupLayout(0),entries:[{binding:0,resource:i},{binding:1,resource:this.sampler}]})),r.draw(3),r.end(),this.count++}ingestRaw(e){let i=this.device.createCommandEncoder();this.shift(i),this.device.queue.submit([i.finish()]),this.device.queue.writeBuffer(this.ins[2],0,e),this.count++}get ready(){return this.count>=3}async predict(e=0){let i=this.device;this.net instanceof oe&&await this.net.run(),i.queue.writeBuffer(this.smoothK,0,new Float32Array([this.hasFlow?e:0,0,0,0]));let n=i.createCommandEncoder(),s=n.beginComputePass();this.net instanceof ee&&this.net.encode(s),s.setPipeline(this.smoothPipe),s.setBindGroup(0,i.createBindGroup({layout:this.smoothPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.raw}},{binding:1,resource:{buffer:this.flow}},{binding:2,resource:{buffer:this.smoothK}}]})),s.dispatchWorkgroups(Math.ceil(2*this.gw*this.gh/64)),s.end(),i.queue.submit([n.finish()]),this.hasFlow=!0}async readFlow(){let e=this.raw.size,i=this.device.createBuffer({size:e,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),n=this.device.createCommandEncoder();n.copyBufferToBuffer(this.raw,0,i,0,e),this.device.queue.submit([n.finish()]),await i.mapAsync(GPUMapMode.READ);let s=new Float32Array(i.getMappedRange().slice(0));return i.destroy(),s}draw(e,i,n,s,u=1,t=.5){if(!this.cur)return;let r=new ArrayBuffer(32);new Uint32Array(r,0,4).set([n===1&&this.hasFlow?1:0,s?1:0,this.gw,this.gh]),new Float32Array(r,16,4).set([this.w,this.h,t,u]),this.device.queue.writeBuffer(this.params,0,r);let a=e.beginRenderPass({colorAttachments:[{view:i,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});a.setPipeline(this.displayPipe),a.setBindGroup(0,this.device.createBindGroup({layout:this.displayPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.cur.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.flow}},{binding:3,resource:{buffer:this.params}}]})),a.draw(3),a.end()}async destroy(){await this.net.destroy();for(let e of[...this.ins,this.raw,this.flow])e.destroy();this.cur?.destroy()}};var Bt=`
struct P { mode: u32, compare: u32, pw: f32, ph: f32, split: f32, rgb: f32, rule: f32, t: f32 };
@group(0) @binding(0) var prev: texture_2d<f32>;
@group(0) @binding(1) var cur: texture_2d<f32>;
@group(0) @binding(2) var samp: sampler;
@group(0) @binding(3) var<storage, read> flow: array<f32>;  // (4, ph, pw)
@group(0) @binding(4) var<storage, read> mask: array<f32>;  // (1, ph, pw), or (4, ph, pw): mask + RGB residual
@group(0) @binding(5) var<uniform> p: P;
fn at(c: u32, x: i32, y: i32) -> f32 {
  let w = u32(p.pw); let h = u32(p.ph);
  let i = u32(clamp(y, 0, i32(h) - 1)) * w + u32(clamp(x, 0, i32(w) - 1));
  if (c < 4u) { return flow[c * w * h + i]; }
  return mask[(c - 4u) * w * h + i];
}
fn bil(c: u32, q: vec2f) -> f32 {
  let g = floor(q); let t = q - g; let x = i32(g.x); let y = i32(g.y);
  return mix(mix(at(c, x, y), at(c, x + 1, y), t.x), mix(at(c, x, y + 1), at(c, x + 1, y + 1), t.x), t.y);
}
@fragment fn fs(@location(0) uv: vec2f) -> @location(0) vec4f {
  var c: vec3f;
  if (p.mode == 0u) {
    c = textureSampleLevel(cur, samp, uv, 0.0).rgb;            // real frame n+1
  } else if (p.compare == 1u && uv.x < p.split) {
    c = textureSampleLevel(prev, samp, uv, 0.0).rgb;           // original stream still shows n
  } else {
    let size = vec2f(p.pw, p.ph);
    let q = uv * size - 0.5;                                   // network pixel
    // t != 0.5 (4x etc.): the flows are made for the middle frame; under linear motion the frame at time t takes
    // 2t of the flow to n and 2(1-t) of the flow to n+1 (read at the same pixel, an approximation away from 0.5),
    // and the blend leans toward the nearer frame as (1-t)m : t(1-m)
    let f0 = vec2f(bil(0u, q), bil(1u, q)) * (2.0 * p.t);
    let f1 = vec2f(bil(2u, q), bil(3u, q)) * (2.0 - 2.0 * p.t);
    let mm = bil(4u, q);
    let wa = (1.0 - p.t) * mm; let wb = p.t * (1.0 - mm);
    let m0 = select(1.0 - p.t, wa / (wa + wb), wa + wb > 1e-6);
    let p0 = q + f0;
    let p1 = q + f1;
    let a = textureSampleLevel(prev, samp, (p0 + 0.5) / size, 0.0).rgb;
    let b = textureSampleLevel(cur, samp, (p1 + 0.5) / size, 0.0).rgb;
    // Out-of-bounds (OOB) one-sided blending: when forward/backward motion pushes one reference outside [0, size-1],
    // smoothly fade over 2 px toward the frame that remains in-bounds instead of blending border-clamped smear.
    let d0 = max(vec2f(0.0), max(-p0, p0 - (size - 1.0)));
    let d1 = max(vec2f(0.0), max(-p1, p1 - (size - 1.0)));
    let v0 = clamp(1.0 - max(d0.x, d0.y) * 0.5, 0.0, 1.0);
    let v1 = clamp(1.0 - max(d1.x, d1.y) * 0.5, 0.0, 1.0);
    let m = clamp(m0 + 0.5 * (v0 - v1), 0.0, 1.0);
    c = a * m + b * (1.0 - m);
    if (p.rgb > 0.5) { c = clamp(c + (1.0 - abs(2.0 * p.t - 1.0)) * vec3f(bil(5u, q), bil(6u, q), bil(7u, q)), vec3f(0.0), vec3f(1.0)); }
    if (p.rule > 0.0) {
      // VRFG static_rule: where n and n+1 agree at full resolution (static subtitles / UI), use their plain average
      let pa = textureSampleLevel(prev, samp, uv, 0.0).rgb;
      let pb = textureSampleLevel(cur, samp, uv, 0.0).rgb;
      let d = abs(pb - pa);
      let s = max(0.0, 1.0 - (d.x + d.y + d.z) / (3.0 * p.rule));
      c = mix(c, mix(pa, pb, p.t), s);
    }
  }
  if (p.compare == 1u && abs(uv.x - p.split) < 0.0012) { c = vec3f(1.0); }
  return vec4f(c, 1.0);
}`,X=class o{constructor(e,i,n,s){this.device=e;this.session=i;this.w=n;this.h=s;let u=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;for(let t=0;t<2;t++){let r=e.createBuffer({size:3*n*s*4,usage:u,label:`rife-in${t}`});this.ins.push(r),i&&(this.feeds[`img${t}`]=Z.fromGpuBuffer(r,{dataType:"float32",dims:[1,3,s,n]}))}this.flow=e.createBuffer({size:4*n*s*4,usage:u,label:"rife-flow"}),this.mask=e.createBuffer({size:4*n*s*4,usage:u,label:"rife-mask"}),i&&(this.fetches.flow=Z.fromGpuBuffer(this.flow,{dataType:"float32",dims:[1,4,s,n]}),this.fetches.mask=Z.fromGpuBuffer(this.mask,{dataType:"float32",dims:[1,1,s,n]})),this.dims=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.dims,0,new Uint32Array([n,s,0,0])),this.params=e.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear"})}device;session;w;h;kind="interp";graphCapture=!1;ins=[];flow;mask;feeds={};fetches={};prev;cur;dims;params;sampler;capturePipe;copyPipe;captureTexPipe;copyTexPipe;displayPipe;hasFlow=!1;hasRgb=!1;staticRule=0;count=0;format=navigator.gpu.getPreferredCanvasFormat();net;prevFlow;flowGrid;curIsCached=!1;reuseReady=!1;get engine(){return this.net?"wgsl":"onnx"}get hasFrameCache(){return this.net?.hasFrameCache??!1}static async create(e,i,n){let s=await se.create(new Uint8Array(e),{executionProviders:["webgpu"],preferredOutputLocation:"gpu-buffer",graphOptimizationLevel:"all"}),u=await K.webgpu.device,t=new o(u,s,i,n);return await t.buildPipelines(),t}static async createWgsl(e,i,n,s,u,t){let r=new o(e,void 0,s,u);r.net=await ee.create(e,i,n,s,u,void 0,t),r.hasRgb=i.tensors.mask?.c===4,r.staticRule=i.staticRule??0;let a={img0:r.ins[0],img1:r.ins[1],flow:r.flow,mask:r.mask};if(i.temporal&&i.tensors.prev_flow&&i.tensors.flow_grid){let l=i.tensors.prev_flow,d=l.c*(s/l.s)*(u/l.s)*4,f=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;r.prevFlow=e.createBuffer({size:d,usage:f,label:"spire-prev-flow"}),r.flowGrid=e.createBuffer({size:d,usage:f,label:"spire-flow-grid"}),a.prev_flow=r.prevFlow,a.flow_grid=r.flowGrid}return await r.net.bindNamed(a),await r.buildPipelines(),r}async buildPipelines(){let e=this,i=this.device;e.capturePipe=await i.createComputePipelineAsync({layout:"auto",compute:{module:i.createShaderModule({code:ge}),entryPoint:"main"}});let n=i.createShaderModule({code:ce});e.copyPipe=await i.createRenderPipelineAsync({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:i.createShaderModule({code:pe}),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}}),e.displayPipe=await i.createRenderPipelineAsync({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:i.createShaderModule({code:Bt}),entryPoint:"fs",targets:[{format:e.format}]}})}reset(){if(this.count=0,this.hasFlow=!1,this.curIsCached=!1,this.reuseReady=!1,this.prevFlow){let e=this.device.createCommandEncoder();e.clearBuffer(this.prevFlow),this.device.queue.submit([e.finish()])}}get ready(){return this.count>=2}tex(e,i){return this.device.createTexture({size:[e,i],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})}ingest(e,i,n,s){let u=this.device,t=i instanceof GPUTexture;if(t&&!this.captureTexPipe){let p=m=>u.createShaderModule({code:m.replace("texture_external","texture_2d<f32>")});this.captureTexPipe=u.createComputePipeline({layout:"auto",compute:{module:p(ge),entryPoint:"main"}}),this.copyTexPipe=u.createRenderPipeline({layout:"auto",vertex:{module:u.createShaderModule({code:ce}),entryPoint:"vs"},fragment:{module:p(pe),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}})}let r=t?i.createView():i,a=t?this.captureTexPipe:this.capturePipe,l=t?this.copyTexPipe:this.copyPipe;this.reuseReady=this.curIsCached&&!!this.net?.hasFrameCache,this.curIsCached=!1,this.reuseReady||e.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,3*this.w*this.h*4);let d=e.beginComputePass();d.setPipeline(a),d.setBindGroup(0,u.createBindGroup({layout:a.getBindGroupLayout(0),entries:[{binding:0,resource:r},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.ins[1]}},{binding:3,resource:{buffer:this.dims}}]})),d.dispatchWorkgroups(Math.ceil(this.w/16),Math.ceil(this.h/16)),d.end(),!this.cur||this.cur.width!==n||this.cur.height!==s?(this.cur?.destroy(),this.prev?.destroy(),this.cur=this.tex(n,s),this.prev=this.tex(n,s),this.count=0,this.curIsCached=!1,this.reuseReady=!1,this.prevFlow&&e.clearBuffer(this.prevFlow)):e.copyTextureToTexture({texture:this.cur},{texture:this.prev},[n,s]);let f=e.beginRenderPass({colorAttachments:[{view:this.cur.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});f.setPipeline(l),f.setBindGroup(0,u.createBindGroup({layout:l.getBindGroupLayout(0),entries:[{binding:0,resource:r},{binding:1,resource:this.sampler}]})),f.draw(3),f.end(),this.count++}ingestRaw(e){if(this.reuseReady=this.curIsCached&&!!this.net?.hasFrameCache,this.curIsCached=!1,!this.reuseReady){let i=this.device.createCommandEncoder();i.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,3*this.w*this.h*4),this.device.queue.submit([i.finish()])}this.device.queue.writeBuffer(this.ins[1],0,e),this.count++}encodePredict(e){if(!this.net)return;this.reuseReady&&this.net.copyCached(e);let i=e.beginComputePass();this.net.encode(i,this.reuseReady),i.end(),this.prevFlow&&this.flowGrid&&e.copyBufferToBuffer(this.flowGrid,0,this.prevFlow,0,this.prevFlow.size),this.reuseReady=!1,this.curIsCached=this.net.hasFrameCache,this.hasFlow=!0}async predict(){if(this.net){let e=this.device.createCommandEncoder();this.encodePredict(e),this.device.queue.submit([e.finish()])}else await this.session.run(this.feeds,this.fetches),this.hasFlow=!0}profile(e=!1){return this.net?.profile(e)}async read(){let e=async i=>{let n=this.device.createBuffer({size:i.size,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),s=this.device.createCommandEncoder();s.copyBufferToBuffer(i,0,n,0,i.size),this.device.queue.submit([s.finish()]),await n.mapAsync(GPUMapMode.READ);let u=new Float32Array(n.getMappedRange().slice(0));return n.destroy(),u};return{flow:await e(this.flow),mask:await e(this.mask)}}draw(e,i,n,s,u=1,t=.5,r=.5){if(!this.cur||!this.prev)return;let a=new ArrayBuffer(32);new Uint32Array(a,0,2).set([n===1&&this.hasFlow?1:0,s?1:0]),new Float32Array(a,8,6).set([this.w,this.h,t,this.hasRgb?1:0,this.staticRule,r]),this.device.queue.writeBuffer(this.params,0,a);let l=e.beginRenderPass({colorAttachments:[{view:i,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});l.setPipeline(this.displayPipe),l.setBindGroup(0,this.device.createBindGroup({layout:this.displayPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.prev.createView()},{binding:1,resource:this.cur.createView()},{binding:2,resource:this.sampler},{binding:3,resource:{buffer:this.flow}},{binding:4,resource:{buffer:this.mask}},{binding:5,resource:{buffer:this.params}}]})),l.draw(3),l.end()}async destroy(){await this.session?.release(),this.net?.destroy();for(let e of[...this.ins,this.flow,this.mask])e.destroy();this.prevFlow?.destroy(),this.flowGrid?.destroy(),this.cur?.destroy(),this.prev?.destroy()}};var te="[YT-MLSR FG]",he=class{constructor(e,i){this.env=e;this.settings=i}env;settings;status={state:"idle"};video;canvas;stats;device;wgslDevice;ctx;fg;queue=[];pending=[];curShown=!0;curDue=0;clockOff;clockRate=1;curMult=2;split=.5;fgKey="";loading;rvfc=0;raf=0;lastPresented=-1;lastMediaTime=-1;dtEma=0;vsyncEma=1e3/60;lastRaf=0;running=!1;frameId=0;predFor=-1;predShown=!0;predAt=0;nVideo=0;nOut=0;nLate=0;nGen=0;genShown=!1;held;heldDevice;runEma=0;statT=performance.now();apply(e){let i=this.settings;this.settings=e,e.enabled||(this.show(!1),this.setStatus("idle")),(i.model!==e.model||i.size!==e.size||i.fp16!==e.fp16||i.engine!==e.engine||e.enabled&&!i.enabled)&&this.ensureModel(),this.stats&&(this.stats.style.display=e.enabled&&e.showStats?"block":"none"),i.compare!==e.compare&&this.redraw()}async attach(e,i){this.detach(),this.video=e;let n=document.createElement("canvas");n.className="mlsr-fg-canvas",Object.assign(n.style,{position:"absolute",pointerEvents:"none",zIndex:"2",display:"none"}),i.insertBefore(n,e.nextSibling),this.canvas=n;let s=document.createElement("div");Object.assign(s.style,{position:"absolute",right:"12px",top:"12px",zIndex:"61",pointerEvents:"none",whiteSpace:"pre",font:"12px/1.45 ui-monospace, Consolas, monospace",color:"#e8e8e8",background:"rgba(0,0,0,.62)",padding:"6px 9px",borderRadius:"6px",display:"none"}),(e.closest("#movie_player")??i).appendChild(s),this.stats=s,this.layout();let u=(r,a)=>{this.video===e&&(this.rvfc=e.requestVideoFrameCallback(u),this.onFrame(a))};this.rvfc=e.requestVideoFrameCallback(u);let t=r=>{this.video===e&&(this.raf=requestAnimationFrame(t),this.lastRaf&&(this.vsyncEma=this.vsyncEma*.95+Math.min(50,r-this.lastRaf)*.05),this.lastRaf=r,this.onRaf())};this.raf=requestAnimationFrame(t),e.addEventListener("seeking",this.onSeek),this.settings.enabled&&this.ensureModel()}detach(){this.video&&(this.video.cancelVideoFrameCallback(this.rvfc),this.video.removeEventListener("seeking",this.onSeek)),cancelAnimationFrame(this.raf),this.flushPending(),this.canvas?.remove(),this.stats?.remove(),this.held?.destroy(),this.held=void 0,this.genShown=!1,this.canvas=this.stats=this.ctx=this.video=void 0}onSeek=()=>{this.fg?.reset(),this.predShown=!0,this.queue=[],this.flushPending(),this.curShown=!0};flushPending(){for(let e of this.pending)e.frame.close();this.pending=[]}layout(){let e=this.video,i=this.canvas;if(!e||!i)return;Object.assign(i.style,{left:`${e.offsetLeft}px`,top:`${e.offsetTop}px`,width:`${e.offsetWidth}px`,height:`${e.offsetHeight}px`});let n=window.devicePixelRatio||1,s=Math.max(2,Math.min(2160,Math.round(e.offsetHeight*n))),u=Math.max(2,Math.round(s*e.offsetWidth/Math.max(1,e.offsetHeight)));(i.width!==u||i.height!==s)&&(i.width=u,i.height=s)}async ensureModel(){let e=this.video;if(!e||!this.settings.enabled)return;let[i,n]=this.netSize(e.videoWidth,e.videoHeight),s=this.modelKey(i,n);if(!(s===this.fgKey||s===this.loading)){this.loading=s,this.setStatus("loading",`\u30E2\u30C7\u30EB\u8AAD\u307F\u8FBC\u307F\u4E2D: ${s}`);try{let u=this.engine==="wgsl",t,r;if(u)r=await Te(this.env.modelUrl(this.settings.model));else{ze({wasmPaths:this.env.wasmPaths});let d=this.interp?`${this.settings.model}_${i}x${n}`:s,f=await fetch(`${this.env.modelUrl(d)}.onnx`);if(!f.ok)throw new Error(`${d}.onnx \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 (npm run fg-models)`);t=await f.arrayBuffer()}let a=this.fg;this.fg=void 0,this.fgKey="",this.show(!1),a&&(await this.device?.queue.onSubmittedWorkDone(),await a.destroy());let l;if(this.interp&&r?(this.wgslDevice??=(await xe()).device,l=await X.createWgsl(this.wgslDevice,r.ir,r.weights,i,n)):this.interp?l=await X.create(t,i,n):r?(this.wgslDevice??=(await xe()).device,l=await de.createWgsl(this.wgslDevice,r.ir,r.weights,i,n)):l=await de.create(t,i,n),this.device&&this.device!==l.device&&(this.ctx=void 0),this.device=l.device,this.loading!==s){await l.destroy();return}this.fg=l,this.fgKey=s,this.genShown=!1,console.info(te,"model ready",s),this.setStatus("running")}catch(u){console.error(te,u),this.setStatus("error",String(u?.message??u))}finally{this.loading===s&&(this.loading=void 0)}}}get interp(){return this.settings.model.startsWith("rife")||this.vrfgInterp}get vrfgInterp(){return this.settings.model.startsWith("vi_")||this.settings.model.startsWith("spire")}get engine(){return this.vrfgInterp?"wgsl":this.settings.engine}netSize(e,i){if(this.vrfgInterp)return Ee(this.settings.size,e,i);let[n,s]=be(this.settings.size,i);return this.interp?this.settings.size==="auto"?[640,384]:n<=640?[640,384]:[960,576]:[n,s]}modelKey(e,i){return this.interp?`${this.settings.model}_${e}x${i}_${this.engine}`:this.engine==="wgsl"?`${this.settings.model}_${e}x${i}_wgsl`:`${this.settings.model}_${e}x${i}${this.settings.fp16?"_fp16":""}`}target(){if(!(!this.canvas||!this.device))return this.ctx||(this.ctx=this.canvas.getContext("webgpu")??void 0,this.ctx?.configure({device:this.device,format:navigator.gpu.getPreferredCanvasFormat(),alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_DST})),this.ctx?.getCurrentTexture().createView()}drawGen(e,i){if(!this.settings.genOnly){let s=this.target();return s&&i(s),!!s}let n=this.heldTex();return n?(i(n.createView()),this.genShown=!0,this.drawHeld(e)):!1}drawHeld(e){if(!this.held||!this.target())return!1;let i=this.ctx.getCurrentTexture();return i.width!==this.held.width||i.height!==this.held.height?!1:(e.copyTextureToTexture({texture:this.held},{texture:i},[i.width,i.height]),!0)}heldTex(){if(!this.canvas||!this.device||!this.target())return;let e=this.ctx.getCurrentTexture();return(!this.held||this.held.width!==e.width||this.held.height!==e.height||this.heldDevice!==this.device)&&(this.held?.destroy(),this.held=this.device.createTexture({size:[e.width,e.height],format:e.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,label:"fg-held"}),this.heldDevice=this.device),this.held}drawReal(e,i){if(this.skipReal())return this.drawHeld(e);let n=this.target();return n&&i(n),!!n}onFrame(e){let i=this.video,n=this.fg,s=this.device;this.nVideo++;let u=e.mediaTime-this.lastMediaTime,t=e.presentedFrames===this.lastPresented+1&&u>.004&&u<.1;if(this.lastPresented=e.presentedFrames,this.lastMediaTime=e.mediaTime,t&&(this.dtEma=this.dtEma?this.dtEma*.9+u*.1:u),!this.settings.enabled||!n||!s||i.readyState<2||i.videoWidth===0)return;if(i.mediaKeys){this.show(!1),this.setStatus("bypass","DRM \u4FDD\u8B77\u3055\u308C\u305F\u52D5\u753B");return}let r=this.netSize(i.videoWidth,i.videoHeight);this.modelKey(r[0],r[1])!==this.fgKey&&this.ensureModel();let a=this.dtEma*1e3/Math.max(.1,i.playbackRate);if(this.dtEma&&a<this.vsyncEma*1.6){this.show(!1),this.setStatus("bypass",`\u52D5\u753B\u306E\u30D5\u30EC\u30FC\u30E0\u9593\u9694 (${a.toFixed(1)} ms) \u304C\u753B\u9762\u306E\u66F4\u65B0\u9593\u9694\u306B\u8FD1\u3044\u305F\u3081\u4E0D\u8981`);return}if(t||(n.reset(),this.genShown=!1),this.curMult=this.settings.mult===4&&a>=this.vsyncEma*3.2?4:2,this.layout(),!this.canvas||!this.device)return;if(n instanceof X){this.onInterpFrame(e,n,s,t);return}try{let f=Math.min(i.videoHeight,2160),p=Math.round(f*i.videoWidth/i.videoHeight),m=s.createCommandEncoder();n.ingest(m,s.importExternalTexture({source:i}),p,f),this.drawReal(m,S=>n.draw(m,S,0,this.settings.compare,this.settings.gain,this.split)),this.nOut++,s.queue.submit([m.finish()]),this.show(!0),this.setStatus("running")}catch(f){console.error(te,f),this.setStatus("error",String(f?.message??f));return}if(this.predFor===this.frameId&&!this.predShown&&this.nLate++,this.frameId++,this.predShown=!0,!n.ready||this.running||i.paused)return;let l=this.frameId,d=performance.now();this.running=!0,n.predict(this.settings.smooth).then(async()=>{if(s.queue.onSubmittedWorkDone().then(()=>{let f=performance.now()-d;this.runEma=this.runEma?this.runEma*.9+f*.1:f}),this.running=!1,l!==this.frameId){this.nLate++;return}this.predFor=l,this.predShown=!1,this.predAt=d+a/2,this.onRaf()},f=>{this.running=!1,console.error(te,f),this.setStatus("error",String(f?.message??f))})}onInterpFrame(e,i,n,s){let u=this.video,t=performance.now(),r=Math.max(.1,u.playbackRate),a=t-e.mediaTime*1e3/r;this.clockOff===void 0||!s||r!==this.clockRate||Math.abs(a-this.clockOff)>40?(this.clockOff=a,this.clockRate=r):this.clockOff=this.clockOff*.95+a*.05;let l;if(s&&!u.paused&&this.pending.length<3)try{l=new VideoFrame(u)}catch{}if(l){this.pending.push({frame:l,media:e.mediaTime}),this.frameId++,this.show(!0),this.setStatus("running");return}this.flushPending(),this.queue=[];try{let d=n.createCommandEncoder(),[f,p]=this.fullSize();i.ingest(d,n.importExternalTexture({source:u}),f,p),this.drawReal(d,m=>i.draw(d,m,0,this.settings.compare,1,this.split)),n.queue.submit([d.finish()]),this.nOut++,this.curShown=!0,this.frameId++,this.show(!0),this.setStatus("running")}catch(d){console.error(te,d),this.setStatus("error",String(d?.message??d))}}redraw(){let e=this.fg,i=this.device,n=this.video;if(!e||!i||!n||!n.paused||!this.settings.enabled||!this.canvas||this.canvas.style.display==="none"||e instanceof X&&!this.curShown)return;let s=i.createCommandEncoder(),u=this.target();u&&(e.draw(s,u,0,this.settings.compare,this.settings.gain,this.split),i.queue.submit([s.finish()]))}fullSize(){let e=this.video,i=Math.min(e.videoHeight,2160);return[Math.round(i*e.videoWidth/e.videoHeight),i]}dueOf(e,i){return(this.clockOff??performance.now())+e*1e3/this.clockRate+i+this.vsyncEma*1.5+2}pumpInterp(e,i){if(!this.video||!this.canvas)return;let s=performance.now(),u=this.vsyncEma*.5,t=this.dtEma*1e3/this.clockRate,r=!1;try{if(!this.curShown&&s>=this.curDue-u){this.nLate+=this.queue.length,this.queue=[];let a=i.createCommandEncoder();this.drawReal(a,l=>e.draw(a,l,0,this.settings.compare,1,this.split))&&(i.queue.submit([a.finish()]),this.nOut++),this.curShown=!0,r=!0}if(this.curShown&&!this.running&&this.pending.length){let a=this.pending.shift(),l=i.createCommandEncoder(),[d,f]=this.fullSize();if(e.ingest(l,i.importExternalTexture({source:a.frame}),d,f),i.queue.submit([l.finish()]),a.frame.close(),this.curDue=this.dueOf(a.media,t),this.curShown=!1,this.queue=[],e.ready){let p=this.curMult,m=performance.now();for(let S=1;S<p;S++){let z=this.curDue-t+S*t/p;z>=s-u?this.queue.push({t:S/p,at:z}):this.nLate++}this.running=!0,e.predict().then(()=>{this.running=!1,i.queue.onSubmittedWorkDone().then(()=>{let S=performance.now()-m;this.runEma=this.runEma?this.runEma*.9+S*.1:S})},S=>{this.running=!1,this.queue=[],console.error(te,S),this.setStatus("error",String(S?.message??S))})}}if(!r&&!this.running&&this.queue.length&&s>=this.queue[0].at-u){let a=0;for(;a+1<this.queue.length&&s>=this.queue[a+1].at-u;)a++;this.nLate+=a;let{t:l}=this.queue[a];this.queue=this.queue.slice(a+1);let d=i.createCommandEncoder();this.drawGen(d,f=>e.draw(d,f,1,this.settings.compare,1,this.split,l))&&(i.queue.submit([d.finish()]),this.nOut++,this.nGen++)}}catch(a){console.error(te,a),this.setStatus("error",String(a?.message??a))}}skipReal(){return this.settings.genOnly&&!!this.video&&!this.video.paused&&this.genShown&&!!this.held}onRaf(){let e=this.fg,i=this.device;if(e instanceof X&&i&&this.settings.enabled&&this.pumpInterp(e,i),e&&i&&!this.predShown&&this.predFor===this.frameId&&performance.now()>=this.predAt-this.vsyncEma*.5){let s=i.createCommandEncoder();this.drawGen(s,u=>e.draw(s,u,1,this.settings.compare,this.settings.gain,this.split))&&(i.queue.submit([s.finish()]),this.nOut++,this.nGen++),this.predShown=!0}let n=performance.now();n-this.statT>1e3&&this.tickStats(n)}tickStats(e){let i=(e-this.statT)/1e3,n=this.video;if(this.status={...this.status,model:Be[this.settings.model],procRes:this.fg?[this.fg.w,this.fg.h]:void 0,videoRes:n?[n.videoWidth,n.videoHeight]:void 0,videoFps:this.nVideo/i,outFps:this.nOut/i,runMs:this.runEma,late:this.nLate,genFps:this.nGen/i,graphCapture:this.fg?.graphCapture,fp16:this.engine==="onnx"&&this.settings.fp16&&!this.interp,engine:this.fg?.engine,mult:this.interp?this.curMult:void 0},this.nVideo=this.nOut=this.nGen=0,this.statT=e,this.stats){let s=this.status;this.stats.style.display=this.settings.enabled&&this.settings.showStats?"block":"none",this.stats.textContent=[`VRFG \u30D5\u30EC\u30FC\u30E0\u751F\u6210 ${s.state}${s.message?` (${s.message})`:""}`,`\u30E2\u30C7\u30EB  ${s.model??"-"}  \u5165\u529B ${s.procRes?.join("\xD7")??"-"} ${s.engine==="wgsl"?"\u81EA\u4F5C\u30A8\u30F3\u30B8\u30F3":`ONNX ${s.fp16?"fp16":"fp32"}`}`,`\u52D5\u753B    ${s.videoRes?.join("\xD7")??"-"} @ ${s.videoFps?.toFixed(1)} fps`,`\u8868\u793A    ${s.outFps?.toFixed(1)} fps${s.mult?` ${s.mult}x`:""} (\u751F\u6210 ${s.genFps?.toFixed(1)} fps, \u9593\u306B\u5408\u308F\u305A \u7D2F\u8A08 ${s.late})`,`\u63A8\u8AD6    ${s.runMs?.toFixed(1)} ms (GPU \u5B8C\u4E86\u307E\u3067, \u4E88\u7B97 ${(this.dtEma*(this.interp?1e3:500)/Math.max(.1,this.video?.playbackRate??1)).toFixed(1)} ms)`,`\u8ABF\u6574    \u52D5\u304D \xD7${this.settings.gain.toFixed(2)}  \u5E73\u6ED1\u5316 ${this.settings.smooth.toFixed(2)}`,this.settings.compare?"\u5DE6: \u5143\u306E\u6620\u50CF\u306E\u307F / \u53F3: \u751F\u6210\u30D5\u30EC\u30FC\u30E0\u3042\u308A":"",this.settings.genOnly?"\u751F\u6210\u30D5\u30EC\u30FC\u30E0\u306E\u307F\u8868\u793A\u4E2D (\u4E00\u6642\u505C\u6B62\u4E2D\u306F\u5143\u306E\u6620\u50CF)":""].filter(Boolean).join(`
`)}this.canvas&&(this.canvas.dataset.fgStatus=JSON.stringify(this.status))}show(e){this.canvas&&(this.canvas.style.display=e&&this.settings.enabled?"block":"none")}setStatus(e,i){this.status={...this.status,state:e,message:i}}};var Et=new URL("./models/",location.href).href,I=o=>document.getElementById(o),$={drop:I("drop"),file:I("file"),model:I("model"),size:I("size"),mult:I("mult"),enabled:I("enabled"),compare:I("compare"),genOnly:I("genOnly"),stats:I("stats"),status:I("status"),error:I("error"),stage:I("stage"),view:I("view"),video:I("video"),seek:I("seek"),play:I("play"),rate:I("rate"),loop:I("loop"),volume:I("volume"),full:I("full"),time:I("time")},T=$.video;function De(){return{...Se,enabled:$.enabled.checked,model:$.model.value,size:$.size.value,compare:$.compare.checked,genOnly:$.genOnly.checked,showStats:$.stats.checked,engine:"wgsl",mult:$.mult.value==="4"?4:2}}var V=new he({modelUrl:o=>Et+o,wasmPaths:""},De());window.__fgDemo={fg:V,video:T};for(let o of[$.model,$.size,$.mult,$.enabled,$.compare,$.genOnly,$.stats])o.addEventListener("change",()=>{V.apply(De()),re()});var H=I("split");function re(){let o=$.compare.checked&&$.enabled.checked&&!!T.src&&T.videoWidth>0;H.style.display=o?"block":"none",o&&Object.assign(H.style,{left:`${T.offsetLeft+V.split*T.offsetWidth}px`,top:`${T.offsetTop}px`,height:`${T.offsetHeight}px`})}H.addEventListener("pointerdown",o=>{o.preventDefault(),o.stopPropagation(),H.setPointerCapture(o.pointerId);let e=n=>{let s=T.getBoundingClientRect();V.split=Math.min(1,Math.max(0,(n.clientX-s.left)/Math.max(1,s.width))),re(),V.redraw()},i=()=>{H.removeEventListener("pointermove",e),H.removeEventListener("pointerup",i),H.removeEventListener("pointercancel",i)};H.addEventListener("pointermove",e),H.addEventListener("pointerup",i),H.addEventListener("pointercancel",i)});H.addEventListener("click",o=>o.stopPropagation());function ye(o){$.error.textContent=o,$.error.hidden=!o}var me="";async function $e(o){if(ye(""),!navigator.gpu){ye("\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306F WebGPU \u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\uFF08Chrome / Edge \u306E\u6700\u65B0\u7248\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\uFF09");return}me&&URL.revokeObjectURL(me),me=URL.createObjectURL(o),$.drop.querySelector(".name").textContent=o.name,$.status.textContent="\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",T.src=me,$.stage.hidden=!1,T.isConnected&&await V.attach(T,$.view)}T.addEventListener("loadedmetadata",()=>{$.seek.max=String(T.duration||0),$.status.textContent=`${$.drop.querySelector(".name").textContent}\uFF1A${T.videoWidth}\xD7${T.videoHeight}\u3001${ve(T.duration)}`,V.layout(),re()});T.addEventListener("error",()=>{let o=T.error;ye(`\u3053\u306E\u52D5\u753B\u306F\u30D6\u30E9\u30A6\u30B6\u3067\u518D\u751F\u3067\u304D\u307E\u305B\u3093${o?`\uFF08${o.message||`\u30B3\u30FC\u30C9 ${o.code}`}\uFF09`:""}`)});T.addEventListener("play",()=>{$.play.textContent="\u275A\u275A \u505C\u6B62"});T.addEventListener("pause",()=>{$.play.textContent="\u25B6 \u518D\u751F"});T.addEventListener("timeupdate",()=>{_e||($.seek.value=String(T.currentTime)),$.time.textContent=`${ve(T.currentTime)} / ${ve(T.duration)}`});var _e=!1;$.seek.addEventListener("input",()=>{_e=!0,T.currentTime=Number($.seek.value)});$.seek.addEventListener("change",()=>{_e=!1,$.seek.blur()});var Pe=()=>{T.paused?T.play().catch(o=>ye(String(o?.message??o))):T.pause()};$.play.addEventListener("click",()=>{Pe(),$.play.blur()});$.rate.addEventListener("change",()=>{T.playbackRate=Number($.rate.value)});$.loop.addEventListener("change",()=>{T.loop=$.loop.checked});$.volume.addEventListener("input",()=>{T.volume=Number($.volume.value)});$.full.addEventListener("click",()=>{$.view.requestFullscreen?.()});T.loop=$.loop.checked;T.volume=Number($.volume.value);T.addEventListener("click",Pe);window.addEventListener("resize",()=>{V.layout(),re()});new ResizeObserver(()=>{V.layout(),re()}).observe(T);document.addEventListener("fullscreenchange",()=>{Object.assign(T.style,document.fullscreenElement?{width:"100%",height:"100%",maxHeight:"none",objectFit:"contain"}:{width:"",height:"",maxHeight:"",objectFit:""}),requestAnimationFrame(()=>{V.layout(),re()})});document.addEventListener("keydown",o=>{o.key===" "&&!o.ctrlKey&&!o.metaKey&&!o.altKey&&T.src&&!(o.target instanceof HTMLInputElement||o.target instanceof HTMLSelectElement)&&(o.preventDefault(),Pe())});$.file.addEventListener("change",()=>{let o=$.file.files?.[0];o&&$e(o)});$.drop.addEventListener("dragover",o=>{o.preventDefault(),$.drop.classList.add("over")});$.drop.addEventListener("dragleave",()=>$.drop.classList.remove("over"));$.drop.addEventListener("drop",o=>{o.preventDefault(),$.drop.classList.remove("over");let e=o.dataTransfer?.files?.[0];e&&$e(e)});document.addEventListener("dragover",o=>o.preventDefault());document.addEventListener("drop",o=>{if($.drop.contains(o.target))return;o.preventDefault();let e=o.dataTransfer?.files?.[0];e&&$e(e)});function ve(o){if(!Number.isFinite(o))return"--:--";let e=Math.floor(o/60),i=o-e*60;return`${e}:${i.toFixed(2).padStart(5,"0")}`}
