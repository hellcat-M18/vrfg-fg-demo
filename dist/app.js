var it={enabled:!1,model:"fg_ncorr",size:"auto",compare:!1,genOnly:!1,showStats:!0,engine:"wgsl",fp16:!0,gain:1,smooth:0,mult:2},rt={spire_pass4_ps2_s2d:"\u88DC\u9593 SPIRE pass4\uFF0Bps2\uFF0BS2D (\u6700\u65B0\u30FBpass4\uFF0Bps2 \u306E\u4E0A\u306B 1.2 \u306E S2D Refine \u3092 2 \u6BB5\u76EE\u306B\u5F8C\u304B\u3089 50k\u30FBW8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_pass4_ps2:"\u88DC\u9593 SPIRE pass4\uFF0Bps2 (1.0 \u306E\u672C\u4F53\uFF0B\u6BB5\u306E\u9593\u306E\u7279\u5FB4 4ch\uFF0B\u5B66\u7FD2\u3057\u305F\u62E1\u5927 PixelShuffle 2\xD72\u30FBW8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001100k\u3001WGSL \u306E\u307F)",spire_1_2:"\u88DC\u9593 SPIRE 1.2 (g8h4\uFF0BS2D Refine 12ch flow_mask\u30FB\u51688bit W8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u300150k\u3001WGSL \u306E\u307F)",spire_1_1:"\u88DC\u9593 SPIRE 1.1 (g8h4\uFF0B2\u6BB5Refine [4,8] flow_mask\u30FB\u51688bit W8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_postg_w8a8:"\u88DC\u9593 SPIRE post_gamma W8A8 (\u51688bit QAT\uFF0Bsnorm8\uFF0Bpost_gamma\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_g8h4_w8a8:"\u88DC\u9593 SPIRE g8h4 W8A8 (\u8D85\u8EFD\u91CF \u221264% MAC\u30FB7.9k\u91CD\u307F\u30FB\u51688bit QAT\uFF0Bsnorm8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_postg:"\u88DC\u9593 SPIRE post_gamma (fp32\u30FB\u03B4\u5F8C\u03B31\u56DE\u4ED5\u4E0A\u3052\uFF0Btemporal\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire:"\u88DC\u9593 SPIRE (temporal\u30FB\u5171\u6709\u30D4\u30E9\u30DF\u30C3\u30C9\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",vi_disrule:"\u88DC\u9593 VRFG i_dis\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 (\u524D\u5F8C\u3067\u8272\u304C\u307B\u307C\u540C\u3058\u753B\u7D20\u306F\u30EF\u30FC\u30D7\u3057\u306A\u3044\u5E73\u5747\u3001\u03C4=0.01\u3001WGSL \u306E\u307F)",vi_disfine:"\u88DC\u9593 VRFG i_dis_fine (\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\u306E\u4EE3\u308F\u308A\u306B DIS \u3092 1/2 \u306E\u6BB5\u307E\u3067\uFF0B\u5C0F\u578BNN\u3001\u88DC\u6B63\u6BB5\u306A\u3057\u3001WGSL \u306E\u307F)",vi_dis:"\u88DC\u9593 VRFG i_dis (\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\u306E\u4EE3\u308F\u308A\u306B DIS\uFF08OpenCV \u306E ULTRAFAST \u76F8\u5F53\uFF09\uFF0B\u5C0F\u578BNN\u3001\u88DC\u6B63\u6BB5\u306A\u3057\u3001WGSL \u306E\u307F)",vi_light:"\u88DC\u9593 VRFG i_refine_light_ov (\u5B57\u5E55\u30FBUI \u306E\u91CD\u306D\u5408\u308F\u305B\u3067\u5B66\u7FD2\u3001\u88DC\u6B63\u6BB5\u3092 1\xD71 \u3067\u8EFD\u91CF\u5316\u3001WGSL \u306E\u307F)",vi_refine:"\u88DC\u9593 VRFG i_refine_bi (\u53CC\u65B9\u5411\u30FBcost volume\u30FB\u30D5\u30EB\u89E3\u50CF\u5EA6\u306E\u88DC\u6B63\u6BB5\u30FB\u8272\u306E\u88DC\u6B63\u3001LPIPS \u3067 RIFE lite \u8D85\u3048\u3001WGSL \u306E\u307F)",vi_shuffle:"\u88DC\u9593 VRFG i_shuffle (i_core \u306E\u62E1\u5927\u3092\u30D4\u30AF\u30BB\u30EB\u30B7\u30E3\u30C3\u30D5\u30EB\u306B\u3001LPIPS \u6539\u5584\u3001WGSL \u306E\u307F)",vi_core:"\u88DC\u9593 VRFG i_core (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6\u3001\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\uFF0B\u5C0F\u578BNN\u3001WGSL \u306E\u307F)",rife_v425lite:"\u88DC\u9593 RIFE 4.25 lite (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6)",rife_v425:"\u88DC\u9593 RIFE 4.25 (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6)",fg_ncorr:"n_corr: cost volume (6.2 GMAC, val \u6700\u826F)",fg_nratio:"n_ratio: \u52D5\u304D\u3092\u5927\u80C6\u306B (\u8868\u793A\u4E0A\u306E\u4F4D\u7F6E\u306E\u640D\u5931)",fg_nb:"n_base: s2d8\u30FB\u5207\u308A\u51FA\u3057448 (\u6BD4\u8F03\u7528)",fg_c:"C (\u65E7\u57FA\u6E96, 5.0 GMAC@540p)",fg_s2d8:"s2d8 (\u65E7, \u5165\u53E3\u3092\u8EFD\u91CF\u5316)"};function Ve(a,e){return a!=="auto"?a.split("x").map(Number):e>0&&e<=400?[640,352]:[960,544]}function st(a,e,i,r=32){let[n,u]=Ve(a,i);if(!(e>0&&i>0))return[n,u];let t=e/i,s=Math.sqrt(n*u*t),o=Math.sqrt(n*u/t),l=Math.min(1,e/s,i/o);s*=l,o*=l;let d=(f,c)=>Math.max(2*r,Math.min(Math.round(f/r),Math.floor(c/r))*r);return[d(s,Math.max(e,2*r)),d(o,Math.max(i,2*r))]}async function Ke(){if(!("gpu"in navigator))throw new Error("WebGPU is not available in this browser");let a=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!a)throw new Error("No WebGPU adapter");let i=["shader-f16","timestamp-query","float32-filterable","subgroups"].filter(n=>a.features.has(n));return{device:await a.requestDevice({requiredFeatures:i,requiredLimits:{maxStorageBufferBindingSize:a.limits.maxStorageBufferBindingSize,maxBufferSize:a.limits.maxBufferSize,maxStorageBuffersPerShaderStage:Math.min(16,a.limits.maxStorageBuffersPerShaderStage)}}),adapterInfo:a.info,f16:i.includes("shader-f16"),timestamps:i.includes("timestamp-query")}}var nt=()=>{throw new Error("onnxruntime-web is not bundled in the web demo")},ke={create:nt},pe={fromGpuBuffer:nt},oe={wasm:{},webgpu:{}};function Ue(a){let e=[],i=r=>{typeof r=="string"&&e.push(r)};Array.isArray(a.in)?a.in.forEach(i):i(a.in),i(a.a),a.op!=="conv"&&a.op!=="deconv"&&i(a.b);for(let r of[a.base,a.init,a.flow,a.fwd,a.bwd,a.res,a.prev])i(r);return e}function we(a){let e=a.out?[a.out]:[];return a.op==="bimatch"&&a.cost&&e.push(a.cost),e}var he=a=>{let e=String(Math.fround(a));return/[.eE]/.test(e)?e:`${e}.0`},Se=class{bufs=[];decl=[];names=new Map;in(e){return this.bind(e,"read")}out(e){return this.bind(e,"read_write")}bind(e,i){let r=this.names.get(e);return r||(r=`b${this.bufs.length}`,this.decl.push(`@group(0) @binding(${this.bufs.length}) var<storage, ${i}> ${r}: array<f32>;`),this.bufs.push(e),this.names.set(e,r)),r}};function De(a,e,i,r,n,u,t,s=o=>o){let o=(l,d)=>s(`${e}[base + ${l} * ${i}u + ${d}]`);return`
fn ${a}(x: u32, y: u32, c: u32) -> f32 {
  let sx = max((f32(x) + 0.5) * ${i}.0 / ${n}.0 - 0.5, 0.0);
  let sy = max((f32(y) + 0.5) * ${r}.0 / ${u}.0 - 0.5, 0.0);
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, ${i-1}u); let y1 = min(y0 + 1u, ${r-1}u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = c * ${i*r}u;
  return mix(mix(${o("y0","x0")}, ${o("y0","x1")}, tx), mix(${o("y1","x0")}, ${o("y1","x1")}, tx), ty) * ${he(t)};
}`}function ot(a,e,i,r){let n=a.ops,u=new Map,t=new Map;n.forEach((g,v)=>{for(let $ of we(g))u.set($,v);for(let $ of Ue(g))t.has($)||t.set($,[]),t.get($).push(v)});let s=g=>t.get(g)??[],o=g=>{let v=a.tensors[g];return{c:v.c,s:v.s,w:i/v.s,h:r/v.s}},l=new Set,d=g=>g!==void 0&&!l.has(g),f=(g,v)=>g.op==="conv"&&Array.isArray(g.in)&&g.in.length===1&&g.in[0]===v&&g.k===1&&g.s===1&&g.p===0&&g.cin===3&&g.cout===1&&(!g.act||g.act==="none")&&!g.res,c=(g,v,$)=>g.op==="pool"&&g.in===v&&g.r===$,y=(g,v)=>`${he(e[g.b])} + ${v}.x * ${he(e[g.w])} + ${v}.y * ${he(e[g.w+1])} + ${v}.z * ${he(e[g.w+2])}`,S=[],z=g=>{if(g===void 0||n[g].op!=="midflow")return;let v=n[g],$=u.get(v.fwd),x=u.get(v.bwd);if($===void 0||x===void 0||n[$].op!=="resize"||n[x].op!=="resize")return;let w=o(v.fwd),G=o(v.out);if(w.c!==2||G.c!==4||w.w!==G.w||w.h!==G.h||o(v.bwd).w!==G.w)return;let M=n[$].in,U=n[x].in,j=o(M),C=o(U);if(!(j.c!==2||C.c!==2))return{m:g,rf:$,rb:x,fs:M,bs:U,w:G.w,h:G.h,fns:B=>De("upF",B.in(M),j.w,j.h,G.w,G.h,n[$].mul??1)+De("upB",B.in(U),C.w,C.h,G.w,G.h,n[x].mul??1),expr:`let fv = vec2f(upF(x, y, 0u), upF(x, y, 1u));
  let bv = vec2f(upB(x, y, 0u), upB(x, y, 1u));
  let m = 0.25 * (bv - fv);`}};for(let g of Object.keys(a.tensors)){if(u.has(g))continue;let v=o(g);if(v.c!==3||v.s!==1||i%32||r%32)continue;let $=s(g).filter(M=>d(M)&&f(n[M],g)),x=s(g).filter(M=>d(M)&&c(n[M],g,4)),w=$.map(M=>{let U=[],j=n[M].out;for(;U.length<5;){let C=s(j).find(B=>d(B)&&c(n[B],j,2));if(C===void 0)break;U.push(C),j=n[C].out}return U}),G=[...$,...w.flat(),...x];G.length<2||(G.forEach(M=>l.add(M)),S.push({ops:G,reads:[g],label:"front",kernels:M=>{let U=new Se,j=U.in(g),C=i*r,B=w.filter(A=>A.length).length,p=B,h="",_=0,b=[[],[],[],[],[],[]];$.forEach((A,F)=>{let q=n[A];if(h+=`
  var c${F}: array<f32, 4>;
  for (var q = 0u; q < 4u; q++) { c${F}[q] = ${y(q,"px[q]")}; }`,M.has(q.out)){let R=U.out(q.out);h+=`
  for (var q = 0u; q < 4u; q++) { ${R}[(y0 + q / 2u) * ${i}u + x0 + q % 2u] = c${F}[q]; }`}let W=w[F];if(!W.length)return;let H=_++,D=n[W[0]].out;h+=`
  { let v = (((c${F}[0] + c${F}[1]) + c${F}[2]) + c${F}[3]) / 4.0;
    sh[${H*256}u + li] = v;${M.has(D)?`
    ${U.out(D)}[(wid.y * 16u + lid.y) * ${i/2}u + wid.x * 16u + lid.x] = v;`:""} }`;for(let R=2;R<=W.length;R++){let I=32>>R,X=n[W[R-1]].out;b[R].push(`
    if (on) {
      let b = ${H*256}u + (2u * lid.y) * ${2*I}u + 2u * lid.x;
      v${H} = (((sh[b] + sh[b + 1u]) + sh[b + ${2*I}u]) + sh[b + ${2*I+1}u]) / 4.0;${M.has(X)?`
      ${U.out(X)}[(wid.y * ${I}u + lid.y) * ${i>>R}u + wid.x * ${I}u + lid.x] = v${H};`:""}
    }`),b[R].push(`
    if (on) { sh[${H*256}u + lid.y * ${I}u + lid.x] = v${H}; }`)}});for(let A=2;A<=5;A++){if(!b[A].length)continue;let F=32>>A,q=b[A].filter((H,D)=>D%2===0),W=b[A].filter((H,D)=>D%2===1);h+=`
  workgroupBarrier();
  {
    let on = lid.x < ${F}u && lid.y < ${F}u;
    ${Array.from({length:B},(H,D)=>`var v${D} = 0.0;`).join(" ")}
    ${q.join("")}
    workgroupBarrier();
    ${W.join("")}
  }`}if(x.length){let A=x.filter(F=>M.has(n[F].out)).map(F=>U.out(n[F].out));h+=`
  for (var c = 0u; c < 3u; c++) { sh[(${p}u + c) * 256u + li] = ((px[0][c] + px[1][c]) + px[2][c]) + px[3][c]; }
  workgroupBarrier();
  if (lid.x < 8u && lid.y < 8u) {
    let b = (2u * lid.y) * 16u + 2u * lid.x;
    let oi = (wid.y * 8u + lid.y) * ${i/4}u + wid.x * 8u + lid.x;
    for (var c = 0u; c < 3u; c++) {
      let sb = (${p}u + c) * 256u + b;
      let v = (((sh[sb] + sh[sb + 1u]) + sh[sb + 16u]) + sh[sb + 17u]) / 16.0;
      ${A.map(F=>`${F}[c * ${C/16}u + oi] = v;`).join(" ")}
    }
  }`}let P=Math.max(1,B+(x.length?3:0));return[{code:`
${U.decl.join(`
`)}
var<workgroup> sh: array<f32, ${256*P}>;
@compute @workgroup_size(16, 16)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 16u + lid.x;
  let x0 = wid.x * 32u + lid.x * 2u; let y0 = wid.y * 32u + lid.y * 2u;
  var px: array<vec3f, 4>;
  for (var q = 0u; q < 4u; q++) {
    let i = (y0 + q / 2u) * ${i}u + x0 + q % 2u;
    px[q] = vec3f(${j}[i], ${j}[${C}u + i], ${j}[${2*C}u + i]);
  }${h}
}`,bufs:U.bufs,wg:[i/32,r/32,1]}]}}))}for(let[g,v]of n.entries()){if(v.op!=="midflow"||l.has(g))continue;let $=z(g);if(!$||!d($.rf)||!d($.rb)||$.w%16||$.h%16)continue;let{w:x,h:w}=$,G=v.fwd,M=v.bwd,U=v.out,j=s(G).filter(b=>d(b)&&c(n[b],G,4)),C=s(M).filter(b=>d(b)&&c(n[b],M,4)),B=s(U).filter(b=>{let P=n[b];if(!d(b)||P.op!=="warp"||P.flow!==U||P.fc!==0&&P.fc!==2)return!1;let T=o(P.in);return T.c===3&&T.w===x&&T.h===w}),p=B.map(b=>s(n[b].out).filter(P=>d(P)&&f(n[P],n[b].out))),h=B.map(b=>s(n[b].out).filter(P=>d(P)&&c(n[P],n[b].out,4))),_=[$.rf,$.rb,g,...j,...C,...B,...p.flat(),...h.flat()];_.forEach(b=>l.add(b)),S.push({ops:_,reads:[$.fs,$.bs,...B.map(b=>n[b].in)],label:"mid",kernels:b=>{let P=new Se,T=x*w,A=$.fns(P),F=$.expr,q=[];if(b.has(G)&&(F+=`
  ${P.out(G)}[i] = fv.x; ${P.out(G)}[${T}u + i] = fv.y;`),b.has(M)&&(F+=`
  ${P.out(M)}[i] = bv.x; ${P.out(M)}[${T}u + i] = bv.y;`),b.has(U)){let D=P.out(U);F+=`
  ${D}[i] = m.x; ${D}[${T}u + i] = m.y; ${D}[${2*T}u + i] = -m.x; ${D}[${3*T}u + i] = -m.y;`}for(let D of j)for(let R=0;R<2;R++)q.push([`fv[${R}]`,b.has(n[D].out)?P.out(n[D].out):void 0,R]);for(let D of C)for(let R=0;R<2;R++)q.push([`bv[${R}]`,b.has(n[D].out)?P.out(n[D].out):void 0,R]);B.forEach((D,R)=>{let I=n[D],X=P.in(I.in),Ce=I.fc===0?"":"-";if(F+=`
  var w${R}: vec3f;
  {
    let sx = clamp(f32(x) + ${Ce}m.x, 0.0, ${x-1}.0);
    let sy = clamp(f32(y) + ${Ce}m.y, 0.0, ${w-1}.0);
    let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
    let x1 = min(x0 + 1u, ${x-1}u); let y1 = min(y0 + 1u, ${w-1}u);
    let tx = sx - f32(x0); let ty = sy - f32(y0);
    for (var c = 0u; c < 3u; c++) {
      let base = c * ${T}u;
      w${R}[c] = mix(mix(${X}[base + y0 * ${x}u + x0], ${X}[base + y0 * ${x}u + x1], tx),
                     mix(${X}[base + y1 * ${x}u + x0], ${X}[base + y1 * ${x}u + x1], tx), ty);
    }
  }`,b.has(I.out)){let Z=P.out(I.out);F+=`
  ${Z}[i] = w${R}.x; ${Z}[${T}u + i] = w${R}.y; ${Z}[${2*T}u + i] = w${R}.z;`}for(let Z of p[R])b.has(n[Z].out)&&(F+=`
  ${P.out(n[Z].out)}[i] = ${y(n[Z],`w${R}`)};`);for(let Z of h[R])for(let J=0;J<3;J++)q.push([`w${R}[${J}]`,b.has(n[Z].out)?P.out(n[Z].out):void 0,J])});let W=q.filter(D=>D[1]);return W.length&&(F+=`
  ${W.map(([D],R)=>`sh[${R*256}u + li] = ${D};`).join(`
  `)}
  workgroupBarrier();
  for (var t = li; t < ${16*W.length}u; t += 256u) {
    let ch = t / 16u; let o = t % 16u; let ox = o % 4u; let oy = o / 4u;
    var s = 0.0;
    for (var j = 0u; j < 4u; j++) { for (var q = 0u; q < 4u; q++) { s += sh[ch * 256u + (oy * 4u + j) * 16u + ox * 4u + q]; } }
    let v = s / 16.0;
    let oi = (wid.y * 4u + oy) * ${x/4}u + wid.x * 4u + ox;
    ${W.map(([,D,R],I)=>`${I?"else ":""}if (ch == ${I}u) { ${D}[${R*(T/16)}u + oi] = v; }`).join(`
    `)}
  }`),[{code:`
${P.decl.join(`
`)}
${W.length?`var<workgroup> sh: array<f32, ${256*W.length}>;`:""}
${A}
@compute @workgroup_size(16, 16)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 16u + lid.x;
  let x = wid.x * 16u + lid.x; let y = wid.y * 16u + lid.y;
  let i = y * ${x}u + x;
  ${F}
}`,bufs:P.bufs,wg:[x/16,w/16,1]}]}})}for(let[g,v]of n.entries()){if(v.op!=="add"||l.has(g))continue;let $=v.b,x=[v.a,$].map(T=>{let A=u.get(T);if(!d(A)||n[A].op!=="resize"||s(T).length!==1)return;let F=u.get(n[A].in);if(!(!d(F)||n[F].op!=="slice"||s(n[A].in).length!==1))return{rr:A,sl:F}}),w=x[1]?1:x[0]?0:-1;if(w<0)continue;let{rr:G,sl:M}=x[w],U=w===1?v.a:$,j=n[M].in,C=o(v.out),B=o(j),p=o(n[M].out);if(o(U).w!==C.w||o(U).c!==p.c||C.w%16||C.h%16)continue;let h=z(u.get(U)),_=!!h&&C.c===4&&C.w===h.w&&C.h===h.h,b=[];for(let T of s(j)){if(!d(T)||T===M||n[T].op!=="slice"||o(n[T].out).c!==1)continue;let A=s(n[T].out);if(A.length!==1||!d(A[0])||n[A[0]].op!=="sigmoid")continue;let F=s(n[A[0]].out);if(F.length!==1||!d(F[0])||n[F[0]].op!=="resize")continue;let q=o(n[F[0]].out);if(!(q.w!==C.w||q.h!==C.h)){b=[T,A[0],F[0]];break}}let P=[M,G,g,...b];P.forEach(T=>l.add(T)),S.push({ops:P,reads:[j,..._?[h.fs,h.bs]:[U]],label:"tail",kernels:T=>{let A=new Se,F=C.w*C.h,q=A.in(j),W=n[M],H=De("upH",q,B.w,B.h,C.w,C.h,n[G].mul??1,I=>`(${I} * ${he(W.mul??1)})`),D="";if(_)H+=h.fns(A),D+=h.expr+`
  let dv = array<f32, 4>(m.x, m.y, -m.x, -m.y);`;else{let I=A.in(U);D+=`
  var dv: array<f32, ${p.c}>;
  for (var c = 0u; c < ${p.c}u; c++) { dv[c] = ${I}[c * ${F}u + i]; }`}if(T.has(v.out)){let I=A.out(v.out),X=w===1?"dv[c] + r":"r + dv[c]";D+=`
  for (var c = 0u; c < ${p.c}u; c++) { let r = upH(x, y, ${W.c0??0}u + c); ${I}[c * ${F}u + i] = ${X}; }`}if(b.length&&T.has(n[b[2]].out)){let I=n[b[0]];H+=De("upM",q,B.w,B.h,C.w,C.h,n[b[2]].mul??1,X=>`(1.0 / (1.0 + exp(-(${X} * ${he(I.mul??1)}))))`),D+=`
  ${A.out(n[b[2]].out)}[i] = upM(x, y, ${I.c0??0}u);`}return[{code:`
${A.decl.join(`
`)}
${H}
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let x = gid.x; let y = gid.y;
  let i = y * ${C.w}u + x;
  ${D}
}`,bufs:A.bufs,wg:[C.w/16,C.h/16,1]}]}})}return S}async function dt(a){let[e,i]=await Promise.all([fetch(`${a}.json`),fetch(`${a}.bin`)]);if(!e.ok||!i.ok)throw new Error(`${a}.json/.bin \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 (npm run fg-models)`);let r=await e.json(),n=new Float32Array(await i.arrayBuffer());if(r.format!=="vrfg-ir/1"||n.length!==r.weightCount)throw new Error(`invalid model ${a}`);return{ir:r,weights:n}}var ue=8;function bt(a,e,i,r){return r>=8?[4,Math.min(4,i)]:i>=32&&a*e>=8e3?[2,2]:i<=4?[1,1]:[1,Math.min(2,i)]}function Ye(a,e,i){return e==="lrelu"?`${a} = max(${a}, ${a} * ${i.toFixed(6)});`:e==="tanh_snorm8"?`${a} = round(clamp(tanh(clamp(${a}, vec4f(-20.0), vec4f(20.0))), vec4f(-1.0), vec4f(1.0)) * 127.0) / 127.0;`:""}function xt(a,e,i,r,n,u){let t=e.reduce((c,y)=>c+y,0),s=e.map((c,y)=>`@group(0) @binding(${3+y}) var<storage, read> in${y}: array<f32>;`).join(`
`),o=Array.from({length:i},(c,y)=>y),l="",d=0;e.forEach((c,y)=>{l+=`${y?" else ":""}if (c < ${d+c}u) { v = in${y}[(c - ${d}u) * planeIn + idx]; }`,d+=c});let f=Ye("r",r,n);return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
${s}
${u?`@group(0) @binding(${3+a}) var<storage, read> rs: array<f32>;`:""}
@group(0) @binding(${3+a+(u?1:0)}) var<storage, read_write> o: array<f32>;
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
  ${o.map(c=>`var a${c} = b[og + ${c}u];`).join(" ")}
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
        ${o.map(c=>`{ let wb = (og + ${c}u) * ${t*9}u + cb * 9u + tap;
          a${c} += s.x * w[wb];
          if (cb + 1u < ${t}u) { a${c} += s.y * w[wb + 9u]; }
          if (cb + 2u < ${t}u) { a${c} += s.z * w[wb + 18u]; }
          if (cb + 3u < ${t}u) { a${c} += s.w * w[wb + 27u]; } }`).join(`
        `)}
      }
    }
    workgroupBarrier();
  }
  if (ox >= d.outW || oy >= d.outH) { return; }
  let plane = d.outW * d.outH; let pi = oy * d.outW + ox;
  ${o.map(c=>`{ var r = a${c}; let c0 = (og + ${c}u) * 4u;
    ${u?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { r[j] += rs[(c0 + j) * plane + pi]; } }":""}
    ${f}
    for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = r[j]; } } }`).join(`
  `)}
}`}function wt(a,e,i,r,n,u,t,s,o=.1,l=!1){let d=e.reduce((x,w)=>x+w,0),f=e.map((x,w)=>`@group(0) @binding(${3+w}) var<storage, read> in${w}: array<f32>;`).join(`
`),c=Array.from({length:u},(x,w)=>w),y=Array.from({length:s},(x,w)=>w),S=c.flatMap(x=>y.map(w=>`var a${x}_${w} = b[og + ${x}u];`)).join(`
  `),z="",g=0;for(let x=0;x<a;x++)i===1&&r===1&&n===0?z+=`
  for (var ci = 0u; ci < ${e[x]}u; ci++) {
    let row = ci * d.inH * d.inW + oy * d.inW;
    let wi = ${g}u + ci;
    ${c.map(w=>`let w${w} = w[(og + ${w}u) * ${d}u + wi];`).join(" ")}
    ${y.map(w=>`{ let ix = ox0 + ${w}u; if (ix < d.inW) { let v = in${x}[row + ix]; ${c.map(G=>`a${G}_${w} += v * w${G};`).join(" ")} } }`).join(`
    `)}
  }`:z+=`
  for (var ci = 0u; ci < ${e[x]}u; ci++) {
    let base = ci * d.inH * d.inW;
    for (var ky = 0u; ky < ${i}u; ky++) {
      let iy = i32(oy * ${r}u + ky) - ${n};
      if (iy < 0 || iy >= i32(d.inH)) { continue; }
      let row = base + u32(iy) * d.inW;
      for (var kx = 0u; kx < ${i}u; kx++) {
        let wi = (${g}u + ci) * ${i*i}u + ky * ${i}u + kx;
        ${c.map(w=>`let w${w} = w[(og + ${w}u) * ${d*i*i}u + wi];`).join(" ")}
        ${y.map(w=>`{ let ix = i32((ox0 + ${w}u) * ${r}u + kx) - ${n};
          if (ix >= 0 && ix < i32(d.inW)) { let v = in${x}[row + u32(ix)]; ${c.map(G=>`a${G}_${w} += v * w${G};`).join(" ")} } }`).join(`
        `)}
      }
    }
  }`,g+=e[x];let v=Ye("r",t,o),$=y.map(x=>`
  if (ox0 + ${x}u < d.outW) {
    ${c.map(w=>`{ var r = a${w}_${x}; let c0 = (og + ${w}u) * 4u; let pi = oy * d.outW + ox0 + ${x}u;
      ${l?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { r[j] += rs[(c0 + j) * plane + pi]; } }":""}
      ${v}
      for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = r[j]; } } }`).join(`
    `)}
  }`).join("");return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
${f}
${l?`@group(0) @binding(${3+a}) var<storage, read> rs: array<f32>;`:""}
@group(0) @binding(${3+a+(l?1:0)}) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(${ue}, ${ue})
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let ox0 = gid.x * ${s}u; let oy = gid.y;
  if (ox0 >= d.outW || oy >= d.outH) { return; }
  let og = gid.z * ${u}u;
  if (og >= d.cout4) { return; }
  let plane = d.outW * d.outH;
  ${S}
  ${z}
  ${$}
}`}var vt=`
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
}`,$t=`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, c: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.outW || gid.y >= d.outH) { return; }
  let ib = gid.z * d.inW * d.inH + gid.y * 2u * d.inW + gid.x * 2u;
  o[gid.z * d.outW * d.outH + gid.y * d.outW + gid.x] = (a[ib] + a[ib + 1u] + a[ib + d.inW] + a[ib + d.inW + 1u]) * 0.25;
}`,_t=`
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
}`,Pt=`
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
}`,kt=`
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
}`;function St(a,e,i,r,n){let u=Array.from({length:n},(t,s)=>s);return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
@group(0) @binding(3) var<storage, read> a: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(${ue}, ${ue})
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let ox = gid.x; let oy = gid.y;
  if (ox >= d.outW || oy >= d.outH) { return; }
  let og = gid.z * ${n}u;
  if (og >= d.cout4) { return; }
  ${u.map(t=>`var a${t} = b[og + ${t}u];`).join(" ")}
  for (var ci = 0u; ci < ${a}u; ci++) {
    let base = ci * d.inH * d.inW;
    for (var ky = (oy + ${r}u) % ${i}u; ky < ${e}u; ky += ${i}u) {
      let ny = i32(oy) + ${r} - i32(ky);
      if (ny < 0) { continue; }
      let iy = u32(ny) / ${i}u;
      if (iy >= d.inH) { continue; }
      for (var kx = (ox + ${r}u) % ${i}u; kx < ${e}u; kx += ${i}u) {
        let nx = i32(ox) + ${r} - i32(kx);
        if (nx < 0) { continue; }
        let ix = u32(nx) / ${i}u;
        if (ix >= d.inW) { continue; }
        let v = a[base + iy * d.inW + ix];
        let wi = ci * ${e*e}u + ky * ${e}u + kx;
        ${u.map(t=>`a${t} += v * w[(og + ${t}u) * ${a*e*e}u + wi];`).join(" ")}
      }
    }
  }
  let plane = d.outW * d.outH; let pi = oy * d.outW + ox;
  ${u.map(t=>`{ let c0 = (og + ${t}u) * 4u; for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = a${t}[j]; } } }`).join(`
  `)}
}`}function Ut(a,e,i,r,n,u,t,s,o=!1){let l=e.reduce((z,g)=>z+g,0),d=i*i,f=e.map((z,g)=>`@group(0) @binding(${3+g}) var<storage, read> in${g}: array<f32>;`).join(`
`),c="",y=0;e.forEach((z,g)=>{c+=`${g?" else ":""}if (ci < ${y+z}u) { v = in${g}[(ci - ${y}u) * d.inH * d.inW + idx]; }`,y+=z});let S=o?`
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
    var rv = part[0] + b[og];`;return`${o?`enable subgroups;
`:""}
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
${f}
${s?`@group(0) @binding(${3+a}) var<storage, read> rs: array<f32>;`:""}
@group(0) @binding(${3+a+(s?1:0)}) var<storage, read_write> o: array<f32>;
var<workgroup> part: array<vec4f, 64>;
@compute @workgroup_size(64)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_index) li: u32${o?", @builtin(subgroup_size) sgs: u32":""}) {
  let ox = wid.x; let oy = wid.y; let og = wid.z;
  var acc = vec4f(0.0);
  for (var t = li; t < ${l*d}u; t += 64u) {
    let ci = t / ${d}u; let r = t % ${d}u; let ky = r / ${i}u; let kx = r % ${i}u;
    let iy = i32(oy * ${r}u + ky) - ${n}; let ix = i32(ox * ${r}u + kx) - ${n};
    if (iy < 0 || iy >= i32(d.inH) || ix < 0 || ix >= i32(d.inW)) { continue; }
    let idx = u32(iy) * d.inW + u32(ix);
    var v = 0.0;
    ${c}
    acc += v * w[og * ${l*d}u + t];
  }
  ${S}
    let plane = d.outW * d.outH; let pi = oy * d.outW + ox; let c0 = og * 4u;
    ${s?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { rv[j] += rs[(c0 + j) * plane + pi]; } }":""}
    ${Ye("rv",u,t)}
    for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = rv[j]; } }
  }
}`}var Bt=1024,Et=`
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
}`,ut=`
struct D { n: u32, c0: u32, p0: u32, p1: u32, mul: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.y * d.n + gid.x] = a[(d.c0 + gid.y) * d.n + gid.x] * d.mul;
}`,Gt=`
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
}`,Ct=`
struct D { n: u32, p0: u32, p1: u32, p2: u32, v: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.x] = d.v;
}`,Ft=`
struct D { n: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.x] = 1.0 / (1.0 + exp(-a[gid.x]));
}`,zt=`
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
}`,Mt=`
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
}`,Tt=`
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
}`,de=8;function Dt(a){let e=2*a+1;return`
struct D { w: u32, h: u32, k: u32, p0: u32, penalty: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> base: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
var<workgroup> cost: array<f32, ${de*e*e}>;
fn sub(cm: f32, c0: f32, cp: f32) -> f32 {
  let den = 2.0 * (max(cm, cp) - c0);
  if (den > 1e-9) { return clamp((cm - cp) / den, -0.5, 0.5); }
  return 0.0;
}
@compute @workgroup_size(${e}, ${de})
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let cell = wid.x * ${de}u + lid.y;        // cells in row-major order
  let n2 = d.w * d.h;
  let valid = cell < n2;
  let cx = i32(cell % d.w); let cy = i32(cell / d.w);
  let W = i32(d.w); let H = i32(d.h);
  let hk = i32(d.k / 2u);
  let dy = i32(lid.x) - ${a};
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
          s[j] += abs(av - b[by + u32(clamp(qx + j - ${a}, 0, W - 1))]);
        }
      }
    }
    for (var j = 0; j < ${e}; j++) {
      let dx = j - ${a};
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
  o[cell] = base[cell] + f32(ix - ${a}) + sub(cxm, c0, cxp);
  o[n2 + cell] = base[n2 + cell] + f32(iy - ${a}) + sub(cym, c0, cyp);
}`}var At=`
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
}`;function Rt(a){let e=2*a+1;return`
struct D { w: u32, h: u32, k: u32, p0: u32, penalty: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> base: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
@group(0) @binding(5) var<storage, read_write> oc: array<f32>;
var<workgroup> cost: array<f32, ${de*e*e}>;
fn sub(cm: f32, c0: f32, cp: f32) -> f32 {
  let den = 2.0 * (max(cm, cp) - c0);
  if (den > 1e-9) { return clamp((cm - cp) / den, -0.5, 0.5); }
  return 0.0;
}
fn par(m: i32) -> i32 { return ((m % 2) + 2) % 2; }
@compute @workgroup_size(${e}, ${de})
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let cell = wid.x * ${de}u + lid.y;
  let n2 = d.w * d.h;
  let valid = cell < n2;
  let cx = i32(cell % d.w); let cy = i32(cell / d.w);
  let W = i32(d.w); let H = i32(d.h);
  let hk = i32(d.k / 2u);
  let my = i32(lid.x) - ${a};
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
          let mx = j - ${a};
          let px = par(mx); let kx = (mx - px) / 2;
          let ch = u32(py * 2 + px) * n2;
          s[j] += abs(a[ch + ay + u32(clamp(qx - kx, 0, W - 1))] - b[ch + by + u32(clamp(qx + kx, 0, W - 1))]);
        }
      }
    }
    for (var j = 0; j < ${e}; j++) {
      let mx = j - ${a};
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
  o[cell] = base[cell] + (f32(ix - ${a}) + sub(cxm, c0, cxp)) * 0.5;
  o[n2 + cell] = base[n2 + cell] + (f32(iy - ${a}) + sub(cym, c0, cyp)) * 0.5;
  oc[cell] = c0;
}`}function Lt(a,e,i){let r=a*e,n=8*i+2*r,u=2*a+1;return`
struct D { w: u32, h: u32, r: u32, step: u32, cell: u32, p0: u32, p1: u32, p2: u32, mul: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
var<workgroup> ta: array<f32, ${n*n}>;
var<workgroup> tb: array<f32, ${n*n}>;
@compute @workgroup_size(8, 8)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let ow = d.w / ${i}u; let oh = d.h / ${i}u;
  let li = lid.y * 8u + lid.x;
  let gx = i32(wid.x * ${8*i}u) - ${r}; let gy = i32(wid.y * ${8*i}u) - ${r};
  for (var t = li; t < ${n*n}u; t += 64u) {
    let y = u32(clamp(gy + i32(t / ${n}u), 0, i32(d.h) - 1)); let x = u32(clamp(gx + i32(t % ${n}u), 0, i32(d.w) - 1));
    ta[t] = a[y * d.w + x]; tb[t] = b[y * d.w + x];
  }
  workgroupBarrier();
  let cx = wid.x * 8u + lid.x; let cy = wid.y * 8u + lid.y;
  if (cx >= ow || cy >= oh) { return; }
  for (var z = 0u; z < ${u*u}u; z++) {
    let dy = (i32(z / ${u}u) - ${a}) * ${e}; let dx = (i32(z % ${u}u) - ${a}) * ${e};
    var s = 0.0;
    for (var j = 0; j < ${i}; j++) {
      let y = i32(lid.y) * ${i} + j + ${r};
      let ay = u32(y + dy) * ${n}u; let by = u32(y - dy) * ${n}u;
      for (var i = 0; i < ${i}; i++) {
        let x = i32(lid.x) * ${i} + i + ${r};
        s += abs(ta[ay + u32(x + dx)] - tb[by + u32(x - dx)]);
      }
    }
    o[z * ow * oh + cy * ow + cx] = s / f32(${i*i}u) * d.mul;
  }
}`}var jt=`
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
  ${[[1,2],[4,5],[7,8],[0,1],[3,4],[6,7],[1,2],[4,5],[7,8],[0,3],[5,8],[4,7],[3,6],[1,4],[2,5],[4,7],[4,2],[6,4],[4,2]].map(([a,e])=>`{ let lo = min(p[${a}], p[${e}]); p[${e}] = max(p[${a}], p[${e}]); p[${a}] = lo; }`).join(`
  `)}
  o[base + gid.y * d.w + gid.x] = p[4] * d.mul;
}`,It=`
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
}`;function Ot(a,e=!1){let i=a*a,r=e?`
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
${r}
@compute @workgroup_size(${i})
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_index) l: u32${e?", @builtin(subgroup_size) sgs: u32":""}) {
  ${e?"sgSize = sgs;":""}
  let st = i32(d.stride);
  let x = i32(wid.x) * st + i32(l % ${a}u); let y = i32(wid.y) * st + i32(l / ${a}u);
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
  let ci = u32(clamp(i32(wid.y) * st + ${a>>1}, 0, i32(d.h) - 1)) * d.w + u32(clamp(i32(wid.x) * st + ${a>>1}, 0, i32(d.w) - 1));
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
  if (length(bestU - u0) > ${a}.0) { bestU = u0; }
  if (l == 0u) {
    let pi = wid.y * d.px + wid.x;
    o[pi] = bestU.x; o[d.px * d.py + pi] = bestU.y;
  }
}`}var qt=`
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
}`;function Wt(a,e){let i=2*a+1,r=i*i,n=8+2*a,u=Array.from({length:r},(d,f)=>f),t=u.map(d=>{let f=Math.floor(d/i)-a,c=d%i-a;return[d,f,c]}),s=u.map(d=>`var a${d} = 0.0;`).join(" "),o=t.map(([d,f,c])=>`a${d} += ta[u32(ly - (${f})) * ${n}u + u32(lx - (${c}))] * tb[u32(ly + (${f})) * ${n}u + u32(lx + (${c}))];`).join(`
    `),l=u.map(d=>{let f=e?`round(clamp(a${d} * inv, -1.0, 1.0) * 127.0) / 127.0`:`a${d} * inv`;return`o[${d}u * n + i] = ${f};`}).join(" ");return`
struct D { w: u32, h: u32, c: u32, r: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read_write> o: array<f32>;
var<workgroup> ta: array<f32, ${n*n}>;
var<workgroup> tb: array<f32, ${n*n}>;
@compute @workgroup_size(8, 8)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 8u + lid.x;
  let n = d.w * d.h;
  let gx = i32(wid.x * 8u) - ${a}; let gy = i32(wid.y * 8u) - ${a};
  let W = i32(d.w) - 1; let H = i32(d.h) - 1;
  ${s}
  for (var c = 0u; c < d.c; c++) {
    let base = c * n;
    for (var t = li; t < ${n*n}u; t += 64u) {
      let y = u32(clamp(gy + i32(t / ${n}u), 0, H));
      let x = u32(clamp(gx + i32(t % ${n}u), 0, W));
      let idx = base + y * d.w + x;
      ta[t] = a[idx]; tb[t] = b[idx];
    }
    workgroupBarrier();
    let ly = i32(lid.y) + ${a}; let lx = i32(lid.x) + ${a};
    ${o}
    workgroupBarrier();
  }
  let ox = wid.x * 8u + lid.x; let oy = wid.y * 8u + lid.y;
  if (ox >= d.w || oy >= d.h) { return; }
  let i = oy * d.w + ox; let inv = 1.0 / f32(d.c);
  ${l}
}`}var Ht=`
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
}`,Nt=`
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
}`,Vt=`
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
}`,Kt=`
struct D { n: u32, p0: u32, p1: u32, p2: u32, v: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) g: vec3u) {
  let i = g.y * 65535u * 256u + g.x;
  if (i >= d.n) { return; }
  o[i] = clamp(a[i] + d.v, 0.0, 1.0);
}`,Yt=`
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
}`,Qt=`
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
}`,Xt=`
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
}`,Zt=`
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
}`,Jt=`
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
}`;function ei(a){let e=8+2*a,i=2*a+1;return`
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
  let bx = i32(wid.x * 8u) - ${a}; let by = i32(wid.y * 8u) - ${a};
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
  let x0 = max(0, i32(ox) - ${a}); let x1 = min(i32(d.w) - 1, i32(ox) + ${a});
  let y0 = max(0, i32(oy) - ${a}); let y1 = min(i32(d.h) - 1, i32(oy) + ${a});
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
}`}function ti(a){let e=8+2*a,i=2*a+1;return`
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
  let bx = i32(wid.x * 8u) - ${a}; let by = i32(wid.y * 8u) - ${a};
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
  let x0 = max(0, i32(ox) - ${a}); let x1 = min(i32(d.w) - 1, i32(ox) + ${a});
  let y0 = max(0, i32(oy) - ${a}); let y1 = min(i32(d.h) - 1, i32(oy) + ${a});
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
}`}var ii=`
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
}`,ri=`
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
}`,si=`
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
}`,ni=`
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
}`,ai=`
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
}`,me=class a{constructor(e,i,r,n,u,t,s={}){this.device=e;this.ir=i;this.weights=r;this.w=n;this.h=u;this.cfg=t;this.opts=s}device;ir;weights;w;h;cfg;opts;kind="wgsl";bufs=new Map;steps=[];stepsCached=[];cachePairs=[];owned=[];pipeCache=new Map;get hasFrameCache(){return this.cachePairs.length>0}convCfgs={};external=new Set;static async create(e,i,r,n,u,t,s){if(n%32||u%32)throw new Error("input size must be a multiple of 32");let o=new a(e,i,r,n,u,t,s);for(let[l,d]of Object.entries(i.tensors)){let f=d.c*(u/d.s)*(n/d.s);o.bufs.set(l,o.buffer(f*4,l))}return o}buffer(e,i,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=this.device.createBuffer({size:Math.max(16,Math.ceil(e/16)*16),usage:r,label:i});return this.owned.push(n),n}uniform(e,i=[]){let r=this.buffer(32,"dims",GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),n=new ArrayBuffer(32);return new Uint32Array(n,0,8).set(e),i.length&&new Float32Array(n,16,4).set(i),this.device.queue.writeBuffer(r,0,n),r}pipeline(e){let i=this.pipeCache.get(e);return i||(i=this.device.createComputePipelineAsync({layout:"auto",compute:{module:this.device.createShaderModule({code:e}),entryPoint:"main"}}),this.pipeCache.set(e,i)),i}dims(e){let i=this.ir.tensors[e];return{c:i.c,w:this.w/i.s,h:this.h/i.s}}async bind(e,i){this.bufs.set("flow",i),this.external.add("flow"),await this.build(e)}async bindNamed(e){for(let[i,r]of Object.entries(e))this.bufs.set(i,r),this.external.add(i);await this.build([])}async build(e){let i=this.device,r=this.ir,n=0,u,t=!1,s=(p,h,_)=>{this.steps.push({pipe:p,wg:_,op:n,label:u,img0Only:t,bind:i.createBindGroup({layout:p.getBindGroupLayout(0),entries:h.map((b,P)=>({binding:P,resource:{buffer:b}}))})})},o=this.opts.fuse??!0,l=o?ot(r,this.weights,this.w,this.h):[],d=new Set(l.flatMap(p=>p.ops)),f=l.map(p=>({ops:p.ops,reads:p.reads,writes:p.ops.flatMap(h=>we(r.ops[h])),group:p}));r.ops.forEach((p,h)=>{d.has(h)||f.push({ops:[h],reads:Ue(p),writes:we(p)})});let c=new Set(f.flatMap(p=>p.writes)),y=new Set(this.external);for(let p of f)for(let h of p.writes)f.some(_=>_!==p&&_.reads.includes(h))&&y.add(h);let S=new Set,z=f.sort((p,h)=>Math.min(...p.ops)-Math.min(...h.ops)),g=[];for(;z.length;){let p=z.findIndex(_=>_.reads.every(b=>S.has(b)||!c.has(b)));if(p<0)throw new Error("fusion: no schedulable op");let[h]=z.splice(p,1);g.push(h),h.writes.forEach(_=>S.add(_))}let v=new Map([["img0","img0"],["img1","img1"]]),$=new Map([["img0","SRC"],["img1","SRC"]]),x=new Map;r.ops.forEach((p,h)=>{for(let _ of we(p))x.set(_,h)});let w=p=>{let h=Ue(p);if(!h.length)return"mixed";let _;for(let b of h){let P=v.get(b)??"mixed";if(P==="mixed"||_&&_!==P)return"mixed";_=P}return _??"mixed"},G=p=>{if($.has(p))return $.get(p);let h=x.get(p);if(h===void 0)return`EXT:${p}`;let _=r.ops[h],b=r.tensors[p],P=Ue(_).map(G).join(","),T=_.op==="conv"?`conv(${_.cin},${_.cout},${_.k},${_.s},${_.p},${_.act},${_.w},${_.b},${b.c},${b.s};${P})`:_.op==="pool"?`pool(${_.r},${b.c},${b.s};${P})`:`op(${_.op},${h})`;return $.set(p,T),T};for(let p of r.ops){let h=w(p);for(let _ of we(p))v.set(_,h)}let M=new Set;for(let p of g)p.writes.length&&p.writes.every(h=>v.get(h)==="img0")&&p.reads.every(h=>v.get(h)==="img0")&&M.add(p);let U=new Set;for(let p of g)if(!M.has(p))for(let h of p.reads)v.get(h)==="img0"&&U.add(h);let j=new Map;for(let p of c)v.get(p)==="img1"&&j.set(G(p),p);let C=[],B=M.size>0&&U.size>0;for(let p of U){let h=j.get(G(p));if(!h||!y.has(p)){B=!1;break}let _=this.bufs.get(p),b=this.bufs.get(h);if(!_||!b||_.size!==b.size){B=!1;break}y.add(h),C.push([b,_])}for(let p of g)if(n=Math.min(...p.ops),u=p.group?.label,t=B&&M.has(p),p.group)for(let h of p.group.kernels(y))s(await this.pipeline(h.code),h.bufs.map(_=>this.bufs.get(_)),h.wg);else if(o&&r.ops[n].op==="fill"){let h=r.ops[n],_=this.dims(h.out);i.queue.writeBuffer(this.bufs.get(h.out),0,new Float32Array(_.c*_.w*_.h).fill(h.v??0))}else await this.buildOp(n,e,s);B?(this.cachePairs=C,this.stepsCached=this.steps.filter(p=>!p.img0Only)):(this.cachePairs=[],this.stepsCached=this.steps)}async buildOp(e,i,r){let n=this.device,u=(s,o)=>Math.ceil(s/o),t=this.ir.ops[e];if(t.op==="prep"){let s=await this.pipeline(vt);r(s,[this.uniform([this.w,this.h]),...i,...["x","x0","x1","x2"].map(o=>this.bufs.get(o))],[u(this.w,16),u(this.h,16),1])}else if(t.op==="conv"){let s=t.in,o=s.map(B=>this.ir.tensors[B].c),l=this.dims(s[0]),d=this.dims(t.out),f=Math.ceil(t.cout/4),c=bt(d.w,d.h,f,t.k),[y,S]=this.cfg?this.cfg(e,c):c;this.convCfgs[e]=[y,S];let z=t.k,g=t.cin,v=z*z,$=new Float32Array(f*g*v*4);for(let B=0;B<t.cout;B++)for(let p=0;p<g;p++)for(let h=0;h<v;h++)$[((Math.floor(B/4)*g+p)*v+h)*4+B%4]=this.weights[t.w+(B*g+p)*v+h];let x=new Float32Array(f*4);x.set(this.weights.subarray(t.b,t.b+t.cout));let w=t.act??"none",G=d.w*d.h,M=G<=Bt&&!this.cfg,U=this.buffer($.byteLength,`${t.out}-w`),j=this.buffer(x.byteLength,`${t.out}-b`);n.queue.writeBuffer(U,0,$),n.queue.writeBuffer(j,0,x);let C=[this.uniform([l.w,l.h,d.w,d.h,t.cout,f]),U,j,...s.map(B=>this.bufs.get(B)),...t.res?[this.bufs.get(t.res)]:[],this.bufs.get(t.out)];if(M){let B=this.device.features.has("subgroups")&&(this.opts.subgroups??!0),p=await this.pipeline(Ut(s.length,o,z,t.s,t.p,w,t.slope??.1,!!t.res,B));r(p,C,[d.w,d.h,f])}else if(!this.cfg&&z===3&&t.s===1&&t.p===1&&f<=4&&g>=4){let B=G>=3e4?f:1,p=await this.pipeline(xt(s.length,o,B,w,t.slope??.1,!!t.res));r(p,C,[u(d.w,8),u(d.h,8),u(f,B)])}else{let B=!this.cfg&&z===1&&t.s===1&&t.p===0&&f<=4&&g>=16?f:S,p=await this.pipeline(wt(s.length,o,z,t.s,t.p,B,w,y,t.slope??.1,!!t.res));r(p,C,[u(d.w,ue*y),u(d.h,ue),u(f,B)])}}else if(t.op==="pool2"){let s=this.dims(t.in),o=this.dims(t.out);r(await this.pipeline($t),[this.uniform([s.w,s.h,o.w,o.h,s.c]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),s.c])}else if(t.op==="norm"){let s=this.dims(t.in);r(await this.pipeline(_t),[this.uniform([s.w,s.h,s.c]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),1])}else if(t.op==="corr"){let s=this.dims(t.a),o=t.r,l=t.b;r(await this.pipeline(Pt),[this.uniform([s.w,s.h,s.c,o]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),(2*o+1)**2])}else if(t.op==="resize"){let s=this.dims(t.in),o=this.dims(t.like??t.out);r(await this.pipeline(kt),[this.uniform([s.w,s.h,o.w,o.h],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),s.c])}else if(t.op==="deconv"){let s=this.dims(t.in),o=this.dims(t.out),l=Math.ceil(t.cout/4),d=Math.min(2,l),f=t.k,c=t.cin,y=t.cout,S=f*f,z=new Float32Array(l*c*S*4);for(let x=0;x<c;x++)for(let w=0;w<y;w++)for(let G=0;G<S;G++)z[((Math.floor(w/4)*c+x)*S+G)*4+w%4]=this.weights[t.w+(x*y+w)*S+G];let g=new Float32Array(l*4);g.set(this.weights.subarray(t.b,t.b+y));let v=this.buffer(z.byteLength,`${t.out}-w`),$=this.buffer(g.byteLength,`${t.out}-b`);n.queue.writeBuffer(v,0,z),n.queue.writeBuffer($,0,g),r(await this.pipeline(St(c,f,t.s,t.p,d)),[this.uniform([s.w,s.h,o.w,o.h,y,l]),v,$,this.bufs.get(t.in),this.bufs.get(t.out)],[u(o.w,ue),u(o.h,ue),u(l,d)])}else if(t.op==="pixshuffle"){let s=this.dims(t.out);r(await this.pipeline(Et),[this.uniform([s.w,s.h,t.r]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),s.c])}else if(t.op==="slice"){let s=this.dims(t.out),o=s.w*s.h;r(await this.pipeline(ut),[this.uniform([o,t.c0??0],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o,256),s.c,1])}else if(t.op==="warp"){let s=this.dims(t.in);r(await this.pipeline(zt),[this.uniform([s.w,s.h,t.fc??0]),this.bufs.get(t.in),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),s.c])}else if(t.op==="add"){let s=this.dims(t.out),o=s.c*s.w*s.h,l=t.b;r(await this.pipeline(Gt),[this.uniform([o]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[Math.min(65535,u(o,256)),u(o,256*65535),1])}else if(t.op==="fill"){let s=this.dims(t.out),o=s.c*s.w*s.h;r(await this.pipeline(Ct),[this.uniform([o],[t.v??0]),this.bufs.get(t.out)],[u(o,256),1,1])}else if(t.op==="sigmoid"){let s=this.dims(t.out),o=s.c*s.w*s.h;r(await this.pipeline(Ft),[this.uniform([o]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o,256),1,1])}else if(t.op==="pool"){let s=this.dims(t.in),o=this.dims(t.out);r(await this.pipeline(Mt),[this.uniform([s.w,s.h,o.w,o.h,t.r]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),s.c])}else if(t.op==="zmean"){let s=this.dims(t.in);r(await this.pipeline(Tt),[this.uniform([s.w,s.h,t.k]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),s.c])}else if(t.op==="bmatch"){let s=this.dims(t.a),o=t.b;r(await this.pipeline(Dt(t.r)),[this.uniform([s.w,s.h,t.k],[t.penalty??0]),this.bufs.get(t.a),this.bufs.get(o),this.bufs.get(t.base),this.bufs.get(t.out)],[u(s.w*s.h,de),1,1])}else if(t.op==="biwarp"){let s=this.dims(t.in);r(await this.pipeline(At),[this.uniform([s.w,s.h],[t.sign??1]),this.bufs.get(t.in),this.bufs.get(t.base),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),4])}else if(t.op==="bimatch"){let s=this.dims(t.a),o=t.b;r(await this.pipeline(Rt(t.r)),[this.uniform([s.w,s.h,t.k],[t.penalty??0]),this.bufs.get(t.a),this.bufs.get(o),this.bufs.get(t.base),this.bufs.get(t.out),this.bufs.get(t.cost)],[u(s.w*s.h,de),1,1])}else if(t.op==="rescost"){let s=this.dims(t.a),o=this.dims(t.out),l=t.b,d=this.buffer(48,"dims",GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),f=new ArrayBuffer(48);new Uint32Array(f,0,5).set([s.w,s.h,t.r,t.step,t.cell]),new Float32Array(f,32,1).set([t.mul??1]),n.queue.writeBuffer(d,0,f),r(await this.pipeline(Lt(t.r,t.step,t.cell)),[d,this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),1])}else if(t.op==="median3"){let s=this.dims(t.in);r(await this.pipeline(jt),[this.uniform([s.w,s.h],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),s.c])}else if(t.op==="midflow"){let s=this.dims(t.fwd),o=s.w*s.h;r(await this.pipeline(It),[this.uniform([o]),this.bufs.get(t.fwd),this.bufs.get(t.bwd),this.bufs.get(t.out)],[u(2*o,256),1,1])}else if(t.op==="dis"){let s=this.dims(t.a),o=t.patch,l=t.stride;if(o&o-1||o>16)throw new Error(`dis: patch ${o} must be a power of two <= 16`);let d=Math.max(0,Math.ceil((s.w-o)/l))+1,f=Math.max(0,Math.ceil((s.h-o)/l))+1,c=this.buffer(2*d*f*4,`${t.out}-patch`),y=this.bufs.get(t.a),S=this.bufs.get(t.b),z=this.device.features.has("subgroups")&&(this.opts.subgroups??!0);r(await this.pipeline(Ot(o,z)),[this.uniform([s.w,s.h,d,f,l,t.iters,t.mean??1]),y,S,this.bufs.get(t.init),c],[d,f,1]),r(await this.pipeline(qt),[this.uniform([s.w,s.h,d,f,l,o]),y,S,c,this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),1])}else if(t.op==="bicorr"){let s=this.dims(t.a),o=t.r,l=t.b;r(await this.pipeline(Wt(o,!!t.q8)),[this.uniform([s.w,s.h,s.c,o]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),1])}else if(t.op==="refine_in"){let s=this.dims(t.a),o=s.w*s.h,l=t.b;r(await this.pipeline(Ht),[this.uniform([o]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.flow),this.bufs.get(t.out)],[Math.min(65535,u(o,256)),u(o,256*65535),1])}else if(t.op==="refine_s2d_in"){let s=this.dims(t.out),o=t.b;r(await this.pipeline(Nt),[this.uniform([s.w,s.h]),this.bufs.get(t.a),this.bufs.get(o),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),1])}else if(t.op==="refine_up_in"){let s=this.dims(t.out),o=t.b;r(await this.pipeline(Vt),[this.uniform([s.w,s.h,t.r]),this.bufs.get(t.a),this.bufs.get(o),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),1])}else if(t.op==="addclamp"){let s=this.dims(t.out),o=s.c*s.w*s.h;r(await this.pipeline(Kt),[this.uniform([o],[t.v??0]),this.bufs.get(t.in),this.bufs.get(t.out)],[Math.min(65535,u(o,256)),u(o,256*65535),1])}else if(t.op==="ps2_flow"){let s=this.dims(t.out);r(await this.pipeline(Yt),[this.uniform([s.w,s.h]),this.bufs.get(t.in),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),1])}else if(t.op==="ps2_mask"){let s=this.dims(t.out);r(await this.pipeline(Qt),[this.uniform([s.w,s.h]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(s.w,8),u(s.h,8),1])}else if(t.op==="tinit"){let s=this.dims(t.prev),o=this.dims(t.out),l=this.dims(t.a),d=t.b,f=s.w/o.w;r(await this.pipeline(Xt),[this.uniform([s.w,s.h,o.w,o.h,f,l.c,t.gate??1]),this.bufs.get(t.prev),this.bufs.get(t.a),this.bufs.get(d),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),1])}else if(t.op==="lk"){let s=this.dims(t.a),o=s.w*s.h,l=Math.floor((t.win??9)/2),d=t.iters??4,f=t.robust??1,c=t.dense??1,y=[u(s.w,8),u(s.h,8),1],S=this.bufs.get(t.a),z=this.bufs.get(t.b),g=this.buffer(3*o*4,`${t.out}-sa`),v=this.buffer(3*o*4,`${t.out}-sb`),$=this.buffer(3*o*4,`${t.out}-rg`),x=this.buffer(o*4,`${t.out}-wr`),w=this.buffer(3*o*4,`${t.out}-best`),G=this.buffer(2*o*4,`${t.out}-d0`),M=this.buffer(2*o*4,`${t.out}-d1`),U=this.uniform([s.w,s.h]),j=this.uniform([s.w,s.h,l,1,f]),C=this.uniform([s.w,s.h,l,0,f]),B=await this.pipeline(Zt),p=await this.pipeline(Jt);if(l<=4){let h=await this.pipeline(ei(l)),_=await this.pipeline(ti(l));r(B,[U,S,z,g,v],y);let b=this.bufs.get(t.init);for(let P=0;P<d;P++){let T=P%2===0?G:M;r(p,[U,g,v,b,$],y),r(h,[P===0?j:C,$,b,w,x],y),r(_,[U,$,x,b,T],y),b=T}r(p,[U,g,v,b,$],y),r(h,[d===0?j:C,$,b,w,x],y)}else{let h=this.buffer(2*o*4,`${t.out}-eh`),_=this.buffer(9*o*4,`${t.out}-bh`),b=this.uniform([s.w,s.h,l]),P=await this.pipeline(ii),T=await this.pipeline(ri),A=await this.pipeline(si),F=await this.pipeline(ni);r(B,[U,S,z,g,v],y);let q=this.bufs.get(t.init);for(let W=0;W<d;W++){let H=W%2===0?G:M;r(p,[U,g,v,q,$],y),r(P,[b,$,h],y),r(T,[W===0?j:C,h,$,q,w,x],y),r(A,[b,$,x,_],y),r(F,[b,_,q,H],y),q=H}r(p,[U,g,v,q,$],y),r(P,[b,$,h],y),r(T,[d===0?j:C,h,$,q,w,x],y)}if(c){let h=this.uniform([s.w,s.h,l]);r(await this.pipeline(ai),[h,S,z,w,this.bufs.get(t.out)],y)}else r(await this.pipeline(ut),[this.uniform([o,0],[1]),w,this.bufs.get(t.out)],[u(o,256),2,1])}else throw new Error(`unknown op ${t.op}`)}copyCached(e){for(let[i,r]of this.cachePairs)e.copyBufferToBuffer(i,0,r,0,i.size)}encode(e,i=!1){let r=i&&this.cachePairs.length?this.stepsCached:this.steps;for(let n of r)e.setPipeline(n.pipe),e.setBindGroup(0,n.bind),e.dispatchWorkgroups(...n.wg)}async profile(e=!1){let i=this.device,r=e&&this.cachePairs.length?this.stepsCached:this.steps,n=r.length,u=i.createQuerySet({type:"timestamp",count:2*n}),t=i.createBuffer({size:16*n,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),s=i.createBuffer({size:16*n,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),o=i.createCommandEncoder();e&&this.cachePairs.length&&this.copyCached(o),r.forEach((c,y)=>{let S=o.beginComputePass({timestampWrites:{querySet:u,beginningOfPassWriteIndex:2*y,endOfPassWriteIndex:2*y+1}});S.setPipeline(c.pipe),S.setBindGroup(0,c.bind),S.dispatchWorkgroups(...c.wg),S.end()}),o.resolveQuerySet(u,0,2*n,t,0),o.copyBufferToBuffer(t,0,s,0,16*n),i.queue.submit([o.finish()]),await s.mapAsync(GPUMapMode.READ);let l=new BigInt64Array(s.getMappedRange()),d=this.ir.ops.map(c=>`${c.op} ${c.out??""} ${c.op==="conv"?`${c.cin}->${c.cout} k${c.k}s${c.s}`:""}`),f=r.map((c,y)=>({op:c.label?`${c.label} `:d[c.op],ms:Number(l[2*y+1]-l[2*y])/1e6}));return s.unmap(),f}destroy(){for(let e of this.owned)e.destroy()}};var Ee=16,Ae=`
struct VsOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs(@builtin(vertex_index) i: u32) -> VsOut {
  let p = vec2f(f32((i << 1u) & 2u), f32(i & 2u));
  var o: VsOut;
  o.pos = vec4f(p * 2.0 - 1.0, 0.0, 1.0);
  o.uv = vec2f(p.x, 1.0 - p.y);
  return o;
}`,Re=`
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
}`,oi=`
@group(0) @binding(0) var<storage, read> raw: array<f32>;
@group(0) @binding(1) var<storage, read_write> flow: array<f32>;
@group(0) @binding(2) var<uniform> k: vec4f; // x: weight of the previous flow (0 = none)
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= arrayLength(&raw)) { return; }
  flow[id.x] = mix(raw[id.x], flow[id.x], k.x);
}`,Le=`
@group(0) @binding(0) var ext: texture_external;
@group(0) @binding(1) var samp: sampler;
@fragment fn fs(@location(0) uv: vec2f) -> @location(0) vec4f {
  return vec4f(textureSampleBaseClampToEdge(ext, samp, uv).rgb, 1.0);
}`,ui=`
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
    let g = clamp((q + 0.5) / ${Ee}.0 - 0.5, vec2f(0.0), hi); // bilinear, align_corners=False
    let g0 = vec2i(floor(g));
    let g1 = min(g0 + 1, vec2i(hi));
    let t = g - vec2f(g0);
    let f = mix(mix(grid(g0.x, g0.y), grid(g1.x, g0.y), t.x), mix(grid(g0.x, g1.y), grid(g1.x, g1.y), t.x), t.y);
    suv = (q + f * p.gain + 0.5) / size;           // backward flow: take the newest frame at x + flow
  }
  var c = textureSampleLevel(cur, samp, suv, 0.0).rgb;
  if (p.compare == 1u && abs(uv.x - p.split) < 0.0012) { c = vec3f(1.0); }
  return vec4f(c, 1.0);
}`;function lt(a){oe.wasm.numThreads=1,oe.wasm.proxy=!1,oe.wasm.wasmPaths={wasm:`${a.wasmPaths}ort-wasm-simd-threaded.asyncify.wasm`},oe.logLevel="warning"}var Be=class{constructor(e,i,r,n){this.session=e;this.w=i;this.h=r;this.graphCapture=n}session;w;h;graphCapture;kind="onnx";feeds={};out;async bind(e,i){e.forEach((r,n)=>{this.feeds[`f${n}`]=pe.fromGpuBuffer(r,{dataType:"float32",dims:[1,3,this.h,this.w]})}),this.out=pe.fromGpuBuffer(i,{dataType:"float32",dims:[1,2,this.h/Ee,this.w/Ee]})}async run(){await this.session.run(this.feeds,{flow:this.out})}async destroy(){await this.session.release()}},Ge=class a{constructor(e,i,r,n){this.device=e;this.net=i;this.w=r,this.h=n,this.gw=r/Ee,this.gh=n/Ee,this.format=navigator.gpu.getPreferredCanvasFormat();let u=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;for(let s=0;s<3;s++){let o=e.createBuffer({size:3*r*n*4,usage:u,label:`fg-in${s}`});this.ins.push(o)}let t=2*this.gw*this.gh*4;this.raw=e.createBuffer({size:t,usage:u,label:"fg-flow-raw"}),this.flow=e.createBuffer({size:t,usage:u,label:"fg-flow"}),this.dims=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.dims,0,new Uint32Array([r,n,0,0])),this.params=e.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.smoothK=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear"})}device;net;w;h;gw;gh;ins=[];raw;flow;hasFlow=!1;count=0;cur;dims;params;smoothK;sampler;capturePipe;smoothPipe;copyPipe;displayPipe;format;static async create(e,i,r,n=!1){let u=new Uint8Array(e),t=f=>({executionProviders:["webgpu"],preferredOutputLocation:"gpu-buffer",graphOptimizationLevel:"all",enableGraphCapture:f}),s,o=n;try{s=await ke.create(u,t(o))}catch(f){if(!o)throw f;console.warn("[YT-MLSR FG] graph capture unavailable:",f),o=!1,s=await ke.create(u,t(!1))}let l=await oe.webgpu.device,d=new a(l,new Be(s,i,r,o),i,r);return await d.net.bind(d.ins,d.raw),await d.buildPipelines(),d}static async createWgsl(e,i,r,n,u){let t=await me.create(e,i,r,n,u),s=new a(e,t,n,u);return await t.bind(s.ins,s.raw),await s.buildPipelines(),s}get graphCapture(){return this.net instanceof Be&&this.net.graphCapture}get engine(){return this.net.kind}async buildPipelines(){let e=this.device,i=async n=>e.createComputePipelineAsync({layout:"auto",compute:{module:e.createShaderModule({code:n}),entryPoint:"main"}});this.capturePipe=await i(Re),this.smoothPipe=await i(oi);let r=e.createShaderModule({code:Ae});this.copyPipe=await e.createRenderPipelineAsync({layout:"auto",vertex:{module:r,entryPoint:"vs"},fragment:{module:e.createShaderModule({code:Le}),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}}),this.displayPipe=await e.createRenderPipelineAsync({layout:"auto",vertex:{module:r,entryPoint:"vs"},fragment:{module:e.createShaderModule({code:ui}),entryPoint:"fs",targets:[{format:this.format}]}})}reset(){this.count=0,this.hasFlow=!1}shift(e){let i=3*this.w*this.h*4;e.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,i),e.copyBufferToBuffer(this.ins[2],0,this.ins[1],0,i)}ingest(e,i,r,n){let u=this.device;this.shift(e);let t=e.beginComputePass();t.setPipeline(this.capturePipe),t.setBindGroup(0,u.createBindGroup({layout:this.capturePipe.getBindGroupLayout(0),entries:[{binding:0,resource:i},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.ins[2]}},{binding:3,resource:{buffer:this.dims}}]})),t.dispatchWorkgroups(Math.ceil(this.w/16),Math.ceil(this.h/16)),t.end(),(!this.cur||this.cur.width!==r||this.cur.height!==n)&&(this.cur?.destroy(),this.cur=u.createTexture({size:[r,n],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));let s=e.beginRenderPass({colorAttachments:[{view:this.cur.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});s.setPipeline(this.copyPipe),s.setBindGroup(0,u.createBindGroup({layout:this.copyPipe.getBindGroupLayout(0),entries:[{binding:0,resource:i},{binding:1,resource:this.sampler}]})),s.draw(3),s.end(),this.count++}ingestRaw(e){let i=this.device.createCommandEncoder();this.shift(i),this.device.queue.submit([i.finish()]),this.device.queue.writeBuffer(this.ins[2],0,e),this.count++}get ready(){return this.count>=3}async predict(e=0){let i=this.device;this.net instanceof Be&&await this.net.run(),i.queue.writeBuffer(this.smoothK,0,new Float32Array([this.hasFlow?e:0,0,0,0]));let r=i.createCommandEncoder(),n=r.beginComputePass();this.net instanceof me&&this.net.encode(n),n.setPipeline(this.smoothPipe),n.setBindGroup(0,i.createBindGroup({layout:this.smoothPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.raw}},{binding:1,resource:{buffer:this.flow}},{binding:2,resource:{buffer:this.smoothK}}]})),n.dispatchWorkgroups(Math.ceil(2*this.gw*this.gh/64)),n.end(),i.queue.submit([r.finish()]),this.hasFlow=!0}async readFlow(){let e=this.raw.size,i=this.device.createBuffer({size:e,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),r=this.device.createCommandEncoder();r.copyBufferToBuffer(this.raw,0,i,0,e),this.device.queue.submit([r.finish()]),await i.mapAsync(GPUMapMode.READ);let n=new Float32Array(i.getMappedRange().slice(0));return i.destroy(),n}draw(e,i,r,n,u=1,t=.5){if(!this.cur)return;let s=new ArrayBuffer(32);new Uint32Array(s,0,4).set([r===1&&this.hasFlow?1:0,n?1:0,this.gw,this.gh]),new Float32Array(s,16,4).set([this.w,this.h,t,u]),this.device.queue.writeBuffer(this.params,0,s);let o=e.beginRenderPass({colorAttachments:[{view:i,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});o.setPipeline(this.displayPipe),o.setBindGroup(0,this.device.createBindGroup({layout:this.displayPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.cur.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.flow}},{binding:3,resource:{buffer:this.params}}]})),o.draw(3),o.end()}async destroy(){await this.net.destroy();for(let e of[...this.ins,this.raw,this.flow])e.destroy();this.cur?.destroy()}};var di=`
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
}`,le=class a{constructor(e,i,r,n){this.device=e;this.session=i;this.w=r;this.h=n;let u=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;for(let t=0;t<2;t++){let s=e.createBuffer({size:3*r*n*4,usage:u,label:`rife-in${t}`});this.ins.push(s),i&&(this.feeds[`img${t}`]=pe.fromGpuBuffer(s,{dataType:"float32",dims:[1,3,n,r]}))}this.flow=e.createBuffer({size:4*r*n*4,usage:u,label:"rife-flow"}),this.mask=e.createBuffer({size:4*r*n*4,usage:u,label:"rife-mask"}),i&&(this.fetches.flow=pe.fromGpuBuffer(this.flow,{dataType:"float32",dims:[1,4,n,r]}),this.fetches.mask=pe.fromGpuBuffer(this.mask,{dataType:"float32",dims:[1,1,n,r]})),this.dims=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.dims,0,new Uint32Array([r,n,0,0])),this.params=e.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear"})}device;session;w;h;kind="interp";graphCapture=!1;ins=[];flow;mask;feeds={};fetches={};prev;cur;dims;params;sampler;capturePipe;copyPipe;captureTexPipe;copyTexPipe;displayPipe;hasFlow=!1;hasRgb=!1;staticRule=0;count=0;format=navigator.gpu.getPreferredCanvasFormat();net;prevFlow;flowGrid;curIsCached=!1;reuseReady=!1;get engine(){return this.net?"wgsl":"onnx"}get hasFrameCache(){return this.net?.hasFrameCache??!1}static async create(e,i,r){let n=await ke.create(new Uint8Array(e),{executionProviders:["webgpu"],preferredOutputLocation:"gpu-buffer",graphOptimizationLevel:"all"}),u=await oe.webgpu.device,t=new a(u,n,i,r);return await t.buildPipelines(),t}static async createWgsl(e,i,r,n,u,t){let s=new a(e,void 0,n,u);s.net=await me.create(e,i,r,n,u,void 0,t),s.hasRgb=i.tensors.mask?.c===4,s.staticRule=i.staticRule??0;let o={img0:s.ins[0],img1:s.ins[1],flow:s.flow,mask:s.mask};if(i.temporal&&i.tensors.prev_flow&&i.tensors.flow_grid){let l=i.tensors.prev_flow,d=l.c*(n/l.s)*(u/l.s)*4,f=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;s.prevFlow=e.createBuffer({size:d,usage:f,label:"spire-prev-flow"}),s.flowGrid=e.createBuffer({size:d,usage:f,label:"spire-flow-grid"}),o.prev_flow=s.prevFlow,o.flow_grid=s.flowGrid}return await s.net.bindNamed(o),await s.buildPipelines(),s}async buildPipelines(){let e=this,i=this.device;e.capturePipe=await i.createComputePipelineAsync({layout:"auto",compute:{module:i.createShaderModule({code:Re}),entryPoint:"main"}});let r=i.createShaderModule({code:Ae});e.copyPipe=await i.createRenderPipelineAsync({layout:"auto",vertex:{module:r,entryPoint:"vs"},fragment:{module:i.createShaderModule({code:Le}),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}}),e.displayPipe=await i.createRenderPipelineAsync({layout:"auto",vertex:{module:r,entryPoint:"vs"},fragment:{module:i.createShaderModule({code:di}),entryPoint:"fs",targets:[{format:e.format}]}})}reset(){if(this.count=0,this.hasFlow=!1,this.curIsCached=!1,this.reuseReady=!1,this.prevFlow){let e=this.device.createCommandEncoder();e.clearBuffer(this.prevFlow),this.device.queue.submit([e.finish()])}}get ready(){return this.count>=2}tex(e,i){return this.device.createTexture({size:[e,i],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})}ingest(e,i,r,n){let u=this.device,t=i instanceof GPUTexture;if(t&&!this.captureTexPipe){let c=y=>u.createShaderModule({code:y.replace("texture_external","texture_2d<f32>")});this.captureTexPipe=u.createComputePipeline({layout:"auto",compute:{module:c(Re),entryPoint:"main"}}),this.copyTexPipe=u.createRenderPipeline({layout:"auto",vertex:{module:u.createShaderModule({code:Ae}),entryPoint:"vs"},fragment:{module:c(Le),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}})}let s=t?i.createView():i,o=t?this.captureTexPipe:this.capturePipe,l=t?this.copyTexPipe:this.copyPipe;this.reuseReady=this.curIsCached&&!!this.net?.hasFrameCache,this.curIsCached=!1,this.reuseReady||e.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,3*this.w*this.h*4);let d=e.beginComputePass();d.setPipeline(o),d.setBindGroup(0,u.createBindGroup({layout:o.getBindGroupLayout(0),entries:[{binding:0,resource:s},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.ins[1]}},{binding:3,resource:{buffer:this.dims}}]})),d.dispatchWorkgroups(Math.ceil(this.w/16),Math.ceil(this.h/16)),d.end(),!this.cur||this.cur.width!==r||this.cur.height!==n?(this.cur?.destroy(),this.prev?.destroy(),this.cur=this.tex(r,n),this.prev=this.tex(r,n),this.count=0,this.curIsCached=!1,this.reuseReady=!1,this.prevFlow&&e.clearBuffer(this.prevFlow)):e.copyTextureToTexture({texture:this.cur},{texture:this.prev},[r,n]);let f=e.beginRenderPass({colorAttachments:[{view:this.cur.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});f.setPipeline(l),f.setBindGroup(0,u.createBindGroup({layout:l.getBindGroupLayout(0),entries:[{binding:0,resource:s},{binding:1,resource:this.sampler}]})),f.draw(3),f.end(),this.count++}ingestRaw(e){if(this.reuseReady=this.curIsCached&&!!this.net?.hasFrameCache,this.curIsCached=!1,!this.reuseReady){let i=this.device.createCommandEncoder();i.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,3*this.w*this.h*4),this.device.queue.submit([i.finish()])}this.device.queue.writeBuffer(this.ins[1],0,e),this.count++}encodePredict(e){if(!this.net)return;this.reuseReady&&this.net.copyCached(e);let i=e.beginComputePass();this.net.encode(i,this.reuseReady),i.end(),this.prevFlow&&this.flowGrid&&e.copyBufferToBuffer(this.flowGrid,0,this.prevFlow,0,this.prevFlow.size),this.reuseReady=!1,this.curIsCached=this.net.hasFrameCache,this.hasFlow=!0}async predict(){if(this.net){let e=this.device.createCommandEncoder();this.encodePredict(e),this.device.queue.submit([e.finish()])}else await this.session.run(this.feeds,this.fetches),this.hasFlow=!0}profile(e=!1){return this.net?.profile(e)}async read(){let e=async i=>{let r=this.device.createBuffer({size:i.size,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),n=this.device.createCommandEncoder();n.copyBufferToBuffer(i,0,r,0,i.size),this.device.queue.submit([n.finish()]),await r.mapAsync(GPUMapMode.READ);let u=new Float32Array(r.getMappedRange().slice(0));return r.destroy(),u};return{flow:await e(this.flow),mask:await e(this.mask)}}draw(e,i,r,n,u=1,t=.5,s=.5){if(!this.cur||!this.prev)return;let o=new ArrayBuffer(32);new Uint32Array(o,0,2).set([r===1&&this.hasFlow?1:0,n?1:0]),new Float32Array(o,8,6).set([this.w,this.h,t,this.hasRgb?1:0,this.staticRule,s]),this.device.queue.writeBuffer(this.params,0,o);let l=e.beginRenderPass({colorAttachments:[{view:i,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});l.setPipeline(this.displayPipe),l.setBindGroup(0,this.device.createBindGroup({layout:this.displayPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.prev.createView()},{binding:1,resource:this.cur.createView()},{binding:2,resource:this.sampler},{binding:3,resource:{buffer:this.flow}},{binding:4,resource:{buffer:this.mask}},{binding:5,resource:{buffer:this.params}}]})),l.draw(3),l.end()}async destroy(){await this.session?.release(),this.net?.destroy();for(let e of[...this.ins,this.flow,this.mask])e.destroy();this.prevFlow?.destroy(),this.flowGrid?.destroy(),this.cur?.destroy(),this.prev?.destroy()}};var ye="[YT-MLSR FG]",je=class{constructor(e,i){this.env=e;this.settings=i}env;settings;status={state:"idle"};video;canvas;stats;device;wgslDevice;ctx;fg;queue=[];pending=[];curShown=!0;curDue=0;clockOff;clockRate=1;curMult=2;split=.5;fgKey="";loading;rvfc=0;raf=0;lastPresented=-1;lastMediaTime=-1;dtEma=0;vsyncEma=1e3/60;lastRaf=0;running=!1;frameId=0;predFor=-1;predShown=!0;predAt=0;nVideo=0;nOut=0;nLate=0;nGen=0;genShown=!1;held;heldDevice;runEma=0;statT=performance.now();apply(e){let i=this.settings;this.settings=e,e.enabled||(this.show(!1),this.setStatus("idle")),(i.model!==e.model||i.size!==e.size||i.fp16!==e.fp16||i.engine!==e.engine||e.enabled&&!i.enabled)&&this.ensureModel(),this.stats&&(this.stats.style.display=e.enabled&&e.showStats?"block":"none"),i.compare!==e.compare&&this.redraw()}async attach(e,i){this.detach(),this.video=e;let r=document.createElement("canvas");r.className="mlsr-fg-canvas",Object.assign(r.style,{position:"absolute",pointerEvents:"none",zIndex:"2",display:"none"}),i.insertBefore(r,e.nextSibling),this.canvas=r;let n=document.createElement("div");Object.assign(n.style,{position:"absolute",right:"12px",top:"12px",zIndex:"61",pointerEvents:"none",whiteSpace:"pre",font:"12px/1.45 ui-monospace, Consolas, monospace",color:"#e8e8e8",background:"rgba(0,0,0,.62)",padding:"6px 9px",borderRadius:"6px",display:"none"}),(e.closest("#movie_player")??i).appendChild(n),this.stats=n,this.layout();let u=(s,o)=>{this.video===e&&(this.rvfc=e.requestVideoFrameCallback(u),this.onFrame(o))};this.rvfc=e.requestVideoFrameCallback(u);let t=s=>{this.video===e&&(this.raf=requestAnimationFrame(t),this.lastRaf&&(this.vsyncEma=this.vsyncEma*.95+Math.min(50,s-this.lastRaf)*.05),this.lastRaf=s,this.onRaf())};this.raf=requestAnimationFrame(t),e.addEventListener("seeking",this.onSeek),this.settings.enabled&&this.ensureModel()}detach(){this.video&&(this.video.cancelVideoFrameCallback(this.rvfc),this.video.removeEventListener("seeking",this.onSeek)),cancelAnimationFrame(this.raf),this.flushPending(),this.canvas?.remove(),this.stats?.remove(),this.held?.destroy(),this.held=void 0,this.genShown=!1,this.canvas=this.stats=this.ctx=this.video=void 0}onSeek=()=>{this.fg?.reset(),this.predShown=!0,this.queue=[],this.flushPending(),this.curShown=!0};flushPending(){for(let e of this.pending)e.frame.close();this.pending=[]}layout(){let e=this.video,i=this.canvas;if(!e||!i)return;Object.assign(i.style,{left:`${e.offsetLeft}px`,top:`${e.offsetTop}px`,width:`${e.offsetWidth}px`,height:`${e.offsetHeight}px`});let r=window.devicePixelRatio||1,n=Math.max(2,Math.min(2160,Math.round(e.offsetHeight*r))),u=Math.max(2,Math.round(n*e.offsetWidth/Math.max(1,e.offsetHeight)));(i.width!==u||i.height!==n)&&(i.width=u,i.height=n)}async ensureModel(){let e=this.video;if(!e||!this.settings.enabled)return;let[i,r]=this.netSize(e.videoWidth,e.videoHeight),n=this.modelKey(i,r);if(!(n===this.fgKey||n===this.loading)){this.loading=n,this.setStatus("loading",`\u30E2\u30C7\u30EB\u8AAD\u307F\u8FBC\u307F\u4E2D: ${n}`);try{let u=this.engine==="wgsl",t,s;if(u)s=await dt(this.env.modelUrl(this.settings.model));else{lt({wasmPaths:this.env.wasmPaths});let d=this.interp?`${this.settings.model}_${i}x${r}`:n,f=await fetch(`${this.env.modelUrl(d)}.onnx`);if(!f.ok)throw new Error(`${d}.onnx \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 (npm run fg-models)`);t=await f.arrayBuffer()}let o=this.fg;this.fg=void 0,this.fgKey="",this.show(!1),o&&(await this.device?.queue.onSubmittedWorkDone(),await o.destroy());let l;if(this.interp&&s?(this.wgslDevice??=(await Ke()).device,l=await le.createWgsl(this.wgslDevice,s.ir,s.weights,i,r)):this.interp?l=await le.create(t,i,r):s?(this.wgslDevice??=(await Ke()).device,l=await Ge.createWgsl(this.wgslDevice,s.ir,s.weights,i,r)):l=await Ge.create(t,i,r),this.device&&this.device!==l.device&&(this.ctx=void 0),this.device=l.device,this.loading!==n){await l.destroy();return}this.fg=l,this.fgKey=n,this.genShown=!1,console.info(ye,"model ready",n),this.setStatus("running")}catch(u){console.error(ye,u),this.setStatus("error",String(u?.message??u))}finally{this.loading===n&&(this.loading=void 0)}}}get interp(){return this.settings.model.startsWith("rife")||this.vrfgInterp}get vrfgInterp(){return this.settings.model.startsWith("vi_")||this.settings.model.startsWith("spire")}get engine(){return this.vrfgInterp?"wgsl":this.settings.engine}netSize(e,i){if(this.vrfgInterp)return st(this.settings.size,e,i);let[r,n]=Ve(this.settings.size,i);return this.interp?this.settings.size==="auto"?[640,384]:r<=640?[640,384]:[960,576]:[r,n]}modelKey(e,i){return this.interp?`${this.settings.model}_${e}x${i}_${this.engine}`:this.engine==="wgsl"?`${this.settings.model}_${e}x${i}_wgsl`:`${this.settings.model}_${e}x${i}${this.settings.fp16?"_fp16":""}`}target(){if(!(!this.canvas||!this.device))return this.ctx||(this.ctx=this.canvas.getContext("webgpu")??void 0,this.ctx?.configure({device:this.device,format:navigator.gpu.getPreferredCanvasFormat(),alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_DST})),this.ctx?.getCurrentTexture().createView()}drawGen(e,i){if(!this.settings.genOnly){let n=this.target();return n&&i(n),!!n}let r=this.heldTex();return r?(i(r.createView()),this.genShown=!0,this.drawHeld(e)):!1}drawHeld(e){if(!this.held||!this.target())return!1;let i=this.ctx.getCurrentTexture();return i.width!==this.held.width||i.height!==this.held.height?!1:(e.copyTextureToTexture({texture:this.held},{texture:i},[i.width,i.height]),!0)}heldTex(){if(!this.canvas||!this.device||!this.target())return;let e=this.ctx.getCurrentTexture();return(!this.held||this.held.width!==e.width||this.held.height!==e.height||this.heldDevice!==this.device)&&(this.held?.destroy(),this.held=this.device.createTexture({size:[e.width,e.height],format:e.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,label:"fg-held"}),this.heldDevice=this.device),this.held}drawReal(e,i){if(this.skipReal())return this.drawHeld(e);let r=this.target();return r&&i(r),!!r}onFrame(e){let i=this.video,r=this.fg,n=this.device;this.nVideo++;let u=e.mediaTime-this.lastMediaTime,t=e.presentedFrames===this.lastPresented+1&&u>.004&&u<.1;if(this.lastPresented=e.presentedFrames,this.lastMediaTime=e.mediaTime,t&&(this.dtEma=this.dtEma?this.dtEma*.9+u*.1:u),!this.settings.enabled||!r||!n||i.readyState<2||i.videoWidth===0)return;if(i.mediaKeys){this.show(!1),this.setStatus("bypass","DRM \u4FDD\u8B77\u3055\u308C\u305F\u52D5\u753B");return}let s=this.netSize(i.videoWidth,i.videoHeight);this.modelKey(s[0],s[1])!==this.fgKey&&this.ensureModel();let o=this.dtEma*1e3/Math.max(.1,i.playbackRate);if(this.dtEma&&o<this.vsyncEma*1.6){this.show(!1),this.setStatus("bypass",`\u52D5\u753B\u306E\u30D5\u30EC\u30FC\u30E0\u9593\u9694 (${o.toFixed(1)} ms) \u304C\u753B\u9762\u306E\u66F4\u65B0\u9593\u9694\u306B\u8FD1\u3044\u305F\u3081\u4E0D\u8981`);return}if(t||(r.reset(),this.genShown=!1),this.curMult=this.settings.mult===4&&o>=this.vsyncEma*3.2?4:2,this.layout(),!this.canvas||!this.device)return;if(r instanceof le){this.onInterpFrame(e,r,n,t);return}try{let f=Math.min(i.videoHeight,2160),c=Math.round(f*i.videoWidth/i.videoHeight),y=n.createCommandEncoder();r.ingest(y,n.importExternalTexture({source:i}),c,f),this.drawReal(y,S=>r.draw(y,S,0,this.settings.compare,this.settings.gain,this.split)),this.nOut++,n.queue.submit([y.finish()]),this.show(!0),this.setStatus("running")}catch(f){console.error(ye,f),this.setStatus("error",String(f?.message??f));return}if(this.predFor===this.frameId&&!this.predShown&&this.nLate++,this.frameId++,this.predShown=!0,!r.ready||this.running||i.paused)return;let l=this.frameId,d=performance.now();this.running=!0,r.predict(this.settings.smooth).then(async()=>{if(n.queue.onSubmittedWorkDone().then(()=>{let f=performance.now()-d;this.runEma=this.runEma?this.runEma*.9+f*.1:f}),this.running=!1,l!==this.frameId){this.nLate++;return}this.predFor=l,this.predShown=!1,this.predAt=d+o/2,this.onRaf()},f=>{this.running=!1,console.error(ye,f),this.setStatus("error",String(f?.message??f))})}onInterpFrame(e,i,r,n){let u=this.video,t=performance.now(),s=Math.max(.1,u.playbackRate),o=t-e.mediaTime*1e3/s;this.clockOff===void 0||!n||s!==this.clockRate||Math.abs(o-this.clockOff)>40?(this.clockOff=o,this.clockRate=s):this.clockOff=this.clockOff*.95+o*.05;let l;if(n&&!u.paused&&this.pending.length<3)try{l=new VideoFrame(u)}catch{}if(l){this.pending.push({frame:l,media:e.mediaTime}),this.frameId++,this.show(!0),this.setStatus("running");return}this.flushPending(),this.queue=[];try{let d=r.createCommandEncoder(),[f,c]=this.fullSize();i.ingest(d,r.importExternalTexture({source:u}),f,c),this.drawReal(d,y=>i.draw(d,y,0,this.settings.compare,1,this.split)),r.queue.submit([d.finish()]),this.nOut++,this.curShown=!0,this.frameId++,this.show(!0),this.setStatus("running")}catch(d){console.error(ye,d),this.setStatus("error",String(d?.message??d))}}redraw(){let e=this.fg,i=this.device,r=this.video;if(!e||!i||!r||!r.paused||!this.settings.enabled||!this.canvas||this.canvas.style.display==="none"||e instanceof le&&!this.curShown)return;let n=i.createCommandEncoder(),u=this.target();u&&(e.draw(n,u,0,this.settings.compare,this.settings.gain,this.split),i.queue.submit([n.finish()]))}fullSize(){let e=this.video,i=Math.min(e.videoHeight,2160);return[Math.round(i*e.videoWidth/e.videoHeight),i]}dueOf(e,i){return(this.clockOff??performance.now())+e*1e3/this.clockRate+i+this.vsyncEma*1.5+2}pumpInterp(e,i){if(!this.video||!this.canvas)return;let n=performance.now(),u=this.vsyncEma*.5,t=this.dtEma*1e3/this.clockRate,s=!1;try{if(!this.curShown&&n>=this.curDue-u){this.nLate+=this.queue.length,this.queue=[];let o=i.createCommandEncoder();this.drawReal(o,l=>e.draw(o,l,0,this.settings.compare,1,this.split))&&(i.queue.submit([o.finish()]),this.nOut++),this.curShown=!0,s=!0}if(this.curShown&&!this.running&&this.pending.length){let o=this.pending.shift(),l=i.createCommandEncoder(),[d,f]=this.fullSize();if(e.ingest(l,i.importExternalTexture({source:o.frame}),d,f),i.queue.submit([l.finish()]),o.frame.close(),this.curDue=this.dueOf(o.media,t),this.curShown=!1,this.queue=[],e.ready){let c=this.curMult,y=performance.now();for(let S=1;S<c;S++){let z=this.curDue-t+S*t/c;z>=n-u?this.queue.push({t:S/c,at:z}):this.nLate++}this.running=!0,e.predict().then(()=>{this.running=!1,i.queue.onSubmittedWorkDone().then(()=>{let S=performance.now()-y;this.runEma=this.runEma?this.runEma*.9+S*.1:S})},S=>{this.running=!1,this.queue=[],console.error(ye,S),this.setStatus("error",String(S?.message??S))})}}if(!s&&!this.running&&this.queue.length&&n>=this.queue[0].at-u){let o=0;for(;o+1<this.queue.length&&n>=this.queue[o+1].at-u;)o++;this.nLate+=o;let{t:l}=this.queue[o];this.queue=this.queue.slice(o+1);let d=i.createCommandEncoder();this.drawGen(d,f=>e.draw(d,f,1,this.settings.compare,1,this.split,l))&&(i.queue.submit([d.finish()]),this.nOut++,this.nGen++)}}catch(o){console.error(ye,o),this.setStatus("error",String(o?.message??o))}}skipReal(){return this.settings.genOnly&&!!this.video&&!this.video.paused&&this.genShown&&!!this.held}onRaf(){let e=this.fg,i=this.device;if(e instanceof le&&i&&this.settings.enabled&&this.pumpInterp(e,i),e&&i&&!this.predShown&&this.predFor===this.frameId&&performance.now()>=this.predAt-this.vsyncEma*.5){let n=i.createCommandEncoder();this.drawGen(n,u=>e.draw(n,u,1,this.settings.compare,this.settings.gain,this.split))&&(i.queue.submit([n.finish()]),this.nOut++,this.nGen++),this.predShown=!0}let r=performance.now();r-this.statT>1e3&&this.tickStats(r)}tickStats(e){let i=(e-this.statT)/1e3,r=this.video;if(this.status={...this.status,model:rt[this.settings.model],procRes:this.fg?[this.fg.w,this.fg.h]:void 0,videoRes:r?[r.videoWidth,r.videoHeight]:void 0,videoFps:this.nVideo/i,outFps:this.nOut/i,runMs:this.runEma,late:this.nLate,genFps:this.nGen/i,graphCapture:this.fg?.graphCapture,fp16:this.engine==="onnx"&&this.settings.fp16&&!this.interp,engine:this.fg?.engine,mult:this.interp?this.curMult:void 0},this.nVideo=this.nOut=this.nGen=0,this.statT=e,this.stats){let n=this.status;this.stats.style.display=this.settings.enabled&&this.settings.showStats?"block":"none",this.stats.textContent=[`VRFG \u30D5\u30EC\u30FC\u30E0\u751F\u6210 ${n.state}${n.message?` (${n.message})`:""}`,`\u30E2\u30C7\u30EB  ${n.model??"-"}  \u5165\u529B ${n.procRes?.join("\xD7")??"-"} ${n.engine==="wgsl"?"\u81EA\u4F5C\u30A8\u30F3\u30B8\u30F3":`ONNX ${n.fp16?"fp16":"fp32"}`}`,`\u52D5\u753B    ${n.videoRes?.join("\xD7")??"-"} @ ${n.videoFps?.toFixed(1)} fps`,`\u8868\u793A    ${n.outFps?.toFixed(1)} fps${n.mult?` ${n.mult}x`:""} (\u751F\u6210 ${n.genFps?.toFixed(1)} fps, \u9593\u306B\u5408\u308F\u305A \u7D2F\u8A08 ${n.late})`,`\u63A8\u8AD6    ${n.runMs?.toFixed(1)} ms (GPU \u5B8C\u4E86\u307E\u3067, \u4E88\u7B97 ${(this.dtEma*(this.interp?1e3:500)/Math.max(.1,this.video?.playbackRate??1)).toFixed(1)} ms)`,`\u8ABF\u6574    \u52D5\u304D \xD7${this.settings.gain.toFixed(2)}  \u5E73\u6ED1\u5316 ${this.settings.smooth.toFixed(2)}`,this.settings.compare?"\u5DE6: \u5143\u306E\u6620\u50CF\u306E\u307F / \u53F3: \u751F\u6210\u30D5\u30EC\u30FC\u30E0\u3042\u308A":"",this.settings.genOnly?"\u751F\u6210\u30D5\u30EC\u30FC\u30E0\u306E\u307F\u8868\u793A\u4E2D (\u4E00\u6642\u505C\u6B62\u4E2D\u306F\u5143\u306E\u6620\u50CF)":""].filter(Boolean).join(`
`)}this.canvas&&(this.canvas.dataset.fgStatus=JSON.stringify(this.status))}show(e){this.canvas&&(this.canvas.style.display=e&&this.settings.enabled?"block":"none")}setStatus(e,i){this.status={...this.status,state:e,message:i}}};var K=(a,e)=>a.getUint32(e),ve=(a,e)=>a.getUint32(e)*4294967296+a.getUint32(e+4);function fe(a,e,i){let r=[],n=e;for(;n+8<=i;){let u=K(a,n),t=8,s=String.fromCharCode(a.getUint8(n+4),a.getUint8(n+5),a.getUint8(n+6),a.getUint8(n+7));if(u===1?(u=ve(a,n+8),t=16):u===0&&(u=i-n),u<t||n+u>i)break;r.push({type:s,start:n,size:u,hdr:t}),n+=u}return r}var O=(a,e,i)=>fe(a,e.start+e.hdr,e.start+e.size).find(r=>r.type===i),Ie=class{constructor(e){this.b=e}b;p=0;u(e){let i=0;for(let r=0;r<e;r++)i=i*2+(this.b[this.p>>3]>>7-(this.p&7)&1),this.p++;return i}ue(){let e=0;for(;this.u(1)===0&&e<32;)e++;return 2**e-1+this.u(e)}se(){let e=this.ue();return e&1?(e+1)/2:-e/2}};function ft(a){let e=new Uint8Array(a.length),i=0,r=0;for(let n of a){if(r>=2&&n===3){r=0;continue}e[i++]=n,r=n===0?r+1:0}return e.subarray(0,i)}function li(a){let e=new Ie(ft(a.subarray(1))),i=e.u(8);e.u(16),e.ue();let r=0;if([100,110,122,244,44,83,86,118,128,138,139,134,135].includes(i)){let o=e.ue();if(o===3&&(r=e.u(1)),e.ue(),e.ue(),e.u(1),e.u(1))for(let l=0;l<(o!==3?8:12);l++){if(!e.u(1))continue;let d=8,f=8;for(let c=0;c<(l<6?16:64);c++)f!==0&&(f=(d+e.se()+256)%256),d=f===0?d:f}}let n=e.ue()+4,u=e.ue(),t=0;if(u===0)t=e.ue()+4;else if(u===1){e.u(1),e.se(),e.se();let o=e.ue();for(let l=0;l<o;l++)e.se()}e.ue(),e.u(1),e.ue(),e.ue();let s=e.u(1);return{log2MaxFrameNum:n,pocType:u,log2MaxPocLsb:t,frameMbsOnly:s,separateColour:r}}async function fi(a){let e=0;for(;e+16<=a.size;){let i=new DataView(await a.slice(e,e+16).arrayBuffer()),r=i.getUint32(0),n=String.fromCharCode(i.getUint8(4),i.getUint8(5),i.getUint8(6),i.getUint8(7));if(r===1?r=ve(i,8):r===0&&(r=a.size-e),r<8)return!1;if(n==="moov"){let u=new Uint8Array(await a.slice(e,e+r).arrayBuffer()),t=new DataView(u.buffer),s=fe(t,0,u.length)[0];for(let o of fe(t,s.hdr,s.size).filter(l=>l.type==="trak")){let l=O(t,o,"mdia"),d=l&&O(t,l,"minf"),f=d&&O(t,d,"stbl"),c=l&&O(t,l,"hdlr");if(f&&c&&String.fromCharCode(...u.subarray(c.start+c.hdr+8,c.start+c.hdr+12))==="vide")return!O(t,f,"ctts")}return!1}e+=r}return!1}async function ct(a){let e=new DataView(await a.slice(0,Math.min(a.size,64)).arrayBuffer());if(e.byteLength<12||String.fromCharCode(e.getUint8(4),e.getUint8(5),e.getUint8(6),e.getUint8(7))!=="ftyp"||!await fi(a))return;let i=new Uint8Array(await a.arrayBuffer()),r=new DataView(i.buffer),u=fe(r,0,i.length).find(t=>t.type==="moov");if(u)for(let t of fe(r,u.start+u.hdr,u.start+u.size).filter(s=>s.type==="trak")){let s=O(r,t,"mdia"),o=s&&O(r,s,"minf"),l=o&&O(r,o,"stbl"),d=s&&O(r,s,"hdlr");if(!l||!d||String.fromCharCode(...i.subarray(d.start+d.hdr+8,d.start+d.hdr+12))!=="vide")continue;if(O(r,l,"ctts"))return;let f=O(r,l,"stsd");if(!f)return;let c=fe(r,f.start+f.hdr+8,f.start+f.size)[0];if(!c||c.type!=="avc1"&&c.type!=="avc3")return;let y=fe(r,c.start+c.hdr+78,c.start+c.size).find(m=>m.type==="avcC");if(!y)return;let S=y.start+y.hdr,z=(i[S+4]&3)+1,g;if((i[S+5]&31)>0){let m=r.getUint16(S+6);g=li(i.subarray(S+8,S+8+m))}if(!g||g.pocType!==0||!g.frameMbsOnly)return;let v=O(r,l,"stsz"),$=O(r,l,"stsc"),x=O(r,l,"stts"),w=O(r,l,"stco")??O(r,l,"co64");if(!v||!$||!x||!w)return;let G=v.start+v.hdr,M=K(r,G+4),U=K(r,G+8),j=Array.from({length:U},(m,E)=>M||K(r,G+12+E*4)),C=w.start+w.hdr,B=K(r,C+4),p=w.type==="co64",h=Array.from({length:B},(m,E)=>p?ve(r,C+8+E*8):K(r,C+8+E*4)),_=$.start+$.hdr,b=K(r,_+4),P=[];for(let m=0;m<b;m++){let E=K(r,_+8+m*12)-1,Q=K(r,_+12+m*12),Y=m+1<b?K(r,_+8+(m+1)*12)-1:B;for(let ie=E;ie<Y;ie++){let V=h[ie];for(let re=0;re<Q&&P.length<U;re++)P.push(V),V+=j[P.length-1]}}if(P.length!==U)return;let T=x.start+x.hdr,A=K(r,T+4),F=[],q=0;for(let m=0;m<A;m++){let E=K(r,T+8+m*8),Q=K(r,T+12+m*8);for(let Y=0;Y<E;Y++)F.push(q),q+=Q}if(F.length!==U)return;let W=2**g.log2MaxPocLsb,H=0,D=0,R=-1,I=[],X=!1;for(let m=0;m<U;m++){let E=P[m],Q=E+j[m],Y;for(;E+z<Q;){let ie=0;for(let Ne=0;Ne<z;Ne++)ie=ie*256+i[E+Ne];let V=i.subarray(E+z,Math.min(Q,E+z+ie));E+=z+ie;let re=V[0]&31;if(re!==1&&re!==5)continue;let se=new Ie(ft(V.subarray(1,Math.min(V.length,64))));se.ue(),se.ue(),se.ue(),g.separateColour&&se.u(2),se.u(g.log2MaxFrameNum),re===5&&se.ue();let xe=se.u(g.log2MaxPocLsb);re===5&&(R++,H=0,D=0);let Te=H;xe<D&&D-xe>=W/2?Te=H+W:xe>D&&xe-D>W/2&&(Te=H-W),Y=Te+xe,V[0]&96&&(H=Te,D=xe);break}if(Y===void 0)return;I.push([Math.max(0,R),Y,m]),m>0&&I[m-1][0]===I[m][0]&&I[m-1][1]>Y&&(X=!0)}if(!X)return;let Ce=I.slice().sort((m,E)=>m[0]-E[0]||m[1]-E[1]),Z=new Array(U);Ce.forEach(([,,m],E)=>{Z[m]=F[E]});let J=0;for(let m=0;m<U;m++)J=Math.max(J,F[m]-Z[m]);let pt=Z.map((m,E)=>m+J-F[E]),ae=[];for(let m of pt)ae.length&&ae[ae.length-1][1]===m?ae[ae.length-1][0]++:ae.push([1,m]);let ce=new Uint8Array(16+ae.length*8),Fe=new DataView(ce.buffer);Fe.setUint32(0,ce.length),ce.set([99,116,116,115],4),Fe.setUint32(12,ae.length),ae.forEach(([m,E],Q)=>{Fe.setUint32(16+Q*8,m),Fe.setUint32(20+Q*8,E)});let ht=O(r,u,"mvhd"),mt=O(r,s,"mdhd"),be=O(r,t,"tkhd");if(!ht||!mt||!be)return;let yt=(m=>i[m.start+m.hdr])(be)===1?ve(r,be.start+be.hdr+28):K(r,be.start+be.hdr+20),ee,We=O(r,t,"edts");if(!We&&J>0){ee=new Uint8Array(36);let m=new DataView(ee.buffer);m.setUint32(0,36),ee.set([101,100,116,115],4),m.setUint32(8,28),ee.set([101,108,115,116],12),m.setUint32(20,1),m.setUint32(24,yt),m.setUint32(28,J),m.setUint16(32,1),m.setUint16(34,0)}let ze=ce.length+(ee?.length??0),_e=new Uint8Array(i.length+ze),He=[[l.start+l.size,ce]];ee&&He.push([s.start,ee]),He.sort((m,E)=>m[0]-E[0]);let Me=0,Pe=0;for(let[m,E]of He)_e.set(i.subarray(Me,m),Pe),Pe+=m-Me,Me=m,_e.set(E,Pe),Pe+=E.length;_e.set(i.subarray(Me),Pe);let ge=new DataView(_e.buffer),tt=(m,E)=>{let Q=m.start+(m.start>=s.start&&ee?ee.length:0);m.hdr===16?ge.setUint32(Q+12,ve(r,m.start+8)+E-0):ge.setUint32(Q,m.size+E)};for(let m of[u,t])tt(m,ze);for(let m of[s,o,l])tt(m,ce.length);if(We&&J>0){let m=O(r,We,"elst");if(m){let E=m.start+m.hdr,Q=i[E]===1,Y=Q?E+8+8:E+8+4;Q?ge.setUint32(Y+4,K(r,Y+4)+J):ge.setUint32(Y,K(r,Y)+J)}}if(u.start<Math.min(...P))for(let m of fe(r,u.start+u.hdr,u.start+u.size).filter(E=>E.type==="trak")){let E=O(r,O(r,O(r,O(r,m,"mdia"),"minf"),"stbl"),"stco")??O(r,O(r,O(r,O(r,m,"mdia"),"minf"),"stbl"),"co64");if(!E)continue;let Y=(V=>V+(V>=l.start+l.size?ce.length:0)+(ee&&V>=s.start?ee.length:0))(E.start+E.hdr),ie=K(r,E.start+E.hdr+4);for(let V=0;V<ie;V++)if(E.type==="stco")ge.setUint32(Y+8+V*4,K(r,E.start+E.hdr+8+V*4)+ze);else{let re=Y+8+V*8,se=ve(r,E.start+E.hdr+8+V*8)+ze;ge.setUint32(re,Math.floor(se/2**32)),ge.setUint32(re+4,se>>>0)}}return new Blob([_e],{type:a.type||"video/mp4"})}}var ci=new URL("./models/",location.href).href,N=a=>document.getElementById(a),k={drop:N("drop"),file:N("file"),model:N("model"),size:N("size"),mult:N("mult"),enabled:N("enabled"),compare:N("compare"),genOnly:N("genOnly"),stats:N("stats"),status:N("status"),error:N("error"),stage:N("stage"),view:N("view"),video:N("video"),seek:N("seek"),play:N("play"),rate:N("rate"),loop:N("loop"),volume:N("volume"),full:N("full"),time:N("time")},L=k.video;function gt(){return{...it,enabled:k.enabled.checked,model:k.model.value,size:k.size.value,compare:k.compare.checked,genOnly:k.genOnly.checked,showStats:k.stats.checked,engine:"wgsl",mult:k.mult.value==="4"?4:2}}var ne=new je({modelUrl:a=>ci+a,wasmPaths:""},gt());window.__fgDemo={fg:ne,video:L};for(let a of[k.model,k.size,k.mult,k.enabled,k.compare,k.genOnly,k.stats])a.addEventListener("change",()=>{ne.apply(gt()),$e()});var te=N("split");function $e(){let a=k.compare.checked&&k.enabled.checked&&!!L.src&&L.videoWidth>0;te.style.display=a?"block":"none",a&&Object.assign(te.style,{left:`${L.offsetLeft+ne.split*L.offsetWidth}px`,top:`${L.offsetTop}px`,height:`${L.offsetHeight}px`})}te.addEventListener("pointerdown",a=>{a.preventDefault(),a.stopPropagation(),te.setPointerCapture(a.pointerId);let e=r=>{let n=L.getBoundingClientRect();ne.split=Math.min(1,Math.max(0,(r.clientX-n.left)/Math.max(1,n.width))),$e(),ne.redraw()},i=()=>{te.removeEventListener("pointermove",e),te.removeEventListener("pointerup",i),te.removeEventListener("pointercancel",i)};te.addEventListener("pointermove",e),te.addEventListener("pointerup",i),te.addEventListener("pointercancel",i)});te.addEventListener("click",a=>a.stopPropagation());function qe(a){k.error.textContent=a,k.error.hidden=!a}var Oe="",Qe=!1;async function Ze(a){if(qe(""),!navigator.gpu){qe("\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306F WebGPU \u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\uFF08Chrome / Edge \u306E\u6700\u65B0\u7248\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\uFF09");return}Oe&&URL.revokeObjectURL(Oe),k.drop.querySelector(".name").textContent=a.name,k.status.textContent="\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026";let e=a;Qe=!1;try{let i=await ct(a);i&&(e=i,Qe=!0)}catch(i){console.warn("mp4 repair failed",i)}Oe=URL.createObjectURL(e),L.src=Oe,k.stage.hidden=!1,L.isConnected&&await ne.attach(L,k.view)}L.addEventListener("loadedmetadata",()=>{k.seek.max=String(L.duration||0),k.status.textContent=`${k.drop.querySelector(".name").textContent}\uFF1A${L.videoWidth}\xD7${L.videoHeight}\u3001${Xe(L.duration)}${Qe?"\uFF08\u30D5\u30EC\u30FC\u30E0\u306E\u8868\u793A\u9806\u306E\u60C5\u5831\u304C\u6B20\u3051\u3066\u3044\u305F\u306E\u3067\u88DC\u3063\u3066\u518D\u751F\u3057\u3066\u3044\u307E\u3059\uFF09":""}`,ne.layout(),$e()});L.addEventListener("error",()=>{let a=L.error;qe(`\u3053\u306E\u52D5\u753B\u306F\u30D6\u30E9\u30A6\u30B6\u3067\u518D\u751F\u3067\u304D\u307E\u305B\u3093${a?`\uFF08${a.message||`\u30B3\u30FC\u30C9 ${a.code}`}\uFF09`:""}`)});L.addEventListener("play",()=>{k.play.textContent="\u275A\u275A \u505C\u6B62"});L.addEventListener("pause",()=>{k.play.textContent="\u25B6 \u518D\u751F"});L.addEventListener("timeupdate",()=>{Je||(k.seek.value=String(L.currentTime)),k.time.textContent=`${Xe(L.currentTime)} / ${Xe(L.duration)}`});var Je=!1;k.seek.addEventListener("input",()=>{Je=!0,L.currentTime=Number(k.seek.value)});k.seek.addEventListener("change",()=>{Je=!1,k.seek.blur()});var et=()=>{L.paused?L.play().catch(a=>qe(String(a?.message??a))):L.pause()};k.play.addEventListener("click",()=>{et(),k.play.blur()});k.rate.addEventListener("change",()=>{L.playbackRate=Number(k.rate.value)});k.loop.addEventListener("change",()=>{L.loop=k.loop.checked});k.volume.addEventListener("input",()=>{L.volume=Number(k.volume.value)});k.full.addEventListener("click",()=>{k.view.requestFullscreen?.()});L.loop=k.loop.checked;L.volume=Number(k.volume.value);L.addEventListener("click",et);window.addEventListener("resize",()=>{ne.layout(),$e()});new ResizeObserver(()=>{ne.layout(),$e()}).observe(L);document.addEventListener("fullscreenchange",()=>{Object.assign(L.style,document.fullscreenElement?{width:"100%",height:"100%",maxHeight:"none",objectFit:"contain"}:{width:"",height:"",maxHeight:"",objectFit:""}),requestAnimationFrame(()=>{ne.layout(),$e()})});document.addEventListener("keydown",a=>{a.key===" "&&!a.ctrlKey&&!a.metaKey&&!a.altKey&&L.src&&!(a.target instanceof HTMLInputElement||a.target instanceof HTMLSelectElement)&&(a.preventDefault(),et())});k.file.addEventListener("change",()=>{let a=k.file.files?.[0];a&&Ze(a)});k.drop.addEventListener("dragover",a=>{a.preventDefault(),k.drop.classList.add("over")});k.drop.addEventListener("dragleave",()=>k.drop.classList.remove("over"));k.drop.addEventListener("drop",a=>{a.preventDefault(),k.drop.classList.remove("over");let e=a.dataTransfer?.files?.[0];e&&Ze(e)});document.addEventListener("dragover",a=>a.preventDefault());document.addEventListener("drop",a=>{if(k.drop.contains(a.target))return;a.preventDefault();let e=a.dataTransfer?.files?.[0];e&&Ze(e)});function Xe(a){if(!Number.isFinite(a))return"--:--";let e=Math.floor(a/60),i=a-e*60;return`${e}:${i.toFixed(2).padStart(5,"0")}`}
