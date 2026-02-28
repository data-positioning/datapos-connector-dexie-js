var oo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function io(ae) {
  return ae && ae.__esModule && Object.prototype.hasOwnProperty.call(ae, "default") ? ae.default : ae;
}
var Lt = { exports: {} }, ao = Lt.exports, br;
function uo() {
  return br || (br = 1, (function(ae, R) {
    ((q, P) => {
      ae.exports = P();
    })(ao, function() {
      var q = function(e, t) {
        return (q = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function(n, r) {
          n.__proto__ = r;
        } : function(n, r) {
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
        }))(e, t);
      }, P = function() {
        return (P = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
      };
      function T(e, t, n) {
        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var S = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : oo, $ = Object.keys, M = Array.isArray;
      function X(e, t) {
        return typeof t == "object" && $(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || S.Promise || (S.Promise = Promise);
      var ue = Object.getPrototypeOf, wr = {}.hasOwnProperty;
      function te(e, t) {
        return wr.call(e, t);
      }
      function Be(e, t) {
        typeof t == "function" && (t = t(ue(e))), (typeof Reflect > "u" ? $ : Reflect.ownKeys)(t).forEach(function(n) {
          me(e, n, t[n]);
        });
      }
      var jn = Object.defineProperty;
      function me(e, t, n, r) {
        jn(e, t, X(n && te(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function Ne(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), me(e.prototype, "constructor", e), { extend: Be.bind(null, e.prototype) };
        } };
      }
      var _r = Object.getOwnPropertyDescriptor, xr = [].slice;
      function dt(e, t, n) {
        return xr.call(e, t, n);
      }
      function In(e, t) {
        return t(e);
      }
      function Xe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Sn(e) {
        S.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function fe(e, t) {
        if (typeof t == "string" && te(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, o = t.length; r < o; ++r) {
            var i = fe(e, t[r]);
            n.push(i);
          }
          return n;
        }
        var a, u = t.indexOf(".");
        return u === -1 || (a = e[t.substr(0, u)]) == null ? void 0 : fe(a, t.substr(u + 1));
      }
      function ne(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          Xe(typeof n != "string" && "length" in n);
          for (var r = 0, o = t.length; r < o; ++r) ne(e, t[r], n[r]);
        } else {
          var i, a, u = t.indexOf(".");
          u !== -1 ? (i = t.substr(0, u), (u = t.substr(u + 1)) === "" ? n === void 0 ? M(e) && !isNaN(parseInt(i)) ? e.splice(i, 1) : delete e[i] : e[i] = n : ne(a = (a = e[i]) && te(e, i) ? a : e[i] = {}, u, n)) : n === void 0 ? M(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function An(e) {
        var t, n = {};
        for (t in e) te(e, t) && (n[t] = e[t]);
        return n;
      }
      var kr = [].concat;
      function Dn(e) {
        return kr.apply([], e);
      }
      var de = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Dn([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return S[e];
      }), Rn = new Set(de.map(function(e) {
        return S[e];
      })), Je = null;
      function Pe(e) {
        return Je = /* @__PURE__ */ new WeakMap(), e = (function t(n) {
          if (!n || typeof n != "object") return n;
          var r = Je.get(n);
          if (r) return r;
          if (M(n)) {
            r = [], Je.set(n, r);
            for (var o = 0, i = n.length; o < i; ++o) r.push(t(n[o]));
          } else if (Rn.has(n.constructor)) r = n;
          else {
            var a, u = ue(n);
            for (a in r = u === Object.prototype ? {} : Object.create(u), Je.set(n, r), n) te(n, a) && (r[a] = t(n[a]));
          }
          return r;
        })(e), Je = null, e;
      }
      var Or = {}.toString;
      function Ut(e) {
        return Or.call(e).slice(8, -1);
      }
      var $t = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Pr = typeof $t == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[$t]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ee(e, t) {
        t = e.indexOf(t), 0 <= t && e.splice(t, 1);
      }
      var Me = {};
      function he(e) {
        var t, n, r, o;
        if (arguments.length === 1) {
          if (M(e)) return e.slice();
          if (this === Me && typeof e == "string") return [e];
          if (o = Pr(e)) for (n = []; !(r = o.next()).done; ) n.push(r.value);
          else {
            if (e == null) return [e];
            if (typeof (t = e.length) != "number") return [e];
            for (n = new Array(t); t--; ) n[t] = e[t];
          }
        } else for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
        return n;
      }
      var zt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, de = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], re = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(de), Er = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Fe(e, t) {
        this.name = e, this.message = t;
      }
      function Tn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, o) {
          return o.indexOf(n) === r;
        }).join(`
`);
      }
      function pt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = Tn(e, t);
      }
      function Le(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = Tn(e, this.failures);
      }
      Ne(Fe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Ne(pt).from(Fe), Ne(Le).from(Fe);
      var Vt = re.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), Cr = Fe, A = re.reduce(function(e, t) {
        var n = t + "Error";
        function r(o, i) {
          this.name = n, o ? typeof o == "string" ? (this.message = "".concat(o).concat(i ? `
 ` + i : ""), this.inner = i || null) : typeof o == "object" && (this.message = "".concat(o.name, " ").concat(o.message), this.inner = o) : (this.message = Er[t] || n, this.inner = null);
        }
        return Ne(r).from(Cr), e[t] = r, e;
      }, {}), qn = (A.Syntax = SyntaxError, A.Type = TypeError, A.Range = RangeError, de.reduce(function(e, t) {
        return e[t + "Error"] = A[t], e;
      }, {}));
      de = re.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = A[t]), e;
      }, {});
      function z() {
      }
      function Ze(e) {
        return e;
      }
      function Kr(e, t) {
        return e == null || e === Ze ? t : function(n) {
          return t(e(n));
        };
      }
      function Ce(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function jr(e, t) {
        return e === z ? t : function() {
          var n = e.apply(this, arguments), r = (n !== void 0 && (arguments[0] = n), this.onsuccess), o = this.onerror, i = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
          return r && (this.onsuccess = this.onsuccess ? Ce(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Ce(o, this.onerror) : o), i !== void 0 ? i : n;
        };
      }
      function Ir(e, t) {
        return e === z ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ce(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ce(r, this.onerror) : r);
        };
      }
      function Sr(e, t) {
        return e === z ? t : function(o) {
          var r = e.apply(this, arguments), o = (X(o, r), this.onsuccess), i = this.onerror, a = (this.onsuccess = null, this.onerror = null, t.apply(this, arguments));
          return o && (this.onsuccess = this.onsuccess ? Ce(o, this.onsuccess) : o), i && (this.onerror = this.onerror ? Ce(i, this.onerror) : i), r === void 0 ? a === void 0 ? void 0 : a : X(r, a);
        };
      }
      function Ar(e, t) {
        return e === z ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function Yt(e, t) {
        return e === z ? t : function() {
          var n = e.apply(this, arguments);
          if (n && typeof n.then == "function") {
            for (var r = this, o = arguments.length, i = new Array(o); o--; ) i[o] = arguments[o];
            return n.then(function() {
              return t.apply(r, i);
            });
          }
          return t.apply(this, arguments);
        };
      }
      de.ModifyError = pt, de.DexieError = Fe, de.BulkError = Le;
      var se = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Bn(e) {
        se = e;
      }
      var et = {}, Nn = 100, tt = typeof Promise > "u" ? [] : (re = Promise.resolve(), typeof crypto < "u" && crypto.subtle ? [tt = crypto.subtle.digest("SHA-512", new Uint8Array([0])), ue(tt), re] : [re, ue(re), re]), re = tt[0], Ge = tt[1], Ge = Ge && Ge.then, Ke = re && re.constructor, Wt = !!tt[2], nt = function(e, t) {
        rt.push([e, t]), yt && (queueMicrotask(Rr), yt = !1);
      }, Qt = !0, yt = !0, je = [], mt = [], Gt = Ze, ve = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: z, pgp: !1, env: {}, finalize: z }, I = ve, rt = [], Ie = 0, vt = [];
      function E(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = I;
        if (typeof e != "function") {
          if (e !== et) throw new TypeError("Not a function");
          this._state = arguments[1], this._value = arguments[2], this._state === !1 && Xt(this, this._value);
        } else this._state = null, this._value = null, ++t.ref, (function n(r, o) {
          try {
            o(function(i) {
              if (r._state === null) {
                if (i === r) throw new TypeError("A promise cannot be resolved with itself.");
                var a = r._lib && Ue();
                i && typeof i.then == "function" ? n(r, function(u, l) {
                  i instanceof E ? i._then(u, l) : i.then(u, l);
                }) : (r._state = !0, r._value = i, Fn(r)), a && $e();
              }
            }, Xt.bind(null, r));
          } catch (i) {
            Xt(r, i);
          }
        })(this, e);
      }
      var Ht = { get: function() {
        var e = I, t = _t;
        function n(r, o) {
          var i = this, a = !e.global && (e !== I || t !== _t), u = a && !ge(), l = new E(function(m, f) {
            Jt(i, new Mn(Un(r, e, a, u), Un(o, e, a, u), m, f, e));
          });
          return this._consoleTask && (l._consoleTask = this._consoleTask), l;
        }
        return n.prototype = et, n;
      }, set: function(e) {
        me(this, "then", e && e.prototype === et ? Ht : { get: function() {
          return e;
        }, set: Ht.set });
      } };
      function Mn(e, t, n, r, o) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = o;
      }
      function Xt(e, t) {
        var n, r;
        mt.push(t), e._state === null && (n = e._lib && Ue(), t = Gt(t), e._state = !1, e._value = t, r = e, je.some(function(o) {
          return o._value === r._value;
        }) || je.push(r), Fn(e), n) && $e();
      }
      function Fn(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) Jt(e, t[n]);
        var o = e._PSD;
        --o.ref || o.finalize(), Ie === 0 && (++Ie, nt(function() {
          --Ie == 0 && Zt();
        }, []));
      }
      function Jt(e, t) {
        if (e._state === null) e._listeners.push(t);
        else {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ie, nt(Dr, [n, e, t]);
        }
      }
      function Dr(e, t, n) {
        try {
          var r, o = t._value;
          !t._state && mt.length && (mt = []), r = se && t._consoleTask ? t._consoleTask.run(function() {
            return e(o);
          }) : e(o), t._state || mt.indexOf(o) !== -1 || ((i) => {
            for (var a = je.length; a; ) if (je[--a]._value === i._value) return je.splice(a, 1);
          })(t), n.resolve(r);
        } catch (i) {
          n.reject(i);
        } finally {
          --Ie == 0 && Zt(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Rr() {
        Se(ve, function() {
          Ue() && $e();
        });
      }
      function Ue() {
        var e = Qt;
        return yt = Qt = !1, e;
      }
      function $e() {
        var e, t, n;
        do
          for (; 0 < rt.length; ) for (e = rt, rt = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < rt.length);
        yt = Qt = !0;
      }
      function Zt() {
        for (var e = je, t = (je = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        }), vt.slice(0)), n = t.length; n; ) t[--n]();
      }
      function bt(e) {
        return new E(et, !1, e);
      }
      function Y(e, t) {
        var n = I;
        return function() {
          var r = Ue(), o = I;
          try {
            return we(n, !0), e.apply(this, arguments);
          } catch (i) {
            t && t(i);
          } finally {
            we(o, !1), r && $e();
          }
        };
      }
      Be(E.prototype, { then: Ht, _then: function(e, t) {
        Jt(this, new Mn(null, null, e, t, I));
      }, catch: function(e) {
        var t, n;
        return arguments.length === 1 ? this.then(null, e) : (t = e, n = arguments[1], typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : bt)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : bt)(r);
        }));
      }, finally: function(e) {
        return this.then(function(t) {
          return E.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return E.resolve(e()).then(function() {
            return bt(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new E(function(r, o) {
          var i = setTimeout(function() {
            return o(new A.Timeout(t));
          }, e);
          n.then(r, o).finally(clearTimeout.bind(null, i));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && me(E.prototype, Symbol.toStringTag, "Dexie.Promise"), ve.env = Ln(), Be(E, { all: function() {
        var e = he.apply(null, arguments).map(xt);
        return new E(function(t, n) {
          e.length === 0 && t([]);
          var r = e.length;
          e.forEach(function(o, i) {
            return E.resolve(o).then(function(a) {
              e[i] = a, --r || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof E ? e : e && typeof e.then == "function" ? new E(function(t, n) {
          e.then(t, n);
        }) : new E(et, !0, e);
      }, reject: bt, race: function() {
        var e = he.apply(null, arguments).map(xt);
        return new E(function(t, n) {
          e.map(function(r) {
            return E.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return I;
      }, set: function(e) {
        return I = e;
      } }, totalEchoes: { get: function() {
        return _t;
      } }, newPSD: be, usePSD: Se, scheduler: { get: function() {
        return nt;
      }, set: function(e) {
        nt = e;
      } }, rejectionMapper: { get: function() {
        return Gt;
      }, set: function(e) {
        Gt = e;
      } }, follow: function(e, t) {
        return new E(function(n, r) {
          return be(function(o, i) {
            var a = I;
            a.unhandleds = [], a.onunhandled = i, a.finalize = Ce(function() {
              var u, l = this;
              u = function() {
                l.unhandleds.length === 0 ? o() : i(l.unhandleds[0]);
              }, vt.push(function m() {
                u(), vt.splice(vt.indexOf(m), 1);
              }), ++Ie, nt(function() {
                --Ie == 0 && Zt();
              }, []);
            }, a.finalize), e();
          }, t, n, r);
        });
      } }), Ke && (Ke.allSettled && me(E, "allSettled", function() {
        var e = he.apply(null, arguments).map(xt);
        return new E(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(o, i) {
            return E.resolve(o).then(function(a) {
              return r[i] = { status: "fulfilled", value: a };
            }, function(a) {
              return r[i] = { status: "rejected", reason: a };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), Ke.any && typeof AggregateError < "u" && me(E, "any", function() {
        var e = he.apply(null, arguments).map(xt);
        return new E(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, o = new Array(r);
          e.forEach(function(i, a) {
            return E.resolve(i).then(function(u) {
              return t(u);
            }, function(u) {
              o[a] = u, --r || n(new AggregateError(o));
            });
          });
        });
      }), Ke.withResolvers) && (E.withResolvers = Ke.withResolvers);
      var J = { awaits: 0, echoes: 0, id: 0 }, Tr = 0, gt = [], wt = 0, _t = 0, qr = 0;
      function be(e, a, n, r) {
        var o = I, i = Object.create(o), a = (i.parent = o, i.ref = 0, i.global = !1, i.id = ++qr, ve.env, i.env = Wt ? { Promise: E, PromiseProp: { value: E, configurable: !0, writable: !0 }, all: E.all, race: E.race, allSettled: E.allSettled, any: E.any, resolve: E.resolve, reject: E.reject } : {}, a && X(i, a), ++o.ref, i.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, Se(i, e, n, r));
        return i.ref === 0 && i.finalize(), a;
      }
      function ze() {
        return J.id || (J.id = ++Tr), ++J.awaits, J.echoes += Nn, J.id;
      }
      function ge() {
        return !!J.awaits && (--J.awaits == 0 && (J.id = 0), J.echoes = J.awaits * Nn, !0);
      }
      function xt(e) {
        return J.echoes && e && e.constructor === Ke ? (ze(), e.then(function(t) {
          return ge(), t;
        }, function(t) {
          return ge(), G(t);
        })) : e;
      }
      function Br() {
        var e = gt[gt.length - 1];
        gt.pop(), we(e, !1);
      }
      function we(e, t) {
        var n, r, o = I;
        (t ? !J.echoes || wt++ && e === I : !wt || --wt && e === I) || queueMicrotask(t ? function(i) {
          ++_t, J.echoes && --J.echoes != 0 || (J.echoes = J.awaits = J.id = 0), gt.push(I), we(i, !0);
        }.bind(null, e) : Br), e !== I && (I = e, o === ve && (ve.env = Ln()), Wt) && (n = ve.env.Promise, r = e.env, o.global || e.global) && (Object.defineProperty(S, "Promise", r.PromiseProp), n.all = r.all, n.race = r.race, n.resolve = r.resolve, n.reject = r.reject, r.allSettled && (n.allSettled = r.allSettled), r.any) && (n.any = r.any);
      }
      function Ln() {
        var e = S.Promise;
        return Wt ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(S, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Se(e, t, n, r, o) {
        var i = I;
        try {
          return we(e, !0), t(n, r, o);
        } finally {
          we(i, !1);
        }
      }
      function Un(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var o = I;
          n && ze(), we(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            we(o, !1), r && queueMicrotask(ge);
          }
        };
      }
      function en(e) {
        Promise === Ke && J.echoes === 0 ? wt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Ge).indexOf("[native code]") === -1 && (ze = ge = z);
      var G = E.reject, Ae = "￿", pe = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", $n = "String expected.", Ve = [], kt = "__dbnames", tn = "readonly", nn = "readwrite";
      function De(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var zn = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Ot(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Pe(t))[e], t;
        };
      }
      function Vn() {
        throw A.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function N(e, t) {
        try {
          var n = Yn(e), r = Yn(t);
          if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              for (var o = Wn(e), i = Wn(t), a = o.length, u = i.length, l = a < u ? a : u, m = 0; m < l; ++m) if (o[m] !== i[m]) return o[m] < i[m] ? -1 : 1;
              return a === u ? 0 : a < u ? -1 : 1;
            case "Array":
              for (var f = e, s = t, d = f.length, p = s.length, h = d < p ? d : p, c = 0; c < h; ++c) {
                var v = N(f[c], s[c]);
                if (v !== 0) return v;
              }
              return d === p ? 0 : d < p ? -1 : 1;
          }
        } catch {
        }
        return NaN;
      }
      function Yn(e) {
        var t = typeof e;
        return t == "object" && (ArrayBuffer.isView(e) || (t = Ut(e)) === "ArrayBuffer") ? "binary" : t;
      }
      function Wn(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Pt(e, t, n) {
        var r = e.schema.yProps;
        return r ? (t && 0 < n.numFailures && (t = t.filter(function(o, i) {
          return !n.failures[i];
        })), Promise.all(r.map(function(o) {
          return o = o.updatesTable, t ? e.db.table(o).where("k").anyOf(t).delete() : e.db.table(o).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      Qn.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (M(n)) return T(T([], M(e) ? e : [], !0), n).sort();
          if (typeof n == "number") return (Number(e) || 0) + n;
          if (typeof n == "bigint") try {
            return BigInt(e) + n;
          } catch {
            return BigInt(0) + n;
          }
          throw new TypeError("Invalid term ".concat(n));
        }
        if (t.remove !== void 0) {
          var r = t.remove;
          if (M(r)) return M(e) ? e.filter(function(o) {
            return !r.includes(o);
          }).sort() : [];
          if (typeof r == "number") return Number(e) - r;
          if (typeof r == "bigint") try {
            return BigInt(e) - r;
          } catch {
            return BigInt(0) - r;
          }
          throw new TypeError("Invalid subtrahend ".concat(r));
        }
        return n = (n = t.replacePrefix) == null ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
      };
      var ot = Qn;
      function Qn(e) {
        this["@@propmod"] = e;
      }
      function Gn(e, t) {
        for (var n = $(t), r = n.length, o = !1, i = 0; i < r; ++i) {
          var a = n[i], u = t[a], l = fe(e, a);
          u instanceof ot ? (ne(e, a, u.execute(l)), o = !0) : l !== u && (ne(e, a, u), o = !0);
        }
        return o;
      }
      V.prototype._trans = function(e, t, n) {
        var r = this._tx || I.trans, o = this.name, i = se && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function a(m, f, s) {
          if (s.schema[o]) return t(s.idbtrans, s);
          throw new A.NotFound("Table " + o + " not part of transaction");
        }
        var u = Ue();
        try {
          var l = r && r.db._novip === this.db._novip ? r === I.trans ? r._promise(e, a, n) : be(function() {
            return r._promise(e, a, n);
          }, { trans: r, transless: I.transless || I }) : (function m(f, s, d, p) {
            if (f.idbdb && (f._state.openComplete || I.letThrough || f._vip)) {
              var h = f._createTransaction(s, d, f._dbSchema);
              try {
                h.create(), f._state.PR1398_maxLoop = 3;
              } catch (c) {
                return c.name === Vt.InvalidState && f.isOpen() && 0 < --f._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), f.close({ disableAutoOpen: !1 }), f.open().then(function() {
                  return m(f, s, d, p);
                })) : G(c);
              }
              return h._promise(s, function(c, v) {
                return be(function() {
                  return I.trans = h, p(c, v, h);
                });
              }).then(function(c) {
                if (s === "readwrite") try {
                  h.idbtrans.commit();
                } catch {
                }
                return s === "readonly" ? c : h._completion.then(function() {
                  return c;
                });
              });
            }
            if (f._state.openComplete) return G(new A.DatabaseClosed(f._state.dbOpenError));
            if (!f._state.isBeingOpened) {
              if (!f._state.autoOpen) return G(new A.DatabaseClosed());
              f.open().catch(z);
            }
            return f._state.dbReadyPromise.then(function() {
              return m(f, s, d, p);
            });
          })(this.db, e, [this.name], a);
          return i && (l._consoleTask = i, l = l.catch(function(m) {
            return console.trace(m), G(m);
          })), l;
        } finally {
          u && $e();
        }
      }, V.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? G(new A.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(o) {
            return n.hook.reading.fire(o);
          });
        }).then(t);
      }, V.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (M(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = $(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(u) {
          if (u.compound && t.every(function(m) {
            return 0 <= u.keyPath.indexOf(m);
          })) {
            for (var l = 0; l < t.length; ++l) if (t.indexOf(u.keyPath[l]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(u, l) {
          return u.keyPath.length - l.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== Ae) return a = n.keyPath.slice(0, t.length), this.where(a).equals(a.map(function(u) {
          return e[u];
        }));
        !n && se && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function o(u, l) {
          return N(u, l) === 0;
        }
        var a = t.reduce(function(f, l) {
          var m = f[0], f = f[1], s = r[l], d = e[l];
          return [m || s, m || !s ? De(f, s && s.multi ? function(p) {
            return p = fe(p, l), M(p) && p.some(function(h) {
              return o(d, h);
            });
          } : function(p) {
            return o(d, fe(p, l));
          }) : f];
        }, [null, null]), i = a[0], a = a[1];
        return i ? this.where(i.name).equals(e[i.keyPath]).filter(a) : n ? this.filter(a) : this.where(t).equals("");
      }, V.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, V.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, V.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, V.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, V.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, V.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, V.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, V.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, M(e) ? "[".concat(e.join("+"), "]") : e));
      }, V.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, V.prototype.mapToClass = function(e) {
        for (var t = this.db, n = this.name, r = ((this.schema.mappedClass = e).prototype instanceof Vn && (e = ((a) => {
          var u = f, l = a;
          if (typeof l != "function" && l !== null) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
          function m() {
            this.constructor = u;
          }
          function f() {
            return a !== null && a.apply(this, arguments) || this;
          }
          return q(u, l), u.prototype = l === null ? Object.create(l) : (m.prototype = l.prototype, new m()), Object.defineProperty(f.prototype, "db", { get: function() {
            return t;
          }, enumerable: !1, configurable: !0 }), f.prototype.table = function() {
            return n;
          }, f;
        })(e)), /* @__PURE__ */ new Set()), o = e.prototype; o; o = ue(o)) Object.getOwnPropertyNames(o).forEach(function(a) {
          return r.add(a);
        });
        function i(a) {
          if (!a) return a;
          var u, l = Object.create(e.prototype);
          for (u in a) if (!r.has(u)) try {
            l[u] = a[u];
          } catch {
          }
          return l;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = i, this.hook("reading", i), e;
      }, V.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          X(this, e);
        });
      }, V.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, o = r.auto, i = r.keyPath, a = e;
        return i && o && (a = Ot(i)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "add", keys: t != null ? [t] : null, values: [a] });
        }).then(function(u) {
          return u.numFailures ? E.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (i) try {
            ne(e, i, u);
          } catch {
          }
          return u;
        });
      }, V.prototype.upsert = function(e, t) {
        var n = this, r = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(o) {
          return n.core.get({ trans: o, key: e }).then(function(i) {
            var a = i ?? {};
            return Gn(a, t), r && ne(a, r, e), n.core.mutate({ trans: o, type: "put", values: [a], keys: [e], upsert: !0, updates: { keys: [e], changeSpecs: [t] } }).then(function(u) {
              return u.numFailures ? E.reject(u.failures[0]) : !!i;
            });
          });
        });
      }, V.prototype.update = function(e, t) {
        return typeof e != "object" || M(e) ? this.where(":id").equals(e).modify(t) : (e = fe(e, this.schema.primKey.keyPath)) === void 0 ? G(new A.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t);
      }, V.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, o = r.auto, i = r.keyPath, a = e;
        return i && o && (a = Ot(i)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "put", values: [a], keys: t != null ? [t] : null });
        }).then(function(u) {
          return u.numFailures ? E.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (i) try {
            ne(e, i, u);
          } catch {
          }
          return u;
        });
      }, V.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] }).then(function(r) {
            return Pt(t, [e], r);
          }).then(function(r) {
            return r.numFailures ? E.reject(r.failures[0]) : void 0;
          });
        });
      }, V.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: zn }).then(function(n) {
            return Pt(e, null, n);
          });
        }).then(function(t) {
          return t.numFailures ? E.reject(t.failures[0]) : void 0;
        });
      }, V.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(n) {
          return t.core.getMany({ keys: e, trans: n }).then(function(r) {
            return r.map(function(o) {
              return t.hook.reading.fire(o);
            });
          });
        });
      }, V.prototype.bulkAdd = function(e, t, n) {
        var r = this, o = Array.isArray(t) ? t : void 0, i = (n = n || (o ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var u = r.schema.primKey, m = u.auto, u = u.keyPath;
          if (u && o) throw new A.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (o && o.length !== e.length) throw new A.InvalidArgument("Arguments objects and keys must have the same length");
          var l = e.length, m = u && m ? e.map(Ot(u)) : e;
          return r.core.mutate({ trans: a, type: "add", keys: o, values: m, wantResults: i }).then(function(f) {
            var s = f.numFailures, d = f.failures;
            if (s === 0) return i ? f.results : f.lastResult;
            throw new Le("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(l, " operations failed"), d);
          });
        });
      }, V.prototype.bulkPut = function(e, t, n) {
        var r = this, o = Array.isArray(t) ? t : void 0, i = (n = n || (o ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var u = r.schema.primKey, m = u.auto, u = u.keyPath;
          if (u && o) throw new A.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (o && o.length !== e.length) throw new A.InvalidArgument("Arguments objects and keys must have the same length");
          var l = e.length, m = u && m ? e.map(Ot(u)) : e;
          return r.core.mutate({ trans: a, type: "put", keys: o, values: m, wantResults: i }).then(function(f) {
            var s = f.numFailures, d = f.failures;
            if (s === 0) return i ? f.results : f.lastResult;
            throw new Le("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(l, " operations failed"), d);
          });
        });
      }, V.prototype.bulkUpdate = function(e) {
        var t = this, n = this.core, r = e.map(function(a) {
          return a.key;
        }), o = e.map(function(a) {
          return a.changes;
        }), i = [];
        return this._trans("readwrite", function(a) {
          return n.getMany({ trans: a, keys: r, cache: "clone" }).then(function(u) {
            var l = [], m = [], f = (e.forEach(function(s, d) {
              var p = s.key, h = s.changes, c = u[d];
              if (c) {
                for (var v = 0, b = Object.keys(h); v < b.length; v++) {
                  var y = b[v], g = h[y];
                  if (y === t.schema.primKey.keyPath) {
                    if (N(g, p) !== 0) throw new A.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ne(c, y, g);
                }
                i.push(d), l.push(p), m.push(c);
              }
            }), l.length);
            return n.mutate({ trans: a, type: "put", keys: l, values: m, updates: { keys: r, changeSpecs: o } }).then(function(s) {
              var d = s.numFailures, p = s.failures;
              if (d === 0) return f;
              for (var h = 0, c = Object.keys(p); h < c.length; h++) {
                var v, b = c[h], y = i[Number(b)];
                y != null && (v = p[b], delete p[b], p[y] = v);
              }
              throw new Le("".concat(t.name, ".bulkUpdate(): ").concat(d, " of ").concat(f, " operations failed"), p);
            });
          });
        });
      }, V.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e }).then(function(o) {
            return Pt(t, e, o);
          });
        }).then(function(r) {
          var o = r.numFailures, i = r.failures;
          if (o === 0) return r.lastResult;
          throw new Le("".concat(t.name, ".bulkDelete(): ").concat(o, " of ").concat(n, " operations failed"), i);
        });
      };
      var Hn = V;
      function V() {
      }
      function it(e) {
        function t(a, u) {
          if (u) {
            for (var l = arguments.length, m = new Array(l - 1); --l; ) m[l - 1] = arguments[l];
            return n[a].subscribe.apply(null, m), e;
          }
          if (typeof a == "string") return n[a];
        }
        var n = {};
        t.addEventType = i;
        for (var r = 1, o = arguments.length; r < o; ++r) i(arguments[r]);
        return t;
        function i(a, u, l) {
          var m, f;
          if (typeof a != "object") return u = u || Ar, f = { subscribers: [], fire: l = l || z, subscribe: function(s) {
            f.subscribers.indexOf(s) === -1 && (f.subscribers.push(s), f.fire = u(f.fire, s));
          }, unsubscribe: function(s) {
            f.subscribers = f.subscribers.filter(function(d) {
              return d !== s;
            }), f.fire = f.subscribers.reduce(u, l);
          } }, n[a] = t[a] = f;
          $(m = a).forEach(function(s) {
            var d = m[s];
            if (M(d)) i(s, m[s][0], m[s][1]);
            else {
              if (d !== "asap") throw new A.InvalidArgument("Invalid event config");
              var p = i(s, Ze, function() {
                for (var h = arguments.length, c = new Array(h); h--; ) c[h] = arguments[h];
                p.subscribers.forEach(function(v) {
                  Sn(function() {
                    v.apply(null, c);
                  });
                });
              });
            }
          });
        }
      }
      function at(e, t) {
        return Ne(t).from({ prototype: e }), t;
      }
      function Ye(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function rn(e, t) {
        e.filter = De(e.filter, t);
      }
      function on(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return De(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function Et(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (n) return n;
        throw new A.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
      }
      function Xn(e, t, n) {
        var r = Et(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function Ct(e, t, n, r) {
        var o, i, a = e.replayFilter ? De(e.filter, e.replayFilter()) : e.filter;
        return e.or ? (o = {}, i = function(u, l, m) {
          var f, s;
          a && !a(l, m, function(d) {
            return l.stop(d);
          }, function(d) {
            return l.fail(d);
          }) || ((s = "" + (f = l.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(f)), te(o, s)) || (o[s] = !0, t(u, l, m));
        }, Promise.all([e.or._iterate(i, n), Jn(Xn(e, r, n), e.algorithm, i, !e.keysOnly && e.valueMapper)])) : Jn(Xn(e, r, n), De(e.algorithm, a), t, !e.keysOnly && e.valueMapper);
      }
      function Jn(e, t, n, r) {
        var o = Y(r ? function(i, a, u) {
          return n(r(i), a, u);
        } : n);
        return e.then(function(i) {
          if (i) return i.start(function() {
            var a = function() {
              return i.continue();
            };
            t && !t(i, function(u) {
              return a = u;
            }, function(u) {
              i.stop(u), a = z;
            }, function(u) {
              i.fail(u), a = z;
            }) || o(i.value, i, function(u) {
              return a = u;
            }), a();
          });
        });
      }
      L.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, G.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, L.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, G.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, L.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = De(t.algorithm, e);
      }, L.prototype._iterate = function(e, t) {
        return Ct(this._ctx, e, t, this._ctx.table.core);
      }, L.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && X(n, e), t._ctx = n, t;
      }, L.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, L.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return Ct(t, e, n, t.table.core);
        });
      }, L.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r, o = t._ctx, i = o.table.core;
          return Ye(o, !0) ? i.count({ trans: n, query: { index: Et(o, i.schema), range: o.range } }).then(function(a) {
            return Math.min(a, o.limit);
          }) : (r = 0, Ct(o, function() {
            return ++r, !1;
          }, n, i).then(function() {
            return r;
          }));
        }).then(e);
      }, L.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), r = n[0], o = n.length - 1;
        function i(l, m) {
          return m ? i(l[n[m]], m - 1) : l[r];
        }
        var a = this._ctx.dir === "next" ? 1 : -1;
        function u(l, m) {
          return N(i(l, o), i(m, o)) * a;
        }
        return this.toArray(function(l) {
          return l.sort(u);
        }).then(t);
      }, L.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var r, o, i, a = t._ctx;
          return a.dir === "next" && Ye(a, !0) && 0 < a.limit ? (r = a.valueMapper, o = Et(a, a.table.core.schema), a.table.core.query({ trans: n, limit: a.limit, values: !0, query: { index: o, range: a.range } }).then(function(u) {
            return u = u.result, r ? u.map(r) : u;
          })) : (i = [], Ct(a, function(u) {
            return i.push(u);
          }, n, a.table.core).then(function() {
            return i;
          }));
        }, e);
      }, L.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, Ye(t) ? on(t, function() {
          var n = e;
          return function(r, o) {
            return n === 0 || (n === 1 ? --n : o(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : on(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, L.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), on(this._ctx, function() {
          var t = e;
          return function(n, r, o) {
            return --t <= 0 && r(o), 0 <= t;
          };
        }, !0), this;
      }, L.prototype.until = function(e, t) {
        return rn(this._ctx, function(n, r, o) {
          return !e(n.value) || (r(o), t);
        }), this;
      }, L.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, L.prototype.last = function(e) {
        return this.reverse().first(e);
      }, L.prototype.filter = function(e) {
        var t;
        return rn(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = De(t.isMatch, e), this;
      }, L.prototype.and = function(e) {
        return this.filter(e);
      }, L.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, L.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, L.prototype.desc = function() {
        return this.reverse();
      }, L.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.key, r);
        });
      }, L.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, L.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(n, r) {
          e(r.primaryKey, r);
        });
      }, L.prototype.keys = function(e) {
        var t = this._ctx, n = (t.keysOnly = !t.isMatch, []);
        return this.each(function(r, o) {
          n.push(o.key);
        }).then(function() {
          return n;
        }).then(e);
      }, L.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && Ye(t, !0) && 0 < t.limit) return this._read(function(r) {
          var o = Et(t, t.table.core.schema);
          return t.table.core.query({ trans: r, values: !1, limit: t.limit, query: { index: o, range: t.range } });
        }).then(function(r) {
          return r.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, o) {
          n.push(o.primaryKey);
        }).then(function() {
          return n;
        }).then(e);
      }, L.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, L.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, L.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, L.prototype.distinct = function() {
        var e, t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
        return t && t.multi && (e = {}, rn(this._ctx, function(r) {
          var r = r.primaryKey.toString(), o = te(e, r);
          return e[r] = !0, !o;
        })), this;
      }, L.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          function o(c, v) {
            var b = v.failures;
            d += c - v.numFailures;
            for (var y = 0, g = $(b); y < g.length; y++) {
              var w = g[y];
              s.push(b[w]);
            }
          }
          var i = typeof e == "function" ? e : function(c) {
            return Gn(c, e);
          }, a = n.table.core, f = a.schema.primaryKey, u = f.outbound, l = f.extractKey, m = 200, f = t.db._options.modifyChunkSize, s = (f && (m = typeof f == "object" ? f[a.name] || f["*"] || 200 : f), []), d = 0, p = [], h = e === Zn;
          return t.clone().primaryKeys().then(function(c) {
            function v(y) {
              var g = Math.min(m, c.length - y), w = c.slice(y, y + g);
              return (h ? Promise.resolve([]) : a.getMany({ trans: r, keys: w, cache: "immutable" })).then(function(k) {
                var O = [], _ = [], K = u ? [] : null, C = h ? w : [];
                if (!h) for (var x = 0; x < g; ++x) {
                  var j = k[x], F = { value: Pe(j), primKey: c[y + x] };
                  i.call(F, F.value, F) !== !1 && (F.value == null ? C.push(c[y + x]) : u || N(l(j), l(F.value)) === 0 ? (_.push(F.value), u && K.push(c[y + x])) : (C.push(c[y + x]), O.push(F.value)));
                }
                return Promise.resolve(0 < O.length && a.mutate({ trans: r, type: "add", values: O }).then(function(U) {
                  for (var D in U.failures) C.splice(parseInt(D), 1);
                  o(O.length, U);
                })).then(function() {
                  return (0 < _.length || b && typeof e == "object") && a.mutate({ trans: r, type: "put", keys: K, values: _, criteria: b, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < y }).then(function(U) {
                    return o(_.length, U);
                  });
                }).then(function() {
                  return (0 < C.length || b && h) && a.mutate({ trans: r, type: "delete", keys: C, criteria: b, isAdditionalChunk: 0 < y }).then(function(U) {
                    return Pt(n.table, C, U);
                  }).then(function(U) {
                    return o(C.length, U);
                  });
                }).then(function() {
                  return c.length > y + g && v(y + m);
                });
              });
            }
            var b = Ye(n) && n.limit === 1 / 0 && (typeof e != "function" || h) && { index: n.index, range: n.range };
            return v(0).then(function() {
              if (0 < s.length) throw new pt("Error modifying one or more objects", s, d, p);
              return c.length;
            });
          });
        });
      }, L.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !Ye(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Zn) : this._write(function(n) {
          var r = e.table.core.schema.primaryKey, o = t;
          return e.table.core.count({ trans: n, query: { index: r, range: o } }).then(function(i) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: o }).then(function(l) {
              var u = l.failures, l = l.numFailures;
              if (l) throw new pt("Could not delete some values", Object.keys(u).map(function(m) {
                return u[m];
              }), i - l);
              return i - l;
            });
          });
        });
      };
      var Nr = L;
      function L() {
      }
      var Zn = function(e, t) {
        return t.value = null;
      };
      function Mr(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Fr(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function oe(e, t, n) {
        return e = e instanceof tr ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function We(e) {
        return new e.Collection(e, function() {
          return er("");
        }).limit(0);
      }
      function Kt(p, t, n, r) {
        var o, i, a, u, l, m, f, s = n.length;
        if (!n.every(function(c) {
          return typeof c == "string";
        })) return oe(p, $n);
        function d(c) {
          o = c === "next" ? function(b) {
            return b.toUpperCase();
          } : function(b) {
            return b.toLowerCase();
          }, i = c === "next" ? function(b) {
            return b.toLowerCase();
          } : function(b) {
            return b.toUpperCase();
          }, a = c === "next" ? Mr : Fr;
          var v = n.map(function(b) {
            return { lower: i(b), upper: o(b) };
          }).sort(function(b, y) {
            return a(b.lower, y.lower);
          });
          u = v.map(function(b) {
            return b.upper;
          }), l = v.map(function(b) {
            return b.lower;
          }), f = (m = c) === "next" ? "" : r;
        }
        d("next");
        var p = new p.Collection(p, function() {
          return _e(u[0], l[s - 1] + r);
        }), h = (p._ondirectionchange = function(c) {
          d(c);
        }, 0);
        return p._addAlgorithm(function(c, v, b) {
          var y = c.key;
          if (typeof y == "string") {
            var g = i(y);
            if (t(g, l, h)) return !0;
            for (var w = null, k = h; k < s; ++k) {
              var O = ((_, K, C, x, j, F) => {
                for (var U = Math.min(_.length, x.length), D = -1, B = 0; B < U; ++B) {
                  var W = K[B];
                  if (W !== x[B]) return j(_[B], C[B]) < 0 ? _.substr(0, B) + C[B] + C.substr(B + 1) : j(_[B], x[B]) < 0 ? _.substr(0, B) + x[B] + C.substr(B + 1) : 0 <= D ? _.substr(0, D) + K[D] + C.substr(D + 1) : null;
                  j(_[B], W) < 0 && (D = B);
                }
                return U < x.length && F === "next" ? _ + C.substr(_.length) : U < _.length && F === "prev" ? _.substr(0, C.length) : D < 0 ? null : _.substr(0, D) + x[D] + C.substr(D + 1);
              })(y, g, u[k], l[k], a, m);
              O === null && w === null ? h = k + 1 : (w === null || 0 < a(w, O)) && (w = O);
            }
            v(w !== null ? function() {
              c.continue(w + f);
            } : b);
          }
          return !1;
        }), p;
      }
      function _e(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function er(e) {
        return { type: 1, lower: e, upper: e };
      }
      Object.defineProperty(Z.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Z.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? We(this) : new this.Collection(this, function() {
            return _e(e, t, !n, !r);
          });
        } catch {
          return oe(this, pe);
        }
      }, Z.prototype.equals = function(e) {
        return e == null ? oe(this, pe) : new this.Collection(this, function() {
          return er(e);
        });
      }, Z.prototype.above = function(e) {
        return e == null ? oe(this, pe) : new this.Collection(this, function() {
          return _e(e, void 0, !0);
        });
      }, Z.prototype.aboveOrEqual = function(e) {
        return e == null ? oe(this, pe) : new this.Collection(this, function() {
          return _e(e, void 0, !1);
        });
      }, Z.prototype.below = function(e) {
        return e == null ? oe(this, pe) : new this.Collection(this, function() {
          return _e(void 0, e, !1, !0);
        });
      }, Z.prototype.belowOrEqual = function(e) {
        return e == null ? oe(this, pe) : new this.Collection(this, function() {
          return _e(void 0, e);
        });
      }, Z.prototype.startsWith = function(e) {
        return typeof e != "string" ? oe(this, $n) : this.between(e, e + Ae, !0, !0);
      }, Z.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Kt(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], Ae);
      }, Z.prototype.equalsIgnoreCase = function(e) {
        return Kt(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, Z.prototype.anyOfIgnoreCase = function() {
        var e = he.apply(Me, arguments);
        return e.length === 0 ? We(this) : Kt(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, Z.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = he.apply(Me, arguments);
        return e.length === 0 ? We(this) : Kt(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, Ae);
      }, Z.prototype.anyOf = function() {
        var e, t, n = this, r = he.apply(Me, arguments), o = this._cmp;
        try {
          r.sort(o);
        } catch {
          return oe(this, pe);
        }
        return r.length === 0 ? We(this) : ((e = new this.Collection(this, function() {
          return _e(r[0], r[r.length - 1]);
        }))._ondirectionchange = function(i) {
          o = i === "next" ? n._ascending : n._descending, r.sort(o);
        }, t = 0, e._addAlgorithm(function(i, a, u) {
          for (var l = i.key; 0 < o(l, r[t]); ) if (++t === r.length) return a(u), !1;
          return o(l, r[t]) === 0 || (a(function() {
            i.continue(r[t]);
          }), !1);
        }), e);
      }, Z.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Z.prototype.noneOf = function() {
        var e = he.apply(Me, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return oe(this, pe);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Z.prototype.inAnyRange = function(e, b) {
        var n = this, r = this._cmp, o = this._ascending, i = this._descending, a = this._min, u = this._max;
        if (e.length === 0) return We(this);
        if (!e.every(function(y) {
          return y[0] !== void 0 && y[1] !== void 0 && o(y[0], y[1]) <= 0;
        })) return oe(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", A.InvalidArgument);
        var l = !b || b.includeLowers !== !1, m = b && b.includeUppers === !0, f, s = o;
        function d(y, g) {
          return s(y[0], g[0]);
        }
        try {
          (f = e.reduce(function(y, g) {
            for (var w = 0, k = y.length; w < k; ++w) {
              var O = y[w];
              if (r(g[0], O[1]) < 0 && 0 < r(g[1], O[0])) {
                O[0] = a(O[0], g[0]), O[1] = u(O[1], g[1]);
                break;
              }
            }
            return w === k && y.push(g), y;
          }, [])).sort(d);
        } catch {
          return oe(this, pe);
        }
        var p = 0, h = m ? function(y) {
          return 0 < o(y, f[p][1]);
        } : function(y) {
          return 0 <= o(y, f[p][1]);
        }, c = l ? function(y) {
          return 0 < i(y, f[p][0]);
        } : function(y) {
          return 0 <= i(y, f[p][0]);
        }, v = h, b = new this.Collection(this, function() {
          return _e(f[0][0], f[f.length - 1][1], !l, !m);
        });
        return b._ondirectionchange = function(y) {
          s = y === "next" ? (v = h, o) : (v = c, i), f.sort(d);
        }, b._addAlgorithm(function(y, g, w) {
          for (var k, O = y.key; v(O); ) if (++p === f.length) return g(w), !1;
          return !h(k = O) && !c(k) || (n._cmp(O, f[p][1]) === 0 || n._cmp(O, f[p][0]) === 0 || g(function() {
            s === o ? y.continue(f[p][0]) : y.continue(f[p][1]);
          }), !1);
        }), b;
      }, Z.prototype.startsWithAnyOf = function() {
        var e = he.apply(Me, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? We(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Ae];
        })) : oe(this, "startsWithAnyOf() only works with strings");
      };
      var tr = Z;
      function Z() {
      }
      function ce(e) {
        return Y(function(t) {
          return ut(t), e(t.target.error), !1;
        });
      }
      function ut(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var st = "storagemutated", an = "x-storagemutated-1", xe = it(null, st), Lr = (le.prototype._lock = function() {
        return Xe(!I.global), ++this._reculock, this._reculock !== 1 || I.global || (I.lockOwnerFor = this), this;
      }, le.prototype._unlock = function() {
        if (Xe(!I.global), --this._reculock == 0) for (I.global || (I.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Se(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, le.prototype._locked = function() {
        return this._reculock && I.lockOwnerFor !== this;
      }, le.prototype.create = function(e) {
        var t = this;
        if (this.mode) {
          var n = this.db.idbdb, r = this.db._state.dbOpenError;
          if (Xe(!this.idbtrans), !e && !n) switch (r && r.name) {
            case "DatabaseClosedError":
              throw new A.DatabaseClosed(r);
            case "MissingAPIError":
              throw new A.MissingAPI(r.message, r);
            default:
              throw new A.OpenFailed(r);
          }
          if (!this.active) throw new A.TransactionInactive();
          Xe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Y(function(o) {
            ut(o), t._reject(e.error);
          }), e.onabort = Y(function(o) {
            ut(o), t.active && t._reject(new A.Abort(e.error)), t.active = !1, t.on("abort").fire(o);
          }), e.oncomplete = Y(function() {
            t.active = !1, t._resolve(), "mutatedParts" in e && xe.storagemutated.fire(e.mutatedParts);
          });
        }
        return this;
      }, le.prototype._promise = function(e, t, n) {
        var r, o = this;
        return e === "readwrite" && this.mode !== "readwrite" ? G(new A.ReadOnly("Transaction is readonly")) : this.active ? this._locked() ? new E(function(i, a) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, n).then(i, a);
          }, I]);
        }) : n ? be(function() {
          var i = new E(function(a, u) {
            o._lock();
            var l = t(a, u, o);
            l && l.then && l.then(a, u);
          });
          return i.finally(function() {
            return o._unlock();
          }), i._lib = !0, i;
        }) : ((r = new E(function(i, a) {
          var u = t(i, a, o);
          u && u.then && u.then(i, a);
        }))._lib = !0, r) : G(new A.TransactionInactive());
      }, le.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, le.prototype.waitFor = function(e) {
        var t, n = this._root(), r = E.resolve(e), o = (n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return r;
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), (function i() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = i);
        })()), n._waitingFor);
        return new E(function(i, a) {
          r.then(function(u) {
            return n._waitingQueue.push(Y(i.bind(null, u)));
          }, function(u) {
            return n._waitingQueue.push(Y(a.bind(null, u)));
          }).finally(function() {
            n._waitingFor === o && (n._waitingFor = null);
          });
        });
      }, le.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new A.Abort()));
      }, le.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (te(t, e)) return t[e];
        var n = this.schema[e];
        if (n) return (n = new this.db.Table(e, n, this)).core = this.db.core.table(e), t[e] = n;
        throw new A.NotFound("Table " + e + " not part of transaction");
      }, le);
      function le() {
      }
      function un(e, t, n, r, o, i, a, u) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: o, compound: i, src: (n && !a ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + nr(t), type: u };
      }
      function nr(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function sn(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(o) {
          return [o.name, o];
        }, n.reduce(function(o, i, a) {
          return i = r(i, a), i && (o[i[0]] = i[1]), o;
        }, {})) };
        var r;
      }
      var ct = function(e) {
        try {
          return e.only([[]]), ct = function() {
            return [[]];
          }, [[]];
        } catch {
          return ct = function() {
            return Ae;
          }, Ae;
        }
      };
      function cn(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(n) {
          return n[t];
        } : function(n) {
          return fe(n, t);
        } : function(n) {
          return fe(n, e);
        };
        var t;
      }
      function rr(e) {
        return [].slice.call(e);
      }
      var Ur = 0;
      function lt(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function $r(e, t, l) {
        function r(h) {
          if (h.type === 3) return null;
          if (h.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var s = h.lower, d = h.upper, p = h.lowerOpen, h = h.upperOpen;
          return s === void 0 ? d === void 0 ? null : t.upperBound(d, !!h) : d === void 0 ? t.lowerBound(s, !!p) : t.bound(s, d, !!p, !!h);
        }
        function o(f) {
          var s, d = f.name;
          return { name: d, schema: f, mutate: function(p) {
            var h = p.trans, c = p.type, v = p.keys, b = p.values, y = p.range;
            return new Promise(function(g, w) {
              g = Y(g);
              var k = h.objectStore(d), O = k.keyPath == null, _ = c === "put" || c === "add";
              if (!_ && c !== "delete" && c !== "deleteRange") throw new Error("Invalid operation type: " + c);
              var K, C = (v || b || { length: 1 }).length;
              if (v && b && v.length !== b.length) throw new Error("Given keys array must have same length as given values array.");
              if (C === 0) return g({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function x(Q) {
                ++U, ut(Q);
              }
              var j = [], F = [], U = 0;
              if (c === "deleteRange") {
                if (y.type === 4) return g({ numFailures: U, failures: F, results: [], lastResult: void 0 });
                y.type === 3 ? j.push(K = k.clear()) : j.push(K = k.delete(r(y)));
              } else {
                var O = _ ? O ? [b, v] : [b, null] : [v, null], D = O[0], B = O[1];
                if (_) for (var W = 0; W < C; ++W) j.push(K = B && B[W] !== void 0 ? k[c](D[W], B[W]) : k[c](D[W])), K.onerror = x;
                else for (W = 0; W < C; ++W) j.push(K = k[c](D[W])), K.onerror = x;
              }
              function ie(Q) {
                Q = Q.target.result, j.forEach(function(qe, Cn) {
                  return qe.error != null && (F[Cn] = qe.error);
                }), g({ numFailures: U, failures: F, results: c === "delete" ? v : j.map(function(qe) {
                  return qe.result;
                }), lastResult: Q });
              }
              K.onerror = function(Q) {
                x(Q), ie(Q);
              }, K.onsuccess = ie;
            });
          }, getMany: function(p) {
            var h = p.trans, c = p.keys;
            return new Promise(function(v, b) {
              v = Y(v);
              for (var y, g = h.objectStore(d), w = c.length, k = new Array(w), O = 0, _ = 0, K = function(j) {
                j = j.target, k[j._pos] = j.result, ++_ === O && v(k);
              }, C = ce(b), x = 0; x < w; ++x) c[x] != null && ((y = g.get(c[x]))._pos = x, y.onsuccess = K, y.onerror = C, ++O);
              O === 0 && v(k);
            });
          }, get: function(p) {
            var h = p.trans, c = p.key;
            return new Promise(function(v, b) {
              v = Y(v);
              var y = h.objectStore(d).get(c);
              y.onsuccess = function(g) {
                return v(g.target.result);
              }, y.onerror = ce(b);
            });
          }, query: (s = u, function(p) {
            return new Promise(function(h, c) {
              h = Y(h);
              var v, b, y, _ = p.trans, g = p.values, w = p.limit, O = p.query, k = w === 1 / 0 ? void 0 : w, K = O.index, O = O.range, _ = _.objectStore(d), _ = K.isPrimaryKey ? _ : _.index(K.name), K = r(O);
              if (w === 0) return h({ result: [] });
              s ? ((O = g ? _.getAll(K, k) : _.getAllKeys(K, k)).onsuccess = function(C) {
                return h({ result: C.target.result });
              }, O.onerror = ce(c)) : (v = 0, b = !g && "openKeyCursor" in _ ? _.openKeyCursor(K) : _.openCursor(K), y = [], b.onsuccess = function(C) {
                var x = b.result;
                return !x || (y.push(g ? x.value : x.primaryKey), ++v === w) ? h({ result: y }) : void x.continue();
              }, b.onerror = ce(c));
            });
          }), openCursor: function(p) {
            var h = p.trans, c = p.values, v = p.query, b = p.reverse, y = p.unique;
            return new Promise(function(g, w) {
              g = Y(g);
              var _ = v.index, k = v.range, O = h.objectStore(d), O = _.isPrimaryKey ? O : O.index(_.name), _ = b ? y ? "prevunique" : "prev" : y ? "nextunique" : "next", K = !c && "openKeyCursor" in O ? O.openKeyCursor(r(k), _) : O.openCursor(r(k), _);
              K.onerror = ce(w), K.onsuccess = Y(function(C) {
                var x, j, F, U, D = K.result;
                D ? (D.___id = ++Ur, D.done = !1, x = D.continue.bind(D), j = (j = D.continuePrimaryKey) && j.bind(D), F = D.advance.bind(D), U = function() {
                  throw new Error("Cursor not stopped");
                }, D.trans = h, D.stop = D.continue = D.continuePrimaryKey = D.advance = function() {
                  throw new Error("Cursor not started");
                }, D.fail = Y(w), D.next = function() {
                  var B = this, W = 1;
                  return this.start(function() {
                    return W-- ? B.continue() : B.stop();
                  }).then(function() {
                    return B;
                  });
                }, D.start = function(B) {
                  function W() {
                    if (K.result) try {
                      B();
                    } catch (Q) {
                      D.fail(Q);
                    }
                    else D.done = !0, D.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, D.stop();
                  }
                  var ie = new Promise(function(Q, qe) {
                    Q = Y(Q), K.onerror = ce(qe), D.fail = qe, D.stop = function(Cn) {
                      D.stop = D.continue = D.continuePrimaryKey = D.advance = U, Q(Cn);
                    };
                  });
                  return K.onsuccess = Y(function(Q) {
                    K.onsuccess = W, W();
                  }), D.continue = x, D.continuePrimaryKey = j, D.advance = F, W(), ie;
                }, g(D)) : g(null);
              }, w);
            });
          }, count: function(p) {
            var h = p.query, c = p.trans, v = h.index, b = h.range;
            return new Promise(function(y, g) {
              var w = c.objectStore(d), w = v.isPrimaryKey ? w : w.index(v.name), k = r(b), k = k ? w.count(k) : w.count();
              k.onsuccess = Y(function(O) {
                return y(O.target.result);
              }), k.onerror = ce(g);
            });
          } };
        }
        i = l, a = rr((l = e).objectStoreNames);
        var i, l = { schema: { name: l.name, tables: a.map(function(f) {
          return i.objectStore(f);
        }).map(function(f) {
          var s = f.keyPath, d = f.autoIncrement, h = M(s), p = {}, h = { name: f.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: s == null, compound: h, keyPath: s, autoIncrement: d, unique: !0, extractKey: cn(s) }, indexes: rr(f.indexNames).map(function(c) {
            return f.index(c);
          }).map(function(y) {
            var g = y.name, v = y.unique, b = y.multiEntry, y = y.keyPath, g = { name: g, compound: M(y), keyPath: y, unique: v, multiEntry: b, extractKey: cn(y) };
            return p[lt(y)] = g;
          }), getIndexByKeyPath: function(c) {
            return p[lt(c)];
          } };
          return p[":id"] = h.primaryKey, s != null && (p[lt(s)] = h.primaryKey), h;
        }) }, hasGetAll: 0 < a.length && "getAll" in i.objectStore(a[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }, a = l.schema, u = l.hasGetAll, l = a.tables.map(o), m = {};
        return l.forEach(function(f) {
          return m[f.name] = f;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(f) {
          if (m[f]) return m[f];
          throw new Error("Table '".concat(f, "' not found"));
        }, MIN_KEY: -1 / 0, MAX_KEY: ct(t), schema: a };
      }
      function zr(e, t, n, r) {
        return n = n.IDBKeyRange, t = $r(t, n, r), { dbcore: e.dbcore.reduce(function(o, i) {
          return i = i.create, P(P({}, o), i(o));
        }, t) };
      }
      function jt(e, t) {
        var n = t.db, n = zr(e._middlewares, n, e._deps, t);
        e.core = n.dbcore, e.tables.forEach(function(r) {
          var o = r.name;
          e.core.schema.tables.some(function(i) {
            return i.name === o;
          }) && (r.core = e.core.table(o), e[o] instanceof e.Table) && (e[o].core = r.core);
        });
      }
      function It(e, t, n, r) {
        n.forEach(function(o) {
          var i = r[o];
          t.forEach(function(a) {
            var u = (function l(m, f) {
              return _r(m, f) || (m = ue(m)) && l(m, f);
            })(a, o);
            (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? me(a, o, { get: function() {
              return this.table(o);
            }, set: function(l) {
              jn(this, o, { value: l, writable: !0, configurable: !0, enumerable: !0 });
            } }) : a[o] = new e.Table(o, i));
          });
        });
      }
      function ln(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function Vr(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Yr(e, t, n, r) {
        var o = e._dbSchema, i = (n.objectStoreNames.contains("$meta") && !o.$meta && (o.$meta = sn("$meta", ir("")[0], []), e._storeNames.push("$meta")), e._createTransaction("readwrite", e._storeNames, o)), a = (i.create(n), i._completion.catch(r), i._reject.bind(i)), u = I.transless || I;
        be(function() {
          if (I.trans = i, I.transless = u, t !== 0) return jt(e, n), m = t, ((l = i).storeNames.includes("$meta") ? l.table("$meta").get("version").then(function(f) {
            return f ?? m;
          }) : E.resolve(m)).then(function(v) {
            var s = e, d = v, p = i, h = n, c = [], v = s._versions, b = s._dbSchema = At(0, s.idbdb, h);
            return (v = v.filter(function(y) {
              return y._cfg.version >= d;
            })).length === 0 ? E.resolve() : (v.forEach(function(y) {
              c.push(function() {
                var g, w, k, O = b, _ = y._cfg.dbschema, K = (Dt(s, O, h), Dt(s, _, h), b = s._dbSchema = _, fn(O, _)), C = (K.add.forEach(function(x) {
                  hn(h, x[0], x[1].primKey, x[1].indexes);
                }), K.change.forEach(function(x) {
                  if (x.recreate) throw new A.Upgrade("Not yet support for changing primary key");
                  var j = h.objectStore(x.name);
                  x.add.forEach(function(F) {
                    return St(j, F);
                  }), x.change.forEach(function(F) {
                    j.deleteIndex(F.name), St(j, F);
                  }), x.del.forEach(function(F) {
                    return j.deleteIndex(F);
                  });
                }), y._cfg.contentUpgrade);
                if (C && y._cfg.version > d) return jt(s, h), p._memoizedTables = {}, g = An(_), K.del.forEach(function(x) {
                  g[x] = O[x];
                }), ln(s, [s.Transaction.prototype]), It(s, [s.Transaction.prototype], $(g), g), p.schema = g, (w = zt(C)) && ze(), _ = E.follow(function() {
                  var x;
                  (k = C(p)) && w && (x = ge.bind(null, null), k.then(x, x));
                }), k && typeof k.then == "function" ? E.resolve(k) : _.then(function() {
                  return k;
                });
              }), c.push(function(g) {
                var w, k, O = y._cfg.dbschema;
                w = O, k = g, [].slice.call(k.db.objectStoreNames).forEach(function(_) {
                  return w[_] == null && k.db.deleteObjectStore(_);
                }), ln(s, [s.Transaction.prototype]), It(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), p.schema = s._dbSchema;
              }), c.push(function(g) {
                s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === y._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(w) {
                  return w !== "$meta";
                })) : g.objectStore("$meta").put(y._cfg.version, "version"));
              });
            }), (function y() {
              return c.length ? E.resolve(c.shift()(p.idbtrans)).then(y) : E.resolve();
            })().then(function() {
              or(b, h);
            }));
          }).catch(a);
          var l, m;
          $(o).forEach(function(f) {
            hn(n, f, o[f].primKey, o[f].indexes);
          }), jt(e, n), E.follow(function() {
            return e.on.populate.fire(i);
          }).catch(a);
        });
      }
      function Wr(e, t) {
        or(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = At(0, e.idbdb, t);
        Dt(e, e._dbSchema, t);
        for (var r = 0, o = fn(n, e._dbSchema).change; r < o.length; r++) {
          var i = ((a) => {
            if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var u = t.objectStore(a.name);
            a.add.forEach(function(l) {
              se && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(l.src)), St(u, l);
            });
          })(o[r]);
          if (typeof i == "object") return i.value;
        }
      }
      function fn(e, t) {
        var n, r = { del: [], add: [], change: [] };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
          var o = e[n], i = t[n];
          if (o) {
            var a = { name: n, def: i, recreate: !1, del: [], add: [], change: [] };
            if ("" + (o.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || o.primKey.auto !== i.primKey.auto) a.recreate = !0, r.change.push(a);
            else {
              var u = o.idxByName, l = i.idxByName, m = void 0;
              for (m in u) l[m] || a.del.push(m);
              for (m in l) {
                var f = u[m], s = l[m];
                f ? f.src !== s.src && a.change.push(s) : a.add.push(s);
              }
              (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
            }
          } else r.add.push([n, i]);
        }
        return r;
      }
      function hn(e, t, n, r) {
        var o = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        r.forEach(function(i) {
          return St(o, i);
        });
      }
      function or(e, t) {
        $(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (se && console.debug("Dexie: Creating missing table", n), hn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function St(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function At(e, t, n) {
        var r = {};
        return dt(t.objectStoreNames, 0).forEach(function(o) {
          for (var i = n.objectStore(o), a = un(nr(m = i.keyPath), m || "", !0, !1, !!i.autoIncrement, m && typeof m != "string", !0), u = [], l = 0; l < i.indexNames.length; ++l) {
            var f = i.index(i.indexNames[l]), m = f.keyPath, f = un(f.name, m, !!f.unique, !!f.multiEntry, !1, m && typeof m != "string", !1);
            u.push(f);
          }
          r[o] = sn(o, a, u);
        }), r;
      }
      function Dt(e, t, n) {
        for (var r = n.db.objectStoreNames, o = 0; o < r.length; ++o) {
          var i = r[o], a = n.objectStore(i);
          e._hasGetAll = "getAll" in a;
          for (var u = 0; u < a.indexNames.length; ++u) {
            var l, m = a.indexNames[u], f = a.index(m).keyPath, f = typeof f == "string" ? f : "[" + dt(f).join("+") + "]";
            t[i] && (l = t[i].idxByName[f]) && (l.name = m, delete t[i].idxByName[f], t[i].idxByName[m] = l);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && S.WorkerGlobalScope && S instanceof S.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function ir(e) {
        return e.split(",").map(function(t, n) {
          var o = t.split(":"), r = (r = o[1]) == null ? void 0 : r.trim(), o = (t = o[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(o) ? o.match(/^\[(.*)\]$/)[1].split("+") : o;
          return un(o, i || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), M(i), n === 0, r);
        });
      }
      Qe.prototype._createTableSchema = sn, Qe.prototype._parseIndexSyntax = ir, Qe.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        $(e).forEach(function(r) {
          if (e[r] !== null) {
            var o = n._parseIndexSyntax(e[r]), i = o.shift();
            if (!i) throw new A.Schema("Invalid schema for table " + r + ": " + e[r]);
            if (i.unique = !0, i.multi) throw new A.Schema("Primary key cannot be multiEntry*");
            o.forEach(function(a) {
              if (a.auto) throw new A.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!a.keyPath) throw new A.Schema("Index must have a name and cannot be an empty string");
            }), i = n._createTableSchema(r, i, o), t[r] = i;
          }
        });
      }, Qe.prototype.stores = function(n) {
        var t = this.db, n = (this._cfg.storesSource = this._cfg.storesSource ? X(this._cfg.storesSource, n) : n, t._versions), r = {}, o = {};
        return n.forEach(function(i) {
          X(r, i._cfg.storesSource), o = i._cfg.dbschema = {}, i._parseStoresSpec(r, o);
        }), t._dbSchema = o, ln(t, [t._allTables, t, t.Transaction.prototype]), It(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], $(o), o), t._storeNames = $(o), this;
      }, Qe.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = Yt(this._cfg.contentUpgrade || z, e), this;
      };
      var Qr = Qe;
      function Qe() {
      }
      function dn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new ye(kt, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function pn(e) {
        return e && typeof e.databases == "function";
      }
      function yn(e) {
        return be(function() {
          return I.letThrough = !0, e();
        });
      }
      function mn(e) {
        return !("from" in e);
      }
      var ee = function(e, t) {
        var n;
        if (!this) return n = new ee(), e && "d" in e && X(n, e), n;
        X(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function ft(e, t, n) {
        var r = N(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (mn(e)) return X(e, { from: t, to: n, d: 1 });
          var r = e.l, o = e.r;
          if (N(n, e.from) < 0) return r ? ft(r, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, ur(e);
          if (0 < N(t, e.to)) return o ? ft(o, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, ur(e);
          N(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < N(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), t = !e.r, r && !e.l && ht(e, r), o && t && ht(e, o);
        }
      }
      function ht(e, t) {
        mn(t) || (function n(r, o) {
          var i = o.from, a = o.l, u = o.r;
          ft(r, i, o.to), a && n(r, a), u && n(r, u);
        })(e, t);
      }
      function ar(e, t) {
        var n = Rt(t), r = n.next();
        if (!r.done) for (var o = r.value, i = Rt(e), a = i.next(o.from), u = a.value; !r.done && !a.done; ) {
          if (N(u.from, o.to) <= 0 && 0 <= N(u.to, o.from)) return !0;
          N(o.from, u.from) < 0 ? o = (r = n.next(u.from)).value : u = (a = i.next(o.from)).value;
        }
        return !1;
      }
      function Rt(e) {
        var t = mn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && N(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || N(n, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function ur(e) {
        var t, n, r, o = (((o = e.r) == null ? void 0 : o.d) || 0) - (((o = e.l) == null ? void 0 : o.d) || 0), o = 1 < o ? "r" : o < -1 ? "l" : "";
        o && (t = o == "r" ? "l" : "r", n = P({}, e), r = e[o], e.from = r.from, e.to = r.to, e[o] = r[o], n[o] = r[t], (e[t] = n).d = sr(n)), e.d = sr(e);
      }
      function sr(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function Tt(e, t) {
        return $(t).forEach(function(n) {
          e[n] ? ht(e[n], t[n]) : e[n] = (function r(o) {
            var i, a, u = {};
            for (i in o) te(o, i) && (a = o[i], u[i] = !a || typeof a != "object" || Rn.has(a.constructor) ? a : r(a));
            return u;
          })(t[n]);
        }), e;
      }
      function vn(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && ar(t[n], e[n]);
        });
      }
      Be(ee.prototype, ((re = { add: function(e) {
        return ht(this, e), this;
      }, addKey: function(e) {
        return ft(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return ft(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = Rt(this).next(e).value;
        return t && N(t.from, e) <= 0 && 0 <= N(t.to, e);
      } })[$t] = function() {
        return Rt(this);
      }, re));
      var Re = {}, bn = {}, gn = !1;
      function qt(e) {
        Tt(bn, e), gn || (gn = !0, setTimeout(function() {
          gn = !1, wn(bn, !(bn = {}));
        }, 0));
      }
      function wn(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, o = Object.values(Re); r < o.length; r++) cr(u = o[r], e, n, t);
        else for (var i in e) {
          var a, u, i = /^idb\:\/\/(.*)\/(.*)\//.exec(i);
          i && (a = i[1], i = i[2], u = Re["idb://".concat(a, "/").concat(i)]) && cr(u, e, n, t);
        }
        n.forEach(function(l) {
          return l();
        });
      }
      function cr(e, t, n, r) {
        for (var o = [], i = 0, a = Object.entries(e.queries.query); i < a.length; i++) {
          for (var u = a[i], l = u[0], m = [], f = 0, s = u[1]; f < s.length; f++) {
            var d = s[f];
            vn(t, d.obsSet) ? d.subscribers.forEach(function(v) {
              return n.add(v);
            }) : r && m.push(d);
          }
          r && o.push([l, m]);
        }
        if (r) for (var p = 0, h = o; p < h.length; p++) {
          var c = h[p], l = c[0], m = c[1];
          e.queries.query[l] = m;
        }
      }
      function Gr(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? G(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, o = Math.round(10 * e.verno), i = !1;
        function a() {
          if (t.openCanceller !== r) throw new A.DatabaseClosed("db.open() was cancelled");
        }
        function u() {
          return new E(function(d, p) {
            if (a(), !n) throw new A.MissingAPI();
            var h = e.name, c = t.autoSchema || !o ? n.open(h) : n.open(h, o);
            if (!c) throw new A.MissingAPI();
            c.onerror = ce(p), c.onblocked = Y(e._fireOnBlocked), c.onupgradeneeded = Y(function(v) {
              var b;
              f = c.transaction, t.autoSchema && !e._options.allowEmptyDB ? (c.onerror = ut, f.abort(), c.result.close(), (b = n.deleteDatabase(h)).onsuccess = b.onerror = Y(function() {
                p(new A.NoSuchDatabase("Database ".concat(h, " doesnt exist")));
              })) : (f.onerror = ce(p), b = v.oldVersion > Math.pow(2, 62) ? 0 : v.oldVersion, s = b < 1, e.idbdb = c.result, i && Wr(e, f), Yr(e, b / 10, f, p));
            }, p), c.onsuccess = Y(function() {
              f = null;
              var v, b, y, g, w, k, O = e.idbdb = c.result, _ = dt(O.objectStoreNames);
              if (0 < _.length) try {
                var K = O.transaction((w = _).length === 1 ? w[0] : w, "readonly");
                if (t.autoSchema) k = O, g = K, (y = e).verno = k.version / 10, g = y._dbSchema = At(0, k, g), y._storeNames = dt(k.objectStoreNames, 0), It(y, [y._allTables], $(g), g);
                else if (Dt(e, e._dbSchema, K), b = K, ((b = fn(At(0, (v = e).idbdb, b), v._dbSchema)).add.length || b.change.some(function(C) {
                  return C.add.length || C.change.length;
                })) && !i) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), O.close(), o = O.version + 1, i = !0, d(u());
                jt(e, K);
              } catch {
              }
              Ve.push(e), O.onversionchange = Y(function(C) {
                t.vcFired = !0, e.on("versionchange").fire(C);
              }), O.onclose = Y(function() {
                e.close({ disableAutoOpen: !1 });
              }), s && (_ = e._deps, w = h, pn(k = _.indexedDB) || w === kt || dn(k, _.IDBKeyRange).put({ name: w }).catch(z)), d();
            }, p);
          }).catch(function(d) {
            switch (d?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), u();
                break;
              case "VersionError":
                if (0 < o) return o = 0, u();
            }
            return E.reject(d);
          });
        }
        var l, m = t.dbReadyResolve, f = null, s = !1;
        return E.race([r, (typeof navigator > "u" ? E.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(d) {
          function p() {
            return indexedDB.databases().finally(d);
          }
          l = setInterval(p, 100), p();
        }).finally(function() {
          return clearInterval(l);
        }) : Promise.resolve()).then(u)]).then(function() {
          return a(), t.onReadyBeingFired = [], E.resolve(yn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function d() {
            var p;
            if (0 < t.onReadyBeingFired.length) return p = t.onReadyBeingFired.reduce(Yt, z), t.onReadyBeingFired = [], E.resolve(yn(function() {
              return p(e.vip);
            })).then(d);
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(d) {
          t.dbOpenError = d;
          try {
            f && f.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), G(d);
        }).finally(function() {
          t.openComplete = !0, m();
        }).then(function() {
          var d;
          return s && (d = {}, e.tables.forEach(function(p) {
            p.schema.indexes.forEach(function(h) {
              h.name && (d["idb://".concat(e.name, "/").concat(p.name, "/").concat(h.name)] = new ee(-1 / 0, [[[]]]));
            }), d["idb://".concat(e.name, "/").concat(p.name, "/")] = d["idb://".concat(e.name, "/").concat(p.name, "/:dels")] = new ee(-1 / 0, [[[]]]);
          }), xe(st).fire(d), wn(d, !0)), e;
        });
      }
      function _n(e) {
        function t(i) {
          return e.next(i);
        }
        var n = o(t), r = o(function(i) {
          return e.throw(i);
        });
        function o(i) {
          return function(u) {
            var u = i(u), l = u.value;
            return u.done ? l : l && typeof l.then == "function" ? l.then(n, r) : M(l) ? Promise.all(l).then(n, r) : n(l);
          };
        }
        return o(t)();
      }
      function Bt(e, t, n) {
        for (var r = M(e) ? e.slice() : [e], o = 0; o < n; ++o) r.push(t);
        return r;
      }
      var Hr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return P(P({}, e), { table: function(r) {
          var n = e.table(r), r = n.schema, o = {}, i = [];
          function a(d, p, h) {
            var y = lt(d), c = o[y] = o[y] || [], v = d == null ? 0 : typeof d == "string" ? 1 : d.length, b = 0 < p, y = P(P({}, h), { name: b ? "".concat(y, "(virtual-from:").concat(h.name, ")") : h.name, lowLevelIndex: h, isVirtual: b, keyTail: p, keyLength: v, extractKey: cn(d), unique: !b && h.unique });
            return c.push(y), y.isPrimaryKey || i.push(y), 1 < v && a(v === 2 ? d[0] : d.slice(0, v - 1), p + 1, h), c.sort(function(g, w) {
              return g.keyTail - w.keyTail;
            }), y;
          }
          var u = a(r.primaryKey.keyPath, 0, r.primaryKey);
          o[":id"] = [u];
          for (var l = 0, m = r.indexes; l < m.length; l++) {
            var f = m[l];
            a(f.keyPath, 0, f);
          }
          function s(d) {
            var p, h = d.query.index;
            return h.isVirtual ? P(P({}, d), { query: { index: h.lowLevelIndex, range: (p = d.query.range, h = h.keyTail, { type: p.type === 1 ? 2 : p.type, lower: Bt(p.lower, p.lowerOpen ? e.MAX_KEY : e.MIN_KEY, h), lowerOpen: !0, upper: Bt(p.upper, p.upperOpen ? e.MIN_KEY : e.MAX_KEY, h), upperOpen: !0 }) } }) : d;
          }
          return P(P({}, n), { schema: P(P({}, r), { primaryKey: u, indexes: i, getIndexByKeyPath: function(d) {
            return (d = o[lt(d)]) && d[0];
          } }), count: function(d) {
            return n.count(s(d));
          }, query: function(d) {
            return n.query(s(d));
          }, openCursor: function(d) {
            var p = d.query.index, h = p.keyTail, c = p.keyLength;
            return p.isVirtual ? n.openCursor(s(d)).then(function(b) {
              return b && v(b);
            }) : n.openCursor(d);
            function v(b) {
              return Object.create(b, { continue: { value: function(y) {
                y != null ? b.continue(Bt(y, d.reverse ? e.MAX_KEY : e.MIN_KEY, h)) : d.unique ? b.continue(b.key.slice(0, c).concat(d.reverse ? e.MIN_KEY : e.MAX_KEY, h)) : b.continue();
              } }, continuePrimaryKey: { value: function(y, g) {
                b.continuePrimaryKey(Bt(y, e.MAX_KEY, h), g);
              } }, primaryKey: { get: function() {
                return b.primaryKey;
              } }, key: { get: function() {
                var y = b.key;
                return c === 1 ? y[0] : y.slice(0, c);
              } }, value: { get: function() {
                return b.value;
              } } });
            }
          } });
        } });
      } };
      function xn(e, t, n, r) {
        return n = n || {}, r = r || "", $(e).forEach(function(o) {
          var i, a, u;
          te(t, o) ? (i = e[o], a = t[o], typeof i == "object" && typeof a == "object" && i && a ? (u = Ut(i)) !== Ut(a) ? n[r + o] = t[o] : u === "Object" ? xn(i, a, n, r + o + ".") : i !== a && (n[r + o] = t[o]) : i !== a && (n[r + o] = t[o])) : n[r + o] = void 0;
        }), $(t).forEach(function(o) {
          te(e, o) || (n[r + o] = t[o]);
        }), n;
      }
      function kn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var Xr = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return P(P({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return P(P({}, n), { mutate: function(o) {
            var i = I.trans, a = i.table(t).hook, u = a.deleting, l = a.creating, m = a.updating;
            switch (o.type) {
              case "add":
                if (l.fire === z) break;
                return i._promise("readwrite", function() {
                  return f(o);
                }, !0);
              case "put":
                if (l.fire === z && m.fire === z) break;
                return i._promise("readwrite", function() {
                  return f(o);
                }, !0);
              case "delete":
                if (u.fire === z) break;
                return i._promise("readwrite", function() {
                  return f(o);
                }, !0);
              case "deleteRange":
                if (u.fire === z) break;
                return i._promise("readwrite", function() {
                  return (function s(d, p, h) {
                    return n.query({ trans: d, values: !1, query: { index: r, range: p }, limit: h }).then(function(c) {
                      var v = c.result;
                      return f({ type: "delete", keys: v, trans: d }).then(function(b) {
                        return 0 < b.numFailures ? Promise.reject(b.failures[0]) : v.length < h ? { failures: [], numFailures: 0, lastResult: void 0 } : s(d, P(P({}, p), { lower: v[v.length - 1], lowerOpen: !0 }), h);
                      });
                    });
                  })(o.trans, o.range, 1e4);
                }, !0);
            }
            return n.mutate(o);
            function f(s) {
              var d, p, h, c = I.trans, v = s.keys || kn(r, s);
              if (v) return (s = s.type === "add" || s.type === "put" ? P(P({}, s), { keys: v }) : P({}, s)).type !== "delete" && (s.values = T([], s.values)), s.keys && (s.keys = T([], s.keys)), d = n, h = v, ((p = s).type === "add" ? Promise.resolve([]) : d.getMany({ trans: p.trans, keys: h, cache: "immutable" })).then(function(b) {
                var y = v.map(function(g, w) {
                  var k, O, _, K = b[w], C = { onerror: null, onsuccess: null };
                  return s.type === "delete" ? u.fire.call(C, g, K, c) : s.type === "add" || K === void 0 ? (k = l.fire.call(C, g, s.values[w], c), g == null && k != null && (s.keys[w] = g = k, r.outbound || ne(s.values[w], r.keyPath, g))) : (k = xn(K, s.values[w]), (O = m.fire.call(C, k, g, K, c)) && (_ = s.values[w], Object.keys(O).forEach(function(x) {
                    te(_, x) ? _[x] = O[x] : ne(_, x, O[x]);
                  }))), C;
                });
                return n.mutate(s).then(function(g) {
                  for (var w = g.failures, k = g.results, O = g.numFailures, g = g.lastResult, _ = 0; _ < v.length; ++_) {
                    var K = (k || v)[_], C = y[_];
                    K == null ? C.onerror && C.onerror(w[_]) : C.onsuccess && C.onsuccess(s.type === "put" && b[_] ? s.values[_] : K);
                  }
                  return { failures: w, results: k, numFailures: O, lastResult: g };
                }).catch(function(g) {
                  return y.forEach(function(w) {
                    return w.onerror && w.onerror(g);
                  }), Promise.reject(g);
                });
              });
              throw new Error("Keys missing");
            }
          } });
        } });
      } };
      function lr(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], o = 0, i = 0; o < t.keys.length && i < e.length; ++o) N(t.keys[o], e[i]) === 0 && (r.push(n ? Pe(t.values[o]) : t.values[o]), ++i);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var Jr = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return P(P({}, n), { getMany: function(r) {
            var o;
            return r.cache ? (o = lr(r.keys, r.trans._cache, r.cache === "clone")) ? E.resolve(o) : n.getMany(r).then(function(i) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Pe(i) : i }, i;
            }) : n.getMany(r);
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function fr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function hr(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Zr = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new ee(e.MIN_KEY, e.MAX_KEY);
        return P(P({}, e), { transaction: function(r, o, i) {
          if (I.subscr && o !== "readonly") throw new A.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(I.querier));
          return e.transaction(r, o, i);
        }, table: function(r) {
          function o(v) {
            var c, v = v.query;
            return [c = v.index, new ee((c = (v = v.range).lower) != null ? c : e.MIN_KEY, (c = v.upper) != null ? c : e.MAX_KEY)];
          }
          var i = e.table(r), a = i.schema, u = a.primaryKey, l = a.indexes, m = u.extractKey, f = u.outbound, s = u.autoIncrement && l.filter(function(h) {
            return h.compound && h.keyPath.includes(u.keyPath);
          }), d = P(P({}, i), { mutate: function(h) {
            function c(j) {
              return j = "idb://".concat(t, "/").concat(r, "/").concat(j), w[j] || (w[j] = new ee());
            }
            var v, b, y, g = h.trans, w = h.mutatedParts || (h.mutatedParts = {}), k = c(""), O = c(":dels"), _ = h.type, C = h.type === "deleteRange" ? [h.range] : h.type === "delete" ? [h.keys] : h.values.length < 50 ? [kn(u, h).filter(function(j) {
              return j;
            }), h.values] : [], K = C[0], C = C[1], x = h.trans._cache;
            return M(K) ? (k.addKeys(K), (_ = _ === "delete" || K.length === C.length ? lr(K, x) : null) || O.addKeys(K), (_ || C) && (v = c, b = _, y = C, a.indexes.forEach(function(j) {
              var F = v(j.name || "");
              function U(B) {
                return B != null ? j.extractKey(B) : null;
              }
              function D(B) {
                j.multiEntry && M(B) ? B.forEach(function(W) {
                  return F.addKey(W);
                }) : F.addKey(B);
              }
              (b || y).forEach(function(B, Q) {
                var ie = b && U(b[Q]), Q = y && U(y[Q]);
                N(ie, Q) !== 0 && (ie != null && D(ie), Q != null) && D(Q);
              });
            }))) : K ? (C = { from: (x = K.lower) != null ? x : e.MIN_KEY, to: (_ = K.upper) != null ? _ : e.MAX_KEY }, O.add(C), k.add(C)) : (k.add(n), O.add(n), a.indexes.forEach(function(j) {
              return c(j.name).add(n);
            })), i.mutate(h).then(function(j) {
              return !K || h.type !== "add" && h.type !== "put" || (k.addKeys(j.results), s && s.forEach(function(F) {
                for (var U = h.values.map(function(ie) {
                  return F.extractKey(ie);
                }), D = F.keyPath.findIndex(function(ie) {
                  return ie === u.keyPath;
                }), B = 0, W = j.results.length; B < W; ++B) U[B][D] = j.results[B];
                c(F.name).addKeys(U);
              })), g.mutatedParts = Tt(g.mutatedParts || {}, w), j;
            });
          } }), p = { get: function(h) {
            return [u, new ee(h.key)];
          }, getMany: function(h) {
            return [u, new ee().addKeys(h.keys)];
          }, count: o, query: o, openCursor: o };
          return $(p).forEach(function(h) {
            d[h] = function(c) {
              var v = I.subscr, b = !!v, y = fr(I, i) && hr(h, c) ? c.obsSet = {} : v;
              if (b) {
                var g, v = function(C) {
                  return C = "idb://".concat(t, "/").concat(r, "/").concat(C), y[C] || (y[C] = new ee());
                }, w = v(""), k = v(":dels"), b = p[h](c), O = b[0], b = b[1];
                if ((h === "query" && O.isPrimaryKey && !c.values ? k : v(O.name || "")).add(b), !O.isPrimaryKey) {
                  if (h !== "count") return g = h === "query" && f && c.values && i.query(P(P({}, c), { values: !1 })), i[h].apply(this, arguments).then(function(C) {
                    if (h === "query") {
                      if (f && c.values) return g.then(function(U) {
                        return U = U.result, w.addKeys(U), C;
                      });
                      var x = c.values ? C.result.map(m) : C.result;
                      (c.values ? w : k).addKeys(x);
                    } else {
                      var j, F;
                      if (h === "openCursor") return F = c.values, (j = C) && Object.create(j, { key: { get: function() {
                        return k.addKey(j.primaryKey), j.key;
                      } }, primaryKey: { get: function() {
                        var U = j.primaryKey;
                        return k.addKey(U), U;
                      } }, value: { get: function() {
                        return F && w.addKey(j.primaryKey), j.value;
                      } } });
                    }
                    return C;
                  });
                  k.add(n);
                }
              }
              return i[h].apply(this, arguments);
            };
          }), d;
        } });
      } };
      function dr(e, t, n) {
        var r;
        return n.numFailures === 0 ? t : t.type === "deleteRange" || (r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1, n.numFailures === r) ? null : (r = P({}, t), M(r.keys) && (r.keys = r.keys.filter(function(o, i) {
          return !(i in n.failures);
        })), "values" in r && M(r.values) && (r.values = r.values.filter(function(o, i) {
          return !(i in n.failures);
        })), r);
      }
      function On(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < N(n, r.lower) : 0 <= N(n, r.lower))) && (n = e, (r = t).upper === void 0 || (r.upperOpen ? N(n, r.upper) < 0 : N(n, r.upper) <= 0));
        var n, r;
      }
      function pr(e, t, n, r, o, i) {
        var a, u, l, m, f, s;
        return !n || n.length === 0 || (a = t.query.index, u = a.multiEntry, l = t.query.range, m = r.schema.primaryKey.extractKey, f = a.extractKey, s = (a.lowLevelIndex || a).extractKey, (r = n.reduce(function(d, p) {
          var h = d, c = [];
          if (p.type === "add" || p.type === "put") for (var v = new ee(), b = p.values.length - 1; 0 <= b; --b) {
            var y, g = p.values[b], w = m(g);
            !v.hasKey(w) && (y = f(g), u && M(y) ? y.some(function(C) {
              return On(C, l);
            }) : On(y, l)) && (v.addKey(w), c.push(g));
          }
          switch (p.type) {
            case "add":
              var k = new ee().addKeys(t.values ? d.map(function(x) {
                return m(x);
              }) : d), h = d.concat(t.values ? c.filter(function(x) {
                return x = m(x), !k.hasKey(x) && (k.addKey(x), !0);
              }) : c.map(function(x) {
                return m(x);
              }).filter(function(x) {
                return !k.hasKey(x) && (k.addKey(x), !0);
              }));
              break;
            case "put":
              var O = new ee().addKeys(p.values.map(function(x) {
                return m(x);
              }));
              h = d.filter(function(x) {
                return !O.hasKey(t.values ? m(x) : x);
              }).concat(t.values ? c : c.map(function(x) {
                return m(x);
              }));
              break;
            case "delete":
              var _ = new ee().addKeys(p.keys);
              h = d.filter(function(x) {
                return !_.hasKey(t.values ? m(x) : x);
              });
              break;
            case "deleteRange":
              var K = p.range;
              h = d.filter(function(x) {
                return !On(m(x), K);
              });
          }
          return h;
        }, e)) === e) ? e : (r.sort(function(d, p) {
          return N(s(d), s(p)) || N(m(d), m(p));
        }), t.limit && t.limit < 1 / 0 && (r.length > t.limit ? r.length = t.limit : e.length === t.limit && r.length < t.limit && (o.dirty = !0)), i ? Object.freeze(r) : r);
      }
      function yr(e, t) {
        return N(e.lower, t.lower) === 0 && N(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function eo(e, t) {
        return ((n, r, o, i) => {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((n = N(n, r)) === 0) {
            if (o && i) return 0;
            if (o) return 1;
            if (i) return -1;
          }
          return n;
        })(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= ((n, r, o, i) => {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((n = N(n, r)) === 0) {
            if (o && i) return 0;
            if (o) return -1;
            if (i) return 1;
          }
          return n;
        })(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function to(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var o, i;
          e.subscribers.delete(n), e.subscribers.size === 0 && (o = e, i = t, setTimeout(function() {
            o.subscribers.size === 0 && Ee(i, o);
          }, 3e3));
        });
      }
      var no = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return P(P({}, e), { transaction: function(n, r, o) {
          var i, a, u = e.transaction(n, r, o);
          return r === "readwrite" && (o = (i = new AbortController()).signal, u.addEventListener("abort", (a = function(l) {
            return function() {
              if (i.abort(), r === "readwrite") {
                for (var m = /* @__PURE__ */ new Set(), f = 0, s = n; f < s.length; f++) {
                  var d = s[f], p = Re["idb://".concat(t, "/").concat(d)];
                  if (p) {
                    var h = e.table(d), c = p.optimisticOps.filter(function(j) {
                      return j.trans === u;
                    });
                    if (u._explicit && l && u.mutatedParts) for (var v = 0, b = Object.values(p.queries.query); v < b.length; v++) for (var y = 0, g = (O = b[v]).slice(); y < g.length; y++) vn((_ = g[y]).obsSet, u.mutatedParts) && (Ee(O, _), _.subscribers.forEach(function(j) {
                      return m.add(j);
                    }));
                    else if (0 < c.length) {
                      p.optimisticOps = p.optimisticOps.filter(function(j) {
                        return j.trans !== u;
                      });
                      for (var w = 0, k = Object.values(p.queries.query); w < k.length; w++) for (var O, _, K, C = 0, x = (O = k[w]).slice(); C < x.length; C++) (_ = x[C]).res != null && u.mutatedParts && (l && !_.dirty ? (K = Object.isFrozen(_.res), K = pr(_.res, _.req, c, h, _, K), _.dirty ? (Ee(O, _), _.subscribers.forEach(function(j) {
                        return m.add(j);
                      })) : K !== _.res && (_.res = K, _.promise = E.resolve({ result: K }))) : (_.dirty && Ee(O, _), _.subscribers.forEach(function(j) {
                        return m.add(j);
                      })));
                    }
                  }
                }
                m.forEach(function(j) {
                  return j();
                });
              }
            };
          })(!1), { signal: o }), u.addEventListener("error", a(!1), { signal: o }), u.addEventListener("complete", a(!0), { signal: o })), u;
        }, table: function(n) {
          var r = e.table(n), o = r.schema.primaryKey;
          return P(P({}, r), { mutate: function(i) {
            var a, u = I.trans;
            return !o.outbound && u.db._options.cache !== "disabled" && !u.explicit && u.idbtrans.mode === "readwrite" && (a = Re["idb://".concat(t, "/").concat(n)]) ? (u = r.mutate(i), i.type !== "add" && i.type !== "put" || !(50 <= i.values.length || kn(o, i).some(function(l) {
              return l == null;
            })) ? (a.optimisticOps.push(i), i.mutatedParts && qt(i.mutatedParts), u.then(function(l) {
              0 < l.numFailures && (Ee(a.optimisticOps, i), (l = dr(0, i, l)) && a.optimisticOps.push(l), i.mutatedParts) && qt(i.mutatedParts);
            }), u.catch(function() {
              Ee(a.optimisticOps, i), i.mutatedParts && qt(i.mutatedParts);
            })) : u.then(function(l) {
              var m = dr(0, P(P({}, i), { values: i.values.map(function(f, s) {
                var d;
                return l.failures[s] ? f : (ne(d = (d = o.keyPath) != null && d.includes(".") ? Pe(f) : P({}, f), o.keyPath, l.results[s]), d);
              }) }), l);
              a.optimisticOps.push(m), queueMicrotask(function() {
                return i.mutatedParts && qt(i.mutatedParts);
              });
            }), u) : r.mutate(i);
          }, query: function(i) {
            var a, u, l, m, f, s, d;
            return fr(I, r) && hr("query", i) ? (a = ((l = I.trans) == null ? void 0 : l.db._options.cache) === "immutable", u = (l = I).requery, l = l.signal, s = ((p, h, c, v) => {
              var b = Re["idb://".concat(p, "/").concat(h)];
              if (!b) return [];
              if (!(p = b.queries[c])) return [null, !1, b, null];
              var y = p[(v.query ? v.query.index.name : null) || ""];
              if (!y) return [null, !1, b, null];
              switch (c) {
                case "query":
                  var g = y.find(function(w) {
                    return w.req.limit === v.limit && w.req.values === v.values && yr(w.req.query.range, v.query.range);
                  });
                  return g ? [g, !0, b, y] : [y.find(function(w) {
                    return ("limit" in w.req ? w.req.limit : 1 / 0) >= v.limit && (!v.values || w.req.values) && eo(w.req.query.range, v.query.range);
                  }), !1, b, y];
                case "count":
                  return g = y.find(function(w) {
                    return yr(w.req.query.range, v.query.range);
                  }), [g, !!g, b, y];
              }
            })(t, n, "query", i), d = s[0], m = s[2], f = s[3], d && s[1] ? d.obsSet = i.obsSet : (s = r.query(i).then(function(p) {
              var h = p.result;
              if (d && (d.res = h), a) {
                for (var c = 0, v = h.length; c < v; ++c) Object.freeze(h[c]);
                Object.freeze(h);
              } else p.result = Pe(h);
              return p;
            }).catch(function(p) {
              return f && d && Ee(f, d), Promise.reject(p);
            }), d = { obsSet: i.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: i, dirty: !1 }, f ? f.push(d) : (f = [d], (m = m || (Re["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[i.query.index.name || ""] = f)), to(d, f, u, l), d.promise.then(function(p) {
              return { result: pr(p.result, i, m?.optimisticOps, r, d, a) };
            })) : r.query(i);
          } });
        } });
      } };
      function Nt(e, t) {
        return new Proxy(e, { get: function(n, r, o) {
          return r === "db" ? t : Reflect.get(n, r, o);
        } });
      }
      H.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new A.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new A.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(Vr), n.stores({}), this._state.autoSchema = !1), n;
      }, H.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || I.letThrough || this._vip) ? e() : new E(function(n, r) {
          if (t._state.openComplete) return r(new A.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new A.DatabaseClosed());
            t.open().catch(z);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, H.prototype.use = function(o) {
        var t = o.stack, n = o.create, r = o.level, o = o.name, i = (o && this.unuse({ stack: t, name: o }), this._middlewares[t] || (this._middlewares[t] = []));
        return i.push({ stack: t, create: n, level: r ?? 10, name: o }), i.sort(function(a, u) {
          return a.level - u.level;
        }), this;
      }, H.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(o) {
          return r ? o.create !== r : !!n && o.name !== n;
        })), this;
      }, H.prototype.open = function() {
        var e = this;
        return Se(ve, function() {
          return Gr(e);
        });
      }, H.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = Ve.indexOf(this);
        if (0 <= t && Ve.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new E(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new E(function(n, r) {
          e.cancelOpen = r;
        }));
      }, H.prototype.close = function(t) {
        var t = (t === void 0 ? { disableAutoOpen: !0 } : t).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new A.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new A.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, H.prototype.delete = function(e) {
        var t = this, n = (e === void 0 && (e = { disableAutoOpen: !0 }), 0 < arguments.length && typeof arguments[0] != "object"), r = this._state;
        return new E(function(o, i) {
          function a() {
            t.close(e);
            var u = t._deps.indexedDB.deleteDatabase(t.name);
            u.onsuccess = Y(function() {
              var l, m, f;
              l = t._deps, m = t.name, pn(f = l.indexedDB) || m === kt || dn(f, l.IDBKeyRange).delete(m).catch(z), o();
            }), u.onerror = ce(i), u.onblocked = t._fireOnBlocked;
          }
          if (n) throw new A.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
        });
      }, H.prototype.backendDB = function() {
        return this.idbdb;
      }, H.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, H.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, H.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, H.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(H.prototype, "tables", { get: function() {
        var e = this;
        return $(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), H.prototype.transaction = function() {
        var e = function(t, n, r) {
          var o = arguments.length;
          if (o < 2) throw new A.InvalidArgument("Too few arguments");
          for (var i = new Array(o - 1); --o; ) i[o - 1] = arguments[o];
          return r = i.pop(), [t, Dn(i), r];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, H.prototype._transaction = function(e, t, n) {
        var r, o, i = this, a = I.trans, u = (a && a.db === this && e.indexOf("!") === -1 || (a = null), e.indexOf("?") !== -1);
        e = e.replace("!", "").replace("?", "");
        try {
          if (o = t.map(function(m) {
            if (m = m instanceof i.Table ? m.name : m, typeof m != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return m;
          }), e == "r" || e === tn) r = tn;
          else {
            if (e != "rw" && e != nn) throw new A.InvalidArgument("Invalid transaction mode: " + e);
            r = nn;
          }
          if (a) {
            if (a.mode === tn && r === nn) {
              if (!u) throw new A.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              a = null;
            }
            a && o.forEach(function(m) {
              if (a && a.storeNames.indexOf(m) === -1) {
                if (!u) throw new A.SubTransaction("Table " + m + " not included in parent transaction.");
                a = null;
              }
            }), u && a && !a.active && (a = null);
          }
        } catch (m) {
          return a ? a._promise(null, function(f, s) {
            s(m);
          }) : G(m);
        }
        var l = function m(f, s, d, p, h) {
          return E.resolve().then(function() {
            var y = I.transless || I, c = f._createTransaction(s, d, f._dbSchema, p), y = (c.explicit = !0, { trans: c, transless: y });
            if (p) c.idbtrans = p.idbtrans;
            else try {
              c.create(), c.idbtrans._explicit = !0, f._state.PR1398_maxLoop = 3;
            } catch (g) {
              return g.name === Vt.InvalidState && f.isOpen() && 0 < --f._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), f.close({ disableAutoOpen: !1 }), f.open().then(function() {
                return m(f, s, d, null, h);
              })) : G(g);
            }
            var v, b = zt(h), y = (b && ze(), E.follow(function() {
              var g;
              (v = h.call(c, c)) && (b ? (g = ge.bind(null, null), v.then(g, g)) : typeof v.next == "function" && typeof v.throw == "function" && (v = _n(v)));
            }, y));
            return (v && typeof v.then == "function" ? E.resolve(v).then(function(g) {
              return c.active ? g : G(new A.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : y.then(function() {
              return v;
            })).then(function(g) {
              return p && c._resolve(), c._completion.then(function() {
                return g;
              });
            }).catch(function(g) {
              return c._reject(g), G(g);
            });
          });
        }.bind(null, this, r, o, a, n);
        return a ? a._promise(r, l, "lock") : I.trans ? Se(I.transless, function() {
          return i._whenReady(l);
        }) : this._whenReady(l);
      }, H.prototype.table = function(e) {
        if (te(this._allTables, e)) return this._allTables[e];
        throw new A.InvalidTable("Table ".concat(e, " does not exist"));
      };
      var ye = H;
      function H(e, t) {
        var n, r, o, i, a, u = this, l = (this._middlewares = {}, this.verno = 0, H.dependencies), l = (this._options = t = P({ addons: H.addons, autoOpen: !0, indexedDB: l.indexedDB, IDBKeyRange: l.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, t.addons), m = (this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this, { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: z, dbReadyPromise: null, cancelOpen: z, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen }), f = (m.dbReadyPromise = new E(function(s) {
          m.dbReadyResolve = s;
        }), m.openCanceller = new E(function(s, d) {
          m.cancelOpen = d;
        }), this._state = m, this.name = e, this.on = it(this, "populate", "blocked", "versionchange", "close", { ready: [Yt, z] }), this.once = function(s, d) {
          var p = function() {
            for (var h = [], c = 0; c < arguments.length; c++) h[c] = arguments[c];
            u.on(s).unsubscribe(p), d.apply(u, h);
          };
          return u.on(s, p);
        }, this.on.ready.subscribe = In(this.on.ready.subscribe, function(s) {
          return function(d, p) {
            H.vip(function() {
              var h, c = u._state;
              c.openComplete ? (c.dbOpenError || E.resolve().then(d), p && s(d)) : c.onReadyBeingFired ? (c.onReadyBeingFired.push(d), p && s(d)) : (s(d), h = u, p || s(function v() {
                h.on.ready.unsubscribe(d), h.on.ready.unsubscribe(v);
              }));
            });
          };
        }), this.Collection = (n = this, at(Nr.prototype, function(v, c) {
          this.db = n;
          var p = zn, h = null;
          if (c) try {
            p = c();
          } catch (y) {
            h = y;
          }
          var c = v._ctx, v = c.table, b = v.hook.reading.fire;
          this._ctx = { table: v, index: c.index, isPrimKey: !c.index || v.schema.primKey.keyPath && c.index === v.schema.primKey.name, range: p, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: h, or: c.or, valueMapper: b !== Ze ? b : null };
        })), this.Table = (r = this, at(Hn.prototype, function(s, d, p) {
          this.db = r, this._tx = p, this.name = s, this.schema = d, this.hook = r._allTables[s] ? r._allTables[s].hook : it(null, { creating: [jr, z], reading: [Kr, Ze], updating: [Sr, z], deleting: [Ir, z] });
        })), this.Transaction = (o = this, at(Lr.prototype, function(s, d, p, h, c) {
          var v = this;
          s !== "readonly" && d.forEach(function(b) {
            b = (b = p[b]) == null ? void 0 : b.yProps, b && (d = d.concat(b.map(function(y) {
              return y.updatesTable;
            })));
          }), this.db = o, this.mode = s, this.storeNames = d, this.schema = p, this.chromeTransactionDurability = h, this.idbtrans = null, this.on = it(this, "complete", "error", "abort"), this.parent = c || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new E(function(b, y) {
            v._resolve = b, v._reject = y;
          }), this._completion.then(function() {
            v.active = !1, v.on.complete.fire();
          }, function(b) {
            var y = v.active;
            return v.active = !1, v.on.error.fire(b), v.parent ? v.parent._reject(b) : y && v.idbtrans && v.idbtrans.abort(), G(b);
          });
        })), this.Version = (i = this, at(Qr.prototype, function(s) {
          this.db = i, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (a = this, at(tr.prototype, function(s, d, p) {
          if (this.db = a, this._ctx = { table: s, index: d === ":id" ? null : d, or: p }, this._cmp = this._ascending = N, this._descending = function(h, c) {
            return N(c, h);
          }, this._max = function(h, c) {
            return 0 < N(h, c) ? h : c;
          }, this._min = function(h, c) {
            return N(h, c) < 0 ? h : c;
          }, this._IDBKeyRange = a._deps.IDBKeyRange, !this._IDBKeyRange) throw new A.MissingAPI();
        })), this.on("versionchange", function(s) {
          0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(u.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(u.name, "'. Closing db now to resume the delete request.")), u.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(s) {
          !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(u.name, "') was blocked")) : console.warn("Upgrade '".concat(u.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
        }), this._maxKey = ct(t.IDBKeyRange), this._createTransaction = function(s, d, p, h) {
          return new u.Transaction(s, d, p, u._options.chromeTransactionDurability, h);
        }, this._fireOnBlocked = function(s) {
          u.on("blocked").fire(s), Ve.filter(function(d) {
            return d.name === u.name && d !== u && !d._state.vcFired;
          }).map(function(d) {
            return d.on("versionchange").fire(s);
          });
        }, this.use(Jr), this.use(no), this.use(Zr), this.use(Hr), this.use(Xr), new Proxy(this, { get: function(s, d, p) {
          var h;
          return d === "_vip" || (d === "table" ? function(c) {
            return Nt(u.table(c), f);
          } : (h = Reflect.get(s, d, p)) instanceof Hn ? Nt(h, f) : d === "tables" ? h.map(function(c) {
            return Nt(c, f);
          }) : d === "_createTransaction" ? function() {
            return Nt(h.apply(this, arguments), f);
          } : h);
        } }));
        this.vip = f, l.forEach(function(s) {
          return s(u);
        });
      }
      var Mt, Ge = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ro = (Pn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Pn.prototype[Ge] = function() {
        return this;
      }, Pn);
      function Pn(e) {
        this._subscribe = e;
      }
      try {
        Mt = { indexedDB: S.indexedDB || S.mozIndexedDB || S.webkitIndexedDB || S.msIndexedDB, IDBKeyRange: S.IDBKeyRange || S.webkitIDBKeyRange };
      } catch {
        Mt = { indexedDB: null, IDBKeyRange: null };
      }
      function mr(e) {
        var t, n = !1, r = new ro(function(o) {
          var i = zt(e), a, u = !1, l = {}, m = {}, f = { get closed() {
            return u;
          }, unsubscribe: function() {
            u || (u = !0, a && a.abort(), s && xe.storagemutated.unsubscribe(p));
          } }, s = (o.start && o.start(f), !1), d = function() {
            return en(h);
          }, p = function(c) {
            Tt(l, c), vn(m, l) && d();
          }, h = function() {
            var c, v, b;
            !u && Mt.indexedDB && (l = {}, c = {}, a && a.abort(), a = new AbortController(), b = ((y) => {
              var g = Ue();
              try {
                i && ze();
                var w = be(e, y);
                return w = i ? w.finally(ge) : w;
              } finally {
                g && $e();
              }
            })(v = { subscr: c, signal: a.signal, requery: d, querier: e, trans: null }), Promise.resolve(b).then(function(y) {
              n = !0, t = y, u || v.signal.aborted || (l = {}, ((g) => {
                for (var w in g) if (te(g, w)) return;
                return 1;
              })(m = c) || s || (xe(st, p), s = !0), en(function() {
                return !u && o.next && o.next(y);
              }));
            }, function(y) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(y?.name) || u || en(function() {
                u || o.error && o.error(y);
              });
            }));
          };
          return setTimeout(d, 0), f;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var Te = ye;
      function En(e) {
        var t = ke;
        try {
          ke = !0, xe.storagemutated.fire(e), wn(e, !0);
        } finally {
          ke = t;
        }
      }
      Be(Te, P(P({}, de), { delete: function(e) {
        return new Te(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Te(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Te.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (pn(n) ? Promise.resolve(n.databases()).then(function(r) {
            return r.map(function(o) {
              return o.name;
            }).filter(function(o) {
              return o !== kt;
            });
          }) : dn(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return G(new A.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          X(this, e);
        };
      }, ignoreTransaction: function(e) {
        return I.trans ? Se(I.transless, e) : e();
      }, vip: yn, async: function(e) {
        return function() {
          try {
            var t = _n(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : E.resolve(t);
          } catch (n) {
            return G(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = _n(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : E.resolve(r);
        } catch (o) {
          return G(o);
        }
      }, currentTransaction: { get: function() {
        return I.trans || null;
      } }, waitFor: function(e, t) {
        return e = E.resolve(typeof e == "function" ? Te.ignoreTransaction(e) : e).timeout(t || 6e4), I.trans ? I.trans.waitFor(e) : e;
      }, Promise: E, debug: { get: function() {
        return se;
      }, set: function(e) {
        Bn(e);
      } }, derive: Ne, extend: X, props: Be, override: In, Events: it, on: xe, liveQuery: mr, extendObservabilitySet: Tt, getByKeyPath: fe, setByKeyPath: ne, delByKeyPath: function(e, t) {
        typeof t == "string" ? ne(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          ne(e, n, void 0);
        });
      }, shallowClone: An, deepClone: Pe, getObjectDiff: xn, cmp: N, asap: Sn, minKey: -1 / 0, addons: [], connections: Ve, errnames: Vt, dependencies: Mt, cache: Re, semVer: "4.3.0", version: "4.3.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), Te.maxKey = ct(Te.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (xe(st, function(e) {
        ke || (e = new CustomEvent(an, { detail: e }), ke = !0, dispatchEvent(e), ke = !1);
      }), addEventListener(an, function(e) {
        e = e.detail, ke || En(e);
      }));
      var He, ke = !1, vr = function() {
      };
      return typeof BroadcastChannel < "u" && ((vr = function() {
        (He = new BroadcastChannel(an)).onmessage = function(e) {
          return e.data && En(e.data);
        };
      })(), typeof He.unref == "function" && He.unref(), xe(st, function(e) {
        ke || He.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!ye.disableBfCache && e.persisted) {
          se && console.debug("Dexie: handling persisted pagehide"), He?.close();
          for (var t = 0, n = Ve; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !ye.disableBfCache && e.persisted && (se && console.debug("Dexie: handling persisted pageshow"), vr(), En({ all: new ee(-1 / 0, [[]]) }));
      })), E.rejectionMapper = function(e, t) {
        return !e || e instanceof Fe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !qn[e.name] ? e : (t = new qn[e.name](t || e.message, e), "stack" in e && me(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Bn(se), P(ye, Object.freeze({ __proto__: null, Dexie: ye, Entity: Vn, PropModification: ot, RangeSet: ee, add: function(e) {
        return new ot({ add: e });
      }, cmp: N, default: ye, liveQuery: mr, mergeRanges: ht, rangesOverlap: ar, remove: function(e) {
        return new ot({ remove: e });
      }, replacePrefix: function(e, t) {
        return new ot({ replacePrefix: [e, t] });
      } }), { default: ye }), ye;
    });
  })(Lt)), Lt.exports;
}
var so = uo();
const Kn = /* @__PURE__ */ io(so), gr = /* @__PURE__ */ Symbol.for("Dexie"), Oe = globalThis[gr] || (globalThis[gr] = Kn);
if (Kn.semVer !== Oe.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Kn.semVer} and ${Oe.semVer}`);
const {
  liveQuery: Ro,
  mergeRanges: To,
  rangesOverlap: qo,
  RangeSet: Bo,
  cmp: No,
  Entity: Mo,
  PropModification: Fo,
  replacePrefix: Lo,
  add: Uo,
  remove: $o,
  DexieYProvider: zo
} = Oe;
class co extends Error {
  data;
  locator;
  // Error locator 'package.module.method'
  constructor(R, q, P, T) {
    super(R, T), this.name = "DPUseError", this.data = P, this.locator = q;
  }
}
class lo extends co {
  constructor(R, q, P, T) {
    super(R, q, P, T), this.name = "ConnectorError";
  }
}
const fo = "datapos-connector-dexie-js", ho = { en: "Dexie.js" }, po = { en: "The Dexie.js..." }, yo = null, mo = "database", vo = { default: { authMethodId: "none", maxConnectionCount: null } }, bo = '<svg viewBox="123.1505 158.139 852.3977 647.961" width="100%" height="100%" preserveAspectRatio="none"><g transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 0, 949.9999999999999)" fill="#000000" stroke="none" id="object-0"><path d="M3345 7913 c-399 -35 -977 -169 -1320 -305 -485 -192 -700 -426 -772 -838 -13 -71 -17 -155 -17 -330 0 -204 3 -250 22 -348 38 -188 112 -318 250 -439 87 -77 137 -110 251 -167 275 -138 684 -272 1116 -364 474 -102 908 -129 1019 -64 47 27 83 96 98 182 8 52 12 215 13 525 l0 450 -600 96 c-660 105 -741 120 -990 184 -314 80 -528 171 -629 269 -95 90 -98 170 -10 260 153 155 531 278 1219 396 529 91 816 168 946 254 129 86 61 191 -149 232 -68 13 -333 17 -447 7z"/><path d="M4590 4565 l0 -3126 1333 4 c1184 3 1346 5 1462 20 657 86 1058 244 1413 555 659 577 1006 1597 952 2798 -21 454 -83 812 -200 1150 -172 496 -398 846 -745 1157 -303 270 -710 451 -1162 516 -293 42 -345 44 -1720 48 l-1333 4 0 -3126z m2585 2376 c261 -23 460 -58 596 -107 328 -117 615 -379 838 -767 174 -304 270 -714 290 -1244 35 -954 -152 -1676 -553 -2138 -117 -135 -210 -207 -372 -288 -168 -84 -366 -148 -549 -177 -231 -37 -357 -42 -1187 -47 l-828 -5 0 2397 0 2397 818 -5 c462 -3 873 -10 947 -16z"/><path d="M1272 5367 c-24 -28 -34 -112 -39 -332 -8 -345 24 -688 81 -870 22 -70 33 -87 83 -137 191 -186 646 -376 1233 -513 213 -50 436 -86 905 -145 220 -27 417 -52 438 -55 l37 -5 0 417 c-1 584 -14 729 -76 803 -46 53 -72 61 -278 76 -456 34 -1023 168 -1624 385 -299 108 -460 191 -605 311 -89 74 -133 92 -155 65z"/><path d="M1272 3697 c-24 -28 -34 -112 -39 -323 -10 -385 31 -768 98 -923 100 -233 823 -533 1601 -665 130 -22 643 -91 966 -129 l112 -14 0 416 c0 441 -10 631 -36 720 -35 122 -67 139 -308 157 -100 8 -253 26 -341 40 -490 80 -1185 283 -1584 464 -105 47 -280 154 -296 181 -12 18 -127 89 -145 89 -10 0 -22 -6 -28 -13z"/></g></svg>', go = '<svg viewBox="123.1505 158.139 852.3977 647.961" width="100%" height="100%" preserveAspectRatio="none"><g transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 0, 949.9999999999999)" fill="#ffffff" stroke="none" id="object-0"><path d="M3345 7913 c-399 -35 -977 -169 -1320 -305 -485 -192 -700 -426 -772 -838 -13 -71 -17 -155 -17 -330 0 -204 3 -250 22 -348 38 -188 112 -318 250 -439 87 -77 137 -110 251 -167 275 -138 684 -272 1116 -364 474 -102 908 -129 1019 -64 47 27 83 96 98 182 8 52 12 215 13 525 l0 450 -600 96 c-660 105 -741 120 -990 184 -314 80 -528 171 -629 269 -95 90 -98 170 -10 260 153 155 531 278 1219 396 529 91 816 168 946 254 129 86 61 191 -149 232 -68 13 -333 17 -447 7z"/><path d="M4590 4565 l0 -3126 1333 4 c1184 3 1346 5 1462 20 657 86 1058 244 1413 555 659 577 1006 1597 952 2798 -21 454 -83 812 -200 1150 -172 496 -398 846 -745 1157 -303 270 -710 451 -1162 516 -293 42 -345 44 -1720 48 l-1333 4 0 -3126z m2585 2376 c261 -23 460 -58 596 -107 328 -117 615 -379 838 -767 174 -304 270 -714 290 -1244 35 -954 -152 -1676 -553 -2138 -117 -135 -210 -207 -372 -288 -168 -84 -366 -148 -549 -177 -231 -37 -357 -42 -1187 -47 l-828 -5 0 2397 0 2397 818 -5 c462 -3 873 -10 947 -16z"/><path d="M1272 5367 c-24 -28 -34 -112 -39 -332 -8 -345 24 -688 81 -870 22 -70 33 -87 83 -137 191 -186 646 -376 1233 -513 213 -50 436 -86 905 -145 220 -27 417 -52 438 -55 l37 -5 0 417 c-1 584 -14 729 -76 803 -46 53 -72 61 -278 76 -456 34 -1023 168 -1624 385 -299 108 -460 191 -605 311 -89 74 -133 92 -155 65z"/><path d="M1272 3697 c-24 -28 -34 -112 -39 -323 -10 -385 31 -768 98 -923 100 -233 823 -533 1601 -665 130 -22 643 -91 966 -129 l112 -14 0 416 c0 441 -10 631 -36 720 -35 122 -67 139 -308 157 -100 8 -253 26 -341 40 -490 80 -1185 283 -1584 464 -105 47 -280 154 -296 181 -12 18 -127 89 -145 89 -10 0 -22 -6 -28 -13z"/></g></svg>', wo = null, _o = ["abortOperation", "createObject", "dropObject", "findObject", "getRecord", "listNodes", "previewObject", "upsertRecords", "removeRecords", "retrieveRecords"], xo = null, ko = "alpha", Oo = "connector", Po = "bidirectional", Eo = "https://dexie.org/cloud/", Co = "https://dexie.org/docs/", Ko = "https://dexie.org/", jo = "0.2.266", Io = {
  id: fo,
  label: ho,
  description: po,
  category: yo,
  categoryId: mo,
  implementations: vo,
  icon: bo,
  iconDark: go,
  lastUpdatedAt: wo,
  operations: _o,
  status: xo,
  statusId: ko,
  typeId: Oo,
  usageId: Po,
  vendorAccountURL: Eo,
  vendorDocumentationURL: Co,
  vendorHomeURL: Ko,
  version: jo
}, So = "0.2.266", Ao = "Encountered invalid container identifier", Ft = "Encountered invalid folder path", Do = "Encountered invalid object path";
class Vo {
  abortController;
  config;
  engineUtilities;
  toolConfigs;
  containers;
  constructor(R, q) {
    this.abortController = void 0, this.config = Io, this.config.version = So, this.engineUtilities = R, this.toolConfigs = q, this.containers = {};
  }
  // Abort operation
  abortOperation() {
    this.abortController && (this.abortController.abort(), this.abortController = void 0);
  }
  // Create object
  async createObject(R) {
    const { containerId: q, nodeId: P } = this.establishObjectIdentifiers(R.path), T = await this.establishContainer(q);
    if (T.tables.some((M) => M.name === P)) throw new Error(`Duplicate table '${P}'.`);
    T.close();
    const S = new Oe(T.name);
    if (S.on("blocked", () => !1), T.tables.length === 0) {
      await T.delete(), S.version(1).stores({ [P]: R.structure || "" }), this.containers[q] = await S.open();
      return;
    }
    const $ = {};
    for (const { name: M, schema: X } of T.tables)
      $[M] = [X.primKey.src, ...X.indexes.map((ue) => ue.src)].join(",");
    S.version(T.verno).stores($), S.version(T.verno + 1).stores({ [P]: R.structure || "" }), this.containers[q] = await S.open();
  }
  // Drop object
  async dropObject(R) {
    const { containerId: q, nodeId: P } = this.establishObjectIdentifiers(R.path), T = await this.establishContainer(q);
    if (!T.tables.some((M) => M.name === P)) throw new Error(`Table '${P}' not found.`);
    T.close();
    const S = new Oe(T.name);
    if (S.on("blocked", () => !1), T.tables.length === 1) {
      await T.delete(), S.version(1).stores({}), this.containers[q] = await S.open();
      return;
    }
    const $ = {};
    for (const { name: M, schema: X } of T.tables)
      $[M] = [X.primKey.src, ...X.indexes.map((ue) => ue.src)].join(",");
    S.version(T.verno).stores($), S.version(T.verno + 1).stores({ [P]: null }), this.containers[q] = await S.open();
  }
  // Find object
  async findObject(R) {
    if (R.storeId == null) throw new Error(`${Ao} '${R.storeId}'.`);
    return (await this.establishContainer(R.storeId)).tables.find((T) => T.name === R.nodeId) ? { path: `/${R.storeId}/${R.nodeId}` } : { path: void 0 };
  }
  // Get record
  async getRecord(R) {
    const { containerId: q, nodeId: P } = this.establishObjectIdentifiers(R.path), S = await (await this.establishContainer(q)).table(P).get(R.id);
    if (S) return { record: S };
    throw new Error("Not found.");
  }
  // List nodes
  async listNodes(R) {
    const q = R.folderPath.split("/");
    switch (q.length) {
      case 1: {
        if (q[0] != null) throw new Error(`${Ft} '${R.folderPath}'.`);
        const T = (await Oe.getDatabaseNames()).map(
          (S) => ({ folderPath: R.folderPath, id: S, label: S, name: S, typeId: "folder" })
        );
        return { cursor: void 0, isMore: !1, connectionNodeConfigs: T, totalCount: T.length };
      }
      case 2: {
        if (q[0] != null) throw new Error(`${Ft} '${R.folderPath}'.`);
        const P = q[1];
        if (P == null) throw new Error(`${Ft} '${R.folderPath}'.`);
        const S = (await this.establishContainer(P)).tables.map(
          ($) => ({ folderPath: R.folderPath, id: $.name, label: $.name, name: $.name, typeId: "object" })
        );
        return { cursor: void 0, isMore: !1, connectionNodeConfigs: S, totalCount: S.length };
      }
      default:
        throw new Error(`${Ft} '${R.folderPath}'.`);
    }
  }
  // Preview object
  async previewObject(R) {
    const { containerId: q, nodeId: P } = this.establishObjectIdentifiers(R.path);
    return await (await this.establishContainer(q)).table(P).limit(50).toArray(), {
      asAt: Date.now(),
      columnConfigs: [],
      dataFormatId: "unknown",
      duration: 0,
      encodingConfidenceLevel: void 0,
      encodingId: void 0,
      fileType: void 0,
      hasHeaders: void 0,
      inferenceRecords: [],
      parsedRecords: [],
      recordDelimiterId: void 0,
      size: void 0,
      text: void 0,
      valueDelimiterId: void 0
    };
  }
  // Upsert records
  async upsertRecords(R) {
    const { containerId: q, nodeId: P } = this.establishObjectIdentifiers(R.path), T = await this.establishContainer(q), S = R.records;
    S.length === 1 ? await T.table(P).put(S[0]) : S.length > 1 && await T.table(P).bulkPut(S);
  }
  // Remove records
  async removeRecords(R) {
    const { containerId: q, nodeId: P } = this.establishObjectIdentifiers(R.path), T = await this.establishContainer(q), S = R.keys;
    S.length === 0 ? await T.table(P).clear() : S.length === 1 && S[0] != null ? await T.table(P).delete(S[0]) : await T.table(P).bulkDelete(S);
  }
  // Retrieve records
  async retrieveRecords(R, q, P) {
    try {
      const { containerId: T, nodeId: S } = this.establishObjectIdentifiers(R.path), M = await (await this.establishContainer(T)).table(S).toArray();
      q("jsonRecordArray", M), P({ byteCount: 0, commentLineCount: 0, emptyLineCount: 0, lineCount: 0, nonUniformRecordCount: 0, recordCount: M.length });
    } catch (T) {
      throw new lo(`Failed to access Dexie table with path '${R.path}'.`, "dpu-connector-dexie-js.index.retrieveRecords", { cause: T });
    } finally {
      this.abortController = void 0;
    }
  }
  // Helpers ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  async establishContainer(R) {
    if (!this.containers[R]) {
      const q = new Oe(R);
      await Oe.exists(q.name) || q.version(1).stores({}), this.containers[R] = await q.open();
    }
    return this.containers[R];
  }
  establishObjectIdentifiers(R) {
    const q = R.split("/"), [, P, T] = q;
    if (q.length !== 3 || P === void 0 || P === "" || T === void 0 || T === "")
      throw new Error(`${Do} '${R}'.`);
    return { containerId: P, nodeId: T };
  }
}
export {
  Vo as Connector
};
//# sourceMappingURL=datapos-connector-dexie-js.es.js.map
