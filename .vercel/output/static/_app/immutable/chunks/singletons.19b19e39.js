import { F as d, s as m } from "./index.4b79d54d.js";
const u = [];
function p(e, t = d) {
  let n;
  const o = new Set();
  function r(s) {
    if (m(e, s) && ((e = s), n)) {
      const i = !u.length;
      for (const l of o) l[1](), u.push(l, e);
      if (i) {
        for (let l = 0; l < u.length; l += 2) u[l][0](u[l + 1]);
        u.length = 0;
      }
    }
  }
  function c(s) {
    r(s(e));
  }
  function a(s, i = d) {
    const l = [s, i];
    return (
      o.add(l),
      o.size === 1 && (n = t(r) || d),
      s(e),
      () => {
        o.delete(l), o.size === 0 && n && (n(), (n = null));
      }
    );
  }
  return { set: r, update: c, subscribe: a };
}
var g;
const E = ((g = globalThis.__sveltekit_3h2w0o) == null ? void 0 : g.base) ?? "";
var k;
const A =
    ((k = globalThis.__sveltekit_3h2w0o) == null ? void 0 : k.assets) ?? E,
  R = "1709363430289",
  I = "sveltekit:snapshot",
  x = "sveltekit:scroll",
  O = "sveltekit:index",
  _ = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1, false: -1 },
  v = location.origin;
function U(e) {
  let t = e.baseURI;
  if (!t) {
    const n = e.getElementsByTagName("base");
    t = n.length ? n[0].href : e.URL;
  }
  return t;
}
function L() {
  return { x: pageXOffset, y: pageYOffset };
}
function f(e, t) {
  return e.getAttribute(`data-sveltekit-${t}`);
}
const b = { ..._, "": _.hover };
function w(e) {
  let t = e.assignedSlot ?? e.parentNode;
  return (t == null ? void 0 : t.nodeType) === 11 && (t = t.host), t;
}
function N(e, t) {
  for (; e && e !== t; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = w(e);
  }
}
function P(e, t) {
  let n;
  try {
    n = new URL(
      e instanceof SVGAElement ? e.href.baseVal : e.href,
      document.baseURI
    );
  } catch {}
  const o = e instanceof SVGAElement ? e.target.baseVal : e.target,
    r =
      !n ||
      !!o ||
      T(n, t) ||
      (e.getAttribute("rel") || "").split(/\s+/).includes("external"),
    c = (n == null ? void 0 : n.origin) === v && e.hasAttribute("download");
  return { url: n, external: r, target: o, download: c };
}
function V(e) {
  let t = null,
    n = null,
    o = null,
    r = null,
    c = null,
    a = null,
    s = e;
  for (; s && s !== document.documentElement; )
    o === null && (o = f(s, "preload-code")),
      r === null && (r = f(s, "preload-data")),
      t === null && (t = f(s, "keepfocus")),
      n === null && (n = f(s, "noscroll")),
      c === null && (c = f(s, "reload")),
      a === null && (a = f(s, "replacestate")),
      (s = w(s));
  function i(l) {
    switch (l) {
      case "":
      case "true":
        return !0;
      case "off":
      case "false":
        return !1;
      default:
        return null;
    }
  }
  return {
    preload_code: b[o ?? "off"],
    preload_data: b[r ?? "off"],
    keep_focus: i(t),
    noscroll: i(n),
    reload: i(c),
    replace_state: i(a),
  };
}
function h(e) {
  const t = p(e);
  let n = !0;
  function o() {
    (n = !0), t.update((a) => a);
  }
  function r(a) {
    (n = !1), t.set(a);
  }
  function c(a) {
    let s;
    return t.subscribe((i) => {
      (s === void 0 || (n && i !== s)) && a((s = i));
    });
  }
  return { notify: o, set: r, subscribe: c };
}
function S() {
  const { set: e, subscribe: t } = p(!1);
  let n;
  async function o() {
    clearTimeout(n);
    try {
      const r = await fetch(`${A}/_app/version.json`, {
        headers: { pragma: "no-cache", "cache-control": "no-cache" },
      });
      if (!r.ok) return !1;
      const a = (await r.json()).version !== R;
      return a && (e(!0), clearTimeout(n)), a;
    } catch {
      return !1;
    }
  }
  return { subscribe: t, check: o };
}
function T(e, t) {
  return e.origin !== v || !e.pathname.startsWith(t);
}
function Y(e) {
  e.client;
}
const q = { url: h({}), page: h({}), navigating: p(null), updated: S() };
export {
  O as I,
  _ as P,
  x as S,
  I as a,
  P as b,
  V as c,
  q as d,
  E as e,
  N as f,
  U as g,
  Y as h,
  T as i,
  v as o,
  L as s,
};
