var Pe={enabled:!1,model:"fg_ncorr",size:"auto",compare:!1,genOnly:!1,showStats:!0,engine:"wgsl",fp16:!0,gain:1,smooth:0,mult:2},ke={spire_pass4_ps2:"\u88DC\u9593 SPIRE pass4\uFF0Bps2 (\u6700\u65B0\u30FB1.0 \u306E\u672C\u4F53\uFF0B\u6BB5\u306E\u9593\u306E\u7279\u5FB4 4ch\uFF0B\u5B66\u7FD2\u3057\u305F\u62E1\u5927 PixelShuffle 2\xD72\u30FBW8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001100k\u3001WGSL \u306E\u307F)",spire_1_2:"\u88DC\u9593 SPIRE 1.2 (g8h4\uFF0BS2D Refine 12ch flow_mask\u30FB\u51688bit W8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u300150k\u3001WGSL \u306E\u307F)",spire_1_1:"\u88DC\u9593 SPIRE 1.1 (g8h4\uFF0B2\u6BB5Refine [4,8] flow_mask\u30FB\u51688bit W8A8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_postg_w8a8:"\u88DC\u9593 SPIRE post_gamma W8A8 (\u51688bit QAT\uFF0Bsnorm8\uFF0Bpost_gamma\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_g8h4_w8a8:"\u88DC\u9593 SPIRE g8h4 W8A8 (\u8D85\u8EFD\u91CF \u221264% MAC\u30FB7.9k\u91CD\u307F\u30FB\u51688bit QAT\uFF0Bsnorm8\uFF0Btemporal\uFF0B\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire_postg:"\u88DC\u9593 SPIRE post_gamma (fp32\u30FB\u03B4\u5F8C\u03B31\u56DE\u4ED5\u4E0A\u3052\uFF0Btemporal\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",spire:"\u88DC\u9593 SPIRE (temporal\u30FB\u5171\u6709\u30D4\u30E9\u30DF\u30C3\u30C9\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 \u03C4=0.01\u3001WGSL \u306E\u307F)",vi_disrule:"\u88DC\u9593 VRFG i_dis\uFF0B\u6B62\u307E\u3063\u305F\u7B87\u6240\u306E\u898F\u5247 (\u524D\u5F8C\u3067\u8272\u304C\u307B\u307C\u540C\u3058\u753B\u7D20\u306F\u30EF\u30FC\u30D7\u3057\u306A\u3044\u5E73\u5747\u3001\u03C4=0.01\u3001WGSL \u306E\u307F)",vi_disfine:"\u88DC\u9593 VRFG i_dis_fine (\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\u306E\u4EE3\u308F\u308A\u306B DIS \u3092 1/2 \u306E\u6BB5\u307E\u3067\uFF0B\u5C0F\u578BNN\u3001\u88DC\u6B63\u6BB5\u306A\u3057\u3001WGSL \u306E\u307F)",vi_dis:"\u88DC\u9593 VRFG i_dis (\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\u306E\u4EE3\u308F\u308A\u306B DIS\uFF08OpenCV \u306E ULTRAFAST \u76F8\u5F53\uFF09\uFF0B\u5C0F\u578BNN\u3001\u88DC\u6B63\u6BB5\u306A\u3057\u3001WGSL \u306E\u307F)",vi_light:"\u88DC\u9593 VRFG i_refine_light_ov (\u5B57\u5E55\u30FBUI \u306E\u91CD\u306D\u5408\u308F\u305B\u3067\u5B66\u7FD2\u3001\u88DC\u6B63\u6BB5\u3092 1\xD71 \u3067\u8EFD\u91CF\u5316\u3001WGSL \u306E\u307F)",vi_refine:"\u88DC\u9593 VRFG i_refine_bi (\u53CC\u65B9\u5411\u30FBcost volume\u30FB\u30D5\u30EB\u89E3\u50CF\u5EA6\u306E\u88DC\u6B63\u6BB5\u30FB\u8272\u306E\u88DC\u6B63\u3001LPIPS \u3067 RIFE lite \u8D85\u3048\u3001WGSL \u306E\u307F)",vi_shuffle:"\u88DC\u9593 VRFG i_shuffle (i_core \u306E\u62E1\u5927\u3092\u30D4\u30AF\u30BB\u30EB\u30B7\u30E3\u30C3\u30D5\u30EB\u306B\u3001LPIPS \u6539\u5584\u3001WGSL \u306E\u307F)",vi_core:"\u88DC\u9593 VRFG i_core (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6\u3001\u30D6\u30ED\u30C3\u30AF\u30DE\u30C3\u30C1\u30F3\u30B0\uFF0B\u5C0F\u578BNN\u3001WGSL \u306E\u307F)",rife_v425lite:"\u88DC\u9593 RIFE 4.25 lite (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6)",rife_v425:"\u88DC\u9593 RIFE 4.25 (\u534A\u30D5\u30EC\u30FC\u30E0\u9045\u5EF6)",fg_ncorr:"n_corr: cost volume (6.2 GMAC, val \u6700\u826F)",fg_nratio:"n_ratio: \u52D5\u304D\u3092\u5927\u80C6\u306B (\u8868\u793A\u4E0A\u306E\u4F4D\u7F6E\u306E\u640D\u5931)",fg_nb:"n_base: s2d8\u30FB\u5207\u308A\u51FA\u3057448 (\u6BD4\u8F03\u7528)",fg_c:"C (\u65E7\u57FA\u6E96, 5.0 GMAC@540p)",fg_s2d8:"s2d8 (\u65E7, \u5165\u53E3\u3092\u8EFD\u91CF\u5316)"};function me(a,e){return a!=="auto"?a.split("x").map(Number):e>0&&e<=400?[640,352]:[960,544]}function Se(a,e,i,n=32){let[s,u]=me(a,i);if(!(e>0&&i>0))return[s,u];let t=e/i,r=Math.sqrt(s*u*t),o=Math.sqrt(s*u/t),l=Math.min(1,e/r,i/o);r*=l,o*=l;let d=(h,g)=>Math.max(2*n,Math.min(Math.round(h/n),Math.floor(g/n))*n);return[d(r,Math.max(e,2*n)),d(o,Math.max(i,2*n))]}async function ye(){if(!("gpu"in navigator))throw new Error("WebGPU is not available in this browser");let a=await navigator.gpu.requestAdapter({powerPreference:"high-performance"});if(!a)throw new Error("No WebGPU adapter");let i=["shader-f16","timestamp-query","float32-filterable","subgroups"].filter(s=>a.features.has(s));return{device:await a.requestDevice({requiredFeatures:i,requiredLimits:{maxStorageBufferBindingSize:a.limits.maxStorageBufferBindingSize,maxBufferSize:a.limits.maxBufferSize,maxStorageBuffersPerShaderStage:Math.min(16,a.limits.maxStorageBuffersPerShaderStage)}}),adapterInfo:a.info,f16:i.includes("shader-f16"),timestamps:i.includes("timestamp-query")}}var Be=()=>{throw new Error("onnxruntime-web is not bundled in the web demo")},te={create:Be},Y={fromGpuBuffer:Be},N={wasm:{},webgpu:{}};function re(a){let e=[],i=n=>{typeof n=="string"&&e.push(n)};Array.isArray(a.in)?a.in.forEach(i):i(a.in),i(a.a),a.op!=="conv"&&a.op!=="deconv"&&i(a.b);for(let n of[a.base,a.init,a.flow,a.fwd,a.bwd,a.res,a.prev])i(n);return e}function J(a){let e=a.out?[a.out]:[];return a.op==="bimatch"&&a.cost&&e.push(a.cost),e}var Q=a=>{let e=String(Math.fround(a));return/[.eE]/.test(e)?e:`${e}.0`},ie=class{bufs=[];decl=[];names=new Map;in(e){return this.bind(e,"read")}out(e){return this.bind(e,"read_write")}bind(e,i){let n=this.names.get(e);return n||(n=`b${this.bufs.length}`,this.decl.push(`@group(0) @binding(${this.bufs.length}) var<storage, ${i}> ${n}: array<f32>;`),this.bufs.push(e),this.names.set(e,n)),n}};function de(a,e,i,n,s,u,t,r=o=>o){let o=(l,d)=>r(`${e}[base + ${l} * ${i}u + ${d}]`);return`
fn ${a}(x: u32, y: u32, c: u32) -> f32 {
  let sx = max((f32(x) + 0.5) * ${i}.0 / ${s}.0 - 0.5, 0.0);
  let sy = max((f32(y) + 0.5) * ${n}.0 / ${u}.0 - 0.5, 0.0);
  let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
  let x1 = min(x0 + 1u, ${i-1}u); let y1 = min(y0 + 1u, ${n-1}u);
  let tx = sx - f32(x0); let ty = sy - f32(y0);
  let base = c * ${i*n}u;
  return mix(mix(${o("y0","x0")}, ${o("y0","x1")}, tx), mix(${o("y1","x0")}, ${o("y1","x1")}, tx), ty) * ${Q(t)};
}`}function Ue(a,e,i,n){let s=a.ops,u=new Map,t=new Map;s.forEach((f,w)=>{for(let y of J(f))u.set(y,w);for(let y of re(f))t.has(y)||t.set(y,[]),t.get(y).push(w)});let r=f=>t.get(f)??[],o=f=>{let w=a.tensors[f];return{c:w.c,s:w.s,w:i/w.s,h:n/w.s}},l=new Set,d=f=>f!==void 0&&!l.has(f),h=(f,w)=>f.op==="conv"&&Array.isArray(f.in)&&f.in.length===1&&f.in[0]===w&&f.k===1&&f.s===1&&f.p===0&&f.cin===3&&f.cout===1&&(!f.act||f.act==="none")&&!f.res,g=(f,w,y)=>f.op==="pool"&&f.in===w&&f.r===y,p=(f,w)=>`${Q(e[f.b])} + ${w}.x * ${Q(e[f.w])} + ${w}.y * ${Q(e[f.w+1])} + ${w}.z * ${Q(e[f.w+2])}`,z=[],P=f=>{if(f===void 0||s[f].op!=="midflow")return;let w=s[f],y=u.get(w.fwd),x=u.get(w.bwd);if(y===void 0||x===void 0||s[y].op!=="resize"||s[x].op!=="resize")return;let v=o(w.fwd),B=o(w.out);if(v.c!==2||B.c!==4||v.w!==B.w||v.h!==B.h||o(w.bwd).w!==B.w)return;let F=s[y].in,U=s[x].in,A=o(F),G=o(U);if(!(A.c!==2||G.c!==2))return{m:f,rf:y,rb:x,fs:F,bs:U,w:B.w,h:B.h,fns:S=>de("upF",S.in(F),A.w,A.h,B.w,B.h,s[y].mul??1)+de("upB",S.in(U),G.w,G.h,B.w,B.h,s[x].mul??1),expr:`let fv = vec2f(upF(x, y, 0u), upF(x, y, 1u));
  let bv = vec2f(upB(x, y, 0u), upB(x, y, 1u));
  let m = 0.25 * (bv - fv);`}};for(let f of Object.keys(a.tensors)){if(u.has(f))continue;let w=o(f);if(w.c!==3||w.s!==1||i%32||n%32)continue;let y=r(f).filter(F=>d(F)&&h(s[F],f)),x=r(f).filter(F=>d(F)&&g(s[F],f,4)),v=y.map(F=>{let U=[],A=s[F].out;for(;U.length<5;){let G=r(A).find(S=>d(S)&&g(s[S],A,2));if(G===void 0)break;U.push(G),A=s[G].out}return U}),B=[...y,...v.flat(),...x];B.length<2||(B.forEach(F=>l.add(F)),z.push({ops:B,reads:[f],label:"front",kernels:F=>{let U=new ie,A=U.in(f),G=i*n,S=v.filter(T=>T.length).length,c=S,m="",$=0,b=[[],[],[],[],[],[]];y.forEach((T,E)=>{let j=s[T];if(m+=`
  var c${E}: array<f32, 4>;
  for (var q = 0u; q < 4u; q++) { c${E}[q] = ${p(j,"px[q]")}; }`,F.has(j.out)){let D=U.out(j.out);m+=`
  for (var q = 0u; q < 4u; q++) { ${D}[(y0 + q / 2u) * ${i}u + x0 + q % 2u] = c${E}[q]; }`}let I=v[E];if(!I.length)return;let O=$++,M=s[I[0]].out;m+=`
  { let v = (((c${E}[0] + c${E}[1]) + c${E}[2]) + c${E}[3]) / 4.0;
    sh[${O*256}u + li] = v;${F.has(M)?`
    ${U.out(M)}[(wid.y * 16u + lid.y) * ${i/2}u + wid.x * 16u + lid.x] = v;`:""} }`;for(let D=2;D<=I.length;D++){let L=32>>D,W=s[I[D-1]].out;b[D].push(`
    if (on) {
      let b = ${O*256}u + (2u * lid.y) * ${2*L}u + 2u * lid.x;
      v${O} = (((sh[b] + sh[b + 1u]) + sh[b + ${2*L}u]) + sh[b + ${2*L+1}u]) / 4.0;${F.has(W)?`
      ${U.out(W)}[(wid.y * ${L}u + lid.y) * ${i>>D}u + wid.x * ${L}u + lid.x] = v${O};`:""}
    }`),b[D].push(`
    if (on) { sh[${O*256}u + lid.y * ${L}u + lid.x] = v${O}; }`)}});for(let T=2;T<=5;T++){if(!b[T].length)continue;let E=32>>T,j=b[T].filter((O,M)=>M%2===0),I=b[T].filter((O,M)=>M%2===1);m+=`
  workgroupBarrier();
  {
    let on = lid.x < ${E}u && lid.y < ${E}u;
    ${Array.from({length:S},(O,M)=>`var v${M} = 0.0;`).join(" ")}
    ${j.join("")}
    workgroupBarrier();
    ${I.join("")}
  }`}if(x.length){let T=x.filter(E=>F.has(s[E].out)).map(E=>U.out(s[E].out));m+=`
  for (var c = 0u; c < 3u; c++) { sh[(${c}u + c) * 256u + li] = ((px[0][c] + px[1][c]) + px[2][c]) + px[3][c]; }
  workgroupBarrier();
  if (lid.x < 8u && lid.y < 8u) {
    let b = (2u * lid.y) * 16u + 2u * lid.x;
    let oi = (wid.y * 8u + lid.y) * ${i/4}u + wid.x * 8u + lid.x;
    for (var c = 0u; c < 3u; c++) {
      let sb = (${c}u + c) * 256u + b;
      let v = (((sh[sb] + sh[sb + 1u]) + sh[sb + 16u]) + sh[sb + 17u]) / 16.0;
      ${T.map(E=>`${E}[c * ${G/16}u + oi] = v;`).join(" ")}
    }
  }`}let k=Math.max(1,S+(x.length?3:0));return[{code:`
${U.decl.join(`
`)}
var<workgroup> sh: array<f32, ${256*k}>;
@compute @workgroup_size(16, 16)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 16u + lid.x;
  let x0 = wid.x * 32u + lid.x * 2u; let y0 = wid.y * 32u + lid.y * 2u;
  var px: array<vec3f, 4>;
  for (var q = 0u; q < 4u; q++) {
    let i = (y0 + q / 2u) * ${i}u + x0 + q % 2u;
    px[q] = vec3f(${A}[i], ${A}[${G}u + i], ${A}[${2*G}u + i]);
  }${m}
}`,bufs:U.bufs,wg:[i/32,n/32,1]}]}}))}for(let[f,w]of s.entries()){if(w.op!=="midflow"||l.has(f))continue;let y=P(f);if(!y||!d(y.rf)||!d(y.rb)||y.w%16||y.h%16)continue;let{w:x,h:v}=y,B=w.fwd,F=w.bwd,U=w.out,A=r(B).filter(b=>d(b)&&g(s[b],B,4)),G=r(F).filter(b=>d(b)&&g(s[b],F,4)),S=r(U).filter(b=>{let k=s[b];if(!d(b)||k.op!=="warp"||k.flow!==U||k.fc!==0&&k.fc!==2)return!1;let C=o(k.in);return C.c===3&&C.w===x&&C.h===v}),c=S.map(b=>r(s[b].out).filter(k=>d(k)&&h(s[k],s[b].out))),m=S.map(b=>r(s[b].out).filter(k=>d(k)&&g(s[k],s[b].out,4))),$=[y.rf,y.rb,f,...A,...G,...S,...c.flat(),...m.flat()];$.forEach(b=>l.add(b)),z.push({ops:$,reads:[y.fs,y.bs,...S.map(b=>s[b].in)],label:"mid",kernels:b=>{let k=new ie,C=x*v,T=y.fns(k),E=y.expr,j=[];if(b.has(B)&&(E+=`
  ${k.out(B)}[i] = fv.x; ${k.out(B)}[${C}u + i] = fv.y;`),b.has(F)&&(E+=`
  ${k.out(F)}[i] = bv.x; ${k.out(F)}[${C}u + i] = bv.y;`),b.has(U)){let M=k.out(U);E+=`
  ${M}[i] = m.x; ${M}[${C}u + i] = m.y; ${M}[${2*C}u + i] = -m.x; ${M}[${3*C}u + i] = -m.y;`}for(let M of A)for(let D=0;D<2;D++)j.push([`fv[${D}]`,b.has(s[M].out)?k.out(s[M].out):void 0,D]);for(let M of G)for(let D=0;D<2;D++)j.push([`bv[${D}]`,b.has(s[M].out)?k.out(s[M].out):void 0,D]);S.forEach((M,D)=>{let L=s[M],W=k.in(L.in),_e=L.fc===0?"":"-";if(E+=`
  var w${D}: vec3f;
  {
    let sx = clamp(f32(x) + ${_e}m.x, 0.0, ${x-1}.0);
    let sy = clamp(f32(y) + ${_e}m.y, 0.0, ${v-1}.0);
    let x0 = u32(floor(sx)); let y0 = u32(floor(sy));
    let x1 = min(x0 + 1u, ${x-1}u); let y1 = min(y0 + 1u, ${v-1}u);
    let tx = sx - f32(x0); let ty = sy - f32(y0);
    for (var c = 0u; c < 3u; c++) {
      let base = c * ${C}u;
      w${D}[c] = mix(mix(${W}[base + y0 * ${x}u + x0], ${W}[base + y0 * ${x}u + x1], tx),
                     mix(${W}[base + y1 * ${x}u + x0], ${W}[base + y1 * ${x}u + x1], tx), ty);
    }
  }`,b.has(L.out)){let H=k.out(L.out);E+=`
  ${H}[i] = w${D}.x; ${H}[${C}u + i] = w${D}.y; ${H}[${2*C}u + i] = w${D}.z;`}for(let H of c[D])b.has(s[H].out)&&(E+=`
  ${k.out(s[H].out)}[i] = ${p(s[H],`w${D}`)};`);for(let H of m[D])for(let ue=0;ue<3;ue++)j.push([`w${D}[${ue}]`,b.has(s[H].out)?k.out(s[H].out):void 0,ue])});let I=j.filter(M=>M[1]);return I.length&&(E+=`
  ${I.map(([M],D)=>`sh[${D*256}u + li] = ${M};`).join(`
  `)}
  workgroupBarrier();
  for (var t = li; t < ${16*I.length}u; t += 256u) {
    let ch = t / 16u; let o = t % 16u; let ox = o % 4u; let oy = o / 4u;
    var s = 0.0;
    for (var j = 0u; j < 4u; j++) { for (var q = 0u; q < 4u; q++) { s += sh[ch * 256u + (oy * 4u + j) * 16u + ox * 4u + q]; } }
    let v = s / 16.0;
    let oi = (wid.y * 4u + oy) * ${x/4}u + wid.x * 4u + ox;
    ${I.map(([,M,D],L)=>`${L?"else ":""}if (ch == ${L}u) { ${M}[${D*(C/16)}u + oi] = v; }`).join(`
    `)}
  }`),[{code:`
${k.decl.join(`
`)}
${I.length?`var<workgroup> sh: array<f32, ${256*I.length}>;`:""}
${T}
@compute @workgroup_size(16, 16)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let li = lid.y * 16u + lid.x;
  let x = wid.x * 16u + lid.x; let y = wid.y * 16u + lid.y;
  let i = y * ${x}u + x;
  ${E}
}`,bufs:k.bufs,wg:[x/16,v/16,1]}]}})}for(let[f,w]of s.entries()){if(w.op!=="add"||l.has(f))continue;let y=w.b,x=[w.a,y].map(C=>{let T=u.get(C);if(!d(T)||s[T].op!=="resize"||r(C).length!==1)return;let E=u.get(s[T].in);if(!(!d(E)||s[E].op!=="slice"||r(s[T].in).length!==1))return{rr:T,sl:E}}),v=x[1]?1:x[0]?0:-1;if(v<0)continue;let{rr:B,sl:F}=x[v],U=v===1?w.a:y,A=s[F].in,G=o(w.out),S=o(A),c=o(s[F].out);if(o(U).w!==G.w||o(U).c!==c.c||G.w%16||G.h%16)continue;let m=P(u.get(U)),$=!!m&&G.c===4&&G.w===m.w&&G.h===m.h,b=[];for(let C of r(A)){if(!d(C)||C===F||s[C].op!=="slice"||o(s[C].out).c!==1)continue;let T=r(s[C].out);if(T.length!==1||!d(T[0])||s[T[0]].op!=="sigmoid")continue;let E=r(s[T[0]].out);if(E.length!==1||!d(E[0])||s[E[0]].op!=="resize")continue;let j=o(s[E[0]].out);if(!(j.w!==G.w||j.h!==G.h)){b=[C,T[0],E[0]];break}}let k=[F,B,f,...b];k.forEach(C=>l.add(C)),z.push({ops:k,reads:[A,...$?[m.fs,m.bs]:[U]],label:"tail",kernels:C=>{let T=new ie,E=G.w*G.h,j=T.in(A),I=s[F],O=de("upH",j,S.w,S.h,G.w,G.h,s[B].mul??1,L=>`(${L} * ${Q(I.mul??1)})`),M="";if($)O+=m.fns(T),M+=m.expr+`
  let dv = array<f32, 4>(m.x, m.y, -m.x, -m.y);`;else{let L=T.in(U);M+=`
  var dv: array<f32, ${c.c}>;
  for (var c = 0u; c < ${c.c}u; c++) { dv[c] = ${L}[c * ${E}u + i]; }`}if(C.has(w.out)){let L=T.out(w.out),W=v===1?"dv[c] + r":"r + dv[c]";M+=`
  for (var c = 0u; c < ${c.c}u; c++) { let r = upH(x, y, ${I.c0??0}u + c); ${L}[c * ${E}u + i] = ${W}; }`}if(b.length&&C.has(s[b[2]].out)){let L=s[b[0]];O+=de("upM",j,S.w,S.h,G.w,G.h,s[b[2]].mul??1,W=>`(1.0 / (1.0 + exp(-(${W} * ${Q(L.mul??1)}))))`),M+=`
  ${T.out(s[b[2]].out)}[i] = upM(x, y, ${L.c0??0}u);`}return[{code:`
${T.decl.join(`
`)}
${O}
@compute @workgroup_size(16, 16)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let x = gid.x; let y = gid.y;
  let i = y * ${G.w}u + x;
  ${M}
}`,bufs:T.bufs,wg:[G.w/16,G.h/16,1]}]}})}return z}async function Fe(a){let[e,i]=await Promise.all([fetch(`${a}.json`),fetch(`${a}.bin`)]);if(!e.ok||!i.ok)throw new Error(`${a}.json/.bin \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 (npm run fg-models)`);let n=await e.json(),s=new Float32Array(await i.arrayBuffer());if(n.format!=="vrfg-ir/1"||s.length!==n.weightCount)throw new Error(`invalid model ${a}`);return{ir:n,weights:s}}var V=8;function ze(a,e,i,n){return n>=8?[4,Math.min(4,i)]:i>=32&&a*e>=8e3?[2,2]:i<=4?[1,1]:[1,Math.min(2,i)]}function be(a,e,i){return e==="lrelu"?`${a} = max(${a}, ${a} * ${i.toFixed(6)});`:e==="tanh_snorm8"?`${a} = round(clamp(tanh(clamp(${a}, vec4f(-20.0), vec4f(20.0))), vec4f(-1.0), vec4f(1.0)) * 127.0) / 127.0;`:""}function De(a,e,i,n,s,u){let t=e.reduce((g,p)=>g+p,0),r=e.map((g,p)=>`@group(0) @binding(${3+p}) var<storage, read> in${p}: array<f32>;`).join(`
`),o=Array.from({length:i},(g,p)=>p),l="",d=0;e.forEach((g,p)=>{l+=`${p?" else ":""}if (c < ${d+g}u) { v = in${p}[(c - ${d}u) * planeIn + idx]; }`,d+=g});let h=be("r",n,s);return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
${r}
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
  ${o.map(g=>`var a${g} = b[og + ${g}u];`).join(" ")}
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
        ${o.map(g=>`{ let wb = (og + ${g}u) * ${t*9}u + cb * 9u + tap;
          a${g} += s.x * w[wb];
          if (cb + 1u < ${t}u) { a${g} += s.y * w[wb + 9u]; }
          if (cb + 2u < ${t}u) { a${g} += s.z * w[wb + 18u]; }
          if (cb + 3u < ${t}u) { a${g} += s.w * w[wb + 27u]; } }`).join(`
        `)}
      }
    }
    workgroupBarrier();
  }
  if (ox >= d.outW || oy >= d.outH) { return; }
  let plane = d.outW * d.outH; let pi = oy * d.outW + ox;
  ${o.map(g=>`{ var r = a${g}; let c0 = (og + ${g}u) * 4u;
    ${u?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { r[j] += rs[(c0 + j) * plane + pi]; } }":""}
    ${h}
    for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = r[j]; } } }`).join(`
  `)}
}`}function Me(a,e,i,n,s,u,t,r,o=.1,l=!1){let d=e.reduce((x,v)=>x+v,0),h=e.map((x,v)=>`@group(0) @binding(${3+v}) var<storage, read> in${v}: array<f32>;`).join(`
`),g=Array.from({length:u},(x,v)=>v),p=Array.from({length:r},(x,v)=>v),z=g.flatMap(x=>p.map(v=>`var a${x}_${v} = b[og + ${x}u];`)).join(`
  `),P="",f=0;for(let x=0;x<a;x++)i===1&&n===1&&s===0?P+=`
  for (var ci = 0u; ci < ${e[x]}u; ci++) {
    let row = ci * d.inH * d.inW + oy * d.inW;
    let wi = ${f}u + ci;
    ${g.map(v=>`let w${v} = w[(og + ${v}u) * ${d}u + wi];`).join(" ")}
    ${p.map(v=>`{ let ix = ox0 + ${v}u; if (ix < d.inW) { let v = in${x}[row + ix]; ${g.map(B=>`a${B}_${v} += v * w${B};`).join(" ")} } }`).join(`
    `)}
  }`:P+=`
  for (var ci = 0u; ci < ${e[x]}u; ci++) {
    let base = ci * d.inH * d.inW;
    for (var ky = 0u; ky < ${i}u; ky++) {
      let iy = i32(oy * ${n}u + ky) - ${s};
      if (iy < 0 || iy >= i32(d.inH)) { continue; }
      let row = base + u32(iy) * d.inW;
      for (var kx = 0u; kx < ${i}u; kx++) {
        let wi = (${f}u + ci) * ${i*i}u + ky * ${i}u + kx;
        ${g.map(v=>`let w${v} = w[(og + ${v}u) * ${d*i*i}u + wi];`).join(" ")}
        ${p.map(v=>`{ let ix = i32((ox0 + ${v}u) * ${n}u + kx) - ${s};
          if (ix >= 0 && ix < i32(d.inW)) { let v = in${x}[row + u32(ix)]; ${g.map(B=>`a${B}_${v} += v * w${B};`).join(" ")} } }`).join(`
        `)}
      }
    }
  }`,f+=e[x];let w=be("r",t,o),y=p.map(x=>`
  if (ox0 + ${x}u < d.outW) {
    ${g.map(v=>`{ var r = a${v}_${x}; let c0 = (og + ${v}u) * 4u; let pi = oy * d.outW + ox0 + ${x}u;
      ${l?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { r[j] += rs[(c0 + j) * plane + pi]; } }":""}
      ${w}
      for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = r[j]; } } }`).join(`
    `)}
  }`).join("");return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, pad0: u32, pad1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
${h}
${l?`@group(0) @binding(${3+a}) var<storage, read> rs: array<f32>;`:""}
@group(0) @binding(${3+a+(l?1:0)}) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(${V}, ${V})
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let ox0 = gid.x * ${r}u; let oy = gid.y;
  if (ox0 >= d.outW || oy >= d.outH) { return; }
  let og = gid.z * ${u}u;
  if (og >= d.cout4) { return; }
  let plane = d.outW * d.outH;
  ${z}
  ${P}
  ${y}
}`}var Ae=`
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
}`,Re=`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, c: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.outW || gid.y >= d.outH) { return; }
  let ib = gid.z * d.inW * d.inH + gid.y * 2u * d.inW + gid.x * 2u;
  o[gid.z * d.outW * d.outH + gid.y * d.outW + gid.x] = (a[ib] + a[ib + 1u] + a[ib + d.inW] + a[ib + d.inW + 1u]) * 0.25;
}`,je=`
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
}`,Le=`
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
}`,Ie=`
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
}`;function qe(a,e,i,n,s){let u=Array.from({length:s},(t,r)=>r);return`
struct D { inW: u32, inH: u32, outW: u32, outH: u32, cout: u32, cout4: u32, p0: u32, p1: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> w: array<vec4f>;
@group(0) @binding(2) var<storage, read> b: array<vec4f>;
@group(0) @binding(3) var<storage, read> a: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(${V}, ${V})
fn main(@builtin(global_invocation_id) gid: vec3u) {
  let ox = gid.x; let oy = gid.y;
  if (ox >= d.outW || oy >= d.outH) { return; }
  let og = gid.z * ${s}u;
  if (og >= d.cout4) { return; }
  ${u.map(t=>`var a${t} = b[og + ${t}u];`).join(" ")}
  for (var ci = 0u; ci < ${a}u; ci++) {
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
        ${u.map(t=>`a${t} += v * w[(og + ${t}u) * ${a*e*e}u + wi];`).join(" ")}
      }
    }
  }
  let plane = d.outW * d.outH; let pi = oy * d.outW + ox;
  ${u.map(t=>`{ let c0 = (og + ${t}u) * 4u; for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = a${t}[j]; } } }`).join(`
  `)}
}`}function Oe(a,e,i,n,s,u,t,r,o=!1){let l=e.reduce((P,f)=>P+f,0),d=i*i,h=e.map((P,f)=>`@group(0) @binding(${3+f}) var<storage, read> in${f}: array<f32>;`).join(`
`),g="",p=0;e.forEach((P,f)=>{g+=`${f?" else ":""}if (ci < ${p+P}u) { v = in${f}[(ci - ${p}u) * d.inH * d.inW + idx]; }`,p+=P});let z=o?`
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
${h}
${r?`@group(0) @binding(${3+a}) var<storage, read> rs: array<f32>;`:""}
@group(0) @binding(${3+a+(r?1:0)}) var<storage, read_write> o: array<f32>;
var<workgroup> part: array<vec4f, 64>;
@compute @workgroup_size(64)
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_index) li: u32${o?", @builtin(subgroup_size) sgs: u32":""}) {
  let ox = wid.x; let oy = wid.y; let og = wid.z;
  var acc = vec4f(0.0);
  for (var t = li; t < ${l*d}u; t += 64u) {
    let ci = t / ${d}u; let r = t % ${d}u; let ky = r / ${i}u; let kx = r % ${i}u;
    let iy = i32(oy * ${n}u + ky) - ${s}; let ix = i32(ox * ${n}u + kx) - ${s};
    if (iy < 0 || iy >= i32(d.inH) || ix < 0 || ix >= i32(d.inW)) { continue; }
    let idx = u32(iy) * d.inW + u32(ix);
    var v = 0.0;
    ${g}
    acc += v * w[og * ${l*d}u + t];
  }
  ${z}
    let plane = d.outW * d.outH; let pi = oy * d.outW + ox; let c0 = og * 4u;
    ${r?"for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { rv[j] += rs[(c0 + j) * plane + pi]; } }":""}
    ${be("rv",u,t)}
    for (var j = 0u; j < 4u; j++) { if (c0 + j < d.cout) { o[(c0 + j) * plane + pi] = rv[j]; } }
  }
}`}var We=1024,He=`
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
}`,Ee=`
struct D { n: u32, c0: u32, p0: u32, p1: u32, mul: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.y * d.n + gid.x] = a[(d.c0 + gid.y) * d.n + gid.x] * d.mul;
}`,Ne=`
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
}`,Ve=`
struct D { n: u32, p0: u32, p1: u32, p2: u32, v: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.x] = d.v;
}`,Ke=`
struct D { n: u32, p0: u32, p1: u32, p2: u32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) gid: vec3u) {
  if (gid.x >= d.n) { return; }
  o[gid.x] = 1.0 / (1.0 + exp(-a[gid.x]));
}`,Ye=`
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
}`,Qe=`
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
}`,Xe=`
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
}`,K=8;function Ze(a){let e=2*a+1;return`
struct D { w: u32, h: u32, k: u32, p0: u32, penalty: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> base: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
var<workgroup> cost: array<f32, ${K*e*e}>;
fn sub(cm: f32, c0: f32, cp: f32) -> f32 {
  let den = 2.0 * (max(cm, cp) - c0);
  if (den > 1e-9) { return clamp((cm - cp) / den, -0.5, 0.5); }
  return 0.0;
}
@compute @workgroup_size(${e}, ${K})
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let cell = wid.x * ${K}u + lid.y;        // cells in row-major order
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
}`}var Je=`
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
}`;function et(a){let e=2*a+1;return`
struct D { w: u32, h: u32, k: u32, p0: u32, penalty: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read> b: array<f32>;
@group(0) @binding(3) var<storage, read> base: array<f32>;
@group(0) @binding(4) var<storage, read_write> o: array<f32>;
@group(0) @binding(5) var<storage, read_write> oc: array<f32>;
var<workgroup> cost: array<f32, ${K*e*e}>;
fn sub(cm: f32, c0: f32, cp: f32) -> f32 {
  let den = 2.0 * (max(cm, cp) - c0);
  if (den > 1e-9) { return clamp((cm - cp) / den, -0.5, 0.5); }
  return 0.0;
}
fn par(m: i32) -> i32 { return ((m % 2) + 2) % 2; }
@compute @workgroup_size(${e}, ${K})
fn main(@builtin(workgroup_id) wid: vec3u, @builtin(local_invocation_id) lid: vec3u) {
  let cell = wid.x * ${K}u + lid.y;
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
}`}function tt(a,e,i){let n=a*e,s=8*i+2*n,u=2*a+1;return`
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
    let dy = (i32(z / ${u}u) - ${a}) * ${e}; let dx = (i32(z % ${u}u) - ${a}) * ${e};
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
}`}var it=`
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
}`,rt=`
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
}`;function st(a,e=!1){let i=a*a,n=e?`
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
}`}var nt=`
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
}`;function at(a,e){let i=2*a+1,n=i*i,s=8+2*a,u=Array.from({length:n},(d,h)=>h),t=u.map(d=>{let h=Math.floor(d/i)-a,g=d%i-a;return[d,h,g]}),r=u.map(d=>`var a${d} = 0.0;`).join(" "),o=t.map(([d,h,g])=>`a${d} += ta[u32(ly - (${h})) * ${s}u + u32(lx - (${g}))] * tb[u32(ly + (${h})) * ${s}u + u32(lx + (${g}))];`).join(`
    `),l=u.map(d=>{let h=e?`round(clamp(a${d} * inv, -1.0, 1.0) * 127.0) / 127.0`:`a${d} * inv`;return`o[${d}u * n + i] = ${h};`}).join(" ");return`
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
  let gx = i32(wid.x * 8u) - ${a}; let gy = i32(wid.y * 8u) - ${a};
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
    let ly = i32(lid.y) + ${a}; let lx = i32(lid.x) + ${a};
    ${o}
    workgroupBarrier();
  }
  let ox = wid.x * 8u + lid.x; let oy = wid.y * 8u + lid.y;
  if (ox >= d.w || oy >= d.h) { return; }
  let i = oy * d.w + ox; let inv = 1.0 / f32(d.c);
  ${l}
}`}var ot=`
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
}`,ut=`
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
}`,dt=`
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
}`,lt=`
struct D { n: u32, p0: u32, p1: u32, p2: u32, v: f32, f0: f32, f1: f32, f2: f32 };
@group(0) @binding(0) var<uniform> d: D;
@group(0) @binding(1) var<storage, read> a: array<f32>;
@group(0) @binding(2) var<storage, read_write> o: array<f32>;
@compute @workgroup_size(256)
fn main(@builtin(global_invocation_id) g: vec3u) {
  let i = g.y * 65535u * 256u + g.x;
  if (i >= d.n) { return; }
  o[i] = clamp(a[i] + d.v, 0.0, 1.0);
}`,ft=`
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
}`,ct=`
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
}`,gt=`
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
}`,pt=`
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
}`,ht=`
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
}`;function mt(a){let e=8+2*a,i=2*a+1;return`
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
}`}function yt(a){let e=8+2*a,i=2*a+1;return`
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
}`}var bt=`
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
}`,xt=`
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
}`,wt=`
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
}`,vt=`
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
}`,$t=`
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
}`,X=class a{constructor(e,i,n,s,u,t,r={}){this.device=e;this.ir=i;this.weights=n;this.w=s;this.h=u;this.cfg=t;this.opts=r}device;ir;weights;w;h;cfg;opts;kind="wgsl";bufs=new Map;steps=[];stepsCached=[];cachePairs=[];owned=[];pipeCache=new Map;get hasFrameCache(){return this.cachePairs.length>0}convCfgs={};external=new Set;static async create(e,i,n,s,u,t,r){if(s%32||u%32)throw new Error("input size must be a multiple of 32");let o=new a(e,i,n,s,u,t,r);for(let[l,d]of Object.entries(i.tensors)){let h=d.c*(u/d.s)*(s/d.s);o.bufs.set(l,o.buffer(h*4,l))}return o}buffer(e,i,n=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let s=this.device.createBuffer({size:Math.max(16,Math.ceil(e/16)*16),usage:n,label:i});return this.owned.push(s),s}uniform(e,i=[]){let n=this.buffer(32,"dims",GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),s=new ArrayBuffer(32);return new Uint32Array(s,0,8).set(e),i.length&&new Float32Array(s,16,4).set(i),this.device.queue.writeBuffer(n,0,s),n}pipeline(e){let i=this.pipeCache.get(e);return i||(i=this.device.createComputePipelineAsync({layout:"auto",compute:{module:this.device.createShaderModule({code:e}),entryPoint:"main"}}),this.pipeCache.set(e,i)),i}dims(e){let i=this.ir.tensors[e];return{c:i.c,w:this.w/i.s,h:this.h/i.s}}async bind(e,i){this.bufs.set("flow",i),this.external.add("flow"),await this.build(e)}async bindNamed(e){for(let[i,n]of Object.entries(e))this.bufs.set(i,n),this.external.add(i);await this.build([])}async build(e){let i=this.device,n=this.ir,s=0,u,t=!1,r=(c,m,$)=>{this.steps.push({pipe:c,wg:$,op:s,label:u,img0Only:t,bind:i.createBindGroup({layout:c.getBindGroupLayout(0),entries:m.map((b,k)=>({binding:k,resource:{buffer:b}}))})})},o=this.opts.fuse??!0,l=o?Ue(n,this.weights,this.w,this.h):[],d=new Set(l.flatMap(c=>c.ops)),h=l.map(c=>({ops:c.ops,reads:c.reads,writes:c.ops.flatMap(m=>J(n.ops[m])),group:c}));n.ops.forEach((c,m)=>{d.has(m)||h.push({ops:[m],reads:re(c),writes:J(c)})});let g=new Set(h.flatMap(c=>c.writes)),p=new Set(this.external);for(let c of h)for(let m of c.writes)h.some($=>$!==c&&$.reads.includes(m))&&p.add(m);let z=new Set,P=h.sort((c,m)=>Math.min(...c.ops)-Math.min(...m.ops)),f=[];for(;P.length;){let c=P.findIndex($=>$.reads.every(b=>z.has(b)||!g.has(b)));if(c<0)throw new Error("fusion: no schedulable op");let[m]=P.splice(c,1);f.push(m),m.writes.forEach($=>z.add($))}let w=new Map([["img0","img0"],["img1","img1"]]),y=new Map([["img0","SRC"],["img1","SRC"]]),x=new Map;n.ops.forEach((c,m)=>{for(let $ of J(c))x.set($,m)});let v=c=>{let m=re(c);if(!m.length)return"mixed";let $;for(let b of m){let k=w.get(b)??"mixed";if(k==="mixed"||$&&$!==k)return"mixed";$=k}return $??"mixed"},B=c=>{if(y.has(c))return y.get(c);let m=x.get(c);if(m===void 0)return`EXT:${c}`;let $=n.ops[m],b=n.tensors[c],k=re($).map(B).join(","),C=$.op==="conv"?`conv(${$.cin},${$.cout},${$.k},${$.s},${$.p},${$.act},${$.w},${$.b},${b.c},${b.s};${k})`:$.op==="pool"?`pool(${$.r},${b.c},${b.s};${k})`:`op(${$.op},${m})`;return y.set(c,C),C};for(let c of n.ops){let m=v(c);for(let $ of J(c))w.set($,m)}let F=new Set;for(let c of f)c.writes.length&&c.writes.every(m=>w.get(m)==="img0")&&c.reads.every(m=>w.get(m)==="img0")&&F.add(c);let U=new Set;for(let c of f)if(!F.has(c))for(let m of c.reads)w.get(m)==="img0"&&U.add(m);let A=new Map;for(let c of g)w.get(c)==="img1"&&A.set(B(c),c);let G=[],S=F.size>0&&U.size>0;for(let c of U){let m=A.get(B(c));if(!m||!p.has(c)){S=!1;break}let $=this.bufs.get(c),b=this.bufs.get(m);if(!$||!b||$.size!==b.size){S=!1;break}p.add(m),G.push([b,$])}for(let c of f)if(s=Math.min(...c.ops),u=c.group?.label,t=S&&F.has(c),c.group)for(let m of c.group.kernels(p))r(await this.pipeline(m.code),m.bufs.map($=>this.bufs.get($)),m.wg);else if(o&&n.ops[s].op==="fill"){let m=n.ops[s],$=this.dims(m.out);i.queue.writeBuffer(this.bufs.get(m.out),0,new Float32Array($.c*$.w*$.h).fill(m.v??0))}else await this.buildOp(s,e,r);S?(this.cachePairs=G,this.stepsCached=this.steps.filter(c=>!c.img0Only)):(this.cachePairs=[],this.stepsCached=this.steps)}async buildOp(e,i,n){let s=this.device,u=(r,o)=>Math.ceil(r/o),t=this.ir.ops[e];if(t.op==="prep"){let r=await this.pipeline(Ae);n(r,[this.uniform([this.w,this.h]),...i,...["x","x0","x1","x2"].map(o=>this.bufs.get(o))],[u(this.w,16),u(this.h,16),1])}else if(t.op==="conv"){let r=t.in,o=r.map(S=>this.ir.tensors[S].c),l=this.dims(r[0]),d=this.dims(t.out),h=Math.ceil(t.cout/4),g=ze(d.w,d.h,h,t.k),[p,z]=this.cfg?this.cfg(e,g):g;this.convCfgs[e]=[p,z];let P=t.k,f=t.cin,w=P*P,y=new Float32Array(h*f*w*4);for(let S=0;S<t.cout;S++)for(let c=0;c<f;c++)for(let m=0;m<w;m++)y[((Math.floor(S/4)*f+c)*w+m)*4+S%4]=this.weights[t.w+(S*f+c)*w+m];let x=new Float32Array(h*4);x.set(this.weights.subarray(t.b,t.b+t.cout));let v=t.act??"none",B=d.w*d.h,F=B<=We&&!this.cfg,U=this.buffer(y.byteLength,`${t.out}-w`),A=this.buffer(x.byteLength,`${t.out}-b`);s.queue.writeBuffer(U,0,y),s.queue.writeBuffer(A,0,x);let G=[this.uniform([l.w,l.h,d.w,d.h,t.cout,h]),U,A,...r.map(S=>this.bufs.get(S)),...t.res?[this.bufs.get(t.res)]:[],this.bufs.get(t.out)];if(F){let S=this.device.features.has("subgroups")&&(this.opts.subgroups??!0),c=await this.pipeline(Oe(r.length,o,P,t.s,t.p,v,t.slope??.1,!!t.res,S));n(c,G,[d.w,d.h,h])}else if(!this.cfg&&P===3&&t.s===1&&t.p===1&&h<=4&&f>=4){let S=B>=3e4?h:1,c=await this.pipeline(De(r.length,o,S,v,t.slope??.1,!!t.res));n(c,G,[u(d.w,8),u(d.h,8),u(h,S)])}else{let S=!this.cfg&&P===1&&t.s===1&&t.p===0&&h<=4&&f>=16?h:z,c=await this.pipeline(Me(r.length,o,P,t.s,t.p,S,v,p,t.slope??.1,!!t.res));n(c,G,[u(d.w,V*p),u(d.h,V),u(h,S)])}}else if(t.op==="pool2"){let r=this.dims(t.in),o=this.dims(t.out);n(await this.pipeline(Re),[this.uniform([r.w,r.h,o.w,o.h,r.c]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),r.c])}else if(t.op==="norm"){let r=this.dims(t.in);n(await this.pipeline(je),[this.uniform([r.w,r.h,r.c]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="corr"){let r=this.dims(t.a),o=t.r,l=t.b;n(await this.pipeline(Le),[this.uniform([r.w,r.h,r.c,o]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),(2*o+1)**2])}else if(t.op==="resize"){let r=this.dims(t.in),o=this.dims(t.like??t.out);n(await this.pipeline(Ie),[this.uniform([r.w,r.h,o.w,o.h],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),r.c])}else if(t.op==="deconv"){let r=this.dims(t.in),o=this.dims(t.out),l=Math.ceil(t.cout/4),d=Math.min(2,l),h=t.k,g=t.cin,p=t.cout,z=h*h,P=new Float32Array(l*g*z*4);for(let x=0;x<g;x++)for(let v=0;v<p;v++)for(let B=0;B<z;B++)P[((Math.floor(v/4)*g+x)*z+B)*4+v%4]=this.weights[t.w+(x*p+v)*z+B];let f=new Float32Array(l*4);f.set(this.weights.subarray(t.b,t.b+p));let w=this.buffer(P.byteLength,`${t.out}-w`),y=this.buffer(f.byteLength,`${t.out}-b`);s.queue.writeBuffer(w,0,P),s.queue.writeBuffer(y,0,f),n(await this.pipeline(qe(g,h,t.s,t.p,d)),[this.uniform([r.w,r.h,o.w,o.h,p,l]),w,y,this.bufs.get(t.in),this.bufs.get(t.out)],[u(o.w,V),u(o.h,V),u(l,d)])}else if(t.op==="pixshuffle"){let r=this.dims(t.out);n(await this.pipeline(He),[this.uniform([r.w,r.h,t.r]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),r.c])}else if(t.op==="slice"){let r=this.dims(t.out),o=r.w*r.h;n(await this.pipeline(Ee),[this.uniform([o,t.c0??0],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o,256),r.c,1])}else if(t.op==="warp"){let r=this.dims(t.in);n(await this.pipeline(Ye),[this.uniform([r.w,r.h,t.fc??0]),this.bufs.get(t.in),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),r.c])}else if(t.op==="add"){let r=this.dims(t.out),o=r.c*r.w*r.h,l=t.b;n(await this.pipeline(Ne),[this.uniform([o]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[Math.min(65535,u(o,256)),u(o,256*65535),1])}else if(t.op==="fill"){let r=this.dims(t.out),o=r.c*r.w*r.h;n(await this.pipeline(Ve),[this.uniform([o],[t.v??0]),this.bufs.get(t.out)],[u(o,256),1,1])}else if(t.op==="sigmoid"){let r=this.dims(t.out),o=r.c*r.w*r.h;n(await this.pipeline(Ke),[this.uniform([o]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o,256),1,1])}else if(t.op==="pool"){let r=this.dims(t.in),o=this.dims(t.out);n(await this.pipeline(Qe),[this.uniform([r.w,r.h,o.w,o.h,t.r]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),r.c])}else if(t.op==="zmean"){let r=this.dims(t.in);n(await this.pipeline(Xe),[this.uniform([r.w,r.h,t.k]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),r.c])}else if(t.op==="bmatch"){let r=this.dims(t.a),o=t.b;n(await this.pipeline(Ze(t.r)),[this.uniform([r.w,r.h,t.k],[t.penalty??0]),this.bufs.get(t.a),this.bufs.get(o),this.bufs.get(t.base),this.bufs.get(t.out)],[u(r.w*r.h,K),1,1])}else if(t.op==="biwarp"){let r=this.dims(t.in);n(await this.pipeline(Je),[this.uniform([r.w,r.h],[t.sign??1]),this.bufs.get(t.in),this.bufs.get(t.base),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),4])}else if(t.op==="bimatch"){let r=this.dims(t.a),o=t.b;n(await this.pipeline(et(t.r)),[this.uniform([r.w,r.h,t.k],[t.penalty??0]),this.bufs.get(t.a),this.bufs.get(o),this.bufs.get(t.base),this.bufs.get(t.out),this.bufs.get(t.cost)],[u(r.w*r.h,K),1,1])}else if(t.op==="rescost"){let r=this.dims(t.a),o=this.dims(t.out),l=t.b,d=this.buffer(48,"dims",GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST),h=new ArrayBuffer(48);new Uint32Array(h,0,5).set([r.w,r.h,t.r,t.step,t.cell]),new Float32Array(h,32,1).set([t.mul??1]),s.queue.writeBuffer(d,0,h),n(await this.pipeline(tt(t.r,t.step,t.cell)),[d,this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),1])}else if(t.op==="median3"){let r=this.dims(t.in);n(await this.pipeline(it),[this.uniform([r.w,r.h],[t.mul??1]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),r.c])}else if(t.op==="midflow"){let r=this.dims(t.fwd),o=r.w*r.h;n(await this.pipeline(rt),[this.uniform([o]),this.bufs.get(t.fwd),this.bufs.get(t.bwd),this.bufs.get(t.out)],[u(2*o,256),1,1])}else if(t.op==="dis"){let r=this.dims(t.a),o=t.patch,l=t.stride;if(o&o-1||o>16)throw new Error(`dis: patch ${o} must be a power of two <= 16`);let d=Math.max(0,Math.ceil((r.w-o)/l))+1,h=Math.max(0,Math.ceil((r.h-o)/l))+1,g=this.buffer(2*d*h*4,`${t.out}-patch`),p=this.bufs.get(t.a),z=this.bufs.get(t.b),P=this.device.features.has("subgroups")&&(this.opts.subgroups??!0);n(await this.pipeline(st(o,P)),[this.uniform([r.w,r.h,d,h,l,t.iters,t.mean??1]),p,z,this.bufs.get(t.init),g],[d,h,1]),n(await this.pipeline(nt),[this.uniform([r.w,r.h,d,h,l,o]),p,z,g,this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="bicorr"){let r=this.dims(t.a),o=t.r,l=t.b;n(await this.pipeline(at(o,!!t.q8)),[this.uniform([r.w,r.h,r.c,o]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="refine_in"){let r=this.dims(t.a),o=r.w*r.h,l=t.b;n(await this.pipeline(ot),[this.uniform([o]),this.bufs.get(t.a),this.bufs.get(l),this.bufs.get(t.flow),this.bufs.get(t.out)],[Math.min(65535,u(o,256)),u(o,256*65535),1])}else if(t.op==="refine_s2d_in"){let r=this.dims(t.out),o=t.b;n(await this.pipeline(ut),[this.uniform([r.w,r.h]),this.bufs.get(t.a),this.bufs.get(o),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="refine_up_in"){let r=this.dims(t.out),o=t.b;n(await this.pipeline(dt),[this.uniform([r.w,r.h,t.r]),this.bufs.get(t.a),this.bufs.get(o),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="addclamp"){let r=this.dims(t.out),o=r.c*r.w*r.h;n(await this.pipeline(lt),[this.uniform([o],[t.v??0]),this.bufs.get(t.in),this.bufs.get(t.out)],[Math.min(65535,u(o,256)),u(o,256*65535),1])}else if(t.op==="ps2_flow"){let r=this.dims(t.out);n(await this.pipeline(ft),[this.uniform([r.w,r.h]),this.bufs.get(t.in),this.bufs.get(t.flow),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="ps2_mask"){let r=this.dims(t.out);n(await this.pipeline(ct),[this.uniform([r.w,r.h]),this.bufs.get(t.in),this.bufs.get(t.out)],[u(r.w,8),u(r.h,8),1])}else if(t.op==="tinit"){let r=this.dims(t.prev),o=this.dims(t.out),l=this.dims(t.a),d=t.b,h=r.w/o.w;n(await this.pipeline(gt),[this.uniform([r.w,r.h,o.w,o.h,h,l.c,t.gate??1]),this.bufs.get(t.prev),this.bufs.get(t.a),this.bufs.get(d),this.bufs.get(t.out)],[u(o.w,8),u(o.h,8),1])}else if(t.op==="lk"){let r=this.dims(t.a),o=r.w*r.h,l=Math.floor((t.win??9)/2),d=t.iters??4,h=t.robust??1,g=t.dense??1,p=[u(r.w,8),u(r.h,8),1],z=this.bufs.get(t.a),P=this.bufs.get(t.b),f=this.buffer(3*o*4,`${t.out}-sa`),w=this.buffer(3*o*4,`${t.out}-sb`),y=this.buffer(3*o*4,`${t.out}-rg`),x=this.buffer(o*4,`${t.out}-wr`),v=this.buffer(3*o*4,`${t.out}-best`),B=this.buffer(2*o*4,`${t.out}-d0`),F=this.buffer(2*o*4,`${t.out}-d1`),U=this.uniform([r.w,r.h]),A=this.uniform([r.w,r.h,l,1,h]),G=this.uniform([r.w,r.h,l,0,h]),S=await this.pipeline(pt),c=await this.pipeline(ht);if(l<=4){let m=await this.pipeline(mt(l)),$=await this.pipeline(yt(l));n(S,[U,z,P,f,w],p);let b=this.bufs.get(t.init);for(let k=0;k<d;k++){let C=k%2===0?B:F;n(c,[U,f,w,b,y],p),n(m,[k===0?A:G,y,b,v,x],p),n($,[U,y,x,b,C],p),b=C}n(c,[U,f,w,b,y],p),n(m,[d===0?A:G,y,b,v,x],p)}else{let m=this.buffer(2*o*4,`${t.out}-eh`),$=this.buffer(9*o*4,`${t.out}-bh`),b=this.uniform([r.w,r.h,l]),k=await this.pipeline(bt),C=await this.pipeline(xt),T=await this.pipeline(wt),E=await this.pipeline(vt);n(S,[U,z,P,f,w],p);let j=this.bufs.get(t.init);for(let I=0;I<d;I++){let O=I%2===0?B:F;n(c,[U,f,w,j,y],p),n(k,[b,y,m],p),n(C,[I===0?A:G,m,y,j,v,x],p),n(T,[b,y,x,$],p),n(E,[b,$,j,O],p),j=O}n(c,[U,f,w,j,y],p),n(k,[b,y,m],p),n(C,[d===0?A:G,m,y,j,v,x],p)}if(g){let m=this.uniform([r.w,r.h,l]);n(await this.pipeline($t),[m,z,P,v,this.bufs.get(t.out)],p)}else n(await this.pipeline(Ee),[this.uniform([o,0],[1]),v,this.bufs.get(t.out)],[u(o,256),2,1])}else throw new Error(`unknown op ${t.op}`)}copyCached(e){for(let[i,n]of this.cachePairs)e.copyBufferToBuffer(i,0,n,0,i.size)}encode(e,i=!1){let n=i&&this.cachePairs.length?this.stepsCached:this.steps;for(let s of n)e.setPipeline(s.pipe),e.setBindGroup(0,s.bind),e.dispatchWorkgroups(...s.wg)}async profile(e=!1){let i=this.device,n=e&&this.cachePairs.length?this.stepsCached:this.steps,s=n.length,u=i.createQuerySet({type:"timestamp",count:2*s}),t=i.createBuffer({size:16*s,usage:GPUBufferUsage.QUERY_RESOLVE|GPUBufferUsage.COPY_SRC}),r=i.createBuffer({size:16*s,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),o=i.createCommandEncoder();e&&this.cachePairs.length&&this.copyCached(o),n.forEach((g,p)=>{let z=o.beginComputePass({timestampWrites:{querySet:u,beginningOfPassWriteIndex:2*p,endOfPassWriteIndex:2*p+1}});z.setPipeline(g.pipe),z.setBindGroup(0,g.bind),z.dispatchWorkgroups(...g.wg),z.end()}),o.resolveQuerySet(u,0,2*s,t,0),o.copyBufferToBuffer(t,0,r,0,16*s),i.queue.submit([o.finish()]),await r.mapAsync(GPUMapMode.READ);let l=new BigInt64Array(r.getMappedRange()),d=this.ir.ops.map(g=>`${g.op} ${g.out??""} ${g.op==="conv"?`${g.cin}->${g.cout} k${g.k}s${g.s}`:""}`),h=n.map((g,p)=>({op:g.label?`${g.label} `:d[g.op],ms:Number(l[2*p+1]-l[2*p])/1e6}));return r.unmap(),h}destroy(){for(let e of this.owned)e.destroy()}};var ne=16,le=`
struct VsOut { @builtin(position) pos: vec4f, @location(0) uv: vec2f };
@vertex fn vs(@builtin(vertex_index) i: u32) -> VsOut {
  let p = vec2f(f32((i << 1u) & 2u), f32(i & 2u));
  var o: VsOut;
  o.pos = vec4f(p * 2.0 - 1.0, 0.0, 1.0);
  o.uv = vec2f(p.x, 1.0 - p.y);
  return o;
}`,fe=`
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
}`,_t=`
@group(0) @binding(0) var<storage, read> raw: array<f32>;
@group(0) @binding(1) var<storage, read_write> flow: array<f32>;
@group(0) @binding(2) var<uniform> k: vec4f; // x: weight of the previous flow (0 = none)
@compute @workgroup_size(64)
fn main(@builtin(global_invocation_id) id: vec3u) {
  if (id.x >= arrayLength(&raw)) { return; }
  flow[id.x] = mix(raw[id.x], flow[id.x], k.x);
}`,ce=`
@group(0) @binding(0) var ext: texture_external;
@group(0) @binding(1) var samp: sampler;
@fragment fn fs(@location(0) uv: vec2f) -> @location(0) vec4f {
  return vec4f(textureSampleBaseClampToEdge(ext, samp, uv).rgb, 1.0);
}`,Pt=`
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
    let g = clamp((q + 0.5) / ${ne}.0 - 0.5, vec2f(0.0), hi); // bilinear, align_corners=False
    let g0 = vec2i(floor(g));
    let g1 = min(g0 + 1, vec2i(hi));
    let t = g - vec2f(g0);
    let f = mix(mix(grid(g0.x, g0.y), grid(g1.x, g0.y), t.x), mix(grid(g0.x, g1.y), grid(g1.x, g1.y), t.x), t.y);
    suv = (q + f * p.gain + 0.5) / size;           // backward flow: take the newest frame at x + flow
  }
  var c = textureSampleLevel(cur, samp, suv, 0.0).rgb;
  if (p.compare == 1u && abs(uv.x - p.split) < 0.0012) { c = vec3f(1.0); }
  return vec4f(c, 1.0);
}`;function Ce(a){N.wasm.numThreads=1,N.wasm.proxy=!1,N.wasm.wasmPaths={wasm:`${a.wasmPaths}ort-wasm-simd-threaded.asyncify.wasm`},N.logLevel="warning"}var se=class{constructor(e,i,n,s){this.session=e;this.w=i;this.h=n;this.graphCapture=s}session;w;h;graphCapture;kind="onnx";feeds={};out;async bind(e,i){e.forEach((n,s)=>{this.feeds[`f${s}`]=Y.fromGpuBuffer(n,{dataType:"float32",dims:[1,3,this.h,this.w]})}),this.out=Y.fromGpuBuffer(i,{dataType:"float32",dims:[1,2,this.h/ne,this.w/ne]})}async run(){await this.session.run(this.feeds,{flow:this.out})}async destroy(){await this.session.release()}},ae=class a{constructor(e,i,n,s){this.device=e;this.net=i;this.w=n,this.h=s,this.gw=n/ne,this.gh=s/ne,this.format=navigator.gpu.getPreferredCanvasFormat();let u=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;for(let r=0;r<3;r++){let o=e.createBuffer({size:3*n*s*4,usage:u,label:`fg-in${r}`});this.ins.push(o)}let t=2*this.gw*this.gh*4;this.raw=e.createBuffer({size:t,usage:u,label:"fg-flow-raw"}),this.flow=e.createBuffer({size:t,usage:u,label:"fg-flow"}),this.dims=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.dims,0,new Uint32Array([n,s,0,0])),this.params=e.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.smoothK=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear"})}device;net;w;h;gw;gh;ins=[];raw;flow;hasFlow=!1;count=0;cur;dims;params;smoothK;sampler;capturePipe;smoothPipe;copyPipe;displayPipe;format;static async create(e,i,n,s=!1){let u=new Uint8Array(e),t=h=>({executionProviders:["webgpu"],preferredOutputLocation:"gpu-buffer",graphOptimizationLevel:"all",enableGraphCapture:h}),r,o=s;try{r=await te.create(u,t(o))}catch(h){if(!o)throw h;console.warn("[YT-MLSR FG] graph capture unavailable:",h),o=!1,r=await te.create(u,t(!1))}let l=await N.webgpu.device,d=new a(l,new se(r,i,n,o),i,n);return await d.net.bind(d.ins,d.raw),await d.buildPipelines(),d}static async createWgsl(e,i,n,s,u){let t=await X.create(e,i,n,s,u),r=new a(e,t,s,u);return await t.bind(r.ins,r.raw),await r.buildPipelines(),r}get graphCapture(){return this.net instanceof se&&this.net.graphCapture}get engine(){return this.net.kind}async buildPipelines(){let e=this.device,i=async s=>e.createComputePipelineAsync({layout:"auto",compute:{module:e.createShaderModule({code:s}),entryPoint:"main"}});this.capturePipe=await i(fe),this.smoothPipe=await i(_t);let n=e.createShaderModule({code:le});this.copyPipe=await e.createRenderPipelineAsync({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:e.createShaderModule({code:ce}),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}}),this.displayPipe=await e.createRenderPipelineAsync({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:e.createShaderModule({code:Pt}),entryPoint:"fs",targets:[{format:this.format}]}})}reset(){this.count=0,this.hasFlow=!1}shift(e){let i=3*this.w*this.h*4;e.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,i),e.copyBufferToBuffer(this.ins[2],0,this.ins[1],0,i)}ingest(e,i,n,s){let u=this.device;this.shift(e);let t=e.beginComputePass();t.setPipeline(this.capturePipe),t.setBindGroup(0,u.createBindGroup({layout:this.capturePipe.getBindGroupLayout(0),entries:[{binding:0,resource:i},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.ins[2]}},{binding:3,resource:{buffer:this.dims}}]})),t.dispatchWorkgroups(Math.ceil(this.w/16),Math.ceil(this.h/16)),t.end(),(!this.cur||this.cur.width!==n||this.cur.height!==s)&&(this.cur?.destroy(),this.cur=u.createTexture({size:[n,s],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING}));let r=e.beginRenderPass({colorAttachments:[{view:this.cur.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});r.setPipeline(this.copyPipe),r.setBindGroup(0,u.createBindGroup({layout:this.copyPipe.getBindGroupLayout(0),entries:[{binding:0,resource:i},{binding:1,resource:this.sampler}]})),r.draw(3),r.end(),this.count++}ingestRaw(e){let i=this.device.createCommandEncoder();this.shift(i),this.device.queue.submit([i.finish()]),this.device.queue.writeBuffer(this.ins[2],0,e),this.count++}get ready(){return this.count>=3}async predict(e=0){let i=this.device;this.net instanceof se&&await this.net.run(),i.queue.writeBuffer(this.smoothK,0,new Float32Array([this.hasFlow?e:0,0,0,0]));let n=i.createCommandEncoder(),s=n.beginComputePass();this.net instanceof X&&this.net.encode(s),s.setPipeline(this.smoothPipe),s.setBindGroup(0,i.createBindGroup({layout:this.smoothPipe.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.raw}},{binding:1,resource:{buffer:this.flow}},{binding:2,resource:{buffer:this.smoothK}}]})),s.dispatchWorkgroups(Math.ceil(2*this.gw*this.gh/64)),s.end(),i.queue.submit([n.finish()]),this.hasFlow=!0}async readFlow(){let e=this.raw.size,i=this.device.createBuffer({size:e,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),n=this.device.createCommandEncoder();n.copyBufferToBuffer(this.raw,0,i,0,e),this.device.queue.submit([n.finish()]),await i.mapAsync(GPUMapMode.READ);let s=new Float32Array(i.getMappedRange().slice(0));return i.destroy(),s}draw(e,i,n,s,u=1,t=.5){if(!this.cur)return;let r=new ArrayBuffer(32);new Uint32Array(r,0,4).set([n===1&&this.hasFlow?1:0,s?1:0,this.gw,this.gh]),new Float32Array(r,16,4).set([this.w,this.h,t,u]),this.device.queue.writeBuffer(this.params,0,r);let o=e.beginRenderPass({colorAttachments:[{view:i,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});o.setPipeline(this.displayPipe),o.setBindGroup(0,this.device.createBindGroup({layout:this.displayPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.cur.createView()},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.flow}},{binding:3,resource:{buffer:this.params}}]})),o.draw(3),o.end()}async destroy(){await this.net.destroy();for(let e of[...this.ins,this.raw,this.flow])e.destroy();this.cur?.destroy()}};var kt=`
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
}`,Z=class a{constructor(e,i,n,s){this.device=e;this.session=i;this.w=n;this.h=s;let u=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;for(let t=0;t<2;t++){let r=e.createBuffer({size:3*n*s*4,usage:u,label:`rife-in${t}`});this.ins.push(r),i&&(this.feeds[`img${t}`]=Y.fromGpuBuffer(r,{dataType:"float32",dims:[1,3,s,n]}))}this.flow=e.createBuffer({size:4*n*s*4,usage:u,label:"rife-flow"}),this.mask=e.createBuffer({size:4*n*s*4,usage:u,label:"rife-mask"}),i&&(this.fetches.flow=Y.fromGpuBuffer(this.flow,{dataType:"float32",dims:[1,4,s,n]}),this.fetches.mask=Y.fromGpuBuffer(this.mask,{dataType:"float32",dims:[1,1,s,n]})),this.dims=e.createBuffer({size:16,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),e.queue.writeBuffer(this.dims,0,new Uint32Array([n,s,0,0])),this.params=e.createBuffer({size:32,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.sampler=e.createSampler({magFilter:"linear",minFilter:"linear"})}device;session;w;h;kind="interp";graphCapture=!1;ins=[];flow;mask;feeds={};fetches={};prev;cur;dims;params;sampler;capturePipe;copyPipe;captureTexPipe;copyTexPipe;displayPipe;hasFlow=!1;hasRgb=!1;staticRule=0;count=0;format=navigator.gpu.getPreferredCanvasFormat();net;prevFlow;flowGrid;curIsCached=!1;reuseReady=!1;get engine(){return this.net?"wgsl":"onnx"}get hasFrameCache(){return this.net?.hasFrameCache??!1}static async create(e,i,n){let s=await te.create(new Uint8Array(e),{executionProviders:["webgpu"],preferredOutputLocation:"gpu-buffer",graphOptimizationLevel:"all"}),u=await N.webgpu.device,t=new a(u,s,i,n);return await t.buildPipelines(),t}static async createWgsl(e,i,n,s,u,t){let r=new a(e,void 0,s,u);r.net=await X.create(e,i,n,s,u,void 0,t),r.hasRgb=i.tensors.mask?.c===4,r.staticRule=i.staticRule??0;let o={img0:r.ins[0],img1:r.ins[1],flow:r.flow,mask:r.mask};if(i.temporal&&i.tensors.prev_flow&&i.tensors.flow_grid){let l=i.tensors.prev_flow,d=l.c*(s/l.s)*(u/l.s)*4,h=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;r.prevFlow=e.createBuffer({size:d,usage:h,label:"spire-prev-flow"}),r.flowGrid=e.createBuffer({size:d,usage:h,label:"spire-flow-grid"}),o.prev_flow=r.prevFlow,o.flow_grid=r.flowGrid}return await r.net.bindNamed(o),await r.buildPipelines(),r}async buildPipelines(){let e=this,i=this.device;e.capturePipe=await i.createComputePipelineAsync({layout:"auto",compute:{module:i.createShaderModule({code:fe}),entryPoint:"main"}});let n=i.createShaderModule({code:le});e.copyPipe=await i.createRenderPipelineAsync({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:i.createShaderModule({code:ce}),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}}),e.displayPipe=await i.createRenderPipelineAsync({layout:"auto",vertex:{module:n,entryPoint:"vs"},fragment:{module:i.createShaderModule({code:kt}),entryPoint:"fs",targets:[{format:e.format}]}})}reset(){if(this.count=0,this.hasFlow=!1,this.curIsCached=!1,this.reuseReady=!1,this.prevFlow){let e=this.device.createCommandEncoder();e.clearBuffer(this.prevFlow),this.device.queue.submit([e.finish()])}}get ready(){return this.count>=2}tex(e,i){return this.device.createTexture({size:[e,i],format:"rgba8unorm",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.COPY_DST})}ingest(e,i,n,s){let u=this.device,t=i instanceof GPUTexture;if(t&&!this.captureTexPipe){let g=p=>u.createShaderModule({code:p.replace("texture_external","texture_2d<f32>")});this.captureTexPipe=u.createComputePipeline({layout:"auto",compute:{module:g(fe),entryPoint:"main"}}),this.copyTexPipe=u.createRenderPipeline({layout:"auto",vertex:{module:u.createShaderModule({code:le}),entryPoint:"vs"},fragment:{module:g(ce),entryPoint:"fs",targets:[{format:"rgba8unorm"}]}})}let r=t?i.createView():i,o=t?this.captureTexPipe:this.capturePipe,l=t?this.copyTexPipe:this.copyPipe;this.reuseReady=this.curIsCached&&!!this.net?.hasFrameCache,this.curIsCached=!1,this.reuseReady||e.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,3*this.w*this.h*4);let d=e.beginComputePass();d.setPipeline(o),d.setBindGroup(0,u.createBindGroup({layout:o.getBindGroupLayout(0),entries:[{binding:0,resource:r},{binding:1,resource:this.sampler},{binding:2,resource:{buffer:this.ins[1]}},{binding:3,resource:{buffer:this.dims}}]})),d.dispatchWorkgroups(Math.ceil(this.w/16),Math.ceil(this.h/16)),d.end(),!this.cur||this.cur.width!==n||this.cur.height!==s?(this.cur?.destroy(),this.prev?.destroy(),this.cur=this.tex(n,s),this.prev=this.tex(n,s),this.count=0,this.curIsCached=!1,this.reuseReady=!1,this.prevFlow&&e.clearBuffer(this.prevFlow)):e.copyTextureToTexture({texture:this.cur},{texture:this.prev},[n,s]);let h=e.beginRenderPass({colorAttachments:[{view:this.cur.createView(),loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});h.setPipeline(l),h.setBindGroup(0,u.createBindGroup({layout:l.getBindGroupLayout(0),entries:[{binding:0,resource:r},{binding:1,resource:this.sampler}]})),h.draw(3),h.end(),this.count++}ingestRaw(e){if(this.reuseReady=this.curIsCached&&!!this.net?.hasFrameCache,this.curIsCached=!1,!this.reuseReady){let i=this.device.createCommandEncoder();i.copyBufferToBuffer(this.ins[1],0,this.ins[0],0,3*this.w*this.h*4),this.device.queue.submit([i.finish()])}this.device.queue.writeBuffer(this.ins[1],0,e),this.count++}encodePredict(e){if(!this.net)return;this.reuseReady&&this.net.copyCached(e);let i=e.beginComputePass();this.net.encode(i,this.reuseReady),i.end(),this.prevFlow&&this.flowGrid&&e.copyBufferToBuffer(this.flowGrid,0,this.prevFlow,0,this.prevFlow.size),this.reuseReady=!1,this.curIsCached=this.net.hasFrameCache,this.hasFlow=!0}async predict(){if(this.net){let e=this.device.createCommandEncoder();this.encodePredict(e),this.device.queue.submit([e.finish()])}else await this.session.run(this.feeds,this.fetches),this.hasFlow=!0}profile(e=!1){return this.net?.profile(e)}async read(){let e=async i=>{let n=this.device.createBuffer({size:i.size,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),s=this.device.createCommandEncoder();s.copyBufferToBuffer(i,0,n,0,i.size),this.device.queue.submit([s.finish()]),await n.mapAsync(GPUMapMode.READ);let u=new Float32Array(n.getMappedRange().slice(0));return n.destroy(),u};return{flow:await e(this.flow),mask:await e(this.mask)}}draw(e,i,n,s,u=1,t=.5,r=.5){if(!this.cur||!this.prev)return;let o=new ArrayBuffer(32);new Uint32Array(o,0,2).set([n===1&&this.hasFlow?1:0,s?1:0]),new Float32Array(o,8,6).set([this.w,this.h,t,this.hasRgb?1:0,this.staticRule,r]),this.device.queue.writeBuffer(this.params,0,o);let l=e.beginRenderPass({colorAttachments:[{view:i,loadOp:"clear",storeOp:"store",clearValue:[0,0,0,1]}]});l.setPipeline(this.displayPipe),l.setBindGroup(0,this.device.createBindGroup({layout:this.displayPipe.getBindGroupLayout(0),entries:[{binding:0,resource:this.prev.createView()},{binding:1,resource:this.cur.createView()},{binding:2,resource:this.sampler},{binding:3,resource:{buffer:this.flow}},{binding:4,resource:{buffer:this.mask}},{binding:5,resource:{buffer:this.params}}]})),l.draw(3),l.end()}async destroy(){await this.session?.release(),this.net?.destroy();for(let e of[...this.ins,this.flow,this.mask])e.destroy();this.prevFlow?.destroy(),this.flowGrid?.destroy(),this.cur?.destroy(),this.prev?.destroy()}};var oe="[YT-MLSR FG]",ge=class{constructor(e,i){this.env=e;this.settings=i}env;settings;status={state:"idle"};video;canvas;stats;device;wgslDevice;ctx;fg;queue=[];curMult=2;fgKey="";loading;rvfc=0;raf=0;lastPresented=-1;lastMediaTime=-1;dtEma=0;vsyncEma=1e3/60;lastRaf=0;running=!1;frameId=0;predFor=-1;predShown=!0;predAt=0;nVideo=0;nOut=0;nLate=0;nGen=0;genShown=!1;held;heldDevice;runEma=0;statT=performance.now();apply(e){let i=this.settings;this.settings=e,e.enabled||(this.show(!1),this.setStatus("idle")),(i.model!==e.model||i.size!==e.size||i.fp16!==e.fp16||i.engine!==e.engine||e.enabled&&!i.enabled)&&this.ensureModel(),this.stats&&(this.stats.style.display=e.enabled&&e.showStats?"block":"none")}async attach(e,i){this.detach(),this.video=e;let n=document.createElement("canvas");n.className="mlsr-fg-canvas",Object.assign(n.style,{position:"absolute",pointerEvents:"none",zIndex:"2",display:"none"}),i.insertBefore(n,e.nextSibling),this.canvas=n;let s=document.createElement("div");Object.assign(s.style,{position:"absolute",right:"12px",top:"12px",zIndex:"61",pointerEvents:"none",whiteSpace:"pre",font:"12px/1.45 ui-monospace, Consolas, monospace",color:"#e8e8e8",background:"rgba(0,0,0,.62)",padding:"6px 9px",borderRadius:"6px",display:"none"}),(e.closest("#movie_player")??i).appendChild(s),this.stats=s,this.layout();let u=(r,o)=>{this.video===e&&(this.rvfc=e.requestVideoFrameCallback(u),this.onFrame(o))};this.rvfc=e.requestVideoFrameCallback(u);let t=r=>{this.video===e&&(this.raf=requestAnimationFrame(t),this.lastRaf&&(this.vsyncEma=this.vsyncEma*.95+Math.min(50,r-this.lastRaf)*.05),this.lastRaf=r,this.onRaf())};this.raf=requestAnimationFrame(t),e.addEventListener("seeking",this.onSeek),this.settings.enabled&&this.ensureModel()}detach(){this.video&&(this.video.cancelVideoFrameCallback(this.rvfc),this.video.removeEventListener("seeking",this.onSeek)),cancelAnimationFrame(this.raf),this.canvas?.remove(),this.stats?.remove(),this.held?.destroy(),this.held=void 0,this.genShown=!1,this.canvas=this.stats=this.ctx=this.video=void 0}onSeek=()=>{this.fg?.reset(),this.predShown=!0,this.queue=[]};layout(){let e=this.video,i=this.canvas;if(!e||!i)return;Object.assign(i.style,{left:`${e.offsetLeft}px`,top:`${e.offsetTop}px`,width:`${e.offsetWidth}px`,height:`${e.offsetHeight}px`});let n=window.devicePixelRatio||1,s=Math.max(2,Math.min(2160,Math.round(e.offsetHeight*n))),u=Math.max(2,Math.round(s*e.offsetWidth/Math.max(1,e.offsetHeight)));(i.width!==u||i.height!==s)&&(i.width=u,i.height=s)}async ensureModel(){let e=this.video;if(!e||!this.settings.enabled)return;let[i,n]=this.netSize(e.videoWidth,e.videoHeight),s=this.modelKey(i,n);if(!(s===this.fgKey||s===this.loading)){this.loading=s,this.setStatus("loading",`\u30E2\u30C7\u30EB\u8AAD\u307F\u8FBC\u307F\u4E2D: ${s}`);try{let u=this.engine==="wgsl",t,r;if(u)r=await Fe(this.env.modelUrl(this.settings.model));else{Ce({wasmPaths:this.env.wasmPaths});let d=this.interp?`${this.settings.model}_${i}x${n}`:s,h=await fetch(`${this.env.modelUrl(d)}.onnx`);if(!h.ok)throw new Error(`${d}.onnx \u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 (npm run fg-models)`);t=await h.arrayBuffer()}let o=this.fg;this.fg=void 0,this.fgKey="",this.show(!1),o&&(await this.device?.queue.onSubmittedWorkDone(),await o.destroy());let l;if(this.interp&&r?(this.wgslDevice??=(await ye()).device,l=await Z.createWgsl(this.wgslDevice,r.ir,r.weights,i,n)):this.interp?l=await Z.create(t,i,n):r?(this.wgslDevice??=(await ye()).device,l=await ae.createWgsl(this.wgslDevice,r.ir,r.weights,i,n)):l=await ae.create(t,i,n),this.device&&this.device!==l.device&&(this.ctx=void 0),this.device=l.device,this.loading!==s){await l.destroy();return}this.fg=l,this.fgKey=s,this.genShown=!1,console.info(oe,"model ready",s),this.setStatus("running")}catch(u){console.error(oe,u),this.setStatus("error",String(u?.message??u))}finally{this.loading===s&&(this.loading=void 0)}}}get interp(){return this.settings.model.startsWith("rife")||this.vrfgInterp}get vrfgInterp(){return this.settings.model.startsWith("vi_")||this.settings.model.startsWith("spire")}get engine(){return this.vrfgInterp?"wgsl":this.settings.engine}netSize(e,i){if(this.vrfgInterp)return Se(this.settings.size,e,i);let[n,s]=me(this.settings.size,i);return this.interp?this.settings.size==="auto"?[640,384]:n<=640?[640,384]:[960,576]:[n,s]}modelKey(e,i){return this.interp?`${this.settings.model}_${e}x${i}_${this.engine}`:this.engine==="wgsl"?`${this.settings.model}_${e}x${i}_wgsl`:`${this.settings.model}_${e}x${i}${this.settings.fp16?"_fp16":""}`}target(){if(!(!this.canvas||!this.device))return this.ctx||(this.ctx=this.canvas.getContext("webgpu")??void 0,this.ctx?.configure({device:this.device,format:navigator.gpu.getPreferredCanvasFormat(),alphaMode:"opaque",usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_DST})),this.ctx?.getCurrentTexture().createView()}drawGen(e,i){if(!this.settings.genOnly){let s=this.target();return s&&i(s),!!s}let n=this.heldTex();return n?(i(n.createView()),this.genShown=!0,this.drawHeld(e)):!1}drawHeld(e){if(!this.held||!this.target())return!1;let i=this.ctx.getCurrentTexture();return i.width!==this.held.width||i.height!==this.held.height?!1:(e.copyTextureToTexture({texture:this.held},{texture:i},[i.width,i.height]),!0)}heldTex(){if(!this.canvas||!this.device||!this.target())return;let e=this.ctx.getCurrentTexture();return(!this.held||this.held.width!==e.width||this.held.height!==e.height||this.heldDevice!==this.device)&&(this.held?.destroy(),this.held=this.device.createTexture({size:[e.width,e.height],format:e.format,usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,label:"fg-held"}),this.heldDevice=this.device),this.held}drawReal(e,i){if(this.skipReal())return this.drawHeld(e);let n=this.target();return n&&i(n),!!n}onFrame(e){let i=this.video,n=this.fg,s=this.device;this.nVideo++;let u=e.mediaTime-this.lastMediaTime,t=e.presentedFrames===this.lastPresented+1&&u>.004&&u<.1;if(this.lastPresented=e.presentedFrames,this.lastMediaTime=e.mediaTime,t&&(this.dtEma=this.dtEma?this.dtEma*.9+u*.1:u),!this.settings.enabled||!n||!s||i.readyState<2||i.videoWidth===0)return;if(i.mediaKeys){this.show(!1),this.setStatus("bypass","DRM \u4FDD\u8B77\u3055\u308C\u305F\u52D5\u753B");return}let r=this.netSize(i.videoWidth,i.videoHeight);this.modelKey(r[0],r[1])!==this.fgKey&&this.ensureModel();let o=this.dtEma*1e3/Math.max(.1,i.playbackRate);if(this.dtEma&&o<this.vsyncEma*1.6){this.show(!1),this.setStatus("bypass",`\u52D5\u753B\u306E\u30D5\u30EC\u30FC\u30E0\u9593\u9694 (${o.toFixed(1)} ms) \u304C\u753B\u9762\u306E\u66F4\u65B0\u9593\u9694\u306B\u8FD1\u3044\u305F\u3081\u4E0D\u8981`);return}if(t||(n.reset(),this.genShown=!1),this.curMult=this.settings.mult===4&&o>=this.vsyncEma*3.2?4:2,this.layout(),!this.canvas||!this.device)return;let l=n instanceof Z,d=!1;try{let p=Math.min(i.videoHeight,2160),z=Math.round(p*i.videoWidth/i.videoHeight),P=s.createCommandEncoder();l&&this.queue.length&&(this.drawReal(P,f=>n.draw(P,f,0,this.settings.compare)),this.queue=[],this.nOut++,this.nLate++),n.ingest(P,s.importExternalTexture({source:i}),z,p),d=l&&n.ready&&!this.running&&!i.paused&&t,d||(this.drawReal(P,f=>n.draw(P,f,0,this.settings.compare,this.settings.gain)),this.nOut++),s.queue.submit([P.finish()]),this.show(!0),this.setStatus("running")}catch(p){console.error(oe,p),this.setStatus("error",String(p?.message??p));return}if(l){if(this.frameId++,!d)return;let p=this.frameId,z=performance.now();this.running=!0,n.predict().then(()=>{if(this.running=!1,s.queue.onSubmittedWorkDone().then(()=>{let y=performance.now()-z;this.runEma=this.runEma?this.runEma*.9+y*.1:y}),p!==this.frameId||this.fg!==n)return;let P=this.curMult,f=s.createCommandEncoder();if(!this.drawGen(f,y=>n.draw(f,y,1,this.settings.compare,1,.5,1/P)))return;s.queue.submit([f.finish()]),this.nOut++,this.nGen++;let w=performance.now();this.queue=[];for(let y=2;y<=P;y++)this.queue.push({t:y/P,at:w+(y-1)*o/P})},P=>{this.running=!1,console.error(oe,P),this.setStatus("error",String(P?.message??P))});return}if(this.predFor===this.frameId&&!this.predShown&&this.nLate++,this.frameId++,this.predShown=!0,!n.ready||this.running||i.paused)return;let h=this.frameId,g=performance.now();this.running=!0,n.predict(this.settings.smooth).then(async()=>{if(s.queue.onSubmittedWorkDone().then(()=>{let p=performance.now()-g;this.runEma=this.runEma?this.runEma*.9+p*.1:p}),this.running=!1,h!==this.frameId){this.nLate++;return}this.predFor=h,this.predShown=!1,this.predAt=g+o/2,this.onRaf()},p=>{this.running=!1,console.error(oe,p),this.setStatus("error",String(p?.message??p))})}skipReal(){return this.settings.genOnly&&!!this.video&&!this.video.paused&&this.genShown&&!!this.held}onRaf(){let e=this.fg,i=this.device;if(e instanceof Z&&i&&this.queue.length&&performance.now()>=this.queue[0].at-this.vsyncEma*.5){let s=performance.now(),u=0;for(;u+1<this.queue.length&&s>=this.queue[u+1].at-this.vsyncEma*.5;)u++;this.nLate+=u;let{t}=this.queue[u];this.queue=this.queue.slice(u+1);let r=i.createCommandEncoder();(t>=1?this.drawReal(r,l=>e.draw(r,l,0,this.settings.compare)):this.drawGen(r,l=>e.draw(r,l,1,this.settings.compare,1,.5,t)))&&(i.queue.submit([r.finish()]),this.nOut++,t<1&&this.nGen++)}if(e&&i&&!this.predShown&&this.predFor===this.frameId&&performance.now()>=this.predAt-this.vsyncEma*.5){let s=i.createCommandEncoder();this.drawGen(s,u=>e.draw(s,u,1,this.settings.compare,this.settings.gain))&&(i.queue.submit([s.finish()]),this.nOut++,this.nGen++),this.predShown=!0}let n=performance.now();n-this.statT>1e3&&this.tickStats(n)}tickStats(e){let i=(e-this.statT)/1e3,n=this.video;if(this.status={...this.status,model:ke[this.settings.model],procRes:this.fg?[this.fg.w,this.fg.h]:void 0,videoRes:n?[n.videoWidth,n.videoHeight]:void 0,videoFps:this.nVideo/i,outFps:this.nOut/i,runMs:this.runEma,late:this.nLate,genFps:this.nGen/i,graphCapture:this.fg?.graphCapture,fp16:this.engine==="onnx"&&this.settings.fp16&&!this.interp,engine:this.fg?.engine,mult:this.interp?this.curMult:void 0},this.nVideo=this.nOut=this.nGen=0,this.statT=e,this.stats){let s=this.status;this.stats.style.display=this.settings.enabled&&this.settings.showStats?"block":"none",this.stats.textContent=[`VRFG \u30D5\u30EC\u30FC\u30E0\u751F\u6210 ${s.state}${s.message?` (${s.message})`:""}`,`\u30E2\u30C7\u30EB  ${s.model??"-"}  \u5165\u529B ${s.procRes?.join("\xD7")??"-"} ${s.engine==="wgsl"?"\u81EA\u4F5C\u30A8\u30F3\u30B8\u30F3":`ONNX ${s.fp16?"fp16":"fp32"}`}`,`\u52D5\u753B    ${s.videoRes?.join("\xD7")??"-"} @ ${s.videoFps?.toFixed(1)} fps`,`\u8868\u793A    ${s.outFps?.toFixed(1)} fps${s.mult?` ${s.mult}x`:""} (\u751F\u6210 ${s.genFps?.toFixed(1)} fps, \u9593\u306B\u5408\u308F\u305A \u7D2F\u8A08 ${s.late})`,`\u63A8\u8AD6    ${s.runMs?.toFixed(1)} ms (GPU \u5B8C\u4E86\u307E\u3067, \u4E88\u7B97 ${(this.dtEma*(this.interp?1e3:500)/Math.max(.1,this.video?.playbackRate??1)).toFixed(1)} ms)`,`\u8ABF\u6574    \u52D5\u304D \xD7${this.settings.gain.toFixed(2)}  \u5E73\u6ED1\u5316 ${this.settings.smooth.toFixed(2)}`,this.settings.compare?"\u5DE6: \u5143\u306E\u6620\u50CF\u306E\u307F / \u53F3: \u751F\u6210\u30D5\u30EC\u30FC\u30E0\u3042\u308A":"",this.settings.genOnly?"\u751F\u6210\u30D5\u30EC\u30FC\u30E0\u306E\u307F\u8868\u793A\u4E2D (\u4E00\u6642\u505C\u6B62\u4E2D\u306F\u5143\u306E\u6620\u50CF)":""].filter(Boolean).join(`
`)}this.canvas&&(this.canvas.dataset.fgStatus=JSON.stringify(this.status))}show(e){this.canvas&&(this.canvas.style.display=e&&this.settings.enabled?"block":"none")}setStatus(e,i){this.status={...this.status,state:e,message:i}}};var St=new URL("./models/",location.href).href,q=a=>document.getElementById(a),_={drop:q("drop"),file:q("file"),model:q("model"),size:q("size"),mult:q("mult"),enabled:q("enabled"),compare:q("compare"),genOnly:q("genOnly"),stats:q("stats"),status:q("status"),error:q("error"),stage:q("stage"),view:q("view"),video:q("video"),seek:q("seek"),play:q("play"),rate:q("rate"),loop:q("loop"),volume:q("volume"),full:q("full"),time:q("time")},R=_.video;function Te(){return{...Pe,enabled:_.enabled.checked,model:_.model.value,size:_.size.value,compare:_.compare.checked,genOnly:_.genOnly.checked,showStats:_.stats.checked,engine:"wgsl",mult:_.mult.value==="4"?4:2}}var ee=new ge({modelUrl:a=>St+a,wasmPaths:""},Te());window.__fgDemo={fg:ee,video:R};for(let a of[_.model,_.size,_.mult,_.enabled,_.compare,_.genOnly,_.stats])a.addEventListener("change",()=>ee.apply(Te()));function he(a){_.error.textContent=a,_.error.hidden=!a}var pe="";async function we(a){if(he(""),!navigator.gpu){he("\u3053\u306E\u30D6\u30E9\u30A6\u30B6\u306F WebGPU \u306B\u5BFE\u5FDC\u3057\u3066\u3044\u307E\u305B\u3093\uFF08Chrome / Edge \u306E\u6700\u65B0\u7248\u3067\u958B\u3044\u3066\u304F\u3060\u3055\u3044\uFF09");return}pe&&URL.revokeObjectURL(pe),pe=URL.createObjectURL(a),_.drop.querySelector(".name").textContent=a.name,_.status.textContent="\u8AAD\u307F\u8FBC\u307F\u4E2D\u2026",R.src=pe,_.stage.hidden=!1,R.isConnected&&await ee.attach(R,_.view)}R.addEventListener("loadedmetadata",()=>{_.seek.max=String(R.duration||0),_.status.textContent=`${_.drop.querySelector(".name").textContent}\uFF1A${R.videoWidth}\xD7${R.videoHeight}\u3001${xe(R.duration)}`,ee.layout()});R.addEventListener("error",()=>{let a=R.error;he(`\u3053\u306E\u52D5\u753B\u306F\u30D6\u30E9\u30A6\u30B6\u3067\u518D\u751F\u3067\u304D\u307E\u305B\u3093${a?`\uFF08${a.message||`\u30B3\u30FC\u30C9 ${a.code}`}\uFF09`:""}`)});R.addEventListener("play",()=>{_.play.textContent="\u275A\u275A \u505C\u6B62"});R.addEventListener("pause",()=>{_.play.textContent="\u25B6 \u518D\u751F"});R.addEventListener("timeupdate",()=>{ve||(_.seek.value=String(R.currentTime)),_.time.textContent=`${xe(R.currentTime)} / ${xe(R.duration)}`});var ve=!1;_.seek.addEventListener("input",()=>{ve=!0,R.currentTime=Number(_.seek.value)});_.seek.addEventListener("change",()=>{ve=!1,_.seek.blur()});var $e=()=>{R.paused?R.play().catch(a=>he(String(a?.message??a))):R.pause()};_.play.addEventListener("click",()=>{$e(),_.play.blur()});_.rate.addEventListener("change",()=>{R.playbackRate=Number(_.rate.value)});_.loop.addEventListener("change",()=>{R.loop=_.loop.checked});_.volume.addEventListener("input",()=>{R.volume=Number(_.volume.value)});_.full.addEventListener("click",()=>{_.view.requestFullscreen?.()});R.loop=_.loop.checked;R.volume=Number(_.volume.value);R.addEventListener("click",$e);window.addEventListener("resize",()=>ee.layout());document.addEventListener("fullscreenchange",()=>{Object.assign(R.style,document.fullscreenElement?{width:"100%",height:"100%",maxHeight:"none",objectFit:"contain"}:{width:"",height:"",maxHeight:"",objectFit:""}),requestAnimationFrame(()=>ee.layout())});document.addEventListener("keydown",a=>{a.key===" "&&!a.ctrlKey&&!a.metaKey&&!a.altKey&&R.src&&!(a.target instanceof HTMLInputElement||a.target instanceof HTMLSelectElement)&&(a.preventDefault(),$e())});_.file.addEventListener("change",()=>{let a=_.file.files?.[0];a&&we(a)});_.drop.addEventListener("dragover",a=>{a.preventDefault(),_.drop.classList.add("over")});_.drop.addEventListener("dragleave",()=>_.drop.classList.remove("over"));_.drop.addEventListener("drop",a=>{a.preventDefault(),_.drop.classList.remove("over");let e=a.dataTransfer?.files?.[0];e&&we(e)});document.addEventListener("dragover",a=>a.preventDefault());document.addEventListener("drop",a=>{if(_.drop.contains(a.target))return;a.preventDefault();let e=a.dataTransfer?.files?.[0];e&&we(e)});function xe(a){if(!Number.isFinite(a))return"--:--";let e=Math.floor(a/60),i=a-e*60;return`${e}:${i.toFixed(2).padStart(5,"0")}`}
