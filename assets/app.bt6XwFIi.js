import{U as o,a3 as p,a4 as u,a5 as l,a6 as c,a7 as f,a8 as d,a9 as m,aa as h,ab as g,ac as A,ad as P,d as _,u as v,k as y,y as R,ae as w,af as C,ag as E,a1 as b}from"./chunks/framework.In-ObVTW.js";import{R as T}from"./chunks/theme.UoatTIJJ.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),S=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&w(),C(),E(),s.setup&&s.setup(),()=>b(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=O(),a=L();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function L(){return h(S)}function O(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[])),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
