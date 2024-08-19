document.addEventListener("DOMContentLoaded",(function(){const e=document.head,t=document.createElement("meta");t.setAttribute("charset","UTF-8"),e.appendChild(t);const n=document.createElement("meta");n.name="viewport",n.content="width=device-width, initial-scale=1.0",e.appendChild(n);const d=document.createElement("title");d.textContent="n64emulate",e.appendChild(d);const a=document.createElement("link");a.rel="icon",a.href="favicon.ico",a.type="image/x-icon",e.appendChild(a);const l=document.createElement("link");l.rel="stylesheet",l.href="https://cdn.jsdelivr.net/npm/tailwindcss@latest/dist/tailwind.min.css",e.appendChild(l);const o=document.createElement("style");o.textContent="\n        body, html {\n            margin: 0;\n            padding: 0;\n            height: 100%;\n            overflow: hidden;\n        }\n        #game {\n            width: 100%;\n            height: calc(100% - 60px); /* Adjust height for form */\n        }\n    ",e.appendChild(o);const c=document.body;c.className="bg-gray-800 flex flex-col items-center justify-center";const i=document.createElement("div");i.className="w-full max-w-lg p-4 bg-gray-900 rounded-lg shadow-lg mb-4",c.appendChild(i);const r=document.createElement("h1");r.className="text-white text-2xl mb-4",r.textContent="n64emulate",i.appendChild(r);const s=document.createElement("form");s.id="emulatorForm",s.className="space-y-4",i.appendChild(s);const m=document.createElement("div");s.appendChild(m);const p=document.createElement("label");p.setAttribute("for","romUrl"),p.className="block text-white",p.textContent="ROM URL",m.appendChild(p);const u=document.createElement("input");u.type="text",u.id="romUrl",u.className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white",u.placeholder="Enter ROM URL",u.required=!0,m.appendChild(u);const h=document.createElement("div");s.appendChild(h);const C=document.createElement("label");C.setAttribute("for","coreSelect"),C.className="block text-white",C.textContent="Select Core",h.appendChild(C);const b=document.createElement("select");b.id="coreSelect",b.className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white",b.required=!0;const g=document.createElement("option");g.value="",g.disabled=!0,g.selected=!0,g.textContent="Select core",b.appendChild(g);const E=document.createElement("option");E.value="n64",E.textContent="N64",b.appendChild(E),h.appendChild(b);const w=document.createElement("button");w.type="submit",w.className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300",w.textContent="Load Game",s.appendChild(w);const x=document.createElement("div");x.id="error",x.className="text-red-500 mt-4",x.style.display="none",x.textContent="Invalid URL or Core. Please check and try again.",i.appendChild(x);const y=document.createElement("div");y.id="game",c.appendChild(y),s.addEventListener("submit",(function(e){e.preventDefault();const t=u.value,n=b.value;t&&n?(x.style.display="none",function(e,t){window.EJS_player="#game",window.EJS_core=t,window.EJS_pathtodata="https://cdn.emulatorjs.org/stable/data/",window.EJS_gameUrl=e;const n=document.createElement("script");n.src="https://cdn.emulatorjs.org/stable/data/loader.js",document.body.appendChild(n)}(t,n)):x.style.display="block"}))}));
