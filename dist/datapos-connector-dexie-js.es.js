var uo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function so(ye) {
  return ye && ye.__esModule && Object.prototype.hasOwnProperty.call(ye, "default") ? ye.default : ye;
}
var Vt = { exports: {} }, co = Vt.exports, xr;
function lo() {
  return xr || (xr = 1, function(ye, $) {
    (function(I, x) {
      ye.exports = x();
    })(co, function() {
      var I = function(e, t) {
        return (I = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
          n.__proto__ = r;
        } || function(n, r) {
          for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (n[o] = r[o]);
        })(e, t);
      }, x = function() {
        return (x = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
      };
      function M(e, t, n) {
        for (var r, o = 0, i = t.length; o < i; o++) !r && o in t || ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t));
      }
      var D = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : uo, U = Object.keys, N = Array.isArray;
      function X(e, t) {
        return typeof t != "object" || U(t).forEach(function(n) {
          e[n] = t[n];
        }), e;
      }
      typeof Promise > "u" || D.Promise || (D.Promise = Promise);
      var ae = Object.getPrototypeOf, Je = {}.hasOwnProperty;
      function ne(e, t) {
        return Je.call(e, t);
      }
      function Ne(e, t) {
        typeof t == "function" && (t = t(ae(e))), (typeof Reflect > "u" ? U : Reflect.ownKeys)(t).forEach(function(n) {
          ve(e, n, t[n]);
        });
      }
      var In = Object.defineProperty;
      function ve(e, t, n, r) {
        In(e, t, X(n && ne(n, "get") && typeof n.get == "function" ? { get: n.get, set: n.set, configurable: !0 } : { value: n, configurable: !0, writable: !0 }, r));
      }
      function Fe(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), ve(e.prototype, "constructor", e), { extend: Ne.bind(null, e.prototype) };
        } };
      }
      var Or = Object.getOwnPropertyDescriptor, Pr = [].slice;
      function yt(e, t, n) {
        return Pr.call(e, t, n);
      }
      function Tn(e, t) {
        return t(e);
      }
      function Ze(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Rn(e) {
        D.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function fe(e, t) {
        if (typeof t == "string" && ne(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var n = [], r = 0, o = t.length; r < o; ++r) {
            var i = fe(e, t[r]);
            n.push(i);
          }
          return n;
        }
        var a = t.indexOf(".");
        if (a !== -1) {
          var u = e[t.substr(0, a)];
          return u == null ? void 0 : fe(u, t.substr(a + 1));
        }
      }
      function re(e, t, n) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          Ze(typeof n != "string" && "length" in n);
          for (var r = 0, o = t.length; r < o; ++r) re(e, t[r], n[r]);
        } else {
          var i, a, u = t.indexOf(".");
          u !== -1 ? (i = t.substr(0, u), (a = t.substr(u + 1)) === "" ? n === void 0 ? N(e) && !isNaN(parseInt(i)) ? e.splice(i, 1) : delete e[i] : e[i] = n : re(u = !(u = e[i]) || !ne(e, i) ? e[i] = {} : u, a, n)) : n === void 0 ? N(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = n;
        }
      }
      function qn(e) {
        var t, n = {};
        for (t in e) ne(e, t) && (n[t] = e[t]);
        return n;
      }
      var Er = [].concat;
      function Bn(e) {
        return Er.apply([], e);
      }
      var Se = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Bn([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return D[e];
      }), Mn = new Set(Se.map(function(e) {
        return D[e];
      })), et = null;
      function Pe(e) {
        return et = /* @__PURE__ */ new WeakMap(), e = function t(n) {
          if (!n || typeof n != "object") return n;
          var r = et.get(n);
          if (r) return r;
          if (N(n)) {
            r = [], et.set(n, r);
            for (var o = 0, i = n.length; o < i; ++o) r.push(t(n[o]));
          } else if (Mn.has(n.constructor)) r = n;
          else {
            var a, u = ae(n);
            for (a in r = u === Object.prototype ? {} : Object.create(u), et.set(n, r), n) ne(n, a) && (r[a] = t(n[a]));
          }
          return r;
        }(e), et = null, e;
      }
      var Kr = {}.toString;
      function Yt(e) {
        return Kr.call(e).slice(8, -1);
      }
      var Wt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Sr = typeof Wt == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Wt]) && t.apply(e);
      } : function() {
        return null;
      };
      function Ee(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var $e = {};
      function he(e) {
        var t, n, r, o;
        if (arguments.length === 1) {
          if (N(e)) return e.slice();
          if (this === $e && typeof e == "string") return [e];
          if (o = Sr(e)) {
            for (n = []; !(r = o.next()).done; ) n.push(r.value);
            return n;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (n = new Array(t); t--; ) n[t] = e[t];
          return n;
        }
        for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
        return n;
      }
      var Qt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, rt = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], ue = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(rt), Cr = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Le(e, t) {
        this.name = e, this.message = t;
      }
      function Nn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(n) {
          return t[n].toString();
        }).filter(function(n, r, o) {
          return o.indexOf(n) === r;
        }).join(`
`);
      }
      function vt(e, t, n, r) {
        this.failures = t, this.failedKeys = r, this.successCount = n, this.message = Nn(e, t);
      }
      function Ue(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(n) {
          return t[n];
        }), this.failuresByPos = t, this.message = Nn(e, this.failures);
      }
      Fe(Le).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), Fe(vt).from(Le), Fe(Ue).from(Le);
      var Gt = ue.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), jr = Le, A = ue.reduce(function(e, t) {
        var n = t + "Error";
        function r(o, i) {
          this.name = n, o ? typeof o == "string" ? (this.message = "".concat(o).concat(i ? `
 ` + i : ""), this.inner = i || null) : typeof o == "object" && (this.message = "".concat(o.name, " ").concat(o.message), this.inner = o) : (this.message = Cr[t] || n, this.inner = null);
        }
        return Fe(r).from(jr), e[t] = r, e;
      }, {});
      A.Syntax = SyntaxError, A.Type = TypeError, A.Range = RangeError;
      var Fn = rt.reduce(function(e, t) {
        return e[t + "Error"] = A[t], e;
      }, {}), mt = ue.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = A[t]), e;
      }, {});
      function z() {
      }
      function tt(e) {
        return e;
      }
      function Ar(e, t) {
        return e == null || e === tt ? t : function(n) {
          return t(e(n));
        };
      }
      function Ke(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function Dr(e, t) {
        return e === z ? t : function() {
          var n = e.apply(this, arguments);
          n !== void 0 && (arguments[0] = n);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var i = t.apply(this, arguments);
          return r && (this.onsuccess = this.onsuccess ? Ke(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? Ke(o, this.onerror) : o), i !== void 0 ? i : n;
        };
      }
      function Ir(e, t) {
        return e === z ? t : function() {
          e.apply(this, arguments);
          var n = this.onsuccess, r = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), n && (this.onsuccess = this.onsuccess ? Ke(n, this.onsuccess) : n), r && (this.onerror = this.onerror ? Ke(r, this.onerror) : r);
        };
      }
      function Tr(e, t) {
        return e === z ? t : function(n) {
          var r = e.apply(this, arguments);
          X(n, r);
          var o = this.onsuccess, i = this.onerror;
          return this.onsuccess = null, this.onerror = null, n = t.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? Ke(o, this.onsuccess) : o), i && (this.onerror = this.onerror ? Ke(i, this.onerror) : i), r === void 0 ? n === void 0 ? void 0 : n : X(r, n);
        };
      }
      function Rr(e, t) {
        return e === z ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function Ht(e, t) {
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
      mt.ModifyError = vt, mt.DexieError = Le, mt.BulkError = Ue;
      var se = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function $n(e) {
        se = e;
      }
      var nt = {}, Ln = 100, Se = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, ae(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, ae(t), e];
      }(), rt = Se[0], ue = Se[1], Se = Se[2], ue = ue && ue.then, Ce = rt && rt.constructor, Xt = !!Se, ot = function(e, t) {
        it.push([e, t]), bt && (queueMicrotask(Br), bt = !1);
      }, Jt = !0, bt = !0, je = [], gt = [], Zt = tt, me = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: z, pgp: !1, env: {}, finalize: z }, j = me, it = [], Ae = 0, wt = [];
      function S(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = j;
        if (typeof e != "function") {
          if (e !== nt) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && tn(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function n(r, o) {
          try {
            o(function(i) {
              if (r._state === null) {
                if (i === r) throw new TypeError("A promise cannot be resolved with itself.");
                var a = r._lib && ze();
                i && typeof i.then == "function" ? n(r, function(u, c) {
                  i instanceof S ? i._then(u, c) : i.then(u, c);
                }) : (r._state = !0, r._value = i, zn(r)), a && Ve();
              }
            }, tn.bind(null, r));
          } catch (i) {
            tn(r, i);
          }
        }(this, e);
      }
      var en = { get: function() {
        var e = j, t = Ot;
        function n(r, o) {
          var i = this, a = !e.global && (e !== j || t !== Ot), u = a && !ge(), c = new S(function(l, p) {
            nn(i, new Un(Yn(r, e, a, u), Yn(o, e, a, u), l, p, e));
          });
          return this._consoleTask && (c._consoleTask = this._consoleTask), c;
        }
        return n.prototype = nt, n;
      }, set: function(e) {
        ve(this, "then", e && e.prototype === nt ? en : { get: function() {
          return e;
        }, set: en.set });
      } };
      function Un(e, t, n, r, o) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = n, this.reject = r, this.psd = o;
      }
      function tn(e, t) {
        var n, r;
        gt.push(t), e._state === null && (n = e._lib && ze(), t = Zt(t), e._state = !1, e._value = t, r = e, je.some(function(o) {
          return o._value === r._value;
        }) || je.push(r), zn(e), n && Ve());
      }
      function zn(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) nn(e, t[n]);
        var o = e._PSD;
        --o.ref || o.finalize(), Ae === 0 && (++Ae, ot(function() {
          --Ae == 0 && rn();
        }, []));
      }
      function nn(e, t) {
        if (e._state !== null) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (n === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ae, ot(qr, [n, e, t]);
        } else e._listeners.push(t);
      }
      function qr(e, t, n) {
        try {
          var r, o = t._value;
          !t._state && gt.length && (gt = []), r = se && t._consoleTask ? t._consoleTask.run(function() {
            return e(o);
          }) : e(o), t._state || gt.indexOf(o) !== -1 || function(i) {
            for (var a = je.length; a; ) if (je[--a]._value === i._value) return je.splice(a, 1);
          }(t), n.resolve(r);
        } catch (i) {
          n.reject(i);
        } finally {
          --Ae == 0 && rn(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Br() {
        De(me, function() {
          ze() && Ve();
        });
      }
      function ze() {
        var e = Jt;
        return bt = Jt = !1, e;
      }
      function Ve() {
        var e, t, n;
        do
          for (; 0 < it.length; ) for (e = it, it = [], n = e.length, t = 0; t < n; ++t) {
            var r = e[t];
            r[0].apply(null, r[1]);
          }
        while (0 < it.length);
        bt = Jt = !0;
      }
      function rn() {
        var e = je;
        je = [], e.forEach(function(r) {
          r._PSD.onunhandled.call(null, r._value, r);
        });
        for (var t = wt.slice(0), n = t.length; n; ) t[--n]();
      }
      function _t(e) {
        return new S(nt, !1, e);
      }
      function Y(e, t) {
        var n = j;
        return function() {
          var r = ze(), o = j;
          try {
            return we(n, !0), e.apply(this, arguments);
          } catch (i) {
            t && t(i);
          } finally {
            we(o, !1), r && Ve();
          }
        };
      }
      Ne(S.prototype, { then: en, _then: function(e, t) {
        nn(this, new Un(null, null, e, t, j));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, n = arguments[1];
        return typeof t == "function" ? this.then(null, function(r) {
          return (r instanceof t ? n : _t)(r);
        }) : this.then(null, function(r) {
          return (r && r.name === t ? n : _t)(r);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return S.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return S.resolve(e()).then(function() {
            return _t(t);
          });
        });
      }, timeout: function(e, t) {
        var n = this;
        return e < 1 / 0 ? new S(function(r, o) {
          var i = setTimeout(function() {
            return o(new A.Timeout(t));
          }, e);
          n.then(r, o).finally(clearTimeout.bind(null, i));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ve(S.prototype, Symbol.toStringTag, "Dexie.Promise"), me.env = Vn(), Ne(S, { all: function() {
        var e = he.apply(null, arguments).map(Pt);
        return new S(function(t, n) {
          e.length === 0 && t([]);
          var r = e.length;
          e.forEach(function(o, i) {
            return S.resolve(o).then(function(a) {
              e[i] = a, --r || t(e);
            }, n);
          });
        });
      }, resolve: function(e) {
        return e instanceof S ? e : e && typeof e.then == "function" ? new S(function(t, n) {
          e.then(t, n);
        }) : new S(nt, !0, e);
      }, reject: _t, race: function() {
        var e = he.apply(null, arguments).map(Pt);
        return new S(function(t, n) {
          e.map(function(r) {
            return S.resolve(r).then(t, n);
          });
        });
      }, PSD: { get: function() {
        return j;
      }, set: function(e) {
        return j = e;
      } }, totalEchoes: { get: function() {
        return Ot;
      } }, newPSD: be, usePSD: De, scheduler: { get: function() {
        return ot;
      }, set: function(e) {
        ot = e;
      } }, rejectionMapper: { get: function() {
        return Zt;
      }, set: function(e) {
        Zt = e;
      } }, follow: function(e, t) {
        return new S(function(n, r) {
          return be(function(o, i) {
            var a = j;
            a.unhandleds = [], a.onunhandled = i, a.finalize = Ke(function() {
              var u, c = this;
              u = function() {
                c.unhandleds.length === 0 ? o() : i(c.unhandleds[0]);
              }, wt.push(function l() {
                u(), wt.splice(wt.indexOf(l), 1);
              }), ++Ae, ot(function() {
                --Ae == 0 && rn();
              }, []);
            }, a.finalize), e();
          }, t, n, r);
        });
      } }), Ce && (Ce.allSettled && ve(S, "allSettled", function() {
        var e = he.apply(null, arguments).map(Pt);
        return new S(function(t) {
          e.length === 0 && t([]);
          var n = e.length, r = new Array(n);
          e.forEach(function(o, i) {
            return S.resolve(o).then(function(a) {
              return r[i] = { status: "fulfilled", value: a };
            }, function(a) {
              return r[i] = { status: "rejected", reason: a };
            }).then(function() {
              return --n || t(r);
            });
          });
        });
      }), Ce.any && typeof AggregateError < "u" && ve(S, "any", function() {
        var e = he.apply(null, arguments).map(Pt);
        return new S(function(t, n) {
          e.length === 0 && n(new AggregateError([]));
          var r = e.length, o = new Array(r);
          e.forEach(function(i, a) {
            return S.resolve(i).then(function(u) {
              return t(u);
            }, function(u) {
              o[a] = u, --r || n(new AggregateError(o));
            });
          });
        });
      }), Ce.withResolvers && (S.withResolvers = Ce.withResolvers));
      var G = { awaits: 0, echoes: 0, id: 0 }, Mr = 0, xt = [], kt = 0, Ot = 0, Nr = 0;
      function be(e, t, n, r) {
        var o = j, i = Object.create(o);
        return i.parent = o, i.ref = 0, i.global = !1, i.id = ++Nr, me.env, i.env = Xt ? { Promise: S, PromiseProp: { value: S, configurable: !0, writable: !0 }, all: S.all, race: S.race, allSettled: S.allSettled, any: S.any, resolve: S.resolve, reject: S.reject } : {}, t && X(i, t), ++o.ref, i.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, r = De(i, e, n, r), i.ref === 0 && i.finalize(), r;
      }
      function Ye() {
        return G.id || (G.id = ++Mr), ++G.awaits, G.echoes += Ln, G.id;
      }
      function ge() {
        return !!G.awaits && (--G.awaits == 0 && (G.id = 0), G.echoes = G.awaits * Ln, !0);
      }
      function Pt(e) {
        return G.echoes && e && e.constructor === Ce ? (Ye(), e.then(function(t) {
          return ge(), t;
        }, function(t) {
          return ge(), W(t);
        })) : e;
      }
      function Fr() {
        var e = xt[xt.length - 1];
        xt.pop(), we(e, !1);
      }
      function we(e, t) {
        var n, r = j;
        (t ? !G.echoes || kt++ && e === j : !kt || --kt && e === j) || queueMicrotask(t ? function(o) {
          ++Ot, G.echoes && --G.echoes != 0 || (G.echoes = G.awaits = G.id = 0), xt.push(j), we(o, !0);
        }.bind(null, e) : Fr), e !== j && (j = e, r === me && (me.env = Vn()), Xt && (n = me.env.Promise, t = e.env, (r.global || e.global) && (Object.defineProperty(D, "Promise", t.PromiseProp), n.all = t.all, n.race = t.race, n.resolve = t.resolve, n.reject = t.reject, t.allSettled && (n.allSettled = t.allSettled), t.any && (n.any = t.any))));
      }
      function Vn() {
        var e = D.Promise;
        return Xt ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(D, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function De(e, t, n, r, o) {
        var i = j;
        try {
          return we(e, !0), t(n, r, o);
        } finally {
          we(i, !1);
        }
      }
      function Yn(e, t, n, r) {
        return typeof e != "function" ? e : function() {
          var o = j;
          n && Ye(), we(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            we(o, !1), r && queueMicrotask(ge);
          }
        };
      }
      function on(e) {
        Promise === Ce && G.echoes === 0 ? kt === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + ue).indexOf("[native code]") === -1 && (Ye = ge = z);
      var W = S.reject, Ie = "￿", de = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Wn = "String expected.", We = [], Et = "__dbnames", an = "readonly", un = "readwrite";
      function Te(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Qn = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Kt(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Pe(t))[e], t;
        };
      }
      function Gn() {
        throw A.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function F(e, t) {
        try {
          var n = Hn(e), r = Hn(t);
          if (n !== r) return n === "Array" ? 1 : r === "Array" ? -1 : n === "binary" ? 1 : r === "binary" ? -1 : n === "string" ? 1 : r === "string" ? -1 : n === "Date" ? 1 : r !== "Date" ? NaN : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(o, i) {
                for (var a = o.length, u = i.length, c = a < u ? a : u, l = 0; l < c; ++l) if (o[l] !== i[l]) return o[l] < i[l] ? -1 : 1;
                return a === u ? 0 : a < u ? -1 : 1;
              }(Xn(e), Xn(t));
            case "Array":
              return function(o, i) {
                for (var a = o.length, u = i.length, c = a < u ? a : u, l = 0; l < c; ++l) {
                  var p = F(o[l], i[l]);
                  if (p !== 0) return p;
                }
                return a === u ? 0 : a < u ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Hn(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Yt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Xn(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function St(e, t, n) {
        var r = e.schema.yProps;
        return r ? (t && 0 < n.numFailures && (t = t.filter(function(o, i) {
          return !n.failures[i];
        })), Promise.all(r.map(function(o) {
          return o = o.updatesTable, t ? e.db.table(o).where("k").anyOf(t).delete() : e.db.table(o).clear();
        })).then(function() {
          return n;
        })) : n;
      }
      var at = (Jn.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var n = t.add;
          if (N(n)) return M(M([], N(e) ? e : [], !0), n).sort();
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
          if (N(r)) return N(e) ? e.filter(function(o) {
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
        return n = (n = t.replacePrefix) === null || n === void 0 ? void 0 : n[0], n && typeof e == "string" && e.startsWith(n) ? t.replacePrefix[1] + e.substring(n.length) : e;
      }, Jn);
      function Jn(e) {
        this["@@propmod"] = e;
      }
      function Zn(e, t) {
        for (var n = U(t), r = n.length, o = !1, i = 0; i < r; ++i) {
          var a = n[i], u = t[a], c = fe(e, a);
          u instanceof at ? (re(e, a, u.execute(c)), o = !0) : c !== u && (re(e, a, u), o = !0);
        }
        return o;
      }
      var er = (V.prototype._trans = function(e, t, n) {
        var r = this._tx || j.trans, o = this.name, i = se && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function a(l, p, s) {
          if (!s.schema[o]) throw new A.NotFound("Table " + o + " not part of transaction");
          return t(s.idbtrans, s);
        }
        var u = ze();
        try {
          var c = r && r.db._novip === this.db._novip ? r === j.trans ? r._promise(e, a, n) : be(function() {
            return r._promise(e, a, n);
          }, { trans: r, transless: j.transless || j }) : function l(p, s, v, f) {
            if (p.idbdb && (p._state.openComplete || j.letThrough || p._vip)) {
              var h = p._createTransaction(s, v, p._dbSchema);
              try {
                h.create(), p._state.PR1398_maxLoop = 3;
              } catch (d) {
                return d.name === Gt.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                  return l(p, s, v, f);
                })) : W(d);
              }
              return h._promise(s, function(d, y) {
                return be(function() {
                  return j.trans = h, f(d, y, h);
                });
              }).then(function(d) {
                if (s === "readwrite") try {
                  h.idbtrans.commit();
                } catch {
                }
                return s === "readonly" ? d : h._completion.then(function() {
                  return d;
                });
              });
            }
            if (p._state.openComplete) return W(new A.DatabaseClosed(p._state.dbOpenError));
            if (!p._state.isBeingOpened) {
              if (!p._state.autoOpen) return W(new A.DatabaseClosed());
              p.open().catch(z);
            }
            return p._state.dbReadyPromise.then(function() {
              return l(p, s, v, f);
            });
          }(this.db, e, [this.name], a);
          return i && (c._consoleTask = i, c = c.catch(function(l) {
            return console.trace(l), W(l);
          })), c;
        } finally {
          u && Ve();
        }
      }, V.prototype.get = function(e, t) {
        var n = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? W(new A.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(r) {
          return n.core.get({ trans: r, key: e }).then(function(o) {
            return n.hook.reading.fire(o);
          });
        }).then(t);
      }, V.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (N(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = U(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var n = this.schema.indexes.concat(this.schema.primKey).filter(function(u) {
          if (u.compound && t.every(function(l) {
            return 0 <= u.keyPath.indexOf(l);
          })) {
            for (var c = 0; c < t.length; ++c) if (t.indexOf(u.keyPath[c]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(u, c) {
          return u.keyPath.length - c.keyPath.length;
        })[0];
        if (n && this.db._maxKey !== Ie) {
          var i = n.keyPath.slice(0, t.length);
          return this.where(i).equals(i.map(function(c) {
            return e[c];
          }));
        }
        !n && se && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var r = this.schema.idxByName;
        function o(u, c) {
          return F(u, c) === 0;
        }
        var a = t.reduce(function(s, c) {
          var l = s[0], p = s[1], s = r[c], v = e[c];
          return [l || s, l || !s ? Te(p, s && s.multi ? function(f) {
            return f = fe(f, c), N(f) && f.some(function(h) {
              return o(v, h);
            });
          } : function(f) {
            return o(v, fe(f, c));
          }) : p];
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
        return new this.db.Collection(new this.db.WhereClause(this, N(e) ? "[".concat(e.join("+"), "]") : e));
      }, V.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, V.prototype.mapToClass = function(e) {
        var t, n = this.db, r = this.name;
        function o() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Gn && (function(c, l) {
          if (typeof l != "function" && l !== null) throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
          function p() {
            this.constructor = c;
          }
          I(c, l), c.prototype = l === null ? Object.create(l) : (p.prototype = l.prototype, new p());
        }(o, t = e), Object.defineProperty(o.prototype, "db", { get: function() {
          return n;
        }, enumerable: !1, configurable: !0 }), o.prototype.table = function() {
          return r;
        }, e = o);
        for (var i = /* @__PURE__ */ new Set(), a = e.prototype; a; a = ae(a)) Object.getOwnPropertyNames(a).forEach(function(c) {
          return i.add(c);
        });
        function u(c) {
          if (!c) return c;
          var l, p = Object.create(e.prototype);
          for (l in c) if (!i.has(l)) try {
            p[l] = c[l];
          } catch {
          }
          return p;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = u, this.hook("reading", u), e;
      }, V.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          X(this, e);
        });
      }, V.prototype.add = function(e, t) {
        var n = this, r = this.schema.primKey, o = r.auto, i = r.keyPath, a = e;
        return i && o && (a = Kt(i)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "add", keys: t != null ? [t] : null, values: [a] });
        }).then(function(u) {
          return u.numFailures ? S.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (i) try {
            re(e, i, u);
          } catch {
          }
          return u;
        });
      }, V.prototype.upsert = function(e, t) {
        var n = this, r = this.schema.primKey.keyPath;
        return this._trans("readwrite", function(o) {
          return n.core.get({ trans: o, key: e }).then(function(i) {
            var a = i ?? {};
            return Zn(a, t), r && re(a, r, e), n.core.mutate({ trans: o, type: "put", values: [a], keys: [e], upsert: !0, updates: { keys: [e], changeSpecs: [t] } }).then(function(u) {
              return u.numFailures ? S.reject(u.failures[0]) : !!i;
            });
          });
        });
      }, V.prototype.update = function(e, t) {
        return typeof e != "object" || N(e) ? this.where(":id").equals(e).modify(t) : (e = fe(e, this.schema.primKey.keyPath), e === void 0 ? W(new A.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, V.prototype.put = function(e, t) {
        var n = this, r = this.schema.primKey, o = r.auto, i = r.keyPath, a = e;
        return i && o && (a = Kt(i)(e)), this._trans("readwrite", function(u) {
          return n.core.mutate({ trans: u, type: "put", values: [a], keys: t != null ? [t] : null });
        }).then(function(u) {
          return u.numFailures ? S.reject(u.failures[0]) : u.lastResult;
        }).then(function(u) {
          if (i) try {
            re(e, i, u);
          } catch {
          }
          return u;
        });
      }, V.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(n) {
          return t.core.mutate({ trans: n, type: "delete", keys: [e] }).then(function(r) {
            return St(t, [e], r);
          }).then(function(r) {
            return r.numFailures ? S.reject(r.failures[0]) : void 0;
          });
        });
      }, V.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Qn }).then(function(n) {
            return St(e, null, n);
          });
        }).then(function(t) {
          return t.numFailures ? S.reject(t.failures[0]) : void 0;
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
          var l = r.schema.primKey, u = l.auto, l = l.keyPath;
          if (l && o) throw new A.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (o && o.length !== e.length) throw new A.InvalidArgument("Arguments objects and keys must have the same length");
          var c = e.length, l = l && u ? e.map(Kt(l)) : e;
          return r.core.mutate({ trans: a, type: "add", keys: o, values: l, wantResults: i }).then(function(h) {
            var s = h.numFailures, v = h.results, f = h.lastResult, h = h.failures;
            if (s === 0) return i ? v : f;
            throw new Ue("".concat(r.name, ".bulkAdd(): ").concat(s, " of ").concat(c, " operations failed"), h);
          });
        });
      }, V.prototype.bulkPut = function(e, t, n) {
        var r = this, o = Array.isArray(t) ? t : void 0, i = (n = n || (o ? void 0 : t)) ? n.allKeys : void 0;
        return this._trans("readwrite", function(a) {
          var l = r.schema.primKey, u = l.auto, l = l.keyPath;
          if (l && o) throw new A.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (o && o.length !== e.length) throw new A.InvalidArgument("Arguments objects and keys must have the same length");
          var c = e.length, l = l && u ? e.map(Kt(l)) : e;
          return r.core.mutate({ trans: a, type: "put", keys: o, values: l, wantResults: i }).then(function(h) {
            var s = h.numFailures, v = h.results, f = h.lastResult, h = h.failures;
            if (s === 0) return i ? v : f;
            throw new Ue("".concat(r.name, ".bulkPut(): ").concat(s, " of ").concat(c, " operations failed"), h);
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
            var c = [], l = [];
            e.forEach(function(s, v) {
              var f = s.key, h = s.changes, d = u[v];
              if (d) {
                for (var y = 0, m = Object.keys(h); y < m.length; y++) {
                  var b = m[y], g = h[b];
                  if (b === t.schema.primKey.keyPath) {
                    if (F(g, f) !== 0) throw new A.Constraint("Cannot update primary key in bulkUpdate()");
                  } else re(d, b, g);
                }
                i.push(v), c.push(f), l.push(d);
              }
            });
            var p = c.length;
            return n.mutate({ trans: a, type: "put", keys: c, values: l, updates: { keys: r, changeSpecs: o } }).then(function(s) {
              var v = s.numFailures, f = s.failures;
              if (v === 0) return p;
              for (var h = 0, d = Object.keys(f); h < d.length; h++) {
                var y, m = d[h], b = i[Number(m)];
                b != null && (y = f[m], delete f[m], f[b] = y);
              }
              throw new Ue("".concat(t.name, ".bulkUpdate(): ").concat(v, " of ").concat(p, " operations failed"), f);
            });
          });
        });
      }, V.prototype.bulkDelete = function(e) {
        var t = this, n = e.length;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: e }).then(function(o) {
            return St(t, e, o);
          });
        }).then(function(a) {
          var o = a.numFailures, i = a.lastResult, a = a.failures;
          if (o === 0) return i;
          throw new Ue("".concat(t.name, ".bulkDelete(): ").concat(o, " of ").concat(n, " operations failed"), a);
        });
      }, V);
      function V() {
      }
      function ut(e) {
        function t(a, u) {
          if (u) {
            for (var c = arguments.length, l = new Array(c - 1); --c; ) l[c - 1] = arguments[c];
            return n[a].subscribe.apply(null, l), e;
          }
          if (typeof a == "string") return n[a];
        }
        var n = {};
        t.addEventType = i;
        for (var r = 1, o = arguments.length; r < o; ++r) i(arguments[r]);
        return t;
        function i(a, u, c) {
          if (typeof a != "object") {
            var l;
            u = u || Rr;
            var p = { subscribers: [], fire: c = c || z, subscribe: function(s) {
              p.subscribers.indexOf(s) === -1 && (p.subscribers.push(s), p.fire = u(p.fire, s));
            }, unsubscribe: function(s) {
              p.subscribers = p.subscribers.filter(function(v) {
                return v !== s;
              }), p.fire = p.subscribers.reduce(u, c);
            } };
            return n[a] = t[a] = p;
          }
          U(l = a).forEach(function(s) {
            var v = l[s];
            if (N(v)) i(s, l[s][0], l[s][1]);
            else {
              if (v !== "asap") throw new A.InvalidArgument("Invalid event config");
              var f = i(s, tt, function() {
                for (var h = arguments.length, d = new Array(h); h--; ) d[h] = arguments[h];
                f.subscribers.forEach(function(y) {
                  Rn(function() {
                    y.apply(null, d);
                  });
                });
              });
            }
          });
        }
      }
      function st(e, t) {
        return Fe(t).from({ prototype: e }), t;
      }
      function Qe(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function sn(e, t) {
        e.filter = Te(e.filter, t);
      }
      function cn(e, t, n) {
        var r = e.replayFilter;
        e.replayFilter = r ? function() {
          return Te(r(), t());
        } : t, e.justLimit = n && !r;
      }
      function Ct(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var n = t.getIndexByKeyPath(e.index);
        if (!n) throw new A.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function tr(e, t, n) {
        var r = Ct(e, t.schema);
        return t.openCursor({ trans: n, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: r, range: e.range } });
      }
      function jt(e, t, n, r) {
        var o = e.replayFilter ? Te(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var i = {}, a = function(u, c, l) {
            var p, s;
            o && !o(c, l, function(v) {
              return c.stop(v);
            }, function(v) {
              return c.fail(v);
            }) || ((s = "" + (p = c.primaryKey)) == "[object ArrayBuffer]" && (s = "" + new Uint8Array(p)), ne(i, s) || (i[s] = !0, t(u, c, l)));
          };
          return Promise.all([e.or._iterate(a, n), nr(tr(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
        }
        return nr(tr(e, r, n), Te(e.algorithm, o), t, !e.keysOnly && e.valueMapper);
      }
      function nr(e, t, n, r) {
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
      var $r = (L.prototype._read = function(e, t) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, W.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
      }, L.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, W.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, L.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Te(t.algorithm, e);
      }, L.prototype._iterate = function(e, t) {
        return jt(this._ctx, e, t, this._ctx.table.core);
      }, L.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), n = Object.create(this._ctx);
        return e && X(n, e), t._ctx = n, t;
      }, L.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, L.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(n) {
          return jt(t, e, n, t.table.core);
        });
      }, L.prototype.count = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx, o = r.table.core;
          if (Qe(r, !0)) return o.count({ trans: n, query: { index: Ct(r, o.schema), range: r.range } }).then(function(a) {
            return Math.min(a, r.limit);
          });
          var i = 0;
          return jt(r, function() {
            return ++i, !1;
          }, n, o).then(function() {
            return i;
          });
        }).then(e);
      }, L.prototype.sortBy = function(e, t) {
        var n = e.split(".").reverse(), r = n[0], o = n.length - 1;
        function i(c, l) {
          return l ? i(c[n[l]], l - 1) : c[r];
        }
        var a = this._ctx.dir === "next" ? 1 : -1;
        function u(c, l) {
          return F(i(c, o), i(l, o)) * a;
        }
        return this.toArray(function(c) {
          return c.sort(u);
        }).then(t);
      }, L.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(n) {
          var r = t._ctx;
          if (r.dir === "next" && Qe(r, !0) && 0 < r.limit) {
            var o = r.valueMapper, i = Ct(r, r.table.core.schema);
            return r.table.core.query({ trans: n, limit: r.limit, values: !0, query: { index: i, range: r.range } }).then(function(u) {
              return u = u.result, o ? u.map(o) : u;
            });
          }
          var a = [];
          return jt(r, function(u) {
            return a.push(u);
          }, n, r.table.core).then(function() {
            return a;
          });
        }, e);
      }, L.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, Qe(t) ? cn(t, function() {
          var n = e;
          return function(r, o) {
            return n === 0 || (n === 1 ? --n : o(function() {
              r.advance(n), n = 0;
            }), !1);
          };
        }) : cn(t, function() {
          var n = e;
          return function() {
            return --n < 0;
          };
        })), this;
      }, L.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), cn(this._ctx, function() {
          var t = e;
          return function(n, r, o) {
            return --t <= 0 && r(o), 0 <= t;
          };
        }, !0), this;
      }, L.prototype.until = function(e, t) {
        return sn(this._ctx, function(n, r, o) {
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
        return sn(this._ctx, function(n) {
          return e(n.value);
        }), (t = this._ctx).isMatch = Te(t.isMatch, e), this;
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
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var n = [];
        return this.each(function(r, o) {
          n.push(o.key);
        }).then(function() {
          return n;
        }).then(e);
      }, L.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && Qe(t, !0) && 0 < t.limit) return this._read(function(r) {
          var o = Ct(t, t.table.core.schema);
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
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return sn(this._ctx, function(o) {
          var r = o.primaryKey.toString(), o = ne(t, r);
          return t[r] = !0, !o;
        }), this;
      }, L.prototype.modify = function(e) {
        var t = this, n = this._ctx;
        return this._write(function(r) {
          var o = typeof e == "function" ? e : function(d) {
            return Zn(d, e);
          }, i = n.table.core, l = i.schema.primaryKey, a = l.outbound, u = l.extractKey, c = 200, l = t.db._options.modifyChunkSize;
          l && (c = typeof l == "object" ? l[i.name] || l["*"] || 200 : l);
          function p(d, b) {
            var m = b.failures, b = b.numFailures;
            v += d - b;
            for (var g = 0, w = U(m); g < w.length; g++) {
              var k = w[g];
              s.push(m[k]);
            }
          }
          var s = [], v = 0, f = [], h = e === rr;
          return t.clone().primaryKeys().then(function(d) {
            function y(b) {
              var g = Math.min(c, d.length - b), w = d.slice(b, b + g);
              return (h ? Promise.resolve([]) : i.getMany({ trans: r, keys: w, cache: "immutable" })).then(function(k) {
                var E = [], _ = [], O = a ? [] : null, K = h ? w : [];
                if (!h) for (var P = 0; P < g; ++P) {
                  var C = k[P], R = { value: Pe(C), primKey: d[b + P] };
                  o.call(R, R.value, R) !== !1 && (R.value == null ? K.push(d[b + P]) : a || F(u(C), u(R.value)) === 0 ? (_.push(R.value), a && O.push(d[b + P])) : (K.push(d[b + P]), E.push(R.value)));
                }
                return Promise.resolve(0 < E.length && i.mutate({ trans: r, type: "add", values: E }).then(function(q) {
                  for (var B in q.failures) K.splice(parseInt(B), 1);
                  p(E.length, q);
                })).then(function() {
                  return (0 < _.length || m && typeof e == "object") && i.mutate({ trans: r, type: "put", keys: O, values: _, criteria: m, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < b }).then(function(q) {
                    return p(_.length, q);
                  });
                }).then(function() {
                  return (0 < K.length || m && h) && i.mutate({ trans: r, type: "delete", keys: K, criteria: m, isAdditionalChunk: 0 < b }).then(function(q) {
                    return St(n.table, K, q);
                  }).then(function(q) {
                    return p(K.length, q);
                  });
                }).then(function() {
                  return d.length > b + g && y(b + c);
                });
              });
            }
            var m = Qe(n) && n.limit === 1 / 0 && (typeof e != "function" || h) && { index: n.index, range: n.range };
            return y(0).then(function() {
              if (0 < s.length) throw new vt("Error modifying one or more objects", s, v, f);
              return d.length;
            });
          });
        });
      }, L.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !Qe(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(rr) : this._write(function(n) {
          var r = e.table.core.schema.primaryKey, o = t;
          return e.table.core.count({ trans: n, query: { index: r, range: o } }).then(function(i) {
            return e.table.core.mutate({ trans: n, type: "deleteRange", range: o }).then(function(c) {
              var u = c.failures, c = c.numFailures;
              if (c) throw new vt("Could not delete some values", Object.keys(u).map(function(l) {
                return u[l];
              }), i - c);
              return i - c;
            });
          });
        });
      }, L);
      function L() {
      }
      var rr = function(e, t) {
        return t.value = null;
      };
      function Lr(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Ur(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function oe(e, t, n) {
        return e = e instanceof ir ? new e.Collection(e) : e, e._ctx.error = new (n || TypeError)(t), e;
      }
      function Ge(e) {
        return new e.Collection(e, function() {
          return or("");
        }).limit(0);
      }
      function At(e, t, n, r) {
        var o, i, a, u, c, l, p, s = n.length;
        if (!n.every(function(h) {
          return typeof h == "string";
        })) return oe(e, Wn);
        function v(h) {
          o = h === "next" ? function(y) {
            return y.toUpperCase();
          } : function(y) {
            return y.toLowerCase();
          }, i = h === "next" ? function(y) {
            return y.toLowerCase();
          } : function(y) {
            return y.toUpperCase();
          }, a = h === "next" ? Lr : Ur;
          var d = n.map(function(y) {
            return { lower: i(y), upper: o(y) };
          }).sort(function(y, m) {
            return a(y.lower, m.lower);
          });
          u = d.map(function(y) {
            return y.upper;
          }), c = d.map(function(y) {
            return y.lower;
          }), p = (l = h) === "next" ? "" : r;
        }
        v("next"), e = new e.Collection(e, function() {
          return _e(u[0], c[s - 1] + r);
        }), e._ondirectionchange = function(h) {
          v(h);
        };
        var f = 0;
        return e._addAlgorithm(function(h, d, y) {
          var m = h.key;
          if (typeof m != "string") return !1;
          var b = i(m);
          if (t(b, c, f)) return !0;
          for (var g = null, w = f; w < s; ++w) {
            var k = function(E, _, O, K, P, C) {
              for (var R = Math.min(E.length, K.length), q = -1, B = 0; B < R; ++B) {
                var ie = _[B];
                if (ie !== K[B]) return P(E[B], O[B]) < 0 ? E.substr(0, B) + O[B] + O.substr(B + 1) : P(E[B], K[B]) < 0 ? E.substr(0, B) + K[B] + O.substr(B + 1) : 0 <= q ? E.substr(0, q) + _[q] + O.substr(q + 1) : null;
                P(E[B], ie) < 0 && (q = B);
              }
              return R < K.length && C === "next" ? E + O.substr(E.length) : R < E.length && C === "prev" ? E.substr(0, O.length) : q < 0 ? null : E.substr(0, q) + K[q] + O.substr(q + 1);
            }(m, b, u[w], c[w], a, l);
            k === null && g === null ? f = w + 1 : (g === null || 0 < a(g, k)) && (g = k);
          }
          return d(g !== null ? function() {
            h.continue(g + p);
          } : y), !1;
        }), e;
      }
      function _e(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function or(e) {
        return { type: 1, lower: e, upper: e };
      }
      var ir = (Object.defineProperty(H.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), H.prototype.between = function(e, t, n, r) {
        n = n !== !1, r = r === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (n || r) && (!n || !r) ? Ge(this) : new this.Collection(this, function() {
            return _e(e, t, !n, !r);
          });
        } catch {
          return oe(this, de);
        }
      }, H.prototype.equals = function(e) {
        return e == null ? oe(this, de) : new this.Collection(this, function() {
          return or(e);
        });
      }, H.prototype.above = function(e) {
        return e == null ? oe(this, de) : new this.Collection(this, function() {
          return _e(e, void 0, !0);
        });
      }, H.prototype.aboveOrEqual = function(e) {
        return e == null ? oe(this, de) : new this.Collection(this, function() {
          return _e(e, void 0, !1);
        });
      }, H.prototype.below = function(e) {
        return e == null ? oe(this, de) : new this.Collection(this, function() {
          return _e(void 0, e, !1, !0);
        });
      }, H.prototype.belowOrEqual = function(e) {
        return e == null ? oe(this, de) : new this.Collection(this, function() {
          return _e(void 0, e);
        });
      }, H.prototype.startsWith = function(e) {
        return typeof e != "string" ? oe(this, Wn) : this.between(e, e + Ie, !0, !0);
      }, H.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : At(this, function(t, n) {
          return t.indexOf(n[0]) === 0;
        }, [e], Ie);
      }, H.prototype.equalsIgnoreCase = function(e) {
        return At(this, function(t, n) {
          return t === n[0];
        }, [e], "");
      }, H.prototype.anyOfIgnoreCase = function() {
        var e = he.apply($e, arguments);
        return e.length === 0 ? Ge(this) : At(this, function(t, n) {
          return n.indexOf(t) !== -1;
        }, e, "");
      }, H.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = he.apply($e, arguments);
        return e.length === 0 ? Ge(this) : At(this, function(t, n) {
          return n.some(function(r) {
            return t.indexOf(r) === 0;
          });
        }, e, Ie);
      }, H.prototype.anyOf = function() {
        var e = this, t = he.apply($e, arguments), n = this._cmp;
        try {
          t.sort(n);
        } catch {
          return oe(this, de);
        }
        if (t.length === 0) return Ge(this);
        var r = new this.Collection(this, function() {
          return _e(t[0], t[t.length - 1]);
        });
        r._ondirectionchange = function(i) {
          n = i === "next" ? e._ascending : e._descending, t.sort(n);
        };
        var o = 0;
        return r._addAlgorithm(function(i, a, u) {
          for (var c = i.key; 0 < n(c, t[o]); ) if (++o === t.length) return a(u), !1;
          return n(c, t[o]) === 0 || (a(function() {
            i.continue(t[o]);
          }), !1);
        }), r;
      }, H.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, H.prototype.noneOf = function() {
        var e = he.apply($e, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return oe(this, de);
        }
        var t = e.reduce(function(n, r) {
          return n ? n.concat([[n[n.length - 1][1], r]]) : [[-1 / 0, r]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, H.prototype.inAnyRange = function(m, t) {
        var n = this, r = this._cmp, o = this._ascending, i = this._descending, a = this._min, u = this._max;
        if (m.length === 0) return Ge(this);
        if (!m.every(function(b) {
          return b[0] !== void 0 && b[1] !== void 0 && o(b[0], b[1]) <= 0;
        })) return oe(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", A.InvalidArgument);
        var c = !t || t.includeLowers !== !1, l = t && t.includeUppers === !0, p, s = o;
        function v(b, g) {
          return s(b[0], g[0]);
        }
        try {
          (p = m.reduce(function(b, g) {
            for (var w = 0, k = b.length; w < k; ++w) {
              var E = b[w];
              if (r(g[0], E[1]) < 0 && 0 < r(g[1], E[0])) {
                E[0] = a(E[0], g[0]), E[1] = u(E[1], g[1]);
                break;
              }
            }
            return w === k && b.push(g), b;
          }, [])).sort(v);
        } catch {
          return oe(this, de);
        }
        var f = 0, h = l ? function(b) {
          return 0 < o(b, p[f][1]);
        } : function(b) {
          return 0 <= o(b, p[f][1]);
        }, d = c ? function(b) {
          return 0 < i(b, p[f][0]);
        } : function(b) {
          return 0 <= i(b, p[f][0]);
        }, y = h, m = new this.Collection(this, function() {
          return _e(p[0][0], p[p.length - 1][1], !c, !l);
        });
        return m._ondirectionchange = function(b) {
          s = b === "next" ? (y = h, o) : (y = d, i), p.sort(v);
        }, m._addAlgorithm(function(b, g, w) {
          for (var k, E = b.key; y(E); ) if (++f === p.length) return g(w), !1;
          return !h(k = E) && !d(k) || (n._cmp(E, p[f][1]) === 0 || n._cmp(E, p[f][0]) === 0 || g(function() {
            s === o ? b.continue(p[f][0]) : b.continue(p[f][1]);
          }), !1);
        }), m;
      }, H.prototype.startsWithAnyOf = function() {
        var e = he.apply($e, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? Ge(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Ie];
        })) : oe(this, "startsWithAnyOf() only works with strings");
      }, H);
      function H() {
      }
      function ce(e) {
        return Y(function(t) {
          return ct(t), e(t.target.error), !1;
        });
      }
      function ct(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var lt = "storagemutated", ln = "x-storagemutated-1", xe = ut(null, lt), zr = (le.prototype._lock = function() {
        return Ze(!j.global), ++this._reculock, this._reculock !== 1 || j.global || (j.lockOwnerFor = this), this;
      }, le.prototype._unlock = function() {
        if (Ze(!j.global), --this._reculock == 0) for (j.global || (j.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            De(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, le.prototype._locked = function() {
        return this._reculock && j.lockOwnerFor !== this;
      }, le.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var n = this.db.idbdb, r = this.db._state.dbOpenError;
        if (Ze(!this.idbtrans), !e && !n) switch (r && r.name) {
          case "DatabaseClosedError":
            throw new A.DatabaseClosed(r);
          case "MissingAPIError":
            throw new A.MissingAPI(r.message, r);
          default:
            throw new A.OpenFailed(r);
        }
        if (!this.active) throw new A.TransactionInactive();
        return Ze(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || n).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Y(function(o) {
          ct(o), t._reject(e.error);
        }), e.onabort = Y(function(o) {
          ct(o), t.active && t._reject(new A.Abort(e.error)), t.active = !1, t.on("abort").fire(o);
        }), e.oncomplete = Y(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && xe.storagemutated.fire(e.mutatedParts);
        }), this;
      }, le.prototype._promise = function(e, t, n) {
        var r = this;
        if (e === "readwrite" && this.mode !== "readwrite") return W(new A.ReadOnly("Transaction is readonly"));
        if (!this.active) return W(new A.TransactionInactive());
        if (this._locked()) return new S(function(i, a) {
          r._blockedFuncs.push([function() {
            r._promise(e, t, n).then(i, a);
          }, j]);
        });
        if (n) return be(function() {
          var i = new S(function(a, u) {
            r._lock();
            var c = t(a, u, r);
            c && c.then && c.then(a, u);
          });
          return i.finally(function() {
            return r._unlock();
          }), i._lib = !0, i;
        });
        var o = new S(function(i, a) {
          var u = t(i, a, r);
          u && u.then && u.then(i, a);
        });
        return o._lib = !0, o;
      }, le.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, le.prototype.waitFor = function(e) {
        var t, n = this._root(), r = S.resolve(e);
        n._waitingFor ? n._waitingFor = n._waitingFor.then(function() {
          return r;
        }) : (n._waitingFor = r, n._waitingQueue = [], t = n.idbtrans.objectStore(n.storeNames[0]), function i() {
          for (++n._spinCount; n._waitingQueue.length; ) n._waitingQueue.shift()();
          n._waitingFor && (t.get(-1 / 0).onsuccess = i);
        }());
        var o = n._waitingFor;
        return new S(function(i, a) {
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
        if (ne(t, e)) return t[e];
        var n = this.schema[e];
        if (!n) throw new A.NotFound("Table " + e + " not part of transaction");
        return n = new this.db.Table(e, n, this), n.core = this.db.core.table(e), t[e] = n;
      }, le);
      function le() {
      }
      function fn(e, t, n, r, o, i, a, u) {
        return { name: e, keyPath: t, unique: n, multi: r, auto: o, compound: i, src: (n && !a ? "&" : "") + (r ? "*" : "") + (o ? "++" : "") + ar(t), type: u };
      }
      function ar(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function hn(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: (r = function(o) {
          return [o.name, o];
        }, n.reduce(function(o, i, a) {
          return a = r(i, a), a && (o[a[0]] = a[1]), o;
        }, {})) };
        var r;
      }
      var ft = function(e) {
        try {
          return e.only([[]]), ft = function() {
            return [[]];
          }, [[]];
        } catch {
          return ft = function() {
            return Ie;
          }, Ie;
        }
      };
      function dn(e) {
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
      function ur(e) {
        return [].slice.call(e);
      }
      var Vr = 0;
      function ht(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Yr(e, t, c) {
        function r(y) {
          if (y.type === 3) return null;
          if (y.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var f = y.lower, h = y.upper, d = y.lowerOpen, y = y.upperOpen;
          return f === void 0 ? h === void 0 ? null : t.upperBound(h, !!y) : h === void 0 ? t.lowerBound(f, !!d) : t.bound(f, h, !!d, !!y);
        }
        function o(v) {
          var f, h = v.name;
          return { name: h, schema: v, mutate: function(d) {
            var y = d.trans, m = d.type, b = d.keys, g = d.values, w = d.range;
            return new Promise(function(k, E) {
              k = Y(k);
              var _ = y.objectStore(h), O = _.keyPath == null, K = m === "put" || m === "add";
              if (!K && m !== "delete" && m !== "deleteRange") throw new Error("Invalid operation type: " + m);
              var P, C = (b || g || { length: 1 }).length;
              if (b && g && b.length !== g.length) throw new Error("Given keys array must have same length as given values array.");
              if (C === 0) return k({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function R(te) {
                ++ie, ct(te);
              }
              var q = [], B = [], ie = 0;
              if (m === "deleteRange") {
                if (w.type === 4) return k({ numFailures: ie, failures: B, results: [], lastResult: void 0 });
                w.type === 3 ? q.push(P = _.clear()) : q.push(P = _.delete(r(w)));
              } else {
                var O = K ? O ? [g, b] : [g, null] : [b, null], T = O[0], Z = O[1];
                if (K) for (var ee = 0; ee < C; ++ee) q.push(P = Z && Z[ee] !== void 0 ? _[m](T[ee], Z[ee]) : _[m](T[ee])), P.onerror = R;
                else for (ee = 0; ee < C; ++ee) q.push(P = _[m](T[ee])), P.onerror = R;
              }
              function Ut(te) {
                te = te.target.result, q.forEach(function(Be, An) {
                  return Be.error != null && (B[An] = Be.error);
                }), k({ numFailures: ie, failures: B, results: m === "delete" ? b : q.map(function(Be) {
                  return Be.result;
                }), lastResult: te });
              }
              P.onerror = function(te) {
                R(te), Ut(te);
              }, P.onsuccess = Ut;
            });
          }, getMany: function(d) {
            var y = d.trans, m = d.keys;
            return new Promise(function(b, g) {
              b = Y(b);
              for (var w, k = y.objectStore(h), E = m.length, _ = new Array(E), O = 0, K = 0, P = function(q) {
                q = q.target, _[q._pos] = q.result, ++K === O && b(_);
              }, C = ce(g), R = 0; R < E; ++R) m[R] != null && ((w = k.get(m[R]))._pos = R, w.onsuccess = P, w.onerror = C, ++O);
              O === 0 && b(_);
            });
          }, get: function(d) {
            var y = d.trans, m = d.key;
            return new Promise(function(b, g) {
              b = Y(b);
              var w = y.objectStore(h).get(m);
              w.onsuccess = function(k) {
                return b(k.target.result);
              }, w.onerror = ce(g);
            });
          }, query: (f = l, function(d) {
            return new Promise(function(y, m) {
              y = Y(y);
              var b, g, w, O = d.trans, k = d.values, E = d.limit, P = d.query, _ = E === 1 / 0 ? void 0 : E, K = P.index, P = P.range, O = O.objectStore(h), K = K.isPrimaryKey ? O : O.index(K.name), P = r(P);
              if (E === 0) return y({ result: [] });
              f ? ((_ = k ? K.getAll(P, _) : K.getAllKeys(P, _)).onsuccess = function(C) {
                return y({ result: C.target.result });
              }, _.onerror = ce(m)) : (b = 0, g = !k && "openKeyCursor" in K ? K.openKeyCursor(P) : K.openCursor(P), w = [], g.onsuccess = function(C) {
                var R = g.result;
                return R ? (w.push(k ? R.value : R.primaryKey), ++b === E ? y({ result: w }) : void R.continue()) : y({ result: w });
              }, g.onerror = ce(m));
            });
          }), openCursor: function(d) {
            var y = d.trans, m = d.values, b = d.query, g = d.reverse, w = d.unique;
            return new Promise(function(k, E) {
              k = Y(k);
              var K = b.index, _ = b.range, O = y.objectStore(h), O = K.isPrimaryKey ? O : O.index(K.name), K = g ? w ? "prevunique" : "prev" : w ? "nextunique" : "next", P = !m && "openKeyCursor" in O ? O.openKeyCursor(r(_), K) : O.openCursor(r(_), K);
              P.onerror = ce(E), P.onsuccess = Y(function(C) {
                var R, q, B, ie, T = P.result;
                T ? (T.___id = ++Vr, T.done = !1, R = T.continue.bind(T), q = (q = T.continuePrimaryKey) && q.bind(T), B = T.advance.bind(T), ie = function() {
                  throw new Error("Cursor not stopped");
                }, T.trans = y, T.stop = T.continue = T.continuePrimaryKey = T.advance = function() {
                  throw new Error("Cursor not started");
                }, T.fail = Y(E), T.next = function() {
                  var Z = this, ee = 1;
                  return this.start(function() {
                    return ee-- ? Z.continue() : Z.stop();
                  }).then(function() {
                    return Z;
                  });
                }, T.start = function(Z) {
                  function ee() {
                    if (P.result) try {
                      Z();
                    } catch (te) {
                      T.fail(te);
                    }
                    else T.done = !0, T.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, T.stop();
                  }
                  var Ut = new Promise(function(te, Be) {
                    te = Y(te), P.onerror = ce(Be), T.fail = Be, T.stop = function(An) {
                      T.stop = T.continue = T.continuePrimaryKey = T.advance = ie, te(An);
                    };
                  });
                  return P.onsuccess = Y(function(te) {
                    P.onsuccess = ee, ee();
                  }), T.continue = R, T.continuePrimaryKey = q, T.advance = B, ee(), Ut;
                }, k(T)) : k(null);
              }, E);
            });
          }, count: function(d) {
            var y = d.query, m = d.trans, b = y.index, g = y.range;
            return new Promise(function(w, k) {
              var E = m.objectStore(h), _ = b.isPrimaryKey ? E : E.index(b.name), E = r(g), _ = E ? _.count(E) : _.count();
              _.onsuccess = Y(function(O) {
                return w(O.target.result);
              }), _.onerror = ce(k);
            });
          } };
        }
        var i, a, u, p = (a = c, u = ur((i = e).objectStoreNames), { schema: { name: i.name, tables: u.map(function(v) {
          return a.objectStore(v);
        }).map(function(v) {
          var f = v.keyPath, y = v.autoIncrement, h = N(f), d = {}, y = { name: v.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: f == null, compound: h, keyPath: f, autoIncrement: y, unique: !0, extractKey: dn(f) }, indexes: ur(v.indexNames).map(function(m) {
            return v.index(m);
          }).map(function(w) {
            var b = w.name, g = w.unique, k = w.multiEntry, w = w.keyPath, k = { name: b, compound: N(w), keyPath: w, unique: g, multiEntry: k, extractKey: dn(w) };
            return d[ht(w)] = k;
          }), getIndexByKeyPath: function(m) {
            return d[ht(m)];
          } };
          return d[":id"] = y.primaryKey, f != null && (d[ht(f)] = y.primaryKey), y;
        }) }, hasGetAll: 0 < u.length && "getAll" in a.objectStore(u[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), c = p.schema, l = p.hasGetAll, p = c.tables.map(o), s = {};
        return p.forEach(function(v) {
          return s[v.name] = v;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(v) {
          if (!s[v]) throw new Error("Table '".concat(v, "' not found"));
          return s[v];
        }, MIN_KEY: -1 / 0, MAX_KEY: ft(t), schema: c };
      }
      function Wr(e, t, n, r) {
        var o = n.IDBKeyRange;
        return n.indexedDB, { dbcore: (r = Yr(t, o, r), e.dbcore.reduce(function(i, a) {
          return a = a.create, x(x({}, i), a(i));
        }, r)) };
      }
      function Dt(e, r) {
        var n = r.db, r = Wr(e._middlewares, n, e._deps, r);
        e.core = r.dbcore, e.tables.forEach(function(o) {
          var i = o.name;
          e.core.schema.tables.some(function(a) {
            return a.name === i;
          }) && (o.core = e.core.table(i), e[i] instanceof e.Table && (e[i].core = o.core));
        });
      }
      function It(e, t, n, r) {
        n.forEach(function(o) {
          var i = r[o];
          t.forEach(function(a) {
            var u = function c(l, p) {
              return Or(l, p) || (l = ae(l)) && c(l, p);
            }(a, o);
            (!u || "value" in u && u.value === void 0) && (a === e.Transaction.prototype || a instanceof e.Transaction ? ve(a, o, { get: function() {
              return this.table(o);
            }, set: function(c) {
              In(this, o, { value: c, writable: !0, configurable: !0, enumerable: !0 });
            } }) : a[o] = new e.Table(o, i));
          });
        });
      }
      function pn(e, t) {
        t.forEach(function(n) {
          for (var r in n) n[r] instanceof e.Table && delete n[r];
        });
      }
      function Qr(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function Gr(e, t, n, r) {
        var o = e._dbSchema;
        n.objectStoreNames.contains("$meta") && !o.$meta && (o.$meta = hn("$meta", cr("")[0], []), e._storeNames.push("$meta"));
        var i = e._createTransaction("readwrite", e._storeNames, o);
        i.create(n), i._completion.catch(r);
        var a = i._reject.bind(i), u = j.transless || j;
        be(function() {
          return j.trans = i, j.transless = u, t !== 0 ? (Dt(e, n), l = t, ((c = i).storeNames.includes("$meta") ? c.table("$meta").get("version").then(function(p) {
            return p ?? l;
          }) : S.resolve(l)).then(function(p) {
            return v = p, f = i, h = n, d = [], p = (s = e)._versions, y = s._dbSchema = Rt(0, s.idbdb, h), (p = p.filter(function(m) {
              return m._cfg.version >= v;
            })).length !== 0 ? (p.forEach(function(m) {
              d.push(function() {
                var b = y, g = m._cfg.dbschema;
                qt(s, b, h), qt(s, g, h), y = s._dbSchema = g;
                var w = yn(b, g);
                w.add.forEach(function(K) {
                  vn(h, K[0], K[1].primKey, K[1].indexes);
                }), w.change.forEach(function(K) {
                  if (K.recreate) throw new A.Upgrade("Not yet support for changing primary key");
                  var P = h.objectStore(K.name);
                  K.add.forEach(function(C) {
                    return Tt(P, C);
                  }), K.change.forEach(function(C) {
                    P.deleteIndex(C.name), Tt(P, C);
                  }), K.del.forEach(function(C) {
                    return P.deleteIndex(C);
                  });
                });
                var k = m._cfg.contentUpgrade;
                if (k && m._cfg.version > v) {
                  Dt(s, h), f._memoizedTables = {};
                  var E = qn(g);
                  w.del.forEach(function(K) {
                    E[K] = b[K];
                  }), pn(s, [s.Transaction.prototype]), It(s, [s.Transaction.prototype], U(E), E), f.schema = E;
                  var _, O = Qt(k);
                  return O && Ye(), w = S.follow(function() {
                    var K;
                    (_ = k(f)) && O && (K = ge.bind(null, null), _.then(K, K));
                  }), _ && typeof _.then == "function" ? S.resolve(_) : w.then(function() {
                    return _;
                  });
                }
              }), d.push(function(b) {
                var g, w, k = m._cfg.dbschema;
                g = k, w = b, [].slice.call(w.db.objectStoreNames).forEach(function(E) {
                  return g[E] == null && w.db.deleteObjectStore(E);
                }), pn(s, [s.Transaction.prototype]), It(s, [s.Transaction.prototype], s._storeNames, s._dbSchema), f.schema = s._dbSchema;
              }), d.push(function(b) {
                s.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(s.idbdb.version / 10) === m._cfg.version ? (s.idbdb.deleteObjectStore("$meta"), delete s._dbSchema.$meta, s._storeNames = s._storeNames.filter(function(g) {
                  return g !== "$meta";
                })) : b.objectStore("$meta").put(m._cfg.version, "version"));
              });
            }), function m() {
              return d.length ? S.resolve(d.shift()(f.idbtrans)).then(m) : S.resolve();
            }().then(function() {
              sr(y, h);
            })) : S.resolve();
            var s, v, f, h, d, y;
          }).catch(a)) : (U(o).forEach(function(p) {
            vn(n, p, o[p].primKey, o[p].indexes);
          }), Dt(e, n), void S.follow(function() {
            return e.on.populate.fire(i);
          }).catch(a));
          var c, l;
        });
      }
      function Hr(e, t) {
        sr(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var n = Rt(0, e.idbdb, t);
        qt(e, e._dbSchema, t);
        for (var r = 0, o = yn(n, e._dbSchema).change; r < o.length; r++) {
          var i = function(a) {
            if (a.change.length || a.recreate) return console.warn("Unable to patch indexes of table ".concat(a.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var u = t.objectStore(a.name);
            a.add.forEach(function(c) {
              se && console.debug("Dexie upgrade patch: Creating missing index ".concat(a.name, ".").concat(c.src)), Tt(u, c);
            });
          }(o[r]);
          if (typeof i == "object") return i.value;
        }
      }
      function yn(e, t) {
        var n, r = { del: [], add: [], change: [] };
        for (n in e) t[n] || r.del.push(n);
        for (n in t) {
          var o = e[n], i = t[n];
          if (o) {
            var a = { name: n, def: i, recreate: !1, del: [], add: [], change: [] };
            if ("" + (o.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || o.primKey.auto !== i.primKey.auto) a.recreate = !0, r.change.push(a);
            else {
              var u = o.idxByName, c = i.idxByName, l = void 0;
              for (l in u) c[l] || a.del.push(l);
              for (l in c) {
                var p = u[l], s = c[l];
                p ? p.src !== s.src && a.change.push(s) : a.add.push(s);
              }
              (0 < a.del.length || 0 < a.add.length || 0 < a.change.length) && r.change.push(a);
            }
          } else r.add.push([n, i]);
        }
        return r;
      }
      function vn(e, t, n, r) {
        var o = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach(function(i) {
          return Tt(o, i);
        }), o;
      }
      function sr(e, t) {
        U(e).forEach(function(n) {
          t.db.objectStoreNames.contains(n) || (se && console.debug("Dexie: Creating missing table", n), vn(t, n, e[n].primKey, e[n].indexes));
        });
      }
      function Tt(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Rt(e, t, n) {
        var r = {};
        return yt(t.objectStoreNames, 0).forEach(function(o) {
          for (var i = n.objectStore(o), a = fn(ar(l = i.keyPath), l || "", !0, !1, !!i.autoIncrement, l && typeof l != "string", !0), u = [], c = 0; c < i.indexNames.length; ++c) {
            var p = i.index(i.indexNames[c]), l = p.keyPath, p = fn(p.name, l, !!p.unique, !!p.multiEntry, !1, l && typeof l != "string", !1);
            u.push(p);
          }
          r[o] = hn(o, a, u);
        }), r;
      }
      function qt(e, t, n) {
        for (var r = n.db.objectStoreNames, o = 0; o < r.length; ++o) {
          var i = r[o], a = n.objectStore(i);
          e._hasGetAll = "getAll" in a;
          for (var u = 0; u < a.indexNames.length; ++u) {
            var c = a.indexNames[u], l = a.index(c).keyPath, p = typeof l == "string" ? l : "[" + yt(l).join("+") + "]";
            !t[i] || (l = t[i].idxByName[p]) && (l.name = c, delete t[i].idxByName[p], t[i].idxByName[c] = l);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && D.WorkerGlobalScope && D instanceof D.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function cr(e) {
        return e.split(",").map(function(t, n) {
          var i = t.split(":"), r = (o = i[1]) === null || o === void 0 ? void 0 : o.trim(), o = (t = i[0].trim()).replace(/([&*]|\+\+)/g, ""), i = /^\[/.test(o) ? o.match(/^\[(.*)\]$/)[1].split("+") : o;
          return fn(o, i || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), N(i), n === 0, r);
        });
      }
      var Xr = (He.prototype._createTableSchema = hn, He.prototype._parseIndexSyntax = cr, He.prototype._parseStoresSpec = function(e, t) {
        var n = this;
        U(e).forEach(function(r) {
          if (e[r] !== null) {
            var o = n._parseIndexSyntax(e[r]), i = o.shift();
            if (!i) throw new A.Schema("Invalid schema for table " + r + ": " + e[r]);
            if (i.unique = !0, i.multi) throw new A.Schema("Primary key cannot be multiEntry*");
            o.forEach(function(a) {
              if (a.auto) throw new A.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!a.keyPath) throw new A.Schema("Index must have a name and cannot be an empty string");
            }), o = n._createTableSchema(r, i, o), t[r] = o;
          }
        });
      }, He.prototype.stores = function(n) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? X(this._cfg.storesSource, n) : n;
        var n = t._versions, r = {}, o = {};
        return n.forEach(function(i) {
          X(r, i._cfg.storesSource), o = i._cfg.dbschema = {}, i._parseStoresSpec(r, o);
        }), t._dbSchema = o, pn(t, [t._allTables, t, t.Transaction.prototype]), It(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], U(o), o), t._storeNames = U(o), this;
      }, He.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = Ht(this._cfg.contentUpgrade || z, e), this;
      }, He);
      function He() {
      }
      function mn(e, t) {
        var n = e._dbNamesDB;
        return n || (n = e._dbNamesDB = new pe(Et, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), n.table("dbnames");
      }
      function bn(e) {
        return e && typeof e.databases == "function";
      }
      function gn(e) {
        return be(function() {
          return j.letThrough = !0, e();
        });
      }
      function wn(e) {
        return !("from" in e);
      }
      var J = function(e, t) {
        if (!this) {
          var n = new J();
          return e && "d" in e && X(n, e), n;
        }
        X(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function dt(e, t, n) {
        var r = F(t, n);
        if (!isNaN(r)) {
          if (0 < r) throw RangeError();
          if (wn(e)) return X(e, { from: t, to: n, d: 1 });
          var o = e.l, r = e.r;
          if (F(n, e.from) < 0) return o ? dt(o, t, n) : e.l = { from: t, to: n, d: 1, l: null, r: null }, fr(e);
          if (0 < F(t, e.to)) return r ? dt(r, t, n) : e.r = { from: t, to: n, d: 1, l: null, r: null }, fr(e);
          F(t, e.from) < 0 && (e.from = t, e.l = null, e.d = r ? r.d + 1 : 1), 0 < F(n, e.to) && (e.to = n, e.r = null, e.d = e.l ? e.l.d + 1 : 1), n = !e.r, o && !e.l && pt(e, o), r && n && pt(e, r);
        }
      }
      function pt(e, t) {
        wn(t) || function n(r, c) {
          var i = c.from, a = c.to, u = c.l, c = c.r;
          dt(r, i, a), u && n(r, u), c && n(r, c);
        }(e, t);
      }
      function lr(e, t) {
        var n = Bt(t), r = n.next();
        if (r.done) return !1;
        for (var o = r.value, i = Bt(e), a = i.next(o.from), u = a.value; !r.done && !a.done; ) {
          if (F(u.from, o.to) <= 0 && 0 <= F(u.to, o.from)) return !0;
          F(o.from, u.from) < 0 ? o = (r = n.next(u.from)).value : u = (a = i.next(o.from)).value;
        }
        return !1;
      }
      function Bt(e) {
        var t = wn(e) ? null : { s: 0, n: e };
        return { next: function(n) {
          for (var r = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, r) for (; t.n.l && F(n, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !r || F(n, t.n.to) <= 0) return { value: t.n, done: !1 };
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
      function fr(e) {
        var t, n, r = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((n = e.l) === null || n === void 0 ? void 0 : n.d) || 0), o = 1 < r ? "r" : r < -1 ? "l" : "";
        o && (t = o == "r" ? "l" : "r", n = x({}, e), r = e[o], e.from = r.from, e.to = r.to, e[o] = r[o], n[o] = r[t], (e[t] = n).d = hr(n)), e.d = hr(e);
      }
      function hr(n) {
        var t = n.r, n = n.l;
        return (t ? n ? Math.max(t.d, n.d) : t.d : n ? n.d : 0) + 1;
      }
      function Mt(e, t) {
        return U(t).forEach(function(n) {
          e[n] ? pt(e[n], t[n]) : e[n] = function r(o) {
            var i, a, u = {};
            for (i in o) ne(o, i) && (a = o[i], u[i] = !a || typeof a != "object" || Mn.has(a.constructor) ? a : r(a));
            return u;
          }(t[n]);
        }), e;
      }
      function _n(e, t) {
        return e.all || t.all || Object.keys(e).some(function(n) {
          return t[n] && lr(t[n], e[n]);
        });
      }
      Ne(J.prototype, ((ue = { add: function(e) {
        return pt(this, e), this;
      }, addKey: function(e) {
        return dt(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(n) {
          return dt(t, n, n);
        }), this;
      }, hasKey: function(e) {
        var t = Bt(this).next(e).value;
        return t && F(t.from, e) <= 0 && 0 <= F(t.to, e);
      } })[Wt] = function() {
        return Bt(this);
      }, ue));
      var Re = {}, xn = {}, kn = !1;
      function Nt(e) {
        Mt(xn, e), kn || (kn = !0, setTimeout(function() {
          kn = !1, On(xn, !(xn = {}));
        }, 0));
      }
      function On(e, t) {
        t === void 0 && (t = !1);
        var n = /* @__PURE__ */ new Set();
        if (e.all) for (var r = 0, o = Object.values(Re); r < o.length; r++) dr(a = o[r], e, n, t);
        else for (var i in e) {
          var a, u = /^idb\:\/\/(.*)\/(.*)\//.exec(i);
          u && (i = u[1], u = u[2], (a = Re["idb://".concat(i, "/").concat(u)]) && dr(a, e, n, t));
        }
        n.forEach(function(c) {
          return c();
        });
      }
      function dr(e, t, n, r) {
        for (var o = [], i = 0, a = Object.entries(e.queries.query); i < a.length; i++) {
          for (var u = a[i], c = u[0], l = [], p = 0, s = u[1]; p < s.length; p++) {
            var v = s[p];
            _n(t, v.obsSet) ? v.subscribers.forEach(function(y) {
              return n.add(y);
            }) : r && l.push(v);
          }
          r && o.push([c, l]);
        }
        if (r) for (var f = 0, h = o; f < h.length; f++) {
          var d = h[f], c = d[0], l = d[1];
          e.queries.query[c] = l;
        }
      }
      function Jr(e) {
        var t = e._state, n = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? W(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var r = t.openCanceller, o = Math.round(10 * e.verno), i = !1;
        function a() {
          if (t.openCanceller !== r) throw new A.DatabaseClosed("db.open() was cancelled");
        }
        function u() {
          return new S(function(v, f) {
            if (a(), !n) throw new A.MissingAPI();
            var h = e.name, d = t.autoSchema || !o ? n.open(h) : n.open(h, o);
            if (!d) throw new A.MissingAPI();
            d.onerror = ce(f), d.onblocked = Y(e._fireOnBlocked), d.onupgradeneeded = Y(function(y) {
              var m;
              p = d.transaction, t.autoSchema && !e._options.allowEmptyDB ? (d.onerror = ct, p.abort(), d.result.close(), (m = n.deleteDatabase(h)).onsuccess = m.onerror = Y(function() {
                f(new A.NoSuchDatabase("Database ".concat(h, " doesnt exist")));
              })) : (p.onerror = ce(f), y = y.oldVersion > Math.pow(2, 62) ? 0 : y.oldVersion, s = y < 1, e.idbdb = d.result, i && Hr(e, p), Gr(e, y / 10, p, f));
            }, f), d.onsuccess = Y(function() {
              p = null;
              var y, m, b, g, w, k = e.idbdb = d.result, E = yt(k.objectStoreNames);
              if (0 < E.length) try {
                var _ = k.transaction((g = E).length === 1 ? g[0] : g, "readonly");
                if (t.autoSchema) m = k, b = _, (y = e).verno = m.version / 10, b = y._dbSchema = Rt(0, m, b), y._storeNames = yt(m.objectStoreNames, 0), It(y, [y._allTables], U(b), b);
                else if (qt(e, e._dbSchema, _), ((w = yn(Rt(0, (w = e).idbdb, _), w._dbSchema)).add.length || w.change.some(function(O) {
                  return O.add.length || O.change.length;
                })) && !i) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), k.close(), o = k.version + 1, i = !0, v(u());
                Dt(e, _);
              } catch {
              }
              We.push(e), k.onversionchange = Y(function(O) {
                t.vcFired = !0, e.on("versionchange").fire(O);
              }), k.onclose = Y(function() {
                e.close({ disableAutoOpen: !1 });
              }), s && (w = e._deps, _ = h, k = w.indexedDB, w = w.IDBKeyRange, bn(k) || _ === Et || mn(k, w).put({ name: _ }).catch(z)), v();
            }, f);
          }).catch(function(v) {
            switch (v?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), u();
                break;
              case "VersionError":
                if (0 < o) return o = 0, u();
            }
            return S.reject(v);
          });
        }
        var c, l = t.dbReadyResolve, p = null, s = !1;
        return S.race([r, (typeof navigator > "u" ? S.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(v) {
          function f() {
            return indexedDB.databases().finally(v);
          }
          c = setInterval(f, 100), f();
        }).finally(function() {
          return clearInterval(c);
        }) : Promise.resolve()).then(u)]).then(function() {
          return a(), t.onReadyBeingFired = [], S.resolve(gn(function() {
            return e.on.ready.fire(e.vip);
          })).then(function v() {
            if (0 < t.onReadyBeingFired.length) {
              var f = t.onReadyBeingFired.reduce(Ht, z);
              return t.onReadyBeingFired = [], S.resolve(gn(function() {
                return f(e.vip);
              })).then(v);
            }
          });
        }).finally(function() {
          t.openCanceller === r && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(v) {
          t.dbOpenError = v;
          try {
            p && p.abort();
          } catch {
          }
          return r === t.openCanceller && e._close(), W(v);
        }).finally(function() {
          t.openComplete = !0, l();
        }).then(function() {
          var v;
          return s && (v = {}, e.tables.forEach(function(f) {
            f.schema.indexes.forEach(function(h) {
              h.name && (v["idb://".concat(e.name, "/").concat(f.name, "/").concat(h.name)] = new J(-1 / 0, [[[]]]));
            }), v["idb://".concat(e.name, "/").concat(f.name, "/")] = v["idb://".concat(e.name, "/").concat(f.name, "/:dels")] = new J(-1 / 0, [[[]]]);
          }), xe(lt).fire(v), On(v, !0)), e;
        });
      }
      function Pn(e) {
        function t(i) {
          return e.next(i);
        }
        var n = o(t), r = o(function(i) {
          return e.throw(i);
        });
        function o(i) {
          return function(c) {
            var u = i(c), c = u.value;
            return u.done ? c : c && typeof c.then == "function" ? c.then(n, r) : N(c) ? Promise.all(c).then(n, r) : n(c);
          };
        }
        return o(t)();
      }
      function Ft(e, t, n) {
        for (var r = N(e) ? e.slice() : [e], o = 0; o < n; ++o) r.push(t);
        return r;
      }
      var Zr = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return x(x({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema, o = {}, i = [];
          function a(s, v, f) {
            var h = ht(s), d = o[h] = o[h] || [], y = s == null ? 0 : typeof s == "string" ? 1 : s.length, m = 0 < v, m = x(x({}, f), { name: m ? "".concat(h, "(virtual-from:").concat(f.name, ")") : f.name, lowLevelIndex: f, isVirtual: m, keyTail: v, keyLength: y, extractKey: dn(s), unique: !m && f.unique });
            return d.push(m), m.isPrimaryKey || i.push(m), 1 < y && a(y === 2 ? s[0] : s.slice(0, y - 1), v + 1, f), d.sort(function(b, g) {
              return b.keyTail - g.keyTail;
            }), m;
          }
          t = a(r.primaryKey.keyPath, 0, r.primaryKey), o[":id"] = [t];
          for (var u = 0, c = r.indexes; u < c.length; u++) {
            var l = c[u];
            a(l.keyPath, 0, l);
          }
          function p(s) {
            var v, f = s.query.index;
            return f.isVirtual ? x(x({}, s), { query: { index: f.lowLevelIndex, range: (v = s.query.range, f = f.keyTail, { type: v.type === 1 ? 2 : v.type, lower: Ft(v.lower, v.lowerOpen ? e.MAX_KEY : e.MIN_KEY, f), lowerOpen: !0, upper: Ft(v.upper, v.upperOpen ? e.MIN_KEY : e.MAX_KEY, f), upperOpen: !0 }) } }) : s;
          }
          return x(x({}, n), { schema: x(x({}, r), { primaryKey: t, indexes: i, getIndexByKeyPath: function(s) {
            return (s = o[ht(s)]) && s[0];
          } }), count: function(s) {
            return n.count(p(s));
          }, query: function(s) {
            return n.query(p(s));
          }, openCursor: function(s) {
            var v = s.query.index, f = v.keyTail, h = v.isVirtual, d = v.keyLength;
            return h ? n.openCursor(p(s)).then(function(m) {
              return m && y(m);
            }) : n.openCursor(s);
            function y(m) {
              return Object.create(m, { continue: { value: function(b) {
                b != null ? m.continue(Ft(b, s.reverse ? e.MAX_KEY : e.MIN_KEY, f)) : s.unique ? m.continue(m.key.slice(0, d).concat(s.reverse ? e.MIN_KEY : e.MAX_KEY, f)) : m.continue();
              } }, continuePrimaryKey: { value: function(b, g) {
                m.continuePrimaryKey(Ft(b, e.MAX_KEY, f), g);
              } }, primaryKey: { get: function() {
                return m.primaryKey;
              } }, key: { get: function() {
                var b = m.key;
                return d === 1 ? b[0] : b.slice(0, d);
              } }, value: { get: function() {
                return m.value;
              } } });
            }
          } });
        } });
      } };
      function En(e, t, n, r) {
        return n = n || {}, r = r || "", U(e).forEach(function(o) {
          var i, a, u;
          ne(t, o) ? (i = e[o], a = t[o], typeof i == "object" && typeof a == "object" && i && a ? (u = Yt(i)) !== Yt(a) ? n[r + o] = t[o] : u === "Object" ? En(i, a, n, r + o + ".") : i !== a && (n[r + o] = t[o]) : i !== a && (n[r + o] = t[o])) : n[r + o] = void 0;
        }), U(t).forEach(function(o) {
          ne(e, o) || (n[r + o] = t[o]);
        }), n;
      }
      function Kn(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var eo = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return x(x({}, e), { table: function(t) {
          var n = e.table(t), r = n.schema.primaryKey;
          return x(x({}, n), { mutate: function(o) {
            var i = j.trans, a = i.table(t).hook, u = a.deleting, c = a.creating, l = a.updating;
            switch (o.type) {
              case "add":
                if (c.fire === z) break;
                return i._promise("readwrite", function() {
                  return p(o);
                }, !0);
              case "put":
                if (c.fire === z && l.fire === z) break;
                return i._promise("readwrite", function() {
                  return p(o);
                }, !0);
              case "delete":
                if (u.fire === z) break;
                return i._promise("readwrite", function() {
                  return p(o);
                }, !0);
              case "deleteRange":
                if (u.fire === z) break;
                return i._promise("readwrite", function() {
                  return function s(v, f, h) {
                    return n.query({ trans: v, values: !1, query: { index: r, range: f }, limit: h }).then(function(d) {
                      var y = d.result;
                      return p({ type: "delete", keys: y, trans: v }).then(function(m) {
                        return 0 < m.numFailures ? Promise.reject(m.failures[0]) : y.length < h ? { failures: [], numFailures: 0, lastResult: void 0 } : s(v, x(x({}, f), { lower: y[y.length - 1], lowerOpen: !0 }), h);
                      });
                    });
                  }(o.trans, o.range, 1e4);
                }, !0);
            }
            return n.mutate(o);
            function p(s) {
              var v, f, h, d = j.trans, y = s.keys || Kn(r, s);
              if (!y) throw new Error("Keys missing");
              return (s = s.type === "add" || s.type === "put" ? x(x({}, s), { keys: y }) : x({}, s)).type !== "delete" && (s.values = M([], s.values)), s.keys && (s.keys = M([], s.keys)), v = n, h = y, ((f = s).type === "add" ? Promise.resolve([]) : v.getMany({ trans: f.trans, keys: h, cache: "immutable" })).then(function(m) {
                var b = y.map(function(g, w) {
                  var k, E, _, O = m[w], K = { onerror: null, onsuccess: null };
                  return s.type === "delete" ? u.fire.call(K, g, O, d) : s.type === "add" || O === void 0 ? (k = c.fire.call(K, g, s.values[w], d), g == null && k != null && (s.keys[w] = g = k, r.outbound || re(s.values[w], r.keyPath, g))) : (k = En(O, s.values[w]), (E = l.fire.call(K, k, g, O, d)) && (_ = s.values[w], Object.keys(E).forEach(function(P) {
                    ne(_, P) ? _[P] = E[P] : re(_, P, E[P]);
                  }))), K;
                });
                return n.mutate(s).then(function(g) {
                  for (var w = g.failures, k = g.results, E = g.numFailures, g = g.lastResult, _ = 0; _ < y.length; ++_) {
                    var O = (k || y)[_], K = b[_];
                    O == null ? K.onerror && K.onerror(w[_]) : K.onsuccess && K.onsuccess(s.type === "put" && m[_] ? s.values[_] : O);
                  }
                  return { failures: w, results: k, numFailures: E, lastResult: g };
                }).catch(function(g) {
                  return b.forEach(function(w) {
                    return w.onerror && w.onerror(g);
                  }), Promise.reject(g);
                });
              });
            }
          } });
        } });
      } };
      function pr(e, t, n) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var r = [], o = 0, i = 0; o < t.keys.length && i < e.length; ++o) F(t.keys[o], e[i]) === 0 && (r.push(n ? Pe(t.values[o]) : t.values[o]), ++i);
          return r.length === e.length ? r : null;
        } catch {
          return null;
        }
      }
      var to = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var n = e.table(t);
          return x(x({}, n), { getMany: function(r) {
            if (!r.cache) return n.getMany(r);
            var o = pr(r.keys, r.trans._cache, r.cache === "clone");
            return o ? S.resolve(o) : n.getMany(r).then(function(i) {
              return r.trans._cache = { keys: r.keys, values: r.cache === "clone" ? Pe(i) : i }, i;
            });
          }, mutate: function(r) {
            return r.type !== "add" && (r.trans._cache = null), n.mutate(r);
          } });
        } };
      } };
      function yr(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function vr(e, t) {
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
      var no = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, n = new J(e.MIN_KEY, e.MAX_KEY);
        return x(x({}, e), { transaction: function(r, o, i) {
          if (j.subscr && o !== "readonly") throw new A.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(j.querier));
          return e.transaction(r, o, i);
        }, table: function(r) {
          var o = e.table(r), i = o.schema, a = i.primaryKey, s = i.indexes, u = a.extractKey, c = a.outbound, l = a.autoIncrement && s.filter(function(f) {
            return f.compound && f.keyPath.includes(a.keyPath);
          }), p = x(x({}, o), { mutate: function(f) {
            function h(P) {
              return P = "idb://".concat(t, "/").concat(r, "/").concat(P), g[P] || (g[P] = new J());
            }
            var d, y, m, b = f.trans, g = f.mutatedParts || (f.mutatedParts = {}), w = h(""), k = h(":dels"), E = f.type, K = f.type === "deleteRange" ? [f.range] : f.type === "delete" ? [f.keys] : f.values.length < 50 ? [Kn(a, f).filter(function(P) {
              return P;
            }), f.values] : [], _ = K[0], O = K[1], K = f.trans._cache;
            return N(_) ? (w.addKeys(_), (K = E === "delete" || _.length === O.length ? pr(_, K) : null) || k.addKeys(_), (K || O) && (d = h, y = K, m = O, i.indexes.forEach(function(P) {
              var C = d(P.name || "");
              function R(B) {
                return B != null ? P.extractKey(B) : null;
              }
              function q(B) {
                return P.multiEntry && N(B) ? B.forEach(function(ie) {
                  return C.addKey(ie);
                }) : C.addKey(B);
              }
              (y || m).forEach(function(B, Z) {
                var T = y && R(y[Z]), Z = m && R(m[Z]);
                F(T, Z) !== 0 && (T != null && q(T), Z != null && q(Z));
              });
            }))) : _ ? (O = { from: (O = _.lower) !== null && O !== void 0 ? O : e.MIN_KEY, to: (O = _.upper) !== null && O !== void 0 ? O : e.MAX_KEY }, k.add(O), w.add(O)) : (w.add(n), k.add(n), i.indexes.forEach(function(P) {
              return h(P.name).add(n);
            })), o.mutate(f).then(function(P) {
              return !_ || f.type !== "add" && f.type !== "put" || (w.addKeys(P.results), l && l.forEach(function(C) {
                for (var R = f.values.map(function(T) {
                  return C.extractKey(T);
                }), q = C.keyPath.findIndex(function(T) {
                  return T === a.keyPath;
                }), B = 0, ie = P.results.length; B < ie; ++B) R[B][q] = P.results[B];
                h(C.name).addKeys(R);
              })), b.mutatedParts = Mt(b.mutatedParts || {}, g), P;
            });
          } }), s = function(h) {
            var d = h.query, h = d.index, d = d.range;
            return [h, new J((h = d.lower) !== null && h !== void 0 ? h : e.MIN_KEY, (d = d.upper) !== null && d !== void 0 ? d : e.MAX_KEY)];
          }, v = { get: function(f) {
            return [a, new J(f.key)];
          }, getMany: function(f) {
            return [a, new J().addKeys(f.keys)];
          }, count: s, query: s, openCursor: s };
          return U(v).forEach(function(f) {
            p[f] = function(h) {
              var d = j.subscr, y = !!d, m = yr(j, o) && vr(f, h) ? h.obsSet = {} : d;
              if (y) {
                var b = function(O) {
                  return O = "idb://".concat(t, "/").concat(r, "/").concat(O), m[O] || (m[O] = new J());
                }, g = b(""), w = b(":dels"), d = v[f](h), y = d[0], d = d[1];
                if ((f === "query" && y.isPrimaryKey && !h.values ? w : b(y.name || "")).add(d), !y.isPrimaryKey) {
                  if (f !== "count") {
                    var k = f === "query" && c && h.values && o.query(x(x({}, h), { values: !1 }));
                    return o[f].apply(this, arguments).then(function(O) {
                      if (f === "query") {
                        if (c && h.values) return k.then(function(R) {
                          return R = R.result, g.addKeys(R), O;
                        });
                        var K = h.values ? O.result.map(u) : O.result;
                        (h.values ? g : w).addKeys(K);
                      } else if (f === "openCursor") {
                        var P = O, C = h.values;
                        return P && Object.create(P, { key: { get: function() {
                          return w.addKey(P.primaryKey), P.key;
                        } }, primaryKey: { get: function() {
                          var R = P.primaryKey;
                          return w.addKey(R), R;
                        } }, value: { get: function() {
                          return C && g.addKey(P.primaryKey), P.value;
                        } } });
                      }
                      return O;
                    });
                  }
                  w.add(n);
                }
              }
              return o[f].apply(this, arguments);
            };
          }), p;
        } });
      } };
      function mr(e, t, n) {
        if (n.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var r = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return n.numFailures === r ? null : (t = x({}, t), N(t.keys) && (t.keys = t.keys.filter(function(o, i) {
          return !(i in n.failures);
        })), "values" in t && N(t.values) && (t.values = t.values.filter(function(o, i) {
          return !(i in n.failures);
        })), t);
      }
      function Sn(e, t) {
        return n = e, ((r = t).lower === void 0 || (r.lowerOpen ? 0 < F(n, r.lower) : 0 <= F(n, r.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? F(e, t.upper) < 0 : F(e, t.upper) <= 0));
        var n, r;
      }
      function br(e, t, v, r, o, i) {
        if (!v || v.length === 0) return e;
        var a = t.query.index, u = a.multiEntry, c = t.query.range, l = r.schema.primaryKey.extractKey, p = a.extractKey, s = (a.lowLevelIndex || a).extractKey, v = v.reduce(function(f, h) {
          var d = f, y = [];
          if (h.type === "add" || h.type === "put") for (var m = new J(), b = h.values.length - 1; 0 <= b; --b) {
            var g, w = h.values[b], k = l(w);
            m.hasKey(k) || (g = p(w), (u && N(g) ? g.some(function(P) {
              return Sn(P, c);
            }) : Sn(g, c)) && (m.addKey(k), y.push(w)));
          }
          switch (h.type) {
            case "add":
              var E = new J().addKeys(t.values ? f.map(function(C) {
                return l(C);
              }) : f), d = f.concat(t.values ? y.filter(function(C) {
                return C = l(C), !E.hasKey(C) && (E.addKey(C), !0);
              }) : y.map(function(C) {
                return l(C);
              }).filter(function(C) {
                return !E.hasKey(C) && (E.addKey(C), !0);
              }));
              break;
            case "put":
              var _ = new J().addKeys(h.values.map(function(C) {
                return l(C);
              }));
              d = f.filter(function(C) {
                return !_.hasKey(t.values ? l(C) : C);
              }).concat(t.values ? y : y.map(function(C) {
                return l(C);
              }));
              break;
            case "delete":
              var O = new J().addKeys(h.keys);
              d = f.filter(function(C) {
                return !O.hasKey(t.values ? l(C) : C);
              });
              break;
            case "deleteRange":
              var K = h.range;
              d = f.filter(function(C) {
                return !Sn(l(C), K);
              });
          }
          return d;
        }, e);
        return v === e ? e : (v.sort(function(f, h) {
          return F(s(f), s(h)) || F(l(f), l(h));
        }), t.limit && t.limit < 1 / 0 && (v.length > t.limit ? v.length = t.limit : e.length === t.limit && v.length < t.limit && (o.dirty = !0)), i ? Object.freeze(v) : v);
      }
      function gr(e, t) {
        return F(e.lower, t.lower) === 0 && F(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ro(e, t) {
        return function(n, r, o, i) {
          if (n === void 0) return r !== void 0 ? -1 : 0;
          if (r === void 0) return 1;
          if ((r = F(n, r)) === 0) {
            if (o && i) return 0;
            if (o) return 1;
            if (i) return -1;
          }
          return r;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(n, r, o, i) {
          if (n === void 0) return r !== void 0 ? 1 : 0;
          if (r === void 0) return -1;
          if ((r = F(n, r)) === 0) {
            if (o && i) return 0;
            if (o) return -1;
            if (i) return 1;
          }
          return r;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function oo(e, t, n, r) {
        e.subscribers.add(n), r.addEventListener("abort", function() {
          var o, i;
          e.subscribers.delete(n), e.subscribers.size === 0 && (o = e, i = t, setTimeout(function() {
            o.subscribers.size === 0 && Ee(i, o);
          }, 3e3));
        });
      }
      var io = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return x(x({}, e), { transaction: function(n, r, o) {
          var i, a, u = e.transaction(n, r, o);
          return r === "readwrite" && (a = (i = new AbortController()).signal, o = function(c) {
            return function() {
              if (i.abort(), r === "readwrite") {
                for (var l = /* @__PURE__ */ new Set(), p = 0, s = n; p < s.length; p++) {
                  var v = s[p], f = Re["idb://".concat(t, "/").concat(v)];
                  if (f) {
                    var h = e.table(v), d = f.optimisticOps.filter(function(C) {
                      return C.trans === u;
                    });
                    if (u._explicit && c && u.mutatedParts) for (var y = 0, m = Object.values(f.queries.query); y < m.length; y++) for (var b = 0, g = (E = m[y]).slice(); b < g.length; b++) _n((_ = g[b]).obsSet, u.mutatedParts) && (Ee(E, _), _.subscribers.forEach(function(C) {
                      return l.add(C);
                    }));
                    else if (0 < d.length) {
                      f.optimisticOps = f.optimisticOps.filter(function(C) {
                        return C.trans !== u;
                      });
                      for (var w = 0, k = Object.values(f.queries.query); w < k.length; w++) for (var E, _, O, K = 0, P = (E = k[w]).slice(); K < P.length; K++) (_ = P[K]).res != null && u.mutatedParts && (c && !_.dirty ? (O = Object.isFrozen(_.res), O = br(_.res, _.req, d, h, _, O), _.dirty ? (Ee(E, _), _.subscribers.forEach(function(C) {
                        return l.add(C);
                      })) : O !== _.res && (_.res = O, _.promise = S.resolve({ result: O }))) : (_.dirty && Ee(E, _), _.subscribers.forEach(function(C) {
                        return l.add(C);
                      })));
                    }
                  }
                }
                l.forEach(function(C) {
                  return C();
                });
              }
            };
          }, u.addEventListener("abort", o(!1), { signal: a }), u.addEventListener("error", o(!1), { signal: a }), u.addEventListener("complete", o(!0), { signal: a })), u;
        }, table: function(n) {
          var r = e.table(n), o = r.schema.primaryKey;
          return x(x({}, r), { mutate: function(i) {
            var a = j.trans;
            if (o.outbound || a.db._options.cache === "disabled" || a.explicit || a.idbtrans.mode !== "readwrite") return r.mutate(i);
            var u = Re["idb://".concat(t, "/").concat(n)];
            return u ? (a = r.mutate(i), i.type !== "add" && i.type !== "put" || !(50 <= i.values.length || Kn(o, i).some(function(c) {
              return c == null;
            })) ? (u.optimisticOps.push(i), i.mutatedParts && Nt(i.mutatedParts), a.then(function(c) {
              0 < c.numFailures && (Ee(u.optimisticOps, i), (c = mr(0, i, c)) && u.optimisticOps.push(c), i.mutatedParts && Nt(i.mutatedParts));
            }), a.catch(function() {
              Ee(u.optimisticOps, i), i.mutatedParts && Nt(i.mutatedParts);
            })) : a.then(function(c) {
              var l = mr(0, x(x({}, i), { values: i.values.map(function(p, s) {
                var v;
                return c.failures[s] ? p : (p = (v = o.keyPath) !== null && v !== void 0 && v.includes(".") ? Pe(p) : x({}, p), re(p, o.keyPath, c.results[s]), p);
              }) }), c);
              u.optimisticOps.push(l), queueMicrotask(function() {
                return i.mutatedParts && Nt(i.mutatedParts);
              });
            }), a) : r.mutate(i);
          }, query: function(i) {
            if (!yr(j, r) || !vr("query", i)) return r.query(i);
            var a = ((l = j.trans) === null || l === void 0 ? void 0 : l.db._options.cache) === "immutable", s = j, u = s.requery, c = s.signal, l = function(h, d, y, m) {
              var b = Re["idb://".concat(h, "/").concat(d)];
              if (!b) return [];
              if (!(d = b.queries[y])) return [null, !1, b, null];
              var g = d[(m.query ? m.query.index.name : null) || ""];
              if (!g) return [null, !1, b, null];
              switch (y) {
                case "query":
                  var w = g.find(function(k) {
                    return k.req.limit === m.limit && k.req.values === m.values && gr(k.req.query.range, m.query.range);
                  });
                  return w ? [w, !0, b, g] : [g.find(function(k) {
                    return ("limit" in k.req ? k.req.limit : 1 / 0) >= m.limit && (!m.values || k.req.values) && ro(k.req.query.range, m.query.range);
                  }), !1, b, g];
                case "count":
                  return w = g.find(function(k) {
                    return gr(k.req.query.range, m.query.range);
                  }), [w, !!w, b, g];
              }
            }(t, n, "query", i), p = l[0], s = l[1], v = l[2], f = l[3];
            return p && s ? p.obsSet = i.obsSet : (s = r.query(i).then(function(h) {
              var d = h.result;
              if (p && (p.res = d), a) {
                for (var y = 0, m = d.length; y < m; ++y) Object.freeze(d[y]);
                Object.freeze(d);
              } else h.result = Pe(d);
              return h;
            }).catch(function(h) {
              return f && p && Ee(f, p), Promise.reject(h);
            }), p = { obsSet: i.obsSet, promise: s, subscribers: /* @__PURE__ */ new Set(), type: "query", req: i, dirty: !1 }, f ? f.push(p) : (f = [p], (v = v || (Re["idb://".concat(t, "/").concat(n)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[i.query.index.name || ""] = f)), oo(p, f, u, c), p.promise.then(function(h) {
              return { result: br(h.result, i, v?.optimisticOps, r, p, a) };
            });
          } });
        } });
      } };
      function $t(e, t) {
        return new Proxy(e, { get: function(n, r, o) {
          return r === "db" ? t : Reflect.get(n, r, o);
        } });
      }
      var pe = (Q.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new A.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new A.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, n = t.filter(function(r) {
          return r._cfg.version === e;
        })[0];
        return n || (n = new this.Version(e), t.push(n), t.sort(Qr), n.stores({}), this._state.autoSchema = !1, n);
      }, Q.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || j.letThrough || this._vip) ? e() : new S(function(n, r) {
          if (t._state.openComplete) return r(new A.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void r(new A.DatabaseClosed());
            t.open().catch(z);
          }
          t._state.dbReadyPromise.then(n, r);
        }).then(e);
      }, Q.prototype.use = function(e) {
        var t = e.stack, n = e.create, r = e.level, o = e.name;
        return o && this.unuse({ stack: t, name: o }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: n, level: r ?? 10, name: o }), e.sort(function(i, a) {
          return i.level - a.level;
        }), this;
      }, Q.prototype.unuse = function(e) {
        var t = e.stack, n = e.name, r = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(o) {
          return r ? o.create !== r : !!n && o.name !== n;
        })), this;
      }, Q.prototype.open = function() {
        var e = this;
        return De(me, function() {
          return Jr(e);
        });
      }, Q.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = We.indexOf(this);
        if (0 <= t && We.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new S(function(n) {
          e.dbReadyResolve = n;
        }), e.openCanceller = new S(function(n, r) {
          e.cancelOpen = r;
        }));
      }, Q.prototype.close = function(n) {
        var t = (n === void 0 ? { disableAutoOpen: !0 } : n).disableAutoOpen, n = this._state;
        t ? (n.isBeingOpened && n.cancelOpen(new A.DatabaseClosed()), this._close(), n.autoOpen = !1, n.dbOpenError = new A.DatabaseClosed()) : (this._close(), n.autoOpen = this._options.autoOpen || n.isBeingOpened, n.openComplete = !1, n.dbOpenError = null);
      }, Q.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var n = 0 < arguments.length && typeof arguments[0] != "object", r = this._state;
        return new S(function(o, i) {
          function a() {
            t.close(e);
            var u = t._deps.indexedDB.deleteDatabase(t.name);
            u.onsuccess = Y(function() {
              var c, l, p;
              c = t._deps, l = t.name, p = c.indexedDB, c = c.IDBKeyRange, bn(p) || l === Et || mn(p, c).delete(l).catch(z), o();
            }), u.onerror = ce(i), u.onblocked = t._fireOnBlocked;
          }
          if (n) throw new A.InvalidArgument("Invalid closeOptions argument to db.delete()");
          r.isBeingOpened ? r.dbReadyPromise.then(a) : a();
        });
      }, Q.prototype.backendDB = function() {
        return this.idbdb;
      }, Q.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Q.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Q.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Q.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Q.prototype, "tables", { get: function() {
        var e = this;
        return U(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Q.prototype.transaction = function() {
        var e = function(t, n, r) {
          var o = arguments.length;
          if (o < 2) throw new A.InvalidArgument("Too few arguments");
          for (var i = new Array(o - 1); --o; ) i[o - 1] = arguments[o];
          return r = i.pop(), [t, Bn(i), r];
        }.apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Q.prototype._transaction = function(e, t, n) {
        var r = this, o = j.trans;
        o && o.db === this && e.indexOf("!") === -1 || (o = null);
        var i, a, u = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (a = t.map(function(l) {
            if (l = l instanceof r.Table ? l.name : l, typeof l != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return l;
          }), e == "r" || e === an) i = an;
          else {
            if (e != "rw" && e != un) throw new A.InvalidArgument("Invalid transaction mode: " + e);
            i = un;
          }
          if (o) {
            if (o.mode === an && i === un) {
              if (!u) throw new A.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              o = null;
            }
            o && a.forEach(function(l) {
              if (o && o.storeNames.indexOf(l) === -1) {
                if (!u) throw new A.SubTransaction("Table " + l + " not included in parent transaction.");
                o = null;
              }
            }), u && o && !o.active && (o = null);
          }
        } catch (l) {
          return o ? o._promise(null, function(p, s) {
            s(l);
          }) : W(l);
        }
        var c = function l(p, s, v, f, h) {
          return S.resolve().then(function() {
            var d = j.transless || j, y = p._createTransaction(s, v, p._dbSchema, f);
            if (y.explicit = !0, d = { trans: y, transless: d }, f) y.idbtrans = f.idbtrans;
            else try {
              y.create(), y.idbtrans._explicit = !0, p._state.PR1398_maxLoop = 3;
            } catch (g) {
              return g.name === Gt.InvalidState && p.isOpen() && 0 < --p._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), p.close({ disableAutoOpen: !1 }), p.open().then(function() {
                return l(p, s, v, null, h);
              })) : W(g);
            }
            var m, b = Qt(h);
            return b && Ye(), d = S.follow(function() {
              var g;
              (m = h.call(y, y)) && (b ? (g = ge.bind(null, null), m.then(g, g)) : typeof m.next == "function" && typeof m.throw == "function" && (m = Pn(m)));
            }, d), (m && typeof m.then == "function" ? S.resolve(m).then(function(g) {
              return y.active ? g : W(new A.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : d.then(function() {
              return m;
            })).then(function(g) {
              return f && y._resolve(), y._completion.then(function() {
                return g;
              });
            }).catch(function(g) {
              return y._reject(g), W(g);
            });
          });
        }.bind(null, this, i, a, o, n);
        return o ? o._promise(i, c, "lock") : j.trans ? De(j.transless, function() {
          return r._whenReady(c);
        }) : this._whenReady(c);
      }, Q.prototype.table = function(e) {
        if (!ne(this._allTables, e)) throw new A.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Q);
      function Q(e, t) {
        var n = this;
        this._middlewares = {}, this.verno = 0;
        var r = Q.dependencies;
        this._options = t = x({ addons: Q.addons, autoOpen: !0, indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, r = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var o, i, a, u, c, l = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: z, dbReadyPromise: null, cancelOpen: z, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        l.dbReadyPromise = new S(function(s) {
          l.dbReadyResolve = s;
        }), l.openCanceller = new S(function(s, v) {
          l.cancelOpen = v;
        }), this._state = l, this.name = e, this.on = ut(this, "populate", "blocked", "versionchange", "close", { ready: [Ht, z] }), this.once = function(s, v) {
          var f = function() {
            for (var h = [], d = 0; d < arguments.length; d++) h[d] = arguments[d];
            n.on(s).unsubscribe(f), v.apply(n, h);
          };
          return n.on(s, f);
        }, this.on.ready.subscribe = Tn(this.on.ready.subscribe, function(s) {
          return function(v, f) {
            Q.vip(function() {
              var h, d = n._state;
              d.openComplete ? (d.dbOpenError || S.resolve().then(v), f && s(v)) : d.onReadyBeingFired ? (d.onReadyBeingFired.push(v), f && s(v)) : (s(v), h = n, f || s(function y() {
                h.on.ready.unsubscribe(v), h.on.ready.unsubscribe(y);
              }));
            });
          };
        }), this.Collection = (o = this, st($r.prototype, function(m, y) {
          this.db = o;
          var f = Qn, h = null;
          if (y) try {
            f = y();
          } catch (b) {
            h = b;
          }
          var d = m._ctx, y = d.table, m = y.hook.reading.fire;
          this._ctx = { table: y, index: d.index, isPrimKey: !d.index || y.schema.primKey.keyPath && d.index === y.schema.primKey.name, range: f, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: h, or: d.or, valueMapper: m !== tt ? m : null };
        })), this.Table = (i = this, st(er.prototype, function(s, v, f) {
          this.db = i, this._tx = f, this.name = s, this.schema = v, this.hook = i._allTables[s] ? i._allTables[s].hook : ut(null, { creating: [Dr, z], reading: [Ar, tt], updating: [Tr, z], deleting: [Ir, z] });
        })), this.Transaction = (a = this, st(zr.prototype, function(s, v, f, h, d) {
          var y = this;
          s !== "readonly" && v.forEach(function(m) {
            m = (m = f[m]) === null || m === void 0 ? void 0 : m.yProps, m && (v = v.concat(m.map(function(b) {
              return b.updatesTable;
            })));
          }), this.db = a, this.mode = s, this.storeNames = v, this.schema = f, this.chromeTransactionDurability = h, this.idbtrans = null, this.on = ut(this, "complete", "error", "abort"), this.parent = d || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new S(function(m, b) {
            y._resolve = m, y._reject = b;
          }), this._completion.then(function() {
            y.active = !1, y.on.complete.fire();
          }, function(m) {
            var b = y.active;
            return y.active = !1, y.on.error.fire(m), y.parent ? y.parent._reject(m) : b && y.idbtrans && y.idbtrans.abort(), W(m);
          });
        })), this.Version = (u = this, st(Xr.prototype, function(s) {
          this.db = u, this._cfg = { version: s, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (c = this, st(ir.prototype, function(s, v, f) {
          if (this.db = c, this._ctx = { table: s, index: v === ":id" ? null : v, or: f }, this._cmp = this._ascending = F, this._descending = function(h, d) {
            return F(d, h);
          }, this._max = function(h, d) {
            return 0 < F(h, d) ? h : d;
          }, this._min = function(h, d) {
            return F(h, d) < 0 ? h : d;
          }, this._IDBKeyRange = c._deps.IDBKeyRange, !this._IDBKeyRange) throw new A.MissingAPI();
        })), this.on("versionchange", function(s) {
          0 < s.newVersion ? console.warn("Another connection wants to upgrade database '".concat(n.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(n.name, "'. Closing db now to resume the delete request.")), n.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(s) {
          !s.newVersion || s.newVersion < s.oldVersion ? console.warn("Dexie.delete('".concat(n.name, "') was blocked")) : console.warn("Upgrade '".concat(n.name, "' blocked by other connection holding version ").concat(s.oldVersion / 10));
        }), this._maxKey = ft(t.IDBKeyRange), this._createTransaction = function(s, v, f, h) {
          return new n.Transaction(s, v, f, n._options.chromeTransactionDurability, h);
        }, this._fireOnBlocked = function(s) {
          n.on("blocked").fire(s), We.filter(function(v) {
            return v.name === n.name && v !== n && !v._state.vcFired;
          }).map(function(v) {
            return v.on("versionchange").fire(s);
          });
        }, this.use(to), this.use(io), this.use(no), this.use(Zr), this.use(eo);
        var p = new Proxy(this, { get: function(s, v, f) {
          if (v === "_vip") return !0;
          if (v === "table") return function(d) {
            return $t(n.table(d), p);
          };
          var h = Reflect.get(s, v, f);
          return h instanceof er ? $t(h, p) : v === "tables" ? h.map(function(d) {
            return $t(d, p);
          }) : v === "_createTransaction" ? function() {
            return $t(h.apply(this, arguments), p);
          } : h;
        } });
        this.vip = p, r.forEach(function(s) {
          return s(n);
        });
      }
      var Lt, ue = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ao = (Cn.prototype.subscribe = function(e, t, n) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: n });
      }, Cn.prototype[ue] = function() {
        return this;
      }, Cn);
      function Cn(e) {
        this._subscribe = e;
      }
      try {
        Lt = { indexedDB: D.indexedDB || D.mozIndexedDB || D.webkitIndexedDB || D.msIndexedDB, IDBKeyRange: D.IDBKeyRange || D.webkitIDBKeyRange };
      } catch {
        Lt = { indexedDB: null, IDBKeyRange: null };
      }
      function wr(e) {
        var t, n = !1, r = new ao(function(o) {
          var i = Qt(e), a, u = !1, c = {}, l = {}, p = { get closed() {
            return u;
          }, unsubscribe: function() {
            u || (u = !0, a && a.abort(), s && xe.storagemutated.unsubscribe(f));
          } };
          o.start && o.start(p);
          var s = !1, v = function() {
            return on(h);
          }, f = function(d) {
            Mt(c, d), _n(l, c) && v();
          }, h = function() {
            var d, y, m;
            !u && Lt.indexedDB && (c = {}, d = {}, a && a.abort(), a = new AbortController(), m = function(b) {
              var g = ze();
              try {
                i && Ye();
                var w = be(e, b);
                return w = i ? w.finally(ge) : w;
              } finally {
                g && Ve();
              }
            }(y = { subscr: d, signal: a.signal, requery: v, querier: e, trans: null }), Promise.resolve(m).then(function(b) {
              n = !0, t = b, u || y.signal.aborted || (c = {}, function(g) {
                for (var w in g) if (ne(g, w)) return;
                return 1;
              }(l = d) || s || (xe(lt, f), s = !0), on(function() {
                return !u && o.next && o.next(b);
              }));
            }, function(b) {
              n = !1, ["DatabaseClosedError", "AbortError"].includes(b?.name) || u || on(function() {
                u || o.error && o.error(b);
              });
            }));
          };
          return setTimeout(v, 0), p;
        });
        return r.hasValue = function() {
          return n;
        }, r.getValue = function() {
          return t;
        }, r;
      }
      var qe = pe;
      function jn(e) {
        var t = ke;
        try {
          ke = !0, xe.storagemutated.fire(e), On(e, !0);
        } finally {
          ke = t;
        }
      }
      Ne(qe, x(x({}, mt), { delete: function(e) {
        return new qe(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new qe(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = qe.dependencies, n = t.indexedDB, t = t.IDBKeyRange, (bn(n) ? Promise.resolve(n.databases()).then(function(r) {
            return r.map(function(o) {
              return o.name;
            }).filter(function(o) {
              return o !== Et;
            });
          }) : mn(n, t).toCollection().primaryKeys()).then(e);
        } catch {
          return W(new A.MissingAPI());
        }
        var t, n;
      }, defineClass: function() {
        return function(e) {
          X(this, e);
        };
      }, ignoreTransaction: function(e) {
        return j.trans ? De(j.transless, e) : e();
      }, vip: gn, async: function(e) {
        return function() {
          try {
            var t = Pn(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : S.resolve(t);
          } catch (n) {
            return W(n);
          }
        };
      }, spawn: function(e, t, n) {
        try {
          var r = Pn(e.apply(n, t || []));
          return r && typeof r.then == "function" ? r : S.resolve(r);
        } catch (o) {
          return W(o);
        }
      }, currentTransaction: { get: function() {
        return j.trans || null;
      } }, waitFor: function(e, t) {
        return t = S.resolve(typeof e == "function" ? qe.ignoreTransaction(e) : e).timeout(t || 6e4), j.trans ? j.trans.waitFor(t) : t;
      }, Promise: S, debug: { get: function() {
        return se;
      }, set: function(e) {
        $n(e);
      } }, derive: Fe, extend: X, props: Ne, override: Tn, Events: ut, on: xe, liveQuery: wr, extendObservabilitySet: Mt, getByKeyPath: fe, setByKeyPath: re, delByKeyPath: function(e, t) {
        typeof t == "string" ? re(e, t, void 0) : "length" in t && [].map.call(t, function(n) {
          re(e, n, void 0);
        });
      }, shallowClone: qn, deepClone: Pe, getObjectDiff: En, cmp: F, asap: Rn, minKey: -1 / 0, addons: [], connections: We, errnames: Gt, dependencies: Lt, cache: Re, semVer: "4.2.1", version: "4.2.1".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, n) {
        return e + t / Math.pow(10, 2 * n);
      }) })), qe.maxKey = ft(qe.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (xe(lt, function(e) {
        ke || (e = new CustomEvent(ln, { detail: e }), ke = !0, dispatchEvent(e), ke = !1);
      }), addEventListener(ln, function(e) {
        e = e.detail, ke || jn(e);
      }));
      var Xe, ke = !1, _r = function() {
      };
      return typeof BroadcastChannel < "u" && ((_r = function() {
        (Xe = new BroadcastChannel(ln)).onmessage = function(e) {
          return e.data && jn(e.data);
        };
      })(), typeof Xe.unref == "function" && Xe.unref(), xe(lt, function(e) {
        ke || Xe.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!pe.disableBfCache && e.persisted) {
          se && console.debug("Dexie: handling persisted pagehide"), Xe?.close();
          for (var t = 0, n = We; t < n.length; t++) n[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !pe.disableBfCache && e.persisted && (se && console.debug("Dexie: handling persisted pageshow"), _r(), jn({ all: new J(-1 / 0, [[]]) }));
      })), S.rejectionMapper = function(e, t) {
        return !e || e instanceof Le || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Fn[e.name] ? e : (t = new Fn[e.name](t || e.message, e), "stack" in e && ve(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, $n(se), x(pe, Object.freeze({ __proto__: null, Dexie: pe, liveQuery: wr, Entity: Gn, cmp: F, PropModification: at, replacePrefix: function(e, t) {
        return new at({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new at({ add: e });
      }, remove: function(e) {
        return new at({ remove: e });
      }, default: pe, RangeSet: J, mergeRanges: pt, rangesOverlap: lr }), { default: pe }), pe;
    });
  }(Vt)), Vt.exports;
}
var fo = lo();
const Dn = /* @__PURE__ */ so(fo), kr = Symbol.for("Dexie"), Oe = globalThis[kr] || (globalThis[kr] = Dn);
if (Dn.semVer !== Oe.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Dn.semVer} and ${Oe.semVer}`);
const {
  liveQuery: Io,
  mergeRanges: To,
  rangesOverlap: Ro,
  RangeSet: qo,
  cmp: Bo,
  Entity: Mo,
  PropModification: No,
  replacePrefix: Fo,
  add: $o,
  remove: Lo,
  DexieYProvider: Uo
} = Oe, ho = "datapos-connector-dexie-js", po = { en: "Dexie.js" }, yo = { en: "The Dexie.js..." }, vo = null, mo = "database", bo = { default: { authMethodId: "none", maxConnectionCount: null } }, go = '<svg viewBox="123.1505 158.139 852.3977 647.961" width="100%" height="100%" preserveAspectRatio="none"><g transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 0, 949.9999999999999)" fill="#000000" stroke="none" id="object-0"><path d="M3345 7913 c-399 -35 -977 -169 -1320 -305 -485 -192 -700 -426 -772 -838 -13 -71 -17 -155 -17 -330 0 -204 3 -250 22 -348 38 -188 112 -318 250 -439 87 -77 137 -110 251 -167 275 -138 684 -272 1116 -364 474 -102 908 -129 1019 -64 47 27 83 96 98 182 8 52 12 215 13 525 l0 450 -600 96 c-660 105 -741 120 -990 184 -314 80 -528 171 -629 269 -95 90 -98 170 -10 260 153 155 531 278 1219 396 529 91 816 168 946 254 129 86 61 191 -149 232 -68 13 -333 17 -447 7z"/><path d="M4590 4565 l0 -3126 1333 4 c1184 3 1346 5 1462 20 657 86 1058 244 1413 555 659 577 1006 1597 952 2798 -21 454 -83 812 -200 1150 -172 496 -398 846 -745 1157 -303 270 -710 451 -1162 516 -293 42 -345 44 -1720 48 l-1333 4 0 -3126z m2585 2376 c261 -23 460 -58 596 -107 328 -117 615 -379 838 -767 174 -304 270 -714 290 -1244 35 -954 -152 -1676 -553 -2138 -117 -135 -210 -207 -372 -288 -168 -84 -366 -148 -549 -177 -231 -37 -357 -42 -1187 -47 l-828 -5 0 2397 0 2397 818 -5 c462 -3 873 -10 947 -16z"/><path d="M1272 5367 c-24 -28 -34 -112 -39 -332 -8 -345 24 -688 81 -870 22 -70 33 -87 83 -137 191 -186 646 -376 1233 -513 213 -50 436 -86 905 -145 220 -27 417 -52 438 -55 l37 -5 0 417 c-1 584 -14 729 -76 803 -46 53 -72 61 -278 76 -456 34 -1023 168 -1624 385 -299 108 -460 191 -605 311 -89 74 -133 92 -155 65z"/><path d="M1272 3697 c-24 -28 -34 -112 -39 -323 -10 -385 31 -768 98 -923 100 -233 823 -533 1601 -665 130 -22 643 -91 966 -129 l112 -14 0 416 c0 441 -10 631 -36 720 -35 122 -67 139 -308 157 -100 8 -253 26 -341 40 -490 80 -1185 283 -1584 464 -105 47 -280 154 -296 181 -12 18 -127 89 -145 89 -10 0 -22 -6 -28 -13z"/></g></svg>', wo = '<svg viewBox="123.1505 158.139 852.3977 647.961" width="100%" height="100%" preserveAspectRatio="none"><g transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 0, 949.9999999999999)" fill="#ffffff" stroke="none" id="object-0"><path d="M3345 7913 c-399 -35 -977 -169 -1320 -305 -485 -192 -700 -426 -772 -838 -13 -71 -17 -155 -17 -330 0 -204 3 -250 22 -348 38 -188 112 -318 250 -439 87 -77 137 -110 251 -167 275 -138 684 -272 1116 -364 474 -102 908 -129 1019 -64 47 27 83 96 98 182 8 52 12 215 13 525 l0 450 -600 96 c-660 105 -741 120 -990 184 -314 80 -528 171 -629 269 -95 90 -98 170 -10 260 153 155 531 278 1219 396 529 91 816 168 946 254 129 86 61 191 -149 232 -68 13 -333 17 -447 7z"/><path d="M4590 4565 l0 -3126 1333 4 c1184 3 1346 5 1462 20 657 86 1058 244 1413 555 659 577 1006 1597 952 2798 -21 454 -83 812 -200 1150 -172 496 -398 846 -745 1157 -303 270 -710 451 -1162 516 -293 42 -345 44 -1720 48 l-1333 4 0 -3126z m2585 2376 c261 -23 460 -58 596 -107 328 -117 615 -379 838 -767 174 -304 270 -714 290 -1244 35 -954 -152 -1676 -553 -2138 -117 -135 -210 -207 -372 -288 -168 -84 -366 -148 -549 -177 -231 -37 -357 -42 -1187 -47 l-828 -5 0 2397 0 2397 818 -5 c462 -3 873 -10 947 -16z"/><path d="M1272 5367 c-24 -28 -34 -112 -39 -332 -8 -345 24 -688 81 -870 22 -70 33 -87 83 -137 191 -186 646 -376 1233 -513 213 -50 436 -86 905 -145 220 -27 417 -52 438 -55 l37 -5 0 417 c-1 584 -14 729 -76 803 -46 53 -72 61 -278 76 -456 34 -1023 168 -1624 385 -299 108 -460 191 -605 311 -89 74 -133 92 -155 65z"/><path d="M1272 3697 c-24 -28 -34 -112 -39 -323 -10 -385 31 -768 98 -923 100 -233 823 -533 1601 -665 130 -22 643 -91 966 -129 l112 -14 0 416 c0 441 -10 631 -36 720 -35 122 -67 139 -308 157 -100 8 -253 26 -341 40 -490 80 -1185 283 -1584 464 -105 47 -280 154 -296 181 -12 18 -127 89 -145 89 -10 0 -22 -6 -28 -13z"/></g></svg>', _o = null, xo = [], ko = null, Oo = "alpha", Po = "connector", Eo = "bidirectional", Ko = "https://dexie.org/cloud/", So = "https://dexie.org/docs/", Co = "https://dexie.org/", jo = "0.2.203", Ao = {
  id: ho,
  label: po,
  description: yo,
  category: vo,
  categoryId: mo,
  implementations: bo,
  icon: go,
  iconDark: wo,
  lastUpdatedAt: _o,
  operations: xo,
  status: ko,
  statusId: Oo,
  typeId: Po,
  usageId: Eo,
  vendorAccountURL: Ko,
  vendorDocumentationURL: So,
  vendorHomeURL: Co,
  version: jo
}, Do = "0.2.216", zt = "Encountered invalid folder path", Me = "Encountered invalid object path";
class zo {
  abortController;
  config;
  connectionConfig;
  tools;
  containers;
  constructor($, I) {
    this.abortController = null, this.config = Ao, this.config.version = Do, this.connectionConfig = $, this.tools = I, this.containers = {};
  }
  // Operations - Abort operation.
  abortOperation($) {
    $.abortController && ($.abortController.abort(), $.abortController = null);
  }
  // Operations - Create object.
  async createObject($, I) {
    const x = I.path?.split("/");
    if (x.length !== 3) throw new Error(`${Me} '${I.path}'.`);
    const M = await this.establishContainer($, x[1]);
    M.close();
    const D = new Oe(M.name);
    if (D.on("blocked", () => !1), M.tables.length === 0) {
      await M.delete(), D.version(1).stores({ [x[2]]: I.structure || "" }), $.containers[x[1]] = await D.open();
      return;
    }
    const U = M.tables.reduce(
      (N, { name: X, schema: ae }) => (N[X] = [ae.primKey.src, ...ae.indexes.map((Je) => Je.src)].join(","), N),
      {}
    );
    D.version(M.verno).stores(U), D.version(M.verno + 1).stores({ [x[2]]: I.structure || "" }), $.containers[x[1]] = await D.open();
  }
  // Operations - Drop object.
  async dropObject($, I) {
    const x = I.path?.split("/");
    if (x.length !== 3) throw new Error(`${Me} '${I.path}'.`);
    const M = await this.establishContainer($, x[1]);
    M.close();
    const D = new Oe(M.name);
    if (D.on("blocked", () => !1), M.tables.length === 0) {
      await M.delete(), D.version(1).stores({}), $.containers[x[1]] = await D.open();
      return;
    }
    const U = M.tables.reduce(
      (N, { name: X, schema: ae }) => (N[X] = [ae.primKey.src, ...ae.indexes.map((Je) => Je.src)].join(","), N),
      {}
    );
    D.version(M.verno).stores(U), D.version(M.verno + 1).stores({ [x[2]]: null }), $.containers[x[1]] = await D.open();
  }
  // Operations - Find object.
  async findObject($, I) {
    return (await this.establishContainer($, I.containerName)).tables.find((M) => M.name === I.objectName) ? { folderPath: "/" } : {};
  }
  // Operations - Get record.
  async getRecord($, I) {
    const x = I.path.split("/");
    if (x.length !== 3) throw new Error(`${Me} '${I.path}'.`);
    return { record: await (await this.establishContainer($, x[1])).table(x[2]).get(I.id) };
  }
  // Operations - List nodes.
  async listNodes($, I) {
    const x = I.folderPath.split("/");
    switch (x.length) {
      case 1: {
        if (x[0]) throw new Error(`${zt} '${I.folderPath}'.`);
        const D = (await Oe.getDatabaseNames()).map(
          (U) => ({ folderPath: I.folderPath, id: U, label: U, name: U, typeId: "folder" })
        );
        return { cursor: void 0, isMore: !1, connectionNodeConfigs: D, totalCount: D.length };
      }
      case 2: {
        if (x[0]) throw new Error(`${zt} '${I.folderPath}'.`);
        const M = x[1];
        if (!M) throw new Error(`${zt} '${I.folderPath}'.`);
        const U = (await this.establishContainer($, M)).tables.map(
          (N) => ({ folderPath: I.folderPath, id: N.name, label: N.name, name: N.name, typeId: "object" })
        );
        return { cursor: void 0, isMore: !1, connectionNodeConfigs: U, totalCount: U.length };
      }
      default:
        throw new Error(`${zt} '${I.folderPath}'.`);
    }
  }
  // Operations - Preview object.
  async previewObject($, I) {
    const x = I.path.split("/");
    if (x.length !== 3) throw new Error(`${Me} '${I.path}'.`);
    return { data: await (await this.establishContainer($, x[1])).table(x[2]).limit(50).toArray(), typeId: "jsonArray" };
  }
  // Operations - Upsert records.
  async upsertRecords($, I) {
    const x = I.path.split("/");
    if (x.length !== 3) throw new Error(`${Me} '${I.path}'.`);
    const M = await this.establishContainer($, x[1]), D = I.records;
    D.length === 1 ? await M.table(x[2]).put(D[0]) : D.length > 1 && await M.table(x[2]).bulkPut(D);
  }
  // Operations - Remove records.
  async removeRecords($, I) {
    const x = I.path.split("/");
    if (x.length !== 3) throw new Error(`${Me} '${I.path}'.`);
    const M = await this.establishContainer($, x[1]), D = I.keys;
    D.length === 0 ? await M.table(x[2]).clear() : D.length === 1 ? await M.table(x[2]).delete(D[0]) : await M.table(x[2]).bulkDelete(D);
  }
  // Operations - Retrieve records.
  async retrieveRecords($, I, x, M) {
    const D = I.path.split("/");
    if (D.length !== 3) throw new Error(`${Me} '${I.path}'.`);
    const N = await (await this.establishContainer($, D[1])).table(D[2]).toArray();
    x(N);
  }
  // Utilities - Establish container.
  async establishContainer($, I) {
    if (!$.containers[I]) {
      const x = new Oe(I);
      await Oe.exists(x.name) || x.version(1).stores({}), $.containers[I] = await x.open();
    }
    return $.containers[I];
  }
}
export {
  zo as default
};
