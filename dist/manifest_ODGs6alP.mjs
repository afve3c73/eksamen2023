import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_3c_1aLJL.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\".toggle-btn\"),t=document.querySelector(\".main-menu\");function o(){t.classList.toggle(\"shown\");const n=t.classList.contains(\"shown\");n?(console.log(n),e.textContent=\"X\"):(console.log(n),e.textContent=\"Menu\")}e.addEventListener(\"click\",o);\n"}],"styles":[{"type":"external","src":"/_astro/grupper.oI30qmC7.css"},{"type":"inline","content":"p[data-astro-cid-j7pv25f6]{max-width:65ch}main[data-astro-cid-j7pv25f6]{padding-bottom:65px}h2[data-astro-cid-j7pv25f6]{padding-block:30px}.manadentext[data-astro-cid-j7pv25f6]{display:flex;flex-direction:column;gap:20px}.manaden[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;max-width:1200px;padding-bottom:50px}.manadenpizza[data-astro-cid-j7pv25f6]{max-width:300px;margin:auto}.pizzasec[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;max-width:1200px;padding-bottom:50px}.pizzaicon[data-astro-cid-j7pv25f6]{width:150px}h4[data-astro-cid-j7pv25f6]{text-align:center}.pizzatext[data-astro-cid-j7pv25f6]{font-style:italic;width:300px;text-align:center}article[data-astro-cid-j7pv25f6]{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:25px}main[data-astro-cid-j7pv25f6]{max-width:1200px;margin:auto;padding-inline:10px}header[data-astro-cid-j7pv25f6]{position:relative}.hero_text[data-astro-cid-j7pv25f6]{position:absolute;top:10%;left:6%;text-align:center;color:#fff;display:flex;flex-direction:column;gap:40px}.knapp[data-astro-cid-j7pv25f6]{display:flex;justify-content:center;align-items:center}h1[data-astro-cid-j7pv25f6]{margin:0;font-size:60px}.h2[data-astro-cid-j7pv25f6]{margin:0;font-style:italic;font-weight:400;font-size:24px}.hero[data-astro-cid-j7pv25f6]{width:100%;height:auto}@media (max-width: 600px){.hero[data-astro-cid-j7pv25f6]{height:50vh}h1[data-astro-cid-j7pv25f6]{padding-block:0;font-size:40px}.hero_text[data-astro-cid-j7pv25f6]{top:50%;left:50%;transform:translate(-50%,-50%)}}@media (min-width: 600px){.manaden[data-astro-cid-j7pv25f6]{flex-direction:row}.pizzasec[data-astro-cid-j7pv25f6]{justify-content:space-between}}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\".toggle-btn\"),t=document.querySelector(\".main-menu\");function o(){t.classList.toggle(\"shown\");const n=t.classList.contains(\"shown\");n?(console.log(n),e.textContent=\"X\"):(console.log(n),e.textContent=\"Menu\")}e.addEventListener(\"click\",o);\n"}],"styles":[{"type":"external","src":"/_astro/grupper.oI30qmC7.css"},{"type":"inline","content":"section[data-astro-cid-eanhs6ip]{padding-bottom:65px}img[data-astro-cid-eanhs6ip]{margin:auto;display:flex;justify-content:center;align-items:center;max-width:400px;padding-bottom:30px}article[data-astro-cid-eanhs6ip]{display:flex;flex-direction:column;gap:10px;align-items:center}p[data-astro-cid-eanhs6ip]{max-width:65ch}.info[data-astro-cid-eanhs6ip]{display:flex;flex-direction:column;gap:10px}@media only screen and (min-width: 900px){article[data-astro-cid-eanhs6ip]{align-items:flex-start}img[data-astro-cid-eanhs6ip]{max-width:450px;padding-bottom:0;justify-content:baseline}section[data-astro-cid-eanhs6ip]{display:grid;grid-template-columns:1fr 1fr;gap:100px}.bild[data-astro-cid-eanhs6ip]{order:1}.knapp[data-astro-cid-eanhs6ip]{display:flex}}\nmain[data-astro-cid-sckkx6r4]{max-width:1200px;margin:auto;padding-inline:10px}\n"}],"routeData":{"route":"/grupper","type":"page","pattern":"^\\/grupper\\/?$","segments":[[{"content":"grupper","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/grupper.astro","pathname":"/grupper","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\".toggle-btn\"),t=document.querySelector(\".main-menu\");function o(){t.classList.toggle(\"shown\");const n=t.classList.contains(\"shown\");n?(console.log(n),e.textContent=\"X\"):(console.log(n),e.textContent=\"Menu\")}e.addEventListener(\"click\",o);\n"}],"styles":[{"type":"external","src":"/_astro/grupper.oI30qmC7.css"},{"type":"inline","content":"section[data-astro-cid-4ytxwv3d]{padding-bottom:65px}img[data-astro-cid-4ytxwv3d]{margin:auto;display:flex;justify-content:center;align-items:center;max-width:400px;padding-bottom:30px}.bild[data-astro-cid-4ytxwv3d]{border-radius:50%}article[data-astro-cid-4ytxwv3d]{display:flex;flex-direction:column;gap:10px;align-items:center}p[data-astro-cid-4ytxwv3d]{max-width:65ch}form[data-astro-cid-4ytxwv3d]{padding:2rem;background:var(--primary);border-radius:8px;display:grid;font-family:;font-size:20px}label[data-astro-cid-4ytxwv3d],input[data-astro-cid-4ytxwv3d],textarea[data-astro-cid-4ytxwv3d],select[data-astro-cid-4ytxwv3d],button[data-astro-cid-4ytxwv3d]{display:block}input[data-astro-cid-4ytxwv3d]{padding-block:10px;border-radius:50px;border-style:none;padding-inline:10px;font-style:italic;width:100%}.form-felt[data-astro-cid-4ytxwv3d]{display:grid;gap:15px}textarea[data-astro-cid-4ytxwv3d]{width:100%;border-radius:20px;border-style:none}@media only screen and (min-width: 900px){article[data-astro-cid-4ytxwv3d]{align-items:flex-start}img[data-astro-cid-4ytxwv3d]{max-width:450px;padding-bottom:0;justify-content:baseline}.bild[data-astro-cid-4ytxwv3d]{order:1;border-radius:50%}section[data-astro-cid-4ytxwv3d]{display:grid;grid-template-columns:1fr 1fr;gap:100px}form[data-astro-cid-4ytxwv3d]{display:flex}}\nmain[data-astro-cid-sckkx6r4]{max-width:1200px;margin:auto;padding-inline:10px}\n"}],"routeData":{"route":"/om_oss","type":"page","pattern":"^\\/om_oss\\/?$","segments":[[{"content":"om_oss","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/om_oss.astro","pathname":"/om_oss","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelector(\".toggle-btn\"),t=document.querySelector(\".main-menu\");function o(){t.classList.toggle(\"shown\");const n=t.classList.contains(\"shown\");n?(console.log(n),e.textContent=\"X\"):(console.log(n),e.textContent=\"Menu\")}e.addEventListener(\"click\",o);\n"}],"styles":[{"type":"external","src":"/_astro/grupper.oI30qmC7.css"},{"type":"inline","content":"nav[data-astro-cid-o5xiawde]{display:flex;align-items:center;flex-direction:column;gap:10px;justify-content:center}a[data-astro-cid-o5xiawde]{font-size:var(--font-size-h4);font-weight:700;text-align:center}article[data-astro-cid-o5xiawde]{display:flex;align-items:center;justify-content:center;flex-direction:column;text-align:center;gap:10px;padding-bottom:30px}p[data-astro-cid-o5xiawde]{text-align:center;max-width:300px}.bold[data-astro-cid-o5xiawde]{font-weight:700}.italic[data-astro-cid-o5xiawde]{font-style:italic}@media only screen and (min-width: 900px){nav[data-astro-cid-o5xiawde]{flex-direction:row}article[data-astro-cid-o5xiawde]{display:flex;align-items:self-start;flex-direction:column;text-align:center;gap:10px;padding-bottom:30px}p[data-astro-cid-o5xiawde]{text-align:center;max-width:100%}}\nmain[data-astro-cid-sckkx6r4]{max-width:1200px;margin:auto;padding-inline:10px}\n"}],"routeData":{"route":"/menu","type":"page","pattern":"^\\/menu\\/?$","segments":[[{"content":"menu","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/menu.astro","pathname":"/menu","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/madelene/Documents/kea/eksamen2023/src/pages/grupper.astro",{"propagation":"none","containsHead":true}],["/Users/madelene/Documents/kea/eksamen2023/src/pages/menu.astro",{"propagation":"none","containsHead":true}],["/Users/madelene/Documents/kea/eksamen2023/src/pages/om_oss.astro",{"propagation":"none","containsHead":true}],["/Users/madelene/Documents/kea/eksamen2023/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/grupper@_@astro":"pages/grupper.astro.mjs","\u0000@astro-page:src/pages/om_oss@_@astro":"pages/om_oss.astro.mjs","\u0000@astro-page:src/pages/menu@_@astro":"pages/menu.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_E-ygsUJm.mjs","/src/pages/menu.astro":"chunks/pages/menu_m3SjPmXt.mjs","/src/pages/om_oss.astro":"chunks/pages/om_oss_kFFqynPX.mjs","\u0000@astrojs-manifest":"manifest_ODGs6alP.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.wkbXFQj7.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
