import { aB as nr, g as Af } from "./index-c0ec330d.mjs";
function xf(e, r) {
  for (var t = 0; t < r.length; t++) {
    const n = r[t];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var Cf = typeof nr == "object" && nr && nr.Object === Object && nr, vs = Cf, Mf = vs, Nf = typeof self == "object" && self && self.Object === Object && self, Ff = Mf || Nf || Function("return this")(), ge = Ff, kf = ge, Df = kf.Symbol, Dr = Df;
function Pf(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, i = Array(n); ++t < n; )
    i[t] = r(e[t], t, e);
  return i;
}
var Xn = Pf, Uf = Array.isArray, $e = Uf, pa = Dr, ms = Object.prototype, Lf = ms.hasOwnProperty, Rf = ms.toString, wr = pa ? pa.toStringTag : void 0;
function jf(e) {
  var r = Lf.call(e, wr), t = e[wr];
  try {
    e[wr] = void 0;
    var n = !0;
  } catch {
  }
  var i = Rf.call(e);
  return n && (r ? e[wr] = t : delete e[wr]), i;
}
var Bf = jf, Vf = Object.prototype, Gf = Vf.toString;
function zf(e) {
  return Gf.call(e);
}
var qf = zf, ga = Dr, Hf = Bf, Zf = qf, Wf = "[object Null]", Yf = "[object Undefined]", $a = ga ? ga.toStringTag : void 0;
function Jf(e) {
  return e == null ? e === void 0 ? Yf : Wf : $a && $a in Object(e) ? Hf(e) : Zf(e);
}
var Ce = Jf;
function Xf(e) {
  return e != null && typeof e == "object";
}
var be = Xf, Kf = Ce, Qf = be, ec = "[object Symbol]";
function rc(e) {
  return typeof e == "symbol" || Qf(e) && Kf(e) == ec;
}
var Kn = rc, ba = Dr, tc = Xn, nc = $e, ic = Kn, ac = 1 / 0, wa = ba ? ba.prototype : void 0, Sa = wa ? wa.toString : void 0;
function ys(e) {
  if (typeof e == "string")
    return e;
  if (nc(e))
    return tc(e, ys) + "";
  if (ic(e))
    return Sa ? Sa.call(e) : "";
  var r = e + "";
  return r == "0" && 1 / e == -ac ? "-0" : r;
}
var oc = ys, sc = oc;
function uc(e) {
  return e == null ? "" : sc(e);
}
var Ve = uc;
function lc(e, r, t) {
  var n = -1, i = e.length;
  r < 0 && (r = -r > i ? 0 : i + r), t = t > i ? i : t, t < 0 && (t += i), i = r > t ? 0 : t - r >>> 0, r >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = e[n + r];
  return a;
}
var ps = lc, fc = ps;
function cc(e, r, t) {
  var n = e.length;
  return t = t === void 0 ? n : t, !r && t >= n ? e : fc(e, r, t);
}
var dc = cc, hc = "\\ud800-\\udfff", vc = "\\u0300-\\u036f", mc = "\\ufe20-\\ufe2f", yc = "\\u20d0-\\u20ff", pc = vc + mc + yc, gc = "\\ufe0e\\ufe0f", $c = "\\u200d", bc = RegExp("[" + $c + hc + pc + gc + "]");
function wc(e) {
  return bc.test(e);
}
var gs = wc;
function Sc(e) {
  return e.split("");
}
var Ec = Sc, $s = "\\ud800-\\udfff", Tc = "\\u0300-\\u036f", _c = "\\ufe20-\\ufe2f", Oc = "\\u20d0-\\u20ff", Ic = Tc + _c + Oc, Ac = "\\ufe0e\\ufe0f", xc = "[" + $s + "]", pn = "[" + Ic + "]", gn = "\\ud83c[\\udffb-\\udfff]", Cc = "(?:" + pn + "|" + gn + ")", bs = "[^" + $s + "]", ws = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ss = "[\\ud800-\\udbff][\\udc00-\\udfff]", Mc = "\\u200d", Es = Cc + "?", Ts = "[" + Ac + "]?", Nc = "(?:" + Mc + "(?:" + [bs, ws, Ss].join("|") + ")" + Ts + Es + ")*", Fc = Ts + Es + Nc, kc = "(?:" + [bs + pn + "?", pn, ws, Ss, xc].join("|") + ")", Dc = RegExp(gn + "(?=" + gn + ")|" + kc + Fc, "g");
function Pc(e) {
  return e.match(Dc) || [];
}
var Uc = Pc, Lc = Ec, Rc = gs, jc = Uc;
function Bc(e) {
  return Rc(e) ? jc(e) : Lc(e);
}
var Vc = Bc, Gc = dc, zc = gs, qc = Vc, Hc = Ve;
function Zc(e) {
  return function(r) {
    r = Hc(r);
    var t = zc(r) ? qc(r) : void 0, n = t ? t[0] : r.charAt(0), i = t ? Gc(t, 1).join("") : r.slice(1);
    return n[e]() + i;
  };
}
var Wc = Zc, Yc = Wc, Jc = Yc("toUpperCase"), Xc = Jc, Kc = Ve, Qc = Xc;
function ed(e) {
  return Qc(Kc(e).toLowerCase());
}
var rd = ed;
function td(e, r, t, n) {
  var i = -1, a = e == null ? 0 : e.length;
  for (n && a && (t = e[++i]); ++i < a; )
    t = r(t, e[i], i, e);
  return t;
}
var nd = td;
function id(e) {
  return function(r) {
    return e == null ? void 0 : e[r];
  };
}
var _s = id, ad = _s, od = {
  // Latin-1 Supplement block.
  À: "A",
  Á: "A",
  Â: "A",
  Ã: "A",
  Ä: "A",
  Å: "A",
  à: "a",
  á: "a",
  â: "a",
  ã: "a",
  ä: "a",
  å: "a",
  Ç: "C",
  ç: "c",
  Ð: "D",
  ð: "d",
  È: "E",
  É: "E",
  Ê: "E",
  Ë: "E",
  è: "e",
  é: "e",
  ê: "e",
  ë: "e",
  Ì: "I",
  Í: "I",
  Î: "I",
  Ï: "I",
  ì: "i",
  í: "i",
  î: "i",
  ï: "i",
  Ñ: "N",
  ñ: "n",
  Ò: "O",
  Ó: "O",
  Ô: "O",
  Õ: "O",
  Ö: "O",
  Ø: "O",
  ò: "o",
  ó: "o",
  ô: "o",
  õ: "o",
  ö: "o",
  ø: "o",
  Ù: "U",
  Ú: "U",
  Û: "U",
  Ü: "U",
  ù: "u",
  ú: "u",
  û: "u",
  ü: "u",
  Ý: "Y",
  ý: "y",
  ÿ: "y",
  Æ: "Ae",
  æ: "ae",
  Þ: "Th",
  þ: "th",
  ß: "ss",
  // Latin Extended-A block.
  Ā: "A",
  Ă: "A",
  Ą: "A",
  ā: "a",
  ă: "a",
  ą: "a",
  Ć: "C",
  Ĉ: "C",
  Ċ: "C",
  Č: "C",
  ć: "c",
  ĉ: "c",
  ċ: "c",
  č: "c",
  Ď: "D",
  Đ: "D",
  ď: "d",
  đ: "d",
  Ē: "E",
  Ĕ: "E",
  Ė: "E",
  Ę: "E",
  Ě: "E",
  ē: "e",
  ĕ: "e",
  ė: "e",
  ę: "e",
  ě: "e",
  Ĝ: "G",
  Ğ: "G",
  Ġ: "G",
  Ģ: "G",
  ĝ: "g",
  ğ: "g",
  ġ: "g",
  ģ: "g",
  Ĥ: "H",
  Ħ: "H",
  ĥ: "h",
  ħ: "h",
  Ĩ: "I",
  Ī: "I",
  Ĭ: "I",
  Į: "I",
  İ: "I",
  ĩ: "i",
  ī: "i",
  ĭ: "i",
  į: "i",
  ı: "i",
  Ĵ: "J",
  ĵ: "j",
  Ķ: "K",
  ķ: "k",
  ĸ: "k",
  Ĺ: "L",
  Ļ: "L",
  Ľ: "L",
  Ŀ: "L",
  Ł: "L",
  ĺ: "l",
  ļ: "l",
  ľ: "l",
  ŀ: "l",
  ł: "l",
  Ń: "N",
  Ņ: "N",
  Ň: "N",
  Ŋ: "N",
  ń: "n",
  ņ: "n",
  ň: "n",
  ŋ: "n",
  Ō: "O",
  Ŏ: "O",
  Ő: "O",
  ō: "o",
  ŏ: "o",
  ő: "o",
  Ŕ: "R",
  Ŗ: "R",
  Ř: "R",
  ŕ: "r",
  ŗ: "r",
  ř: "r",
  Ś: "S",
  Ŝ: "S",
  Ş: "S",
  Š: "S",
  ś: "s",
  ŝ: "s",
  ş: "s",
  š: "s",
  Ţ: "T",
  Ť: "T",
  Ŧ: "T",
  ţ: "t",
  ť: "t",
  ŧ: "t",
  Ũ: "U",
  Ū: "U",
  Ŭ: "U",
  Ů: "U",
  Ű: "U",
  Ų: "U",
  ũ: "u",
  ū: "u",
  ŭ: "u",
  ů: "u",
  ű: "u",
  ų: "u",
  Ŵ: "W",
  ŵ: "w",
  Ŷ: "Y",
  ŷ: "y",
  Ÿ: "Y",
  Ź: "Z",
  Ż: "Z",
  Ž: "Z",
  ź: "z",
  ż: "z",
  ž: "z",
  Ĳ: "IJ",
  ĳ: "ij",
  Œ: "Oe",
  œ: "oe",
  ŉ: "'n",
  ſ: "s"
}, sd = ad(od), ud = sd, ld = ud, fd = Ve, cd = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, dd = "\\u0300-\\u036f", hd = "\\ufe20-\\ufe2f", vd = "\\u20d0-\\u20ff", md = dd + hd + vd, yd = "[" + md + "]", pd = RegExp(yd, "g");
function gd(e) {
  return e = fd(e), e && e.replace(cd, ld).replace(pd, "");
}
var $d = gd, bd = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function wd(e) {
  return e.match(bd) || [];
}
var Sd = wd, Ed = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function Td(e) {
  return Ed.test(e);
}
var _d = Td, Os = "\\ud800-\\udfff", Od = "\\u0300-\\u036f", Id = "\\ufe20-\\ufe2f", Ad = "\\u20d0-\\u20ff", xd = Od + Id + Ad, Is = "\\u2700-\\u27bf", As = "a-z\\xdf-\\xf6\\xf8-\\xff", Cd = "\\xac\\xb1\\xd7\\xf7", Md = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Nd = "\\u2000-\\u206f", Fd = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xs = "A-Z\\xc0-\\xd6\\xd8-\\xde", kd = "\\ufe0e\\ufe0f", Cs = Cd + Md + Nd + Fd, Ms = "['’]", Ea = "[" + Cs + "]", Dd = "[" + xd + "]", Ns = "\\d+", Pd = "[" + Is + "]", Fs = "[" + As + "]", ks = "[^" + Os + Cs + Ns + Is + As + xs + "]", Ud = "\\ud83c[\\udffb-\\udfff]", Ld = "(?:" + Dd + "|" + Ud + ")", Rd = "[^" + Os + "]", Ds = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ps = "[\\ud800-\\udbff][\\udc00-\\udfff]", er = "[" + xs + "]", jd = "\\u200d", Ta = "(?:" + Fs + "|" + ks + ")", Bd = "(?:" + er + "|" + ks + ")", _a = "(?:" + Ms + "(?:d|ll|m|re|s|t|ve))?", Oa = "(?:" + Ms + "(?:D|LL|M|RE|S|T|VE))?", Us = Ld + "?", Ls = "[" + kd + "]?", Vd = "(?:" + jd + "(?:" + [Rd, Ds, Ps].join("|") + ")" + Ls + Us + ")*", Gd = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", zd = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", qd = Ls + Us + Vd, Hd = "(?:" + [Pd, Ds, Ps].join("|") + ")" + qd, Zd = RegExp([
  er + "?" + Fs + "+" + _a + "(?=" + [Ea, er, "$"].join("|") + ")",
  Bd + "+" + Oa + "(?=" + [Ea, er + Ta, "$"].join("|") + ")",
  er + "?" + Ta + "+" + _a,
  er + "+" + Oa,
  zd,
  Gd,
  Ns,
  Hd
].join("|"), "g");
function Wd(e) {
  return e.match(Zd) || [];
}
var Yd = Wd, Jd = Sd, Xd = _d, Kd = Ve, Qd = Yd;
function eh(e, r, t) {
  return e = Kd(e), r = t ? void 0 : r, r === void 0 ? Xd(e) ? Qd(e) : Jd(e) : e.match(r) || [];
}
var rh = eh, th = nd, nh = $d, ih = rh, ah = "['’]", oh = RegExp(ah, "g");
function sh(e) {
  return function(r) {
    return th(ih(nh(r).replace(oh, "")), e, "");
  };
}
var Rs = sh, uh = rd, lh = Rs, fh = lh(function(e, r, t) {
  return r = r.toLowerCase(), e + (t ? uh(r) : r);
}), ch = fh, dh = Object.prototype, hh = dh.hasOwnProperty;
function vh(e, r) {
  return e != null && hh.call(e, r);
}
var mh = vh, yh = $e, ph = Kn, gh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $h = /^\w*$/;
function bh(e, r) {
  if (yh(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || ph(e) ? !0 : $h.test(e) || !gh.test(e) || r != null && e in Object(r);
}
var wh = bh;
function Sh(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var Me = Sh, Eh = Ce, Th = Me, _h = "[object AsyncFunction]", Oh = "[object Function]", Ih = "[object GeneratorFunction]", Ah = "[object Proxy]";
function xh(e) {
  if (!Th(e))
    return !1;
  var r = Eh(e);
  return r == Oh || r == Ih || r == _h || r == Ah;
}
var Qn = xh, Ch = ge, Mh = Ch["__core-js_shared__"], Nh = Mh, Jt = Nh, Ia = function() {
  var e = /[^.]+$/.exec(Jt && Jt.keys && Jt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Fh(e) {
  return !!Ia && Ia in e;
}
var kh = Fh, Dh = Function.prototype, Ph = Dh.toString;
function Uh(e) {
  if (e != null) {
    try {
      return Ph.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var js = Uh, Lh = Qn, Rh = kh, jh = Me, Bh = js, Vh = /[\\^$.*+?()[\]{}|]/g, Gh = /^\[object .+?Constructor\]$/, zh = Function.prototype, qh = Object.prototype, Hh = zh.toString, Zh = qh.hasOwnProperty, Wh = RegExp(
  "^" + Hh.call(Zh).replace(Vh, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Yh(e) {
  if (!jh(e) || Rh(e))
    return !1;
  var r = Lh(e) ? Wh : Gh;
  return r.test(Bh(e));
}
var Jh = Yh;
function Xh(e, r) {
  return e == null ? void 0 : e[r];
}
var Kh = Xh, Qh = Jh, ev = Kh;
function rv(e, r) {
  var t = ev(e, r);
  return Qh(t) ? t : void 0;
}
var Ge = rv, tv = Ge, nv = tv(Object, "create"), mt = nv, Aa = mt;
function iv() {
  this.__data__ = Aa ? Aa(null) : {}, this.size = 0;
}
var av = iv;
function ov(e) {
  var r = this.has(e) && delete this.__data__[e];
  return this.size -= r ? 1 : 0, r;
}
var sv = ov, uv = mt, lv = "__lodash_hash_undefined__", fv = Object.prototype, cv = fv.hasOwnProperty;
function dv(e) {
  var r = this.__data__;
  if (uv) {
    var t = r[e];
    return t === lv ? void 0 : t;
  }
  return cv.call(r, e) ? r[e] : void 0;
}
var hv = dv, vv = mt, mv = Object.prototype, yv = mv.hasOwnProperty;
function pv(e) {
  var r = this.__data__;
  return vv ? r[e] !== void 0 : yv.call(r, e);
}
var gv = pv, $v = mt, bv = "__lodash_hash_undefined__";
function wv(e, r) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = $v && r === void 0 ? bv : r, this;
}
var Sv = wv, Ev = av, Tv = sv, _v = hv, Ov = gv, Iv = Sv;
function sr(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
sr.prototype.clear = Ev;
sr.prototype.delete = Tv;
sr.prototype.get = _v;
sr.prototype.has = Ov;
sr.prototype.set = Iv;
var Av = sr;
function xv() {
  this.__data__ = [], this.size = 0;
}
var Cv = xv;
function Mv(e, r) {
  return e === r || e !== e && r !== r;
}
var Pr = Mv, Nv = Pr;
function Fv(e, r) {
  for (var t = e.length; t--; )
    if (Nv(e[t][0], r))
      return t;
  return -1;
}
var yt = Fv, kv = yt, Dv = Array.prototype, Pv = Dv.splice;
function Uv(e) {
  var r = this.__data__, t = kv(r, e);
  if (t < 0)
    return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : Pv.call(r, t, 1), --this.size, !0;
}
var Lv = Uv, Rv = yt;
function jv(e) {
  var r = this.__data__, t = Rv(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var Bv = jv, Vv = yt;
function Gv(e) {
  return Vv(this.__data__, e) > -1;
}
var zv = Gv, qv = yt;
function Hv(e, r) {
  var t = this.__data__, n = qv(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : t[n][1] = r, this;
}
var Zv = Hv, Wv = Cv, Yv = Lv, Jv = Bv, Xv = zv, Kv = Zv;
function ur(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
ur.prototype.clear = Wv;
ur.prototype.delete = Yv;
ur.prototype.get = Jv;
ur.prototype.has = Xv;
ur.prototype.set = Kv;
var pt = ur, Qv = Ge, em = ge, rm = Qv(em, "Map"), ei = rm, xa = Av, tm = pt, nm = ei;
function im() {
  this.size = 0, this.__data__ = {
    hash: new xa(),
    map: new (nm || tm)(),
    string: new xa()
  };
}
var am = im;
function om(e) {
  var r = typeof e;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? e !== "__proto__" : e === null;
}
var sm = om, um = sm;
function lm(e, r) {
  var t = e.__data__;
  return um(r) ? t[typeof r == "string" ? "string" : "hash"] : t.map;
}
var gt = lm, fm = gt;
function cm(e) {
  var r = fm(this, e).delete(e);
  return this.size -= r ? 1 : 0, r;
}
var dm = cm, hm = gt;
function vm(e) {
  return hm(this, e).get(e);
}
var mm = vm, ym = gt;
function pm(e) {
  return ym(this, e).has(e);
}
var gm = pm, $m = gt;
function bm(e, r) {
  var t = $m(this, e), n = t.size;
  return t.set(e, r), this.size += t.size == n ? 0 : 1, this;
}
var wm = bm, Sm = am, Em = dm, Tm = mm, _m = gm, Om = wm;
function lr(e) {
  var r = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
lr.prototype.clear = Sm;
lr.prototype.delete = Em;
lr.prototype.get = Tm;
lr.prototype.has = _m;
lr.prototype.set = Om;
var Bs = lr, Vs = Bs, Im = "Expected a function";
function ri(e, r) {
  if (typeof e != "function" || r != null && typeof r != "function")
    throw new TypeError(Im);
  var t = function() {
    var n = arguments, i = r ? r.apply(this, n) : n[0], a = t.cache;
    if (a.has(i))
      return a.get(i);
    var u = e.apply(this, n);
    return t.cache = a.set(i, u) || a, u;
  };
  return t.cache = new (ri.Cache || Vs)(), t;
}
ri.Cache = Vs;
var Am = ri, xm = Am, Cm = 500;
function Mm(e) {
  var r = xm(e, function(n) {
    return t.size === Cm && t.clear(), n;
  }), t = r.cache;
  return r;
}
var Nm = Mm, Fm = Nm, km = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dm = /\\(\\)?/g, Pm = Fm(function(e) {
  var r = [];
  return e.charCodeAt(0) === 46 && r.push(""), e.replace(km, function(t, n, i, a) {
    r.push(i ? a.replace(Dm, "$1") : n || t);
  }), r;
}), Um = Pm, Lm = $e, Rm = wh, jm = Um, Bm = Ve;
function Vm(e, r) {
  return Lm(e) ? e : Rm(e, r) ? [e] : jm(Bm(e));
}
var $t = Vm, Gm = Ce, zm = be, qm = "[object Arguments]";
function Hm(e) {
  return zm(e) && Gm(e) == qm;
}
var Zm = Hm, Ca = Zm, Wm = be, Gs = Object.prototype, Ym = Gs.hasOwnProperty, Jm = Gs.propertyIsEnumerable, Xm = Ca(function() {
  return arguments;
}()) ? Ca : function(e) {
  return Wm(e) && Ym.call(e, "callee") && !Jm.call(e, "callee");
}, bt = Xm, Km = 9007199254740991, Qm = /^(?:0|[1-9]\d*)$/;
function ey(e, r) {
  var t = typeof e;
  return r = r ?? Km, !!r && (t == "number" || t != "symbol" && Qm.test(e)) && e > -1 && e % 1 == 0 && e < r;
}
var ti = ey, ry = 9007199254740991;
function ty(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ry;
}
var ni = ty, ny = Kn, iy = 1 / 0;
function ay(e) {
  if (typeof e == "string" || ny(e))
    return e;
  var r = e + "";
  return r == "0" && 1 / e == -iy ? "-0" : r;
}
var ii = ay, oy = $t, sy = bt, uy = $e, ly = ti, fy = ni, cy = ii;
function dy(e, r, t) {
  r = oy(r, e);
  for (var n = -1, i = r.length, a = !1; ++n < i; ) {
    var u = cy(r[n]);
    if (!(a = e != null && t(e, u)))
      break;
    e = e[u];
  }
  return a || ++n != i ? a : (i = e == null ? 0 : e.length, !!i && fy(i) && ly(u, i) && (uy(e) || sy(e)));
}
var hy = dy, vy = mh, my = hy;
function yy(e, r) {
  return e != null && my(e, r, vy);
}
var py = yy, ai = { exports: {} }, zs = {}, wt = {}, St = {};
Object.defineProperty(St, "__esModule", {
  value: !0
});
St.default = $y;
let Hr;
const gy = new Uint8Array(16);
function $y() {
  if (!Hr && (Hr = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !Hr))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Hr(gy);
}
var Ne = {}, ze = {}, Et = {};
Object.defineProperty(Et, "__esModule", {
  value: !0
});
Et.default = void 0;
var by = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
Et.default = by;
Object.defineProperty(ze, "__esModule", {
  value: !0
});
ze.default = void 0;
var wy = Sy(Et);
function Sy(e) {
  return e && e.__esModule ? e : { default: e };
}
function Ey(e) {
  return typeof e == "string" && wy.default.test(e);
}
var Ty = Ey;
ze.default = Ty;
Object.defineProperty(Ne, "__esModule", {
  value: !0
});
Ne.default = void 0;
Ne.unsafeStringify = qs;
var _y = Oy(ze);
function Oy(e) {
  return e && e.__esModule ? e : { default: e };
}
const G = [];
for (let e = 0; e < 256; ++e)
  G.push((e + 256).toString(16).slice(1));
function qs(e, r = 0) {
  return G[e[r + 0]] + G[e[r + 1]] + G[e[r + 2]] + G[e[r + 3]] + "-" + G[e[r + 4]] + G[e[r + 5]] + "-" + G[e[r + 6]] + G[e[r + 7]] + "-" + G[e[r + 8]] + G[e[r + 9]] + "-" + G[e[r + 10]] + G[e[r + 11]] + G[e[r + 12]] + G[e[r + 13]] + G[e[r + 14]] + G[e[r + 15]];
}
function Iy(e, r = 0) {
  const t = qs(e, r);
  if (!(0, _y.default)(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
var Ay = Iy;
Ne.default = Ay;
Object.defineProperty(wt, "__esModule", {
  value: !0
});
wt.default = void 0;
var xy = My(St), Cy = Ne;
function My(e) {
  return e && e.__esModule ? e : { default: e };
}
let Ma, Xt, Kt = 0, Qt = 0;
function Ny(e, r, t) {
  let n = r && t || 0;
  const i = r || new Array(16);
  e = e || {};
  let a = e.node || Ma, u = e.clockseq !== void 0 ? e.clockseq : Xt;
  if (a == null || u == null) {
    const g = e.random || (e.rng || xy.default)();
    a == null && (a = Ma = [g[0] | 1, g[1], g[2], g[3], g[4], g[5]]), u == null && (u = Xt = (g[6] << 8 | g[7]) & 16383);
  }
  let s = e.msecs !== void 0 ? e.msecs : Date.now(), c = e.nsecs !== void 0 ? e.nsecs : Qt + 1;
  const h = s - Kt + (c - Qt) / 1e4;
  if (h < 0 && e.clockseq === void 0 && (u = u + 1 & 16383), (h < 0 || s > Kt) && e.nsecs === void 0 && (c = 0), c >= 1e4)
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  Kt = s, Qt = c, Xt = u, s += 122192928e5;
  const y = ((s & 268435455) * 1e4 + c) % 4294967296;
  i[n++] = y >>> 24 & 255, i[n++] = y >>> 16 & 255, i[n++] = y >>> 8 & 255, i[n++] = y & 255;
  const m = s / 4294967296 * 1e4 & 268435455;
  i[n++] = m >>> 8 & 255, i[n++] = m & 255, i[n++] = m >>> 24 & 15 | 16, i[n++] = m >>> 16 & 255, i[n++] = u >>> 8 | 128, i[n++] = u & 255;
  for (let g = 0; g < 6; ++g)
    i[n + g] = a[g];
  return r || (0, Cy.unsafeStringify)(i);
}
var Fy = Ny;
wt.default = Fy;
var Tt = {}, xe = {}, Ur = {};
Object.defineProperty(Ur, "__esModule", {
  value: !0
});
Ur.default = void 0;
var ky = Dy(ze);
function Dy(e) {
  return e && e.__esModule ? e : { default: e };
}
function Py(e) {
  if (!(0, ky.default)(e))
    throw TypeError("Invalid UUID");
  let r;
  const t = new Uint8Array(16);
  return t[0] = (r = parseInt(e.slice(0, 8), 16)) >>> 24, t[1] = r >>> 16 & 255, t[2] = r >>> 8 & 255, t[3] = r & 255, t[4] = (r = parseInt(e.slice(9, 13), 16)) >>> 8, t[5] = r & 255, t[6] = (r = parseInt(e.slice(14, 18), 16)) >>> 8, t[7] = r & 255, t[8] = (r = parseInt(e.slice(19, 23), 16)) >>> 8, t[9] = r & 255, t[10] = (r = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, t[11] = r / 4294967296 & 255, t[12] = r >>> 24 & 255, t[13] = r >>> 16 & 255, t[14] = r >>> 8 & 255, t[15] = r & 255, t;
}
var Uy = Py;
Ur.default = Uy;
Object.defineProperty(xe, "__esModule", {
  value: !0
});
xe.URL = xe.DNS = void 0;
xe.default = Vy;
var Ly = Ne, Ry = jy(Ur);
function jy(e) {
  return e && e.__esModule ? e : { default: e };
}
function By(e) {
  e = unescape(encodeURIComponent(e));
  const r = [];
  for (let t = 0; t < e.length; ++t)
    r.push(e.charCodeAt(t));
  return r;
}
const Hs = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
xe.DNS = Hs;
const Zs = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
xe.URL = Zs;
function Vy(e, r, t) {
  function n(i, a, u, s) {
    var c;
    if (typeof i == "string" && (i = By(i)), typeof a == "string" && (a = (0, Ry.default)(a)), ((c = a) === null || c === void 0 ? void 0 : c.length) !== 16)
      throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    let h = new Uint8Array(16 + i.length);
    if (h.set(a), h.set(i, a.length), h = t(h), h[6] = h[6] & 15 | r, h[8] = h[8] & 63 | 128, u) {
      s = s || 0;
      for (let y = 0; y < 16; ++y)
        u[s + y] = h[y];
      return u;
    }
    return (0, Ly.unsafeStringify)(h);
  }
  try {
    n.name = e;
  } catch {
  }
  return n.DNS = Hs, n.URL = Zs, n;
}
var _t = {};
Object.defineProperty(_t, "__esModule", {
  value: !0
});
_t.default = void 0;
function Gy(e) {
  if (typeof e == "string") {
    const r = unescape(encodeURIComponent(e));
    e = new Uint8Array(r.length);
    for (let t = 0; t < r.length; ++t)
      e[t] = r.charCodeAt(t);
  }
  return zy(qy(Hy(e), e.length * 8));
}
function zy(e) {
  const r = [], t = e.length * 32, n = "0123456789abcdef";
  for (let i = 0; i < t; i += 8) {
    const a = e[i >> 5] >>> i % 32 & 255, u = parseInt(n.charAt(a >>> 4 & 15) + n.charAt(a & 15), 16);
    r.push(u);
  }
  return r;
}
function Ws(e) {
  return (e + 64 >>> 9 << 4) + 14 + 1;
}
function qy(e, r) {
  e[r >> 5] |= 128 << r % 32, e[Ws(r) - 1] = r;
  let t = 1732584193, n = -271733879, i = -1732584194, a = 271733878;
  for (let u = 0; u < e.length; u += 16) {
    const s = t, c = n, h = i, y = a;
    t = H(t, n, i, a, e[u], 7, -680876936), a = H(a, t, n, i, e[u + 1], 12, -389564586), i = H(i, a, t, n, e[u + 2], 17, 606105819), n = H(n, i, a, t, e[u + 3], 22, -1044525330), t = H(t, n, i, a, e[u + 4], 7, -176418897), a = H(a, t, n, i, e[u + 5], 12, 1200080426), i = H(i, a, t, n, e[u + 6], 17, -1473231341), n = H(n, i, a, t, e[u + 7], 22, -45705983), t = H(t, n, i, a, e[u + 8], 7, 1770035416), a = H(a, t, n, i, e[u + 9], 12, -1958414417), i = H(i, a, t, n, e[u + 10], 17, -42063), n = H(n, i, a, t, e[u + 11], 22, -1990404162), t = H(t, n, i, a, e[u + 12], 7, 1804603682), a = H(a, t, n, i, e[u + 13], 12, -40341101), i = H(i, a, t, n, e[u + 14], 17, -1502002290), n = H(n, i, a, t, e[u + 15], 22, 1236535329), t = Z(t, n, i, a, e[u + 1], 5, -165796510), a = Z(a, t, n, i, e[u + 6], 9, -1069501632), i = Z(i, a, t, n, e[u + 11], 14, 643717713), n = Z(n, i, a, t, e[u], 20, -373897302), t = Z(t, n, i, a, e[u + 5], 5, -701558691), a = Z(a, t, n, i, e[u + 10], 9, 38016083), i = Z(i, a, t, n, e[u + 15], 14, -660478335), n = Z(n, i, a, t, e[u + 4], 20, -405537848), t = Z(t, n, i, a, e[u + 9], 5, 568446438), a = Z(a, t, n, i, e[u + 14], 9, -1019803690), i = Z(i, a, t, n, e[u + 3], 14, -187363961), n = Z(n, i, a, t, e[u + 8], 20, 1163531501), t = Z(t, n, i, a, e[u + 13], 5, -1444681467), a = Z(a, t, n, i, e[u + 2], 9, -51403784), i = Z(i, a, t, n, e[u + 7], 14, 1735328473), n = Z(n, i, a, t, e[u + 12], 20, -1926607734), t = W(t, n, i, a, e[u + 5], 4, -378558), a = W(a, t, n, i, e[u + 8], 11, -2022574463), i = W(i, a, t, n, e[u + 11], 16, 1839030562), n = W(n, i, a, t, e[u + 14], 23, -35309556), t = W(t, n, i, a, e[u + 1], 4, -1530992060), a = W(a, t, n, i, e[u + 4], 11, 1272893353), i = W(i, a, t, n, e[u + 7], 16, -155497632), n = W(n, i, a, t, e[u + 10], 23, -1094730640), t = W(t, n, i, a, e[u + 13], 4, 681279174), a = W(a, t, n, i, e[u], 11, -358537222), i = W(i, a, t, n, e[u + 3], 16, -722521979), n = W(n, i, a, t, e[u + 6], 23, 76029189), t = W(t, n, i, a, e[u + 9], 4, -640364487), a = W(a, t, n, i, e[u + 12], 11, -421815835), i = W(i, a, t, n, e[u + 15], 16, 530742520), n = W(n, i, a, t, e[u + 2], 23, -995338651), t = Y(t, n, i, a, e[u], 6, -198630844), a = Y(a, t, n, i, e[u + 7], 10, 1126891415), i = Y(i, a, t, n, e[u + 14], 15, -1416354905), n = Y(n, i, a, t, e[u + 5], 21, -57434055), t = Y(t, n, i, a, e[u + 12], 6, 1700485571), a = Y(a, t, n, i, e[u + 3], 10, -1894986606), i = Y(i, a, t, n, e[u + 10], 15, -1051523), n = Y(n, i, a, t, e[u + 1], 21, -2054922799), t = Y(t, n, i, a, e[u + 8], 6, 1873313359), a = Y(a, t, n, i, e[u + 15], 10, -30611744), i = Y(i, a, t, n, e[u + 6], 15, -1560198380), n = Y(n, i, a, t, e[u + 13], 21, 1309151649), t = Y(t, n, i, a, e[u + 4], 6, -145523070), a = Y(a, t, n, i, e[u + 11], 10, -1120210379), i = Y(i, a, t, n, e[u + 2], 15, 718787259), n = Y(n, i, a, t, e[u + 9], 21, -343485551), t = Ie(t, s), n = Ie(n, c), i = Ie(i, h), a = Ie(a, y);
  }
  return [t, n, i, a];
}
function Hy(e) {
  if (e.length === 0)
    return [];
  const r = e.length * 8, t = new Uint32Array(Ws(r));
  for (let n = 0; n < r; n += 8)
    t[n >> 5] |= (e[n / 8] & 255) << n % 32;
  return t;
}
function Ie(e, r) {
  const t = (e & 65535) + (r & 65535);
  return (e >> 16) + (r >> 16) + (t >> 16) << 16 | t & 65535;
}
function Zy(e, r) {
  return e << r | e >>> 32 - r;
}
function Ot(e, r, t, n, i, a) {
  return Ie(Zy(Ie(Ie(r, e), Ie(n, a)), i), t);
}
function H(e, r, t, n, i, a, u) {
  return Ot(r & t | ~r & n, e, r, i, a, u);
}
function Z(e, r, t, n, i, a, u) {
  return Ot(r & n | t & ~n, e, r, i, a, u);
}
function W(e, r, t, n, i, a, u) {
  return Ot(r ^ t ^ n, e, r, i, a, u);
}
function Y(e, r, t, n, i, a, u) {
  return Ot(t ^ (r | ~n), e, r, i, a, u);
}
var Wy = Gy;
_t.default = Wy;
Object.defineProperty(Tt, "__esModule", {
  value: !0
});
Tt.default = void 0;
var Yy = Ys(xe), Jy = Ys(_t);
function Ys(e) {
  return e && e.__esModule ? e : { default: e };
}
const Xy = (0, Yy.default)("v3", 48, Jy.default);
var Ky = Xy;
Tt.default = Ky;
var It = {}, At = {};
Object.defineProperty(At, "__esModule", {
  value: !0
});
At.default = void 0;
const Qy = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var e0 = {
  randomUUID: Qy
};
At.default = e0;
Object.defineProperty(It, "__esModule", {
  value: !0
});
It.default = void 0;
var Na = Js(At), r0 = Js(St), t0 = Ne;
function Js(e) {
  return e && e.__esModule ? e : { default: e };
}
function n0(e, r, t) {
  if (Na.default.randomUUID && !r && !e)
    return Na.default.randomUUID();
  e = e || {};
  const n = e.random || (e.rng || r0.default)();
  if (n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, r) {
    t = t || 0;
    for (let i = 0; i < 16; ++i)
      r[t + i] = n[i];
    return r;
  }
  return (0, t0.unsafeStringify)(n);
}
var i0 = n0;
It.default = i0;
var xt = {}, Ct = {};
Object.defineProperty(Ct, "__esModule", {
  value: !0
});
Ct.default = void 0;
function a0(e, r, t, n) {
  switch (e) {
    case 0:
      return r & t ^ ~r & n;
    case 1:
      return r ^ t ^ n;
    case 2:
      return r & t ^ r & n ^ t & n;
    case 3:
      return r ^ t ^ n;
  }
}
function en(e, r) {
  return e << r | e >>> 32 - r;
}
function o0(e) {
  const r = [1518500249, 1859775393, 2400959708, 3395469782], t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof e == "string") {
    const u = unescape(encodeURIComponent(e));
    e = [];
    for (let s = 0; s < u.length; ++s)
      e.push(u.charCodeAt(s));
  } else
    Array.isArray(e) || (e = Array.prototype.slice.call(e));
  e.push(128);
  const n = e.length / 4 + 2, i = Math.ceil(n / 16), a = new Array(i);
  for (let u = 0; u < i; ++u) {
    const s = new Uint32Array(16);
    for (let c = 0; c < 16; ++c)
      s[c] = e[u * 64 + c * 4] << 24 | e[u * 64 + c * 4 + 1] << 16 | e[u * 64 + c * 4 + 2] << 8 | e[u * 64 + c * 4 + 3];
    a[u] = s;
  }
  a[i - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32), a[i - 1][14] = Math.floor(a[i - 1][14]), a[i - 1][15] = (e.length - 1) * 8 & 4294967295;
  for (let u = 0; u < i; ++u) {
    const s = new Uint32Array(80);
    for (let b = 0; b < 16; ++b)
      s[b] = a[u][b];
    for (let b = 16; b < 80; ++b)
      s[b] = en(s[b - 3] ^ s[b - 8] ^ s[b - 14] ^ s[b - 16], 1);
    let c = t[0], h = t[1], y = t[2], m = t[3], g = t[4];
    for (let b = 0; b < 80; ++b) {
      const w = Math.floor(b / 20), T = en(c, 5) + a0(w, h, y, m) + g + r[w] + s[b] >>> 0;
      g = m, m = y, y = en(h, 30) >>> 0, h = c, c = T;
    }
    t[0] = t[0] + c >>> 0, t[1] = t[1] + h >>> 0, t[2] = t[2] + y >>> 0, t[3] = t[3] + m >>> 0, t[4] = t[4] + g >>> 0;
  }
  return [t[0] >> 24 & 255, t[0] >> 16 & 255, t[0] >> 8 & 255, t[0] & 255, t[1] >> 24 & 255, t[1] >> 16 & 255, t[1] >> 8 & 255, t[1] & 255, t[2] >> 24 & 255, t[2] >> 16 & 255, t[2] >> 8 & 255, t[2] & 255, t[3] >> 24 & 255, t[3] >> 16 & 255, t[3] >> 8 & 255, t[3] & 255, t[4] >> 24 & 255, t[4] >> 16 & 255, t[4] >> 8 & 255, t[4] & 255];
}
var s0 = o0;
Ct.default = s0;
Object.defineProperty(xt, "__esModule", {
  value: !0
});
xt.default = void 0;
var u0 = Xs(xe), l0 = Xs(Ct);
function Xs(e) {
  return e && e.__esModule ? e : { default: e };
}
const f0 = (0, u0.default)("v5", 80, l0.default);
var c0 = f0;
xt.default = c0;
var Mt = {};
Object.defineProperty(Mt, "__esModule", {
  value: !0
});
Mt.default = void 0;
var d0 = "00000000-0000-0000-0000-000000000000";
Mt.default = d0;
var Nt = {};
Object.defineProperty(Nt, "__esModule", {
  value: !0
});
Nt.default = void 0;
var h0 = v0(ze);
function v0(e) {
  return e && e.__esModule ? e : { default: e };
}
function m0(e) {
  if (!(0, h0.default)(e))
    throw TypeError("Invalid UUID");
  return parseInt(e.slice(14, 15), 16);
}
var y0 = m0;
Nt.default = y0;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "NIL", {
    enumerable: !0,
    get: function() {
      return a.default;
    }
  }), Object.defineProperty(e, "parse", {
    enumerable: !0,
    get: function() {
      return h.default;
    }
  }), Object.defineProperty(e, "stringify", {
    enumerable: !0,
    get: function() {
      return c.default;
    }
  }), Object.defineProperty(e, "v1", {
    enumerable: !0,
    get: function() {
      return r.default;
    }
  }), Object.defineProperty(e, "v3", {
    enumerable: !0,
    get: function() {
      return t.default;
    }
  }), Object.defineProperty(e, "v4", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  }), Object.defineProperty(e, "v5", {
    enumerable: !0,
    get: function() {
      return i.default;
    }
  }), Object.defineProperty(e, "validate", {
    enumerable: !0,
    get: function() {
      return s.default;
    }
  }), Object.defineProperty(e, "version", {
    enumerable: !0,
    get: function() {
      return u.default;
    }
  });
  var r = y(wt), t = y(Tt), n = y(It), i = y(xt), a = y(Mt), u = y(Nt), s = y(ze), c = y(Ne), h = y(Ur);
  function y(m) {
    return m && m.__esModule ? m : { default: m };
  }
})(zs);
var p0 = pt;
function g0() {
  this.__data__ = new p0(), this.size = 0;
}
var $0 = g0;
function b0(e) {
  var r = this.__data__, t = r.delete(e);
  return this.size = r.size, t;
}
var w0 = b0;
function S0(e) {
  return this.__data__.get(e);
}
var E0 = S0;
function T0(e) {
  return this.__data__.has(e);
}
var _0 = T0, O0 = pt, I0 = ei, A0 = Bs, x0 = 200;
function C0(e, r) {
  var t = this.__data__;
  if (t instanceof O0) {
    var n = t.__data__;
    if (!I0 || n.length < x0 - 1)
      return n.push([e, r]), this.size = ++t.size, this;
    t = this.__data__ = new A0(n);
  }
  return t.set(e, r), this.size = t.size, this;
}
var M0 = C0, N0 = pt, F0 = $0, k0 = w0, D0 = E0, P0 = _0, U0 = M0;
function fr(e) {
  var r = this.__data__ = new N0(e);
  this.size = r.size;
}
fr.prototype.clear = F0;
fr.prototype.delete = k0;
fr.prototype.get = D0;
fr.prototype.has = P0;
fr.prototype.set = U0;
var Ks = fr, L0 = Ge, R0 = function() {
  try {
    var e = L0(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Qs = R0, Fa = Qs;
function j0(e, r, t) {
  r == "__proto__" && Fa ? Fa(e, r, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[r] = t;
}
var oi = j0, B0 = oi, V0 = Pr;
function G0(e, r, t) {
  (t !== void 0 && !V0(e[r], t) || t === void 0 && !(r in e)) && B0(e, r, t);
}
var eu = G0;
function z0(e) {
  return function(r, t, n) {
    for (var i = -1, a = Object(r), u = n(r), s = u.length; s--; ) {
      var c = u[e ? s : ++i];
      if (t(a[c], c, a) === !1)
        break;
    }
    return r;
  };
}
var q0 = z0, H0 = q0, Z0 = H0(), W0 = Z0, at = { exports: {} };
at.exports;
(function(e, r) {
  var t = ge, n = r && !r.nodeType && r, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, u = a ? t.Buffer : void 0, s = u ? u.allocUnsafe : void 0;
  function c(h, y) {
    if (y)
      return h.slice();
    var m = h.length, g = s ? s(m) : new h.constructor(m);
    return h.copy(g), g;
  }
  e.exports = c;
})(at, at.exports);
var ru = at.exports, Y0 = ge, J0 = Y0.Uint8Array, X0 = J0, ka = X0;
function K0(e) {
  var r = new e.constructor(e.byteLength);
  return new ka(r).set(new ka(e)), r;
}
var si = K0, Q0 = si;
function ep(e, r) {
  var t = r ? Q0(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.length);
}
var tu = ep;
function rp(e, r) {
  var t = -1, n = e.length;
  for (r || (r = Array(n)); ++t < n; )
    r[t] = e[t];
  return r;
}
var nu = rp, tp = Me, Da = Object.create, np = function() {
  function e() {
  }
  return function(r) {
    if (!tp(r))
      return {};
    if (Da)
      return Da(r);
    e.prototype = r;
    var t = new e();
    return e.prototype = void 0, t;
  };
}(), ip = np;
function ap(e, r) {
  return function(t) {
    return e(r(t));
  };
}
var iu = ap, op = iu, sp = op(Object.getPrototypeOf, Object), ui = sp, up = Object.prototype;
function lp(e) {
  var r = e && e.constructor, t = typeof r == "function" && r.prototype || up;
  return e === t;
}
var li = lp, fp = ip, cp = ui, dp = li;
function hp(e) {
  return typeof e.constructor == "function" && !dp(e) ? fp(cp(e)) : {};
}
var au = hp, vp = Qn, mp = ni;
function yp(e) {
  return e != null && mp(e.length) && !vp(e);
}
var Ft = yp, pp = Ft, gp = be;
function $p(e) {
  return gp(e) && pp(e);
}
var bp = $p, ot = { exports: {} };
function wp() {
  return !1;
}
var Sp = wp;
ot.exports;
(function(e, r) {
  var t = ge, n = Sp, i = r && !r.nodeType && r, a = i && !0 && e && !e.nodeType && e, u = a && a.exports === i, s = u ? t.Buffer : void 0, c = s ? s.isBuffer : void 0, h = c || n;
  e.exports = h;
})(ot, ot.exports);
var fi = ot.exports, Ep = Ce, Tp = ui, _p = be, Op = "[object Object]", Ip = Function.prototype, Ap = Object.prototype, ou = Ip.toString, xp = Ap.hasOwnProperty, Cp = ou.call(Object);
function Mp(e) {
  if (!_p(e) || Ep(e) != Op)
    return !1;
  var r = Tp(e);
  if (r === null)
    return !0;
  var t = xp.call(r, "constructor") && r.constructor;
  return typeof t == "function" && t instanceof t && ou.call(t) == Cp;
}
var ci = Mp, Np = Ce, Fp = ni, kp = be, Dp = "[object Arguments]", Pp = "[object Array]", Up = "[object Boolean]", Lp = "[object Date]", Rp = "[object Error]", jp = "[object Function]", Bp = "[object Map]", Vp = "[object Number]", Gp = "[object Object]", zp = "[object RegExp]", qp = "[object Set]", Hp = "[object String]", Zp = "[object WeakMap]", Wp = "[object ArrayBuffer]", Yp = "[object DataView]", Jp = "[object Float32Array]", Xp = "[object Float64Array]", Kp = "[object Int8Array]", Qp = "[object Int16Array]", e1 = "[object Int32Array]", r1 = "[object Uint8Array]", t1 = "[object Uint8ClampedArray]", n1 = "[object Uint16Array]", i1 = "[object Uint32Array]", F = {};
F[Jp] = F[Xp] = F[Kp] = F[Qp] = F[e1] = F[r1] = F[t1] = F[n1] = F[i1] = !0;
F[Dp] = F[Pp] = F[Wp] = F[Up] = F[Yp] = F[Lp] = F[Rp] = F[jp] = F[Bp] = F[Vp] = F[Gp] = F[zp] = F[qp] = F[Hp] = F[Zp] = !1;
function a1(e) {
  return kp(e) && Fp(e.length) && !!F[Np(e)];
}
var o1 = a1;
function s1(e) {
  return function(r) {
    return e(r);
  };
}
var di = s1, st = { exports: {} };
st.exports;
(function(e, r) {
  var t = vs, n = r && !r.nodeType && r, i = n && !0 && e && !e.nodeType && e, a = i && i.exports === n, u = a && t.process, s = function() {
    try {
      var c = i && i.require && i.require("util").types;
      return c || u && u.binding && u.binding("util");
    } catch {
    }
  }();
  e.exports = s;
})(st, st.exports);
var hi = st.exports, u1 = o1, l1 = di, Pa = hi, Ua = Pa && Pa.isTypedArray, f1 = Ua ? l1(Ua) : u1, su = f1;
function c1(e, r) {
  if (!(r === "constructor" && typeof e[r] == "function") && r != "__proto__")
    return e[r];
}
var uu = c1, d1 = oi, h1 = Pr, v1 = Object.prototype, m1 = v1.hasOwnProperty;
function y1(e, r, t) {
  var n = e[r];
  (!(m1.call(e, r) && h1(n, t)) || t === void 0 && !(r in e)) && d1(e, r, t);
}
var lu = y1, p1 = lu, g1 = oi;
function $1(e, r, t, n) {
  var i = !t;
  t || (t = {});
  for (var a = -1, u = r.length; ++a < u; ) {
    var s = r[a], c = n ? n(t[s], e[s], s, t, e) : void 0;
    c === void 0 && (c = e[s]), i ? g1(t, s, c) : p1(t, s, c);
  }
  return t;
}
var Fe = $1;
function b1(e, r) {
  for (var t = -1, n = Array(e); ++t < e; )
    n[t] = r(t);
  return n;
}
var w1 = b1, S1 = w1, E1 = bt, T1 = $e, _1 = fi, O1 = ti, I1 = su, A1 = Object.prototype, x1 = A1.hasOwnProperty;
function C1(e, r) {
  var t = T1(e), n = !t && E1(e), i = !t && !n && _1(e), a = !t && !n && !i && I1(e), u = t || n || i || a, s = u ? S1(e.length, String) : [], c = s.length;
  for (var h in e)
    (r || x1.call(e, h)) && !(u && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    O1(h, c))) && s.push(h);
  return s;
}
var fu = C1;
function M1(e) {
  var r = [];
  if (e != null)
    for (var t in Object(e))
      r.push(t);
  return r;
}
var N1 = M1, F1 = Me, k1 = li, D1 = N1, P1 = Object.prototype, U1 = P1.hasOwnProperty;
function L1(e) {
  if (!F1(e))
    return D1(e);
  var r = k1(e), t = [];
  for (var n in e)
    n == "constructor" && (r || !U1.call(e, n)) || t.push(n);
  return t;
}
var R1 = L1, j1 = fu, B1 = R1, V1 = Ft;
function G1(e) {
  return V1(e) ? j1(e, !0) : B1(e);
}
var qe = G1, z1 = Fe, q1 = qe;
function H1(e) {
  return z1(e, q1(e));
}
var Z1 = H1, La = eu, W1 = ru, Y1 = tu, J1 = nu, X1 = au, Ra = bt, ja = $e, K1 = bp, Q1 = fi, eg = Qn, rg = Me, tg = ci, ng = su, Ba = uu, ig = Z1;
function ag(e, r, t, n, i, a, u) {
  var s = Ba(e, t), c = Ba(r, t), h = u.get(c);
  if (h) {
    La(e, t, h);
    return;
  }
  var y = a ? a(s, c, t + "", e, r, u) : void 0, m = y === void 0;
  if (m) {
    var g = ja(c), b = !g && Q1(c), w = !g && !b && ng(c);
    y = c, g || b || w ? ja(s) ? y = s : K1(s) ? y = J1(s) : b ? (m = !1, y = W1(c, !0)) : w ? (m = !1, y = Y1(c, !0)) : y = [] : tg(c) || Ra(c) ? (y = s, Ra(s) ? y = ig(s) : (!rg(s) || eg(s)) && (y = X1(c))) : m = !1;
  }
  m && (u.set(c, y), i(y, c, n, a, u), u.delete(c)), La(e, t, y);
}
var og = ag, sg = Ks, ug = eu, lg = W0, fg = og, cg = Me, dg = qe, hg = uu;
function cu(e, r, t, n, i) {
  e !== r && lg(r, function(a, u) {
    if (i || (i = new sg()), cg(a))
      fg(e, r, u, t, cu, n, i);
    else {
      var s = n ? n(hg(e, u), a, u + "", e, r, i) : void 0;
      s === void 0 && (s = a), ug(e, u, s);
    }
  }, dg);
}
var vg = cu;
function mg(e) {
  return e;
}
var du = mg;
function yg(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var hu = yg, pg = hu, Va = Math.max;
function gg(e, r, t) {
  return r = Va(r === void 0 ? e.length - 1 : r, 0), function() {
    for (var n = arguments, i = -1, a = Va(n.length - r, 0), u = Array(a); ++i < a; )
      u[i] = n[r + i];
    i = -1;
    for (var s = Array(r + 1); ++i < r; )
      s[i] = n[i];
    return s[r] = t(u), pg(e, this, s);
  };
}
var vu = gg;
function $g(e) {
  return function() {
    return e;
  };
}
var bg = $g, wg = bg, Ga = Qs, Sg = du, Eg = Ga ? function(e, r) {
  return Ga(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wg(r),
    writable: !0
  });
} : Sg, Tg = Eg, _g = 800, Og = 16, Ig = Date.now;
function Ag(e) {
  var r = 0, t = 0;
  return function() {
    var n = Ig(), i = Og - (n - t);
    if (t = n, i > 0) {
      if (++r >= _g)
        return arguments[0];
    } else
      r = 0;
    return e.apply(void 0, arguments);
  };
}
var xg = Ag, Cg = Tg, Mg = xg, Ng = Mg(Cg), mu = Ng, Fg = du, kg = vu, Dg = mu;
function Pg(e, r) {
  return Dg(kg(e, r, Fg), e + "");
}
var yu = Pg, Ug = Pr, Lg = Ft, Rg = ti, jg = Me;
function Bg(e, r, t) {
  if (!jg(t))
    return !1;
  var n = typeof r;
  return (n == "number" ? Lg(t) && Rg(r, t.length) : n == "string" && r in t) ? Ug(t[r], e) : !1;
}
var pu = Bg, Vg = yu, Gg = pu;
function zg(e) {
  return Vg(function(r, t) {
    var n = -1, i = t.length, a = i > 1 ? t[i - 1] : void 0, u = i > 2 ? t[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, u && Gg(t[0], t[1], u) && (a = i < 3 ? void 0 : a, i = 1), r = Object(r); ++n < i; ) {
      var s = t[n];
      s && e(r, s, n, a);
    }
    return r;
  });
}
var vi = zg, qg = vg, Hg = vi, Zg = Hg(function(e, r, t) {
  qg(e, r, t);
}), gu = Zg, Wg = Ce, Yg = $e, Jg = be, Xg = "[object String]";
function Kg(e) {
  return typeof e == "string" || !Yg(e) && Jg(e) && Wg(e) == Xg;
}
var Qg = Kg, cr = {};
function e$(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n && r(e[t], t, e) !== !1; )
    ;
  return e;
}
var r$ = e$, t$ = iu, n$ = t$(Object.keys, Object), i$ = n$, a$ = li, o$ = i$, s$ = Object.prototype, u$ = s$.hasOwnProperty;
function l$(e) {
  if (!a$(e))
    return o$(e);
  var r = [];
  for (var t in Object(e))
    u$.call(e, t) && t != "constructor" && r.push(t);
  return r;
}
var f$ = l$, c$ = fu, d$ = f$, h$ = Ft;
function v$(e) {
  return h$(e) ? c$(e) : d$(e);
}
var kt = v$, m$ = Fe, y$ = kt;
function p$(e, r) {
  return e && m$(r, y$(r), e);
}
var g$ = p$, $$ = Fe, b$ = qe;
function w$(e, r) {
  return e && $$(r, b$(r), e);
}
var S$ = w$;
function E$(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++t < n; ) {
    var u = e[t];
    r(u, t, e) && (a[i++] = u);
  }
  return a;
}
var T$ = E$;
function _$() {
  return [];
}
var $u = _$, O$ = T$, I$ = $u, A$ = Object.prototype, x$ = A$.propertyIsEnumerable, za = Object.getOwnPropertySymbols, C$ = za ? function(e) {
  return e == null ? [] : (e = Object(e), O$(za(e), function(r) {
    return x$.call(e, r);
  }));
} : I$, mi = C$, M$ = Fe, N$ = mi;
function F$(e, r) {
  return M$(e, N$(e), r);
}
var k$ = F$;
function D$(e, r) {
  for (var t = -1, n = r.length, i = e.length; ++t < n; )
    e[i + t] = r[t];
  return e;
}
var yi = D$, P$ = yi, U$ = ui, L$ = mi, R$ = $u, j$ = Object.getOwnPropertySymbols, B$ = j$ ? function(e) {
  for (var r = []; e; )
    P$(r, L$(e)), e = U$(e);
  return r;
} : R$, bu = B$, V$ = Fe, G$ = bu;
function z$(e, r) {
  return V$(e, G$(e), r);
}
var q$ = z$, H$ = yi, Z$ = $e;
function W$(e, r, t) {
  var n = r(e);
  return Z$(e) ? n : H$(n, t(e));
}
var wu = W$, Y$ = wu, J$ = mi, X$ = kt;
function K$(e) {
  return Y$(e, X$, J$);
}
var Q$ = K$, eb = wu, rb = bu, tb = qe;
function nb(e) {
  return eb(e, tb, rb);
}
var Su = nb, ib = Ge, ab = ge, ob = ib(ab, "DataView"), sb = ob, ub = Ge, lb = ge, fb = ub(lb, "Promise"), cb = fb, db = Ge, hb = ge, vb = db(hb, "Set"), mb = vb, yb = Ge, pb = ge, gb = yb(pb, "WeakMap"), $b = gb, $n = sb, bn = ei, wn = cb, Sn = mb, En = $b, Eu = Ce, dr = js, qa = "[object Map]", bb = "[object Object]", Ha = "[object Promise]", Za = "[object Set]", Wa = "[object WeakMap]", Ya = "[object DataView]", wb = dr($n), Sb = dr(bn), Eb = dr(wn), Tb = dr(Sn), _b = dr(En), Pe = Eu;
($n && Pe(new $n(new ArrayBuffer(1))) != Ya || bn && Pe(new bn()) != qa || wn && Pe(wn.resolve()) != Ha || Sn && Pe(new Sn()) != Za || En && Pe(new En()) != Wa) && (Pe = function(e) {
  var r = Eu(e), t = r == bb ? e.constructor : void 0, n = t ? dr(t) : "";
  if (n)
    switch (n) {
      case wb:
        return Ya;
      case Sb:
        return qa;
      case Eb:
        return Ha;
      case Tb:
        return Za;
      case _b:
        return Wa;
    }
  return r;
});
var pi = Pe, Ob = Object.prototype, Ib = Ob.hasOwnProperty;
function Ab(e) {
  var r = e.length, t = new e.constructor(r);
  return r && typeof e[0] == "string" && Ib.call(e, "index") && (t.index = e.index, t.input = e.input), t;
}
var xb = Ab, Cb = si;
function Mb(e, r) {
  var t = r ? Cb(e.buffer) : e.buffer;
  return new e.constructor(t, e.byteOffset, e.byteLength);
}
var Nb = Mb, Fb = /\w*$/;
function kb(e) {
  var r = new e.constructor(e.source, Fb.exec(e));
  return r.lastIndex = e.lastIndex, r;
}
var Db = kb, Ja = Dr, Xa = Ja ? Ja.prototype : void 0, Ka = Xa ? Xa.valueOf : void 0;
function Pb(e) {
  return Ka ? Object(Ka.call(e)) : {};
}
var Ub = Pb, Lb = si, Rb = Nb, jb = Db, Bb = Ub, Vb = tu, Gb = "[object Boolean]", zb = "[object Date]", qb = "[object Map]", Hb = "[object Number]", Zb = "[object RegExp]", Wb = "[object Set]", Yb = "[object String]", Jb = "[object Symbol]", Xb = "[object ArrayBuffer]", Kb = "[object DataView]", Qb = "[object Float32Array]", ew = "[object Float64Array]", rw = "[object Int8Array]", tw = "[object Int16Array]", nw = "[object Int32Array]", iw = "[object Uint8Array]", aw = "[object Uint8ClampedArray]", ow = "[object Uint16Array]", sw = "[object Uint32Array]";
function uw(e, r, t) {
  var n = e.constructor;
  switch (r) {
    case Xb:
      return Lb(e);
    case Gb:
    case zb:
      return new n(+e);
    case Kb:
      return Rb(e, t);
    case Qb:
    case ew:
    case rw:
    case tw:
    case nw:
    case iw:
    case aw:
    case ow:
    case sw:
      return Vb(e, t);
    case qb:
      return new n();
    case Hb:
    case Yb:
      return new n(e);
    case Zb:
      return jb(e);
    case Wb:
      return new n();
    case Jb:
      return Bb(e);
  }
}
var lw = uw, fw = pi, cw = be, dw = "[object Map]";
function hw(e) {
  return cw(e) && fw(e) == dw;
}
var vw = hw, mw = vw, yw = di, Qa = hi, eo = Qa && Qa.isMap, pw = eo ? yw(eo) : mw, gw = pw, $w = pi, bw = be, ww = "[object Set]";
function Sw(e) {
  return bw(e) && $w(e) == ww;
}
var Ew = Sw, Tw = Ew, _w = di, ro = hi, to = ro && ro.isSet, Ow = to ? _w(to) : Tw, Iw = Ow, Aw = Ks, xw = r$, Cw = lu, Mw = g$, Nw = S$, Fw = ru, kw = nu, Dw = k$, Pw = q$, Uw = Q$, Lw = Su, Rw = pi, jw = xb, Bw = lw, Vw = au, Gw = $e, zw = fi, qw = gw, Hw = Me, Zw = Iw, Ww = kt, Yw = qe, Jw = 1, Xw = 2, Kw = 4, Tu = "[object Arguments]", Qw = "[object Array]", e2 = "[object Boolean]", r2 = "[object Date]", t2 = "[object Error]", _u = "[object Function]", n2 = "[object GeneratorFunction]", i2 = "[object Map]", a2 = "[object Number]", Ou = "[object Object]", o2 = "[object RegExp]", s2 = "[object Set]", u2 = "[object String]", l2 = "[object Symbol]", f2 = "[object WeakMap]", c2 = "[object ArrayBuffer]", d2 = "[object DataView]", h2 = "[object Float32Array]", v2 = "[object Float64Array]", m2 = "[object Int8Array]", y2 = "[object Int16Array]", p2 = "[object Int32Array]", g2 = "[object Uint8Array]", $2 = "[object Uint8ClampedArray]", b2 = "[object Uint16Array]", w2 = "[object Uint32Array]", N = {};
N[Tu] = N[Qw] = N[c2] = N[d2] = N[e2] = N[r2] = N[h2] = N[v2] = N[m2] = N[y2] = N[p2] = N[i2] = N[a2] = N[Ou] = N[o2] = N[s2] = N[u2] = N[l2] = N[g2] = N[$2] = N[b2] = N[w2] = !0;
N[t2] = N[_u] = N[f2] = !1;
function et(e, r, t, n, i, a) {
  var u, s = r & Jw, c = r & Xw, h = r & Kw;
  if (t && (u = i ? t(e, n, i, a) : t(e)), u !== void 0)
    return u;
  if (!Hw(e))
    return e;
  var y = Gw(e);
  if (y) {
    if (u = jw(e), !s)
      return kw(e, u);
  } else {
    var m = Rw(e), g = m == _u || m == n2;
    if (zw(e))
      return Fw(e, s);
    if (m == Ou || m == Tu || g && !i) {
      if (u = c || g ? {} : Vw(e), !s)
        return c ? Pw(e, Nw(u, e)) : Dw(e, Mw(u, e));
    } else {
      if (!N[m])
        return i ? e : {};
      u = Bw(e, m, s);
    }
  }
  a || (a = new Aw());
  var b = a.get(e);
  if (b)
    return b;
  a.set(e, u), Zw(e) ? e.forEach(function(_) {
    u.add(et(_, r, t, _, e, a));
  }) : qw(e) && e.forEach(function(_, E) {
    u.set(E, et(_, r, t, E, e, a));
  });
  var w = h ? c ? Lw : Uw : c ? Yw : Ww, T = y ? void 0 : w(e);
  return xw(T || e, function(_, E) {
    T && (E = _, _ = e[E]), Cw(u, E, et(_, r, t, E, e, a));
  }), u;
}
var S2 = et;
function E2(e) {
  var r = e == null ? 0 : e.length;
  return r ? e[r - 1] : void 0;
}
var T2 = E2, _2 = $t, O2 = ii;
function I2(e, r) {
  r = _2(r, e);
  for (var t = 0, n = r.length; e != null && t < n; )
    e = e[O2(r[t++])];
  return t && t == n ? e : void 0;
}
var A2 = I2, x2 = A2, C2 = ps;
function M2(e, r) {
  return r.length < 2 ? e : x2(e, C2(r, 0, -1));
}
var N2 = M2, F2 = $t, k2 = T2, D2 = N2, P2 = ii;
function U2(e, r) {
  return r = F2(r, e), e = D2(e, r), e == null || delete e[P2(k2(r))];
}
var L2 = U2, R2 = ci;
function j2(e) {
  return R2(e) ? void 0 : e;
}
var B2 = j2, no = Dr, V2 = bt, G2 = $e, io = no ? no.isConcatSpreadable : void 0;
function z2(e) {
  return G2(e) || V2(e) || !!(io && e && e[io]);
}
var q2 = z2, H2 = yi, Z2 = q2;
function Iu(e, r, t, n, i) {
  var a = -1, u = e.length;
  for (t || (t = Z2), i || (i = []); ++a < u; ) {
    var s = e[a];
    r > 0 && t(s) ? r > 1 ? Iu(s, r - 1, t, n, i) : H2(i, s) : n || (i[i.length] = s);
  }
  return i;
}
var W2 = Iu, Y2 = W2;
function J2(e) {
  var r = e == null ? 0 : e.length;
  return r ? Y2(e, 1) : [];
}
var X2 = J2, K2 = X2, Q2 = vu, eS = mu;
function rS(e) {
  return eS(Q2(e, void 0, K2), e + "");
}
var tS = rS, nS = Xn, iS = S2, aS = L2, oS = $t, sS = Fe, uS = B2, lS = tS, fS = Su, cS = 1, dS = 2, hS = 4, vS = lS(function(e, r) {
  var t = {};
  if (e == null)
    return t;
  var n = !1;
  r = nS(r, function(a) {
    return a = oS(a, e), n || (n = a.length > 1), a;
  }), sS(e, fS(e), t), n && (t = iS(t, cS | dS | hS, uS));
  for (var i = r.length; i--; )
    aS(t, r[i]);
  return t;
}), mS = vS, yS = Fe, pS = vi, gS = qe, $S = pS(function(e, r) {
  yS(r, gS(r), e);
}), bS = $S, wS = bS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function SS() {
  return typeof Symbol == "function" && typeof Symbol("foo") == "symbol";
}
var ES = SS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TS = ES, _S = TS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var OS = _S, IS = OS();
function AS() {
  return IS && typeof Symbol.toStringTag == "symbol";
}
var xS = AS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CS = xS, Dt = CS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MS = Object.prototype.toString, Au = MS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var NS = Au;
function FS(e) {
  return NS.call(e);
}
var kS = FS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DS = Object.prototype.hasOwnProperty;
function PS(e, r) {
  return e == null ? !1 : DS.call(e, r);
}
var US = PS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var LS = US, hr = LS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RS = typeof Symbol == "function" ? Symbol.toStringTag : "", jS = RS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var BS = hr, Sr = jS, rn = Au;
function VS(e) {
  var r, t, n;
  if (e == null)
    return rn.call(e);
  t = e[Sr], r = BS(e, Sr);
  try {
    e[Sr] = void 0;
  } catch {
    return rn.call(e);
  }
  return n = rn.call(e), r ? e[Sr] = t : delete e[Sr], n;
}
var GS = VS;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zS = Dt, qS = kS, HS = GS, Tn;
zS() ? Tn = HS : Tn = qS;
var z = Tn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZS = z, _n;
function WS(e) {
  return ZS(e) === "[object Array]";
}
Array.isArray ? _n = Array.isArray : _n = WS;
var YS = _n;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var JS = YS, Pt = JS;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var XS = typeof Object.defineProperty == "function" ? Object.defineProperty : null, KS = XS;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var QS = KS;
function eE() {
  try {
    return QS({}, "x", {}), !0;
  } catch {
    return !1;
  }
}
var rE = eE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tE = Object.defineProperty, nE = tE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vr = Object.prototype, ao = vr.toString, oo = vr.__defineGetter__, so = vr.__defineSetter__, iE = vr.__lookupGetter__, aE = vr.__lookupSetter__;
function oE(e, r, t) {
  var n, i, a, u;
  if (typeof e != "object" || e === null || ao.call(e) === "[object Array]")
    throw new TypeError("invalid argument. First argument must be an object. Value: `" + e + "`.");
  if (typeof t != "object" || t === null || ao.call(t) === "[object Array]")
    throw new TypeError("invalid argument. Property descriptor must be an object. Value: `" + t + "`.");
  if (i = "value" in t, i && (iE.call(e, r) || aE.call(e, r) ? (n = e.__proto__, e.__proto__ = vr, delete e[r], e[r] = t.value, e.__proto__ = n) : e[r] = t.value), a = "get" in t, u = "set" in t, i && (a || u))
    throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");
  return a && oo && oo.call(e, r, t.get), u && so && so.call(e, r, t.set), e;
}
var sE = oE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var uE = rE, lE = nE, fE = sE, On;
uE() ? On = lE : On = fE;
var xu = On;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cE = xu;
function dE(e, r, t) {
  cE(e, r, {
    configurable: !1,
    enumerable: !1,
    writable: !1,
    value: t
  });
}
var hE = dE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vE = hE, Ee = vE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function mE(e) {
  return typeof e == "number";
}
var Cu = mE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var yE = Number;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pE = yE, gi = pE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gE = gi, $E = gE.prototype.toString, bE = $E;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wE = bE;
function SE(e) {
  try {
    return wE.call(e), !0;
  } catch {
    return !1;
  }
}
var EE = SE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TE = Dt, _E = z, OE = gi, IE = EE, AE = TE();
function xE(e) {
  return typeof e == "object" ? e instanceof OE ? !0 : AE ? IE(e) : _E(e) === "[object Number]" : !1;
}
var Mu = xE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var CE = Cu, ME = Mu;
function NE(e) {
  return CE(e) || ME(e);
}
var FE = NE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Nu = Ee, $i = FE, kE = Cu, DE = Mu;
Nu($i, "isPrimitive", kE);
Nu($i, "isObject", DE);
var Ut = $i;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PE = Number.POSITIVE_INFINITY, bi = PE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UE = gi, LE = UE.NEGATIVE_INFINITY, RE = LE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jE = Math.floor, BE = jE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VE = BE, GE = VE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zE = GE;
function qE(e) {
  return zE(e) === e;
}
var HE = qE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZE = HE, wi = ZE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WE = bi, YE = RE, JE = wi;
function XE(e) {
  return e < WE && e > YE && JE(e);
}
var Fu = XE;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var KE = Ut.isPrimitive, QE = Fu;
function eT(e) {
  return KE(e) && QE(e);
}
var ku = eT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rT = Ut.isObject, tT = Fu;
function nT(e) {
  return rT(e) && tT(e.valueOf());
}
var Du = nT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var iT = ku, aT = Du;
function oT(e) {
  return iT(e) || aT(e);
}
var sT = oT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Pu = Ee, Si = sT, uT = ku, lT = Du;
Pu(Si, "isPrimitive", uT);
Pu(Si, "isObject", lT);
var Lt = Si;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fT = Lt.isPrimitive;
function cT(e) {
  return fT(e) && e >= 0;
}
var Uu = cT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dT = Lt.isObject;
function hT(e) {
  return dT(e) && e.valueOf() >= 0;
}
var Lu = hT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vT = Uu, mT = Lu;
function yT(e) {
  return vT(e) || mT(e);
}
var pT = yT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ru = Ee, Ei = pT, gT = Uu, $T = Lu;
Ru(Ei, "isPrimitive", gT);
Ru(Ei, "isObject", $T);
var bT = Ei;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wT = Pt;
function ST(e) {
  if (typeof e != "function")
    throw new TypeError("invalid argument. Must provide a function. Value: `" + e + "`.");
  return r;
  function r(t) {
    var n, i;
    if (!wT(t) || (n = t.length, n === 0))
      return !1;
    for (i = 0; i < n; i++)
      if (e(t[i]) === !1)
        return !1;
    return !0;
  }
}
var ET = ST;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var TT = ET, _T = TT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function OT(e) {
  return e !== null && typeof e == "object";
}
var IT = OT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var AT = Ee, xT = _T, Ti = IT, CT = xT(Ti);
AT(Ti, "isObjectLikeArray", CT);
var ju = Ti;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MT = ju;
function NT(e) {
  return MT(e) && // eslint-disable-next-line no-underscore-dangle
  (e._isBuffer || // for envs missing Object.prototype.constructor (e.g., Safari 5-7)
  e.constructor && // WARNING: `typeof` is not a foolproof check, as certain envs consider RegExp and NodeList instances to be functions
  typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e));
}
var FT = NT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kT = FT, Lr = kT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DT = /./, PT = DT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function UT(e) {
  return typeof e == "boolean";
}
var Bu = UT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var LT = Boolean.prototype.toString, RT = LT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var jT = RT;
function BT(e) {
  try {
    return jT.call(e), !0;
  } catch {
    return !1;
  }
}
var VT = BT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GT = Dt, zT = z, qT = VT, HT = GT();
function ZT(e) {
  return typeof e == "object" ? e instanceof Boolean ? !0 : HT ? qT(e) : zT(e) === "[object Boolean]" : !1;
}
var Vu = ZT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WT = Bu, YT = Vu;
function JT(e) {
  return WT(e) || YT(e);
}
var XT = JT;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Gu = Ee, _i = XT, KT = Bu, QT = Vu;
Gu(_i, "isPrimitive", KT);
Gu(_i, "isObject", QT);
var e_ = _i;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function r_() {
  return new Function("return this;")();
}
var t_ = r_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n_ = typeof self == "object" ? self : null, i_ = n_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var a_ = typeof window == "object" ? window : null, o_ = a_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var s_ = typeof nr == "object" ? nr : null, u_ = s_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var l_ = e_.isPrimitive, f_ = t_, uo = i_, lo = o_, fo = u_;
function c_(e) {
  if (arguments.length) {
    if (!l_(e))
      throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `" + e + "`.");
    if (e)
      return f_();
  }
  if (uo)
    return uo;
  if (lo)
    return lo;
  if (fo)
    return fo;
  throw new Error("unexpected error. Unable to resolve global object.");
}
var d_ = c_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var h_ = d_, v_ = h_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var m_ = v_, co = m_(), y_ = co.document && co.document.childNodes, p_ = y_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var g_ = Int8Array, $_ = g_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var b_ = PT, w_ = p_, S_ = $_;
function E_() {
  return (
    // Chrome 1-12 returns 'function' for regular expression instances (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof):
    typeof b_ == "function" || // Safari 8 returns 'object' for typed array and weak map constructors (underscore #1929):
    typeof S_ == "object" || // PhantomJS 1.9 returns 'function' for `NodeList` instances (underscore #2236):
    typeof w_ == "function"
  );
}
var T_ = E_;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function __() {
  return /^\s*function\s*([^(]*)/i;
}
var zu = __;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var O_ = zu, I_ = O_(), A_ = I_;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x_ = Ee, qu = zu, C_ = A_;
x_(qu, "REGEXP", C_);
var M_ = qu;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var N_ = z, F_ = M_.REGEXP, k_ = Lr;
function D_(e) {
  var r, t, n;
  if (t = N_(e).slice(8, -1), (t === "Object" || t === "Error") && e.constructor) {
    if (n = e.constructor, typeof n.name == "string")
      return n.name;
    if (r = F_.exec(n.toString()), r)
      return r[1];
  }
  return k_(e) ? "Buffer" : t;
}
var P_ = D_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var U_ = P_, Hu = U_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var L_ = Hu;
function R_(e) {
  var r;
  return e === null ? "null" : (r = typeof e, r === "object" ? L_(e).toLowerCase() : r);
}
var j_ = R_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var B_ = Hu;
function V_(e) {
  return B_(e).toLowerCase();
}
var G_ = V_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var z_ = T_, q_ = j_, H_ = G_, Z_ = z_() ? H_ : q_, Oi = Z_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var W_ = Oi;
function Y_(e) {
  return W_(e) === "function";
}
var J_ = Y_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var X_ = J_, Zu = X_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K_ = Object.getPrototypeOf, Q_ = K_;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function eO(e) {
  return e.__proto__;
}
var rO = eO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tO = z, nO = rO;
function iO(e) {
  var r = nO(e);
  return r || r === null ? r : tO(e.constructor) === "[object Function]" ? e.constructor.prototype : e instanceof Object ? Object.prototype : null;
}
var aO = iO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var oO = Zu, sO = Q_, uO = aO, In;
oO(Object.getPrototypeOf) ? In = sO : In = uO;
var lO = In;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var fO = lO;
function cO(e) {
  return e == null ? null : (e = Object(e), fO(e));
}
var dO = cO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hO = dO, Wu = hO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var vO = Wu, mO = z;
function yO(e) {
  if (typeof e != "object" || e === null)
    return !1;
  if (e instanceof Error)
    return !0;
  for (; e; ) {
    if (mO(e) === "[object Error]")
      return !0;
    e = vO(e);
  }
  return !1;
}
var pO = yO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var gO = pO, $O = gO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function bO(e) {
  return typeof e == "string";
}
var Yu = bO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wO = String.prototype.valueOf, SO = wO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var EO = SO;
function TO(e) {
  try {
    return EO.call(e), !0;
  } catch {
    return !1;
  }
}
var _O = TO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var OO = Dt, IO = z, AO = _O, xO = OO();
function CO(e) {
  return typeof e == "object" ? e instanceof String ? !0 : xO ? AO(e) : IO(e) === "[object String]" : !1;
}
var Ju = CO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MO = Yu, NO = Ju;
function FO(e) {
  return MO(e) || NO(e);
}
var kO = FO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Xu = Ee, Ii = kO, DO = Yu, PO = Ju;
Xu(Ii, "isPrimitive", DO);
Xu(Ii, "isObject", PO);
var Ai = Ii;
/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function UO() {
  return /^\/((?:\\\/|[^\/])+)\/([imgy]*)$/;
}
var Ku = UO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var LO = Ku, RO = LO(), jO = RO;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var BO = Ee, Qu = Ku, VO = jO;
BO(Qu, "REGEXP", VO);
var GO = Qu;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function zO(e) {
  return typeof e == "number";
}
var el = zO;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function qO(e) {
  return e[0] === "-";
}
function ho(e) {
  var r = "", t;
  for (t = 0; t < e; t++)
    r += "0";
  return r;
}
function HO(e, r, t) {
  var n = !1, i = r - e.length;
  return i < 0 || (qO(e) && (n = !0, e = e.substr(1)), e = t ? e + ho(i) : ho(i) + e, n && (e = "-" + e)), e;
}
var rl = HO;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZO = el, vo = rl, WO = String.prototype.toLowerCase, mo = String.prototype.toUpperCase;
function YO(e) {
  var r, t, n;
  switch (e.specifier) {
    case "b":
      r = 2;
      break;
    case "o":
      r = 8;
      break;
    case "x":
    case "X":
      r = 16;
      break;
    case "d":
    case "i":
    case "u":
    default:
      r = 10;
      break;
  }
  if (t = e.arg, n = parseInt(t, 10), !isFinite(n)) {
    if (!ZO(t))
      throw new Error("invalid integer. Value: " + t);
    n = 0;
  }
  return n < 0 && (e.specifier === "u" || r !== 10) && (n = 4294967295 + n + 1), n < 0 ? (t = (-n).toString(r), e.precision && (t = vo(t, e.precision, e.padRight)), t = "-" + t) : (t = n.toString(r), !n && !e.precision ? t = "" : e.precision && (t = vo(t, e.precision, e.padRight)), e.sign && (t = e.sign + t)), r === 16 && (e.alternate && (t = "0x" + t), t = e.specifier === mo.call(e.specifier) ? mo.call(t) : WO.call(t)), r === 8 && e.alternate && t.charAt(0) !== "0" && (t = "0" + t), t;
}
var JO = YO;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function XO(e) {
  return typeof e == "string";
}
var KO = XO;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var QO = el, eI = Math.abs, rI = String.prototype.toLowerCase, yo = String.prototype.toUpperCase, ke = String.prototype.replace, tI = /e\+(\d)$/, nI = /e-(\d)$/, iI = /^(\d+)$/, aI = /^(\d+)e/, oI = /\.0$/, sI = /\.0*e/, uI = /(\..*[^0])0*e/;
function lI(e) {
  var r, t, n = parseFloat(e.arg);
  if (!isFinite(n)) {
    if (!QO(e.arg))
      throw new Error("invalid floating-point number. Value: " + t);
    n = e.arg;
  }
  switch (e.specifier) {
    case "e":
    case "E":
      t = n.toExponential(e.precision);
      break;
    case "f":
    case "F":
      t = n.toFixed(e.precision);
      break;
    case "g":
    case "G":
      eI(n) < 1e-4 ? (r = e.precision, r > 0 && (r -= 1), t = n.toExponential(r)) : t = n.toPrecision(e.precision), e.alternate || (t = ke.call(t, uI, "$1e"), t = ke.call(t, sI, "e"), t = ke.call(t, oI, ""));
      break;
    default:
      throw new Error("invalid double notation. Value: " + e.specifier);
  }
  return t = ke.call(t, tI, "e+0$1"), t = ke.call(t, nI, "e-0$1"), e.alternate && (t = ke.call(t, iI, "$1."), t = ke.call(t, aI, "$1.e")), n >= 0 && e.sign && (t = e.sign + t), t = e.specifier === yo.call(e.specifier) ? yo.call(t) : rI.call(t), t;
}
var fI = lI;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function po(e) {
  var r = "", t;
  for (t = 0; t < e; t++)
    r += " ";
  return r;
}
function cI(e, r, t) {
  var n = r - e.length;
  return n < 0 || (e = t ? e + po(n) : po(n) + e), e;
}
var dI = cI;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hI = JO, vI = KO, mI = fI, yI = dI, pI = rl, gI = String.fromCharCode, Zr = isNaN, $I = Array.isArray;
function bI(e) {
  var r = {};
  return r.specifier = e.specifier, r.precision = e.precision === void 0 ? 1 : e.precision, r.width = e.width, r.flags = e.flags || "", r.mapping = e.mapping, r;
}
function wI(e) {
  var r, t, n, i, a, u, s, c, h;
  if (!$I(e))
    throw new TypeError("invalid argument. First argument must be an array. Value: `" + e + "`.");
  for (u = "", s = 1, c = 0; c < e.length; c++)
    if (n = e[c], vI(n))
      u += n;
    else {
      if (r = n.precision !== void 0, n = bI(n), !n.specifier)
        throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `" + c + "`. Value: `" + n + "`.");
      for (n.mapping && (s = n.mapping), t = n.flags, h = 0; h < t.length; h++)
        switch (i = t.charAt(h), i) {
          case " ":
            n.sign = " ";
            break;
          case "+":
            n.sign = "+";
            break;
          case "-":
            n.padRight = !0, n.padZeros = !1;
            break;
          case "0":
            n.padZeros = t.indexOf("-") < 0;
            break;
          case "#":
            n.alternate = !0;
            break;
          default:
            throw new Error("invalid flag: " + i);
        }
      if (n.width === "*") {
        if (n.width = parseInt(arguments[s], 10), s += 1, Zr(n.width))
          throw new TypeError("the argument for * width at position " + s + " is not a number. Value: `" + n.width + "`.");
        n.width < 0 && (n.padRight = !0, n.width = -n.width);
      }
      if (r && n.precision === "*") {
        if (n.precision = parseInt(arguments[s], 10), s += 1, Zr(n.precision))
          throw new TypeError("the argument for * precision at position " + s + " is not a number. Value: `" + n.precision + "`.");
        n.precision < 0 && (n.precision = 1, r = !1);
      }
      switch (n.arg = arguments[s], n.specifier) {
        case "b":
        case "o":
        case "x":
        case "X":
        case "d":
        case "i":
        case "u":
          r && (n.padZeros = !1), n.arg = hI(n);
          break;
        case "s":
          n.maxWidth = r ? n.precision : -1;
          break;
        case "c":
          if (!Zr(n.arg)) {
            if (a = parseInt(n.arg, 10), a < 0 || a > 127)
              throw new Error("invalid character code. Value: " + n.arg);
            n.arg = Zr(a) ? String(n.arg) : gI(a);
          }
          break;
        case "e":
        case "E":
        case "f":
        case "F":
        case "g":
        case "G":
          r || (n.precision = 6), n.arg = mI(n);
          break;
        default:
          throw new Error("invalid specifier: " + n.specifier);
      }
      n.maxWidth >= 0 && n.arg.length > n.maxWidth && (n.arg = n.arg.substring(0, n.maxWidth)), n.padZeros ? n.arg = pI(n.arg, n.width || n.precision, n.padRight) : n.width && (n.arg = yI(n.arg, n.width, n.padRight)), u += n.arg || "", s += 1;
    }
  return u;
}
var SI = wI;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var EI = SI, TI = EI;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Wr = /%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;
function _I(e) {
  var r = {
    mapping: e[1] ? parseInt(e[1], 10) : void 0,
    flags: e[2],
    width: e[3],
    precision: e[5],
    specifier: e[6]
  };
  return e[4] === "." && e[5] === void 0 && (r.precision = "1"), r;
}
function OI(e) {
  var r, t, n, i;
  for (t = [], i = 0, n = Wr.exec(e); n; )
    r = e.slice(i, Wr.lastIndex - n[0].length), r.length && t.push(r), t.push(_I(n)), i = Wr.lastIndex, n = Wr.exec(e);
  return r = e.slice(i), r.length && t.push(r), t;
}
var II = OI;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var AI = II, xI = AI;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function CI(e) {
  return typeof e == "string";
}
var MI = CI;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var NI = TI, FI = xI, kI = MI;
function tl(e) {
  var r, t, n;
  if (!kI(e))
    throw new TypeError(tl("invalid argument. First argument must be a string. Value: `%s`.", e));
  for (r = FI(e), t = new Array(arguments.length), t[0] = r, n = 1; n < t.length; n++)
    t[n] = arguments[n];
  return NI.apply(null, t);
}
var DI = tl;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PI = DI, UI = PI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var LI = Ai.isPrimitive, RI = GO, jI = UI;
function BI(e) {
  if (!LI(e))
    throw new TypeError(jI("invalid argument. Must provide a regular expression string. Value: `%s`.", e));
  return e = RI().exec(e), e ? new RegExp(e[1], e[2]) : null;
}
var VI = BI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GI = VI, zI = GI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function qI(e) {
  return e !== e;
}
var HI = qI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ZI = HI, nl = ZI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WI = Ut.isPrimitive, YI = nl;
function JI(e) {
  return WI(e) && YI(e);
}
var il = JI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var XI = Ut.isObject, KI = nl;
function QI(e) {
  return XI(e) && KI(e.valueOf());
}
var al = QI;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eA = il, rA = al;
function tA(e) {
  return eA(e) || rA(e);
}
var nA = tA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ol = Ee, xi = nA, iA = il, aA = al;
ol(xi, "isPrimitive", iA);
ol(xi, "isObject", aA);
var sl = xi;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var oA = 9007199254740991, sA = oA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var uA = wi, lA = sA;
function fA(e) {
  return typeof e == "object" && e !== null && typeof e.length == "number" && uA(e.length) && e.length >= 0 && e.length <= lA;
}
var cA = fA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var dA = cA, hA = dA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var go = sl, vA = hA, mA = Ai.isPrimitive, yA = Lt.isPrimitive;
function pA(e, r, t) {
  var n, i;
  if (!vA(e) && !mA(e))
    throw new TypeError("invalid argument. First argument must be an array-like object. Value: `" + e + "`.");
  if (n = e.length, n === 0)
    return -1;
  if (arguments.length === 3) {
    if (!yA(t))
      throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `" + t + "`.");
    if (t >= 0) {
      if (t >= n)
        return -1;
      i = t;
    } else
      i = n + t, i < 0 && (i = 0);
  } else
    i = 0;
  if (go(r)) {
    for (; i < n; i++)
      if (go(e[i]))
        return i;
  } else
    for (; i < n; i++)
      if (e[i] === r)
        return i;
  return -1;
}
var gA = pA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $A = gA, ul = $A;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function bA(e) {
  return Object.keys(Object(e));
}
var Ci = bA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wA = Ci;
function SA() {
  return (wA(arguments) || "").length !== 2;
}
function EA() {
  return SA(1, 2);
}
var TA = EA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _A = typeof Object.keys < "u", OA = _A;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IA = z;
function AA(e) {
  return IA(e) === "[object Arguments]";
}
var ll = AA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xA = ll, fl;
function CA() {
  return xA(arguments);
}
fl = CA();
var MA = fl;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var NA = Object.prototype.propertyIsEnumerable, cl = NA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var FA = cl, dl;
function kA() {
  return !FA.call("beep", "0");
}
dl = kA();
var DA = dl;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var PA = Ai, UA = sl.isPrimitive, LA = Lt.isPrimitive, RA = cl, jA = DA;
function BA(e, r) {
  var t;
  return e == null ? !1 : (t = RA.call(e, r), !t && jA && PA(e) ? (r = +r, !UA(r) && LA(r) && r >= 0 && r < e.length) : t);
}
var VA = BA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var GA = VA, Mi = GA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zA = 4294967295, hl = zA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var qA = hr, HA = Mi, ZA = Pt, WA = wi, YA = hl;
function JA(e) {
  return e !== null && typeof e == "object" && !ZA(e) && typeof e.length == "number" && WA(e.length) && e.length >= 0 && e.length <= YA && qA(e, "callee") && !HA(e, "callee");
}
var XA = JA;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var KA = MA, QA = ll, ex = XA, An;
KA ? An = QA : An = ex;
var vl = An;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rx = vl, $o = Ci, tx = Array.prototype.slice;
function nx(e) {
  return rx(e) ? $o(tx.call(e)) : $o(e);
}
var ix = nx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function ax() {
}
var ox = ax;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sx = ox, ux = sx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lx = Mi, fx = ux, cx = lx(fx, "prototype"), dx = cx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hx = Mi, vx = {
  toString: null
}, mx = !hx(vx, "toString"), yx = mx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function px(e) {
  return e.constructor && e.constructor.prototype === e;
}
var ml = px;
const gx = [
  "console",
  "external",
  "frame",
  "frameElement",
  "frames",
  "innerHeight",
  "innerWidth",
  "outerHeight",
  "outerWidth",
  "pageXOffset",
  "pageYOffset",
  "parent",
  "scrollLeft",
  "scrollTop",
  "scrollX",
  "scrollY",
  "self",
  "webkitIndexedDB",
  "webkitStorageInfo",
  "window"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $x = typeof window > "u" ? void 0 : window, bx = $x;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wx = hr, Sx = ul, bo = Oi, Ex = ml, Tx = gx, Xe = bx, yl;
function _x() {
  var e;
  if (bo(Xe) === "undefined")
    return !1;
  for (e in Xe)
    try {
      Sx(Tx, e) === -1 && wx(Xe, e) && Xe[e] !== null && bo(Xe[e]) === "object" && Ex(Xe[e]);
    } catch {
      return !0;
    }
  return !1;
}
yl = _x();
var Ox = yl;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Ix = typeof window < "u", Ax = Ix;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var xx = Ox, wo = ml, Cx = Ax;
function Mx(e) {
  if (Cx === !1 && !xx)
    return wo(e);
  try {
    return wo(e);
  } catch {
    return !1;
  }
}
var Nx = Mx;
const Fx = [
  "toString",
  "toLocaleString",
  "valueOf",
  "hasOwnProperty",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "constructor"
];
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kx = ju, tn = hr, Dx = vl, Px = dx, Ux = yx, Lx = Nx, So = Fx;
function Rx(e) {
  var r, t, n, i, a, u, s;
  if (i = [], Dx(e)) {
    for (s = 0; s < e.length; s++)
      i.push(s.toString());
    return i;
  }
  if (typeof e == "string") {
    if (e.length > 0 && !tn(e, "0"))
      for (s = 0; s < e.length; s++)
        i.push(s.toString());
  } else {
    if (n = typeof e == "function", n === !1 && !kx(e))
      return i;
    t = Px && n;
  }
  for (a in e)
    !(t && a === "prototype") && tn(e, a) && i.push(String(a));
  if (Ux)
    for (r = Lx(e), s = 0; s < So.length; s++)
      u = So[s], !(r && u === "constructor") && tn(e, u) && i.push(String(u));
  return i;
}
var jx = Rx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Bx = TA, Vx = OA, Gx = Ci, zx = ix, qx = jx, rt;
Vx ? Bx() ? rt = zx : rt = Gx : rt = qx;
var Hx = rt;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Zx = Hx, pl = Zx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Wx = typeof Object.getOwnPropertyNames < "u", Yx = Wx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Jx = Object.getOwnPropertyNames;
function Xx(e) {
  return Jx(Object(e));
}
var Kx = Xx;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var Qx = pl;
function e3(e) {
  return Qx(Object(e));
}
var r3 = e3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var t3 = Yx, n3 = Kx, i3 = r3, xn;
t3 ? xn = n3 : xn = i3;
var a3 = xn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var o3 = typeof Object.getOwnPropertyDescriptor < "u", s3 = o3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var u3 = Object.getOwnPropertyDescriptor;
function l3(e, r) {
  var t;
  return e == null ? null : (t = u3(e, r), t === void 0 ? null : t);
}
var f3 = l3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var c3 = hr;
function d3(e, r) {
  return c3(e, r) ? {
    configurable: !0,
    enumerable: !0,
    writable: !0,
    value: e[r]
  } : null;
}
var h3 = d3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var v3 = s3, m3 = f3, y3 = h3, Cn;
v3 ? Cn = m3 : Cn = y3;
var p3 = Cn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var g3 = typeof Buffer == "function" ? Buffer : null, $3 = g3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var b3 = Lr, Yr = $3;
function w3() {
  var e, r;
  if (typeof Yr != "function")
    return !1;
  try {
    typeof Yr.from == "function" ? r = Yr.from([1, 2, 3, 4]) : r = new Yr([1, 2, 3, 4]), e = b3(r) && r[0] === 1 && r[1] === 2 && r[2] === 3 && r[3] === 4;
  } catch {
    e = !1;
  }
  return e;
}
var S3 = w3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var E3 = S3, T3 = E3, gl = {}, Rt = {};
Rt.byteLength = I3;
Rt.toByteArray = x3;
Rt.fromByteArray = N3;
var ve = [], ie = [], _3 = typeof Uint8Array < "u" ? Uint8Array : Array, nn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Ke = 0, O3 = nn.length; Ke < O3; ++Ke)
  ve[Ke] = nn[Ke], ie[nn.charCodeAt(Ke)] = Ke;
ie["-".charCodeAt(0)] = 62;
ie["_".charCodeAt(0)] = 63;
function $l(e) {
  var r = e.length;
  if (r % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var t = e.indexOf("=");
  t === -1 && (t = r);
  var n = t === r ? 0 : 4 - t % 4;
  return [t, n];
}
function I3(e) {
  var r = $l(e), t = r[0], n = r[1];
  return (t + n) * 3 / 4 - n;
}
function A3(e, r, t) {
  return (r + t) * 3 / 4 - t;
}
function x3(e) {
  var r, t = $l(e), n = t[0], i = t[1], a = new _3(A3(e, n, i)), u = 0, s = i > 0 ? n - 4 : n, c;
  for (c = 0; c < s; c += 4)
    r = ie[e.charCodeAt(c)] << 18 | ie[e.charCodeAt(c + 1)] << 12 | ie[e.charCodeAt(c + 2)] << 6 | ie[e.charCodeAt(c + 3)], a[u++] = r >> 16 & 255, a[u++] = r >> 8 & 255, a[u++] = r & 255;
  return i === 2 && (r = ie[e.charCodeAt(c)] << 2 | ie[e.charCodeAt(c + 1)] >> 4, a[u++] = r & 255), i === 1 && (r = ie[e.charCodeAt(c)] << 10 | ie[e.charCodeAt(c + 1)] << 4 | ie[e.charCodeAt(c + 2)] >> 2, a[u++] = r >> 8 & 255, a[u++] = r & 255), a;
}
function C3(e) {
  return ve[e >> 18 & 63] + ve[e >> 12 & 63] + ve[e >> 6 & 63] + ve[e & 63];
}
function M3(e, r, t) {
  for (var n, i = [], a = r; a < t; a += 3)
    n = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (e[a + 2] & 255), i.push(C3(n));
  return i.join("");
}
function N3(e) {
  for (var r, t = e.length, n = t % 3, i = [], a = 16383, u = 0, s = t - n; u < s; u += a)
    i.push(M3(e, u, u + a > s ? s : u + a));
  return n === 1 ? (r = e[t - 1], i.push(
    ve[r >> 2] + ve[r << 4 & 63] + "=="
  )) : n === 2 && (r = (e[t - 2] << 8) + e[t - 1], i.push(
    ve[r >> 10] + ve[r >> 4 & 63] + ve[r << 2 & 63] + "="
  )), i.join("");
}
var Ni = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ni.read = function(e, r, t, n, i) {
  var a, u, s = i * 8 - n - 1, c = (1 << s) - 1, h = c >> 1, y = -7, m = t ? i - 1 : 0, g = t ? -1 : 1, b = e[r + m];
  for (m += g, a = b & (1 << -y) - 1, b >>= -y, y += s; y > 0; a = a * 256 + e[r + m], m += g, y -= 8)
    ;
  for (u = a & (1 << -y) - 1, a >>= -y, y += n; y > 0; u = u * 256 + e[r + m], m += g, y -= 8)
    ;
  if (a === 0)
    a = 1 - h;
  else {
    if (a === c)
      return u ? NaN : (b ? -1 : 1) * (1 / 0);
    u = u + Math.pow(2, n), a = a - h;
  }
  return (b ? -1 : 1) * u * Math.pow(2, a - n);
};
Ni.write = function(e, r, t, n, i, a) {
  var u, s, c, h = a * 8 - i - 1, y = (1 << h) - 1, m = y >> 1, g = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, b = n ? 0 : a - 1, w = n ? 1 : -1, T = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
  for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (s = isNaN(r) ? 1 : 0, u = y) : (u = Math.floor(Math.log(r) / Math.LN2), r * (c = Math.pow(2, -u)) < 1 && (u--, c *= 2), u + m >= 1 ? r += g / c : r += g * Math.pow(2, 1 - m), r * c >= 2 && (u++, c /= 2), u + m >= y ? (s = 0, u = y) : u + m >= 1 ? (s = (r * c - 1) * Math.pow(2, i), u = u + m) : (s = r * Math.pow(2, m - 1) * Math.pow(2, i), u = 0)); i >= 8; e[t + b] = s & 255, b += w, s /= 256, i -= 8)
    ;
  for (u = u << i | s, h += i; h > 0; e[t + b] = u & 255, b += w, u /= 256, h -= 8)
    ;
  e[t + b - w] |= T * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(e) {
  const r = Rt, t = Ni, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  e.Buffer = s, e.SlowBuffer = L, e.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  e.kMaxLength = i, s.TYPED_ARRAY_SUPPORT = a(), !s.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function a() {
    try {
      const f = new Uint8Array(1), o = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(o, Uint8Array.prototype), Object.setPrototypeOf(f, o), f.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(s.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(s.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (s.isBuffer(this))
        return this.byteOffset;
    }
  });
  function u(f) {
    if (f > i)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
    const o = new Uint8Array(f);
    return Object.setPrototypeOf(o, s.prototype), o;
  }
  function s(f, o, l) {
    if (typeof f == "number") {
      if (typeof o == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return m(f);
    }
    return c(f, o, l);
  }
  s.poolSize = 8192;
  function c(f, o, l) {
    if (typeof f == "string")
      return g(f, o);
    if (ArrayBuffer.isView(f))
      return w(f);
    if (f == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
      );
    if (he(f, ArrayBuffer) || f && he(f.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (he(f, SharedArrayBuffer) || f && he(f.buffer, SharedArrayBuffer)))
      return T(f, o, l);
    if (typeof f == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const d = f.valueOf && f.valueOf();
    if (d != null && d !== f)
      return s.from(d, o, l);
    const v = _(f);
    if (v)
      return v;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof f[Symbol.toPrimitive] == "function")
      return s.from(f[Symbol.toPrimitive]("string"), o, l);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof f
    );
  }
  s.from = function(f, o, l) {
    return c(f, o, l);
  }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array);
  function h(f) {
    if (typeof f != "number")
      throw new TypeError('"size" argument must be of type number');
    if (f < 0)
      throw new RangeError('The value "' + f + '" is invalid for option "size"');
  }
  function y(f, o, l) {
    return h(f), f <= 0 ? u(f) : o !== void 0 ? typeof l == "string" ? u(f).fill(o, l) : u(f).fill(o) : u(f);
  }
  s.alloc = function(f, o, l) {
    return y(f, o, l);
  };
  function m(f) {
    return h(f), u(f < 0 ? 0 : E(f) | 0);
  }
  s.allocUnsafe = function(f) {
    return m(f);
  }, s.allocUnsafeSlow = function(f) {
    return m(f);
  };
  function g(f, o) {
    if ((typeof o != "string" || o === "") && (o = "utf8"), !s.isEncoding(o))
      throw new TypeError("Unknown encoding: " + o);
    const l = Te(f, o) | 0;
    let d = u(l);
    const v = d.write(f, o);
    return v !== l && (d = d.slice(0, v)), d;
  }
  function b(f) {
    const o = f.length < 0 ? 0 : E(f.length) | 0, l = u(o);
    for (let d = 0; d < o; d += 1)
      l[d] = f[d] & 255;
    return l;
  }
  function w(f) {
    if (he(f, Uint8Array)) {
      const o = new Uint8Array(f);
      return T(o.buffer, o.byteOffset, o.byteLength);
    }
    return b(f);
  }
  function T(f, o, l) {
    if (o < 0 || f.byteLength < o)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (f.byteLength < o + (l || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let d;
    return o === void 0 && l === void 0 ? d = new Uint8Array(f) : l === void 0 ? d = new Uint8Array(f, o) : d = new Uint8Array(f, o, l), Object.setPrototypeOf(d, s.prototype), d;
  }
  function _(f) {
    if (s.isBuffer(f)) {
      const o = E(f.length) | 0, l = u(o);
      return l.length === 0 || f.copy(l, 0, 0, o), l;
    }
    if (f.length !== void 0)
      return typeof f.length != "number" || Yt(f.length) ? u(0) : b(f);
    if (f.type === "Buffer" && Array.isArray(f.data))
      return b(f.data);
  }
  function E(f) {
    if (f >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return f | 0;
  }
  function L(f) {
    return +f != f && (f = 0), s.alloc(+f);
  }
  s.isBuffer = function(o) {
    return o != null && o._isBuffer === !0 && o !== s.prototype;
  }, s.compare = function(o, l) {
    if (he(o, Uint8Array) && (o = s.from(o, o.offset, o.byteLength)), he(l, Uint8Array) && (l = s.from(l, l.offset, l.byteLength)), !s.isBuffer(o) || !s.isBuffer(l))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (o === l)
      return 0;
    let d = o.length, v = l.length;
    for (let p = 0, $ = Math.min(d, v); p < $; ++p)
      if (o[p] !== l[p]) {
        d = o[p], v = l[p];
        break;
      }
    return d < v ? -1 : v < d ? 1 : 0;
  }, s.isEncoding = function(o) {
    switch (String(o).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, s.concat = function(o, l) {
    if (!Array.isArray(o))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (o.length === 0)
      return s.alloc(0);
    let d;
    if (l === void 0)
      for (l = 0, d = 0; d < o.length; ++d)
        l += o[d].length;
    const v = s.allocUnsafe(l);
    let p = 0;
    for (d = 0; d < o.length; ++d) {
      let $ = o[d];
      if (he($, Uint8Array))
        p + $.length > v.length ? (s.isBuffer($) || ($ = s.from($)), $.copy(v, p)) : Uint8Array.prototype.set.call(
          v,
          $,
          p
        );
      else if (s.isBuffer($))
        $.copy(v, p);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      p += $.length;
    }
    return v;
  };
  function Te(f, o) {
    if (s.isBuffer(f))
      return f.length;
    if (ArrayBuffer.isView(f) || he(f, ArrayBuffer))
      return f.byteLength;
    if (typeof f != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof f
      );
    const l = f.length, d = arguments.length > 2 && arguments[2] === !0;
    if (!d && l === 0)
      return 0;
    let v = !1;
    for (; ; )
      switch (o) {
        case "ascii":
        case "latin1":
        case "binary":
          return l;
        case "utf8":
        case "utf-8":
          return Wt(f).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return l * 2;
        case "hex":
          return l >>> 1;
        case "base64":
          return ya(f).length;
        default:
          if (v)
            return d ? -1 : Wt(f).length;
          o = ("" + o).toLowerCase(), v = !0;
      }
  }
  s.byteLength = Te;
  function we(f, o, l) {
    let d = !1;
    if ((o === void 0 || o < 0) && (o = 0), o > this.length || ((l === void 0 || l > this.length) && (l = this.length), l <= 0) || (l >>>= 0, o >>>= 0, l <= o))
      return "";
    for (f || (f = "utf8"); ; )
      switch (f) {
        case "hex":
          return $f(this, o, l);
        case "utf8":
        case "utf-8":
          return sa(this, o, l);
        case "ascii":
          return pf(this, o, l);
        case "latin1":
        case "binary":
          return gf(this, o, l);
        case "base64":
          return $r(this, o, l);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return bf(this, o, l);
        default:
          if (d)
            throw new TypeError("Unknown encoding: " + f);
          f = (f + "").toLowerCase(), d = !0;
      }
  }
  s.prototype._isBuffer = !0;
  function q(f, o, l) {
    const d = f[o];
    f[o] = f[l], f[l] = d;
  }
  s.prototype.swap16 = function() {
    const o = this.length;
    if (o % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let l = 0; l < o; l += 2)
      q(this, l, l + 1);
    return this;
  }, s.prototype.swap32 = function() {
    const o = this.length;
    if (o % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let l = 0; l < o; l += 4)
      q(this, l, l + 3), q(this, l + 1, l + 2);
    return this;
  }, s.prototype.swap64 = function() {
    const o = this.length;
    if (o % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let l = 0; l < o; l += 8)
      q(this, l, l + 7), q(this, l + 1, l + 6), q(this, l + 2, l + 5), q(this, l + 3, l + 4);
    return this;
  }, s.prototype.toString = function() {
    const o = this.length;
    return o === 0 ? "" : arguments.length === 0 ? sa(this, 0, o) : we.apply(this, arguments);
  }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(o) {
    if (!s.isBuffer(o))
      throw new TypeError("Argument must be a Buffer");
    return this === o ? !0 : s.compare(this, o) === 0;
  }, s.prototype.inspect = function() {
    let o = "";
    const l = e.INSPECT_MAX_BYTES;
    return o = this.toString("hex", 0, l).replace(/(.{2})/g, "$1 ").trim(), this.length > l && (o += " ... "), "<Buffer " + o + ">";
  }, n && (s.prototype[n] = s.prototype.inspect), s.prototype.compare = function(o, l, d, v, p) {
    if (he(o, Uint8Array) && (o = s.from(o, o.offset, o.byteLength)), !s.isBuffer(o))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof o
      );
    if (l === void 0 && (l = 0), d === void 0 && (d = o ? o.length : 0), v === void 0 && (v = 0), p === void 0 && (p = this.length), l < 0 || d > o.length || v < 0 || p > this.length)
      throw new RangeError("out of range index");
    if (v >= p && l >= d)
      return 0;
    if (v >= p)
      return -1;
    if (l >= d)
      return 1;
    if (l >>>= 0, d >>>= 0, v >>>= 0, p >>>= 0, this === o)
      return 0;
    let $ = p - v, O = d - l;
    const P = Math.min($, O), k = this.slice(v, p), U = o.slice(l, d);
    for (let M = 0; M < P; ++M)
      if (k[M] !== U[M]) {
        $ = k[M], O = U[M];
        break;
      }
    return $ < O ? -1 : O < $ ? 1 : 0;
  };
  function Br(f, o, l, d, v) {
    if (f.length === 0)
      return -1;
    if (typeof l == "string" ? (d = l, l = 0) : l > 2147483647 ? l = 2147483647 : l < -2147483648 && (l = -2147483648), l = +l, Yt(l) && (l = v ? 0 : f.length - 1), l < 0 && (l = f.length + l), l >= f.length) {
      if (v)
        return -1;
      l = f.length - 1;
    } else if (l < 0)
      if (v)
        l = 0;
      else
        return -1;
    if (typeof o == "string" && (o = s.from(o, d)), s.isBuffer(o))
      return o.length === 0 ? -1 : Vr(f, o, l, d, v);
    if (typeof o == "number")
      return o = o & 255, typeof Uint8Array.prototype.indexOf == "function" ? v ? Uint8Array.prototype.indexOf.call(f, o, l) : Uint8Array.prototype.lastIndexOf.call(f, o, l) : Vr(f, [o], l, d, v);
    throw new TypeError("val must be string, number or Buffer");
  }
  function Vr(f, o, l, d, v) {
    let p = 1, $ = f.length, O = o.length;
    if (d !== void 0 && (d = String(d).toLowerCase(), d === "ucs2" || d === "ucs-2" || d === "utf16le" || d === "utf-16le")) {
      if (f.length < 2 || o.length < 2)
        return -1;
      p = 2, $ /= 2, O /= 2, l /= 2;
    }
    function P(U, M) {
      return p === 1 ? U[M] : U.readUInt16BE(M * p);
    }
    let k;
    if (v) {
      let U = -1;
      for (k = l; k < $; k++)
        if (P(f, k) === P(o, U === -1 ? 0 : k - U)) {
          if (U === -1 && (U = k), k - U + 1 === O)
            return U * p;
        } else
          U !== -1 && (k -= k - U), U = -1;
    } else
      for (l + O > $ && (l = $ - O), k = l; k >= 0; k--) {
        let U = !0;
        for (let M = 0; M < O; M++)
          if (P(f, k + M) !== P(o, M)) {
            U = !1;
            break;
          }
        if (U)
          return k;
      }
    return -1;
  }
  s.prototype.includes = function(o, l, d) {
    return this.indexOf(o, l, d) !== -1;
  }, s.prototype.indexOf = function(o, l, d) {
    return Br(this, o, l, d, !0);
  }, s.prototype.lastIndexOf = function(o, l, d) {
    return Br(this, o, l, d, !1);
  };
  function Gr(f, o, l, d) {
    l = Number(l) || 0;
    const v = f.length - l;
    d ? (d = Number(d), d > v && (d = v)) : d = v;
    const p = o.length;
    d > p / 2 && (d = p / 2);
    let $;
    for ($ = 0; $ < d; ++$) {
      const O = parseInt(o.substr($ * 2, 2), 16);
      if (Yt(O))
        return $;
      f[l + $] = O;
    }
    return $;
  }
  function zt(f, o, l, d) {
    return qr(Wt(o, f.length - l), f, l, d);
  }
  function zr(f, o, l, d) {
    return qr(Tf(o), f, l, d);
  }
  function qt(f, o, l, d) {
    return qr(ya(o), f, l, d);
  }
  function Ht(f, o, l, d) {
    return qr(_f(o, f.length - l), f, l, d);
  }
  s.prototype.write = function(o, l, d, v) {
    if (l === void 0)
      v = "utf8", d = this.length, l = 0;
    else if (d === void 0 && typeof l == "string")
      v = l, d = this.length, l = 0;
    else if (isFinite(l))
      l = l >>> 0, isFinite(d) ? (d = d >>> 0, v === void 0 && (v = "utf8")) : (v = d, d = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const p = this.length - l;
    if ((d === void 0 || d > p) && (d = p), o.length > 0 && (d < 0 || l < 0) || l > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    v || (v = "utf8");
    let $ = !1;
    for (; ; )
      switch (v) {
        case "hex":
          return Gr(this, o, l, d);
        case "utf8":
        case "utf-8":
          return zt(this, o, l, d);
        case "ascii":
        case "latin1":
        case "binary":
          return zr(this, o, l, d);
        case "base64":
          return qt(this, o, l, d);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Ht(this, o, l, d);
        default:
          if ($)
            throw new TypeError("Unknown encoding: " + v);
          v = ("" + v).toLowerCase(), $ = !0;
      }
  }, s.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function $r(f, o, l) {
    return o === 0 && l === f.length ? r.fromByteArray(f) : r.fromByteArray(f.slice(o, l));
  }
  function sa(f, o, l) {
    l = Math.min(f.length, l);
    const d = [];
    let v = o;
    for (; v < l; ) {
      const p = f[v];
      let $ = null, O = p > 239 ? 4 : p > 223 ? 3 : p > 191 ? 2 : 1;
      if (v + O <= l) {
        let P, k, U, M;
        switch (O) {
          case 1:
            p < 128 && ($ = p);
            break;
          case 2:
            P = f[v + 1], (P & 192) === 128 && (M = (p & 31) << 6 | P & 63, M > 127 && ($ = M));
            break;
          case 3:
            P = f[v + 1], k = f[v + 2], (P & 192) === 128 && (k & 192) === 128 && (M = (p & 15) << 12 | (P & 63) << 6 | k & 63, M > 2047 && (M < 55296 || M > 57343) && ($ = M));
            break;
          case 4:
            P = f[v + 1], k = f[v + 2], U = f[v + 3], (P & 192) === 128 && (k & 192) === 128 && (U & 192) === 128 && (M = (p & 15) << 18 | (P & 63) << 12 | (k & 63) << 6 | U & 63, M > 65535 && M < 1114112 && ($ = M));
        }
      }
      $ === null ? ($ = 65533, O = 1) : $ > 65535 && ($ -= 65536, d.push($ >>> 10 & 1023 | 55296), $ = 56320 | $ & 1023), d.push($), v += O;
    }
    return yf(d);
  }
  const ua = 4096;
  function yf(f) {
    const o = f.length;
    if (o <= ua)
      return String.fromCharCode.apply(String, f);
    let l = "", d = 0;
    for (; d < o; )
      l += String.fromCharCode.apply(
        String,
        f.slice(d, d += ua)
      );
    return l;
  }
  function pf(f, o, l) {
    let d = "";
    l = Math.min(f.length, l);
    for (let v = o; v < l; ++v)
      d += String.fromCharCode(f[v] & 127);
    return d;
  }
  function gf(f, o, l) {
    let d = "";
    l = Math.min(f.length, l);
    for (let v = o; v < l; ++v)
      d += String.fromCharCode(f[v]);
    return d;
  }
  function $f(f, o, l) {
    const d = f.length;
    (!o || o < 0) && (o = 0), (!l || l < 0 || l > d) && (l = d);
    let v = "";
    for (let p = o; p < l; ++p)
      v += Of[f[p]];
    return v;
  }
  function bf(f, o, l) {
    const d = f.slice(o, l);
    let v = "";
    for (let p = 0; p < d.length - 1; p += 2)
      v += String.fromCharCode(d[p] + d[p + 1] * 256);
    return v;
  }
  s.prototype.slice = function(o, l) {
    const d = this.length;
    o = ~~o, l = l === void 0 ? d : ~~l, o < 0 ? (o += d, o < 0 && (o = 0)) : o > d && (o = d), l < 0 ? (l += d, l < 0 && (l = 0)) : l > d && (l = d), l < o && (l = o);
    const v = this.subarray(o, l);
    return Object.setPrototypeOf(v, s.prototype), v;
  };
  function B(f, o, l) {
    if (f % 1 !== 0 || f < 0)
      throw new RangeError("offset is not uint");
    if (f + o > l)
      throw new RangeError("Trying to access beyond buffer length");
  }
  s.prototype.readUintLE = s.prototype.readUIntLE = function(o, l, d) {
    o = o >>> 0, l = l >>> 0, d || B(o, l, this.length);
    let v = this[o], p = 1, $ = 0;
    for (; ++$ < l && (p *= 256); )
      v += this[o + $] * p;
    return v;
  }, s.prototype.readUintBE = s.prototype.readUIntBE = function(o, l, d) {
    o = o >>> 0, l = l >>> 0, d || B(o, l, this.length);
    let v = this[o + --l], p = 1;
    for (; l > 0 && (p *= 256); )
      v += this[o + --l] * p;
    return v;
  }, s.prototype.readUint8 = s.prototype.readUInt8 = function(o, l) {
    return o = o >>> 0, l || B(o, 1, this.length), this[o];
  }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(o, l) {
    return o = o >>> 0, l || B(o, 2, this.length), this[o] | this[o + 1] << 8;
  }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(o, l) {
    return o = o >>> 0, l || B(o, 2, this.length), this[o] << 8 | this[o + 1];
  }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(o, l) {
    return o = o >>> 0, l || B(o, 4, this.length), (this[o] | this[o + 1] << 8 | this[o + 2] << 16) + this[o + 3] * 16777216;
  }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(o, l) {
    return o = o >>> 0, l || B(o, 4, this.length), this[o] * 16777216 + (this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3]);
  }, s.prototype.readBigUInt64LE = _e(function(o) {
    o = o >>> 0, Je(o, "offset");
    const l = this[o], d = this[o + 7];
    (l === void 0 || d === void 0) && br(o, this.length - 8);
    const v = l + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24, p = this[++o] + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + d * 2 ** 24;
    return BigInt(v) + (BigInt(p) << BigInt(32));
  }), s.prototype.readBigUInt64BE = _e(function(o) {
    o = o >>> 0, Je(o, "offset");
    const l = this[o], d = this[o + 7];
    (l === void 0 || d === void 0) && br(o, this.length - 8);
    const v = l * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o], p = this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + d;
    return (BigInt(v) << BigInt(32)) + BigInt(p);
  }), s.prototype.readIntLE = function(o, l, d) {
    o = o >>> 0, l = l >>> 0, d || B(o, l, this.length);
    let v = this[o], p = 1, $ = 0;
    for (; ++$ < l && (p *= 256); )
      v += this[o + $] * p;
    return p *= 128, v >= p && (v -= Math.pow(2, 8 * l)), v;
  }, s.prototype.readIntBE = function(o, l, d) {
    o = o >>> 0, l = l >>> 0, d || B(o, l, this.length);
    let v = l, p = 1, $ = this[o + --v];
    for (; v > 0 && (p *= 256); )
      $ += this[o + --v] * p;
    return p *= 128, $ >= p && ($ -= Math.pow(2, 8 * l)), $;
  }, s.prototype.readInt8 = function(o, l) {
    return o = o >>> 0, l || B(o, 1, this.length), this[o] & 128 ? (255 - this[o] + 1) * -1 : this[o];
  }, s.prototype.readInt16LE = function(o, l) {
    o = o >>> 0, l || B(o, 2, this.length);
    const d = this[o] | this[o + 1] << 8;
    return d & 32768 ? d | 4294901760 : d;
  }, s.prototype.readInt16BE = function(o, l) {
    o = o >>> 0, l || B(o, 2, this.length);
    const d = this[o + 1] | this[o] << 8;
    return d & 32768 ? d | 4294901760 : d;
  }, s.prototype.readInt32LE = function(o, l) {
    return o = o >>> 0, l || B(o, 4, this.length), this[o] | this[o + 1] << 8 | this[o + 2] << 16 | this[o + 3] << 24;
  }, s.prototype.readInt32BE = function(o, l) {
    return o = o >>> 0, l || B(o, 4, this.length), this[o] << 24 | this[o + 1] << 16 | this[o + 2] << 8 | this[o + 3];
  }, s.prototype.readBigInt64LE = _e(function(o) {
    o = o >>> 0, Je(o, "offset");
    const l = this[o], d = this[o + 7];
    (l === void 0 || d === void 0) && br(o, this.length - 8);
    const v = this[o + 4] + this[o + 5] * 2 ** 8 + this[o + 6] * 2 ** 16 + (d << 24);
    return (BigInt(v) << BigInt(32)) + BigInt(l + this[++o] * 2 ** 8 + this[++o] * 2 ** 16 + this[++o] * 2 ** 24);
  }), s.prototype.readBigInt64BE = _e(function(o) {
    o = o >>> 0, Je(o, "offset");
    const l = this[o], d = this[o + 7];
    (l === void 0 || d === void 0) && br(o, this.length - 8);
    const v = (l << 24) + // Overflow
    this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + this[++o];
    return (BigInt(v) << BigInt(32)) + BigInt(this[++o] * 2 ** 24 + this[++o] * 2 ** 16 + this[++o] * 2 ** 8 + d);
  }), s.prototype.readFloatLE = function(o, l) {
    return o = o >>> 0, l || B(o, 4, this.length), t.read(this, o, !0, 23, 4);
  }, s.prototype.readFloatBE = function(o, l) {
    return o = o >>> 0, l || B(o, 4, this.length), t.read(this, o, !1, 23, 4);
  }, s.prototype.readDoubleLE = function(o, l) {
    return o = o >>> 0, l || B(o, 8, this.length), t.read(this, o, !0, 52, 8);
  }, s.prototype.readDoubleBE = function(o, l) {
    return o = o >>> 0, l || B(o, 8, this.length), t.read(this, o, !1, 52, 8);
  };
  function Q(f, o, l, d, v, p) {
    if (!s.isBuffer(f))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (o > v || o < p)
      throw new RangeError('"value" argument is out of bounds');
    if (l + d > f.length)
      throw new RangeError("Index out of range");
  }
  s.prototype.writeUintLE = s.prototype.writeUIntLE = function(o, l, d, v) {
    if (o = +o, l = l >>> 0, d = d >>> 0, !v) {
      const O = Math.pow(2, 8 * d) - 1;
      Q(this, o, l, d, O, 0);
    }
    let p = 1, $ = 0;
    for (this[l] = o & 255; ++$ < d && (p *= 256); )
      this[l + $] = o / p & 255;
    return l + d;
  }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(o, l, d, v) {
    if (o = +o, l = l >>> 0, d = d >>> 0, !v) {
      const O = Math.pow(2, 8 * d) - 1;
      Q(this, o, l, d, O, 0);
    }
    let p = d - 1, $ = 1;
    for (this[l + p] = o & 255; --p >= 0 && ($ *= 256); )
      this[l + p] = o / $ & 255;
    return l + d;
  }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 1, 255, 0), this[l] = o & 255, l + 1;
  }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 2, 65535, 0), this[l] = o & 255, this[l + 1] = o >>> 8, l + 2;
  }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 2, 65535, 0), this[l] = o >>> 8, this[l + 1] = o & 255, l + 2;
  }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 4, 4294967295, 0), this[l + 3] = o >>> 24, this[l + 2] = o >>> 16, this[l + 1] = o >>> 8, this[l] = o & 255, l + 4;
  }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 4, 4294967295, 0), this[l] = o >>> 24, this[l + 1] = o >>> 16, this[l + 2] = o >>> 8, this[l + 3] = o & 255, l + 4;
  };
  function la(f, o, l, d, v) {
    ma(o, d, v, f, l, 7);
    let p = Number(o & BigInt(4294967295));
    f[l++] = p, p = p >> 8, f[l++] = p, p = p >> 8, f[l++] = p, p = p >> 8, f[l++] = p;
    let $ = Number(o >> BigInt(32) & BigInt(4294967295));
    return f[l++] = $, $ = $ >> 8, f[l++] = $, $ = $ >> 8, f[l++] = $, $ = $ >> 8, f[l++] = $, l;
  }
  function fa(f, o, l, d, v) {
    ma(o, d, v, f, l, 7);
    let p = Number(o & BigInt(4294967295));
    f[l + 7] = p, p = p >> 8, f[l + 6] = p, p = p >> 8, f[l + 5] = p, p = p >> 8, f[l + 4] = p;
    let $ = Number(o >> BigInt(32) & BigInt(4294967295));
    return f[l + 3] = $, $ = $ >> 8, f[l + 2] = $, $ = $ >> 8, f[l + 1] = $, $ = $ >> 8, f[l] = $, l + 8;
  }
  s.prototype.writeBigUInt64LE = _e(function(o, l = 0) {
    return la(this, o, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeBigUInt64BE = _e(function(o, l = 0) {
    return fa(this, o, l, BigInt(0), BigInt("0xffffffffffffffff"));
  }), s.prototype.writeIntLE = function(o, l, d, v) {
    if (o = +o, l = l >>> 0, !v) {
      const P = Math.pow(2, 8 * d - 1);
      Q(this, o, l, d, P - 1, -P);
    }
    let p = 0, $ = 1, O = 0;
    for (this[l] = o & 255; ++p < d && ($ *= 256); )
      o < 0 && O === 0 && this[l + p - 1] !== 0 && (O = 1), this[l + p] = (o / $ >> 0) - O & 255;
    return l + d;
  }, s.prototype.writeIntBE = function(o, l, d, v) {
    if (o = +o, l = l >>> 0, !v) {
      const P = Math.pow(2, 8 * d - 1);
      Q(this, o, l, d, P - 1, -P);
    }
    let p = d - 1, $ = 1, O = 0;
    for (this[l + p] = o & 255; --p >= 0 && ($ *= 256); )
      o < 0 && O === 0 && this[l + p + 1] !== 0 && (O = 1), this[l + p] = (o / $ >> 0) - O & 255;
    return l + d;
  }, s.prototype.writeInt8 = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 1, 127, -128), o < 0 && (o = 255 + o + 1), this[l] = o & 255, l + 1;
  }, s.prototype.writeInt16LE = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 2, 32767, -32768), this[l] = o & 255, this[l + 1] = o >>> 8, l + 2;
  }, s.prototype.writeInt16BE = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 2, 32767, -32768), this[l] = o >>> 8, this[l + 1] = o & 255, l + 2;
  }, s.prototype.writeInt32LE = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 4, 2147483647, -2147483648), this[l] = o & 255, this[l + 1] = o >>> 8, this[l + 2] = o >>> 16, this[l + 3] = o >>> 24, l + 4;
  }, s.prototype.writeInt32BE = function(o, l, d) {
    return o = +o, l = l >>> 0, d || Q(this, o, l, 4, 2147483647, -2147483648), o < 0 && (o = 4294967295 + o + 1), this[l] = o >>> 24, this[l + 1] = o >>> 16, this[l + 2] = o >>> 8, this[l + 3] = o & 255, l + 4;
  }, s.prototype.writeBigInt64LE = _e(function(o, l = 0) {
    return la(this, o, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), s.prototype.writeBigInt64BE = _e(function(o, l = 0) {
    return fa(this, o, l, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function ca(f, o, l, d, v, p) {
    if (l + d > f.length)
      throw new RangeError("Index out of range");
    if (l < 0)
      throw new RangeError("Index out of range");
  }
  function da(f, o, l, d, v) {
    return o = +o, l = l >>> 0, v || ca(f, o, l, 4), t.write(f, o, l, d, 23, 4), l + 4;
  }
  s.prototype.writeFloatLE = function(o, l, d) {
    return da(this, o, l, !0, d);
  }, s.prototype.writeFloatBE = function(o, l, d) {
    return da(this, o, l, !1, d);
  };
  function ha(f, o, l, d, v) {
    return o = +o, l = l >>> 0, v || ca(f, o, l, 8), t.write(f, o, l, d, 52, 8), l + 8;
  }
  s.prototype.writeDoubleLE = function(o, l, d) {
    return ha(this, o, l, !0, d);
  }, s.prototype.writeDoubleBE = function(o, l, d) {
    return ha(this, o, l, !1, d);
  }, s.prototype.copy = function(o, l, d, v) {
    if (!s.isBuffer(o))
      throw new TypeError("argument should be a Buffer");
    if (d || (d = 0), !v && v !== 0 && (v = this.length), l >= o.length && (l = o.length), l || (l = 0), v > 0 && v < d && (v = d), v === d || o.length === 0 || this.length === 0)
      return 0;
    if (l < 0)
      throw new RangeError("targetStart out of bounds");
    if (d < 0 || d >= this.length)
      throw new RangeError("Index out of range");
    if (v < 0)
      throw new RangeError("sourceEnd out of bounds");
    v > this.length && (v = this.length), o.length - l < v - d && (v = o.length - l + d);
    const p = v - d;
    return this === o && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(l, d, v) : Uint8Array.prototype.set.call(
      o,
      this.subarray(d, v),
      l
    ), p;
  }, s.prototype.fill = function(o, l, d, v) {
    if (typeof o == "string") {
      if (typeof l == "string" ? (v = l, l = 0, d = this.length) : typeof d == "string" && (v = d, d = this.length), v !== void 0 && typeof v != "string")
        throw new TypeError("encoding must be a string");
      if (typeof v == "string" && !s.isEncoding(v))
        throw new TypeError("Unknown encoding: " + v);
      if (o.length === 1) {
        const $ = o.charCodeAt(0);
        (v === "utf8" && $ < 128 || v === "latin1") && (o = $);
      }
    } else
      typeof o == "number" ? o = o & 255 : typeof o == "boolean" && (o = Number(o));
    if (l < 0 || this.length < l || this.length < d)
      throw new RangeError("Out of range index");
    if (d <= l)
      return this;
    l = l >>> 0, d = d === void 0 ? this.length : d >>> 0, o || (o = 0);
    let p;
    if (typeof o == "number")
      for (p = l; p < d; ++p)
        this[p] = o;
    else {
      const $ = s.isBuffer(o) ? o : s.from(o, v), O = $.length;
      if (O === 0)
        throw new TypeError('The value "' + o + '" is invalid for argument "value"');
      for (p = 0; p < d - l; ++p)
        this[p + l] = $[p % O];
    }
    return this;
  };
  const Ye = {};
  function Zt(f, o, l) {
    Ye[f] = class extends l {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: o.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${f}]`, this.stack, delete this.name;
      }
      get code() {
        return f;
      }
      set code(v) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: v,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${f}]: ${this.message}`;
      }
    };
  }
  Zt(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(f) {
      return f ? `${f} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Zt(
    "ERR_INVALID_ARG_TYPE",
    function(f, o) {
      return `The "${f}" argument must be of type number. Received type ${typeof o}`;
    },
    TypeError
  ), Zt(
    "ERR_OUT_OF_RANGE",
    function(f, o, l) {
      let d = `The value of "${f}" is out of range.`, v = l;
      return Number.isInteger(l) && Math.abs(l) > 2 ** 32 ? v = va(String(l)) : typeof l == "bigint" && (v = String(l), (l > BigInt(2) ** BigInt(32) || l < -(BigInt(2) ** BigInt(32))) && (v = va(v)), v += "n"), d += ` It must be ${o}. Received ${v}`, d;
    },
    RangeError
  );
  function va(f) {
    let o = "", l = f.length;
    const d = f[0] === "-" ? 1 : 0;
    for (; l >= d + 4; l -= 3)
      o = `_${f.slice(l - 3, l)}${o}`;
    return `${f.slice(0, l)}${o}`;
  }
  function wf(f, o, l) {
    Je(o, "offset"), (f[o] === void 0 || f[o + l] === void 0) && br(o, f.length - (l + 1));
  }
  function ma(f, o, l, d, v, p) {
    if (f > l || f < o) {
      const $ = typeof o == "bigint" ? "n" : "";
      let O;
      throw p > 3 ? o === 0 || o === BigInt(0) ? O = `>= 0${$} and < 2${$} ** ${(p + 1) * 8}${$}` : O = `>= -(2${$} ** ${(p + 1) * 8 - 1}${$}) and < 2 ** ${(p + 1) * 8 - 1}${$}` : O = `>= ${o}${$} and <= ${l}${$}`, new Ye.ERR_OUT_OF_RANGE("value", O, f);
    }
    wf(d, v, p);
  }
  function Je(f, o) {
    if (typeof f != "number")
      throw new Ye.ERR_INVALID_ARG_TYPE(o, "number", f);
  }
  function br(f, o, l) {
    throw Math.floor(f) !== f ? (Je(f, l), new Ye.ERR_OUT_OF_RANGE(l || "offset", "an integer", f)) : o < 0 ? new Ye.ERR_BUFFER_OUT_OF_BOUNDS() : new Ye.ERR_OUT_OF_RANGE(
      l || "offset",
      `>= ${l ? 1 : 0} and <= ${o}`,
      f
    );
  }
  const Sf = /[^+/0-9A-Za-z-_]/g;
  function Ef(f) {
    if (f = f.split("=")[0], f = f.trim().replace(Sf, ""), f.length < 2)
      return "";
    for (; f.length % 4 !== 0; )
      f = f + "=";
    return f;
  }
  function Wt(f, o) {
    o = o || 1 / 0;
    let l;
    const d = f.length;
    let v = null;
    const p = [];
    for (let $ = 0; $ < d; ++$) {
      if (l = f.charCodeAt($), l > 55295 && l < 57344) {
        if (!v) {
          if (l > 56319) {
            (o -= 3) > -1 && p.push(239, 191, 189);
            continue;
          } else if ($ + 1 === d) {
            (o -= 3) > -1 && p.push(239, 191, 189);
            continue;
          }
          v = l;
          continue;
        }
        if (l < 56320) {
          (o -= 3) > -1 && p.push(239, 191, 189), v = l;
          continue;
        }
        l = (v - 55296 << 10 | l - 56320) + 65536;
      } else
        v && (o -= 3) > -1 && p.push(239, 191, 189);
      if (v = null, l < 128) {
        if ((o -= 1) < 0)
          break;
        p.push(l);
      } else if (l < 2048) {
        if ((o -= 2) < 0)
          break;
        p.push(
          l >> 6 | 192,
          l & 63 | 128
        );
      } else if (l < 65536) {
        if ((o -= 3) < 0)
          break;
        p.push(
          l >> 12 | 224,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else if (l < 1114112) {
        if ((o -= 4) < 0)
          break;
        p.push(
          l >> 18 | 240,
          l >> 12 & 63 | 128,
          l >> 6 & 63 | 128,
          l & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return p;
  }
  function Tf(f) {
    const o = [];
    for (let l = 0; l < f.length; ++l)
      o.push(f.charCodeAt(l) & 255);
    return o;
  }
  function _f(f, o) {
    let l, d, v;
    const p = [];
    for (let $ = 0; $ < f.length && !((o -= 2) < 0); ++$)
      l = f.charCodeAt($), d = l >> 8, v = l % 256, p.push(v), p.push(d);
    return p;
  }
  function ya(f) {
    return r.toByteArray(Ef(f));
  }
  function qr(f, o, l, d) {
    let v;
    for (v = 0; v < d && !(v + l >= o.length || v >= f.length); ++v)
      o[v + l] = f[v];
    return v;
  }
  function he(f, o) {
    return f instanceof o || f != null && f.constructor != null && f.constructor.name != null && f.constructor.name === o.name;
  }
  function Yt(f) {
    return f !== f;
  }
  const Of = function() {
    const f = "0123456789abcdef", o = new Array(256);
    for (let l = 0; l < 16; ++l) {
      const d = l * 16;
      for (let v = 0; v < 16; ++v)
        o[d + v] = f[l] + f[v];
    }
    return o;
  }();
  function _e(f) {
    return typeof BigInt > "u" ? If : f;
  }
  function If() {
    throw new Error("BigInt not supported");
  }
})(gl);
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var F3 = gl.Buffer, k3 = F3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function D3() {
  throw new Error("not implemented");
}
var P3 = D3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var U3 = T3, L3 = k3, R3 = P3, Mn;
U3() ? Mn = L3 : Mn = R3;
var Fi = Mn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var j3 = Zu, B3 = Fi, V3 = j3(B3.from), G3 = V3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var z3 = Lr, q3 = Fi;
function H3(e) {
  if (!z3(e))
    throw new TypeError("invalid argument. Must provide a Buffer. Value: `" + e + "`");
  return q3.from(e);
}
var Z3 = H3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var W3 = Lr, Y3 = Fi;
function J3(e) {
  if (!W3(e))
    throw new TypeError("invalid argument. Must provide a Buffer. Value: `" + e + "`");
  return new Y3(e);
}
var X3 = J3;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K3 = G3, Q3 = Z3, e6 = X3, Nn;
K3 ? Nn = Q3 : Nn = e6;
var r6 = Nn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var t6 = z, n6 = typeof Int8Array == "function";
function i6(e) {
  return n6 && e instanceof Int8Array || // eslint-disable-line stdlib/require-globals
  t6(e) === "[object Int8Array]";
}
var a6 = i6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var o6 = a6, s6 = o6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var u6 = 127, l6 = u6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var f6 = -128, c6 = f6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var d6 = typeof Int8Array == "function" ? Int8Array : null, h6 = d6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var v6 = s6, m6 = l6, y6 = c6, Eo = h6;
function p6() {
  var e, r;
  if (typeof Eo != "function")
    return !1;
  try {
    r = new Eo([1, 3.14, -3.14, m6 + 1]), e = v6(r) && r[0] === 1 && r[1] === 3 && // truncation
    r[2] === -3 && // truncation
    r[3] === y6;
  } catch {
    e = !1;
  }
  return e;
}
var g6 = p6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $6 = g6, b6 = $6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var w6 = typeof Int8Array == "function" ? Int8Array : void 0, S6 = w6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function E6() {
  throw new Error("not implemented");
}
var T6 = E6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _6 = b6, O6 = S6, I6 = T6, Fn;
_6() ? Fn = O6 : Fn = I6;
var A6 = Fn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x6 = z, C6 = typeof Uint8Array == "function";
function M6(e) {
  return C6 && e instanceof Uint8Array || // eslint-disable-line stdlib/require-globals
  x6(e) === "[object Uint8Array]";
}
var N6 = M6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var F6 = N6, k6 = F6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var D6 = 255, P6 = D6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var U6 = typeof Uint8Array == "function" ? Uint8Array : null, L6 = U6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var R6 = k6, an = P6, To = L6;
function j6() {
  var e, r;
  if (typeof To != "function")
    return !1;
  try {
    r = [1, 3.14, -3.14, an + 1, an + 2], r = new To(r), e = R6(r) && r[0] === 1 && r[1] === 3 && // truncation
    r[2] === an - 2 && // truncation and wrap around
    r[3] === 0 && // wrap around
    r[4] === 1;
  } catch {
    e = !1;
  }
  return e;
}
var B6 = j6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var V6 = B6, G6 = V6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var z6 = typeof Uint8Array == "function" ? Uint8Array : void 0, q6 = z6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function H6() {
  throw new Error("not implemented");
}
var Z6 = H6;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var W6 = G6, Y6 = q6, J6 = Z6, kn;
W6() ? kn = Y6 : kn = J6;
var X6 = kn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K6 = z, Q6 = typeof Uint8ClampedArray == "function";
function e4(e) {
  return Q6 && e instanceof Uint8ClampedArray || // eslint-disable-line stdlib/require-globals
  K6(e) === "[object Uint8ClampedArray]";
}
var r4 = e4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var t4 = r4, n4 = t4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var i4 = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : null, a4 = i4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var o4 = n4, _o = a4;
function s4() {
  var e, r;
  if (typeof _o != "function")
    return !1;
  try {
    r = new _o([-1, 0, 1, 3.14, 4.99, 255, 256]), e = o4(r) && r[0] === 0 && // clamped
    r[1] === 0 && r[2] === 1 && r[3] === 3 && // round to nearest
    r[4] === 5 && // round to nearest
    r[5] === 255 && r[6] === 255;
  } catch {
    e = !1;
  }
  return e;
}
var u4 = s4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var l4 = u4, f4 = l4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var c4 = typeof Uint8ClampedArray == "function" ? Uint8ClampedArray : void 0, d4 = c4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function h4() {
  throw new Error("not implemented");
}
var v4 = h4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var m4 = f4, y4 = d4, p4 = v4, Dn;
m4() ? Dn = y4 : Dn = p4;
var g4 = Dn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $4 = z, b4 = typeof Int16Array == "function";
function w4(e) {
  return b4 && e instanceof Int16Array || // eslint-disable-line stdlib/require-globals
  $4(e) === "[object Int16Array]";
}
var S4 = w4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var E4 = S4, T4 = E4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _4 = 32767, O4 = _4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var I4 = -32768, A4 = I4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var x4 = typeof Int16Array == "function" ? Int16Array : null, C4 = x4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var M4 = T4, N4 = O4, F4 = A4, Oo = C4;
function k4() {
  var e, r;
  if (typeof Oo != "function")
    return !1;
  try {
    r = new Oo([1, 3.14, -3.14, N4 + 1]), e = M4(r) && r[0] === 1 && r[1] === 3 && // truncation
    r[2] === -3 && // truncation
    r[3] === F4;
  } catch {
    e = !1;
  }
  return e;
}
var D4 = k4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var P4 = D4, U4 = P4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var L4 = typeof Int16Array == "function" ? Int16Array : void 0, R4 = L4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function j4() {
  throw new Error("not implemented");
}
var B4 = j4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var V4 = U4, G4 = R4, z4 = B4, Pn;
V4() ? Pn = G4 : Pn = z4;
var q4 = Pn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var H4 = z, Z4 = typeof Uint16Array == "function";
function W4(e) {
  return Z4 && e instanceof Uint16Array || // eslint-disable-line stdlib/require-globals
  H4(e) === "[object Uint16Array]";
}
var Y4 = W4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var J4 = Y4, X4 = J4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var K4 = 65535, Q4 = K4;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var eC = typeof Uint16Array == "function" ? Uint16Array : null, rC = eC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var tC = X4, on = Q4, Io = rC;
function nC() {
  var e, r;
  if (typeof Io != "function")
    return !1;
  try {
    r = [1, 3.14, -3.14, on + 1, on + 2], r = new Io(r), e = tC(r) && r[0] === 1 && r[1] === 3 && // truncation
    r[2] === on - 2 && // truncation and wrap around
    r[3] === 0 && // wrap around
    r[4] === 1;
  } catch {
    e = !1;
  }
  return e;
}
var iC = nC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var aC = iC, oC = aC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var sC = typeof Uint16Array == "function" ? Uint16Array : void 0, uC = sC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function lC() {
  throw new Error("not implemented");
}
var fC = lC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var cC = oC, dC = uC, hC = fC, Un;
cC() ? Un = dC : Un = hC;
var vC = Un;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mC = z, yC = typeof Int32Array == "function";
function pC(e) {
  return yC && e instanceof Int32Array || // eslint-disable-line stdlib/require-globals
  mC(e) === "[object Int32Array]";
}
var gC = pC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var $C = gC, bC = $C;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wC = 2147483647, SC = wC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var EC = -2147483648, TC = EC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var _C = typeof Int32Array == "function" ? Int32Array : null, OC = _C;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IC = bC, AC = SC, xC = TC, Ao = OC;
function CC() {
  var e, r;
  if (typeof Ao != "function")
    return !1;
  try {
    r = new Ao([1, 3.14, -3.14, AC + 1]), e = IC(r) && r[0] === 1 && r[1] === 3 && // truncation
    r[2] === -3 && // truncation
    r[3] === xC;
  } catch {
    e = !1;
  }
  return e;
}
var MC = CC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var NC = MC, FC = NC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kC = typeof Int32Array == "function" ? Int32Array : void 0, DC = kC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function PC() {
  throw new Error("not implemented");
}
var UC = PC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var LC = FC, RC = DC, jC = UC, Ln;
LC() ? Ln = RC : Ln = jC;
var BC = Ln;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VC = z, GC = typeof Uint32Array == "function";
function zC(e) {
  return GC && e instanceof Uint32Array || // eslint-disable-line stdlib/require-globals
  VC(e) === "[object Uint32Array]";
}
var qC = zC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var HC = qC, ZC = HC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WC = typeof Uint32Array == "function" ? Uint32Array : null, YC = WC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var JC = ZC, sn = hl, xo = YC;
function XC() {
  var e, r;
  if (typeof xo != "function")
    return !1;
  try {
    r = [1, 3.14, -3.14, sn + 1, sn + 2], r = new xo(r), e = JC(r) && r[0] === 1 && r[1] === 3 && // truncation
    r[2] === sn - 2 && // truncation and wrap around
    r[3] === 0 && // wrap around
    r[4] === 1;
  } catch {
    e = !1;
  }
  return e;
}
var KC = XC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var QC = KC, eM = QC;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var rM = typeof Uint32Array == "function" ? Uint32Array : void 0, tM = rM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function nM() {
  throw new Error("not implemented");
}
var iM = nM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var aM = eM, oM = tM, sM = iM, Rn;
aM() ? Rn = oM : Rn = sM;
var uM = Rn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var lM = z, fM = typeof Float32Array == "function";
function cM(e) {
  return fM && e instanceof Float32Array || // eslint-disable-line stdlib/require-globals
  lM(e) === "[object Float32Array]";
}
var dM = cM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var hM = dM, vM = hM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var mM = typeof Float32Array == "function" ? Float32Array : null, yM = mM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var pM = vM, gM = bi, Co = yM;
function $M() {
  var e, r;
  if (typeof Co != "function")
    return !1;
  try {
    r = new Co([1, 3.14, -3.14, 5e40]), e = pM(r) && r[0] === 1 && r[1] === 3.140000104904175 && r[2] === -3.140000104904175 && r[3] === gM;
  } catch {
    e = !1;
  }
  return e;
}
var bM = $M;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var wM = bM, SM = wM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var EM = typeof Float32Array == "function" ? Float32Array : void 0, TM = EM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function _M() {
  throw new Error("not implemented");
}
var OM = _M;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var IM = SM, AM = TM, xM = OM, jn;
IM() ? jn = AM : jn = xM;
var CM = jn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var MM = z, NM = typeof Float64Array == "function";
function FM(e) {
  return NM && e instanceof Float64Array || // eslint-disable-line stdlib/require-globals
  MM(e) === "[object Float64Array]";
}
var kM = FM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var DM = kM, PM = DM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var UM = typeof Float64Array == "function" ? Float64Array : null, LM = UM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var RM = PM, Mo = LM;
function jM() {
  var e, r;
  if (typeof Mo != "function")
    return !1;
  try {
    r = new Mo([1, 3.14, -3.14, NaN]), e = RM(r) && r[0] === 1 && r[1] === 3.14 && r[2] === -3.14 && r[3] !== r[3];
  } catch {
    e = !1;
  }
  return e;
}
var BM = jM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var VM = BM, GM = VM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var zM = typeof Float64Array == "function" ? Float64Array : void 0, qM = zM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function HM() {
  throw new Error("not implemented");
}
var ZM = HM;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var WM = GM, YM = qM, JM = ZM, Bn;
WM() ? Bn = YM : Bn = JM;
var XM = Bn;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var KM = A6, QM = X6, eN = g4, rN = q4, tN = vC, nN = BC, iN = uM, aN = CM, oN = XM, bl;
function sN(e) {
  return new KM(e);
}
function uN(e) {
  return new QM(e);
}
function lN(e) {
  return new eN(e);
}
function fN(e) {
  return new rN(e);
}
function cN(e) {
  return new tN(e);
}
function dN(e) {
  return new nN(e);
}
function hN(e) {
  return new iN(e);
}
function vN(e) {
  return new aN(e);
}
function mN(e) {
  return new oN(e);
}
function yN() {
  var e = {
    int8array: sN,
    uint8array: uN,
    uint8clampedarray: lN,
    int16array: fN,
    uint16array: cN,
    int32array: dN,
    uint32array: hN,
    float32array: vN,
    float64array: mN
  };
  return e;
}
bl = yN();
var pN = bl;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var ut = hr, ki = Pt, No = Lr, gN = $O, Fo = Oi, $N = zI, bN = ul, wl = pl, wN = a3, Cr = p3, SN = Wu, Mr = xu, EN = r6, TN = pN;
function _N(e) {
  var r, t, n, i, a, u, s, c;
  for (r = [], i = [], s = Object.create(SN(e)), r.push(e), i.push(s), t = wN(e), c = 0; c < t.length; c++)
    n = t[c], a = Cr(e, n), ut(a, "value") && (u = ki(e[n]) ? [] : {}, a.value = Re(e[n], u, r, i, -1)), Mr(s, n, a);
  return Object.isExtensible(e) || Object.preventExtensions(s), Object.isSealed(e) && Object.seal(s), Object.isFrozen(e) && Object.freeze(s), s;
}
function ON(e) {
  var r = [], t = [], n, i, a, u, s, c;
  for (s = new e.constructor(e.message), r.push(e), t.push(s), e.stack && (s.stack = e.stack), e.code && (s.code = e.code), e.errno && (s.errno = e.errno), e.syscall && (s.syscall = e.syscall), n = wl(e), c = 0; c < n.length; c++)
    u = n[c], i = Cr(e, u), ut(i, "value") && (a = ki(e[u]) ? [] : {}, i.value = Re(e[u], a, r, t, -1)), Mr(s, u, i);
  return s;
}
function Re(e, r, t, n, i) {
  var a, u, s, c, h, y, m, g, b, w;
  if (i -= 1, typeof e != "object" || e === null)
    return e;
  if (No(e))
    return EN(e);
  if (gN(e))
    return ON(e);
  if (s = Fo(e), s === "date")
    return /* @__PURE__ */ new Date(+e);
  if (s === "regexp")
    return $N(e.toString());
  if (s === "set")
    return new Set(e);
  if (s === "map")
    return new Map(e);
  if (s === "string" || s === "boolean" || s === "number")
    return e.valueOf();
  if (h = TN[s], h)
    return h(e);
  if (s !== "array" && s !== "object")
    return typeof Object.freeze == "function" ? _N(e) : {};
  if (u = wl(e), i > 0)
    for (a = s, w = 0; w < u.length; w++) {
      if (y = u[w], g = e[y], s = Fo(g), typeof g != "object" || g === null || s !== "array" && s !== "object" || No(g)) {
        a === "object" ? (c = Cr(e, y), ut(c, "value") && (c.value = Re(g)), Mr(r, y, c)) : r[y] = Re(g);
        continue;
      }
      if (b = bN(t, g), b !== -1) {
        r[y] = n[b];
        continue;
      }
      m = ki(g) ? new Array(g.length) : {}, t.push(g), n.push(m), a === "array" ? r[y] = Re(g, m, t, n, i) : (c = Cr(e, y), ut(c, "value") && (c.value = Re(g, m, t, n, i)), Mr(r, y, c));
    }
  else if (s === "array")
    for (w = 0; w < u.length; w++)
      y = u[w], r[y] = e[y];
  else
    for (w = 0; w < u.length; w++)
      y = u[w], c = Cr(e, y), Mr(r, y, c);
  return Object.isExtensible(e) || Object.preventExtensions(r), Object.isSealed(e) && Object.seal(r), Object.isFrozen(e) && Object.freeze(r), r;
}
var IN = Re;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var AN = Pt, xN = bT.isPrimitive, CN = bi, MN = IN;
function NN(e, r) {
  var t;
  if (arguments.length > 1) {
    if (!xN(r))
      throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `" + r + "`.");
    if (r === 0)
      return e;
  } else
    r = CN;
  return t = AN(e) ? new Array(e.length) : {}, MN(e, t, [e], [t], r);
}
var FN = NN;
/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var kN = FN, DN = kN;
const PN = mS, UN = gu, Sl = wS, LN = DN, J = {};
J.serialize = function(r) {
  try {
    return {
      id: r.id,
      status: r.statusCode,
      code: r.code || r.errorType,
      title: r.name,
      detail: r.message,
      meta: {
        context: r.context,
        help: r.help,
        errorDetails: r.errorDetails,
        level: r.level,
        errorType: r.errorType
      }
    };
  } catch {
    return {
      detail: "Something went wrong."
    };
  }
};
J.deserialize = function(r) {
  return {
    id: r.id,
    message: r.detail || r.error_description || r.message,
    statusCode: r.status,
    code: r.code || r.error,
    level: r.meta && r.meta.level,
    help: r.meta && r.meta.help,
    context: r.meta && r.meta.context
  };
};
J.OAuthSerialize = function(r) {
  const t = {};
  return t[this.NoPermissionError.name] = "access_denied", t[this.MaintenanceError.name] = "temporarily_unavailable", t[this.BadRequestError.name] = t[this.ValidationError.name] = "invalid_request", t.default = "server_error", UN({
    error: r.code || t[r.name] || "server_error",
    error_description: r.message
  }, PN(J.serialize(r), ["detail", "code"]));
};
J.OAuthDeserialize = function(r) {
  try {
    return new this[r.title || r.name || this.InternalServerError.name](J.deserialize(r));
  } catch {
    return new this.InternalServerError(Sl({
      errorType: r.title || r.name
    }, J.deserialize(r)));
  }
};
J.JSONAPISerialize = function(r) {
  const t = {
    errors: [J.serialize(r)]
  };
  return t.errors[0].source = {}, r.property && (t.errors[0].source.pointer = "/data/attributes/" + r.property), t;
};
J.JSONAPIDeserialize = function(r) {
  r = r.errors && r.errors[0] || {};
  let t;
  try {
    t = new this[r.title || r.name || this.InternalServerError.name](J.deserialize(r));
  } catch {
    t = new this.InternalServerError(Sl({
      errorType: r.title || r.name
    }, J.deserialize(r)));
  }
  return r.source && r.source.pointer && (t.property = r.source.pointer.split("/")[3]), t;
};
cr.wrapStack = function(r, t) {
  const n = r.stack.split(/\n/g)[1], [i, ...a] = t.stack.split(/\n/g);
  return [i, n, ...a].join(`
`);
};
cr.serialize = function(r, t) {
  t = t || { format: "jsonapi" };
  let n = {};
  try {
    t.format === "jsonapi" ? n = J.JSONAPISerialize.bind(this)(r) : n = J.OAuthSerialize.bind(this)(r);
  } catch {
    n.message = "Something went wrong.";
  }
  return n;
};
cr.deserialize = function(r) {
  let t = {};
  return r.errors ? t = J.JSONAPIDeserialize.bind(this)(r) : t = J.OAuthDeserialize.bind(this)(r), t;
};
cr.prepareStackForUser = function(r) {
  let t = r.stack.split(/\n/);
  t.splice(1, t.length - 1), r.help && t.splice(1, 0, `${r.help}`), r.context && t.splice(1, 0, `${r.context}`);
  const n = LN(r);
  return n.stack = t.join(`
`), n;
};
cr.isGhostError = function(r) {
  const t = this.GhostError.name, n = "IgnitionError";
  return function a(u) {
    return !u || !u.name ? !1 : u.name === t || u.name === n ? !0 : a(Object.getPrototypeOf(u));
  }(r.constructor);
};
const RN = zs, C = gu, jN = Qg, Ir = cr;
class x extends Error {
  constructor(r = {}) {
    super(), this.statusCode = 500, this.errorType = "InternalServerError", this.level = "normal", this.message = "The server has encountered an error.", this.id = RN.v1(), this.id = r.id || this.id, this.statusCode = r.statusCode || this.statusCode, this.level = r.level || this.level, this.context = r.context || this.context, this.help = r.help || this.help, this.errorType = this.name = r.errorType || this.errorType, this.errorDetails = r.errorDetails, this.code = r.code || null, this.property = r.property || null, this.redirect = r.redirect || null, this.message = r.message || this.message, this.hideStack = r.hideStack || !1, r.err && (jN(r.err) && (r.err = new Error(r.err)), Object.getOwnPropertyNames(r.err).forEach((t) => {
      if (["errorType", "name", "statusCode", "message", "level"].indexOf(t) === -1) {
        if (t === "code") {
          this[t] = this[t] || r.err[t];
          return;
        }
        if (t === "stack" && !this.hideStack) {
          this[t] = Ir.wrapStack(this, r.err);
          return;
        }
        this[t] = r.err[t] || this[t];
      }
    }));
  }
}
const El = {
  InternalServerError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 500,
        level: "critical",
        errorType: "InternalServerError",
        message: "The server has encountered an error."
      }, r));
    }
  },
  IncorrectUsageError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 400,
        level: "critical",
        errorType: "IncorrectUsageError",
        message: "We detected a misuse. Please read the stack trace."
      }, r));
    }
  },
  NotFoundError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 404,
        errorType: "NotFoundError",
        message: "Resource could not be found.",
        hideStack: !0
      }, r));
    }
  },
  BadRequestError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 400,
        errorType: "BadRequestError",
        message: "The request could not be understood."
      }, r));
    }
  },
  UnauthorizedError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 401,
        errorType: "UnauthorizedError",
        message: "You are not authorised to make this request."
      }, r));
    }
  },
  NoPermissionError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 403,
        errorType: "NoPermissionError",
        message: "You do not have permission to perform this request."
      }, r));
    }
  },
  ValidationError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 422,
        errorType: "ValidationError",
        message: "The request failed validation."
      }, r));
    }
  },
  UnsupportedMediaTypeError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 415,
        errorType: "UnsupportedMediaTypeError",
        message: "The media in the request is not supported by the server."
      }, r));
    }
  },
  TooManyRequestsError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 429,
        errorType: "TooManyRequestsError",
        message: "Server has received too many similar requests in a short space of time."
      }, r));
    }
  },
  MaintenanceError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 503,
        errorType: "MaintenanceError",
        message: "The server is temporarily down for maintenance."
      }, r));
    }
  },
  MethodNotAllowedError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 405,
        errorType: "MethodNotAllowedError",
        message: "Method not allowed for resource."
      }, r));
    }
  },
  RequestNotAcceptableError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 406,
        errorType: "RequestNotAcceptableError",
        message: "Request not acceptable for provided Accept-Version header.",
        hideStack: !0
      }, r));
    }
  },
  RequestEntityTooLargeError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 413,
        errorType: "RequestEntityTooLargeError",
        message: "Request was too big for the server to handle."
      }, r));
    }
  },
  TokenRevocationError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 503,
        errorType: "TokenRevocationError",
        message: "Token is no longer available."
      }, r));
    }
  },
  VersionMismatchError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 400,
        errorType: "VersionMismatchError",
        message: "Requested version does not match server version."
      }, r));
    }
  },
  DataExportError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 500,
        errorType: "DataExportError",
        message: "The server encountered an error whilst exporting data."
      }, r));
    }
  },
  DataImportError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 500,
        errorType: "DataImportError",
        message: "The server encountered an error whilst importing data."
      }, r));
    }
  },
  EmailError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 500,
        errorType: "EmailError",
        message: "The server encountered an error whilst sending email."
      }, r));
    }
  },
  ThemeValidationError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 422,
        errorType: "ThemeValidationError",
        message: "The theme has a validation error.",
        errorDetails: {}
      }, r));
    }
  },
  DisabledFeatureError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 409,
        errorType: "DisabledFeatureError",
        message: "Unable to complete the request, this feature is disabled."
      }, r));
    }
  },
  UpdateCollisionError: class extends x {
    constructor(r) {
      super(C({
        statusCode: 409,
        errorType: "UpdateCollisionError",
        message: "Unable to complete the request, there was a conflict."
      }, r));
    }
  },
  HostLimitError: class extends x {
    constructor(r) {
      super(C({
        errorType: "HostLimitError",
        hideStack: !0,
        statusCode: 403,
        message: "Unable to complete the request, this resource is limited."
      }, r));
    }
  },
  HelperWarning: class extends x {
    constructor(r) {
      super(C({
        errorType: "HelperWarning",
        hideStack: !0,
        statusCode: 400,
        message: "A theme helper has done something unexpected."
      }, r));
    }
  },
  PasswordResetRequiredError: class extends x {
    constructor(r) {
      super(C({
        errorType: "PasswordResetRequiredError",
        statusCode: 401,
        message: "For security, you need to create a new password. An email has been sent to you with instructions!"
      }, r));
    }
  },
  UnhandledJobError: class extends x {
    constructor(r) {
      super(C({
        errorType: "UnhandledJobError",
        message: "Processed job threw an unhandled error",
        level: "critical"
      }, r));
    }
  },
  NoContentError: class extends x {
    constructor(r) {
      super(C({
        errorType: "NoContentError",
        statusCode: 204,
        hideStack: !0
      }, r));
    }
  },
  ConflictError: class extends x {
    constructor(r) {
      super(C({
        errorType: "ConflictError",
        statusCode: 409,
        message: "The server has encountered an conflict."
      }, r));
    }
  },
  MigrationError: class extends x {
    constructor(r) {
      super(C({
        errorType: "MigrationError",
        message: "An error has occurred applying a database migration.",
        level: "critical"
      }, r));
    }
  }
};
ai.exports = El;
const un = Object.assign({}, El, { GhostError: x });
ai.exports.utils = {
  serialize: Ir.serialize.bind(un),
  deserialize: Ir.deserialize.bind(un),
  isGhostError: Ir.isGhostError.bind(un),
  prepareStackForUser: Ir.prepareStackForUser
};
var BN = ai.exports, Tl = BN, VN = Rs, GN = VN(function(e, r, t) {
  return e + (t ? " " : "") + r.toLowerCase();
}), zN = GN, qN = Fe, HN = vi, ZN = qe, WN = HN(function(e, r, t, n) {
  qN(r, ZN(r), e, n);
}), YN = WN, JN = Ce, XN = be, KN = ci, QN = "[object DOMException]", e8 = "[object Error]";
function r8(e) {
  if (!XN(e))
    return !1;
  var r = JN(e);
  return r == e8 || r == QN || typeof e.message == "string" && typeof e.name == "string" && !KN(e);
}
var _l = r8, t8 = hu, n8 = yu, i8 = _l, a8 = n8(function(e, r) {
  try {
    return t8(e, void 0, r);
  } catch (t) {
    return i8(t) ? t : new Error(t);
  }
}), o8 = a8, s8 = Xn;
function u8(e, r) {
  return s8(r, function(t) {
    return e[t];
  });
}
var l8 = u8, f8 = Pr, Ol = Object.prototype, c8 = Ol.hasOwnProperty;
function d8(e, r, t, n) {
  return e === void 0 || f8(e, Ol[t]) && !c8.call(n, t) ? r : e;
}
var h8 = d8, v8 = {
  "\\": "\\",
  "'": "'",
  "\n": "n",
  "\r": "r",
  "\u2028": "u2028",
  "\u2029": "u2029"
};
function m8(e) {
  return "\\" + v8[e];
}
var y8 = m8, p8 = /<%=([\s\S]+?)%>/g, Il = p8, g8 = _s, $8 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, b8 = g8($8), w8 = b8, S8 = w8, E8 = Ve, Al = /[&<>"']/g, T8 = RegExp(Al.source);
function _8(e) {
  return e = E8(e), e && T8.test(e) ? e.replace(Al, S8) : e;
}
var O8 = _8, I8 = /<%-([\s\S]+?)%>/g, A8 = I8, x8 = /<%([\s\S]+?)%>/g, C8 = x8, M8 = O8, N8 = A8, F8 = C8, k8 = Il, D8 = {
  /**
   * Used to detect `data` property values to be HTML-escaped.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  escape: N8,
  /**
   * Used to detect code to be evaluated.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  evaluate: F8,
  /**
   * Used to detect `data` property values to inject.
   *
   * @memberOf _.templateSettings
   * @type {RegExp}
   */
  interpolate: k8,
  /**
   * Used to reference the data object in the template text.
   *
   * @memberOf _.templateSettings
   * @type {string}
   */
  variable: "",
  /**
   * Used to import variables into the compiled template.
   *
   * @memberOf _.templateSettings
   * @type {Object}
   */
  imports: {
    /**
     * A reference to the `lodash` function.
     *
     * @memberOf _.templateSettings.imports
     * @type {Function}
     */
    _: { escape: M8 }
  }
}, P8 = D8, ko = YN, U8 = o8, L8 = l8, Do = h8, R8 = y8, j8 = _l, B8 = pu, V8 = kt, G8 = Il, Po = P8, z8 = Ve, q8 = "Invalid `variable` option passed into `_.template`", H8 = /\b__p \+= '';/g, Z8 = /\b(__p \+=) '' \+/g, W8 = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Y8 = /[()=,{}\[\]\/\s]/, J8 = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Jr = /($^)/, X8 = /['\n\r\u2028\u2029\\]/g, K8 = Object.prototype, Uo = K8.hasOwnProperty;
function Q8(e, r, t) {
  var n = Po.imports._.templateSettings || Po;
  t && B8(e, r, t) && (r = void 0), e = z8(e), r = ko({}, r, n, Do);
  var i = ko({}, r.imports, n.imports, Do), a = V8(i), u = L8(i, a), s, c, h = 0, y = r.interpolate || Jr, m = "__p += '", g = RegExp(
    (r.escape || Jr).source + "|" + y.source + "|" + (y === G8 ? J8 : Jr).source + "|" + (r.evaluate || Jr).source + "|$",
    "g"
  ), b = Uo.call(r, "sourceURL") ? "//# sourceURL=" + (r.sourceURL + "").replace(/\s/g, " ") + `
` : "";
  e.replace(g, function(_, E, L, Te, we, q) {
    return L || (L = Te), m += e.slice(h, q).replace(X8, R8), E && (s = !0, m += `' +
__e(` + E + `) +
'`), we && (c = !0, m += `';
` + we + `;
__p += '`), L && (m += `' +
((__t = (` + L + `)) == null ? '' : __t) +
'`), h = q + _.length, _;
  }), m += `';
`;
  var w = Uo.call(r, "variable") && r.variable;
  if (!w)
    m = `with (obj) {
` + m + `
}
`;
  else if (Y8.test(w))
    throw new Error(q8);
  m = (c ? m.replace(H8, "") : m).replace(Z8, "$1").replace(W8, "$1;"), m = "function(" + (w || "obj") + `) {
` + (w ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (c ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + m + `return __p
}`;
  var T = U8(function() {
    return Function(a, b + "return " + m).apply(void 0, u);
  });
  if (T.source = m, j8(T))
    throw T;
  return T;
}
var eF = Q8, te = {};
Object.defineProperty(te, "__esModule", { value: !0 });
function Lo(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function ce(e, r, t) {
  return r && Lo(e.prototype, r), t && Lo(e, t), e;
}
function se(e, r) {
  e.prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
}
function Vn(e) {
  return Vn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Vn(e);
}
function lt(e, r) {
  return lt = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, lt(e, r);
}
function rF() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function tt(e, r, t) {
  return rF() ? tt = Reflect.construct : tt = function(i, a, u) {
    var s = [null];
    s.push.apply(s, a);
    var c = Function.bind.apply(i, s), h = new c();
    return u && lt(h, u.prototype), h;
  }, tt.apply(null, arguments);
}
function tF(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Gn(e) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Gn = function(n) {
    if (n === null || !tF(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(n))
        return r.get(n);
      r.set(n, i);
    }
    function i() {
      return tt(n, arguments, Vn(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), lt(i, n);
  }, Gn(e);
}
function nF(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(r.indexOf(i) >= 0) && (t[i] = e[i]);
  return t;
}
function iF(e, r) {
  if (e) {
    if (typeof e == "string")
      return Ro(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(t);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ro(e, r);
  }
}
function Ro(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++)
    n[t] = e[t];
  return n;
}
function Ae(e) {
  var r = 0;
  if (typeof Symbol > "u" || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (e = iF(e)))
      return function() {
        return r >= e.length ? {
          done: !0
        } : {
          done: !1,
          value: e[r++]
        };
      };
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  return r = e[Symbol.iterator](), r.next.bind(r);
}
var He = /* @__PURE__ */ function(e) {
  se(r, e);
  function r() {
    return e.apply(this, arguments) || this;
  }
  return r;
}(/* @__PURE__ */ Gn(Error)), aF = /* @__PURE__ */ function(e) {
  se(r, e);
  function r(t) {
    return e.call(this, "Invalid DateTime: " + t.toMessage()) || this;
  }
  return r;
}(He), oF = /* @__PURE__ */ function(e) {
  se(r, e);
  function r(t) {
    return e.call(this, "Invalid Interval: " + t.toMessage()) || this;
  }
  return r;
}(He), sF = /* @__PURE__ */ function(e) {
  se(r, e);
  function r(t) {
    return e.call(this, "Invalid Duration: " + t.toMessage()) || this;
  }
  return r;
}(He), Ar = /* @__PURE__ */ function(e) {
  se(r, e);
  function r() {
    return e.apply(this, arguments) || this;
  }
  return r;
}(He), xl = /* @__PURE__ */ function(e) {
  se(r, e);
  function r(t) {
    return e.call(this, "Invalid unit " + t) || this;
  }
  return r;
}(He), ae = /* @__PURE__ */ function(e) {
  se(r, e);
  function r() {
    return e.apply(this, arguments) || this;
  }
  return r;
}(He), Oe = /* @__PURE__ */ function(e) {
  se(r, e);
  function r() {
    return e.call(this, "Zone is an abstract class") || this;
  }
  return r;
}(He), S = "numeric", de = "short", re = "long", ft = {
  year: S,
  month: S,
  day: S
}, Di = {
  year: S,
  month: de,
  day: S
}, Cl = {
  year: S,
  month: de,
  day: S,
  weekday: de
}, Pi = {
  year: S,
  month: re,
  day: S
}, Ui = {
  year: S,
  month: re,
  day: S,
  weekday: re
}, Li = {
  hour: S,
  minute: S
}, Ri = {
  hour: S,
  minute: S,
  second: S
}, ji = {
  hour: S,
  minute: S,
  second: S,
  timeZoneName: de
}, Bi = {
  hour: S,
  minute: S,
  second: S,
  timeZoneName: re
}, Vi = {
  hour: S,
  minute: S,
  hour12: !1
}, Gi = {
  hour: S,
  minute: S,
  second: S,
  hour12: !1
}, zi = {
  hour: S,
  minute: S,
  second: S,
  hour12: !1,
  timeZoneName: de
}, qi = {
  hour: S,
  minute: S,
  second: S,
  hour12: !1,
  timeZoneName: re
}, Hi = {
  year: S,
  month: S,
  day: S,
  hour: S,
  minute: S
}, Zi = {
  year: S,
  month: S,
  day: S,
  hour: S,
  minute: S,
  second: S
}, Wi = {
  year: S,
  month: de,
  day: S,
  hour: S,
  minute: S
}, Yi = {
  year: S,
  month: de,
  day: S,
  hour: S,
  minute: S,
  second: S
}, Ml = {
  year: S,
  month: de,
  day: S,
  weekday: de,
  hour: S,
  minute: S
}, Ji = {
  year: S,
  month: re,
  day: S,
  hour: S,
  minute: S,
  timeZoneName: de
}, Xi = {
  year: S,
  month: re,
  day: S,
  hour: S,
  minute: S,
  second: S,
  timeZoneName: de
}, Ki = {
  year: S,
  month: re,
  day: S,
  weekday: re,
  hour: S,
  minute: S,
  timeZoneName: re
}, Qi = {
  year: S,
  month: re,
  day: S,
  weekday: re,
  hour: S,
  minute: S,
  second: S,
  timeZoneName: re
};
function I(e) {
  return typeof e > "u";
}
function Be(e) {
  return typeof e == "number";
}
function jt(e) {
  return typeof e == "number" && e % 1 === 0;
}
function uF(e) {
  return typeof e == "string";
}
function lF(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function pe() {
  try {
    return typeof Intl < "u" && Intl.DateTimeFormat;
  } catch {
    return !1;
  }
}
function Rr() {
  return !I(Intl.DateTimeFormat.prototype.formatToParts);
}
function Nl() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function fF(e) {
  return Array.isArray(e) ? e : [e];
}
function jo(e, r, t) {
  if (e.length !== 0)
    return e.reduce(function(n, i) {
      var a = [r(i), i];
      return n && t(n[0], a[0]) === n[0] ? n : a;
    }, null)[1];
}
function Fl(e, r) {
  return r.reduce(function(t, n) {
    return t[n] = e[n], t;
  }, {});
}
function or(e, r) {
  return Object.prototype.hasOwnProperty.call(e, r);
}
function Se(e, r, t) {
  return jt(e) && e >= r && e <= t;
}
function cF(e, r) {
  return e - r * Math.floor(e / r);
}
function ir(e, r) {
  r === void 0 && (r = 2);
  var t = e < 0 ? "-" : "", n = t ? e * -1 : e, i;
  return n.toString().length < r ? i = ("0".repeat(r) + n).slice(-r) : i = n.toString(), "" + t + i;
}
function X(e) {
  if (!(I(e) || e === null || e === ""))
    return parseInt(e, 10);
}
function ea(e) {
  if (!(I(e) || e === null || e === "")) {
    var r = parseFloat("0." + e) * 1e3;
    return Math.floor(r);
  }
}
function ra(e, r, t) {
  t === void 0 && (t = !1);
  var n = Math.pow(10, r), i = t ? Math.trunc : Math.round;
  return i(e * n) / n;
}
function jr(e) {
  return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0);
}
function Nr(e) {
  return jr(e) ? 366 : 365;
}
function ct(e, r) {
  var t = cF(r - 1, 12) + 1, n = e + (r - t) / 12;
  return t === 2 ? jr(n) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function ta(e) {
  var r = Date.UTC(e.year, e.month - 1, e.day, e.hour, e.minute, e.second, e.millisecond);
  return e.year < 100 && e.year >= 0 && (r = new Date(r), r.setUTCFullYear(r.getUTCFullYear() - 1900)), +r;
}
function dt(e) {
  var r = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7, t = e - 1, n = (t + Math.floor(t / 4) - Math.floor(t / 100) + Math.floor(t / 400)) % 7;
  return r === 4 || n === 3 ? 53 : 52;
}
function zn(e) {
  return e > 99 ? e : e > 60 ? 1900 + e : 2e3 + e;
}
function kl(e, r, t, n) {
  n === void 0 && (n = null);
  var i = new Date(e), a = {
    hour12: !1,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  n && (a.timeZone = n);
  var u = Object.assign({
    timeZoneName: r
  }, a), s = pe();
  if (s && Rr()) {
    var c = new Intl.DateTimeFormat(t, u).formatToParts(i).find(function(b) {
      return b.type.toLowerCase() === "timezonename";
    });
    return c ? c.value : null;
  } else if (s) {
    var h = new Intl.DateTimeFormat(t, a).format(i), y = new Intl.DateTimeFormat(t, u).format(i), m = y.substring(h.length), g = m.replace(/^[, \u200e]+/, "");
    return g;
  } else
    return null;
}
function Bt(e, r) {
  var t = parseInt(e, 10);
  Number.isNaN(t) && (t = 0);
  var n = parseInt(r, 10) || 0, i = t < 0 || Object.is(t, -0) ? -n : n;
  return t * 60 + i;
}
function Dl(e) {
  var r = Number(e);
  if (typeof e == "boolean" || e === "" || Number.isNaN(r))
    throw new ae("Invalid unit value " + e);
  return r;
}
function ht(e, r, t) {
  var n = {};
  for (var i in e)
    if (or(e, i)) {
      if (t.indexOf(i) >= 0)
        continue;
      var a = e[i];
      if (a == null)
        continue;
      n[r(i)] = Dl(a);
    }
  return n;
}
function vt(e, r) {
  var t = Math.trunc(Math.abs(e / 60)), n = Math.trunc(Math.abs(e % 60)), i = e >= 0 ? "+" : "-";
  switch (r) {
    case "short":
      return "" + i + ir(t, 2) + ":" + ir(n, 2);
    case "narrow":
      return "" + i + t + (n > 0 ? ":" + n : "");
    case "techie":
      return "" + i + ir(t, 2) + ir(n, 2);
    default:
      throw new RangeError("Value format " + r + " is out of range for property format");
  }
}
function Vt(e) {
  return Fl(e, ["hour", "minute", "second", "millisecond"]);
}
var Pl = /[A-Za-z_+-]{1,256}(:?\/[A-Za-z_+-]{1,256}(\/[A-Za-z_+-]{1,256})?)?/;
function D(e) {
  return JSON.stringify(e, Object.keys(e).sort());
}
var dF = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], Ul = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hF = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function Ll(e) {
  switch (e) {
    case "narrow":
      return [].concat(hF);
    case "short":
      return [].concat(Ul);
    case "long":
      return [].concat(dF);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
var Rl = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], jl = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], vF = ["M", "T", "W", "T", "F", "S", "S"];
function Bl(e) {
  switch (e) {
    case "narrow":
      return [].concat(vF);
    case "short":
      return [].concat(jl);
    case "long":
      return [].concat(Rl);
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
var Vl = ["AM", "PM"], mF = ["Before Christ", "Anno Domini"], yF = ["BC", "AD"], pF = ["B", "A"];
function Gl(e) {
  switch (e) {
    case "narrow":
      return [].concat(pF);
    case "short":
      return [].concat(yF);
    case "long":
      return [].concat(mF);
    default:
      return null;
  }
}
function gF(e) {
  return Vl[e.hour < 12 ? 0 : 1];
}
function $F(e, r) {
  return Bl(r)[e.weekday - 1];
}
function bF(e, r) {
  return Ll(r)[e.month - 1];
}
function wF(e, r) {
  return Gl(r)[e.year < 0 ? 0 : 1];
}
function SF(e, r, t, n) {
  t === void 0 && (t = "always"), n === void 0 && (n = !1);
  var i = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, a = ["hours", "minutes", "seconds"].indexOf(e) === -1;
  if (t === "auto" && a) {
    var u = e === "days";
    switch (r) {
      case 1:
        return u ? "tomorrow" : "next " + i[e][0];
      case -1:
        return u ? "yesterday" : "last " + i[e][0];
      case 0:
        return u ? "today" : "this " + i[e][0];
    }
  }
  var s = Object.is(r, -0) || r < 0, c = Math.abs(r), h = c === 1, y = i[e], m = n ? h ? y[1] : y[2] || y[1] : h ? i[e][0] : e;
  return s ? c + " " + m + " ago" : "in " + c + " " + m;
}
function EF(e) {
  var r = Fl(e, ["weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hour12"]), t = D(r), n = "EEEE, LLLL d, yyyy, h:mm a";
  switch (t) {
    case D(ft):
      return "M/d/yyyy";
    case D(Di):
      return "LLL d, yyyy";
    case D(Cl):
      return "EEE, LLL d, yyyy";
    case D(Pi):
      return "LLLL d, yyyy";
    case D(Ui):
      return "EEEE, LLLL d, yyyy";
    case D(Li):
      return "h:mm a";
    case D(Ri):
      return "h:mm:ss a";
    case D(ji):
      return "h:mm a";
    case D(Bi):
      return "h:mm a";
    case D(Vi):
      return "HH:mm";
    case D(Gi):
      return "HH:mm:ss";
    case D(zi):
      return "HH:mm";
    case D(qi):
      return "HH:mm";
    case D(Hi):
      return "M/d/yyyy, h:mm a";
    case D(Wi):
      return "LLL d, yyyy, h:mm a";
    case D(Ji):
      return "LLLL d, yyyy, h:mm a";
    case D(Ki):
      return n;
    case D(Zi):
      return "M/d/yyyy, h:mm:ss a";
    case D(Yi):
      return "LLL d, yyyy, h:mm:ss a";
    case D(Ml):
      return "EEE, d LLL yyyy, h:mm a";
    case D(Xi):
      return "LLLL d, yyyy, h:mm:ss a";
    case D(Qi):
      return "EEEE, LLLL d, yyyy, h:mm:ss a";
    default:
      return n;
  }
}
function Bo(e, r) {
  for (var t = "", n = Ae(e), i; !(i = n()).done; ) {
    var a = i.value;
    a.literal ? t += a.val : t += r(a.val);
  }
  return t;
}
var TF = {
  D: ft,
  DD: Di,
  DDD: Pi,
  DDDD: Ui,
  t: Li,
  tt: Ri,
  ttt: ji,
  tttt: Bi,
  T: Vi,
  TT: Gi,
  TTT: zi,
  TTTT: qi,
  f: Hi,
  ff: Wi,
  fff: Ji,
  ffff: Ki,
  F: Zi,
  FF: Yi,
  FFF: Xi,
  FFFF: Qi
}, me = /* @__PURE__ */ function() {
  e.create = function(n, i) {
    return i === void 0 && (i = {}), new e(n, i);
  }, e.parseFormat = function(n) {
    for (var i = null, a = "", u = !1, s = [], c = 0; c < n.length; c++) {
      var h = n.charAt(c);
      h === "'" ? (a.length > 0 && s.push({
        literal: u,
        val: a
      }), i = null, a = "", u = !u) : u || h === i ? a += h : (a.length > 0 && s.push({
        literal: !1,
        val: a
      }), a = h, i = h);
    }
    return a.length > 0 && s.push({
      literal: u,
      val: a
    }), s;
  }, e.macroTokenToFormatOpts = function(n) {
    return TF[n];
  };
  function e(t, n) {
    this.opts = n, this.loc = t, this.systemLoc = null;
  }
  var r = e.prototype;
  return r.formatWithSystemDefault = function(n, i) {
    this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem());
    var a = this.systemLoc.dtFormatter(n, Object.assign({}, this.opts, i));
    return a.format();
  }, r.formatDateTime = function(n, i) {
    i === void 0 && (i = {});
    var a = this.loc.dtFormatter(n, Object.assign({}, this.opts, i));
    return a.format();
  }, r.formatDateTimeParts = function(n, i) {
    i === void 0 && (i = {});
    var a = this.loc.dtFormatter(n, Object.assign({}, this.opts, i));
    return a.formatToParts();
  }, r.resolvedOptions = function(n, i) {
    i === void 0 && (i = {});
    var a = this.loc.dtFormatter(n, Object.assign({}, this.opts, i));
    return a.resolvedOptions();
  }, r.num = function(n, i) {
    if (i === void 0 && (i = 0), this.opts.forceSimple)
      return ir(n, i);
    var a = Object.assign({}, this.opts);
    return i > 0 && (a.padTo = i), this.loc.numberFormatter(a).format(n);
  }, r.formatDateTimeFromString = function(n, i) {
    var a = this, u = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory" && Rr(), c = function(E, L) {
      return a.loc.extract(n, E, L);
    }, h = function(E) {
      return n.isOffsetFixed && n.offset === 0 && E.allowZ ? "Z" : n.isValid ? n.zone.formatOffset(n.ts, E.format) : "";
    }, y = function() {
      return u ? gF(n) : c({
        hour: "numeric",
        hour12: !0
      }, "dayperiod");
    }, m = function(E, L) {
      return u ? bF(n, E) : c(L ? {
        month: E
      } : {
        month: E,
        day: "numeric"
      }, "month");
    }, g = function(E, L) {
      return u ? $F(n, E) : c(L ? {
        weekday: E
      } : {
        weekday: E,
        month: "long",
        day: "numeric"
      }, "weekday");
    }, b = function(E) {
      var L = e.macroTokenToFormatOpts(E);
      return L ? a.formatWithSystemDefault(n, L) : E;
    }, w = function(E) {
      return u ? wF(n, E) : c({
        era: E
      }, "era");
    }, T = function(E) {
      switch (E) {
        case "S":
          return a.num(n.millisecond);
        case "u":
        case "SSS":
          return a.num(n.millisecond, 3);
        case "s":
          return a.num(n.second);
        case "ss":
          return a.num(n.second, 2);
        case "m":
          return a.num(n.minute);
        case "mm":
          return a.num(n.minute, 2);
        case "h":
          return a.num(n.hour % 12 === 0 ? 12 : n.hour % 12);
        case "hh":
          return a.num(n.hour % 12 === 0 ? 12 : n.hour % 12, 2);
        case "H":
          return a.num(n.hour);
        case "HH":
          return a.num(n.hour, 2);
        case "Z":
          return h({
            format: "narrow",
            allowZ: a.opts.allowZ
          });
        case "ZZ":
          return h({
            format: "short",
            allowZ: a.opts.allowZ
          });
        case "ZZZ":
          return h({
            format: "techie",
            allowZ: a.opts.allowZ
          });
        case "ZZZZ":
          return n.zone.offsetName(n.ts, {
            format: "short",
            locale: a.loc.locale
          });
        case "ZZZZZ":
          return n.zone.offsetName(n.ts, {
            format: "long",
            locale: a.loc.locale
          });
        case "z":
          return n.zoneName;
        case "a":
          return y();
        case "d":
          return s ? c({
            day: "numeric"
          }, "day") : a.num(n.day);
        case "dd":
          return s ? c({
            day: "2-digit"
          }, "day") : a.num(n.day, 2);
        case "c":
          return a.num(n.weekday);
        case "ccc":
          return g("short", !0);
        case "cccc":
          return g("long", !0);
        case "ccccc":
          return g("narrow", !0);
        case "E":
          return a.num(n.weekday);
        case "EEE":
          return g("short", !1);
        case "EEEE":
          return g("long", !1);
        case "EEEEE":
          return g("narrow", !1);
        case "L":
          return s ? c({
            month: "numeric",
            day: "numeric"
          }, "month") : a.num(n.month);
        case "LL":
          return s ? c({
            month: "2-digit",
            day: "numeric"
          }, "month") : a.num(n.month, 2);
        case "LLL":
          return m("short", !0);
        case "LLLL":
          return m("long", !0);
        case "LLLLL":
          return m("narrow", !0);
        case "M":
          return s ? c({
            month: "numeric"
          }, "month") : a.num(n.month);
        case "MM":
          return s ? c({
            month: "2-digit"
          }, "month") : a.num(n.month, 2);
        case "MMM":
          return m("short", !1);
        case "MMMM":
          return m("long", !1);
        case "MMMMM":
          return m("narrow", !1);
        case "y":
          return s ? c({
            year: "numeric"
          }, "year") : a.num(n.year);
        case "yy":
          return s ? c({
            year: "2-digit"
          }, "year") : a.num(n.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? c({
            year: "numeric"
          }, "year") : a.num(n.year, 4);
        case "yyyyyy":
          return s ? c({
            year: "numeric"
          }, "year") : a.num(n.year, 6);
        case "G":
          return w("short");
        case "GG":
          return w("long");
        case "GGGGG":
          return w("narrow");
        case "kk":
          return a.num(n.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return a.num(n.weekYear, 4);
        case "W":
          return a.num(n.weekNumber);
        case "WW":
          return a.num(n.weekNumber, 2);
        case "o":
          return a.num(n.ordinal);
        case "ooo":
          return a.num(n.ordinal, 3);
        case "q":
          return a.num(n.quarter);
        case "qq":
          return a.num(n.quarter, 2);
        case "X":
          return a.num(Math.floor(n.ts / 1e3));
        case "x":
          return a.num(n.ts);
        default:
          return b(E);
      }
    };
    return Bo(e.parseFormat(i), T);
  }, r.formatDurationFromString = function(n, i) {
    var a = this, u = function(g) {
      switch (g[0]) {
        case "S":
          return "millisecond";
        case "s":
          return "second";
        case "m":
          return "minute";
        case "h":
          return "hour";
        case "d":
          return "day";
        case "M":
          return "month";
        case "y":
          return "year";
        default:
          return null;
      }
    }, s = function(g) {
      return function(b) {
        var w = u(b);
        return w ? a.num(g.get(w), b.length) : b;
      };
    }, c = e.parseFormat(i), h = c.reduce(function(m, g) {
      var b = g.literal, w = g.val;
      return b ? m : m.concat(w);
    }, []), y = n.shiftTo.apply(n, h.map(u).filter(function(m) {
      return m;
    }));
    return Bo(c, s(y));
  }, e;
}(), fe = /* @__PURE__ */ function() {
  function e(t, n) {
    this.reason = t, this.explanation = n;
  }
  var r = e.prototype;
  return r.toMessage = function() {
    return this.explanation ? this.reason + ": " + this.explanation : this.reason;
  }, e;
}(), mr = /* @__PURE__ */ function() {
  function e() {
  }
  var r = e.prototype;
  return r.offsetName = function(n, i) {
    throw new Oe();
  }, r.formatOffset = function(n, i) {
    throw new Oe();
  }, r.offset = function(n) {
    throw new Oe();
  }, r.equals = function(n) {
    throw new Oe();
  }, ce(e, [{
    key: "type",
    /**
     * The type of zone
     * @abstract
     * @type {string}
     */
    get: function() {
      throw new Oe();
    }
    /**
     * The name of this zone.
     * @abstract
     * @type {string}
     */
  }, {
    key: "name",
    get: function() {
      throw new Oe();
    }
    /**
     * Returns whether the offset is known to be fixed for the whole year.
     * @abstract
     * @type {boolean}
     */
  }, {
    key: "universal",
    get: function() {
      throw new Oe();
    }
  }, {
    key: "isValid",
    get: function() {
      throw new Oe();
    }
  }]), e;
}(), ln = null, zl = /* @__PURE__ */ function(e) {
  se(r, e);
  function r() {
    return e.apply(this, arguments) || this;
  }
  var t = r.prototype;
  return t.offsetName = function(i, a) {
    var u = a.format, s = a.locale;
    return kl(i, u, s);
  }, t.formatOffset = function(i, a) {
    return vt(this.offset(i), a);
  }, t.offset = function(i) {
    return -new Date(i).getTimezoneOffset();
  }, t.equals = function(i) {
    return i.type === "local";
  }, ce(r, [{
    key: "type",
    /** @override **/
    get: function() {
      return "local";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return pe() ? new Intl.DateTimeFormat().resolvedOptions().timeZone : "local";
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return !0;
    }
  }], [{
    key: "instance",
    /**
     * Get a singleton instance of the local zone
     * @return {LocalZone}
     */
    get: function() {
      return ln === null && (ln = new r()), ln;
    }
  }]), r;
}(mr), _F = RegExp("^" + Pl.source + "$"), nt = {};
function OF(e) {
  return nt[e] || (nt[e] = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: e,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })), nt[e];
}
var IF = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function AF(e, r) {
  var t = e.format(r).replace(/\u200E/g, ""), n = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t), i = n[1], a = n[2], u = n[3], s = n[4], c = n[5], h = n[6];
  return [u, i, a, s, c, h];
}
function xF(e, r) {
  for (var t = e.formatToParts(r), n = [], i = 0; i < t.length; i++) {
    var a = t[i], u = a.type, s = a.value, c = IF[u];
    I(c) || (n[c] = parseInt(s, 10));
  }
  return n;
}
var Xr = {}, ye = /* @__PURE__ */ function(e) {
  se(r, e), r.create = function(i) {
    return Xr[i] || (Xr[i] = new r(i)), Xr[i];
  }, r.resetCache = function() {
    Xr = {}, nt = {};
  }, r.isValidSpecifier = function(i) {
    return !!(i && i.match(_F));
  }, r.isValidZone = function(i) {
    try {
      return new Intl.DateTimeFormat("en-US", {
        timeZone: i
      }).format(), !0;
    } catch {
      return !1;
    }
  }, r.parseGMTOffset = function(i) {
    if (i) {
      var a = i.match(/^Etc\/GMT(0|[+-]\d{1,2})$/i);
      if (a)
        return -60 * parseInt(a[1]);
    }
    return null;
  };
  function r(n) {
    var i;
    return i = e.call(this) || this, i.zoneName = n, i.valid = r.isValidZone(n), i;
  }
  var t = r.prototype;
  return t.offsetName = function(i, a) {
    var u = a.format, s = a.locale;
    return kl(i, u, s, this.name);
  }, t.formatOffset = function(i, a) {
    return vt(this.offset(i), a);
  }, t.offset = function(i) {
    var a = new Date(i);
    if (isNaN(a))
      return NaN;
    var u = OF(this.name), s = u.formatToParts ? xF(u, a) : AF(u, a), c = s[0], h = s[1], y = s[2], m = s[3], g = s[4], b = s[5], w = m === 24 ? 0 : m, T = ta({
      year: c,
      month: h,
      day: y,
      hour: w,
      minute: g,
      second: b,
      millisecond: 0
    }), _ = +a, E = _ % 1e3;
    return _ -= E >= 0 ? E : 1e3 + E, (T - _) / (60 * 1e3);
  }, t.equals = function(i) {
    return i.type === "iana" && i.name === this.name;
  }, ce(r, [{
    key: "type",
    get: function() {
      return "iana";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.zoneName;
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return this.valid;
    }
  }]), r;
}(mr), fn = null, ee = /* @__PURE__ */ function(e) {
  se(r, e), r.instance = function(i) {
    return i === 0 ? r.utcInstance : new r(i);
  }, r.parseSpecifier = function(i) {
    if (i) {
      var a = i.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (a)
        return new r(Bt(a[1], a[2]));
    }
    return null;
  }, ce(r, null, [{
    key: "utcInstance",
    /**
     * Get a singleton instance of UTC
     * @return {FixedOffsetZone}
     */
    get: function() {
      return fn === null && (fn = new r(0)), fn;
    }
  }]);
  function r(n) {
    var i;
    return i = e.call(this) || this, i.fixed = n, i;
  }
  var t = r.prototype;
  return t.offsetName = function() {
    return this.name;
  }, t.formatOffset = function(i, a) {
    return vt(this.fixed, a);
  }, t.offset = function() {
    return this.fixed;
  }, t.equals = function(i) {
    return i.type === "fixed" && i.fixed === this.fixed;
  }, ce(r, [{
    key: "type",
    get: function() {
      return "fixed";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.fixed === 0 ? "UTC" : "UTC" + vt(this.fixed, "narrow");
    }
  }, {
    key: "universal",
    get: function() {
      return !0;
    }
  }, {
    key: "isValid",
    get: function() {
      return !0;
    }
  }]), r;
}(mr), qn = /* @__PURE__ */ function(e) {
  se(r, e);
  function r(n) {
    var i;
    return i = e.call(this) || this, i.zoneName = n, i;
  }
  var t = r.prototype;
  return t.offsetName = function() {
    return null;
  }, t.formatOffset = function() {
    return "";
  }, t.offset = function() {
    return NaN;
  }, t.equals = function() {
    return !1;
  }, ce(r, [{
    key: "type",
    get: function() {
      return "invalid";
    }
    /** @override **/
  }, {
    key: "name",
    get: function() {
      return this.zoneName;
    }
    /** @override **/
  }, {
    key: "universal",
    get: function() {
      return !1;
    }
  }, {
    key: "isValid",
    get: function() {
      return !1;
    }
  }]), r;
}(mr);
function Le(e, r) {
  var t;
  if (I(e) || e === null)
    return r;
  if (e instanceof mr)
    return e;
  if (uF(e)) {
    var n = e.toLowerCase();
    return n === "local" ? r : n === "utc" || n === "gmt" ? ee.utcInstance : (t = ye.parseGMTOffset(e)) != null ? ee.instance(t) : ye.isValidSpecifier(n) ? ye.create(e) : ee.parseSpecifier(n) || new qn(e);
  } else
    return Be(e) ? ee.instance(e) : typeof e == "object" && e.offset && typeof e.offset == "number" ? e : new qn(e);
}
var Vo = function() {
  return Date.now();
}, cn = null, Go = null, zo = null, qo = null, Ho = !1, R = /* @__PURE__ */ function() {
  function e() {
  }
  return e.resetCaches = function() {
    V.resetCache(), ye.resetCache();
  }, ce(e, null, [{
    key: "now",
    /**
     * Get the callback for returning the current timestamp.
     * @type {function}
     */
    get: function() {
      return Vo;
    },
    set: function(t) {
      Vo = t;
    }
    /**
     * Get the default time zone to create DateTimes in.
     * @type {string}
     */
  }, {
    key: "defaultZoneName",
    get: function() {
      return e.defaultZone.name;
    },
    set: function(t) {
      t ? cn = Le(t) : cn = null;
    }
    /**
     * Get the default time zone object to create DateTimes in. Does not affect existing instances.
     * @type {Zone}
     */
  }, {
    key: "defaultZone",
    get: function() {
      return cn || zl.instance;
    }
    /**
     * Get the default locale to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultLocale",
    get: function() {
      return Go;
    },
    set: function(t) {
      Go = t;
    }
    /**
     * Get the default numbering system to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultNumberingSystem",
    get: function() {
      return zo;
    },
    set: function(t) {
      zo = t;
    }
    /**
     * Get the default output calendar to create DateTimes with. Does not affect existing instances.
     * @type {string}
     */
  }, {
    key: "defaultOutputCalendar",
    get: function() {
      return qo;
    },
    set: function(t) {
      qo = t;
    }
    /**
     * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
     * @type {boolean}
     */
  }, {
    key: "throwOnInvalid",
    get: function() {
      return Ho;
    },
    set: function(t) {
      Ho = t;
    }
  }]), e;
}(), Hn = {};
function Zn(e, r) {
  r === void 0 && (r = {});
  var t = JSON.stringify([e, r]), n = Hn[t];
  return n || (n = new Intl.DateTimeFormat(e, r), Hn[t] = n), n;
}
var Wn = {};
function CF(e, r) {
  r === void 0 && (r = {});
  var t = JSON.stringify([e, r]), n = Wn[t];
  return n || (n = new Intl.NumberFormat(e, r), Wn[t] = n), n;
}
var Yn = {};
function MF(e, r) {
  r === void 0 && (r = {});
  var t = r;
  t.base;
  var n = nF(t, ["base"]), i = JSON.stringify([e, n]), a = Yn[i];
  return a || (a = new Intl.RelativeTimeFormat(e, r), Yn[i] = a), a;
}
var Ue = null;
function NF() {
  if (Ue)
    return Ue;
  if (pe()) {
    var e = new Intl.DateTimeFormat().resolvedOptions().locale;
    return Ue = !e || e === "und" ? "en-US" : e, Ue;
  } else
    return Ue = "en-US", Ue;
}
function FF(e) {
  var r = e.indexOf("-u-");
  if (r === -1)
    return [e];
  var t, n = e.substring(0, r);
  try {
    t = Zn(e).resolvedOptions();
  } catch {
    t = Zn(n).resolvedOptions();
  }
  var i = t, a = i.numberingSystem, u = i.calendar;
  return [n, a, u];
}
function kF(e, r, t) {
  return pe() ? ((t || r) && (e += "-u", t && (e += "-ca-" + t), r && (e += "-nu-" + r)), e) : [];
}
function DF(e) {
  for (var r = [], t = 1; t <= 12; t++) {
    var n = j.utc(2016, t, 1);
    r.push(e(n));
  }
  return r;
}
function PF(e) {
  for (var r = [], t = 1; t <= 7; t++) {
    var n = j.utc(2016, 11, 13 + t);
    r.push(e(n));
  }
  return r;
}
function Kr(e, r, t, n, i) {
  var a = e.listingMode(t);
  return a === "error" ? null : a === "en" ? n(r) : i(r);
}
function UF(e) {
  return e.numberingSystem && e.numberingSystem !== "latn" ? !1 : e.numberingSystem === "latn" || !e.locale || e.locale.startsWith("en") || pe() && new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem === "latn";
}
var LF = /* @__PURE__ */ function() {
  function e(t, n, i) {
    if (this.padTo = i.padTo || 0, this.floor = i.floor || !1, !n && pe()) {
      var a = {
        useGrouping: !1
      };
      i.padTo > 0 && (a.minimumIntegerDigits = i.padTo), this.inf = CF(t, a);
    }
  }
  var r = e.prototype;
  return r.format = function(n) {
    if (this.inf) {
      var i = this.floor ? Math.floor(n) : n;
      return this.inf.format(i);
    } else {
      var a = this.floor ? Math.floor(n) : ra(n, 3);
      return ir(a, this.padTo);
    }
  }, e;
}(), RF = /* @__PURE__ */ function() {
  function e(t, n, i) {
    this.opts = i, this.hasIntl = pe();
    var a;
    if (t.zone.universal && this.hasIntl) {
      var u = -1 * (t.offset / 60), s = u >= 0 ? "Etc/GMT+" + u : "Etc/GMT" + u, c = ye.isValidZone(s);
      t.offset !== 0 && c ? (a = s, this.dt = t) : (a = "UTC", i.timeZoneName ? this.dt = t : this.dt = t.offset === 0 ? t : j.fromMillis(t.ts + t.offset * 60 * 1e3));
    } else
      t.zone.type === "local" ? this.dt = t : (this.dt = t, a = t.zone.name);
    if (this.hasIntl) {
      var h = Object.assign({}, this.opts);
      a && (h.timeZone = a), this.dtf = Zn(n, h);
    }
  }
  var r = e.prototype;
  return r.format = function() {
    if (this.hasIntl)
      return this.dtf.format(this.dt.toJSDate());
    var n = EF(this.opts), i = V.create("en-US");
    return me.create(i).formatDateTimeFromString(this.dt, n);
  }, r.formatToParts = function() {
    return this.hasIntl && Rr() ? this.dtf.formatToParts(this.dt.toJSDate()) : [];
  }, r.resolvedOptions = function() {
    return this.hasIntl ? this.dtf.resolvedOptions() : {
      locale: "en-US",
      numberingSystem: "latn",
      outputCalendar: "gregory"
    };
  }, e;
}(), jF = /* @__PURE__ */ function() {
  function e(t, n, i) {
    this.opts = Object.assign({
      style: "long"
    }, i), !n && Nl() && (this.rtf = MF(t, i));
  }
  var r = e.prototype;
  return r.format = function(n, i) {
    return this.rtf ? this.rtf.format(n, i) : SF(i, n, this.opts.numeric, this.opts.style !== "long");
  }, r.formatToParts = function(n, i) {
    return this.rtf ? this.rtf.formatToParts(n, i) : [];
  }, e;
}(), V = /* @__PURE__ */ function() {
  e.fromOpts = function(n) {
    return e.create(n.locale, n.numberingSystem, n.outputCalendar, n.defaultToEN);
  }, e.create = function(n, i, a, u) {
    u === void 0 && (u = !1);
    var s = n || R.defaultLocale, c = s || (u ? "en-US" : NF()), h = i || R.defaultNumberingSystem, y = a || R.defaultOutputCalendar;
    return new e(c, h, y, s);
  }, e.resetCache = function() {
    Ue = null, Hn = {}, Wn = {}, Yn = {};
  }, e.fromObject = function(n) {
    var i = n === void 0 ? {} : n, a = i.locale, u = i.numberingSystem, s = i.outputCalendar;
    return e.create(a, u, s);
  };
  function e(t, n, i, a) {
    var u = FF(t), s = u[0], c = u[1], h = u[2];
    this.locale = s, this.numberingSystem = n || c || null, this.outputCalendar = i || h || null, this.intl = kF(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
      format: {},
      standalone: {}
    }, this.monthsCache = {
      format: {},
      standalone: {}
    }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = a, this.fastNumbersCached = null;
  }
  var r = e.prototype;
  return r.listingMode = function(n) {
    n === void 0 && (n = !0);
    var i = pe(), a = i && Rr(), u = this.isEnglish(), s = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return !a && !(u && s) && !n ? "error" : !a || u && s ? "en" : "intl";
  }, r.clone = function(n) {
    return !n || Object.getOwnPropertyNames(n).length === 0 ? this : e.create(n.locale || this.specifiedLocale, n.numberingSystem || this.numberingSystem, n.outputCalendar || this.outputCalendar, n.defaultToEN || !1);
  }, r.redefaultToEN = function(n) {
    return n === void 0 && (n = {}), this.clone(Object.assign({}, n, {
      defaultToEN: !0
    }));
  }, r.redefaultToSystem = function(n) {
    return n === void 0 && (n = {}), this.clone(Object.assign({}, n, {
      defaultToEN: !1
    }));
  }, r.months = function(n, i, a) {
    var u = this;
    return i === void 0 && (i = !1), a === void 0 && (a = !0), Kr(this, n, a, Ll, function() {
      var s = i ? {
        month: n,
        day: "numeric"
      } : {
        month: n
      }, c = i ? "format" : "standalone";
      return u.monthsCache[c][n] || (u.monthsCache[c][n] = DF(function(h) {
        return u.extract(h, s, "month");
      })), u.monthsCache[c][n];
    });
  }, r.weekdays = function(n, i, a) {
    var u = this;
    return i === void 0 && (i = !1), a === void 0 && (a = !0), Kr(this, n, a, Bl, function() {
      var s = i ? {
        weekday: n,
        year: "numeric",
        month: "long",
        day: "numeric"
      } : {
        weekday: n
      }, c = i ? "format" : "standalone";
      return u.weekdaysCache[c][n] || (u.weekdaysCache[c][n] = PF(function(h) {
        return u.extract(h, s, "weekday");
      })), u.weekdaysCache[c][n];
    });
  }, r.meridiems = function(n) {
    var i = this;
    return n === void 0 && (n = !0), Kr(this, void 0, n, function() {
      return Vl;
    }, function() {
      if (!i.meridiemCache) {
        var a = {
          hour: "numeric",
          hour12: !0
        };
        i.meridiemCache = [j.utc(2016, 11, 13, 9), j.utc(2016, 11, 13, 19)].map(function(u) {
          return i.extract(u, a, "dayperiod");
        });
      }
      return i.meridiemCache;
    });
  }, r.eras = function(n, i) {
    var a = this;
    return i === void 0 && (i = !0), Kr(this, n, i, Gl, function() {
      var u = {
        era: n
      };
      return a.eraCache[n] || (a.eraCache[n] = [j.utc(-40, 1, 1), j.utc(2017, 1, 1)].map(function(s) {
        return a.extract(s, u, "era");
      })), a.eraCache[n];
    });
  }, r.extract = function(n, i, a) {
    var u = this.dtFormatter(n, i), s = u.formatToParts(), c = s.find(function(h) {
      return h.type.toLowerCase() === a;
    });
    return c ? c.value : null;
  }, r.numberFormatter = function(n) {
    return n === void 0 && (n = {}), new LF(this.intl, n.forceSimple || this.fastNumbers, n);
  }, r.dtFormatter = function(n, i) {
    return i === void 0 && (i = {}), new RF(n, this.intl, i);
  }, r.relFormatter = function(n) {
    return n === void 0 && (n = {}), new jF(this.intl, this.isEnglish(), n);
  }, r.isEnglish = function() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || pe() && new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith("en-us");
  }, r.equals = function(n) {
    return this.locale === n.locale && this.numberingSystem === n.numberingSystem && this.outputCalendar === n.outputCalendar;
  }, ce(e, [{
    key: "fastNumbers",
    get: function() {
      return this.fastNumbersCached == null && (this.fastNumbersCached = UF(this)), this.fastNumbersCached;
    }
  }]), e;
}();
function yr() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n = r.reduce(function(i, a) {
    return i + a.source;
  }, "");
  return RegExp("^" + n + "$");
}
function Ze() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function(n) {
    return r.reduce(function(i, a) {
      var u = i[0], s = i[1], c = i[2], h = a(n, c), y = h[0], m = h[1], g = h[2];
      return [Object.assign(u, y), s || m, g];
    }, [{}, null, 1]).slice(0, 2);
  };
}
function pr(e) {
  if (e == null)
    return [null, null];
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var i = 0, a = t; i < a.length; i++) {
    var u = a[i], s = u[0], c = u[1], h = s.exec(e);
    if (h)
      return c(h);
  }
  return [null, null];
}
function ql() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return function(n, i) {
    var a = {}, u;
    for (u = 0; u < r.length; u++)
      a[r[u]] = X(n[i + u]);
    return [a, null, i + u];
  };
}
var Hl = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/, na = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Zl = RegExp("" + na.source + Hl.source + "?"), ia = RegExp("(?:T" + Zl.source + ")?"), BF = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, VF = /(\d{4})-?W(\d\d)(?:-?(\d))?/, GF = /(\d{4})-?(\d{3})/, zF = ql("weekYear", "weekNumber", "weekDay"), qF = ql("year", "ordinal"), HF = /(\d{4})-(\d\d)-(\d\d)/, Wl = RegExp(na.source + " ?(?:" + Hl.source + "|(" + Pl.source + "))?"), ZF = RegExp("(?: " + Wl.source + ")?");
function ar(e, r, t) {
  var n = e[r];
  return I(n) ? t : X(n);
}
function Yl(e, r) {
  var t = {
    year: ar(e, r),
    month: ar(e, r + 1, 1),
    day: ar(e, r + 2, 1)
  };
  return [t, null, r + 3];
}
function We(e, r) {
  var t = {
    hours: ar(e, r, 0),
    minutes: ar(e, r + 1, 0),
    seconds: ar(e, r + 2, 0),
    milliseconds: ea(e[r + 3])
  };
  return [t, null, r + 4];
}
function gr(e, r) {
  var t = !e[r] && !e[r + 1], n = Bt(e[r + 1], e[r + 2]), i = t ? null : ee.instance(n);
  return [{}, i, r + 3];
}
function Jl(e, r) {
  var t = e[r] ? ye.create(e[r]) : null;
  return [{}, t, r + 1];
}
var WF = RegExp("^T?" + na.source + "$"), YF = /^-?P(?:(?:(-?\d{1,9})Y)?(?:(-?\d{1,9})M)?(?:(-?\d{1,9})W)?(?:(-?\d{1,9})D)?(?:T(?:(-?\d{1,9})H)?(?:(-?\d{1,9})M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;
function JF(e) {
  var r = e[0], t = e[1], n = e[2], i = e[3], a = e[4], u = e[5], s = e[6], c = e[7], h = e[8], y = r[0] === "-", m = c && c[0] === "-", g = function(w, T) {
    return T === void 0 && (T = !1), w !== void 0 && (T || w && y) ? -w : w;
  };
  return [{
    years: g(X(t)),
    months: g(X(n)),
    weeks: g(X(i)),
    days: g(X(a)),
    hours: g(X(u)),
    minutes: g(X(s)),
    seconds: g(X(c), c === "-0"),
    milliseconds: g(ea(h), m)
  }];
}
var XF = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function aa(e, r, t, n, i, a, u) {
  var s = {
    year: r.length === 2 ? zn(X(r)) : X(r),
    month: Ul.indexOf(t) + 1,
    day: X(n),
    hour: X(i),
    minute: X(a)
  };
  return u && (s.second = X(u)), e && (s.weekday = e.length > 3 ? Rl.indexOf(e) + 1 : jl.indexOf(e) + 1), s;
}
var KF = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function QF(e) {
  var r = e[1], t = e[2], n = e[3], i = e[4], a = e[5], u = e[6], s = e[7], c = e[8], h = e[9], y = e[10], m = e[11], g = aa(r, i, n, t, a, u, s), b;
  return c ? b = XF[c] : h ? b = 0 : b = Bt(y, m), [g, new ee(b)];
}
function ek(e) {
  return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
var rk = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, tk = /^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, nk = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Zo(e) {
  var r = e[1], t = e[2], n = e[3], i = e[4], a = e[5], u = e[6], s = e[7], c = aa(r, i, n, t, a, u, s);
  return [c, ee.utcInstance];
}
function ik(e) {
  var r = e[1], t = e[2], n = e[3], i = e[4], a = e[5], u = e[6], s = e[7], c = aa(r, s, t, n, i, a, u);
  return [c, ee.utcInstance];
}
var ak = yr(BF, ia), ok = yr(VF, ia), sk = yr(GF, ia), uk = yr(Zl), lk = Ze(Yl, We, gr), fk = Ze(zF, We, gr), ck = Ze(qF, We, gr), dk = Ze(We, gr);
function hk(e) {
  return pr(e, [ak, lk], [ok, fk], [sk, ck], [uk, dk]);
}
function vk(e) {
  return pr(ek(e), [KF, QF]);
}
function mk(e) {
  return pr(e, [rk, Zo], [tk, Zo], [nk, ik]);
}
function yk(e) {
  return pr(e, [YF, JF]);
}
var pk = Ze(We);
function gk(e) {
  return pr(e, [WF, pk]);
}
var $k = yr(HF, ZF), bk = yr(Wl), wk = Ze(Yl, We, gr, Jl), Sk = Ze(We, gr, Jl);
function Ek(e) {
  return pr(e, [$k, wk], [bk, Sk]);
}
var Tk = "Invalid Duration", Xl = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: {
    minutes: 60,
    seconds: 60 * 60,
    milliseconds: 60 * 60 * 1e3
  },
  minutes: {
    seconds: 60,
    milliseconds: 60 * 1e3
  },
  seconds: {
    milliseconds: 1e3
  }
}, _k = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  }
}, Xl), ne = 146097 / 400, Qe = 146097 / 4800, Ok = Object.assign({
  years: {
    quarters: 4,
    months: 12,
    weeks: ne / 7,
    days: ne,
    hours: ne * 24,
    minutes: ne * 24 * 60,
    seconds: ne * 24 * 60 * 60,
    milliseconds: ne * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: ne / 28,
    days: ne / 4,
    hours: ne * 24 / 4,
    minutes: ne * 24 * 60 / 4,
    seconds: ne * 24 * 60 * 60 / 4,
    milliseconds: ne * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Qe / 7,
    days: Qe,
    hours: Qe * 24,
    minutes: Qe * 24 * 60,
    seconds: Qe * 24 * 60 * 60,
    milliseconds: Qe * 24 * 60 * 60 * 1e3
  }
}, Xl), rr = ["years", "quarters", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds"], Ik = rr.slice(0).reverse();
function De(e, r, t) {
  t === void 0 && (t = !1);
  var n = {
    values: t ? r.values : Object.assign({}, e.values, r.values || {}),
    loc: e.loc.clone(r.loc),
    conversionAccuracy: r.conversionAccuracy || e.conversionAccuracy
  };
  return new K(n);
}
function Ak(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function Kl(e, r, t, n, i) {
  var a = e[i][t], u = r[t] / a, s = Math.sign(u) === Math.sign(n[i]), c = !s && n[i] !== 0 && Math.abs(u) <= 1 ? Ak(u) : Math.trunc(u);
  n[i] += c, r[t] -= c * a;
}
function xk(e, r) {
  Ik.reduce(function(t, n) {
    return I(r[n]) ? t : (t && Kl(e, r, t, r, n), n);
  }, null);
}
var K = /* @__PURE__ */ function() {
  function e(t) {
    var n = t.conversionAccuracy === "longterm" || !1;
    this.values = t.values, this.loc = t.loc || V.create(), this.conversionAccuracy = n ? "longterm" : "casual", this.invalid = t.invalid || null, this.matrix = n ? Ok : _k, this.isLuxonDuration = !0;
  }
  e.fromMillis = function(n, i) {
    return e.fromObject(Object.assign({
      milliseconds: n
    }, i));
  }, e.fromObject = function(n) {
    if (n == null || typeof n != "object")
      throw new ae("Duration.fromObject: argument expected to be an object, got " + (n === null ? "null" : typeof n));
    return new e({
      values: ht(n, e.normalizeUnit, [
        "locale",
        "numberingSystem",
        "conversionAccuracy",
        "zone"
        // a bit of debt; it's super inconvenient internally not to be able to blindly pass this
      ]),
      loc: V.fromObject(n),
      conversionAccuracy: n.conversionAccuracy
    });
  }, e.fromISO = function(n, i) {
    var a = yk(n), u = a[0];
    if (u) {
      var s = Object.assign(u, i);
      return e.fromObject(s);
    } else
      return e.invalid("unparsable", 'the input "' + n + `" can't be parsed as ISO 8601`);
  }, e.fromISOTime = function(n, i) {
    var a = gk(n), u = a[0];
    if (u) {
      var s = Object.assign(u, i);
      return e.fromObject(s);
    } else
      return e.invalid("unparsable", 'the input "' + n + `" can't be parsed as ISO 8601`);
  }, e.invalid = function(n, i) {
    if (i === void 0 && (i = null), !n)
      throw new ae("need to specify a reason the Duration is invalid");
    var a = n instanceof fe ? n : new fe(n, i);
    if (R.throwOnInvalid)
      throw new sF(a);
    return new e({
      invalid: a
    });
  }, e.normalizeUnit = function(n) {
    var i = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[n && n.toLowerCase()];
    if (!i)
      throw new xl(n);
    return i;
  }, e.isDuration = function(n) {
    return n && n.isLuxonDuration || !1;
  };
  var r = e.prototype;
  return r.toFormat = function(n, i) {
    i === void 0 && (i = {});
    var a = Object.assign({}, i, {
      floor: i.round !== !1 && i.floor !== !1
    });
    return this.isValid ? me.create(this.loc, a).formatDurationFromString(this, n) : Tk;
  }, r.toObject = function(n) {
    if (n === void 0 && (n = {}), !this.isValid)
      return {};
    var i = Object.assign({}, this.values);
    return n.includeConfig && (i.conversionAccuracy = this.conversionAccuracy, i.numberingSystem = this.loc.numberingSystem, i.locale = this.loc.locale), i;
  }, r.toISO = function() {
    if (!this.isValid)
      return null;
    var n = "P";
    return this.years !== 0 && (n += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (n += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (n += this.weeks + "W"), this.days !== 0 && (n += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (n += "T"), this.hours !== 0 && (n += this.hours + "H"), this.minutes !== 0 && (n += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (n += ra(this.seconds + this.milliseconds / 1e3, 3) + "S"), n === "P" && (n += "T0S"), n;
  }, r.toISOTime = function(n) {
    if (n === void 0 && (n = {}), !this.isValid)
      return null;
    var i = this.toMillis();
    if (i < 0 || i >= 864e5)
      return null;
    n = Object.assign({
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended"
    }, n);
    var a = this.shiftTo("hours", "minutes", "seconds", "milliseconds"), u = n.format === "basic" ? "hhmm" : "hh:mm";
    (!n.suppressSeconds || a.seconds !== 0 || a.milliseconds !== 0) && (u += n.format === "basic" ? "ss" : ":ss", (!n.suppressMilliseconds || a.milliseconds !== 0) && (u += ".SSS"));
    var s = a.toFormat(u);
    return n.includePrefix && (s = "T" + s), s;
  }, r.toJSON = function() {
    return this.toISO();
  }, r.toString = function() {
    return this.toISO();
  }, r.toMillis = function() {
    return this.as("milliseconds");
  }, r.valueOf = function() {
    return this.toMillis();
  }, r.plus = function(n) {
    if (!this.isValid)
      return this;
    for (var i = je(n), a = {}, u = Ae(rr), s; !(s = u()).done; ) {
      var c = s.value;
      (or(i.values, c) || or(this.values, c)) && (a[c] = i.get(c) + this.get(c));
    }
    return De(this, {
      values: a
    }, !0);
  }, r.minus = function(n) {
    if (!this.isValid)
      return this;
    var i = je(n);
    return this.plus(i.negate());
  }, r.mapUnits = function(n) {
    if (!this.isValid)
      return this;
    for (var i = {}, a = 0, u = Object.keys(this.values); a < u.length; a++) {
      var s = u[a];
      i[s] = Dl(n(this.values[s], s));
    }
    return De(this, {
      values: i
    }, !0);
  }, r.get = function(n) {
    return this[e.normalizeUnit(n)];
  }, r.set = function(n) {
    if (!this.isValid)
      return this;
    var i = Object.assign(this.values, ht(n, e.normalizeUnit, []));
    return De(this, {
      values: i
    });
  }, r.reconfigure = function(n) {
    var i = n === void 0 ? {} : n, a = i.locale, u = i.numberingSystem, s = i.conversionAccuracy, c = this.loc.clone({
      locale: a,
      numberingSystem: u
    }), h = {
      loc: c
    };
    return s && (h.conversionAccuracy = s), De(this, h);
  }, r.as = function(n) {
    return this.isValid ? this.shiftTo(n).get(n) : NaN;
  }, r.normalize = function() {
    if (!this.isValid)
      return this;
    var n = this.toObject();
    return xk(this.matrix, n), De(this, {
      values: n
    }, !0);
  }, r.shiftTo = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    if (!this.isValid)
      return this;
    if (i.length === 0)
      return this;
    i = i.map(function(L) {
      return e.normalizeUnit(L);
    });
    for (var u = {}, s = {}, c = this.toObject(), h, y = Ae(rr), m; !(m = y()).done; ) {
      var g = m.value;
      if (i.indexOf(g) >= 0) {
        h = g;
        var b = 0;
        for (var w in s)
          b += this.matrix[w][g] * s[w], s[w] = 0;
        Be(c[g]) && (b += c[g]);
        var T = Math.trunc(b);
        u[g] = T, s[g] = b - T;
        for (var _ in c)
          rr.indexOf(_) > rr.indexOf(g) && Kl(this.matrix, c, _, u, g);
      } else
        Be(c[g]) && (s[g] = c[g]);
    }
    for (var E in s)
      s[E] !== 0 && (u[h] += E === h ? s[E] : s[E] / this.matrix[h][E]);
    return De(this, {
      values: u
    }, !0).normalize();
  }, r.negate = function() {
    if (!this.isValid)
      return this;
    for (var n = {}, i = 0, a = Object.keys(this.values); i < a.length; i++) {
      var u = a[i];
      n[u] = -this.values[u];
    }
    return De(this, {
      values: n
    }, !0);
  }, r.equals = function(n) {
    if (!this.isValid || !n.isValid || !this.loc.equals(n.loc))
      return !1;
    function i(c, h) {
      return c === void 0 || c === 0 ? h === void 0 || h === 0 : c === h;
    }
    for (var a = Ae(rr), u; !(u = a()).done; ) {
      var s = u.value;
      if (!i(this.values[s], n.values[s]))
        return !1;
    }
    return !0;
  }, ce(e, [{
    key: "locale",
    get: function() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
  }, {
    key: "years",
    get: function() {
      return this.isValid ? this.values.years || 0 : NaN;
    }
    /**
     * Get the quarters.
     * @type {number}
     */
  }, {
    key: "quarters",
    get: function() {
      return this.isValid ? this.values.quarters || 0 : NaN;
    }
    /**
     * Get the months.
     * @type {number}
     */
  }, {
    key: "months",
    get: function() {
      return this.isValid ? this.values.months || 0 : NaN;
    }
    /**
     * Get the weeks
     * @type {number}
     */
  }, {
    key: "weeks",
    get: function() {
      return this.isValid ? this.values.weeks || 0 : NaN;
    }
    /**
     * Get the days.
     * @type {number}
     */
  }, {
    key: "days",
    get: function() {
      return this.isValid ? this.values.days || 0 : NaN;
    }
    /**
     * Get the hours.
     * @type {number}
     */
  }, {
    key: "hours",
    get: function() {
      return this.isValid ? this.values.hours || 0 : NaN;
    }
    /**
     * Get the minutes.
     * @type {number}
     */
  }, {
    key: "minutes",
    get: function() {
      return this.isValid ? this.values.minutes || 0 : NaN;
    }
    /**
     * Get the seconds.
     * @return {number}
     */
  }, {
    key: "seconds",
    get: function() {
      return this.isValid ? this.values.seconds || 0 : NaN;
    }
    /**
     * Get the milliseconds.
     * @return {number}
     */
  }, {
    key: "milliseconds",
    get: function() {
      return this.isValid ? this.values.milliseconds || 0 : NaN;
    }
    /**
     * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
     * on invalid DateTimes or Intervals.
     * @return {boolean}
     */
  }, {
    key: "isValid",
    get: function() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this Duration became invalid, or null if the Duration is valid
     * @return {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]), e;
}();
function je(e) {
  if (Be(e))
    return K.fromMillis(e);
  if (K.isDuration(e))
    return e;
  if (typeof e == "object")
    return K.fromObject(e);
  throw new ae("Unknown duration argument " + e + " of type " + typeof e);
}
var Er = "Invalid Interval";
function Ck(e, r) {
  return !e || !e.isValid ? Fr.invalid("missing or invalid start") : !r || !r.isValid ? Fr.invalid("missing or invalid end") : r < e ? Fr.invalid("end before start", "The end of an interval must be after its start, but you had start=" + e.toISO() + " and end=" + r.toISO()) : null;
}
var Fr = /* @__PURE__ */ function() {
  function e(t) {
    this.s = t.start, this.e = t.end, this.invalid = t.invalid || null, this.isLuxonInterval = !0;
  }
  e.invalid = function(n, i) {
    if (i === void 0 && (i = null), !n)
      throw new ae("need to specify a reason the Interval is invalid");
    var a = n instanceof fe ? n : new fe(n, i);
    if (R.throwOnInvalid)
      throw new oF(a);
    return new e({
      invalid: a
    });
  }, e.fromDateTimes = function(n, i) {
    var a = Or(n), u = Or(i), s = Ck(a, u);
    return s ?? new e({
      start: a,
      end: u
    });
  }, e.after = function(n, i) {
    var a = je(i), u = Or(n);
    return e.fromDateTimes(u, u.plus(a));
  }, e.before = function(n, i) {
    var a = je(i), u = Or(n);
    return e.fromDateTimes(u.minus(a), u);
  }, e.fromISO = function(n, i) {
    var a = (n || "").split("/", 2), u = a[0], s = a[1];
    if (u && s) {
      var c, h;
      try {
        c = j.fromISO(u, i), h = c.isValid;
      } catch {
        h = !1;
      }
      var y, m;
      try {
        y = j.fromISO(s, i), m = y.isValid;
      } catch {
        m = !1;
      }
      if (h && m)
        return e.fromDateTimes(c, y);
      if (h) {
        var g = K.fromISO(s, i);
        if (g.isValid)
          return e.after(c, g);
      } else if (m) {
        var b = K.fromISO(u, i);
        if (b.isValid)
          return e.before(y, b);
      }
    }
    return e.invalid("unparsable", 'the input "' + n + `" can't be parsed as ISO 8601`);
  }, e.isInterval = function(n) {
    return n && n.isLuxonInterval || !1;
  };
  var r = e.prototype;
  return r.length = function(n) {
    return n === void 0 && (n = "milliseconds"), this.isValid ? this.toDuration.apply(this, [n]).get(n) : NaN;
  }, r.count = function(n) {
    if (n === void 0 && (n = "milliseconds"), !this.isValid)
      return NaN;
    var i = this.start.startOf(n), a = this.end.startOf(n);
    return Math.floor(a.diff(i, n).get(n)) + 1;
  }, r.hasSame = function(n) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, n) : !1;
  }, r.isEmpty = function() {
    return this.s.valueOf() === this.e.valueOf();
  }, r.isAfter = function(n) {
    return this.isValid ? this.s > n : !1;
  }, r.isBefore = function(n) {
    return this.isValid ? this.e <= n : !1;
  }, r.contains = function(n) {
    return this.isValid ? this.s <= n && this.e > n : !1;
  }, r.set = function(n) {
    var i = n === void 0 ? {} : n, a = i.start, u = i.end;
    return this.isValid ? e.fromDateTimes(a || this.s, u || this.e) : this;
  }, r.splitAt = function() {
    var n = this;
    if (!this.isValid)
      return [];
    for (var i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    for (var s = a.map(Or).filter(function(b) {
      return n.contains(b);
    }).sort(), c = [], h = this.s, y = 0; h < this.e; ) {
      var m = s[y] || this.e, g = +m > +this.e ? this.e : m;
      c.push(e.fromDateTimes(h, g)), h = g, y += 1;
    }
    return c;
  }, r.splitBy = function(n) {
    var i = je(n);
    if (!this.isValid || !i.isValid || i.as("milliseconds") === 0)
      return [];
    for (var a = this.s, u = 1, s, c = []; a < this.e; ) {
      var h = this.start.plus(i.mapUnits(function(y) {
        return y * u;
      }));
      s = +h > +this.e ? this.e : h, c.push(e.fromDateTimes(a, s)), a = s, u += 1;
    }
    return c;
  }, r.divideEqually = function(n) {
    return this.isValid ? this.splitBy(this.length() / n).slice(0, n) : [];
  }, r.overlaps = function(n) {
    return this.e > n.s && this.s < n.e;
  }, r.abutsStart = function(n) {
    return this.isValid ? +this.e == +n.s : !1;
  }, r.abutsEnd = function(n) {
    return this.isValid ? +n.e == +this.s : !1;
  }, r.engulfs = function(n) {
    return this.isValid ? this.s <= n.s && this.e >= n.e : !1;
  }, r.equals = function(n) {
    return !this.isValid || !n.isValid ? !1 : this.s.equals(n.s) && this.e.equals(n.e);
  }, r.intersection = function(n) {
    if (!this.isValid)
      return this;
    var i = this.s > n.s ? this.s : n.s, a = this.e < n.e ? this.e : n.e;
    return i >= a ? null : e.fromDateTimes(i, a);
  }, r.union = function(n) {
    if (!this.isValid)
      return this;
    var i = this.s < n.s ? this.s : n.s, a = this.e > n.e ? this.e : n.e;
    return e.fromDateTimes(i, a);
  }, e.merge = function(n) {
    var i = n.sort(function(s, c) {
      return s.s - c.s;
    }).reduce(function(s, c) {
      var h = s[0], y = s[1];
      return y ? y.overlaps(c) || y.abutsStart(c) ? [h, y.union(c)] : [h.concat([y]), c] : [h, c];
    }, [[], null]), a = i[0], u = i[1];
    return u && a.push(u), a;
  }, e.xor = function(n) {
    for (var i, a = null, u = 0, s = [], c = n.map(function(w) {
      return [{
        time: w.s,
        type: "s"
      }, {
        time: w.e,
        type: "e"
      }];
    }), h = (i = Array.prototype).concat.apply(i, c), y = h.sort(function(w, T) {
      return w.time - T.time;
    }), m = Ae(y), g; !(g = m()).done; ) {
      var b = g.value;
      u += b.type === "s" ? 1 : -1, u === 1 ? a = b.time : (a && +a != +b.time && s.push(e.fromDateTimes(a, b.time)), a = null);
    }
    return e.merge(s);
  }, r.difference = function() {
    for (var n = this, i = arguments.length, a = new Array(i), u = 0; u < i; u++)
      a[u] = arguments[u];
    return e.xor([this].concat(a)).map(function(s) {
      return n.intersection(s);
    }).filter(function(s) {
      return s && !s.isEmpty();
    });
  }, r.toString = function() {
    return this.isValid ? "[" + this.s.toISO() + " – " + this.e.toISO() + ")" : Er;
  }, r.toISO = function(n) {
    return this.isValid ? this.s.toISO(n) + "/" + this.e.toISO(n) : Er;
  }, r.toISODate = function() {
    return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : Er;
  }, r.toISOTime = function(n) {
    return this.isValid ? this.s.toISOTime(n) + "/" + this.e.toISOTime(n) : Er;
  }, r.toFormat = function(n, i) {
    var a = i === void 0 ? {} : i, u = a.separator, s = u === void 0 ? " – " : u;
    return this.isValid ? "" + this.s.toFormat(n) + s + this.e.toFormat(n) : Er;
  }, r.toDuration = function(n, i) {
    return this.isValid ? this.e.diff(this.s, n, i) : K.invalid(this.invalidReason);
  }, r.mapEndpoints = function(n) {
    return e.fromDateTimes(n(this.s), n(this.e));
  }, ce(e, [{
    key: "start",
    get: function() {
      return this.isValid ? this.s : null;
    }
    /**
     * Returns the end of the Interval
     * @type {DateTime}
     */
  }, {
    key: "end",
    get: function() {
      return this.isValid ? this.e : null;
    }
    /**
     * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
     * @type {boolean}
     */
  }, {
    key: "isValid",
    get: function() {
      return this.invalidReason === null;
    }
    /**
     * Returns an error code if this Interval is invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
  }]), e;
}(), xr = /* @__PURE__ */ function() {
  function e() {
  }
  return e.hasDST = function(t) {
    t === void 0 && (t = R.defaultZone);
    var n = j.now().setZone(t).set({
      month: 12
    });
    return !t.universal && n.offset !== n.set({
      month: 6
    }).offset;
  }, e.isValidIANAZone = function(t) {
    return ye.isValidSpecifier(t) && ye.isValidZone(t);
  }, e.normalizeZone = function(t) {
    return Le(t, R.defaultZone);
  }, e.months = function(t, n) {
    t === void 0 && (t = "long");
    var i = n === void 0 ? {} : n, a = i.locale, u = a === void 0 ? null : a, s = i.numberingSystem, c = s === void 0 ? null : s, h = i.locObj, y = h === void 0 ? null : h, m = i.outputCalendar, g = m === void 0 ? "gregory" : m;
    return (y || V.create(u, c, g)).months(t);
  }, e.monthsFormat = function(t, n) {
    t === void 0 && (t = "long");
    var i = n === void 0 ? {} : n, a = i.locale, u = a === void 0 ? null : a, s = i.numberingSystem, c = s === void 0 ? null : s, h = i.locObj, y = h === void 0 ? null : h, m = i.outputCalendar, g = m === void 0 ? "gregory" : m;
    return (y || V.create(u, c, g)).months(t, !0);
  }, e.weekdays = function(t, n) {
    t === void 0 && (t = "long");
    var i = n === void 0 ? {} : n, a = i.locale, u = a === void 0 ? null : a, s = i.numberingSystem, c = s === void 0 ? null : s, h = i.locObj, y = h === void 0 ? null : h;
    return (y || V.create(u, c, null)).weekdays(t);
  }, e.weekdaysFormat = function(t, n) {
    t === void 0 && (t = "long");
    var i = n === void 0 ? {} : n, a = i.locale, u = a === void 0 ? null : a, s = i.numberingSystem, c = s === void 0 ? null : s, h = i.locObj, y = h === void 0 ? null : h;
    return (y || V.create(u, c, null)).weekdays(t, !0);
  }, e.meridiems = function(t) {
    var n = t === void 0 ? {} : t, i = n.locale, a = i === void 0 ? null : i;
    return V.create(a).meridiems();
  }, e.eras = function(t, n) {
    t === void 0 && (t = "short");
    var i = n === void 0 ? {} : n, a = i.locale, u = a === void 0 ? null : a;
    return V.create(u, null, "gregory").eras(t);
  }, e.features = function() {
    var t = !1, n = !1, i = !1, a = !1;
    if (pe()) {
      t = !0, n = Rr(), a = Nl();
      try {
        i = new Intl.DateTimeFormat("en", {
          timeZone: "America/New_York"
        }).resolvedOptions().timeZone === "America/New_York";
      } catch {
        i = !1;
      }
    }
    return {
      intl: t,
      intlTokens: n,
      zones: i,
      relative: a
    };
  }, e;
}();
function Wo(e, r) {
  var t = function(a) {
    return a.toUTC(0, {
      keepLocalTime: !0
    }).startOf("day").valueOf();
  }, n = t(r) - t(e);
  return Math.floor(K.fromMillis(n).as("days"));
}
function Mk(e, r, t) {
  for (var n = [["years", function(T, _) {
    return _.year - T.year;
  }], ["quarters", function(T, _) {
    return _.quarter - T.quarter;
  }], ["months", function(T, _) {
    return _.month - T.month + (_.year - T.year) * 12;
  }], ["weeks", function(T, _) {
    var E = Wo(T, _);
    return (E - E % 7) / 7;
  }], ["days", Wo]], i = {}, a, u, s = 0, c = n; s < c.length; s++) {
    var h = c[s], y = h[0], m = h[1];
    if (t.indexOf(y) >= 0) {
      var g;
      a = y;
      var b = m(e, r);
      if (u = e.plus((g = {}, g[y] = b, g)), u > r) {
        var w;
        e = e.plus((w = {}, w[y] = b - 1, w)), b -= 1;
      } else
        e = u;
      i[y] = b;
    }
  }
  return [e, i, u, a];
}
function Nk(e, r, t, n) {
  var i = Mk(e, r, t), a = i[0], u = i[1], s = i[2], c = i[3], h = r - a, y = t.filter(function(w) {
    return ["hours", "minutes", "seconds", "milliseconds"].indexOf(w) >= 0;
  });
  if (y.length === 0) {
    if (s < r) {
      var m;
      s = a.plus((m = {}, m[c] = 1, m));
    }
    s !== a && (u[c] = (u[c] || 0) + h / (s - a));
  }
  var g = K.fromObject(Object.assign(u, n));
  if (y.length > 0) {
    var b;
    return (b = K.fromMillis(h, n)).shiftTo.apply(b, y).plus(g);
  } else
    return g;
}
var oa = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, Yo = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, Fk = oa.hanidec.replace(/[\[|\]]/g, "").split("");
function kk(e) {
  var r = parseInt(e, 10);
  if (isNaN(r)) {
    r = "";
    for (var t = 0; t < e.length; t++) {
      var n = e.charCodeAt(t);
      if (e[t].search(oa.hanidec) !== -1)
        r += Fk.indexOf(e[t]);
      else
        for (var i in Yo) {
          var a = Yo[i], u = a[0], s = a[1];
          n >= u && n <= s && (r += n - u);
        }
    }
    return parseInt(r, 10);
  } else
    return r;
}
function ue(e, r) {
  var t = e.numberingSystem;
  return r === void 0 && (r = ""), new RegExp("" + oa[t || "latn"] + r);
}
var Dk = "missing Intl.DateTimeFormat.formatToParts support";
function A(e, r) {
  return r === void 0 && (r = function(n) {
    return n;
  }), {
    regex: e,
    deser: function(n) {
      var i = n[0];
      return r(kk(i));
    }
  };
}
var Pk = String.fromCharCode(160), Ql = "( |" + Pk + ")", ef = new RegExp(Ql, "g");
function Uk(e) {
  return e.replace(/\./g, "\\.?").replace(ef, Ql);
}
function Jo(e) {
  return e.replace(/\./g, "").replace(ef, " ").toLowerCase();
}
function le(e, r) {
  return e === null ? null : {
    regex: RegExp(e.map(Uk).join("|")),
    deser: function(n) {
      var i = n[0];
      return e.findIndex(function(a) {
        return Jo(i) === Jo(a);
      }) + r;
    }
  };
}
function Xo(e, r) {
  return {
    regex: e,
    deser: function(n) {
      var i = n[1], a = n[2];
      return Bt(i, a);
    },
    groups: r
  };
}
function Ko(e) {
  return {
    regex: e,
    deser: function(t) {
      var n = t[0];
      return n;
    }
  };
}
function Lk(e) {
  return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function Rk(e, r) {
  var t = ue(r), n = ue(r, "{2}"), i = ue(r, "{3}"), a = ue(r, "{4}"), u = ue(r, "{6}"), s = ue(r, "{1,2}"), c = ue(r, "{1,3}"), h = ue(r, "{1,6}"), y = ue(r, "{1,9}"), m = ue(r, "{2,4}"), g = ue(r, "{4,6}"), b = function(E) {
    return {
      regex: RegExp(Lk(E.val)),
      deser: function(Te) {
        var we = Te[0];
        return we;
      },
      literal: !0
    };
  }, w = function(E) {
    if (e.literal)
      return b(E);
    switch (E.val) {
      case "G":
        return le(r.eras("short", !1), 0);
      case "GG":
        return le(r.eras("long", !1), 0);
      case "y":
        return A(h);
      case "yy":
        return A(m, zn);
      case "yyyy":
        return A(a);
      case "yyyyy":
        return A(g);
      case "yyyyyy":
        return A(u);
      case "M":
        return A(s);
      case "MM":
        return A(n);
      case "MMM":
        return le(r.months("short", !0, !1), 1);
      case "MMMM":
        return le(r.months("long", !0, !1), 1);
      case "L":
        return A(s);
      case "LL":
        return A(n);
      case "LLL":
        return le(r.months("short", !1, !1), 1);
      case "LLLL":
        return le(r.months("long", !1, !1), 1);
      case "d":
        return A(s);
      case "dd":
        return A(n);
      case "o":
        return A(c);
      case "ooo":
        return A(i);
      case "HH":
        return A(n);
      case "H":
        return A(s);
      case "hh":
        return A(n);
      case "h":
        return A(s);
      case "mm":
        return A(n);
      case "m":
        return A(s);
      case "q":
        return A(s);
      case "qq":
        return A(n);
      case "s":
        return A(s);
      case "ss":
        return A(n);
      case "S":
        return A(c);
      case "SSS":
        return A(i);
      case "u":
        return Ko(y);
      case "a":
        return le(r.meridiems(), 0);
      case "kkkk":
        return A(a);
      case "kk":
        return A(m, zn);
      case "W":
        return A(s);
      case "WW":
        return A(n);
      case "E":
      case "c":
        return A(t);
      case "EEE":
        return le(r.weekdays("short", !1, !1), 1);
      case "EEEE":
        return le(r.weekdays("long", !1, !1), 1);
      case "ccc":
        return le(r.weekdays("short", !0, !1), 1);
      case "cccc":
        return le(r.weekdays("long", !0, !1), 1);
      case "Z":
      case "ZZ":
        return Xo(new RegExp("([+-]" + s.source + ")(?::(" + n.source + "))?"), 2);
      case "ZZZ":
        return Xo(new RegExp("([+-]" + s.source + ")(" + n.source + ")?"), 2);
      case "z":
        return Ko(/[a-z_+-/]{1,256}?/i);
      default:
        return b(E);
    }
  }, T = w(e) || {
    invalidReason: Dk
  };
  return T.token = e, T;
}
var jk = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour: {
    numeric: "h",
    "2-digit": "hh"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  }
};
function Bk(e, r, t) {
  var n = e.type, i = e.value;
  if (n === "literal")
    return {
      literal: !0,
      val: i
    };
  var a = t[n], u = jk[n];
  if (typeof u == "object" && (u = u[a]), u)
    return {
      literal: !1,
      val: u
    };
}
function Vk(e) {
  var r = e.map(function(t) {
    return t.regex;
  }).reduce(function(t, n) {
    return t + "(" + n.source + ")";
  }, "");
  return ["^" + r + "$", e];
}
function Gk(e, r, t) {
  var n = e.match(r);
  if (n) {
    var i = {}, a = 1;
    for (var u in t)
      if (or(t, u)) {
        var s = t[u], c = s.groups ? s.groups + 1 : 1;
        !s.literal && s.token && (i[s.token.val[0]] = s.deser(n.slice(a, a + c))), a += c;
      }
    return [n, i];
  } else
    return [n, {}];
}
function zk(e) {
  var r = function(a) {
    switch (a) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  }, t;
  I(e.Z) ? I(e.z) ? t = null : t = ye.create(e.z) : t = new ee(e.Z), I(e.q) || (e.M = (e.q - 1) * 3 + 1), I(e.h) || (e.h < 12 && e.a === 1 ? e.h += 12 : e.h === 12 && e.a === 0 && (e.h = 0)), e.G === 0 && e.y && (e.y = -e.y), I(e.u) || (e.S = ea(e.u));
  var n = Object.keys(e).reduce(function(i, a) {
    var u = r(a);
    return u && (i[u] = e[a]), i;
  }, {});
  return [n, t];
}
var dn = null;
function qk() {
  return dn || (dn = j.fromMillis(1555555555555)), dn;
}
function Hk(e, r) {
  if (e.literal)
    return e;
  var t = me.macroTokenToFormatOpts(e.val);
  if (!t)
    return e;
  var n = me.create(r, t), i = n.formatDateTimeParts(qk()), a = i.map(function(u) {
    return Bk(u, r, t);
  });
  return a.includes(void 0) ? e : a;
}
function Zk(e, r) {
  var t;
  return (t = Array.prototype).concat.apply(t, e.map(function(n) {
    return Hk(n, r);
  }));
}
function rf(e, r, t) {
  var n = Zk(me.parseFormat(t), e), i = n.map(function(_) {
    return Rk(_, e);
  }), a = i.find(function(_) {
    return _.invalidReason;
  });
  if (a)
    return {
      input: r,
      tokens: n,
      invalidReason: a.invalidReason
    };
  var u = Vk(i), s = u[0], c = u[1], h = RegExp(s, "i"), y = Gk(r, h, c), m = y[0], g = y[1], b = g ? zk(g) : [null, null], w = b[0], T = b[1];
  if (or(g, "a") && or(g, "H"))
    throw new Ar("Can't include meridiem when specifying 24-hour format");
  return {
    input: r,
    tokens: n,
    regex: h,
    rawMatches: m,
    matches: g,
    result: w,
    zone: T
  };
}
function Wk(e, r, t) {
  var n = rf(e, r, t), i = n.result, a = n.zone, u = n.invalidReason;
  return [i, a, u];
}
var tf = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], nf = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function oe(e, r) {
  return new fe("unit out of range", "you specified " + r + " (of type " + typeof r + ") as a " + e + ", which is invalid");
}
function af(e, r, t) {
  var n = new Date(Date.UTC(e, r - 1, t)).getUTCDay();
  return n === 0 ? 7 : n;
}
function of(e, r, t) {
  return t + (jr(e) ? nf : tf)[r - 1];
}
function sf(e, r) {
  var t = jr(e) ? nf : tf, n = t.findIndex(function(a) {
    return a < r;
  }), i = r - t[n];
  return {
    month: n + 1,
    day: i
  };
}
function Jn(e) {
  var r = e.year, t = e.month, n = e.day, i = of(r, t, n), a = af(r, t, n), u = Math.floor((i - a + 10) / 7), s;
  return u < 1 ? (s = r - 1, u = dt(s)) : u > dt(r) ? (s = r + 1, u = 1) : s = r, Object.assign({
    weekYear: s,
    weekNumber: u,
    weekday: a
  }, Vt(e));
}
function Qo(e) {
  var r = e.weekYear, t = e.weekNumber, n = e.weekday, i = af(r, 1, 4), a = Nr(r), u = t * 7 + n - i - 3, s;
  u < 1 ? (s = r - 1, u += Nr(s)) : u > a ? (s = r + 1, u -= Nr(r)) : s = r;
  var c = sf(s, u), h = c.month, y = c.day;
  return Object.assign({
    year: s,
    month: h,
    day: y
  }, Vt(e));
}
function hn(e) {
  var r = e.year, t = e.month, n = e.day, i = of(r, t, n);
  return Object.assign({
    year: r,
    ordinal: i
  }, Vt(e));
}
function es(e) {
  var r = e.year, t = e.ordinal, n = sf(r, t), i = n.month, a = n.day;
  return Object.assign({
    year: r,
    month: i,
    day: a
  }, Vt(e));
}
function Yk(e) {
  var r = jt(e.weekYear), t = Se(e.weekNumber, 1, dt(e.weekYear)), n = Se(e.weekday, 1, 7);
  return r ? t ? n ? !1 : oe("weekday", e.weekday) : oe("week", e.week) : oe("weekYear", e.weekYear);
}
function Jk(e) {
  var r = jt(e.year), t = Se(e.ordinal, 1, Nr(e.year));
  return r ? t ? !1 : oe("ordinal", e.ordinal) : oe("year", e.year);
}
function uf(e) {
  var r = jt(e.year), t = Se(e.month, 1, 12), n = Se(e.day, 1, ct(e.year, e.month));
  return r ? t ? n ? !1 : oe("day", e.day) : oe("month", e.month) : oe("year", e.year);
}
function lf(e) {
  var r = e.hour, t = e.minute, n = e.second, i = e.millisecond, a = Se(r, 0, 23) || r === 24 && t === 0 && n === 0 && i === 0, u = Se(t, 0, 59), s = Se(n, 0, 59), c = Se(i, 0, 999);
  return a ? u ? s ? c ? !1 : oe("millisecond", i) : oe("second", n) : oe("minute", t) : oe("hour", r);
}
var vn = "Invalid DateTime", rs = 864e13;
function Qr(e) {
  return new fe("unsupported zone", 'the zone "' + e.name + '" is not supported');
}
function mn(e) {
  return e.weekData === null && (e.weekData = Jn(e.c)), e.weekData;
}
function Tr(e, r) {
  var t = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid
  };
  return new j(Object.assign({}, t, r, {
    old: t
  }));
}
function ff(e, r, t) {
  var n = e - r * 60 * 1e3, i = t.offset(n);
  if (r === i)
    return [n, r];
  n -= (i - r) * 60 * 1e3;
  var a = t.offset(n);
  return i === a ? [n, i] : [e - Math.min(i, a) * 60 * 1e3, Math.max(i, a)];
}
function ts(e, r) {
  e += r * 60 * 1e3;
  var t = new Date(e);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function it(e, r, t) {
  return ff(ta(e), r, t);
}
function ns(e, r) {
  var t = e.o, n = e.c.year + Math.trunc(r.years), i = e.c.month + Math.trunc(r.months) + Math.trunc(r.quarters) * 3, a = Object.assign({}, e.c, {
    year: n,
    month: i,
    day: Math.min(e.c.day, ct(n, i)) + Math.trunc(r.days) + Math.trunc(r.weeks) * 7
  }), u = K.fromObject({
    years: r.years - Math.trunc(r.years),
    quarters: r.quarters - Math.trunc(r.quarters),
    months: r.months - Math.trunc(r.months),
    weeks: r.weeks - Math.trunc(r.weeks),
    days: r.days - Math.trunc(r.days),
    hours: r.hours,
    minutes: r.minutes,
    seconds: r.seconds,
    milliseconds: r.milliseconds
  }).as("milliseconds"), s = ta(a), c = ff(s, t, e.zone), h = c[0], y = c[1];
  return u !== 0 && (h += u, y = e.zone.offset(h)), {
    ts: h,
    o: y
  };
}
function _r(e, r, t, n, i) {
  var a = t.setZone, u = t.zone;
  if (e && Object.keys(e).length !== 0) {
    var s = r || u, c = j.fromObject(Object.assign(e, t, {
      zone: s,
      // setZone is a valid option in the calling methods, but not in fromObject
      setZone: void 0
    }));
    return a ? c : c.setZone(u);
  } else
    return j.invalid(new fe("unparsable", 'the input "' + i + `" can't be parsed as ` + n));
}
function tr(e, r, t) {
  return t === void 0 && (t = !0), e.isValid ? me.create(V.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(e, r) : null;
}
function is(e, r) {
  var t = r.suppressSeconds, n = t === void 0 ? !1 : t, i = r.suppressMilliseconds, a = i === void 0 ? !1 : i, u = r.includeOffset, s = r.includePrefix, c = s === void 0 ? !1 : s, h = r.includeZone, y = h === void 0 ? !1 : h, m = r.spaceZone, g = m === void 0 ? !1 : m, b = r.format, w = b === void 0 ? "extended" : b, T = w === "basic" ? "HHmm" : "HH:mm";
  (!n || e.second !== 0 || e.millisecond !== 0) && (T += w === "basic" ? "ss" : ":ss", (!a || e.millisecond !== 0) && (T += ".SSS")), (y || u) && g && (T += " "), y ? T += "z" : u && (T += w === "basic" ? "ZZZ" : "ZZ");
  var _ = tr(e, T);
  return c && (_ = "T" + _), _;
}
var cf = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Xk = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Kk = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, df = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Qk = ["weekYear", "weekNumber", "weekday", "hour", "minute", "second", "millisecond"], eD = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function as(e) {
  var r = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[e.toLowerCase()];
  if (!r)
    throw new xl(e);
  return r;
}
function os(e, r) {
  for (var t = Ae(df), n; !(n = t()).done; ) {
    var i = n.value;
    I(e[i]) && (e[i] = cf[i]);
  }
  var a = uf(e) || lf(e);
  if (a)
    return j.invalid(a);
  var u = R.now(), s = r.offset(u), c = it(e, s, r), h = c[0], y = c[1];
  return new j({
    ts: h,
    zone: r,
    o: y
  });
}
function ss(e, r, t) {
  var n = I(t.round) ? !0 : t.round, i = function(m, g) {
    m = ra(m, n || t.calendary ? 0 : 2, !0);
    var b = r.loc.clone(t).relFormatter(t);
    return b.format(m, g);
  }, a = function(m) {
    return t.calendary ? r.hasSame(e, m) ? 0 : r.startOf(m).diff(e.startOf(m), m).get(m) : r.diff(e, m).get(m);
  };
  if (t.unit)
    return i(a(t.unit), t.unit);
  for (var u = Ae(t.units), s; !(s = u()).done; ) {
    var c = s.value, h = a(c);
    if (Math.abs(h) >= 1)
      return i(h, c);
  }
  return i(e > r ? -0 : 0, t.units[t.units.length - 1]);
}
var j = /* @__PURE__ */ function() {
  function e(t) {
    var n = t.zone || R.defaultZone, i = t.invalid || (Number.isNaN(t.ts) ? new fe("invalid input") : null) || (n.isValid ? null : Qr(n));
    this.ts = I(t.ts) ? R.now() : t.ts;
    var a = null, u = null;
    if (!i) {
      var s = t.old && t.old.ts === this.ts && t.old.zone.equals(n);
      if (s) {
        var c = [t.old.c, t.old.o];
        a = c[0], u = c[1];
      } else {
        var h = n.offset(this.ts);
        a = ts(this.ts, h), i = Number.isNaN(a.year) ? new fe("invalid input") : null, a = i ? null : a, u = i ? null : h;
      }
    }
    this._zone = n, this.loc = t.loc || V.create(), this.invalid = i, this.weekData = null, this.c = a, this.o = u, this.isLuxonDateTime = !0;
  }
  e.now = function() {
    return new e({});
  }, e.local = function(n, i, a, u, s, c, h) {
    return I(n) ? e.now() : os({
      year: n,
      month: i,
      day: a,
      hour: u,
      minute: s,
      second: c,
      millisecond: h
    }, R.defaultZone);
  }, e.utc = function(n, i, a, u, s, c, h) {
    return I(n) ? new e({
      ts: R.now(),
      zone: ee.utcInstance
    }) : os({
      year: n,
      month: i,
      day: a,
      hour: u,
      minute: s,
      second: c,
      millisecond: h
    }, ee.utcInstance);
  }, e.fromJSDate = function(n, i) {
    i === void 0 && (i = {});
    var a = lF(n) ? n.valueOf() : NaN;
    if (Number.isNaN(a))
      return e.invalid("invalid input");
    var u = Le(i.zone, R.defaultZone);
    return u.isValid ? new e({
      ts: a,
      zone: u,
      loc: V.fromObject(i)
    }) : e.invalid(Qr(u));
  }, e.fromMillis = function(n, i) {
    if (i === void 0 && (i = {}), Be(n))
      return n < -rs || n > rs ? e.invalid("Timestamp out of range") : new e({
        ts: n,
        zone: Le(i.zone, R.defaultZone),
        loc: V.fromObject(i)
      });
    throw new ae("fromMillis requires a numerical input, but received a " + typeof n + " with value " + n);
  }, e.fromSeconds = function(n, i) {
    if (i === void 0 && (i = {}), Be(n))
      return new e({
        ts: n * 1e3,
        zone: Le(i.zone, R.defaultZone),
        loc: V.fromObject(i)
      });
    throw new ae("fromSeconds requires a numerical input");
  }, e.fromObject = function(n) {
    var i = Le(n.zone, R.defaultZone);
    if (!i.isValid)
      return e.invalid(Qr(i));
    var a = R.now(), u = i.offset(a), s = ht(n, as, ["zone", "locale", "outputCalendar", "numberingSystem"]), c = !I(s.ordinal), h = !I(s.year), y = !I(s.month) || !I(s.day), m = h || y, g = s.weekYear || s.weekNumber, b = V.fromObject(n);
    if ((m || c) && g)
      throw new Ar("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (y && c)
      throw new Ar("Can't mix ordinal dates with month/day");
    var w = g || s.weekday && !m, T, _, E = ts(a, u);
    w ? (T = Qk, _ = Xk, E = Jn(E)) : c ? (T = eD, _ = Kk, E = hn(E)) : (T = df, _ = cf);
    for (var L = !1, Te = Ae(T), we; !(we = Te()).done; ) {
      var q = we.value, Br = s[q];
      I(Br) ? L ? s[q] = _[q] : s[q] = E[q] : L = !0;
    }
    var Vr = w ? Yk(s) : c ? Jk(s) : uf(s), Gr = Vr || lf(s);
    if (Gr)
      return e.invalid(Gr);
    var zt = w ? Qo(s) : c ? es(s) : s, zr = it(zt, u, i), qt = zr[0], Ht = zr[1], $r = new e({
      ts: qt,
      zone: i,
      o: Ht,
      loc: b
    });
    return s.weekday && m && n.weekday !== $r.weekday ? e.invalid("mismatched weekday", "you can't specify both a weekday of " + s.weekday + " and a date of " + $r.toISO()) : $r;
  }, e.fromISO = function(n, i) {
    i === void 0 && (i = {});
    var a = hk(n), u = a[0], s = a[1];
    return _r(u, s, i, "ISO 8601", n);
  }, e.fromRFC2822 = function(n, i) {
    i === void 0 && (i = {});
    var a = vk(n), u = a[0], s = a[1];
    return _r(u, s, i, "RFC 2822", n);
  }, e.fromHTTP = function(n, i) {
    i === void 0 && (i = {});
    var a = mk(n), u = a[0], s = a[1];
    return _r(u, s, i, "HTTP", i);
  }, e.fromFormat = function(n, i, a) {
    if (a === void 0 && (a = {}), I(n) || I(i))
      throw new ae("fromFormat requires an input string and a format");
    var u = a, s = u.locale, c = s === void 0 ? null : s, h = u.numberingSystem, y = h === void 0 ? null : h, m = V.fromOpts({
      locale: c,
      numberingSystem: y,
      defaultToEN: !0
    }), g = Wk(m, n, i), b = g[0], w = g[1], T = g[2];
    return T ? e.invalid(T) : _r(b, w, a, "format " + i, n);
  }, e.fromString = function(n, i, a) {
    return a === void 0 && (a = {}), e.fromFormat(n, i, a);
  }, e.fromSQL = function(n, i) {
    i === void 0 && (i = {});
    var a = Ek(n), u = a[0], s = a[1];
    return _r(u, s, i, "SQL", n);
  }, e.invalid = function(n, i) {
    if (i === void 0 && (i = null), !n)
      throw new ae("need to specify a reason the DateTime is invalid");
    var a = n instanceof fe ? n : new fe(n, i);
    if (R.throwOnInvalid)
      throw new aF(a);
    return new e({
      invalid: a
    });
  }, e.isDateTime = function(n) {
    return n && n.isLuxonDateTime || !1;
  };
  var r = e.prototype;
  return r.get = function(n) {
    return this[n];
  }, r.resolvedLocaleOpts = function(n) {
    n === void 0 && (n = {});
    var i = me.create(this.loc.clone(n), n).resolvedOptions(this), a = i.locale, u = i.numberingSystem, s = i.calendar;
    return {
      locale: a,
      numberingSystem: u,
      outputCalendar: s
    };
  }, r.toUTC = function(n, i) {
    return n === void 0 && (n = 0), i === void 0 && (i = {}), this.setZone(ee.instance(n), i);
  }, r.toLocal = function() {
    return this.setZone(R.defaultZone);
  }, r.setZone = function(n, i) {
    var a = i === void 0 ? {} : i, u = a.keepLocalTime, s = u === void 0 ? !1 : u, c = a.keepCalendarTime, h = c === void 0 ? !1 : c;
    if (n = Le(n, R.defaultZone), n.equals(this.zone))
      return this;
    if (n.isValid) {
      var y = this.ts;
      if (s || h) {
        var m = n.offset(this.ts), g = this.toObject(), b = it(g, m, n);
        y = b[0];
      }
      return Tr(this, {
        ts: y,
        zone: n
      });
    } else
      return e.invalid(Qr(n));
  }, r.reconfigure = function(n) {
    var i = n === void 0 ? {} : n, a = i.locale, u = i.numberingSystem, s = i.outputCalendar, c = this.loc.clone({
      locale: a,
      numberingSystem: u,
      outputCalendar: s
    });
    return Tr(this, {
      loc: c
    });
  }, r.setLocale = function(n) {
    return this.reconfigure({
      locale: n
    });
  }, r.set = function(n) {
    if (!this.isValid)
      return this;
    var i = ht(n, as, []), a = !I(i.weekYear) || !I(i.weekNumber) || !I(i.weekday), u = !I(i.ordinal), s = !I(i.year), c = !I(i.month) || !I(i.day), h = s || c, y = i.weekYear || i.weekNumber;
    if ((h || u) && y)
      throw new Ar("Can't mix weekYear/weekNumber units with year/month/day or ordinals");
    if (c && u)
      throw new Ar("Can't mix ordinal dates with month/day");
    var m;
    a ? m = Qo(Object.assign(Jn(this.c), i)) : I(i.ordinal) ? (m = Object.assign(this.toObject(), i), I(i.day) && (m.day = Math.min(ct(m.year, m.month), m.day))) : m = es(Object.assign(hn(this.c), i));
    var g = it(m, this.o, this.zone), b = g[0], w = g[1];
    return Tr(this, {
      ts: b,
      o: w
    });
  }, r.plus = function(n) {
    if (!this.isValid)
      return this;
    var i = je(n);
    return Tr(this, ns(this, i));
  }, r.minus = function(n) {
    if (!this.isValid)
      return this;
    var i = je(n).negate();
    return Tr(this, ns(this, i));
  }, r.startOf = function(n) {
    if (!this.isValid)
      return this;
    var i = {}, a = K.normalizeUnit(n);
    switch (a) {
      case "years":
        i.month = 1;
      case "quarters":
      case "months":
        i.day = 1;
      case "weeks":
      case "days":
        i.hour = 0;
      case "hours":
        i.minute = 0;
      case "minutes":
        i.second = 0;
      case "seconds":
        i.millisecond = 0;
        break;
    }
    if (a === "weeks" && (i.weekday = 1), a === "quarters") {
      var u = Math.ceil(this.month / 3);
      i.month = (u - 1) * 3 + 1;
    }
    return this.set(i);
  }, r.endOf = function(n) {
    var i;
    return this.isValid ? this.plus((i = {}, i[n] = 1, i)).startOf(n).minus(1) : this;
  }, r.toFormat = function(n, i) {
    return i === void 0 && (i = {}), this.isValid ? me.create(this.loc.redefaultToEN(i)).formatDateTimeFromString(this, n) : vn;
  }, r.toLocaleString = function(n) {
    return n === void 0 && (n = ft), this.isValid ? me.create(this.loc.clone(n), n).formatDateTime(this) : vn;
  }, r.toLocaleParts = function(n) {
    return n === void 0 && (n = {}), this.isValid ? me.create(this.loc.clone(n), n).formatDateTimeParts(this) : [];
  }, r.toISO = function(n) {
    return n === void 0 && (n = {}), this.isValid ? this.toISODate(n) + "T" + this.toISOTime(n) : null;
  }, r.toISODate = function(n) {
    var i = n === void 0 ? {} : n, a = i.format, u = a === void 0 ? "extended" : a, s = u === "basic" ? "yyyyMMdd" : "yyyy-MM-dd";
    return this.year > 9999 && (s = "+" + s), tr(this, s);
  }, r.toISOWeekDate = function() {
    return tr(this, "kkkk-'W'WW-c");
  }, r.toISOTime = function(n) {
    var i = n === void 0 ? {} : n, a = i.suppressMilliseconds, u = a === void 0 ? !1 : a, s = i.suppressSeconds, c = s === void 0 ? !1 : s, h = i.includeOffset, y = h === void 0 ? !0 : h, m = i.includePrefix, g = m === void 0 ? !1 : m, b = i.format, w = b === void 0 ? "extended" : b;
    return is(this, {
      suppressSeconds: c,
      suppressMilliseconds: u,
      includeOffset: y,
      includePrefix: g,
      format: w
    });
  }, r.toRFC2822 = function() {
    return tr(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }, r.toHTTP = function() {
    return tr(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }, r.toSQLDate = function() {
    return tr(this, "yyyy-MM-dd");
  }, r.toSQLTime = function(n) {
    var i = n === void 0 ? {} : n, a = i.includeOffset, u = a === void 0 ? !0 : a, s = i.includeZone, c = s === void 0 ? !1 : s;
    return is(this, {
      includeOffset: u,
      includeZone: c,
      spaceZone: !0
    });
  }, r.toSQL = function(n) {
    return n === void 0 && (n = {}), this.isValid ? this.toSQLDate() + " " + this.toSQLTime(n) : null;
  }, r.toString = function() {
    return this.isValid ? this.toISO() : vn;
  }, r.valueOf = function() {
    return this.toMillis();
  }, r.toMillis = function() {
    return this.isValid ? this.ts : NaN;
  }, r.toSeconds = function() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }, r.toJSON = function() {
    return this.toISO();
  }, r.toBSON = function() {
    return this.toJSDate();
  }, r.toObject = function(n) {
    if (n === void 0 && (n = {}), !this.isValid)
      return {};
    var i = Object.assign({}, this.c);
    return n.includeConfig && (i.outputCalendar = this.outputCalendar, i.numberingSystem = this.loc.numberingSystem, i.locale = this.loc.locale), i;
  }, r.toJSDate = function() {
    return new Date(this.isValid ? this.ts : NaN);
  }, r.diff = function(n, i, a) {
    if (i === void 0 && (i = "milliseconds"), a === void 0 && (a = {}), !this.isValid || !n.isValid)
      return K.invalid(this.invalid || n.invalid, "created by diffing an invalid DateTime");
    var u = Object.assign({
      locale: this.locale,
      numberingSystem: this.numberingSystem
    }, a), s = fF(i).map(K.normalizeUnit), c = n.valueOf() > this.valueOf(), h = c ? this : n, y = c ? n : this, m = Nk(h, y, s, u);
    return c ? m.negate() : m;
  }, r.diffNow = function(n, i) {
    return n === void 0 && (n = "milliseconds"), i === void 0 && (i = {}), this.diff(e.now(), n, i);
  }, r.until = function(n) {
    return this.isValid ? Fr.fromDateTimes(this, n) : this;
  }, r.hasSame = function(n, i) {
    if (!this.isValid)
      return !1;
    var a = n.valueOf(), u = this.setZone(n.zone, {
      keepLocalTime: !0
    });
    return u.startOf(i) <= a && a <= u.endOf(i);
  }, r.equals = function(n) {
    return this.isValid && n.isValid && this.valueOf() === n.valueOf() && this.zone.equals(n.zone) && this.loc.equals(n.loc);
  }, r.toRelative = function(n) {
    if (n === void 0 && (n = {}), !this.isValid)
      return null;
    var i = n.base || e.fromObject({
      zone: this.zone
    }), a = n.padding ? this < i ? -n.padding : n.padding : 0, u = ["years", "months", "days", "hours", "minutes", "seconds"], s = n.unit;
    return Array.isArray(n.unit) && (u = n.unit, s = void 0), ss(i, this.plus(a), Object.assign(n, {
      numeric: "always",
      units: u,
      unit: s
    }));
  }, r.toRelativeCalendar = function(n) {
    return n === void 0 && (n = {}), this.isValid ? ss(n.base || e.fromObject({
      zone: this.zone
    }), this, Object.assign(n, {
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    })) : null;
  }, e.min = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    if (!i.every(e.isDateTime))
      throw new ae("min requires all arguments be DateTimes");
    return jo(i, function(u) {
      return u.valueOf();
    }, Math.min);
  }, e.max = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    if (!i.every(e.isDateTime))
      throw new ae("max requires all arguments be DateTimes");
    return jo(i, function(u) {
      return u.valueOf();
    }, Math.max);
  }, e.fromFormatExplain = function(n, i, a) {
    a === void 0 && (a = {});
    var u = a, s = u.locale, c = s === void 0 ? null : s, h = u.numberingSystem, y = h === void 0 ? null : h, m = V.fromOpts({
      locale: c,
      numberingSystem: y,
      defaultToEN: !0
    });
    return rf(m, n, i);
  }, e.fromStringExplain = function(n, i, a) {
    return a === void 0 && (a = {}), e.fromFormatExplain(n, i, a);
  }, ce(e, [{
    key: "isValid",
    get: function() {
      return this.invalid === null;
    }
    /**
     * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidReason",
    get: function() {
      return this.invalid ? this.invalid.reason : null;
    }
    /**
     * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
     * @type {string}
     */
  }, {
    key: "invalidExplanation",
    get: function() {
      return this.invalid ? this.invalid.explanation : null;
    }
    /**
     * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "locale",
    get: function() {
      return this.isValid ? this.loc.locale : null;
    }
    /**
     * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "numberingSystem",
    get: function() {
      return this.isValid ? this.loc.numberingSystem : null;
    }
    /**
     * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
     *
     * @type {string}
     */
  }, {
    key: "outputCalendar",
    get: function() {
      return this.isValid ? this.loc.outputCalendar : null;
    }
    /**
     * Get the time zone associated with this DateTime.
     * @type {Zone}
     */
  }, {
    key: "zone",
    get: function() {
      return this._zone;
    }
    /**
     * Get the name of the time zone.
     * @type {string}
     */
  }, {
    key: "zoneName",
    get: function() {
      return this.isValid ? this.zone.name : null;
    }
    /**
     * Get the year
     * @example DateTime.local(2017, 5, 25).year //=> 2017
     * @type {number}
     */
  }, {
    key: "year",
    get: function() {
      return this.isValid ? this.c.year : NaN;
    }
    /**
     * Get the quarter
     * @example DateTime.local(2017, 5, 25).quarter //=> 2
     * @type {number}
     */
  }, {
    key: "quarter",
    get: function() {
      return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
    }
    /**
     * Get the month (1-12).
     * @example DateTime.local(2017, 5, 25).month //=> 5
     * @type {number}
     */
  }, {
    key: "month",
    get: function() {
      return this.isValid ? this.c.month : NaN;
    }
    /**
     * Get the day of the month (1-30ish).
     * @example DateTime.local(2017, 5, 25).day //=> 25
     * @type {number}
     */
  }, {
    key: "day",
    get: function() {
      return this.isValid ? this.c.day : NaN;
    }
    /**
     * Get the hour of the day (0-23).
     * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
     * @type {number}
     */
  }, {
    key: "hour",
    get: function() {
      return this.isValid ? this.c.hour : NaN;
    }
    /**
     * Get the minute of the hour (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
     * @type {number}
     */
  }, {
    key: "minute",
    get: function() {
      return this.isValid ? this.c.minute : NaN;
    }
    /**
     * Get the second of the minute (0-59).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
     * @type {number}
     */
  }, {
    key: "second",
    get: function() {
      return this.isValid ? this.c.second : NaN;
    }
    /**
     * Get the millisecond of the second (0-999).
     * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
     * @type {number}
     */
  }, {
    key: "millisecond",
    get: function() {
      return this.isValid ? this.c.millisecond : NaN;
    }
    /**
     * Get the week year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
     * @type {number}
     */
  }, {
    key: "weekYear",
    get: function() {
      return this.isValid ? mn(this).weekYear : NaN;
    }
    /**
     * Get the week number of the week year (1-52ish).
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
     * @type {number}
     */
  }, {
    key: "weekNumber",
    get: function() {
      return this.isValid ? mn(this).weekNumber : NaN;
    }
    /**
     * Get the day of the week.
     * 1 is Monday and 7 is Sunday
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2014, 11, 31).weekday //=> 4
     * @type {number}
     */
  }, {
    key: "weekday",
    get: function() {
      return this.isValid ? mn(this).weekday : NaN;
    }
    /**
     * Get the ordinal (meaning the day of the year)
     * @example DateTime.local(2017, 5, 25).ordinal //=> 145
     * @type {number|DateTime}
     */
  }, {
    key: "ordinal",
    get: function() {
      return this.isValid ? hn(this.c).ordinal : NaN;
    }
    /**
     * Get the human readable short month name, such as 'Oct'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
     * @type {string}
     */
  }, {
    key: "monthShort",
    get: function() {
      return this.isValid ? xr.months("short", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable long month name, such as 'October'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).monthLong //=> October
     * @type {string}
     */
  }, {
    key: "monthLong",
    get: function() {
      return this.isValid ? xr.months("long", {
        locObj: this.loc
      })[this.month - 1] : null;
    }
    /**
     * Get the human readable short weekday, such as 'Mon'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
     * @type {string}
     */
  }, {
    key: "weekdayShort",
    get: function() {
      return this.isValid ? xr.weekdays("short", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the human readable long weekday, such as 'Monday'.
     * Defaults to the system's locale if no locale has been specified
     * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
     * @type {string}
     */
  }, {
    key: "weekdayLong",
    get: function() {
      return this.isValid ? xr.weekdays("long", {
        locObj: this.loc
      })[this.weekday - 1] : null;
    }
    /**
     * Get the UTC offset of this DateTime in minutes
     * @example DateTime.now().offset //=> -240
     * @example DateTime.utc().offset //=> 0
     * @type {number}
     */
  }, {
    key: "offset",
    get: function() {
      return this.isValid ? +this.o : NaN;
    }
    /**
     * Get the short human name for the zone's current offset, for example "EST" or "EDT".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameShort",
    get: function() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "short",
        locale: this.locale
      }) : null;
    }
    /**
     * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
     * Defaults to the system's locale if no locale has been specified
     * @type {string}
     */
  }, {
    key: "offsetNameLong",
    get: function() {
      return this.isValid ? this.zone.offsetName(this.ts, {
        format: "long",
        locale: this.locale
      }) : null;
    }
    /**
     * Get whether this zone's offset ever changes, as in a DST.
     * @type {boolean}
     */
  }, {
    key: "isOffsetFixed",
    get: function() {
      return this.isValid ? this.zone.universal : null;
    }
    /**
     * Get whether the DateTime is in a DST.
     * @type {boolean}
     */
  }, {
    key: "isInDST",
    get: function() {
      return this.isOffsetFixed ? !1 : this.offset > this.set({
        month: 1
      }).offset || this.offset > this.set({
        month: 5
      }).offset;
    }
    /**
     * Returns true if this DateTime is in a leap year, false otherwise
     * @example DateTime.local(2016).isInLeapYear //=> true
     * @example DateTime.local(2013).isInLeapYear //=> false
     * @type {boolean}
     */
  }, {
    key: "isInLeapYear",
    get: function() {
      return jr(this.year);
    }
    /**
     * Returns the number of days in this DateTime's month
     * @example DateTime.local(2016, 2).daysInMonth //=> 29
     * @example DateTime.local(2016, 3).daysInMonth //=> 31
     * @type {number}
     */
  }, {
    key: "daysInMonth",
    get: function() {
      return ct(this.year, this.month);
    }
    /**
     * Returns the number of days in this DateTime's year
     * @example DateTime.local(2016).daysInYear //=> 366
     * @example DateTime.local(2013).daysInYear //=> 365
     * @type {number}
     */
  }, {
    key: "daysInYear",
    get: function() {
      return this.isValid ? Nr(this.year) : NaN;
    }
    /**
     * Returns the number of weeks in this DateTime's year
     * @see https://en.wikipedia.org/wiki/ISO_week_date
     * @example DateTime.local(2004).weeksInWeekYear //=> 53
     * @example DateTime.local(2013).weeksInWeekYear //=> 52
     * @type {number}
     */
  }, {
    key: "weeksInWeekYear",
    get: function() {
      return this.isValid ? dt(this.weekYear) : NaN;
    }
  }], [{
    key: "DATE_SHORT",
    get: function() {
      return ft;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED",
    get: function() {
      return Di;
    }
    /**
     * {@link toLocaleString} format like 'Fri, Oct 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_MED_WITH_WEEKDAY",
    get: function() {
      return Cl;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_FULL",
    get: function() {
      return Pi;
    }
    /**
     * {@link toLocaleString} format like 'Tuesday, October 14, 1983'
     * @type {Object}
     */
  }, {
    key: "DATE_HUGE",
    get: function() {
      return Ui;
    }
    /**
     * {@link toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_SIMPLE",
    get: function() {
      return Li;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SECONDS",
    get: function() {
      return Ri;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_SHORT_OFFSET",
    get: function() {
      return ji;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "TIME_WITH_LONG_OFFSET",
    get: function() {
      return Bi;
    }
    /**
     * {@link toLocaleString} format like '09:30', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_SIMPLE",
    get: function() {
      return Vi;
    }
    /**
     * {@link toLocaleString} format like '09:30:23', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SECONDS",
    get: function() {
      return Gi;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 EDT', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_SHORT_OFFSET",
    get: function() {
      return zi;
    }
    /**
     * {@link toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
     * @type {Object}
     */
  }, {
    key: "TIME_24_WITH_LONG_OFFSET",
    get: function() {
      return qi;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT",
    get: function() {
      return Hi;
    }
    /**
     * {@link toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_SHORT_WITH_SECONDS",
    get: function() {
      return Zi;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED",
    get: function() {
      return Wi;
    }
    /**
     * {@link toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_SECONDS",
    get: function() {
      return Yi;
    }
    /**
     * {@link toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_MED_WITH_WEEKDAY",
    get: function() {
      return Ml;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL",
    get: function() {
      return Ji;
    }
    /**
     * {@link toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_FULL_WITH_SECONDS",
    get: function() {
      return Xi;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE",
    get: function() {
      return Ki;
    }
    /**
     * {@link toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
     * @type {Object}
     */
  }, {
    key: "DATETIME_HUGE_WITH_SECONDS",
    get: function() {
      return Qi;
    }
  }]), e;
}();
function Or(e) {
  if (j.isDateTime(e))
    return e;
  if (e && e.valueOf && Be(e.valueOf()))
    return j.fromJSDate(e);
  if (e && typeof e == "object")
    return j.fromObject(e);
  throw new ae("Unknown datetime argument: " + e + ", of type " + typeof e);
}
var rD = "1.28.0";
te.DateTime = j;
te.Duration = K;
te.FixedOffsetZone = ee;
te.IANAZone = ye;
te.Info = xr;
te.Interval = Fr;
te.InvalidZone = qn;
te.LocalZone = zl;
te.Settings = R;
te.VERSION = rD;
te.Zone = mr;
const { DateTime: us } = te, { IncorrectUsageError: tD } = Tl, nD = {
  invalidInterval: 'Invalid interval specified. Only "month" value is accepted.'
}, iD = ["month"], aD = (e, r) => {
  if (r === "month") {
    const t = us.fromISO(e, { zone: "UTC" }), n = us.now().setZone("UTC"), i = Math.floor(n.diff(t, "months").months);
    return t.plus({ months: i }).toISO();
  }
  throw new tD({
    message: nD.invalidInterval
  });
};
var oD = {
  lastPeriodStart: aD,
  SUPPORTED_INTERVALS: iD
};
const kr = zN, hf = eF, { lastPeriodStart: sD, SUPPORTED_INTERVALS: ls } = oD, vf = /{{([\s\S]+?)}}/g;
class Gt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {String} options.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: r, error: t, helpLink: n, db: i, errors: a }) {
    this.name = r, this.error = t, this.helpLink = n, this.db = i, this.errors = a;
  }
  generateError() {
    let r = {
      errorDetails: {
        name: this.name
      }
    };
    return this.helpLink && (r.help = this.helpLink), r;
  }
}
let uD = class extends Gt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.max - maximum limit the limit would check against
   * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
   * @param {Function} [options.config.formatter] - function to format the limit counts before they are passed to the error message
   * @param {String} [options.config.error] - error message to use when limit is reached
   * @param {String} [options.helpLink] - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: r, config: t, helpLink: n, db: i, errors: a }) {
    if (super({ name: r, error: t.error || "", helpLink: n, db: i, errors: a }), t.max === void 0)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a max limit without a limit" });
    if (!t.currentCountQuery)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a max limit without a current count query" });
    this.currentCountQueryFn = t.currentCountQuery, this.max = t.max, this.formatter = t.formatter, this.fallbackMessage = `This action would exceed the ${kr(this.name)} limit on your current plan.`;
  }
  /**
   *
   * @param {Number} count - current count that acceded the limit
   * @returns {Object} instance of HostLimitError
   */
  generateError(r) {
    let t = super.generateError();
    if (t.message = this.fallbackMessage, this.error) {
      const n = this.formatter || Intl.NumberFormat().format;
      try {
        t.message = hf(this.error, { interpolate: vf })(
          {
            max: n(this.max),
            count: n(r),
            name: this.name
          }
        );
      } catch {
        t.message = this.fallbackMessage;
      }
    }
    return t.errorDetails.limit = this.max, t.errorDetails.total = r, new this.errors.HostLimitError(t);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(r = {}) {
    var t;
    return await this.currentCountQueryFn(r.transacting ?? ((t = this.db) == null ? void 0 : t.knex));
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(r = {}) {
    const { max: t, addedCount: n = 1 } = r;
    let i = await this.currentCountQuery(r);
    if (i + n > (t || this.max))
      throw this.generateError(i);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default max value to perform checks against
   * @param {Number} [options.currentCount] - overrides currentCountQuery to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(r = {}) {
    const t = r.currentCount || await this.currentCountQuery(r);
    if (t > (r.max || this.max))
      throw this.generateError(t);
  }
}, lD = class extends Gt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.maxPeriodic - maximum limit the limit would check against
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {Function} options.config.currentCountQuery - query checking the state that would be compared against the limit
   * @param {('month')} options.config.interval - an interval to take into account when checking the limit. Currently only supports 'month' value
   * @param {String} options.config.startDate - start date in ISO 8601 format (https://en.wikipedia.org/wiki/ISO_8601), used to calculate period intervals
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: r, config: t, helpLink: n, db: i, errors: a }) {
    if (super({ name: r, error: t.error || "", helpLink: n, db: i, errors: a }), t.maxPeriodic === void 0)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a limit" });
    if (!t.currentCountQuery)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a current count query" });
    if (!t.interval)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without an interval" });
    if (!ls.includes(t.interval))
      throw new a.IncorrectUsageError({ message: `Attempted to setup a periodic max limit without unsupported interval. Please specify one of: ${ls}` });
    if (!t.startDate)
      throw new a.IncorrectUsageError({ message: "Attempted to setup a periodic max limit without a start date" });
    this.currentCountQueryFn = t.currentCountQuery, this.maxPeriodic = t.maxPeriodic, this.interval = t.interval, this.startDate = t.startDate, this.fallbackMessage = `This action would exceed the ${kr(this.name)} limit on your current plan.`;
  }
  generateError(r) {
    let t = super.generateError();
    if (t.message = this.fallbackMessage, this.error)
      try {
        t.message = hf(this.error, { interpolate: vf })(
          {
            max: Intl.NumberFormat().format(this.maxPeriodic),
            count: Intl.NumberFormat().format(r),
            name: this.name
          }
        );
      } catch {
        t.message = this.fallbackMessage;
      }
    return t.errorDetails.limit = this.maxPeriodic, t.errorDetails.total = r, new this.errors.HostLimitError(t);
  }
  /**
   * @param {Object} [options]
   * @param {Object} [options.transacting] Transaction to run the count query on
   * @returns
   */
  async currentCountQuery(r = {}) {
    const t = sD(this.startDate, this.interval);
    return await this.currentCountQueryFn(r.transacting ? r.transacting : this.db ? this.db.knex : void 0, t);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Number} [options.addedCount] - number of items to add to the currentCount during the check
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfWouldGoOverLimit(r = {}) {
    const { max: t, addedCount: n = 1 } = r;
    let i = await this.currentCountQuery(r);
    if (i + n > (t || this.maxPeriodic))
      throw this.generateError(i);
  }
  /**
   * Throws a HostLimitError if the configured or passed max limit is acceded by currentCountQuery
   *
   * @param {Object} options
   * @param {Number} [options.max] - overrides configured default maxPeriodic value to perform checks against
   * @param {Object} [options.transacting] Transaction to run the count query on
   */
  async errorIfIsOverLimit(r = {}) {
    const { max: t } = r;
    let n = await this.currentCountQuery(r);
    if (n > (t || this.maxPeriodic))
      throw this.generateError(n);
  }
}, fD = class extends Gt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {Number} options.config.disabled - disabled/enabled flag for the limit
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} [options.db] - instance of knex db connection that currentCountQuery can use to run state check through
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: r, config: t, helpLink: n, db: i, errors: a }) {
    super({ name: r, error: t.error || "", helpLink: n, db: i, errors: a }), this.disabled = t.disabled, this.fallbackMessage = `Your plan does not support ${kr(this.name)}. Please upgrade to enable ${kr(this.name)}.`;
  }
  generateError() {
    let r = super.generateError();
    return this.error ? r.message = this.error : r.message = this.fallbackMessage, new this.errors.HostLimitError(r);
  }
  /**
   * Flag limits are on/off so using a feature is always over the limit
   */
  async errorIfWouldGoOverLimit() {
    if (this.disabled)
      throw this.generateError();
  }
  /**
   * Flag limits are on/off. They don't necessarily mean the limit wasn't possible to reach
   * NOTE: this method should not be relied on as it's impossible to check the limit was surpassed!
   */
  async errorIfIsOverLimit() {
  }
}, cD = class extends Gt {
  /**
   *
   * @param {Object} options
   * @param {String} options.name - name of the limit
   * @param {Object} options.config - limit configuration
   * @param {[String]} options.config.allowlist - allowlist values that would be compared against
   * @param {String} options.config.error - error message to use when limit is reached
   * @param {String} options.helpLink - URL to the resource explaining how the limit works
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  constructor({ name: r, config: t, helpLink: n, errors: i }) {
    if (super({ name: r, error: t.error || "", helpLink: n, errors: i }), !t.allowlist || !t.allowlist.length)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to setup an allowlist limit without an allowlist" });
    this.allowlist = t.allowlist, this.fallbackMessage = `This action would exceed the ${kr(this.name)} limit on your current plan.`;
  }
  generateError() {
    let r = super.generateError();
    return this.error ? r.message = this.error : r.message = this.fallbackMessage, new this.errors.HostLimitError(r);
  }
  async errorIfWouldGoOverLimit(r) {
    if (!r || !r.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(r.value))
      throw this.generateError();
  }
  async errorIfIsOverLimit(r) {
    if (!r || !r.value)
      throw new this.errors.IncorrectUsageError({ message: "Attempted to check an allowlist limit without a value" });
    if (!this.allowlist.includes(r.value))
      throw this.generateError();
  }
};
var dD = {
  MaxLimit: uD,
  MaxPeriodicLimit: lD,
  FlagLimit: fD,
  AllowlistLimit: cD
}, hD = {
  members: {
    currentCountQuery: async (e) => (await e("members").count("id", { as: "count" }).first()).count
  },
  newsletters: {
    currentCountQuery: async (e) => (await e("newsletters").count("id", { as: "count" }).where("status", "=", "active").first()).count
  },
  emails: {
    currentCountQuery: async (e, r) => (await e("emails").sum("email_count", { as: "count" }).where("created_at", ">=", r).first()).count
  },
  staff: {
    currentCountQuery: async (e) => (await e("users").select("users.id").leftJoin("roles_users", "users.id", "roles_users.user_id").leftJoin("roles", "roles_users.role_id", "roles.id").whereNot("roles.name", "Contributor").andWhereNot("users.status", "inactive").union([
      e("invites").select("invites.id").leftJoin("roles", "invites.role_id", "roles.id").whereNot("roles.name", "Contributor")
    ])).length
  },
  customIntegrations: {
    currentCountQuery: async (e) => (await e("integrations").count("id", { as: "count" }).whereNotIn("type", ["internal", "builtin"]).first()).count
  },
  customThemes: {},
  uploads: {
    // NOTE: this function should not ever be used as for uploads we compare the size
    //       of the uploaded file with the configured limit. Noop is here to keep the
    //       MaxLimit constructor happy
    currentCountQuery: () => {
    },
    // NOTE: the uploads limit is based on file sizes provided in Bytes
    //       a custom formatter is here for more user-friendly formatting when forming an error
    formatter: (e) => `${e / 1e6}MB`
  }
};
const fs = ch, yn = py, { IncorrectUsageError: cs } = Tl, { MaxLimit: vD, MaxPeriodicLimit: mD, FlagLimit: yD, AllowlistLimit: pD } = dD, ds = hD, hs = {
  missingErrorsConfig: "Config Missing: 'errors' is required.",
  noSubscriptionParameter: "Attempted to setup a periodic max limit without a subscription"
};
class gD {
  constructor() {
    this.limits = {};
  }
  /**
   * Initializes the limits based on configuration
   *
   * @param {Object} options
   * @param {Object} [options.limits] - hash containing limit configurations keyed by limit name and containing
   * @param {Object} [options.subscription] - hash containing subscription configuration with interval and startDate properties
   * @param {String} options.helpLink - URL pointing to help resources for when limit is reached
   * @param {Object} options.db - knex db connection instance or other data source for the limit checks
   * @param {Object} options.errors - instance of errors compatible with GhostError errors (@tryghost/errors)
   */
  loadLimits({ limits: r = {}, subscription: t, helpLink: n, db: i, errors: a }) {
    if (!a)
      throw new cs({
        message: hs.missingErrorsConfig
      });
    this.errors = a, this.limits = {}, Object.keys(r).forEach((u) => {
      if (u = fs(u), ds[u]) {
        let s = Object.assign({}, ds[u], r[u]);
        if (yn(s, "allowlist"))
          this.limits[u] = new pD({ name: u, config: s, helpLink: n, errors: a });
        else if (yn(s, "max"))
          this.limits[u] = new vD({ name: u, config: s, helpLink: n, db: i, errors: a });
        else if (yn(s, "maxPeriodic")) {
          if (t === void 0)
            throw new cs({
              message: hs.noSubscriptionParameter
            });
          const c = Object.assign({}, s, t);
          this.limits[u] = new mD({ name: u, config: c, helpLink: n, db: i, errors: a });
        } else
          this.limits[u] = new yD({ name: u, config: s, helpLink: n, errors: a });
      }
    });
  }
  isLimited(r) {
    return !!this.limits[fs(r)];
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkIsOverLimit(r, t = {}) {
    if (this.isLimited(r))
      try {
        return await this.limits[r].errorIfIsOverLimit(t), !1;
      } catch (n) {
        if (n instanceof this.errors.HostLimitError)
          return !0;
        throw n;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async checkWouldGoOverLimit(r, t = {}) {
    if (this.isLimited(r))
      try {
        return await this.limits[r].errorIfWouldGoOverLimit(t), !1;
      } catch (n) {
        if (n instanceof this.errors.HostLimitError)
          return !0;
        throw n;
      }
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfIsOverLimit(r, t = {}) {
    this.isLimited(r) && await this.limits[r].errorIfIsOverLimit(t);
  }
  /**
   *
   * @param {String} limitName - name of the configured limit
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count query on (if required for the chosen limit)
   * @returns
   */
  async errorIfWouldGoOverLimit(r, t = {}) {
    this.isLimited(r) && await this.limits[r].errorIfWouldGoOverLimit(t);
  }
  /**
   * Checks if any of the configured limits acceded
   *
   * @param {Object} [options] - limit parameters
   * @param {Object} [options.transacting] Transaction to run the count queries on (if required for the chosen limit)
   * @returns {Promise<boolean>}
   */
  async checkIfAnyOverLimit(r = {}) {
    for (const t in this.limits)
      if (await this.checkIsOverLimit(t, r))
        return !0;
    return !1;
  }
}
var mf = gD;
const $D = /* @__PURE__ */ Af(mf), eP = /* @__PURE__ */ xf({
  __proto__: null,
  default: $D
}, [mf]);
export {
  eP as l
};
//# sourceMappingURL=limit-service-57764392.mjs.map
