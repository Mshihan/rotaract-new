var yv = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var bb = yv((qe, Je) => {
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
  var Fh = { exports: {} },
    zo = {},
    Oh = { exports: {} },
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
    gv = Symbol.for("react.portal"),
    vv = Symbol.for("react.fragment"),
    xv = Symbol.for("react.strict_mode"),
    wv = Symbol.for("react.profiler"),
    Sv = Symbol.for("react.provider"),
    Tv = Symbol.for("react.context"),
    Ev = Symbol.for("react.forward_ref"),
    Cv = Symbol.for("react.suspense"),
    Pv = Symbol.for("react.memo"),
    kv = Symbol.for("react.lazy"),
    _f = Symbol.iterator;
  function Nv(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (_f && e[_f]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Dh = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Mh = Object.assign,
    Rh = {};
  function Jr(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Rh),
      (this.updater = n || Dh);
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
  function Lh() {}
  Lh.prototype = Jr.prototype;
  function Hu(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = Rh),
      (this.updater = n || Dh);
  }
  var Wu = (Hu.prototype = new Lh());
  Wu.constructor = Hu;
  Mh(Wu, Jr.prototype);
  Wu.isPureReactComponent = !0;
  var Af = Array.isArray,
    Vh = Object.prototype.hasOwnProperty,
    Gu = { current: null },
    $h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ih(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (o = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
        Vh.call(t, r) && !$h.hasOwnProperty(r) && (i[r] = t[r]);
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
  function jv(e, t) {
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
  function bv(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var Ff = /\/+/g;
  function Ma(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? bv("" + e.key)
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
            case gv:
              o = !0;
          }
      }
    if (o)
      return (
        (o = e),
        (i = i(o)),
        (e = r === "" ? "." + Ma(o, 0) : r),
        Af(i)
          ? ((n = ""),
            e != null && (n = e.replace(Ff, "$&/") + "/"),
            Us(i, t, n, "", function (u) {
              return u;
            }))
          : i != null &&
            (Ku(i) &&
              (i = jv(
                i,
                n +
                  (!i.key || (o && o.key === i.key)
                    ? ""
                    : ("" + i.key).replace(Ff, "$&/") + "/") +
                  e
              )),
            t.push(i)),
        1
      );
    if (((o = 0), (r = r === "" ? "." : r + ":"), Af(e)))
      for (var a = 0; a < e.length; a++) {
        s = e[a];
        var l = r + Ma(s, a);
        o += Us(s, t, n, l, i);
      }
    else if (((l = Nv(e)), typeof l == "function"))
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
    Av = {
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
  B.Fragment = vv;
  B.Profiler = wv;
  B.PureComponent = Hu;
  B.StrictMode = xv;
  B.Suspense = Cv;
  B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Av;
  B.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = Mh({}, e.props),
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
        Vh.call(t, l) &&
          !$h.hasOwnProperty(l) &&
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
        $$typeof: Tv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: Sv, _context: e }),
      (e.Consumer = e)
    );
  };
  B.createElement = Ih;
  B.createFactory = function (e) {
    var t = Ih.bind(null, e);
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
  Oh.exports = B;
  var S = Oh.exports;
  const Ot = Io(S);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Fv = S,
    Ov = Symbol.for("react.element"),
    Dv = Symbol.for("react.fragment"),
    Mv = Object.prototype.hasOwnProperty,
    Rv =
      Fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Lv = { key: !0, ref: !0, __self: !0, __source: !0 };
  function zh(e, t, n) {
    var r,
      i = {},
      s = null,
      o = null;
    n !== void 0 && (s = "" + n),
      t.key !== void 0 && (s = "" + t.key),
      t.ref !== void 0 && (o = t.ref);
    for (r in t) Mv.call(t, r) && !Lv.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
    return {
      $$typeof: Ov,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: Rv.current,
    };
  }
  zo.Fragment = Dv;
  zo.jsx = zh;
  zo.jsxs = zh;
  Fh.exports = zo;
  var h = Fh.exports,
    Nl = {},
    Bh = { exports: {} },
    rt = {},
    Uh = { exports: {} },
    Hh = {};
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
        e: for (var R = 0, W = b.length, Nt = W >>> 1; R < Nt; ) {
          var ze = 2 * (R + 1) - 1,
            Qe = b[ze],
            _e = ze + 1,
            yt = b[_e];
          if (0 > i(Qe, I))
            _e < W && 0 > i(yt, Qe)
              ? ((b[R] = yt), (b[_e] = I), (R = _e))
              : ((b[R] = Qe), (b[ze] = I), (R = ze));
          else if (_e < W && 0 > i(yt, I)) (b[R] = yt), (b[_e] = I), (R = _e);
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
      c = 1,
      f = null,
      d = 3,
      m = !1,
      v = !1,
      x = !1,
      k = typeof setTimeout == "function" ? setTimeout : null,
      g = typeof clearTimeout == "function" ? clearTimeout : null,
      p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(b) {
      for (var V = n(u); V !== null; ) {
        if (V.callback === null) r(u);
        else if (V.startTime <= b)
          r(u), (V.sortIndex = V.expirationTime), t(l, V);
        else break;
        V = n(u);
      }
    }
    function w(b) {
      if (((x = !1), y(b), !v))
        if (n(l) !== null) (v = !0), Ie(C);
        else {
          var V = n(u);
          V !== null && ot(w, V.startTime - b);
        }
    }
    function C(b, V) {
      (v = !1), x && ((x = !1), g(N), (N = -1)), (m = !0);
      var I = d;
      try {
        for (
          y(V), f = n(l);
          f !== null && (!(f.expirationTime > V) || (b && !$()));

        ) {
          var R = f.callback;
          if (typeof R == "function") {
            (f.callback = null), (d = f.priorityLevel);
            var W = R(f.expirationTime <= V);
            (V = e.unstable_now()),
              typeof W == "function" ? (f.callback = W) : f === n(l) && r(l),
              y(V);
          } else r(l);
          f = n(l);
        }
        if (f !== null) var Nt = !0;
        else {
          var ze = n(u);
          ze !== null && ot(w, ze.startTime - V), (Nt = !1);
        }
        return Nt;
      } finally {
        (f = null), (d = I), (m = !1);
      }
    }
    var P = !1,
      E = null,
      N = -1,
      O = 5,
      D = -1;
    function $() {
      return !(e.unstable_now() - D < O);
    }
    function ve() {
      if (E !== null) {
        var b = e.unstable_now();
        D = b;
        var V = !0;
        try {
          V = E(!0, b);
        } finally {
          V ? U() : ((P = !1), (E = null));
        }
      } else P = !1;
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
        k(ve, 0);
      };
    function Ie(b) {
      (E = b), P || ((P = !0), U());
    }
    function ot(b, V) {
      N = k(function () {
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
        v || m || ((v = !0), Ie(C));
      }),
      (e.unstable_forceFrameRate = function (b) {
        0 > b || 125 < b
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (O = 0 < b ? Math.floor(1e3 / b) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return d;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(l);
      }),
      (e.unstable_next = function (b) {
        switch (d) {
          case 1:
          case 2:
          case 3:
            var V = 3;
            break;
          default:
            V = d;
        }
        var I = d;
        d = V;
        try {
          return b();
        } finally {
          d = I;
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
        var I = d;
        d = b;
        try {
          return V();
        } finally {
          d = I;
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
            id: c++,
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
                (x ? (g(N), (N = -1)) : (x = !0), ot(w, I - R)))
            : ((b.sortIndex = W), t(l, b), v || m || ((v = !0), Ie(C))),
          b
        );
      }),
      (e.unstable_shouldYield = $),
      (e.unstable_wrapCallback = function (b) {
        var V = d;
        return function () {
          var I = d;
          d = V;
          try {
            return b.apply(this, arguments);
          } finally {
            d = I;
          }
        };
      });
  })(Hh);
  Uh.exports = Hh;
  var Vv = Uh.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Wh = S,
    tt = Vv;
  function j(e) {
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
  var Gh = new Set(),
    Mi = {};
  function or(e, t) {
    Ur(e, t), Ur(e + "Capture", t);
  }
  function Ur(e, t) {
    for (Mi[e] = t, e = 0; e < t.length; e++) Gh.add(t[e]);
  }
  var Xt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    jl = Object.prototype.hasOwnProperty,
    $v =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Of = {},
    Df = {};
  function Iv(e) {
    return jl.call(Df, e)
      ? !0
      : jl.call(Of, e)
      ? !1
      : $v.test(e)
      ? (Df[e] = !0)
      : ((Of[e] = !0), !1);
  }
  function zv(e, t, n, r) {
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
  function Bv(e, t, n, r) {
    if (t === null || typeof t > "u" || zv(e, t, n, r)) return !0;
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
      (Bv(t, n, i, r) && (n = null),
      r || i === null
        ? Iv(t) &&
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
  var tn = Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ws = Symbol.for("react.element"),
    wr = Symbol.for("react.portal"),
    Sr = Symbol.for("react.fragment"),
    Zu = Symbol.for("react.strict_mode"),
    bl = Symbol.for("react.profiler"),
    Kh = Symbol.for("react.provider"),
    Yh = Symbol.for("react.context"),
    qu = Symbol.for("react.forward_ref"),
    _l = Symbol.for("react.suspense"),
    Al = Symbol.for("react.suspense_list"),
    Ju = Symbol.for("react.memo"),
    an = Symbol.for("react.lazy"),
    Qh = Symbol.for("react.offscreen"),
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
  function Uv(e) {
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
  function Fl(e) {
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
      case _l:
        return "Suspense";
      case Al:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Yh:
          return (e.displayName || "Context") + ".Consumer";
        case Kh:
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
            (t = e.displayName || null), t !== null ? t : Fl(e.type) || "Memo"
          );
        case an:
          (t = e._payload), (e = e._init);
          try {
            return Fl(e(t));
          } catch {}
      }
    return null;
  }
  function Hv(e) {
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
        return Fl(t);
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
  function jn(e) {
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
  function Xh(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Wv(e) {
    var t = Xh(e) ? "checked" : "value",
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
    e._valueTracker || (e._valueTracker = Wv(e));
  }
  function Zh(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = Xh(e) ? (e.checked ? "true" : "false") : e.value),
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
    (n = jn(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function qh(e, t) {
    (t = t.checked), t != null && Xu(e, "checked", t, !1);
  }
  function Dl(e, t) {
    qh(e, t);
    var n = jn(t.value),
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
      : t.hasOwnProperty("defaultValue") && Ml(e, t.type, jn(t.defaultValue)),
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
  var yi = Array.isArray;
  function Lr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + jn(n), t = null, i = 0; i < e.length; i++) {
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
    if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
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
        if (t != null) throw Error(j(92));
        if (yi(n)) {
          if (1 < n.length) throw Error(j(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: jn(n) };
  }
  function Jh(e, t) {
    var n = jn(t.value),
      r = jn(t.defaultValue);
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
  function em(e) {
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
      ? em(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var Ts,
    tm = (function (e) {
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
    Gv = ["Webkit", "ms", "Moz", "O"];
  Object.keys(wi).forEach(function (e) {
    Gv.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wi[t] = wi[e]);
    });
  });
  function nm(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (wi.hasOwnProperty(e) && wi[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function rm(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = nm(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var Kv = ue(
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
      if (Kv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(j(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(j(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(j(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(j(62));
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
      if (typeof zl != "function") throw Error(j(280));
      var t = e.stateNode;
      t && ((t = Go(t)), zl(e.stateNode, e.type, t));
    }
  }
  function im(e) {
    Vr ? ($r ? $r.push(e) : ($r = [e])) : (Vr = e);
  }
  function sm() {
    if (Vr) {
      var e = Vr,
        t = $r;
      if ((($r = Vr = null), If(e), t)) for (e = 0; e < t.length; e++) If(t[e]);
    }
  }
  function om(e, t) {
    return e(t);
  }
  function am() {}
  var $a = !1;
  function lm(e, t, n) {
    if ($a) return e(t, n);
    $a = !0;
    try {
      return om(e, t, n);
    } finally {
      ($a = !1), (Vr !== null || $r !== null) && (am(), sm());
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
    if (n && typeof n != "function") throw Error(j(231, t, typeof n));
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
  function Yv(e, t, n, r, i, s, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (c) {
      this.onError(c);
    }
  }
  var Si = !1,
    so = null,
    oo = !1,
    Ul = null,
    Qv = {
      onError: function (e) {
        (Si = !0), (so = e);
      },
    };
  function Xv(e, t, n, r, i, s, o, a, l) {
    (Si = !1), (so = null), Yv.apply(Qv, arguments);
  }
  function Zv(e, t, n, r, i, s, o, a, l) {
    if ((Xv.apply(this, arguments), Si)) {
      if (Si) {
        var u = so;
        (Si = !1), (so = null);
      } else throw Error(j(198));
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
  function um(e) {
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
    if (ar(e) !== e) throw Error(j(188));
  }
  function qv(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = ar(e)), t === null)) throw Error(j(188));
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
        throw Error(j(188));
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
          if (!o) throw Error(j(189));
        }
      }
      if (n.alternate !== r) throw Error(j(190));
    }
    if (n.tag !== 3) throw Error(j(188));
    return n.stateNode.current === n ? e : t;
  }
  function cm(e) {
    return (e = qv(e)), e !== null ? fm(e) : null;
  }
  function fm(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = fm(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var dm = tt.unstable_scheduleCallback,
    Bf = tt.unstable_cancelCallback,
    Jv = tt.unstable_shouldYield,
    ex = tt.unstable_requestPaint,
    me = tt.unstable_now,
    tx = tt.unstable_getCurrentPriorityLevel,
    tc = tt.unstable_ImmediatePriority,
    pm = tt.unstable_UserBlockingPriority,
    ao = tt.unstable_NormalPriority,
    nx = tt.unstable_LowPriority,
    hm = tt.unstable_IdlePriority,
    Bo = null,
    Dt = null;
  function rx(e) {
    if (Dt && typeof Dt.onCommitFiberRoot == "function")
      try {
        Dt.onCommitFiberRoot(Bo, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Et = Math.clz32 ? Math.clz32 : ox,
    ix = Math.log,
    sx = Math.LN2;
  function ox(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ix(e) / sx) | 0)) | 0;
  }
  var Es = 64,
    Cs = 4194304;
  function gi(e) {
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
      a !== 0 ? (r = gi(a)) : ((s &= o), s !== 0 && (r = gi(s)));
    } else (o = n & ~i), o !== 0 ? (r = gi(o)) : s !== 0 && (r = gi(s));
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
        (n = 31 - Et(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function ax(e, t) {
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
  function lx(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var o = 31 - Et(s),
        a = 1 << o,
        l = i[o];
      l === -1
        ? (!(a & n) || a & r) && (i[o] = ax(a, t))
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
  function mm() {
    var e = Es;
    return (Es <<= 1), !(Es & 4194240) && (Es = 64), e;
  }
  function Ia(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ss(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Et(t)),
      (e[t] = n);
  }
  function ux(e, t) {
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
      var i = 31 - Et(n),
        s = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
    }
  }
  function nc(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Et(n),
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
  var gm,
    rc,
    vm,
    xm,
    wm,
    Wl = !1,
    Ps = [],
    yn = null,
    gn = null,
    vn = null,
    Vi = new Map(),
    $i = new Map(),
    fn = [],
    cx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function Uf(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        gn = null;
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
  function fx(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (yn = oi(yn, e, t, n, r, i)), !0;
      case "dragenter":
        return (gn = oi(gn, e, t, n, r, i)), !0;
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
  function Sm(e) {
    var t = Gn(e.target);
    if (t !== null) {
      var n = ar(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = um(n)), t !== null)) {
            (e.blockedOn = t),
              wm(e.priority, function () {
                vm(n);
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
  function dx() {
    (Wl = !1),
      yn !== null && Ws(yn) && (yn = null),
      gn !== null && Ws(gn) && (gn = null),
      vn !== null && Ws(vn) && (vn = null),
      Vi.forEach(Hf),
      $i.forEach(Hf);
  }
  function ai(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Wl ||
        ((Wl = !0),
        tt.unstable_scheduleCallback(tt.unstable_NormalPriority, dx)));
  }
  function Ii(e) {
    function t(i) {
      return ai(i, e);
    }
    if (0 < Ps.length) {
      ai(Ps[0], e);
      for (var n = 1; n < Ps.length; n++) {
        var r = Ps[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      yn !== null && ai(yn, e),
        gn !== null && ai(gn, e),
        vn !== null && ai(vn, e),
        Vi.forEach(t),
        $i.forEach(t),
        n = 0;
      n < fn.length;
      n++
    )
      (r = fn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < fn.length && ((n = fn[0]), n.blockedOn === null); )
      Sm(n), n.blockedOn === null && fn.shift();
  }
  var Ir = tn.ReactCurrentBatchConfig,
    uo = !0;
  function px(e, t, n, r) {
    var i = Q,
      s = Ir.transition;
    Ir.transition = null;
    try {
      (Q = 1), ic(e, t, n, r);
    } finally {
      (Q = i), (Ir.transition = s);
    }
  }
  function hx(e, t, n, r) {
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
      else if (fx(i, e, t, n, r)) r.stopPropagation();
      else if ((Uf(e, r), t & 4 && -1 < cx.indexOf(e))) {
        for (; i !== null; ) {
          var s = as(i);
          if (
            (s !== null && gm(s),
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
        if (((e = um(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (co = e), null;
  }
  function Tm(e) {
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
        switch (tx()) {
          case tc:
            return 1;
          case pm:
            return 4;
          case ao:
          case nx:
            return 16;
          case hm:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var pn = null,
    sc = null,
    Gs = null;
  function Em() {
    if (Gs) return Gs;
    var e,
      t = sc,
      n = t.length,
      r,
      i = "value" in pn ? pn.value : pn.textContent,
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
  function ks() {
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
          ? ks
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
            (this.isDefaultPrevented = ks));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = ks));
        },
        persist: function () {},
        isPersistent: ks,
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
    mx = it(os),
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
    yx = ue({}, Uo, { dataTransfer: 0 }),
    gx = it(yx),
    vx = ue({}, os, { relatedTarget: 0 }),
    Ua = it(vx),
    xx = ue({}, ei, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    wx = it(xx),
    Sx = ue({}, ei, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Tx = it(Sx),
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
  function Nx(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = kx[e])
      ? !!t[e]
      : !1;
  }
  function ac() {
    return Nx;
  }
  var jx = ue({}, os, {
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
    bx = it(jx),
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
    Ax = ue({}, os, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ac,
    }),
    Fx = it(Ax),
    Ox = ue({}, ei, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dx = it(Ox),
    Mx = ue({}, Uo, {
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
    Rx = it(Mx),
    Lx = [9, 13, 27, 32],
    lc = Xt && "CompositionEvent" in window,
    Ti = null;
  Xt && "documentMode" in document && (Ti = document.documentMode);
  var Vx = Xt && "TextEvent" in window && !Ti,
    Cm = Xt && (!lc || (Ti && 8 < Ti && 11 >= Ti)),
    Qf = String.fromCharCode(32),
    Xf = !1;
  function Pm(e, t) {
    switch (e) {
      case "keyup":
        return Lx.indexOf(t.keyCode) !== -1;
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
  function km(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var Tr = !1;
  function $x(e, t) {
    switch (e) {
      case "compositionend":
        return km(t);
      case "keypress":
        return t.which !== 32 ? null : ((Xf = !0), Qf);
      case "textInput":
        return (e = t.data), e === Qf && Xf ? null : e;
      default:
        return null;
    }
  }
  function Ix(e, t) {
    if (Tr)
      return e === "compositionend" || (!lc && Pm(e, t))
        ? ((e = Em()), (Gs = sc = pn = null), (Tr = !1), e)
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
        return Cm && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var zx = {
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
    return t === "input" ? !!zx[e.type] : t === "textarea";
  }
  function Nm(e, t, n, r) {
    im(r),
      (t = fo(t, "onChange")),
      0 < t.length &&
        ((n = new oc("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var Ei = null,
    zi = null;
  function Bx(e) {
    Vm(e, 0);
  }
  function Ho(e) {
    var t = Pr(e);
    if (Zh(t)) return e;
  }
  function Ux(e, t) {
    if (e === "change") return t;
  }
  var jm = !1;
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
    jm = Ha && (!document.documentMode || 9 < document.documentMode);
  }
  function Jf() {
    Ei && (Ei.detachEvent("onpropertychange", bm), (zi = Ei = null));
  }
  function bm(e) {
    if (e.propertyName === "value" && Ho(zi)) {
      var t = [];
      Nm(t, zi, e, ec(e)), lm(Bx, t);
    }
  }
  function Hx(e, t, n) {
    e === "focusin"
      ? (Jf(), (Ei = t), (zi = n), Ei.attachEvent("onpropertychange", bm))
      : e === "focusout" && Jf();
  }
  function Wx(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ho(zi);
  }
  function Gx(e, t) {
    if (e === "click") return Ho(t);
  }
  function Kx(e, t) {
    if (e === "input" || e === "change") return Ho(t);
  }
  function Yx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Pt = typeof Object.is == "function" ? Object.is : Yx;
  function Bi(e, t) {
    if (Pt(e, t)) return !0;
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
      if (!jl.call(t, i) || !Pt(e[i], t[i])) return !1;
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
  function _m(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? _m(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Am() {
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
  function Qx(e) {
    var t = Am(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      _m(n.ownerDocument.documentElement, n)
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
  var Xx = Xt && "documentMode" in document && 11 >= document.documentMode,
    Er = null,
    Kl = null,
    Ci = null,
    Yl = !1;
  function nd(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yl ||
      Er == null ||
      Er !== io(r) ||
      ((r = Er),
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
      (Ci && Bi(Ci, r)) ||
        ((Ci = r),
        (r = fo(Kl, "onSelect")),
        0 < r.length &&
          ((t = new oc("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = Er))));
  }
  function Ns(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var Cr = {
      animationend: Ns("Animation", "AnimationEnd"),
      animationiteration: Ns("Animation", "AnimationIteration"),
      animationstart: Ns("Animation", "AnimationStart"),
      transitionend: Ns("Transition", "TransitionEnd"),
    },
    Ga = {},
    Fm = {};
  Xt &&
    ((Fm = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Cr.animationend.animation,
      delete Cr.animationiteration.animation,
      delete Cr.animationstart.animation),
    "TransitionEvent" in window || delete Cr.transitionend.transition);
  function Wo(e) {
    if (Ga[e]) return Ga[e];
    if (!Cr[e]) return e;
    var t = Cr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Fm) return (Ga[e] = t[n]);
    return e;
  }
  var Om = Wo("animationend"),
    Dm = Wo("animationiteration"),
    Mm = Wo("animationstart"),
    Rm = Wo("transitionend"),
    Lm = new Map(),
    rd =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function On(e, t) {
    Lm.set(e, t), or(t, [e]);
  }
  for (var Ka = 0; Ka < rd.length; Ka++) {
    var Ya = rd[Ka],
      Zx = Ya.toLowerCase(),
      qx = Ya[0].toUpperCase() + Ya.slice(1);
    On(Zx, "on" + qx);
  }
  On(Om, "onAnimationEnd");
  On(Dm, "onAnimationIteration");
  On(Mm, "onAnimationStart");
  On("dblclick", "onDoubleClick");
  On("focusin", "onFocus");
  On("focusout", "onBlur");
  On(Rm, "onTransitionEnd");
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
    Jx = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(vi)
    );
  function id(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Zv(r, t, void 0, e), (e.currentTarget = null);
  }
  function Vm(e, t) {
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
    n.has(r) || ($m(t, e, 2, !1), n.add(r));
  }
  function Qa(e, t, n) {
    var r = 0;
    t && (r |= 4), $m(n, e, r, t);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function Ui(e) {
    if (!e[js]) {
      (e[js] = !0),
        Gh.forEach(function (n) {
          n !== "selectionchange" && (Jx.has(n) || Qa(n, !1, e), Qa(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[js] || ((t[js] = !0), Qa("selectionchange", !1, t));
    }
  }
  function $m(e, t, n, r) {
    switch (Tm(t)) {
      case 1:
        var i = px;
        break;
      case 4:
        i = hx;
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
    lm(function () {
      var u = s,
        c = ec(n),
        f = [];
      e: {
        var d = Lm.get(e);
        if (d !== void 0) {
          var m = oc,
            v = e;
          switch (e) {
            case "keypress":
              if (Ks(n) === 0) break e;
            case "keydown":
            case "keyup":
              m = bx;
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
              m = gx;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              m = Fx;
              break;
            case Om:
            case Dm:
            case Mm:
              m = wx;
              break;
            case Rm:
              m = Dx;
              break;
            case "scroll":
              m = mx;
              break;
            case "wheel":
              m = Rx;
              break;
            case "copy":
            case "cut":
            case "paste":
              m = Tx;
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
            k = !x && e === "scroll",
            g = x ? (d !== null ? d + "Capture" : null) : d;
          x = [];
          for (var p = u, y; p !== null; ) {
            y = p;
            var w = y.stateNode;
            if (
              (y.tag === 5 &&
                w !== null &&
                ((y = w),
                g !== null &&
                  ((w = Li(p, g)), w != null && x.push(Hi(p, w, y)))),
              k)
            )
              break;
            p = p.return;
          }
          0 < x.length &&
            ((d = new m(d, v, null, n, c)), f.push({ event: d, listeners: x }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((d = e === "mouseover" || e === "pointerover"),
            (m = e === "mouseout" || e === "pointerout"),
            d &&
              n !== Il &&
              (v = n.relatedTarget || n.fromElement) &&
              (Gn(v) || v[Zt]))
          )
            break e;
          if (
            (m || d) &&
            ((d =
              c.window === c
                ? c
                : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
            m
              ? ((v = n.relatedTarget || n.toElement),
                (m = u),
                (v = v ? Gn(v) : null),
                v !== null &&
                  ((k = ar(v)), v !== k || (v.tag !== 5 && v.tag !== 6)) &&
                  (v = null))
              : ((m = null), (v = u)),
            m !== v)
          ) {
            if (
              ((x = Gf),
              (w = "onMouseLeave"),
              (g = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((x = Yf),
                (w = "onPointerLeave"),
                (g = "onPointerEnter"),
                (p = "pointer")),
              (k = m == null ? d : Pr(m)),
              (y = v == null ? d : Pr(v)),
              (d = new x(w, p + "leave", m, n, c)),
              (d.target = k),
              (d.relatedTarget = y),
              (w = null),
              Gn(c) === u &&
                ((x = new x(g, p + "enter", v, n, c)),
                (x.target = y),
                (x.relatedTarget = k),
                (w = x)),
              (k = w),
              m && v)
            )
              t: {
                for (x = m, g = v, p = 0, y = x; y; y = gr(y)) p++;
                for (y = 0, w = g; w; w = gr(w)) y++;
                for (; 0 < p - y; ) (x = gr(x)), p--;
                for (; 0 < y - p; ) (g = gr(g)), y--;
                for (; p--; ) {
                  if (x === g || (g !== null && x === g.alternate)) break t;
                  (x = gr(x)), (g = gr(g));
                }
                x = null;
              }
            else x = null;
            m !== null && sd(f, d, m, x, !1),
              v !== null && k !== null && sd(f, k, v, x, !0);
          }
        }
        e: {
          if (
            ((d = u ? Pr(u) : window),
            (m = d.nodeName && d.nodeName.toLowerCase()),
            m === "select" || (m === "input" && d.type === "file"))
          )
            var C = Ux;
          else if (Zf(d))
            if (jm) C = Kx;
            else {
              C = Wx;
              var P = Hx;
            }
          else
            (m = d.nodeName) &&
              m.toLowerCase() === "input" &&
              (d.type === "checkbox" || d.type === "radio") &&
              (C = Gx);
          if (C && (C = C(e, u))) {
            Nm(f, C, n, c);
            break e;
          }
          P && P(e, d, u),
            e === "focusout" &&
              (P = d._wrapperState) &&
              P.controlled &&
              d.type === "number" &&
              Ml(d, "number", d.value);
        }
        switch (((P = u ? Pr(u) : window), e)) {
          case "focusin":
            (Zf(P) || P.contentEditable === "true") &&
              ((Er = P), (Kl = u), (Ci = null));
            break;
          case "focusout":
            Ci = Kl = Er = null;
            break;
          case "mousedown":
            Yl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Yl = !1), nd(f, n, c);
            break;
          case "selectionchange":
            if (Xx) break;
          case "keydown":
          case "keyup":
            nd(f, n, c);
        }
        var E;
        if (lc)
          e: {
            switch (e) {
              case "compositionstart":
                var N = "onCompositionStart";
                break e;
              case "compositionend":
                N = "onCompositionEnd";
                break e;
              case "compositionupdate":
                N = "onCompositionUpdate";
                break e;
            }
            N = void 0;
          }
        else
          Tr
            ? Pm(e, n) && (N = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (N = "onCompositionStart");
        N &&
          (Cm &&
            n.locale !== "ko" &&
            (Tr || N !== "onCompositionStart"
              ? N === "onCompositionEnd" && Tr && (E = Em())
              : ((pn = c),
                (sc = "value" in pn ? pn.value : pn.textContent),
                (Tr = !0))),
          (P = fo(u, N)),
          0 < P.length &&
            ((N = new Kf(N, e, null, n, c)),
            f.push({ event: N, listeners: P }),
            E ? (N.data = E) : ((E = km(n)), E !== null && (N.data = E)))),
          (E = Vx ? $x(e, n) : Ix(e, n)) &&
            ((u = fo(u, "onBeforeInput")),
            0 < u.length &&
              ((c = new Kf("onBeforeInput", "beforeinput", null, n, c)),
              f.push({ event: c, listeners: u }),
              (c.data = E)));
      }
      Vm(f, t);
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
  function gr(e) {
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
  var e1 = /\r\n?/g,
    t1 = /\u0000|\uFFFD/g;
  function od(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        e1,
        `
`
      )
      .replace(t1, "");
  }
  function bs(e, t, n) {
    if (((t = od(t)), od(e) !== t && n)) throw Error(j(425));
  }
  function po() {}
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
    n1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ad = typeof Promise == "function" ? Promise : void 0,
    r1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ad < "u"
        ? function (e) {
            return ad.resolve(null).then(e).catch(i1);
          }
        : ql;
  function i1(e) {
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
    Ft = "__reactFiber$" + ti,
    Wi = "__reactProps$" + ti,
    Zt = "__reactContainer$" + ti,
    Jl = "__reactEvents$" + ti,
    s1 = "__reactListeners$" + ti,
    o1 = "__reactHandles$" + ti;
  function Gn(e) {
    var t = e[Ft];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Zt] || n[Ft])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = ld(e); e !== null; ) {
            if ((n = e[Ft])) return n;
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
      (e = e[Ft] || e[Zt]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Pr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(j(33));
  }
  function Go(e) {
    return e[Wi] || null;
  }
  var eu = [],
    kr = -1;
  function Dn(e) {
    return { current: e };
  }
  function re(e) {
    0 > kr || ((e.current = eu[kr]), (eu[kr] = null), kr--);
  }
  function J(e, t) {
    kr++, (eu[kr] = e.current), (e.current = t);
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
  function ho() {
    re(We), re(De);
  }
  function ud(e, t, n) {
    if (De.current !== bn) throw Error(j(168));
    J(De, t), J(We, n);
  }
  function Im(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(j(108, Hv(e) || "Unknown", i));
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
    if (!r) throw Error(j(169));
    n
      ? ((e = Im(e, t, Jn)),
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
  function zm(e) {
    Bt === null ? (Bt = [e]) : Bt.push(e);
  }
  function a1(e) {
    (Ko = !0), zm(e);
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
        throw (Bt !== null && (Bt = Bt.slice(e + 1)), dm(tc, Mn), i);
      } finally {
        (Q = t), (qa = !1);
      }
    }
    return null;
  }
  var Nr = [],
    jr = 0,
    yo = null,
    go = 0,
    ut = [],
    ct = 0,
    er = null,
    Ut = 1,
    Ht = "";
  function zn(e, t) {
    (Nr[jr++] = go), (Nr[jr++] = yo), (yo = e), (go = t);
  }
  function Bm(e, t, n) {
    (ut[ct++] = Ut), (ut[ct++] = Ht), (ut[ct++] = er), (er = e);
    var r = Ut;
    e = Ht;
    var i = 32 - Et(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var s = 32 - Et(t) + i;
    if (30 < s) {
      var o = i - (i % 5);
      (s = (r & ((1 << o) - 1)).toString(32)),
        (r >>= o),
        (i -= o),
        (Ut = (1 << (32 - Et(t) + i)) | (n << i) | r),
        (Ht = s + e);
    } else (Ut = (1 << s) | (n << i) | r), (Ht = e);
  }
  function cc(e) {
    e.return !== null && (zn(e, 1), Bm(e, 1, 0));
  }
  function fc(e) {
    for (; e === yo; )
      (yo = Nr[--jr]), (Nr[jr] = null), (go = Nr[--jr]), (Nr[jr] = null);
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
  function Um(e, t) {
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
          if (tu(e)) throw Error(j(418));
          t = xn(n.nextSibling);
          var r = et;
          t && fd(e, t)
            ? Um(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (se = !1), (et = e));
        }
      } else {
        if (tu(e)) throw Error(j(418));
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
  function _s(e) {
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
      if (tu(e)) throw (Hm(), Error(j(418)));
      for (; t; ) Um(e, t), (t = xn(t.nextSibling));
    }
    if ((dd(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(j(317));
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
  function Hm() {
    for (var e = Ze; e; ) e = xn(e.nextSibling);
  }
  function Wr() {
    (Ze = et = null), (se = !1);
  }
  function dc(e) {
    Tt === null ? (Tt = [e]) : Tt.push(e);
  }
  var l1 = tn.ReactCurrentBatchConfig;
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
    pc = null;
  function hc() {
    pc = br = xo = null;
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
      (pc = br = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (He = !0), (e.firstContext = null));
  }
  function ht(e) {
    var t = e._currentValue;
    if (pc !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), br === null)) {
        if (xo === null) throw Error(j(308));
        (br = e), (xo.dependencies = { lanes: 0, firstContext: e });
      } else br = br.next = e;
    return t;
  }
  var Kn = null;
  function yc(e) {
    Kn === null ? (Kn = [e]) : Kn.push(e);
  }
  function Wm(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), yc(t)) : ((n.next = i.next), (i.next = n)),
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
  function gc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function Gm(e, t) {
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
      i === null ? ((t.next = t), yc(r)) : ((t.next = i.next), (i.next = t)),
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
  function pd(e, t) {
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
      var c = e.alternate;
      c !== null &&
        ((c = c.updateQueue),
        (a = c.lastBaseUpdate),
        a !== o &&
          (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
          (c.lastBaseUpdate = l)));
    }
    if (s !== null) {
      var f = i.baseState;
      (o = 0), (c = u = l = null), (a = s);
      do {
        var d = a.lane,
          m = a.eventTime;
        if ((r & d) === d) {
          c !== null &&
            (c = c.next =
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
            switch (((d = t), (m = n), x.tag)) {
              case 1:
                if (((v = x.payload), typeof v == "function")) {
                  f = v.call(m, f, d);
                  break e;
                }
                f = v;
                break e;
              case 3:
                v.flags = (v.flags & -65537) | 128;
              case 0:
                if (
                  ((v = x.payload),
                  (d = typeof v == "function" ? v.call(m, f, d) : v),
                  d == null)
                )
                  break e;
                f = ue({}, f, d);
                break e;
              case 2:
                ln = !0;
            }
          }
          a.callback !== null &&
            a.lane !== 0 &&
            ((e.flags |= 64),
            (d = i.effects),
            d === null ? (i.effects = [a]) : d.push(a));
        } else
          (m = {
            eventTime: m,
            lane: d,
            tag: a.tag,
            payload: a.payload,
            callback: a.callback,
            next: null,
          }),
            c === null ? ((u = c = m), (l = f)) : (c = c.next = m),
            (o |= d);
        if (((a = a.next), a === null)) {
          if (((a = i.shared.pending), a === null)) break;
          (d = a),
            (a = d.next),
            (d.next = null),
            (i.lastBaseUpdate = d),
            (i.shared.pending = null);
        }
      } while (1);
      if (
        (c === null && (l = f),
        (i.baseState = l),
        (i.firstBaseUpdate = u),
        (i.lastBaseUpdate = c),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (o |= i.lane), (i = i.next);
        while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      (nr |= o), (e.lanes = o), (e.memoizedState = f);
    }
  }
  function hd(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(j(191, i));
          i.call(r);
        }
      }
  }
  var Km = new Wh.Component().refs;
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
        t !== null && (Ct(t, e, i, r), Ys(t, e, i));
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
        t !== null && (Ct(t, e, i, r), Ys(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Le(),
        r = Tn(e),
        i = Kt(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = wn(e, i, r)),
        t !== null && (Ct(t, e, r, n), Ys(t, e, r));
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
  function Ym(e, t, n) {
    var r = !1,
      i = bn,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = ht(s))
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
  function yd(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Yo.enqueueReplaceState(t, t.state, null);
  }
  function su(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = Km), gc(e);
    var s = t.contextType;
    typeof s == "object" && s !== null
      ? (i.context = ht(s))
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
          if (n.tag !== 1) throw Error(j(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(j(147, e));
        var i = r,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (o) {
              var a = i.refs;
              a === Km && (a = i.refs = {}),
                o === null ? delete a[s] : (a[s] = o);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(j(284));
      if (!n._owner) throw Error(j(290, e));
    }
    return e;
  }
  function As(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        j(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function gd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Qm(e) {
    function t(g, p) {
      if (e) {
        var y = g.deletions;
        y === null ? ((g.deletions = [p]), (g.flags |= 16)) : y.push(p);
      }
    }
    function n(g, p) {
      if (!e) return null;
      for (; p !== null; ) t(g, p), (p = p.sibling);
      return null;
    }
    function r(g, p) {
      for (g = new Map(); p !== null; )
        p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
      return g;
    }
    function i(g, p) {
      return (g = En(g, p)), (g.index = 0), (g.sibling = null), g;
    }
    function s(g, p, y) {
      return (
        (g.index = y),
        e
          ? ((y = g.alternate),
            y !== null
              ? ((y = y.index), y < p ? ((g.flags |= 2), p) : y)
              : ((g.flags |= 2), p))
          : ((g.flags |= 1048576), p)
      );
    }
    function o(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function a(g, p, y, w) {
      return p === null || p.tag !== 6
        ? ((p = sl(y, g.mode, w)), (p.return = g), p)
        : ((p = i(p, y)), (p.return = g), p);
    }
    function l(g, p, y, w) {
      var C = y.type;
      return C === Sr
        ? c(g, p, y.props.children, w, y.key)
        : p !== null &&
          (p.elementType === C ||
            (typeof C == "object" &&
              C !== null &&
              C.$$typeof === an &&
              gd(C) === p.type))
        ? ((w = i(p, y.props)), (w.ref = ui(g, p, y)), (w.return = g), w)
        : ((w = eo(y.type, y.key, y.props, null, g.mode, w)),
          (w.ref = ui(g, p, y)),
          (w.return = g),
          w);
    }
    function u(g, p, y, w) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== y.containerInfo ||
        p.stateNode.implementation !== y.implementation
        ? ((p = ol(y, g.mode, w)), (p.return = g), p)
        : ((p = i(p, y.children || [])), (p.return = g), p);
    }
    function c(g, p, y, w, C) {
      return p === null || p.tag !== 7
        ? ((p = Zn(y, g.mode, w, C)), (p.return = g), p)
        : ((p = i(p, y)), (p.return = g), p);
    }
    function f(g, p, y) {
      if ((typeof p == "string" && p !== "") || typeof p == "number")
        return (p = sl("" + p, g.mode, y)), (p.return = g), p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ws:
            return (
              (y = eo(p.type, p.key, p.props, null, g.mode, y)),
              (y.ref = ui(g, null, p)),
              (y.return = g),
              y
            );
          case wr:
            return (p = ol(p, g.mode, y)), (p.return = g), p;
          case an:
            var w = p._init;
            return f(g, w(p._payload), y);
        }
        if (yi(p) || ii(p))
          return (p = Zn(p, g.mode, y, null)), (p.return = g), p;
        As(g, p);
      }
      return null;
    }
    function d(g, p, y, w) {
      var C = p !== null ? p.key : null;
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return C !== null ? null : a(g, p, "" + y, w);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ws:
            return y.key === C ? l(g, p, y, w) : null;
          case wr:
            return y.key === C ? u(g, p, y, w) : null;
          case an:
            return (C = y._init), d(g, p, C(y._payload), w);
        }
        if (yi(y) || ii(y)) return C !== null ? null : c(g, p, y, w, null);
        As(g, y);
      }
      return null;
    }
    function m(g, p, y, w, C) {
      if ((typeof w == "string" && w !== "") || typeof w == "number")
        return (g = g.get(y) || null), a(p, g, "" + w, C);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case ws:
            return (
              (g = g.get(w.key === null ? y : w.key) || null), l(p, g, w, C)
            );
          case wr:
            return (
              (g = g.get(w.key === null ? y : w.key) || null), u(p, g, w, C)
            );
          case an:
            var P = w._init;
            return m(g, p, y, P(w._payload), C);
        }
        if (yi(w) || ii(w)) return (g = g.get(y) || null), c(p, g, w, C, null);
        As(p, w);
      }
      return null;
    }
    function v(g, p, y, w) {
      for (
        var C = null, P = null, E = p, N = (p = 0), O = null;
        E !== null && N < y.length;
        N++
      ) {
        E.index > N ? ((O = E), (E = null)) : (O = E.sibling);
        var D = d(g, E, y[N], w);
        if (D === null) {
          E === null && (E = O);
          break;
        }
        e && E && D.alternate === null && t(g, E),
          (p = s(D, p, N)),
          P === null ? (C = D) : (P.sibling = D),
          (P = D),
          (E = O);
      }
      if (N === y.length) return n(g, E), se && zn(g, N), C;
      if (E === null) {
        for (; N < y.length; N++)
          (E = f(g, y[N], w)),
            E !== null &&
              ((p = s(E, p, N)),
              P === null ? (C = E) : (P.sibling = E),
              (P = E));
        return se && zn(g, N), C;
      }
      for (E = r(g, E); N < y.length; N++)
        (O = m(E, g, N, y[N], w)),
          O !== null &&
            (e && O.alternate !== null && E.delete(O.key === null ? N : O.key),
            (p = s(O, p, N)),
            P === null ? (C = O) : (P.sibling = O),
            (P = O));
      return (
        e &&
          E.forEach(function ($) {
            return t(g, $);
          }),
        se && zn(g, N),
        C
      );
    }
    function x(g, p, y, w) {
      var C = ii(y);
      if (typeof C != "function") throw Error(j(150));
      if (((y = C.call(y)), y == null)) throw Error(j(151));
      for (
        var P = (C = null), E = p, N = (p = 0), O = null, D = y.next();
        E !== null && !D.done;
        N++, D = y.next()
      ) {
        E.index > N ? ((O = E), (E = null)) : (O = E.sibling);
        var $ = d(g, E, D.value, w);
        if ($ === null) {
          E === null && (E = O);
          break;
        }
        e && E && $.alternate === null && t(g, E),
          (p = s($, p, N)),
          P === null ? (C = $) : (P.sibling = $),
          (P = $),
          (E = O);
      }
      if (D.done) return n(g, E), se && zn(g, N), C;
      if (E === null) {
        for (; !D.done; N++, D = y.next())
          (D = f(g, D.value, w)),
            D !== null &&
              ((p = s(D, p, N)),
              P === null ? (C = D) : (P.sibling = D),
              (P = D));
        return se && zn(g, N), C;
      }
      for (E = r(g, E); !D.done; N++, D = y.next())
        (D = m(E, g, N, D.value, w)),
          D !== null &&
            (e && D.alternate !== null && E.delete(D.key === null ? N : D.key),
            (p = s(D, p, N)),
            P === null ? (C = D) : (P.sibling = D),
            (P = D));
      return (
        e &&
          E.forEach(function (ve) {
            return t(g, ve);
          }),
        se && zn(g, N),
        C
      );
    }
    function k(g, p, y, w) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === Sr &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case ws:
            e: {
              for (var C = y.key, P = p; P !== null; ) {
                if (P.key === C) {
                  if (((C = y.type), C === Sr)) {
                    if (P.tag === 7) {
                      n(g, P.sibling),
                        (p = i(P, y.props.children)),
                        (p.return = g),
                        (g = p);
                      break e;
                    }
                  } else if (
                    P.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === an &&
                      gd(C) === P.type)
                  ) {
                    n(g, P.sibling),
                      (p = i(P, y.props)),
                      (p.ref = ui(g, P, y)),
                      (p.return = g),
                      (g = p);
                    break e;
                  }
                  n(g, P);
                  break;
                } else t(g, P);
                P = P.sibling;
              }
              y.type === Sr
                ? ((p = Zn(y.props.children, g.mode, w, y.key)),
                  (p.return = g),
                  (g = p))
                : ((w = eo(y.type, y.key, y.props, null, g.mode, w)),
                  (w.ref = ui(g, p, y)),
                  (w.return = g),
                  (g = w));
            }
            return o(g);
          case wr:
            e: {
              for (P = y.key; p !== null; ) {
                if (p.key === P)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === y.containerInfo &&
                    p.stateNode.implementation === y.implementation
                  ) {
                    n(g, p.sibling),
                      (p = i(p, y.children || [])),
                      (p.return = g),
                      (g = p);
                    break e;
                  } else {
                    n(g, p);
                    break;
                  }
                else t(g, p);
                p = p.sibling;
              }
              (p = ol(y, g.mode, w)), (p.return = g), (g = p);
            }
            return o(g);
          case an:
            return (P = y._init), k(g, p, P(y._payload), w);
        }
        if (yi(y)) return v(g, p, y, w);
        if (ii(y)) return x(g, p, y, w);
        As(g, y);
      }
      return (typeof y == "string" && y !== "") || typeof y == "number"
        ? ((y = "" + y),
          p !== null && p.tag === 6
            ? (n(g, p.sibling), (p = i(p, y)), (p.return = g), (g = p))
            : (n(g, p), (p = sl(y, g.mode, w)), (p.return = g), (g = p)),
          o(g))
        : n(g, p);
    }
    return k;
  }
  var Gr = Qm(!0),
    Xm = Qm(!1),
    ls = {},
    Mt = Dn(ls),
    Gi = Dn(ls),
    Ki = Dn(ls);
  function Yn(e) {
    if (e === ls) throw Error(j(174));
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
  function Zm(e) {
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
    Ee = null,
    To = !1,
    Pi = !1,
    Yi = 0,
    u1 = 0;
  function Ae() {
    throw Error(j(321));
  }
  function Sc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Pt(e[n], t[n])) return !1;
    return !0;
  }
  function Tc(e, t, n, r, i, s) {
    if (
      ((tr = s),
      (le = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Qs.current = e === null || e.memoizedState === null ? p1 : h1),
      (e = n(r, i)),
      Pi)
    ) {
      s = 0;
      do {
        if (((Pi = !1), (Yi = 0), 25 <= s)) throw Error(j(301));
        (s += 1),
          (Ee = xe = null),
          (t.updateQueue = null),
          (Qs.current = m1),
          (e = n(r, i));
      } while (Pi);
    }
    if (
      ((Qs.current = Eo),
      (t = xe !== null && xe.next !== null),
      (tr = 0),
      (Ee = xe = le = null),
      (To = !1),
      t)
    )
      throw Error(j(300));
    return e;
  }
  function Ec() {
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
    return Ee === null ? (le.memoizedState = Ee = e) : (Ee = Ee.next = e), Ee;
  }
  function mt() {
    if (xe === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = xe.next;
    var t = Ee === null ? le.memoizedState : Ee.next;
    if (t !== null) (Ee = t), (xe = e);
    else {
      if (e === null) throw Error(j(310));
      (xe = e),
        (e = {
          memoizedState: xe.memoizedState,
          baseState: xe.baseState,
          baseQueue: xe.baseQueue,
          queue: xe.queue,
          next: null,
        }),
        Ee === null ? (le.memoizedState = Ee = e) : (Ee = Ee.next = e);
    }
    return Ee;
  }
  function Qi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function tl(e) {
    var t = mt(),
      n = t.queue;
    if (n === null) throw Error(j(311));
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
        var c = u.lane;
        if ((tr & c) === c)
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
          var f = {
            lane: c,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          l === null ? ((a = l = f), (o = r)) : (l = l.next = f),
            (le.lanes |= c),
            (nr |= c);
        }
        u = u.next;
      } while (u !== null && u !== s);
      l === null ? (o = r) : (l.next = a),
        Pt(r, t.memoizedState) || (He = !0),
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
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      s = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var o = (i = i.next);
      do (s = e(s, o.action)), (o = o.next);
      while (o !== i);
      Pt(s, t.memoizedState) || (He = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s);
    }
    return [s, r];
  }
  function qm() {}
  function Jm(e, t) {
    var n = le,
      r = mt(),
      i = t(),
      s = !Pt(r.memoizedState, i);
    if (
      (s && ((r.memoizedState = i), (He = !0)),
      (r = r.queue),
      Cc(ny.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || s || (Ee !== null && Ee.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        Xi(9, ty.bind(null, n, r, i, t), void 0, null),
        Ce === null)
      )
        throw Error(j(349));
      tr & 30 || ey(n, t, i);
    }
    return i;
  }
  function ey(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = le.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (le.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ty(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), ry(t) && iy(e);
  }
  function ny(e, t, n) {
    return n(function () {
      ry(t) && iy(e);
    });
  }
  function ry(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Pt(e, n);
    } catch {
      return !0;
    }
  }
  function iy(e) {
    var t = qt(e, 1);
    t !== null && Ct(t, e, 1, -1);
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
      (e = e.dispatch = d1.bind(null, le, e)),
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
  function sy() {
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
  function Cc(e, t) {
    return Qo(2048, 8, e, t);
  }
  function oy(e, t) {
    return Qo(4, 2, e, t);
  }
  function ay(e, t) {
    return Qo(4, 4, e, t);
  }
  function ly(e, t) {
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
  function uy(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), Qo(4, 4, ly.bind(null, t, e), n)
    );
  }
  function Pc() {}
  function cy(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sc(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function fy(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Sc(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function dy(e, t, n) {
    return tr & 21
      ? (Pt(n, t) ||
          ((n = mm()), (le.lanes |= n), (nr |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (He = !0)), (e.memoizedState = n));
  }
  function c1(e, t) {
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
  function py() {
    return mt().memoizedState;
  }
  function f1(e, t, n) {
    var r = Tn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      hy(e))
    )
      my(t, n);
    else if (((n = Wm(e, t, n, r)), n !== null)) {
      var i = Le();
      Ct(n, e, r, i), yy(n, t, r);
    }
  }
  function d1(e, t, n) {
    var r = Tn(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (hy(e)) my(t, i);
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
          if (((i.hasEagerState = !0), (i.eagerState = a), Pt(a, o))) {
            var l = t.interleaved;
            l === null
              ? ((i.next = i), yc(t))
              : ((i.next = l.next), (l.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Wm(e, t, i, r)),
        n !== null && ((i = Le()), Ct(n, e, r, i), yy(n, t, r));
    }
  }
  function hy(e) {
    var t = e.alternate;
    return e === le || (t !== null && t === le);
  }
  function my(e, t) {
    Pi = To = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function yy(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), nc(e, n);
    }
  }
  var Eo = {
      readContext: ht,
      useCallback: Ae,
      useContext: Ae,
      useEffect: Ae,
      useImperativeHandle: Ae,
      useInsertionEffect: Ae,
      useLayoutEffect: Ae,
      useMemo: Ae,
      useReducer: Ae,
      useRef: Ae,
      useState: Ae,
      useDebugValue: Ae,
      useDeferredValue: Ae,
      useTransition: Ae,
      useMutableSource: Ae,
      useSyncExternalStore: Ae,
      useId: Ae,
      unstable_isNewReconciler: !1,
    },
    p1 = {
      readContext: ht,
      useCallback: function (e, t) {
        return (bt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: ht,
      useEffect: xd,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Xs(4194308, 4, ly.bind(null, t, e), n)
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
          (e = e.dispatch = f1.bind(null, le, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = bt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: vd,
      useDebugValue: Pc,
      useDeferredValue: function (e) {
        return (bt().memoizedState = e);
      },
      useTransition: function () {
        var e = vd(!1),
          t = e[0];
        return (e = c1.bind(null, e[1])), (bt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = le,
          i = bt();
        if (se) {
          if (n === void 0) throw Error(j(407));
          n = n();
        } else {
          if (((n = t()), Ce === null)) throw Error(j(349));
          tr & 30 || ey(r, t, n);
        }
        i.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (i.queue = s),
          xd(ny.bind(null, r, s, e), [e]),
          (r.flags |= 2048),
          Xi(9, ty.bind(null, r, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = bt(),
          t = Ce.identifierPrefix;
        if (se) {
          var n = Ht,
            r = Ut;
          (n = (r & ~(1 << (32 - Et(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Yi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = u1++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    h1 = {
      readContext: ht,
      useCallback: cy,
      useContext: ht,
      useEffect: Cc,
      useImperativeHandle: uy,
      useInsertionEffect: oy,
      useLayoutEffect: ay,
      useMemo: fy,
      useReducer: tl,
      useRef: sy,
      useState: function () {
        return tl(Qi);
      },
      useDebugValue: Pc,
      useDeferredValue: function (e) {
        var t = mt();
        return dy(t, xe.memoizedState, e);
      },
      useTransition: function () {
        var e = tl(Qi)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: qm,
      useSyncExternalStore: Jm,
      useId: py,
      unstable_isNewReconciler: !1,
    },
    m1 = {
      readContext: ht,
      useCallback: cy,
      useContext: ht,
      useEffect: Cc,
      useImperativeHandle: uy,
      useInsertionEffect: oy,
      useLayoutEffect: ay,
      useMemo: fy,
      useReducer: nl,
      useRef: sy,
      useState: function () {
        return nl(Qi);
      },
      useDebugValue: Pc,
      useDeferredValue: function (e) {
        var t = mt();
        return xe === null ? (t.memoizedState = e) : dy(t, xe.memoizedState, e);
      },
      useTransition: function () {
        var e = nl(Qi)[0],
          t = mt().memoizedState;
        return [e, t];
      },
      useMutableSource: qm,
      useSyncExternalStore: Jm,
      useId: py,
      unstable_isNewReconciler: !1,
    };
  function Yr(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Uv(r)), (r = r.return);
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
  var y1 = typeof WeakMap == "function" ? WeakMap : Map;
  function gy(e, t, n) {
    (n = Kt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Po || ((Po = !0), (yu = r)), ou(e, t);
      }),
      n
    );
  }
  function vy(e, t, n) {
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
      r = e.pingCache = new y1();
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
  var g1 = tn.ReactCurrentOwner,
    He = !1;
  function Re(e, t, n, r) {
    t.child = e === null ? Xm(t, null, n, r) : Gr(t, e.child, n, r);
  }
  function Ed(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return (
      zr(t, i),
      (r = Tc(e, t, n, r, s, i)),
      (n = Ec()),
      e !== null && !He
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Jt(e, t, i))
        : (se && n && cc(t), (t.flags |= 1), Re(e, t, r, i), t.child)
    );
  }
  function Cd(e, t, n, r, i) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !Oc(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), xy(e, t, s, r, i))
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
      (e = En(s, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function xy(e, t, n, r, i) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (Bi(s, r) && e.ref === t.ref)
        if (((He = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
          e.flags & 131072 && (He = !0);
        else return (t.lanes = e.lanes), Jt(e, t, i);
    }
    return au(e, t, n, r, i);
  }
  function wy(e, t, n) {
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
          J(Ar, Xe),
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
            J(Ar, Xe),
            (Xe |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = s !== null ? s.baseLanes : n),
          J(Ar, Xe),
          (Xe |= r);
      }
    else
      s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
        J(Ar, Xe),
        (Xe |= r);
    return Re(e, t, i, n), t.child;
  }
  function Sy(e, t) {
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
      (r = Ec()),
      e !== null && !He
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          Jt(e, t, i))
        : (se && r && cc(t), (t.flags |= 1), Re(e, t, n, i), t.child)
    );
  }
  function Pd(e, t, n, r, i) {
    if (Ge(n)) {
      var s = !0;
      mo(t);
    } else s = !1;
    if ((zr(t, i), t.stateNode === null))
      Zs(e, t), Ym(t, n, r), su(t, n, r, i), (r = !0);
    else if (e === null) {
      var o = t.stateNode,
        a = t.memoizedProps;
      o.props = a;
      var l = o.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = ht(u))
        : ((u = Ge(n) ? Jn : De.current), (u = Hr(t, u)));
      var c = n.getDerivedStateFromProps,
        f =
          typeof c == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function";
      f ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== r || l !== u) && yd(t, o, r, u)),
        (ln = !1);
      var d = t.memoizedState;
      (o.state = d),
        wo(t, r, o, i),
        (l = t.memoizedState),
        a !== r || d !== l || We.current || ln
          ? (typeof c == "function" && (iu(t, n, c, r), (l = t.memoizedState)),
            (a = ln || md(t, n, a, r, d, l, u))
              ? (f ||
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
        Gm(e, t),
        (a = t.memoizedProps),
        (u = t.type === t.elementType ? a : wt(t.type, a)),
        (o.props = u),
        (f = t.pendingProps),
        (d = o.context),
        (l = n.contextType),
        typeof l == "object" && l !== null
          ? (l = ht(l))
          : ((l = Ge(n) ? Jn : De.current), (l = Hr(t, l)));
      var m = n.getDerivedStateFromProps;
      (c =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function") ||
        (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
          typeof o.componentWillReceiveProps != "function") ||
        ((a !== f || d !== l) && yd(t, o, r, l)),
        (ln = !1),
        (d = t.memoizedState),
        (o.state = d),
        wo(t, r, o, i);
      var v = t.memoizedState;
      a !== f || d !== v || We.current || ln
        ? (typeof m == "function" && (iu(t, n, m, r), (v = t.memoizedState)),
          (u = ln || md(t, n, u, r, d, v, l) || !1)
            ? (c ||
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
                (a === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (a === e.memoizedProps && d === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = v)),
          (o.props = r),
          (o.state = v),
          (o.context = l),
          (r = u))
        : (typeof o.componentDidUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (a === e.memoizedProps && d === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return lu(e, t, n, r, s, i);
  }
  function lu(e, t, n, r, i, s) {
    Sy(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return i && cd(t, n, !1), Jt(e, t, s);
    (r = t.stateNode), (g1.current = t);
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
  function Ty(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ud(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ud(e, t.context, !1),
      vc(e, t.containerInfo);
  }
  function kd(e, t, n, r, i) {
    return Wr(), dc(i), (t.flags |= 256), Re(e, t, n, r), t.child;
  }
  var uu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function cu(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ey(e, t, n) {
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
              : kc(t, o))
      );
    if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return v1(e, t, o, r, a, i, n);
    if (s) {
      (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
      var l = { mode: "hidden", children: r.children };
      return (
        !(o & 1) && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = l),
            (t.deletions = null))
          : ((r = En(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        a !== null ? (s = En(a, s)) : ((s = Zn(s, o, n, null)), (s.flags |= 2)),
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
      (r = En(s, { mode: "visible", children: r.children })),
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
  function kc(e, t) {
    return (
      (t = qo({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Fs(e, t, n, r) {
    return (
      r !== null && dc(r),
      Gr(t, e.child, null, n),
      (e = kc(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function v1(e, t, n, r, i, s, o) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = rl(Error(j(422)))), Fs(e, t, o, r))
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
    if (!(t.mode & 1)) return Fs(e, t, o, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
      return (
        (r = a), (s = Error(j(419))), (r = rl(s, r, void 0)), Fs(e, t, o, r)
      );
    }
    if (((a = (o & e.childLanes) !== 0), He || a)) {
      if (((r = Ce), r !== null)) {
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
            ((s.retryLane = i), qt(e, i), Ct(r, e, i, -1));
      }
      return Fc(), (r = rl(Error(j(421)))), Fs(e, t, o, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = A1.bind(null, e)),
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
        (t = kc(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function Nd(e, t, n) {
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
  function Cy(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      s = r.tail;
    if ((Re(e, t, r.children, n), (r = oe.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && Nd(e, n, t);
          else if (e.tag === 19) Nd(e, n, t);
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
    if (e !== null && t.child !== e.child) throw Error(j(153));
    if (t.child !== null) {
      for (
        e = t.child, n = En(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = En(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function x1(e, t, n) {
    switch (t.tag) {
      case 3:
        Ty(t), Wr();
        break;
      case 5:
        Zm(t);
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
            ? Ey(e, t, n)
            : (J(oe, oe.current & 1),
              (e = Jt(e, t, n)),
              e !== null ? e.sibling : null);
        J(oe, oe.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Cy(e, t, n);
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
        return (t.lanes = 0), wy(e, t, n);
    }
    return Jt(e, t, n);
  }
  var Py, fu, ky, Ny;
  Py = function (e, t) {
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
  ky = function (e, t, n, r) {
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
            (e.onclick = po);
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
  Ny = function (e, t, n, r) {
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
  function Fe(e) {
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
  function w1(e, t, n) {
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
        return Fe(t), null;
      case 1:
        return Ge(t.type) && ho(), Fe(t), null;
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
            (_s(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), Tt !== null && (xu(Tt), (Tt = null)))),
          fu(e, t),
          Fe(t),
          null
        );
      case 5:
        xc(t);
        var i = Yn(Ki.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          ky(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(j(166));
            return Fe(t), null;
          }
          if (((e = Yn(Mt.current)), _s(t))) {
            (r = t.stateNode), (n = t.type);
            var s = t.memoizedProps;
            switch (((r[Ft] = t), (r[Wi] = s), (e = (t.mode & 1) !== 0), n)) {
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
                typeof s.onClick == "function" && (r.onclick = po);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (o = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = em(n)),
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
              (e[Ft] = t),
              (e[Wi] = r),
              Py(e, t, !1, !1),
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
                    ? rm(e, l)
                    : s === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && tm(e, l))
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
                  r.value != null && e.setAttribute("value", "" + jn(r.value));
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
                  typeof i.onClick == "function" && (e.onclick = po);
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
        return Fe(t), null;
      case 6:
        if (e && t.stateNode != null) Ny(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
          if (((n = Yn(Ki.current)), Yn(Mt.current), _s(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ft] = t),
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
              (r[Ft] = t),
              (t.stateNode = r);
        }
        return Fe(t), null;
      case 13:
        if (
          (re(oe),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (se && Ze !== null && t.mode & 1 && !(t.flags & 128))
            Hm(), Wr(), (t.flags |= 98560), (s = !1);
          else if (((s = _s(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(j(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(j(317));
              s[Ft] = t;
            } else
              Wr(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Fe(t), (s = !1);
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
                (e === null || oe.current & 1 ? we === 0 && (we = 3) : Fc())),
            t.updateQueue !== null && (t.flags |= 4),
            Fe(t),
            null);
      case 4:
        return (
          Kr(),
          fu(e, t),
          e === null && Ui(t.stateNode.containerInfo),
          Fe(t),
          null
        );
      case 10:
        return mc(t.type._context), Fe(t), null;
      case 17:
        return Ge(t.type) && ho(), Fe(t), null;
      case 19:
        if ((re(oe), (s = t.memoizedState), s === null)) return Fe(t), null;
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
                return Fe(t), null;
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
          : (Fe(t), null);
      case 22:
      case 23:
        return (
          Ac(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? Xe & 1073741824 &&
              (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Fe(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(j(156, t.tag));
  }
  function S1(e, t) {
    switch ((fc(t), t.tag)) {
      case 1:
        return (
          Ge(t.type) && ho(),
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
          if (t.alternate === null) throw Error(j(340));
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
        return Ac(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Os = !1,
    Oe = !1,
    T1 = typeof WeakSet == "function" ? WeakSet : Set,
    A = null;
  function _r(e, t) {
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
  var jd = !1;
  function E1(e, t) {
    if (((Ql = uo), (e = Am()), uc(e))) {
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
              c = 0,
              f = e,
              d = null;
            t: for (;;) {
              for (
                var m;
                f !== n || (i !== 0 && f.nodeType !== 3) || (a = o + i),
                  f !== s || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                  f.nodeType === 3 && (o += f.nodeValue.length),
                  (m = f.firstChild) !== null;

              )
                (d = f), (f = m);
              for (;;) {
                if (f === e) break t;
                if (
                  (d === n && ++u === i && (a = o),
                  d === s && ++c === r && (l = o),
                  (m = f.nextSibling) !== null)
                )
                  break;
                (f = d), (d = f.parentNode);
              }
              f = m;
            }
            n = a === -1 || l === -1 ? null : { start: a, end: l };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Xl = { focusedElem: e, selectionRange: n }, uo = !1, A = t;
      A !== null;

    )
      if (((t = A), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (A = e);
      else
        for (; A !== null; ) {
          t = A;
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
                      k = v.memoizedState,
                      g = t.stateNode,
                      p = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? x : wt(t.type, x),
                        k
                      );
                    g.__reactInternalSnapshotBeforeUpdate = p;
                  }
                  break;
                case 3:
                  var y = t.stateNode.containerInfo;
                  y.nodeType === 1
                    ? (y.textContent = "")
                    : y.nodeType === 9 &&
                      y.documentElement &&
                      y.removeChild(y.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(j(163));
              }
          } catch (w) {
            ce(t, t.return, w);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (A = e);
            break;
          }
          A = t.return;
        }
    return (v = jd), (jd = !1), v;
  }
  function ki(e, t, n) {
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
  function pu(e) {
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
  function jy(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), jy(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ft],
          delete t[Wi],
          delete t[Jl],
          delete t[s1],
          delete t[o1])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function by(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function bd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || by(e.return)) return null;
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
  function hu(e, t, n) {
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
            n != null || t.onclick !== null || (t.onclick = po));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (hu(e, t, n), e = e.sibling; e !== null; )
        hu(e, t, n), (e = e.sibling);
  }
  function mu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (mu(e, t, n), e = e.sibling; e !== null; )
        mu(e, t, n), (e = e.sibling);
  }
  var ke = null,
    St = !1;
  function rn(e, t, n) {
    for (n = n.child; n !== null; ) _y(e, t, n), (n = n.sibling);
  }
  function _y(e, t, n) {
    if (Dt && typeof Dt.onCommitFiberUnmount == "function")
      try {
        Dt.onCommitFiberUnmount(Bo, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Oe || _r(n, t);
      case 6:
        var r = ke,
          i = St;
        (ke = null),
          rn(e, t, n),
          (ke = r),
          (St = i),
          ke !== null &&
            (St
              ? ((e = ke),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : ke.removeChild(n.stateNode));
        break;
      case 18:
        ke !== null &&
          (St
            ? ((e = ke),
              (n = n.stateNode),
              e.nodeType === 8
                ? Za(e.parentNode, n)
                : e.nodeType === 1 && Za(e, n),
              Ii(e))
            : Za(ke, n.stateNode));
        break;
      case 4:
        (r = ke),
          (i = St),
          (ke = n.stateNode.containerInfo),
          (St = !0),
          rn(e, t, n),
          (ke = r),
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
          (_r(n, t),
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
  function _d(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new T1()),
        t.forEach(function (r) {
          var i = F1.bind(null, e, r);
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
                (ke = a.stateNode), (St = !1);
                break e;
              case 3:
                (ke = a.stateNode.containerInfo), (St = !0);
                break e;
              case 4:
                (ke = a.stateNode.containerInfo), (St = !0);
                break e;
            }
            a = a.return;
          }
          if (ke === null) throw Error(j(160));
          _y(s, o, i), (ke = null), (St = !1);
          var l = i.alternate;
          l !== null && (l.return = null), (i.return = null);
        } catch (u) {
          ce(i, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ay(t, e), (t = t.sibling);
  }
  function Ay(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vt(t, e), jt(e), r & 4)) {
          try {
            ki(3, e, e.return), Xo(3, e);
          } catch (x) {
            ce(e, e.return, x);
          }
          try {
            ki(5, e, e.return);
          } catch (x) {
            ce(e, e.return, x);
          }
        }
        break;
      case 1:
        vt(t, e), jt(e), r & 512 && n !== null && _r(n, n.return);
        break;
      case 5:
        if (
          (vt(t, e),
          jt(e),
          r & 512 && n !== null && _r(n, n.return),
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
              a === "input" && s.type === "radio" && s.name != null && qh(i, s),
                $l(a, o);
              var u = $l(a, s);
              for (o = 0; o < l.length; o += 2) {
                var c = l[o],
                  f = l[o + 1];
                c === "style"
                  ? rm(i, f)
                  : c === "dangerouslySetInnerHTML"
                  ? tm(i, f)
                  : c === "children"
                  ? Ri(i, f)
                  : Xu(i, c, f, u);
              }
              switch (a) {
                case "input":
                  Dl(i, s);
                  break;
                case "textarea":
                  Jh(i, s);
                  break;
                case "select":
                  var d = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!s.multiple;
                  var m = s.value;
                  m != null
                    ? Lr(i, !!s.multiple, m, !1)
                    : d !== !!s.multiple &&
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
        if ((vt(t, e), jt(e), r & 4)) {
          if (e.stateNode === null) throw Error(j(162));
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
          (vt(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Ii(t.containerInfo);
          } catch (x) {
            ce(e, e.return, x);
          }
        break;
      case 4:
        vt(t, e), jt(e);
        break;
      case 13:
        vt(t, e),
          jt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((s = i.memoizedState !== null),
            (i.stateNode.isHidden = s),
            !s ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (bc = me())),
          r & 4 && _d(e);
        break;
      case 22:
        if (
          ((c = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Oe = (u = Oe) || c), vt(t, e), (Oe = u)) : vt(t, e),
          jt(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
          )
            for (A = e, c = e.child; c !== null; ) {
              for (f = A = c; A !== null; ) {
                switch (((d = A), (m = d.child), d.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ki(4, d, d.return);
                    break;
                  case 1:
                    _r(d, d.return);
                    var v = d.stateNode;
                    if (typeof v.componentWillUnmount == "function") {
                      (r = d), (n = d.return);
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
                    _r(d, d.return);
                    break;
                  case 22:
                    if (d.memoizedState !== null) {
                      Fd(f);
                      continue;
                    }
                }
                m !== null ? ((m.return = d), (A = m)) : Fd(f);
              }
              c = c.sibling;
            }
          e: for (c = null, f = e; ; ) {
            if (f.tag === 5) {
              if (c === null) {
                c = f;
                try {
                  (i = f.stateNode),
                    u
                      ? ((s = i.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((a = f.stateNode),
                        (l = f.memoizedProps.style),
                        (o =
                          l != null && l.hasOwnProperty("display")
                            ? l.display
                            : null),
                        (a.style.display = nm("display", o)));
                } catch (x) {
                  ce(e, e.return, x);
                }
              }
            } else if (f.tag === 6) {
              if (c === null)
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (x) {
                  ce(e, e.return, x);
                }
            } else if (
              ((f.tag !== 22 && f.tag !== 23) ||
                f.memoizedState === null ||
                f === e) &&
              f.child !== null
            ) {
              (f.child.return = f), (f = f.child);
              continue;
            }
            if (f === e) break e;
            for (; f.sibling === null; ) {
              if (f.return === null || f.return === e) break e;
              c === f && (c = null), (f = f.return);
            }
            c === f && (c = null),
              (f.sibling.return = f.return),
              (f = f.sibling);
          }
        }
        break;
      case 19:
        vt(t, e), jt(e), r & 4 && _d(e);
        break;
      case 21:
        break;
      default:
        vt(t, e), jt(e);
    }
  }
  function jt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (by(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(j(160));
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
            hu(e, a, o);
            break;
          default:
            throw Error(j(161));
        }
      } catch (l) {
        ce(e, e.return, l);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function C1(e, t, n) {
    (A = e), Fy(e);
  }
  function Fy(e, t, n) {
    for (var r = (e.mode & 1) !== 0; A !== null; ) {
      var i = A,
        s = i.child;
      if (i.tag === 22 && r) {
        var o = i.memoizedState !== null || Os;
        if (!o) {
          var a = i.alternate,
            l = (a !== null && a.memoizedState !== null) || Oe;
          a = Os;
          var u = Oe;
          if (((Os = o), (Oe = l) && !u))
            for (A = i; A !== null; )
              (o = A),
                (l = o.child),
                o.tag === 22 && o.memoizedState !== null
                  ? Od(i)
                  : l !== null
                  ? ((l.return = o), (A = l))
                  : Od(i);
          for (; s !== null; ) (A = s), Fy(s), (s = s.sibling);
          (A = i), (Os = a), (Oe = u);
        }
        Ad(e);
      } else
        i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (A = s)) : Ad(e);
    }
  }
  function Ad(e) {
    for (; A !== null; ) {
      var t = A;
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
                s !== null && hd(t, s, r);
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
                  hd(t, o, n);
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
                    var c = u.memoizedState;
                    if (c !== null) {
                      var f = c.dehydrated;
                      f !== null && Ii(f);
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
                throw Error(j(163));
            }
          Oe || (t.flags & 512 && pu(t));
        } catch (d) {
          ce(t, t.return, d);
        }
      }
      if (t === e) {
        A = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (A = n);
        break;
      }
      A = t.return;
    }
  }
  function Fd(e) {
    for (; A !== null; ) {
      var t = A;
      if (t === e) {
        A = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (A = n);
        break;
      }
      A = t.return;
    }
  }
  function Od(e) {
    for (; A !== null; ) {
      var t = A;
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
              pu(t);
            } catch (l) {
              ce(t, s, l);
            }
            break;
          case 5:
            var o = t.return;
            try {
              pu(t);
            } catch (l) {
              ce(t, o, l);
            }
        }
      } catch (l) {
        ce(t, t.return, l);
      }
      if (t === e) {
        A = null;
        break;
      }
      var a = t.sibling;
      if (a !== null) {
        (a.return = t.return), (A = a);
        break;
      }
      A = t.return;
    }
  }
  var P1 = Math.ceil,
    Co = tn.ReactCurrentDispatcher,
    Nc = tn.ReactCurrentOwner,
    pt = tn.ReactCurrentBatchConfig,
    H = 0,
    Ce = null,
    ge = null,
    je = 0,
    Xe = 0,
    Ar = Dn(0),
    we = 0,
    Zi = null,
    nr = 0,
    Zo = 0,
    jc = 0,
    Ni = null,
    Be = null,
    bc = 0,
    Qr = 1 / 0,
    zt = null,
    Po = !1,
    yu = null,
    Sn = null,
    Ds = !1,
    hn = null,
    ko = 0,
    ji = 0,
    gu = null,
    qs = -1,
    Js = 0;
  function Le() {
    return H & 6 ? me() : qs !== -1 ? qs : (qs = me());
  }
  function Tn(e) {
    return e.mode & 1
      ? H & 2 && je !== 0
        ? je & -je
        : l1.transition !== null
        ? (Js === 0 && (Js = mm()), Js)
        : ((e = Q),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Tm(e.type))),
          e)
      : 1;
  }
  function Ct(e, t, n, r) {
    if (50 < ji) throw ((ji = 0), (gu = null), Error(j(185)));
    ss(e, n, r),
      (!(H & 2) || e !== Ce) &&
        (e === Ce && (!(H & 2) && (Zo |= n), we === 4 && dn(e, je)),
        Ke(e, r),
        n === 1 && H === 0 && !(t.mode & 1) && ((Qr = me() + 500), Ko && Mn()));
  }
  function Ke(e, t) {
    var n = e.callbackNode;
    lx(e, t);
    var r = lo(e, e === Ce ? je : 0);
    if (r === 0)
      n !== null && Bf(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && Bf(n), t === 1))
        e.tag === 0 ? a1(Dd.bind(null, e)) : zm(Dd.bind(null, e)),
          r1(function () {
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
            n = hm;
            break;
          default:
            n = ao;
        }
        n = Iy(n, Oy.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Oy(e, t) {
    if (((qs = -1), (Js = 0), H & 6)) throw Error(j(327));
    var n = e.callbackNode;
    if (Br() && e.callbackNode !== n) return null;
    var r = lo(e, e === Ce ? je : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = No(e, r);
    else {
      t = r;
      var i = H;
      H |= 2;
      var s = My();
      (Ce !== e || je !== t) && ((zt = null), (Qr = me() + 500), Xn(e, t));
      do
        try {
          j1();
          break;
        } catch (a) {
          Dy(e, a);
        }
      while (1);
      hc(),
        (Co.current = s),
        (H = i),
        ge !== null ? (t = 0) : ((Ce = null), (je = 0), (t = we));
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
            ((t = No(e, r)),
            t === 2 && ((s = Hl(e)), s !== 0 && ((r = s), (t = vu(e, s)))),
            t === 1))
        )
          throw ((n = Zi), Xn(e, 0), dn(e, r), Ke(e, me()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(j(345));
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
              var o = 31 - Et(r);
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
            throw Error(j(329));
        }
      }
    }
    return Ke(e, me()), e.callbackNode === n ? Oy.bind(null, e) : null;
  }
  function vu(e, t) {
    var n = Ni;
    return (
      e.current.memoizedState.isDehydrated && (Xn(e, t).flags |= 256),
      (e = No(e, t)),
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
              if (!Pt(s(), i)) return !1;
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
      t &= ~jc,
        t &= ~Zo,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Et(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Dd(e) {
    if (H & 6) throw Error(j(327));
    Br();
    var t = lo(e, 0);
    if (!(t & 1)) return Ke(e, me()), null;
    var n = No(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Hl(e);
      r !== 0 && ((t = r), (n = vu(e, r)));
    }
    if (n === 1) throw ((n = Zi), Xn(e, 0), dn(e, t), Ke(e, me()), n);
    if (n === 6) throw Error(j(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      Bn(e, Be, zt),
      Ke(e, me()),
      null
    );
  }
  function _c(e, t) {
    var n = H;
    H |= 1;
    try {
      return e(t);
    } finally {
      (H = n), H === 0 && ((Qr = me() + 500), Ko && Mn());
    }
  }
  function rr(e) {
    hn !== null && hn.tag === 0 && !(H & 6) && Br();
    var t = H;
    H |= 1;
    var n = pt.transition,
      r = Q;
    try {
      if (((pt.transition = null), (Q = 1), e)) return e();
    } finally {
      (Q = r), (pt.transition = n), (H = t), !(H & 6) && Mn();
    }
  }
  function Ac() {
    (Xe = Ar.current), re(Ar);
  }
  function Xn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), n1(n)), ge !== null))
      for (n = ge.return; n !== null; ) {
        var r = n;
        switch ((fc(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ho();
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
            Ac();
        }
        n = n.return;
      }
    if (
      ((Ce = e),
      (ge = e = En(e.current, null)),
      (je = Xe = t),
      (we = 0),
      (Zi = null),
      (jc = Zo = nr = 0),
      (Be = Ni = null),
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
  function Dy(e, t) {
    do {
      var n = ge;
      try {
        if ((hc(), (Qs.current = Eo), To)) {
          for (var r = le.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          To = !1;
        }
        if (
          ((tr = 0),
          (Ee = xe = le = null),
          (Pi = !1),
          (Yi = 0),
          (Nc.current = null),
          n === null || n.return === null)
        ) {
          (we = 1), (Zi = t), (ge = null);
          break;
        }
        e: {
          var s = e,
            o = n.return,
            a = n,
            l = t;
          if (
            ((t = je),
            (a.flags |= 32768),
            l !== null && typeof l == "object" && typeof l.then == "function")
          ) {
            var u = l,
              c = a,
              f = c.tag;
            if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
              var d = c.alternate;
              d
                ? ((c.updateQueue = d.updateQueue),
                  (c.memoizedState = d.memoizedState),
                  (c.lanes = d.lanes))
                : ((c.updateQueue = null), (c.memoizedState = null));
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
                wd(s, u, t), Fc();
                break e;
              }
              l = Error(j(426));
            }
          } else if (se && a.mode & 1) {
            var k = Sd(o);
            if (k !== null) {
              !(k.flags & 65536) && (k.flags |= 256),
                Td(k, o, a, s, t),
                dc(Yr(l, a));
              break e;
            }
          }
          (s = l = Yr(l, a)),
            we !== 4 && (we = 2),
            Ni === null ? (Ni = [s]) : Ni.push(s),
            (s = o);
          do {
            switch (s.tag) {
              case 3:
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var g = gy(s, l, t);
                pd(s, g);
                break e;
              case 1:
                a = l;
                var p = s.type,
                  y = s.stateNode;
                if (
                  !(s.flags & 128) &&
                  (typeof p.getDerivedStateFromError == "function" ||
                    (y !== null &&
                      typeof y.componentDidCatch == "function" &&
                      (Sn === null || !Sn.has(y))))
                ) {
                  (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                  var w = vy(s, a, t);
                  pd(s, w);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Ly(n);
      } catch (C) {
        (t = C), ge === n && n !== null && (ge = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function My() {
    var e = Co.current;
    return (Co.current = Eo), e === null ? Eo : e;
  }
  function Fc() {
    (we === 0 || we === 3 || we === 2) && (we = 4),
      Ce === null || (!(nr & 268435455) && !(Zo & 268435455)) || dn(Ce, je);
  }
  function No(e, t) {
    var n = H;
    H |= 2;
    var r = My();
    (Ce !== e || je !== t) && ((zt = null), Xn(e, t));
    do
      try {
        N1();
        break;
      } catch (i) {
        Dy(e, i);
      }
    while (1);
    if ((hc(), (H = n), (Co.current = r), ge !== null)) throw Error(j(261));
    return (Ce = null), (je = 0), we;
  }
  function N1() {
    for (; ge !== null; ) Ry(ge);
  }
  function j1() {
    for (; ge !== null && !Jv(); ) Ry(ge);
  }
  function Ry(e) {
    var t = $y(e.alternate, e, Xe);
    (e.memoizedProps = e.pendingProps),
      t === null ? Ly(e) : (ge = t),
      (Nc.current = null);
  }
  function Ly(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = S1(n, t)), n !== null)) {
          (n.flags &= 32767), (ge = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (we = 6), (ge = null);
          return;
        }
      } else if (((n = w1(n, t, Xe)), n !== null)) {
        ge = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        ge = t;
        return;
      }
      ge = t = e;
    } while (t !== null);
    we === 0 && (we = 5);
  }
  function Bn(e, t, n) {
    var r = Q,
      i = pt.transition;
    try {
      (pt.transition = null), (Q = 1), b1(e, t, n, r);
    } finally {
      (pt.transition = i), (Q = r);
    }
    return null;
  }
  function b1(e, t, n, r) {
    do Br();
    while (hn !== null);
    if (H & 6) throw Error(j(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(j(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var s = n.lanes | n.childLanes;
    if (
      (ux(e, s),
      e === Ce && ((ge = Ce = null), (je = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        Ds ||
        ((Ds = !0),
        Iy(ao, function () {
          return Br(), null;
        })),
      (s = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || s)
    ) {
      (s = pt.transition), (pt.transition = null);
      var o = Q;
      Q = 1;
      var a = H;
      (H |= 4),
        (Nc.current = null),
        E1(e, n),
        Ay(n, e),
        Qx(Xl),
        (uo = !!Ql),
        (Xl = Ql = null),
        (e.current = n),
        C1(n),
        ex(),
        (H = a),
        (Q = o),
        (pt.transition = s);
    } else e.current = n;
    if (
      (Ds && ((Ds = !1), (hn = e), (ko = i)),
      (s = e.pendingLanes),
      s === 0 && (Sn = null),
      rx(n.stateNode),
      Ke(e, me()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Po) throw ((Po = !1), (e = yu), (yu = null), e);
    return (
      ko & 1 && e.tag !== 0 && Br(),
      (s = e.pendingLanes),
      s & 1 ? (e === gu ? ji++ : ((ji = 0), (gu = e))) : (ji = 0),
      Mn(),
      null
    );
  }
  function Br() {
    if (hn !== null) {
      var e = ym(ko),
        t = pt.transition,
        n = Q;
      try {
        if (((pt.transition = null), (Q = 16 > e ? 16 : e), hn === null))
          var r = !1;
        else {
          if (((e = hn), (hn = null), (ko = 0), H & 6)) throw Error(j(331));
          var i = H;
          for (H |= 4, A = e.current; A !== null; ) {
            var s = A,
              o = s.child;
            if (A.flags & 16) {
              var a = s.deletions;
              if (a !== null) {
                for (var l = 0; l < a.length; l++) {
                  var u = a[l];
                  for (A = u; A !== null; ) {
                    var c = A;
                    switch (c.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ki(8, c, s);
                    }
                    var f = c.child;
                    if (f !== null) (f.return = c), (A = f);
                    else
                      for (; A !== null; ) {
                        c = A;
                        var d = c.sibling,
                          m = c.return;
                        if ((jy(c), c === u)) {
                          A = null;
                          break;
                        }
                        if (d !== null) {
                          (d.return = m), (A = d);
                          break;
                        }
                        A = m;
                      }
                  }
                }
                var v = s.alternate;
                if (v !== null) {
                  var x = v.child;
                  if (x !== null) {
                    v.child = null;
                    do {
                      var k = x.sibling;
                      (x.sibling = null), (x = k);
                    } while (x !== null);
                  }
                }
                A = s;
              }
            }
            if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (A = o);
            else
              e: for (; A !== null; ) {
                if (((s = A), s.flags & 2048))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ki(9, s, s.return);
                  }
                var g = s.sibling;
                if (g !== null) {
                  (g.return = s.return), (A = g);
                  break e;
                }
                A = s.return;
              }
          }
          var p = e.current;
          for (A = p; A !== null; ) {
            o = A;
            var y = o.child;
            if (o.subtreeFlags & 2064 && y !== null) (y.return = o), (A = y);
            else
              e: for (o = p; A !== null; ) {
                if (((a = A), a.flags & 2048))
                  try {
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Xo(9, a);
                    }
                  } catch (C) {
                    ce(a, a.return, C);
                  }
                if (a === o) {
                  A = null;
                  break e;
                }
                var w = a.sibling;
                if (w !== null) {
                  (w.return = a.return), (A = w);
                  break e;
                }
                A = a.return;
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
        (Q = n), (pt.transition = t);
      }
    }
    return !1;
  }
  function Md(e, t, n) {
    (t = Yr(n, t)),
      (t = gy(e, t, 1)),
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
              (e = vy(t, e, 1)),
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
      Ce === e &&
        (je & n) === n &&
        (we === 4 || (we === 3 && (je & 130023424) === je && 500 > me() - bc)
          ? Xn(e, 0)
          : (jc |= n)),
      Ke(e, t);
  }
  function Vy(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = Cs), (Cs <<= 1), !(Cs & 130023424) && (Cs = 4194304))
        : (t = 1));
    var n = Le();
    (e = qt(e, t)), e !== null && (ss(e, t, n), Ke(e, n));
  }
  function A1(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Vy(e, n);
  }
  function F1(e, t) {
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
        throw Error(j(314));
    }
    r !== null && r.delete(t), Vy(e, n);
  }
  var $y;
  $y = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || We.current) He = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (He = !1), x1(e, t, n);
        He = !!(e.flags & 131072);
      }
    else (He = !1), se && t.flags & 1048576 && Bm(t, go, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Zs(e, t), (e = t.pendingProps);
        var i = Hr(t, De.current);
        zr(t, n), (i = Tc(null, t, r, e, i, n));
        var s = Ec();
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
              gc(t),
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
            (i = t.tag = D1(r)),
            (e = wt(r, e)),
            i)
          ) {
            case 0:
              t = au(null, t, r, e, n);
              break e;
            case 1:
              t = Pd(null, t, r, e, n);
              break e;
            case 11:
              t = Ed(null, t, r, e, n);
              break e;
            case 14:
              t = Cd(null, t, r, wt(r.type, e), n);
              break e;
          }
          throw Error(j(306, r, ""));
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
          Pd(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((Ty(t), e === null)) throw Error(j(387));
          (r = t.pendingProps),
            (s = t.memoizedState),
            (i = s.element),
            Gm(e, t),
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
              (i = Yr(Error(j(423)), t)), (t = kd(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = Yr(Error(j(424)), t)), (t = kd(e, t, r, n, i));
              break e;
            } else
              for (
                Ze = xn(t.stateNode.containerInfo.firstChild),
                  et = t,
                  se = !0,
                  Tt = null,
                  n = Xm(t, null, r, n),
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
          Zm(t),
          e === null && nu(t),
          (r = t.type),
          (i = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (o = i.children),
          Zl(r, i) ? (o = null) : s !== null && Zl(r, s) && (t.flags |= 32),
          Sy(e, t),
          Re(e, t, o, n),
          t.child
        );
      case 6:
        return e === null && nu(t), null;
      case 13:
        return Ey(e, t, n);
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
          Ed(e, t, r, i, n)
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
            if (Pt(s.value, o)) {
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
                          var c = u.pending;
                          c === null
                            ? (l.next = l)
                            : ((l.next = c.next), (c.next = l)),
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
                  if (((o = s.return), o === null)) throw Error(j(341));
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
          (i = ht(i)),
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
          Cd(e, t, r, i, n)
        );
      case 15:
        return xy(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : wt(r, i)),
          Zs(e, t),
          (t.tag = 1),
          Ge(r) ? ((e = !0), mo(t)) : (e = !1),
          zr(t, n),
          Ym(t, r, i),
          su(t, r, i, n),
          lu(null, t, r, !0, e, n)
        );
      case 19:
        return Cy(e, t, n);
      case 22:
        return wy(e, t, n);
    }
    throw Error(j(156, t.tag));
  };
  function Iy(e, t) {
    return dm(e, t);
  }
  function O1(e, t, n, r) {
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
    return new O1(e, t, n, r);
  }
  function Oc(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function D1(e) {
    if (typeof e == "function") return Oc(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === qu)) return 11;
      if (e === Ju) return 14;
    }
    return 2;
  }
  function En(e, t) {
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
        case _l:
          return (e = dt(13, n, t, i)), (e.elementType = _l), (e.lanes = s), e;
        case Al:
          return (e = dt(19, n, t, i)), (e.elementType = Al), (e.lanes = s), e;
        case Qh:
          return qo(n, i, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Kh:
                o = 10;
                break e;
              case Yh:
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
          throw Error(j(130, e == null ? e : typeof e, ""));
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
      (e.elementType = Qh),
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
  function M1(e, t, n, r, i) {
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
      (e = new M1(e, t, n, a, l)),
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
      gc(s),
      e
    );
  }
  function R1(e, t, n) {
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
  function zy(e) {
    if (!e) return bn;
    e = e._reactInternals;
    e: {
      if (ar(e) !== e || e.tag !== 1) throw Error(j(170));
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
      throw Error(j(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ge(n)) return Im(e, n, t);
    }
    return t;
  }
  function By(e, t, n, r, i, s, o, a, l) {
    return (
      (e = Dc(n, r, !0, e, i, s, o, a, l)),
      (e.context = zy(null)),
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
      (n = zy(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Kt(s, o)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = wn(i, t, o)),
      e !== null && (Ct(e, i, o, s), Ys(e, i, o)),
      o
    );
  }
  function jo(e) {
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
  function L1() {
    return null;
  }
  var Uy =
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
    if (t === null) throw Error(j(409));
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
      var t = xm();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++);
      fn.splice(n, 0, e), n === 0 && Sm(e);
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
  function V1(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var s = r;
        r = function () {
          var u = jo(o);
          s.call(u);
        };
      }
      var o = By(t, r, e, 0, null, !1, !1, "", Ld);
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
        var u = jo(l);
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
          var l = jo(o);
          a.call(l);
        };
      }
      Jo(t, o, e, i);
    } else o = V1(n, t, e, i, r);
    return jo(o);
  }
  gm = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = gi(t.pendingLanes);
          n !== 0 &&
            (nc(t, n | 1), Ke(t, me()), !(H & 6) && ((Qr = me() + 500), Mn()));
        }
        break;
      case 13:
        rr(function () {
          var r = qt(e, 1);
          if (r !== null) {
            var i = Le();
            Ct(r, e, 1, i);
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
        Ct(t, e, 134217728, n);
      }
      Mc(e, 134217728);
    }
  };
  vm = function (e) {
    if (e.tag === 13) {
      var t = Tn(e),
        n = qt(e, t);
      if (n !== null) {
        var r = Le();
        Ct(n, e, t, r);
      }
      Mc(e, t);
    }
  };
  xm = function () {
    return Q;
  };
  wm = function (e, t) {
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
              if (!i) throw Error(j(90));
              Zh(r), Dl(r, i);
            }
          }
        }
        break;
      case "textarea":
        Jh(e, n);
        break;
      case "select":
        (t = n.value), t != null && Lr(e, !!n.multiple, t, !1);
    }
  };
  om = _c;
  am = rr;
  var $1 = { usingClientEntryPoint: !1, Events: [as, Pr, Go, im, sm, _c] },
    fi = {
      findFiberByHostInstance: Gn,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
    },
    I1 = {
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
        return (e = cm(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: fi.findFiberByHostInstance || L1,
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
        (Bo = Ms.inject(I1)), (Dt = Ms);
      } catch {}
  }
  rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $1;
  rt.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lc(t)) throw Error(j(200));
    return R1(e, t, null, n);
  };
  rt.createRoot = function (e, t) {
    if (!Lc(e)) throw Error(j(299));
    var n = !1,
      r = "",
      i = Uy;
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
        ? Error(j(188))
        : ((e = Object.keys(e).join(",")), Error(j(268, e)));
    return (e = cm(t)), (e = e === null ? null : e.stateNode), e;
  };
  rt.flushSync = function (e) {
    return rr(e);
  };
  rt.hydrate = function (e, t, n) {
    if (!ta(t)) throw Error(j(200));
    return na(null, e, t, !0, n);
  };
  rt.hydrateRoot = function (e, t, n) {
    if (!Lc(e)) throw Error(j(405));
    var r = (n != null && n.hydratedSources) || null,
      i = !1,
      s = "",
      o = Uy;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (i = !0),
        n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
      (t = By(t, null, e, 1, n ?? null, i, !1, s, o)),
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
    if (!ta(t)) throw Error(j(200));
    return na(null, e, t, !1, n);
  };
  rt.unmountComponentAtNode = function (e) {
    if (!ta(e)) throw Error(j(40));
    return e._reactRootContainer
      ? (rr(function () {
          na(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[Zt] = null);
          });
        }),
        !0)
      : !1;
  };
  rt.unstable_batchedUpdates = _c;
  rt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ta(n)) throw Error(j(200));
    if (e == null || e._reactInternals === void 0) throw Error(j(38));
    return na(e, t, n, !1, r);
  };
  rt.version = "18.2.0-next-9e3b772b8-20220608";
  function Hy() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy);
      } catch (e) {
        console.error(e);
      }
  }
  Hy(), (Bh.exports = rt);
  var z1 = Bh.exports,
    Vd = z1;
  (Nl.createRoot = Vd.createRoot), (Nl.hydrateRoot = Vd.hydrateRoot);
  var Wy = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
    },
    $d = Ot.createContext && Ot.createContext(Wy),
    Cn =
      (globalThis && globalThis.__assign) ||
      function () {
        return (
          (Cn =
            Object.assign ||
            function (e) {
              for (var t, n = 1, r = arguments.length; n < r; n++) {
                t = arguments[n];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }),
          Cn.apply(this, arguments)
        );
      },
    B1 =
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
  function Gy(e) {
    return (
      e &&
      e.map(function (t, n) {
        return Ot.createElement(t.tag, Cn({ key: n }, t.attr), Gy(t.child));
      })
    );
  }
  function us(e) {
    return function (t) {
      return Ot.createElement(U1, Cn({ attr: Cn({}, e.attr) }, t), Gy(e.child));
    };
  }
  function U1(e) {
    var t = function (n) {
      var r = e.attr,
        i = e.size,
        s = e.title,
        o = B1(e, ["attr", "size", "title"]),
        a = i || n.size || "1em",
        l;
      return (
        n.className && (l = n.className),
        e.className && (l = (l ? l + " " : "") + e.className),
        Ot.createElement(
          "svg",
          Cn(
            { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
            n.attr,
            r,
            o,
            {
              className: l,
              style: Cn(Cn({ color: e.color || n.color }, n.style), e.style),
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
      : t(Wy);
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
  function H1(e) {
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
  function Ky(e) {
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
    W1 = {
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
    G1 = [
      { title: "What we do", href: "/" },
      { title: "How it works", href: "/" },
      { title: "Case studies", href: "/" },
      { title: "About", href: "/" },
      { title: "Contact", href: "/" },
    ],
    K1 = "Basketball Championship Registration",
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
    ],
    Y1 = [
      { title: "University Men" },
      { title: "University Women" },
      { title: "Rotaract Men" },
      { title: "Rotaract Women" },
    ];
  function Q1() {
    return h.jsxs("a", {
      className:
        "bg-gradient-to-r from-teal-500 to-indigo-800 px-5 py-2 whitespace-nowrap absolute origin-top-right -rotate-90 rounded-tr-2xl rounded-tl-2xl right-0 top-28 -translate-x-[30px] h-[30px] flex flex-row z-20 cursor-pointer items-center",
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
        h.jsx(ra, { color: "white" }),
        h.jsx("div", {
          className: " text-[10px] ml-3 text-white",
          children: K1,
        }),
        h.jsx("div", { className: "" }),
      ],
    });
  }
  const X1 = "./assets/Sport Banner2-1329c407.png";
  function Z1() {
    return h.jsx("div", {
      className: "container px-10  mx-auto",
      children: h.jsxs("div", {
        className: "",
        children: [
          h.jsxs("div", {
            className: "",
            children: [
              h.jsx("h1", {
                className: "text-white font-medium   mt-5 mb-5 text-xl",
                children: "The Bisons League (TBL)",
              }),
              h.jsx("p", {
                className:
                  "text-[#D4D5E1] font-light text-[14px]  leading-[30px] w-[90%]",
                children:
                  "Get ready to battle it out, as teams vie for the coveted title of the Ultimate Championship of the Year! Whether you're a Rotaract club, a university powerhouse, or a force to be reckoned with, this is your platform to display the finesse that sets you apart.",
              }),
            ],
          }),
          h.jsx("div", {
            className: "scale-115",
            children: h.jsx("img", {
              src: X1,
              alt: "banner image",
              width: "100%",
            }),
          }),
        ],
      }),
    });
  }
  const Yy = S.createContext({
      transformPagePoint: (e) => e,
      isStatic: !1,
      reducedMotion: "never",
    }),
    sa = S.createContext({}),
    oa = S.createContext(null),
    aa = typeof document < "u",
    $c = aa ? S.useLayoutEffect : S.useEffect,
    Qy = S.createContext({ strict: !1 });
  function q1(e, t, n, r) {
    const { visualElement: i } = S.useContext(sa),
      s = S.useContext(Qy),
      o = S.useContext(oa),
      a = S.useContext(Yy).reducedMotion,
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
    const c = S.useRef(!!window.HandoffAppearAnimations);
    return (
      $c(() => {
        u &&
          (u.render(),
          c.current && u.animationState && u.animationState.animateChanges());
      }),
      S.useEffect(() => {
        u &&
          (u.updateFeatures(),
          !c.current && u.animationState && u.animationState.animateChanges(),
          (window.HandoffAppearAnimations = void 0),
          (c.current = !1));
      }),
      u
    );
  }
  function Fr(e) {
    return (
      typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
    );
  }
  function J1(e, t, n) {
    return S.useCallback(
      (r) => {
        r && e.mount && e.mount(r),
          t && (r ? t.mount(r) : t.unmount()),
          n && (typeof n == "function" ? n(r) : Fr(n) && (n.current = r));
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
  function Xy(e) {
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
    return S.useMemo(() => ({ initial: t, animate: n }), [zd(t), zd(n)]);
  }
  function zd(e) {
    return Array.isArray(e) ? e.join(" ") : e;
  }
  const Bd = {
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
  for (const e in Bd) Ji[e] = { isEnabled: (t) => Bd[e].some((n) => !!t[n]) };
  function nw(e) {
    for (const t in e) Ji[t] = { ...Ji[t], ...e[t] };
  }
  const Bc = S.createContext({}),
    Zy = S.createContext({}),
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
      const c = { ...S.useContext(Yy), ...a, layoutId: sw(a) },
        { isStatic: f } = c,
        d = tw(a),
        m = r(a, f);
      if (!f && aa) {
        d.visualElement = q1(i, m, c, t);
        const v = S.useContext(Zy),
          x = S.useContext(Qy).strict;
        d.visualElement && (u = d.visualElement.loadFeatures(c, x, e, v));
      }
      return S.createElement(
        sa.Provider,
        { value: d },
        u && d.visualElement
          ? S.createElement(u, { visualElement: d.visualElement, ...c })
          : null,
        n(i, a, J1(m, d.visualElement, l), m, f, d.visualElement)
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
  function qy(e, { layout: t, layoutId: n }) {
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
  const Jy = (e) => (t) => typeof t == "string" && t.startsWith(e),
    eg = Jy("--"),
    wu = Jy("var(--"),
    dw =
      /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
    pw = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
    _n = (e, t, n) => Math.min(Math.max(n, e), t),
    ur = {
      test: (e) => typeof e == "number",
      parse: parseFloat,
      transform: (e) => e,
    },
    bi = { ...ur, transform: (e) => _n(0, 1, e) },
    Rs = { ...ur, default: 1 },
    _i = (e) => Math.round(e * 1e5) / 1e5,
    ca = /(-)?([\d]*\.?[\d])+/g,
    tg =
      /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
    hw =
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
    yw = ds("vw"),
    Ud = {
      ...Rt,
      parse: (e) => Rt.parse(e) / 100,
      transform: (e) => Rt.transform(e * 100),
    },
    Hd = { ...ur, transform: Math.round },
    ng = {
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
      originX: Ud,
      originY: Ud,
      originZ: L,
      zIndex: Hd,
      fillOpacity: bi,
      strokeOpacity: bi,
      numOctaves: Hd,
    };
  function Hc(e, t, n, r) {
    const { style: i, vars: s, transform: o, transformOrigin: a } = e;
    let l = !1,
      u = !1,
      c = !0;
    for (const f in t) {
      const d = t[f];
      if (eg(f)) {
        s[f] = d;
        continue;
      }
      const m = ng[f],
        v = pw(d, m);
      if (lr.has(f)) {
        if (((l = !0), (o[f] = v), !c)) continue;
        d !== (m.default || 0) && (c = !1);
      } else f.startsWith("origin") ? ((u = !0), (a[f] = v)) : (i[f] = v);
    }
    if (
      (t.transform ||
        (l || r
          ? (i.transform = fw(e.transform, n, c, r))
          : i.transform && (i.transform = "none")),
      u)
    ) {
      const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = a;
      i.transformOrigin = `${f} ${d} ${m}`;
    }
  }
  const Wc = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {},
  });
  function rg(e, t, n) {
    for (const r in t) !Ye(t[r]) && !qy(r, n) && (e[r] = t[r]);
  }
  function gw({ transformTemplate: e }, t, n) {
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
      rg(i, r, e),
      Object.assign(i, gw(e, t, n)),
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
  function _o(e) {
    return (
      e.startsWith("while") ||
      (e.startsWith("drag") && e !== "draggable") ||
      e.startsWith("layout") ||
      e.startsWith("onTap") ||
      e.startsWith("onPan") ||
      ww.has(e)
    );
  }
  let ig = (e) => !_o(e);
  function Sw(e) {
    e && (ig = (t) => (t.startsWith("on") ? !_o(t) : e(t)));
  }
  try {
    Sw(require("@emotion/is-prop-valid").default);
  } catch {}
  function Tw(e, t, n) {
    const r = {};
    for (const i in e)
      (i === "values" && typeof e.values == "object") ||
        ((ig(i) ||
          (n === !0 && _o(i)) ||
          (!t && !_o(i)) ||
          (e.draggable && i.startsWith("onDrag"))) &&
          (r[i] = e[i]));
    return r;
  }
  function Wd(e, t, n) {
    return typeof e == "string" ? e : L.transform(t + n * e);
  }
  function Ew(e, t, n) {
    const r = Wd(t, e.x, e.width),
      i = Wd(n, e.y, e.height);
    return `${r} ${i}`;
  }
  const Cw = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    Pw = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function kw(e, t, n = 1, r = 0, i = !0) {
    e.pathLength = 1;
    const s = i ? Cw : Pw;
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
    c,
    f,
    d
  ) {
    if ((Hc(e, u, c, d), f)) {
      e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
      return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: m, style: v, dimensions: x } = e;
    m.transform && (x && (v.transform = m.transform), delete m.transform),
      x &&
        (i !== void 0 || s !== void 0 || v.transform) &&
        (v.transformOrigin = Ew(
          x,
          i !== void 0 ? i : 0.5,
          s !== void 0 ? s : 0.5
        )),
      t !== void 0 && (m.x = t),
      n !== void 0 && (m.y = n),
      r !== void 0 && (m.scale = r),
      o !== void 0 && kw(m, o, a, l, !1);
  }
  const sg = () => ({ ...Wc(), attrs: {} }),
    Kc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
  function Nw(e, t, n, r) {
    const i = S.useMemo(() => {
      const s = sg();
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
      rg(s, e.style, e), (i.style = { ...s, ...i.style });
    }
    return i;
  }
  function jw(e = !1) {
    return (n, r, i, { latestValues: s }, o) => {
      const l = (Uc(n) ? Nw : xw)(r, s, o, n),
        c = { ...Tw(r, typeof n == "string", e), ...l, ref: i },
        { children: f } = r,
        d = S.useMemo(() => (Ye(f) ? f.get() : f), [f]);
      return S.createElement(n, { ...c, children: d });
    };
  }
  const Yc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
  function og(e, { style: t, vars: n }, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n) e.style.setProperty(s, n[s]);
  }
  const ag = new Set([
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
  function lg(e, t, n, r) {
    og(e, t, void 0, r);
    for (const i in t.attrs) e.setAttribute(ag.has(i) ? i : Yc(i), t.attrs[i]);
  }
  function Qc(e, t) {
    const { style: n } = e,
      r = {};
    for (const i in n)
      (Ye(n[i]) || (t.style && Ye(t.style[i])) || qy(i, e)) && (r[i] = n[i]);
    return r;
  }
  function ug(e, t) {
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
  function cg(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()), t.current;
  }
  const Ao = (e) => Array.isArray(e),
    bw = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
    _w = (e) => (Ao(e) ? e[e.length - 1] || 0 : e);
  function to(e) {
    const t = Ye(e) ? e.get() : e;
    return bw(t) ? t.toValue() : t;
  }
  function Aw(
    { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
    r,
    i,
    s
  ) {
    const o = { latestValues: Fw(r, i, s, e), renderState: t() };
    return n && (o.mount = (a) => n(r, a, o)), o;
  }
  const fg = (e) => (t, n) => {
    const r = S.useContext(sa),
      i = S.useContext(oa),
      s = () => Aw(e, t, r, i);
    return n ? s() : cg(s);
  };
  function Fw(e, t, n, r) {
    const i = {},
      s = r(e, {});
    for (const d in s) i[d] = to(s[d]);
    let { initial: o, animate: a } = e;
    const l = ua(e),
      u = Xy(e);
    t &&
      u &&
      !l &&
      e.inherit !== !1 &&
      (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const f = c ? a : o;
    return (
      f &&
        typeof f != "boolean" &&
        !la(f) &&
        (Array.isArray(f) ? f : [f]).forEach((m) => {
          const v = Xc(e, m);
          if (!v) return;
          const { transitionEnd: x, transition: k, ...g } = v;
          for (const p in g) {
            let y = g[p];
            if (Array.isArray(y)) {
              const w = c ? y.length - 1 : 0;
              y = y[w];
            }
            y !== null && (i[p] = y);
          }
          for (const p in x) i[p] = x[p];
        }),
      i
    );
  }
  const fe = (e) => e;
  class Gd {
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
    let t = new Gd(),
      n = new Gd(),
      r = 0,
      i = !1,
      s = !1;
    const o = new WeakSet(),
      a = {
        schedule: (l, u = !1, c = !1) => {
          const f = c && i,
            d = f ? t : n;
          return u && o.add(l), d.add(l) && f && i && (r = t.order.length), l;
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
              const c = t.order[u];
              c(l), o.has(c) && (a.schedule(c), e());
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
      s = Ls.reduce((f, d) => ((f[d] = Ow(() => (n = !0))), f), {}),
      o = (f) => s[f].process(i),
      a = () => {
        const f = performance.now();
        (n = !1),
          (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, Dw), 1)),
          (i.timestamp = f),
          (i.isProcessing = !0),
          Ls.forEach(o),
          (i.isProcessing = !1),
          n && t && ((r = !1), e(a));
      },
      l = () => {
        (n = !0), (r = !0), i.isProcessing || e(a);
      };
    return {
      schedule: Ls.reduce((f, d) => {
        const m = s[d];
        return (
          (f[d] = (v, x = !1, k = !1) => (n || l(), m.schedule(v, x, k))), f
        );
      }, {}),
      cancel: (f) => Ls.forEach((d) => s[d].cancel(f)),
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
      useVisualState: fg({
        scrapeMotionValuesFromProps: ug,
        createRenderState: sg,
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
                lg(t, n);
            });
        },
      }),
    },
    Lw = {
      useVisualState: fg({
        scrapeMotionValuesFromProps: Qc,
        createRenderState: Wc,
      }),
    };
  function Vw(e, { forwardMotionProps: t = !1 }, n, r) {
    return {
      ...(Uc(e) ? Rw : Lw),
      preloadedFeatures: n,
      useRender: jw(t),
      createVisualElement: r,
      Component: e,
    };
  }
  function Wt(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
  }
  const dg = (e) =>
    e.pointerType === "mouse"
      ? typeof e.button != "number" || e.button <= 0
      : e.isPrimary !== !1;
  function fa(e, t = "page") {
    return { point: { x: e[t + "X"], y: e[t + "Y"] } };
  }
  const $w = (e) => (t) => dg(t) && e(t, fa(t));
  function Yt(e, t, n, r) {
    return Wt(e, t, $w(n), r);
  }
  const Iw = (e, t) => (n) => t(e(n)),
    Pn = (...e) => e.reduce(Iw);
  function pg(e) {
    let t = null;
    return () => {
      const n = () => {
        t = null;
      };
      return t === null ? ((t = e), n) : !1;
    };
  }
  const Kd = pg("dragHorizontal"),
    Yd = pg("dragVertical");
  function hg(e) {
    let t = !1;
    if (e === "y") t = Yd();
    else if (e === "x") t = Kd();
    else {
      const n = Kd(),
        r = Yd();
      n && r
        ? (t = () => {
            n(), r();
          })
        : (n && n(), r && r());
    }
    return t;
  }
  function mg() {
    const e = hg(!0);
    return e ? (e(), !1) : !0;
  }
  class Rn {
    constructor(t) {
      (this.isMounted = !1), (this.node = t);
    }
    update() {}
  }
  function Qd(e, t) {
    const n = "pointer" + (t ? "enter" : "leave"),
      r = "onHover" + (t ? "Start" : "End"),
      i = (s, o) => {
        if (s.type === "touch" || mg()) return;
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
      this.unmount = Pn(Qd(this.node, !0), Qd(this.node, !1));
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
      this.unmount = Pn(
        Wt(this.node.current, "focus", () => this.onFocus()),
        Wt(this.node.current, "blur", () => this.onBlur())
      );
    }
    unmount() {}
  }
  const yg = (e, t) => (t ? (e === t ? !0 : yg(e, t.parentElement)) : !1);
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
                const { onTap: u, onTapCancel: c } = this.node.getProps();
                ee.update(() => {
                  yg(this.node.current, a.target) ? u && u(a, l) : c && c(a, l);
                });
              },
              { passive: !(r.onTap || r.onPointerUp) }
            ),
            o = Yt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
              passive: !(r.onTapCancel || r.onPointerCancel),
            });
          (this.removeEndListeners = Pn(s, o)), this.startPress(t, n);
        }),
        (this.startAccessiblePress = () => {
          const t = (s) => {
              if (s.key !== "Enter" || this.isPressing) return;
              const o = (a) => {
                a.key !== "Enter" ||
                  !this.checkPressEnd() ||
                  ll("up", (l, u) => {
                    const { onTap: c } = this.node.getProps();
                    c && ee.update(() => c(l, u));
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
          this.removeAccessibleListeners = Pn(n, i);
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
        !mg()
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
      this.removeStartListeners = Pn(n, r);
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
          const { onViewportEnter: c, onViewportLeave: f } =
              this.node.getProps(),
            d = u ? c : f;
          d && d(l);
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
  function gg(e, t) {
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
  const kn = (e) => e * 1e3,
    Qt = (e) => e / 1e3,
    rS = { current: !1 },
    vg = (e) => Array.isArray(e) && typeof e[0] == "number";
  function xg(e) {
    return !!(
      !e ||
      (typeof e == "string" && wg[e]) ||
      vg(e) ||
      (Array.isArray(e) && e.every(xg))
    );
  }
  const xi = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    wg = {
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
  function Sg(e) {
    if (e) return vg(e) ? xi(e) : Array.isArray(e) ? e.map(Sg) : wg[e];
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
    const c = Sg(a);
    return (
      Array.isArray(c) && (u.easing = c),
      e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
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
  const Tg = (e, t, n) =>
      (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    oS = 1e-7,
    aS = 12;
  function lS(e, t, n, r, i) {
    let s,
      o,
      a = 0;
    do (o = t + (n - t) / 2), (s = Tg(o, r, i) - e), s > 0 ? (n = o) : (t = o);
    while (Math.abs(s) > oS && ++a < aS);
    return o;
  }
  function ps(e, t, n, r) {
    if (e === t && n === r) return fe;
    const i = (s) => lS(s, 0, 1, e, n);
    return (s) => (s === 0 || s === 1 ? s : Tg(i(s), t, r));
  }
  const uS = ps(0.42, 0, 1, 1),
    cS = ps(0, 0, 0.58, 1),
    Eg = ps(0.42, 0, 0.58, 1),
    fS = (e) => Array.isArray(e) && typeof e[0] != "number",
    Cg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
    Pg = (e) => (t) => 1 - e(1 - t),
    kg = (e) => 1 - Math.sin(Math.acos(e)),
    qc = Pg(kg),
    dS = Cg(qc),
    Ng = ps(0.33, 1.53, 0.69, 0.99),
    Jc = Pg(Ng),
    pS = Cg(Jc),
    hS = (e) =>
      (e *= 2) < 1 ? 0.5 * Jc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
    mS = {
      linear: fe,
      easeIn: uS,
      easeInOut: Eg,
      easeOut: cS,
      circIn: kg,
      circInOut: dS,
      circOut: qc,
      backIn: Jc,
      backInOut: pS,
      backOut: Ng,
      anticipate: hS,
    },
    Xd = (e) => {
      if (Array.isArray(e)) {
        Zc(e.length === 4);
        const [t, n, r, i] = e;
        return ps(t, n, r, i);
      } else if (typeof e == "string") return mS[e];
      return e;
    },
    ef = (e, t) => (n) =>
      !!(
        (fs(n) && hw.test(n) && n.startsWith(e)) ||
        (t && Object.prototype.hasOwnProperty.call(n, t))
      ),
    jg = (e, t, n) => (r) => {
      if (!fs(r)) return r;
      const [i, s, o, a] = r.match(ca);
      return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: a !== void 0 ? parseFloat(a) : 1,
      };
    },
    yS = (e) => _n(0, 255, e),
    cl = { ...ur, transform: (e) => Math.round(yS(e)) },
    Qn = {
      test: ef("rgb", "red"),
      parse: jg("red", "green", "blue"),
      transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
        "rgba(" +
        cl.transform(e) +
        ", " +
        cl.transform(t) +
        ", " +
        cl.transform(n) +
        ", " +
        _i(bi.transform(r)) +
        ")",
    };
  function gS(e) {
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
  const Tu = { test: ef("#"), parse: gS, transform: Qn.transform },
    Or = {
      test: ef("hsl", "hue"),
      parse: jg("hue", "saturation", "lightness"),
      transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
        "hsla(" +
        Math.round(e) +
        ", " +
        Rt.transform(_i(t)) +
        ", " +
        Rt.transform(_i(n)) +
        ", " +
        _i(bi.transform(r)) +
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
  function Zd(e) {
    const t = wS(e);
    let n = t.parse(e);
    return t === Or && (n = vS(n)), n;
  }
  const bg = (e, t) => {
    const n = Zd(e),
      r = Zd(t),
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
        (((n = e.match(tg)) === null || n === void 0 ? void 0 : n.length) ||
          0) >
        0
    );
  }
  const _g = { regex: dw, countKey: "Vars", token: "${v}", parse: fe },
    Ag = { regex: tg, countKey: "Colors", token: "${c}", parse: Me.parse },
    Fg = { regex: ca, countKey: "Numbers", token: "${n}", parse: ur.parse };
  function pl(e, { regex: t, countKey: n, token: r, parse: i }) {
    const s = e.tokenised.match(t);
    s &&
      ((e["num" + n] = s.length),
      (e.tokenised = e.tokenised.replace(t, r)),
      e.values.push(...s.map(i)));
  }
  function Fo(e) {
    const t = e.toString(),
      n = {
        value: t,
        tokenised: t,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0,
      };
    return n.value.includes("var(--") && pl(n, _g), pl(n, Ag), pl(n, Fg), n;
  }
  function Og(e) {
    return Fo(e).values;
  }
  function Dg(e) {
    const { values: t, numColors: n, numVars: r, tokenised: i } = Fo(e),
      s = t.length;
    return (o) => {
      let a = i;
      for (let l = 0; l < s; l++)
        l < r
          ? (a = a.replace(_g.token, o[l]))
          : l < r + n
          ? (a = a.replace(Ag.token, Me.transform(o[l])))
          : (a = a.replace(Fg.token, _i(o[l])));
      return a;
    };
  }
  const TS = (e) => (typeof e == "number" ? 0 : e);
  function ES(e) {
    const t = Og(e);
    return Dg(e)(t.map(TS));
  }
  const An = {
      test: SS,
      parse: Og,
      createTransformer: Dg,
      getAnimatableNone: ES,
    },
    Mg = (e, t) => (n) => `${n > 0 ? t : e}`;
  function Rg(e, t) {
    return typeof e == "number"
      ? (n) => ae(e, t, n)
      : Me.test(e)
      ? bg(e, t)
      : e.startsWith("var(")
      ? Mg(e, t)
      : Vg(e, t);
  }
  const Lg = (e, t) => {
      const n = [...e],
        r = n.length,
        i = e.map((s, o) => Rg(s, t[o]));
      return (s) => {
        for (let o = 0; o < r; o++) n[o] = i[o](s);
        return n;
      };
    },
    CS = (e, t) => {
      const n = { ...e, ...t },
        r = {};
      for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Rg(e[i], t[i]));
      return (i) => {
        for (const s in r) n[s] = r[s](i);
        return n;
      };
    },
    Vg = (e, t) => {
      const n = An.createTransformer(t),
        r = Fo(e),
        i = Fo(t);
      return r.numVars === i.numVars &&
        r.numColors === i.numColors &&
        r.numNumbers >= i.numNumbers
        ? Pn(Lg(r.values, i.values), n)
        : Mg(e, t);
    },
    es = (e, t, n) => {
      const r = t - e;
      return r === 0 ? 1 : (n - e) / r;
    },
    qd = (e, t) => (n) => ae(e, t, n);
  function PS(e) {
    return typeof e == "number"
      ? qd
      : typeof e == "string"
      ? Me.test(e)
        ? bg
        : Vg
      : Array.isArray(e)
      ? Lg
      : typeof e == "object"
      ? CS
      : qd;
  }
  function kS(e, t, n) {
    const r = [],
      i = n || PS(e[0]),
      s = e.length - 1;
    for (let o = 0; o < s; o++) {
      let a = i(e[o], e[o + 1]);
      if (t) {
        const l = Array.isArray(t) ? t[o] || fe : t;
        a = Pn(l, a);
      }
      r.push(a);
    }
    return r;
  }
  function $g(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
    const s = e.length;
    if ((Zc(s === t.length), s === 1)) return () => t[0];
    e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const o = kS(t, r, i),
      a = o.length,
      l = (u) => {
        let c = 0;
        if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
        const f = es(e[c], e[c + 1], u);
        return o[c](f);
      };
    return n ? (u) => l(_n(e[0], e[s - 1], u)) : l;
  }
  function NS(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
      const i = es(0, t, r);
      e.push(ae(n, 1, i));
    }
  }
  function jS(e) {
    const t = [0];
    return NS(t, e.length - 1), t;
  }
  function bS(e, t) {
    return e.map((n) => n * t);
  }
  function _S(e, t) {
    return e.map(() => t || Eg).splice(0, e.length - 1);
  }
  function Oo({
    duration: e = 300,
    keyframes: t,
    times: n,
    ease: r = "easeInOut",
  }) {
    const i = fS(r) ? r.map(Xd) : Xd(r),
      s = { done: !1, value: t[0] },
      o = bS(n && n.length === t.length ? n : jS(t), e),
      a = $g(o, t, { ease: Array.isArray(i) ? i : _S(t, i) });
    return {
      calculatedDuration: e,
      next: (l) => ((s.value = a(l)), (s.done = l >= e), s),
    };
  }
  function Ig(e, t) {
    return t ? e * (1e3 / t) : 0;
  }
  const AS = 5;
  function zg(e, t, n) {
    const r = Math.max(t - AS, 0);
    return Ig(n - e(r), t - r);
  }
  const hl = 0.001,
    FS = 0.01,
    Jd = 10,
    OS = 0.05,
    DS = 1;
  function MS({
    duration: e = 800,
    bounce: t = 0.25,
    velocity: n = 0,
    mass: r = 1,
  }) {
    let i, s;
    nS(e <= kn(Jd));
    let o = 1 - t;
    (o = _n(OS, DS, o)),
      (e = _n(FS, Jd, Qt(e))),
      o < 1
        ? ((i = (u) => {
            const c = u * o,
              f = c * e,
              d = c - n,
              m = Eu(u, o),
              v = Math.exp(-f);
            return hl - (d / m) * v;
          }),
          (s = (u) => {
            const f = u * o * e,
              d = f * n + n,
              m = Math.pow(o, 2) * Math.pow(u, 2) * e,
              v = Math.exp(-f),
              x = Eu(Math.pow(u, 2), o);
            return ((-i(u) + hl > 0 ? -1 : 1) * ((d - m) * v)) / x;
          }))
        : ((i = (u) => {
            const c = Math.exp(-u * e),
              f = (u - n) * e + 1;
            return -hl + c * f;
          }),
          (s = (u) => {
            const c = Math.exp(-u * e),
              f = (n - u) * (e * e);
            return c * f;
          }));
    const a = 5 / e,
      l = LS(i, s, a);
    if (((e = kn(e)), isNaN(l)))
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
  function Eu(e, t) {
    return e * Math.sqrt(1 - t * t);
  }
  const VS = ["duration", "bounce"],
    $S = ["stiffness", "damping", "mass"];
  function ep(e, t) {
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
    if (!ep(e, $S) && ep(e, VS)) {
      const n = MS(e);
      (t = { ...t, ...n, velocity: 0, mass: 1 }),
        (t.isResolvedFromDuration = !0);
    }
    return t;
  }
  function Bg({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
    const i = e[0],
      s = e[e.length - 1],
      o = { done: !1, value: i },
      {
        stiffness: a,
        damping: l,
        mass: u,
        velocity: c,
        duration: f,
        isResolvedFromDuration: d,
      } = IS(r),
      m = c ? -Qt(c) : 0,
      v = l / (2 * Math.sqrt(a * u)),
      x = s - i,
      k = Qt(Math.sqrt(a / u)),
      g = Math.abs(x) < 5;
    n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
    let p;
    if (v < 1) {
      const y = Eu(k, v);
      p = (w) => {
        const C = Math.exp(-v * k * w);
        return (
          s -
          C * (((m + v * k * x) / y) * Math.sin(y * w) + x * Math.cos(y * w))
        );
      };
    } else if (v === 1) p = (y) => s - Math.exp(-k * y) * (x + (m + k * x) * y);
    else {
      const y = k * Math.sqrt(v * v - 1);
      p = (w) => {
        const C = Math.exp(-v * k * w),
          P = Math.min(y * w, 300);
        return (
          s - (C * ((m + v * k * x) * Math.sinh(P) + y * x * Math.cosh(P))) / y
        );
      };
    }
    return {
      calculatedDuration: (d && f) || null,
      next: (y) => {
        const w = p(y);
        if (d) o.done = y >= f;
        else {
          let C = m;
          y !== 0 && (v < 1 ? (C = zg(p, y, w)) : (C = 0));
          const P = Math.abs(C) <= n,
            E = Math.abs(s - w) <= t;
          o.done = P && E;
        }
        return (o.value = o.done ? s : w), o;
      },
    };
  }
  function tp({
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
    restSpeed: c,
  }) {
    const f = e[0],
      d = { done: !1, value: f },
      m = (N) => (a !== void 0 && N < a) || (l !== void 0 && N > l),
      v = (N) =>
        a === void 0
          ? l
          : l === void 0 || Math.abs(a - N) < Math.abs(l - N)
          ? a
          : l;
    let x = n * t;
    const k = f + x,
      g = o === void 0 ? k : o(k);
    g !== k && (x = g - f);
    const p = (N) => -x * Math.exp(-N / r),
      y = (N) => g + p(N),
      w = (N) => {
        const O = p(N),
          D = y(N);
        (d.done = Math.abs(O) <= u), (d.value = d.done ? g : D);
      };
    let C, P;
    const E = (N) => {
      m(d.value) &&
        ((C = N),
        (P = Bg({
          keyframes: [d.value, v(d.value)],
          velocity: zg(y, N, d.value),
          damping: i,
          stiffness: s,
          restDelta: u,
          restSpeed: c,
        })));
    };
    return (
      E(0),
      {
        calculatedDuration: null,
        next: (N) => {
          let O = !1;
          return (
            !P && C === void 0 && ((O = !0), w(N), E(N)),
            C !== void 0 && N > C ? P.next(N - C) : (!O && w(N), d)
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
    np = 2e4;
  function rp(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < np; ) (t += n), (r = e.next(t));
    return t >= np ? 1 / 0 : t;
  }
  const BS = { decay: tp, inertia: tp, tween: Oo, keyframes: Oo, spring: Bg };
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
    onComplete: c,
    onUpdate: f,
    ...d
  }) {
    let m = 1,
      v = !1,
      x,
      k;
    const g = () => {
      k = new Promise((R) => {
        x = R;
      });
    };
    g();
    let p;
    const y = BS[i] || Oo;
    let w;
    y !== Oo &&
      typeof r[0] != "number" &&
      ((w = $g([0, 100], r, { clamp: !1 })), (r = [0, 100]));
    const C = y({ ...d, keyframes: r });
    let P;
    a === "mirror" &&
      (P = y({
        ...d,
        keyframes: [...r].reverse(),
        velocity: -(d.velocity || 0),
      }));
    let E = "idle",
      N = null,
      O = null,
      D = null;
    C.calculatedDuration === null && s && (C.calculatedDuration = rp(C));
    const { calculatedDuration: $ } = C;
    let ve = 1 / 0,
      U = 1 / 0;
    $ !== null && ((ve = $ + o), (U = ve * (s + 1) - o));
    let G = 0;
    const Z = (R) => {
        if (O === null) return;
        m > 0 && (O = Math.min(O, R)),
          m < 0 && (O = Math.min(R - U / m, O)),
          N !== null ? (G = N) : (G = Math.round(R - O) * m);
        const W = G - t * (m >= 0 ? 1 : -1),
          Nt = m >= 0 ? W < 0 : W > U;
        (G = Math.max(W, 0)), E === "finished" && N === null && (G = U);
        let ze = G,
          Qe = C;
        if (s) {
          const yr = G / ve;
          let Vn = Math.floor(yr),
            gt = yr % 1;
          !gt && yr >= 1 && (gt = 1),
            gt === 1 && Vn--,
            (Vn = Math.min(Vn, s + 1));
          const vs = !!(Vn % 2);
          vs &&
            (a === "reverse"
              ? ((gt = 1 - gt), o && (gt -= o / ve))
              : a === "mirror" && (Qe = P));
          let ri = _n(0, 1, gt);
          G > U && (ri = a === "reverse" && vs ? 1 : 0), (ze = ri * ve);
        }
        const _e = Nt ? { done: !1, value: r[0] } : Qe.next(ze);
        w && (_e.value = w(_e.value));
        let { done: yt } = _e;
        !Nt && $ !== null && (yt = m >= 0 ? G >= U : G <= 0);
        const gs = N === null && (E === "finished" || (E === "running" && yt));
        return f && f(_e.value), gs && b(), _e;
      },
      Ie = () => {
        p && p.stop(), (p = void 0);
      },
      ot = () => {
        (E = "idle"), Ie(), x(), g(), (O = D = null);
      },
      b = () => {
        (E = "finished"), c && c(), Ie(), x();
      },
      V = () => {
        if (v) return;
        p || (p = n(Z));
        const R = p.now();
        l && l(),
          N !== null ? (O = R - N) : (!O || E === "finished") && (O = R),
          E === "finished" && g(),
          (D = O),
          (N = null),
          (E = "running"),
          p.start();
      };
    e && V();
    const I = {
      then(R, W) {
        return k.then(R, W);
      },
      get time() {
        return Qt(G);
      },
      set time(R) {
        (R = kn(R)),
          (G = R),
          N !== null || !p || m === 0 ? (N = R) : (O = p.now() - R / m);
      },
      get duration() {
        const R = C.calculatedDuration === null ? rp(C) : C.calculatedDuration;
        return Qt(R);
      },
      get speed() {
        return m;
      },
      set speed(R) {
        R === m || !p || ((m = R), (I.time = Qt(G)));
      },
      get state() {
        return E;
      },
      play: V,
      pause: () => {
        (E = "paused"), (N = G);
      },
      stop: () => {
        (v = !0), E !== "idle" && ((E = "idle"), u && u(), ot());
      },
      cancel: () => {
        D !== null && Z(D), ot();
      },
      complete: () => {
        E = "finished";
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
      t.type === "spring" || e === "backgroundColor" || !xg(t.ease);
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
    let { keyframes: c, duration: f = 300, ease: d, times: m } = i;
    if (KS(t, i)) {
      const p = Do({ ...i, repeat: 0, delay: 0 });
      let y = { done: !1, value: c[0] };
      const w = [];
      let C = 0;
      for (; !y.done && C < GS; ) (y = p.sample(C)), w.push(y.value), (C += Vs);
      (m = void 0), (c = w), (f = C - Vs), (d = "linear");
    }
    const v = iS(e.owner.current, t, c, {
      ...i,
      duration: f,
      ease: d,
      times: m,
    });
    i.syncStart &&
      (v.startTime = Te.isProcessing
        ? Te.timestamp
        : document.timeline
        ? document.timeline.currentTime
        : performance.now());
    const x = () => v.cancel(),
      k = () => {
        ee.update(x), a(), u();
      };
    return (
      (v.onfinish = () => {
        e.set(sS(c, i)), r && r(), k();
      }),
      {
        then(p, y) {
          return l.then(p, y);
        },
        attachTimeline(p) {
          return (v.timeline = p), (v.onfinish = null), fe;
        },
        get time() {
          return Qt(v.currentTime || 0);
        },
        set time(p) {
          v.currentTime = kn(p);
        },
        get speed() {
          return v.playbackRate;
        },
        set speed(p) {
          v.playbackRate = p;
        },
        get duration() {
          return Qt(f);
        },
        play: () => {
          o || (v.play(), en(x));
        },
        pause: () => v.pause(),
        stop: () => {
          if (((o = !0), v.playState === "idle")) return;
          const { currentTime: p } = v;
          if (p) {
            const y = Do({ ...i, autoplay: !1 });
            e.setWithVelocity(y.sample(p - Vs).value, y.sample(p).value, Vs);
          }
          k();
        },
        complete: () => v.finish(),
        cancel: k,
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
    Cu = (e, t) =>
      e === "zIndex"
        ? !1
        : !!(
            typeof t == "number" ||
            Array.isArray(t) ||
            (typeof t == "string" &&
              (An.test(t) || t === "0") &&
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
    Pu = {
      ...An,
      getAnimatableNone: (e) => {
        const t = e.match(rT);
        return t ? t.map(nT).join(" ") : e;
      },
    },
    iT = {
      ...ng,
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
      filter: Pu,
      WebkitFilter: Pu,
    },
    tf = (e) => iT[e];
  function Ug(e, t) {
    let n = tf(e);
    return (
      n !== Pu && (n = An),
      n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
    );
  }
  const Hg = (e) => /^0[^.\s]+$/.test(e);
  function sT(e) {
    if (typeof e == "number") return e === 0;
    if (e !== null) return e === "none" || e === "0" || Hg(e);
  }
  function oT(e, t, n, r) {
    const i = Cu(t, n);
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
        const c = l[u];
        s[c] = Ug(t, a);
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
    ...c
  }) {
    return !!Object.keys(c).length;
  }
  function Wg(e, t) {
    return e[t] || e.default || e;
  }
  const nf =
    (e, t, n, r = {}) =>
    (i) => {
      const s = Wg(r, e) || {},
        o = s.delay || r.delay || 0;
      let { elapsed: a = 0 } = r;
      a = a - kn(o);
      const l = oT(t, e, n, s),
        u = l[0],
        c = l[l.length - 1],
        f = Cu(e, u),
        d = Cu(e, c);
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
        m.duration && (m.duration = kn(m.duration)),
        m.repeatDelay && (m.repeatDelay = kn(m.repeatDelay)),
        !f || !d || rS.current || s.type === !1)
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
  const Gg = (e) => /^\-?\d*\.?\d+$/.test(e);
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
        ? Ig(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
  const Kg = (e) => (t) => t.test(e),
    cT = { test: (e) => e === "auto", parse: (e) => e },
    Yg = [ur, L, Rt, sn, yw, mw, cT],
    di = (e) => Yg.find(Kg(e)),
    fT = [...Yg, Me, An],
    dT = (e) => fT.find(Kg(e));
  function pT(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Xr(n));
  }
  function hT(e, t) {
    const n = da(e, t);
    let {
      transitionEnd: r = {},
      transition: i = {},
      ...s
    } = n ? e.makeTargetAnimatable(n, !1) : {};
    s = { ...s, ...r };
    for (const o in s) {
      const a = _w(s[o]);
      pT(e, o, a);
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
        let c = null;
        Array.isArray(u) && (c = u[0]),
          c === null &&
            (c =
              (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
                null && i !== void 0
                ? i
                : t[l]),
          c != null &&
            (typeof c == "string" && (Gg(c) || Hg(c))
              ? (c = parseFloat(c))
              : !dT(c) && An.test(u) && (c = Ug(l, u)),
            e.addValue(l, Xr(c, { owner: e })),
            n[l] === void 0 && (n[l] = c),
            c !== null && e.setBaseTarget(l, c));
      }
  }
  function yT(e, t) {
    return t ? (t[e] || t.default || t).from : void 0;
  }
  function gT(e, t, n) {
    const r = {};
    for (const i in e) {
      const s = yT(i, t);
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
  function Qg(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
    let {
      transition: s = e.getDefaultTransition(),
      transitionEnd: o,
      ...a
    } = e.makeTargetAnimatable(t);
    const l = e.getValue("willChange");
    r && (s = r);
    const u = [],
      c = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
      const d = e.getValue(f),
        m = a[f];
      if (!d || m === void 0 || (c && vT(c, f))) continue;
      const v = { delay: n, elapsed: 0, ...s };
      if (window.HandoffAppearAnimations && !d.hasAnimated) {
        const k = e.getProps()[tS];
        k &&
          ((v.elapsed = window.HandoffAppearAnimations(k, f, d, ee)),
          (v.syncStart = !0));
      }
      d.start(
        nf(f, d, m, e.shouldReduceMotion && lr.has(f) ? { type: !1 } : v)
      );
      const x = d.animation;
      Mo(l) && (l.add(f), x.then(() => l.remove(f))), u.push(x);
    }
    return (
      o &&
        Promise.all(u).then(() => {
          o && hT(e, o);
        }),
      u
    );
  }
  function ku(e, t, n = {}) {
    const r = da(e, t, n.custom);
    let { transition: i = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(Qg(e, r, n)) : () => Promise.resolve(),
      o =
        e.variantChildren && e.variantChildren.size
          ? (l = 0) => {
              const {
                delayChildren: u = 0,
                staggerChildren: c,
                staggerDirection: f,
              } = i;
              return xT(e, t, u + l, c, f, n);
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
        .forEach((u, c) => {
          u.notify("AnimationStart", t),
            o.push(
              ku(u, t, { ...s, delay: n + l(c) }).then(() =>
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
      const i = t.map((s) => ku(e, s, n));
      r = Promise.all(i);
    } else if (typeof t == "string") r = ku(e, t, n);
    else {
      const i = typeof t == "function" ? da(e, t, n.custom) : t;
      r = Promise.all(Qg(e, i, n));
    }
    return r.then(() => e.notify("AnimationComplete", t));
  }
  const TT = [...Ic].reverse(),
    ET = Ic.length;
  function CT(e) {
    return (t) =>
      Promise.all(t.map(({ animation: n, options: r }) => ST(e, n, r)));
  }
  function PT(e) {
    let t = CT(e);
    const n = NT();
    let r = !0;
    const i = (l, u) => {
      const c = da(e, u);
      if (c) {
        const { transition: f, transitionEnd: d, ...m } = c;
        l = { ...l, ...m, ...d };
      }
      return l;
    };
    function s(l) {
      t = l(e);
    }
    function o(l, u) {
      const c = e.getProps(),
        f = e.getVariantContext(!0) || {},
        d = [],
        m = new Set();
      let v = {},
        x = 1 / 0;
      for (let g = 0; g < ET; g++) {
        const p = TT[g],
          y = n[p],
          w = c[p] !== void 0 ? c[p] : f[p],
          C = qi(w),
          P = p === u ? y.isActive : null;
        P === !1 && (x = g);
        let E = w === f[p] && w !== c[p] && C;
        if (
          (E && r && e.manuallyAnimateOnMount && (E = !1),
          (y.protectedKeys = { ...v }),
          (!y.isActive && P === null) ||
            (!w && !y.prevProp) ||
            la(w) ||
            typeof w == "boolean")
        )
          continue;
        const N = kT(y.prevProp, w);
        let O = N || (p === u && y.isActive && !E && C) || (g > x && C);
        const D = Array.isArray(w) ? w : [w];
        let $ = D.reduce(i, {});
        P === !1 && ($ = {});
        const { prevResolvedValues: ve = {} } = y,
          U = { ...ve, ...$ },
          G = (Z) => {
            (O = !0), m.delete(Z), (y.needsAnimating[Z] = !0);
          };
        for (const Z in U) {
          const Ie = $[Z],
            ot = ve[Z];
          v.hasOwnProperty(Z) ||
            (Ie !== ot
              ? Ao(Ie) && Ao(ot)
                ? !gg(Ie, ot) || N
                  ? G(Z)
                  : (y.protectedKeys[Z] = !0)
                : Ie !== void 0
                ? G(Z)
                : m.add(Z)
              : Ie !== void 0 && m.has(Z)
              ? G(Z)
              : (y.protectedKeys[Z] = !0));
        }
        (y.prevProp = w),
          (y.prevResolvedValues = $),
          y.isActive && (v = { ...v, ...$ }),
          r && e.blockInitialAnimation && (O = !1),
          O &&
            !E &&
            d.push(
              ...D.map((Z) => ({ animation: Z, options: { type: p, ...l } }))
            );
      }
      if (m.size) {
        const g = {};
        m.forEach((p) => {
          const y = e.getBaseTarget(p);
          y !== void 0 && (g[p] = y);
        }),
          d.push({ animation: g });
      }
      let k = !!d.length;
      return (
        r && c.initial === !1 && !e.manuallyAnimateOnMount && (k = !1),
        (r = !1),
        k ? t(d) : Promise.resolve()
      );
    }
    function a(l, u, c) {
      var f;
      if (n[l].isActive === u) return Promise.resolve();
      (f = e.variantChildren) === null ||
        f === void 0 ||
        f.forEach((m) => {
          var v;
          return (v = m.animationState) === null || v === void 0
            ? void 0
            : v.setActive(l, u);
        }),
        (n[l].isActive = u);
      const d = o(c, l);
      for (const m in n) n[m].protectedKeys = {};
      return d;
    }
    return {
      animateChanges: o,
      setActive: a,
      setAnimateFunction: s,
      getState: () => n,
    };
  }
  function kT(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !gg(t, e) : !1;
  }
  function $n(e = !1) {
    return {
      isActive: e,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
    };
  }
  function NT() {
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
  class jT extends Rn {
    constructor(t) {
      super(t), t.animationState || (t.animationState = PT(t));
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
  class _T extends Rn {
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
  const AT = { animation: { Feature: jT }, exit: { Feature: _T } },
    ip = (e, t) => Math.abs(e - t);
  function FT(e, t) {
    const n = ip(e.x, t.x),
      r = ip(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  class Xg {
    constructor(t, n, { transformPagePoint: r } = {}) {
      if (
        ((this.startEvent = null),
        (this.lastMoveEvent = null),
        (this.lastMoveEventInfo = null),
        (this.handlers = {}),
        (this.updatePoint = () => {
          if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
          const u = yl(this.lastMoveEventInfo, this.history),
            c = this.startEvent !== null,
            f = FT(u.offset, { x: 0, y: 0 }) >= 3;
          if (!c && !f) return;
          const { point: d } = u,
            { timestamp: m } = Te;
          this.history.push({ ...d, timestamp: m });
          const { onStart: v, onMove: x } = this.handlers;
          c ||
            (v && v(this.lastMoveEvent, u),
            (this.startEvent = this.lastMoveEvent)),
            x && x(this.lastMoveEvent, u);
        }),
        (this.handlePointerMove = (u, c) => {
          (this.lastMoveEvent = u),
            (this.lastMoveEventInfo = ml(c, this.transformPagePoint)),
            ee.update(this.updatePoint, !0);
        }),
        (this.handlePointerUp = (u, c) => {
          if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
            return;
          const { onEnd: f, onSessionEnd: d } = this.handlers,
            m = yl(
              u.type === "pointercancel"
                ? this.lastMoveEventInfo
                : ml(c, this.transformPagePoint),
              this.history
            );
          this.startEvent && f && f(u, m), d && d(u, m);
        }),
        !dg(t))
      )
        return;
      (this.handlers = n), (this.transformPagePoint = r);
      const i = fa(t),
        s = ml(i, this.transformPagePoint),
        { point: o } = s,
        { timestamp: a } = Te;
      this.history = [{ ...o, timestamp: a }];
      const { onSessionStart: l } = n;
      l && l(t, yl(s, this.history)),
        (this.removeListeners = Pn(
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
  function sp(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
  }
  function yl({ point: e }, t) {
    return {
      point: e,
      delta: sp(e, Zg(t)),
      offset: sp(e, OT(t)),
      velocity: DT(t, 0.1),
    };
  }
  function OT(e) {
    return e[0];
  }
  function Zg(e) {
    return e[e.length - 1];
  }
  function DT(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
      r = null;
    const i = Zg(e);
    for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > kn(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    const s = Qt(i.timestamp - r.timestamp);
    if (s === 0) return { x: 0, y: 0 };
    const o = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
  }
  function nt(e) {
    return e.max - e.min;
  }
  function Nu(e, t = 0, n = 0.01) {
    return Math.abs(e - t) <= n;
  }
  function op(e, t, n, r = 0.5) {
    (e.origin = r),
      (e.originPoint = ae(t.min, t.max, e.origin)),
      (e.scale = nt(n) / nt(t)),
      (Nu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
      (e.translate = ae(n.min, n.max, e.origin) - e.originPoint),
      (Nu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
  }
  function Ai(e, t, n, r) {
    op(e.x, t.x, n.x, r ? r.originX : void 0),
      op(e.y, t.y, n.y, r ? r.originY : void 0);
  }
  function ap(e, t, n) {
    (e.min = n.min + t.min), (e.max = e.min + nt(t));
  }
  function MT(e, t, n) {
    ap(e.x, t.x, n.x), ap(e.y, t.y, n.y);
  }
  function lp(e, t, n) {
    (e.min = t.min - n.min), (e.max = e.min + nt(t));
  }
  function Fi(e, t, n) {
    lp(e.x, t.x, n.x), lp(e.y, t.y, n.y);
  }
  function RT(e, { min: t, max: n }, r) {
    return (
      t !== void 0 && e < t
        ? (e = r ? ae(t, e, r.min) : Math.max(e, t))
        : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)),
      e
    );
  }
  function up(e, t, n) {
    return {
      min: t !== void 0 ? e.min + t : void 0,
      max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
    };
  }
  function LT(e, { top: t, left: n, bottom: r, right: i }) {
    return { x: up(e.x, n, i), y: up(e.y, t, r) };
  }
  function cp(e, t) {
    let n = t.min - e.min,
      r = t.max - e.max;
    return (
      t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r }
    );
  }
  function VT(e, t) {
    return { x: cp(e.x, t.x), y: cp(e.y, t.y) };
  }
  function $T(e, t) {
    let n = 0.5;
    const r = nt(e),
      i = nt(t);
    return (
      i > r
        ? (n = es(t.min, t.max - r, e.min))
        : r > i && (n = es(e.min, e.max - i, t.min)),
      _n(0, 1, n)
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
  const ju = 0.35;
  function zT(e = ju) {
    return (
      e === !1 ? (e = 0) : e === !0 && (e = ju),
      { x: fp(e, "left", "right"), y: fp(e, "top", "bottom") }
    );
  }
  function fp(e, t, n) {
    return { min: dp(e, t), max: dp(e, n) };
  }
  function dp(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
  }
  const pp = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    Dr = () => ({ x: pp(), y: pp() }),
    hp = () => ({ min: 0, max: 0 }),
    ye = () => ({ x: hp(), y: hp() });
  function _t(e) {
    return [e("x"), e("y")];
  }
  function qg({ top: e, left: t, right: n, bottom: r }) {
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
  function gl(e) {
    return e === void 0 || e === 1;
  }
  function bu({ scale: e, scaleX: t, scaleY: n }) {
    return !gl(e) || !gl(t) || !gl(n);
  }
  function Un(e) {
    return bu(e) || Jg(e) || e.z || e.rotate || e.rotateX || e.rotateY;
  }
  function Jg(e) {
    return mp(e.x) || mp(e.y);
  }
  function mp(e) {
    return e && e !== "0%";
  }
  function Ro(e, t, n) {
    const r = e - n,
      i = t * r;
    return n + i;
  }
  function yp(e, t, n, r, i) {
    return i !== void 0 && (e = Ro(e, i, r)), Ro(e, n, r) + t;
  }
  function _u(e, t = 0, n = 1, r, i) {
    (e.min = yp(e.min, t, n, r, i)), (e.max = yp(e.max, t, n, r, i));
  }
  function e0(e, { x: t, y: n }) {
    _u(e.x, t.translate, t.scale, t.originPoint),
      _u(e.y, n.translate, n.scale, n.originPoint);
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
        o && ((t.x *= o.x.scale), (t.y *= o.y.scale), e0(e, o)),
        r && Un(s.latestValues) && Mr(e, s.latestValues));
    }
    (t.x = gp(t.x)), (t.y = gp(t.y));
  }
  function gp(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
      ? e
      : 1;
  }
  function un(e, t) {
    (e.min = e.min + t), (e.max = e.max + t);
  }
  function vp(e, t, [n, r, i]) {
    const s = t[i] !== void 0 ? t[i] : 0.5,
      o = ae(e.min, e.max, s);
    _u(e, t[n], t[r], o, t.scale);
  }
  const WT = ["x", "scaleX", "originX"],
    GT = ["y", "scaleY", "originY"];
  function Mr(e, t) {
    vp(e.x, t, WT), vp(e.y, t, GT);
  }
  function t0(e, t) {
    return qg(UT(e.getBoundingClientRect(), t));
  }
  function KT(e, t, n) {
    const r = t0(e, n),
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
        (this.elastic = ye()),
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
            drag: c,
            dragPropagation: f,
            onDragStart: d,
          } = this.getProps();
          if (
            c &&
            !f &&
            (this.openGlobalLock && this.openGlobalLock(),
            (this.openGlobalLock = hg(c)),
            !this.openGlobalLock)
          )
            return;
          (this.isDragging = !0),
            (this.currentDirection = null),
            this.resolveConstraints(),
            this.visualElement.projection &&
              ((this.visualElement.projection.isAnimationBlocked = !0),
              (this.visualElement.projection.target = void 0)),
            _t((v) => {
              let x = this.getAxisMotionValue(v).get() || 0;
              if (Rt.test(x)) {
                const { projection: k } = this.visualElement;
                if (k && k.layout) {
                  const g = k.layout.layoutBox[v];
                  g && (x = nt(g) * (parseFloat(x) / 100));
                }
              }
              this.originPoint[v] = x;
            }),
            d && ee.update(() => d(l, u), !1, !0);
          const { animationState: m } = this.visualElement;
          m && m.setActive("whileDrag", !0);
        },
        o = (l, u) => {
          const {
            dragPropagation: c,
            dragDirectionLock: f,
            onDirectionLock: d,
            onDrag: m,
          } = this.getProps();
          if (!c && !this.openGlobalLock) return;
          const { offset: v } = u;
          if (f && this.currentDirection === null) {
            (this.currentDirection = XT(v)),
              this.currentDirection !== null && d && d(this.currentDirection);
            return;
          }
          this.updateAxis("x", u.point, v),
            this.updateAxis("y", u.point, v),
            this.visualElement.render(),
            m && m(l, u);
        },
        a = (l, u) => this.stop(l, u);
      this.panSession = new Xg(
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
      t && Fr(t)
        ? this.constraints || (this.constraints = this.resolveRefConstraints())
        : t && r
        ? (this.constraints = LT(r.layoutBox, t))
        : (this.constraints = !1),
        (this.elastic = zT(n)),
        i !== this.constraints &&
          r &&
          this.constraints &&
          !this.hasMutatedConstraints &&
          _t((s) => {
            this.getAxisMotionValue(s) &&
              (this.constraints[s] = IT(r.layoutBox[s], this.constraints[s]));
          });
    }
    resolveRefConstraints() {
      const { dragConstraints: t, onMeasureDragConstraints: n } =
        this.getProps();
      if (!t || !Fr(t)) return !1;
      const r = t.current,
        { projection: i } = this.visualElement;
      if (!i || !i.layout) return !1;
      const s = KT(r, i.root, this.visualElement.getTransformPagePoint());
      let o = VT(i.layout.layoutBox, s);
      if (n) {
        const a = n(BT(o));
        (this.hasMutatedConstraints = !!a), a && (o = qg(a));
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
        u = _t((c) => {
          if (!$s(c, n, this.currentDirection)) return;
          let f = (l && l[c]) || {};
          o && (f = { min: 0, max: 0 });
          const d = i ? 200 : 1e6,
            m = i ? 40 : 1e7,
            v = {
              type: "inertia",
              velocity: r ? t[c] : 0,
              bounceStiffness: d,
              bounceDamping: m,
              timeConstant: 750,
              restDelta: 1,
              restSpeed: 10,
              ...s,
              ...f,
            };
          return this.startAxisValueAnimation(c, v);
        });
      return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
      const r = this.getAxisMotionValue(t);
      return r.start(nf(t, r, 0, n));
    }
    stopAnimation() {
      _t((t) => this.getAxisMotionValue(t).stop());
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
      _t((n) => {
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
      if (!Fr(n) || !r || !this.constraints) return;
      this.stopAnimation();
      const i = { x: 0, y: 0 };
      _t((o) => {
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
        _t((o) => {
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
          const { drag: u, dragListener: c = !0 } = this.getProps();
          u && c && this.start(l);
        }),
        r = () => {
          const { dragConstraints: l } = this.getProps();
          Fr(l) && (this.constraints = this.resolveRefConstraints());
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
              (_t((c) => {
                const f = this.getAxisMotionValue(c);
                f &&
                  ((this.originPoint[c] += l[c].translate),
                  f.set(f.get() + l[c].translate));
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
          dragElastic: o = ju,
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
  const xp = (e) => (t, n) => {
    e && ee.update(() => e(t, n));
  };
  class qT extends Rn {
    constructor() {
      super(...arguments), (this.removePointerDownListener = fe);
    }
    onPointerDown(t) {
      this.session = new Xg(t, this.createPanHandlers(), {
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
        onSessionStart: xp(t),
        onStart: xp(n),
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
  function wp(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
  }
  const pi = {
      correct: (e, t) => {
        if (!t.target) return e;
        if (typeof e == "string")
          if (L.test(e)) e = parseFloat(e);
          else return e;
        const n = wp(e, t.target.x),
          r = wp(e, t.target.y);
        return `${n}% ${r}%`;
      },
    },
    eE = {
      correct: (e, { treeScale: t, projectionDelta: n }) => {
        const r = e,
          i = An.parse(e);
        if (i.length > 5) return r;
        const s = An.createTransformer(e),
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
  class tE extends Ot.Component {
    componentDidMount() {
      const {
          visualElement: t,
          layoutGroup: n,
          switchLayoutGroup: r,
          layoutId: i,
        } = this.props,
        { projection: s } = t;
      lw(nE),
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
  function n0(e) {
    const [t, n] = JT(),
      r = S.useContext(Bc);
    return Ot.createElement(tE, {
      ...e,
      layoutGroup: r,
      switchLayoutGroup: S.useContext(Zy),
      isPresent: t,
      safeToRemove: n,
    });
  }
  const nE = {
      borderRadius: {
        ...pi,
        applyTo: [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ],
      },
      borderTopLeftRadius: pi,
      borderTopRightRadius: pi,
      borderBottomLeftRadius: pi,
      borderBottomRightRadius: pi,
      boxShadow: eE,
    },
    r0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    rE = r0.length,
    Sp = (e) => (typeof e == "string" ? parseFloat(e) : e),
    Tp = (e) => typeof e == "number" || L.test(e);
  function iE(e, t, n, r, i, s) {
    i
      ? ((e.opacity = ae(0, n.opacity !== void 0 ? n.opacity : 1, sE(r))),
        (e.opacityExit = ae(t.opacity !== void 0 ? t.opacity : 1, 0, oE(r))))
      : s &&
        (e.opacity = ae(
          t.opacity !== void 0 ? t.opacity : 1,
          n.opacity !== void 0 ? n.opacity : 1,
          r
        ));
    for (let o = 0; o < rE; o++) {
      const a = `border${r0[o]}Radius`;
      let l = Ep(t, a),
        u = Ep(n, a);
      if (l === void 0 && u === void 0) continue;
      l || (l = 0),
        u || (u = 0),
        l === 0 || u === 0 || Tp(l) === Tp(u)
          ? ((e[a] = Math.max(ae(Sp(l), Sp(u), r), 0)),
            (Rt.test(u) || Rt.test(l)) && (e[a] += "%"))
          : (e[a] = u);
    }
    (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
  }
  function Ep(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
  }
  const sE = i0(0, 0.5, qc),
    oE = i0(0.5, 0.95, fe);
  function i0(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(es(e, t, r)));
  }
  function Cp(e, t) {
    (e.min = t.min), (e.max = t.max);
  }
  function at(e, t) {
    Cp(e.x, t.x), Cp(e.y, t.y);
  }
  function Pp(e, t, n, r, i) {
    return (
      (e -= t), (e = Ro(e, 1 / n, r)), i !== void 0 && (e = Ro(e, 1 / i, r)), e
    );
  }
  function aE(e, t = 0, n = 1, r = 0.5, i, s = e, o = e) {
    if (
      (Rt.test(t) &&
        ((t = parseFloat(t)), (t = ae(o.min, o.max, t / 100) - o.min)),
      typeof t != "number")
    )
      return;
    let a = ae(s.min, s.max, r);
    e === s && (a -= t),
      (e.min = Pp(e.min, t, n, a, i)),
      (e.max = Pp(e.max, t, n, a, i));
  }
  function kp(e, t, [n, r, i], s, o) {
    aE(e, t[n], t[r], t[i], t.scale, s, o);
  }
  const lE = ["x", "scaleX", "originX"],
    uE = ["y", "scaleY", "originY"];
  function Np(e, t, n, r) {
    kp(e.x, t, lE, n ? n.x : void 0, r ? r.x : void 0),
      kp(e.y, t, uE, n ? n.y : void 0, r ? r.y : void 0);
  }
  function jp(e) {
    return e.translate === 0 && e.scale === 1;
  }
  function s0(e) {
    return jp(e.x) && jp(e.y);
  }
  function cE(e, t) {
    return (
      e.x.min === t.x.min &&
      e.x.max === t.x.max &&
      e.y.min === t.y.min &&
      e.y.max === t.y.max
    );
  }
  function o0(e, t) {
    return (
      Math.round(e.x.min) === Math.round(t.x.min) &&
      Math.round(e.x.max) === Math.round(t.x.max) &&
      Math.round(e.y.min) === Math.round(t.y.min) &&
      Math.round(e.y.max) === Math.round(t.y.max)
    );
  }
  function bp(e) {
    return nt(e.x) / nt(e.y);
  }
  class fE {
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
  function _p(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x,
      s = e.y.translate / t.y;
    if (
      ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
      (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
      n)
    ) {
      const { rotate: l, rotateX: u, rotateY: c } = n;
      l && (r += `rotate(${l}deg) `),
        u && (r += `rotateX(${u}deg) `),
        c && (r += `rotateY(${c}deg) `);
    }
    const o = e.x.scale * t.x,
      a = e.y.scale * t.y;
    return (o !== 1 || a !== 1) && (r += `scale(${o}, ${a})`), r || "none";
  }
  const dE = (e, t) => e.depth - t.depth;
  class pE {
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
      this.isDirty && this.children.sort(dE),
        (this.isDirty = !1),
        this.children.forEach(t);
    }
  }
  function hE(e, t) {
    const n = performance.now(),
      r = ({ timestamp: i }) => {
        const s = i - n;
        s >= t && (en(r), e(s - t));
      };
    return ee.read(r, !0), () => en(r);
  }
  function mE(e) {
    window.MotionDebug && window.MotionDebug.record(e);
  }
  function yE(e) {
    return e instanceof SVGElement && e.tagName !== "svg";
  }
  function gE(e, t, n) {
    const r = Ye(e) ? e : Xr(e);
    return r.start(nf("", r, t, n)), r.animation;
  }
  const Ap = ["", "X", "Y", "Z"],
    Fp = 1e3;
  let vE = 0;
  const Hn = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  };
  function a0({
    attachResizeListener: e,
    defaultParent: t,
    measureScroll: n,
    checkIsScrollRoot: r,
    resetTransform: i,
  }) {
    return class {
      constructor(o = {}, a = t == null ? void 0 : t()) {
        (this.id = vE++),
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
              this.nodes.forEach(SE),
              this.nodes.forEach(kE),
              this.nodes.forEach(NE),
              this.nodes.forEach(TE),
              mE(Hn);
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
        this.root === this && (this.nodes = new pE());
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
        (this.isSVG = yE(o)), (this.instance = o);
        const { layoutId: l, layout: u, visualElement: c } = this.options;
        if (
          (c && !c.current && c.mount(o),
          this.root.nodes.add(this),
          this.parent && this.parent.children.add(this),
          a && (u || l) && (this.isLayoutDirty = !0),
          e)
        ) {
          let f;
          const d = () => (this.root.updateBlockedByResize = !1);
          e(o, () => {
            (this.root.updateBlockedByResize = !0),
              f && f(),
              (f = hE(d, 250)),
              no.hasAnimatedSinceResize &&
                ((no.hasAnimatedSinceResize = !1), this.nodes.forEach(Dp));
          });
        }
        l && this.root.registerSharedNode(l, this),
          this.options.animate !== !1 &&
            c &&
            (l || u) &&
            this.addEventListener(
              "didUpdate",
              ({
                delta: f,
                hasLayoutChanged: d,
                hasRelativeTargetChanged: m,
                layout: v,
              }) => {
                if (this.isTreeAnimationBlocked()) {
                  (this.target = void 0), (this.relativeTarget = void 0);
                  return;
                }
                const x =
                    this.options.transition || c.getDefaultTransition() || FE,
                  { onLayoutAnimationStart: k, onLayoutAnimationComplete: g } =
                    c.getProps(),
                  p = !this.targetLayout || !o0(this.targetLayout, v) || m,
                  y = !d && m;
                if (
                  this.options.layoutRoot ||
                  (this.resumeFrom && this.resumeFrom.instance) ||
                  y ||
                  (d && (p || !this.currentAnimation))
                ) {
                  this.resumeFrom &&
                    ((this.resumingFrom = this.resumeFrom),
                    (this.resumingFrom.resumingFrom = void 0)),
                    this.setAnimationOrigin(f, y);
                  const w = { ...Wg(x, "layout"), onPlay: k, onComplete: g };
                  (c.shouldReduceMotion || this.options.layoutRoot) &&
                    ((w.delay = 0), (w.type = !1)),
                    this.startAnimation(w);
                } else
                  d || Dp(this),
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
          this.nodes && this.nodes.forEach(jE),
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
        for (let c = 0; c < this.path.length; c++) {
          const f = this.path[c];
          (f.shouldResetTransform = !0),
            f.updateScroll("snapshot"),
            f.options.layoutRoot && f.willUpdate(!1);
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
            this.nodes.forEach(Op);
          return;
        }
        this.isUpdating || this.nodes.forEach(CE),
          (this.isUpdating = !1),
          this.nodes.forEach(PE),
          this.nodes.forEach(xE),
          this.nodes.forEach(wE),
          this.clearAllSnapshots();
        const a = performance.now();
        (Te.delta = _n(0, 1e3 / 60, a - Te.timestamp)),
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
        this.nodes.forEach(EE), this.sharedNodes.forEach(bE);
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
          (this.layoutCorrected = ye()),
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
          a = this.projectionDelta && !s0(this.projectionDelta),
          l = this.getTransformTemplate(),
          u = l ? l(this.latestValues, "") : void 0,
          c = u !== this.prevTransformTemplateValue;
        o &&
          (a || Un(this.latestValues) || c) &&
          (i(this.instance, u),
          (this.shouldResetTransform = !1),
          this.scheduleRender());
      }
      measure(o = !0) {
        const a = this.measurePageBox();
        let l = this.removeElementScroll(a);
        return (
          o && (l = this.removeTransform(l)),
          OE(l),
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
        if (!o) return ye();
        const a = o.measureViewportBox(),
          { scroll: l } = this.root;
        return l && (un(a.x, l.offset.x), un(a.y, l.offset.y)), a;
      }
      removeElementScroll(o) {
        const a = ye();
        at(a, o);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l],
            { scroll: c, options: f } = u;
          if (u !== this.root && c && f.layoutScroll) {
            if (c.isRoot) {
              at(a, o);
              const { scroll: d } = this.root;
              d && (un(a.x, -d.offset.x), un(a.y, -d.offset.y));
            }
            un(a.x, c.offset.x), un(a.y, c.offset.y);
          }
        }
        return a;
      }
      applyTransform(o, a = !1) {
        const l = ye();
        at(l, o);
        for (let u = 0; u < this.path.length; u++) {
          const c = this.path[u];
          !a &&
            c.options.layoutScroll &&
            c.scroll &&
            c !== c.root &&
            Mr(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
            Un(c.latestValues) && Mr(l, c.latestValues);
        }
        return Un(this.latestValues) && Mr(l, this.latestValues), l;
      }
      removeTransform(o) {
        const a = ye();
        at(a, o);
        for (let l = 0; l < this.path.length; l++) {
          const u = this.path[l];
          if (!u.instance || !Un(u.latestValues)) continue;
          bu(u.latestValues) && u.updateSnapshot();
          const c = ye(),
            f = u.measurePageBox();
          at(c, f),
            Np(
              a,
              u.latestValues,
              u.snapshot ? u.snapshot.layoutBox : void 0,
              c
            );
        }
        return Un(this.latestValues) && Np(a, this.latestValues), a;
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
        const { layout: f, layoutId: d } = this.options;
        if (!(!this.layout || !(f || d))) {
          if (
            ((this.resolvedRelativeTargetAt = Te.timestamp),
            !this.targetDelta && !this.relativeTarget)
          ) {
            const m = this.getClosestProjectingParent();
            m && m.layout && this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ye()),
                (this.relativeTargetOrigin = ye()),
                Fi(
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
                ((this.target = ye()), (this.targetWithTransforms = ye())),
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
                  e0(this.target, this.targetDelta))
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
                  (this.relativeTarget = ye()),
                  (this.relativeTargetOrigin = ye()),
                  Fi(this.relativeTargetOrigin, this.target, m.target),
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
            Jg(this.parent.latestValues)
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
        const { layout: c, layoutId: f } = this.options;
        if (
          ((this.isTreeAnimating = !!(
            (this.parent && this.parent.isTreeAnimating) ||
            this.currentAnimation ||
            this.pendingAnimation
          )),
          this.isTreeAnimating ||
            (this.targetDelta = this.relativeTarget = void 0),
          !this.layout || !(c || f))
        )
          return;
        at(this.layoutCorrected, this.layout.layoutBox);
        const d = this.treeScale.x,
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
        Ai(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
          (this.projectionTransform = _p(this.projectionDelta, this.treeScale)),
          (this.projectionTransform !== x ||
            this.treeScale.x !== d ||
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
          c = { ...this.latestValues },
          f = Dr();
        (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
          (this.relativeTarget = this.relativeTargetOrigin = void 0),
          (this.attemptToResolveRelativeTarget = !a);
        const d = ye(),
          m = l ? l.source : void 0,
          v = this.layout ? this.layout.source : void 0,
          x = m !== v,
          k = this.getStack(),
          g = !k || k.members.length <= 1,
          p = !!(
            x &&
            !g &&
            this.options.crossfade === !0 &&
            !this.path.some(AE)
          );
        this.animationProgress = 0;
        let y;
        (this.mixTargetDelta = (w) => {
          const C = w / 1e3;
          Mp(f.x, o.x, C),
            Mp(f.y, o.y, C),
            this.setTargetDelta(f),
            this.relativeTarget &&
              this.relativeTargetOrigin &&
              this.layout &&
              this.relativeParent &&
              this.relativeParent.layout &&
              (Fi(
                d,
                this.layout.layoutBox,
                this.relativeParent.layout.layoutBox
              ),
              _E(this.relativeTarget, this.relativeTargetOrigin, d, C),
              y && cE(this.relativeTarget, y) && (this.isProjectionDirty = !1),
              y || (y = ye()),
              at(y, this.relativeTarget)),
            x &&
              ((this.animationValues = c),
              iE(c, u, this.latestValues, C, p, g)),
            this.root.scheduleUpdateProjection(),
            this.scheduleRender(),
            (this.animationProgress = C);
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
              (this.currentAnimation = gE(0, Fp, {
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
          (this.mixTargetDelta && this.mixTargetDelta(Fp),
          this.currentAnimation.stop()),
          this.completeAnimation();
      }
      applyTransformsToTarget() {
        const o = this.getLead();
        let {
          targetWithTransforms: a,
          target: l,
          layout: u,
          latestValues: c,
        } = o;
        if (!(!a || !l || !u)) {
          if (
            this !== o &&
            this.layout &&
            u &&
            l0(this.options.animationType, this.layout.layoutBox, u.layoutBox)
          ) {
            l = this.target || ye();
            const f = nt(this.layout.layoutBox.x);
            (l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
            const d = nt(this.layout.layoutBox.y);
            (l.y.min = o.target.y.min), (l.y.max = l.y.min + d);
          }
          at(a, l),
            Mr(a, c),
            Ai(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
        }
      }
      registerSharedNode(o, a) {
        this.sharedNodes.has(o) || this.sharedNodes.set(o, new fE()),
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
        for (let c = 0; c < Ap.length; c++) {
          const f = "rotate" + Ap[c];
          l[f] && ((u[f] = l[f]), o.setStaticValue(f, 0));
        }
        o.render();
        for (const c in u) o.setStaticValue(c, u[c]);
        o.scheduleRender();
      }
      getProjectionStyles(o = {}) {
        var a, l;
        const u = {};
        if (!this.instance || this.isSVG) return u;
        if (this.isVisible) u.visibility = "";
        else return { visibility: "hidden" };
        const c = this.getTransformTemplate();
        if (this.needsReset)
          return (
            (this.needsReset = !1),
            (u.opacity = ""),
            (u.pointerEvents = to(o.pointerEvents) || ""),
            (u.transform = c ? c(this.latestValues, "") : "none"),
            u
          );
        const f = this.getLead();
        if (!this.projectionDelta || !this.layout || !f.target) {
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
              ((x.transform = c ? c({}, "") : "none"),
              (this.hasProjected = !1)),
            x
          );
        }
        const d = f.animationValues || f.latestValues;
        this.applyTransformsToTarget(),
          (u.transform = _p(
            this.projectionDeltaWithTransform,
            this.treeScale,
            d
          )),
          c && (u.transform = c(d, u.transform));
        const { x: m, y: v } = this.projectionDelta;
        (u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`),
          f.animationValues
            ? (u.opacity =
                f === this
                  ? (l =
                      (a = d.opacity) !== null && a !== void 0
                        ? a
                        : this.latestValues.opacity) !== null && l !== void 0
                    ? l
                    : 1
                  : this.preserveOpacity
                  ? this.latestValues.opacity
                  : d.opacityExit)
            : (u.opacity =
                f === this
                  ? d.opacity !== void 0
                    ? d.opacity
                    : ""
                  : d.opacityExit !== void 0
                  ? d.opacityExit
                  : 0);
        for (const x in bo) {
          if (d[x] === void 0) continue;
          const { correct: k, applyTo: g } = bo[x],
            p = u.transform === "none" ? d[x] : k(d[x], f);
          if (g) {
            const y = g.length;
            for (let w = 0; w < y; w++) u[g[w]] = p;
          } else u[x] = p;
        }
        return (
          this.options.layoutId &&
            (u.pointerEvents = f === this ? to(o.pointerEvents) || "" : "none"),
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
          this.root.nodes.forEach(Op),
          this.root.sharedNodes.clear();
      }
    };
  }
  function xE(e) {
    e.updateLayout();
  }
  function wE(e) {
    var t;
    const n =
      ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
      e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
      const { layoutBox: r, measuredBox: i } = e.layout,
        { animationType: s } = e.options,
        o = n.source !== e.layout.source;
      s === "size"
        ? _t((f) => {
            const d = o ? n.measuredBox[f] : n.layoutBox[f],
              m = nt(d);
            (d.min = r[f].min), (d.max = d.min + m);
          })
        : l0(s, n.layoutBox, r) &&
          _t((f) => {
            const d = o ? n.measuredBox[f] : n.layoutBox[f],
              m = nt(r[f]);
            (d.max = d.min + m),
              e.relativeTarget &&
                !e.currentAnimation &&
                ((e.isProjectionDirty = !0),
                (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
          });
      const a = Dr();
      Ai(a, r, n.layoutBox);
      const l = Dr();
      o ? Ai(l, e.applyTransform(i, !0), n.measuredBox) : Ai(l, r, n.layoutBox);
      const u = !s0(a);
      let c = !1;
      if (!e.resumeFrom) {
        const f = e.getClosestProjectingParent();
        if (f && !f.resumeFrom) {
          const { snapshot: d, layout: m } = f;
          if (d && m) {
            const v = ye();
            Fi(v, n.layoutBox, d.layoutBox);
            const x = ye();
            Fi(x, r, m.layoutBox),
              o0(v, x) || (c = !0),
              f.options.layoutRoot &&
                ((e.relativeTarget = x),
                (e.relativeTargetOrigin = v),
                (e.relativeParent = f));
          }
        }
      }
      e.notifyListeners("didUpdate", {
        layout: r,
        snapshot: n,
        delta: l,
        layoutDelta: a,
        hasLayoutChanged: u,
        hasRelativeTargetChanged: c,
      });
    } else if (e.isLead()) {
      const { onExitComplete: r } = e.options;
      r && r();
    }
    e.options.transition = void 0;
  }
  function SE(e) {
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
  function TE(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
  }
  function EE(e) {
    e.clearSnapshot();
  }
  function Op(e) {
    e.clearMeasurements();
  }
  function CE(e) {
    e.isLayoutDirty = !1;
  }
  function PE(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
      e.resetTransform();
  }
  function Dp(e) {
    e.finishAnimation(),
      (e.targetDelta = e.relativeTarget = e.target = void 0),
      (e.isProjectionDirty = !0);
  }
  function kE(e) {
    e.resolveTargetDelta();
  }
  function NE(e) {
    e.calcProjection();
  }
  function jE(e) {
    e.resetRotation();
  }
  function bE(e) {
    e.removeLeadSnapshot();
  }
  function Mp(e, t, n) {
    (e.translate = ae(t.translate, 0, n)),
      (e.scale = ae(t.scale, 1, n)),
      (e.origin = t.origin),
      (e.originPoint = t.originPoint);
  }
  function Rp(e, t, n, r) {
    (e.min = ae(t.min, n.min, r)), (e.max = ae(t.max, n.max, r));
  }
  function _E(e, t, n, r) {
    Rp(e.x, t.x, n.x, r), Rp(e.y, t.y, n.y, r);
  }
  function AE(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
  }
  const FE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    Lp = (e) =>
      typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
    Vp = Lp("applewebkit/") && !Lp("chrome/") ? Math.round : fe;
  function $p(e) {
    (e.min = Vp(e.min)), (e.max = Vp(e.max));
  }
  function OE(e) {
    $p(e.x), $p(e.y);
  }
  function l0(e, t, n) {
    return (
      e === "position" || (e === "preserve-aspect" && !Nu(bp(t), bp(n), 0.2))
    );
  }
  const DE = a0({
      attachResizeListener: (e, t) => Wt(e, "resize", t),
      measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop,
      }),
      checkIsScrollRoot: () => !0,
    }),
    vl = { current: void 0 },
    u0 = a0({
      measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
      defaultParent: () => {
        if (!vl.current) {
          const e = new DE({});
          e.mount(window), e.setOptions({ layoutScroll: !0 }), (vl.current = e);
        }
        return vl.current;
      },
      resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none";
      },
      checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
    }),
    ME = {
      pan: { Feature: qT },
      drag: { Feature: ZT, ProjectionNode: u0, MeasureLayout: n0 },
    },
    RE = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
  function LE(e) {
    const t = RE.exec(e);
    if (!t) return [,];
    const [, n, r] = t;
    return [n, r];
  }
  function Au(e, t, n = 1) {
    const [r, i] = LE(e);
    if (!r) return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
      const o = s.trim();
      return Gg(o) ? parseFloat(o) : o;
    } else return wu(i) ? Au(i, t, n + 1) : i;
  }
  function VE(e, { ...t }, n) {
    const r = e.current;
    if (!(r instanceof Element)) return { target: t, transitionEnd: n };
    n && (n = { ...n }),
      e.values.forEach((i) => {
        const s = i.get();
        if (!wu(s)) return;
        const o = Au(s, r);
        o && i.set(o);
      });
    for (const i in t) {
      const s = t[i];
      if (!wu(s)) continue;
      const o = Au(s, r);
      o && ((t[i] = o), n || (n = {}), n[i] === void 0 && (n[i] = s));
    }
    return { target: t, transitionEnd: n };
  }
  const $E = new Set([
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
    c0 = (e) => $E.has(e),
    IE = (e) => Object.keys(e).some(c0),
    Ip = (e) => e === ur || e === L,
    zp = (e, t) => parseFloat(e.split(", ")[t]),
    Bp =
      (e, t) =>
      (n, { transform: r }) => {
        if (r === "none" || !r) return 0;
        const i = r.match(/^matrix3d\((.+)\)$/);
        if (i) return zp(i[1], t);
        {
          const s = r.match(/^matrix\((.+)\)$/);
          return s ? zp(s[1], e) : 0;
        }
      },
    zE = new Set(["x", "y", "z"]),
    BE = cs.filter((e) => !zE.has(e));
  function UE(e) {
    const t = [];
    return (
      BE.forEach((n) => {
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
    x: Bp(4, 13),
    y: Bp(5, 14),
  };
  Zr.translateX = Zr.x;
  Zr.translateY = Zr.y;
  const HE = (e, t, n) => {
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
          const c = t.getValue(u);
          c && c.jump(a[u]), (e[u] = Zr[u](l, s));
        }),
        e
      );
    },
    WE = (e, t, n = {}, r = {}) => {
      (t = { ...t }), (r = { ...r });
      const i = Object.keys(t).filter(c0);
      let s = [],
        o = !1;
      const a = [];
      if (
        (i.forEach((l) => {
          const u = e.getValue(l);
          if (!e.hasValue(l)) return;
          let c = n[l],
            f = di(c);
          const d = t[l];
          let m;
          if (Ao(d)) {
            const v = d.length,
              x = d[0] === null ? 1 : 0;
            (c = d[x]), (f = di(c));
            for (let k = x; k < v && d[k] !== null; k++)
              m ? Zc(di(d[k]) === m) : (m = di(d[k]));
          } else m = di(d);
          if (f !== m)
            if (Ip(f) && Ip(m)) {
              const v = u.get();
              typeof v == "string" && u.set(parseFloat(v)),
                typeof d == "string"
                  ? (t[l] = parseFloat(d))
                  : Array.isArray(d) && m === L && (t[l] = d.map(parseFloat));
            } else
              f != null &&
              f.transform &&
              m != null &&
              m.transform &&
              (c === 0 || d === 0)
                ? c === 0
                  ? u.set(m.transform(c))
                  : (t[l] = f.transform(d))
                : (o || ((s = UE(e)), (o = !0)),
                  a.push(l),
                  (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                  u.jump(d));
        }),
        a.length)
      ) {
        const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
          u = HE(t, e, a);
        return (
          s.length &&
            s.forEach(([c, f]) => {
              e.getValue(c).set(f);
            }),
          e.render(),
          aa && l !== null && window.scrollTo({ top: l }),
          { target: u, transitionEnd: r }
        );
      } else return { target: t, transitionEnd: r };
    };
  function GE(e, t, n, r) {
    return IE(t) ? WE(e, t, n, r) : { target: t, transitionEnd: r };
  }
  const KE = (e, t, n, r) => {
      const i = VE(e, t, r);
      return (t = i.target), (r = i.transitionEnd), GE(e, t, n, r);
    },
    Fu = { current: null },
    f0 = { current: !1 };
  function YE() {
    if (((f0.current = !0), !!aa))
      if (window.matchMedia) {
        const e = window.matchMedia("(prefers-reduced-motion)"),
          t = () => (Fu.current = e.matches);
        e.addListener(t), t();
      } else Fu.current = !1;
  }
  function QE(e, t, n) {
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
  const Up = new WeakMap(),
    d0 = Object.keys(Ji),
    XE = d0.length,
    Hp = [
      "AnimationStart",
      "AnimationComplete",
      "Update",
      "BeforeLayoutMeasure",
      "LayoutMeasure",
      "LayoutAnimationStart",
      "LayoutAnimationComplete",
    ],
    ZE = zc.length;
  class qE {
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
        (this.isVariantNode = Xy(n)),
        this.isVariantNode && (this.variantChildren = new Set()),
        (this.manuallyAnimateOnMount = !!(t && t.current));
      const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
      for (const f in c) {
        const d = c[f];
        a[f] !== void 0 && Ye(d) && (d.set(a[f], !1), Mo(u) && u.add(f));
      }
    }
    scrapeMotionValuesFromProps(t, n) {
      return {};
    }
    mount(t) {
      (this.current = t),
        Up.set(t, this),
        this.projection &&
          !this.projection.instance &&
          this.projection.mount(t),
        this.parent &&
          this.isVariantNode &&
          !this.isControllingVariants &&
          (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
        f0.current || YE(),
        (this.shouldReduceMotion =
          this.reducedMotionConfig === "never"
            ? !1
            : this.reducedMotionConfig === "always"
            ? !0
            : Fu.current),
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext);
    }
    unmount() {
      Up.delete(this.current),
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
      for (let l = 0; l < XE; l++) {
        const u = d0[l],
          {
            isEnabled: c,
            Feature: f,
            ProjectionNode: d,
            MeasureLayout: m,
          } = Ji[u];
        d && (o = d),
          c(n) &&
            (!this.features[u] && f && (this.features[u] = new f(this)),
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
          drag: c,
          dragConstraints: f,
          layoutScroll: d,
          layoutRoot: m,
        } = n;
        this.projection.setOptions({
          layoutId: l,
          layout: u,
          alwaysMeasureLayout: !!c || (f && Fr(f)),
          visualElement: this,
          scheduleRender: () => this.scheduleRender(),
          animationType: typeof u == "string" ? u : "both",
          initialPromotionConfig: s,
          layoutScroll: d,
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
        : ye();
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
      for (let r = 0; r < Hp.length; r++) {
        const i = Hp[r];
        this.propEventSubscriptions[i] &&
          (this.propEventSubscriptions[i](),
          delete this.propEventSubscriptions[i]);
        const s = t["on" + i];
        s && (this.propEventSubscriptions[i] = this.on(i, s));
      }
      (this.prevMotionValues = QE(
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
      for (let r = 0; r < ZE; r++) {
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
  class p0 extends qE {
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
      let o = gT(r, t || {}, this);
      if ((i && (n && (n = i(n)), r && (r = i(r)), o && (o = i(o))), s)) {
        mT(this, r, o);
        const a = KE(this, r, o, n);
        (n = a.transitionEnd), (r = a.target);
      }
      return { transition: t, transitionEnd: n, ...r };
    }
  }
  function JE(e) {
    return window.getComputedStyle(e);
  }
  class e2 extends p0 {
    readValueFromInstance(t, n) {
      if (lr.has(n)) {
        const r = tf(n);
        return (r && r.default) || 0;
      } else {
        const r = JE(t),
          i = (eg(n) ? r.getPropertyValue(n) : r[n]) || 0;
        return typeof i == "string" ? i.trim() : i;
      }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
      return t0(t, n);
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
      og(t, n, r, i);
    }
  }
  class t2 extends p0 {
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
      return (n = ag.has(n) ? n : Yc(n)), t.getAttribute(n);
    }
    measureInstanceViewportBox() {
      return ye();
    }
    scrapeMotionValuesFromProps(t, n) {
      return ug(t, n);
    }
    build(t, n, r, i) {
      Gc(t, n, r, this.isSVGTag, i.transformTemplate);
    }
    renderInstance(t, n, r, i) {
      lg(t, n, r, i);
    }
    mount(t) {
      (this.isSVGTag = Kc(t.tagName)), super.mount(t);
    }
  }
  const n2 = (e, t) =>
      Uc(e)
        ? new t2(t, { enableHardwareAcceleration: !1 })
        : new e2(t, { enableHardwareAcceleration: !0 }),
    r2 = { layout: { ProjectionNode: u0, MeasureLayout: n0 } },
    i2 = { ...AT, ...Zw, ...ME, ...r2 },
    ft = ow((e, t) => Vw(e, t, i2, n2));
  function h0() {
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
  function s2() {
    const e = h0(),
      [t, n] = S.useState(0),
      r = S.useCallback(() => {
        e.current && n(t + 1);
      }, [t]);
    return [S.useCallback(() => ee.postRender(r), [r]), t];
  }
  class o2 extends S.Component {
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
  function a2({ children: e, isPresent: t }) {
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
        o2,
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
    const a = cg(l2),
      l = S.useId(),
      u = S.useMemo(
        () => ({
          id: l,
          initial: t,
          isPresent: n,
          custom: i,
          onExitComplete: (c) => {
            a.set(c, !0);
            for (const f of a.values()) if (!f) return;
            r && r();
          },
          register: (c) => (a.set(c, !1), () => a.delete(c)),
        }),
        s ? void 0 : [n]
      );
    return (
      S.useMemo(() => {
        a.forEach((c, f) => a.set(f, !1));
      }, [n]),
      S.useEffect(() => {
        !n && !a.size && r && r();
      }, [n]),
      o === "popLayout" && (e = S.createElement(a2, { isPresent: n }, e)),
      S.createElement(oa.Provider, { value: u }, e)
    );
  };
  function l2() {
    return new Map();
  }
  function u2(e) {
    return S.useEffect(() => () => e(), []);
  }
  const xr = (e) => e.key || "";
  function c2(e, t) {
    e.forEach((n) => {
      const r = xr(n);
      t.set(r, n);
    });
  }
  function f2(e) {
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
      const a = S.useContext(Bc).forceRender || s2()[0],
        l = h0(),
        u = f2(e);
      let c = u;
      const f = S.useRef(new Map()).current,
        d = S.useRef(c),
        m = S.useRef(new Map()).current,
        v = S.useRef(!0);
      if (
        ($c(() => {
          (v.current = !1), c2(u, m), (d.current = c);
        }),
        u2(() => {
          (v.current = !0), m.clear(), f.clear();
        }),
        v.current)
      )
        return S.createElement(
          S.Fragment,
          null,
          c.map((p) =>
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
      c = [...c];
      const x = d.current.map(xr),
        k = u.map(xr),
        g = x.length;
      for (let p = 0; p < g; p++) {
        const y = x[p];
        k.indexOf(y) === -1 && !f.has(y) && f.set(y, void 0);
      }
      return (
        o === "wait" && f.size && (c = []),
        f.forEach((p, y) => {
          if (k.indexOf(y) !== -1) return;
          const w = m.get(y);
          if (!w) return;
          const C = x.indexOf(y);
          let P = p;
          if (!P) {
            const E = () => {
              m.delete(y), f.delete(y);
              const N = d.current.findIndex((O) => O.key === y);
              if ((d.current.splice(N, 1), !f.size)) {
                if (((d.current = u), l.current === !1)) return;
                a(), r && r();
              }
            };
            (P = S.createElement(
              xl,
              {
                key: xr(w),
                isPresent: !1,
                onExitComplete: E,
                custom: t,
                presenceAffectsLayout: s,
                mode: o,
              },
              w
            )),
              f.set(y, P);
          }
          c.splice(C, 0, P);
        }),
        (c = c.map((p) => {
          const y = p.key;
          return f.has(y)
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
          f.size ? c : c.map((p) => S.cloneElement(p))
        )
      );
    },
    d2 = {
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
    p2 = {
      initial: { y: "-10vh", opacity: 0, transition: { duration: 0.4 } },
      animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    },
    Wp = {
      initial: { transition: { staggerChildren: 0.05 } },
      animate: { transition: { delayChildren: 0.1, staggerChildren: 0.09 } },
      exit: { transition: { staggerChildren: 0.08 } },
    },
    Ou = {
      initial: { y: "30vh", transition: { duration: 0.7 } },
      animate: { y: 0, transition: { duration: 0.7 } },
      exit: { y: "-30vh", transition: { duration: 0.7 } },
    },
    h2 = ({ title: e }) =>
      h.jsx(ft.div, {
        variants: Ou,
        className: "uppercase text-4xl text-white italic",
        children: h.jsx("p", { children: e }),
      });
  function m2({ menuState: e, menuToggler: t }) {
    return h.jsx(af, {
      children:
        e &&
        h.jsxs(ft.div, {
          variants: d2,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          className:
            "bg-[#353945] absolute top-0 left-0 h-[100vh] w-screen origin-right flex flex-col justify-between z-30",
          children: [
            h.jsxs("div", {
              className:
                "flex mx-auto px-10 container flex-row items-center justify-between ",
              children: [
                h.jsx("img", {
                  src: Vc,
                  alt: "brand logo",
                  className: "p-0 w-1/2 max-w-[200px] min-w-[150px] invisible",
                }),
                h.jsx(ft.div, {
                  variants: p2,
                  initial: "initial",
                  animate: "animate",
                  exit: "initial",
                  onClick: t,
                  onKeyDown: t,
                  className: "cursor-pointer",
                  children: h.jsx(Ky, { color: "white", size: 22 }),
                }),
              ],
            }),
            h.jsx(ft.div, {
              className:
                "flex flex-col justify-center  font-lora items-center gap-4 mb-32",
              variants: Wp,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: G1.map((n) =>
                h.jsx(
                  "div",
                  {
                    className: "overflow-hidden",
                    children: h.jsx(h2, { title: n.title }),
                  },
                  n.title
                )
              ),
            }),
            h.jsx(ft.div, {
              className: " text-white  mb-10 flex flex-row px-10",
              variants: Wp,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: h.jsxs("div", {
                className:
                  "overflow-hidden flex flex-row justify-between w-[100%]",
                children: [
                  h.jsx(ft.div, {
                    className: "text-[#D4D5E1] italic text-sm",
                    variants: Ou,
                    children: "All rights reserved",
                  }),
                  h.jsx(ft.div, {
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
  function y2() {
    return h.jsxs("div", {
      className:
        "overflow-hidden py-[20px] px-0 bg-[#353945] whitespace-nowrap relative -rotate-12 scale-110 z-10",
      children: [
        h.jsx("div", {
          className: "banner-slide",
          children: Id.map((e, t) =>
            e.title === "."
              ? h.jsx(
                  "div",
                  {
                    className:
                      "w-2 h-2 rounded-full bg-red-500 inline-block ml-5 mr-5",
                  },
                  e.title + t
                )
              : h.jsx(
                  "p",
                  {
                    className: "text-xs text-[#D6D6D6] margin inline-block",
                    children: e.title,
                  },
                  e.title
                )
          ),
        }),
        h.jsx("div", {
          className: "banner-slide",
          children: Id.map((e, t) =>
            e.title === "."
              ? h.jsx(
                  "div",
                  {
                    className:
                      "w-2 h-2 rounded-full bg-red-500 inline-block ml-5 mr-5",
                  },
                  e.title + t
                )
              : h.jsx(
                  "p",
                  {
                    className: "text-xs text-[#D6D6D6] margin inline-block",
                    children: e.title,
                  },
                  e.title
                )
          ),
        }),
      ],
    });
  }
  const g2 = "./assets/Main Event-5f69e249.svg",
    v2 = "./assets/SupportEvent-5988e719.svg";
  function x2({ bottomToggler: e }) {
    return h.jsxs("div", {
      className: "mt-28 pt-12 relative",
      id: "registration",
      children: [
        h.jsx("h2", {
          className: "text-white text-center font-medium text-xl mb-8",
          children: "Registrations Started",
        }),
        h.jsx("img", {
          src: g2,
          alt: "main event logo",
          className: "absolute scale-150 top-20 -translate-x-[45%]",
        }),
        h.jsx("img", {
          src: v2,
          alt: "support event logo",
          className: "absolute scale-150 right-0  top-96 translate-x-[40%]",
        }),
        h.jsxs("div", {
          className: "container mx-auto",
          children: [
            h.jsxs("div", {
              className: " bg-[#353945] mx-10 px-12 py-10 mb-5",
              children: [
                h.jsxs("section", {
                  className: "mb-10",
                  children: [
                    h.jsx("h3", {
                      className: "text-lg text-white font-medium leading- mb-5",
                      children:
                        "The Bisons League 23-24 - The Ultimate Basketball Championship!",
                    }),
                    h.jsx("p", {
                      className:
                        "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose",
                      children:
                        "Get ready to battle it out, as teams vie for the coveted title of the Ultimate Championship of the Year!",
                    }),
                    h.jsx("p", {
                      className:
                        "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose",
                      children:
                        "Whether you're a Rotaract club, a university powerhouse, or a force to be reckoned with, this is your platform to display the finesse that sets you apart.",
                    }),
                    h.jsx("p", {
                      className:
                        "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose",
                      children:
                        "Don't miss out on the action; reserve your team's spot today and be part of the excitement.",
                    }),
                  ],
                }),
                h.jsxs("section", {
                  className: "mb-10",
                  children: [
                    h.jsx("h3", {
                      className:
                        "text-lg text-white font-medium leading-relaxed mb-2",
                      children: "Event Overview",
                    }),
                    h.jsxs("p", {
                      className:
                        "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose ",
                      children: [
                        h.jsx("span", {
                          className: "font-semibold",
                          children: "Date: ",
                        }),
                        "Saturday, 21st October, 2023",
                        h.jsx("br", {}),
                        h.jsx("span", {
                          className: "font-semibold",
                          children: "Time: ",
                        }),
                        "7am-6pm",
                        h.jsx("br", {}),
                        h.jsx("span", {
                          className: "font-semibold",
                          children: "Venue: ",
                        }),
                        "St. Joseph's College, Maradana",
                      ],
                    }),
                  ],
                }),
                h.jsxs("section", {
                  className: "mb-10",
                  children: [
                    h.jsx("h3", {
                      className:
                        "text-lg text-white font-medium leading-relaxed mb-2",
                      children: "Categories",
                    }),
                    h.jsx("div", {
                      className:
                        "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                      children: Y1.map((t) =>
                        h.jsxs(
                          "div",
                          {
                            className: "flex flex-row gap-5 items-center",
                            children: [
                              h.jsx("div", {
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
                h.jsxs("section", {
                  className: "mb-10",
                  children: [
                    h.jsx("h3", {
                      className:
                        "text-lg text-white font-medium leading-relaxed mb-2",
                      children: "Registration Fee",
                    }),
                    h.jsx("p", {
                      className:
                        "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                      children:
                        "Per Team: LKR 7000.00 (Which translate to LKR 875.00 per player)",
                    }),
                  ],
                }),
                h.jsxs("section", {
                  className: " flex flex-row  items-stretch justify-stretch",
                  children: [
                    h.jsx("div", {
                      className: "h-200 w-3 bg-[#D4D5E1] mr-5 rounded-xl",
                    }),
                    h.jsx("p", {
                      className:
                        "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                      children:
                        "So, gear up, practice those dribbles and get your shot in!, and get ready for a high-octane championship that promises to be nothing short of electrifying. Let’s make history on the court! ...",
                    }),
                  ],
                }),
              ],
            }),
            h.jsx("div", {
              className: "flex justify-center mb-5",
              children: h.jsx("div", {
                className:
                  " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-4 px-5 cursor-pointer",
                onClick: () => {
                  e();
                },
                onKeyDown: () => {
                  e();
                },
                children: h.jsxs("div", {
                  className:
                    "text-white text-xs font-medium flex flex-row items-center ",
                  children: ["Register Now     ", h.jsx(ia, {})],
                }),
              }),
            }),
          ],
        }),
      ],
    });
  }
  const w2 = {
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
  var S2 = function (t) {
    return T2(t) && !E2(t);
  };
  function T2(e) {
    return !!e && typeof e == "object";
  }
  function E2(e) {
    var t = Object.prototype.toString.call(e);
    return t === "[object RegExp]" || t === "[object Date]" || k2(e);
  }
  var C2 = typeof Symbol == "function" && Symbol.for,
    P2 = C2 ? Symbol.for("react.element") : 60103;
  function k2(e) {
    return e.$$typeof === P2;
  }
  function N2(e) {
    return Array.isArray(e) ? [] : {};
  }
  function Lo(e, t) {
    return t.clone !== !1 && t.isMergeableObject(e) ? ts(N2(e), e, t) : e;
  }
  function j2(e, t, n) {
    return e.concat(t).map(function (r) {
      return Lo(r, n);
    });
  }
  function b2(e, t, n) {
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
      (n.arrayMerge = n.arrayMerge || j2),
      (n.isMergeableObject = n.isMergeableObject || S2);
    var r = Array.isArray(t),
      i = Array.isArray(e),
      s = r === i;
    return s ? (r ? n.arrayMerge(e, t, n) : b2(e, t, n)) : Lo(t, n);
  }
  ts.all = function (t, n) {
    if (!Array.isArray(t)) throw new Error("first argument should be an array");
    return t.reduce(function (r, i) {
      return ts(r, i, n);
    }, {});
  };
  var Du = ts,
    _2 =
      typeof global == "object" && global && global.Object === Object && global;
  const m0 = _2;
  var A2 = typeof self == "object" && self && self.Object === Object && self,
    F2 = m0 || A2 || Function("return this")();
  const Vt = F2;
  var O2 = Vt.Symbol;
  const Fn = O2;
  var y0 = Object.prototype,
    D2 = y0.hasOwnProperty,
    M2 = y0.toString,
    hi = Fn ? Fn.toStringTag : void 0;
  function R2(e) {
    var t = D2.call(e, hi),
      n = e[hi];
    try {
      e[hi] = void 0;
      var r = !0;
    } catch {}
    var i = M2.call(e);
    return r && (t ? (e[hi] = n) : delete e[hi]), i;
  }
  var L2 = Object.prototype,
    V2 = L2.toString;
  function $2(e) {
    return V2.call(e);
  }
  var I2 = "[object Null]",
    z2 = "[object Undefined]",
    Gp = Fn ? Fn.toStringTag : void 0;
  function cr(e) {
    return e == null
      ? e === void 0
        ? z2
        : I2
      : Gp && Gp in Object(e)
      ? R2(e)
      : $2(e);
  }
  function g0(e, t) {
    return function (n) {
      return e(t(n));
    };
  }
  var B2 = g0(Object.getPrototypeOf, Object);
  const lf = B2;
  function fr(e) {
    return e != null && typeof e == "object";
  }
  var U2 = "[object Object]",
    H2 = Function.prototype,
    W2 = Object.prototype,
    v0 = H2.toString,
    G2 = W2.hasOwnProperty,
    K2 = v0.call(Object);
  function Kp(e) {
    if (!fr(e) || cr(e) != U2) return !1;
    var t = lf(e);
    if (t === null) return !0;
    var n = G2.call(t, "constructor") && t.constructor;
    return typeof n == "function" && n instanceof n && v0.call(n) == K2;
  }
  var Yp = Array.isArray,
    Qp = Object.keys,
    Y2 = Object.prototype.hasOwnProperty,
    Q2 = typeof Element < "u";
  function Mu(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      var n = Yp(e),
        r = Yp(t),
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
        c = t instanceof RegExp;
      if (u != c) return !1;
      if (u && c) return e.toString() == t.toString();
      var f = Qp(e);
      if (((s = f.length), s !== Qp(t).length)) return !1;
      for (i = s; i-- !== 0; ) if (!Y2.call(t, f[i])) return !1;
      if (Q2 && e instanceof Element && t instanceof Element) return e === t;
      for (i = s; i-- !== 0; )
        if (((o = f[i]), !(o === "_owner" && e.$$typeof) && !Mu(e[o], t[o])))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  var X2 = function (t, n) {
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
  const cn = Io(X2);
  var Z2 = !0;
  function x0(e, t) {
    if (!Z2) {
      if (e) return;
      var n = "Warning: " + t;
      typeof console < "u" && console.warn(n);
      try {
        throw Error(n);
      } catch {}
    }
  }
  function q2() {
    (this.__data__ = []), (this.size = 0);
  }
  function w0(e, t) {
    return e === t || (e !== e && t !== t);
  }
  function pa(e, t) {
    for (var n = e.length; n--; ) if (w0(e[n][0], t)) return n;
    return -1;
  }
  var J2 = Array.prototype,
    eC = J2.splice;
  function tC(e) {
    var t = this.__data__,
      n = pa(t, e);
    if (n < 0) return !1;
    var r = t.length - 1;
    return n == r ? t.pop() : eC.call(t, n, 1), --this.size, !0;
  }
  function nC(e) {
    var t = this.__data__,
      n = pa(t, e);
    return n < 0 ? void 0 : t[n][1];
  }
  function rC(e) {
    return pa(this.__data__, e) > -1;
  }
  function iC(e, t) {
    var n = this.__data__,
      r = pa(n, e);
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
  nn.prototype.clear = q2;
  nn.prototype.delete = tC;
  nn.prototype.get = nC;
  nn.prototype.has = rC;
  nn.prototype.set = iC;
  function sC() {
    (this.__data__ = new nn()), (this.size = 0);
  }
  function oC(e) {
    var t = this.__data__,
      n = t.delete(e);
    return (this.size = t.size), n;
  }
  function aC(e) {
    return this.__data__.get(e);
  }
  function lC(e) {
    return this.__data__.has(e);
  }
  function hs(e) {
    var t = typeof e;
    return e != null && (t == "object" || t == "function");
  }
  var uC = "[object AsyncFunction]",
    cC = "[object Function]",
    fC = "[object GeneratorFunction]",
    dC = "[object Proxy]";
  function S0(e) {
    if (!hs(e)) return !1;
    var t = cr(e);
    return t == cC || t == fC || t == uC || t == dC;
  }
  var pC = Vt["__core-js_shared__"];
  const wl = pC;
  var Xp = (function () {
    var e = /[^.]+$/.exec((wl && wl.keys && wl.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
  function hC(e) {
    return !!Xp && Xp in e;
  }
  var mC = Function.prototype,
    yC = mC.toString;
  function dr(e) {
    if (e != null) {
      try {
        return yC.call(e);
      } catch {}
      try {
        return e + "";
      } catch {}
    }
    return "";
  }
  var gC = /[\\^$.*+?()[\]{}|]/g,
    vC = /^\[object .+?Constructor\]$/,
    xC = Function.prototype,
    wC = Object.prototype,
    SC = xC.toString,
    TC = wC.hasOwnProperty,
    EC = RegExp(
      "^" +
        SC.call(TC)
          .replace(gC, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    );
  function CC(e) {
    if (!hs(e) || hC(e)) return !1;
    var t = S0(e) ? EC : vC;
    return t.test(dr(e));
  }
  function PC(e, t) {
    return e == null ? void 0 : e[t];
  }
  function pr(e, t) {
    var n = PC(e, t);
    return CC(n) ? n : void 0;
  }
  var kC = pr(Vt, "Map");
  const ns = kC;
  var NC = pr(Object, "create");
  const rs = NC;
  function jC() {
    (this.__data__ = rs ? rs(null) : {}), (this.size = 0);
  }
  function bC(e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  }
  var _C = "__lodash_hash_undefined__",
    AC = Object.prototype,
    FC = AC.hasOwnProperty;
  function OC(e) {
    var t = this.__data__;
    if (rs) {
      var n = t[e];
      return n === _C ? void 0 : n;
    }
    return FC.call(t, e) ? t[e] : void 0;
  }
  var DC = Object.prototype,
    MC = DC.hasOwnProperty;
  function RC(e) {
    var t = this.__data__;
    return rs ? t[e] !== void 0 : MC.call(t, e);
  }
  var LC = "__lodash_hash_undefined__";
  function VC(e, t) {
    var n = this.__data__;
    return (
      (this.size += this.has(e) ? 0 : 1),
      (n[e] = rs && t === void 0 ? LC : t),
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
  ir.prototype.clear = jC;
  ir.prototype.delete = bC;
  ir.prototype.get = OC;
  ir.prototype.has = RC;
  ir.prototype.set = VC;
  function $C() {
    (this.size = 0),
      (this.__data__ = {
        hash: new ir(),
        map: new (ns || nn)(),
        string: new ir(),
      });
  }
  function IC(e) {
    var t = typeof e;
    return t == "string" || t == "number" || t == "symbol" || t == "boolean"
      ? e !== "__proto__"
      : e === null;
  }
  function ha(e, t) {
    var n = e.__data__;
    return IC(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
  }
  function zC(e) {
    var t = ha(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  }
  function BC(e) {
    return ha(this, e).get(e);
  }
  function UC(e) {
    return ha(this, e).has(e);
  }
  function HC(e, t) {
    var n = ha(this, e),
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
  Ln.prototype.clear = $C;
  Ln.prototype.delete = zC;
  Ln.prototype.get = BC;
  Ln.prototype.has = UC;
  Ln.prototype.set = HC;
  var WC = 200;
  function GC(e, t) {
    var n = this.__data__;
    if (n instanceof nn) {
      var r = n.__data__;
      if (!ns || r.length < WC - 1)
        return r.push([e, t]), (this.size = ++n.size), this;
      n = this.__data__ = new Ln(r);
    }
    return n.set(e, t), (this.size = n.size), this;
  }
  function ni(e) {
    var t = (this.__data__ = new nn(e));
    this.size = t.size;
  }
  ni.prototype.clear = sC;
  ni.prototype.delete = oC;
  ni.prototype.get = aC;
  ni.prototype.has = lC;
  ni.prototype.set = GC;
  function KC(e, t) {
    for (
      var n = -1, r = e == null ? 0 : e.length;
      ++n < r && t(e[n], n, e) !== !1;

    );
    return e;
  }
  var YC = (function () {
    try {
      var e = pr(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })();
  const Zp = YC;
  function T0(e, t, n) {
    t == "__proto__" && Zp
      ? Zp(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
      : (e[t] = n);
  }
  var QC = Object.prototype,
    XC = QC.hasOwnProperty;
  function E0(e, t, n) {
    var r = e[t];
    (!(XC.call(e, t) && w0(r, n)) || (n === void 0 && !(t in e))) &&
      T0(e, t, n);
  }
  function ma(e, t, n, r) {
    var i = !n;
    n || (n = {});
    for (var s = -1, o = t.length; ++s < o; ) {
      var a = t[s],
        l = r ? r(n[a], e[a], a, n, e) : void 0;
      l === void 0 && (l = e[a]), i ? T0(n, a, l) : E0(n, a, l);
    }
    return n;
  }
  function ZC(e, t) {
    for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
    return r;
  }
  var qC = "[object Arguments]";
  function qp(e) {
    return fr(e) && cr(e) == qC;
  }
  var C0 = Object.prototype,
    JC = C0.hasOwnProperty,
    eP = C0.propertyIsEnumerable,
    tP = qp(
      (function () {
        return arguments;
      })()
    )
      ? qp
      : function (e) {
          return fr(e) && JC.call(e, "callee") && !eP.call(e, "callee");
        };
  const nP = tP;
  var rP = Array.isArray;
  const ms = rP;
  function iP() {
    return !1;
  }
  var P0 = typeof qe == "object" && qe && !qe.nodeType && qe,
    Jp = P0 && typeof Je == "object" && Je && !Je.nodeType && Je,
    sP = Jp && Jp.exports === P0,
    eh = sP ? Vt.Buffer : void 0,
    oP = eh ? eh.isBuffer : void 0,
    aP = oP || iP;
  const k0 = aP;
  var lP = 9007199254740991,
    uP = /^(?:0|[1-9]\d*)$/;
  function cP(e, t) {
    var n = typeof e;
    return (
      (t = t ?? lP),
      !!t &&
        (n == "number" || (n != "symbol" && uP.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
    );
  }
  var fP = 9007199254740991;
  function N0(e) {
    return typeof e == "number" && e > -1 && e % 1 == 0 && e <= fP;
  }
  var dP = "[object Arguments]",
    pP = "[object Array]",
    hP = "[object Boolean]",
    mP = "[object Date]",
    yP = "[object Error]",
    gP = "[object Function]",
    vP = "[object Map]",
    xP = "[object Number]",
    wP = "[object Object]",
    SP = "[object RegExp]",
    TP = "[object Set]",
    EP = "[object String]",
    CP = "[object WeakMap]",
    PP = "[object ArrayBuffer]",
    kP = "[object DataView]",
    NP = "[object Float32Array]",
    jP = "[object Float64Array]",
    bP = "[object Int8Array]",
    _P = "[object Int16Array]",
    AP = "[object Int32Array]",
    FP = "[object Uint8Array]",
    OP = "[object Uint8ClampedArray]",
    DP = "[object Uint16Array]",
    MP = "[object Uint32Array]",
    ne = {};
  ne[NP] =
    ne[jP] =
    ne[bP] =
    ne[_P] =
    ne[AP] =
    ne[FP] =
    ne[OP] =
    ne[DP] =
    ne[MP] =
      !0;
  ne[dP] =
    ne[pP] =
    ne[PP] =
    ne[hP] =
    ne[kP] =
    ne[mP] =
    ne[yP] =
    ne[gP] =
    ne[vP] =
    ne[xP] =
    ne[wP] =
    ne[SP] =
    ne[TP] =
    ne[EP] =
    ne[CP] =
      !1;
  function RP(e) {
    return fr(e) && N0(e.length) && !!ne[cr(e)];
  }
  function uf(e) {
    return function (t) {
      return e(t);
    };
  }
  var j0 = typeof qe == "object" && qe && !qe.nodeType && qe,
    Oi = j0 && typeof Je == "object" && Je && !Je.nodeType && Je,
    LP = Oi && Oi.exports === j0,
    Sl = LP && m0.process,
    VP = (function () {
      try {
        var e = Oi && Oi.require && Oi.require("util").types;
        return e || (Sl && Sl.binding && Sl.binding("util"));
      } catch {}
    })();
  const qr = VP;
  var th = qr && qr.isTypedArray,
    $P = th ? uf(th) : RP;
  const IP = $P;
  var zP = Object.prototype,
    BP = zP.hasOwnProperty;
  function b0(e, t) {
    var n = ms(e),
      r = !n && nP(e),
      i = !n && !r && k0(e),
      s = !n && !r && !i && IP(e),
      o = n || r || i || s,
      a = o ? ZC(e.length, String) : [],
      l = a.length;
    for (var u in e)
      (t || BP.call(e, u)) &&
        !(
          o &&
          (u == "length" ||
            (i && (u == "offset" || u == "parent")) ||
            (s && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
            cP(u, l))
        ) &&
        a.push(u);
    return a;
  }
  var UP = Object.prototype;
  function cf(e) {
    var t = e && e.constructor,
      n = (typeof t == "function" && t.prototype) || UP;
    return e === n;
  }
  var HP = g0(Object.keys, Object);
  const WP = HP;
  var GP = Object.prototype,
    KP = GP.hasOwnProperty;
  function YP(e) {
    if (!cf(e)) return WP(e);
    var t = [];
    for (var n in Object(e)) KP.call(e, n) && n != "constructor" && t.push(n);
    return t;
  }
  function _0(e) {
    return e != null && N0(e.length) && !S0(e);
  }
  function ff(e) {
    return _0(e) ? b0(e) : YP(e);
  }
  function QP(e, t) {
    return e && ma(t, ff(t), e);
  }
  function XP(e) {
    var t = [];
    if (e != null) for (var n in Object(e)) t.push(n);
    return t;
  }
  var ZP = Object.prototype,
    qP = ZP.hasOwnProperty;
  function JP(e) {
    if (!hs(e)) return XP(e);
    var t = cf(e),
      n = [];
    for (var r in e) (r == "constructor" && (t || !qP.call(e, r))) || n.push(r);
    return n;
  }
  function df(e) {
    return _0(e) ? b0(e, !0) : JP(e);
  }
  function ek(e, t) {
    return e && ma(t, df(t), e);
  }
  var A0 = typeof qe == "object" && qe && !qe.nodeType && qe,
    nh = A0 && typeof Je == "object" && Je && !Je.nodeType && Je,
    tk = nh && nh.exports === A0,
    rh = tk ? Vt.Buffer : void 0,
    ih = rh ? rh.allocUnsafe : void 0;
  function nk(e, t) {
    if (t) return e.slice();
    var n = e.length,
      r = ih ? ih(n) : new e.constructor(n);
    return e.copy(r), r;
  }
  function F0(e, t) {
    var n = -1,
      r = e.length;
    for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
    return t;
  }
  function rk(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = 0, s = []; ++n < r; ) {
      var o = e[n];
      t(o, n, e) && (s[i++] = o);
    }
    return s;
  }
  function O0() {
    return [];
  }
  var ik = Object.prototype,
    sk = ik.propertyIsEnumerable,
    sh = Object.getOwnPropertySymbols,
    ok = sh
      ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              rk(sh(e), function (t) {
                return sk.call(e, t);
              }));
        }
      : O0;
  const pf = ok;
  function ak(e, t) {
    return ma(e, pf(e), t);
  }
  function D0(e, t) {
    for (var n = -1, r = t.length, i = e.length; ++n < r; ) e[i + n] = t[n];
    return e;
  }
  var lk = Object.getOwnPropertySymbols,
    uk = lk
      ? function (e) {
          for (var t = []; e; ) D0(t, pf(e)), (e = lf(e));
          return t;
        }
      : O0;
  const M0 = uk;
  function ck(e, t) {
    return ma(e, M0(e), t);
  }
  function R0(e, t, n) {
    var r = t(e);
    return ms(e) ? r : D0(r, n(e));
  }
  function fk(e) {
    return R0(e, ff, pf);
  }
  function dk(e) {
    return R0(e, df, M0);
  }
  var pk = pr(Vt, "DataView");
  const Ru = pk;
  var hk = pr(Vt, "Promise");
  const Lu = hk;
  var mk = pr(Vt, "Set");
  const Vu = mk;
  var yk = pr(Vt, "WeakMap");
  const $u = yk;
  var oh = "[object Map]",
    gk = "[object Object]",
    ah = "[object Promise]",
    lh = "[object Set]",
    uh = "[object WeakMap]",
    ch = "[object DataView]",
    vk = dr(Ru),
    xk = dr(ns),
    wk = dr(Lu),
    Sk = dr(Vu),
    Tk = dr($u),
    Wn = cr;
  ((Ru && Wn(new Ru(new ArrayBuffer(1))) != ch) ||
    (ns && Wn(new ns()) != oh) ||
    (Lu && Wn(Lu.resolve()) != ah) ||
    (Vu && Wn(new Vu()) != lh) ||
    ($u && Wn(new $u()) != uh)) &&
    (Wn = function (e) {
      var t = cr(e),
        n = t == gk ? e.constructor : void 0,
        r = n ? dr(n) : "";
      if (r)
        switch (r) {
          case vk:
            return ch;
          case xk:
            return oh;
          case wk:
            return ah;
          case Sk:
            return lh;
          case Tk:
            return uh;
        }
      return t;
    });
  const hf = Wn;
  var Ek = Object.prototype,
    Ck = Ek.hasOwnProperty;
  function Pk(e) {
    var t = e.length,
      n = new e.constructor(t);
    return (
      t &&
        typeof e[0] == "string" &&
        Ck.call(e, "index") &&
        ((n.index = e.index), (n.input = e.input)),
      n
    );
  }
  var kk = Vt.Uint8Array;
  const fh = kk;
  function mf(e) {
    var t = new e.constructor(e.byteLength);
    return new fh(t).set(new fh(e)), t;
  }
  function Nk(e, t) {
    var n = t ? mf(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.byteLength);
  }
  var jk = /\w*$/;
  function bk(e) {
    var t = new e.constructor(e.source, jk.exec(e));
    return (t.lastIndex = e.lastIndex), t;
  }
  var dh = Fn ? Fn.prototype : void 0,
    ph = dh ? dh.valueOf : void 0;
  function _k(e) {
    return ph ? Object(ph.call(e)) : {};
  }
  function Ak(e, t) {
    var n = t ? mf(e.buffer) : e.buffer;
    return new e.constructor(n, e.byteOffset, e.length);
  }
  var Fk = "[object Boolean]",
    Ok = "[object Date]",
    Dk = "[object Map]",
    Mk = "[object Number]",
    Rk = "[object RegExp]",
    Lk = "[object Set]",
    Vk = "[object String]",
    $k = "[object Symbol]",
    Ik = "[object ArrayBuffer]",
    zk = "[object DataView]",
    Bk = "[object Float32Array]",
    Uk = "[object Float64Array]",
    Hk = "[object Int8Array]",
    Wk = "[object Int16Array]",
    Gk = "[object Int32Array]",
    Kk = "[object Uint8Array]",
    Yk = "[object Uint8ClampedArray]",
    Qk = "[object Uint16Array]",
    Xk = "[object Uint32Array]";
  function Zk(e, t, n) {
    var r = e.constructor;
    switch (t) {
      case Ik:
        return mf(e);
      case Fk:
      case Ok:
        return new r(+e);
      case zk:
        return Nk(e, n);
      case Bk:
      case Uk:
      case Hk:
      case Wk:
      case Gk:
      case Kk:
      case Yk:
      case Qk:
      case Xk:
        return Ak(e, n);
      case Dk:
        return new r();
      case Mk:
      case Vk:
        return new r(e);
      case Rk:
        return bk(e);
      case Lk:
        return new r();
      case $k:
        return _k(e);
    }
  }
  var hh = Object.create,
    qk = (function () {
      function e() {}
      return function (t) {
        if (!hs(t)) return {};
        if (hh) return hh(t);
        e.prototype = t;
        var n = new e();
        return (e.prototype = void 0), n;
      };
    })();
  const Jk = qk;
  function eN(e) {
    return typeof e.constructor == "function" && !cf(e) ? Jk(lf(e)) : {};
  }
  var tN = "[object Map]";
  function nN(e) {
    return fr(e) && hf(e) == tN;
  }
  var mh = qr && qr.isMap,
    rN = mh ? uf(mh) : nN;
  const iN = rN;
  var sN = "[object Set]";
  function oN(e) {
    return fr(e) && hf(e) == sN;
  }
  var yh = qr && qr.isSet,
    aN = yh ? uf(yh) : oN;
  const lN = aN;
  var uN = 1,
    cN = 2,
    fN = 4,
    L0 = "[object Arguments]",
    dN = "[object Array]",
    pN = "[object Boolean]",
    hN = "[object Date]",
    mN = "[object Error]",
    V0 = "[object Function]",
    yN = "[object GeneratorFunction]",
    gN = "[object Map]",
    vN = "[object Number]",
    $0 = "[object Object]",
    xN = "[object RegExp]",
    wN = "[object Set]",
    SN = "[object String]",
    TN = "[object Symbol]",
    EN = "[object WeakMap]",
    CN = "[object ArrayBuffer]",
    PN = "[object DataView]",
    kN = "[object Float32Array]",
    NN = "[object Float64Array]",
    jN = "[object Int8Array]",
    bN = "[object Int16Array]",
    _N = "[object Int32Array]",
    AN = "[object Uint8Array]",
    FN = "[object Uint8ClampedArray]",
    ON = "[object Uint16Array]",
    DN = "[object Uint32Array]",
    q = {};
  q[L0] =
    q[dN] =
    q[CN] =
    q[PN] =
    q[pN] =
    q[hN] =
    q[kN] =
    q[NN] =
    q[jN] =
    q[bN] =
    q[_N] =
    q[gN] =
    q[vN] =
    q[$0] =
    q[xN] =
    q[wN] =
    q[SN] =
    q[TN] =
    q[AN] =
    q[FN] =
    q[ON] =
    q[DN] =
      !0;
  q[mN] = q[V0] = q[EN] = !1;
  function Di(e, t, n, r, i, s) {
    var o,
      a = t & uN,
      l = t & cN,
      u = t & fN;
    if ((n && (o = i ? n(e, r, i, s) : n(e)), o !== void 0)) return o;
    if (!hs(e)) return e;
    var c = ms(e);
    if (c) {
      if (((o = Pk(e)), !a)) return F0(e, o);
    } else {
      var f = hf(e),
        d = f == V0 || f == yN;
      if (k0(e)) return nk(e, a);
      if (f == $0 || f == L0 || (d && !i)) {
        if (((o = l || d ? {} : eN(e)), !a))
          return l ? ck(e, ek(o, e)) : ak(e, QP(o, e));
      } else {
        if (!q[f]) return i ? e : {};
        o = Zk(e, f, a);
      }
    }
    s || (s = new ni());
    var m = s.get(e);
    if (m) return m;
    s.set(e, o),
      lN(e)
        ? e.forEach(function (k) {
            o.add(Di(k, t, n, k, e, s));
          })
        : iN(e) &&
          e.forEach(function (k, g) {
            o.set(g, Di(k, t, n, g, e, s));
          });
    var v = u ? (l ? dk : fk) : l ? df : ff,
      x = c ? void 0 : v(e);
    return (
      KC(x || e, function (k, g) {
        x && ((g = k), (k = e[g])), E0(o, g, Di(k, t, n, g, e, s));
      }),
      o
    );
  }
  var MN = 4;
  function gh(e) {
    return Di(e, MN);
  }
  function I0(e, t) {
    for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r; )
      i[n] = t(e[n], n, e);
    return i;
  }
  var RN = "[object Symbol]";
  function yf(e) {
    return typeof e == "symbol" || (fr(e) && cr(e) == RN);
  }
  var LN = "Expected a function";
  function gf(e, t) {
    if (typeof e != "function" || (t != null && typeof t != "function"))
      throw new TypeError(LN);
    var n = function () {
      var r = arguments,
        i = t ? t.apply(this, r) : r[0],
        s = n.cache;
      if (s.has(i)) return s.get(i);
      var o = e.apply(this, r);
      return (n.cache = s.set(i, o) || s), o;
    };
    return (n.cache = new (gf.Cache || Ln)()), n;
  }
  gf.Cache = Ln;
  var VN = 500;
  function $N(e) {
    var t = gf(e, function (r) {
        return n.size === VN && n.clear(), r;
      }),
      n = t.cache;
    return t;
  }
  var IN =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    zN = /\\(\\)?/g,
    BN = $N(function (e) {
      var t = [];
      return (
        e.charCodeAt(0) === 46 && t.push(""),
        e.replace(IN, function (n, r, i, s) {
          t.push(i ? s.replace(zN, "$1") : r || n);
        }),
        t
      );
    });
  const UN = BN;
  var HN = 1 / 0;
  function WN(e) {
    if (typeof e == "string" || yf(e)) return e;
    var t = e + "";
    return t == "0" && 1 / e == -HN ? "-0" : t;
  }
  var GN = 1 / 0,
    vh = Fn ? Fn.prototype : void 0,
    xh = vh ? vh.toString : void 0;
  function z0(e) {
    if (typeof e == "string") return e;
    if (ms(e)) return I0(e, z0) + "";
    if (yf(e)) return xh ? xh.call(e) : "";
    var t = e + "";
    return t == "0" && 1 / e == -GN ? "-0" : t;
  }
  function KN(e) {
    return e == null ? "" : z0(e);
  }
  function B0(e) {
    return ms(e) ? I0(e, WN) : yf(e) ? [e] : F0(UN(KN(e)));
  }
  var U0 = { exports: {} },
    X = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Pe = typeof Symbol == "function" && Symbol.for,
    vf = Pe ? Symbol.for("react.element") : 60103,
    xf = Pe ? Symbol.for("react.portal") : 60106,
    ya = Pe ? Symbol.for("react.fragment") : 60107,
    ga = Pe ? Symbol.for("react.strict_mode") : 60108,
    va = Pe ? Symbol.for("react.profiler") : 60114,
    xa = Pe ? Symbol.for("react.provider") : 60109,
    wa = Pe ? Symbol.for("react.context") : 60110,
    wf = Pe ? Symbol.for("react.async_mode") : 60111,
    Sa = Pe ? Symbol.for("react.concurrent_mode") : 60111,
    Ta = Pe ? Symbol.for("react.forward_ref") : 60112,
    Ea = Pe ? Symbol.for("react.suspense") : 60113,
    YN = Pe ? Symbol.for("react.suspense_list") : 60120,
    Ca = Pe ? Symbol.for("react.memo") : 60115,
    Pa = Pe ? Symbol.for("react.lazy") : 60116,
    QN = Pe ? Symbol.for("react.block") : 60121,
    XN = Pe ? Symbol.for("react.fundamental") : 60117,
    ZN = Pe ? Symbol.for("react.responder") : 60118,
    qN = Pe ? Symbol.for("react.scope") : 60119;
  function st(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case vf:
          switch (((e = e.type), e)) {
            case wf:
            case Sa:
            case ya:
            case va:
            case ga:
            case Ea:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case wa:
                case Ta:
                case Pa:
                case Ca:
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
  function H0(e) {
    return st(e) === Sa;
  }
  X.AsyncMode = wf;
  X.ConcurrentMode = Sa;
  X.ContextConsumer = wa;
  X.ContextProvider = xa;
  X.Element = vf;
  X.ForwardRef = Ta;
  X.Fragment = ya;
  X.Lazy = Pa;
  X.Memo = Ca;
  X.Portal = xf;
  X.Profiler = va;
  X.StrictMode = ga;
  X.Suspense = Ea;
  X.isAsyncMode = function (e) {
    return H0(e) || st(e) === wf;
  };
  X.isConcurrentMode = H0;
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
    return st(e) === ya;
  };
  X.isLazy = function (e) {
    return st(e) === Pa;
  };
  X.isMemo = function (e) {
    return st(e) === Ca;
  };
  X.isPortal = function (e) {
    return st(e) === xf;
  };
  X.isProfiler = function (e) {
    return st(e) === va;
  };
  X.isStrictMode = function (e) {
    return st(e) === ga;
  };
  X.isSuspense = function (e) {
    return st(e) === Ea;
  };
  X.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === ya ||
      e === Sa ||
      e === va ||
      e === ga ||
      e === Ea ||
      e === YN ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Pa ||
          e.$$typeof === Ca ||
          e.$$typeof === xa ||
          e.$$typeof === wa ||
          e.$$typeof === Ta ||
          e.$$typeof === XN ||
          e.$$typeof === ZN ||
          e.$$typeof === qN ||
          e.$$typeof === QN))
    );
  };
  X.typeOf = st;
  U0.exports = X;
  var JN = U0.exports,
    Sf = JN,
    ej = {
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
    tj = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
    },
    nj = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    W0 = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    Tf = {};
  Tf[Sf.ForwardRef] = nj;
  Tf[Sf.Memo] = W0;
  function wh(e) {
    return Sf.isMemo(e) ? W0 : Tf[e.$$typeof] || ej;
  }
  var rj = Object.defineProperty,
    ij = Object.getOwnPropertyNames,
    Sh = Object.getOwnPropertySymbols,
    sj = Object.getOwnPropertyDescriptor,
    oj = Object.getPrototypeOf,
    Th = Object.prototype;
  function G0(e, t, n) {
    if (typeof t != "string") {
      if (Th) {
        var r = oj(t);
        r && r !== Th && G0(e, r, n);
      }
      var i = ij(t);
      Sh && (i = i.concat(Sh(t)));
      for (var s = wh(e), o = wh(t), a = 0; a < i.length; ++a) {
        var l = i[a];
        if (!tj[l] && !(n && n[l]) && !(o && o[l]) && !(s && s[l])) {
          var u = sj(t, l);
          try {
            rj(e, l, u);
          } catch {}
        }
      }
    }
    return e;
  }
  var aj = G0;
  const lj = Io(aj);
  var uj = 1,
    cj = 4;
  function fj(e) {
    return Di(e, uj | cj);
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
  function K0(e, t) {
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
  function Eh(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  var ka = S.createContext(void 0);
  ka.displayName = "FormikContext";
  var dj = ka.Provider,
    pj = ka.Consumer;
  function Y0() {
    var e = S.useContext(ka);
    return e || x0(!1), e;
  }
  var Ch = function (t) {
      return Array.isArray(t) && t.length === 0;
    },
    Ne = function (t) {
      return typeof t == "function";
    },
    ys = function (t) {
      return t !== null && typeof t == "object";
    },
    hj = function (t) {
      return String(Math.floor(Number(t))) === t;
    },
    Tl = function (t) {
      return Object.prototype.toString.call(t) === "[object String]";
    },
    Q0 = function (t) {
      return S.Children.count(t) === 0;
    },
    El = function (t) {
      return ys(t) && Ne(t.then);
    };
  function ie(e, t, n, r) {
    r === void 0 && (r = 0);
    for (var i = B0(t); e && r < i.length; ) e = e[i[r++]];
    return (r !== i.length && !e) || e === void 0 ? n : e;
  }
  function Lt(e, t, n) {
    for (var r = gh(e), i = r, s = 0, o = B0(t); s < o.length - 1; s++) {
      var a = o[s],
        l = ie(e, o.slice(0, s + 1));
      if (l && (ys(l) || Array.isArray(l))) i = i[a] = gh(l);
      else {
        var u = o[s + 1];
        i = i[a] = hj(u) && Number(u) >= 0 ? [] : {};
      }
    }
    return (s === 0 ? e : i)[o[s]] === n
      ? e
      : (n === void 0 ? delete i[o[s]] : (i[o[s]] = n),
        s === 0 && n === void 0 && delete r[o[s]],
        r);
  }
  function X0(e, t, n, r) {
    n === void 0 && (n = new WeakMap()), r === void 0 && (r = {});
    for (var i = 0, s = Object.keys(e); i < s.length; i++) {
      var o = s[i],
        a = e[o];
      ys(a)
        ? n.get(a) ||
          (n.set(a, !0), (r[o] = Array.isArray(a) ? [] : {}), X0(a, t, n, r[o]))
        : (r[o] = t);
    }
    return r;
  }
  function mj(e, t) {
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
          touched: X0(e.values, !0),
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
  function yj(e) {
    var t = e.validateOnChange,
      n = t === void 0 ? !0 : t,
      r = e.validateOnBlur,
      i = r === void 0 ? !0 : r,
      s = e.validateOnMount,
      o = s === void 0 ? !1 : s,
      a = e.isInitialValid,
      l = e.enableReinitialize,
      u = l === void 0 ? !1 : l,
      c = e.onSubmit,
      f = mn(e, [
        "validateOnChange",
        "validateOnBlur",
        "validateOnMount",
        "isInitialValid",
        "enableReinitialize",
        "onSubmit",
      ]),
      d = Y(
        {
          validateOnChange: n,
          validateOnBlur: i,
          validateOnMount: o,
          onSubmit: c,
        },
        f
      ),
      m = S.useRef(d.initialValues),
      v = S.useRef(d.initialErrors || In),
      x = S.useRef(d.initialTouched || zs),
      k = S.useRef(d.initialStatus),
      g = S.useRef(!1),
      p = S.useRef({});
    S.useEffect(function () {
      return (
        (g.current = !0),
        function () {
          g.current = !1;
        }
      );
    }, []);
    var y = S.useState(0),
      w = y[1],
      C = S.useRef({
        values: d.initialValues,
        errors: d.initialErrors || In,
        touched: d.initialTouched || zs,
        status: d.initialStatus,
        isSubmitting: !1,
        isValidating: !1,
        submitCount: 0,
      }),
      P = C.current,
      E = S.useCallback(function (T) {
        var _ = C.current;
        (C.current = mj(_, T)),
          _ !== C.current &&
            w(function (F) {
              return F + 1;
            });
      }, []),
      N = S.useCallback(
        function (T, _) {
          return new Promise(function (F, M) {
            var z = d.validate(T, _);
            z == null
              ? F(In)
              : El(z)
              ? z.then(
                  function (K) {
                    F(K || In);
                  },
                  function (K) {
                    M(K);
                  }
                )
              : F(z);
          });
        },
        [d.validate]
      ),
      O = S.useCallback(
        function (T, _) {
          var F = d.validationSchema,
            M = Ne(F) ? F(_) : F,
            z = _ && M.validateAt ? M.validateAt(_, T) : vj(T, M);
          return new Promise(function (K, Se) {
            z.then(
              function () {
                K(In);
              },
              function ($t) {
                $t.name === "ValidationError" ? K(gj($t)) : Se($t);
              }
            );
          });
        },
        [d.validationSchema]
      ),
      D = S.useCallback(function (T, _) {
        return new Promise(function (F) {
          return F(p.current[T].validate(_));
        });
      }, []),
      $ = S.useCallback(
        function (T) {
          var _ = Object.keys(p.current).filter(function (M) {
              return Ne(p.current[M].validate);
            }),
            F =
              _.length > 0
                ? _.map(function (M) {
                    return D(M, ie(T, M));
                  })
                : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
          return Promise.all(F).then(function (M) {
            return M.reduce(function (z, K, Se) {
              return (
                K === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" ||
                  (K && (z = Lt(z, _[Se], K))),
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
            d.validationSchema ? O(T) : {},
            d.validate ? N(T) : {},
          ]).then(function (_) {
            var F = _[0],
              M = _[1],
              z = _[2],
              K = Du.all([F, M, z], { arrayMerge: xj });
            return K;
          });
        },
        [d.validate, d.validationSchema, $, N, O]
      ),
      U = lt(function (T) {
        return (
          T === void 0 && (T = P.values),
          E({ type: "SET_ISVALIDATING", payload: !0 }),
          ve(T).then(function (_) {
            return (
              g.current &&
                (E({ type: "SET_ISVALIDATING", payload: !1 }),
                E({ type: "SET_ERRORS", payload: _ })),
              _
            );
          })
        );
      });
    S.useEffect(
      function () {
        o && g.current === !0 && cn(m.current, d.initialValues) && U(m.current);
      },
      [o, U]
    );
    var G = S.useCallback(
      function (T) {
        var _ = T && T.values ? T.values : m.current,
          F =
            T && T.errors
              ? T.errors
              : v.current
              ? v.current
              : d.initialErrors || {},
          M =
            T && T.touched
              ? T.touched
              : x.current
              ? x.current
              : d.initialTouched || {},
          z =
            T && T.status ? T.status : k.current ? k.current : d.initialStatus;
        (m.current = _), (v.current = F), (x.current = M), (k.current = z);
        var K = function () {
          E({
            type: "RESET_FORM",
            payload: {
              isSubmitting: !!T && !!T.isSubmitting,
              errors: F,
              touched: M,
              status: z,
              values: _,
              isValidating: !!T && !!T.isValidating,
              submitCount:
                T && T.submitCount && typeof T.submitCount == "number"
                  ? T.submitCount
                  : 0,
            },
          });
        };
        if (d.onReset) {
          var Se = d.onReset(P.values, ri);
          El(Se) ? Se.then(K) : K();
        } else K();
      },
      [d.initialErrors, d.initialStatus, d.initialTouched, d.onReset]
    );
    S.useEffect(
      function () {
        g.current === !0 &&
          !cn(m.current, d.initialValues) &&
          u &&
          ((m.current = d.initialValues), G(), o && U(m.current));
      },
      [u, d.initialValues, G, o, U]
    ),
      S.useEffect(
        function () {
          u &&
            g.current === !0 &&
            !cn(v.current, d.initialErrors) &&
            ((v.current = d.initialErrors || In),
            E({ type: "SET_ERRORS", payload: d.initialErrors || In }));
        },
        [u, d.initialErrors]
      ),
      S.useEffect(
        function () {
          u &&
            g.current === !0 &&
            !cn(x.current, d.initialTouched) &&
            ((x.current = d.initialTouched || zs),
            E({ type: "SET_TOUCHED", payload: d.initialTouched || zs }));
        },
        [u, d.initialTouched]
      ),
      S.useEffect(
        function () {
          u &&
            g.current === !0 &&
            !cn(k.current, d.initialStatus) &&
            ((k.current = d.initialStatus),
            E({ type: "SET_STATUS", payload: d.initialStatus }));
        },
        [u, d.initialStatus, d.initialTouched]
      );
    var Z = lt(function (T) {
        if (p.current[T] && Ne(p.current[T].validate)) {
          var _ = ie(P.values, T),
            F = p.current[T].validate(_);
          return El(F)
            ? (E({ type: "SET_ISVALIDATING", payload: !0 }),
              F.then(function (M) {
                return M;
              }).then(function (M) {
                E({ type: "SET_FIELD_ERROR", payload: { field: T, value: M } }),
                  E({ type: "SET_ISVALIDATING", payload: !1 });
              }))
            : (E({ type: "SET_FIELD_ERROR", payload: { field: T, value: F } }),
              Promise.resolve(F));
        } else if (d.validationSchema)
          return (
            E({ type: "SET_ISVALIDATING", payload: !0 }),
            O(P.values, T)
              .then(function (M) {
                return M;
              })
              .then(function (M) {
                E({
                  type: "SET_FIELD_ERROR",
                  payload: { field: T, value: ie(M, T) },
                }),
                  E({ type: "SET_ISVALIDATING", payload: !1 });
              })
          );
        return Promise.resolve();
      }),
      Ie = S.useCallback(function (T, _) {
        var F = _.validate;
        p.current[T] = { validate: F };
      }, []),
      ot = S.useCallback(function (T) {
        delete p.current[T];
      }, []),
      b = lt(function (T, _) {
        E({ type: "SET_TOUCHED", payload: T });
        var F = _ === void 0 ? i : _;
        return F ? U(P.values) : Promise.resolve();
      }),
      V = S.useCallback(function (T) {
        E({ type: "SET_ERRORS", payload: T });
      }, []),
      I = lt(function (T, _) {
        var F = Ne(T) ? T(P.values) : T;
        E({ type: "SET_VALUES", payload: F });
        var M = _ === void 0 ? n : _;
        return M ? U(F) : Promise.resolve();
      }),
      R = S.useCallback(function (T, _) {
        E({ type: "SET_FIELD_ERROR", payload: { field: T, value: _ } });
      }, []),
      W = lt(function (T, _, F) {
        E({ type: "SET_FIELD_VALUE", payload: { field: T, value: _ } });
        var M = F === void 0 ? n : F;
        return M ? U(Lt(P.values, T, _)) : Promise.resolve();
      }),
      Nt = S.useCallback(
        function (T, _) {
          var F = _,
            M = T,
            z;
          if (!Tl(T)) {
            T.persist && T.persist();
            var K = T.target ? T.target : T.currentTarget,
              Se = K.type,
              $t = K.name,
              Oa = K.id,
              Da = K.value,
              hv = K.checked,
              _b = K.outerHTML,
              bf = K.options,
              mv = K.multiple;
            (F = _ || $t || Oa),
              (M = /number|range/.test(Se)
                ? ((z = parseFloat(Da)), isNaN(z) ? "" : z)
                : /checkbox/.test(Se)
                ? Sj(ie(P.values, F), hv, Da)
                : bf && mv
                ? wj(bf)
                : Da);
          }
          F && W(F, M);
        },
        [W, P.values]
      ),
      ze = lt(function (T) {
        if (Tl(T))
          return function (_) {
            return Nt(_, T);
          };
        Nt(T);
      }),
      Qe = lt(function (T, _, F) {
        _ === void 0 && (_ = !0),
          E({ type: "SET_FIELD_TOUCHED", payload: { field: T, value: _ } });
        var M = F === void 0 ? i : F;
        return M ? U(P.values) : Promise.resolve();
      }),
      _e = S.useCallback(
        function (T, _) {
          T.persist && T.persist();
          var F = T.target,
            M = F.name,
            z = F.id,
            K = F.outerHTML,
            Se = _ || M || z;
          Qe(Se, !0);
        },
        [Qe]
      ),
      yt = lt(function (T) {
        if (Tl(T))
          return function (_) {
            return _e(_, T);
          };
        _e(T);
      }),
      gs = S.useCallback(function (T) {
        Ne(T)
          ? E({ type: "SET_FORMIK_STATE", payload: T })
          : E({
              type: "SET_FORMIK_STATE",
              payload: function () {
                return T;
              },
            });
      }, []),
      yr = S.useCallback(function (T) {
        E({ type: "SET_STATUS", payload: T });
      }, []),
      Vn = S.useCallback(function (T) {
        E({ type: "SET_ISSUBMITTING", payload: T });
      }, []),
      gt = lt(function () {
        return (
          E({ type: "SUBMIT_ATTEMPT" }),
          U().then(function (T) {
            var _ = T instanceof Error,
              F = !_ && Object.keys(T).length === 0;
            if (F) {
              var M;
              try {
                if (((M = av()), M === void 0)) return;
              } catch (z) {
                throw z;
              }
              return Promise.resolve(M)
                .then(function (z) {
                  return g.current && E({ type: "SUBMIT_SUCCESS" }), z;
                })
                .catch(function (z) {
                  if (g.current) throw (E({ type: "SUBMIT_FAILURE" }), z);
                });
            } else if (g.current && (E({ type: "SUBMIT_FAILURE" }), _)) throw T;
          })
        );
      }),
      vs = lt(function (T) {
        T && T.preventDefault && Ne(T.preventDefault) && T.preventDefault(),
          T &&
            T.stopPropagation &&
            Ne(T.stopPropagation) &&
            T.stopPropagation(),
          gt().catch(function (_) {
            console.warn(
              "Warning: An unhandled error was caught from submitForm()",
              _
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
        setStatus: yr,
        setSubmitting: Vn,
        setTouched: b,
        setValues: I,
        setFormikState: gs,
        submitForm: gt,
      },
      av = lt(function () {
        return c(P.values, ri);
      }),
      lv = lt(function (T) {
        T && T.preventDefault && Ne(T.preventDefault) && T.preventDefault(),
          T &&
            T.stopPropagation &&
            Ne(T.stopPropagation) &&
            T.stopPropagation(),
          G();
      }),
      uv = S.useCallback(
        function (T) {
          return {
            value: ie(P.values, T),
            error: ie(P.errors, T),
            touched: !!ie(P.touched, T),
            initialValue: ie(m.current, T),
            initialTouched: !!ie(x.current, T),
            initialError: ie(v.current, T),
          };
        },
        [P.errors, P.touched, P.values]
      ),
      cv = S.useCallback(
        function (T) {
          return {
            setValue: function (F, M) {
              return W(T, F, M);
            },
            setTouched: function (F, M) {
              return Qe(T, F, M);
            },
            setError: function (F) {
              return R(T, F);
            },
          };
        },
        [W, Qe, R]
      ),
      fv = S.useCallback(
        function (T) {
          var _ = ys(T),
            F = _ ? T.name : T,
            M = ie(P.values, F),
            z = { name: F, value: M, onChange: ze, onBlur: yt };
          if (_) {
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
        [yt, ze, P.values]
      ),
      Fa = S.useMemo(
        function () {
          return !cn(m.current, P.values);
        },
        [m.current, P.values]
      ),
      dv = S.useMemo(
        function () {
          return typeof a < "u"
            ? Fa
              ? P.errors && Object.keys(P.errors).length === 0
              : a !== !1 && Ne(a)
              ? a(d)
              : a
            : P.errors && Object.keys(P.errors).length === 0;
        },
        [a, Fa, P.errors, d]
      ),
      pv = Y({}, P, {
        initialValues: m.current,
        initialErrors: v.current,
        initialTouched: x.current,
        initialStatus: k.current,
        handleBlur: yt,
        handleChange: ze,
        handleReset: lv,
        handleSubmit: vs,
        resetForm: G,
        setErrors: V,
        setFormikState: gs,
        setFieldTouched: Qe,
        setFieldValue: W,
        setFieldError: R,
        setStatus: yr,
        setSubmitting: Vn,
        setTouched: b,
        setValues: I,
        submitForm: gt,
        validateForm: U,
        validateField: Z,
        isValid: dv,
        dirty: Fa,
        unregisterField: ot,
        registerField: Ie,
        getFieldProps: fv,
        getFieldMeta: uv,
        getFieldHelpers: cv,
        validateOnBlur: i,
        validateOnChange: n,
        validateOnMount: o,
      });
    return pv;
  }
  function Ef(e) {
    var t = yj(e),
      n = e.component,
      r = e.children,
      i = e.render,
      s = e.innerRef;
    return (
      S.useImperativeHandle(s, function () {
        return t;
      }),
      S.createElement(
        dj,
        { value: t },
        n
          ? S.createElement(n, t)
          : i
          ? i(t)
          : r
          ? Ne(r)
            ? r(t)
            : Q0(r)
            ? null
            : S.Children.only(r)
          : null
      )
    );
  }
  function gj(e) {
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
  function vj(e, t, n, r) {
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
              return Array.isArray(i) === !0 || Kp(i)
                ? Iu(i)
                : i !== ""
                ? i
                : void 0;
            }))
          : Kp(e[r])
          ? (t[r] = Iu(e[r]))
          : (t[r] = e[r] !== "" ? e[r] : void 0);
      }
    return t;
  }
  function xj(e, t, n) {
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
  function wj(e) {
    return Array.from(e)
      .filter(function (t) {
        return t.selected;
      })
      .map(function (t) {
        return t.value;
      });
  }
  function Sj(e, t, n) {
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
  var Tj =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u"
      ? S.useLayoutEffect
      : S.useEffect;
  function lt(e) {
    var t = S.useRef(e);
    return (
      Tj(function () {
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
      u = Y0(),
      c = mn(u, ["validate", "validationSchema"]),
      f = c.registerField,
      d = c.unregisterField;
    S.useEffect(
      function () {
        return (
          f(n, { validate: t }),
          function () {
            d(n);
          }
        );
      },
      [f, d, n, t]
    );
    var m = c.getFieldProps(Y({ name: n }, l)),
      v = c.getFieldMeta(n),
      x = { field: m, form: c };
    if (r) return r(Y({}, x, { meta: v }));
    if (Ne(i)) return i(Y({}, x, { meta: v }));
    if (o) {
      if (typeof o == "string") {
        var k = l.innerRef,
          g = mn(l, ["innerRef"]);
        return S.createElement(o, Y({ ref: k }, m, g, { className: a }), i);
      }
      return S.createElement(
        o,
        Y({ field: m, form: c }, l, { className: a }),
        i
      );
    }
    var p = s || "input";
    if (typeof p == "string") {
      var y = l.innerRef,
        w = mn(l, ["innerRef"]);
      return S.createElement(p, Y({ ref: y }, m, w, { className: a }), i);
    }
    return S.createElement(p, Y({}, m, l, { className: a }), i);
  }
  var Na = S.forwardRef(function (e, t) {
    var n = e.action,
      r = mn(e, ["action"]),
      i = n ?? "#",
      s = Y0(),
      o = s.handleReset,
      a = s.handleSubmit;
    return S.createElement(
      "form",
      Y({ onSubmit: a, ref: t, onReset: o, action: i }, r)
    );
  });
  Na.displayName = "Form";
  function Ej(e) {
    var t = function (i) {
        return S.createElement(pj, null, function (s) {
          return s || x0(!1), S.createElement(e, Y({}, i, { formik: s }));
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
      lj(t, e)
    );
  }
  var Cj = function (t, n, r) {
      var i = sr(t),
        s = i[n];
      return i.splice(n, 1), i.splice(r, 0, s), i;
    },
    Pj = function (t, n, r) {
      var i = sr(t),
        s = i[n];
      return (i[n] = i[r]), (i[r] = s), i;
    },
    Cl = function (t, n, r) {
      var i = sr(t);
      return i.splice(n, 0, r), i;
    },
    kj = function (t, n, r) {
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
    Ph = function (t, n) {
      var r = typeof t == "function" ? t : n;
      return function (i) {
        if (Array.isArray(i) || ys(i)) {
          var s = sr(i);
          return r(s);
        }
        return i;
      };
    },
    Nj = (function (e) {
      K0(t, e);
      function t(r) {
        var i;
        return (
          (i = e.call(this, r) || this),
          (i.updateArrayField = function (s, o, a) {
            var l = i.props,
              u = l.name,
              c = l.formik.setFormikState;
            c(function (f) {
              var d = Ph(a, s),
                m = Ph(o, s),
                v = Lt(f.values, u, s(ie(f.values, u))),
                x = a ? d(ie(f.errors, u)) : void 0,
                k = o ? m(ie(f.touched, u)) : void 0;
              return (
                Ch(x) && (x = void 0),
                Ch(k) && (k = void 0),
                Y({}, f, {
                  values: v,
                  errors: a ? Lt(f.errors, u, x) : f.errors,
                  touched: o ? Lt(f.touched, u, k) : f.touched,
                })
              );
            });
          }),
          (i.push = function (s) {
            return i.updateArrayField(
              function (o) {
                return [].concat(sr(o), [fj(s)]);
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
                return Pj(a, s, o);
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
                return Cj(a, s, o);
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
                return Cl(a, s, o);
              },
              function (a) {
                return Cl(a, s, null);
              },
              function (a) {
                return Cl(a, s, null);
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
                return kj(a, s, o);
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
          (i.remove = i.remove.bind(Eh(i))),
          (i.pop = i.pop.bind(Eh(i))),
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
                  Ne(a.splice) && a.splice(i, 1),
                  Ne(a.every) &&
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
            c = s.formik,
            f = mn(c, ["validate", "validationSchema"]),
            d = Y({}, i, { form: f, name: u });
          return o
            ? S.createElement(o, d)
            : a
            ? a(d)
            : l
            ? typeof l == "function"
              ? l(d)
              : Q0(l)
              ? null
              : S.Children.only(l)
            : null;
        }),
        t
      );
    })(S.Component);
  Nj.defaultProps = { validateOnChange: !0 };
  var jj = (function (e) {
      K0(t, e);
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
            c = mn(i, ["component", "formik", "render", "children", "name"]),
            f = ie(o.touched, u),
            d = ie(o.errors, u);
          return f && d
            ? a
              ? Ne(a)
                ? a(d)
                : null
              : l
              ? Ne(l)
                ? l(d)
                : null
              : s
              ? S.createElement(s, c, d)
              : d
            : null;
        }),
        t
      );
    })(S.Component),
    pe = Ej(jj);
  function hr(e) {
    (this._maxSize = e), this.clear();
  }
  hr.prototype.clear = function () {
    (this._size = 0), (this._values = Object.create(null));
  };
  hr.prototype.get = function (e) {
    return this._values[e];
  };
  hr.prototype.set = function (e, t) {
    return (
      this._size >= this._maxSize && this.clear(),
      e in this._values || this._size++,
      (this._values[e] = t)
    );
  };
  var bj = /[^.^\]^[]+|(?=\[\]|\.\.)/g,
    Z0 = /^\d+$/,
    _j = /^\d/,
    Aj = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,
    Fj = /^\s*(['"]?)(.*?)(\1)\s*$/,
    Cf = 512,
    kh = new hr(Cf),
    Nh = new hr(Cf),
    jh = new hr(Cf),
    qn = {
      Cache: hr,
      split: zu,
      normalizePath: Pl,
      setter: function (e) {
        var t = Pl(e);
        return (
          Nh.get(e) ||
          Nh.set(e, function (r, i) {
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
        var n = Pl(e);
        return (
          jh.get(e) ||
          jh.set(e, function (i) {
            for (var s = 0, o = n.length; s < o; )
              if (i != null || !t) i = i[n[s++]];
              else return;
            return i;
          })
        );
      },
      join: function (e) {
        return e.reduce(function (t, n) {
          return t + (Pf(n) || Z0.test(n) ? "[" + n + "]" : (t ? "." : "") + n);
        }, "");
      },
      forEach: function (e, t, n) {
        Oj(Array.isArray(e) ? e : zu(e), t, n);
      },
    };
  function Pl(e) {
    return (
      kh.get(e) ||
      kh.set(
        e,
        zu(e).map(function (t) {
          return t.replace(Fj, "$2");
        })
      )
    );
  }
  function zu(e) {
    return e.match(bj) || [""];
  }
  function Oj(e, t, n) {
    var r = e.length,
      i,
      s,
      o,
      a;
    for (s = 0; s < r; s++)
      (i = e[s]),
        i &&
          (Rj(i) && (i = '"' + i + '"'),
          (a = Pf(i)),
          (o = !a && /^\d+$/.test(i)),
          t.call(n, i, a, o, s, e));
  }
  function Pf(e) {
    return typeof e == "string" && e && ["'", '"'].indexOf(e.charAt(0)) !== -1;
  }
  function Dj(e) {
    return e.match(_j) && !e.match(Z0);
  }
  function Mj(e) {
    return Aj.test(e);
  }
  function Rj(e) {
    return !Pf(e) && (Dj(e) || Mj(e));
  }
  const Lj =
      /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,
    ja = (e) => e.match(Lj) || [],
    ba = (e) => e[0].toUpperCase() + e.slice(1),
    kf = (e, t) => ja(e).join(t).toLowerCase(),
    q0 = (e) =>
      ja(e).reduce(
        (t, n) =>
          `${t}${
            t ? n[0].toUpperCase() + n.slice(1).toLowerCase() : n.toLowerCase()
          }`,
        ""
      ),
    Vj = (e) => ba(q0(e)),
    $j = (e) => kf(e, "_"),
    Ij = (e) => kf(e, "-"),
    zj = (e) => ba(kf(e, " ")),
    Bj = (e) => ja(e).map(ba).join(" ");
  var kl = {
      words: ja,
      upperFirst: ba,
      camelCase: q0,
      pascalCase: Vj,
      snakeCase: $j,
      kebabCase: Ij,
      sentenceCase: zj,
      titleCase: Bj,
    },
    Nf = { exports: {} };
  Nf.exports = function (e) {
    return J0(Uj(e), e);
  };
  Nf.exports.array = J0;
  function J0(e, t) {
    var n = e.length,
      r = new Array(n),
      i = {},
      s = n,
      o = Hj(t),
      a = Wj(e);
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
    function l(u, c, f) {
      if (f.has(u)) {
        var d;
        try {
          d = ", node was:" + JSON.stringify(u);
        } catch {
          d = "";
        }
        throw new Error("Cyclic dependency" + d);
      }
      if (!a.has(u))
        throw new Error(
          "Found unknown node. Make sure to provided all involved nodes. Unknown node: " +
            JSON.stringify(u)
        );
      if (!i[c]) {
        i[c] = !0;
        var m = o.get(u) || new Set();
        if (((m = Array.from(m)), (c = m.length))) {
          f.add(u);
          do {
            var v = m[--c];
            l(v, a.get(v), f);
          } while (c);
          f.delete(u);
        }
        r[--n] = u;
      }
    }
  }
  function Uj(e) {
    for (var t = new Set(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.add(i[0]), t.add(i[1]);
    }
    return Array.from(t);
  }
  function Hj(e) {
    for (var t = new Map(), n = 0, r = e.length; n < r; n++) {
      var i = e[n];
      t.has(i[0]) || t.set(i[0], new Set()),
        t.has(i[1]) || t.set(i[1], new Set()),
        t.get(i[0]).add(i[1]);
    }
    return t;
  }
  function Wj(e) {
    for (var t = new Map(), n = 0, r = e.length; n < r; n++) t.set(e[n], n);
    return t;
  }
  var Gj = Nf.exports;
  const Kj = Io(Gj),
    Yj = Object.prototype.toString,
    Qj = Error.prototype.toString,
    Xj = RegExp.prototype.toString,
    Zj = typeof Symbol < "u" ? Symbol.prototype.toString : () => "",
    qj = /^Symbol\((.*)\)(.*)$/;
  function Jj(e) {
    return e != +e ? "NaN" : e === 0 && 1 / e < 0 ? "-0" : "" + e;
  }
  function bh(e, t = !1) {
    if (e == null || e === !0 || e === !1) return "" + e;
    const n = typeof e;
    if (n === "number") return Jj(e);
    if (n === "string") return t ? `"${e}"` : e;
    if (n === "function") return "[Function " + (e.name || "anonymous") + "]";
    if (n === "symbol") return Zj.call(e).replace(qj, "Symbol($1)");
    const r = Yj.call(e).slice(8, -1);
    return r === "Date"
      ? isNaN(e.getTime())
        ? "" + e
        : e.toISOString(e)
      : r === "Error" || e instanceof Error
      ? "[" + Qj.call(e) + "]"
      : r === "RegExp"
      ? Xj.call(e)
      : null;
  }
  function Nn(e, t) {
    let n = bh(e, t);
    return n !== null
      ? n
      : JSON.stringify(
          e,
          function (r, i) {
            let s = bh(this[r], t);
            return s !== null ? s : i;
          },
          2
        );
  }
  function ev(e) {
    return e == null ? [] : [].concat(e);
  }
  let tv,
    eb = /\$\{\s*(\w+)\s*\}/g;
  tv = Symbol.toStringTag;
  class Ue extends Error {
    static formatError(t, n) {
      const r = n.label || n.path || "this";
      return (
        r !== n.path && (n = Object.assign({}, n, { path: r })),
        typeof t == "string"
          ? t.replace(eb, (i, s) => Nn(n[s]))
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
        (this[tv] = "Error"),
        (this.name = "ValidationError"),
        (this.value = n),
        (this.path = r),
        (this.type = i),
        (this.errors = []),
        (this.inner = []),
        ev(t).forEach((o) => {
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
  let At = {
      default: "${path} is invalid",
      required: "${path} is a required field",
      defined: "${path} must be defined",
      notNull: "${path} cannot be null",
      oneOf: "${path} must be one of the following values: ${values}",
      notOneOf: "${path} must not be one of the following values: ${values}",
      notType: ({ path: e, type: t, value: n, originalValue: r }) => {
        const i =
          r != null && r !== n
            ? ` (cast from the value \`${Nn(r, !0)}\`).`
            : ".";
        return t !== "mixed"
          ? `${e} must be a \`${t}\` type, but the final value was: \`${Nn(
              n,
              !0
            )}\`` + i
          : `${e} must match the configured type. The validated value was: \`${Nn(
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
            } for value: \`${Nn(n, !0)}\``;
          if (n.length > i)
            return `${t} tuple value has too many items, expected a length of ${i} but got ${
              n.length
            } for value: \`${Nn(n, !0)}\``;
        }
        return Ue.formatError(At.notType, e);
      },
    };
  Object.assign(Object.create(null), {
    mixed: At,
    string: xt,
    number: on,
    date: Bu,
    object: Uu,
    array: nb,
    boolean: tb,
    tuple: rb,
  });
  const jf = (e) => e && e.__isYupSchema__;
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
        let c = o(...a) ? i : s;
        return (u = c == null ? void 0 : c(l)) != null ? u : l;
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
      if (!jf(i)) throw new TypeError("conditions must return a schema object");
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
      const { name: u, test: c, params: f, message: d, skipAbsent: m } = e;
      let {
        parent: v,
        context: x,
        abortEarly: k = o.spec.abortEarly,
        disableStackTrace: g = o.spec.disableStackTrace,
      } = i;
      function p($) {
        return mr.isRef($) ? $.getValue(n, v, x) : $;
      }
      function y($ = {}) {
        var ve;
        const U = Object.assign(
          {
            value: n,
            originalValue: s,
            label: o.spec.label,
            path: $.path || r,
            spec: o.spec,
          },
          f,
          $.params
        );
        for (const Z of Object.keys(U)) U[Z] = p(U[Z]);
        const G = new Ue(
          Ue.formatError($.message || d, U),
          n,
          U.path,
          $.type || u,
          (ve = $.disableStackTrace) != null ? ve : g
        );
        return (G.params = U), G;
      }
      const w = k ? a : l;
      let C = {
        path: r,
        parent: v,
        type: u,
        from: i.from,
        createError: y,
        resolve: p,
        options: i,
        originalValue: s,
        schema: o,
      };
      const P = ($) => {
          Ue.isError($) ? w($) : $ ? l(null) : w(y());
        },
        E = ($) => {
          Ue.isError($) ? w($) : a($);
        };
      if (m && Gt(n)) return P(!0);
      let O;
      try {
        var D;
        if (
          ((O = c.call(C, n, C)),
          typeof ((D = O) == null ? void 0 : D.then) == "function")
        ) {
          if (i.sync)
            throw new Error(
              `Validation test of type: "${C.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`
            );
          return Promise.resolve(O).then(P, E);
        }
      } catch ($) {
        E($);
        return;
      }
      P(O);
    }
    return (t.OPTIONS = e), t;
  }
  function ib(e, t, n, r = n) {
    let i, s, o;
    return t
      ? (qn.forEach(t, (a, l, u) => {
          let c = l ? a.slice(1, a.length - 1) : a;
          e = e.resolve({ context: r, parent: i, value: n });
          let f = e.type === "tuple",
            d = u ? parseInt(c, 10) : 0;
          if (e.innerType || f) {
            if (f && !u)
              throw new Error(
                `Yup.reach cannot implicitly index into a tuple type. the path part "${o}" must contain an index to the tuple element, e.g. "${o}[0]"`
              );
            if (n && d >= n.length)
              throw new Error(
                `Yup.reach cannot resolve an array item at index: ${a}, in the path: ${t}. because there is no value at that index. `
              );
            (i = n), (n = n && n[d]), (e = f ? e.spec.types[d] : e.innerType);
          }
          if (!u) {
            if (!e.fields || !e.fields[c])
              throw new Error(
                `The schema does not contain the path: ${t}. (failed at: ${o} which is a type: "${e.type}")`
              );
            (i = n), (n = n && n[c]), (e = e.fields[c]);
          }
          (s = c), (o = l ? "[" + a + "]" : "." + a);
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
    if (jf(e) || !e || typeof e != "object") return e;
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
  class kt {
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
          this.typeError(At.notType);
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
        let o = Nn(t),
          a = Nn(s);
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
      for (let c of Object.values(this.internalTests)) c && u.push(c);
      this.runTests(
        { path: s, value: l, originalValue: o, options: n, tests: u },
        r,
        (c) => {
          if (c.length) return i(c, l);
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
        c = (x) => {
          i || ((i = !0), n(x, o));
        },
        f = (x) => {
          i || ((i = !0), r(x, o));
        },
        d = s.length,
        m = [];
      if (!d) return f([]);
      let v = { value: o, originalValue: a, path: l, options: u, schema: this };
      for (let x = 0; x < s.length; x++) {
        const k = s[x];
        k(v, c, function (p) {
          p && (Array.isArray(p) ? m.push(...p) : m.push(p)), --d <= 0 && f(m);
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
      const c = Object.assign({}, o, {
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
      return (f, d, m) => this.resolve(c)._validate(u, c, d, m);
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
    defined(t = At.defined) {
      return this.optionality(!1, t);
    }
    nullable() {
      return this.nullability(!0);
    }
    nonNullable(t = At.notNull) {
      return this.nullability(!1, t);
    }
    required(t = At.required) {
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
        n.message === void 0 && (n.message = At.default),
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
        i = ev(t).map((s) => new mr(s));
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
    oneOf(t, n = At.oneOf) {
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
    notOneOf(t, n = At.notOneOf) {
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
          .filter((l, u, c) => c.findIndex((f) => f.name === l.name) === u),
      };
    }
  }
  kt.prototype.__isYupSchema__ = !0;
  for (const e of ["validate", "validateSync"])
    kt.prototype[`${e}At`] = function (t, n, r = {}) {
      const { parent: i, parentPath: s, schema: o } = ib(this, t, n, r.context);
      return o[e](i && i[s], Object.assign({}, r, { parent: i, path: t }));
    };
  for (const e of ["equals", "is"]) kt.prototype[e] = kt.prototype.oneOf;
  for (const e of ["not", "nope"]) kt.prototype[e] = kt.prototype.notOneOf;
  let sb =
      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    ob =
      /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    ab =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
    lb = (e) => Gt(e) || e === e.trim(),
    ub = {}.toString();
  function he() {
    return new nv();
  }
  class nv extends kt {
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
            message: t || At.required,
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
  he.prototype = nv.prototype;
  let cb = (e) => e != +e;
  function rv() {
    return new iv();
  }
  class iv extends kt {
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
  rv.prototype = iv.prototype;
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
  let pb = new Date(""),
    hb = (e) => Object.prototype.toString.call(e) === "[object Date]";
  class _a extends kt {
    constructor() {
      super({
        type: "date",
        check(t) {
          return hb(t) && !isNaN(t.getTime());
        },
      }),
        this.withMutation(() => {
          this.transform((t, n, r) =>
            !r.spec.coerce || r.isType(t) || t === null
              ? t
              : ((t = db(t)), isNaN(t) ? _a.INVALID_DATE : new Date(t))
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
  _a.INVALID_DATE = pb;
  _a.prototype;
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
          : jf(a) && "deps" in a && a.deps.forEach((l) => s(l, o));
    }
    return Kj.array(Array.from(r), n).reverse();
  }
  function _h(e, t) {
    let n = 1 / 0;
    return (
      e.some((r, i) => {
        var s;
        if ((s = t.path) != null && s.includes(r)) return (n = i), !0;
      }),
      n
    );
  }
  function sv(e) {
    return (t, n) => _h(e, t) - _h(e, n);
  }
  const yb = (e, t, n) => {
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
  const gb = (e, t) => {
    const n = [...qn.normalizePath(t)];
    if (n.length === 1) return n[0] in e;
    let r = n.pop(),
      i = qn.getter(qn.join(n), !0)(e);
    return !!(i && r in i);
  };
  let Ah = (e) => Object.prototype.toString.call(e) === "[object Object]";
  function vb(e, t) {
    let n = Object.keys(e.fields);
    return Object.keys(t).filter((r) => n.indexOf(r) === -1);
  }
  const xb = sv([]);
  function Aa(e) {
    return new ov(e);
  }
  class ov extends kt {
    constructor(t) {
      super({
        type: "object",
        check(n) {
          return Ah(n) || typeof n == "function";
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
          Object.keys(i).filter((f) => !this._nodes.includes(f))
        ),
        l = {},
        u = Object.assign({}, n, {
          parent: l,
          __validating: n.__validating || !1,
        }),
        c = !1;
      for (const f of a) {
        let d = s[f],
          m = f in i;
        if (d) {
          let v,
            x = i[f];
          (u.path = (n.path ? `${n.path}.` : "") + f),
            (d = d.resolve({ value: x, context: n.context, parent: l }));
          let k = d instanceof kt ? d.spec : void 0,
            g = k == null ? void 0 : k.strict;
          if (k != null && k.strip) {
            c = c || f in i;
            continue;
          }
          (v = !n.__validating || !g ? d.cast(i[f], u) : i[f]),
            v !== void 0 && (l[f] = v);
        } else m && !o && (l[f] = i[f]);
        (m !== f in l || l[f] !== i[f]) && (c = !0);
      }
      return c ? l : i;
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
          if (!a || !Ah(u)) {
            i(l, u);
            return;
          }
          o = o || u;
          let c = [];
          for (let f of this._nodes) {
            let d = this.fields[f];
            !d ||
              mr.isRef(d) ||
              c.push(
                d.asNestedTest({
                  options: n,
                  key: f,
                  parent: u,
                  parentPath: n.path,
                  originalParent: o,
                })
              );
          }
          this.runTests(
            { tests: c, value: u, originalValue: o, options: n },
            r,
            (f) => {
              i(f.sort(this._sortErrors).concat(l), u);
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
        (r._sortErrors = sv(Object.keys(t))),
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
          gb(s, t) &&
            ((o = Object.assign({}, s)), r || delete o[t], (o[n] = i(s))),
          o
        );
      });
    }
    json() {
      return this.transform(yb);
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
      return this.transformKeys(kl.camelCase);
    }
    snakeCase() {
      return this.transformKeys(kl.snakeCase);
    }
    constantCase() {
      return this.transformKeys((t) => kl.snakeCase(t).toUpperCase());
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
  Aa.prototype = ov.prototype;
  function wb({ formData: e, handleSubmit: t, handleSelectedStep: n }) {
    const r = Aa({
      organization: he().required().label("Organization"),
      clubName: he().required().label("Club Name"),
      playingCategory: he().required().label("Playing category"),
      captainName: he().required().label("Captain name"),
      captainPhone: rv().required().label("Captain Phone"),
      captainNic: he().required().label("Captain NIC"),
      captainEmail: he().required().email().label("Captain Email"),
    });
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs("section", {
          className: "",
          children: [
            h.jsx("h4", {
              className: "text-[13px] font-normal leading-relaxed",
              children: "Organization and captain details",
            }),
            h.jsx("p", {
              className: "text-[#AFAFAF] text-[11px] ",
              children: "Step 1/4",
            }),
          ],
        }),
        h.jsx(Ef, {
          initialValues: e,
          onSubmit: (i) => {
            t(i), setTimeout(() => n(1), 300);
          },
          validationSchema: r,
          children: () =>
            h.jsxs(Na, {
              className: "mt-5",
              children: [
                h.jsxs("div", {
                  className: "min-h-[70vh]",
                  children: [
                    h.jsxs("section", {
                      className: "mb-5",
                      children: [
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsxs(de, {
                              as: "select",
                              id: "organization",
                              name: "organization",
                              className:
                                " border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                              children: [
                                h.jsx("option", {
                                  selected: !0,
                                  value: "",
                                  children: "Select Organization",
                                }),
                                h.jsx("option", {
                                  value: "Rotaract-Club",
                                  children: "Rotaract Club",
                                }),
                                h.jsx("option", {
                                  value: "Univeristy",
                                  children: "Univeristy",
                                }),
                              ],
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "organization",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "clubName",
                              name: "clubName",
                              placeholder: "Club Name / University Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "clubName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsxs(de, {
                              as: "select",
                              id: "playingCategory",
                              name: "playingCategory",
                              className:
                                " border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                              children: [
                                h.jsx("option", {
                                  selected: !0,
                                  value: "",
                                  children: "Select Playing Category",
                                }),
                                h.jsx("option", {
                                  value: "Univeristy-Men",
                                  children: "University Men",
                                }),
                                h.jsx("option", {
                                  value: "Univeristy-Women",
                                  children: "University Women",
                                }),
                                h.jsx("option", {
                                  value: "Rotaract-Men",
                                  children: "Rotaract Men",
                                }),
                                h.jsx("option", {
                                  value: "Rotaract-Women",
                                  children: "Rotaract Women",
                                }),
                              ],
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playingCategory",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsx("section", {
                      className: "mb-3",
                      children: h.jsx("h4", {
                        className: "text-[13px] font-normal leading-relaxed",
                        children: "Captain Details",
                      }),
                    }),
                    h.jsxs("section", {
                      className: "mb-3",
                      children: [
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "captainName",
                              name: "captainName",
                              placeholder: "Full Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "captainName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "captainPhone",
                              name: "captainPhone",
                              placeholder: "Phone Number",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "captainPhone",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "captainNic",
                              name: "captainNic",
                              placeholder: "NIC Number",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "captainNic",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "captainEmail",
                              name: "captainEmail",
                              placeholder: "Email Address",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "captainEmail",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsx("p", {
                          className: "text-[12px] text-[#B5B5B5]",
                          children:
                            "Please use an active email. This mail used to send you the booking confirmations",
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("button", {
                  type: "submit",
                  className:
                    " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg",
                  children: ["Next  ", h.jsx(ia, { color: "white" })],
                }),
              ],
            }),
        }),
      ],
    });
  }
  function Sb({ formData: e, handleSubmit: t, handleSelectedStep: n }) {
    const r = Aa({
      playerFiveName: he().required().label("Player 5 Name"),
      playerFiveNic: he().required().label("Player 5 NIC"),
      playerTwoName: he().required().label("Player 2 Name"),
      playerTwoNic: he().required().label("Player 2 NIC"),
      playerThreeName: he().required().label("Player 3 Name"),
      playerThreeNic: he().required().label("Player 3 NIC"),
      playerFourName: he().required().label("Player 4 Name"),
      playerFourNic: he().required().label("Player 4 NIC"),
    });
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs("section", {
          className: "",
          children: [
            h.jsx("h4", {
              className: "text-[13px] font-normal leading-relaxed",
              children: "Player Details",
            }),
            h.jsx("p", {
              className: "text-[#AFAFAF] text-[11px] ",
              children: "Step 2/4",
            }),
          ],
        }),
        h.jsx(Ef, {
          initialValues: e,
          onSubmit: (i) => {
            t(i), setTimeout(() => n(2), 300);
          },
          validationSchema: r,
          children: () =>
            h.jsxs(Na, {
              className: "mt-5",
              children: [
                h.jsxs("div", {
                  className: "min-h-[70vh]",
                  children: [
                    h.jsxs("section", {
                      className: "mb-3",
                      children: [
                        h.jsx("h4", {
                          className:
                            "text-[13px] font-normal leading-relaxed mb-2",
                          children: "Player 2 Details",
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "playerTwoName",
                              name: "playerTwoName",
                              placeholder: "Player Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playerTwoName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "playerTwoNic",
                              name: "playerTwoNic",
                              placeholder: "Player NIC",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playerTwoNic",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("section", {
                      className: "mb-3",
                      children: [
                        h.jsx("h4", {
                          className:
                            "text-[13px] font-normal leading-relaxed mb-2",
                          children: "Player 3 Details",
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "playerThreeName",
                              name: "playerThreeName",
                              placeholder: "Player Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playerThreeName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "playerThreeNic",
                              name: "playerThreeNic",
                              placeholder: "Player NIC",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playerThreeNic",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("section", {
                      className: "mb-3",
                      children: [
                        h.jsx("h4", {
                          className:
                            "text-[13px] font-normal leading-relaxed mb-2",
                          children: "Player 4 Details",
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "playerFourName",
                              name: "playerFourName",
                              placeholder: "Player Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playerFourName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "playerFourNic",
                              name: "playerFourNic",
                              placeholder: "Player NIC",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playerFourNic",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("section", {
                      className: "mb-3",
                      children: [
                        h.jsx("h4", {
                          className:
                            "text-[13px] font-normal leading-relaxed mb-2",
                          children: "Player 5 Details",
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "playerFiveName",
                              name: "playerFiveName",
                              placeholder: "Player Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playerFiveName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "playerFiveNic",
                              name: "playerFiveNic",
                              placeholder: "Player NIC",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "playerFiveNic",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "flex flex-row items-center justify-end",
                  children: [
                    h.jsxs("button", {
                      type: "button",
                      className:
                        " bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3",
                      onClick: () => n(0),
                      children: [h.jsx(ra, { color: "white" }), "  Back"],
                    }),
                    h.jsxs("button", {
                      type: "submit",
                      className:
                        " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg",
                      children: ["Next  ", h.jsx(ia, { color: "white" })],
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
    const r = Aa({
      substituteOneName: he().required().label("Substitute 1 Name"),
      substituteOneNic: he().required().label("Substitute 1 NIC"),
      substituteTwoName: he().required().label("Substitute 2 Name"),
      substituteTwoNic: he().required().label("Substitute 2 NIC"),
      substituteThreeName: he().required().label("Substitute 3 Name"),
      substituteThreeNic: he().required().label("Substitute 3 NIC"),
    });
    return h.jsxs(h.Fragment, {
      children: [
        h.jsxs("section", {
          className: "",
          children: [
            h.jsx("h4", {
              className: "text-[13px] font-normal leading-relaxed",
              children: "Substitute Players",
            }),
            h.jsx("p", {
              className: "text-[#AFAFAF] text-[11px] ",
              children: "Step 3/4",
            }),
          ],
        }),
        h.jsx(Ef, {
          initialValues: e,
          onSubmit: (i) => {
            t(i), setTimeout(() => n(3), 300);
          },
          validationSchema: r,
          children: () =>
            h.jsxs(Na, {
              className: "mt-5",
              children: [
                h.jsxs("div", {
                  className: "min-h-[70vh]",
                  children: [
                    h.jsxs("section", {
                      className: "mb-3",
                      children: [
                        h.jsx("h4", {
                          className:
                            "text-[13px] font-normal leading-relaxed mb-2",
                          children: "Substitute Player 1",
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "substituteOneName",
                              name: "substituteOneName",
                              placeholder: "Player Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "substituteOneName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "substituteOneNic",
                              name: "substituteOneNic",
                              placeholder: "Player NIC",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "substituteOneNic",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("section", {
                      className: "mb-3",
                      children: [
                        h.jsx("h4", {
                          className:
                            "text-[13px] font-normal leading-relaxed mb-2",
                          children: "Substitute Player 2",
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "substituteTwoName",
                              name: "substituteTwoName",
                              placeholder: "Player Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "substituteTwoName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "substituteTwoNic",
                              name: "substituteTwoNic",
                              placeholder: "Player NIC",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "substituteTwoNic",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                    h.jsxs("section", {
                      className: "mb-3",
                      children: [
                        h.jsx("h4", {
                          className:
                            "text-[13px] font-normal leading-relaxed mb-2",
                          children: "Substitute Player 3",
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "substituteThreeName",
                              name: "substituteThreeName",
                              placeholder: "Player Name",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "substituteThreeName",
                              component: "span",
                            }),
                          ],
                        }),
                        h.jsxs("div", {
                          className: "mb-2",
                          children: [
                            h.jsx(de, {
                              type: "text",
                              id: "substituteThreeNic",
                              name: "substituteThreeNic",
                              placeholder: "Player NIC",
                              className:
                                "outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white ",
                            }),
                            h.jsx(pe, {
                              className: "text-[10px] text-red-400 capitalize",
                              name: "substituteThreeNic",
                              component: "span",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                h.jsxs("div", {
                  className: "flex flex-row items-center justify-end",
                  children: [
                    h.jsxs("button", {
                      type: "button",
                      className:
                        " bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3",
                      onClick: () => n(1),
                      children: [h.jsx(ra, { color: "white" }), "  Back"],
                    }),
                    h.jsxs("button", {
                      type: "submit",
                      className:
                        " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg",
                      children: ["Next  ", h.jsx(ia, { color: "white" })],
                    }),
                  ],
                }),
              ],
            }),
        }),
      ],
    });
  }
  function Eb(e) {
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
  function Cb({ formData: e, handleSelectedStep: t }) {
    return (
      console.log(e),
      h.jsxs(h.Fragment, {
        children: [
          h.jsxs("section", {
            className: "",
            children: [
              h.jsx("h4", {
                className: "text-[13px] font-normal leading-relaxed",
                children: "Preview and Payment",
              }),
              h.jsx("p", {
                className: "text-[#AFAFAF] text-[11px] ",
                children: "Step 4/4",
              }),
            ],
          }),
          h.jsxs("div", {
            className: "mt-5",
            children: [
              h.jsxs("div", {
                className: "min-h-[70vh] flex flex-row justify-between",
                children: [
                  h.jsxs("div", {
                    className: "flex flex-col w-[49%]",
                    children: [
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Organization Details",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.organization.replace("-", " "),
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.clubName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playingCategory.replace("-", " "),
                          }),
                        ],
                      }),
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 2 Details",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.playerTwoName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playerTwoNic,
                          }),
                        ],
                      }),
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 3 Details",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.playerThreeName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playerThreeNic,
                          }),
                        ],
                      }),
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 4 Details",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.playerFourName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playerFourNic,
                          }),
                        ],
                      }),
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Player 5 Details",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.playerFiveName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.playerFiveNic,
                          }),
                        ],
                      }),
                    ],
                  }),
                  h.jsxs("div", {
                    className: "flex flex-col w-[49%]",
                    children: [
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Captain Details",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.captainName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.captainPhone,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.captainNic,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] underline text-[#999999] ",
                            children: e.captainEmail,
                          }),
                        ],
                      }),
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 1",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.substituteOneName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.substituteOneNic,
                          }),
                        ],
                      }),
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 2",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.substituteTwoName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.substituteTwoNic,
                          }),
                        ],
                      }),
                      h.jsxs("section", {
                        className: "mb-4 ",
                        children: [
                          h.jsx("h4", {
                            className:
                              "text-[13px] font-normal leading-relaxed mb-2",
                            children: "Substitute Player 3",
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999]",
                            children: e.substituteThreeName,
                          }),
                          h.jsx("p", {
                            className:
                              "italic font-medium text-[12px] text-[#999999] ",
                            children: e.substituteThreeNic,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "flex flex-row items-center justify-end",
                children: [
                  h.jsxs("button", {
                    type: "button",
                    className:
                      " bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3",
                    onClick: () => t(2),
                    children: [h.jsx(ra, { color: "white" }), "  Back"],
                  }),
                  h.jsxs("button", {
                    type: "submit",
                    className:
                      " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg",
                    onClick: () => console.log("Payment Initializing ... "),
                    children: ["Register  ", h.jsx(Eb, { color: "white" })],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  }
  function Pb({ formData: e, handleSubmit: t }) {
    const [n, r] = S.useState(0),
      i = (s) => {
        r(s);
      };
    return h.jsxs(af, {
      children: [
        n === 0 &&
          h.jsx(
            ft.div,
            {
              variants: Is,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: h.jsx(wb, {
                formData: e,
                handleSubmit: t,
                handleSelectedStep: i,
              }),
            },
            "form_one"
          ),
        n === 1 &&
          h.jsx(
            ft.div,
            {
              variants: Is,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: h.jsx(Sb, {
                formData: e,
                handleSubmit: t,
                handleSelectedStep: i,
              }),
            },
            "form_two"
          ),
        n === 2 &&
          h.jsx(
            ft.div,
            {
              variants: Is,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: h.jsx(Tb, {
                formData: e,
                handleSubmit: t,
                handleSelectedStep: i,
              }),
            },
            "form_three"
          ),
        n === 3 &&
          h.jsx(
            ft.div,
            {
              variants: Is,
              initial: "initial",
              animate: "animate",
              exit: "exit",
              children: h.jsx(Cb, { formData: e, handleSelectedStep: i }),
            },
            "form_four"
          ),
      ],
    });
  }
  function kb({ bottomState: e, bottomToggler: t }) {
    const n = (s) => {
        i({ ...r, ...s });
      },
      [r, i] = S.useState(W1);
    return h.jsx(af, {
      children:
        e &&
        h.jsx(ft.div, {
          variants: w2,
          initial: "initial",
          animate: "animate",
          exit: "exit",
          onClick: () => {},
          className:
            "bg-black bg-opacity-40 h-screen w-screen absolute bottom-0 left-0 origin-bottom flex flex-col justify-end",
          children: h.jsx("div", {
            className:
              "bg-[#353945] z-50 w-screen  h-[97vh] overflow-y-scroll  px-5 py-8 rounded-t-xl transition-all duration-300 ease-in",
            children: h.jsxs("div", {
              className: "text-white",
              children: [
                h.jsxs("div", {
                  className: "flex flex-row justify-between items-center mb-2",
                  children: [
                    h.jsx("h2", {
                      className: "text-[18px] font-medium",
                      children: "Get Your Self Registered",
                    }),
                    h.jsx(Ky, {
                      className: "cursor-pointer",
                      color: "white",
                      size: 20,
                      onClick: () => {
                        t();
                      },
                    }),
                  ],
                }),
                h.jsx(Pb, { formData: r, handleSubmit: n }),
              ],
            }),
          }),
        }),
    });
  }
  function Nb() {
    return h.jsx("div", {
      className: "bg-[#353945] px-10 py-5",
      children: h.jsxs("div", {
        className: "flex flex-row justify-between items-center",
        children: [
          h.jsx("img", {
            src: Vc,
            alt: "brand image footer ",
            className: "w-[100px]",
          }),
          h.jsx("p", {
            className: "text-[10px] text-[#999999] ",
            children: "Copyright 2023. All Rights Reserved.",
          }),
        ],
      }),
    });
  }
  function jb() {
    const [e, t] = S.useState(!1),
      [n, r] = S.useState(!1),
      i = () => {
        t((o) => !o);
      },
      s = () => {
        r((o) => !o);
      };
    return h.jsxs("div", {
      className: "relative w-screen  overflow-x-hidden",
      style: {
        overflowY: e ? "hidden" : "scroll",
        height: e ? "100vh" : "auto",
      },
      children: [
        h.jsx("div", {
          className: "container mx-auto",
          children: h.jsxs("div", {
            className: "flex flex-row px-10 items-center justify-between",
            children: [
              h.jsx("img", {
                src: Vc,
                alt: "brand logo",
                className: "p-0 w-1/2 max-w-[200px] min-w-[150px]",
              }),
              h.jsx("div", {
                onClick: i,
                onKeyDown: i,
                className: "cursor-pointer",
                children: h.jsx(H1, { color: "white", size: 22 }),
              }),
            ],
          }),
        }),
        h.jsx(m2, { menuState: e, menuToggler: i }),
        h.jsx(Q1, {}),
        h.jsx(Z1, {}),
        h.jsx(y2, {}),
        h.jsx(x2, { bottomToggler: s }),
        h.jsx(Nb, {}),
        h.jsx(kb, { bottomState: n, bottomToggler: s }),
      ],
    });
  }
  Nl.createRoot(document.getElementById("root")).render(
    h.jsx(Ot.StrictMode, { children: h.jsx(jb, {}) })
  );
});
export default bb();
