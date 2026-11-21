const q = window, J = q.ShadowRoot && (q.ShadyCSS === void 0 || q.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, G = Symbol(), Q = /* @__PURE__ */ new WeakMap();
let ht = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== G)
      throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (J && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = Q.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Q.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const vt = (o) => new ht(typeof o == "string" ? o : o + "", void 0, G), ct = (o, ...t) => {
  const e = o.length === 1 ? o[0] : t.reduce((i, s, n) => i + ((r) => {
    if (r._$cssResult$ === !0)
      return r.cssText;
    if (typeof r == "number")
      return r;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + r + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + o[n + 1], o[0]);
  return new ht(e, o, G);
}, ft = (o, t) => {
  J ? o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach((e) => {
    const i = document.createElement("style"), s = q.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, o.appendChild(i);
  });
}, X = J ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules)
    e += i.cssText;
  return vt(e);
})(o) : o;
var L;
const z = window, Y = z.trustedTypes, _t = Y ? Y.emptyScript : "", tt = z.reactiveElementPolyfillSupport, Z = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? _t : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, dt = (o, t) => t !== o && (t == t || o == o), B = { attribute: !0, type: String, converter: Z, reflect: !1, hasChanged: dt };
let b = class extends HTMLElement {
  constructor() {
    super(), this._$Ei = /* @__PURE__ */ new Map(), this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u();
  }
  static addInitializer(t) {
    var e;
    this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t);
  }
  static get observedAttributes() {
    this.finalize();
    const t = [];
    return this.elementProperties.forEach((e, i) => {
      const s = this._$Ep(i, e);
      s !== void 0 && (this._$Ev.set(s, i), t.push(s));
    }), t;
  }
  static createProperty(t, e = B) {
    if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) {
      const i = typeof t == "symbol" ? Symbol() : "__" + t, s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && Object.defineProperty(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    return { get() {
      return this[e];
    }, set(s) {
      const n = this[t];
      this[e] = s, this.requestUpdate(t, n, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) || B;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized"))
      return !1;
    this.finalized = !0;
    const t = Object.getPrototypeOf(this);
    if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = /* @__PURE__ */ new Map(), this.hasOwnProperty("properties")) {
      const e = this.properties, i = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)];
      for (const s of i)
        this.createProperty(s, e[s]);
    }
    return this.elementStyles = this.finalizeStyles(this.styles), !0;
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i)
        e.unshift(X(s));
    } else
      t !== void 0 && e.push(X(t));
    return e;
  }
  static _$Ep(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  u() {
    var t;
    this._$E_ = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach((e) => e(this));
  }
  addController(t) {
    var e, i;
    ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((i = t.hostConnected) === null || i === void 0 || i.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1);
  }
  _$Eg() {
    this.constructor.elementProperties.forEach((t, e) => {
      this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]);
    });
  }
  createRenderRoot() {
    var t;
    const e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions);
    return ft(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var t;
    this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$ES) === null || t === void 0 || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) === null || i === void 0 ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$EO(t, e, i = B) {
    var s;
    const n = this.constructor._$Ep(t, i);
    if (n !== void 0 && i.reflect === !0) {
      const r = (((s = i.converter) === null || s === void 0 ? void 0 : s.toAttribute) !== void 0 ? i.converter : Z).toAttribute(e, i.type);
      this._$El = t, r == null ? this.removeAttribute(n) : this.setAttribute(n, r), this._$El = null;
    }
  }
  _$AK(t, e) {
    var i;
    const s = this.constructor, n = s._$Ev.get(t);
    if (n !== void 0 && this._$El !== n) {
      const r = s.getPropertyOptions(n), c = typeof r.converter == "function" ? { fromAttribute: r.converter } : ((i = r.converter) === null || i === void 0 ? void 0 : i.fromAttribute) !== void 0 ? r.converter : Z;
      this._$El = n, this[n] = c.fromAttribute(e, r.type), this._$El = null;
    }
  }
  requestUpdate(t, e, i) {
    let s = !0;
    t !== void 0 && (((i = i || this.constructor.getPropertyOptions(t)).hasChanged || dt)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), i.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = /* @__PURE__ */ new Map()), this._$EC.set(t, i))) : s = !1), !this.isUpdatePending && s && (this._$E_ = this._$Ej());
  }
  async _$Ej() {
    this.isUpdatePending = !0;
    try {
      await this._$E_;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending)
      return;
    this.hasUpdated, this._$Ei && (this._$Ei.forEach((s, n) => this[n] = s), this._$Ei = void 0);
    let e = !1;
    const i = this._$AL;
    try {
      e = this.shouldUpdate(i), e ? (this.willUpdate(i), (t = this._$ES) === null || t === void 0 || t.forEach((s) => {
        var n;
        return (n = s.hostUpdate) === null || n === void 0 ? void 0 : n.call(s);
      }), this.update(i)) : this._$Ek();
    } catch (s) {
      throw e = !1, this._$Ek(), s;
    }
    e && this._$AE(i);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$ES) === null || e === void 0 || e.forEach((i) => {
      var s;
      return (s = i.hostUpdated) === null || s === void 0 ? void 0 : s.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$Ek() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$E_;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$EC !== void 0 && (this._$EC.forEach((e, i) => this._$EO(i, this[i], e)), this._$EC = void 0), this._$Ek();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
b.finalized = !0, b.elementProperties = /* @__PURE__ */ new Map(), b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, tt == null || tt({ ReactiveElement: b }), ((L = z.reactiveElementVersions) !== null && L !== void 0 ? L : z.reactiveElementVersions = []).push("1.5.0");
var V;
const j = window, C = j.trustedTypes, et = C ? C.createPolicy("lit-html", { createHTML: (o) => o }) : void 0, _ = `lit$${(Math.random() + "").slice(9)}$`, ut = "?" + _, mt = `<${ut}>`, S = document, U = (o = "") => S.createComment(o), O = (o) => o === null || typeof o != "object" && typeof o != "function", pt = Array.isArray, yt = (o) => pt(o) || typeof (o == null ? void 0 : o[Symbol.iterator]) == "function", N = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, it = /-->/g, st = />/g, m = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), ot = /'/g, rt = /"/g, gt = /^(?:script|style|textarea|title)$/i, bt = (o) => (t, ...e) => ({ _$litType$: o, strings: t, values: e }), P = bt(1), w = Symbol.for("lit-noChange"), u = Symbol.for("lit-nothing"), nt = /* @__PURE__ */ new WeakMap(), A = S.createTreeWalker(S, 129, null, !1), At = (o, t) => {
  const e = o.length - 1, i = [];
  let s, n = t === 2 ? "<svg>" : "", r = N;
  for (let l = 0; l < e; l++) {
    const a = o[l];
    let f, h, d = -1, g = 0;
    for (; g < a.length && (r.lastIndex = g, h = r.exec(a), h !== null); )
      g = r.lastIndex, r === N ? h[1] === "!--" ? r = it : h[1] !== void 0 ? r = st : h[2] !== void 0 ? (gt.test(h[2]) && (s = RegExp("</" + h[2], "g")), r = m) : h[3] !== void 0 && (r = m) : r === m ? h[0] === ">" ? (r = s ?? N, d = -1) : h[1] === void 0 ? d = -2 : (d = r.lastIndex - h[2].length, f = h[1], r = h[3] === void 0 ? m : h[3] === '"' ? rt : ot) : r === rt || r === ot ? r = m : r === it || r === st ? r = N : (r = m, s = void 0);
    const H = r === m && o[l + 1].startsWith("/>") ? " " : "";
    n += r === N ? a + mt : d >= 0 ? (i.push(f), a.slice(0, d) + "$lit$" + a.slice(d) + _ + H) : a + _ + (d === -2 ? (i.push(void 0), l) : H);
  }
  const c = n + (o[e] || "<?>") + (t === 2 ? "</svg>" : "");
  if (!Array.isArray(o) || !o.hasOwnProperty("raw"))
    throw Error("invalid template strings array");
  return [et !== void 0 ? et.createHTML(c) : c, i];
};
class R {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let n = 0, r = 0;
    const c = t.length - 1, l = this.parts, [a, f] = At(t, e);
    if (this.el = R.createElement(a, i), A.currentNode = this.el.content, e === 2) {
      const h = this.el.content, d = h.firstChild;
      d.remove(), h.append(...d.childNodes);
    }
    for (; (s = A.nextNode()) !== null && l.length < c; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) {
          const h = [];
          for (const d of s.getAttributeNames())
            if (d.endsWith("$lit$") || d.startsWith(_)) {
              const g = f[r++];
              if (h.push(d), g !== void 0) {
                const H = s.getAttribute(g.toLowerCase() + "$lit$").split(_), M = /([.?@])?(.*)/.exec(g);
                l.push({ type: 1, index: n, name: M[2], strings: H, ctor: M[1] === "." ? Ct : M[1] === "?" ? wt : M[1] === "@" ? xt : D });
              } else
                l.push({ type: 6, index: n });
            }
          for (const d of h)
            s.removeAttribute(d);
        }
        if (gt.test(s.tagName)) {
          const h = s.textContent.split(_), d = h.length - 1;
          if (d > 0) {
            s.textContent = C ? C.emptyScript : "";
            for (let g = 0; g < d; g++)
              s.append(h[g], U()), A.nextNode(), l.push({ type: 2, index: ++n });
            s.append(h[d], U());
          }
        }
      } else if (s.nodeType === 8)
        if (s.data === ut)
          l.push({ type: 2, index: n });
        else {
          let h = -1;
          for (; (h = s.data.indexOf(_, h + 1)) !== -1; )
            l.push({ type: 7, index: n }), h += _.length - 1;
        }
      n++;
    }
  }
  static createElement(t, e) {
    const i = S.createElement("template");
    return i.innerHTML = t, i;
  }
}
function x(o, t, e = o, i) {
  var s, n, r, c;
  if (t === w)
    return t;
  let l = i !== void 0 ? (s = e._$Co) === null || s === void 0 ? void 0 : s[i] : e._$Cl;
  const a = O(t) ? void 0 : t._$litDirective$;
  return (l == null ? void 0 : l.constructor) !== a && ((n = l == null ? void 0 : l._$AO) === null || n === void 0 || n.call(l, !1), a === void 0 ? l = void 0 : (l = new a(o), l._$AT(o, e, i)), i !== void 0 ? ((r = (c = e)._$Co) !== null && r !== void 0 ? r : c._$Co = [])[i] = l : e._$Cl = l), l !== void 0 && (t = x(o, l._$AS(o, t.values), l, i)), t;
}
class Et {
  constructor(t, e) {
    this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  v(t) {
    var e;
    const { el: { content: i }, parts: s } = this._$AD, n = ((e = t == null ? void 0 : t.creationScope) !== null && e !== void 0 ? e : S).importNode(i, !0);
    A.currentNode = n;
    let r = A.nextNode(), c = 0, l = 0, a = s[0];
    for (; a !== void 0; ) {
      if (c === a.index) {
        let f;
        a.type === 2 ? f = new k(r, r.nextSibling, this, t) : a.type === 1 ? f = new a.ctor(r, a.name, a.strings, this, t) : a.type === 6 && (f = new Nt(r, this, t)), this.u.push(f), a = s[++l];
      }
      c !== (a == null ? void 0 : a.index) && (r = A.nextNode(), c++);
    }
    return n;
  }
  p(t) {
    let e = 0;
    for (const i of this.u)
      i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class k {
  constructor(t, e, i, s) {
    var n;
    this.type = 2, this._$AH = u, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cm = (n = s == null ? void 0 : s.isConnected) === null || n === void 0 || n;
  }
  get _$AU() {
    var t, e;
    return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cm;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = x(this, t, e), O(t) ? t === u || t == null || t === "" ? (this._$AH !== u && this._$AR(), this._$AH = u) : t !== this._$AH && t !== w && this.g(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : yt(t) ? this.k(t) : this.g(t);
  }
  O(t, e = this._$AB) {
    return this._$AA.parentNode.insertBefore(t, e);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  g(t) {
    this._$AH !== u && O(this._$AH) ? this._$AA.nextSibling.data = t : this.T(S.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: i, _$litType$: s } = t, n = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = R.createElement(s.h, this.options)), s);
    if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === n)
      this._$AH.p(i);
    else {
      const r = new Et(n, this), c = r.v(this.options);
      r.p(i), this.T(c), this._$AH = r;
    }
  }
  _$AC(t) {
    let e = nt.get(t.strings);
    return e === void 0 && nt.set(t.strings, e = new R(t)), e;
  }
  k(t) {
    pt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const n of t)
      s === e.length ? e.push(i = new k(this.O(U()), this.O(U()), this, this.options)) : i = e[s], i._$AI(n), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var i;
    for ((i = this._$AP) === null || i === void 0 || i.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const s = t.nextSibling;
      t.remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cm = t, (e = this._$AP) === null || e === void 0 || e.call(this, t));
  }
}
class D {
  constructor(t, e, i, s, n) {
    this.type = 1, this._$AH = u, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = u;
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t, e = this, i, s) {
    const n = this.strings;
    let r = !1;
    if (n === void 0)
      t = x(this, t, e, 0), r = !O(t) || t !== this._$AH && t !== w, r && (this._$AH = t);
    else {
      const c = t;
      let l, a;
      for (t = n[0], l = 0; l < n.length - 1; l++)
        a = x(this, c[i + l], e, l), a === w && (a = this._$AH[l]), r || (r = !O(a) || a !== this._$AH[l]), a === u ? t = u : t !== u && (t += (a ?? "") + n[l + 1]), this._$AH[l] = a;
    }
    r && !s && this.j(t);
  }
  j(t) {
    t === u ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ct extends D {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === u ? void 0 : t;
  }
}
const St = C ? C.emptyScript : "";
class wt extends D {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    t && t !== u ? this.element.setAttribute(this.name, St) : this.element.removeAttribute(this.name);
  }
}
class xt extends D {
  constructor(t, e, i, s, n) {
    super(t, e, i, s, n), this.type = 5;
  }
  _$AI(t, e = this) {
    var i;
    if ((t = (i = x(this, t, e, 0)) !== null && i !== void 0 ? i : u) === w)
      return;
    const s = this._$AH, n = t === u && s !== u || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== u && (s === u || n);
    n && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e, i;
    typeof this._$AH == "function" ? this._$AH.call((i = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && i !== void 0 ? i : this.element, t) : this._$AH.handleEvent(t);
  }
}
class Nt {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    x(this, t);
  }
}
const lt = j.litHtmlPolyfillSupport;
lt == null || lt(R, k), ((V = j.litHtmlVersions) !== null && V !== void 0 ? V : j.litHtmlVersions = []).push("2.5.0");
const Pt = (o, t, e) => {
  var i, s;
  const n = (i = e == null ? void 0 : e.renderBefore) !== null && i !== void 0 ? i : t;
  let r = n._$litPart$;
  if (r === void 0) {
    const c = (s = e == null ? void 0 : e.renderBefore) !== null && s !== void 0 ? s : null;
    n._$litPart$ = r = new k(t.insertBefore(U(), c), c, void 0, e ?? {});
  }
  return r._$AI(o), r;
};
var W, F;
class E extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t, e;
    const i = super.createRenderRoot();
    return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = i.firstChild), i;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Pt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1);
  }
  render() {
    return w;
  }
}
E.finalized = !0, E._$litElement$ = !0, (W = globalThis.litElementHydrateSupport) === null || W === void 0 || W.call(globalThis, { LitElement: E });
const at = globalThis.litElementPolyfillSupport;
at == null || at({ LitElement: E });
((F = globalThis.litElementVersions) !== null && F !== void 0 ? F : globalThis.litElementVersions = []).push("3.2.2");
const $t = (o) => (t) => typeof t == "function" ? ((e, i) => (customElements.define(e, i), i))(o, t) : ((e, i) => {
  const { kind: s, elements: n } = i;
  return { kind: s, elements: n, finisher(r) {
    customElements.define(e, r);
  } };
})(o, t);
const Ut = (o, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) {
  e.createProperty(t.key, o);
} } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() {
  typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this));
}, finisher(e) {
  e.createProperty(t.key, o);
} };
function $(o) {
  return (t, e) => e !== void 0 ? ((i, s, n) => {
    s.constructor.createProperty(n, i);
  })(o, t, e) : Ut(o, t);
}
function I(o) {
  return $({ ...o, state: !0 });
}
var K;
((K = window.HTMLSlotElement) === null || K === void 0 ? void 0 : K.prototype.assignedElements) != null;
var Ot = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, v = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Rt(t, e) : t, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && Ot(t, e, s), s;
};
let p = class extends E {
  constructor() {
    super(...arguments), this.container = 0, this.coco = 0, this.grose = 0, this.value = 0, this.sugar = 0, this.ingredient = "Coco", this.minimise = !1, this._init = !1, this.type = "Coco";
  }
  _ingredientChange(o) {
    const t = o.target, e = this.type;
    this.type = t.value === "Coco" ? "Coco" : "Sugar", this.type !== e && (console.group("_ingredientChange()"), console.log("oldType:", e), console.log("this.type:", this.type), console.groupEnd(), this.requestUpdate(), this.value > 0 && this.dispatchEvent(new Event("change")));
  }
  _containerChange(o) {
    const t = o.target;
    this.container = parseFloat(t.value), this._calculate();
  }
  _groseChange(o) {
    const t = o.target;
    this.grose = parseFloat(t.value), this._calculate();
  }
  _calculate() {
    if (console.group("_calculate()"), console.log("this.grose:", this.grose), console.log("isNaN(this.grose):", isNaN(this.grose)), console.log("this.container:", this.container), console.log("isNaN(this.container):", isNaN(this.container)), isNaN(this.container) !== !0 && isNaN(this.grose) !== !0) {
      this.value = this.grose - this.container;
      const o = this.minimise;
      this.value < 0 && (this.value = 0), this.value > 0 && this.type !== "" ? (this.dispatchEvent(new Event("change")), this.minimise = !0) : this.minimise = !1, this.minimise !== o && this.requestUpdate();
    }
    console.groupEnd();
  }
  _delete(o) {
    console.log("delete-container"), this.dispatchEvent(new Event("deletecontainer"));
  }
  render() {
    return this._init === !1 && (this._init = !0, this.type = this.coco > 0 && this.coco > this.sugar ? "Sugar" : "Coco"), P`
      <div class="ingredient-container">
        <p>
            <strong>${this.type}:</strong> ${this.value}g
        </p>
        <ul class="${this.minimise ? "minimise" : ""}">
            <li>
                <label for="ingredient">Ingredient</label>
                <select id="ingredient" @change=${this._ingredientChange}>
                    <option value="Coco" ?selected=${this.type === "Coco"}>Coco</option>
                    <option value="Sugar" ?selected=${this.type === "Sugar"}>Sugar</option>
                </select>
            </li>
            <li>
                <label for="container">Container weight</label>
                <input id="container" type="number" .value="${this.container}" min="0" step="0.1" @keyup=${this._containerChange} />
            </li>
            <li>
                <label for="grose">Grose weight</label>
                <input id="grose" type="number" value="${this.grose}" min="0" step="0.1" @keyup=${this._groseChange} title="Total weight of container and ingridents" />
            </li>
        </ul>
        <button id="delete" @click=${this._delete}>Delete</button>
      </div>
    `;
  }
};
p.styles = ct`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0rem;
      text-align: center;
      box-sizing: border-box;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    ul.minimise {
        display: none;
    }

    .ingredient-container:hover ul.minimise,
    .ingredient-container:focus-within ul.minimise {
        display: block;
    }
    li {
      display: flex;
      justify-content: space-betweek;
      gap: 0.5rem;
      padding: 0 0 0.5rem;
    }
    label { 
      display: inline-block; 
      text-align: right;
      width: 7.75rem; 
    }
    input, select {
      flex-grow: 1;
    }
  `;
v([
  $({ reflect: !0, type: Number })
], p.prototype, "container", 2);
v([
  $({ reflect: !0, type: Number })
], p.prototype, "coco", 2);
v([
  $({ reflect: !0, type: Number })
], p.prototype, "grose", 2);
v([
  $({ reflect: !0, type: Number })
], p.prototype, "value", 2);
v([
  $({ reflect: !0, type: Number })
], p.prototype, "sugar", 2);
v([
  $({ reflect: !0, type: String })
], p.prototype, "ingredient", 2);
v([
  I()
], p.prototype, "minimise", 2);
v([
  I()
], p.prototype, "_init", 2);
v([
  I()
], p.prototype, "type", 2);
p = v([
  $t("ingredient-container")
], p);
var kt = Object.defineProperty, Tt = Object.getOwnPropertyDescriptor, T = (o, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Tt(t, e) : t, n = o.length - 1, r; n >= 0; n--)
    (r = o[n]) && (s = (i ? r(t, e, s) : r(s)) || s);
  return i && s && kt(t, e, s), s;
};
let y = class extends E {
  constructor() {
    super(...arguments), this.ratio = 0.45, this.coco = 0, this.sugar = 0, this.containers = [], this._id = 0;
  }
  _calcRatio(o) {
    const t = o.target;
    this.ratio = Math.round(
      parseFloat(t.value) / 100 * 1e3
    ) / 1e3;
  }
  _increaseCoco() {
    this.ratio < 1 && (this.ratio += 1e-3);
  }
  _increaseSugar() {
    this.ratio > 0 && (this.ratio -= 1e-3);
  }
  _containerChange(o) {
    const t = o.target, e = {
      id: t.id,
      net: parseFloat(t.value),
      type: t.type
    };
    let i = !1;
    for (let r = 0; r < this.containers.length; r += 1)
      if (this.containers[r].id === e.id) {
        this.containers[r] = e, i = !0;
        break;
      }
    i === !1 && this.containers.push(e);
    let s = 0, n = 0;
    for (let r = 0; r < this.containers.length; r += 1)
      this.containers[r].type === "Coco" ? s += this.containers[r].net : (console.log("container[" + r + "]", this.containers[r]), n += this.containers[r].net);
    this.coco = s, this.sugar = n, this.requestUpdate();
  }
  _deleteContainer(o) {
    const t = o.target;
    console.log("inside _deleteContainer()"), this.containers = this.containers.filter(
      (e) => e.id !== t.id
    ), this.requestUpdate();
  }
  _addContainer(o) {
    this._id += 1, this.containers.push({
      id: "box-" + this._id,
      type: "",
      net: 0
    }), console.log("_addContainer()"), this.requestUpdate();
  }
  _renderRatio() {
    const o = Math.round(this.ratio * 1e4) / 100;
    return P`(Coco) ${o} : ${100 - o} (Sugar)`;
  }
  _requiredCoco() {
    return Math.round(this.sugar / (100 * (1 - this.ratio)) * (100 * this.ratio));
  }
  _requiredSugar() {
    return Math.round(this.coco / (100 * this.ratio) * (100 * (1 - this.ratio)));
  }
  _getRequiredInner(o) {
    let t = "";
    return o > 0 ? t = "Needed" : o < 0 && (t = "Excess", o *= -1), t !== "" ? t + ": " + o.toString() + "g" : "";
  }
  _getRequiredCoco() {
    return this.sugar > 0 ? this._getRequiredInner(this._requiredCoco() - this.coco) : "";
  }
  _getRequiredSugar() {
    return this.coco > 0 ? this._getRequiredInner(this._requiredSugar() - this.sugar) : "";
  }
  render() {
    return P`
      <h1>Drinking chocolate calculator</h1>
      <div class="ratio-wrap">
        <button class="ratio-move ratio-move--coco-up" @click=${this._increaseCoco}>
          <span class="sr-only">Increase coco</span>
        </button>
        <span>
          <label for="ratio" class="ratio-label">Coco to sugar ratio</label>
          <input type="range" id="ratio" 
                 value="${this.ratio * 100}" 
                 name="ratio" 
                 min="20" 
                 max="80" 
                 step="0.1" 
                @input=${this._calcRatio} />
          <span class="ratio-str">${this._renderRatio()}</span>
        </span>
        <button class="ratio-move ratio-move--sugar-up" @click=${this._increaseSugar}>
          <span class="sr-only">Increase sugar</span>
        </button>
      </div>
      ${this.coco > 0 || this.sugar > 0 ? P`
          <table>
            <thead>
              <tr>
                <td>&nbsp;</td>
                <th>Coco</th>
                <th>Sugar</th>
                <td>&nbsp;</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="actual">Actual</td>
                <td class="actual"><span class="sr-only">Actual:</span> ${this.coco}g</td>
                <td class="required"><span class="sr-only">Required:</span> ${this._requiredSugar()}g</td>
                <td class="required">${this._getRequiredSugar()}</td>
              </tr>
              <tr>
                <td class="required">${this._getRequiredCoco()}</td>
                <td class="required"><span class="sr-only">Required:</span> ${this._requiredCoco()}g</td>
                <td class="actual"><span class="sr-only">Actual:</span> ${this.sugar}g</td>
                <td class="actual">Actual</td>
              </tr>
            </tbody>
          </table>` : ""}
      <ul>
        ${this.containers.map((o) => P`
        <li>
          <ingredient-container id="${o.id}" container="66" @keyup=${this._containerChange} @deletecontainer=${this._deleteContainer} .coco="${this.coco}" .sugar="${this.sugar}"></ingredient-container>
        </li>
        `)}
      </ul>
      <button id="add-container" @click=${this._addContainer}>Add container</button>
    `;
  }
};
y.styles = ct`
    :host {
      margin: 1rem auto;
      padding:
    }
    h1 {
      font-size: 1.5rem;
    }
    ul {
      list-style-type: none;
      margin: 2rem 0;
      padding: 0;
    }
    table {
      border-collapse: collapse;
      margin: 2rem auto 0;
    }
    td, th {
      border-left: 0.05rem solid #fff;
      border-top: 0.05rem solid #fff;
      padding: 0.5rem 1rem;
    }
    th {
      border-top: none;
    }
    thead th:first-child {
      border-left: none;
    }
    thead td {
      border: none;
    }
    tbody td:first-child {
      border-left: none;
    }
    tbody td {
      text-align: right;
    }
    tbody td:nth-of-type(4) {
      text-align: left;
    }
    button {
      background-color: #1a1a1a;
      border: 1px solid transparent;
      border-radius: 0.25rem;
      cursor: pointer;
      font-family: inherit;
      font-size: 1em;
      font-weight: 500;
      padding: 0.6em 1.2em;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
    .ratio-wrap {
      align-items: stretch;
      column-gap: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      text-align: center;
    }
    .ratio-wrap span {
      flex-grow: 1;
    }
    .ratio-move {
      background-color: transparent;
      flex-grow: 2;
      max-width: 3.5rem;
      position: relative;
    }
    .ratio-move::before {
      text-shadow: 0 0 0.5rem rgba(200, 255, 255, 0.7);
      content: '→';
      font-size: 2rem;
      font-weight: bold;
      left: 50%;
      position: absolute;
      top: 50%;
    }
    .ratio-move--coco-up::before {
      transform: translate(-50%, -50%) rotate(270deg);
    }
    .ratio-move--sugar-up::before {
      transform: translate(-50%, -50%) rotate(90deg);
    }
    .ratio-str, .ratio-label {
      display: block;
    }
    .actual {
      color: #0f0
    }
    .required {
      color: #ff8f00;
    }
    .sr-only {
      border: 0;
      clip: rect(0, 0, 0, 0);
      clip-path: inset(100%);
      height: 1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    #add-container {
      display: block;
      /* border: none; */
      border-radius: 0.25rem;
      box-shadow: 0 0 0.5rem -0.1rem #fff;
      width: 100%;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;
T([
  $({ reflect: !0, type: Number })
], y.prototype, "ratio", 2);
T([
  $({ reflect: !0, type: Number })
], y.prototype, "coco", 2);
T([
  $({ reflect: !0, type: Number })
], y.prototype, "sugar", 2);
T([
  I()
], y.prototype, "containers", 2);
y = T([
  $t("drinking-chocolate")
], y);
export {
  y as DrinkingChocolate
};
