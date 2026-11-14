/**
* @license
* Copyright 2019 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t$2 = globalThis, e$1 = t$2.ShadowRoot && (t$2.ShadyCSS === void 0 || t$2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s$2 = Symbol(), o$4 = /* @__PURE__ */ new WeakMap(), n$2 = class {
	constructor(b, F, W) {
		if (this._$cssResult$ = !0, W !== s$2) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
		this.cssText = b, this.t = F;
	}
	get styleSheet() {
		let b = this.o, U = this.t;
		if (e$1 && b === void 0) {
			let F = U !== void 0 && U.length === 1;
			F && (b = o$4.get(U)), b === void 0 && ((this.o = b = new CSSStyleSheet()).replaceSync(this.cssText), F && o$4.set(U, b));
		}
		return b;
	}
	toString() {
		return this.cssText;
	}
}, r$3 = (b) => new n$2(typeof b == "string" ? b : b + "", void 0, s$2), i$1 = (b, ...F) => new n$2(b.length === 1 ? b[0] : F.reduce(((F, U, W) => F + ((b) => {
	if (!0 === b._$cssResult$) return b.cssText;
	if (typeof b == "number") return b;
	throw Error("Value passed to 'css' function must be a 'css' function result: " + b + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
})(U) + b[W + 1]), b[0]), b, s$2), S$1 = (U, W) => {
	if (e$1) U.adoptedStyleSheets = W.map(((b) => b instanceof CSSStyleSheet ? b : b.styleSheet));
	else for (let F of W) {
		let W = document.createElement("style"), G = t$2.litNonce;
		G !== void 0 && W.setAttribute("nonce", G), W.textContent = F.cssText, U.appendChild(W);
	}
}, c$1 = e$1 ? (b) => b : (b) => b instanceof CSSStyleSheet ? ((b) => {
	let F = "";
	for (let U of b.cssRules) F += U.cssText;
	return r$3(F);
})(b) : b, { is: i$3, defineProperty: e$2, getOwnPropertyDescriptor: h$1, getOwnPropertyNames: r$4, getOwnPropertySymbols: o$3, getPrototypeOf: n$3 } = Object, a$1 = globalThis, c$2 = a$1.trustedTypes, l$1 = c$2 ? c$2.emptyScript : "", p$1 = a$1.reactiveElementPolyfillSupport, d$1 = (b, F) => b, u = {
	toAttribute(b, F) {
		switch (F) {
			case Boolean:
				b = b ? l$1 : null;
				break;
			case Object:
			case Array: b = b == null ? b : JSON.stringify(b);
		}
		return b;
	},
	fromAttribute(b, F) {
		let U = b;
		switch (F) {
			case Boolean:
				U = b !== null;
				break;
			case Number:
				U = b === null ? null : Number(b);
				break;
			case Object:
			case Array: try {
				U = JSON.parse(b);
			} catch {
				U = null;
			}
		}
		return U;
	}
}, f = (b, F) => !i$3(b, F), b$1 = {
	attribute: !0,
	type: String,
	converter: u,
	reflect: !1,
	useDefault: !1,
	hasChanged: f
};
Symbol.metadata ??= Symbol("metadata"), a$1.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
var y = class extends HTMLElement {
	static addInitializer(b) {
		this._$Ei(), (this.l ??= []).push(b);
	}
	static get observedAttributes() {
		return this.finalize(), this._$Eh && [...this._$Eh.keys()];
	}
	static createProperty(b, F = b$1) {
		if (F.state && (F.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(b) && ((F = Object.create(F)).wrapped = !0), this.elementProperties.set(b, F), !F.noAccessor) {
			let U = Symbol(), W = this.getPropertyDescriptor(b, U, F);
			W !== void 0 && e$2(this.prototype, b, W);
		}
	}
	static getPropertyDescriptor(b, F, U) {
		let { get: W, set: G } = h$1(this.prototype, b) ?? {
			get() {
				return this[F];
			},
			set(b) {
				this[F] = b;
			}
		};
		return {
			get: W,
			set(F) {
				let K = W?.call(this);
				G?.call(this, F), this.requestUpdate(b, K, U);
			},
			configurable: !0,
			enumerable: !0
		};
	}
	static getPropertyOptions(b) {
		return this.elementProperties.get(b) ?? b$1;
	}
	static _$Ei() {
		if (this.hasOwnProperty(d$1("elementProperties"))) return;
		let b = n$3(this);
		b.finalize(), b.l !== void 0 && (this.l = [...b.l]), this.elementProperties = new Map(b.elementProperties);
	}
	static finalize() {
		if (this.hasOwnProperty(d$1("finalized"))) return;
		if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(d$1("properties"))) {
			let b = this.properties, F = [...r$4(b), ...o$3(b)];
			for (let U of F) this.createProperty(U, b[U]);
		}
		let b = this[Symbol.metadata];
		if (b !== null) {
			let F = litPropertyMetadata.get(b);
			if (F !== void 0) for (let [b, U] of F) this.elementProperties.set(b, U);
		}
		this._$Eh = /* @__PURE__ */ new Map();
		for (let [b, F] of this.elementProperties) {
			let U = this._$Eu(b, F);
			U !== void 0 && this._$Eh.set(U, b);
		}
		this.elementStyles = this.finalizeStyles(this.styles);
	}
	static finalizeStyles(b) {
		let F = [];
		if (Array.isArray(b)) {
			let U = new Set(b.flat(Infinity).reverse());
			for (let b of U) F.unshift(c$1(b));
		} else b !== void 0 && F.push(c$1(b));
		return F;
	}
	static _$Eu(b, F) {
		let U = F.attribute;
		return !1 === U ? void 0 : typeof U == "string" ? U : typeof b == "string" ? b.toLowerCase() : void 0;
	}
	constructor() {
		super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
	}
	_$Ev() {
		this._$ES = new Promise(((b) => this.enableUpdating = b)), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach(((b) => b(this)));
	}
	addController(b) {
		(this._$EO ??= /* @__PURE__ */ new Set()).add(b), this.renderRoot !== void 0 && this.isConnected && b.hostConnected?.();
	}
	removeController(b) {
		this._$EO?.delete(b);
	}
	_$E_() {
		let b = /* @__PURE__ */ new Map(), F = this.constructor.elementProperties;
		for (let U of F.keys()) this.hasOwnProperty(U) && (b.set(U, this[U]), delete this[U]);
		b.size > 0 && (this._$Ep = b);
	}
	createRenderRoot() {
		let b = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
		return S$1(b, this.constructor.elementStyles), b;
	}
	connectedCallback() {
		this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach(((b) => b.hostConnected?.()));
	}
	enableUpdating(b) {}
	disconnectedCallback() {
		this._$EO?.forEach(((b) => b.hostDisconnected?.()));
	}
	attributeChangedCallback(b, F, U) {
		this._$AK(b, U);
	}
	_$ET(b, F) {
		let U = this.constructor.elementProperties.get(b), W = this.constructor._$Eu(b, U);
		if (W !== void 0 && !0 === U.reflect) {
			let G = (U.converter?.toAttribute === void 0 ? u : U.converter).toAttribute(F, U.type);
			this._$Em = b, G == null ? this.removeAttribute(W) : this.setAttribute(W, G), this._$Em = null;
		}
	}
	_$AK(b, F) {
		let U = this.constructor, W = U._$Eh.get(b);
		if (W !== void 0 && this._$Em !== W) {
			let b = U.getPropertyOptions(W), G = typeof b.converter == "function" ? { fromAttribute: b.converter } : b.converter?.fromAttribute === void 0 ? u : b.converter;
			this._$Em = W;
			let K = G.fromAttribute(F, b.type);
			this[W] = K ?? this._$Ej?.get(W) ?? K, this._$Em = null;
		}
	}
	requestUpdate(b, F, U) {
		if (b !== void 0) {
			let W = this.constructor, G = this[b];
			if (U ??= W.getPropertyOptions(b), !((U.hasChanged ?? f)(G, F) || U.useDefault && U.reflect && G === this._$Ej?.get(b) && !this.hasAttribute(W._$Eu(b, U)))) return;
			this.C(b, F, U);
		}
		!1 === this.isUpdatePending && (this._$ES = this._$EP());
	}
	C(b, F, { useDefault: U, reflect: W, wrapped: G }, K) {
		U && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(b) && (this._$Ej.set(b, K ?? F ?? this[b]), !0 !== G || K !== void 0) || (this._$AL.has(b) || (this.hasUpdated || U || (F = void 0), this._$AL.set(b, F)), !0 === W && this._$Em !== b && (this._$Eq ??= /* @__PURE__ */ new Set()).add(b));
	}
	async _$EP() {
		this.isUpdatePending = !0;
		try {
			await this._$ES;
		} catch (b) {
			Promise.reject(b);
		}
		let b = this.scheduleUpdate();
		return b != null && await b, !this.isUpdatePending;
	}
	scheduleUpdate() {
		return this.performUpdate();
	}
	performUpdate() {
		if (!this.isUpdatePending) return;
		if (!this.hasUpdated) {
			if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
				for (let [b, F] of this._$Ep) this[b] = F;
				this._$Ep = void 0;
			}
			let b = this.constructor.elementProperties;
			if (b.size > 0) for (let [F, U] of b) {
				let { wrapped: b } = U, W = this[F];
				!0 !== b || this._$AL.has(F) || W === void 0 || this.C(F, void 0, U, W);
			}
		}
		let b = !1, F = this._$AL;
		try {
			b = this.shouldUpdate(F), b ? (this.willUpdate(F), this._$EO?.forEach(((b) => b.hostUpdate?.())), this.update(F)) : this._$EM();
		} catch (F) {
			throw b = !1, this._$EM(), F;
		}
		b && this._$AE(F);
	}
	willUpdate(b) {}
	_$AE(b) {
		this._$EO?.forEach(((b) => b.hostUpdated?.())), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(b)), this.updated(b);
	}
	_$EM() {
		this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
	}
	get updateComplete() {
		return this.getUpdateComplete();
	}
	getUpdateComplete() {
		return this._$ES;
	}
	shouldUpdate(b) {
		return !0;
	}
	update(b) {
		this._$Eq &&= this._$Eq.forEach(((b) => this._$ET(b, this[b]))), this._$EM();
	}
	updated(b) {}
	firstUpdated(b) {}
};
y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d$1("elementProperties")] = /* @__PURE__ */ new Map(), y[d$1("finalized")] = /* @__PURE__ */ new Map(), p$1?.({ ReactiveElement: y }), (a$1.reactiveElementVersions ??= []).push("2.1.1");
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t$1 = globalThis, i$2 = t$1.trustedTypes, s$1 = i$2 ? i$2.createPolicy("lit-html", { createHTML: (b) => b }) : void 0, e = "$lit$", h = `lit$${Math.random().toFixed(9).slice(2)}$`, o$2 = "?" + h, n$1 = `<${o$2}>`, r$2 = document, l = () => r$2.createComment(""), c = (b) => b === null || typeof b != "object" && typeof b != "function", a = Array.isArray, u$1 = (b) => a(b) || typeof b?.[Symbol.iterator] == "function", d = "[ 	\n\f\r]", f$1 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, v = /-->/g, _ = />/g, m = RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), p = /'/g, g = /"/g, $ = /^(?:script|style|textarea|title)$/i, x = ((b) => (F, ...U) => ({
	_$litType$: b,
	strings: F,
	values: U
}))(1), T = Symbol.for("lit-noChange"), E = Symbol.for("lit-nothing"), A = /* @__PURE__ */ new WeakMap(), C = r$2.createTreeWalker(r$2, 129);
function P(b, F) {
	if (!a(b) || !b.hasOwnProperty("raw")) throw Error("invalid template strings array");
	return s$1 === void 0 ? F : s$1.createHTML(F);
}
var V = (b, F) => {
	let U = b.length - 1, W = [], G, K = F === 2 ? "<svg>" : F === 3 ? "<math>" : "", q = f$1;
	for (let F = 0; F < U; F++) {
		let U = b[F], J, Y, X = -1, Z = 0;
		for (; Z < U.length && (q.lastIndex = Z, Y = q.exec(U), Y !== null);) Z = q.lastIndex, q === f$1 ? Y[1] === "!--" ? q = v : Y[1] === void 0 ? Y[2] === void 0 ? Y[3] !== void 0 && (q = m) : ($.test(Y[2]) && (G = RegExp("</" + Y[2], "g")), q = m) : q = _ : q === m ? Y[0] === ">" ? (q = G ?? f$1, X = -1) : Y[1] === void 0 ? X = -2 : (X = q.lastIndex - Y[2].length, J = Y[1], q = Y[3] === void 0 ? m : Y[3] === "\"" ? g : p) : q === g || q === p ? q = m : q === v || q === _ ? q = f$1 : (q = m, G = void 0);
		let Q = q === m && b[F + 1].startsWith("/>") ? " " : "";
		K += q === f$1 ? U + n$1 : X >= 0 ? (W.push(J), U.slice(0, X) + e + U.slice(X) + h + Q) : U + h + (X === -2 ? F : Q);
	}
	return [P(b, K + (b[U] || "<?>") + (F === 2 ? "</svg>" : F === 3 ? "</math>" : "")), W];
}, N = class b {
	constructor({ strings: F, _$litType$: U }, W) {
		let G;
		this.parts = [];
		let K = 0, q = 0, J = F.length - 1, Y = this.parts, [X, Z] = V(F, U);
		if (this.el = b.createElement(X, W), C.currentNode = this.el.content, U === 2 || U === 3) {
			let b = this.el.content.firstChild;
			b.replaceWith(...b.childNodes);
		}
		for (; (G = C.nextNode()) !== null && Y.length < J;) {
			if (G.nodeType === 1) {
				if (G.hasAttributes()) for (let b of G.getAttributeNames()) if (b.endsWith(e)) {
					let F = Z[q++], U = G.getAttribute(b).split(h), W = /([.?@])?(.*)/.exec(F);
					Y.push({
						type: 1,
						index: K,
						name: W[2],
						strings: U,
						ctor: W[1] === "." ? H : W[1] === "?" ? I : W[1] === "@" ? L : k
					}), G.removeAttribute(b);
				} else b.startsWith(h) && (Y.push({
					type: 6,
					index: K
				}), G.removeAttribute(b));
				if ($.test(G.tagName)) {
					let b = G.textContent.split(h), F = b.length - 1;
					if (F > 0) {
						G.textContent = i$2 ? i$2.emptyScript : "";
						for (let U = 0; U < F; U++) G.append(b[U], l()), C.nextNode(), Y.push({
							type: 2,
							index: ++K
						});
						G.append(b[F], l());
					}
				}
			} else if (G.nodeType === 8) if (G.data === o$2) Y.push({
				type: 2,
				index: K
			});
			else {
				let b = -1;
				for (; (b = G.data.indexOf(h, b + 1)) !== -1;) Y.push({
					type: 7,
					index: K
				}), b += h.length - 1;
			}
			K++;
		}
	}
	static createElement(b, F) {
		let U = r$2.createElement("template");
		return U.innerHTML = b, U;
	}
};
function S(b, F, U = b, W) {
	if (F === T) return F;
	let G = W === void 0 ? U._$Cl : U._$Co?.[W], K = c(F) ? void 0 : F._$litDirective$;
	return G?.constructor !== K && (G?._$AO?.(!1), K === void 0 ? G = void 0 : (G = new K(b), G._$AT(b, U, W)), W === void 0 ? U._$Cl = G : (U._$Co ??= [])[W] = G), G !== void 0 && (F = S(b, G._$AS(b, F.values), G, W)), F;
}
var M = class {
	constructor(b, F) {
		this._$AV = [], this._$AN = void 0, this._$AD = b, this._$AM = F;
	}
	get parentNode() {
		return this._$AM.parentNode;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	u(b) {
		let { el: { content: F }, parts: U } = this._$AD, W = (b?.creationScope ?? r$2).importNode(F, !0);
		C.currentNode = W;
		let G = C.nextNode(), K = 0, q = 0, J = U[0];
		for (; J !== void 0;) {
			if (K === J.index) {
				let F;
				J.type === 2 ? F = new R(G, G.nextSibling, this, b) : J.type === 1 ? F = new J.ctor(G, J.name, J.strings, this, b) : J.type === 6 && (F = new z(G, this, b)), this._$AV.push(F), J = U[++q];
			}
			K !== J?.index && (G = C.nextNode(), K++);
		}
		return C.currentNode = r$2, W;
	}
	p(b) {
		let F = 0;
		for (let U of this._$AV) U !== void 0 && (U.strings === void 0 ? U._$AI(b[F]) : (U._$AI(b, U, F), F += U.strings.length - 2)), F++;
	}
}, R = class b {
	get _$AU() {
		return this._$AM?._$AU ?? this._$Cv;
	}
	constructor(b, F, U, W) {
		this.type = 2, this._$AH = E, this._$AN = void 0, this._$AA = b, this._$AB = F, this._$AM = U, this.options = W, this._$Cv = W?.isConnected ?? !0;
	}
	get parentNode() {
		let b = this._$AA.parentNode, F = this._$AM;
		return F !== void 0 && b?.nodeType === 11 && (b = F.parentNode), b;
	}
	get startNode() {
		return this._$AA;
	}
	get endNode() {
		return this._$AB;
	}
	_$AI(b, F = this) {
		b = S(this, b, F), c(b) ? b === E || b == null || b === "" ? (this._$AH !== E && this._$AR(), this._$AH = E) : b !== this._$AH && b !== T && this._(b) : b._$litType$ === void 0 ? b.nodeType === void 0 ? u$1(b) ? this.k(b) : this._(b) : this.T(b) : this.$(b);
	}
	O(b) {
		return this._$AA.parentNode.insertBefore(b, this._$AB);
	}
	T(b) {
		this._$AH !== b && (this._$AR(), this._$AH = this.O(b));
	}
	_(b) {
		this._$AH !== E && c(this._$AH) ? this._$AA.nextSibling.data = b : this.T(r$2.createTextNode(b)), this._$AH = b;
	}
	$(b) {
		let { values: F, _$litType$: U } = b, W = typeof U == "number" ? this._$AC(b) : (U.el === void 0 && (U.el = N.createElement(P(U.h, U.h[0]), this.options)), U);
		if (this._$AH?._$AD === W) this._$AH.p(F);
		else {
			let b = new M(W, this), U = b.u(this.options);
			b.p(F), this.T(U), this._$AH = b;
		}
	}
	_$AC(b) {
		let F = A.get(b.strings);
		return F === void 0 && A.set(b.strings, F = new N(b)), F;
	}
	k(F) {
		a(this._$AH) || (this._$AH = [], this._$AR());
		let U = this._$AH, W, G = 0;
		for (let K of F) G === U.length ? U.push(W = new b(this.O(l()), this.O(l()), this, this.options)) : W = U[G], W._$AI(K), G++;
		G < U.length && (this._$AR(W && W._$AB.nextSibling, G), U.length = G);
	}
	_$AR(b = this._$AA.nextSibling, F) {
		for (this._$AP?.(!1, !0, F); b !== this._$AB;) {
			let F = b.nextSibling;
			b.remove(), b = F;
		}
	}
	setConnected(b) {
		this._$AM === void 0 && (this._$Cv = b, this._$AP?.(b));
	}
}, k = class {
	get tagName() {
		return this.element.tagName;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	constructor(b, F, U, W, G) {
		this.type = 1, this._$AH = E, this._$AN = void 0, this.element = b, this.name = F, this._$AM = W, this.options = G, U.length > 2 || U[0] !== "" || U[1] !== "" ? (this._$AH = Array(U.length - 1).fill(/* @__PURE__ */ new String()), this.strings = U) : this._$AH = E;
	}
	_$AI(b, F = this, U, W) {
		let G = this.strings, K = !1;
		if (G === void 0) b = S(this, b, F, 0), K = !c(b) || b !== this._$AH && b !== T, K && (this._$AH = b);
		else {
			let W = b, q, J;
			for (b = G[0], q = 0; q < G.length - 1; q++) J = S(this, W[U + q], F, q), J === T && (J = this._$AH[q]), K ||= !c(J) || J !== this._$AH[q], J === E ? b = E : b !== E && (b += (J ?? "") + G[q + 1]), this._$AH[q] = J;
		}
		K && !W && this.j(b);
	}
	j(b) {
		b === E ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, b ?? "");
	}
}, H = class extends k {
	constructor() {
		super(...arguments), this.type = 3;
	}
	j(b) {
		this.element[this.name] = b === E ? void 0 : b;
	}
}, I = class extends k {
	constructor() {
		super(...arguments), this.type = 4;
	}
	j(b) {
		this.element.toggleAttribute(this.name, !!b && b !== E);
	}
}, L = class extends k {
	constructor(b, F, U, W, G) {
		super(b, F, U, W, G), this.type = 5;
	}
	_$AI(b, F = this) {
		if ((b = S(this, b, F, 0) ?? E) === T) return;
		let U = this._$AH, W = b === E && U !== E || b.capture !== U.capture || b.once !== U.once || b.passive !== U.passive, G = b !== E && (U === E || W);
		W && this.element.removeEventListener(this.name, this, U), G && this.element.addEventListener(this.name, this, b), this._$AH = b;
	}
	handleEvent(b) {
		typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, b) : this._$AH.handleEvent(b);
	}
}, z = class {
	constructor(b, F, U) {
		this.element = b, this.type = 6, this._$AN = void 0, this._$AM = F, this.options = U;
	}
	get _$AU() {
		return this._$AM._$AU;
	}
	_$AI(b) {
		S(this, b);
	}
}, j = t$1.litHtmlPolyfillSupport;
j?.(N, R), (t$1.litHtmlVersions ??= []).push("3.3.1");
var B = (b, F, U) => {
	let W = U?.renderBefore ?? F, G = W._$litPart$;
	if (G === void 0) {
		let b = U?.renderBefore ?? null;
		W._$litPart$ = G = new R(F.insertBefore(l(), b), b, void 0, U ?? {});
	}
	return G._$AI(b), G;
}, s = globalThis, i = class extends y {
	constructor() {
		super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
	}
	createRenderRoot() {
		let b = super.createRenderRoot();
		return this.renderOptions.renderBefore ??= b.firstChild, b;
	}
	update(b) {
		let F = this.render();
		this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(b), this._$Do = B(F, this.renderRoot, this.renderOptions);
	}
	connectedCallback() {
		super.connectedCallback(), this._$Do?.setConnected(!0);
	}
	disconnectedCallback() {
		super.disconnectedCallback(), this._$Do?.setConnected(!1);
	}
	render() {
		return T;
	}
};
i._$litElement$ = !0, i.finalized = !0, s.litElementHydrateSupport?.({ LitElement: i });
var o$1 = s.litElementPolyfillSupport;
o$1?.({ LitElement: i }), (s.litElementVersions ??= []).push("4.2.1");
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
var t = (b) => (F, U) => {
	U === void 0 ? customElements.define(b, F) : U.addInitializer((() => {
		customElements.define(b, F);
	}));
}, o = {
	attribute: !0,
	type: String,
	converter: u,
	reflect: !1,
	hasChanged: f
}, r$1 = (b = o, F, U) => {
	let { kind: W, metadata: G } = U, K = globalThis.litPropertyMetadata.get(G);
	if (K === void 0 && globalThis.litPropertyMetadata.set(G, K = /* @__PURE__ */ new Map()), W === "setter" && ((b = Object.create(b)).wrapped = !0), K.set(U.name, b), W === "accessor") {
		let { name: W } = U;
		return {
			set(U) {
				let G = F.get.call(this);
				F.set.call(this, U), this.requestUpdate(W, G, b);
			},
			init(F) {
				return F !== void 0 && this.C(W, void 0, b, F), F;
			}
		};
	}
	if (W === "setter") {
		let { name: W } = U;
		return function(U) {
			let G = this[W];
			F.call(this, U), this.requestUpdate(W, G, b);
		};
	}
	throw Error("Unsupported decorator location: " + W);
};
function n(b) {
	return (F, U) => typeof U == "object" ? r$1(b, F, U) : ((b, F, U) => {
		let W = F.hasOwnProperty(U);
		return F.constructor.createProperty(U, b), W ? Object.getOwnPropertyDescriptor(F, U) : void 0;
	})(b, F, U);
}
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/ function r(b) {
	return n({
		...b,
		state: !0,
		attribute: !1
	});
}
var _formatNum = (b) => Math.abs(Number.parseInt(b, 10)).toLocaleString();
const formatFloat = (b) => {
	let F = b.toFixed(2);
	if (F.endsWith(".00")) return _formatNum(F.replace(".00", ""));
	let U = F.toString().split(".");
	return U[0] = _formatNum(U[0]), U.join(".");
}, getDoW = (b) => [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
][b] || "", getTimeZoneOffset = () => {
	let b = (/* @__PURE__ */ new Date()).getTimezoneOffset();
	return `${b > 0 ? "-" : "+"}${Math.floor(Math.abs(b) / 60).toString().padStart(2, "0")}:${(Math.abs(b) % 60).toString().padStart(2, "0")}`;
};
function __decorate(b, F, U, W) {
	var G = arguments.length, K = G < 3 ? F : W === null ? W = Object.getOwnPropertyDescriptor(F, U) : W, q;
	if (typeof Reflect == "object" && typeof Reflect.decorate == "function") K = Reflect.decorate(b, F, U, W);
	else for (var J = b.length - 1; J >= 0; J--) (q = b[J]) && (K = (G < 3 ? q(K) : G > 3 ? q(F, U, K) : q(F, U)) || K);
	return G > 3 && K && Object.defineProperty(F, U, K), K;
}
var HowLongItem = class extends i {
	constructor(...b) {
		super(...b), this.value = 0, this.label = "";
	}
	render() {
		if (this.value <= 0) return "";
		let b = typeof this.value == "string" ? this.value : formatFloat(this.value);
		return x`<li>
      <span>${this.label}</span>
      <span>${b}</span>
    </li>`;
	}
	static #e = this.styles = i$1`
  li {
    display: grid;
    grid-template-columns: 6.5rem auto;
    grid-gap: 1em 1.25em;
    justify-content: start;
    text-align: left;
  }
  li span:first-child {
    font-weight: 600;
    text-align: right;
  }
  `;
};
__decorate([n({ type: Number })], HowLongItem.prototype, "value", void 0), __decorate([n({ type: String })], HowLongItem.prototype, "label", void 0), HowLongItem = __decorate([t("how-long-item")], HowLongItem);
var HowLong = class extends i {
	constructor(...b) {
		super(...b), this.when = "", this.userRefresh = !1, this.refreshInterval = 0, this.ms = 0, this.s = 0, this.min = 0, this.h = 0, this.d = 0, this.w = 0, this.mon = 0, this.y = 0, this.epoc = 0, this.wd = "", this._whenISO = "", this._currentISO = "", this._lastChange = 0, this._timeoutID = null, this._timeoutMS = 0, this._tzOffset = "";
	}
	_setMS(b) {
		let F = new Date(b);
		if (F.toString() === "Invalid Date") return this.ms = 0, this.s = 0, this.min = 0, this.h = 0, this.d = 0, this.w = 0, this.mon = 0, this.y = 0, null;
		let U = /* @__PURE__ */ new Date();
		this.epoc = F.getTime();
		let W = F.getTime() - U.getTime();
		return this.ms = W >= 0 ? W : -W, this.s = this.ms / 1e3, this.min = this.ms / (1e3 * 60), this.h = this.ms / (1e3 * 60 * 60), this.d = this.ms / (1e3 * 60 * 60 * 24), this.w = this.ms / (1e3 * 60 * 60 * 24 * 7), this.mon = this.ms / (1e3 * 60 * 60 * 24 * 30.44), this.y = this.ms / (1e3 * 60 * 60 * 24 * 365.25), this.wd = getDoW(F.getDay()), F;
	}
	_dateToISO(b) {
		return b.toISOString().slice(0, 16) + this._tzOffset;
	}
	_refresh() {
		this._setMS(this._currentISO), this._timeoutID !== null && clearTimeout(this._timeoutID), this._timeoutID = window.setTimeout(this._refresh.bind(this), this._timeoutMS);
	}
	onChange(b) {
		let F = b.target, U = this._setMS(`${F.value}Z`);
		U !== null && (this._currentISO = this._dateToISO(U), this._timeoutID !== null && clearTimeout(this._timeoutID), this._timeoutMS > 0 && this._refresh(), Date.now() - this._lastChange > 6e4 && this.dispatchEvent(new CustomEvent("change", { detail: U })), this._lastChange = Date.now()), this._refresh();
	}
	connectedCallback() {
		super.connectedCallback(), this._timeoutMS = this.refreshInterval > 0 ? this.refreshInterval * 1e3 : 0, this._tzOffset = getTimeZoneOffset(), console.log("_tzOffset:", this._tzOffset), this.when.trim() !== "" && this._setMS(this.when) !== null && (this._whenISO = this.when.slice(0, 16), this._currentISO = `${this._whenISO}${this._tzOffset}`, this._timeoutMS > 0 && this._refresh());
	}
	render() {
		let b = this.epoc < 0 ? "-" : "+";
		return x`
      <div class="card">
        <p class="input">
          <label for="when">When:</label>
          <input
            id="when"
            type="datetime-local"
            .value=${this._whenISO}
            @change=${this.onChange} />
          <span>Enter the date you want to see how long ago (or how far in the future) it is from now.</span>
        </p>
        ${this.ms === 0 ? x`<p>Please enter a date and time in the field above.</p>` : x`
          <ul>
            <li class="weekday">${this.wd}</li>
            <li class="epoc">(Unix epoc ${b} ${formatFloat(this.epoc / 1e3)})</li>
            <how-long-item label="Milliseconds:" .value=${this.ms}></how-long-item>
            <how-long-item label="Seconds:" .value=${this.s}></how-long-item>
            <how-long-item label="Minutes:" .value=${this.min}></how-long-item>
            <how-long-item label="Hours:" .value=${this.h}></how-long-item>
            <how-long-item label="Days:" .value=${this.d}></how-long-item>
            <how-long-item label="Weeks:" .value=${this.w}></how-long-item>
            <how-long-item label="Months:" .value=${this.mon}></how-long-item>
            <how-long-item label="Years:" .value=${this.y}></how-long-item>
          </ul>
        `}
      </div>
    `;
	}
	static #e = this.styles = i$1`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .input {
      margin-bottom: 2em;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-template-rows: auto auto;
      grid-gap: 0.5em;
      align-items: start;
    }

    .input span {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
      font-size: 0.9em;
      color: #666;
    }

    .card {
      padding: 2em;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 0.35rem;
      list-style: none;
      margin: 0 auto;
      max-width: 16rem;
      padding: 0;
    }
    li.weekday:first-child {
      margin-bottom: 1rem;
    }
    li.weekday:first-child:has(+ li.epoc) {
      margin-bottom: 0;
    }
    li.weekday:first-child + li.epoc {
      margin-bottom: 1rem;
    }
    li.weekday:last-child {
      margin-top: 1rem;
    }
    li.epoc:has(+ li.weekday:last-child) {
      margin-top: 1rem;
    }
    li.epoc + li.weekday:last-child {
      margin-top: 0;
    }
  `;
};
__decorate([n({ type: String })], HowLong.prototype, "when", void 0), __decorate([n({ type: Boolean })], HowLong.prototype, "userRefresh", void 0), __decorate([n({ type: Number })], HowLong.prototype, "refreshInterval", void 0), __decorate([r()], HowLong.prototype, "ms", void 0), __decorate([r()], HowLong.prototype, "s", void 0), __decorate([r()], HowLong.prototype, "min", void 0), __decorate([r()], HowLong.prototype, "h", void 0), __decorate([r()], HowLong.prototype, "d", void 0), __decorate([r()], HowLong.prototype, "w", void 0), __decorate([r()], HowLong.prototype, "mon", void 0), __decorate([r()], HowLong.prototype, "y", void 0), __decorate([r()], HowLong.prototype, "epoc", void 0), __decorate([r()], HowLong.prototype, "wd", void 0), __decorate([r()], HowLong.prototype, "_whenISO", void 0), __decorate([r()], HowLong.prototype, "_currentISO", void 0), __decorate([r()], HowLong.prototype, "_lastChange", void 0), __decorate([r()], HowLong.prototype, "_timeoutID", void 0), HowLong = __decorate([t("how-long")], HowLong);
var HowLongApp = class extends i {
	constructor(...b) {
		super(...b), this.useGet = !1, this.noLocal = !1, this.notIdb = !1, this._when = "";
	}
	_handleChange(b) {
		console.group("<how-long-app>._handleChange()"), console.log("Event:", b), console.log("Event Detail:", b.detail), console.groupEnd();
	}
	connectedCallback() {
		if (console.group("<how-long-app> connectedCallback"), console.log("when (before):", this._when), super.connectedCallback(), this.useGet === !0) {
			let b = new URLSearchParams(window.location.search);
			console.log("URLSearchParams:", b);
			let F = b.get("when");
			typeof F == "string" && F.trim() !== "" && (this._when = F);
		}
		console.log("when (after):", this._when), console.groupEnd();
	}
	render() {
		return x`<how-long .when=${this._when} refreshInterval="1" @change=${this._handleChange}></how-long>`;
	}
	static #e = this.styles = i$1`
  :host {
    align-items: center;
    display: grid;
    justify-items: center;
    margin: 0 auto;
    max-width: 600px;
    padding: 2em;
  }
  `;
};
__decorate([n({ type: Boolean })], HowLongApp.prototype, "useGet", void 0), __decorate([n({ type: Boolean })], HowLongApp.prototype, "noLocal", void 0), __decorate([n({ type: Boolean })], HowLongApp.prototype, "notIdb", void 0), __decorate([r()], HowLongApp.prototype, "_when", void 0), HowLongApp = __decorate([t("how-long-app")], HowLongApp);
export { HowLongApp };
