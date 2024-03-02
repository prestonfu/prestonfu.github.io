function b() {}
const Z = (t) => t;
function wt(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function tt(t) {
  return t();
}
function V() {
  return Object.create(null);
}
function v(t) {
  t.forEach(tt);
}
function H(t) {
  return typeof t == "function";
}
function Gt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let R;
function It(t, e) {
  return R || (R = document.createElement("a")), (R.href = e), t === R.href;
}
function xt(t) {
  return Object.keys(t).length === 0;
}
function $t(t, ...e) {
  if (t == null) return b;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function Jt(t, e, n) {
  t.$$.on_destroy.push($t(e, n));
}
function Kt(t, e, n, i) {
  if (t) {
    const s = et(t, e, n, i);
    return t[0](s);
  }
}
function et(t, e, n, i) {
  return t[1] && i ? wt(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Qt(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const c = [],
        r = Math.max(e.dirty.length, s.length);
      for (let l = 0; l < r; l += 1) c[l] = e.dirty[l] | s[l];
      return c;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Ut(t, e, n, i, s, c) {
  if (s) {
    const r = et(e, n, i, c);
    t.p(r, s);
  }
}
function Vt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function Xt(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Yt(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Zt(t) {
  const e = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [t, "px"];
}
const nt = typeof window < "u";
let it = nt ? () => window.performance.now() : () => Date.now(),
  K = nt ? (t) => requestAnimationFrame(t) : b;
const S = new Set();
function st(t) {
  S.forEach((e) => {
    e.c(t) || (S.delete(e), e.f());
  }),
    S.size !== 0 && K(st);
}
function rt(t) {
  let e;
  return (
    S.size === 0 && K(st),
    {
      promise: new Promise((n) => {
        S.add((e = { c: t, f: n }));
      }),
      abort() {
        S.delete(e);
      },
    }
  );
}
let L = !1;
function bt() {
  L = !0;
}
function vt() {
  L = !1;
}
function kt(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function Et(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const o = [];
    for (let u = 0; u < e.length; u++) {
      const f = e[u];
      f.claim_order !== void 0 && o.push(f);
    }
    e = o;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    const u = e[o].claim_order,
      f =
        (s > 0 && e[n[s]].claim_order <= u
          ? s + 1
          : kt(1, s, (_) => e[n[_]].claim_order, u)) - 1;
    i[o] = n[f] + 1;
    const a = f + 1;
    (n[a] = o), (s = Math.max(a, s));
  }
  const c = [],
    r = [];
  let l = e.length - 1;
  for (let o = n[s] + 1; o != 0; o = i[o - 1]) {
    for (c.push(e[o - 1]); l >= o; l--) r.push(e[l]);
    l--;
  }
  for (; l >= 0; l--) r.push(e[l]);
  c.reverse(), r.sort((o, u) => o.claim_order - u.claim_order);
  for (let o = 0, u = 0; o < r.length; o++) {
    for (; u < c.length && r[o].claim_order >= c[u].claim_order; ) u++;
    const f = u < c.length ? c[u] : null;
    t.insertBefore(r[o], f);
  }
}
function Nt(t, e) {
  t.appendChild(e);
}
function ot(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function St(t) {
  const e = lt("style");
  return At(ot(t), e), e.sheet;
}
function At(t, e) {
  return Nt(t.head || t, e), e.sheet;
}
function jt(t, e) {
  if (L) {
    for (
      Et(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function te(t, e, n) {
  L && !n
    ? jt(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function ct(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function ee(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function lt(t) {
  return document.createElement(t);
}
function Ct(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Q(t) {
  return document.createTextNode(t);
}
function ne() {
  return Q(" ");
}
function ie() {
  return Q("");
}
function Mt(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function se(t, e) {
  for (const n in e) Mt(t, n, e[n]);
}
function Dt(t) {
  return Array.from(t.childNodes);
}
function Ot(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function ut(t, e, n, i, s = !1) {
  Ot(t);
  const c = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const l = t[r];
      if (e(l)) {
        const o = n(l);
        return (
          o === void 0 ? t.splice(r, 1) : (t[r] = o),
          s || (t.claim_info.last_index = r),
          l
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const l = t[r];
      if (e(l)) {
        const o = n(l);
        return (
          o === void 0 ? t.splice(r, 1) : (t[r] = o),
          s
            ? o === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          l
        );
      }
    }
    return i();
  })();
  return (
    (c.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    c
  );
}
function at(t, e, n, i) {
  return ut(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const c = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const l = s.attributes[r];
        n[l.name] || c.push(l.name);
      }
      c.forEach((r) => s.removeAttribute(r));
    },
    () => i(e)
  );
}
function re(t, e, n) {
  return at(t, e, n, lt);
}
function oe(t, e, n) {
  return at(t, e, n, Ct);
}
function Tt(t, e) {
  return ut(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => Q(e),
    !0
  );
}
function ce(t) {
  return Tt(t, " ");
}
function le(t, e) {
  (e = "" + e), t.data !== e && (t.data = e);
}
function ue(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function ae(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Pt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(t, n, i, e), s;
}
function fe(t, e) {
  const n = [];
  let i = 0;
  for (const s of e.childNodes)
    if (s.nodeType === 8) {
      const c = s.textContent.trim();
      c === `HEAD_${t}_END`
        ? ((i -= 1), n.push(s))
        : c === `HEAD_${t}_START` && ((i += 1), n.push(s));
    } else i > 0 && n.push(s);
  return n;
}
function _e(t, e) {
  return new t(e);
}
const z = new Map();
let B = 0;
function Rt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function qt(t, e) {
  const n = { stylesheet: St(e), rules: {} };
  return z.set(t, n), n;
}
function ft(t, e, n, i, s, c, r, l = 0) {
  const o = 16.666 / i;
  let u = `{
`;
  for (let p = 0; p <= 1; p += o) {
    const y = e + (n - e) * c(p);
    u +=
      p * 100 +
      `%{${r(y, 1 - y)}}
`;
  }
  const f =
      u +
      `100% {${r(n, 1 - n)}}
}`,
    a = `__svelte_${Rt(f)}_${l}`,
    _ = ot(t),
    { stylesheet: h, rules: d } = z.get(_) || qt(_, t);
  d[a] ||
    ((d[a] = !0), h.insertRule(`@keyframes ${a} ${f}`, h.cssRules.length));
  const g = t.style.animation || "";
  return (
    (t.style.animation = `${
      g ? `${g}, ` : ""
    }${a} ${i}ms linear ${s}ms 1 both`),
    (B += 1),
    a
  );
}
function I(t, e) {
  const n = (t.style.animation || "").split(", "),
    i = n.filter(
      e ? (c) => c.indexOf(e) < 0 : (c) => c.indexOf("__svelte") === -1
    ),
    s = n.length - i.length;
  s && ((t.style.animation = i.join(", ")), (B -= s), B || zt());
}
function zt() {
  K(() => {
    B ||
      (z.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && ct(e);
      }),
      z.clear());
  });
}
let O;
function D(t) {
  O = t;
}
function _t() {
  if (!O) throw new Error("Function called outside component initialization");
  return O;
}
function de(t) {
  _t().$$.on_mount.push(t);
}
function he(t) {
  _t().$$.after_update.push(t);
}
const N = [],
  X = [];
let A = [];
const Y = [],
  dt = Promise.resolve();
let J = !1;
function ht() {
  J || ((J = !0), dt.then(mt));
}
function me() {
  return ht(), dt;
}
function T(t) {
  A.push(t);
}
const G = new Set();
let E = 0;
function mt() {
  if (E !== 0) return;
  const t = O;
  do {
    try {
      for (; E < N.length; ) {
        const e = N[E];
        E++, D(e), Bt(e.$$);
      }
    } catch (e) {
      throw ((N.length = 0), (E = 0), e);
    }
    for (D(null), N.length = 0, E = 0; X.length; ) X.pop()();
    for (let e = 0; e < A.length; e += 1) {
      const n = A[e];
      G.has(n) || (G.add(n), n());
    }
    A.length = 0;
  } while (N.length);
  for (; Y.length; ) Y.pop()();
  (J = !1), G.clear(), D(t);
}
function Bt(t) {
  if (t.fragment !== null) {
    t.update(), v(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(T);
  }
}
function Ft(t) {
  const e = [],
    n = [];
  A.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (A = e);
}
let M;
function pt() {
  return (
    M ||
      ((M = Promise.resolve()),
      M.then(() => {
        M = null;
      })),
    M
  );
}
function F(t, e, n) {
  t.dispatchEvent(Pt(`${e ? "intro" : "outro"}${n}`));
}
const q = new Set();
let $;
function pe() {
  $ = { r: 0, c: [], p: $ };
}
function ye() {
  $.r || v($.c), ($ = $.p);
}
function yt(t, e) {
  t && t.i && (q.delete(t), t.i(e));
}
function ge(t, e, n, i) {
  if (t && t.o) {
    if (q.has(t)) return;
    q.add(t),
      $.c.push(() => {
        q.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const gt = { duration: 0 };
function we(t, e, n) {
  const i = { direction: "in" };
  let s = e(t, n, i),
    c = !1,
    r,
    l,
    o = 0;
  function u() {
    r && I(t, r);
  }
  function f() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: d = Z,
      tick: g = b,
      css: p,
    } = s || gt;
    p && (r = ft(t, 0, 1, h, _, d, p, o++)), g(0, 1);
    const y = it() + _,
      j = y + h;
    l && l.abort(),
      (c = !0),
      T(() => F(t, !0, "start")),
      (l = rt((k) => {
        if (c) {
          if (k >= j) return g(1, 0), F(t, !0, "end"), u(), (c = !1);
          if (k >= y) {
            const C = d((k - y) / h);
            g(C, 1 - C);
          }
        }
        return c;
      }));
  }
  let a = !1;
  return {
    start() {
      a || ((a = !0), I(t), H(s) ? ((s = s(i)), pt().then(f)) : f());
    },
    invalidate() {
      a = !1;
    },
    end() {
      c && (u(), (c = !1));
    },
  };
}
function xe(t, e, n) {
  const i = { direction: "out" };
  let s = e(t, n, i),
    c = !0,
    r;
  const l = $;
  l.r += 1;
  function o() {
    const {
      delay: u = 0,
      duration: f = 300,
      easing: a = Z,
      tick: _ = b,
      css: h,
    } = s || gt;
    h && (r = ft(t, 1, 0, f, u, a, h));
    const d = it() + u,
      g = d + f;
    T(() => F(t, !1, "start")),
      rt((p) => {
        if (c) {
          if (p >= g) return _(0, 1), F(t, !1, "end"), --l.r || v(l.c), !1;
          if (p >= d) {
            const y = a((p - d) / f);
            _(1 - y, y);
          }
        }
        return c;
      });
  }
  return (
    H(s)
      ? pt().then(() => {
          (s = s(i)), o();
        })
      : o(),
    {
      end(u) {
        u && s.tick && s.tick(1, 0), c && (r && I(t, r), (c = !1));
      },
    }
  );
}
function $e(t, e) {
  t.d(1), e.delete(t.key);
}
function be(t, e, n, i, s, c, r, l, o, u, f, a) {
  let _ = t.length,
    h = c.length,
    d = _;
  const g = {};
  for (; d--; ) g[t[d].key] = d;
  const p = [],
    y = new Map(),
    j = new Map(),
    k = [];
  for (d = h; d--; ) {
    const m = a(s, c, d),
      w = n(m);
    let x = r.get(w);
    x ? i && k.push(() => x.p(m, e)) : ((x = u(w, m)), x.c()),
      y.set(w, (p[d] = x)),
      w in g && j.set(w, Math.abs(d - g[w]));
  }
  const C = new Set(),
    U = new Set();
  function W(m) {
    yt(m, 1), m.m(l, f), r.set(m.key, m), (f = m.first), h--;
  }
  for (; _ && h; ) {
    const m = p[h - 1],
      w = t[_ - 1],
      x = m.key,
      P = w.key;
    m === w
      ? ((f = m.first), _--, h--)
      : y.has(P)
      ? !r.has(x) || C.has(x)
        ? W(m)
        : U.has(P)
        ? _--
        : j.get(x) > j.get(P)
        ? (U.add(x), W(m))
        : (C.add(P), _--)
      : (o(w, r), _--);
  }
  for (; _--; ) {
    const m = t[_];
    y.has(m.key) || o(m, r);
  }
  for (; h; ) W(p[h - 1]);
  return v(k), p;
}
function ve(t, e) {
  const n = {},
    i = {},
    s = { $$scope: 1 };
  let c = t.length;
  for (; c--; ) {
    const r = t[c],
      l = e[c];
    if (l) {
      for (const o in r) o in l || (i[o] = 1);
      for (const o in l) s[o] || ((n[o] = l[o]), (s[o] = 1));
      t[c] = l;
    } else for (const o in r) s[o] = 1;
  }
  for (const r in i) r in n || (n[r] = void 0);
  return n;
}
function ke(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Ee(t) {
  t && t.c();
}
function Ne(t, e) {
  t && t.l(e);
}
function Ht(t, e, n, i) {
  const { fragment: s, after_update: c } = t.$$;
  s && s.m(e, n),
    i ||
      T(() => {
        const r = t.$$.on_mount.map(tt).filter(H);
        t.$$.on_destroy ? t.$$.on_destroy.push(...r) : v(r),
          (t.$$.on_mount = []);
      }),
    c.forEach(T);
}
function Lt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (Ft(n.after_update),
    v(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Wt(t, e) {
  t.$$.dirty[0] === -1 && (N.push(t), ht(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Se(t, e, n, i, s, c, r, l = [-1]) {
  const o = O;
  D(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: b,
    not_equal: s,
    bound: V(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    callbacks: V(),
    dirty: l,
    skip_bound: !1,
    root: e.target || o.$$.root,
  });
  r && r(u.root);
  let f = !1;
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (a, _, ...h) => {
          const d = h.length ? h[0] : _;
          return (
            u.ctx &&
              s(u.ctx[a], (u.ctx[a] = d)) &&
              (!u.skip_bound && u.bound[a] && u.bound[a](d), f && Wt(t, a)),
            _
          );
        })
      : []),
    u.update(),
    (f = !0),
    v(u.before_update),
    (u.fragment = i ? i(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      bt();
      const a = Dt(e.target);
      u.fragment && u.fragment.l(a), a.forEach(ct);
    } else u.fragment && u.fragment.c();
    e.intro && yt(t.$$.fragment),
      Ht(t, e.target, e.anchor, e.customElement),
      vt(),
      mt();
  }
  D(o);
}
class Ae {
  $destroy() {
    Lt(this, 1), (this.$destroy = b);
  }
  $on(e, n) {
    if (!H(n)) return b;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n);
        s !== -1 && i.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !xt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  Yt as $,
  Ht as A,
  Lt as B,
  Zt as C,
  jt as D,
  be as E,
  b as F,
  Jt as G,
  ae as H,
  $e as I,
  fe as J,
  It as K,
  Kt as L,
  Ut as M,
  Vt as N,
  Qt as O,
  T as P,
  we as Q,
  xe as R,
  Ae as S,
  wt as T,
  ve as U,
  ke as V,
  Xt as W,
  ee as X,
  Ct as Y,
  oe as Z,
  se as _,
  ne as a,
  te as b,
  ce as c,
  ge as d,
  ie as e,
  ye as f,
  yt as g,
  ct as h,
  Se as i,
  he as j,
  lt as k,
  re as l,
  Dt as m,
  Mt as n,
  de as o,
  ue as p,
  Q as q,
  Tt as r,
  Gt as s,
  me as t,
  le as u,
  pe as v,
  X as w,
  _e as x,
  Ee as y,
  Ne as z,
};
