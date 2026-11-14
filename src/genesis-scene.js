/* Engineer's Genesis — procedural WebGL2 intro; no external assets. */
(() => {
"use strict";
const host=document.getElementById("introRain"); if(!host||host.dataset.genesisMounted)return; host.dataset.genesisMounted="true";
const canvas=document.createElement("canvas");canvas.className="intro__canvas";canvas.setAttribute("aria-hidden","true");host.appendChild(canvas);
const gl=canvas.getContext("webgl2",{alpha:true,antialias:true,depth:false,powerPreference:"high-performance"});if(!gl)return;
const vertex=[
"#version 300 es","precision highp float;","in vec3 aPosition;in vec3 aColor;in float aSize;",
"uniform float uTime;uniform float uProgress;uniform float uAspect;uniform float uPointMode;","out vec3 vColor;out float vAlpha;",
"void main(){float t=uTime;vec3 p=aPosition;float phase=fract(sin(dot(aPosition,vec3(12.9898,78.233,37.719)))*43758.5453);",
"if(uPointMode>0.5){p.y+=sin(t*(0.22+phase*0.2)+phase*6.28)*0.10;p.x+=cos(t*0.16+phase*6.28)*0.07;",
"vec3 target=vec3(sign(p.x)*0.22,sign(p.y)*0.34,0.0);float gather=smoothstep(0.48,0.83,uProgress);p=mix(p,target+vec3(aPosition.xy*0.12,0.0),gather);p.z+=sin(t*0.3+phase*6.28)*0.08;",
"}else{float gather=smoothstep(0.42,0.82,uProgress);p*=1.0-gather*0.42;float angle=t*0.12+phase*0.16;p.xy=mat2(cos(angle),-sin(angle),sin(angle),cos(angle))*p.xy;}",
"float depth=3.6+p.z;gl_Position=vec4(p.x*1.75/uAspect,p.y*1.75,0.0,depth);gl_PointSize=clamp(aSize*(260.0/depth),1.0,9.0);vColor=aColor;vAlpha=0.48+0.42*(0.5+0.5*sin(t*0.7+phase*6.28));}"
].join("\n");
const fragment=[
"#version 300 es","precision highp float;","in vec3 vColor;in float vAlpha;uniform float uPointMode;out vec4 outColor;",
"void main(){if(uPointMode>0.5){vec2 q=gl_PointCoord-0.5;float d=length(q);float core=smoothstep(0.5,0.04,d);float halo=exp(-d*10.0)*0.45;outColor=vec4(vColor,(core+halo)*vAlpha);}else{outColor=vec4(vColor,0.62);}}"
].join("\n");
function compile(type,source){const sh=gl.createShader(type);gl.shaderSource(sh,source);gl.compileShader(sh);if(!gl.getShaderParameter(sh,gl.COMPILE_STATUS)){console.warn("Genesis shader:",gl.getShaderInfoLog(sh));gl.deleteShader(sh);return null;}return sh;}
const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment);if(!vs||!fs)return;
const program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);
if(!gl.getProgramParameter(program,gl.LINK_STATUS)){console.warn("Genesis link:",gl.getProgramInfoLog(program));return;}
gl.useProgram(program);const loc=n=>gl.getUniformLocation(program,n),uTime=loc("uTime"),uProgress=loc("uProgress"),uAspect=loc("uAspect"),uPointMode=loc("uPointMode");
const pLoc=gl.getAttribLocation(program,"aPosition"),cLoc=gl.getAttribLocation(program,"aColor"),sLoc=gl.getAttribLocation(program,"aSize");
const gold=[0.92,0.62,0.10],lilac=[0.55,0.29,0.62],pale=[0.82,0.72,0.88];let seed=731;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
const count=Math.min(720,Math.max(300,Math.floor(innerWidth*innerHeight/2500))),points=new Float32Array(count*7);
for(let i=0;i<count;i++){const o=i*7,a=rand()*Math.PI*2,r=.25+rand()*3.2;points[o]=Math.cos(a)*r;points[o+1]=(rand()-.5)*3.8;points[o+2]=(rand()-.5)*2.4;const c=rand()<.72?gold:(rand()<.7?lilac:pale);points[o+3]=c[0];points[o+4]=c[1];points[o+5]=c[2];points[o+6]=1.1+rand()*2.2;}
const pointBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,pointBuffer);gl.bufferData(gl.ARRAY_BUFFER,points,gl.STATIC_DRAW);
const cubeData=[],edges=[[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]];
for(let n=0;n<7;n++){const x=(rand()-.5)*4.6,y=(rand()-.5)*2.7,z=(rand()-.5)*1.2,s=.12+rand()*.24,v=[];for(let k=0;k<8;k++)v.push([x+((k&1)?s:-s),y+((k&2)?s:-s),z+((k&4)?s:-s)]);for(const e of edges)for(const q of [v[e[0]],v[e[1]]])cubeData.push(...q,...(n%3===0?lilac:gold),1);}
const cubeBuffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,cubeBuffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(cubeData),gl.STATIC_DRAW);
function resize(){const dpr=Math.min(devicePixelRatio||1,1.65),w=Math.max(1,Math.floor(host.clientWidth*dpr)),h=Math.max(1,Math.floor(host.clientHeight*dpr));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}}
function attrs(){gl.enableVertexAttribArray(pLoc);gl.vertexAttribPointer(pLoc,3,gl.FLOAT,false,28,0);gl.enableVertexAttribArray(cLoc);gl.vertexAttribPointer(cLoc,3,gl.FLOAT,false,28,12);gl.enableVertexAttribArray(sLoc);gl.vertexAttribPointer(sLoc,1,gl.FLOAT,false,28,24);}
let raf=0,start=performance.now(),disposed=false;const observer=new ResizeObserver(resize);observer.observe(host);
function render(now){if(disposed)return;resize();const t=(now-start)/1000,p=Math.min(1,t/5);gl.clearColor(.105,.035,.12,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE);gl.useProgram(program);gl.uniform1f(uTime,t);gl.uniform1f(uProgress,p);gl.uniform1f(uAspect,canvas.width/Math.max(1,canvas.height));gl.uniform1f(uPointMode,1);gl.bindBuffer(gl.ARRAY_BUFFER,pointBuffer);attrs();gl.drawArrays(gl.POINTS,0,count);gl.uniform1f(uPointMode,0);gl.bindBuffer(gl.ARRAY_BUFFER,cubeBuffer);attrs();gl.drawArrays(gl.LINES,0,cubeData.length/7);raf=requestAnimationFrame(render);}
raf=requestAnimationFrame(render);
window.__introGenesisUnmount=()=>{if(disposed)return;disposed=true;cancelAnimationFrame(raf);observer.disconnect();gl.deleteBuffer(pointBuffer);gl.deleteBuffer(cubeBuffer);gl.deleteProgram(program);const ext=gl.getExtension("WEBGL_lose_context");if(ext)ext.loseContext();canvas.remove();};
})();