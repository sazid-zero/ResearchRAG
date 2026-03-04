module.exports = [
"[project]/node_modules/.pnpm/pdf-parse@2.4.5/node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var t1, e, i, s, n, r, a, o, l, h, c, d, u, p, g = (t1)=>{
    throw TypeError(t1);
}, m = (t1, e, i)=>e.has(t1) || g("Cannot " + i), f = (t1, e, i)=>(m(t1, e, "read from private field"), i ? i.call(t1) : e.get(t1)), b = (t1, e, i)=>e.has(t1) ? g("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t1) : e.set(t1, i), v = (t1, e, i, s)=>(m(t1, e, "write to private field"), s ? s.call(t1, i) : e.set(t1, i), i), y = (t1, e, i)=>(m(t1, e, "access private method"), i);
Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
});
var w = "undefined" != typeof document ? document.currentScript : null, x = {
    34: (t1, e, i)=>{
        var s = i(4901);
        t1.exports = function(t1) {
            return "object" == typeof t1 ? null !== t1 : s(t1);
        };
    },
    81: (t1, e, i)=>{
        var s = i(9565), n = i(9306), r = i(8551), a = i(6823), o = i(851), l = TypeError;
        t1.exports = function(t1, e) {
            var i = arguments.length < 2 ? o(t1) : e;
            if (n(i)) return r(s(i, t1));
            throw new l(a(t1) + " is not iterable");
        };
    },
    116: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(2652), a = i(9306), o = i(8551), l = i(1767), h = i(9539), c = i(4549)("find", TypeError);
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: c
        }, {
            find: function(t1) {
                o(this);
                try {
                    a(t1);
                } catch (s) {
                    h(this, "throw", s);
                }
                if (c) return n(c, this, t1);
                var e = l(this), i = 0;
                return r(e, function(e, s) {
                    if (t1(e, i++)) return s(e);
                }, {
                    IS_RECORD: !0,
                    INTERRUPTED: !0
                }).result;
            }
        });
    },
    283: (t1, e, i)=>{
        var s = i(9504), n = i(9039), r = i(4901), a = i(9297), o = i(3724), l = i(350).CONFIGURABLE, h = i(3706), c = i(1181), d = c.enforce, u = c.get, p = String, g = Object.defineProperty, m = s("".slice), f = s("".replace), b = s([].join), v = o && !n(function() {
            return 8 !== g(function() {}, "length", {
                value: 8
            }).length;
        }), y = String(String).split("String"), w = t1.exports = function(t1, e, i) {
            "Symbol(" === m(p(e), 0, 7) && (e = "[" + f(p(e), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), i && i.getter && (e = "get " + e), i && i.setter && (e = "set " + e), (!a(t1, "name") || l && t1.name !== e) && (o ? g(t1, "name", {
                value: e,
                configurable: !0
            }) : t1.name = e), v && i && a(i, "arity") && t1.length !== i.arity && g(t1, "length", {
                value: i.arity
            });
            try {
                i && a(i, "constructor") && i.constructor ? o && g(t1, "prototype", {
                    writable: !1
                }) : t1.prototype && (t1.prototype = void 0);
            } catch (n) {}
            var s = d(t1);
            return a(s, "source") || (s.source = b(y, "string" == typeof e ? e : "")), t1;
        };
        Function.prototype.toString = w(function() {
            return r(this) && u(this).source || h(this);
        }, "toString");
    },
    350: (t1, e, i)=>{
        var s = i(3724), n = i(9297), r = Function.prototype, a = s && Object.getOwnPropertyDescriptor, o = n(r, "name"), l = o && "something" === (function() {}).name, h = o && (!s || s && a(r, "name").configurable);
        t1.exports = {
            EXISTS: o,
            PROPER: l,
            CONFIGURABLE: h
        };
    },
    397: (t1, e, i)=>{
        var s = i(7751);
        t1.exports = s("document", "documentElement");
    },
    421: (t1)=>{
        t1.exports = {};
    },
    456: (t1, e, i)=>{
        var s = i(6518), n = i(4576), r = i(9504), a = i(4154), o = i(5169), l = r(1.1.toString), h = n.Uint8Array, c = !h || !h.prototype.toHex || !function() {
            try {
                return "ffffffffffffffff" === new h([
                    255,
                    255,
                    255,
                    255,
                    255,
                    255,
                    255,
                    255
                ]).toHex();
            } catch (t1) {
                return !1;
            }
        }();
        h && s({
            target: "Uint8Array",
            proto: !0,
            forced: c
        }, {
            toHex: function() {
                a(this), o(this.buffer);
                for(var t1 = "", e = 0, i = this.length; e < i; e++){
                    var s = l(this[e], 16);
                    t1 += 1 === s.length ? "0" + s : s;
                }
                return t1;
            }
        });
    },
    507: (t1, e, i)=>{
        var s = i(9565);
        t1.exports = function(t1, e, i) {
            for(var n, r, a = i ? t1 : t1.iterator, o = t1.next; !(n = s(o, a)).done;)if (void 0 !== (r = e(n.value))) return r;
        };
    },
    531: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(9306), a = i(8551), o = i(1767), l = i(8646), h = i(9462), c = i(9539), d = i(6395), u = i(684), p = i(4549), g = !d && !u("flatMap", function() {}), m = !d && !g && p("flatMap", TypeError), f = d || g || m, b = h(function() {
            for(var t1, e, i = this.iterator, s = this.mapper;;){
                if (e = this.inner) try {
                    if (!(t1 = a(n(e.next, e.iterator))).done) return t1.value;
                    this.inner = null;
                } catch (r) {
                    c(i, "throw", r);
                }
                if (t1 = a(n(this.next, i)), this.done = !!t1.done) return;
                try {
                    this.inner = l(s(t1.value, this.counter++), !1);
                } catch (r) {
                    c(i, "throw", r);
                }
            }
        });
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: f
        }, {
            flatMap: function(t1) {
                a(this);
                try {
                    r(t1);
                } catch (e) {
                    c(this, "throw", e);
                }
                return m ? n(m, this, t1) : new b(o(this), {
                    mapper: t1,
                    inner: null
                });
            }
        });
    },
    616: (t1, e, i)=>{
        var s = i(9039);
        t1.exports = !s(function() {
            var t1 = (function() {}).bind();
            return "function" != typeof t1 || t1.hasOwnProperty("prototype");
        });
    },
    655: (t1, e, i)=>{
        var s = i(6955), n = String;
        t1.exports = function(t1) {
            if ("Symbol" === s(t1)) throw new TypeError("Cannot convert a Symbol value to a string");
            return n(t1);
        };
    },
    679: (t1, e, i)=>{
        var s = i(1625), n = TypeError;
        t1.exports = function(t1, e) {
            if (s(e, t1)) return t1;
            throw new n("Incorrect invocation");
        };
    },
    684: (t1)=>{
        t1.exports = function(t1, e) {
            var i = "function" == typeof Iterator && Iterator.prototype[t1];
            if (i) try {
                i.call({
                    next: null
                }, e).next();
            } catch (s) {
                return !0;
            }
        };
    },
    741: (t1)=>{
        var e = Math.ceil, i = Math.floor;
        t1.exports = Math.trunc || function(t1) {
            var s = +t1;
            return (s > 0 ? i : e)(s);
        };
    },
    757: (t1, e, i)=>{
        var s = i(7751), n = i(4901), r = i(1625), a = i(7040), o = Object;
        t1.exports = a ? function(t1) {
            return "symbol" == typeof t1;
        } : function(t1) {
            var e = s("Symbol");
            return n(e) && r(e.prototype, o(t1));
        };
    },
    851: (t1, e, i)=>{
        var s = i(6955), n = i(5966), r = i(4117), a = i(6269), o = i(8227)("iterator");
        t1.exports = function(t1) {
            if (!r(t1)) return n(t1, o) || n(t1, "@@iterator") || a[s(t1)];
        };
    },
    944: (t1)=>{
        var e = TypeError;
        t1.exports = function(t1) {
            var i = t1 && t1.alphabet;
            if (void 0 === i || "base64" === i || "base64url" === i) return i || "base64";
            throw new e("Incorrect `alphabet` option");
        };
    },
    1072: (t1, e, i)=>{
        var s = i(1828), n = i(8727);
        t1.exports = Object.keys || function(t1) {
            return s(t1, n);
        };
    },
    1103: (t1)=>{
        t1.exports = function(t1) {
            try {
                return {
                    error: !1,
                    value: t1()
                };
            } catch (e) {
                return {
                    error: !0,
                    value: e
                };
            }
        };
    },
    1108: (t1, e, i)=>{
        var s = i(6955);
        t1.exports = function(t1) {
            var e = s(t1);
            return "BigInt64Array" === e || "BigUint64Array" === e;
        };
    },
    1148: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(2652), a = i(9306), o = i(8551), l = i(1767), h = i(9539), c = i(4549)("every", TypeError);
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: c
        }, {
            every: function(t1) {
                o(this);
                try {
                    a(t1);
                } catch (s) {
                    h(this, "throw", s);
                }
                if (c) return n(c, this, t1);
                var e = l(this), i = 0;
                return !r(e, function(e, s) {
                    if (!t1(e, i++)) return s();
                }, {
                    IS_RECORD: !0,
                    INTERRUPTED: !0
                }).stopped;
            }
        });
    },
    1181: (t1, e, i)=>{
        var s, n, r, a = i(8622), o = i(4576), l = i(34), h = i(6699), c = i(9297), d = i(7629), u = i(6119), p = i(421), g = "Object already initialized", m = o.TypeError, f = o.WeakMap;
        if (a || d.state) {
            var b = d.state || (d.state = new f);
            b.get = b.get, b.has = b.has, b.set = b.set, s = function(t1, e) {
                if (b.has(t1)) throw new m(g);
                return e.facade = t1, b.set(t1, e), e;
            }, n = function(t1) {
                return b.get(t1) || {};
            }, r = function(t1) {
                return b.has(t1);
            };
        } else {
            var v = u("state");
            p[v] = !0, s = function(t1, e) {
                if (c(t1, v)) throw new m(g);
                return e.facade = t1, h(t1, v, e), e;
            }, n = function(t1) {
                return c(t1, v) ? t1[v] : {};
            }, r = function(t1) {
                return c(t1, v);
            };
        }
        t1.exports = {
            set: s,
            get: n,
            has: r,
            enforce: function(t1) {
                return r(t1) ? n(t1) : s(t1, {});
            },
            getterFor: function(t1) {
                return function(e) {
                    var i;
                    if (!l(e) || (i = n(e)).type !== t1) throw new m("Incompatible receiver, " + t1 + " required");
                    return i;
                };
            }
        };
    },
    1291: (t1, e, i)=>{
        var s = i(741);
        t1.exports = function(t1) {
            var e = +t1;
            return e != e || 0 === e ? 0 : s(e);
        };
    },
    1385: (t1, e, i)=>{
        var s = i(9539);
        t1.exports = function(t1, e, i) {
            for(var n = t1.length - 1; n >= 0; n--)if (void 0 !== t1[n]) try {
                i = s(t1[n].iterator, e, i);
            } catch (r) {
                e = "throw", i = r;
            }
            if ("throw" === e) throw i;
            return i;
        };
    },
    1548: (t1, e, i)=>{
        var s = i(4576), n = i(9039), r = i(9519), a = i(4215), o = s.structuredClone;
        t1.exports = !!o && !n(function() {
            if ("DENO" === a && r > 92 || "NODE" === a && r > 94 || "BROWSER" === a && r > 97) return !1;
            var t1 = new ArrayBuffer(8), e = o(t1, {
                transfer: [
                    t1
                ]
            });
            return 0 !== t1.byteLength || 8 !== e.byteLength;
        });
    },
    1549: (t1, e, i)=>{
        i(6632);
    },
    1625: (t1, e, i)=>{
        var s = i(9504);
        t1.exports = s({}.isPrototypeOf);
    },
    1689: (t1, e, i)=>{
        var s = i(6518), n = i(4576), r = i(8745), a = i(7680), o = i(6043), l = i(9306), h = i(1103), c = n.Promise, d = !1;
        s({
            target: "Promise",
            stat: !0,
            forced: !c || !c.try || h(function() {
                c.try(function(t1) {
                    d = 8 === t1;
                }, 8);
            }).error || !d
        }, {
            try: function(t1) {
                var e = arguments.length > 1 ? a(arguments, 1) : [], i = o.f(this), s = h(function() {
                    return r(l(t1), void 0, e);
                });
                return (s.error ? i.reject : i.resolve)(s.value), i.promise;
            }
        });
    },
    1698: (t1, e, i)=>{
        var s = i(6518), n = i(4204), r = i(9835);
        s({
            target: "Set",
            proto: !0,
            real: !0,
            forced: !i(4916)("union") || !r("union")
        }, {
            union: n
        });
    },
    1701: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(9306), a = i(8551), o = i(1767), l = i(9462), h = i(6319), c = i(9539), d = i(684), u = i(4549), p = i(6395), g = !p && !d("map", function() {}), m = !p && !g && u("map", TypeError), f = p || g || m, b = l(function() {
            var t1 = this.iterator, e = a(n(this.next, t1));
            if (!(this.done = !!e.done)) return h(t1, this.mapper, [
                e.value,
                this.counter++
            ], !0);
        });
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: f
        }, {
            map: function(t1) {
                a(this);
                try {
                    r(t1);
                } catch (e) {
                    c(this, "throw", e);
                }
                return m ? n(m, this, t1) : new b(o(this), {
                    mapper: t1
                });
            }
        });
    },
    1767: (t1)=>{
        t1.exports = function(t1) {
            return {
                iterator: t1,
                next: t1.next,
                done: !1
            };
        };
    },
    1828: (t1, e, i)=>{
        var s = i(9504), n = i(9297), r = i(5397), a = i(9617).indexOf, o = i(421), l = s([].push);
        t1.exports = function(t1, e) {
            var i, s = r(t1), h = 0, c = [];
            for(i in s)!n(o, i) && n(s, i) && l(c, i);
            for(; e.length > h;)n(s, i = e[h++]) && (~a(c, i) || l(c, i));
            return c;
        };
    },
    2106: (t1, e, i)=>{
        var s = i(283), n = i(4913);
        t1.exports = function(t1, e, i) {
            return i.get && s(i.get, e, {
                getter: !0
            }), i.set && s(i.set, e, {
                setter: !0
            }), n.f(t1, e, i);
        };
    },
    2140: (t1, e, i)=>{
        var s = {};
        s[i(8227)("toStringTag")] = "z", t1.exports = "[object z]" === String(s);
    },
    2195: (t1, e, i)=>{
        var s = i(9504), n = s({}.toString), r = s("".slice);
        t1.exports = function(t1) {
            return r(n(t1), 8, -1);
        };
    },
    2211: (t1, e, i)=>{
        var s = i(9039);
        t1.exports = !s(function() {
            function t1() {}
            return t1.prototype.constructor = null, Object.getPrototypeOf(new t1) !== t1.prototype;
        });
    },
    2303: (t1, e, i)=>{
        var s = i(4576), n = i(9504), r = s.Uint8Array, a = s.SyntaxError, o = s.parseInt, l = Math.min, h = /[^\da-f]/i, c = n(h.exec), d = n("".slice);
        t1.exports = function(t1, e) {
            var i = t1.length;
            if (i % 2 != 0) throw new a("String should be an even number of characters");
            for(var s = e ? l(e.length, i / 2) : i / 2, n = e || new r(s), u = 0, p = 0; p < s;){
                var g = d(t1, u, u += 2);
                if (c(h, g)) throw new a("String should only contain hex characters");
                n[p++] = o(g, 16);
            }
            return {
                bytes: n,
                read: u
            };
        };
    },
    2360: (t1, e, i)=>{
        var s, n = i(8551), r = i(6801), a = i(8727), o = i(421), l = i(397), h = i(4055), c = i(6119), d = "prototype", u = "script", p = c("IE_PROTO"), g = function() {}, m = function(t1) {
            return "<" + u + ">" + t1 + "</" + u + ">";
        }, f = function(t1) {
            t1.write(m("")), t1.close();
            var e = t1.parentWindow.Object;
            return t1 = null, e;
        }, b = function() {
            try {
                s = new ActiveXObject("htmlfile");
            } catch (r) {}
            var t1, e, i;
            b = "undefined" != typeof document ? document.domain && s ? f(s) : (e = h("iframe"), i = "java" + u + ":", e.style.display = "none", l.appendChild(e), e.src = String(i), (t1 = e.contentWindow.document).open(), t1.write(m("document.F=Object")), t1.close(), t1.F) : f(s);
            for(var n = a.length; n--;)delete b[d][a[n]];
            return b();
        };
        o[p] = !0, t1.exports = Object.create || function(t1, e) {
            var i;
            return null !== t1 ? (g[d] = n(t1), i = new g, g[d] = null, i[p] = t1) : i = b(), void 0 === e ? i : r.f(i, e);
        };
    },
    2475: (t1, e, i)=>{
        var s = i(6518), n = i(8527);
        s({
            target: "Set",
            proto: !0,
            real: !0,
            forced: !i(4916)("isSupersetOf", function(t1) {
                return !t1;
            })
        }, {
            isSupersetOf: n
        });
    },
    2489: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(9306), a = i(8551), o = i(1767), l = i(9462), h = i(6319), c = i(6395), d = i(9539), u = i(684), p = i(4549), g = !c && !u("filter", function() {}), m = !c && !g && p("filter", TypeError), f = c || g || m, b = l(function() {
            for(var t1, e, i = this.iterator, s = this.predicate, r = this.next;;){
                if (t1 = a(n(r, i)), this.done = !!t1.done) return;
                if (e = t1.value, h(i, s, [
                    e,
                    this.counter++
                ], !0)) return e;
            }
        });
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: f
        }, {
            filter: function(t1) {
                a(this);
                try {
                    r(t1);
                } catch (e) {
                    d(this, "throw", e);
                }
                return m ? n(m, this, t1) : new b(o(this), {
                    predicate: t1
                });
            }
        });
    },
    2529: (t1)=>{
        t1.exports = function(t1, e) {
            return {
                value: t1,
                done: e
            };
        };
    },
    2603: (t1, e, i)=>{
        var s = i(655);
        t1.exports = function(t1, e) {
            return void 0 === t1 ? arguments.length < 2 ? "" : e : s(t1);
        };
    },
    2652: (t1, e, i)=>{
        var s = i(6080), n = i(9565), r = i(8551), a = i(6823), o = i(4209), l = i(6198), h = i(1625), c = i(81), d = i(851), u = i(9539), p = TypeError, g = function(t1, e) {
            this.stopped = t1, this.result = e;
        }, m = g.prototype;
        t1.exports = function(t1, e, i) {
            var f, b, v, y, w, x, A, _ = i && i.that, S = !(!i || !i.AS_ENTRIES), E = !(!i || !i.IS_RECORD), C = !(!i || !i.IS_ITERATOR), T = !(!i || !i.INTERRUPTED), M = s(e, _), D = function(t1) {
                return f && u(f, "normal"), new g(!0, t1);
            }, P = function(t1) {
                return S ? (r(t1), T ? M(t1[0], t1[1], D) : M(t1[0], t1[1])) : T ? M(t1, D) : M(t1);
            };
            if (E) f = t1.iterator;
            else if (C) f = t1;
            else {
                if (!(b = d(t1))) throw new p(a(t1) + " is not iterable");
                if (o(b)) {
                    for(v = 0, y = l(t1); y > v; v++)if ((w = P(t1[v])) && h(m, w)) return w;
                    return new g(!1);
                }
                f = c(t1, b);
            }
            for(x = E ? t1.next : f.next; !(A = n(x, f)).done;){
                try {
                    w = P(A.value);
                } catch (k) {
                    u(f, "throw", k);
                }
                if ("object" == typeof w && w && h(m, w)) return w;
            }
            return new g(!1);
        };
    },
    2777: (t1, e, i)=>{
        var s = i(9565), n = i(34), r = i(757), a = i(5966), o = i(4270), l = i(8227), h = TypeError, c = l("toPrimitive");
        t1.exports = function(t1, e) {
            if (!n(t1) || r(t1)) return t1;
            var i, l = a(t1, c);
            if (l) {
                if (void 0 === e && (e = "default"), i = s(l, t1, e), !n(i) || r(i)) return i;
                throw new h("Can't convert object to primitive value");
            }
            return void 0 === e && (e = "number"), o(t1, e);
        };
    },
    2787: (t1, e, i)=>{
        var s = i(9297), n = i(4901), r = i(8981), a = i(6119), o = i(2211), l = a("IE_PROTO"), h = Object, c = h.prototype;
        t1.exports = o ? h.getPrototypeOf : function(t1) {
            var e = r(t1);
            if (s(e, l)) return e[l];
            var i = e.constructor;
            return n(i) && e instanceof i ? i.prototype : e instanceof h ? c : null;
        };
    },
    2796: (t1, e, i)=>{
        var s = i(9039), n = i(4901), r = /#|\.prototype\./, a = function(t1, e) {
            var i = l[o(t1)];
            return i === c || i !== h && (n(e) ? s(e) : !!e);
        }, o = a.normalize = function(t1) {
            return String(t1).replace(r, ".").toLowerCase();
        }, l = a.data = {}, h = a.NATIVE = "N", c = a.POLYFILL = "P";
        t1.exports = a;
    },
    2804: (t1)=>{
        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = e + "+/", s = e + "-_", n = function(t1) {
            for(var e = {}, i = 0; i < 64; i++)e[t1.charAt(i)] = i;
            return e;
        };
        t1.exports = {
            i2c: i,
            c2i: n(i),
            i2cUrl: s,
            c2iUrl: n(s)
        };
    },
    2812: (t1)=>{
        var e = TypeError;
        t1.exports = function(t1, i) {
            if (t1 < i) throw new e("Not enough arguments");
            return t1;
        };
    },
    2839: (t1, e, i)=>{
        var s = i(4576).navigator, n = s && s.userAgent;
        t1.exports = n ? String(n) : "";
    },
    2967: (t1, e, i)=>{
        var s = i(6706), n = i(34), r = i(7750), a = i(3506);
        t1.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var t1, e = !1, i = {};
            try {
                (t1 = s(Object.prototype, "__proto__", "set"))(i, []), e = i instanceof Array;
            } catch (o) {}
            return function(i, s) {
                return r(i), a(s), n(i) ? (e ? t1(i, s) : i.__proto__ = s, i) : i;
            };
        }() : void 0);
    },
    3068: (t1, e, i)=>{
        var s = i(6518), n = i(9504), r = i(2652), a = RangeError, o = TypeError, l = 1 / 0, h = Math.abs, c = Math.pow, d = n([].push), u = c(2, 1023), p = c(2, 53) - 1, g = Number.MAX_VALUE, m = c(2, 971), f = {}, b = {}, v = {}, y = {}, w = {}, x = function(t1, e) {
            var i = t1 + e;
            return {
                hi: i,
                lo: e - (i - t1)
            };
        };
        s({
            target: "Math",
            stat: !0
        }, {
            sumPrecise: function(t1) {
                var e = [], i = 0, s = y;
                switch(r(t1, function(t1) {
                    if (++i >= p) throw new a("Maximum allowed index exceeded");
                    if ("number" != typeof t1) throw new o("Value is not a number");
                    s !== f && (t1 != t1 ? s = f : t1 === l ? s = s === b ? f : v : t1 === -1 / 0 ? s = s === v ? f : b : 0 === t1 && 1 / t1 !== l || s !== y && s !== w || (s = w, d(e, t1)));
                }), s){
                    case f:
                        return NaN;
                    case b:
                        return -1 / 0;
                    case v:
                        return l;
                    case y:
                        return -0;
                }
                for(var n, c, A, _, S, E, C = [], T = 0, M = 0; M < e.length; M++){
                    n = e[M];
                    for(var D = 0, P = 0; P < C.length; P++){
                        if (c = C[P], h(n) < h(c) && (E = n, n = c, c = E), _ = (A = x(n, c)).hi, S = A.lo, h(_) === l) {
                            var k = _ === l ? 1 : -1;
                            T += k, h(n = n - k * u - k * u) < h(c) && (E = n, n = c, c = E), _ = (A = x(n, c)).hi, S = A.lo;
                        }
                        0 !== S && (C[D++] = S), n = _;
                    }
                    C.length = D, 0 !== n && d(C, n);
                }
                var I = C.length - 1;
                if (_ = 0, S = 0, 0 !== T) {
                    var R = I >= 0 ? C[I] : 0;
                    if (I--, h(T) > 1 || T > 0 && R > 0 || T < 0 && R < 0) return T > 0 ? l : -1 / 0;
                    if (_ = (A = x(T * u, R / 2)).hi, S = A.lo, S *= 2, h(2 * _) === l) return _ > 0 ? _ === u && S === -m / 2 && I >= 0 && C[I] < 0 ? g : l : _ === -u && S === m / 2 && I >= 0 && C[I] > 0 ? -g : -1 / 0;
                    0 !== S && (C[++I] = S, S = 0), _ *= 2;
                }
                for(; I >= 0 && (_ = (A = x(_, C[I--])).hi, 0 === (S = A.lo)););
                return I >= 0 && (S < 0 && C[I] < 0 || S > 0 && C[I] > 0) && (c = 2 * S) === (n = _ + c) - _ && (_ = n), _;
            }
        });
    },
    3167: (t1, e, i)=>{
        var s = i(4901), n = i(34), r = i(2967);
        t1.exports = function(t1, e, i) {
            var a, o;
            return r && s(a = e.constructor) && a !== i && n(o = a.prototype) && o !== i.prototype && r(t1, o), t1;
        };
    },
    3238: (t1, e, i)=>{
        var s = i(4576), n = i(7811), r = i(7394), a = s.DataView;
        t1.exports = function(t1) {
            if (!n || 0 !== r(t1)) return !1;
            try {
                return new a(t1), !1;
            } catch (e) {
                return !0;
            }
        };
    },
    3392: (t1, e, i)=>{
        var s = i(9504), n = 0, r = Math.random(), a = s(1.1.toString);
        t1.exports = function(t1) {
            return "Symbol(" + (void 0 === t1 ? "" : t1) + ")_" + a(++n + r, 36);
        };
    },
    3440: (t1, e, i)=>{
        var s = i(7080), n = i(4402), r = i(9286), a = i(5170), o = i(3789), l = i(8469), h = i(507), c = n.has, d = n.remove;
        t1.exports = function(t1) {
            var e = s(this), i = o(t1), n = r(e);
            return a(e) <= i.size ? l(e, function(t1) {
                i.includes(t1) && d(n, t1);
            }) : h(i.getIterator(), function(t1) {
                c(n, t1) && d(n, t1);
            }), n;
        };
    },
    3463: (t1)=>{
        var e = TypeError;
        t1.exports = function(t1) {
            if ("string" == typeof t1) return t1;
            throw new e("Argument is not a string");
        };
    },
    3506: (t1, e, i)=>{
        var s = i(3925), n = String, r = TypeError;
        t1.exports = function(t1) {
            if (s(t1)) return t1;
            throw new r("Can't set " + n(t1) + " as a prototype");
        };
    },
    3579: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(2652), a = i(9306), o = i(8551), l = i(1767), h = i(9539), c = i(4549)("some", TypeError);
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: c
        }, {
            some: function(t1) {
                o(this);
                try {
                    a(t1);
                } catch (s) {
                    h(this, "throw", s);
                }
                if (c) return n(c, this, t1);
                var e = l(this), i = 0;
                return r(e, function(e, s) {
                    if (t1(e, i++)) return s();
                }, {
                    IS_RECORD: !0,
                    INTERRUPTED: !0
                }).stopped;
            }
        });
    },
    3650: (t1, e, i)=>{
        var s = i(7080), n = i(4402), r = i(9286), a = i(3789), o = i(507), l = n.add, h = n.has, c = n.remove;
        t1.exports = function(t1) {
            var e = s(this), i = a(t1).getIterator(), n = r(e);
            return o(i, function(t1) {
                h(e, t1) ? c(n, t1) : l(n, t1);
            }), n;
        };
    },
    3706: (t1, e, i)=>{
        var s = i(9504), n = i(4901), r = i(7629), a = s(Function.toString);
        n(r.inspectSource) || (r.inspectSource = function(t1) {
            return a(t1);
        }), t1.exports = r.inspectSource;
    },
    3717: (t1, e)=>{
        e.f = Object.getOwnPropertySymbols;
    },
    3724: (t1, e, i)=>{
        var s = i(9039);
        t1.exports = !s(function() {
            return 7 !== Object.defineProperty({}, 1, {
                get: function() {
                    return 7;
                }
            })[1];
        });
    },
    3789: (t1, e, i)=>{
        var s = i(9306), n = i(8551), r = i(9565), a = i(1291), o = i(1767), l = "Invalid size", h = RangeError, c = TypeError, d = Math.max, u = function(t1, e) {
            this.set = t1, this.size = d(e, 0), this.has = s(t1.has), this.keys = s(t1.keys);
        };
        u.prototype = {
            getIterator: function() {
                return o(n(r(this.keys, this.set)));
            },
            includes: function(t1) {
                return r(this.has, this.set, t1);
            }
        }, t1.exports = function(t1) {
            n(t1);
            var e = +t1.size;
            if (e != e) throw new c(l);
            var i = a(e);
            if (i < 0) throw new h(l);
            return new u(t1, i);
        };
    },
    3838: (t1, e, i)=>{
        var s = i(7080), n = i(5170), r = i(8469), a = i(3789);
        t1.exports = function(t1) {
            var e = s(this), i = a(t1);
            return !(n(e) > i.size) && !1 !== r(e, function(t1) {
                if (!i.includes(t1)) return !1;
            }, !0);
        };
    },
    3853: (t1, e, i)=>{
        var s = i(6518), n = i(4449);
        s({
            target: "Set",
            proto: !0,
            real: !0,
            forced: !i(4916)("isDisjointFrom", function(t1) {
                return !t1;
            })
        }, {
            isDisjointFrom: n
        });
    },
    3925: (t1, e, i)=>{
        var s = i(34);
        t1.exports = function(t1) {
            return s(t1) || null === t1;
        };
    },
    3972: (t1, e, i)=>{
        var s = i(34), n = String, r = TypeError;
        t1.exports = function(t1) {
            if (void 0 === t1 || s(t1)) return t1;
            throw new r(n(t1) + " is not an object or undefined");
        };
    },
    4055: (t1, e, i)=>{
        var s = i(4576), n = i(34), r = s.document, a = n(r) && n(r.createElement);
        t1.exports = function(t1) {
            return a ? r.createElement(t1) : {};
        };
    },
    4114: (t1, e, i)=>{
        var s = i(6518), n = i(8981), r = i(6198), a = i(4527), o = i(6837);
        s({
            target: "Array",
            proto: !0,
            arity: 1,
            forced: i(9039)(function() {
                return 4294967297 !== [].push.call({
                    length: 4294967296
                }, 1);
            }) || !function() {
                try {
                    Object.defineProperty([], "length", {
                        writable: !1
                    }).push();
                } catch (t1) {
                    return t1 instanceof TypeError;
                }
            }()
        }, {
            push: function(t1) {
                var e = n(this), i = r(e), s = arguments.length;
                o(i + s);
                for(var l = 0; l < s; l++)e[i] = arguments[l], i++;
                return a(e, i), i;
            }
        });
    },
    4117: (t1)=>{
        t1.exports = function(t1) {
            return null == t1;
        };
    },
    4149: (t1)=>{
        var e = RangeError;
        t1.exports = function(t1) {
            if (t1 == t1) return t1;
            throw new e("NaN is not allowed");
        };
    },
    4154: (t1, e, i)=>{
        var s = i(6955), n = TypeError;
        t1.exports = function(t1) {
            if ("Uint8Array" === s(t1)) return t1;
            throw new n("Argument is not an Uint8Array");
        };
    },
    4204: (t1, e, i)=>{
        var s = i(7080), n = i(4402).add, r = i(9286), a = i(3789), o = i(507);
        t1.exports = function(t1) {
            var e = s(this), i = a(t1).getIterator(), l = r(e);
            return o(i, function(t1) {
                n(l, t1);
            }), l;
        };
    },
    4209: (t1, e, i)=>{
        var s = i(8227), n = i(6269), r = s("iterator"), a = Array.prototype;
        t1.exports = function(t1) {
            return void 0 !== t1 && (n.Array === t1 || a[r] === t1);
        };
    },
    4215: (t1, e, i)=>{
        var s = i(4576), n = i(2839), r = i(2195), a = function(t1) {
            return n.slice(0, t1.length) === t1;
        };
        t1.exports = a("Bun/") ? "BUN" : a("Cloudflare-Workers") ? "CLOUDFLARE" : a("Deno/") ? "DENO" : a("Node.js/") ? "NODE" : s.Bun && "string" == typeof Bun.version ? "BUN" : s.Deno && "object" == typeof Deno.version ? "DENO" : "process" === r(s.process) ? "NODE" : s.window && s.document ? "BROWSER" : "REST";
    },
    4226: (t1, e, i)=>{
        var s = i(6518), n = i(4576), r = i(3463), a = i(4154), o = i(5169), l = i(2303);
        n.Uint8Array && s({
            target: "Uint8Array",
            proto: !0
        }, {
            setFromHex: function(t1) {
                a(this), r(t1), o(this.buffer);
                var e = l(t1, this).read;
                return {
                    read: e,
                    written: e / 2
                };
            }
        });
    },
    4235: (t1, e, i)=>{
        i(3068);
    },
    4270: (t1, e, i)=>{
        var s = i(9565), n = i(4901), r = i(34), a = TypeError;
        t1.exports = function(t1, e) {
            var i, o;
            if ("string" === e && n(i = t1.toString) && !r(o = s(i, t1))) return o;
            if (n(i = t1.valueOf) && !r(o = s(i, t1))) return o;
            if ("string" !== e && n(i = t1.toString) && !r(o = s(i, t1))) return o;
            throw new a("Can't convert object to primitive value");
        };
    },
    4376: (t1, e, i)=>{
        var s = i(2195);
        t1.exports = Array.isArray || function(t1) {
            return "Array" === s(t1);
        };
    },
    4402: (t1, e, i)=>{
        var s = i(9504), n = Set.prototype;
        t1.exports = {
            Set: Set,
            add: s(n.add),
            has: s(n.has),
            remove: s(n.delete),
            proto: n
        };
    },
    4449: (t1, e, i)=>{
        var s = i(7080), n = i(4402).has, r = i(5170), a = i(3789), o = i(8469), l = i(507), h = i(9539);
        t1.exports = function(t1) {
            var e = s(this), i = a(t1);
            if (r(e) <= i.size) return !1 !== o(e, function(t1) {
                if (i.includes(t1)) return !1;
            }, !0);
            var c = i.getIterator();
            return !1 !== l(c, function(t1) {
                if (n(e, t1)) return h(c, "normal", !1);
            });
        };
    },
    4483: (t1, e, i)=>{
        var s, n, r, a, o = i(4576), l = i(9429), h = i(1548), c = o.structuredClone, d = o.ArrayBuffer, u = o.MessageChannel, p = !1;
        if (h) p = function(t1) {
            c(t1, {
                transfer: [
                    t1
                ]
            });
        };
        else if (d) try {
            u || (s = l("worker_threads")) && (u = s.MessageChannel), u && (n = new u, r = new d(2), a = function(t1) {
                n.port1.postMessage(null, [
                    t1
                ]);
            }, 2 === r.byteLength && (a(r), 0 === r.byteLength && (p = a)));
        } catch (g) {}
        t1.exports = p;
    },
    4495: (t1, e, i)=>{
        var s = i(9519), n = i(9039), r = i(4576).String;
        t1.exports = !!Object.getOwnPropertySymbols && !n(function() {
            var t1 = Symbol("symbol detection");
            return !r(t1) || !(Object(t1) instanceof Symbol) || !Symbol.sham && s && s < 41;
        });
    },
    4527: (t1, e, i)=>{
        var s = i(3724), n = i(4376), r = TypeError, a = Object.getOwnPropertyDescriptor, o = s && !function() {
            if (void 0 !== this) return !0;
            try {
                Object.defineProperty([], "length", {
                    writable: !1
                }).length = 1;
            } catch (t1) {
                return t1 instanceof TypeError;
            }
        }();
        t1.exports = o ? function(t1, e) {
            if (n(t1) && !a(t1, "length").writable) throw new r("Cannot set read only .length");
            return t1.length = e;
        } : function(t1, e) {
            return t1.length = e;
        };
    },
    4549: (t1, e, i)=>{
        var s = i(4576);
        t1.exports = function(t1, e) {
            var i = s.Iterator, n = i && i.prototype, r = n && n[t1], a = !1;
            if (r) try {
                r.call({
                    next: function() {
                        return {
                            done: !0
                        };
                    },
                    return: function() {
                        a = !0;
                    }
                }, -1);
            } catch (o) {
                o instanceof e || (a = !1);
            }
            if (!a) return r;
        };
    },
    4576: function(t1) {
        var e = function(t1) {
            return t1 && t1.Math === Math && t1;
        };
        t1.exports = e("object" == typeof globalThis && globalThis) || e("object" == ("TURBOPACK compile-time value", "undefined") && window) || e("object" == typeof self && self) || e("object" == ("TURBOPACK compile-time value", "object") && /*TURBOPACK member replacement*/ __turbopack_context__.g) || e("object" == typeof this && this) || function() {
            return this;
        }() || Function("return this")();
    },
    4603: (t1, e, i)=>{
        var s = i(6840), n = i(9504), r = i(655), a = i(2812), o = URLSearchParams, l = o.prototype, h = n(l.append), c = n(l.delete), d = n(l.forEach), u = n([].push), p = new o("a=1&a=2&b=3");
        p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && s(l, "delete", function(t1) {
            var e = arguments.length, i = e < 2 ? void 0 : arguments[1];
            if (e && void 0 === i) return c(this, t1);
            var s = [];
            d(this, function(t1, e) {
                u(s, {
                    key: e,
                    value: t1
                });
            }), a(e, 1);
            for(var n, o = r(t1), l = r(i), p = 0, g = 0, m = !1, f = s.length; p < f;)n = s[p++], m || n.key === o ? (m = !0, c(this, n.key)) : g++;
            for(; g < f;)(n = s[g++]).key === o && n.value === l || h(this, n.key, n.value);
        }, {
            enumerable: !0,
            unsafe: !0
        });
    },
    4628: (t1, e, i)=>{
        var s = i(6518), n = i(6043);
        s({
            target: "Promise",
            stat: !0
        }, {
            withResolvers: function() {
                var t1 = n.f(this);
                return {
                    promise: t1.promise,
                    resolve: t1.resolve,
                    reject: t1.reject
                };
            }
        });
    },
    4644: (t1, e, i)=>{
        var s, n, r, a = i(7811), o = i(3724), l = i(4576), h = i(4901), c = i(34), d = i(9297), u = i(6955), p = i(6823), g = i(6699), m = i(6840), f = i(2106), b = i(1625), v = i(2787), y = i(2967), w = i(8227), x = i(3392), A = i(1181), _ = A.enforce, S = A.get, E = l.Int8Array, C = E && E.prototype, T = l.Uint8ClampedArray, M = T && T.prototype, D = E && v(E), P = C && v(C), k = Object.prototype, I = l.TypeError, R = w("toStringTag"), L = x("TYPED_ARRAY_TAG"), B = "TypedArrayConstructor", F = a && !!y && "Opera" !== u(l.opera), O = !1, N = {
            Int8Array: 1,
            Uint8Array: 1,
            Uint8ClampedArray: 1,
            Int16Array: 2,
            Uint16Array: 2,
            Int32Array: 4,
            Uint32Array: 4,
            Float32Array: 4,
            Float64Array: 8
        }, U = {
            BigInt64Array: 8,
            BigUint64Array: 8
        }, z = function(t1) {
            var e = v(t1);
            if (c(e)) {
                var i = S(e);
                return i && d(i, B) ? i[B] : z(e);
            }
        }, H = function(t1) {
            if (!c(t1)) return !1;
            var e = u(t1);
            return d(N, e) || d(U, e);
        };
        for(s in N)(r = (n = l[s]) && n.prototype) ? _(r)[B] = n : F = !1;
        for(s in U)(r = (n = l[s]) && n.prototype) && (_(r)[B] = n);
        if ((!F || !h(D) || D === Function.prototype) && (D = function() {
            throw new I("Incorrect invocation");
        }, F)) for(s in N)l[s] && y(l[s], D);
        if ((!F || !P || P === k) && (P = D.prototype, F)) for(s in N)l[s] && y(l[s].prototype, P);
        if (F && v(M) !== P && y(M, P), o && !d(P, R)) for(s in O = !0, f(P, R, {
            configurable: !0,
            get: function() {
                return c(this) ? this[L] : void 0;
            }
        }), N)l[s] && g(l[s], L, s);
        t1.exports = {
            NATIVE_ARRAY_BUFFER_VIEWS: F,
            TYPED_ARRAY_TAG: O && L,
            aTypedArray: function(t1) {
                if (H(t1)) return t1;
                throw new I("Target is not a typed array");
            },
            aTypedArrayConstructor: function(t1) {
                if (h(t1) && (!y || b(D, t1))) return t1;
                throw new I(p(t1) + " is not a typed array constructor");
            },
            exportTypedArrayMethod: function(t1, e, i, s) {
                if (o) {
                    if (i) for(var n in N){
                        var r = l[n];
                        if (r && d(r.prototype, t1)) try {
                            delete r.prototype[t1];
                        } catch (a) {
                            try {
                                r.prototype[t1] = e;
                            } catch (h) {}
                        }
                    }
                    P[t1] && !i || m(P, t1, i ? e : F && C[t1] || e, s);
                }
            },
            exportTypedArrayStaticMethod: function(t1, e, i) {
                var s, n;
                if (o) {
                    if (y) {
                        if (i) {
                            for(s in N)if ((n = l[s]) && d(n, t1)) try {
                                delete n[t1];
                            } catch (r) {}
                        }
                        if (D[t1] && !i) return;
                        try {
                            return m(D, t1, i ? e : F && D[t1] || e);
                        } catch (r) {}
                    }
                    for(s in N)!(n = l[s]) || n[t1] && !i || m(n, t1, e);
                }
            },
            getTypedArrayConstructor: z,
            isView: function(t1) {
                if (!c(t1)) return !1;
                var e = u(t1);
                return "DataView" === e || d(N, e) || d(U, e);
            },
            isTypedArray: H,
            TypedArray: D,
            TypedArrayPrototype: P
        };
    },
    4659: (t1, e, i)=>{
        var s = i(3724), n = i(4913), r = i(6980);
        t1.exports = function(t1, e, i) {
            s ? n.f(t1, e, r(0, i)) : t1[e] = i;
        };
    },
    4901: (t1)=>{
        var e = "object" == typeof document && document.all;
        t1.exports = void 0 === e && void 0 !== e ? function(t1) {
            return "function" == typeof t1 || t1 === e;
        } : function(t1) {
            return "function" == typeof t1;
        };
    },
    4913: (t1, e, i)=>{
        var s = i(3724), n = i(5917), r = i(8686), a = i(8551), o = i(6969), l = TypeError, h = Object.defineProperty, c = Object.getOwnPropertyDescriptor, d = "enumerable", u = "configurable", p = "writable";
        e.f = s ? r ? function(t1, e, i) {
            if (a(t1), e = o(e), a(i), "function" == typeof t1 && "prototype" === e && "value" in i && p in i && !i[p]) {
                var s = c(t1, e);
                s && s[p] && (t1[e] = i.value, i = {
                    configurable: u in i ? i[u] : s[u],
                    enumerable: d in i ? i[d] : s[d],
                    writable: !1
                });
            }
            return h(t1, e, i);
        } : h : function(t1, e, i) {
            if (a(t1), e = o(e), a(i), n) try {
                return h(t1, e, i);
            } catch (s) {}
            if ("get" in i || "set" in i) throw new l("Accessors not supported");
            return "value" in i && (t1[e] = i.value), t1;
        };
    },
    4916: (t1, e, i)=>{
        var s = i(7751), n = function(t1) {
            return {
                size: t1,
                has: function() {
                    return !1;
                },
                keys: function() {
                    return {
                        next: function() {
                            return {
                                done: !0
                            };
                        }
                    };
                }
            };
        }, r = function(t1) {
            return {
                size: t1,
                has: function() {
                    return !0;
                },
                keys: function() {
                    throw new Error("e");
                }
            };
        };
        t1.exports = function(t1, e) {
            var i = s("Set");
            try {
                (new i)[t1](n(0));
                try {
                    return (new i)[t1](n(-1)), !1;
                } catch (o) {
                    if (!e) return !0;
                    try {
                        return (new i)[t1](r(-1 / 0)), !1;
                    } catch (l) {
                        var a = new i;
                        return a.add(1), a.add(2), e(a[t1](r(1 / 0)));
                    }
                }
            } catch (l) {
                return !1;
            }
        };
    },
    4972: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(8551), a = i(1767), o = i(4149), l = i(9590), h = i(9462), c = i(9539), d = i(4549), u = i(6395), p = !u && d("take", RangeError), g = h(function() {
            var t1 = this.iterator;
            if (!this.remaining--) return this.done = !0, c(t1, "normal", void 0);
            var e = r(n(this.next, t1));
            return (this.done = !!e.done) ? void 0 : e.value;
        });
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: u || p
        }, {
            take: function(t1) {
                var e;
                r(this);
                try {
                    e = l(o(+t1));
                } catch (i) {
                    c(this, "throw", i);
                }
                return p ? n(p, this, e) : new g(a(this), {
                    remaining: e
                });
            }
        });
    },
    4979: (t1, e, i)=>{
        var s = i(6518), n = i(4576), r = i(7751), a = i(6980), o = i(4913).f, l = i(9297), h = i(679), c = i(3167), d = i(2603), u = i(5002), p = i(8574), g = i(3724), m = i(6395), f = "DOMException", b = r("Error"), v = r(f), y = function() {
            h(this, w);
            var t1 = arguments.length, e = d(t1 < 1 ? void 0 : arguments[0]), i = d(t1 < 2 ? void 0 : arguments[1], "Error"), s = new v(e, i), n = new b(e);
            return n.name = f, o(s, "stack", a(1, p(n.stack, 1))), c(s, this, y), s;
        }, w = y.prototype = v.prototype, x = "stack" in new b(f), A = "stack" in new v(1, 2), _ = v && g && Object.getOwnPropertyDescriptor(n, f), S = !(!_ || _.writable && _.configurable), E = x && !S && !A;
        s({
            global: !0,
            constructor: !0,
            forced: m || E
        }, {
            DOMException: E ? y : v
        });
        var C = r(f), T = C.prototype;
        if (T.constructor !== C) {
            for(var M in m || o(T, "constructor", a(1, C)), u)if (l(u, M)) {
                var D = u[M], P = D.s;
                l(C, P) || o(C, P, a(6, D.c));
            }
        }
    },
    5002: (t1)=>{
        t1.exports = {
            IndexSizeError: {
                s: "INDEX_SIZE_ERR",
                c: 1,
                m: 1
            },
            DOMStringSizeError: {
                s: "DOMSTRING_SIZE_ERR",
                c: 2,
                m: 0
            },
            HierarchyRequestError: {
                s: "HIERARCHY_REQUEST_ERR",
                c: 3,
                m: 1
            },
            WrongDocumentError: {
                s: "WRONG_DOCUMENT_ERR",
                c: 4,
                m: 1
            },
            InvalidCharacterError: {
                s: "INVALID_CHARACTER_ERR",
                c: 5,
                m: 1
            },
            NoDataAllowedError: {
                s: "NO_DATA_ALLOWED_ERR",
                c: 6,
                m: 0
            },
            NoModificationAllowedError: {
                s: "NO_MODIFICATION_ALLOWED_ERR",
                c: 7,
                m: 1
            },
            NotFoundError: {
                s: "NOT_FOUND_ERR",
                c: 8,
                m: 1
            },
            NotSupportedError: {
                s: "NOT_SUPPORTED_ERR",
                c: 9,
                m: 1
            },
            InUseAttributeError: {
                s: "INUSE_ATTRIBUTE_ERR",
                c: 10,
                m: 1
            },
            InvalidStateError: {
                s: "INVALID_STATE_ERR",
                c: 11,
                m: 1
            },
            SyntaxError: {
                s: "SYNTAX_ERR",
                c: 12,
                m: 1
            },
            InvalidModificationError: {
                s: "INVALID_MODIFICATION_ERR",
                c: 13,
                m: 1
            },
            NamespaceError: {
                s: "NAMESPACE_ERR",
                c: 14,
                m: 1
            },
            InvalidAccessError: {
                s: "INVALID_ACCESS_ERR",
                c: 15,
                m: 1
            },
            ValidationError: {
                s: "VALIDATION_ERR",
                c: 16,
                m: 0
            },
            TypeMismatchError: {
                s: "TYPE_MISMATCH_ERR",
                c: 17,
                m: 1
            },
            SecurityError: {
                s: "SECURITY_ERR",
                c: 18,
                m: 1
            },
            NetworkError: {
                s: "NETWORK_ERR",
                c: 19,
                m: 1
            },
            AbortError: {
                s: "ABORT_ERR",
                c: 20,
                m: 1
            },
            URLMismatchError: {
                s: "URL_MISMATCH_ERR",
                c: 21,
                m: 1
            },
            QuotaExceededError: {
                s: "QUOTA_EXCEEDED_ERR",
                c: 22,
                m: 1
            },
            TimeoutError: {
                s: "TIMEOUT_ERR",
                c: 23,
                m: 1
            },
            InvalidNodeTypeError: {
                s: "INVALID_NODE_TYPE_ERR",
                c: 24,
                m: 1
            },
            DataCloneError: {
                s: "DATA_CLONE_ERR",
                c: 25,
                m: 1
            }
        };
    },
    5024: (t1, e, i)=>{
        var s = i(6518), n = i(3650), r = i(9835);
        s({
            target: "Set",
            proto: !0,
            real: !0,
            forced: !i(4916)("symmetricDifference") || !r("symmetricDifference")
        }, {
            symmetricDifference: n
        });
    },
    5031: (t1, e, i)=>{
        var s = i(7751), n = i(9504), r = i(8480), a = i(3717), o = i(8551), l = n([].concat);
        t1.exports = s("Reflect", "ownKeys") || function(t1) {
            var e = r.f(o(t1)), i = a.f;
            return i ? l(e, i(t1)) : e;
        };
    },
    5169: (t1, e, i)=>{
        var s = i(3238), n = TypeError;
        t1.exports = function(t1) {
            if (s(t1)) throw new n("ArrayBuffer is detached");
            return t1;
        };
    },
    5170: (t1, e, i)=>{
        var s = i(6706), n = i(4402);
        t1.exports = s(n.proto, "size", "get") || function(t1) {
            return t1.size;
        };
    },
    5213: (t1, e, i)=>{
        var s = i(6518), n = i(4576), r = i(5370), a = i(9143), o = n.Uint8Array, l = !o || !o.fromBase64 || !function() {
            try {
                return void o.fromBase64("a");
            } catch (t1) {}
            try {
                o.fromBase64("", null);
            } catch (t1) {
                return !0;
            }
        }();
        o && s({
            target: "Uint8Array",
            stat: !0,
            forced: l
        }, {
            fromBase64: function(t1) {
                var e = a(t1, arguments.length > 1 ? arguments[1] : void 0, null, 9007199254740991);
                return r(o, e.bytes);
            }
        });
    },
    5370: (t1, e, i)=>{
        var s = i(6198);
        t1.exports = function(t1, e, i) {
            for(var n = 0, r = arguments.length > 2 ? i : s(e), a = new t1(r); r > n;)a[n] = e[n++];
            return a;
        };
    },
    5397: (t1, e, i)=>{
        var s = i(7055), n = i(7750);
        t1.exports = function(t1) {
            return s(n(t1));
        };
    },
    5610: (t1, e, i)=>{
        var s = i(1291), n = Math.max, r = Math.min;
        t1.exports = function(t1, e) {
            var i = s(t1);
            return i < 0 ? n(i + e, 0) : r(i, e);
        };
    },
    5623: (t1, e, i)=>{
        i(456);
    },
    5636: (t1, e, i)=>{
        var s = i(4576), n = i(9504), r = i(6706), a = i(7696), o = i(5169), l = i(7394), h = i(4483), c = i(1548), d = s.structuredClone, u = s.ArrayBuffer, p = s.DataView, g = Math.min, m = u.prototype, f = p.prototype, b = n(m.slice), v = r(m, "resizable", "get"), y = r(m, "maxByteLength", "get"), w = n(f.getInt8), x = n(f.setInt8);
        t1.exports = (c || h) && function(t1, e, i) {
            var s, n = l(t1), r = void 0 === e ? n : a(e), m = !v || !v(t1);
            if (o(t1), c && (t1 = d(t1, {
                transfer: [
                    t1
                ]
            }), n === r && (i || m))) return t1;
            if (n >= r && (!i || m)) s = b(t1, 0, r);
            else {
                var f = i && !m && y ? {
                    maxByteLength: y(t1)
                } : void 0;
                s = new u(r, f);
                for(var A = new p(t1), _ = new p(s), S = g(r, n), E = 0; E < S; E++)x(_, E, w(A, E));
            }
            return c || h(t1), s;
        };
    },
    5745: (t1, e, i)=>{
        var s = i(7629);
        t1.exports = function(t1, e) {
            return s[t1] || (s[t1] = e || {});
        };
    },
    5781: (t1, e, i)=>{
        var s = i(6518), n = i(7751), r = i(2812), a = i(655), o = i(7416), l = n("URL");
        s({
            target: "URL",
            stat: !0,
            forced: !o
        }, {
            parse: function(t1) {
                var e = r(arguments.length, 1), i = a(t1), s = e < 2 || void 0 === arguments[1] ? void 0 : a(arguments[1]);
                try {
                    return new l(i, s);
                } catch (n) {
                    return null;
                }
            }
        });
    },
    5854: (t1, e, i)=>{
        var s = i(2777), n = TypeError;
        t1.exports = function(t1) {
            var e = s(t1, "number");
            if ("number" == typeof e) throw new n("Can't convert number to bigint");
            return BigInt(e);
        };
    },
    5876: (t1, e, i)=>{
        var s = i(6518), n = i(3838);
        s({
            target: "Set",
            proto: !0,
            real: !0,
            forced: !i(4916)("isSubsetOf", function(t1) {
                return t1;
            })
        }, {
            isSubsetOf: n
        });
    },
    5917: (t1, e, i)=>{
        var s = i(3724), n = i(9039), r = i(4055);
        t1.exports = !s && !n(function() {
            return 7 !== Object.defineProperty(r("div"), "a", {
                get: function() {
                    return 7;
                }
            }).a;
        });
    },
    5966: (t1, e, i)=>{
        var s = i(9306), n = i(4117);
        t1.exports = function(t1, e) {
            var i = t1[e];
            return n(i) ? void 0 : s(i);
        };
    },
    6043: (t1, e, i)=>{
        var s = i(9306), n = TypeError, r = function(t1) {
            var e, i;
            this.promise = new t1(function(t1, s) {
                if (void 0 !== e || void 0 !== i) throw new n("Bad Promise constructor");
                e = t1, i = s;
            }), this.resolve = s(e), this.reject = s(i);
        };
        t1.exports.f = function(t1) {
            return new r(t1);
        };
    },
    6080: (t1, e, i)=>{
        var s = i(7476), n = i(9306), r = i(616), a = s(s.bind);
        t1.exports = function(t1, e) {
            return n(t1), void 0 === e ? t1 : r ? a(t1, e) : function() {
                return t1.apply(e, arguments);
            };
        };
    },
    6119: (t1, e, i)=>{
        var s = i(5745), n = i(3392), r = s("keys");
        t1.exports = function(t1) {
            return r[t1] || (r[t1] = n(t1));
        };
    },
    6193: (t1, e, i)=>{
        var s = i(4215);
        t1.exports = "NODE" === s;
    },
    6198: (t1, e, i)=>{
        var s = i(8014);
        t1.exports = function(t1) {
            return s(t1.length);
        };
    },
    6269: (t1)=>{
        t1.exports = {};
    },
    6279: (t1, e, i)=>{
        var s = i(6840);
        t1.exports = function(t1, e, i) {
            for(var n in e)s(t1, n, e[n], i);
            return t1;
        };
    },
    6319: (t1, e, i)=>{
        var s = i(8551), n = i(9539);
        t1.exports = function(t1, e, i, r) {
            try {
                return r ? e(s(i)[0], i[1]) : e(i);
            } catch (a) {
                n(t1, "throw", a);
            }
        };
    },
    6395: (t1)=>{
        t1.exports = !1;
    },
    6518: (t1, e, i)=>{
        var s = i(4576), n = i(7347).f, r = i(6699), a = i(6840), o = i(9433), l = i(7740), h = i(2796);
        t1.exports = function(t1, e) {
            var i, c, d, u, p, g = t1.target, m = t1.global, f = t1.stat;
            if (i = m ? s : f ? s[g] || o(g, {}) : s[g] && s[g].prototype) for(c in e){
                if (u = e[c], d = t1.dontCallGetSet ? (p = n(i, c)) && p.value : i[c], !h(m ? c : g + (f ? "." : "#") + c, t1.forced) && void 0 !== d) {
                    if (typeof u == typeof d) continue;
                    l(u, d);
                }
                (t1.sham || d && d.sham) && r(u, "sham", !0), a(i, c, u, t1);
            }
        };
    },
    6573: (t1, e, i)=>{
        var s = i(3724), n = i(2106), r = i(3238), a = ArrayBuffer.prototype;
        s && !("detached" in a) && n(a, "detached", {
            configurable: !0,
            get: function() {
                return r(this);
            }
        });
    },
    6632: (t1, e, i)=>{
        var s = i(6518), n = i(4576), r = i(9143), a = i(4154), o = n.Uint8Array, l = !o || !o.prototype.setFromBase64 || !function() {
            var t1 = new o([
                255,
                255,
                255,
                255,
                255
            ]);
            try {
                return void t1.setFromBase64("", null);
            } catch (e) {}
            try {
                return void t1.setFromBase64("a");
            } catch (e) {}
            try {
                t1.setFromBase64("MjYyZg===");
            } catch (e) {
                return 50 === t1[0] && 54 === t1[1] && 50 === t1[2] && 255 === t1[3] && 255 === t1[4];
            }
        }();
        o && s({
            target: "Uint8Array",
            proto: !0,
            forced: l
        }, {
            setFromBase64: function(t1) {
                a(this);
                var e = r(t1, arguments.length > 1 ? arguments[1] : void 0, this, this.length);
                return {
                    read: e.read,
                    written: e.written
                };
            }
        });
    },
    6699: (t1, e, i)=>{
        var s = i(3724), n = i(4913), r = i(6980);
        t1.exports = s ? function(t1, e, i) {
            return n.f(t1, e, r(1, i));
        } : function(t1, e, i) {
            return t1[e] = i, t1;
        };
    },
    6706: (t1, e, i)=>{
        var s = i(9504), n = i(9306);
        t1.exports = function(t1, e, i) {
            try {
                return s(n(Object.getOwnPropertyDescriptor(t1, e)[i]));
            } catch (r) {}
        };
    },
    6801: (t1, e, i)=>{
        var s = i(3724), n = i(8686), r = i(4913), a = i(8551), o = i(5397), l = i(1072);
        e.f = s && !n ? Object.defineProperties : function(t1, e) {
            a(t1);
            for(var i, s = o(e), n = l(e), h = n.length, c = 0; h > c;)r.f(t1, i = n[c++], s[i]);
            return t1;
        };
    },
    6823: (t1)=>{
        var e = String;
        t1.exports = function(t1) {
            try {
                return e(t1);
            } catch (i) {
                return "Object";
            }
        };
    },
    6837: (t1)=>{
        var e = TypeError;
        t1.exports = function(t1) {
            if (t1 > 9007199254740991) throw e("Maximum allowed index exceeded");
            return t1;
        };
    },
    6840: (t1, e, i)=>{
        var s = i(4901), n = i(4913), r = i(283), a = i(9433);
        t1.exports = function(t1, e, i, o) {
            o || (o = {});
            var l = o.enumerable, h = void 0 !== o.name ? o.name : e;
            if (s(i) && r(i, h, o), o.global) l ? t1[e] = i : a(e, i);
            else {
                try {
                    o.unsafe ? t1[e] && (l = !0) : delete t1[e];
                } catch (c) {}
                l ? t1[e] = i : n.f(t1, e, {
                    value: i,
                    enumerable: !1,
                    configurable: !o.nonConfigurable,
                    writable: !o.nonWritable
                });
            }
            return t1;
        };
    },
    6955: (t1, e, i)=>{
        var s = i(2140), n = i(4901), r = i(2195), a = i(8227)("toStringTag"), o = Object, l = "Arguments" === r(function() {
            return arguments;
        }());
        t1.exports = s ? r : function(t1) {
            var e, i, s;
            return void 0 === t1 ? "Undefined" : null === t1 ? "Null" : "string" == typeof (i = function(t1, e) {
                try {
                    return t1[e];
                } catch (i) {}
            }(e = o(t1), a)) ? i : l ? r(e) : "Object" === (s = r(e)) && n(e.callee) ? "Arguments" : s;
        };
    },
    6969: (t1, e, i)=>{
        var s = i(2777), n = i(757);
        t1.exports = function(t1) {
            var e = s(t1, "string");
            return n(e) ? e : e + "";
        };
    },
    6980: (t1)=>{
        t1.exports = function(t1, e) {
            return {
                enumerable: !(1 & t1),
                configurable: !(2 & t1),
                writable: !(4 & t1),
                value: e
            };
        };
    },
    7040: (t1, e, i)=>{
        var s = i(4495);
        t1.exports = s && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    7055: (t1, e, i)=>{
        var s = i(9504), n = i(9039), r = i(2195), a = Object, o = s("".split);
        t1.exports = n(function() {
            return !a("z").propertyIsEnumerable(0);
        }) ? function(t1) {
            return "String" === r(t1) ? o(t1, "") : a(t1);
        } : a;
    },
    7080: (t1, e, i)=>{
        var s = i(4402).has;
        t1.exports = function(t1) {
            return s(t1), t1;
        };
    },
    7347: (t1, e, i)=>{
        var s = i(3724), n = i(9565), r = i(8773), a = i(6980), o = i(5397), l = i(6969), h = i(9297), c = i(5917), d = Object.getOwnPropertyDescriptor;
        e.f = s ? d : function(t1, e) {
            if (t1 = o(t1), e = l(e), c) try {
                return d(t1, e);
            } catch (i) {}
            if (h(t1, e)) return a(!n(r.f, t1, e), t1[e]);
        };
    },
    7394: (t1, e, i)=>{
        var s = i(4576), n = i(6706), r = i(2195), a = s.ArrayBuffer, o = s.TypeError;
        t1.exports = a && n(a.prototype, "byteLength", "get") || function(t1) {
            if ("ArrayBuffer" !== r(t1)) throw new o("ArrayBuffer expected");
            return t1.byteLength;
        };
    },
    7416: (t1, e, i)=>{
        var s = i(9039), n = i(8227), r = i(3724), a = i(6395), o = n("iterator");
        t1.exports = !s(function() {
            var t1 = new URL("b?a=1&b=2&c=3", "https://a"), e = t1.searchParams, i = new URLSearchParams("a=1&a=2&b=3"), s = "";
            return t1.pathname = "c%20d", e.forEach(function(t1, i) {
                e.delete("b"), s += i + t1;
            }), i.delete("a", 2), i.delete("b", void 0), a && (!t1.toJSON || !i.has("a", 1) || i.has("a", 2) || !i.has("a", void 0) || i.has("b")) || !e.size && (a || !r) || !e.sort || "https://a/c%20d?a=1&c=3" !== t1.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[o] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== s || "x" !== new URL("https://x", void 0).host;
        });
    },
    7476: (t1, e, i)=>{
        var s = i(2195), n = i(9504);
        t1.exports = function(t1) {
            if ("Function" === s(t1)) return n(t1);
        };
    },
    7566: (t1, e, i)=>{
        var s = i(6840), n = i(9504), r = i(655), a = i(2812), o = URLSearchParams, l = o.prototype, h = n(l.getAll), c = n(l.has), d = new o("a=1");
        !d.has("a", 2) && d.has("a", void 0) || s(l, "has", function(t1) {
            var e = arguments.length, i = e < 2 ? void 0 : arguments[1];
            if (e && void 0 === i) return c(this, t1);
            var s = h(this, t1);
            a(e, 1);
            for(var n = r(i), o = 0; o < s.length;)if (s[o++] === n) return !0;
            return !1;
        }, {
            enumerable: !0,
            unsafe: !0
        });
    },
    7588: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(2652), a = i(9306), o = i(8551), l = i(1767), h = i(9539), c = i(4549)("forEach", TypeError);
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: c
        }, {
            forEach: function(t1) {
                o(this);
                try {
                    a(t1);
                } catch (s) {
                    h(this, "throw", s);
                }
                if (c) return n(c, this, t1);
                var e = l(this), i = 0;
                r(e, function(e) {
                    t1(e, i++);
                }, {
                    IS_RECORD: !0
                });
            }
        });
    },
    7629: (t1, e, i)=>{
        var s = i(6395), n = i(4576), r = i(9433), a = "__core-js_shared__", o = t1.exports = n[a] || r(a, {});
        (o.versions || (o.versions = [])).push({
            version: "3.45.1",
            mode: s ? "pure" : "global",
            copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.45.1/LICENSE",
            source: "https://github.com/zloirock/core-js"
        });
    },
    7642: (t1, e, i)=>{
        var s = i(6518), n = i(3440), r = i(9039);
        s({
            target: "Set",
            proto: !0,
            real: !0,
            forced: !i(4916)("difference", function(t1) {
                return 0 === t1.size;
            }) || r(function() {
                var t1 = {
                    size: 1,
                    has: function() {
                        return !0;
                    },
                    keys: function() {
                        var t1 = 0;
                        return {
                            next: function() {
                                var i = t1++ > 1;
                                return e.has(1) && e.clear(), {
                                    done: i,
                                    value: 2
                                };
                            }
                        };
                    }
                }, e = new Set([
                    1,
                    2,
                    3,
                    4
                ]);
                return 3 !== e.difference(t1).size;
            })
        }, {
            difference: n
        });
    },
    7657: (t1, e, i)=>{
        var s, n, r, a = i(9039), o = i(4901), l = i(34), h = i(2360), c = i(2787), d = i(6840), u = i(8227), p = i(6395), g = u("iterator"), m = !1;
        [].keys && ("next" in (r = [].keys()) ? (n = c(c(r))) !== Object.prototype && (s = n) : m = !0), !l(s) || a(function() {
            var t1 = {};
            return s[g].call(t1) !== t1;
        }) ? s = {} : p && (s = h(s)), o(s[g]) || d(s, g, function() {
            return this;
        }), t1.exports = {
            IteratorPrototype: s,
            BUGGY_SAFARI_ITERATORS: m
        };
    },
    7680: (t1, e, i)=>{
        var s = i(9504);
        t1.exports = s([].slice);
    },
    7696: (t1, e, i)=>{
        var s = i(1291), n = i(8014), r = RangeError;
        t1.exports = function(t1) {
            if (void 0 === t1) return 0;
            var e = s(t1), i = n(e);
            if (e !== i) throw new r("Wrong length or index");
            return i;
        };
    },
    7740: (t1, e, i)=>{
        var s = i(9297), n = i(5031), r = i(7347), a = i(4913);
        t1.exports = function(t1, e, i) {
            for(var o = n(e), l = a.f, h = r.f, c = 0; c < o.length; c++){
                var d = o[c];
                s(t1, d) || i && s(i, d) || l(t1, d, h(e, d));
            }
        };
    },
    7750: (t1, e, i)=>{
        var s = i(4117), n = TypeError;
        t1.exports = function(t1) {
            if (s(t1)) throw new n("Can't call method on " + t1);
            return t1;
        };
    },
    7751: (t1, e, i)=>{
        var s = i(4576), n = i(4901);
        t1.exports = function(t1, e) {
            return arguments.length < 2 ? (i = s[t1], n(i) ? i : void 0) : s[t1] && s[t1][e];
            //TURBOPACK unreachable
            ;
            var i;
        };
    },
    7811: (t1)=>{
        t1.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView;
    },
    7936: (t1, e, i)=>{
        var s = i(6518), n = i(5636);
        n && s({
            target: "ArrayBuffer",
            proto: !0
        }, {
            transferToFixedLength: function() {
                return n(this, arguments.length ? arguments[0] : void 0, !1);
            }
        });
    },
    8004: (t1, e, i)=>{
        var s = i(6518), n = i(9039), r = i(8750);
        s({
            target: "Set",
            proto: !0,
            real: !0,
            forced: !i(4916)("intersection", function(t1) {
                return 2 === t1.size && t1.has(1) && t1.has(2);
            }) || n(function() {
                return "3,2" !== String(Array.from(new Set([
                    1,
                    2,
                    3
                ]).intersection(new Set([
                    3,
                    2
                ]))));
            })
        }, {
            intersection: r
        });
    },
    8014: (t1, e, i)=>{
        var s = i(1291), n = Math.min;
        t1.exports = function(t1) {
            var e = s(t1);
            return e > 0 ? n(e, 9007199254740991) : 0;
        };
    },
    8100: (t1, e, i)=>{
        var s = i(6518), n = i(5636);
        n && s({
            target: "ArrayBuffer",
            proto: !0
        }, {
            transfer: function() {
                return n(this, arguments.length ? arguments[0] : void 0, !0);
            }
        });
    },
    8111: (t1, e, i)=>{
        var s = i(6518), n = i(4576), r = i(679), a = i(8551), o = i(4901), l = i(2787), h = i(2106), c = i(4659), d = i(9039), u = i(9297), p = i(8227), g = i(7657).IteratorPrototype, m = i(3724), f = i(6395), b = "constructor", v = "Iterator", y = p("toStringTag"), w = TypeError, x = n[v], A = f || !o(x) || x.prototype !== g || !d(function() {
            x({});
        }), _ = function() {
            if (r(this, g), l(this) === g) throw new w("Abstract class Iterator not directly constructable");
        }, S = function(t1, e) {
            m ? h(g, t1, {
                configurable: !0,
                get: function() {
                    return e;
                },
                set: function(e) {
                    if (a(this), this === g) throw new w("You can't redefine this property");
                    u(this, t1) ? this[t1] = e : c(this, t1, e);
                }
            }) : g[t1] = e;
        };
        u(g, y) || S(y, v), !A && u(g, b) && g[b] !== Object || S(b, _), _.prototype = g, s({
            global: !0,
            constructor: !0,
            forced: A
        }, {
            Iterator: _
        });
    },
    8227: (t1, e, i)=>{
        var s = i(4576), n = i(5745), r = i(9297), a = i(3392), o = i(4495), l = i(7040), h = s.Symbol, c = n("wks"), d = l ? h.for || h : h && h.withoutSetter || a;
        t1.exports = function(t1) {
            return r(c, t1) || (c[t1] = o && r(h, t1) ? h[t1] : d("Symbol." + t1)), c[t1];
        };
    },
    8235: (t1, e, i)=>{
        var s = i(9504), n = i(9297), r = SyntaxError, a = parseInt, o = String.fromCharCode, l = s("".charAt), h = s("".slice), c = s(/./.exec), d = {
            '\\"': '"',
            "\\\\": "\\",
            "\\/": "/",
            "\\b": "\b",
            "\\f": "\f",
            "\\n": "\n",
            "\\r": "\r",
            "\\t": "\t"
        }, u = /^[\da-f]{4}$/i, p = /^[\u0000-\u001F]$/;
        t1.exports = function(t1, e) {
            for(var i = !0, s = ""; e < t1.length;){
                var g = l(t1, e);
                if ("\\" === g) {
                    var m = h(t1, e, e + 2);
                    if (n(d, m)) s += d[m], e += 2;
                    else {
                        if ("\\u" !== m) throw new r('Unknown escape sequence: "' + m + '"');
                        var f = h(t1, e += 2, e + 4);
                        if (!c(u, f)) throw new r("Bad Unicode escape at: " + e);
                        s += o(a(f, 16)), e += 4;
                    }
                } else {
                    if ('"' === g) {
                        i = !1, e++;
                        break;
                    }
                    if (c(p, g)) throw new r("Bad control character in string literal at: " + e);
                    s += g, e++;
                }
            }
            if (i) throw new r("Unterminated string at: " + e);
            return {
                value: s,
                end: e
            };
        };
    },
    8237: (t1, e, i)=>{
        var s = i(6518), n = i(2652), r = i(9306), a = i(8551), o = i(1767), l = i(9539), h = i(4549), c = i(8745), d = i(9039), u = TypeError, p = d(function() {
            [].keys().reduce(function() {}, void 0);
        }), g = !p && h("reduce", u);
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: p || g
        }, {
            reduce: function(t1) {
                a(this);
                try {
                    r(t1);
                } catch (d) {
                    l(this, "throw", d);
                }
                var e = arguments.length < 2, i = e ? void 0 : arguments[1];
                if (g) return c(g, this, e ? [
                    t1
                ] : [
                    t1,
                    i
                ]);
                var s = o(this), h = 0;
                if (n(s, function(s) {
                    e ? (e = !1, i = s) : i = t1(i, s, h), h++;
                }, {
                    IS_RECORD: !0
                }), e) throw new u("Reduce of empty iterator with no initial value");
                return i;
            }
        });
    },
    8335: (t1, e, i)=>{
        var s = i(6518), n = i(3724), r = i(4576), a = i(7751), o = i(9504), l = i(9565), h = i(4901), c = i(34), d = i(4376), u = i(9297), p = i(655), g = i(6198), m = i(4659), f = i(9039), b = i(8235), v = i(4495), y = r.JSON, w = r.Number, x = r.SyntaxError, A = y && y.parse, _ = a("Object", "keys"), S = Object.getOwnPropertyDescriptor, E = o("".charAt), C = o("".slice), T = o(/./.exec), M = o([].push), D = /^\d$/, P = /^[1-9]$/, k = /^[\d-]$/, I = /^[\t\n\r ]$/, R = function(t1, e, i, s) {
            var n, r, a, o, h, p = t1[e], m = s && p === s.value, f = m && "string" == typeof s.source ? {
                source: s.source
            } : {};
            if (c(p)) {
                var b = d(p), v = m ? s.nodes : b ? [] : {};
                if (b) for(n = v.length, a = g(p), o = 0; o < a; o++)L(p, o, R(p, "" + o, i, o < n ? v[o] : void 0));
                else for(r = _(p), a = g(r), o = 0; o < a; o++)h = r[o], L(p, h, R(p, h, i, u(v, h) ? v[h] : void 0));
            }
            return l(i, t1, e, p, f);
        }, L = function(t1, e, i) {
            if (n) {
                var s = S(t1, e);
                if (s && !s.configurable) return;
            }
            void 0 === i ? delete t1[e] : m(t1, e, i);
        }, B = function(t1, e, i, s) {
            this.value = t1, this.end = e, this.source = i, this.nodes = s;
        }, F = function(t1, e) {
            this.source = t1, this.index = e;
        };
        F.prototype = {
            fork: function(t1) {
                return new F(this.source, t1);
            },
            parse: function() {
                var t1 = this.source, e = this.skip(I, this.index), i = this.fork(e), s = E(t1, e);
                if (T(k, s)) return i.number();
                switch(s){
                    case "{":
                        return i.object();
                    case "[":
                        return i.array();
                    case '"':
                        return i.string();
                    case "t":
                        return i.keyword(!0);
                    case "f":
                        return i.keyword(!1);
                    case "n":
                        return i.keyword(null);
                }
                throw new x('Unexpected character: "' + s + '" at: ' + e);
            },
            node: function(t1, e, i, s, n) {
                return new B(e, s, t1 ? null : C(this.source, i, s), n);
            },
            object: function() {
                for(var t1 = this.source, e = this.index + 1, i = !1, s = {}, n = {}; e < t1.length;){
                    if (e = this.until([
                        '"',
                        "}"
                    ], e), "}" === E(t1, e) && !i) {
                        e++;
                        break;
                    }
                    var r = this.fork(e).string(), a = r.value;
                    e = r.end, e = this.until([
                        ":"
                    ], e) + 1, e = this.skip(I, e), r = this.fork(e).parse(), m(n, a, r), m(s, a, r.value), e = this.until([
                        ",",
                        "}"
                    ], r.end);
                    var o = E(t1, e);
                    if ("," === o) i = !0, e++;
                    else if ("}" === o) {
                        e++;
                        break;
                    }
                }
                return this.node(1, s, this.index, e, n);
            },
            array: function() {
                for(var t1 = this.source, e = this.index + 1, i = !1, s = [], n = []; e < t1.length;){
                    if (e = this.skip(I, e), "]" === E(t1, e) && !i) {
                        e++;
                        break;
                    }
                    var r = this.fork(e).parse();
                    if (M(n, r), M(s, r.value), e = this.until([
                        ",",
                        "]"
                    ], r.end), "," === E(t1, e)) i = !0, e++;
                    else if ("]" === E(t1, e)) {
                        e++;
                        break;
                    }
                }
                return this.node(1, s, this.index, e, n);
            },
            string: function() {
                var t1 = this.index, e = b(this.source, this.index + 1);
                return this.node(0, e.value, t1, e.end);
            },
            number: function() {
                var t1 = this.source, e = this.index, i = e;
                if ("-" === E(t1, i) && i++, "0" === E(t1, i)) i++;
                else {
                    if (!T(P, E(t1, i))) throw new x("Failed to parse number at: " + i);
                    i = this.skip(D, i + 1);
                }
                if (("." === E(t1, i) && (i = this.skip(D, i + 1)), "e" === E(t1, i) || "E" === E(t1, i)) && (i++, "+" !== E(t1, i) && "-" !== E(t1, i) || i++, i === (i = this.skip(D, i)))) throw new x("Failed to parse number's exponent value at: " + i);
                return this.node(0, w(C(t1, e, i)), e, i);
            },
            keyword: function(t1) {
                var e = "" + t1, i = this.index, s = i + e.length;
                if (C(this.source, i, s) !== e) throw new x("Failed to parse value at: " + i);
                return this.node(0, t1, i, s);
            },
            skip: function(t1, e) {
                for(var i = this.source; e < i.length && T(t1, E(i, e)); e++);
                return e;
            },
            until: function(t1, e) {
                e = this.skip(I, e);
                for(var i = E(this.source, e), s = 0; s < t1.length; s++)if (t1[s] === i) return e;
                throw new x('Unexpected character: "' + i + '" at: ' + e);
            }
        };
        var O = f(function() {
            var t1, e = "9007199254740993";
            return A(e, function(e, i, s) {
                t1 = s.source;
            }), t1 !== e;
        }), N = v && !f(function() {
            return 1 / A("-0 \t") != -1 / 0;
        });
        s({
            target: "JSON",
            stat: !0,
            forced: O
        }, {
            parse: function(t1, e) {
                return N && !h(e) ? A(t1) : function(t1, e) {
                    t1 = p(t1);
                    var i = new F(t1, 0), s = i.parse(), n = s.value, r = i.skip(I, s.end);
                    if (r < t1.length) throw new x('Unexpected extra character: "' + E(t1, r) + '" after the parsed data at: ' + r);
                    return h(e) ? R({
                        "": n
                    }, "", e, s) : n;
                }(t1, e);
            }
        });
    },
    8469: (t1, e, i)=>{
        var s = i(9504), n = i(507), r = i(4402), a = r.Set, o = r.proto, l = s(o.forEach), h = s(o.keys), c = h(new a).next;
        t1.exports = function(t1, e, i) {
            return i ? n({
                iterator: h(t1),
                next: c
            }, e) : l(t1, e);
        };
    },
    8480: (t1, e, i)=>{
        var s = i(1828), n = i(8727).concat("length", "prototype");
        e.f = Object.getOwnPropertyNames || function(t1) {
            return s(t1, n);
        };
    },
    8527: (t1, e, i)=>{
        var s = i(7080), n = i(4402).has, r = i(5170), a = i(3789), o = i(507), l = i(9539);
        t1.exports = function(t1) {
            var e = s(this), i = a(t1);
            if (r(e) < i.size) return !1;
            var h = i.getIterator();
            return !1 !== o(h, function(t1) {
                if (!n(e, t1)) return l(h, "normal", !1);
            });
        };
    },
    8551: (t1, e, i)=>{
        var s = i(34), n = String, r = TypeError;
        t1.exports = function(t1) {
            if (s(t1)) return t1;
            throw new r(n(t1) + " is not an object");
        };
    },
    8574: (t1, e, i)=>{
        var s = i(9504), n = Error, r = s("".replace), a = String(new n("zxcasd").stack), o = /\n\s*at [^:]*:[^\n]*/, l = o.test(a);
        t1.exports = function(t1, e) {
            if (l && "string" == typeof t1 && !n.prepareStackTrace) for(; e--;)t1 = r(t1, o, "");
            return t1;
        };
    },
    8622: (t1, e, i)=>{
        var s = i(4576), n = i(4901), r = s.WeakMap;
        t1.exports = n(r) && /native code/.test(String(r));
    },
    8646: (t1, e, i)=>{
        var s = i(9565), n = i(8551), r = i(1767), a = i(851);
        t1.exports = function(t1, e) {
            e && "string" == typeof t1 || n(t1);
            var i = a(t1);
            return r(n(void 0 !== i ? s(i, t1) : t1));
        };
    },
    8686: (t1, e, i)=>{
        var s = i(3724), n = i(9039);
        t1.exports = s && n(function() {
            return 42 !== Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype;
        });
    },
    8721: (t1, e, i)=>{
        var s = i(3724), n = i(9504), r = i(2106), a = URLSearchParams.prototype, o = n(a.forEach);
        s && !("size" in a) && r(a, "size", {
            get: function() {
                var t1 = 0;
                return o(this, function() {
                    t1++;
                }), t1;
            },
            configurable: !0,
            enumerable: !0
        });
    },
    8727: (t1)=>{
        t1.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf"
        ];
    },
    8745: (t1, e, i)=>{
        var s = i(616), n = Function.prototype, r = n.apply, a = n.call;
        t1.exports = "object" == typeof Reflect && Reflect.apply || (s ? a.bind(r) : function() {
            return a.apply(r, arguments);
        });
    },
    8750: (t1, e, i)=>{
        var s = i(7080), n = i(4402), r = i(5170), a = i(3789), o = i(8469), l = i(507), h = n.Set, c = n.add, d = n.has;
        t1.exports = function(t1) {
            var e = s(this), i = a(t1), n = new h;
            return r(e) > i.size ? l(i.getIterator(), function(t1) {
                d(e, t1) && c(n, t1);
            }) : o(e, function(t1) {
                i.includes(t1) && c(n, t1);
            }), n;
        };
    },
    8773: (t1, e)=>{
        var i = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, n = s && !i.call({
            1: 2
        }, 1);
        e.f = n ? function(t1) {
            var e = s(this, t1);
            return !!e && e.enumerable;
        } : i;
    },
    8981: (t1, e, i)=>{
        var s = i(7750), n = Object;
        t1.exports = function(t1) {
            return n(s(t1));
        };
    },
    9039: (t1)=>{
        t1.exports = function(t1) {
            try {
                return !!t1();
            } catch (e) {
                return !0;
            }
        };
    },
    9143: (t1, e, i)=>{
        var s = i(4576), n = i(9504), r = i(3972), a = i(3463), o = i(9297), l = i(2804), h = i(944), c = i(5169), d = l.c2i, u = l.c2iUrl, p = s.SyntaxError, g = s.TypeError, m = n("".charAt), f = function(t1, e) {
            for(var i = t1.length; e < i; e++){
                var s = m(t1, e);
                if (" " !== s && "\t" !== s && "\n" !== s && "\f" !== s && "\r" !== s) break;
            }
            return e;
        }, b = function(t1, e, i) {
            var s = t1.length;
            s < 4 && (t1 += 2 === s ? "AA" : "A");
            var n = (e[m(t1, 0)] << 18) + (e[m(t1, 1)] << 12) + (e[m(t1, 2)] << 6) + e[m(t1, 3)], r = [
                n >> 16 & 255,
                n >> 8 & 255,
                255 & n
            ];
            if (2 === s) {
                if (i && 0 !== r[1]) throw new p("Extra bits");
                return [
                    r[0]
                ];
            }
            if (3 === s) {
                if (i && 0 !== r[2]) throw new p("Extra bits");
                return [
                    r[0],
                    r[1]
                ];
            }
            return r;
        }, v = function(t1, e, i) {
            for(var s = e.length, n = 0; n < s; n++)t1[i + n] = e[n];
            return i + s;
        };
        t1.exports = function(t1, e, i, s) {
            a(t1), r(e);
            var n = "base64" === h(e) ? d : u, l = e ? e.lastChunkHandling : void 0;
            if (void 0 === l && (l = "loose"), "loose" !== l && "strict" !== l && "stop-before-partial" !== l) throw new g("Incorrect `lastChunkHandling` option");
            i && c(i.buffer);
            var y = t1.length, w = i || [], x = 0, A = 0, _ = "", S = 0;
            if (s) for(;;){
                if ((S = f(t1, S)) === y) {
                    if (_.length > 0) {
                        if ("stop-before-partial" === l) break;
                        if ("loose" !== l) throw new p("Missing padding");
                        if (1 === _.length) throw new p("Malformed padding: exactly one additional character");
                        x = v(w, b(_, n, !1), x);
                    }
                    A = y;
                    break;
                }
                var E = m(t1, S);
                if (++S, "=" === E) {
                    if (_.length < 2) throw new p("Padding is too early");
                    if (S = f(t1, S), 2 === _.length) {
                        if (S === y) {
                            if ("stop-before-partial" === l) break;
                            throw new p("Malformed padding: only one =");
                        }
                        "=" === m(t1, S) && (++S, S = f(t1, S));
                    }
                    if (S < y) throw new p("Unexpected character after padding");
                    x = v(w, b(_, n, "strict" === l), x), A = y;
                    break;
                }
                if (!o(n, E)) throw new p("Unexpected character");
                var C = s - x;
                if (1 === C && 2 === _.length || 2 === C && 3 === _.length) break;
                if (4 === (_ += E).length && (x = v(w, b(_, n, !1), x), _ = "", A = S, x === s)) break;
            }
            return {
                bytes: w,
                read: A,
                written: x
            };
        };
    },
    9286: (t1, e, i)=>{
        var s = i(4402), n = i(8469), r = s.Set, a = s.add;
        t1.exports = function(t1) {
            var e = new r;
            return n(t1, function(t1) {
                a(e, t1);
            }), e;
        };
    },
    9297: (t1, e, i)=>{
        var s = i(9504), n = i(8981), r = s({}.hasOwnProperty);
        t1.exports = Object.hasOwn || function(t1, e) {
            return r(n(t1), e);
        };
    },
    9306: (t1, e, i)=>{
        var s = i(4901), n = i(6823), r = TypeError;
        t1.exports = function(t1) {
            if (s(t1)) return t1;
            throw new r(n(t1) + " is not a function");
        };
    },
    9314: (t1, e, i)=>{
        var s = i(6518), n = i(9565), r = i(8551), a = i(1767), o = i(4149), l = i(9590), h = i(9539), c = i(9462), d = i(684), u = i(4549), p = i(6395), g = !p && !d("drop", 0), m = !p && !g && u("drop", RangeError), f = p || g || m, b = c(function() {
            for(var t1, e = this.iterator, i = this.next; this.remaining;)if (this.remaining--, t1 = r(n(i, e)), this.done = !!t1.done) return;
            if (t1 = r(n(i, e)), !(this.done = !!t1.done)) return t1.value;
        });
        s({
            target: "Iterator",
            proto: !0,
            real: !0,
            forced: f
        }, {
            drop: function(t1) {
                var e;
                r(this);
                try {
                    e = l(o(+t1));
                } catch (i) {
                    h(this, "throw", i);
                }
                return m ? n(m, this, e) : new b(a(this), {
                    remaining: e
                });
            }
        });
    },
    9429: (t1, e, i)=>{
        var s = i(4576), n = i(6193);
        t1.exports = function(t1) {
            if (n) {
                try {
                    return s.process.getBuiltinModule(t1);
                } catch (e) {}
                try {
                    return Function('return require("' + t1 + '")')();
                } catch (e) {}
            }
        };
    },
    9432: (t1, e, i)=>{
        i(5213);
    },
    9433: (t1, e, i)=>{
        var s = i(4576), n = Object.defineProperty;
        t1.exports = function(t1, e) {
            try {
                n(s, t1, {
                    value: e,
                    configurable: !0,
                    writable: !0
                });
            } catch (i) {
                s[t1] = e;
            }
            return e;
        };
    },
    9462: (t1, e, i)=>{
        var s = i(9565), n = i(2360), r = i(6699), a = i(6279), o = i(8227), l = i(1181), h = i(5966), c = i(7657).IteratorPrototype, d = i(2529), u = i(9539), p = i(1385), g = o("toStringTag"), m = "IteratorHelper", f = "WrapForValidIterator", b = "normal", v = "throw", y = l.set, w = function(t1) {
            var e = l.getterFor(t1 ? f : m);
            return a(n(c), {
                next: function() {
                    var i = e(this);
                    if (t1) return i.nextHandler();
                    if (i.done) return d(void 0, !0);
                    try {
                        var s = i.nextHandler();
                        return i.returnHandlerResult ? s : d(s, i.done);
                    } catch (n) {
                        throw i.done = !0, n;
                    }
                },
                return: function() {
                    var i = e(this), n = i.iterator;
                    if (i.done = !0, t1) {
                        var r = h(n, "return");
                        return r ? s(r, n) : d(void 0, !0);
                    }
                    if (i.inner) try {
                        u(i.inner.iterator, b);
                    } catch (a) {
                        return u(n, v, a);
                    }
                    if (i.openIters) try {
                        p(i.openIters, b);
                    } catch (a) {
                        return u(n, v, a);
                    }
                    return n && u(n, b), d(void 0, !0);
                }
            });
        }, x = w(!0), A = w(!1);
        r(A, g, "Iterator Helper"), t1.exports = function(t1, e, i) {
            var s = function(s, n) {
                n ? (n.iterator = s.iterator, n.next = s.next) : n = s, n.type = e ? f : m, n.returnHandlerResult = !!i, n.nextHandler = t1, n.counter = 0, n.done = !1, y(this, n);
            };
            return s.prototype = e ? x : A, s;
        };
    },
    9486: (t1, e, i)=>{
        var s = i(6518), n = i(4576), r = i(9504), a = i(3972), o = i(4154), l = i(5169), h = i(2804), c = i(944), d = h.i2c, u = h.i2cUrl, p = r("".charAt), g = n.Uint8Array, m = !g || !g.prototype.toBase64 || !function() {
            try {
                (new g).toBase64(null);
            } catch (t1) {
                return !0;
            }
        }();
        g && s({
            target: "Uint8Array",
            proto: !0,
            forced: m
        }, {
            toBase64: function() {
                var t1 = o(this), e = arguments.length ? a(arguments[0]) : void 0, i = "base64" === c(e) ? d : u, s = !!e && !!e.omitPadding;
                l(this.buffer);
                for(var n, r = "", h = 0, g = t1.length, m = function(t1) {
                    return p(i, n >> 6 * t1 & 63);
                }; h + 2 < g; h += 3)n = (t1[h] << 16) + (t1[h + 1] << 8) + t1[h + 2], r += m(3) + m(2) + m(1) + m(0);
                return h + 2 === g ? (n = (t1[h] << 16) + (t1[h + 1] << 8), r += m(3) + m(2) + m(1) + (s ? "" : "=")) : h + 1 === g && (n = t1[h] << 16, r += m(3) + m(2) + (s ? "" : "==")), r;
            }
        });
    },
    9504: (t1, e, i)=>{
        var s = i(616), n = Function.prototype, r = n.call, a = s && n.bind.bind(r, r);
        t1.exports = s ? a : function(t1) {
            return function() {
                return r.apply(t1, arguments);
            };
        };
    },
    9519: (t1, e, i)=>{
        var s, n, r = i(4576), a = i(2839), o = r.process, l = r.Deno, h = o && o.versions || l && l.version, c = h && h.v8;
        c && (n = (s = c.split("."))[0] > 0 && s[0] < 4 ? 1 : +(s[0] + s[1])), !n && a && (!(s = a.match(/Edge\/(\d+)/)) || s[1] >= 74) && (s = a.match(/Chrome\/(\d+)/)) && (n = +s[1]), t1.exports = n;
    },
    9539: (t1, e, i)=>{
        var s = i(9565), n = i(8551), r = i(5966);
        t1.exports = function(t1, e, i) {
            var a, o;
            n(t1);
            try {
                if (!(a = r(t1, "return"))) {
                    if ("throw" === e) throw i;
                    return i;
                }
                a = s(a, t1);
            } catch (l) {
                o = !0, a = l;
            }
            if ("throw" === e) throw i;
            if (o) throw a;
            return n(a), i;
        };
    },
    9565: (t1, e, i)=>{
        var s = i(616), n = Function.prototype.call;
        t1.exports = s ? n.bind(n) : function() {
            return n.apply(n, arguments);
        };
    },
    9577: (t1, e, i)=>{
        var s = i(9928), n = i(4644), r = i(1108), a = i(1291), o = i(5854), l = n.aTypedArray, h = n.getTypedArrayConstructor, c = n.exportTypedArrayMethod, d = function() {
            try {
                new Int8Array(1).with(2, {
                    valueOf: function() {
                        throw 8;
                    }
                });
            } catch (t1) {
                return 8 === t1;
            }
        }(), u = d && function() {
            try {
                new Int8Array(1).with(-.5, 1);
            } catch (t1) {
                return !0;
            }
        }();
        c("with", {
            with: function(t1, e) {
                var i = l(this), n = a(t1), c = r(i) ? o(e) : +e;
                return s(i, h(i), n, c);
            }
        }.with, !d || u);
    },
    9590: (t1, e, i)=>{
        var s = i(1291), n = RangeError;
        t1.exports = function(t1) {
            var e = s(t1);
            if (e < 0) throw new n("The argument can't be less than 0");
            return e;
        };
    },
    9617: (t1, e, i)=>{
        var s = i(5397), n = i(5610), r = i(6198), a = function(t1) {
            return function(e, i, a) {
                var o = s(e), l = r(o);
                if (0 === l) return !t1 && -1;
                var h, c = n(a, l);
                if (t1 && i != i) {
                    for(; l > c;)if ((h = o[c++]) != h) return !0;
                } else for(; l > c; c++)if ((t1 || c in o) && o[c] === i) return t1 || c || 0;
                return !t1 && -1;
            };
        };
        t1.exports = {
            includes: a(!0),
            indexOf: a(!1)
        };
    },
    9631: (t1, e, i)=>{
        i(9486);
    },
    9797: (t1, e, i)=>{
        i(4226);
    },
    9835: (t1)=>{
        t1.exports = function(t1) {
            try {
                var e = new Set, i = {
                    size: 0,
                    has: function() {
                        return !0;
                    },
                    keys: function() {
                        return Object.defineProperty({}, "next", {
                            get: function() {
                                return e.clear(), e.add(4), function() {
                                    return {
                                        done: !0
                                    };
                                };
                            }
                        });
                    }
                }, s = e[t1](i);
                return 1 === s.size && 4 === s.values().next().value;
            } catch (n) {
                return !1;
            }
        };
    },
    9928: (t1, e, i)=>{
        var s = i(6198), n = i(1291), r = RangeError;
        t1.exports = function(t1, e, i, a) {
            var o = s(t1), l = n(i), h = l < 0 ? o + l : l;
            if (h >= o || h < 0) throw new r("Incorrect index");
            for(var c = new e(o), d = 0; d < o; d++)c[d] = d === h ? a : t1[d];
            return c;
        };
    }
}, A = {};
function _(t1) {
    var e = A[t1];
    if (void 0 !== e) return e.exports;
    var i = A[t1] = {
        exports: {}
    };
    return x[t1].call(i.exports, i, i.exports, _), i.exports;
}
_.d = (t1, e)=>{
    for(var i in e)_.o(e, i) && !_.o(t1, i) && Object.defineProperty(t1, i, {
        enumerable: !0,
        get: e[i]
    });
}, _.o = (t1, e)=>Object.prototype.hasOwnProperty.call(t1, e), _(4114), _(6573), _(8100), _(7936), _(8111), _(8237), _(1689), _(9577), _(4235), _(9432), _(1549), _(9797), _(9631), _(5623), _(4979), _(5781);
const S = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type), E = [
    .001,
    0,
    0,
    .001,
    0,
    0
], C = 1.35, T = 1, M = 2, D = 4, P = 16, k = 32, I = 64, R = 128, L = 256, B = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_FORMS: 2,
    ENABLE_STORAGE: 3
}, F = "pdfjs_internal_editor_", O = {
    DISABLE: -1,
    NONE: 0,
    FREETEXT: 3,
    HIGHLIGHT: 9,
    STAMP: 13,
    INK: 15,
    POPUP: 16,
    SIGNATURE: 101,
    COMMENT: 102
}, N = {
    RESIZE: 1,
    CREATE: 2,
    FREETEXT_SIZE: 11,
    FREETEXT_COLOR: 12,
    FREETEXT_OPACITY: 13,
    INK_COLOR: 21,
    INK_THICKNESS: 22,
    INK_OPACITY: 23,
    HIGHLIGHT_COLOR: 31,
    HIGHLIGHT_THICKNESS: 32,
    HIGHLIGHT_FREE: 33,
    HIGHLIGHT_SHOW_ALL: 34,
    DRAW_STEP: 41
}, U = {
    PRINT: 4,
    MODIFY_CONTENTS: 8,
    COPY: 16,
    MODIFY_ANNOTATIONS: 32,
    FILL_INTERACTIVE_FORMS: 256,
    COPY_FOR_ACCESSIBILITY: 512,
    ASSEMBLE: 1024,
    PRINT_HIGH_QUALITY: 2048
}, z = 0, H = 1, j = 2, $ = 3, V = 3, G = 4, W = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3
}, q = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    SOUND: 18,
    MOVIE: 19,
    WIDGET: 20,
    SCREEN: 21,
    PRINTERMARK: 22,
    TRAPNET: 23,
    WATERMARK: 24,
    THREED: 25,
    REDACT: 26
}, X = 1, Y = 2, K = 3, Q = 4, J = 5, Z = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5
}, tt = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91,
    setStrokeTransparent: 92,
    setFillTransparent: 93,
    rawFillPath: 94
}, et = 0, it = 1, st = 2, nt = 3, rt = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2
};
let at = Z.WARNINGS;
function ot() {
    return at;
}
function lt(t1) {
    at >= Z.INFOS && console.info(`Info: ${t1}`);
}
function ht(t1) {
    at >= Z.WARNINGS && console.warn(`Warning: ${t1}`);
}
function ct(t1) {
    throw new Error(t1);
}
function dt(t1, e) {
    t1 || ct(e);
}
function ut(t1, e = null, i = null) {
    if (!t1) return null;
    if (i && "string" == typeof t1) {
        if (i.addDefaultProtocol && t1.startsWith("www.")) {
            const e = t1.match(/\./g);
            e?.length >= 2 && (t1 = `http://${t1}`);
        }
        if (i.tryConvertEncoding) try {
            t1 = decodeURIComponent(escape(t1));
        } catch  {}
    }
    const s = e ? URL.parse(t1, e) : URL.parse(t1);
    return function(t1) {
        switch(t1?.protocol){
            case "http:":
            case "https:":
            case "ftp:":
            case "mailto:":
            case "tel:":
                return !0;
            default:
                return !1;
        }
    }(s) ? s : null;
}
function pt(t1, e, i = !1) {
    const s = URL.parse(t1);
    return s ? (s.hash = e, s.href) : i && ut(t1, "http://example.com") ? t1.split("#", 1)[0] + "" + (e ? `#${e}` : "") : "";
}
function gt(t1, e, i, s = !1) {
    return Object.defineProperty(t1, e, {
        value: i,
        enumerable: !s,
        configurable: !0,
        writable: !1
    }), i;
}
const mt = function() {
    function t1(t1, e) {
        this.message = t1, this.name = e;
    }
    return t1.prototype = new Error, t1.constructor = t1, t1;
}();
let ft = class extends mt {
    constructor(t1, e){
        super(t1, "PasswordException"), this.code = e;
    }
}, bt = class extends mt {
    constructor(t1, e){
        super(t1, "UnknownErrorException"), this.details = e;
    }
}, vt = class extends mt {
    constructor(t1){
        super(t1, "InvalidPDFException");
    }
}, yt = class extends mt {
    constructor(t1, e, i){
        super(t1, "ResponseException"), this.status = e, this.missing = i;
    }
}, wt = class extends mt {
    constructor(t1){
        super(t1, "FormatError");
    }
}, xt = class extends mt {
    constructor(t1){
        super(t1, "AbortException");
    }
};
function At(t1) {
    "object" == typeof t1 && void 0 !== t1?.length || ct("Invalid argument for bytesToString");
    const e = t1.length, i = 8192;
    if (e < i) return String.fromCharCode.apply(null, t1);
    const s = [];
    for(let n = 0; n < e; n += i){
        const r = Math.min(n + i, e), a = t1.subarray(n, r);
        s.push(String.fromCharCode.apply(null, a));
    }
    return s.join("");
}
function _t(t1) {
    "string" != typeof t1 && ct("Invalid argument for stringToBytes");
    const e = t1.length, i = new Uint8Array(e);
    for(let s = 0; s < e; ++s)i[s] = 255 & t1.charCodeAt(s);
    return i;
}
class St {
    static get isLittleEndian() {
        return gt(this, "isLittleEndian", function() {
            const t1 = new Uint8Array(4);
            return t1[0] = 1, 1 === new Uint32Array(t1.buffer, 0, 1)[0];
        }());
    }
    static get isEvalSupported() {
        return gt(this, "isEvalSupported", function() {
            try {
                return new Function(""), !0;
            } catch  {
                return !1;
            }
        }());
    }
    static get isOffscreenCanvasSupported() {
        return gt(this, "isOffscreenCanvasSupported", "undefined" != typeof OffscreenCanvas);
    }
    static get isImageDecoderSupported() {
        return gt(this, "isImageDecoderSupported", "undefined" != typeof ImageDecoder);
    }
    static get platform() {
        const { platform: t1, userAgent: e } = navigator;
        return gt(this, "platform", {
            isAndroid: e.includes("Android"),
            isLinux: t1.includes("Linux"),
            isMac: t1.includes("Mac"),
            isWindows: t1.includes("Win"),
            isFirefox: e.includes("Firefox")
        });
    }
    static get isCSSRoundSupported() {
        return gt(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
    }
}
const Et = Array.from(Array(256).keys(), (t1)=>t1.toString(16).padStart(2, "0"));
class Ct {
    static makeHexColor(t1, e, i) {
        return `#${Et[t1]}${Et[e]}${Et[i]}`;
    }
    static domMatrixToTransform(t1) {
        return [
            t1.a,
            t1.b,
            t1.c,
            t1.d,
            t1.e,
            t1.f
        ];
    }
    static scaleMinMax(t1, e) {
        let i;
        t1[0] ? (t1[0] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t1[0], e[2] *= t1[0], t1[3] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t1[3], e[3] *= t1[3]) : (i = e[0], e[0] = e[1], e[1] = i, i = e[2], e[2] = e[3], e[3] = i, t1[1] < 0 && (i = e[1], e[1] = e[3], e[3] = i), e[1] *= t1[1], e[3] *= t1[1], t1[2] < 0 && (i = e[0], e[0] = e[2], e[2] = i), e[0] *= t1[2], e[2] *= t1[2]), e[0] += t1[4], e[1] += t1[5], e[2] += t1[4], e[3] += t1[5];
    }
    static transform(t1, e) {
        return [
            t1[0] * e[0] + t1[2] * e[1],
            t1[1] * e[0] + t1[3] * e[1],
            t1[0] * e[2] + t1[2] * e[3],
            t1[1] * e[2] + t1[3] * e[3],
            t1[0] * e[4] + t1[2] * e[5] + t1[4],
            t1[1] * e[4] + t1[3] * e[5] + t1[5]
        ];
    }
    static multiplyByDOMMatrix(t1, e) {
        return [
            t1[0] * e.a + t1[2] * e.b,
            t1[1] * e.a + t1[3] * e.b,
            t1[0] * e.c + t1[2] * e.d,
            t1[1] * e.c + t1[3] * e.d,
            t1[0] * e.e + t1[2] * e.f + t1[4],
            t1[1] * e.e + t1[3] * e.f + t1[5]
        ];
    }
    static applyTransform(t1, e, i = 0) {
        const s = t1[i], n = t1[i + 1];
        t1[i] = s * e[0] + n * e[2] + e[4], t1[i + 1] = s * e[1] + n * e[3] + e[5];
    }
    static applyTransformToBezier(t1, e, i = 0) {
        const s = e[0], n = e[1], r = e[2], a = e[3], o = e[4], l = e[5];
        for(let h = 0; h < 6; h += 2){
            const e = t1[i + h], c = t1[i + h + 1];
            t1[i + h] = e * s + c * r + o, t1[i + h + 1] = e * n + c * a + l;
        }
    }
    static applyInverseTransform(t1, e) {
        const i = t1[0], s = t1[1], n = e[0] * e[3] - e[1] * e[2];
        t1[0] = (i * e[3] - s * e[2] + e[2] * e[5] - e[4] * e[3]) / n, t1[1] = (-i * e[1] + s * e[0] + e[4] * e[1] - e[5] * e[0]) / n;
    }
    static axialAlignedBoundingBox(t1, e, i) {
        const s = e[0], n = e[1], r = e[2], a = e[3], o = e[4], l = e[5], h = t1[0], c = t1[1], d = t1[2], u = t1[3];
        let p = s * h + o, g = p, m = s * d + o, f = m, b = a * c + l, v = b, y = a * u + l, w = y;
        if (0 !== n || 0 !== r) {
            const t1 = n * h, e = n * d, i = r * c, s = r * u;
            p += i, f += i, m += s, g += s, b += t1, w += t1, y += e, v += e;
        }
        i[0] = Math.min(i[0], p, m, g, f), i[1] = Math.min(i[1], b, y, v, w), i[2] = Math.max(i[2], p, m, g, f), i[3] = Math.max(i[3], b, y, v, w);
    }
    static inverseTransform(t1) {
        const e = t1[0] * t1[3] - t1[1] * t1[2];
        return [
            t1[3] / e,
            -t1[1] / e,
            -t1[2] / e,
            t1[0] / e,
            (t1[2] * t1[5] - t1[4] * t1[3]) / e,
            (t1[4] * t1[1] - t1[5] * t1[0]) / e
        ];
    }
    static singularValueDecompose2dScale(t1, e) {
        const i = t1[0], s = t1[1], n = t1[2], r = t1[3], a = i ** 2 + s ** 2, o = i * n + s * r, l = n ** 2 + r ** 2, h = (a + l) / 2, c = Math.sqrt(h ** 2 - (a * l - o ** 2));
        e[0] = Math.sqrt(h + c || 1), e[1] = Math.sqrt(h - c || 1);
    }
    static normalizeRect(t1) {
        const e = t1.slice(0);
        return t1[0] > t1[2] && (e[0] = t1[2], e[2] = t1[0]), t1[1] > t1[3] && (e[1] = t1[3], e[3] = t1[1]), e;
    }
    static intersect(t1, e) {
        const i = Math.max(Math.min(t1[0], t1[2]), Math.min(e[0], e[2])), s = Math.min(Math.max(t1[0], t1[2]), Math.max(e[0], e[2]));
        if (i > s) return null;
        const n = Math.max(Math.min(t1[1], t1[3]), Math.min(e[1], e[3])), r = Math.min(Math.max(t1[1], t1[3]), Math.max(e[1], e[3]));
        return n > r ? null : [
            i,
            n,
            s,
            r
        ];
    }
    static pointBoundingBox(t1, e, i) {
        i[0] = Math.min(i[0], t1), i[1] = Math.min(i[1], e), i[2] = Math.max(i[2], t1), i[3] = Math.max(i[3], e);
    }
    static rectBoundingBox(t1, e, i, s, n) {
        n[0] = Math.min(n[0], t1, i), n[1] = Math.min(n[1], e, s), n[2] = Math.max(n[2], t1, i), n[3] = Math.max(n[3], e, s);
    }
    static #t(t1, e, i, s, n, r, a, o, l, h) {
        if (l <= 0 || l >= 1) return;
        const c = 1 - l, d = l * l, u = d * l, p = c * (c * (c * t1 + 3 * l * e) + 3 * d * i) + u * s, g = c * (c * (c * n + 3 * l * r) + 3 * d * a) + u * o;
        h[0] = Math.min(h[0], p), h[1] = Math.min(h[1], g), h[2] = Math.max(h[2], p), h[3] = Math.max(h[3], g);
    }
    static #e(t1, e, i, s, n, r, a, o, l, h, c, d) {
        if (Math.abs(l) < 1e-12) return void (Math.abs(h) >= 1e-12 && this.#t(t1, e, i, s, n, r, a, o, -c / h, d));
        const u = h ** 2 - 4 * c * l;
        if (u < 0) return;
        const p = Math.sqrt(u), g = 2 * l;
        this.#t(t1, e, i, s, n, r, a, o, (-h + p) / g, d), this.#t(t1, e, i, s, n, r, a, o, (-h - p) / g, d);
    }
    static bezierBoundingBox(t1, e, i, s, n, r, a, o, l) {
        l[0] = Math.min(l[0], t1, a), l[1] = Math.min(l[1], e, o), l[2] = Math.max(l[2], t1, a), l[3] = Math.max(l[3], e, o), this.#e(t1, i, n, a, e, s, r, o, 3 * (3 * (i - n) - t1 + a), 6 * (t1 - 2 * i + n), 3 * (i - t1), l), this.#e(t1, i, n, a, e, s, r, o, 3 * (3 * (s - r) - e + o), 6 * (e - 2 * s + r), 3 * (s - e), l);
    }
}
let Tt = null, Mt = null;
function Dt(t1) {
    return Tt || (Tt = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, Mt = new Map([
        [
            "ﬅ",
            "ſt"
        ]
    ])), t1.replaceAll(Tt, (t1, e, i)=>e ? e.normalize("NFKC") : Mt.get(i));
}
function Pt() {
    if ("function" == typeof crypto.randomUUID) return crypto.randomUUID();
    const t1 = new Uint8Array(32);
    return crypto.getRandomValues(t1), At(t1);
}
const kt = "pdfjs_internal_id_";
function It(t1, e, i) {
    return Math.min(Math.max(t1, e), i);
}
function Rt(t1) {
    return Uint8Array.prototype.toBase64 ? t1.toBase64() : btoa(At(t1));
}
"function" != typeof Math.sumPrecise && (Math.sumPrecise = function(t1) {
    return t1.reduce((t1, e)=>t1 + e, 0);
}), "function" != typeof AbortSignal.any && (AbortSignal.any = function(t1) {
    const e = new AbortController, { signal: i } = e;
    for (const s of t1)if (s.aborted) return e.abort(s.reason), i;
    for (const s of t1)s.addEventListener("abort", ()=>{
        e.abort(s.reason);
    }, {
        signal: i
    });
    return i;
}), _(1701), _(4603), _(7566), _(8721);
class Lt {
    static textContent(t1) {
        const e = [], i = {
            items: e,
            styles: Object.create(null)
        };
        return function t1(i) {
            if (!i) return;
            let s = null;
            const n = i.name;
            if ("#text" === n) s = i.value;
            else {
                if (!Lt.shouldBuildText(n)) return;
                i?.attributes?.textContent ? s = i.attributes.textContent : i.value && (s = i.value);
            }
            if (null !== s && e.push({
                str: s
            }), i.children) for (const e of i.children)t1(e);
        }(t1), i;
    }
    static shouldBuildText(t1) {
        return !("textarea" === t1 || "input" === t1 || "option" === t1 || "select" === t1);
    }
}
class Bt {
    static setupStorage(t1, e, i, s, n) {
        const r = s.getValue(e, {
            value: null
        });
        switch(i.name){
            case "textarea":
                if (null !== r.value && (t1.textContent = r.value), "print" === n) break;
                t1.addEventListener("input", (t1)=>{
                    s.setValue(e, {
                        value: t1.target.value
                    });
                });
                break;
            case "input":
                if ("radio" === i.attributes.type || "checkbox" === i.attributes.type) {
                    if (r.value === i.attributes.xfaOn ? t1.setAttribute("checked", !0) : r.value === i.attributes.xfaOff && t1.removeAttribute("checked"), "print" === n) break;
                    t1.addEventListener("change", (t1)=>{
                        s.setValue(e, {
                            value: t1.target.checked ? t1.target.getAttribute("xfaOn") : t1.target.getAttribute("xfaOff")
                        });
                    });
                } else {
                    if (null !== r.value && t1.setAttribute("value", r.value), "print" === n) break;
                    t1.addEventListener("input", (t1)=>{
                        s.setValue(e, {
                            value: t1.target.value
                        });
                    });
                }
                break;
            case "select":
                if (null !== r.value) {
                    t1.setAttribute("value", r.value);
                    for (const t1 of i.children)t1.attributes.value === r.value ? t1.attributes.selected = !0 : t1.attributes.hasOwnProperty("selected") && delete t1.attributes.selected;
                }
                t1.addEventListener("input", (t1)=>{
                    const i = t1.target.options, n = -1 === i.selectedIndex ? "" : i[i.selectedIndex].value;
                    s.setValue(e, {
                        value: n
                    });
                });
        }
    }
    static setAttributes({ html: t1, element: e, storage: i = null, intent: s, linkService: n }) {
        const { attributes: r } = e, a = t1 instanceof HTMLAnchorElement;
        "radio" === r.type && (r.name = `${r.name}-${s}`);
        for (const [o, l] of Object.entries(r))if (null != l) switch(o){
            case "class":
                l.length && t1.setAttribute(o, l.join(" "));
                break;
            case "dataId":
                break;
            case "id":
                t1.setAttribute("data-element-id", l);
                break;
            case "style":
                Object.assign(t1.style, l);
                break;
            case "textContent":
                t1.textContent = l;
                break;
            default:
                (!a || "href" !== o && "newWindow" !== o) && t1.setAttribute(o, l);
        }
        a && n.addLinkAttributes(t1, r.href, r.newWindow), i && r.dataId && this.setupStorage(t1, r.dataId, e, i);
    }
    static render(t1) {
        const e = t1.annotationStorage, i = t1.linkService, s = t1.xfaHtml, n = t1.intent || "display", r = document.createElement(s.name);
        s.attributes && this.setAttributes({
            html: r,
            element: s,
            intent: n,
            linkService: i
        });
        const a = "richText" !== n, o = t1.div;
        if (o.append(r), t1.viewport) {
            const e = `matrix(${t1.viewport.transform.join(",")})`;
            o.style.transform = e;
        }
        a && o.setAttribute("class", "xfaLayer xfaFont");
        const l = [];
        if (0 === s.children.length) {
            if (s.value) {
                const t1 = document.createTextNode(s.value);
                r.append(t1), a && Lt.shouldBuildText(s.name) && l.push(t1);
            }
            return {
                textDivs: l
            };
        }
        const h = [
            [
                s,
                -1,
                r
            ]
        ];
        for(; h.length > 0;){
            const [t1, s, r] = h.at(-1);
            if (s + 1 === t1.children.length) {
                h.pop();
                continue;
            }
            const o = t1.children[++h.at(-1)[1]];
            if (null === o) continue;
            const { name: c } = o;
            if ("#text" === c) {
                const t1 = document.createTextNode(o.value);
                l.push(t1), r.append(t1);
                continue;
            }
            const d = o?.attributes?.xmlns ? document.createElementNS(o.attributes.xmlns, c) : document.createElement(c);
            if (r.append(d), o.attributes && this.setAttributes({
                html: d,
                element: o,
                storage: e,
                intent: n,
                linkService: i
            }), o.children?.length > 0) h.push([
                o,
                -1,
                d
            ]);
            else if (o.value) {
                const t1 = document.createTextNode(o.value);
                a && Lt.shouldBuildText(c) && l.push(t1), d.append(t1);
            }
        }
        for (const c of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))c.setAttribute("readOnly", !0);
        return {
            textDivs: l
        };
    }
    static update(t1) {
        const e = `matrix(${t1.viewport.transform.join(",")})`;
        t1.div.style.transform = e, t1.div.hidden = !1;
    }
}
const Ft = "http://www.w3.org/2000/svg";
class Ot {
    static CSS = 96;
    static PDF = 72;
    static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
async function Nt(t1, e = "text") {
    if (Wt(t1, document.baseURI)) {
        const i = await fetch(t1);
        if (!i.ok) throw new Error(i.statusText);
        switch(e){
            case "arraybuffer":
                return i.arrayBuffer();
            case "blob":
                return i.blob();
            case "json":
                return i.json();
        }
        return i.text();
    }
    return new Promise((i, s)=>{
        const n = new XMLHttpRequest;
        n.open("GET", t1, !0), n.responseType = e, n.onreadystatechange = ()=>{
            if (n.readyState === XMLHttpRequest.DONE) if (200 !== n.status && 0 !== n.status) s(new Error(n.statusText));
            else {
                switch(e){
                    case "arraybuffer":
                    case "blob":
                    case "json":
                        return void i(n.response);
                }
                i(n.responseText);
            }
        }, n.send(null);
    });
}
class Ut {
    constructor({ viewBox: t1, userUnit: e, scale: i, rotation: s, offsetX: n = 0, offsetY: r = 0, dontFlip: a = !1 }){
        this.viewBox = t1, this.userUnit = e, this.scale = i, this.rotation = s, this.offsetX = n, this.offsetY = r, i *= e;
        const o = (t1[2] + t1[0]) / 2, l = (t1[3] + t1[1]) / 2;
        let h, c, d, u, p, g, m, f;
        switch((s %= 360) < 0 && (s += 360), s){
            case 180:
                h = -1, c = 0, d = 0, u = 1;
                break;
            case 90:
                h = 0, c = 1, d = 1, u = 0;
                break;
            case 270:
                h = 0, c = -1, d = -1, u = 0;
                break;
            case 0:
                h = 1, c = 0, d = 0, u = -1;
                break;
            default:
                throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
        }
        a && (d = -d, u = -u), 0 === h ? (p = Math.abs(l - t1[1]) * i + n, g = Math.abs(o - t1[0]) * i + r, m = (t1[3] - t1[1]) * i, f = (t1[2] - t1[0]) * i) : (p = Math.abs(o - t1[0]) * i + n, g = Math.abs(l - t1[1]) * i + r, m = (t1[2] - t1[0]) * i, f = (t1[3] - t1[1]) * i), this.transform = [
            h * i,
            c * i,
            d * i,
            u * i,
            p - h * i * o - d * i * l,
            g - c * i * o - u * i * l
        ], this.width = m, this.height = f;
    }
    get rawDims() {
        const t1 = this.viewBox;
        return gt(this, "rawDims", {
            pageWidth: t1[2] - t1[0],
            pageHeight: t1[3] - t1[1],
            pageX: t1[0],
            pageY: t1[1]
        });
    }
    clone({ scale: t1 = this.scale, rotation: e = this.rotation, offsetX: i = this.offsetX, offsetY: s = this.offsetY, dontFlip: n = !1 } = {}) {
        return new Ut({
            viewBox: this.viewBox.slice(),
            userUnit: this.userUnit,
            scale: t1,
            rotation: e,
            offsetX: i,
            offsetY: s,
            dontFlip: n
        });
    }
    convertToViewportPoint(t1, e) {
        const i = [
            t1,
            e
        ];
        return Ct.applyTransform(i, this.transform), i;
    }
    convertToViewportRectangle(t1) {
        const e = [
            t1[0],
            t1[1]
        ];
        Ct.applyTransform(e, this.transform);
        const i = [
            t1[2],
            t1[3]
        ];
        return Ct.applyTransform(i, this.transform), [
            e[0],
            e[1],
            i[0],
            i[1]
        ];
    }
    convertToPdfPoint(t1, e) {
        const i = [
            t1,
            e
        ];
        return Ct.applyInverseTransform(i, this.transform), i;
    }
}
class zt extends mt {
    constructor(t1, e = 0){
        super(t1, "RenderingCancelledException"), this.extraDelay = e;
    }
}
function Ht(t1) {
    const e = t1.length;
    let i = 0;
    for(; i < e && "" === t1[i].trim();)i++;
    return "data:" === t1.substring(i, i + 5).toLowerCase();
}
function jt(t1) {
    return "string" == typeof t1 && /\.pdf$/i.test(t1);
}
function $t(t1) {
    return [t1] = t1.split(/[#?]/, 1), t1.substring(t1.lastIndexOf("/") + 1);
}
function Vt(t1, e = "document.pdf") {
    if ("string" != typeof t1) return e;
    if (Ht(t1)) return ht('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), e;
    const i = ((t1)=>{
        try {
            return new URL(t1);
        } catch  {
            try {
                return new URL(decodeURIComponent(t1));
            } catch  {
                try {
                    return new URL(t1, "https://foo.bar");
                } catch  {
                    try {
                        return new URL(decodeURIComponent(t1), "https://foo.bar");
                    } catch  {
                        return null;
                    }
                }
            }
        }
    })(t1);
    if (!i) return e;
    const s = (t1)=>{
        try {
            let e = decodeURIComponent(t1);
            return e.includes("/") ? (e = e.split("/").at(-1), e.test(/^\.pdf$/i) ? e : t1) : e;
        } catch  {
            return t1;
        }
    }, n = /\.pdf$/i, r = i.pathname.split("/").at(-1);
    if (n.test(r)) return s(r);
    if (i.searchParams.size > 0) {
        const t1 = Array.from(i.searchParams.values()).reverse();
        for (const i of t1)if (n.test(i)) return s(i);
        const e = Array.from(i.searchParams.keys()).reverse();
        for (const i of e)if (n.test(i)) return s(i);
    }
    if (i.hash) {
        const t1 = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(i.hash);
        if (t1) return s(t1[0]);
    }
    return e;
}
class Gt {
    started = Object.create(null);
    times = [];
    time(t1) {
        t1 in this.started && ht(`Timer is already running for ${t1}`), this.started[t1] = Date.now();
    }
    timeEnd(t1) {
        t1 in this.started || ht(`Timer has not been started for ${t1}`), this.times.push({
            name: t1,
            start: this.started[t1],
            end: Date.now()
        }), delete this.started[t1];
    }
    toString() {
        const t1 = [];
        let e = 0;
        for (const { name: i } of this.times)e = Math.max(i.length, e);
        for (const { name: i, start: s, end: n } of this.times)t1.push(`${i.padEnd(e)} ${n - s}ms\n`);
        return t1.join("");
    }
}
function Wt(t1, e) {
    const i = e ? URL.parse(t1, e) : URL.parse(t1);
    return "http:" === i?.protocol || "https:" === i?.protocol;
}
function qt(t1) {
    t1.preventDefault();
}
function Xt(t1) {
    t1.preventDefault(), t1.stopPropagation();
}
class Yt {
    static #i;
    static toDateObject(t1) {
        if (t1 instanceof Date) return t1;
        if (!t1 || "string" != typeof t1) return null;
        this.#i ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
        const e = this.#i.exec(t1);
        if (!e) return null;
        const i = parseInt(e[1], 10);
        let s = parseInt(e[2], 10);
        s = s >= 1 && s <= 12 ? s - 1 : 0;
        let n = parseInt(e[3], 10);
        n = n >= 1 && n <= 31 ? n : 1;
        let r = parseInt(e[4], 10);
        r = r >= 0 && r <= 23 ? r : 0;
        let a = parseInt(e[5], 10);
        a = a >= 0 && a <= 59 ? a : 0;
        let o = parseInt(e[6], 10);
        o = o >= 0 && o <= 59 ? o : 0;
        const l = e[7] || "Z";
        let h = parseInt(e[8], 10);
        h = h >= 0 && h <= 23 ? h : 0;
        let c = parseInt(e[9], 10) || 0;
        return c = c >= 0 && c <= 59 ? c : 0, "-" === l ? (r += h, a += c) : "+" === l && (r -= h, a -= c), new Date(Date.UTC(i, s, n, r, a, o));
    }
}
function Kt(t1, { scale: e = 1, rotation: i = 0 }) {
    const { width: s, height: n } = t1.attributes.style, r = [
        0,
        0,
        parseInt(s),
        parseInt(n)
    ];
    return new Ut({
        viewBox: r,
        userUnit: 1,
        scale: e,
        rotation: i
    });
}
function Qt(t1) {
    if (t1.startsWith("#")) {
        const e = parseInt(t1.slice(1), 16);
        return [
            (16711680 & e) >> 16,
            (65280 & e) >> 8,
            255 & e
        ];
    }
    return t1.startsWith("rgb(") ? t1.slice(4, -1).split(",").map((t1)=>parseInt(t1)) : t1.startsWith("rgba(") ? t1.slice(5, -1).split(",").map((t1)=>parseInt(t1)).slice(0, 3) : (ht(`Not a valid color format: "${t1}"`), [
        0,
        0,
        0
    ]);
}
function Jt(t1) {
    const { a: e, b: i, c: s, d: n, e: r, f: a } = t1.getTransform();
    return [
        e,
        i,
        s,
        n,
        r,
        a
    ];
}
function Zt(t1) {
    const { a: e, b: i, c: s, d: n, e: r, f: a } = t1.getTransform().invertSelf();
    return [
        e,
        i,
        s,
        n,
        r,
        a
    ];
}
function te(t1, e, i = !1, s = !0) {
    if (e instanceof Ut) {
        const { pageWidth: s, pageHeight: n } = e.rawDims, { style: r } = t1, a = St.isCSSRoundSupported, o = `var(--total-scale-factor) * ${s}px`, l = `var(--total-scale-factor) * ${n}px`, h = a ? `round(down, ${o}, var(--scale-round-x))` : `calc(${o})`, c = a ? `round(down, ${l}, var(--scale-round-y))` : `calc(${l})`;
        i && e.rotation % 180 != 0 ? (r.width = c, r.height = h) : (r.width = h, r.height = c);
    }
    s && t1.setAttribute("data-main-rotation", e.rotation);
}
class ee {
    constructor(){
        const { pixelRatio: t1 } = ee;
        this.sx = t1, this.sy = t1;
    }
    get scaled() {
        return 1 !== this.sx || 1 !== this.sy;
    }
    get symmetric() {
        return this.sx === this.sy;
    }
    limitCanvas(t1, e, i, s, n = -1) {
        let r = 1 / 0, a = 1 / 0, o = 1 / 0;
        (i = ee.capPixels(i, n)) > 0 && (r = Math.sqrt(i / (t1 * e))), -1 !== s && (a = s / t1, o = s / e);
        const l = Math.min(r, a, o);
        return (this.sx > l || this.sy > l) && (this.sx = l, this.sy = l, !0);
    }
    static get pixelRatio() {
        return globalThis.devicePixelRatio || 1;
    }
    static capPixels(t1, e) {
        if (e >= 0) {
            const i = Math.ceil(window.screen.availWidth * window.screen.availHeight * this.pixelRatio ** 2 * (1 + e / 100));
            return t1 > 0 ? Math.min(t1, i) : i;
        }
        return t1;
    }
}
const ie = [
    "image/apng",
    "image/avif",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/webp",
    "image/x-icon"
];
class se {
    static get isDarkMode() {
        return gt(this, "isDarkMode", !!window?.matchMedia?.("(prefers-color-scheme: dark)").matches);
    }
}
class ne {
    static get commentForegroundColor() {
        const t1 = document.createElement("span");
        t1.classList.add("comment", "sidebar");
        const { style: e } = t1;
        e.width = e.height = "0", e.display = "none", e.color = "var(--comment-fg-color)", document.body.append(t1);
        const { color: i } = window.getComputedStyle(t1);
        return t1.remove(), gt(this, "commentForegroundColor", Qt(i));
    }
}
function re(t1, e, i, s) {
    const n = 255 * (1 - (s = Math.min(Math.max(s ?? 1, 0), 1)));
    return [
        t1 = Math.round(t1 * s + n),
        e = Math.round(e * s + n),
        i = Math.round(i * s + n)
    ];
}
function ae(t1, e) {
    const i = t1[0] / 255, s = t1[1] / 255, n = t1[2] / 255, r = Math.max(i, s, n), a = Math.min(i, s, n), o = (r + a) / 2;
    if (r === a) e[0] = e[1] = 0;
    else {
        const t1 = r - a;
        switch(e[1] = o < .5 ? t1 / (r + a) : t1 / (2 - r - a), r){
            case i:
                e[0] = 60 * ((s - n) / t1 + (s < n ? 6 : 0));
                break;
            case s:
                e[0] = 60 * ((n - i) / t1 + 2);
                break;
            case n:
                e[0] = 60 * ((i - s) / t1 + 4);
        }
    }
    e[2] = o;
}
function oe(t1, e) {
    const i = t1[0], s = t1[1], n = t1[2], r = (1 - Math.abs(2 * n - 1)) * s, a = r * (1 - Math.abs(i / 60 % 2 - 1)), o = n - r / 2;
    switch(Math.floor(i / 60)){
        case 0:
            e[0] = r + o, e[1] = a + o, e[2] = o;
            break;
        case 1:
            e[0] = a + o, e[1] = r + o, e[2] = o;
            break;
        case 2:
            e[0] = o, e[1] = r + o, e[2] = a + o;
            break;
        case 3:
            e[0] = o, e[1] = a + o, e[2] = r + o;
            break;
        case 4:
            e[0] = a + o, e[1] = o, e[2] = r + o;
            break;
        case 5:
        case 6:
            e[0] = r + o, e[1] = o, e[2] = a + o;
    }
}
function le(t1) {
    return t1 <= .03928 ? t1 / 12.92 : ((t1 + .055) / 1.055) ** 2.4;
}
function he(t1, e, i) {
    oe(t1, i), i.map(le);
    const s = .2126 * i[0] + .7152 * i[1] + .0722 * i[2];
    oe(e, i), i.map(le);
    const n = .2126 * i[0] + .7152 * i[1] + .0722 * i[2];
    return s > n ? (s + .05) / (n + .05) : (n + .05) / (s + .05);
}
const ce = new Map;
function de(t1, e) {
    const i = t1[0] + 256 * t1[1] + 65536 * t1[2] + 16777216 * e[0] + 4294967296 * e[1] + 1099511627776 * e[2];
    let s = ce.get(i);
    if (s) return s;
    const n = new Float32Array(9), r = n.subarray(0, 3), a = n.subarray(3, 6);
    ae(t1, a);
    const o = n.subarray(6, 9);
    ae(e, o);
    const l = o[2] < .5, h = l ? 12 : 4.5;
    if (a[2] = l ? Math.sqrt(a[2]) : 1 - Math.sqrt(1 - a[2]), he(a, o, r) < h) {
        let t1, e;
        l ? (t1 = a[2], e = 1) : (t1 = 0, e = a[2]);
        const i = .005;
        for(; e - t1 > i;){
            const i = a[2] = (t1 + e) / 2;
            l === he(a, o, r) < h ? t1 = i : e = i;
        }
        a[2] = l ? e : t1;
    }
    return oe(a, r), s = Ct.makeHexColor(Math.round(255 * r[0]), Math.round(255 * r[1]), Math.round(255 * r[2])), ce.set(i, s), s;
}
function ue({ html: t1, dir: e, className: i }, s) {
    const n = document.createDocumentFragment();
    if ("string" == typeof t1) {
        const i = document.createElement("p");
        i.dir = e || "auto";
        const s = t1.split(/(?:\r\n?|\n)/);
        for(let t1 = 0, e = s.length; t1 < e; ++t1){
            const n = s[t1];
            i.append(document.createTextNode(n)), t1 < e - 1 && i.append(document.createElement("br"));
        }
        n.append(i);
    } else Bt.render({
        xfaHtml: t1,
        div: n,
        intent: "richText"
    });
    n.firstChild.classList.add("richText", i), s.append(n);
}
_(4972), _(4628), _(7642), _(8004), _(3853), _(5876), _(2475), _(5024), _(1698), _(9314), _(1148), _(3579), _(8335);
class pe {
    #s = null;
    #n = null;
    #r;
    #a = null;
    #o = null;
    #l = null;
    #h = null;
    #c = null;
    static #d = null;
    constructor(t1){
        this.#r = t1, pe.#d ||= Object.freeze({
            freetext: "pdfjs-editor-remove-freetext-button",
            highlight: "pdfjs-editor-remove-highlight-button",
            ink: "pdfjs-editor-remove-ink-button",
            stamp: "pdfjs-editor-remove-stamp-button",
            signature: "pdfjs-editor-remove-signature-button"
        });
    }
    render() {
        const t1 = this.#s = document.createElement("div");
        t1.classList.add("editToolbar", "hidden"), t1.setAttribute("role", "toolbar");
        const e = this.#r._uiManager._signal;
        e instanceof AbortSignal && !e.aborted && (t1.addEventListener("contextmenu", qt, {
            signal: e
        }), t1.addEventListener("pointerdown", pe.#u, {
            signal: e
        }));
        const i = this.#a = document.createElement("div");
        i.className = "buttons", t1.append(i);
        const s = this.#r.toolbarPosition;
        if (s) {
            const { style: e } = t1, i = "ltr" === this.#r._uiManager.direction ? 1 - s[0] : s[0];
            e.insetInlineEnd = 100 * i + "%", e.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`;
        }
        return t1;
    }
    get div() {
        return this.#s;
    }
    static #u(t1) {
        t1.stopPropagation();
    }
    #p(t1) {
        this.#r._focusEventsAllowed = !1, Xt(t1);
    }
    #g(t1) {
        this.#r._focusEventsAllowed = !0, Xt(t1);
    }
    #m(t1) {
        const e = this.#r._uiManager._signal;
        return e instanceof AbortSignal && !e.aborted && (t1.addEventListener("focusin", this.#p.bind(this), {
            capture: !0,
            signal: e
        }), t1.addEventListener("focusout", this.#g.bind(this), {
            capture: !0,
            signal: e
        }), t1.addEventListener("contextmenu", qt, {
            signal: e
        }), !0);
    }
    hide() {
        this.#s.classList.add("hidden"), this.#n?.hideDropdown();
    }
    show() {
        this.#s.classList.remove("hidden"), this.#o?.shown(), this.#l?.shown();
    }
    addDeleteButton() {
        const { editorType: t1, _uiManager: e } = this.#r, i = document.createElement("button");
        i.classList.add("basic", "deleteButton"), i.tabIndex = 0, i.setAttribute("data-l10n-id", pe.#d[t1]), this.#m(i) && i.addEventListener("click", (t1)=>{
            e.delete();
        }, {
            signal: e._signal
        }), this.#a.append(i);
    }
    get #f() {
        const t1 = document.createElement("div");
        return t1.className = "divider", t1;
    }
    async addAltText(t1) {
        const e = await t1.render();
        this.#m(e), this.#a.append(e, this.#f), this.#o = t1;
    }
    addComment(t1, e = null) {
        if (this.#l) return;
        const i = t1.renderForToolbar();
        if (!i) return;
        this.#m(i);
        const s = this.#h = this.#f;
        e ? (this.#a.insertBefore(i, e), this.#a.insertBefore(s, e)) : this.#a.append(i, s), this.#l = t1, t1.toolbar = this;
    }
    addColorPicker(t1) {
        if (this.#n) return;
        this.#n = t1;
        const e = t1.renderButton();
        this.#m(e), this.#a.append(e, this.#f);
    }
    async addEditSignatureButton(t1) {
        const e = this.#c = await t1.renderEditButton(this.#r);
        this.#m(e), this.#a.append(e, this.#f);
    }
    removeButton(t1) {
        if ("comment" === t1) this.#l?.removeToolbarCommentButton(), this.#l = null, this.#h?.remove(), this.#h = null;
    }
    async addButton(t1, e) {
        switch(t1){
            case "colorPicker":
                this.addColorPicker(e);
                break;
            case "altText":
                await this.addAltText(e);
                break;
            case "editSignature":
                await this.addEditSignatureButton(e);
                break;
            case "delete":
                this.addDeleteButton();
                break;
            case "comment":
                this.addComment(e);
        }
    }
    async addButtonBefore(t1, e, i) {
        const s = this.#a.querySelector(i);
        s && "comment" === t1 && this.addComment(e, s);
    }
    updateEditSignatureButton(t1) {
        this.#c && (this.#c.title = t1);
    }
    remove() {
        this.#s.remove(), this.#n?.destroy(), this.#n = null;
    }
}
class ge {
    #a = null;
    #s = null;
    #b;
    constructor(t1){
        this.#b = t1;
    }
    #v() {
        const t1 = this.#s = document.createElement("div");
        t1.className = "editToolbar", t1.setAttribute("role", "toolbar");
        const e = this.#b._signal;
        e instanceof AbortSignal && !e.aborted && t1.addEventListener("contextmenu", qt, {
            signal: e
        });
        const i = this.#a = document.createElement("div");
        return i.className = "buttons", t1.append(i), this.#b.hasCommentManager() && this.#y("commentButton", "pdfjs-comment-floating-button", "pdfjs-comment-floating-button-label", ()=>{
            this.#b.commentSelection("floating_button");
        }), this.#y("highlightButton", "pdfjs-highlight-floating-button1", "pdfjs-highlight-floating-button-label", ()=>{
            this.#b.highlightSelection("floating_button");
        }), t1;
    }
    #w(t1, e) {
        let i = 0, s = 0;
        for (const n of t1){
            const t1 = n.y + n.height;
            if (t1 < i) continue;
            const r = n.x + (e ? n.width : 0);
            t1 > i ? (s = r, i = t1) : e ? r > s && (s = r) : r < s && (s = r);
        }
        return [
            e ? 1 - s : s,
            i
        ];
    }
    show(t1, e, i) {
        const [s, n] = this.#w(e, i), { style: r } = this.#s ||= this.#v();
        t1.append(this.#s), r.insetInlineEnd = 100 * s + "%", r.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`;
    }
    hide() {
        this.#s.remove();
    }
    #y(t1, e, i, s) {
        const n = document.createElement("button");
        n.classList.add("basic", t1), n.tabIndex = 0, n.setAttribute("data-l10n-id", e);
        const r = document.createElement("span");
        n.append(r), r.className = "visuallyHidden", r.setAttribute("data-l10n-id", i);
        const a = this.#b._signal;
        a instanceof AbortSignal && !a.aborted && (n.addEventListener("contextmenu", qt, {
            signal: a
        }), n.addEventListener("click", s, {
            signal: a
        })), this.#a.append(n);
    }
}
function me(t1, e, i) {
    for (const s of i)e.addEventListener(s, t1[s].bind(t1));
}
class fe {
    #x = 0;
    get id() {
        return `${F}${this.#x++}`;
    }
}
class be {
    #A = Pt();
    #x = 0;
    #_ = null;
    static get _isSVGFittingCanvas() {
        const t1 = new OffscreenCanvas(1, 3).getContext("2d", {
            willReadFrequently: !0
        }), e = new Image;
        e.src = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
        return gt(this, "_isSVGFittingCanvas", e.decode().then(()=>(t1.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3), 0 === new Uint32Array(t1.getImageData(0, 0, 1, 1).data.buffer)[0])));
    }
    async #S(t1, e) {
        this.#_ ||= new Map;
        let i = this.#_.get(t1);
        if (null === i) return null;
        if (i?.bitmap) return i.refCounter += 1, i;
        try {
            let t1;
            if (i ||= {
                bitmap: null,
                id: `image_${this.#A}_${this.#x++}`,
                refCounter: 0,
                isSvg: !1
            }, "string" == typeof e ? (i.url = e, t1 = await Nt(e, "blob")) : e instanceof File ? t1 = i.file = e : e instanceof Blob && (t1 = e), "image/svg+xml" === t1.type) {
                const e = be._isSVGFittingCanvas, s = new FileReader, n = new Image, r = new Promise((t1, r)=>{
                    n.onload = ()=>{
                        i.bitmap = n, i.isSvg = !0, t1();
                    }, s.onload = async ()=>{
                        const t1 = i.svgUrl = s.result;
                        n.src = await e ? `${t1}#svgView(preserveAspectRatio(none))` : t1;
                    }, n.onerror = s.onerror = r;
                });
                s.readAsDataURL(t1), await r;
            } else i.bitmap = await createImageBitmap(t1);
            i.refCounter = 1;
        } catch (s) {
            ht(s), i = null;
        }
        return this.#_.set(t1, i), i && this.#_.set(i.id, i), i;
    }
    async getFromFile(t1) {
        const { lastModified: e, name: i, size: s, type: n } = t1;
        return this.#S(`${e}_${i}_${s}_${n}`, t1);
    }
    async getFromUrl(t1) {
        return this.#S(t1, t1);
    }
    async getFromBlob(t1, e) {
        const i = await e;
        return this.#S(t1, i);
    }
    async getFromId(t1) {
        this.#_ ||= new Map;
        const e = this.#_.get(t1);
        if (!e) return null;
        if (e.bitmap) return e.refCounter += 1, e;
        if (e.file) return this.getFromFile(e.file);
        if (e.blobPromise) {
            const { blobPromise: t1 } = e;
            return delete e.blobPromise, this.getFromBlob(e.id, t1);
        }
        return this.getFromUrl(e.url);
    }
    getFromCanvas(t1, e) {
        this.#_ ||= new Map;
        let i = this.#_.get(t1);
        if (i?.bitmap) return i.refCounter += 1, i;
        const s = new OffscreenCanvas(e.width, e.height);
        return s.getContext("2d").drawImage(e, 0, 0), i = {
            bitmap: s.transferToImageBitmap(),
            id: `image_${this.#A}_${this.#x++}`,
            refCounter: 1,
            isSvg: !1
        }, this.#_.set(t1, i), this.#_.set(i.id, i), i;
    }
    getSvgUrl(t1) {
        const e = this.#_.get(t1);
        return e?.isSvg ? e.svgUrl : null;
    }
    deleteId(t1) {
        this.#_ ||= new Map;
        const e = this.#_.get(t1);
        if (!e) return;
        if (e.refCounter -= 1, 0 !== e.refCounter) return;
        const { bitmap: i } = e;
        if (!e.url && !e.file) {
            const t1 = new OffscreenCanvas(i.width, i.height);
            t1.getContext("bitmaprenderer").transferFromImageBitmap(i), e.blobPromise = t1.convertToBlob();
        }
        i.close?.(), e.bitmap = null;
    }
    isValidId(t1) {
        return t1.startsWith(`image_${this.#A}_`);
    }
}
class ve {
    #E = [];
    #C = !1;
    #T;
    #M = -1;
    constructor(t1 = 128){
        this.#T = t1;
    }
    add({ cmd: t1, undo: e, post: i, mustExec: s, type: n = NaN, overwriteIfSameType: r = !1, keepUndo: a = !1 }) {
        if (s && t1(), this.#C) return;
        const o = {
            cmd: t1,
            undo: e,
            post: i,
            type: n
        };
        if (-1 === this.#M) return this.#E.length > 0 && (this.#E.length = 0), this.#M = 0, void this.#E.push(o);
        if (r && this.#E[this.#M].type === n) return a && (o.undo = this.#E[this.#M].undo), void (this.#E[this.#M] = o);
        const l = this.#M + 1;
        l === this.#T ? this.#E.splice(0, 1) : (this.#M = l, l < this.#E.length && this.#E.splice(l)), this.#E.push(o);
    }
    undo() {
        if (-1 === this.#M) return;
        this.#C = !0;
        const { undo: t1, post: e } = this.#E[this.#M];
        t1(), e?.(), this.#C = !1, this.#M -= 1;
    }
    redo() {
        if (this.#M < this.#E.length - 1) {
            this.#M += 1, this.#C = !0;
            const { cmd: t1, post: e } = this.#E[this.#M];
            t1(), e?.(), this.#C = !1;
        }
    }
    hasSomethingToUndo() {
        return -1 !== this.#M;
    }
    hasSomethingToRedo() {
        return this.#M < this.#E.length - 1;
    }
    cleanType(t1) {
        if (-1 !== this.#M) {
            for(let e = this.#M; e >= 0; e--)if (this.#E[e].type !== t1) return this.#E.splice(e + 1, this.#M - e), void (this.#M = e);
            this.#E.length = 0, this.#M = -1;
        }
    }
    destroy() {
        this.#E = null;
    }
}
class ye {
    constructor(t1){
        this.buffer = [], this.callbacks = new Map, this.allKeys = new Set;
        const { isMac: e } = St.platform;
        for (const [i, s, n = {}] of t1)for (const t1 of i){
            const i = t1.startsWith("mac+");
            e && i ? (this.callbacks.set(t1.slice(4), {
                callback: s,
                options: n
            }), this.allKeys.add(t1.split("+").at(-1))) : e || i || (this.callbacks.set(t1, {
                callback: s,
                options: n
            }), this.allKeys.add(t1.split("+").at(-1)));
        }
    }
    #D(t1) {
        t1.altKey && this.buffer.push("alt"), t1.ctrlKey && this.buffer.push("ctrl"), t1.metaKey && this.buffer.push("meta"), t1.shiftKey && this.buffer.push("shift"), this.buffer.push(t1.key);
        const e = this.buffer.join("+");
        return this.buffer.length = 0, e;
    }
    exec(t1, e) {
        if (!this.allKeys.has(e.key)) return;
        const i = this.callbacks.get(this.#D(e));
        if (!i) return;
        const { callback: s, options: { bubbles: n = !1, args: r = [], checker: a = null } } = i;
        a && !a(t1, e) || (s.bind(t1, ...r, e)(), n || Xt(e));
    }
}
class we {
    static _colorsMapping = new Map([
        [
            "CanvasText",
            [
                0,
                0,
                0
            ]
        ],
        [
            "Canvas",
            [
                255,
                255,
                255
            ]
        ]
    ]);
    get _colors() {
        const t1 = new Map([
            [
                "CanvasText",
                null
            ],
            [
                "Canvas",
                null
            ]
        ]);
        return function(t1) {
            const e = document.createElement("span");
            e.style.visibility = "hidden", e.style.colorScheme = "only light", document.body.append(e);
            for (const i of t1.keys()){
                e.style.color = i;
                const s = window.getComputedStyle(e).color;
                t1.set(i, Qt(s));
            }
            e.remove();
        }(t1), gt(this, "_colors", t1);
    }
    convert(t1) {
        const e = Qt(t1);
        if (!window.matchMedia("(forced-colors: active)").matches) return e;
        for (const [i, s] of this._colors)if (s.every((t1, i)=>t1 === e[i])) return we._colorsMapping.get(i);
        return e;
    }
    getHexCode(t1) {
        const e = this._colors.get(t1);
        return e ? Ct.makeHexColor(...e) : t1;
    }
}
class xe {
    #P = new AbortController;
    #k = null;
    #I = null;
    #R = new Map;
    #L = new Map;
    #B = null;
    #F = null;
    #O = null;
    #N = new ve;
    #U = null;
    #z = null;
    #H = null;
    #j = 0;
    #$ = new Set;
    #V = null;
    #G = null;
    #W = new Set;
    _editorUndoBar = null;
    #q = !1;
    #X = !1;
    #Y = !1;
    #K = null;
    #Q = null;
    #J = null;
    #Z = null;
    #tt = !1;
    #et = null;
    #it = new fe;
    #st = !1;
    #nt = !1;
    #rt = !1;
    #at = null;
    #ot = null;
    #lt = null;
    #ht = null;
    #ct = null;
    #dt = O.NONE;
    #ut = new Set;
    #pt = null;
    #gt = null;
    #mt = null;
    #ft = null;
    #bt = null;
    #vt = {
        isEditing: !1,
        isEmpty: !0,
        hasSomethingToUndo: !1,
        hasSomethingToRedo: !1,
        hasSelectedEditor: !1,
        hasSelectedText: !1
    };
    #yt = [
        0,
        0
    ];
    #wt = null;
    #xt = null;
    #At = null;
    #_t = null;
    #St = null;
    static TRANSLATE_SMALL = 1;
    static TRANSLATE_BIG = 10;
    static get _keyboardManager() {
        const t1 = xe.prototype, e = (t1)=>t1.#xt.contains(document.activeElement) && "BUTTON" !== document.activeElement.tagName && t1.hasSomethingToControl(), i = (t1, { target: e })=>{
            if (e instanceof HTMLInputElement) {
                const { type: t1 } = e;
                return "text" !== t1 && "number" !== t1;
            }
            return !0;
        }, s = this.TRANSLATE_SMALL, n = this.TRANSLATE_BIG;
        return gt(this, "_keyboardManager", new ye([
            [
                [
                    "ctrl+a",
                    "mac+meta+a"
                ],
                t1.selectAll,
                {
                    checker: i
                }
            ],
            [
                [
                    "ctrl+z",
                    "mac+meta+z"
                ],
                t1.undo,
                {
                    checker: i
                }
            ],
            [
                [
                    "ctrl+y",
                    "ctrl+shift+z",
                    "mac+meta+shift+z",
                    "ctrl+shift+Z",
                    "mac+meta+shift+Z"
                ],
                t1.redo,
                {
                    checker: i
                }
            ],
            [
                [
                    "Backspace",
                    "alt+Backspace",
                    "ctrl+Backspace",
                    "shift+Backspace",
                    "mac+Backspace",
                    "mac+alt+Backspace",
                    "mac+ctrl+Backspace",
                    "Delete",
                    "ctrl+Delete",
                    "shift+Delete",
                    "mac+Delete"
                ],
                t1.delete,
                {
                    checker: i
                }
            ],
            [
                [
                    "Enter",
                    "mac+Enter"
                ],
                t1.addNewEditorFromKeyboard,
                {
                    checker: (t1, { target: e })=>!(e instanceof HTMLButtonElement) && t1.#xt.contains(e) && !t1.isEnterHandled
                }
            ],
            [
                [
                    " ",
                    "mac+ "
                ],
                t1.addNewEditorFromKeyboard,
                {
                    checker: (t1, { target: e })=>!(e instanceof HTMLButtonElement) && t1.#xt.contains(document.activeElement)
                }
            ],
            [
                [
                    "Escape",
                    "mac+Escape"
                ],
                t1.unselectAll
            ],
            [
                [
                    "ArrowLeft",
                    "mac+ArrowLeft"
                ],
                t1.translateSelectedEditors,
                {
                    args: [
                        -s,
                        0
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ctrl+ArrowLeft",
                    "mac+shift+ArrowLeft"
                ],
                t1.translateSelectedEditors,
                {
                    args: [
                        -n,
                        0
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ArrowRight",
                    "mac+ArrowRight"
                ],
                t1.translateSelectedEditors,
                {
                    args: [
                        s,
                        0
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ctrl+ArrowRight",
                    "mac+shift+ArrowRight"
                ],
                t1.translateSelectedEditors,
                {
                    args: [
                        n,
                        0
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ArrowUp",
                    "mac+ArrowUp"
                ],
                t1.translateSelectedEditors,
                {
                    args: [
                        0,
                        -s
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ctrl+ArrowUp",
                    "mac+shift+ArrowUp"
                ],
                t1.translateSelectedEditors,
                {
                    args: [
                        0,
                        -n
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ArrowDown",
                    "mac+ArrowDown"
                ],
                t1.translateSelectedEditors,
                {
                    args: [
                        0,
                        s
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ctrl+ArrowDown",
                    "mac+shift+ArrowDown"
                ],
                t1.translateSelectedEditors,
                {
                    args: [
                        0,
                        n
                    ],
                    checker: e
                }
            ]
        ]));
    }
    constructor(t1, e, i, s, n, r, a, o, l, h, c, d, u, p, g, m){
        const f = this._signal = this.#P.signal;
        this.#xt = t1, this.#At = e, this.#_t = i, this.#B = s, this.#U = n, this.#gt = r, this.#bt = o, this._eventBus = a, a._on("editingaction", this.onEditingAction.bind(this), {
            signal: f
        }), a._on("pagechanging", this.onPageChanging.bind(this), {
            signal: f
        }), a._on("scalechanging", this.onScaleChanging.bind(this), {
            signal: f
        }), a._on("rotationchanging", this.onRotationChanging.bind(this), {
            signal: f
        }), a._on("setpreference", this.onSetPreference.bind(this), {
            signal: f
        }), a._on("switchannotationeditorparams", (t1)=>this.updateParams(t1.type, t1.value), {
            signal: f
        }), window.addEventListener("pointerdown", ()=>{
            this.#nt = !0;
        }, {
            capture: !0,
            signal: f
        }), window.addEventListener("pointerup", ()=>{
            this.#nt = !1;
        }, {
            capture: !0,
            signal: f
        }), this.#Et(), this.#Ct(), this.#Tt(), this.#F = o.annotationStorage, this.#K = o.filterFactory, this.#mt = l, this.#Z = h || null, this.#q = c, this.#X = d, this.#Y = u, this.#ct = p || null, this.viewParameters = {
            realScale: Ot.PDF_TO_CSS_UNITS,
            rotation: 0
        }, this.isShiftKeyDown = !1, this._editorUndoBar = g || null, this._supportsPinchToZoom = !1 !== m, n?.setSidebarUiManager(this);
    }
    destroy() {
        this.#St?.resolve(), this.#St = null, this.#P?.abort(), this.#P = null, this._signal = null;
        for (const t1 of this.#L.values())t1.destroy();
        this.#L.clear(), this.#R.clear(), this.#W.clear(), this.#ht?.clear(), this.#k = null, this.#ut.clear(), this.#N.destroy(), this.#B?.destroy(), this.#U?.destroy(), this.#gt?.destroy(), this.#et?.hide(), this.#et = null, this.#lt?.destroy(), this.#lt = null, this.#I = null, this.#Q && (clearTimeout(this.#Q), this.#Q = null), this.#wt && (clearTimeout(this.#wt), this.#wt = null), this._editorUndoBar?.destroy(), this.#bt = null;
    }
    combinedSignal(t1) {
        return AbortSignal.any([
            this._signal,
            t1.signal
        ]);
    }
    get mlManager() {
        return this.#ct;
    }
    get useNewAltTextFlow() {
        return this.#X;
    }
    get useNewAltTextWhenAddingImage() {
        return this.#Y;
    }
    get hcmFilter() {
        return gt(this, "hcmFilter", this.#mt ? this.#K.addHCMFilter(this.#mt.foreground, this.#mt.background) : "none");
    }
    get direction() {
        return gt(this, "direction", getComputedStyle(this.#xt).direction);
    }
    get _highlightColors() {
        return gt(this, "_highlightColors", this.#Z ? new Map(this.#Z.split(",").map((t1)=>((t1 = t1.split("=").map((t1)=>t1.trim()))[1] = t1[1].toUpperCase(), t1))) : null);
    }
    get highlightColors() {
        const { _highlightColors: t1 } = this;
        if (!t1) return gt(this, "highlightColors", null);
        const e = new Map, i = !!this.#mt;
        for (const [s, n] of t1){
            const t1 = s.endsWith("_HCM");
            i && t1 ? e.set(s.replace("_HCM", ""), n) : i || t1 || e.set(s, n);
        }
        return gt(this, "highlightColors", e);
    }
    get highlightColorNames() {
        return gt(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (t1)=>t1.reverse())) : null);
    }
    getNonHCMColor(t1) {
        if (!this._highlightColors) return t1;
        const e = this.highlightColorNames.get(t1);
        return this._highlightColors.get(e) || t1;
    }
    getNonHCMColorName(t1) {
        return this.highlightColorNames.get(t1) || t1;
    }
    setCurrentDrawingSession(t1) {
        t1 ? (this.unselectAll(), this.disableUserSelect(!0)) : this.disableUserSelect(!1), this.#H = t1;
    }
    setMainHighlightColorPicker(t1) {
        this.#lt = t1;
    }
    editAltText(t1, e = !1) {
        this.#B?.editAltText(this, t1, e);
    }
    hasCommentManager() {
        return !!this.#U;
    }
    editComment(t1, e, i, s) {
        this.#U?.showDialog(this, t1, e, i, s);
    }
    selectComment(t1, e) {
        const i = this.#L.get(t1), s = i?.getEditorByUID(e);
        s?.toggleComment(!0, !0);
    }
    updateComment(t1) {
        this.#U?.updateComment(t1.getData());
    }
    updatePopupColor(t1) {
        this.#U?.updatePopupColor(t1);
    }
    removeComment(t1) {
        this.#U?.removeComments([
            t1.uid
        ]);
    }
    toggleComment(t1, e, i = void 0) {
        this.#U?.toggleCommentPopup(t1, e, i);
    }
    makeCommentColor(t1, e) {
        return t1 && this.#U?.makeCommentColor(t1, e) || null;
    }
    getCommentDialogElement() {
        return this.#U?.dialogElement || null;
    }
    async waitForEditorsRendered(t1) {
        if (this.#L.has(t1 - 1)) return;
        const { resolve: e, promise: i } = Promise.withResolvers(), s = (i)=>{
            i.pageNumber === t1 && (this._eventBus._off("editorsrendered", s), e());
        };
        this._eventBus.on("editorsrendered", s), await i;
    }
    getSignature(t1) {
        this.#gt?.getSignature({
            uiManager: this,
            editor: t1
        });
    }
    get signatureManager() {
        return this.#gt;
    }
    switchToMode(t1, e) {
        this._eventBus.on("annotationeditormodechanged", e, {
            once: !0,
            signal: this._signal
        }), this._eventBus.dispatch("showannotationeditorui", {
            source: this,
            mode: t1
        });
    }
    setPreference(t1, e) {
        this._eventBus.dispatch("setpreference", {
            source: this,
            name: t1,
            value: e
        });
    }
    onSetPreference({ name: t1, value: e }) {
        if ("enableNewAltTextWhenAddingImage" === t1) this.#Y = e;
    }
    onPageChanging({ pageNumber: t1 }) {
        this.#j = t1 - 1;
    }
    focusMainContainer() {
        this.#xt.focus();
    }
    findParent(t1, e) {
        for (const i of this.#L.values()){
            const { x: s, y: n, width: r, height: a } = i.div.getBoundingClientRect();
            if (t1 >= s && t1 <= s + r && e >= n && e <= n + a) return i;
        }
        return null;
    }
    disableUserSelect(t1 = !1) {
        this.#At.classList.toggle("noUserSelect", t1);
    }
    addShouldRescale(t1) {
        this.#W.add(t1);
    }
    removeShouldRescale(t1) {
        this.#W.delete(t1);
    }
    onScaleChanging({ scale: t1 }) {
        this.commitOrRemove(), this.viewParameters.realScale = t1 * Ot.PDF_TO_CSS_UNITS;
        for (const e of this.#W)e.onScaleChanging();
        this.#H?.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: t1 }) {
        this.commitOrRemove(), this.viewParameters.rotation = t1;
    }
    #Mt({ anchorNode: t1 }) {
        return t1.nodeType === Node.TEXT_NODE ? t1.parentElement : t1;
    }
    #Dt(t1) {
        const { currentLayer: e } = this;
        if (e.hasTextLayer(t1)) return e;
        for (const i of this.#L.values())if (i.hasTextLayer(t1)) return i;
        return null;
    }
    highlightSelection(t1 = "", e = !1) {
        const i = document.getSelection();
        if (!i || i.isCollapsed) return;
        const { anchorNode: s, anchorOffset: n, focusNode: r, focusOffset: a } = i, o = i.toString(), l = this.#Mt(i).closest(".textLayer"), h = this.getSelectionBoxes(l);
        if (!h) return;
        i.empty();
        const c = this.#Dt(l), d = this.#dt === O.NONE, u = ()=>{
            const i = c?.createAndAddNewEditor({
                x: 0,
                y: 0
            }, !1, {
                methodOfCreation: t1,
                boxes: h,
                anchorNode: s,
                anchorOffset: n,
                focusNode: r,
                focusOffset: a,
                text: o
            });
            d && this.showAllEditors("highlight", !0, !0), e && i?.editComment();
        };
        d ? this.switchToMode(O.HIGHLIGHT, u) : u();
    }
    commentSelection(t1 = "") {
        this.highlightSelection(t1, !0);
    }
    #Pt() {
        const t1 = document.getSelection();
        if (!t1 || t1.isCollapsed) return;
        const e = this.#Mt(t1).closest(".textLayer"), i = this.getSelectionBoxes(e);
        i && (this.#et ||= new ge(this), this.#et.show(e, i, "ltr" === this.direction));
    }
    getAndRemoveDataFromAnnotationStorage(t1) {
        if (!this.#F) return null;
        const e = `${F}${t1}`, i = this.#F.getRawValue(e);
        return i && this.#F.remove(e), i;
    }
    addToAnnotationStorage(t1) {
        t1.isEmpty() || !this.#F || this.#F.has(t1.id) || this.#F.setValue(t1.id, t1);
    }
    a11yAlert(t1, e = null) {
        const i = this.#_t;
        i && (i.setAttribute("data-l10n-id", t1), e ? i.setAttribute("data-l10n-args", JSON.stringify(e)) : i.removeAttribute("data-l10n-args"));
    }
    #kt() {
        const t1 = document.getSelection();
        if (!t1 || t1.isCollapsed) return void (this.#pt && (this.#et?.hide(), this.#pt = null, this.#It({
            hasSelectedText: !1
        })));
        const { anchorNode: e } = t1;
        if (e === this.#pt) return;
        const i = this.#Mt(t1).closest(".textLayer");
        if (i) {
            if (this.#et?.hide(), this.#pt = e, this.#It({
                hasSelectedText: !0
            }), (this.#dt === O.HIGHLIGHT || this.#dt === O.NONE) && (this.#dt === O.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), this.#tt = this.isShiftKeyDown, !this.isShiftKeyDown)) {
                const t1 = this.#dt === O.HIGHLIGHT ? this.#Dt(i) : null;
                if (t1?.toggleDrawing(), this.#nt) {
                    const e = new AbortController, i = this.combinedSignal(e), s = (i)=>{
                        "pointerup" === i.type && 0 !== i.button || (e.abort(), t1?.toggleDrawing(!0), "pointerup" === i.type && this.#Rt("main_toolbar"));
                    };
                    window.addEventListener("pointerup", s, {
                        signal: i
                    }), window.addEventListener("blur", s, {
                        signal: i
                    });
                } else t1?.toggleDrawing(!0), this.#Rt("main_toolbar");
            }
        } else this.#pt && (this.#et?.hide(), this.#pt = null, this.#It({
            hasSelectedText: !1
        }));
    }
    #Rt(t1 = "") {
        this.#dt === O.HIGHLIGHT ? this.highlightSelection(t1) : this.#q && this.#Pt();
    }
    #Et() {
        document.addEventListener("selectionchange", this.#kt.bind(this), {
            signal: this._signal
        });
    }
    #Lt() {
        if (this.#J) return;
        this.#J = new AbortController;
        const t1 = this.combinedSignal(this.#J);
        window.addEventListener("focus", this.focus.bind(this), {
            signal: t1
        }), window.addEventListener("blur", this.blur.bind(this), {
            signal: t1
        });
    }
    #Bt() {
        this.#J?.abort(), this.#J = null;
    }
    blur() {
        if (this.isShiftKeyDown = !1, this.#tt && (this.#tt = !1, this.#Rt("main_toolbar")), !this.hasSelection) return;
        const { activeElement: t1 } = document;
        for (const e of this.#ut)if (e.div.contains(t1)) {
            this.#ot = [
                e,
                t1
            ], e._focusEventsAllowed = !1;
            break;
        }
    }
    focus() {
        if (!this.#ot) return;
        const [t1, e] = this.#ot;
        this.#ot = null, e.addEventListener("focusin", ()=>{
            t1._focusEventsAllowed = !0;
        }, {
            once: !0,
            signal: this._signal
        }), e.focus();
    }
    #Tt() {
        if (this.#at) return;
        this.#at = new AbortController;
        const t1 = this.combinedSignal(this.#at);
        window.addEventListener("keydown", this.keydown.bind(this), {
            signal: t1
        }), window.addEventListener("keyup", this.keyup.bind(this), {
            signal: t1
        });
    }
    #Ft() {
        this.#at?.abort(), this.#at = null;
    }
    #Ot() {
        if (this.#z) return;
        this.#z = new AbortController;
        const t1 = this.combinedSignal(this.#z);
        document.addEventListener("copy", this.copy.bind(this), {
            signal: t1
        }), document.addEventListener("cut", this.cut.bind(this), {
            signal: t1
        }), document.addEventListener("paste", this.paste.bind(this), {
            signal: t1
        });
    }
    #Nt() {
        this.#z?.abort(), this.#z = null;
    }
    #Ct() {
        const t1 = this._signal;
        document.addEventListener("dragover", this.dragOver.bind(this), {
            signal: t1
        }), document.addEventListener("drop", this.drop.bind(this), {
            signal: t1
        });
    }
    addEditListeners() {
        this.#Tt(), this.#Ot();
    }
    removeEditListeners() {
        this.#Ft(), this.#Nt();
    }
    dragOver(t1) {
        for (const { type: e } of t1.dataTransfer.items)for (const i of this.#G)if (i.isHandlingMimeForPasting(e)) return t1.dataTransfer.dropEffect = "copy", void t1.preventDefault();
    }
    drop(t1) {
        for (const e of t1.dataTransfer.items)for (const i of this.#G)if (i.isHandlingMimeForPasting(e.type)) return i.paste(e, this.currentLayer), void t1.preventDefault();
    }
    copy(t1) {
        if (t1.preventDefault(), this.#k?.commitOrRemove(), !this.hasSelection) return;
        const e = [];
        for (const i of this.#ut){
            const t1 = i.serialize(!0);
            t1 && e.push(t1);
        }
        0 !== e.length && t1.clipboardData.setData("application/pdfjs", JSON.stringify(e));
    }
    cut(t1) {
        this.copy(t1), this.delete();
    }
    async paste(t1) {
        t1.preventDefault();
        const { clipboardData: e } = t1;
        for (const r of e.items)for (const t1 of this.#G)if (t1.isHandlingMimeForPasting(r.type)) return void t1.paste(r, this.currentLayer);
        let i = e.getData("application/pdfjs");
        if (!i) return;
        try {
            i = JSON.parse(i);
        } catch (n) {
            return void ht(`paste: "${n.message}".`);
        }
        if (!Array.isArray(i)) return;
        this.unselectAll();
        const s = this.currentLayer;
        try {
            const t1 = [];
            for (const r of i){
                const e = await s.deserialize(r);
                if (!e) return;
                t1.push(e);
            }
            const e = ()=>{
                for (const e of t1)this.#Ut(e);
                this.#zt(t1);
            }, n = ()=>{
                for (const e of t1)e.remove();
            };
            this.addCommands({
                cmd: e,
                undo: n,
                mustExec: !0
            });
        } catch (n) {
            ht(`paste: "${n.message}".`);
        }
    }
    keydown(t1) {
        this.isShiftKeyDown || "Shift" !== t1.key || (this.isShiftKeyDown = !0), this.#dt === O.NONE || this.isEditorHandlingKeyboard || xe._keyboardManager.exec(this, t1);
    }
    keyup(t1) {
        this.isShiftKeyDown && "Shift" === t1.key && (this.isShiftKeyDown = !1, this.#tt && (this.#tt = !1, this.#Rt("main_toolbar")));
    }
    onEditingAction({ name: t1 }) {
        switch(t1){
            case "undo":
            case "redo":
            case "delete":
            case "selectAll":
                this[t1]();
                break;
            case "highlightSelection":
                this.highlightSelection("context_menu");
                break;
            case "commentSelection":
                this.commentSelection("context_menu");
        }
    }
    #It(t1) {
        Object.entries(t1).some(([t1, e])=>this.#vt[t1] !== e) && (this._eventBus.dispatch("annotationeditorstateschanged", {
            source: this,
            details: Object.assign(this.#vt, t1)
        }), this.#dt === O.HIGHLIGHT && !1 === t1.hasSelectedEditor && this.#Ht([
            [
                N.HIGHLIGHT_FREE,
                !0
            ]
        ]));
    }
    #Ht(t1) {
        this._eventBus.dispatch("annotationeditorparamschanged", {
            source: this,
            details: t1
        });
    }
    setEditingState(t1) {
        t1 ? (this.#Lt(), this.#Ot(), this.#It({
            isEditing: this.#dt !== O.NONE,
            isEmpty: this.#jt(),
            hasSomethingToUndo: this.#N.hasSomethingToUndo(),
            hasSomethingToRedo: this.#N.hasSomethingToRedo(),
            hasSelectedEditor: !1
        })) : (this.#Bt(), this.#Nt(), this.#It({
            isEditing: !1
        }), this.disableUserSelect(!1));
    }
    registerEditorTypes(t1) {
        if (!this.#G) {
            this.#G = t1;
            for (const t1 of this.#G)this.#Ht(t1.defaultPropertiesToUpdate);
        }
    }
    getId() {
        return this.#it.id;
    }
    get currentLayer() {
        return this.#L.get(this.#j);
    }
    getLayer(t1) {
        return this.#L.get(t1);
    }
    get currentPageIndex() {
        return this.#j;
    }
    addLayer(t1) {
        this.#L.set(t1.pageIndex, t1), this.#st ? t1.enable() : t1.disable();
    }
    removeLayer(t1) {
        this.#L.delete(t1.pageIndex);
    }
    async updateMode(t1, e = null, i = !1, s = !1, n = !1) {
        if (this.#dt !== t1 && (!this.#St || (await this.#St.promise, this.#St))) {
            if (this.#St = Promise.withResolvers(), this.#H?.commitOrRemove(), this.#dt === O.POPUP && this.#U?.hideSidebar(), this.#U?.destroyPopup(), this.#dt = t1, t1 === O.NONE) {
                this.setEditingState(!1), this.#$t();
                for (const t1 of this.#R.values())t1.hideStandaloneCommentButton();
                return this._editorUndoBar?.hide(), this.toggleComment(null), void this.#St.resolve();
            }
            for (const t1 of this.#R.values())t1.addStandaloneCommentButton();
            t1 === O.SIGNATURE && await this.#gt?.loadSignatures(), this.setEditingState(!0), await this.#Vt(), this.unselectAll();
            for (const e of this.#L.values())e.updateMode(t1);
            if (t1 === O.POPUP) {
                this.#I ||= await this.#bt.getAnnotationsByType(new Set(this.#G.map((t1)=>t1._editorType)));
                const t1 = new Set, e = [];
                for (const i of this.#R.values()){
                    const { annotationElementId: s, hasComment: n, deleted: r } = i;
                    s && t1.add(s), n && !r && e.push(i.getData());
                }
                for (const i of this.#I){
                    const { id: s, popupRef: n, contentsObj: r } = i;
                    n && r?.str && !t1.has(s) && !this.#$.has(s) && e.push(i);
                }
                this.#U?.showSidebar(e);
            }
            if (!e) return i && this.addNewEditorFromKeyboard(), void this.#St.resolve();
            for (const t1 of this.#R.values())t1.uid === e ? (this.setSelected(t1), n ? t1.editComment() : s ? t1.enterInEditMode() : t1.focus()) : t1.unselect();
            this.#St.resolve();
        }
    }
    addNewEditorFromKeyboard() {
        this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
    }
    updateToolbar(t1) {
        t1.mode !== this.#dt && this._eventBus.dispatch("switchannotationeditormode", {
            source: this,
            ...t1
        });
    }
    updateParams(t1, e) {
        if (this.#G) {
            switch(t1){
                case N.CREATE:
                    return void this.currentLayer.addNewEditor(e);
                case N.HIGHLIGHT_SHOW_ALL:
                    this._eventBus.dispatch("reporttelemetry", {
                        source: this,
                        details: {
                            type: "editing",
                            data: {
                                type: "highlight",
                                action: "toggle_visibility"
                            }
                        }
                    }), (this.#ft ||= new Map).set(t1, e), this.showAllEditors("highlight", e);
            }
            if (this.hasSelection) for (const i of this.#ut)i.updateParams(t1, e);
            else for (const i of this.#G)i.updateDefaultParams(t1, e);
        }
    }
    showAllEditors(t1, e, i = !1) {
        for (const s of this.#R.values())s.editorType === t1 && s.show(e);
        (this.#ft?.get(N.HIGHLIGHT_SHOW_ALL) ?? !0) !== e && this.#Ht([
            [
                N.HIGHLIGHT_SHOW_ALL,
                e
            ]
        ]);
    }
    enableWaiting(t1 = !1) {
        if (this.#rt !== t1) {
            this.#rt = t1;
            for (const e of this.#L.values())t1 ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", t1);
        }
    }
    async #Vt() {
        if (!this.#st) {
            this.#st = !0;
            const t1 = [];
            for (const e of this.#L.values())t1.push(e.enable());
            await Promise.all(t1);
            for (const e of this.#R.values())e.enable();
        }
    }
    #$t() {
        if (this.unselectAll(), this.#st) {
            this.#st = !1;
            for (const t1 of this.#L.values())t1.disable();
            for (const t1 of this.#R.values())t1.disable();
        }
    }
    *getEditors(t1) {
        for (const e of this.#R.values())e.pageIndex === t1 && (yield e);
    }
    getEditor(t1) {
        return this.#R.get(t1);
    }
    addEditor(t1) {
        this.#R.set(t1.id, t1);
    }
    removeEditor(t1) {
        t1.div.contains(document.activeElement) && (this.#Q && clearTimeout(this.#Q), this.#Q = setTimeout(()=>{
            this.focusMainContainer(), this.#Q = null;
        }, 0)), this.#R.delete(t1.id), t1.annotationElementId && this.#ht?.delete(t1.annotationElementId), this.unselect(t1), t1.annotationElementId && this.#$.has(t1.annotationElementId) || this.#F?.remove(t1.id);
    }
    addDeletedAnnotationElement(t1) {
        this.#$.add(t1.annotationElementId), this.addChangedExistingAnnotation(t1), t1.deleted = !0;
    }
    isDeletedAnnotationElement(t1) {
        return this.#$.has(t1);
    }
    removeDeletedAnnotationElement(t1) {
        this.#$.delete(t1.annotationElementId), this.removeChangedExistingAnnotation(t1), t1.deleted = !1;
    }
    #Ut(t1) {
        const e = this.#L.get(t1.pageIndex);
        e ? e.addOrRebuild(t1) : (this.addEditor(t1), this.addToAnnotationStorage(t1));
    }
    setActiveEditor(t1) {
        this.#k !== t1 && (this.#k = t1, t1 && this.#Ht(t1.propertiesToUpdate));
    }
    get #Gt() {
        let t1 = null;
        for (t1 of this.#ut);
        return t1;
    }
    updateUI(t1) {
        this.#Gt === t1 && this.#Ht(t1.propertiesToUpdate);
    }
    updateUIForDefaultProperties(t1) {
        this.#Ht(t1.defaultPropertiesToUpdate);
    }
    toggleSelected(t1) {
        if (this.#ut.has(t1)) return this.#ut.delete(t1), t1.unselect(), void this.#It({
            hasSelectedEditor: this.hasSelection
        });
        this.#ut.add(t1), t1.select(), this.#Ht(t1.propertiesToUpdate), this.#It({
            hasSelectedEditor: !0
        });
    }
    setSelected(t1) {
        this.updateToolbar({
            mode: t1.mode,
            editId: t1.id
        }), this.#H?.commitOrRemove();
        for (const e of this.#ut)e !== t1 && e.unselect();
        this.#ut.clear(), this.#ut.add(t1), t1.select(), this.#Ht(t1.propertiesToUpdate), this.#It({
            hasSelectedEditor: !0
        });
    }
    isSelected(t1) {
        return this.#ut.has(t1);
    }
    get firstSelectedEditor() {
        return this.#ut.values().next().value;
    }
    unselect(t1) {
        t1.unselect(), this.#ut.delete(t1), this.#It({
            hasSelectedEditor: this.hasSelection
        });
    }
    get hasSelection() {
        return 0 !== this.#ut.size;
    }
    get isEnterHandled() {
        return 1 === this.#ut.size && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
        this.#N.undo(), this.#It({
            hasSomethingToUndo: this.#N.hasSomethingToUndo(),
            hasSomethingToRedo: !0,
            isEmpty: this.#jt()
        }), this._editorUndoBar?.hide();
    }
    redo() {
        this.#N.redo(), this.#It({
            hasSomethingToUndo: !0,
            hasSomethingToRedo: this.#N.hasSomethingToRedo(),
            isEmpty: this.#jt()
        });
    }
    addCommands(t1) {
        this.#N.add(t1), this.#It({
            hasSomethingToUndo: !0,
            hasSomethingToRedo: !1,
            isEmpty: this.#jt()
        });
    }
    cleanUndoStack(t1) {
        this.#N.cleanType(t1);
    }
    #jt() {
        if (0 === this.#R.size) return !0;
        if (1 === this.#R.size) for (const t1 of this.#R.values())return t1.isEmpty();
        return !1;
    }
    delete() {
        this.commitOrRemove();
        const t1 = this.currentLayer?.endDrawingSession(!0);
        if (!this.hasSelection && !t1) return;
        const e = t1 ? [
            t1
        ] : [
            ...this.#ut
        ], i = ()=>{
            for (const t1 of e)this.#Ut(t1);
        };
        this.addCommands({
            cmd: ()=>{
                this._editorUndoBar?.show(i, 1 === e.length ? e[0].editorType : e.length);
                for (const t1 of e)t1.remove();
            },
            undo: i,
            mustExec: !0
        });
    }
    commitOrRemove() {
        this.#k?.commitOrRemove();
    }
    hasSomethingToControl() {
        return this.#k || this.hasSelection;
    }
    #zt(t1) {
        for (const e of this.#ut)e.unselect();
        this.#ut.clear();
        for (const e of t1)e.isEmpty() || (this.#ut.add(e), e.select());
        this.#It({
            hasSelectedEditor: this.hasSelection
        });
    }
    selectAll() {
        for (const t1 of this.#ut)t1.commit();
        this.#zt(this.#R.values());
    }
    unselectAll() {
        if ((!this.#k || (this.#k.commitOrRemove(), this.#dt === O.NONE)) && !this.#H?.commitOrRemove() && this.hasSelection) {
            for (const t1 of this.#ut)t1.unselect();
            this.#ut.clear(), this.#It({
                hasSelectedEditor: !1
            });
        }
    }
    translateSelectedEditors(t1, e, i = !1) {
        if (i || this.commitOrRemove(), !this.hasSelection) return;
        this.#yt[0] += t1, this.#yt[1] += e;
        const [s, n] = this.#yt, r = [
            ...this.#ut
        ];
        this.#wt && clearTimeout(this.#wt), this.#wt = setTimeout(()=>{
            this.#wt = null, this.#yt[0] = this.#yt[1] = 0, this.addCommands({
                cmd: ()=>{
                    for (const t1 of r)this.#R.has(t1.id) && (t1.translateInPage(s, n), t1.translationDone());
                },
                undo: ()=>{
                    for (const t1 of r)this.#R.has(t1.id) && (t1.translateInPage(-s, -n), t1.translationDone());
                },
                mustExec: !1
            });
        }, 1e3);
        for (const a of r)a.translateInPage(t1, e), a.translationDone();
    }
    setUpDragSession() {
        if (this.hasSelection) {
            this.disableUserSelect(!0), this.#V = new Map;
            for (const t1 of this.#ut)this.#V.set(t1, {
                savedX: t1.x,
                savedY: t1.y,
                savedPageIndex: t1.pageIndex,
                newX: 0,
                newY: 0,
                newPageIndex: -1
            });
        }
    }
    endDragSession() {
        if (!this.#V) return !1;
        this.disableUserSelect(!1);
        const t1 = this.#V;
        this.#V = null;
        let e = !1;
        for (const [{ x: s, y: n, pageIndex: r }, a] of t1)a.newX = s, a.newY = n, a.newPageIndex = r, e ||= s !== a.savedX || n !== a.savedY || r !== a.savedPageIndex;
        if (!e) return !1;
        const i = (t1, e, i, s)=>{
            if (this.#R.has(t1.id)) {
                const n = this.#L.get(s);
                n ? t1._setParentAndPosition(n, e, i) : (t1.pageIndex = s, t1.x = e, t1.y = i);
            }
        };
        return this.addCommands({
            cmd: ()=>{
                for (const [e, { newX: s, newY: n, newPageIndex: r }] of t1)i(e, s, n, r);
            },
            undo: ()=>{
                for (const [e, { savedX: s, savedY: n, savedPageIndex: r }] of t1)i(e, s, n, r);
            },
            mustExec: !0
        }), !0;
    }
    dragSelectedEditors(t1, e) {
        if (this.#V) for (const i of this.#V.keys())i.drag(t1, e);
    }
    rebuild(t1) {
        if (null === t1.parent) {
            const e = this.getLayer(t1.pageIndex);
            e ? (e.changeParent(t1), e.addOrRebuild(t1)) : (this.addEditor(t1), this.addToAnnotationStorage(t1), t1.rebuild());
        } else t1.parent.addOrRebuild(t1);
    }
    get isEditorHandlingKeyboard() {
        return this.getActive()?.shouldGetKeyboardEvents() || 1 === this.#ut.size && this.firstSelectedEditor.shouldGetKeyboardEvents();
    }
    isActive(t1) {
        return this.#k === t1;
    }
    getActive() {
        return this.#k;
    }
    getMode() {
        return this.#dt;
    }
    isEditingMode() {
        return this.#dt !== O.NONE;
    }
    get imageManager() {
        return gt(this, "imageManager", new be);
    }
    getSelectionBoxes(t1) {
        if (!t1) return null;
        const e = document.getSelection();
        for(let l = 0, h = e.rangeCount; l < h; l++)if (!t1.contains(e.getRangeAt(l).commonAncestorContainer)) return null;
        const { x: i, y: s, width: n, height: r } = t1.getBoundingClientRect();
        let a;
        switch(t1.getAttribute("data-main-rotation")){
            case "90":
                a = (t1, e, a, o)=>({
                        x: (e - s) / r,
                        y: 1 - (t1 + a - i) / n,
                        width: o / r,
                        height: a / n
                    });
                break;
            case "180":
                a = (t1, e, a, o)=>({
                        x: 1 - (t1 + a - i) / n,
                        y: 1 - (e + o - s) / r,
                        width: a / n,
                        height: o / r
                    });
                break;
            case "270":
                a = (t1, e, a, o)=>({
                        x: 1 - (e + o - s) / r,
                        y: (t1 - i) / n,
                        width: o / r,
                        height: a / n
                    });
                break;
            default:
                a = (t1, e, a, o)=>({
                        x: (t1 - i) / n,
                        y: (e - s) / r,
                        width: a / n,
                        height: o / r
                    });
        }
        const o = [];
        for(let l = 0, h = e.rangeCount; l < h; l++){
            const t1 = e.getRangeAt(l);
            if (!t1.collapsed) for (const { x: e, y: i, width: s, height: n } of t1.getClientRects())0 !== s && 0 !== n && o.push(a(e, i, s, n));
        }
        return 0 === o.length ? null : o;
    }
    addChangedExistingAnnotation({ annotationElementId: t1, id: e }) {
        (this.#O ||= new Map).set(t1, e);
    }
    removeChangedExistingAnnotation({ annotationElementId: t1 }) {
        this.#O?.delete(t1);
    }
    renderAnnotationElement(t1) {
        const e = this.#O?.get(t1.data.id);
        if (!e) return;
        const i = this.#F.getRawValue(e);
        i && (this.#dt !== O.NONE || i.hasBeenModified) && i.renderAnnotationElement(t1);
    }
    setMissingCanvas(t1, e, i) {
        const s = this.#ht?.get(t1);
        s && (s.setCanvas(e, i), this.#ht.delete(t1));
    }
    addMissingCanvas(t1, e) {
        (this.#ht ||= new Map).set(t1, e);
    }
}
class Ae {
    #o = null;
    #Wt = !1;
    #qt = null;
    #Xt = null;
    #Yt = null;
    #Kt = null;
    #Qt = !1;
    #Jt = null;
    #r = null;
    #Zt = null;
    #te = null;
    #ee = !1;
    static #ie = null;
    static _l10n = null;
    constructor(t1){
        this.#r = t1, this.#ee = t1._uiManager.useNewAltTextFlow, Ae.#ie ||= Object.freeze({
            added: "pdfjs-editor-new-alt-text-added-button",
            "added-label": "pdfjs-editor-new-alt-text-added-button-label",
            missing: "pdfjs-editor-new-alt-text-missing-button",
            "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
            review: "pdfjs-editor-new-alt-text-to-review-button",
            "review-label": "pdfjs-editor-new-alt-text-to-review-button-label"
        });
    }
    static initialize(t1) {
        Ae._l10n ??= t1;
    }
    async render() {
        const t1 = this.#qt = document.createElement("button");
        t1.className = "altText", t1.tabIndex = "0";
        const e = this.#Xt = document.createElement("span");
        t1.append(e), this.#ee ? (t1.classList.add("new"), t1.setAttribute("data-l10n-id", Ae.#ie.missing), e.setAttribute("data-l10n-id", Ae.#ie["missing-label"])) : (t1.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"), e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button-label"));
        const i = this.#r._uiManager._signal;
        t1.addEventListener("contextmenu", qt, {
            signal: i
        }), t1.addEventListener("pointerdown", (t1)=>t1.stopPropagation(), {
            signal: i
        });
        const s = (t1)=>{
            t1.preventDefault(), this.#r._uiManager.editAltText(this.#r), this.#ee && this.#r._reportTelemetry({
                action: "pdfjs.image.alt_text.image_status_label_clicked",
                data: {
                    label: this.#se
                }
            });
        };
        return t1.addEventListener("click", s, {
            capture: !0,
            signal: i
        }), t1.addEventListener("keydown", (e)=>{
            e.target === t1 && "Enter" === e.key && (this.#Qt = !0, s(e));
        }, {
            signal: i
        }), await this.#ne(), t1;
    }
    get #se() {
        return (this.#o ? "added" : null === this.#o && this.guessedText && "review") || "missing";
    }
    finish() {
        this.#qt && (this.#qt.focus({
            focusVisible: this.#Qt
        }), this.#Qt = !1);
    }
    isEmpty() {
        return this.#ee ? null === this.#o : !this.#o && !this.#Wt;
    }
    hasData() {
        return this.#ee ? null !== this.#o || !!this.#Zt : this.isEmpty();
    }
    get guessedText() {
        return this.#Zt;
    }
    async setGuessedText(t1) {
        null === this.#o && (this.#Zt = t1, this.#te = await Ae._l10n.get("pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer", {
            generatedAltText: t1
        }), this.#ne());
    }
    toggleAltTextBadge(t1 = !1) {
        if (!this.#ee || this.#o) return this.#Jt?.remove(), void (this.#Jt = null);
        if (!this.#Jt) {
            const t1 = this.#Jt = document.createElement("div");
            t1.className = "noAltTextBadge", this.#r.div.append(t1);
        }
        this.#Jt.classList.toggle("hidden", !t1);
    }
    serialize(t1) {
        let e = this.#o;
        return t1 || this.#Zt !== e || (e = this.#te), {
            altText: e,
            decorative: this.#Wt,
            guessedText: this.#Zt,
            textWithDisclaimer: this.#te
        };
    }
    get data() {
        return {
            altText: this.#o,
            decorative: this.#Wt
        };
    }
    set data({ altText: t1, decorative: e, guessedText: i, textWithDisclaimer: s, cancel: n = !1 }) {
        i && (this.#Zt = i, this.#te = s), this.#o === t1 && this.#Wt === e || (n || (this.#o = t1, this.#Wt = e), this.#ne());
    }
    toggle(t1 = !1) {
        this.#qt && (!t1 && this.#Kt && (clearTimeout(this.#Kt), this.#Kt = null), this.#qt.disabled = !t1);
    }
    shown() {
        this.#r._reportTelemetry({
            action: "pdfjs.image.alt_text.image_status_label_displayed",
            data: {
                label: this.#se
            }
        });
    }
    destroy() {
        this.#qt?.remove(), this.#qt = null, this.#Xt = null, this.#Yt = null, this.#Jt?.remove(), this.#Jt = null;
    }
    async #ne() {
        const t1 = this.#qt;
        if (!t1) return;
        if (this.#ee) {
            if (t1.classList.toggle("done", !!this.#o), t1.setAttribute("data-l10n-id", Ae.#ie[this.#se]), this.#Xt?.setAttribute("data-l10n-id", Ae.#ie[`${this.#se}-label`]), !this.#o) return void this.#Yt?.remove();
        } else {
            if (!this.#o && !this.#Wt) return t1.classList.remove("done"), void this.#Yt?.remove();
            t1.classList.add("done"), t1.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button");
        }
        let e = this.#Yt;
        if (!e) {
            this.#Yt = e = document.createElement("span"), e.className = "tooltip", e.setAttribute("role", "tooltip"), e.id = `alt-text-tooltip-${this.#r.id}`;
            const i = 100, s = this.#r._uiManager._signal;
            s.addEventListener("abort", ()=>{
                clearTimeout(this.#Kt), this.#Kt = null;
            }, {
                once: !0
            }), t1.addEventListener("mouseenter", ()=>{
                this.#Kt = setTimeout(()=>{
                    this.#Kt = null, this.#Yt.classList.add("show"), this.#r._reportTelemetry({
                        action: "alt_text_tooltip"
                    });
                }, i);
            }, {
                signal: s
            }), t1.addEventListener("mouseleave", ()=>{
                this.#Kt && (clearTimeout(this.#Kt), this.#Kt = null), this.#Yt?.classList.remove("show");
            }, {
                signal: s
            });
        }
        this.#Wt ? e.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-decorative-tooltip") : (e.removeAttribute("data-l10n-id"), e.textContent = this.#o), e.parentNode || t1.append(e);
        const i = this.#r.getElementForAltText();
        i?.setAttribute("aria-describedby", e.id);
    }
}
class _e {
    #re = null;
    #ae = null;
    #oe = !1;
    #r = null;
    #le = null;
    #he = null;
    #ce = null;
    #de = null;
    #ue = !1;
    #pe = null;
    constructor(t1){
        this.#r = t1;
    }
    renderForToolbar() {
        const t1 = this.#ae = document.createElement("button");
        return t1.className = "comment", this.#v(t1, !1);
    }
    renderForStandalone() {
        const t1 = this.#re = document.createElement("button");
        t1.className = "annotationCommentButton";
        const e = this.#r.commentButtonPosition;
        if (e) {
            const { style: i } = t1;
            i.insetInlineEnd = `calc(${100 * ("ltr" === this.#r._uiManager.direction ? 1 - e[0] : e[0])}% - var(--comment-button-dim))`, i.top = `calc(${100 * e[1]}% - var(--comment-button-dim))`;
            const s = this.#r.commentButtonColor;
            s && (i.backgroundColor = s);
        }
        return this.#v(t1, !0);
    }
    focusButton() {
        setTimeout(()=>{
            (this.#re ?? this.#ae)?.focus();
        }, 0);
    }
    onUpdatedColor() {
        if (!this.#re) return;
        const t1 = this.#r.commentButtonColor;
        t1 && (this.#re.style.backgroundColor = t1), this.#r._uiManager.updatePopupColor(this.#r);
    }
    get commentButtonWidth() {
        return (this.#re?.getBoundingClientRect().width ?? 0) / this.#r.parent.boundingClientRect.width;
    }
    get commentPopupPositionInLayer() {
        if (this.#pe) return this.#pe;
        if (!this.#re) return null;
        const { x: t1, y: e, height: i } = this.#re.getBoundingClientRect(), { x: s, y: n, width: r, height: a } = this.#r.parent.boundingClientRect;
        return [
            (t1 - s) / r,
            (e + i - n) / a
        ];
    }
    set commentPopupPositionInLayer(t1) {
        this.#pe = t1;
    }
    hasDefaultPopupPosition() {
        return null === this.#pe;
    }
    removeStandaloneCommentButton() {
        this.#re?.remove(), this.#re = null;
    }
    removeToolbarCommentButton() {
        this.#ae?.remove(), this.#ae = null;
    }
    setCommentButtonStates({ selected: t1, hasPopup: e }) {
        this.#re && (this.#re.classList.toggle("selected", t1), this.#re.ariaExpanded = e);
    }
    #v(t1, e) {
        if (!this.#r._uiManager.hasCommentManager()) return null;
        t1.tabIndex = "0", t1.ariaHasPopup = "dialog", e ? (t1.ariaControls = "commentPopup", t1.setAttribute("data-l10n-id", "pdfjs-show-comment-button")) : (t1.ariaControlsElements = [
            this.#r._uiManager.getCommentDialogElement()
        ], t1.setAttribute("data-l10n-id", "pdfjs-editor-edit-comment-button"));
        const i = this.#r._uiManager._signal;
        if (!(i instanceof AbortSignal) || i.aborted) return t1;
        t1.addEventListener("contextmenu", qt, {
            signal: i
        }), e && (t1.addEventListener("focusin", (t1)=>{
            this.#r._focusEventsAllowed = !1, Xt(t1);
        }, {
            capture: !0,
            signal: i
        }), t1.addEventListener("focusout", (t1)=>{
            this.#r._focusEventsAllowed = !0, Xt(t1);
        }, {
            capture: !0,
            signal: i
        })), t1.addEventListener("pointerdown", (t1)=>t1.stopPropagation(), {
            signal: i
        });
        const s = (e)=>{
            e.preventDefault(), t1 === this.#ae ? this.edit() : this.#r.toggleComment(!0);
        };
        return t1.addEventListener("click", s, {
            capture: !0,
            signal: i
        }), t1.addEventListener("keydown", (e)=>{
            e.target === t1 && "Enter" === e.key && (this.#oe = !0, s(e));
        }, {
            signal: i
        }), t1.addEventListener("pointerenter", ()=>{
            this.#r.toggleComment(!1, !0);
        }, {
            signal: i
        }), t1.addEventListener("pointerleave", ()=>{
            this.#r.toggleComment(!1, !1);
        }, {
            signal: i
        }), t1;
    }
    edit(t1) {
        const e = this.commentPopupPositionInLayer;
        let i, s;
        if (e) [i, s] = e;
        else {
            [i, s] = this.#r.commentButtonPosition;
            const { width: t1, height: e, x: n, y: r } = this.#r;
            i = n + i * t1, s = r + s * e;
        }
        const n = this.#r.parent.boundingClientRect, { x: r, y: a, width: o, height: l } = n;
        this.#r._uiManager.editComment(this.#r, r + i * o, a + s * l, {
            ...t1,
            parentDimensions: n
        });
    }
    finish() {
        this.#ae && (this.#ae.focus({
            focusVisible: this.#oe
        }), this.#oe = !1);
    }
    isDeleted() {
        return this.#ue || "" === this.#ce;
    }
    isEmpty() {
        return null === this.#ce;
    }
    hasBeenEdited() {
        return this.isDeleted() || this.#ce !== this.#le;
    }
    serialize() {
        return this.data;
    }
    get data() {
        return {
            text: this.#ce,
            richText: this.#he,
            date: this.#de,
            deleted: this.isDeleted()
        };
    }
    set data(t1) {
        if (t1 !== this.#ce && (this.#he = null), null === t1) return this.#ce = "", void (this.#ue = !0);
        this.#ce = t1, this.#de = new Date, this.#ue = !1;
    }
    setInitialText(t1, e = null) {
        this.#le = t1, this.data = t1, this.#de = null, this.#he = e;
    }
    shown() {}
    destroy() {
        this.#ae?.remove(), this.#ae = null, this.#re?.remove(), this.#re = null, this.#ce = "", this.#he = null, this.#de = null, this.#r = null, this.#oe = !1, this.#ue = !1;
    }
}
class Se {
    #xt;
    #ge = !1;
    #me = null;
    #fe;
    #be;
    #ve;
    #ye;
    #we = null;
    #xe;
    #Ae = null;
    #_e;
    #Se = null;
    constructor({ container: t1, isPinchingDisabled: e = null, isPinchingStopped: i = null, onPinchStart: s = null, onPinching: n = null, onPinchEnd: r = null, signal: a }){
        this.#xt = t1, this.#me = i, this.#fe = e, this.#be = s, this.#ve = n, this.#ye = r, this.#_e = new AbortController, this.#xe = AbortSignal.any([
            a,
            this.#_e.signal
        ]), t1.addEventListener("touchstart", this.#Ee.bind(this), {
            passive: !1,
            signal: this.#xe
        });
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
        return 35 / ee.pixelRatio;
    }
    #Ee(t1) {
        if (this.#fe?.()) return;
        if (1 === t1.touches.length) {
            if (this.#we) return;
            const t1 = this.#we = new AbortController, e = AbortSignal.any([
                this.#xe,
                t1.signal
            ]), i = this.#xt, s = {
                capture: !0,
                signal: e,
                passive: !1
            }, n = (t1)=>{
                "touch" === t1.pointerType && (this.#we?.abort(), this.#we = null);
            };
            return i.addEventListener("pointerdown", (t1)=>{
                "touch" === t1.pointerType && (Xt(t1), n(t1));
            }, s), i.addEventListener("pointerup", n, s), void i.addEventListener("pointercancel", n, s);
        }
        if (!this.#Se) {
            this.#Se = new AbortController;
            const t1 = AbortSignal.any([
                this.#xe,
                this.#Se.signal
            ]), e = this.#xt, i = {
                signal: t1,
                capture: !1,
                passive: !1
            };
            e.addEventListener("touchmove", this.#Ce.bind(this), i);
            const s = this.#Te.bind(this);
            e.addEventListener("touchend", s, i), e.addEventListener("touchcancel", s, i), i.capture = !0, e.addEventListener("pointerdown", Xt, i), e.addEventListener("pointermove", Xt, i), e.addEventListener("pointercancel", Xt, i), e.addEventListener("pointerup", Xt, i), this.#be?.();
        }
        if (Xt(t1), 2 !== t1.touches.length || this.#me?.()) return void (this.#Ae = null);
        let [e, i] = t1.touches;
        e.identifier > i.identifier && ([e, i] = [
            i,
            e
        ]), this.#Ae = {
            touch0X: e.screenX,
            touch0Y: e.screenY,
            touch1X: i.screenX,
            touch1Y: i.screenY
        };
    }
    #Ce(t1) {
        if (!this.#Ae || 2 !== t1.touches.length) return;
        Xt(t1);
        let [e, i] = t1.touches;
        e.identifier > i.identifier && ([e, i] = [
            i,
            e
        ]);
        const { screenX: s, screenY: n } = e, { screenX: r, screenY: a } = i, o = this.#Ae, { touch0X: l, touch0Y: h, touch1X: c, touch1Y: d } = o, u = c - l, p = d - h, g = r - s, m = a - n, f = Math.hypot(g, m) || 1, b = Math.hypot(u, p) || 1;
        if (!this.#ge && Math.abs(b - f) <= Se.MIN_TOUCH_DISTANCE_TO_PINCH) return;
        if (o.touch0X = s, o.touch0Y = n, o.touch1X = r, o.touch1Y = a, !this.#ge) return void (this.#ge = !0);
        const v = [
            (s + r) / 2,
            (n + a) / 2
        ];
        this.#ve?.(v, b, f);
    }
    #Te(t1) {
        t1.touches.length >= 2 || (this.#Se && (this.#Se.abort(), this.#Se = null, this.#ye?.()), this.#Ae && (Xt(t1), this.#Ae = null, this.#ge = !1));
    }
    destroy() {
        this.#_e?.abort(), this.#_e = null, this.#we?.abort(), this.#we = null;
    }
}
class Ee {
    #Me = null;
    #De = null;
    #o = null;
    #l = null;
    #re = null;
    #Pe = !1;
    #ke = null;
    #Ie = "";
    #Re = null;
    #Le = null;
    #Be = null;
    #Fe = null;
    #Oe = null;
    #Ne = "";
    #Ue = !1;
    #ze = null;
    #He = !1;
    #je = !1;
    #$e = !1;
    #Ve = null;
    #Ge = 0;
    #We = 0;
    #qe = null;
    #Xe = null;
    isSelected = !1;
    _isCopy = !1;
    _editToolbar = null;
    _initialOptions = Object.create(null);
    _initialData = null;
    _isVisible = !0;
    _uiManager = null;
    _focusEventsAllowed = !0;
    static _l10n = null;
    static _l10nResizer = null;
    #Ye = !1;
    #Ke = Ee._zIndex++;
    static _borderLineWidth = -1;
    static _colorManager = new we;
    static _zIndex = 1;
    static _telemetryTimeout = 1e3;
    static get _resizerKeyboardManager() {
        const t1 = Ee.prototype._resizeWithKeyboard, e = xe.TRANSLATE_SMALL, i = xe.TRANSLATE_BIG;
        return gt(this, "_resizerKeyboardManager", new ye([
            [
                [
                    "ArrowLeft",
                    "mac+ArrowLeft"
                ],
                t1,
                {
                    args: [
                        -e,
                        0
                    ]
                }
            ],
            [
                [
                    "ctrl+ArrowLeft",
                    "mac+shift+ArrowLeft"
                ],
                t1,
                {
                    args: [
                        -i,
                        0
                    ]
                }
            ],
            [
                [
                    "ArrowRight",
                    "mac+ArrowRight"
                ],
                t1,
                {
                    args: [
                        e,
                        0
                    ]
                }
            ],
            [
                [
                    "ctrl+ArrowRight",
                    "mac+shift+ArrowRight"
                ],
                t1,
                {
                    args: [
                        i,
                        0
                    ]
                }
            ],
            [
                [
                    "ArrowUp",
                    "mac+ArrowUp"
                ],
                t1,
                {
                    args: [
                        0,
                        -e
                    ]
                }
            ],
            [
                [
                    "ctrl+ArrowUp",
                    "mac+shift+ArrowUp"
                ],
                t1,
                {
                    args: [
                        0,
                        -i
                    ]
                }
            ],
            [
                [
                    "ArrowDown",
                    "mac+ArrowDown"
                ],
                t1,
                {
                    args: [
                        0,
                        e
                    ]
                }
            ],
            [
                [
                    "ctrl+ArrowDown",
                    "mac+shift+ArrowDown"
                ],
                t1,
                {
                    args: [
                        0,
                        i
                    ]
                }
            ],
            [
                [
                    "Escape",
                    "mac+Escape"
                ],
                Ee.prototype._stopResizingWithKeyboard
            ]
        ]));
    }
    constructor(t1){
        this.parent = t1.parent, this.id = t1.id, this.width = this.height = null, this.pageIndex = t1.parent.pageIndex, this.name = t1.name, this.div = null, this._uiManager = t1.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = t1.isCentered, this._structTreeParentId = null, this.annotationElementId = t1.annotationElementId || null, this.creationDate = t1.creationDate || new Date, this.modificationDate = t1.modificationDate || null;
        const { rotation: e, rawDims: { pageWidth: i, pageHeight: s, pageX: n, pageY: r } } = this.parent.viewport;
        this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [
            i,
            s
        ], this.pageTranslation = [
            n,
            r
        ];
        const [a, o] = this.parentDimensions;
        this.x = t1.x / a, this.y = t1.y / o, this.isAttachedToDOM = !1, this.deleted = !1;
    }
    get editorType() {
        return Object.getPrototypeOf(this).constructor._type;
    }
    get mode() {
        return Object.getPrototypeOf(this).constructor._editorType;
    }
    static get isDrawer() {
        return !1;
    }
    static get _defaultLineColor() {
        return gt(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
    }
    static deleteAnnotationElement(t1) {
        const e = new Ce({
            id: t1.parent.getNextId(),
            parent: t1.parent,
            uiManager: t1._uiManager
        });
        e.annotationElementId = t1.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
    }
    static initialize(t1, e) {
        if (Ee._l10n ??= t1, Ee._l10nResizer ||= Object.freeze({
            topLeft: "pdfjs-editor-resizer-top-left",
            topMiddle: "pdfjs-editor-resizer-top-middle",
            topRight: "pdfjs-editor-resizer-top-right",
            middleRight: "pdfjs-editor-resizer-middle-right",
            bottomRight: "pdfjs-editor-resizer-bottom-right",
            bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
            bottomLeft: "pdfjs-editor-resizer-bottom-left",
            middleLeft: "pdfjs-editor-resizer-middle-left"
        }), -1 !== Ee._borderLineWidth) return;
        const i = getComputedStyle(document.documentElement);
        Ee._borderLineWidth = parseFloat(i.getPropertyValue("--outline-width")) || 0;
    }
    static updateDefaultParams(t1, e) {}
    static get defaultPropertiesToUpdate() {
        return [];
    }
    static isHandlingMimeForPasting(t1) {
        return !1;
    }
    static paste(t1, e) {
        ct("Not implemented");
    }
    get propertiesToUpdate() {
        return [];
    }
    get _isDraggable() {
        return this.#Ye;
    }
    set _isDraggable(t1) {
        this.#Ye = t1, this.div?.classList.toggle("draggable", t1);
    }
    get uid() {
        return this.annotationElementId || this.id;
    }
    get isEnterHandled() {
        return !0;
    }
    center() {
        const [t1, e] = this.pageDimensions;
        switch(this.parentRotation){
            case 90:
                this.x -= this.height * e / (2 * t1), this.y += this.width * t1 / (2 * e);
                break;
            case 180:
                this.x += this.width / 2, this.y += this.height / 2;
                break;
            case 270:
                this.x += this.height * e / (2 * t1), this.y -= this.width * t1 / (2 * e);
                break;
            default:
                this.x -= this.width / 2, this.y -= this.height / 2;
        }
        this.fixAndSetPosition();
    }
    addCommands(t1) {
        this._uiManager.addCommands(t1);
    }
    get currentLayer() {
        return this._uiManager.currentLayer;
    }
    setInBackground() {
        this.div.style.zIndex = 0;
    }
    setInForeground() {
        this.div.style.zIndex = this.#Ke;
    }
    setParent(t1) {
        null !== t1 ? (this.pageIndex = t1.pageIndex, this.pageDimensions = t1.pageDimensions) : (this.#Qe(), this.#Fe?.remove(), this.#Fe = null), this.parent = t1;
    }
    focusin(t1) {
        this._focusEventsAllowed && (this.#Ue ? this.#Ue = !1 : this.parent.setSelected(this));
    }
    focusout(t1) {
        if (!this._focusEventsAllowed) return;
        if (!this.isAttachedToDOM) return;
        const e = t1.relatedTarget;
        e?.closest(`#${this.id}`) || (t1.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove());
    }
    commitOrRemove() {
        this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
        this.isInEditMode() && this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
        this._uiManager.addToAnnotationStorage(this);
    }
    setAt(t1, e, i, s) {
        const [n, r] = this.parentDimensions;
        [i, s] = this.screenToPageTranslation(i, s), this.x = (t1 + i) / n, this.y = (e + s) / r, this.fixAndSetPosition();
    }
    _moveAfterPaste(t1, e) {
        const [i, s] = this.parentDimensions;
        this.setAt(t1 * i, e * s, this.width * i, this.height * s), this._onTranslated();
    }
    #Je([t1, e], i, s) {
        [i, s] = this.screenToPageTranslation(i, s), this.x += i / t1, this.y += s / e, this._onTranslating(this.x, this.y), this.fixAndSetPosition();
    }
    translate(t1, e) {
        this.#Je(this.parentDimensions, t1, e);
    }
    translateInPage(t1, e) {
        this.#ze ||= [
            this.x,
            this.y,
            this.width,
            this.height
        ], this.#Je(this.pageDimensions, t1, e), this.div.scrollIntoView({
            block: "nearest"
        });
    }
    translationDone() {
        this._onTranslated(this.x, this.y);
    }
    drag(t1, e) {
        this.#ze ||= [
            this.x,
            this.y,
            this.width,
            this.height
        ];
        const { div: i, parentDimensions: [s, n] } = this;
        if (this.x += t1 / s, this.y += e / n, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
            const { x: t1, y: e } = this.div.getBoundingClientRect();
            this.parent.findNewParent(this, t1, e) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
        }
        let { x: r, y: a } = this;
        const [o, l] = this.getBaseTranslation();
        r += o, a += l;
        const { style: h } = i;
        h.left = `${(100 * r).toFixed(2)}%`, h.top = `${(100 * a).toFixed(2)}%`, this._onTranslating(r, a), i.scrollIntoView({
            block: "nearest"
        });
    }
    _onTranslating(t1, e) {}
    _onTranslated(t1, e) {}
    get _hasBeenMoved() {
        return !!this.#ze && (this.#ze[0] !== this.x || this.#ze[1] !== this.y);
    }
    get _hasBeenResized() {
        return !!this.#ze && (this.#ze[2] !== this.width || this.#ze[3] !== this.height);
    }
    getBaseTranslation() {
        const [t1, e] = this.parentDimensions, { _borderLineWidth: i } = Ee, s = i / t1, n = i / e;
        switch(this.rotation){
            case 90:
                return [
                    -s,
                    n
                ];
            case 180:
                return [
                    s,
                    n
                ];
            case 270:
                return [
                    s,
                    -n
                ];
            default:
                return [
                    -s,
                    -n
                ];
        }
    }
    get _mustFixPosition() {
        return !0;
    }
    fixAndSetPosition(t1 = this.rotation) {
        const { div: { style: e }, pageDimensions: [i, s] } = this;
        let { x: n, y: r, width: a, height: o } = this;
        if (a *= i, o *= s, n *= i, r *= s, this._mustFixPosition) switch(t1){
            case 0:
                n = It(n, 0, i - a), r = It(r, 0, s - o);
                break;
            case 90:
                n = It(n, 0, i - o), r = It(r, a, s);
                break;
            case 180:
                n = It(n, a, i), r = It(r, o, s);
                break;
            case 270:
                n = It(n, o, i), r = It(r, 0, s - a);
        }
        this.x = n /= i, this.y = r /= s;
        const [l, h] = this.getBaseTranslation();
        n += l, r += h, e.left = `${(100 * n).toFixed(2)}%`, e.top = `${(100 * r).toFixed(2)}%`, this.moveInDOM();
    }
    static #Ze(t1, e, i) {
        switch(i){
            case 90:
                return [
                    e,
                    -t1
                ];
            case 180:
                return [
                    -t1,
                    -e
                ];
            case 270:
                return [
                    -e,
                    t1
                ];
            default:
                return [
                    t1,
                    e
                ];
        }
    }
    screenToPageTranslation(t1, e) {
        return Ee.#Ze(t1, e, this.parentRotation);
    }
    pageTranslationToScreen(t1, e) {
        return Ee.#Ze(t1, e, 360 - this.parentRotation);
    }
    #ti(t1) {
        switch(t1){
            case 90:
                {
                    const [t1, e] = this.pageDimensions;
                    return [
                        0,
                        -t1 / e,
                        e / t1,
                        0
                    ];
                }
            case 180:
                return [
                    -1,
                    0,
                    0,
                    -1
                ];
            case 270:
                {
                    const [t1, e] = this.pageDimensions;
                    return [
                        0,
                        t1 / e,
                        -e / t1,
                        0
                    ];
                }
            default:
                return [
                    1,
                    0,
                    0,
                    1
                ];
        }
    }
    get parentScale() {
        return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
        return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
    }
    get parentDimensions() {
        const { parentScale: t1, pageDimensions: [e, i] } = this;
        return [
            e * t1,
            i * t1
        ];
    }
    setDims() {
        const { div: { style: t1 }, width: e, height: i } = this;
        t1.width = `${(100 * e).toFixed(2)}%`, t1.height = `${(100 * i).toFixed(2)}%`;
    }
    getInitialTranslation() {
        return [
            0,
            0
        ];
    }
    #ei() {
        if (this.#Re) return;
        this.#Re = document.createElement("div"), this.#Re.classList.add("resizers");
        const t1 = this._willKeepAspectRatio ? [
            "topLeft",
            "topRight",
            "bottomRight",
            "bottomLeft"
        ] : [
            "topLeft",
            "topMiddle",
            "topRight",
            "middleRight",
            "bottomRight",
            "bottomMiddle",
            "bottomLeft",
            "middleLeft"
        ], e = this._uiManager._signal;
        for (const i of t1){
            const t1 = document.createElement("div");
            this.#Re.append(t1), t1.classList.add("resizer", i), t1.setAttribute("data-resizer-name", i), t1.addEventListener("pointerdown", this.#ii.bind(this, i), {
                signal: e
            }), t1.addEventListener("contextmenu", qt, {
                signal: e
            }), t1.tabIndex = -1;
        }
        this.div.prepend(this.#Re);
    }
    #ii(t1, e) {
        e.preventDefault();
        const { isMac: i } = St.platform;
        if (0 !== e.button || e.ctrlKey && i) return;
        this.#o?.toggle(!1);
        const s = this._isDraggable;
        this._isDraggable = !1, this.#Le = [
            e.screenX,
            e.screenY
        ];
        const n = new AbortController, r = this._uiManager.combinedSignal(n);
        this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", this.#si.bind(this, t1), {
            passive: !0,
            capture: !0,
            signal: r
        }), window.addEventListener("touchmove", Xt, {
            passive: !1,
            signal: r
        }), window.addEventListener("contextmenu", qt, {
            signal: r
        }), this.#Be = {
            savedX: this.x,
            savedY: this.y,
            savedWidth: this.width,
            savedHeight: this.height
        };
        const a = this.parent.div.style.cursor, o = this.div.style.cursor;
        this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
        const l = ()=>{
            n.abort(), this.parent.togglePointerEvents(!0), this.#o?.toggle(!0), this._isDraggable = s, this.parent.div.style.cursor = a, this.div.style.cursor = o, this.#ni();
        };
        window.addEventListener("pointerup", l, {
            signal: r
        }), window.addEventListener("blur", l, {
            signal: r
        });
    }
    #ri(t1, e, i, s) {
        this.width = i, this.height = s, this.x = t1, this.y = e, this.setDims(), this.fixAndSetPosition(), this._onResized();
    }
    _onResized() {}
    #ni() {
        if (!this.#Be) return;
        const { savedX: t1, savedY: e, savedWidth: i, savedHeight: s } = this.#Be;
        this.#Be = null;
        const n = this.x, r = this.y, a = this.width, o = this.height;
        n === t1 && r === e && a === i && o === s || this.addCommands({
            cmd: this.#ri.bind(this, n, r, a, o),
            undo: this.#ri.bind(this, t1, e, i, s),
            mustExec: !0
        });
    }
    static _round(t1) {
        return Math.round(1e4 * t1) / 1e4;
    }
    #si(t1, e) {
        const [i, s] = this.parentDimensions, n = this.x, r = this.y, a = this.width, o = this.height, l = Ee.MIN_SIZE / i, h = Ee.MIN_SIZE / s, c = this.#ti(this.rotation), d = (t1, e)=>[
                c[0] * t1 + c[2] * e,
                c[1] * t1 + c[3] * e
            ], u = this.#ti(360 - this.rotation);
        let p, g, m = !1, f = !1;
        switch(t1){
            case "topLeft":
                m = !0, p = (t1, e)=>[
                        0,
                        0
                    ], g = (t1, e)=>[
                        t1,
                        e
                    ];
                break;
            case "topMiddle":
                p = (t1, e)=>[
                        t1 / 2,
                        0
                    ], g = (t1, e)=>[
                        t1 / 2,
                        e
                    ];
                break;
            case "topRight":
                m = !0, p = (t1, e)=>[
                        t1,
                        0
                    ], g = (t1, e)=>[
                        0,
                        e
                    ];
                break;
            case "middleRight":
                f = !0, p = (t1, e)=>[
                        t1,
                        e / 2
                    ], g = (t1, e)=>[
                        0,
                        e / 2
                    ];
                break;
            case "bottomRight":
                m = !0, p = (t1, e)=>[
                        t1,
                        e
                    ], g = (t1, e)=>[
                        0,
                        0
                    ];
                break;
            case "bottomMiddle":
                p = (t1, e)=>[
                        t1 / 2,
                        e
                    ], g = (t1, e)=>[
                        t1 / 2,
                        0
                    ];
                break;
            case "bottomLeft":
                m = !0, p = (t1, e)=>[
                        0,
                        e
                    ], g = (t1, e)=>[
                        t1,
                        0
                    ];
                break;
            case "middleLeft":
                f = !0, p = (t1, e)=>[
                        0,
                        e / 2
                    ], g = (t1, e)=>[
                        t1,
                        e / 2
                    ];
        }
        const b = p(a, o), v = g(a, o);
        let y = d(...v);
        const w = Ee._round(n + y[0]), x = Ee._round(r + y[1]);
        let A, _, S = 1, E = 1;
        if (e.fromKeyboard) ({ deltaX: A, deltaY: _ } = e);
        else {
            const { screenX: t1, screenY: i } = e, [s, n] = this.#Le;
            [A, _] = this.screenToPageTranslation(t1 - s, i - n), this.#Le[0] = t1, this.#Le[1] = i;
        }
        var C, T;
        if ([A, _] = (C = A / i, T = _ / s, [
            u[0] * C + u[2] * T,
            u[1] * C + u[3] * T
        ]), m) {
            const t1 = Math.hypot(a, o);
            S = E = Math.max(Math.min(Math.hypot(v[0] - b[0] - A, v[1] - b[1] - _) / t1, 1 / a, 1 / o), l / a, h / o);
        } else f ? S = It(Math.abs(v[0] - b[0] - A), l, 1) / a : E = It(Math.abs(v[1] - b[1] - _), h, 1) / o;
        const M = Ee._round(a * S), D = Ee._round(o * E);
        y = d(...g(M, D));
        const P = w - y[0], k = x - y[1];
        this.#ze ||= [
            this.x,
            this.y,
            this.width,
            this.height
        ], this.width = M, this.height = D, this.x = P, this.y = k, this.setDims(), this.fixAndSetPosition(), this._onResizing();
    }
    _onResizing() {}
    altTextFinish() {
        this.#o?.finish();
    }
    get toolbarButtons() {
        return null;
    }
    async addEditToolbar() {
        if (this._editToolbar || this.#je) return this._editToolbar;
        this._editToolbar = new pe(this), this.div.append(this._editToolbar.render());
        const { toolbarButtons: t1 } = this;
        if (t1) for (const [e, i] of t1)await this._editToolbar.addButton(e, i);
        return this.hasComment || this._editToolbar.addButton("comment", this.addCommentButton()), this._editToolbar.addButton("delete"), this._editToolbar;
    }
    addCommentButtonInToolbar() {
        this._editToolbar?.addButtonBefore("comment", this.addCommentButton(), ".deleteButton");
    }
    removeCommentButtonFromToolbar() {
        this._editToolbar?.removeButton("comment");
    }
    removeEditToolbar() {
        this._editToolbar?.remove(), this._editToolbar = null, this.#o?.destroy();
    }
    addContainer(t1) {
        const e = this._editToolbar?.div;
        e ? e.before(t1) : this.div.append(t1);
    }
    getClientDimensions() {
        return this.div.getBoundingClientRect();
    }
    createAltText() {
        return this.#o || (Ae.initialize(Ee._l10n), this.#o = new Ae(this), this.#Me && (this.#o.data = this.#Me, this.#Me = null)), this.#o;
    }
    get altTextData() {
        return this.#o?.data;
    }
    set altTextData(t1) {
        this.#o && (this.#o.data = t1);
    }
    get guessedAltText() {
        return this.#o?.guessedText;
    }
    async setGuessedAltText(t1) {
        await this.#o?.setGuessedText(t1);
    }
    serializeAltText(t1) {
        return this.#o?.serialize(t1);
    }
    hasAltText() {
        return !!this.#o && !this.#o.isEmpty();
    }
    hasAltTextData() {
        return this.#o?.hasData() ?? !1;
    }
    focusCommentButton() {
        this.#l?.focusButton();
    }
    addCommentButton() {
        return this.#l ||= new _e(this);
    }
    addStandaloneCommentButton() {
        this.#re ? this._uiManager.isEditingMode() && this.#re.classList.remove("hidden") : this.hasComment && (this.#re = this.#l.renderForStandalone(), this.div.append(this.#re));
    }
    removeStandaloneCommentButton() {
        this.#l.removeStandaloneCommentButton(), this.#re = null;
    }
    hideStandaloneCommentButton() {
        this.#re?.classList.add("hidden");
    }
    get comment() {
        const { data: { richText: t1, text: e, date: i, deleted: s } } = this.#l;
        return {
            text: e,
            richText: t1,
            date: i,
            deleted: s,
            color: this.getNonHCMColor(),
            opacity: this.opacity ?? 1
        };
    }
    set comment(t1) {
        this.#l ||= new _e(this), this.#l.data = t1, this.hasComment ? (this.removeCommentButtonFromToolbar(), this.addStandaloneCommentButton(), this._uiManager.updateComment(this)) : (this.addCommentButtonInToolbar(), this.removeStandaloneCommentButton(), this._uiManager.removeComment(this));
    }
    setCommentData({ comment: t1, popupRef: e, richText: i }) {
        if (!e) return;
        if (this.#l ||= new _e(this), this.#l.setInitialText(t1, i), !this.annotationElementId) return;
        const s = this._uiManager.getAndRemoveDataFromAnnotationStorage(this.annotationElementId);
        s && this.updateFromAnnotationLayer(s);
    }
    get hasEditedComment() {
        return this.#l?.hasBeenEdited();
    }
    get hasDeletedComment() {
        return this.#l?.isDeleted();
    }
    get hasComment() {
        return !!this.#l && !this.#l.isEmpty() && !this.#l.isDeleted();
    }
    async editComment(t1) {
        this.#l ||= new _e(this), this.#l.edit(t1);
    }
    toggleComment(t1, e = void 0) {
        this.hasComment && this._uiManager.toggleComment(this, t1, e);
    }
    setSelectedCommentButton(t1) {
        this.#l.setSelectedButton(t1);
    }
    addComment(t1) {
        if (this.hasEditedComment) {
            const e = 180, i = 100, [, , , s] = t1.rect, [n] = this.pageDimensions, [r] = this.pageTranslation, a = r + n + 1, o = s - i, l = a + e;
            t1.popup = {
                contents: this.comment.text,
                deleted: this.comment.deleted,
                rect: [
                    a,
                    o,
                    l,
                    s
                ]
            };
        }
    }
    updateFromAnnotationLayer({ popup: { contents: t1, deleted: e } }) {
        this.#l.data = e ? null : t1;
    }
    get parentBoundingClientRect() {
        return this.parent.boundingClientRect;
    }
    render() {
        const t1 = this.div = document.createElement("div");
        t1.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), t1.className = this.name, t1.setAttribute("id", this.id), t1.tabIndex = this.#Pe ? -1 : 0, t1.setAttribute("role", "application"), this.defaultL10nId && t1.setAttribute("data-l10n-id", this.defaultL10nId), this._isVisible || t1.classList.add("hidden"), this.setInForeground(), this.#ai();
        const [e, i] = this.parentDimensions;
        this.parentRotation % 180 != 0 && (t1.style.maxWidth = `${(100 * i / e).toFixed(2)}%`, t1.style.maxHeight = `${(100 * e / i).toFixed(2)}%`);
        const [s, n] = this.getInitialTranslation();
        return this.translate(s, n), me(this, t1, [
            "keydown",
            "pointerdown",
            "dblclick"
        ]), this.isResizable && this._uiManager._supportsPinchToZoom && (this.#Xe ||= new Se({
            container: t1,
            isPinchingDisabled: ()=>!this.isSelected,
            onPinchStart: this.#oi.bind(this),
            onPinching: this.#li.bind(this),
            onPinchEnd: this.#hi.bind(this),
            signal: this._uiManager._signal
        })), this.addStandaloneCommentButton(), this._uiManager._editorUndoBar?.hide(), t1;
    }
    #oi() {
        this.#Be = {
            savedX: this.x,
            savedY: this.y,
            savedWidth: this.width,
            savedHeight: this.height
        }, this.#o?.toggle(!1), this.parent.togglePointerEvents(!1);
    }
    #li(t1, e, i) {
        let s = i / e * .7 + 1 - .7;
        if (1 === s) return;
        const n = this.#ti(this.rotation), r = (t1, e)=>[
                n[0] * t1 + n[2] * e,
                n[1] * t1 + n[3] * e
            ], [a, o] = this.parentDimensions, l = this.x, h = this.y, c = this.width, d = this.height, u = Ee.MIN_SIZE / a, p = Ee.MIN_SIZE / o;
        s = Math.max(Math.min(s, 1 / c, 1 / d), u / c, p / d);
        const g = Ee._round(c * s), m = Ee._round(d * s);
        if (g === c && m === d) return;
        this.#ze ||= [
            l,
            h,
            c,
            d
        ];
        const f = r(c / 2, d / 2), b = Ee._round(l + f[0]), v = Ee._round(h + f[1]), y = r(g / 2, m / 2);
        this.x = b - y[0], this.y = v - y[1], this.width = g, this.height = m, this.setDims(), this.fixAndSetPosition(), this._onResizing();
    }
    #hi() {
        this.#o?.toggle(!0), this.parent.togglePointerEvents(!0), this.#ni();
    }
    pointerdown(t1) {
        const { isMac: e } = St.platform;
        0 !== t1.button || t1.ctrlKey && e ? t1.preventDefault() : (this.#Ue = !0, this._isDraggable ? this.#ci(t1) : this.#di(t1));
    }
    #di(t1) {
        const { isMac: e } = St.platform;
        t1.ctrlKey && !e || t1.shiftKey || t1.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
    }
    #ci(t1) {
        const { isSelected: e } = this;
        this._uiManager.setUpDragSession();
        let i = !1;
        const s = new AbortController, n = this._uiManager.combinedSignal(s), r = {
            capture: !0,
            passive: !1,
            signal: n
        }, a = (t1)=>{
            s.abort(), this.#ke = null, this.#Ue = !1, this._uiManager.endDragSession() || this.#di(t1), i && this._onStopDragging();
        };
        e && (this.#Ge = t1.clientX, this.#We = t1.clientY, this.#ke = t1.pointerId, this.#Ie = t1.pointerType, window.addEventListener("pointermove", (t1)=>{
            i || (i = !0, this._uiManager.toggleComment(this, !0, !1), this._onStartDragging());
            const { clientX: e, clientY: s, pointerId: n } = t1;
            if (n !== this.#ke) return void Xt(t1);
            const [r, a] = this.screenToPageTranslation(e - this.#Ge, s - this.#We);
            this.#Ge = e, this.#We = s, this._uiManager.dragSelectedEditors(r, a);
        }, r), window.addEventListener("touchmove", Xt, r), window.addEventListener("pointerdown", (t1)=>{
            t1.pointerType === this.#Ie && (this.#Xe || t1.isPrimary) && a(t1), Xt(t1);
        }, r));
        const o = (t1)=>{
            this.#ke && this.#ke !== t1.pointerId ? Xt(t1) : a(t1);
        };
        window.addEventListener("pointerup", o, {
            signal: n
        }), window.addEventListener("blur", o, {
            signal: n
        });
    }
    _onStartDragging() {}
    _onStopDragging() {}
    moveInDOM() {
        this.#Ve && clearTimeout(this.#Ve), this.#Ve = setTimeout(()=>{
            this.#Ve = null, this.parent?.moveEditorInDOM(this);
        }, 0);
    }
    _setParentAndPosition(t1, e, i) {
        t1.changeParent(this), this.x = e, this.y = i, this.fixAndSetPosition(), this._onTranslated();
    }
    getRect(t1, e, i = this.rotation) {
        const s = this.parentScale, [n, r] = this.pageDimensions, [a, o] = this.pageTranslation, l = t1 / s, h = e / s, c = this.x * n, d = this.y * r, u = this.width * n, p = this.height * r;
        switch(i){
            case 0:
                return [
                    c + l + a,
                    r - d - h - p + o,
                    c + l + u + a,
                    r - d - h + o
                ];
            case 90:
                return [
                    c + h + a,
                    r - d + l + o,
                    c + h + p + a,
                    r - d + l + u + o
                ];
            case 180:
                return [
                    c - l - u + a,
                    r - d + h + o,
                    c - l + a,
                    r - d + h + p + o
                ];
            case 270:
                return [
                    c - h - p + a,
                    r - d - l - u + o,
                    c - h + a,
                    r - d - l + o
                ];
            default:
                throw new Error("Invalid rotation");
        }
    }
    getRectInCurrentCoords(t1, e) {
        const [i, s, n, r] = t1, a = n - i, o = r - s;
        switch(this.rotation){
            case 0:
                return [
                    i,
                    e - r,
                    a,
                    o
                ];
            case 90:
                return [
                    i,
                    e - s,
                    o,
                    a
                ];
            case 180:
                return [
                    n,
                    e - s,
                    a,
                    o
                ];
            case 270:
                return [
                    n,
                    e - r,
                    o,
                    a
                ];
            default:
                throw new Error("Invalid rotation");
        }
    }
    getPDFRect() {
        return this.getRect(0, 0);
    }
    getNonHCMColor() {
        return this.color && Ee._colorManager.convert(this._uiManager.getNonHCMColor(this.color));
    }
    onUpdatedColor() {
        this.#l?.onUpdatedColor();
    }
    getData() {
        const { comment: { text: t1, color: e, date: i, opacity: s, deleted: n, richText: r }, uid: a, pageIndex: o, creationDate: l, modificationDate: h } = this;
        return {
            id: a,
            pageIndex: o,
            rect: this.getPDFRect(),
            richText: r,
            contentsObj: {
                str: t1
            },
            creationDate: l,
            modificationDate: i || h,
            popupRef: !n,
            color: e,
            opacity: s
        };
    }
    onceAdded(t1) {}
    isEmpty() {
        return !1;
    }
    enableEditMode() {
        return !this.isInEditMode() && (this.parent.setEditingState(!1), this.#je = !0, !0);
    }
    disableEditMode() {
        return !!this.isInEditMode() && (this.parent.setEditingState(!0), this.#je = !1, !0);
    }
    isInEditMode() {
        return this.#je;
    }
    shouldGetKeyboardEvents() {
        return this.#$e;
    }
    needsToBeRebuilt() {
        return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
        const { top: t1, left: e, bottom: i, right: s } = this.getClientDimensions(), { innerHeight: n, innerWidth: r } = window;
        return e < r && s > 0 && t1 < n && i > 0;
    }
    #ai() {
        if (this.#Oe || !this.div) return;
        this.#Oe = new AbortController;
        const t1 = this._uiManager.combinedSignal(this.#Oe);
        this.div.addEventListener("focusin", this.focusin.bind(this), {
            signal: t1
        }), this.div.addEventListener("focusout", this.focusout.bind(this), {
            signal: t1
        });
    }
    rebuild() {
        this.#ai();
    }
    rotate(t1) {}
    resize() {}
    serializeDeleted() {
        return {
            id: this.annotationElementId,
            deleted: !0,
            pageIndex: this.pageIndex,
            popupRef: this._initialData?.popupRef || ""
        };
    }
    serialize(t1 = !1, e = null) {
        return {
            annotationType: this.mode,
            pageIndex: this.pageIndex,
            rect: this.getPDFRect(),
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId,
            popupRef: this._initialData?.popupRef || ""
        };
    }
    static async deserialize(t1, e, i) {
        const s = new this.prototype.constructor({
            parent: e,
            id: e.getNextId(),
            uiManager: i,
            annotationElementId: t1.annotationElementId,
            creationDate: t1.creationDate,
            modificationDate: t1.modificationDate
        });
        s.rotation = t1.rotation, s.#Me = t1.accessibilityData, s._isCopy = t1.isCopy || !1;
        const [n, r] = s.pageDimensions, [a, o, l, h] = s.getRectInCurrentCoords(t1.rect, r);
        return s.x = a / n, s.y = o / r, s.width = l / n, s.height = h / r, s;
    }
    get hasBeenModified() {
        return !!this.annotationElementId && (this.deleted || null !== this.serialize());
    }
    remove() {
        if (this.#Oe?.abort(), this.#Oe = null, this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.#Ve && (clearTimeout(this.#Ve), this.#Ve = null), this.#Qe(), this.removeEditToolbar(), this.#qe) {
            for (const t1 of this.#qe.values())clearTimeout(t1);
            this.#qe = null;
        }
        this.parent = null, this.#Xe?.destroy(), this.#Xe = null;
    }
    get isResizable() {
        return !1;
    }
    makeResizable() {
        this.isResizable && (this.#ei(), this.#Re.classList.remove("hidden"));
    }
    get toolbarPosition() {
        return null;
    }
    get commentButtonPosition() {
        return "ltr" === this._uiManager.direction ? [
            1,
            0
        ] : [
            0,
            0
        ];
    }
    get commentButtonPositionInPage() {
        const { commentButtonPosition: [t1, e] } = this, [i, s, n, r] = this.getPDFRect();
        return [
            Ee._round(i + (n - i) * t1),
            Ee._round(s + (r - s) * (1 - e))
        ];
    }
    get commentButtonColor() {
        return this._uiManager.makeCommentColor(this.getNonHCMColor(), this.opacity);
    }
    get commentPopupPosition() {
        return this.#l.commentPopupPositionInLayer;
    }
    set commentPopupPosition(t1) {
        this.#l.commentPopupPositionInLayer = t1;
    }
    hasDefaultPopupPosition() {
        return this.#l.hasDefaultPopupPosition();
    }
    get commentButtonWidth() {
        return this.#l.commentButtonWidth;
    }
    get elementBeforePopup() {
        return this.div;
    }
    setCommentButtonStates(t1) {
        this.#l.setCommentButtonStates(t1);
    }
    keydown(t1) {
        if (!this.isResizable || t1.target !== this.div || "Enter" !== t1.key) return;
        this._uiManager.setSelected(this), this.#Be = {
            savedX: this.x,
            savedY: this.y,
            savedWidth: this.width,
            savedHeight: this.height
        };
        const e = this.#Re.children;
        if (!this.#De) {
            this.#De = Array.from(e);
            const t1 = this.#ui.bind(this), i = this.#pi.bind(this), s = this._uiManager._signal;
            for (const e of this.#De){
                const n = e.getAttribute("data-resizer-name");
                e.setAttribute("role", "spinbutton"), e.addEventListener("keydown", t1, {
                    signal: s
                }), e.addEventListener("blur", i, {
                    signal: s
                }), e.addEventListener("focus", this.#gi.bind(this, n), {
                    signal: s
                }), e.setAttribute("data-l10n-id", Ee._l10nResizer[n]);
            }
        }
        const i = this.#De[0];
        let s = 0;
        for (const r of e){
            if (r === i) break;
            s++;
        }
        const n = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#De.length / 4);
        if (n !== s) {
            if (n < s) for(let e = 0; e < s - n; e++)this.#Re.append(this.#Re.firstChild);
            else if (n > s) for(let e = 0; e < n - s; e++)this.#Re.firstChild.before(this.#Re.lastChild);
            let t1 = 0;
            for (const i of e){
                const e = this.#De[t1++].getAttribute("data-resizer-name");
                i.setAttribute("data-l10n-id", Ee._l10nResizer[e]);
            }
        }
        this.#mi(0), this.#$e = !0, this.#Re.firstChild.focus({
            focusVisible: !0
        }), t1.preventDefault(), t1.stopImmediatePropagation();
    }
    #ui(t1) {
        Ee._resizerKeyboardManager.exec(this, t1);
    }
    #pi(t1) {
        this.#$e && t1.relatedTarget?.parentNode !== this.#Re && this.#Qe();
    }
    #gi(t1) {
        this.#Ne = this.#$e ? t1 : "";
    }
    #mi(t1) {
        if (this.#De) for (const e of this.#De)e.tabIndex = t1;
    }
    _resizeWithKeyboard(t1, e) {
        this.#$e && this.#si(this.#Ne, {
            deltaX: t1,
            deltaY: e,
            fromKeyboard: !0
        });
    }
    #Qe() {
        this.#$e = !1, this.#mi(-1), this.#ni();
    }
    _stopResizingWithKeyboard() {
        this.#Qe(), this.div.focus();
    }
    select() {
        this.isSelected && this._editToolbar ? this._editToolbar.show() : (this.isSelected = !0, this.makeResizable(), this.div?.classList.add("selectedEditor"), this._editToolbar ? (this._editToolbar?.show(), this.#o?.toggleAltTextBadge(!1)) : this.addEditToolbar().then(()=>{
            this.div?.classList.contains("selectedEditor") && this._editToolbar?.show();
        }));
    }
    focus() {
        this.div && !this.div.contains(document.activeElement) && setTimeout(()=>this.div?.focus({
                preventScroll: !0
            }), 0);
    }
    unselect() {
        this.isSelected && (this.isSelected = !1, this.#Re?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
            preventScroll: !0
        }), this._editToolbar?.hide(), this.#o?.toggleAltTextBadge(!0), this.hasComment && this._uiManager.toggleComment(this, !1, !1));
    }
    updateParams(t1, e) {}
    disableEditing() {}
    enableEditing() {}
    get canChangeContent() {
        return !1;
    }
    enterInEditMode() {
        this.canChangeContent && (this.enableEditMode(), this.div.focus());
    }
    dblclick(t1) {
        "BUTTON" !== t1.target.nodeName && (this.enterInEditMode(), this.parent.updateToolbar({
            mode: this.constructor._editorType,
            editId: this.id
        }));
    }
    getElementForAltText() {
        return this.div;
    }
    get contentDiv() {
        return this.div;
    }
    get isEditing() {
        return this.#He;
    }
    set isEditing(t1) {
        this.#He = t1, this.parent && (t1 ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
    }
    static get MIN_SIZE() {
        return 16;
    }
    static canCreateNewEmptyEditor() {
        return !0;
    }
    get telemetryInitialData() {
        return {
            action: "added"
        };
    }
    get telemetryFinalData() {
        return null;
    }
    _reportTelemetry(t1, e = !1) {
        if (e) {
            this.#qe ||= new Map;
            const { action: e } = t1;
            let i = this.#qe.get(e);
            return i && clearTimeout(i), i = setTimeout(()=>{
                this._reportTelemetry(t1), this.#qe.delete(e), 0 === this.#qe.size && (this.#qe = null);
            }, Ee._telemetryTimeout), void this.#qe.set(e, i);
        }
        t1.type ||= this.editorType, this._uiManager._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
                type: "editing",
                data: t1
            }
        });
    }
    show(t1 = this._isVisible) {
        this.div.classList.toggle("hidden", !t1), this._isVisible = t1;
    }
    enable() {
        this.div && (this.div.tabIndex = 0), this.#Pe = !1;
    }
    disable() {
        this.div && (this.div.tabIndex = -1), this.#Pe = !0;
    }
    updateFakeAnnotationElement(t1) {
        if (this.#Fe || this.deleted) return this.deleted ? (this.#Fe.remove(), void (this.#Fe = null)) : void ((this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) && this.#Fe.updateEdited({
            rect: this.getPDFRect(),
            popup: this.comment
        }));
        this.#Fe = t1.addFakeAnnotation(this);
    }
    renderAnnotationElement(t1) {
        if (this.deleted) return t1.hide(), null;
        let e = t1.container.querySelector(".annotationContent");
        if (e) {
            if ("CANVAS" === e.nodeName) {
                const t1 = e;
                e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t1.before(e);
            }
        } else e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), t1.container.prepend(e);
        return e;
    }
    resetAnnotationElement(t1) {
        const { firstChild: e } = t1.container;
        "DIV" === e?.nodeName && e.classList.contains("annotationContent") && e.remove();
    }
}
class Ce extends Ee {
    constructor(t1){
        super(t1), this.annotationElementId = t1.annotationElementId, this.deleted = !0;
    }
    serialize() {
        return this.serializeDeleted();
    }
}
const Te = 3285377520, Me = 4294901760, De = 65535;
class Pe {
    constructor(t1){
        this.h1 = t1 ? 4294967295 & t1 : Te, this.h2 = t1 ? 4294967295 & t1 : Te;
    }
    update(t1) {
        let e, i;
        if ("string" == typeof t1) {
            e = new Uint8Array(2 * t1.length), i = 0;
            for(let s = 0, n = t1.length; s < n; s++){
                const n = t1.charCodeAt(s);
                n <= 255 ? e[i++] = n : (e[i++] = n >>> 8, e[i++] = 255 & n);
            }
        } else {
            if (!ArrayBuffer.isView(t1)) throw new Error("Invalid data format, must be a string or TypedArray.");
            e = t1.slice(), i = e.byteLength;
        }
        const s = i >> 2, n = i - 4 * s, r = new Uint32Array(e.buffer, 0, s);
        let a = 0, o = 0, l = this.h1, h = this.h2;
        const c = 3432918353, d = 461845907, u = 11601, p = 13715;
        for(let g = 0; g < s; g++)1 & g ? (a = r[g], a = a * c & Me | a * u & De, a = a << 15 | a >>> 17, a = a * d & Me | a * p & De, l ^= a, l = l << 13 | l >>> 19, l = 5 * l + 3864292196) : (o = r[g], o = o * c & Me | o * u & De, o = o << 15 | o >>> 17, o = o * d & Me | o * p & De, h ^= o, h = h << 13 | h >>> 19, h = 5 * h + 3864292196);
        switch(a = 0, n){
            case 3:
                a ^= e[4 * s + 2] << 16;
            case 2:
                a ^= e[4 * s + 1] << 8;
            case 1:
                a ^= e[4 * s], a = a * c & Me | a * u & De, a = a << 15 | a >>> 17, a = a * d & Me | a * p & De, 1 & s ? l ^= a : h ^= a;
        }
        this.h1 = l, this.h2 = h;
    }
    hexdigest() {
        let t1 = this.h1, e = this.h2;
        return t1 ^= e >>> 1, t1 = 3981806797 * t1 & Me | 36045 * t1 & De, e = 4283543511 * e & Me | (2950163797 * (e << 16 | t1 >>> 16) & Me) >>> 16, t1 ^= e >>> 1, t1 = 444984403 * t1 & Me | 60499 * t1 & De, e = 3301882366 * e & Me | (3120437893 * (e << 16 | t1 >>> 16) & Me) >>> 16, t1 ^= e >>> 1, (t1 >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
    }
}
const ke = Object.freeze({
    map: null,
    hash: "",
    transfer: void 0
});
class Ie {
    #fi = !1;
    #bi = null;
    #vi = null;
    #yi = new Map;
    constructor(){
        this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
    }
    getValue(t1, e) {
        const i = this.#yi.get(t1);
        return void 0 === i ? e : Object.assign(e, i);
    }
    getRawValue(t1) {
        return this.#yi.get(t1);
    }
    remove(t1) {
        const e = this.#yi.get(t1);
        if (void 0 !== e && (e instanceof Ee && this.#vi.delete(e.annotationElementId), this.#yi.delete(t1), 0 === this.#yi.size && this.resetModified(), "function" == typeof this.onAnnotationEditor)) {
            for (const t1 of this.#yi.values())if (t1 instanceof Ee) return;
            this.onAnnotationEditor(null);
        }
    }
    setValue(t1, e) {
        const i = this.#yi.get(t1);
        let s = !1;
        if (void 0 !== i) for (const [n, r] of Object.entries(e))i[n] !== r && (s = !0, i[n] = r);
        else s = !0, this.#yi.set(t1, e);
        s && this.#wi(), e instanceof Ee && ((this.#vi ||= new Map).set(e.annotationElementId, e), "function" == typeof this.onAnnotationEditor && this.onAnnotationEditor(e.constructor._type));
    }
    has(t1) {
        return this.#yi.has(t1);
    }
    get size() {
        return this.#yi.size;
    }
    #wi() {
        this.#fi || (this.#fi = !0, "function" == typeof this.onSetModified && this.onSetModified());
    }
    resetModified() {
        this.#fi && (this.#fi = !1, "function" == typeof this.onResetModified && this.onResetModified());
    }
    get print() {
        return new Re(this);
    }
    get serializable() {
        if (0 === this.#yi.size) return ke;
        const t1 = new Map, e = new Pe, i = [], s = Object.create(null);
        let n = !1;
        for (const [r, a] of this.#yi){
            const i = a instanceof Ee ? a.serialize(!1, s) : a;
            i && (t1.set(r, i), e.update(`${r}:${JSON.stringify(i)}`), n ||= !!i.bitmap);
        }
        if (n) for (const r of t1.values())r.bitmap && i.push(r.bitmap);
        return t1.size > 0 ? {
            map: t1,
            hash: e.hexdigest(),
            transfer: i
        } : ke;
    }
    get editorStats() {
        let t1 = null;
        const e = new Map;
        let i = 0, s = 0;
        for (const n of this.#yi.values()){
            if (!(n instanceof Ee)) {
                n.popup && (n.popup.deleted ? s += 1 : i += 1);
                continue;
            }
            n.isCommentDeleted ? s += 1 : n.hasEditedComment && (i += 1);
            const r = n.telemetryFinalData;
            if (!r) continue;
            const { type: a } = r;
            e.has(a) || e.set(a, Object.getPrototypeOf(n).constructor), t1 ||= Object.create(null);
            const o = t1[a] ||= new Map;
            for (const [t1, e] of Object.entries(r)){
                if ("type" === t1) continue;
                let i = o.get(t1);
                i || (i = new Map, o.set(t1, i));
                const s = i.get(e) ?? 0;
                i.set(e, s + 1);
            }
        }
        if ((s > 0 || i > 0) && (t1 ||= Object.create(null), t1.comments = {
            deleted: s,
            edited: i
        }), !t1) return null;
        for (const [n, r] of e)t1[n] = r.computeTelemetryFinalData(t1[n]);
        return t1;
    }
    resetModifiedIds() {
        this.#bi = null;
    }
    updateEditor(t1, e) {
        const i = this.#vi?.get(t1);
        return !!i && (i.updateFromAnnotationLayer(e), !0);
    }
    getEditor(t1) {
        return this.#vi?.get(t1) || null;
    }
    get modifiedIds() {
        if (this.#bi) return this.#bi;
        const t1 = [];
        if (this.#vi) for (const e of this.#vi.values())e.serialize() && t1.push(e.annotationElementId);
        return this.#bi = {
            ids: new Set(t1),
            hash: t1.join(",")
        };
    }
    [Symbol.iterator]() {
        return this.#yi.entries();
    }
}
class Re extends Ie {
    #xi;
    constructor(t1){
        super();
        const { map: e, hash: i, transfer: s } = t1.serializable, n = structuredClone(e, s ? {
            transfer: s
        } : null);
        this.#xi = {
            map: n,
            hash: i,
            transfer: s
        };
    }
    get print() {
        ct("Should not call PrintAnnotationStorage.print");
    }
    get serializable() {
        return this.#xi;
    }
    get modifiedIds() {
        return gt(this, "modifiedIds", {
            ids: new Set,
            hash: ""
        });
    }
}
class Le {
    #Ai = new Set;
    constructor({ ownerDocument: t1 = globalThis.document, styleElement: e = null }){
        this._document = t1, this.nativeFontFaces = new Set, this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
    }
    addNativeFontFace(t1) {
        this.nativeFontFaces.add(t1), this._document.fonts.add(t1);
    }
    removeNativeFontFace(t1) {
        this.nativeFontFaces.delete(t1), this._document.fonts.delete(t1);
    }
    insertRule(t1) {
        this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
        const e = this.styleElement.sheet;
        e.insertRule(t1, e.cssRules.length);
    }
    clear() {
        for (const t1 of this.nativeFontFaces)this._document.fonts.delete(t1);
        this.nativeFontFaces.clear(), this.#Ai.clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
    }
    async loadSystemFont({ systemFontInfo: t1, disableFontFace: e, _inspectFont: i }) {
        if (t1 && !this.#Ai.has(t1.loadedName)) {
            if (dt(!e, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
                const { loadedName: e, src: s, style: n } = t1, r = new FontFace(e, s, n);
                this.addNativeFontFace(r);
                try {
                    await r.load(), this.#Ai.add(e), i?.(t1);
                } catch  {
                    ht(`Cannot load system font: ${t1.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(r);
                }
                return;
            }
            ct("Not implemented: loadSystemFont without the Font Loading API.");
        }
    }
    async bind(t1) {
        if (t1.attached || t1.missingFile && !t1.systemFontInfo) return;
        if (t1.attached = !0, t1.systemFontInfo) return void await this.loadSystemFont(t1);
        if (this.isFontLoadingAPISupported) {
            const e = t1.createNativeFontFace();
            if (e) {
                this.addNativeFontFace(e);
                try {
                    await e.loaded;
                } catch (i) {
                    throw ht(`Failed to load font '${e.family}': '${i}'.`), t1.disableFontFace = !0, i;
                }
            }
            return;
        }
        const e = t1.createFontFaceRule();
        if (e) {
            if (this.insertRule(e), this.isSyncFontLoadingSupported) return;
            await new Promise((e)=>{
                const i = this._queueLoadingCallback(e);
                this._prepareFontLoadEvent(t1, i);
            });
        }
    }
    get isFontLoadingAPISupported() {
        return gt(this, "isFontLoadingAPISupported", !!this._document?.fonts);
    }
    get isSyncFontLoadingSupported() {
        return gt(this, "isSyncFontLoadingSupported", S || St.platform.isFirefox);
    }
    _queueLoadingCallback(t1) {
        const { loadingRequests: e } = this, i = {
            done: !1,
            complete: function() {
                for(dt(!i.done, "completeRequest() cannot be called twice."), i.done = !0; e.length > 0 && e[0].done;){
                    const t1 = e.shift();
                    setTimeout(t1.callback, 0);
                }
            },
            callback: t1
        };
        return e.push(i), i;
    }
    get _loadTestFont() {
        return gt(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="));
    }
    _prepareFontLoadEvent(t1, e) {
        function i(t1, e) {
            return t1.charCodeAt(e) << 24 | t1.charCodeAt(e + 1) << 16 | t1.charCodeAt(e + 2) << 8 | 255 & t1.charCodeAt(e + 3);
        }
        function s(t1, e, i, s) {
            return t1.substring(0, e) + s + t1.substring(e + i);
        }
        let n, r;
        const a = this._document.createElement("canvas");
        a.width = 1, a.height = 1;
        const o = a.getContext("2d");
        let l = 0;
        const h = `lt${Date.now()}${this.loadTestFontId++}`;
        let c = this._loadTestFont;
        c = s(c, 976, h.length, h);
        const d = 1482184792;
        let u = i(c, 16);
        for(n = 0, r = h.length - 3; n < r; n += 4)u = u - d + i(h, n) | 0;
        var p;
        n < h.length && (u = u - d + i(h + "XXX", n) | 0), c = s(c, 16, 4, (p = u, String.fromCharCode(p >> 24 & 255, p >> 16 & 255, p >> 8 & 255, 255 & p)));
        const g = `@font-face {font-family:"${h}";src:${`url(data:font/opentype;base64,${btoa(c)});`}}`;
        this.insertRule(g);
        const m = this._document.createElement("div");
        m.style.visibility = "hidden", m.style.width = m.style.height = "10px", m.style.position = "absolute", m.style.top = m.style.left = "0px";
        for (const f of [
            t1.loadedName,
            h
        ]){
            const t1 = this._document.createElement("span");
            t1.textContent = "Hi", t1.style.fontFamily = f, m.append(t1);
        }
        this._document.body.append(m), function t1(e, i) {
            if (++l > 30) return ht("Load test font never loaded."), void i();
            o.font = "30px " + e, o.fillText(".", 0, 20), o.getImageData(0, 0, 1, 1).data[3] > 0 ? i() : setTimeout(t1.bind(null, e, i));
        }(h, ()=>{
            m.remove(), e.complete();
        });
    }
}
class Be {
    #_i;
    constructor(t1, e = null, i, s){
        this.compiledGlyphs = Object.create(null), this.#_i = t1, this._inspectFont = e, i && Object.assign(this, i), s && (this.charProcOperatorList = s);
    }
    createNativeFontFace() {
        if (!this.data || this.disableFontFace) return null;
        let t1;
        if (this.cssFontInfo) {
            const e = {
                weight: this.cssFontInfo.fontWeight
            };
            this.cssFontInfo.italicAngle && (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`), t1 = new FontFace(this.cssFontInfo.fontFamily, this.data, e);
        } else t1 = new FontFace(this.loadedName, this.data, {});
        return this._inspectFont?.(this), t1;
    }
    createFontFaceRule() {
        if (!this.data || this.disableFontFace) return null;
        const t1 = `url(data:${this.mimetype};base64,${Rt(this.data)});`;
        let e;
        if (this.cssFontInfo) {
            let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), e = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${t1}}`;
        } else e = `@font-face {font-family:"${this.loadedName}";src:${t1}}`;
        return this._inspectFont?.(this, t1), e;
    }
    getPathGenerator(t1, e) {
        if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
        const i = this.loadedName + "_path_" + e;
        let s;
        try {
            s = t1.get(i);
        } catch (r) {
            ht(`getPathGenerator - ignoring character: "${r}".`);
        }
        const n = new Path2D(s || "");
        return this.fontExtraProperties || t1.delete(i), this.compiledGlyphs[e] = n;
    }
    get black() {
        return this.#_i.black;
    }
    get bold() {
        return this.#_i.bold;
    }
    get disableFontFace() {
        return this.#_i.disableFontFace ?? !1;
    }
    get fontExtraProperties() {
        return this.#_i.fontExtraProperties ?? !1;
    }
    get isInvalidPDFjsFont() {
        return this.#_i.isInvalidPDFjsFont;
    }
    get isType3Font() {
        return this.#_i.isType3Font;
    }
    get italic() {
        return this.#_i.italic;
    }
    get missingFile() {
        return this.#_i.missingFile;
    }
    get remeasure() {
        return this.#_i.remeasure;
    }
    get vertical() {
        return this.#_i.vertical;
    }
    get ascent() {
        return this.#_i.ascent;
    }
    get defaultWidth() {
        return this.#_i.defaultWidth;
    }
    get descent() {
        return this.#_i.descent;
    }
    get bbox() {
        return this.#_i.bbox;
    }
    get fontMatrix() {
        return this.#_i.fontMatrix;
    }
    get fallbackName() {
        return this.#_i.fallbackName;
    }
    get loadedName() {
        return this.#_i.loadedName;
    }
    get mimetype() {
        return this.#_i.mimetype;
    }
    get name() {
        return this.#_i.name;
    }
    get data() {
        return this.#_i.data;
    }
    clearData() {
        this.#_i.clearData();
    }
    get cssFontInfo() {
        return this.#_i.cssFontInfo;
    }
    get systemFontInfo() {
        return this.#_i.systemFontInfo;
    }
    get defaultVMetrics() {
        return this.#_i.defaultVMetrics;
    }
}
function Fe(t1) {
    if ("string" != typeof t1) return null;
    if (t1.endsWith("/")) return t1;
    throw new Error(`Invalid factory url: "${t1}" must include trailing slash.`);
}
const Oe = (t1)=>"object" == typeof t1 && Number.isInteger(t1?.num) && t1.num >= 0 && Number.isInteger(t1?.gen) && t1.gen >= 0, Ne = (function(t1, e, i) {
    if (!Array.isArray(i) || i.length < 2) return !1;
    const [s, n, ...r] = i;
    if (!t1(s) && !Number.isInteger(s)) return !1;
    if (!e(n)) return !1;
    const a = r.length;
    let o = !0;
    switch(n.name){
        case "XYZ":
            if (a < 2 || a > 3) return !1;
            break;
        case "Fit":
        case "FitB":
            return 0 === a;
        case "FitH":
        case "FitBH":
        case "FitV":
        case "FitBV":
            if (a > 1) return !1;
            break;
        case "FitR":
            if (4 !== a) return !1;
            o = !1;
            break;
        default:
            return !1;
    }
    for (const l of r)if (!("number" == typeof l || o && null === l)) return !1;
    return !0;
}).bind(null, Oe, (t1)=>"object" == typeof t1 && "string" == typeof t1?.name);
class Ue {
    #Si = new Map;
    #Ei = Promise.resolve();
    postMessage(t1, e) {
        const i = {
            data: structuredClone(t1, e ? {
                transfer: e
            } : null)
        };
        this.#Ei.then(()=>{
            for (const [t1] of this.#Si)t1.call(this, i);
        });
    }
    addEventListener(t1, e, i = null) {
        let s = null;
        if (i?.signal instanceof AbortSignal) {
            const { signal: n } = i;
            if (n.aborted) return void ht("LoopbackPort - cannot use an `aborted` signal.");
            const r = ()=>this.removeEventListener(t1, e);
            s = ()=>n.removeEventListener("abort", r), n.addEventListener("abort", r);
        }
        this.#Si.set(e, s);
    }
    removeEventListener(t1, e) {
        const i = this.#Si.get(e);
        i?.(), this.#Si.delete(e);
    }
    terminate() {
        for (const [, t1] of this.#Si)t1?.();
        this.#Si.clear();
    }
}
const ze = 1, He = 2, je = 1, $e = 2, Ve = 3, Ge = 4, We = 5, qe = 6, Xe = 7, Ye = 8;
function Ke() {}
function Qe(t1) {
    if (t1 instanceof xt || t1 instanceof vt || t1 instanceof ft || t1 instanceof yt || t1 instanceof bt) return t1;
    switch(t1 instanceof Error || "object" == typeof t1 && null !== t1 || ct('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), t1.name){
        case "AbortException":
            return new xt(t1.message);
        case "InvalidPDFException":
            return new vt(t1.message);
        case "PasswordException":
            return new ft(t1.message, t1.code);
        case "ResponseException":
            return new yt(t1.message, t1.status, t1.missing);
        case "UnknownErrorException":
            return new bt(t1.message, t1.details);
    }
    return new bt(t1.message, t1.toString());
}
class Je {
    #Ci = new AbortController;
    constructor(t1, e, i){
        this.sourceName = t1, this.targetName = e, this.comObj = i, this.callbackId = 1, this.streamId = 1, this.streamSinks = Object.create(null), this.streamControllers = Object.create(null), this.callbackCapabilities = Object.create(null), this.actionHandler = Object.create(null), i.addEventListener("message", this.#Ti.bind(this), {
            signal: this.#Ci.signal
        });
    }
    #Ti({ data: t1 }) {
        if (t1.targetName !== this.sourceName) return;
        if (t1.stream) return void this.#Mi(t1);
        if (t1.callback) {
            const e = t1.callbackId, i = this.callbackCapabilities[e];
            if (!i) throw new Error(`Cannot resolve callback ${e}`);
            if (delete this.callbackCapabilities[e], t1.callback === ze) i.resolve(t1.data);
            else {
                if (t1.callback !== He) throw new Error("Unexpected callback case");
                i.reject(Qe(t1.reason));
            }
            return;
        }
        const e = this.actionHandler[t1.action];
        if (!e) throw new Error(`Unknown action from worker: ${t1.action}`);
        if (t1.callbackId) {
            const i = this.sourceName, s = t1.sourceName, n = this.comObj;
            return void Promise.try(e, t1.data).then(function(e) {
                n.postMessage({
                    sourceName: i,
                    targetName: s,
                    callback: ze,
                    callbackId: t1.callbackId,
                    data: e
                });
            }, function(e) {
                n.postMessage({
                    sourceName: i,
                    targetName: s,
                    callback: He,
                    callbackId: t1.callbackId,
                    reason: Qe(e)
                });
            });
        }
        t1.streamId ? this.#Di(t1) : e(t1.data);
    }
    on(t1, e) {
        const i = this.actionHandler;
        if (i[t1]) throw new Error(`There is already an actionName called "${t1}"`);
        i[t1] = e;
    }
    send(t1, e, i) {
        this.comObj.postMessage({
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: t1,
            data: e
        }, i);
    }
    sendWithPromise(t1, e, i) {
        const s = this.callbackId++, n = Promise.withResolvers();
        this.callbackCapabilities[s] = n;
        try {
            this.comObj.postMessage({
                sourceName: this.sourceName,
                targetName: this.targetName,
                action: t1,
                callbackId: s,
                data: e
            }, i);
        } catch (r) {
            n.reject(r);
        }
        return n.promise;
    }
    sendWithStream(t1, e, i, s) {
        const n = this.streamId++, r = this.sourceName, a = this.targetName, o = this.comObj;
        return new ReadableStream({
            start: (i)=>{
                const l = Promise.withResolvers();
                return this.streamControllers[n] = {
                    controller: i,
                    startCall: l,
                    pullCall: null,
                    cancelCall: null,
                    isClosed: !1
                }, o.postMessage({
                    sourceName: r,
                    targetName: a,
                    action: t1,
                    streamId: n,
                    data: e,
                    desiredSize: i.desiredSize
                }, s), l.promise;
            },
            pull: (t1)=>{
                const e = Promise.withResolvers();
                return this.streamControllers[n].pullCall = e, o.postMessage({
                    sourceName: r,
                    targetName: a,
                    stream: qe,
                    streamId: n,
                    desiredSize: t1.desiredSize
                }), e.promise;
            },
            cancel: (t1)=>{
                dt(t1 instanceof Error, "cancel must have a valid reason");
                const e = Promise.withResolvers();
                return this.streamControllers[n].cancelCall = e, this.streamControllers[n].isClosed = !0, o.postMessage({
                    sourceName: r,
                    targetName: a,
                    stream: je,
                    streamId: n,
                    reason: Qe(t1)
                }), e.promise;
            }
        }, i);
    }
    #Di(t1) {
        const e = t1.streamId, i = this.sourceName, s = t1.sourceName, n = this.comObj, r = this, a = this.actionHandler[t1.action], o = {
            enqueue (t1, r = 1, a) {
                if (this.isCancelled) return;
                const o = this.desiredSize;
                this.desiredSize -= r, o > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), n.postMessage({
                    sourceName: i,
                    targetName: s,
                    stream: Ge,
                    streamId: e,
                    chunk: t1
                }, a);
            },
            close () {
                this.isCancelled || (this.isCancelled = !0, n.postMessage({
                    sourceName: i,
                    targetName: s,
                    stream: Ve,
                    streamId: e
                }), delete r.streamSinks[e]);
            },
            error (t1) {
                dt(t1 instanceof Error, "error must have a valid reason"), this.isCancelled || (this.isCancelled = !0, n.postMessage({
                    sourceName: i,
                    targetName: s,
                    stream: We,
                    streamId: e,
                    reason: Qe(t1)
                }));
            },
            sinkCapability: Promise.withResolvers(),
            onPull: null,
            onCancel: null,
            isCancelled: !1,
            desiredSize: t1.desiredSize,
            ready: null
        };
        o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[e] = o, Promise.try(a, t1.data, o).then(function() {
            n.postMessage({
                sourceName: i,
                targetName: s,
                stream: Ye,
                streamId: e,
                success: !0
            });
        }, function(t1) {
            n.postMessage({
                sourceName: i,
                targetName: s,
                stream: Ye,
                streamId: e,
                reason: Qe(t1)
            });
        });
    }
    #Mi(t1) {
        const e = t1.streamId, i = this.sourceName, s = t1.sourceName, n = this.comObj, r = this.streamControllers[e], a = this.streamSinks[e];
        switch(t1.stream){
            case Ye:
                t1.success ? r.startCall.resolve() : r.startCall.reject(Qe(t1.reason));
                break;
            case Xe:
                t1.success ? r.pullCall.resolve() : r.pullCall.reject(Qe(t1.reason));
                break;
            case qe:
                if (!a) {
                    n.postMessage({
                        sourceName: i,
                        targetName: s,
                        stream: Xe,
                        streamId: e,
                        success: !0
                    });
                    break;
                }
                a.desiredSize <= 0 && t1.desiredSize > 0 && a.sinkCapability.resolve(), a.desiredSize = t1.desiredSize, Promise.try(a.onPull || Ke).then(function() {
                    n.postMessage({
                        sourceName: i,
                        targetName: s,
                        stream: Xe,
                        streamId: e,
                        success: !0
                    });
                }, function(t1) {
                    n.postMessage({
                        sourceName: i,
                        targetName: s,
                        stream: Xe,
                        streamId: e,
                        reason: Qe(t1)
                    });
                });
                break;
            case Ge:
                if (dt(r, "enqueue should have stream controller"), r.isClosed) break;
                r.controller.enqueue(t1.chunk);
                break;
            case Ve:
                if (dt(r, "close should have stream controller"), r.isClosed) break;
                r.isClosed = !0, r.controller.close(), this.#Pi(r, e);
                break;
            case We:
                dt(r, "error should have stream controller"), r.controller.error(Qe(t1.reason)), this.#Pi(r, e);
                break;
            case $e:
                t1.success ? r.cancelCall.resolve() : r.cancelCall.reject(Qe(t1.reason)), this.#Pi(r, e);
                break;
            case je:
                if (!a) break;
                const o = Qe(t1.reason);
                Promise.try(a.onCancel || Ke, o).then(function() {
                    n.postMessage({
                        sourceName: i,
                        targetName: s,
                        stream: $e,
                        streamId: e,
                        success: !0
                    });
                }, function(t1) {
                    n.postMessage({
                        sourceName: i,
                        targetName: s,
                        stream: $e,
                        streamId: e,
                        reason: Qe(t1)
                    });
                }), a.sinkCapability.reject(o), a.isCancelled = !0, delete this.streamSinks[e];
                break;
            default:
                throw new Error("Unexpected stream case");
        }
    }
    async #Pi(t1, e) {
        await Promise.allSettled([
            t1.startCall?.promise,
            t1.pullCall?.promise,
            t1.cancelCall?.promise
        ]), delete this.streamControllers[e];
    }
    destroy() {
        this.#Ci?.abort(), this.#Ci = null;
    }
}
class Ze {
    #ki = !1;
    constructor({ enableHWA: t1 = !1 }){
        this.#ki = t1;
    }
    create(t1, e) {
        if (t1 <= 0 || e <= 0) throw new Error("Invalid canvas size");
        const i = this._createCanvas(t1, e);
        return {
            canvas: i,
            context: i.getContext("2d", {
                willReadFrequently: !this.#ki
            })
        };
    }
    reset(t1, e, i) {
        if (!t1.canvas) throw new Error("Canvas is not specified");
        if (e <= 0 || i <= 0) throw new Error("Invalid canvas size");
        t1.canvas.width = e, t1.canvas.height = i;
    }
    destroy(t1) {
        if (!t1.canvas) throw new Error("Canvas is not specified");
        t1.canvas.width = 0, t1.canvas.height = 0, t1.canvas = null, t1.context = null;
    }
    _createCanvas(t1, e) {
        ct("Abstract method `_createCanvas` called.");
    }
}
class ti extends Ze {
    constructor({ ownerDocument: t1 = globalThis.document, enableHWA: e = !1 }){
        super({
            enableHWA: e
        }), this._document = t1;
    }
    _createCanvas(t1, e) {
        const i = this._document.createElement("canvas");
        return i.width = t1, i.height = e, i;
    }
}
class ei {
    constructor({ baseUrl: t1 = null, isCompressed: e = !0 }){
        this.baseUrl = t1, this.isCompressed = e;
    }
    async fetch({ name: t1 }) {
        if (!this.baseUrl) throw new Error("Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.");
        if (!t1) throw new Error("CMap name must be specified.");
        const e = this.baseUrl + t1 + (this.isCompressed ? ".bcmap" : "");
        return this._fetch(e).then((t1)=>({
                cMapData: t1,
                isCompressed: this.isCompressed
            })).catch((t1)=>{
            throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
        });
    }
    async _fetch(t1) {
        ct("Abstract method `_fetch` called.");
    }
}
class ii extends ei {
    async _fetch(t1) {
        const e = await Nt(t1, this.isCompressed ? "arraybuffer" : "text");
        return e instanceof ArrayBuffer ? new Uint8Array(e) : _t(e);
    }
}
_(2489);
class si {
    addFilter(t1) {
        return "none";
    }
    addHCMFilter(t1, e) {
        return "none";
    }
    addAlphaFilter(t1) {
        return "none";
    }
    addLuminosityFilter(t1) {
        return "none";
    }
    addHighlightHCMFilter(t1, e, i, s, n) {
        return "none";
    }
    destroy(t1 = !1) {}
}
class ni extends si {
    #Ii;
    #Ri;
    #Li;
    #Bi;
    #Fi;
    #Oi;
    #x = 0;
    constructor({ docId: t1, ownerDocument: e = globalThis.document }){
        super(), this.#Bi = t1, this.#Fi = e;
    }
    get #_() {
        return this.#Ri ||= new Map;
    }
    get #Ni() {
        return this.#Oi ||= new Map;
    }
    get #Ui() {
        if (!this.#Li) {
            const t1 = this.#Fi.createElement("div"), { style: e } = t1;
            e.visibility = "hidden", e.contain = "strict", e.width = e.height = 0, e.position = "absolute", e.top = e.left = 0, e.zIndex = -1;
            const i = this.#Fi.createElementNS(Ft, "svg");
            i.setAttribute("width", 0), i.setAttribute("height", 0), this.#Li = this.#Fi.createElementNS(Ft, "defs"), t1.append(i), i.append(this.#Li), this.#Fi.body.append(t1);
        }
        return this.#Li;
    }
    #zi(t1) {
        if (1 === t1.length) {
            const e = t1[0], i = new Array(256);
            for(let t1 = 0; t1 < 256; t1++)i[t1] = e[t1] / 255;
            const s = i.join(",");
            return [
                s,
                s,
                s
            ];
        }
        const [e, i, s] = t1, n = new Array(256), r = new Array(256), a = new Array(256);
        for(let o = 0; o < 256; o++)n[o] = e[o] / 255, r[o] = i[o] / 255, a[o] = s[o] / 255;
        return [
            n.join(","),
            r.join(","),
            a.join(",")
        ];
    }
    #Hi(t1) {
        if (void 0 === this.#Ii) {
            this.#Ii = "";
            const t1 = this.#Fi.URL;
            t1 !== this.#Fi.baseURI && (Ht(t1) ? ht('#createUrl: ignore "data:"-URL for performance reasons.') : this.#Ii = pt(t1, ""));
        }
        return `url(${this.#Ii}#${t1})`;
    }
    addFilter(t1) {
        if (!t1) return "none";
        let e = this.#_.get(t1);
        if (e) return e;
        const [i, s, n] = this.#zi(t1), r = 1 === t1.length ? i : `${i}${s}${n}`;
        if (e = this.#_.get(r), e) return this.#_.set(t1, e), e;
        const a = `g_${this.#Bi}_transfer_map_${this.#x++}`, o = this.#Hi(a);
        this.#_.set(t1, o), this.#_.set(r, o);
        const l = this.#ji(a);
        return this.#$i(i, s, n, l), o;
    }
    addHCMFilter(t1, e) {
        const i = `${t1}-${e}`, s = "base";
        let n = this.#Ni.get(s);
        if (n?.key === i) return n.url;
        if (n ? (n.filter?.remove(), n.key = i, n.url = "none", n.filter = null) : (n = {
            key: i,
            url: "none",
            filter: null
        }, this.#Ni.set(s, n)), !t1 || !e) return n.url;
        const r = this.#Vi(t1);
        t1 = Ct.makeHexColor(...r);
        const a = this.#Vi(e);
        if (e = Ct.makeHexColor(...a), this.#Ui.style.color = "", "#000000" === t1 && "#ffffff" === e || t1 === e) return n.url;
        const o = new Array(256);
        for(let u = 0; u <= 255; u++){
            const t1 = u / 255;
            o[u] = t1 <= .03928 ? t1 / 12.92 : ((t1 + .055) / 1.055) ** 2.4;
        }
        const l = o.join(","), h = `g_${this.#Bi}_hcm_filter`, c = n.filter = this.#ji(h);
        this.#$i(l, l, l, c), this.#Gi(c);
        const d = (t1, e)=>{
            const i = r[t1] / 255, s = a[t1] / 255, n = new Array(e + 1);
            for(let r = 0; r <= e; r++)n[r] = i + r / e * (s - i);
            return n.join(",");
        };
        return this.#$i(d(0, 5), d(1, 5), d(2, 5), c), n.url = this.#Hi(h), n.url;
    }
    addAlphaFilter(t1) {
        let e = this.#_.get(t1);
        if (e) return e;
        const [i] = this.#zi([
            t1
        ]), s = `alpha_${i}`;
        if (e = this.#_.get(s), e) return this.#_.set(t1, e), e;
        const n = `g_${this.#Bi}_alpha_map_${this.#x++}`, r = this.#Hi(n);
        this.#_.set(t1, r), this.#_.set(s, r);
        const a = this.#ji(n);
        return this.#Wi(i, a), r;
    }
    addLuminosityFilter(t1) {
        let e, i, s = this.#_.get(t1 || "luminosity");
        if (s) return s;
        if (t1 ? ([e] = this.#zi([
            t1
        ]), i = `luminosity_${e}`) : i = "luminosity", s = this.#_.get(i), s) return this.#_.set(t1, s), s;
        const n = `g_${this.#Bi}_luminosity_map_${this.#x++}`, r = this.#Hi(n);
        this.#_.set(t1, r), this.#_.set(i, r);
        const a = this.#ji(n);
        return this.#qi(a), t1 && this.#Wi(e, a), r;
    }
    addHighlightHCMFilter(t1, e, i, s, n) {
        const r = `${e}-${i}-${s}-${n}`;
        let a = this.#Ni.get(t1);
        if (a?.key === r) return a.url;
        if (a ? (a.filter?.remove(), a.key = r, a.url = "none", a.filter = null) : (a = {
            key: r,
            url: "none",
            filter: null
        }, this.#Ni.set(t1, a)), !e || !i) return a.url;
        const [o, l] = [
            e,
            i
        ].map(this.#Vi.bind(this));
        let h = Math.round(.2126 * o[0] + .7152 * o[1] + .0722 * o[2]), c = Math.round(.2126 * l[0] + .7152 * l[1] + .0722 * l[2]), [d, u] = [
            s,
            n
        ].map(this.#Vi.bind(this));
        c < h && ([h, c, d, u] = [
            c,
            h,
            u,
            d
        ]), this.#Ui.style.color = "";
        const p = (t1, e, i)=>{
            const s = new Array(256), n = (c - h) / i, r = t1 / 255, a = (e - t1) / (255 * i);
            let o = 0;
            for(let l = 0; l <= i; l++){
                const t1 = Math.round(h + l * n), e = r + l * a;
                for(let i = o; i <= t1; i++)s[i] = e;
                o = t1 + 1;
            }
            for(let l = o; l < 256; l++)s[l] = s[o - 1];
            return s.join(",");
        }, g = `g_${this.#Bi}_hcm_${t1}_filter`, m = a.filter = this.#ji(g);
        return this.#Gi(m), this.#$i(p(d[0], u[0], 5), p(d[1], u[1], 5), p(d[2], u[2], 5), m), a.url = this.#Hi(g), a.url;
    }
    destroy(t1 = !1) {
        t1 && this.#Oi?.size || (this.#Li?.parentNode.parentNode.remove(), this.#Li = null, this.#Ri?.clear(), this.#Ri = null, this.#Oi?.clear(), this.#Oi = null, this.#x = 0);
    }
    #qi(t1) {
        const e = this.#Fi.createElementNS(Ft, "feColorMatrix");
        e.setAttribute("type", "matrix"), e.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), t1.append(e);
    }
    #Gi(t1) {
        const e = this.#Fi.createElementNS(Ft, "feColorMatrix");
        e.setAttribute("type", "matrix"), e.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), t1.append(e);
    }
    #ji(t1) {
        const e = this.#Fi.createElementNS(Ft, "filter");
        return e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("id", t1), this.#Ui.append(e), e;
    }
    #Xi(t1, e, i) {
        const s = this.#Fi.createElementNS(Ft, e);
        s.setAttribute("type", "discrete"), s.setAttribute("tableValues", i), t1.append(s);
    }
    #$i(t1, e, i, s) {
        const n = this.#Fi.createElementNS(Ft, "feComponentTransfer");
        s.append(n), this.#Xi(n, "feFuncR", t1), this.#Xi(n, "feFuncG", e), this.#Xi(n, "feFuncB", i);
    }
    #Wi(t1, e) {
        const i = this.#Fi.createElementNS(Ft, "feComponentTransfer");
        e.append(i), this.#Xi(i, "feFuncA", t1);
    }
    #Vi(t1) {
        return this.#Ui.style.color = t1, Qt(getComputedStyle(this.#Ui).getPropertyValue("color"));
    }
}
class ri {
    constructor({ baseUrl: t1 = null }){
        this.baseUrl = t1;
    }
    async fetch({ filename: t1 }) {
        if (!this.baseUrl) throw new Error("Ensure that the `standardFontDataUrl` API parameter is provided.");
        if (!t1) throw new Error("Font filename must be specified.");
        const e = `${this.baseUrl}${t1}`;
        return this._fetch(e).catch((t1)=>{
            throw new Error(`Unable to load font data at: ${e}`);
        });
    }
    async _fetch(t1) {
        ct("Abstract method `_fetch` called.");
    }
}
class ai extends ri {
    async _fetch(t1) {
        const e = await Nt(t1, "arraybuffer");
        return new Uint8Array(e);
    }
}
class oi {
    constructor({ baseUrl: t1 = null }){
        this.baseUrl = t1;
    }
    async fetch({ filename: t1 }) {
        if (!this.baseUrl) throw new Error("Ensure that the `wasmUrl` API parameter is provided.");
        if (!t1) throw new Error("Wasm filename must be specified.");
        const e = `${this.baseUrl}${t1}`;
        return this._fetch(e).catch((t1)=>{
            throw new Error(`Unable to load wasm data at: ${e}`);
        });
    }
    async _fetch(t1) {
        ct("Abstract method `_fetch` called.");
    }
}
class li extends oi {
    async _fetch(t1) {
        const e = await Nt(t1, "arraybuffer");
        return new Uint8Array(e);
    }
}
if (S) {
    let t1;
    try {
        const e = process.getBuiltinModule("module").createRequire("undefined" == typeof document ? __turbopack_context__.r("[externals]/url [external] (url, cjs)").pathToFileURL(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/pdf-parse@2.4.5/node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs")).href : w && "SCRIPT" === w.tagName.toUpperCase() && w.src || new URL("index.cjs", document.baseURI).href);
        try {
            t1 = e("@napi-rs/canvas");
        } catch (Ir) {
            ht(`Cannot load "@napi-rs/canvas" package: "${Ir}".`);
        }
    } catch (Ir) {
        ht(`Cannot access the \`require\` function: "${Ir}".`);
    }
    globalThis.DOMMatrix || (t1?.DOMMatrix ? globalThis.DOMMatrix = t1.DOMMatrix : ht("Cannot polyfill `DOMMatrix`, rendering may be broken.")), globalThis.ImageData || (t1?.ImageData ? globalThis.ImageData = t1.ImageData : ht("Cannot polyfill `ImageData`, rendering may be broken.")), globalThis.Path2D || (t1?.Path2D ? globalThis.Path2D = t1.Path2D : ht("Cannot polyfill `Path2D`, rendering may be broken.")), globalThis.navigator?.language || (globalThis.navigator = {
        language: "en-US",
        platform: "",
        userAgent: ""
    });
}
async function hi(t1) {
    const e = process.getBuiltinModule("fs"), i = await e.promises.readFile(t1);
    return new Uint8Array(i);
}
class ci extends si {
}
class di extends Ze {
    _createCanvas(t1, e) {
        return process.getBuiltinModule("module").createRequire("undefined" == typeof document ? __turbopack_context__.r("[externals]/url [external] (url, cjs)").pathToFileURL(("TURBOPACK compile-time value", "/ROOT/node_modules/.pnpm/pdf-parse@2.4.5/node_modules/pdf-parse/dist/pdf-parse/cjs/index.cjs")).href : w && "SCRIPT" === w.tagName.toUpperCase() && w.src || new URL("index.cjs", document.baseURI).href)("@napi-rs/canvas").createCanvas(t1, e);
    }
}
class ui extends ei {
    async _fetch(t1) {
        return hi(t1);
    }
}
class pi extends ri {
    async _fetch(t1) {
        return hi(t1);
    }
}
class gi extends oi {
    async _fetch(t1) {
        return hi(t1);
    }
}
_(7588);
const mi = "__forcedDependency", { floor: fi, ceil: bi } = Math;
function vi(t1, e, i, s, n, r) {
    t1[4 * e + 0] = Math.min(t1[4 * e + 0], i), t1[4 * e + 1] = Math.min(t1[4 * e + 1], s), t1[4 * e + 2] = Math.max(t1[4 * e + 2], n), t1[4 * e + 3] = Math.max(t1[4 * e + 3], r);
}
const yi = new Uint32Array(new Uint8Array([
    255,
    255,
    0,
    0
]).buffer)[0];
class wi {
    #Yi;
    #Ki;
    constructor(t1, e){
        this.#Yi = t1, this.#Ki = e;
    }
    get length() {
        return this.#Yi.length;
    }
    isEmpty(t1) {
        return this.#Yi[t1] === yi;
    }
    minX(t1) {
        return this.#Ki[4 * t1 + 0] / 256;
    }
    minY(t1) {
        return this.#Ki[4 * t1 + 1] / 256;
    }
    maxX(t1) {
        return (this.#Ki[4 * t1 + 2] + 1) / 256;
    }
    maxY(t1) {
        return (this.#Ki[4 * t1 + 3] + 1) / 256;
    }
}
const xi = (t1, e)=>{
    if (!t1) return;
    let i = t1.get(e);
    return i || (i = {
        dependencies: new Set,
        isRenderingOperation: !1
    }, t1.set(e, i)), i;
};
class Ai {
    #Qi = {
        __proto__: null
    };
    #Ji = {
        __proto__: null,
        transform: [],
        moveText: [],
        sameLineText: [],
        [mi]: []
    };
    #Zi = new Map;
    #ts = [];
    #es = [];
    #is = [
        [
            1,
            0,
            0,
            1,
            0,
            0
        ]
    ];
    #ss = [
        -1 / 0,
        -1 / 0,
        1 / 0,
        1 / 0
    ];
    #ns = new Float64Array([
        1 / 0,
        1 / 0,
        -1 / 0,
        -1 / 0
    ]);
    #rs = -1;
    #as = new Set;
    #os = new Map;
    #ls = new Map;
    #hs;
    #cs;
    #ds;
    #Yi;
    #us;
    constructor(t1, e, i = !1){
        this.#hs = t1.width, this.#cs = t1.height, this.#ps(e), i && (this.#us = new Map);
    }
    growOperationsCount(t1) {
        t1 >= this.#Yi.length && this.#ps(t1, this.#Yi);
    }
    #ps(t1, e) {
        const i = new ArrayBuffer(4 * t1);
        this.#ds = new Uint8ClampedArray(i), this.#Yi = new Uint32Array(i), e && e.length > 0 ? (this.#Yi.set(e), this.#Yi.fill(yi, e.length)) : this.#Yi.fill(yi);
    }
    save(t1) {
        return this.#Qi = {
            __proto__: this.#Qi
        }, this.#Ji = {
            __proto__: this.#Ji,
            transform: {
                __proto__: this.#Ji.transform
            },
            moveText: {
                __proto__: this.#Ji.moveText
            },
            sameLineText: {
                __proto__: this.#Ji.sameLineText
            },
            [mi]: {
                __proto__: this.#Ji[mi]
            }
        }, this.#ss = {
            __proto__: this.#ss
        }, this.#ts.push(t1), this;
    }
    restore(t1) {
        const e = Object.getPrototypeOf(this.#Qi);
        if (null === e) return this;
        this.#Qi = e, this.#Ji = Object.getPrototypeOf(this.#Ji), this.#ss = Object.getPrototypeOf(this.#ss);
        const i = this.#ts.pop();
        return void 0 !== i && (xi(this.#us, t1)?.dependencies.add(i), this.#Yi[t1] = this.#Yi[i]), this;
    }
    recordOpenMarker(t1) {
        return this.#ts.push(t1), this;
    }
    getOpenMarker() {
        return 0 === this.#ts.length ? null : this.#ts.at(-1);
    }
    recordCloseMarker(t1) {
        const e = this.#ts.pop();
        return void 0 !== e && (xi(this.#us, t1)?.dependencies.add(e), this.#Yi[t1] = this.#Yi[e]), this;
    }
    beginMarkedContent(t1) {
        return this.#es.push(t1), this;
    }
    endMarkedContent(t1) {
        const e = this.#es.pop();
        return void 0 !== e && (xi(this.#us, t1)?.dependencies.add(e), this.#Yi[t1] = this.#Yi[e]), this;
    }
    pushBaseTransform(t1) {
        return this.#is.push(Ct.multiplyByDOMMatrix(this.#is.at(-1), t1.getTransform())), this;
    }
    popBaseTransform() {
        return this.#is.length > 1 && this.#is.pop(), this;
    }
    recordSimpleData(t1, e) {
        return this.#Qi[t1] = e, this;
    }
    recordIncrementalData(t1, e) {
        return this.#Ji[t1].push(e), this;
    }
    resetIncrementalData(t1, e) {
        return this.#Ji[t1].length = 0, this;
    }
    recordNamedData(t1, e) {
        return this.#Zi.set(t1, e), this;
    }
    recordSimpleDataFromNamed(t1, e, i) {
        this.#Qi[t1] = this.#Zi.get(e) ?? i;
    }
    recordFutureForcedDependency(t1, e) {
        return this.recordIncrementalData(mi, e), this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t1) {
        for (const e of t1)e in this.#Qi && this.recordFutureForcedDependency(e, this.#Qi[e]);
        return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
        for (const t1 of this.#as)this.recordFutureForcedDependency(mi, t1);
        return this;
    }
    resetBBox(t1) {
        return this.#rs !== t1 && (this.#rs = t1, this.#ns[0] = 1 / 0, this.#ns[1] = 1 / 0, this.#ns[2] = -1 / 0, this.#ns[3] = -1 / 0), this;
    }
    recordClipBox(t1, e, i, s, n, r) {
        const a = Ct.multiplyByDOMMatrix(this.#is.at(-1), e.getTransform()), o = [
            1 / 0,
            1 / 0,
            -1 / 0,
            -1 / 0
        ];
        Ct.axialAlignedBoundingBox([
            i,
            n,
            s,
            r
        ], a, o);
        const l = Ct.intersect(this.#ss, o);
        return l ? (this.#ss[0] = l[0], this.#ss[1] = l[1], this.#ss[2] = l[2], this.#ss[3] = l[3]) : (this.#ss[0] = this.#ss[1] = 1 / 0, this.#ss[2] = this.#ss[3] = -1 / 0), this;
    }
    recordBBox(t1, e, i, s, n, r) {
        const a = this.#ss;
        if (a[0] === 1 / 0) return this;
        const o = Ct.multiplyByDOMMatrix(this.#is.at(-1), e.getTransform());
        if (a[0] === -1 / 0) return Ct.axialAlignedBoundingBox([
            i,
            n,
            s,
            r
        ], o, this.#ns), this;
        const l = [
            1 / 0,
            1 / 0,
            -1 / 0,
            -1 / 0
        ];
        return Ct.axialAlignedBoundingBox([
            i,
            n,
            s,
            r
        ], o, l), this.#ns[0] = Math.min(this.#ns[0], Math.max(l[0], a[0])), this.#ns[1] = Math.min(this.#ns[1], Math.max(l[1], a[1])), this.#ns[2] = Math.max(this.#ns[2], Math.min(l[2], a[2])), this.#ns[3] = Math.max(this.#ns[3], Math.min(l[3], a[3])), this;
    }
    recordCharacterBBox(t1, e, i, s = 1, n = 0, r = 0, a) {
        const o = i.bbox;
        let l, h;
        if (o && (l = o[2] !== o[0] && o[3] !== o[1] && this.#ls.get(i), !1 !== l && (h = [
            0,
            0,
            0,
            0
        ], Ct.axialAlignedBoundingBox(o, i.fontMatrix, h), 1 === s && 0 === n && 0 === r || Ct.scaleMinMax([
            s,
            0,
            0,
            -s,
            n,
            r
        ], h), l))) return this.recordBBox(t1, e, h[0], h[2], h[1], h[3]);
        if (!a) return this.recordFullPageBBox(t1);
        const c = a();
        return o && h && void 0 === l && (l = h[0] <= n - c.actualBoundingBoxLeft && h[2] >= n + c.actualBoundingBoxRight && h[1] <= r - c.actualBoundingBoxAscent && h[3] >= r + c.actualBoundingBoxDescent, this.#ls.set(i, l), l) ? this.recordBBox(t1, e, h[0], h[2], h[1], h[3]) : this.recordBBox(t1, e, n - c.actualBoundingBoxLeft, n + c.actualBoundingBoxRight, r - c.actualBoundingBoxAscent, r + c.actualBoundingBoxDescent);
    }
    recordFullPageBBox(t1) {
        return this.#ns[0] = Math.max(0, this.#ss[0]), this.#ns[1] = Math.max(0, this.#ss[1]), this.#ns[2] = Math.min(this.#hs, this.#ss[2]), this.#ns[3] = Math.min(this.#cs, this.#ss[3]), this;
    }
    getSimpleIndex(t1) {
        return this.#Qi[t1];
    }
    recordDependencies(t1, e) {
        const i = this.#as, s = this.#Qi, n = this.#Ji;
        for (const r of e)r in this.#Qi ? i.add(s[r]) : r in n && n[r].forEach(i.add, i);
        return this;
    }
    recordNamedDependency(t1, e) {
        return this.#Zi.has(e) && this.#as.add(this.#Zi.get(e)), this;
    }
    recordOperation(t1, e = !1) {
        if (this.recordDependencies(t1, [
            mi
        ]), this.#us) {
            const e = xi(this.#us, t1), { dependencies: i } = e;
            this.#as.forEach(i.add, i), this.#ts.forEach(i.add, i), this.#es.forEach(i.add, i), i.delete(t1), e.isRenderingOperation = !0;
        }
        if (this.#rs === t1) {
            const i = fi(256 * this.#ns[0] / this.#hs), s = fi(256 * this.#ns[1] / this.#cs), n = bi(256 * this.#ns[2] / this.#hs), r = bi(256 * this.#ns[3] / this.#cs);
            vi(this.#ds, t1, i, s, n, r);
            for (const e of this.#as)e !== t1 && vi(this.#ds, e, i, s, n, r);
            for (const e of this.#ts)e !== t1 && vi(this.#ds, e, i, s, n, r);
            for (const e of this.#es)e !== t1 && vi(this.#ds, e, i, s, n, r);
            e || (this.#as.clear(), this.#rs = -1);
        }
        return this;
    }
    recordShowTextOperation(t1, e = !1) {
        const i = Array.from(this.#as);
        this.recordOperation(t1, e), this.recordIncrementalData("sameLineText", t1);
        for (const s of i)this.recordIncrementalData("sameLineText", s);
        return this;
    }
    bboxToClipBoxDropOperation(t1, e = !1) {
        return this.#rs === t1 && (this.#rs = -1, this.#ss[0] = Math.max(this.#ss[0], this.#ns[0]), this.#ss[1] = Math.max(this.#ss[1], this.#ns[1]), this.#ss[2] = Math.min(this.#ss[2], this.#ns[2]), this.#ss[3] = Math.min(this.#ss[3], this.#ns[3]), e || this.#as.clear()), this;
    }
    _takePendingDependencies() {
        const t1 = this.#as;
        return this.#as = new Set, t1;
    }
    _extractOperation(t1) {
        const e = this.#os.get(t1);
        return this.#os.delete(t1), e;
    }
    _pushPendingDependencies(t1) {
        for (const e of t1)this.#as.add(e);
    }
    take() {
        return this.#ls.clear(), new wi(this.#Yi, this.#ds);
    }
    takeDebugMetadata() {
        return this.#us;
    }
}
class _i {
    #gs;
    #ms;
    #fs;
    #bs = 0;
    #vs = 0;
    constructor(t1, e, i){
        if (t1 instanceof _i && t1.#fs === !!i) return t1;
        this.#gs = t1, this.#ms = e, this.#fs = !!i;
    }
    growOperationsCount() {
        throw new Error("Unreachable");
    }
    save(t1) {
        return this.#vs++, this.#gs.save(this.#ms), this;
    }
    restore(t1) {
        return this.#vs > 0 && (this.#gs.restore(this.#ms), this.#vs--), this;
    }
    recordOpenMarker(t1) {
        return this.#bs++, this;
    }
    getOpenMarker() {
        return this.#bs > 0 ? this.#ms : this.#gs.getOpenMarker();
    }
    recordCloseMarker(t1) {
        return this.#bs--, this;
    }
    beginMarkedContent(t1) {
        return this;
    }
    endMarkedContent(t1) {
        return this;
    }
    pushBaseTransform(t1) {
        return this.#gs.pushBaseTransform(t1), this;
    }
    popBaseTransform() {
        return this.#gs.popBaseTransform(), this;
    }
    recordSimpleData(t1, e) {
        return this.#gs.recordSimpleData(t1, this.#ms), this;
    }
    recordIncrementalData(t1, e) {
        return this.#gs.recordIncrementalData(t1, this.#ms), this;
    }
    resetIncrementalData(t1, e) {
        return this.#gs.resetIncrementalData(t1, this.#ms), this;
    }
    recordNamedData(t1, e) {
        return this;
    }
    recordSimpleDataFromNamed(t1, e, i) {
        return this.#gs.recordSimpleDataFromNamed(t1, e, this.#ms), this;
    }
    recordFutureForcedDependency(t1, e) {
        return this.#gs.recordFutureForcedDependency(t1, this.#ms), this;
    }
    inheritSimpleDataAsFutureForcedDependencies(t1) {
        return this.#gs.inheritSimpleDataAsFutureForcedDependencies(t1), this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
        return this.#gs.inheritPendingDependenciesAsFutureForcedDependencies(), this;
    }
    resetBBox(t1) {
        return this.#fs || this.#gs.resetBBox(this.#ms), this;
    }
    recordClipBox(t1, e, i, s, n, r) {
        return this.#fs || this.#gs.recordClipBox(this.#ms, e, i, s, n, r), this;
    }
    recordBBox(t1, e, i, s, n, r) {
        return this.#fs || this.#gs.recordBBox(this.#ms, e, i, s, n, r), this;
    }
    recordCharacterBBox(t1, e, i, s, n, r, a) {
        return this.#fs || this.#gs.recordCharacterBBox(this.#ms, e, i, s, n, r, a), this;
    }
    recordFullPageBBox(t1) {
        return this.#fs || this.#gs.recordFullPageBBox(this.#ms), this;
    }
    getSimpleIndex(t1) {
        return this.#gs.getSimpleIndex(t1);
    }
    recordDependencies(t1, e) {
        return this.#gs.recordDependencies(this.#ms, e), this;
    }
    recordNamedDependency(t1, e) {
        return this.#gs.recordNamedDependency(this.#ms, e), this;
    }
    recordOperation(t1) {
        return this.#gs.recordOperation(this.#ms, !0), this;
    }
    recordShowTextOperation(t1) {
        return this.#gs.recordShowTextOperation(this.#ms, !0), this;
    }
    bboxToClipBoxDropOperation(t1) {
        return this.#fs || this.#gs.bboxToClipBoxDropOperation(this.#ms, !0), this;
    }
    take() {
        throw new Error("Unreachable");
    }
    takeDebugMetadata() {
        throw new Error("Unreachable");
    }
}
const Si = [
    "path",
    "transform",
    "filter",
    "strokeColor",
    "strokeAlpha",
    "lineWidth",
    "lineCap",
    "lineJoin",
    "miterLimit",
    "dash"
], Ei = [
    "path",
    "transform",
    "filter",
    "fillColor",
    "fillAlpha",
    "globalCompositeOperation",
    "SMask"
], Ci = [
    "transform",
    "SMask",
    "filter",
    "fillAlpha",
    "strokeAlpha",
    "globalCompositeOperation"
], Ti = [
    "filter",
    "fillColor",
    "fillAlpha"
], Mi = [
    "transform",
    "leading",
    "charSpacing",
    "wordSpacing",
    "hScale",
    "textRise",
    "moveText",
    "textMatrix",
    "font",
    "fontObj",
    "filter",
    "fillColor",
    "textRenderingMode",
    "SMask",
    "fillAlpha",
    "strokeAlpha",
    "globalCompositeOperation",
    "sameLineText"
], Di = [
    "transform"
], Pi = [
    "transform",
    "fillColor"
], ki = "Fill", Ii = "Stroke", Ri = "Shading";
function Li(t1, e) {
    if (!e) return;
    const i = e[2] - e[0], s = e[3] - e[1], n = new Path2D;
    n.rect(e[0], e[1], i, s), t1.clip(n);
}
class Bi {
    isModifyingCurrentTransform() {
        return !1;
    }
    getPattern() {
        ct("Abstract method `getPattern` called.");
    }
}
class Fi extends Bi {
    constructor(t1){
        super(), this._type = t1[1], this._bbox = t1[2], this._colorStops = t1[3], this._p0 = t1[4], this._p1 = t1[5], this._r0 = t1[6], this._r1 = t1[7], this.matrix = null;
    }
    _createGradient(t1) {
        let e;
        "axial" === this._type ? e = t1.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : "radial" === this._type && (e = t1.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
        for (const i of this._colorStops)e.addColorStop(i[0], i[1]);
        return e;
    }
    getPattern(t1, e, i, s) {
        let n;
        if (s === Ii || s === ki) {
            const r = e.current.getClippedPathBoundingBox(s, Jt(t1)) || [
                0,
                0,
                0,
                0
            ], a = Math.ceil(r[2] - r[0]) || 1, o = Math.ceil(r[3] - r[1]) || 1, l = e.cachedCanvases.getCanvas("pattern", a, o), h = l.context;
            h.clearRect(0, 0, h.canvas.width, h.canvas.height), h.beginPath(), h.rect(0, 0, h.canvas.width, h.canvas.height), h.translate(-r[0], -r[1]), i = Ct.transform(i, [
                1,
                0,
                0,
                1,
                r[0],
                r[1]
            ]), h.transform(...e.baseTransform), this.matrix && h.transform(...this.matrix), Li(h, this._bbox), h.fillStyle = this._createGradient(h), h.fill(), n = t1.createPattern(l.canvas, "no-repeat");
            const c = new DOMMatrix(i);
            n.setTransform(c);
        } else Li(t1, this._bbox), n = this._createGradient(t1);
        return n;
    }
}
function Oi(t1, e, i, s, n, r, a, o) {
    const l = e.coords, h = e.colors, c = t1.data, d = 4 * t1.width;
    let u;
    l[i + 1] > l[s + 1] && (u = i, i = s, s = u, u = r, r = a, a = u), l[s + 1] > l[n + 1] && (u = s, s = n, n = u, u = a, a = o, o = u), l[i + 1] > l[s + 1] && (u = i, i = s, s = u, u = r, r = a, a = u);
    const p = (l[i] + e.offsetX) * e.scaleX, g = (l[i + 1] + e.offsetY) * e.scaleY, m = (l[s] + e.offsetX) * e.scaleX, f = (l[s + 1] + e.offsetY) * e.scaleY, b = (l[n] + e.offsetX) * e.scaleX, v = (l[n + 1] + e.offsetY) * e.scaleY;
    if (g >= v) return;
    const y = h[r], w = h[r + 1], x = h[r + 2], A = h[a], _ = h[a + 1], S = h[a + 2], E = h[o], C = h[o + 1], T = h[o + 2], M = Math.round(g), D = Math.round(v);
    let P, k, I, R, L, B, F, O;
    for(let N = M; N <= D; N++){
        if (N < f) {
            const t1 = N < g ? 0 : (g - N) / (g - f);
            P = p - (p - m) * t1, k = y - (y - A) * t1, I = w - (w - _) * t1, R = x - (x - S) * t1;
        } else {
            let t1;
            t1 = N > v ? 1 : f === v ? 0 : (f - N) / (f - v), P = m - (m - b) * t1, k = A - (A - E) * t1, I = _ - (_ - C) * t1, R = S - (S - T) * t1;
        }
        let t1;
        t1 = N < g ? 0 : N > v ? 1 : (g - N) / (g - v), L = p - (p - b) * t1, B = y - (y - E) * t1, F = w - (w - C) * t1, O = x - (x - T) * t1;
        const e = Math.round(Math.min(P, L)), i = Math.round(Math.max(P, L));
        let s = d * N + 4 * e;
        for(let n = e; n <= i; n++)t1 = (P - n) / (P - L), t1 < 0 ? t1 = 0 : t1 > 1 && (t1 = 1), c[s++] = k - (k - B) * t1 | 0, c[s++] = I - (I - F) * t1 | 0, c[s++] = R - (R - O) * t1 | 0, c[s++] = 255;
    }
}
function Ni(t1, e, i) {
    const s = e.coords, n = e.colors;
    let r, a;
    switch(e.type){
        case "lattice":
            const o = e.verticesPerRow, l = Math.floor(s.length / o) - 1, h = o - 1;
            for(r = 0; r < l; r++){
                let e = r * o;
                for(let r = 0; r < h; r++, e++)Oi(t1, i, s[e], s[e + 1], s[e + o], n[e], n[e + 1], n[e + o]), Oi(t1, i, s[e + o + 1], s[e + 1], s[e + o], n[e + o + 1], n[e + 1], n[e + o]);
            }
            break;
        case "triangles":
            for(r = 0, a = s.length; r < a; r += 3)Oi(t1, i, s[r], s[r + 1], s[r + 2], n[r], n[r + 1], n[r + 2]);
            break;
        default:
            throw new Error("illegal figure");
    }
}
class Ui extends Bi {
    constructor(t1){
        super(), this._coords = t1[2], this._colors = t1[3], this._figures = t1[4], this._bounds = t1[5], this._bbox = t1[6], this._background = t1[7], this.matrix = null;
    }
    _createMeshCanvas(t1, e, i) {
        const s = Math.floor(this._bounds[0]), n = Math.floor(this._bounds[1]), r = Math.ceil(this._bounds[2]) - s, a = Math.ceil(this._bounds[3]) - n, o = Math.min(Math.ceil(Math.abs(r * t1[0] * 1.1)), 3e3), l = Math.min(Math.ceil(Math.abs(a * t1[1] * 1.1)), 3e3), h = r / o, c = a / l, d = {
            coords: this._coords,
            colors: this._colors,
            offsetX: -s,
            offsetY: -n,
            scaleX: 1 / h,
            scaleY: 1 / c
        }, u = o + 4, p = l + 4, g = i.getCanvas("mesh", u, p), m = g.context, f = m.createImageData(o, l);
        if (e) {
            const t1 = f.data;
            for(let i = 0, s = t1.length; i < s; i += 4)t1[i] = e[0], t1[i + 1] = e[1], t1[i + 2] = e[2], t1[i + 3] = 255;
        }
        for (const b of this._figures)Ni(f, b, d);
        m.putImageData(f, 2, 2);
        return {
            canvas: g.canvas,
            offsetX: s - 2 * h,
            offsetY: n - 2 * c,
            scaleX: h,
            scaleY: c
        };
    }
    isModifyingCurrentTransform() {
        return !0;
    }
    getPattern(t1, e, i, s) {
        Li(t1, this._bbox);
        const n = new Float32Array(2);
        if (s === Ri) Ct.singularValueDecompose2dScale(Jt(t1), n);
        else if (this.matrix) {
            Ct.singularValueDecompose2dScale(this.matrix, n);
            const [t1, i] = n;
            Ct.singularValueDecompose2dScale(e.baseTransform, n), n[0] *= t1, n[1] *= i;
        } else Ct.singularValueDecompose2dScale(e.baseTransform, n);
        const r = this._createMeshCanvas(n, s === Ri ? null : this._background, e.cachedCanvases);
        return s !== Ri && (t1.setTransform(...e.baseTransform), this.matrix && t1.transform(...this.matrix)), t1.translate(r.offsetX, r.offsetY), t1.scale(r.scaleX, r.scaleY), t1.createPattern(r.canvas, "no-repeat");
    }
}
class zi extends Bi {
    getPattern() {
        return "hotpink";
    }
}
const Hi = 1, ji = 2;
class $i {
    static MAX_PATTERN_SIZE = 3e3;
    constructor(t1, e, i, s){
        this.color = t1[1], this.operatorList = t1[2], this.matrix = t1[3], this.bbox = t1[4], this.xstep = t1[5], this.ystep = t1[6], this.paintType = t1[7], this.tilingType = t1[8], this.ctx = e, this.canvasGraphicsFactory = i, this.baseTransform = s;
    }
    createPatternCanvas(t1, e) {
        const { bbox: i, operatorList: s, paintType: n, tilingType: r, color: a, canvasGraphicsFactory: o } = this;
        let { xstep: l, ystep: h } = this;
        l = Math.abs(l), h = Math.abs(h), lt("TilingType: " + r);
        const c = i[0], d = i[1], u = i[2], p = i[3], g = u - c, m = p - d, f = new Float32Array(2);
        Ct.singularValueDecompose2dScale(this.matrix, f);
        const [b, v] = f;
        Ct.singularValueDecompose2dScale(this.baseTransform, f);
        const y = b * f[0], w = v * f[1];
        let x = g, A = m, _ = !1, S = !1;
        const E = Math.ceil(l * y), C = Math.ceil(h * w);
        E >= Math.ceil(g * y) ? x = l : _ = !0, C >= Math.ceil(m * w) ? A = h : S = !0;
        const T = this.getSizeAndScale(x, this.ctx.canvas.width, y), M = this.getSizeAndScale(A, this.ctx.canvas.height, w), D = t1.cachedCanvases.getCanvas("pattern", T.size, M.size), P = D.context, k = o.createCanvasGraphics(P, e);
        if (k.groupLevel = t1.groupLevel, this.setFillAndStrokeStyleToContext(k, n, a), P.translate(-T.scale * c, -M.scale * d), k.transform(0, T.scale, 0, 0, M.scale, 0, 0), P.save(), k.dependencyTracker?.save(), this.clipBbox(k, c, d, u, p), k.baseTransform = Jt(k.ctx), k.executeOperatorList(s), k.endDrawing(), k.dependencyTracker?.restore(), P.restore(), _ || S) {
            const e = D.canvas;
            _ && (x = l), S && (A = h);
            const i = this.getSizeAndScale(x, this.ctx.canvas.width, y), s = this.getSizeAndScale(A, this.ctx.canvas.height, w), n = i.size, r = s.size, a = t1.cachedCanvases.getCanvas("pattern-workaround", n, r), o = a.context, u = _ ? Math.floor(g / l) : 0, p = S ? Math.floor(m / h) : 0;
            for(let t1 = 0; t1 <= u; t1++)for(let i = 0; i <= p; i++)o.drawImage(e, n * t1, r * i, n, r, 0, 0, n, r);
            return {
                canvas: a.canvas,
                scaleX: i.scale,
                scaleY: s.scale,
                offsetX: c,
                offsetY: d
            };
        }
        return {
            canvas: D.canvas,
            scaleX: T.scale,
            scaleY: M.scale,
            offsetX: c,
            offsetY: d
        };
    }
    getSizeAndScale(t1, e, i) {
        const s = Math.max($i.MAX_PATTERN_SIZE, e);
        let n = Math.ceil(t1 * i);
        return n >= s ? n = s : i = n / t1, {
            scale: i,
            size: n
        };
    }
    clipBbox(t1, e, i, s, n) {
        const r = s - e, a = n - i;
        t1.ctx.rect(e, i, r, a), Ct.axialAlignedBoundingBox([
            e,
            i,
            s,
            n
        ], Jt(t1.ctx), t1.current.minMax), t1.clip(), t1.endPath();
    }
    setFillAndStrokeStyleToContext(t1, e, i) {
        const s = t1.ctx, n = t1.current;
        switch(e){
            case Hi:
                const { fillStyle: t2, strokeStyle: r } = this.ctx;
                s.fillStyle = n.fillColor = t2, s.strokeStyle = n.strokeColor = r;
                break;
            case ji:
                s.fillStyle = s.strokeStyle = i, n.fillColor = n.strokeColor = i;
                break;
            default:
                throw new wt(`Unsupported paint type: ${e}`);
        }
    }
    isModifyingCurrentTransform() {
        return !1;
    }
    getPattern(t1, e, i, s, n) {
        let r = i;
        s !== Ri && (r = Ct.transform(r, e.baseTransform), this.matrix && (r = Ct.transform(r, this.matrix)));
        const a = this.createPatternCanvas(e, n);
        let o = new DOMMatrix(r);
        o = o.translate(a.offsetX, a.offsetY), o = o.scale(1 / a.scaleX, 1 / a.scaleY);
        const l = t1.createPattern(a.canvas, "repeat");
        return l.setTransform(o), l;
    }
}
function Vi({ src: t1, srcPos: e = 0, dest: i, width: s, height: n, nonBlackColor: r = 4294967295, inverseDecode: a = !1 }) {
    const o = St.isLittleEndian ? 4278190080 : 255, [l, h] = a ? [
        r,
        o
    ] : [
        o,
        r
    ], c = s >> 3, d = 7 & s, u = t1.length;
    i = new Uint32Array(i.buffer);
    let p = 0;
    for(let g = 0; g < n; g++){
        for(const n = e + c; e < n; e++){
            const s = e < u ? t1[e] : 255;
            i[p++] = 128 & s ? h : l, i[p++] = 64 & s ? h : l, i[p++] = 32 & s ? h : l, i[p++] = 16 & s ? h : l, i[p++] = 8 & s ? h : l, i[p++] = 4 & s ? h : l, i[p++] = 2 & s ? h : l, i[p++] = 1 & s ? h : l;
        }
        if (0 === d) continue;
        const s = e < u ? t1[e++] : 255;
        for(let t1 = 0; t1 < d; t1++)i[p++] = s & 1 << 7 - t1 ? h : l;
    }
    return {
        srcPos: e,
        destPos: p
    };
}
const Gi = 16, Wi = new DOMMatrix, qi = new Float32Array(2), Xi = new Float32Array([
    1 / 0,
    1 / 0,
    -1 / 0,
    -1 / 0
]);
class Yi {
    constructor(t1){
        this.canvasFactory = t1, this.cache = Object.create(null);
    }
    getCanvas(t1, e, i) {
        let s;
        return void 0 !== this.cache[t1] ? (s = this.cache[t1], this.canvasFactory.reset(s, e, i)) : (s = this.canvasFactory.create(e, i), this.cache[t1] = s), s;
    }
    delete(t1) {
        delete this.cache[t1];
    }
    clear() {
        for(const t1 in this.cache){
            const e = this.cache[t1];
            this.canvasFactory.destroy(e), delete this.cache[t1];
        }
    }
}
function Ki(t1, e, i, s, n, r, a, o, l, h) {
    const [c, d, u, p, g, m] = Jt(t1);
    if (0 === d && 0 === u) {
        const f = a * c + g, b = Math.round(f), v = o * p + m, y = Math.round(v), w = (a + l) * c + g, x = Math.abs(Math.round(w) - b) || 1, A = (o + h) * p + m, _ = Math.abs(Math.round(A) - y) || 1;
        return t1.setTransform(Math.sign(c), 0, 0, Math.sign(p), b, y), t1.drawImage(e, i, s, n, r, 0, 0, x, _), t1.setTransform(c, d, u, p, g, m), [
            x,
            _
        ];
    }
    if (0 === c && 0 === p) {
        const f = o * u + g, b = Math.round(f), v = a * d + m, y = Math.round(v), w = (o + h) * u + g, x = Math.abs(Math.round(w) - b) || 1, A = (a + l) * d + m, _ = Math.abs(Math.round(A) - y) || 1;
        return t1.setTransform(0, Math.sign(d), Math.sign(u), 0, b, y), t1.drawImage(e, i, s, n, r, 0, 0, _, x), t1.setTransform(c, d, u, p, g, m), [
            _,
            x
        ];
    }
    t1.drawImage(e, i, s, n, r, a, o, l, h);
    return [
        Math.hypot(c, d) * l,
        Math.hypot(u, p) * h
    ];
}
class Qi {
    alphaIsShape = !1;
    fontSize = 0;
    fontSizeScale = 1;
    textMatrix = null;
    textMatrixScale = 1;
    fontMatrix = E;
    leading = 0;
    x = 0;
    y = 0;
    lineX = 0;
    lineY = 0;
    charSpacing = 0;
    wordSpacing = 0;
    textHScale = 1;
    textRenderingMode = z;
    textRise = 0;
    fillColor = "#000000";
    strokeColor = "#000000";
    patternFill = !1;
    patternStroke = !1;
    fillAlpha = 1;
    strokeAlpha = 1;
    lineWidth = 1;
    activeSMask = null;
    transferMaps = "none";
    constructor(t1, e, i){
        i?.(this), this.clipBox = new Float32Array([
            0,
            0,
            t1,
            e
        ]), this.minMax = Xi.slice();
    }
    clone() {
        const t1 = Object.create(this);
        return t1.clipBox = this.clipBox.slice(), t1.minMax = this.minMax.slice(), t1;
    }
    getPathBoundingBox(t1 = ki, e = null) {
        const i = this.minMax.slice();
        if (t1 === Ii) {
            e || ct("Stroke bounding box must include transform."), Ct.singularValueDecompose2dScale(e, qi);
            const t1 = qi[0] * this.lineWidth / 2, s = qi[1] * this.lineWidth / 2;
            i[0] -= t1, i[1] -= s, i[2] += t1, i[3] += s;
        }
        return i;
    }
    updateClipFromPath() {
        const t1 = Ct.intersect(this.clipBox, this.getPathBoundingBox());
        this.startNewPathAndClipBox(t1 || [
            0,
            0,
            0,
            0
        ]);
    }
    isEmptyClip() {
        return this.minMax[0] === 1 / 0;
    }
    startNewPathAndClipBox(t1) {
        this.clipBox.set(t1, 0), this.minMax.set(Xi, 0);
    }
    getClippedPathBoundingBox(t1 = ki, e = null) {
        return Ct.intersect(this.clipBox, this.getPathBoundingBox(t1, e));
    }
}
function Ji(t1, e) {
    if (e instanceof ImageData) return void t1.putImageData(e, 0, 0);
    const i = e.height, s = e.width, n = i % Gi, r = (i - n) / Gi, a = 0 === n ? r : r + 1, o = t1.createImageData(s, Gi);
    let l, h = 0;
    const c = e.data, d = o.data;
    let u, p, g, m;
    if (e.kind === W.GRAYSCALE_1BPP) {
        const e = c.byteLength, i = new Uint32Array(d.buffer, 0, d.byteLength >> 2), m = i.length, f = s + 7 >> 3, b = 4294967295, v = St.isLittleEndian ? 4278190080 : 255;
        for(u = 0; u < a; u++){
            for(g = u < r ? Gi : n, l = 0, p = 0; p < g; p++){
                const t1 = e - h;
                let n = 0;
                const r = t1 > f ? s : 8 * t1 - 7, a = -8 & r;
                let o = 0, d = 0;
                for(; n < a; n += 8)d = c[h++], i[l++] = 128 & d ? b : v, i[l++] = 64 & d ? b : v, i[l++] = 32 & d ? b : v, i[l++] = 16 & d ? b : v, i[l++] = 8 & d ? b : v, i[l++] = 4 & d ? b : v, i[l++] = 2 & d ? b : v, i[l++] = 1 & d ? b : v;
                for(; n < r; n++)0 === o && (d = c[h++], o = 128), i[l++] = d & o ? b : v, o >>= 1;
            }
            for(; l < m;)i[l++] = 0;
            t1.putImageData(o, 0, u * Gi);
        }
    } else if (e.kind === W.RGBA_32BPP) {
        for(p = 0, m = s * Gi * 4, u = 0; u < r; u++)d.set(c.subarray(h, h + m)), h += m, t1.putImageData(o, 0, p), p += Gi;
        u < a && (m = s * n * 4, d.set(c.subarray(h, h + m)), t1.putImageData(o, 0, p));
    } else {
        if (e.kind !== W.RGB_24BPP) throw new Error(`bad image kind: ${e.kind}`);
        for(g = Gi, m = s * g, u = 0; u < a; u++){
            for(u >= r && (g = n, m = s * g), l = 0, p = m; p--;)d[l++] = c[h++], d[l++] = c[h++], d[l++] = c[h++], d[l++] = 255;
            t1.putImageData(o, 0, u * Gi);
        }
    }
}
function Zi(t1, e) {
    if (e.bitmap) return void t1.drawImage(e.bitmap, 0, 0);
    const i = e.height, s = e.width, n = i % Gi, r = (i - n) / Gi, a = 0 === n ? r : r + 1, o = t1.createImageData(s, Gi);
    let l = 0;
    const h = e.data, c = o.data;
    for(let d = 0; d < a; d++){
        const e = d < r ? Gi : n;
        ({ srcPos: l } = Vi({
            src: h,
            srcPos: l,
            dest: c,
            width: s,
            height: e,
            nonBlackColor: 0
        })), t1.putImageData(o, 0, d * Gi);
    }
}
function ts(t1, e) {
    const i = [
        "strokeStyle",
        "fillStyle",
        "fillRule",
        "globalAlpha",
        "lineWidth",
        "lineCap",
        "lineJoin",
        "miterLimit",
        "globalCompositeOperation",
        "font",
        "filter"
    ];
    for (const s of i)void 0 !== t1[s] && (e[s] = t1[s]);
    void 0 !== t1.setLineDash && (e.setLineDash(t1.getLineDash()), e.lineDashOffset = t1.lineDashOffset);
}
function es(t1) {
    t1.strokeStyle = t1.fillStyle = "#000000", t1.fillRule = "nonzero", t1.globalAlpha = 1, t1.lineWidth = 1, t1.lineCap = "butt", t1.lineJoin = "miter", t1.miterLimit = 10, t1.globalCompositeOperation = "source-over", t1.font = "10px sans-serif", void 0 !== t1.setLineDash && (t1.setLineDash([]), t1.lineDashOffset = 0);
    const { filter: e } = t1;
    "none" !== e && "" !== e && (t1.filter = "none");
}
function is(t1, e) {
    if (e) return !0;
    Ct.singularValueDecompose2dScale(t1, qi);
    const i = Math.fround(ee.pixelRatio * Ot.PDF_TO_CSS_UNITS);
    return qi[0] <= i && qi[1] <= i;
}
const ss = [
    "butt",
    "round",
    "square"
], ns = [
    "miter",
    "round",
    "bevel"
], rs = {}, as = {};
class os {
    constructor(t1, e, i, s, n, { optionalContentConfig: r, markedContentStack: a = null }, o, l, h){
        this.ctx = t1, this.current = new Qi(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = i, this.canvasFactory = s, this.filterFactory = n, this.groupStack = [], this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = a || [], this.optionalContentConfig = r, this.cachedCanvases = new Yi(this.canvasFactory), this.cachedPatterns = new Map, this.annotationCanvasMap = o, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = l, this._cachedScaleForStroking = [
            -1,
            0
        ], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = new Map, this.dependencyTracker = h ?? null;
    }
    getObject(t1, e, i = null) {
        return "string" == typeof e ? (this.dependencyTracker?.recordNamedDependency(t1, e), e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e)) : i;
    }
    beginDrawing({ transform: t1, viewport: e, transparency: i = !1, background: s = null }) {
        const n = this.ctx.canvas.width, r = this.ctx.canvas.height, a = this.ctx.fillStyle;
        if (this.ctx.fillStyle = s || "#ffffff", this.ctx.fillRect(0, 0, n, r), this.ctx.fillStyle = a, i) {
            const t1 = this.cachedCanvases.getCanvas("transparent", n, r);
            this.compositeCtx = this.ctx, this.transparentCanvas = t1.canvas, this.ctx = t1.context, this.ctx.save(), this.ctx.transform(...Jt(this.compositeCtx));
        }
        this.ctx.save(), es(this.ctx), t1 && (this.ctx.transform(...t1), this.outputScaleX = t1[0], this.outputScaleY = t1[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = Jt(this.ctx);
    }
    executeOperatorList(t1, e, i, s, n) {
        const r = t1.argsArray, a = t1.fnArray;
        let o = e || 0;
        const l = r.length;
        if (l === o) return o;
        const h = l - o > 10 && "function" == typeof i, c = h ? Date.now() + 15 : 0;
        let d = 0;
        const u = this.commonObjs, p = this.objs;
        let g, m;
        for(;;){
            if (void 0 !== s && o === s.nextBreakPoint) return s.breakIt(o, i), o;
            if (!n || n(o)) if (g = a[o], m = r[o] ?? null, g !== tt.dependency) null === m ? this[g](o) : this[g](o, ...m);
            else for (const t1 of m){
                this.dependencyTracker?.recordNamedData(t1, o);
                const e = t1.startsWith("g_") ? u : p;
                if (!e.has(t1)) return e.get(t1, i), o;
            }
            if (o++, o === l) return o;
            if (h && ++d > 10) {
                if (Date.now() > c) return i(), o;
                d = 0;
            }
        }
    }
    #ys() {
        for(; this.stateStack.length || this.inSMaskMode;)this.restore();
        this.current.activeSMask = null, this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
    }
    endDrawing() {
        this.#ys(), this.cachedCanvases.clear(), this.cachedPatterns.clear();
        for (const t1 of this._cachedBitmapsMap.values()){
            for (const e of t1.values())"undefined" != typeof HTMLCanvasElement && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
            t1.clear();
        }
        this._cachedBitmapsMap.clear(), this.#ws();
    }
    #ws() {
        if (this.pageColors) {
            const t1 = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
            if ("none" !== t1) {
                const e = this.ctx.filter;
                this.ctx.filter = t1, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
            }
        }
    }
    _scaleImage(t1, e) {
        const i = t1.width ?? t1.displayWidth, s = t1.height ?? t1.displayHeight;
        let n, r, a = Math.max(Math.hypot(e[0], e[1]), 1), o = Math.max(Math.hypot(e[2], e[3]), 1), l = i, h = s, c = "prescale1";
        for(; a > 2 && l > 1 || o > 2 && h > 1;){
            let e = l, i = h;
            a > 2 && l > 1 && (e = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l / 2), a /= l / e), o > 2 && h > 1 && (i = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h) / 2, o /= h / i), n = this.cachedCanvases.getCanvas(c, e, i), r = n.context, r.clearRect(0, 0, e, i), r.drawImage(t1, 0, 0, l, h, 0, 0, e, i), t1 = n.canvas, l = e, h = i, c = "prescale1" === c ? "prescale2" : "prescale1";
        }
        return {
            img: t1,
            paintWidth: l,
            paintHeight: h
        };
    }
    _createMaskCanvas(t1, e) {
        const i = this.ctx, { width: s, height: n } = e, r = this.current.fillColor, a = this.current.patternFill, o = Jt(i);
        let l, h, c, d;
        if ((e.bitmap || e.data) && e.count > 1) {
            const i = e.bitmap || e.data.buffer;
            h = JSON.stringify(a ? o : [
                o.slice(0, 4),
                r
            ]), l = this._cachedBitmapsMap.get(i), l || (l = new Map, this._cachedBitmapsMap.set(i, l));
            const s = l.get(h);
            if (s && !a) {
                const e = Math.round(Math.min(o[0], o[2]) + o[4]), i = Math.round(Math.min(o[1], o[3]) + o[5]);
                return this.dependencyTracker?.recordDependencies(t1, Pi), {
                    canvas: s,
                    offsetX: e,
                    offsetY: i
                };
            }
            c = s;
        }
        c || (d = this.cachedCanvases.getCanvas("maskCanvas", s, n), Zi(d.context, e));
        let u = Ct.transform(o, [
            1 / s,
            0,
            0,
            -1 / n,
            0,
            0
        ]);
        u = Ct.transform(u, [
            1,
            0,
            0,
            1,
            0,
            -n
        ]);
        const p = Xi.slice();
        Ct.axialAlignedBoundingBox([
            0,
            0,
            s,
            n
        ], u, p);
        const [g, m, f, b] = p, v = Math.round(f - g) || 1, y = Math.round(b - m) || 1, w = this.cachedCanvases.getCanvas("fillCanvas", v, y), x = w.context, A = g, _ = m;
        x.translate(-A, -_), x.transform(...u), c || (c = this._scaleImage(d.canvas, Zt(x)), c = c.img, l && a && l.set(h, c)), x.imageSmoothingEnabled = is(Jt(x), e.interpolate), Ki(x, c, 0, 0, c.width, c.height, 0, 0, s, n), x.globalCompositeOperation = "source-in";
        const S = Ct.transform(Zt(x), [
            1,
            0,
            0,
            1,
            -A,
            -_
        ]);
        return x.fillStyle = a ? r.getPattern(i, this, S, ki, t1) : r, x.fillRect(0, 0, s, n), l && !a && (this.cachedCanvases.delete("fillCanvas"), l.set(h, w.canvas)), this.dependencyTracker?.recordDependencies(t1, Pi), {
            canvas: w.canvas,
            offsetX: Math.round(A),
            offsetY: Math.round(_)
        };
    }
    setLineWidth(t1, e) {
        this.dependencyTracker?.recordSimpleData("lineWidth", t1), e !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = e, this.ctx.lineWidth = e;
    }
    setLineCap(t1, e) {
        this.dependencyTracker?.recordSimpleData("lineCap", t1), this.ctx.lineCap = ss[e];
    }
    setLineJoin(t1, e) {
        this.dependencyTracker?.recordSimpleData("lineJoin", t1), this.ctx.lineJoin = ns[e];
    }
    setMiterLimit(t1, e) {
        this.dependencyTracker?.recordSimpleData("miterLimit", t1), this.ctx.miterLimit = e;
    }
    setDash(t1, e, i) {
        this.dependencyTracker?.recordSimpleData("dash", t1);
        const s = this.ctx;
        void 0 !== s.setLineDash && (s.setLineDash(e), s.lineDashOffset = i);
    }
    setRenderingIntent(t1, e) {}
    setFlatness(t1, e) {}
    setGState(t1, e) {
        for (const [i, s] of e)switch(i){
            case "LW":
                this.setLineWidth(t1, s);
                break;
            case "LC":
                this.setLineCap(t1, s);
                break;
            case "LJ":
                this.setLineJoin(t1, s);
                break;
            case "ML":
                this.setMiterLimit(t1, s);
                break;
            case "D":
                this.setDash(t1, s[0], s[1]);
                break;
            case "RI":
                this.setRenderingIntent(t1, s);
                break;
            case "FL":
                this.setFlatness(t1, s);
                break;
            case "Font":
                this.setFont(t1, s[0], s[1]);
                break;
            case "CA":
                this.dependencyTracker?.recordSimpleData("strokeAlpha", t1), this.current.strokeAlpha = s;
                break;
            case "ca":
                this.dependencyTracker?.recordSimpleData("fillAlpha", t1), this.ctx.globalAlpha = this.current.fillAlpha = s;
                break;
            case "BM":
                this.dependencyTracker?.recordSimpleData("globalCompositeOperation", t1), this.ctx.globalCompositeOperation = s;
                break;
            case "SMask":
                this.dependencyTracker?.recordSimpleData("SMask", t1), this.current.activeSMask = s ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                break;
            case "TR":
                this.dependencyTracker?.recordSimpleData("filter", t1), this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(s);
        }
    }
    get inSMaskMode() {
        return !!this.suspendedCtx;
    }
    checkSMaskState() {
        const t1 = this.inSMaskMode;
        this.current.activeSMask && !t1 ? this.beginSMaskMode() : !this.current.activeSMask && t1 && this.endSMaskMode();
    }
    beginSMaskMode(t1) {
        if (this.inSMaskMode) throw new Error("beginSMaskMode called while already in smask mode");
        const e = this.ctx.canvas.width, i = this.ctx.canvas.height, s = "smaskGroupAt" + this.groupLevel, n = this.cachedCanvases.getCanvas(s, e, i);
        this.suspendedCtx = this.ctx;
        const r = this.ctx = n.context;
        r.setTransform(this.suspendedCtx.getTransform()), ts(this.suspendedCtx, r), function(t1, e) {
            if (t1._removeMirroring) throw new Error("Context is already forwarding operations.");
            t1.__originalSave = t1.save, t1.__originalRestore = t1.restore, t1.__originalRotate = t1.rotate, t1.__originalScale = t1.scale, t1.__originalTranslate = t1.translate, t1.__originalTransform = t1.transform, t1.__originalSetTransform = t1.setTransform, t1.__originalResetTransform = t1.resetTransform, t1.__originalClip = t1.clip, t1.__originalMoveTo = t1.moveTo, t1.__originalLineTo = t1.lineTo, t1.__originalBezierCurveTo = t1.bezierCurveTo, t1.__originalRect = t1.rect, t1.__originalClosePath = t1.closePath, t1.__originalBeginPath = t1.beginPath, t1._removeMirroring = ()=>{
                t1.save = t1.__originalSave, t1.restore = t1.__originalRestore, t1.rotate = t1.__originalRotate, t1.scale = t1.__originalScale, t1.translate = t1.__originalTranslate, t1.transform = t1.__originalTransform, t1.setTransform = t1.__originalSetTransform, t1.resetTransform = t1.__originalResetTransform, t1.clip = t1.__originalClip, t1.moveTo = t1.__originalMoveTo, t1.lineTo = t1.__originalLineTo, t1.bezierCurveTo = t1.__originalBezierCurveTo, t1.rect = t1.__originalRect, t1.closePath = t1.__originalClosePath, t1.beginPath = t1.__originalBeginPath, delete t1._removeMirroring;
            }, t1.save = function() {
                e.save(), this.__originalSave();
            }, t1.restore = function() {
                e.restore(), this.__originalRestore();
            }, t1.translate = function(t1, i) {
                e.translate(t1, i), this.__originalTranslate(t1, i);
            }, t1.scale = function(t1, i) {
                e.scale(t1, i), this.__originalScale(t1, i);
            }, t1.transform = function(t1, i, s, n, r, a) {
                e.transform(t1, i, s, n, r, a), this.__originalTransform(t1, i, s, n, r, a);
            }, t1.setTransform = function(t1, i, s, n, r, a) {
                e.setTransform(t1, i, s, n, r, a), this.__originalSetTransform(t1, i, s, n, r, a);
            }, t1.resetTransform = function() {
                e.resetTransform(), this.__originalResetTransform();
            }, t1.rotate = function(t1) {
                e.rotate(t1), this.__originalRotate(t1);
            }, t1.clip = function(t1) {
                e.clip(t1), this.__originalClip(t1);
            }, t1.moveTo = function(t1, i) {
                e.moveTo(t1, i), this.__originalMoveTo(t1, i);
            }, t1.lineTo = function(t1, i) {
                e.lineTo(t1, i), this.__originalLineTo(t1, i);
            }, t1.bezierCurveTo = function(t1, i, s, n, r, a) {
                e.bezierCurveTo(t1, i, s, n, r, a), this.__originalBezierCurveTo(t1, i, s, n, r, a);
            }, t1.rect = function(t1, i, s, n) {
                e.rect(t1, i, s, n), this.__originalRect(t1, i, s, n);
            }, t1.closePath = function() {
                e.closePath(), this.__originalClosePath();
            }, t1.beginPath = function() {
                e.beginPath(), this.__originalBeginPath();
            };
        }(r, this.suspendedCtx), this.setGState(t1, [
            [
                "BM",
                "source-over"
            ]
        ]);
    }
    endSMaskMode() {
        if (!this.inSMaskMode) throw new Error("endSMaskMode called while not in smask mode");
        this.ctx._removeMirroring(), ts(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
    }
    compose(t1) {
        if (!this.current.activeSMask) return;
        t1 ? (t1[0] = Math.floor(t1[0]), t1[1] = Math.floor(t1[1]), t1[2] = Math.ceil(t1[2]), t1[3] = Math.ceil(t1[3])) : t1 = [
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        ];
        const e = this.current.activeSMask, i = this.suspendedCtx;
        this.composeSMask(i, e, this.ctx, t1), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
    }
    composeSMask(t1, e, i, s) {
        const n = s[0], r = s[1], a = s[2] - n, o = s[3] - r;
        0 !== a && 0 !== o && (this.genericComposeSMask(e.context, i, a, o, e.subtype, e.backdrop, e.transferMap, n, r, e.offsetX, e.offsetY), t1.save(), t1.globalAlpha = 1, t1.globalCompositeOperation = "source-over", t1.setTransform(1, 0, 0, 1, 0, 0), t1.drawImage(i.canvas, 0, 0), t1.restore());
    }
    genericComposeSMask(t1, e, i, s, n, r, a, o, l, h, c) {
        let d = t1.canvas, u = o - h, p = l - c;
        if (r) if (u < 0 || p < 0 || u + i > d.width || p + s > d.height) {
            const t1 = this.cachedCanvases.getCanvas("maskExtension", i, s), e = t1.context;
            e.drawImage(d, -u, -p), e.globalCompositeOperation = "destination-atop", e.fillStyle = r, e.fillRect(0, 0, i, s), e.globalCompositeOperation = "source-over", d = t1.canvas, u = p = 0;
        } else {
            t1.save(), t1.globalAlpha = 1, t1.setTransform(1, 0, 0, 1, 0, 0);
            const e = new Path2D;
            e.rect(u, p, i, s), t1.clip(e), t1.globalCompositeOperation = "destination-atop", t1.fillStyle = r, t1.fillRect(u, p, i, s), t1.restore();
        }
        e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), "Alpha" === n && a ? e.filter = this.filterFactory.addAlphaFilter(a) : "Luminosity" === n && (e.filter = this.filterFactory.addLuminosityFilter(a));
        const g = new Path2D;
        g.rect(o, l, i, s), e.clip(g), e.globalCompositeOperation = "destination-in", e.drawImage(d, u, p, i, s, o, l, i, s), e.restore();
    }
    save(t1) {
        this.inSMaskMode && ts(this.ctx, this.suspendedCtx), this.ctx.save();
        const e = this.current;
        this.stateStack.push(e), this.current = e.clone(), this.dependencyTracker?.save(t1);
    }
    restore(t1) {
        this.dependencyTracker?.restore(t1), 0 !== this.stateStack.length ? (this.current = this.stateStack.pop(), this.ctx.restore(), this.inSMaskMode && ts(this.suspendedCtx, this.ctx), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null) : this.inSMaskMode && this.endSMaskMode();
    }
    transform(t1, e, i, s, n, r, a) {
        this.dependencyTracker?.recordIncrementalData("transform", t1), this.ctx.transform(e, i, s, n, r, a), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
    }
    constructPath(t1, e, i, s) {
        let [n] = i;
        if (!s) return n ||= i[0] = new Path2D, void this[e](t1, n);
        if (null !== this.dependencyTracker) {
            const i = e === tt.stroke ? this.current.lineWidth / 2 : 0;
            this.dependencyTracker.resetBBox(t1).recordBBox(t1, this.ctx, s[0] - i, s[2] + i, s[1] - i, s[3] + i).recordDependencies(t1, [
                "transform"
            ]);
        }
        if (!(n instanceof Path2D)) {
            const t1 = i[0] = new Path2D;
            for(let e = 0, i = n.length; e < i;)switch(n[e++]){
                case et:
                    t1.moveTo(n[e++], n[e++]);
                    break;
                case it:
                    t1.lineTo(n[e++], n[e++]);
                    break;
                case st:
                    t1.bezierCurveTo(n[e++], n[e++], n[e++], n[e++], n[e++], n[e++]);
                    break;
                case nt:
                    t1.closePath();
                    break;
                default:
                    ht(`Unrecognized drawing path operator: ${n[e - 1]}`);
            }
            n = t1;
        }
        Ct.axialAlignedBoundingBox(s, Jt(this.ctx), this.current.minMax), this[e](t1, n), this._pathStartIdx = t1;
    }
    closePath(t1) {
        this.ctx.closePath();
    }
    stroke(t1, e, i = !0) {
        const s = this.ctx, n = this.current.strokeColor;
        if (s.globalAlpha = this.current.strokeAlpha, this.contentVisible) if ("object" == typeof n && n?.getPattern) {
            const i = n.isModifyingCurrentTransform() ? s.getTransform() : null;
            if (s.save(), s.strokeStyle = n.getPattern(s, this, Zt(s), Ii, t1), i) {
                const t1 = new Path2D;
                t1.addPath(e, s.getTransform().invertSelf().multiplySelf(i)), e = t1;
            }
            this.rescaleAndStroke(e, !1), s.restore();
        } else this.rescaleAndStroke(e, !0);
        this.dependencyTracker?.recordDependencies(t1, Si), i && this.consumePath(t1, e, this.current.getClippedPathBoundingBox(Ii, Jt(this.ctx))), s.globalAlpha = this.current.fillAlpha;
    }
    closeStroke(t1, e) {
        this.stroke(t1, e);
    }
    fill(t1, e, i = !0) {
        const s = this.ctx, n = this.current.fillColor;
        let r = !1;
        if (this.current.patternFill) {
            const i = n.isModifyingCurrentTransform() ? s.getTransform() : null;
            if (this.dependencyTracker?.save(t1), s.save(), s.fillStyle = n.getPattern(s, this, Zt(s), ki, t1), i) {
                const t1 = new Path2D;
                t1.addPath(e, s.getTransform().invertSelf().multiplySelf(i)), e = t1;
            }
            r = !0;
        }
        const a = this.current.getClippedPathBoundingBox();
        this.contentVisible && null !== a && (this.pendingEOFill ? (s.fill(e, "evenodd"), this.pendingEOFill = !1) : s.fill(e)), this.dependencyTracker?.recordDependencies(t1, Ei), r && (s.restore(), this.dependencyTracker?.restore(t1)), i && this.consumePath(t1, e, a);
    }
    eoFill(t1, e) {
        this.pendingEOFill = !0, this.fill(t1, e);
    }
    fillStroke(t1, e) {
        this.fill(t1, e, !1), this.stroke(t1, e, !1), this.consumePath(t1, e);
    }
    eoFillStroke(t1, e) {
        this.pendingEOFill = !0, this.fillStroke(t1, e);
    }
    closeFillStroke(t1, e) {
        this.fillStroke(t1, e);
    }
    closeEOFillStroke(t1, e) {
        this.pendingEOFill = !0, this.fillStroke(t1, e);
    }
    endPath(t1, e) {
        this.consumePath(t1, e);
    }
    rawFillPath(t1, e) {
        this.ctx.fill(e), this.dependencyTracker?.recordDependencies(t1, Ti).recordOperation(t1);
    }
    clip(t1) {
        this.dependencyTracker?.recordFutureForcedDependency("clipMode", t1), this.pendingClip = rs;
    }
    eoClip(t1) {
        this.dependencyTracker?.recordFutureForcedDependency("clipMode", t1), this.pendingClip = as;
    }
    beginText(t1) {
        this.current.textMatrix = null, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.dependencyTracker?.recordOpenMarker(t1).resetIncrementalData("sameLineText").resetIncrementalData("moveText", t1);
    }
    endText(t1) {
        const e = this.pendingTextPaths, i = this.ctx;
        if (this.dependencyTracker) {
            const { dependencyTracker: i } = this;
            void 0 !== e && i.recordFutureForcedDependency("textClip", i.getOpenMarker()).recordFutureForcedDependency("textClip", t1), i.recordCloseMarker(t1);
        }
        if (void 0 !== e) {
            const t1 = new Path2D, s = i.getTransform().invertSelf();
            for (const { transform: i, x: n, y: r, fontSize: a, path: o } of e)o && t1.addPath(o, new DOMMatrix(i).preMultiplySelf(s).translate(n, r).scale(a, -a));
            i.clip(t1);
        }
        delete this.pendingTextPaths;
    }
    setCharSpacing(t1, e) {
        this.dependencyTracker?.recordSimpleData("charSpacing", t1), this.current.charSpacing = e;
    }
    setWordSpacing(t1, e) {
        this.dependencyTracker?.recordSimpleData("wordSpacing", t1), this.current.wordSpacing = e;
    }
    setHScale(t1, e) {
        this.dependencyTracker?.recordSimpleData("hScale", t1), this.current.textHScale = e / 100;
    }
    setLeading(t1, e) {
        this.dependencyTracker?.recordSimpleData("leading", t1), this.current.leading = -e;
    }
    setFont(t1, e, i) {
        this.dependencyTracker?.recordSimpleData("font", t1).recordSimpleDataFromNamed("fontObj", e, t1);
        const s = this.commonObjs.get(e), n = this.current;
        if (!s) throw new Error(`Can't find font for ${e}`);
        if (n.fontMatrix = s.fontMatrix || E, 0 !== n.fontMatrix[0] && 0 !== n.fontMatrix[3] || ht("Invalid font matrix for font " + e), i < 0 ? (i = -i, n.fontDirection = -1) : n.fontDirection = 1, this.current.font = s, this.current.fontSize = i, s.isType3Font) return;
        const r = s.loadedName || "sans-serif", a = s.systemFontInfo?.css || `"${r}", ${s.fallbackName}`;
        let o = "normal";
        s.black ? o = "900" : s.bold && (o = "bold");
        const l = s.italic ? "italic" : "normal";
        let h = i;
        i < 16 ? h = 16 : i > 100 && (h = 100), this.current.fontSizeScale = i / h, this.ctx.font = `${l} ${o} ${h}px ${a}`;
    }
    setTextRenderingMode(t1, e) {
        this.dependencyTracker?.recordSimpleData("textRenderingMode", t1), this.current.textRenderingMode = e;
    }
    setTextRise(t1, e) {
        this.dependencyTracker?.recordSimpleData("textRise", t1), this.current.textRise = e;
    }
    moveText(t1, e, i) {
        this.dependencyTracker?.resetIncrementalData("sameLineText").recordIncrementalData("moveText", t1), this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += i;
    }
    setLeadingMoveText(t1, e, i) {
        this.setLeading(t1, -i), this.moveText(t1, e, i);
    }
    setTextMatrix(t1, e) {
        this.dependencyTracker?.recordSimpleData("textMatrix", t1);
        const { current: i } = this;
        i.textMatrix = e, i.textMatrixScale = Math.hypot(e[0], e[1]), i.x = i.lineX = 0, i.y = i.lineY = 0;
    }
    nextLine(t1) {
        this.moveText(t1, 0, this.current.leading), this.dependencyTracker?.recordIncrementalData("moveText", this.dependencyTracker.getSimpleIndex("leading") ?? t1);
    }
    #xs(t1, e, i) {
        const s = new Path2D;
        return s.addPath(t1, new DOMMatrix(i).invertSelf().multiplySelf(e)), s;
    }
    paintChar(t1, e, i, s, n, r) {
        const a = this.ctx, o = this.current, l = o.font, h = o.textRenderingMode, c = o.fontSize / o.fontSizeScale, d = h & V, u = !!(h & G), p = o.patternFill && !l.missingFile, g = o.patternStroke && !l.missingFile;
        let m;
        if ((l.disableFontFace || u || p || g) && !l.missingFile && (m = l.getPathGenerator(this.commonObjs, e)), m && (l.disableFontFace || p || g)) {
            let e;
            if (a.save(), a.translate(i, s), a.scale(c, -c), this.dependencyTracker?.recordCharacterBBox(t1, a, l), d === z || d === j) if (n) {
                e = a.getTransform(), a.setTransform(...n);
                const t1 = this.#xs(m, e, n);
                a.fill(t1);
            } else a.fill(m);
            if (d === H || d === j) if (r) {
                e ||= a.getTransform(), a.setTransform(...r);
                const { a: t1, b: i, c: s, d: n } = e, o = Ct.inverseTransform(r), l = Ct.transform([
                    t1,
                    i,
                    s,
                    n,
                    0,
                    0
                ], o);
                Ct.singularValueDecompose2dScale(l, qi), a.lineWidth *= Math.max(qi[0], qi[1]) / c, a.stroke(this.#xs(m, e, r));
            } else a.lineWidth /= c, a.stroke(m);
            a.restore();
        } else d !== z && d !== j || (a.fillText(e, i, s), this.dependencyTracker?.recordCharacterBBox(t1, a, l, c, i, s, ()=>a.measureText(e))), d !== H && d !== j || (this.dependencyTracker && this.dependencyTracker?.recordCharacterBBox(t1, a, l, c, i, s, ()=>a.measureText(e)).recordDependencies(t1, Si), a.strokeText(e, i, s));
        if (u) {
            (this.pendingTextPaths ||= []).push({
                transform: Jt(a),
                x: i,
                y: s,
                fontSize: c,
                path: m
            }), this.dependencyTracker?.recordCharacterBBox(t1, a, l, c, i, s);
        }
    }
    get isFontSubpixelAAEnabled() {
        const { context: t1 } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
        t1.scale(1.5, 1), t1.fillText("I", 0, 10);
        const e = t1.getImageData(0, 0, 10, 10).data;
        let i = !1;
        for(let s = 3; s < e.length; s += 4)if (e[s] > 0 && e[s] < 255) {
            i = !0;
            break;
        }
        return gt(this, "isFontSubpixelAAEnabled", i);
    }
    showText(t1, e) {
        this.dependencyTracker && (this.dependencyTracker.recordDependencies(t1, Mi).resetBBox(t1), this.current.textRenderingMode & G && this.dependencyTracker.recordFutureForcedDependency("textClip", t1).inheritPendingDependenciesAsFutureForcedDependencies());
        const i = this.current, s = i.font;
        if (s.isType3Font) return this.showType3Text(t1, e), void this.dependencyTracker?.recordShowTextOperation(t1);
        const n = i.fontSize;
        if (0 === n) return void this.dependencyTracker?.recordOperation(t1);
        const r = this.ctx, a = i.fontSizeScale, o = i.charSpacing, l = i.wordSpacing, h = i.fontDirection, c = i.textHScale * h, d = e.length, u = s.vertical, p = u ? 1 : -1, g = s.defaultVMetrics, m = n * i.fontMatrix[0], f = i.textRenderingMode === z && !s.disableFontFace && !i.patternFill;
        let b, v;
        if (r.save(), i.textMatrix && r.transform(...i.textMatrix), r.translate(i.x, i.y + i.textRise), h > 0 ? r.scale(c, -1) : r.scale(c, 1), i.patternFill) {
            r.save();
            const e = i.fillColor.getPattern(r, this, Zt(r), ki, t1);
            b = Jt(r), r.restore(), r.fillStyle = e;
        }
        if (i.patternStroke) {
            r.save();
            const e = i.strokeColor.getPattern(r, this, Zt(r), Ii, t1);
            v = Jt(r), r.restore(), r.strokeStyle = e;
        }
        let y = i.lineWidth;
        const w = i.textMatrixScale;
        if (0 === w || 0 === y) {
            const t1 = i.textRenderingMode & V;
            t1 !== H && t1 !== j || (y = this.getSinglePixelWidth());
        } else y /= w;
        if (1 !== a && (r.scale(a, a), y /= a), r.lineWidth = y, s.isInvalidPDFjsFont) {
            const s = [];
            let n = 0;
            for (const t1 of e)s.push(t1.unicode), n += t1.width;
            const a = s.join("");
            if (r.fillText(a, 0, 0), null !== this.dependencyTracker) {
                const e = r.measureText(a);
                this.dependencyTracker.recordBBox(t1, this.ctx, -e.actualBoundingBoxLeft, e.actualBoundingBoxRight, -e.actualBoundingBoxAscent, e.actualBoundingBoxDescent).recordShowTextOperation(t1);
            }
            return i.x += n * m * c, r.restore(), void this.compose();
        }
        let x, A = 0;
        for(x = 0; x < d; ++x){
            const i = e[x];
            if ("number" == typeof i) {
                A += p * i * n / 1e3;
                continue;
            }
            let c = !1;
            const d = (i.isSpace ? l : 0) + o, y = i.fontChar, w = i.accent;
            let _, S, E, C = i.width;
            if (u) {
                const t1 = i.vmetric || g, e = -(i.vmetric ? t1[1] : .5 * C) * m, s = t1[2] * m;
                C = t1 ? -t1[0] : C, _ = e / a, S = (A + s) / a;
            } else _ = A / a, S = 0;
            if (s.remeasure && C > 0) {
                E = r.measureText(y);
                const t1 = 1e3 * E.width / n * a;
                if (C < t1 && this.isFontSubpixelAAEnabled) {
                    const e = C / t1;
                    c = !0, r.save(), r.scale(e, 1), _ /= e;
                } else C !== t1 && (_ += (C - t1) / 2e3 * n / a);
            }
            if (this.contentVisible && (i.isInFont || s.missingFile)) {
                if (f && !w) r.fillText(y, _, S), this.dependencyTracker?.recordCharacterBBox(t1, r, E ? {
                    bbox: null
                } : s, n / a, _, S, ()=>E ?? r.measureText(y));
                else if (this.paintChar(t1, y, _, S, b, v), w) {
                    const e = _ + n * w.offset.x / a, i = S - n * w.offset.y / a;
                    this.paintChar(t1, w.fontChar, e, i, b, v);
                }
            }
            A += u ? C * m - d * h : C * m + d * h, c && r.restore();
        }
        u ? i.y -= A : i.x += A * c, r.restore(), this.compose(), this.dependencyTracker?.recordShowTextOperation(t1);
    }
    showType3Text(t1, e) {
        const i = this.ctx, s = this.current, n = s.font, r = s.fontSize, a = s.fontDirection, o = n.vertical ? 1 : -1, l = s.charSpacing, h = s.wordSpacing, c = s.textHScale * a, d = s.fontMatrix || E, u = e.length;
        let p, g, m, f;
        if (s.textRenderingMode === $ || 0 === r) return;
        this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, i.save(), s.textMatrix && i.transform(...s.textMatrix), i.translate(s.x, s.y + s.textRise), i.scale(c, a);
        const b = this.dependencyTracker;
        for(this.dependencyTracker = b ? new _i(b, t1) : null, p = 0; p < u; ++p){
            if (g = e[p], "number" == typeof g) {
                f = o * g * r / 1e3, this.ctx.translate(f, 0), s.x += f * c;
                continue;
            }
            const t1 = (g.isSpace ? h : 0) + l, a = n.charProcOperatorList[g.operatorListId];
            a ? this.contentVisible && (this.save(), i.scale(r, r), i.transform(...d), this.executeOperatorList(a), this.restore()) : ht(`Type3 character "${g.operatorListId}" is not available.`);
            const u = [
                g.width,
                0
            ];
            Ct.applyTransform(u, d), m = u[0] * r + t1, i.translate(m, 0), s.x += m * c;
        }
        i.restore(), b && (this.dependencyTracker = b);
    }
    setCharWidth(t1, e, i) {}
    setCharWidthAndBounds(t1, e, i, s, n, r, a) {
        const o = new Path2D;
        o.rect(s, n, r - s, a - n), this.ctx.clip(o), this.dependencyTracker?.recordBBox(t1, this.ctx, s, r, n, a).recordClipBox(t1, this.ctx, s, r, n, a), this.endPath(t1);
    }
    getColorN_Pattern(t1, e) {
        let i;
        if ("TilingPattern" === e[0]) {
            const t1 = this.baseTransform || Jt(this.ctx), s = {
                createCanvasGraphics: (t1, e)=>new os(t1, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                        optionalContentConfig: this.optionalContentConfig,
                        markedContentStack: this.markedContentStack
                    }, void 0, void 0, this.dependencyTracker ? new _i(this.dependencyTracker, e, !0) : null)
            };
            i = new $i(e, this.ctx, s, t1);
        } else i = this._getPattern(t1, e[1], e[2]);
        return i;
    }
    setStrokeColorN(t1, ...e) {
        this.dependencyTracker?.recordSimpleData("strokeColor", t1), this.current.strokeColor = this.getColorN_Pattern(t1, e), this.current.patternStroke = !0;
    }
    setFillColorN(t1, ...e) {
        this.dependencyTracker?.recordSimpleData("fillColor", t1), this.current.fillColor = this.getColorN_Pattern(t1, e), this.current.patternFill = !0;
    }
    setStrokeRGBColor(t1, e) {
        this.dependencyTracker?.recordSimpleData("strokeColor", t1), this.ctx.strokeStyle = this.current.strokeColor = e, this.current.patternStroke = !1;
    }
    setStrokeTransparent(t1) {
        this.dependencyTracker?.recordSimpleData("strokeColor", t1), this.ctx.strokeStyle = this.current.strokeColor = "transparent", this.current.patternStroke = !1;
    }
    setFillRGBColor(t1, e) {
        this.dependencyTracker?.recordSimpleData("fillColor", t1), this.ctx.fillStyle = this.current.fillColor = e, this.current.patternFill = !1;
    }
    setFillTransparent(t1) {
        this.dependencyTracker?.recordSimpleData("fillColor", t1), this.ctx.fillStyle = this.current.fillColor = "transparent", this.current.patternFill = !1;
    }
    _getPattern(t1, e, i = null) {
        let s;
        return this.cachedPatterns.has(e) ? s = this.cachedPatterns.get(e) : (s = function(t1) {
            switch(t1[0]){
                case "RadialAxial":
                    return new Fi(t1);
                case "Mesh":
                    return new Ui(t1);
                case "Dummy":
                    return new zi;
            }
            throw new Error(`Unknown IR type: ${t1[0]}`);
        }(this.getObject(t1, e)), this.cachedPatterns.set(e, s)), i && (s.matrix = i), s;
    }
    shadingFill(t1, e) {
        if (!this.contentVisible) return;
        const i = this.ctx;
        this.save(t1);
        const s = this._getPattern(t1, e);
        i.fillStyle = s.getPattern(i, this, Zt(i), Ri, t1);
        const n = Zt(i);
        if ("TURBOPACK compile-time truthy", 1) {
            const { width: t1, height: e } = i.canvas, s = Xi.slice();
            Ct.axialAlignedBoundingBox([
                0,
                0,
                t1,
                e
            ], n, s);
            const [r, a, o, l] = s;
            this.ctx.fillRect(r, a, o - r, l - a);
        } else //TURBOPACK unreachable
        ;
        this.dependencyTracker?.resetBBox(t1).recordFullPageBBox(t1).recordDependencies(t1, Di).recordDependencies(t1, Ei).recordOperation(t1), this.compose(this.current.getClippedPathBoundingBox()), this.restore(t1);
    }
    beginInlineImage() {
        ct("Should not call beginInlineImage");
    }
    beginImageData() {
        ct("Should not call beginImageData");
    }
    paintFormXObjectBegin(t1, e, i) {
        if (this.contentVisible && (this.save(t1), this.baseTransformStack.push(this.baseTransform), e && this.transform(t1, ...e), this.baseTransform = Jt(this.ctx), i)) {
            Ct.axialAlignedBoundingBox(i, this.baseTransform, this.current.minMax);
            const [e, s, n, r] = i, a = new Path2D;
            a.rect(e, s, n - e, r - s), this.ctx.clip(a), this.dependencyTracker?.recordClipBox(t1, this.ctx, e, n, s, r), this.endPath(t1);
        }
    }
    paintFormXObjectEnd(t1) {
        this.contentVisible && (this.restore(t1), this.baseTransform = this.baseTransformStack.pop());
    }
    beginGroup(t1, e) {
        if (!this.contentVisible) return;
        this.save(t1), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
        const i = this.ctx;
        e.isolated || lt("TODO: Support non-isolated groups."), e.knockout && ht("Knockout groups not supported.");
        const s = Jt(i);
        if (e.matrix && i.transform(...e.matrix), !e.bbox) throw new Error("Bounding box is required.");
        let n = Xi.slice();
        Ct.axialAlignedBoundingBox(e.bbox, Jt(i), n);
        const r = [
            0,
            0,
            i.canvas.width,
            i.canvas.height
        ];
        n = Ct.intersect(n, r) || [
            0,
            0,
            0,
            0
        ];
        const a = Math.floor(n[0]), o = Math.floor(n[1]), l = Math.max(Math.ceil(n[2]) - a, 1), h = Math.max(Math.ceil(n[3]) - o, 1);
        this.current.startNewPathAndClipBox([
            0,
            0,
            l,
            h
        ]);
        let c = "groupAt" + this.groupLevel;
        e.smask && (c += "_smask_" + this.smaskCounter++ % 2);
        const d = this.cachedCanvases.getCanvas(c, l, h), u = d.context;
        u.translate(-a, -o), u.transform(...s);
        let p = new Path2D;
        const [g, m, f, b] = e.bbox;
        if (p.rect(g, m, f - g, b - m), e.matrix) {
            const t1 = new Path2D;
            t1.addPath(p, new DOMMatrix(e.matrix)), p = t1;
        }
        u.clip(p), e.smask && this.smaskStack.push({
            canvas: d.canvas,
            context: u,
            offsetX: a,
            offsetY: o,
            subtype: e.smask.subtype,
            backdrop: e.smask.backdrop,
            transferMap: e.smask.transferMap || null,
            startTransformInverse: null
        }), e.smask && !this.dependencyTracker || (i.setTransform(1, 0, 0, 1, 0, 0), i.translate(a, o), i.save()), ts(i, u), this.ctx = u, this.dependencyTracker?.inheritSimpleDataAsFutureForcedDependencies([
            "fillAlpha",
            "strokeAlpha",
            "globalCompositeOperation"
        ]).pushBaseTransform(i), this.setGState(t1, [
            [
                "BM",
                "source-over"
            ],
            [
                "ca",
                1
            ],
            [
                "CA",
                1
            ]
        ]), this.groupStack.push(i), this.groupLevel++;
    }
    endGroup(t1, e) {
        if (!this.contentVisible) return;
        this.groupLevel--;
        const i = this.ctx, s = this.groupStack.pop();
        if (this.ctx = s, this.ctx.imageSmoothingEnabled = !1, this.dependencyTracker?.popBaseTransform(), e.smask) this.tempSMask = this.smaskStack.pop(), this.restore(t1), this.dependencyTracker && this.ctx.restore();
        else {
            this.ctx.restore();
            const e = Jt(this.ctx);
            this.restore(t1), this.ctx.save(), this.ctx.setTransform(...e);
            const s = Xi.slice();
            Ct.axialAlignedBoundingBox([
                0,
                0,
                i.canvas.width,
                i.canvas.height
            ], e, s), this.ctx.drawImage(i.canvas, 0, 0), this.ctx.restore(), this.compose(s);
        }
    }
    beginAnnotation(t1, e, i, s, n, r) {
        if (this.#ys(), es(this.ctx), this.ctx.save(), this.save(t1), this.baseTransform && this.ctx.setTransform(...this.baseTransform), i) {
            const n = i[2] - i[0], a = i[3] - i[1];
            if (r && this.annotationCanvasMap) {
                (s = s.slice())[4] -= i[0], s[5] -= i[1], (i = i.slice())[0] = i[1] = 0, i[2] = n, i[3] = a, Ct.singularValueDecompose2dScale(Jt(this.ctx), qi);
                const { viewportScale: t1 } = this, r = Math.ceil(n * this.outputScaleX * t1), o = Math.ceil(a * this.outputScaleY * t1);
                this.annotationCanvas = this.canvasFactory.create(r, o);
                const { canvas: l, context: h } = this.annotationCanvas;
                this.annotationCanvasMap.set(e, l), this.annotationCanvas.savedCtx = this.ctx, this.ctx = h, this.ctx.save(), this.ctx.setTransform(qi[0], 0, 0, -qi[1], 0, a * qi[1]), es(this.ctx);
            } else {
                es(this.ctx), this.endPath(t1);
                const e = new Path2D;
                e.rect(i[0], i[1], n, a), this.ctx.clip(e);
            }
        }
        this.current = new Qi(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(t1, ...s), this.transform(t1, ...n);
    }
    endAnnotation(t1) {
        this.annotationCanvas && (this.ctx.restore(), this.#ws(), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
    }
    paintImageMaskXObject(t1, e) {
        if (!this.contentVisible) return;
        const i = e.count;
        (e = this.getObject(t1, e.data, e)).count = i;
        const s = this.ctx, n = this._createMaskCanvas(t1, e), r = n.canvas;
        s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.drawImage(r, n.offsetX, n.offsetY), this.dependencyTracker?.resetBBox(t1).recordBBox(t1, this.ctx, n.offsetX, n.offsetX + r.width, n.offsetY, n.offsetY + r.height).recordOperation(t1), s.restore(), this.compose();
    }
    paintImageMaskXObjectRepeat(t1, e, i, s = 0, n = 0, r, a) {
        if (!this.contentVisible) return;
        e = this.getObject(t1, e.data, e);
        const o = this.ctx;
        o.save();
        const l = Jt(o);
        o.transform(i, s, n, r, 0, 0);
        const h = this._createMaskCanvas(t1, e);
        o.setTransform(1, 0, 0, 1, h.offsetX - l[4], h.offsetY - l[5]), this.dependencyTracker?.resetBBox(t1);
        for(let c = 0, d = a.length; c < d; c += 2){
            const e = Ct.transform(l, [
                i,
                s,
                n,
                r,
                a[c],
                a[c + 1]
            ]);
            o.drawImage(h.canvas, e[4], e[5]), this.dependencyTracker?.recordBBox(t1, this.ctx, e[4], e[4] + h.canvas.width, e[5], e[5] + h.canvas.height);
        }
        o.restore(), this.compose(), this.dependencyTracker?.recordOperation(t1);
    }
    paintImageMaskXObjectGroup(t1, e) {
        if (!this.contentVisible) return;
        const i = this.ctx, s = this.current.fillColor, n = this.current.patternFill;
        this.dependencyTracker?.resetBBox(t1).recordDependencies(t1, Pi);
        for (const r of e){
            const { data: e, width: a, height: o, transform: l } = r, h = this.cachedCanvases.getCanvas("maskCanvas", a, o), c = h.context;
            c.save();
            Zi(c, this.getObject(t1, e, r)), c.globalCompositeOperation = "source-in", c.fillStyle = n ? s.getPattern(c, this, Zt(i), ki, t1) : s, c.fillRect(0, 0, a, o), c.restore(), i.save(), i.transform(...l), i.scale(1, -1), Ki(i, h.canvas, 0, 0, a, o, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t1, i, 0, a, 0, o), i.restore();
        }
        this.compose(), this.dependencyTracker?.recordOperation(t1);
    }
    paintImageXObject(t1, e) {
        if (!this.contentVisible) return;
        const i = this.getObject(t1, e);
        i ? this.paintInlineImageXObject(t1, i) : ht("Dependent image isn't ready yet");
    }
    paintImageXObjectRepeat(t1, e, i, s, n) {
        if (!this.contentVisible) return;
        const r = this.getObject(t1, e);
        if (!r) return void ht("Dependent image isn't ready yet");
        const a = r.width, o = r.height, l = [];
        for(let h = 0, c = n.length; h < c; h += 2)l.push({
            transform: [
                i,
                0,
                0,
                s,
                n[h],
                n[h + 1]
            ],
            x: 0,
            y: 0,
            w: a,
            h: o
        });
        this.paintInlineImageXObjectGroup(t1, r, l);
    }
    applyTransferMapsToCanvas(t1) {
        return "none" !== this.current.transferMaps && (t1.filter = this.current.transferMaps, t1.drawImage(t1.canvas, 0, 0), t1.filter = "none"), t1.canvas;
    }
    applyTransferMapsToBitmap(t1) {
        if ("none" === this.current.transferMaps) return t1.bitmap;
        const { bitmap: e, width: i, height: s } = t1, n = this.cachedCanvases.getCanvas("inlineImage", i, s), r = n.context;
        return r.filter = this.current.transferMaps, r.drawImage(e, 0, 0), r.filter = "none", n.canvas;
    }
    paintInlineImageXObject(t1, e) {
        if (!this.contentVisible) return;
        const i = e.width, s = e.height, n = this.ctx;
        this.save(t1);
        const { filter: r } = n;
        let a;
        if ("none" !== r && "" !== r && (n.filter = "none"), n.scale(1 / i, -1 / s), e.bitmap) a = this.applyTransferMapsToBitmap(e);
        else if ("function" == typeof HTMLElement && e instanceof HTMLElement || !e.data) a = e;
        else {
            const t1 = this.cachedCanvases.getCanvas("inlineImage", i, s).context;
            Ji(t1, e), a = this.applyTransferMapsToCanvas(t1);
        }
        const o = this._scaleImage(a, Zt(n));
        n.imageSmoothingEnabled = is(Jt(n), e.interpolate), this.dependencyTracker?.resetBBox(t1).recordBBox(t1, n, 0, i, -s, 0).recordDependencies(t1, Ci).recordOperation(t1), Ki(n, o.img, 0, 0, o.paintWidth, o.paintHeight, 0, -s, i, s), this.compose(), this.restore(t1);
    }
    paintInlineImageXObjectGroup(t1, e, i) {
        if (!this.contentVisible) return;
        const s = this.ctx;
        let n;
        if (e.bitmap) n = e.bitmap;
        else {
            const t1 = e.width, i = e.height, s = this.cachedCanvases.getCanvas("inlineImage", t1, i).context;
            Ji(s, e), n = this.applyTransferMapsToCanvas(s);
        }
        this.dependencyTracker?.resetBBox(t1);
        for (const r of i)s.save(), s.transform(...r.transform), s.scale(1, -1), Ki(s, n, r.x, r.y, r.w, r.h, 0, -1, 1, 1), this.dependencyTracker?.recordBBox(t1, s, 0, 1, -1, 0), s.restore();
        this.dependencyTracker?.recordOperation(t1), this.compose();
    }
    paintSolidColorImageMask(t1) {
        this.contentVisible && (this.dependencyTracker?.resetBBox(t1).recordBBox(t1, this.ctx, 0, 1, 0, 1).recordDependencies(t1, Ei).recordOperation(t1), this.ctx.fillRect(0, 0, 1, 1), this.compose());
    }
    markPoint(t1, e) {}
    markPointProps(t1, e, i) {}
    beginMarkedContent(t1, e) {
        this.dependencyTracker?.beginMarkedContent(t1), this.markedContentStack.push({
            visible: !0
        });
    }
    beginMarkedContentProps(t1, e, i) {
        this.dependencyTracker?.beginMarkedContent(t1), "OC" === e ? this.markedContentStack.push({
            visible: this.optionalContentConfig.isVisible(i)
        }) : this.markedContentStack.push({
            visible: !0
        }), this.contentVisible = this.isContentVisible();
    }
    endMarkedContent(t1) {
        this.dependencyTracker?.endMarkedContent(t1), this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
    }
    beginCompat(t1) {}
    endCompat(t1) {}
    consumePath(t1, e, i) {
        const s = this.current.isEmptyClip();
        this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(i);
        const n = this.ctx;
        this.pendingClip ? (s || (this.pendingClip === as ? n.clip(e, "evenodd") : n.clip(e)), this.pendingClip = null, this.dependencyTracker?.bboxToClipBoxDropOperation(t1).recordFutureForcedDependency("clipPath", t1)) : this.dependencyTracker?.recordOperation(t1), this.current.startNewPathAndClipBox(this.current.clipBox);
    }
    getSinglePixelWidth() {
        if (!this._cachedGetSinglePixelWidth) {
            const t1 = Jt(this.ctx);
            if (0 === t1[1] && 0 === t1[2]) this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(t1[0]), Math.abs(t1[3]));
            else {
                const e = Math.abs(t1[0] * t1[3] - t1[2] * t1[1]), i = Math.hypot(t1[0], t1[2]), s = Math.hypot(t1[1], t1[3]);
                this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
            }
        }
        return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
        if (-1 === this._cachedScaleForStroking[0]) {
            const { lineWidth: t1 } = this.current, { a: e, b: i, c: s, d: n } = this.ctx.getTransform();
            let r, a;
            if (0 === i && 0 === s) {
                const i = Math.abs(e), s = Math.abs(n);
                if (i === s) if (0 === t1) r = a = 1 / i;
                else {
                    const e = i * t1;
                    r = a = e < 1 ? 1 / e : 1;
                }
                else if (0 === t1) r = 1 / i, a = 1 / s;
                else {
                    const e = i * t1, n = s * t1;
                    r = e < 1 ? 1 / e : 1, a = n < 1 ? 1 / n : 1;
                }
            } else {
                const o = Math.abs(e * n - i * s), l = Math.hypot(e, i), h = Math.hypot(s, n);
                if (0 === t1) r = h / o, a = l / o;
                else {
                    const e = t1 * o;
                    r = h > e ? h / e : 1, a = l > e ? l / e : 1;
                }
            }
            this._cachedScaleForStroking[0] = r, this._cachedScaleForStroking[1] = a;
        }
        return this._cachedScaleForStroking;
    }
    rescaleAndStroke(t1, e) {
        const { ctx: i, current: { lineWidth: s } } = this, [n, r] = this.getScaleForStroking();
        if (n === r) return i.lineWidth = (s || 1) * n, void i.stroke(t1);
        const a = i.getLineDash();
        e && i.save(), i.scale(n, r), Wi.a = 1 / n, Wi.d = 1 / r;
        const o = new Path2D;
        if (o.addPath(t1, Wi), a.length > 0) {
            const t1 = Math.max(n, r);
            i.setLineDash(a.map((e)=>e / t1)), i.lineDashOffset /= t1;
        }
        i.lineWidth = s || 1, i.stroke(o), e && i.restore();
    }
    isContentVisible() {
        for(let t1 = this.markedContentStack.length - 1; t1 >= 0; t1--)if (!this.markedContentStack[t1].visible) return !1;
        return !0;
    }
}
for(const Rr in tt)void 0 !== os.prototype[Rr] && (os.prototype[tt[Rr]] = os.prototype[Rr]);
class ls {
    #As;
    #_s;
    #Ss;
    static strings = [
        "fontFamily",
        "fontWeight",
        "italicAngle"
    ];
    static write(t1) {
        const e = new TextEncoder, i = {};
        let s = 0;
        for (const l of ls.strings){
            const n = e.encode(t1[l]);
            i[l] = n, s += 4 + n.length;
        }
        const n = new ArrayBuffer(s), r = new Uint8Array(n), a = new DataView(n);
        let o = 0;
        for (const l of ls.strings){
            const t1 = i[l], e = t1.length;
            a.setUint32(o, e), r.set(t1, o + 4), o += 4 + e;
        }
        return dt(o === n.byteLength, "CssFontInfo.write: Buffer overflow"), n;
    }
    constructor(t1){
        this.#As = t1, this.#_s = new DataView(this.#As), this.#Ss = new TextDecoder;
    }
    #Es(t1) {
        dt(t1 < ls.strings.length, "Invalid string index");
        let e = 0;
        for(let s = 0; s < t1; s++)e += this.#_s.getUint32(e) + 4;
        const i = this.#_s.getUint32(e);
        return this.#Ss.decode(new Uint8Array(this.#As, e + 4, i));
    }
    get fontFamily() {
        return this.#Es(0);
    }
    get fontWeight() {
        return this.#Es(1);
    }
    get italicAngle() {
        return this.#Es(2);
    }
}
class hs {
    #As;
    #_s;
    #Ss;
    static strings = [
        "css",
        "loadedName",
        "baseFontName",
        "src"
    ];
    static write(t1) {
        const e = new TextEncoder, i = {};
        let s = 0;
        for (const d of hs.strings){
            const n = e.encode(t1[d]);
            i[d] = n, s += 4 + n.length;
        }
        s += 4;
        let n, r, a = 1 + s;
        t1.style && (n = e.encode(t1.style.style), r = e.encode(t1.style.weight), a += 4 + n.length + 4 + r.length);
        const o = new ArrayBuffer(a), l = new Uint8Array(o), h = new DataView(o);
        let c = 0;
        h.setUint8(c++, t1.guessFallback ? 1 : 0), h.setUint32(c, 0), c += 4, s = 0;
        for (const d of hs.strings){
            const t1 = i[d], e = t1.length;
            s += 4 + e, h.setUint32(c, e), l.set(t1, c + 4), c += 4 + e;
        }
        return h.setUint32(c - s - 4, s), t1.style && (h.setUint32(c, n.length), l.set(n, c + 4), c += 4 + n.length, h.setUint32(c, r.length), l.set(r, c + 4), c += 4 + r.length), dt(c <= o.byteLength, "SubstitionInfo.write: Buffer overflow"), o.transferToFixedLength(c);
    }
    constructor(t1){
        this.#As = t1, this.#_s = new DataView(this.#As), this.#Ss = new TextDecoder;
    }
    get guessFallback() {
        return 0 !== this.#_s.getUint8(0);
    }
    #Es(t1) {
        dt(t1 < hs.strings.length, "Invalid string index");
        let e = 5;
        for(let s = 0; s < t1; s++)e += this.#_s.getUint32(e) + 4;
        const i = this.#_s.getUint32(e);
        return this.#Ss.decode(new Uint8Array(this.#As, e + 4, i));
    }
    get css() {
        return this.#Es(0);
    }
    get loadedName() {
        return this.#Es(1);
    }
    get baseFontName() {
        return this.#Es(2);
    }
    get src() {
        return this.#Es(3);
    }
    get style() {
        let t1 = 1;
        t1 += 4 + this.#_s.getUint32(t1);
        const e = this.#_s.getUint32(t1), i = this.#Ss.decode(new Uint8Array(this.#As, t1 + 4, e));
        t1 += 4 + e;
        const s = this.#_s.getUint32(t1);
        return {
            style: i,
            weight: this.#Ss.decode(new Uint8Array(this.#As, t1 + 4, s))
        };
    }
}
class cs {
    static bools = [
        "black",
        "bold",
        "disableFontFace",
        "fontExtraProperties",
        "isInvalidPDFjsFont",
        "isType3Font",
        "italic",
        "missingFile",
        "remeasure",
        "vertical"
    ];
    static numbers = [
        "ascent",
        "defaultWidth",
        "descent"
    ];
    static strings = [
        "fallbackName",
        "loadedName",
        "mimetype",
        "name"
    ];
    static #Cs = Math.ceil(2 * this.bools.length / 8);
    static #Ts = this.#Cs + 8 * this.numbers.length;
    static #Ms = this.#Ts + 1 + 8;
    static #Ds = this.#Ms + 1 + 48;
    static #Ps = this.#Ds + 1 + 6;
    #As;
    #Ss;
    #_s;
    constructor({ data: t1, extra: e }){
        this.#As = t1, this.#Ss = new TextDecoder, this.#_s = new DataView(this.#As), e && Object.assign(this, e);
    }
    #ks(t1) {
        dt(t1 < cs.bools.length, "Invalid boolean index");
        const e = Math.floor(t1 / 4), i = 2 * t1 % 8, s = this.#_s.getUint8(e) >> i & 3;
        return 0 === s ? void 0 : 2 === s;
    }
    get black() {
        return this.#ks(0);
    }
    get bold() {
        return this.#ks(1);
    }
    get disableFontFace() {
        return this.#ks(2);
    }
    get fontExtraProperties() {
        return this.#ks(3);
    }
    get isInvalidPDFjsFont() {
        return this.#ks(4);
    }
    get isType3Font() {
        return this.#ks(5);
    }
    get italic() {
        return this.#ks(6);
    }
    get missingFile() {
        return this.#ks(7);
    }
    get remeasure() {
        return this.#ks(8);
    }
    get vertical() {
        return this.#ks(9);
    }
    #Is(t1) {
        return dt(t1 < cs.numbers.length, "Invalid number index"), this.#_s.getFloat64(cs.#Cs + 8 * t1);
    }
    get ascent() {
        return this.#Is(0);
    }
    get defaultWidth() {
        return this.#Is(1);
    }
    get descent() {
        return this.#Is(2);
    }
    get bbox() {
        let t1 = cs.#Ts;
        if (0 === this.#_s.getUint8(t1)) return;
        t1 += 1;
        const e = [];
        for(let i = 0; i < 4; i++)e.push(this.#_s.getInt16(t1, !0)), t1 += 2;
        return e;
    }
    get fontMatrix() {
        let t1 = cs.#Ms;
        if (0 === this.#_s.getUint8(t1)) return;
        t1 += 1;
        const e = [];
        for(let i = 0; i < 6; i++)e.push(this.#_s.getFloat64(t1, !0)), t1 += 8;
        return e;
    }
    get defaultVMetrics() {
        let t1 = cs.#Ds;
        if (0 === this.#_s.getUint8(t1)) return;
        t1 += 1;
        const e = [];
        for(let i = 0; i < 3; i++)e.push(this.#_s.getInt16(t1, !0)), t1 += 2;
        return e;
    }
    #Es(t1) {
        dt(t1 < cs.strings.length, "Invalid string index");
        let e = cs.#Ps + 4;
        for(let n = 0; n < t1; n++)e += this.#_s.getUint32(e) + 4;
        const i = this.#_s.getUint32(e), s = new Uint8Array(i);
        return s.set(new Uint8Array(this.#As, e + 4, i)), this.#Ss.decode(s);
    }
    get fallbackName() {
        return this.#Es(0);
    }
    get loadedName() {
        return this.#Es(1);
    }
    get mimetype() {
        return this.#Es(2);
    }
    get name() {
        return this.#Es(3);
    }
    get data() {
        let t1 = cs.#Ps;
        t1 += 4 + this.#_s.getUint32(t1);
        t1 += 4 + this.#_s.getUint32(t1);
        t1 += 4 + this.#_s.getUint32(t1);
        const e = this.#_s.getUint32(t1);
        if (0 !== e) return new Uint8Array(this.#As, t1 + 4, e);
    }
    clearData() {
        let t1 = cs.#Ps;
        t1 += 4 + this.#_s.getUint32(t1);
        t1 += 4 + this.#_s.getUint32(t1);
        t1 += 4 + this.#_s.getUint32(t1);
        const e = this.#_s.getUint32(t1);
        new Uint8Array(this.#As, t1 + 4, e).fill(0), this.#_s.setUint32(t1, 0);
    }
    get cssFontInfo() {
        let t1 = cs.#Ps;
        t1 += 4 + this.#_s.getUint32(t1);
        t1 += 4 + this.#_s.getUint32(t1);
        const e = this.#_s.getUint32(t1);
        if (0 === e) return null;
        const i = new Uint8Array(e);
        return i.set(new Uint8Array(this.#As, t1 + 4, e)), new ls(i.buffer);
    }
    get systemFontInfo() {
        let t1 = cs.#Ps;
        t1 += 4 + this.#_s.getUint32(t1);
        const e = this.#_s.getUint32(t1);
        if (0 === e) return null;
        const i = new Uint8Array(e);
        return i.set(new Uint8Array(this.#As, t1 + 4, e)), new hs(i.buffer);
    }
    static write(t1) {
        const e = t1.systemFontInfo ? hs.write(t1.systemFontInfo) : null, i = t1.cssFontInfo ? ls.write(t1.cssFontInfo) : null, s = new TextEncoder, n = {};
        let r = 0;
        for (const g of cs.strings)n[g] = s.encode(t1[g]), r += 4 + n[g].length;
        const a = cs.#Ps + 4 + r + 4 + (e ? e.byteLength : 0) + 4 + (i ? i.byteLength : 0) + 4 + (t1.data ? t1.data.length : 0), o = new ArrayBuffer(a), l = new Uint8Array(o), h = new DataView(o);
        let c = 0;
        const d = cs.bools.length;
        let u = 0, p = 0;
        for(let g = 0; g < d; g++){
            const e = t1[cs.bools[g]];
            u |= (void 0 === e ? 0 : e ? 2 : 1) << p, p += 2, 8 !== p && g !== d - 1 || (h.setUint8(c++, u), u = 0, p = 0);
        }
        dt(c === cs.#Cs, "FontInfo.write: Boolean properties offset mismatch");
        for (const g of cs.numbers)h.setFloat64(c, t1[g]), c += 8;
        if (dt(c === cs.#Ts, "FontInfo.write: Number properties offset mismatch"), t1.bbox) {
            h.setUint8(c++, 4);
            for (const e of t1.bbox)h.setInt16(c, e, !0), c += 2;
        } else h.setUint8(c++, 0), c += 8;
        if (dt(c === cs.#Ms, "FontInfo.write: BBox properties offset mismatch"), t1.fontMatrix) {
            h.setUint8(c++, 6);
            for (const e of t1.fontMatrix)h.setFloat64(c, e, !0), c += 8;
        } else h.setUint8(c++, 0), c += 48;
        if (dt(c === cs.#Ds, "FontInfo.write: FontMatrix properties offset mismatch"), t1.defaultVMetrics) {
            h.setUint8(c++, 1);
            for (const e of t1.defaultVMetrics)h.setInt16(c, e, !0), c += 2;
        } else h.setUint8(c++, 0), c += 6;
        dt(c === cs.#Ps, "FontInfo.write: DefaultVMetrics properties offset mismatch"), h.setUint32(cs.#Ps, 0), c += 4;
        for (const g of cs.strings){
            const t1 = n[g], e = t1.length;
            h.setUint32(c, e), l.set(t1, c + 4), c += 4 + e;
        }
        if (h.setUint32(cs.#Ps, c - cs.#Ps - 4), e) {
            const t1 = e.byteLength;
            h.setUint32(c, t1), dt(c + 4 + t1 <= o.byteLength, "FontInfo.write: Buffer overflow at systemFontInfo"), l.set(new Uint8Array(e), c + 4), c += 4 + t1;
        } else h.setUint32(c, 0), c += 4;
        if (i) {
            const t1 = i.byteLength;
            h.setUint32(c, t1), dt(c + 4 + t1 <= o.byteLength, "FontInfo.write: Buffer overflow at cssFontInfo"), l.set(new Uint8Array(i), c + 4), c += 4 + t1;
        } else h.setUint32(c, 0), c += 4;
        return void 0 === t1.data ? (h.setUint32(c, 0), c += 4) : (h.setUint32(c, t1.data.length), l.set(t1.data, c + 4), c += 4 + t1.data.length), dt(c <= o.byteLength, "FontInfo.write: Buffer overflow"), o.transferToFixedLength(c);
    }
}
class ds {
    static #Rs = null;
    static #Ls = "";
    static get workerPort() {
        return this.#Rs;
    }
    static set workerPort(t1) {
        if (!("undefined" != typeof Worker && t1 instanceof Worker) && null !== t1) throw new Error("Invalid `workerPort` type.");
        this.#Rs = t1;
    }
    static get workerSrc() {
        return this.#Ls;
    }
    static set workerSrc(t1) {
        if ("string" != typeof t1) throw new Error("Invalid `workerSrc` type.");
        this.#Ls = t1;
    }
}
class us {
    #Bs;
    #Fs;
    constructor({ parsedData: t1, rawData: e }){
        this.#Bs = t1, this.#Fs = e;
    }
    getRaw() {
        return this.#Fs;
    }
    get(t1) {
        return this.#Bs.get(t1) ?? null;
    }
    [Symbol.iterator]() {
        return this.#Bs.entries();
    }
}
const ps = Symbol("INTERNAL");
class gs {
    #Os = !1;
    #Ns = !1;
    #Us = !1;
    #zs = !0;
    constructor(t1, { name: e, intent: i, usage: s, rbGroups: n }){
        this.#Os = !!(t1 & M), this.#Ns = !!(t1 & D), this.name = e, this.intent = i, this.usage = s, this.rbGroups = n;
    }
    get visible() {
        if (this.#Us) return this.#zs;
        if (!this.#zs) return !1;
        const { print: t1, view: e } = this.usage;
        return this.#Os ? "OFF" !== e?.viewState : !this.#Ns || "OFF" !== t1?.printState;
    }
    _setVisible(t1, e, i = !1) {
        t1 !== ps && ct("Internal method `_setVisible` called."), this.#Us = i, this.#zs = e;
    }
}
class ms {
    #Hs = null;
    #js = new Map;
    #$s = null;
    #Vs = null;
    constructor(t1, e = M){
        if (this.renderingIntent = e, this.name = null, this.creator = null, null !== t1) {
            this.name = t1.name, this.creator = t1.creator, this.#Vs = t1.order;
            for (const i of t1.groups)this.#js.set(i.id, new gs(e, i));
            if ("OFF" === t1.baseState) for (const t1 of this.#js.values())t1._setVisible(ps, !1);
            for (const e of t1.on)this.#js.get(e)._setVisible(ps, !0);
            for (const e of t1.off)this.#js.get(e)._setVisible(ps, !1);
            this.#$s = this.getHash();
        }
    }
    #Gs(t1) {
        const e = t1.length;
        if (e < 2) return !0;
        const i = t1[0];
        for(let s = 1; s < e; s++){
            const e = t1[s];
            let n;
            if (Array.isArray(e)) n = this.#Gs(e);
            else {
                if (!this.#js.has(e)) return ht(`Optional content group not found: ${e}`), !0;
                n = this.#js.get(e).visible;
            }
            switch(i){
                case "And":
                    if (!n) return !1;
                    break;
                case "Or":
                    if (n) return !0;
                    break;
                case "Not":
                    return !n;
                default:
                    return !0;
            }
        }
        return "And" === i;
    }
    isVisible(t1) {
        if (0 === this.#js.size) return !0;
        if (!t1) return lt("Optional content group not defined."), !0;
        if ("OCG" === t1.type) return this.#js.has(t1.id) ? this.#js.get(t1.id).visible : (ht(`Optional content group not found: ${t1.id}`), !0);
        if ("OCMD" === t1.type) {
            if (t1.expression) return this.#Gs(t1.expression);
            if (!t1.policy || "AnyOn" === t1.policy) {
                for (const e of t1.ids){
                    if (!this.#js.has(e)) return ht(`Optional content group not found: ${e}`), !0;
                    if (this.#js.get(e).visible) return !0;
                }
                return !1;
            }
            if ("AllOn" === t1.policy) {
                for (const e of t1.ids){
                    if (!this.#js.has(e)) return ht(`Optional content group not found: ${e}`), !0;
                    if (!this.#js.get(e).visible) return !1;
                }
                return !0;
            }
            if ("AnyOff" === t1.policy) {
                for (const e of t1.ids){
                    if (!this.#js.has(e)) return ht(`Optional content group not found: ${e}`), !0;
                    if (!this.#js.get(e).visible) return !0;
                }
                return !1;
            }
            if ("AllOff" === t1.policy) {
                for (const e of t1.ids){
                    if (!this.#js.has(e)) return ht(`Optional content group not found: ${e}`), !0;
                    if (this.#js.get(e).visible) return !1;
                }
                return !0;
            }
            return ht(`Unknown optional content policy ${t1.policy}.`), !0;
        }
        return ht(`Unknown group type ${t1.type}.`), !0;
    }
    setVisibility(t1, e = !0, i = !0) {
        const s = this.#js.get(t1);
        if (s) {
            if (i && e && s.rbGroups.length) for (const e of s.rbGroups)for (const i of e)i !== t1 && this.#js.get(i)?._setVisible(ps, !1, !0);
            s._setVisible(ps, !!e, !0), this.#Hs = null;
        } else ht(`Optional content group not found: ${t1}`);
    }
    setOCGState({ state: t1, preserveRB: e }) {
        let i;
        for (const s of t1){
            switch(s){
                case "ON":
                case "OFF":
                case "Toggle":
                    i = s;
                    continue;
            }
            const t1 = this.#js.get(s);
            if (t1) switch(i){
                case "ON":
                    this.setVisibility(s, !0, e);
                    break;
                case "OFF":
                    this.setVisibility(s, !1, e);
                    break;
                case "Toggle":
                    this.setVisibility(s, !t1.visible, e);
            }
        }
        this.#Hs = null;
    }
    get hasInitialVisibility() {
        return null === this.#$s || this.getHash() === this.#$s;
    }
    getOrder() {
        return this.#js.size ? this.#Vs ? this.#Vs.slice() : [
            ...this.#js.keys()
        ] : null;
    }
    getGroup(t1) {
        return this.#js.get(t1) || null;
    }
    getHash() {
        if (null !== this.#Hs) return this.#Hs;
        const t1 = new Pe;
        for (const [e, i] of this.#js)t1.update(`${e}:${i.visible}`);
        return this.#Hs = t1.hexdigest();
    }
    [Symbol.iterator]() {
        return this.#js.entries();
    }
}
class fs {
    constructor(t1, { disableRange: e = !1, disableStream: i = !1 }){
        dt(t1, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
        const { length: s, initialData: n, progressiveDone: r, contentDispositionFilename: a } = t1;
        if (this._queuedChunks = [], this._progressiveDone = r, this._contentDispositionFilename = a, n?.length > 0) {
            const t1 = n instanceof Uint8Array && n.byteLength === n.buffer.byteLength ? n.buffer : new Uint8Array(n).buffer;
            this._queuedChunks.push(t1);
        }
        this._pdfDataRangeTransport = t1, this._isStreamingSupported = !i, this._isRangeSupported = !e, this._contentLength = s, this._fullRequestReader = null, this._rangeReaders = [], t1.addRangeListener((t1, e)=>{
            this._onReceiveData({
                begin: t1,
                chunk: e
            });
        }), t1.addProgressListener((t1, e)=>{
            this._onProgress({
                loaded: t1,
                total: e
            });
        }), t1.addProgressiveReadListener((t1)=>{
            this._onReceiveData({
                chunk: t1
            });
        }), t1.addProgressiveDoneListener(()=>{
            this._onProgressiveDone();
        }), t1.transportReady();
    }
    _onReceiveData({ begin: t1, chunk: e }) {
        const i = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
        if (void 0 === t1) this._fullRequestReader ? this._fullRequestReader._enqueue(i) : this._queuedChunks.push(i);
        else {
            dt(this._rangeReaders.some(function(e) {
                return e._begin === t1 && (e._enqueue(i), !0);
            }), "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
        }
    }
    get _progressiveDataLength() {
        return this._fullRequestReader?._loaded ?? 0;
    }
    _onProgress(t1) {
        void 0 === t1.total ? this._rangeReaders[0]?.onProgress?.({
            loaded: t1.loaded
        }) : this._fullRequestReader?.onProgress?.({
            loaded: t1.loaded,
            total: t1.total
        });
    }
    _onProgressiveDone() {
        this._fullRequestReader?.progressiveDone(), this._progressiveDone = !0;
    }
    _removeRangeReader(t1) {
        const e = this._rangeReaders.indexOf(t1);
        e >= 0 && this._rangeReaders.splice(e, 1);
    }
    getFullReader() {
        dt(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
        const t1 = this._queuedChunks;
        return this._queuedChunks = null, new bs(this, t1, this._progressiveDone, this._contentDispositionFilename);
    }
    getRangeReader(t1, e) {
        if (e <= this._progressiveDataLength) return null;
        const i = new vs(this, t1, e);
        return this._pdfDataRangeTransport.requestDataRange(t1, e), this._rangeReaders.push(i), i;
    }
    cancelAllRequests(t1) {
        this._fullRequestReader?.cancel(t1);
        for (const e of this._rangeReaders.slice(0))e.cancel(t1);
        this._pdfDataRangeTransport.abort();
    }
}
class bs {
    constructor(t1, e, i = !1, s = null){
        this._stream = t1, this._done = i || !1, this._filename = jt(s) ? s : null, this._queuedChunks = e || [], this._loaded = 0;
        for (const n of this._queuedChunks)this._loaded += n.byteLength;
        this._requests = [], this._headersReady = Promise.resolve(), t1._fullRequestReader = this, this.onProgress = null;
    }
    _enqueue(t1) {
        if (!this._done) {
            if (this._requests.length > 0) {
                this._requests.shift().resolve({
                    value: t1,
                    done: !1
                });
            } else this._queuedChunks.push(t1);
            this._loaded += t1.byteLength;
        }
    }
    get headersReady() {
        return this._headersReady;
    }
    get filename() {
        return this._filename;
    }
    get isRangeSupported() {
        return this._stream._isRangeSupported;
    }
    get isStreamingSupported() {
        return this._stream._isStreamingSupported;
    }
    get contentLength() {
        return this._stream._contentLength;
    }
    async read() {
        if (this._queuedChunks.length > 0) {
            return {
                value: this._queuedChunks.shift(),
                done: !1
            };
        }
        if (this._done) return {
            value: void 0,
            done: !0
        };
        const t1 = Promise.withResolvers();
        return this._requests.push(t1), t1.promise;
    }
    cancel(t1) {
        this._done = !0;
        for (const e of this._requests)e.resolve({
            value: void 0,
            done: !0
        });
        this._requests.length = 0;
    }
    progressiveDone() {
        this._done || (this._done = !0);
    }
}
class vs {
    constructor(t1, e, i){
        this._stream = t1, this._begin = e, this._end = i, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
    }
    _enqueue(t1) {
        if (!this._done) {
            if (0 === this._requests.length) this._queuedChunk = t1;
            else {
                this._requests.shift().resolve({
                    value: t1,
                    done: !1
                });
                for (const t1 of this._requests)t1.resolve({
                    value: void 0,
                    done: !0
                });
                this._requests.length = 0;
            }
            this._done = !0, this._stream._removeRangeReader(this);
        }
    }
    get isStreamingSupported() {
        return !1;
    }
    async read() {
        if (this._queuedChunk) {
            const t1 = this._queuedChunk;
            return this._queuedChunk = null, {
                value: t1,
                done: !1
            };
        }
        if (this._done) return {
            value: void 0,
            done: !0
        };
        const t1 = Promise.withResolvers();
        return this._requests.push(t1), t1.promise;
    }
    cancel(t1) {
        this._done = !0;
        for (const e of this._requests)e.resolve({
            value: void 0,
            done: !0
        });
        this._requests.length = 0, this._stream._removeRangeReader(this);
    }
}
function ys(t1, e) {
    const i = new Headers;
    if (!t1 || !e || "object" != typeof e) return i;
    for(const s in e){
        const t1 = e[s];
        void 0 !== t1 && i.append(s, t1);
    }
    return i;
}
function ws(t1) {
    return URL.parse(t1)?.origin ?? null;
}
function xs({ responseHeaders: t1, isHttp: e, rangeChunkSize: i, disableRange: s }) {
    const n = {
        allowRangeRequests: !1,
        suggestedLength: void 0
    }, r = parseInt(t1.get("Content-Length"), 10);
    if (!Number.isInteger(r)) return n;
    if (n.suggestedLength = r, r <= 2 * i) return n;
    if (s || !e) return n;
    if ("bytes" !== t1.get("Accept-Ranges")) return n;
    return "identity" !== (t1.get("Content-Encoding") || "identity") || (n.allowRangeRequests = !0), n;
}
function As(t1) {
    const e = t1.get("Content-Disposition");
    if (e) {
        let t1 = function(t1) {
            let e = !0, i = s("filename\\*", "i").exec(t1);
            if (i) {
                i = i[1];
                let t1 = a(i);
                return t1 = unescape(t1), t1 = o(t1), t1 = l(t1), r(t1);
            }
            if (i = function(t1) {
                const e = [];
                let i;
                const n = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                for(; null !== (i = n.exec(t1));){
                    let [, t1, s, n] = i;
                    if (t1 = parseInt(t1, 10), t1 in e) {
                        if (0 === t1) break;
                    } else e[t1] = [
                        s,
                        n
                    ];
                }
                const r = [];
                for(let s = 0; s < e.length && s in e; ++s){
                    let [t1, i] = e[s];
                    i = a(i), t1 && (i = unescape(i), 0 === s && (i = o(i))), r.push(i);
                }
                return r.join("");
            }(t1), i) return r(l(i));
            if (i = s("filename", "i").exec(t1), i) {
                i = i[1];
                let t1 = a(i);
                return t1 = l(t1), r(t1);
            }
            function s(t1, e) {
                return new RegExp("(?:^|;)\\s*" + t1 + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', e);
            }
            function n(t1, i) {
                if (t1) {
                    if (!/^[\x00-\xFF]+$/.test(i)) return i;
                    try {
                        const s = new TextDecoder(t1, {
                            fatal: !0
                        }), n = _t(i);
                        i = s.decode(n), e = !1;
                    } catch  {}
                }
                return i;
            }
            function r(t1) {
                return e && /[\x80-\xff]/.test(t1) && (t1 = n("utf-8", t1), e && (t1 = n("iso-8859-1", t1))), t1;
            }
            function a(t1) {
                if (t1.startsWith('"')) {
                    const e = t1.slice(1).split('\\"');
                    for(let t1 = 0; t1 < e.length; ++t1){
                        const i = e[t1].indexOf('"');
                        -1 !== i && (e[t1] = e[t1].slice(0, i), e.length = t1 + 1), e[t1] = e[t1].replaceAll(/\\(.)/g, "$1");
                    }
                    t1 = e.join('"');
                }
                return t1;
            }
            function o(t1) {
                const e = t1.indexOf("'");
                return -1 === e ? t1 : n(t1.slice(0, e), t1.slice(e + 1).replace(/^[^']*'/, ""));
            }
            function l(t1) {
                return !t1.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t1) ? t1 : t1.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(t1, e, i, s) {
                    if ("q" === i || "Q" === i) return n(e, s = (s = s.replaceAll("_", " ")).replaceAll(/=([0-9a-fA-F]{2})/g, function(t1, e) {
                        return String.fromCharCode(parseInt(e, 16));
                    }));
                    try {
                        s = atob(s);
                    } catch  {}
                    return n(e, s);
                });
            }
            return "";
        }(e);
        if (t1.includes("%")) try {
            t1 = decodeURIComponent(t1);
        } catch  {}
        if (jt(t1)) return t1;
    }
    return null;
}
function _s(t1, e) {
    return new yt(`Unexpected server response (${t1}) while retrieving PDF "${e}".`, t1, 404 === t1 || 0 === t1 && e.startsWith("file:"));
}
function Ss(t1) {
    return 200 === t1 || 206 === t1;
}
function Es(t1, e, i) {
    return {
        method: "GET",
        headers: t1,
        signal: i.signal,
        mode: "cors",
        credentials: e ? "include" : "same-origin",
        redirect: "follow"
    };
}
function Cs(t1) {
    return t1 instanceof Uint8Array ? t1.buffer : t1 instanceof ArrayBuffer ? t1 : (ht(`getArrayBuffer - unexpected data format: ${t1}`), new Uint8Array(t1).buffer);
}
class Ts {
    _responseOrigin = null;
    constructor(t1){
        this.source = t1, this.isHttp = /^https?:/i.test(t1.url), this.headers = ys(this.isHttp, t1.httpHeaders), this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    get _progressiveDataLength() {
        return this._fullRequestReader?._loaded ?? 0;
    }
    getFullReader() {
        return dt(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new Ms(this), this._fullRequestReader;
    }
    getRangeReader(t1, e) {
        if (e <= this._progressiveDataLength) return null;
        const i = new Ds(this, t1, e);
        return this._rangeRequestReaders.push(i), i;
    }
    cancelAllRequests(t1) {
        this._fullRequestReader?.cancel(t1);
        for (const e of this._rangeRequestReaders.slice(0))e.cancel(t1);
    }
}
class Ms {
    constructor(t1){
        this._stream = t1, this._reader = null, this._loaded = 0, this._filename = null;
        const e = t1.source;
        this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._abortController = new AbortController, this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange;
        const i = new Headers(t1.headers), s = e.url;
        fetch(s, Es(i, this._withCredentials, this._abortController)).then((e)=>{
            if (t1._responseOrigin = ws(e.url), !Ss(e.status)) throw _s(e.status, s);
            this._reader = e.body.getReader(), this._headersCapability.resolve();
            const i = e.headers, { allowRangeRequests: n, suggestedLength: r } = xs({
                responseHeaders: i,
                isHttp: t1.isHttp,
                rangeChunkSize: this._rangeChunkSize,
                disableRange: this._disableRange
            });
            this._isRangeSupported = n, this._contentLength = r || this._contentLength, this._filename = As(i), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new xt("Streaming is disabled."));
        }).catch(this._headersCapability.reject), this.onProgress = null;
    }
    get headersReady() {
        return this._headersCapability.promise;
    }
    get filename() {
        return this._filename;
    }
    get contentLength() {
        return this._contentLength;
    }
    get isRangeSupported() {
        return this._isRangeSupported;
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    async read() {
        await this._headersCapability.promise;
        const { value: t1, done: e } = await this._reader.read();
        return e ? {
            value: t1,
            done: e
        } : (this._loaded += t1.byteLength, this.onProgress?.({
            loaded: this._loaded,
            total: this._contentLength
        }), {
            value: Cs(t1),
            done: !1
        });
    }
    cancel(t1) {
        this._reader?.cancel(t1), this._abortController.abort();
    }
}
class Ds {
    constructor(t1, e, i){
        this._stream = t1, this._reader = null, this._loaded = 0;
        const s = t1.source;
        this._withCredentials = s.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !s.disableStream, this._abortController = new AbortController;
        const n = new Headers(t1.headers);
        n.append("Range", `bytes=${e}-${i - 1}`);
        const r = s.url;
        fetch(r, Es(n, this._withCredentials, this._abortController)).then((e)=>{
            const i = ws(e.url);
            if (i !== t1._responseOrigin) throw new Error(`Expected range response-origin "${i}" to match "${t1._responseOrigin}".`);
            if (!Ss(e.status)) throw _s(e.status, r);
            this._readCapability.resolve(), this._reader = e.body.getReader();
        }).catch(this._readCapability.reject), this.onProgress = null;
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    async read() {
        await this._readCapability.promise;
        const { value: t1, done: e } = await this._reader.read();
        return e ? {
            value: t1,
            done: e
        } : (this._loaded += t1.byteLength, this.onProgress?.({
            loaded: this._loaded
        }), {
            value: Cs(t1),
            done: !1
        });
    }
    cancel(t1) {
        this._reader?.cancel(t1), this._abortController.abort();
    }
}
class Ps {
    _responseOrigin = null;
    constructor({ url: t1, httpHeaders: e, withCredentials: i }){
        this.url = t1, this.isHttp = /^https?:/i.test(t1), this.headers = ys(this.isHttp, e), this.withCredentials = i || !1, this.currXhrId = 0, this.pendingRequests = Object.create(null);
    }
    request(t1) {
        const e = new XMLHttpRequest, i = this.currXhrId++, s = this.pendingRequests[i] = {
            xhr: e
        };
        e.open("GET", this.url), e.withCredentials = this.withCredentials;
        for (const [n, r] of this.headers)e.setRequestHeader(n, r);
        return this.isHttp && "begin" in t1 && "end" in t1 ? (e.setRequestHeader("Range", `bytes=${t1.begin}-${t1.end - 1}`), s.expectedStatus = 206) : s.expectedStatus = 200, e.responseType = "arraybuffer", dt(t1.onError, "Expected `onError` callback to be provided."), e.onerror = ()=>{
            t1.onError(e.status);
        }, e.onreadystatechange = this.onStateChange.bind(this, i), e.onprogress = this.onProgress.bind(this, i), s.onHeadersReceived = t1.onHeadersReceived, s.onDone = t1.onDone, s.onError = t1.onError, s.onProgress = t1.onProgress, e.send(null), i;
    }
    onProgress(t1, e) {
        const i = this.pendingRequests[t1];
        i && i.onProgress?.(e);
    }
    onStateChange(t1, e) {
        const i = this.pendingRequests[t1];
        if (!i) return;
        const s = i.xhr;
        if (s.readyState >= 2 && i.onHeadersReceived && (i.onHeadersReceived(), delete i.onHeadersReceived), 4 !== s.readyState) return;
        if (!(t1 in this.pendingRequests)) return;
        if (delete this.pendingRequests[t1], 0 === s.status && this.isHttp) return void i.onError(s.status);
        const n = s.status || 200;
        if (!(200 === n && 206 === i.expectedStatus) && n !== i.expectedStatus) return void i.onError(s.status);
        const r = function(t1) {
            const e = t1.response;
            return "string" != typeof e ? e : _t(e).buffer;
        }(s);
        if (206 === n) {
            const t1 = s.getResponseHeader("Content-Range"), e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t1);
            e ? i.onDone({
                begin: parseInt(e[1], 10),
                chunk: r
            }) : (ht('Missing or invalid "Content-Range" header.'), i.onError(0));
        } else r ? i.onDone({
            begin: 0,
            chunk: r
        }) : i.onError(s.status);
    }
    getRequestXhr(t1) {
        return this.pendingRequests[t1].xhr;
    }
    isPendingRequest(t1) {
        return t1 in this.pendingRequests;
    }
    abortRequest(t1) {
        const e = this.pendingRequests[t1].xhr;
        delete this.pendingRequests[t1], e.abort();
    }
}
class ks {
    constructor(t1){
        this._source = t1, this._manager = new Ps(t1), this._rangeChunkSize = t1.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    _onRangeRequestReaderClosed(t1) {
        const e = this._rangeRequestReaders.indexOf(t1);
        e >= 0 && this._rangeRequestReaders.splice(e, 1);
    }
    getFullReader() {
        return dt(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Is(this._manager, this._source), this._fullRequestReader;
    }
    getRangeReader(t1, e) {
        const i = new Rs(this._manager, t1, e);
        return i.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(i), i;
    }
    cancelAllRequests(t1) {
        this._fullRequestReader?.cancel(t1);
        for (const e of this._rangeRequestReaders.slice(0))e.cancel(t1);
    }
}
class Is {
    constructor(t1, e){
        this._manager = t1, this._url = e.url, this._fullRequestId = t1.request({
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
        }), this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
    }
    _onHeadersReceived() {
        const t1 = this._fullRequestId, e = this._manager.getRequestXhr(t1);
        this._manager._responseOrigin = ws(e.responseURL);
        const i = e.getAllResponseHeaders(), s = new Headers(i ? i.trimStart().replace(/[^\S ]+$/, "").split(/[\r\n]+/).map((t1)=>{
            const [e, ...i] = t1.split(": ");
            return [
                e,
                i.join(": ")
            ];
        }) : []), { allowRangeRequests: n, suggestedLength: r } = xs({
            responseHeaders: s,
            isHttp: this._manager.isHttp,
            rangeChunkSize: this._rangeChunkSize,
            disableRange: this._disableRange
        });
        n && (this._isRangeSupported = !0), this._contentLength = r || this._contentLength, this._filename = As(s), this._isRangeSupported && this._manager.abortRequest(t1), this._headersCapability.resolve();
    }
    _onDone(t1) {
        if (t1) if (this._requests.length > 0) {
            this._requests.shift().resolve({
                value: t1.chunk,
                done: !1
            });
        } else this._cachedChunks.push(t1.chunk);
        if (this._done = !0, !(this._cachedChunks.length > 0)) {
            for (const t1 of this._requests)t1.resolve({
                value: void 0,
                done: !0
            });
            this._requests.length = 0;
        }
    }
    _onError(t1) {
        this._storedError = _s(t1, this._url), this._headersCapability.reject(this._storedError);
        for (const e of this._requests)e.reject(this._storedError);
        this._requests.length = 0, this._cachedChunks.length = 0;
    }
    _onProgress(t1) {
        this.onProgress?.({
            loaded: t1.loaded,
            total: t1.lengthComputable ? t1.total : this._contentLength
        });
    }
    get filename() {
        return this._filename;
    }
    get isRangeSupported() {
        return this._isRangeSupported;
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    get contentLength() {
        return this._contentLength;
    }
    get headersReady() {
        return this._headersCapability.promise;
    }
    async read() {
        if (await this._headersCapability.promise, this._storedError) throw this._storedError;
        if (this._cachedChunks.length > 0) {
            return {
                value: this._cachedChunks.shift(),
                done: !1
            };
        }
        if (this._done) return {
            value: void 0,
            done: !0
        };
        const t1 = Promise.withResolvers();
        return this._requests.push(t1), t1.promise;
    }
    cancel(t1) {
        this._done = !0, this._headersCapability.reject(t1);
        for (const e of this._requests)e.resolve({
            value: void 0,
            done: !0
        });
        this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
    }
}
class Rs {
    constructor(t1, e, i){
        this._manager = t1, this._url = t1.url, this._requestId = t1.request({
            begin: e,
            end: i,
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
        }), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
    }
    _onHeadersReceived() {
        const t1 = ws(this._manager.getRequestXhr(this._requestId)?.responseURL);
        t1 !== this._manager._responseOrigin && (this._storedError = new Error(`Expected range response-origin "${t1}" to match "${this._manager._responseOrigin}".`), this._onError(0));
    }
    _close() {
        this.onClosed?.(this);
    }
    _onDone(t1) {
        const e = t1.chunk;
        if (this._requests.length > 0) {
            this._requests.shift().resolve({
                value: e,
                done: !1
            });
        } else this._queuedChunk = e;
        this._done = !0;
        for (const i of this._requests)i.resolve({
            value: void 0,
            done: !0
        });
        this._requests.length = 0, this._close();
    }
    _onError(t1) {
        this._storedError ??= _s(t1, this._url);
        for (const e of this._requests)e.reject(this._storedError);
        this._requests.length = 0, this._queuedChunk = null;
    }
    _onProgress(t1) {
        this.isStreamingSupported || this.onProgress?.({
            loaded: t1.loaded
        });
    }
    get isStreamingSupported() {
        return !1;
    }
    async read() {
        if (this._storedError) throw this._storedError;
        if (null !== this._queuedChunk) {
            const t1 = this._queuedChunk;
            return this._queuedChunk = null, {
                value: t1,
                done: !1
            };
        }
        if (this._done) return {
            value: void 0,
            done: !0
        };
        const t1 = Promise.withResolvers();
        return this._requests.push(t1), t1.promise;
    }
    cancel(t1) {
        this._done = !0;
        for (const e of this._requests)e.resolve({
            value: void 0,
            done: !0
        });
        this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
    }
}
const Ls = /^[a-z][a-z0-9\-+.]+:/i;
class Bs {
    constructor(t1){
        this.source = t1, this.url = function(t1) {
            if (Ls.test(t1)) return new URL(t1);
            const e = process.getBuiltinModule("url");
            return new URL(e.pathToFileURL(t1));
        }(t1.url), dt("file:" === this.url.protocol, "PDFNodeStream only supports file:// URLs."), this._fullRequestReader = null, this._rangeRequestReaders = [];
    }
    get _progressiveDataLength() {
        return this._fullRequestReader?._loaded ?? 0;
    }
    getFullReader() {
        return dt(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = new Fs(this), this._fullRequestReader;
    }
    getRangeReader(t1, e) {
        if (e <= this._progressiveDataLength) return null;
        const i = new Os(this, t1, e);
        return this._rangeRequestReaders.push(i), i;
    }
    cancelAllRequests(t1) {
        this._fullRequestReader?.cancel(t1);
        for (const e of this._rangeRequestReaders.slice(0))e.cancel(t1);
    }
}
class Fs {
    constructor(t1){
        this._url = t1.url, this._done = !1, this._storedError = null, this.onProgress = null;
        const e = t1.source;
        this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
        const i = process.getBuiltinModule("fs");
        i.promises.lstat(this._url).then((t1)=>{
            this._contentLength = t1.size, this._setReadableStream(i.createReadStream(this._url)), this._headersCapability.resolve();
        }, (t1)=>{
            "ENOENT" === t1.code && (t1 = _s(0, this._url.href)), this._storedError = t1, this._headersCapability.reject(t1);
        });
    }
    get headersReady() {
        return this._headersCapability.promise;
    }
    get filename() {
        return this._filename;
    }
    get contentLength() {
        return this._contentLength;
    }
    get isRangeSupported() {
        return this._isRangeSupported;
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    async read() {
        if (await this._readCapability.promise, this._done) return {
            value: void 0,
            done: !0
        };
        if (this._storedError) throw this._storedError;
        const t1 = this._readableStream.read();
        if (null === t1) return this._readCapability = Promise.withResolvers(), this.read();
        this._loaded += t1.length, this.onProgress?.({
            loaded: this._loaded,
            total: this._contentLength
        });
        return {
            value: new Uint8Array(t1).buffer,
            done: !1
        };
    }
    cancel(t1) {
        this._readableStream ? this._readableStream.destroy(t1) : this._error(t1);
    }
    _error(t1) {
        this._storedError = t1, this._readCapability.resolve();
    }
    _setReadableStream(t1) {
        this._readableStream = t1, t1.on("readable", ()=>{
            this._readCapability.resolve();
        }), t1.on("end", ()=>{
            t1.destroy(), this._done = !0, this._readCapability.resolve();
        }), t1.on("error", (t1)=>{
            this._error(t1);
        }), !this._isStreamingSupported && this._isRangeSupported && this._error(new xt("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
    }
}
class Os {
    constructor(t1, e, i){
        this._url = t1.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
        const s = t1.source;
        this._isStreamingSupported = !s.disableStream;
        const n = process.getBuiltinModule("fs");
        this._setReadableStream(n.createReadStream(this._url, {
            start: e,
            end: i - 1
        }));
    }
    get isStreamingSupported() {
        return this._isStreamingSupported;
    }
    async read() {
        if (await this._readCapability.promise, this._done) return {
            value: void 0,
            done: !0
        };
        if (this._storedError) throw this._storedError;
        const t1 = this._readableStream.read();
        if (null === t1) return this._readCapability = Promise.withResolvers(), this.read();
        this._loaded += t1.length, this.onProgress?.({
            loaded: this._loaded
        });
        return {
            value: new Uint8Array(t1).buffer,
            done: !1
        };
    }
    cancel(t1) {
        this._readableStream ? this._readableStream.destroy(t1) : this._error(t1);
    }
    _error(t1) {
        this._storedError = t1, this._readCapability.resolve();
    }
    _setReadableStream(t1) {
        this._readableStream = t1, t1.on("readable", ()=>{
            this._readCapability.resolve();
        }), t1.on("end", ()=>{
            t1.destroy(), this._done = !0, this._readCapability.resolve();
        }), t1.on("error", (t1)=>{
            this._error(t1);
        }), this._storedError && this._readableStream.destroy(this._storedError);
    }
}
const Ns = Symbol("INITIAL_DATA");
class Us {
    #Ws = Object.create(null);
    #qs(t1) {
        return this.#Ws[t1] ||= {
            ...Promise.withResolvers(),
            data: Ns
        };
    }
    get(t1, e = null) {
        if (e) {
            const i = this.#qs(t1);
            return i.promise.then(()=>e(i.data)), null;
        }
        const i = this.#Ws[t1];
        if (!i || i.data === Ns) throw new Error(`Requesting object that isn't resolved yet ${t1}.`);
        return i.data;
    }
    has(t1) {
        const e = this.#Ws[t1];
        return !!e && e.data !== Ns;
    }
    delete(t1) {
        const e = this.#Ws[t1];
        return !(!e || e.data === Ns) && (delete this.#Ws[t1], !0);
    }
    resolve(t1, e = null) {
        const i = this.#qs(t1);
        i.data = e, i.resolve();
    }
    clear() {
        for(const t1 in this.#Ws){
            const { data: e } = this.#Ws[t1];
            e?.bitmap?.close();
        }
        this.#Ws = Object.create(null);
    }
    *[Symbol.iterator]() {
        for(const t1 in this.#Ws){
            const { data: e } = this.#Ws[t1];
            e !== Ns && (yield [
                t1,
                e
            ]);
        }
    }
}
class zs {
    #Xs = Promise.withResolvers();
    #xt = null;
    #Ys = !1;
    #Ks = !!globalThis.FontInspector?.enabled;
    #Qs = null;
    #Js = null;
    #Zs = 0;
    #tn = 0;
    #en = null;
    #in = null;
    #sn = 0;
    #nn = 0;
    #rn = Object.create(null);
    #an = [];
    #on = null;
    #ln = [];
    #hn = new WeakMap;
    #cn = null;
    static #dn = new Map;
    static #un = new Map;
    static #pn = new WeakMap;
    static #gn = null;
    static #mn = new Set;
    constructor({ textContentSource: t1, container: e, viewport: i }){
        if (t1 instanceof ReadableStream) this.#on = t1;
        else {
            if ("object" != typeof t1) throw new Error('No "textContentSource" parameter specified.');
            this.#on = new ReadableStream({
                start (e) {
                    e.enqueue(t1), e.close();
                }
            });
        }
        this.#xt = this.#in = e, this.#nn = i.scale * ee.pixelRatio, this.#sn = i.rotation, this.#Js = {
            div: null,
            properties: null,
            ctx: null
        };
        const { pageWidth: s, pageHeight: n, pageX: r, pageY: a } = i.rawDims;
        this.#cn = [
            1,
            0,
            0,
            -1,
            -r,
            a + n
        ], this.#tn = s, this.#Zs = n, zs.#fn(), te(e, i), this.#Xs.promise.finally(()=>{
            zs.#mn.delete(this), this.#Js = null, this.#rn = null;
        }).catch(()=>{});
    }
    static get fontFamilyMap() {
        const { isWindows: t1, isFirefox: e } = St.platform;
        return gt(this, "fontFamilyMap", new Map([
            [
                "sans-serif",
                (t1 && e ? "Calibri, " : "") + "sans-serif"
            ],
            [
                "monospace",
                (t1 && e ? "Lucida Console, " : "") + "monospace"
            ]
        ]));
    }
    render() {
        const t1 = ()=>{
            this.#en.read().then(({ value: e, done: i })=>{
                i ? this.#Xs.resolve() : (this.#Qs ??= e.lang, Object.assign(this.#rn, e.styles), this.#bn(e.items), t1());
            }, this.#Xs.reject);
        };
        return this.#en = this.#on.getReader(), zs.#mn.add(this), t1(), this.#Xs.promise;
    }
    update({ viewport: t1, onBefore: e = null }) {
        const i = t1.scale * ee.pixelRatio, s = t1.rotation;
        if (s !== this.#sn && (e?.(), this.#sn = s, te(this.#in, {
            rotation: s
        })), i !== this.#nn) {
            e?.(), this.#nn = i;
            const t1 = {
                div: null,
                properties: null,
                ctx: zs.#vn(this.#Qs)
            };
            for (const e of this.#ln)t1.properties = this.#hn.get(e), t1.div = e, this.#yn(t1);
        }
    }
    cancel() {
        const t1 = new xt("TextLayer task cancelled.");
        this.#en?.cancel(t1).catch(()=>{}), this.#en = null, this.#Xs.reject(t1);
    }
    get textDivs() {
        return this.#ln;
    }
    get textContentItemsStr() {
        return this.#an;
    }
    #bn(t1) {
        if (this.#Ys) return;
        this.#Js.ctx ??= zs.#vn(this.#Qs);
        const e = this.#ln, i = this.#an;
        for (const s of t1){
            if (e.length > 1e5) return ht("Ignoring additional textDivs for performance reasons."), void (this.#Ys = !0);
            if (void 0 !== s.str) i.push(s.str), this.#wn(s);
            else if ("beginMarkedContentProps" === s.type || "beginMarkedContent" === s.type) {
                const t1 = this.#xt;
                this.#xt = document.createElement("span"), this.#xt.classList.add("markedContent"), s.id && this.#xt.setAttribute("id", `${s.id}`), t1.append(this.#xt);
            } else "endMarkedContent" === s.type && (this.#xt = this.#xt.parentNode);
        }
    }
    #wn(t1) {
        const e = document.createElement("span"), i = {
            angle: 0,
            canvasWidth: 0,
            hasText: "" !== t1.str,
            hasEOL: t1.hasEOL,
            fontSize: 0
        };
        this.#ln.push(e);
        const s = Ct.transform(this.#cn, t1.transform);
        let n = Math.atan2(s[1], s[0]);
        const r = this.#rn[t1.fontName];
        r.vertical && (n += Math.PI / 2);
        let a = this.#Ks && r.fontSubstitution || r.fontFamily;
        a = zs.fontFamilyMap.get(a) || a;
        const o = Math.hypot(s[2], s[3]), l = o * zs.#xn(a, r, this.#Qs);
        let h, c;
        0 === n ? (h = s[4], c = s[5] - l) : (h = s[4] + l * Math.sin(n), c = s[5] - l * Math.cos(n));
        const d = "calc(var(--total-scale-factor) *", u = e.style;
        this.#xt === this.#in ? (u.left = `${(100 * h / this.#tn).toFixed(2)}%`, u.top = `${(100 * c / this.#Zs).toFixed(2)}%`) : (u.left = `${d}${h.toFixed(2)}px)`, u.top = `${d}${c.toFixed(2)}px)`), u.fontSize = `${d}${(zs.#gn * o).toFixed(2)}px)`, u.fontFamily = a, i.fontSize = o, e.setAttribute("role", "presentation"), e.textContent = t1.str, e.dir = t1.dir, this.#Ks && (e.dataset.fontName = r.fontSubstitutionLoadedName || t1.fontName), 0 !== n && (i.angle = n * (180 / Math.PI));
        let p = !1;
        if (t1.str.length > 1) p = !0;
        else if (" " !== t1.str && t1.transform[0] !== t1.transform[3]) {
            const e = Math.abs(t1.transform[0]), i = Math.abs(t1.transform[3]);
            e !== i && Math.max(e, i) / Math.min(e, i) > 1.5 && (p = !0);
        }
        if (p && (i.canvasWidth = r.vertical ? t1.height : t1.width), this.#hn.set(e, i), this.#Js.div = e, this.#Js.properties = i, this.#yn(this.#Js), i.hasText && this.#xt.append(e), i.hasEOL) {
            const t1 = document.createElement("br");
            t1.setAttribute("role", "presentation"), this.#xt.append(t1);
        }
    }
    #yn(t1) {
        const { div: e, properties: i, ctx: s } = t1, { style: n } = e;
        let r = "";
        if (zs.#gn > 1 && (r = `scale(${1 / zs.#gn})`), 0 !== i.canvasWidth && i.hasText) {
            const { fontFamily: t1 } = n, { canvasWidth: a, fontSize: o } = i;
            zs.#An(s, o * this.#nn, t1);
            const { width: l } = s.measureText(e.textContent);
            l > 0 && (r = `scaleX(${a * this.#nn / l}) ${r}`);
        }
        0 !== i.angle && (r = `rotate(${i.angle}deg) ${r}`), r.length > 0 && (n.transform = r);
    }
    static cleanup() {
        if (!(this.#mn.size > 0)) {
            this.#dn.clear();
            for (const { canvas: t1 } of this.#un.values())t1.remove();
            this.#un.clear();
        }
    }
    static #vn(t1 = null) {
        let e = this.#un.get(t1 ||= "");
        if (!e) {
            const i = document.createElement("canvas");
            i.className = "hiddenCanvasElement", i.lang = t1, document.body.append(i), e = i.getContext("2d", {
                alpha: !1,
                willReadFrequently: !0
            }), this.#un.set(t1, e), this.#pn.set(e, {
                size: 0,
                family: ""
            });
        }
        return e;
    }
    static #An(t1, e, i) {
        const s = this.#pn.get(t1);
        e === s.size && i === s.family || (t1.font = `${e}px ${i}`, s.size = e, s.family = i);
    }
    static #fn() {
        if (null !== this.#gn) return;
        const t1 = document.createElement("div");
        t1.style.opacity = 0, t1.style.lineHeight = 1, t1.style.fontSize = "1px", t1.style.position = "absolute", t1.textContent = "X", document.body.append(t1), this.#gn = t1.getBoundingClientRect().height, t1.remove();
    }
    static #xn(t1, e, i) {
        const s = this.#dn.get(t1);
        if (s) return s;
        const n = this.#vn(i);
        n.canvas.width = n.canvas.height = 30, this.#An(n, 30, t1);
        const r = n.measureText(""), a = r.fontBoundingBoxAscent, o = Math.abs(r.fontBoundingBoxDescent);
        n.canvas.width = n.canvas.height = 0;
        let l = .8;
        return a ? l = a / (a + o) : (St.platform.isFirefox && ht("Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering."), e.ascent ? l = e.ascent : e.descent && (l = 1 + e.descent)), this.#dn.set(t1, l), l;
    }
}
function Hs(t1 = {}) {
    "string" == typeof t1 || t1 instanceof URL ? t1 = {
        url: t1
    } : (t1 instanceof ArrayBuffer || ArrayBuffer.isView(t1)) && (t1 = {
        data: t1
    });
    const e = new js, { docId: i } = e, s = t1.url ? function(t1) {
        if (t1 instanceof URL) return t1.href;
        if ("string" == typeof t1) {
            if (S) return t1;
            const e = URL.parse(t1, window.location);
            if (e) return e.href;
        }
        throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
    }(t1.url) : null, n = t1.data ? function(t1) {
        if (S && "undefined" != typeof Buffer && t1 instanceof Buffer) throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
        if (t1 instanceof Uint8Array && t1.byteLength === t1.buffer.byteLength) return t1;
        if ("string" == typeof t1) return _t(t1);
        if (t1 instanceof ArrayBuffer || ArrayBuffer.isView(t1) || "object" == typeof t1 && !isNaN(t1?.length)) return new Uint8Array(t1);
        throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
    }(t1.data) : null, r = t1.httpHeaders || null, a = !0 === t1.withCredentials, o = t1.password ?? null, l = t1.range instanceof $s ? t1.range : null, h = Number.isInteger(t1.rangeChunkSize) && t1.rangeChunkSize > 0 ? t1.rangeChunkSize : 65536;
    let c = t1.worker instanceof qs ? t1.worker : null;
    const d = t1.verbosity, u = "string" != typeof t1.docBaseUrl || Ht(t1.docBaseUrl) ? null : t1.docBaseUrl, p = Fe(t1.cMapUrl), g = !1 !== t1.cMapPacked, m = t1.CMapReaderFactory || (S ? ui : ii), f = Fe(t1.iccUrl), b = Fe(t1.standardFontDataUrl), v = t1.StandardFontDataFactory || (S ? pi : ai), y = Fe(t1.wasmUrl), w = t1.WasmFactory || (S ? gi : li), x = !0 !== t1.stopAtErrors, A = Number.isInteger(t1.maxImageSize) && t1.maxImageSize > -1 ? t1.maxImageSize : -1, _ = !1 !== t1.isEvalSupported, E = "boolean" == typeof t1.isOffscreenCanvasSupported ? t1.isOffscreenCanvasSupported : !S, C = "boolean" == typeof t1.isImageDecoderSupported ? t1.isImageDecoderSupported : !S && (St.platform.isFirefox || !globalThis.chrome), T = Number.isInteger(t1.canvasMaxAreaInBytes) ? t1.canvasMaxAreaInBytes : -1, M = "boolean" == typeof t1.disableFontFace ? t1.disableFontFace : S, D = !0 === t1.fontExtraProperties, P = !0 === t1.enableXfa, k = t1.ownerDocument || globalThis.document, I = !0 === t1.disableRange, R = !0 === t1.disableStream, L = !0 === t1.disableAutoFetch, B = !0 === t1.pdfBug, F = t1.CanvasFactory || (S ? di : ti), O = t1.FilterFactory || (S ? ci : ni), N = !0 === t1.enableHWA, U = !1 !== t1.useWasm, z = l ? l.length : t1.length ?? NaN, H = "boolean" == typeof t1.useSystemFonts ? t1.useSystemFonts : !S && !M, j = "boolean" == typeof t1.useWorkerFetch ? t1.useWorkerFetch : !!(m === ii && v === ai && w === li && p && b && y && Wt(p, document.baseURI) && Wt(b, document.baseURI) && Wt(y, document.baseURI));
    var $;
    $ = d, Number.isInteger($) && (at = $);
    const V = {
        canvasFactory: new F({
            ownerDocument: k,
            enableHWA: N
        }),
        filterFactory: new O({
            docId: i,
            ownerDocument: k
        }),
        cMapReaderFactory: j ? null : new m({
            baseUrl: p,
            isCompressed: g
        }),
        standardFontDataFactory: j ? null : new v({
            baseUrl: b
        }),
        wasmFactory: j ? null : new w({
            baseUrl: y
        })
    };
    c || (c = qs.create({
        verbosity: d,
        port: ds.workerPort
    }), e._worker = c);
    const G = {
        docId: i,
        apiVersion: "5.4.296",
        data: n,
        password: o,
        disableAutoFetch: L,
        rangeChunkSize: h,
        length: z,
        docBaseUrl: u,
        enableXfa: P,
        evaluatorOptions: {
            maxImageSize: A,
            disableFontFace: M,
            ignoreErrors: x,
            isEvalSupported: _,
            isOffscreenCanvasSupported: E,
            isImageDecoderSupported: C,
            canvasMaxAreaInBytes: T,
            fontExtraProperties: D,
            useSystemFonts: H,
            useWasm: U,
            useWorkerFetch: j,
            cMapUrl: p,
            iccUrl: f,
            standardFontDataUrl: b,
            wasmUrl: y
        }
    }, W = {
        ownerDocument: k,
        pdfBug: B,
        styleElement: null,
        loadingParams: {
            disableAutoFetch: L,
            enableXfa: P
        }
    };
    return c.promise.then(function() {
        if (e.destroyed) throw new Error("Loading aborted");
        if (c.destroyed) throw new Error("Worker was destroyed");
        const t1 = c.messageHandler.sendWithPromise("GetDocRequest", G, n ? [
            n.buffer
        ] : null);
        let o;
        if (l) o = new fs(l, {
            disableRange: I,
            disableStream: R
        });
        else if (!n) {
            if (!s) throw new Error("getDocument - no `url` parameter provided.");
            const t1 = Wt(s) ? Ts : S ? Bs : ks;
            o = new t1({
                url: s,
                length: z,
                httpHeaders: r,
                withCredentials: a,
                rangeChunkSize: h,
                disableRange: I,
                disableStream: R
            });
        }
        return t1.then((t1)=>{
            if (e.destroyed) throw new Error("Loading aborted");
            if (c.destroyed) throw new Error("Worker was destroyed");
            const s = new Je(i, t1, c.port), n = new Xs(s, e, o, W, V, N);
            e._transport = n, s.send("Ready", null);
        });
    }).catch(e._capability.reject), e;
}
class js {
    static #Bi = 0;
    _capability = Promise.withResolvers();
    _transport = null;
    _worker = null;
    docId = "d" + js.#Bi++;
    destroyed = !1;
    onPassword = null;
    onProgress = null;
    get promise() {
        return this._capability.promise;
    }
    async destroy() {
        this.destroyed = !0;
        try {
            this._worker?.port && (this._worker._pendingDestroy = !0), await this._transport?.destroy();
        } catch (Ir) {
            throw this._worker?.port && delete this._worker._pendingDestroy, Ir;
        }
        this._transport = null, this._worker?.destroy(), this._worker = null;
    }
    async getData() {
        return this._transport.getData();
    }
}
class $s {
    #Xs = Promise.withResolvers();
    #_n = [];
    #Sn = [];
    #En = [];
    #Cn = [];
    constructor(t1, e, i = !1, s = null){
        this.length = t1, this.initialData = e, this.progressiveDone = i, this.contentDispositionFilename = s;
    }
    addRangeListener(t1) {
        this.#Cn.push(t1);
    }
    addProgressListener(t1) {
        this.#En.push(t1);
    }
    addProgressiveReadListener(t1) {
        this.#Sn.push(t1);
    }
    addProgressiveDoneListener(t1) {
        this.#_n.push(t1);
    }
    onDataRange(t1, e) {
        for (const i of this.#Cn)i(t1, e);
    }
    onDataProgress(t1, e) {
        this.#Xs.promise.then(()=>{
            for (const i of this.#En)i(t1, e);
        });
    }
    onDataProgressiveRead(t1) {
        this.#Xs.promise.then(()=>{
            for (const e of this.#Sn)e(t1);
        });
    }
    onDataProgressiveDone() {
        this.#Xs.promise.then(()=>{
            for (const t1 of this.#_n)t1();
        });
    }
    transportReady() {
        this.#Xs.resolve();
    }
    requestDataRange(t1, e) {
        ct("Abstract method PDFDataRangeTransport.requestDataRange");
    }
    abort() {}
}
class Vs {
    constructor(t1, e){
        this._pdfInfo = t1, this._transport = e;
    }
    get annotationStorage() {
        return this._transport.annotationStorage;
    }
    get canvasFactory() {
        return this._transport.canvasFactory;
    }
    get filterFactory() {
        return this._transport.filterFactory;
    }
    get numPages() {
        return this._pdfInfo.numPages;
    }
    get fingerprints() {
        return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
        return gt(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
        return this._transport._htmlForXfa;
    }
    getPage(t1) {
        return this._transport.getPage(t1);
    }
    getPageIndex(t1) {
        return this._transport.getPageIndex(t1);
    }
    getDestinations() {
        return this._transport.getDestinations();
    }
    getDestination(t1) {
        return this._transport.getDestination(t1);
    }
    getPageLabels() {
        return this._transport.getPageLabels();
    }
    getPageLayout() {
        return this._transport.getPageLayout();
    }
    getPageMode() {
        return this._transport.getPageMode();
    }
    getViewerPreferences() {
        return this._transport.getViewerPreferences();
    }
    getOpenAction() {
        return this._transport.getOpenAction();
    }
    getAttachments() {
        return this._transport.getAttachments();
    }
    getAnnotationsByType(t1, e) {
        return this._transport.getAnnotationsByType(t1, e);
    }
    getJSActions() {
        return this._transport.getDocJSActions();
    }
    getOutline() {
        return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent: t1 = "display" } = {}) {
        const { renderingIntent: e } = this._transport.getRenderingIntent(t1);
        return this._transport.getOptionalContentConfig(e);
    }
    getPermissions() {
        return this._transport.getPermissions();
    }
    getMetadata() {
        return this._transport.getMetadata();
    }
    getMarkInfo() {
        return this._transport.getMarkInfo();
    }
    getData() {
        return this._transport.getData();
    }
    saveDocument() {
        return this._transport.saveDocument();
    }
    getDownloadInfo() {
        return this._transport.downloadInfoCapability.promise;
    }
    cleanup(t1 = !1) {
        return this._transport.startCleanup(t1 || this.isPureXfa);
    }
    destroy() {
        return this.loadingTask.destroy();
    }
    cachedPageNumber(t1) {
        return this._transport.cachedPageNumber(t1);
    }
    get loadingParams() {
        return this._transport.loadingParams;
    }
    get loadingTask() {
        return this._transport.loadingTask;
    }
    getFieldObjects() {
        return this._transport.getFieldObjects();
    }
    hasJSActions() {
        return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
        return this._transport.getCalculationOrderIds();
    }
}
class Gs {
    #Tn = !1;
    constructor(t1, e, i, s = !1){
        this._pageIndex = t1, this._pageInfo = e, this._transport = i, this._stats = s ? new Gt : null, this._pdfBug = s, this.commonObjs = i.commonObjs, this.objs = new Us, this._intentStates = new Map, this.destroyed = !1, this.recordedBBoxes = null;
    }
    get pageNumber() {
        return this._pageIndex + 1;
    }
    get rotate() {
        return this._pageInfo.rotate;
    }
    get ref() {
        return this._pageInfo.ref;
    }
    get userUnit() {
        return this._pageInfo.userUnit;
    }
    get view() {
        return this._pageInfo.view;
    }
    getViewport({ scale: t1, rotation: e = this.rotate, offsetX: i = 0, offsetY: s = 0, dontFlip: n = !1 } = {}) {
        return new Ut({
            viewBox: this.view,
            userUnit: this.userUnit,
            scale: t1,
            rotation: e,
            offsetX: i,
            offsetY: s,
            dontFlip: n
        });
    }
    getAnnotations({ intent: t1 = "display" } = {}) {
        const { renderingIntent: e } = this._transport.getRenderingIntent(t1);
        return this._transport.getAnnotations(this._pageIndex, e);
    }
    getJSActions() {
        return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
        return this._transport.filterFactory;
    }
    get isPureXfa() {
        return gt(this, "isPureXfa", !!this._transport._htmlForXfa);
    }
    async getXfa() {
        return this._transport._htmlForXfa?.children[this._pageIndex] || null;
    }
    render({ canvasContext: t1, canvas: e = t1.canvas, viewport: i, intent: s = "display", annotationMode: n = B.ENABLE, transform: r = null, background: a = null, optionalContentConfigPromise: o = null, annotationCanvasMap: l = null, pageColors: h = null, printAnnotationStorage: c = null, isEditing: d = !1, recordOperations: u = !1, operationsFilter: p = null }) {
        this._stats?.time("Overall");
        const g = this._transport.getRenderingIntent(s, n, c, d), { renderingIntent: m, cacheKey: f } = g;
        this.#Tn = !1, o ||= this._transport.getOptionalContentConfig(m);
        let b = this._intentStates.get(f);
        b || (b = Object.create(null), this._intentStates.set(f, b)), b.streamReaderCancelTimeout && (clearTimeout(b.streamReaderCancelTimeout), b.streamReaderCancelTimeout = null);
        const v = !!(m & D);
        b.displayReadyCapability || (b.displayReadyCapability = Promise.withResolvers(), b.operatorList = {
            fnArray: [],
            argsArray: [],
            lastChunk: !1,
            separateAnnots: null
        }, this._stats?.time("Page Request"), this._pumpOperatorList(g));
        const y = Boolean(this._pdfBug && globalThis.StepperManager?.enabled), w = !this.recordedBBoxes && (u || y), x = (t1)=>{
            if (b.renderTasks.delete(A), w) {
                const t1 = A.gfx?.dependencyTracker.take();
                t1 && (A.stepper && A.stepper.setOperatorBBoxes(t1, A.gfx.dependencyTracker.takeDebugMetadata()), u && (this.recordedBBoxes = t1));
            }
            v && (this.#Tn = !0), this.#Mn(), t1 ? (A.capability.reject(t1), this._abortOperatorList({
                intentState: b,
                reason: t1 instanceof Error ? t1 : new Error(t1)
            })) : A.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), globalThis.Stats?.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
        }, A = new Ks({
            callback: x,
            params: {
                canvas: e,
                canvasContext: t1,
                dependencyTracker: w ? new Ai(e, b.operatorList.length, y) : null,
                viewport: i,
                transform: r,
                background: a
            },
            objs: this.objs,
            commonObjs: this.commonObjs,
            annotationCanvasMap: l,
            operatorList: b.operatorList,
            pageIndex: this._pageIndex,
            canvasFactory: this._transport.canvasFactory,
            filterFactory: this._transport.filterFactory,
            useRequestAnimationFrame: !v,
            pdfBug: this._pdfBug,
            pageColors: h,
            enableHWA: this._transport.enableHWA,
            operationsFilter: p
        });
        (b.renderTasks ||= new Set).add(A);
        const _ = A.task;
        return Promise.all([
            b.displayReadyCapability.promise,
            o
        ]).then(([t1, e])=>{
            if (this.destroyed) x();
            else {
                if (this._stats?.time("Rendering"), !(e.renderingIntent & m)) throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
                A.initializeGraphics({
                    transparency: t1,
                    optionalContentConfig: e
                }), A.operatorListChanged();
            }
        }).catch(x), _;
    }
    getOperatorList({ intent: t1 = "display", annotationMode: e = B.ENABLE, printAnnotationStorage: i = null, isEditing: s = !1 } = {}) {
        const n = this._transport.getRenderingIntent(t1, e, i, s, !0);
        let r, a = this._intentStates.get(n.cacheKey);
        return a || (a = Object.create(null), this._intentStates.set(n.cacheKey, a)), a.opListReadCapability || (r = Object.create(null), r.operatorListChanged = function() {
            a.operatorList.lastChunk && (a.opListReadCapability.resolve(a.operatorList), a.renderTasks.delete(r));
        }, a.opListReadCapability = Promise.withResolvers(), (a.renderTasks ||= new Set).add(r), a.operatorList = {
            fnArray: [],
            argsArray: [],
            lastChunk: !1,
            separateAnnots: null
        }, this._stats?.time("Page Request"), this._pumpOperatorList(n)), a.opListReadCapability.promise;
    }
    streamTextContent({ includeMarkedContent: t1 = !1, disableNormalization: e = !1 } = {}) {
        return this._transport.messageHandler.sendWithStream("GetTextContent", {
            pageIndex: this._pageIndex,
            includeMarkedContent: !0 === t1,
            disableNormalization: !0 === e
        }, {
            highWaterMark: 100,
            size: (t1)=>t1.items.length
        });
    }
    getTextContent(t1 = {}) {
        if (this._transport._htmlForXfa) return this.getXfa().then((t1)=>Lt.textContent(t1));
        const e = this.streamTextContent(t1);
        return new Promise(function(t1, i) {
            const s = e.getReader(), n = {
                items: [],
                styles: Object.create(null),
                lang: null
            };
            !function e() {
                s.read().then(function({ value: i, done: s }) {
                    s ? t1(n) : (n.lang ??= i.lang, Object.assign(n.styles, i.styles), n.items.push(...i.items), e());
                }, i);
            }();
        });
    }
    getStructTree() {
        return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
        this.destroyed = !0;
        const t1 = [];
        for (const e of this._intentStates.values())if (this._abortOperatorList({
            intentState: e,
            reason: new Error("Page was destroyed."),
            force: !0
        }), !e.opListReadCapability) for (const i of e.renderTasks)t1.push(i.completed), i.cancel();
        return this.objs.clear(), this.#Tn = !1, Promise.all(t1);
    }
    cleanup(t1 = !1) {
        this.#Tn = !0;
        const e = this.#Mn();
        return t1 && e && (this._stats &&= new Gt), e;
    }
    #Mn() {
        if (!this.#Tn || this.destroyed) return !1;
        for (const { renderTasks: t1, operatorList: e } of this._intentStates.values())if (t1.size > 0 || !e.lastChunk) return !1;
        return this._intentStates.clear(), this.objs.clear(), this.#Tn = !1, !0;
    }
    _startRenderPage(t1, e) {
        const i = this._intentStates.get(e);
        i && (this._stats?.timeEnd("Page Request"), i.displayReadyCapability?.resolve(t1));
    }
    _renderPageChunk(t1, e) {
        for(let i = 0, s = t1.length; i < s; i++)e.operatorList.fnArray.push(t1.fnArray[i]), e.operatorList.argsArray.push(t1.argsArray[i]);
        e.operatorList.lastChunk = t1.lastChunk, e.operatorList.separateAnnots = t1.separateAnnots;
        for (const i of e.renderTasks)i.operatorListChanged();
        t1.lastChunk && this.#Mn();
    }
    _pumpOperatorList({ renderingIntent: t1, cacheKey: e, annotationStorageSerializable: i, modifiedIds: s }) {
        const { map: n, transfer: r } = i, a = this._transport.messageHandler.sendWithStream("GetOperatorList", {
            pageIndex: this._pageIndex,
            intent: t1,
            cacheKey: e,
            annotationStorage: n,
            modifiedIds: s
        }, r).getReader(), o = this._intentStates.get(e);
        o.streamReader = a;
        const l = ()=>{
            a.read().then(({ value: t1, done: e })=>{
                e ? o.streamReader = null : this._transport.destroyed || (this._renderPageChunk(t1, o), l());
            }, (t1)=>{
                if (o.streamReader = null, !this._transport.destroyed) {
                    if (o.operatorList) {
                        o.operatorList.lastChunk = !0;
                        for (const t1 of o.renderTasks)t1.operatorListChanged();
                        this.#Mn();
                    }
                    if (o.displayReadyCapability) o.displayReadyCapability.reject(t1);
                    else {
                        if (!o.opListReadCapability) throw t1;
                        o.opListReadCapability.reject(t1);
                    }
                }
            });
        };
        l();
    }
    _abortOperatorList({ intentState: t1, reason: e, force: i = !1 }) {
        if (t1.streamReader) {
            if (t1.streamReaderCancelTimeout && (clearTimeout(t1.streamReaderCancelTimeout), t1.streamReaderCancelTimeout = null), !i) {
                if (t1.renderTasks.size > 0) return;
                if (e instanceof zt) {
                    let i = 100;
                    return e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay), void (t1.streamReaderCancelTimeout = setTimeout(()=>{
                        t1.streamReaderCancelTimeout = null, this._abortOperatorList({
                            intentState: t1,
                            reason: e,
                            force: !0
                        });
                    }, i));
                }
            }
            if (t1.streamReader.cancel(new xt(e.message)).catch(()=>{}), t1.streamReader = null, !this._transport.destroyed) {
                for (const [e, i] of this._intentStates)if (i === t1) {
                    this._intentStates.delete(e);
                    break;
                }
                this.cleanup();
            }
        }
    }
    get stats() {
        return this._stats;
    }
}
const Ws = class n {
    constructor({ name: r = null, port: l = null, verbosity: d = ot() } = {}){
        if (b(this, o), b(this, t1, Promise.withResolvers()), b(this, e, null), b(this, i, null), b(this, s, null), this.name = r, this.destroyed = !1, this.verbosity = d, l) {
            if (f(n, a).has(l)) throw new Error("Cannot use more than one PDFWorker per port.");
            f(n, a).set(l, this), y(this, o, h).call(this, l);
        } else y(this, o, c).call(this);
    }
    get promise() {
        return f(this, t1).promise;
    }
    get port() {
        return f(this, i);
    }
    get messageHandler() {
        return f(this, e);
    }
    destroy() {
        this.destroyed = !0, f(this, s)?.terminate(), v(this, s, null), f(n, a).delete(f(this, i)), v(this, i, null), f(this, e)?.destroy(), v(this, e, null);
    }
    static create(t1) {
        const e = f(this, a).get(t1?.port);
        if (e) {
            if (e._pendingDestroy) throw new Error("PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
            return e;
        }
        return new n(t1);
    }
    static get workerSrc() {
        if (ds.workerSrc) return ds.workerSrc;
        throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
    }
    static get _setupFakeWorkerGlobal() {
        return gt(this, "_setupFakeWorkerGlobal", (async ()=>{
            if (f(this, u, p)) return f(this, u, p);
            return (await Promise.resolve().then(()=>{
                const e = new Error("Cannot find module as expression is too dynamic");
                e.code = 'MODULE_NOT_FOUND';
                throw e;
            })).WorkerMessageHandler;
        })());
    }
};
t1 = new WeakMap, e = new WeakMap, i = new WeakMap, s = new WeakMap, n = new WeakMap, r = new WeakMap, a = new WeakMap, o = new WeakSet, l = function() {
    f(this, t1).resolve(), f(this, e).send("configure", {
        verbosity: this.verbosity
    });
}, h = function(t1) {
    v(this, i, t1), v(this, e, new Je("main", "worker", t1)), f(this, e).on("ready", ()=>{}), y(this, o, l).call(this);
}, c = function() {
    if (f(Ws, r) || f(Ws, u, p)) return void y(this, o, d).call(this);
    let { workerSrc: n } = Ws;
    try {
        Ws._isSameOrigin(window.location, n) || (n = Ws._createCDNWrapper(new URL(n, window.location).href));
        const r = new Worker(n, {
            type: "module"
        }), a = new Je("main", "worker", r), h = ()=>{
            c.abort(), a.destroy(), r.terminate(), this.destroyed ? f(this, t1).reject(new Error("Worker was destroyed")) : y(this, o, d).call(this);
        }, c = new AbortController;
        r.addEventListener("error", ()=>{
            f(this, s) || h();
        }, {
            signal: c.signal
        }), a.on("test", (t1)=>{
            c.abort(), !this.destroyed && t1 ? (v(this, e, a), v(this, i, r), v(this, s, r), y(this, o, l).call(this)) : h();
        }), a.on("ready", (t1)=>{
            if (c.abort(), this.destroyed) h();
            else try {
                u();
            } catch  {
                y(this, o, d).call(this);
            }
        });
        const u = ()=>{
            const t1 = new Uint8Array;
            a.send("test", t1, [
                t1.buffer
            ]);
        };
        return void u();
    } catch  {
        lt("The worker has been disabled.");
    }
    y(this, o, d).call(this);
}, d = function() {
    f(Ws, r) || (ht("Setting up fake worker."), v(Ws, r, !0)), Ws._setupFakeWorkerGlobal.then((s)=>{
        if (this.destroyed) return void f(this, t1).reject(new Error("Worker was destroyed"));
        const r = new Ue;
        v(this, i, r);
        const a = "fake" + (h = Ws, c = n, {
            set _ (t){
                v(h, c, t, d);
            },
            get _ () {
                return f(h, c, u);
            }
        })._++;
        var h, c, d, u;
        const p = new Je(a + "_worker", a, r);
        s.setup(p, r), v(this, e, new Je(a, a + "_worker", r)), y(this, o, l).call(this);
    }).catch((e)=>{
        f(this, t1).reject(new Error(`Setting up fake worker failed: "${e.message}".`));
    });
}, u = new WeakSet, p = function() {
    try {
        return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch  {
        return null;
    }
}, b(Ws, u), b(Ws, n, 0), b(Ws, r, !1), b(Ws, a, new WeakMap), S && (v(Ws, r, !0), ds.workerSrc ||= "./pdf.worker.mjs"), Ws._isSameOrigin = (t1, e)=>{
    const i = URL.parse(t1);
    if (!i?.origin || "null" === i.origin) return !1;
    const s = new URL(e, i);
    return i.origin === s.origin;
}, Ws._createCDNWrapper = (t1)=>{
    const e = `await import("${t1}");`;
    return URL.createObjectURL(new Blob([
        e
    ], {
        type: "text/javascript"
    }));
}, Ws.fromPort = (t1)=>{
    var e;
    if (e = "`PDFWorker.fromPort` - please use `PDFWorker.create` instead.", console.log("Deprecated API usage: " + e), !t1?.port) throw new Error("PDFWorker.fromPort - invalid method signature.");
    return Ws.create(t1);
};
let qs = Ws;
class Xs {
    #Dn = new Map;
    #Pn = new Map;
    #kn = new Map;
    #In = new Map;
    #Rn = null;
    constructor(t1, e, i, s, n, r){
        this.messageHandler = t1, this.loadingTask = e, this.commonObjs = new Us, this.fontLoader = new Le({
            ownerDocument: s.ownerDocument,
            styleElement: s.styleElement
        }), this.loadingParams = s.loadingParams, this._params = s, this.canvasFactory = n.canvasFactory, this.filterFactory = n.filterFactory, this.cMapReaderFactory = n.cMapReaderFactory, this.standardFontDataFactory = n.standardFontDataFactory, this.wasmFactory = n.wasmFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = i, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.enableHWA = r, this.setupMessageHandler();
    }
    #Ln(t1, e = null) {
        const i = this.#Dn.get(t1);
        if (i) return i;
        const s = this.messageHandler.sendWithPromise(t1, e);
        return this.#Dn.set(t1, s), s;
    }
    get annotationStorage() {
        return gt(this, "annotationStorage", new Ie);
    }
    getRenderingIntent(t1, e = B.ENABLE, i = null, s = !1, n = !1) {
        let r = M, a = ke;
        switch(t1){
            case "any":
                r = T;
                break;
            case "display":
                break;
            case "print":
                r = D;
                break;
            default:
                ht(`getRenderingIntent - invalid intent: ${t1}`);
        }
        const o = r & D && i instanceof Re ? i : this.annotationStorage;
        switch(e){
            case B.DISABLE:
                r += I;
                break;
            case B.ENABLE:
                break;
            case B.ENABLE_FORMS:
                r += P;
                break;
            case B.ENABLE_STORAGE:
                r += k, a = o.serializable;
                break;
            default:
                ht(`getRenderingIntent - invalid annotationMode: ${e}`);
        }
        s && (r += R), n && (r += L);
        const { ids: l, hash: h } = o.modifiedIds;
        return {
            renderingIntent: r,
            cacheKey: [
                r,
                a.hash,
                h
            ].join("_"),
            annotationStorageSerializable: a,
            modifiedIds: l
        };
    }
    destroy() {
        if (this.destroyCapability) return this.destroyCapability.promise;
        this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), this.#Rn?.reject(new Error("Worker was destroyed during onPassword callback"));
        const t1 = [];
        for (const i of this.#Pn.values())t1.push(i._destroy());
        this.#Pn.clear(), this.#kn.clear(), this.#In.clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
        const e = this.messageHandler.sendWithPromise("Terminate", null);
        return t1.push(e), Promise.all(t1).then(()=>{
            this.commonObjs.clear(), this.fontLoader.clear(), this.#Dn.clear(), this.filterFactory.destroy(), zs.cleanup(), this._networkStream?.cancelAllRequests(new xt("Worker was terminated.")), this.messageHandler?.destroy(), this.messageHandler = null, this.destroyCapability.resolve();
        }, this.destroyCapability.reject), this.destroyCapability.promise;
    }
    setupMessageHandler() {
        const { messageHandler: t1, loadingTask: e } = this;
        t1.on("GetReader", (t1, e)=>{
            dt(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (t1)=>{
                this._lastProgress = {
                    loaded: t1.loaded,
                    total: t1.total
                };
            }, e.onPull = ()=>{
                this._fullReader.read().then(function({ value: t1, done: i }) {
                    i ? e.close() : (dt(t1 instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), e.enqueue(new Uint8Array(t1), 1, [
                        t1
                    ]));
                }).catch((t1)=>{
                    e.error(t1);
                });
            }, e.onCancel = (t1)=>{
                this._fullReader.cancel(t1), e.ready.catch((t1)=>{
                    if (!this.destroyed) throw t1;
                });
            };
        }), t1.on("ReaderHeadersReady", async (t1)=>{
            await this._fullReader.headersReady;
            const { isStreamingSupported: i, isRangeSupported: s, contentLength: n } = this._fullReader;
            return i && s || (this._lastProgress && e.onProgress?.(this._lastProgress), this._fullReader.onProgress = (t1)=>{
                e.onProgress?.({
                    loaded: t1.loaded,
                    total: t1.total
                });
            }), {
                isStreamingSupported: i,
                isRangeSupported: s,
                contentLength: n
            };
        }), t1.on("GetRangeReader", (t1, e)=>{
            dt(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
            const i = this._networkStream.getRangeReader(t1.begin, t1.end);
            i ? (e.onPull = ()=>{
                i.read().then(function({ value: t1, done: i }) {
                    i ? e.close() : (dt(t1 instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), e.enqueue(new Uint8Array(t1), 1, [
                        t1
                    ]));
                }).catch((t1)=>{
                    e.error(t1);
                });
            }, e.onCancel = (t1)=>{
                i.cancel(t1), e.ready.catch((t1)=>{
                    if (!this.destroyed) throw t1;
                });
            }) : e.close();
        }), t1.on("GetDoc", ({ pdfInfo: t1 })=>{
            this._numPages = t1.numPages, this._htmlForXfa = t1.htmlForXfa, delete t1.htmlForXfa, e._capability.resolve(new Vs(t1, this));
        }), t1.on("DocException", (t1)=>{
            e._capability.reject(Qe(t1));
        }), t1.on("PasswordRequest", (t1)=>{
            this.#Rn = Promise.withResolvers();
            try {
                if (!e.onPassword) throw Qe(t1);
                const i = (t1)=>{
                    t1 instanceof Error ? this.#Rn.reject(t1) : this.#Rn.resolve({
                        password: t1
                    });
                };
                e.onPassword(i, t1.code);
            } catch (i) {
                this.#Rn.reject(i);
            }
            return this.#Rn.promise;
        }), t1.on("DataLoaded", (t1)=>{
            e.onProgress?.({
                loaded: t1.length,
                total: t1.length
            }), this.downloadInfoCapability.resolve(t1);
        }), t1.on("StartRenderPage", (t1)=>{
            if (this.destroyed) return;
            this.#Pn.get(t1.pageIndex)._startRenderPage(t1.transparency, t1.cacheKey);
        }), t1.on("commonobj", ([e, i, s])=>{
            if (this.destroyed) return null;
            if (this.commonObjs.has(e)) return null;
            switch(i){
                case "Font":
                    if ("error" in s) {
                        const t1 = s.error;
                        ht(`Error during font loading: ${t1}`), this.commonObjs.resolve(e, t1);
                        break;
                    }
                    const n = new cs(s), r = this._params.pdfBug && globalThis.FontInspector?.enabled ? (t1, e)=>globalThis.FontInspector.fontAdded(t1, e) : null, a = new Be(n, r, s.extra, s.charProcOperatorList);
                    this.fontLoader.bind(a).catch(()=>t1.sendWithPromise("FontFallback", {
                            id: e
                        })).finally(()=>{
                        !a.fontExtraProperties && a.data && a.clearData(), this.commonObjs.resolve(e, a);
                    });
                    break;
                case "CopyLocalImage":
                    const { imageRef: o } = s;
                    dt(o, "The imageRef must be defined.");
                    for (const t1 of this.#Pn.values())for (const [, i] of t1.objs)if (i?.ref === o) return i.dataLen ? (this.commonObjs.resolve(e, structuredClone(i)), i.dataLen) : null;
                    break;
                case "FontPath":
                case "Image":
                case "Pattern":
                    this.commonObjs.resolve(e, s);
                    break;
                default:
                    throw new Error(`Got unknown common object type ${i}`);
            }
            return null;
        }), t1.on("obj", ([t1, e, i, s])=>{
            if (this.destroyed) return;
            const n = this.#Pn.get(e);
            if (!n.objs.has(t1)) if (0 !== n._intentStates.size) switch(i){
                case "Image":
                case "Pattern":
                    n.objs.resolve(t1, s);
                    break;
                default:
                    throw new Error(`Got unknown object type ${i}`);
            }
            else s?.bitmap?.close();
        }), t1.on("DocProgress", (t1)=>{
            this.destroyed || e.onProgress?.({
                loaded: t1.loaded,
                total: t1.total
            });
        }), t1.on("FetchBinaryData", async (t1)=>{
            if (this.destroyed) throw new Error("Worker was destroyed.");
            const e = this[t1.type];
            if (!e) throw new Error(`${t1.type} not initialized, see the \`useWorkerFetch\` parameter.`);
            return e.fetch(t1);
        });
    }
    getData() {
        return this.messageHandler.sendWithPromise("GetData", null);
    }
    saveDocument() {
        this.annotationStorage.size <= 0 && ht("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
        const { map: t1, transfer: e } = this.annotationStorage.serializable;
        return this.messageHandler.sendWithPromise("SaveDocument", {
            isPureXfa: !!this._htmlForXfa,
            numPages: this._numPages,
            annotationStorage: t1,
            filename: this._fullReader?.filename ?? null
        }, e).finally(()=>{
            this.annotationStorage.resetModified();
        });
    }
    getPage(t1) {
        if (!Number.isInteger(t1) || t1 <= 0 || t1 > this._numPages) return Promise.reject(new Error("Invalid page request."));
        const e = t1 - 1, i = this.#kn.get(e);
        if (i) return i;
        const s = this.messageHandler.sendWithPromise("GetPage", {
            pageIndex: e
        }).then((i)=>{
            if (this.destroyed) throw new Error("Transport destroyed");
            i.refStr && this.#In.set(i.refStr, t1);
            const s = new Gs(e, i, this, this._params.pdfBug);
            return this.#Pn.set(e, s), s;
        });
        return this.#kn.set(e, s), s;
    }
    getPageIndex(t1) {
        return Oe(t1) ? this.messageHandler.sendWithPromise("GetPageIndex", {
            num: t1.num,
            gen: t1.gen
        }) : Promise.reject(new Error("Invalid pageIndex request."));
    }
    getAnnotations(t1, e) {
        return this.messageHandler.sendWithPromise("GetAnnotations", {
            pageIndex: t1,
            intent: e
        });
    }
    getFieldObjects() {
        return this.#Ln("GetFieldObjects");
    }
    hasJSActions() {
        return this.#Ln("HasJSActions");
    }
    getCalculationOrderIds() {
        return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
    }
    getDestinations() {
        return this.messageHandler.sendWithPromise("GetDestinations", null);
    }
    getDestination(t1) {
        return "string" != typeof t1 ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
            id: t1
        });
    }
    getPageLabels() {
        return this.messageHandler.sendWithPromise("GetPageLabels", null);
    }
    getPageLayout() {
        return this.messageHandler.sendWithPromise("GetPageLayout", null);
    }
    getPageMode() {
        return this.messageHandler.sendWithPromise("GetPageMode", null);
    }
    getViewerPreferences() {
        return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
    }
    getOpenAction() {
        return this.messageHandler.sendWithPromise("GetOpenAction", null);
    }
    getAttachments() {
        return this.messageHandler.sendWithPromise("GetAttachments", null);
    }
    getAnnotationsByType(t1, e) {
        return this.messageHandler.sendWithPromise("GetAnnotationsByType", {
            types: t1,
            pageIndexesToSkip: e
        });
    }
    getDocJSActions() {
        return this.#Ln("GetDocJSActions");
    }
    getPageJSActions(t1) {
        return this.messageHandler.sendWithPromise("GetPageJSActions", {
            pageIndex: t1
        });
    }
    getStructTree(t1) {
        return this.messageHandler.sendWithPromise("GetStructTree", {
            pageIndex: t1
        });
    }
    getOutline() {
        return this.messageHandler.sendWithPromise("GetOutline", null);
    }
    getOptionalContentConfig(t1) {
        return this.#Ln("GetOptionalContentConfig").then((e)=>new ms(e, t1));
    }
    getPermissions() {
        return this.messageHandler.sendWithPromise("GetPermissions", null);
    }
    getMetadata() {
        const t1 = "GetMetadata", e = this.#Dn.get(t1);
        if (e) return e;
        const i = this.messageHandler.sendWithPromise(t1, null).then((t1)=>({
                info: t1[0],
                metadata: t1[1] ? new us(t1[1]) : null,
                contentDispositionFilename: this._fullReader?.filename ?? null,
                contentLength: this._fullReader?.contentLength ?? null
            }));
        return this.#Dn.set(t1, i), i;
    }
    getMarkInfo() {
        return this.messageHandler.sendWithPromise("GetMarkInfo", null);
    }
    async startCleanup(t1 = !1) {
        if (!this.destroyed) {
            await this.messageHandler.sendWithPromise("Cleanup", null);
            for (const t1 of this.#Pn.values()){
                if (!t1.cleanup()) throw new Error(`startCleanup: Page ${t1.pageNumber} is currently rendering.`);
            }
            this.commonObjs.clear(), t1 || this.fontLoader.clear(), this.#Dn.clear(), this.filterFactory.destroy(!0), zs.cleanup();
        }
    }
    cachedPageNumber(t1) {
        if (!Oe(t1)) return null;
        const e = 0 === t1.gen ? `${t1.num}R` : `${t1.num}R${t1.gen}`;
        return this.#In.get(e) ?? null;
    }
}
class Ys {
    #Bn = null;
    onContinue = null;
    onError = null;
    constructor(t1){
        this.#Bn = t1;
    }
    get promise() {
        return this.#Bn.capability.promise;
    }
    cancel(t1 = 0) {
        this.#Bn.cancel(null, t1);
    }
    get separateAnnots() {
        const { separateAnnots: t1 } = this.#Bn.operatorList;
        if (!t1) return !1;
        const { annotationCanvasMap: e } = this.#Bn;
        return t1.form || t1.canvas && e?.size > 0;
    }
}
class Ks {
    #Fn = null;
    static #On = new WeakSet;
    constructor({ callback: t1, params: e, objs: i, commonObjs: s, annotationCanvasMap: n, operatorList: r, pageIndex: a, canvasFactory: o, filterFactory: l, useRequestAnimationFrame: h = !1, pdfBug: c = !1, pageColors: d = null, enableHWA: u = !1, operationsFilter: p = null }){
        this.callback = t1, this.params = e, this.objs = i, this.commonObjs = s, this.annotationCanvasMap = n, this.operatorListIdx = null, this.operatorList = r, this._pageIndex = a, this.canvasFactory = o, this.filterFactory = l, this._pdfBug = c, this.pageColors = d, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = !0 === h && "undefined" != ("TURBOPACK compile-time value", "undefined"), this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new Ys(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvas, this._canvasContext = e.canvas ? null : e.canvasContext, this._enableHWA = u, this._dependencyTracker = e.dependencyTracker, this._operationsFilter = p;
    }
    get completed() {
        return this.capability.promise.catch(function() {});
    }
    initializeGraphics({ transparency: t1 = !1, optionalContentConfig: e }) {
        if (this.cancelled) return;
        if (this._canvas) {
            if (Ks.#On.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
            Ks.#On.add(this._canvas);
        }
        this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
        const { viewport: i, transform: s, background: n, dependencyTracker: r } = this.params, a = this._canvasContext || this._canvas.getContext("2d", {
            alpha: !1,
            willReadFrequently: !this._enableHWA
        });
        this.gfx = new os(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
            optionalContentConfig: e
        }, this.annotationCanvasMap, this.pageColors, r), this.gfx.beginDrawing({
            transform: s,
            viewport: i,
            transparency: t1,
            background: n
        }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback?.();
    }
    cancel(t1 = null, e = 0) {
        this.running = !1, this.cancelled = !0, this.gfx?.endDrawing(), this.#Fn && (window.cancelAnimationFrame(this.#Fn), this.#Fn = null), Ks.#On.delete(this._canvas), t1 ||= new zt(`Rendering cancelled, page ${this._pageIndex + 1}`, e), this.callback(t1), this.task.onError?.(t1);
    }
    operatorListChanged() {
        this.graphicsReady ? (this.gfx.dependencyTracker?.growOperationsCount(this.operatorList.fnArray.length), this.stepper?.updateOperatorList(this.operatorList), this.running || this._continue()) : this.graphicsReadyCallback ||= this._continueBound;
    }
    _continue() {
        this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
    }
    _scheduleNext() {
        this._useRequestAnimationFrame ? this.#Fn = window.requestAnimationFrame(()=>{
            this.#Fn = null, this._nextBound().catch(this._cancelBound);
        }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
        this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper, this._operationsFilter), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), Ks.#On.delete(this._canvas), this.callback())));
    }
}
const Qs = "5.4.296", Js = "f56dc8601";
class Zs {
    #Nn = null;
    #Un = null;
    #zn;
    #Hn = null;
    #jn = !1;
    #$n = !1;
    #r = null;
    #Vn;
    #Gn = null;
    #b = null;
    static #Wn = null;
    static get _keyboardManager() {
        return gt(this, "_keyboardManager", new ye([
            [
                [
                    "Escape",
                    "mac+Escape"
                ],
                Zs.prototype._hideDropdownFromKeyboard
            ],
            [
                [
                    " ",
                    "mac+ "
                ],
                Zs.prototype._colorSelectFromKeyboard
            ],
            [
                [
                    "ArrowDown",
                    "ArrowRight",
                    "mac+ArrowDown",
                    "mac+ArrowRight"
                ],
                Zs.prototype._moveToNext
            ],
            [
                [
                    "ArrowUp",
                    "ArrowLeft",
                    "mac+ArrowUp",
                    "mac+ArrowLeft"
                ],
                Zs.prototype._moveToPrevious
            ],
            [
                [
                    "Home",
                    "mac+Home"
                ],
                Zs.prototype._moveToBeginning
            ],
            [
                [
                    "End",
                    "mac+End"
                ],
                Zs.prototype._moveToEnd
            ]
        ]));
    }
    constructor({ editor: t1 = null, uiManager: e = null }){
        t1 ? (this.#$n = !1, this.#r = t1) : this.#$n = !0, this.#b = t1?._uiManager || e, this.#Vn = this.#b._eventBus, this.#zn = t1?.color?.toUpperCase() || this.#b?.highlightColors.values().next().value || "#FFFF98", Zs.#Wn ||= Object.freeze({
            blue: "pdfjs-editor-colorpicker-blue",
            green: "pdfjs-editor-colorpicker-green",
            pink: "pdfjs-editor-colorpicker-pink",
            red: "pdfjs-editor-colorpicker-red",
            yellow: "pdfjs-editor-colorpicker-yellow"
        });
    }
    renderButton() {
        const t1 = this.#Nn = document.createElement("button");
        t1.className = "colorPicker", t1.tabIndex = "0", t1.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), t1.ariaHasPopup = "true", this.#r && (t1.ariaControls = `${this.#r.id}_colorpicker_dropdown`);
        const e = this.#b._signal;
        t1.addEventListener("click", this.#qn.bind(this), {
            signal: e
        }), t1.addEventListener("keydown", this.#Xn.bind(this), {
            signal: e
        });
        const i = this.#Un = document.createElement("span");
        return i.className = "swatch", i.ariaHidden = "true", i.style.backgroundColor = this.#zn, t1.append(i), t1;
    }
    renderMainDropdown() {
        const t1 = this.#Hn = this.#Yn();
        return t1.ariaOrientation = "horizontal", t1.ariaLabelledBy = "highlightColorPickerLabel", t1;
    }
    #Yn() {
        const t1 = document.createElement("div"), e = this.#b._signal;
        t1.addEventListener("contextmenu", qt, {
            signal: e
        }), t1.className = "dropdown", t1.role = "listbox", t1.ariaMultiSelectable = "false", t1.ariaOrientation = "vertical", t1.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"), this.#r && (t1.id = `${this.#r.id}_colorpicker_dropdown`);
        for (const [i, s] of this.#b.highlightColors){
            const n = document.createElement("button");
            n.tabIndex = "0", n.role = "option", n.setAttribute("data-color", s), n.title = i, n.setAttribute("data-l10n-id", Zs.#Wn[i]);
            const r = document.createElement("span");
            n.append(r), r.className = "swatch", r.style.backgroundColor = s, n.ariaSelected = s === this.#zn, n.addEventListener("click", this.#Kn.bind(this, s), {
                signal: e
            }), t1.append(n);
        }
        return t1.addEventListener("keydown", this.#Xn.bind(this), {
            signal: e
        }), t1;
    }
    #Kn(t1, e) {
        e.stopPropagation(), this.#Vn.dispatch("switchannotationeditorparams", {
            source: this,
            type: N.HIGHLIGHT_COLOR,
            value: t1
        }), this.updateColor(t1);
    }
    _colorSelectFromKeyboard(t1) {
        if (t1.target === this.#Nn) return void this.#qn(t1);
        const e = t1.target.getAttribute("data-color");
        e && this.#Kn(e, t1);
    }
    _moveToNext(t1) {
        this.#Qn ? t1.target !== this.#Nn ? t1.target.nextSibling?.focus() : this.#Hn.firstChild?.focus() : this.#qn(t1);
    }
    _moveToPrevious(t1) {
        t1.target !== this.#Hn?.firstChild && t1.target !== this.#Nn ? (this.#Qn || this.#qn(t1), t1.target.previousSibling?.focus()) : this.#Qn && this._hideDropdownFromKeyboard();
    }
    _moveToBeginning(t1) {
        this.#Qn ? this.#Hn.firstChild?.focus() : this.#qn(t1);
    }
    _moveToEnd(t1) {
        this.#Qn ? this.#Hn.lastChild?.focus() : this.#qn(t1);
    }
    #Xn(t1) {
        Zs._keyboardManager.exec(this, t1);
    }
    #qn(t1) {
        if (this.#Qn) return void this.hideDropdown();
        if (this.#jn = 0 === t1.detail, this.#Gn || (this.#Gn = new AbortController, window.addEventListener("pointerdown", this.#u.bind(this), {
            signal: this.#b.combinedSignal(this.#Gn)
        })), this.#Nn.ariaExpanded = "true", this.#Hn) return void this.#Hn.classList.remove("hidden");
        const e = this.#Hn = this.#Yn();
        this.#Nn.append(e);
    }
    #u(t1) {
        this.#Hn?.contains(t1.target) || this.hideDropdown();
    }
    hideDropdown() {
        this.#Hn?.classList.add("hidden"), this.#Nn.ariaExpanded = "false", this.#Gn?.abort(), this.#Gn = null;
    }
    get #Qn() {
        return this.#Hn && !this.#Hn.classList.contains("hidden");
    }
    _hideDropdownFromKeyboard() {
        this.#$n || (this.#Qn ? (this.hideDropdown(), this.#Nn.focus({
            preventScroll: !0,
            focusVisible: this.#jn
        })) : this.#r?.unselect());
    }
    updateColor(t1) {
        if (this.#Un && (this.#Un.style.backgroundColor = t1), !this.#Hn) return;
        const e = this.#b.highlightColors.values();
        for (const i of this.#Hn.children)i.ariaSelected = e.next().value === t1.toUpperCase();
    }
    destroy() {
        this.#Nn?.remove(), this.#Nn = null, this.#Un = null, this.#Hn?.remove(), this.#Hn = null;
    }
}
class tn {
    #Jn = null;
    #r = null;
    #b = null;
    static #Wn = null;
    constructor(t1){
        this.#r = t1, this.#b = t1._uiManager, tn.#Wn ||= Object.freeze({
            freetext: "pdfjs-editor-color-picker-free-text-input",
            ink: "pdfjs-editor-color-picker-ink-input"
        });
    }
    renderButton() {
        if (this.#Jn) return this.#Jn;
        const { editorType: t1, colorType: e, colorValue: i } = this.#r, s = this.#Jn = document.createElement("input");
        return s.type = "color", s.value = i || "#000000", s.className = "basicColorPicker", s.tabIndex = 0, s.setAttribute("data-l10n-id", tn.#Wn[t1]), s.addEventListener("input", ()=>{
            this.#b.updateParams(e, s.value);
        }, {
            signal: this.#b._signal
        }), s;
    }
    update(t1) {
        this.#Jn && (this.#Jn.value = t1);
    }
    destroy() {
        this.#Jn?.remove(), this.#Jn = null;
    }
    hideDropdown() {}
}
function en(t1) {
    return Math.floor(255 * Math.max(0, Math.min(1, t1))).toString(16).padStart(2, "0");
}
function sn(t1) {
    return Math.max(0, Math.min(255, 255 * t1));
}
_(116), _(531);
class nn {
    static CMYK_G([t1, e, i, s]) {
        return [
            "G",
            1 - Math.min(1, .3 * t1 + .59 * i + .11 * e + s)
        ];
    }
    static G_CMYK([t1]) {
        return [
            "CMYK",
            0,
            0,
            0,
            1 - t1
        ];
    }
    static G_RGB([t1]) {
        return [
            "RGB",
            t1,
            t1,
            t1
        ];
    }
    static G_rgb([t1]) {
        return [
            t1 = sn(t1),
            t1,
            t1
        ];
    }
    static G_HTML([t1]) {
        const e = en(t1);
        return `#${e}${e}${e}`;
    }
    static RGB_G([t1, e, i]) {
        return [
            "G",
            .3 * t1 + .59 * e + .11 * i
        ];
    }
    static RGB_rgb(t1) {
        return t1.map(sn);
    }
    static RGB_HTML(t1) {
        return `#${t1.map(en).join("")}`;
    }
    static T_HTML() {
        return "#00000000";
    }
    static T_rgb() {
        return [
            null
        ];
    }
    static CMYK_RGB([t1, e, i, s]) {
        return [
            "RGB",
            1 - Math.min(1, t1 + s),
            1 - Math.min(1, i + s),
            1 - Math.min(1, e + s)
        ];
    }
    static CMYK_rgb([t1, e, i, s]) {
        return [
            sn(1 - Math.min(1, t1 + s)),
            sn(1 - Math.min(1, i + s)),
            sn(1 - Math.min(1, e + s))
        ];
    }
    static CMYK_HTML(t1) {
        const e = this.CMYK_RGB(t1).slice(1);
        return this.RGB_HTML(e);
    }
    static RGB_CMYK([t1, e, i]) {
        const s = 1 - t1, n = 1 - e, r = 1 - i;
        return [
            "CMYK",
            s,
            n,
            r,
            Math.min(s, n, r)
        ];
    }
}
class rn {
    create(t1, e, i = !1) {
        if (t1 <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
        const s = this._createSVG("svg:svg");
        return s.setAttribute("version", "1.1"), i || (s.setAttribute("width", `${t1}px`), s.setAttribute("height", `${e}px`)), s.setAttribute("preserveAspectRatio", "none"), s.setAttribute("viewBox", `0 0 ${t1} ${e}`), s;
    }
    createElement(t1) {
        if ("string" != typeof t1) throw new Error("Invalid SVG element type");
        return this._createSVG(t1);
    }
    _createSVG(t1) {
        ct("Abstract method `_createSVG` called.");
    }
}
class an extends rn {
    _createSVG(t1) {
        return document.createElementNS(Ft, t1);
    }
}
const on = new WeakSet, ln = 60 * (new Date).getTimezoneOffset() * 1e3;
class hn {
    static create(t1) {
        switch(t1.data.annotationType){
            case q.LINK:
                return new un(t1);
            case q.TEXT:
                return new pn(t1);
            case q.WIDGET:
                switch(t1.data.fieldType){
                    case "Tx":
                        return new mn(t1);
                    case "Btn":
                        return t1.data.radioButton ? new vn(t1) : t1.data.checkBox ? new bn(t1) : new yn(t1);
                    case "Ch":
                        return new wn(t1);
                    case "Sig":
                        return new fn(t1);
                }
                return new gn(t1);
            case q.POPUP:
                return new xn(t1);
            case q.FREETEXT:
                return new _n(t1);
            case q.LINE:
                return new Sn(t1);
            case q.SQUARE:
                return new En(t1);
            case q.CIRCLE:
                return new Cn(t1);
            case q.POLYLINE:
                return new Tn(t1);
            case q.CARET:
                return new Dn(t1);
            case q.INK:
                return new Pn(t1);
            case q.POLYGON:
                return new Mn(t1);
            case q.HIGHLIGHT:
                return new kn(t1);
            case q.UNDERLINE:
                return new In(t1);
            case q.SQUIGGLY:
                return new Rn(t1);
            case q.STRIKEOUT:
                return new Ln(t1);
            case q.STAMP:
                return new Bn(t1);
            case q.FILEATTACHMENT:
                return new Fn(t1);
            default:
                return new cn(t1);
        }
    }
}
class cn {
    #Zn = null;
    #tr = !1;
    #er = null;
    constructor(t1, { isRenderable: e = !1, ignoreBorder: i = !1, createQuadrilaterals: s = !1 } = {}){
        this.isRenderable = e, this.data = t1.data, this.layer = t1.layer, this.linkService = t1.linkService, this.downloadManager = t1.downloadManager, this.imageResourcesPath = t1.imageResourcesPath, this.renderForms = t1.renderForms, this.svgFactory = t1.svgFactory, this.annotationStorage = t1.annotationStorage, this.enableComment = t1.enableComment, this.enableScripting = t1.enableScripting, this.hasJSActions = t1.hasJSActions, this._fieldObjects = t1.fieldObjects, this.parent = t1.parent, e && (this.container = this._createContainer(i)), s && this._createQuadrilaterals();
    }
    static _hasPopupData({ contentsObj: t1, richText: e }) {
        return !(!t1?.str && !e?.str);
    }
    get _isEditable() {
        return this.data.isEditable;
    }
    get hasPopupData() {
        return cn._hasPopupData(this.data) || this.enableComment && !!this.commentText;
    }
    get commentData() {
        const { data: t1 } = this, e = this.annotationStorage?.getEditor(t1.id);
        return e ? e.getData() : t1;
    }
    get hasCommentButton() {
        return this.enableComment && this.hasPopupElement;
    }
    get commentButtonPosition() {
        const t1 = this.annotationStorage?.getEditor(this.data.id);
        if (t1) return t1.commentButtonPositionInPage;
        const { quadPoints: e, inkLists: i, rect: s } = this.data;
        let n = -1 / 0, r = -1 / 0;
        if (e?.length >= 8) {
            for(let t1 = 0; t1 < e.length; t1 += 8)e[t1 + 1] > r ? (r = e[t1 + 1], n = e[t1 + 2]) : e[t1 + 1] === r && (n = Math.max(n, e[t1 + 2]));
            return [
                n,
                r
            ];
        }
        if (i?.length >= 1) {
            for (const t1 of i)for(let e = 0, i = t1.length; e < i; e += 2)t1[e + 1] > r ? (r = t1[e + 1], n = t1[e]) : t1[e + 1] === r && (n = Math.max(n, t1[e]));
            if (n !== 1 / 0) return [
                n,
                r
            ];
        }
        return s ? [
            s[2],
            s[3]
        ] : null;
    }
    _normalizePoint(t1) {
        const { page: { view: e }, viewport: { rawDims: { pageWidth: i, pageHeight: s, pageX: n, pageY: r } } } = this.parent;
        return t1[1] = e[3] - t1[1] + e[1], t1[0] = 100 * (t1[0] - n) / i, t1[1] = 100 * (t1[1] - r) / s, t1;
    }
    get commentText() {
        const { data: t1 } = this;
        return this.annotationStorage.getRawValue(`${F}${t1.id}`)?.popup?.contents || t1.contentsObj?.str || "";
    }
    set commentText(t1) {
        const { data: e } = this, i = {
            deleted: !t1,
            contents: t1 || ""
        };
        this.annotationStorage.updateEditor(e.id, {
            popup: i
        }) || this.annotationStorage.setValue(`${F}${e.id}`, {
            id: e.id,
            annotationType: e.annotationType,
            pageIndex: this.parent.page._pageIndex,
            popup: i,
            popupRef: e.popupRef,
            modificationDate: new Date
        }), t1 || this.removePopup();
    }
    removePopup() {
        (this.#er?.popup || this.popup)?.remove(), this.#er = this.popup = null;
    }
    updateEdited(t1) {
        if (!this.container) return;
        t1.rect && (this.#Zn ||= {
            rect: this.data.rect.slice(0)
        });
        const { rect: e, popup: i } = t1;
        e && this.#ir(e);
        let s = this.#er?.popup || this.popup;
        !s && i?.text && (this._createPopup(i), s = this.#er.popup), s && (s.updateEdited(t1), i?.deleted && (s.remove(), this.#er = null, this.popup = null));
    }
    resetEdited() {
        this.#Zn && (this.#ir(this.#Zn.rect), this.#er?.popup.resetEdited(), this.#Zn = null);
    }
    #ir(t1) {
        const { container: { style: e }, data: { rect: i, rotation: s }, parent: { viewport: { rawDims: { pageWidth: n, pageHeight: r, pageX: a, pageY: o } } } } = this;
        i?.splice(0, 4, ...t1), e.left = 100 * (t1[0] - a) / n + "%", e.top = 100 * (r - t1[3] + o) / r + "%", 0 === s ? (e.width = 100 * (t1[2] - t1[0]) / n + "%", e.height = 100 * (t1[3] - t1[1]) / r + "%") : this.setRotation(s);
    }
    _createContainer(t1) {
        const { data: e, parent: { page: i, viewport: s } } = this, n = document.createElement("section");
        n.setAttribute("data-annotation-id", e.id), this instanceof gn || this instanceof un || (n.tabIndex = 0);
        const { style: r } = n;
        if (r.zIndex = this.parent.zIndex, this.parent.zIndex += 2, e.alternativeText && (n.title = e.alternativeText), e.noRotate && n.classList.add("norotate"), !e.rect || this instanceof xn) {
            const { rotation: t1 } = e;
            return e.hasOwnCanvas || 0 === t1 || this.setRotation(t1, n), n;
        }
        const { width: a, height: o } = this;
        if (!t1 && e.borderStyle.width > 0) {
            r.borderWidth = `${e.borderStyle.width}px`;
            const t1 = e.borderStyle.horizontalCornerRadius, i = e.borderStyle.verticalCornerRadius;
            if (t1 > 0 || i > 0) {
                const e = `calc(${t1}px * var(--total-scale-factor)) / calc(${i}px * var(--total-scale-factor))`;
                r.borderRadius = e;
            } else if (this instanceof vn) {
                const t1 = `calc(${a}px * var(--total-scale-factor)) / calc(${o}px * var(--total-scale-factor))`;
                r.borderRadius = t1;
            }
            switch(e.borderStyle.style){
                case X:
                    r.borderStyle = "solid";
                    break;
                case Y:
                    r.borderStyle = "dashed";
                    break;
                case K:
                    ht("Unimplemented border style: beveled");
                    break;
                case Q:
                    ht("Unimplemented border style: inset");
                    break;
                case J:
                    r.borderBottomStyle = "solid";
            }
            const s = e.borderColor || null;
            s ? (this.#tr = !0, r.borderColor = Ct.makeHexColor(0 | s[0], 0 | s[1], 0 | s[2])) : r.borderWidth = 0;
        }
        const l = Ct.normalizeRect([
            e.rect[0],
            i.view[3] - e.rect[1] + i.view[1],
            e.rect[2],
            i.view[3] - e.rect[3] + i.view[1]
        ]), { pageWidth: h, pageHeight: c, pageX: d, pageY: u } = s.rawDims;
        r.left = 100 * (l[0] - d) / h + "%", r.top = 100 * (l[1] - u) / c + "%";
        const { rotation: p } = e;
        return e.hasOwnCanvas || 0 === p ? (r.width = 100 * a / h + "%", r.height = 100 * o / c + "%") : this.setRotation(p, n), n;
    }
    setRotation(t1, e = this.container) {
        if (!this.data.rect) return;
        const { pageWidth: i, pageHeight: s } = this.parent.viewport.rawDims;
        let { width: n, height: r } = this;
        t1 % 180 != 0 && ([n, r] = [
            r,
            n
        ]), e.style.width = 100 * n / i + "%", e.style.height = 100 * r / s + "%", e.setAttribute("data-main-rotation", (360 - t1) % 360);
    }
    get _commonActions() {
        const t1 = (t1, e, i)=>{
            const s = i.detail[t1], n = s[0], r = s.slice(1);
            i.target.style[e] = nn[`${n}_HTML`](r), this.annotationStorage.setValue(this.data.id, {
                [e]: nn[`${n}_rgb`](r)
            });
        };
        return gt(this, "_commonActions", {
            display: (t1)=>{
                const { display: e } = t1.detail, i = e % 2 == 1;
                this.container.style.visibility = i ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noView: i,
                    noPrint: 1 === e || 2 === e
                });
            },
            print: (t1)=>{
                this.annotationStorage.setValue(this.data.id, {
                    noPrint: !t1.detail.print
                });
            },
            hidden: (t1)=>{
                const { hidden: e } = t1.detail;
                this.container.style.visibility = e ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                    noPrint: e,
                    noView: e
                });
            },
            focus: (t1)=>{
                setTimeout(()=>t1.target.focus({
                        preventScroll: !1
                    }), 0);
            },
            userName: (t1)=>{
                t1.target.title = t1.detail.userName;
            },
            readonly: (t1)=>{
                t1.target.disabled = t1.detail.readonly;
            },
            required: (t1)=>{
                this._setRequired(t1.target, t1.detail.required);
            },
            bgColor: (e)=>{
                t1("bgColor", "backgroundColor", e);
            },
            fillColor: (e)=>{
                t1("fillColor", "backgroundColor", e);
            },
            fgColor: (e)=>{
                t1("fgColor", "color", e);
            },
            textColor: (e)=>{
                t1("textColor", "color", e);
            },
            borderColor: (e)=>{
                t1("borderColor", "borderColor", e);
            },
            strokeColor: (e)=>{
                t1("strokeColor", "borderColor", e);
            },
            rotation: (t1)=>{
                const e = t1.detail.rotation;
                this.setRotation(e), this.annotationStorage.setValue(this.data.id, {
                    rotation: e
                });
            }
        });
    }
    _dispatchEventFromSandbox(t1, e) {
        const i = this._commonActions;
        for (const s of Object.keys(e.detail)){
            const n = t1[s] || i[s];
            n?.(e);
        }
    }
    _setDefaultPropertiesFromJS(t1) {
        if (!this.enableScripting) return;
        const e = this.annotationStorage.getRawValue(this.data.id);
        if (!e) return;
        const i = this._commonActions;
        for (const [s, n] of Object.entries(e)){
            const r = i[s];
            if (r) {
                r({
                    detail: {
                        [s]: n
                    },
                    target: t1
                }), delete e[s];
            }
        }
    }
    _createQuadrilaterals() {
        if (!this.container) return;
        const { quadPoints: t1 } = this.data;
        if (!t1) return;
        const [e, i, s, n] = this.data.rect.map((t1)=>Math.fround(t1));
        if (8 === t1.length) {
            const [r, a, o, l] = t1.subarray(2, 6);
            if (s === r && n === a && e === o && i === l) return;
        }
        const { style: r } = this.container;
        let a;
        if (this.#tr) {
            const { borderColor: t1, borderWidth: e } = r;
            r.borderWidth = 0, a = [
                "url('data:image/svg+xml;utf8,",
                '<svg xmlns="http://www.w3.org/2000/svg"',
                ' preserveAspectRatio="none" viewBox="0 0 1 1">',
                `<g fill="transparent" stroke="${t1}" stroke-width="${e}">`
            ], this.container.classList.add("hasBorder");
        }
        const o = s - e, l = n - i, { svgFactory: h } = this, c = h.createElement("svg");
        c.classList.add("quadrilateralsContainer"), c.setAttribute("width", 0), c.setAttribute("height", 0), c.role = "none";
        const d = h.createElement("defs");
        c.append(d);
        const u = h.createElement("clipPath"), p = `clippath_${this.data.id}`;
        u.setAttribute("id", p), u.setAttribute("clipPathUnits", "objectBoundingBox"), d.append(u);
        for(let g = 2, m = t1.length; g < m; g += 8){
            const i = t1[g], s = t1[g + 1], r = t1[g + 2], c = t1[g + 3], d = h.createElement("rect"), p = (r - e) / o, m = (n - s) / l, f = (i - r) / o, b = (s - c) / l;
            d.setAttribute("x", p), d.setAttribute("y", m), d.setAttribute("width", f), d.setAttribute("height", b), u.append(d), a?.push(`<rect vector-effect="non-scaling-stroke" x="${p}" y="${m}" width="${f}" height="${b}"/>`);
        }
        this.#tr && (a.push("</g></svg>')"), r.backgroundImage = a.join("")), this.container.append(c), this.container.style.clipPath = `url(#${p})`;
    }
    _createPopup(t1 = null) {
        const { data: e } = this;
        let i, s;
        t1 ? (i = {
            str: t1.text
        }, s = t1.date) : (i = e.contentsObj, s = e.modificationDate);
        const n = this.#er = new xn({
            data: {
                color: e.color,
                titleObj: e.titleObj,
                modificationDate: s,
                contentsObj: i,
                richText: e.richText,
                parentRect: e.rect,
                borderStyle: 0,
                id: `popup_${e.id}`,
                rotation: e.rotation,
                noRotate: !0
            },
            linkService: this.linkService,
            parent: this.parent,
            elements: [
                this
            ]
        });
        this.parent._commentManager || this.parent.div.append(n.render());
    }
    get hasPopupElement() {
        return !!(this.#er || this.popup || this.data.popupRef);
    }
    get extraPopupElement() {
        return this.#er;
    }
    render() {
        ct("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(t1, e = null) {
        const i = [];
        if (this._fieldObjects) {
            const s = this._fieldObjects[t1];
            if (s) for (const { page: t1, id: n, exportValues: r } of s){
                if (-1 === t1) continue;
                if (n === e) continue;
                const s = "string" == typeof r ? r : null, a = document.querySelector(`[data-element-id="${n}"]`);
                !a || on.has(a) ? i.push({
                    id: n,
                    exportValue: s,
                    domElement: a
                }) : ht(`_getElementsByName - element not allowed: ${n}`);
            }
            return i;
        }
        for (const s of document.getElementsByName(t1)){
            const { exportValue: t1 } = s, n = s.getAttribute("data-element-id");
            n !== e && on.has(s) && i.push({
                id: n,
                exportValue: t1,
                domElement: s
            });
        }
        return i;
    }
    show() {
        this.container && (this.container.hidden = !1), this.popup?.maybeShow();
    }
    hide() {
        this.container && (this.container.hidden = !0), this.popup?.forceHide();
    }
    getElementsToTriggerPopup() {
        return this.container;
    }
    addHighlightArea() {
        const t1 = this.getElementsToTriggerPopup();
        if (Array.isArray(t1)) for (const e of t1)e.classList.add("highlightArea");
        else t1.classList.add("highlightArea");
    }
    _editOnDoubleClick() {
        if (!this._isEditable) return;
        const { annotationEditorType: t1, data: { id: e } } = this;
        this.container.addEventListener("dblclick", ()=>{
            this.linkService.eventBus?.dispatch("switchannotationeditormode", {
                source: this,
                mode: t1,
                editId: e,
                mustEnterInEditMode: !0
            });
        });
    }
    get width() {
        return this.data.rect[2] - this.data.rect[0];
    }
    get height() {
        return this.data.rect[3] - this.data.rect[1];
    }
}
class dn extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        }), this.editor = t1.editor;
    }
    render() {
        return this.container.className = "editorAnnotation", this.container;
    }
    createOrUpdatePopup() {
        const { editor: t1 } = this;
        t1.hasComment && (this._createPopup(t1.comment), this.extraPopupElement.popup.renderCommentButton());
    }
    get hasCommentButton() {
        return this.enableComment && this.editor.hasComment;
    }
    get commentButtonPosition() {
        return this.editor.commentButtonPositionInPage;
    }
    get commentText() {
        return this.editor.comment.text;
    }
    set commentText(t1) {
        this.editor.comment = t1, t1 || this.removePopup();
    }
    get commentData() {
        return this.editor.getData();
    }
    remove() {
        this.container.remove(), this.container = null, this.removePopup();
    }
}
class un extends cn {
    constructor(t1, e = null){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !!e?.ignoreBorder,
            createQuadrilaterals: !0
        }), this.isTooltipOnly = t1.data.isTooltipOnly;
    }
    render() {
        const { data: t1, linkService: e } = this, i = document.createElement("a");
        i.setAttribute("data-element-id", t1.id);
        let s = !1;
        return t1.url ? (e.addLinkAttributes(i, t1.url, t1.newWindow), s = !0) : t1.action ? (this._bindNamedAction(i, t1.action, t1.overlaidText), s = !0) : t1.attachment ? (this.#sr(i, t1.attachment, t1.overlaidText, t1.attachmentDest), s = !0) : t1.setOCGState ? (this.#nr(i, t1.setOCGState, t1.overlaidText), s = !0) : t1.dest ? (this._bindLink(i, t1.dest, t1.overlaidText), s = !0) : (t1.actions && (t1.actions.Action || t1.actions["Mouse Up"] || t1.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(i, t1), s = !0), t1.resetForm ? (this._bindResetFormAction(i, t1.resetForm), s = !0) : this.isTooltipOnly && !s && (this._bindLink(i, ""), s = !0)), this.container.classList.add("linkAnnotation"), s && this.container.append(i), this.container;
    }
    #rr() {
        this.container.setAttribute("data-internal-link", "");
    }
    _bindLink(t1, e, i = "") {
        t1.href = this.linkService.getDestinationHash(e), t1.onclick = ()=>(e && this.linkService.goToDestination(e), !1), (e || "" === e) && this.#rr(), i && (t1.title = i);
    }
    _bindNamedAction(t1, e, i = "") {
        t1.href = this.linkService.getAnchorUrl(""), t1.onclick = ()=>(this.linkService.executeNamedAction(e), !1), i && (t1.title = i), this.#rr();
    }
    #sr(t1, e, i = "", s = null) {
        t1.href = this.linkService.getAnchorUrl(""), e.description ? t1.title = e.description : i && (t1.title = i), t1.onclick = ()=>(this.downloadManager?.openOrDownloadData(e.content, e.filename, s), !1), this.#rr();
    }
    #nr(t1, e, i = "") {
        t1.href = this.linkService.getAnchorUrl(""), t1.onclick = ()=>(this.linkService.executeSetOCGState(e), !1), i && (t1.title = i), this.#rr();
    }
    _bindJSAction(t1, e) {
        t1.href = this.linkService.getAnchorUrl("");
        const i = new Map([
            [
                "Action",
                "onclick"
            ],
            [
                "Mouse Up",
                "onmouseup"
            ],
            [
                "Mouse Down",
                "onmousedown"
            ]
        ]);
        for (const s of Object.keys(e.actions)){
            const n = i.get(s);
            n && (t1[n] = ()=>(this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                    source: this,
                    detail: {
                        id: e.id,
                        name: s
                    }
                }), !1));
        }
        e.overlaidText && (t1.title = e.overlaidText), t1.onclick || (t1.onclick = ()=>!1), this.#rr();
    }
    _bindResetFormAction(t1, e) {
        const i = t1.onclick;
        if (i || (t1.href = this.linkService.getAnchorUrl("")), this.#rr(), !this._fieldObjects) return ht('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), void (i || (t1.onclick = ()=>!1));
        t1.onclick = ()=>{
            i?.();
            const { fields: t1, refs: s, include: n } = e, r = [];
            if (0 !== t1.length || 0 !== s.length) {
                const e = new Set(s);
                for (const i of t1){
                    const t1 = this._fieldObjects[i] || [];
                    for (const { id: i } of t1)e.add(i);
                }
                for (const t1 of Object.values(this._fieldObjects))for (const i of t1)e.has(i.id) === n && r.push(i);
            } else for (const e of Object.values(this._fieldObjects))r.push(...e);
            const a = this.annotationStorage, o = [];
            for (const e of r){
                const { id: t1 } = e;
                switch(o.push(t1), e.type){
                    case "text":
                        {
                            const i = e.defaultValue || "";
                            a.setValue(t1, {
                                value: i
                            });
                            break;
                        }
                    case "checkbox":
                    case "radiobutton":
                        {
                            const i = e.defaultValue === e.exportValues;
                            a.setValue(t1, {
                                value: i
                            });
                            break;
                        }
                    case "combobox":
                    case "listbox":
                        {
                            const i = e.defaultValue || "";
                            a.setValue(t1, {
                                value: i
                            });
                            break;
                        }
                    default:
                        continue;
                }
                const i = document.querySelector(`[data-element-id="${t1}"]`);
                i && (on.has(i) ? i.dispatchEvent(new Event("resetform")) : ht(`_bindResetFormAction - element not allowed: ${t1}`));
            }
            return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                    id: "app",
                    ids: o,
                    name: "ResetForm"
                }
            }), !1;
        };
    }
}
class pn extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0
        });
    }
    render() {
        this.container.classList.add("textAnnotation");
        const t1 = document.createElement("img");
        return t1.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", t1.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), t1.setAttribute("data-l10n-args", JSON.stringify({
            type: this.data.name
        })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(t1), this.container;
    }
}
class gn extends cn {
    render() {
        return this.container;
    }
    showElementAndHideCanvas(t1) {
        this.data.hasOwnCanvas && ("CANVAS" === t1.previousSibling?.nodeName && (t1.previousSibling.hidden = !0), t1.hidden = !1);
    }
    _getKeyModifier(t1) {
        return St.platform.isMac ? t1.metaKey : t1.ctrlKey;
    }
    _setEventListener(t1, e, i, s, n) {
        i.includes("mouse") ? t1.addEventListener(i, (t1)=>{
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                    id: this.data.id,
                    name: s,
                    value: n(t1),
                    shift: t1.shiftKey,
                    modifier: this._getKeyModifier(t1)
                }
            });
        }) : t1.addEventListener(i, (t1)=>{
            if ("blur" === i) {
                if (!e.focused || !t1.relatedTarget) return;
                e.focused = !1;
            } else if ("focus" === i) {
                if (e.focused) return;
                e.focused = !0;
            }
            n && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                    id: this.data.id,
                    name: s,
                    value: n(t1)
                }
            });
        });
    }
    _setEventListeners(t1, e, i, s) {
        for (const [n, r] of i)("Action" === r || this.data.actions?.[r]) && ("Focus" !== r && "Blur" !== r || (e ||= {
            focused: !1
        }), this._setEventListener(t1, e, n, r, s), "Focus" !== r || this.data.actions?.Blur ? "Blur" !== r || this.data.actions?.Focus || this._setEventListener(t1, e, "focus", "Focus", null) : this._setEventListener(t1, e, "blur", "Blur", null));
    }
    _setBackgroundColor(t1) {
        const e = this.data.backgroundColor || null;
        t1.style.backgroundColor = null === e ? "transparent" : Ct.makeHexColor(e[0], e[1], e[2]);
    }
    _setTextStyle(t1) {
        const e = [
            "left",
            "center",
            "right"
        ], { fontColor: i } = this.data.defaultAppearanceData, s = this.data.defaultAppearanceData.fontSize || 9, n = t1.style;
        let r;
        const a = (t1)=>Math.round(10 * t1) / 10;
        if (this.data.multiLine) {
            const t1 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2), e = t1 / (Math.round(t1 / (C * s)) || 1);
            r = Math.min(s, a(e / C));
        } else {
            const t1 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
            r = Math.min(s, a(t1 / C));
        }
        n.fontSize = `calc(${r}px * var(--total-scale-factor))`, n.color = Ct.makeHexColor(i[0], i[1], i[2]), null !== this.data.textAlignment && (n.textAlign = e[this.data.textAlignment]);
    }
    _setRequired(t1, e) {
        e ? t1.setAttribute("required", !0) : t1.removeAttribute("required"), t1.setAttribute("aria-required", e);
    }
}
class mn extends gn {
    constructor(t1){
        super(t1, {
            isRenderable: t1.renderForms || t1.data.hasOwnCanvas || !t1.data.hasAppearance && !!t1.data.fieldValue
        });
    }
    setPropertyOnSiblings(t1, e, i, s) {
        const n = this.annotationStorage;
        for (const r of this._getElementsByName(t1.name, t1.id))r.domElement && (r.domElement[e] = i), n.setValue(r.id, {
            [s]: i
        });
    }
    render() {
        const t1 = this.annotationStorage, e = this.data.id;
        this.container.classList.add("textWidgetAnnotation");
        let i = null;
        if (this.renderForms) {
            const s = t1.getValue(e, {
                value: this.data.fieldValue
            });
            let n = s.value || "";
            const r = t1.getValue(e, {
                charLimit: this.data.maxLen
            }).charLimit;
            r && n.length > r && (n = n.slice(0, r));
            let a = s.formattedValue || this.data.textContent?.join("\n") || null;
            a && this.data.comb && (a = a.replaceAll(/\s+/g, ""));
            const o = {
                userValue: n,
                formattedValue: a,
                lastCommittedValue: null,
                commitKey: 1,
                focused: !1
            };
            this.data.multiLine ? (i = document.createElement("textarea"), i.textContent = a ?? n, this.data.doNotScroll && (i.style.overflowY = "hidden")) : (i = document.createElement("input"), i.type = this.data.password ? "password" : "text", i.setAttribute("value", a ?? n), this.data.doNotScroll && (i.style.overflowX = "hidden")), this.data.hasOwnCanvas && (i.hidden = !0), on.add(i), i.setAttribute("data-element-id", e), i.disabled = this.data.readOnly, i.name = this.data.fieldName, i.tabIndex = 0;
            const { datetimeFormat: l, datetimeType: h, timeStep: c } = this.data, d = !!h && this.enableScripting;
            l && (i.title = l), this._setRequired(i, this.data.required), r && (i.maxLength = r), i.addEventListener("input", (s)=>{
                t1.setValue(e, {
                    value: s.target.value
                }), this.setPropertyOnSiblings(i, "value", s.target.value, "value"), o.formattedValue = null;
            }), i.addEventListener("resetform", (t1)=>{
                const e = this.data.defaultFieldValue ?? "";
                i.value = o.userValue = e, o.formattedValue = null;
            });
            let u = (t1)=>{
                const { formattedValue: e } = o;
                null != e && (t1.target.value = e), t1.target.scrollLeft = 0;
            };
            if (this.enableScripting && this.hasJSActions) {
                i.addEventListener("focus", (t1)=>{
                    if (o.focused) return;
                    const { target: e } = t1;
                    if (d && (e.type = h, c && (e.step = c)), o.userValue) {
                        const t1 = o.userValue;
                        if (d) if ("time" === h) {
                            const i = new Date(t1), s = [
                                i.getHours(),
                                i.getMinutes(),
                                i.getSeconds()
                            ];
                            e.value = s.map((t1)=>t1.toString().padStart(2, "0")).join(":");
                        } else e.value = new Date(t1 - ln).toISOString().split("date" === h ? "T" : ".", 1)[0];
                        else e.value = t1;
                    }
                    o.lastCommittedValue = e.value, o.commitKey = 1, this.data.actions?.Focus || (o.focused = !0);
                }), i.addEventListener("updatefromsandbox", (i)=>{
                    this.showElementAndHideCanvas(i.target);
                    const s = {
                        value (i) {
                            o.userValue = i.detail.value ?? "", d || t1.setValue(e, {
                                value: o.userValue.toString()
                            }), i.target.value = o.userValue;
                        },
                        formattedValue (i) {
                            const { formattedValue: s } = i.detail;
                            o.formattedValue = s, null != s && i.target !== document.activeElement && (i.target.value = s);
                            const n = {
                                formattedValue: s
                            };
                            d && (n.value = s), t1.setValue(e, n);
                        },
                        selRange (t1) {
                            t1.target.setSelectionRange(...t1.detail.selRange);
                        },
                        charLimit: (i)=>{
                            const { charLimit: s } = i.detail, { target: n } = i;
                            if (0 === s) return void n.removeAttribute("maxLength");
                            n.setAttribute("maxLength", s);
                            let r = o.userValue;
                            !r || r.length <= s || (r = r.slice(0, s), n.value = o.userValue = r, t1.setValue(e, {
                                value: r
                            }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                source: this,
                                detail: {
                                    id: e,
                                    name: "Keystroke",
                                    value: r,
                                    willCommit: !0,
                                    commitKey: 1,
                                    selStart: n.selectionStart,
                                    selEnd: n.selectionEnd
                                }
                            }));
                        }
                    };
                    this._dispatchEventFromSandbox(s, i);
                }), i.addEventListener("keydown", (t1)=>{
                    o.commitKey = 1;
                    let i = -1;
                    if ("Escape" === t1.key ? i = 0 : "Enter" !== t1.key || this.data.multiLine ? "Tab" === t1.key && (o.commitKey = 3) : i = 2, -1 === i) return;
                    const { value: s } = t1.target;
                    o.lastCommittedValue !== s && (o.lastCommittedValue = s, o.userValue = s, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                            id: e,
                            name: "Keystroke",
                            value: s,
                            willCommit: !0,
                            commitKey: i,
                            selStart: t1.target.selectionStart,
                            selEnd: t1.target.selectionEnd
                        }
                    }));
                });
                const s = u;
                u = null, i.addEventListener("blur", (t1)=>{
                    if (!o.focused || !t1.relatedTarget) return;
                    this.data.actions?.Blur || (o.focused = !1);
                    const { target: i } = t1;
                    let { value: n } = i;
                    if (d) {
                        if (n && "time" === h) {
                            const t1 = n.split(":").map((t1)=>parseInt(t1, 10));
                            n = new Date(2e3, 0, 1, t1[0], t1[1], t1[2] || 0).valueOf(), i.step = "";
                        } else n.includes("T") || (n = `${n}T00:00`), n = new Date(n).valueOf();
                        i.type = "text";
                    }
                    o.userValue = n, o.lastCommittedValue !== n && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                            id: e,
                            name: "Keystroke",
                            value: n,
                            willCommit: !0,
                            commitKey: o.commitKey,
                            selStart: t1.target.selectionStart,
                            selEnd: t1.target.selectionEnd
                        }
                    }), s(t1);
                }), this.data.actions?.Keystroke && i.addEventListener("beforeinput", (t1)=>{
                    o.lastCommittedValue = null;
                    const { data: i, target: s } = t1, { value: n, selectionStart: r, selectionEnd: a } = s;
                    let l = r, h = a;
                    switch(t1.inputType){
                        case "deleteWordBackward":
                            {
                                const t1 = n.substring(0, r).match(/\w*[^\w]*$/);
                                t1 && (l -= t1[0].length);
                                break;
                            }
                        case "deleteWordForward":
                            {
                                const t1 = n.substring(r).match(/^[^\w]*\w*/);
                                t1 && (h += t1[0].length);
                                break;
                            }
                        case "deleteContentBackward":
                            r === a && (l -= 1);
                            break;
                        case "deleteContentForward":
                            r === a && (h += 1);
                    }
                    t1.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                        source: this,
                        detail: {
                            id: e,
                            name: "Keystroke",
                            value: n,
                            change: i || "",
                            willCommit: !1,
                            selStart: l,
                            selEnd: h
                        }
                    });
                }), this._setEventListeners(i, o, [
                    [
                        "focus",
                        "Focus"
                    ],
                    [
                        "blur",
                        "Blur"
                    ],
                    [
                        "mousedown",
                        "Mouse Down"
                    ],
                    [
                        "mouseenter",
                        "Mouse Enter"
                    ],
                    [
                        "mouseleave",
                        "Mouse Exit"
                    ],
                    [
                        "mouseup",
                        "Mouse Up"
                    ]
                ], (t1)=>t1.target.value);
            }
            if (u && i.addEventListener("blur", u), this.data.comb) {
                const t1 = (this.data.rect[2] - this.data.rect[0]) / r;
                i.classList.add("comb"), i.style.letterSpacing = `calc(${t1}px * var(--total-scale-factor) - 1ch)`;
            }
        } else i = document.createElement("div"), i.textContent = this.data.fieldValue, i.style.verticalAlign = "middle", i.style.display = "table-cell", this.data.hasOwnCanvas && (i.hidden = !0);
        return this._setTextStyle(i), this._setBackgroundColor(i), this._setDefaultPropertiesFromJS(i), this.container.append(i), this.container;
    }
}
class fn extends gn {
    constructor(t1){
        super(t1, {
            isRenderable: !!t1.data.hasOwnCanvas
        });
    }
}
class bn extends gn {
    constructor(t1){
        super(t1, {
            isRenderable: t1.renderForms
        });
    }
    render() {
        const t1 = this.annotationStorage, e = this.data, i = e.id;
        let s = t1.getValue(i, {
            value: e.exportValue === e.fieldValue
        }).value;
        "string" == typeof s && (s = "Off" !== s, t1.setValue(i, {
            value: s
        })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
        const n = document.createElement("input");
        return on.add(n), n.setAttribute("data-element-id", i), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "checkbox", n.name = e.fieldName, s && n.setAttribute("checked", !0), n.setAttribute("exportValue", e.exportValue), n.tabIndex = 0, n.addEventListener("change", (s)=>{
            const { name: n, checked: r } = s.target;
            for (const a of this._getElementsByName(n, i)){
                const i = r && a.exportValue === e.exportValue;
                a.domElement && (a.domElement.checked = i), t1.setValue(a.id, {
                    value: i
                });
            }
            t1.setValue(i, {
                value: r
            });
        }), n.addEventListener("resetform", (t1)=>{
            const i = e.defaultFieldValue || "Off";
            t1.target.checked = i === e.exportValue;
        }), this.enableScripting && this.hasJSActions && (n.addEventListener("updatefromsandbox", (e)=>{
            const s = {
                value (e) {
                    e.target.checked = "Off" !== e.detail.value, t1.setValue(i, {
                        value: e.target.checked
                    });
                }
            };
            this._dispatchEventFromSandbox(s, e);
        }), this._setEventListeners(n, null, [
            [
                "change",
                "Validate"
            ],
            [
                "change",
                "Action"
            ],
            [
                "focus",
                "Focus"
            ],
            [
                "blur",
                "Blur"
            ],
            [
                "mousedown",
                "Mouse Down"
            ],
            [
                "mouseenter",
                "Mouse Enter"
            ],
            [
                "mouseleave",
                "Mouse Exit"
            ],
            [
                "mouseup",
                "Mouse Up"
            ]
        ], (t1)=>t1.target.checked)), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
    }
}
class vn extends gn {
    constructor(t1){
        super(t1, {
            isRenderable: t1.renderForms
        });
    }
    render() {
        this.container.classList.add("buttonWidgetAnnotation", "radioButton");
        const t1 = this.annotationStorage, e = this.data, i = e.id;
        let s = t1.getValue(i, {
            value: e.fieldValue === e.buttonValue
        }).value;
        if ("string" == typeof s && (s = s !== e.buttonValue, t1.setValue(i, {
            value: s
        })), s) for (const r of this._getElementsByName(e.fieldName, i))t1.setValue(r.id, {
            value: !1
        });
        const n = document.createElement("input");
        if (on.add(n), n.setAttribute("data-element-id", i), n.disabled = e.readOnly, this._setRequired(n, this.data.required), n.type = "radio", n.name = e.fieldName, s && n.setAttribute("checked", !0), n.tabIndex = 0, n.addEventListener("change", (e)=>{
            const { name: s, checked: n } = e.target;
            for (const r of this._getElementsByName(s, i))t1.setValue(r.id, {
                value: !1
            });
            t1.setValue(i, {
                value: n
            });
        }), n.addEventListener("resetform", (t1)=>{
            const i = e.defaultFieldValue;
            t1.target.checked = null != i && i === e.buttonValue;
        }), this.enableScripting && this.hasJSActions) {
            const s = e.buttonValue;
            n.addEventListener("updatefromsandbox", (e)=>{
                const n = {
                    value: (e)=>{
                        const n = s === e.detail.value;
                        for (const s of this._getElementsByName(e.target.name)){
                            const e = n && s.id === i;
                            s.domElement && (s.domElement.checked = e), t1.setValue(s.id, {
                                value: e
                            });
                        }
                    }
                };
                this._dispatchEventFromSandbox(n, e);
            }), this._setEventListeners(n, null, [
                [
                    "change",
                    "Validate"
                ],
                [
                    "change",
                    "Action"
                ],
                [
                    "focus",
                    "Focus"
                ],
                [
                    "blur",
                    "Blur"
                ],
                [
                    "mousedown",
                    "Mouse Down"
                ],
                [
                    "mouseenter",
                    "Mouse Enter"
                ],
                [
                    "mouseleave",
                    "Mouse Exit"
                ],
                [
                    "mouseup",
                    "Mouse Up"
                ]
            ], (t1)=>t1.target.checked);
        }
        return this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
    }
}
class yn extends un {
    constructor(t1){
        super(t1, {
            ignoreBorder: t1.data.hasAppearance
        });
    }
    render() {
        const t1 = super.render();
        t1.classList.add("buttonWidgetAnnotation", "pushButton");
        const e = t1.lastChild;
        return this.enableScripting && this.hasJSActions && e && (this._setDefaultPropertiesFromJS(e), e.addEventListener("updatefromsandbox", (t1)=>{
            this._dispatchEventFromSandbox({}, t1);
        })), t1;
    }
}
class wn extends gn {
    constructor(t1){
        super(t1, {
            isRenderable: t1.renderForms
        });
    }
    render() {
        this.container.classList.add("choiceWidgetAnnotation");
        const t1 = this.annotationStorage, e = this.data.id, i = t1.getValue(e, {
            value: this.data.fieldValue
        }), s = document.createElement("select");
        on.add(s), s.setAttribute("data-element-id", e), s.disabled = this.data.readOnly, this._setRequired(s, this.data.required), s.name = this.data.fieldName, s.tabIndex = 0;
        let n = this.data.combo && this.data.options.length > 0;
        this.data.combo || (s.size = this.data.options.length, this.data.multiSelect && (s.multiple = !0)), s.addEventListener("resetform", (t1)=>{
            const e = this.data.defaultFieldValue;
            for (const i of s.options)i.selected = i.value === e;
        });
        for (const h of this.data.options){
            const t1 = document.createElement("option");
            t1.textContent = h.displayValue, t1.value = h.exportValue, i.value.includes(h.exportValue) && (t1.setAttribute("selected", !0), n = !1), s.append(t1);
        }
        let r = null;
        if (n) {
            const t1 = document.createElement("option");
            t1.value = " ", t1.setAttribute("hidden", !0), t1.setAttribute("selected", !0), s.prepend(t1), r = ()=>{
                t1.remove(), s.removeEventListener("input", r), r = null;
            }, s.addEventListener("input", r);
        }
        const a = (t1)=>{
            const e = t1 ? "value" : "textContent", { options: i, multiple: n } = s;
            return n ? Array.prototype.filter.call(i, (t1)=>t1.selected).map((t1)=>t1[e]) : -1 === i.selectedIndex ? null : i[i.selectedIndex][e];
        };
        let o = a(!1);
        const l = (t1)=>{
            const e = t1.target.options;
            return Array.prototype.map.call(e, (t1)=>({
                    displayValue: t1.textContent,
                    exportValue: t1.value
                }));
        };
        return this.enableScripting && this.hasJSActions ? (s.addEventListener("updatefromsandbox", (i)=>{
            const n = {
                value (i) {
                    r?.();
                    const n = i.detail.value, l = new Set(Array.isArray(n) ? n : [
                        n
                    ]);
                    for (const t1 of s.options)t1.selected = l.has(t1.value);
                    t1.setValue(e, {
                        value: a(!0)
                    }), o = a(!1);
                },
                multipleSelection (t1) {
                    s.multiple = !0;
                },
                remove (i) {
                    const n = s.options, r = i.detail.remove;
                    if (n[r].selected = !1, s.remove(r), n.length > 0) {
                        -1 === Array.prototype.findIndex.call(n, (t1)=>t1.selected) && (n[0].selected = !0);
                    }
                    t1.setValue(e, {
                        value: a(!0),
                        items: l(i)
                    }), o = a(!1);
                },
                clear (i) {
                    for(; 0 !== s.length;)s.remove(0);
                    t1.setValue(e, {
                        value: null,
                        items: []
                    }), o = a(!1);
                },
                insert (i) {
                    const { index: n, displayValue: r, exportValue: h } = i.detail.insert, c = s.children[n], d = document.createElement("option");
                    d.textContent = r, d.value = h, c ? c.before(d) : s.append(d), t1.setValue(e, {
                        value: a(!0),
                        items: l(i)
                    }), o = a(!1);
                },
                items (i) {
                    const { items: n } = i.detail;
                    for(; 0 !== s.length;)s.remove(0);
                    for (const t1 of n){
                        const { displayValue: e, exportValue: i } = t1, n = document.createElement("option");
                        n.textContent = e, n.value = i, s.append(n);
                    }
                    s.options.length > 0 && (s.options[0].selected = !0), t1.setValue(e, {
                        value: a(!0),
                        items: l(i)
                    }), o = a(!1);
                },
                indices (i) {
                    const s = new Set(i.detail.indices);
                    for (const t1 of i.target.options)t1.selected = s.has(t1.index);
                    t1.setValue(e, {
                        value: a(!0)
                    }), o = a(!1);
                },
                editable (t1) {
                    t1.target.disabled = !t1.detail.editable;
                }
            };
            this._dispatchEventFromSandbox(n, i);
        }), s.addEventListener("input", (i)=>{
            const s = a(!0), n = a(!1);
            t1.setValue(e, {
                value: s
            }), i.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                    id: e,
                    name: "Keystroke",
                    value: o,
                    change: n,
                    changeEx: s,
                    willCommit: !1,
                    commitKey: 1,
                    keyDown: !1
                }
            });
        }), this._setEventListeners(s, null, [
            [
                "focus",
                "Focus"
            ],
            [
                "blur",
                "Blur"
            ],
            [
                "mousedown",
                "Mouse Down"
            ],
            [
                "mouseenter",
                "Mouse Enter"
            ],
            [
                "mouseleave",
                "Mouse Exit"
            ],
            [
                "mouseup",
                "Mouse Up"
            ],
            [
                "input",
                "Action"
            ],
            [
                "input",
                "Validate"
            ]
        ], (t1)=>t1.target.value)) : s.addEventListener("input", function(i) {
            t1.setValue(e, {
                value: a(!0)
            });
        }), this.data.combo && this._setTextStyle(s), this._setBackgroundColor(s), this._setDefaultPropertiesFromJS(s), this.container.append(s), this.container;
    }
}
class xn extends cn {
    constructor(t1){
        const { data: e, elements: i, parent: s } = t1, n = !!s._commentManager;
        if (super(t1, {
            isRenderable: !n && cn._hasPopupData(e)
        }), this.elements = i, n && cn._hasPopupData(e)) {
            const t1 = this.popup = this.#ar();
            for (const e of i)e.popup = t1;
        } else this.popup = null;
    }
    #ar() {
        return new An({
            container: this.container,
            color: this.data.color,
            titleObj: this.data.titleObj,
            modificationDate: this.data.modificationDate || this.data.creationDate,
            contentsObj: this.data.contentsObj,
            richText: this.data.richText,
            rect: this.data.rect,
            parentRect: this.data.parentRect || null,
            parent: this.parent,
            elements: this.elements,
            open: this.data.open,
            commentManager: this.parent._commentManager
        });
    }
    render() {
        const { container: t1 } = this;
        t1.classList.add("popupAnnotation"), t1.role = "comment";
        const e = this.popup = this.#ar(), i = [];
        for (const s of this.elements)s.popup = e, s.container.ariaHasPopup = "dialog", i.push(s.data.id), s.addHighlightArea();
        return this.container.setAttribute("aria-controls", i.map((t1)=>`${kt}${t1}`).join(",")), this.container;
    }
}
class An {
    #U = null;
    #or = this.#Xn.bind(this);
    #lr = this.#hr.bind(this);
    #cr = this.#dr.bind(this);
    #ur = this.#pr.bind(this);
    #gr = null;
    #xt = null;
    #mr = null;
    #fr = null;
    #br = null;
    #vr = null;
    #yr = null;
    #wr = !1;
    #xr = null;
    #Ar = null;
    #M = null;
    #_r = null;
    #Sr = null;
    #pe = null;
    #Er = null;
    #he = null;
    #Cr = null;
    #Zn = null;
    #Tr = !1;
    #Mr = null;
    #Dr = null;
    constructor({ container: t1, color: e, elements: i, titleObj: s, modificationDate: n, contentsObj: r, richText: a, parent: o, rect: l, parentRect: h, open: c, commentManager: d = null }){
        this.#xt = t1, this.#Cr = s, this.#mr = r, this.#he = a, this.#vr = o, this.#gr = e, this.#Er = l, this.#yr = h, this.#br = i, this.#U = d, this.#Mr = i[0], this.#fr = Yt.toDateObject(n), this.trigger = i.flatMap((t1)=>t1.getElementsToTriggerPopup()), d ? this.renderCommentButton() : (this.#Pr(), this.#xt.hidden = !0, c && this.#pr());
    }
    #Pr() {
        if (this.#Ar) return;
        this.#Ar = new AbortController;
        const { signal: t1 } = this.#Ar;
        for (const e of this.trigger)e.addEventListener("click", this.#ur, {
            signal: t1
        }), e.addEventListener("pointerenter", this.#cr, {
            signal: t1
        }), e.addEventListener("pointerleave", this.#lr, {
            signal: t1
        }), e.classList.add("popupTriggerArea");
        for (const e of this.#br)e.container?.addEventListener("keydown", this.#or, {
            signal: t1
        });
    }
    #kr() {
        const t1 = this.#br.find((t1)=>t1.hasCommentButton);
        t1 && (this.#Sr = t1._normalizePoint(t1.commentButtonPosition));
    }
    renderCommentButton() {
        if (this.#_r) return;
        if (this.#Sr || this.#kr(), !this.#Sr) return;
        const { signal: t1 } = this.#Ar = new AbortController, e = !!this.#Mr.extraPopupElement, i = ()=>{
            this.#U.toggleCommentPopup(this, !0, void 0, !e);
        }, s = ()=>{
            this.#U.toggleCommentPopup(this, !1, !0, !e);
        }, n = ()=>{
            this.#U.toggleCommentPopup(this, !1, !1);
        };
        if (e) {
            this.#_r = this.#Mr.container;
            for (const e of this.trigger)e.ariaHasPopup = "dialog", e.ariaControls = "commentPopup", e.addEventListener("keydown", this.#or, {
                signal: t1
            }), e.addEventListener("click", i, {
                signal: t1
            }), e.addEventListener("pointerenter", s, {
                signal: t1
            }), e.addEventListener("pointerleave", n, {
                signal: t1
            }), e.classList.add("popupTriggerArea");
        } else {
            const e = this.#_r = document.createElement("button");
            e.className = "annotationCommentButton";
            const r = this.#Mr.container;
            e.style.zIndex = r.style.zIndex + 1, e.tabIndex = 0, e.ariaHasPopup = "dialog", e.ariaControls = "commentPopup", e.setAttribute("data-l10n-id", "pdfjs-show-comment-button"), this.#Ir(), this.#Rr(), e.addEventListener("keydown", this.#or, {
                signal: t1
            }), e.addEventListener("click", i, {
                signal: t1
            }), e.addEventListener("pointerenter", s, {
                signal: t1
            }), e.addEventListener("pointerleave", n, {
                signal: t1
            }), r.after(e);
        }
    }
    #Rr() {
        if (this.#Mr.extraPopupElement && !this.#Mr.editor) return;
        this.renderCommentButton();
        const [t1, e] = this.#Sr, { style: i } = this.#_r;
        i.left = `calc(${t1}%)`, i.top = `calc(${e}% - var(--comment-button-dim))`;
    }
    #Ir() {
        this.#Mr.extraPopupElement || (this.renderCommentButton(), this.#_r.style.backgroundColor = this.commentButtonColor || "");
    }
    get commentButtonColor() {
        const { color: t1, opacity: e } = this.#Mr.commentData;
        return t1 ? this.#vr._commentManager.makeCommentColor(t1, e) : null;
    }
    focusCommentButton() {
        setTimeout(()=>{
            this.#_r?.focus();
        }, 0);
    }
    getData() {
        const { richText: t1, color: e, opacity: i, creationDate: s, modificationDate: n } = this.#Mr.commentData;
        return {
            contentsObj: {
                str: this.comment
            },
            richText: t1,
            color: e,
            opacity: i,
            creationDate: s,
            modificationDate: n
        };
    }
    get elementBeforePopup() {
        return this.#_r;
    }
    get comment() {
        return this.#Dr ||= this.#Mr.commentText, this.#Dr;
    }
    set comment(t1) {
        t1 !== this.comment && (this.#Mr.commentText = this.#Dr = t1);
    }
    get parentBoundingClientRect() {
        return this.#Mr.layer.getBoundingClientRect();
    }
    setCommentButtonStates({ selected: t1, hasPopup: e }) {
        this.#_r && (this.#_r.classList.toggle("selected", t1), this.#_r.ariaExpanded = e);
    }
    setSelectedCommentButton(t1) {
        this.#_r.classList.toggle("selected", t1);
    }
    get commentPopupPosition() {
        if (this.#pe) return this.#pe;
        const { x: t1, y: e, height: i } = this.#_r.getBoundingClientRect(), { x: s, y: n, width: r, height: a } = this.#Mr.layer.getBoundingClientRect();
        return [
            (t1 - s) / r,
            (e + i - n) / a
        ];
    }
    set commentPopupPosition(t1) {
        this.#pe = t1;
    }
    hasDefaultPopupPosition() {
        return null === this.#pe;
    }
    get commentButtonPosition() {
        return this.#Sr;
    }
    get commentButtonWidth() {
        return this.#_r.getBoundingClientRect().width / this.parentBoundingClientRect.width;
    }
    editComment(t1) {
        const [e, i] = this.#pe || this.commentButtonPosition.map((t1)=>t1 / 100), s = this.parentBoundingClientRect, { x: n, y: r, width: a, height: o } = s;
        this.#U.showDialog(null, this, n + e * a, r + i * o, {
            ...t1,
            parentDimensions: s
        });
    }
    render() {
        if (this.#xr) return;
        const t1 = this.#xr = document.createElement("div");
        if (t1.className = "popup", this.#gr) {
            const e = t1.style.outlineColor = Ct.makeHexColor(...this.#gr);
            t1.style.backgroundColor = `color-mix(in srgb, ${e} 30%, white)`;
        }
        const e = document.createElement("span");
        if (e.className = "header", this.#Cr?.str) {
            const t1 = document.createElement("span");
            t1.className = "title", e.append(t1), { dir: t1.dir, str: t1.textContent } = this.#Cr;
        }
        if (t1.append(e), this.#fr) {
            const t1 = document.createElement("time");
            t1.className = "popupDate", t1.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"), t1.setAttribute("data-l10n-args", JSON.stringify({
                dateObj: this.#fr.valueOf()
            })), t1.dateTime = this.#fr.toISOString(), e.append(t1);
        }
        ue({
            html: this.#Lr || this.#mr.str,
            dir: this.#mr?.dir,
            className: "popupContent"
        }, t1), this.#xt.append(t1);
    }
    get #Lr() {
        const t1 = this.#he, e = this.#mr;
        return !t1?.str || e?.str && e.str !== t1.str ? null : this.#he.html || null;
    }
    get #Br() {
        return this.#Lr?.attributes?.style?.fontSize || 0;
    }
    get #Fr() {
        return this.#Lr?.attributes?.style?.color || null;
    }
    #Or(t1) {
        const e = [], i = {
            str: t1,
            html: {
                name: "div",
                attributes: {
                    dir: "auto"
                },
                children: [
                    {
                        name: "p",
                        children: e
                    }
                ]
            }
        }, s = {
            style: {
                color: this.#Fr,
                fontSize: this.#Br ? `calc(${this.#Br}px * var(--total-scale-factor))` : ""
            }
        };
        for (const n of t1.split("\n"))e.push({
            name: "span",
            value: n,
            attributes: s
        });
        return i;
    }
    #Xn(t1) {
        t1.altKey || t1.shiftKey || t1.ctrlKey || t1.metaKey || ("Enter" === t1.key || "Escape" === t1.key && this.#wr) && this.#pr();
    }
    updateEdited({ rect: t1, popup: e, deleted: i }) {
        if (this.#U) return i ? (this.remove(), this.#Dr = null) : e && (e.deleted ? this.remove() : (this.#Ir(), this.#Dr = e.text)), void (t1 && (this.#Sr = null, this.#kr(), this.#Rr()));
        i || e?.deleted ? this.remove() : (this.#Pr(), this.#Zn ||= {
            contentsObj: this.#mr,
            richText: this.#he
        }, t1 && (this.#M = null), e && e.text && (this.#he = this.#Or(e.text), this.#fr = Yt.toDateObject(e.date), this.#mr = null), this.#xr?.remove(), this.#xr = null);
    }
    resetEdited() {
        this.#Zn && ({ contentsObj: this.#mr, richText: this.#he } = this.#Zn, this.#Zn = null, this.#xr?.remove(), this.#xr = null, this.#M = null);
    }
    remove() {
        if (this.#Ar?.abort(), this.#Ar = null, this.#xr?.remove(), this.#xr = null, this.#Tr = !1, this.#wr = !1, this.#_r?.remove(), this.#_r = null, this.trigger) for (const t1 of this.trigger)t1.classList.remove("popupTriggerArea");
    }
    #Nr() {
        if (null !== this.#M) return;
        const { page: { view: t1 }, viewport: { rawDims: { pageWidth: e, pageHeight: i, pageX: s, pageY: n } } } = this.#vr;
        let r = !!this.#yr, a = r ? this.#yr : this.#Er;
        for (const u of this.#br)if (!a || null !== Ct.intersect(u.data.rect, a)) {
            a = u.data.rect, r = !0;
            break;
        }
        const o = Ct.normalizeRect([
            a[0],
            t1[3] - a[1] + t1[1],
            a[2],
            t1[3] - a[3] + t1[1]
        ]), l = r ? a[2] - a[0] + 5 : 0, h = o[0] + l, c = o[1];
        this.#M = [
            100 * (h - s) / e,
            100 * (c - n) / i
        ];
        const { style: d } = this.#xt;
        d.left = `${this.#M[0]}%`, d.top = `${this.#M[1]}%`;
    }
    #pr() {
        this.#U ? this.#U.toggleCommentPopup(this, !1) : (this.#wr = !this.#wr, this.#wr ? (this.#dr(), this.#xt.addEventListener("click", this.#ur), this.#xt.addEventListener("keydown", this.#or)) : (this.#hr(), this.#xt.removeEventListener("click", this.#ur), this.#xt.removeEventListener("keydown", this.#or)));
    }
    #dr() {
        this.#xr || this.render(), this.isVisible ? this.#wr && this.#xt.classList.add("focused") : (this.#Nr(), this.#xt.hidden = !1, this.#xt.style.zIndex = parseInt(this.#xt.style.zIndex) + 1e3);
    }
    #hr() {
        this.#xt.classList.remove("focused"), !this.#wr && this.isVisible && (this.#xt.hidden = !0, this.#xt.style.zIndex = parseInt(this.#xt.style.zIndex) - 1e3);
    }
    forceHide() {
        this.#Tr = this.isVisible, this.#Tr && (this.#xt.hidden = !0);
    }
    maybeShow() {
        this.#U || (this.#Pr(), this.#Tr && (this.#xr || this.#dr(), this.#Tr = !1, this.#xt.hidden = !1));
    }
    get isVisible() {
        return !this.#U && !1 === this.#xt.hidden;
    }
}
class _n extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        }), this.textContent = t1.data.textContent, this.textPosition = t1.data.textPosition, this.annotationEditorType = O.FREETEXT;
    }
    render() {
        if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
            const t1 = document.createElement("div");
            t1.classList.add("annotationTextContent"), t1.setAttribute("role", "comment");
            for (const e of this.textContent){
                const i = document.createElement("span");
                i.textContent = e, t1.append(i);
            }
            this.container.append(t1);
        }
        return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
}
class Sn extends cn {
    #Ur = null;
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        });
    }
    render() {
        this.container.classList.add("lineAnnotation");
        const { data: t1, width: e, height: i } = this, s = this.svgFactory.create(e, i, !0), n = this.#Ur = this.svgFactory.createElement("svg:line");
        return n.setAttribute("x1", t1.rect[2] - t1.lineCoordinates[0]), n.setAttribute("y1", t1.rect[3] - t1.lineCoordinates[1]), n.setAttribute("x2", t1.rect[2] - t1.lineCoordinates[2]), n.setAttribute("y2", t1.rect[3] - t1.lineCoordinates[3]), n.setAttribute("stroke-width", t1.borderStyle.width || 1), n.setAttribute("stroke", "transparent"), n.setAttribute("fill", "transparent"), s.append(n), this.container.append(s), !t1.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
        return this.#Ur;
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
class En extends cn {
    #zr = null;
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        });
    }
    render() {
        this.container.classList.add("squareAnnotation");
        const { data: t1, width: e, height: i } = this, s = this.svgFactory.create(e, i, !0), n = t1.borderStyle.width, r = this.#zr = this.svgFactory.createElement("svg:rect");
        return r.setAttribute("x", n / 2), r.setAttribute("y", n / 2), r.setAttribute("width", e - n), r.setAttribute("height", i - n), r.setAttribute("stroke-width", n || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), s.append(r), this.container.append(s), !t1.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
        return this.#zr;
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
class Cn extends cn {
    #Hr = null;
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        });
    }
    render() {
        this.container.classList.add("circleAnnotation");
        const { data: t1, width: e, height: i } = this, s = this.svgFactory.create(e, i, !0), n = t1.borderStyle.width, r = this.#Hr = this.svgFactory.createElement("svg:ellipse");
        return r.setAttribute("cx", e / 2), r.setAttribute("cy", i / 2), r.setAttribute("rx", e / 2 - n / 2), r.setAttribute("ry", i / 2 - n / 2), r.setAttribute("stroke-width", n || 1), r.setAttribute("stroke", "transparent"), r.setAttribute("fill", "transparent"), s.append(r), this.container.append(s), !t1.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
        return this.#Hr;
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
class Tn extends cn {
    #jr = null;
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
    }
    render() {
        this.container.classList.add(this.containerClassName);
        const { data: { rect: t1, vertices: e, borderStyle: i, popupRef: s }, width: n, height: r } = this;
        if (!e) return this.container;
        const a = this.svgFactory.create(n, r, !0);
        let o = [];
        for(let h = 0, c = e.length; h < c; h += 2){
            const i = e[h] - t1[0], s = t1[3] - e[h + 1];
            o.push(`${i},${s}`);
        }
        o = o.join(" ");
        const l = this.#jr = this.svgFactory.createElement(this.svgElementName);
        return l.setAttribute("points", o), l.setAttribute("stroke-width", i.width || 1), l.setAttribute("stroke", "transparent"), l.setAttribute("fill", "transparent"), a.append(l), this.container.append(a), !s && this.hasPopupData && this._createPopup(), this.container;
    }
    getElementsToTriggerPopup() {
        return this.#jr;
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
class Mn extends Tn {
    constructor(t1){
        super(t1), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
    }
}
class Dn extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        });
    }
    render() {
        return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
    }
}
class Pn extends cn {
    #$r = null;
    #Vr = [];
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = "InkHighlight" === this.data.it ? O.HIGHLIGHT : O.INK;
    }
    #Gr(t1, e) {
        switch(t1){
            case 90:
                return {
                    transform: `rotate(90) translate(${-e[0]},${e[1]}) scale(1,-1)`,
                    width: e[3] - e[1],
                    height: e[2] - e[0]
                };
            case 180:
                return {
                    transform: `rotate(180) translate(${-e[2]},${e[1]}) scale(1,-1)`,
                    width: e[2] - e[0],
                    height: e[3] - e[1]
                };
            case 270:
                return {
                    transform: `rotate(270) translate(${-e[2]},${e[3]}) scale(1,-1)`,
                    width: e[3] - e[1],
                    height: e[2] - e[0]
                };
            default:
                return {
                    transform: `translate(${-e[0]},${e[3]}) scale(1,-1)`,
                    width: e[2] - e[0],
                    height: e[3] - e[1]
                };
        }
    }
    render() {
        this.container.classList.add(this.containerClassName);
        const { data: { rect: t1, rotation: e, inkLists: i, borderStyle: s, popupRef: n } } = this, { transform: r, width: a, height: o } = this.#Gr(e, t1), l = this.svgFactory.create(a, o, !0), h = this.#$r = this.svgFactory.createElement("svg:g");
        l.append(h), h.setAttribute("stroke-width", s.width || 1), h.setAttribute("stroke-linecap", "round"), h.setAttribute("stroke-linejoin", "round"), h.setAttribute("stroke-miterlimit", 10), h.setAttribute("stroke", "transparent"), h.setAttribute("fill", "transparent"), h.setAttribute("transform", r);
        for(let c = 0, d = i.length; c < d; c++){
            const t1 = this.svgFactory.createElement(this.svgElementName);
            this.#Vr.push(t1), t1.setAttribute("points", i[c].join(",")), h.append(t1);
        }
        return !n && this.hasPopupData && this._createPopup(), this.container.append(l), this._editOnDoubleClick(), this.container;
    }
    updateEdited(t1) {
        super.updateEdited(t1);
        const { thickness: e, points: i, rect: s } = t1, n = this.#$r;
        if (e >= 0 && n.setAttribute("stroke-width", e || 1), i) for(let r = 0, a = this.#Vr.length; r < a; r++)this.#Vr[r].setAttribute("points", i[r].join(","));
        if (s) {
            const { transform: t1, width: e, height: i } = this.#Gr(this.data.rotation, s);
            n.parentElement.setAttribute("viewBox", `0 0 ${e} ${i}`), n.setAttribute("transform", t1);
        }
    }
    getElementsToTriggerPopup() {
        return this.#Vr;
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
}
class kn extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0,
            createQuadrilaterals: !0
        }), this.annotationEditorType = O.HIGHLIGHT;
    }
    render() {
        const { data: { overlaidText: t1, popupRef: e } } = this;
        if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this._editOnDoubleClick(), t1) {
            const e = document.createElement("mark");
            e.classList.add("overlaidText"), e.textContent = t1, this.container.append(e);
        }
        return this.container;
    }
}
class In extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0,
            createQuadrilaterals: !0
        });
    }
    render() {
        const { data: { overlaidText: t1, popupRef: e } } = this;
        if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), t1) {
            const e = document.createElement("u");
            e.classList.add("overlaidText"), e.textContent = t1, this.container.append(e);
        }
        return this.container;
    }
}
class Rn extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0,
            createQuadrilaterals: !0
        });
    }
    render() {
        const { data: { overlaidText: t1, popupRef: e } } = this;
        if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), t1) {
            const e = document.createElement("u");
            e.classList.add("overlaidText"), e.textContent = t1, this.container.append(e);
        }
        return this.container;
    }
}
class Ln extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0,
            createQuadrilaterals: !0
        });
    }
    render() {
        const { data: { overlaidText: t1, popupRef: e } } = this;
        if (!e && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), t1) {
            const e = document.createElement("s");
            e.classList.add("overlaidText"), e.textContent = t1, this.container.append(e);
        }
        return this.container;
    }
}
class Bn extends cn {
    constructor(t1){
        super(t1, {
            isRenderable: !0,
            ignoreBorder: !0
        }), this.annotationEditorType = O.STAMP;
    }
    render() {
        return this.container.classList.add("stampAnnotation"), this.container.setAttribute("role", "img"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
    }
}
class Fn extends cn {
    #Wr = null;
    constructor(t1){
        super(t1, {
            isRenderable: !0
        });
        const { file: e } = this.data;
        this.filename = e.filename, this.content = e.content, this.linkService.eventBus?.dispatch("fileattachmentannotation", {
            source: this,
            ...e
        });
    }
    render() {
        this.container.classList.add("fileAttachmentAnnotation");
        const { container: t1, data: e } = this;
        let i;
        e.hasAppearance || 0 === e.fillAlpha ? i = document.createElement("div") : (i = document.createElement("img"), i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`, e.fillAlpha && e.fillAlpha < 1 && (i.style = `filter: opacity(${Math.round(100 * e.fillAlpha)}%);`)), i.addEventListener("dblclick", this.#qr.bind(this)), this.#Wr = i;
        const { isMac: s } = St.platform;
        return t1.addEventListener("keydown", (t1)=>{
            "Enter" === t1.key && (s ? t1.metaKey : t1.ctrlKey) && this.#qr();
        }), !e.popupRef && this.hasPopupData ? this._createPopup() : i.classList.add("popupTriggerArea"), t1.append(i), t1;
    }
    getElementsToTriggerPopup() {
        return this.#Wr;
    }
    addHighlightArea() {
        this.container.classList.add("highlightArea");
    }
    #qr() {
        this.downloadManager?.openOrDownloadData(this.content, this.filename);
    }
}
class On {
    #Xr = null;
    #Yr = null;
    #F = null;
    #Kr = new Map;
    #Qr = null;
    #Jr = null;
    constructor({ div: t1, accessibilityManager: e, annotationCanvasMap: i, annotationEditorUIManager: s, page: n, viewport: r, structTreeLayer: a, commentManager: o, linkService: l, annotationStorage: h }){
        this.div = t1, this.#Xr = e, this.#Yr = i, this.#Qr = a || null, this.#Jr = l || null, this.#F = h || new Ie, this.page = n, this.viewport = r, this.zIndex = 0, this._annotationEditorUIManager = s, this._commentManager = o || null;
    }
    hasEditableAnnotations() {
        return this.#Kr.size > 0;
    }
    async #Zr(t1, e, i) {
        const s = t1.firstChild || t1, n = s.id = `${kt}${e}`, r = await this.#Qr?.getAriaAttributes(n);
        if (r) for (const [a, o] of r)s.setAttribute(a, o);
        i ? i.at(-1).container.after(t1) : (this.div.append(t1), this.#Xr?.moveElementInDOM(this.div, t1, s, !1));
    }
    async render(t1) {
        const { annotations: e } = t1, i = this.div;
        te(i, this.viewport);
        const s = new Map, n = {
            data: null,
            layer: i,
            linkService: this.#Jr,
            downloadManager: t1.downloadManager,
            imageResourcesPath: t1.imageResourcesPath || "",
            renderForms: !1 !== t1.renderForms,
            svgFactory: new an,
            annotationStorage: this.#F,
            enableComment: !0 === t1.enableComment,
            enableScripting: !0 === t1.enableScripting,
            hasJSActions: t1.hasJSActions,
            fieldObjects: t1.fieldObjects,
            parent: this,
            elements: null
        };
        for (const r of e){
            if (r.noHTML) continue;
            const t1 = r.annotationType === q.POPUP;
            if (t1) {
                const t1 = s.get(r.id);
                if (!t1) continue;
                n.elements = t1;
            } else if (r.rect[2] === r.rect[0] || r.rect[3] === r.rect[1]) continue;
            n.data = r;
            const e = hn.create(n);
            if (!e.isRenderable) continue;
            if (!t1 && r.popupRef) {
                const t1 = s.get(r.popupRef);
                t1 ? t1.push(e) : s.set(r.popupRef, [
                    e
                ]);
            }
            const i = e.render();
            r.hidden && (i.style.visibility = "hidden"), await this.#Zr(i, r.id, n.elements), e.extraPopupElement?.popup?.renderCommentButton(), e._isEditable && (this.#Kr.set(e.data.id, e), this._annotationEditorUIManager?.renderAnnotationElement(e));
        }
        this.#ta();
    }
    async addLinkAnnotations(t1) {
        const e = {
            data: null,
            layer: this.div,
            linkService: this.#Jr,
            svgFactory: new an,
            parent: this
        };
        for (const i of t1){
            i.borderStyle ||= On._defaultBorderStyle, e.data = i;
            const t1 = hn.create(e);
            if (!t1.isRenderable) continue;
            const s = t1.render();
            await this.#Zr(s, i.id, null);
        }
    }
    update({ viewport: t1 }) {
        const e = this.div;
        this.viewport = t1, te(e, {
            rotation: t1.rotation
        }), this.#ta(), e.hidden = !1;
    }
    #ta() {
        if (!this.#Yr) return;
        const t1 = this.div;
        for (const [e, i] of this.#Yr){
            const s = t1.querySelector(`[data-annotation-id="${e}"]`);
            if (!s) continue;
            i.className = "annotationContent";
            const { firstChild: n } = s;
            n ? "CANVAS" === n.nodeName ? n.replaceWith(i) : n.classList.contains("annotationContent") ? n.after(i) : n.before(i) : s.append(i);
            const r = this.#Kr.get(e);
            r && (r._hasNoCanvas ? (this._annotationEditorUIManager?.setMissingCanvas(e, s.id, i), r._hasNoCanvas = !1) : r.canvas = i);
        }
        this.#Yr.clear();
    }
    getEditableAnnotations() {
        return Array.from(this.#Kr.values());
    }
    getEditableAnnotation(t1) {
        return this.#Kr.get(t1);
    }
    addFakeAnnotation(t1) {
        const { div: e } = this, { id: i, rotation: s } = t1, n = new dn({
            data: {
                id: i,
                rect: t1.getPDFRect(),
                rotation: s
            },
            editor: t1,
            layer: e,
            parent: this,
            enableComment: !!this._commentManager,
            linkService: this.#Jr,
            annotationStorage: this.#F
        }), r = n.render();
        return e.append(r), this.#Xr?.moveElementInDOM(e, r, r, !1), n.createOrUpdatePopup(), n;
    }
    static get _defaultBorderStyle() {
        return gt(this, "_defaultBorderStyle", Object.freeze({
            width: 1,
            rawWidth: 1,
            style: X,
            dashArray: [
                3
            ],
            horizontalCornerRadius: 0,
            verticalCornerRadius: 0
        }));
    }
}
const Nn = /\r\n?|\n/g;
class Un extends Ee {
    #ea = "";
    #ia = `${this.id}-editor`;
    #sa = null;
    #Br;
    _colorPicker = null;
    static _freeTextDefaultContent = "";
    static _internalPadding = 0;
    static _defaultColor = null;
    static _defaultFontSize = 10;
    static get _keyboardManager() {
        const t1 = Un.prototype, e = (t1)=>t1.isEmpty(), i = xe.TRANSLATE_SMALL, s = xe.TRANSLATE_BIG;
        return gt(this, "_keyboardManager", new ye([
            [
                [
                    "ctrl+s",
                    "mac+meta+s",
                    "ctrl+p",
                    "mac+meta+p"
                ],
                t1.commitOrRemove,
                {
                    bubbles: !0
                }
            ],
            [
                [
                    "ctrl+Enter",
                    "mac+meta+Enter",
                    "Escape",
                    "mac+Escape"
                ],
                t1.commitOrRemove
            ],
            [
                [
                    "ArrowLeft",
                    "mac+ArrowLeft"
                ],
                t1._translateEmpty,
                {
                    args: [
                        -i,
                        0
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ctrl+ArrowLeft",
                    "mac+shift+ArrowLeft"
                ],
                t1._translateEmpty,
                {
                    args: [
                        -s,
                        0
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ArrowRight",
                    "mac+ArrowRight"
                ],
                t1._translateEmpty,
                {
                    args: [
                        i,
                        0
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ctrl+ArrowRight",
                    "mac+shift+ArrowRight"
                ],
                t1._translateEmpty,
                {
                    args: [
                        s,
                        0
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ArrowUp",
                    "mac+ArrowUp"
                ],
                t1._translateEmpty,
                {
                    args: [
                        0,
                        -i
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ctrl+ArrowUp",
                    "mac+shift+ArrowUp"
                ],
                t1._translateEmpty,
                {
                    args: [
                        0,
                        -s
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ArrowDown",
                    "mac+ArrowDown"
                ],
                t1._translateEmpty,
                {
                    args: [
                        0,
                        i
                    ],
                    checker: e
                }
            ],
            [
                [
                    "ctrl+ArrowDown",
                    "mac+shift+ArrowDown"
                ],
                t1._translateEmpty,
                {
                    args: [
                        0,
                        s
                    ],
                    checker: e
                }
            ]
        ]));
    }
    static _type = "freetext";
    static _editorType = O.FREETEXT;
    constructor(t1){
        super({
            ...t1,
            name: "freeTextEditor"
        }), this.color = t1.color || Un._defaultColor || Ee._defaultLineColor, this.#Br = t1.fontSize || Un._defaultFontSize, this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-freetext-added-alert");
    }
    static initialize(t1, e) {
        Ee.initialize(t1, e);
        const i = getComputedStyle(document.documentElement);
        this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
    }
    static updateDefaultParams(t1, e) {
        switch(t1){
            case N.FREETEXT_SIZE:
                Un._defaultFontSize = e;
                break;
            case N.FREETEXT_COLOR:
                Un._defaultColor = e;
        }
    }
    updateParams(t1, e) {
        switch(t1){
            case N.FREETEXT_SIZE:
                this.#na(e);
                break;
            case N.FREETEXT_COLOR:
                this.#Ir(e);
        }
    }
    static get defaultPropertiesToUpdate() {
        return [
            [
                N.FREETEXT_SIZE,
                Un._defaultFontSize
            ],
            [
                N.FREETEXT_COLOR,
                Un._defaultColor || Ee._defaultLineColor
            ]
        ];
    }
    get propertiesToUpdate() {
        return [
            [
                N.FREETEXT_SIZE,
                this.#Br
            ],
            [
                N.FREETEXT_COLOR,
                this.color
            ]
        ];
    }
    get toolbarButtons() {
        return this._colorPicker ||= new tn(this), [
            [
                "colorPicker",
                this._colorPicker
            ]
        ];
    }
    get colorType() {
        return N.FREETEXT_COLOR;
    }
    #na(t1) {
        const e = (t1)=>{
            this.editorDiv.style.fontSize = `calc(${t1}px * var(--total-scale-factor))`, this.translate(0, -(t1 - this.#Br) * this.parentScale), this.#Br = t1, this.#ra();
        }, i = this.#Br;
        this.addCommands({
            cmd: e.bind(this, t1),
            undo: e.bind(this, i),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: N.FREETEXT_SIZE,
            overwriteIfSameType: !0,
            keepUndo: !0
        });
    }
    onUpdatedColor() {
        this.editorDiv.style.color = this.color, this._colorPicker?.update(this.color), super.onUpdatedColor();
    }
    #Ir(t1) {
        const e = (t1)=>{
            this.color = t1, this.onUpdatedColor();
        }, i = this.color;
        this.addCommands({
            cmd: e.bind(this, t1),
            undo: e.bind(this, i),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: N.FREETEXT_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
        });
    }
    _translateEmpty(t1, e) {
        this._uiManager.translateSelectedEditors(t1, e, !0);
    }
    getInitialTranslation() {
        const t1 = this.parentScale;
        return [
            -Un._internalPadding * t1,
            -(Un._internalPadding + this.#Br) * t1
        ];
    }
    rebuild() {
        this.parent && (super.rebuild(), null !== this.div && (this.isAttachedToDOM || this.parent.add(this)));
    }
    enableEditMode() {
        if (!super.enableEditMode()) return !1;
        this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.#sa = new AbortController;
        const t1 = this._uiManager.combinedSignal(this.#sa);
        return this.editorDiv.addEventListener("keydown", this.editorDivKeydown.bind(this), {
            signal: t1
        }), this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
            signal: t1
        }), this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
            signal: t1
        }), this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
            signal: t1
        }), this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
            signal: t1
        }), !0;
    }
    disableEditMode() {
        return !!super.disableEditMode() && (this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", this.#ia), this._isDraggable = !0, this.#sa?.abort(), this.#sa = null, this.div.focus({
            preventScroll: !0
        }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"), !0);
    }
    focusin(t1) {
        this._focusEventsAllowed && (super.focusin(t1), t1.target !== this.editorDiv && this.editorDiv.focus());
    }
    onceAdded(t1) {
        this.width || (this.enableEditMode(), t1 && this.editorDiv.focus(), this._initialOptions?.isCentered && this.center(), this._initialOptions = null);
    }
    isEmpty() {
        return !this.editorDiv || "" === this.editorDiv.innerText.trim();
    }
    remove() {
        this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
    }
    #aa() {
        const t1 = [];
        this.editorDiv.normalize();
        let e = null;
        for (const i of this.editorDiv.childNodes)e?.nodeType === Node.TEXT_NODE && "BR" === i.nodeName || (t1.push(Un.#oa(i)), e = i);
        return t1.join("\n");
    }
    #ra() {
        const [t1, e] = this.parentDimensions;
        let i;
        if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
        else {
            const { currentLayer: t1, div: e } = this, s = e.style.display, n = e.classList.contains("hidden");
            e.classList.remove("hidden"), e.style.display = "hidden", t1.div.append(this.div), i = e.getBoundingClientRect(), e.remove(), e.style.display = s, e.classList.toggle("hidden", n);
        }
        this.rotation % 180 == this.parentRotation % 180 ? (this.width = i.width / t1, this.height = i.height / e) : (this.width = i.height / t1, this.height = i.width / e), this.fixAndSetPosition();
    }
    commit() {
        if (!this.isInEditMode()) return;
        super.commit(), this.disableEditMode();
        const t1 = this.#ea, e = this.#ea = this.#aa().trimEnd();
        if (t1 === e) return;
        const i = (t1)=>{
            this.#ea = t1, t1 ? (this.#la(), this._uiManager.rebuild(this), this.#ra()) : this.remove();
        };
        this.addCommands({
            cmd: ()=>{
                i(e);
            },
            undo: ()=>{
                i(t1);
            },
            mustExec: !1
        }), this.#ra();
    }
    shouldGetKeyboardEvents() {
        return this.isInEditMode();
    }
    enterInEditMode() {
        this.enableEditMode(), this.editorDiv.focus();
    }
    keydown(t1) {
        t1.target === this.div && "Enter" === t1.key && (this.enterInEditMode(), t1.preventDefault());
    }
    editorDivKeydown(t1) {
        Un._keyboardManager.exec(this, t1);
    }
    editorDivFocus(t1) {
        this.isEditing = !0;
    }
    editorDivBlur(t1) {
        this.isEditing = !1;
    }
    editorDivInput(t1) {
        this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
    }
    disableEditing() {
        this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
    }
    enableEditing() {
        this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
    }
    get canChangeContent() {
        return !0;
    }
    render() {
        if (this.div) return this.div;
        let t1, e;
        (this._isCopy || this.annotationElementId) && (t1 = this.x, e = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", this.#ia), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"), this.editorDiv.setAttribute("data-l10n-attrs", "default-content"), this.enableEditing(), this.editorDiv.contentEditable = !0;
        const { style: i } = this.editorDiv;
        if (i.fontSize = `calc(${this.#Br}px * var(--total-scale-factor))`, i.color = this.color, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), this._isCopy || this.annotationElementId) {
            const [i, s] = this.parentDimensions;
            if (this.annotationElementId) {
                const { position: n } = this._initialData;
                let [r, a] = this.getInitialTranslation();
                [r, a] = this.pageTranslationToScreen(r, a);
                const [o, l] = this.pageDimensions, [h, c] = this.pageTranslation;
                let d, u;
                switch(this.rotation){
                    case 0:
                        d = t1 + (n[0] - h) / o, u = e + this.height - (n[1] - c) / l;
                        break;
                    case 90:
                        d = t1 + (n[0] - h) / o, u = e - (n[1] - c) / l, [r, a] = [
                            a,
                            -r
                        ];
                        break;
                    case 180:
                        d = t1 - this.width + (n[0] - h) / o, u = e - (n[1] - c) / l, [r, a] = [
                            -r,
                            -a
                        ];
                        break;
                    case 270:
                        d = t1 + (n[0] - h - this.height * l) / o, u = e + (n[1] - c - this.width * o) / l, [r, a] = [
                            -a,
                            r
                        ];
                }
                this.setAt(d * i, u * s, r, a);
            } else this._moveAfterPaste(t1, e);
            this.#la(), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
        } else this._isDraggable = !1, this.editorDiv.contentEditable = !0;
        return this.div;
    }
    static #oa(t1) {
        return (t1.nodeType === Node.TEXT_NODE ? t1.nodeValue : t1.innerText).replaceAll(Nn, "");
    }
    editorDivPaste(t1) {
        const e = t1.clipboardData || window.clipboardData, { types: i } = e;
        if (1 === i.length && "text/plain" === i[0]) return;
        t1.preventDefault();
        const s = Un.#ha(e.getData("text") || "").replaceAll(Nn, "\n");
        if (!s) return;
        const n = window.getSelection();
        if (!n.rangeCount) return;
        this.editorDiv.normalize(), n.deleteFromDocument();
        const r = n.getRangeAt(0);
        if (!s.includes("\n")) return r.insertNode(document.createTextNode(s)), this.editorDiv.normalize(), void n.collapseToStart();
        const { startContainer: a, startOffset: o } = r, l = [], h = [];
        if (a.nodeType === Node.TEXT_NODE) {
            const t1 = a.parentElement;
            if (h.push(a.nodeValue.slice(o).replaceAll(Nn, "")), t1 !== this.editorDiv) {
                let e = l;
                for (const i of this.editorDiv.childNodes)i !== t1 ? e.push(Un.#oa(i)) : e = h;
            }
            l.push(a.nodeValue.slice(0, o).replaceAll(Nn, ""));
        } else if (a === this.editorDiv) {
            let t1 = l, e = 0;
            for (const i of this.editorDiv.childNodes)e++ === o && (t1 = h), t1.push(Un.#oa(i));
        }
        this.#ea = `${l.join("\n")}${s}${h.join("\n")}`, this.#la();
        const c = new Range;
        let d = Math.sumPrecise(l.map((t1)=>t1.length));
        for (const { firstChild: u } of this.editorDiv.childNodes)if (u.nodeType === Node.TEXT_NODE) {
            const t1 = u.nodeValue.length;
            if (d <= t1) {
                c.setStart(u, d), c.setEnd(u, d);
                break;
            }
            d -= t1;
        }
        n.removeAllRanges(), n.addRange(c);
    }
    #la() {
        if (this.editorDiv.replaceChildren(), this.#ea) for (const t1 of this.#ea.split("\n")){
            const e = document.createElement("div");
            e.append(t1 ? document.createTextNode(t1) : document.createElement("br")), this.editorDiv.append(e);
        }
    }
    #ca() {
        return this.#ea.replaceAll(" ", " ");
    }
    static #ha(t1) {
        return t1.replaceAll(" ", " ");
    }
    get contentDiv() {
        return this.editorDiv;
    }
    getPDFRect() {
        const t1 = Un._internalPadding * this.parentScale;
        return this.getRect(t1, t1);
    }
    static async deserialize(t1, e, i) {
        let s = null;
        if (t1 instanceof _n) {
            const { data: { defaultAppearanceData: { fontSize: e, fontColor: i }, rect: n, rotation: r, id: a, popupRef: o, richText: l, contentsObj: h, creationDate: c, modificationDate: d }, textContent: u, textPosition: p, parent: { page: { pageNumber: g } } } = t1;
            if (!u || 0 === u.length) return null;
            s = t1 = {
                annotationType: O.FREETEXT,
                color: Array.from(i),
                fontSize: e,
                value: u.join("\n"),
                position: p,
                pageIndex: g - 1,
                rect: n.slice(0),
                rotation: r,
                annotationElementId: a,
                id: a,
                deleted: !1,
                popupRef: o,
                comment: h?.str || null,
                richText: l,
                creationDate: c,
                modificationDate: d
            };
        }
        const n = await super.deserialize(t1, e, i);
        return n.#Br = t1.fontSize, n.color = Ct.makeHexColor(...t1.color), n.#ea = Un.#ha(t1.value), n._initialData = s, t1.comment && n.setCommentData(t1), n;
    }
    serialize(t1 = !1) {
        if (this.isEmpty()) return null;
        if (this.deleted) return this.serializeDeleted();
        const e = Ee._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.color), i = Object.assign(super.serialize(t1), {
            color: e,
            fontSize: this.#Br,
            value: this.#ca()
        });
        return this.addComment(i), t1 ? (i.isCopy = !0, i) : this.annotationElementId && !this.#da(i) ? null : (i.id = this.annotationElementId, i);
    }
    #da(t1) {
        const { value: e, fontSize: i, color: s, pageIndex: n } = this._initialData;
        return this.hasEditedComment || this._hasBeenMoved || t1.value !== e || t1.fontSize !== i || t1.color.some((t1, e)=>t1 !== s[e]) || t1.pageIndex !== n;
    }
    renderAnnotationElement(t1) {
        const e = super.renderAnnotationElement(t1);
        if (!e) return null;
        const { style: i } = e;
        i.fontSize = `calc(${this.#Br}px * var(--total-scale-factor))`, i.color = this.color, e.replaceChildren();
        for (const s of this.#ea.split("\n")){
            const t1 = document.createElement("div");
            t1.append(s ? document.createTextNode(s) : document.createElement("br")), e.append(t1);
        }
        return t1.updateEdited({
            rect: this.getPDFRect(),
            popup: this._uiManager.hasCommentManager() || this.hasEditedComment ? this.comment : {
                text: this.#ea
            }
        }), e;
    }
    resetAnnotationElement(t1) {
        super.resetAnnotationElement(t1), t1.resetEdited();
    }
}
class zn {
    static PRECISION = 1e-4;
    toSVGPath() {
        ct("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
        ct("Abstract getter `box` must be implemented.");
    }
    serialize(t1, e) {
        ct("Abstract method `serialize` must be implemented.");
    }
    static _rescale(t1, e, i, s, n, r) {
        r ||= new Float32Array(t1.length);
        for(let a = 0, o = t1.length; a < o; a += 2)r[a] = e + t1[a] * s, r[a + 1] = i + t1[a + 1] * n;
        return r;
    }
    static _rescaleAndSwap(t1, e, i, s, n, r) {
        r ||= new Float32Array(t1.length);
        for(let a = 0, o = t1.length; a < o; a += 2)r[a] = e + t1[a + 1] * s, r[a + 1] = i + t1[a] * n;
        return r;
    }
    static _translate(t1, e, i, s) {
        s ||= new Float32Array(t1.length);
        for(let n = 0, r = t1.length; n < r; n += 2)s[n] = e + t1[n], s[n + 1] = i + t1[n + 1];
        return s;
    }
    static svgRound(t1) {
        return Math.round(1e4 * t1);
    }
    static _normalizePoint(t1, e, i, s, n) {
        switch(n){
            case 90:
                return [
                    1 - e / i,
                    t1 / s
                ];
            case 180:
                return [
                    1 - t1 / i,
                    1 - e / s
                ];
            case 270:
                return [
                    e / i,
                    1 - t1 / s
                ];
            default:
                return [
                    t1 / i,
                    e / s
                ];
        }
    }
    static _normalizePagePoint(t1, e, i) {
        switch(i){
            case 90:
                return [
                    1 - e,
                    t1
                ];
            case 180:
                return [
                    1 - t1,
                    1 - e
                ];
            case 270:
                return [
                    e,
                    1 - t1
                ];
            default:
                return [
                    t1,
                    e
                ];
        }
    }
    static createBezierPoints(t1, e, i, s, n, r) {
        return [
            (t1 + 5 * i) / 6,
            (e + 5 * s) / 6,
            (5 * i + n) / 6,
            (5 * s + r) / 6,
            (i + n) / 2,
            (s + r) / 2
        ];
    }
}
class Hn {
    #ua;
    #pa = [];
    #ga;
    #ma;
    #fa = [];
    #ba = new Float32Array(18);
    #va;
    #ya;
    #wa;
    #xa;
    #Aa;
    #_a;
    #Sa = [];
    static #Ea = 8;
    static #Ca = 2;
    static #Ta = Hn.#Ea + Hn.#Ca;
    constructor({ x: t1, y: e }, i, s, n, r, a = 0){
        this.#ua = i, this.#_a = n * s, this.#ma = r, this.#ba.set([
            NaN,
            NaN,
            NaN,
            NaN,
            t1,
            e
        ], 6), this.#ga = a, this.#xa = Hn.#Ea * s, this.#wa = Hn.#Ta * s, this.#Aa = s, this.#Sa.push(t1, e);
    }
    isEmpty() {
        return isNaN(this.#ba[8]);
    }
    #Ma() {
        const t1 = this.#ba.subarray(4, 6), e = this.#ba.subarray(16, 18), [i, s, n, r] = this.#ua;
        return [
            (this.#va + (t1[0] - e[0]) / 2 - i) / n,
            (this.#ya + (t1[1] - e[1]) / 2 - s) / r,
            (this.#va + (e[0] - t1[0]) / 2 - i) / n,
            (this.#ya + (e[1] - t1[1]) / 2 - s) / r
        ];
    }
    add({ x: t1, y: e }) {
        this.#va = t1, this.#ya = e;
        const [i, s, n, r] = this.#ua;
        let [a, o, l, h] = this.#ba.subarray(8, 12);
        const c = t1 - l, d = e - h, u = Math.hypot(c, d);
        if (u < this.#wa) return !1;
        const p = u - this.#xa, g = p / u, m = g * c, f = g * d;
        let b = a, v = o;
        a = l, o = h, l += m, h += f, this.#Sa?.push(t1, e);
        const y = m / p, w = -f / p * this.#_a, x = y * this.#_a;
        if (this.#ba.set(this.#ba.subarray(2, 8), 0), this.#ba.set([
            l + w,
            h + x
        ], 4), this.#ba.set(this.#ba.subarray(14, 18), 12), this.#ba.set([
            l - w,
            h - x
        ], 16), isNaN(this.#ba[6])) return 0 === this.#fa.length && (this.#ba.set([
            a + w,
            o + x
        ], 2), this.#fa.push(NaN, NaN, NaN, NaN, (a + w - i) / n, (o + x - s) / r), this.#ba.set([
            a - w,
            o - x
        ], 14), this.#pa.push(NaN, NaN, NaN, NaN, (a - w - i) / n, (o - x - s) / r)), this.#ba.set([
            b,
            v,
            a,
            o,
            l,
            h
        ], 6), !this.isEmpty();
        this.#ba.set([
            b,
            v,
            a,
            o,
            l,
            h
        ], 6);
        return Math.abs(Math.atan2(v - o, b - a) - Math.atan2(f, m)) < Math.PI / 2 ? ([a, o, l, h] = this.#ba.subarray(2, 6), this.#fa.push(NaN, NaN, NaN, NaN, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), [a, o, b, v] = this.#ba.subarray(14, 18), this.#pa.push(NaN, NaN, NaN, NaN, ((b + a) / 2 - i) / n, ((v + o) / 2 - s) / r), !0) : ([b, v, a, o, l, h] = this.#ba.subarray(0, 6), this.#fa.push(((b + 5 * a) / 6 - i) / n, ((v + 5 * o) / 6 - s) / r, ((5 * a + l) / 6 - i) / n, ((5 * o + h) / 6 - s) / r, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), [l, h, a, o, b, v] = this.#ba.subarray(12, 18), this.#pa.push(((b + 5 * a) / 6 - i) / n, ((v + 5 * o) / 6 - s) / r, ((5 * a + l) / 6 - i) / n, ((5 * o + h) / 6 - s) / r, ((a + l) / 2 - i) / n, ((o + h) / 2 - s) / r), !0);
    }
    toSVGPath() {
        if (this.isEmpty()) return "";
        const t1 = this.#fa, e = this.#pa;
        if (isNaN(this.#ba[6]) && !this.isEmpty()) return this.#Da();
        const i = [];
        i.push(`M${t1[4]} ${t1[5]}`);
        for(let s = 6; s < t1.length; s += 6)isNaN(t1[s]) ? i.push(`L${t1[s + 4]} ${t1[s + 5]}`) : i.push(`C${t1[s]} ${t1[s + 1]} ${t1[s + 2]} ${t1[s + 3]} ${t1[s + 4]} ${t1[s + 5]}`);
        this.#Pa(i);
        for(let s = e.length - 6; s >= 6; s -= 6)isNaN(e[s]) ? i.push(`L${e[s + 4]} ${e[s + 5]}`) : i.push(`C${e[s]} ${e[s + 1]} ${e[s + 2]} ${e[s + 3]} ${e[s + 4]} ${e[s + 5]}`);
        return this.#ka(i), i.join(" ");
    }
    #Da() {
        const [t1, e, i, s] = this.#ua, [n, r, a, o] = this.#Ma();
        return `M${(this.#ba[2] - t1) / i} ${(this.#ba[3] - e) / s} L${(this.#ba[4] - t1) / i} ${(this.#ba[5] - e) / s} L${n} ${r} L${a} ${o} L${(this.#ba[16] - t1) / i} ${(this.#ba[17] - e) / s} L${(this.#ba[14] - t1) / i} ${(this.#ba[15] - e) / s} Z`;
    }
    #ka(t1) {
        const e = this.#pa;
        t1.push(`L${e[4]} ${e[5]} Z`);
    }
    #Pa(t1) {
        const [e, i, s, n] = this.#ua, r = this.#ba.subarray(4, 6), a = this.#ba.subarray(16, 18), [o, l, h, c] = this.#Ma();
        t1.push(`L${(r[0] - e) / s} ${(r[1] - i) / n} L${o} ${l} L${h} ${c} L${(a[0] - e) / s} ${(a[1] - i) / n}`);
    }
    newFreeDrawOutline(t1, e, i, s, n, r) {
        return new jn(t1, e, i, s, n, r);
    }
    getOutlines() {
        const t1 = this.#fa, e = this.#pa, i = this.#ba, [s, n, r, a] = this.#ua, o = new Float32Array((this.#Sa?.length ?? 0) + 2);
        for(let c = 0, d = o.length - 2; c < d; c += 2)o[c] = (this.#Sa[c] - s) / r, o[c + 1] = (this.#Sa[c + 1] - n) / a;
        if (o[o.length - 2] = (this.#va - s) / r, o[o.length - 1] = (this.#ya - n) / a, isNaN(i[6]) && !this.isEmpty()) return this.#Ia(o);
        const l = new Float32Array(this.#fa.length + 24 + this.#pa.length);
        let h = t1.length;
        for(let c = 0; c < h; c += 2)isNaN(t1[c]) ? l[c] = l[c + 1] = NaN : (l[c] = t1[c], l[c + 1] = t1[c + 1]);
        h = this.#Ra(l, h);
        for(let c = e.length - 6; c >= 6; c -= 6)for(let t1 = 0; t1 < 6; t1 += 2)isNaN(e[c + t1]) ? (l[h] = l[h + 1] = NaN, h += 2) : (l[h] = e[c + t1], l[h + 1] = e[c + t1 + 1], h += 2);
        return this.#La(l, h), this.newFreeDrawOutline(l, o, this.#ua, this.#Aa, this.#ga, this.#ma);
    }
    #Ia(t1) {
        const e = this.#ba, [i, s, n, r] = this.#ua, [a, o, l, h] = this.#Ma(), c = new Float32Array(36);
        return c.set([
            NaN,
            NaN,
            NaN,
            NaN,
            (e[2] - i) / n,
            (e[3] - s) / r,
            NaN,
            NaN,
            NaN,
            NaN,
            (e[4] - i) / n,
            (e[5] - s) / r,
            NaN,
            NaN,
            NaN,
            NaN,
            a,
            o,
            NaN,
            NaN,
            NaN,
            NaN,
            l,
            h,
            NaN,
            NaN,
            NaN,
            NaN,
            (e[16] - i) / n,
            (e[17] - s) / r,
            NaN,
            NaN,
            NaN,
            NaN,
            (e[14] - i) / n,
            (e[15] - s) / r
        ], 0), this.newFreeDrawOutline(c, t1, this.#ua, this.#Aa, this.#ga, this.#ma);
    }
    #La(t1, e) {
        const i = this.#pa;
        return t1.set([
            NaN,
            NaN,
            NaN,
            NaN,
            i[4],
            i[5]
        ], e), e + 6;
    }
    #Ra(t1, e) {
        const i = this.#ba.subarray(4, 6), s = this.#ba.subarray(16, 18), [n, r, a, o] = this.#ua, [l, h, c, d] = this.#Ma();
        return t1.set([
            NaN,
            NaN,
            NaN,
            NaN,
            (i[0] - n) / a,
            (i[1] - r) / o,
            NaN,
            NaN,
            NaN,
            NaN,
            l,
            h,
            NaN,
            NaN,
            NaN,
            NaN,
            c,
            d,
            NaN,
            NaN,
            NaN,
            NaN,
            (s[0] - n) / a,
            (s[1] - r) / o
        ], e), e + 24;
    }
}
class jn extends zn {
    #ua;
    #Ba = new Float32Array(4);
    #ga;
    #ma;
    #Sa;
    #Aa;
    #Fa;
    constructor(t1, e, i, s, n, r){
        super(), this.#Fa = t1, this.#Sa = e, this.#ua = i, this.#Aa = s, this.#ga = n, this.#ma = r, this.firstPoint = [
            NaN,
            NaN
        ], this.lastPoint = [
            NaN,
            NaN
        ], this.#Oa(r);
        const [a, o, l, h] = this.#Ba;
        for(let c = 0, d = t1.length; c < d; c += 2)t1[c] = (t1[c] - a) / l, t1[c + 1] = (t1[c + 1] - o) / h;
        for(let c = 0, d = e.length; c < d; c += 2)e[c] = (e[c] - a) / l, e[c + 1] = (e[c + 1] - o) / h;
    }
    toSVGPath() {
        const t1 = [
            `M${this.#Fa[4]} ${this.#Fa[5]}`
        ];
        for(let e = 6, i = this.#Fa.length; e < i; e += 6)isNaN(this.#Fa[e]) ? t1.push(`L${this.#Fa[e + 4]} ${this.#Fa[e + 5]}`) : t1.push(`C${this.#Fa[e]} ${this.#Fa[e + 1]} ${this.#Fa[e + 2]} ${this.#Fa[e + 3]} ${this.#Fa[e + 4]} ${this.#Fa[e + 5]}`);
        return t1.push("Z"), t1.join(" ");
    }
    serialize([t1, e, i, s], n) {
        const r = i - t1, a = s - e;
        let o, l;
        switch(n){
            case 0:
                o = zn._rescale(this.#Fa, t1, s, r, -a), l = zn._rescale(this.#Sa, t1, s, r, -a);
                break;
            case 90:
                o = zn._rescaleAndSwap(this.#Fa, t1, e, r, a), l = zn._rescaleAndSwap(this.#Sa, t1, e, r, a);
                break;
            case 180:
                o = zn._rescale(this.#Fa, i, e, -r, a), l = zn._rescale(this.#Sa, i, e, -r, a);
                break;
            case 270:
                o = zn._rescaleAndSwap(this.#Fa, i, s, -r, -a), l = zn._rescaleAndSwap(this.#Sa, i, s, -r, -a);
        }
        return {
            outline: Array.from(o),
            points: [
                Array.from(l)
            ]
        };
    }
    #Oa(t1) {
        const e = this.#Fa;
        let i = e[4], s = e[5];
        const n = [
            i,
            s,
            i,
            s
        ];
        let r = i, a = s, o = i, l = s;
        const h = t1 ? Math.max : Math.min, c = new Float32Array(4);
        for(let u = 6, p = e.length; u < p; u += 6){
            const t1 = e[u + 4], d = e[u + 5];
            isNaN(e[u]) ? (Ct.pointBoundingBox(t1, d, n), a > d ? (r = t1, a = d) : a === d && (r = h(r, t1)), l < d ? (o = t1, l = d) : l === d && (o = h(o, t1))) : (c[0] = c[1] = 1 / 0, c[2] = c[3] = -1 / 0, Ct.bezierBoundingBox(i, s, ...e.slice(u, u + 6), c), Ct.rectBoundingBox(c[0], c[1], c[2], c[3], n), a > c[1] ? (r = c[0], a = c[1]) : a === c[1] && (r = h(r, c[0])), l < c[3] ? (o = c[2], l = c[3]) : l === c[3] && (o = h(o, c[2]))), i = t1, s = d;
        }
        const d = this.#Ba;
        d[0] = n[0] - this.#ga, d[1] = n[1] - this.#ga, d[2] = n[2] - n[0] + 2 * this.#ga, d[3] = n[3] - n[1] + 2 * this.#ga, this.firstPoint = [
            r,
            a
        ], this.lastPoint = [
            o,
            l
        ];
    }
    get box() {
        return this.#Ba;
    }
    newOutliner(t1, e, i, s, n, r = 0) {
        return new Hn(t1, e, i, s, n, r);
    }
    getNewOutline(t1, e) {
        const [i, s, n, r] = this.#Ba, [a, o, l, h] = this.#ua, c = n * l, d = r * h, u = i * l + a, p = s * h + o, g = this.newOutliner({
            x: this.#Sa[0] * c + u,
            y: this.#Sa[1] * d + p
        }, this.#ua, this.#Aa, t1, this.#ma, e ?? this.#ga);
        for(let m = 2; m < this.#Sa.length; m += 2)g.add({
            x: this.#Sa[m] * c + u,
            y: this.#Sa[m + 1] * d + p
        });
        return g.getOutlines();
    }
}
class $n {
    #ua;
    #Na;
    #Ua;
    #za = [];
    #Ha = [];
    constructor(t1, e = 0, i = 0, s = !0){
        const n = [
            1 / 0,
            1 / 0,
            -1 / 0,
            -1 / 0
        ], r = 10 ** -4;
        for (const { x: g, y: m, width: f, height: b } of t1){
            const t1 = Math.floor((g - e) / r) * r, i = Math.ceil((g + f + e) / r) * r, s = Math.floor((m - e) / r) * r, a = Math.ceil((m + b + e) / r) * r, o = [
                t1,
                s,
                a,
                !0
            ], l = [
                i,
                s,
                a,
                !1
            ];
            this.#za.push(o, l), Ct.rectBoundingBox(t1, s, i, a, n);
        }
        const a = n[2] - n[0] + 2 * i, o = n[3] - n[1] + 2 * i, l = n[0] - i, h = n[1] - i;
        let c = s ? -1 / 0 : 1 / 0, d = 1 / 0;
        const u = this.#za.at(s ? -1 : -2), p = [
            u[0],
            u[2]
        ];
        for (const g of this.#za){
            const [t1, e, i, n] = g;
            !n && s ? e < d ? (d = e, c = t1) : e === d && (c = Math.max(c, t1)) : n && !s && (e < d ? (d = e, c = t1) : e === d && (c = Math.min(c, t1))), g[0] = (t1 - l) / a, g[1] = (e - h) / o, g[2] = (i - h) / o;
        }
        this.#ua = new Float32Array([
            l,
            h,
            a,
            o
        ]), this.#Na = [
            c,
            d
        ], this.#Ua = p;
    }
    getOutlines() {
        this.#za.sort((t1, e)=>t1[0] - e[0] || t1[1] - e[1] || t1[2] - e[2]);
        const t1 = [];
        for (const e of this.#za)e[3] ? (t1.push(...this.#ja(e)), this.#$a(e)) : (this.#Va(e), t1.push(...this.#ja(e)));
        return this.#Ga(t1);
    }
    #Ga(t1) {
        const e = [], i = new Set;
        for (const r of t1){
            const [t1, i, s] = r;
            e.push([
                t1,
                i,
                r
            ], [
                t1,
                s,
                r
            ]);
        }
        e.sort((t1, e)=>t1[1] - e[1] || t1[0] - e[0]);
        for(let r = 0, a = e.length; r < a; r += 2){
            const t1 = e[r][2], s = e[r + 1][2];
            t1.push(s), s.push(t1), i.add(t1), i.add(s);
        }
        const s = [];
        let n;
        for(; i.size > 0;){
            const t1 = i.values().next().value;
            let [e, r, a, o, l] = t1;
            i.delete(t1);
            let h = e, c = r;
            for(n = [
                e,
                a
            ], s.push(n);;){
                let t1;
                if (i.has(o)) t1 = o;
                else {
                    if (!i.has(l)) break;
                    t1 = l;
                }
                i.delete(t1), [e, r, a, o, l] = t1, h !== e && (n.push(h, c, e, c === r ? r : a), h = e), c = c === r ? a : r;
            }
            n.push(h, c);
        }
        return new Vn(s, this.#ua, this.#Na, this.#Ua);
    }
    #Wa(t1) {
        const e = this.#Ha;
        let i = 0, s = e.length - 1;
        for(; i <= s;){
            const n = i + s >> 1, r = e[n][0];
            if (r === t1) return n;
            r < t1 ? i = n + 1 : s = n - 1;
        }
        return s + 1;
    }
    #$a([, t1, e]) {
        const i = this.#Wa(t1);
        this.#Ha.splice(i, 0, [
            t1,
            e
        ]);
    }
    #Va([, t1, e]) {
        const i = this.#Wa(t1);
        for(let s = i; s < this.#Ha.length; s++){
            const [i, n] = this.#Ha[s];
            if (i !== t1) break;
            if (i === t1 && n === e) return void this.#Ha.splice(s, 1);
        }
        for(let s = i - 1; s >= 0; s--){
            const [i, n] = this.#Ha[s];
            if (i !== t1) break;
            if (i === t1 && n === e) return void this.#Ha.splice(s, 1);
        }
    }
    #ja(t1) {
        const [e, i, s] = t1, n = [
            [
                e,
                i,
                s
            ]
        ], r = this.#Wa(s);
        for(let a = 0; a < r; a++){
            const [t1, i] = this.#Ha[a];
            for(let s = 0, r = n.length; s < r; s++){
                const [, a, o] = n[s];
                if (!(i <= a || o <= t1)) if (a >= t1) if (o > i) n[s][1] = i;
                else {
                    if (1 === r) return [];
                    n.splice(s, 1), s--, r--;
                }
                else n[s][2] = t1, o > i && n.push([
                    e,
                    i,
                    o
                ]);
            }
        }
        return n;
    }
}
class Vn extends zn {
    #ua;
    #qa;
    constructor(t1, e, i, s){
        super(), this.#qa = t1, this.#ua = e, this.firstPoint = i, this.lastPoint = s;
    }
    toSVGPath() {
        const t1 = [];
        for (const e of this.#qa){
            let [i, s] = e;
            t1.push(`M${i} ${s}`);
            for(let n = 2; n < e.length; n += 2){
                const r = e[n], a = e[n + 1];
                r === i ? (t1.push(`V${a}`), s = a) : a === s && (t1.push(`H${r}`), i = r);
            }
            t1.push("Z");
        }
        return t1.join(" ");
    }
    serialize([t1, e, i, s], n) {
        const r = [], a = i - t1, o = s - e;
        for (const l of this.#qa){
            const e = new Array(l.length);
            for(let i = 0; i < l.length; i += 2)e[i] = t1 + l[i] * a, e[i + 1] = s - l[i + 1] * o;
            r.push(e);
        }
        return r;
    }
    get box() {
        return this.#ua;
    }
    get classNamesForOutlining() {
        return [
            "highlightOutline"
        ];
    }
}
class Gn extends Hn {
    newFreeDrawOutline(t1, e, i, s, n, r) {
        return new Wn(t1, e, i, s, n, r);
    }
}
class Wn extends jn {
    newOutliner(t1, e, i, s, n, r = 0) {
        return new Gn(t1, e, i, s, n, r);
    }
}
class qn extends Ee {
    #Xa = null;
    #Ya = 0;
    #Ka;
    #Qa = null;
    #n = null;
    #Ja = null;
    #Za = null;
    #to = 0;
    #eo = null;
    #io = null;
    #x = null;
    #so = !1;
    #Na = null;
    #Ua = null;
    #no = null;
    #ce = "";
    #_a;
    #ro = "";
    static _defaultColor = null;
    static _defaultOpacity = 1;
    static _defaultThickness = 12;
    static _type = "highlight";
    static _editorType = O.HIGHLIGHT;
    static _freeHighlightId = -1;
    static _freeHighlight = null;
    static _freeHighlightClipId = "";
    static get _keyboardManager() {
        const t1 = qn.prototype;
        return gt(this, "_keyboardManager", new ye([
            [
                [
                    "ArrowLeft",
                    "mac+ArrowLeft"
                ],
                t1._moveCaret,
                {
                    args: [
                        0
                    ]
                }
            ],
            [
                [
                    "ArrowRight",
                    "mac+ArrowRight"
                ],
                t1._moveCaret,
                {
                    args: [
                        1
                    ]
                }
            ],
            [
                [
                    "ArrowUp",
                    "mac+ArrowUp"
                ],
                t1._moveCaret,
                {
                    args: [
                        2
                    ]
                }
            ],
            [
                [
                    "ArrowDown",
                    "mac+ArrowDown"
                ],
                t1._moveCaret,
                {
                    args: [
                        3
                    ]
                }
            ]
        ]));
    }
    constructor(t1){
        super({
            ...t1,
            name: "highlightEditor"
        }), this.color = t1.color || qn._defaultColor, this.#_a = t1.thickness || qn._defaultThickness, this.opacity = t1.opacity || qn._defaultOpacity, this.#Ka = t1.boxes || null, this.#ro = t1.methodOfCreation || "", this.#ce = t1.text || "", this._isDraggable = !1, this.defaultL10nId = "pdfjs-editor-highlight-editor", t1.highlightId > -1 ? (this.#so = !0, this.#ao(t1), this.#oo()) : this.#Ka && (this.#Xa = t1.anchorNode, this.#Ya = t1.anchorOffset, this.#Za = t1.focusNode, this.#to = t1.focusOffset, this.#lo(), this.#oo(), this.rotate(this.rotation)), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-highlight-added-alert");
    }
    get telemetryInitialData() {
        return {
            action: "added",
            type: this.#so ? "free_highlight" : "highlight",
            color: this._uiManager.getNonHCMColorName(this.color),
            thickness: this.#_a,
            methodOfCreation: this.#ro
        };
    }
    get telemetryFinalData() {
        return {
            type: "highlight",
            color: this._uiManager.getNonHCMColorName(this.color)
        };
    }
    static computeTelemetryFinalData(t1) {
        return {
            numberOfColors: t1.get("color").size
        };
    }
    #lo() {
        const t1 = new $n(this.#Ka, .001);
        this.#io = t1.getOutlines(), [this.x, this.y, this.width, this.height] = this.#io.box;
        const e = new $n(this.#Ka, .0025, .001, "ltr" === this._uiManager.direction);
        this.#Ja = e.getOutlines();
        const { firstPoint: i } = this.#io;
        this.#Na = [
            (i[0] - this.x) / this.width,
            (i[1] - this.y) / this.height
        ];
        const { lastPoint: s } = this.#Ja;
        this.#Ua = [
            (s[0] - this.x) / this.width,
            (s[1] - this.y) / this.height
        ];
    }
    #ao({ highlightOutlines: t1, highlightId: e, clipPathId: i }) {
        this.#io = t1;
        if (this.#Ja = t1.getNewOutline(this.#_a / 2 + 1.5, .0025), e >= 0) this.#x = e, this.#Qa = i, this.parent.drawLayer.finalizeDraw(e, {
            bbox: t1.box,
            path: {
                d: t1.toSVGPath()
            }
        }), this.#no = this.parent.drawLayer.drawOutline({
            rootClass: {
                highlightOutline: !0,
                free: !0
            },
            bbox: this.#Ja.box,
            path: {
                d: this.#Ja.toSVGPath()
            }
        }, !0);
        else if (this.parent) {
            const e = this.parent.viewport.rotation;
            this.parent.drawLayer.updateProperties(this.#x, {
                bbox: qn.#ho(this.#io.box, (e - this.rotation + 360) % 360),
                path: {
                    d: t1.toSVGPath()
                }
            }), this.parent.drawLayer.updateProperties(this.#no, {
                bbox: qn.#ho(this.#Ja.box, e),
                path: {
                    d: this.#Ja.toSVGPath()
                }
            });
        }
        const [s, n, r, a] = t1.box;
        switch(this.rotation){
            case 0:
                this.x = s, this.y = n, this.width = r, this.height = a;
                break;
            case 90:
                {
                    const [t1, e] = this.parentDimensions;
                    this.x = n, this.y = 1 - s, this.width = r * e / t1, this.height = a * t1 / e;
                    break;
                }
            case 180:
                this.x = 1 - s, this.y = 1 - n, this.width = r, this.height = a;
                break;
            case 270:
                {
                    const [t1, e] = this.parentDimensions;
                    this.x = 1 - n, this.y = s, this.width = r * e / t1, this.height = a * t1 / e;
                    break;
                }
        }
        const { firstPoint: o } = t1;
        this.#Na = [
            (o[0] - s) / r,
            (o[1] - n) / a
        ];
        const { lastPoint: l } = this.#Ja;
        this.#Ua = [
            (l[0] - s) / r,
            (l[1] - n) / a
        ];
    }
    static initialize(t1, e) {
        Ee.initialize(t1, e), qn._defaultColor ||= e.highlightColors?.values().next().value || "#fff066";
    }
    static updateDefaultParams(t1, e) {
        switch(t1){
            case N.HIGHLIGHT_COLOR:
                qn._defaultColor = e;
                break;
            case N.HIGHLIGHT_THICKNESS:
                qn._defaultThickness = e;
        }
    }
    translateInPage(t1, e) {}
    get toolbarPosition() {
        return this.#Ua;
    }
    get commentButtonPosition() {
        return this.#Na;
    }
    updateParams(t1, e) {
        switch(t1){
            case N.HIGHLIGHT_COLOR:
                this.#Ir(e);
                break;
            case N.HIGHLIGHT_THICKNESS:
                this.#co(e);
        }
    }
    static get defaultPropertiesToUpdate() {
        return [
            [
                N.HIGHLIGHT_COLOR,
                qn._defaultColor
            ],
            [
                N.HIGHLIGHT_THICKNESS,
                qn._defaultThickness
            ]
        ];
    }
    get propertiesToUpdate() {
        return [
            [
                N.HIGHLIGHT_COLOR,
                this.color || qn._defaultColor
            ],
            [
                N.HIGHLIGHT_THICKNESS,
                this.#_a || qn._defaultThickness
            ],
            [
                N.HIGHLIGHT_FREE,
                this.#so
            ]
        ];
    }
    onUpdatedColor() {
        this.parent?.drawLayer.updateProperties(this.#x, {
            root: {
                fill: this.color,
                "fill-opacity": this.opacity
            }
        }), this.#n?.updateColor(this.color), super.onUpdatedColor();
    }
    #Ir(t1) {
        const e = (t1, e)=>{
            this.color = t1, this.opacity = e, this.onUpdatedColor();
        }, i = this.color, s = this.opacity;
        this.addCommands({
            cmd: e.bind(this, t1, qn._defaultOpacity),
            undo: e.bind(this, i, s),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: N.HIGHLIGHT_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
        }), this._reportTelemetry({
            action: "color_changed",
            color: this._uiManager.getNonHCMColorName(t1)
        }, !0);
    }
    #co(t1) {
        const e = this.#_a, i = (t1)=>{
            this.#_a = t1, this.#do(t1);
        };
        this.addCommands({
            cmd: i.bind(this, t1),
            undo: i.bind(this, e),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: N.INK_THICKNESS,
            overwriteIfSameType: !0,
            keepUndo: !0
        }), this._reportTelemetry({
            action: "thickness_changed",
            thickness: t1
        }, !0);
    }
    get toolbarButtons() {
        if (this._uiManager.highlightColors) {
            return [
                [
                    "colorPicker",
                    this.#n = new Zs({
                        editor: this
                    })
                ]
            ];
        }
        return super.toolbarButtons;
    }
    disableEditing() {
        super.disableEditing(), this.div.classList.toggle("disabled", !0);
    }
    enableEditing() {
        super.enableEditing(), this.div.classList.toggle("disabled", !1);
    }
    fixAndSetPosition() {
        return super.fixAndSetPosition(this.#uo());
    }
    getBaseTranslation() {
        return [
            0,
            0
        ];
    }
    getRect(t1, e) {
        return super.getRect(t1, e, this.#uo());
    }
    onceAdded(t1) {
        this.annotationElementId || this.parent.addUndoableEditor(this), t1 && this.div.focus();
    }
    remove() {
        this.#po(), this._reportTelemetry({
            action: "deleted"
        }), super.remove();
    }
    rebuild() {
        this.parent && (super.rebuild(), null !== this.div && (this.#oo(), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t1) {
        let e = !1;
        this.parent && !t1 ? this.#po() : t1 && (this.#oo(t1), e = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(t1), this.show(this._isVisible), e && this.select();
    }
    #do(t1) {
        this.#so && (this.#ao({
            highlightOutlines: this.#io.getNewOutline(t1 / 2)
        }), this.fixAndSetPosition(), this.setDims(this.width, this.height));
    }
    #po() {
        null !== this.#x && this.parent && (this.parent.drawLayer.remove(this.#x), this.#x = null, this.parent.drawLayer.remove(this.#no), this.#no = null);
    }
    #oo(t1 = this.parent) {
        null === this.#x && ({ id: this.#x, clipPathId: this.#Qa } = t1.drawLayer.draw({
            bbox: this.#io.box,
            root: {
                viewBox: "0 0 1 1",
                fill: this.color,
                "fill-opacity": this.opacity
            },
            rootClass: {
                highlight: !0,
                free: this.#so
            },
            path: {
                d: this.#io.toSVGPath()
            }
        }, !1, !0), this.#no = t1.drawLayer.drawOutline({
            rootClass: {
                highlightOutline: !0,
                free: this.#so
            },
            bbox: this.#Ja.box,
            path: {
                d: this.#Ja.toSVGPath()
            }
        }, this.#so), this.#eo && (this.#eo.style.clipPath = this.#Qa));
    }
    static #ho([t1, e, i, s], n) {
        switch(n){
            case 90:
                return [
                    1 - e - s,
                    t1,
                    s,
                    i
                ];
            case 180:
                return [
                    1 - t1 - i,
                    1 - e - s,
                    i,
                    s
                ];
            case 270:
                return [
                    e,
                    1 - t1 - i,
                    s,
                    i
                ];
        }
        return [
            t1,
            e,
            i,
            s
        ];
    }
    rotate(t1) {
        const { drawLayer: e } = this.parent;
        let i;
        this.#so ? (t1 = (t1 - this.rotation + 360) % 360, i = qn.#ho(this.#io.box, t1)) : i = qn.#ho([
            this.x,
            this.y,
            this.width,
            this.height
        ], t1), e.updateProperties(this.#x, {
            bbox: i,
            root: {
                "data-main-rotation": t1
            }
        }), e.updateProperties(this.#no, {
            bbox: qn.#ho(this.#Ja.box, t1),
            root: {
                "data-main-rotation": t1
            }
        });
    }
    render() {
        if (this.div) return this.div;
        const t1 = super.render();
        this.#ce && (t1.setAttribute("aria-label", this.#ce), t1.setAttribute("role", "mark")), this.#so ? t1.classList.add("free") : this.div.addEventListener("keydown", this.#go.bind(this), {
            signal: this._uiManager._signal
        });
        const e = this.#eo = document.createElement("div");
        return t1.append(e), e.setAttribute("aria-hidden", "true"), e.className = "internal", e.style.clipPath = this.#Qa, this.setDims(this.width, this.height), me(this, this.#eo, [
            "pointerover",
            "pointerleave"
        ]), this.enableEditing(), t1;
    }
    pointerover() {
        this.isSelected || this.parent?.drawLayer.updateProperties(this.#no, {
            rootClass: {
                hovered: !0
            }
        });
    }
    pointerleave() {
        this.isSelected || this.parent?.drawLayer.updateProperties(this.#no, {
            rootClass: {
                hovered: !1
            }
        });
    }
    #go(t1) {
        qn._keyboardManager.exec(this, t1);
    }
    _moveCaret(t1) {
        switch(this.parent.unselect(this), t1){
            case 0:
            case 2:
                this.#mo(!0);
                break;
            case 1:
            case 3:
                this.#mo(!1);
        }
    }
    #mo(t1) {
        if (!this.#Xa) return;
        const e = window.getSelection();
        t1 ? e.setPosition(this.#Xa, this.#Ya) : e.setPosition(this.#Za, this.#to);
    }
    select() {
        super.select(), this.#no && this.parent?.drawLayer.updateProperties(this.#no, {
            rootClass: {
                hovered: !1,
                selected: !0
            }
        });
    }
    unselect() {
        super.unselect(), this.#no && (this.parent?.drawLayer.updateProperties(this.#no, {
            rootClass: {
                selected: !1
            }
        }), this.#so || this.#mo(!1));
    }
    get _mustFixPosition() {
        return !this.#so;
    }
    show(t1 = this._isVisible) {
        super.show(t1), this.parent && (this.parent.drawLayer.updateProperties(this.#x, {
            rootClass: {
                hidden: !t1
            }
        }), this.parent.drawLayer.updateProperties(this.#no, {
            rootClass: {
                hidden: !t1
            }
        }));
    }
    #uo() {
        return this.#so ? this.rotation : 0;
    }
    #fo() {
        if (this.#so) return null;
        const [t1, e] = this.pageDimensions, [i, s] = this.pageTranslation, n = this.#Ka, r = new Float32Array(8 * n.length);
        let a = 0;
        for (const { x: o, y: l, width: h, height: c } of n){
            const n = o * t1 + i, d = (1 - l) * e + s;
            r[a] = r[a + 4] = n, r[a + 1] = r[a + 3] = d, r[a + 2] = r[a + 6] = n + h * t1, r[a + 5] = r[a + 7] = d - c * e, a += 8;
        }
        return r;
    }
    #bo(t1) {
        return this.#io.serialize(t1, this.#uo());
    }
    static startHighlighting(t1, e, { target: i, x: s, y: n }) {
        const { x: r, y: a, width: o, height: l } = i.getBoundingClientRect(), h = new AbortController, c = t1.combinedSignal(h), d = (e)=>{
            h.abort(), this.#vo(t1, e);
        };
        window.addEventListener("blur", d, {
            signal: c
        }), window.addEventListener("pointerup", d, {
            signal: c
        }), window.addEventListener("pointerdown", Xt, {
            capture: !0,
            passive: !1,
            signal: c
        }), window.addEventListener("contextmenu", qt, {
            signal: c
        }), i.addEventListener("pointermove", this.#yo.bind(this, t1), {
            signal: c
        }), this._freeHighlight = new Gn({
            x: s,
            y: n
        }, [
            r,
            a,
            o,
            l
        ], t1.scale, this._defaultThickness / 2, e, .001), { id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } = t1.drawLayer.draw({
            bbox: [
                0,
                0,
                1,
                1
            ],
            root: {
                viewBox: "0 0 1 1",
                fill: this._defaultColor,
                "fill-opacity": this._defaultOpacity
            },
            rootClass: {
                highlight: !0,
                free: !0
            },
            path: {
                d: this._freeHighlight.toSVGPath()
            }
        }, !0, !0);
    }
    static #yo(t1, e) {
        this._freeHighlight.add(e) && t1.drawLayer.updateProperties(this._freeHighlightId, {
            path: {
                d: this._freeHighlight.toSVGPath()
            }
        });
    }
    static #vo(t1, e) {
        this._freeHighlight.isEmpty() ? t1.drawLayer.remove(this._freeHighlightId) : t1.createAndAddNewEditor(e, !1, {
            highlightId: this._freeHighlightId,
            highlightOutlines: this._freeHighlight.getOutlines(),
            clipPathId: this._freeHighlightClipId,
            methodOfCreation: "main_toolbar"
        }), this._freeHighlightId = -1, this._freeHighlight = null, this._freeHighlightClipId = "";
    }
    static async deserialize(t1, e, i) {
        let s = null;
        if (t1 instanceof kn) {
            const { data: { quadPoints: e, rect: i, rotation: n, id: r, color: a, opacity: o, popupRef: l, richText: h, contentsObj: c, creationDate: d, modificationDate: u }, parent: { page: { pageNumber: p } } } = t1;
            s = t1 = {
                annotationType: O.HIGHLIGHT,
                color: Array.from(a),
                opacity: o,
                quadPoints: e,
                boxes: null,
                pageIndex: p - 1,
                rect: i.slice(0),
                rotation: n,
                annotationElementId: r,
                id: r,
                deleted: !1,
                popupRef: l,
                richText: h,
                comment: c?.str || null,
                creationDate: d,
                modificationDate: u
            };
        } else if (t1 instanceof Pn) {
            const { data: { inkLists: e, rect: i, rotation: n, id: r, color: a, borderStyle: { rawWidth: o }, popupRef: l, richText: h, contentsObj: c, creationDate: d, modificationDate: u }, parent: { page: { pageNumber: p } } } = t1;
            s = t1 = {
                annotationType: O.HIGHLIGHT,
                color: Array.from(a),
                thickness: o,
                inkLists: e,
                boxes: null,
                pageIndex: p - 1,
                rect: i.slice(0),
                rotation: n,
                annotationElementId: r,
                id: r,
                deleted: !1,
                popupRef: l,
                richText: h,
                comment: c?.str || null,
                creationDate: d,
                modificationDate: u
            };
        }
        const { color: n, quadPoints: r, inkLists: a, opacity: o } = t1, l = await super.deserialize(t1, e, i);
        l.color = Ct.makeHexColor(...n), l.opacity = o || 1, a && (l.#_a = t1.thickness), l._initialData = s, t1.comment && l.setCommentData(t1);
        const [h, c] = l.pageDimensions, [d, u] = l.pageTranslation;
        if (r) {
            const t1 = l.#Ka = [];
            for(let e = 0; e < r.length; e += 8)t1.push({
                x: (r[e] - d) / h,
                y: 1 - (r[e + 1] - u) / c,
                width: (r[e + 2] - r[e]) / h,
                height: (r[e + 1] - r[e + 5]) / c
            });
            l.#lo(), l.#oo(), l.rotate(l.rotation);
        } else if (a) {
            l.#so = !0;
            const t1 = a[0], i = {
                x: t1[0] - d,
                y: c - (t1[1] - u)
            }, s = new Gn(i, [
                0,
                0,
                h,
                c
            ], 1, l.#_a / 2, !0, .001);
            for(let e = 0, a = t1.length; e < a; e += 2)i.x = t1[e] - d, i.y = c - (t1[e + 1] - u), s.add(i);
            const { id: n, clipPathId: r } = e.drawLayer.draw({
                bbox: [
                    0,
                    0,
                    1,
                    1
                ],
                root: {
                    viewBox: "0 0 1 1",
                    fill: l.color,
                    "fill-opacity": l._defaultOpacity
                },
                rootClass: {
                    highlight: !0,
                    free: !0
                },
                path: {
                    d: s.toSVGPath()
                }
            }, !0, !0);
            l.#ao({
                highlightOutlines: s.getOutlines(),
                highlightId: n,
                clipPathId: r
            }), l.#oo(), l.rotate(l.parentRotation);
        }
        return l;
    }
    serialize(t1 = !1) {
        if (this.isEmpty() || t1) return null;
        if (this.deleted) return this.serializeDeleted();
        const e = Ee._colorManager.convert(this._uiManager.getNonHCMColor(this.color)), i = super.serialize(t1);
        return Object.assign(i, {
            color: e,
            opacity: this.opacity,
            thickness: this.#_a,
            quadPoints: this.#fo(),
            outlines: this.#bo(i.rect)
        }), this.addComment(i), this.annotationElementId && !this.#da(i) ? null : (i.id = this.annotationElementId, i);
    }
    #da(t1) {
        const { color: e } = this._initialData;
        return this.hasEditedComment || t1.color.some((t1, i)=>t1 !== e[i]);
    }
    renderAnnotationElement(t1) {
        return this.deleted ? (t1.hide(), null) : (t1.updateEdited({
            rect: this.getPDFRect(),
            popup: this.comment
        }), null);
    }
    static canCreateNewEmptyEditor() {
        return !1;
    }
}
class Xn {
    #wo = Object.create(null);
    updateProperty(t1, e) {
        this[t1] = e, this.updateSVGProperty(t1, e);
    }
    updateProperties(t1) {
        if (t1) for (const [e, i] of Object.entries(t1))e.startsWith("_") || this.updateProperty(e, i);
    }
    updateSVGProperty(t1, e) {
        this.#wo[t1] = e;
    }
    toSVGProperties() {
        const t1 = this.#wo;
        return this.#wo = Object.create(null), {
            root: t1
        };
    }
    reset() {
        this.#wo = Object.create(null);
    }
    updateAll(t1 = this) {
        this.updateProperties(t1);
    }
    clone() {
        ct("Not implemented");
    }
}
class Yn extends Ee {
    #xo = null;
    #Ao;
    _colorPicker = null;
    _drawId = null;
    static _currentDrawId = -1;
    static _currentParent = null;
    static #_o = null;
    static #So = null;
    static #Eo = null;
    static #Co = NaN;
    static #To = null;
    static #Mo = null;
    static #Do = NaN;
    static _INNER_MARGIN = 3;
    constructor(t1){
        super(t1), this.#Ao = t1.mustBeCommitted || !1, this._addOutlines(t1);
    }
    onUpdatedColor() {
        this._colorPicker?.update(this.color), super.onUpdatedColor();
    }
    _addOutlines(t1) {
        t1.drawOutlines && (this.#Po(t1), this.#oo());
    }
    #Po({ drawOutlines: t1, drawId: e, drawingOptions: i }) {
        this.#xo = t1, this._drawingOptions ||= i, this.annotationElementId || this._uiManager.a11yAlert(`pdfjs-editor-${this.editorType}-added-alert`), e >= 0 ? (this._drawId = e, this.parent.drawLayer.finalizeDraw(e, t1.defaultProperties)) : this._drawId = this.#ko(t1, this.parent), this.#Io(t1.box);
    }
    #ko(t1, e) {
        const { id: i } = e.drawLayer.draw(Yn._mergeSVGProperties(this._drawingOptions.toSVGProperties(), t1.defaultSVGProperties), !1, !1);
        return i;
    }
    static _mergeSVGProperties(t1, e) {
        const i = new Set(Object.keys(t1));
        for (const [s, n] of Object.entries(e))i.has(s) ? Object.assign(t1[s], n) : t1[s] = n;
        return t1;
    }
    static getDefaultDrawingOptions(t1) {
        ct("Not implemented");
    }
    static get typesMap() {
        ct("Not implemented");
    }
    static get isDrawer() {
        return !0;
    }
    static get supportMultipleDrawings() {
        return !1;
    }
    static updateDefaultParams(t1, e) {
        const i = this.typesMap.get(t1);
        i && this._defaultDrawingOptions.updateProperty(i, e), this._currentParent && (Yn.#_o.updateProperty(i, e), this._currentParent.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    updateParams(t1, e) {
        const i = this.constructor.typesMap.get(t1);
        i && this._updateProperty(t1, i, e);
    }
    static get defaultPropertiesToUpdate() {
        const t1 = [], e = this._defaultDrawingOptions;
        for (const [i, s] of this.typesMap)t1.push([
            i,
            e[s]
        ]);
        return t1;
    }
    get propertiesToUpdate() {
        const t1 = [], { _drawingOptions: e } = this;
        for (const [i, s] of this.constructor.typesMap)t1.push([
            i,
            e[s]
        ]);
        return t1;
    }
    _updateProperty(t1, e, i) {
        const s = this._drawingOptions, n = s[e], r = (i)=>{
            s.updateProperty(e, i);
            const n = this.#xo.updateProperty(e, i);
            n && this.#Io(n), this.parent?.drawLayer.updateProperties(this._drawId, s.toSVGProperties()), t1 === this.colorType && this.onUpdatedColor();
        };
        this.addCommands({
            cmd: r.bind(this, i),
            undo: r.bind(this, n),
            post: this._uiManager.updateUI.bind(this._uiManager, this),
            mustExec: !0,
            type: t1,
            overwriteIfSameType: !0,
            keepUndo: !0
        });
    }
    _onResizing() {
        this.parent?.drawLayer.updateProperties(this._drawId, Yn._mergeSVGProperties(this.#xo.getPathResizingSVGProperties(this.#Ro()), {
            bbox: this.#Lo()
        }));
    }
    _onResized() {
        this.parent?.drawLayer.updateProperties(this._drawId, Yn._mergeSVGProperties(this.#xo.getPathResizedSVGProperties(this.#Ro()), {
            bbox: this.#Lo()
        }));
    }
    _onTranslating(t1, e) {
        this.parent?.drawLayer.updateProperties(this._drawId, {
            bbox: this.#Lo()
        });
    }
    _onTranslated() {
        this.parent?.drawLayer.updateProperties(this._drawId, Yn._mergeSVGProperties(this.#xo.getPathTranslatedSVGProperties(this.#Ro(), this.parentDimensions), {
            bbox: this.#Lo()
        }));
    }
    _onStartDragging() {
        this.parent?.drawLayer.updateProperties(this._drawId, {
            rootClass: {
                moving: !0
            }
        });
    }
    _onStopDragging() {
        this.parent?.drawLayer.updateProperties(this._drawId, {
            rootClass: {
                moving: !1
            }
        });
    }
    commit() {
        super.commit(), this.disableEditMode(), this.disableEditing();
    }
    disableEditing() {
        super.disableEditing(), this.div.classList.toggle("disabled", !0);
    }
    enableEditing() {
        super.enableEditing(), this.div.classList.toggle("disabled", !1);
    }
    getBaseTranslation() {
        return [
            0,
            0
        ];
    }
    get isResizable() {
        return !0;
    }
    onceAdded(t1) {
        this.annotationElementId || this.parent.addUndoableEditor(this), this._isDraggable = !0, this.#Ao && (this.#Ao = !1, this.commit(), this.parent.setSelected(this), t1 && this.isOnScreen && this.div.focus());
    }
    remove() {
        this.#po(), super.remove();
    }
    rebuild() {
        this.parent && (super.rebuild(), null !== this.div && (this.#oo(), this.#Io(this.#xo.box), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(t1) {
        let e = !1;
        this.parent && !t1 ? (this._uiManager.removeShouldRescale(this), this.#po()) : t1 && (this._uiManager.addShouldRescale(this), this.#oo(t1), e = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(t1), e && this.select();
    }
    #po() {
        null !== this._drawId && this.parent && (this.parent.drawLayer.remove(this._drawId), this._drawId = null, this._drawingOptions.reset());
    }
    #oo(t1 = this.parent) {
        null !== this._drawId && this.parent === t1 || (null === this._drawId ? (this._drawingOptions.updateAll(), this._drawId = this.#ko(this.#xo, t1)) : this.parent.drawLayer.updateParent(this._drawId, t1.drawLayer));
    }
    #Bo([t1, e, i, s]) {
        const { parentDimensions: [n, r], rotation: a } = this;
        switch(a){
            case 90:
                return [
                    e,
                    1 - t1,
                    i * (r / n),
                    s * (n / r)
                ];
            case 180:
                return [
                    1 - t1,
                    1 - e,
                    i,
                    s
                ];
            case 270:
                return [
                    1 - e,
                    t1,
                    i * (r / n),
                    s * (n / r)
                ];
            default:
                return [
                    t1,
                    e,
                    i,
                    s
                ];
        }
    }
    #Ro() {
        const { x: t1, y: e, width: i, height: s, parentDimensions: [n, r], rotation: a } = this;
        switch(a){
            case 90:
                return [
                    1 - e,
                    t1,
                    i * (n / r),
                    s * (r / n)
                ];
            case 180:
                return [
                    1 - t1,
                    1 - e,
                    i,
                    s
                ];
            case 270:
                return [
                    e,
                    1 - t1,
                    i * (n / r),
                    s * (r / n)
                ];
            default:
                return [
                    t1,
                    e,
                    i,
                    s
                ];
        }
    }
    #Io(t1) {
        [this.x, this.y, this.width, this.height] = this.#Bo(t1), this.div && (this.fixAndSetPosition(), this.setDims()), this._onResized();
    }
    #Lo() {
        const { x: t1, y: e, width: i, height: s, rotation: n, parentRotation: r, parentDimensions: [a, o] } = this;
        switch((4 * n + r) / 90){
            case 1:
                return [
                    1 - e - s,
                    t1,
                    s,
                    i
                ];
            case 2:
                return [
                    1 - t1 - i,
                    1 - e - s,
                    i,
                    s
                ];
            case 3:
                return [
                    e,
                    1 - t1 - i,
                    s,
                    i
                ];
            case 4:
                return [
                    t1,
                    e - i * (a / o),
                    s * (o / a),
                    i * (a / o)
                ];
            case 5:
                return [
                    1 - e,
                    t1,
                    i * (a / o),
                    s * (o / a)
                ];
            case 6:
                return [
                    1 - t1 - s * (o / a),
                    1 - e,
                    s * (o / a),
                    i * (a / o)
                ];
            case 7:
                return [
                    e - i * (a / o),
                    1 - t1 - s * (o / a),
                    i * (a / o),
                    s * (o / a)
                ];
            case 8:
                return [
                    t1 - i,
                    e - s,
                    i,
                    s
                ];
            case 9:
                return [
                    1 - e,
                    t1 - i,
                    s,
                    i
                ];
            case 10:
                return [
                    1 - t1,
                    1 - e,
                    i,
                    s
                ];
            case 11:
                return [
                    e - s,
                    1 - t1,
                    s,
                    i
                ];
            case 12:
                return [
                    t1 - s * (o / a),
                    e,
                    s * (o / a),
                    i * (a / o)
                ];
            case 13:
                return [
                    1 - e - i * (a / o),
                    t1 - s * (o / a),
                    i * (a / o),
                    s * (o / a)
                ];
            case 14:
                return [
                    1 - t1,
                    1 - e - i * (a / o),
                    s * (o / a),
                    i * (a / o)
                ];
            case 15:
                return [
                    e,
                    1 - t1,
                    i * (a / o),
                    s * (o / a)
                ];
            default:
                return [
                    t1,
                    e,
                    i,
                    s
                ];
        }
    }
    rotate() {
        this.parent && this.parent.drawLayer.updateProperties(this._drawId, Yn._mergeSVGProperties({
            bbox: this.#Lo()
        }, this.#xo.updateRotation((this.parentRotation - this.rotation + 360) % 360)));
    }
    onScaleChanging() {
        this.parent && this.#Io(this.#xo.updateParentDimensions(this.parentDimensions, this.parent.scale));
    }
    static onScaleChangingWhenDrawing() {}
    render() {
        if (this.div) return this.div;
        let t1, e;
        this._isCopy && (t1 = this.x, e = this.y);
        const i = super.render();
        i.classList.add("draw");
        const s = document.createElement("div");
        return i.append(s), s.setAttribute("aria-hidden", "true"), s.className = "internal", this.setDims(), this._uiManager.addShouldRescale(this), this.disableEditing(), this._isCopy && this._moveAfterPaste(t1, e), i;
    }
    static createDrawerInstance(t1, e, i, s, n) {
        ct("Not implemented");
    }
    static startDrawing(t1, e, i, s) {
        const { target: n, offsetX: r, offsetY: a, pointerId: o, pointerType: l } = s;
        if (Yn.#To && Yn.#To !== l) return;
        const { viewport: { rotation: h } } = t1, { width: c, height: d } = n.getBoundingClientRect(), u = Yn.#So = new AbortController, p = t1.combinedSignal(u);
        Yn.#Co ||= o, Yn.#To ??= l, window.addEventListener("pointerup", (t1)=>{
            Yn.#Co === t1.pointerId ? this._endDraw(t1) : Yn.#Mo?.delete(t1.pointerId);
        }, {
            signal: p
        }), window.addEventListener("pointercancel", (t1)=>{
            Yn.#Co === t1.pointerId ? this._currentParent.endDrawingSession() : Yn.#Mo?.delete(t1.pointerId);
        }, {
            signal: p
        }), window.addEventListener("pointerdown", (t1)=>{
            Yn.#To === t1.pointerType && ((Yn.#Mo ||= new Set).add(t1.pointerId), Yn.#_o.isCancellable() && (Yn.#_o.removeLastElement(), Yn.#_o.isEmpty() ? this._currentParent.endDrawingSession(!0) : this._endDraw(null)));
        }, {
            capture: !0,
            passive: !1,
            signal: p
        }), window.addEventListener("contextmenu", qt, {
            signal: p
        }), n.addEventListener("pointermove", this._drawMove.bind(this), {
            signal: p
        }), n.addEventListener("touchmove", (t1)=>{
            t1.timeStamp === Yn.#Do && Xt(t1);
        }, {
            signal: p
        }), t1.toggleDrawing(), e._editorUndoBar?.hide(), Yn.#_o ? t1.drawLayer.updateProperties(this._currentDrawId, Yn.#_o.startNew(r, a, c, d, h)) : (e.updateUIForDefaultProperties(this), Yn.#_o = this.createDrawerInstance(r, a, c, d, h), Yn.#Eo = this.getDefaultDrawingOptions(), this._currentParent = t1, { id: this._currentDrawId } = t1.drawLayer.draw(this._mergeSVGProperties(Yn.#Eo.toSVGProperties(), Yn.#_o.defaultSVGProperties), !0, !1));
    }
    static _drawMove(t1) {
        if (Yn.#Do = -1, !Yn.#_o) return;
        const { offsetX: e, offsetY: i, pointerId: s } = t1;
        Yn.#Co === s && (Yn.#Mo?.size >= 1 ? this._endDraw(t1) : (this._currentParent.drawLayer.updateProperties(this._currentDrawId, Yn.#_o.add(e, i)), Yn.#Do = t1.timeStamp, Xt(t1)));
    }
    static _cleanup(t1) {
        t1 && (this._currentDrawId = -1, this._currentParent = null, Yn.#_o = null, Yn.#Eo = null, Yn.#To = null, Yn.#Do = NaN), Yn.#So && (Yn.#So.abort(), Yn.#So = null, Yn.#Co = NaN, Yn.#Mo = null);
    }
    static _endDraw(t1) {
        const e = this._currentParent;
        if (e) {
            if (e.toggleDrawing(!0), this._cleanup(!1), t1?.target === e.div && e.drawLayer.updateProperties(this._currentDrawId, Yn.#_o.end(t1.offsetX, t1.offsetY)), this.supportMultipleDrawings) {
                const t1 = Yn.#_o, i = this._currentDrawId, s = t1.getLastElement();
                return void e.addCommands({
                    cmd: ()=>{
                        e.drawLayer.updateProperties(i, t1.setLastElement(s));
                    },
                    undo: ()=>{
                        e.drawLayer.updateProperties(i, t1.removeLastElement());
                    },
                    mustExec: !1,
                    type: N.DRAW_STEP
                });
            }
            this.endDrawing(!1);
        }
    }
    static endDrawing(t1) {
        const e = this._currentParent;
        if (!e) return null;
        if (e.toggleDrawing(!0), e.cleanUndoStack(N.DRAW_STEP), !Yn.#_o.isEmpty()) {
            const { pageDimensions: [i, s], scale: n } = e, r = e.createAndAddNewEditor({
                offsetX: 0,
                offsetY: 0
            }, !1, {
                drawId: this._currentDrawId,
                drawOutlines: Yn.#_o.getOutlines(i * n, s * n, n, this._INNER_MARGIN),
                drawingOptions: Yn.#Eo,
                mustBeCommitted: !t1
            });
            return this._cleanup(!0), r;
        }
        return e.drawLayer.remove(this._currentDrawId), this._cleanup(!0), null;
    }
    createDrawingOptions(t1) {}
    static deserializeDraw(t1, e, i, s, n, r) {
        ct("Not implemented");
    }
    static async deserialize(t1, e, i) {
        const { rawDims: { pageWidth: s, pageHeight: n, pageX: r, pageY: a } } = e.viewport, o = this.deserializeDraw(r, a, s, n, this._INNER_MARGIN, t1), l = await super.deserialize(t1, e, i);
        return l.createDrawingOptions(t1), l.#Po({
            drawOutlines: o
        }), l.#oo(), l.onScaleChanging(), l.rotate(), l;
    }
    serializeDraw(t1) {
        const [e, i] = this.pageTranslation, [s, n] = this.pageDimensions;
        return this.#xo.serialize([
            e,
            i,
            s,
            n
        ], t1);
    }
    renderAnnotationElement(t1) {
        return t1.updateEdited({
            rect: this.getPDFRect()
        }), null;
    }
    static canCreateNewEmptyEditor() {
        return !1;
    }
}
class Kn {
    #ba = new Float64Array(6);
    #Ur;
    #Fo;
    #sn;
    #_a;
    #Sa;
    #Oo = "";
    #No = 0;
    #qa = new Qn;
    #Uo;
    #zo;
    constructor(t1, e, i, s, n, r){
        this.#Uo = i, this.#zo = s, this.#sn = n, this.#_a = r, [t1, e] = this.#Ho(t1, e);
        const a = this.#Ur = [
            NaN,
            NaN,
            NaN,
            NaN,
            t1,
            e
        ];
        this.#Sa = [
            t1,
            e
        ], this.#Fo = [
            {
                line: a,
                points: this.#Sa
            }
        ], this.#ba.set(a, 0);
    }
    updateProperty(t1, e) {
        "stroke-width" === t1 && (this.#_a = e);
    }
    #Ho(t1, e) {
        return zn._normalizePoint(t1, e, this.#Uo, this.#zo, this.#sn);
    }
    isEmpty() {
        return !this.#Fo || 0 === this.#Fo.length;
    }
    isCancellable() {
        return this.#Sa.length <= 10;
    }
    add(t1, e) {
        [t1, e] = this.#Ho(t1, e);
        const [i, s, n, r] = this.#ba.subarray(2, 6), a = t1 - n, o = e - r;
        return Math.hypot(this.#Uo * a, this.#zo * o) <= 2 ? null : (this.#Sa.push(t1, e), isNaN(i) ? (this.#ba.set([
            n,
            r,
            t1,
            e
        ], 2), this.#Ur.push(NaN, NaN, NaN, NaN, t1, e), {
            path: {
                d: this.toSVGPath()
            }
        }) : (isNaN(this.#ba[0]) && this.#Ur.splice(6, 6), this.#ba.set([
            i,
            s,
            n,
            r,
            t1,
            e
        ], 0), this.#Ur.push(...zn.createBezierPoints(i, s, n, r, t1, e)), {
            path: {
                d: this.toSVGPath()
            }
        }));
    }
    end(t1, e) {
        const i = this.add(t1, e);
        return i || (2 === this.#Sa.length ? {
            path: {
                d: this.toSVGPath()
            }
        } : null);
    }
    startNew(t1, e, i, s, n) {
        this.#Uo = i, this.#zo = s, this.#sn = n, [t1, e] = this.#Ho(t1, e);
        const r = this.#Ur = [
            NaN,
            NaN,
            NaN,
            NaN,
            t1,
            e
        ];
        this.#Sa = [
            t1,
            e
        ];
        const a = this.#Fo.at(-1);
        return a && (a.line = new Float32Array(a.line), a.points = new Float32Array(a.points)), this.#Fo.push({
            line: r,
            points: this.#Sa
        }), this.#ba.set(r, 0), this.#No = 0, this.toSVGPath(), null;
    }
    getLastElement() {
        return this.#Fo.at(-1);
    }
    setLastElement(t1) {
        return this.#Fo ? (this.#Fo.push(t1), this.#Ur = t1.line, this.#Sa = t1.points, this.#No = 0, {
            path: {
                d: this.toSVGPath()
            }
        }) : this.#qa.setLastElement(t1);
    }
    removeLastElement() {
        if (!this.#Fo) return this.#qa.removeLastElement();
        this.#Fo.pop(), this.#Oo = "";
        for(let t1 = 0, e = this.#Fo.length; t1 < e; t1++){
            const { line: e, points: i } = this.#Fo[t1];
            this.#Ur = e, this.#Sa = i, this.#No = 0, this.toSVGPath();
        }
        return {
            path: {
                d: this.#Oo
            }
        };
    }
    toSVGPath() {
        const t1 = zn.svgRound(this.#Ur[4]), e = zn.svgRound(this.#Ur[5]);
        if (2 === this.#Sa.length) return this.#Oo = `${this.#Oo} M ${t1} ${e} Z`, this.#Oo;
        if (this.#Sa.length <= 6) {
            const i = this.#Oo.lastIndexOf("M");
            this.#Oo = `${this.#Oo.slice(0, i)} M ${t1} ${e}`, this.#No = 6;
        }
        if (4 === this.#Sa.length) {
            const t1 = zn.svgRound(this.#Ur[10]), e = zn.svgRound(this.#Ur[11]);
            return this.#Oo = `${this.#Oo} L ${t1} ${e}`, this.#No = 12, this.#Oo;
        }
        const i = [];
        0 === this.#No && (i.push(`M ${t1} ${e}`), this.#No = 6);
        for(let s = this.#No, n = this.#Ur.length; s < n; s += 6){
            const [t1, e, n, r, a, o] = this.#Ur.slice(s, s + 6).map(zn.svgRound);
            i.push(`C${t1} ${e} ${n} ${r} ${a} ${o}`);
        }
        return this.#Oo += i.join(" "), this.#No = this.#Ur.length, this.#Oo;
    }
    getOutlines(t1, e, i, s) {
        const n = this.#Fo.at(-1);
        return n.line = new Float32Array(n.line), n.points = new Float32Array(n.points), this.#qa.build(this.#Fo, t1, e, i, this.#sn, this.#_a, s), this.#ba = null, this.#Ur = null, this.#Fo = null, this.#Oo = null, this.#qa;
    }
    get defaultSVGProperties() {
        return {
            root: {
                viewBox: "0 0 10000 10000"
            },
            rootClass: {
                draw: !0
            },
            bbox: [
                0,
                0,
                1,
                1
            ]
        };
    }
}
class Qn extends zn {
    #Ba;
    #jo = 0;
    #ga;
    #Fo;
    #Uo;
    #zo;
    #$o;
    #sn;
    #_a;
    build(t1, e, i, s, n, r, a) {
        this.#Uo = e, this.#zo = i, this.#$o = s, this.#sn = n, this.#_a = r, this.#ga = a ?? 0, this.#Fo = t1, this.#Vo();
    }
    get thickness() {
        return this.#_a;
    }
    setLastElement(t1) {
        return this.#Fo.push(t1), {
            path: {
                d: this.toSVGPath()
            }
        };
    }
    removeLastElement() {
        return this.#Fo.pop(), {
            path: {
                d: this.toSVGPath()
            }
        };
    }
    toSVGPath() {
        const t1 = [];
        for (const { line: e } of this.#Fo)if (t1.push(`M${zn.svgRound(e[4])} ${zn.svgRound(e[5])}`), 6 !== e.length) if (12 === e.length && isNaN(e[6])) t1.push(`L${zn.svgRound(e[10])} ${zn.svgRound(e[11])}`);
        else for(let i = 6, s = e.length; i < s; i += 6){
            const [s, n, r, a, o, l] = e.subarray(i, i + 6).map(zn.svgRound);
            t1.push(`C${s} ${n} ${r} ${a} ${o} ${l}`);
        }
        else t1.push("Z");
        return t1.join("");
    }
    serialize([t1, e, i, s], n) {
        const r = [], a = [], [o, l, h, c] = this.#Go();
        let d, u, p, g, m, f, b, v, y;
        switch(this.#sn){
            case 0:
                y = zn._rescale, d = t1, u = e + s, p = i, g = -s, m = t1 + o * i, f = e + (1 - l - c) * s, b = t1 + (o + h) * i, v = e + (1 - l) * s;
                break;
            case 90:
                y = zn._rescaleAndSwap, d = t1, u = e, p = i, g = s, m = t1 + l * i, f = e + o * s, b = t1 + (l + c) * i, v = e + (o + h) * s;
                break;
            case 180:
                y = zn._rescale, d = t1 + i, u = e, p = -i, g = s, m = t1 + (1 - o - h) * i, f = e + l * s, b = t1 + (1 - o) * i, v = e + (l + c) * s;
                break;
            case 270:
                y = zn._rescaleAndSwap, d = t1 + i, u = e + s, p = -i, g = -s, m = t1 + (1 - l - c) * i, f = e + (1 - o - h) * s, b = t1 + (1 - l) * i, v = e + (1 - o) * s;
        }
        for (const { line: w, points: x } of this.#Fo)r.push(y(w, d, u, p, g, n ? new Array(w.length) : null)), a.push(y(x, d, u, p, g, n ? new Array(x.length) : null));
        return {
            lines: r,
            points: a,
            rect: [
                m,
                f,
                b,
                v
            ]
        };
    }
    static deserialize(t1, e, i, s, n, { paths: { lines: r, points: a }, rotation: o, thickness: l }) {
        const h = [];
        let c, d, u, p, g;
        switch(o){
            case 0:
                g = zn._rescale, c = -t1 / i, d = e / s + 1, u = 1 / i, p = -1 / s;
                break;
            case 90:
                g = zn._rescaleAndSwap, c = -e / s, d = -t1 / i, u = 1 / s, p = 1 / i;
                break;
            case 180:
                g = zn._rescale, c = t1 / i + 1, d = -e / s, u = -1 / i, p = 1 / s;
                break;
            case 270:
                g = zn._rescaleAndSwap, c = e / s + 1, d = t1 / i + 1, u = -1 / s, p = -1 / i;
        }
        if (!r) {
            r = [];
            for (const t1 of a){
                const e = t1.length;
                if (2 === e) {
                    r.push(new Float32Array([
                        NaN,
                        NaN,
                        NaN,
                        NaN,
                        t1[0],
                        t1[1]
                    ]));
                    continue;
                }
                if (4 === e) {
                    r.push(new Float32Array([
                        NaN,
                        NaN,
                        NaN,
                        NaN,
                        t1[0],
                        t1[1],
                        NaN,
                        NaN,
                        NaN,
                        NaN,
                        t1[2],
                        t1[3]
                    ]));
                    continue;
                }
                const i = new Float32Array(3 * (e - 2));
                r.push(i);
                let [s, n, a, o] = t1.subarray(0, 4);
                i.set([
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    s,
                    n
                ], 0);
                for(let r = 4; r < e; r += 2){
                    const e = t1[r], l = t1[r + 1];
                    i.set(zn.createBezierPoints(s, n, a, o, e, l), 3 * (r - 2)), [s, n, a, o] = [
                        a,
                        o,
                        e,
                        l
                    ];
                }
            }
        }
        for(let f = 0, b = r.length; f < b; f++)h.push({
            line: g(r[f].map((t1)=>t1 ?? NaN), c, d, u, p),
            points: g(a[f].map((t1)=>t1 ?? NaN), c, d, u, p)
        });
        const m = new this.prototype.constructor;
        return m.build(h, i, s, 1, o, l, n), m;
    }
    #Wo(t1 = this.#_a) {
        const e = this.#ga + t1 / 2 * this.#$o;
        return this.#sn % 180 == 0 ? [
            e / this.#Uo,
            e / this.#zo
        ] : [
            e / this.#zo,
            e / this.#Uo
        ];
    }
    #Go() {
        const [t1, e, i, s] = this.#Ba, [n, r] = this.#Wo(0);
        return [
            t1 + n,
            e + r,
            i - 2 * n,
            s - 2 * r
        ];
    }
    #Vo() {
        const t1 = this.#Ba = new Float32Array([
            1 / 0,
            1 / 0,
            -1 / 0,
            -1 / 0
        ]);
        for (const { line: s } of this.#Fo){
            if (s.length <= 12) {
                for(let e = 4, i = s.length; e < i; e += 6)Ct.pointBoundingBox(s[e], s[e + 1], t1);
                continue;
            }
            let e = s[4], i = s[5];
            for(let n = 6, r = s.length; n < r; n += 6){
                const [r, a, o, l, h, c] = s.subarray(n, n + 6);
                Ct.bezierBoundingBox(e, i, r, a, o, l, h, c, t1), e = h, i = c;
            }
        }
        const [e, i] = this.#Wo();
        t1[0] = It(t1[0] - e, 0, 1), t1[1] = It(t1[1] - i, 0, 1), t1[2] = It(t1[2] + e, 0, 1), t1[3] = It(t1[3] + i, 0, 1), t1[2] -= t1[0], t1[3] -= t1[1];
    }
    get box() {
        return this.#Ba;
    }
    updateProperty(t1, e) {
        return "stroke-width" === t1 ? this.#co(e) : null;
    }
    #co(t1) {
        const [e, i] = this.#Wo();
        this.#_a = t1;
        const [s, n] = this.#Wo(), [r, a] = [
            s - e,
            n - i
        ], o = this.#Ba;
        return o[0] -= r, o[1] -= a, o[2] += 2 * r, o[3] += 2 * a, o;
    }
    updateParentDimensions([t1, e], i) {
        const [s, n] = this.#Wo();
        this.#Uo = t1, this.#zo = e, this.#$o = i;
        const [r, a] = this.#Wo(), o = r - s, l = a - n, h = this.#Ba;
        return h[0] -= o, h[1] -= l, h[2] += 2 * o, h[3] += 2 * l, h;
    }
    updateRotation(t1) {
        return this.#jo = t1, {
            path: {
                transform: this.rotationTransform
            }
        };
    }
    get viewBox() {
        return this.#Ba.map(zn.svgRound).join(" ");
    }
    get defaultProperties() {
        const [t1, e] = this.#Ba;
        return {
            root: {
                viewBox: this.viewBox
            },
            path: {
                "transform-origin": `${zn.svgRound(t1)} ${zn.svgRound(e)}`
            }
        };
    }
    get rotationTransform() {
        const [, , t1, e] = this.#Ba;
        let i = 0, s = 0, n = 0, r = 0, a = 0, o = 0;
        switch(this.#jo){
            case 90:
                s = e / t1, n = -t1 / e, a = t1;
                break;
            case 180:
                i = -1, r = -1, a = t1, o = e;
                break;
            case 270:
                s = -e / t1, n = t1 / e, o = e;
                break;
            default:
                return "";
        }
        return `matrix(${i} ${s} ${n} ${r} ${zn.svgRound(a)} ${zn.svgRound(o)})`;
    }
    getPathResizingSVGProperties([t1, e, i, s]) {
        const [n, r] = this.#Wo(), [a, o, l, h] = this.#Ba;
        if (Math.abs(l - n) <= zn.PRECISION || Math.abs(h - r) <= zn.PRECISION) {
            const n = t1 + i / 2 - (a + l / 2), r = e + s / 2 - (o + h / 2);
            return {
                path: {
                    "transform-origin": `${zn.svgRound(t1)} ${zn.svgRound(e)}`,
                    transform: `${this.rotationTransform} translate(${n} ${r})`
                }
            };
        }
        const c = (i - 2 * n) / (l - 2 * n), d = (s - 2 * r) / (h - 2 * r), u = l / i, p = h / s;
        return {
            path: {
                "transform-origin": `${zn.svgRound(a)} ${zn.svgRound(o)}`,
                transform: `${this.rotationTransform} scale(${u} ${p}) translate(${zn.svgRound(n)} ${zn.svgRound(r)}) scale(${c} ${d}) translate(${zn.svgRound(-n)} ${zn.svgRound(-r)})`
            }
        };
    }
    getPathResizedSVGProperties([t1, e, i, s]) {
        const [n, r] = this.#Wo(), a = this.#Ba, [o, l, h, c] = a;
        if (a[0] = t1, a[1] = e, a[2] = i, a[3] = s, Math.abs(h - n) <= zn.PRECISION || Math.abs(c - r) <= zn.PRECISION) {
            const n = t1 + i / 2 - (o + h / 2), r = e + s / 2 - (l + c / 2);
            for (const { line: t1, points: e } of this.#Fo)zn._translate(t1, n, r, t1), zn._translate(e, n, r, e);
            return {
                root: {
                    viewBox: this.viewBox
                },
                path: {
                    "transform-origin": `${zn.svgRound(t1)} ${zn.svgRound(e)}`,
                    transform: this.rotationTransform || null,
                    d: this.toSVGPath()
                }
            };
        }
        const d = (i - 2 * n) / (h - 2 * n), u = (s - 2 * r) / (c - 2 * r), p = -d * (o + n) + t1 + n, g = -u * (l + r) + e + r;
        if (1 !== d || 1 !== u || 0 !== p || 0 !== g) for (const { line: m, points: f } of this.#Fo)zn._rescale(m, p, g, d, u, m), zn._rescale(f, p, g, d, u, f);
        return {
            root: {
                viewBox: this.viewBox
            },
            path: {
                "transform-origin": `${zn.svgRound(t1)} ${zn.svgRound(e)}`,
                transform: this.rotationTransform || null,
                d: this.toSVGPath()
            }
        };
    }
    getPathTranslatedSVGProperties([t1, e], i) {
        const [s, n] = i, r = this.#Ba, a = t1 - r[0], o = e - r[1];
        if (this.#Uo === s && this.#zo === n) for (const { line: l, points: h } of this.#Fo)zn._translate(l, a, o, l), zn._translate(h, a, o, h);
        else {
            const t1 = this.#Uo / s, e = this.#zo / n;
            this.#Uo = s, this.#zo = n;
            for (const { line: i, points: s } of this.#Fo)zn._rescale(i, a, o, t1, e, i), zn._rescale(s, a, o, t1, e, s);
            r[2] *= t1, r[3] *= e;
        }
        return r[0] = t1, r[1] = e, {
            root: {
                viewBox: this.viewBox
            },
            path: {
                d: this.toSVGPath(),
                "transform-origin": `${zn.svgRound(t1)} ${zn.svgRound(e)}`
            }
        };
    }
    get defaultSVGProperties() {
        const t1 = this.#Ba;
        return {
            root: {
                viewBox: this.viewBox
            },
            rootClass: {
                draw: !0
            },
            path: {
                d: this.toSVGPath(),
                "transform-origin": `${zn.svgRound(t1[0])} ${zn.svgRound(t1[1])}`,
                transform: this.rotationTransform || null
            },
            bbox: t1
        };
    }
}
class Jn extends Xn {
    constructor(t1){
        super(), this._viewParameters = t1, super.updateProperties({
            fill: "none",
            stroke: Ee._defaultLineColor,
            "stroke-opacity": 1,
            "stroke-width": 1,
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            "stroke-miterlimit": 10
        });
    }
    updateSVGProperty(t1, e) {
        "stroke-width" === t1 && (e ??= this["stroke-width"], e *= this._viewParameters.realScale), super.updateSVGProperty(t1, e);
    }
    clone() {
        const t1 = new Jn(this._viewParameters);
        return t1.updateAll(this), t1;
    }
}
class Zn extends Yn {
    static _type = "ink";
    static _editorType = O.INK;
    static _defaultDrawingOptions = null;
    constructor(t1){
        super({
            ...t1,
            name: "inkEditor"
        }), this._willKeepAspectRatio = !0, this.defaultL10nId = "pdfjs-editor-ink-editor";
    }
    static initialize(t1, e) {
        Ee.initialize(t1, e), this._defaultDrawingOptions = new Jn(e.viewParameters);
    }
    static getDefaultDrawingOptions(t1) {
        const e = this._defaultDrawingOptions.clone();
        return e.updateProperties(t1), e;
    }
    static get supportMultipleDrawings() {
        return !0;
    }
    static get typesMap() {
        return gt(this, "typesMap", new Map([
            [
                N.INK_THICKNESS,
                "stroke-width"
            ],
            [
                N.INK_COLOR,
                "stroke"
            ],
            [
                N.INK_OPACITY,
                "stroke-opacity"
            ]
        ]));
    }
    static createDrawerInstance(t1, e, i, s, n) {
        return new Kn(t1, e, i, s, n, this._defaultDrawingOptions["stroke-width"]);
    }
    static deserializeDraw(t1, e, i, s, n, r) {
        return Qn.deserialize(t1, e, i, s, n, r);
    }
    static async deserialize(t1, e, i) {
        let s = null;
        if (t1 instanceof Pn) {
            const { data: { inkLists: e, rect: i, rotation: n, id: r, color: a, opacity: o, borderStyle: { rawWidth: l }, popupRef: h, richText: c, contentsObj: d, creationDate: u, modificationDate: p }, parent: { page: { pageNumber: g } } } = t1;
            s = t1 = {
                annotationType: O.INK,
                color: Array.from(a),
                thickness: l,
                opacity: o,
                paths: {
                    points: e
                },
                boxes: null,
                pageIndex: g - 1,
                rect: i.slice(0),
                rotation: n,
                annotationElementId: r,
                id: r,
                deleted: !1,
                popupRef: h,
                richText: c,
                comment: d?.str || null,
                creationDate: u,
                modificationDate: p
            };
        }
        const n = await super.deserialize(t1, e, i);
        return n._initialData = s, t1.comment && n.setCommentData(t1), n;
    }
    get toolbarButtons() {
        return this._colorPicker ||= new tn(this), [
            [
                "colorPicker",
                this._colorPicker
            ]
        ];
    }
    get colorType() {
        return N.INK_COLOR;
    }
    get color() {
        return this._drawingOptions.stroke;
    }
    get opacity() {
        return this._drawingOptions["stroke-opacity"];
    }
    onScaleChanging() {
        if (!this.parent) return;
        super.onScaleChanging();
        const { _drawId: t1, _drawingOptions: e, parent: i } = this;
        e.updateSVGProperty("stroke-width"), i.drawLayer.updateProperties(t1, e.toSVGProperties());
    }
    static onScaleChangingWhenDrawing() {
        const t1 = this._currentParent;
        t1 && (super.onScaleChangingWhenDrawing(), this._defaultDrawingOptions.updateSVGProperty("stroke-width"), t1.drawLayer.updateProperties(this._currentDrawId, this._defaultDrawingOptions.toSVGProperties()));
    }
    createDrawingOptions({ color: t1, thickness: e, opacity: i }) {
        this._drawingOptions = Zn.getDefaultDrawingOptions({
            stroke: Ct.makeHexColor(...t1),
            "stroke-width": e,
            "stroke-opacity": i
        });
    }
    serialize(t1 = !1) {
        if (this.isEmpty()) return null;
        if (this.deleted) return this.serializeDeleted();
        const { lines: e, points: i } = this.serializeDraw(t1), { _drawingOptions: { stroke: s, "stroke-opacity": n, "stroke-width": r } } = this, a = Object.assign(super.serialize(t1), {
            color: Ee._colorManager.convert(s),
            opacity: n,
            thickness: r,
            paths: {
                lines: e,
                points: i
            }
        });
        return this.addComment(a), t1 ? (a.isCopy = !0, a) : this.annotationElementId && !this.#da(a) ? null : (a.id = this.annotationElementId, a);
    }
    #da(t1) {
        const { color: e, thickness: i, opacity: s, pageIndex: n } = this._initialData;
        return this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized || t1.color.some((t1, i)=>t1 !== e[i]) || t1.thickness !== i || t1.opacity !== s || t1.pageIndex !== n;
    }
    renderAnnotationElement(t1) {
        if (this.deleted) return t1.hide(), null;
        const { points: e, rect: i } = this.serializeDraw(!1);
        return t1.updateEdited({
            rect: i,
            thickness: this._drawingOptions["stroke-width"],
            points: e,
            popup: this.comment
        }), null;
    }
}
class tr extends Qn {
    toSVGPath() {
        let t1 = super.toSVGPath();
        return t1.endsWith("Z") || (t1 += "Z"), t1;
    }
}
class er {
    static #qo = {
        maxDim: 512,
        sigmaSFactor: .02,
        sigmaR: 25,
        kernelSize: 16
    };
    static #Xo(t1, e, i, s) {
        return s -= e, 0 === (i -= t1) ? s > 0 ? 0 : 4 : 1 === i ? s + 6 : 2 - s;
    }
    static #Yo = new Int32Array([
        0,
        1,
        -1,
        1,
        -1,
        0,
        -1,
        -1,
        0,
        -1,
        1,
        -1,
        1,
        0,
        1,
        1
    ]);
    static #Ko(t1, e, i, s, n, r, a) {
        const o = this.#Xo(i, s, n, r);
        for(let l = 0; l < 8; l++){
            const n = (-l + o - a + 16) % 8;
            if (0 !== t1[(i + this.#Yo[2 * n]) * e + (s + this.#Yo[2 * n + 1])]) return n;
        }
        return -1;
    }
    static #Qo(t1, e, i, s, n, r, a) {
        const o = this.#Xo(i, s, n, r);
        for(let l = 0; l < 8; l++){
            const n = (l + o + a + 16) % 8;
            if (0 !== t1[(i + this.#Yo[2 * n]) * e + (s + this.#Yo[2 * n + 1])]) return n;
        }
        return -1;
    }
    static #Jo(t1, e, i, s) {
        const n = t1.length, r = new Int32Array(n);
        for(let h = 0; h < n; h++)r[h] = t1[h] <= s ? 1 : 0;
        for(let h = 1; h < i - 1; h++)r[h * e] = r[h * e + e - 1] = 0;
        for(let h = 0; h < e; h++)r[h] = r[e * i - 1 - h] = 0;
        let a, o = 1;
        const l = [];
        for(let h = 1; h < i - 1; h++){
            a = 1;
            for(let t1 = 1; t1 < e - 1; t1++){
                const i = h * e + t1, s = r[i];
                if (0 === s) continue;
                let n = h, c = t1;
                if (1 === s && 0 === r[i - 1]) o += 1, c -= 1;
                else {
                    if (!(s >= 1 && 0 === r[i + 1])) {
                        1 !== s && (a = Math.abs(s));
                        continue;
                    }
                    o += 1, c += 1, s > 1 && (a = s);
                }
                const d = [
                    t1,
                    h
                ], u = c === t1 + 1, p = {
                    isHole: u,
                    points: d,
                    id: o,
                    parent: 0
                };
                let g;
                l.push(p);
                for (const t1 of l)if (t1.id === a) {
                    g = t1;
                    break;
                }
                g ? g.isHole ? p.parent = u ? g.parent : a : p.parent = u ? a : g.parent : p.parent = u ? a : 0;
                const m = this.#Ko(r, e, h, t1, n, c, 0);
                if (-1 === m) {
                    r[i] = -o, 1 !== r[i] && (a = Math.abs(r[i]));
                    continue;
                }
                let f = this.#Yo[2 * m], b = this.#Yo[2 * m + 1];
                const v = h + f, y = t1 + b;
                n = v, c = y;
                let w = h, x = t1;
                for(;;){
                    const s = this.#Qo(r, e, w, x, n, c, 1);
                    f = this.#Yo[2 * s], b = this.#Yo[2 * s + 1];
                    const l = w + f, u = x + b;
                    d.push(u, l);
                    const p = w * e + x;
                    if (0 === r[p + 1] ? r[p] = -o : 1 === r[p] && (r[p] = o), l === h && u === t1 && w === v && x === y) {
                        1 !== r[i] && (a = Math.abs(r[i]));
                        break;
                    }
                    n = w, c = x, w = l, x = u;
                }
            }
        }
        return l;
    }
    static #Zo(t1, e, i, s) {
        if (i - e <= 4) {
            for(let n = e; n < i - 2; n += 2)s.push(t1[n], t1[n + 1]);
            return;
        }
        const n = t1[e], r = t1[e + 1], a = t1[i - 4] - n, o = t1[i - 3] - r, l = Math.hypot(a, o), h = a / l, c = o / l, d = h * r - c * n, u = o / a, p = 1 / l, g = Math.atan(u), m = Math.cos(g), f = Math.sin(g), b = p * (Math.abs(m) + Math.abs(f)), v = p * (1 - b + b ** 2), y = Math.max(Math.atan(Math.abs(f + m) * v), Math.atan(Math.abs(f - m) * v));
        let w = 0, x = e;
        for(let A = e + 2; A < i - 2; A += 2){
            const e = Math.abs(d - h * t1[A + 1] + c * t1[A]);
            e > w && (x = A, w = e);
        }
        w > (l * y) ** 2 ? (this.#Zo(t1, e, x + 2, s), this.#Zo(t1, x, i, s)) : s.push(n, r);
    }
    static #tl(t1) {
        const e = [], i = t1.length;
        return this.#Zo(t1, 0, i, e), e.push(t1[i - 2], t1[i - 1]), e.length <= 4 ? null : e;
    }
    static #el(t1, e, i, s, n, r) {
        const a = new Float32Array(r ** 2), o = -2 * s ** 2, l = r >> 1;
        for(let g = 0; g < r; g++){
            const t1 = (g - l) ** 2;
            for(let e = 0; e < r; e++)a[g * r + e] = Math.exp((t1 + (e - l) ** 2) / o);
        }
        const h = new Float32Array(256), c = -2 * n ** 2;
        for(let g = 0; g < 256; g++)h[g] = Math.exp(g ** 2 / c);
        const d = t1.length, u = new Uint8Array(d), p = new Uint32Array(256);
        for(let g = 0; g < i; g++)for(let s = 0; s < e; s++){
            const n = g * e + s, o = t1[n];
            let c = 0, d = 0;
            for(let u = 0; u < r; u++){
                const n = g + u - l;
                if (!(n < 0 || n >= i)) for(let i = 0; i < r; i++){
                    const p = s + i - l;
                    if (p < 0 || p >= e) continue;
                    const g = t1[n * e + p], m = a[u * r + i] * h[Math.abs(g - o)];
                    c += g * m, d += m;
                }
            }
            p[u[n] = Math.round(c / d)]++;
        }
        return [
            u,
            p
        ];
    }
    static #il(t1) {
        const e = new Uint32Array(256);
        for (const i of t1)e[i]++;
        return e;
    }
    static #sl(t1) {
        const e = t1.length, i = new Uint8ClampedArray(e >> 2);
        let s = -1 / 0, n = 1 / 0;
        for(let a = 0, o = i.length; a < o; a++){
            const e = i[a] = t1[a << 2];
            s = Math.max(s, e), n = Math.min(n, e);
        }
        const r = 255 / (s - n);
        for(let a = 0, o = i.length; a < o; a++)i[a] = (i[a] - n) * r;
        return i;
    }
    static #nl(t1) {
        let e, i = -1 / 0, s = -1 / 0;
        const n = t1.findIndex((t1)=>0 !== t1);
        let r = n, a = n;
        for(e = n; e < 256; e++){
            const n = t1[e];
            n > i && (e - r > s && (s = e - r, a = e - 1), i = n, r = e);
        }
        for(e = a - 1; e >= 0 && !(t1[e] > t1[e + 1]); e--);
        return e;
    }
    static #rl(t1) {
        const e = t1, { width: i, height: s } = t1, { maxDim: n } = this.#qo;
        let r = i, a = s;
        if (i > n || s > n) {
            let o = i, l = s, h = Math.log2(Math.max(i, s) / n);
            const c = Math.floor(h);
            h = h === c ? c - 1 : c;
            for(let i = 0; i < h; i++){
                r = Math.ceil(o / 2), a = Math.ceil(l / 2);
                const i = new OffscreenCanvas(r, a);
                i.getContext("2d").drawImage(t1, 0, 0, o, l, 0, 0, r, a), o = r, l = a, t1 !== e && t1.close(), t1 = i.transferToImageBitmap();
            }
            const d = Math.min(n / r, n / a);
            r = Math.round(r * d), a = Math.round(a * d);
        }
        const o = new OffscreenCanvas(r, a).getContext("2d", {
            willReadFrequently: !0
        });
        o.fillStyle = "white", o.fillRect(0, 0, r, a), o.filter = "grayscale(1)", o.drawImage(t1, 0, 0, t1.width, t1.height, 0, 0, r, a);
        const l = o.getImageData(0, 0, r, a).data;
        return [
            this.#sl(l),
            r,
            a
        ];
    }
    static extractContoursFromText(t1, { fontFamily: e, fontStyle: i, fontWeight: s }, n, r, a, o) {
        let l = new OffscreenCanvas(1, 1), h = l.getContext("2d", {
            alpha: !1
        });
        const c = h.font = `${i} ${s} 200px ${e}`, { actualBoundingBoxLeft: d, actualBoundingBoxRight: u, actualBoundingBoxAscent: p, actualBoundingBoxDescent: g, fontBoundingBoxAscent: m, fontBoundingBoxDescent: f, width: b } = h.measureText(t1), v = 1.5, y = Math.ceil(Math.max(Math.abs(d) + Math.abs(u) || 0, b) * v), w = Math.ceil(Math.max(Math.abs(p) + Math.abs(g) || 200, Math.abs(m) + Math.abs(f) || 200) * v);
        l = new OffscreenCanvas(y, w), h = l.getContext("2d", {
            alpha: !0,
            willReadFrequently: !0
        }), h.font = c, h.filter = "grayscale(1)", h.fillStyle = "white", h.fillRect(0, 0, y, w), h.fillStyle = "black", h.fillText(t1, .5 * y / 2, 1.5 * w / 2);
        const x = this.#sl(h.getImageData(0, 0, y, w).data), A = this.#il(x), _ = this.#nl(A), S = this.#Jo(x, y, w, _);
        return this.processDrawnLines({
            lines: {
                curves: S,
                width: y,
                height: w
            },
            pageWidth: n,
            pageHeight: r,
            rotation: a,
            innerMargin: o,
            mustSmooth: !0,
            areContours: !0
        });
    }
    static process(t1, e, i, s, n) {
        const [r, a, o] = this.#rl(t1), [l, h] = this.#el(r, a, o, Math.hypot(a, o) * this.#qo.sigmaSFactor, this.#qo.sigmaR, this.#qo.kernelSize), c = this.#nl(h), d = this.#Jo(l, a, o, c);
        return this.processDrawnLines({
            lines: {
                curves: d,
                width: a,
                height: o
            },
            pageWidth: e,
            pageHeight: i,
            rotation: s,
            innerMargin: n,
            mustSmooth: !0,
            areContours: !0
        });
    }
    static processDrawnLines({ lines: t1, pageWidth: e, pageHeight: i, rotation: s, innerMargin: n, mustSmooth: r, areContours: a }) {
        s % 180 != 0 && ([e, i] = [
            i,
            e
        ]);
        const { curves: o, width: l, height: h } = t1, c = t1.thickness ?? 0, d = [], u = Math.min(e / l, i / h), p = u / e, g = u / i, m = [];
        for (const { points: b } of o){
            const t1 = r ? this.#tl(b) : b;
            if (!t1) continue;
            m.push(t1);
            const e = t1.length, i = new Float32Array(e), s = new Float32Array(3 * (2 === e ? 2 : e - 2));
            if (d.push({
                line: s,
                points: i
            }), 2 === e) {
                i[0] = t1[0] * p, i[1] = t1[1] * g, s.set([
                    NaN,
                    NaN,
                    NaN,
                    NaN,
                    i[0],
                    i[1]
                ], 0);
                continue;
            }
            let [n, a, o, l] = t1;
            n *= p, a *= g, o *= p, l *= g, i.set([
                n,
                a,
                o,
                l
            ], 0), s.set([
                NaN,
                NaN,
                NaN,
                NaN,
                n,
                a
            ], 0);
            for(let r = 4; r < e; r += 2){
                const e = i[r] = t1[r] * p, h = i[r + 1] = t1[r + 1] * g;
                s.set(zn.createBezierPoints(n, a, o, l, e, h), 3 * (r - 2)), [n, a, o, l] = [
                    o,
                    l,
                    e,
                    h
                ];
            }
        }
        if (0 === d.length) return null;
        const f = a ? new tr : new Qn;
        return f.build(d, e, i, 1, s, a ? 0 : c, n), {
            outline: f,
            newCurves: m,
            areContours: a,
            thickness: c,
            width: l,
            height: h
        };
    }
    static async compressSignature({ outlines: t1, areContours: e, thickness: i, width: s, height: n }) {
        let r, a = 1 / 0, o = -1 / 0, l = 0;
        for (const b of t1){
            l += b.length;
            for(let t1 = 2, e = b.length; t1 < e; t1++){
                const e = b[t1] - b[t1 - 2];
                a = Math.min(a, e), o = Math.max(o, e);
            }
        }
        r = a >= -128 && o <= 127 ? Int8Array : a >= -32768 && o <= 32767 ? Int16Array : Int32Array;
        const h = t1.length, c = 8 + 3 * h, d = new Uint32Array(c);
        let u = 0;
        d[u++] = c * Uint32Array.BYTES_PER_ELEMENT + (l - 2 * h) * r.BYTES_PER_ELEMENT, d[u++] = 0, d[u++] = s, d[u++] = n, d[u++] = e ? 0 : 1, d[u++] = Math.max(0, Math.floor(i ?? 0)), d[u++] = h, d[u++] = r.BYTES_PER_ELEMENT;
        for (const b of t1)d[u++] = b.length - 2, d[u++] = b[0], d[u++] = b[1];
        const p = new CompressionStream("deflate-raw"), g = p.writable.getWriter();
        await g.ready, g.write(d);
        const m = r.prototype.constructor;
        for (const b of t1){
            const t1 = new m(b.length - 2);
            for(let e = 2, i = b.length; e < i; e++)t1[e - 2] = b[e] - b[e - 2];
            g.write(t1);
        }
        g.close();
        const f = await new Response(p.readable).arrayBuffer();
        return Rt(new Uint8Array(f));
    }
    static async decompressSignature(t1) {
        try {
            const i = (e = t1, Uint8Array.fromBase64 ? Uint8Array.fromBase64(e) : _t(atob(e))), { readable: s, writable: n } = new DecompressionStream("deflate-raw"), r = n.getWriter();
            await r.ready, r.write(i).then(async ()=>{
                await r.ready, await r.close();
            }).catch(()=>{});
            let a = null, o = 0;
            for await (const t1 of s)a ||= new Uint8Array(new Uint32Array(t1.buffer, 0, 4)[0]), a.set(t1, o), o += t1.length;
            const l = new Uint32Array(a.buffer, 0, a.length >> 2), h = l[1];
            if (0 !== h) throw new Error(`Invalid version: ${h}`);
            const c = l[2], d = l[3], u = 0 === l[4], p = l[5], g = l[6], m = l[7], f = [], b = (8 + 3 * g) * Uint32Array.BYTES_PER_ELEMENT;
            let v;
            switch(m){
                case Int8Array.BYTES_PER_ELEMENT:
                    v = new Int8Array(a.buffer, b);
                    break;
                case Int16Array.BYTES_PER_ELEMENT:
                    v = new Int16Array(a.buffer, b);
                    break;
                case Int32Array.BYTES_PER_ELEMENT:
                    v = new Int32Array(a.buffer, b);
            }
            o = 0;
            for(let t1 = 0; t1 < g; t1++){
                const e = l[3 * t1 + 8], i = new Float32Array(e + 2);
                f.push(i);
                for(let s = 0; s < 2; s++)i[s] = l[3 * t1 + 8 + s + 1];
                for(let t1 = 0; t1 < e; t1++)i[t1 + 2] = i[t1] + v[o++];
            }
            return {
                areContours: u,
                thickness: p,
                outlines: f,
                width: c,
                height: d
            };
        } catch (i) {
            return ht(`decompressSignature: ${i}`), null;
        }
        var e;
    }
}
class ir extends Xn {
    constructor(){
        super(), super.updateProperties({
            fill: Ee._defaultLineColor,
            "stroke-width": 0
        });
    }
    clone() {
        const t1 = new ir;
        return t1.updateAll(this), t1;
    }
}
class sr extends Jn {
    constructor(t1){
        super(t1), super.updateProperties({
            stroke: Ee._defaultLineColor,
            "stroke-width": 1
        });
    }
    clone() {
        const t1 = new sr(this._viewParameters);
        return t1.updateAll(this), t1;
    }
}
class nr extends Yn {
    #al = !1;
    #ol = null;
    #ll = null;
    #hl = null;
    static _type = "signature";
    static _editorType = O.SIGNATURE;
    static _defaultDrawingOptions = null;
    constructor(t1){
        super({
            ...t1,
            mustBeCommitted: !0,
            name: "signatureEditor"
        }), this._willKeepAspectRatio = !0, this.#ll = t1.signatureData || null, this.#ol = null, this.defaultL10nId = "pdfjs-editor-signature-editor1";
    }
    static initialize(t1, e) {
        Ee.initialize(t1, e), this._defaultDrawingOptions = new ir, this._defaultDrawnSignatureOptions = new sr(e.viewParameters);
    }
    static getDefaultDrawingOptions(t1) {
        const e = this._defaultDrawingOptions.clone();
        return e.updateProperties(t1), e;
    }
    static get supportMultipleDrawings() {
        return !1;
    }
    static get typesMap() {
        return gt(this, "typesMap", new Map);
    }
    static get isDrawer() {
        return !1;
    }
    get telemetryFinalData() {
        return {
            type: "signature",
            hasDescription: !!this.#ol
        };
    }
    static computeTelemetryFinalData(t1) {
        const e = t1.get("hasDescription");
        return {
            hasAltText: e.get(!0) ?? 0,
            hasNoAltText: e.get(!1) ?? 0
        };
    }
    get isResizable() {
        return !0;
    }
    onScaleChanging() {
        null !== this._drawId && super.onScaleChanging();
    }
    render() {
        if (this.div) return this.div;
        let t1, e;
        const { _isCopy: i } = this;
        if (i && (this._isCopy = !1, t1 = this.x, e = this.y), super.render(), null === this._drawId) if (this.#ll) {
            const { lines: t1, mustSmooth: e, areContours: i, description: s, uuid: n, heightInPage: r } = this.#ll, { rawDims: { pageWidth: a, pageHeight: o }, rotation: l } = this.parent.viewport, h = er.processDrawnLines({
                lines: t1,
                pageWidth: a,
                pageHeight: o,
                rotation: l,
                innerMargin: nr._INNER_MARGIN,
                mustSmooth: e,
                areContours: i
            });
            this.addSignature(h, r, s, n);
        } else this.div.setAttribute("data-l10n-args", JSON.stringify({
            description: ""
        })), this.div.hidden = !0, this._uiManager.getSignature(this);
        else this.div.setAttribute("data-l10n-args", JSON.stringify({
            description: this.#ol || ""
        }));
        return i && (this._isCopy = !0, this._moveAfterPaste(t1, e)), this.div;
    }
    setUuid(t1) {
        this.#hl = t1, this.addEditToolbar();
    }
    getUuid() {
        return this.#hl;
    }
    get description() {
        return this.#ol;
    }
    set description(t1) {
        this.#ol = t1, this.div && (this.div.setAttribute("data-l10n-args", JSON.stringify({
            description: t1
        })), super.addEditToolbar().then((e)=>{
            e?.updateEditSignatureButton(t1);
        }));
    }
    getSignaturePreview() {
        const { newCurves: t1, areContours: e, thickness: i, width: s, height: n } = this.#ll, r = Math.max(s, n);
        return {
            areContours: e,
            outline: er.processDrawnLines({
                lines: {
                    curves: t1.map((t1)=>({
                            points: t1
                        })),
                    thickness: i,
                    width: s,
                    height: n
                },
                pageWidth: r,
                pageHeight: r,
                rotation: 0,
                innerMargin: 0,
                mustSmooth: !1,
                areContours: e
            }).outline
        };
    }
    get toolbarButtons() {
        return this._uiManager.signatureManager ? [
            [
                "editSignature",
                this._uiManager.signatureManager
            ]
        ] : super.toolbarButtons;
    }
    addSignature(t1, e, i, s) {
        const { x: n, y: r } = this, { outline: a } = this.#ll = t1;
        let o;
        this.#al = a instanceof tr, this.description = i, this.#al ? o = nr.getDefaultDrawingOptions() : (o = nr._defaultDrawnSignatureOptions.clone(), o.updateProperties({
            "stroke-width": a.thickness
        })), this._addOutlines({
            drawOutlines: a,
            drawingOptions: o
        });
        const [, l] = this.pageDimensions;
        let h = e / l;
        h = h >= 1 ? .5 : h, this.width *= h / this.height, this.width >= 1 && (h *= .9 / this.width, this.width = .9), this.height = h, this.setDims(), this.x = n, this.y = r, this.center(), this._onResized(), this.onScaleChanging(), this.rotate(), this._uiManager.addToAnnotationStorage(this), this.setUuid(s), this._reportTelemetry({
            action: "pdfjs.signature.inserted",
            data: {
                hasBeenSaved: !!s,
                hasDescription: !!i
            }
        }), this.div.hidden = !1;
    }
    getFromImage(t1) {
        const { rawDims: { pageWidth: e, pageHeight: i }, rotation: s } = this.parent.viewport;
        return er.process(t1, e, i, s, nr._INNER_MARGIN);
    }
    getFromText(t1, e) {
        const { rawDims: { pageWidth: i, pageHeight: s }, rotation: n } = this.parent.viewport;
        return er.extractContoursFromText(t1, e, i, s, n, nr._INNER_MARGIN);
    }
    getDrawnSignature(t1) {
        const { rawDims: { pageWidth: e, pageHeight: i }, rotation: s } = this.parent.viewport;
        return er.processDrawnLines({
            lines: t1,
            pageWidth: e,
            pageHeight: i,
            rotation: s,
            innerMargin: nr._INNER_MARGIN,
            mustSmooth: !1,
            areContours: !1
        });
    }
    createDrawingOptions({ areContours: t1, thickness: e }) {
        t1 ? this._drawingOptions = nr.getDefaultDrawingOptions() : (this._drawingOptions = nr._defaultDrawnSignatureOptions.clone(), this._drawingOptions.updateProperties({
            "stroke-width": e
        }));
    }
    serialize(t1 = !1) {
        if (this.isEmpty()) return null;
        const { lines: e, points: i } = this.serializeDraw(t1), { _drawingOptions: { "stroke-width": s } } = this, n = Object.assign(super.serialize(t1), {
            isSignature: !0,
            areContours: this.#al,
            color: [
                0,
                0,
                0
            ],
            thickness: this.#al ? 0 : s
        });
        return this.addComment(n), t1 ? (n.paths = {
            lines: e,
            points: i
        }, n.uuid = this.#hl, n.isCopy = !0) : n.lines = e, this.#ol && (n.accessibilityData = {
            type: "Figure",
            alt: this.#ol
        }), n;
    }
    static deserializeDraw(t1, e, i, s, n, r) {
        return r.areContours ? tr.deserialize(t1, e, i, s, n, r) : Qn.deserialize(t1, e, i, s, n, r);
    }
    static async deserialize(t1, e, i) {
        const s = await super.deserialize(t1, e, i);
        return s.#al = t1.areContours, s.description = t1.accessibilityData?.alt || "", s.#hl = t1.uuid, s;
    }
}
class rr extends Ee {
    #cl = null;
    #dl = null;
    #ul = null;
    #pl = null;
    #gl = null;
    #ml = "";
    #fl = null;
    #bl = !1;
    #vl = null;
    #yl = !1;
    #wl = !1;
    static _type = "stamp";
    static _editorType = O.STAMP;
    constructor(t1){
        super({
            ...t1,
            name: "stampEditor"
        }), this.#pl = t1.bitmapUrl, this.#gl = t1.bitmapFile, this.defaultL10nId = "pdfjs-editor-stamp-editor";
    }
    static initialize(t1, e) {
        Ee.initialize(t1, e);
    }
    static isHandlingMimeForPasting(t1) {
        return ie.includes(t1);
    }
    static paste(t1, e) {
        e.pasteEditor({
            mode: O.STAMP
        }, {
            bitmapFile: t1.getAsFile()
        });
    }
    altTextFinish() {
        this._uiManager.useNewAltTextFlow && (this.div.hidden = !1), super.altTextFinish();
    }
    get telemetryFinalData() {
        return {
            type: "stamp",
            hasAltText: !!this.altTextData?.altText
        };
    }
    static computeTelemetryFinalData(t1) {
        const e = t1.get("hasAltText");
        return {
            hasAltText: e.get(!0) ?? 0,
            hasNoAltText: e.get(!1) ?? 0
        };
    }
    #xl(t1, e = !1) {
        t1 ? (this.#cl = t1.bitmap, e || (this.#dl = t1.id, this.#yl = t1.isSvg), t1.file && (this.#ml = t1.file.name), this.#Al()) : this.remove();
    }
    #_l() {
        if (this.#ul = null, this._uiManager.enableWaiting(!1), this.#fl) if (this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#cl) this.addEditToolbar().then(()=>{
            this._editToolbar.hide(), this._uiManager.editAltText(this, !0);
        });
        else {
            if (!this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && this.#cl) {
                this._reportTelemetry({
                    action: "pdfjs.image.image_added",
                    data: {
                        alt_text_modal: !1,
                        alt_text_type: "empty"
                    }
                });
                try {
                    this.mlGuessAltText();
                } catch  {}
            }
            this.div.focus();
        }
    }
    async mlGuessAltText(t1 = null, e = !0) {
        if (this.hasAltTextData()) return null;
        const { mlManager: i } = this._uiManager;
        if (!i) throw new Error("No ML.");
        if (!await i.isEnabledFor("altText")) throw new Error("ML isn't enabled for alt text.");
        const { data: s, width: n, height: r } = t1 || this.copyCanvas(null, null, !0).imageData, a = await i.guess({
            name: "altText",
            request: {
                data: s,
                width: n,
                height: r,
                channels: s.length / (n * r)
            }
        });
        if (!a) throw new Error("No response from the AI service.");
        if (a.error) throw new Error("Error from the AI service.");
        if (a.cancel) return null;
        if (!a.output) throw new Error("No valid response from the AI service.");
        const o = a.output;
        return await this.setGuessedAltText(o), e && !this.hasAltTextData() && (this.altTextData = {
            alt: o,
            decorative: !1
        }), o;
    }
    #Sl() {
        if (this.#dl) return this._uiManager.enableWaiting(!0), void this._uiManager.imageManager.getFromId(this.#dl).then((t1)=>this.#xl(t1, !0)).finally(()=>this.#_l());
        if (this.#pl) {
            const t1 = this.#pl;
            return this.#pl = null, this._uiManager.enableWaiting(!0), void (this.#ul = this._uiManager.imageManager.getFromUrl(t1).then((t1)=>this.#xl(t1)).finally(()=>this.#_l()));
        }
        if (this.#gl) {
            const t1 = this.#gl;
            return this.#gl = null, this._uiManager.enableWaiting(!0), void (this.#ul = this._uiManager.imageManager.getFromFile(t1).then((t1)=>this.#xl(t1)).finally(()=>this.#_l()));
        }
        const t1 = document.createElement("input");
        t1.type = "file", t1.accept = ie.join(",");
        const e = this._uiManager._signal;
        this.#ul = new Promise((i)=>{
            t1.addEventListener("change", async ()=>{
                if (t1.files && 0 !== t1.files.length) {
                    this._uiManager.enableWaiting(!0);
                    const e = await this._uiManager.imageManager.getFromFile(t1.files[0]);
                    this._reportTelemetry({
                        action: "pdfjs.image.image_selected",
                        data: {
                            alt_text_modal: this._uiManager.useNewAltTextFlow
                        }
                    }), this.#xl(e);
                } else this.remove();
                i();
            }, {
                signal: e
            }), t1.addEventListener("cancel", ()=>{
                this.remove(), i();
            }, {
                signal: e
            });
        }).finally(()=>this.#_l()), t1.click();
    }
    remove() {
        this.#dl && (this.#cl = null, this._uiManager.imageManager.deleteId(this.#dl), this.#fl?.remove(), this.#fl = null, this.#vl && (clearTimeout(this.#vl), this.#vl = null)), super.remove();
    }
    rebuild() {
        this.parent ? (super.rebuild(), null !== this.div && (this.#dl && null === this.#fl && this.#Sl(), this.isAttachedToDOM || this.parent.add(this))) : this.#dl && this.#Sl();
    }
    onceAdded(t1) {
        this._isDraggable = !0, t1 && this.div.focus();
    }
    isEmpty() {
        return !(this.#ul || this.#cl || this.#pl || this.#gl || this.#dl || this.#bl);
    }
    get toolbarButtons() {
        return [
            [
                "altText",
                this.createAltText()
            ]
        ];
    }
    get isResizable() {
        return !0;
    }
    render() {
        if (this.div) return this.div;
        let t1, e;
        return this._isCopy && (t1 = this.x, e = this.y), super.render(), this.div.hidden = !0, this.createAltText(), this.#bl || (this.#cl ? this.#Al() : this.#Sl()), this._isCopy && this._moveAfterPaste(t1, e), this._uiManager.addShouldRescale(this), this.div;
    }
    setCanvas(t1, e) {
        const { id: i, bitmap: s } = this._uiManager.imageManager.getFromCanvas(t1, e);
        e.remove(), i && this._uiManager.imageManager.isValidId(i) && (this.#dl = i, s && (this.#cl = s), this.#bl = !1, this.#Al());
    }
    _onResized() {
        this.onScaleChanging();
    }
    onScaleChanging() {
        if (!this.parent) return;
        null !== this.#vl && clearTimeout(this.#vl);
        this.#vl = setTimeout(()=>{
            this.#vl = null, this.#El();
        }, 200);
    }
    #Al() {
        const { div: t1 } = this;
        let { width: e, height: i } = this.#cl;
        const [s, n] = this.pageDimensions, r = .75;
        if (this.width) e = this.width * s, i = this.height * n;
        else if (e > r * s || i > r * n) {
            const t1 = Math.min(r * s / e, r * n / i);
            e *= t1, i *= t1;
        }
        this._uiManager.enableWaiting(!1);
        const a = this.#fl = document.createElement("canvas");
        a.setAttribute("role", "img"), this.addContainer(a), this.width = e / s, this.height = i / n, this.setDims(), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, this._uiManager.useNewAltTextWhenAddingImage && this._uiManager.useNewAltTextFlow && !this.annotationElementId || (t1.hidden = !1), this.#El(), this.#wl || (this.parent.addUndoableEditor(this), this.#wl = !0), this._reportTelemetry({
            action: "inserted_image"
        }), this.#ml && this.div.setAttribute("aria-description", this.#ml), this.annotationElementId || this._uiManager.a11yAlert("pdfjs-editor-stamp-added-alert");
    }
    copyCanvas(t1, e, i = !1) {
        t1 || (t1 = 224);
        const { width: s, height: n } = this.#cl, r = new ee;
        let a = this.#cl, o = s, l = n, h = null;
        if (e) {
            if (s > e || n > e) {
                const t1 = Math.min(e / s, e / n);
                o = Math.floor(s * t1), l = Math.floor(n * t1);
            }
            h = document.createElement("canvas");
            const t1 = h.width = Math.ceil(o * r.sx), i = h.height = Math.ceil(l * r.sy);
            this.#yl || (a = this.#Cl(t1, i));
            const c = h.getContext("2d");
            c.filter = this._uiManager.hcmFilter;
            let d = "white", u = "#cfcfd8";
            "none" !== this._uiManager.hcmFilter ? u = "black" : se.isDarkMode && (d = "#8f8f9d", u = "#42414d");
            const p = 15, g = p * r.sx, m = p * r.sy, f = new OffscreenCanvas(2 * g, 2 * m), b = f.getContext("2d");
            b.fillStyle = d, b.fillRect(0, 0, 2 * g, 2 * m), b.fillStyle = u, b.fillRect(0, 0, g, m), b.fillRect(g, m, g, m), c.fillStyle = c.createPattern(f, "repeat"), c.fillRect(0, 0, t1, i), c.drawImage(a, 0, 0, a.width, a.height, 0, 0, t1, i);
        }
        let c = null;
        if (i) {
            let e, i;
            if (r.symmetric && a.width < t1 && a.height < t1) e = a.width, i = a.height;
            else if (a = this.#cl, s > t1 || n > t1) {
                const r = Math.min(t1 / s, t1 / n);
                e = Math.floor(s * r), i = Math.floor(n * r), this.#yl || (a = this.#Cl(e, i));
            }
            const o = new OffscreenCanvas(e, i).getContext("2d", {
                willReadFrequently: !0
            });
            o.drawImage(a, 0, 0, a.width, a.height, 0, 0, e, i), c = {
                width: e,
                height: i,
                data: o.getImageData(0, 0, e, i).data
            };
        }
        return {
            canvas: h,
            width: o,
            height: l,
            imageData: c
        };
    }
    #Cl(t1, e) {
        const { width: i, height: s } = this.#cl;
        let n = i, r = s, a = this.#cl;
        for(; n > 2 * t1 || r > 2 * e;){
            const i = n, s = r;
            n > 2 * t1 && (n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2)), r > 2 * e && (r = r >= 16384 ? Math.floor(r / 2) - 1 : Math.ceil(r / 2));
            const o = new OffscreenCanvas(n, r);
            o.getContext("2d").drawImage(a, 0, 0, i, s, 0, 0, n, r), a = o.transferToImageBitmap();
        }
        return a;
    }
    #El() {
        const [t1, e] = this.parentDimensions, { width: i, height: s } = this, n = new ee, r = Math.ceil(i * t1 * n.sx), a = Math.ceil(s * e * n.sy), o = this.#fl;
        if (!o || o.width === r && o.height === a) return;
        o.width = r, o.height = a;
        const l = this.#yl ? this.#cl : this.#Cl(r, a), h = o.getContext("2d");
        h.filter = this._uiManager.hcmFilter, h.drawImage(l, 0, 0, l.width, l.height, 0, 0, r, a);
    }
    #Tl(t1) {
        if (t1) {
            if (this.#yl) {
                const t1 = this._uiManager.imageManager.getSvgUrl(this.#dl);
                if (t1) return t1;
            }
            const t1 = document.createElement("canvas");
            ({ width: t1.width, height: t1.height } = this.#cl);
            return t1.getContext("2d").drawImage(this.#cl, 0, 0), t1.toDataURL();
        }
        if (this.#yl) {
            const [t1, e] = this.pageDimensions, i = Math.round(this.width * t1 * Ot.PDF_TO_CSS_UNITS), s = Math.round(this.height * e * Ot.PDF_TO_CSS_UNITS), n = new OffscreenCanvas(i, s);
            return n.getContext("2d").drawImage(this.#cl, 0, 0, this.#cl.width, this.#cl.height, 0, 0, i, s), n.transferToImageBitmap();
        }
        return structuredClone(this.#cl);
    }
    static async deserialize(t1, e, i) {
        let s = null, n = !1;
        if (t1 instanceof Bn) {
            const { data: { rect: r, rotation: a, id: o, structParent: l, popupRef: h, richText: c, contentsObj: d, creationDate: u, modificationDate: p }, container: g, parent: { page: { pageNumber: m } }, canvas: f } = t1;
            let b, v;
            f ? (delete t1.canvas, { id: b, bitmap: v } = i.imageManager.getFromCanvas(g.id, f), f.remove()) : (n = !0, t1._hasNoCanvas = !0);
            const y = (await e._structTree.getAriaAttributes(`${kt}${o}`))?.get("aria-label") || "";
            s = t1 = {
                annotationType: O.STAMP,
                bitmapId: b,
                bitmap: v,
                pageIndex: m - 1,
                rect: r.slice(0),
                rotation: a,
                annotationElementId: o,
                id: o,
                deleted: !1,
                accessibilityData: {
                    decorative: !1,
                    altText: y
                },
                isSvg: !1,
                structParent: l,
                popupRef: h,
                richText: c,
                comment: d?.str || null,
                creationDate: u,
                modificationDate: p
            };
        }
        const r = await super.deserialize(t1, e, i), { rect: a, bitmap: o, bitmapUrl: l, bitmapId: h, isSvg: c, accessibilityData: d } = t1;
        n ? (i.addMissingCanvas(t1.id, r), r.#bl = !0) : h && i.imageManager.isValidId(h) ? (r.#dl = h, o && (r.#cl = o)) : r.#pl = l, r.#yl = c;
        const [u, p] = r.pageDimensions;
        return r.width = (a[2] - a[0]) / u, r.height = (a[3] - a[1]) / p, d && (r.altTextData = d), r._initialData = s, t1.comment && r.setCommentData(t1), r.#wl = !!s, r;
    }
    serialize(t1 = !1, e = null) {
        if (this.isEmpty()) return null;
        if (this.deleted) return this.serializeDeleted();
        const i = Object.assign(super.serialize(t1), {
            bitmapId: this.#dl,
            isSvg: this.#yl
        });
        if (this.addComment(i), t1) return i.bitmapUrl = this.#Tl(!0), i.accessibilityData = this.serializeAltText(!0), i.isCopy = !0, i;
        const { decorative: s, altText: n } = this.serializeAltText(!1);
        if (!s && n && (i.accessibilityData = {
            type: "Figure",
            alt: n
        }), this.annotationElementId) {
            const t1 = this.#da(i);
            return t1.isSame ? null : (t1.isSameAltText ? delete i.accessibilityData : i.accessibilityData.structParent = this._initialData.structParent ?? -1, i.id = this.annotationElementId, delete i.bitmapId, i);
        }
        if (null === e) return i;
        e.stamps ||= new Map;
        const r = this.#yl ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1]) : null;
        if (e.stamps.has(this.#dl)) {
            if (this.#yl) {
                const t1 = e.stamps.get(this.#dl);
                r > t1.area && (t1.area = r, t1.serialized.bitmap.close(), t1.serialized.bitmap = this.#Tl(!1));
            }
        } else e.stamps.set(this.#dl, {
            area: r,
            serialized: i
        }), i.bitmap = this.#Tl(!1);
        return i;
    }
    #da(t1) {
        const { pageIndex: e, accessibilityData: { altText: i } } = this._initialData, s = t1.pageIndex === e, n = (t1.accessibilityData?.alt || "") === i;
        return {
            isSame: !this.hasEditedComment && !this._hasBeenMoved && !this._hasBeenResized && s && n,
            isSameAltText: n
        };
    }
    renderAnnotationElement(t1) {
        return this.deleted ? (t1.hide(), null) : (t1.updateEdited({
            rect: this.getPDFRect(),
            popup: this.comment
        }), null);
    }
}
class ar {
    #Xr;
    #Ml = !1;
    #Dl = null;
    #Pl = null;
    #kl = null;
    #Il = new Map;
    #Rl = !1;
    #Ll = !1;
    #Bl = !1;
    #Fl = null;
    #Ol = null;
    #Nl = null;
    #Ul = null;
    #zl = null;
    #Hl = -1;
    #b;
    static _initialized = !1;
    static #G = new Map([
        Un,
        Zn,
        rr,
        qn,
        nr
    ].map((t1)=>[
            t1._editorType,
            t1
        ]));
    constructor({ uiManager: t1, pageIndex: e, div: i, structTreeLayer: s, accessibilityManager: n, annotationLayer: r, drawLayer: a, textLayer: o, viewport: l, l10n: h }){
        const c = [
            ...ar.#G.values()
        ];
        if (!ar._initialized) {
            ar._initialized = !0;
            for (const e of c)e.initialize(h, t1);
        }
        t1.registerEditorTypes(c), this.#b = t1, this.pageIndex = e, this.div = i, this.#Xr = n, this.#Dl = r, this.viewport = l, this.#Nl = o, this.drawLayer = a, this._structTree = s, this.#b.addLayer(this);
    }
    get isEmpty() {
        return 0 === this.#Il.size;
    }
    get isInvisible() {
        return this.isEmpty && this.#b.getMode() === O.NONE;
    }
    updateToolbar(t1) {
        this.#b.updateToolbar(t1);
    }
    updateMode(t1 = this.#b.getMode()) {
        switch(this.#jl(), t1){
            case O.NONE:
                return this.div.classList.toggle("nonEditing", !0), this.disableTextSelection(), this.togglePointerEvents(!1), this.toggleAnnotationLayerPointerEvents(!0), void this.disableClick();
            case O.INK:
                this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
                break;
            case O.HIGHLIGHT:
                this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
                break;
            default:
                this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
        }
        this.toggleAnnotationLayerPointerEvents(!1);
        const { classList: e } = this.div;
        if (e.toggle("nonEditing", !1), t1 === O.POPUP) e.toggle("commentEditing", !0);
        else {
            e.toggle("commentEditing", !1);
            for (const i of ar.#G.values())e.toggle(`${i._type}Editing`, t1 === i._editorType);
        }
        this.div.hidden = !1;
    }
    hasTextLayer(t1) {
        return t1 === this.#Nl?.div;
    }
    setEditingState(t1) {
        this.#b.setEditingState(t1);
    }
    addCommands(t1) {
        this.#b.addCommands(t1);
    }
    cleanUndoStack(t1) {
        this.#b.cleanUndoStack(t1);
    }
    toggleDrawing(t1 = !1) {
        this.div.classList.toggle("drawing", !t1);
    }
    togglePointerEvents(t1 = !1) {
        this.div.classList.toggle("disabled", !t1);
    }
    toggleAnnotationLayerPointerEvents(t1 = !1) {
        this.#Dl?.div.classList.toggle("disabled", !t1);
    }
    get #$l() {
        return 0 !== this.#Il.size ? this.#Il.values() : this.#b.getEditors(this.pageIndex);
    }
    async enable() {
        this.#Bl = !0, this.div.tabIndex = 0, this.togglePointerEvents(!0), this.div.classList.toggle("nonEditing", !1), this.#zl?.abort(), this.#zl = null;
        const t1 = new Set;
        for (const i of this.#$l)i.enableEditing(), i.show(!0), i.annotationElementId && (this.#b.removeChangedExistingAnnotation(i), t1.add(i.annotationElementId));
        const e = this.#Dl;
        if (e) for (const i of e.getEditableAnnotations()){
            if (i.hide(), this.#b.isDeletedAnnotationElement(i.data.id)) continue;
            if (t1.has(i.data.id)) continue;
            const e = await this.deserialize(i);
            e && (this.addOrRebuild(e), e.enableEditing());
        }
        this.#Bl = !1, this.#b._eventBus.dispatch("editorsrendered", {
            source: this,
            pageNumber: this.pageIndex + 1
        });
    }
    disable() {
        if (this.#Ll = !0, this.div.tabIndex = -1, this.togglePointerEvents(!1), this.div.classList.toggle("nonEditing", !0), this.#Nl && !this.#zl) {
            this.#zl = new AbortController;
            const t1 = this.#b.combinedSignal(this.#zl);
            this.#Nl.div.addEventListener("pointerdown", (t1)=>{
                const { clientX: e, clientY: i, timeStamp: s } = t1;
                if (s - this.#Hl > 500) return void (this.#Hl = s);
                this.#Hl = -1;
                const { classList: n } = this.div;
                n.toggle("getElements", !0);
                const r = document.elementsFromPoint(e, i);
                if (n.toggle("getElements", !1), !this.div.contains(r[0])) return;
                let a;
                const o = new RegExp(`^${F}[0-9]+$`);
                for (const h of r)if (o.test(h.id)) {
                    a = h.id;
                    break;
                }
                if (!a) return;
                const l = this.#Il.get(a);
                null === l?.annotationElementId && (t1.stopPropagation(), t1.preventDefault(), l.dblclick(t1));
            }, {
                signal: t1,
                capture: !0
            });
        }
        const t1 = this.#Dl;
        if (t1) {
            const e = new Map, i = new Map;
            for (const n of this.#$l)n.disableEditing(), n.annotationElementId ? null === n.serialize() ? (i.set(n.annotationElementId, n), this.getEditableAnnotation(n.annotationElementId)?.show(), n.remove()) : e.set(n.annotationElementId, n) : n.updateFakeAnnotationElement(t1);
            const s = t1.getEditableAnnotations();
            for (const t1 of s){
                const { id: s } = t1.data;
                if (this.#b.isDeletedAnnotationElement(s)) {
                    t1.updateEdited({
                        deleted: !0
                    });
                    continue;
                }
                let n = i.get(s);
                n ? (n.resetAnnotationElement(t1), n.show(!1), t1.show()) : (n = e.get(s), n && (this.#b.addChangedExistingAnnotation(n), n.renderAnnotationElement(t1) && n.show(!1)), t1.show());
            }
        }
        this.#jl(), this.isEmpty && (this.div.hidden = !0);
        const { classList: e } = this.div;
        for (const i of ar.#G.values())e.remove(`${i._type}Editing`);
        this.disableTextSelection(), this.toggleAnnotationLayerPointerEvents(!0), this.#Ll = !1;
    }
    getEditableAnnotation(t1) {
        return this.#Dl?.getEditableAnnotation(t1) || null;
    }
    setActiveEditor(t1) {
        this.#b.getActive() !== t1 && this.#b.setActiveEditor(t1);
    }
    enableTextSelection() {
        if (this.div.tabIndex = -1, this.#Nl?.div && !this.#Ul) {
            this.#Ul = new AbortController;
            const t1 = this.#b.combinedSignal(this.#Ul);
            this.#Nl.div.addEventListener("pointerdown", this.#Vl.bind(this), {
                signal: t1
            }), this.#Nl.div.classList.add("highlighting");
        }
    }
    disableTextSelection() {
        this.div.tabIndex = 0, this.#Nl?.div && this.#Ul && (this.#Ul.abort(), this.#Ul = null, this.#Nl.div.classList.remove("highlighting"));
    }
    #Vl(t1) {
        this.#b.unselectAll();
        const { target: e } = t1;
        if (e === this.#Nl.div || ("img" === e.getAttribute("role") || e.classList.contains("endOfContent")) && this.#Nl.div.contains(e)) {
            const { isMac: e } = St.platform;
            if (0 !== t1.button || t1.ctrlKey && e) return;
            this.#b.showAllEditors("highlight", !0, !0), this.#Nl.div.classList.add("free"), this.toggleDrawing(), qn.startHighlighting(this, "ltr" === this.#b.direction, {
                target: this.#Nl.div,
                x: t1.x,
                y: t1.y
            }), this.#Nl.div.addEventListener("pointerup", ()=>{
                this.#Nl.div.classList.remove("free"), this.toggleDrawing(!0);
            }, {
                once: !0,
                signal: this.#b._signal
            }), t1.preventDefault();
        }
    }
    enableClick() {
        if (this.#Pl) return;
        this.#Pl = new AbortController;
        const t1 = this.#b.combinedSignal(this.#Pl);
        this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
            signal: t1
        });
        const e = this.pointerup.bind(this);
        this.div.addEventListener("pointerup", e, {
            signal: t1
        }), this.div.addEventListener("pointercancel", e, {
            signal: t1
        });
    }
    disableClick() {
        this.#Pl?.abort(), this.#Pl = null;
    }
    attach(t1) {
        this.#Il.set(t1.id, t1);
        const { annotationElementId: e } = t1;
        e && this.#b.isDeletedAnnotationElement(e) && this.#b.removeDeletedAnnotationElement(t1);
    }
    detach(t1) {
        this.#Il.delete(t1.id), this.#Xr?.removePointerInTextLayer(t1.contentDiv), !this.#Ll && t1.annotationElementId && this.#b.addDeletedAnnotationElement(t1);
    }
    remove(t1) {
        this.detach(t1), this.#b.removeEditor(t1), t1.div.remove(), t1.isAttachedToDOM = !1;
    }
    changeParent(t1) {
        t1.parent !== this && (t1.parent && t1.annotationElementId && (this.#b.addDeletedAnnotationElement(t1.annotationElementId), Ee.deleteAnnotationElement(t1), t1.annotationElementId = null), this.attach(t1), t1.parent?.detach(t1), t1.setParent(this), t1.div && t1.isAttachedToDOM && (t1.div.remove(), this.div.append(t1.div)));
    }
    add(t1) {
        if (t1.parent !== this || !t1.isAttachedToDOM) {
            if (this.changeParent(t1), this.#b.addEditor(t1), this.attach(t1), !t1.isAttachedToDOM) {
                const e = t1.render();
                this.div.append(e), t1.isAttachedToDOM = !0;
            }
            t1.fixAndSetPosition(), t1.onceAdded(!this.#Bl), this.#b.addToAnnotationStorage(t1), t1._reportTelemetry(t1.telemetryInitialData);
        }
    }
    moveEditorInDOM(t1) {
        if (!t1.isAttachedToDOM) return;
        const { activeElement: e } = document;
        t1.div.contains(e) && !this.#kl && (t1._focusEventsAllowed = !1, this.#kl = setTimeout(()=>{
            this.#kl = null, t1.div.contains(document.activeElement) ? t1._focusEventsAllowed = !0 : (t1.div.addEventListener("focusin", ()=>{
                t1._focusEventsAllowed = !0;
            }, {
                once: !0,
                signal: this.#b._signal
            }), e.focus());
        }, 0)), t1._structTreeParentId = this.#Xr?.moveElementInDOM(this.div, t1.div, t1.contentDiv, !0);
    }
    addOrRebuild(t1) {
        t1.needsToBeRebuilt() ? (t1.parent ||= this, t1.rebuild(), t1.show()) : this.add(t1);
    }
    addUndoableEditor(t1) {
        this.addCommands({
            cmd: ()=>t1._uiManager.rebuild(t1),
            undo: ()=>{
                t1.remove();
            },
            mustExec: !1
        });
    }
    getEditorByUID(t1) {
        for (const e of this.#Il.values())if (e.uid === t1) return e;
        return null;
    }
    getNextId() {
        return this.#b.getId();
    }
    get #Gl() {
        return ar.#G.get(this.#b.getMode());
    }
    combinedSignal(t1) {
        return this.#b.combinedSignal(t1);
    }
    #Wl(t1) {
        const e = this.#Gl;
        return e ? new e.prototype.constructor(t1) : null;
    }
    canCreateNewEmptyEditor() {
        return this.#Gl?.canCreateNewEmptyEditor();
    }
    async pasteEditor(t1, e) {
        this.updateToolbar(t1), await this.#b.updateMode(t1.mode);
        const { offsetX: i, offsetY: s } = this.#ql(), n = this.getNextId(), r = this.#Wl({
            parent: this,
            id: n,
            x: i,
            y: s,
            uiManager: this.#b,
            isCentered: !0,
            ...e
        });
        r && this.add(r);
    }
    async deserialize(t1) {
        return await ar.#G.get(t1.annotationType ?? t1.annotationEditorType)?.deserialize(t1, this, this.#b) || null;
    }
    createAndAddNewEditor(t1, e, i = {}) {
        const s = this.getNextId(), n = this.#Wl({
            parent: this,
            id: s,
            x: t1.offsetX,
            y: t1.offsetY,
            uiManager: this.#b,
            isCentered: e,
            ...i
        });
        return n && this.add(n), n;
    }
    get boundingClientRect() {
        return this.div.getBoundingClientRect();
    }
    #ql() {
        const { x: t1, y: e, width: i, height: s } = this.boundingClientRect, n = Math.max(0, t1), r = Math.max(0, e), a = (n + Math.min(window.innerWidth, t1 + i)) / 2 - t1, o = (r + Math.min(window.innerHeight, e + s)) / 2 - e, [l, h] = this.viewport.rotation % 180 == 0 ? [
            a,
            o
        ] : [
            o,
            a
        ];
        return {
            offsetX: l,
            offsetY: h
        };
    }
    addNewEditor(t1 = {}) {
        this.createAndAddNewEditor(this.#ql(), !0, t1);
    }
    setSelected(t1) {
        this.#b.setSelected(t1);
    }
    toggleSelected(t1) {
        this.#b.toggleSelected(t1);
    }
    unselect(t1) {
        this.#b.unselect(t1);
    }
    pointerup(t1) {
        const { isMac: e } = St.platform;
        if (0 !== t1.button || t1.ctrlKey && e) return;
        if (t1.target !== this.div) return;
        if (!this.#Rl) return;
        if (this.#Rl = !1, this.#Gl?.isDrawer && this.#Gl.supportMultipleDrawings) return;
        if (!this.#Ml) return void (this.#Ml = !0);
        const i = this.#b.getMode();
        i !== O.STAMP && i !== O.SIGNATURE ? this.createAndAddNewEditor(t1, !1) : this.#b.unselectAll();
    }
    pointerdown(t1) {
        if (this.#b.getMode() === O.HIGHLIGHT && this.enableTextSelection(), this.#Rl) return void (this.#Rl = !1);
        const { isMac: e } = St.platform;
        if (0 !== t1.button || t1.ctrlKey && e) return;
        if (t1.target !== this.div) return;
        if (this.#Rl = !0, this.#Gl?.isDrawer) return void this.startDrawingSession(t1);
        const i = this.#b.getActive();
        this.#Ml = !i || i.isEmpty();
    }
    startDrawingSession(t1) {
        if (this.div.focus({
            preventScroll: !0
        }), this.#Fl) return void this.#Gl.startDrawing(this, this.#b, !1, t1);
        this.#b.setCurrentDrawingSession(this), this.#Fl = new AbortController;
        const e = this.#b.combinedSignal(this.#Fl);
        this.div.addEventListener("blur", ({ relatedTarget: t1 })=>{
            t1 && !this.div.contains(t1) && (this.#Ol = null, this.commitOrRemove());
        }, {
            signal: e
        }), this.#Gl.startDrawing(this, this.#b, !1, t1);
    }
    pause(t1) {
        if (t1) {
            const { activeElement: t1 } = document;
            return void (this.div.contains(t1) && (this.#Ol = t1));
        }
        this.#Ol && setTimeout(()=>{
            this.#Ol?.focus(), this.#Ol = null;
        }, 0);
    }
    endDrawingSession(t1 = !1) {
        return this.#Fl ? (this.#b.setCurrentDrawingSession(null), this.#Fl.abort(), this.#Fl = null, this.#Ol = null, this.#Gl.endDrawing(t1)) : null;
    }
    findNewParent(t1, e, i) {
        const s = this.#b.findParent(e, i);
        return null !== s && s !== this && (s.changeParent(t1), !0);
    }
    commitOrRemove() {
        return !!this.#Fl && (this.endDrawingSession(), !0);
    }
    onScaleChanging() {
        this.#Fl && this.#Gl.onScaleChangingWhenDrawing(this);
    }
    destroy() {
        this.commitOrRemove(), this.#b.getActive()?.parent === this && (this.#b.commitOrRemove(), this.#b.setActiveEditor(null)), this.#kl && (clearTimeout(this.#kl), this.#kl = null);
        for (const t1 of this.#Il.values())this.#Xr?.removePointerInTextLayer(t1.contentDiv), t1.setParent(null), t1.isAttachedToDOM = !1, t1.div.remove();
        this.div = null, this.#Il.clear(), this.#b.removeLayer(this);
    }
    #jl() {
        for (const t1 of this.#Il.values())t1.isEmpty() && t1.remove();
    }
    render({ viewport: t1 }) {
        this.viewport = t1, te(this.div, t1);
        for (const e of this.#b.getEditors(this.pageIndex))this.add(e), e.rebuild();
        this.updateMode();
    }
    update({ viewport: t1 }) {
        this.#b.commitOrRemove(), this.#jl();
        const e = this.viewport.rotation, i = t1.rotation;
        if (this.viewport = t1, te(this.div, {
            rotation: i
        }), e !== i) for (const s of this.#Il.values())s.rotate(i);
    }
    get pageDimensions() {
        const { pageWidth: t1, pageHeight: e } = this.viewport.rawDims;
        return [
            t1,
            e
        ];
    }
    get scale() {
        return this.#b.viewParameters.realScale;
    }
}
class or {
    #vr = null;
    #Xl = new Map;
    #Yl = new Map;
    static #x = 0;
    constructor({ pageIndex: t1 }){
        this.pageIndex = t1;
    }
    setParent(t1) {
        if (this.#vr) {
            if (this.#vr !== t1) {
                if (this.#Xl.size > 0) for (const e of this.#Xl.values())e.remove(), t1.append(e);
                this.#vr = t1;
            }
        } else this.#vr = t1;
    }
    static get _svgFactory() {
        return gt(this, "_svgFactory", new an);
    }
    static #Kl(t1, [e, i, s, n]) {
        const { style: r } = t1;
        r.top = 100 * i + "%", r.left = 100 * e + "%", r.width = 100 * s + "%", r.height = 100 * n + "%";
    }
    #Ql() {
        const t1 = or._svgFactory.create(1, 1, !0);
        return this.#vr.append(t1), t1.setAttribute("aria-hidden", !0), t1;
    }
    #Jl(t1, e) {
        const i = or._svgFactory.createElement("clipPath");
        t1.append(i);
        const s = `clip_${e}`;
        i.setAttribute("id", s), i.setAttribute("clipPathUnits", "objectBoundingBox");
        const n = or._svgFactory.createElement("use");
        return i.append(n), n.setAttribute("href", `#${e}`), n.classList.add("clip"), s;
    }
    #Zl(t1, e) {
        for (const [i, s] of Object.entries(e))null === s ? t1.removeAttribute(i) : t1.setAttribute(i, s);
    }
    draw(t1, e = !1, i = !1) {
        const s = or.#x++, n = this.#Ql(), r = or._svgFactory.createElement("defs");
        n.append(r);
        const a = or._svgFactory.createElement("path");
        r.append(a);
        const o = `path_p${this.pageIndex}_${s}`;
        a.setAttribute("id", o), a.setAttribute("vector-effect", "non-scaling-stroke"), e && this.#Yl.set(s, a);
        const l = i ? this.#Jl(r, o) : null, h = or._svgFactory.createElement("use");
        return n.append(h), h.setAttribute("href", `#${o}`), this.updateProperties(n, t1), this.#Xl.set(s, n), {
            id: s,
            clipPathId: `url(#${l})`
        };
    }
    drawOutline(t1, e) {
        const i = or.#x++, s = this.#Ql(), n = or._svgFactory.createElement("defs");
        s.append(n);
        const r = or._svgFactory.createElement("path");
        n.append(r);
        const a = `path_p${this.pageIndex}_${i}`;
        let o;
        if (r.setAttribute("id", a), r.setAttribute("vector-effect", "non-scaling-stroke"), e) {
            const t1 = or._svgFactory.createElement("mask");
            n.append(t1), o = `mask_p${this.pageIndex}_${i}`, t1.setAttribute("id", o), t1.setAttribute("maskUnits", "objectBoundingBox");
            const e = or._svgFactory.createElement("rect");
            t1.append(e), e.setAttribute("width", "1"), e.setAttribute("height", "1"), e.setAttribute("fill", "white");
            const s = or._svgFactory.createElement("use");
            t1.append(s), s.setAttribute("href", `#${a}`), s.setAttribute("stroke", "none"), s.setAttribute("fill", "black"), s.setAttribute("fill-rule", "nonzero"), s.classList.add("mask");
        }
        const l = or._svgFactory.createElement("use");
        s.append(l), l.setAttribute("href", `#${a}`), o && l.setAttribute("mask", `url(#${o})`);
        const h = l.cloneNode();
        return s.append(h), l.classList.add("mainOutline"), h.classList.add("secondaryOutline"), this.updateProperties(s, t1), this.#Xl.set(i, s), i;
    }
    finalizeDraw(t1, e) {
        this.#Yl.delete(t1), this.updateProperties(t1, e);
    }
    updateProperties(t1, e) {
        if (!e) return;
        const { root: i, bbox: s, rootClass: n, path: r } = e, a = "number" == typeof t1 ? this.#Xl.get(t1) : t1;
        if (a) {
            if (i && this.#Zl(a, i), s && or.#Kl(a, s), n) {
                const { classList: t1 } = a;
                for (const [e, i] of Object.entries(n))t1.toggle(e, i);
            }
            if (r) {
                const t1 = a.firstChild.firstChild;
                this.#Zl(t1, r);
            }
        }
    }
    updateParent(t1, e) {
        if (e === this) return;
        const i = this.#Xl.get(t1);
        i && (e.#vr.append(i), this.#Xl.delete(t1), e.#Xl.set(t1, i));
    }
    remove(t1) {
        this.#Yl.delete(t1), null !== this.#vr && (this.#Xl.get(t1).remove(), this.#Xl.delete(t1));
    }
    destroy() {
        this.#vr = null;
        for (const t1 of this.#Xl.values())t1.remove();
        this.#Xl.clear(), this.#Yl.clear();
    }
}
globalThis._pdfjsTestingUtils = {
    HighlightOutliner: $n
}, globalThis.pdfjsLib = {
    AbortException: xt,
    AnnotationEditorLayer: ar,
    AnnotationEditorParamsType: N,
    AnnotationEditorType: O,
    AnnotationEditorUIManager: xe,
    AnnotationLayer: On,
    AnnotationMode: B,
    AnnotationType: q,
    applyOpacity: re,
    build: Js,
    ColorPicker: Zs,
    createValidAbsoluteUrl: ut,
    CSSConstants: ne,
    DOMSVGFactory: an,
    DrawLayer: or,
    FeatureTest: St,
    fetchData: Nt,
    findContrastColor: de,
    getDocument: Hs,
    getFilenameFromUrl: $t,
    getPdfFilenameFromUrl: Vt,
    getRGB: Qt,
    getUuid: Pt,
    getXfaPageViewport: Kt,
    GlobalWorkerOptions: ds,
    ImageKind: W,
    InvalidPDFException: vt,
    isDataScheme: Ht,
    isPdfFile: jt,
    isValidExplicitDest: Ne,
    MathClamp: It,
    noContextMenu: qt,
    normalizeUnicode: Dt,
    OPS: tt,
    OutputScale: ee,
    PasswordResponses: rt,
    PDFDataRangeTransport: $s,
    PDFDateString: Yt,
    PDFWorker: qs,
    PermissionFlag: U,
    PixelsPerInch: Ot,
    RenderingCancelledException: zt,
    renderRichText: ue,
    ResponseException: yt,
    setLayerDimensions: te,
    shadow: gt,
    SignatureExtractor: er,
    stopEvent: Xt,
    SupportedImageMimeTypes: ie,
    TextLayer: zs,
    TouchManager: Se,
    updateUrlHash: pt,
    Util: Ct,
    VerbosityLevel: Z,
    version: Qs,
    XfaLayer: Bt
};
const lr = Object.freeze(Object.defineProperty({
    __proto__: null,
    AbortException: xt,
    AnnotationEditorLayer: ar,
    AnnotationEditorParamsType: N,
    AnnotationEditorType: O,
    AnnotationEditorUIManager: xe,
    AnnotationLayer: On,
    AnnotationMode: B,
    AnnotationType: q,
    CSSConstants: ne,
    ColorPicker: Zs,
    DOMSVGFactory: an,
    DrawLayer: or,
    FeatureTest: St,
    GlobalWorkerOptions: ds,
    ImageKind: W,
    InvalidPDFException: vt,
    MathClamp: It,
    OPS: tt,
    OutputScale: ee,
    PDFDataRangeTransport: $s,
    PDFDateString: Yt,
    PDFWorker: qs,
    PasswordResponses: rt,
    PermissionFlag: U,
    PixelsPerInch: Ot,
    RenderingCancelledException: zt,
    ResponseException: yt,
    SignatureExtractor: er,
    SupportedImageMimeTypes: ie,
    TextLayer: zs,
    TouchManager: Se,
    Util: Ct,
    VerbosityLevel: Z,
    XfaLayer: Bt,
    applyOpacity: re,
    build: Js,
    createValidAbsoluteUrl: ut,
    fetchData: Nt,
    findContrastColor: de,
    getDocument: Hs,
    getFilenameFromUrl: $t,
    getPdfFilenameFromUrl: Vt,
    getRGB: Qt,
    getUuid: Pt,
    getXfaPageViewport: Kt,
    isDataScheme: Ht,
    isPdfFile: jt,
    isValidExplicitDest: Ne,
    noContextMenu: qt,
    normalizeUnicode: Dt,
    renderRichText: ue,
    setLayerDimensions: te,
    shadow: gt,
    stopEvent: Xt,
    updateUrlHash: pt,
    version: Qs
}, Symbol.toStringTag, {
    value: "Module"
}));
class hr extends Error {
    constructor(t1, e){
        void 0 !== e ? super(t1 ?? "Invalid PDF", {
            cause: e
        }) : super(t1 ?? "Invalid PDF"), this.name = "InvalidPDFException", Object.setPrototypeOf(this, hr.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, hr);
    }
}
class cr extends Error {
    constructor(t1, e){
        void 0 !== e ? super(t1 ?? "Password required or incorrect", {
            cause: e
        }) : super(t1 ?? "Password required or incorrect"), this.name = "PasswordException", Object.setPrototypeOf(this, cr.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, cr);
    }
}
class dr extends Error {
    constructor(t1, e){
        void 0 !== e ? super(t1 ?? "PDF format error", {
            cause: e
        }) : super(t1 ?? "PDF format error"), this.name = "FormatError", Object.setPrototypeOf(this, dr.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, dr);
    }
}
class ur extends Error {
    constructor(t1, e, i){
        void 0 !== i ? super(t1 ?? "Unknown error", {
            cause: i
        }) : super(t1 ?? "Unknown error"), this.name = "UnknownErrorException", Object.setPrototypeOf(this, ur.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, ur), this.details = e;
    }
}
class pr extends Error {
    constructor(t1, e, i, s){
        void 0 !== s ? super(t1 ?? "Response error", {
            cause: s
        }) : super(t1 ?? "Response error"), this.name = "ResponseException", Object.setPrototypeOf(this, pr.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, pr), this.status = e, this.missing = i;
    }
}
class gr extends Error {
    constructor(t1, e){
        void 0 !== e ? super(t1 ?? "Operation aborted", {
            cause: e
        }) : super(t1 ?? "Operation aborted"), this.name = "AbortException", Object.setPrototypeOf(this, gr.prototype), "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, gr);
    }
}
function mr(t1) {
    if (t1 instanceof Error) switch(t1.name){
        case "InvalidPDFException":
            return new hr(t1.message, t1);
        case "PasswordException":
            return new cr(t1.message, t1);
        case "FormatError":
            return new dr(t1.message, t1);
        case "UnknownErrorException":
            return new ur(t1.message, t1.details, t1);
        case "ResponseException":
            return new pr(t1.message, t1.status, t1.missing, t1);
        case "AbortException":
            return new gr(t1.message, t1);
        default:
            return t1;
    }
    return new Error(String(t1));
}
class fr {
    static tolerance = 2;
    static applyTransform(t1, e) {
        return [
            t1[0] * e[0] + t1[1] * e[2] + e[4],
            t1[0] * e[1] + t1[1] * e[3] + e[5]
        ];
    }
}
class br extends fr {
    x;
    y;
    constructor(t1, e){
        super(), this.x = t1, this.y = e;
    }
    equal(t1) {
        return t1.x === this.x && t1.y === this.y;
    }
    transform(t1) {
        const e = fr.applyTransform([
            this.x,
            this.y
        ], t1);
        return this.x = e[0], this.y = e[1], this;
    }
}
var vr = ((t1)=>(t1[t1.None = 0] = "None", t1[t1.Horizontal = 1] = "Horizontal", t1[t1.Vertical = 2] = "Vertical", t1))(vr || {});
class yr extends fr {
    from;
    to;
    direction = 0;
    length = 0;
    intersections = [];
    gaps = [];
    constructor(t1, e){
        super(), this.from = t1, this.to = e, this.init();
    }
    init() {
        let t1 = this.from, e = this.to;
        if (Math.abs(t1.y - e.y) < fr.tolerance) {
            if (this.direction = 1, e.y = t1.y, t1.x > e.x) {
                const i = t1;
                t1 = e, e = i;
            }
            this.length = e.x - t1.x;
        } else if (Math.abs(t1.x - e.x) < fr.tolerance) {
            if (this.direction = 2, e.x = t1.x, t1.y > e.y) {
                const i = t1;
                t1 = e, e = i;
            }
            this.length = e.y - t1.y;
        }
        this.from = t1, this.to = e;
    }
    _valid = void 0;
    get valid() {
        return void 0 === this._valid && (this._valid = 0 !== this.direction && this.length > fr.tolerance), this._valid;
    }
    get normalized() {
        return 1 === this.direction ? new yr(new br(this.from.x - fr.tolerance, this.from.y), new br(this.to.x + fr.tolerance, this.from.y)) : 2 === this.direction ? new yr(new br(this.from.x, this.from.y - fr.tolerance), new br(this.from.x, this.to.y + fr.tolerance)) : this;
    }
    addGap(t1) {
        this.gaps.push(t1);
    }
    containsPoint(t1) {
        return 2 === this.direction ? this.from.x === t1.x && t1.y >= this.from.y && t1.y <= this.to.y : 1 === this.direction && this.from.y === t1.y && t1.x >= this.from.x && t1.x <= this.to.x;
    }
    addIntersectionPoint(t1) {
        for (const e of this.intersections)if (e.equal(t1)) return;
        this.intersections.push(t1);
    }
    intersection(t1) {
        let e;
        if (!this.valid || !t1.valid) return e;
        const i = this.normalized, s = t1.normalized;
        if (1 === this.direction && 2 === t1.direction) {
            const n = s.from.x, r = i.from.y;
            if (n > i.from.x && n < i.to.x && r > s.from.y && r < s.to.y) {
                const i = new br(n, r);
                this.addIntersectionPoint(i), t1.addIntersectionPoint(i), e = i;
            }
        } else if (2 === this.direction && 1 === t1.direction) {
            const n = i.from.x, r = s.from.y;
            if (n > s.from.x && n < s.to.x && r > i.from.y && r < i.to.y) {
                const i = new br(n, r);
                this.addIntersectionPoint(i), t1.addIntersectionPoint(i), e = i;
            }
        }
        return e;
    }
    transform(t1) {
        const e = this.from.transform(t1), i = this.to.transform(t1), s = Math.min(e.x, i.x), n = Math.min(e.y, i.y), r = Math.abs(e.x - i.x), a = Math.abs(e.y - i.y);
        return this.from = new br(s, n), this.to = new br(s + r, n + a), this.init(), this;
    }
}
class wr {
    minXY;
    maxXY;
    rows;
    rowPivots;
    colPivots;
    constructor(t1, e, i, s){
        this.minXY = t1, this.maxXY = e, this.rows = [], this.rowPivots = i, this.colPivots = s;
    }
    findCell(t1, e) {
        if (t1 >= this.minXY.x && e >= this.minXY.y && t1 <= this.maxXY.x && e <= this.maxXY.y) {
            for (const i of this.rows)for (const s of i)if (s.minXY.x <= t1 && s.minXY.y <= e && s.maxXY.x >= t1 && s.maxXY.y >= e) return s;
        }
    }
    get cellCount() {
        return this.rows.reduce((t1, e)=>t1 + e.length, 0);
    }
    get rowCount() {
        return this.rows.length;
    }
    check() {
        const t1 = (this.colPivots.length - 1) * (this.rowPivots.length - 1);
        let e = 0;
        for (const i of this.rows)for (const t1 of i){
            e += (t1.colspan || 1) * (t1.rowspan || 1);
        }
        return t1 === e;
    }
    toArray() {
        const t1 = [];
        for (const e of this.rows){
            const i = [];
            for (const t1 of e){
                let e = t1.text.join("");
                e = e.replace(/^[\s]+|[\s]+$/g, ""), e = e.trim(), i.push(e);
            }
            t1.push(i);
        }
        return t1;
    }
}
class xr {
    hLines = [];
    vLines = [];
    constructor(t1){
        t1.direction === vr.Horizontal ? this.hLines.push(t1) : t1.direction === vr.Vertical && this.vLines.push(t1);
    }
    get isValid() {
        return this.hLines.length + this.vLines.length > 4;
    }
    get rowPivots() {
        const t1 = new Set;
        for (const e of this.hLines)t1.add(e.from.y);
        return [
            ...t1
        ].sort((t1, e)=>t1 - e);
    }
    get colPivots() {
        const t1 = new Set;
        for (const e of this.vLines)t1.add(e.from.x);
        return [
            ...t1
        ].sort((t1, e)=>t1 - e);
    }
    add(t1) {
        if (this.intersection(t1)) {
            if (t1.direction === vr.Horizontal) return this.hLines.push(t1), !0;
            if (t1.direction === vr.Vertical) return this.vLines.push(t1), !0;
        }
        return !1;
    }
    intersection(t1) {
        let e = !1;
        if (!t1.valid) return e;
        if (t1.direction === vr.Horizontal) for (const i of this.vLines){
            t1.intersection(i) && (e = !0);
        }
        else if (t1.direction === vr.Vertical) for (const i of this.hLines){
            t1.intersection(i) && (e = !0);
        }
        return e;
    }
    getSameHorizontal(t1) {
        const e = [
            t1
        ], i = [];
        for(; this.hLines.length > 0;){
            const s = this.hLines.shift();
            s && (s.from.y === t1.from.y ? e.push(s) : i.push(s));
        }
        return this.hLines = i, e;
    }
    getSameVertical(t1) {
        const e = [
            t1
        ], i = [];
        for(; this.vLines.length > 0;){
            const s = this.vLines.shift();
            s && (s.from.x === t1.from.x ? e.push(s) : i.push(s));
        }
        return this.vLines = i, e;
    }
    mergeHorizontalLines(t1) {
        t1.sort((t1, e)=>t1.from.x - e.from.x);
        const e = t1[0].from.x, i = t1[t1.length - 1].to.x, s = new yr(new br(e, t1[0].from.y), new br(i, t1[0].from.y));
        for(let n = 1; n < t1.length; n++){
            const e = t1[n - 1], i = t1[n];
            if (Math.abs(e.to.x - i.from.x) > fr.tolerance) {
                const t1 = new yr(new br(e.to.x, e.from.y), new br(i.from.x, i.from.y));
                s.addGap(t1);
            }
        }
        return s;
    }
    mergeVerticalLines(t1) {
        t1.sort((t1, e)=>t1.from.y - e.from.y);
        const e = t1[0].from.y, i = t1[t1.length - 1].to.y, s = new yr(new br(t1[0].from.x, e), new br(t1[0].from.x, i));
        for(let n = 1; n < t1.length; n++){
            const e = t1[n - 1], i = t1[n];
            if (Math.abs(e.to.y - i.from.y) > fr.tolerance) {
                const t1 = new yr(new br(e.to.x, e.to.y), new br(e.to.x, i.from.y));
                s.addGap(t1);
            }
        }
        return s;
    }
    normalize() {
        this.hLines = this.hLines.filter((t1)=>t1.intersections.length > 1), this.vLines = this.vLines.filter((t1)=>t1.intersections.length > 1), this.hLines.sort((t1, e)=>t1.from.y - e.from.y), this.vLines.sort((t1, e)=>t1.from.x - e.from.x);
        const t1 = [];
        for(; this.hLines.length > 0;){
            const e = this.hLines.shift();
            if (!e) continue;
            const i = this.getSameHorizontal(e), s = this.mergeHorizontalLines(i);
            t1.push(s);
        }
        this.hLines = t1;
        const e = [];
        for(; this.vLines.length > 0;){
            const t1 = this.vLines.shift();
            if (!t1) continue;
            const i = this.getSameVertical(t1), s = this.mergeVerticalLines(i);
            e.push(s);
        }
        this.vLines = e;
    }
    verticalExists(t1, e, i) {
        if (t1.direction !== vr.Vertical) throw new Error("Line is not vertical");
        if (e >= i) throw new Error("y1 must be less than y2");
        if (t1.from.y <= e && t1.to.y >= i) {
            for (const s of t1.gaps)if (s.from.y <= e && s.to.y >= i) return !1;
            return !0;
        }
        return !1;
    }
    horizontalExists(t1, e, i) {
        if (t1.direction !== vr.Horizontal) throw new Error("Line is not horizontal");
        if (e >= i) throw new Error("x1 must be less than x2");
        if (t1.from.x <= e && t1.to.x >= i) {
            for (const s of t1.gaps)if (s.from.x <= e && s.to.x >= i) return !1;
            return !0;
        }
        return !1;
    }
    findBottomLineIndex(t1, e) {
        for(let i = t1; i < this.hLines.length; i++){
            const t1 = this.hLines[i];
            if (t1.from.x <= e && t1.to.x >= e) return i;
        }
        return -1;
    }
    findVerticalLineIndexs(t1, e) {
        const i = [];
        for(let s = 0; s < this.vLines.length; s++){
            const n = this.vLines[s];
            n.from.y <= e && n.to.y >= e && t1.intersection(n) && i.push(s);
        }
        return i;
    }
    getRow(t1, e, i) {
        const s = [], n = this.hLines[t1], r = this.findVerticalLineIndexs(n, i);
        for(let a = 1; a < r.length; a++){
            const i = this.vLines[r[a - 1]], o = this.vLines[r[a]], l = (i.from.x + o.from.x) / 2, h = this.findBottomLineIndex(e, l), c = this.hLines[h], d = {
                minXY: new br(i.from.x, n.from.y),
                maxXY: new br(o.from.x, c.from.y),
                width: o.from.x - i.from.x,
                height: c.from.y - n.from.y,
                text: []
            }, u = r[a] - r[a - 1], p = h - t1;
            u > 1 && (d.colspan = u), p > 1 && (d.rowspan = p), s.push(d);
        }
        return s;
    }
    toData() {
        const t1 = this.rowPivots, e = this.colPivots, i = new br(e[0], t1[0]), s = new br(e[e.length - 1], t1[t1.length - 1]), n = new wr(i, s, t1, e);
        for(let r = 1; r < this.hLines.length; r++){
            const t1 = this.hLines[r - 1], e = this.hLines[r], i = (t1.from.y + e.from.y) / 2, s = this.getRow(r - 1, r, i);
            n.rows.push(s);
        }
        return n;
    }
}
class Ar {
    hLines = [];
    vLines = [];
    add(t1) {
        t1.valid && (t1.direction === vr.Horizontal ? this.hLines.push(t1) : t1.direction === vr.Vertical && this.vLines.push(t1));
    }
    addRectangle(t1) {
        for (const e of t1.getLines())this.add(e);
    }
    getTableData() {
        const t1 = [], e = this.getTables();
        for (const i of e){
            const e = i.toData();
            e && t1.push(e);
        }
        return t1;
    }
    getTables() {
        const t1 = [];
        for(; 0 !== this.hLines.length;){
            const e = this.hLines.shift();
            if (!e) continue;
            if (this.tryFill(t1, e)) continue;
            const i = new xr(e);
            this.fillTable(i), t1.push(i);
        }
        for(; 0 !== this.vLines.length;){
            const e = this.vLines.shift();
            if (!e) continue;
            if (this.tryFill(t1, e)) continue;
            const i = new xr(e);
            this.fillTable(i), t1.push(i);
        }
        const e = t1.filter((t1)=>t1.isValid);
        for (const i of e)i.normalize();
        return e;
    }
    normalize() {
        this.normalizeHorizontal(), this.normalizeVertical();
    }
    normalizeHorizontal() {
        this.hLines.sort((t1, e)=>t1.from.y - e.from.y);
        const t1 = [];
        let e = [];
        for (const i of this.hLines)if (0 === e.length) e.push(i);
        else if (Math.abs(e[0]?.from.y - i.from.y) < fr.tolerance) e.push(i);
        else {
            const s = this.margeHorizontalLines(e);
            t1.push(...s), e = [
                i
            ];
        }
        if (e.length > 0) {
            const i = this.margeHorizontalLines(e);
            t1.push(...i);
        }
        this.hLines = t1;
    }
    normalizeVertical() {
        this.vLines.sort((t1, e)=>t1.from.x - e.from.x);
        const t1 = [];
        let e = [];
        for (const i of this.vLines)if (0 === e.length) e.push(i);
        else if (Math.abs(e[0]?.from.x - i.from.x) < fr.tolerance) e.push(i);
        else {
            const s = this.margeVerticalLines(e);
            t1.push(...s), e = [
                i
            ];
        }
        if (e.length > 0) {
            const i = this.margeVerticalLines(e);
            t1.push(...i);
        }
        this.vLines = t1;
    }
    fillTable(t1) {
        const e = [], i = [];
        for (const s of this.vLines)t1.add(s) || e.push(s);
        for (const s of this.hLines)t1.add(s) || i.push(s);
        this.hLines = i, this.vLines = e;
    }
    tryFill(t1, e) {
        for (const i of t1)if (i.add(e)) return this.fillTable(i), !0;
        return !1;
    }
    margeHorizontalLines(t1) {
        const e = [];
        t1.sort((t1, e)=>t1.from.x - e.from.x);
        const i = t1[0]?.from.y;
        if (void 0 === i) return e;
        let s = Number.MAX_SAFE_INTEGER, n = Number.MIN_SAFE_INTEGER;
        for (const a of t1)a.from.x - n < fr.tolerance ? (a.from.x < s && (s = a.from.x), a.to.x > n && (n = a.to.x)) : (n > s && e.push(new yr(new br(s, i), new br(n, i))), s = a.from.x, n = a.to.x);
        const r = e[e.length - 1];
        return r ? r.from.x !== s && r.to.x !== n && e.push(new yr(new br(s, i), new br(n, i))) : e.push(new yr(new br(s, i), new br(n, i))), e;
    }
    margeVerticalLines(t1) {
        const e = [];
        t1.sort((t1, e)=>t1.from.y - e.from.y);
        const i = t1[0]?.from.x;
        if (void 0 === i) return e;
        let s = Number.MAX_SAFE_INTEGER, n = Number.MIN_SAFE_INTEGER;
        for (const a of t1)a.from.y - n < fr.tolerance ? (a.from.y < s && (s = a.from.y), a.to.y > n && (n = a.to.y)) : (n > s && e.push(new yr(new br(i, s), new br(i, n))), s = a.from.y, n = a.to.y);
        const r = e[e.length - 1];
        return r ? r.from.y !== s && r.to.y !== n && e.push(new yr(new br(i, s), new br(i, n))) : e.push(new yr(new br(i, s), new br(i, n))), e;
    }
}
class _r extends fr {
    from;
    width;
    height;
    constructor(t1, e, i){
        super(), this.from = t1, this.width = e, this.height = i;
    }
    get to() {
        return new br(this.from.x + this.width, this.from.y + this.height);
    }
    getLines() {
        const t1 = this.to;
        return [
            new yr(this.from, new br(t1.x, this.from.y)),
            new yr(this.from, new br(this.from.x, t1.y)),
            new yr(new br(t1.x, this.from.y), t1),
            new yr(new br(this.from.x, t1.y), t1)
        ].filter((t1)=>t1.valid);
    }
    transform(t1) {
        const e = fr.applyTransform([
            this.from.x,
            this.from.y
        ], t1), i = fr.applyTransform([
            this.from.x + this.width,
            this.from.y + this.height
        ], t1), s = Math.min(e[0], i[0]), n = Math.min(e[1], i[1]), r = Math.abs(e[0] - i[0]), a = Math.abs(e[1] - i[1]);
        return this.from = new br(s, n), this.width = r, this.height = a, this;
    }
}
class Sr {
    pages = [];
    total = 0;
    getPageImage(t1, e) {
        for (const i of this.pages)if (i.pageNumber === t1) {
            for (const t1 of i.images)if (t1.name === e) return t1;
        }
        return null;
    }
    constructor(t1){
        this.total = t1;
    }
}
const Er = [
    "xmp:createdate",
    "xmp:modifydate",
    "xmp:metadatadate",
    "xap:createdate",
    "xap:modifydate",
    "xap:metadatadate"
];
class Cr {
    total;
    info;
    metadata;
    fingerprints;
    permission;
    outline;
    pages = [];
    getDateNode() {
        const t1 = {}, e = this.info?.CreationDate;
        e && (t1.CreationDate = Yt.toDateObject(e));
        const i = this.info?.ModDate;
        if (i && (t1.ModDate = Yt.toDateObject(i)), !this.metadata) return t1;
        for (const s of Er){
            const e = this.metadata?.get(s), i = this.parseISODateString(e);
            switch(s){
                case Er[0]:
                    t1.XmpCreateDate = i;
                    break;
                case Er[1]:
                    t1.XmpModifyDate = i;
                    break;
                case Er[2]:
                    t1.XmpMetadataDate = i;
                    break;
                case Er[3]:
                    t1.XapCreateDate = i;
                    break;
                case Er[4]:
                    t1.XapModifyDate = i;
                    break;
                case Er[5]:
                    t1.XapMetadataDate = i;
            }
        }
        return t1;
    }
    parseISODateString(t1) {
        if (!t1) return;
        const e = Date.parse(t1);
        return Number.isNaN(e) ? void 0 : new Date(e);
    }
    constructor(t1){
        this.total = t1;
    }
}
function Tr(t1) {
    return t1.lineThreshold = t1?.lineThreshold ?? 4.6, t1.cellThreshold = t1?.cellThreshold ?? 7, t1.cellSeparator = t1?.cellSeparator ?? "\t", t1.lineEnforce = t1?.lineEnforce ?? !0, t1.pageJoiner = t1?.pageJoiner ?? "\n-- page_number of total_number --", t1.imageThreshold = t1?.imageThreshold ?? 80, t1.imageDataUrl = t1?.imageDataUrl ?? !0, t1.imageBuffer = t1?.imageBuffer ?? !0, t1.scale = t1?.scale ?? 1, t1;
}
var Mr = ((t1)=>(t1[t1[void 0] = 0] = "undefined", t1[t1.hline = 1] = "hline", t1[t1.vline = 2] = "vline", t1[t1.rectangle = 3] = "rectangle", t1))(Mr || {});
class Dr {
    pages = [];
    total = 0;
    constructor(t1){
        this.total = t1;
    }
}
class Pr {
    pages = [];
    mergedTables = [];
    total = 0;
    constructor(t1){
        this.total = t1;
    }
}
class kr {
    pages = [];
    text = "";
    total = 0;
    getPageText(t1) {
        for (const e of this.pages)if (e.num === t1) return e.text;
        return "";
    }
    constructor(t1){
        this.total = t1;
    }
}
exports.AbortException = gr, exports.FormatError = dr, exports.InvalidPDFException = hr, exports.Line = yr, exports.LineDirection = vr, exports.LineStore = Ar, exports.PDFParse = class {
    options;
    doc;
    progress = {
        loaded: -1,
        total: 0
    };
    constructor(t1){
        void 0 === t1.verbosity && (t1.verbosity = Z.ERRORS), "undefined" != typeof Buffer && t1.data instanceof Buffer && (t1.data = new Uint8Array(t1.data)), this.options = t1;
    }
    async destroy() {
        this.doc && (await this.doc.destroy(), this.doc = void 0);
    }
    static get isNodeJS() {
        return !("object" != typeof process || "[object process]" != `${process}` || process.versions.nw || process.versions.electron && void 0 !== process.type && "browser" !== process.type);
    }
    static setWorker(t1) {
        return void 0 === globalThis.pdfjs && (globalThis.pdfjs = lr), null === ds ? "" : void 0 !== t1 ? (ds.workerSrc = t1, ds.workerSrc) : ds.workerSrc;
    }
    async getInfo(t1 = {}) {
        const e = await this.load(), i = new Cr(e.numPages), { info: s, metadata: n } = await e.getMetadata();
        i.info = s, i.metadata = n, i.fingerprints = e.fingerprints, i.outline = await e.getOutline(), i.permission = await e.getPermissions();
        const r = await e.getPageLabels();
        if (t1.parsePageInfo) {
            for(let a = 1; a <= i.total; a++)if (this.shouldParse(a, i.total, t1)) {
                const t1 = await e.getPage(a), s = await this.getPageLinks(t1);
                s.pageLabel = r?.[t1.pageNumber], i.pages.push(s), t1.cleanup();
            }
        }
        return i;
    }
    async getPageLinks(t1) {
        const e = t1.getViewport({
            scale: 1
        }), i = {
            pageNumber: t1.pageNumber,
            links: [],
            width: e.width,
            height: e.height
        }, s = await t1.getAnnotations({
            intent: "display"
        }) || [];
        for (const n of s){
            if ("Link" !== n.subtype) continue;
            const t1 = n.url ?? n.unsafeUrl;
            if (!t1) continue;
            const e = n.overlaidText || "";
            i.links.push({
                url: t1,
                text: e
            });
        }
        return i;
    }
    async getText(t1 = {}) {
        const e = await this.load(), i = new kr(e.numPages);
        for(let s = 1; s <= i.total; s++)if (this.shouldParse(s, i.total, t1)) {
            const n = await e.getPage(s), r = await this.getPageText(n, t1, i.total);
            i.pages.push({
                text: r,
                num: s
            }), n.cleanup();
        }
        for (const s of i.pages)if (t1.pageJoiner) {
            let e = t1.pageJoiner.replace("page_number", `${s.num}`);
            e = e.replace("total_number", `${i.total}`), i.text += `${s.text}\n${e}\n\n`;
        } else i.text += `${s.text}\n\n`;
        return i;
    }
    async load() {
        try {
            if (void 0 === this.doc) {
                const t1 = Hs(this.options);
                t1.onProgress = (t1)=>{
                    this.progress = t1;
                }, this.doc = await t1.promise;
            }
            return this.doc;
        } catch (t1) {
            throw mr(t1);
        }
    }
    shouldParse(t1, e, i) {
        return i.partial = i?.partial ?? [], i.first = i?.first ?? 0, i.last = i?.last ?? 0, i.partial.length > 0 ? !!i.partial.includes(t1) : i.first > 0 && i.last > 0 ? t1 >= i.first && t1 <= i.last : i.first > 0 ? t1 <= i.first : !(i.last > 0) || t1 > e - i.last;
    }
    async getPageText(t1, e, i) {
        const s = t1.getViewport({
            scale: 1
        }), n = Tr(e), r = await t1.getTextContent({
            includeMarkedContent: !!n.includeMarkedContent,
            disableNormalization: !!n.disableNormalization
        });
        let a = new Map;
        n.parseHyperlinks && (a = await this.getHyperlinks(t1, s));
        const o = [];
        let l, h, c = 0;
        for (const d of r.items){
            if (!("str" in d)) continue;
            const t1 = d.transform ?? d.transform, [e, i] = s.convertToViewportPoint(t1[4], t1[5]);
            if (n.parseHyperlinks) {
                const t1 = (a.get(d.str) || []).find((t1)=>e >= t1.rect.left && e <= t1.rect.right && i >= t1.rect.top && i <= t1.rect.bottom);
                t1 && (d.str = `[${d.str}](${t1.url})`);
            }
            if (n.lineEnforce && void 0 !== h && Math.abs(h - i) > n.lineThreshold) {
                const t1 = o.length ? o[o.length - 1] : void 0, e = d.str.startsWith("\n") || "" === d.str.trim() && d.hasEOL;
                if (!1 === t1?.endsWith("\n") && !e) {
                    Math.abs(h - i) - 1 > c && (o.push("\n"), c = 0);
                }
            }
            n.cellSeparator && void 0 !== h && Math.abs(h - i) < n.lineThreshold && void 0 !== l && Math.abs(l - e) > n.cellThreshold && (d.str = `${n.cellSeparator}${d.str}`), o.push(d.str), l = e + d.width, h = i, c = Math.max(c, d.height), d.hasEOL && o.push("\n"), (d.hasEOL || d.str.endsWith("\n")) && (c = 0);
        }
        return n.itemJoiner ? o.join(n.itemJoiner) : o.join("");
    }
    async getHyperlinks(t1, e) {
        const i = new Map, s = await t1.getAnnotations({
            intent: "display"
        }) || [];
        for (const n of s){
            if ("Link" !== n.subtype) continue;
            const t1 = n.url ?? n.unsafeUrl;
            if (!t1) continue;
            const s = n.overlaidText;
            if (!s) continue;
            const r = e.convertToViewportRectangle(n.rect), a = {
                rect: {
                    left: Math.min(r[0], r[2]) - .5,
                    top: Math.min(r[1], r[3]) - .5,
                    right: Math.max(r[0], r[2]) + .5,
                    bottom: Math.max(r[1], r[3]) + .5
                },
                url: t1,
                text: s,
                used: !1
            }, o = i.get(s);
            o ? o.push(a) : i.set(s, [
                a
            ]);
        }
        return i;
    }
    async getImage(t1 = {}) {
        const e = await this.load(), i = new Sr(e.numPages);
        Tr(t1);
        for(let s = 1; s <= i.total; s++)if (this.shouldParse(s, i.total, t1)) {
            const n = await e.getPage(s), r = await n.getOperatorList(), a = {
                pageNumber: s,
                images: []
            };
            i.pages.push(a);
            for(let i = 0; i < r.fnArray.length; i++)if (r.fnArray[i] === tt.paintInlineImageXObject || r.fnArray[i] === tt.paintImageXObject) {
                const s = r.argsArray[i][0], o = n.commonObjs.has(s) ? this.resolveEmbeddedImage(n.commonObjs, s) : this.resolveEmbeddedImage(n.objs, s), { width: l, height: h, kind: c, data: d } = await o;
                if (t1.imageThreshold && (t1.imageThreshold >= l || t1.imageThreshold >= h)) continue;
                const u = e.canvasFactory.create(l, h), p = u.context;
                let g = null;
                c === W.RGBA_32BPP ? (g = p.createImageData(l, h), g.data.set(d)) : (g = p.createImageData(l, h), this.convertToRGBA({
                    src: d,
                    dest: new Uint32Array(g.data.buffer),
                    width: l,
                    height: h,
                    kind: c
                })), p.putImageData(g, 0, 0);
                let m = new Uint8Array, f = "";
                if ("function" == typeof u.canvas.toBuffer) {
                    let e;
                    t1.imageBuffer && (e = u.canvas.toBuffer("image/png"), m = new Uint8Array(e)), t1.imageDataUrl && (e || (e = u.canvas.toBuffer("image/png"), m = new Uint8Array(e)), f = `data:image/png;base64,${e.toString("base64")}`);
                } else {
                    if (t1.imageBuffer) {
                        const t1 = u.context.getImageData(0, 0, u.canvas.width, u.canvas.height);
                        m = new Uint8Array(t1.data);
                    }
                    t1.imageDataUrl && (f = u.canvas.toDataURL("image/png"));
                }
                a.images.push({
                    data: m,
                    dataUrl: f,
                    name: s,
                    height: h,
                    width: l,
                    kind: c
                });
            }
        }
        return i;
    }
    convertToRGBA({ src: t1, dest: e, width: i, height: s, kind: n }) {
        if (n === W.RGB_24BPP) for(let r = 0, a = 0; r < t1.length; r += 3, a++){
            const i = t1[r], s = t1[r + 1], n = t1[r + 2];
            e[a] = 255 << 24 | n << 16 | s << 8 | i;
        }
        else if (n === W.GRAYSCALE_1BPP) {
            let n = 0;
            for(let r = 0; r < t1.length; r++){
                const a = t1[r];
                for(let t1 = 7; t1 >= 0 && !(n >= i * s); t1--){
                    const i = 1 == (a >> t1 & 1) ? 255 : 0;
                    e[n++] = 255 << 24 | i << 16 | i << 8 | i;
                }
            }
        } else {
            if (null != n) throw new Error(`convertToRGBA: Unsupported image kind: ${n}. Available kinds: GRAYSCALE_1BPP=${W.GRAYSCALE_1BPP}, RGB_24BPP=${W.RGB_24BPP}, RGBA_32BPP=${W.RGBA_32BPP}`);
            {
                const r = t1.length / (i * s);
                if (Math.abs(r - 3) < .1) for(let i = 0, s = 0; i < t1.length; i += 3, s++){
                    const n = t1[i], r = t1[i + 1], a = t1[i + 2];
                    e[s] = 255 << 24 | a << 16 | r << 8 | n;
                }
                else if (Math.abs(r - 4) < .1) for(let i = 0, s = 0; i < t1.length; i += 4, s++){
                    const n = t1[i], r = t1[i + 1], a = t1[i + 2], o = t1[i + 3];
                    e[s] = o << 24 | a << 16 | r << 8 | n;
                }
                else {
                    if (!(Math.abs(r - 1) < .1)) throw new Error(`convertToRGBA: Cannot infer image format. kind: ${n}, bytesPerPixel: ${r}, width: ${i}, height: ${s}, dataLength: ${t1.length}`);
                    for(let i = 0; i < t1.length; i++){
                        const s = t1[i];
                        e[i] = 255 << 24 | s << 16 | s << 8 | s;
                    }
                }
            }
        }
    }
    resolveEmbeddedImage(t1, e) {
        return new Promise((i, s)=>{
            t1.get(e, (t1)=>{
                if (t1) {
                    let n;
                    if (t1.data instanceof Uint8Array) n = t1.data;
                    else if (t1.data instanceof Uint8ClampedArray) n = new Uint8Array(t1.data);
                    else if (t1.data?.buffer) n = new Uint8Array(t1.data.buffer);
                    else if (t1.bitmap) {
                        const e = this.doc.canvasFactory.create(t1.bitmap.width, t1.bitmap.height);
                        e.context.drawImage(t1.bitmap, 0, 0);
                        const i = e.context.getImageData(0, 0, t1.bitmap.width, t1.bitmap.height);
                        n = new Uint8Array(i.data.buffer);
                    } else ArrayBuffer.isView(t1.data) && (n = new Uint8Array(t1.data.buffer, t1.data.byteOffset, t1.data.byteLength));
                    if (!n) return void s(new Error(`Image object ${e}: data field is empty or invalid. Available fields: ${Object.keys(t1).join(", ")}`));
                    if (0 === n.length) return void s(new Error(`Image object ${e}: data buffer is empty (length: 0)`));
                    i({
                        width: t1.width,
                        height: t1.height,
                        kind: t1.kind,
                        data: n
                    });
                } else s(new Error(`Image object ${e} not found`));
            });
        });
    }
    async getScreenshot(t1 = {}) {
        const e = Tr(t1), i = await this.load(), s = new Dr(i.numPages);
        if (void 0 === this.doc) throw new Error("PDF document not loaded");
        for(let n = 1; n <= s.total; n++)if (this.shouldParse(n, s.total, e)) {
            const t1 = await this.doc.getPage(n);
            let i = t1.getViewport({
                scale: e.scale
            });
            if (e.desiredWidth) {
                i = t1.getViewport({
                    scale: 1
                });
                const s = e.desiredWidth / i.width;
                i = t1.getViewport({
                    scale: s
                });
            }
            const r = this.doc.canvasFactory.create(i.width, i.height), a = {
                canvasContext: r.context,
                viewport: i,
                canvas: r.canvas
            }, o = t1.render(a);
            await o.promise;
            let l = new Uint8Array, h = "";
            if ("function" == typeof r.canvas.toBuffer) {
                let t1;
                e.imageBuffer && (t1 = r.canvas.toBuffer("image/png"), l = new Uint8Array(t1)), e.imageDataUrl && (t1 || (t1 = r.canvas.toBuffer("image/png"), l = new Uint8Array(t1)), h = `data:image/png;base64,${t1.toString("base64")}`);
            } else {
                if (e.imageBuffer) {
                    const t1 = r.context.getImageData(0, 0, r.canvas.width, r.canvas.height);
                    l = new Uint8Array(t1.data);
                }
                e.imageDataUrl && (h = r.canvas.toDataURL("image/png"));
            }
            s.pages.push({
                data: l,
                dataUrl: h,
                pageNumber: n,
                width: i.width,
                height: i.height,
                scale: i.scale
            }), t1.cleanup();
        }
        return s;
    }
    async getTable(t1 = {}) {
        const e = await this.load(), i = new Pr(e.numPages);
        if (void 0 === this.doc) throw new Error("PDF document not loaded");
        for(let s = 1; s <= i.total; s++)if (this.shouldParse(s, i.total, t1)) {
            const t1 = await this.doc.getPage(s), e = await this.getPageTables(t1);
            e.normalize();
            const n = e.getTableData();
            await this.fillPageTables(t1, n);
            const r = {
                num: s,
                tables: []
            };
            for (const i of n)r.tables.push(i.toArray());
            i.pages.push(r), t1.cleanup();
        }
        return i;
    }
    getPathGeometry(t1) {
        const e = t1[2] - t1[0], i = t1[3] - t1[1];
        return t1[0] === 1 / 0 ? Mr.undefined : e > 5 && i > 5 ? Mr.rectangle : e > 5 && 0 === i ? Mr.hline : 0 === e && i > 5 ? Mr.vline : Mr.undefined;
    }
    async getPageTables(t1) {
        const e = new Ar, i = t1.getViewport({
            scale: 1
        });
        let s = [
            1,
            0,
            0,
            1,
            0,
            0
        ];
        const n = [], r = await t1.getOperatorList();
        for(let a = 0; a < r.fnArray.length; a++){
            const t1 = r.fnArray[a], o = r.argsArray[a], l = o?.[0] ?? 0, h = o?.[2] ?? [
                1 / 0,
                1 / 0,
                -1 / 0,
                -1 / 0
            ];
            if (t1 === tt.constructPath) {
                if (l !== tt.stroke) continue;
                const t1 = this.getPathGeometry(h);
                if (t1 === Mr.rectangle) {
                    const t1 = new _r(new br(h[0], h[1]), h[2] - h[0], h[3] - h[1]);
                    t1.transform(s), t1.transform(i.transform), e.addRectangle(t1);
                } else if (t1 === Mr.hline || t1 === Mr.vline) {
                    const t1 = new br(h[0], h[1]), n = new br(h[2], h[3]), r = new yr(t1, n);
                    r.transform(s), r.transform(i.transform), e.add(r);
                }
            } else if (t1 === tt.setLineWidth) ;
            else if (t1 === tt.save) n.push(s);
            else if (t1 === tt.restore) {
                const t1 = n.pop();
                t1 && (s = t1);
            } else t1 === tt.transform && (s = Ct.transform(s, o));
        }
        return e;
    }
    async fillPageTables(t1, e) {
        const i = t1.getViewport({
            scale: 1
        }), s = await t1.getTextContent({
            includeMarkedContent: !1,
            disableNormalization: !1
        });
        for (const n of s.items){
            if (!("str" in n)) continue;
            const t1 = Ct.transform(Ct.transform(i.transform, n.transform), [
                1,
                0,
                0,
                -1,
                0,
                0
            ]);
            for (const i of e){
                const e = i.findCell(t1[4], t1[5]);
                if (e) {
                    e.text.push(n.str), n.hasEOL && e.text.push("\n");
                    break;
                }
            }
        }
    }
}, exports.PasswordException = cr, exports.Point = br, exports.Rectangle = _r, exports.ResponseException = pr, exports.Shape = fr, exports.Table = xr, exports.UnknownErrorException = ur, exports.VerbosityLevel = Z, exports.getException = mr; //# sourceMappingURL=index.cjs.map
}),
];

//# sourceMappingURL=67e58_pdf-parse_dist_pdf-parse_cjs_index_cjs_fc593a99._.js.map