var vv = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var bb = vv((qe, Je) => {
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const s of i)
        if (s.type === "childList")
          for (const o of s.addedNodes)
            o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(i) {
      const s = {};
      return (
        i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials"
          ? (s.credentials = "include")
          : i.crossOrigin === "anonymous"
          ? (s.credentials = "omit")
          : (s.credentials = "same-origin"),
        s
      );
    }
    function r(i) {
      if (i.ep) return;
      i.ep = !0;
      const s = n(i);
      fetch(i.href, s);
    }
  })();
  function Io(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Op = { exports: {} },
    zo = {},
    Dp = { exports: {} },
    B = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var is = Symbol.for("react.element"),
    xv = Symbol.for("react.portal"),
    wv = Symbol.for("react.fragment"),
    Sv = Symbol.for("react.strict_mode"),
    Tv = Symbol.for("react.profiler"),
    Nv = Symbol.for("react.provider"),
    jv = Symbol.for("react.context"),
    Ev = Symbol.for("react.forward_ref"),
    Cv = Symbol.for("react.suspense"),
    Pv = Symbol.for("react.memo"),
    kv = Symbol.for("react.lazy"),
    Af = Symbol.iterator;
  function bv(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Af && e[Af]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Mp = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Rp = Object.assign,
    Lp = {};
  function Jr(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Lp),
      (this.updater = n || Mp);
  }
  Jr.prototype.isReactComponent = {};
  Jr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Jr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function Vp() {}
  Vp.prototype = Jr.prototype;
  function Hu(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Lp),
      (this.updater = n || Mp);
  }
  var Wu = (Hu.prototype = new Vp());
  Wu.constructor = Hu;
  Rp(Wu, Jr.prototype);
  Wu.isPureReactComponent = !0;
  var Ff = Array.isArray,
    $p = Object.prototype.hasOwnProperty,
    Gu = { current: null },
    Ip = { key: !0, ref: !0, __self: !0, __source: !0 };
  function zp(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (o = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
        $p.call(t, r) && !Ip.hasOwnProperty(r) && (i[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) i.children = n;
    else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      i.children = l;
    }
    if (e && e.defaultProps)
      for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
    return {
      $$typeof: is,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: Gu.current,
    };
  }
  function Av(e, t) {
    return {
      $$typeof: is,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Ku(e) {
    return typeof e == "object" && e !== null && e.$$typeof === is;
  }
  function Fv(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var _f = /\/+/g;
  function Ma(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Fv("" + e.key)
      : t.toString(36);
  }
  function Us(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
      switch (s) {
        case "string":
        case "number":
          o = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case is:
            case xv:
              o = !0;
          }
      }
    if (o)
      return (
        (o = e),
        (i = i(o)),
        (e = r === "" ? "." + Ma(o, 0) : r),
        Ff(i)
          ? ((n = ""),
            e != null && (n = e.replace(_f, "$&/") + "/"),
            Us(i, t, n, "", function (u) {
              return u;
            }))
          : i != null &&
            (Ku(i) &&
              (i = Av(
                i,
                n +
                  (!i.key || (o && o.key === i.key)
                    ? ""
                    : ("" + i.key).replace(_f, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Ff(e)))
      for (var a = 0; a < e.length; a++) {
        s = e[a];
        var l = r + Ma(s, a);
        o += Us(s, t, n, l, i);
      }
    else if (((l = bv(e)), typeof l == "function"))
      for (e = l.call(e), a = 0; !(s = e.next()).done; )
        (s = s.value), (l = r + Ma(s, a++)), (o += Us(s, t, n, l, i));
    else if (s === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return o;
  }
  function xs(e, t, n) {
    if (e == null) return e;
    var r = [],
      i = 0;
    return (
      Us(e, r, "", "", function (s) {
        return t.call(n, s, i++);
      }),
      r
    );
  }
  function _v(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var Ve = { current: null },
    Hs = { transition: null },
    Ov = {
      ReactCurrentDispatcher: Ve,
      ReactCurrentBatchConfig: Hs,
      ReactCurrentOwner: Gu,
    };
  B.Children = {
    map: xs,
    forEach: function (e, t, n) {
      xs(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        xs(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        xs(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Ku(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  B.Component = Jr;
  B.Fragment = wv;
  B.Profiler = Tv;
  B.PureComponent = Hu;
  B.StrictMode = Sv;
  B.Suspense = Cv;
  B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ov;
  B.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = Rp({}, e.props),
      i = e.key,
      s = e.ref,
      o = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((s = t.ref), (o = Gu.current)),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var a = e.type.defaultProps;
      for (l in t)
        $p.call(t, l) &&
          !Ip.hasOwnProperty(l) &&
          (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
      r.children = a;
    }
    return { $$typeof: is, type: e.type, key: i, ref: s, props: r, _owner: o };
  };
  B.createContext = function (e) {
    return (
      (e = {
        $$typeof: jv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Nv, _context: e }),
      (e.Consumer = e)
    );
  };
  B.createElement = zp;
  B.createFactory = function (e) {
    var t = zp.bind(null, e);
    return (t.type = e), t;
  };
  B.createRef = function () {
    return { current: null };
  };
  B.forwardRef = function (e) {
    return { $$typeof: Ev, render: e };
  };
  B.isValidElement = Ku;
  B.lazy = function (e) {
    return { $$typeof: kv, _payload: { _status: -1, _result: e }, _init: _v };
  };
  B.memo = function (e, t) {
    return { $$typeof: Pv, type: e, compare: t === void 0 ? null : t };
  };
  B.startTransition = function (e) {
    var t = Hs.transition;
    Hs.transition = {};
    try {
      e();
    } finally {
      Hs.transition = t;
    }
  };
  B.unstable_act = function () {
    throw Error("act(...) is not supported in production builds of React.");
  };
  B.useCallback = function (e, t) {
    return Ve.current.useCallback(e, t);
  };
  B.useContext = function (e) {
    return Ve.current.useContext(e);
  };
  B.useDebugValue = function () {};
  B.useDeferredValue = function (e) {
    return Ve.current.useDeferredValue(e);
  };
  B.useEffect = function (e, t) {
    return Ve.current.useEffect(e, t);
  };
  B.useId = function () {
    return Ve.current.useId();
  };
  B.useImperativeHandle = function (e, t, n) {
    return Ve.current.useImperativeHandle(e, t, n);
  };
  B.useInsertionEffect = function (e, t) {
    return Ve.current.useInsertionEffect(e, t);
  };
  B.useLayoutEffect = function (e, t) {
    return Ve.current.useLayoutEffect(e, t);
  };
  B.useMemo = function (e, t) {
    return Ve.current.useMemo(e, t);
  };
  B.useReducer = function (e, t, n) {
    return Ve.current.useReducer(e, t, n);
  };
  B.useRef = function (e) {
    return Ve.current.useRef(e);
  };
  B.useState = function (e) {
    return Ve.current.useState(e);
  };
  B.useSyncExternalStore = function (e, t, n) {
    return Ve.current.useSyncExternalStore(e, t, n);
  };
  B.useTransition = function () {
    return Ve.current.useTransition();
  };
  B.version = "18.2.0";
  Dp.exports = B;
  var S = Dp.exports;
  const Ot = Io(S);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Dv = S,
    Mv = Symbol.for("react.element"),
    Rv = Symbol.for("react.fragment"),
    Lv = Object.prototype.hasOwnProperty,
    Vv =
      Dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    $v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Bp(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null;
    n !== void 0 && (s = "" + n),
      t.key !== void 0 && (s = "" + t.key),
      t.ref !== void 0 && (o = t.ref);
    for (r in t) Lv.call(t, r) && !$v.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
      $$typeof: Mv,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: Vv.current,
    };
  }
  zo.Fragment = Rv;
  zo.jsx = Bp;
  zo.jsxs = Bp;
  Op.exports = zo;
  var c = Op.exports,
    Pl = {},
    Up = { exports: {} },
    rt = {},
    Hp = { exports: {} },
    Wp = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(b, V) {
      var I = b.length;
      b.push(V);
      e: for (; 0 < I; ) {
        var R = (I - 1) >>> 1,
          W = b[R];
        if (0 < i(W, V)) (b[R] = V), (b[I] = W), (I = R);
        else break e;
      }
    }
    function n(b) {
      return b.length === 0 ? null : b[0];
    }
    function r(b) {
      if (b.length === 0) return null;
      var V = b[0],
        I = b.pop();
      if (I !== V) {
        b[0] = I;
        e: for (var R = 0, W = b.length, Pt = W >>> 1; R < Pt; ) {
          var ze = 2 * (R + 1) - 1,
            Qe = b[ze],
            Ae = ze + 1,
            gt = b[Ae];
          if (0 > i(Qe, I))
            Ae < W && 0 > i(gt, Qe)
              ? ((b[R] = gt), (b[Ae] = I), (R = Ae))
              : ((b[R] = Qe), (b[ze] = I), (R = ze));
          else if (Ae < W && 0 > i(gt, I)) (b[R] = gt), (b[Ae] = I), (R = Ae);
          else break e;
        }
      }
      return V;
    }
    function i(b, V) {
      var I = b.sortIndex - V.sortIndex;
      return I !== 0 ? I : b.id - V.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var s = performance;
      e.unstable_now = function () {
        return s.now();
      };
    } else {
      var o = Date,
        a = o.now();
      e.unstable_now = function () {
        return o.now() - a;
      };
    }
    var l = [],
      u = [],
      f = 1,
      d = null,
      h = 3,
      m = !1,
      v = !1,
      x = !1,
      C = typeof setTimeout == "function" ? setTimeout : null,
      y = typeof clearTimeout == "function" ? clearTimeout : null,
      p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function g(b) {
      for (var V = n(u); V !== null; ) {
        if (V.callback === null) r(u);
        else if (V.startTime <= b)
          r(u), (V.sortIndex = V.expirationTime), t(l, V);
        else break;
        V = n(u);
      }
    }
    function w(b) {
      if (((x = !1), g(b), !v))
        if (n(l) !== null) (v = !0), Ie(j);
        else {
          var V = n(u);
          V !== null && ot(w, V.startTime - b);
        }
    }
    function j(b, V) {
      (v = !1), x && ((x = !1), y(P), (P = -1)), (m = !0);
      var I = h;
      try {
        for (
          g(V), d = n(l);
          d !== null && (!(d.expirationTime > V) || (b && !$()));

        ) {
          var R = d.callback;
          if (typeof R == "function") {
            (d.callback = null), (h = d.priorityLevel);
            var W = R(d.expirationTime <= V);
            (V = e.unstable_now()),
              typeof W == "function" ? (d.callback = W) : d === n(l) && r(l),
              g(V);
          } else r(l);
          d = n(l);
        }
        if (d !== null) var Pt = !0;
        else {
          var ze = n(u);
          ze !== null && ot(w, ze.startTime - V), (Pt = !1);
        }
        return Pt;
      } finally {
        (d = null), (h = I), (m = !1);
      }
    }
    var E = !1,
      N = null,
      P = -1,
      O = 5,
      D = -1;
    function $() {
      return !(e.unstable_now() - D < O);
    }
    function ve() {
      if (N !== null) {
        var b = e.unstable_now();
        D = b;
        var V = !0;
        try {
          V = N(!0, b);
        } finally {
          V ? U() : ((E = !1), (N = null));
        }
      } else E = !1;
    }
    var U;
    if (typeof p == "function")
      U = function () {
        p(ve);
      };
    else if (typeof MessageChannel < "u") {
      var G = new MessageChannel(),
        Z = G.port2;
      (G.port1.onmessage = ve),
        (U = function () {
          Z.postMessage(null);
        });
    } else
      U = function () {
        C(ve, 0);
      };
    function Ie(b) {
      (N = b), E || ((E = !0), U());
    }
    function ot(b, V) {
      P = C(function () {
        b(e.unstable_now());
      }, V);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (b) {
        b.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        v || m || ((v = !0), Ie(j));
      }),
      (e.unstable_forceFrameRate = function (b) {
        0 > b || 125 < b
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (O = 0 < b ? Math.floor(1e3 / b) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return h;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (b) {
        switch (h) {
          case 1:
          case 2:
          case 3:
            var V = 3;
            break;
          default:
            V = h;
        }
        var I = h;
        h = V;
        try {
          return b();
        } finally {
          h = I;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (b, V) {
        switch (b) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            b = 3;
        }
        var I = h;
        h = b;
        try {
          return V();
        } finally {
          h = I;
        }
      }),
      (e.unstable_scheduleCallback = function (b, V, I) {
        var R = e.unstable_now();
        switch (
          (typeof I == "object" && I !== null
            ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? R + I : R))
            : (I = R),
          b)
        ) {
          case 1:
            var W = -1;
            break;
          case 2:
            W = 250;
            break;
          case 5:
            W = 1073741823;
            break;
          case 4:
            W = 1e4;
            break;
          default:
            W = 5e3;
        }
        return (
          (W = I + W),
          (b = {
            id: f++,
            callback: V,
            priorityLevel: b,
            startTime: I,
            expirationTime: W,
            sortIndex: -1,
          }),
          I > R
            ? ((b.sortIndex = I),
              t(u, b),
              n(l) === null &&
                b === n(u) &&
                (x ? (y(P), (P = -1)) : (x = !0), ot(w, I - R)))
            : ((b.sortIndex = W), t(l, b), v || m || ((v = !0), Ie(j))),
          b
        );
      }),
      (e.unstable_shouldYield = $),
      (e.unstable_wrapCallback = function (b) {
        var V = h;
        return function () {
          var I = h;
          h = V;
          try {
            return b.apply(this, arguments);
          } finally {
            h = I;
          }
        };
      });
  })(Wp);
  Hp.exports = Wp;
  var Iv = Hp.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Gp = S,
    tt = Iv;
  function k(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var Kp = new Set(),
    Mi = {};
  function or(e, t) {
    Ur(e, t), Ur(e + "Capture", t);
  }
  function Ur(e, t) {
    for (Mi[e] = t, e = 0; e < t.length; e++) Kp.add(t[e]);
  }
  var Xt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    kl = Object.prototype.hasOwnProperty,
    zv =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Of = {},
    Df = {};
  function Bv(e) {
    return kl.call(Df, e)
      ? !0
      : kl.call(Of, e)
      ? !1
      : zv.test(e)
      ? (Df[e] = !0)
      : ((Of[e] = !0), !1);
  }
  function Uv(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Hv(e, t, n, r) {
    if (t === null || typeof t > "u" || Uv(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function $e(e, t, n, r, i, s, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = o);
  }
  var be = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      be[e] = new $e(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    be[t] = new $e(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    be[e] = new $e(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    be[e] = new $e(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      be[e] = new $e(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    be[e] = new $e(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    be[e] = new $e(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    be[e] = new $e(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    be[e] = new $e(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Yu = /[\-:]([a-z])/g;
  function Qu(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Yu, Qu);
      be[t] = new $e(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Yu, Qu);
      be[t] = new $e(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Yu, Qu);
    be[t] = new $e(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    be[e] = new $e(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  be.xlinkHref = new $e(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    be[e] = new $e(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Xu(e, t, n, r) {
    var i = be.hasOwnProperty(t) ? be[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Hv(t, n, i, r) && (n = null),
      r || i === null
        ? Bv(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var tn = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ws = Symbol.for("react.element"),
    wr = Symbol.for("react.portal"),
    Sr = Symbol.for("react.fragment"),
    Zu = Symbol.for("react.strict_mode"),
    bl = Symbol.for("react.profiler"),
    Yp = Symbol.for("react.provider"),
    Qp = Symbol.for("react.context"),
    qu = Symbol.for("react.forward_ref"),
    Al = Symbol.for("react.suspense"),
    Fl = Symbol.for("react.suspense_list"),
    Ju = Symbol.for("react.memo"),
    an = Symbol.for("react.lazy"),
    Xp = Symbol.for("react.offscreen"),
    Mf = Symbol.iterator;
  function ii(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (Mf && e[Mf]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ue = Object.assign,
    Ra;
  function mi(e) {
    if (Ra === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ra = (t && t[1]) || "";
      }
    return (
      `
` +
      Ra +
      e
    );
  }
  var La = !1;
  function Va(e, t) {
    if (!e || La) return "";
    La = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var i = u.stack.split(`
`),
            s = r.stack.split(`
`),
            o = i.length - 1,
            a = s.length - 1;
          1 <= o && 0 <= a && i[o] !== s[a];

        )
          a--;
        for (; 1 <= o && 0 <= a; o--, a--)
          if (i[o] !== s[a]) {
            if (o !== 1 || a !== 1)
              do
                if ((o--, a--, 0 > a || i[o] !== s[a])) {
                  var l =
                    `
` + i[o].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      l.includes("<anonymous>") &&
                      (l = l.replace("<anonymous>", e.displayName)),
                    l
                  );
                }
              while (1 <= o && 0 <= a);
            break;
          }
      }
    } finally {
      (La = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? mi(e) : "";
  }
  function Wv(e) {
    switch (e.tag) {
      case 5:
        return mi(e.type);
      case 16:
        return mi("Lazy");
      case 13:
        return mi("Suspense");
      case 19:
        return mi("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = Va(e.type, !1)), e;
      case 11:
        return (e = Va(e.type.render, !1)), e;
      case 1:
        return (e = Va(e.type, !0)), e;
      default:
        return "";
    }
  }
  function _l(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Sr:
        return "Fragment";
      case wr:
        return "Portal";
      case bl:
        return "Profiler";
      case Zu:
        return "StrictMode";
      case Al:
        return "Suspense";
      case Fl:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Qp:
          return (e.displayName || "Context") + ".Consumer";
        case Yp:
          return (e._context.displayName || "Context") + ".Provider";
        case qu:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ju:
          return (
            (t = e.displayName || null), t !== null ? t : _l(e.type) || "Memo"
          );
        case an:
          (t = e._payload), (e = e._init);
          try {
            return _l(e(t));
          } catch {}
      }
    return null;
  }
  function Gv(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return _l(t);
      case 8:
        return t === Zu ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function kn(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Zp(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Kv(e) {
    var t = Zp(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (o) {
            (r = "" + o), s.call(this, o);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (o) {
            r = "" + o;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Ss(e) {
    e._valueTracker || (e._valueTracker = Kv(e));
  }
  function qp(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Zp(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function io(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return ue({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function Rf(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = kn(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Jp(e, t) {
    (t = t.checked), t != null && Xu(e, "checked", t, !1);
  }
  function Dl(e, t) {
    Jp(e, t);
    var n = kn(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ml(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, kn(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function Lf(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Ml(e, t, n) {
    (t !== "number" || io(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var gi = Array.isArray;
  function Lr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + kn(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Rl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
    return ue({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function Vf(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(k(92));
        if (gi(n)) {
          if (1 < n.length) throw Error(k(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: kn(n) };
  }
  function em(e, t) {
    var n = kn(t.value),
      r = kn(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function $f(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function tm(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ll(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? tm(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ts,
    nm = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          Ts = Ts || document.createElement("div"),
            Ts.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Ts.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Ri(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wi = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Yv = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wi).forEach(function (e) {
    Yv.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wi[t] = wi[e]);
    });
  });
  function rm(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (wi.hasOwnProperty(e) && wi[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function im(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = rm(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var Qv = ue(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Vl(e, t) {
    if (t) {
      if (Qv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(k(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(k(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(k(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(k(62));
    }
  }
  function $l(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Il = null;
  function ec(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zl = null,
    Vr = null,
    $r = null;
  function If(e) {
    if ((e = as(e))) {
      if (typeof zl != "function") throw Error(k(280));
      var t = e.stateNode;
      t && ((t = Go(t)), zl(e.stateNode, e.type, t));
    }
  }
  function sm(e) {
    Vr ? ($r ? $r.push(e) : ($r = [e])) : (Vr = e);
  }
  function om() {
    if (Vr) {
      var e = Vr,
        t = $r;
      if ((($r = Vr = null), If(e), t)) for (e = 0; e < t.length; e++) If(t[e]);
    }
  }
  function am(e, t) {
    return e(t);
  }
  function lm() {}
  var $a = !1;
  function um(e, t, n) {
    if ($a) return e(t, n);
    $a = !0;
    try {
      return am(e, t, n);
    } finally {
      ($a = !1), (Vr !== null || $r !== null) && (lm(), om());
    }
  }
  function Li(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Go(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(k(231, t, typeof n));
    return n;
  }
  var Bl = !1;
  if (Xt)
    try {
      var si = {};
      Object.defineProperty(si, "passive", {
        get: function () {
          Bl = !0;
        },
      }),
        window.addEventListener("test", si, si),
        window.removeEventListener("test", si, si);
    } catch {
      Bl = !1;
    }
  function Xv(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (f) {
      this.onError(f);
    }
  }
  var Si = !1,
    so = null,
    oo = !1,
    Ul = null,
    Zv = {
      onError: function (e) {
        (Si = !0), (so = e);
      },
    };
  function qv(e, t, n, r, i, s, o, a, l) {
    (Si = !1), (so = null), Xv.apply(Zv, arguments);
  }
  function Jv(e, t, n, r, i, s, o, a, l) {
    if ((qv.apply(this, arguments), Si)) {
      if (Si) {
        var u = so;
        (Si = !1), (so = null);
      } else throw Error(k(198));
      oo || ((oo = !0), (Ul = u));
    }
  }
  function ar(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function cm(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function zf(e) {
    if (ar(e) !== e) throw Error(k(188));
  }
  function ex(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ar(e)), t === null)) throw Error(k(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === s.child) {
        for (s = i.child; s; ) {
          if (s === n) return zf(i), e;
          if (s === r) return zf(i), t;
          s = s.sibling;
        }
        throw Error(k(188));
      }
      if (n.return !== r.return) (n = i), (r = s);
      else {
        for (var o = !1, a = i.child; a; ) {
          if (a === n) {
            (o = !0), (n = i), (r = s);
            break;
          }
          if (a === r) {
            (o = !0), (r = i), (n = s);
            break;
          }
          a = a.sibling;
        }
        if (!o) {
          for (a = s.child; a; ) {
            if (a === n) {
              (o = !0), (n = s), (r = i);
              break;
            }
            if (a === r) {
              (o = !0), (r = s), (n = i);
              break;
            }
            a = a.sibling;
          }
          if (!o) throw Error(k(189));
        }
      }
      if (n.alternate !== r) throw Error(k(190));
    }
    if (n.tag !== 3) throw Error(k(188));
    return n.stateNode.current === n ? e : t;
  }
  function fm(e) {
    return (e = ex(e)), e !== null ? dm(e) : null;
  }
  function dm(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = dm(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var hm = tt.unstable_scheduleCallback,
    Bf = tt.unstable_cancelCallback,
    tx = tt.unstable_shouldYield,
    nx = tt.unstable_requestPaint,
    me = tt.unstable_now,
    rx = tt.unstable_getCurrentPriorityLevel,
    tc = tt.unstable_ImmediatePriority,
    pm = tt.unstable_UserBlockingPriority,
    ao = tt.unstable_NormalPriority,
    ix = tt.unstable_LowPriority,
    mm = tt.unstable_IdlePriority,
    Bo = null,
    Dt = null;
  function sx(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : lx,
    ox = Math.log,
    ax = Math.LN2;
  function lx(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ox(e) / ax) | 0)) | 0;
  }
  var Ns = 64,
    js = 4194304;
  function yi(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function lo(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes,
      o = n & 268435455;
    if (o !== 0) {
      var a = o & ~i;
      a !== 0 ? (r = yi(a)) : ((s &= o), s !== 0 && (r = yi(s)));
    } else (o = n & ~i), o !== 0 ? (r = yi(o)) : s !== 0 && (r = yi(s));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & i) &&
      ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Nt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function ux(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function cx(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var o = 31 - Nt(s),
        a = 1 << o,
        l = i[o];
      l === -1
        ? (!(a & n) || a & r) && (i[o] = ux(a, t))
        : l <= t && (e.expiredLanes |= a),
        (s &= ~a);
    }
  }
  function Hl(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function gm() {
    var e = Ns;
    return (Ns <<= 1), !(Ns & 4194240) && (Ns = 64), e;
  }
  function Ia(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ss(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Nt(t)),
      (e[t] = n);
  }
  function fx(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - Nt(n),
        s = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
    }
  }
  function nc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Nt(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var Q = 0;
  function ym(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var vm,
    rc,
    xm,
    wm,
    Sm,
    Wl = !1,
    Es = [],
    gn = null,
    yn = null,
    vn = null,
    Vi = new Map(),
    $i = new Map(),
    fn = [],
    dx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Uf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        gn = null;
        break;
      case "dragenter":
      case "dragleave":
        yn = null;
        break;
      case "mouseover":
      case "mouseout":
        vn = null;
        break;
      case "pointerover":
      case "pointerout":
        Vi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $i.delete(t.pointerId);
    }
  }
  function oi(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: s,
          targetContainers: [i],
        }),
        t !== null && ((t = as(t)), t !== null && rc(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function hx(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (gn = oi(gn, e, t, n, r, i)), !0;
      case "dragenter":
        return (yn = oi(yn, e, t, n, r, i)), !0;
      case "mouseover":
        return (vn = oi(vn, e, t, n, r, i)), !0;
      case "pointerover":
        var s = i.pointerId;
        return Vi.set(s, oi(Vi.get(s) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (s = i.pointerId), $i.set(s, oi($i.get(s) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function Tm(e) {
    var t = Gn(e.target);
    if (t !== null) {
      var n = ar(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = cm(n)), t !== null)) {
            (e.blockedOn = t),
              Sm(e.priority, function () {
                xm(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ws(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Gl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Il = r), n.target.dispatchEvent(r), (Il = null);
      } else return (t = as(n)), t !== null && rc(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Hf(e, t, n) {
    Ws(e) && n.delete(t);
  }
  function px() {
    (Wl = !1),
      gn !== null && Ws(gn) && (gn = null),
      yn !== null && Ws(yn) && (yn = null),
      vn !== null && Ws(vn) && (vn = null),
      Vi.forEach(Hf),
      $i.forEach(Hf);
  }
  function ai(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Wl ||
        ((Wl = !0),
        tt.unstable_scheduleCallback(tt.unstable_NormalPriority, px)));
  }
  function Ii(e) {
    function t(i) {
      return ai(i, e);
    }
    if (0 < Es.length) {
      ai(Es[0], e);
      for (var n = 1; n < Es.length; n++) {
        var r = Es[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      gn !== null && ai(gn, e),
        yn !== null && ai(yn, e),
        vn !== null && ai(vn, e),
        Vi.forEach(t),
        $i.forEach(t),
        n = 0;
      n < fn.length;
      n++
    )
      (r = fn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < fn.length && ((n = fn[0]), n.blockedOn === null); )
      Tm(n), n.blockedOn === null && fn.shift();
  }
  var Ir = tn.ReactCurrentBatchConfig,
    uo = !0;
  function mx(e, t, n, r) {
    var i = Q,
      s = Ir.transition;
    Ir.transition = null;
    try {
      (Q = 1), ic(e, t, n, r);
    } finally {
      (Q = i), (Ir.transition = s);
    }
  }
  function gx(e, t, n, r) {
    var i = Q,
      s = Ir.transition;
    Ir.transition = null;
    try {
      (Q = 4), ic(e, t, n, r);
    } finally {
      (Q = i), (Ir.transition = s);
    }
  }
  function ic(e, t, n, r) {
    if (uo) {
      var i = Gl(e, t, n, r);
      if (i === null) Xa(e, t, r, co, n), Uf(e, r);
      else if (hx(i, e, t, n, r)) r.stopPropagation();
      else if ((Uf(e, r), t & 4 && -1 < dx.indexOf(e))) {
        for (; i !== null; ) {
          var s = as(i);
          if (
            (s !== null && vm(s),
            (s = Gl(e, t, n, r)),
            s === null && Xa(e, t, r, co, n),
            s === i)
          )
            break;
          i = s;
        }
        i !== null && r.stopPropagation();
      } else Xa(e, t, r, null, n);
    }
  }
  var co = null;
  function Gl(e, t, n, r) {
    if (((co = null), (e = ec(r)), (e = Gn(e)), e !== null))
      if (((t = ar(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = cm(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (co = e), null;
  }
  function Nm(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (rx()) {
          case tc:
            return 1;
          case pm:
            return 4;
          case ao:
          case ix:
            return 16;
          case mm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var hn = null,
    sc = null,
    Gs = null;
  function jm() {
    if (Gs) return Gs;
    var e,
      t = sc,
      n = t.length,
      r,
      i = "value" in hn ? hn.value : hn.textContent,
      s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
    return (Gs = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Ks(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Cs() {
    return !0;
  }
  function Wf() {
    return !1;
  }
  function it(e) {
    function t(n, r, i, s, o) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = s),
        (this.target = o),
        (this.currentTarget = null);
      for (var a in e)
        e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? Cs
          : Wf),
        (this.isPropagationStopped = Wf),
        this
      );
    }
    return (
      ue(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Cs));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Cs));
        },
        persist: function () {},
        isPersistent: Cs,
      }),
      t
    );
  }
  var ei = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    oc = it(ei),
    os = ue({}, ei, { view: 0, detail: 0 }),
    yx = it(os),
    za,
    Ba,
    li,
    Uo = ue({}, os, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ac,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== li &&
              (li && e.type === "mousemove"
                ? ((za = e.screenX - li.screenX), (Ba = e.screenY - li.screenY))
                : (Ba = za = 0),
              (li = e)),
            za);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Ba;
      },
    }),
    Gf = it(Uo),
    vx = ue({}, Uo, { dataTransfer: 0 }),
    xx = it(vx),
    wx = ue({}, os, { relatedTarget: 0 }),
    Ua = it(wx),
    Sx = ue({}, ei, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Tx = it(Sx),
    Nx = ue({}, ei, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    jx = it(Nx),
    Ex = ue({}, ei, { data: 0 }),
    Kf = it(Ex),
    Cx = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Px = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    kx = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function bx(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = kx[e])
      ? !!t[e]
      : !1;
  }
  function ac() {
    return bx;
  }
  var Ax = ue({}, os, {
      key: function (e) {
        if (e.key) {
          var t = Cx[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Ks(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Px[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ac,
      charCode: function (e) {
        return e.type === "keypress" ? Ks(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ks(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Fx = it(Ax),
    _x = ue({}, Uo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Yf = it(_x),
    Ox = ue({}, os, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ac,
    }),
    Dx = it(Ox),
    Mx = ue({}, ei, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rx = it(Mx),
    Lx = ue({}, Uo, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Vx = it(Lx),
    $x = [9, 13, 27, 32],
    lc = Xt && "CompositionEvent" in window,
    Ti = null;
  Xt && "documentMode" in document && (Ti = document.documentMode);
  var Ix = Xt && "TextEvent" in window && !Ti,
    Em = Xt && (!lc || (Ti && 8 < Ti && 11 >= Ti)),
    Qf = String.fromCharCode(32),
    Xf = !1;
  function Cm(e, t) {
    switch (e) {
      case "keyup":
        return $x.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Pm(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Tr = !1;
  function zx(e, t) {
    switch (e) {
      case "compositionend":
        return Pm(t);
      case "keypress":
        return t.which !== 32 ? null : ((Xf = !0), Qf);
      case "textInput":
        return (e = t.data), e === Qf && Xf ? null : e;
      default:
        return null;
    }
  }
  function Bx(e, t) {
    if (Tr)
      return e === "compositionend" || (!lc && Cm(e, t))
        ? ((e = jm()), (Gs = sc = hn = null), (Tr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Em && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ux = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Zf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ux[e.type] : t === "textarea";
  }
  function km(e, t, n, r) {
    sm(r),
      (t = fo(t, "onChange")),
      0 < t.length &&
        ((n = new oc("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Ni = null,
    zi = null;
  function Hx(e) {
    $m(e, 0);
  }
  function Ho(e) {
    var t = Er(e);
    if (qp(t)) return e;
  }
  function Wx(e, t) {
    if (e === "change") return t;
  }
  var bm = !1;
  if (Xt) {
    var Ha;
    if (Xt) {
      var Wa = "oninput" in document;
      if (!Wa) {
        var qf = document.createElement("div");
        qf.setAttribute("oninput", "return;"),
          (Wa = typeof qf.oninput == "function");
      }
      Ha = Wa;
    } else Ha = !1;
    bm = Ha && (!document.documentMode || 9 < document.documentMode);
  }
  function Jf() {
    Ni && (Ni.detachEvent("onpropertychange", Am), (zi = Ni = null));
  }
  function Am(e) {
    if (e.propertyName === "value" && Ho(zi)) {
      var t = [];
      km(t, zi, e, ec(e)), um(Hx, t);
    }
  }
  function Gx(e, t, n) {
    e === "focusin"
      ? (Jf(), (Ni = t), (zi = n), Ni.attachEvent("onpropertychange", Am))
      : e === "focusout" && Jf();
  }
  function Kx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ho(zi);
  }
  function Yx(e, t) {
    if (e === "click") return Ho(t);
  }
  function Qx(e, t) {
    if (e === "input" || e === "change") return Ho(t);
  }
  function Xx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Et = typeof Object.is == "function" ? Object.is : Xx;
  function Bi(e, t) {
    if (Et(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!kl.call(t, i) || !Et(e[i], t[i])) return !1;
    }
    return !0;
  }
  function ed(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function td(e, t) {
    var n = ed(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ed(n);
    }
  }
  function Fm(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? Fm(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function _m() {
    for (var e = window, t = io(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = io(e.document);
    }
    return t;
  }
  function uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Zx(e) {
    var t = _m(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      Fm(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && uc(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            s = Math.min(r.start, i);
          (r = r.end === void 0 ? s : Math.min(r.end, i)),
            !e.extend && s > r && ((i = r), (r = s), (s = i)),
            (i = td(n, s));
          var o = td(n, r);
          i &&
            o &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== o.node ||
              e.focusOffset !== o.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            s > r
              ? (e.addRange(t), e.extend(o.node, o.offset))
              : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var qx = Xt && "documentMode" in document && 11 >= document.documentMode,
    Nr = null,
    Kl = null,
    ji = null,
    Yl = !1;
  function nd(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yl ||
      Nr == null ||
      Nr !== io(r) ||
      ((r = Nr),
      "selectionStart" in r && uc(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ji && Bi(ji, r)) ||
        ((ji = r),
        (r = fo(Kl, "onSelect")),
        0 < r.length &&
          ((t = new oc("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Nr))));
  }
  function Ps(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var jr = {
      animationend: Ps("Animation", "AnimationEnd"),
      animationiteration: Ps("Animation", "AnimationIteration"),
      animationstart: Ps("Animation", "AnimationStart"),
      transitionend: Ps("Transition", "TransitionEnd"),
    },
    Ga = {},
    Om = {};
  Xt &&
    ((Om = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete jr.animationend.animation,
      delete jr.animationiteration.animation,
      delete jr.animationstart.animation),
    "TransitionEvent" in window || delete jr.transitionend.transition);
  function Wo(e) {
    if (Ga[e]) return Ga[e];
    if (!jr[e]) return e;
    var t = jr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Om) return (Ga[e] = t[n]);
    return e;
  }
  var Dm = Wo("animationend"),
    Mm = Wo("animationiteration"),
    Rm = Wo("animationstart"),
    Lm = Wo("transitionend"),
    Vm = new Map(),
    rd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function On(e, t) {
    Vm.set(e, t), or(t, [e]);
  }
  for (var Ka = 0; Ka < rd.length; Ka++) {
    var Ya = rd[Ka],
      Jx = Ya.toLowerCase(),
      e1 = Ya[0].toUpperCase() + Ya.slice(1);
    On(Jx, "on" + e1);
  }
  On(Dm, "onAnimationEnd");
  On(Mm, "onAnimationIteration");
  On(Rm, "onAnimationStart");
  On("dblclick", "onDoubleClick");
  On("focusin", "onFocus");
  On("focusout", "onBlur");
  On(Lm, "onTransitionEnd");
  Ur("onMouseEnter", ["mouseout", "mouseover"]);
  Ur("onMouseLeave", ["mouseout", "mouseover"]);
  Ur("onPointerEnter", ["pointerout", "pointerover"]);
  Ur("onPointerLeave", ["pointerout", "pointerover"]);
  or(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  or(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  or("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  or(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  or(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  or(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    t1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(vi)
    );
  function id(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Jv(r, t, void 0, e), (e.currentTarget = null);
  }
  function $m(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var o = r.length - 1; 0 <= o; o--) {
            var a = r[o],
              l = a.instance,
              u = a.currentTarget;
            if (((a = a.listener), l !== s && i.isPropagationStopped()))
              break e;
            id(i, a, u), (s = l);
          }
        else
          for (o = 0; o < r.length; o++) {
            if (
              ((a = r[o]),
              (l = a.instance),
              (u = a.currentTarget),
              (a = a.listener),
              l !== s && i.isPropagationStopped())
            )
              break e;
            id(i, a, u), (s = l);
          }
      }
    }
    if (oo) throw ((e = Ul), (oo = !1), (Ul = null), e);
  }
  function te(e, t) {
    var n = t[Jl];
    n === void 0 && (n = t[Jl] = new Set());
    var r = e + "__bubble";
    n.has(r) || (Im(t, e, 2, !1), n.add(r));
  }
  function Qa(e, t, n) {
    var r = 0;
    t && (r |= 4), Im(n, e, r, t);
  }
  var ks = "_reactListening" + Math.random().toString(36).slice(2);
  function Ui(e) {
    if (!e[ks]) {
      (e[ks] = !0),
        Kp.forEach(function (n) {
          n !== "selectionchange" && (t1.has(n) || Qa(n, !1, e), Qa(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ks] || ((t[ks] = !0), Qa("selectionchange", !1, t));
    }
  }
  function Im(e, t, n, r) {
    switch (Nm(t)) {
      case 1:
        var i = mx;
        break;
      case 4:
        i = gx;
        break;
      default:
        i = ic;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !Bl ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function Xa(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
          var a = r.stateNode.containerInfo;
          if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
          if (o === 4)
            for (o = r.return; o !== null; ) {
              var l = o.tag;
              if (
                (l === 3 || l === 4) &&
                ((l = o.stateNode.containerInfo),
                l === i || (l.nodeType === 8 && l.parentNode === i))
              )
                return;
              o = o.return;
            }
          for (; a !== null; ) {
            if (((o = Gn(a)), o === null)) return;
            if (((l = o.tag), l === 5 || l === 6)) {
              r = s = o;
              continue e;
            }
            a = a.parentNode;
          }
        }
        r = r.return;
      }
    um(function () {
      var u = s,
        f = ec(n),
        d = [];
      e: {
        var h = Vm.get(e);
        if (h !== void 0) {
          var m = oc,
            v = e;
          switch (e) {
            case "keypress":
              if (Ks(n) === 0) break e;
            case "keydown":
            case "keyup":
              m = Fx;
              break;
            case "focusin":
              (v = "focus"), (m = Ua);
              break;
            case "focusout":
              (v = "blur"), (m = Ua);
              break;
            case "beforeblur":
            case "afterblur":
              m = Ua;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              m = Gf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              m = xx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = Dx;
              break;
            case Dm:
            case Mm:
            case Rm:
              m = Tx;
              break;
            case Lm:
              m = Rx;
              break;
            case "scroll":
              m = yx;
              break;
            case "wheel":
              m = Vx;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = jx;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              m = Yf;
          }
          var x = (t & 4) !== 0,
            C = !x && e === "scroll",
            y = x ? (h !== null ? h + "Capture" : null) : h;
          x = [];
          for (var p = u, g; p !== null; ) {
            g = p;
            var w = g.stateNode;
            if (
              (g.tag === 5 &&
                w !== null &&
                ((g = w),
                y !== null &&
                  ((w = Li(p, y)), w != null && x.push(Hi(p, w, g)))),
              C)
            )
              break;
            p = p.return;
          }
          0 < x.length &&
            ((h = new m(h, v, null, n, f)), d.push({ event: h, listeners: x }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((h = e === "mouseover" || e === "pointerover"),
            (m = e === "mouseout" || e === "pointerout"),
            h &&
              n !== Il &&
              (v = n.relatedTarget || n.fromElement) &&
              (Gn(v) || v[Zt]))
          )
            break e;
          if (
            (m || h) &&
            ((h =
              f.window === f
                ? f
                : (h = f.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window),
            m
              ? ((v = n.relatedTarget || n.toElement),
                (m = u),
                (v = v ? Gn(v) : null),
                v !== null &&
                  ((C = ar(v)), v !== C || (v.tag !== 5 && v.tag !== 6)) &&
                  (v = null))
              : ((m = null), (v = u)),
            m !== v)
          ) {
            if (
              ((x = Gf),
              (w = "onMouseLeave"),
              (y = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((x = Yf),
                (w = "onPointerLeave"),
                (y = "onPointerEnter"),
                (p = "pointer")),
              (C = m == null ? h : Er(m)),
              (g = v == null ? h : Er(v)),
              (h = new x(w, p + "leave", m, n, f)),
              (h.target = C),
              (h.relatedTarget = g),
              (w = null),
              Gn(f) === u &&
                ((x = new x(y, p + "enter", v, n, f)),
                (x.target = g),
                (x.relatedTarget = C),
                (w = x)),
              (C = w),
              m && v)
            )
              t: {
                for (x = m, y = v, p = 0, g = x; g; g = yr(g)) p++;
                for (g = 0, w = y; w; w = yr(w)) g++;
                for (; 0 < p - g; ) (x = yr(x)), p--;
                for (; 0 < g - p; ) (y = yr(y)), g--;
                for (; p--; ) {
                  if (x === y || (y !== null && x === y.alternate)) break t;
                  (x = yr(x)), (y = yr(y));
                }
                x = null;
              }
            else x = null;
            m !== null && sd(d, h, m, x, !1),
              v !== null && C !== null && sd(d, C, v, x, !0);
          }
        }
        e: {
          if (
            ((h = u ? Er(u) : window),
            (m = h.nodeName && h.nodeName.toLowerCase()),
            m === "select" || (m === "input" && h.type === "file"))
          )
            var j = Wx;
          else if (Zf(h))
            if (bm) j = Qx;
            else {
              j = Kx;
              var E = Gx;
            }
          else
            (m = h.nodeName) &&
              m.toLowerCase() === "input" &&
              (h.type === "checkbox" || h.type === "radio") &&
              (j = Yx);
          if (j && (j = j(e, u))) {
            km(d, j, n, f);
            break e;
          }
          E && E(e, h, u),
            e === "focusout" &&
              (E = h._wrapperState) &&
              E.controlled &&
              h.type === "number" &&
              Ml(h, "number", h.value);
        }
        switch (((E = u ? Er(u) : window), e)) {
          case "focusin":
            (Zf(E) || E.contentEditable === "true") &&
              ((Nr = E), (Kl = u), (ji = null));
            break;
          case "focusout":
            ji = Kl = Nr = null;
            break;
          case "mousedown":
            Yl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Yl = !1), nd(d, n, f);
            break;
          case "selectionchange":
            if (qx) break;
          case "keydown":
          case "keyup":
            nd(d, n, f);
        }
        var N;
        if (lc)
          e: {
            switch (e) {
              case "compositionstart":
                var P = "onCompositionStart";
                break e;
              case "compositionend":
                P = "onCompositionEnd";
                break e;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break e;
            }
            P = void 0;
          }
        else
          Tr
            ? Cm(e, n) && (P = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (P = "onCompositionStart");
        P &&
          (Em &&
            n.locale !== "ko" &&
            (Tr || P !== "onCompositionStart"
              ? P === "onCompositionEnd" && Tr && (N = jm())
              : ((hn = f),
                (sc = "value" in hn ? hn.value : hn.textContent),
                (Tr = !0))),
          (E = fo(u, P)),
          0 < E.length &&
            ((P = new Kf(P, e, null, n, f)),
            d.push({ event: P, listeners: E }),
            N ? (P.data = N) : ((N = Pm(n)), N !== null && (P.data = N)))),
          (N = Ix ? zx(e, n) : Bx(e, n)) &&
            ((u = fo(u, "onBeforeInput")),
            0 < u.length &&
              ((f = new Kf("onBeforeInput", "beforeinput", null, n, f)),
              d.push({ event: f, listeners: u }),
              (f.data = N)));
      }
      $m(d, t);
    });
  }
  function Hi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function fo(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        s = i.stateNode;
      i.tag === 5 &&
        s !== null &&
        ((i = s),
        (s = Li(e, n)),
        s != null && r.unshift(Hi(e, s, i)),
        (s = Li(e, t)),
        s != null && r.push(Hi(e, s, i))),
        (e = e.return);
    }
    return r;
  }
  function yr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function sd(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
      var a = n,
        l = a.alternate,
        u = a.stateNode;
      if (l !== null && l === r) break;
      a.tag === 5 &&
        u !== null &&
        ((a = u),
        i
          ? ((l = Li(n, s)), l != null && o.unshift(Hi(n, l, a)))
          : i || ((l = Li(n, s)), l != null && o.push(Hi(n, l, a)))),
        (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var n1 = /\r\n?/g,
    r1 = /\u0000|\uFFFD/g;
  function od(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        n1,
        `
`
      )
      .replace(r1, "");
  }
  function bs(e, t, n) {
    if (((t = od(t)), od(e) !== t && n)) throw Error(k(425));
  }
  function ho() {}
  var Ql = null,
    Xl = null;
  function Zl(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ql = typeof setTimeout == "function" ? setTimeout : void 0,
    i1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ad = typeof Promise == "function" ? Promise : void 0,
    s1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ad < "u"
        ? function (e) {
            return ad.resolve(null).then(e).catch(o1);
          }
        : ql;
  function o1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Za(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), Ii(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    Ii(t);
  }
  function xn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ld(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var ti = Math.random().toString(36).slice(2),
    _t = "__reactFiber$" + ti,
    Wi = "__reactProps$" + ti,
    Zt = "__reactContainer$" + ti,
    Jl = "__reactEvents$" + ti,
    a1 = "__reactListeners$" + ti,
    l1 = "__reactHandles$" + ti;
  function Gn(e) {
    var t = e[_t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Zt] || n[_t])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ld(e); e !== null; ) {
            if ((n = e[_t])) return n;
            e = ld(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function as(e) {
    return (
      (e = e[_t] || e[Zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Er(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(k(33));
  }
  function Go(e) {
    return e[Wi] || null;
  }
  var eu = [],
    Cr = -1;
  function Dn(e) {
    return { current: e };
  }
  function re(e) {
    0 > Cr || ((e.current = eu[Cr]), (eu[Cr] = null), Cr--);
  }
  function J(e, t) {
    Cr++, (eu[Cr] = e.current), (e.current = t);
  }
  var bn = {},
    De = Dn(bn),
    We = Dn(!1),
    Jn = bn;
  function Hr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return bn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      s;
    for (s in n) i[s] = t[s];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ge(e) {
    return (e = e.childContextTypes), e != null;
  }
  function po() {
    re(We), re(De);
  }
  function ud(e, t, n) {
    if (De.current !== bn) throw Error(k(168));
    J(De, t), J(We, n);
  }
  function zm(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(k(108, Gv(e) || "Unknown", i));
    return ue({}, n, r);
  }
  function mo(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        bn),
      (Jn = De.current),
      J(De, e),
      J(We, We.current),
      !0
    );
  }
  function cd(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(k(169));
    n
      ? ((e = zm(e, t, Jn)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        re(We),
        re(De),
        J(De, e))
      : re(We),
      J(We, n);
  }
  var Bt = null,
    Ko = !1,
    qa = !1;
  function Bm(e) {
    Bt === null ? (Bt = [e]) : Bt.push(e);
  }
  function u1(e) {
    (Ko = !0), Bm(e);
  }
  function Mn() {
    if (!qa && Bt !== null) {
      qa = !0;
      var e = 0,
        t = Q;
      try {
        var n = Bt;
        for (Q = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Bt = null), (Ko = !1);
      } catch (i) {
        throw (Bt !== null && (Bt = Bt.slice(e + 1)), hm(tc, Mn), i);
      } finally {
        (Q = t), (qa = !1);
      }
    }
    return null;
  }
  var Pr = [],
    kr = 0,
    go = null,
    yo = 0,
    ut = [],
    ct = 0,
    er = null,
    Ut = 1,
    Ht = "";
  function zn(e, t) {
    (Pr[kr++] = yo), (Pr[kr++] = go), (go = e), (yo = t);
  }
  function Um(e, t, n) {
    (ut[ct++] = Ut), (ut[ct++] = Ht), (ut[ct++] = er), (er = e);
    var r = Ut;
    e = Ht;
    var i = 32 - Nt(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var s = 32 - Nt(t) + i;
    if (30 < s) {
      var o = i - (i % 5);
      (s = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (i -= o),
        (Ut = (1 << (32 - Nt(t) + i)) | (n << i) | r),
        (Ht = s + e);
    } else (Ut = (1 << s) | (n << i) | r), (Ht = e);
  }
  function cc(e) {
    e.return !== null && (zn(e, 1), Um(e, 1, 0));
  }
  function fc(e) {
    for (; e === go; )
      (go = Pr[--kr]), (Pr[kr] = null), (yo = Pr[--kr]), (Pr[kr] = null);
    for (; e === er; )
      (er = ut[--ct]),
        (ut[ct] = null),
        (Ht = ut[--ct]),
        (ut[ct] = null),
        (Ut = ut[--ct]),
        (ut[ct] = null);
  }
  var et = null,
    Ze = null,
    se = !1,
    Tt = null;
  function Hm(e, t) {
    var n = dt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function fd(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (et = e), (Ze = xn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (et = e), (Ze = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = er !== null ? { id: Ut, overflow: Ht } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = dt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (et = e),
              (Ze = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function tu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function nu(e) {
    if (se) {
      var t = Ze;
      if (t) {
        var n = t;
        if (!fd(e, t)) {
          if (tu(e)) throw Error(k(418));
          t = xn(n.nextSibling);
          var r = et;
          t && fd(e, t)
            ? Hm(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (se = !1), (et = e));
        }
      } else {
        if (tu(e)) throw Error(k(418));
        (e.flags = (e.flags & -4097) | 2), (se = !1), (et = e);
      }
    }
  }
  function dd(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    et = e;
  }
  function As(e) {
    if (e !== et) return !1;
    if (!se) return dd(e), (se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !Zl(e.type, e.memoizedProps))),
      t && (t = Ze))
    ) {
      if (tu(e)) throw (Wm(), Error(k(418)));
      for (; t; ) Hm(e, t), (t = xn(t.nextSibling));
    }
    if ((dd(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(k(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Ze = xn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Ze = null;
      }
    } else Ze = et ? xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Wm() {
    for (var e = Ze; e; ) e = xn(e.nextSibling);
  }
  function Wr() {
    (Ze = et = null), (se = !1);
  }
  function dc(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
  }
  var c1 = tn.ReactCurrentBatchConfig;
  function wt(e, t) {
    if (e && e.defaultProps) {
      (t = ue({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var vo = Dn(null),
    xo = null,
    br = null,
    hc = null;
  function pc() {
    hc = br = xo = null;
  }
  function mc(e) {
    var t = vo.current;
    re(vo), (e._currentValue = t);
  }
  function ru(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function zr(e, t) {
    (xo = e),
      (hc = br = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (He = !0), (e.firstContext = null));
  }
  function pt(e) {
    var t = e._currentValue;
    if (hc !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), br === null)) {
        if (xo === null) throw Error(k(308));
        (br = e), (xo.dependencies = { lanes: 0, firstContext: e });
      } else br = br.next = e;
    return t;
  }
  var Kn = null;
  function gc(e) {
    Kn === null ? (Kn = [e]) : Kn.push(e);
  }
  function Gm(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), gc(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      qt(e, r)
    );
  }
  function qt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var ln = !1;
  function yc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Km(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Kt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function wn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), H & 2)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        qt(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), gc(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      qt(e, n)
    );
  }
  function Ys(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n);
    }
  }
  function hd(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var o = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
        } while (n !== null);
        s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: s,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function wo(e, t, n, r) {
    var i = e.updateQueue;
    ln = !1;
    var s = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      a = i.shared.pending;
    if (a !== null) {
      i.shared.pending = null;
      var l = a,
        u = l.next;
      (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
      var f = e.alternate;
      f !== null &&
        ((f = f.updateQueue),
        (a = f.lastBaseUpdate),
        a !== o &&
          (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
          (f.lastBaseUpdate = l)));
    }
    if (s !== null) {
      var d = i.baseState;
      (o = 0), (f = u = l = null), (a = s);
      do {
        var h = a.lane,
          m = a.eventTime;
        if ((r & h) === h) {
          f !== null &&
            (f = f.next =
              {
                eventTime: m,
                lane: 0,
                tag: a.tag,
                payload: a.payload,
                callback: a.callback,
                next: null,
              });
          e: {
            var v = e,
              x = a;
            switch (((h = t), (m = n), x.tag)) {
              case 1:
                if (((v = x.payload), typeof v == "function")) {
                  d = v.call(m, d, h);
                  break e;
                }
                d = v;
                break e;
              case 3:
                v.flags = (v.flags & -65537) | 128;
              case 0:
                if (
                  ((v = x.payload),
                  (h = typeof v == "function" ? v.call(m, d, h) : v),
                  h == null)
                )
                  break e;
                d = ue({}, d, h);
                break e;
              case 2:
                ln = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (h = i.effects),
            h === null ? (i.effects = [a]) : h.push(a));
        } else
          (m = {
            eventTime: m,
            lane: h,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            f === null ? ((u = f = m), (l = d)) : (f = f.next = m),
            (o |= h);
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break;
          (h = a),
            (a = h.next),
            (h.next = null),
            (i.lastBaseUpdate = h),
            (i.shared.pending = null);
        }
      } while (1);
      if (
        (f === null && (l = d),
        (i.baseState = l),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = f),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (o |= i.lane), (i = i.next);
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      (nr |= o), (e.lanes = o), (e.memoizedState = d);
    }
  }
  function pd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(k(191, i));
          i.call(r);
        }
      }
  }
  var Ym = new Gp.Component().refs;
  function iu(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : ue({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Yo = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? ar(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Le(),
        i = Tn(e),
        s = Kt(r, i);
      (s.payload = t),
        n != null && (s.callback = n),
        (t = wn(e, s, i)),
        t !== null && (jt(t, e, i, r), Ys(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Le(),
        i = Tn(e),
        s = Kt(r, i);
      (s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = wn(e, s, i)),
        t !== null && (jt(t, e, i, r), Ys(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Le(),
        r = Tn(e),
        i = Kt(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = wn(e, i, r)),
        t !== null && (jt(t, e, r, n), Ys(t, e, r));
    },
  };
  function md(e, t, n, r, i, s, o) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, s, o)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Bi(n, r) || !Bi(i, s)
        : !0
    );
  }
  function Qm(e, t, n) {
    var r = !1,
      i = bn,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = pt(s))
        : ((i = Ge(t) ? Jn : De.current),
          (r = t.contextTypes),
          (s = (r = r != null) ? Hr(e, i) : bn)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Yo),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function gd(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Yo.enqueueReplaceState(t, t.state, null);
  }
  function su(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = Ym), yc(e);
    var s = t.contextType;
    typeof s == "object" && s !== null
      ? (i.context = pt(s))
      : ((s = Ge(t) ? Jn : De.current), (i.context = Hr(e, s))),
      (i.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (iu(e, t, s, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && Yo.enqueueReplaceState(i, i.state, null),
        wo(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function ui(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(k(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(k(147, e));
        var i = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (o) {
              var a = i.refs;
              a === Ym && (a = i.refs = {}),
                o === null ? delete a[s] : (a[s] = o);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(k(284));
      if (!n._owner) throw Error(k(290, e));
    }
    return e;
  }
  function Fs(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        k(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function yd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Xm(e) {
    function t(y, p) {
      if (e) {
        var g = y.deletions;
        g === null ? ((y.deletions = [p]), (y.flags |= 16)) : g.push(p);
      }
    }
    function n(y, p) {
      if (!e) return null;
      for (; p !== null; ) t(y, p), (p = p.sibling);
      return null;
    }
    function r(y, p) {
      for (y = new Map(); p !== null; )
        p.key !== null ? y.set(p.key, p) : y.set(p.index, p), (p = p.sibling);
      return y;
    }
    function i(y, p) {
      return (y = Nn(y, p)), (y.index = 0), (y.sibling = null), y;
    }
    function s(y, p, g) {
      return (
        (y.index = g),
        e
          ? ((g = y.alternate),
            g !== null
              ? ((g = g.index), g < p ? ((y.flags |= 2), p) : g)
              : ((y.flags |= 2), p))
          : ((y.flags |= 1048576), p)
      );
    }
    function o(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function a(y, p, g, w) {
      return p === null || p.tag !== 6
        ? ((p = sl(g, y.mode, w)), (p.return = y), p)
        : ((p = i(p, g)), (p.return = y), p);
    }
    function l(y, p, g, w) {
      var j = g.type;
      return j === Sr
        ? f(y, p, g.props.children, w, g.key)
        : p !== null &&
          (p.elementType === j ||
            (typeof j == "object" &&
              j !== null &&
              j.$$typeof === an &&
              yd(j) === p.type))
        ? ((w = i(p, g.props)), (w.ref = ui(y, p, g)), (w.return = y), w)
        : ((w = eo(g.type, g.key, g.props, null, y.mode, w)),
          (w.ref = ui(y, p, g)),
          (w.return = y),
          w);
    }
    function u(y, p, g, w) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== g.containerInfo ||
        p.stateNode.implementation !== g.implementation
        ? ((p = ol(g, y.mode, w)), (p.return = y), p)
        : ((p = i(p, g.children || [])), (p.return = y), p);
    }
    function f(y, p, g, w, j) {
      return p === null || p.tag !== 7
        ? ((p = Zn(g, y.mode, w, j)), (p.return = y), p)
        : ((p = i(p, g)), (p.return = y), p);
    }
    function d(y, p, g) {
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return (p = sl("" + p, y.mode, g)), (p.return = y), p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ws:
            return (
              (g = eo(p.type, p.key, p.props, null, y.mode, g)),
              (g.ref = ui(y, null, p)),
              (g.return = y),
              g
            );
          case wr:
            return (p = ol(p, y.mode, g)), (p.return = y), p;
          case an:
            var w = p._init;
            return d(y, w(p._payload), g);
        }
        if (gi(p) || ii(p))
          return (p = Zn(p, y.mode, g, null)), (p.return = y), p;
        Fs(y, p);
      }
      return null;
    }
    function h(y, p, g, w) {
      var j = p !== null ? p.key : null;
      if ((typeof g == "string" && g !== "") || typeof g == "number")
        return j !== null ? null : a(y, p, "" + g, w);
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case ws:
            return g.key === j ? l(y, p, g, w) : null;
          case wr:
            return g.key === j ? u(y, p, g, w) : null;
          case an:
            return (j = g._init), h(y, p, j(g._payload), w);
        }
        if (gi(g) || ii(g)) return j !== null ? null : f(y, p, g, w, null);
        Fs(y, g);
      }
      return null;
    }
    function m(y, p, g, w, j) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (y = y.get(g) || null), a(p, y, "" + w, j);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case ws:
            return (
              (y = y.get(w.key === null ? g : w.key) || null), l(p, y, w, j)
            );
          case wr:
            return (
              (y = y.get(w.key === null ? g : w.key) || null), u(p, y, w, j)
            );
          case an:
            var E = w._init;
            return m(y, p, g, E(w._payload), j);
        }
        if (gi(w) || ii(w)) return (y = y.get(g) || null), f(p, y, w, j, null);
        Fs(p, w);
      }
      return null;
    }
    function v(y, p, g, w) {
      for (
        var j = null, E = null, N = p, P = (p = 0), O = null;
        N !== null && P < g.length;
        P++
      ) {
        N.index > P ? ((O = N), (N = null)) : (O = N.sibling);
        var D = h(y, N, g[P], w);
        if (D === null) {
          N === null && (N = O);
          break;
        }
        e && N && D.alternate === null && t(y, N),
          (p = s(D, p, P)),
          E === null ? (j = D) : (E.sibling = D),
          (E = D),
          (N = O);
      }
      if (P === g.length) return n(y, N), se && zn(y, P), j;
      if (N === null) {
        for (; P < g.length; P++)
          (N = d(y, g[P], w)),
            N !== null &&
              ((p = s(N, p, P)),
              E === null ? (j = N) : (E.sibling = N),
              (E = N));
        return se && zn(y, P), j;
      }
      for (N = r(y, N); P < g.length; P++)
        (O = m(N, y, P, g[P], w)),
          O !== null &&
            (e && O.alternate !== null && N.delete(O.key === null ? P : O.key),
            (p = s(O, p, P)),
            E === null ? (j = O) : (E.sibling = O),
            (E = O));
      return (
        e &&
          N.forEach(function ($) {
            return t(y, $);
          }),
        se && zn(y, P),
        j
      );
    }
    function x(y, p, g, w) {
      var j = ii(g);
      if (typeof j != "function") throw Error(k(150));
      if (((g = j.call(g)), g == null)) throw Error(k(151));
      for (
        var E = (j = null), N = p, P = (p = 0), O = null, D = g.next();
        N !== null && !D.done;
        P++, D = g.next()
      ) {
        N.index > P ? ((O = N), (N = null)) : (O = N.sibling);
        var $ = h(y, N, D.value, w);
        if ($ === null) {
          N === null && (N = O);
          break;
        }
        e && N && $.alternate === null && t(y, N),
          (p = s($, p, P)),
          E === null ? (j = $) : (E.sibling = $),
          (E = $),
          (N = O);
      }
      if (D.done) return n(y, N), se && zn(y, P), j;
      if (N === null) {
        for (; !D.done; P++, D = g.next())
          (D = d(y, D.value, w)),
            D !== null &&
              ((p = s(D, p, P)),
              E === null ? (j = D) : (E.sibling = D),
              (E = D));
        return se && zn(y, P), j;
      }
      for (N = r(y, N); !D.done; P++, D = g.next())
        (D = m(N, y, P, D.value, w)),
          D !== null &&
            (e && D.alternate !== null && N.delete(D.key === null ? P : D.key),
            (p = s(D, p, P)),
            E === null ? (j = D) : (E.sibling = D),
            (E = D));
      return (
        e &&
          N.forEach(function (ve) {
            return t(y, ve);
          }),
        se && zn(y, P),
        j
      );
    }
    function C(y, p, g, w) {
      if (
        (typeof g == "object" &&
          g !== null &&
          g.type === Sr &&
          g.key === null &&
          (g = g.props.children),
        typeof g == "object" && g !== null)
      ) {
        switch (g.$$typeof) {
          case ws:
            e: {
              for (var j = g.key, E = p; E !== null; ) {
                if (E.key === j) {
                  if (((j = g.type), j === Sr)) {
                    if (E.tag === 7) {
                      n(y, E.sibling),
                        (p = i(E, g.props.children)),
                        (p.return = y),
                        (y = p);
                      break e;
                    }
                  } else if (
                    E.elementType === j ||
                    (typeof j == "object" &&
                      j !== null &&
                      j.$$typeof === an &&
                      yd(j) === E.type)
                  ) {
                    n(y, E.sibling),
                      (p = i(E, g.props)),
                      (p.ref = ui(y, E, g)),
                      (p.return = y),
                      (y = p);
                    break e;
                  }
                  n(y, E);
                  break;
                } else t(y, E);
                E = E.sibling;
              }
              g.type === Sr
                ? ((p = Zn(g.props.children, y.mode, w, g.key)),
                  (p.return = y),
                  (y = p))
                : ((w = eo(g.type, g.key, g.props, null, y.mode, w)),
                  (w.ref = ui(y, p, g)),
                  (w.return = y),
                  (y = w));
            }
            return o(y);
          case wr:
            e: {
              for (E = g.key; p !== null; ) {
                if (p.key === E)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === g.containerInfo &&
                    p.stateNode.implementation === g.implementation
                  ) {
                    n(y, p.sibling),
                      (p = i(p, g.children || [])),
                      (p.return = y),
                      (y = p);
                    break e;
                  } else {
                    n(y, p);
                    break;
                  }
                else t(y, p);
                p = p.sibling;
              }
              (p = ol(g, y.mode, w)), (p.return = y), (y = p);
            }
            return o(y);
          case an:
            return (E = g._init), C(y, p, E(g._payload), w);
        }
        if (gi(g)) return v(y, p, g, w);
        if (ii(g)) return x(y, p, g, w);
        Fs(y, g);
      }
      return (typeof g == "string" && g !== "") || typeof g == "number"
        ? ((g = "" + g),
          p !== null && p.tag === 6
            ? (n(y, p.sibling), (p = i(p, g)), (p.return = y), (y = p))
            : (n(y, p), (p = sl(g, y.mode, w)), (p.return = y), (y = p)),
          o(y))
        : n(y, p);
    }
    return C;
  }
  var Gr = Xm(!0),
    Zm = Xm(!1),
    ls = {},
    Mt = Dn(ls),
    Gi = Dn(ls),
    Ki = Dn(ls);
  function Yn(e) {
    if (e === ls) throw Error(k(174));
    return e;
  }
  function vc(e, t) {
    switch ((J(Ki, t), J(Gi, e), J(Mt, ls), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ll(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ll(t, e));
    }
    re(Mt), J(Mt, t);
  }
  function Kr() {
    re(Mt), re(Gi), re(Ki);
  }
  function qm(e) {
    Yn(Ki.current);
    var t = Yn(Mt.current),
      n = Ll(t, e.type);
    t !== n && (J(Gi, e), J(Mt, n));
  }
  function xc(e) {
    Gi.current === e && (re(Mt), re(Gi));
  }
  var oe = Dn(0);
  function So(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Ja = [];
  function wc() {
    for (var e = 0; e < Ja.length; e++)
      Ja[e]._workInProgressVersionPrimary = null;
    Ja.length = 0;
  }
  var Qs = tn.ReactCurrentDispatcher,
    el = tn.ReactCurrentBatchConfig,
    tr = 0,
    le = null,
    xe = null,
    Ne = null,
    To = !1,
    Ei = !1,
    Yi = 0,
    f1 = 0;
  function Fe() {
    throw Error(k(321));
  }
  function Sc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Et(e[n], t[n])) return !1;
    return !0;
  }
  function Tc(e, t, n, r, i, s) {
    if (
      ((tr = s),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Qs.current = e === null || e.memoizedState === null ? m1 : g1),
      (e = n(r, i)),
      Ei)
    ) {
      s = 0;
      do {
        if (((Ei = !1), (Yi = 0), 25 <= s)) throw Error(k(301));
        (s += 1),
          (Ne = xe = null),
          (t.updateQueue = null),
          (Qs.current = y1),
          (e = n(r, i));
      } while (Ei);
    }
    if (
      ((Qs.current = No),
      (t = xe !== null && xe.next !== null),
      (tr = 0),
      (Ne = xe = le = null),
      (To = !1),
      t)
    )
      throw Error(k(300));
    return e;
  }
  function Nc() {
    var e = Yi !== 0;
    return (Yi = 0), e;
  }
  function bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ne === null ? (le.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
  }
  function mt() {
    if (xe === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Ne === null ? le.memoizedState : Ne.next;
    if (t !== null) (Ne = t), (xe = e);
    else {
      if (e === null) throw Error(k(310));
      (xe = e),
        (e = {
          memoizedState: xe.memoizedState,
          baseState: xe.baseState,
          baseQueue: xe.baseQueue,
          queue: xe.queue,
          next: null,
        }),
        Ne === null ? (le.memoizedState = Ne = e) : (Ne = Ne.next = e);
    }
    return Ne;
  }
  function Qi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function tl(e) {
    var t = mt(),
      n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = xe,
      i = r.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (i !== null) {
        var o = i.next;
        (i.next = s.next), (s.next = o);
      }
      (r.baseQueue = i = s), (n.pending = null);
    }
    if (i !== null) {
      (s = i.next), (r = r.baseState);
      var a = (o = null),
        l = null,
        u = s;
      do {
        var f = u.lane;
        if ((tr & f) === f)
          l !== null &&
            (l = l.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var d = {
            lane: f,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
            (le.lanes |= f),
            (nr |= f);
        }
        u = u.next;
      } while (u !== null && u !== s);
      l === null ? (o = r) : (l.next = a),
        Et(r, t.memoizedState) || (He = !0),
        (t.memoizedState = r),
        (t.baseState = o),
        (t.baseQueue = l),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (s = i.lane), (le.lanes |= s), (nr |= s), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function nl(e) {
    var t = mt(),
      n = t.queue;
    if (n === null) throw Error(k(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var o = (i = i.next);
      do (s = e(s, o.action)), (o = o.next);
      while (o !== i);
      Et(s, t.memoizedState) || (He = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, r];
  }
  function Jm() {}
  function eg(e, t) {
    var n = le,
      r = mt(),
      i = t(),
      s = !Et(r.memoizedState, i);
    if (
      (s && ((r.memoizedState = i), (He = !0)),
      (r = r.queue),
      jc(rg.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Xi(9, ng.bind(null, n, r, i, t), void 0, null),
        je === null)
      )
        throw Error(k(349));
      tr & 30 || tg(n, t, i);
    }
    return i;
  }
  function tg(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ng(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ig(t) && sg(e);
  }
  function rg(e, t, n) {
    return n(function () {
      ig(t) && sg(e);
    });
  }
  function ig(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Et(e, n);
    } catch {
      return !0;
    }
  }
  function sg(e) {
    var t = qt(e, 1);
    t !== null && jt(t, e, 1, -1);
  }
  function vd(e) {
    var t = bt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = p1.bind(null, le, e)),
      [t.memoizedState, e]
    );
  }
  function Xi(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function og() {
    return mt().memoizedState;
  }
  function Xs(e, t, n, r) {
    var i = bt();
    (le.flags |= e),
      (i.memoizedState = Xi(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function Qo(e, t, n, r) {
    var i = mt();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (xe !== null) {
      var o = xe.memoizedState;
      if (((s = o.destroy), r !== null && Sc(r, o.deps))) {
        i.memoizedState = Xi(t, n, s, r);
        return;
      }
    }
    (le.flags |= e), (i.memoizedState = Xi(1 | t, n, s, r));
  }
  function xd(e, t) {
    return Xs(8390656, 8, e, t);
  }
  function jc(e, t) {
    return Qo(2048, 8, e, t);
  }
  function ag(e, t) {
    return Qo(4, 2, e, t);
  }
  function lg(e, t) {
    return Qo(4, 4, e, t);
  }
  function ug(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function cg(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Qo(4, 4, ug.bind(null, t, e), n)
    );
  }
  function Ec() {}
  function fg(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sc(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function dg(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sc(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function hg(e, t, n) {
    return tr & 21
      ? (Et(n, t) ||
          ((n = gm()), (le.lanes |= n), (nr |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
  }
  function d1(e, t) {
    var n = Q;
    (Q = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = el.transition;
    el.transition = {};
    try {
      e(!1), t();
    } finally {
      (Q = n), (el.transition = r);
    }
  }
  function pg() {
    return mt().memoizedState;
  }
  function h1(e, t, n) {
    var r = Tn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      mg(e))
    )
      gg(t, n);
    else if (((n = Gm(e, t, n, r)), n !== null)) {
      var i = Le();
      jt(n, e, r, i), yg(n, t, r);
    }
  }
  function p1(e, t, n) {
    var r = Tn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (mg(e)) gg(t, i);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var o = t.lastRenderedState,
            a = s(o, n);
          if (((i.hasEagerState = !0), (i.eagerState = a), Et(a, o))) {
            var l = t.interleaved;
            l === null
              ? ((i.next = i), gc(t))
              : ((i.next = l.next), (l.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Gm(e, t, i, r)),
        n !== null && ((i = Le()), jt(n, e, r, i), yg(n, t, r));
    }
  }
  function mg(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function gg(e, t) {
    Ei = To = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function yg(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n);
    }
  }
  var No = {
      readContext: pt,
      useCallback: Fe,
      useContext: Fe,
      useEffect: Fe,
      useImperativeHandle: Fe,
      useInsertionEffect: Fe,
      useLayoutEffect: Fe,
      useMemo: Fe,
      useReducer: Fe,
      useRef: Fe,
      useState: Fe,
      useDebugValue: Fe,
      useDeferredValue: Fe,
      useTransition: Fe,
      useMutableSource: Fe,
      useSyncExternalStore: Fe,
      useId: Fe,
      unstable_isNewReconciler: !1,
    },
    m1 = {
      readContext: pt,
      useCallback: function (e, t) {
        return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: pt,
      useEffect: xd,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Xs(4194308, 4, ug.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Xs(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Xs(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = bt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = bt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = h1.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = bt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: vd,
      useDebugValue: Ec,
      useDeferredValue: function (e) {
        return (bt().memoizedState = e);
      },
      useTransition: function () {
        var e = vd(!1),
          t = e[0];
        return (e = d1.bind(null, e[1])), (bt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          i = bt();
        if (se) {
          if (n === void 0) throw Error(k(407));
          n = n();
        } else {
          if (((n = t()), je === null)) throw Error(k(349));
          tr & 30 || tg(r, t, n);
        }
        i.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (i.queue = s),
          xd(rg.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          Xi(9, ng.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = bt(),
          t = je.identifierPrefix;
        if (se) {
          var n = Ht,
            r = Ut;
          (n = (r & ~(1 << (32 - Nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Yi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = f1++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    g1 = {
      readContext: pt,
      useCallback: fg,
      useContext: pt,
      useEffect: jc,
      useImperativeHandle: cg,
      useInsertionEffect: ag,
      useLayoutEffect: lg,
      useMemo: dg,
      useReducer: tl,
      useRef: og,
      useState: function () {
        return tl(Qi);
      },
      useDebugValue: Ec,
      useDeferredValue: function (e) {
        var t = mt();
        return hg(t, xe.memoizedState, e);
      },
      useTransition: function () {
        var e = tl(Qi)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Jm,
      useSyncExternalStore: eg,
      useId: pg,
      unstable_isNewReconciler: !1,
    },
    y1 = {
      readContext: pt,
      useCallback: fg,
      useContext: pt,
      useEffect: jc,
      useImperativeHandle: cg,
      useInsertionEffect: ag,
      useLayoutEffect: lg,
      useMemo: dg,
      useReducer: nl,
      useRef: og,
      useState: function () {
        return nl(Qi);
      },
      useDebugValue: Ec,
      useDeferredValue: function (e) {
        var t = mt();
        return xe === null ? (t.memoizedState = e) : hg(t, xe.memoizedState, e);
      },
      useTransition: function () {
        var e = nl(Qi)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: Jm,
      useSyncExternalStore: eg,
      useId: pg,
      unstable_isNewReconciler: !1,
    };
  function Yr(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Wv(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (s) {
      i =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function rl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function ou(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var v1 = typeof WeakMap == "function" ? WeakMap : Map;
  function vg(e, t, n) {
    (n = Kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Eo || ((Eo = !0), (gu = r)), ou(e, t);
      }),
      n
    );
  }
  function xg(e, t, n) {
    (n = Kt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          ou(e, t);
        });
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          ou(e, t),
            typeof r != "function" &&
              (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
          var o = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : "",
          });
        }),
      n
    );
  }
  function wd(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new v1();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = _1.bind(null, e, t, n)), t.then(e, e));
  }
  function Sd(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Td(e, t, n, r, i) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Kt(-1, 1)), (t.tag = 2), wn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var x1 = tn.ReactCurrentOwner,
    He = !1;
  function Re(e, t, n, r) {
    t.child = e === null ? Zm(t, null, n, r) : Gr(t, e.child, n, r);
  }
  function Nd(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return (
      zr(t, i),
      (r = Tc(e, t, n, r, s, i)),
      (n = Nc()),
      e !== null && !He
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Jt(e, t, i))
        : (se && n && cc(t), (t.flags |= 1), Re(e, t, r, i), t.child)
    );
  }
  function jd(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !Oc(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), wg(e, t, s, r, i))
        : ((e = eo(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), !(e.lanes & i))) {
      var o = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Bi), n(o, r) && e.ref === t.ref)
      )
        return Jt(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Nn(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function wg(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Bi(s, r) && e.ref === t.ref)
        if (((He = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
          e.flags & 131072 && (He = !0);
        else return (t.lanes = e.lanes), Jt(e, t, i);
    }
    return au(e, t, n, r, i);
  }
  function Sg(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          J(Fr, Xe),
          (Xe |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            J(Fr, Xe),
            (Xe |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          J(Fr, Xe),
          (Xe |= r);
      }
    else
      s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        J(Fr, Xe),
        (Xe |= r);
    return Re(e, t, i, n), t.child;
  }
  function Tg(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function au(e, t, n, r, i) {
    var s = Ge(n) ? Jn : De.current;
    return (
      (s = Hr(t, s)),
      zr(t, i),
      (n = Tc(e, t, n, r, s, i)),
      (r = Nc()),
      e !== null && !He
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Jt(e, t, i))
        : (se && r && cc(t), (t.flags |= 1), Re(e, t, n, i), t.child)
    );
  }
  function Ed(e, t, n, r, i) {
    if (Ge(n)) {
      var s = !0;
      mo(t);
    } else s = !1;
    if ((zr(t, i), t.stateNode === null))
      Zs(e, t), Qm(t, n, r), su(t, n, r, i), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps;
      o.props = a;
      var l = o.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = pt(u))
        : ((u = Ge(n) ? Jn : De.current), (u = Hr(t, u)));
      var f = n.getDerivedStateFromProps,
        d =
          typeof f == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      d ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== r || l !== u) && gd(t, o, r, u)),
        (ln = !1);
      var h = t.memoizedState;
      (o.state = h),
        wo(t, r, o, i),
        (l = t.memoizedState),
        a !== r || h !== l || We.current || ln
          ? (typeof f == "function" && (iu(t, n, f, r), (l = t.memoizedState)),
            (a = ln || md(t, n, a, r, h, l, u))
              ? (d ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = l)),
            (o.props = r),
            (o.state = l),
            (o.context = u),
            (r = a))
          : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (o = t.stateNode),
        Km(e, t),
        (a = t.memoizedProps),
        (u = t.type === t.elementType ? a : wt(t.type, a)),
        (o.props = u),
        (d = t.pendingProps),
        (h = o.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = pt(l))
          : ((l = Ge(n) ? Jn : De.current), (l = Hr(t, l)));
      var m = n.getDerivedStateFromProps;
      (f =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== d || h !== l) && gd(t, o, r, l)),
        (ln = !1),
        (h = t.memoizedState),
        (o.state = h),
        wo(t, r, o, i);
      var v = t.memoizedState;
      a !== d || h !== v || We.current || ln
        ? (typeof m == "function" && (iu(t, n, m, r), (v = t.memoizedState)),
          (u = ln || md(t, n, u, r, h, v, l) || !1)
            ? (f ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(r, v, l),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(r, v, l)),
              typeof o.componentDidUpdate == "function" && (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (a === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && h === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = v)),
          (o.props = r),
          (o.state = v),
          (o.context = l),
          (r = u))
        : (typeof o.componentDidUpdate != "function" ||
            (a === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && h === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return lu(e, t, n, r, s, i);
  }
  function lu(e, t, n, r, i, s) {
    Tg(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && cd(t, n, !1), Jt(e, t, s);
    (r = t.stateNode), (x1.current = t);
    var a =
      o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && o
        ? ((t.child = Gr(t, e.child, null, s)), (t.child = Gr(t, null, a, s)))
        : Re(e, t, a, s),
      (t.memoizedState = r.state),
      i && cd(t, n, !0),
      t.child
    );
  }
  function Ng(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ud(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ud(e, t.context, !1),
      vc(e, t.containerInfo);
  }
  function Cd(e, t, n, r, i) {
    return Wr(), dc(i), (t.flags |= 256), Re(e, t, n, r), t.child;
  }
  var uu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function jg(e, t, n) {
    var r = t.pendingProps,
      i = oe.current,
      s = !1,
      o = (t.flags & 128) !== 0,
      a;
    if (
      ((a = o) ||
        (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      J(oe, i & 1),
      e === null)
    )
      return (
        nu(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((o = r.children),
            (e = r.fallback),
            s
              ? ((r = t.mode),
                (s = t.child),
                (o = { mode: "hidden", children: o }),
                !(r & 1) && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = o))
                  : (s = qo(o, r, 0, null)),
                (e = Zn(e, r, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = cu(n)),
                (t.memoizedState = uu),
                e)
              : Cc(t, o))
      );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return w1(e, t, o, r, a, i, n);
    if (s) {
      (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = Nn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (s = Nn(a, s)) : ((s = Zn(s, o, n, null)), (s.flags |= 2)),
        (s.return = t),
        (r.return = t),
        (r.sibling = s),
        (t.child = r),
        (r = s),
        (s = t.child),
        (o = e.child.memoizedState),
        (o =
          o === null
            ? cu(n)
            : {
                baseLanes: o.baseLanes | n,
                cachePool: null,
                transitions: o.transitions,
              }),
        (s.memoizedState = o),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = uu),
        r
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (r = Nn(s, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Cc(e, t) {
    return (
      (t = qo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function _s(e, t, n, r) {
    return (
      r !== null && dc(r),
      Gr(t, e.child, null, n),
      (e = Cc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function w1(e, t, n, r, i, s, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = rl(Error(k(422)))), _s(e, t, o, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((s = r.fallback),
          (i = t.mode),
          (r = qo({ mode: "visible", children: r.children }, i, 0, null)),
          (s = Zn(s, i, o, null)),
          (s.flags |= 2),
          (r.return = t),
          (s.return = t),
          (r.sibling = s),
          (t.child = r),
          t.mode & 1 && Gr(t, e.child, null, o),
          (t.child.memoizedState = cu(o)),
          (t.memoizedState = uu),
          s);
    if (!(t.mode & 1)) return _s(e, t, o, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (s = Error(k(419))), (r = rl(s, r, void 0)), _s(e, t, o, r)
      );
    }
    if (((a = (o & e.childLanes) !== 0), He || a)) {
      if (((r = je), r !== null)) {
        switch (o & -o) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = i & (r.suspendedLanes | o) ? 0 : i),
          i !== 0 &&
            i !== s.retryLane &&
            ((s.retryLane = i), qt(e, i), jt(r, e, i, -1));
      }
      return _c(), (r = rl(Error(k(421)))), _s(e, t, o, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = O1.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (Ze = xn(i.nextSibling)),
        (et = t),
        (se = !0),
        (Tt = null),
        e !== null &&
          ((ut[ct++] = Ut),
          (ut[ct++] = Ht),
          (ut[ct++] = er),
          (Ut = e.id),
          (Ht = e.overflow),
          (er = t)),
        (t = Cc(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Pd(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ru(e.return, t, n);
  }
  function il(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = r),
        (s.tail = n),
        (s.tailMode = i));
  }
  function Eg(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      s = r.tail;
    if ((Re(e, t, r.children, n), (r = oe.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Pd(e, n, t);
          else if (e.tag === 19) Pd(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((J(oe, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && So(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            il(t, !1, i, n, s);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && So(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          il(t, !0, n, null, s);
          break;
        case "together":
          il(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Zs(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function Jt(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (nr |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(k(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Nn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function S1(e, t, n) {
    switch (t.tag) {
      case 3:
        Ng(t), Wr();
        break;
      case 5:
        qm(t);
        break;
      case 1:
        Ge(t.type) && mo(t);
        break;
      case 4:
        vc(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        J(vo, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (J(oe, oe.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? jg(e, t, n)
            : (J(oe, oe.current & 1),
              (e = Jt(e, t, n)),
              e !== null ? e.sibling : null);
        J(oe, oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Eg(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          J(oe, oe.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Sg(e, t, n);
    }
    return Jt(e, t, n);
  }
  var Cg, fu, Pg, kg;
  Cg = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  fu = function () {};
  Pg = function (e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
      (e = t.stateNode), Yn(Mt.current);
      var s = null;
      switch (n) {
        case "input":
          (i = Ol(e, i)), (r = Ol(e, r)), (s = []);
          break;
        case "select":
          (i = ue({}, i, { value: void 0 })),
            (r = ue({}, r, { value: void 0 })),
            (s = []);
          break;
        case "textarea":
          (i = Rl(e, i)), (r = Rl(e, r)), (s = []);
          break;
        default:
          typeof i.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = ho);
      }
      Vl(n, r);
      var o;
      n = null;
      for (u in i)
        if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
          if (u === "style") {
            var a = i[u];
            for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
          } else
            u !== "dangerouslySetInnerHTML" &&
              u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              u !== "autoFocus" &&
              (Mi.hasOwnProperty(u)
                ? s || (s = [])
                : (s = s || []).push(u, null));
      for (u in r) {
        var l = r[u];
        if (
          ((a = i != null ? i[u] : void 0),
          r.hasOwnProperty(u) && l !== a && (l != null || a != null))
        )
          if (u === "style")
            if (a) {
              for (o in a)
                !a.hasOwnProperty(o) ||
                  (l && l.hasOwnProperty(o)) ||
                  (n || (n = {}), (n[o] = ""));
              for (o in l)
                l.hasOwnProperty(o) &&
                  a[o] !== l[o] &&
                  (n || (n = {}), (n[o] = l[o]));
            } else n || (s || (s = []), s.push(u, n)), (n = l);
          else
            u === "dangerouslySetInnerHTML"
              ? ((l = l ? l.__html : void 0),
                (a = a ? a.__html : void 0),
                l != null && a !== l && (s = s || []).push(u, l))
              : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (s = s || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (Mi.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && te("scroll", e),
                    s || a === l || (s = []))
                  : (s = s || []).push(u, l));
      }
      n && (s = s || []).push("style", n);
      var u = s;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  kg = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function ci(e, t) {
    if (!se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function T1(e, t, n) {
    var r = t.pendingProps;
    switch ((fc(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _e(t), null;
      case 1:
        return Ge(t.type) && po(), _e(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Kr(),
          re(We),
          re(De),
          wc(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (As(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Tt !== null && (xu(Tt), (Tt = null)))),
          fu(e, t),
          _e(t),
          null
        );
      case 5:
        xc(t);
        var i = Yn(Ki.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Pg(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(k(166));
            return _e(t), null;
          }
          if (((e = Yn(Mt.current)), As(t))) {
            (r = t.stateNode), (n = t.type);
            var s = t.memoizedProps;
            switch (((r[_t] = t), (r[Wi] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                te("cancel", r), te("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                te("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < vi.length; i++) te(vi[i], r);
                break;
              case "source":
                te("error", r);
                break;
              case "img":
              case "image":
              case "link":
                te("error", r), te("load", r);
                break;
              case "details":
                te("toggle", r);
                break;
              case "input":
                Rf(r, s), te("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!s.multiple }),
                  te("invalid", r);
                break;
              case "textarea":
                Vf(r, s), te("invalid", r);
            }
            Vl(n, s), (i = null);
            for (var o in s)
              if (s.hasOwnProperty(o)) {
                var a = s[o];
                o === "children"
                  ? typeof a == "string"
                    ? r.textContent !== a &&
                      (s.suppressHydrationWarning !== !0 &&
                        bs(r.textContent, a, e),
                      (i = ["children", a]))
                    : typeof a == "number" &&
                      r.textContent !== "" + a &&
                      (s.suppressHydrationWarning !== !0 &&
                        bs(r.textContent, a, e),
                      (i = ["children", "" + a]))
                  : Mi.hasOwnProperty(o) &&
                    a != null &&
                    o === "onScroll" &&
                    te("scroll", r);
              }
            switch (n) {
              case "input":
                Ss(r), Lf(r, s, !0);
                break;
              case "textarea":
                Ss(r), $f(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (r.onclick = ho);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = tm(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = o.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = o.createElement(n, { is: r.is }))
                  : ((e = o.createElement(n)),
                    n === "select" &&
                      ((o = e),
                      r.multiple
                        ? (o.multiple = !0)
                        : r.size && (o.size = r.size)))
                : (e = o.createElementNS(e, n)),
              (e[_t] = t),
              (e[Wi] = r),
              Cg(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((o = $l(n, r)), n)) {
                case "dialog":
                  te("cancel", e), te("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  te("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < vi.length; i++) te(vi[i], e);
                  i = r;
                  break;
                case "source":
                  te("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  te("error", e), te("load", e), (i = r);
                  break;
                case "details":
                  te("toggle", e), (i = r);
                  break;
                case "input":
                  Rf(e, r), (i = Ol(e, r)), te("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = ue({}, r, { value: void 0 })),
                    te("invalid", e);
                  break;
                case "textarea":
                  Vf(e, r), (i = Rl(e, r)), te("invalid", e);
                  break;
                default:
                  i = r;
              }
              Vl(n, i), (a = i);
              for (s in a)
                if (a.hasOwnProperty(s)) {
                  var l = a[s];
                  s === "style"
                    ? im(e, l)
                    : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && nm(e, l))
                    : s === "children"
                    ? typeof l == "string"
                      ? (n !== "textarea" || l !== "") && Ri(e, l)
                      : typeof l == "number" && Ri(e, "" + l)
                    : s !== "suppressContentEditableWarning" &&
                      s !== "suppressHydrationWarning" &&
                      s !== "autoFocus" &&
                      (Mi.hasOwnProperty(s)
                        ? l != null && s === "onScroll" && te("scroll", e)
                        : l != null && Xu(e, s, l, o));
                }
              switch (n) {
                case "input":
                  Ss(e), Lf(e, r, !1);
                  break;
                case "textarea":
                  Ss(e), $f(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + kn(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (s = r.value),
                    s != null
                      ? Lr(e, !!r.multiple, s, !1)
                      : r.defaultValue != null &&
                        Lr(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = ho);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return _e(t), null;
      case 6:
        if (e && t.stateNode != null) kg(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
          if (((n = Yn(Ki.current)), Yn(Mt.current), As(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[_t] = t),
              (s = r.nodeValue !== n) && ((e = et), e !== null))
            )
              switch (e.tag) {
                case 3:
                  bs(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    bs(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[_t] = t),
              (t.stateNode = r);
        }
        return _e(t), null;
      case 13:
        if (
          (re(oe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (se && Ze !== null && t.mode & 1 && !(t.flags & 128))
            Wm(), Wr(), (t.flags |= 98560), (s = !1);
          else if (((s = As(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(k(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(k(317));
              s[_t] = t;
            } else
              Wr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            _e(t), (s = !1);
          } else Tt !== null && (xu(Tt), (Tt = null)), (s = !0);
          if (!s) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || oe.current & 1 ? we === 0 && (we = 3) : _c())),
            t.updateQueue !== null && (t.flags |= 4),
            _e(t),
            null);
      case 4:
        return (
          Kr(),
          fu(e, t),
          e === null && Ui(t.stateNode.containerInfo),
          _e(t),
          null
        );
      case 10:
        return mc(t.type._context), _e(t), null;
      case 17:
        return Ge(t.type) && po(), _e(t), null;
      case 19:
        if ((re(oe), (s = t.memoizedState), s === null)) return _e(t), null;
        if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
          if (r) ci(s, !1);
          else {
            if (we !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((o = So(e)), o !== null)) {
                  for (
                    t.flags |= 128,
                      ci(s, !1),
                      r = o.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (s = n),
                      (e = r),
                      (s.flags &= 14680066),
                      (o = s.alternate),
                      o === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = o.childLanes),
                          (s.lanes = o.lanes),
                          (s.child = o.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = o.memoizedProps),
                          (s.memoizedState = o.memoizedState),
                          (s.updateQueue = o.updateQueue),
                          (s.type = o.type),
                          (e = o.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return J(oe, (oe.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            s.tail !== null &&
              me() > Qr &&
              ((t.flags |= 128), (r = !0), ci(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = So(o)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                ci(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !o.alternate &&
                  !se)
              )
                return _e(t), null;
            } else
              2 * me() - s.renderingStartTime > Qr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), ci(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((o.sibling = t.child), (t.child = o))
            : ((n = s.last),
              n !== null ? (n.sibling = o) : (t.child = o),
              (s.last = o));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = me()),
            (t.sibling = null),
            (n = oe.current),
            J(oe, r ? (n & 1) | 2 : n & 1),
            t)
          : (_e(t), null);
      case 22:
      case 23:
        return (
          Fc(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Xe & 1073741824 &&
              (_e(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : _e(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(k(156, t.tag));
  }
  function N1(e, t) {
    switch ((fc(t), t.tag)) {
      case 1:
        return (
          Ge(t.type) && po(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Kr(),
          re(We),
          re(De),
          wc(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return xc(t), null;
      case 13:
        if (
          (re(oe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(k(340));
          Wr();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return re(oe), null;
      case 4:
        return Kr(), null;
      case 10:
        return mc(t.type._context), null;
      case 22:
      case 23:
        return Fc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Os = !1,
    Oe = !1,
    j1 = typeof WeakSet == "function" ? WeakSet : Set,
    F = null;
  function Ar(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          ce(e, t, r);
        }
      else n.current = null;
  }
  function du(e, t, n) {
    try {
      n();
    } catch (r) {
      ce(e, t, r);
    }
  }
  var kd = !1;
  function E1(e, t) {
    if (((Ql = uo), (e = _m()), uc(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              s = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, s.nodeType;
            } catch {
              n = null;
              break e;
            }
            var o = 0,
              a = -1,
              l = -1,
              u = 0,
              f = 0,
              d = e,
              h = null;
            t: for (;;) {
              for (
                var m;
                d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                  d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                  d.nodeType === 3 && (o += d.nodeValue.length),
                  (m = d.firstChild) !== null;

              )
                (h = d), (d = m);
              for (;;) {
                if (d === e) break t;
                if (
                  (h === n && ++u === i && (a = o),
                  h === s && ++f === r && (l = o),
                  (m = d.nextSibling) !== null)
                )
                  break;
                (d = h), (h = d.parentNode);
              }
              d = m;
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Xl = { focusedElem: e, selectionRange: n }, uo = !1, F = t;
      F !== null;

    )
      if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (F = e);
      else
        for (; F !== null; ) {
          t = F;
          try {
            var v = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (v !== null) {
                    var x = v.memoizedProps,
                      C = v.memoizedState,
                      y = t.stateNode,
                      p = y.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? x : wt(t.type, x),
                        C
                      );
                    y.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var g = t.stateNode.containerInfo;
                  g.nodeType === 1
                    ? (g.textContent = "")
                    : g.nodeType === 9 &&
                      g.documentElement &&
                      g.removeChild(g.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(k(163));
              }
          } catch (w) {
            ce(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (F = e);
            break;
          }
          F = t.return;
        }
    return (v = kd), (kd = !1), v;
  }
  function Ci(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var s = i.destroy;
          (i.destroy = void 0), s !== void 0 && du(t, n, s);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Xo(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function hu(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function bg(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), bg(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[_t],
          delete t[Wi],
          delete t[Jl],
          delete t[a1],
          delete t[l1])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Ag(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function bd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ag(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function pu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ho));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (pu(e, t, n), e = e.sibling; e !== null; )
        pu(e, t, n), (e = e.sibling);
  }
  function mu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (mu(e, t, n), e = e.sibling; e !== null; )
        mu(e, t, n), (e = e.sibling);
  }
  var Ce = null,
    St = !1;
  function rn(e, t, n) {
    for (n = n.child; n !== null; ) Fg(e, t, n), (n = n.sibling);
  }
  function Fg(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Bo, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Oe || Ar(n, t);
      case 6:
        var r = Ce,
          i = St;
        (Ce = null),
          rn(e, t, n),
          (Ce = r),
          (St = i),
          Ce !== null &&
            (St
              ? ((e = Ce),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Ce.removeChild(n.stateNode));
        break;
      case 18:
        Ce !== null &&
          (St
            ? ((e = Ce),
              (n = n.stateNode),
              e.nodeType === 8
                ? Za(e.parentNode, n)
                : e.nodeType === 1 && Za(e, n),
              Ii(e))
            : Za(Ce, n.stateNode));
        break;
      case 4:
        (r = Ce),
          (i = St),
          (Ce = n.stateNode.containerInfo),
          (St = !0),
          rn(e, t, n),
          (Ce = r),
          (St = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Oe &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var s = i,
              o = s.destroy;
            (s = s.tag),
              o !== void 0 && (s & 2 || s & 4) && du(n, t, o),
              (i = i.next);
          } while (i !== r);
        }
        rn(e, t, n);
        break;
      case 1:
        if (
          !Oe &&
          (Ar(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (a) {
            ce(n, t, a);
          }
        rn(e, t, n);
        break;
      case 21:
        rn(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Oe = (r = Oe) || n.memoizedState !== null), rn(e, t, n), (Oe = r))
          : rn(e, t, n);
        break;
      default:
        rn(e, t, n);
    }
  }
  function Ad(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new j1()),
        t.forEach(function (r) {
          var i = D1.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function vt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var s = e,
            o = t,
            a = o;
          e: for (; a !== null; ) {
            switch (a.tag) {
              case 5:
                (Ce = a.stateNode), (St = !1);
                break e;
              case 3:
                (Ce = a.stateNode.containerInfo), (St = !0);
                break e;
              case 4:
                (Ce = a.stateNode.containerInfo), (St = !0);
                break e;
            }
            a = a.return;
          }
          if (Ce === null) throw Error(k(160));
          Fg(s, o, i), (Ce = null), (St = !1);
          var l = i.alternate;
          l !== null && (l.return = null), (i.return = null);
        } catch (u) {
          ce(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) _g(t, e), (t = t.sibling);
  }
  function _g(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vt(t, e), kt(e), r & 4)) {
          try {
            Ci(3, e, e.return), Xo(3, e);
          } catch (x) {
            ce(e, e.return, x);
          }
          try {
            Ci(5, e, e.return);
          } catch (x) {
            ce(e, e.return, x);
          }
        }
        break;
      case 1:
        vt(t, e), kt(e), r & 512 && n !== null && Ar(n, n.return);
        break;
      case 5:
        if (
          (vt(t, e),
          kt(e),
          r & 512 && n !== null && Ar(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Ri(i, "");
          } catch (x) {
            ce(e, e.return, x);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var s = e.memoizedProps,
            o = n !== null ? n.memoizedProps : s,
            a = e.type,
            l = e.updateQueue;
          if (((e.updateQueue = null), l !== null))
            try {
              a === "input" && s.type === "radio" && s.name != null && Jp(i, s),
                $l(a, o);
              var u = $l(a, s);
              for (o = 0; o < l.length; o += 2) {
                var f = l[o],
                  d = l[o + 1];
                f === "style"
                  ? im(i, d)
                  : f === "dangerouslySetInnerHTML"
                  ? nm(i, d)
                  : f === "children"
                  ? Ri(i, d)
                  : Xu(i, f, d, u);
              }
              switch (a) {
                case "input":
                  Dl(i, s);
                  break;
                case "textarea":
                  em(i, s);
                  break;
                case "select":
                  var h = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var m = s.value;
                  m != null
                    ? Lr(i, !!s.multiple, m, !1)
                    : h !== !!s.multiple &&
                      (s.defaultValue != null
                        ? Lr(i, !!s.multiple, s.defaultValue, !0)
                        : Lr(i, !!s.multiple, s.multiple ? [] : "", !1));
              }
              i[Wi] = s;
            } catch (x) {
              ce(e, e.return, x);
            }
        }
        break;
      case 6:
        if ((vt(t, e), kt(e), r & 4)) {
          if (e.stateNode === null) throw Error(k(162));
          (i = e.stateNode), (s = e.memoizedProps);
          try {
            i.nodeValue = s;
          } catch (x) {
            ce(e, e.return, x);
          }
        }
        break;
      case 3:
        if (
          (vt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ii(t.containerInfo);
          } catch (x) {
            ce(e, e.return, x);
          }
        break;
      case 4:
        vt(t, e), kt(e);
        break;
      case 13:
        vt(t, e),
          kt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((s = i.memoizedState !== null),
            (i.stateNode.isHidden = s),
            !s ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (bc = me())),
          r & 4 && Ad(e);
        break;
      case 22:
        if (
          ((f = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Oe = (u = Oe) || f), vt(t, e), (Oe = u)) : vt(t, e),
          kt(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
          )
            for (F = e, f = e.child; f !== null; ) {
              for (d = F = f; F !== null; ) {
                switch (((h = F), (m = h.child), h.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ci(4, h, h.return);
                    break;
                  case 1:
                    Ar(h, h.return);
                    var v = h.stateNode;
                    if (typeof v.componentWillUnmount == "function") {
                      (r = h), (n = h.return);
                      try {
                        (t = r),
                          (v.props = t.memoizedProps),
                          (v.state = t.memoizedState),
                          v.componentWillUnmount();
                      } catch (x) {
                        ce(r, n, x);
                      }
                    }
                    break;
                  case 5:
                    Ar(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      _d(d);
                      continue;
                    }
                }
                m !== null ? ((m.return = h), (F = m)) : _d(d);
              }
              f = f.sibling;
            }
          e: for (f = null, d = e; ; ) {
            if (d.tag === 5) {
              if (f === null) {
                f = d;
                try {
                  (i = d.stateNode),
                    u
                      ? ((s = i.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((a = d.stateNode),
                        (l = d.memoizedProps.style),
                        (o =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = rm("display", o)));
                } catch (x) {
                  ce(e, e.return, x);
                }
              }
            } else if (d.tag === 6) {
              if (f === null)
                try {
                  d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                } catch (x) {
                  ce(e, e.return, x);
                }
            } else if (
              ((d.tag !== 22 && d.tag !== 23) ||
                d.memoizedState === null ||
                d === e) &&
              d.child !== null
            ) {
              (d.child.return = d), (d = d.child);
              continue;
            }
            if (d === e) break e;
            for (; d.sibling === null; ) {
              if (d.return === null || d.return === e) break e;
              f === d && (f = null), (d = d.return);
            }
            f === d && (f = null),
              (d.sibling.return = d.return),
              (d = d.sibling);
          }
        }
        break;
      case 19:
        vt(t, e), kt(e), r & 4 && Ad(e);
        break;
      case 21:
        break;
      default:
        vt(t, e), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Ag(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(k(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Ri(i, ""), (r.flags &= -33));
            var s = bd(e);
            mu(e, s, i);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo,
              a = bd(e);
            pu(e, a, o);
            break;
          default:
            throw Error(k(161));
        }
      } catch (l) {
        ce(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function C1(e, t, n) {
    (F = e), Og(e);
  }
  function Og(e, t, n) {
    for (var r = (e.mode & 1) !== 0; F !== null; ) {
      var i = F,
        s = i.child;
      if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || Os;
        if (!o) {
          var a = i.alternate,
            l = (a !== null && a.memoizedState !== null) || Oe;
          a = Os;
          var u = Oe;
          if (((Os = o), (Oe = l) && !u))
            for (F = i; F !== null; )
              (o = F),
                (l = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? Od(i)
                  : l !== null
                  ? ((l.return = o), (F = l))
                  : Od(i);
          for (; s !== null; ) (F = s), Og(s), (s = s.sibling);
          (F = i), (Os = a), (Oe = u);
        }
        Fd(e);
      } else
        i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (F = s)) : Fd(e);
    }
  }
  function Fd(e) {
    for (; F !== null; ) {
      var t = F;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Oe || Xo(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Oe)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : wt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var s = t.updateQueue;
                s !== null && pd(t, s, r);
                break;
              case 3:
                var o = t.updateQueue;
                if (o !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  pd(t, o, n);
                }
                break;
              case 5:
                var a = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = a;
                  var l = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l.autoFocus && n.focus();
                      break;
                    case "img":
                      l.src && (n.src = l.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var u = t.alternate;
                  if (u !== null) {
                    var f = u.memoizedState;
                    if (f !== null) {
                      var d = f.dehydrated;
                      d !== null && Ii(d);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(k(163));
            }
          Oe || (t.flags & 512 && hu(t));
        } catch (h) {
          ce(t, t.return, h);
        }
      }
      if (t === e) {
        F = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (F = n);
        break;
      }
      F = t.return;
    }
  }
  function _d(e) {
    for (; F !== null; ) {
      var t = F;
      if (t === e) {
        F = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (F = n);
        break;
      }
      F = t.return;
    }
  }
  function Od(e) {
    for (; F !== null; ) {
      var t = F;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Xo(4, t);
            } catch (l) {
              ce(t, n, l);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (l) {
                ce(t, i, l);
              }
            }
            var s = t.return;
            try {
              hu(t);
            } catch (l) {
              ce(t, s, l);
            }
            break;
          case 5:
            var o = t.return;
            try {
              hu(t);
            } catch (l) {
              ce(t, o, l);
            }
        }
      } catch (l) {
        ce(t, t.return, l);
      }
      if (t === e) {
        F = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (F = a);
        break;
      }
      F = t.return;
    }
  }
  var P1 = Math.ceil,
    jo = tn.ReactCurrentDispatcher,
    Pc = tn.ReactCurrentOwner,
    ht = tn.ReactCurrentBatchConfig,
    H = 0,
    je = null,
    ye = null,
    ke = 0,
    Xe = 0,
    Fr = Dn(0),
    we = 0,
    Zi = null,
    nr = 0,
    Zo = 0,
    kc = 0,
    Pi = null,
    Be = null,
    bc = 0,
    Qr = 1 / 0,
    zt = null,
    Eo = !1,
    gu = null,
    Sn = null,
    Ds = !1,
    pn = null,
    Co = 0,
    ki = 0,
    yu = null,
    qs = -1,
    Js = 0;
  function Le() {
    return H & 6 ? me() : qs !== -1 ? qs : (qs = me());
  }
  function Tn(e) {
    return e.mode & 1
      ? H & 2 && ke !== 0
        ? ke & -ke
        : c1.transition !== null
        ? (Js === 0 && (Js = gm()), Js)
        : ((e = Q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nm(e.type))),
          e)
      : 1;
  }
  function jt(e, t, n, r) {
    if (50 < ki) throw ((ki = 0), (yu = null), Error(k(185)));
    ss(e, n, r),
      (!(H & 2) || e !== je) &&
        (e === je && (!(H & 2) && (Zo |= n), we === 4 && dn(e, ke)),
        Ke(e, r),
        n === 1 && H === 0 && !(t.mode & 1) && ((Qr = me() + 500), Ko && Mn()));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    cx(e, t);
    var r = lo(e, e === je ? ke : 0);
    if (r === 0)
      n !== null && Bf(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Bf(n), t === 1))
        e.tag === 0 ? u1(Dd.bind(null, e)) : Bm(Dd.bind(null, e)),
          s1(function () {
            !(H & 6) && Mn();
          }),
          (n = null);
      else {
        switch (ym(r)) {
          case 1:
            n = tc;
            break;
          case 4:
            n = pm;
            break;
          case 16:
            n = ao;
            break;
          case 536870912:
            n = mm;
            break;
          default:
            n = ao;
        }
        n = zg(n, Dg.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Dg(e, t) {
    if (((qs = -1), (Js = 0), H & 6)) throw Error(k(327));
    var n = e.callbackNode;
    if (Br() && e.callbackNode !== n) return null;
    var r = lo(e, e === je ? ke : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Po(e, r);
    else {
      t = r;
      var i = H;
      H |= 2;
      var s = Rg();
      (je !== e || ke !== t) && ((zt = null), (Qr = me() + 500), Xn(e, t));
      do
        try {
          A1();
          break;
        } catch (a) {
          Mg(e, a);
        }
      while (1);
      pc(),
        (jo.current = s),
        (H = i),
        ye !== null ? (t = 0) : ((je = null), (ke = 0), (t = we));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = Hl(e)), i !== 0 && ((r = i), (t = vu(e, i)))),
        t === 1)
      )
        throw ((n = Zi), Xn(e, 0), dn(e, r), Ke(e, me()), n);
      if (t === 6) dn(e, r);
      else {
        if (
          ((i = e.current.alternate),
          !(r & 30) &&
            !k1(i) &&
            ((t = Po(e, r)),
            t === 2 && ((s = Hl(e)), s !== 0 && ((r = s), (t = vu(e, s)))),
            t === 1))
        )
          throw ((n = Zi), Xn(e, 0), dn(e, r), Ke(e, me()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(k(345));
          case 2:
            Bn(e, Be, zt);
            break;
          case 3:
            if (
              (dn(e, r),
              (r & 130023424) === r && ((t = bc + 500 - me()), 10 < t))
            ) {
              if (lo(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                Le(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = ql(Bn.bind(null, e, Be, zt), t);
              break;
            }
            Bn(e, Be, zt);
            break;
          case 4:
            if ((dn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var o = 31 - Nt(r);
              (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
            }
            if (
              ((r = i),
              (r = me() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * P1(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ql(Bn.bind(null, e, Be, zt), r);
              break;
            }
            Bn(e, Be, zt);
            break;
          case 5:
            Bn(e, Be, zt);
            break;
          default:
            throw Error(k(329));
        }
      }
    }
    return Ke(e, me()), e.callbackNode === n ? Dg.bind(null, e) : null;
  }
  function vu(e, t) {
    var n = Pi;
    return (
      e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256),
      (e = Po(e, t)),
      e !== 2 && ((t = Be), (Be = n), t !== null && xu(t)),
      e
    );
  }
  function xu(e) {
    Be === null ? (Be = e) : Be.push.apply(Be, e);
  }
  function k1(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              s = i.getSnapshot;
            i = i.value;
            try {
              if (!Et(s(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function dn(e, t) {
    for (
      t &= ~kc,
        t &= ~Zo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Nt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Dd(e) {
    if (H & 6) throw Error(k(327));
    Br();
    var t = lo(e, 0);
    if (!(t & 1)) return Ke(e, me()), null;
    var n = Po(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Hl(e);
      r !== 0 && ((t = r), (n = vu(e, r)));
    }
    if (n === 1) throw ((n = Zi), Xn(e, 0), dn(e, t), Ke(e, me()), n);
    if (n === 6) throw Error(k(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Bn(e, Be, zt),
      Ke(e, me()),
      null
    );
  }
  function Ac(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      (H = n), H === 0 && ((Qr = me() + 500), Ko && Mn());
    }
  }
  function rr(e) {
    pn !== null && pn.tag === 0 && !(H & 6) && Br();
    var t = H;
    H |= 1;
    var n = ht.transition,
      r = Q;
    try {
      if (((ht.transition = null), (Q = 1), e)) return e();
    } finally {
      (Q = r), (ht.transition = n), (H = t), !(H & 6) && Mn();
    }
  }
  function Fc() {
    (Xe = Fr.current), re(Fr);
  }
  function Xn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), i1(n)), ye !== null))
      for (n = ye.return; n !== null; ) {
        var r = n;
        switch ((fc(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && po();
            break;
          case 3:
            Kr(), re(We), re(De), wc();
            break;
          case 5:
            xc(r);
            break;
          case 4:
            Kr();
            break;
          case 13:
            re(oe);
            break;
          case 19:
            re(oe);
            break;
          case 10:
            mc(r.type._context);
            break;
          case 22:
          case 23:
            Fc();
        }
        n = n.return;
      }
    if (
      ((je = e),
      (ye = e = Nn(e.current, null)),
      (ke = Xe = t),
      (we = 0),
      (Zi = null),
      (kc = Zo = nr = 0),
      (Be = Pi = null),
      Kn !== null)
    ) {
      for (t = 0; t < Kn.length; t++)
        if (((n = Kn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            s = n.pending;
          if (s !== null) {
            var o = s.next;
            (s.next = i), (r.next = o);
          }
          n.pending = r;
        }
      Kn = null;
    }
    return e;
  }
  function Mg(e, t) {
    do {
      var n = ye;
      try {
        if ((pc(), (Qs.current = No), To)) {
          for (var r = le.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          To = !1;
        }
        if (
          ((tr = 0),
          (Ne = xe = le = null),
          (Ei = !1),
          (Yi = 0),
          (Pc.current = null),
          n === null || n.return === null)
        ) {
          (we = 1), (Zi = t), (ye = null);
          break;
        }
        e: {
          var s = e,
            o = n.return,
            a = n,
            l = t;
          if (
            ((t = ke),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              f = a,
              d = f.tag;
            if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
              var h = f.alternate;
              h
                ? ((f.updateQueue = h.updateQueue),
                  (f.memoizedState = h.memoizedState),
                  (f.lanes = h.lanes))
                : ((f.updateQueue = null), (f.memoizedState = null));
            }
            var m = Sd(o);
            if (m !== null) {
              (m.flags &= -257),
                Td(m, o, a, s, t),
                m.mode & 1 && wd(s, u, t),
                (t = m),
                (l = u);
              var v = t.updateQueue;
              if (v === null) {
                var x = new Set();
                x.add(l), (t.updateQueue = x);
              } else v.add(l);
              break e;
            } else {
              if (!(t & 1)) {
                wd(s, u, t), _c();
                break e;
              }
              l = Error(k(426));
            }
          } else if (se && a.mode & 1) {
            var C = Sd(o);
            if (C !== null) {
              !(C.flags & 65536) && (C.flags |= 256),
                Td(C, o, a, s, t),
                dc(Yr(l, a));
              break e;
            }
          }
          (s = l = Yr(l, a)),
            we !== 4 && (we = 2),
            Pi === null ? (Pi = [s]) : Pi.push(s),
            (s = o);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var y = vg(s, l, t);
                hd(s, y);
                break e;
              case 1:
                a = l;
                var p = s.type,
                  g = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof p.getDerivedStateFromError == "function" ||
                    (g !== null &&
                      typeof g.componentDidCatch == "function" &&
                      (Sn === null || !Sn.has(g))))
                ) {
                  (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                  var w = xg(s, a, t);
                  hd(s, w);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Vg(n);
      } catch (j) {
        (t = j), ye === n && n !== null && (ye = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function Rg() {
    var e = jo.current;
    return (jo.current = No), e === null ? No : e;
  }
  function _c() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
      je === null || (!(nr & 268435455) && !(Zo & 268435455)) || dn(je, ke);
  }
  function Po(e, t) {
    var n = H;
    H |= 2;
    var r = Rg();
    (je !== e || ke !== t) && ((zt = null), Xn(e, t));
    do
      try {
        b1();
        break;
      } catch (i) {
        Mg(e, i);
      }
    while (1);
    if ((pc(), (H = n), (jo.current = r), ye !== null)) throw Error(k(261));
    return (je = null), (ke = 0), we;
  }
  function b1() {
    for (; ye !== null; ) Lg(ye);
  }
  function A1() {
    for (; ye !== null && !tx(); ) Lg(ye);
  }
  function Lg(e) {
    var t = Ig(e.alternate, e, Xe);
    (e.memoizedProps = e.pendingProps),
      t === null ? Vg(e) : (ye = t),
      (Pc.current = null);
  }
  function Vg(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = N1(n, t)), n !== null)) {
          (n.flags &= 32767), (ye = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (we = 6), (ye = null);
          return;
        }
      } else if (((n = T1(n, t, Xe)), n !== null)) {
        ye = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ye = t;
        return;
      }
      ye = t = e;
    } while (t !== null);
    we === 0 && (we = 5);
  }
  function Bn(e, t, n) {
    var r = Q,
      i = ht.transition;
    try {
      (ht.transition = null), (Q = 1), F1(e, t, n, r);
    } finally {
      (ht.transition = i), (Q = r);
    }
    return null;
  }
  function F1(e, t, n, r) {
    do Br();
    while (pn !== null);
    if (H & 6) throw Error(k(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(k(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
      (fx(e, s),
      e === je && ((ye = je = null), (ke = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ds ||
        ((Ds = !0),
        zg(ao, function () {
          return Br(), null;
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      (s = ht.transition), (ht.transition = null);
      var o = Q;
      Q = 1;
      var a = H;
      (H |= 4),
        (Pc.current = null),
        E1(e, n),
        _g(n, e),
        Zx(Xl),
        (uo = !!Ql),
        (Xl = Ql = null),
        (e.current = n),
        C1(n),
        nx(),
        (H = a),
        (Q = o),
        (ht.transition = s);
    } else e.current = n;
    if (
      (Ds && ((Ds = !1), (pn = e), (Co = i)),
      (s = e.pendingLanes),
      s === 0 && (Sn = null),
      sx(n.stateNode),
      Ke(e, me()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Eo) throw ((Eo = !1), (e = gu), (gu = null), e);
    return (
      Co & 1 && e.tag !== 0 && Br(),
      (s = e.pendingLanes),
      s & 1 ? (e === yu ? ki++ : ((ki = 0), (yu = e))) : (ki = 0),
      Mn(),
      null
    );
  }
  function Br() {
    if (pn !== null) {
      var e = ym(Co),
        t = ht.transition,
        n = Q;
      try {
        if (((ht.transition = null), (Q = 16 > e ? 16 : e), pn === null))
          var r = !1;
        else {
          if (((e = pn), (pn = null), (Co = 0), H & 6)) throw Error(k(331));
          var i = H;
          for (H |= 4, F = e.current; F !== null; ) {
            var s = F,
              o = s.child;
            if (F.flags & 16) {
              var a = s.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (F = u; F !== null; ) {
                    var f = F;
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ci(8, f, s);
                    }
                    var d = f.child;
                    if (d !== null) (d.return = f), (F = d);
                    else
                      for (; F !== null; ) {
                        f = F;
                        var h = f.sibling,
                          m = f.return;
                        if ((bg(f), f === u)) {
                          F = null;
                          break;
                        }
                        if (h !== null) {
                          (h.return = m), (F = h);
                          break;
                        }
                        F = m;
                      }
                  }
                }
                var v = s.alternate;
                if (v !== null) {
                  var x = v.child;
                  if (x !== null) {
                    v.child = null;
                    do {
                      var C = x.sibling;
                      (x.sibling = null), (x = C);
                    } while (x !== null);
                  }
                }
                F = s;
              }
            }
            if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (F = o);
            else
              e: for (; F !== null; ) {
                if (((s = F), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ci(9, s, s.return);
                  }
                var y = s.sibling;
                if (y !== null) {
                  (y.return = s.return), (F = y);
                  break e;
                }
                F = s.return;
              }
          }
          var p = e.current;
          for (F = p; F !== null; ) {
            o = F;
            var g = o.child;
            if (o.subtreeFlags & 2064 && g !== null) (g.return = o), (F = g);
            else
              e: for (o = p; F !== null; ) {
                if (((a = F), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xo(9, a);
                    }
                  } catch (j) {
                    ce(a, a.return, j);
                  }
                if (a === o) {
                  F = null;
                  break e;
                }
                var w = a.sibling;
                if (w !== null) {
                  (w.return = a.return), (F = w);
                  break e;
                }
                F = a.return;
              }
          }
          if (
            ((H = i), Mn(), Dt && typeof Dt.onPostCommitFiberRoot == "function")
          )
            try {
              Dt.onPostCommitFiberRoot(Bo, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (Q = n), (ht.transition = t);
      }
    }
    return !1;
  }
  function Md(e, t, n) {
    (t = Yr(n, t)),
      (t = vg(e, t, 1)),
      (e = wn(e, t, 1)),
      (t = Le()),
      e !== null && (ss(e, 1, t), Ke(e, t));
  }
  function ce(e, t, n) {
    if (e.tag === 3) Md(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Md(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Sn === null || !Sn.has(r)))
          ) {
            (e = Yr(n, e)),
              (e = xg(t, e, 1)),
              (t = wn(t, e, 1)),
              (e = Le()),
              t !== null && (ss(t, 1, e), Ke(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function _1(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Le()),
      (e.pingedLanes |= e.suspendedLanes & n),
      je === e &&
        (ke & n) === n &&
        (we === 4 || (we === 3 && (ke & 130023424) === ke && 500 > me() - bc)
          ? Xn(e, 0)
          : (kc |= n)),
      Ke(e, t);
  }
  function $g(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = js), (js <<= 1), !(js & 130023424) && (js = 4194304))
        : (t = 1));
    var n = Le();
    (e = qt(e, t)), e !== null && (ss(e, t, n), Ke(e, n));
  }
  function O1(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), $g(e, n);
  }
  function D1(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(k(314));
    }
    r !== null && r.delete(t), $g(e, n);
  }
  var Ig;
  Ig = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current) He = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (He = !1), S1(e, t, n);
        He = !!(e.flags & 131072);
      }
    else (He = !1), se && t.flags & 1048576 && Um(t, yo, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Zs(e, t), (e = t.pendingProps);
        var i = Hr(t, De.current);
        zr(t, n), (i = Tc(null, t, r, e, i, n));
        var s = Nc();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ge(r) ? ((s = !0), mo(t)) : (s = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              yc(t),
              (i.updater = Yo),
              (t.stateNode = i),
              (i._reactInternals = t),
              su(t, r, e, n),
              (t = lu(null, t, r, !0, s, n)))
            : ((t.tag = 0), se && s && cc(t), Re(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Zs(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = R1(r)),
            (e = wt(r, e)),
            i)
          ) {
            case 0:
              t = au(null, t, r, e, n);
              break e;
            case 1:
              t = Ed(null, t, r, e, n);
              break e;
            case 11:
              t = Nd(null, t, r, e, n);
              break e;
            case 14:
              t = jd(null, t, r, wt(r.type, e), n);
              break e;
          }
          throw Error(k(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : wt(r, i)),
          au(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : wt(r, i)),
          Ed(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((Ng(t), e === null)) throw Error(k(387));
          (r = t.pendingProps),
            (s = t.memoizedState),
            (i = s.element),
            Km(e, t),
            wo(t, r, null, n);
          var o = t.memoizedState;
          if (((r = o.element), s.isDehydrated))
            if (
              ((s = {
                element: r,
                isDehydrated: !1,
                cache: o.cache,
                pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                transitions: o.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              (i = Yr(Error(k(423)), t)), (t = Cd(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = Yr(Error(k(424)), t)), (t = Cd(e, t, r, n, i));
              break e;
            } else
              for (
                Ze = xn(t.stateNode.containerInfo.firstChild),
                  et = t,
                  se = !0,
                  Tt = null,
                  n = Zm(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Wr(), r === i)) {
              t = Jt(e, t, n);
              break e;
            }
            Re(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          qm(t),
          e === null && nu(t),
          (r = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (o = i.children),
          Zl(r, i) ? (o = null) : s !== null && Zl(r, s) && (t.flags |= 32),
          Tg(e, t),
          Re(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && nu(t), null;
      case 13:
        return jg(e, t, n);
      case 4:
        return (
          vc(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Gr(t, null, r, n)) : Re(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : wt(r, i)),
          Nd(e, t, r, i, n)
        );
      case 7:
        return Re(e, t, t.pendingProps, n), t.child;
      case 8:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Re(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (s = t.memoizedProps),
            (o = i.value),
            J(vo, r._currentValue),
            (r._currentValue = o),
            s !== null)
          )
            if (Et(s.value, o)) {
              if (s.children === i.children && !We.current) {
                t = Jt(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var a = s.dependencies;
                if (a !== null) {
                  o = s.child;
                  for (var l = a.firstContext; l !== null; ) {
                    if (l.context === r) {
                      if (s.tag === 1) {
                        (l = Kt(-1, n & -n)), (l.tag = 2);
                        var u = s.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var f = u.pending;
                          f === null
                            ? (l.next = l)
                            : ((l.next = f.next), (f.next = l)),
                            (u.pending = l);
                        }
                      }
                      (s.lanes |= n),
                        (l = s.alternate),
                        l !== null && (l.lanes |= n),
                        ru(s.return, n, t),
                        (a.lanes |= n);
                      break;
                    }
                    l = l.next;
                  }
                } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((o = s.return), o === null)) throw Error(k(341));
                  (o.lanes |= n),
                    (a = o.alternate),
                    a !== null && (a.lanes |= n),
                    ru(o, n, t),
                    (o = s.sibling);
                } else o = s.child;
                if (o !== null) o.return = s;
                else
                  for (o = s; o !== null; ) {
                    if (o === t) {
                      o = null;
                      break;
                    }
                    if (((s = o.sibling), s !== null)) {
                      (s.return = o.return), (o = s);
                      break;
                    }
                    o = o.return;
                  }
                s = o;
              }
          Re(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          zr(t, n),
          (i = pt(i)),
          (r = r(i)),
          (t.flags |= 1),
          Re(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = wt(r, t.pendingProps)),
          (i = wt(r.type, i)),
          jd(e, t, r, i, n)
        );
      case 15:
        return wg(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : wt(r, i)),
          Zs(e, t),
          (t.tag = 1),
          Ge(r) ? ((e = !0), mo(t)) : (e = !1),
          zr(t, n),
          Qm(t, r, i),
          su(t, r, i, n),
          lu(null, t, r, !0, e, n)
        );
      case 19:
        return Eg(e, t, n);
      case 22:
        return Sg(e, t, n);
    }
    throw Error(k(156, t.tag));
  };
  function zg(e, t) {
    return hm(e, t);
  }
  function M1(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function dt(e, t, n, r) {
    return new M1(e, t, n, r);
  }
  function Oc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function R1(e) {
    if (typeof e == "function") return Oc(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === qu)) return 11;
      if (e === Ju) return 14;
    }
    return 2;
  }
  function Nn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = dt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function eo(e, t, n, r, i, s) {
    var o = 2;
    if (((r = e), typeof e == "function")) Oc(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
      e: switch (e) {
        case Sr:
          return Zn(n.children, i, s, t);
        case Zu:
          (o = 8), (i |= 8);
          break;
        case bl:
          return (
            (e = dt(12, n, t, i | 2)), (e.elementType = bl), (e.lanes = s), e
          );
        case Al:
          return (e = dt(13, n, t, i)), (e.elementType = Al), (e.lanes = s), e;
        case Fl:
          return (e = dt(19, n, t, i)), (e.elementType = Fl), (e.lanes = s), e;
        case Xp:
          return qo(n, i, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Yp:
                o = 10;
                break e;
              case Qp:
                o = 9;
                break e;
              case qu:
                o = 11;
                break e;
              case Ju:
                o = 14;
                break e;
              case an:
                (o = 16), (r = null);
                break e;
            }
          throw Error(k(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = dt(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
    );
  }
  function Zn(e, t, n, r) {
    return (e = dt(7, e, r, t)), (e.lanes = n), e;
  }
  function qo(e, t, n, r) {
    return (
      (e = dt(22, e, r, t)),
      (e.elementType = Xp),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function sl(e, t, n) {
    return (e = dt(6, e, null, t)), (e.lanes = n), e;
  }
  function ol(e, t, n) {
    return (
      (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function L1(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = Ia(0)),
      (this.expirationTimes = Ia(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ia(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Dc(e, t, n, r, i, s, o, a, l) {
    return (
      (e = new L1(e, t, n, a, l)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = dt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      yc(s),
      e
    );
  }
  function V1(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: wr,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Bg(e) {
    if (!e) return bn;
    e = e._reactInternals;
    e: {
      if (ar(e) !== e || e.tag !== 1) throw Error(k(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ge(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(k(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return zm(e, n, t);
    }
    return t;
  }
  function Ug(e, t, n, r, i, s, o, a, l) {
    return (
      (e = Dc(n, r, !0, e, i, s, o, a, l)),
      (e.context = Bg(null)),
      (n = e.current),
      (r = Le()),
      (i = Tn(n)),
      (s = Kt(r, i)),
      (s.callback = t ?? null),
      wn(n, s, i),
      (e.current.lanes = i),
      ss(e, i, r),
      Ke(e, r),
      e
    );
  }
  function Jo(e, t, n, r) {
    var i = t.current,
      s = Le(),
      o = Tn(i);
    return (
      (n = Bg(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Kt(s, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = wn(i, t, o)),
      e !== null && (jt(e, i, o, s), Ys(e, i, o)),
      o
    );
  }
  function ko(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Rd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Mc(e, t) {
    Rd(e, t), (e = e.alternate) && Rd(e, t);
  }
  function $1() {
    return null;
  }
  var Hg =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Rc(e) {
    this._internalRoot = e;
  }
  ea.prototype.render = Rc.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(k(409));
    Jo(e, t, null, null);
  };
  ea.prototype.unmount = Rc.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      rr(function () {
        Jo(null, e, null, null);
      }),
        (t[Zt] = null);
    }
  };
  function ea(e) {
    this._internalRoot = e;
  }
  ea.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = wm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++);
      fn.splice(n, 0, e), n === 0 && Tm(e);
    }
  };
  function Lc(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function ta(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Ld() {}
  function I1(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var u = ko(o);
          s.call(u);
        };
      }
      var o = Ug(t, r, e, 0, null, !1, !1, "", Ld);
      return (
        (e._reactRootContainer = o),
        (e[Zt] = o.current),
        Ui(e.nodeType === 8 ? e.parentNode : e),
        rr(),
        o
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var a = r;
      r = function () {
        var u = ko(l);
        a.call(u);
      };
    }
    var l = Dc(e, 0, !1, null, null, !1, !1, "", Ld);
    return (
      (e._reactRootContainer = l),
      (e[Zt] = l.current),
      Ui(e.nodeType === 8 ? e.parentNode : e),
      rr(function () {
        Jo(t, l, n, r);
      }),
      l
    );
  }
  function na(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
      var o = s;
      if (typeof i == "function") {
        var a = i;
        i = function () {
          var l = ko(o);
          a.call(l);
        };
      }
      Jo(t, o, e, i);
    } else o = I1(n, t, e, i, r);
    return ko(o);
  }
  vm = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = yi(t.pendingLanes);
          n !== 0 &&
            (nc(t, n | 1), Ke(t, me()), !(H & 6) && ((Qr = me() + 500), Mn()));
        }
        break;
      case 13:
        rr(function () {
          var r = qt(e, 1);
          if (r !== null) {
            var i = Le();
            jt(r, e, 1, i);
          }
        }),
          Mc(e, 1);
    }
  };
  rc = function (e) {
    if (e.tag === 13) {
      var t = qt(e, 134217728);
      if (t !== null) {
        var n = Le();
        jt(t, e, 134217728, n);
      }
      Mc(e, 134217728);
    }
  };
  xm = function (e) {
    if (e.tag === 13) {
      var t = Tn(e),
        n = qt(e, t);
      if (n !== null) {
        var r = Le();
        jt(n, e, t, r);
      }
      Mc(e, t);
    }
  };
  wm = function () {
    return Q;
  };
  Sm = function (e, t) {
    var n = Q;
    try {
      return (Q = e), t();
    } finally {
      Q = n;
    }
  };
  zl = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Dl(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var i = Go(r);
              if (!i) throw Error(k(90));
              qp(r), Dl(r, i);
            }
          }
        }
        break;
      case "textarea":
        em(e, n);
        break;
      case "select":
        (t = n.value), t != null && Lr(e, !!n.multiple, t, !1);
    }
  };
  am = Ac;
  lm = rr;
  var z1 = { usingClientEntryPoint: !1, Events: [as, Er, Go, sm, om, Ac] },
    fi = {
      findFiberByHostInstance: Gn,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    B1 = {
      bundleType: fi.bundleType,
      version: fi.version,
      rendererPackageName: fi.rendererPackageName,
      rendererConfig: fi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: tn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = fm(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: fi.findFiberByHostInstance || $1,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ms = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ms.isDisabled && Ms.supportsFiber)
      try {
        (Bo = Ms.inject(B1)), (Dt = Ms);
      } catch {}
  }
  rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z1;
  rt.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lc(t)) throw Error(k(200));
    return V1(e, t, null, n);
  };
  rt.createRoot = function (e, t) {
    if (!Lc(e)) throw Error(k(299));
    var n = !1,
      r = "",
      i = Hg;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = Dc(e, 1, !1, null, null, n, !1, r, i)),
      (e[Zt] = t.current),
      Ui(e.nodeType === 8 ? e.parentNode : e),
      new Rc(t)
    );
  };
  rt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(k(188))
        : ((e = Object.keys(e).join(",")), Error(k(268, e)));
    return (e = fm(t)), (e = e === null ? null : e.stateNode), e;
  };
  rt.flushSync = function (e) {
    return rr(e);
  };
  rt.hydrate = function (e, t, n) {
    if (!ta(t)) throw Error(k(200));
    return na(null, e, t, !0, n);
  };
  rt.hydrateRoot = function (e, t, n) {
    if (!Lc(e)) throw Error(k(405));
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      s = "",
      o = Hg;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
      (t = Ug(t, null, e, 1, n ?? null, i, !1, s, o)),
      (e[Zt] = t.current),
      Ui(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (i = n._getVersion),
          (i = i(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, i])
            : t.mutableSourceEagerHydrationData.push(n, i);
    return new ea(t);
  };
  rt.render = function (e, t, n) {
    if (!ta(t)) throw Error(k(200));
    return na(null, e, t, !1, n);
  };
  rt.unmountComponentAtNode = function (e) {
    if (!ta(e)) throw Error(k(40));
    return e._reactRootContainer
      ? (rr(function () {
          na(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[Zt] = null);
          });
        }),
        !0)
      : !1;
  };
  rt.unstable_batchedUpdates = Ac;
  rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ta(n)) throw Error(k(200));
    if (e == null || e._reactInternals === void 0) throw Error(k(38));
    return na(e, t, n, !1, r);
  };
  rt.version = "18.2.0-next-9e3b772b8-20220608";
  function Wg() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wg);
      } catch (e) {
        console.error(e);
      }
  }
  Wg(), (Up.exports = rt);
  var U1 = Up.exports,
    Vd = U1;
  (Pl.createRoot = Vd.createRoot), (Pl.hydrateRoot = Vd.hydrateRoot);
  var Gg = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    $d = Ot.createContext && Ot.createContext(Gg),
    jn =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (jn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }),
          jn.apply(this, arguments)
        );
      },
    H1 =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (e != null && typeof Object.getOwnPropertySymbols == "function")
          for (
            var i = 0, r = Object.getOwnPropertySymbols(e);
            i < r.length;
            i++
          )
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        return n;
      };
  function Kg(e) {
    return (
      e &&
      e.map(function (t, n) {
        return Ot.createElement(t.tag, jn({ key: n }, t.attr), Kg(t.child));
      })
    );
  }
  function us(e) {
    return function (t) {
      return Ot.createElement(W1, jn({ attr: jn({}, e.attr) }, t), Kg(e.child));
    };
  }
  function W1(e) {
    var t = function (n) {
      var r = e.attr,
        i = e.size,
        s = e.title,
        o = H1(e, ["attr", "size", "title"]),
        a = i || n.size || "1em",
        l;
      return (
        n.className && (l = n.className),
        e.className && (l = (l ? l + " " : "") + e.className),
        Ot.createElement(
          "svg",
          jn(
            { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
            n.attr,
            r,
            o,
            {
              className: l,
              style: jn(jn({ color: e.color || n.color }, n.style), e.style),
              height: a,
              width: a,
              xmlns: "http://www.w3.org/2000/svg",
            }
          ),
          s && Ot.createElement("title", null, s),
          e.children
        )
      );
    };
    return $d !== void 0
      ? Ot.createElement($d.Consumer, null, function (n) {
          return t(n);
        })
      : t(Gg);
  }
  function ra(e) {
    return us({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      child: [
        { tag: "line", attr: { x1: "19", y1: "12", x2: "5", y2: "12" } },
        { tag: "polyline", attr: { points: "12 19 5 12 12 5" } },
      ],
    })(e);
  }
  function ia(e) {
    return us({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      child: [
        { tag: "line", attr: { x1: "5", y1: "12", x2: "19", y2: "12" } },
        { tag: "polyline", attr: { points: "12 5 19 12 12 19" } },
      ],
    })(e);
  }
  function G1(e) {
    return us({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      child: [
        { tag: "line", attr: { x1: "3", y1: "12", x2: "21", y2: "12" } },
        { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" } },
        { tag: "line", attr: { x1: "3", y1: "18", x2: "21", y2: "18" } },
      ],
    })(e);
  }
  function Yg(e) {
    return us({
      tag: "svg",
      attr: {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      },
      child: [
        { tag: "line", attr: { x1: "18", y1: "6", x2: "6", y2: "18" } },
        { tag: "line", attr: { x1: "6", y1: "6", x2: "18", y2: "18" } },
      ],
    })(e);
  }
  const Vc = "./assets/brand_logo-37c183f4.svg",
    K1 = {
      organization: "",
      clubName: "",
      playingCategory: "",
      captainName: "",
      captainPhone: "",
      captainNic: "",
      captainEmail: "",
      playerFiveName: "",
      playerFiveNic: "",
      playerTwoName: "",
      playerTwoNic: "",
      playerThreeName: "",
      playerThreeNic: "",
      playerFourName: "",
      playerFourNic: "",
      substituteOneName: "",
      substituteOneNic: "",
      substituteTwoName: "",
      substituteTwoNic: "",
      substituteThreeName: "",
      substituteThreeNic: "",
    },
    Y1 = [
      { title: "What we do", href: "/" },
      { title: "How it works", href: "/" },
      { title: "Case studies", href: "/" },
      { title: "About", href: "/" },
      { title: "Contact", href: "/" },
    ],
    Qg = "Basketball Championship Registration",
    Id = [
      { title: "Register Now" },
      { title: "." },
      { title: "Secure  your slot" },
      { title: "." },
      { title: "TBL Basketball" },
      { title: "." },
      { title: "Register Now" },
      { title: "." },
      { title: "Secure  your slot" },
      { title: "." },
      { title: "TBL Basketball" },
      { title: "." },
      { title: "Register Now" },
      { title: "." },
      { title: "Secure  your slot" },
      { title: "." },
      { title: "TBL Basketball" },
      { title: "." },
      { title: "Register Now" },
      { title: "." },
      { title: "Secure  your slot" },
      { title: "." },
      { title: "TBL Basketball" },
      { title: "." },
    ],
    zd = [
      { title: "University Men" },
      { title: "University Women" },
      { title: "Rotaract Men" },
      { title: "Rotaract Women" },
    ];
  function Q1() {
    return c.jsxs("a", {
      className:
        "bg-gradient-to-r from-teal-500 to-indigo-800 px-5 py-2 whitespace-nowrap absolute origin-top-right -rotate-90 rounded-tr-2xl rounded-tl-2xl right-0 top-28 -translate-x-[30px] h-[30px] flex flex-row z-20 cursor-pointer items-center md:hidden",
      onClick: () => {
        var e;
        return (e = document.getElementById("registration")) == null
          ? void 0
          : e.scrollIntoView({ behavior: "smooth" });
      },
      onKeyDown: () => {
        var e;
        return (e = document.getElementById("registration")) == null
          ? void 0
          : e.scrollIntoView({ behavior: "smooth" });
      },
      children: [
        c.jsx(ra, { color: "white" }),
        c.jsx("div", {
          className: " text-[10px] ml-3 text-white",
          children: Qg,
        }),
        c.jsx("div", { className: "" }),
      ],
    });
  }
  const X1 = "./assets/Sport Banner2-1329c407.png";
  function Z1() {
    return c.jsx("div", {
      className: "container px-10  mx-auto",
      children: c.jsxs("div", {
        className: "md:flex md:flex-row md:justify-between",
        children: [
          c.jsxs("div", {
            className: "md:w-[50%] xl:mt-16",
            children: [
              c.jsx("h1", {
                className:
                  "text-white font-medium sm:mt-5 mb-5 text-xl md:text-[25px] md:leading-relaxed lg:text-[40px]",
                children: "The Bisons League (TBL)",
              }),
              c.jsx("p", {
                className:
                  "text-[#D4D5E1] font-light text-[14px]  leading-[30px] w-[90%] md:w-[100%] md:text-[14px] md:leading-loose lg:text-[18px] xl:text-[20px]",
                children:
                  "Get ready to battle it out, as teams vie for the coveted title of the Ultimate Championship of the Year! Whether you're a Rotaract club, a university powerhouse, or a force to be reckoned with, this is your platform to display the finesse that sets you apart.",
              }),
            ],
          }),
          c.jsx("div", {
            className: "sm:scale-115 md:w-[50%] mb-10 max-w-[600px]",
            children: c.jsx("img", {
              src: X1,
              alt: "banner image",
              width: "100%",
            }),
          }),
        ],
      }),
    });
  }
  const Xg = S.createContext({
      transformPagePoint: (e) => e,
      isStatic: !1,
      reducedMotion: "never",
    }),
    sa = S.createContext({}),
    oa = S.createContext(null),
    aa = typeof document < "u",
    $c = aa ? S.useLayoutEffect : S.useEffect,
    Zg = S.createContext({ strict: !1 });
  function q1(e, t, n, r) {
    const { visualElement: i } = S.useContext(sa),
      s = S.useContext(Zg),
      o = S.useContext(oa),
      a = S.useContext(Xg).reducedMotion,
      l = S.useRef();
    (r = r || s.renderer),
      !l.current &&
        r &&
        (l.current = r(e, {
          visualState: t,
          parent: i,
          props: n,
          presenceContext: o,
          blockInitialAnimation: o ? o.initial === !1 : !1,
          reducedMotionConfig: a,
        }));
    const u = l.current;
    S.useInsertionEffect(() => {
      u && u.update(n, o);
    });
    const f = S.useRef(!!window.HandoffAppearAnimations);
    return (
      $c(() => {
        u &&
          (u.render(),
          f.current && u.animationState && u.animationState.animateChanges());
      }),
      S.useEffect(() => {
        u &&
          (u.updateFeatures(),
          !f.current && u.animationState && u.animationState.animateChanges(),
          (window.HandoffAppearAnimations = void 0),
          (f.current = !1));
      }),
      u
    );
  }
  function _r(e) {
    return (
      typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
    );
  }
  function J1(e, t, n) {
    return S.useCallback(
      (r) => {
        r && e.mount && e.mount(r),
          t && (r ? t.mount(r) : t.unmount()),
          n && (typeof n == "function" ? n(r) : _r(n) && (n.current = r));
      },
      [t]
    );
  }
  function qi(e) {
    return typeof e == "string" || Array.isArray(e);
  }
  function la(e) {
    return typeof e == "object" && typeof e.start == "function";
  }
  const Ic = [
      "animate",
      "whileInView",
      "whileFocus",
      "whileHover",
      "whileTap",
      "whileDrag",
      "exit",
    ],
    zc = ["initial", ...Ic];
  function ua(e) {
    return la(e.animate) || zc.some((t) => qi(e[t]));
  }
  function qg(e) {
    return !!(ua(e) || e.variants);
  }
  function ew(e, t) {
    if (ua(e)) {
      const { initial: n, animate: r } = e;
      return {
        initial: n === !1 || qi(n) ? n : void 0,
        animate: qi(r) ? r : void 0,
      };
    }
    return e.inherit !== !1 ? t : {};
  }
  function tw(e) {
    const { initial: t, animate: n } = ew(e, S.useContext(sa));
    return S.useMemo(() => ({ initial: t, animate: n }), [Bd(t), Bd(n)]);
  }
  function Bd(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const Ud = {
      animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag",
      ],
      exit: ["exit"],
      drag: ["drag", "dragControls"],
      focus: ["whileFocus"],
      hover: ["whileHover", "onHoverStart", "onHoverEnd"],
      tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
      pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
      inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
      layout: ["layout", "layoutId"],
    },
    Ji = {};
  for (const e in Ud) Ji[e] = { isEnabled: (t) => Ud[e].some((n) => !!t[n]) };
  function nw(e) {
    for (const t in e) Ji[t] = { ...Ji[t], ...e[t] };
  }
  const Bc = S.createContext({}),
    Jg = S.createContext({}),
    rw = Symbol.for("motionComponentSymbol");
  function iw({
    preloadedFeatures: e,
    createVisualElement: t,
    useRender: n,
    useVisualState: r,
    Component: i,
  }) {
    e && nw(e);
    function s(a, l) {
      let u;
      const f = { ...S.useContext(Xg), ...a, layoutId: sw(a) },
        { isStatic: d } = f,
        h = tw(a),
        m = r(a, d);
      if (!d && aa) {
        h.visualElement = q1(i, m, f, t);
        const v = S.useContext(Jg),
          x = S.useContext(Zg).strict;
        h.visualElement && (u = h.visualElement.loadFeatures(f, x, e, v));
      }
      return S.createElement(
        sa.Provider,
        { value: h },
        u && h.visualElement
          ? S.createElement(u, { visualElement: h.visualElement, ...f })
          : null,
        n(i, a, J1(m, h.visualElement, l), m, d, h.visualElement)
      );
    }
    const o = S.forwardRef(s);
    return (o[rw] = i), o;
  }
  function sw({ layoutId: e }) {
    const t = S.useContext(Bc).id;
    return t && e !== void 0 ? t + "-" + e : e;
  }
  function ow(e) {
    function t(r, i = {}) {
      return iw(e(r, i));
    }
    if (typeof Proxy > "u") return t;
    const n = new Map();
    return new Proxy(t, {
      get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
    });
  }
  const aw = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
  ];
  function Uc(e) {
    return typeof e != "string" || e.includes("-")
      ? !1
      : !!(aw.indexOf(e) > -1 || /[A-Z]/.test(e));
  }
  const bo = {};
  function lw(e) {
    Object.assign(bo, e);
  }
  const cs = [
      "transformPerspective",
      "x",
      "y",
      "z",
      "translateX",
      "translateY",
      "translateZ",
      "scale",
      "scaleX",
      "scaleY",
      "rotate",
      "rotateX",
      "rotateY",
      "rotateZ",
      "skew",
      "skewX",
      "skewY",
    ],
    lr = new Set(cs);
  function ey(e, { layout: t, layoutId: n }) {
    return (
      lr.has(e) ||
      e.startsWith("origin") ||
      ((t || n !== void 0) && (!!bo[e] || e === "opacity"))
    );
  }
  const Ye = (e) => !!(e && e.getVelocity),
    uw = {
      x: "translateX",
      y: "translateY",
      z: "translateZ",
      transformPerspective: "perspective",
    },
    cw = cs.length;
  function fw(
    e,
    { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
    r,
    i
  ) {
    let s = "";
    for (let o = 0; o < cw; o++) {
      const a = cs[o];
      if (e[a] !== void 0) {
        const l = uw[a] || a;
        s += `${l}(${e[a]}) `;
      }
    }
    return (
      t && !e.z && (s += "translateZ(0)"),
      (s = s.trim()),
      i ? (s = i(e, r ? "" : s)) : n && r && (s = "none"),
      s
    );
  }
  const ty = (e) => (t) => typeof t == "string" && t.startsWith(e),
    ny = ty("--"),
    wu = ty("var(--"),
    dw =
      /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    hw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
    An = (e, t, n) => Math.min(Math.max(n, e), t),
    ur = {
      test: (e) => typeof e == "number",
      parse: parseFloat,
      transform: (e) => e,
    },
    bi = { ...ur, transform: (e) => An(0, 1, e) },
    Rs = { ...ur, default: 1 },
    Ai = (e) => Math.round(e * 1e5) / 1e5,
    ca = /(-)?([\d]*\.?[\d])+/g,
    ry =
      /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    pw =
      /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
  function fs(e) {
    return typeof e == "string";
  }
  const ds = (e) => ({
      test: (t) => fs(t) && t.endsWith(e) && t.split(" ").length === 1,
      parse: parseFloat,
      transform: (t) => `${t}${e}`,
    }),
    sn = ds("deg"),
    Rt = ds("%"),
    L = ds("px"),
    mw = ds("vh"),
    gw = ds("vw"),
    Hd = {
      ...Rt,
      parse: (e) => Rt.parse(e) / 100,
      transform: (e) => Rt.transform(e * 100),
    },
    Wd = { ...ur, transform: Math.round },
    iy = {
      borderWidth: L,
      borderTopWidth: L,
      borderRightWidth: L,
      borderBottomWidth: L,
      borderLeftWidth: L,
      borderRadius: L,
      radius: L,
      borderTopLeftRadius: L,
      borderTopRightRadius: L,
      borderBottomRightRadius: L,
      borderBottomLeftRadius: L,
      width: L,
      maxWidth: L,
      height: L,
      maxHeight: L,
      size: L,
      top: L,
      right: L,
      bottom: L,
      left: L,
      padding: L,
      paddingTop: L,
      paddingRight: L,
      paddingBottom: L,
      paddingLeft: L,
      margin: L,
      marginTop: L,
      marginRight: L,
      marginBottom: L,
      marginLeft: L,
      rotate: sn,
      rotateX: sn,
      rotateY: sn,
      rotateZ: sn,
      scale: Rs,
      scaleX: Rs,
      scaleY: Rs,
      scaleZ: Rs,
      skew: sn,
      skewX: sn,
      skewY: sn,
      distance: L,
      translateX: L,
      translateY: L,
      translateZ: L,
      x: L,
      y: L,
      z: L,
      perspective: L,
      transformPerspective: L,
      opacity: bi,
      originX: Hd,
      originY: Hd,
      originZ: L,
      zIndex: Wd,
      fillOpacity: bi,
      strokeOpacity: bi,
      numOctaves: Wd,
    };
  function Hc(e, t, n, r) {
    const { style: i, vars: s, transform: o, transformOrigin: a } = e;
    let l = !1,
      u = !1,
      f = !0;
    for (const d in t) {
      const h = t[d];
      if (ny(d)) {
        s[d] = h;
        continue;
      }
      const m = iy[d],
        v = hw(h, m);
      if (lr.has(d)) {
        if (((l = !0), (o[d] = v), !f)) continue;
        h !== (m.default || 0) && (f = !1);
      } else d.startsWith("origin") ? ((u = !0), (a[d] = v)) : (i[d] = v);
    }
    if (
      (t.transform ||
        (l || r
          ? (i.transform = fw(e.transform, n, f, r))
          : i.transform && (i.transform = "none")),
      u)
    ) {
      const { originX: d = "50%", originY: h = "50%", originZ: m = 0 } = a;
      i.transformOrigin = `${d} ${h} ${m}`;
    }
  }
  const Wc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function sy(e, t, n) {
    for (const r in t) !Ye(t[r]) && !ey(r, n) && (e[r] = t[r]);
  }
  function yw({ transformTemplate: e }, t, n) {
    return S.useMemo(() => {
      const r = Wc();
      return (
        Hc(r, t, { enableHardwareAcceleration: !n }, e),
        Object.assign({}, r.vars, r.style)
      );
    }, [t]);
  }
  function vw(e, t, n) {
    const r = e.style || {},
      i = {};
    return (
      sy(i, r, e),
      Object.assign(i, yw(e, t, n)),
      e.transformValues ? e.transformValues(i) : i
    );
  }
  function xw(e, t, n) {
    const r = {},
      i = vw(e, t, n);
    return (
      e.drag &&
        e.dragListener !== !1 &&
        ((r.draggable = !1),
        (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
        (i.touchAction =
          e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
      e.tabIndex === void 0 &&
        (e.onTap || e.onTapStart || e.whileTap) &&
        (r.tabIndex = 0),
      (r.style = i),
      r
    );
  }
  const ww = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "transformValues",
    "custom",
    "inherit",
    "onLayoutAnimationStart",
    "onLayoutAnimationComplete",
    "onLayoutMeasure",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "ignoreStrict",
    "viewport",
  ]);
  function Ao(e) {
    return (
      e.startsWith("while") ||
      (e.startsWith("drag") && e !== "draggable") ||
      e.startsWith("layout") ||
      e.startsWith("onTap") ||
      e.startsWith("onPan") ||
      ww.has(e)
    );
  }
  let oy = (e) => !Ao(e);
  function Sw(e) {
    e && (oy = (t) => (t.startsWith("on") ? !Ao(t) : e(t)));
  }
  try {
    Sw(require("@emotion/is-prop-valid").default);
  } catch {}
  function Tw(e, t, n) {
    const r = {};
    for (const i in e)
      (i === "values" && typeof e.values == "object") ||
        ((oy(i) ||
          (n === !0 && Ao(i)) ||
          (!t && !Ao(i)) ||
          (e.draggable && i.startsWith("onDrag"))) &&
          (r[i] = e[i]));
    return r;
  }
  function Gd(e, t, n) {
    return typeof e == "string" ? e : L.transform(t + n * e);
  }
  function Nw(e, t, n) {
    const r = Gd(t, e.x, e.width),
      i = Gd(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const jw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    Ew = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function Cw(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const s = i ? jw : Ew;
    e[s.offset] = L.transform(-r);
    const o = L.transform(t),
      a = L.transform(n);
    e[s.array] = `${o} ${a}`;
  }
  function Gc(
    e,
    {
      attrX: t,
      attrY: n,
      attrScale: r,
      originX: i,
      originY: s,
      pathLength: o,
      pathSpacing: a = 1,
      pathOffset: l = 0,
      ...u
    },
    f,
    d,
    h
  ) {
    if ((Hc(e, u, f, h), d)) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: m, style: v, dimensions: x } = e;
    m.transform && (x && (v.transform = m.transform), delete m.transform),
      x &&
        (i !== void 0 || s !== void 0 || v.transform) &&
        (v.transformOrigin = Nw(
          x,
          i !== void 0 ? i : 0.5,
          s !== void 0 ? s : 0.5
        )),
      t !== void 0 && (m.x = t),
      n !== void 0 && (m.y = n),
      r !== void 0 && (m.scale = r),
      o !== void 0 && Cw(m, o, a, l, !1);
  }
  const ay = () => ({ ...Wc(), attrs: {} }),
    Kc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function Pw(e, t, n, r) {
    const i = S.useMemo(() => {
      const s = ay();
      return (
        Gc(
          s,
          t,
          { enableHardwareAcceleration: !1 },
          Kc(r),
          e.transformTemplate
        ),
        { ...s.attrs, style: { ...s.style } }
      );
    }, [t]);
    if (e.style) {
      const s = {};
      sy(s, e.style, e), (i.style = { ...s, ...i.style });
    }
    return i;
  }
  function kw(e = !1) {
    return (n, r, i, { latestValues: s }, o) => {
      const l = (Uc(n) ? Pw : xw)(r, s, o, n),
        f = { ...Tw(r, typeof n == "string", e), ...l, ref: i },
        { children: d } = r,
        h = S.useMemo(() => (Ye(d) ? d.get() : d), [d]);
      return S.createElement(n, { ...f, children: h });
    };
  }
  const Yc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  function ly(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n) e.style.setProperty(s, n[s]);
  }
  const uy = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]);
  function cy(e, t, n, r) {
    ly(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(uy.has(i) ? i : Yc(i), t.attrs[i]);
  }
  function Qc(e, t) {
    const { style: n } = e,
      r = {};
    for (const i in n)
      (Ye(n[i]) || (t.style && Ye(t.style[i])) || ey(i, e)) && (r[i] = n[i]);
    return r;
  }
  function fy(e, t) {
    const n = Qc(e, t);
    for (const r in e)
      if (Ye(e[r]) || Ye(t[r])) {
        const i =
          cs.indexOf(r) !== -1
            ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
            : r;
        n[i] = e[r];
      }
    return n;
  }
  function Xc(e, t, n, r = {}, i = {}) {
    return (
      typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
      typeof t == "string" && (t = e.variants && e.variants[t]),
      typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
      t
    );
  }
  function dy(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const Fo = (e) => Array.isArray(e),
    bw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
    Aw = (e) => (Fo(e) ? e[e.length - 1] || 0 : e);
  function to(e) {
    const t = Ye(e) ? e.get() : e;
    return bw(t) ? t.toValue() : t;
  }
  function Fw(
    { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
    r,
    i,
    s
  ) {
    const o = { latestValues: _w(r, i, s, e), renderState: t() };
    return n && (o.mount = (a) => n(r, a, o)), o;
  }
  const hy = (e) => (t, n) => {
    const r = S.useContext(sa),
      i = S.useContext(oa),
      s = () => Fw(e, t, r, i);
    return n ? s() : dy(s);
  };
  function _w(e, t, n, r) {
    const i = {},
      s = r(e, {});
    for (const h in s) i[h] = to(s[h]);
    let { initial: o, animate: a } = e;
    const l = ua(e),
      u = qg(e);
    t &&
      u &&
      !l &&
      e.inherit !== !1 &&
      (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let f = n ? n.initial === !1 : !1;
    f = f || o === !1;
    const d = f ? a : o;
    return (
      d &&
        typeof d != "boolean" &&
        !la(d) &&
        (Array.isArray(d) ? d : [d]).forEach((m) => {
          const v = Xc(e, m);
          if (!v) return;
          const { transitionEnd: x, transition: C, ...y } = v;
          for (const p in y) {
            let g = y[p];
            if (Array.isArray(g)) {
              const w = f ? g.length - 1 : 0;
              g = g[w];
            }
            g !== null && (i[p] = g);
          }
          for (const p in x) i[p] = x[p];
        }),
      i
    );
  }
  const fe = (e) => e;
  class Kd {
    constructor() {
      (this.order = []), (this.scheduled = new Set());
    }
    add(t) {
      if (!this.scheduled.has(t))
        return this.scheduled.add(t), this.order.push(t), !0;
    }
    remove(t) {
      const n = this.order.indexOf(t);
      n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
    }
    clear() {
      (this.order.length = 0), this.scheduled.clear();
    }
  }
  function Ow(e) {
    let t = new Kd(),
      n = new Kd(),
      r = 0,
      i = !1,
      s = !1;
    const o = new WeakSet(),
      a = {
        schedule: (l, u = !1, f = !1) => {
          const d = f && i,
            h = d ? t : n;
          return u && o.add(l), h.add(l) && d && i && (r = t.order.length), l;
        },
        cancel: (l) => {
          n.remove(l), o.delete(l);
        },
        process: (l) => {
          if (i) {
            s = !0;
            return;
          }
          if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
            for (let u = 0; u < r; u++) {
              const f = t.order[u];
              f(l), o.has(f) && (a.schedule(f), e());
            }
          (i = !1), s && ((s = !1), a.process(l));
        },
      };
    return a;
  }
  const Ls = ["prepare", "read", "update", "preRender", "render", "postRender"],
    Dw = 40;
  function Mw(e, t) {
    let n = !1,
      r = !0;
    const i = { delta: 0, timestamp: 0, isProcessing: !1 },
      s = Ls.reduce((d, h) => ((d[h] = Ow(() => (n = !0))), d), {}),
      o = (d) => s[d].process(i),
      a = () => {
        const d = performance.now();
        (n = !1),
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, Dw), 1)),
          (i.timestamp = d),
          (i.isProcessing = !0),
          Ls.forEach(o),
          (i.isProcessing = !1),
          n && t && ((r = !1), e(a));
      },
      l = () => {
        (n = !0), (r = !0), i.isProcessing || e(a);
      };
    return {
      schedule: Ls.reduce((d, h) => {
        const m = s[h];
        return (
          (d[h] = (v, x = !1, C = !1) => (n || l(), m.schedule(v, x, C))), d
        );
      }, {}),
      cancel: (d) => Ls.forEach((h) => s[h].cancel(d)),
      state: i,
      steps: s,
    };
  }
  const {
      schedule: ee,
      cancel: en,
      state: Te,
      steps: al,
    } = Mw(typeof requestAnimationFrame < "u" ? requestAnimationFrame : fe, !0),
    Rw = {
      useVisualState: hy({
        scrapeMotionValuesFromProps: fy,
        createRenderState: ay,
        onMount: (e, t, { renderState: n, latestValues: r }) => {
          ee.read(() => {
            try {
              n.dimensions =
                typeof t.getBBox == "function"
                  ? t.getBBox()
                  : t.getBoundingClientRect();
            } catch {
              n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
            }
          }),
            ee.render(() => {
              Gc(
                n,
                r,
                { enableHardwareAcceleration: !1 },
                Kc(t.tagName),
                e.transformTemplate
              ),
                cy(t, n);
            });
        },
      }),
    },
    Lw = {
      useVisualState: hy({
        scrapeMotionValuesFromProps: Qc,
        createRenderState: Wc,
      }),
    };
  function Vw(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...(Uc(e) ? Rw : Lw),
      preloadedFeatures: n,
      useRender: kw(t),
      createVisualElement: r,
      Component: e,
    };
  }
  function Wt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const py = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
  function fa(e, t = "page") {
    return { point: { x: e[t + "X"], y: e[t + "Y"] } };
  }
  const $w = (e) => (t) => py(t) && e(t, fa(t));
  function Yt(e, t, n, r) {
    return Wt(e, t, $w(n), r);
  }
  const Iw = (e, t) => (n) => t(e(n)),
    En = (...e) => e.reduce(Iw);
  function my(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? ((t = e), n) : !1;
    };
  }
  const Yd = my("dragHorizontal"),
    Qd = my("dragVertical");
  function gy(e) {
    let t = !1;
    if (e === "y") t = Qd();
    else if (e === "x") t = Yd();
    else {
      const n = Yd(),
        r = Qd();
      n && r
        ? (t = () => {
            n(), r();
          })
        : (n && n(), r && r());
    }
    return t;
  }
  function yy() {
    const e = gy(!0);
    return e ? (e(), !1) : !0;
  }
  class Rn {
    constructor(t) {
      (this.isMounted = !1), (this.node = t);
    }
    update() {}
  }
  function Xd(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
      r = "onHover" + (t ? "Start" : "End"),
      i = (s, o) => {
        if (s.type === "touch" || yy()) return;
        const a = e.getProps();
        e.animationState &&
          a.whileHover &&
          e.animationState.setActive("whileHover", t),
          a[r] && ee.update(() => a[r](s, o));
      };
    return Yt(e.current, n, i, { passive: !e.getProps()[r] });
  }
  class zw extends Rn {
    mount() {
      this.unmount = En(Xd(this.node, !0), Xd(this.node, !1));
    }
    unmount() {}
  }
  class Bw extends Rn {
    constructor() {
      super(...arguments), (this.isActive = !1);
    }
    onFocus() {
      let t = !1;
      try {
        t = this.node.current.matches(":focus-visible");
      } catch {
        t = !0;
      }
      !t ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !0),
        (this.isActive = !0));
    }
    onBlur() {
      !this.isActive ||
        !this.node.animationState ||
        (this.node.animationState.setActive("whileFocus", !1),
        (this.isActive = !1));
    }
    mount() {
      this.unmount = En(
        Wt(this.node.current, "focus", () => this.onFocus()),
        Wt(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  }
  const vy = (e, t) => (t ? (e === t ? !0 : vy(e, t.parentElement)) : !1);
  function ll(e, t) {
    if (!t) return;
    const n = new PointerEvent("pointer" + e);
    t(n, fa(n));
  }
  class Uw extends Rn {
    constructor() {
      super(...arguments),
        (this.removeStartListeners = fe),
        (this.removeEndListeners = fe),
        (this.removeAccessibleListeners = fe),
        (this.startPointerPress = (t, n) => {
          if ((this.removeEndListeners(), this.isPressing)) return;
          const r = this.node.getProps(),
            s = Yt(
              window,
              "pointerup",
              (a, l) => {
                if (!this.checkPressEnd()) return;
                const { onTap: u, onTapCancel: f } = this.node.getProps();
                ee.update(() => {
                  vy(this.node.current, a.target) ? u && u(a, l) : f && f(a, l);
                });
              },
              { passive: !(r.onTap || r.onPointerUp) }
            ),
            o = Yt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
              passive: !(r.onTapCancel || r.onPointerCancel),
            });
          (this.removeEndListeners = En(s, o)), this.startPress(t, n);
        }),
        (this.startAccessiblePress = () => {
          const t = (s) => {
              if (s.key !== "Enter" || this.isPressing) return;
              const o = (a) => {
                a.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  ll("up", (l, u) => {
                    const { onTap: f } = this.node.getProps();
                    f && ee.update(() => f(l, u));
                  });
              };
              this.removeEndListeners(),
                (this.removeEndListeners = Wt(this.node.current, "keyup", o)),
                ll("down", (a, l) => {
                  this.startPress(a, l);
                });
            },
            n = Wt(this.node.current, "keydown", t),
            r = () => {
              this.isPressing && ll("cancel", (s, o) => this.cancelPress(s, o));
            },
            i = Wt(this.node.current, "blur", r);
          this.removeAccessibleListeners = En(n, i);
        });
    }
    startPress(t, n) {
      this.isPressing = !0;
      const { onTapStart: r, whileTap: i } = this.node.getProps();
      i &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !0),
        r && ee.update(() => r(t, n));
    }
    checkPressEnd() {
      return (
        this.removeEndListeners(),
        (this.isPressing = !1),
        this.node.getProps().whileTap &&
          this.node.animationState &&
          this.node.animationState.setActive("whileTap", !1),
        !yy()
      );
    }
    cancelPress(t, n) {
      if (!this.checkPressEnd()) return;
      const { onTapCancel: r } = this.node.getProps();
      r && ee.update(() => r(t, n));
    }
    mount() {
      const t = this.node.getProps(),
        n = Yt(this.node.current, "pointerdown", this.startPointerPress, {
          passive: !(t.onTapStart || t.onPointerStart),
        }),
        r = Wt(this.node.current, "focus", this.startAccessiblePress);
      this.removeStartListeners = En(n, r);
    }
    unmount() {
      this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners();
    }
  }
  const Su = new WeakMap(),
    ul = new WeakMap(),
    Hw = (e) => {
      const t = Su.get(e.target);
      t && t(e);
    },
    Ww = (e) => {
      e.forEach(Hw);
    };
  function Gw({ root: e, ...t }) {
    const n = e || document;
    ul.has(n) || ul.set(n, {});
    const r = ul.get(n),
      i = JSON.stringify(t);
    return (
      r[i] || (r[i] = new IntersectionObserver(Ww, { root: e, ...t })), r[i]
    );
  }
  function Kw(e, t, n) {
    const r = Gw(t);
    return (
      Su.set(e, n),
      r.observe(e),
      () => {
        Su.delete(e), r.unobserve(e);
      }
    );
  }
  const Yw = { some: 0, all: 1 };
  class Qw extends Rn {
    constructor() {
      super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
      this.unmount();
      const { viewport: t = {} } = this.node.getProps(),
        { root: n, margin: r, amount: i = "some", once: s } = t,
        o = {
          root: n ? n.current : void 0,
          rootMargin: r,
          threshold: typeof i == "number" ? i : Yw[i],
        },
        a = (l) => {
          const { isIntersecting: u } = l;
          if (
            this.isInView === u ||
            ((this.isInView = u), s && !u && this.hasEnteredView)
          )
            return;
          u && (this.hasEnteredView = !0),
            this.node.animationState &&
              this.node.animationState.setActive("whileInView", u);
          const { onViewportEnter: f, onViewportLeave: d } =
              this.node.getProps(),
            h = u ? f : d;
          h && h(l);
        };
      return Kw(this.node.current, o, a);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver > "u") return;
      const { props: t, prevProps: n } = this.node;
      ["amount", "margin", "root"].some(Xw(t, n)) && this.startObserver();
    }
    unmount() {}
  }
  function Xw({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
  }
  const Zw = {
    inView: { Feature: Qw },
    tap: { Feature: Uw },
    focus: { Feature: Bw },
    hover: { Feature: zw },
  };
  function xy(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
  }
  function qw(e) {
    const t = {};
    return e.values.forEach((n, r) => (t[r] = n.get())), t;
  }
  function Jw(e) {
    const t = {};
    return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
  }
  function da(e, t, n) {
    const r = e.getProps();
    return Xc(r, t, n !== void 0 ? n : r.custom, qw(e), Jw(e));
  }
  const eS = "framerAppearId",
    tS = "data-" + Yc(eS);
  let nS = fe,
    Zc = fe;
  const Cn = (e) => e * 1e3,
    Qt = (e) => e / 1e3,
    rS = { current: !1 },
    wy = (e) => Array.isArray(e) && typeof e[0] == "number";
  function Sy(e) {
    return !!(
      !e ||
      (typeof e == "string" && Ty[e]) ||
      wy(e) ||
      (Array.isArray(e) && e.every(Sy))
    );
  }
  const xi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    Ty = {
      linear: "linear",
      ease: "ease",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
      circIn: xi([0, 0.65, 0.55, 1]),
      circOut: xi([0.55, 0, 1, 0.45]),
      backIn: xi([0.31, 0.01, 0.66, -0.59]),
      backOut: xi([0.33, 1.53, 0.69, 0.99]),
    };
  function Ny(e) {
    if (e) return wy(e) ? xi(e) : Array.isArray(e) ? e.map(Ny) : Ty[e];
  }
  function iS(
    e,
    t,
    n,
    {
      delay: r = 0,
      duration: i,
      repeat: s = 0,
      repeatType: o = "loop",
      ease: a,
      times: l,
    } = {}
  ) {
    const u = { [t]: n };
    l && (u.offset = l);
    const f = Ny(a);
    return (
      Array.isArray(f) && (u.easing = f),
      e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal",
      })
    );
  }
  function sS(e, { repeat: t, repeatType: n = "loop" }) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r];
  }
  const jy = (e, t, n) =>
      (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    oS = 1e-7,
    aS = 12;
  function lS(e, t, n, r, i) {
    let s,
      o,
      a = 0;
    do (o = t + (n - t) / 2), (s = jy(o, r, i) - e), s > 0 ? (n = o) : (t = o);
    while (Math.abs(s) > oS && ++a < aS);
    return o;
  }
  function hs(e, t, n, r) {
    if (e === t && n === r) return fe;
    const i = (s) => lS(s, 0, 1, e, n);
    return (s) => (s === 0 || s === 1 ? s : jy(i(s), t, r));
  }
  const uS = hs(0.42, 0, 1, 1),
    cS = hs(0, 0, 0.58, 1),
    Ey = hs(0.42, 0, 0.58, 1),
    fS = (e) => Array.isArray(e) && typeof e[0] != "number",
    Cy = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Py = (e) => (t) => 1 - e(1 - t),
    ky = (e) => 1 - Math.sin(Math.acos(e)),
    qc = Py(ky),
    dS = Cy(qc),
    by = hs(0.33, 1.53, 0.69, 0.99),
    Jc = Py(by),
    hS = Cy(Jc),
    pS = (e) =>
      (e *= 2) < 1 ? 0.5 * Jc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    mS = {
      linear: fe,
      easeIn: uS,
      easeInOut: Ey,
      easeOut: cS,
      circIn: ky,
      circInOut: dS,
      circOut: qc,
      backIn: Jc,
      backInOut: hS,
      backOut: by,
      anticipate: pS,
    },
    Zd = (e) => {
      if (Array.isArray(e)) {
        Zc(e.length === 4);
        const [t, n, r, i] = e;
        return hs(t, n, r, i);
      } else if (typeof e == "string") return mS[e];
      return e;
    },
    ef = (e, t) => (n) =>
      !!(
        (fs(n) && pw.test(n) && n.startsWith(e)) ||
        (t && Object.prototype.hasOwnProperty.call(n, t))
      ),
    Ay = (e, t, n) => (r) => {
      if (!fs(r)) return r;
      const [i, s, o, a] = r.match(ca);
      return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1,
      };
    },
    gS = (e) => An(0, 255, e),
    cl = { ...ur, transform: (e) => Math.round(gS(e)) },
    Qn = {
      test: ef("rgb", "red"),
      parse: Ay("red", "green", "blue"),
      transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
        "rgba(" +
        cl.transform(e) +
        ", " +
        cl.transform(t) +
        ", " +
        cl.transform(n) +
        ", " +
        Ai(bi.transform(r)) +
        ")",
    };
  function yS(e) {
    let t = "",
      n = "",
      r = "",
      i = "";
    return (
      e.length > 5
        ? ((t = e.substring(1, 3)),
          (n = e.substring(3, 5)),
          (r = e.substring(5, 7)),
          (i = e.substring(7, 9)))
        : ((t = e.substring(1, 2)),
          (n = e.substring(2, 3)),
          (r = e.substring(3, 4)),
          (i = e.substring(4, 5)),
          (t += t),
          (n += n),
          (r += r),
          (i += i)),
      {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1,
      }
    );
  }
  const Tu = { test: ef("#"), parse: yS, transform: Qn.transform },
    Or = {
      test: ef("hsl", "hue"),
      parse: Ay("hue", "saturation", "lightness"),
      transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
        "hsla(" +
        Math.round(e) +
        ", " +
        Rt.transform(Ai(t)) +
        ", " +
        Rt.transform(Ai(n)) +
        ", " +
        Ai(bi.transform(r)) +
        ")",
    },
    Me = {
      test: (e) => Qn.test(e) || Tu.test(e) || Or.test(e),
      parse: (e) =>
        Qn.test(e) ? Qn.parse(e) : Or.test(e) ? Or.parse(e) : Tu.parse(e),
      transform: (e) =>
        fs(e) ? e : e.hasOwnProperty("red") ? Qn.transform(e) : Or.transform(e),
    },
    ae = (e, t, n) => -n * e + n * t + e;
  function fl(e, t, n) {
    return (
      n < 0 && (n += 1),
      n > 1 && (n -= 1),
      n < 1 / 6
        ? e + (t - e) * 6 * n
        : n < 1 / 2
        ? t
        : n < 2 / 3
        ? e + (t - e) * (2 / 3 - n) * 6
        : e
    );
  }
  function vS({ hue: e, saturation: t, lightness: n, alpha: r }) {
    (e /= 360), (t /= 100), (n /= 100);
    let i = 0,
      s = 0,
      o = 0;
    if (!t) i = s = o = n;
    else {
      const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
        l = 2 * n - a;
      (i = fl(l, a, e + 1 / 3)), (s = fl(l, a, e)), (o = fl(l, a, e - 1 / 3));
    }
    return {
      red: Math.round(i * 255),
      green: Math.round(s * 255),
      blue: Math.round(o * 255),
      alpha: r,
    };
  }
  const dl = (e, t, n) => {
      const r = e * e;
      return Math.sqrt(Math.max(0, n * (t * t - r) + r));
    },
    xS = [Tu, Qn, Or],
    wS = (e) => xS.find((t) => t.test(e));
  function qd(e) {
    const t = wS(e);
    let n = t.parse(e);
    return t === Or && (n = vS(n)), n;
  }
  const Fy = (e, t) => {
    const n = qd(e),
      r = qd(t),
      i = { ...n };
    return (s) => (
      (i.red = dl(n.red, r.red, s)),
      (i.green = dl(n.green, r.green, s)),
      (i.blue = dl(n.blue, r.blue, s)),
      (i.alpha = ae(n.alpha, r.alpha, s)),
      Qn.transform(i)
    );
  };
  function SS(e) {
    var t, n;
    return (
      isNaN(e) &&
      fs(e) &&
      (((t = e.match(ca)) === null || t === void 0 ? void 0 : t.length) || 0) +
        (((n = e.match(ry)) === null || n === void 0 ? void 0 : n.length) ||
          0) >
        0
    );
  }
  const _y = { regex: dw, countKey: "Vars", token: "${v}", parse: fe },
    Oy = { regex: ry, countKey: "Colors", token: "${c}", parse: Me.parse },
    Dy = { regex: ca, countKey: "Numbers", token: "${n}", parse: ur.parse };
  function hl(e, { regex: t, countKey: n, token: r, parse: i }) {
    const s = e.tokenised.match(t);
    s &&
      ((e["num" + n] = s.length),
      (e.tokenised = e.tokenised.replace(t, r)),
      e.values.push(...s.map(i)));
  }
  function _o(e) {
    const t = e.toString(),
      n = {
        value: t,
        tokenised: t,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0,
      };
    return n.value.includes("var(--") && hl(n, _y), hl(n, Oy), hl(n, Dy), n;
  }
  function My(e) {
    return _o(e).values;
  }
  function Ry(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = _o(e),
      s = t.length;
    return (o) => {
      let a = i;
      for (let l = 0; l < s; l++)
        l < r
          ? (a = a.replace(_y.token, o[l]))
          : l < r + n
          ? (a = a.replace(Oy.token, Me.transform(o[l])))
          : (a = a.replace(Dy.token, Ai(o[l])));
      return a;
    };
  }
  const TS = (e) => (typeof e == "number" ? 0 : e);
  function NS(e) {
    const t = My(e);
    return Ry(e)(t.map(TS));
  }
  const Fn = {
      test: SS,
      parse: My,
      createTransformer: Ry,
      getAnimatableNone: NS,
    },
    Ly = (e, t) => (n) => `${n > 0 ? t : e}`;
  function Vy(e, t) {
    return typeof e == "number"
      ? (n) => ae(e, t, n)
      : Me.test(e)
      ? Fy(e, t)
      : e.startsWith("var(")
      ? Ly(e, t)
      : Iy(e, t);
  }
  const $y = (e, t) => {
      const n = [...e],
        r = n.length,
        i = e.map((s, o) => Vy(s, t[o]));
      return (s) => {
        for (let o = 0; o < r; o++) n[o] = i[o](s);
        return n;
      };
    },
    jS = (e, t) => {
      const n = { ...e, ...t },
        r = {};
      for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Vy(e[i], t[i]));
      return (i) => {
        for (const s in r) n[s] = r[s](i);
        return n;
      };
    },
    Iy = (e, t) => {
      const n = Fn.createTransformer(t),
        r = _o(e),
        i = _o(t);
      return r.numVars === i.numVars &&
        r.numColors === i.numColors &&
        r.numNumbers >= i.numNumbers
        ? En($y(r.values, i.values), n)
        : Ly(e, t);
    },
    es = (e, t, n) => {
      const r = t - e;
      return r === 0 ? 1 : (n - e) / r;
    },
    Jd = (e, t) => (n) => ae(e, t, n);
  function ES(e) {
    return typeof e == "number"
      ? Jd
      : typeof e == "string"
      ? Me.test(e)
        ? Fy
        : Iy
      : Array.isArray(e)
      ? $y
      : typeof e == "object"
      ? jS
      : Jd;
  }
  function CS(e, t, n) {
    const r = [],
      i = n || ES(e[0]),
      s = e.length - 1;
    for (let o = 0; o < s; o++) {
      let a = i(e[o], e[o + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[o] || fe : t;
        a = En(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function zy(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const s = e.length;
    if ((Zc(s === t.length), s === 1)) return () => t[0];
    e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const o = CS(t, r, i),
      a = o.length,
      l = (u) => {
        let f = 0;
        if (a > 1) for (; f < e.length - 2 && !(u < e[f + 1]); f++);
        const d = es(e[f], e[f + 1], u);
        return o[f](d);
      };
    return n ? (u) => l(An(e[0], e[s - 1], u)) : l;
  }
  function PS(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = es(0, t, r);
      e.push(ae(n, 1, i));
    }
  }
  function kS(e) {
    const t = [0];
    return PS(t, e.length - 1), t;
  }
  function bS(e, t) {
    return e.map((n) => n * t);
  }
  function AS(e, t) {
    return e.map(() => t || Ey).splice(0, e.length - 1);
  }
  function Oo({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut",
  }) {
    const i = fS(r) ? r.map(Zd) : Zd(r),
      s = { done: !1, value: t[0] },
      o = bS(n && n.length === t.length ? n : kS(t), e),
      a = zy(o, t, { ease: Array.isArray(i) ? i : AS(t, i) });
    return {
      calculatedDuration: e,
      next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
    };
  }
  function By(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const FS = 5;
  function Uy(e, t, n) {
    const r = Math.max(t - FS, 0);
    return By(n - e(r), t - r);
  }
  const pl = 0.001,
    _S = 0.01,
    eh = 10,
    OS = 0.05,
    DS = 1;
  function MS({
    duration: e = 800,
    bounce: t = 0.25,
    velocity: n = 0,
    mass: r = 1,
  }) {
    let i, s;
    nS(e <= Cn(eh));
    let o = 1 - t;
    (o = An(OS, DS, o)),
      (e = An(_S, eh, Qt(e))),
      o < 1
        ? ((i = (u) => {
            const f = u * o,
              d = f * e,
              h = f - n,
              m = Nu(u, o),
              v = Math.exp(-d);
            return pl - (h / m) * v;
          }),
          (s = (u) => {
            const d = u * o * e,
              h = d * n + n,
              m = Math.pow(o, 2) * Math.pow(u, 2) * e,
              v = Math.exp(-d),
              x = Nu(Math.pow(u, 2), o);
            return ((-i(u) + pl > 0 ? -1 : 1) * ((h - m) * v)) / x;
          }))
        : ((i = (u) => {
            const f = Math.exp(-u * e),
              d = (u - n) * e + 1;
            return -pl + f * d;
          }),
          (s = (u) => {
            const f = Math.exp(-u * e),
              d = (n - u) * (e * e);
            return f * d;
          }));
    const a = 5 / e,
      l = LS(i, s, a);
    if (((e = Cn(e)), isNaN(l)))
      return { stiffness: 100, damping: 10, duration: e };
    {
      const u = Math.pow(l, 2) * r;
      return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
    }
  }
  const RS = 12;
  function LS(e, t, n) {
    let r = n;
    for (let i = 1; i < RS; i++) r = r - e(r) / t(r);
    return r;
  }
  function Nu(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const VS = ["duration", "bounce"],
    $S = ["stiffness", "damping", "mass"];
  function th(e, t) {
    return t.some((n) => e[n] !== void 0);
  }
  function IS(e) {
    let t = {
      velocity: 0,
      stiffness: 100,
      damping: 10,
      mass: 1,
      isResolvedFromDuration: !1,
      ...e,
    };
    if (!th(e, $S) && th(e, VS)) {
      const n = MS(e);
      (t = { ...t, ...n, velocity: 0, mass: 1 }),
        (t.isResolvedFromDuration = !0);
    }
    return t;
  }
  function Hy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0],
      s = e[e.length - 1],
      o = { done: !1, value: i },
      {
        stiffness: a,
        damping: l,
        mass: u,
        velocity: f,
        duration: d,
        isResolvedFromDuration: h,
      } = IS(r),
      m = f ? -Qt(f) : 0,
      v = l / (2 * Math.sqrt(a * u)),
      x = s - i,
      C = Qt(Math.sqrt(a / u)),
      y = Math.abs(x) < 5;
    n || (n = y ? 0.01 : 2), t || (t = y ? 0.005 : 0.5);
    let p;
    if (v < 1) {
      const g = Nu(C, v);
      p = (w) => {
        const j = Math.exp(-v * C * w);
        return (
          s -
          j * (((m + v * C * x) / g) * Math.sin(g * w) + x * Math.cos(g * w))
        );
      };
    } else if (v === 1) p = (g) => s - Math.exp(-C * g) * (x + (m + C * x) * g);
    else {
      const g = C * Math.sqrt(v * v - 1);
      p = (w) => {
        const j = Math.exp(-v * C * w),
          E = Math.min(g * w, 300);
        return (
          s - (j * ((m + v * C * x) * Math.sinh(E) + g * x * Math.cosh(E))) / g
        );
      };
    }
    return {
      calculatedDuration: (h && d) || null,
      next: (g) => {
        const w = p(g);
        if (h) o.done = g >= d;
        else {
          let j = m;
          g !== 0 && (v < 1 ? (j = Uy(p, g, w)) : (j = 0));
          const E = Math.abs(j) <= n,
            N = Math.abs(s - w) <= t;
          o.done = E && N;
        }
        return (o.value = o.done ? s : w), o;
      },
    };
  }
  function nh({
    keyframes: e,
    velocity: t = 0,
    power: n = 0.8,
    timeConstant: r = 325,
    bounceDamping: i = 10,
    bounceStiffness: s = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = 0.5,
    restSpeed: f,
  }) {
    const d = e[0],
      h = { done: !1, value: d },
      m = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
      v = (P) =>
        a === void 0
          ? l
          : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
          ? a
          : l;
    let x = n * t;
    const C = d + x,
      y = o === void 0 ? C : o(C);
    y !== C && (x = y - d);
    const p = (P) => -x * Math.exp(-P / r),
      g = (P) => y + p(P),
      w = (P) => {
        const O = p(P),
          D = g(P);
        (h.done = Math.abs(O) <= u), (h.value = h.done ? y : D);
      };
    let j, E;
    const N = (P) => {
      m(h.value) &&
        ((j = P),
        (E = Hy({
          keyframes: [h.value, v(h.value)],
          velocity: Uy(g, P, h.value),
          damping: i,
          stiffness: s,
          restDelta: u,
          restSpeed: f,
        })));
    };
    return (
      N(0),
      {
        calculatedDuration: null,
        next: (P) => {
          let O = !1;
          return (
            !E && j === void 0 && ((O = !0), w(P), N(P)),
            j !== void 0 && P > j ? E.next(P - j) : (!O && w(P), h)
          );
        },
      }
    );
  }
  const zS = (e) => {
      const t = ({ timestamp: n }) => e(n);
      return {
        start: () => ee.update(t, !0),
        stop: () => en(t),
        now: () => (Te.isProcessing ? Te.timestamp : performance.now()),
      };
    },
    rh = 2e4;
  function ih(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < rh; ) (t += n), (r = e.next(t));
    return t >= rh ? 1 / 0 : t;
  }
  const BS = { decay: nh, inertia: nh, tween: Oo, keyframes: Oo, spring: Hy };
  function Do({
    autoplay: e = !0,
    delay: t = 0,
    driver: n = zS,
    keyframes: r,
    type: i = "keyframes",
    repeat: s = 0,
    repeatDelay: o = 0,
    repeatType: a = "loop",
    onPlay: l,
    onStop: u,
    onComplete: f,
    onUpdate: d,
    ...h
  }) {
    let m = 1,
      v = !1,
      x,
      C;
    const y = () => {
      C = new Promise((R) => {
        x = R;
      });
    };
    y();
    let p;
    const g = BS[i] || Oo;
    let w;
    g !== Oo &&
      typeof r[0] != "number" &&
      ((w = zy([0, 100], r, { clamp: !1 })), (r = [0, 100]));
    const j = g({ ...h, keyframes: r });
    let E;
    a === "mirror" &&
      (E = g({
        ...h,
        keyframes: [...r].reverse(),
        velocity: -(h.velocity || 0),
      }));
    let N = "idle",
      P = null,
      O = null,
      D = null;
    j.calculatedDuration === null && s && (j.calculatedDuration = ih(j));
    const { calculatedDuration: $ } = j;
    let ve = 1 / 0,
      U = 1 / 0;
    $ !== null && ((ve = $ + o), (U = ve * (s + 1) - o));
    let G = 0;
    const Z = (R) => {
        if (O === null) return;
        m > 0 && (O = Math.min(O, R)),
          m < 0 && (O = Math.min(R - U / m, O)),
          P !== null ? (G = P) : (G = Math.round(R - O) * m);
        const W = G - t * (m >= 0 ? 1 : -1),
          Pt = m >= 0 ? W < 0 : W > U;
        (G = Math.max(W, 0)), N === "finished" && P === null && (G = U);
        let ze = G,
          Qe = j;
        if (s) {
          const gr = G / ve;
          let Vn = Math.floor(gr),
            yt = gr % 1;
          !yt && gr >= 1 && (yt = 1),
            yt === 1 && Vn--,
            (Vn = Math.min(Vn, s + 1));
          const vs = !!(Vn % 2);
          vs &&
            (a === "reverse"
              ? ((yt = 1 - yt), o && (yt -= o / ve))
              : a === "mirror" && (Qe = E));
          let ri = An(0, 1, yt);
          G > U && (ri = a === "reverse" && vs ? 1 : 0), (ze = ri * ve);
        }
        const Ae = Pt ? { done: !1, value: r[0] } : Qe.next(ze);
        w && (Ae.value = w(Ae.value));
        let { done: gt } = Ae;
        !Pt && $ !== null && (gt = m >= 0 ? G >= U : G <= 0);
        const ys = P === null && (N === "finished" || (N === "running" && gt));
        return d && d(Ae.value), ys && b(), Ae;
      },
      Ie = () => {
        p && p.stop(), (p = void 0);
      },
      ot = () => {
        (N = "idle"), Ie(), x(), y(), (O = D = null);
      },
      b = () => {
        (N = "finished"), f && f(), Ie(), x();
      },
      V = () => {
        if (v) return;
        p || (p = n(Z));
        const R = p.now();
        l && l(),
          P !== null ? (O = R - P) : (!O || N === "finished") && (O = R),
          N === "finished" && y(),
          (D = O),
          (P = null),
          (N = "running"),
          p.start();
      };
    e && V();
    const I = {
      then(R, W) {
        return C.then(R, W);
      },
      get time() {
        return Qt(G);
      },
      set time(R) {
        (R = Cn(R)),
          (G = R),
          P !== null || !p || m === 0 ? (P = R) : (O = p.now() - R / m);
      },
      get duration() {
        const R = j.calculatedDuration === null ? ih(j) : j.calculatedDuration;
        return Qt(R);
      },
      get speed() {
        return m;
      },
      set speed(R) {
        R === m || !p || ((m = R), (I.time = Qt(G)));
      },
      get state() {
        return N;
      },
      play: V,
      pause: () => {
        (N = "paused"), (P = G);
      },
      stop: () => {
        (v = !0), N !== "idle" && ((N = "idle"), u && u(), ot());
      },
      cancel: () => {
        D !== null && Z(D), ot();
      },
      complete: () => {
        N = "finished";
      },
      sample: (R) => ((O = 0), Z(R)),
    };
    return I;
  }
  function US(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
  }
  const HS = US(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    WS = new Set([
      "opacity",
      "clipPath",
      "filter",
      "transform",
      "backgroundColor",
    ]),
    Vs = 10,
    GS = 2e4,
    KS = (e, t) =>
      t.type === "spring" || e === "backgroundColor" || !Sy(t.ease);
  function YS(e, t, { onUpdate: n, onComplete: r, ...i }) {
    if (
      !(
        HS() &&
        WS.has(t) &&
        !i.repeatDelay &&
        i.repeatType !== "mirror" &&
        i.damping !== 0 &&
        i.type !== "inertia"
      )
    )
      return !1;
    let o = !1,
      a,
      l;
    const u = () => {
      l = new Promise((p) => {
        a = p;
      });
    };
    u();
    let { keyframes: f, duration: d = 300, ease: h, times: m } = i;
    if (KS(t, i)) {
      const p = Do({ ...i, repeat: 0, delay: 0 });
      let g = { done: !1, value: f[0] };
      const w = [];
      let j = 0;
      for (; !g.done && j < GS; ) (g = p.sample(j)), w.push(g.value), (j += Vs);
      (m = void 0), (f = w), (d = j - Vs), (h = "linear");
    }
    const v = iS(e.owner.current, t, f, {
      ...i,
      duration: d,
      ease: h,
      times: m,
    });
    i.syncStart &&
      (v.startTime = Te.isProcessing
        ? Te.timestamp
        : document.timeline
        ? document.timeline.currentTime
        : performance.now());
    const x = () => v.cancel(),
      C = () => {
        ee.update(x), a(), u();
      };
    return (
      (v.onfinish = () => {
        e.set(sS(f, i)), r && r(), C();
      }),
      {
        then(p, g) {
          return l.then(p, g);
        },
        attachTimeline(p) {
          return (v.timeline = p), (v.onfinish = null), fe;
        },
        get time() {
          return Qt(v.currentTime || 0);
        },
        set time(p) {
          v.currentTime = Cn(p);
        },
        get speed() {
          return v.playbackRate;
        },
        set speed(p) {
          v.playbackRate = p;
        },
        get duration() {
          return Qt(d);
        },
        play: () => {
          o || (v.play(), en(x));
        },
        pause: () => v.pause(),
        stop: () => {
          if (((o = !0), v.playState === "idle")) return;
          const { currentTime: p } = v;
          if (p) {
            const g = Do({ ...i, autoplay: !1 });
            e.setWithVelocity(g.sample(p - Vs).value, g.sample(p).value, Vs);
          }
          C();
        },
        complete: () => v.finish(),
        cancel: C,
      }
    );
  }
  function QS({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
    const i = () => (
      n && n(e[e.length - 1]),
      r && r(),
      {
        time: 0,
        speed: 1,
        duration: 0,
        play: fe,
        pause: fe,
        stop: fe,
        then: (s) => (s(), Promise.resolve()),
        cancel: fe,
        complete: fe,
      }
    );
    return t
      ? Do({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
      : i();
  }
  const XS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    ZS = (e) => ({
      type: "spring",
      stiffness: 550,
      damping: e === 0 ? 2 * Math.sqrt(550) : 30,
      restSpeed: 10,
    }),
    qS = { type: "keyframes", duration: 0.8 },
    JS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    eT = (e, { keyframes: t }) =>
      t.length > 2
        ? qS
        : lr.has(e)
        ? e.startsWith("scale")
          ? ZS(t[1])
          : XS
        : JS,
    ju = (e, t) =>
      e === "zIndex"
        ? !1
        : !!(
            typeof t == "number" ||
            Array.isArray(t) ||
            (typeof t == "string" &&
              (Fn.test(t) || t === "0") &&
              !t.startsWith("url("))
          ),
    tT = new Set(["brightness", "contrast", "saturate", "opacity"]);
  function nT(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(ca) || [];
    if (!r) return e;
    const i = n.replace(r, "");
    let s = tT.has(t) ? 1 : 0;
    return r !== n && (s *= 100), t + "(" + s + i + ")";
  }
  const rT = /([a-z-]*)\(.*?\)/g,
    Eu = {
      ...Fn,
      getAnimatableNone: (e) => {
        const t = e.match(rT);
        return t ? t.map(nT).join(" ") : e;
      },
    },
    iT = {
      ...iy,
      color: Me,
      backgroundColor: Me,
      outlineColor: Me,
      fill: Me,
      stroke: Me,
      borderColor: Me,
      borderTopColor: Me,
      borderRightColor: Me,
      borderBottomColor: Me,
      borderLeftColor: Me,
      filter: Eu,
      WebkitFilter: Eu,
    },
    tf = (e) => iT[e];
  function Wy(e, t) {
    let n = tf(e);
    return (
      n !== Eu && (n = Fn),
      n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
  }
  const Gy = (e) => /^0[^.\s]+$/.test(e);
  function sT(e) {
    if (typeof e == "number") return e === 0;
    if (e !== null) return e === "none" || e === "0" || Gy(e);
  }
  function oT(e, t, n, r) {
    const i = ju(t, n);
    let s;
    Array.isArray(n) ? (s = [...n]) : (s = [null, n]);
    const o = r.from !== void 0 ? r.from : e.get();
    let a;
    const l = [];
    for (let u = 0; u < s.length; u++)
      s[u] === null && (s[u] = u === 0 ? o : s[u - 1]),
        sT(s[u]) && l.push(u),
        typeof s[u] == "string" &&
          s[u] !== "none" &&
          s[u] !== "0" &&
          (a = s[u]);
    if (i && l.length && a)
      for (let u = 0; u < l.length; u++) {
        const f = l[u];
        s[f] = Wy(t, a);
      }
    return s;
  }
  function aT({
    when: e,
    delay: t,
    delayChildren: n,
    staggerChildren: r,
    staggerDirection: i,
    repeat: s,
    repeatType: o,
    repeatDelay: a,
    from: l,
    elapsed: u,
    ...f
  }) {
    return !!Object.keys(f).length;
  }
  function Ky(e, t) {
    return e[t] || e.default || e;
  }
  const nf =
    (e, t, n, r = {}) =>
    (i) => {
      const s = Ky(r, e) || {},
        o = s.delay || r.delay || 0;
      let { elapsed: a = 0 } = r;
      a = a - Cn(o);
      const l = oT(t, e, n, s),
        u = l[0],
        f = l[l.length - 1],
        d = ju(e, u),
        h = ju(e, f);
      let m = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -a,
        onUpdate: (v) => {
          t.set(v), s.onUpdate && s.onUpdate(v);
        },
        onComplete: () => {
          i(), s.onComplete && s.onComplete();
        },
      };
      if (
        (aT(s) || (m = { ...m, ...eT(e, m) }),
        m.duration && (m.duration = Cn(m.duration)),
        m.repeatDelay && (m.repeatDelay = Cn(m.repeatDelay)),
        !d || !h || rS.current || s.type === !1)
      )
        return QS(m);
      if (
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const v = YS(t, e, m);
        if (v) return v;
      }
      return Do(m);
    };
  function Mo(e) {
    return !!(Ye(e) && e.add);
  }
  const Yy = (e) => /^\-?\d*\.?\d+$/.test(e);
  function rf(e, t) {
    e.indexOf(t) === -1 && e.push(t);
  }
  function sf(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }
  class of {
    constructor() {
      this.subscriptions = [];
    }
    add(t) {
      return rf(this.subscriptions, t), () => sf(this.subscriptions, t);
    }
    notify(t, n, r) {
      const i = this.subscriptions.length;
      if (i)
        if (i === 1) this.subscriptions[0](t, n, r);
        else
          for (let s = 0; s < i; s++) {
            const o = this.subscriptions[s];
            o && o(t, n, r);
          }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
  const lT = (e) => !isNaN(parseFloat(e));
  class uT {
    constructor(t, n = {}) {
      (this.version = "10.16.4"),
        (this.timeDelta = 0),
        (this.lastUpdated = 0),
        (this.canTrackVelocity = !1),
        (this.events = {}),
        (this.updateAndNotify = (r, i = !0) => {
          (this.prev = this.current), (this.current = r);
          const { delta: s, timestamp: o } = Te;
          this.lastUpdated !== o &&
            ((this.timeDelta = s),
            (this.lastUpdated = o),
            ee.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current &&
              this.events.change &&
              this.events.change.notify(this.current),
            this.events.velocityChange &&
              this.events.velocityChange.notify(this.getVelocity()),
            i &&
              this.events.renderRequest &&
              this.events.renderRequest.notify(this.current);
        }),
        (this.scheduleVelocityCheck = () => ee.postRender(this.velocityCheck)),
        (this.velocityCheck = ({ timestamp: r }) => {
          r !== this.lastUpdated &&
            ((this.prev = this.current),
            this.events.velocityChange &&
              this.events.velocityChange.notify(this.getVelocity()));
        }),
        (this.hasAnimated = !1),
        (this.prev = this.current = t),
        (this.canTrackVelocity = lT(this.current)),
        (this.owner = n.owner);
    }
    onChange(t) {
      return this.on("change", t);
    }
    on(t, n) {
      this.events[t] || (this.events[t] = new of());
      const r = this.events[t].add(n);
      return t === "change"
        ? () => {
            r(),
              ee.read(() => {
                this.events.change.getSize() || this.stop();
              });
          }
        : r;
    }
    clearListeners() {
      for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
      (this.passiveEffect = t), (this.stopPassiveEffect = n);
    }
    set(t, n = !0) {
      !n || !this.passiveEffect
        ? this.updateAndNotify(t, n)
        : this.passiveEffect(t, this.updateAndNotify);
    }
    setWithVelocity(t, n, r) {
      this.set(n), (this.prev = t), (this.timeDelta = r);
    }
    jump(t) {
      this.updateAndNotify(t),
        (this.prev = t),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
      return this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      return this.canTrackVelocity
        ? By(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
        : 0;
    }
    start(t) {
      return (
        this.stop(),
        new Promise((n) => {
          (this.hasAnimated = !0),
            (this.animation = t(n)),
            this.events.animationStart && this.events.animationStart.notify();
        }).then(() => {
          this.events.animationComplete &&
            this.events.animationComplete.notify(),
            this.clearAnimation();
        })
      );
    }
    stop() {
      this.animation &&
        (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function Xr(e, t) {
    return new uT(e, t);
  }
  const Qy = (e) => (t) => t.test(e),
    cT = { test: (e) => e === "auto", parse: (e) => e },
    Xy = [ur, L, Rt, sn, gw, mw, cT],
    di = (e) => Xy.find(Qy(e)),
    fT = [...Xy, Me, Fn],
    dT = (e) => fT.find(Qy(e));
  function hT(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xr(n));
  }
  function pT(e, t) {
    const n = da(e, t);
    let {
      transitionEnd: r = {},
      transition: i = {},
      ...s
    } = n ? e.makeTargetAnimatable(n, !1) : {};
    s = { ...s, ...r };
    for (const o in s) {
      const a = Aw(s[o]);
      hT(e, o, a);
    }
  }
  function mT(e, t, n) {
    var r, i;
    const s = Object.keys(t).filter((a) => !e.hasValue(a)),
      o = s.length;
    if (o)
      for (let a = 0; a < o; a++) {
        const l = s[a],
          u = t[l];
        let f = null;
        Array.isArray(u) && (f = u[0]),
          f === null &&
            (f =
              (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
                null && i !== void 0
                ? i
                : t[l]),
          f != null &&
            (typeof f == "string" && (Yy(f) || Gy(f))
              ? (f = parseFloat(f))
              : !dT(f) && Fn.test(u) && (f = Wy(l, u)),
            e.addValue(l, Xr(f, { owner: e })),
            n[l] === void 0 && (n[l] = f),
            f !== null && e.setBaseTarget(l, f));
      }
  }
  function gT(e, t) {
    return t ? (t[e] || t.default || t).from : void 0;
  }
  function yT(e, t, n) {
    const r = {};
    for (const i in e) {
      const s = gT(i, t);
      if (s !== void 0) r[i] = s;
      else {
        const o = n.getValue(i);
        o && (r[i] = o.get());
      }
    }
    return r;
  }
  function vT({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return (t[n] = !1), r;
  }
  function Zy(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let {
      transition: s = e.getDefaultTransition(),
      transitionEnd: o,
      ...a
    } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (s = r);
    const u = [],
      f = i && e.animationState && e.animationState.getState()[i];
    for (const d in a) {
      const h = e.getValue(d),
        m = a[d];
      if (!h || m === void 0 || (f && vT(f, d))) continue;
      const v = { delay: n, elapsed: 0, ...s };
      if (window.HandoffAppearAnimations && !h.hasAnimated) {
        const C = e.getProps()[tS];
        C &&
          ((v.elapsed = window.HandoffAppearAnimations(C, d, h, ee)),
          (v.syncStart = !0));
      }
      h.start(
        nf(d, h, m, e.shouldReduceMotion && lr.has(d) ? { type: !1 } : v)
      );
      const x = h.animation;
      Mo(l) && (l.add(d), x.then(() => l.remove(d))), u.push(x);
    }
    return (
      o &&
        Promise.all(u).then(() => {
          o && pT(e, o);
        }),
      u
    );
  }
  function Cu(e, t, n = {}) {
    const r = da(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(Zy(e, r, n)) : () => Promise.resolve(),
      o =
        e.variantChildren && e.variantChildren.size
          ? (l = 0) => {
              const {
                delayChildren: u = 0,
                staggerChildren: f,
                staggerDirection: d,
              } = i;
              return xT(e, t, u + l, f, d, n);
            }
          : () => Promise.resolve(),
      { when: a } = i;
    if (a) {
      const [l, u] = a === "beforeChildren" ? [s, o] : [o, s];
      return l().then(() => u());
    } else return Promise.all([s(), o(n.delay)]);
  }
  function xT(e, t, n = 0, r = 0, i = 1, s) {
    const o = [],
      a = (e.variantChildren.size - 1) * r,
      l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
    return (
      Array.from(e.variantChildren)
        .sort(wT)
        .forEach((u, f) => {
          u.notify("AnimationStart", t),
            o.push(
              Cu(u, t, { ...s, delay: n + l(f) }).then(() =>
                u.notify("AnimationComplete", t)
              )
            );
        }),
      Promise.all(o)
    );
  }
  function wT(e, t) {
    return e.sortNodePosition(t);
  }
  function ST(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
      const i = t.map((s) => Cu(e, s, n));
      r = Promise.all(i);
    } else if (typeof t == "string") r = Cu(e, t, n);
    else {
      const i = typeof t == "function" ? da(e, t, n.custom) : t;
      r = Promise.all(Zy(e, i, n));
    }
    return r.then(() => e.notify("AnimationComplete", t));
  }
  const TT = [...Ic].reverse(),
    NT = Ic.length;
  function jT(e) {
    return (t) =>
      Promise.all(t.map(({ animation: n, options: r }) => ST(e, n, r)));
  }
  function ET(e) {
    let t = jT(e);
    const n = PT();
    let r = !0;
    const i = (l, u) => {
      const f = da(e, u);
      if (f) {
        const { transition: d, transitionEnd: h, ...m } = f;
        l = { ...l, ...m, ...h };
      }
      return l;
    };
    function s(l) {
      t = l(e);
    }
    function o(l, u) {
      const f = e.getProps(),
        d = e.getVariantContext(!0) || {},
        h = [],
        m = new Set();
      let v = {},
        x = 1 / 0;
      for (let y = 0; y < NT; y++) {
        const p = TT[y],
          g = n[p],
          w = f[p] !== void 0 ? f[p] : d[p],
          j = qi(w),
          E = p === u ? g.isActive : null;
        E === !1 && (x = y);
        let N = w === d[p] && w !== f[p] && j;
        if (
          (N && r && e.manuallyAnimateOnMount && (N = !1),
          (g.protectedKeys = { ...v }),
          (!g.isActive && E === null) ||
            (!w && !g.prevProp) ||
            la(w) ||
            typeof w == "boolean")
        )
          continue;
        const P = CT(g.prevProp, w);
        let O = P || (p === u && g.isActive && !N && j) || (y > x && j);
        const D = Array.isArray(w) ? w : [w];
        let $ = D.reduce(i, {});
        E === !1 && ($ = {});
        const { prevResolvedValues: ve = {} } = g,
          U = { ...ve, ...$ },
          G = (Z) => {
            (O = !0), m.delete(Z), (g.needsAnimating[Z] = !0);
          };
        for (const Z in U) {
          const Ie = $[Z],
            ot = ve[Z];
          v.hasOwnProperty(Z) ||
            (Ie !== ot
              ? Fo(Ie) && Fo(ot)
                ? !xy(Ie, ot) || P
                  ? G(Z)
                  : (g.protectedKeys[Z] = !0)
                : Ie !== void 0
                ? G(Z)
                : m.add(Z)
              : Ie !== void 0 && m.has(Z)
              ? G(Z)
              : (g.protectedKeys[Z] = !0));
        }
        (g.prevProp = w),
          (g.prevResolvedValues = $),
          g.isActive && (v = { ...v, ...$ }),
          r && e.blockInitialAnimation && (O = !1),
          O &&
            !N &&
            h.push(
              ...D.map((Z) => ({ animation: Z, options: { type: p, ...l } }))
            );
      }
      if (m.size) {
        const y = {};
        m.forEach((p) => {
          const g = e.getBaseTarget(p);
          g !== void 0 && (y[p] = g);
        }),
          h.push({ animation: y });
      }
      let C = !!h.length;
      return (
        r && f.initial === !1 && !e.manuallyAnimateOnMount && (C = !1),
        (r = !1),
        C ? t(h) : Promise.resolve()
      );
    }
    function a(l, u, f) {
      var d;
      if (n[l].isActive === u) return Promise.resolve();
      (d = e.variantChildren) === null ||
        d === void 0 ||
        d.forEach((m) => {
          var v;
          return (v = m.animationState) === null || v === void 0
            ? void 0
            : v.setActive(l, u);
        }),
        (n[l].isActive = u);
      const h = o(f, l);
      for (const m in n) n[m].protectedKeys = {};
      return h;
    }
    return {
      animateChanges: o,
      setActive: a,
      setAnimateFunction: s,
      getState: () => n,
    };
  }
  function CT(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !xy(t, e) : !1;
  }
  function $n(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function PT() {
    return {
      animate: $n(!0),
      whileInView: $n(),
      whileHover: $n(),
      whileTap: $n(),
      whileDrag: $n(),
      whileFocus: $n(),
      exit: $n(),
    };
  }
  class kT extends Rn {
    constructor(t) {
      super(t), t.animationState || (t.animationState = ET(t));
    }
    updateAnimationControlsSubscription() {
      const { animate: t } = this.node.getProps();
      this.unmount(), la(t) && (this.unmount = t.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate: t } = this.node.getProps(),
        { animate: n } = this.node.prevProps || {};
      t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {}
  }
  let bT = 0;
  class AT extends Rn {
    constructor() {
      super(...arguments), (this.id = bT++);
    }
    update() {
      if (!this.node.presenceContext) return;
      const {
          isPresent: t,
          onExitComplete: n,
          custom: r,
        } = this.node.presenceContext,
        { isPresent: i } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t === i) return;
      const s = this.node.animationState.setActive("exit", !t, {
        custom: r ?? this.node.getProps().custom,
      });
      n && !t && s.then(() => n(this.id));
    }
    mount() {
      const { register: t } = this.node.presenceContext || {};
      t && (this.unmount = t(this.id));
    }
    unmount() {}
  }
  const FT = { animation: { Feature: kT }, exit: { Feature: AT } },
    sh = (e, t) => Math.abs(e - t);
  function _T(e, t) {
    const n = sh(e.x, t.x),
      r = sh(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class qy {
    constructor(t, n, { transformPagePoint: r } = {}) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const u = gl(this.lastMoveEventInfo, this.history),
            f = this.startEvent !== null,
            d = _T(u.offset, { x: 0, y: 0 }) >= 3;
          if (!f && !d) return;
          const { point: h } = u,
            { timestamp: m } = Te;
          this.history.push({ ...h, timestamp: m });
          const { onStart: v, onMove: x } = this.handlers;
          f ||
            (v && v(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            x && x(this.lastMoveEvent, u);
        }),
        (this.handlePointerMove = (u, f) => {
          (this.lastMoveEvent = u),
            (this.lastMoveEventInfo = ml(f, this.transformPagePoint)),
            ee.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (u, f) => {
          if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
            return;
          const { onEnd: d, onSessionEnd: h } = this.handlers,
            m = gl(
              u.type === "pointercancel"
                ? this.lastMoveEventInfo
                : ml(f, this.transformPagePoint),
              this.history
            );
          this.startEvent && d && d(u, m), h && h(u, m);
        }),
        !py(t))
      )
        return;
      (this.handlers = n), (this.transformPagePoint = r);
      const i = fa(t),
        s = ml(i, this.transformPagePoint),
        { point: o } = s,
        { timestamp: a } = Te;
      this.history = [{ ...o, timestamp: a }];
      const { onSessionStart: l } = n;
      l && l(t, gl(s, this.history)),
        (this.removeListeners = En(
          Yt(window, "pointermove", this.handlePointerMove),
          Yt(window, "pointerup", this.handlePointerUp),
          Yt(window, "pointercancel", this.handlePointerUp)
        ));
    }
    updateHandlers(t) {
      this.handlers = t;
    }
    end() {
      this.removeListeners && this.removeListeners(), en(this.updatePoint);
    }
  }
  function ml(e, t) {
    return t ? { point: t(e.point) } : e;
  }
  function oh(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function gl({ point: e }, t) {
    return {
      point: e,
      delta: oh(e, Jy(t)),
      offset: oh(e, OT(t)),
      velocity: DT(t, 0.1),
    };
  }
  function OT(e) {
    return e[0];
  }
  function Jy(e) {
    return e[e.length - 1];
  }
  function DT(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
      r = null;
    const i = Jy(e);
    for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Cn(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const s = Qt(i.timestamp - r.timestamp);
    if (s === 0) return { x: 0, y: 0 };
    const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
  }
  function nt(e) {
    return e.max - e.min;
  }
  function Pu(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function ah(e, t, n, r = 0.5) {
    (e.origin = r),
      (e.originPoint = ae(t.min, t.max, e.origin)),
      (e.scale = nt(n) / nt(t)),
      (Pu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
      (e.translate = ae(n.min, n.max, e.origin) - e.originPoint),
      (Pu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function Fi(e, t, n, r) {
    ah(e.x, t.x, n.x, r ? r.originX : void 0),
      ah(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function lh(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + nt(t));
  }
  function MT(e, t, n) {
    lh(e.x, t.x, n.x), lh(e.y, t.y, n.y);
  }
  function uh(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + nt(t));
  }
  function _i(e, t, n) {
    uh(e.x, t.x, n.x), uh(e.y, t.y, n.y);
  }
  function RT(e, { min: t, max: n }, r) {
    return (
      t !== void 0 && e < t
        ? (e = r ? ae(t, e, r.min) : Math.max(e, t))
        : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)),
      e
    );
  }
  function ch(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
    };
  }
  function LT(e, { top: t, left: n, bottom: r, right: i }) {
    return { x: ch(e.x, n, i), y: ch(e.y, t, r) };
  }
  function fh(e, t) {
    let n = t.min - e.min,
      r = t.max - e.max;
    return (
      t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
    );
  }
  function VT(e, t) {
    return { x: fh(e.x, t.x), y: fh(e.y, t.y) };
  }
  function $T(e, t) {
    let n = 0.5;
    const r = nt(e),
      i = nt(t);
    return (
      i > r
        ? (n = es(t.min, t.max - r, e.min))
        : r > i && (n = es(e.min, e.max - i, t.min)),
      An(0, 1, n)
    );
  }
  function IT(e, t) {
    const n = {};
    return (
      t.min !== void 0 && (n.min = t.min - e.min),
      t.max !== void 0 && (n.max = t.max - e.min),
      n
    );
  }
  const ku = 0.35;
  function zT(e = ku) {
    return (
      e === !1 ? (e = 0) : e === !0 && (e = ku),
      { x: dh(e, "left", "right"), y: dh(e, "top", "bottom") }
    );
  }
  function dh(e, t, n) {
    return { min: hh(e, t), max: hh(e, n) };
  }
  function hh(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const ph = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    Dr = () => ({ x: ph(), y: ph() }),
    mh = () => ({ min: 0, max: 0 }),
    ge = () => ({ x: mh(), y: mh() });
  function At(e) {
    return [e("x"), e("y")];
  }
  function e0({ top: e, left: t, right: n, bottom: r }) {
    return { x: { min: t, max: n }, y: { min: e, max: r } };
  }
  function BT({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
  }
  function UT(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }),
      r = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
  }
  function yl(e) {
    return e === void 0 || e === 1;
  }
  function bu({ scale: e, scaleX: t, scaleY: n }) {
    return !yl(e) || !yl(t) || !yl(n);
  }
  function Un(e) {
    return bu(e) || t0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
  }
  function t0(e) {
    return gh(e.x) || gh(e.y);
  }
  function gh(e) {
    return e && e !== "0%";
  }
  function Ro(e, t, n) {
    const r = e - n,
      i = t * r;
    return n + i;
  }
  function yh(e, t, n, r, i) {
    return i !== void 0 && (e = Ro(e, i, r)), Ro(e, n, r) + t;
  }
  function Au(e, t = 0, n = 1, r, i) {
    (e.min = yh(e.min, t, n, r, i)), (e.max = yh(e.max, t, n, r, i));
  }
  function n0(e, { x: t, y: n }) {
    Au(e.x, t.translate, t.scale, t.originPoint),
      Au(e.y, n.translate, n.scale, n.originPoint);
  }
  function HT(e, t, n, r = !1) {
    const i = n.length;
    if (!i) return;
    t.x = t.y = 1;
    let s, o;
    for (let a = 0; a < i; a++) {
      (s = n[a]), (o = s.projectionDelta);
      const l = s.instance;
      (l && l.style && l.style.display === "contents") ||
        (r &&
          s.options.layoutScroll &&
          s.scroll &&
          s !== s.root &&
          Mr(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
        o && ((t.x *= o.x.scale), (t.y *= o.y.scale), n0(e, o)),
        r && Un(s.latestValues) && Mr(e, s.latestValues));
    }
    (t.x = vh(t.x)), (t.y = vh(t.y));
  }
  function vh(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
      ? e
      : 1;
  }
  function un(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
  }
  function xh(e, t, [n, r, i]) {
    const s = t[i] !== void 0 ? t[i] : 0.5,
      o = ae(e.min, e.max, s);
    Au(e, t[n], t[r], o, t.scale);
  }
  const WT = ["x", "scaleX", "originX"],
    GT = ["y", "scaleY", "originY"];
  function Mr(e, t) {
    xh(e.x, t, WT), xh(e.y, t, GT);
  }
  function r0(e, t) {
    return e0(UT(e.getBoundingClientRect(), t));
  }
  function KT(e, t, n) {
    const r = r0(e, n),
      { scroll: i } = t;
    return i && (un(r.x, i.offset.x), un(r.y, i.offset.y)), r;
  }
  const YT = new WeakMap();
  class QT {
    constructor(t) {
      (this.openGlobalLock = null),
        (this.isDragging = !1),
        (this.currentDirection = null),
        (this.originPoint = { x: 0, y: 0 }),
        (this.constraints = !1),
        (this.hasMutatedConstraints = !1),
        (this.elastic = ge()),
        (this.visualElement = t);
    }
    start(t, { snapToCursor: n = !1 } = {}) {
      const { presenceContext: r } = this.visualElement;
      if (r && r.isPresent === !1) return;
      const i = (l) => {
          this.stopAnimation(), n && this.snapToCursor(fa(l, "page").point);
        },
        s = (l, u) => {
          const {
            drag: f,
            dragPropagation: d,
            onDragStart: h,
          } = this.getProps();
          if (
            f &&
            !d &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = gy(f)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            At((v) => {
              let x = this.getAxisMotionValue(v).get() || 0;
              if (Rt.test(x)) {
                const { projection: C } = this.visualElement;
                if (C && C.layout) {
                  const y = C.layout.layoutBox[v];
                  y && (x = nt(y) * (parseFloat(x) / 100));
                }
              }
              this.originPoint[v] = x;
            }),
            h && ee.update(() => h(l, u), !1, !0);
          const { animationState: m } = this.visualElement;
          m && m.setActive("whileDrag", !0);
        },
        o = (l, u) => {
          const {
            dragPropagation: f,
            dragDirectionLock: d,
            onDirectionLock: h,
            onDrag: m,
          } = this.getProps();
          if (!f && !this.openGlobalLock) return;
          const { offset: v } = u;
          if (d && this.currentDirection === null) {
            (this.currentDirection = XT(v)),
              this.currentDirection !== null && h && h(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, v),
            this.updateAxis("y", u.point, v),
            this.visualElement.render(),
            m && m(l, u);
        },
        a = (l, u) => this.stop(l, u);
      this.panSession = new qy(
        t,
        { onSessionStart: i, onStart: s, onMove: o, onSessionEnd: a },
        { transformPagePoint: this.visualElement.getTransformPagePoint() }
      );
    }
    stop(t, n) {
      const r = this.isDragging;
      if ((this.cancel(), !r)) return;
      const { velocity: i } = n;
      this.startAnimation(i);
      const { onDragEnd: s } = this.getProps();
      s && ee.update(() => s(t, n));
    }
    cancel() {
      this.isDragging = !1;
      const { projection: t, animationState: n } = this.visualElement;
      t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        (this.panSession = void 0);
      const { dragPropagation: r } = this.getProps();
      !r &&
        this.openGlobalLock &&
        (this.openGlobalLock(), (this.openGlobalLock = null)),
        n && n.setActive("whileDrag", !1);
    }
    updateAxis(t, n, r) {
      const { drag: i } = this.getProps();
      if (!r || !$s(t, i, this.currentDirection)) return;
      const s = this.getAxisMotionValue(t);
      let o = this.originPoint[t] + r[t];
      this.constraints &&
        this.constraints[t] &&
        (o = RT(o, this.constraints[t], this.elastic[t])),
        s.set(o);
    }
    resolveConstraints() {
      const { dragConstraints: t, dragElastic: n } = this.getProps(),
        { layout: r } = this.visualElement.projection || {},
        i = this.constraints;
      t && _r(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = LT(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = zT(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          At((s) => {
            this.getAxisMotionValue(s) &&
              (this.constraints[s] = IT(r.layoutBox[s], this.constraints[s]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } =
        this.getProps();
      if (!t || !_r(t)) return !1;
      const r = t.current,
        { projection: i } = this.visualElement;
      if (!i || !i.layout) return !1;
      const s = KT(r, i.root, this.visualElement.getTransformPagePoint());
      let o = VT(i.layout.layoutBox, s);
      if (n) {
        const a = n(BT(o));
        (this.hasMutatedConstraints = !!a), a && (o = e0(a));
      }
      return o;
    }
    startAnimation(t) {
      const {
          drag: n,
          dragMomentum: r,
          dragElastic: i,
          dragTransition: s,
          dragSnapToOrigin: o,
          onDragTransitionEnd: a,
        } = this.getProps(),
        l = this.constraints || {},
        u = At((f) => {
          if (!$s(f, n, this.currentDirection)) return;
          let d = (l && l[f]) || {};
          o && (d = { min: 0, max: 0 });
          const h = i ? 200 : 1e6,
            m = i ? 40 : 1e7,
            v = {
              type: "inertia",
              velocity: r ? t[f] : 0,
              bounceStiffness: h,
              bounceDamping: m,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...s,
              ...d,
            };
          return this.startAxisValueAnimation(f, v);
        });
      return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return r.start(nf(t, r, 0, n));
    }
    stopAnimation() {
      At((t) => this.getAxisMotionValue(t).stop());
    }
    getAxisMotionValue(t) {
      const n = "_drag" + t.toUpperCase(),
        r = this.visualElement.getProps(),
        i = r[n];
      return (
        i ||
        this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
      );
    }
    snapToCursor(t) {
      At((n) => {
        const { drag: r } = this.getProps();
        if (!$s(n, r, this.currentDirection)) return;
        const { projection: i } = this.visualElement,
          s = this.getAxisMotionValue(n);
        if (i && i.layout) {
          const { min: o, max: a } = i.layout.layoutBox[n];
          s.set(t[n] - ae(o, a, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      const { drag: t, dragConstraints: n } = this.getProps(),
        { projection: r } = this.visualElement;
      if (!_r(n) || !r || !this.constraints) return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      At((o) => {
        const a = this.getAxisMotionValue(o);
        if (a) {
          const l = a.get();
          i[o] = $T({ min: l, max: l }, this.constraints[o]);
        }
      });
      const { transformTemplate: s } = this.visualElement.getProps();
      (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        At((o) => {
          if (!$s(o, t, null)) return;
          const a = this.getAxisMotionValue(o),
            { min: l, max: u } = this.constraints[o];
          a.set(ae(l, u, i[o]));
        });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      YT.set(this.visualElement, this);
      const t = this.visualElement.current,
        n = Yt(t, "pointerdown", (l) => {
          const { drag: u, dragListener: f = !0 } = this.getProps();
          u && f && this.start(l);
        }),
        r = () => {
          const { dragConstraints: l } = this.getProps();
          _r(l) && (this.constraints = this.resolveRefConstraints());
        },
        { projection: i } = this.visualElement,
        s = i.addEventListener("measure", r);
      i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
        r();
      const o = Wt(window, "resize", () =>
          this.scalePositionWithinConstraints()
        ),
        a = i.addEventListener(
          "didUpdate",
          ({ delta: l, hasLayoutChanged: u }) => {
            this.isDragging &&
              u &&
              (At((f) => {
                const d = this.getAxisMotionValue(f);
                d &&
                  ((this.originPoint[f] += l[f].translate),
                  d.set(d.get() + l[f].translate));
              }),
              this.visualElement.render());
          }
        );
      return () => {
        o(), n(), s(), a && a();
      };
    }
    getProps() {
      const t = this.visualElement.getProps(),
        {
          drag: n = !1,
          dragDirectionLock: r = !1,
          dragPropagation: i = !1,
          dragConstraints: s = !1,
          dragElastic: o = ku,
          dragMomentum: a = !0,
        } = t;
      return {
        ...t,
        drag: n,
        dragDirectionLock: r,
        dragPropagation: i,
        dragConstraints: s,
        dragElastic: o,
        dragMomentum: a,
      };
    }
  }
  function $s(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
  }
  function XT(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
  }
  class ZT extends Rn {
    constructor(t) {
      super(t),
        (this.removeGroupControls = fe),
        (this.removeListeners = fe),
        (this.controls = new QT(t));
    }
    mount() {
      const { dragControls: t } = this.node.getProps();
      t && (this.removeGroupControls = t.subscribe(this.controls)),
        (this.removeListeners = this.controls.addListeners() || fe);
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
  }
  const wh = (e) => (t, n) => {
    e && ee.update(() => e(t, n));
  };
  class qT extends Rn {
    constructor() {
      super(...arguments), (this.removePointerDownListener = fe);
    }
    onPointerDown(t) {
      this.session = new qy(t, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
      });
    }
    createPanHandlers() {
      const {
        onPanSessionStart: t,
        onPanStart: n,
        onPan: r,
        onPanEnd: i,
      } = this.node.getProps();
      return {
        onSessionStart: wh(t),
        onStart: wh(n),
        onMove: r,
        onEnd: (s, o) => {
          delete this.session, i && ee.update(() => i(s, o));
        },
      };
    }
    mount() {
      this.removePointerDownListener = Yt(
        this.node.current,
        "pointerdown",
        (t) => this.onPointerDown(t)
      );
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
  }
  function JT() {
    const e = S.useContext(oa);
    if (e === null) return [!0, null];
    const { isPresent: t, onExitComplete: n, register: r } = e,
      i = S.useId();
    return S.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
  }
  const no = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
  function Sh(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
  }
  const hi = {
      correct: (e, t) => {
        if (!t.target) return e;
        if (typeof e == "string")
          if (L.test(e)) e = parseFloat(e);
          else return e;
        const n = Sh(e, t.target.x),
          r = Sh(e, t.target.y);
        return `${n}% ${r}%`;
      },
    },
    e2 = {
      correct: (e, { treeScale: t, projectionDelta: n }) => {
        const r = e,
          i = Fn.parse(e);
        if (i.length > 5) return r;
        const s = Fn.createTransformer(e),
          o = typeof i[0] != "number" ? 1 : 0,
          a = n.x.scale * t.x,
          l = n.y.scale * t.y;
        (i[0 + o] /= a), (i[1 + o] /= l);
        const u = ae(a, l, 0.5);
        return (
          typeof i[2 + o] == "number" && (i[2 + o] /= u),
          typeof i[3 + o] == "number" && (i[3 + o] /= u),
          s(i)
        );
      },
    };
  class t2 extends Ot.Component {
    componentDidMount() {
      const {
          visualElement: t,
          layoutGroup: n,
          switchLayoutGroup: r,
          layoutId: i,
        } = this.props,
        { projection: s } = t;
      lw(n2),
        s &&
          (n.group && n.group.add(s),
          r && r.register && i && r.register(s),
          s.root.didUpdate(),
          s.addEventListener("animationComplete", () => {
            this.safeToRemove();
          }),
          s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove(),
          })),
        (no.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(t) {
      const {
          layoutDependency: n,
          visualElement: r,
          drag: i,
          isPresent: s,
        } = this.props,
        o = r.projection;
      return (
        o &&
          ((o.isPresent = s),
          i || t.layoutDependency !== n || n === void 0
            ? o.willUpdate()
            : this.safeToRemove(),
          t.isPresent !== s &&
            (s
              ? o.promote()
              : o.relegate() ||
                ee.postRender(() => {
                  const a = o.getStack();
                  (!a || !a.members.length) && this.safeToRemove();
                }))),
        null
      );
    }
    componentDidUpdate() {
      const { projection: t } = this.props.visualElement;
      t &&
        (t.root.didUpdate(),
        queueMicrotask(() => {
          !t.currentAnimation && t.isLead() && this.safeToRemove();
        }));
    }
    componentWillUnmount() {
      const {
          visualElement: t,
          layoutGroup: n,
          switchLayoutGroup: r,
        } = this.props,
        { projection: i } = t;
      i &&
        (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i));
    }
    safeToRemove() {
      const { safeToRemove: t } = this.props;
      t && t();
    }
    render() {
      return null;
    }
  }
  function i0(e) {
    const [t, n] = JT(),
      r = S.useContext(Bc);
    return Ot.createElement(t2, {
      ...e,
      layoutGroup: r,
      switchLayoutGroup: S.useContext(Jg),
      isPresent: t,
      safeToRemove: n,
    });
  }
  const n2 = {
      borderRadius: {
        ...hi,
        applyTo: [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ],
      },
      borderTopLeftRadius: hi,
      borderTopRightRadius: hi,
      borderBottomLeftRadius: hi,
      borderBottomRightRadius: hi,
      boxShadow: e2,
    },
    s0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    r2 = s0.length,
    Th = (e) => (typeof e == "string" ? parseFloat(e) : e),
    Nh = (e) => typeof e == "number" || L.test(e);
  function i2(e, t, n, r, i, s) {
    i
      ? ((e.opacity = ae(0, n.opacity !== void 0 ? n.opacity : 1, s2(r))),
        (e.opacityExit = ae(t.opacity !== void 0 ? t.opacity : 1, 0, o2(r))))
      : s &&
        (e.opacity = ae(
          t.opacity !== void 0 ? t.opacity : 1,
          n.opacity !== void 0 ? n.opacity : 1,
          r
        ));
    for (let o = 0; o < r2; o++) {
      const a = `border${s0[o]}Radius`;
      let l = jh(t, a),
        u = jh(n, a);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Nh(l) === Nh(u)
          ? ((e[a] = Math.max(ae(Th(l), Th(u), r), 0)),
            (Rt.test(u) || Rt.test(l)) && (e[a] += "%"))
          : (e[a] = u);
    }
    (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
  }
  function jh(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const s2 = o0(0, 0.5, qc),
    o2 = o0(0.5, 0.95, fe);
  function o0(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(es(e, t, r)));
  }
  function Eh(e, t) {
    (e.min = t.min), (e.max = t.max);
  }
  function at(e, t) {
    Eh(e.x, t.x), Eh(e.y, t.y);
  }
  function Ch(e, t, n, r, i) {
    return (
      (e -= t), (e = Ro(e, 1 / n, r)), i !== void 0 && (e = Ro(e, 1 / i, r)), e
    );
  }
  function a2(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
    if (
      (Rt.test(t) &&
        ((t = parseFloat(t)), (t = ae(o.min, o.max, t / 100) - o.min)),
      typeof t != "number")
    )
      return;
    let a = ae(s.min, s.max, r);
    e === s && (a -= t),
      (e.min = Ch(e.min, t, n, a, i)),
      (e.max = Ch(e.max, t, n, a, i));
  }
  function Ph(e, t, [n, r, i], s, o) {
    a2(e, t[n], t[r], t[i], t.scale, s, o);
  }
  const l2 = ["x", "scaleX", "originX"],
    u2 = ["y", "scaleY", "originY"];
  function kh(e, t, n, r) {
    Ph(e.x, t, l2, n ? n.x : void 0, r ? r.x : void 0),
      Ph(e.y, t, u2, n ? n.y : void 0, r ? r.y : void 0);
  }
  function bh(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function a0(e) {
    return bh(e.x) && bh(e.y);
  }
  function c2(e, t) {
    return (
      e.x.min === t.x.min &&
      e.x.max === t.x.max &&
      e.y.min === t.y.min &&
      e.y.max === t.y.max
    );
  }
  function l0(e, t) {
    return (
      Math.round(e.x.min) === Math.round(t.x.min) &&
      Math.round(e.x.max) === Math.round(t.x.max) &&
      Math.round(e.y.min) === Math.round(t.y.min) &&
      Math.round(e.y.max) === Math.round(t.y.max)
    );
  }
  function Ah(e) {
    return nt(e.x) / nt(e.y);
  }
  class f2 {
    constructor() {
      this.members = [];
    }
    add(t) {
      rf(this.members, t), t.scheduleRender();
    }
    remove(t) {
      if (
        (sf(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead)
      ) {
        const n = this.members[this.members.length - 1];
        n && this.promote(n);
      }
    }
    relegate(t) {
      const n = this.members.findIndex((i) => t === i);
      if (n === 0) return !1;
      let r;
      for (let i = n; i >= 0; i--) {
        const s = this.members[i];
        if (s.isPresent !== !1) {
          r = s;
          break;
        }
      }
      return r ? (this.promote(r), !0) : !1;
    }
    promote(t, n) {
      const r = this.lead;
      if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
        r.instance && r.scheduleRender(),
          t.scheduleRender(),
          (t.resumeFrom = r),
          n && (t.resumeFrom.preserveOpacity = !0),
          r.snapshot &&
            ((t.snapshot = r.snapshot),
            (t.snapshot.latestValues = r.animationValues || r.latestValues)),
          t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
        const { crossfade: i } = t.options;
        i === !1 && r.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t) => {
        const { options: n, resumingFrom: r } = t;
        n.onExitComplete && n.onExitComplete(),
          r && r.options.onExitComplete && r.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((t) => {
        t.instance && t.scheduleRender(!1);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
  }
  function Fh(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
      s = e.y.translate / t.y;
    if (
      ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
      (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
      n)
    ) {
      const { rotate: l, rotateX: u, rotateY: f } = n;
      l && (r += `rotate(${l}deg) `),
        u && (r += `rotateX(${u}deg) `),
        f && (r += `rotateY(${f}deg) `);
    }
    const o = e.x.scale * t.x,
      a = e.y.scale * t.y;
    return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || "none";
  }
  const d2 = (e, t) => e.depth - t.depth;
  class h2 {
    constructor() {
      (this.children = []), (this.isDirty = !1);
    }
    add(t) {
      rf(this.children, t), (this.isDirty = !0);
    }
    remove(t) {
      sf(this.children, t), (this.isDirty = !0);
    }
    forEach(t) {
      this.isDirty && this.children.sort(d2),
        (this.isDirty = !1),
        this.children.forEach(t);
    }
  }
  function p2(e, t) {
    const n = performance.now(),
      r = ({ timestamp: i }) => {
        const s = i - n;
        s >= t && (en(r), e(s - t));
      };
    return ee.read(r, !0), () => en(r);
  }
  function m2(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function g2(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function y2(e, t, n) {
    const r = Ye(e) ? e : Xr(e);
    return r.start(nf("", r, t, n)), r.animation;
  }
  const _h = ["", "X", "Y", "Z"],
    Oh = 1e3;
  let v2 = 0;
  const Hn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
  function u0({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i,
  }) {
    return class {
      constructor(o = {}, a = t == null ? void 0 : t()) {
        (this.id = v2++),
          (this.animationId = 0),
          (this.children = new Set()),
          (this.options = {}),
          (this.isTreeAnimating = !1),
          (this.isAnimationBlocked = !1),
          (this.isLayoutDirty = !1),
          (this.isProjectionDirty = !1),
          (this.isSharedProjectionDirty = !1),
          (this.isTransformDirty = !1),
          (this.updateManuallyBlocked = !1),
          (this.updateBlockedByResize = !1),
          (this.isUpdating = !1),
          (this.isSVG = !1),
          (this.needsReset = !1),
          (this.shouldResetTransform = !1),
          (this.treeScale = { x: 1, y: 1 }),
          (this.eventHandlers = new Map()),
          (this.hasTreeAnimated = !1),
          (this.updateScheduled = !1),
          (this.checkUpdateFailed = () => {
            this.isUpdating &&
              ((this.isUpdating = !1), this.clearAllSnapshots());
          }),
          (this.updateProjection = () => {
            (Hn.totalNodes =
              Hn.resolvedTargetDeltas =
              Hn.recalculatedProjection =
                0),
              this.nodes.forEach(S2),
              this.nodes.forEach(C2),
              this.nodes.forEach(P2),
              this.nodes.forEach(T2),
              m2(Hn);
          }),
          (this.hasProjected = !1),
          (this.isVisible = !0),
          (this.animationProgress = 0),
          (this.sharedNodes = new Map()),
          (this.latestValues = o),
          (this.root = a ? a.root || a : this),
          (this.path = a ? [...a.path, a] : []),
          (this.parent = a),
          (this.depth = a ? a.depth + 1 : 0);
        for (let l = 0; l < this.path.length; l++)
          this.path[l].shouldResetTransform = !0;
        this.root === this && (this.nodes = new h2());
      }
      addEventListener(o, a) {
        return (
          this.eventHandlers.has(o) || this.eventHandlers.set(o, new of()),
          this.eventHandlers.get(o).add(a)
        );
      }
      notifyListeners(o, ...a) {
        const l = this.eventHandlers.get(o);
        l && l.notify(...a);
      }
      hasListeners(o) {
        return this.eventHandlers.has(o);
      }
      mount(o, a = this.root.hasTreeAnimated) {
        if (this.instance) return;
        (this.isSVG = g2(o)), (this.instance = o);
        const { layoutId: l, layout: u, visualElement: f } = this.options;
        if (
          (f && !f.current && f.mount(o),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          a && (u || l) && (this.isLayoutDirty = !0),
          e)
        ) {
          let d;
          const h = () => (this.root.updateBlockedByResize = !1);
          e(o, () => {
            (this.root.updateBlockedByResize = !0),
              d && d(),
              (d = p2(h, 250)),
              no.hasAnimatedSinceResize &&
                ((no.hasAnimatedSinceResize = !1), this.nodes.forEach(Mh));
          });
        }
        l && this.root.registerSharedNode(l, this),
          this.options.animate !== !1 &&
            f &&
            (l || u) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: d,
                hasLayoutChanged: h,
                hasRelativeTargetChanged: m,
                layout: v,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  (this.target = void 0), (this.relativeTarget = void 0);
                  return;
                }
                const x =
                    this.options.transition || f.getDefaultTransition() || _2,
                  { onLayoutAnimationStart: C, onLayoutAnimationComplete: y } =
                    f.getProps(),
                  p = !this.targetLayout || !l0(this.targetLayout, v) || m,
                  g = !h && m;
                if (
                  this.options.layoutRoot ||
                  (this.resumeFrom && this.resumeFrom.instance) ||
                  g ||
                  (h && (p || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0)),
                    this.setAnimationOrigin(d, g);
                  const w = { ...Ky(x, "layout"), onPlay: C, onComplete: y };
                  (f.shouldReduceMotion || this.options.layoutRoot) &&
                    ((w.delay = 0), (w.type = !1)),
                    this.startAnimation(w);
                } else
                  h || Mh(this),
                    this.isLead() &&
                      this.options.onExitComplete &&
                      this.options.onExitComplete();
                this.targetLayout = v;
              }
            );
      }
      unmount() {
        this.options.layoutId && this.willUpdate(),
          this.root.nodes.remove(this);
        const o = this.getStack();
        o && o.remove(this),
          this.parent && this.parent.children.delete(this),
          (this.instance = void 0),
          en(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = !0;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = !1;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return (
          this.isAnimationBlocked ||
          (this.parent && this.parent.isTreeAnimationBlocked()) ||
          !1
        );
      }
      startUpdate() {
        this.isUpdateBlocked() ||
          ((this.isUpdating = !0),
          this.nodes && this.nodes.forEach(k2),
          this.animationId++);
      }
      getTransformTemplate() {
        const { visualElement: o } = this.options;
        return o && o.getProps().transformTemplate;
      }
      willUpdate(o = !0) {
        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (
          (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        )
          return;
        this.isLayoutDirty = !0;
        for (let f = 0; f < this.path.length; f++) {
          const d = this.path[f];
          (d.shouldResetTransform = !0),
            d.updateScroll("snapshot"),
            d.options.layoutRoot && d.willUpdate(!1);
        }
        const { layoutId: a, layout: l } = this.options;
        if (a === void 0 && !l) return;
        const u = this.getTransformTemplate();
        (this.prevTransformTemplateValue = u
          ? u(this.latestValues, "")
          : void 0),
          this.updateSnapshot(),
          o && this.notifyListeners("willUpdate");
      }
      update() {
        if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
          this.unblockUpdate(),
            this.clearAllSnapshots(),
            this.nodes.forEach(Dh);
          return;
        }
        this.isUpdating || this.nodes.forEach(j2),
          (this.isUpdating = !1),
          this.nodes.forEach(E2),
          this.nodes.forEach(x2),
          this.nodes.forEach(w2),
          this.clearAllSnapshots();
        const a = performance.now();
        (Te.delta = An(0, 1e3 / 60, a - Te.timestamp)),
          (Te.timestamp = a),
          (Te.isProcessing = !0),
          al.update.process(Te),
          al.preRender.process(Te),
          al.render.process(Te),
          (Te.isProcessing = !1);
      }
      didUpdate() {
        this.updateScheduled ||
          ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
      }
      clearAllSnapshots() {
        this.nodes.forEach(N2), this.sharedNodes.forEach(b2);
      }
      scheduleUpdateProjection() {
        ee.preRender(this.updateProjection, !1, !0);
      }
      scheduleCheckAfterUnmount() {
        ee.postRender(() => {
          this.isLayoutDirty
            ? this.root.didUpdate()
            : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        this.snapshot || !this.instance || (this.snapshot = this.measure());
      }
      updateLayout() {
        if (
          !this.instance ||
          (this.updateScroll(),
          !(this.options.alwaysMeasureLayout && this.isLead()) &&
            !this.isLayoutDirty)
        )
          return;
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (let l = 0; l < this.path.length; l++)
            this.path[l].updateScroll();
        const o = this.layout;
        (this.layout = this.measure(!1)),
          (this.layoutCorrected = ge()),
          (this.isLayoutDirty = !1),
          (this.projectionDelta = void 0),
          this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement: a } = this.options;
        a &&
          a.notify(
            "LayoutMeasure",
            this.layout.layoutBox,
            o ? o.layoutBox : void 0
          );
      }
      updateScroll(o = "measure") {
        let a = !!(this.options.layoutScroll && this.instance);
        this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
          a &&
            (this.scroll = {
              animationId: this.root.animationId,
              phase: o,
              isRoot: r(this.instance),
              offset: n(this.instance),
            });
      }
      resetTransform() {
        if (!i) return;
        const o = this.isLayoutDirty || this.shouldResetTransform,
          a = this.projectionDelta && !a0(this.projectionDelta),
          l = this.getTransformTemplate(),
          u = l ? l(this.latestValues, "") : void 0,
          f = u !== this.prevTransformTemplateValue;
        o &&
          (a || Un(this.latestValues) || f) &&
          (i(this.instance, u),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(o = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return (
          o && (l = this.removeTransform(l)),
          O2(l),
          {
            animationId: this.root.animationId,
            measuredBox: a,
            layoutBox: l,
            latestValues: {},
            source: this.id,
          }
        );
      }
      measurePageBox() {
        const { visualElement: o } = this.options;
        if (!o) return ge();
        const a = o.measureViewportBox(),
          { scroll: l } = this.root;
        return l && (un(a.x, l.offset.x), un(a.y, l.offset.y)), a;
      }
      removeElementScroll(o) {
        const a = ge();
        at(a, o);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l],
            { scroll: f, options: d } = u;
          if (u !== this.root && f && d.layoutScroll) {
            if (f.isRoot) {
              at(a, o);
              const { scroll: h } = this.root;
              h && (un(a.x, -h.offset.x), un(a.y, -h.offset.y));
            }
            un(a.x, f.offset.x), un(a.y, f.offset.y);
          }
        }
        return a;
      }
      applyTransform(o, a = !1) {
        const l = ge();
        at(l, o);
        for (let u = 0; u < this.path.length; u++) {
          const f = this.path[u];
          !a &&
            f.options.layoutScroll &&
            f.scroll &&
            f !== f.root &&
            Mr(l, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
            Un(f.latestValues) && Mr(l, f.latestValues);
        }
        return Un(this.latestValues) && Mr(l, this.latestValues), l;
      }
      removeTransform(o) {
        const a = ge();
        at(a, o);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !Un(u.latestValues)) continue;
          bu(u.latestValues) && u.updateSnapshot();
          const f = ge(),
            d = u.measurePageBox();
          at(f, d),
            kh(
              a,
              u.latestValues,
              u.snapshot ? u.snapshot.layoutBox : void 0,
              f
            );
        }
        return Un(this.latestValues) && kh(a, this.latestValues), a;
      }
      setTargetDelta(o) {
        (this.targetDelta = o),
          this.root.scheduleUpdateProjection(),
          (this.isProjectionDirty = !0);
      }
      setOptions(o) {
        this.options = {
          ...this.options,
          ...o,
          crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
        };
      }
      clearMeasurements() {
        (this.scroll = void 0),
          (this.layout = void 0),
          (this.snapshot = void 0),
          (this.prevTransformTemplateValue = void 0),
          (this.targetDelta = void 0),
          (this.target = void 0),
          (this.isLayoutDirty = !1);
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent &&
          this.relativeParent.resolvedRelativeTargetAt !== Te.timestamp &&
          this.relativeParent.resolveTargetDelta(!0);
      }
      resolveTargetDelta(o = !1) {
        var a;
        const l = this.getLead();
        this.isProjectionDirty ||
          (this.isProjectionDirty = l.isProjectionDirty),
          this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
          this.isSharedProjectionDirty ||
            (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
        const u = !!this.resumingFrom || this !== l;
        if (
          !(
            o ||
            (u && this.isSharedProjectionDirty) ||
            this.isProjectionDirty ||
            (!((a = this.parent) === null || a === void 0) &&
              a.isProjectionDirty) ||
            this.attemptToResolveRelativeTarget
          )
        )
          return;
        const { layout: d, layoutId: h } = this.options;
        if (!(!this.layout || !(d || h))) {
          if (
            ((this.resolvedRelativeTargetAt = Te.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const m = this.getClosestProjectingParent();
            m && m.layout && this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ge()),
                (this.relativeTargetOrigin = ge()),
                _i(
                  this.relativeTargetOrigin,
                  this.layout.layoutBox,
                  m.layout.layoutBox
                ),
                at(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          if (!(!this.relativeTarget && !this.targetDelta)) {
            if (
              (this.target ||
                ((this.target = ge()), (this.targetWithTransforms = ge())),
              this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.relativeParent &&
              this.relativeParent.target
                ? (this.forceRelativeParentToResolveTarget(),
                  MT(
                    this.target,
                    this.relativeTarget,
                    this.relativeParent.target
                  ))
                : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : at(this.target, this.layout.layoutBox),
                  n0(this.target, this.targetDelta))
                : at(this.target, this.layout.layoutBox),
              this.attemptToResolveRelativeTarget)
            ) {
              this.attemptToResolveRelativeTarget = !1;
              const m = this.getClosestProjectingParent();
              m &&
              !!m.resumingFrom == !!this.resumingFrom &&
              !m.options.layoutScroll &&
              m.target &&
              this.animationProgress !== 1
                ? ((this.relativeParent = m),
                  this.forceRelativeParentToResolveTarget(),
                  (this.relativeTarget = ge()),
                  (this.relativeTargetOrigin = ge()),
                  _i(this.relativeTargetOrigin, this.target, m.target),
                  at(this.relativeTarget, this.relativeTargetOrigin))
                : (this.relativeParent = this.relativeTarget = void 0);
            }
            Hn.resolvedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (
          !(
            !this.parent ||
            bu(this.parent.latestValues) ||
            t0(this.parent.latestValues)
          )
        )
          return this.parent.isProjecting()
            ? this.parent
            : this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!(
          (this.relativeTarget ||
            this.targetDelta ||
            this.options.layoutRoot) &&
          this.layout
        );
      }
      calcProjection() {
        var o;
        const a = this.getLead(),
          l = !!this.resumingFrom || this !== a;
        let u = !0;
        if (
          ((this.isProjectionDirty ||
            (!((o = this.parent) === null || o === void 0) &&
              o.isProjectionDirty)) &&
            (u = !1),
          l &&
            (this.isSharedProjectionDirty || this.isTransformDirty) &&
            (u = !1),
          this.resolvedRelativeTargetAt === Te.timestamp && (u = !1),
          u)
        )
          return;
        const { layout: f, layoutId: d } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(f || d))
        )
          return;
        at(this.layoutCorrected, this.layout.layoutBox);
        const h = this.treeScale.x,
          m = this.treeScale.y;
        HT(this.layoutCorrected, this.treeScale, this.path, l),
          a.layout &&
            !a.target &&
            (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
            (a.target = a.layout.layoutBox);
        const { target: v } = a;
        if (!v) {
          this.projectionTransform &&
            ((this.projectionDelta = Dr()),
            (this.projectionTransform = "none"),
            this.scheduleRender());
          return;
        }
        this.projectionDelta ||
          ((this.projectionDelta = Dr()),
          (this.projectionDeltaWithTransform = Dr()));
        const x = this.projectionTransform;
        Fi(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
          (this.projectionTransform = Fh(this.projectionDelta, this.treeScale)),
          (this.projectionTransform !== x ||
            this.treeScale.x !== h ||
            this.treeScale.y !== m) &&
            ((this.hasProjected = !0),
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v)),
          Hn.recalculatedProjection++;
      }
      hide() {
        this.isVisible = !1;
      }
      show() {
        this.isVisible = !0;
      }
      scheduleRender(o = !0) {
        if ((this.options.scheduleRender && this.options.scheduleRender(), o)) {
          const a = this.getStack();
          a && a.scheduleRender();
        }
        this.resumingFrom &&
          !this.resumingFrom.instance &&
          (this.resumingFrom = void 0);
      }
      setAnimationOrigin(o, a = !1) {
        const l = this.snapshot,
          u = l ? l.latestValues : {},
          f = { ...this.latestValues },
          d = Dr();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !a);
        const h = ge(),
          m = l ? l.source : void 0,
          v = this.layout ? this.layout.source : void 0,
          x = m !== v,
          C = this.getStack(),
          y = !C || C.members.length <= 1,
          p = !!(
            x &&
            !y &&
            this.options.crossfade === !0 &&
            !this.path.some(F2)
          );
        this.animationProgress = 0;
        let g;
        (this.mixTargetDelta = (w) => {
          const j = w / 1e3;
          Rh(d.x, o.x, j),
            Rh(d.y, o.y, j),
            this.setTargetDelta(d),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              this.relativeParent &&
              this.relativeParent.layout &&
              (_i(
                h,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox
              ),
              A2(this.relativeTarget, this.relativeTargetOrigin, h, j),
              g && c2(this.relativeTarget, g) && (this.isProjectionDirty = !1),
              g || (g = ge()),
              at(g, this.relativeTarget)),
            x &&
              ((this.animationValues = f),
              i2(f, u, this.latestValues, j, p, y)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = j);
        }),
          this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(o) {
        this.notifyListeners("animationStart"),
          this.currentAnimation && this.currentAnimation.stop(),
          this.resumingFrom &&
            this.resumingFrom.currentAnimation &&
            this.resumingFrom.currentAnimation.stop(),
          this.pendingAnimation &&
            (en(this.pendingAnimation), (this.pendingAnimation = void 0)),
          (this.pendingAnimation = ee.update(() => {
            (no.hasAnimatedSinceResize = !0),
              (this.currentAnimation = y2(0, Oh, {
                ...o,
                onUpdate: (a) => {
                  this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
                },
                onComplete: () => {
                  o.onComplete && o.onComplete(), this.completeAnimation();
                },
              })),
              this.resumingFrom &&
                (this.resumingFrom.currentAnimation = this.currentAnimation),
              (this.pendingAnimation = void 0);
          }));
      }
      completeAnimation() {
        this.resumingFrom &&
          ((this.resumingFrom.currentAnimation = void 0),
          (this.resumingFrom.preserveOpacity = void 0));
        const o = this.getStack();
        o && o.exitAnimationComplete(),
          (this.resumingFrom =
            this.currentAnimation =
            this.animationValues =
              void 0),
          this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation &&
          (this.mixTargetDelta && this.mixTargetDelta(Oh),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const o = this.getLead();
        let {
          targetWithTransforms: a,
          target: l,
          layout: u,
          latestValues: f,
        } = o;
        if (!(!a || !l || !u)) {
          if (
            this !== o &&
            this.layout &&
            u &&
            c0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
          ) {
            l = this.target || ge();
            const d = nt(this.layout.layoutBox.x);
            (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
            const h = nt(this.layout.layoutBox.y);
            (l.y.min = o.target.y.min), (l.y.max = l.y.min + h);
          }
          at(a, l),
            Mr(a, f),
            Fi(this.projectionDeltaWithTransform, this.layoutCorrected, a, f);
        }
      }
      registerSharedNode(o, a) {
        this.sharedNodes.has(o) || this.sharedNodes.set(o, new f2()),
          this.sharedNodes.get(o).add(a);
        const u = a.options.initialPromotionConfig;
        a.promote({
          transition: u ? u.transition : void 0,
          preserveFollowOpacity:
            u && u.shouldPreserveFollowOpacity
              ? u.shouldPreserveFollowOpacity(a)
              : void 0,
        });
      }
      isLead() {
        const o = this.getStack();
        return o ? o.lead === this : !0;
      }
      getLead() {
        var o;
        const { layoutId: a } = this.options;
        return a
          ? ((o = this.getStack()) === null || o === void 0
              ? void 0
              : o.lead) || this
          : this;
      }
      getPrevLead() {
        var o;
        const { layoutId: a } = this.options;
        return a
          ? (o = this.getStack()) === null || o === void 0
            ? void 0
            : o.prevLead
          : void 0;
      }
      getStack() {
        const { layoutId: o } = this.options;
        if (o) return this.root.sharedNodes.get(o);
      }
      promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
        const u = this.getStack();
        u && u.promote(this, l),
          o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
          a && this.setOptions({ transition: a });
      }
      relegate() {
        const o = this.getStack();
        return o ? o.relegate(this) : !1;
      }
      resetRotation() {
        const { visualElement: o } = this.options;
        if (!o) return;
        let a = !1;
        const { latestValues: l } = o;
        if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
          return;
        const u = {};
        for (let f = 0; f < _h.length; f++) {
          const d = "rotate" + _h[f];
          l[d] && ((u[d] = l[d]), o.setStaticValue(d, 0));
        }
        o.render();
        for (const f in u) o.setStaticValue(f, u[f]);
        o.scheduleRender();
      }
      getProjectionStyles(o = {}) {
        var a, l;
        const u = {};
        if (!this.instance || this.isSVG) return u;
        if (this.isVisible) u.visibility = "";
        else return { visibility: "hidden" };
        const f = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (u.opacity = ""),
            (u.pointerEvents = to(o.pointerEvents) || ""),
            (u.transform = f ? f(this.latestValues, "") : "none"),
            u
          );
        const d = this.getLead();
        if (!this.projectionDelta || !this.layout || !d.target) {
          const x = {};
          return (
            this.options.layoutId &&
              ((x.opacity =
                this.latestValues.opacity !== void 0
                  ? this.latestValues.opacity
                  : 1),
              (x.pointerEvents = to(o.pointerEvents) || "")),
            this.hasProjected &&
              !Un(this.latestValues) &&
              ((x.transform = f ? f({}, "") : "none"),
              (this.hasProjected = !1)),
            x
          );
        }
        const h = d.animationValues || d.latestValues;
        this.applyTransformsToTarget(),
          (u.transform = Fh(
            this.projectionDeltaWithTransform,
            this.treeScale,
            h
          )),
          f && (u.transform = f(h, u.transform));
        const { x: m, y: v } = this.projectionDelta;
        (u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`),
          d.animationValues
            ? (u.opacity =
                d === this
                  ? (l =
                      (a = h.opacity) !== null && a !== void 0
                        ? a
                        : this.latestValues.opacity) !== null && l !== void 0
                    ? l
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : h.opacityExit)
            : (u.opacity =
                d === this
                  ? h.opacity !== void 0
                    ? h.opacity
                    : ""
                  : h.opacityExit !== void 0
                  ? h.opacityExit
                  : 0);
        for (const x in bo) {
          if (h[x] === void 0) continue;
          const { correct: C, applyTo: y } = bo[x],
            p = u.transform === "none" ? h[x] : C(h[x], d);
          if (y) {
            const g = y.length;
            for (let w = 0; w < g; w++) u[y[w]] = p;
          } else u[x] = p;
        }
        return (
          this.options.layoutId &&
            (u.pointerEvents = d === this ? to(o.pointerEvents) || "" : "none"),
          u
        );
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((o) => {
          var a;
          return (a = o.currentAnimation) === null || a === void 0
            ? void 0
            : a.stop();
        }),
          this.root.nodes.forEach(Dh),
          this.root.sharedNodes.clear();
      }
    };
  }
  function x2(e) {
    e.updateLayout();
  }
  function w2(e) {
    var t;
    const n =
      ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
      e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout,
        { animationType: s } = e.options,
        o = n.source !== e.layout.source;
      s === "size"
        ? At((d) => {
            const h = o ? n.measuredBox[d] : n.layoutBox[d],
              m = nt(h);
            (h.min = r[d].min), (h.max = h.min + m);
          })
        : c0(s, n.layoutBox, r) &&
          At((d) => {
            const h = o ? n.measuredBox[d] : n.layoutBox[d],
              m = nt(r[d]);
            (h.max = h.min + m),
              e.relativeTarget &&
                !e.currentAnimation &&
                ((e.isProjectionDirty = !0),
                (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
          });
      const a = Dr();
      Fi(a, r, n.layoutBox);
      const l = Dr();
      o ? Fi(l, e.applyTransform(i, !0), n.measuredBox) : Fi(l, r, n.layoutBox);
      const u = !a0(a);
      let f = !1;
      if (!e.resumeFrom) {
        const d = e.getClosestProjectingParent();
        if (d && !d.resumeFrom) {
          const { snapshot: h, layout: m } = d;
          if (h && m) {
            const v = ge();
            _i(v, n.layoutBox, h.layoutBox);
            const x = ge();
            _i(x, r, m.layoutBox),
              l0(v, x) || (f = !0),
              d.options.layoutRoot &&
                ((e.relativeTarget = x),
                (e.relativeTargetOrigin = v),
                (e.relativeParent = d));
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: r,
        snapshot: n,
        delta: l,
        layoutDelta: a,
        hasLayoutChanged: u,
        hasRelativeTargetChanged: f,
      });
    } else if (e.isLead()) {
      const { onExitComplete: r } = e.options;
      r && r();
    }
    e.options.transition = void 0;
  }
  function S2(e) {
    Hn.totalNodes++,
      e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
          (e.isSharedProjectionDirty = !!(
            e.isProjectionDirty ||
            e.parent.isProjectionDirty ||
            e.parent.isSharedProjectionDirty
          )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
  }
  function T2(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function N2(e) {
    e.clearSnapshot();
  }
  function Dh(e) {
    e.clearMeasurements();
  }
  function j2(e) {
    e.isLayoutDirty = !1;
  }
  function E2(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
      e.resetTransform();
  }
  function Mh(e) {
    e.finishAnimation(),
      (e.targetDelta = e.relativeTarget = e.target = void 0),
      (e.isProjectionDirty = !0);
  }
  function C2(e) {
    e.resolveTargetDelta();
  }
  function P2(e) {
    e.calcProjection();
  }
  function k2(e) {
    e.resetRotation();
  }
  function b2(e) {
    e.removeLeadSnapshot();
  }
  function Rh(e, t, n) {
    (e.translate = ae(t.translate, 0, n)),
      (e.scale = ae(t.scale, 1, n)),
      (e.origin = t.origin),
      (e.originPoint = t.originPoint);
  }
  function Lh(e, t, n, r) {
    (e.min = ae(t.min, n.min, r)), (e.max = ae(t.max, n.max, r));
  }
  function A2(e, t, n, r) {
    Lh(e.x, t.x, n.x, r), Lh(e.y, t.y, n.y, r);
  }
  function F2(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const _2 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Vh = (e) =>
      typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
    $h = Vh("applewebkit/") && !Vh("chrome/") ? Math.round : fe;
  function Ih(e) {
    (e.min = $h(e.min)), (e.max = $h(e.max));
  }
  function O2(e) {
    Ih(e.x), Ih(e.y);
  }
  function c0(e, t, n) {
    return (
      e === "position" || (e === "preserve-aspect" && !Pu(Ah(t), Ah(n), 0.2))
    );
  }
  const D2 = u0({
      attachResizeListener: (e, t) => Wt(e, "resize", t),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    vl = { current: void 0 },
    f0 = u0({
      measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
      defaultParent: () => {
        if (!vl.current) {
          const e = new D2({});
          e.mount(window), e.setOptions({ layoutScroll: !0 }), (vl.current = e);
        }
        return vl.current;
      },
      resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none";
      },
      checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
    }),
    M2 = {
      pan: { Feature: qT },
      drag: { Feature: ZT, ProjectionNode: f0, MeasureLayout: i0 },
    },
    R2 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function L2(e) {
    const t = R2.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  }
  function Fu(e, t, n = 1) {
    const [r, i] = L2(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
      const o = s.trim();
      return Yy(o) ? parseFloat(o) : o;
    } else return wu(i) ? Fu(i, t, n + 1) : i;
  }
  function V2(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element)) return { target: t, transitionEnd: n };
    n && (n = { ...n }),
      e.values.forEach((i) => {
        const s = i.get();
        if (!wu(s)) return;
        const o = Fu(s, r);
        o && i.set(o);
      });
    for (const i in t) {
      const s = t[i];
      if (!wu(s)) continue;
      const o = Fu(s, r);
      o && ((t[i] = o), n || (n = {}), n[i] === void 0 && (n[i] = s));
    }
    return { target: t, transitionEnd: n };
  }
  const $2 = new Set([
      "width",
      "height",
      "top",
      "left",
      "right",
      "bottom",
      "x",
      "y",
      "translateX",
      "translateY",
    ]),
    d0 = (e) => $2.has(e),
    I2 = (e) => Object.keys(e).some(d0),
    zh = (e) => e === ur || e === L,
    Bh = (e, t) => parseFloat(e.split(", ")[t]),
    Uh =
      (e, t) =>
      (n, { transform: r }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i) return Bh(i[1], t);
        {
          const s = r.match(/^matrix\((.+)\)$/);
          return s ? Bh(s[1], e) : 0;
        }
      },
    z2 = new Set(["x", "y", "z"]),
    B2 = cs.filter((e) => !z2.has(e));
  function U2(e) {
    const t = [];
    return (
      B2.forEach((n) => {
        const r = e.getValue(n);
        r !== void 0 &&
          (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
      }),
      t.length && e.render(),
      t
    );
  }
  const Zr = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
      e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: Uh(4, 13),
    y: Uh(5, 14),
  };
  Zr.translateX = Zr.x;
  Zr.translateY = Zr.y;
  const H2 = (e, t, n) => {
      const r = t.measureViewportBox(),
        i = t.current,
        s = getComputedStyle(i),
        { display: o } = s,
        a = {};
      o === "none" && t.setStaticValue("display", e.display || "block"),
        n.forEach((u) => {
          a[u] = Zr[u](r, s);
        }),
        t.render();
      const l = t.measureViewportBox();
      return (
        n.forEach((u) => {
          const f = t.getValue(u);
          f && f.jump(a[u]), (e[u] = Zr[u](l, s));
        }),
        e
      );
    },
    W2 = (e, t, n = {}, r = {}) => {
      (t = { ...t }), (r = { ...r });
      const i = Object.keys(t).filter(d0);
      let s = [],
        o = !1;
      const a = [];
      if (
        (i.forEach((l) => {
          const u = e.getValue(l);
          if (!e.hasValue(l)) return;
          let f = n[l],
            d = di(f);
          const h = t[l];
          let m;
          if (Fo(h)) {
            const v = h.length,
              x = h[0] === null ? 1 : 0;
            (f = h[x]), (d = di(f));
            for (let C = x; C < v && h[C] !== null; C++)
              m ? Zc(di(h[C]) === m) : (m = di(h[C]));
          } else m = di(h);
          if (d !== m)
            if (zh(d) && zh(m)) {
              const v = u.get();
              typeof v == "string" && u.set(parseFloat(v)),
                typeof h == "string"
                  ? (t[l] = parseFloat(h))
                  : Array.isArray(h) && m === L && (t[l] = h.map(parseFloat));
            } else
              d != null &&
              d.transform &&
              m != null &&
              m.transform &&
              (f === 0 || h === 0)
                ? f === 0
                  ? u.set(m.transform(f))
                  : (t[l] = d.transform(h))
                : (o || ((s = U2(e)), (o = !0)),
                  a.push(l),
                  (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                  u.jump(h));
        }),
        a.length)
      ) {
        const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
          u = H2(t, e, a);
        return (
          s.length &&
            s.forEach(([f, d]) => {
              e.getValue(f).set(d);
            }),
          e.render(),
          aa && l !== null && window.scrollTo({ top: l }),
          { target: u, transitionEnd: r }
        );
      } else return { target: t, transitionEnd: r };
    };
  function G2(e, t, n, r) {
    return I2(t) ? W2(e, t, n, r) : { target: t, transitionEnd: r };
  }
  const K2 = (e, t, n, r) => {
      const i = V2(e, t, r);
      return (t = i.target), (r = i.transitionEnd), G2(e, t, n, r);
    },
    _u = { current: null },
    h0 = { current: !1 };
  function Y2() {
    if (((h0.current = !0), !!aa))
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"),
          t = () => (_u.current = e.matches);
        e.addListener(t), t();
      } else _u.current = !1;
  }
  function Q2(e, t, n) {
    const { willChange: r } = t;
    for (const i in t) {
      const s = t[i],
        o = n[i];
      if (Ye(s)) e.addValue(i, s), Mo(r) && r.add(i);
      else if (Ye(o)) e.addValue(i, Xr(s, { owner: e })), Mo(r) && r.remove(i);
      else if (o !== s)
        if (e.hasValue(i)) {
          const a = e.getValue(i);
          !a.hasAnimated && a.set(s);
        } else {
          const a = e.getStaticValue(i);
          e.addValue(i, Xr(a !== void 0 ? a : s, { owner: e }));
        }
    }
    for (const i in n) t[i] === void 0 && e.removeValue(i);
    return t;
  }
  const Hh = new WeakMap(),
    p0 = Object.keys(Ji),
    X2 = p0.length,
    Wh = [
      "AnimationStart",
      "AnimationComplete",
      "Update",
      "BeforeLayoutMeasure",
      "LayoutMeasure",
      "LayoutAnimationStart",
      "LayoutAnimationComplete",
    ],
    Z2 = zc.length;
  class q2 {
    constructor(
      {
        parent: t,
        props: n,
        presenceContext: r,
        reducedMotionConfig: i,
        visualState: s,
      },
      o = {}
    ) {
      (this.current = null),
        (this.children = new Set()),
        (this.isVariantNode = !1),
        (this.isControllingVariants = !1),
        (this.shouldReduceMotion = null),
        (this.values = new Map()),
        (this.features = {}),
        (this.valueSubscriptions = new Map()),
        (this.prevMotionValues = {}),
        (this.events = {}),
        (this.propEventSubscriptions = {}),
        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
        (this.render = () => {
          this.current &&
            (this.triggerBuild(),
            this.renderInstance(
              this.current,
              this.renderState,
              this.props.style,
              this.projection
            ));
        }),
        (this.scheduleRender = () => ee.render(this.render, !1, !0));
      const { latestValues: a, renderState: l } = s;
      (this.latestValues = a),
        (this.baseTarget = { ...a }),
        (this.initialValues = n.initial ? { ...a } : {}),
        (this.renderState = l),
        (this.parent = t),
        (this.props = n),
        (this.presenceContext = r),
        (this.depth = t ? t.depth + 1 : 0),
        (this.reducedMotionConfig = i),
        (this.options = o),
        (this.isControllingVariants = ua(n)),
        (this.isVariantNode = qg(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(t && t.current));
      const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {});
      for (const d in f) {
        const h = f[d];
        a[d] !== void 0 && Ye(h) && (h.set(a[d], !1), Mo(u) && u.add(d));
      }
    }
    scrapeMotionValuesFromProps(t, n) {
      return {};
    }
    mount(t) {
      (this.current = t),
        Hh.set(t, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(t),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
        h0.current || Y2(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : _u.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      Hh.delete(this.current),
        this.projection && this.projection.unmount(),
        en(this.notifyUpdate),
        en(this.render),
        this.valueSubscriptions.forEach((t) => t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
      for (const t in this.events) this.events[t].clear();
      for (const t in this.features) this.features[t].unmount();
      this.current = null;
    }
    bindToMotionValue(t, n) {
      const r = lr.has(t),
        i = n.on("change", (o) => {
          (this.latestValues[t] = o),
            this.props.onUpdate && ee.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0);
        }),
        s = n.on("renderRequest", this.scheduleRender);
      this.valueSubscriptions.set(t, () => {
        i(), s();
      });
    }
    sortNodePosition(t) {
      return !this.current ||
        !this.sortInstanceNodePosition ||
        this.type !== t.type
        ? 0
        : this.sortInstanceNodePosition(this.current, t.current);
    }
    loadFeatures({ children: t, ...n }, r, i, s) {
      let o, a;
      for (let l = 0; l < X2; l++) {
        const u = p0[l],
          {
            isEnabled: f,
            Feature: d,
            ProjectionNode: h,
            MeasureLayout: m,
          } = Ji[u];
        h && (o = h),
          f(n) &&
            (!this.features[u] && d && (this.features[u] = new d(this)),
            m && (a = m));
      }
      if (!this.projection && o) {
        this.projection = new o(
          this.latestValues,
          this.parent && this.parent.projection
        );
        const {
          layoutId: l,
          layout: u,
          drag: f,
          dragConstraints: d,
          layoutScroll: h,
          layoutRoot: m,
        } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!f || (d && _r(d)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof u == "string" ? u : "both",
          initialPromotionConfig: s,
          layoutScroll: h,
          layoutRoot: m,
        });
      }
      return a;
    }
    updateFeatures() {
      for (const t in this.features) {
        const n = this.features[t];
        n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.options, this.props);
    }
    measureViewportBox() {
      return this.current
        ? this.measureInstanceViewportBox(this.current, this.props)
        : ge();
    }
    getStaticValue(t) {
      return this.latestValues[t];
    }
    setStaticValue(t, n) {
      this.latestValues[t] = n;
    }
    makeTargetAnimatable(t, n = !0) {
      return this.makeTargetAnimatableFromInstance(t, this.props, n);
    }
    update(t, n) {
      (t.transformTemplate || this.props.transformTemplate) &&
        this.scheduleRender(),
        (this.prevProps = this.props),
        (this.props = t),
        (this.prevPresenceContext = this.presenceContext),
        (this.presenceContext = n);
      for (let r = 0; r < Wh.length; r++) {
        const i = Wh[r];
        this.propEventSubscriptions[i] &&
          (this.propEventSubscriptions[i](),
          delete this.propEventSubscriptions[i]);
        const s = t["on" + i];
        s && (this.propEventSubscriptions[i] = this.on(i, s));
      }
      (this.prevMotionValues = Q2(
        this,
        this.scrapeMotionValuesFromProps(t, this.prevProps),
        this.prevMotionValues
      )),
        this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(t) {
      return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode
        ? this
        : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
    }
    getVariantContext(t = !1) {
      if (t) return this.parent ? this.parent.getVariantContext() : void 0;
      if (!this.isControllingVariants) {
        const r = this.parent ? this.parent.getVariantContext() || {} : {};
        return (
          this.props.initial !== void 0 && (r.initial = this.props.initial), r
        );
      }
      const n = {};
      for (let r = 0; r < Z2; r++) {
        const i = zc[r],
          s = this.props[i];
        (qi(s) || s === !1) && (n[i] = s);
      }
      return n;
    }
    addVariantChild(t) {
      const n = this.getClosestVariantNode();
      if (n)
        return (
          n.variantChildren && n.variantChildren.add(t),
          () => n.variantChildren.delete(t)
        );
    }
    addValue(t, n) {
      n !== this.values.get(t) &&
        (this.removeValue(t), this.bindToMotionValue(t, n)),
        this.values.set(t, n),
        (this.latestValues[t] = n.get());
    }
    removeValue(t) {
      this.values.delete(t);
      const n = this.valueSubscriptions.get(t);
      n && (n(), this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
      return this.values.has(t);
    }
    getValue(t, n) {
      if (this.props.values && this.props.values[t])
        return this.props.values[t];
      let r = this.values.get(t);
      return (
        r === void 0 &&
          n !== void 0 &&
          ((r = Xr(n, { owner: this })), this.addValue(t, r)),
        r
      );
    }
    readValue(t) {
      var n;
      return this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options);
    }
    setBaseTarget(t, n) {
      this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
      var n;
      const { initial: r } = this.props,
        i =
          typeof r == "string" || typeof r == "object"
            ? (n = Xc(this.props, r)) === null || n === void 0
              ? void 0
              : n[t]
            : void 0;
      if (r && i !== void 0) return i;
      const s = this.getBaseTargetFromProps(this.props, t);
      return s !== void 0 && !Ye(s)
        ? s
        : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
    }
    on(t, n) {
      return (
        this.events[t] || (this.events[t] = new of()), this.events[t].add(n)
      );
    }
    notify(t, ...n) {
      this.events[t] && this.events[t].notify(...n);
    }
  }
  class m0 extends q2 {
    sortInstanceNodePosition(t, n) {
      return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
      return t.style ? t.style[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
      delete n[t], delete r[t];
    }
    makeTargetAnimatableFromInstance(
      { transition: t, transitionEnd: n, ...r },
      { transformValues: i },
      s
    ) {
      let o = yT(r, t || {}, this);
      if ((i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s)) {
        mT(this, r, o);
        const a = K2(this, r, o, n);
        (n = a.transitionEnd), (r = a.target);
      }
      return { transition: t, transitionEnd: n, ...r };
    }
  }
  function J2(e) {
    return window.getComputedStyle(e);
  }
  class eN extends m0 {
    readValueFromInstance(t, n) {
      if (lr.has(n)) {
        const r = tf(n);
        return (r && r.default) || 0;
      } else {
        const r = J2(t),
          i = (ny(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return r0(t, n);
    }
    build(t, n, r, i) {
      Hc(t, n, r, i.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n) {
      return Qc(t, n);
    }
    handleChildMotionValue() {
      this.childSubscription &&
        (this.childSubscription(), delete this.childSubscription);
      const { children: t } = this.props;
      Ye(t) &&
        (this.childSubscription = t.on("change", (n) => {
          this.current && (this.current.textContent = `${n}`);
        }));
    }
    renderInstance(t, n, r, i) {
      ly(t, n, r, i);
    }
  }
  class tN extends m0 {
    constructor() {
      super(...arguments), (this.isSVGTag = !1);
    }
    getBaseTargetFromProps(t, n) {
      return t[n];
    }
    readValueFromInstance(t, n) {
      if (lr.has(n)) {
        const r = tf(n);
        return (r && r.default) || 0;
      }
      return (n = uy.has(n) ? n : Yc(n)), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return ge();
    }
    scrapeMotionValuesFromProps(t, n) {
      return fy(t, n);
    }
    build(t, n, r, i) {
      Gc(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      cy(t, n, r, i);
    }
    mount(t) {
      (this.isSVGTag = Kc(t.tagName)), super.mount(t);
    }
  }
  const nN = (e, t) =>
      Uc(e)
        ? new tN(t, { enableHardwareAcceleration: !1 })
        : new eN(t, { enableHardwareAcceleration: !0 }),
    rN = { layout: { ProjectionNode: f0, MeasureLayout: i0 } },
    iN = { ...FT, ...Zw, ...M2, ...rN },
    ft = ow((e, t) => Vw(e, t, iN, nN));
  function g0() {
    const e = S.useRef(!1);
    return (
      $c(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  }
  function sN() {
    const e = g0(),
      [t, n] = S.useState(0),
      r = S.useCallback(() => {
        e.current && n(t + 1);
      }, [t]);
    return [S.useCallback(() => ee.postRender(r), [r]), t];
  }
  class oN extends S.Component {
    getSnapshotBeforeUpdate(t) {
      const n = this.props.childRef.current;
      if (n && t.isPresent && !this.props.isPresent) {
        const r = this.props.sizeRef.current;
        (r.height = n.offsetHeight || 0),
          (r.width = n.offsetWidth || 0),
          (r.top = n.offsetTop),
          (r.left = n.offsetLeft);
      }
      return null;
    }
    componentDidUpdate() {}
    render() {
      return this.props.children;
    }
  }
  function aN({ children: e, isPresent: t }) {
    const n = S.useId(),
      r = S.useRef(null),
      i = S.useRef({ width: 0, height: 0, top: 0, left: 0 });
    return (
      S.useInsertionEffect(() => {
        const { width: s, height: o, top: a, left: l } = i.current;
        if (t || !r.current || !s || !o) return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return (
          document.head.appendChild(u),
          u.sheet &&
            u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
          () => {
            document.head.removeChild(u);
          }
        );
      }, [t]),
      S.createElement(
        oN,
        { isPresent: t, childRef: r, sizeRef: i },
        S.cloneElement(e, { ref: r })
      )
    );
  }
  const xl = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: i,
    presenceAffectsLayout: s,
    mode: o,
  }) => {
    const a = dy(lN),
      l = S.useId(),
      u = S.useMemo(
        () => ({
          id: l,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (f) => {
            a.set(f, !0);
            for (const d of a.values()) if (!d) return;
            r && r();
          },
          register: (f) => (a.set(f, !1), () => a.delete(f)),
        }),
        s ? void 0 : [n]
      );
    return (
      S.useMemo(() => {
        a.forEach((f, d) => a.set(d, !1));
      }, [n]),
      S.useEffect(() => {
        !n && !a.size && r && r();
      }, [n]),
      o === "popLayout" && (e = S.createElement(aN, { isPresent: n }, e)),
      S.createElement(oa.Provider, { value: u }, e)
    );
  };
  function lN() {
    return new Map();
  }
  function uN(e) {
    return S.useEffect(() => () => e(), []);
  }
  const xr = (e) => e.key || "";
  function cN(e, t) {
    e.forEach((n) => {
      const r = xr(n);
      t.set(r, n);
    });
  }
  function fN(e) {
    const t = [];
    return (
      S.Children.forEach(e, (n) => {
        S.isValidElement(n) && t.push(n);
      }),
      t
    );
  }
  const af = ({
      children: e,
      custom: t,
      initial: n = !0,
      onExitComplete: r,
      exitBeforeEnter: i,
      presenceAffectsLayout: s = !0,
      mode: o = "sync",
    }) => {
      const a = S.useContext(Bc).forceRender || sN()[0],
        l = g0(),
        u = fN(e);
      let f = u;
      const d = S.useRef(new Map()).current,
        h = S.useRef(f),
        m = S.useRef(new Map()).current,
        v = S.useRef(!0);
      if (
        ($c(() => {
          (v.current = !1), cN(u, m), (h.current = f);
        }),
        uN(() => {
          (v.current = !0), m.clear(), d.clear();
        }),
        v.current)
      )
        return S.createElement(
          S.Fragment,
          null,
          f.map((p) =>
            S.createElement(
              xl,
              {
                key: xr(p),
                isPresent: !0,
                initial: n ? void 0 : !1,
                presenceAffectsLayout: s,
                mode: o,
              },
              p
            )
          )
        );
      f = [...f];
      const x = h.current.map(xr),
        C = u.map(xr),
        y = x.length;
      for (let p = 0; p < y; p++) {
        const g = x[p];
        C.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
      }
      return (
        o === "wait" && d.size && (f = []),
        d.forEach((p, g) => {
          if (C.indexOf(g) !== -1) return;
          const w = m.get(g);
          if (!w) return;
          const j = x.indexOf(g);
          let E = p;
          if (!E) {
            const N = () => {
              m.delete(g), d.delete(g);
              const P = h.current.findIndex((O) => O.key === g);
              if ((h.current.splice(P, 1), !d.size)) {
                if (((h.current = u), l.current === !1)) return;
                a(), r && r();
              }
            };
            (E = S.createElement(
              xl,
              {
                key: xr(w),
                isPresent: !1,
                onExitComplete: N,
                custom: t,
                presenceAffectsLayout: s,
                mode: o,
              },
              w
            )),
              d.set(g, E);
          }
          f.splice(j, 0, E);
        }),
        (f = f.map((p) => {
          const g = p.key;
          return d.has(g)
            ? p
            : S.createElement(
                xl,
                {
                  key: xr(p),
                  isPresent: !0,
                  presenceAffectsLayout: s,
                  mode: o,
                },
                p
              );
        })),
        S.createElement(
          S.Fragment,
          null,
          d.size ? f : f.map((p) => S.cloneElement(p))
        )
      );
    },
    dN = {
      initial: { scaleX: 0 },
      animate: {
        scaleX: 1,
        transition: { duration: 0.2, ease: [0.12, 0, 0.39, 0] },
      },
      exit: {
        scaleX: 0,
        transition: { duration: 0.3, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
      },
    },
    hN = {
      initial: { y: "-10vh", opacity: 0, transition: { duration: 0.4 } },
      animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    },
    Gh = {
      initial: { transition: { staggerChildren: 0.05 } },
      animate: { transition: { delayChildren: 0.1, staggerChildren: 0.09 } },
      exit: { transition: { staggerChildren: 0.08 } },
    },
    Ou = {
      initial: { y: "30vh", transition: { duration: 0.7 } },
      animate: { y: 0, transition: { duration: 0.7 } },
      exit: { y: "-30vh", transition: { duration: 0.7 } },
    },
    pN = ({ title: e }) =>
      c.jsx(ft.div, {
        variants: Ou,
        className: "uppercase text-4xl text-white italic",
        children: c.jsx("p", { children: e }),
      });
  function mN({ menuState: e, menuToggler: t }) {
    return c.jsx(af, {
      children:
        e &&
        c.jsxs(ft.div, {
          variants: dN,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          className:
            "bg-[#353945] absolute top-0 left-0 h-[100vh] w-screen origin-right flex flex-col justify-between z-30",
          children: [
            c.jsxs("div", {
              className:
                "flex mx-auto px-10 container flex-row items-center justify-between ",
              children: [
                c.jsx("img", {
                  src: Vc,
                  alt: "brand logo",
                  className: "p-0 w-1/2 max-w-[200px] min-w-[150px] invisible",
                }),
                c.jsx(ft.div, {
                  variants: hN,
                  initial: "initial",
                  animate: "animate",
                  exit: "initial",
                  onClick: t,
                  onKeyDown: t,
                  className: "cursor-pointer",
                  children: c.jsx(Yg, { color: "white", size: 22 }),
                }),
              ],
            }),
            c.jsx(ft.div, {
              className:
                "flex flex-col justify-center  font-lora items-center gap-4 mb-32",
              variants: Gh,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: Y1.map((n) =>
                c.jsx(
                  "div",
                  {
                    className: "overflow-hidden",
                    children: c.jsx(pN, { title: n.title }),
                  },
                  n.title
                )
              ),
            }),
            c.jsx(ft.div, {
              className: " text-white  mb-10 flex flex-row px-10",
              variants: Gh,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: c.jsxs("div", {
                className:
                  "overflow-hidden flex flex-row justify-between w-[100%]",
                children: [
                  c.jsx(ft.div, {
                    className: "text-[#D4D5E1] italic text-sm",
                    variants: Ou,
                    children: "All rights reserved",
                  }),
                  c.jsx(ft.div, {
                    className: "text-[#D4D5E1] italic text-sm",
                    variants: Ou,
                    children: "Rotaract Midtown",
                  }),
                ],
              }),
            }),
          ],
        }),
    });
  }
  function gN() {
    return c.jsxs("div", {
      className:
        "overflow-hidden py-[20px] md:py-[25px] px-0 bg-[#353945] whitespace-nowrap relative -rotate-12 scale-110 z-10 md:-rotate-6",
      children: [
        c.jsx("div", {
          className: "banner-slide",
          children: Id.map((e, t) =>
            e.title === "."
              ? c.jsx(
                  "div",
                  {
                    className:
                      "w-2 h-2 rounded-full bg-red-500 inline-block ml-5 mr-5 md:w-2 md:h-2",
                  },
                  e.title + t
                )
              : c.jsx(
                  "p",
                  {
                    className:
                      "text-xs text-[#D6D6D6] margin inline-block md:text-[12px]",
                    children: e.title,
                  },
                  e.title
                )
          ),
        }),
        c.jsx("div", {
          className: "banner-slide",
          children: Id.map((e, t) =>
            e.title === "."
              ? c.jsx(
                  "div",
                  {
                    className:
                      "w-2 h-2 rounded-full bg-red-500 inline-block ml-5 mr-5  md:w-2 md:h-2",
                  },
                  e.title + t
                )
              : c.jsx(
                  "p",
                  {
                    className:
                      "text-xs text-[#D6D6D6] margin inline-block md:text-[12px]",
                    children: e.title,
                  },
                  e.title
                )
          ),
        }),
      ],
    });
  }
  const yN = "./assets/Main Event-5f69e249.svg",
    vN = "./assets/SupportEvent-5988e719.svg";
  function xN({ bottomToggler: e }) {
    return c.jsxs("div", {
      className: "mt-28 pt-12 relative",
      id: "registration",
      children: [
        c.jsx("h2", {
          className:
            "text-white text-center font-medium text-xl mb-8 md:text-[25px] md:leading-relaxed lg:text-[40px]",
          children: "Registrations Started",
        }),
        c.jsx("img", {
          src: yN,
          alt: "main event logo",
          className:
            "absolute scale-[150%] top-32 -translate-x-[45%] md:translate-x-[10%] md:scale-[250%] md:top-48 xl:hidden",
        }),
        c.jsx("img", {
          src: vN,
          alt: "support event logo",
          className:
            "absolute scale-150 right-0  top-96 translate-x-[40%] md:-translate-x-[20%] md:scale-[200%] md:top-80 xl:hidden",
        }),
        c.jsxs("div", {
          className: "container mx-auto md:max-w-[80vw] xl:max-w-[1150px]",
          children: [
            c.jsxs("div", {
              className: " bg-[#353945] mx-10 px-12 py-10 mb-5 md:px-24",
              children: [
                c.jsxs("section", {
                  className: "sm:mb-10 md:mb-0",
                  children: [
                    c.jsx("h3", {
                      className:
                        "text-lg text-white font-medium leading- mb-5  md:text-[20px] md:leading-relaxed lg:text-[22px] xl:text-[28px] ",
                      children:
                        "The Bisons League 23-24 - The Ultimate Basketball Championship!",
                    }),
                    c.jsx("p", {
                      className:
                        "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose md:text-[15px] lg:text-[17px] xl:text-[19px]",
                      children:
                        "Get ready to battle it out, as teams vie for the coveted title of the Ultimate Championship of the Year!",
                    }),
                    c.jsx("p", {
                      className:
                        "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose md:text-[15px] lg:text-[17px] xl:text-[19px]",
                      children:
                        "Whether you're a Rotaract club, a university powerhouse, or a force to be reckoned with, this is your platform to display the finesse that sets you apart.",
                    }),
                    c.jsx("p", {
                      className:
                        "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose md:text-[15px] lg:text-[17px] xl:text-[19px]",
                      children:
                        "Don't miss out on the action; reserve your team's spot today and be part of the excitement.",
                    }),
                  ],
                }),
                c.jsxs("section", {
                  className: "mb-10 md:hidden",
                  children: [
                    c.jsx("h3", {
                      className:
                        "text-lg text-white font-medium leading-relaxed mb-2",
                      children: "Event Overview",
                    }),
                    c.jsxs("p", {
                      className:
                        "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose ",
                      children: [
                        c.jsx("span", {
                          className: "font-semibold",
                          children: "Date: ",
                        }),
                        "Saturday, 21st October, 2023",
                        c.jsx("br", {}),
                        c.jsx("span", {
                          className: "font-semibold",
                          children: "Time: ",
                        }),
                        "7am-6pm",
                        c.jsx("br", {}),
                        c.jsx("span", {
                          className: "font-semibold",
                          children: "Venue: ",
                        }),
                        "St. Joseph's College, Maradana",
                      ],
                    }),
                  ],
                }),
                c.jsxs("section", {
                  className: "mb-10 md:hidden",
                  children: [
                    c.jsx("h3", {
                      className:
                        "text-lg text-white font-medium leading-relaxed mb-2",
                      children: "Categories",
                    }),
                    c.jsx("div", {
                      className:
                        "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                      children: zd.map((t) =>
                        c.jsxs(
                          "div",
                          {
                            className: "flex flex-row gap-5 items-center",
                            children: [
                              c.jsx("div", {
                                className: "w-2 h-2 bg-[#D4D5E1]",
                              }),
                              " ",
                              t.title,
                            ],
                          },
                          t.title
                        )
                      ),
                    }),
                  ],
                }),
                c.jsxs("section", {
                  className: "mb-10 md:hidden",
                  children: [
                    c.jsx("h3", {
                      className:
                        "text-lg text-white font-medium leading-relaxed mb-2",
                      children: "Registration Fee",
                    }),
                    c.jsx("p", {
                      className:
                        "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                      children:
                        "Per Team: LKR 7000.00 (Which translate to LKR 875.00 per player)",
                    }),
                  ],
                }),
                c.jsxs("section", {
                  className:
                    " flex flex-row  items-stretch justify-stretch md:hidden",
                  children: [
                    c.jsx("div", {
                      className: "h-200 w-3 bg-[#D4D5E1] mr-5 rounded-xl",
                    }),
                    c.jsx("p", {
                      className:
                        "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                      children:
                        "So, gear up, practice those dribbles and get your shot in!, and get ready for a high-octane championship that promises to be nothing short of electrifying. Let’s make history on the court! ...",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("div", {
              className: " flex-row mx-10 gap-6 md:flex hidden ",
              children: [
                c.jsx("div", {
                  className: " bg-[#353945] px-12 py-10 mb-5 md:px-10 w-1/2",
                  children: c.jsxs("section", {
                    className: "",
                    children: [
                      c.jsx("h3", {
                        className:
                          "text-lg text-white font-medium leading-relaxed mb-2 lg:text-[22px] xl:text-[24px]",
                        children: "Event Overview",
                      }),
                      c.jsxs("p", {
                        className:
                          "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose xl:text-[17px] ",
                        children: [
                          c.jsx("span", {
                            className: "font-semibold",
                            children: "Date: ",
                          }),
                          "Saturday, 21st October, 2023",
                          c.jsx("br", {}),
                          c.jsx("span", {
                            className: "font-semibold",
                            children: "Time: ",
                          }),
                          "7am-6pm",
                          c.jsx("br", {}),
                          c.jsx("span", {
                            className: "font-semibold",
                            children: "Venue: ",
                          }),
                          "St. Joseph's College, Maradana",
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsx("div", {
                  className: " bg-[#353945]  px-12 py-10 mb-5 md:px-10 w-1/2",
                  children: c.jsxs("section", {
                    className: "",
                    children: [
                      c.jsx("h3", {
                        className:
                          "text-lg text-white font-medium leading-relaxed mb-2 lg:text-[22px]  xl:text-[24px]",
                        children: "Categories",
                      }),
                      c.jsx("div", {
                        className:
                          "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose xl:text-[17px]",
                        children: zd.map((t) =>
                          c.jsxs(
                            "div",
                            {
                              className: "flex flex-row gap-5 items-center",
                              children: [
                                c.jsx("div", {
                                  className: "w-2 h-2 bg-[#D4D5E1]",
                                }),
                                " ",
                                t.title,
                              ],
                            },
                            t.title
                          )
                        ),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            c.jsxs("div", {
              className: "md:flex flex-row mx-10 gap-6 hidden",
              children: [
                c.jsx("div", {
                  className: " bg-[#353945] px-12 py-10 mb-5 md:px-10 w-1/2",
                  children: c.jsxs("section", {
                    className: "",
                    children: [
                      c.jsx("h3", {
                        className:
                          "text-lg text-white font-medium leading-relaxed mb-2 lg:text-[22px] xl:text-[24px]",
                        children: "Registration Fee",
                      }),
                      c.jsx("p", {
                        className:
                          "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose xl:text-[17px]",
                        children:
                          "Per Team: LKR 7000.00 (Which translate to LKR 875.00 per player)",
                      }),
                    ],
                  }),
                }),
                c.jsx("section", {
                  className: " flex flex-row items-start justify-center w-1/2 ",
                  children: c.jsx("p", {
                    className:
                      "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose md:text-[14px] mt-5 lg:text-[15px] xl:text-[17px]",
                    children:
                      "So, gear up, practice those dribbles and get your shot in!, and get ready for a high-octane championship that promises to be nothing short of electrifying. Let’s make history on the court! ...",
                  }),
                }),
              ],
            }),
            c.jsx("div", {
              className: "flex justify-center mb-10 mt-5",
              children: c.jsx("div", {
                className:
                  " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-4 px-5 cursor-pointer",
                onClick: () => {
                  e();
                },
                onKeyDown: () => {
                  e();
                },
                children: c.jsxs("div", {
                  className:
                    "text-white text-xs font-medium flex flex-row items-center md:text-[14px] lg:text-[15px] xl:text-[17px]",
                  children: ["Register Now     ", c.jsx(ia, {})],
                }),
              }),
            }),
          ],
        }),
      ],
    });
  }
  const wN = {
      initial: { transform: "translateY(+100%)" },
      animate: {
        transform: "translateY(0)",
        transition: { duration: 0.3, ease: [0.12, 0, 0.39, 0] },
      },
      exit: {
        transform: "translateY(+100%)",
        transition: { duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
      },
    },
    Is = {
      initial: { opacity: 0, transform: "translateX(+20%)" },
      animate: {
        opacity: 1,
        transform: "translateX(0)",
        transition: { duration: 0.3, delay: 0.3, ease: [0.12, 0, 0.39, 0] },
      },
      exit: {
        transform: "translateX(-20%)",
        opacity: 0,
        transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
      },
    };
  var SN = function (t) {
    return TN(t) && !NN(t);
  };
  function TN(e) {
    return !!e && typeof e == "object";
  }
  function NN(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || CN(e);
  }
  var jN = typeof Symbol == "function" && Symbol.for,
    EN = jN ? Symbol.for("react.element") : 60103;
  function CN(e) {
    return e.$$typeof === EN;
  }
  function PN(e) {
    return Array.isArray(e) ? [] : {};
  }
  function Lo(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? ts(PN(e), e, t) : e;
  }
  function kN(e, t, n) {
    return e.concat(t).map(function (r) {
      return Lo(r, n);
    });
  }
  function bN(e, t, n) {
    var r = {};
    return (
      n.isMergeableObject(e) &&
        Object.keys(e).forEach(function (i) {
          r[i] = Lo(e[i], n);
        }),
      Object.keys(t).forEach(function (i) {
        !n.isMergeableObject(t[i]) || !e[i]
          ? (r[i] = Lo(t[i], n))
          : (r[i] = ts(e[i], t[i], n));
      }),
      r
    );
  }
  function ts(e, t, n) {
    (n = n || {}),
      (n.arrayMerge = n.arrayMerge || kN),
      (n.isMergeableObject = n.isMergeableObject || SN);
    var r = Array.isArray(t),
      i = Array.isArray(e),
      s = r === i;
    return s ? (r ? n.arrayMerge(e, t, n) : bN(e, t, n)) : Lo(t, n);
  }
  ts.all = function (t, n) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (r, i) {
      return ts(r, i, n);
    }, {});
  };
  var Du = ts,
    AN =
      typeof global == "object" && global && global.Object === Object && global;
  const y0 = AN;
  var FN = typeof self == "object" && self && self.Object === Object && self,
    _N = y0 || FN || Function("return this")();
  const Vt = _N;
  var ON = Vt.Symbol;
  const _n = ON;
  var v0 = Object.prototype,
    DN = v0.hasOwnProperty,
    MN = v0.toString,
    pi = _n ? _n.toStringTag : void 0;
  function RN(e) {
    var t = DN.call(e, pi),
      n = e[pi];
    try {
      e[pi] = void 0;
      var r = !0;
    } catch {}
    var i = MN.call(e);
    return r && (t ? (e[pi] = n) : delete e[pi]), i;
  }
  var LN = Object.prototype,
    VN = LN.toString;
  function $N(e) {
    return VN.call(e);
  }
  var IN = "[object Null]",
    zN = "[object Undefined]",
    Kh = _n ? _n.toStringTag : void 0;
  function cr(e) {
    return e == null
      ? e === void 0
        ? zN
        : IN
      : Kh && Kh in Object(e)
      ? RN(e)
      : $N(e);
  }
  function x0(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  var BN = x0(Object.getPrototypeOf, Object);
  const lf = BN;
  function fr(e) {
    return e != null && typeof e == "object";
  }
  var UN = "[object Object]",
    HN = Function.prototype,
    WN = Object.prototype,
    w0 = HN.toString,
    GN = WN.hasOwnProperty,
    KN = w0.call(Object);
  function Yh(e) {
    if (!fr(e) || cr(e) != UN) return !1;
    var t = lf(e);
    if (t === null) return !0;
    var n = GN.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && w0.call(n) == KN;
  }
  var Qh = Array.isArray,
    Xh = Object.keys,
    YN = Object.prototype.hasOwnProperty,
    QN = typeof Element < "u";
  function Mu(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = Qh(e),
        r = Qh(t),
        i,
        s,
        o;
      if (n && r) {
        if (((s = e.length), s != t.length)) return !1;
        for (i = s; i-- !== 0; ) if (!Mu(e[i], t[i])) return !1;
        return !0;
      }
      if (n != r) return !1;
      var a = e instanceof Date,
        l = t instanceof Date;
      if (a != l) return !1;
      if (a && l) return e.getTime() == t.getTime();
      var u = e instanceof RegExp,
        f = t instanceof RegExp;
      if (u != f) return !1;
      if (u && f) return e.toString() == t.toString();
      var d = Xh(e);
      if (((s = d.length), s !== Xh(t).length)) return !1;
      for (i = s; i-- !== 0; ) if (!YN.call(t, d[i])) return !1;
      if (QN && e instanceof Element && t instanceof Element) return e === t;
      for (i = s; i-- !== 0; )
        if (((o = d[i]), !(o === "_owner" && e.$$typeof) && !Mu(e[o], t[o])))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var XN = function (t, n) {
    try {
      return Mu(t, n);
    } catch (r) {
      if (
        (r.message && r.message.match(/stack|recursion/i)) ||
        r.number === -2146828260
      )
        return (
          console.warn(
            "Warning: react-fast-compare does not handle circular references.",
            r.name,
            r.message
          ),
          !1
        );
      throw r;
    }
  };
  const cn = Io(XN);
  var ZN = !0;
  function S0(e, t) {
    if (!ZN) {
      if (e) return;
      var n = "Warning: " + t;
      typeof console < "u" && console.warn(n);
      try {
        throw Error(n);
      } catch {}
    }
  }
  function qN() {
    (this.__data__ = []), (this.size = 0);
  }
  function T0(e, t) {
    return e === t || (e !== e && t !== t);
  }
  function ha(e, t) {
    for (var n = e.length; n--; ) if (T0(e[n][0], t)) return n;
    return -1;
  }
  var JN = Array.prototype,
    ej = JN.splice;
  function tj(e) {
    var t = this.__data__,
      n = ha(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : ej.call(t, n, 1), --this.size, !0;
  }
  function nj(e) {
    var t = this.__data__,
      n = ha(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function rj(e) {
    return ha(this.__data__, e) > -1;
  }
  function ij(e, t) {
    var n = this.__data__,
      r = ha(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  }
  function nn(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  nn.prototype.clear = qN;
  nn.prototype.delete = tj;
  nn.prototype.get = nj;
  nn.prototype.has = rj;
  nn.prototype.set = ij;
  function sj() {
    (this.__data__ = new nn()), (this.size = 0);
  }
  function oj(e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }
  function aj(e) {
    return this.__data__.get(e);
  }
  function lj(e) {
    return this.__data__.has(e);
  }
  function ps(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var uj = "[object AsyncFunction]",
    cj = "[object Function]",
    fj = "[object GeneratorFunction]",
    dj = "[object Proxy]";
  function N0(e) {
    if (!ps(e)) return !1;
    var t = cr(e);
    return t == cj || t == fj || t == uj || t == dj;
  }
  var hj = Vt["__core-js_shared__"];
  const wl = hj;
  var Zh = (function () {
    var e = /[^.]+$/.exec((wl && wl.keys && wl.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function pj(e) {
    return !!Zh && Zh in e;
  }
  var mj = Function.prototype,
    gj = mj.toString;
  function dr(e) {
    if (e != null) {
      try {
        return gj.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var yj = /[\\^$.*+?()[\]{}|]/g,
    vj = /^\[object .+?Constructor\]$/,
    xj = Function.prototype,
    wj = Object.prototype,
    Sj = xj.toString,
    Tj = wj.hasOwnProperty,
    Nj = RegExp(
      "^" +
        Sj.call(Tj)
          .replace(yj, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function jj(e) {
    if (!ps(e) || pj(e)) return !1;
    var t = N0(e) ? Nj : vj;
    return t.test(dr(e));
  }
  function Ej(e, t) {
    return e == null ? void 0 : e[t];
  }
  function hr(e, t) {
    var n = Ej(e, t);
    return jj(n) ? n : void 0;
  }
  var Cj = hr(Vt, "Map");
  const ns = Cj;
  var Pj = hr(Object, "create");
  const rs = Pj;
  function kj() {
    (this.__data__ = rs ? rs(null) : {}), (this.size = 0);
  }
  function bj(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var Aj = "__lodash_hash_undefined__",
    Fj = Object.prototype,
    _j = Fj.hasOwnProperty;
  function Oj(e) {
    var t = this.__data__;
    if (rs) {
      var n = t[e];
      return n === Aj ? void 0 : n;
    }
    return _j.call(t, e) ? t[e] : void 0;
  }
  var Dj = Object.prototype,
    Mj = Dj.hasOwnProperty;
  function Rj(e) {
    var t = this.__data__;
    return rs ? t[e] !== void 0 : Mj.call(t, e);
  }
  var Lj = "__lodash_hash_undefined__";
  function Vj(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = rs && t === void 0 ? Lj : t),
      this
    );
  }
  function ir(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  ir.prototype.clear = kj;
  ir.prototype.delete = bj;
  ir.prototype.get = Oj;
  ir.prototype.has = Rj;
  ir.prototype.set = Vj;
  function $j() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ir(),
        map: new (ns || nn)(),
        string: new ir(),
      });
  }
  function Ij(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function pa(e, t) {
    var n = e.__data__;
    return Ij(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function zj(e) {
    var t = pa(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function Bj(e) {
    return pa(this, e).get(e);
  }
  function Uj(e) {
    return pa(this, e).has(e);
  }
  function Hj(e, t) {
    var n = pa(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  }
  function Ln(e) {
    var t = -1,
      n = e == null ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  Ln.prototype.clear = $j;
  Ln.prototype.delete = zj;
  Ln.prototype.get = Bj;
  Ln.prototype.has = Uj;
  Ln.prototype.set = Hj;
  var Wj = 200;
  function Gj(e, t) {
    var n = this.__data__;
    if (n instanceof nn) {
      var r = n.__data__;
      if (!ns || r.length < Wj - 1)
        return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new Ln(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  }
  function ni(e) {
    var t = (this.__data__ = new nn(e));
    this.size = t.size;
  }
  ni.prototype.clear = sj;
  ni.prototype.delete = oj;
  ni.prototype.get = aj;
  ni.prototype.has = lj;
  ni.prototype.set = Gj;
  function Kj(e, t) {
    for (
      var n = -1, r = e == null ? 0 : e.length;
      ++n < r && t(e[n], n, e) !== !1;

    );
    return e;
  }
  var Yj = (function () {
    try {
      var e = hr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })();
  const qh = Yj;
  function j0(e, t, n) {
    t == "__proto__" && qh
      ? qh(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  var Qj = Object.prototype,
    Xj = Qj.hasOwnProperty;
  function E0(e, t, n) {
    var r = e[t];
    (!(Xj.call(e, t) && T0(r, n)) || (n === void 0 && !(t in e))) &&
      j0(e, t, n);
  }
  function ma(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var s = -1, o = t.length; ++s < o; ) {
      var a = t[s],
        l = r ? r(n[a], e[a], a, n, e) : void 0;
      l === void 0 && (l = e[a]), i ? j0(n, a, l) : E0(n, a, l);
    }
    return n;
  }
  function Zj(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var qj = "[object Arguments]";
  function Jh(e) {
    return fr(e) && cr(e) == qj;
  }
  var C0 = Object.prototype,
    Jj = C0.hasOwnProperty,
    eE = C0.propertyIsEnumerable,
    tE = Jh(
      (function () {
        return arguments;
      })()
    )
      ? Jh
      : function (e) {
          return fr(e) && Jj.call(e, "callee") && !eE.call(e, "callee");
        };
  const nE = tE;
  var rE = Array.isArray;
  const ms = rE;
  function iE() {
    return !1;
  }
  var P0 = typeof qe == "object" && qe && !qe.nodeType && qe,
    ep = P0 && typeof Je == "object" && Je && !Je.nodeType && Je,
    sE = ep && ep.exports === P0,
    tp = sE ? Vt.Buffer : void 0,
    oE = tp ? tp.isBuffer : void 0,
    aE = oE || iE;
  const k0 = aE;
  var lE = 9007199254740991,
    uE = /^(?:0|[1-9]\d*)$/;
  function cE(e, t) {
    var n = typeof e;
    return (
      (t = t ?? lE),
      !!t &&
        (n == "number" || (n != "symbol" && uE.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var fE = 9007199254740991;
  function b0(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fE;
  }
  var dE = "[object Arguments]",
    hE = "[object Array]",
    pE = "[object Boolean]",
    mE = "[object Date]",
    gE = "[object Error]",
    yE = "[object Function]",
    vE = "[object Map]",
    xE = "[object Number]",
    wE = "[object Object]",
    SE = "[object RegExp]",
    TE = "[object Set]",
    NE = "[object String]",
    jE = "[object WeakMap]",
    EE = "[object ArrayBuffer]",
    CE = "[object DataView]",
    PE = "[object Float32Array]",
    kE = "[object Float64Array]",
    bE = "[object Int8Array]",
    AE = "[object Int16Array]",
    FE = "[object Int32Array]",
    _E = "[object Uint8Array]",
    OE = "[object Uint8ClampedArray]",
    DE = "[object Uint16Array]",
    ME = "[object Uint32Array]",
    ne = {};
  ne[PE] =
    ne[kE] =
    ne[bE] =
    ne[AE] =
    ne[FE] =
    ne[_E] =
    ne[OE] =
    ne[DE] =
    ne[ME] =
      !0;
  ne[dE] =
    ne[hE] =
    ne[EE] =
    ne[pE] =
    ne[CE] =
    ne[mE] =
    ne[gE] =
    ne[yE] =
    ne[vE] =
    ne[xE] =
    ne[wE] =
    ne[SE] =
    ne[TE] =
    ne[NE] =
    ne[jE] =
      !1;
  function RE(e) {
    return fr(e) && b0(e.length) && !!ne[cr(e)];
  }
  function uf(e) {
    return function (t) {
      return e(t);
    };
  }
  var A0 = typeof qe == "object" && qe && !qe.nodeType && qe,
    Oi = A0 && typeof Je == "object" && Je && !Je.nodeType && Je,
    LE = Oi && Oi.exports === A0,
    Sl = LE && y0.process,
    VE = (function () {
      try {
        var e = Oi && Oi.require && Oi.require("util").types;
        return e || (Sl && Sl.binding && Sl.binding("util"));
      } catch {}
    })();
  const qr = VE;
  var np = qr && qr.isTypedArray,
    $E = np ? uf(np) : RE;
  const IE = $E;
  var zE = Object.prototype,
    BE = zE.hasOwnProperty;
  function F0(e, t) {
    var n = ms(e),
      r = !n && nE(e),
      i = !n && !r && k0(e),
      s = !n && !r && !i && IE(e),
      o = n || r || i || s,
      a = o ? Zj(e.length, String) : [],
      l = a.length;
    for (var u in e)
      (t || BE.call(e, u)) &&
        !(
          o &&
          (u == "length" ||
            (i && (u == "offset" || u == "parent")) ||
            (s && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
            cE(u, l))
        ) &&
        a.push(u);
    return a;
  }
  var UE = Object.prototype;
  function cf(e) {
    var t = e && e.constructor,
      n = (typeof t == "function" && t.prototype) || UE;
    return e === n;
  }
  var HE = x0(Object.keys, Object);
  const WE = HE;
  var GE = Object.prototype,
    KE = GE.hasOwnProperty;
  function YE(e) {
    if (!cf(e)) return WE(e);
    var t = [];
    for (var n in Object(e)) KE.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function _0(e) {
    return e != null && b0(e.length) && !N0(e);
  }
  function ff(e) {
    return _0(e) ? F0(e) : YE(e);
  }
  function QE(e, t) {
    return e && ma(t, ff(t), e);
  }
  function XE(e) {
    var t = [];
    if (e != null) for (var n in Object(e)) t.push(n);
    return t;
  }
  var ZE = Object.prototype,
    qE = ZE.hasOwnProperty;
  function JE(e) {
    if (!ps(e)) return XE(e);
    var t = cf(e),
      n = [];
    for (var r in e) (r == "constructor" && (t || !qE.call(e, r))) || n.push(r);
    return n;
  }
  function df(e) {
    return _0(e) ? F0(e, !0) : JE(e);
  }
  function eC(e, t) {
    return e && ma(t, df(t), e);
  }
  var O0 = typeof qe == "object" && qe && !qe.nodeType && qe,
    rp = O0 && typeof Je == "object" && Je && !Je.nodeType && Je,
    tC = rp && rp.exports === O0,
    ip = tC ? Vt.Buffer : void 0,
    sp = ip ? ip.allocUnsafe : void 0;
  function nC(e, t) {
    if (t) return e.slice();
    var n = e.length,
      r = sp ? sp(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function D0(e, t) {
    var n = -1,
      r = e.length;
    for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
    return t;
  }
  function rC(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++n < r; ) {
      var o = e[n];
      t(o, n, e) && (s[i++] = o);
    }
    return s;
  }
  function M0() {
    return [];
  }
  var iC = Object.prototype,
    sC = iC.propertyIsEnumerable,
    op = Object.getOwnPropertySymbols,
    oC = op
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              rC(op(e), function (t) {
                return sC.call(e, t);
              }));
        }
      : M0;
  const hf = oC;
  function aC(e, t) {
    return ma(e, hf(e), t);
  }
  function R0(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
    return e;
  }
  var lC = Object.getOwnPropertySymbols,
    uC = lC
      ? function (e) {
          for (var t = []; e; ) R0(t, hf(e)), (e = lf(e));
          return t;
        }
      : M0;
  const L0 = uC;
  function cC(e, t) {
    return ma(e, L0(e), t);
  }
  function V0(e, t, n) {
    var r = t(e);
    return ms(e) ? r : R0(r, n(e));
  }
  function fC(e) {
    return V0(e, ff, hf);
  }
  function dC(e) {
    return V0(e, df, L0);
  }
  var hC = hr(Vt, "DataView");
  const Ru = hC;
  var pC = hr(Vt, "Promise");
  const Lu = pC;
  var mC = hr(Vt, "Set");
  const Vu = mC;
  var gC = hr(Vt, "WeakMap");
  const $u = gC;
  var ap = "[object Map]",
    yC = "[object Object]",
    lp = "[object Promise]",
    up = "[object Set]",
    cp = "[object WeakMap]",
    fp = "[object DataView]",
    vC = dr(Ru),
    xC = dr(ns),
    wC = dr(Lu),
    SC = dr(Vu),
    TC = dr($u),
    Wn = cr;
  ((Ru && Wn(new Ru(new ArrayBuffer(1))) != fp) ||
    (ns && Wn(new ns()) != ap) ||
    (Lu && Wn(Lu.resolve()) != lp) ||
    (Vu && Wn(new Vu()) != up) ||
    ($u && Wn(new $u()) != cp)) &&
    (Wn = function (e) {
      var t = cr(e),
        n = t == yC ? e.constructor : void 0,
        r = n ? dr(n) : "";
      if (r)
        switch (r) {
          case vC:
            return fp;
          case xC:
            return ap;
          case wC:
            return lp;
          case SC:
            return up;
          case TC:
            return cp;
        }
      return t;
    });
  const pf = Wn;
  var NC = Object.prototype,
    jC = NC.hasOwnProperty;
  function EC(e) {
    var t = e.length,
      n = new e.constructor(t);
    return (
      t &&
        typeof e[0] == "string" &&
        jC.call(e, "index") &&
        ((n.index = e.index), (n.input = e.input)),
      n
    );
  }
  var CC = Vt.Uint8Array;
  const dp = CC;
  function mf(e) {
    var t = new e.constructor(e.byteLength);
    return new dp(t).set(new dp(e)), t;
  }
  function PC(e, t) {
    var n = t ? mf(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var kC = /\w*$/;
  function bC(e) {
    var t = new e.constructor(e.source, kC.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var hp = _n ? _n.prototype : void 0,
    pp = hp ? hp.valueOf : void 0;
  function AC(e) {
    return pp ? Object(pp.call(e)) : {};
  }
  function FC(e, t) {
    var n = t ? mf(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var _C = "[object Boolean]",
    OC = "[object Date]",
    DC = "[object Map]",
    MC = "[object Number]",
    RC = "[object RegExp]",
    LC = "[object Set]",
    VC = "[object String]",
    $C = "[object Symbol]",
    IC = "[object ArrayBuffer]",
    zC = "[object DataView]",
    BC = "[object Float32Array]",
    UC = "[object Float64Array]",
    HC = "[object Int8Array]",
    WC = "[object Int16Array]",
    GC = "[object Int32Array]",
    KC = "[object Uint8Array]",
    YC = "[object Uint8ClampedArray]",
    QC = "[object Uint16Array]",
    XC = "[object Uint32Array]";
  function ZC(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case IC:
        return mf(e);
      case _C:
      case OC:
        return new r(+e);
      case zC:
        return PC(e, n);
      case BC:
      case UC:
      case HC:
      case WC:
      case GC:
      case KC:
      case YC:
      case QC:
      case XC:
        return FC(e, n);
      case DC:
        return new r();
      case MC:
      case VC:
        return new r(e);
      case RC:
        return bC(e);
      case LC:
        return new r();
      case $C:
        return AC(e);
    }
  }
  var mp = Object.create,
    qC = (function () {
      function e() {}
      return function (t) {
        if (!ps(t)) return {};
        if (mp) return mp(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
      };
    })();
  const JC = qC;
  function eP(e) {
    return typeof e.constructor == "function" && !cf(e) ? JC(lf(e)) : {};
  }
  var tP = "[object Map]";
  function nP(e) {
    return fr(e) && pf(e) == tP;
  }
  var gp = qr && qr.isMap,
    rP = gp ? uf(gp) : nP;
  const iP = rP;
  var sP = "[object Set]";
  function oP(e) {
    return fr(e) && pf(e) == sP;
  }
  var yp = qr && qr.isSet,
    aP = yp ? uf(yp) : oP;
  const lP = aP;
  var uP = 1,
    cP = 2,
    fP = 4,
    $0 = "[object Arguments]",
    dP = "[object Array]",
    hP = "[object Boolean]",
    pP = "[object Date]",
    mP = "[object Error]",
    I0 = "[object Function]",
    gP = "[object GeneratorFunction]",
    yP = "[object Map]",
    vP = "[object Number]",
    z0 = "[object Object]",
    xP = "[object RegExp]",
    wP = "[object Set]",
    SP = "[object String]",
    TP = "[object Symbol]",
    NP = "[object WeakMap]",
    jP = "[object ArrayBuffer]",
    EP = "[object DataView]",
    CP = "[object Float32Array]",
    PP = "[object Float64Array]",
    kP = "[object Int8Array]",
    bP = "[object Int16Array]",
    AP = "[object Int32Array]",
    FP = "[object Uint8Array]",
    _P = "[object Uint8ClampedArray]",
    OP = "[object Uint16Array]",
    DP = "[object Uint32Array]",
    q = {};
  q[$0] =
    q[dP] =
    q[jP] =
    q[EP] =
    q[hP] =
    q[pP] =
    q[CP] =
    q[PP] =
    q[kP] =
    q[bP] =
    q[AP] =
    q[yP] =
    q[vP] =
    q[z0] =
    q[xP] =
    q[wP] =
    q[SP] =
    q[TP] =
    q[FP] =
    q[_P] =
    q[OP] =
    q[DP] =
      !0;
  q[mP] = q[I0] = q[NP] = !1;
  function Di(e, t, n, r, i, s) {
    var o,
      a = t & uP,
      l = t & cP,
      u = t & fP;
    if ((n && (o = i ? n(e, r, i, s) : n(e)), o !== void 0)) return o;
    if (!ps(e)) return e;
    var f = ms(e);
    if (f) {
      if (((o = EC(e)), !a)) return D0(e, o);
    } else {
      var d = pf(e),
        h = d == I0 || d == gP;
      if (k0(e)) return nC(e, a);
      if (d == z0 || d == $0 || (h && !i)) {
        if (((o = l || h ? {} : eP(e)), !a))
          return l ? cC(e, eC(o, e)) : aC(e, QE(o, e));
      } else {
        if (!q[d]) return i ? e : {};
        o = ZC(e, d, a);
      }
    }
    s || (s = new ni());
    var m = s.get(e);
    if (m) return m;
    s.set(e, o),
      lP(e)
        ? e.forEach(function (C) {
            o.add(Di(C, t, n, C, e, s));
          })
        : iP(e) &&
          e.forEach(function (C, y) {
            o.set(y, Di(C, t, n, y, e, s));
          });
    var v = u ? (l ? dC : fC) : l ? df : ff,
      x = f ? void 0 : v(e);
    return (
      Kj(x || e, function (C, y) {
        x && ((y = C), (C = e[y])), E0(o, y, Di(C, t, n, y, e, s));
      }),
      o
    );
  }
  var MP = 4;
  function vp(e) {
    return Di(e, MP);
  }
  function B0(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var RP = "[object Symbol]";
  function gf(e) {
    return typeof e == "symbol" || (fr(e) && cr(e) == RP);
  }
  var LP = "Expected a function";
  function yf(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
      throw new TypeError(LP);
    var n = function () {
      var r = arguments,
        i = t ? t.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(i)) return s.get(i);
      var o = e.apply(this, r);
      return (n.cache = s.set(i, o) || s), o;
    };
    return (n.cache = new (yf.Cache || Ln)()), n;
  }
  yf.Cache = Ln;
  var VP = 500;
  function $P(e) {
    var t = yf(e, function (r) {
        return n.size === VP && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var IP =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    zP = /\\(\\)?/g,
    BP = $P(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(IP, function (n, r, i, s) {
          t.push(i ? s.replace(zP, "$1") : r || n);
        }),
        t
      );
    });
  const UP = BP;
  var HP = 1 / 0;
  function WP(e) {
    if (typeof e == "string" || gf(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -HP ? "-0" : t;
  }
  var GP = 1 / 0,
    xp = _n ? _n.prototype : void 0,
    wp = xp ? xp.toString : void 0;
  function U0(e) {
    if (typeof e == "string") return e;
    if (ms(e)) return B0(e, U0) + "";
    if (gf(e)) return wp ? wp.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -GP ? "-0" : t;
  }
  function KP(e) {
    return e == null ? "" : U0(e);
  }
  function H0(e) {
    return ms(e) ? B0(e, WP) : gf(e) ? [e] : D0(UP(KP(e)));
  }
  var W0 = { exports: {} },
    X = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ee = typeof Symbol == "function" && Symbol.for,
    vf = Ee ? Symbol.for("react.element") : 60103,
    xf = Ee ? Symbol.for("react.portal") : 60106,
    ga = Ee ? Symbol.for("react.fragment") : 60107,
    ya = Ee ? Symbol.for("react.strict_mode") : 60108,
    va = Ee ? Symbol.for("react.profiler") : 60114,
    xa = Ee ? Symbol.for("react.provider") : 60109,
    wa = Ee ? Symbol.for("react.context") : 60110,
    wf = Ee ? Symbol.for("react.async_mode") : 60111,
    Sa = Ee ? Symbol.for("react.concurrent_mode") : 60111,
    Ta = Ee ? Symbol.for("react.forward_ref") : 60112,
    Na = Ee ? Symbol.for("react.suspense") : 60113,
    YP = Ee ? Symbol.for("react.suspense_list") : 60120,
    ja = Ee ? Symbol.for("react.memo") : 60115,
    Ea = Ee ? Symbol.for("react.lazy") : 60116,
    QP = Ee ? Symbol.for("react.block") : 60121,
    XP = Ee ? Symbol.for("react.fundamental") : 60117,
    ZP = Ee ? Symbol.for("react.responder") : 60118,
    qP = Ee ? Symbol.for("react.scope") : 60119;
  function st(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case vf:
          switch (((e = e.type), e)) {
            case wf:
            case Sa:
            case ga:
            case va:
            case ya:
            case Na:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case wa:
                case Ta:
                case Ea:
                case ja:
                case xa:
                  return e;
                default:
                  return t;
              }
          }
        case xf:
          return t;
      }
    }
  }
  function G0(e) {
    return st(e) === Sa;
  }
  X.AsyncMode = wf;
  X.ConcurrentMode = Sa;
  X.ContextConsumer = wa;
  X.ContextProvider = xa;
  X.Element = vf;
  X.ForwardRef = Ta;
  X.Fragment = ga;
  X.Lazy = Ea;
  X.Memo = ja;
  X.Portal = xf;
  X.Profiler = va;
  X.StrictMode = ya;
  X.Suspense = Na;
  X.isAsyncMode = function (e) {
    return G0(e) || st(e) === wf;
  };
  X.isConcurrentMode = G0;
  X.isContextConsumer = function (e) {
    return st(e) === wa;
  };
  X.isContextProvider = function (e) {
    return st(e) === xa;
  };
  X.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === vf;
  };
  X.isForwardRef = function (e) {
    return st(e) === Ta;
  };
  X.isFragment = function (e) {
    return st(e) === ga;
  };
  X.isLazy = function (e) {
    return st(e) === Ea;
  };
  X.isMemo = function (e) {
    return st(e) === ja;
  };
  X.isPortal = function (e) {
    return st(e) === xf;
  };
  X.isProfiler = function (e) {
    return st(e) === va;
  };
  X.isStrictMode = function (e) {
    return st(e) === ya;
  };
  X.isSuspense = function (e) {
    return st(e) === Na;
  };
  X.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === ga ||
      e === Sa ||
      e === va ||
      e === ya ||
      e === Na ||
      e === YP ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Ea ||
          e.$$typeof === ja ||
          e.$$typeof === xa ||
          e.$$typeof === wa ||
          e.$$typeof === Ta ||
          e.$$typeof === XP ||
          e.$$typeof === ZP ||
          e.$$typeof === qP ||
          e.$$typeof === QP))
    );
  };
  X.typeOf = st;
  W0.exports = X;
  var JP = W0.exports,
    Sf = JP,
    ek = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
    },
    tk = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    nk = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    K0 = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Tf = {};
  Tf[Sf.ForwardRef] = nk;
  Tf[Sf.Memo] = K0;
  function Sp(e) {
    return Sf.isMemo(e) ? K0 : Tf[e.$$typeof] || ek;
  }
  var rk = Object.defineProperty,
    ik = Object.getOwnPropertyNames,
    Tp = Object.getOwnPropertySymbols,
    sk = Object.getOwnPropertyDescriptor,
    ok = Object.getPrototypeOf,
    Np = Object.prototype;
  function Y0(e, t, n) {
    if (typeof t != "string") {
      if (Np) {
        var r = ok(t);
        r && r !== Np && Y0(e, r, n);
      }
      var i = ik(t);
      Tp && (i = i.concat(Tp(t)));
      for (var s = Sp(e), o = Sp(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!tk[l] && !(n && n[l]) && !(o && o[l]) && !(s && s[l])) {
          var u = sk(t, l);
          try {
            rk(e, l, u);
          } catch {}
        }
      }
    }
    return e;
  }
  var ak = Y0;
  const lk = Io(ak);
  var uk = 1,
    ck = 4;
  function fk(e) {
    return Di(e, uk | ck);
  }
  function Y() {
    return (
      (Y =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
      Y.apply(this, arguments)
    );
  }
  function Q0(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      (e.__proto__ = t);
  }
  function mn(e, t) {
    if (e == null) return {};
    var n = {},
      r = Object.keys(e),
      i,
      s;
    for (s = 0; s < r.length; s++)
      (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
    return n;
  }
  function jp(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  var Ca = S.createContext(void 0);
  Ca.displayName = "FormikContext";
  var dk = Ca.Provider,
    hk = Ca.Consumer;
  function X0() {
    var e = S.useContext(Ca);
    return e || S0(!1), e;
  }
  var Ep = function (t) {
      return Array.isArray(t) && t.length === 0;
    },
    Pe = function (t) {
      return typeof t == "function";
    },
    gs = function (t) {
      return t !== null && typeof t == "object";
    },
    pk = function (t) {
      return String(Math.floor(Number(t))) === t;
    },
    Tl = function (t) {
      return Object.prototype.toString.call(t) === "[object String]";
    },
    Z0 = function (t) {
      return S.Children.count(t) === 0;
    },
    Nl = function (t) {
      return gs(t) && Pe(t.then);
    };
  function ie(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = H0(t); e && r < i.length; ) e = e[i[r++]];
    return (r !== i.length && !e) || e === void 0 ? n : e;
  }
  function Lt(e, t, n) {
    for (var r = vp(e), i = r, s = 0, o = H0(t); s < o.length - 1; s++) {
      var a = o[s],
        l = ie(e, o.slice(0, s + 1));
      if (l && (gs(l) || Array.isArray(l))) i = i[a] = vp(l);
      else {
        var u = o[s + 1];
        i = i[a] = pk(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (s === 0 ? e : i)[o[s]] === n
      ? e
      : (n === void 0 ? delete i[o[s]] : (i[o[s]] = n),
        s === 0 && n === void 0 && delete r[o[s]],
        r);
  }
  function q0(e, t, n, r) {
    n === void 0 && (n = new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, s = Object.keys(e); i < s.length; i++) {
      var o = s[i],
        a = e[o];
      gs(a)
        ? n.get(a) ||
          (n.set(a, !0), (r[o] = Array.isArray(a) ? [] : {}), q0(a, t, n, r[o]))
        : (r[o] = t);
    }
    return r;
  }
  function mk(e, t) {
    switch (t.type) {
      case "SET_VALUES":
        return Y({}, e, { values: t.payload });
      case "SET_TOUCHED":
        return Y({}, e, { touched: t.payload });
      case "SET_ERRORS":
        return cn(e.errors, t.payload) ? e : Y({}, e, { errors: t.payload });
      case "SET_STATUS":
        return Y({}, e, { status: t.payload });
      case "SET_ISSUBMITTING":
        return Y({}, e, { isSubmitting: t.payload });
      case "SET_ISVALIDATING":
        return Y({}, e, { isValidating: t.payload });
      case "SET_FIELD_VALUE":
        return Y({}, e, {
          values: Lt(e.values, t.payload.field, t.payload.value),
        });
      case "SET_FIELD_TOUCHED":
        return Y({}, e, {
          touched: Lt(e.touched, t.payload.field, t.payload.value),
        });
      case "SET_FIELD_ERROR":
        return Y({}, e, {
          errors: Lt(e.errors, t.payload.field, t.payload.value),
        });
      case "RESET_FORM":
        return Y({}, e, t.payload);
      case "SET_FORMIK_STATE":
        return t.payload(e);
      case "SUBMIT_ATTEMPT":
        return Y({}, e, {
          touched: q0(e.values, !0),
          isSubmitting: !0,
          submitCount: e.submitCount + 1,
        });
      case "SUBMIT_FAILURE":
        return Y({}, e, { isSubmitting: !1 });
      case "SUBMIT_SUCCESS":
        return Y({}, e, { isSubmitting: !1 });
      default:
        return e;
    }
  }
  var In = {},
    zs = {};
  function gk(e) {
    var t = e.validateOnChange,
      n = t === void 0 ? !0 : t,
      r = e.validateOnBlur,
      i = r === void 0 ? !0 : r,
      s = e.validateOnMount,
      o = s === void 0 ? !1 : s,
      a = e.isInitialValid,
      l = e.enableReinitialize,
      u = l === void 0 ? !1 : l,
      f = e.onSubmit,
      d = mn(e, [
        "validateOnChange",
        "validateOnBlur",
        "validateOnMount",
        "isInitialValid",
        "enableReinitialize",
        "onSubmit",
      ]),
      h = Y(
        {
          validateOnChange: n,
          validateOnBlur: i,
          validateOnMount: o,
          onSubmit: f,
        },
        d
      ),
      m = S.useRef(h.initialValues),
      v = S.useRef(h.initialErrors || In),
      x = S.useRef(h.initialTouched || zs),
      C = S.useRef(h.initialStatus),
      y = S.useRef(!1),
      p = S.useRef({});
    S.useEffect(function () {
      return (
        (y.current = !0),
        function () {
          y.current = !1;
        }
      );
    }, []);
    var g = S.useState(0),
      w = g[1],
      j = S.useRef({
        values: h.initialValues,
        errors: h.initialErrors || In,
        touched: h.initialTouched || zs,
        status: h.initialStatus,
        isSubmitting: !1,
        isValidating: !1,
        submitCount: 0,
      }),
      E = j.current,
      N = S.useCallback(function (T) {
        var A = j.current;
        (j.current = mk(A, T)),
          A !== j.current &&
            w(function (_) {
              return _ + 1;
            });
      }, []),
      P = S.useCallback(
        function (T, A) {
          return new Promise(function (_, M) {
            var z = h.validate(T, A);
            z == null
              ? _(In)
              : Nl(z)
              ? z.then(
                  function (K) {
                    _(K || In);
                  },
                  function (K) {
                    M(K);
                  }
                )
              : _(z);
          });
        },
        [h.validate]
      ),
      O = S.useCallback(
        function (T, A) {
          var _ = h.validationSchema,
            M = Pe(_) ? _(A) : _,
            z = A && M.validateAt ? M.validateAt(A, T) : vk(T, M);
          return new Promise(function (K, Se) {
            z.then(
              function () {
                K(In);
              },
              function ($t) {
                $t.name === "ValidationError" ? K(yk($t)) : Se($t);
              }
            );
          });
        },
        [h.validationSchema]
      ),
      D = S.useCallback(function (T, A) {
        return new Promise(function (_) {
          return _(p.current[T].validate(A));
        });
      }, []),
      $ = S.useCallback(
        function (T) {
          var A = Object.keys(p.current).filter(function (M) {
              return Pe(p.current[M].validate);
            }),
            _ =
              A.length > 0
                ? A.map(function (M) {
                    return D(M, ie(T, M));
                  })
                : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
          return Promise.all(_).then(function (M) {
            return M.reduce(function (z, K, Se) {
              return (
                K === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" ||
                  (K && (z = Lt(z, A[Se], K))),
                z
              );
            }, {});
          });
        },
        [D]
      ),
      ve = S.useCallback(
        function (T) {
          return Promise.all([
            $(T),
            h.validationSchema ? O(T) : {},
            h.validate ? P(T) : {},
          ]).then(function (A) {
            var _ = A[0],
              M = A[1],
              z = A[2],
              K = Du.all([_, M, z], { arrayMerge: xk });
            return K;
          });
        },
        [h.validate, h.validationSchema, $, P, O]
      ),
      U = lt(function (T) {
        return (
          T === void 0 && (T = E.values),
          N({ type: "SET_ISVALIDATING", payload: !0 }),
          ve(T).then(function (A) {
            return (
              y.current &&
                (N({ type: "SET_ISVALIDATING", payload: !1 }),
                N({ type: "SET_ERRORS", payload: A })),
              A
            );
          })
        );
      });
    S.useEffect(
      function () {
        o && y.current === !0 && cn(m.current, h.initialValues) && U(m.current);
      },
      [o, U]
    );
    var G = S.useCallback(
      function (T) {
        var A = T && T.values ? T.values : m.current,
          _ =
            T && T.errors
              ? T.errors
              : v.current
              ? v.current
              : h.initialErrors || {},
          M =
            T && T.touched
              ? T.touched
              : x.current
              ? x.current
              : h.initialTouched || {},
          z =
            T && T.status ? T.status : C.current ? C.current : h.initialStatus;
        (m.current = A), (v.current = _), (x.current = M), (C.current = z);
        var K = function () {
          N({
            type: "RESET_FORM",
            payload: {
              isSubmitting: !!T && !!T.isSubmitting,
              errors: _,
              touched: M,
              status: z,
              values: A,
              isValidating: !!T && !!T.isValidating,
              submitCount:
                T && T.submitCount && typeof T.submitCount == "number"
                  ? T.submitCount
                  : 0,
            },
          });
        };
        if (h.onReset) {
          var Se = h.onReset(E.values, ri);
          Nl(Se) ? Se.then(K) : K();
        } else K();
      },
      [h.initialErrors, h.initialStatus, h.initialTouched, h.onReset]
    );
    S.useEffect(
      function () {
        y.current === !0 &&
          !cn(m.current, h.initialValues) &&
          u &&
          ((m.current = h.initialValues), G(), o && U(m.current));
      },
      [u, h.initialValues, G, o, U]
    ),
      S.useEffect(
        function () {
          u &&
            y.current === !0 &&
            !cn(v.current, h.initialErrors) &&
            ((v.current = h.initialErrors || In),
            N({ type: "SET_ERRORS", payload: h.initialErrors || In }));
        },
        [u, h.initialErrors]
      ),
      S.useEffect(
        function () {
          u &&
            y.current === !0 &&
            !cn(x.current, h.initialTouched) &&
            ((x.current = h.initialTouched || zs),
            N({ type: "SET_TOUCHED", payload: h.initialTouched || zs }));
        },
        [u, h.initialTouched]
      ),
      S.useEffect(
        function () {
          u &&
            y.current === !0 &&
            !cn(C.current, h.initialStatus) &&
            ((C.current = h.initialStatus),
            N({ type: "SET_STATUS", payload: h.initialStatus }));
        },
        [u, h.initialStatus, h.initialTouched]
      );
    var Z = lt(function (T) {
        if (p.current[T] && Pe(p.current[T].validate)) {
          var A = ie(E.values, T),
            _ = p.current[T].validate(A);
          return Nl(_)
            ? (N({ type: "SET_ISVALIDATING", payload: !0 }),
              _.then(function (M) {
                return M;
              }).then(function (M) {
                N({ type: "SET_FIELD_ERROR", payload: { field: T, value: M } }),
                  N({ type: "SET_ISVALIDATING", payload: !1 });
              }))
            : (N({ type: "SET_FIELD_ERROR", payload: { field: T, value: _ } }),
              Promise.resolve(_));
        } else if (h.validationSchema)
          return (
            N({ type: "SET_ISVALIDATING", payload: !0 }),
            O(E.values, T)
              .then(function (M) {
                return M;
              })
              .then(function (M) {
                N({
                  type: "SET_FIELD_ERROR",
                  payload: { field: T, value: ie(M, T) },
                }),
                  N({ type: "SET_ISVALIDATING", payload: !1 });
              })
          );
        return Promise.resolve();
      }),
      Ie = S.useCallback(function (T, A) {
        var _ = A.validate;
        p.current[T] = { validate: _ };
      }, []),
      ot = S.useCallback(function (T) {
        delete p.current[T];
      }, []),
      b = lt(function (T, A) {
        N({ type: "SET_TOUCHED", payload: T });
        var _ = A === void 0 ? i : A;
        return _ ? U(E.values) : Promise.resolve();
      }),
      V = S.useCallback(function (T) {
        N({ type: "SET_ERRORS", payload: T });
      }, []),
      I = lt(function (T, A) {
        var _ = Pe(T) ? T(E.values) : T;
        N({ type: "SET_VALUES", payload: _ });
        var M = A === void 0 ? n : A;
        return M ? U(_) : Promise.resolve();
      }),
      R = S.useCallback(function (T, A) {
        N({ type: "SET_FIELD_ERROR", payload: { field: T, value: A } });
      }, []),
      W = lt(function (T, A, _) {
        N({ type: "SET_FIELD_VALUE", payload: { field: T, value: A } });
        var M = _ === void 0 ? n : _;
        return M ? U(Lt(E.values, T, A)) : Promise.resolve();
      }),
      Pt = S.useCallback(
        function (T, A) {
          var _ = A,
            M = T,
            z;
          if (!Tl(T)) {
            T.persist && T.persist();
            var K = T.target ? T.target : T.currentTarget,
              Se = K.type,
              $t = K.name,
              Oa = K.id,
              Da = K.value,
              gv = K.checked,
              Ab = K.outerHTML,
              bf = K.options,
              yv = K.multiple;
            (_ = A || $t || Oa),
              (M = /number|range/.test(Se)
                ? ((z = parseFloat(Da)), isNaN(z) ? "" : z)
                : /checkbox/.test(Se)
                ? Sk(ie(E.values, _), gv, Da)
                : bf && yv
                ? wk(bf)
                : Da);
          }
          _ && W(_, M);
        },
        [W, E.values]
      ),
      ze = lt(function (T) {
        if (Tl(T))
          return function (A) {
            return Pt(A, T);
          };
        Pt(T);
      }),
      Qe = lt(function (T, A, _) {
        A === void 0 && (A = !0),
          N({ type: "SET_FIELD_TOUCHED", payload: { field: T, value: A } });
        var M = _ === void 0 ? i : _;
        return M ? U(E.values) : Promise.resolve();
      }),
      Ae = S.useCallback(
        function (T, A) {
          T.persist && T.persist();
          var _ = T.target,
            M = _.name,
            z = _.id,
            K = _.outerHTML,
            Se = A || M || z;
          Qe(Se, !0);
        },
        [Qe]
      ),
      gt = lt(function (T) {
        if (Tl(T))
          return function (A) {
            return Ae(A, T);
          };
        Ae(T);
      }),
      ys = S.useCallback(function (T) {
        Pe(T)
          ? N({ type: "SET_FORMIK_STATE", payload: T })
          : N({
              type: "SET_FORMIK_STATE",
              payload: function () {
                return T;
              },
            });
      }, []),
      gr = S.useCallback(function (T) {
        N({ type: "SET_STATUS", payload: T });
      }, []),
      Vn = S.useCallback(function (T) {
        N({ type: "SET_ISSUBMITTING", payload: T });
      }, []),
      yt = lt(function () {
        return (
          N({ type: "SUBMIT_ATTEMPT" }),
          U().then(function (T) {
            var A = T instanceof Error,
              _ = !A && Object.keys(T).length === 0;
            if (_) {
              var M;
              try {
                if (((M = uv()), M === void 0)) return;
              } catch (z) {
                throw z;
              }
              return Promise.resolve(M)
                .then(function (z) {
                  return y.current && N({ type: "SUBMIT_SUCCESS" }), z;
                })
                .catch(function (z) {
                  if (y.current) throw (N({ type: "SUBMIT_FAILURE" }), z);
                });
            } else if (y.current && (N({ type: "SUBMIT_FAILURE" }), A)) throw T;
          })
        );
      }),
      vs = lt(function (T) {
        T && T.preventDefault && Pe(T.preventDefault) && T.preventDefault(),
          T &&
            T.stopPropagation &&
            Pe(T.stopPropagation) &&
            T.stopPropagation(),
          yt().catch(function (A) {
            console.warn(
              "Warning: An unhandled error was caught from submitForm()",
              A
            );
          });
      }),
      ri = {
        resetForm: G,
        validateForm: U,
        validateField: Z,
        setErrors: V,
        setFieldError: R,
        setFieldTouched: Qe,
        setFieldValue: W,
        setStatus: gr,
        setSubmitting: Vn,
        setTouched: b,
        setValues: I,
        setFormikState: ys,
        submitForm: yt,
      },
      uv = lt(function () {
        return f(E.values, ri);
      }),
      cv = lt(function (T) {
        T && T.preventDefault && Pe(T.preventDefault) && T.preventDefault(),
          T &&
            T.stopPropagation &&
            Pe(T.stopPropagation) &&
            T.stopPropagation(),
          G();
      }),
      fv = S.useCallback(
        function (T) {
          return {
            value: ie(E.values, T),
            error: ie(E.errors, T),
            touched: !!ie(E.touched, T),
            initialValue: ie(m.current, T),
            initialTouched: !!ie(x.current, T),
            initialError: ie(v.current, T),
          };
        },
        [E.errors, E.touched, E.values]
      ),
      dv = S.useCallback(
        function (T) {
          return {
            setValue: function (_, M) {
              return W(T, _, M);
            },
            setTouched: function (_, M) {
              return Qe(T, _, M);
            },
            setError: function (_) {
              return R(T, _);
            },
          };
        },
        [W, Qe, R]
      ),
      hv = S.useCallback(
        function (T) {
          var A = gs(T),
            _ = A ? T.name : T,
            M = ie(E.values, _),
            z = { name: _, value: M, onChange: ze, onBlur: gt };
          if (A) {
            var K = T.type,
              Se = T.value,
              $t = T.as,
              Oa = T.multiple;
            K === "checkbox"
              ? Se === void 0
                ? (z.checked = !!M)
                : ((z.checked = !!(Array.isArray(M) && ~M.indexOf(Se))),
                  (z.value = Se))
              : K === "radio"
              ? ((z.checked = M === Se), (z.value = Se))
              : $t === "select" &&
                Oa &&
                ((z.value = z.value || []), (z.multiple = !0));
          }
          return z;
        },
        [gt, ze, E.values]
      ),
      _a = S.useMemo(
        function () {
          return !cn(m.current, E.values);
        },
        [m.current, E.values]
      ),
      pv = S.useMemo(
        function () {
          return typeof a < "u"
            ? _a
              ? E.errors && Object.keys(E.errors).length === 0
              : a !== !1 && Pe(a)
              ? a(h)
              : a
            : E.errors && Object.keys(E.errors).length === 0;
        },
        [a, _a, E.errors, h]
      ),
      mv = Y({}, E, {
        initialValues: m.current,
        initialErrors: v.current,
        initialTouched: x.current,
        initialStatus: C.current,
        handleBlur: gt,
        handleChange: ze,
        handleReset: cv,
        handleSubmit: vs,
        resetForm: G,
        setErrors: V,
        setFormikState: ys,
        setFieldTouched: Qe,
        setFieldValue: W,
        setFieldError: R,
        setStatus: gr,
        setSubmitting: Vn,
        setTouched: b,
        setValues: I,
        submitForm: yt,
        validateForm: U,
        validateField: Z,
        isValid: pv,
        dirty: _a,
        unregisterField: ot,
        registerField: Ie,
        getFieldProps: hv,
        getFieldMeta: fv,
        getFieldHelpers: dv,
        validateOnBlur: i,
        validateOnChange: n,
        validateOnMount: o,
      });
    return mv;
  }
  function Nf(e) {
    var t = gk(e),
      n = e.component,
      r = e.children,
      i = e.render,
      s = e.innerRef;
    return (
      S.useImperativeHandle(s, function () {
        return t;
      }),
      S.createElement(
        dk,
        { value: t },
        n
          ? S.createElement(n, t)
          : i
          ? i(t)
          : r
          ? Pe(r)
            ? r(t)
            : Z0(r)
            ? null
            : S.Children.only(r)
          : null
      )
    );
  }
  function yk(e) {
    var t = {};
    if (e.inner) {
      if (e.inner.length === 0) return Lt(t, e.path, e.message);
      for (
        var i = e.inner,
          n = Array.isArray(i),
          r = 0,
          i = n ? i : i[Symbol.iterator]();
        ;

      ) {
        var s;
        if (n) {
          if (r >= i.length) break;
          s = i[r++];
        } else {
          if (((r = i.next()), r.done)) break;
          s = r.value;
        }
        var o = s;
        ie(t, o.path) || (t = Lt(t, o.path, o.message));
      }
    }
    return t;
  }
  function vk(e, t, n, r) {
    n === void 0 && (n = !1);
    var i = Iu(e);
    return t[n ? "validateSync" : "validate"](i, {
      abortEarly: !1,
      context: r || i,
    });
  }
  function Iu(e) {
    var t = Array.isArray(e) ? [] : {};
    for (var n in e)
      if (Object.prototype.hasOwnProperty.call(e, n)) {
        var r = String(n);
        Array.isArray(e[r]) === !0
          ? (t[r] = e[r].map(function (i) {
              return Array.isArray(i) === !0 || Yh(i)
                ? Iu(i)
                : i !== ""
                ? i
                : void 0;
            }))
          : Yh(e[r])
          ? (t[r] = Iu(e[r]))
          : (t[r] = e[r] !== "" ? e[r] : void 0);
      }
    return t;
  }
  function xk(e, t, n) {
    var r = e.slice();
    return (
      t.forEach(function (s, o) {
        if (typeof r[o] > "u") {
          var a = n.clone !== !1,
            l = a && n.isMergeableObject(s);
          r[o] = l ? Du(Array.isArray(s) ? [] : {}, s, n) : s;
        } else n.isMergeableObject(s) ? (r[o] = Du(e[o], s, n)) : e.indexOf(s) === -1 && r.push(s);
      }),
      r
    );
  }
  function wk(e) {
    return Array.from(e)
      .filter(function (t) {
        return t.selected;
      })
      .map(function (t) {
        return t.value;
      });
  }
  function Sk(e, t, n) {
    if (typeof e == "boolean") return !!t;
    var r = [],
      i = !1,
      s = -1;
    if (Array.isArray(e)) (r = e), (s = e.indexOf(n)), (i = s >= 0);
    else if (!n || n == "true" || n == "false") return !!t;
    return t && n && !i
      ? r.concat(n)
      : i
      ? r.slice(0, s).concat(r.slice(s + 1))
      : r;
  }
  var Tk =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? S.useLayoutEffect
      : S.useEffect;
  function lt(e) {
    var t = S.useRef(e);
    return (
      Tk(function () {
        t.current = e;
      }),
      S.useCallback(function () {
        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
          r[i] = arguments[i];
        return t.current.apply(void 0, r);
      }, [])
    );
  }
  function de(e) {
    var t = e.validate,
      n = e.name,
      r = e.render,
      i = e.children,
      s = e.as,
      o = e.component,
      a = e.className,
      l = mn(e, [
        "validate",
        "name",
        "render",
        "children",
        "as",
        "component",
        "className",
      ]),
      u = X0(),
      f = mn(u, ["validate", "validationSchema"]),
      d = f.registerField,
      h = f.unregisterField;
    S.useEffect(
      function () {
        return (
          d(n, { validate: t }),
          function () {
            h(n);
          }
        );
      },
      [d, h, n, t]
    );
    var m = f.getFieldProps(Y({ name: n }, l)),
      v = f.getFieldMeta(n),
      x = { field: m, form: f };
    if (r) return r(Y({}, x, { meta: v }));
    if (Pe(i)) return i(Y({}, x, { meta: v }));
    if (o) {
      if (typeof o == "string") {
        var C = l.innerRef,
          y = mn(l, ["innerRef"]);
        return S.createElement(o, Y({ ref: C }, m, y, { className: a }), i);
      }
      return S.createElement(
        o,
        Y({ field: m, form: f }, l, { className: a }),
        i
      );
    }
    var p = s || "input";
    if (typeof p == "string") {
      var g = l.innerRef,
        w = mn(l, ["innerRef"]);
      return S.createElement(p, Y({ ref: g }, m, w, { className: a }), i);
    }
    return S.createElement(p, Y({}, m, l, { className: a }), i);
  }
  var Pa = S.forwardRef(function (e, t) {
    var n = e.action,
      r = mn(e, ["action"]),
      i = n ?? "#",
      s = X0(),
      o = s.handleReset,
      a = s.handleSubmit;
    return S.createElement(
      "form",
      Y({ onSubmit: a, ref: t, onReset: o, action: i }, r)
    );
  });
  Pa.displayName = "Form";
  function Nk(e) {
    var t = function (i) {
        return S.createElement(hk, null, function (s) {
          return s || S0(!1), S.createElement(e, Y({}, i, { formik: s }));
        });
      },
      n =
        e.displayName ||
        e.name ||
        (e.constructor && e.constructor.name) ||
        "Component";
    return (
      (t.WrappedComponent = e),
      (t.displayName = "FormikConnect(" + n + ")"),
      lk(t, e)
    );
  }
  var jk = function (t, n, r) {
      var i = sr(t),
        s = i[n];
      return i.splice(n, 1), i.splice(r, 0, s), i;
    },
    Ek = function (t, n, r) {
      var i = sr(t),
        s = i[n];
      return (i[n] = i[r]), (i[r] = s), i;
    },
    jl = function (t, n, r) {
      var i = sr(t);
      return i.splice(n, 0, r), i;
    },
    Ck = function (t, n, r) {
      var i = sr(t);
      return (i[n] = r), i;
    },
    sr = function (t) {
      if (t) {
        if (Array.isArray(t)) return [].concat(t);
        var n = Object.keys(t)
          .map(function (r) {
            return parseInt(r);
          })
          .reduce(function (r, i) {
            return i > r ? i : r;
          }, 0);
        return Array.from(Y({}, t, { length: n + 1 }));
      } else return [];
    },
    Cp = function (t, n) {
      var r = typeof t == "function" ? t : n;
      return function (i) {
        if (Array.isArray(i) || gs(i)) {
          var s = sr(i);
          return r(s);
        }
        return i;
      };
    },
    Pk = (function (e) {
      Q0(t, e);
      function t(r) {
        var i;
        return (
          (i = e.call(this, r) || this),
          (i.updateArrayField = function (s, o, a) {
            var l = i.props,
              u = l.name,
              f = l.formik.setFormikState;
            f(function (d) {
              var h = Cp(a, s),
                m = Cp(o, s),
                v = Lt(d.values, u, s(ie(d.values, u))),
                x = a ? h(ie(d.errors, u)) : void 0,
                C = o ? m(ie(d.touched, u)) : void 0;
              return (
                Ep(x) && (x = void 0),
                Ep(C) && (C = void 0),
                Y({}, d, {
                  values: v,
                  errors: a ? Lt(d.errors, u, x) : d.errors,
                  touched: o ? Lt(d.touched, u, C) : d.touched,
                })
              );
            });
          }),
          (i.push = function (s) {
            return i.updateArrayField(
              function (o) {
                return [].concat(sr(o), [fk(s)]);
              },
              !1,
              !1
            );
          }),
          (i.handlePush = function (s) {
            return function () {
              return i.push(s);
            };
          }),
          (i.swap = function (s, o) {
            return i.updateArrayField(
              function (a) {
                return Ek(a, s, o);
              },
              !0,
              !0
            );
          }),
          (i.handleSwap = function (s, o) {
            return function () {
              return i.swap(s, o);
            };
          }),
          (i.move = function (s, o) {
            return i.updateArrayField(
              function (a) {
                return jk(a, s, o);
              },
              !0,
              !0
            );
          }),
          (i.handleMove = function (s, o) {
            return function () {
              return i.move(s, o);
            };
          }),
          (i.insert = function (s, o) {
            return i.updateArrayField(
              function (a) {
                return jl(a, s, o);
              },
              function (a) {
                return jl(a, s, null);
              },
              function (a) {
                return jl(a, s, null);
              }
            );
          }),
          (i.handleInsert = function (s, o) {
            return function () {
              return i.insert(s, o);
            };
          }),
          (i.replace = function (s, o) {
            return i.updateArrayField(
              function (a) {
                return Ck(a, s, o);
              },
              !1,
              !1
            );
          }),
          (i.handleReplace = function (s, o) {
            return function () {
              return i.replace(s, o);
            };
          }),
          (i.unshift = function (s) {
            var o = -1;
            return (
              i.updateArrayField(
                function (a) {
                  var l = a ? [s].concat(a) : [s];
                  return (o = l.length), l;
                },
                function (a) {
                  return a ? [null].concat(a) : [null];
                },
                function (a) {
                  return a ? [null].concat(a) : [null];
                }
              ),
              o
            );
          }),
          (i.handleUnshift = function (s) {
            return function () {
              return i.unshift(s);
            };
          }),
          (i.handleRemove = function (s) {
            return function () {
              return i.remove(s);
            };
          }),
          (i.handlePop = function () {
            return function () {
              return i.pop();
            };
          }),
          (i.remove = i.remove.bind(jp(i))),
          (i.pop = i.pop.bind(jp(i))),
          i
        );
      }
      var n = t.prototype;
      return (
        (n.componentDidUpdate = function (i) {
          this.props.validateOnChange &&
            this.props.formik.validateOnChange &&
            !cn(
              ie(i.formik.values, i.name),
              ie(this.props.formik.values, this.props.name)
            ) &&
            this.props.formik.validateForm(this.props.formik.values);
        }),
        (n.remove = function (i) {
          var s;
          return (
            this.updateArrayField(
              function (o) {
                var a = o ? sr(o) : [];
                return (
                  s || (s = a[i]),
                  Pe(a.splice) && a.splice(i, 1),
                  Pe(a.every) &&
                  a.every(function (l) {
                    return l === void 0;
                  })
                    ? []
                    : a
                );
              },
              !0,
              !0
            ),
            s
          );
        }),
        (n.pop = function () {
          var i;
          return (
            this.updateArrayField(
              function (s) {
                var o = s.slice();
                return i || (i = o && o.pop && o.pop()), o;
              },
              !0,
              !0
            ),
            i
          );
        }),
        (n.render = function () {
          var i = {
              push: this.push,
              pop: this.pop,
              swap: this.swap,
              move: this.move,
              insert: this.insert,
              replace: this.replace,
              unshift: this.unshift,
              remove: this.remove,
              handlePush: this.handlePush,
              handlePop: this.handlePop,
              handleSwap: this.handleSwap,
              handleMove: this.handleMove,
              handleInsert: this.handleInsert,
              handleReplace: this.handleReplace,
              handleUnshift: this.handleUnshift,
              handleRemove: this.handleRemove,
            },
            s = this.props,
            o = s.component,
            a = s.render,
            l = s.children,
            u = s.name,
            f = s.formik,
            d = mn(f, ["validate", "validationSchema"]),
            h = Y({}, i, { form: d, name: u });
          return o
            ? S.createElement(o, h)
            : a
            ? a(h)
            : l
            ? typeof l == "function"
              ? l(h)
              : Z0(l)
              ? null
              : S.Children.only(l)
            : null;
        }),
        t
      );
    })(S.Component);
  Pk.defaultProps = { validateOnChange: !0 };
  var kk = (function (e) {
      Q0(t, e);
      function t() {
        return e.apply(this, arguments) || this;
      }
      var n = t.prototype;
      return (
        (n.shouldComponentUpdate = function (i) {
          return (
            ie(this.props.formik.errors, this.props.name) !==
              ie(i.formik.errors, this.props.name) ||
            ie(this.props.formik.touched, this.props.name) !==
              ie(i.formik.touched, this.props.name) ||
            Object.keys(this.props).length !== Object.keys(i).length
          );
        }),
        (n.render = function () {
          var i = this.props,
            s = i.component,
            o = i.formik,
            a = i.render,
            l = i.children,
            u = i.name,
            f = mn(i, ["component", "formik", "render", "children", "name"]),
            d = ie(o.touched, u),
            h = ie(o.errors, u);
          return d && h
            ? a
              ? Pe(a)
                ? a(h)
                : null
              : l
              ? Pe(l)
                ? l(h)
                : null
              : s
              ? S.createElement(s, f, h)
              : h
            : null;
        }),
        t
      );
    })(S.Component),
    he = Nk(kk);
  function pr(e) {
    (this._maxSize = e), this.clear();
  }
  pr.prototype.clear = function () {
    (this._size = 0), (this._values = Object.create(null));
  };
  pr.prototype.get = function (e) {
    return this._values[e];
  };
  pr.prototype.set = function (e, t) {
    return (
      this._size >= this._maxSize && this.clear(),
      e in this._values || this._size++,
      (this._values[e] = t)
    );
  };
  var bk = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    J0 = /^\d+$/,
    Ak = /^\d/,
    Fk = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    _k = /^\s*(['"]?)(.*?)(\1)\s*$/,
    jf = 512,
    Pp = new pr(jf),
    kp = new pr(jf),
    bp = new pr(jf),
    qn = {
      Cache: pr,
      split: zu,
      normalizePath: El,
      setter: function (e) {
        var t = El(e);
        return (
          kp.get(e) ||
          kp.set(e, function (r, i) {
            for (var s = 0, o = t.length, a = r; s < o - 1; ) {
              var l = t[s];
              if (l === "__proto__" || l === "constructor" || l === "prototype")
                return r;
              a = a[t[s++]];
            }
            a[t[s]] = i;
          })
        );
      },
      getter: function (e, t) {
        var n = El(e);
        return (
          bp.get(e) ||
          bp.set(e, function (i) {
            for (var s = 0, o = n.length; s < o; )
              if (i != null || !t) i = i[n[s++]];
              else return;
            return i;
          })
        );
      },
      join: function (e) {
        return e.reduce(function (t, n) {
          return t + (Ef(n) || J0.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
        }, "");
      },
      forEach: function (e, t, n) {
        Ok(Array.isArray(e) ? e : zu(e), t, n);
      },
    };
  function El(e) {
    return (
      Pp.get(e) ||
      Pp.set(
        e,
        zu(e).map(function (t) {
          return t.replace(_k, "$2");
        })
      )
    );
  }
  function zu(e) {
    return e.match(bk) || [""];
  }
  function Ok(e, t, n) {
    var r = e.length,
      i,
      s,
      o,
      a;
    for (s = 0; s < r; s++)
      (i = e[s]),
        i &&
          (Rk(i) && (i = '"' + i + '"'),
          (a = Ef(i)),
          (o = !a && /^\d+$/.test(i)),
          t.call(n, i, a, o, s, e));
  }
  function Ef(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function Dk(e) {
    return e.match(Ak) && !e.match(J0);
  }
  function Mk(e) {
    return Fk.test(e);
  }
  function Rk(e) {
    return !Ef(e) && (Dk(e) || Mk(e));
  }
  const Lk =
      /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    ka = (e) => e.match(Lk) || [],
    ba = (e) => e[0].toUpperCase() + e.slice(1),
    Cf = (e, t) => ka(e).join(t).toLowerCase(),
    ev = (e) =>
      ka(e).reduce(
        (t, n) =>
          `${t}${
            t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()
          }`,
        ""
      ),
    Vk = (e) => ba(ev(e)),
    $k = (e) => Cf(e, "_"),
    Ik = (e) => Cf(e, "-"),
    zk = (e) => ba(Cf(e, " ")),
    Bk = (e) => ka(e).map(ba).join(" ");
  var Cl = {
      words: ka,
      upperFirst: ba,
      camelCase: ev,
      pascalCase: Vk,
      snakeCase: $k,
      kebabCase: Ik,
      sentenceCase: zk,
      titleCase: Bk,
    },
    Pf = { exports: {} };
  Pf.exports = function (e) {
    return tv(Uk(e), e);
  };
  Pf.exports.array = tv;
  function tv(e, t) {
    var n = e.length,
      r = new Array(n),
      i = {},
      s = n,
      o = Hk(t),
      a = Wk(e);
    for (
      t.forEach(function (u) {
        if (!a.has(u[0]) || !a.has(u[1]))
          throw new Error(
            "Unknown node. There is an unknown node in the supplied edges."
          );
      });
      s--;

    )
      i[s] || l(e[s], s, new Set());
    return r;
    function l(u, f, d) {
      if (d.has(u)) {
        var h;
        try {
          h = ", node was:" + JSON.stringify(u);
        } catch {
          h = "";
        }
        throw new Error("Cyclic dependency" + h);
      }
      if (!a.has(u))
        throw new Error(
          "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
            JSON.stringify(u)
        );
      if (!i[f]) {
        i[f] = !0;
        var m = o.get(u) || new Set();
        if (((m = Array.from(m)), (f = m.length))) {
          d.add(u);
          do {
            var v = m[--f];
            l(v, a.get(v), d);
          } while (f);
          d.delete(u);
        }
        r[--n] = u;
      }
    }
  }
  function Uk(e) {
    for (var t = new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function Hk(e) {
    for (var t = new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], new Set()),
        t.has(i[1]) || t.set(i[1], new Set()),
        t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function Wk(e) {
    for (var t = new Map(), n = 0, r = e.length; n < r; n++) t.set(e[n], n);
    return t;
  }
  var Gk = Pf.exports;
  const Kk = Io(Gk),
    Yk = Object.prototype.toString,
    Qk = Error.prototype.toString,
    Xk = RegExp.prototype.toString,
    Zk = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
    qk = /^Symbol\((.*)\)(.*)$/;
  function Jk(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function Ap(e, t = !1) {
    if (e == null || e === !0 || e === !1) return "" + e;
    const n = typeof e;
    if (n === "number") return Jk(e);
    if (n === "string") return t ? `"${e}"` : e;
    if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol") return Zk.call(e).replace(qk, "Symbol($1)");
    const r = Yk.call(e).slice(8, -1);
    return r === "Date"
      ? isNaN(e.getTime())
        ? "" + e
        : e.toISOString(e)
      : r === "Error" || e instanceof Error
      ? "[" + Qk.call(e) + "]"
      : r === "RegExp"
      ? Xk.call(e)
      : null;
  }
  function Pn(e, t) {
    let n = Ap(e, t);
    return n !== null
      ? n
      : JSON.stringify(
          e,
          function (r, i) {
            let s = Ap(this[r], t);
            return s !== null ? s : i;
          },
          2
        );
  }
  function nv(e) {
    return e == null ? [] : [].concat(e);
  }
  let rv,
    eb = /\$\{\s*(\w+)\s*\}/g;
  rv = Symbol.toStringTag;
  class Ue extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return (
        r !== n.path && (n = Object.assign({}, n, { path: r })),
        typeof t == "string"
          ? t.replace(eb, (i, s) => Pn(n[s]))
          : typeof t == "function"
          ? t(n)
          : t
      );
    }
    static isError(t) {
      return t && t.name === "ValidationError";
    }
    constructor(t, n, r, i, s) {
      super(),
        (this.value = void 0),
        (this.path = void 0),
        (this.type = void 0),
        (this.errors = void 0),
        (this.params = void 0),
        (this.inner = void 0),
        (this[rv] = "Error"),
        (this.name = "ValidationError"),
        (this.value = n),
        (this.path = r),
        (this.type = i),
        (this.errors = []),
        (this.inner = []),
        nv(t).forEach((o) => {
          if (Ue.isError(o)) {
            this.errors.push(...o.errors);
            const a = o.inner.length ? o.inner : [o];
            this.inner.push(...a);
          } else this.errors.push(o);
        }),
        (this.message =
          this.errors.length > 1
            ? `${this.errors.length} errors occurred`
            : this.errors[0]),
        !s && Error.captureStackTrace && Error.captureStackTrace(this, Ue);
    }
  }
  let Ft = {
      default: "${path} is invalid",
      required: "${path} is a required field",
      defined: "${path} must be defined",
      notNull: "${path} cannot be null",
      oneOf: "${path} must be one of the following values: ${values}",
      notOneOf: "${path} must not be one of the following values: ${values}",
      notType: ({ path: e, type: t, value: n, originalValue: r }) => {
        const i =
          r != null && r !== n
            ? ` (cast from the value \`${Pn(r, !0)}\`).`
            : ".";
        return t !== "mixed"
          ? `${e} must be a \`${t}\` type, but the final value was: \`${Pn(
              n,
              !0
            )}\`` + i
          : `${e} must match the configured type. The validated value was: \`${Pn(
              n,
              !0
            )}\`` + i;
      },
    },
    xt = {
      length: "${path} must be exactly ${length} characters",
      min: "${path} must be at least ${min} characters",
      max: "${path} must be at most ${max} characters",
      matches: '${path} must match the following: "${regex}"',
      email: "${path} must be a valid email",
      url: "${path} must be a valid URL",
      uuid: "${path} must be a valid UUID",
      trim: "${path} must be a trimmed string",
      lowercase: "${path} must be a lowercase string",
      uppercase: "${path} must be a upper case string",
    },
    on = {
      min: "${path} must be greater than or equal to ${min}",
      max: "${path} must be less than or equal to ${max}",
      lessThan: "${path} must be less than ${less}",
      moreThan: "${path} must be greater than ${more}",
      positive: "${path} must be a positive number",
      negative: "${path} must be a negative number",
      integer: "${path} must be an integer",
    },
    Bu = {
      min: "${path} field must be later than ${min}",
      max: "${path} field must be at earlier than ${max}",
    },
    tb = { isValue: "${path} field must be ${value}" },
    Uu = { noUnknown: "${path} field has unspecified keys: ${unknown}" },
    nb = {
      min: "${path} field must have at least ${min} items",
      max: "${path} field must have less than or equal to ${max} items",
      length: "${path} must have ${length} items",
    },
    rb = {
      notType: (e) => {
        const { path: t, value: n, spec: r } = e,
          i = r.types.length;
        if (Array.isArray(n)) {
          if (n.length < i)
            return `${t} tuple value has too few items, expected a length of ${i} but got ${
              n.length
            } for value: \`${Pn(n, !0)}\``;
          if (n.length > i)
            return `${t} tuple value has too many items, expected a length of ${i} but got ${
              n.length
            } for value: \`${Pn(n, !0)}\``;
        }
        return Ue.formatError(Ft.notType, e);
      },
    };
  Object.assign(Object.create(null), {
    mixed: Ft,
    string: xt,
    number: on,
    date: Bu,
    object: Uu,
    array: nb,
    boolean: tb,
    tuple: rb,
  });
  const kf = (e) => e && e.__isYupSchema__;
  class Vo {
    static fromOptions(t, n) {
      if (!n.then && !n.otherwise)
        throw new TypeError(
          "either `then:` or `otherwise:` is required for `when()` conditions"
        );
      let { is: r, then: i, otherwise: s } = n,
        o = typeof r == "function" ? r : (...a) => a.every((l) => l === r);
      return new Vo(t, (a, l) => {
        var u;
        let f = o(...a) ? i : s;
        return (u = f == null ? void 0 : f(l)) != null ? u : l;
      });
    }
    constructor(t, n) {
      (this.fn = void 0), (this.refs = t), (this.refs = t), (this.fn = n);
    }
    resolve(t, n) {
      let r = this.refs.map((s) =>
          s.getValue(
            n == null ? void 0 : n.value,
            n == null ? void 0 : n.parent,
            n == null ? void 0 : n.context
          )
        ),
        i = this.fn(r, t, n);
      if (i === void 0 || i === t) return t;
      if (!kf(i)) throw new TypeError("conditions must return a schema object");
      return i.resolve(n);
    }
  }
  const Bs = { context: "$", value: "." };
  class mr {
    constructor(t, n = {}) {
      if (
        ((this.key = void 0),
        (this.isContext = void 0),
        (this.isValue = void 0),
        (this.isSibling = void 0),
        (this.path = void 0),
        (this.getter = void 0),
        (this.map = void 0),
        typeof t != "string")
      )
        throw new TypeError("ref must be a string, got: " + t);
      if (((this.key = t.trim()), t === ""))
        throw new TypeError("ref must be a non-empty string");
      (this.isContext = this.key[0] === Bs.context),
        (this.isValue = this.key[0] === Bs.value),
        (this.isSibling = !this.isContext && !this.isValue);
      let r = this.isContext ? Bs.context : this.isValue ? Bs.value : "";
      (this.path = this.key.slice(r.length)),
        (this.getter = this.path && qn.getter(this.path, !0)),
        (this.map = n.map);
    }
    getValue(t, n, r) {
      let i = this.isContext ? r : this.isValue ? t : n;
      return (
        this.getter && (i = this.getter(i || {})),
        this.map && (i = this.map(i)),
        i
      );
    }
    cast(t, n) {
      return this.getValue(
        t,
        n == null ? void 0 : n.parent,
        n == null ? void 0 : n.context
      );
    }
    resolve() {
      return this;
    }
    describe() {
      return { type: "ref", key: this.key };
    }
    toString() {
      return `Ref(${this.key})`;
    }
    static isRef(t) {
      return t && t.__isYupRef;
    }
  }
  mr.prototype.__isYupRef = !0;
  const Gt = (e) => e == null;
  function vr(e) {
    function t(
      { value: n, path: r = "", options: i, originalValue: s, schema: o },
      a,
      l
    ) {
      const { name: u, test: f, params: d, message: h, skipAbsent: m } = e;
      let {
        parent: v,
        context: x,
        abortEarly: C = o.spec.abortEarly,
        disableStackTrace: y = o.spec.disableStackTrace,
      } = i;
      function p($) {
        return mr.isRef($) ? $.getValue(n, v, x) : $;
      }
      function g($ = {}) {
        var ve;
        const U = Object.assign(
          {
            value: n,
            originalValue: s,
            label: o.spec.label,
            path: $.path || r,
            spec: o.spec,
          },
          d,
          $.params
        );
        for (const Z of Object.keys(U)) U[Z] = p(U[Z]);
        const G = new Ue(
          Ue.formatError($.message || h, U),
          n,
          U.path,
          $.type || u,
          (ve = $.disableStackTrace) != null ? ve : y
        );
        return (G.params = U), G;
      }
      const w = C ? a : l;
      let j = {
        path: r,
        parent: v,
        type: u,
        from: i.from,
        createError: g,
        resolve: p,
        options: i,
        originalValue: s,
        schema: o,
      };
      const E = ($) => {
          Ue.isError($) ? w($) : $ ? l(null) : w(g());
        },
        N = ($) => {
          Ue.isError($) ? w($) : a($);
        };
      if (m && Gt(n)) return E(!0);
      let O;
      try {
        var D;
        if (
          ((O = f.call(j, n, j)),
          typeof ((D = O) == null ? void 0 : D.then) == "function")
        ) {
          if (i.sync)
            throw new Error(
              `Validation test of type: "${j.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
            );
          return Promise.resolve(O).then(E, N);
        }
      } catch ($) {
        N($);
        return;
      }
      E(O);
    }
    return (t.OPTIONS = e), t;
  }
  function ib(e, t, n, r = n) {
    let i, s, o;
    return t
      ? (qn.forEach(t, (a, l, u) => {
          let f = l ? a.slice(1, a.length - 1) : a;
          e = e.resolve({ context: r, parent: i, value: n });
          let d = e.type === "tuple",
            h = u ? parseInt(f, 10) : 0;
          if (e.innerType || d) {
            if (d && !u)
              throw new Error(
                `Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`
              );
            if (n && h >= n.length)
              throw new Error(
                `Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `
              );
            (i = n), (n = n && n[h]), (e = d ? e.spec.types[h] : e.innerType);
          }
          if (!u) {
            if (!e.fields || !e.fields[f])
              throw new Error(
                `The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`
              );
            (i = n), (n = n && n[f]), (e = e.fields[f]);
          }
          (s = f), (o = l ? "[" + a + "]" : "." + a);
        }),
        { schema: e, parent: i, parentPath: s })
      : { parent: i, parentPath: t, schema: e };
  }
  class $o extends Set {
    describe() {
      const t = [];
      for (const n of this.values()) t.push(mr.isRef(n) ? n.describe() : n);
      return t;
    }
    resolveAll(t) {
      let n = [];
      for (const r of this.values()) n.push(t(r));
      return n;
    }
    clone() {
      return new $o(this.values());
    }
    merge(t, n) {
      const r = this.clone();
      return t.forEach((i) => r.add(i)), n.forEach((i) => r.delete(i)), r;
    }
  }
  function Rr(e, t = new Map()) {
    if (kf(e) || !e || typeof e != "object") return e;
    if (t.has(e)) return t.get(e);
    let n;
    if (e instanceof Date) (n = new Date(e.getTime())), t.set(e, n);
    else if (e instanceof RegExp) (n = new RegExp(e)), t.set(e, n);
    else if (Array.isArray(e)) {
      (n = new Array(e.length)), t.set(e, n);
      for (let r = 0; r < e.length; r++) n[r] = Rr(e[r], t);
    } else if (e instanceof Map) {
      (n = new Map()), t.set(e, n);
      for (const [r, i] of e.entries()) n.set(r, Rr(i, t));
    } else if (e instanceof Set) {
      (n = new Set()), t.set(e, n);
      for (const r of e) n.add(Rr(r, t));
    } else if (e instanceof Object) {
      (n = {}), t.set(e, n);
      for (const [r, i] of Object.entries(e)) n[r] = Rr(i, t);
    } else throw Error(`Unable to clone ${e}`);
    return n;
  }
  class Ct {
    constructor(t) {
      (this.type = void 0),
        (this.deps = []),
        (this.tests = void 0),
        (this.transforms = void 0),
        (this.conditions = []),
        (this._mutate = void 0),
        (this.internalTests = {}),
        (this._whitelist = new $o()),
        (this._blacklist = new $o()),
        (this.exclusiveTests = Object.create(null)),
        (this._typeCheck = void 0),
        (this.spec = void 0),
        (this.tests = []),
        (this.transforms = []),
        this.withMutation(() => {
          this.typeError(Ft.notType);
        }),
        (this.type = t.type),
        (this._typeCheck = t.check),
        (this.spec = Object.assign(
          {
            strip: !1,
            strict: !1,
            abortEarly: !0,
            recursive: !0,
            disableStackTrace: !1,
            nullable: !1,
            optional: !0,
            coerce: !0,
          },
          t == null ? void 0 : t.spec
        )),
        this.withMutation((n) => {
          n.nonNullable();
        });
    }
    get _type() {
      return this.type;
    }
    clone(t) {
      if (this._mutate) return t && Object.assign(this.spec, t), this;
      const n = Object.create(Object.getPrototypeOf(this));
      return (
        (n.type = this.type),
        (n._typeCheck = this._typeCheck),
        (n._whitelist = this._whitelist.clone()),
        (n._blacklist = this._blacklist.clone()),
        (n.internalTests = Object.assign({}, this.internalTests)),
        (n.exclusiveTests = Object.assign({}, this.exclusiveTests)),
        (n.deps = [...this.deps]),
        (n.conditions = [...this.conditions]),
        (n.tests = [...this.tests]),
        (n.transforms = [...this.transforms]),
        (n.spec = Rr(Object.assign({}, this.spec, t))),
        n
      );
    }
    label(t) {
      let n = this.clone();
      return (n.spec.label = t), n;
    }
    meta(...t) {
      if (t.length === 0) return this.spec.meta;
      let n = this.clone();
      return (n.spec.meta = Object.assign(n.spec.meta || {}, t[0])), n;
    }
    withMutation(t) {
      let n = this._mutate;
      this._mutate = !0;
      let r = t(this);
      return (this._mutate = n), r;
    }
    concat(t) {
      if (!t || t === this) return this;
      if (t.type !== this.type && this.type !== "mixed")
        throw new TypeError(
          `You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`
        );
      let n = this,
        r = t.clone();
      const i = Object.assign({}, n.spec, r.spec);
      return (
        (r.spec = i),
        (r.internalTests = Object.assign({}, n.internalTests, r.internalTests)),
        (r._whitelist = n._whitelist.merge(t._whitelist, t._blacklist)),
        (r._blacklist = n._blacklist.merge(t._blacklist, t._whitelist)),
        (r.tests = n.tests),
        (r.exclusiveTests = n.exclusiveTests),
        r.withMutation((s) => {
          t.tests.forEach((o) => {
            s.test(o.OPTIONS);
          });
        }),
        (r.transforms = [...n.transforms, ...r.transforms]),
        r
      );
    }
    isType(t) {
      return t == null
        ? !!(
            (this.spec.nullable && t === null) ||
            (this.spec.optional && t === void 0)
          )
        : this._typeCheck(t);
    }
    resolve(t) {
      let n = this;
      if (n.conditions.length) {
        let r = n.conditions;
        (n = n.clone()),
          (n.conditions = []),
          (n = r.reduce((i, s) => s.resolve(i, t), n)),
          (n = n.resolve(t));
      }
      return n;
    }
    resolveOptions(t) {
      var n, r, i, s;
      return Object.assign({}, t, {
        from: t.from || [],
        strict: (n = t.strict) != null ? n : this.spec.strict,
        abortEarly: (r = t.abortEarly) != null ? r : this.spec.abortEarly,
        recursive: (i = t.recursive) != null ? i : this.spec.recursive,
        disableStackTrace:
          (s = t.disableStackTrace) != null ? s : this.spec.disableStackTrace,
      });
    }
    cast(t, n = {}) {
      let r = this.resolve(Object.assign({ value: t }, n)),
        i = n.assert === "ignore-optionality",
        s = r._cast(t, n);
      if (n.assert !== !1 && !r.isType(s)) {
        if (i && Gt(s)) return s;
        let o = Pn(t),
          a = Pn(s);
        throw new TypeError(
          `The value of ${
            n.path || "field"
          } could not be cast to a value that satisfies the schema type: "${
            r.type
          }". 

attempted value: ${o} 
` + (a !== o ? `result of cast: ${a}` : "")
        );
      }
      return s;
    }
    _cast(t, n) {
      let r =
        t === void 0
          ? t
          : this.transforms.reduce((i, s) => s.call(this, i, t, this), t);
      return r === void 0 && (r = this.getDefault(n)), r;
    }
    _validate(t, n = {}, r, i) {
      let { path: s, originalValue: o = t, strict: a = this.spec.strict } = n,
        l = t;
      a || (l = this._cast(l, Object.assign({ assert: !1 }, n)));
      let u = [];
      for (let f of Object.values(this.internalTests)) f && u.push(f);
      this.runTests(
        { path: s, value: l, originalValue: o, options: n, tests: u },
        r,
        (f) => {
          if (f.length) return i(f, l);
          this.runTests(
            {
              path: s,
              value: l,
              originalValue: o,
              options: n,
              tests: this.tests,
            },
            r,
            i
          );
        }
      );
    }
    runTests(t, n, r) {
      let i = !1,
        { tests: s, value: o, originalValue: a, path: l, options: u } = t,
        f = (x) => {
          i || ((i = !0), n(x, o));
        },
        d = (x) => {
          i || ((i = !0), r(x, o));
        },
        h = s.length,
        m = [];
      if (!h) return d([]);
      let v = { value: o, originalValue: a, path: l, options: u, schema: this };
      for (let x = 0; x < s.length; x++) {
        const C = s[x];
        C(v, f, function (p) {
          p && (Array.isArray(p) ? m.push(...p) : m.push(p)), --h <= 0 && d(m);
        });
      }
    }
    asNestedTest({
      key: t,
      index: n,
      parent: r,
      parentPath: i,
      originalParent: s,
      options: o,
    }) {
      const a = t ?? n;
      if (a == null)
        throw TypeError("Must include `key` or `index` for nested validations");
      const l = typeof a == "number";
      let u = r[a];
      const f = Object.assign({}, o, {
        strict: !0,
        parent: r,
        value: u,
        originalValue: s[a],
        key: void 0,
        [l ? "index" : "key"]: a,
        path:
          l || a.includes(".")
            ? `${i || ""}[${u ? a : `"${a}"`}]`
            : (i ? `${i}.` : "") + t,
      });
      return (d, h, m) => this.resolve(f)._validate(u, f, h, m);
    }
    validate(t, n) {
      var r;
      let i = this.resolve(Object.assign({}, n, { value: t })),
        s =
          (r = n == null ? void 0 : n.disableStackTrace) != null
            ? r
            : i.spec.disableStackTrace;
      return new Promise((o, a) =>
        i._validate(
          t,
          n,
          (l, u) => {
            Ue.isError(l) && (l.value = u), a(l);
          },
          (l, u) => {
            l.length ? a(new Ue(l, u, void 0, void 0, s)) : o(u);
          }
        )
      );
    }
    validateSync(t, n) {
      var r;
      let i = this.resolve(Object.assign({}, n, { value: t })),
        s,
        o =
          (r = n == null ? void 0 : n.disableStackTrace) != null
            ? r
            : i.spec.disableStackTrace;
      return (
        i._validate(
          t,
          Object.assign({}, n, { sync: !0 }),
          (a, l) => {
            throw (Ue.isError(a) && (a.value = l), a);
          },
          (a, l) => {
            if (a.length) throw new Ue(a, t, void 0, void 0, o);
            s = l;
          }
        ),
        s
      );
    }
    isValid(t, n) {
      return this.validate(t, n).then(
        () => !0,
        (r) => {
          if (Ue.isError(r)) return !1;
          throw r;
        }
      );
    }
    isValidSync(t, n) {
      try {
        return this.validateSync(t, n), !0;
      } catch (r) {
        if (Ue.isError(r)) return !1;
        throw r;
      }
    }
    _getDefault(t) {
      let n = this.spec.default;
      return n == null ? n : typeof n == "function" ? n.call(this, t) : Rr(n);
    }
    getDefault(t) {
      return this.resolve(t || {})._getDefault(t);
    }
    default(t) {
      return arguments.length === 0
        ? this._getDefault()
        : this.clone({ default: t });
    }
    strict(t = !0) {
      return this.clone({ strict: t });
    }
    nullability(t, n) {
      const r = this.clone({ nullable: t });
      return (
        (r.internalTests.nullable = vr({
          message: n,
          name: "nullable",
          test(i) {
            return i === null ? this.schema.spec.nullable : !0;
          },
        })),
        r
      );
    }
    optionality(t, n) {
      const r = this.clone({ optional: t });
      return (
        (r.internalTests.optionality = vr({
          message: n,
          name: "optionality",
          test(i) {
            return i === void 0 ? this.schema.spec.optional : !0;
          },
        })),
        r
      );
    }
    optional() {
      return this.optionality(!0);
    }
    defined(t = Ft.defined) {
      return this.optionality(!1, t);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(t = Ft.notNull) {
      return this.nullability(!1, t);
    }
    required(t = Ft.required) {
      return this.clone().withMutation((n) => n.nonNullable(t).defined(t));
    }
    notRequired() {
      return this.clone().withMutation((t) => t.nullable().optional());
    }
    transform(t) {
      let n = this.clone();
      return n.transforms.push(t), n;
    }
    test(...t) {
      let n;
      if (
        (t.length === 1
          ? typeof t[0] == "function"
            ? (n = { test: t[0] })
            : (n = t[0])
          : t.length === 2
          ? (n = { name: t[0], test: t[1] })
          : (n = { name: t[0], message: t[1], test: t[2] }),
        n.message === void 0 && (n.message = Ft.default),
        typeof n.test != "function")
      )
        throw new TypeError("`test` is a required parameters");
      let r = this.clone(),
        i = vr(n),
        s = n.exclusive || (n.name && r.exclusiveTests[n.name] === !0);
      if (n.exclusive && !n.name)
        throw new TypeError(
          "Exclusive tests must provide a unique `name` identifying the test"
        );
      return (
        n.name && (r.exclusiveTests[n.name] = !!n.exclusive),
        (r.tests = r.tests.filter(
          (o) =>
            !(
              o.OPTIONS.name === n.name &&
              (s || o.OPTIONS.test === i.OPTIONS.test)
            )
        )),
        r.tests.push(i),
        r
      );
    }
    when(t, n) {
      !Array.isArray(t) && typeof t != "string" && ((n = t), (t = "."));
      let r = this.clone(),
        i = nv(t).map((s) => new mr(s));
      return (
        i.forEach((s) => {
          s.isSibling && r.deps.push(s.key);
        }),
        r.conditions.push(
          typeof n == "function" ? new Vo(i, n) : Vo.fromOptions(i, n)
        ),
        r
      );
    }
    typeError(t) {
      let n = this.clone();
      return (
        (n.internalTests.typeError = vr({
          message: t,
          name: "typeError",
          skipAbsent: !0,
          test(r) {
            return this.schema._typeCheck(r)
              ? !0
              : this.createError({ params: { type: this.schema.type } });
          },
        })),
        n
      );
    }
    oneOf(t, n = Ft.oneOf) {
      let r = this.clone();
      return (
        t.forEach((i) => {
          r._whitelist.add(i), r._blacklist.delete(i);
        }),
        (r.internalTests.whiteList = vr({
          message: n,
          name: "oneOf",
          skipAbsent: !0,
          test(i) {
            let s = this.schema._whitelist,
              o = s.resolveAll(this.resolve);
            return o.includes(i)
              ? !0
              : this.createError({
                  params: { values: Array.from(s).join(", "), resolved: o },
                });
          },
        })),
        r
      );
    }
    notOneOf(t, n = Ft.notOneOf) {
      let r = this.clone();
      return (
        t.forEach((i) => {
          r._blacklist.add(i), r._whitelist.delete(i);
        }),
        (r.internalTests.blacklist = vr({
          message: n,
          name: "notOneOf",
          test(i) {
            let s = this.schema._blacklist,
              o = s.resolveAll(this.resolve);
            return o.includes(i)
              ? this.createError({
                  params: { values: Array.from(s).join(", "), resolved: o },
                })
              : !0;
          },
        })),
        r
      );
    }
    strip(t = !0) {
      let n = this.clone();
      return (n.spec.strip = t), n;
    }
    describe(t) {
      const n = (t ? this.resolve(t) : this).clone(),
        { label: r, meta: i, optional: s, nullable: o } = n.spec;
      return {
        meta: i,
        label: r,
        optional: s,
        nullable: o,
        default: n.getDefault(t),
        type: n.type,
        oneOf: n._whitelist.describe(),
        notOneOf: n._blacklist.describe(),
        tests: n.tests
          .map((l) => ({ name: l.OPTIONS.name, params: l.OPTIONS.params }))
          .filter((l, u, f) => f.findIndex((d) => d.name === l.name) === u),
      };
    }
  }
  Ct.prototype.__isYupSchema__ = !0;
  for (const e of ["validate", "validateSync"])
    Ct.prototype[`${e}At`] = function (t, n, r = {}) {
      const { parent: i, parentPath: s, schema: o } = ib(this, t, n, r.context);
      return o[e](i && i[s], Object.assign({}, r, { parent: i, path: t }));
    };
  for (const e of ["equals", "is"]) Ct.prototype[e] = Ct.prototype.oneOf;
  for (const e of ["not", "nope"]) Ct.prototype[e] = Ct.prototype.notOneOf;
  let sb =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    ob =
      /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    ab =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
    lb = (e) => Gt(e) || e === e.trim(),
    ub = {}.toString();
  function pe() {
    return new iv();
  }
  class iv extends Ct {
    constructor() {
      super({
        type: "string",
        check(t) {
          return t instanceof String && (t = t.valueOf()), typeof t == "string";
        },
      }),
        this.withMutation(() => {
          this.transform((t, n, r) => {
            if (!r.spec.coerce || r.isType(t) || Array.isArray(t)) return t;
            const i = t != null && t.toString ? t.toString() : t;
            return i === ub ? t : i;
          });
        });
    }
    required(t) {
      return super
        .required(t)
        .withMutation((n) =>
          n.test({
            message: t || Ft.required,
            name: "required",
            skipAbsent: !0,
            test: (r) => !!r.length,
          })
        );
    }
    notRequired() {
      return super
        .notRequired()
        .withMutation(
          (t) => (
            (t.tests = t.tests.filter((n) => n.OPTIONS.name !== "required")), t
          )
        );
    }
    length(t, n = xt.length) {
      return this.test({
        message: n,
        name: "length",
        exclusive: !0,
        params: { length: t },
        skipAbsent: !0,
        test(r) {
          return r.length === this.resolve(t);
        },
      });
    }
    min(t, n = xt.min) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: { min: t },
        skipAbsent: !0,
        test(r) {
          return r.length >= this.resolve(t);
        },
      });
    }
    max(t, n = xt.max) {
      return this.test({
        name: "max",
        exclusive: !0,
        message: n,
        params: { max: t },
        skipAbsent: !0,
        test(r) {
          return r.length <= this.resolve(t);
        },
      });
    }
    matches(t, n) {
      let r = !1,
        i,
        s;
      return (
        n &&
          (typeof n == "object"
            ? ({ excludeEmptyString: r = !1, message: i, name: s } = n)
            : (i = n)),
        this.test({
          name: s || "matches",
          message: i || xt.matches,
          params: { regex: t },
          skipAbsent: !0,
          test: (o) => (o === "" && r) || o.search(t) !== -1,
        })
      );
    }
    email(t = xt.email) {
      return this.matches(sb, {
        name: "email",
        message: t,
        excludeEmptyString: !0,
      });
    }
    url(t = xt.url) {
      return this.matches(ob, {
        name: "url",
        message: t,
        excludeEmptyString: !0,
      });
    }
    uuid(t = xt.uuid) {
      return this.matches(ab, {
        name: "uuid",
        message: t,
        excludeEmptyString: !1,
      });
    }
    ensure() {
      return this.default("").transform((t) => (t === null ? "" : t));
    }
    trim(t = xt.trim) {
      return this.transform((n) => (n != null ? n.trim() : n)).test({
        message: t,
        name: "trim",
        test: lb,
      });
    }
    lowercase(t = xt.lowercase) {
      return this.transform((n) => (Gt(n) ? n : n.toLowerCase())).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => Gt(n) || n === n.toLowerCase(),
      });
    }
    uppercase(t = xt.uppercase) {
      return this.transform((n) => (Gt(n) ? n : n.toUpperCase())).test({
        message: t,
        name: "string_case",
        exclusive: !0,
        skipAbsent: !0,
        test: (n) => Gt(n) || n === n.toUpperCase(),
      });
    }
  }
  pe.prototype = iv.prototype;
  let cb = (e) => e != +e;
  function sv() {
    return new ov();
  }
  class ov extends Ct {
    constructor() {
      super({
        type: "number",
        check(t) {
          return (
            t instanceof Number && (t = t.valueOf()),
            typeof t == "number" && !cb(t)
          );
        },
      }),
        this.withMutation(() => {
          this.transform((t, n, r) => {
            if (!r.spec.coerce) return t;
            let i = t;
            if (typeof i == "string") {
              if (((i = i.replace(/\s/g, "")), i === "")) return NaN;
              i = +i;
            }
            return r.isType(i) || i === null ? i : parseFloat(i);
          });
        });
    }
    min(t, n = on.min) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: { min: t },
        skipAbsent: !0,
        test(r) {
          return r >= this.resolve(t);
        },
      });
    }
    max(t, n = on.max) {
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: { max: t },
        skipAbsent: !0,
        test(r) {
          return r <= this.resolve(t);
        },
      });
    }
    lessThan(t, n = on.lessThan) {
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: { less: t },
        skipAbsent: !0,
        test(r) {
          return r < this.resolve(t);
        },
      });
    }
    moreThan(t, n = on.moreThan) {
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: { more: t },
        skipAbsent: !0,
        test(r) {
          return r > this.resolve(t);
        },
      });
    }
    positive(t = on.positive) {
      return this.moreThan(0, t);
    }
    negative(t = on.negative) {
      return this.lessThan(0, t);
    }
    integer(t = on.integer) {
      return this.test({
        name: "integer",
        message: t,
        skipAbsent: !0,
        test: (n) => Number.isInteger(n),
      });
    }
    truncate() {
      return this.transform((t) => (Gt(t) ? t : t | 0));
    }
    round(t) {
      var n;
      let r = ["ceil", "floor", "round", "trunc"];
      if (
        ((t = ((n = t) == null ? void 0 : n.toLowerCase()) || "round"),
        t === "trunc")
      )
        return this.truncate();
      if (r.indexOf(t.toLowerCase()) === -1)
        throw new TypeError(
          "Only valid options for round() are: " + r.join(", ")
        );
      return this.transform((i) => (Gt(i) ? i : Math[t](i)));
    }
  }
  sv.prototype = ov.prototype;
  const fb =
    /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
  function It(e, t = 0) {
    return Number(e) || t;
  }
  function db(e) {
    const t = fb.exec(e);
    if (!t) return Date.parse ? Date.parse(e) : Number.NaN;
    const n = {
      year: It(t[1]),
      month: It(t[2], 1) - 1,
      day: It(t[3], 1),
      hour: It(t[4]),
      minute: It(t[5]),
      second: It(t[6]),
      millisecond: t[7] ? It(t[7].substring(0, 3)) : 0,
      z: t[8] || void 0,
      plusMinus: t[9] || void 0,
      hourOffset: It(t[10]),
      minuteOffset: It(t[11]),
    };
    if (n.z === void 0 && n.plusMinus === void 0)
      return new Date(
        n.year,
        n.month,
        n.day,
        n.hour,
        n.minute,
        n.second,
        n.millisecond
      ).valueOf();
    let r = 0;
    return (
      n.z !== "Z" &&
        n.plusMinus !== void 0 &&
        ((r = n.hourOffset * 60 + n.minuteOffset),
        n.plusMinus === "+" && (r = 0 - r)),
      Date.UTC(
        n.year,
        n.month,
        n.day,
        n.hour,
        n.minute + r,
        n.second,
        n.millisecond
      )
    );
  }
  let hb = new Date(""),
    pb = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class Aa extends Ct {
    constructor() {
      super({
        type: "date",
        check(t) {
          return pb(t) && !isNaN(t.getTime());
        },
      }),
        this.withMutation(() => {
          this.transform((t, n, r) =>
            !r.spec.coerce || r.isType(t) || t === null
              ? t
              : ((t = db(t)), isNaN(t) ? Aa.INVALID_DATE : new Date(t))
          );
        });
    }
    prepareParam(t, n) {
      let r;
      if (mr.isRef(t)) r = t;
      else {
        let i = this.cast(t);
        if (!this._typeCheck(i))
          throw new TypeError(
            `\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`
          );
        r = i;
      }
      return r;
    }
    min(t, n = Bu.min) {
      let r = this.prepareParam(t, "min");
      return this.test({
        message: n,
        name: "min",
        exclusive: !0,
        params: { min: t },
        skipAbsent: !0,
        test(i) {
          return i >= this.resolve(r);
        },
      });
    }
    max(t, n = Bu.max) {
      let r = this.prepareParam(t, "max");
      return this.test({
        message: n,
        name: "max",
        exclusive: !0,
        params: { max: t },
        skipAbsent: !0,
        test(i) {
          return i <= this.resolve(r);
        },
      });
    }
  }
  Aa.INVALID_DATE = hb;
  Aa.prototype;
  function mb(e, t = []) {
    let n = [],
      r = new Set(),
      i = new Set(t.map(([o, a]) => `${o}-${a}`));
    function s(o, a) {
      let l = qn.split(o)[0];
      r.add(l), i.has(`${a}-${l}`) || n.push([a, l]);
    }
    for (const o of Object.keys(e)) {
      let a = e[o];
      r.add(o),
        mr.isRef(a) && a.isSibling
          ? s(a.path, o)
          : kf(a) && "deps" in a && a.deps.forEach((l) => s(l, o));
    }
    return Kk.array(Array.from(r), n).reverse();
  }
  function Fp(e, t) {
    let n = 1 / 0;
    return (
      e.some((r, i) => {
        var s;
        if ((s = t.path) != null && s.includes(r)) return (n = i), !0;
      }),
      n
    );
  }
  function av(e) {
    return (t, n) => Fp(e, t) - Fp(e, n);
  }
  const gb = (e, t, n) => {
    if (typeof e != "string") return e;
    let r = e;
    try {
      r = JSON.parse(e);
    } catch {}
    return n.isType(r) ? r : e;
  };
  function ro(e) {
    if ("fields" in e) {
      const t = {};
      for (const [n, r] of Object.entries(e.fields)) t[n] = ro(r);
      return e.setFields(t);
    }
    if (e.type === "array") {
      const t = e.optional();
      return t.innerType && (t.innerType = ro(t.innerType)), t;
    }
    return e.type === "tuple"
      ? e.optional().clone({ types: e.spec.types.map(ro) })
      : "optional" in e
      ? e.optional()
      : e;
  }
  const yb = (e, t) => {
    const n = [...qn.normalizePath(t)];
    if (n.length === 1) return n[0] in e;
    let r = n.pop(),
      i = qn.getter(qn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let _p = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function vb(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const xb = av([]);
  function Fa(e) {
    return new lv(e);
  }
  class lv extends Ct {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return _p(n) || typeof n == "function";
        },
      }),
        (this.fields = Object.create(null)),
        (this._sortErrors = xb),
        (this._nodes = []),
        (this._excludedEdges = []),
        this.withMutation(() => {
          t && this.shape(t);
        });
    }
    _cast(t, n = {}) {
      var r;
      let i = super._cast(t, n);
      if (i === void 0) return this.getDefault(n);
      if (!this._typeCheck(i)) return i;
      let s = this.fields,
        o = (r = n.stripUnknown) != null ? r : this.spec.noUnknown,
        a = [].concat(
          this._nodes,
          Object.keys(i).filter((d) => !this._nodes.includes(d))
        ),
        l = {},
        u = Object.assign({}, n, {
          parent: l,
          __validating: n.__validating || !1,
        }),
        f = !1;
      for (const d of a) {
        let h = s[d],
          m = d in i;
        if (h) {
          let v,
            x = i[d];
          (u.path = (n.path ? `${n.path}.` : "") + d),
            (h = h.resolve({ value: x, context: n.context, parent: l }));
          let C = h instanceof Ct ? h.spec : void 0,
            y = C == null ? void 0 : C.strict;
          if (C != null && C.strip) {
            f = f || d in i;
            continue;
          }
          (v = !n.__validating || !y ? h.cast(i[d], u) : i[d]),
            v !== void 0 && (l[d] = v);
        } else m && !o && (l[d] = i[d]);
        (m !== d in l || l[d] !== i[d]) && (f = !0);
      }
      return f ? l : i;
    }
    _validate(t, n = {}, r, i) {
      let {
        from: s = [],
        originalValue: o = t,
        recursive: a = this.spec.recursive,
      } = n;
      (n.from = [{ schema: this, value: o }, ...s]),
        (n.__validating = !0),
        (n.originalValue = o),
        super._validate(t, n, r, (l, u) => {
          if (!a || !_p(u)) {
            i(l, u);
            return;
          }
          o = o || u;
          let f = [];
          for (let d of this._nodes) {
            let h = this.fields[d];
            !h ||
              mr.isRef(h) ||
              f.push(
                h.asNestedTest({
                  options: n,
                  key: d,
                  parent: u,
                  parentPath: n.path,
                  originalParent: o,
                })
              );
          }
          this.runTests(
            { tests: f, value: u, originalValue: o, options: n },
            r,
            (d) => {
              i(d.sort(this._sortErrors).concat(l), u);
            }
          );
        });
    }
    clone(t) {
      const n = super.clone(t);
      return (
        (n.fields = Object.assign({}, this.fields)),
        (n._nodes = this._nodes),
        (n._excludedEdges = this._excludedEdges),
        (n._sortErrors = this._sortErrors),
        n
      );
    }
    concat(t) {
      let n = super.concat(t),
        r = n.fields;
      for (let [i, s] of Object.entries(this.fields)) {
        const o = r[i];
        r[i] = o === void 0 ? s : o;
      }
      return n.withMutation((i) =>
        i.setFields(r, [...this._excludedEdges, ...t._excludedEdges])
      );
    }
    _getDefault(t) {
      if ("default" in this.spec) return super._getDefault(t);
      if (!this._nodes.length) return;
      let n = {};
      return (
        this._nodes.forEach((r) => {
          var i;
          const s = this.fields[r];
          let o = t;
          (i = o) != null &&
            i.value &&
            (o = Object.assign({}, o, { parent: o.value, value: o.value[r] })),
            (n[r] = s && "getDefault" in s ? s.getDefault(o) : void 0);
        }),
        n
      );
    }
    setFields(t, n) {
      let r = this.clone();
      return (
        (r.fields = t),
        (r._nodes = mb(t, n)),
        (r._sortErrors = av(Object.keys(t))),
        n && (r._excludedEdges = n),
        r
      );
    }
    shape(t, n = []) {
      return this.clone().withMutation((r) => {
        let i = r._excludedEdges;
        return (
          n.length &&
            (Array.isArray(n[0]) || (n = [n]),
            (i = [...r._excludedEdges, ...n])),
          r.setFields(Object.assign(r.fields, t), i)
        );
      });
    }
    partial() {
      const t = {};
      for (const [n, r] of Object.entries(this.fields))
        t[n] =
          "optional" in r && r.optional instanceof Function ? r.optional() : r;
      return this.setFields(t);
    }
    deepPartial() {
      return ro(this);
    }
    pick(t) {
      const n = {};
      for (const r of t) this.fields[r] && (n[r] = this.fields[r]);
      return this.setFields(
        n,
        this._excludedEdges.filter(([r, i]) => t.includes(r) && t.includes(i))
      );
    }
    omit(t) {
      const n = [];
      for (const r of Object.keys(this.fields)) t.includes(r) || n.push(r);
      return this.pick(n);
    }
    from(t, n, r) {
      let i = qn.getter(t, !0);
      return this.transform((s) => {
        if (!s) return s;
        let o = s;
        return (
          yb(s, t) &&
            ((o = Object.assign({}, s)), r || delete o[t], (o[n] = i(s))),
          o
        );
      });
    }
    json() {
      return this.transform(gb);
    }
    noUnknown(t = !0, n = Uu.noUnknown) {
      typeof t != "boolean" && ((n = t), (t = !0));
      let r = this.test({
        name: "noUnknown",
        exclusive: !0,
        message: n,
        test(i) {
          if (i == null) return !0;
          const s = vb(this.schema, i);
          return (
            !t ||
            s.length === 0 ||
            this.createError({ params: { unknown: s.join(", ") } })
          );
        },
      });
      return (r.spec.noUnknown = t), r;
    }
    unknown(t = !0, n = Uu.noUnknown) {
      return this.noUnknown(!t, n);
    }
    transformKeys(t) {
      return this.transform((n) => {
        if (!n) return n;
        const r = {};
        for (const i of Object.keys(n)) r[t(i)] = n[i];
        return r;
      });
    }
    camelCase() {
      return this.transformKeys(Cl.camelCase);
    }
    snakeCase() {
      return this.transformKeys(Cl.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => Cl.snakeCase(t).toUpperCase());
    }
    describe(t) {
      const n = (t ? this.resolve(t) : this).clone(),
        r = super.describe(t);
      r.fields = {};
      for (const [s, o] of Object.entries(n.fields)) {
        var i;
        let a = t;
        (i = a) != null &&
          i.value &&
          (a = Object.assign({}, a, { parent: a.value, value: a.value[s] })),
          (r.fields[s] = o.describe(a));
      }
      return r;
    }
  }
  Fa.prototype = lv.prototype;
  function wb({ formData: e, handleSubmit: t, handleSelectedStep: n }) {
    const r = Fa({
      organization: pe().required().label("Organization"),
      clubName: pe().required().label("Club Name"),
      playingCategory: pe().required().label("Playing category"),
      captainName: pe().required().label("Captain name"),
      captainPhone: sv().required().label("Captain Phone"),
      captainNic: pe().required().label("Captain NIC"),
      captainEmail: pe().required().email().label("Captain Email"),
    });
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs("section", {
          className: "flex flex-row lg:mb-8 lg:hidden",
          children: [
            c.jsx("div", {
              className:
                "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
              children: c.jsx("div", {
                className: "w-6 h-6 bg-white rounded-full",
              }),
            }),
            c.jsxs("div", {
              className: "",
              children: [
                c.jsx("h4", {
                  className: "text-[13px] font-normal leading-relaxed",
                  children: "Organization and captain details",
                }),
                c.jsx("p", {
                  className: "text-[#AFAFAF] text-[11px] ",
                  children: "Step 1/4",
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "hidden grid-cols-4 lg:grid gap-5",
          children: [
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8 ",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Organization and captain details",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 1/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8 ",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#5E636A] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Player Details",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 2/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#5E636A] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Substitute Players",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 3/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#5E636A] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Preview and Payment",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 4/4",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsx(Nf, {
          initialValues: e,
          onSubmit: (i) => {
            t(i), setTimeout(() => n(1), 300);
          },
          validationSchema: r,
          children: () =>
            c.jsxs(Pa, {
              className: "mt-5",
              children: [
                c.jsxs("div", {
                  className: "md:min-h-[70vh] lg:min-h-[400px]",
                  children: [
                    c.jsxs("section", {
                      className:
                        "mb-5 lg:grid lg:grid-cols-3  lg:gap-3 md:grid-cols-1 md:gap-0",
                      children: [
                        c.jsxs("div", {
                          className: "mb-2",
                          children: [
                            c.jsxs(de, {
                              as: "select",
                              id: "organization",
                              name: "organization",
                              className:
                                " border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                              children: [
                                c.jsx("option", {
                                  selected: !0,
                                  value: "",
                                  children: "Select Organization",
                                }),
                                c.jsx("option", {
                                  value: "Rotaract-Club",
                                  children: "Rotaract Club",
                                }),
                                c.jsx("option", {
                                  value: "Univeristy",
                                  children: "Univeristy",
                                }),
                              ],
                            }),
                            c.jsx(he, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "organization",
                              component: "span",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mb-2",
                          children: [
                            c.jsx(de, {
                              type: "text",
                              id: "clubName",
                              name: "clubName",
                              placeholder: "Club Name / University Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            c.jsx(he, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "clubName",
                              component: "span",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mb-2",
                          children: [
                            c.jsxs(de, {
                              as: "select",
                              id: "playingCategory",
                              name: "playingCategory",
                              className:
                                " border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                              children: [
                                c.jsx("option", {
                                  selected: !0,
                                  value: "",
                                  children: "Select Playing Category",
                                }),
                                c.jsx("option", {
                                  value: "Univeristy-Men",
                                  children: "University Men",
                                }),
                                c.jsx("option", {
                                  value: "Univeristy-Women",
                                  children: "University Women",
                                }),
                                c.jsx("option", {
                                  value: "Rotaract-Men",
                                  children: "Rotaract Men",
                                }),
                                c.jsx("option", {
                                  value: "Rotaract-Women",
                                  children: "Rotaract Women",
                                }),
                              ],
                            }),
                            c.jsx(he, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playingCategory",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("section", {
                      className: "mb-3",
                      children: c.jsx("h4", {
                        className: "text-[13px] font-normal leading-relaxed",
                        children: "Captain Details",
                      }),
                    }),
                    c.jsxs("section", {
                      className: "mb-3 lg:grid lg:grid-cols-3 lg:gap-3",
                      children: [
                        c.jsxs("div", {
                          className: "mb-2",
                          children: [
                            c.jsx(de, {
                              type: "text",
                              id: "captainName",
                              name: "captainName",
                              placeholder: "Full Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            c.jsx(he, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "captainName",
                              component: "span",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mb-2",
                          children: [
                            c.jsx(de, {
                              type: "text",
                              id: "captainPhone",
                              name: "captainPhone",
                              placeholder: "Phone Number",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            c.jsx(he, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "captainPhone",
                              component: "span",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mb-2",
                          children: [
                            c.jsx(de, {
                              type: "text",
                              id: "captainNic",
                              name: "captainNic",
                              placeholder: "NIC Number",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            c.jsx(he, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "captainNic",
                              component: "span",
                            }),
                          ],
                        }),
                        c.jsxs("div", {
                          className: "mb-2",
                          children: [
                            c.jsx(de, {
                              type: "text",
                              id: "captainEmail",
                              name: "captainEmail",
                              placeholder: "Email Address",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            c.jsx(he, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "captainEmail",
                              component: "span",
                            }),
                            c.jsx("p", {
                              className: "text-[12px] text-[#B5B5B5] mt-2",
                              children:
                                "Please use an active email. This mail used to send you the booking confirmations",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("button", {
                  type: "submit",
                  className:
                    " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg lg:mt-5",
                  children: ["Next  ", c.jsx(ia, { color: "white" })],
                }),
              ],
            }),
        }),
      ],
    });
  }
  function Sb({ formData: e, handleSubmit: t, handleSelectedStep: n }) {
    const r = Fa({
      playerFiveName: pe().required().label("Player 5 Name"),
      playerFiveNic: pe().required().label("Player 5 NIC"),
      playerTwoName: pe().required().label("Player 2 Name"),
      playerTwoNic: pe().required().label("Player 2 NIC"),
      playerThreeName: pe().required().label("Player 3 Name"),
      playerThreeNic: pe().required().label("Player 3 NIC"),
      playerFourName: pe().required().label("Player 4 Name"),
      playerFourNic: pe().required().label("Player 4 NIC"),
    });
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs("section", {
          className: "flex flex-row lg:mb-8 lg:hidden",
          children: [
            c.jsx("div", {
              className:
                "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
              children: c.jsx("div", {
                className: "w-6 h-6 bg-white rounded-full",
              }),
            }),
            c.jsxs("div", {
              className: "",
              children: [
                c.jsx("h4", {
                  className: "text-[13px] font-normal leading-relaxed",
                  children: "Player Details",
                }),
                c.jsx("p", {
                  className: "text-[#AFAFAF] text-[11px] ",
                  children: "Step 2/4",
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "hidden grid-cols-4 lg:grid gap-5",
          children: [
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8 ",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Organization and captain details",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 1/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8 ",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Player Details",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 2/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#5E636A] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Substitute Players",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 3/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#5E636A] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Preview and Payment",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 4/4",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsx(Nf, {
          initialValues: e,
          onSubmit: (i) => {
            t(i), setTimeout(() => n(2), 300);
          },
          validationSchema: r,
          children: () =>
            c.jsxs(Pa, {
              className: "mt-5",
              children: [
                c.jsx("div", {
                  className: "md:min-h-[70vh] lg:min-h-[400px]",
                  children: c.jsxs("div", {
                    className: "lg:grid lg:grid-cols-2 lg:gap-3",
                    children: [
                      c.jsxs("section", {
                        className: "mb-3 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 2 Details",
                          }),
                          c.jsxs("div", {
                            className: "xl:grid xl:grid-cols-2 xl:gap-3",
                            children: [
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "playerTwoName",
                                    name: "playerTwoName",
                                    placeholder: "Player Name",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "playerTwoName",
                                    component: "span",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "playerTwoNic",
                                    name: "playerTwoNic",
                                    placeholder: "Player NIC",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "playerTwoNic",
                                    component: "span",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-3",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 3 Details",
                          }),
                          c.jsxs("div", {
                            className: "xl:grid xl:grid-cols-2 xl:gap-3",
                            children: [
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "playerThreeName",
                                    name: "playerThreeName",
                                    placeholder: "Player Name",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "playerThreeName",
                                    component: "span",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "playerThreeNic",
                                    name: "playerThreeNic",
                                    placeholder: "Player NIC",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "playerThreeNic",
                                    component: "span",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-3",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 4 Details",
                          }),
                          c.jsxs("div", {
                            className: "xl:grid xl:grid-cols-2 xl:gap-3",
                            children: [
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "playerFourName",
                                    name: "playerFourName",
                                    placeholder: "Player Name",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "playerFourName",
                                    component: "span",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "playerFourNic",
                                    name: "playerFourNic",
                                    placeholder: "Player NIC",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "playerFourNic",
                                    component: "span",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-3",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 5 Details",
                          }),
                          c.jsxs("div", {
                            className: "xl:grid xl:grid-cols-2 xl:gap-3",
                            children: [
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "playerFiveName",
                                    name: "playerFiveName",
                                    placeholder: "Player Name",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "playerFiveName",
                                    component: "span",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "playerFiveNic",
                                    name: "playerFiveNic",
                                    placeholder: "Player NIC",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "playerFiveNic",
                                    component: "span",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsxs("div", {
                  className: "flex flex-row items-center justify-end lg:mt-5",
                  children: [
                    c.jsxs("button", {
                      type: "button",
                      className:
                        " bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3",
                      onClick: () => n(0),
                      children: [c.jsx(ra, { color: "white" }), "  Back"],
                    }),
                    c.jsxs("button", {
                      type: "submit",
                      className:
                        " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg",
                      children: ["Next  ", c.jsx(ia, { color: "white" })],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  }
  function Tb({ formData: e, handleSubmit: t, handleSelectedStep: n }) {
    const r = Fa({
      substituteOneName: pe().required().label("Substitute 1 Name"),
      substituteOneNic: pe().required().label("Substitute 1 NIC"),
      substituteTwoName: pe().required().label("Substitute 2 Name"),
      substituteTwoNic: pe().required().label("Substitute 2 NIC"),
      substituteThreeName: pe().required().label("Substitute 3 Name"),
      substituteThreeNic: pe().required().label("Substitute 3 NIC"),
    });
    return c.jsxs(c.Fragment, {
      children: [
        c.jsxs("section", {
          className: "flex flex-row lg:mb-8 lg:hidden",
          children: [
            c.jsx("div", {
              className:
                "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
              children: c.jsx("div", {
                className: "w-6 h-6 bg-white rounded-full",
              }),
            }),
            c.jsxs("div", {
              className: "",
              children: [
                c.jsx("h4", {
                  className: "text-[13px] font-normal leading-relaxed",
                  children: "Substitute Players",
                }),
                c.jsx("p", {
                  className: "text-[#AFAFAF] text-[11px] ",
                  children: "Step 3/4",
                }),
              ],
            }),
          ],
        }),
        c.jsxs("div", {
          className: "hidden grid-cols-4 lg:grid gap-5",
          children: [
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8 ",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Organization and captain details",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 1/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8 ",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Player Details",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 2/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Substitute Players",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 3/4",
                    }),
                  ],
                }),
              ],
            }),
            c.jsxs("section", {
              className: "flex flex-row lg:mb-8",
              children: [
                c.jsx("div", {
                  className:
                    "w-10 h-10 bg-[#5E636A] rounded-full flex justify-center items-center mr-4",
                  children: c.jsx("div", {
                    className: "w-6 h-6 bg-white rounded-full",
                  }),
                }),
                c.jsxs("div", {
                  className: "",
                  children: [
                    c.jsx("h4", {
                      className: "text-[13px] font-normal leading-relaxed",
                      children: "Preview and Payment",
                    }),
                    c.jsx("p", {
                      className: "text-[#AFAFAF] text-[11px] ",
                      children: "Step 4/4",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsx(Nf, {
          initialValues: e,
          onSubmit: (i) => {
            t(i), setTimeout(() => n(3), 300);
          },
          validationSchema: r,
          children: () =>
            c.jsxs(Pa, {
              className: "mt-5",
              children: [
                c.jsx("div", {
                  className: "md:min-h-[70vh] lg:min-h-[400px]",
                  children: c.jsxs("div", {
                    className: "lg:grid lg:grid-cols-2 lg:gap-3",
                    children: [
                      c.jsxs("section", {
                        className: "mb-3",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 1",
                          }),
                          c.jsxs("div", {
                            className: "xl:grid xl:grid-cols-2 xl:gap-3",
                            children: [
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "substituteOneName",
                                    name: "substituteOneName",
                                    placeholder: "Player Name",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "substituteOneName",
                                    component: "span",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "substituteOneNic",
                                    name: "substituteOneNic",
                                    placeholder: "Player NIC",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "substituteOneNic",
                                    component: "span",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-3",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 2",
                          }),
                          c.jsxs("div", {
                            className: "xl:grid xl:grid-cols-2 xl:gap-3",
                            children: [
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "substituteTwoName",
                                    name: "substituteTwoName",
                                    placeholder: "Player Name",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "substituteTwoName",
                                    component: "span",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "substituteTwoNic",
                                    name: "substituteTwoNic",
                                    placeholder: "Player NIC",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "substituteTwoNic",
                                    component: "span",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-3",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 3",
                          }),
                          c.jsxs("div", {
                            className: "xl:grid xl:grid-cols-2 xl:gap-3",
                            children: [
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "substituteThreeName",
                                    name: "substituteThreeName",
                                    placeholder: "Player Name",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "substituteThreeName",
                                    component: "span",
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "mb-2",
                                children: [
                                  c.jsx(de, {
                                    type: "text",
                                    id: "substituteThreeNic",
                                    name: "substituteThreeNic",
                                    placeholder: "Player NIC",
                                    className:
                                      "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                                  }),
                                  c.jsx(he, {
                                    className:
                                      "text-[10px] text-red-400 capitalize",
                                    name: "substituteThreeNic",
                                    component: "span",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsxs("div", {
                  className: "flex flex-row items-center justify-end lg:mt-5",
                  children: [
                    c.jsxs("button", {
                      type: "button",
                      className:
                        " bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3",
                      onClick: () => n(1),
                      children: [c.jsx(ra, { color: "white" }), "  Back"],
                    }),
                    c.jsxs("button", {
                      type: "submit",
                      className:
                        " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg",
                      children: ["Next  ", c.jsx(ia, { color: "white" })],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  }
  function Nb(e) {
    return us({
      tag: "svg",
      attr: { viewBox: "0 0 24 24" },
      child: [
        { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
        {
          tag: "path",
          attr: {
            d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z",
          },
        },
      ],
    })(e);
  }
  function jb({ formData: e, handleSelectedStep: t }) {
    return (
      console.log(e),
      c.jsxs(c.Fragment, {
        children: [
          c.jsxs("section", {
            className: "flex flex-row lg:mb-8 lg:hidden",
            children: [
              c.jsx("div", {
                className:
                  "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                children: c.jsx("div", {
                  className: "w-6 h-6 bg-white rounded-full",
                }),
              }),
              c.jsxs("div", {
                className: "",
                children: [
                  c.jsx("h4", {
                    className: "text-[13px] font-normal leading-relaxed",
                    children: "Preview and Payment",
                  }),
                  c.jsx("p", {
                    className: "text-[#AFAFAF] text-[11px] ",
                    children: "Step 4/4",
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "hidden grid-cols-4 lg:grid gap-5",
            children: [
              c.jsxs("section", {
                className: "flex flex-row lg:mb-8 ",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                    children: c.jsx("div", {
                      className: "w-6 h-6 bg-white rounded-full",
                    }),
                  }),
                  c.jsxs("div", {
                    className: "",
                    children: [
                      c.jsx("h4", {
                        className: "text-[13px] font-normal leading-relaxed",
                        children: "Organization and captain details",
                      }),
                      c.jsx("p", {
                        className: "text-[#AFAFAF] text-[11px] ",
                        children: "Step 1/4",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("section", {
                className: "flex flex-row lg:mb-8 ",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                    children: c.jsx("div", {
                      className: "w-6 h-6 bg-white rounded-full",
                    }),
                  }),
                  c.jsxs("div", {
                    className: "",
                    children: [
                      c.jsx("h4", {
                        className: "text-[13px] font-normal leading-relaxed",
                        children: "Player Details",
                      }),
                      c.jsx("p", {
                        className: "text-[#AFAFAF] text-[11px] ",
                        children: "Step 2/4",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("section", {
                className: "flex flex-row lg:mb-8",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                    children: c.jsx("div", {
                      className: "w-6 h-6 bg-white rounded-full",
                    }),
                  }),
                  c.jsxs("div", {
                    className: "",
                    children: [
                      c.jsx("h4", {
                        className: "text-[13px] font-normal leading-relaxed",
                        children: "Substitute Players",
                      }),
                      c.jsx("p", {
                        className: "text-[#AFAFAF] text-[11px] ",
                        children: "Step 3/4",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("section", {
                className: "flex flex-row lg:mb-8",
                children: [
                  c.jsx("div", {
                    className:
                      "w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4",
                    children: c.jsx("div", {
                      className: "w-6 h-6 bg-white rounded-full",
                    }),
                  }),
                  c.jsxs("div", {
                    className: "",
                    children: [
                      c.jsx("h4", {
                        className: "text-[13px] font-normal leading-relaxed",
                        children: "Preview and Payment",
                      }),
                      c.jsx("p", {
                        className: "text-[#AFAFAF] text-[11px] ",
                        children: "Step 4/4",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "mt-5",
            children: [
              c.jsxs("div", {
                className:
                  "md:min-h-[70vh] lg:min-h-[400px] flex flex-row justify-between md:flex-col md:justify-start md:gap-3",
                children: [
                  c.jsxs("div", {
                    className:
                      "flex flex-col w-[49%] md:grid md:grid-cols-5 md:w-[100%] lg:grid lg:grid-cols-5 lg:w-[100%]",
                    children: [
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Organization Details",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.organization.replace("-", " "),
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.clubName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playingCategory.replace("-", " "),
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 2 Details",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.playerTwoName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playerTwoNic,
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 3 Details",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.playerThreeName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playerThreeNic,
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 4 Details",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.playerFourName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playerFourNic,
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 5 Details",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.playerFiveName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playerFiveNic,
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "flex flex-col w-[49%]  md:grid md:grid-cols-5 md:w-[100%]",
                    children: [
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Captain Details",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.captainName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.captainPhone,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.captainNic,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] underline text-[#999999] ",
                            children: e.captainEmail,
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 1",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.substituteOneName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.substituteOneNic,
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 2",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.substituteTwoName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.substituteTwoNic,
                          }),
                        ],
                      }),
                      c.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          c.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 3",
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.substituteThreeName,
                          }),
                          c.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.substituteThreeNic,
                          }),
                        ],
                      }),
                      c.jsx("section", { className: "mb-4" }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex flex-row items-center justify-end lg:mt-5",
                children: [
                  c.jsxs("button", {
                    type: "button",
                    className:
                      " bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3",
                    onClick: () => t(2),
                    children: [c.jsx(ra, { color: "white" }), "  Back"],
                  }),
                  c.jsxs("button", {
                    type: "submit",
                    className:
                      " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg",
                    onClick: () => console.log("Payment Initializing ... "),
                    children: ["Register  ", c.jsx(Nb, { color: "white" })],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  }
  function Eb({ formData: e, handleSubmit: t }) {
    const [n, r] = S.useState(0),
      i = (s) => {
        r(s);
      };
    return c.jsxs(af, {
      children: [
        n === 0 &&
          c.jsx(
            ft.div,
            {
              variants: Is,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: c.jsx(wb, {
                formData: e,
                handleSubmit: t,
                handleSelectedStep: i,
              }),
            },
            "form_one"
          ),
        n === 1 &&
          c.jsx(
            ft.div,
            {
              variants: Is,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: c.jsx(Sb, {
                formData: e,
                handleSubmit: t,
                handleSelectedStep: i,
              }),
            },
            "form_two"
          ),
        n === 2 &&
          c.jsx(
            ft.div,
            {
              variants: Is,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: c.jsx(Tb, {
                formData: e,
                handleSubmit: t,
                handleSelectedStep: i,
              }),
            },
            "form_three"
          ),
        n === 3 &&
          c.jsx(
            ft.div,
            {
              variants: Is,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: c.jsx(jb, { formData: e, handleSelectedStep: i }),
            },
            "form_four"
          ),
      ],
    });
  }
  function Cb({ bottomState: e, bottomToggler: t }) {
    const n = (s) => {
        i({ ...r, ...s });
      },
      [r, i] = S.useState(K1);
    return c.jsx(af, {
      children:
        e &&
        c.jsx(ft.div, {
          variants: wN,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          onClick: () => {},
          className:
            "bg-black bg-opacity-40 h-screen w-screen absolute bottom-0 left-0 origin-bottom flex flex-col justify-end",
          children: c.jsx("div", {
            className:
              "bg-[#353945] z-50 w-screen lg:h-[700px] h-[97vh] overflow-y-scroll  px-5 py-8 rounded-t-xl transition-all duration-300 ease-in",
            children: c.jsxs("div", {
              className: "text-white",
              children: [
                c.jsxs("div", {
                  className: "flex flex-row justify-between items-center mb-2 ",
                  children: [
                    c.jsx("h2", {
                      className:
                        "text-[18px] font-medium  md:text-[20px] md:leading-relaxed lg:text-[22px] xl:text-[28px] lg:mb-3",
                      children: "Get Your Self Registered",
                    }),
                    c.jsx(Yg, {
                      className: "cursor-pointer",
                      color: "white",
                      size: 20,
                      onClick: () => {
                        t();
                      },
                    }),
                  ],
                }),
                c.jsx(Eb, { formData: r, handleSubmit: n }),
              ],
            }),
          }),
        }),
    });
  }
  function Pb() {
    return c.jsx("div", {
      className: "bg-[#353945] px-10 py-5",
      children: c.jsxs("div", {
        className: "flex flex-row justify-between items-center",
        children: [
          c.jsx("img", {
            src: Vc,
            alt: "brand image footer ",
            className: "w-[120px] md:w-[150px] xl:w-[180px]",
          }),
          c.jsx("p", {
            className: "text-[10px] text-[#999999] font-light md:text-[13px] ",
            children: "Copyright 2023. All Rights Reserved.",
          }),
        ],
      }),
    });
  }
  function kb() {
    const [e, t] = S.useState(!1),
      [n, r] = S.useState(!1),
      i = () => {
        t((o) => !o);
      },
      s = () => {
        r((o) => !o);
      };
    return c.jsxs("div", {
      className: "relative w-screen  overflow-x-hidden",
      style: {
        overflowY: e ? "hidden" : "scroll",
        height: e ? "100vh" : "auto",
      },
      children: [
        c.jsx("div", {
          className: "container mx-auto ",
          children: c.jsxs("div", {
            className: "flex flex-row px-10 items-center justify-between",
            children: [
              c.jsx("img", {
                src: Vc,
                alt: "brand logo",
                className: "p-0 w-1/2 sm:max-w-[200px] sm:min-w-[150px]",
              }),
              c.jsx("div", {
                onClick: i,
                onKeyDown: i,
                className: "cursor-pointer md:hidden",
                children: c.jsx(G1, { color: "white", size: 22 }),
              }),
              c.jsx("div", {
                className:
                  "text-white border-2 border-white px-3 py-2 hover:bg-white  hover:text-[#191c23] duration-500 hover:scale-105 cursor-pointer md:block sm:hidden ",
                onClick: () => {
                  var o;
                  return (o = document.getElementById("registration")) == null
                    ? void 0
                    : o.scrollIntoView({ behavior: "smooth" });
                },
                onKeyDown: () => {
                  var o;
                  return (o = document.getElementById("registration")) == null
                    ? void 0
                    : o.scrollIntoView({ behavior: "smooth" });
                },
                children: Qg,
              }),
            ],
          }),
        }),
        c.jsx(mN, { menuState: e, menuToggler: i }),
        c.jsx(Q1, {}),
        c.jsx(Z1, {}),
        c.jsx(gN, {}),
        c.jsx(xN, { bottomToggler: s }),
        c.jsx(Pb, {}),
        c.jsx(Cb, { bottomState: n, bottomToggler: s }),
      ],
    });
  }
  Pl.createRoot(document.getElementById("root")).render(
    c.jsx(Ot.StrictMode, { children: c.jsx(kb, {}) })
  );
});
export default bb();
