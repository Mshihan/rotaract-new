(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function rm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var xf = { exports: {} },
  So = {},
  wf = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jr = Symbol.for("react.element"),
  im = Symbol.for("react.portal"),
  om = Symbol.for("react.fragment"),
  sm = Symbol.for("react.strict_mode"),
  lm = Symbol.for("react.profiler"),
  am = Symbol.for("react.provider"),
  um = Symbol.for("react.context"),
  cm = Symbol.for("react.forward_ref"),
  fm = Symbol.for("react.suspense"),
  dm = Symbol.for("react.memo"),
  hm = Symbol.for("react.lazy"),
  nu = Symbol.iterator;
function pm(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (nu && e[nu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Sf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  kf = Object.assign,
  Pf = {};
function er(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pf),
    (this.updater = n || Sf);
}
er.prototype.isReactComponent = {};
er.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
er.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cf() {}
Cf.prototype = er.prototype;
function Il(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pf),
    (this.updater = n || Sf);
}
var Bl = (Il.prototype = new Cf());
Bl.constructor = Il;
kf(Bl, er.prototype);
Bl.isPureReactComponent = !0;
var ru = Array.isArray,
  Tf = Object.prototype.hasOwnProperty,
  Ul = { current: null },
  Ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function Lf(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Tf.call(t, r) && !Ef.hasOwnProperty(r) && (i[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) i[r] === void 0 && (i[r] = l[r]);
  return {
    $$typeof: Jr,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ul.current,
  };
}
function mm(e, t) {
  return {
    $$typeof: Jr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function $l(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Jr;
}
function gm(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var iu = /\/+/g;
function Qo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? gm("" + e.key)
    : t.toString(36);
}
function Di(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Jr:
          case im:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Qo(s, 0) : r),
      ru(i)
        ? ((n = ""),
          e != null && (n = e.replace(iu, "$&/") + "/"),
          Di(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          ($l(i) &&
            (i = mm(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(iu, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), ru(e)))
    for (var l = 0; l < e.length; l++) {
      o = e[l];
      var a = r + Qo(o, l);
      s += Di(o, t, n, a, i);
    }
  else if (((a = pm(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + Qo(o, l++)), (s += Di(o, t, n, a, i));
  else if (o === "object")
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
  return s;
}
function li(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Di(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function ym(e) {
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
var ve = { current: null },
  Vi = { transition: null },
  vm = {
    ReactCurrentDispatcher: ve,
    ReactCurrentBatchConfig: Vi,
    ReactCurrentOwner: Ul,
  };
F.Children = {
  map: li,
  forEach: function (e, t, n) {
    li(
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
      li(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      li(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!$l(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = er;
F.Fragment = om;
F.Profiler = lm;
F.PureComponent = Il;
F.StrictMode = sm;
F.Suspense = fm;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vm;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = kf({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ul.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Tf.call(t, a) &&
        !Ef.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Jr, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: um,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: am, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = Lf;
F.createFactory = function (e) {
  var t = Lf.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: cm, render: e };
};
F.isValidElement = $l;
F.lazy = function (e) {
  return { $$typeof: hm, _payload: { _status: -1, _result: e }, _init: ym };
};
F.memo = function (e, t) {
  return { $$typeof: dm, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = Vi.transition;
  Vi.transition = {};
  try {
    e();
  } finally {
    Vi.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return ve.current.useCallback(e, t);
};
F.useContext = function (e) {
  return ve.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return ve.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return ve.current.useEffect(e, t);
};
F.useId = function () {
  return ve.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return ve.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return ve.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return ve.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return ve.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return ve.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return ve.current.useRef(e);
};
F.useState = function (e) {
  return ve.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return ve.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return ve.current.useTransition();
};
F.version = "18.2.0";
wf.exports = F;
var E = wf.exports;
const rt = rm(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xm = E,
  wm = Symbol.for("react.element"),
  Sm = Symbol.for("react.fragment"),
  km = Object.prototype.hasOwnProperty,
  Pm = xm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cm = { key: !0, ref: !0, __self: !0, __source: !0 };
function Df(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) km.call(t, r) && !Cm.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: wm,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Pm.current,
  };
}
So.Fragment = Sm;
So.jsx = Df;
So.jsxs = Df;
xf.exports = So;
var C = xf.exports,
  Ns = {},
  Vf = { exports: {} },
  je = {},
  Mf = { exports: {} },
  Rf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, j) {
    var _ = D.length;
    D.push(j);
    e: for (; 0 < _; ) {
      var A = (_ - 1) >>> 1,
        W = D[A];
      if (0 < i(W, j)) (D[A] = j), (D[_] = W), (_ = A);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var j = D[0],
      _ = D.pop();
    if (_ !== j) {
      D[0] = _;
      e: for (var A = 0, W = D.length, Xt = W >>> 1; A < Xt; ) {
        var qe = 2 * (A + 1) - 1,
          wn = D[qe],
          De = qe + 1,
          Zt = D[De];
        if (0 > i(wn, _))
          De < W && 0 > i(Zt, wn)
            ? ((D[A] = Zt), (D[De] = _), (A = De))
            : ((D[A] = wn), (D[qe] = _), (A = qe));
        else if (De < W && 0 > i(Zt, _)) (D[A] = Zt), (D[De] = _), (A = De);
        else break e;
      }
    }
    return j;
  }
  function i(D, j) {
    var _ = D.sortIndex - j.sortIndex;
    return _ !== 0 ? _ : D.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    y = !1,
    v = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(D) {
    for (var j = n(u); j !== null; ) {
      if (j.callback === null) r(u);
      else if (j.startTime <= D)
        r(u), (j.sortIndex = j.expirationTime), t(a, j);
      else break;
      j = n(u);
    }
  }
  function x(D) {
    if (((v = !1), p(D), !y))
      if (n(a) !== null) (y = !0), Fe(w);
      else {
        var j = n(u);
        j !== null && Je(x, j.startTime - D);
      }
  }
  function w(D, j) {
    (y = !1), v && ((v = !1), g(k), (k = -1)), (m = !0);
    var _ = d;
    try {
      for (
        p(j), f = n(a);
        f !== null && (!(f.expirationTime > j) || (D && !J()));

      ) {
        var A = f.callback;
        if (typeof A == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var W = A(f.expirationTime <= j);
          (j = e.unstable_now()),
            typeof W == "function" ? (f.callback = W) : f === n(a) && r(a),
            p(j);
        } else r(a);
        f = n(a);
      }
      if (f !== null) var Xt = !0;
      else {
        var qe = n(u);
        qe !== null && Je(x, qe.startTime - j), (Xt = !1);
      }
      return Xt;
    } finally {
      (f = null), (d = _), (m = !1);
    }
  }
  var T = !1,
    P = null,
    k = -1,
    R = 5,
    N = -1;
  function J() {
    return !(e.unstable_now() - N < R);
  }
  function we() {
    if (P !== null) {
      var D = e.unstable_now();
      N = D;
      var j = !0;
      try {
        j = P(!0, D);
      } finally {
        j ? Se() : ((T = !1), (P = null));
      }
    } else T = !1;
  }
  var Se;
  if (typeof h == "function")
    Se = function () {
      h(we);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      b = q.port2;
    (q.port1.onmessage = we),
      (Se = function () {
        b.postMessage(null);
      });
  } else
    Se = function () {
      L(we, 0);
    };
  function Fe(D) {
    (P = D), T || ((T = !0), Se());
  }
  function Je(D, j) {
    k = L(function () {
      D(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || m || ((y = !0), Fe(w));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (D) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = d;
      }
      var _ = d;
      d = j;
      try {
        return D();
      } finally {
        d = _;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, j) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var _ = d;
      d = D;
      try {
        return j();
      } finally {
        d = _;
      }
    }),
    (e.unstable_scheduleCallback = function (D, j, _) {
      var A = e.unstable_now();
      switch (
        (typeof _ == "object" && _ !== null
          ? ((_ = _.delay), (_ = typeof _ == "number" && 0 < _ ? A + _ : A))
          : (_ = A),
        D)
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
        (W = _ + W),
        (D = {
          id: c++,
          callback: j,
          priorityLevel: D,
          startTime: _,
          expirationTime: W,
          sortIndex: -1,
        }),
        _ > A
          ? ((D.sortIndex = _),
            t(u, D),
            n(a) === null &&
              D === n(u) &&
              (v ? (g(k), (k = -1)) : (v = !0), Je(x, _ - A)))
          : ((D.sortIndex = W), t(a, D), y || m || ((y = !0), Fe(w))),
        D
      );
    }),
    (e.unstable_shouldYield = J),
    (e.unstable_wrapCallback = function (D) {
      var j = d;
      return function () {
        var _ = d;
        d = j;
        try {
          return D.apply(this, arguments);
        } finally {
          d = _;
        }
      };
    });
})(Rf);
Mf.exports = Rf;
var Tm = Mf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nf = E,
  Ne = Tm;
function S(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
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
var Af = new Set(),
  Rr = {};
function gn(e, t) {
  Kn(e, t), Kn(e + "Capture", t);
}
function Kn(e, t) {
  for (Rr[e] = t, e = 0; e < t.length; e++) Af.add(t[e]);
}
var mt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  As = Object.prototype.hasOwnProperty,
  Em =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ou = {},
  su = {};
function Lm(e) {
  return As.call(su, e)
    ? !0
    : As.call(ou, e)
    ? !1
    : Em.test(e)
    ? (su[e] = !0)
    : ((ou[e] = !0), !1);
}
function Dm(e, t, n, r) {
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
function Vm(e, t, n, r) {
  if (t === null || typeof t > "u" || Dm(e, t, n, r)) return !0;
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
function xe(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ce = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new xe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ce[t] = new xe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ce[e] = new xe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ce[e] = new xe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ce[e] = new xe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ce[e] = new xe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ce[e] = new xe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ce[e] = new xe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ce[e] = new xe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Wl = /[\-:]([a-z])/g;
function Hl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wl, Hl);
    ce[t] = new xe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Wl, Hl);
    ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Wl, Hl);
  ce[t] = new xe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ce.xlinkHref = new xe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ce[e] = new xe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Kl(e, t, n, r) {
  var i = ce.hasOwnProperty(t) ? ce[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Vm(t, n, i, r) && (n = null),
    r || i === null
      ? Lm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var wt = Nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ai = Symbol.for("react.element"),
  Pn = Symbol.for("react.portal"),
  Cn = Symbol.for("react.fragment"),
  Gl = Symbol.for("react.strict_mode"),
  js = Symbol.for("react.profiler"),
  jf = Symbol.for("react.provider"),
  _f = Symbol.for("react.context"),
  Ql = Symbol.for("react.forward_ref"),
  _s = Symbol.for("react.suspense"),
  Fs = Symbol.for("react.suspense_list"),
  Yl = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  Ff = Symbol.for("react.offscreen"),
  lu = Symbol.iterator;
function rr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (lu && e[lu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Yo;
function hr(e) {
  if (Yo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Yo = (t && t[1]) || "";
    }
  return (
    `
` +
    Yo +
    e
  );
}
var Xo = !1;
function Zo(e, t) {
  if (!e || Xo) return "";
  Xo = !0;
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
          o = r.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Xo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? hr(e) : "";
}
function Mm(e) {
  switch (e.tag) {
    case 5:
      return hr(e.type);
    case 16:
      return hr("Lazy");
    case 13:
      return hr("Suspense");
    case 19:
      return hr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zo(e.type, !1)), e;
    case 11:
      return (e = Zo(e.type.render, !1)), e;
    case 1:
      return (e = Zo(e.type, !0)), e;
    default:
      return "";
  }
}
function Os(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Cn:
      return "Fragment";
    case Pn:
      return "Portal";
    case js:
      return "Profiler";
    case Gl:
      return "StrictMode";
    case _s:
      return "Suspense";
    case Fs:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case _f:
        return (e.displayName || "Context") + ".Consumer";
      case jf:
        return (e._context.displayName || "Context") + ".Provider";
      case Ql:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Yl:
        return (
          (t = e.displayName || null), t !== null ? t : Os(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return Os(e(t));
        } catch {}
    }
  return null;
}
function Rm(e) {
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
      return Os(t);
    case 8:
      return t === Gl ? "StrictMode" : "Mode";
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
function Ut(e) {
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
function Of(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Nm(e) {
  var t = Of(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ui(e) {
  e._valueTracker || (e._valueTracker = Nm(e));
}
function zf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Of(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function $i(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function zs(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ut(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function If(e, t) {
  (t = t.checked), t != null && Kl(e, "checked", t, !1);
}
function Is(e, t) {
  If(e, t);
  var n = Ut(t.value),
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
    ? Bs(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Bs(e, t.type, Ut(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
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
function Bs(e, t, n) {
  (t !== "number" || $i(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var pr = Array.isArray;
function In(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ut(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Us(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function cu(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(S(92));
      if (pr(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ut(n) };
}
function Bf(e, t) {
  var n = Ut(t.value),
    r = Ut(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function fu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Uf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $s(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Uf(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ci,
  $f = (function (e) {
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
        ci = ci || document.createElement("div"),
          ci.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ci.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Nr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var vr = {
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
  Am = ["Webkit", "ms", "Moz", "O"];
Object.keys(vr).forEach(function (e) {
  Am.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (vr[t] = vr[e]);
  });
});
function Wf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (vr.hasOwnProperty(e) && vr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Hf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Wf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var jm = Y(
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
function Ws(e, t) {
  if (t) {
    if (jm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Hs(e, t) {
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
var Ks = null;
function Xl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Gs = null,
  Bn = null,
  Un = null;
function du(e) {
  if ((e = ei(e))) {
    if (typeof Gs != "function") throw Error(S(280));
    var t = e.stateNode;
    t && ((t = Eo(t)), Gs(e.stateNode, e.type, t));
  }
}
function Kf(e) {
  Bn ? (Un ? Un.push(e) : (Un = [e])) : (Bn = e);
}
function Gf() {
  if (Bn) {
    var e = Bn,
      t = Un;
    if (((Un = Bn = null), du(e), t)) for (e = 0; e < t.length; e++) du(t[e]);
  }
}
function Qf(e, t) {
  return e(t);
}
function Yf() {}
var Jo = !1;
function Xf(e, t, n) {
  if (Jo) return e(t, n);
  Jo = !0;
  try {
    return Qf(e, t, n);
  } finally {
    (Jo = !1), (Bn !== null || Un !== null) && (Yf(), Gf());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Eo(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var Qs = !1;
if (mt)
  try {
    var ir = {};
    Object.defineProperty(ir, "passive", {
      get: function () {
        Qs = !0;
      },
    }),
      window.addEventListener("test", ir, ir),
      window.removeEventListener("test", ir, ir);
  } catch {
    Qs = !1;
  }
function _m(e, t, n, r, i, o, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var xr = !1,
  Wi = null,
  Hi = !1,
  Ys = null,
  Fm = {
    onError: function (e) {
      (xr = !0), (Wi = e);
    },
  };
function Om(e, t, n, r, i, o, s, l, a) {
  (xr = !1), (Wi = null), _m.apply(Fm, arguments);
}
function zm(e, t, n, r, i, o, s, l, a) {
  if ((Om.apply(this, arguments), xr)) {
    if (xr) {
      var u = Wi;
      (xr = !1), (Wi = null);
    } else throw Error(S(198));
    Hi || ((Hi = !0), (Ys = u));
  }
}
function yn(e) {
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
function Zf(e) {
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
function hu(e) {
  if (yn(e) !== e) throw Error(S(188));
}
function Im(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yn(e)), t === null)) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return hu(i), e;
        if (o === r) return hu(i), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function Jf(e) {
  return (e = Im(e)), e !== null ? qf(e) : null;
}
function qf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bf = Ne.unstable_scheduleCallback,
  pu = Ne.unstable_cancelCallback,
  Bm = Ne.unstable_shouldYield,
  Um = Ne.unstable_requestPaint,
  ee = Ne.unstable_now,
  $m = Ne.unstable_getCurrentPriorityLevel,
  Zl = Ne.unstable_ImmediatePriority,
  ed = Ne.unstable_UserBlockingPriority,
  Ki = Ne.unstable_NormalPriority,
  Wm = Ne.unstable_LowPriority,
  td = Ne.unstable_IdlePriority,
  ko = null,
  it = null;
function Hm(e) {
  if (it && typeof it.onCommitFiberRoot == "function")
    try {
      it.onCommitFiberRoot(ko, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ye = Math.clz32 ? Math.clz32 : Qm,
  Km = Math.log,
  Gm = Math.LN2;
function Qm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Km(e) / Gm) | 0)) | 0;
}
var fi = 64,
  di = 4194304;
function mr(e) {
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
function Gi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (r = mr(l)) : ((o &= s), o !== 0 && (r = mr(o)));
  } else (s = n & ~i), s !== 0 ? (r = mr(s)) : o !== 0 && (r = mr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ye(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Ym(e, t) {
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
function Xm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - Ye(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & n) || l & r) && (i[s] = Ym(l, t))
      : a <= t && (e.expiredLanes |= l),
      (o &= ~l);
  }
}
function Xs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function nd() {
  var e = fi;
  return (fi <<= 1), !(fi & 4194240) && (fi = 64), e;
}
function qo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ye(t)),
    (e[t] = n);
}
function Zm(e, t) {
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
    var i = 31 - Ye(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function Jl(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ye(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var z = 0;
function rd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var id,
  ql,
  od,
  sd,
  ld,
  Zs = !1,
  hi = [],
  Mt = null,
  Rt = null,
  Nt = null,
  jr = new Map(),
  _r = new Map(),
  Et = [],
  Jm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function mu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mt = null;
      break;
    case "dragenter":
    case "dragleave":
      Rt = null;
      break;
    case "mouseover":
    case "mouseout":
      Nt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function or(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = ei(t)), t !== null && ql(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function qm(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Mt = or(Mt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Rt = or(Rt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Nt = or(Nt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return jr.set(o, or(jr.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), _r.set(o, or(_r.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function ad(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = yn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Zf(n)), t !== null)) {
          (e.blockedOn = t),
            ld(e.priority, function () {
              od(n);
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
function Mi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Js(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ks = r), n.target.dispatchEvent(r), (Ks = null);
    } else return (t = ei(n)), t !== null && ql(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function gu(e, t, n) {
  Mi(e) && n.delete(t);
}
function bm() {
  (Zs = !1),
    Mt !== null && Mi(Mt) && (Mt = null),
    Rt !== null && Mi(Rt) && (Rt = null),
    Nt !== null && Mi(Nt) && (Nt = null),
    jr.forEach(gu),
    _r.forEach(gu);
}
function sr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Zs ||
      ((Zs = !0),
      Ne.unstable_scheduleCallback(Ne.unstable_NormalPriority, bm)));
}
function Fr(e) {
  function t(i) {
    return sr(i, e);
  }
  if (0 < hi.length) {
    sr(hi[0], e);
    for (var n = 1; n < hi.length; n++) {
      var r = hi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mt !== null && sr(Mt, e),
      Rt !== null && sr(Rt, e),
      Nt !== null && sr(Nt, e),
      jr.forEach(t),
      _r.forEach(t),
      n = 0;
    n < Et.length;
    n++
  )
    (r = Et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Et.length && ((n = Et[0]), n.blockedOn === null); )
    ad(n), n.blockedOn === null && Et.shift();
}
var $n = wt.ReactCurrentBatchConfig,
  Qi = !0;
function eg(e, t, n, r) {
  var i = z,
    o = $n.transition;
  $n.transition = null;
  try {
    (z = 1), bl(e, t, n, r);
  } finally {
    (z = i), ($n.transition = o);
  }
}
function tg(e, t, n, r) {
  var i = z,
    o = $n.transition;
  $n.transition = null;
  try {
    (z = 4), bl(e, t, n, r);
  } finally {
    (z = i), ($n.transition = o);
  }
}
function bl(e, t, n, r) {
  if (Qi) {
    var i = Js(e, t, n, r);
    if (i === null) as(e, t, r, Yi, n), mu(e, r);
    else if (qm(i, e, t, n, r)) r.stopPropagation();
    else if ((mu(e, r), t & 4 && -1 < Jm.indexOf(e))) {
      for (; i !== null; ) {
        var o = ei(i);
        if (
          (o !== null && id(o),
          (o = Js(e, t, n, r)),
          o === null && as(e, t, r, Yi, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else as(e, t, r, null, n);
  }
}
var Yi = null;
function Js(e, t, n, r) {
  if (((Yi = null), (e = Xl(r)), (e = on(e)), e !== null))
    if (((t = yn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Zf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Yi = e), null;
}
function ud(e) {
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
      switch ($m()) {
        case Zl:
          return 1;
        case ed:
          return 4;
        case Ki:
        case Wm:
          return 16;
        case td:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Dt = null,
  ea = null,
  Ri = null;
function cd() {
  if (Ri) return Ri;
  var e,
    t = ea,
    n = t.length,
    r,
    i = "value" in Dt ? Dt.value : Dt.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ri = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ni(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function pi() {
  return !0;
}
function yu() {
  return !1;
}
function _e(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pi
        : yu),
      (this.isPropagationStopped = yu),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = pi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = pi));
      },
      persist: function () {},
      isPersistent: pi,
    }),
    t
  );
}
var tr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  ta = _e(tr),
  br = Y({}, tr, { view: 0, detail: 0 }),
  ng = _e(br),
  bo,
  es,
  lr,
  Po = Y({}, br, {
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
    getModifierState: na,
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
        : (e !== lr &&
            (lr && e.type === "mousemove"
              ? ((bo = e.screenX - lr.screenX), (es = e.screenY - lr.screenY))
              : (es = bo = 0),
            (lr = e)),
          bo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : es;
    },
  }),
  vu = _e(Po),
  rg = Y({}, Po, { dataTransfer: 0 }),
  ig = _e(rg),
  og = Y({}, br, { relatedTarget: 0 }),
  ts = _e(og),
  sg = Y({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lg = _e(sg),
  ag = Y({}, tr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ug = _e(ag),
  cg = Y({}, tr, { data: 0 }),
  xu = _e(cg),
  fg = {
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
  dg = {
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
  hg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function pg(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = hg[e]) ? !!t[e] : !1;
}
function na() {
  return pg;
}
var mg = Y({}, br, {
    key: function (e) {
      if (e.key) {
        var t = fg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ni(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? dg[e.keyCode] || "Unidentified"
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
    getModifierState: na,
    charCode: function (e) {
      return e.type === "keypress" ? Ni(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ni(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  gg = _e(mg),
  yg = Y({}, Po, {
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
  wu = _e(yg),
  vg = Y({}, br, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: na,
  }),
  xg = _e(vg),
  wg = Y({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Sg = _e(wg),
  kg = Y({}, Po, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  Pg = _e(kg),
  Cg = [9, 13, 27, 32],
  ra = mt && "CompositionEvent" in window,
  wr = null;
mt && "documentMode" in document && (wr = document.documentMode);
var Tg = mt && "TextEvent" in window && !wr,
  fd = mt && (!ra || (wr && 8 < wr && 11 >= wr)),
  Su = String.fromCharCode(32),
  ku = !1;
function dd(e, t) {
  switch (e) {
    case "keyup":
      return Cg.indexOf(t.keyCode) !== -1;
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
function hd(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Tn = !1;
function Eg(e, t) {
  switch (e) {
    case "compositionend":
      return hd(t);
    case "keypress":
      return t.which !== 32 ? null : ((ku = !0), Su);
    case "textInput":
      return (e = t.data), e === Su && ku ? null : e;
    default:
      return null;
  }
}
function Lg(e, t) {
  if (Tn)
    return e === "compositionend" || (!ra && dd(e, t))
      ? ((e = cd()), (Ri = ea = Dt = null), (Tn = !1), e)
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
      return fd && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Dg = {
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
function Pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Dg[e.type] : t === "textarea";
}
function pd(e, t, n, r) {
  Kf(r),
    (t = Xi(t, "onChange")),
    0 < t.length &&
      ((n = new ta("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Sr = null,
  Or = null;
function Vg(e) {
  Td(e, 0);
}
function Co(e) {
  var t = Dn(e);
  if (zf(t)) return e;
}
function Mg(e, t) {
  if (e === "change") return t;
}
var md = !1;
if (mt) {
  var ns;
  if (mt) {
    var rs = "oninput" in document;
    if (!rs) {
      var Cu = document.createElement("div");
      Cu.setAttribute("oninput", "return;"),
        (rs = typeof Cu.oninput == "function");
    }
    ns = rs;
  } else ns = !1;
  md = ns && (!document.documentMode || 9 < document.documentMode);
}
function Tu() {
  Sr && (Sr.detachEvent("onpropertychange", gd), (Or = Sr = null));
}
function gd(e) {
  if (e.propertyName === "value" && Co(Or)) {
    var t = [];
    pd(t, Or, e, Xl(e)), Xf(Vg, t);
  }
}
function Rg(e, t, n) {
  e === "focusin"
    ? (Tu(), (Sr = t), (Or = n), Sr.attachEvent("onpropertychange", gd))
    : e === "focusout" && Tu();
}
function Ng(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Co(Or);
}
function Ag(e, t) {
  if (e === "click") return Co(t);
}
function jg(e, t) {
  if (e === "input" || e === "change") return Co(t);
}
function _g(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ze = typeof Object.is == "function" ? Object.is : _g;
function zr(e, t) {
  if (Ze(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!As.call(t, i) || !Ze(e[i], t[i])) return !1;
  }
  return !0;
}
function Eu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Lu(e, t) {
  var n = Eu(e);
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
    n = Eu(n);
  }
}
function yd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? yd(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function vd() {
  for (var e = window, t = $i(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = $i(e.document);
  }
  return t;
}
function ia(e) {
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
function Fg(e) {
  var t = vd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    yd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ia(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Lu(n, o));
        var s = Lu(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
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
var Og = mt && "documentMode" in document && 11 >= document.documentMode,
  En = null,
  qs = null,
  kr = null,
  bs = !1;
function Du(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  bs ||
    En == null ||
    En !== $i(r) ||
    ((r = En),
    "selectionStart" in r && ia(r)
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
    (kr && zr(kr, r)) ||
      ((kr = r),
      (r = Xi(qs, "onSelect")),
      0 < r.length &&
        ((t = new ta("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = En))));
}
function mi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ln = {
    animationend: mi("Animation", "AnimationEnd"),
    animationiteration: mi("Animation", "AnimationIteration"),
    animationstart: mi("Animation", "AnimationStart"),
    transitionend: mi("Transition", "TransitionEnd"),
  },
  is = {},
  xd = {};
mt &&
  ((xd = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ln.animationend.animation,
    delete Ln.animationiteration.animation,
    delete Ln.animationstart.animation),
  "TransitionEvent" in window || delete Ln.transitionend.transition);
function To(e) {
  if (is[e]) return is[e];
  if (!Ln[e]) return e;
  var t = Ln[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xd) return (is[e] = t[n]);
  return e;
}
var wd = To("animationend"),
  Sd = To("animationiteration"),
  kd = To("animationstart"),
  Pd = To("transitionend"),
  Cd = new Map(),
  Vu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Kt(e, t) {
  Cd.set(e, t), gn(t, [e]);
}
for (var os = 0; os < Vu.length; os++) {
  var ss = Vu[os],
    zg = ss.toLowerCase(),
    Ig = ss[0].toUpperCase() + ss.slice(1);
  Kt(zg, "on" + Ig);
}
Kt(wd, "onAnimationEnd");
Kt(Sd, "onAnimationIteration");
Kt(kd, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(Pd, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
gn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
gn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
gn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
gn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
gn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
gn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var gr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bg = new Set("cancel close invalid load scroll toggle".split(" ").concat(gr));
function Mu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), zm(r, t, void 0, e), (e.currentTarget = null);
}
function Td(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          Mu(i, l, u), (o = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          Mu(i, l, u), (o = a);
        }
    }
  }
  if (Hi) throw ((e = Ys), (Hi = !1), (Ys = null), e);
}
function U(e, t) {
  var n = t[il];
  n === void 0 && (n = t[il] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ed(t, e, 2, !1), n.add(r));
}
function ls(e, t, n) {
  var r = 0;
  t && (r |= 4), Ed(n, e, r, t);
}
var gi = "_reactListening" + Math.random().toString(36).slice(2);
function Ir(e) {
  if (!e[gi]) {
    (e[gi] = !0),
      Af.forEach(function (n) {
        n !== "selectionchange" && (Bg.has(n) || ls(n, !1, e), ls(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gi] || ((t[gi] = !0), ls("selectionchange", !1, t));
  }
}
function Ed(e, t, n, r) {
  switch (ud(t)) {
    case 1:
      var i = eg;
      break;
    case 4:
      i = tg;
      break;
    default:
      i = bl;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Qs ||
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
function as(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = on(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Xf(function () {
    var u = o,
      c = Xl(n),
      f = [];
    e: {
      var d = Cd.get(e);
      if (d !== void 0) {
        var m = ta,
          y = e;
        switch (e) {
          case "keypress":
            if (Ni(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = gg;
            break;
          case "focusin":
            (y = "focus"), (m = ts);
            break;
          case "focusout":
            (y = "blur"), (m = ts);
            break;
          case "beforeblur":
          case "afterblur":
            m = ts;
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
            m = vu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = ig;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = xg;
            break;
          case wd:
          case Sd:
          case kd:
            m = lg;
            break;
          case Pd:
            m = Sg;
            break;
          case "scroll":
            m = ng;
            break;
          case "wheel":
            m = Pg;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = ug;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = wu;
        }
        var v = (t & 4) !== 0,
          L = !v && e === "scroll",
          g = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var h = u, p; h !== null; ) {
          p = h;
          var x = p.stateNode;
          if (
            (p.tag === 5 &&
              x !== null &&
              ((p = x),
              g !== null && ((x = Ar(h, g)), x != null && v.push(Br(h, x, p)))),
            L)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((d = new m(d, y, null, n, c)), f.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Ks &&
            (y = n.relatedTarget || n.fromElement) &&
            (on(y) || y[gt]))
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
            ? ((y = n.relatedTarget || n.toElement),
              (m = u),
              (y = y ? on(y) : null),
              y !== null &&
                ((L = yn(y)), y !== L || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((m = null), (y = u)),
          m !== y)
        ) {
          if (
            ((v = vu),
            (x = "onMouseLeave"),
            (g = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = wu),
              (x = "onPointerLeave"),
              (g = "onPointerEnter"),
              (h = "pointer")),
            (L = m == null ? d : Dn(m)),
            (p = y == null ? d : Dn(y)),
            (d = new v(x, h + "leave", m, n, c)),
            (d.target = L),
            (d.relatedTarget = p),
            (x = null),
            on(c) === u &&
              ((v = new v(g, h + "enter", y, n, c)),
              (v.target = p),
              (v.relatedTarget = L),
              (x = v)),
            (L = x),
            m && y)
          )
            t: {
              for (v = m, g = y, h = 0, p = v; p; p = Sn(p)) h++;
              for (p = 0, x = g; x; x = Sn(x)) p++;
              for (; 0 < h - p; ) (v = Sn(v)), h--;
              for (; 0 < p - h; ) (g = Sn(g)), p--;
              for (; h--; ) {
                if (v === g || (g !== null && v === g.alternate)) break t;
                (v = Sn(v)), (g = Sn(g));
              }
              v = null;
            }
          else v = null;
          m !== null && Ru(f, d, m, v, !1),
            y !== null && L !== null && Ru(f, L, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Dn(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var w = Mg;
        else if (Pu(d))
          if (md) w = jg;
          else {
            w = Ng;
            var T = Rg;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (w = Ag);
        if (w && (w = w(e, u))) {
          pd(f, w, n, c);
          break e;
        }
        T && T(e, d, u),
          e === "focusout" &&
            (T = d._wrapperState) &&
            T.controlled &&
            d.type === "number" &&
            Bs(d, "number", d.value);
      }
      switch (((T = u ? Dn(u) : window), e)) {
        case "focusin":
          (Pu(T) || T.contentEditable === "true") &&
            ((En = T), (qs = u), (kr = null));
          break;
        case "focusout":
          kr = qs = En = null;
          break;
        case "mousedown":
          bs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (bs = !1), Du(f, n, c);
          break;
        case "selectionchange":
          if (Og) break;
        case "keydown":
        case "keyup":
          Du(f, n, c);
      }
      var P;
      if (ra)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        Tn
          ? dd(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (fd &&
          n.locale !== "ko" &&
          (Tn || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && Tn && (P = cd())
            : ((Dt = c),
              (ea = "value" in Dt ? Dt.value : Dt.textContent),
              (Tn = !0))),
        (T = Xi(u, k)),
        0 < T.length &&
          ((k = new xu(k, e, null, n, c)),
          f.push({ event: k, listeners: T }),
          P ? (k.data = P) : ((P = hd(n)), P !== null && (k.data = P)))),
        (P = Tg ? Eg(e, n) : Lg(e, n)) &&
          ((u = Xi(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new xu("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = P)));
    }
    Td(f, t);
  });
}
function Br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Xi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Ar(e, n)),
      o != null && r.unshift(Br(e, o, i)),
      (o = Ar(e, t)),
      o != null && r.push(Br(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ru(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      i
        ? ((a = Ar(n, o)), a != null && s.unshift(Br(n, a, l)))
        : i || ((a = Ar(n, o)), a != null && s.push(Br(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var Ug = /\r\n?/g,
  $g = /\u0000|\uFFFD/g;
function Nu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ug,
      `
`
    )
    .replace($g, "");
}
function yi(e, t, n) {
  if (((t = Nu(t)), Nu(e) !== t && n)) throw Error(S(425));
}
function Zi() {}
var el = null,
  tl = null;
function nl(e, t) {
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
var rl = typeof setTimeout == "function" ? setTimeout : void 0,
  Wg = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Au = typeof Promise == "function" ? Promise : void 0,
  Hg =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Au < "u"
      ? function (e) {
          return Au.resolve(null).then(e).catch(Kg);
        }
      : rl;
function Kg(e) {
  setTimeout(function () {
    throw e;
  });
}
function us(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Fr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Fr(t);
}
function At(e) {
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
function ju(e) {
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
var nr = Math.random().toString(36).slice(2),
  nt = "__reactFiber$" + nr,
  Ur = "__reactProps$" + nr,
  gt = "__reactContainer$" + nr,
  il = "__reactEvents$" + nr,
  Gg = "__reactListeners$" + nr,
  Qg = "__reactHandles$" + nr;
function on(e) {
  var t = e[nt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[gt] || n[nt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ju(e); e !== null; ) {
          if ((n = e[nt])) return n;
          e = ju(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function ei(e) {
  return (
    (e = e[nt] || e[gt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Dn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function Eo(e) {
  return e[Ur] || null;
}
var ol = [],
  Vn = -1;
function Gt(e) {
  return { current: e };
}
function $(e) {
  0 > Vn || ((e.current = ol[Vn]), (ol[Vn] = null), Vn--);
}
function I(e, t) {
  Vn++, (ol[Vn] = e.current), (e.current = t);
}
var $t = {},
  pe = Gt($t),
  Ce = Gt(!1),
  fn = $t;
function Gn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Ji() {
  $(Ce), $(pe);
}
function _u(e, t, n) {
  if (pe.current !== $t) throw Error(S(168));
  I(pe, t), I(Ce, n);
}
function Ld(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(S(108, Rm(e) || "Unknown", i));
  return Y({}, n, r);
}
function qi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $t),
    (fn = pe.current),
    I(pe, e),
    I(Ce, Ce.current),
    !0
  );
}
function Fu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n
    ? ((e = Ld(e, t, fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Ce),
      $(pe),
      I(pe, e))
    : $(Ce),
    I(Ce, n);
}
var at = null,
  Lo = !1,
  cs = !1;
function Dd(e) {
  at === null ? (at = [e]) : at.push(e);
}
function Yg(e) {
  (Lo = !0), Dd(e);
}
function Qt() {
  if (!cs && at !== null) {
    cs = !0;
    var e = 0,
      t = z;
    try {
      var n = at;
      for (z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (at = null), (Lo = !1);
    } catch (i) {
      throw (at !== null && (at = at.slice(e + 1)), bf(Zl, Qt), i);
    } finally {
      (z = t), (cs = !1);
    }
  }
  return null;
}
var Mn = [],
  Rn = 0,
  bi = null,
  eo = 0,
  ze = [],
  Ie = 0,
  dn = null,
  ut = 1,
  ct = "";
function bt(e, t) {
  (Mn[Rn++] = eo), (Mn[Rn++] = bi), (bi = e), (eo = t);
}
function Vd(e, t, n) {
  (ze[Ie++] = ut), (ze[Ie++] = ct), (ze[Ie++] = dn), (dn = e);
  var r = ut;
  e = ct;
  var i = 32 - Ye(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - Ye(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (ut = (1 << (32 - Ye(t) + i)) | (n << i) | r),
      (ct = o + e);
  } else (ut = (1 << o) | (n << i) | r), (ct = e);
}
function oa(e) {
  e.return !== null && (bt(e, 1), Vd(e, 1, 0));
}
function sa(e) {
  for (; e === bi; )
    (bi = Mn[--Rn]), (Mn[Rn] = null), (eo = Mn[--Rn]), (Mn[Rn] = null);
  for (; e === dn; )
    (dn = ze[--Ie]),
      (ze[Ie] = null),
      (ct = ze[--Ie]),
      (ze[Ie] = null),
      (ut = ze[--Ie]),
      (ze[Ie] = null);
}
var Re = null,
  Me = null,
  H = !1,
  Qe = null;
function Md(e, t) {
  var n = Be(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Re = e), (Me = At(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Re = e), (Me = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = dn !== null ? { id: ut, overflow: ct } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Be(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Re = e),
            (Me = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function sl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ll(e) {
  if (H) {
    var t = Me;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (sl(e)) throw Error(S(418));
        t = At(n.nextSibling);
        var r = Re;
        t && Ou(e, t)
          ? Md(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (Re = e));
      }
    } else {
      if (sl(e)) throw Error(S(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (Re = e);
    }
  }
}
function zu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Re = e;
}
function vi(e) {
  if (e !== Re) return !1;
  if (!H) return zu(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !nl(e.type, e.memoizedProps))),
    t && (t = Me))
  ) {
    if (sl(e)) throw (Rd(), Error(S(418)));
    for (; t; ) Md(e, t), (t = At(t.nextSibling));
  }
  if ((zu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Me = At(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Me = null;
    }
  } else Me = Re ? At(e.stateNode.nextSibling) : null;
  return !0;
}
function Rd() {
  for (var e = Me; e; ) e = At(e.nextSibling);
}
function Qn() {
  (Me = Re = null), (H = !1);
}
function la(e) {
  Qe === null ? (Qe = [e]) : Qe.push(e);
}
var Xg = wt.ReactCurrentBatchConfig;
function Ke(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var to = Gt(null),
  no = null,
  Nn = null,
  aa = null;
function ua() {
  aa = Nn = no = null;
}
function ca(e) {
  var t = to.current;
  $(to), (e._currentValue = t);
}
function al(e, t, n) {
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
function Wn(e, t) {
  (no = e),
    (aa = Nn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Pe = !0), (e.firstContext = null));
}
function $e(e) {
  var t = e._currentValue;
  if (aa !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Nn === null)) {
      if (no === null) throw Error(S(308));
      (Nn = e), (no.dependencies = { lanes: 0, firstContext: e });
    } else Nn = Nn.next = e;
  return t;
}
var sn = null;
function fa(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function Nd(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), fa(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    yt(e, r)
  );
}
function yt(e, t) {
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
var Ct = !1;
function da(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ad(e, t) {
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
function dt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), O & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      yt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), fa(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    yt(e, n)
  );
}
function Ai(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n);
  }
}
function Iu(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
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
function ro(e, t, n, r) {
  var i = e.updateQueue;
  Ct = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (o = u) : (s.next = u), (s = a);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== s &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var f = i.baseState;
    (s = 0), (c = u = a = null), (l = o);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var y = e,
            v = l;
          switch (((d = t), (m = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                f = y.call(m, f, d);
                break e;
              }
              f = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(m, f, d) : y),
                d == null)
              )
                break e;
              f = Y({}, f, d);
              break e;
            case 2:
              Ct = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (a = f)) : (c = c.next = m),
          (s |= d);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (a = f),
      (i.baseState = a),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (pn |= s), (e.lanes = s), (e.memoizedState = f);
  }
}
function Bu(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(S(191, i));
        i.call(r);
      }
    }
}
var jd = new Nf.Component().refs;
function ul(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Do = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? yn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Ft(e),
      o = dt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, i)),
      t !== null && (Xe(t, e, i, r), Ai(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ye(),
      i = Ft(e),
      o = dt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = jt(e, o, i)),
      t !== null && (Xe(t, e, i, r), Ai(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ye(),
      r = Ft(e),
      i = dt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = jt(e, i, r)),
      t !== null && (Xe(t, e, r, n), Ai(t, e, r));
  },
};
function Uu(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !zr(n, r) || !zr(i, o)
      : !0
  );
}
function _d(e, t, n) {
  var r = !1,
    i = $t,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = $e(o))
      : ((i = Te(t) ? fn : pe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Gn(e, i) : $t)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Do),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function $u(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Do.enqueueReplaceState(t, t.state, null);
}
function cl(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = jd), da(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = $e(o))
    : ((o = Te(t) ? fn : pe.current), (i.context = Gn(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (ul(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Do.enqueueReplaceState(i, i.state, null),
      ro(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function ar(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var l = i.refs;
            l === jd && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function xi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      S(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Wu(e) {
  var t = e._init;
  return t(e._payload);
}
function Fd(e) {
  function t(g, h) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [h]), (g.flags |= 16)) : p.push(h);
    }
  }
  function n(g, h) {
    if (!e) return null;
    for (; h !== null; ) t(g, h), (h = h.sibling);
    return null;
  }
  function r(g, h) {
    for (g = new Map(); h !== null; )
      h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
    return g;
  }
  function i(g, h) {
    return (g = Ot(g, h)), (g.index = 0), (g.sibling = null), g;
  }
  function o(g, h, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < h ? ((g.flags |= 2), h) : p)
            : ((g.flags |= 2), h))
        : ((g.flags |= 1048576), h)
    );
  }
  function s(g) {
    return e && g.alternate === null && (g.flags |= 2), g;
  }
  function l(g, h, p, x) {
    return h === null || h.tag !== 6
      ? ((h = ys(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function a(g, h, p, x) {
    var w = p.type;
    return w === Cn
      ? c(g, h, p.props.children, x, p.key)
      : h !== null &&
        (h.elementType === w ||
          (typeof w == "object" &&
            w !== null &&
            w.$$typeof === Pt &&
            Wu(w) === h.type))
      ? ((x = i(h, p.props)), (x.ref = ar(g, h, p)), (x.return = g), x)
      : ((x = Ii(p.type, p.key, p.props, null, g.mode, x)),
        (x.ref = ar(g, h, p)),
        (x.return = g),
        x);
  }
  function u(g, h, p, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== p.containerInfo ||
      h.stateNode.implementation !== p.implementation
      ? ((h = vs(p, g.mode, x)), (h.return = g), h)
      : ((h = i(h, p.children || [])), (h.return = g), h);
  }
  function c(g, h, p, x, w) {
    return h === null || h.tag !== 7
      ? ((h = cn(p, g.mode, x, w)), (h.return = g), h)
      : ((h = i(h, p)), (h.return = g), h);
  }
  function f(g, h, p) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = ys("" + h, g.mode, p)), (h.return = g), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case ai:
          return (
            (p = Ii(h.type, h.key, h.props, null, g.mode, p)),
            (p.ref = ar(g, null, h)),
            (p.return = g),
            p
          );
        case Pn:
          return (h = vs(h, g.mode, p)), (h.return = g), h;
        case Pt:
          var x = h._init;
          return f(g, x(h._payload), p);
      }
      if (pr(h) || rr(h))
        return (h = cn(h, g.mode, p, null)), (h.return = g), h;
      xi(g, h);
    }
    return null;
  }
  function d(g, h, p, x) {
    var w = h !== null ? h.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return w !== null ? null : l(g, h, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ai:
          return p.key === w ? a(g, h, p, x) : null;
        case Pn:
          return p.key === w ? u(g, h, p, x) : null;
        case Pt:
          return (w = p._init), d(g, h, w(p._payload), x);
      }
      if (pr(p) || rr(p)) return w !== null ? null : c(g, h, p, x, null);
      xi(g, p);
    }
    return null;
  }
  function m(g, h, p, x, w) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (g = g.get(p) || null), l(h, g, "" + x, w);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case ai:
          return (g = g.get(x.key === null ? p : x.key) || null), a(h, g, x, w);
        case Pn:
          return (g = g.get(x.key === null ? p : x.key) || null), u(h, g, x, w);
        case Pt:
          var T = x._init;
          return m(g, h, p, T(x._payload), w);
      }
      if (pr(x) || rr(x)) return (g = g.get(p) || null), c(h, g, x, w, null);
      xi(h, x);
    }
    return null;
  }
  function y(g, h, p, x) {
    for (
      var w = null, T = null, P = h, k = (h = 0), R = null;
      P !== null && k < p.length;
      k++
    ) {
      P.index > k ? ((R = P), (P = null)) : (R = P.sibling);
      var N = d(g, P, p[k], x);
      if (N === null) {
        P === null && (P = R);
        break;
      }
      e && P && N.alternate === null && t(g, P),
        (h = o(N, h, k)),
        T === null ? (w = N) : (T.sibling = N),
        (T = N),
        (P = R);
    }
    if (k === p.length) return n(g, P), H && bt(g, k), w;
    if (P === null) {
      for (; k < p.length; k++)
        (P = f(g, p[k], x)),
          P !== null &&
            ((h = o(P, h, k)), T === null ? (w = P) : (T.sibling = P), (T = P));
      return H && bt(g, k), w;
    }
    for (P = r(g, P); k < p.length; k++)
      (R = m(P, g, k, p[k], x)),
        R !== null &&
          (e && R.alternate !== null && P.delete(R.key === null ? k : R.key),
          (h = o(R, h, k)),
          T === null ? (w = R) : (T.sibling = R),
          (T = R));
    return (
      e &&
        P.forEach(function (J) {
          return t(g, J);
        }),
      H && bt(g, k),
      w
    );
  }
  function v(g, h, p, x) {
    var w = rr(p);
    if (typeof w != "function") throw Error(S(150));
    if (((p = w.call(p)), p == null)) throw Error(S(151));
    for (
      var T = (w = null), P = h, k = (h = 0), R = null, N = p.next();
      P !== null && !N.done;
      k++, N = p.next()
    ) {
      P.index > k ? ((R = P), (P = null)) : (R = P.sibling);
      var J = d(g, P, N.value, x);
      if (J === null) {
        P === null && (P = R);
        break;
      }
      e && P && J.alternate === null && t(g, P),
        (h = o(J, h, k)),
        T === null ? (w = J) : (T.sibling = J),
        (T = J),
        (P = R);
    }
    if (N.done) return n(g, P), H && bt(g, k), w;
    if (P === null) {
      for (; !N.done; k++, N = p.next())
        (N = f(g, N.value, x)),
          N !== null &&
            ((h = o(N, h, k)), T === null ? (w = N) : (T.sibling = N), (T = N));
      return H && bt(g, k), w;
    }
    for (P = r(g, P); !N.done; k++, N = p.next())
      (N = m(P, g, k, N.value, x)),
        N !== null &&
          (e && N.alternate !== null && P.delete(N.key === null ? k : N.key),
          (h = o(N, h, k)),
          T === null ? (w = N) : (T.sibling = N),
          (T = N));
    return (
      e &&
        P.forEach(function (we) {
          return t(g, we);
        }),
      H && bt(g, k),
      w
    );
  }
  function L(g, h, p, x) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Cn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ai:
          e: {
            for (var w = p.key, T = h; T !== null; ) {
              if (T.key === w) {
                if (((w = p.type), w === Cn)) {
                  if (T.tag === 7) {
                    n(g, T.sibling),
                      (h = i(T, p.props.children)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                } else if (
                  T.elementType === w ||
                  (typeof w == "object" &&
                    w !== null &&
                    w.$$typeof === Pt &&
                    Wu(w) === T.type)
                ) {
                  n(g, T.sibling),
                    (h = i(T, p.props)),
                    (h.ref = ar(g, T, p)),
                    (h.return = g),
                    (g = h);
                  break e;
                }
                n(g, T);
                break;
              } else t(g, T);
              T = T.sibling;
            }
            p.type === Cn
              ? ((h = cn(p.props.children, g.mode, x, p.key)),
                (h.return = g),
                (g = h))
              : ((x = Ii(p.type, p.key, p.props, null, g.mode, x)),
                (x.ref = ar(g, h, p)),
                (x.return = g),
                (g = x));
          }
          return s(g);
        case Pn:
          e: {
            for (T = p.key; h !== null; ) {
              if (h.key === T)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === p.containerInfo &&
                  h.stateNode.implementation === p.implementation
                ) {
                  n(g, h.sibling),
                    (h = i(h, p.children || [])),
                    (h.return = g),
                    (g = h);
                  break e;
                } else {
                  n(g, h);
                  break;
                }
              else t(g, h);
              h = h.sibling;
            }
            (h = vs(p, g.mode, x)), (h.return = g), (g = h);
          }
          return s(g);
        case Pt:
          return (T = p._init), L(g, h, T(p._payload), x);
      }
      if (pr(p)) return y(g, h, p, x);
      if (rr(p)) return v(g, h, p, x);
      xi(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        h !== null && h.tag === 6
          ? (n(g, h.sibling), (h = i(h, p)), (h.return = g), (g = h))
          : (n(g, h), (h = ys(p, g.mode, x)), (h.return = g), (g = h)),
        s(g))
      : n(g, h);
  }
  return L;
}
var Yn = Fd(!0),
  Od = Fd(!1),
  ti = {},
  ot = Gt(ti),
  $r = Gt(ti),
  Wr = Gt(ti);
function ln(e) {
  if (e === ti) throw Error(S(174));
  return e;
}
function ha(e, t) {
  switch ((I(Wr, t), I($r, e), I(ot, ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $s(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $s(t, e));
  }
  $(ot), I(ot, t);
}
function Xn() {
  $(ot), $($r), $(Wr);
}
function zd(e) {
  ln(Wr.current);
  var t = ln(ot.current),
    n = $s(t, e.type);
  t !== n && (I($r, e), I(ot, n));
}
function pa(e) {
  $r.current === e && ($(ot), $($r));
}
var K = Gt(0);
function io(e) {
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
var fs = [];
function ma() {
  for (var e = 0; e < fs.length; e++)
    fs[e]._workInProgressVersionPrimary = null;
  fs.length = 0;
}
var ji = wt.ReactCurrentDispatcher,
  ds = wt.ReactCurrentBatchConfig,
  hn = 0,
  Q = null,
  re = null,
  se = null,
  oo = !1,
  Pr = !1,
  Hr = 0,
  Zg = 0;
function fe() {
  throw Error(S(321));
}
function ga(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ze(e[n], t[n])) return !1;
  return !0;
}
function ya(e, t, n, r, i, o) {
  if (
    ((hn = o),
    (Q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ji.current = e === null || e.memoizedState === null ? ey : ty),
    (e = n(r, i)),
    Pr)
  ) {
    o = 0;
    do {
      if (((Pr = !1), (Hr = 0), 25 <= o)) throw Error(S(301));
      (o += 1),
        (se = re = null),
        (t.updateQueue = null),
        (ji.current = ny),
        (e = n(r, i));
    } while (Pr);
  }
  if (
    ((ji.current = so),
    (t = re !== null && re.next !== null),
    (hn = 0),
    (se = re = Q = null),
    (oo = !1),
    t)
  )
    throw Error(S(300));
  return e;
}
function va() {
  var e = Hr !== 0;
  return (Hr = 0), e;
}
function et() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return se === null ? (Q.memoizedState = se = e) : (se = se.next = e), se;
}
function We() {
  if (re === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = se === null ? Q.memoizedState : se.next;
  if (t !== null) (se = t), (re = e);
  else {
    if (e === null) throw Error(S(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      se === null ? (Q.memoizedState = se = e) : (se = se.next = e);
  }
  return se;
}
function Kr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function hs(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = o;
    do {
      var c = u.lane;
      if ((hn & c) === c)
        a !== null &&
          (a = a.next =
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
        a === null ? ((l = a = f), (s = r)) : (a = a.next = f),
          (Q.lanes |= c),
          (pn |= c);
      }
      u = u.next;
    } while (u !== null && u !== o);
    a === null ? (s = r) : (a.next = l),
      Ze(r, t.memoizedState) || (Pe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (Q.lanes |= o), (pn |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ps(e) {
  var t = We(),
    n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    Ze(o, t.memoizedState) || (Pe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Id() {}
function Bd(e, t) {
  var n = Q,
    r = We(),
    i = t(),
    o = !Ze(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Pe = !0)),
    (r = r.queue),
    xa(Wd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (se !== null && se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Gr(9, $d.bind(null, n, r, i, t), void 0, null),
      le === null)
    )
      throw Error(S(349));
    hn & 30 || Ud(n, t, i);
  }
  return i;
}
function Ud(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function $d(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Hd(t) && Kd(e);
}
function Wd(e, t, n) {
  return n(function () {
    Hd(t) && Kd(e);
  });
}
function Hd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ze(e, n);
  } catch {
    return !0;
  }
}
function Kd(e) {
  var t = yt(e, 1);
  t !== null && Xe(t, e, 1, -1);
}
function Hu(e) {
  var t = et();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bg.bind(null, Q, e)),
    [t.memoizedState, e]
  );
}
function Gr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Gd() {
  return We().memoizedState;
}
function _i(e, t, n, r) {
  var i = et();
  (Q.flags |= e),
    (i.memoizedState = Gr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Vo(e, t, n, r) {
  var i = We();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (re !== null) {
    var s = re.memoizedState;
    if (((o = s.destroy), r !== null && ga(r, s.deps))) {
      i.memoizedState = Gr(t, n, o, r);
      return;
    }
  }
  (Q.flags |= e), (i.memoizedState = Gr(1 | t, n, o, r));
}
function Ku(e, t) {
  return _i(8390656, 8, e, t);
}
function xa(e, t) {
  return Vo(2048, 8, e, t);
}
function Qd(e, t) {
  return Vo(4, 2, e, t);
}
function Yd(e, t) {
  return Vo(4, 4, e, t);
}
function Xd(e, t) {
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
function Zd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Vo(4, 4, Xd.bind(null, t, e), n)
  );
}
function wa() {}
function Jd(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ga(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function qd(e, t) {
  var n = We();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ga(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function bd(e, t, n) {
  return hn & 21
    ? (Ze(n, t) || ((n = nd()), (Q.lanes |= n), (pn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Pe = !0)), (e.memoizedState = n));
}
function Jg(e, t) {
  var n = z;
  (z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ds.transition;
  ds.transition = {};
  try {
    e(!1), t();
  } finally {
    (z = n), (ds.transition = r);
  }
}
function eh() {
  return We().memoizedState;
}
function qg(e, t, n) {
  var r = Ft(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    th(e))
  )
    nh(t, n);
  else if (((n = Nd(e, t, n, r)), n !== null)) {
    var i = ye();
    Xe(n, e, r, i), rh(n, t, r);
  }
}
function bg(e, t, n) {
  var r = Ft(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (th(e)) nh(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = l), Ze(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), fa(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Nd(e, t, i, r)),
      n !== null && ((i = ye()), Xe(n, e, r, i), rh(n, t, r));
  }
}
function th(e) {
  var t = e.alternate;
  return e === Q || (t !== null && t === Q);
}
function nh(e, t) {
  Pr = oo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function rh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Jl(e, n);
  }
}
var so = {
    readContext: $e,
    useCallback: fe,
    useContext: fe,
    useEffect: fe,
    useImperativeHandle: fe,
    useInsertionEffect: fe,
    useLayoutEffect: fe,
    useMemo: fe,
    useReducer: fe,
    useRef: fe,
    useState: fe,
    useDebugValue: fe,
    useDeferredValue: fe,
    useTransition: fe,
    useMutableSource: fe,
    useSyncExternalStore: fe,
    useId: fe,
    unstable_isNewReconciler: !1,
  },
  ey = {
    readContext: $e,
    useCallback: function (e, t) {
      return (et().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $e,
    useEffect: Ku,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        _i(4194308, 4, Xd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return _i(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return _i(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = et();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = et();
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
        (e = e.dispatch = qg.bind(null, Q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = et();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Hu,
    useDebugValue: wa,
    useDeferredValue: function (e) {
      return (et().memoizedState = e);
    },
    useTransition: function () {
      var e = Hu(!1),
        t = e[0];
      return (e = Jg.bind(null, e[1])), (et().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Q,
        i = et();
      if (H) {
        if (n === void 0) throw Error(S(407));
        n = n();
      } else {
        if (((n = t()), le === null)) throw Error(S(349));
        hn & 30 || Ud(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Ku(Wd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Gr(9, $d.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = et(),
        t = le.identifierPrefix;
      if (H) {
        var n = ct,
          r = ut;
        (n = (r & ~(1 << (32 - Ye(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Hr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Zg++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  ty = {
    readContext: $e,
    useCallback: Jd,
    useContext: $e,
    useEffect: xa,
    useImperativeHandle: Zd,
    useInsertionEffect: Qd,
    useLayoutEffect: Yd,
    useMemo: qd,
    useReducer: hs,
    useRef: Gd,
    useState: function () {
      return hs(Kr);
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var t = We();
      return bd(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = hs(Kr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Id,
    useSyncExternalStore: Bd,
    useId: eh,
    unstable_isNewReconciler: !1,
  },
  ny = {
    readContext: $e,
    useCallback: Jd,
    useContext: $e,
    useEffect: xa,
    useImperativeHandle: Zd,
    useInsertionEffect: Qd,
    useLayoutEffect: Yd,
    useMemo: qd,
    useReducer: ps,
    useRef: Gd,
    useState: function () {
      return ps(Kr);
    },
    useDebugValue: wa,
    useDeferredValue: function (e) {
      var t = We();
      return re === null ? (t.memoizedState = e) : bd(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = ps(Kr)[0],
        t = We().memoizedState;
      return [e, t];
    },
    useMutableSource: Id,
    useSyncExternalStore: Bd,
    useId: eh,
    unstable_isNewReconciler: !1,
  };
function Zn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Mm(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function ms(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function fl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ry = typeof WeakMap == "function" ? WeakMap : Map;
function ih(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ao || ((ao = !0), (Sl = r)), fl(e, t);
    }),
    n
  );
}
function oh(e, t, n) {
  (n = dt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        fl(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        fl(e, t),
          typeof r != "function" &&
            (_t === null ? (_t = new Set([this])) : _t.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Gu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ry();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = yy.bind(null, e, t, n)), t.then(e, e));
}
function Qu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Yu(e, t, n, r, i) {
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
              : ((t = dt(-1, 1)), (t.tag = 2), jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var iy = wt.ReactCurrentOwner,
  Pe = !1;
function ge(e, t, n, r) {
  t.child = e === null ? Od(t, null, n, r) : Yn(t, e.child, n, r);
}
function Xu(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Wn(t, i),
    (r = ya(e, t, n, r, o, i)),
    (n = va()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (H && n && oa(t), (t.flags |= 1), ge(e, t, r, i), t.child)
  );
}
function Zu(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Da(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), sh(e, t, o, r, i))
      : ((e = Ii(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : zr), n(s, r) && e.ref === t.ref)
    )
      return vt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Ot(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function sh(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (zr(o, r) && e.ref === t.ref)
      if (((Pe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Pe = !0);
      else return (t.lanes = e.lanes), vt(e, t, i);
  }
  return dl(e, t, n, r, i);
}
function lh(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        I(jn, Ve),
        (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          I(jn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        I(jn, Ve),
        (Ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      I(jn, Ve),
      (Ve |= r);
  return ge(e, t, i, n), t.child;
}
function ah(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function dl(e, t, n, r, i) {
  var o = Te(n) ? fn : pe.current;
  return (
    (o = Gn(t, o)),
    Wn(t, i),
    (n = ya(e, t, n, r, o, i)),
    (r = va()),
    e !== null && !Pe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        vt(e, t, i))
      : (H && r && oa(t), (t.flags |= 1), ge(e, t, n, i), t.child)
  );
}
function Ju(e, t, n, r, i) {
  if (Te(n)) {
    var o = !0;
    qi(t);
  } else o = !1;
  if ((Wn(t, i), t.stateNode === null))
    Fi(e, t), _d(t, n, r), cl(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = $e(u))
      : ((u = Te(n) ? fn : pe.current), (u = Gn(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && $u(t, s, r, u)),
      (Ct = !1);
    var d = t.memoizedState;
    (s.state = d),
      ro(t, r, s, i),
      (a = t.memoizedState),
      l !== r || d !== a || Ce.current || Ct
        ? (typeof c == "function" && (ul(t, n, c, r), (a = t.memoizedState)),
          (l = Ct || Uu(t, n, l, r, d, a, u))
            ? (f ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Ad(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : Ke(t.type, l)),
      (s.props = u),
      (f = t.pendingProps),
      (d = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = $e(a))
        : ((a = Te(n) ? fn : pe.current), (a = Gn(t, a)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== f || d !== a) && $u(t, s, r, a)),
      (Ct = !1),
      (d = t.memoizedState),
      (s.state = d),
      ro(t, r, s, i);
    var y = t.memoizedState;
    l !== f || d !== y || Ce.current || Ct
      ? (typeof m == "function" && (ul(t, n, m, r), (y = t.memoizedState)),
        (u = Ct || Uu(t, n, u, r, d, y, a) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return hl(e, t, n, r, o, i);
}
function hl(e, t, n, r, i, o) {
  ah(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && Fu(t, n, !1), vt(e, t, o);
  (r = t.stateNode), (iy.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = Yn(t, e.child, null, o)), (t.child = Yn(t, null, l, o)))
      : ge(e, t, l, o),
    (t.memoizedState = r.state),
    i && Fu(t, n, !0),
    t.child
  );
}
function uh(e) {
  var t = e.stateNode;
  t.pendingContext
    ? _u(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && _u(e, t.context, !1),
    ha(e, t.containerInfo);
}
function qu(e, t, n, r, i) {
  return Qn(), la(i), (t.flags |= 256), ge(e, t, n, r), t.child;
}
var pl = { dehydrated: null, treeContext: null, retryLane: 0 };
function ml(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ch(e, t, n) {
  var r = t.pendingProps,
    i = K.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    I(K, i & 1),
    e === null)
  )
    return (
      ll(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = No(s, r, 0, null)),
              (e = cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = ml(n)),
              (t.memoizedState = pl),
              e)
            : Sa(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return oy(e, t, s, r, l, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (l = i.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ot(i, a)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Ot(l, o)) : ((o = cn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? ml(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = pl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ot(o, { mode: "visible", children: r.children })),
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
function Sa(e, t) {
  return (
    (t = No({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function wi(e, t, n, r) {
  return (
    r !== null && la(r),
    Yn(t, e.child, null, n),
    (e = Sa(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function oy(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ms(Error(S(422)))), wi(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = No({ mode: "visible", children: r.children }, i, 0, null)),
        (o = cn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Yn(t, e.child, null, s),
        (t.child.memoizedState = ml(s)),
        (t.memoizedState = pl),
        o);
  if (!(t.mode & 1)) return wi(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (o = Error(S(419))), (r = ms(o, r, void 0)), wi(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Pe || l)) {
    if (((r = le), r !== null)) {
      switch (s & -s) {
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
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), yt(e, i), Xe(r, e, i, -1));
    }
    return La(), (r = ms(Error(S(421)))), wi(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = vy.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Me = At(i.nextSibling)),
      (Re = t),
      (H = !0),
      (Qe = null),
      e !== null &&
        ((ze[Ie++] = ut),
        (ze[Ie++] = ct),
        (ze[Ie++] = dn),
        (ut = e.id),
        (ct = e.overflow),
        (dn = t)),
      (t = Sa(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), al(e.return, t, n);
}
function gs(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function fh(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((ge(e, t, r.children, n), (r = K.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bu(e, n, t);
        else if (e.tag === 19) bu(e, n, t);
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
  if ((I(K, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && io(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          gs(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && io(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        gs(t, !0, n, null, o);
        break;
      case "together":
        gs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Fi(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function vt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (pn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ot(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ot(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function sy(e, t, n) {
  switch (t.tag) {
    case 3:
      uh(t), Qn();
      break;
    case 5:
      zd(t);
      break;
    case 1:
      Te(t.type) && qi(t);
      break;
    case 4:
      ha(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      I(to, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (I(K, K.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? ch(e, t, n)
          : (I(K, K.current & 1),
            (e = vt(e, t, n)),
            e !== null ? e.sibling : null);
      I(K, K.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return fh(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        I(K, K.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), lh(e, t, n);
  }
  return vt(e, t, n);
}
var dh, gl, hh, ph;
dh = function (e, t) {
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
gl = function () {};
hh = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ln(ot.current);
    var o = null;
    switch (n) {
      case "input":
        (i = zs(e, i)), (r = zs(e, r)), (o = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Us(e, i)), (r = Us(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Zi);
    }
    Ws(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var l = i[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Rr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Rr.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && U("scroll", e),
                  o || l === a || (o = []))
                : (o = o || []).push(u, a));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
ph = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function ur(e, t) {
  if (!H)
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
function de(e) {
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
function ly(e, t, n) {
  var r = t.pendingProps;
  switch ((sa(t), t.tag)) {
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
      return de(t), null;
    case 1:
      return Te(t.type) && Ji(), de(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Xn(),
        $(Ce),
        $(pe),
        ma(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vi(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Qe !== null && (Cl(Qe), (Qe = null)))),
        gl(e, t),
        de(t),
        null
      );
    case 5:
      pa(t);
      var i = ln(Wr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        hh(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return de(t), null;
        }
        if (((e = ln(ot.current)), vi(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[nt] = t), (r[Ur] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < gr.length; i++) U(gr[i], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U("error", r), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              au(r, o), U("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                U("invalid", r);
              break;
            case "textarea":
              cu(r, o), U("invalid", r);
          }
          Ws(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      yi(r.textContent, l, e),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      yi(r.textContent, l, e),
                    (i = ["children", "" + l]))
                : Rr.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  U("scroll", r);
            }
          switch (n) {
            case "input":
              ui(r), uu(r, o, !0);
              break;
            case "textarea":
              ui(r), fu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Zi);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Uf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[nt] = t),
            (e[Ur] = r),
            dh(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Hs(n, r)), n)) {
              case "dialog":
                U("cancel", e), U("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < gr.length; i++) U(gr[i], e);
                i = r;
                break;
              case "source":
                U("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                U("error", e), U("load", e), (i = r);
                break;
              case "details":
                U("toggle", e), (i = r);
                break;
              case "input":
                au(e, r), (i = zs(e, r)), U("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  U("invalid", e);
                break;
              case "textarea":
                cu(e, r), (i = Us(e, r)), U("invalid", e);
                break;
              default:
                i = r;
            }
            Ws(n, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? Hf(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && $f(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && Nr(e, a)
                    : typeof a == "number" && Nr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Rr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && U("scroll", e)
                      : a != null && Kl(e, o, a, s));
              }
            switch (n) {
              case "input":
                ui(e), uu(e, r, !1);
                break;
              case "textarea":
                ui(e), fu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Ut(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? In(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      In(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = Zi);
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
      return de(t), null;
    case 6:
      if (e && t.stateNode != null) ph(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (((n = ln(Wr.current)), ln(ot.current), vi(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[nt] = t),
            (o = r.nodeValue !== n) && ((e = Re), e !== null))
          )
            switch (e.tag) {
              case 3:
                yi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  yi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[nt] = t),
            (t.stateNode = r);
      }
      return de(t), null;
    case 13:
      if (
        ($(K),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && Me !== null && t.mode & 1 && !(t.flags & 128))
          Rd(), Qn(), (t.flags |= 98560), (o = !1);
        else if (((o = vi(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(S(317));
            o[nt] = t;
          } else
            Qn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          de(t), (o = !1);
        } else Qe !== null && (Cl(Qe), (Qe = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || K.current & 1 ? ie === 0 && (ie = 3) : La())),
          t.updateQueue !== null && (t.flags |= 4),
          de(t),
          null);
    case 4:
      return (
        Xn(), gl(e, t), e === null && Ir(t.stateNode.containerInfo), de(t), null
      );
    case 10:
      return ca(t.type._context), de(t), null;
    case 17:
      return Te(t.type) && Ji(), de(t), null;
    case 19:
      if (($(K), (o = t.memoizedState), o === null)) return de(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) ur(o, !1);
        else {
          if (ie !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = io(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    ur(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return I(K, (K.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            ee() > Jn &&
            ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = io(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              ur(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !H)
            )
              return de(t), null;
          } else
            2 * ee() - o.renderingStartTime > Jn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), ur(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ee()),
          (t.sibling = null),
          (n = K.current),
          I(K, r ? (n & 1) | 2 : n & 1),
          t)
        : (de(t), null);
    case 22:
    case 23:
      return (
        Ea(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (de(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : de(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function ay(e, t) {
  switch ((sa(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Ji(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Xn(),
        $(Ce),
        $(pe),
        ma(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return pa(t), null;
    case 13:
      if (($(K), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(S(340));
        Qn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(K), null;
    case 4:
      return Xn(), null;
    case 10:
      return ca(t.type._context), null;
    case 22:
    case 23:
      return Ea(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Si = !1,
  he = !1,
  uy = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function An(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function yl(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ec = !1;
function cy(e, t) {
  if (((el = Qi), (e = vd()), ia(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (a = s + r),
                f.nodeType === 3 && (s += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === i && (l = s),
                d === o && ++c === r && (a = s),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (tl = { focusedElem: e, selectionRange: n }, Qi = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    L = y.memoizedState,
                    g = t.stateNode,
                    h = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : Ke(t.type, v),
                      L
                    );
                  g.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(S(163));
            }
        } catch (x) {
          X(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (y = ec), (ec = !1), y;
}
function Cr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && yl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Mo(e, t) {
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
function vl(e) {
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
function mh(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), mh(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[nt], delete t[Ur], delete t[il], delete t[Gg], delete t[Qg])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function gh(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function tc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || gh(e.return)) return null;
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
function xl(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = Zi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (xl(e, t, n), e = e.sibling; e !== null; ) xl(e, t, n), (e = e.sibling);
}
function wl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (wl(e, t, n), e = e.sibling; e !== null; ) wl(e, t, n), (e = e.sibling);
}
var ae = null,
  Ge = !1;
function St(e, t, n) {
  for (n = n.child; n !== null; ) yh(e, t, n), (n = n.sibling);
}
function yh(e, t, n) {
  if (it && typeof it.onCommitFiberUnmount == "function")
    try {
      it.onCommitFiberUnmount(ko, n);
    } catch {}
  switch (n.tag) {
    case 5:
      he || An(n, t);
    case 6:
      var r = ae,
        i = Ge;
      (ae = null),
        St(e, t, n),
        (ae = r),
        (Ge = i),
        ae !== null &&
          (Ge
            ? ((e = ae),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ae.removeChild(n.stateNode));
      break;
    case 18:
      ae !== null &&
        (Ge
          ? ((e = ae),
            (n = n.stateNode),
            e.nodeType === 8
              ? us(e.parentNode, n)
              : e.nodeType === 1 && us(e, n),
            Fr(e))
          : us(ae, n.stateNode));
      break;
    case 4:
      (r = ae),
        (i = Ge),
        (ae = n.stateNode.containerInfo),
        (Ge = !0),
        St(e, t, n),
        (ae = r),
        (Ge = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !he &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && yl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      St(e, t, n);
      break;
    case 1:
      if (
        !he &&
        (An(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          X(n, t, l);
        }
      St(e, t, n);
      break;
    case 21:
      St(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((he = (r = he) || n.memoizedState !== null), St(e, t, n), (he = r))
        : St(e, t, n);
      break;
    default:
      St(e, t, n);
  }
}
function nc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new uy()),
      t.forEach(function (r) {
        var i = xy.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function He(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (ae = l.stateNode), (Ge = !1);
              break e;
            case 3:
              (ae = l.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (ae = l.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          l = l.return;
        }
        if (ae === null) throw Error(S(160));
        yh(o, s, i), (ae = null), (Ge = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (u) {
        X(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) vh(t, e), (t = t.sibling);
}
function vh(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((He(t, e), be(e), r & 4)) {
        try {
          Cr(3, e, e.return), Mo(3, e);
        } catch (v) {
          X(e, e.return, v);
        }
        try {
          Cr(5, e, e.return);
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 1:
      He(t, e), be(e), r & 512 && n !== null && An(n, n.return);
      break;
    case 5:
      if (
        (He(t, e),
        be(e),
        r & 512 && n !== null && An(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Nr(i, "");
        } catch (v) {
          X(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && If(i, o),
              Hs(l, s);
            var u = Hs(l, o);
            for (s = 0; s < a.length; s += 2) {
              var c = a[s],
                f = a[s + 1];
              c === "style"
                ? Hf(i, f)
                : c === "dangerouslySetInnerHTML"
                ? $f(i, f)
                : c === "children"
                ? Nr(i, f)
                : Kl(i, c, f, u);
            }
            switch (l) {
              case "input":
                Is(i, o);
                break;
              case "textarea":
                Bf(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var m = o.value;
                m != null
                  ? In(i, !!o.multiple, m, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? In(i, !!o.multiple, o.defaultValue, !0)
                      : In(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Ur] = o;
          } catch (v) {
            X(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((He(t, e), be(e), r & 4)) {
        if (e.stateNode === null) throw Error(S(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          X(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (He(t, e), be(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Fr(t.containerInfo);
        } catch (v) {
          X(e, e.return, v);
        }
      break;
    case 4:
      He(t, e), be(e);
      break;
    case 13:
      He(t, e),
        be(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Ca = ee())),
        r & 4 && nc(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((he = (u = he) || c), He(t, e), (he = u)) : He(t, e),
        be(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (V = e, c = e.child; c !== null; ) {
            for (f = V = c; V !== null; ) {
              switch (((d = V), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Cr(4, d, d.return);
                  break;
                case 1:
                  An(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      X(r, n, v);
                    }
                  }
                  break;
                case 5:
                  An(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    ic(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (V = m)) : ic(f);
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
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = f.stateNode),
                      (a = f.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = Wf("display", s)));
              } catch (v) {
                X(e, e.return, v);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (v) {
                X(e, e.return, v);
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
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      He(t, e), be(e), r & 4 && nc(e);
      break;
    case 21:
      break;
    default:
      He(t, e), be(e);
  }
}
function be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (gh(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (Nr(i, ""), (r.flags &= -33));
          var o = tc(e);
          wl(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = tc(e);
          xl(e, l, s);
          break;
        default:
          throw Error(S(161));
      }
    } catch (a) {
      X(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function fy(e, t, n) {
  (V = e), xh(e);
}
function xh(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Si;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || he;
        l = Si;
        var u = he;
        if (((Si = s), (he = a) && !u))
          for (V = i; V !== null; )
            (s = V),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? oc(i)
                : a !== null
                ? ((a.return = s), (V = a))
                : oc(i);
        for (; o !== null; ) (V = o), xh(o), (o = o.sibling);
        (V = i), (Si = l), (he = u);
      }
      rc(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (V = o)) : rc(e);
  }
}
function rc(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              he || Mo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !he)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Ke(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && Bu(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Bu(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
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
                    f !== null && Fr(f);
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
              throw Error(S(163));
          }
        he || (t.flags & 512 && vl(t));
      } catch (d) {
        X(t, t.return, d);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function ic(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function oc(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mo(4, t);
          } catch (a) {
            X(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              X(t, i, a);
            }
          }
          var o = t.return;
          try {
            vl(t);
          } catch (a) {
            X(t, o, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            vl(t);
          } catch (a) {
            X(t, s, a);
          }
      }
    } catch (a) {
      X(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (V = l);
      break;
    }
    V = t.return;
  }
}
var dy = Math.ceil,
  lo = wt.ReactCurrentDispatcher,
  ka = wt.ReactCurrentOwner,
  Ue = wt.ReactCurrentBatchConfig,
  O = 0,
  le = null,
  ne = null,
  ue = 0,
  Ve = 0,
  jn = Gt(0),
  ie = 0,
  Qr = null,
  pn = 0,
  Ro = 0,
  Pa = 0,
  Tr = null,
  ke = null,
  Ca = 0,
  Jn = 1 / 0,
  lt = null,
  ao = !1,
  Sl = null,
  _t = null,
  ki = !1,
  Vt = null,
  uo = 0,
  Er = 0,
  kl = null,
  Oi = -1,
  zi = 0;
function ye() {
  return O & 6 ? ee() : Oi !== -1 ? Oi : (Oi = ee());
}
function Ft(e) {
  return e.mode & 1
    ? O & 2 && ue !== 0
      ? ue & -ue
      : Xg.transition !== null
      ? (zi === 0 && (zi = nd()), zi)
      : ((e = z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ud(e.type))),
        e)
    : 1;
}
function Xe(e, t, n, r) {
  if (50 < Er) throw ((Er = 0), (kl = null), Error(S(185)));
  qr(e, n, r),
    (!(O & 2) || e !== le) &&
      (e === le && (!(O & 2) && (Ro |= n), ie === 4 && Lt(e, ue)),
      Ee(e, r),
      n === 1 && O === 0 && !(t.mode & 1) && ((Jn = ee() + 500), Lo && Qt()));
}
function Ee(e, t) {
  var n = e.callbackNode;
  Xm(e, t);
  var r = Gi(e, e === le ? ue : 0);
  if (r === 0)
    n !== null && pu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && pu(n), t === 1))
      e.tag === 0 ? Yg(sc.bind(null, e)) : Dd(sc.bind(null, e)),
        Hg(function () {
          !(O & 6) && Qt();
        }),
        (n = null);
    else {
      switch (rd(r)) {
        case 1:
          n = Zl;
          break;
        case 4:
          n = ed;
          break;
        case 16:
          n = Ki;
          break;
        case 536870912:
          n = td;
          break;
        default:
          n = Ki;
      }
      n = Lh(n, wh.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function wh(e, t) {
  if (((Oi = -1), (zi = 0), O & 6)) throw Error(S(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = Gi(e, e === le ? ue : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = co(e, r);
  else {
    t = r;
    var i = O;
    O |= 2;
    var o = kh();
    (le !== e || ue !== t) && ((lt = null), (Jn = ee() + 500), un(e, t));
    do
      try {
        my();
        break;
      } catch (l) {
        Sh(e, l);
      }
    while (1);
    ua(),
      (lo.current = o),
      (O = i),
      ne !== null ? (t = 0) : ((le = null), (ue = 0), (t = ie));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Xs(e)), i !== 0 && ((r = i), (t = Pl(e, i)))), t === 1)
    )
      throw ((n = Qr), un(e, 0), Lt(e, r), Ee(e, ee()), n);
    if (t === 6) Lt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !hy(i) &&
          ((t = co(e, r)),
          t === 2 && ((o = Xs(e)), o !== 0 && ((r = o), (t = Pl(e, o)))),
          t === 1))
      )
        throw ((n = Qr), un(e, 0), Lt(e, r), Ee(e, ee()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          en(e, ke, lt);
          break;
        case 3:
          if (
            (Lt(e, r), (r & 130023424) === r && ((t = Ca + 500 - ee()), 10 < t))
          ) {
            if (Gi(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ye(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = rl(en.bind(null, e, ke, lt), t);
            break;
          }
          en(e, ke, lt);
          break;
        case 4:
          if ((Lt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - Ye(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = ee() - r),
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
                : 1960 * dy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = rl(en.bind(null, e, ke, lt), r);
            break;
          }
          en(e, ke, lt);
          break;
        case 5:
          en(e, ke, lt);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Ee(e, ee()), e.callbackNode === n ? wh.bind(null, e) : null;
}
function Pl(e, t) {
  var n = Tr;
  return (
    e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
    (e = co(e, t)),
    e !== 2 && ((t = ke), (ke = n), t !== null && Cl(t)),
    e
  );
}
function Cl(e) {
  ke === null ? (ke = e) : ke.push.apply(ke, e);
}
function hy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Ze(o(), i)) return !1;
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
function Lt(e, t) {
  for (
    t &= ~Pa,
      t &= ~Ro,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ye(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function sc(e) {
  if (O & 6) throw Error(S(327));
  Hn();
  var t = Gi(e, 0);
  if (!(t & 1)) return Ee(e, ee()), null;
  var n = co(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Xs(e);
    r !== 0 && ((t = r), (n = Pl(e, r)));
  }
  if (n === 1) throw ((n = Qr), un(e, 0), Lt(e, t), Ee(e, ee()), n);
  if (n === 6) throw Error(S(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    en(e, ke, lt),
    Ee(e, ee()),
    null
  );
}
function Ta(e, t) {
  var n = O;
  O |= 1;
  try {
    return e(t);
  } finally {
    (O = n), O === 0 && ((Jn = ee() + 500), Lo && Qt());
  }
}
function mn(e) {
  Vt !== null && Vt.tag === 0 && !(O & 6) && Hn();
  var t = O;
  O |= 1;
  var n = Ue.transition,
    r = z;
  try {
    if (((Ue.transition = null), (z = 1), e)) return e();
  } finally {
    (z = r), (Ue.transition = n), (O = t), !(O & 6) && Qt();
  }
}
function Ea() {
  (Ve = jn.current), $(jn);
}
function un(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Wg(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((sa(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ji();
          break;
        case 3:
          Xn(), $(Ce), $(pe), ma();
          break;
        case 5:
          pa(r);
          break;
        case 4:
          Xn();
          break;
        case 13:
          $(K);
          break;
        case 19:
          $(K);
          break;
        case 10:
          ca(r.type._context);
          break;
        case 22:
        case 23:
          Ea();
      }
      n = n.return;
    }
  if (
    ((le = e),
    (ne = e = Ot(e.current, null)),
    (ue = Ve = t),
    (ie = 0),
    (Qr = null),
    (Pa = Ro = pn = 0),
    (ke = Tr = null),
    sn !== null)
  ) {
    for (t = 0; t < sn.length; t++)
      if (((n = sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    sn = null;
  }
  return e;
}
function Sh(e, t) {
  do {
    var n = ne;
    try {
      if ((ua(), (ji.current = so), oo)) {
        for (var r = Q.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        oo = !1;
      }
      if (
        ((hn = 0),
        (se = re = Q = null),
        (Pr = !1),
        (Hr = 0),
        (ka.current = null),
        n === null || n.return === null)
      ) {
        (ie = 1), (Qr = t), (ne = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = ue),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Qu(s);
          if (m !== null) {
            (m.flags &= -257),
              Yu(m, s, l, o, t),
              m.mode & 1 && Gu(o, u, t),
              (t = m),
              (a = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else y.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Gu(o, u, t), La();
              break e;
            }
            a = Error(S(426));
          }
        } else if (H && l.mode & 1) {
          var L = Qu(s);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              Yu(L, s, l, o, t),
              la(Zn(a, l));
            break e;
          }
        }
        (o = a = Zn(a, l)),
          ie !== 4 && (ie = 2),
          Tr === null ? (Tr = [o]) : Tr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var g = ih(o, a, t);
              Iu(o, g);
              break e;
            case 1:
              l = a;
              var h = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (_t === null || !_t.has(p))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var x = oh(o, l, t);
                Iu(o, x);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Ch(n);
    } catch (w) {
      (t = w), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function kh() {
  var e = lo.current;
  return (lo.current = so), e === null ? so : e;
}
function La() {
  (ie === 0 || ie === 3 || ie === 2) && (ie = 4),
    le === null || (!(pn & 268435455) && !(Ro & 268435455)) || Lt(le, ue);
}
function co(e, t) {
  var n = O;
  O |= 2;
  var r = kh();
  (le !== e || ue !== t) && ((lt = null), un(e, t));
  do
    try {
      py();
      break;
    } catch (i) {
      Sh(e, i);
    }
  while (1);
  if ((ua(), (O = n), (lo.current = r), ne !== null)) throw Error(S(261));
  return (le = null), (ue = 0), ie;
}
function py() {
  for (; ne !== null; ) Ph(ne);
}
function my() {
  for (; ne !== null && !Bm(); ) Ph(ne);
}
function Ph(e) {
  var t = Eh(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ch(e) : (ne = t),
    (ka.current = null);
}
function Ch(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ay(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ie = 6), (ne = null);
        return;
      }
    } else if (((n = ly(n, t, Ve)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  ie === 0 && (ie = 5);
}
function en(e, t, n) {
  var r = z,
    i = Ue.transition;
  try {
    (Ue.transition = null), (z = 1), gy(e, t, n, r);
  } finally {
    (Ue.transition = i), (z = r);
  }
  return null;
}
function gy(e, t, n, r) {
  do Hn();
  while (Vt !== null);
  if (O & 6) throw Error(S(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(S(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Zm(e, o),
    e === le && ((ne = le = null), (ue = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      ki ||
      ((ki = !0),
      Lh(Ki, function () {
        return Hn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ue.transition), (Ue.transition = null);
    var s = z;
    z = 1;
    var l = O;
    (O |= 4),
      (ka.current = null),
      cy(e, n),
      vh(n, e),
      Fg(tl),
      (Qi = !!el),
      (tl = el = null),
      (e.current = n),
      fy(n),
      Um(),
      (O = l),
      (z = s),
      (Ue.transition = o);
  } else e.current = n;
  if (
    (ki && ((ki = !1), (Vt = e), (uo = i)),
    (o = e.pendingLanes),
    o === 0 && (_t = null),
    Hm(n.stateNode),
    Ee(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ao) throw ((ao = !1), (e = Sl), (Sl = null), e);
  return (
    uo & 1 && e.tag !== 0 && Hn(),
    (o = e.pendingLanes),
    o & 1 ? (e === kl ? Er++ : ((Er = 0), (kl = e))) : (Er = 0),
    Qt(),
    null
  );
}
function Hn() {
  if (Vt !== null) {
    var e = rd(uo),
      t = Ue.transition,
      n = z;
    try {
      if (((Ue.transition = null), (z = 16 > e ? 16 : e), Vt === null))
        var r = !1;
      else {
        if (((e = Vt), (Vt = null), (uo = 0), O & 6)) throw Error(S(331));
        var i = O;
        for (O |= 4, V = e.current; V !== null; ) {
          var o = V,
            s = o.child;
          if (V.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (V = u; V !== null; ) {
                  var c = V;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cr(8, c, o);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (V = f);
                  else
                    for (; V !== null; ) {
                      c = V;
                      var d = c.sibling,
                        m = c.return;
                      if ((mh(c), c === u)) {
                        V = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (V = d);
                        break;
                      }
                      V = m;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var L = v.sibling;
                    (v.sibling = null), (v = L);
                  } while (v !== null);
                }
              }
              V = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (V = s);
          else
            e: for (; V !== null; ) {
              if (((o = V), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Cr(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                (g.return = o.return), (V = g);
                break e;
              }
              V = o.return;
            }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          s = V;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) (p.return = s), (V = p);
          else
            e: for (s = h; V !== null; ) {
              if (((l = V), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mo(9, l);
                  }
                } catch (w) {
                  X(l, l.return, w);
                }
              if (l === s) {
                V = null;
                break e;
              }
              var x = l.sibling;
              if (x !== null) {
                (x.return = l.return), (V = x);
                break e;
              }
              V = l.return;
            }
        }
        if (
          ((O = i), Qt(), it && typeof it.onPostCommitFiberRoot == "function")
        )
          try {
            it.onPostCommitFiberRoot(ko, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (z = n), (Ue.transition = t);
    }
  }
  return !1;
}
function lc(e, t, n) {
  (t = Zn(n, t)),
    (t = ih(e, t, 1)),
    (e = jt(e, t, 1)),
    (t = ye()),
    e !== null && (qr(e, 1, t), Ee(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (_t === null || !_t.has(r)))
        ) {
          (e = Zn(n, e)),
            (e = oh(t, e, 1)),
            (t = jt(t, e, 1)),
            (e = ye()),
            t !== null && (qr(t, 1, e), Ee(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function yy(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ye()),
    (e.pingedLanes |= e.suspendedLanes & n),
    le === e &&
      (ue & n) === n &&
      (ie === 4 || (ie === 3 && (ue & 130023424) === ue && 500 > ee() - Ca)
        ? un(e, 0)
        : (Pa |= n)),
    Ee(e, t);
}
function Th(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = di), (di <<= 1), !(di & 130023424) && (di = 4194304))
      : (t = 1));
  var n = ye();
  (e = yt(e, t)), e !== null && (qr(e, t, n), Ee(e, n));
}
function vy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Th(e, n);
}
function xy(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), Th(e, n);
}
var Eh;
Eh = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ce.current) Pe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Pe = !1), sy(e, t, n);
      Pe = !!(e.flags & 131072);
    }
  else (Pe = !1), H && t.flags & 1048576 && Vd(t, eo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Fi(e, t), (e = t.pendingProps);
      var i = Gn(t, pe.current);
      Wn(t, n), (i = ya(null, t, r, e, i, n));
      var o = va();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), qi(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            da(t),
            (i.updater = Do),
            (t.stateNode = i),
            (i._reactInternals = t),
            cl(t, r, e, n),
            (t = hl(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && oa(t), ge(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Fi(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Sy(r)),
          (e = Ke(r, e)),
          i)
        ) {
          case 0:
            t = dl(null, t, r, e, n);
            break e;
          case 1:
            t = Ju(null, t, r, e, n);
            break e;
          case 11:
            t = Xu(null, t, r, e, n);
            break e;
          case 14:
            t = Zu(null, t, r, Ke(r.type, e), n);
            break e;
        }
        throw Error(S(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        dl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Ju(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((uh(t), e === null)) throw Error(S(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Ad(e, t),
          ro(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = Zn(Error(S(423)), t)), (t = qu(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Zn(Error(S(424)), t)), (t = qu(e, t, r, n, i));
            break e;
          } else
            for (
              Me = At(t.stateNode.containerInfo.firstChild),
                Re = t,
                H = !0,
                Qe = null,
                n = Od(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Qn(), r === i)) {
            t = vt(e, t, n);
            break e;
          }
          ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        zd(t),
        e === null && ll(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        nl(r, i) ? (s = null) : o !== null && nl(r, o) && (t.flags |= 32),
        ah(e, t),
        ge(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && ll(t), null;
    case 13:
      return ch(e, t, n);
    case 4:
      return (
        ha(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Yn(t, null, r, n)) : ge(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Xu(e, t, r, i, n)
      );
    case 7:
      return ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          I(to, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Ze(o.value, s)) {
            if (o.children === i.children && !Ce.current) {
              t = vt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = dt(-1, n & -n)), (a.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (a.next = a)
                          : ((a.next = c.next), (c.next = a)),
                          (u.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      al(o.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(S(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  al(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        ge(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (i = $e(i)),
        (r = r(i)),
        (t.flags |= 1),
        ge(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Ke(r, t.pendingProps)),
        (i = Ke(r.type, i)),
        Zu(e, t, r, i, n)
      );
    case 15:
      return sh(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Ke(r, i)),
        Fi(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), qi(t)) : (e = !1),
        Wn(t, n),
        _d(t, r, i),
        cl(t, r, i, n),
        hl(null, t, r, !0, e, n)
      );
    case 19:
      return fh(e, t, n);
    case 22:
      return lh(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Lh(e, t) {
  return bf(e, t);
}
function wy(e, t, n, r) {
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
function Be(e, t, n, r) {
  return new wy(e, t, n, r);
}
function Da(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Sy(e) {
  if (typeof e == "function") return Da(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Ql)) return 11;
    if (e === Yl) return 14;
  }
  return 2;
}
function Ot(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Be(e.tag, t, e.key, e.mode)),
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
function Ii(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Da(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Cn:
        return cn(n.children, i, o, t);
      case Gl:
        (s = 8), (i |= 8);
        break;
      case js:
        return (
          (e = Be(12, n, t, i | 2)), (e.elementType = js), (e.lanes = o), e
        );
      case _s:
        return (e = Be(13, n, t, i)), (e.elementType = _s), (e.lanes = o), e;
      case Fs:
        return (e = Be(19, n, t, i)), (e.elementType = Fs), (e.lanes = o), e;
      case Ff:
        return No(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case jf:
              s = 10;
              break e;
            case _f:
              s = 9;
              break e;
            case Ql:
              s = 11;
              break e;
            case Yl:
              s = 14;
              break e;
            case Pt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(S(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Be(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function cn(e, t, n, r) {
  return (e = Be(7, e, r, t)), (e.lanes = n), e;
}
function No(e, t, n, r) {
  return (
    (e = Be(22, e, r, t)),
    (e.elementType = Ff),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ys(e, t, n) {
  return (e = Be(6, e, null, t)), (e.lanes = n), e;
}
function vs(e, t, n) {
  return (
    (t = Be(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ky(e, t, n, r, i) {
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
    (this.eventTimes = qo(0)),
    (this.expirationTimes = qo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = qo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Va(e, t, n, r, i, o, s, l, a) {
  return (
    (e = new ky(e, t, n, l, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Be(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    da(o),
    e
  );
}
function Py(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dh(e) {
  if (!e) return $t;
  e = e._reactInternals;
  e: {
    if (yn(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Ld(e, n, t);
  }
  return t;
}
function Vh(e, t, n, r, i, o, s, l, a) {
  return (
    (e = Va(n, r, !0, e, i, o, s, l, a)),
    (e.context = Dh(null)),
    (n = e.current),
    (r = ye()),
    (i = Ft(n)),
    (o = dt(r, i)),
    (o.callback = t ?? null),
    jt(n, o, i),
    (e.current.lanes = i),
    qr(e, i, r),
    Ee(e, r),
    e
  );
}
function Ao(e, t, n, r) {
  var i = t.current,
    o = ye(),
    s = Ft(i);
  return (
    (n = Dh(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = dt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = jt(i, t, s)),
    e !== null && (Xe(e, i, s, o), Ai(e, i, s)),
    s
  );
}
function fo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ac(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ma(e, t) {
  ac(e, t), (e = e.alternate) && ac(e, t);
}
function Cy() {
  return null;
}
var Mh =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ra(e) {
  this._internalRoot = e;
}
jo.prototype.render = Ra.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Ao(e, t, null, null);
};
jo.prototype.unmount = Ra.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      Ao(null, e, null, null);
    }),
      (t[gt] = null);
  }
};
function jo(e) {
  this._internalRoot = e;
}
jo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = sd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Et.length && t !== 0 && t < Et[n].priority; n++);
    Et.splice(n, 0, e), n === 0 && ad(e);
  }
};
function Na(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _o(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function uc() {}
function Ty(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = fo(s);
        o.call(u);
      };
    }
    var s = Vh(t, r, e, 0, null, !1, !1, "", uc);
    return (
      (e._reactRootContainer = s),
      (e[gt] = s.current),
      Ir(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = fo(a);
      l.call(u);
    };
  }
  var a = Va(e, 0, !1, null, null, !1, !1, "", uc);
  return (
    (e._reactRootContainer = a),
    (e[gt] = a.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      Ao(t, a, n, r);
    }),
    a
  );
}
function Fo(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = fo(s);
        l.call(a);
      };
    }
    Ao(t, s, e, i);
  } else s = Ty(n, t, e, i, r);
  return fo(s);
}
id = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = mr(t.pendingLanes);
        n !== 0 &&
          (Jl(t, n | 1), Ee(t, ee()), !(O & 6) && ((Jn = ee() + 500), Qt()));
      }
      break;
    case 13:
      mn(function () {
        var r = yt(e, 1);
        if (r !== null) {
          var i = ye();
          Xe(r, e, 1, i);
        }
      }),
        Ma(e, 1);
  }
};
ql = function (e) {
  if (e.tag === 13) {
    var t = yt(e, 134217728);
    if (t !== null) {
      var n = ye();
      Xe(t, e, 134217728, n);
    }
    Ma(e, 134217728);
  }
};
od = function (e) {
  if (e.tag === 13) {
    var t = Ft(e),
      n = yt(e, t);
    if (n !== null) {
      var r = ye();
      Xe(n, e, t, r);
    }
    Ma(e, t);
  }
};
sd = function () {
  return z;
};
ld = function (e, t) {
  var n = z;
  try {
    return (z = e), t();
  } finally {
    z = n;
  }
};
Gs = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Is(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var i = Eo(r);
            if (!i) throw Error(S(90));
            zf(r), Is(r, i);
          }
        }
      }
      break;
    case "textarea":
      Bf(e, n);
      break;
    case "select":
      (t = n.value), t != null && In(e, !!n.multiple, t, !1);
  }
};
Qf = Ta;
Yf = mn;
var Ey = { usingClientEntryPoint: !1, Events: [ei, Dn, Eo, Kf, Gf, Ta] },
  cr = {
    findFiberByHostInstance: on,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Ly = {
    bundleType: cr.bundleType,
    version: cr.version,
    rendererPackageName: cr.rendererPackageName,
    rendererConfig: cr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: cr.findFiberByHostInstance || Cy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Pi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Pi.isDisabled && Pi.supportsFiber)
    try {
      (ko = Pi.inject(Ly)), (it = Pi);
    } catch {}
}
je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey;
je.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Na(t)) throw Error(S(200));
  return Py(e, t, null, n);
};
je.createRoot = function (e, t) {
  if (!Na(e)) throw Error(S(299));
  var n = !1,
    r = "",
    i = Mh;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Va(e, 1, !1, null, null, n, !1, r, i)),
    (e[gt] = t.current),
    Ir(e.nodeType === 8 ? e.parentNode : e),
    new Ra(t)
  );
};
je.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(S(188))
      : ((e = Object.keys(e).join(",")), Error(S(268, e)));
  return (e = Jf(t)), (e = e === null ? null : e.stateNode), e;
};
je.flushSync = function (e) {
  return mn(e);
};
je.hydrate = function (e, t, n) {
  if (!_o(t)) throw Error(S(200));
  return Fo(null, e, t, !0, n);
};
je.hydrateRoot = function (e, t, n) {
  if (!Na(e)) throw Error(S(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Mh;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Vh(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[gt] = t.current),
    Ir(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new jo(t);
};
je.render = function (e, t, n) {
  if (!_o(t)) throw Error(S(200));
  return Fo(null, e, t, !1, n);
};
je.unmountComponentAtNode = function (e) {
  if (!_o(e)) throw Error(S(40));
  return e._reactRootContainer
    ? (mn(function () {
        Fo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[gt] = null);
        });
      }),
      !0)
    : !1;
};
je.unstable_batchedUpdates = Ta;
je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!_o(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Fo(e, t, n, !1, r);
};
je.version = "18.2.0-next-9e3b772b8-20220608";
function Rh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rh);
    } catch (e) {
      console.error(e);
    }
}
Rh(), (Vf.exports = je);
var Dy = Vf.exports,
  cc = Dy;
(Ns.createRoot = cc.createRoot), (Ns.hydrateRoot = cc.hydrateRoot);
var Nh = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  fc = rt.createContext && rt.createContext(Nh),
  zt =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (zt =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        zt.apply(this, arguments)
      );
    },
  Vy =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
            (n[r[i]] = e[r[i]]);
      return n;
    };
function Ah(e) {
  return (
    e &&
    e.map(function (t, n) {
      return rt.createElement(t.tag, zt({ key: n }, t.attr), Ah(t.child));
    })
  );
}
function Oo(e) {
  return function (t) {
    return rt.createElement(My, zt({ attr: zt({}, e.attr) }, t), Ah(e.child));
  };
}
function My(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = Vy(e, ["attr", "size", "title"]),
      l = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className && (a = (a ? a + " " : "") + e.className),
      rt.createElement(
        "svg",
        zt(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: a,
            style: zt(zt({ color: e.color || n.color }, n.style), e.style),
            height: l,
            width: l,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && rt.createElement("title", null, o),
        e.children
      )
    );
  };
  return fc !== void 0
    ? rt.createElement(fc.Consumer, null, function (n) {
        return t(n);
      })
    : t(Nh);
}
function Ry(e) {
  return Oo({
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
function Ny(e) {
  return Oo({
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
function Ay(e) {
  return Oo({
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
function jy(e) {
  return Oo({
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
const jh = "./assets/brand_logo-01bbce7c.svg",
  _y = [
    { title: "What we do", href: "/" },
    { title: "How it works", href: "/" },
    { title: "Case studies", href: "/" },
    { title: "About", href: "/" },
    { title: "Contact", href: "/" },
  ],
  Fy = "Basketball Championship Registration",
  dc = [
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
  Oy = [
    { title: "University Men" },
    { title: "University Women" },
    { title: "Rotaract Men" },
    { title: "Rotaract Women" },
  ];
function zy() {
  return C.jsxs("div", {
    className:
      "bg-gradient-to-r from-teal-500 to-indigo-800 px-5 py-2 whitespace-nowrap absolute origin-top-right -rotate-90 rounded-tr-2xl rounded-tl-2xl right-0 top-28 -translate-x-[30px] h-[30px] flex flex-row z-20",
    children: [
      C.jsx(Ry, { color: "white" }),
      C.jsx("div", { className: " text-[10px] ml-3 text-white", children: Fy }),
      C.jsx("div", { className: "" }),
    ],
  });
}
const Iy = "./assets/Sport Banner2-1329c407.png";
function By() {
  return C.jsx("div", {
    className: "container px-10  mx-auto",
    children: C.jsxs("div", {
      className: "",
      children: [
        C.jsxs("div", {
          className: "",
          children: [
            C.jsx("h1", {
              className: "text-white font-medium   mt-5 mb-5 text-xl",
              children: "The Bisons League (TBL)",
            }),
            C.jsx("p", {
              className:
                "text-[#D4D5E1] font-light text-[14px]  leading-[30px] w-[90%]",
              children:
                "Get ready to battle it out, as teams vie for the coveted title of the Ultimate Championship of the Year! Whether you're a Rotaract club, a university powerhouse, or a force to be reckoned with, this is your platform to display the finesse that sets you apart.",
            }),
          ],
        }),
        C.jsx("div", {
          className: "scale-115",
          children: C.jsx("img", {
            src: Iy,
            alt: "banner image",
            width: "100%",
          }),
        }),
      ],
    }),
  });
}
const _h = E.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  zo = E.createContext({}),
  Io = E.createContext(null),
  Bo = typeof document < "u",
  Aa = Bo ? E.useLayoutEffect : E.useEffect,
  Fh = E.createContext({ strict: !1 });
function Uy(e, t, n, r) {
  const { visualElement: i } = E.useContext(zo),
    o = E.useContext(Fh),
    s = E.useContext(Io),
    l = E.useContext(_h).reducedMotion,
    a = E.useRef();
  (r = r || o.renderer),
    !a.current &&
      r &&
      (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: l,
      }));
  const u = a.current;
  E.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = E.useRef(!!window.HandoffAppearAnimations);
  return (
    Aa(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    E.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        (window.HandoffAppearAnimations = void 0),
        (c.current = !1));
    }),
    u
  );
}
function _n(e) {
  return (
    typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function $y(e, t, n) {
  return E.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : _n(n) && (n.current = r));
    },
    [t]
  );
}
function Yr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Uo(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const ja = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  _a = ["initial", ...ja];
function $o(e) {
  return Uo(e.animate) || _a.some((t) => Yr(e[t]));
}
function Oh(e) {
  return !!($o(e) || e.variants);
}
function Wy(e, t) {
  if ($o(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Yr(n) ? n : void 0,
      animate: Yr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Hy(e) {
  const { initial: t, animate: n } = Wy(e, E.useContext(zo));
  return E.useMemo(() => ({ initial: t, animate: n }), [hc(t), hc(n)]);
}
function hc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const pc = {
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
  Xr = {};
for (const e in pc) Xr[e] = { isEnabled: (t) => pc[e].some((n) => !!t[n]) };
function Ky(e) {
  for (const t in e) Xr[t] = { ...Xr[t], ...e[t] };
}
const Fa = E.createContext({}),
  zh = E.createContext({}),
  Gy = Symbol.for("motionComponentSymbol");
function Qy({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && Ky(e);
  function o(l, a) {
    let u;
    const c = { ...E.useContext(_h), ...l, layoutId: Yy(l) },
      { isStatic: f } = c,
      d = Hy(l),
      m = r(l, f);
    if (!f && Bo) {
      d.visualElement = Uy(i, m, c, t);
      const y = E.useContext(zh),
        v = E.useContext(Fh).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(c, v, e, y));
    }
    return E.createElement(
      zo.Provider,
      { value: d },
      u && d.visualElement
        ? E.createElement(u, { visualElement: d.visualElement, ...c })
        : null,
      n(i, l, $y(m, d.visualElement, a), m, f, d.visualElement)
    );
  }
  const s = E.forwardRef(o);
  return (s[Gy] = i), s;
}
function Yy({ layoutId: e }) {
  const t = E.useContext(Fa).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Xy(e) {
  function t(r, i = {}) {
    return Qy(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const Zy = [
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
function Oa(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(Zy.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const ho = {};
function Jy(e) {
  Object.assign(ho, e);
}
const ni = [
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
  vn = new Set(ni);
function Ih(e, { layout: t, layoutId: n }) {
  return (
    vn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!ho[e] || e === "opacity"))
  );
}
const Le = (e) => !!(e && e.getVelocity),
  qy = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  by = ni.length;
function e0(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < by; s++) {
    const l = ni[s];
    if (e[l] !== void 0) {
      const a = qy[l] || l;
      o += `${a}(${e[l]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const Bh = (e) => (t) => typeof t == "string" && t.startsWith(e),
  Uh = Bh("--"),
  Tl = Bh("var(--"),
  t0 =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  n0 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Wt = (e, t, n) => Math.min(Math.max(n, e), t),
  xn = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Lr = { ...xn, transform: (e) => Wt(0, 1, e) },
  Ci = { ...xn, default: 1 },
  Dr = (e) => Math.round(e * 1e5) / 1e5,
  Wo = /(-)?([\d]*\.?[\d])+/g,
  $h =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  r0 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ri(e) {
  return typeof e == "string";
}
const ii = (e) => ({
    test: (t) => ri(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  kt = ii("deg"),
  st = ii("%"),
  M = ii("px"),
  i0 = ii("vh"),
  o0 = ii("vw"),
  mc = {
    ...st,
    parse: (e) => st.parse(e) / 100,
    transform: (e) => st.transform(e * 100),
  },
  gc = { ...xn, transform: Math.round },
  Wh = {
    borderWidth: M,
    borderTopWidth: M,
    borderRightWidth: M,
    borderBottomWidth: M,
    borderLeftWidth: M,
    borderRadius: M,
    radius: M,
    borderTopLeftRadius: M,
    borderTopRightRadius: M,
    borderBottomRightRadius: M,
    borderBottomLeftRadius: M,
    width: M,
    maxWidth: M,
    height: M,
    maxHeight: M,
    size: M,
    top: M,
    right: M,
    bottom: M,
    left: M,
    padding: M,
    paddingTop: M,
    paddingRight: M,
    paddingBottom: M,
    paddingLeft: M,
    margin: M,
    marginTop: M,
    marginRight: M,
    marginBottom: M,
    marginLeft: M,
    rotate: kt,
    rotateX: kt,
    rotateY: kt,
    rotateZ: kt,
    scale: Ci,
    scaleX: Ci,
    scaleY: Ci,
    scaleZ: Ci,
    skew: kt,
    skewX: kt,
    skewY: kt,
    distance: M,
    translateX: M,
    translateY: M,
    translateZ: M,
    x: M,
    y: M,
    z: M,
    perspective: M,
    transformPerspective: M,
    opacity: Lr,
    originX: mc,
    originY: mc,
    originZ: M,
    zIndex: gc,
    fillOpacity: Lr,
    strokeOpacity: Lr,
    numOctaves: gc,
  };
function za(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: l } = e;
  let a = !1,
    u = !1,
    c = !0;
  for (const f in t) {
    const d = t[f];
    if (Uh(f)) {
      o[f] = d;
      continue;
    }
    const m = Wh[f],
      y = n0(d, m);
    if (vn.has(f)) {
      if (((a = !0), (s[f] = y), !c)) continue;
      d !== (m.default || 0) && (c = !1);
    } else f.startsWith("origin") ? ((u = !0), (l[f] = y)) : (i[f] = y);
  }
  if (
    (t.transform ||
      (a || r
        ? (i.transform = e0(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: f = "50%", originY: d = "50%", originZ: m = 0 } = l;
    i.transformOrigin = `${f} ${d} ${m}`;
  }
}
const Ia = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Hh(e, t, n) {
  for (const r in t) !Le(t[r]) && !Ih(r, n) && (e[r] = t[r]);
}
function s0({ transformTemplate: e }, t, n) {
  return E.useMemo(() => {
    const r = Ia();
    return (
      za(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function l0(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Hh(i, r, e),
    Object.assign(i, s0(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function a0(e, t, n) {
  const r = {},
    i = l0(e, t, n);
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
const u0 = new Set([
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
function po(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    u0.has(e)
  );
}
let Kh = (e) => !po(e);
function c0(e) {
  e && (Kh = (t) => (t.startsWith("on") ? !po(t) : e(t)));
}
try {
  c0(require("@emotion/is-prop-valid").default);
} catch {}
function f0(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((Kh(i) ||
        (n === !0 && po(i)) ||
        (!t && !po(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function yc(e, t, n) {
  return typeof e == "string" ? e : M.transform(t + n * e);
}
function d0(e, t, n) {
  const r = yc(t, e.x, e.width),
    i = yc(n, e.y, e.height);
  return `${r} ${i}`;
}
const h0 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  p0 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function m0(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? h0 : p0;
  e[o.offset] = M.transform(-r);
  const s = M.transform(t),
    l = M.transform(n);
  e[o.array] = `${s} ${l}`;
}
function Ba(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: l = 1,
    pathOffset: a = 0,
    ...u
  },
  c,
  f,
  d
) {
  if ((za(e, u, c, d), f)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: y, dimensions: v } = e;
  m.transform && (v && (y.transform = m.transform), delete m.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = d0(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    s !== void 0 && m0(m, s, l, a, !1);
}
const Gh = () => ({ ...Ia(), attrs: {} }),
  Ua = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function g0(e, t, n, r) {
  const i = E.useMemo(() => {
    const o = Gh();
    return (
      Ba(o, t, { enableHardwareAcceleration: !1 }, Ua(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Hh(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function y0(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const a = (Oa(n) ? g0 : a0)(r, o, s, n),
      c = { ...f0(r, typeof n == "string", e), ...a, ref: i },
      { children: f } = r,
      d = E.useMemo(() => (Le(f) ? f.get() : f), [f]);
    return E.createElement(n, { ...c, children: d });
  };
}
const $a = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Qh(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Yh = new Set([
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
function Xh(e, t, n, r) {
  Qh(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Yh.has(i) ? i : $a(i), t.attrs[i]);
}
function Wa(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Le(n[i]) || (t.style && Le(t.style[i])) || Ih(i, e)) && (r[i] = n[i]);
  return r;
}
function Zh(e, t) {
  const n = Wa(e, t);
  for (const r in e)
    if (Le(e[r]) || Le(t[r])) {
      const i =
        ni.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Ha(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Jh(e) {
  const t = E.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const mo = (e) => Array.isArray(e),
  v0 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  x0 = (e) => (mo(e) ? e[e.length - 1] || 0 : e);
function Bi(e) {
  const t = Le(e) ? e.get() : e;
  return v0(t) ? t.toValue() : t;
}
function w0(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: S0(r, i, o, e), renderState: t() };
  return n && (s.mount = (l) => n(r, l, s)), s;
}
const qh = (e) => (t, n) => {
  const r = E.useContext(zo),
    i = E.useContext(Io),
    o = () => w0(e, t, r, i);
  return n ? o() : Jh(o);
};
function S0(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = Bi(o[d]);
  let { initial: s, animate: l } = e;
  const a = $o(e),
    u = Oh(e);
  t &&
    u &&
    !a &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), l === void 0 && (l = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const f = c ? l : s;
  return (
    f &&
      typeof f != "boolean" &&
      !Uo(f) &&
      (Array.isArray(f) ? f : [f]).forEach((m) => {
        const y = Ha(e, m);
        if (!y) return;
        const { transitionEnd: v, transition: L, ...g } = y;
        for (const h in g) {
          let p = g[h];
          if (Array.isArray(p)) {
            const x = c ? p.length - 1 : 0;
            p = p[x];
          }
          p !== null && (i[h] = p);
        }
        for (const h in v) i[h] = v[h];
      }),
    i
  );
}
const Z = (e) => e;
class vc {
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
function k0(e) {
  let t = new vc(),
    n = new vc(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    l = {
      schedule: (a, u = !1, c = !1) => {
        const f = c && i,
          d = f ? t : n;
        return u && s.add(a), d.add(a) && f && i && (r = t.order.length), a;
      },
      cancel: (a) => {
        n.remove(a), s.delete(a);
      },
      process: (a) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(a), s.has(c) && (l.schedule(c), e());
          }
        (i = !1), o && ((o = !1), l.process(a));
      },
    };
  return l;
}
const Ti = ["prepare", "read", "update", "preRender", "render", "postRender"],
  P0 = 40;
function C0(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Ti.reduce((f, d) => ((f[d] = k0(() => (n = !0))), f), {}),
    s = (f) => o[f].process(i),
    l = () => {
      const f = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(f - i.timestamp, P0), 1)),
        (i.timestamp = f),
        (i.isProcessing = !0),
        Ti.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(l));
    },
    a = () => {
      (n = !0), (r = !0), i.isProcessing || e(l);
    };
  return {
    schedule: Ti.reduce((f, d) => {
      const m = o[d];
      return (f[d] = (y, v = !1, L = !1) => (n || a(), m.schedule(y, v, L))), f;
    }, {}),
    cancel: (f) => Ti.forEach((d) => o[d].cancel(f)),
    state: i,
    steps: o,
  };
}
const {
    schedule: B,
    cancel: xt,
    state: oe,
    steps: xs,
  } = C0(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Z, !0),
  T0 = {
    useVisualState: qh({
      scrapeMotionValuesFromProps: Zh,
      createRenderState: Gh,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        B.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          B.render(() => {
            Ba(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Ua(t.tagName),
              e.transformTemplate
            ),
              Xh(t, n);
          });
      },
    }),
  },
  E0 = {
    useVisualState: qh({
      scrapeMotionValuesFromProps: Wa,
      createRenderState: Ia,
    }),
  };
function L0(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(Oa(e) ? T0 : E0),
    preloadedFeatures: n,
    useRender: y0(t),
    createVisualElement: r,
    Component: e,
  };
}
function ft(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const bh = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ho(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const D0 = (e) => (t) => bh(t) && e(t, Ho(t));
function ht(e, t, n, r) {
  return ft(e, t, D0(n), r);
}
const V0 = (e, t) => (n) => t(e(n)),
  It = (...e) => e.reduce(V0);
function ep(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const xc = ep("dragHorizontal"),
  wc = ep("dragVertical");
function tp(e) {
  let t = !1;
  if (e === "y") t = wc();
  else if (e === "x") t = xc();
  else {
    const n = xc(),
      r = wc();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function np() {
  const e = tp(!0);
  return e ? (e(), !1) : !0;
}
class Yt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Sc(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.type === "touch" || np()) return;
      const l = e.getProps();
      e.animationState &&
        l.whileHover &&
        e.animationState.setActive("whileHover", t),
        l[r] && B.update(() => l[r](o, s));
    };
  return ht(e.current, n, i, { passive: !e.getProps()[r] });
}
class M0 extends Yt {
  mount() {
    this.unmount = It(Sc(this.node, !0), Sc(this.node, !1));
  }
  unmount() {}
}
class R0 extends Yt {
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
    this.unmount = It(
      ft(this.node.current, "focus", () => this.onFocus()),
      ft(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const rp = (e, t) => (t ? (e === t ? !0 : rp(e, t.parentElement)) : !1);
function ws(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ho(n));
}
class N0 extends Yt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Z),
      (this.removeEndListeners = Z),
      (this.removeAccessibleListeners = Z),
      (this.startPointerPress = (t, n) => {
        if ((this.removeEndListeners(), this.isPressing)) return;
        const r = this.node.getProps(),
          o = ht(
            window,
            "pointerup",
            (l, a) => {
              if (!this.checkPressEnd()) return;
              const { onTap: u, onTapCancel: c } = this.node.getProps();
              B.update(() => {
                rp(this.node.current, l.target) ? u && u(l, a) : c && c(l, a);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = ht(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = It(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (l) => {
              l.key !== "Enter" ||
                !this.checkPressEnd() ||
                ws("up", (a, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && B.update(() => c(a, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ft(this.node.current, "keyup", s)),
              ws("down", (l, a) => {
                this.startPress(l, a);
              });
          },
          n = ft(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ws("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = ft(this.node.current, "blur", r);
        this.removeAccessibleListeners = It(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && B.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !np()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && B.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = ht(this.node.current, "pointerdown", this.startPointerPress, {
        passive: !(t.onTapStart || t.onPointerStart),
      }),
      r = ft(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = It(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const El = new WeakMap(),
  Ss = new WeakMap(),
  A0 = (e) => {
    const t = El.get(e.target);
    t && t(e);
  },
  j0 = (e) => {
    e.forEach(A0);
  };
function _0({ root: e, ...t }) {
  const n = e || document;
  Ss.has(n) || Ss.set(n, {});
  const r = Ss.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(j0, { root: e, ...t })), r[i];
}
function F0(e, t, n) {
  const r = _0(t);
  return (
    El.set(e, n),
    r.observe(e),
    () => {
      El.delete(e), r.unobserve(e);
    }
  );
}
const O0 = { some: 0, all: 1 };
class z0 extends Yt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : O0[i],
      },
      l = (a) => {
        const { isIntersecting: u } = a;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: f } = this.node.getProps(),
          d = u ? c : f;
        d && d(a);
      };
    return F0(this.node.current, s, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(I0(t, n)) && this.startObserver();
  }
  unmount() {}
}
function I0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const B0 = {
  inView: { Feature: z0 },
  tap: { Feature: N0 },
  focus: { Feature: R0 },
  hover: { Feature: M0 },
};
function ip(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function U0(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function $0(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Ko(e, t, n) {
  const r = e.getProps();
  return Ha(r, t, n !== void 0 ? n : r.custom, U0(e), $0(e));
}
const W0 = "framerAppearId",
  H0 = "data-" + $a(W0);
let K0 = Z,
  Ka = Z;
const Bt = (e) => e * 1e3,
  pt = (e) => e / 1e3,
  G0 = { current: !1 },
  op = (e) => Array.isArray(e) && typeof e[0] == "number";
function sp(e) {
  return !!(
    !e ||
    (typeof e == "string" && lp[e]) ||
    op(e) ||
    (Array.isArray(e) && e.every(sp))
  );
}
const yr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  lp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yr([0, 0.65, 0.55, 1]),
    circOut: yr([0.55, 0, 1, 0.45]),
    backIn: yr([0.31, 0.01, 0.66, -0.59]),
    backOut: yr([0.33, 1.53, 0.69, 0.99]),
  };
function ap(e) {
  if (e) return op(e) ? yr(e) : Array.isArray(e) ? e.map(ap) : lp[e];
}
function Q0(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: l,
    times: a,
  } = {}
) {
  const u = { [t]: n };
  a && (u.offset = a);
  const c = ap(l);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Y0(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const up = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  X0 = 1e-7,
  Z0 = 12;
function J0(e, t, n, r, i) {
  let o,
    s,
    l = 0;
  do (s = t + (n - t) / 2), (o = up(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > X0 && ++l < Z0);
  return s;
}
function oi(e, t, n, r) {
  if (e === t && n === r) return Z;
  const i = (o) => J0(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : up(i(o), t, r));
}
const q0 = oi(0.42, 0, 1, 1),
  b0 = oi(0, 0, 0.58, 1),
  cp = oi(0.42, 0, 0.58, 1),
  ev = (e) => Array.isArray(e) && typeof e[0] != "number",
  fp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  dp = (e) => (t) => 1 - e(1 - t),
  hp = (e) => 1 - Math.sin(Math.acos(e)),
  Ga = dp(hp),
  tv = fp(Ga),
  pp = oi(0.33, 1.53, 0.69, 0.99),
  Qa = dp(pp),
  nv = fp(Qa),
  rv = (e) =>
    (e *= 2) < 1 ? 0.5 * Qa(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  iv = {
    linear: Z,
    easeIn: q0,
    easeInOut: cp,
    easeOut: b0,
    circIn: hp,
    circInOut: tv,
    circOut: Ga,
    backIn: Qa,
    backInOut: nv,
    backOut: pp,
    anticipate: rv,
  },
  kc = (e) => {
    if (Array.isArray(e)) {
      Ka(e.length === 4);
      const [t, n, r, i] = e;
      return oi(t, n, r, i);
    } else if (typeof e == "string") return iv[e];
    return e;
  },
  Ya = (e, t) => (n) =>
    !!(
      (ri(n) && r0.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  mp = (e, t, n) => (r) => {
    if (!ri(r)) return r;
    const [i, o, s, l] = r.match(Wo);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: l !== void 0 ? parseFloat(l) : 1,
    };
  },
  ov = (e) => Wt(0, 255, e),
  ks = { ...xn, transform: (e) => Math.round(ov(e)) },
  an = {
    test: Ya("rgb", "red"),
    parse: mp("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      ks.transform(e) +
      ", " +
      ks.transform(t) +
      ", " +
      ks.transform(n) +
      ", " +
      Dr(Lr.transform(r)) +
      ")",
  };
function sv(e) {
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
const Ll = { test: Ya("#"), parse: sv, transform: an.transform },
  Fn = {
    test: Ya("hsl", "hue"),
    parse: mp("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      st.transform(Dr(t)) +
      ", " +
      st.transform(Dr(n)) +
      ", " +
      Dr(Lr.transform(r)) +
      ")",
  },
  me = {
    test: (e) => an.test(e) || Ll.test(e) || Fn.test(e),
    parse: (e) =>
      an.test(e) ? an.parse(e) : Fn.test(e) ? Fn.parse(e) : Ll.parse(e),
    transform: (e) =>
      ri(e) ? e : e.hasOwnProperty("red") ? an.transform(e) : Fn.transform(e),
  },
  G = (e, t, n) => -n * e + n * t + e;
function Ps(e, t, n) {
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
function lv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t,
      a = 2 * n - l;
    (i = Ps(a, l, e + 1 / 3)), (o = Ps(a, l, e)), (s = Ps(a, l, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Cs = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  av = [Ll, an, Fn],
  uv = (e) => av.find((t) => t.test(e));
function Pc(e) {
  const t = uv(e);
  let n = t.parse(e);
  return t === Fn && (n = lv(n)), n;
}
const gp = (e, t) => {
  const n = Pc(e),
    r = Pc(t),
    i = { ...n };
  return (o) => (
    (i.red = Cs(n.red, r.red, o)),
    (i.green = Cs(n.green, r.green, o)),
    (i.blue = Cs(n.blue, r.blue, o)),
    (i.alpha = G(n.alpha, r.alpha, o)),
    an.transform(i)
  );
};
function cv(e) {
  var t, n;
  return (
    isNaN(e) &&
    ri(e) &&
    (((t = e.match(Wo)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match($h)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const yp = { regex: t0, countKey: "Vars", token: "${v}", parse: Z },
  vp = { regex: $h, countKey: "Colors", token: "${c}", parse: me.parse },
  xp = { regex: Wo, countKey: "Numbers", token: "${n}", parse: xn.parse };
function Ts(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function go(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && Ts(n, yp), Ts(n, vp), Ts(n, xp), n;
}
function wp(e) {
  return go(e).values;
}
function Sp(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = go(e),
    o = t.length;
  return (s) => {
    let l = i;
    for (let a = 0; a < o; a++)
      a < r
        ? (l = l.replace(yp.token, s[a]))
        : a < r + n
        ? (l = l.replace(vp.token, me.transform(s[a])))
        : (l = l.replace(xp.token, Dr(s[a])));
    return l;
  };
}
const fv = (e) => (typeof e == "number" ? 0 : e);
function dv(e) {
  const t = wp(e);
  return Sp(e)(t.map(fv));
}
const Ht = {
    test: cv,
    parse: wp,
    createTransformer: Sp,
    getAnimatableNone: dv,
  },
  kp = (e, t) => (n) => `${n > 0 ? t : e}`;
function Pp(e, t) {
  return typeof e == "number"
    ? (n) => G(e, t, n)
    : me.test(e)
    ? gp(e, t)
    : e.startsWith("var(")
    ? kp(e, t)
    : Tp(e, t);
}
const Cp = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => Pp(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  hv = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = Pp(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  Tp = (e, t) => {
    const n = Ht.createTransformer(t),
      r = go(e),
      i = go(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? It(Cp(r.values, i.values), n)
      : kp(e, t);
  },
  Zr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Cc = (e, t) => (n) => G(e, t, n);
function pv(e) {
  return typeof e == "number"
    ? Cc
    : typeof e == "string"
    ? me.test(e)
      ? gp
      : Tp
    : Array.isArray(e)
    ? Cp
    : typeof e == "object"
    ? hv
    : Cc;
}
function mv(e, t, n) {
  const r = [],
    i = n || pv(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let l = i(e[s], e[s + 1]);
    if (t) {
      const a = Array.isArray(t) ? t[s] || Z : t;
      l = It(a, l);
    }
    r.push(l);
  }
  return r;
}
function Ep(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((Ka(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = mv(t, r, i),
    l = s.length,
    a = (u) => {
      let c = 0;
      if (l > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const f = Zr(e[c], e[c + 1], u);
      return s[c](f);
    };
  return n ? (u) => a(Wt(e[0], e[o - 1], u)) : a;
}
function gv(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Zr(0, t, r);
    e.push(G(n, 1, i));
  }
}
function yv(e) {
  const t = [0];
  return gv(t, e.length - 1), t;
}
function vv(e, t) {
  return e.map((n) => n * t);
}
function xv(e, t) {
  return e.map(() => t || cp).splice(0, e.length - 1);
}
function yo({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = ev(r) ? r.map(kc) : kc(r),
    o = { done: !1, value: t[0] },
    s = vv(n && n.length === t.length ? n : yv(t), e),
    l = Ep(s, t, { ease: Array.isArray(i) ? i : xv(t, i) });
  return {
    calculatedDuration: e,
    next: (a) => ((o.value = l(a)), (o.done = a >= e), o),
  };
}
function Lp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const wv = 5;
function Dp(e, t, n) {
  const r = Math.max(t - wv, 0);
  return Lp(n - e(r), t - r);
}
const Es = 0.001,
  Sv = 0.01,
  Tc = 10,
  kv = 0.05,
  Pv = 1;
function Cv({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  K0(e <= Bt(Tc));
  let s = 1 - t;
  (s = Wt(kv, Pv, s)),
    (e = Wt(Sv, Tc, pt(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            f = c * e,
            d = c - n,
            m = Dl(u, s),
            y = Math.exp(-f);
          return Es - (d / m) * y;
        }),
        (o = (u) => {
          const f = u * s * e,
            d = f * n + n,
            m = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-f),
            v = Dl(Math.pow(u, 2), s);
          return ((-i(u) + Es > 0 ? -1 : 1) * ((d - m) * y)) / v;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            f = (u - n) * e + 1;
          return -Es + c * f;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            f = (n - u) * (e * e);
          return c * f;
        }));
  const l = 5 / e,
    a = Ev(i, o, l);
  if (((e = Bt(e)), isNaN(a)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(a, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const Tv = 12;
function Ev(e, t, n) {
  let r = n;
  for (let i = 1; i < Tv; i++) r = r - e(r) / t(r);
  return r;
}
function Dl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Lv = ["duration", "bounce"],
  Dv = ["stiffness", "damping", "mass"];
function Ec(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Vv(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Ec(e, Dv) && Ec(e, Lv)) {
    const n = Cv(e);
    (t = { ...t, ...n, velocity: 0, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function Vp({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: l,
      damping: a,
      mass: u,
      velocity: c,
      duration: f,
      isResolvedFromDuration: d,
    } = Vv(r),
    m = c ? -pt(c) : 0,
    y = a / (2 * Math.sqrt(l * u)),
    v = o - i,
    L = pt(Math.sqrt(l / u)),
    g = Math.abs(v) < 5;
  n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5);
  let h;
  if (y < 1) {
    const p = Dl(L, y);
    h = (x) => {
      const w = Math.exp(-y * L * x);
      return (
        o - w * (((m + y * L * v) / p) * Math.sin(p * x) + v * Math.cos(p * x))
      );
    };
  } else if (y === 1) h = (p) => o - Math.exp(-L * p) * (v + (m + L * v) * p);
  else {
    const p = L * Math.sqrt(y * y - 1);
    h = (x) => {
      const w = Math.exp(-y * L * x),
        T = Math.min(p * x, 300);
      return (
        o - (w * ((m + y * L * v) * Math.sinh(T) + p * v * Math.cosh(T))) / p
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (p) => {
      const x = h(p);
      if (d) s.done = p >= f;
      else {
        let w = m;
        p !== 0 && (y < 1 ? (w = Dp(h, p, x)) : (w = 0));
        const T = Math.abs(w) <= n,
          P = Math.abs(o - x) <= t;
        s.done = T && P;
      }
      return (s.value = s.done ? o : x), s;
    },
  };
}
function Lc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: l,
  max: a,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const f = e[0],
    d = { done: !1, value: f },
    m = (k) => (l !== void 0 && k < l) || (a !== void 0 && k > a),
    y = (k) =>
      l === void 0
        ? a
        : a === void 0 || Math.abs(l - k) < Math.abs(a - k)
        ? l
        : a;
  let v = n * t;
  const L = f + v,
    g = s === void 0 ? L : s(L);
  g !== L && (v = g - f);
  const h = (k) => -v * Math.exp(-k / r),
    p = (k) => g + h(k),
    x = (k) => {
      const R = h(k),
        N = p(k);
      (d.done = Math.abs(R) <= u), (d.value = d.done ? g : N);
    };
  let w, T;
  const P = (k) => {
    m(d.value) &&
      ((w = k),
      (T = Vp({
        keyframes: [d.value, y(d.value)],
        velocity: Dp(p, k, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (k) => {
        let R = !1;
        return (
          !T && w === void 0 && ((R = !0), x(k), P(k)),
          w !== void 0 && k > w ? T.next(k - w) : (!R && x(k), d)
        );
      },
    }
  );
}
const Mv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => B.update(t, !0),
      stop: () => xt(t),
      now: () => (oe.isProcessing ? oe.timestamp : performance.now()),
    };
  },
  Dc = 2e4;
function Vc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Dc; ) (t += n), (r = e.next(t));
  return t >= Dc ? 1 / 0 : t;
}
const Rv = { decay: Lc, inertia: Lc, tween: yo, keyframes: yo, spring: Vp };
function vo({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = Mv,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: l = "loop",
  onPlay: a,
  onStop: u,
  onComplete: c,
  onUpdate: f,
  ...d
}) {
  let m = 1,
    y = !1,
    v,
    L;
  const g = () => {
    L = new Promise((A) => {
      v = A;
    });
  };
  g();
  let h;
  const p = Rv[i] || yo;
  let x;
  p !== yo &&
    typeof r[0] != "number" &&
    ((x = Ep([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const w = p({ ...d, keyframes: r });
  let T;
  l === "mirror" &&
    (T = p({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let P = "idle",
    k = null,
    R = null,
    N = null;
  w.calculatedDuration === null && o && (w.calculatedDuration = Vc(w));
  const { calculatedDuration: J } = w;
  let we = 1 / 0,
    Se = 1 / 0;
  J !== null && ((we = J + s), (Se = we * (o + 1) - s));
  let q = 0;
  const b = (A) => {
      if (R === null) return;
      m > 0 && (R = Math.min(R, A)),
        m < 0 && (R = Math.min(A - Se / m, R)),
        k !== null ? (q = k) : (q = Math.round(A - R) * m);
      const W = q - t * (m >= 0 ? 1 : -1),
        Xt = m >= 0 ? W < 0 : W > Se;
      (q = Math.max(W, 0)), P === "finished" && k === null && (q = Se);
      let qe = q,
        wn = w;
      if (o) {
        const Go = q / we;
        let si = Math.floor(Go),
          Jt = Go % 1;
        !Jt && Go >= 1 && (Jt = 1),
          Jt === 1 && si--,
          (si = Math.min(si, o + 1));
        const eu = !!(si % 2);
        eu &&
          (l === "reverse"
            ? ((Jt = 1 - Jt), s && (Jt -= s / we))
            : l === "mirror" && (wn = T));
        let tu = Wt(0, 1, Jt);
        q > Se && (tu = l === "reverse" && eu ? 1 : 0), (qe = tu * we);
      }
      const De = Xt ? { done: !1, value: r[0] } : wn.next(qe);
      x && (De.value = x(De.value));
      let { done: Zt } = De;
      !Xt && J !== null && (Zt = m >= 0 ? q >= Se : q <= 0);
      const nm = k === null && (P === "finished" || (P === "running" && Zt));
      return f && f(De.value), nm && D(), De;
    },
    Fe = () => {
      h && h.stop(), (h = void 0);
    },
    Je = () => {
      (P = "idle"), Fe(), v(), g(), (R = N = null);
    },
    D = () => {
      (P = "finished"), c && c(), Fe(), v();
    },
    j = () => {
      if (y) return;
      h || (h = n(b));
      const A = h.now();
      a && a(),
        k !== null ? (R = A - k) : (!R || P === "finished") && (R = A),
        P === "finished" && g(),
        (N = R),
        (k = null),
        (P = "running"),
        h.start();
    };
  e && j();
  const _ = {
    then(A, W) {
      return L.then(A, W);
    },
    get time() {
      return pt(q);
    },
    set time(A) {
      (A = Bt(A)),
        (q = A),
        k !== null || !h || m === 0 ? (k = A) : (R = h.now() - A / m);
    },
    get duration() {
      const A = w.calculatedDuration === null ? Vc(w) : w.calculatedDuration;
      return pt(A);
    },
    get speed() {
      return m;
    },
    set speed(A) {
      A === m || !h || ((m = A), (_.time = pt(q)));
    },
    get state() {
      return P;
    },
    play: j,
    pause: () => {
      (P = "paused"), (k = q);
    },
    stop: () => {
      (y = !0), P !== "idle" && ((P = "idle"), u && u(), Je());
    },
    cancel: () => {
      N !== null && b(N), Je();
    },
    complete: () => {
      P = "finished";
    },
    sample: (A) => ((R = 0), b(A)),
  };
  return _;
}
function Nv(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Av = Nv(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  jv = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Ei = 10,
  _v = 2e4,
  Fv = (e, t) => t.type === "spring" || e === "backgroundColor" || !sp(t.ease);
function Ov(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      Av() &&
      jv.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    l,
    a;
  const u = () => {
    a = new Promise((h) => {
      l = h;
    });
  };
  u();
  let { keyframes: c, duration: f = 300, ease: d, times: m } = i;
  if (Fv(t, i)) {
    const h = vo({ ...i, repeat: 0, delay: 0 });
    let p = { done: !1, value: c[0] };
    const x = [];
    let w = 0;
    for (; !p.done && w < _v; ) (p = h.sample(w)), x.push(p.value), (w += Ei);
    (m = void 0), (c = x), (f = w - Ei), (d = "linear");
  }
  const y = Q0(e.owner.current, t, c, { ...i, duration: f, ease: d, times: m });
  i.syncStart &&
    (y.startTime = oe.isProcessing
      ? oe.timestamp
      : document.timeline
      ? document.timeline.currentTime
      : performance.now());
  const v = () => y.cancel(),
    L = () => {
      B.update(v), l(), u();
    };
  return (
    (y.onfinish = () => {
      e.set(Y0(c, i)), r && r(), L();
    }),
    {
      then(h, p) {
        return a.then(h, p);
      },
      attachTimeline(h) {
        return (y.timeline = h), (y.onfinish = null), Z;
      },
      get time() {
        return pt(y.currentTime || 0);
      },
      set time(h) {
        y.currentTime = Bt(h);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(h) {
        y.playbackRate = h;
      },
      get duration() {
        return pt(f);
      },
      play: () => {
        s || (y.play(), xt(v));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: h } = y;
        if (h) {
          const p = vo({ ...i, autoplay: !1 });
          e.setWithVelocity(p.sample(h - Ei).value, p.sample(h).value, Ei);
        }
        L();
      },
      complete: () => y.finish(),
      cancel: L,
    }
  );
}
function zv({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Z,
      pause: Z,
      stop: Z,
      then: (o) => (o(), Promise.resolve()),
      cancel: Z,
      complete: Z,
    }
  );
  return t
    ? vo({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const Iv = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  Bv = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Uv = { type: "keyframes", duration: 0.8 },
  $v = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  Wv = (e, { keyframes: t }) =>
    t.length > 2
      ? Uv
      : vn.has(e)
      ? e.startsWith("scale")
        ? Bv(t[1])
        : Iv
      : $v,
  Vl = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Ht.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Hv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Kv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Wo) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = Hv.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const Gv = /([a-z-]*)\(.*?\)/g,
  Ml = {
    ...Ht,
    getAnimatableNone: (e) => {
      const t = e.match(Gv);
      return t ? t.map(Kv).join(" ") : e;
    },
  },
  Qv = {
    ...Wh,
    color: me,
    backgroundColor: me,
    outlineColor: me,
    fill: me,
    stroke: me,
    borderColor: me,
    borderTopColor: me,
    borderRightColor: me,
    borderBottomColor: me,
    borderLeftColor: me,
    filter: Ml,
    WebkitFilter: Ml,
  },
  Xa = (e) => Qv[e];
function Mp(e, t) {
  let n = Xa(e);
  return (
    n !== Ml && (n = Ht), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const Rp = (e) => /^0[^.\s]+$/.test(e);
function Yv(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || Rp(e);
}
function Xv(e, t, n, r) {
  const i = Vl(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let l;
  const a = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      Yv(o[u]) && a.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (l = o[u]);
  if (i && a.length && l)
    for (let u = 0; u < a.length; u++) {
      const c = a[u];
      o[c] = Mp(t, l);
    }
  return o;
}
function Zv({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: l,
  from: a,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Np(e, t) {
  return e[t] || e.default || e;
}
const Za =
  (e, t, n, r = {}) =>
  (i) => {
    const o = Np(r, e) || {},
      s = o.delay || r.delay || 0;
    let { elapsed: l = 0 } = r;
    l = l - Bt(s);
    const a = Xv(t, e, n, o),
      u = a[0],
      c = a[a.length - 1],
      f = Vl(e, u),
      d = Vl(e, c);
    let m = {
      keyframes: a,
      velocity: t.getVelocity(),
      ease: "easeOut",
      ...o,
      delay: -l,
      onUpdate: (y) => {
        t.set(y), o.onUpdate && o.onUpdate(y);
      },
      onComplete: () => {
        i(), o.onComplete && o.onComplete();
      },
    };
    if (
      (Zv(o) || (m = { ...m, ...Wv(e, m) }),
      m.duration && (m.duration = Bt(m.duration)),
      m.repeatDelay && (m.repeatDelay = Bt(m.repeatDelay)),
      !f || !d || G0.current || o.type === !1)
    )
      return zv(m);
    if (
      t.owner &&
      t.owner.current instanceof HTMLElement &&
      !t.owner.getProps().onUpdate
    ) {
      const y = Ov(t, e, m);
      if (y) return y;
    }
    return vo(m);
  };
function xo(e) {
  return !!(Le(e) && e.add);
}
const Ap = (e) => /^\-?\d*\.?\d+$/.test(e);
function Ja(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function qa(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class ba {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ja(this.subscriptions, t), () => qa(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Jv = (e) => !isNaN(parseFloat(e));
class qv {
  constructor(t, n = {}) {
    (this.version = "10.16.4"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = oe;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          B.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => B.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Jv(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new ba());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            B.read(() => {
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
      ? Lp(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
        this.events.animationComplete && this.events.animationComplete.notify(),
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
function qn(e, t) {
  return new qv(e, t);
}
const jp = (e) => (t) => t.test(e),
  bv = { test: (e) => e === "auto", parse: (e) => e },
  _p = [xn, M, st, kt, o0, i0, bv],
  fr = (e) => _p.find(jp(e)),
  e1 = [..._p, me, Ht],
  t1 = (e) => e1.find(jp(e));
function n1(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, qn(n));
}
function r1(e, t) {
  const n = Ko(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const l = x0(o[s]);
    n1(e, s, l);
  }
}
function i1(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((l) => !e.hasValue(l)),
    s = o.length;
  if (s)
    for (let l = 0; l < s; l++) {
      const a = o[l],
        u = t[a];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !==
              null && i !== void 0
              ? i
              : t[a]),
        c != null &&
          (typeof c == "string" && (Ap(c) || Rp(c))
            ? (c = parseFloat(c))
            : !t1(c) && Ht.test(u) && (c = Mp(a, u)),
          e.addValue(a, qn(c, { owner: e })),
          n[a] === void 0 && (n[a] = c),
          c !== null && e.setBaseTarget(a, c));
    }
}
function o1(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function s1(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = o1(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function l1({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Fp(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...l
  } = e.makeTargetAnimatable(t);
  const a = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const f in l) {
    const d = e.getValue(f),
      m = l[f];
    if (!d || m === void 0 || (c && l1(c, f))) continue;
    const y = { delay: n, elapsed: 0, ...o };
    if (window.HandoffAppearAnimations && !d.hasAnimated) {
      const L = e.getProps()[H0];
      L &&
        ((y.elapsed = window.HandoffAppearAnimations(L, f, d, B)),
        (y.syncStart = !0));
    }
    d.start(Za(f, d, m, e.shouldReduceMotion && vn.has(f) ? { type: !1 } : y));
    const v = d.animation;
    xo(a) && (a.add(f), v.then(() => a.remove(f))), u.push(v);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && r1(e, s);
      }),
    u
  );
}
function Rl(e, t, n = {}) {
  const r = Ko(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(Fp(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (a = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: f,
            } = i;
            return a1(e, t, u + a, c, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [a, u] = l === "beforeChildren" ? [o, s] : [s, o];
    return a().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function a1(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    l = (e.variantChildren.size - 1) * r,
    a = i === 1 ? (u = 0) => u * r : (u = 0) => l - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(u1)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          s.push(
            Rl(u, t, { ...o, delay: n + a(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function u1(e, t) {
  return e.sortNodePosition(t);
}
function c1(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Rl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Rl(e, t, n);
  else {
    const i = typeof t == "function" ? Ko(e, t, n.custom) : t;
    r = Promise.all(Fp(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const f1 = [...ja].reverse(),
  d1 = ja.length;
function h1(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => c1(e, n, r)));
}
function p1(e) {
  let t = h1(e);
  const n = g1();
  let r = !0;
  const i = (a, u) => {
    const c = Ko(e, u);
    if (c) {
      const { transition: f, transitionEnd: d, ...m } = c;
      a = { ...a, ...m, ...d };
    }
    return a;
  };
  function o(a) {
    t = a(e);
  }
  function s(a, u) {
    const c = e.getProps(),
      f = e.getVariantContext(!0) || {},
      d = [],
      m = new Set();
    let y = {},
      v = 1 / 0;
    for (let g = 0; g < d1; g++) {
      const h = f1[g],
        p = n[h],
        x = c[h] !== void 0 ? c[h] : f[h],
        w = Yr(x),
        T = h === u ? p.isActive : null;
      T === !1 && (v = g);
      let P = x === f[h] && x !== c[h] && w;
      if (
        (P && r && e.manuallyAnimateOnMount && (P = !1),
        (p.protectedKeys = { ...y }),
        (!p.isActive && T === null) ||
          (!x && !p.prevProp) ||
          Uo(x) ||
          typeof x == "boolean")
      )
        continue;
      const k = m1(p.prevProp, x);
      let R = k || (h === u && p.isActive && !P && w) || (g > v && w);
      const N = Array.isArray(x) ? x : [x];
      let J = N.reduce(i, {});
      T === !1 && (J = {});
      const { prevResolvedValues: we = {} } = p,
        Se = { ...we, ...J },
        q = (b) => {
          (R = !0), m.delete(b), (p.needsAnimating[b] = !0);
        };
      for (const b in Se) {
        const Fe = J[b],
          Je = we[b];
        y.hasOwnProperty(b) ||
          (Fe !== Je
            ? mo(Fe) && mo(Je)
              ? !ip(Fe, Je) || k
                ? q(b)
                : (p.protectedKeys[b] = !0)
              : Fe !== void 0
              ? q(b)
              : m.add(b)
            : Fe !== void 0 && m.has(b)
            ? q(b)
            : (p.protectedKeys[b] = !0));
      }
      (p.prevProp = x),
        (p.prevResolvedValues = J),
        p.isActive && (y = { ...y, ...J }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          !P &&
          d.push(
            ...N.map((b) => ({ animation: b, options: { type: h, ...a } }))
          );
    }
    if (m.size) {
      const g = {};
      m.forEach((h) => {
        const p = e.getBaseTarget(h);
        p !== void 0 && (g[h] = p);
      }),
        d.push({ animation: g });
    }
    let L = !!d.length;
    return (
      r && c.initial === !1 && !e.manuallyAnimateOnMount && (L = !1),
      (r = !1),
      L ? t(d) : Promise.resolve()
    );
  }
  function l(a, u, c) {
    var f;
    if (n[a].isActive === u) return Promise.resolve();
    (f = e.variantChildren) === null ||
      f === void 0 ||
      f.forEach((m) => {
        var y;
        return (y = m.animationState) === null || y === void 0
          ? void 0
          : y.setActive(a, u);
      }),
      (n[a].isActive = u);
    const d = s(c, a);
    for (const m in n) n[m].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function m1(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !ip(t, e) : !1;
}
function qt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function g1() {
  return {
    animate: qt(!0),
    whileInView: qt(),
    whileHover: qt(),
    whileTap: qt(),
    whileDrag: qt(),
    whileFocus: qt(),
    exit: qt(),
  };
}
class y1 extends Yt {
  constructor(t) {
    super(t), t.animationState || (t.animationState = p1(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), Uo(t) && (this.unmount = t.subscribe(this.node));
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
let v1 = 0;
class x1 extends Yt {
  constructor() {
    super(...arguments), (this.id = v1++);
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
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const w1 = { animation: { Feature: y1 }, exit: { Feature: x1 } },
  Mc = (e, t) => Math.abs(e - t);
function S1(e, t) {
  const n = Mc(e.x, t.x),
    r = Mc(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Op {
  constructor(t, n, { transformPagePoint: r } = {}) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Ds(this.lastMoveEventInfo, this.history),
          c = this.startEvent !== null,
          f = S1(u.offset, { x: 0, y: 0 }) >= 3;
        if (!c && !f) return;
        const { point: d } = u,
          { timestamp: m } = oe;
        this.history.push({ ...d, timestamp: m });
        const { onStart: y, onMove: v } = this.handlers;
        c ||
          (y && y(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          v && v(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, c) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Ls(c, this.transformPagePoint)),
          B.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, c) => {
        if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
          return;
        const { onEnd: f, onSessionEnd: d } = this.handlers,
          m = Ds(
            u.type === "pointercancel"
              ? this.lastMoveEventInfo
              : Ls(c, this.transformPagePoint),
            this.history
          );
        this.startEvent && f && f(u, m), d && d(u, m);
      }),
      !bh(t))
    )
      return;
    (this.handlers = n), (this.transformPagePoint = r);
    const i = Ho(t),
      o = Ls(i, this.transformPagePoint),
      { point: s } = o,
      { timestamp: l } = oe;
    this.history = [{ ...s, timestamp: l }];
    const { onSessionStart: a } = n;
    a && a(t, Ds(o, this.history)),
      (this.removeListeners = It(
        ht(window, "pointermove", this.handlePointerMove),
        ht(window, "pointerup", this.handlePointerUp),
        ht(window, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), xt(this.updatePoint);
  }
}
function Ls(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Rc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ds({ point: e }, t) {
  return {
    point: e,
    delta: Rc(e, zp(t)),
    offset: Rc(e, k1(t)),
    velocity: P1(t, 0.1),
  };
}
function k1(e) {
  return e[0];
}
function zp(e) {
  return e[e.length - 1];
}
function P1(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = zp(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Bt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = pt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Ae(e) {
  return e.max - e.min;
}
function Nl(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Nc(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = G(t.min, t.max, e.origin)),
    (e.scale = Ae(n) / Ae(t)),
    (Nl(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = G(n.min, n.max, e.origin) - e.originPoint),
    (Nl(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Vr(e, t, n, r) {
  Nc(e.x, t.x, n.x, r ? r.originX : void 0),
    Nc(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Ac(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ae(t));
}
function C1(e, t, n) {
  Ac(e.x, t.x, n.x), Ac(e.y, t.y, n.y);
}
function jc(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ae(t));
}
function Mr(e, t, n) {
  jc(e.x, t.x, n.x), jc(e.y, t.y, n.y);
}
function T1(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? G(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function _c(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function E1(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: _c(e.x, n, i), y: _c(e.y, t, r) };
}
function Fc(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function L1(e, t) {
  return { x: Fc(e.x, t.x), y: Fc(e.y, t.y) };
}
function D1(e, t) {
  let n = 0.5;
  const r = Ae(e),
    i = Ae(t);
  return (
    i > r
      ? (n = Zr(t.min, t.max - r, e.min))
      : r > i && (n = Zr(e.min, e.max - i, t.min)),
    Wt(0, 1, n)
  );
}
function V1(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Al = 0.35;
function M1(e = Al) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Al),
    { x: Oc(e, "left", "right"), y: Oc(e, "top", "bottom") }
  );
}
function Oc(e, t, n) {
  return { min: zc(e, t), max: zc(e, n) };
}
function zc(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Ic = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  On = () => ({ x: Ic(), y: Ic() }),
  Bc = () => ({ min: 0, max: 0 }),
  te = () => ({ x: Bc(), y: Bc() });
function tt(e) {
  return [e("x"), e("y")];
}
function Ip({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function R1({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function N1(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Vs(e) {
  return e === void 0 || e === 1;
}
function jl({ scale: e, scaleX: t, scaleY: n }) {
  return !Vs(e) || !Vs(t) || !Vs(n);
}
function tn(e) {
  return jl(e) || Bp(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Bp(e) {
  return Uc(e.x) || Uc(e.y);
}
function Uc(e) {
  return e && e !== "0%";
}
function wo(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function $c(e, t, n, r, i) {
  return i !== void 0 && (e = wo(e, i, r)), wo(e, n, r) + t;
}
function _l(e, t = 0, n = 1, r, i) {
  (e.min = $c(e.min, t, n, r, i)), (e.max = $c(e.max, t, n, r, i));
}
function Up(e, { x: t, y: n }) {
  _l(e.x, t.translate, t.scale, t.originPoint),
    _l(e.y, n.translate, n.scale, n.originPoint);
}
function A1(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let l = 0; l < i; l++) {
    (o = n[l]), (s = o.projectionDelta);
    const a = o.instance;
    (a && a.style && a.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        zn(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), Up(e, s)),
      r && tn(o.latestValues) && zn(e, o.latestValues));
  }
  (t.x = Wc(t.x)), (t.y = Wc(t.y));
}
function Wc(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Tt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Hc(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = G(e.min, e.max, o);
  _l(e, t[n], t[r], s, t.scale);
}
const j1 = ["x", "scaleX", "originX"],
  _1 = ["y", "scaleY", "originY"];
function zn(e, t) {
  Hc(e.x, t, j1), Hc(e.y, t, _1);
}
function $p(e, t) {
  return Ip(N1(e.getBoundingClientRect(), t));
}
function F1(e, t, n) {
  const r = $p(e, n),
    { scroll: i } = t;
  return i && (Tt(r.x, i.offset.x), Tt(r.y, i.offset.y)), r;
}
const O1 = new WeakMap();
class z1 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = te()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (a) => {
        this.stopAnimation(), n && this.snapToCursor(Ho(a, "page").point);
      },
      o = (a, u) => {
        const { drag: c, dragPropagation: f, onDragStart: d } = this.getProps();
        if (
          c &&
          !f &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = tp(c)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          tt((y) => {
            let v = this.getAxisMotionValue(y).get() || 0;
            if (st.test(v)) {
              const { projection: L } = this.visualElement;
              if (L && L.layout) {
                const g = L.layout.layoutBox[y];
                g && (v = Ae(g) * (parseFloat(v) / 100));
              }
            }
            this.originPoint[y] = v;
          }),
          d && B.update(() => d(a, u), !1, !0);
        const { animationState: m } = this.visualElement;
        m && m.setActive("whileDrag", !0);
      },
      s = (a, u) => {
        const {
          dragPropagation: c,
          dragDirectionLock: f,
          onDirectionLock: d,
          onDrag: m,
        } = this.getProps();
        if (!c && !this.openGlobalLock) return;
        const { offset: y } = u;
        if (f && this.currentDirection === null) {
          (this.currentDirection = I1(y)),
            this.currentDirection !== null && d && d(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, y),
          this.updateAxis("y", u.point, y),
          this.visualElement.render(),
          m && m(a, u);
      },
      l = (a, u) => this.stop(a, u);
    this.panSession = new Op(
      t,
      { onSessionStart: i, onStart: o, onMove: s, onSessionEnd: l },
      { transformPagePoint: this.visualElement.getTransformPagePoint() }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && B.update(() => o(t, n));
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
    if (!r || !Li(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = T1(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: n } = this.getProps(),
      { layout: r } = this.visualElement.projection || {},
      i = this.constraints;
    t && _n(t)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : t && r
      ? (this.constraints = E1(r.layoutBox, t))
      : (this.constraints = !1),
      (this.elastic = M1(n)),
      i !== this.constraints &&
        r &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        tt((o) => {
          this.getAxisMotionValue(o) &&
            (this.constraints[o] = V1(r.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !_n(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = F1(r, i.root, this.visualElement.getTransformPagePoint());
    let s = L1(i.layout.layoutBox, o);
    if (n) {
      const l = n(R1(s));
      (this.hasMutatedConstraints = !!l), l && (s = Ip(l));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: l,
      } = this.getProps(),
      a = this.constraints || {},
      u = tt((c) => {
        if (!Li(c, n, this.currentDirection)) return;
        let f = (a && a[c]) || {};
        s && (f = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          m = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: d,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...f,
          };
        return this.startAxisValueAnimation(c, y);
      });
    return Promise.all(u).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Za(t, r, 0, n));
  }
  stopAnimation() {
    tt((t) => this.getAxisMotionValue(t).stop());
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
    tt((n) => {
      const { drag: r } = this.getProps();
      if (!Li(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: l } = i.layout.layoutBox[n];
        o.set(t[n] - G(s, l, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!_n(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    tt((s) => {
      const l = this.getAxisMotionValue(s);
      if (l) {
        const a = l.get();
        i[s] = D1({ min: a, max: a }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      tt((s) => {
        if (!Li(s, t, null)) return;
        const l = this.getAxisMotionValue(s),
          { min: a, max: u } = this.constraints[s];
        l.set(G(a, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    O1.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = ht(t, "pointerdown", (a) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(a);
      }),
      r = () => {
        const { dragConstraints: a } = this.getProps();
        _n(a) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = ft(window, "resize", () => this.scalePositionWithinConstraints()),
      l = i.addEventListener(
        "didUpdate",
        ({ delta: a, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (tt((c) => {
              const f = this.getAxisMotionValue(c);
              f &&
                ((this.originPoint[c] += a[c].translate),
                f.set(f.get() + a[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Al,
        dragMomentum: l = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: l,
    };
  }
}
function Li(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function I1(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class B1 extends Yt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Z),
      (this.removeListeners = Z),
      (this.controls = new z1(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Z);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Kc = (e) => (t, n) => {
  e && B.update(() => e(t, n));
};
class U1 extends Yt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Z);
  }
  onPointerDown(t) {
    this.session = new Op(t, this.createPanHandlers(), {
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
      onSessionStart: Kc(t),
      onStart: Kc(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && B.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = ht(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function $1() {
  const e = E.useContext(Io);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = E.useId();
  return E.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const Ui = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Gc(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const dr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (M.test(e)) e = parseFloat(e);
        else return e;
      const n = Gc(e, t.target.x),
        r = Gc(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  W1 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ht.parse(e);
      if (i.length > 5) return r;
      const o = Ht.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        l = n.x.scale * t.x,
        a = n.y.scale * t.y;
      (i[0 + s] /= l), (i[1 + s] /= a);
      const u = G(l, a, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class H1 extends rt.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    Jy(K1),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Ui.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              B.postRender(() => {
                const l = s.getStack();
                (!l || !l.members.length) && this.safeToRemove();
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
function Wp(e) {
  const [t, n] = $1(),
    r = E.useContext(Fa);
  return rt.createElement(H1, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: E.useContext(zh),
    isPresent: t,
    safeToRemove: n,
  });
}
const K1 = {
    borderRadius: {
      ...dr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: dr,
    borderTopRightRadius: dr,
    borderBottomLeftRadius: dr,
    borderBottomRightRadius: dr,
    boxShadow: W1,
  },
  Hp = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  G1 = Hp.length,
  Qc = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Yc = (e) => typeof e == "number" || M.test(e);
function Q1(e, t, n, r, i, o) {
  i
    ? ((e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, Y1(r))),
      (e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, X1(r))))
    : o &&
      (e.opacity = G(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < G1; s++) {
    const l = `border${Hp[s]}Radius`;
    let a = Xc(t, l),
      u = Xc(n, l);
    if (a === void 0 && u === void 0) continue;
    a || (a = 0),
      u || (u = 0),
      a === 0 || u === 0 || Yc(a) === Yc(u)
        ? ((e[l] = Math.max(G(Qc(a), Qc(u), r), 0)),
          (st.test(u) || st.test(a)) && (e[l] += "%"))
        : (e[l] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r));
}
function Xc(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Y1 = Kp(0, 0.5, Ga),
  X1 = Kp(0.5, 0.95, Z);
function Kp(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Zr(e, t, r)));
}
function Zc(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Oe(e, t) {
  Zc(e.x, t.x), Zc(e.y, t.y);
}
function Jc(e, t, n, r, i) {
  return (
    (e -= t), (e = wo(e, 1 / n, r)), i !== void 0 && (e = wo(e, 1 / i, r)), e
  );
}
function Z1(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (st.test(t) &&
      ((t = parseFloat(t)), (t = G(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let l = G(o.min, o.max, r);
  e === o && (l -= t),
    (e.min = Jc(e.min, t, n, l, i)),
    (e.max = Jc(e.max, t, n, l, i));
}
function qc(e, t, [n, r, i], o, s) {
  Z1(e, t[n], t[r], t[i], t.scale, o, s);
}
const J1 = ["x", "scaleX", "originX"],
  q1 = ["y", "scaleY", "originY"];
function bc(e, t, n, r) {
  qc(e.x, t, J1, n ? n.x : void 0, r ? r.x : void 0),
    qc(e.y, t, q1, n ? n.y : void 0, r ? r.y : void 0);
}
function ef(e) {
  return e.translate === 0 && e.scale === 1;
}
function Gp(e) {
  return ef(e.x) && ef(e.y);
}
function b1(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Qp(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function tf(e) {
  return Ae(e.x) / Ae(e.y);
}
class ex {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ja(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (qa(this.members, t),
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
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
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
function nf(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: a, rotateX: u, rotateY: c } = n;
    a && (r += `rotate(${a}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const s = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (s !== 1 || l !== 1) && (r += `scale(${s}, ${l})`), r || "none";
}
const tx = (e, t) => e.depth - t.depth;
class nx {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    Ja(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    qa(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(tx),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function rx(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (xt(r), e(o - t));
    };
  return B.read(r, !0), () => xt(r);
}
function ix(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function ox(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function sx(e, t, n) {
  const r = Le(e) ? e : qn(e);
  return r.start(Za("", r, t, n)), r.animation;
}
const rf = ["", "X", "Y", "Z"],
  of = 1e3;
let lx = 0;
const nn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Yp({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, l = t == null ? void 0 : t()) {
      (this.id = lx++),
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
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (nn.totalNodes =
            nn.resolvedTargetDeltas =
            nn.recalculatedProjection =
              0),
            this.nodes.forEach(cx),
            this.nodes.forEach(mx),
            this.nodes.forEach(gx),
            this.nodes.forEach(fx),
            ix(nn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = l ? l.root || l : this),
        (this.path = l ? [...l.path, l] : []),
        (this.parent = l),
        (this.depth = l ? l.depth + 1 : 0);
      for (let a = 0; a < this.path.length; a++)
        this.path[a].shouldResetTransform = !0;
      this.root === this && (this.nodes = new nx());
    }
    addEventListener(s, l) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new ba()),
        this.eventHandlers.get(s).add(l)
      );
    }
    notifyListeners(s, ...l) {
      const a = this.eventHandlers.get(s);
      a && a.notify(...l);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, l = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = ox(s)), (this.instance = s);
      const { layoutId: a, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        l && (u || a) && (this.isLayoutDirty = !0),
        e)
      ) {
        let f;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            f && f(),
            (f = rx(d, 250)),
            Ui.hasAnimatedSinceResize &&
              ((Ui.hasAnimatedSinceResize = !1), this.nodes.forEach(lf));
        });
      }
      a && this.root.registerSharedNode(a, this),
        this.options.animate !== !1 &&
          c &&
          (a || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: f,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || c.getDefaultTransition() || Sx,
                { onLayoutAnimationStart: L, onLayoutAnimationComplete: g } =
                  c.getProps(),
                h = !this.targetLayout || !Qp(this.targetLayout, y) || m,
                p = !d && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (d && (h || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(f, p);
                const x = { ...Np(v, "layout"), onPlay: L, onComplete: g };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((x.delay = 0), (x.type = !1)),
                  this.startAnimation(x);
              } else
                d || lf(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        xt(this.updateProjection);
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
        this.nodes && this.nodes.forEach(yx),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
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
      const { layoutId: l, layout: a } = this.options;
      if (l === void 0 && !a) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(sf);
        return;
      }
      this.isUpdating || this.nodes.forEach(hx),
        (this.isUpdating = !1),
        this.nodes.forEach(px),
        this.nodes.forEach(ax),
        this.nodes.forEach(ux),
        this.clearAllSnapshots();
      const l = performance.now();
      (oe.delta = Wt(0, 1e3 / 60, l - oe.timestamp)),
        (oe.timestamp = l),
        (oe.isProcessing = !0),
        xs.update.process(oe),
        xs.preRender.process(oe),
        xs.render.process(oe),
        (oe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(dx), this.sharedNodes.forEach(vx);
    }
    scheduleUpdateProjection() {
      B.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      B.postRender(() => {
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
        for (let a = 0; a < this.path.length; a++) this.path[a].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = te()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l &&
        l.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (l = !1),
        l &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        l = this.projectionDelta && !Gp(this.projectionDelta),
        a = this.getTransformTemplate(),
        u = a ? a(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (l || tn(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const l = this.measurePageBox();
      let a = this.removeElementScroll(l);
      return (
        s && (a = this.removeTransform(a)),
        kx(a),
        {
          animationId: this.root.animationId,
          measuredBox: l,
          layoutBox: a,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return te();
      const l = s.measureViewportBox(),
        { scroll: a } = this.root;
      return a && (Tt(l.x, a.offset.x), Tt(l.y, a.offset.y)), l;
    }
    removeElementScroll(s) {
      const l = te();
      Oe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a],
          { scroll: c, options: f } = u;
        if (u !== this.root && c && f.layoutScroll) {
          if (c.isRoot) {
            Oe(l, s);
            const { scroll: d } = this.root;
            d && (Tt(l.x, -d.offset.x), Tt(l.y, -d.offset.y));
          }
          Tt(l.x, c.offset.x), Tt(l.y, c.offset.y);
        }
      }
      return l;
    }
    applyTransform(s, l = !1) {
      const a = te();
      Oe(a, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !l &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          zn(a, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          tn(c.latestValues) && zn(a, c.latestValues);
      }
      return tn(this.latestValues) && zn(a, this.latestValues), a;
    }
    removeTransform(s) {
      const l = te();
      Oe(l, s);
      for (let a = 0; a < this.path.length; a++) {
        const u = this.path[a];
        if (!u.instance || !tn(u.latestValues)) continue;
        jl(u.latestValues) && u.updateSnapshot();
        const c = te(),
          f = u.measurePageBox();
        Oe(c, f),
          bc(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return tn(this.latestValues) && bc(l, this.latestValues), l;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
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
        this.relativeParent.resolvedRelativeTargetAt !== oe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var l;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== a;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((l = this.parent) === null || l === void 0) &&
            l.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: f, layoutId: d } = this.options;
      if (!(!this.layout || !(f || d))) {
        if (
          ((this.resolvedRelativeTargetAt = oe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = te()),
              (this.relativeTargetOrigin = te()),
              Mr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Oe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = te()), (this.targetWithTransforms = te())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                C1(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Oe(this.target, this.layout.layoutBox),
                Up(this.target, this.targetDelta))
              : Oe(this.target, this.layout.layoutBox),
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
                (this.relativeTarget = te()),
                (this.relativeTargetOrigin = te()),
                Mr(this.relativeTargetOrigin, this.target, m.target),
                Oe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          nn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          jl(this.parent.latestValues) ||
          Bp(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const l = this.getLead(),
        a = !!this.resumingFrom || this !== l;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        a &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === oe.timestamp && (u = !1),
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
      Oe(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        m = this.treeScale.y;
      A1(this.layoutCorrected, this.treeScale, this.path, a),
        l.layout &&
          !l.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (l.target = l.layout.layoutBox);
      const { target: y } = l;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = On()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = On()),
        (this.projectionDeltaWithTransform = On()));
      const v = this.projectionTransform;
      Vr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = nf(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        nn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, l = !1) {
      const a = this.snapshot,
        u = a ? a.latestValues : {},
        c = { ...this.latestValues },
        f = On();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !l);
      const d = te(),
        m = a ? a.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = m !== y,
        L = this.getStack(),
        g = !L || L.members.length <= 1,
        h = !!(v && !g && this.options.crossfade === !0 && !this.path.some(wx));
      this.animationProgress = 0;
      let p;
      (this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        af(f.x, s.x, w),
          af(f.y, s.y, w),
          this.setTargetDelta(f),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Mr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            xx(this.relativeTarget, this.relativeTargetOrigin, d, w),
            p && b1(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = te()),
            Oe(p, this.relativeTarget)),
          v &&
            ((this.animationValues = c), Q1(c, u, this.latestValues, w, h, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = w);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (xt(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = B.update(() => {
          (Ui.hasAnimatedSinceResize = !0),
            (this.currentAnimation = sx(0, of, {
              ...s,
              onUpdate: (l) => {
                this.mixTargetDelta(l), s.onUpdate && s.onUpdate(l);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
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
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(of),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: l,
        target: a,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!l || !a || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Xp(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          a = this.target || te();
          const f = Ae(this.layout.layoutBox.x);
          (a.x.min = s.target.x.min), (a.x.max = a.x.min + f);
          const d = Ae(this.layout.layoutBox.y);
          (a.y.min = s.target.y.min), (a.y.max = a.y.min + d);
        }
        Oe(l, a),
          zn(l, c),
          Vr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c);
      }
    }
    registerSharedNode(s, l) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new ex()),
        this.sharedNodes.get(s).add(l);
      const u = l.options.initialPromotionConfig;
      l.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(l)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: l } = this.options;
      return l
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: l, preserveFollowOpacity: a } = {}) {
      const u = this.getStack();
      u && u.promote(this, a),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        l && this.setOptions({ transition: l });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let l = !1;
      const { latestValues: a } = s;
      if (((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0), !l))
        return;
      const u = {};
      for (let c = 0; c < rf.length; c++) {
        const f = "rotate" + rf[c];
        a[f] && ((u[f] = a[f]), s.setStaticValue(f, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s = {}) {
      var l, a;
      const u = {};
      if (!this.instance || this.isSVG) return u;
      if (this.isVisible) u.visibility = "";
      else return { visibility: "hidden" };
      const c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = Bi(s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const f = this.getLead();
      if (!this.projectionDelta || !this.layout || !f.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = Bi(s.pointerEvents) || "")),
          this.hasProjected &&
            !tn(this.latestValues) &&
            ((v.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = f.animationValues || f.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = nf(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        c && (u.transform = c(d, u.transform));
      const { x: m, y } = this.projectionDelta;
      (u.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        f.animationValues
          ? (u.opacity =
              f === this
                ? (a =
                    (l = d.opacity) !== null && l !== void 0
                      ? l
                      : this.latestValues.opacity) !== null && a !== void 0
                  ? a
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
      for (const v in ho) {
        if (d[v] === void 0) continue;
        const { correct: L, applyTo: g } = ho[v],
          h = u.transform === "none" ? d[v] : L(d[v], f);
        if (g) {
          const p = g.length;
          for (let x = 0; x < p; x++) u[g[x]] = h;
        } else u[v] = h;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = f === this ? Bi(s.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var l;
        return (l = s.currentAnimation) === null || l === void 0
          ? void 0
          : l.stop();
      }),
        this.root.nodes.forEach(sf),
        this.root.sharedNodes.clear();
    }
  };
}
function ax(e) {
  e.updateLayout();
}
function ux(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? tt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Ae(d);
          (d.min = r[f].min), (d.max = d.min + m);
        })
      : Xp(o, n.layoutBox, r) &&
        tt((f) => {
          const d = s ? n.measuredBox[f] : n.layoutBox[f],
            m = Ae(r[f]);
          (d.max = d.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[f].max = e.relativeTarget[f].min + m));
        });
    const l = On();
    Vr(l, r, n.layoutBox);
    const a = On();
    s ? Vr(a, e.applyTransform(i, !0), n.measuredBox) : Vr(a, r, n.layoutBox);
    const u = !Gp(l);
    let c = !1;
    if (!e.resumeFrom) {
      const f = e.getClosestProjectingParent();
      if (f && !f.resumeFrom) {
        const { snapshot: d, layout: m } = f;
        if (d && m) {
          const y = te();
          Mr(y, n.layoutBox, d.layoutBox);
          const v = te();
          Mr(v, r, m.layoutBox),
            Qp(y, v) || (c = !0),
            f.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = f));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: a,
      layoutDelta: l,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function cx(e) {
  nn.totalNodes++,
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
function fx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function dx(e) {
  e.clearSnapshot();
}
function sf(e) {
  e.clearMeasurements();
}
function hx(e) {
  e.isLayoutDirty = !1;
}
function px(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function lf(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function mx(e) {
  e.resolveTargetDelta();
}
function gx(e) {
  e.calcProjection();
}
function yx(e) {
  e.resetRotation();
}
function vx(e) {
  e.removeLeadSnapshot();
}
function af(e, t, n) {
  (e.translate = G(t.translate, 0, n)),
    (e.scale = G(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function uf(e, t, n, r) {
  (e.min = G(t.min, n.min, r)), (e.max = G(t.max, n.max, r));
}
function xx(e, t, n, r) {
  uf(e.x, t.x, n.x, r), uf(e.y, t.y, n.y, r);
}
function wx(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Sx = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  cf = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  ff = cf("applewebkit/") && !cf("chrome/") ? Math.round : Z;
function df(e) {
  (e.min = ff(e.min)), (e.max = ff(e.max));
}
function kx(e) {
  df(e.x), df(e.y);
}
function Xp(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Nl(tf(t), tf(n), 0.2))
  );
}
const Px = Yp({
    attachResizeListener: (e, t) => ft(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ms = { current: void 0 },
  Zp = Yp({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ms.current) {
        const e = new Px({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ms.current = e);
      }
      return Ms.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Cx = {
    pan: { Feature: U1 },
    drag: { Feature: B1, ProjectionNode: Zp, MeasureLayout: Wp },
  },
  Tx = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Ex(e) {
  const t = Tx.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function Fl(e, t, n = 1) {
  const [r, i] = Ex(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return Ap(s) ? parseFloat(s) : s;
  } else return Tl(i) ? Fl(i, t, n + 1) : i;
}
function Lx(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Tl(o)) return;
      const s = Fl(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Tl(o)) continue;
    const s = Fl(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const Dx = new Set([
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
  Jp = (e) => Dx.has(e),
  Vx = (e) => Object.keys(e).some(Jp),
  hf = (e) => e === xn || e === M,
  pf = (e, t) => parseFloat(e.split(", ")[t]),
  mf =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return pf(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? pf(o[1], e) : 0;
      }
    },
  Mx = new Set(["x", "y", "z"]),
  Rx = ni.filter((e) => !Mx.has(e));
function Nx(e) {
  const t = [];
  return (
    Rx.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const bn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: mf(4, 13),
  y: mf(5, 14),
};
bn.translateX = bn.x;
bn.translateY = bn.y;
const Ax = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      l = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        l[u] = bn[u](r, o);
      }),
      t.render();
    const a = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(l[u]), (e[u] = bn[u](a, o));
      }),
      e
    );
  },
  jx = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Jp);
    let o = [],
      s = !1;
    const l = [];
    if (
      (i.forEach((a) => {
        const u = e.getValue(a);
        if (!e.hasValue(a)) return;
        let c = n[a],
          f = fr(c);
        const d = t[a];
        let m;
        if (mo(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (c = d[v]), (f = fr(c));
          for (let L = v; L < y && d[L] !== null; L++)
            m ? Ka(fr(d[L]) === m) : (m = fr(d[L]));
        } else m = fr(d);
        if (f !== m)
          if (hf(f) && hf(m)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[a] = parseFloat(d))
                : Array.isArray(d) && m === M && (t[a] = d.map(parseFloat));
          } else
            f != null &&
            f.transform &&
            m != null &&
            m.transform &&
            (c === 0 || d === 0)
              ? c === 0
                ? u.set(m.transform(c))
                : (t[a] = f.transform(d))
              : (s || ((o = Nx(e)), (s = !0)),
                l.push(a),
                (r[a] = r[a] !== void 0 ? r[a] : t[a]),
                u.jump(d));
      }),
      l.length)
    ) {
      const a = l.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = Ax(t, e, l);
      return (
        o.length &&
          o.forEach(([c, f]) => {
            e.getValue(c).set(f);
          }),
        e.render(),
        Bo && a !== null && window.scrollTo({ top: a }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function _x(e, t, n, r) {
  return Vx(t) ? jx(e, t, n, r) : { target: t, transitionEnd: r };
}
const Fx = (e, t, n, r) => {
    const i = Lx(e, t, r);
    return (t = i.target), (r = i.transitionEnd), _x(e, t, n, r);
  },
  Ol = { current: null },
  qp = { current: !1 };
function Ox() {
  if (((qp.current = !0), !!Bo))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Ol.current = e.matches);
      e.addListener(t), t();
    } else Ol.current = !1;
}
function zx(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Le(o)) e.addValue(i, o), xo(r) && r.add(i);
    else if (Le(s)) e.addValue(i, qn(o, { owner: e })), xo(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const l = e.getValue(i);
        !l.hasAnimated && l.set(o);
      } else {
        const l = e.getStaticValue(i);
        e.addValue(i, qn(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const gf = new WeakMap(),
  bp = Object.keys(Xr),
  Ix = bp.length,
  yf = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Bx = _a.length;
class Ux {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
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
      (this.scheduleRender = () => B.render(this.render, !1, !0));
    const { latestValues: l, renderState: a } = o;
    (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = a),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = $o(n)),
      (this.isVariantNode = Oh(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const f in c) {
      const d = c[f];
      l[f] !== void 0 && Le(d) && (d.set(l[f], !1), xo(u) && u.add(f));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      gf.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      qp.current || Ox(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Ol.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    gf.delete(this.current),
      this.projection && this.projection.unmount(),
      xt(this.notifyUpdate),
      xt(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = vn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && B.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, l;
    for (let a = 0; a < Ix; a++) {
      const u = bp[a],
        {
          isEnabled: c,
          Feature: f,
          ProjectionNode: d,
          MeasureLayout: m,
        } = Xr[u];
      d && (s = d),
        c(n) &&
          (!this.features[u] && f && (this.features[u] = new f(this)),
          m && (l = m));
    }
    if (!this.projection && s) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: a,
        layout: u,
        drag: c,
        dragConstraints: f,
        layoutScroll: d,
        layoutRoot: m,
      } = n;
      this.projection.setOptions({
        layoutId: a,
        layout: u,
        alwaysMeasureLayout: !!c || (f && _n(f)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: m,
      });
    }
    return l;
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
      : te();
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
    for (let r = 0; r < yf.length; r++) {
      const i = yf[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = zx(
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
    for (let r = 0; r < Bx; r++) {
      const i = _a[r],
        o = this.props[i];
      (Yr(o) || o === !1) && (n[i] = o);
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
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = qn(n, { owner: this })), this.addValue(t, r)),
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
          ? (n = Ha(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Le(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new ba()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class em extends Ux {
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
    o
  ) {
    let s = s1(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      i1(this, r, s);
      const l = Fx(this, r, s, n);
      (n = l.transitionEnd), (r = l.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function $x(e) {
  return window.getComputedStyle(e);
}
class Wx extends em {
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = Xa(n);
      return (r && r.default) || 0;
    } else {
      const r = $x(t),
        i = (Uh(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return $p(t, n);
  }
  build(t, n, r, i) {
    za(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Wa(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Le(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Qh(t, n, r, i);
  }
}
class Hx extends em {
  constructor() {
    super(...arguments), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (vn.has(n)) {
      const r = Xa(n);
      return (r && r.default) || 0;
    }
    return (n = Yh.has(n) ? n : $a(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return te();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Zh(t, n);
  }
  build(t, n, r, i) {
    Ba(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Xh(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Ua(t.tagName)), super.mount(t);
  }
}
const Kx = (e, t) =>
    Oa(e)
      ? new Hx(t, { enableHardwareAcceleration: !1 })
      : new Wx(t, { enableHardwareAcceleration: !0 }),
  Gx = { layout: { ProjectionNode: Zp, MeasureLayout: Wp } },
  Qx = { ...w1, ...B0, ...Cx, ...Gx },
  rn = Xy((e, t) => L0(e, t, Qx, Kx));
function tm() {
  const e = E.useRef(!1);
  return (
    Aa(
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
function Yx() {
  const e = tm(),
    [t, n] = E.useState(0),
    r = E.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [E.useCallback(() => B.postRender(r), [r]), t];
}
class Xx extends E.Component {
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
function Zx({ children: e, isPresent: t }) {
  const n = E.useId(),
    r = E.useRef(null),
    i = E.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    E.useInsertionEffect(() => {
      const { width: o, height: s, top: l, left: a } = i.current;
      if (t || !r.current || !o || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    E.createElement(
      Xx,
      { isPresent: t, childRef: r, sizeRef: i },
      E.cloneElement(e, { ref: r })
    )
  );
}
const Rs = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const l = Jh(Jx),
    a = E.useId(),
    u = E.useMemo(
      () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          l.set(c, !0);
          for (const f of l.values()) if (!f) return;
          r && r();
        },
        register: (c) => (l.set(c, !1), () => l.delete(c)),
      }),
      o ? void 0 : [n]
    );
  return (
    E.useMemo(() => {
      l.forEach((c, f) => l.set(f, !1));
    }, [n]),
    E.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    s === "popLayout" && (e = E.createElement(Zx, { isPresent: n }, e)),
    E.createElement(Io.Provider, { value: u }, e)
  );
};
function Jx() {
  return new Map();
}
function qx(e) {
  return E.useEffect(() => () => e(), []);
}
const kn = (e) => e.key || "";
function bx(e, t) {
  e.forEach((n) => {
    const r = kn(n);
    t.set(r, n);
  });
}
function ew(e) {
  const t = [];
  return (
    E.Children.forEach(e, (n) => {
      E.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const tw = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: o = !0,
    mode: s = "sync",
  }) => {
    const l = E.useContext(Fa).forceRender || Yx()[0],
      a = tm(),
      u = ew(e);
    let c = u;
    const f = E.useRef(new Map()).current,
      d = E.useRef(c),
      m = E.useRef(new Map()).current,
      y = E.useRef(!0);
    if (
      (Aa(() => {
        (y.current = !1), bx(u, m), (d.current = c);
      }),
      qx(() => {
        (y.current = !0), m.clear(), f.clear();
      }),
      y.current)
    )
      return E.createElement(
        E.Fragment,
        null,
        c.map((h) =>
          E.createElement(
            Rs,
            {
              key: kn(h),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: o,
              mode: s,
            },
            h
          )
        )
      );
    c = [...c];
    const v = d.current.map(kn),
      L = u.map(kn),
      g = v.length;
    for (let h = 0; h < g; h++) {
      const p = v[h];
      L.indexOf(p) === -1 && !f.has(p) && f.set(p, void 0);
    }
    return (
      s === "wait" && f.size && (c = []),
      f.forEach((h, p) => {
        if (L.indexOf(p) !== -1) return;
        const x = m.get(p);
        if (!x) return;
        const w = v.indexOf(p);
        let T = h;
        if (!T) {
          const P = () => {
            m.delete(p), f.delete(p);
            const k = d.current.findIndex((R) => R.key === p);
            if ((d.current.splice(k, 1), !f.size)) {
              if (((d.current = u), a.current === !1)) return;
              l(), r && r();
            }
          };
          (T = E.createElement(
            Rs,
            {
              key: kn(x),
              isPresent: !1,
              onExitComplete: P,
              custom: t,
              presenceAffectsLayout: o,
              mode: s,
            },
            x
          )),
            f.set(p, T);
        }
        c.splice(w, 0, T);
      }),
      (c = c.map((h) => {
        const p = h.key;
        return f.has(p)
          ? h
          : E.createElement(
              Rs,
              { key: kn(h), isPresent: !0, presenceAffectsLayout: o, mode: s },
              h
            );
      })),
      E.createElement(
        E.Fragment,
        null,
        f.size ? c : c.map((h) => E.cloneElement(h))
      )
    );
  },
  nw = {
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
  rw = {
    initial: { y: "-10vh", opacity: 0, transition: { duration: 0.4 } },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  },
  vf = {
    initial: { transition: { staggerChildren: 0.05 } },
    animate: { transition: { delayChildren: 0.1, staggerChildren: 0.09 } },
    exit: { transition: { staggerChildren: 0.08 } },
  },
  zl = {
    initial: { y: "30vh", transition: { duration: 0.7 } },
    animate: { y: 0, transition: { duration: 0.7 } },
    exit: { y: "-30vh", transition: { duration: 0.7 } },
  },
  iw = ({ title: e }) =>
    C.jsx(rn.div, {
      variants: zl,
      className: "uppercase text-4xl text-white italic",
      children: C.jsx("p", { children: e }),
    });
function ow({ menuState: e, menuToggler: t }) {
  return C.jsx(tw, {
    children:
      e &&
      C.jsxs(rn.div, {
        variants: nw,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        className:
          "bg-[#353945] absolute top-0 left-0 h-[100vh] w-screen origin-right flex flex-col justify-between z-30",
        children: [
          C.jsxs("div", {
            className:
              "flex mx-auto px-10 container flex-row items-center justify-between ",
            children: [
              C.jsx("img", {
                src: jh,
                alt: "brand logo",
                className: "p-0 w-1/2 max-w-[200px] min-w-[150px] invisible",
              }),
              C.jsx(rn.div, {
                variants: rw,
                initial: "initial",
                animate: "animate",
                exit: "initial",
                onClick: t,
                onKeyDown: t,
                children: C.jsx(jy, { color: "white", size: 22 }),
              }),
            ],
          }),
          C.jsx(rn.div, {
            className:
              "flex flex-col justify-center  font-lora items-center gap-4 mb-32",
            variants: vf,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            children: _y.map((n) =>
              C.jsx(
                "div",
                {
                  className: "overflow-hidden",
                  children: C.jsx(iw, { title: n.title }),
                },
                n.title
              )
            ),
          }),
          C.jsx(rn.div, {
            className: " text-white  mb-10 flex flex-row px-10",
            variants: vf,
            initial: "initial",
            animate: "animate",
            exit: "exit",
            children: C.jsxs("div", {
              className:
                "overflow-hidden flex flex-row justify-between w-[100%]",
              children: [
                C.jsx(rn.div, {
                  className: "text-[#D4D5E1] italic text-sm",
                  variants: zl,
                  children: "All rights reserved",
                }),
                C.jsx(rn.div, {
                  className: "text-[#D4D5E1] italic text-sm",
                  variants: zl,
                  children: "Rotaract Midtown",
                }),
              ],
            }),
          }),
        ],
      }),
  });
}
function sw() {
  return C.jsxs("div", {
    className:
      "overflow-hidden py-[20px] px-0 bg-[#353945] whitespace-nowrap relative -rotate-12 scale-110 z-10",
    children: [
      C.jsx("div", {
        className: "banner-slide",
        children: dc.map((e, t) =>
          e.title === "."
            ? C.jsx(
                "div",
                {
                  className:
                    "w-2 h-2 rounded-full bg-red-500 inline-block ml-5 mr-5",
                },
                e.title + t
              )
            : C.jsx(
                "p",
                {
                  className: "text-xs text-[#D6D6D6] margin inline-block",
                  children: e.title,
                },
                e.title
              )
        ),
      }),
      C.jsx("div", {
        className: "banner-slide",
        children: dc.map((e, t) =>
          e.title === "."
            ? C.jsx(
                "div",
                {
                  className:
                    "w-2 h-2 rounded-full bg-red-500 inline-block ml-5 mr-5",
                },
                e.title + t
              )
            : C.jsx(
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
const lw = "./assets/Main Event-501cb31c.svg",
  aw = "./assets/SupportEvent-23d8b0ea.svg";
function uw() {
  return C.jsxs("div", {
    className: "mt-28  relative",
    children: [
      C.jsx("h2", {
        className: "text-white text-center font-medium text-xl mb-8",
        children: "Registrations Started",
      }),
      C.jsx("img", {
        src: lw,
        alt: "main event logo",
        className: "absolute scale-150 top-20 -translate-x-[45%]",
      }),
      C.jsx("img", {
        src: aw,
        alt: "support event logo",
        className: "absolute scale-150 right-0  top-96 translate-x-[40%]",
      }),
      C.jsxs("div", {
        className: "container mx-auto",
        children: [
          C.jsxs("div", {
            className: " bg-[#353945] mx-10 px-12 py-10 mb-5",
            children: [
              C.jsxs("section", {
                className: "mb-10",
                children: [
                  C.jsx("h3", {
                    className: "text-lg text-white font-medium leading- mb-5",
                    children:
                      "The Bisons League 23-24 - The Ultimate Basketball Championship!",
                  }),
                  C.jsx("p", {
                    className:
                      "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose",
                    children:
                      "Get ready to battle it out, as teams vie for the coveted title of the Ultimate Championship of the Year!",
                  }),
                  C.jsx("p", {
                    className:
                      "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose",
                    children:
                      "Whether you're a Rotaract club, a university powerhouse, or a force to be reckoned with, this is your platform to display the finesse that sets you apart.",
                  }),
                  C.jsx("p", {
                    className:
                      "  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose",
                    children:
                      "Don't miss out on the action; reserve your team's spot today and be part of the excitement.",
                  }),
                ],
              }),
              C.jsxs("section", {
                className: "mb-10",
                children: [
                  C.jsx("h3", {
                    className:
                      "text-lg text-white font-medium leading-relaxed mb-2",
                    children: "Event Overview",
                  }),
                  C.jsxs("p", {
                    className:
                      "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose ",
                    children: [
                      C.jsx("span", {
                        className: "font-semibold",
                        children: "Date: ",
                      }),
                      "Saturday, 21st October, 2023",
                      C.jsx("br", {}),
                      C.jsx("span", {
                        className: "font-semibold",
                        children: "Time: ",
                      }),
                      "7am-6pm",
                      C.jsx("br", {}),
                      C.jsx("span", {
                        className: "font-semibold",
                        children: "Venue: ",
                      }),
                      "St. Joseph's College, Maradana",
                    ],
                  }),
                ],
              }),
              C.jsxs("section", {
                className: "mb-10",
                children: [
                  C.jsx("h3", {
                    className:
                      "text-lg text-white font-medium leading-relaxed mb-2",
                    children: "Categories",
                  }),
                  C.jsx("div", {
                    className:
                      "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                    children: Oy.map((e) =>
                      C.jsxs(
                        "div",
                        {
                          className: "flex flex-row gap-5 items-center",
                          children: [
                            C.jsx("div", { className: "w-2 h-2 bg-[#D4D5E1]" }),
                            " ",
                            e.title,
                          ],
                        },
                        e.title
                      )
                    ),
                  }),
                ],
              }),
              C.jsxs("section", {
                className: "mb-10",
                children: [
                  C.jsx("h3", {
                    className:
                      "text-lg text-white font-medium leading-relaxed mb-2",
                    children: "Registration Fee",
                  }),
                  C.jsx("p", {
                    className:
                      "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                    children:
                      "Per Team: LKR 7000.00 (Which translate to LKR 875.00 per player)",
                  }),
                ],
              }),
              C.jsxs("section", {
                className: " flex flex-row  items-stretch justify-stretch",
                children: [
                  C.jsx("div", {
                    className: "h-200 w-3 bg-[#D4D5E1] mr-5 rounded-xl",
                  }),
                  C.jsx("p", {
                    className:
                      "text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose",
                    children:
                      "So, gear up, practice those dribbles and get your shot in!, and get ready for a high-octane championship that promises to be nothing short of electrifying. Let’s make history on the court! ...",
                  }),
                ],
              }),
            ],
          }),
          C.jsx("div", {
            className: "flex justify-center mb-5",
            children: C.jsx("div", {
              className:
                " bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg   py-4 px-5",
              children: C.jsxs("div", {
                className:
                  "text-white text-xs font-medium flex flex-row items-center ",
                children: ["Register Now     ", C.jsx(Ny, {})],
              }),
            }),
          }),
        ],
      }),
    ],
  });
}
function cw() {
  const [e, t] = E.useState(!1),
    n = () => {
      t((r) => !r);
    };
  return C.jsxs("div", {
    className: "relative w-screen h-screen overflow-x-hidden",
    style: { overflowY: e ? "hidden" : "scroll" },
    children: [
      C.jsx("div", {
        className: "container mx-auto",
        children: C.jsxs("div", {
          className: "flex flex-row px-10 items-center justify-between",
          children: [
            C.jsx("img", {
              src: jh,
              alt: "brand logo",
              className: "p-0 w-1/2 max-w-[200px] min-w-[150px]",
            }),
            C.jsx("div", {
              onClick: n,
              onKeyDown: n,
              children: C.jsx(Ay, { color: "white", size: 22 }),
            }),
          ],
        }),
      }),
      C.jsx(ow, { menuState: e, menuToggler: n }),
      C.jsx(zy, {}),
      C.jsx(By, {}),
      C.jsx(sw, {}),
      C.jsx(uw, {}),
    ],
  });
}
Ns.createRoot(document.getElementById("root")).render(
  C.jsx(rt.StrictMode, { children: C.jsx(cw, {}) })
);
