(function (e) {
  function t(t) {
    for (var r, o, s = t[0], i = t[1], l = t[2], u = 0, p = []; u < s.length; u++)
      (o = s[u]), Object.prototype.hasOwnProperty.call(n, o) && n[o] && p.push(n[o][0]), (n[o] = 0);
    for (r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r]);
    b && b(t);
    while (p.length) p.shift()();
    return c.push.apply(c, l || []), a();
  }
  function a() {
    for (var e, t = 0; t < c.length; t++) {
      for (var a = c[t], r = !0, s = 1; s < a.length; s++) {
        var i = a[s];
        0 !== n[i] && (r = !1);
      }
      r && (c.splice(t--, 1), (e = o((o.s = a[0]))));
    }
    return e;
  }
  var r = {},
    n = { app: 0 },
    c = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var a = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, t, a) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (o.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (o.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var r in e)
          o.d(
            a,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return a;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e['default'];
            }
          : function () {
              return e;
            };
      return o.d(t, 'a', t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = '/');
  var s = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    i = s.push.bind(s);
  (s.push = t), (s = s.slice());
  for (var l = 0; l < s.length; l++) t(s[l]);
  var b = i;
  c.push([0, 'chunk-vendors']), a();
})({
  0: function (e, t, a) {
    e.exports = a('cd49');
  },
  '0397': function (e, t, a) {},
  '83d8': function (e, t, a) {
    'use strict';
    a('0397');
  },
  cd49: function (e, t, a) {
    'use strict';
    a.r(t);
    a('e260'), a('e6cf'), a('cca6'), a('a79d'), a('1de3');
    var r = a('7a23'),
      n = { id: 'nav', class: 'nav d-flex justify-content-center mx-5' },
      c = Object(r['e'])(
        'img',
        { src: '/logo.png', height: '64', width: '64', alt: 'Home' },
        null,
        -1
      ),
      o = Object(r['f'])(
        '<br><br><br><hr><div class="footer col-sm-12"><div class="footer-custom" align="center"><br> Copyright 1999 - 2021 <br><a href="https://casjay.pro" target="_blank">Casjays Developments</a> and <a href="https://jason.malaks.us" target="_blank">Jason M. Hempstead-Malak</a><br> Hosting by <a href="https://casjay.pro/hosting" target="_blank">Casjays Developments: Hosting</a><br> and powered by <a href="https://casjaysdev.pro" target="_blank">CasjaysDev.pro</a><br><br><a href="https://www.patreon.com/casjay" target="_blank"><img src="https://img.shields.io/badge/patreon-donate-orange.svg" border="0" alt="Casjays Patreon Page"></a><a href="https://www.paypal.me/casjaysdev" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-green.svg?casjay@yahoo.com" alt="Casjays Paypal Page"></a><br><br><a href="https://help.casjay.pro" target="_blank">CasjaysDev Support</a> | <a href="https://bugs.casjay.pro" target="_blank">CasjaysDev Bugs</a> <br><a href="https://servers.casjay.app" target="_blank">System Status</a> | <a href="https://uptime.casjay.app" target="_blank">Service Status</a> | <a href="https://uptime.servicestat.us" target="_blank">Complete Status</a> <br><a href="https://casjaysdev.pro/domains.html" target="_blank">Casjays Developments Domains</a><br><br> Casjays Developments privacy policy can be found at<br><a href="https://casjaysdev.pro/policy/" target="_blank">https://casjaysdev.pro/policy</a><br><div class="text-center" style="color:royalblue;"><br> Made with 💜💜💜💜💜💜 by <br><a href="http://github.com/casjay" target="_blank" rel="noopener"> Jason M. Hempstead (Casjay)</a><br> This site is powered by an <a href="https://github.com/casjay-templates" target="_blank"> open source </a>theme </div><br></div><br><br></div><br><br><br><br>',
        9
      );
    function s(e, t) {
      var a = Object(r['w'])('router-link'),
        s = Object(r['w'])('router-view');
      return (
        Object(r['q'])(),
        Object(r['d'])(
          r['a'],
          null,
          [
            Object(r['e'])('div', n, [
              Object(r['h'])(
                a,
                {
                  to: '/',
                  type: 'button',
                  style: { width: '100px', color: '#ffffff' },
                  class: 'm-2 text-left justify-content-between btn btn-outline-danger',
                },
                {
                  default: Object(r['B'])(function () {
                    return [c];
                  }),
                  _: 1,
                }
              ),
            ]),
            Object(r['h'])(s),
            o,
          ],
          64
        )
      );
    }
    a('83d8');
    var i = a('6b0d'),
      l = a.n(i);
    const b = {},
      u = l()(b, [['render', s]]);
    var p = u,
      d = a('6c02'),
      f = { class: 'home' };
    function j(e, t, a, n, c, o) {
      var s = Object(r['w'])('Welcome');
      return Object(r['q'])(), Object(r['d'])('div', f, [Object(r['h'])(s)]);
    }
    var h = a('d4ec'),
      g = a('262e'),
      m = a('2caf'),
      O = a('9ab4'),
      y = a('ce1f'),
      v = (a('b0c0'), { key: 0 }),
      w = { key: 1 },
      k = { class: 'row text-center' },
      S = { class: 'col-md-6 offset-md-3' },
      P = { class: 'text-center' },
      _ = Object(r['e'])('br', null, null, -1),
      x = Object(r['e'])('br', null, null, -1),
      q = Object(r['e'])('br', null, null, -1),
      C = Object(r['e'])('h2', null, 'Email:', -1),
      M = ['href'],
      D = Object(r['e'])('br', null, null, -1),
      L = Object(r['e'])('br', null, null, -1),
      H = Object(r['e'])('div', { class: 'mb-5' }, null, -1);
    function T(e, t, a, n, c, o) {
      var s = Object(r['w'])('spinner');
      return (
        Object(r['q'])(),
        Object(r['d'])(
          r['a'],
          null,
          [
            '' == e.setProfile || 1 == e.isLoading
              ? (Object(r['q'])(), Object(r['d'])('div', v, [Object(r['h'])(s)]))
              : (Object(r['q'])(),
                Object(r['d'])('div', w, [
                  Object(r['e'])('div', k, [
                    Object(r['e'])('div', S, [
                      Object(r['e'])('div', P, [
                        Object(r['e'])('h1', null, Object(r['y'])(e.setProfile.name), 1),
                        Object(r['e'])('p', null, Object(r['y'])(e.setProfile.tagLine), 1),
                        _,
                      ]),
                      Object(r['e'])('div', null, [
                        (Object(r['q'])(!0),
                        Object(r['d'])(
                          r['a'],
                          null,
                          Object(r['v'])(e.setProfile.bio, function (e) {
                            return (
                              Object(r['q'])(),
                              Object(r['d'])('span', { key: e }, [
                                Object(r['g'])(Object(r['y'])(e) + ' ', 1),
                                x,
                              ])
                            );
                          }),
                          128
                        )),
                        q,
                      ]),
                      C,
                      Object(r['e'])('div', null, [
                        (Object(r['q'])(!0),
                        Object(r['d'])(
                          r['a'],
                          null,
                          Object(r['v'])(e.setProfile.email, function (e) {
                            return (
                              Object(r['q'])(),
                              Object(r['d'])('span', { key: e }, [
                                Object(r['e'])(
                                  'a',
                                  { href: 'mailto:'.concat(e) },
                                  Object(r['y'])(e),
                                  9,
                                  M
                                ),
                                D,
                              ])
                            );
                          }),
                          128
                        )),
                        L,
                      ]),
                    ]),
                  ]),
                ])),
            H,
          ],
          64
        )
      );
    }
    var B = a('bc3a'),
      J = a.n(B),
      N = { key: 0 },
      W = { key: 1 },
      A = Object(r['e'])('h2', null, 'Loading data from the API', -1),
      E = [A],
      z = ['width', 'height', 'stroke'],
      F = Object(r['f'])(
        '<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',
        1
      ),
      I = [F];
    function G(e, t, a, n, c, o) {
      return (
        Object(r['q'])(),
        Object(r['d'])(
          r['a'],
          null,
          [
            null !== e.msgSpinner || '' !== e.msgSpinner
              ? (Object(r['q'])(),
                Object(r['d'])('div', N, [
                  Object(r['e'])('h2', null, Object(r['y'])(e.msgSpinner), 1),
                ]))
              : (Object(r['q'])(), Object(r['d'])('div', W, E)),
            (Object(r['q'])(),
            Object(r['d'])(
              'svg',
              {
                viewBox: '0 0 38 38',
                xmlns: 'http://www.w3.org/2000/svg',
                width: e.width,
                height: e.height,
                stroke: e.color,
              },
              I,
              8,
              z
            )),
          ],
          64
        )
      );
    }
    a('a9e3');
    var K = Object(r['i'])({
      name: 'spinner',
      props: {
        msg: { type: String },
        msgSpinner: { type: String },
        loading: { type: Boolean },
        color: { type: String, default: '#000' },
        height: { type: Number, default: 64 },
        width: { type: Number, default: 64 },
      },
    });
    const Q = l()(K, [['render', G]]);
    var R = Q,
      U = (function (e) {
        Object(g['a'])(a, e);
        var t = Object(m['a'])(a);
        function a() {
          return Object(h['a'])(this, a), t.apply(this, arguments);
        }
        return a;
      })(y['b']);
    U = Object(O['a'])(
      [
        Object(y['a'])({
          props: { msg: String, msgSpinner: { type: String } },
          components: { Spinner: R },
          computed: {},
          methods: {
            isLoading: function () {
              this.isLoading = !0;
            },
          },
          data: function () {
            return { isLoading: !0, setProfile: [] };
          },
          mounted: function () {
            var e = this;
            J.a.get('https://api.mpmalak.com/profile.json').then(function (t) {
              (e.setProfile = t.data), e.setProfile || (e.isLoading = !0);
            }),
              (this.isLoading = !1);
          },
        }),
      ],
      U
    );
    var V = U;
    const X = l()(V, [['render', T]]);
    var Y = X,
      Z = (function (e) {
        Object(g['a'])(a, e);
        var t = Object(m['a'])(a);
        function a() {
          return Object(h['a'])(this, a), t.apply(this, arguments);
        }
        return a;
      })(y['b']);
    Z = Object(O['a'])(
      [
        Object(y['a'])({
          props: { msg: { type: String }, msgSpinner: { type: String } },
          components: { Welcome: Y },
        }),
      ],
      Z
    );
    var $ = Z;
    const ee = l()($, [['render', j]]);
    var te = ee,
      ae = { class: 'container' },
      re = Object(r['f'])(
        '<div class="jumbotron"><h1><i class="fa fa-frown-o red"></i><a href="https://www.google.com/search?q=server+error+404" target="_blank">404 Not Found</a></h1><br><p class="lead"> We apologize but we can&#39;t seem to be able to find what you&#39;re looking for!<br></p><div class="container"><div class="body-content"><img alt="error" src="https://raw.githubusercontent.com/casjay-templates/default-web-assets/main/icons/errors/404.gif"><br></div></div><a href="/" class="btn btn-secondary btn-outline-danger btn-lg btn-block">return to homepage </a></div>',
        1
      ),
      ne = [re];
    function ce(e, t, a, n, c, o) {
      return Object(r['q'])(), Object(r['d'])('div', ae, ne);
    }
    var oe = (function (e) {
      Object(g['a'])(a, e);
      var t = Object(m['a'])(a);
      function a() {
        return Object(h['a'])(this, a), t.apply(this, arguments);
      }
      return a;
    })(y['b']);
    const se = l()(oe, [['render', ce]]);
    var ie = se,
      le = [
        { component: te, path: '/', name: 'Home', meta: { title: 'Home' } },
        { component: ie, path: '/error/404' },
        { path: '/:catchAll(.*)', redirect: '/error/404' },
      ],
      be = Object(d['a'])({ history: Object(d['b'])(), routes: le });
    be.afterEach(function (e) {
      var t = 'MPMalak |';
      document.title = ''.concat(t, ' ').concat(e.meta.title);
    });
    var ue = be,
      pe = a('5502'),
      de = Object(pe['a'])({ state: {}, mutations: {}, actions: {}, modules: {} });
    Object(r['c'])(p).use(de).use(ue).mount('#app');
  },
});
//# sourceMappingURL=app.68384a7f.js.map
