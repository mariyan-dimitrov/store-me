module.exports = (function (e) {
  var r = {};
  function t(n) {
    if (r[n]) return r[n].exports;
    var o = (r[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
  }
  return (
    (t.m = e),
    (t.c = r),
    (t.d = function (e, r, n) {
      t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
    }),
    (t.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (t.t = function (e, r) {
      if ((1 & r && (e = t(e)), 8 & r)) return e;
      if (4 & r && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (t.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & r && "string" != typeof e)
      )
        for (var o in e)
          t.d(
            n,
            o,
            function (r) {
              return e[r];
            }.bind(null, o)
          );
      return n;
    }),
    (t.n = function (e) {
      var r =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return t.d(r, "a", r), r;
    }),
    (t.o = function (e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }),
    (t.p = ""),
    t((t.s = 1))
  );
})([
  function (e, r) {
    e.exports = require("react");
  },
  function (e, r, t) {
    "use strict";
    t.r(r),
      t.d(r, "StoreMe", function () {
        return B;
      }),
      t.d(r, "useStoreMe", function () {
        return V;
      }),
      t.d(r, "setStoreMe", function () {
        return S;
      }),
      t.d(r, "getStoreMe", function () {
        return w;
      }),
      t.d(r, "resetStoreMe", function () {
        return A;
      }),
      t.d(r, "deleteStoreMe", function () {
        return D;
      }),
      t.d(r, "storeMeSubscriber", function () {
        return j;
      }),
      t.d(r, "dangerouslyGetStoreMeMutableState", function () {
        return M;
      });
    var n = t(0);
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function u(e) {
      return e instanceof Buffer
        ? Buffer.from(e)
        : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
    }
    function i(e) {
      return (e = e || {}).circles
        ? (function (e) {
            var r = [],
              t = [];
            return e.proto
              ? function e(i) {
                  if ("object" !== o(i) || null === i) return i;
                  if (i instanceof Date) return new Date(i);
                  if (Array.isArray(i)) return n(i, e);
                  var f = {};
                  for (var c in (r.push(i), t.push(f), i)) {
                    var a = i[c];
                    if ("object" !== o(a) || null === a) f[c] = a;
                    else if (a instanceof Date) f[c] = new Date(a);
                    else if (ArrayBuffer.isView(a)) f[c] = u(a);
                    else {
                      var l = r.indexOf(a);
                      f[c] = -1 !== l ? t[l] : e(a);
                    }
                  }
                  return r.pop(), t.pop(), f;
                }
              : function e(i) {
                  if ("object" !== o(i) || null === i) return i;
                  if (i instanceof Date) return new Date(i);
                  if (Array.isArray(i)) return n(i, e);
                  var f = {};
                  for (var c in (r.push(i), t.push(f), i))
                    if (!1 !== Object.hasOwnProperty.call(i, c)) {
                      var a = i[c];
                      if ("object" !== o(a) || null === a) f[c] = a;
                      else if (a instanceof Date) f[c] = new Date(a);
                      else if (ArrayBuffer.isView(a)) f[c] = u(a);
                      else {
                        var l = r.indexOf(a);
                        f[c] = -1 !== l ? t[l] : e(a);
                      }
                    }
                  return r.pop(), t.pop(), f;
                };
            function n(e, n) {
              for (var i = Object.keys(e), f = new Array(i.length), c = 0; c < i.length; c++) {
                var a = i[c],
                  l = e[a];
                if ("object" !== o(l) || null === l) f[a] = l;
                else if (l instanceof Date) f[a] = new Date(l);
                else if (ArrayBuffer.isView(l)) f[a] = u(l);
                else {
                  var s = r.indexOf(l);
                  f[a] = -1 !== s ? t[s] : n(l);
                }
              }
              return f;
            }
          })(e)
        : e.proto
        ? function e(t) {
            if ("object" !== o(t) || null === t) return t;
            if (t instanceof Date) return new Date(t);
            if (Array.isArray(t)) return r(t, e);
            var n = {};
            for (var i in t) {
              var f = t[i];
              "object" !== o(f) || null === f
                ? (n[i] = f)
                : f instanceof Date
                ? (n[i] = new Date(f))
                : ArrayBuffer.isView(f)
                ? (n[i] = u(f))
                : (n[i] = e(f));
            }
            return n;
          }
        : function e(t) {
            if ("object" !== o(t) || null === t) return t;
            if (t instanceof Date) return new Date(t);
            if (Array.isArray(t)) return r(t, e);
            var n = {};
            for (var i in t)
              if (!1 !== Object.hasOwnProperty.call(t, i)) {
                var f = t[i];
                "object" !== o(f) || null === f
                  ? (n[i] = f)
                  : f instanceof Date
                  ? (n[i] = new Date(f))
                  : ArrayBuffer.isView(f)
                  ? (n[i] = u(f))
                  : (n[i] = e(f));
              }
            return n;
          };
      function r(e, r) {
        for (var t = Object.keys(e), n = new Array(t.length), i = 0; i < t.length; i++) {
          var f = t[i],
            c = e[f];
          "object" !== o(c) || null === c
            ? (n[f] = c)
            : c instanceof Date
            ? (n[f] = new Date(c))
            : ArrayBuffer.isView(c)
            ? (n[f] = u(c))
            : (n[f] = r(c));
        }
        return n;
      }
    }
    var f = function (e) {
      return i({ proto: !0 })(e);
    };
    function c(e) {
      return (c =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var a = function (e) {
      return e && "object" === c(e) && e.constructor === Object;
    };
    function l(e, r) {
      return (
        (function (e) {
          if (Array.isArray(e)) return e;
        })(e) ||
        (function (e, r) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
          var t = [],
            n = !0,
            o = !1,
            u = void 0;
          try {
            for (
              var i, f = e[Symbol.iterator]();
              !(n = (i = f.next()).done) && (t.push(i.value), !r || t.length !== r);
              n = !0
            );
          } catch (e) {
            (o = !0), (u = e);
          } finally {
            try {
              n || null == f.return || f.return();
            } finally {
              if (o) throw u;
            }
          }
          return t;
        })(e, r) ||
        (function (e, r) {
          if (!e) return;
          if ("string" == typeof e) return s(e, r);
          var t = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === t && e.constructor && (t = e.constructor.name);
          if ("Map" === t || "Set" === t) return Array.from(e);
          if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
            return s(e, r);
        })(e, r) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function s(e, r) {
      (null == r || r > e.length) && (r = e.length);
      for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
      return n;
    }
    function y(e, r) {
      var t = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        r &&
          (n = n.filter(function (r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable;
          })),
          t.push.apply(t, n);
      }
      return t;
    }
    function p(e) {
      for (var r = 1; r < arguments.length; r++) {
        var t = null != arguments[r] ? arguments[r] : {};
        r % 2
          ? y(Object(t), !0).forEach(function (r) {
              v(e, r, t[r]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
          : y(Object(t)).forEach(function (r) {
              Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
            });
      }
      return e;
    }
    function v(e, r, t) {
      return (
        r in e
          ? Object.defineProperty(e, r, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[r] = t),
        e
      );
    }
    var b,
      d = {},
      h = 0,
      O = null,
      g = function (e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = arguments.length > 2 ? arguments[2] : void 0;
        if (t && !_(e.firstLevel, t)) return "skip_update";
        var n = !1,
          o = {};
        return (
          e.structured.forEach(function (e) {
            var r,
              t,
              u = e.filter(function (e) {
                return !Array.isArray(e);
              }),
              i = e.length;
            e.forEach(function (e, o) {
              var u,
                f,
                c = o + 1 === i;
              if (0 === o)
                (r = null === (u = O[e]) || void 0 === u ? void 0 : u.previous),
                  (t = null === (f = O[e]) || void 0 === f ? void 0 : f.current),
                  !n && c && r !== t && (n = !0);
              else if (Array.isArray(e)) {
                var a = {},
                  l = {};
                e.forEach(function (e) {
                  var o, u;
                  (a[e] = null === (o = r) || void 0 === o ? void 0 : o[e]),
                    (l[e] = null === (u = t) || void 0 === u ? void 0 : u[e]),
                    n || a[e] === l[e] || (n = !0);
                }),
                  (t = l);
              } else {
                var s, y;
                (r = null === (s = r) || void 0 === s ? void 0 : s[e]),
                  (t = null === (y = t) || void 0 === y ? void 0 : y[e]),
                  !n && c && r !== t && (n = !0);
              }
            }),
              (o = p(p({}, o), k(u, t)));
          }),
          n || r ? o : "skip_update"
        );
      },
      j = function (e, r) {
        var t = h++;
        return (
          (d[t] = { callback: r, accessors: { structured: x(e), firstLevel: E(e) } }),
          function () {
            delete d[t];
          }
        );
      },
      m = function (e, r) {
        var t = Object.keys(d),
          n = [];
        t.forEach(function (t) {
          if (d[t]) {
            var o = d[t],
              u = o.accessors,
              i = o.callback,
              f = g(u, e, r);
            "skip_update" !== f &&
              n.push({
                id: t,
                update: function () {
                  return i(f);
                },
                accessors: u.firstLevel,
              });
          }
        }),
          (function e(r) {
            var t = r.shift();
            if (t) {
              var n = t.id,
                o = t.update,
                u = t.accessors;
              (u || Object.keys(O)).forEach(function (e) {
                O.hasOwnProperty(e) && (O[e].previous = O[e].current);
              }),
                d[n] && o(),
                r.length && e(r);
            }
          })(n);
      },
      w = function (e) {
        return Array.isArray(e) && e.length
          ? ((e = { structured: x(e), firstLevel: E(e) }), g(e, !0))
          : (console.error(
              '"getStoreMe" expects arguments of type string or number, specifying key in state.'
            ),
            {});
      },
      S = function (e) {
        if (
          ("function" == typeof e &&
            (e = e(
              (function () {
                var e = Object.keys(O),
                  r = {};
                return (
                  e.forEach(function (e) {
                    r[e] = O[e].current;
                  }),
                  f(r)
                );
              })()
            )),
          a(e))
        ) {
          var r = Object.keys(e),
            t = !1;
          r.forEach(function (r) {
            O.hasOwnProperty(r)
              ? O[r].current !== e[r] && ((t = !0), (O[r].current = window[r] ? e[r] : f(e[r])))
              : ((t = !0),
                (O[r] = {
                  default: window[r] ? e[r] : f(e[r]),
                  previous: "non-existent",
                  current: e[r],
                }));
          }),
            t && m(!1, r);
        } else console.error('"setStoreMe" expects argument of type object or function.');
      },
      A = function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        var n = !1;
        1 === (r = r || Object.keys(O)).length && "initial-store-me" === r[0]
          ? ((n = !0), (O = P(b)))
          : r.forEach(function (e) {
              O.hasOwnProperty(e) &&
                O[e].current !== O[e].default &&
                ((n = !0),
                (O[e] = {
                  default: O[e].default,
                  previous: "non-existent",
                  current: f(O[e].default),
                }));
            }),
          n && m(!1, r);
      },
      D = function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        if (r.length) {
          var n = !1;
          r.forEach(function (e) {
            O.hasOwnProperty(e) && ((n = !0), delete O[e]);
          }),
            n && m(!0, r);
        } else
          console.error(
            '"deleteStoreMe" expects arguments of type string or number, specifying key in state.'
          );
      },
      M = function () {
        return O;
      };
    function P(e) {
      var r = Object.keys(e),
        t = {};
      return (
        r.push("stopStoreMeUiUpdates"),
        r.forEach(function (r) {
          t[r] = {
            default: window[r] ? e[r] : f(e[r]),
            previous: window[r] ? e[r] : f(e[r]),
            current: e[r],
          };
        }),
        t
      );
    }
    function k(e, r) {
      return e.reverse().reduce(function (e, t) {
        var n = v({}, t, e);
        return e === r && (e = {}), n;
      }, r);
    }
    function x(e) {
      return e.map(function (e) {
        return (
          (e = String(e).split(".")).length > 1 &&
            (e = e.map(function (e) {
              return String(e).includes("[") ? String(e).replace(/\[|\]/g, "").split("|") : e;
            })),
          e
        );
      });
    }
    function E(e) {
      return e.map(function (e) {
        return String(e).split(".").shift();
      });
    }
    function _(e, r) {
      for (var t = r.length, n = !1, o = 0; o < t; o++)
        if (e.includes(r[o])) {
          n = !0;
          break;
        }
      return n;
    }
    var B = function (e) {
        var r = e.initialState,
          t = void 0 === r ? {} : r,
          n = e.children;
        return (b = t), Object.freeze(b), O || (O = P(b)), n;
      },
      V = function () {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        var o = Object(n.useRef)(r),
          u = Object(n.useState)(
            Object(n.useMemo)(function () {
              return w(o.current);
            }, [])
          ),
          i = l(u, 2),
          f = i[0],
          c = i[1];
        return (
          Object(n.useEffect)(function () {
            if (o.current.length) {
              var e = j(o.current, c);
              return function () {
                return e();
              };
            }
            console.error('"useStoreMe": At least one accessor must be specified');
          }, []),
          f
        );
      };
  },
]);