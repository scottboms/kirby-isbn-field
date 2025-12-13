import { resolveComponent as Y, createBlock as tr, openBlock as Q, mergeProps as rr, withCtx as W, createElementBlock as Le, createVNode as Ne, createElementVNode as nr, createTextVNode as ir } from "vue";
function ar(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var K = {}, L = {}, ee = {}, Ue;
function T() {
  if (Ue) return ee;
  Ue = 1, Object.defineProperty(ee, "__esModule", {
    value: !0
  });
  function _(v, l) {
    if (!(v instanceof l))
      throw new TypeError("Cannot call a class as a function");
  }
  var f = function v(l, h) {
    _(this, v), this.data = l, this.text = h.text || l, this.options = h;
  };
  return ee.default = f, ee;
}
var Ve;
function or() {
  if (Ve) return L;
  Ve = 1, Object.defineProperty(L, "__esModule", {
    value: !0
  }), L.CODE39 = void 0;
  var _ = /* @__PURE__ */ (function() {
    function u(y, p) {
      for (var g = 0; g < p.length; g++) {
        var w = p[g];
        w.enumerable = w.enumerable || !1, w.configurable = !0, "value" in w && (w.writable = !0), Object.defineProperty(y, w.key, w);
      }
    }
    return function(y, p, g) {
      return p && u(y.prototype, p), g && u(y, g), y;
    };
  })(), f = T(), v = l(f);
  function l(u) {
    return u && u.__esModule ? u : { default: u };
  }
  function h(u, y) {
    if (!(u instanceof y))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(u, y) {
    if (!u)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y && (typeof y == "object" || typeof y == "function") ? y : u;
  }
  function d(u, y) {
    if (typeof y != "function" && y !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof y);
    u.prototype = Object.create(y && y.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(u, y) : u.__proto__ = y);
  }
  var c = (function(u) {
    d(y, u);
    function y(p, g) {
      return h(this, y), p = p.toUpperCase(), g.mod43 && (p += r(o(p))), s(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, p, g));
    }
    return _(y, [{
      key: "encode",
      value: function() {
        for (var g = t("*"), w = 0; w < this.data.length; w++)
          g += t(this.data[w]) + "0";
        return g += t("*"), {
          data: g,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/) !== -1;
      }
    }]), y;
  })(v.default), a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"], e = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];
  function t(u) {
    return n(i(u));
  }
  function n(u) {
    return e[u].toString(2);
  }
  function r(u) {
    return a[u];
  }
  function i(u) {
    return a.indexOf(u);
  }
  function o(u) {
    for (var y = 0, p = 0; p < u.length; p++)
      y += i(u[p]);
    return y = y % 43, y;
  }
  return L.CODE39 = c, L;
}
var I = {}, te = {}, re = {}, x = {}, Xe;
function V() {
  if (Xe) return x;
  Xe = 1, Object.defineProperty(x, "__esModule", {
    value: !0
  });
  var _;
  function f(a, e, t) {
    return e in a ? Object.defineProperty(a, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : a[e] = t, a;
  }
  var v = x.SET_A = 0, l = x.SET_B = 1, h = x.SET_C = 2;
  x.SHIFT = 98;
  var s = x.START_A = 103, d = x.START_B = 104, c = x.START_C = 105;
  return x.MODULO = 103, x.STOP = 106, x.FNC1 = 207, x.SET_BY_CODE = (_ = {}, f(_, s, v), f(_, d, l), f(_, c, h), _), x.SWAP = {
    101: v,
    100: l,
    99: h
  }, x.A_START_CHAR = "Ð", x.B_START_CHAR = "Ñ", x.C_START_CHAR = "Ò", x.A_CHARS = "[\0-_È-Ï]", x.B_CHARS = "[ -È-Ï]", x.C_CHARS = "(Ï*[0-9]{2}Ï*)", x.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011], x;
}
var ze;
function Be() {
  if (ze) return re;
  ze = 1, Object.defineProperty(re, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), f = T(), v = h(f), l = V();
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      s(this, t);
      var i = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n.substring(1), r));
      return i.bytes = n.split("").map(function(o) {
        return o.charCodeAt(0);
      }), i;
    }
    return _(t, [{
      key: "valid",
      value: function() {
        return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data);
      }
      // The public encoding function
    }, {
      key: "encode",
      value: function() {
        var r = this.bytes, i = r.shift() - 105, o = l.SET_BY_CODE[i];
        if (o === void 0)
          throw new RangeError("The encoding does not start with a start character.");
        this.shouldEncodeAsEan128() === !0 && r.unshift(l.FNC1);
        var u = t.next(r, 1, o);
        return {
          text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
          data: (
            // Add the start bits
            t.getBar(i) + // Add the encoded bits
            u.result + // Add the checksum
            t.getBar((u.checksum + i) % l.MODULO) + // Add the end bits
            t.getBar(l.STOP)
          )
        };
      }
      // GS1-128/EAN-128
    }, {
      key: "shouldEncodeAsEan128",
      value: function() {
        var r = this.options.ean128 || !1;
        return typeof r == "string" && (r = r.toLowerCase() === "true"), r;
      }
      // Get a bar symbol by index
    }], [{
      key: "getBar",
      value: function(r) {
        return l.BARS[r] ? l.BARS[r].toString() : "";
      }
      // Correct an index by a set and shift it from the bytes array
    }, {
      key: "correctIndex",
      value: function(r, i) {
        if (i === l.SET_A) {
          var o = r.shift();
          return o < 32 ? o + 64 : o - 32;
        } else return i === l.SET_B ? r.shift() - 32 : (r.shift() - 48) * 10 + r.shift() - 48;
      }
    }, {
      key: "next",
      value: function(r, i, o) {
        if (!r.length)
          return { result: "", checksum: 0 };
        var u = void 0, y = void 0;
        if (r[0] >= 200) {
          y = r.shift() - 105;
          var p = l.SWAP[y];
          p !== void 0 ? u = t.next(r, i + 1, p) : ((o === l.SET_A || o === l.SET_B) && y === l.SHIFT && (r[0] = o === l.SET_A ? r[0] > 95 ? r[0] - 96 : r[0] : r[0] < 32 ? r[0] + 96 : r[0]), u = t.next(r, i + 1, o));
        } else
          y = t.correctIndex(r, o), u = t.next(r, i + 1, o);
        var g = t.getBar(y), w = y * i;
        return {
          result: g + u.result,
          checksum: w + u.checksum
        };
      }
    }]), t;
  })(v.default);
  return re.default = a, re;
}
var ne = {}, Je;
function ur() {
  if (Je) return ne;
  Je = 1, Object.defineProperty(ne, "__esModule", {
    value: !0
  });
  var _ = V(), f = function(c) {
    return c.match(new RegExp("^" + _.A_CHARS + "*"))[0].length;
  }, v = function(c) {
    return c.match(new RegExp("^" + _.B_CHARS + "*"))[0].length;
  }, l = function(c) {
    return c.match(new RegExp("^" + _.C_CHARS + "*"))[0];
  };
  function h(d, c) {
    var a = c ? _.A_CHARS : _.B_CHARS, e = d.match(new RegExp("^(" + a + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
    if (e)
      return e[1] + "Ì" + s(d.substring(e[1].length));
    var t = d.match(new RegExp("^" + a + "+"))[0];
    return t.length === d.length ? d : t + String.fromCharCode(c ? 205 : 206) + h(d.substring(t.length), !c);
  }
  function s(d) {
    var c = l(d), a = c.length;
    if (a === d.length)
      return d;
    d = d.substring(a);
    var e = f(d) >= v(d);
    return c + String.fromCharCode(e ? 206 : 205) + h(d, e);
  }
  return ne.default = function(d) {
    var c = void 0, a = l(d).length;
    if (a >= 2)
      c = _.C_START_CHAR + s(d);
    else {
      var e = f(d) > v(d);
      c = (e ? _.A_START_CHAR : _.B_START_CHAR) + h(d, e);
    }
    return c.replace(
      /[\xCD\xCE]([^])[\xCD\xCE]/,
      // Any sequence between 205 and 206 characters
      function(t, n) {
        return "Ë" + n;
      }
    );
  }, ne;
}
var Ze;
function fr() {
  if (Ze) return te;
  Ze = 1, Object.defineProperty(te, "__esModule", {
    value: !0
  });
  var _ = Be(), f = h(_), v = ur(), l = h(v);
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      if (s(this, t), /^[\x00-\x7F\xC8-\xD3]+$/.test(n))
        var i = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, (0, l.default)(n), r));
      else
        var i = d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
      return d(i);
    }
    return t;
  })(f.default);
  return te.default = a, te;
}
var ie = {}, Ye;
function cr() {
  if (Ye) return ie;
  Ye = 1, Object.defineProperty(ie, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), f = Be(), v = h(f), l = V();
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      return s(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, l.A_START_CHAR + n, r));
    }
    return _(t, [{
      key: "valid",
      value: function() {
        return new RegExp("^" + l.A_CHARS + "+$").test(this.data);
      }
    }]), t;
  })(v.default);
  return ie.default = a, ie;
}
var ae = {}, Qe;
function lr() {
  if (Qe) return ae;
  Qe = 1, Object.defineProperty(ae, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), f = Be(), v = h(f), l = V();
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      return s(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, l.B_START_CHAR + n, r));
    }
    return _(t, [{
      key: "valid",
      value: function() {
        return new RegExp("^" + l.B_CHARS + "+$").test(this.data);
      }
    }]), t;
  })(v.default);
  return ae.default = a, ae;
}
var oe = {}, We;
function dr() {
  if (We) return oe;
  We = 1, Object.defineProperty(oe, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), f = Be(), v = h(f), l = V();
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      return s(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, l.C_START_CHAR + n, r));
    }
    return _(t, [{
      key: "valid",
      value: function() {
        return new RegExp("^" + l.C_CHARS + "+$").test(this.data);
      }
    }]), t;
  })(v.default);
  return oe.default = a, oe;
}
var Ke;
function hr() {
  if (Ke) return I;
  Ke = 1, Object.defineProperty(I, "__esModule", {
    value: !0
  }), I.CODE128C = I.CODE128B = I.CODE128A = I.CODE128 = void 0;
  var _ = fr(), f = a(_), v = cr(), l = a(v), h = lr(), s = a(h), d = dr(), c = a(d);
  function a(e) {
    return e && e.__esModule ? e : { default: e };
  }
  return I.CODE128 = f.default, I.CODE128A = l.default, I.CODE128B = s.default, I.CODE128C = c.default, I;
}
var R = {}, ue = {}, k = {}, et;
function X() {
  return et || (et = 1, Object.defineProperty(k, "__esModule", {
    value: !0
  }), k.SIDE_BIN = "101", k.MIDDLE_BIN = "01010", k.BINARIES = {
    L: [
      // The L (left) type of encoding
      "0001101",
      "0011001",
      "0010011",
      "0111101",
      "0100011",
      "0110001",
      "0101111",
      "0111011",
      "0110111",
      "0001011"
    ],
    G: [
      // The G type of encoding
      "0100111",
      "0110011",
      "0011011",
      "0100001",
      "0011101",
      "0111001",
      "0000101",
      "0010001",
      "0001001",
      "0010111"
    ],
    R: [
      // The R (right) type of encoding
      "1110010",
      "1100110",
      "1101100",
      "1000010",
      "1011100",
      "1001110",
      "1010000",
      "1000100",
      "1001000",
      "1110100"
    ],
    O: [
      // The O (odd) encoding for UPC-E
      "0001101",
      "0011001",
      "0010011",
      "0111101",
      "0100011",
      "0110001",
      "0101111",
      "0111011",
      "0110111",
      "0001011"
    ],
    E: [
      // The E (even) encoding for UPC-E
      "0100111",
      "0110011",
      "0011011",
      "0100001",
      "0011101",
      "0111001",
      "0000101",
      "0010001",
      "0001001",
      "0010111"
    ]
  }, k.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"], k.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"], k.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"]), k;
}
var fe = {}, ce = {}, tt;
function z() {
  if (tt) return ce;
  tt = 1, Object.defineProperty(ce, "__esModule", {
    value: !0
  });
  var _ = X(), f = function(l, h, s) {
    var d = l.split("").map(function(a, e) {
      return _.BINARIES[h[e]];
    }).map(function(a, e) {
      return a ? a[l[e]] : "";
    });
    if (s) {
      var c = l.length - 1;
      d = d.map(function(a, e) {
        return e < c ? a + s : a;
      });
    }
    return d.join("");
  };
  return ce.default = f, ce;
}
var rt;
function Vt() {
  if (rt) return fe;
  rt = 1, Object.defineProperty(fe, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
      }
    }
    return function(r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })(), f = X(), v = z(), l = d(v), h = T(), s = d(h);
  function d(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function c(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(n, r) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function e(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r);
  }
  var t = (function(n) {
    e(r, n);
    function r(i, o) {
      c(this, r);
      var u = a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o));
      return u.fontSize = !o.flat && o.fontSize > o.width * 10 ? o.width * 10 : o.fontSize, u.guardHeight = o.height + u.fontSize / 2 + o.textMargin, u;
    }
    return _(r, [{
      key: "encode",
      value: function() {
        return this.options.flat ? this.encodeFlat() : this.encodeGuarded();
      }
    }, {
      key: "leftText",
      value: function(o, u) {
        return this.text.substr(o, u);
      }
    }, {
      key: "leftEncode",
      value: function(o, u) {
        return (0, l.default)(o, u);
      }
    }, {
      key: "rightText",
      value: function(o, u) {
        return this.text.substr(o, u);
      }
    }, {
      key: "rightEncode",
      value: function(o, u) {
        return (0, l.default)(o, u);
      }
    }, {
      key: "encodeGuarded",
      value: function() {
        var o = { fontSize: this.fontSize }, u = { height: this.guardHeight };
        return [{ data: f.SIDE_BIN, options: u }, { data: this.leftEncode(), text: this.leftText(), options: o }, { data: f.MIDDLE_BIN, options: u }, { data: this.rightEncode(), text: this.rightText(), options: o }, { data: f.SIDE_BIN, options: u }];
      }
    }, {
      key: "encodeFlat",
      value: function() {
        var o = [f.SIDE_BIN, this.leftEncode(), f.MIDDLE_BIN, this.rightEncode(), f.SIDE_BIN];
        return {
          data: o.join(""),
          text: this.text
        };
      }
    }]), r;
  })(s.default);
  return fe.default = t, fe;
}
var nt;
function vr() {
  if (nt) return ue;
  nt = 1, Object.defineProperty(ue, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
      }
    }
    return function(r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })(), f = function n(r, i, o) {
    r === null && (r = Function.prototype);
    var u = Object.getOwnPropertyDescriptor(r, i);
    if (u === void 0) {
      var y = Object.getPrototypeOf(r);
      return y === null ? void 0 : n(y, i, o);
    } else {
      if ("value" in u)
        return u.value;
      var p = u.get;
      return p === void 0 ? void 0 : p.call(o);
    }
  }, v = X(), l = Vt(), h = s(l);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function d(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function c(n, r) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function a(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r);
  }
  var e = function(r) {
    var i = r.substr(0, 12).split("").map(function(o) {
      return +o;
    }).reduce(function(o, u, y) {
      return y % 2 ? o + u * 3 : o + u;
    }, 0);
    return (10 - i % 10) % 10;
  }, t = (function(n) {
    a(r, n);
    function r(i, o) {
      d(this, r), i.search(/^[0-9]{12}$/) !== -1 && (i += e(i));
      var u = c(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o));
      return u.lastChar = o.lastChar, u;
    }
    return _(r, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{13}$/) !== -1 && +this.data[12] === e(this.data);
      }
    }, {
      key: "leftText",
      value: function() {
        return f(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "leftText", this).call(this, 1, 6);
      }
    }, {
      key: "leftEncode",
      value: function() {
        var o = this.data.substr(1, 6), u = v.EAN13_STRUCTURE[this.data[0]];
        return f(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "leftEncode", this).call(this, o, u);
      }
    }, {
      key: "rightText",
      value: function() {
        return f(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "rightText", this).call(this, 7, 6);
      }
    }, {
      key: "rightEncode",
      value: function() {
        var o = this.data.substr(7, 6);
        return f(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "rightEncode", this).call(this, o, "RRRRRR");
      }
      // The "standard" way of printing EAN13 barcodes with guard bars
    }, {
      key: "encodeGuarded",
      value: function() {
        var o = f(r.prototype.__proto__ || Object.getPrototypeOf(r.prototype), "encodeGuarded", this).call(this);
        return this.options.displayValue && (o.unshift({
          data: "000000000000",
          text: this.text.substr(0, 1),
          options: { textAlign: "left", fontSize: this.fontSize }
        }), this.options.lastChar && (o.push({
          data: "00"
        }), o.push({
          data: "00000",
          text: this.options.lastChar,
          options: { fontSize: this.fontSize }
        }))), o;
      }
    }]), r;
  })(h.default);
  return ue.default = t, ue;
}
var le = {}, it;
function _r() {
  if (it) return le;
  it = 1, Object.defineProperty(le, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function t(n, r) {
      for (var i = 0; i < r.length; i++) {
        var o = r[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(n, o.key, o);
      }
    }
    return function(n, r, i) {
      return r && t(n.prototype, r), i && t(n, i), n;
    };
  })(), f = function t(n, r, i) {
    n === null && (n = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(n, r);
    if (o === void 0) {
      var u = Object.getPrototypeOf(n);
      return u === null ? void 0 : t(u, r, i);
    } else {
      if ("value" in o)
        return o.value;
      var y = o.get;
      return y === void 0 ? void 0 : y.call(i);
    }
  }, v = Vt(), l = h(v);
  function h(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function s(t, n) {
    if (!(t instanceof n))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(t, n) {
    if (!t)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return n && (typeof n == "object" || typeof n == "function") ? n : t;
  }
  function c(t, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof n);
    t.prototype = Object.create(n && n.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(t, n) : t.__proto__ = n);
  }
  var a = function(n) {
    var r = n.substr(0, 7).split("").map(function(i) {
      return +i;
    }).reduce(function(i, o, u) {
      return u % 2 ? i + o : i + o * 3;
    }, 0);
    return (10 - r % 10) % 10;
  }, e = (function(t) {
    c(n, t);
    function n(r, i) {
      return s(this, n), r.search(/^[0-9]{7}$/) !== -1 && (r += a(r)), d(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r, i));
    }
    return _(n, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{8}$/) !== -1 && +this.data[7] === a(this.data);
      }
    }, {
      key: "leftText",
      value: function() {
        return f(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "leftText", this).call(this, 0, 4);
      }
    }, {
      key: "leftEncode",
      value: function() {
        var i = this.data.substr(0, 4);
        return f(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "leftEncode", this).call(this, i, "LLLL");
      }
    }, {
      key: "rightText",
      value: function() {
        return f(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "rightText", this).call(this, 4, 4);
      }
    }, {
      key: "rightEncode",
      value: function() {
        var i = this.data.substr(4, 4);
        return f(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "rightEncode", this).call(this, i, "RRRR");
      }
    }]), n;
  })(l.default);
  return le.default = e, le;
}
var de = {}, at;
function sr() {
  if (at) return de;
  at = 1, Object.defineProperty(de, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function r(i, o) {
      for (var u = 0; u < o.length; u++) {
        var y = o[u];
        y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(i, y.key, y);
      }
    }
    return function(i, o, u) {
      return o && r(i.prototype, o), u && r(i, u), i;
    };
  })(), f = X(), v = z(), l = d(v), h = T(), s = d(h);
  function d(r) {
    return r && r.__esModule ? r : { default: r };
  }
  function c(r, i) {
    if (!(r instanceof i))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(r, i) {
    if (!r)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return i && (typeof i == "object" || typeof i == "function") ? i : r;
  }
  function e(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof i);
    r.prototype = Object.create(i && i.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), i && (Object.setPrototypeOf ? Object.setPrototypeOf(r, i) : r.__proto__ = i);
  }
  var t = function(i) {
    var o = i.split("").map(function(u) {
      return +u;
    }).reduce(function(u, y, p) {
      return p % 2 ? u + y * 9 : u + y * 3;
    }, 0);
    return o % 10;
  }, n = (function(r) {
    e(i, r);
    function i(o, u) {
      return c(this, i), a(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, o, u));
    }
    return _(i, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{5}$/) !== -1;
      }
    }, {
      key: "encode",
      value: function() {
        var u = f.EAN5_STRUCTURE[t(this.data)];
        return {
          data: "1011" + (0, l.default)(this.data, u, "01"),
          text: this.text
        };
      }
    }]), i;
  })(s.default);
  return de.default = n, de;
}
var he = {}, ot;
function yr() {
  if (ot) return he;
  ot = 1, Object.defineProperty(he, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
      }
    }
    return function(r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })(), f = X(), v = z(), l = d(v), h = T(), s = d(h);
  function d(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function c(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(n, r) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function e(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r);
  }
  var t = (function(n) {
    e(r, n);
    function r(i, o) {
      return c(this, r), a(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o));
    }
    return _(r, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{2}$/) !== -1;
      }
    }, {
      key: "encode",
      value: function() {
        var o = f.EAN2_STRUCTURE[parseInt(this.data) % 4];
        return {
          // Start bits + Encode the two digits with 01 in between
          data: "1011" + (0, l.default)(this.data, o, "01"),
          text: this.text
        };
      }
    }]), r;
  })(s.default);
  return he.default = t, he;
}
var N = {}, ut;
function Xt() {
  if (ut) return N;
  ut = 1, Object.defineProperty(N, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function n(r, i) {
      for (var o = 0; o < i.length; o++) {
        var u = i[o];
        u.enumerable = u.enumerable || !1, u.configurable = !0, "value" in u && (u.writable = !0), Object.defineProperty(r, u.key, u);
      }
    }
    return function(r, i, o) {
      return i && n(r.prototype, i), o && n(r, o), r;
    };
  })();
  N.checksum = t;
  var f = z(), v = s(f), l = T(), h = s(l);
  function s(n) {
    return n && n.__esModule ? n : { default: n };
  }
  function d(n, r) {
    if (!(n instanceof r))
      throw new TypeError("Cannot call a class as a function");
  }
  function c(n, r) {
    if (!n)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return r && (typeof r == "object" || typeof r == "function") ? r : n;
  }
  function a(n, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof r);
    n.prototype = Object.create(r && r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(n, r) : n.__proto__ = r);
  }
  var e = (function(n) {
    a(r, n);
    function r(i, o) {
      d(this, r), i.search(/^[0-9]{11}$/) !== -1 && (i += t(i));
      var u = c(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i, o));
      return u.displayValue = o.displayValue, o.fontSize > o.width * 10 ? u.fontSize = o.width * 10 : u.fontSize = o.fontSize, u.guardHeight = o.height + u.fontSize / 2 + o.textMargin, u;
    }
    return _(r, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{12}$/) !== -1 && this.data[11] == t(this.data);
      }
    }, {
      key: "encode",
      value: function() {
        return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
      }
    }, {
      key: "flatEncoding",
      value: function() {
        var o = "";
        return o += "101", o += (0, v.default)(this.data.substr(0, 6), "LLLLLL"), o += "01010", o += (0, v.default)(this.data.substr(6, 6), "RRRRRR"), o += "101", {
          data: o,
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function() {
        var o = [];
        return this.displayValue && o.push({
          data: "00000000",
          text: this.text.substr(0, 1),
          options: { textAlign: "left", fontSize: this.fontSize }
        }), o.push({
          data: "101" + (0, v.default)(this.data[0], "L"),
          options: { height: this.guardHeight }
        }), o.push({
          data: (0, v.default)(this.data.substr(1, 5), "LLLLL"),
          text: this.text.substr(1, 5),
          options: { fontSize: this.fontSize }
        }), o.push({
          data: "01010",
          options: { height: this.guardHeight }
        }), o.push({
          data: (0, v.default)(this.data.substr(6, 5), "RRRRR"),
          text: this.text.substr(6, 5),
          options: { fontSize: this.fontSize }
        }), o.push({
          data: (0, v.default)(this.data[11], "R") + "101",
          options: { height: this.guardHeight }
        }), this.displayValue && o.push({
          data: "00000000",
          text: this.text.substr(11, 1),
          options: { textAlign: "right", fontSize: this.fontSize }
        }), o;
      }
    }]), r;
  })(h.default);
  function t(n) {
    var r = 0, i;
    for (i = 1; i < 11; i += 2)
      r += parseInt(n[i]);
    for (i = 0; i < 11; i += 2)
      r += parseInt(n[i]) * 3;
    return (10 - r % 10) % 10;
  }
  return N.default = e, N;
}
var ve = {}, ft;
function pr() {
  if (ft) return ve;
  ft = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function o(u, y) {
      for (var p = 0; p < y.length; p++) {
        var g = y[p];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(u, g.key, g);
      }
    }
    return function(u, y, p) {
      return y && o(u.prototype, y), p && o(u, p), u;
    };
  })(), f = z(), v = d(f), l = T(), h = d(l), s = Xt();
  function d(o) {
    return o && o.__esModule ? o : { default: o };
  }
  function c(o, u) {
    if (!(o instanceof u))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(o, u) {
    if (!o)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u && (typeof u == "object" || typeof u == "function") ? u : o;
  }
  function e(o, u) {
    if (typeof u != "function" && u !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof u);
    o.prototype = Object.create(u && u.prototype, { constructor: { value: o, enumerable: !1, writable: !0, configurable: !0 } }), u && (Object.setPrototypeOf ? Object.setPrototypeOf(o, u) : o.__proto__ = u);
  }
  var t = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"], n = [["EEEOOO", "OOOEEE"], ["EEOEOO", "OOEOEE"], ["EEOOEO", "OOEEOE"], ["EEOOOE", "OOEEEO"], ["EOEEOO", "OEOOEE"], ["EOOEEO", "OEEOOE"], ["EOOOEE", "OEEEOO"], ["EOEOEO", "OEOEOE"], ["EOEOOE", "OEOEEO"], ["EOOEOE", "OEEOEO"]], r = (function(o) {
    e(u, o);
    function u(y, p) {
      c(this, u);
      var g = a(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, y, p));
      if (g.isValid = !1, y.search(/^[0-9]{6}$/) !== -1)
        g.middleDigits = y, g.upcA = i(y, "0"), g.text = p.text || "" + g.upcA[0] + y + g.upcA[g.upcA.length - 1], g.isValid = !0;
      else if (y.search(/^[01][0-9]{7}$/) !== -1)
        if (g.middleDigits = y.substring(1, y.length - 1), g.upcA = i(g.middleDigits, y[0]), g.upcA[g.upcA.length - 1] === y[y.length - 1])
          g.isValid = !0;
        else
          return a(g);
      else
        return a(g);
      return g.displayValue = p.displayValue, p.fontSize > p.width * 10 ? g.fontSize = p.width * 10 : g.fontSize = p.fontSize, g.guardHeight = p.height + g.fontSize / 2 + p.textMargin, g;
    }
    return _(u, [{
      key: "valid",
      value: function() {
        return this.isValid;
      }
    }, {
      key: "encode",
      value: function() {
        return this.options.flat ? this.flatEncoding() : this.guardedEncoding();
      }
    }, {
      key: "flatEncoding",
      value: function() {
        var p = "";
        return p += "101", p += this.encodeMiddleDigits(), p += "010101", {
          data: p,
          text: this.text
        };
      }
    }, {
      key: "guardedEncoding",
      value: function() {
        var p = [];
        return this.displayValue && p.push({
          data: "00000000",
          text: this.text[0],
          options: { textAlign: "left", fontSize: this.fontSize }
        }), p.push({
          data: "101",
          options: { height: this.guardHeight }
        }), p.push({
          data: this.encodeMiddleDigits(),
          text: this.text.substring(1, 7),
          options: { fontSize: this.fontSize }
        }), p.push({
          data: "010101",
          options: { height: this.guardHeight }
        }), this.displayValue && p.push({
          data: "00000000",
          text: this.text[7],
          options: { textAlign: "right", fontSize: this.fontSize }
        }), p;
      }
    }, {
      key: "encodeMiddleDigits",
      value: function() {
        var p = this.upcA[0], g = this.upcA[this.upcA.length - 1], w = n[parseInt(g)][parseInt(p)];
        return (0, v.default)(this.middleDigits, w);
      }
    }]), u;
  })(h.default);
  function i(o, u) {
    for (var y = parseInt(o[o.length - 1]), p = t[y], g = "", w = 0, B = 0; B < p.length; B++) {
      var Z = p[B];
      Z === "X" ? g += o[w++] : g += Z;
    }
    return g = "" + u + g, "" + g + (0, s.checksum)(g);
  }
  return ve.default = r, ve;
}
var ct;
function gr() {
  if (ct) return R;
  ct = 1, Object.defineProperty(R, "__esModule", {
    value: !0
  }), R.UPCE = R.UPC = R.EAN2 = R.EAN5 = R.EAN8 = R.EAN13 = void 0;
  var _ = vr(), f = r(_), v = _r(), l = r(v), h = sr(), s = r(h), d = yr(), c = r(d), a = Xt(), e = r(a), t = pr(), n = r(t);
  function r(i) {
    return i && i.__esModule ? i : { default: i };
  }
  return R.EAN13 = f.default, R.EAN8 = l.default, R.EAN5 = s.default, R.EAN2 = c.default, R.UPC = e.default, R.UPCE = n.default, R;
}
var D = {}, _e = {}, q = {}, lt;
function Er() {
  return lt || (lt = 1, Object.defineProperty(q, "__esModule", {
    value: !0
  }), q.START_BIN = "1010", q.END_BIN = "11101", q.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"]), q;
}
var dt;
function zt() {
  if (dt) return _e;
  dt = 1, Object.defineProperty(_e, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), f = Er(), v = T(), l = h(v);
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t() {
      return s(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }
    return _(t, [{
      key: "valid",
      value: function() {
        return this.data.search(/^([0-9]{2})+$/) !== -1;
      }
    }, {
      key: "encode",
      value: function() {
        var r = this, i = this.data.match(/.{2}/g).map(function(o) {
          return r.encodePair(o);
        }).join("");
        return {
          data: f.START_BIN + i + f.END_BIN,
          text: this.text
        };
      }
      // Calculate the data of a number pair
    }, {
      key: "encodePair",
      value: function(r) {
        var i = f.BINARIES[r[1]];
        return f.BINARIES[r[0]].split("").map(function(o, u) {
          return (o === "1" ? "111" : "1") + (i[u] === "1" ? "000" : "0");
        }).join("");
      }
    }]), t;
  })(l.default);
  return _e.default = a, _e;
}
var se = {}, ht;
function Or() {
  if (ht) return se;
  ht = 1, Object.defineProperty(se, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), f = zt(), v = l(f);
  function l(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function h(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function d(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var c = function(t) {
    var n = t.substr(0, 13).split("").map(function(r) {
      return parseInt(r, 10);
    }).reduce(function(r, i, o) {
      return r + i * (3 - o % 2 * 2);
    }, 0);
    return Math.ceil(n / 10) * 10 - n;
  }, a = (function(e) {
    d(t, e);
    function t(n, r) {
      return h(this, t), n.search(/^[0-9]{13}$/) !== -1 && (n += c(n)), s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
    }
    return _(t, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]{14}$/) !== -1 && +this.data[13] === c(this.data);
      }
    }]), t;
  })(v.default);
  return se.default = a, se;
}
var vt;
function br() {
  if (vt) return D;
  vt = 1, Object.defineProperty(D, "__esModule", {
    value: !0
  }), D.ITF14 = D.ITF = void 0;
  var _ = zt(), f = h(_), v = Or(), l = h(v);
  function h(s) {
    return s && s.__esModule ? s : { default: s };
  }
  return D.ITF = f.default, D.ITF14 = l.default, D;
}
var A = {}, ye = {}, _t;
function J() {
  if (_t) return ye;
  _t = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), f = T(), v = l(f);
  function l(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function h(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function d(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var c = (function(e) {
    d(t, e);
    function t(n, r) {
      return h(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
    }
    return _(t, [{
      key: "encode",
      value: function() {
        for (var r = "110", i = 0; i < this.data.length; i++) {
          var o = parseInt(this.data[i]), u = o.toString(2);
          u = a(u, 4 - u.length);
          for (var y = 0; y < u.length; y++)
            r += u[y] == "0" ? "100" : "110";
        }
        return r += "1001", {
          data: r,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function() {
        return this.data.search(/^[0-9]+$/) !== -1;
      }
    }]), t;
  })(v.default);
  function a(e, t) {
    for (var n = 0; n < t; n++)
      e = "0" + e;
    return e;
  }
  return ye.default = c, ye;
}
var pe = {}, G = {}, st;
function qe() {
  if (st) return G;
  st = 1, Object.defineProperty(G, "__esModule", {
    value: !0
  }), G.mod10 = _, G.mod11 = f;
  function _(v) {
    for (var l = 0, h = 0; h < v.length; h++) {
      var s = parseInt(v[h]);
      (h + v.length) % 2 === 0 ? l += s : l += s * 2 % 10 + Math.floor(s * 2 / 10);
    }
    return (10 - l % 10) % 10;
  }
  function f(v) {
    for (var l = 0, h = [2, 3, 4, 5, 6, 7], s = 0; s < v.length; s++) {
      var d = parseInt(v[v.length - 1 - s]);
      l += h[s % h.length] * d;
    }
    return (11 - l % 11) % 11;
  }
  return G;
}
var yt;
function mr() {
  if (yt) return pe;
  yt = 1, Object.defineProperty(pe, "__esModule", {
    value: !0
  });
  var _ = J(), f = l(_), v = qe();
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function d(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    d(e, a);
    function e(t, n) {
      return h(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, v.mod10)(t), n));
    }
    return e;
  })(f.default);
  return pe.default = c, pe;
}
var ge = {}, pt;
function wr() {
  if (pt) return ge;
  pt = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  });
  var _ = J(), f = l(_), v = qe();
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function d(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    d(e, a);
    function e(t, n) {
      return h(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, v.mod11)(t), n));
    }
    return e;
  })(f.default);
  return ge.default = c, ge;
}
var Ee = {}, gt;
function xr() {
  if (gt) return Ee;
  gt = 1, Object.defineProperty(Ee, "__esModule", {
    value: !0
  });
  var _ = J(), f = l(_), v = qe();
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function d(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    d(e, a);
    function e(t, n) {
      return h(this, e), t += (0, v.mod10)(t), t += (0, v.mod10)(t), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return e;
  })(f.default);
  return Ee.default = c, Ee;
}
var Oe = {}, Et;
function Sr() {
  if (Et) return Oe;
  Et = 1, Object.defineProperty(Oe, "__esModule", {
    value: !0
  });
  var _ = J(), f = l(_), v = qe();
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function d(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    d(e, a);
    function e(t, n) {
      return h(this, e), t += (0, v.mod11)(t), t += (0, v.mod10)(t), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return e;
  })(f.default);
  return Oe.default = c, Oe;
}
var Ot;
function Rr() {
  if (Ot) return A;
  Ot = 1, Object.defineProperty(A, "__esModule", {
    value: !0
  }), A.MSI1110 = A.MSI1010 = A.MSI11 = A.MSI10 = A.MSI = void 0;
  var _ = J(), f = t(_), v = mr(), l = t(v), h = wr(), s = t(h), d = xr(), c = t(d), a = Sr(), e = t(a);
  function t(n) {
    return n && n.__esModule ? n : { default: n };
  }
  return A.MSI = f.default, A.MSI10 = l.default, A.MSI11 = s.default, A.MSI1010 = c.default, A.MSI1110 = e.default, A;
}
var F = {}, bt;
function Ar() {
  if (bt) return F;
  bt = 1, Object.defineProperty(F, "__esModule", {
    value: !0
  }), F.pharmacode = void 0;
  var _ = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), f = T(), v = l(f);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function d(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    d(e, a);
    function e(t, n) {
      h(this, e);
      var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
      return r.number = parseInt(t, 10), r;
    }
    return _(e, [{
      key: "encode",
      value: function() {
        for (var n = this.number, r = ""; !isNaN(n) && n != 0; )
          n % 2 === 0 ? (r = "11100" + r, n = (n - 2) / 2) : (r = "100" + r, n = (n - 1) / 2);
        return r = r.slice(0, -2), {
          data: r,
          text: this.text
        };
      }
    }, {
      key: "valid",
      value: function() {
        return this.number >= 3 && this.number <= 131070;
      }
    }]), e;
  })(v.default);
  return F.pharmacode = c, F;
}
var H = {}, mt;
function Pr() {
  if (mt) return H;
  mt = 1, Object.defineProperty(H, "__esModule", {
    value: !0
  }), H.codabar = void 0;
  var _ = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), f = T(), v = l(f);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function d(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    d(e, a);
    function e(t, n) {
      h(this, e), t.search(/^[0-9\-\$\:\.\+\/]+$/) === 0 && (t = "A" + t + "A");
      var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.toUpperCase(), n));
      return r.text = r.options.text || r.text.replace(/[A-D]/g, ""), r;
    }
    return _(e, [{
      key: "valid",
      value: function() {
        return this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/) !== -1;
      }
    }, {
      key: "encode",
      value: function() {
        for (var n = [], r = this.getEncodings(), i = 0; i < this.data.length; i++)
          n.push(r[this.data.charAt(i)]), i !== this.data.length - 1 && n.push("0");
        return {
          text: this.text,
          data: n.join("")
        };
      }
    }, {
      key: "getEncodings",
      value: function() {
        return {
          0: "101010011",
          1: "101011001",
          2: "101001011",
          3: "110010101",
          4: "101101001",
          5: "110101001",
          6: "100101011",
          7: "100101101",
          8: "100110101",
          9: "110100101",
          "-": "101001101",
          $: "101100101",
          ":": "1101011011",
          "/": "1101101011",
          ".": "1101101101",
          "+": "1011011011",
          A: "1011001001",
          B: "1001001011",
          C: "1010010011",
          D: "1010011001"
        };
      }
    }]), e;
  })(v.default);
  return H.codabar = c, H;
}
var C = {}, be = {}, $ = {}, wt;
function Tr() {
  return wt || (wt = 1, Object.defineProperty($, "__esModule", {
    value: !0
  }), $.SYMBOLS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "-",
    ".",
    " ",
    "$",
    "/",
    "+",
    "%",
    // Only used for csum and multi-symbols character encodings
    "($)",
    "(%)",
    "(/)",
    "(+)",
    // Start/Stop
    "ÿ"
  ], $.BINARIES = ["100010100", "101001000", "101000100", "101000010", "100101000", "100100100", "100100010", "101010000", "100010010", "100001010", "110101000", "110100100", "110100010", "110010100", "110010010", "110001010", "101101000", "101100100", "101100010", "100110100", "100011010", "101011000", "101001100", "101000110", "100101100", "100010110", "110110100", "110110010", "110101100", "110100110", "110010110", "110011010", "101101100", "101100110", "100110110", "100111010", "100101110", "111010100", "111010010", "111001010", "101101110", "101110110", "110101110", "100100110", "111011010", "111010110", "100110010", "101011110"], $.MULTI_SYMBOLS = {
    "\0": ["(%)", "U"],
    "": ["($)", "A"],
    "": ["($)", "B"],
    "": ["($)", "C"],
    "": ["($)", "D"],
    "": ["($)", "E"],
    "": ["($)", "F"],
    "\x07": ["($)", "G"],
    "\b": ["($)", "H"],
    "	": ["($)", "I"],
    "\n": ["($)", "J"],
    "\v": ["($)", "K"],
    "\f": ["($)", "L"],
    "\r": ["($)", "M"],
    "": ["($)", "N"],
    "": ["($)", "O"],
    "": ["($)", "P"],
    "": ["($)", "Q"],
    "": ["($)", "R"],
    "": ["($)", "S"],
    "": ["($)", "T"],
    "": ["($)", "U"],
    "": ["($)", "V"],
    "": ["($)", "W"],
    "": ["($)", "X"],
    "": ["($)", "Y"],
    "": ["($)", "Z"],
    "\x1B": ["(%)", "A"],
    "": ["(%)", "B"],
    "": ["(%)", "C"],
    "": ["(%)", "D"],
    "": ["(%)", "E"],
    "!": ["(/)", "A"],
    '"': ["(/)", "B"],
    "#": ["(/)", "C"],
    "&": ["(/)", "F"],
    "'": ["(/)", "G"],
    "(": ["(/)", "H"],
    ")": ["(/)", "I"],
    "*": ["(/)", "J"],
    ",": ["(/)", "L"],
    ":": ["(/)", "Z"],
    ";": ["(%)", "F"],
    "<": ["(%)", "G"],
    "=": ["(%)", "H"],
    ">": ["(%)", "I"],
    "?": ["(%)", "J"],
    "@": ["(%)", "V"],
    "[": ["(%)", "K"],
    "\\": ["(%)", "L"],
    "]": ["(%)", "M"],
    "^": ["(%)", "N"],
    _: ["(%)", "O"],
    "`": ["(%)", "W"],
    a: ["(+)", "A"],
    b: ["(+)", "B"],
    c: ["(+)", "C"],
    d: ["(+)", "D"],
    e: ["(+)", "E"],
    f: ["(+)", "F"],
    g: ["(+)", "G"],
    h: ["(+)", "H"],
    i: ["(+)", "I"],
    j: ["(+)", "J"],
    k: ["(+)", "K"],
    l: ["(+)", "L"],
    m: ["(+)", "M"],
    n: ["(+)", "N"],
    o: ["(+)", "O"],
    p: ["(+)", "P"],
    q: ["(+)", "Q"],
    r: ["(+)", "R"],
    s: ["(+)", "S"],
    t: ["(+)", "T"],
    u: ["(+)", "U"],
    v: ["(+)", "V"],
    w: ["(+)", "W"],
    x: ["(+)", "X"],
    y: ["(+)", "Y"],
    z: ["(+)", "Z"],
    "{": ["(%)", "P"],
    "|": ["(%)", "Q"],
    "}": ["(%)", "R"],
    "~": ["(%)", "S"],
    "": ["(%)", "T"]
  }), $;
}
var xt;
function Jt() {
  if (xt) return be;
  xt = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }
    return function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(), f = Tr(), v = T(), l = h(v);
  function h(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function s(e, t) {
    if (!(e instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(e, t) {
    if (!e)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && (typeof t == "object" || typeof t == "function") ? t : e;
  }
  function c(e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }
  var a = (function(e) {
    c(t, e);
    function t(n, r) {
      return s(this, t), d(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n, r));
    }
    return _(t, [{
      key: "valid",
      value: function() {
        return /^[0-9A-Z\-. $/+%]+$/.test(this.data);
      }
    }, {
      key: "encode",
      value: function() {
        var r = this.data.split("").flatMap(function(y) {
          return f.MULTI_SYMBOLS[y] || y;
        }), i = r.map(function(y) {
          return t.getEncoding(y);
        }).join(""), o = t.checksum(r, 20), u = t.checksum(r.concat(o), 15);
        return {
          text: this.text,
          data: (
            // Add the start bits
            t.getEncoding("ÿ") + // Add the encoded bits
            i + // Add the checksum
            t.getEncoding(o) + t.getEncoding(u) + // Add the stop bits
            t.getEncoding("ÿ") + // Add the termination bit
            "1"
          )
        };
      }
      // Get the binary encoding of a symbol
    }], [{
      key: "getEncoding",
      value: function(r) {
        return f.BINARIES[t.symbolValue(r)];
      }
      // Get the symbol for a symbol value
    }, {
      key: "getSymbol",
      value: function(r) {
        return f.SYMBOLS[r];
      }
      // Get the symbol value of a symbol
    }, {
      key: "symbolValue",
      value: function(r) {
        return f.SYMBOLS.indexOf(r);
      }
      // Calculate a checksum symbol
    }, {
      key: "checksum",
      value: function(r, i) {
        var o = r.slice().reverse().reduce(function(u, y, p) {
          var g = p % i + 1;
          return u + t.symbolValue(y) * g;
        }, 0);
        return t.getSymbol(o % 47);
      }
    }]), t;
  })(l.default);
  return be.default = a, be;
}
var me = {}, St;
function Mr() {
  if (St) return me;
  St = 1, Object.defineProperty(me, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), f = Jt(), v = l(f);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function d(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    d(e, a);
    function e(t, n) {
      return h(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return _(e, [{
      key: "valid",
      value: function() {
        return /^[\x00-\x7f]+$/.test(this.data);
      }
    }]), e;
  })(v.default);
  return me.default = c, me;
}
var Rt;
function Ir() {
  if (Rt) return C;
  Rt = 1, Object.defineProperty(C, "__esModule", {
    value: !0
  }), C.CODE93FullASCII = C.CODE93 = void 0;
  var _ = Jt(), f = h(_), v = Mr(), l = h(v);
  function h(s) {
    return s && s.__esModule ? s : { default: s };
  }
  return C.CODE93 = f.default, C.CODE93FullASCII = l.default, C;
}
var U = {}, At;
function kr() {
  if (At) return U;
  At = 1, Object.defineProperty(U, "__esModule", {
    value: !0
  }), U.GenericBarcode = void 0;
  var _ = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), f = T(), v = l(f);
  function l(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function h(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(a, e) {
    if (!a)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e && (typeof e == "object" || typeof e == "function") ? e : a;
  }
  function d(a, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    a.prototype = Object.create(e && e.prototype, { constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(a, e) : a.__proto__ = e);
  }
  var c = (function(a) {
    d(e, a);
    function e(t, n) {
      return h(this, e), s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
    }
    return _(e, [{
      key: "encode",
      value: function() {
        return {
          data: "10101010101010101010101010101010101010101",
          text: this.text
        };
      }
      // Resturn true/false if the string provided is valid for this encoder
    }, {
      key: "valid",
      value: function() {
        return !0;
      }
    }]), e;
  })(v.default);
  return U.GenericBarcode = c, U;
}
var Pt;
function Dr() {
  if (Pt) return K;
  Pt = 1, Object.defineProperty(K, "__esModule", {
    value: !0
  });
  var _ = or(), f = hr(), v = gr(), l = br(), h = Rr(), s = Ar(), d = Pr(), c = Ir(), a = kr();
  return K.default = {
    CODE39: _.CODE39,
    CODE128: f.CODE128,
    CODE128A: f.CODE128A,
    CODE128B: f.CODE128B,
    CODE128C: f.CODE128C,
    EAN13: v.EAN13,
    EAN8: v.EAN8,
    EAN5: v.EAN5,
    EAN2: v.EAN2,
    UPC: v.UPC,
    UPCE: v.UPCE,
    ITF14: l.ITF14,
    ITF: l.ITF,
    MSI: h.MSI,
    MSI10: h.MSI10,
    MSI11: h.MSI11,
    MSI1010: h.MSI1010,
    MSI1110: h.MSI1110,
    pharmacode: s.pharmacode,
    codabar: d.codabar,
    CODE93: c.CODE93,
    CODE93FullASCII: c.CODE93FullASCII,
    GenericBarcode: a.GenericBarcode
  }, K;
}
var we = {}, Tt;
function $e() {
  if (Tt) return we;
  Tt = 1, Object.defineProperty(we, "__esModule", {
    value: !0
  });
  var _ = Object.assign || function(f) {
    for (var v = 1; v < arguments.length; v++) {
      var l = arguments[v];
      for (var h in l)
        Object.prototype.hasOwnProperty.call(l, h) && (f[h] = l[h]);
    }
    return f;
  };
  return we.default = function(f, v) {
    return _({}, f, v);
  }, we;
}
var xe = {}, Mt;
function Cr() {
  if (Mt) return xe;
  Mt = 1, Object.defineProperty(xe, "__esModule", {
    value: !0
  }), xe.default = _;
  function _(f) {
    var v = [];
    function l(h) {
      if (Array.isArray(h))
        for (var s = 0; s < h.length; s++)
          l(h[s]);
      else
        h.text = h.text || "", h.data = h.data || "", v.push(h);
    }
    return l(f), v;
  }
  return xe;
}
var Se = {}, It;
function Br() {
  if (It) return Se;
  It = 1, Object.defineProperty(Se, "__esModule", {
    value: !0
  }), Se.default = _;
  function _(f) {
    return f.marginTop = f.marginTop || f.margin, f.marginBottom = f.marginBottom || f.margin, f.marginRight = f.marginRight || f.margin, f.marginLeft = f.marginLeft || f.margin, f;
  }
  return Se;
}
var Re = {}, Ae = {}, Pe = {}, kt;
function Zt() {
  if (kt) return Pe;
  kt = 1, Object.defineProperty(Pe, "__esModule", {
    value: !0
  }), Pe.default = _;
  function _(f) {
    var v = ["width", "height", "textMargin", "fontSize", "margin", "marginTop", "marginBottom", "marginLeft", "marginRight"];
    for (var l in v)
      v.hasOwnProperty(l) && (l = v[l], typeof f[l] == "string" && (f[l] = parseInt(f[l], 10)));
    return typeof f.displayValue == "string" && (f.displayValue = f.displayValue != "false"), f;
  }
  return Pe;
}
var Te = {}, Dt;
function Yt() {
  if (Dt) return Te;
  Dt = 1, Object.defineProperty(Te, "__esModule", {
    value: !0
  });
  var _ = {
    width: 2,
    height: 100,
    format: "auto",
    displayValue: !0,
    fontOptions: "",
    font: "monospace",
    text: void 0,
    textAlign: "center",
    textPosition: "bottom",
    textMargin: 2,
    fontSize: 20,
    background: "#ffffff",
    lineColor: "#000000",
    margin: 10,
    marginTop: void 0,
    marginBottom: void 0,
    marginLeft: void 0,
    marginRight: void 0,
    valid: function() {
    }
  };
  return Te.default = _, Te;
}
var Ct;
function qr() {
  if (Ct) return Ae;
  Ct = 1, Object.defineProperty(Ae, "__esModule", {
    value: !0
  });
  var _ = Zt(), f = h(_), v = Yt(), l = h(v);
  function h(d) {
    return d && d.__esModule ? d : { default: d };
  }
  function s(d) {
    var c = {};
    for (var a in l.default)
      l.default.hasOwnProperty(a) && (d.hasAttribute("jsbarcode-" + a.toLowerCase()) && (c[a] = d.getAttribute("jsbarcode-" + a.toLowerCase())), d.hasAttribute("data-" + a.toLowerCase()) && (c[a] = d.getAttribute("data-" + a.toLowerCase())));
    return c.value = d.getAttribute("jsbarcode-value") || d.getAttribute("data-value"), c = (0, f.default)(c), c;
  }
  return Ae.default = s, Ae;
}
var Me = {}, Ie = {}, P = {}, Bt;
function Qt() {
  if (Bt) return P;
  Bt = 1, Object.defineProperty(P, "__esModule", {
    value: !0
  }), P.getTotalWidthOfEncodings = P.calculateEncodingAttributes = P.getBarcodePadding = P.getEncodingHeight = P.getMaximumHeightOfEncodings = void 0;
  var _ = $e(), f = v(_);
  function v(e) {
    return e && e.__esModule ? e : { default: e };
  }
  function l(e, t) {
    return t.height + (t.displayValue && e.text.length > 0 ? t.fontSize + t.textMargin : 0) + t.marginTop + t.marginBottom;
  }
  function h(e, t, n) {
    if (n.displayValue && t < e) {
      if (n.textAlign == "center")
        return Math.floor((e - t) / 2);
      if (n.textAlign == "left")
        return 0;
      if (n.textAlign == "right")
        return Math.floor(e - t);
    }
    return 0;
  }
  function s(e, t, n) {
    for (var r = 0; r < e.length; r++) {
      var i = e[r], o = (0, f.default)(t, i.options), u;
      o.displayValue ? u = a(i.text, o, n) : u = 0;
      var y = i.data.length * o.width;
      i.width = Math.ceil(Math.max(u, y)), i.height = l(i, o), i.barcodePadding = h(u, y, o);
    }
  }
  function d(e) {
    for (var t = 0, n = 0; n < e.length; n++)
      t += e[n].width;
    return t;
  }
  function c(e) {
    for (var t = 0, n = 0; n < e.length; n++)
      e[n].height > t && (t = e[n].height);
    return t;
  }
  function a(e, t, n) {
    var r;
    if (n)
      r = n;
    else if (typeof document < "u")
      r = document.createElement("canvas").getContext("2d");
    else
      return 0;
    r.font = t.fontOptions + " " + t.fontSize + "px " + t.font;
    var i = r.measureText(e);
    if (!i)
      return 0;
    var o = i.width;
    return o;
  }
  return P.getMaximumHeightOfEncodings = c, P.getEncodingHeight = l, P.getBarcodePadding = h, P.calculateEncodingAttributes = s, P.getTotalWidthOfEncodings = d, P;
}
var qt;
function $r() {
  if (qt) return Ie;
  qt = 1, Object.defineProperty(Ie, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function c(a, e) {
      for (var t = 0; t < e.length; t++) {
        var n = e[t];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(a, n.key, n);
      }
    }
    return function(a, e, t) {
      return e && c(a.prototype, e), t && c(a, t), a;
    };
  })(), f = $e(), v = h(f), l = Qt();
  function h(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function s(c, a) {
    if (!(c instanceof a))
      throw new TypeError("Cannot call a class as a function");
  }
  var d = (function() {
    function c(a, e, t) {
      s(this, c), this.canvas = a, this.encodings = e, this.options = t;
    }
    return _(c, [{
      key: "render",
      value: function() {
        if (!this.canvas.getContext)
          throw new Error("The browser does not support canvas.");
        this.prepareCanvas();
        for (var e = 0; e < this.encodings.length; e++) {
          var t = (0, v.default)(this.options, this.encodings[e].options);
          this.drawCanvasBarcode(t, this.encodings[e]), this.drawCanvasText(t, this.encodings[e]), this.moveCanvasDrawing(this.encodings[e]);
        }
        this.restoreCanvas();
      }
    }, {
      key: "prepareCanvas",
      value: function() {
        var e = this.canvas.getContext("2d");
        e.save(), (0, l.calculateEncodingAttributes)(this.encodings, this.options, e);
        var t = (0, l.getTotalWidthOfEncodings)(this.encodings), n = (0, l.getMaximumHeightOfEncodings)(this.encodings);
        this.canvas.width = t + this.options.marginLeft + this.options.marginRight, this.canvas.height = n, e.clearRect(0, 0, this.canvas.width, this.canvas.height), this.options.background && (e.fillStyle = this.options.background, e.fillRect(0, 0, this.canvas.width, this.canvas.height)), e.translate(this.options.marginLeft, 0);
      }
    }, {
      key: "drawCanvasBarcode",
      value: function(e, t) {
        var n = this.canvas.getContext("2d"), r = t.data, i;
        e.textPosition == "top" ? i = e.marginTop + e.fontSize + e.textMargin : i = e.marginTop, n.fillStyle = e.lineColor;
        for (var o = 0; o < r.length; o++) {
          var u = o * e.width + t.barcodePadding;
          r[o] === "1" ? n.fillRect(u, i, e.width, e.height) : r[o] && n.fillRect(u, i, e.width, e.height * r[o]);
        }
      }
    }, {
      key: "drawCanvasText",
      value: function(e, t) {
        var n = this.canvas.getContext("2d"), r = e.fontOptions + " " + e.fontSize + "px " + e.font;
        if (e.displayValue) {
          var i, o;
          e.textPosition == "top" ? o = e.marginTop + e.fontSize - e.textMargin : o = e.height + e.textMargin + e.marginTop + e.fontSize, n.font = r, e.textAlign == "left" || t.barcodePadding > 0 ? (i = 0, n.textAlign = "left") : e.textAlign == "right" ? (i = t.width - 1, n.textAlign = "right") : (i = t.width / 2, n.textAlign = "center"), n.fillText(t.text, i, o);
        }
      }
    }, {
      key: "moveCanvasDrawing",
      value: function(e) {
        var t = this.canvas.getContext("2d");
        t.translate(e.width, 0);
      }
    }, {
      key: "restoreCanvas",
      value: function() {
        var e = this.canvas.getContext("2d");
        e.restore();
      }
    }]), c;
  })();
  return Ie.default = d, Ie;
}
var ke = {}, $t;
function jr() {
  if ($t) return ke;
  $t = 1, Object.defineProperty(ke, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function a(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }
    return function(e, t, n) {
      return t && a(e.prototype, t), n && a(e, n), e;
    };
  })(), f = $e(), v = h(f), l = Qt();
  function h(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function s(a, e) {
    if (!(a instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var d = "http://www.w3.org/2000/svg", c = (function() {
    function a(e, t, n) {
      s(this, a), this.svg = e, this.encodings = t, this.options = n, this.document = n.xmlDocument || document;
    }
    return _(a, [{
      key: "render",
      value: function() {
        var t = this.options.marginLeft;
        this.prepareSVG();
        for (var n = 0; n < this.encodings.length; n++) {
          var r = this.encodings[n], i = (0, v.default)(this.options, r.options), o = this.createGroup(t, i.marginTop, this.svg);
          this.setGroupOptions(o, i), this.drawSvgBarcode(o, i, r), this.drawSVGText(o, i, r), t += r.width;
        }
      }
    }, {
      key: "prepareSVG",
      value: function() {
        for (; this.svg.firstChild; )
          this.svg.removeChild(this.svg.firstChild);
        (0, l.calculateEncodingAttributes)(this.encodings, this.options);
        var t = (0, l.getTotalWidthOfEncodings)(this.encodings), n = (0, l.getMaximumHeightOfEncodings)(this.encodings), r = t + this.options.marginLeft + this.options.marginRight;
        this.setSvgAttributes(r, n), this.options.background && this.drawRect(0, 0, r, n, this.svg).setAttribute("style", "fill:" + this.options.background + ";");
      }
    }, {
      key: "drawSvgBarcode",
      value: function(t, n, r) {
        var i = r.data, o;
        n.textPosition == "top" ? o = n.fontSize + n.textMargin : o = 0;
        for (var u = 0, y = 0, p = 0; p < i.length; p++)
          y = p * n.width + r.barcodePadding, i[p] === "1" ? u++ : u > 0 && (this.drawRect(y - n.width * u, o, n.width * u, n.height, t), u = 0);
        u > 0 && this.drawRect(y - n.width * (u - 1), o, n.width * u, n.height, t);
      }
    }, {
      key: "drawSVGText",
      value: function(t, n, r) {
        var i = this.document.createElementNS(d, "text");
        if (n.displayValue) {
          var o, u;
          i.setAttribute("style", "font:" + n.fontOptions + " " + n.fontSize + "px " + n.font), n.textPosition == "top" ? u = n.fontSize - n.textMargin : u = n.height + n.textMargin + n.fontSize, n.textAlign == "left" || r.barcodePadding > 0 ? (o = 0, i.setAttribute("text-anchor", "start")) : n.textAlign == "right" ? (o = r.width - 1, i.setAttribute("text-anchor", "end")) : (o = r.width / 2, i.setAttribute("text-anchor", "middle")), i.setAttribute("x", o), i.setAttribute("y", u), i.appendChild(this.document.createTextNode(r.text)), t.appendChild(i);
        }
      }
    }, {
      key: "setSvgAttributes",
      value: function(t, n) {
        var r = this.svg;
        r.setAttribute("width", t + "px"), r.setAttribute("height", n + "px"), r.setAttribute("x", "0px"), r.setAttribute("y", "0px"), r.setAttribute("viewBox", "0 0 " + t + " " + n), r.setAttribute("xmlns", d), r.setAttribute("version", "1.1"), r.setAttribute("style", "transform: translate(0,0)");
      }
    }, {
      key: "createGroup",
      value: function(t, n, r) {
        var i = this.document.createElementNS(d, "g");
        return i.setAttribute("transform", "translate(" + t + ", " + n + ")"), r.appendChild(i), i;
      }
    }, {
      key: "setGroupOptions",
      value: function(t, n) {
        t.setAttribute("style", "fill:" + n.lineColor + ";");
      }
    }, {
      key: "drawRect",
      value: function(t, n, r, i, o) {
        var u = this.document.createElementNS(d, "rect");
        return u.setAttribute("x", t), u.setAttribute("y", n), u.setAttribute("width", r), u.setAttribute("height", i), o.appendChild(u), u;
      }
    }]), a;
  })();
  return ke.default = c, ke;
}
var De = {}, jt;
function Lr() {
  if (jt) return De;
  jt = 1, Object.defineProperty(De, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function l(h, s) {
      for (var d = 0; d < s.length; d++) {
        var c = s[d];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(h, c.key, c);
      }
    }
    return function(h, s, d) {
      return s && l(h.prototype, s), d && l(h, d), h;
    };
  })();
  function f(l, h) {
    if (!(l instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var v = (function() {
    function l(h, s, d) {
      f(this, l), this.object = h, this.encodings = s, this.options = d;
    }
    return _(l, [{
      key: "render",
      value: function() {
        this.object.encodings = this.encodings;
      }
    }]), l;
  })();
  return De.default = v, De;
}
var Lt;
function Nr() {
  if (Lt) return Me;
  Lt = 1, Object.defineProperty(Me, "__esModule", {
    value: !0
  });
  var _ = $r(), f = d(_), v = jr(), l = d(v), h = Lr(), s = d(h);
  function d(c) {
    return c && c.__esModule ? c : { default: c };
  }
  return Me.default = { CanvasRenderer: f.default, SVGRenderer: l.default, ObjectRenderer: s.default }, Me;
}
var j = {}, Nt;
function Wt() {
  if (Nt) return j;
  Nt = 1, Object.defineProperty(j, "__esModule", {
    value: !0
  });
  function _(d, c) {
    if (!(d instanceof c))
      throw new TypeError("Cannot call a class as a function");
  }
  function f(d, c) {
    if (!d)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c && (typeof c == "object" || typeof c == "function") ? c : d;
  }
  function v(d, c) {
    if (typeof c != "function" && c !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof c);
    d.prototype = Object.create(c && c.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), c && (Object.setPrototypeOf ? Object.setPrototypeOf(d, c) : d.__proto__ = c);
  }
  var l = (function(d) {
    v(c, d);
    function c(a, e) {
      _(this, c);
      var t = f(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
      return t.name = "InvalidInputException", t.symbology = a, t.input = e, t.message = '"' + t.input + '" is not a valid input for ' + t.symbology, t;
    }
    return c;
  })(Error), h = (function(d) {
    v(c, d);
    function c() {
      _(this, c);
      var a = f(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
      return a.name = "InvalidElementException", a.message = "Not supported type to render on", a;
    }
    return c;
  })(Error), s = (function(d) {
    v(c, d);
    function c() {
      _(this, c);
      var a = f(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this));
      return a.name = "NoElementException", a.message = "No element to render on.", a;
    }
    return c;
  })(Error);
  return j.InvalidInputException = l, j.InvalidElementException = h, j.NoElementException = s, j;
}
var Gt;
function Gr() {
  if (Gt) return Re;
  Gt = 1, Object.defineProperty(Re, "__esModule", {
    value: !0
  });
  var _ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, f = qr(), v = d(f), l = Nr(), h = d(l), s = Wt();
  function d(t) {
    return t && t.__esModule ? t : { default: t };
  }
  function c(t) {
    if (typeof t == "string")
      return a(t);
    if (Array.isArray(t)) {
      for (var n = [], r = 0; r < t.length; r++)
        n.push(c(t[r]));
      return n;
    } else {
      if (typeof HTMLCanvasElement < "u" && t instanceof HTMLImageElement)
        return e(t);
      if (t && t.nodeName && t.nodeName.toLowerCase() === "svg" || typeof SVGElement < "u" && t instanceof SVGElement)
        return {
          element: t,
          options: (0, v.default)(t),
          renderer: h.default.SVGRenderer
        };
      if (typeof HTMLCanvasElement < "u" && t instanceof HTMLCanvasElement)
        return {
          element: t,
          options: (0, v.default)(t),
          renderer: h.default.CanvasRenderer
        };
      if (t && t.getContext)
        return {
          element: t,
          renderer: h.default.CanvasRenderer
        };
      if (t && (typeof t > "u" ? "undefined" : _(t)) === "object" && !t.nodeName)
        return {
          element: t,
          renderer: h.default.ObjectRenderer
        };
      throw new s.InvalidElementException();
    }
  }
  function a(t) {
    var n = document.querySelectorAll(t);
    if (n.length !== 0) {
      for (var r = [], i = 0; i < n.length; i++)
        r.push(c(n[i]));
      return r;
    }
  }
  function e(t) {
    var n = document.createElement("canvas");
    return {
      element: n,
      options: (0, v.default)(t),
      renderer: h.default.CanvasRenderer,
      afterRender: function() {
        t.setAttribute("src", n.toDataURL());
      }
    };
  }
  return Re.default = c, Re;
}
var Ce = {}, Ft;
function Fr() {
  if (Ft) return Ce;
  Ft = 1, Object.defineProperty(Ce, "__esModule", {
    value: !0
  });
  var _ = /* @__PURE__ */ (function() {
    function l(h, s) {
      for (var d = 0; d < s.length; d++) {
        var c = s[d];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(h, c.key, c);
      }
    }
    return function(h, s, d) {
      return s && l(h.prototype, s), d && l(h, d), h;
    };
  })();
  function f(l, h) {
    if (!(l instanceof h))
      throw new TypeError("Cannot call a class as a function");
  }
  var v = (function() {
    function l(h) {
      f(this, l), this.api = h;
    }
    return _(l, [{
      key: "handleCatch",
      value: function(s) {
        if (s.name === "InvalidInputException")
          if (this.api._options.valid !== this.api._defaults.valid)
            this.api._options.valid(!1);
          else
            throw s.message;
        else
          throw s;
        this.api.render = function() {
        };
      }
    }, {
      key: "wrapBarcodeCall",
      value: function(s) {
        try {
          var d = s.apply(void 0, arguments);
          return this.api._options.valid(!0), d;
        } catch (c) {
          return this.handleCatch(c), this.api;
        }
      }
    }]), l;
  })();
  return Ce.default = v, Ce;
}
var Ge, Ht;
function Hr() {
  if (Ht) return Ge;
  Ht = 1;
  var _ = Dr(), f = p(_), v = $e(), l = p(v), h = Cr(), s = p(h), d = Br(), c = p(d), a = Gr(), e = p(a), t = Zt(), n = p(t), r = Fr(), i = p(r), o = Wt(), u = Yt(), y = p(u);
  function p(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var g = function() {
  }, w = function(b, S, O) {
    var m = new g();
    if (typeof b > "u")
      throw Error("No element to render on was provided.");
    return m._renderProperties = (0, e.default)(b), m._encodings = [], m._options = y.default, m._errorHandler = new i.default(m), typeof S < "u" && (O = O || {}, O.format || (O.format = He()), m.options(O)[O.format](S, O).render()), m;
  };
  w.getModule = function(E) {
    return f.default[E];
  };
  for (var B in f.default)
    f.default.hasOwnProperty(B) && Z(f.default, B);
  function Z(E, b) {
    g.prototype[b] = g.prototype[b.toUpperCase()] = g.prototype[b.toLowerCase()] = function(S, O) {
      var m = this;
      return m._errorHandler.wrapBarcodeCall(function() {
        O.text = typeof O.text > "u" ? void 0 : "" + O.text;
        var M = (0, l.default)(m._options, O);
        M = (0, n.default)(M);
        var Kt = E[b], er = Fe(S, Kt, M);
        return m._encodings.push(er), m;
      });
    };
  }
  function Fe(E, b, S) {
    E = "" + E;
    var O = new b(E, S);
    if (!O.valid())
      throw new o.InvalidInputException(O.constructor.name, E);
    var m = O.encode();
    m = (0, s.default)(m);
    for (var M = 0; M < m.length; M++)
      m[M].options = (0, l.default)(S, m[M].options);
    return m;
  }
  function He() {
    return f.default.CODE128 ? "CODE128" : Object.keys(f.default)[0];
  }
  g.prototype.options = function(E) {
    return this._options = (0, l.default)(this._options, E), this;
  }, g.prototype.blank = function(E) {
    var b = new Array(E + 1).join("0");
    return this._encodings.push({ data: b }), this;
  }, g.prototype.init = function() {
    if (this._renderProperties) {
      Array.isArray(this._renderProperties) || (this._renderProperties = [this._renderProperties]);
      var E;
      for (var b in this._renderProperties) {
        E = this._renderProperties[b];
        var S = (0, l.default)(this._options, E.options);
        S.format == "auto" && (S.format = He()), this._errorHandler.wrapBarcodeCall(function() {
          var O = S.value, m = f.default[S.format.toUpperCase()], M = Fe(O, m, S);
          je(E, M, S);
        });
      }
    }
  }, g.prototype.render = function() {
    if (!this._renderProperties)
      throw new o.NoElementException();
    if (Array.isArray(this._renderProperties))
      for (var E = 0; E < this._renderProperties.length; E++)
        je(this._renderProperties[E], this._encodings, this._options);
    else
      je(this._renderProperties, this._encodings, this._options);
    return this;
  }, g.prototype._defaults = y.default;
  function je(E, b, S) {
    b = (0, s.default)(b);
    for (var O = 0; O < b.length; O++)
      b[O].options = (0, l.default)(S, b[O].options), (0, c.default)(b[O].options);
    (0, c.default)(S);
    var m = E.renderer, M = new m(E.element, b, S);
    M.render(), E.afterRender && E.afterRender();
  }
  return typeof window < "u" && (window.JsBarcode = w), typeof jQuery < "u" && (jQuery.fn.JsBarcode = function(E, b) {
    var S = [];
    return jQuery(this).each(function() {
      S.push(this);
    }), w(S, E, b);
  }), Ge = w, Ge;
}
var Ur = Hr();
const Ut = /* @__PURE__ */ ar(Ur), Vr = (_, f) => {
  const v = _.__vccOpts || _;
  for (const [l, h] of f)
    v[l] = h;
  return v;
}, Xr = {
  extends: "k-field",
  props: {
    value: String,
    emptyText: {
      type: String,
      default() {
        return this.$t("isbn.field.empty");
      }
    },
    format: {
      type: String,
      default: "ean13"
    },
    height: {
      type: Number,
      default: 80
    },
    barwidth: {
      type: Number,
      default: 2
    },
    background: {
      type: String,
      default: "#fff"
    },
    linecolor: {
      type: String,
      default: "#000"
    },
    font: {
      type: String,
      default: "monospace"
    },
    fontsize: {
      type: Number,
      default: 20
    },
    fontoptions: {
      type: String
    },
    textmargin: {
      type: Number,
      default: 2
    },
    textalign: {
      type: String,
      default: "center"
    },
    textposition: {
      type: String,
      default: "bottom"
    },
    margins: {
      type: Number,
      default: 0
    },
    margintop: {
      type: Number,
      default: null
    },
    marginright: {
      type: Number,
      default: null
    },
    marginbottom: {
      type: Number,
      default: null
    },
    marginleft: {
      type: Number,
      default: null
    },
    displayvalue: {
      type: Boolean,
      default: !0
    },
    flat: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["input", "change"],
  data() {
    return {
      svgEl: null
    };
  },
  computed: {
    hasContent() {
      return !!(this.value && this.value.trim() !== "");
    }
  },
  mounted() {
    this.svgEl = this.$refs.svgEl, this.renderBarcode();
  },
  watch: {
    value() {
      this.$nextTick(() => this.renderBarcode());
    }
  },
  methods: {
    handleSubmit(_) {
      const f = _[this.name];
      if (!this.validateIsbn(f)) {
        this.$panel.notification.info({
          message: this.$t("isbn.error.invalid"),
          icon: "alert",
          theme: "negative",
          timeout: 5e3
        });
        return;
      }
      Promise.resolve().then(() => {
        this.$emit("input", f), this.$emit("change", f), this.$nextTick(() => this.renderBarcode()), this.closeDrawer(), this.$panel.notification.success({
          message: this.$t("isbn.success.saved"),
          icon: "check",
          timeout: 4e3
        });
      }).catch(() => {
        this.$panel.notification.info({
          message: this.$t("isbn.error.unknown"),
          icon: "alert",
          theme: "negative",
          timeout: 4e3
        });
      });
    },
    openDrawer() {
      this.$panel.drawer.open({
        component: "k-form-drawer",
        props: {
          icon: "isbn",
          title: "ISBN-10/ISBN-13",
          value: {
            [this.name]: this.value
          },
          fields: {
            [this.name]: {
              label: this.$t("isbn.field.label"),
              type: "text",
              spellcheck: !1,
              autofocus: !0,
              minlength: 10,
              maxlength: 14,
              placeholder: this.$t("isbn.field.placeholder")
            },
            info: {
              type: "info",
              label: this.$t("isbn.info.label"),
              text: this.$t("isbn.info.text"),
              theme: "info"
            }
          }
        },
        on: {
          submit: this.handleSubmit.bind(this)
        }
      });
    },
    closeDrawer() {
      this.$panel.drawer.close();
    },
    convertIsbn10to13(_) {
      const f = _.replace(/-/g, "").toUpperCase();
      if (!/^\d{9}[\dX]$/.test(f)) return null;
      const v = "978" + f.slice(0, 9);
      let l = 0;
      for (let s = 0; s < 12; s++) {
        const d = parseInt(v[s], 10);
        l += d * (s % 2 === 0 ? 1 : 3);
      }
      const h = (10 - l % 10) % 10;
      return v + h;
    },
    validateIsbn(_) {
      const f = _.replace(/-/g, "");
      if (/^\d{9}[\dX]$/.test(f)) {
        let v = 0;
        for (let h = 0; h < 9; h++)
          v += (h + 1) * parseInt(f[h], 10);
        const l = f[9] === "X" ? 10 : parseInt(f[9], 10);
        return (v + 10 * l) % 11 === 0;
      }
      if (/^\d{13}$/.test(f)) {
        let v = 0;
        for (let h = 0; h < 12; h++)
          v += parseInt(f[h], 10) * (h % 2 === 0 ? 1 : 3);
        return (10 - v % 10) % 10 === parseInt(f[12], 10);
      }
      return !1;
    },
    renderBarcode() {
      if (!this.hasContent || typeof Ut != "function" || !this.svgEl) return;
      let _ = this.value.replace(/-/g, "");
      if (/^\d{9}[\dX]$/.test(_)) {
        const f = this.convertIsbn10to13(_);
        if (!f) return;
        _ = f;
      }
      if (!(!/^\d{13}$/.test(_) || !this.validateIsbn(_))) {
        for (; this.svgEl.firstChild; )
          this.svgEl.removeChild(this.svgEl.firstChild);
        Ut(this.svgEl, _, {
          format: this.format,
          height: this.height,
          width: this.barwidth,
          background: this.background,
          lineColor: this.linecolor,
          font: this.font,
          fontSize: this.fontsize,
          fontOptions: this.fontoptions,
          textAlign: this.textalign,
          textPosition: this.textposition,
          margins: this.margins,
          marginTop: this.margintop,
          marginRight: this.marginright,
          marginBottom: this.marginbottom,
          marginLeft: this.marginleft,
          displayValue: this.displayvalue,
          flat: this.flat,
          lastChar: ">"
        });
      }
    }
  }
}, zr = {
  key: 0,
  class: "k-isbn-empty"
}, Jr = {
  key: 1,
  class: "k-isbn-preview"
}, Zr = { class: "k-isbn-container" }, Yr = {
  ref: "svgEl",
  class: "k-isbn-preview-svg"
};
function Qr(_, f, v, l, h, s) {
  const d = Y("k-button"), c = Y("k-empty"), a = Y("k-grid"), e = Y("k-field");
  return Q(), tr(
    e,
    rr({ class: "k-isbn-field" }, _.$props),
    {
      options: W(() => [
        Ne(d, {
          icon: "edit-line",
          size: "xs",
          variant: "filled",
          onClick: s.openDrawer
        }, {
          default: W(() => [...f[0] || (f[0] = [
            ir(
              "Edit...",
              -1
              /* CACHED */
            )
          ])]),
          _: 1
          /* STABLE */
        }, 8, ["onClick"])
      ]),
      default: W(() => [
        s.hasContent ? (Q(), Le("div", Jr, [
          nr("div", Zr, [
            (Q(), Le(
              "svg",
              Yr,
              null,
              512
              /* NEED_PATCH */
            ))
          ])
        ])) : (Q(), Le("div", zr, [
          Ne(a, { style: { "--columns": "1", gap: "0.5rem" } }, {
            default: W(() => [
              Ne(c, {
                text: v.emptyText,
                icon: "isbn",
                onClick: s.openDrawer
              }, null, 8, ["text", "onClick"])
            ]),
            _: 1
            /* STABLE */
          })
        ]))
      ]),
      _: 1
      /* STABLE */
    },
    16
    /* FULL_PROPS */
  );
}
const Wr = /* @__PURE__ */ Vr(Xr, [["render", Qr]]), Kr = {
  isbn: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 4H4V20H2V4ZM6 4H7V20H6V4ZM8 4H10V20H8V4ZM11 4H13V20H11V4ZM14 4H16V20H14V4ZM17 4H18V20H17V4ZM19 4H22V20H19V4Z"></path></svg>'
};
panel.plugin("scottboms/isbn-field", {
  icons: Kr,
  fields: {
    isbn: Wr
  }
});
