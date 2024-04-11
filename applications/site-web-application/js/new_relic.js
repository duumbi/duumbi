window.NREUM || (NREUM = {});
NREUM.init = {
  distributed_tracing: { enabled: true },
  privacy: { cookies_enabled: true },
  ajax: { deny_list: ["bam.eu01.nr-data.net"] },
};

NREUM.loader_config = {
  accountID: "4417619",
  trustKey: "4417619",
  agentID: "538585756",
  licenseKey: "NRJS-b9850b93fc86510ec34",
  applicationID: "538585756",
};
NREUM.info = {
  beacon: "bam.eu01.nr-data.net",
  errorBeacon: "bam.eu01.nr-data.net",
  licenseKey: "NRJS-b9850b93fc86510ec34",
  applicationID: "538585756",
  sa: 1,
}; /*! For license information please see nr-loader-spa-1.255.0.min.js.LICENSE.txt */
(() => {
  var e,
    t,
    r = {
      234: (e, t, r) => {
        "use strict";
        r.d(t, {
          P_: () => m,
          Mt: () => b,
          C5: () => s,
          DL: () => E,
          OP: () => N,
          lF: () => D,
          Yu: () => x,
          Dg: () => v,
          CX: () => c,
          GE: () => w,
          sU: () => O,
        });
        var n = r(8632),
          o = r(9567);
        const i = {
            beacon: n.ce.beacon,
            errorBeacon: n.ce.errorBeacon,
            licenseKey: void 0,
            applicationID: void 0,
            sa: void 0,
            queueTime: void 0,
            applicationTime: void 0,
            ttGuid: void 0,
            user: void 0,
            account: void 0,
            product: void 0,
            extra: void 0,
            jsAttributes: {},
            userAttributes: void 0,
            atts: void 0,
            transactionName: void 0,
            tNamePlain: void 0,
          },
          a = {};
        function s(e) {
          if (!e)
            throw new Error("All info objects require an agent identifier!");
          if (!a[e]) throw new Error("Info for ".concat(e, " was never set"));
          return a[e];
        }
        function c(e, t) {
          if (!e)
            throw new Error("All info objects require an agent identifier!");
          a[e] = (0, o.D)(t, i);
          const r = (0, n.ek)(e);
          r && (r.info = a[e]);
        }
        const u = (e) => {
          if (!e || "string" != typeof e) return !1;
          try {
            document.createDocumentFragment().querySelector(e);
          } catch {
            return !1;
          }
          return !0;
        };
        var d = r(7056),
          l = r(50);
        const f = "[data-nr-mask]",
          h = () => {
            const e = {
              mask_selector: "*",
              block_selector: "[data-nr-block]",
              mask_input_options: {
                color: !1,
                date: !1,
                "datetime-local": !1,
                email: !1,
                month: !1,
                number: !1,
                range: !1,
                search: !1,
                tel: !1,
                text: !1,
                time: !1,
                url: !1,
                week: !1,
                textarea: !1,
                select: !1,
                password: !0,
              },
            };
            return {
              feature_flags: [],
              proxy: { assets: void 0, beacon: void 0 },
              privacy: { cookies_enabled: !0 },
              ajax: {
                deny_list: void 0,
                block_internal: !0,
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0,
              },
              distributed_tracing: {
                enabled: void 0,
                exclude_newrelic_header: void 0,
                cors_use_newrelic_header: void 0,
                cors_use_tracecontext_headers: void 0,
                allowed_origins: void 0,
              },
              session: { domain: void 0, expiresMs: d.oD, inactiveMs: d.Hb },
              ssl: void 0,
              obfuscate: void 0,
              jserrors: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              metrics: { enabled: !0, autoStart: !0 },
              page_action: {
                enabled: !0,
                harvestTimeSeconds: 30,
                autoStart: !0,
              },
              page_view_event: { enabled: !0, autoStart: !0 },
              page_view_timing: {
                enabled: !0,
                harvestTimeSeconds: 30,
                long_task: !1,
                autoStart: !0,
              },
              session_trace: {
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0,
              },
              harvest: { tooManyRequestsDelay: 60 },
              session_replay: {
                autoStart: !0,
                enabled: !1,
                harvestTimeSeconds: 60,
                preload: !1,
                sampling_rate: 10,
                error_sampling_rate: 100,
                collect_fonts: !1,
                inline_images: !1,
                inline_stylesheet: !0,
                mask_all_inputs: !0,
                get mask_text_selector() {
                  return e.mask_selector;
                },
                set mask_text_selector(t) {
                  u(t)
                    ? (e.mask_selector = "".concat(t, ",").concat(f))
                    : "" === t || null === t
                      ? (e.mask_selector = f)
                      : (0, l.Z)(
                          "An invalid session_replay.mask_selector was provided. '*' will be used.",
                          t,
                        );
                },
                get block_class() {
                  return "nr-block";
                },
                get ignore_class() {
                  return "nr-ignore";
                },
                get mask_text_class() {
                  return "nr-mask";
                },
                get block_selector() {
                  return e.block_selector;
                },
                set block_selector(t) {
                  u(t)
                    ? (e.block_selector += ",".concat(t))
                    : "" !== t &&
                      (0, l.Z)(
                        "An invalid session_replay.block_selector was provided and will not be used",
                        t,
                      );
                },
                get mask_input_options() {
                  return e.mask_input_options;
                },
                set mask_input_options(t) {
                  t && "object" == typeof t
                    ? (e.mask_input_options = { ...t, password: !0 })
                    : (0, l.Z)(
                        "An invalid session_replay.mask_input_option was provided and will not be used",
                        t,
                      );
                },
              },
              spa: { enabled: !0, harvestTimeSeconds: 10, autoStart: !0 },
              soft_navigations: {
                enabled: !0,
                harvestTimeSeconds: 10,
                autoStart: !0,
              },
            };
          },
          p = {},
          g = "All configuration objects require an agent identifier!";
        function m(e) {
          if (!e) throw new Error(g);
          if (!p[e])
            throw new Error("Configuration for ".concat(e, " was never set"));
          return p[e];
        }
        function v(e, t) {
          if (!e) throw new Error(g);
          p[e] = (0, o.D)(t, h());
          const r = (0, n.ek)(e);
          r && (r.init = p[e]);
        }
        function b(e, t) {
          if (!e) throw new Error(g);
          var r = m(e);
          if (r) {
            for (var n = t.split("."), o = 0; o < n.length - 1; o++)
              if ("object" != typeof (r = r[n[o]])) return;
            r = r[n[n.length - 1]];
          }
          return r;
        }
        const y = {
            accountID: void 0,
            trustKey: void 0,
            agentID: void 0,
            licenseKey: void 0,
            applicationID: void 0,
            xpid: void 0,
          },
          A = {};
        function E(e) {
          if (!e)
            throw new Error(
              "All loader-config objects require an agent identifier!",
            );
          if (!A[e])
            throw new Error("LoaderConfig for ".concat(e, " was never set"));
          return A[e];
        }
        function w(e, t) {
          if (!e)
            throw new Error(
              "All loader-config objects require an agent identifier!",
            );
          A[e] = (0, o.D)(t, y);
          const r = (0, n.ek)(e);
          r && (r.loader_config = A[e]);
        }
        const x = (0, n.mF)().o;
        var _ = r(385),
          S = r(6818);
        const T = {
            buildEnv: S.Re,
            customTransaction: void 0,
            disabled: !1,
            distMethod: S.gF,
            isolatedBacklog: !1,
            loaderType: void 0,
            maxBytes: 3e4,
            offset: Math.floor(
              _._A?.performance?.timeOrigin ||
                _._A?.performance?.timing?.navigationStart ||
                Date.now(),
            ),
            onerror: void 0,
            origin: "" + _._A.location,
            ptid: void 0,
            releaseIds: {},
            appMetadata: {},
            session: void 0,
            xhrWrappable:
              "function" ==
              typeof _._A.XMLHttpRequest?.prototype?.addEventListener,
            version: S.q4,
            denyList: void 0,
            harvestCount: 0,
            timeKeeper: void 0,
          },
          R = {};
        function N(e) {
          if (!e)
            throw new Error("All runtime objects require an agent identifier!");
          if (!R[e])
            throw new Error("Runtime for ".concat(e, " was never set"));
          return R[e];
        }
        function O(e, t) {
          if (!e)
            throw new Error("All runtime objects require an agent identifier!");
          R[e] = (0, o.D)(t, T);
          const r = (0, n.ek)(e);
          r && (r.runtime = R[e]);
        }
        function D(e) {
          return (function (e) {
            try {
              const t = s(e);
              return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID;
            } catch (e) {
              return !1;
            }
          })(e);
        }
      },
      9567: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => o });
        var n = r(50);
        function o(e, t) {
          try {
            if (!e || "object" != typeof e)
              return (0, n.Z)(
                "Setting a Configurable requires an object as input",
              );
            if (!t || "object" != typeof t)
              return (0, n.Z)(
                "Setting a Configurable requires a model to set its initial properties",
              );
            const r = Object.create(
                Object.getPrototypeOf(t),
                Object.getOwnPropertyDescriptors(t),
              ),
              i = 0 === Object.keys(r).length ? e : r;
            for (let a in i)
              if (void 0 !== e[a])
                try {
                  Array.isArray(e[a]) && Array.isArray(t[a])
                    ? (r[a] = Array.from(new Set([...e[a], ...t[a]])))
                    : "object" == typeof e[a] && "object" == typeof t[a]
                      ? (r[a] = o(e[a], t[a]))
                      : (r[a] = e[a]);
                } catch (e) {
                  (0, n.Z)(
                    "An error occurred while setting a property of a Configurable",
                    e,
                  );
                }
            return r;
          } catch (e) {
            (0, n.Z)("An error occured while setting a Configurable", e);
          }
        }
      },
      6818: (e, t, r) => {
        "use strict";
        r.d(t, { Re: () => o, gF: () => i, lF: () => a, q4: () => n });
        const n = "1.255.0",
          o = "PROD",
          i = "CDN",
          a = "2.0.0-alpha.11";
      },
      385: (e, t, r) => {
        "use strict";
        r.d(t, {
          FN: () => c,
          IF: () => l,
          LW: () => a,
          Nk: () => h,
          Tt: () => u,
          _A: () => i,
          cv: () => p,
          iS: () => s,
          il: () => n,
          ux: () => d,
          v6: () => o,
          w1: () => f,
        });
        const n = "undefined" != typeof window && !!window.document,
          o =
            "undefined" != typeof WorkerGlobalScope &&
            (("undefined" != typeof self &&
              self instanceof WorkerGlobalScope &&
              self.navigator instanceof WorkerNavigator) ||
              ("undefined" != typeof globalThis &&
                globalThis instanceof WorkerGlobalScope &&
                globalThis.navigator instanceof WorkerNavigator)),
          i = n
            ? window
            : "undefined" != typeof WorkerGlobalScope &&
              (("undefined" != typeof self &&
                self instanceof WorkerGlobalScope &&
                self) ||
                ("undefined" != typeof globalThis &&
                  globalThis instanceof WorkerGlobalScope &&
                  globalThis)),
          a = "complete" === i?.document?.readyState,
          s = Boolean("hidden" === i?.document?.visibilityState),
          c = "" + i?.location,
          u = /iPad|iPhone|iPod/.test(i.navigator?.userAgent),
          d = u && "undefined" == typeof SharedWorker,
          l = (() => {
            const e = i.navigator?.userAgent?.match(/Firefox[/\s](\d+\.\d+)/);
            return Array.isArray(e) && e.length >= 2 ? +e[1] : 0;
          })(),
          f = Boolean(n && window.document.documentMode),
          h = !!i.navigator?.sendBeacon,
          p = Math.floor(
            i?.performance?.timeOrigin ||
              i?.performance?.timing?.navigationStart ||
              Date.now(),
          );
      },
      1117: (e, t, r) => {
        "use strict";
        r.d(t, { w: () => i });
        var n = r(50);
        const o = { agentIdentifier: "", ee: void 0 };
        class i {
          constructor(e) {
            try {
              if ("object" != typeof e)
                return (0, n.Z)("shared context requires an object as input");
              (this.sharedContext = {}),
                Object.assign(this.sharedContext, o),
                Object.entries(e).forEach((e) => {
                  let [t, r] = e;
                  Object.keys(o).includes(t) && (this.sharedContext[t] = r);
                });
            } catch (e) {
              (0, n.Z)("An error occurred while setting SharedContext", e);
            }
          }
        }
      },
      8e3: (e, t, r) => {
        "use strict";
        r.d(t, { LP: () => l, RP: () => c, o5: () => u });
        var n = r(8325),
          o = r(1284),
          i = r(4322),
          a = r(3325);
        const s = {};
        function c(e, t) {
          const r = { staged: !1, priority: a.p[t] || 0 };
          d(e), s[e].get(t) || s[e].set(t, r);
        }
        function u(e, t) {
          d(e), s[e].get(t) && s[e].delete(t), s[e].size && f(e);
        }
        function d(e) {
          if (!e) throw new Error("agentIdentifier required");
          s[e] || (s[e] = new Map());
        }
        function l() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "feature",
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ((d(e), !e || !s[e].get(t) || r)) return h(e, t);
          (s[e].get(t).staged = !0), f(e);
        }
        function f(e) {
          const t = [...s[e]];
          t.every((e) => {
            let [t, r] = e;
            return r.staged;
          }) &&
            (t.sort((e, t) => e[1].priority - t[1].priority),
            t.forEach((t) => {
              let [r] = t;
              s[e].delete(r), h(e, r);
            }));
        }
        function h(e, t) {
          const r = e ? n.ee.get(e) : n.ee,
            a = i.X.handlers;
          if (r.backlog && a) {
            var s = r.backlog[t],
              c = a[t];
            if (c) {
              for (var u = 0; s && u < s.length; ++u) p(s[u], c);
              (0, o.D)(c, function (e, t) {
                (0, o.D)(t, function (t, r) {
                  r[0].on(e, r[1]);
                });
              });
            }
            r.isolatedBacklog || delete a[t],
              (r.backlog[t] = null),
              r.emit("drain-" + t, []);
          }
        }
        function p(e, t) {
          var r = e[1];
          (0, o.D)(t[r], function (t, r) {
            var n = e[0];
            if (r[0] === n) {
              var o = r[1],
                i = e[3],
                a = e[2];
              o.apply(i, a);
            }
          });
        }
      },
      8325: (e, t, r) => {
        "use strict";
        r.d(t, { A: () => c, ee: () => u });
        var n = r(8632),
          o = r(2210),
          i = r(234);
        class a {
          constructor(e) {
            this.contextId = e;
          }
        }
        var s = r(3117);
        const c = "nr@context:".concat(s.a),
          u = (function e(t, r) {
            var n = {},
              s = {},
              d = {},
              l = !1;
            try {
              l = 16 === r.length && (0, i.OP)(r).isolatedBacklog;
            } catch (e) {}
            var f = {
              on: p,
              addEventListener: p,
              removeEventListener: function (e, t) {
                var r = n[e];
                if (!r) return;
                for (var o = 0; o < r.length; o++) r[o] === t && r.splice(o, 1);
              },
              emit: function (e, r, n, o, i) {
                !1 !== i && (i = !0);
                if (u.aborted && !o) return;
                t && i && t.emit(e, r, n);
                for (var a = h(n), c = g(e), d = c.length, l = 0; l < d; l++)
                  c[l].apply(a, r);
                var p = v()[s[e]];
                p && p.push([f, e, r, a]);
                return a;
              },
              get: m,
              listeners: g,
              context: h,
              buffer: function (e, t) {
                const r = v();
                if (((t = t || "feature"), f.aborted)) return;
                Object.entries(e || {}).forEach((e) => {
                  let [n, o] = e;
                  (s[o] = t), t in r || (r[t] = []);
                });
              },
              abort: function () {
                (f._aborted = !0),
                  Object.keys(f.backlog).forEach((e) => {
                    delete f.backlog[e];
                  });
              },
              isBuffering: function (e) {
                return !!v()[s[e]];
              },
              debugId: r,
              backlog: l
                ? {}
                : t && "object" == typeof t.backlog
                  ? t.backlog
                  : {},
              isolatedBacklog: l,
            };
            return (
              Object.defineProperty(f, "aborted", {
                get: () => {
                  let e = f._aborted || !1;
                  return e || (t && (e = t.aborted), e);
                },
              }),
              f
            );
            function h(e) {
              return e && e instanceof a
                ? e
                : e
                  ? (0, o.X)(e, c, () => new a(c))
                  : new a(c);
            }
            function p(e, t) {
              n[e] = g(e).concat(t);
            }
            function g(e) {
              return n[e] || [];
            }
            function m(t) {
              return (d[t] = d[t] || e(f, t));
            }
            function v() {
              return f.backlog;
            }
          })(void 0, "globalEE"),
          d = (0, n.fP)();
        d.ee || (d.ee = u);
      },
      5546: (e, t, r) => {
        "use strict";
        r.d(t, { E: () => n, p: () => o });
        var n = r(8325).ee.get("handle");
        function o(e, t, r, o, i) {
          i
            ? (i.buffer([e], o), i.emit(e, t, r))
            : (n.buffer([e], o), n.emit(e, t, r));
        }
      },
      4322: (e, t, r) => {
        "use strict";
        r.d(t, { X: () => i });
        var n = r(5546);
        i.on = a;
        var o = (i.handlers = {});
        function i(e, t, r, i) {
          a(i || n.E, o, e, t, r);
        }
        function a(e, t, r, o, i) {
          i || (i = "feature"), e || (e = n.E);
          var a = (t[i] = t[i] || {});
          (a[r] = a[r] || []).push([e, o]);
        }
      },
      3239: (e, t, r) => {
        "use strict";
        r.d(t, { bP: () => s, iz: () => c, m$: () => a });
        var n = r(385);
        let o = !1,
          i = !1;
        try {
          const e = {
            get passive() {
              return (o = !0), !1;
            },
            get signal() {
              return (i = !0), !1;
            },
          };
          n._A.addEventListener("test", null, e),
            n._A.removeEventListener("test", null, e);
        } catch (e) {}
        function a(e, t) {
          return o || i ? { capture: !!e, passive: o, signal: t } : !!e;
        }
        function s(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          window.addEventListener(e, t, a(r, n));
        }
        function c(e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            n = arguments.length > 3 ? arguments[3] : void 0;
          document.addEventListener(e, t, a(r, n));
        }
      },
      3117: (e, t, r) => {
        "use strict";
        r.d(t, { a: () => n });
        const n = (0, r(4402).Rl)();
      },
      4402: (e, t, r) => {
        "use strict";
        r.d(t, { Ht: () => u, M: () => c, Rl: () => a, ky: () => s });
        var n = r(385);
        const o = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
        function i(e, t) {
          return e ? 15 & e[t] : (16 * Math.random()) | 0;
        }
        function a() {
          const e = n._A?.crypto || n._A?.msCrypto;
          let t,
            r = 0;
          return (
            e &&
              e.getRandomValues &&
              (t = e.getRandomValues(new Uint8Array(30))),
            o
              .split("")
              .map((e) =>
                "x" === e
                  ? i(t, r++).toString(16)
                  : "y" === e
                    ? ((3 & i()) | 8).toString(16)
                    : e,
              )
              .join("")
          );
        }
        function s(e) {
          const t = n._A?.crypto || n._A?.msCrypto;
          let r,
            o = 0;
          t && t.getRandomValues && (r = t.getRandomValues(new Uint8Array(e)));
          const a = [];
          for (var s = 0; s < e; s++) a.push(i(r, o++).toString(16));
          return a.join("");
        }
        function c() {
          return s(16);
        }
        function u() {
          return s(32);
        }
      },
      7056: (e, t, r) => {
        "use strict";
        r.d(t, {
          Bq: () => n,
          Hb: () => a,
          IK: () => u,
          K4: () => o,
          oD: () => i,
          uT: () => c,
          wO: () => s,
        });
        const n = "NRBA",
          o = "SESSION",
          i = 144e5,
          a = 18e5,
          s = {
            PAUSE: "session-pause",
            RESET: "session-reset",
            RESUME: "session-resume",
            UPDATE: "session-update",
          },
          c = { SAME_TAB: "same-tab", CROSS_TAB: "cross-tab" },
          u = { OFF: 0, FULL: 1, ERROR: 2 };
      },
      7894: (e, t, r) => {
        "use strict";
        function n() {
          return Math.floor(performance.now());
        }
        r.d(t, { z: () => n });
      },
      7243: (e, t, r) => {
        "use strict";
        r.d(t, { e: () => o });
        var n = r(385);
        function o(e) {
          if (0 === (e || "").indexOf("data:")) return { protocol: "data" };
          try {
            const t = new URL(e, location.href),
              r = {
                port: t.port,
                hostname: t.hostname,
                pathname: t.pathname,
                search: t.search,
                protocol: t.protocol.slice(0, t.protocol.indexOf(":")),
                sameOrigin:
                  t.protocol === n._A?.location?.protocol &&
                  t.host === n._A?.location?.host,
              };
            return (
              (r.port && "" !== r.port) ||
                ("http:" === t.protocol && (r.port = "80"),
                "https:" === t.protocol && (r.port = "443")),
              r.pathname && "" !== r.pathname
                ? r.pathname.startsWith("/") ||
                  (r.pathname = "/".concat(r.pathname))
                : (r.pathname = "/"),
              r
            );
          } catch (e) {
            return {};
          }
        }
      },
      50: (e, t, r) => {
        "use strict";
        function n(e, t) {
          "function" == typeof console.warn &&
            (console.warn("New Relic: ".concat(e)), t && console.warn(t));
        }
        r.d(t, { Z: () => n });
      },
      2825: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => c, T: () => s });
        var n = r(8325),
          o = r(385);
        const i = "newrelic";
        const a = new Set(),
          s = {};
        function c(e, t) {
          const r = n.ee.get(t);
          (s[t] ??= {}),
            e &&
              "object" == typeof e &&
              (a.has(t) ||
                (r.emit("rumresp", [e]),
                (s[t] = e),
                a.add(t),
                (function () {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  try {
                    o._A.dispatchEvent(new CustomEvent(i, { detail: e }));
                  } catch (e) {}
                })({ loaded: !0 })));
        }
      },
      2210: (e, t, r) => {
        "use strict";
        r.d(t, { X: () => o });
        var n = Object.prototype.hasOwnProperty;
        function o(e, t, r) {
          if (n.call(e, t)) return e[t];
          var o = r();
          if (Object.defineProperty && Object.keys)
            try {
              return (
                Object.defineProperty(e, t, {
                  value: o,
                  writable: !0,
                  enumerable: !1,
                }),
                o
              );
            } catch (e) {}
          return (e[t] = o), o;
        }
      },
      7872: (e, t, r) => {
        "use strict";
        function n(e) {
          var t = this;
          let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 500,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          const o = n?.leading || !1;
          let i;
          return function () {
            for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++)
              a[s] = arguments[s];
            o &&
              void 0 === i &&
              (e.apply(t, a),
              (i = setTimeout(() => {
                i = clearTimeout(i);
              }, r))),
              o ||
                (clearTimeout(i),
                (i = setTimeout(() => {
                  e.apply(t, a);
                }, r)));
          };
        }
        function o(e) {
          var t = this;
          let r = !1;
          return function () {
            if (!r) {
              r = !0;
              for (
                var n = arguments.length, o = new Array(n), i = 0;
                i < n;
                i++
              )
                o[i] = arguments[i];
              e.apply(t, o);
            }
          };
        }
        r.d(t, { D: () => n, Z: () => o });
      },
      1284: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => n });
        const n = (e, t) =>
          Object.entries(e || {}).map((e) => {
            let [r, n] = e;
            return t(r, n);
          });
      },
      4351: (e, t, r) => {
        "use strict";
        r.d(t, { P: () => i });
        var n = r(8325);
        const o = () => {
          const e = new WeakSet();
          return (t, r) => {
            if ("object" == typeof r && null !== r) {
              if (e.has(r)) return;
              e.add(r);
            }
            return r;
          };
        };
        function i(e) {
          try {
            return JSON.stringify(e, o());
          } catch (e) {
            try {
              n.ee.emit("internal-error", [e]);
            } catch (e) {}
          }
        }
      },
      3960: (e, t, r) => {
        "use strict";
        r.d(t, { KB: () => a, b2: () => i });
        var n = r(3239);
        function o() {
          return (
            "undefined" == typeof document || "complete" === document.readyState
          );
        }
        function i(e, t) {
          if (o()) return e();
          (0, n.bP)("load", e, t);
        }
        function a(e) {
          if (o()) return e();
          (0, n.iz)("DOMContentLoaded", e);
        }
      },
      8632: (e, t, r) => {
        "use strict";
        r.d(t, {
          EZ: () => d,
          ce: () => i,
          ek: () => u,
          fP: () => a,
          gG: () => l,
          h5: () => c,
          mF: () => s,
        });
        var n = r(385),
          o = r(7894);
        const i = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net" };
        function a() {
          return (
            n._A.NREUM || (n._A.NREUM = {}),
            void 0 === n._A.newrelic && (n._A.newrelic = n._A.NREUM),
            n._A.NREUM
          );
        }
        function s() {
          let e = a();
          return (
            e.o ||
              (e.o = {
                ST: n._A.setTimeout,
                SI: n._A.setImmediate,
                CT: n._A.clearTimeout,
                XHR: n._A.XMLHttpRequest,
                REQ: n._A.Request,
                EV: n._A.Event,
                PR: n._A.Promise,
                MO: n._A.MutationObserver,
                FETCH: n._A.fetch,
              }),
            e
          );
        }
        function c(e, t) {
          let r = a();
          (r.initializedAgents ??= {}),
            (t.initializedAt = { ms: (0, o.z)(), date: new Date() }),
            (r.initializedAgents[e] = t);
        }
        function u(e) {
          let t = a();
          return t.initializedAgents?.[e];
        }
        function d(e, t) {
          a()[e] = t;
        }
        function l() {
          return (
            (function () {
              let e = a();
              const t = e.info || {};
              e.info = { beacon: i.beacon, errorBeacon: i.errorBeacon, ...t };
            })(),
            (function () {
              let e = a();
              const t = e.init || {};
              e.init = { ...t };
            })(),
            s(),
            (function () {
              let e = a();
              const t = e.loader_config || {};
              e.loader_config = { ...t };
            })(),
            a()
          );
        }
      },
      7956: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => o });
        var n = r(3239);
        function o(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 ? arguments[2] : void 0,
            o = arguments.length > 3 ? arguments[3] : void 0;
          (0, n.iz)(
            "visibilitychange",
            function () {
              if (t) return void ("hidden" === document.visibilityState && e());
              e(document.visibilityState);
            },
            r,
            o,
          );
        }
      },
      7806: (e, t, r) => {
        "use strict";
        r.d(t, {
          em: () => b,
          u5: () => R,
          QU: () => D,
          _L: () => j,
          Gm: () => M,
          Lg: () => L,
          BV: () => Z,
          Kf: () => Y,
        });
        var n = r(8325),
          o = r(3117);
        const i = "nr@original:".concat(o.a);
        var a = Object.prototype.hasOwnProperty,
          s = !1;
        function c(e, t) {
          return (
            e || (e = n.ee),
            (r.inPlace = function (e, t, n, o, i) {
              n || (n = "");
              const a = "-" === n.charAt(0);
              for (let s = 0; s < t.length; s++) {
                const c = t[s],
                  u = e[c];
                d(u) || (e[c] = r(u, a ? c + n : n, o, c, i));
              }
            }),
            (r.flag = i),
            r
          );
          function r(t, r, n, s, c) {
            return d(t)
              ? t
              : (r || (r = ""),
                (nrWrapper[i] = t),
                (function (e, t, r) {
                  if (Object.defineProperty && Object.keys)
                    try {
                      return (
                        Object.keys(e).forEach(function (r) {
                          Object.defineProperty(t, r, {
                            get: function () {
                              return e[r];
                            },
                            set: function (t) {
                              return (e[r] = t), t;
                            },
                          });
                        }),
                        t
                      );
                    } catch (e) {
                      u([e], r);
                    }
                  for (var n in e) a.call(e, n) && (t[n] = e[n]);
                })(t, nrWrapper, e),
                nrWrapper);
            function nrWrapper() {
              var i, a, d, l;
              try {
                (a = this),
                  (i = [...arguments]),
                  (d = "function" == typeof n ? n(i, a) : n || {});
              } catch (t) {
                u([t, "", [i, a, s], d], e);
              }
              o(r + "start", [i, a, s], d, c);
              try {
                return (l = t.apply(a, i));
              } catch (e) {
                throw (o(r + "err", [i, a, e], d, c), e);
              } finally {
                o(r + "end", [i, a, l], d, c);
              }
            }
          }
          function o(r, n, o, i) {
            if (!s || t) {
              var a = s;
              s = !0;
              try {
                e.emit(r, n, o, t, i);
              } catch (t) {
                u([t, r, n, o], e);
              }
              s = a;
            }
          }
        }
        function u(e, t) {
          t || (t = n.ee);
          try {
            t.emit("internal-error", e);
          } catch (e) {}
        }
        function d(e) {
          return !(e && "function" == typeof e && e.apply && !e[i]);
        }
        var l = r(2210),
          f = r(385);
        const h = {},
          p = f._A.XMLHttpRequest,
          g = "addEventListener",
          m = "removeEventListener",
          v = "nr@wrapped:".concat(n.A);
        function b(e) {
          var t = (function (e) {
            return (e || n.ee).get("events");
          })(e);
          if (h[t.debugId]++) return t;
          h[t.debugId] = 1;
          var r = c(t, !0);
          function o(e) {
            r.inPlace(e, [g, m], "-", i);
          }
          function i(e, t) {
            return e[1];
          }
          return (
            "getPrototypeOf" in Object &&
              (f.il && y(document, o), y(f._A, o), y(p.prototype, o)),
            t.on(g + "-start", function (e, t) {
              var n = e[1];
              if (
                null !== n &&
                ("function" == typeof n || "object" == typeof n)
              ) {
                var o = (0, l.X)(n, v, function () {
                  var e = {
                    object: function () {
                      if ("function" != typeof n.handleEvent) return;
                      return n.handleEvent.apply(n, arguments);
                    },
                    function: n,
                  }[typeof n];
                  return e ? r(e, "fn-", null, e.name || "anonymous") : n;
                });
                this.wrapped = e[1] = o;
              }
            }),
            t.on(m + "-start", function (e) {
              e[1] = this.wrapped || e[1];
            }),
            t
          );
        }
        function y(e, t) {
          let r = e;
          for (
            ;
            "object" == typeof r && !Object.prototype.hasOwnProperty.call(r, g);

          )
            r = Object.getPrototypeOf(r);
          for (
            var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), i = 2;
            i < n;
            i++
          )
            o[i - 2] = arguments[i];
          r && t(r, ...o);
        }
        var A = "fetch-",
          E = A + "body-",
          w = ["arrayBuffer", "blob", "json", "text", "formData"],
          x = f._A.Request,
          _ = f._A.Response,
          S = "prototype";
        const T = {};
        function R(e) {
          const t = (function (e) {
            return (e || n.ee).get("fetch");
          })(e);
          if (!(x && _ && f._A.fetch)) return t;
          if (T[t.debugId]++) return t;
          function r(e, r, o) {
            var i = e[r];
            "function" == typeof i &&
              (e[r] = function () {
                var e,
                  r = [...arguments],
                  a = {};
                t.emit(o + "before-start", [r], a),
                  a[n.A] && a[n.A].dt && (e = a[n.A].dt);
                var s = i.apply(this, r);
                return (
                  t.emit(o + "start", [r, e], s),
                  s.then(
                    function (e) {
                      return t.emit(o + "end", [null, e], s), e;
                    },
                    function (e) {
                      throw (t.emit(o + "end", [e], s), e);
                    },
                  )
                );
              });
          }
          return (
            (T[t.debugId] = 1),
            w.forEach((e) => {
              r(x[S], e, E), r(_[S], e, E);
            }),
            r(f._A, "fetch", A),
            t.on(A + "end", function (e, r) {
              var n = this;
              if (r) {
                var o = r.headers.get("content-length");
                null !== o && (n.rxSize = o), t.emit(A + "done", [null, r], n);
              } else t.emit(A + "done", [e], n);
            }),
            t
          );
        }
        const N = {},
          O = ["pushState", "replaceState"];
        function D(e) {
          const t = (function (e) {
            return (e || n.ee).get("history");
          })(e);
          return (
            !f.il ||
              N[t.debugId]++ ||
              ((N[t.debugId] = 1), c(t).inPlace(window.history, O, "-")),
            t
          );
        }
        var P = r(3239);
        const I = {},
          C = ["appendChild", "insertBefore", "replaceChild"];
        function j(e) {
          const t = (function (e) {
            return (e || n.ee).get("jsonp");
          })(e);
          if (!f.il || I[t.debugId]) return t;
          I[t.debugId] = !0;
          var r = c(t),
            o = /[?&](?:callback|cb)=([^&#]+)/,
            i = /(.*)\.([^.]+)/,
            a = /^(\w+)(\.|$)(.*)$/;
          function s(e, t) {
            if (!e) return t;
            const r = e.match(a),
              n = r[1];
            return s(r[3], t[n]);
          }
          return (
            r.inPlace(Node.prototype, C, "dom-"),
            t.on("dom-start", function (e) {
              !(function (e) {
                if (
                  !e ||
                  "string" != typeof e.nodeName ||
                  "script" !== e.nodeName.toLowerCase()
                )
                  return;
                if ("function" != typeof e.addEventListener) return;
                var n = ((a = e.src), (c = a.match(o)), c ? c[1] : null);
                var a, c;
                if (!n) return;
                var u = (function (e) {
                  var t = e.match(i);
                  if (t && t.length >= 3)
                    return { key: t[2], parent: s(t[1], window) };
                  return { key: e, parent: window };
                })(n);
                if ("function" != typeof u.parent[u.key]) return;
                var d = {};
                function l() {
                  t.emit("jsonp-end", [], d),
                    e.removeEventListener("load", l, (0, P.m$)(!1)),
                    e.removeEventListener("error", f, (0, P.m$)(!1));
                }
                function f() {
                  t.emit("jsonp-error", [], d),
                    t.emit("jsonp-end", [], d),
                    e.removeEventListener("load", l, (0, P.m$)(!1)),
                    e.removeEventListener("error", f, (0, P.m$)(!1));
                }
                r.inPlace(u.parent, [u.key], "cb-", d),
                  e.addEventListener("load", l, (0, P.m$)(!1)),
                  e.addEventListener("error", f, (0, P.m$)(!1)),
                  t.emit("new-jsonp", [e.src], d);
              })(e[0]);
            }),
            t
          );
        }
        const k = {};
        function M(e) {
          const t = (function (e) {
            return (e || n.ee).get("mutation");
          })(e);
          if (!f.il || k[t.debugId]) return t;
          k[t.debugId] = !0;
          var r = c(t),
            o = f._A.MutationObserver;
          return (
            o &&
              ((window.MutationObserver = function (e) {
                return this instanceof o
                  ? new o(r(e, "fn-"))
                  : o.apply(this, arguments);
              }),
              (MutationObserver.prototype = o.prototype)),
            t
          );
        }
        const H = {};
        function L(e) {
          const t = (function (e) {
            return (e || n.ee).get("promise");
          })(e);
          if (H[t.debugId]) return t;
          H[t.debugId] = !0;
          var r = t.context,
            o = c(t),
            a = f._A.Promise;
          return (
            a &&
              (function () {
                function e(r) {
                  var n = t.context(),
                    i = o(r, "executor-", n, null, !1);
                  const s = Reflect.construct(a, [i], e);
                  return (
                    (t.context(s).getCtx = function () {
                      return n;
                    }),
                    s
                  );
                }
                (f._A.Promise = e),
                  Object.defineProperty(e, "name", { value: "Promise" }),
                  (e.toString = function () {
                    return a.toString();
                  }),
                  Object.setPrototypeOf(e, a),
                  ["all", "race"].forEach(function (r) {
                    const n = a[r];
                    e[r] = function (e) {
                      let o = !1;
                      [...(e || [])].forEach((e) => {
                        this.resolve(e).then(a("all" === r), a(!1));
                      });
                      const i = n.apply(this, arguments);
                      return i;
                      function a(e) {
                        return function () {
                          t.emit("propagate", [null, !o], i, !1, !1),
                            (o = o || !e);
                        };
                      }
                    };
                  }),
                  ["resolve", "reject"].forEach(function (r) {
                    const n = a[r];
                    e[r] = function (e) {
                      const r = n.apply(this, arguments);
                      return (
                        e !== r && t.emit("propagate", [e, !0], r, !1, !1), r
                      );
                    };
                  }),
                  (e.prototype = a.prototype);
                const n = a.prototype.then;
                (a.prototype.then = function () {
                  var e = this,
                    i = r(e);
                  i.promise = e;
                  for (
                    var a = arguments.length, s = new Array(a), c = 0;
                    c < a;
                    c++
                  )
                    s[c] = arguments[c];
                  (s[0] = o(s[0], "cb-", i, null, !1)),
                    (s[1] = o(s[1], "cb-", i, null, !1));
                  const u = n.apply(this, s);
                  return (
                    (i.nextPromise = u),
                    t.emit("propagate", [e, !0], u, !1, !1),
                    u
                  );
                }),
                  (a.prototype.then[i] = n),
                  t.on("executor-start", function (e) {
                    (e[0] = o(e[0], "resolve-", this, null, !1)),
                      (e[1] = o(e[1], "resolve-", this, null, !1));
                  }),
                  t.on("executor-err", function (e, t, r) {
                    e[1](r);
                  }),
                  t.on("cb-end", function (e, r, n) {
                    t.emit("propagate", [n, !0], this.nextPromise, !1, !1);
                  }),
                  t.on("propagate", function (e, r, n) {
                    (this.getCtx && !r) ||
                      (this.getCtx = function () {
                        if (e instanceof Promise) var r = t.context(e);
                        return r && r.getCtx ? r.getCtx() : this;
                      });
                  });
              })(),
            t
          );
        }
        const z = {},
          U = "setTimeout",
          F = "setInterval",
          B = "clearTimeout",
          q = "-start",
          V = "-",
          G = [U, "setImmediate", F, B, "clearImmediate"];
        function Z(e) {
          const t = (function (e) {
            return (e || n.ee).get("timer");
          })(e);
          if (z[t.debugId]++) return t;
          z[t.debugId] = 1;
          var r = c(t);
          return (
            r.inPlace(f._A, G.slice(0, 2), U + V),
            r.inPlace(f._A, G.slice(2, 3), F + V),
            r.inPlace(f._A, G.slice(3), B + V),
            t.on(F + q, function (e, t, n) {
              e[0] = r(e[0], "fn-", null, n);
            }),
            t.on(U + q, function (e, t, n) {
              (this.method = n),
                (this.timerDuration = isNaN(e[1]) ? 0 : +e[1]),
                (e[0] = r(e[0], "fn-", this, n));
            }),
            t
          );
        }
        var W = r(50);
        const K = {},
          X = ["open", "send"];
        function Y(e) {
          var t = e || n.ee;
          const r = (function (e) {
            return (e || n.ee).get("xhr");
          })(t);
          if (K[r.debugId]++) return r;
          (K[r.debugId] = 1), b(t);
          var o = c(r),
            i = f._A.XMLHttpRequest,
            a = f._A.MutationObserver,
            s = f._A.Promise,
            u = f._A.setInterval,
            d = "readystatechange",
            l = [
              "onload",
              "onerror",
              "onabort",
              "onloadstart",
              "onloadend",
              "onprogress",
              "ontimeout",
            ],
            h = [],
            p = (f._A.XMLHttpRequest = function (e) {
              const t = new i(e),
                n = r.context(t);
              try {
                r.emit("new-xhr", [t], n),
                  t.addEventListener(
                    d,
                    ((a = n),
                    function () {
                      var e = this;
                      e.readyState > 3 &&
                        !a.resolved &&
                        ((a.resolved = !0), r.emit("xhr-resolved", [], e)),
                        o.inPlace(e, l, "fn-", E);
                    }),
                    (0, P.m$)(!1),
                  );
              } catch (e) {
                (0, W.Z)("An error occurred while intercepting XHR", e);
                try {
                  r.emit("internal-error", [e]);
                } catch (e) {}
              }
              var a;
              return t;
            });
          function g(e, t) {
            o.inPlace(t, ["onreadystatechange"], "fn-", E);
          }
          if (
            ((function (e, t) {
              for (var r in e) t[r] = e[r];
            })(i, p),
            (p.prototype = i.prototype),
            o.inPlace(p.prototype, X, "-xhr-", E),
            r.on("send-xhr-start", function (e, t) {
              g(e, t),
                (function (e) {
                  h.push(e),
                    a && (m ? m.then(A) : u ? u(A) : ((v = -v), (y.data = v)));
                })(t);
            }),
            r.on("open-xhr-start", g),
            a)
          ) {
            var m = s && s.resolve();
            if (!u && !s) {
              var v = 1,
                y = document.createTextNode(v);
              new a(A).observe(y, { characterData: !0 });
            }
          } else
            t.on("fn-end", function (e) {
              (e[0] && e[0].type === d) || A();
            });
          function A() {
            for (var e = 0; e < h.length; e++) g(0, h[e]);
            h.length && (h = []);
          }
          function E(e, t) {
            return t;
          }
          return r;
        }
      },
      7825: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(3325).D.ajax;
      },
      6660: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(3325).D.jserrors;
      },
      3081: (e, t, r) => {
        "use strict";
        r.d(t, {
          gF: () => i,
          mY: () => o,
          t9: () => n,
          vz: () => s,
          xS: () => a,
        });
        const n = r(3325).D.metrics,
          o = "sm",
          i = "cm",
          a = "storeSupportabilityMetrics",
          s = "storeEventMetrics";
      },
      4649: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(3325).D.pageAction;
      },
      7633: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(3325).D.pageViewEvent;
      },
      9251: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(3325).D.pageViewTiming;
      },
      7144: (e, t, r) => {
        "use strict";
        r.d(t, {
          Ef: () => i,
          J0: () => f,
          Mi: () => l,
          Vb: () => a,
          Ye: () => c,
          fm: () => u,
          i9: () => s,
          t9: () => o,
          u0: () => d,
        });
        var n = r(7056);
        const o = r(3325).D.sessionReplay,
          i = { RECORD: "recordReplay", PAUSE: "pauseReplay" },
          a = 0.12,
          s = {
            DomContentLoaded: 0,
            Load: 1,
            FullSnapshot: 2,
            IncrementalSnapshot: 3,
            Meta: 4,
            Custom: 5,
          },
          c = 1e6,
          u = 64e3,
          d = { [n.IK.ERROR]: 15e3, [n.IK.FULL]: 3e5, [n.IK.OFF]: 0 },
          l = {
            RESET: { message: "Session was reset", sm: "Reset" },
            IMPORT: { message: "Recorder failed to import", sm: "Import" },
            TOO_MANY: { message: "429: Too Many Requests", sm: "Too-Many" },
            TOO_BIG: { message: "Payload was too large", sm: "Too-Big" },
            CROSS_TAB: {
              message: "Session Entity was set to OFF on another tab",
              sm: "Cross-Tab",
            },
            ENTITLEMENTS: {
              message: "Session Replay is not allowed and will not be started",
              sm: "Entitlement",
            },
          },
          f = 5e3;
      },
      3614: (e, t, r) => {
        "use strict";
        r.d(t, {
          BST_RESOURCE: () => o,
          END: () => s,
          FEATURE_NAME: () => n,
          FN_END: () => u,
          FN_START: () => c,
          PUSH_STATE: () => d,
          RESOURCE: () => i,
          START: () => a,
        });
        const n = r(3325).D.sessionTrace,
          o = "bstResource",
          i = "resource",
          a = "-start",
          s = "-end",
          c = "fn" + a,
          u = "fn" + s,
          d = "pushState";
      },
      6216: (e, t, r) => {
        "use strict";
        r.d(t, {
          K8: () => s,
          QZ: () => c,
          cS: () => i,
          sE: () => o,
          t9: () => a,
          vh: () => u,
        });
        var n = r(3325);
        const o = ["click", "keydown", "submit"],
          i = "api",
          a = n.D.softNav,
          s = { INITIAL_PAGE_LOAD: "", ROUTE_CHANGE: 1, UNSPECIFIED: 2 },
          c = { INTERACTION: 1, AJAX: 2, CUSTOM_END: 3, CUSTOM_TRACER: 4 },
          u = { IP: "in progress", FIN: "finished", CAN: "cancelled" };
      },
      7836: (e, t, r) => {
        "use strict";
        r.d(t, {
          BODY: () => w,
          CB_END: () => x,
          CB_START: () => u,
          END: () => E,
          FEATURE_NAME: () => o,
          FETCH: () => S,
          FETCH_BODY: () => v,
          FETCH_DONE: () => m,
          FETCH_START: () => g,
          FN_END: () => c,
          FN_START: () => s,
          INTERACTION: () => f,
          INTERACTION_API: () => d,
          INTERACTION_EVENTS: () => i,
          JSONP_END: () => b,
          JSONP_NODE: () => p,
          JS_TIME: () => _,
          MAX_TIMER_BUDGET: () => a,
          REMAINING: () => l,
          SPA_NODE: () => h,
          START: () => A,
          originalSetTimeout: () => y,
        });
        var n = r(234);
        const o = r(3325).D.spa,
          i = ["click", "submit", "keypress", "keydown", "keyup", "change"],
          a = 999,
          s = "fn-start",
          c = "fn-end",
          u = "cb-start",
          d = "api-ixn-",
          l = "remaining",
          f = "interaction",
          h = "spaNode",
          p = "jsonpNode",
          g = "fetch-start",
          m = "fetch-done",
          v = "fetch-body-",
          b = "jsonp-end",
          y = n.Yu.ST,
          A = "-start",
          E = "-end",
          w = "-body",
          x = "cb" + E,
          _ = "jsTime",
          S = "fetch";
      },
      5938: (e, t, r) => {
        "use strict";
        r.d(t, { W: () => o });
        var n = r(8325);
        class o {
          constructor(e, t, r) {
            (this.agentIdentifier = e),
              (this.aggregator = t),
              (this.ee = n.ee.get(e)),
              (this.featureName = r),
              (this.blocked = !1);
          }
        }
      },
      2758: (e, t, r) => {
        "use strict";
        r.d(t, { j: () => E });
        var n = r(3325),
          o = r(234),
          i = r(5546),
          a = r(8325),
          s = r(8e3),
          c = r(3960),
          u = r(385),
          d = r(50),
          l = r(3081),
          f = r(8632),
          h = r(7144);
        const p = [
            "setErrorHandler",
            "finished",
            "addToTrace",
            "addRelease",
            "addPageAction",
            "setCurrentRouteName",
            "setPageViewName",
            "setCustomAttribute",
            "interaction",
            "noticeError",
            "setUserId",
            "setApplicationVersion",
            "start",
            "recordReplay",
            "pauseReplay",
            h.Ef.RECORD,
            h.Ef.PAUSE,
          ],
          g = ["setErrorHandler", "finished", "addToTrace", "addRelease"];
        var m = r(7894);
        function v() {
          const e = (0, f.gG)();
          p.forEach((t) => {
            e[t] = function () {
              for (
                var r = arguments.length, n = new Array(r), o = 0;
                o < r;
                o++
              )
                n[o] = arguments[o];
              return (function (t) {
                for (
                  var r = arguments.length,
                    n = new Array(r > 1 ? r - 1 : 0),
                    o = 1;
                  o < r;
                  o++
                )
                  n[o - 1] = arguments[o];
                let i = [];
                return (
                  Object.values(e.initializedAgents).forEach((e) => {
                    e.exposed && e.api[t] && i.push(e.api[t](...n));
                  }),
                  i.length > 1 ? i : i[0]
                );
              })(t, ...n);
            };
          });
        }
        var b = r(2825);
        const y = (e) => {
          const t = e.startsWith("http");
          (e += "/"), (r.p = t ? e : "https://" + e);
        };
        let A = !1;
        function E(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            p = arguments.length > 2 ? arguments[2] : void 0,
            E = arguments.length > 3 ? arguments[3] : void 0,
            {
              init: w,
              info: x,
              loader_config: _,
              runtime: S = { loaderType: p },
              exposed: T = !0,
            } = t;
          const R = (0, f.gG)();
          x || ((w = R.init), (x = R.info), (_ = R.loader_config)),
            (0, o.Dg)(e.agentIdentifier, w || {}),
            (0, o.GE)(e.agentIdentifier, _ || {}),
            (x.jsAttributes ??= {}),
            u.v6 && (x.jsAttributes.isWorker = !0),
            (0, o.CX)(e.agentIdentifier, x);
          const N = (0, o.P_)(e.agentIdentifier),
            O = [x.beacon, x.errorBeacon];
          A ||
            (N.proxy.assets && (y(N.proxy.assets), O.push(N.proxy.assets)),
            N.proxy.beacon && O.push(N.proxy.beacon),
            v(),
            (0, f.EZ)("activatedFeatures", b.T),
            (e.runSoftNavOverSpa &&=
              !0 === N.soft_navigations.enabled &&
              N.feature_flags.includes("soft_nav"))),
            (S.denyList = [
              ...(N.ajax.deny_list || []),
              ...(N.ajax.block_internal ? O : []),
            ]),
            (0, o.sU)(e.agentIdentifier, S),
            void 0 === e.api &&
              (e.api = (function (e, t) {
                let f =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
                t || (0, s.RP)(e, "api");
                const p = {};
                var v = a.ee.get(e),
                  b = v.get("tracer"),
                  y = "api-",
                  A = y + "ixn-";
                function E(t, r, n, i) {
                  const a = (0, o.C5)(e);
                  return (
                    null === r
                      ? delete a.jsAttributes[t]
                      : (0, o.CX)(e, {
                          ...a,
                          jsAttributes: { ...a.jsAttributes, [t]: r },
                        }),
                    _(y, n, !0, i || null === r ? "session" : void 0)(t, r)
                  );
                }
                function w() {}
                g.forEach((e) => {
                  p[e] = _(y, e, !0, "api");
                }),
                  (p.addPageAction = _(y, "addPageAction", !0, n.D.pageAction)),
                  (p.setPageViewName = function (t, r) {
                    if ("string" == typeof t)
                      return (
                        "/" !== t.charAt(0) && (t = "/" + t),
                        ((0, o.OP)(e).customTransaction =
                          (r || "http://custom.transaction") + t),
                        _(y, "setPageViewName", !0)()
                      );
                  }),
                  (p.setCustomAttribute = function (e, t) {
                    let r =
                      arguments.length > 2 &&
                      void 0 !== arguments[2] &&
                      arguments[2];
                    if ("string" == typeof e) {
                      if (
                        ["string", "number", "boolean"].includes(typeof t) ||
                        null === t
                      )
                        return E(e, t, "setCustomAttribute", r);
                      (0, d.Z)(
                        "Failed to execute setCustomAttribute.\nNon-null value must be a string, number or boolean type, but a type of <".concat(
                          typeof t,
                          "> was provided.",
                        ),
                      );
                    } else
                      (0, d.Z)(
                        "Failed to execute setCustomAttribute.\nName must be a string type, but a type of <".concat(
                          typeof e,
                          "> was provided.",
                        ),
                      );
                  }),
                  (p.setUserId = function (e) {
                    if ("string" == typeof e || null === e)
                      return E("enduser.id", e, "setUserId", !0);
                    (0, d.Z)(
                      "Failed to execute setUserId.\nNon-null value must be a string type, but a type of <".concat(
                        typeof e,
                        "> was provided.",
                      ),
                    );
                  }),
                  (p.setApplicationVersion = function (e) {
                    if ("string" == typeof e || null === e)
                      return E(
                        "application.version",
                        e,
                        "setApplicationVersion",
                        !1,
                      );
                    (0, d.Z)(
                      "Failed to execute setApplicationVersion. Expected <String | null>, but got <".concat(
                        typeof e,
                        ">.",
                      ),
                    );
                  }),
                  (p.start = (e) => {
                    try {
                      const t = e ? "defined" : "undefined";
                      (0, i.p)(
                        l.xS,
                        ["API/start/".concat(t, "/called")],
                        void 0,
                        n.D.metrics,
                        v,
                      );
                      const r = Object.values(n.D);
                      if (void 0 === e) e = r;
                      else {
                        if (
                          (e = Array.isArray(e) && e.length ? e : [e]).some(
                            (e) => !r.includes(e),
                          )
                        )
                          return (0, d.Z)(
                            "Invalid feature name supplied. Acceptable feature names are: ".concat(
                              r,
                            ),
                          );
                        e.includes(n.D.pageViewEvent) ||
                          e.push(n.D.pageViewEvent);
                      }
                      e.forEach((e) => {
                        v.emit("".concat(e, "-opt-in"));
                      });
                    } catch (e) {
                      (0, d.Z)("An unexpected issue occurred", e);
                    }
                  }),
                  (p[h.Ef.RECORD] = function () {
                    (0, i.p)(
                      l.xS,
                      ["API/recordReplay/called"],
                      void 0,
                      n.D.metrics,
                      v,
                    ),
                      (0, i.p)(h.Ef.RECORD, [], void 0, n.D.sessionReplay, v);
                  }),
                  (p[h.Ef.PAUSE] = function () {
                    (0, i.p)(
                      l.xS,
                      ["API/pauseReplay/called"],
                      void 0,
                      n.D.metrics,
                      v,
                    ),
                      (0, i.p)(h.Ef.PAUSE, [], void 0, n.D.sessionReplay, v);
                  }),
                  (p.interaction = function (e) {
                    return new w().get("object" == typeof e ? e : {});
                  });
                const x = (w.prototype = {
                  createTracer: function (e, t) {
                    var r = {},
                      o = this,
                      a = "function" == typeof t;
                    return (
                      (0, i.p)(
                        l.xS,
                        ["API/createTracer/called"],
                        void 0,
                        n.D.metrics,
                        v,
                      ),
                      f ||
                        (0, i.p)(
                          A + "tracer",
                          [(0, m.z)(), e, r],
                          o,
                          n.D.spa,
                          v,
                        ),
                      function () {
                        if (
                          (b.emit(
                            (a ? "" : "no-") + "fn-start",
                            [(0, m.z)(), o, a],
                            r,
                          ),
                          a)
                        )
                          try {
                            return t.apply(this, arguments);
                          } catch (e) {
                            throw (
                              (b.emit("fn-err", [arguments, this, e], r), e)
                            );
                          } finally {
                            b.emit("fn-end", [(0, m.z)()], r);
                          }
                      }
                    );
                  },
                });
                function _(e, t, r, o) {
                  return function () {
                    return (
                      (0, i.p)(
                        l.xS,
                        ["API/" + t + "/called"],
                        void 0,
                        n.D.metrics,
                        v,
                      ),
                      o &&
                        (0, i.p)(
                          e + t,
                          [(0, m.z)(), ...arguments],
                          r ? null : this,
                          o,
                          v,
                        ),
                      r ? void 0 : this
                    );
                  };
                }
                function S() {
                  r.e(111)
                    .then(r.bind(r, 7438))
                    .then((t) => {
                      let { setAPI: r } = t;
                      r(e), (0, s.LP)(e, "api");
                    })
                    .catch(() => {
                      (0, d.Z)("Downloading runtime APIs failed..."), v.abort();
                    });
                }
                return (
                  [
                    "actionText",
                    "setName",
                    "setAttribute",
                    "save",
                    "ignore",
                    "onEnd",
                    "getContext",
                    "end",
                    "get",
                  ].forEach((e) => {
                    x[e] = _(A, e, void 0, f ? n.D.softNav : n.D.spa);
                  }),
                  (p.setCurrentRouteName = f
                    ? _(A, "routeName", void 0, n.D.softNav)
                    : _(y, "routeName", !0, n.D.spa)),
                  (p.noticeError = function (e, t) {
                    "string" == typeof e && (e = new Error(e)),
                      (0, i.p)(
                        l.xS,
                        ["API/noticeError/called"],
                        void 0,
                        n.D.metrics,
                        v,
                      ),
                      (0, i.p)(
                        "err",
                        [e, (0, m.z)(), !1, t],
                        void 0,
                        n.D.jserrors,
                        v,
                      );
                  }),
                  u.il ? (0, c.b2)(() => S(), !0) : S(),
                  p
                );
              })(e.agentIdentifier, E, e.runSoftNavOverSpa)),
            void 0 === e.exposed && (e.exposed = T),
            (A = !0);
        }
      },
      8993: (e, t, r) => {
        r.nc = (() => {
          try {
            return document?.currentScript?.nonce;
          } catch (e) {}
          return "";
        })();
      },
      3325: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => n, p: () => o });
        const n = {
            ajax: "ajax",
            jserrors: "jserrors",
            metrics: "metrics",
            pageAction: "page_action",
            pageViewEvent: "page_view_event",
            pageViewTiming: "page_view_timing",
            sessionReplay: "session_replay",
            sessionTrace: "session_trace",
            softNav: "soft_navigations",
            spa: "spa",
          },
          o = {
            [n.pageViewEvent]: 1,
            [n.pageViewTiming]: 2,
            [n.metrics]: 3,
            [n.jserrors]: 4,
            [n.ajax]: 5,
            [n.sessionTrace]: 6,
            [n.pageAction]: 7,
            [n.spa]: 8,
            [n.softNav]: 9,
            [n.sessionReplay]: 10,
          };
      },
    },
    n = {};
  function o(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var i = (n[e] = { exports: {} });
    return r[e](i, i.exports, o), i.exports;
  }
  (o.m = r),
    (o.d = (e, t) => {
      for (var r in t)
        o.o(t, r) &&
          !o.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (o.f = {}),
    (o.e = (e) =>
      Promise.all(Object.keys(o.f).reduce((t, r) => (o.f[r](e, t), t), []))),
    (o.u = (e) =>
      ({ 111: "nr-spa", 164: "nr-spa-compressor", 433: "nr-spa-recorder" })[e] +
      "-1.255.0.min.js"),
    (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "NRBA-1.255.0.PROD:"),
    (o.l = (r, n, i, a) => {
      if (e[r]) e[r].push(n);
      else {
        var s, c;
        if (void 0 !== i)
          for (
            var u = document.getElementsByTagName("script"), d = 0;
            d < u.length;
            d++
          ) {
            var l = u[d];
            if (
              l.getAttribute("src") == r ||
              l.getAttribute("data-webpack") == t + i
            ) {
              s = l;
              break;
            }
          }
        if (!s) {
          c = !0;
          var f = {
            111: "sha512-pKh2BTgdSVRudmpK0YHvF0meSIHF0vfRBGpAzN5T9U2ZrvQRIEXRoh9cSkTjb3pl1npKq6nwrVpRSXUk1TAyBA==",
            433: "sha512-vfHgLk6zy9S2/dWlE1yG/zauFUASnE1lW0R+7IC+VmnMhALusvixy2cwikxFPUXb1r6N/QRkpabzZhcDA/S/qg==",
            164: "sha512-HZJ6pYGrHZCtENwWeXqG+WGnmkF80dXphRVZnn6udIou5vuXPtBaDxO4jq2AVvEk8sqfCvlMb1a0DgC7l6WhCQ==",
          };
          ((s = document.createElement("script")).charset = "utf-8"),
            (s.timeout = 120),
            o.nc && s.setAttribute("nonce", o.nc),
            s.setAttribute("data-webpack", t + i),
            (s.src = r),
            0 !== s.src.indexOf(window.location.origin + "/") &&
              (s.crossOrigin = "anonymous"),
            f[a] && (s.integrity = f[a]);
        }
        e[r] = [n];
        var h = (t, n) => {
            (s.onerror = s.onload = null), clearTimeout(p);
            var o = e[r];
            if (
              (delete e[r],
              s.parentNode && s.parentNode.removeChild(s),
              o && o.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          p = setTimeout(
            h.bind(null, void 0, { type: "timeout", target: s }),
            12e4,
          );
        (s.onerror = h.bind(null, s.onerror)),
          (s.onload = h.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (o.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.p = "https://js-agent.newrelic.com/"),
    (() => {
      var e = { 801: 0, 92: 0 };
      o.f.j = (t, r) => {
        var n = o.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var i = new Promise((r, o) => (n = e[t] = [r, o]));
            r.push((n[2] = i));
            var a = o.p + o.u(t),
              s = new Error();
            o.l(
              a,
              (r) => {
                if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var i = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = i),
                    (s.request = a),
                    n[1](s);
                }
              },
              "chunk-" + t,
              t,
            );
          }
      };
      var t = (t, r) => {
          var n,
            i,
            [a, s, c] = r,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) o.o(s, n) && (o.m[n] = s[n]);
            if (c) c(o);
          }
          for (t && t(r); u < a.length; u++)
            (i = a[u]), o.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
        },
        r = (self["webpackChunk:NRBA-1.255.0.PROD"] =
          self["webpackChunk:NRBA-1.255.0.PROD"] || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })(),
    (() => {
      "use strict";
      o(8993);
      var e = o(50),
        t = o(7144),
        r = o(4402);
      class n {
        agentIdentifier;
        constructor() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : (0, r.ky)(16);
          this.agentIdentifier = e;
        }
        #e(t) {
          for (
            var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1;
            o < r;
            o++
          )
            n[o - 1] = arguments[o];
          if ("function" == typeof this.api?.[t]) return this.api[t](...n);
          (0, e.Z)(
            "Call to agent api ".concat(
              t,
              " failed. The API is not currently initialized.",
            ),
          );
        }
        addPageAction(e, t) {
          return this.#e("addPageAction", e, t);
        }
        setPageViewName(e, t) {
          return this.#e("setPageViewName", e, t);
        }
        setCustomAttribute(e, t, r) {
          return this.#e("setCustomAttribute", e, t, r);
        }
        noticeError(e, t) {
          return this.#e("noticeError", e, t);
        }
        setUserId(e) {
          return this.#e("setUserId", e);
        }
        setApplicationVersion(e) {
          return this.#e("setApplicationVersion", e);
        }
        setErrorHandler(e) {
          return this.#e("setErrorHandler", e);
        }
        finished(e) {
          return this.#e("finished", e);
        }
        addRelease(e, t) {
          return this.#e("addRelease", e, t);
        }
        start(e) {
          return this.#e("start", e);
        }
        recordReplay() {
          return this.#e(t.Ef.RECORD);
        }
        pauseReplay() {
          return this.#e(t.Ef.PAUSE);
        }
        addToTrace(e) {
          return this.#e("addToTrace", e);
        }
        setCurrentRouteName(e) {
          return this.#e("setCurrentRouteName", e);
        }
        interaction() {
          return this.#e("interaction");
        }
      }
      var i = o(3325),
        a = o(234);
      const s = Object.values(i.D);
      function c(e) {
        const t = {};
        return (
          s.forEach((r) => {
            t[r] = (function (e, t) {
              return !0 === (0, a.Mt)(t, "".concat(e, ".enabled"));
            })(r, e);
          }),
          t
        );
      }
      var u = o(2758);
      var d = o(8e3),
        l = o(5938),
        f = o(3960),
        h = o(385);
      const p = (e) => h.il && !0 === (0, a.Mt)(e, "privacy.cookies_enabled");
      function g(e) {
        return a.Yu.MO && p && !0 === (0, a.Mt)(e, "session_trace.enabled");
      }
      function m(e) {
        return !0 === (0, a.Mt)(e, "session_replay.preload") && g(e);
      }
      class v extends l.W {
        constructor(e, t, r) {
          let n =
            !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
          super(e, t, r),
            (this.auto = n),
            (this.abortHandler = void 0),
            (this.featAggregate = void 0),
            (this.onAggregateImported = void 0),
            !1 ===
              (0, a.Mt)(
                this.agentIdentifier,
                "".concat(this.featureName, ".autoStart"),
              ) && (this.auto = !1),
            this.auto && (0, d.RP)(e, r);
        }
        importAggregator() {
          let t,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          if (this.featAggregate) return;
          if (!this.auto)
            return void this.ee.on(
              "".concat(this.featureName, "-opt-in"),
              () => {
                (0, d.RP)(this.agentIdentifier, this.featureName),
                  (this.auto = !0),
                  this.importAggregator();
              },
            );
          this.onAggregateImported = new Promise((e) => {
            t = e;
          });
          const n = async () => {
            let n;
            try {
              if (p(this.agentIdentifier)) {
                const { setupAgentSession: e } = await o
                  .e(111)
                  .then(o.bind(o, 1656));
                n = e(this.agentIdentifier);
              }
            } catch (t) {
              (0, e.Z)(
                "A problem occurred when starting up session manager. This page will not start or extend any session.",
                t,
              ),
                this.featureName === i.D.sessionReplay && this.abortHandler?.();
            }
            try {
              if (!this.#t(this.featureName, n))
                return (
                  (0, d.LP)(this.agentIdentifier, this.featureName), void t(!1)
                );
              const { lazyFeatureLoader: e } = await o
                  .e(111)
                  .then(o.bind(o, 8582)),
                { Aggregate: i } = await e(this.featureName, "aggregate");
              (this.featAggregate = new i(
                this.agentIdentifier,
                this.aggregator,
                r,
              )),
                t(!0);
            } catch (r) {
              (0, e.Z)(
                "Downloading and initializing ".concat(
                  this.featureName,
                  " failed...",
                ),
                r,
              ),
                this.abortHandler?.(),
                (0, d.LP)(this.agentIdentifier, this.featureName, !0),
                t(!1),
                this.ee && this.ee.abort();
            }
          };
          h.il ? (0, f.b2)(() => n(), !0) : n();
        }
        #t(e, t) {
          return (
            e !== i.D.sessionReplay ||
            ((r = this.agentIdentifier),
            (n = t),
            !(!g(r) || (!n?.isNew && !n?.state.sessionReplayMode)))
          );
          var r, n;
        }
      }
      var b = o(7633);
      class y extends v {
        static featureName = b.t;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, b.t, r), this.importAggregator();
        }
      }
      var A = o(1117),
        E = o(1284);
      class w extends A.w {
        constructor(e) {
          super(e), (this.aggregatedData = {});
        }
        store(e, t, r, n, o) {
          var i = this.getBucket(e, t, r, o);
          return (
            (i.metrics = (function (e, t) {
              t || (t = { count: 0 });
              return (
                (t.count += 1),
                (0, E.D)(e, function (e, r) {
                  t[e] = x(r, t[e]);
                }),
                t
              );
            })(n, i.metrics)),
            i
          );
        }
        merge(e, t, r, n, o) {
          var i = this.getBucket(e, t, n, o);
          if (i.metrics) {
            var a = i.metrics;
            (a.count += r.count),
              (0, E.D)(r, function (e, t) {
                if ("count" !== e) {
                  var n = a[e],
                    o = r[e];
                  o && !o.c
                    ? (a[e] = x(o.t, n))
                    : (a[e] = (function (e, t) {
                        if (!t) return e;
                        t.c || (t = _(t.t));
                        return (
                          (t.min = Math.min(e.min, t.min)),
                          (t.max = Math.max(e.max, t.max)),
                          (t.t += e.t),
                          (t.sos += e.sos),
                          (t.c += e.c),
                          t
                        );
                      })(o, a[e]));
                }
              });
          } else i.metrics = r;
        }
        storeMetric(e, t, r, n) {
          var o = this.getBucket(e, t, r);
          return (o.stats = x(n, o.stats)), o;
        }
        getBucket(e, t, r, n) {
          this.aggregatedData[e] || (this.aggregatedData[e] = {});
          var o = this.aggregatedData[e][t];
          return (
            o ||
              ((o = this.aggregatedData[e][t] = { params: r || {} }),
              n && (o.custom = n)),
            o
          );
        }
        get(e, t) {
          return t
            ? this.aggregatedData[e] && this.aggregatedData[e][t]
            : this.aggregatedData[e];
        }
        take(e) {
          for (var t = {}, r = "", n = !1, o = 0; o < e.length; o++)
            (t[(r = e[o])] = Object.values(this.aggregatedData[r] || {})),
              t[r].length && (n = !0),
              delete this.aggregatedData[r];
          return n ? t : null;
        }
      }
      function x(e, t) {
        return null == e
          ? (function (e) {
              e ? e.c++ : (e = { c: 1 });
              return e;
            })(t)
          : t
            ? (t.c || (t = _(t.t)),
              (t.c += 1),
              (t.t += e),
              (t.sos += e * e),
              e > t.max && (t.max = e),
              e < t.min && (t.min = e),
              t)
            : { t: e };
      }
      function _(e) {
        return { t: e, min: e, max: e, sos: e * e, c: 1 };
      }
      var S = o(8632),
        T = o(4351);
      var R = o(5546),
        N = o(7956),
        O = o(3239),
        D = o(9251),
        P = o(7894);
      class I extends v {
        static featureName = D.t;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, D.t, r),
            h.il &&
              ((0, N.N)(
                () => (0, R.p)("docHidden", [(0, P.z)()], void 0, D.t, this.ee),
                !0,
              ),
              (0, O.bP)("pagehide", () =>
                (0, R.p)("winPagehide", [(0, P.z)()], void 0, D.t, this.ee),
              ),
              this.importAggregator());
        }
      }
      var C = o(3081);
      class j extends v {
        static featureName = C.t9;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, C.t9, r), this.importAggregator();
        }
      }
      var k = o(6660);
      class M {
        constructor(e, t, r, n) {
          (this.name = "UncaughtError"),
            (this.message = e),
            (this.sourceURL = t),
            (this.line = r),
            (this.column = n);
        }
      }
      class H extends v {
        static featureName = k.t;
        #r = new Set();
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, k.t, r);
          try {
            this.removeOnAbort = new AbortController();
          } catch (e) {}
          this.ee.on("fn-err", (e, t, r) => {
            this.abortHandler &&
              !this.#r.has(r) &&
              (this.#r.add(r),
              (0, R.p)(
                "err",
                [this.#n(r), (0, P.z)()],
                void 0,
                i.D.jserrors,
                this.ee,
              ));
          }),
            this.ee.on("internal-error", (e) => {
              this.abortHandler &&
                (0, R.p)(
                  "ierr",
                  [this.#n(e), (0, P.z)(), !0],
                  void 0,
                  i.D.jserrors,
                  this.ee,
                );
            }),
            h._A.addEventListener(
              "unhandledrejection",
              (e) => {
                this.abortHandler &&
                  (0, R.p)(
                    "err",
                    [
                      this.#o(e),
                      (0, P.z)(),
                      !1,
                      { unhandledPromiseRejection: 1 },
                    ],
                    void 0,
                    i.D.jserrors,
                    this.ee,
                  );
              },
              (0, O.m$)(!1, this.removeOnAbort?.signal),
            ),
            h._A.addEventListener(
              "error",
              (e) => {
                this.abortHandler &&
                  (this.#r.has(e.error)
                    ? this.#r.delete(e.error)
                    : (0, R.p)(
                        "err",
                        [this.#i(e), (0, P.z)()],
                        void 0,
                        i.D.jserrors,
                        this.ee,
                      ));
              },
              (0, O.m$)(!1, this.removeOnAbort?.signal),
            ),
            (this.abortHandler = this.#a),
            this.importAggregator();
        }
        #a() {
          this.removeOnAbort?.abort(),
            this.#r.clear(),
            (this.abortHandler = void 0);
        }
        #n(e) {
          return e instanceof Error
            ? e
            : void 0 !== e?.message
              ? new M(
                  e.message,
                  e.filename || e.sourceURL,
                  e.lineno || e.line,
                  e.colno || e.col,
                )
              : new M("string" == typeof e ? e : (0, T.P)(e));
        }
        #o(e) {
          let t = "Unhandled Promise Rejection: ";
          if (e?.reason instanceof Error)
            try {
              return (e.reason.message = t + e.reason.message), e.reason;
            } catch (t) {
              return e.reason;
            }
          if (void 0 === e.reason) return new M(t);
          const r = this.#n(e.reason);
          return (r.message = t + r.message), r;
        }
        #i(e) {
          if (
            e.error instanceof SyntaxError &&
            !/:\d+$/.test(e.error.stack?.trim())
          ) {
            const t = new M(e.message, e.filename, e.lineno, e.colno);
            return (t.name = SyntaxError.name), t;
          }
          return e.error instanceof Error
            ? e.error
            : new M(e.message, e.filename, e.lineno, e.colno);
        }
      }
      var L = o(2210);
      let z = 1;
      const U = "nr@id";
      function F(e) {
        const t = typeof e;
        return !e || ("object" !== t && "function" !== t)
          ? -1
          : e === h._A
            ? 0
            : (0, L.X)(e, U, function () {
                return z++;
              });
      }
      function B(e) {
        if ("string" == typeof e && e.length) return e.length;
        if ("object" == typeof e) {
          if (
            "undefined" != typeof ArrayBuffer &&
            e instanceof ArrayBuffer &&
            e.byteLength
          )
            return e.byteLength;
          if ("undefined" != typeof Blob && e instanceof Blob && e.size)
            return e.size;
          if (!("undefined" != typeof FormData && e instanceof FormData))
            try {
              return (0, T.P)(e).length;
            } catch (e) {
              return;
            }
        }
      }
      var q = o(7806),
        V = o(7243);
      class G {
        constructor(e) {
          this.agentIdentifier = e;
        }
        generateTracePayload(e) {
          if (!this.shouldGenerateTrace(e)) return null;
          var t = (0, a.DL)(this.agentIdentifier);
          if (!t) return null;
          var n = (t.accountID || "").toString() || null,
            o = (t.agentID || "").toString() || null,
            i = (t.trustKey || "").toString() || null;
          if (!n || !o) return null;
          var s = (0, r.M)(),
            c = (0, r.Ht)(),
            u = Date.now(),
            d = { spanId: s, traceId: c, timestamp: u };
          return (
            (e.sameOrigin ||
              (this.isAllowedOrigin(e) &&
                this.useTraceContextHeadersForCors())) &&
              ((d.traceContextParentHeader =
                this.generateTraceContextParentHeader(s, c)),
              (d.traceContextStateHeader = this.generateTraceContextStateHeader(
                s,
                u,
                n,
                o,
                i,
              ))),
            ((e.sameOrigin && !this.excludeNewrelicHeader()) ||
              (!e.sameOrigin &&
                this.isAllowedOrigin(e) &&
                this.useNewrelicHeaderForCors())) &&
              (d.newrelicHeader = this.generateTraceHeader(s, c, u, n, o, i)),
            d
          );
        }
        generateTraceContextParentHeader(e, t) {
          return "00-" + t + "-" + e + "-01";
        }
        generateTraceContextStateHeader(e, t, r, n, o) {
          return o + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t;
        }
        generateTraceHeader(e, t, r, n, o, i) {
          if (!("function" == typeof h._A?.btoa)) return null;
          var a = {
            v: [0, 1],
            d: { ty: "Browser", ac: n, ap: o, id: e, tr: t, ti: r },
          };
          return i && n !== i && (a.d.tk = i), btoa((0, T.P)(a));
        }
        shouldGenerateTrace(e) {
          return this.isDtEnabled() && this.isAllowedOrigin(e);
        }
        isAllowedOrigin(e) {
          var t = !1,
            r = {};
          if (
            ((0, a.Mt)(this.agentIdentifier, "distributed_tracing") &&
              (r = (0, a.P_)(this.agentIdentifier).distributed_tracing),
            e.sameOrigin)
          )
            t = !0;
          else if (r.allowed_origins instanceof Array)
            for (var n = 0; n < r.allowed_origins.length; n++) {
              var o = (0, V.e)(r.allowed_origins[n]);
              if (
                e.hostname === o.hostname &&
                e.protocol === o.protocol &&
                e.port === o.port
              ) {
                t = !0;
                break;
              }
            }
          return t;
        }
        isDtEnabled() {
          var e = (0, a.Mt)(this.agentIdentifier, "distributed_tracing");
          return !!e && !!e.enabled;
        }
        excludeNewrelicHeader() {
          var e = (0, a.Mt)(this.agentIdentifier, "distributed_tracing");
          return !!e && !!e.exclude_newrelic_header;
        }
        useNewrelicHeaderForCors() {
          var e = (0, a.Mt)(this.agentIdentifier, "distributed_tracing");
          return !!e && !1 !== e.cors_use_newrelic_header;
        }
        useTraceContextHeadersForCors() {
          var e = (0, a.Mt)(this.agentIdentifier, "distributed_tracing");
          return !!e && !!e.cors_use_tracecontext_headers;
        }
      }
      var Z = o(7825),
        W = ["load", "error", "abort", "timeout"],
        K = W.length,
        X = a.Yu.REQ,
        Y = a.Yu.XHR;
      class J extends v {
        static featureName = Z.t;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if ((super(e, t, Z.t, r), (0, a.OP)(e).xhrWrappable)) {
            (this.dt = new G(e)),
              (this.handler = (e, t, r, n) => (0, R.p)(e, t, r, n, this.ee));
            try {
              const e = {
                xmlhttprequest: "xhr",
                fetch: "fetch",
                beacon: "beacon",
              };
              h._A?.performance?.getEntriesByType("resource").forEach((t) => {
                if (t.initiatorType in e && 0 !== t.responseStatus) {
                  const r = { status: t.responseStatus },
                    n = {
                      rxSize: t.transferSize,
                      duration: Math.floor(t.duration),
                      cbTime: 0,
                    };
                  Q(r, t.name),
                    this.handler(
                      "xhr",
                      [r, n, t.startTime, t.responseEnd, e[t.initiatorType]],
                      void 0,
                      i.D.ajax,
                    );
                }
              });
            } catch (e) {}
            (0, q.u5)(this.ee),
              (0, q.Kf)(this.ee),
              (function (e, t, r, n) {
                function o(e) {
                  var t = this;
                  (t.totalCbs = 0),
                    (t.called = 0),
                    (t.cbTime = 0),
                    (t.end = w),
                    (t.ended = !1),
                    (t.xhrGuids = {}),
                    (t.lastSize = null),
                    (t.loadCaptureCalled = !1),
                    (t.params = this.params || {}),
                    (t.metrics = this.metrics || {}),
                    e.addEventListener(
                      "load",
                      function (r) {
                        x(t, e);
                      },
                      (0, O.m$)(!1),
                    ),
                    h.IF ||
                      e.addEventListener(
                        "progress",
                        function (e) {
                          t.lastSize = e.loaded;
                        },
                        (0, O.m$)(!1),
                      );
                }
                function s(e) {
                  (this.params = { method: e[0] }),
                    Q(this, e[1]),
                    (this.metrics = {});
                }
                function c(t, r) {
                  var o = (0, a.DL)(e);
                  o.xpid &&
                    this.sameOrigin &&
                    r.setRequestHeader("X-NewRelic-ID", o.xpid);
                  var i = n.generateTracePayload(this.parsedOrigin);
                  if (i) {
                    var s = !1;
                    i.newrelicHeader &&
                      (r.setRequestHeader("newrelic", i.newrelicHeader),
                      (s = !0)),
                      i.traceContextParentHeader &&
                        (r.setRequestHeader(
                          "traceparent",
                          i.traceContextParentHeader,
                        ),
                        i.traceContextStateHeader &&
                          r.setRequestHeader(
                            "tracestate",
                            i.traceContextStateHeader,
                          ),
                        (s = !0)),
                      s && (this.dt = i);
                  }
                }
                function u(e, r) {
                  var n = this.metrics,
                    o = e[0],
                    i = this;
                  if (n && o) {
                    var a = B(o);
                    a && (n.txSize = a);
                  }
                  (this.startTime = (0, P.z)()),
                    (this.body = o),
                    (this.listener = function (e) {
                      try {
                        "abort" !== e.type ||
                          i.loadCaptureCalled ||
                          (i.params.aborted = !0),
                          ("load" !== e.type ||
                            (i.called === i.totalCbs &&
                              (i.onloadCalled ||
                                "function" != typeof r.onload) &&
                              "function" == typeof i.end)) &&
                            i.end(r);
                      } catch (e) {
                        try {
                          t.emit("internal-error", [e]);
                        } catch (e) {}
                      }
                    });
                  for (var s = 0; s < K; s++)
                    r.addEventListener(W[s], this.listener, (0, O.m$)(!1));
                }
                function d(e, t, r) {
                  (this.cbTime += e),
                    t ? (this.onloadCalled = !0) : (this.called += 1),
                    this.called !== this.totalCbs ||
                      (!this.onloadCalled && "function" == typeof r.onload) ||
                      "function" != typeof this.end ||
                      this.end(r);
                }
                function l(e, t) {
                  var r = "" + F(e) + !!t;
                  this.xhrGuids &&
                    !this.xhrGuids[r] &&
                    ((this.xhrGuids[r] = !0), (this.totalCbs += 1));
                }
                function f(e, t) {
                  var r = "" + F(e) + !!t;
                  this.xhrGuids &&
                    this.xhrGuids[r] &&
                    (delete this.xhrGuids[r], (this.totalCbs -= 1));
                }
                function p() {
                  this.endTime = (0, P.z)();
                }
                function g(e, r) {
                  r instanceof Y &&
                    "load" === e[0] &&
                    t.emit("xhr-load-added", [e[1], e[2]], r);
                }
                function m(e, r) {
                  r instanceof Y &&
                    "load" === e[0] &&
                    t.emit("xhr-load-removed", [e[1], e[2]], r);
                }
                function v(e, t, r) {
                  t instanceof Y &&
                    ("onload" === r && (this.onload = !0),
                    ("load" === (e[0] && e[0].type) || this.onload) &&
                      (this.xhrCbStart = (0, P.z)()));
                }
                function b(e, r) {
                  this.xhrCbStart &&
                    t.emit(
                      "xhr-cb-time",
                      [(0, P.z)() - this.xhrCbStart, this.onload, r],
                      r,
                    );
                }
                function y(e) {
                  var t,
                    r = e[1] || {};
                  if (
                    ("string" == typeof e[0]
                      ? 0 === (t = e[0]).length &&
                        h.il &&
                        (t = "" + h._A.location.href)
                      : e[0] && e[0].url
                        ? (t = e[0].url)
                        : h._A?.URL && e[0] && e[0] instanceof URL
                          ? (t = e[0].href)
                          : "function" == typeof e[0].toString &&
                            (t = e[0].toString()),
                    "string" == typeof t && 0 !== t.length)
                  ) {
                    t &&
                      ((this.parsedOrigin = (0, V.e)(t)),
                      (this.sameOrigin = this.parsedOrigin.sameOrigin));
                    var o = n.generateTracePayload(this.parsedOrigin);
                    if (o && (o.newrelicHeader || o.traceContextParentHeader))
                      if (e[0] && e[0].headers)
                        s(e[0].headers, o) && (this.dt = o);
                      else {
                        var i = {};
                        for (var a in r) i[a] = r[a];
                        (i.headers = new Headers(r.headers || {})),
                          s(i.headers, o) && (this.dt = o),
                          e.length > 1 ? (e[1] = i) : e.push(i);
                      }
                  }
                  function s(e, t) {
                    var r = !1;
                    return (
                      t.newrelicHeader &&
                        (e.set("newrelic", t.newrelicHeader), (r = !0)),
                      t.traceContextParentHeader &&
                        (e.set("traceparent", t.traceContextParentHeader),
                        t.traceContextStateHeader &&
                          e.set("tracestate", t.traceContextStateHeader),
                        (r = !0)),
                      r
                    );
                  }
                }
                function A(e, t) {
                  (this.params = {}),
                    (this.metrics = {}),
                    (this.startTime = (0, P.z)()),
                    (this.dt = t),
                    e.length >= 1 && (this.target = e[0]),
                    e.length >= 2 && (this.opts = e[1]);
                  var r,
                    n = this.opts || {},
                    o = this.target;
                  "string" == typeof o
                    ? (r = o)
                    : "object" == typeof o && o instanceof X
                      ? (r = o.url)
                      : h._A?.URL &&
                        "object" == typeof o &&
                        o instanceof URL &&
                        (r = o.href),
                    Q(this, r);
                  var i = (
                    "" +
                    ((o && o instanceof X && o.method) || n.method || "GET")
                  ).toUpperCase();
                  (this.params.method = i),
                    (this.body = n.body),
                    (this.txSize = B(n.body) || 0);
                }
                function E(e, t) {
                  var n;
                  (this.endTime = (0, P.z)()),
                    this.params || (this.params = {}),
                    (this.params.status = t ? t.status : 0),
                    "string" == typeof this.rxSize &&
                      this.rxSize.length > 0 &&
                      (n = +this.rxSize);
                  var o = {
                    txSize: this.txSize,
                    rxSize: n,
                    duration: (0, P.z)() - this.startTime,
                  };
                  r(
                    "xhr",
                    [this.params, o, this.startTime, this.endTime, "fetch"],
                    this,
                    i.D.ajax,
                  );
                }
                function w(e) {
                  var t = this.params,
                    n = this.metrics;
                  if (!this.ended) {
                    this.ended = !0;
                    for (var o = 0; o < K; o++)
                      e.removeEventListener(W[o], this.listener, !1);
                    t.aborted ||
                      ((n.duration = (0, P.z)() - this.startTime),
                      this.loadCaptureCalled || 4 !== e.readyState
                        ? null == t.status && (t.status = 0)
                        : x(this, e),
                      (n.cbTime = this.cbTime),
                      r(
                        "xhr",
                        [t, n, this.startTime, this.endTime, "xhr"],
                        this,
                        i.D.ajax,
                      ));
                  }
                }
                function x(e, r) {
                  e.params.status = r.status;
                  var n = (function (e, t) {
                    var r = e.responseType;
                    return "json" === r && null !== t
                      ? t
                      : "arraybuffer" === r || "blob" === r || "json" === r
                        ? B(e.response)
                        : "text" === r || "" === r || void 0 === r
                          ? B(e.responseText)
                          : void 0;
                  })(r, e.lastSize);
                  if ((n && (e.metrics.rxSize = n), e.sameOrigin)) {
                    var o = r.getResponseHeader("X-NewRelic-App-Data");
                    o &&
                      ((0, R.p)(
                        C.mY,
                        ["Ajax/CrossApplicationTracing/Header/Seen"],
                        void 0,
                        i.D.metrics,
                        t,
                      ),
                      (e.params.cat = o.split(", ").pop()));
                  }
                  e.loadCaptureCalled = !0;
                }
                t.on("new-xhr", o),
                  t.on("open-xhr-start", s),
                  t.on("open-xhr-end", c),
                  t.on("send-xhr-start", u),
                  t.on("xhr-cb-time", d),
                  t.on("xhr-load-added", l),
                  t.on("xhr-load-removed", f),
                  t.on("xhr-resolved", p),
                  t.on("addEventListener-end", g),
                  t.on("removeEventListener-end", m),
                  t.on("fn-end", b),
                  t.on("fetch-before-start", y),
                  t.on("fetch-start", A),
                  t.on("fn-start", v),
                  t.on("fetch-done", E);
              })(e, this.ee, this.handler, this.dt),
              this.importAggregator();
          }
        }
      }
      function Q(e, t) {
        var r = (0, V.e)(t),
          n = e.params || e;
        (n.hostname = r.hostname),
          (n.port = r.port),
          (n.protocol = r.protocol),
          (n.host = r.hostname + ":" + r.port),
          (n.pathname = r.pathname),
          (e.parsedOrigin = r),
          (e.sameOrigin = r.sameOrigin);
      }
      var ee = o(3614);
      const {
        BST_RESOURCE: te,
        RESOURCE: re,
        START: ne,
        END: oe,
        FEATURE_NAME: ie,
        FN_END: ae,
        FN_START: se,
        PUSH_STATE: ce,
      } = ee;
      var ue = o(7056);
      class de extends v {
        static featureName = t.t9;
        constructor(e, r) {
          let n,
            o =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
          super(e, r, t.t9, o);
          try {
            n = JSON.parse(
              localStorage.getItem("".concat(ue.Bq, "_").concat(ue.K4)),
            );
          } catch (e) {}
          this.#s(n) ? this.#c(n?.sessionReplayMode) : this.importAggregator();
        }
        #s(e) {
          return (
            (e &&
              (e.sessionReplayMode === ue.IK.FULL ||
                e.sessionReplayMode === ue.IK.ERROR)) ||
            m(this.agentIdentifier)
          );
        }
        async #c(e) {
          const { Recorder: t } = await Promise.all([o.e(111), o.e(433)]).then(
            o.bind(o, 4136),
          );
          (this.recorder = new t({
            mode: e,
            agentIdentifier: this.agentIdentifier,
          })),
            this.recorder.startRecording(),
            (this.abortHandler = this.recorder.stopRecording),
            this.importAggregator({ recorder: this.recorder });
        }
      }
      var le = o(7872),
        fe = o(6216);
      class he extends v {
        static featureName = fe.t9;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if ((super(e, t, fe.t9, r), !h.il || !a.Yu.MO)) return;
          const n = (0, q.QU)(this.ee),
            o = (0, q.em)(this.ee),
            i = () =>
              (0, R.p)(
                "newURL",
                [(0, P.z)(), "" + window.location],
                void 0,
                this.featureName,
                this.ee,
              );
          n.on("pushState-end", i), n.on("replaceState-end", i);
          try {
            this.removeOnAbort = new AbortController();
          } catch (e) {}
          (0, O.bP)(
            "popstate",
            (e) =>
              (0, R.p)(
                "newURL",
                [e.timeStamp, "" + window.location],
                void 0,
                this.featureName,
                this.ee,
              ),
            !0,
            this.removeOnAbort?.signal,
          );
          let s = !1;
          const c = new a.Yu.MO((e, t) => {
              s ||
                ((s = !0),
                requestAnimationFrame(() => {
                  (0, R.p)(
                    "newDom",
                    [(0, P.z)()],
                    void 0,
                    this.featureName,
                    this.ee,
                  ),
                    (s = !1);
                }));
            }),
            u = (0, le.D)(
              (e) => {
                (0, R.p)("newUIEvent", [e], void 0, this.featureName, this.ee),
                  c.observe(document.body, {
                    attributes: !0,
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                  });
              },
              100,
              { leading: !0 },
            );
          o.on("fn-start", (e) => {
            let [t] = e;
            fe.sE.includes(t?.type) && u(t);
          });
          for (let e of fe.sE) document.addEventListener(e, () => {});
          (this.abortHandler = function () {
            this.removeOnAbort?.abort(),
              c.disconnect(),
              (this.abortHandler = void 0);
          }),
            this.importAggregator({ domObserver: c });
        }
      }
      var pe = o(7836);
      const {
        FEATURE_NAME: ge,
        START: me,
        END: ve,
        BODY: be,
        CB_END: ye,
        JS_TIME: Ae,
        FETCH: Ee,
        FN_START: we,
        CB_START: xe,
        FN_END: _e,
      } = pe;
      var Se = o(4649);
      class Te extends v {
        static featureName = Se.t;
        constructor(e, t) {
          let r =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          super(e, t, Se.t, r), this.importAggregator();
        }
      }
      new (class extends n {
        constructor(t, r) {
          super(r),
            h._A
              ? ((this.sharedAggregator = new w({
                  agentIdentifier: this.agentIdentifier,
                })),
                (this.features = {}),
                (0, S.h5)(this.agentIdentifier, this),
                (this.desiredFeatures = new Set(t.features || [])),
                this.desiredFeatures.add(y),
                (this.runSoftNavOverSpa = [...this.desiredFeatures].some(
                  (e) => e.featureName === i.D.softNav,
                )),
                (0, u.j)(this, t, t.loaderType || "agent"),
                this.run())
              : (0, e.Z)(
                  "Failed to initialize the agent. Could not determine the runtime environment.",
                );
        }
        get config() {
          return {
            info: this.info,
            init: this.init,
            loader_config: this.loader_config,
            runtime: this.runtime,
          };
        }
        run() {
          try {
            const t = c(this.agentIdentifier),
              r = [...this.desiredFeatures];
            r.sort((e, t) => i.p[e.featureName] - i.p[t.featureName]),
              r.forEach((r) => {
                if (!t[r.featureName] && r.featureName !== i.D.pageViewEvent)
                  return;
                if (this.runSoftNavOverSpa && r.featureName === i.D.spa) return;
                if (!this.runSoftNavOverSpa && r.featureName === i.D.softNav)
                  return;
                const n = (function (e) {
                  switch (e) {
                    case i.D.ajax:
                      return [i.D.jserrors];
                    case i.D.sessionTrace:
                      return [i.D.ajax, i.D.pageViewEvent];
                    case i.D.sessionReplay:
                      return [i.D.sessionTrace];
                    case i.D.pageViewTiming:
                      return [i.D.pageViewEvent];
                    default:
                      return [];
                  }
                })(r.featureName);
                n.every((e) => e in this.features) ||
                  (0, e.Z)(
                    ""
                      .concat(
                        r.featureName,
                        " is enabled but one or more dependent features has not been initialized (",
                      )
                      .concat(
                        (0, T.P)(n),
                        "). This may cause unintended consequences or missing data...",
                      ),
                  ),
                  (this.features[r.featureName] = new r(
                    this.agentIdentifier,
                    this.sharedAggregator,
                  ));
              });
          } catch (t) {
            (0, e.Z)(
              "Failed to initialize all enabled instrument classes (agent aborted) -",
              t,
            );
            for (const e in this.features) this.features[e].abortHandler?.();
            const r = (0, S.fP)();
            delete r.initializedAgents[this.agentIdentifier]?.api,
              delete r.initializedAgents[this.agentIdentifier]?.features,
              delete this.sharedAggregator;
            return r.ee.get(this.agentIdentifier).abort(), !1;
          }
        }
      })({
        features: [
          J,
          y,
          I,
          class extends v {
            static featureName = ie;
            constructor(e, t) {
              if (
                (super(
                  e,
                  t,
                  ie,
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2],
                ),
                !h.il)
              )
                return;
              const r = this.ee;
              let n;
              (0, q.QU)(r),
                (this.eventsEE = (0, q.em)(r)),
                this.eventsEE.on(se, function (e, t) {
                  this.bstStart = (0, P.z)();
                }),
                this.eventsEE.on(ae, function (e, t) {
                  (0, R.p)(
                    "bst",
                    [e[0], t, this.bstStart, (0, P.z)()],
                    void 0,
                    i.D.sessionTrace,
                    r,
                  );
                }),
                r.on(ce + ne, function (e) {
                  (this.time = (0, P.z)()),
                    (this.startPath = location.pathname + location.hash);
                }),
                r.on(ce + oe, function (e) {
                  (0, R.p)(
                    "bstHist",
                    [
                      location.pathname + location.hash,
                      this.startPath,
                      this.time,
                    ],
                    void 0,
                    i.D.sessionTrace,
                    r,
                  );
                });
              try {
                (n = new PerformanceObserver((e) => {
                  const t = e.getEntries();
                  (0, R.p)(te, [t], void 0, i.D.sessionTrace, r);
                })),
                  n.observe({ type: re, buffered: !0 });
              } catch (e) {}
              this.importAggregator({ resourceObserver: n });
            }
          },
          de,
          j,
          Te,
          H,
          he,
          class extends v {
            static featureName = ge;
            constructor(e, t) {
              if (
                (super(
                  e,
                  t,
                  ge,
                  !(arguments.length > 2 && void 0 !== arguments[2]) ||
                    arguments[2],
                ),
                !h.il)
              )
                return;
              if (!(0, a.OP)(e).xhrWrappable) return;
              try {
                this.removeOnAbort = new AbortController();
              } catch (e) {}
              let r,
                n = 0;
              const o = this.ee.get("tracer"),
                i = (0, q._L)(this.ee),
                s = (0, q.Lg)(this.ee),
                c = (0, q.BV)(this.ee),
                u = (0, q.Kf)(this.ee),
                d = this.ee.get("events"),
                l = (0, q.u5)(this.ee),
                f = (0, q.QU)(this.ee),
                p = (0, q.Gm)(this.ee);
              function g(e, t) {
                f.emit("newURL", ["" + window.location, t]);
              }
              function m() {
                n++, (r = window.location.hash), (this[we] = (0, P.z)());
              }
              function v() {
                n--, window.location.hash !== r && g(0, !0);
                var e = (0, P.z)();
                (this[Ae] = ~~this[Ae] + e - this[we]), (this[_e] = e);
              }
              function b(e, t) {
                e.on(t, function () {
                  this[t] = (0, P.z)();
                });
              }
              this.ee.on(we, m),
                s.on(xe, m),
                i.on(xe, m),
                this.ee.on(_e, v),
                s.on(ye, v),
                i.on(ye, v),
                this.ee.buffer([we, _e, "xhr-resolved"], this.featureName),
                d.buffer([we], this.featureName),
                c.buffer(
                  ["setTimeout" + ve, "clearTimeout" + me, we],
                  this.featureName,
                ),
                u.buffer([we, "new-xhr", "send-xhr" + me], this.featureName),
                l.buffer(
                  [Ee + me, Ee + "-done", Ee + be + me, Ee + be + ve],
                  this.featureName,
                ),
                f.buffer(["newURL"], this.featureName),
                p.buffer([we], this.featureName),
                s.buffer(
                  ["propagate", xe, ye, "executor-err", "resolve" + me],
                  this.featureName,
                ),
                o.buffer([we, "no-" + we], this.featureName),
                i.buffer(
                  ["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"],
                  this.featureName,
                ),
                b(l, Ee + me),
                b(l, Ee + "-done"),
                b(i, "new-jsonp"),
                b(i, "jsonp-end"),
                b(i, "cb-start"),
                f.on("pushState-end", g),
                f.on("replaceState-end", g),
                window.addEventListener(
                  "hashchange",
                  g,
                  (0, O.m$)(!0, this.removeOnAbort?.signal),
                ),
                window.addEventListener(
                  "load",
                  g,
                  (0, O.m$)(!0, this.removeOnAbort?.signal),
                ),
                window.addEventListener(
                  "popstate",
                  function () {
                    g(0, n > 1);
                  },
                  (0, O.m$)(!0, this.removeOnAbort?.signal),
                ),
                (this.abortHandler = this.#a),
                this.importAggregator();
            }
            #a() {
              this.removeOnAbort?.abort(), (this.abortHandler = void 0);
            }
          },
        ],
        loaderType: "spa",
      });
    })();
})();
