import {
  S as ae,
  i as se,
  s as ne,
  T as re,
  y as G,
  z as W,
  A as q,
  U as ye,
  V as De,
  g as O,
  d as J,
  B as K,
  W as oe,
  L as _e,
  M as Se,
  N as ke,
  O as Te,
  k as N,
  l as I,
  m as H,
  h as A,
  n as Y,
  b as ee,
  v as we,
  f as Ae,
  X as Ye,
  q as U,
  a as P,
  r as B,
  c as R,
  D as g,
  u as te,
  F as $e,
} from "../chunks/index.4b79d54d.js";
import { S as Fe } from "../chunks/Seo.c895259e.js";
import { I as Ne } from "../chunks/Icon.abf37687.js";
function Ie(f) {
  let e;
  const m = f[2].default,
    a = _e(m, f, f[3], null);
  return {
    c() {
      a && a.c();
    },
    l(t) {
      a && a.l(t);
    },
    m(t, n) {
      a && a.m(t, n), (e = !0);
    },
    p(t, n) {
      a &&
        a.p &&
        (!e || n & 8) &&
        Se(a, m, t, t[3], e ? Te(m, t[3], n, null) : ke(t[3]), null);
    },
    i(t) {
      e || (O(a, t), (e = !0));
    },
    o(t) {
      J(a, t), (e = !1);
    },
    d(t) {
      a && a.d(t);
    },
  };
}
function He(f) {
  let e, m;
  const a = [{ name: "arrow-up-right" }, f[1], { iconNode: f[0] }];
  let t = { $$slots: { default: [Ie] }, $$scope: { ctx: f } };
  for (let n = 0; n < a.length; n += 1) t = re(t, a[n]);
  return (
    (e = new Ne({ props: t })),
    {
      c() {
        G(e.$$.fragment);
      },
      l(n) {
        W(e.$$.fragment, n);
      },
      m(n, i) {
        q(e, n, i), (m = !0);
      },
      p(n, [i]) {
        const c =
          i & 3
            ? ye(a, [a[0], i & 2 && De(n[1]), i & 1 && { iconNode: n[0] }])
            : {};
        i & 8 && (c.$$scope = { dirty: i, ctx: n }), e.$set(c);
      },
      i(n) {
        m || (O(e.$$.fragment, n), (m = !0));
      },
      o(n) {
        J(e.$$.fragment, n), (m = !1);
      },
      d(n) {
        K(e, n);
      },
    }
  );
}
function ze(f, e, m) {
  let { $$slots: a = {}, $$scope: t } = e;
  const n = [
    ["line", { x1: "7", y1: "17", x2: "17", y2: "7" }],
    ["polyline", { points: "7 7 17 7 17 17" }],
  ];
  return (
    (f.$$set = (i) => {
      m(1, (e = re(re({}, e), oe(i)))), "$$scope" in i && m(3, (t = i.$$scope));
    }),
    (e = oe(e)),
    [n, e, a, t]
  );
}
class xe extends ae {
  constructor(e) {
    super(), se(this, e, ze, He, ne, {});
  }
}
const je = xe;
function Ee(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default")
    ? f.default
    : f;
}
var ce = { exports: {} };
(function (f) {
  (function () {
    var e = {
        de_DE: {
          identifier: "de-DE",
          days: [
            "Sonntag",
            "Montag",
            "Dienstag",
            "Mittwoch",
            "Donnerstag",
            "Freitag",
            "Samstag",
          ],
          shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          months: [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mär",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Okt",
            "Nov",
            "Dez",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d.%m.%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        en_CA: {
          identifier: "en-CA",
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          ordinalSuffixes: [
            "st",
            "nd",
            "rd",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "st",
            "nd",
            "rd",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "st",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D",
          },
        },
        en_US: {
          identifier: "en-US",
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          shortMonths: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          ordinalSuffixes: [
            "st",
            "nd",
            "rd",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "st",
            "nd",
            "rd",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "th",
            "st",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%m/%d/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D",
          },
        },
        es_MX: {
          identifier: "es-MX",
          days: [
            "domingo",
            "lunes",
            "martes",
            "miércoles",
            "jueves",
            "viernes",
            "sábado",
          ],
          shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
          months: [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            " diciembre",
          ],
          shortMonths: [
            "ene",
            "feb",
            "mar",
            "abr",
            "may",
            "jun",
            "jul",
            "ago",
            "sep",
            "oct",
            "nov",
            "dic",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        fr_FR: {
          identifier: "fr-FR",
          days: [
            "dimanche",
            "lundi",
            "mardi",
            "mercredi",
            "jeudi",
            "vendredi",
            "samedi",
          ],
          shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
          months: [
            "janvier",
            "février",
            "mars",
            "avril",
            "mai",
            "juin",
            "juillet",
            "août",
            "septembre",
            "octobre",
            "novembre",
            "décembre",
          ],
          shortMonths: [
            "janv.",
            "févr.",
            "mars",
            "avril",
            "mai",
            "juin",
            "juil.",
            "août",
            "sept.",
            "oct.",
            "nov.",
            "déc.",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        it_IT: {
          identifier: "it-IT",
          days: [
            "domenica",
            "lunedì",
            "martedì",
            "mercoledì",
            "giovedì",
            "venerdì",
            "sabato",
          ],
          shortDays: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
          months: [
            "gennaio",
            "febbraio",
            "marzo",
            "aprile",
            "maggio",
            "giugno",
            "luglio",
            "agosto",
            "settembre",
            "ottobre",
            "novembre",
            "dicembre",
          ],
          shortMonths: [
            "gen",
            "feb",
            "mar",
            "apr",
            "mag",
            "giu",
            "lug",
            "ago",
            "set",
            "ott",
            "nov",
            "dic",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        nl_NL: {
          identifier: "nl-NL",
          days: [
            "zondag",
            "maandag",
            "dinsdag",
            "woensdag",
            "donderdag",
            "vrijdag",
            "zaterdag",
          ],
          shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          months: [
            "januari",
            "februari",
            "maart",
            "april",
            "mei",
            "juni",
            "juli",
            "augustus",
            "september",
            "oktober",
            "november",
            "december",
          ],
          shortMonths: [
            "jan",
            "feb",
            "mrt",
            "apr",
            "mei",
            "jun",
            "jul",
            "aug",
            "sep",
            "okt",
            "nov",
            "dec",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        pt_BR: {
          identifier: "pt-BR",
          days: [
            "domingo",
            "segunda",
            "terça",
            "quarta",
            "quinta",
            "sexta",
            "sábado",
          ],
          shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
          months: [
            "janeiro",
            "fevereiro",
            "março",
            "abril",
            "maio",
            "junho",
            "julho",
            "agosto",
            "setembro",
            "outubro",
            "novembro",
            "dezembro",
          ],
          shortMonths: [
            "Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        ru_RU: {
          identifier: "ru-RU",
          days: [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Пятница",
            "Суббота",
          ],
          shortDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
          months: [
            "Январь",
            "Февраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь",
          ],
          shortMonths: [
            "янв",
            "фев",
            "мар",
            "апр",
            "май",
            "июн",
            "июл",
            "авг",
            "сен",
            "окт",
            "ноя",
            "дек",
          ],
          AM: "AM",
          PM: "PM",
          am: "am",
          pm: "pm",
          formats: {
            c: "%a %d %b %Y %X",
            D: "%d.%m.%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        tr_TR: {
          identifier: "tr-TR",
          days: [
            "Pazar",
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi",
          ],
          shortDays: ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cts"],
          months: [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmuz",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık",
          ],
          shortMonths: [
            "Oca",
            "Şub",
            "Mar",
            "Nis",
            "May",
            "Haz",
            "Tem",
            "Ağu",
            "Eyl",
            "Eki",
            "Kas",
            "Ara",
          ],
          AM: "ÖÖ",
          PM: "ÖS",
          am: "ÖÖ",
          pm: "ÖS",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d-%m-%Y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%T",
            x: "%D",
          },
        },
        zh_CN: {
          identifier: "zh-CN",
          days: [
            "星期日",
            "星期一",
            "星期二",
            "星期三",
            "星期四",
            "星期五",
            "星期六",
          ],
          shortDays: ["日", "一", "二", "三", "四", "五", "六"],
          months: [
            "一月份",
            "二月份",
            "三月份",
            "四月份",
            "五月份",
            "六月份",
            "七月份",
            "八月份",
            "九月份",
            "十月份",
            "十一月份",
            "十二月份",
          ],
          shortMonths: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月",
          ],
          AM: "上午",
          PM: "下午",
          am: "上午",
          pm: "下午",
          formats: {
            c: "%a %d %b %Y %X %Z",
            D: "%d/%m/%y",
            F: "%Y-%m-%d",
            R: "%H:%M",
            r: "%I:%M:%S %p",
            T: "%H:%M:%S",
            v: "%e-%b-%Y",
            X: "%r",
            x: "%D",
          },
        },
      },
      m = e.en_US,
      a = new t(m, 0, !1);
    (f.exports = a),
      typeof Date.now != "function" &&
        (Date.now = function () {
          return +new Date();
        });
    function t(o, d, _) {
      var D = o || m,
        h = d || 0,
        v = _ || !1,
        S = 0,
        F;
      function M(k, r) {
        var u;
        if (r) {
          if (((u = r.getTime()), v)) {
            var s = $(r);
            if (((r = new Date(u + s + h)), $(r) !== s)) {
              var b = $(r);
              r = new Date(u + b + h);
            }
          }
        } else {
          var p = Date.now();
          p > S
            ? ((S = p),
              (F = new Date(S)),
              (u = S),
              v && (F = new Date(S + $(F) + h)))
            : (u = S),
            (r = F);
        }
        return y(k, r, D, u);
      }
      function y(k, r, u, p) {
        for (
          var s = "", b = null, L = !1, he = k.length, Q = !1, C = 0;
          C < he;
          C++
        ) {
          var Z = k.charCodeAt(C);
          if (L === !0) {
            if (Z === 45) {
              b = "";
              continue;
            } else if (Z === 95) {
              b = " ";
              continue;
            } else if (Z === 48) {
              b = "0";
              continue;
            } else if (Z === 58) {
              Q &&
                w(
                  "[WARNING] detected use of unsupported %:: or %::: modifiers to strftime"
                ),
                (Q = !0);
              continue;
            }
            switch (Z) {
              case 37:
                s += "%";
                break;
              case 65:
                s += u.days[r.getDay()];
                break;
              case 66:
                s += u.months[r.getMonth()];
                break;
              case 67:
                s += n(Math.floor(r.getFullYear() / 100), b);
                break;
              case 68:
                s += y(u.formats.D, r, u, p);
                break;
              case 70:
                s += y(u.formats.F, r, u, p);
                break;
              case 72:
                s += n(r.getHours(), b);
                break;
              case 73:
                s += n(c(r.getHours()), b);
                break;
              case 76:
                s += i(Math.floor(p % 1e3));
                break;
              case 77:
                s += n(r.getMinutes(), b);
                break;
              case 80:
                s += r.getHours() < 12 ? u.am : u.pm;
                break;
              case 82:
                s += y(u.formats.R, r, u, p);
                break;
              case 83:
                s += n(r.getSeconds(), b);
                break;
              case 84:
                s += y(u.formats.T, r, u, p);
                break;
              case 85:
                s += n(l(r, "sunday"), b);
                break;
              case 87:
                s += n(l(r, "monday"), b);
                break;
              case 88:
                s += y(u.formats.X, r, u, p);
                break;
              case 89:
                s += r.getFullYear();
                break;
              case 90:
                if (v && h === 0) s += "GMT";
                else {
                  var de = j(r);
                  s += de || "";
                }
                break;
              case 97:
                s += u.shortDays[r.getDay()];
                break;
              case 98:
                s += u.shortMonths[r.getMonth()];
                break;
              case 99:
                s += y(u.formats.c, r, u, p);
                break;
              case 100:
                s += n(r.getDate(), b);
                break;
              case 101:
                s += n(r.getDate(), b ?? " ");
                break;
              case 104:
                s += u.shortMonths[r.getMonth()];
                break;
              case 106:
                var ge = new Date(r.getFullYear(), 0, 1),
                  X = Math.ceil(
                    (r.getTime() - ge.getTime()) / (1e3 * 60 * 60 * 24)
                  );
                s += i(X);
                break;
              case 107:
                s += n(r.getHours(), b ?? " ");
                break;
              case 108:
                s += n(c(r.getHours()), b ?? " ");
                break;
              case 109:
                s += n(r.getMonth() + 1, b);
                break;
              case 110:
                s += `
`;
                break;
              case 111:
                var X = r.getDate();
                u.ordinalSuffixes
                  ? (s += String(X) + (u.ordinalSuffixes[X - 1] || T(X)))
                  : (s += String(X) + T(X));
                break;
              case 112:
                s += r.getHours() < 12 ? u.AM : u.PM;
                break;
              case 114:
                s += y(u.formats.r, r, u, p);
                break;
              case 115:
                s += Math.floor(p / 1e3);
                break;
              case 116:
                s += "	";
                break;
              case 117:
                var X = r.getDay();
                s += X === 0 ? 7 : X;
                break;
              case 118:
                s += y(u.formats.v, r, u, p);
                break;
              case 119:
                s += r.getDay();
                break;
              case 120:
                s += y(u.formats.x, r, u, p);
                break;
              case 121:
                s += ("" + r.getFullYear()).slice(2);
                break;
              case 122:
                if (v && h === 0) s += Q ? "+00:00" : "+0000";
                else {
                  var V;
                  h !== 0 ? (V = h / (60 * 1e3)) : (V = -r.getTimezoneOffset());
                  var pe = V < 0 ? "-" : "+",
                    be = Q ? ":" : "",
                    ve = Math.floor(Math.abs(V / 60)),
                    Me = Math.abs(V % 60);
                  s += pe + n(ve) + be + n(Me);
                }
                break;
              default:
                L && (s += "%"), (s += k[C]);
                break;
            }
            (b = null), (L = !1);
            continue;
          }
          if (Z === 37) {
            L = !0;
            continue;
          }
          s += k[C];
        }
        return s;
      }
      var E = M;
      return (
        (E.localize = function (k) {
          return new t(k || D, h, v);
        }),
        (E.localizeByIdentifier = function (k) {
          var r = e[k];
          return r
            ? E.localize(r)
            : (w('[WARNING] No locale found with identifier "' + k + '".'), E);
        }),
        (E.timezone = function (k) {
          var r = h,
            u = v,
            p = typeof k;
          if (p === "number" || p === "string")
            if (((u = !0), p === "string")) {
              var s = k[0] === "-" ? -1 : 1,
                b = parseInt(k.slice(1, 3), 10),
                L = parseInt(k.slice(3, 5), 10);
              r = s * (60 * b + L) * 60 * 1e3;
            } else p === "number" && (r = k * 60 * 1e3);
          return new t(D, r, u);
        }),
        (E.utc = function () {
          return new t(D, h, !0);
        }),
        E
      );
    }
    function n(o, d) {
      return d === "" || o > 9 ? o : (d == null && (d = "0"), d + o);
    }
    function i(o) {
      return o > 99 ? o : o > 9 ? "0" + o : "00" + o;
    }
    function c(o) {
      return o === 0 ? 12 : o > 12 ? o - 12 : o;
    }
    function l(o, d) {
      d = d || "sunday";
      var _ = o.getDay();
      d === "monday" && (_ === 0 ? (_ = 6) : _--);
      var D = Date.UTC(o.getFullYear(), 0, 1),
        h = Date.UTC(o.getFullYear(), o.getMonth(), o.getDate()),
        v = Math.floor((h - D) / 864e5),
        S = (v + 7 - _) / 7;
      return Math.floor(S);
    }
    function T(o) {
      var d = o % 10,
        _ = o % 100;
      if ((_ >= 11 && _ <= 13) || d === 0 || d >= 4) return "th";
      switch (d) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
      }
    }
    function $(o) {
      return (o.getTimezoneOffset() || 0) * 6e4;
    }
    function j(o, d) {
      return z(o, d) || x(o);
    }
    function z(o, d) {
      if (d == null) return null;
      var _ = o
        .toLocaleString(d, { timeZoneName: "short" })
        .match(/\s([\w]+)$/);
      return _ && _[1];
    }
    function x(o) {
      var d = o.toString().match(/\(([\w\s]+)\)/);
      return d && d[1];
    }
    function w(o) {
      typeof console < "u" &&
        typeof console.warn == "function" &&
        console.warn(o);
    }
  })();
})(ce);
var Xe = ce.exports;
const Pe = Ee(Xe),
  Re = Pe.utc();
function ie(f, e) {
  return Re(f, new Date(e));
}
function ue(f, e, m) {
  const a = f.slice();
  return (a[1] = e[m]), a;
}
function le(f) {
  let e,
    m,
    a,
    t = f[1].title + "",
    n,
    i,
    c,
    l,
    T,
    $ = ie("%B %-d, %Y", f[1].date) + "",
    j,
    z,
    x,
    w = f[1].summary + "",
    o,
    d,
    _,
    D;
  return (
    (c = new je({ props: { size: 18, class: "inline text-neutral-400" } })),
    {
      c() {
        (e = N("a")),
          (m = N("div")),
          (a = N("div")),
          (n = U(t)),
          (i = P()),
          G(c.$$.fragment),
          (l = P()),
          (T = N("div")),
          (j = U($)),
          (z = P()),
          (x = N("div")),
          (o = U(w)),
          (d = P()),
          this.h();
      },
      l(h) {
        e = I(h, "A", { href: !0, class: !0, target: !0, rel: !0 });
        var v = H(e);
        m = I(v, "DIV", { class: !0 });
        var S = H(m);
        a = I(S, "DIV", { class: !0 });
        var F = H(a);
        (n = B(F, t)),
          (i = R(F)),
          W(c.$$.fragment, F),
          F.forEach(A),
          (l = R(S)),
          (T = I(S, "DIV", { class: !0 }));
        var M = H(T);
        (j = B(M, $)),
          M.forEach(A),
          S.forEach(A),
          (z = R(v)),
          (x = I(v, "DIV", { class: !0 }));
        var y = H(x);
        (o = B(y, w)), y.forEach(A), (d = R(v)), v.forEach(A), this.h();
      },
      h() {
        Y(a, "class", "text-lg text-black"),
          Y(T, "class", "sm:ml-auto mb-0.5 text-neutral-500"),
          Y(m, "class", "flex flex-col sm:flex-row sm:items-end mb-1.5"),
          Y(x, "class", "text-lg leading-snug font-serif italic"),
          Y(e, "href", (_ = f[1].link)),
          Y(
            e,
            "class",
            "block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
          ),
          Y(e, "target", "_blank"),
          Y(e, "rel", "noreferrer");
      },
      m(h, v) {
        ee(h, e, v),
          g(e, m),
          g(m, a),
          g(a, n),
          g(a, i),
          q(c, a, null),
          g(m, l),
          g(m, T),
          g(T, j),
          g(e, z),
          g(e, x),
          g(x, o),
          g(e, d),
          (D = !0);
      },
      p(h, v) {
        (!D || v & 1) && t !== (t = h[1].title + "") && te(n, t),
          (!D || v & 1) &&
            $ !== ($ = ie("%B %-d, %Y", h[1].date) + "") &&
            te(j, $),
          (!D || v & 1) && w !== (w = h[1].summary + "") && te(o, w),
          (!D || (v & 1 && _ !== (_ = h[1].link))) && Y(e, "href", _);
      },
      i(h) {
        D || (O(c.$$.fragment, h), (D = !0));
      },
      o(h) {
        J(c.$$.fragment, h), (D = !1);
      },
      d(h) {
        h && A(e), K(c);
      },
    }
  );
}
function Oe(f) {
  let e,
    m,
    a = f[0],
    t = [];
  for (let i = 0; i < a.length; i += 1) t[i] = le(ue(f, a, i));
  const n = (i) =>
    J(t[i], 1, 1, () => {
      t[i] = null;
    });
  return {
    c() {
      e = N("div");
      for (let i = 0; i < t.length; i += 1) t[i].c();
      this.h();
    },
    l(i) {
      e = I(i, "DIV", { class: !0 });
      var c = H(e);
      for (let l = 0; l < t.length; l += 1) t[l].l(c);
      c.forEach(A), this.h();
    },
    h() {
      Y(e, "class", "grid gap-y-4");
    },
    m(i, c) {
      ee(i, e, c);
      for (let l = 0; l < t.length; l += 1) t[l] && t[l].m(e, null);
      m = !0;
    },
    p(i, [c]) {
      if (c & 1) {
        a = i[0];
        let l;
        for (l = 0; l < a.length; l += 1) {
          const T = ue(i, a, l);
          t[l]
            ? (t[l].p(T, c), O(t[l], 1))
            : ((t[l] = le(T)), t[l].c(), O(t[l], 1), t[l].m(e, null));
        }
        for (we(), l = a.length; l < t.length; l += 1) n(l);
        Ae();
      }
    },
    i(i) {
      if (!m) {
        for (let c = 0; c < a.length; c += 1) O(t[c]);
        m = !0;
      }
    },
    o(i) {
      t = t.filter(Boolean);
      for (let c = 0; c < t.length; c += 1) J(t[c]);
      m = !1;
    },
    d(i) {
      i && A(e), Ye(t, i);
    },
  };
}
function Je(f, e, m) {
  let { data: a } = e;
  return (
    (f.$$set = (t) => {
      "data" in t && m(0, (a = t.data));
    }),
    [a]
  );
}
class me extends ae {
  constructor(e) {
    super(), se(this, e, Je, Oe, ne, { data: 0 });
  }
}
var fe = {
  courses: [
    {
      title: "CS 285: Deep Reinforcement Learning",
      date: new Date(17025984e5),
      summary: `Graduate course on reinforcement learning, control, and deep learning. Imitation learning; model-free, model-based, and offline algorithms; multitask learning and other miscellaneous.
`,
      link: "/assets/pdf/CS285_Notes.pdf",
    },
    {
      title: "CS 182: Deep Neural Networks",
      date: new Date(1702512e6),
      summary: `2010s deep learning: Architectures, optimizers, language models, meta-learning.
`,
      link: "/assets/pdf/CS182_Notes.pdf",
    },
  ],
  artifacts: [
    {
      title: "Covering Spaces",
      date: new Date(16289856e5),
      summary: `The fundamental group, covering maps and topology, lifting properties of paths and homotopies, and the universal cover.
`,
      link: "/assets/pdf/CoveringSpaces.pdf",
    },
    {
      title: "Matrix Lie Groups",
      date: new Date(15909696e5),
      summary: `An introduction to Lie theory through matrix Lie groups: exponentiation, tangent spaces, algebras, homomorphisms, and Baker–Campbell–Hausdorff formula.
`,
      link: "/assets/pdf/MatrixLieGroups.pdf",
    },
  ],
};
function Ue(f) {
  let e, m, a, t, n, i, c, l, T, $, j, z, x, w, o, d, _, D, h, v, S, F;
  return (
    (e = new Fe({
      props: { title: "Preston Fu – Notes", description: "Technical writing" },
    })),
    (z = new me({ props: { data: fe.courses } })),
    (S = new me({ props: { data: fe.artifacts } })),
    {
      c() {
        G(e.$$.fragment),
          (m = P()),
          (a = N("div")),
          (t = N("div")),
          (n = N("p")),
          (i =
            U(`I like to write out my notes in English; perhaps they are useful to you
      too. You may notice that some still have TODOs on them; if you happen to
      know how to resolve them, please don't hesitate to reach out!`)),
          (c = P()),
          (l = N("section")),
          (T = N("h2")),
          ($ = U("Course Notes")),
          (j = P()),
          G(z.$$.fragment),
          (x = P()),
          (w = N("section")),
          (o = N("h2")),
          (d = U("Artifacts")),
          (_ = P()),
          (D = N("div")),
          (h =
            U(`Before undergrad, I considered studying pure math. Here are some summaries
      of what I was reading at the time.`)),
          (v = P()),
          G(S.$$.fragment),
          this.h();
      },
      l(M) {
        W(e.$$.fragment, M), (m = R(M)), (a = I(M, "DIV", { class: !0 }));
        var y = H(a);
        t = I(y, "DIV", { class: !0 });
        var E = H(t);
        n = I(E, "P", {});
        var k = H(n);
        (i = B(
          k,
          `I like to write out my notes in English; perhaps they are useful to you
      too. You may notice that some still have TODOs on them; if you happen to
      know how to resolve them, please don't hesitate to reach out!`
        )),
          k.forEach(A),
          E.forEach(A),
          (c = R(y)),
          (l = I(y, "SECTION", { class: !0 }));
        var r = H(l);
        T = I(r, "H2", { class: !0 });
        var u = H(T);
        ($ = B(u, "Course Notes")),
          u.forEach(A),
          (j = R(r)),
          W(z.$$.fragment, r),
          r.forEach(A),
          (x = R(y)),
          (w = I(y, "SECTION", { class: !0 }));
        var p = H(w);
        o = I(p, "H2", { class: !0 });
        var s = H(o);
        (d = B(s, "Artifacts")),
          s.forEach(A),
          (_ = R(p)),
          (D = I(p, "DIV", { class: !0 }));
        var b = H(D);
        (h = B(
          b,
          `Before undergrad, I considered studying pure math. Here are some summaries
      of what I was reading at the time.`
        )),
          b.forEach(A),
          (v = R(p)),
          W(S.$$.fragment, p),
          p.forEach(A),
          y.forEach(A),
          this.h();
      },
      h() {
        Y(t, "class", "layout-md space-y-12"),
          Y(T, "class", "heading2"),
          Y(l, "class", "layout-md py-5"),
          Y(o, "class", "heading2"),
          Y(D, "class", "mb-5"),
          Y(w, "class", "layout-md py-5"),
          Y(a, "class", "text-lg");
      },
      m(M, y) {
        q(e, M, y),
          ee(M, m, y),
          ee(M, a, y),
          g(a, t),
          g(t, n),
          g(n, i),
          g(a, c),
          g(a, l),
          g(l, T),
          g(T, $),
          g(l, j),
          q(z, l, null),
          g(a, x),
          g(a, w),
          g(w, o),
          g(o, d),
          g(w, _),
          g(w, D),
          g(D, h),
          g(w, v),
          q(S, w, null),
          (F = !0);
      },
      p: $e,
      i(M) {
        F ||
          (O(e.$$.fragment, M),
          O(z.$$.fragment, M),
          O(S.$$.fragment, M),
          (F = !0));
      },
      o(M) {
        J(e.$$.fragment, M), J(z.$$.fragment, M), J(S.$$.fragment, M), (F = !1);
      },
      d(M) {
        K(e, M), M && A(m), M && A(a), K(z), K(S);
      },
    }
  );
}
class Ce extends ae {
  constructor(e) {
    super(), se(this, e, null, Ue, ne, {});
  }
}
export { Ce as component };
