(self.webpackChunkcpg_marketing_services = self.webpackChunkcpg_marketing_services || []).push([
    [773],
    {
        56024: function (t, e, i) {
            "use strict";
            i.d(e, {
                x: function () {
                    return f;
                },
            });
            var n = i(19755),
                o = i.n(n),
                r = i(86267),
                s = i(91033),
                a = (i(66337), i(26038)),
                h = i(49127),
                c = i(64528),
                l = i(24867);
            function u(t) {
                return (
                    (u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    u(t)
                );
            }
            function d(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function g(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (r = void 0),
                            (r = (function (t, e) {
                                if ("object" !== u(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== u(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === u(r) ? r : String(r)),
                            n
                        );
                }
                var o, r;
            }
            function p(t, e, i) {
                return e && g(t.prototype, e), i && g(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            }
            window.recaptchaCallback = function () {
                o()(".captcha-hold").removeClass("form-error");
            };
            var f,
                m = (function () {
                    function t(e, i) {
                        d(this, t), (this.form = e), (this.event = i), this.submitForm();
                    }
                    return (
                        p(t, [
                            {
                                key: "submitForm",
                                value: function () {
                                    var t = this,
                                        e = this.form.attr("action"),
                                        i = this.form.attr("method"),
                                        n = this.form.serialize();
                                    o()
                                        .ajax({ method: i, url: e, data: n })
                                        .done(function (e) {
                                            try {
                                                (e = JSON.parse(e)).status
                                                    ? (new w(t.form, null, e.success).showSuccess(), new w(t.form, null, null).clearFields(), o()(".user-typing").length && o()(".user-typing").removeClass("user-typing"))
                                                    : new w(t.form, e.errors, null).addErrors(),
                                                    setTimeout(function () {
                                                        t.form.removeClass("form-loading");
                                                    }, 1e3);
                                            } catch (t) {
                                                console.log(t);
                                            }
                                        })
                                        .always(function (t) {});
                                },
                            },
                        ]),
                        t
                    );
                })(),
                w = (function () {
                    function t(e, i, n) {
                        d(this, t), (this.form = e), (this.errors = i), (this.success = n);
                    }
                    return (
                        p(t, [
                            {
                                key: "clearFields",
                                value: function () {
                                    try {
                                        o()(".user-typing").removeClass("user-typing"),
                                            this.form.find('input:not([type="hidden"]):not([type="checkbox"]), textarea').val("").blur(),
                                            this.form.find('input[type="checkbox"]').prop("checked", !1);
                                    } catch (t) {
                                        console.log(t);
                                    }
                                },
                            },
                            {
                                key: "addErrors",
                                value: function () {
                                    var t = this;
                                    o().each(this.errors, function (e, i) {
                                        (i = Object.values(i)[0]),
                                            "g-recaptcha" == e
                                                ? t.form.find(".".concat(e)).parent().addClass("form-error").find(".captcha-error").html(i)
                                                : (t.form
                                                      .find("[name='" + e + "']")
                                                      .parent()
                                                      .addClass("form-error"),
                                                  t.form
                                                      .find("[name='" + e + "']")
                                                      .val("")
                                                      .parent()
                                                      .attr("data-error-txt", i)
                                                      .removeClass("user-typing"));
                                    });
                                },
                            },
                            {
                                key: "showSuccess",
                                value: function () {
                                    var t = this;
                                    this.form.find(".form-success-title").html(this.success.title),
                                        this.form.find(".form-success-txt").html(this.success.message),
                                        this.form.addClass("form-success"),
                                        setTimeout(function () {
                                            t.form.removeClass("form-success");
                                        }, 5e3);
                                },
                            },
                        ]),
                        t
                    );
                })();
            (i.p = window._root), a.ZP.registerPlugin(h.L), a.ZP.defaults({ ease: "power2.inOut", duration: 0.5 });
            var S = function (t) {
                    "show" === t ? o()("html").addClass("show-contact-form") : o()("html").removeClass("show-contact-form");
                },
                y = function () {
                    o()(".trigger-form-btn").on("click", function () {
                        return S("show");
                    }),
                        o()(".contact-form-wrap").on("click", function (t) {
                            o()(t.target).parents(".contact-form-wrap").length || S("hide");
                        }),
                        o()(".contact-form-wrap .close-form-btn").on("click", function () {
                            return S("hide");
                        }),
                        o()(window).on("keyup", function (t) {
                            "Escape" === t.key && S("hide");
                        }),
                        o()(".scroll-to-section-btn").on("click", function (t) {
                            return (e = o()('[data-section-target-id="'.concat(o()(t.currentTarget).attr("data-section-target"), '"]'))[0]), void ((0, c.tq)() ? a.ZP.to(window, { duration: 1, scrollTo: { y: e } }) : f.scrollTo(e));
                            var e;
                        }),
                        o()(".ajax-form").on("submit", function (t) {
                            var e = o()(t.currentTarget);
                            t.preventDefault(), e.find(".form-error").removeClass("form-error"), e.hasClass("form-loading") || e.hasClass("form-success") || (e.addClass("form-loading"), new m(e, t));
                        }),
                        o()("form").on("change focus keydown paste input select2:open click", "input, textarea, select", function (t) {
                            o()(t.currentTarget).parents(".form-error").removeClass("form-error");
                        });
                };
            (function () {
                window.captchaCallback = function () {
                    var t;
                    o()("#contact-form").length &&
                        (grecaptcha.render("g-recaptcha-contact"),
                        (t = function () {
                            if (o()(window).width() >= 720) {
                                var t = o()(".contact-form-wrap"),
                                    e = t.find(".g-recaptcha"),
                                    i = t.find(".checkboxes-row");
                                a.ZP.set(i, { clearProps: !0 }), a.ZP.set(i, { width: e.width() });
                            }
                        })(),
                        o()(window).on("resizeObserverTrigger", t));
                };
            })(),
                (function () {
                    if (o()(".g-recaptcha").length) {
                        var t = document.createElement("script");
                        (t.type = "text/javascript"), (t.async = !0), (t.defer = !0), (t.src = o()("#recaptchaScript").data("src")), o()("#recaptchaScript").remove(), o()("body").append(t);
                    }
                })(),
                (f = !1),
                (0, c.tq)()
                    ? o()(".scroll-to-next-btn")
                          .off("click.gsapSmoothScroll")
                          .on("click.gsapSmoothScroll", function (t) {
                              a.ZP.to(document.body, { duration: 1, scrollTo: o()(t.currentTarget).parents("section").next()[0] });
                          })
                    : ((f = new r.ZP({ el: document.querySelector("[data-scroll-container]"), smooth: !0, lerp: 0.12, firefoxMultiplier: 1, touchMultiplier: 1 })),
                      o()(".scroll-to-next-btn")
                          .off("click.locoScrollSmoothScroll")
                          .on("click.locoScrollSmoothScroll", function (t) {
                              f.scrollTo(o()(t.currentTarget).parents("section").next()[0]);
                          }),
                      document.addEventListener("keydown", function (t) {
                          ("PageUp" !== t.key && "PageDown" !== t.key && " " !== t.key) || (t.preventDefault(), t.stopPropagation());
                      })),
                new s.Z(
                    (0, c.Ds)(function () {
                        o()(window).trigger("resizeObserverTrigger"), f && !(0, c.tq)() && f.update();
                    }, 250)
                ).observe(o()(".smooth-scroll-wrapper")[0]),
                y(),
                (0, c.jf)(),
                (0, l.S)(),
                (0, c.tq)() || a.ZP.set(o()(".section-intro-title-container").find(".height-el"), { paddingTop: "".concat((innerHeight / innerWidth) * 100, "%") });
        },
        64528: function (t, e, i) {
            "use strict";
            i.d(e, {
                Ds: function () {
                    return h;
                },
                jf: function () {
                    return l;
                },
                tq: function () {
                    return u;
                },
                wn: function () {
                    return a;
                },
            });
            var n = i(19755),
                o = i.n(n),
                r = i(84996),
                s = i.n(r);
            o().fn.clickOutside = function (t) {
                var e = this;
                o()(document).mouseup(function (i) {
                    e.is(i.target) || 0 !== e.has(i.target).length || t.apply(e);
                });
            };
            var a = function (t) {
                var e = 0;
                return (
                    t.each(function (t, i) {
                        return (e += o()(i).outerHeight());
                    }),
                    e
                );
            };
            function h(t, e, i, n) {
                var o;
                return function () {
                    var n = this,
                        r = arguments,
                        s = i && !o;
                    clearTimeout(o),
                        (o = setTimeout(function () {
                            (o = null), i || t.apply(n, r);
                        }, e)),
                        s && t.apply(n, r);
                };
            }
            var c = [],
                l = function () {
                    (c[0] = new (s())({ breakpoints: [{ width: 1024, src: "data-src-mobile" }], loadInvisible: !0, offset: 300 })), o()(".force-load-img").length && c[0].load(o()(".force-load-img"), !0);
                    var t = new IntersectionObserver(
                        function (t) {
                            t.forEach(function (t, e) {
                                t.intersectionRatio > 0 &&
                                    (o()(t.target).hasClass("blazy-triggered-load") ||
                                        (o()(t.target)
                                            .find(".b-lazy")
                                            .each(function (t, e) {
                                                c[0].load(o()(e), !0);
                                            }),
                                        o()(t.target).addClass("blazy-triggered-load")));
                            });
                        },
                        { root: null, rootMargin: "25%", threshold: 0 }
                    );
                    o()(".smooth-scroll-wrapper")
                        .children()
                        .each(function (e, i) {
                            t.observe(i);
                        });
                };
            function u() {
                return innerWidth < 1025;
            }
        },
        24867: function (t, e, i) {
            "use strict";
            i.d(e, {
                S: function () {
                    return D;
                },
            });
            var n = i(19755),
                o = i.n(n),
                r = i(26038),
                s = i(64528),
                a = i(56024),
                h = i(86492),
                c = i(89842),
                l = i.n(c),
                u = i(70014);
            function d(t) {
                return (
                    (d =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    d(t)
                );
            }
            function g(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (r = void 0),
                            (r = (function (t, e) {
                                if ("object" !== d(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== d(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === d(r) ? r : String(r)),
                            n
                        );
                }
                var o, r;
            }
            r.ZP.registerPlugin(u.C);
            var p = (function () {
                function t() {
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        o()(".splitByChars").length && this.splitText(o()(".splitByChars"), "chars"),
                        o()(".splitByWords").length && this.splitText(o()(".splitByWords"), "words"),
                        o()(".splitByLines").length && this.splitText(o()(".splitByLines"), "lines"),
                        o()(".splitByLinesChars").length && this.splitText(o()(".splitByLinesChars"), "linesChars"),
                        o()(".splitByAll").length && this.splitText(o()(".splitByAll"), "all"),
                        o()(".linesWordsLines").length && this.splitText(o()(".linesWordsLines"), "linesWordsLines"),
                        o()(".linesWordsLinesHover").length && this.splitText(o()(".linesWordsLinesHover"), "linesWordsLinesHover"),
                        o()(".splitByWordsChars").length && this.splitText(o()(".splitByWordsChars"), "wordsChars");
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "splitText",
                            value: function (t, e) {
                                "lines" == e
                                    ? t.each(function (e, i) {
                                          new u.C(t[e], { type: "lines", linesClass: "line-inner line++" }), new u.C(t[e], { type: "lines, words", linesClass: "line-outer line++" });
                                      })
                                    : "words" == e
                                    ? new u.C(t[0], { type: "words", wordsClass: "word word++" })
                                    : "chars" == e
                                    ? t.each(function (e, i) {
                                          new u.C(t[e], { type: "words,chars", wordsClass: "word word++", charsClass: "char char++" }), r.ZP.set(".char", { opacity: 0, y: 15 });
                                      })
                                    : "linesChars" == e
                                    ? new u.C(t[0], { type: "chars,words", charsClass: "char char++", wordsClass: "word word++" })
                                    : "linesWordsLines" == e
                                    ? t.each(function (e, i) {
                                          var n = o()(i).attr("data-words-to-strong");
                                          new u.C(t[e], { type: "lines, words", linesClass: "line-outer line++", wordsClass: "word word++" }).words.forEach(function (t) {
                                              new RegExp("\\b".concat(t.textContent, "\\b")).test(n) && o()(t).addClass("strong-style");
                                          });
                                      })
                                    : "linesWordsLinesHover" == e
                                    ? t.each(function (e, i) {
                                          new u.C(t[e], { type: "lines", linesClass: "line-inner-hover line++" }), new u.C(t[e], { type: "lines, words", linesClass: "line-outer-hover line++", wordsClass: "word word++" });
                                      })
                                    : "wordsChars" == e && new u.C(t, { type: "words,chars", wordsClass: "word word++", charsClass: "char char++" });
                            },
                        },
                    ]) && g(e.prototype, i),
                    n && g(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    t
                );
            })();
            i(56074);
            function f(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }
            function m(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    (n.enumerable = n.enumerable || !1),
                        (n.configurable = !0),
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(
                            t,
                            ((o = n.key),
                            (r = void 0),
                            (r = (function (t, e) {
                                if ("object" !== S(t) || null === t) return t;
                                var i = t[Symbol.toPrimitive];
                                if (void 0 !== i) {
                                    var n = i.call(t, e || "default");
                                    if ("object" !== S(n)) return n;
                                    throw new TypeError("@@toPrimitive must return a primitive value.");
                                }
                                return ("string" === e ? String : Number)(t);
                            })(o, "string")),
                            "symbol" === S(r) ? r : String(r)),
                            n
                        );
                }
                var o, r;
            }
            function w(t, e, i) {
                return e && m(t.prototype, e), i && m(t, i), Object.defineProperty(t, "prototype", { writable: !1 }), t;
            }
            function S(t) {
                return (
                    (S =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    S(t)
                );
            }
            (t = i.hmd(t)),
                (function (e) {
                    if ("object" == ("undefined" == typeof exports ? "undefined" : S(exports))) t.exports = e();
                    else if ("function" == typeof define && i.amdO) define([], e);
                    else {
                        var n;
                        "undefined" != typeof window ? (n = window) : void 0 !== i.g ? (n = i.g) : "undefined" != typeof self && (n = self), (n.decomp = e());
                    }
                })(function () {
                    return (function t(e, i, n) {
                        function o(s, a) {
                            if (!i[s]) {
                                if (!e[s]) {
                                    if (r) return r(s, !0);
                                    throw new Error("Cannot find module '" + s + "'");
                                }
                                var h = (i[s] = { exports: {} });
                                e[s][0].call(
                                    h.exports,
                                    function (t) {
                                        var i = e[s][1][t];
                                        return o(i || t);
                                    },
                                    h,
                                    h.exports,
                                    t,
                                    e,
                                    i,
                                    n
                                );
                            }
                            return i[s].exports;
                        }
                        for (var r = void 0, s = 0; s < n.length; s++) o(n[s]);
                        return o;
                    })(
                        {
                            1: [
                                function (t, e, i) {
                                    function n(t, e, i) {
                                        i = i || 0;
                                        var n,
                                            o,
                                            r,
                                            s,
                                            a,
                                            h,
                                            c,
                                            l = [0, 0];
                                        return (
                                            (n = t[1][1] - t[0][1]),
                                            (o = t[0][0] - t[1][0]),
                                            (r = n * t[0][0] + o * t[0][1]),
                                            (s = e[1][1] - e[0][1]),
                                            (a = e[0][0] - e[1][0]),
                                            (h = s * e[0][0] + a * e[0][1]),
                                            P((c = n * a - s * o), 0, i) || ((l[0] = (a * r - o * h) / c), (l[1] = (n * h - s * r) / c)),
                                            l
                                        );
                                    }
                                    function o(t, e, i, n) {
                                        var o = e[0] - t[0],
                                            r = e[1] - t[1],
                                            s = n[0] - i[0],
                                            a = n[1] - i[1];
                                        if (s * r - a * o == 0) return !1;
                                        var h = (o * (i[1] - t[1]) + r * (t[0] - i[0])) / (s * r - a * o),
                                            c = (s * (t[1] - i[1]) + a * (i[0] - t[0])) / (a * o - s * r);
                                        return h >= 0 && 1 >= h && c >= 0 && 1 >= c;
                                    }
                                    function r(t, e, i) {
                                        return (e[0] - t[0]) * (i[1] - t[1]) - (i[0] - t[0]) * (e[1] - t[1]);
                                    }
                                    function s(t, e, i) {
                                        return r(t, e, i) > 0;
                                    }
                                    function a(t, e, i) {
                                        return r(t, e, i) >= 0;
                                    }
                                    function h(t, e, i) {
                                        return r(t, e, i) < 0;
                                    }
                                    function c(t, e, i) {
                                        return r(t, e, i) <= 0;
                                    }
                                    function l(t, e, i, n) {
                                        if (n) {
                                            var o = _,
                                                s = C;
                                            (o[0] = e[0] - t[0]), (o[1] = e[1] - t[1]), (s[0] = i[0] - e[0]), (s[1] = i[1] - e[1]);
                                            var a = o[0] * s[0] + o[1] * s[1],
                                                h = Math.sqrt(o[0] * o[0] + o[1] * o[1]),
                                                c = Math.sqrt(s[0] * s[0] + s[1] * s[1]);
                                            return n > Math.acos(a / (h * c));
                                        }
                                        return 0 === r(t, e, i);
                                    }
                                    function u(t, e) {
                                        var i = e[0] - t[0],
                                            n = e[1] - t[1];
                                        return i * i + n * n;
                                    }
                                    function d(t, e) {
                                        var i = t.length;
                                        return t[0 > e ? (e % i) + i : e % i];
                                    }
                                    function g(t, e, i, n) {
                                        for (var o = i; n > o; o++) t.push(e[o]);
                                    }
                                    function p(t, e) {
                                        return h(d(t, e - 1), d(t, e), d(t, e + 1));
                                    }
                                    function f(t, e, i) {
                                        var o,
                                            r,
                                            s = T,
                                            h = A;
                                        if (a(d(t, e + 1), d(t, e), d(t, i)) && c(d(t, e - 1), d(t, e), d(t, i))) return !1;
                                        r = u(d(t, e), d(t, i));
                                        for (var l = 0; l !== t.length; ++l)
                                            if (
                                                (l + 1) % t.length !== e &&
                                                l !== e &&
                                                a(d(t, e), d(t, i), d(t, l + 1)) &&
                                                c(d(t, e), d(t, i), d(t, l)) &&
                                                ((s[0] = d(t, e)), (s[1] = d(t, i)), (h[0] = d(t, l)), (h[1] = d(t, l + 1)), (o = n(s, h)), u(d(t, e), o) < r)
                                            )
                                                return !1;
                                        return !0;
                                    }
                                    function m(t, e, i) {
                                        for (var n = 0; n !== t.length; ++n) if (n !== e && n !== i && (n + 1) % t.length !== e && (n + 1) % t.length !== i && o(d(t, e), d(t, i), d(t, n), d(t, n + 1))) return !1;
                                        return !0;
                                    }
                                    function w(t, e, i, n) {
                                        var o = n || [];
                                        if (
                                            ((function (t) {
                                                t.length = 0;
                                            })(o),
                                            i > e)
                                        )
                                            for (var r = e; i >= r; r++) o.push(t[r]);
                                        else {
                                            for (r = 0; i >= r; r++) o.push(t[r]);
                                            for (r = e; r < t.length; r++) o.push(t[r]);
                                        }
                                        return o;
                                    }
                                    function S(t) {
                                        for (var e = [], i = [], n = [], o = [], r = Number.MAX_VALUE, s = 0; s < t.length; ++s)
                                            if (p(t, s))
                                                for (var a = 0; a < t.length; ++a)
                                                    if (f(t, s, a)) {
                                                        (i = S(w(t, s, a, o))), (n = S(w(t, a, s, o)));
                                                        for (var h = 0; h < n.length; h++) i.push(n[h]);
                                                        i.length < r && ((e = i), (r = i.length), e.push([d(t, s), d(t, a)]));
                                                    }
                                        return e;
                                    }
                                    function y(t, e) {
                                        if (0 === e.length) return [t];
                                        if (e instanceof Array && e.length && e[0] instanceof Array && 2 === e[0].length && e[0][0] instanceof Array) {
                                            for (var i = [t], n = 0; n < e.length; n++)
                                                for (var o = e[n], r = 0; r < i.length; r++) {
                                                    var s = y(i[r], o);
                                                    if (s) {
                                                        i.splice(r, 1), i.push(s[0], s[1]);
                                                        break;
                                                    }
                                                }
                                            return i;
                                        }
                                        (o = e), (n = t.indexOf(o[0])), (r = t.indexOf(o[1]));
                                        return -1 !== n && -1 !== r && [w(t, n, r), w(t, r, n)];
                                    }
                                    function v(t, e, i, n, o) {
                                        o = o || 0;
                                        var r = e[1] - t[1],
                                            s = t[0] - e[0],
                                            a = r * t[0] + s * t[1],
                                            h = n[1] - i[1],
                                            c = i[0] - n[0],
                                            l = h * i[0] + c * i[1],
                                            u = r * c - h * s;
                                        return P(u, 0, o) ? [0, 0] : [(c * a - s * l) / u, (r * l - h * a) / u];
                                    }
                                    function P(t, e, i) {
                                        return (i = i || 0), Math.abs(t - e) <= i;
                                    }
                                    function b(t, e, i) {
                                        return P(t[0], e[0], i) && P(t[1], e[1], i);
                                    }
                                    e.exports = {
                                        decomp: function (t) {
                                            var e = S(t);
                                            return e.length > 0 ? y(t, e) : [t];
                                        },
                                        quickDecomp: function t(e, i, n, o, r, l, f) {
                                            (l = l || 100), (f = f || 0), (r = r || 25), (i = void 0 !== i ? i : []), (n = n || []), (o = o || []);
                                            var w = [0, 0],
                                                S = [0, 0],
                                                y = [0, 0],
                                                P = 0,
                                                b = 0,
                                                _ = 0,
                                                C = 0,
                                                T = 0,
                                                A = 0,
                                                V = 0,
                                                k = [],
                                                x = [],
                                                G = e,
                                                O = e;
                                            if (O.length < 3) return i;
                                            if (++f > l) return console.warn("quickDecomp: max level (" + l + ") reached."), i;
                                            for (var L = 0; L < e.length; ++L)
                                                if (p(G, L)) {
                                                    n.push(G[L]), (P = b = Number.MAX_VALUE);
                                                    for (var H = 0; H < e.length; ++H)
                                                        s(d(G, L - 1), d(G, L), d(G, H)) &&
                                                            c(d(G, L - 1), d(G, L), d(G, H - 1)) &&
                                                            ((y = v(d(G, L - 1), d(G, L), d(G, H), d(G, H - 1))), h(d(G, L + 1), d(G, L), y) && b > (_ = u(G[L], y)) && ((b = _), (S = y), (A = H))),
                                                            s(d(G, L + 1), d(G, L), d(G, H + 1)) &&
                                                                c(d(G, L + 1), d(G, L), d(G, H)) &&
                                                                ((y = v(d(G, L + 1), d(G, L), d(G, H), d(G, H + 1))), s(d(G, L - 1), d(G, L), y) && P > (_ = u(G[L], y)) && ((P = _), (w = y), (T = H)));
                                                    if (A === (T + 1) % e.length)
                                                        (y[0] = (S[0] + w[0]) / 2),
                                                            (y[1] = (S[1] + w[1]) / 2),
                                                            o.push(y),
                                                            T > L
                                                                ? (g(k, G, L, T + 1), k.push(y), x.push(y), 0 !== A && g(x, G, A, G.length), g(x, G, 0, L + 1))
                                                                : (0 !== L && g(k, G, L, G.length), g(k, G, 0, T + 1), k.push(y), x.push(y), g(x, G, A, L + 1));
                                                    else {
                                                        if ((A > T && (T += e.length), (C = Number.MAX_VALUE), A > T)) return i;
                                                        for (H = A; T >= H; ++H) a(d(G, L - 1), d(G, L), d(G, H)) && c(d(G, L + 1), d(G, L), d(G, H)) && C > (_ = u(d(G, L), d(G, H))) && m(G, L, H) && ((C = _), (V = H % e.length));
                                                        V > L ? (g(k, G, L, V + 1), 0 !== V && g(x, G, V, O.length), g(x, G, 0, L + 1)) : (0 !== L && g(k, G, L, O.length), g(k, G, 0, V + 1), g(x, G, V, L + 1));
                                                    }
                                                    return k.length < x.length ? (t(k, i, n, o, r, l, f), t(x, i, n, o, r, l, f)) : (t(x, i, n, o, r, l, f), t(k, i, n, o, r, l, f)), i;
                                                }
                                            return i.push(e), i;
                                        },
                                        isSimple: function (t) {
                                            var e,
                                                i = t;
                                            for (e = 0; e < i.length - 1; e++) for (var n = 0; e - 1 > n; n++) if (o(i[e], i[e + 1], i[n], i[n + 1])) return !1;
                                            for (e = 1; e < i.length - 2; e++) if (o(i[0], i[i.length - 1], i[e], i[e + 1])) return !1;
                                            return !0;
                                        },
                                        removeCollinearPoints: function (t, e) {
                                            for (var i = 0, n = t.length - 1; t.length > 3 && n >= 0; --n) l(d(t, n - 1), d(t, n), d(t, n + 1), e) && (t.splice(n % t.length, 1), i++);
                                            return i;
                                        },
                                        removeDuplicatePoints: function (t, e) {
                                            for (var i = t.length - 1; i >= 1; --i) for (var n = t[i], o = i - 1; o >= 0; --o) b(n, t[o], e) && t.splice(i, 1);
                                        },
                                        makeCCW: function (t) {
                                            for (var e = 0, i = t, n = 1; n < t.length; ++n) (i[n][1] < i[e][1] || (i[n][1] === i[e][1] && i[n][0] > i[e][0])) && (e = n);
                                            return (
                                                !s(d(t, e - 1), d(t, e), d(t, e + 1)) &&
                                                ((function (t) {
                                                    for (var e = [], i = t.length, n = 0; n !== i; n++) e.push(t.pop());
                                                    for (n = 0; n !== i; n++) t[n] = e[n];
                                                })(t),
                                                !0)
                                            );
                                        },
                                    };
                                    var _ = [],
                                        C = [],
                                        T = [],
                                        A = [];
                                },
                                {},
                            ],
                        },
                        {},
                        [1]
                    )(1);
                }),
                r.ZP.registerPlugin(h.X);
            var y = function (t) {
                    var e = (0, s.wn)(t.prevAll("section")),
                        i = t.outerHeight(),
                        n = (0, s.tq)() ? document.body.scrollTop : a.x.scroll.instance.scroll.y;
                    return n + innerHeight >= e && n <= e + i;
                },
                v = { root: null, rootMargin: "0px", threshold: 0 },
                P = { root: null, rootMargin: "0% 0% 50% 0%", threshold: 0 },
                b = (function () {
                    function t() {
                        f(this, t),
                            (this.animCompleted = !1),
                            (this.section = o()(".intro-section")),
                            (this.titles = o()(".intro-title-el")),
                            (this.titlesWrap = o()(".intro-txt-content")),
                            (this.canvas = document.querySelector(".intro-canvas")),
                            (this.ctx = this.canvas.getContext("2d")),
                            (this.images = [
                                { src: _root + "images/intro/triangle.svg", name: "triangle", scaleVal: 0, degrees: 0 },
                                { src: _root + "images/intro/bottle.svg", name: "bottle", scaleVal: 0, degrees: -45 },
                                { src: _root + "images/intro/candy.svg", name: "candy", scaleVal: 0, degrees: 0 },
                                { src: _root + "images/intro/candy-2.svg", name: "candy-2", scaleVal: 0, degrees: 0 },
                                { src: _root + "images/intro/star.svg", name: "star", scaleVal: 0, degrees: 0 },
                                { src: _root + "images/intro/logo.svg", name: "logo", scaleVal: 0, degrees: 45 },
                            ]),
                            this.getAnimParams(),
                            this.loadImages();
                    }
                    return (
                        w(t, [
                            {
                                key: "getAnimParams",
                                value: function () {
                                    var t = this;
                                    (this.canvasWidth = this.section.outerWidth()),
                                        (this.canvasHeight = this.section.outerHeight()),
                                        (this.canvas.width = Math.ceil(this.canvasWidth)),
                                        (this.canvas.height = Math.ceil(this.canvasHeight)),
                                        (this.imagesAnimValues = []),
                                        this.images.forEach(function (e) {
                                            t.imagesAnimValues.push({ scaleVal: e.scaleVal, degrees: e.degrees });
                                        }),
                                        (this.colors = ["#000", "#FBD5EC", "#D8F9DC"]),
                                        (this.animatedColor = { value: "#000" }),
                                        (this.imageTranslateAmount = { xValue: 0, yValue: 0 }),
                                        (this.circleEl = { radius: o()(".intro-circle-element").outerWidth() / 2, scaleVal: 0 }),
                                        (this.startAt = 3.4),
                                        (this.animPosOffset = 0.29),
                                        (this.animDur = 0.3),
                                        (this.animEasing = "power1.inOut");
                                },
                            },
                            {
                                key: "initialAnim",
                                value: function () {
                                    var t = this;
                                    (this.tl = r.ZP.timeline({ defaults: { ease: "none", duration: this.animDur } })),
                                        this.tl.fromTo(
                                            this.animatedColor,
                                            { value: this.colors[0] },
                                            {
                                                value: this.colors[1],
                                                duration: 0.4,
                                                onUpdate: function () {
                                                    return t.animateBgr();
                                                },
                                                onStart: function () {
                                                    return t.animateBgr();
                                                },
                                            },
                                            0
                                        ),
                                        this.tl.to(this.titles, { opacity: 0.1, duration: 0.4 }, 0),
                                        this.tl.to(this.titles[0], { opacity: 1, duration: 0.5 }, 0.4),
                                        this.tl.fromTo(
                                            this.animatedColor,
                                            { value: this.colors[1] },
                                            {
                                                value: this.colors[2],
                                                duration: 0.5,
                                                onStart: function () {
                                                    return t.animateBgr();
                                                },
                                                onUpdate: function () {
                                                    return t.animateBgr();
                                                },
                                            },
                                            1.9
                                        ),
                                        this.tl.to(this.titles[0], { opacity: 0.1, duration: 0.5 }, 1.9),
                                        this.tl.to(this.titles[1], { opacity: 1, duration: 0.5 }, 1.9),
                                        this.tl.fromTo(this.titlesWrap, { y: 0 }, { y: -innerHeight, ease: this.animEasing, duration: 0.4 }, 3.4),
                                        this.tl.to(
                                            this.circleEl,
                                            {
                                                scaleVal: 1,
                                                ease: this.animEasing,
                                                duration: 0.4,
                                                onStart: function () {
                                                    t.animateBgr(), t.drawCircle();
                                                },
                                                onUpdate: function () {
                                                    t.animateBgr(), t.drawCircle();
                                                },
                                            },
                                            3.4
                                        ),
                                        this.tl.to(
                                            this.circleEl,
                                            { scaleVal: innerWidth > innerHeight ? (1.05 * this.canvasWidth) / this.circleEl.radius : (1.05 * this.canvasHeight) / this.circleEl.radius, ease: this.animEasing },
                                            this.startAt + 1 * this.animPosOffset
                                        ),
                                        this.tl.to(
                                            this.imagesAnimValues[0],
                                            {
                                                scaleVal: 1,
                                                ease: this.animEasing,
                                                onStart: function () {
                                                    t.animateBgr(), t.drawCircle(), t.drawCanvasImage(0);
                                                },
                                                onUpdate: function () {
                                                    t.animateBgr(), t.drawCircle(), t.drawCanvasImage(0);
                                                },
                                            },
                                            this.startAt + 1 * this.animPosOffset
                                        ),
                                        this.tl.to(
                                            this.circleEl,
                                            { scaleVal: innerWidth > innerHeight ? (1.5 * this.canvasWidth) / this.circleEl.radius : (1.5 * this.canvasHeight) / this.circleEl.radius, ease: this.animEasing },
                                            this.startAt + 2 * this.animPosOffset
                                        ),
                                        this.tl.to(this.imagesAnimValues[1], { scaleVal: 1, degrees: -1.06, ease: this.animEasing }, this.startAt + 2 * this.animPosOffset),
                                        this.tl.to(
                                            this.imagesAnimValues[0],
                                            {
                                                degrees: 360,
                                                scaleVal: innerWidth > innerHeight ? (1.75 * this.canvasWidth) / this.images[0].width : (1.75 * this.canvasHeight) / this.images[0].width,
                                                ease: this.animEasing,
                                                onStart: function () {
                                                    t.animateBgr(), t.drawCircle(), t.drawCanvasImage(0), t.drawCanvasImage(1);
                                                },
                                                onUpdate: function () {
                                                    t.animateBgr(), t.drawCircle(), t.drawCanvasImage(0), t.drawCanvasImage(1);
                                                },
                                            },
                                            this.startAt + 2 * this.animPosOffset
                                        ),
                                        this.tl.to(
                                            this.imagesAnimValues[0],
                                            { scaleVal: innerWidth > innerHeight ? (2 * this.canvasWidth) / this.images[0].width : (2 * this.canvasHeight) / this.images[0].width, ease: this.animEasing },
                                            this.startAt + 3 * this.animPosOffset
                                        ),
                                        this.tl.to(this.imagesAnimValues[2], { scaleVal: 1, ease: this.animEasing }, this.startAt + 3 * this.animPosOffset),
                                        this.tl.to(
                                            this.imagesAnimValues[1],
                                            {
                                                scaleVal: innerWidth > innerHeight ? (0.975 * this.canvasWidth) / this.images[1].width : (0.975 * this.canvasHeight) / this.images[1].width,
                                                ease: this.animEasing,
                                                onStart: function () {
                                                    t.animateBgr(), t.drawCanvasImage(0), t.drawCanvasImage(1), t.drawCanvasImage(2);
                                                },
                                                onUpdate: function () {
                                                    t.animateBgr(), t.drawCanvasImage(0), t.drawCanvasImage(1), t.drawCanvasImage(2);
                                                },
                                            },
                                            this.startAt + 3 * this.animPosOffset
                                        ),
                                        this.tl.to(
                                            this.imagesAnimValues[1],
                                            { scaleVal: innerWidth > innerHeight ? (1.2 * this.canvasWidth) / this.images[1].width : (1.2 * this.canvasHeight) / this.images[1].width, ease: this.animEasing },
                                            this.startAt + 4 * this.animPosOffset
                                        ),
                                        this.tl.to(this.imagesAnimValues[3], { scaleVal: 1, ease: this.animEasing }, this.startAt + 4 * this.animPosOffset),
                                        this.tl.to(
                                            this.imagesAnimValues[2],
                                            {
                                                degrees: -30,
                                                scaleVal: innerWidth > innerHeight ? (2 * this.canvasWidth) / this.images[2].width : (2 * this.canvasHeight) / this.images[2].width,
                                                ease: this.animEasing,
                                                onStart: function () {
                                                    t.animateBgr(), t.drawCanvasImage(1), t.drawCanvasImage(2), t.drawCanvasImage(3);
                                                },
                                                onUpdate: function () {
                                                    t.animateBgr(), t.drawCanvasImage(1), t.drawCanvasImage(2), t.drawCanvasImage(3);
                                                },
                                            },
                                            this.startAt + 4 * this.animPosOffset
                                        ),
                                        this.tl.to(
                                            this.imagesAnimValues[3],
                                            { scaleVal: innerWidth > innerHeight ? (1 * this.canvasWidth) / this.images[3].width : (1 * this.canvasHeight) / this.images[3].width, degrees: 45, ease: this.animEasing },
                                            this.startAt + 5 * this.animPosOffset
                                        ),
                                        this.tl.to(
                                            this.imagesAnimValues[4],
                                            {
                                                scaleVal: 1,
                                                ease: this.animEasing,
                                                onStart: function () {
                                                    t.animateBgr(), t.drawCanvasImage(2), t.drawCanvasImage(3), t.drawCanvasImage(4);
                                                },
                                                onUpdate: function () {
                                                    t.animateBgr(), t.drawCanvasImage(2), t.drawCanvasImage(3), t.drawCanvasImage(4);
                                                },
                                            },
                                            this.startAt + 5 * this.animPosOffset
                                        ),
                                        this.tl.to(
                                            this.imagesAnimValues[3],
                                            { scaleVal: innerWidth > innerHeight ? (1.1 * this.canvasWidth) / this.images[3].width : (1.1 * this.canvasHeight) / this.images[3].width, degrees: 0, ease: this.animEasing },
                                            this.startAt + 6 * this.animPosOffset
                                        ),
                                        this.tl.to(this.imagesAnimValues[5], { scaleVal: 1, degrees: 0, ease: this.animEasing }, this.startAt + 6 * this.animPosOffset),
                                        this.tl.to(
                                            this.imagesAnimValues[4],
                                            {
                                                scaleVal: innerWidth > innerHeight ? (1.75 * this.canvasWidth) / this.images[4].width : (1.75 * this.canvasHeight) / this.images[4].width,
                                                degrees: 45,
                                                ease: this.animEasing,
                                                onStart: function () {
                                                    t.animateBgr(), t.drawCanvasImage(2), t.drawCanvasImage(3), t.drawCanvasImage(4), t.drawCanvasImage(5);
                                                },
                                                onUpdate: function () {
                                                    t.animateBgr(), t.drawCanvasImage(2), t.drawCanvasImage(3), t.drawCanvasImage(4), t.drawCanvasImage(5);
                                                },
                                            },
                                            this.startAt + 6 * this.animPosOffset
                                        ),
                                        this.tl.to(
                                            this.canvas,
                                            {
                                                autoAlpha: 0,
                                                ease: "none",
                                                delay: this.animPosOffset / 2,
                                                duration: this.animPosOffset / 2,
                                                onComplete: function () {
                                                    return r.ZP.set(t.section, { autoAlpha: 0 });
                                                },
                                            },
                                            this.startAt + 7 * this.animPosOffset
                                        ),
                                        this.tl.to(this.imageTranslateAmount, { xValue: this.images[5].width, yValue: this.images[5].height, ease: this.animEasing }, this.startAt + 7 * this.animPosOffset),
                                        this.tl.to(
                                            this.imagesAnimValues[5],
                                            {
                                                scaleVal: innerWidth > innerHeight ? (3 * this.canvasWidth) / this.images[5].width : (3 * this.canvasHeight) / this.images[5].width,
                                                ease: this.animEasing,
                                                onStart: function () {
                                                    t.animateBgr(), t.drawCanvasImage(4), t.drawCanvasImage(5);
                                                },
                                                onUpdate: function () {
                                                    t.animateBgr(), t.drawCanvasImage(4), t.drawCanvasImage(5);
                                                },
                                                onComplete: function () {
                                                    (t.animCompleted = !0), o()(window).trigger("introAnimComplete");
                                                },
                                            },
                                            this.startAt + 7 * this.animPosOffset
                                        );
                                },
                            },
                            {
                                key: "loadImages",
                                value: function () {
                                    var t = this,
                                        e = this.images.length,
                                        i = 0;
                                    this.images.forEach(function (n) {
                                        var o = new Image();
                                        (o.onload = function () {
                                            (i += 1), (n.width = o.width), (n.height = o.height), (n.img = o), e == i && t.initialAnim();
                                        }),
                                            (o.src = n.src);
                                    });
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        t.animCompleted || (void 0 !== t.tl && (t.tl.kill(), (t.tl = null)), r.ZP.set([t.titles, t.titlesWrap], { clearProps: !0 }), t.getAnimParams(), t.initialAnim());
                                    });
                                },
                            },
                            {
                                key: "animateBgr",
                                value: function () {
                                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), (this.ctx.fillStyle = this.animatedColor.value), this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                                },
                            },
                            {
                                key: "drawCircle",
                                value: function () {
                                    (this.ctx.fillStyle = this.colors[1]),
                                        this.ctx.beginPath(),
                                        this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, (this.circleEl.radius / 2) * this.circleEl.scaleVal, 0, 2 * Math.PI),
                                        this.ctx.closePath(),
                                        this.ctx.fill();
                                },
                            },
                            {
                                key: "drawCanvasImage",
                                value: function (t) {
                                    var e = this.images[t].img,
                                        i = Math.ceil(e.width * this.imagesAnimValues[t].scaleVal),
                                        n = Math.ceil(e.height * this.imagesAnimValues[t].scaleVal);
                                    this.ctx.save(),
                                        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2),
                                        this.ctx.rotate((this.imagesAnimValues[t].degrees * Math.PI) / 180),
                                        this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2),
                                        this.ctx.drawImage(e, this.canvas.width / 2 - i / 2 - this.imageTranslateAmount.xValue, this.canvas.height / 2 - n / 2 - this.imageTranslateAmount.yValue, i, n),
                                        this.ctx.restore();
                                },
                            },
                        ]),
                        t
                    );
                })(),
                _ = function () {
                    var t = o()(".hero-section"),
                        e = t.find(".section-title"),
                        i = o()(".feel-inspired-section"),
                        n = (0, s.tq)() ? t.find(".scroll-btn-wrap") : i.find(".scroll-btn-wrap"),
                        a = n.find(".svg-icon-wrap"),
                        h = i.find(".video-wrap"),
                        c = (o()("header"), o()(".sticky-sidemenu-wrap")),
                        l = "elastic.out(.5, .2)",
                        u = document.getElementById("path-1");
                    i.addClass("introAnimComplete"),
                        r.ZP.to([o()(".fade-in-initial"), c.find(".content-wrap"), t.find(".section-subtitle")], { opacity: 1, duration: 0.6, delay: 0.2, ease: "none" }),
                        r.ZP.to(t.find(".bgc-color-el"), {
                            scaleY: t.outerHeight() / innerHeight,
                            onComplete: function () {
                                return t.addClass("ov-hidden");
                            },
                        }),
                        r.ZP.fromTo(h, { scale: 0 }, { scale: 1, duration: 1 }),
                        r.ZP.fromTo(
                            u,
                            { strokeDashoffset: 0 },
                            {
                                strokeDashoffset: -u.getTotalLength(),
                                ease: "power2",
                                duration: 0.75,
                                delay: 0.25,
                                onStart: function () {
                                    return r.ZP.set(".angled-text", { opacity: 1 });
                                },
                            }
                        ),
                        r.ZP.fromTo(
                            e,
                            { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", yPercent: 30 },
                            {
                                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                yPercent: 0,
                                duration: 0.6,
                                delay: 0.4,
                                ease: "power1.inOut",
                                onComplete: function () {
                                    W(), e.addClass("no-initial-anim-styles"), r.ZP.set(e, { clearProps: !0 });
                                },
                            }
                        );
                    (0, s.tq)() && r.ZP.set(n, { bottom: innerHeight - o()(".feel-inspired-section").find(".video-wrap-el-start").offset().top + 25, opacity: 1 }),
                        r.ZP.to(n.find(".scroll-btn-scale-wrap"), {
                            scale: 1,
                            duration: 1,
                            delay: 1,
                            ease: l,
                            onComplete: function () {
                                var t = a[0].offsetTop,
                                    e = t - (n.height() - (t + a.height()));
                                r.ZP.to(a, { y: -e, opacity: 0.7, repeat: -1, yoyo: !0 });
                            },
                        }),
                        r.ZP.to(o()(".header-btn").find(".btn-txt"), { opacity: 1, delay: 1, ease: "none", duration: 0.2 }),
                        r.ZP.to(o()(".header-btn").find(".btn-bg-color"), {
                            scaleX: 1,
                            duration: 1,
                            delay: 1,
                            ease: l,
                            onComplete: function () {
                                return o()(".header-btn").addClass("animated-in");
                            },
                        });
                },
                C = (function () {
                    function t() {
                        f(this, t),
                            (this.heroSectionWrap = o()(".hero-section-wrap")),
                            (this.heroSection = o()(".hero-section")),
                            (this.section = o()(".feel-inspired-section")),
                            (this.scrollBtn = (0, s.tq)() ? this.heroSection.find(".scroll-btn") : this.section.find(".scroll-btn")),
                            (this.startPos = this.section.find(".video-wrap-el-start")),
                            (this.endPos = this.section.find(".video-wrap-el-end")),
                            (this.visibleMedia = this.section.find(".video-wrap")),
                            (this.titleContent = this.section.find(".title-content")),
                            (this.cardsComponent = this.section.find(".cards-component")),
                            (this.cardsComponentOuterWrap = this.cardsComponent.parent()),
                            (this.cardsComponentBlocks = this.cardsComponent.children()),
                            (this.cardsStickyWrap = this.section.find(".cards-sticky-wrap")),
                            (this.path = o()("#path-1")[0]),
                            this.positionMediaInit(),
                            this.initControls(),
                            this.cardsStickyWrap.addClass("loaded");
                    }
                    return (
                        w(t, [
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)),
                                            void 0 !== t.blocksLoopTl && (t.blocksLoopTl.kill(), (t.blocksLoopTl = null)),
                                            r.ZP.ticker.remove(t.progressTween),
                                            r.ZP.set(t.elementsToClear, { clearProps: !0 }),
                                            t.positionMediaInit(),
                                            t.progressTween(),
                                            y(t.section) && r.ZP.ticker.add(t.progressTween);
                                    });
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                    }, v)),
                                        this.observer.observe(this.section[0]),
                                        this.resize();
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    (this.isMobile = (0, s.tq)()),
                                        (this.sectionHeight = this.section.outerHeight()),
                                        (this.heroSectionHeight = this.heroSection.outerHeight()),
                                        this.isMobile
                                            ? ((this.startPosBorderRadius = 60), (this.endPosBorderRadius = 30))
                                            : ((this.startPosBorderRadius = innerWidth > 1024 && innerWidth <= 1920 ? 0.11406 * innerWidth : 219),
                                              (this.endPosBorderRadius = innerWidth > 1024 && innerWidth <= 1920 ? 0.03125 * innerWidth : 60));
                                    var t = this.startPos.position();
                                    this.startPosValues = { widthVal: this.startPos.width(), heightVal: this.startPos.height(), topVal: t.top, leftVal: t.left, borderRadiusVal: Math.ceil(this.startPosBorderRadius) };
                                    var e = h.X.getRelativePosition(this.startPos[0], this.endPos[0]),
                                        i = this.endPos.position();
                                    (this.endPosValues = { widthVal: this.endPos.width(), heightVal: this.endPos.height(), topVal: i.top, leftVal: i.left, borderRadiusVal: Math.ceil(this.endPosBorderRadius), endXPos: e.x, endYPos: e.y }),
                                        (this.elPositionOffset = 0),
                                        (this.canvasDurationOffset = this.isMobile ? this.heroSectionHeight : this.heroSectionHeight + this.sectionHeight),
                                        (this.heroSectionAnimDuration = (0.8 * this.heroSectionHeight) / this.canvasDurationOffset),
                                        (this.sectionContentAnimDuration = (0.2 * this.heroSectionHeight) / this.canvasDurationOffset),
                                        (this.postSectionContentAnimDuration = this.endPosValues.heightVal / this.canvasDurationOffset),
                                        this.isMobile
                                            ? (this.elementsToClear = [this.visibleMedia, this.scrollBtn, this.heroSection.find(".sticky-wrap-anim-el"), this.heroSection.find(".sticky-wrap-reveal-el")])
                                            : (this.elementsToClear = [
                                                  this.visibleMedia,
                                                  this.scrollBtn,
                                                  this.heroSection.find(".sticky-wrap-anim-el"),
                                                  this.heroSection.find(".sticky-wrap-reveal-el"),
                                                  this.section.find(".section-info-title"),
                                                  this.section.find(".section-title"),
                                                  this.section.find(".section-txt"),
                                                  this.cardsComponent,
                                                  this.cardsComponentBlocks,
                                                  this.path,
                                                  this.cardsStickyWrap,
                                              ]);
                                },
                            },
                            {
                                key: "positionMediaInit",
                                value: function () {
                                    this.getAnimParams(),
                                        r.ZP.set(this.visibleMedia, {
                                            width: this.startPosValues.widthVal,
                                            height: this.startPosValues.heightVal,
                                            top: this.startPosValues.topVal,
                                            left: this.startPosValues.leftVal,
                                            borderRadius: this.startPosValues.borderRadiusVal,
                                        }),
                                        this.isMobile || this.blocksLoopAnim(),
                                        this.createTl(),
                                        r.ZP.set(this.cardsComponentBlocks, { scale: 1, xPercent: 0, yPercent: 0 });
                                },
                            },
                            {
                                key: "blocksLoopAnim",
                                value: function () {
                                    var t = this;
                                    (this.blockScaleAmount = 0.8658),
                                        (this.blockWidth = this.cardsComponentBlocks.first().outerWidth()),
                                        (this.xTranslateBy = 15.8),
                                        (this.yTranslateBy = 12.3),
                                        (this.pause = 5),
                                        (this.blocksLoopTlDuration = 0.5),
                                        (this.blocksLoopTl = r.ZP.timeline({
                                            paused: !0,
                                            defaults: { ease: "power2", duration: this.blocksLoopTlDuration },
                                            repeat: -1,
                                            repeatDelay: this.pause,
                                            onReverseComplete: function () {
                                                return t.blocksLoopTl.pause();
                                            },
                                        })),
                                        this.cardsComponentBlocks.each(function (e, i) {
                                            var n = o()(i);
                                            switch ((t.blocksLoopTl.to({}, { duration: e > 0 ? t.pause : t.pause / 5 }), t.blocksLoopTl.addLabel("blockLabel-" + e, ">"), e)) {
                                                case 0:
                                                    t.blocksLoopTl.fromTo(n, { scale: 1 }, { scale: t.blockScaleAmount, xPercent: 100 + t.xTranslateBy + 5, yPercent: -8 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.to(n.find(".card-item-link"), { autoAlpha: 0 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.set(i, { zIndex: 1 }, ">"),
                                                        t.blocksLoopTl.fromTo(n.next(), { xPercent: 0, yPercent: 0 }, { xPercent: -t.xTranslateBy, yPercent: -t.yTranslateBy }, "blockLabel-" + e),
                                                        t.blocksLoopTl.to(n.next().find(".card-item-link"), { autoAlpha: 1 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.set(n.next(), { zIndex: 3 }, ">"),
                                                        t.blocksLoopTl.fromTo(t.cardsComponentBlocks.last(), { xPercent: 0, yPercent: 0 }, { xPercent: -t.xTranslateBy, yPercent: -t.yTranslateBy }, "blockLabel-" + e),
                                                        t.blocksLoopTl.set(t.cardsComponentBlocks.last(), { zIndex: 2 }, ">"),
                                                        t.blocksLoopTl.addLabel("backOfDeckLabel-" + e, ">"),
                                                        t.blocksLoopTl.fromTo(
                                                            n,
                                                            { scale: t.blockScaleAmount, xPercent: 100 + t.xTranslateBy + 5, yPercent: -8 },
                                                            { scale: 1, xPercent: 2 * t.xTranslateBy, yPercent: 2 * t.yTranslateBy },
                                                            "backOfDeckLabel-" + e
                                                        );
                                                    break;
                                                case 1:
                                                    t.blocksLoopTl.fromTo(
                                                        n,
                                                        { scale: 1, xPercent: -t.xTranslateBy, yPercent: -t.yTranslateBy },
                                                        { scale: t.blockScaleAmount, xPercent: 105, yPercent: -(8 + t.yTranslateBy) },
                                                        "blockLabel-" + e
                                                    ),
                                                        t.blocksLoopTl.to(n.find(".card-item-link"), { autoAlpha: 0 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.set(i, { zIndex: 1 }, ">"),
                                                        t.blocksLoopTl.fromTo(n.next(), { xPercent: -t.xTranslateBy, yPercent: -t.yTranslateBy }, { xPercent: 2 * -t.xTranslateBy, yPercent: 2 * -t.yTranslateBy }, "blockLabel-" + e),
                                                        t.blocksLoopTl.to(n.next().find(".card-item-link"), { autoAlpha: 1 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.set(n.next(), { zIndex: 3 }, ">"),
                                                        t.blocksLoopTl.fromTo(
                                                            t.cardsComponentBlocks.first(),
                                                            { xPercent: 2 * t.xTranslateBy, yPercent: 2 * t.yTranslateBy },
                                                            { xPercent: t.xTranslateBy, yPercent: t.yTranslateBy },
                                                            "blockLabel-" + e
                                                        ),
                                                        t.blocksLoopTl.set(t.cardsComponentBlocks.first(), { zIndex: 2 }, ">"),
                                                        t.blocksLoopTl.addLabel("backOfDeckLabel-" + e, ">"),
                                                        t.blocksLoopTl.fromTo(
                                                            n,
                                                            { scale: t.blockScaleAmount, xPercent: 105, yPercent: -(8 + t.yTranslateBy) },
                                                            { scale: 1, xPercent: t.xTranslateBy, yPercent: t.yTranslateBy },
                                                            "backOfDeckLabel-" + e
                                                        );
                                                    break;
                                                case 2:
                                                    t.blocksLoopTl.fromTo(
                                                        n,
                                                        { scale: 1, xPercent: 2 * -t.xTranslateBy, yPercent: 2 * -t.yTranslateBy },
                                                        { scale: t.blockScaleAmount, xPercent: 105 - t.xTranslateBy, yPercent: -(8 + 2 * t.yTranslateBy) },
                                                        "blockLabel-" + e
                                                    ),
                                                        t.blocksLoopTl.to(n.find(".card-item-link"), { autoAlpha: 0 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.set(i, { zIndex: 1 }, ">"),
                                                        t.blocksLoopTl.fromTo(t.cardsComponentBlocks.first(), { xPercent: t.xTranslateBy, yPercent: t.yTranslateBy }, { xPercent: 0, yPercent: 0 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.to(t.cardsComponentBlocks.first().find(".card-item-link"), { autoAlpha: 1 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.set(t.cardsComponentBlocks.first(), { zIndex: 3 }, ">"),
                                                        t.blocksLoopTl.fromTo(n.prev(), { xPercent: t.xTranslateBy, yPercent: t.yTranslateBy }, { xPercent: 0, yPercent: 0 }, "blockLabel-" + e),
                                                        t.blocksLoopTl.set(n.prev(), { zIndex: 2 }, ">"),
                                                        t.blocksLoopTl.addLabel("backOfDeckLabel-" + e, ">"),
                                                        t.blocksLoopTl.fromTo(
                                                            n,
                                                            { scale: t.blockScaleAmount, xPercent: 105 - t.xTranslateBy, yPercent: -(8 + 2 * t.yTranslateBy) },
                                                            { scale: 1, xPercent: 0, yPercent: 0 },
                                                            "backOfDeckLabel-" + e
                                                        );
                                            }
                                        });
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t,
                                        e = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none" } })),
                                        this.tl.fromTo(
                                            this.visibleMedia,
                                            { width: this.startPosValues.widthVal, height: this.startPosValues.heightVal, x: 0, y: 0, borderRadius: this.startPosValues.borderRadiusVal },
                                            {
                                                width: this.endPosValues.widthVal,
                                                height: this.endPosValues.heightVal,
                                                x: this.endPosValues.endXPos,
                                                y: this.endPosValues.endYPos,
                                                borderRadius: this.endPosValues.borderRadiusVal,
                                                duration: this.heroSectionAnimDuration,
                                            },
                                            0
                                        ),
                                        this.tl.fromTo(this.cardsStickyWrap, { y: -(25 + this.cardsStickyWrap.position().top + this.cardsStickyWrap.outerHeight()) }, { y: 0, duration: this.heroSectionAnimDuration }, 0),
                                        this.tl.fromTo(this.scrollBtn, { autoAlpha: 1, scale: 1 }, { autoAlpha: 0, scale: 0, duration: 0.4 * this.heroSectionAnimDuration }, 0),
                                        this.tl.fromTo(this.heroSection.find(".sticky-wrap-anim-el"), { yPercent: 0, autoAlpha: 1 }, { autoAlpha: 0, yPercent: 50, duration: this.heroSectionAnimDuration }, 0),
                                        this.tl.fromTo(
                                            this.heroSection.find(".sticky-wrap-reveal-el"),
                                            { yPercent: 0, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
                                            { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", yPercent: 25, duration: 0.5 * this.heroSectionAnimDuration },
                                            0
                                        ),
                                        this.isMobile ||
                                            (this.tl.fromTo(this.path, { strokeDashoffset: -this.path.getTotalLength() }, { strokeDashoffset: 0, ease: "power2", duration: 0.5 * this.heroSectionAnimDuration }, 0),
                                            this.tl.set(this.cardsComponentBlocks, { scale: 1, xPercent: 0, yPercent: 0 }, 0),
                                            this.tl.fromTo(
                                                this.cardsComponentBlocks.find(".card-inner-wrap").toArray().reverse(),
                                                { x: innerWidth - this.cardsComponent.offset().left },
                                                { x: 0, duration: 0.6 * this.heroSectionAnimDuration, stagger: 0.2 * this.heroSectionAnimDuration, ease: "power1" },
                                                0
                                            ),
                                            this.tl.addLabel("sectionContentLabel", ">"),
                                            this.tl.fromTo(
                                                {},
                                                {},
                                                {
                                                    duration: 0.01 * this.heroSectionAnimDuration,
                                                    onComplete: function () {
                                                        e.blocksLoopTl.play(0);
                                                    },
                                                    onReverseComplete: function () {
                                                        e.blocksLoopTl.progress() >= 0.8
                                                            ? e.blocksLoopTl.pause(0)
                                                            : r.ZP.to(e.blocksLoopTl, {
                                                                  progress: 0,
                                                                  ease: "none",
                                                                  duration: 1,
                                                                  onComplete: function () {
                                                                      return e.blocksLoopTl.pause();
                                                                  },
                                                              });
                                                    },
                                                },
                                                this.heroSectionAnimDuration
                                            ),
                                            this.tl.fromTo(this.section.find(".section-info-title"), { autoAlpha: 0, yPercent: -25 }, { yPercent: 0, autoAlpha: 1, duration: this.sectionContentAnimDuration }, "sectionContentLabel"),
                                            this.tl.fromTo(
                                                this.section.find(".section-title"),
                                                { yPercent: -25, clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
                                                { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", yPercent: 0, duration: this.sectionContentAnimDuration },
                                                "sectionContentLabel"
                                            ),
                                            this.tl.fromTo(this.section.find(".section-txt"), { autoAlpha: 0, yPercent: 25 }, { autoAlpha: 1, yPercent: 0, duration: this.sectionContentAnimDuration }, "sectionContentLabel"),
                                            this.tl.addLabel("postSectionContentLabel", ">"),
                                            this.tl.fromTo(
                                                this.cardsComponent,
                                                { yPercent: 0 },
                                                { yPercent: -75, duration: 0.75 * this.postSectionContentAnimDuration },
                                                "postSectionContentLabel+=".concat(0.25 * this.postSectionContentAnimDuration)
                                            ),
                                            this.tl.to(this.visibleMedia, { yPercent: -75, duration: this.postSectionContentAnimDuration }, "postSectionContentLabel"),
                                            this.tl.fromTo({}, {}, { duration: 1 }, 0)),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== e.tl) {
                                                var i = ((e.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - e.elPositionOffset) / e.canvasDurationOffset).toFixed(3);
                                                i > 1 && (i = 1), i < 0 && (i = 0), t !== i && ((t = i), e.progressTo(i));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                T = (function () {
                    function t() {
                        f(this, t), o()(".brands-list-section").length && ((this.section = o()(".brands-list-section")), (this.blocks = this.section.find(".brands-small-component, .brands-big-component")), this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    var t = this;
                                    new IntersectionObserver(function (e) {
                                        e[0].intersectionRatio > P.threshold && (t.section.hasClass("start-anims") || (t.section.addClass("start-anims"), t.getAnimParams(), t.initControls(), t.createTl(), t.resize()));
                                    }, P).observe(this.section[0]);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        t.blockTls.forEach(function (t) {
                                            void 0 !== t.tl && t.tl.kill(), r.ZP.ticker.remove(t.progressTween);
                                        }),
                                            r.ZP.set(t.blocks.find(".component-link-wrap, .colored-overlay, .content-wrap"), { clearProps: !0 }),
                                            t.getAnimParams(),
                                            t.createTl(),
                                            t.blockTls.forEach(function (e) {
                                                e.progressTween(), y(t.section) && r.ZP.ticker.add(e.progressTween);
                                            });
                                    });
                                },
                            },
                            {
                                key: "animateBlock",
                                value: function (t, e, i) {
                                    var n = t.find(".component-link"),
                                        s = t.find(".border-el"),
                                        a = t.find(".border-el-white"),
                                        h = t.find(".component-content-wrap"),
                                        c = "power3";
                                    if ((r.ZP.killTweensOf([s, h]), "video-block" === i)) {
                                        var l = h.find("video")[0];
                                        "show" === e
                                            ? (l.pause(),
                                              (l.currentTime = 0),
                                              r.ZP.to([h, s], { opacity: 1, ease: c, duration: 1 / 3 }),
                                              r.ZP.to(n, { opacity: 1, ease: c, duration: 1 / 3, delay: 1 }),
                                              r.ZP.to(h, {
                                                  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                                                  ease: c,
                                                  duration: 1,
                                                  onComplete: function () {
                                                      r.ZP.set([s, a], { opacity: 0 }), l.play();
                                                  },
                                              }),
                                              r.ZP.to(s, { height: "calc(100% - 1px)", ease: c, duration: 1 }))
                                            : (r.ZP.set([s, a], { opacity: 1 }),
                                              r.ZP.to([s, h, n], {
                                                  opacity: 0,
                                                  ease: c,
                                                  duration: 0.5,
                                                  onComplete: function () {
                                                      l.pause(), (l.currentTime = 0);
                                                  },
                                              }),
                                              r.ZP.to(h, { clipPath: "polygon(0% 40%, 100% 40%, 100% 60%, 0% 60%)", ease: c, duration: 1 }),
                                              r.ZP.to(s, { height: "20%", ease: c, duration: 1 }));
                                    } else {
                                        var u = h.parents(".fade-in-wrap");
                                        r.ZP.killTweensOf([u.find(".component-logo-link, .big-component-item-brand-name, .w-img, .component-link"), u]),
                                            "show" === e
                                                ? (r.ZP.set([u.find(".component-logo-link, .big-component-item-brand-name, .w-img, .component-link"), u], { clearProps: !0 }),
                                                  r.ZP.to(u, { scale: 1, opacity: 1, ease: c, duration: 1 }),
                                                  u.find(".swiper-slide").each(function (t, e) {
                                                      r.ZP.to(o()(e).find(".component-logo-link, .big-component-item-brand-name, .w-img"), { opacity: 1, scale: 1, stagger: 0.15, ease: c, duration: 0.5, delay: 0.85 }),
                                                          r.ZP.to(u.find(".component-link"), { opacity: 1, ease: c, duration: 0.5, delay: 1.45 });
                                                  }))
                                                : (r.ZP.to(u, { scale: 0.7, opacity: 0, ease: c, duration: 1 }),
                                                  r.ZP.to(u.find(".component-logo-link, .big-component-item-brand-name, .w-img"), { opacity: 0, scale: 0.7, ease: c, duration: 0.5 }),
                                                  r.ZP.to(u.find(".component-link"), { opacity: 0, ease: c, duration: 0.5 }));
                                    }
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    (this.isMobile = (0, s.tq)()),
                                        (this.blockPositionOffsetValues = (0, s.wn)(this.section.prevAll("section")) + this.section.find(".section-content-wrap").position().top),
                                        (this.blockTls = []),
                                        (this.canvasDurationOffset = 0.6 * innerHeight);
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(
                                        function (e) {
                                            var i = o()(e[0].target),
                                                n = i.is(".brands-big-component") ? "swiper-block" : "video-block";
                                            e[0].intersectionRatio > 0.6 && e[0].boundingClientRect.y > 0 ? t.animateBlock(i, "show", n) : e[0].boundingClientRect.y > 0 && t.animateBlock(i, "hide", n);
                                        },
                                        { root: null, rootMargin: "0px", threshold: 0.6 }
                                    )),
                                        this.blocks.each(function (e, i) {
                                            return t.observer.observe(i);
                                        }),
                                        (this.postContentObserver = new IntersectionObserver(function (e) {
                                            t.blockTls.forEach(function (t) {
                                                e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                            });
                                        }, v)),
                                        this.postContentObserver.observe(this.section[0]);
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t = this;
                                    this.blocks.each(function (e, i) {
                                        var n = o()(i),
                                            s = r.ZP.timeline({ paused: !0, defaults: { duration: 1, ease: "none" } }),
                                            h = 1 * n.attr("data-scroll-speed") > 0 ? -0.2 * innerHeight : 0.1 * innerHeight,
                                            c = n.position().top + t.blockPositionOffsetValues + h;
                                        s.fromTo(n.find(".component-link-wrap"), { opacity: 1 }, { opacity: 0, duration: 0.25 }, 0),
                                            s.fromTo(n.find(".colored-overlay"), { backgroundColor: "transparent" }, { backgroundColor: "#202020", duration: 0.75 }, 0),
                                            s.fromTo(n.find(".content-wrap"), { scale: 1 }, { scale: 0.85, duration: 0.5 }, 0.25);
                                        var l,
                                            u = r.ZP.quickTo(s, "progress", { ease: "power2" });
                                        t.blockTls.push({
                                            tl: s,
                                            progressTween: function () {
                                                if (void 0 !== s) {
                                                    var e = ((t.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - c) / t.canvasDurationOffset).toFixed(3);
                                                    e > 1 && (e = 1), e < 0 && (e = 0), l !== e && ((l = e), u(e));
                                                }
                                            },
                                        });
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                A = (function () {
                    function t() {
                        f(this, t),
                            o()(".brand-storytelling-section").length &&
                                ((this.totalWrapper = o()(".brand-storytelling-section")),
                                (this.section = o()(".section-intro-title-container")),
                                (this.nextSection = o()(".section-dark-content-container")),
                                (this.title = this.section.find(".section-title")),
                                (this.scrollingBlockWrap = this.section.find(".scrolling-block-wrap-outer")),
                                (this.nextSectionScrollingTitle = this.nextSection.find(".scrolling-title-container .scrolling-block-wrap")),
                                (this.nextSectionWords = this.nextSection.find(".highlighted-word")),
                                (this.scrollingBlockWrapChildrenToAnim = this.scrollingBlockWrap.find(".lines-scrolling-container").children()),
                                (this.rotatingLink = this.nextSection.find(".rotating-link")),
                                (this.phoneContainer = this.nextSection.find(".section-phone-container")),
                                (this.phoneSVG = this.nextSection.find(".phone-svg")),
                                (this.bgcEl = o()("body")),
                                this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    var t = this;
                                    new IntersectionObserver(function (e) {
                                        e[0].intersectionRatio > P.threshold && (t.totalWrapper.hasClass("start-anims") || (t.totalWrapper.addClass("start-anims"), t.getAnimParams(), t.createTl(), t.initControls(), t.resize()));
                                    }, P).observe(this.totalWrapper[0]);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)),
                                            r.ZP.ticker.remove(t.progressTween),
                                            r.ZP.set(
                                                [
                                                    t.title,
                                                    t.scrollingBlockWrap,
                                                    t.nextSection.find(".scrolling-title-container, .section-txt-container"),
                                                    t.nextSection.find(".secondary-text"),
                                                    t.nextSection.find(".secondary-text .bgr-el"),
                                                    t.phoneContainer.find(".section-info-title"),
                                                    t.rotatingLink,
                                                    t.phoneSVG,
                                                    t.phoneContainer,
                                                    "#fix-overlay-block-2",
                                                    "#fix-overlay-block",
                                                    t.scrollingBlockWrap.find(".scrolling-bgc-el"),
                                                    t.scrollingBlockWrap.find(".lines-scrolling-container"),
                                                    t.scrollingBlockWrap.find(".transform-container-inner"),
                                                    t.nextSection.find(".scroll-wrap-inner"),
                                                    t.scrollingBlockWrapChildrenToAnim,
                                                    t.phoneContainer.children(),
                                                ],
                                                { clearProps: !0 }
                                            ),
                                            t.getAnimParams(),
                                            t.createTl(),
                                            t.progressTween(),
                                            y(t.totalWrapper) && r.ZP.ticker.add(t.progressTween);
                                    });
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                    }, v)),
                                        this.observer.observe(this.totalWrapper[0]);
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    r.ZP.set(this.section.find(".height-el"), { paddingTop: "".concat((innerHeight / innerWidth) * 100, "%") }),
                                        (this.titleSectionHeight = this.section.outerHeight()),
                                        (this.sectionHeight = this.totalWrapper.outerHeight()),
                                        r.ZP.set("#fix-overlay-block", {
                                            height:
                                                0.33 * innerHeight +
                                                (innerHeight - this.scrollingBlockWrap.outerHeight()) / 2 +
                                                2 * this.scrollingBlockWrap.outerHeight() +
                                                (this.section.find(".max-w-container").outerHeight() - this.section.find(".max-w-container").height()) / 2,
                                        }),
                                        r.ZP.set("#fix-overlay-block-2", { height: Math.ceil(0.33 * innerHeight + this.titleSectionHeight + this.nextSection.find(".scroll-wrap").outerHeight()) }),
                                        r.ZP.set(this.nextSection.find(".scroll-wrap-inner"), { y: -Math.ceil(this.titleSectionHeight) }),
                                        (this.transformBy = 0.4 * -this.scrollingBlockWrap.outerWidth()),
                                        (this.isMobile = (0, s.tq)()),
                                        (this.elPositionOffset = (0, s.wn)(this.totalWrapper.prevAll("section")) - innerHeight),
                                        (this.canvasDurationOffset = this.sectionHeight),
                                        (this.titleAnimDuration = this.section.outerHeight() / this.sectionHeight),
                                        (this.postTitleAnimDuration = innerHeight / this.sectionHeight),
                                        (this.showNextContentDuration = (0.33 * innerHeight) / this.sectionHeight),
                                        (this.phoneAnimDuration = this.phoneContainer.outerHeight() / this.sectionHeight),
                                        (this.postPhoneAnimDuration = innerHeight / this.sectionHeight),
                                        a.x.update();
                                },
                            },
                            {
                                key: "controlScrollingAnimHandler",
                                value: function (t) {
                                    this.section.find("[data-manual-scrolling-anim]").each(function (e, i) {
                                        o()(window).trigger("scrollingAnimHandler", { state: t, element: o()(i) });
                                    });
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none" } })),
                                        this.tl.fromTo(this.title, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.5 * this.titleAnimDuration }, 0);
                                    var e = 0.1 * this.titleAnimDuration;
                                    this.tl.fromTo(this.scrollingBlockWrap, { yPercent: 50 }, { yPercent: 0, duration: 0.75 * this.titleAnimDuration }, e),
                                        this.tl.fromTo(this.scrollingBlockWrapChildrenToAnim, { x: this.transformBy }, { x: 0, duration: 0.75 * this.titleAnimDuration }, e),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                duration: 0.001 * this.titleAnimDuration,
                                                onComplete: function () {
                                                    return t.controlScrollingAnimHandler("play");
                                                },
                                                onReverseComplete: function () {
                                                    return t.controlScrollingAnimHandler("reverse");
                                                },
                                            },
                                            ">-".concat(0.001 * this.titleAnimDuration)
                                        ),
                                        this.tl.addLabel("scrollingBlockWrapScale", this.titleAnimDuration),
                                        this.tl.fromTo(
                                            this.scrollingBlockWrap.find(".scrolling-bgc-el"),
                                            {
                                                borderRadius: function () {
                                                    return innerWidth > 1024 && innerWidth < 1921 ? 0.03125 * innerWidth : innerWidth > 1920 ? 60 : void 0;
                                                },
                                                scaleX: 1,
                                                scaleY: 1,
                                            },
                                            { borderRadius: 0, scaleX: innerWidth / this.scrollingBlockWrap.outerWidth(), scaleY: innerHeight / this.scrollingBlockWrap.outerHeight(), duration: this.postTitleAnimDuration },
                                            "scrollingBlockWrapScale"
                                        ),
                                        this.tl.fromTo(this.scrollingBlockWrap.find(".lines-scrolling-container"), { opacity: 1 }, { opacity: 0, duration: 0.5 * this.postTitleAnimDuration }, "scrollingBlockWrapScale"),
                                        this.tl.fromTo(
                                            this.scrollingBlockWrap.find(".transform-container-inner"),
                                            { scale: 1 },
                                            { scale: innerWidth / this.scrollingBlockWrap.outerWidth(), duration: this.postTitleAnimDuration },
                                            "scrollingBlockWrapScale"
                                        ),
                                        this.tl.to(
                                            {},
                                            {
                                                duration: 0.25 * this.postTitleAnimDuration,
                                                onStart: function () {
                                                    o()("html").addClass("hide-header");
                                                },
                                                onReverseComplete: function () {
                                                    o()("html").removeClass("hide-header");
                                                },
                                            },
                                            ">-".concat(0.25 * this.postTitleAnimDuration)
                                        ),
                                        this.tl.fromTo({}, {}, { duration: this.postTitleAnimDuration }, "scrollingBlockWrapScale"),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                duration: 0.001 * this.postTitleAnimDuration,
                                                onComplete: function () {
                                                    r.ZP.set(t.nextSection, { autoAlpha: 1 });
                                                },
                                                onReverseComplete: function () {
                                                    r.ZP.set(t.nextSection, { autoAlpha: 0 });
                                                },
                                            },
                                            ">-".concat(0.001 * this.postTitleAnimDuration)
                                        ),
                                        this.tl.fromTo(
                                            this.nextSection.find(".scrolling-title-container, .section-txt-container"),
                                            { opacity: 0 },
                                            { opacity: 1, duration: 0.4 * this.showNextContentDuration, stagger: 0.1 * this.showNextContentDuration },
                                            ">"
                                        ),
                                        this.tl.addLabel("showNextContentLabel", "<"),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                duration: 0.25 * this.showNextContentDuration,
                                                onComplete: function () {
                                                    o()(window).trigger("scrollingAnimHandler", { state: "play", element: t.nextSectionScrollingTitle }),
                                                        t.nextSectionWords.filter(".word-1, .word-2, .word-3").addClass("fade-in-bgr"),
                                                        t.nextSection.find(".dots-element").addClass("animate-dots");
                                                },
                                                onReverseComplete: function () {
                                                    o()(window).trigger("scrollingAnimHandler", { state: "reverse", element: t.nextSectionScrollingTitle }),
                                                        t.nextSectionWords.filter(".word-1, .word-2, .word-3").removeClass("fade-in-bgr"),
                                                        t.nextSection.find(".dots-element").removeClass("animate-dots");
                                                },
                                            },
                                            "showNextContentLabel"
                                        ),
                                        this.tl.fromTo(
                                            this.nextSection.find(".secondary-text"),
                                            { opacity: 0.22 },
                                            { opacity: 1, duration: 0.5 * this.showNextContentDuration },
                                            "showNextContentLabel+=".concat(0.5 * this.showNextContentDuration)
                                        ),
                                        this.tl.fromTo(
                                            this.nextSection.find(".secondary-text .bgr-el"),
                                            { opacity: 0, width: "15%" },
                                            { opacity: 1, width: "110%", ease: "power1", duration: 0.5 * this.showNextContentDuration },
                                            "showNextContentLabel+=".concat(0.5 * this.showNextContentDuration)
                                        ),
                                        this.tl.addLabel("phoneAnimationLabel", ">"),
                                        this.tl.fromTo(this.phoneContainer.find(".section-info-title"), { opacity: 0, xPercent: -25 }, { opacity: 1, xPercent: 0, duration: this.phoneAnimDuration }, "phoneAnimationLabel"),
                                        this.tl.fromTo(
                                            this.rotatingLink,
                                            { opacity: 0, scale: 0.5 },
                                            {
                                                opacity: 1,
                                                scale: 1,
                                                duration: this.phoneAnimDuration,
                                                onComplete: function () {
                                                    return o()(window).trigger("rotatingLinkAnim", { state: "play" });
                                                },
                                                onReverseComplete: function () {
                                                    return o()(window).trigger("rotatingLinkAnim", { state: "reverse" });
                                                },
                                            },
                                            "phoneAnimationLabel"
                                        ),
                                        this.tl.fromTo(this.phoneSVG, { scale: 2 }, { scale: 1, duration: this.phoneAnimDuration }, "phoneAnimationLabel");
                                    var i,
                                        n = 1 - this.titleAnimDuration - this.postTitleAnimDuration - this.showNextContentDuration - this.phoneAnimDuration - this.postPhoneAnimDuration;
                                    this.tl.fromTo(
                                        {},
                                        {},
                                        {
                                            duration: function () {
                                                return n < 0 ? 0 : n;
                                            },
                                        }
                                    ),
                                        this.tl.addLabel("postPhoneAnimationLabel", ">"),
                                        this.tl.fromTo(
                                            this.phoneContainer,
                                            { borderRadius: 0, scale: 1 },
                                            { borderRadius: 0.0729 * this.phoneContainer.outerWidth(), scale: 0.4, duration: this.postPhoneAnimDuration },
                                            "postPhoneAnimationLabel"
                                        ),
                                        this.tl.to(
                                            {},
                                            {
                                                duration: 0.2 * this.postPhoneAnimDuration,
                                                onStart: function () {
                                                    o()("html").removeClass("hide-header");
                                                },
                                                onReverseComplete: function () {
                                                    o()("html").addClass("hide-header");
                                                },
                                            },
                                            "<+".concat(0.2 * this.postPhoneAnimDuration)
                                        ),
                                        this.tl.fromTo(this.phoneContainer.children(), { opacity: 1 }, { opacity: 0, duration: 1 * this.postPhoneAnimDuration, ease: "power3.in" }, "postPhoneAnimationLabel"),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== t.tl) {
                                                var e = ((t.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - t.elPositionOffset) / t.canvasDurationOffset).toFixed(3);
                                                e > 1 && (e = 1), e < 0 && (e = 0), i !== e && ((i = e), t.progressTo(e));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                V = function () {
                    var t = (0, s.tq)(),
                        e = o()(".section-dark-content-container"),
                        i = e.find(".section-phone-container"),
                        n = e.find(".rotating-link"),
                        a = e.find(".phone-circle-group"),
                        h = n.find(".hand-group"),
                        c = r.ZP.timeline({ defaults: { ease: "none", duration: 1 }, paused: !0 });
                    c.fromTo(e.find(".phone-rect-big"), { fill: "#DE85B1" }, { fill: "#9747FF" }, 0),
                        c.fromTo(a, { transformOrigin: "50% 50%", yPercent: 0 }, { transformOrigin: "50% 50%", yPercent: -2, duration: 0.5 }, 0),
                        c.fromTo(a, { transformOrigin: "50% 50%", yPercent: -2 }, { transformOrigin: "50% 50%", yPercent: 0, duration: 0.5 }, 0.5),
                        c.fromTo(a, { transformOrigin: "50% 50%", xPercent: 0 }, { transformOrigin: "50% 50%", xPercent: 29 }, 0),
                        c.fromTo(e.find(".phone-rect-flat"), { rotation: -10, transformOrigin: "50% 50%" }, { rotation: 10, transformOrigin: "50% 50%" }, 0);
                    var l,
                        u = r.ZP.quickTo(c, "progress", { ease: "power2" }),
                        d = 0;
                    i.on(t ? "touchmove touchstart touchend" : "mousemove", function (e) {
                        t ? ((l = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]), (d = (l.clientX / innerWidth).toFixed(3))) : (d = (e.pageX / innerWidth).toFixed(3)), u(d);
                    });
                    var g = r.ZP.to(n.children(), { rotation: "+=720", duration: 10, ease: "none", repeat: -1, paused: !0 });
                    o()(window).on("rotatingLinkAnim", function (t, e) {
                        "play" === e.state ? g.play() : g.pause(0);
                    }),
                        t
                            ? (g.play(), e.find(".dots-element").addClass("animate-dots"))
                            : n
                                  .on("mouseenter", function () {
                                      r.ZP.to(h, { scale: 0.9, transformOrigin: "50% 50%", overwrite: !0 });
                                  })
                                  .on("mouseleave", function () {
                                      r.ZP.to(h, { scale: 1, transformOrigin: "50% 50%", overwrite: !0 });
                                  });
                },
                k = (function () {
                    function t() {
                        f(this, t),
                            o()(".eye-catching-section").length &&
                                ((this.section = o()(".eye-catching-section")),
                                (this.titles = this.section.find(".section-title")),
                                (this.scrollingBlockWrap = this.section.find(".scrolling-block-wrap")),
                                (this.blocks = this.section.find(".single-block")),
                                this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "blocksHoverAnim",
                                value: function () {
                                    var t = this;
                                    this.blocks.on("mouseenter", function (e) {
                                        var i = o()(e.currentTarget);
                                        r.ZP.killTweensOf(i.find(".block-transform-wrap")),
                                            (t.blockLastRotation[i.index()] = r.ZP.getProperty(e.currentTarget, "rotation")),
                                            r.ZP.to(i.find(".block-transform-wrap"), { rotation: -1 * t.blockLastRotation[i.index()], duration: 1, xPercent: 0, ease: "power2" }),
                                            i.prev().length && r.ZP.to(i.prev().find(".block-transform-wrap"), { xPercent: -25, duration: 1, ease: "power2" }),
                                            i.next().length && r.ZP.to(i.next().find(".block-transform-wrap"), { xPercent: 25, duration: 1, ease: "power2" });
                                    }),
                                        this.blocks.on("mouseleave", function (e) {
                                            r.ZP.killTweensOf(t.blocks.find(".block-transform-wrap")), r.ZP.to(t.blocks.find(".block-transform-wrap"), { xPercent: 0, rotation: 0, duration: 1, ease: "power2" });
                                        });
                                },
                            },
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    var t = this;
                                    new IntersectionObserver(function (e) {
                                        e[0].intersectionRatio > P.threshold &&
                                            (t.section.hasClass("start-anims") || (t.section.addClass("start-anims"), t.getAnimParams(), t.isMobile || (t.createTl(), t.initControls(), t.blocksHoverAnim()), t.followCursor(), t.resize()));
                                    }, P).observe(this.section[0]);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        t.isMobile ||
                                            (void 0 !== t.tl && (t.tl.kill(), (t.tl = null)), r.ZP.ticker.remove(t.progressTween), r.ZP.set([t.titles, t.scrollingBlockWrap, t.scrollingBlockWrap.children(), t.blocks], { clearProps: !0 })),
                                            t.getAnimParams(),
                                            t.isMobile || (t.createTl(), t.progressTween(), y(t.section) && r.ZP.ticker.add(t.progressTween));
                                    });
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                    }, v)),
                                        this.observer.observe(this.section[0]);
                                },
                            },
                            {
                                key: "controlScrollingAnimHandler",
                                value: function (t) {
                                    this.scrollingBlockWrap.each(function (e, i) {
                                        o()(window).trigger("scrollingAnimHandler", { state: t, element: o()(i) });
                                    });
                                },
                            },
                            {
                                key: "followCursor",
                                value: function () {
                                    var t,
                                        e,
                                        i,
                                        n = this,
                                        s = r.ZP.quickTo(this.cursor, "x", { ease: "power2" }),
                                        a = r.ZP.quickTo(this.cursor, "y", { ease: "power2" });
                                    o()(window).on(this.isMobile ? "touchmove touchstart touchend" : "mousemove", function (o) {
                                        n.isMobile && ((t = o.originalEvent.touches[0] || o.originalEvent.changedTouches[0]), (e = t.clientX), (i = t.clientY));
                                        var r = h.X.getRelativePosition(n.cursor.parent()[0], window, [0.5, 0.5], { x: n.isMobile ? e : o.pageX, y: n.isMobile ? i : o.pageY });
                                        r.x < n.rightEnd && r.x > n.leftEnd ? s(r.x) : (r.x > n.rightEnd && s(n.rightEnd), r.x < n.leftEnd && s(n.leftEnd)),
                                            r.y < n.bottomEnd && r.y > n.topEnd ? a(r.y) : (r.y > n.bottomEnd && a(n.bottomEnd), r.y < n.topEnd && a(n.topEnd));
                                    });
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    var t = this;
                                    (this.isMobile = (0, s.tq)()),
                                        (this.elPositionOffset = (0, s.wn)(this.section.prevAll("section")) - innerHeight),
                                        (this.canvasDurationOffset = this.section.outerHeight() - this.section.find(".post-txt-content").outerHeight() + 0.9 * innerHeight),
                                        (this.transformBy = 0.4 * -this.scrollingBlockWrap.outerWidth()),
                                        (this.cursor = o()(".eye-el")),
                                        (this.thisCursorWidth = this.cursor.width() / 2),
                                        (this.cursorParentValues = { width: this.cursor.parent().outerWidth(), height: this.cursor.parent().outerHeight() }),
                                        (this.cursorParentCornerOffsetVal = Math.round(0.03984 * this.cursorParentValues.width)),
                                        (this.leftEnd = -this.cursorParentValues.width / 2 + this.thisCursorWidth + this.cursorParentCornerOffsetVal),
                                        (this.rightEnd = this.cursorParentValues.width / 2 - this.thisCursorWidth - this.cursorParentCornerOffsetVal),
                                        (this.topEnd = -this.cursorParentValues.height / 2 + this.thisCursorWidth + this.cursorParentCornerOffsetVal),
                                        (this.bottomEnd = this.cursorParentValues.height / 2 - this.thisCursorWidth - this.cursorParentCornerOffsetVal),
                                        (this.blockPositions = []),
                                        (this.blockLastRotation = []),
                                        this.isMobile ||
                                            this.blocks.each(function (e, i) {
                                                return t.blockPositions.push(o()(i).offset().left);
                                            });
                                },
                            },
                            {
                                key: "animateEyeWrap",
                                value: function (t) {
                                    r.ZP.to(this.section.find(".eye-wrap"), { scale: t, ease: "power2", duration: 1 });
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t,
                                        e = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none", duration: 0.75 } })),
                                        this.tl.fromTo(this.titles, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.1 }, 0),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                duration: 0.1,
                                                onStart: function () {
                                                    return e.animateEyeWrap(1);
                                                },
                                                onReverseComplete: function () {
                                                    return e.animateEyeWrap(0);
                                                },
                                            },
                                            "<+50%"
                                        ),
                                        this.tl.fromTo(this.scrollingBlockWrap, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 }, 0.25),
                                        this.tl.fromTo(this.scrollingBlockWrap.children(), { x: this.transformBy }, { x: 0, duration: 0.5 }, 0.25),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                duration: 0.05,
                                                onComplete: function () {
                                                    return e.controlScrollingAnimHandler("play");
                                                },
                                                onReverseComplete: function () {
                                                    return e.controlScrollingAnimHandler("reverse");
                                                },
                                            },
                                            ">-0.05"
                                        ),
                                        this.blocks.each(function (t, i) {
                                            var n = o()(i),
                                                s = e.blockPositions[t] + n.outerWidth(),
                                                a = innerWidth - e.blockPositions[t];
                                            t < e.blocks.length / 2
                                                ? e.tl.fromTo(
                                                      i,
                                                      { x: -s, rotation: parseInt(n.attr("data-from-rotation")) },
                                                      {
                                                          x: 0,
                                                          rotation: 1 * n.attr("data-default-rotation"),
                                                          duration: 1.5,
                                                          onUpdate: function () {
                                                              return (e.blockLastRotation[t] = r.ZP.getProperty(i, "rotation"));
                                                          },
                                                      },
                                                      0
                                                  )
                                                : e.tl.fromTo(
                                                      i,
                                                      { x: a, rotation: parseInt(n.attr("data-from-rotation")) },
                                                      {
                                                          x: 0,
                                                          rotation: 1 * n.attr("data-default-rotation"),
                                                          duration: 1.5,
                                                          onUpdate: function () {
                                                              return (e.blockLastRotation[t] = r.ZP.getProperty(i, "rotation"));
                                                          },
                                                      },
                                                      0
                                                  );
                                        }),
                                        this.blocks.each(function (t, i) {
                                            var n = o()(i);
                                            e.blocks.length,
                                                e.tl.fromTo(
                                                    i,
                                                    { rotation: 1 * n.attr("data-default-rotation") },
                                                    {
                                                        rotation: parseInt(n.attr("data-to-rotation")),
                                                        duration: 0.5,
                                                        onUpdate: function () {
                                                            return (e.blockLastRotation[t] = r.ZP.getProperty(i, "rotation"));
                                                        },
                                                    },
                                                    1.6
                                                );
                                        }),
                                        this.blocks.each(function (t, i) {
                                            var n,
                                                s,
                                                a = o()(i),
                                                h = e.blockPositions[t] + a.outerWidth();
                                            switch (t) {
                                                case 0:
                                                    (n = -h), (s = 0);
                                                    break;
                                                case 1:
                                                    (n = -h), (s = 0.25 * -innerHeight);
                                                    break;
                                                case 2:
                                                    (n = 0.2 * -innerWidth), (s = 0.4 * -innerHeight);
                                                    break;
                                                case 3:
                                                    (n = 0), (s = 0.5 * -innerHeight);
                                                    break;
                                                case 4:
                                                    (n = 0.1 * innerWidth), (s = 0.5 * -innerHeight);
                                                    break;
                                                case 5:
                                                    (n = innerWidth - e.blockPositions[t]), (s = 0);
                                            }
                                            e.blocks.length,
                                                e.tl.fromTo(
                                                    i,
                                                    {
                                                        x: 0,
                                                        y: 0,
                                                        rotation: parseInt(a.attr("data-to-rotation")),
                                                        onUpdate: function () {
                                                            return (e.blockLastRotation[t] = r.ZP.getProperty(i, "rotation"));
                                                        },
                                                    },
                                                    {
                                                        x: n,
                                                        y: s,
                                                        rotation: parseInt(a.attr("data-from-rotation")),
                                                        duration: 0.5,
                                                        onUpdate: function () {
                                                            return (e.blockLastRotation[t] = r.ZP.getProperty(i, "rotation"));
                                                        },
                                                    },
                                                    2.1
                                                );
                                        }),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== e.tl) {
                                                var i = ((e.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - e.elPositionOffset) / e.canvasDurationOffset).toFixed(3);
                                                i > 1 && (i = 1), i < 0 && (i = 0), t !== i && ((t = i), e.progressTo(i));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                x = (function () {
                    function t() {
                        f(this, t),
                            o()(".marketing-seo-section").length &&
                                ((this.section = o()(".marketing-seo-section")),
                                (this.bgcEl = o()("body")),
                                (this.sectionTitleWrap = this.section.find(".section-title-content-wrap")),
                                (this.titles = this.section.find(".section-title")),
                                (this.scrollingBlockWrap = this.section.find(".scrolling-block-wrap")),
                                (this.blocksInnerWrap = this.section.find(".blocks-inner-wrap")),
                                (this.pagination = this.section.find(".pagination-wrap")),
                                (this.txtItemsWrap = this.section.find(".txt-items-wrap")),
                                (this.txtItems = this.txtItemsWrap.find(".txt-item")),
                                (this.imgItems = this.blocksInnerWrap.find(".img-item")),
                                (this.imgItemsWrap = this.section.find(".img-items-wrap")),
                                this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    var t = this;
                                    new IntersectionObserver(function (e) {
                                        e[0].intersectionRatio > P.threshold &&
                                            (t.section.hasClass("start-anims") || (t.section.addClass("start-anims"), t.getAnimParams(), t.positionTxtBlocks(), t.createTl(), t.initControls(), t.resize()));
                                    }, P).observe(this.section[0]);
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                    }, v)),
                                        this.observer.observe(this.section[0]);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)),
                                            r.ZP.ticker.remove(t.progressTween),
                                            r.ZP.set([t.titles, t.scrollingBlockWrap, t.scrollingBlockWrap.children(), t.pagination, t.pagination.children(), t.txtItemsWrap, t.txtItemsWrap.parent(), t.txtItems, t.imgItems, "#logoCanvas"], {
                                                clearProps: !0,
                                            }),
                                            t.getAnimParams(),
                                            t.positionTxtBlocks(),
                                            t.createTl(),
                                            t.progressTween(),
                                            y(t.section) && r.ZP.ticker.add(t.progressTween);
                                    });
                                },
                            },
                            {
                                key: "controlScrollingAnimHandler",
                                value: function (t) {
                                    this.scrollingBlockWrap.each(function (e, i) {
                                        o()(window).trigger("scrollingAnimHandler", { state: t, element: o()(i) });
                                    });
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    var t = this.section.find(".desktop-spacer-el").height();
                                    (this.isMobile = (0, s.tq)()),
                                        (this.sectionPaddingTop = 1 * this.section.find(".max-w-container").css("padding-top").split("px")[0]),
                                        (this.stickyBlockHalfOffset = (innerHeight - this.blocksInnerWrap.height()) / 2),
                                        (this.elPositionOffset = (0, s.wn)(this.section.prevAll("section")) - innerHeight),
                                        (this.canvasDurationOffset = this.section.outerHeight() + innerHeight),
                                        (this.sectionHeight = this.canvasDurationOffset),
                                        (this.pause1 = (this.blocksInnerWrap.parent().position().top + this.blocksInnerWrap.position().top) / this.sectionHeight),
                                        (this.titleAnimDuration = this.pause1),
                                        (this.pause2 = this.stickyBlockHalfOffset / this.sectionHeight),
                                        (this.introContentDuration = this.blocksInnerWrap.height() / this.sectionHeight),
                                        (this.blocksContentDuration = (t + this.stickyBlockHalfOffset) / this.sectionHeight),
                                        (this.transformBy = 0.4 * -this.scrollingBlockWrap.outerWidth()),
                                        this.blockOffset,
                                        innerWidth > 1024 && innerWidth < 1921 ? (this.blockOffset = 0.09479 * innerWidth) : innerWidth > 1920 && (this.blockOffset = 182),
                                        this.isMobile || r.ZP.set(this.imgItems.find("video, img"), { width: this.imgItemsWrap.outerWidth(), height: this.imgItemsWrap.outerHeight() });
                                },
                            },
                            {
                                key: "positionTxtBlocks",
                                value: function () {
                                    var t = this;
                                    this.txtItems.each(function (e, i) {
                                        if (0 !== e) {
                                            var n = o()(i),
                                                a = (0, s.wn)(n.prevAll(".txt-item")) + t.blockOffset * e;
                                            r.ZP.set(n, { y: a });
                                        }
                                    });
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none" } })),
                                        this.tl.fromTo(
                                            this.titles,
                                            { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" },
                                            { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", stagger: 0.1 * this.titleAnimDuration, duration: 0.8 * this.titleAnimDuration },
                                            0
                                        ),
                                        this.tl.fromTo(this.scrollingBlockWrap, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.5 * this.titleAnimDuration }, 0.5 * this.titleAnimDuration),
                                        this.tl.fromTo(this.scrollingBlockWrap.children(), { x: this.transformBy }, { x: 0, duration: 0.5 * this.titleAnimDuration }, 0.5 * this.titleAnimDuration),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                duration: 0.01 * this.titleAnimDuration,
                                                onComplete: function () {
                                                    return t.controlScrollingAnimHandler("play");
                                                },
                                                onReverseComplete: function () {
                                                    return t.controlScrollingAnimHandler("reverse");
                                                },
                                            },
                                            0.99 * this.titleAnimDuration
                                        ),
                                        this.tl.addLabel("introContentAnimationLabel", ">"),
                                        this.tl.fromTo(this.imgItems.first().find("video, img"), { opacity: 0 }, { opacity: 1, duration: this.introContentDuration }, "introContentAnimationLabel"),
                                        this.tl.fromTo(this.section.find(".media-content-wrap"), { backgroundColor: "rgba(0,0,0,1)" }, { backgroundColor: "rgba(0,0,0,0)", duration: this.introContentDuration }, "introContentAnimationLabel"),
                                        this.tl.fromTo([this.pagination], { opacity: 0 }, { opacity: 1, duration: this.introContentDuration }, "introContentAnimationLabel"),
                                        this.tl.fromTo(this.txtItemsWrap.parent(), { y: 0.5 * innerHeight }, { y: 0, duration: this.introContentDuration }, "introContentAnimationLabel"),
                                        this.tl.to({}, { duration: this.pause2 });
                                    var e,
                                        i = this.blocksContentDuration / (this.txtItems.length - 1);
                                    this.txtItems.each(function (e, n) {
                                        if (0 !== e) {
                                            var r = o()(n),
                                                s = o()(t.pagination.children()[e]),
                                                a = o()(t.imgItems[e]);
                                            t.tl.addLabel("txtLabel".concat(e), ">");
                                            var h = "txtLabel".concat(e);
                                            t.tl.to(t.txtItemsWrap, { y: -r.position().top, duration: i }, h),
                                                t.tl.to(
                                                    r.prev(),
                                                    {
                                                        opacity: 0.2,
                                                        duration: i,
                                                        onStart: function () {
                                                            return r.prev().removeClass("active");
                                                        },
                                                        onReverseComplete: function () {
                                                            return r.prev().addClass("active");
                                                        },
                                                    },
                                                    h
                                                ),
                                                t.tl.to(
                                                    r,
                                                    {
                                                        opacity: 1,
                                                        duration: i,
                                                        onStart: function () {
                                                            return r.addClass("active");
                                                        },
                                                        onReverseComplete: function () {
                                                            return r.removeClass("active");
                                                        },
                                                    },
                                                    h
                                                ),
                                                t.tl.to(
                                                    s.prev(),
                                                    {
                                                        opacity: 0.2,
                                                        scale: 1,
                                                        duration: i,
                                                        onStart: function () {
                                                            return s.prev().removeClass("active");
                                                        },
                                                        onReverseComplete: function () {
                                                            return s.prev().addClass("active");
                                                        },
                                                    },
                                                    h
                                                ),
                                                t.tl.to(
                                                    s,
                                                    {
                                                        opacity: 1,
                                                        scale: 1.2353,
                                                        duration: i,
                                                        onStart: function () {
                                                            return s.addClass("active");
                                                        },
                                                        onReverseComplete: function () {
                                                            return s.removeClass("active");
                                                        },
                                                    },
                                                    h
                                                ),
                                                t.tl.to(a.prev(), { xPercent: -17, yPercent: -13, scale: 0.92, duration: i }, h),
                                                t.tl.fromTo(
                                                    a,
                                                    { yPercent: 75, opacity: 0, clipPath: "polygon(0% 40%, 100% 40%, 100% 60%, 0% 60%)" },
                                                    { yPercent: 0, opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: i },
                                                    h
                                                ),
                                                t.tl.fromTo(a.find(".media-content-wrap"), { height: "20%" }, { height: "100%", duration: i }, h);
                                        }
                                    }),
                                        this.tl.fromTo({}, {}, { duration: 1 }, 0),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== t.tl) {
                                                var i = ((t.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - t.elPositionOffset) / t.canvasDurationOffset).toFixed(3);
                                                i > 1 && (i = 1), i < 0 && (i = 0), e !== i && ((e = i), t.progressTo(i));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                G = (function () {
                    function t() {
                        f(this, t),
                            o()(".services-section").length &&
                                ((this.section = o()(".services-section")),
                                (this.services = this.section.find(".services-item")),
                                (this.titleContainer = this.section.find(".title-container")),
                                (this.mainTitle = this.titleContainer.find(".main-title")),
                                (this.allTitles = this.titleContainer.find(".title-el")),
                                (this.servicesContainer = this.section.find(".services-container")),
                                (this.imgContainer = o()("#servicesImgContainer")),
                                (this.imgChildrenContainer = this.imgContainer.children()),
                                (this.bgcEl = o()("body")),
                                this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    var t = this;
                                    new IntersectionObserver(function (e) {
                                        e[0].intersectionRatio > P.threshold &&
                                            (t.section.hasClass("start-anims") || (t.section.addClass("start-anims"), (0, s.tq)() || (t.getAnimParams(), t.createTl(), t.initControls(), t.resize()), t.imageContainerInit()));
                                    }, P).observe(this.section[0]);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)),
                                            r.ZP.ticker.remove(t.progressTween),
                                            r.ZP.set([t.allTitles, t.section.find(".transform-wrap"), t.section.find(".title-offset-wrap"), t.servicesContainer], { clearProps: !0 }),
                                            t.getAnimParams(),
                                            t.createTl(),
                                            t.progressTween(),
                                            y(t.section) && r.ZP.ticker.add(t.progressTween);
                                    });
                                },
                            },
                            {
                                key: "imageContainerInit",
                                value: function () {
                                    var t = this;
                                    r.ZP.set(this.imgContainer, { xPercent: -50, yPercent: -50 });
                                    var e,
                                        i,
                                        n,
                                        a = this.imgContainer[0],
                                        h = { x: innerWidth / 2, y: innerHeight / 2 },
                                        c = { x: h.x, y: h.y },
                                        l = r.ZP.quickSetter(a, "x", "px"),
                                        u = r.ZP.quickSetter(a, "y", "px"),
                                        d = function () {
                                            r.ZP.to(t.imgChildrenContainer, {
                                                opacity: 0,
                                                scale: 0.6,
                                                duration: 0.2,
                                                overwrite: !0,
                                                ease: "power2",
                                                onComplete: function () {
                                                    return t.imgChildrenContainer.empty();
                                                },
                                            });
                                        };
                                    this.services.on("mouseenter", function (e) {
                                        var i = o()(e.currentTarget).find(".popup-images-container");
                                        t.imgChildrenContainer.empty(),
                                            i.length &&
                                                (t.imgChildrenContainer.html(i.children().clone()),
                                                t.imgChildrenContainer.removeClass("hidden-container"),
                                                r.ZP.fromTo(t.imgChildrenContainer, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.3, overwrite: !0, ease: "power2" }));
                                    }),
                                        this.section.on("mouseenter", "[data-manual-scrolling-anim]", function (t) {
                                            var e = o()(t.currentTarget);
                                            r.ZP.killTweensOf([e, e.parent().find(".services-item-title")]),
                                                o()(window).trigger("scrollingAnimHandler", { state: "play", element: e }),
                                                r.ZP.to(e.parent().find(".services-item-title"), { opacity: 0, ease: "none", duration: 0.3 }),
                                                r.ZP.to(e, { opacity: 1, ease: "none", duration: 0.3 });
                                        }),
                                        this.section.on("mouseleave", "[data-manual-scrolling-anim]", function (t) {
                                            var e = o()(t.currentTarget);
                                            r.ZP.killTweensOf([e, e.parent().find(".services-item-title")]),
                                                r.ZP.to(e.parent().find(".services-item-title"), { opacity: 1, ease: "none", duration: 0.3 }),
                                                r.ZP.to(e, {
                                                    opacity: 0,
                                                    ease: "none",
                                                    duration: 0.3,
                                                    onComplete: function () {
                                                        o()(window).trigger("scrollingAnimHandler", { state: "pause", element: e });
                                                    },
                                                });
                                        });
                                    var g = (0, s.tq)();
                                    this.servicesContainer.on(g ? "touchmove touchstart touchend" : "mousemove", function (t) {
                                        g ? ((e = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0]), (i = e.clientX), (n = e.clientY), (c.x = i), (c.y = n)) : ((c.x = t.pageX), (c.y = t.pageY));
                                    }),
                                        this.servicesContainer[0].addEventListener("mouseleave", d),
                                        g &&
                                            o()("body").on("scroll", function () {
                                                t.imgChildrenContainer.hasClass("hidden-container") || (t.imgChildrenContainer.addClass("hidden-container"), d());
                                            }),
                                        r.ZP.ticker.add(function (t, e) {
                                            var i = 0.06 * e,
                                                n = 1 - Math.pow(0.9, i);
                                            (h.x += (c.x - h.x) * n), (h.y += (c.y - h.y) * n), l(h.x), u(h.y);
                                        });
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                    }, v)),
                                        this.observer.observe(this.section[0]);
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    (this.isMobile = (0, s.tq)()),
                                        (this.mainTitleHeight = this.mainTitle.outerHeight()),
                                        (this.elPositionOffset = (0, s.wn)(this.section.prevAll("section")) - 0.5 * innerHeight),
                                        (this.canvasDurationOffset = 0.5 * innerHeight);
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t,
                                        e = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none", duration: 0.75 } })),
                                        this.tl.fromTo(this.section.find(".transform-wrap"), { y: 3 * this.mainTitleHeight }, { y: 0, ease: "power1" }, 0),
                                        this.allTitles.each(function (t, i) {
                                            if (2 !== t) {
                                                r.ZP.set(i, { clearProps: !0 });
                                                var n = h.X.getRelativePosition(i, e.mainTitle[0]);
                                                switch (t) {
                                                    case 0:
                                                        e.tl.fromTo(i, { y: 2 * -e.mainTitleHeight }, { y: n.y }, 0);
                                                        break;
                                                    case 1:
                                                        e.tl.fromTo(i, { y: -e.mainTitleHeight }, { y: n.y }, 0);
                                                        break;
                                                    case 3:
                                                        e.tl.fromTo(i, { y: e.mainTitleHeight }, { y: n.y }, 0);
                                                        break;
                                                    case 4:
                                                        e.tl.fromTo(i, { y: 2 * e.mainTitleHeight }, { y: n.y }, 0);
                                                }
                                            }
                                        }),
                                        this.tl.fromTo(this.allTitles.not(this.mainTitle), { opacity: 1 }, { opacity: 0, duration: 0.25 }, 0.5),
                                        this.tl.fromTo(this.section.find(".title-offset-wrap"), { borderColor: "rgba(0,0,0, 0)" }, { borderColor: "rgba(0,0,0, 1)", duration: 0.25 }, 0.5),
                                        this.tl.fromTo(this.servicesContainer, { opacity: 0 }, { opacity: 1, duration: 0.25 }, 0.5),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== e.tl) {
                                                var i = ((e.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - e.elPositionOffset) / e.canvasDurationOffset).toFixed(3);
                                                i > 1 && (i = 1), i < 0 && (i = 0), t !== i && ((t = i), e.progressTo(i));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                O = (function () {
                    function t() {
                        f(this, t),
                            o()(".key-performance-indicators-section").length &&
                                ((this.section = o()(".key-performance-indicators-section")),
                                (this.title = this.section.find(".section-title")),
                                (this.servicesSection = o()(".services-section")),
                                (this.imgContentWrap = this.section.find(".img-content-wrap")),
                                (this.bgcEl = o()("body")),
                                (this.canvas = this.section.find("#logoCanvas")[0]),
                                (this.ctx = this.canvas.getContext("2d")),
                                (this.txtDragEl = o()("#KPISectionTxtContainer")),
                                (this.txtDragElInner = this.txtDragEl.find(".cursor-txt-el")),
                                (this.image = { src: _root + "images/key-performance-indicators-section/edesign-logo.svg" }),
                                (this.isEventInit = !1),
                                this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    this.section.addClass("start-anims"), this.getAnimParams(), this.loadImages();
                                },
                            },
                            {
                                key: "loadImages",
                                value: function () {
                                    var t = this,
                                        e = 0,
                                        i = new Image();
                                    (i.onload = function () {
                                        (e += 1), (t.image.imgEl = i), 1 == e && (t.createTl(), t.initControls(), t.resize(), t.initMatterJS(), o()(window).trigger("initAllJS"));
                                    }),
                                        (i.src = this.image.src);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)),
                                            r.ZP.ticker.remove(t.progressTween),
                                            r.ZP.set([t.title, t.servicesSection.children(), "#fix-overlay-block-6"], { clearProps: !0 }),
                                            t.getAnimParams(),
                                            t.createTl(),
                                            t.progressTween(),
                                            y(t.section) && r.ZP.ticker.add(t.progressTween),
                                            o()(window).trigger("resizeMatterJS");
                                    });
                                },
                            },
                            {
                                key: "randomNumber",
                                value: function (t) {
                                    return Math.random() * (t - -t) - t;
                                },
                            },
                            {
                                key: "initMatterJS",
                                value: function () {
                                    var t = this,
                                        e = l().Engine,
                                        i = l().Render,
                                        n = l().Runner,
                                        s = (l().Common, l().MouseConstraint),
                                        h = l().Mouse,
                                        c = l().Composite,
                                        u = (l().Events, l().Query),
                                        d = (l().Vertices, l().Svg),
                                        g = l().Bodies,
                                        p = e.create(),
                                        f = i.create({
                                            canvas: document.querySelector("#svgCanvas"),
                                            engine: p,
                                            options: { width: this.canvasWidth, height: this.canvasHeight, background: "transparent", wireframes: !1, showAngleIndicator: !1 },
                                        }),
                                        m = { isStatic: !0, render: { fillStyle: "transparent", strokeStyle: "transparent" } },
                                        w = 200;
                                    (this.lastPositionX = 0.1 * this.canvasWidth), (this.lastPositionY = 0.5 * -this.canvasHeight);
                                    (this.svgsToLoad = [
                                        _root + "images/key-performance-indicators-section/new/bottle_1.svg?v=.1",
                                        _root + "images/key-performance-indicators-section/new/bottle_2.svg?v=.1",
                                        _root + "images/key-performance-indicators-section/new/ellipse_1.svg?v=.1",
                                        _root + "images/key-performance-indicators-section/new/ellipse_2.svg?v=.1",
                                        _root + "images/key-performance-indicators-section/new/pack_1.svg?v=.1",
                                        _root + "images/key-performance-indicators-section/new/pack_2.svg?v=.1",
                                        _root + "images/key-performance-indicators-section/new/star_1.svg?v=.1",
                                        _root + "images/key-performance-indicators-section/new/triangle_1.svg?v=.1",
                                        _root + "images/key-performance-indicators-section/edesign-logo.svg?v=.1",
                                    ]),
                                        (this.loadedSvgs = []),
                                        (this.responsiveSvgWidth = innerWidth > 1024 && innerWidth <= 1920 ? 0.11458 : 110 / 1024),
                                        innerWidth > 1920 && (this.responsiveSvgWidth = 220 / innerWidth);
                                    var S = function () {
                                        (t.svgBodies = []),
                                            (t.bodiesArray = []),
                                            t.loadedSvgs.forEach(function (e, i) {
                                                var n = o()(e.svg).find("svg"),
                                                    r = parseInt(n.attr("height")),
                                                    s = (t.canvasWidth * t.responsiveSvgWidth) / 220,
                                                    a = n.find("[fill]").attr("fill"),
                                                    h = n.find("[stroke]").attr("stroke");
                                                void 0 === a && (a = "black"),
                                                    void 0 === h && (h = a),
                                                    n.hasClass("edesign-logo") && ((a = "transparent"), (h = "transparent")),
                                                    t.lastPositionX + 330 * s >= innerWidth ? ((t.lastPositionX = 0.1 * t.canvasWidth), (t.lastPositionY += r * s)) : (t.lastPositionX += 330 * s);
                                                var u = g.fromVertices(
                                                    n.hasClass("edesign-logo") ? (1.009 * t.canvasWidth) / 2 : t.lastPositionX,
                                                    n.hasClass("edesign-logo") ? 1.035 * t.image.topVal : t.lastPositionY,
                                                    e.vertices,
                                                    { render: { fillStyle: a, strokeStyle: h, lineWidth: 1 }, restitution: 0.8, density: 0.001, friction: 0, frictionAir: 0.01 },
                                                    !0
                                                );
                                                l().Body.scale(u, s, s),
                                                    n.hasClass("edesign-logo")
                                                        ? ((u.isStatic = !0), (t.logoSvg = u))
                                                        : ((u.KPITextContent = n.attr("data-text")),
                                                          l().Body.setPosition(u, { x: u.position.x + t.randomNumber(200), y: u.position.y + t.randomNumber(200) }),
                                                          (u.velocity.x = 2 * Math.random() - 1),
                                                          (u.velocity.y = 2 * Math.random() - 1)),
                                                    t.svgBodies.push({
                                                        x: n.hasClass("edesign-logo") ? (1.009 * t.canvasWidth) / 2 : t.lastPositionX,
                                                        y: n.hasClass("edesign-logo") ? 1.035 * t.image.topVal : t.lastPositionY,
                                                        body: u,
                                                        svg: n,
                                                    }),
                                                    c.add(p.world, u),
                                                    n.hasClass("edesign-logo") || t.bodiesArray.push(u);
                                            }),
                                            (t.ground = g.rectangle(t.canvasWidth / 2, t.canvasHeight + 100, 5 * t.canvasWidth, w, m)),
                                            (t.leftWall = g.rectangle(-100, t.canvasHeight / 2, w, 10 * t.canvasHeight, m)),
                                            (t.rightWall = g.rectangle(t.canvasWidth + 100, t.canvasHeight / 2, w, 10 * t.canvasHeight, m)),
                                            (t.ceiling = g.rectangle(t.canvasWidth / 2, -(3 * t.canvasHeight + 100), 5 * t.canvasWidth, w, m)),
                                            c.add(p.world, [t.ground, t.leftWall, t.rightWall, t.ceiling]),
                                            a.x.on("scroll", function () {
                                                o()(window).trigger("hideText");
                                            });
                                    };
                                    t.svgsToLoad.forEach(function (e, i) {
                                        var n;
                                        ((n = e),
                                        fetch(n)
                                            .then(function (t) {
                                                return t.text();
                                            })
                                            .then(function (t) {
                                                return new window.DOMParser().parseFromString(t, "image/svg+xml");
                                            })).then(function (e) {
                                            var i = (function (t, e) {
                                                return Array.from(t.querySelectorAll(e));
                                            })(e, "path").map(function (t) {
                                                return d.pathToVertices(t, 12);
                                            });
                                            t.loadedSvgs.push({ vertices: i, svg: e }), t.svgsToLoad.length === t.loadedSvgs.length && S();
                                        });
                                    });
                                    var y = n.create(),
                                        v = h.create(f.canvas),
                                        P = s.create(p, { mouse: v, constraint: { stiffness: 0.2, render: { visible: !1 } } });
                                    c.add(p.world, P);
                                    o()(window)
                                        .off("matterJSControl")
                                        .on("matterJSControl", function (t, e) {
                                            "start" === e.state ? (l().Render.run(f), l().Runner.run(y, p)) : (l().Render.stop(f), l().Runner.stop(y));
                                        }),
                                        o()(window)
                                            .off("matterJSAnimControl")
                                            .on("matterJSAnimControl", function (e, i) {
                                                "start" === i.state
                                                    ? (t.setBodyPositions(),
                                                      r.ZP.set("#svgCanvas", { opacity: 1 }),
                                                      t.isEventInit ||
                                                          (function () {
                                                              var e = t.txtDragEl,
                                                                  i = t.txtDragElInner;
                                                              r.ZP.set(e, { xPercent: -50, yPercent: -100 });
                                                              var n = e[0],
                                                                  s = { x: innerWidth / 2, y: innerHeight / 2 },
                                                                  a = { x: s.x, y: s.y },
                                                                  h = r.ZP.quickSetter(n, "x", "px"),
                                                                  c = r.ZP.quickSetter(n, "y", "px"),
                                                                  d = t.title,
                                                                  g = function () {
                                                                      r.ZP.to(i, {
                                                                          opacity: 0,
                                                                          scale: 0.6,
                                                                          duration: 0.2,
                                                                          overwrite: !0,
                                                                          ease: "power2",
                                                                          onComplete: function () {
                                                                              return i.html("");
                                                                          },
                                                                      }),
                                                                          r.ZP.to(d, { opacity: 1, duration: 0.5, ease: "power2" });
                                                                  };
                                                              t.section.off("mousemove").on("mousemove", function (t) {
                                                                  (a.x = t.pageX), (a.y = t.pageY);
                                                              }),
                                                                  t.section.off("mouseleave").on("mouseleave", function () {
                                                                      return o()("html").removeClass("cursor-pointer");
                                                                  });
                                                              var p = "";
                                                              l().Events.off(P),
                                                                  l().Events.on(P, "mousemove", function (e) {
                                                                      var n = u.point(t.bodiesArray, e.mouse.position);
                                                                      if (void 0 !== n[0]) {
                                                                          o()("html").addClass("cursor-pointer");
                                                                          var s = n[0].KPITextContent;
                                                                          p !== s &&
                                                                              ((p = s),
                                                                              i.html(s),
                                                                              r.ZP.fromTo(i, { opacity: 0, scale: 0.6 }, { opacity: 1, scale: 1, duration: 0.3, overwrite: !0, ease: "power2" }),
                                                                              r.ZP.to(d, { opacity: 0, duration: 0.5, ease: "power2" }));
                                                                      } else g(), o()("html").removeClass("cursor-pointer"), (p = "");
                                                                  }),
                                                                  o()(window)
                                                                      .off("hideText")
                                                                      .on("hideText", function () {
                                                                          "" !== p && ((p = ""), g(), o()("html").removeClass("cursor-pointer"));
                                                                      }),
                                                                  r.ZP.ticker.add(function (t, e) {
                                                                      var i = 0.06 * e,
                                                                          n = 1 - Math.pow(0.9, i);
                                                                      (s.x += (a.x - s.x) * n), (s.y += (a.y - s.y) * n), h(s.x), c(s.y);
                                                                  });
                                                          })())
                                                    : r.ZP.to("#svgCanvas", {
                                                          opacity: 0,
                                                          duration: 0.2,
                                                          ease: "none",
                                                          onComplete: function () {
                                                              t.setBodyPositions();
                                                          },
                                                      });
                                            }),
                                        o()(window)
                                            .off("resizeMatterJS")
                                            .on("resizeMatterJS", function () {
                                                (f.canvas.width = t.canvasWidth),
                                                    (f.canvas.height = t.canvasHeight),
                                                    (t.responsiveSvgWidth = innerWidth > 1024 && innerWidth <= 1920 ? 0.11458 : 110 / 1024),
                                                    innerWidth > 1920 && (t.responsiveSvgWidth = 220 / innerWidth),
                                                    c.allBodies(p.world).forEach(function (t) {
                                                        return l().World.remove(p.world, t);
                                                    }),
                                                    t.svgsToLoad.length === t.loadedSvgs.length && S();
                                            });
                                },
                            },
                            {
                                key: "getResponsiveValue",
                                value: function (t) {
                                    var e = window.innerWidth || document.documentElement.clientWidth;
                                    return t * (e > 1024 && e <= 1920 ? e / 1920 : 1);
                                },
                            },
                            {
                                key: "setBodyPositions",
                                value: function () {
                                    var t = this;
                                    this.svgBodies.forEach(function (e) {
                                        l().Body.setPosition(e.body, { x: e.x, y: e.y }),
                                            e.svg.hasClass("edesign-logo") ||
                                                (l().Body.setPosition(e.body, { x: e.body.position.x + t.randomNumber(5), y: e.body.position.y + t.randomNumber(5) }),
                                                (e.body.velocity.x = 2 * Math.random() - 1),
                                                (e.body.velocity.y = 2 * Math.random() - 1));
                                    });
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting
                                            ? (r.ZP.ticker.add(t.progressTween), o()(window).trigger("matterJSControl", { state: "start" }))
                                            : (r.ZP.ticker.remove(t.progressTween), o()(window).trigger("matterJSControl", { state: "stop" }));
                                    }, v)),
                                        this.observer.observe(this.section[0]);
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    (this.isMobile = (0, s.tq)()),
                                        (this.contentWrapHeight = this.section.find(".outer-content-wrap").outerHeight()),
                                        (this.canvasWidth = this.section.outerWidth()),
                                        (this.canvasHeight = this.contentWrapHeight),
                                        (this.canvas.width = Math.ceil(this.canvasWidth)),
                                        (this.canvas.height = Math.ceil(this.canvasHeight)),
                                        (this.image.leftVal = this.imgContentWrap.offset().left + this.imgContentWrap.width() / 2),
                                        (this.image.topVal = this.imgContentWrap.position().top + this.imgContentWrap.height() / 2),
                                        (this.image.widthVal = this.imgContentWrap.width()),
                                        (this.image.heightVal = this.imgContentWrap.height());
                                    var t = 1.05 * innerHeight,
                                        e = t / this.image.heightVal;
                                    (this.scaleVal = { imageVal: e, canvasVal: t / (this.image.heightVal * e * 0.075) }),
                                        r.ZP.set("#fix-overlay-block-6", { height: this.contentWrapHeight + this.servicesSection.outerHeight() }),
                                        (this.elPositionOffset = (0, s.wn)(this.section.prevAll("section")) - innerHeight + 0.65 * this.contentWrapHeight),
                                        (this.canvasDurationOffset = 0.35 * this.contentWrapHeight),
                                        a.x.update();
                                },
                            },
                            {
                                key: "animateCanvas",
                                value: function () {
                                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                                    var t = Math.ceil(this.image.widthVal * this.scaleVal.imageVal),
                                        e = Math.ceil(this.image.heightVal * this.scaleVal.imageVal);
                                    this.ctx.setTransform(
                                        this.scaleVal.canvasVal,
                                        0,
                                        0,
                                        this.scaleVal.canvasVal,
                                        this.image.leftVal - this.scaleVal.canvasVal * this.image.leftVal,
                                        this.image.topVal - this.scaleVal.canvasVal * this.image.topVal
                                    ),
                                        this.ctx.drawImage(this.image.imgEl, this.image.leftVal - t / 2, this.image.topVal - e / 2, t, e);
                                },
                            },
                            {
                                key: "scaleEndControl",
                                value: function (t) {
                                    r.ZP.killTweensOf(this.title),
                                        "show" === t
                                            ? r.ZP.to(this.title, { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", y: 0, duration: 0.4, ease: "power1.inOut" })
                                            : r.ZP.to(this.title, { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 30, duration: 0.4, ease: "power1.inOut" });
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t,
                                        e = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none", duration: 1 } })),
                                        this.tl.fromTo(this.servicesSection.children(), { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.3 }, 0),
                                        this.tl.fromTo(
                                            this.scaleVal,
                                            { canvasVal: this.scaleVal.canvasVal, imageVal: this.scaleVal.imageVal },
                                            {
                                                canvasVal: 1,
                                                imageVal: 1,
                                                duration: 0.85,
                                                ease: "none",
                                                onUpdate: function () {
                                                    return e.animateCanvas();
                                                },
                                            },
                                            0.15
                                        ),
                                        this.tl.to(
                                            {},
                                            {
                                                duration: 0.01,
                                                ease: "none",
                                                onStart: function () {
                                                    o()(window).trigger("matterJSAnimControl", { state: "start" });
                                                },
                                                onReverseComplete: function () {
                                                    o()(window).trigger("matterJSAnimControl", { state: "reverse" });
                                                },
                                            },
                                            ">-75%"
                                        ),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                duration: 0.05,
                                                onStart: function () {
                                                    return e.scaleEndControl("show");
                                                },
                                                onReverseComplete: function () {
                                                    e.scaleEndControl("hide");
                                                },
                                            },
                                            0.95
                                        ),
                                        this.tl.to({}, { duration: 1 }, 0),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== e.tl) {
                                                var i = ((e.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - e.elPositionOffset) / e.canvasDurationOffset).toFixed(3);
                                                i > 1 && (i = 1), i < 0 && (i = 0), t !== i && ((t = i), e.progressTo(i));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                L = (function () {
                    function t() {
                        f(this, t),
                            o()(".clients-love-work-section").length &&
                                ((this.section = o()(".clients-love-work-section")),
                                (this.prevSection = o()(".key-performance-indicators-section .color-wrap")),
                                (this.titleWrap = this.section.find(".title-wrap")),
                                (this.animTitle = this.section.find(".anim-title")),
                                (this.introAnimContent = this.section.find(".section-title:not(.anim-title), .blocks-wrap")),
                                (this.heart = this.section.find(".heart-svg")),
                                (this.blocks = this.section.find(".single-block")),
                                (this.contentWrap = this.section.find(".offset-wrap")),
                                (this.bgcEl = o()("body")),
                                this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    var t = this;
                                    new IntersectionObserver(function (e) {
                                        e[0].intersectionRatio > P.threshold &&
                                            (t.prevSection.hasClass("start-anims") || (t.prevSection.addClass("start-anims"), t.positionBlocks(), t.getAnimParams(), t.createTl(), t.initControls(), t.resize()));
                                    }, P).observe(this.prevSection[0]);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)),
                                            r.ZP.ticker.remove(t.progressTween),
                                            r.ZP.set([t.blocks, t.prevSection, t.animTitle, t.introAnimContent, t.titleWrap.children()], { clearProps: !0 }),
                                            t.positionBlocks(),
                                            t.getAnimParams(),
                                            t.createTl(),
                                            t.progressTween(),
                                            y(t.section) && r.ZP.ticker.add(t.progressTween);
                                    });
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                    }, v)),
                                        this.observer.observe(this.section[0]);
                                },
                            },
                            {
                                key: "positionBlocks",
                                value: function () {
                                    var t = this;
                                    (this.offset = innerWidth > 1024 && innerWidth <= 1920 ? 0.01563 * innerWidth : 30),
                                        (this.blocksScale = []),
                                        this.blocks.each(function (e, i) {
                                            if ((t.blocksScale.push({ scale: 1, el: i, currentY: 0, id: e }), 0 !== e)) {
                                                var n = o()(i),
                                                    a = (0, s.wn)(n.prevAll());
                                                r.ZP.set(n, { top: a + t.offset * e });
                                            }
                                        });
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    (this.step = 0),
                                        (this.isMobile = (0, s.tq)()),
                                        (this.sectionHeight = this.section.outerHeight()),
                                        (this.sectionPaddingTop = this.section.find(".max-w-container").position().top),
                                        (this.elPositionOffset = (0, s.wn)(this.section.prevAll("section")) - innerHeight),
                                        (this.canvasDurationOffset = this.sectionHeight + innerHeight),
                                        (this.heightDiff = this.contentWrap.outerHeight() - innerHeight),
                                        (this.contentDuration = (0.75 * innerHeight) / this.canvasDurationOffset),
                                        (this.beforeBlocksPause = (0.25 * innerHeight) / this.canvasDurationOffset),
                                        (this.blocksDuration = innerHeight / this.canvasDurationOffset / (this.blocks.length - 1)),
                                        (this.postSectionDuration = this.contentWrap.outerHeight() / this.canvasDurationOffset);
                                },
                            },
                            {
                                key: "animateHeart",
                                value: function () {
                                    r.ZP.to(this.heart, { scale: 0.5714, ease: "elastic.out(.8, 0.3)", duration: 1, yoyo: !0, repeat: -1 });
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none", duration: 1 } })),
                                        this.tl.to(
                                            {},
                                            {
                                                duration: 0.01 * this.contentDuration,
                                                onStart: function () {
                                                    return t.section.addClass("z-index");
                                                },
                                                onReverseComplete: function () {
                                                    return t.section.removeClass("z-index");
                                                },
                                            },
                                            0.5 * this.contentDuration
                                        ),
                                        this.tl.fromTo(this.animTitle, { y: 0.1 * -innerHeight, opacity: 0 }, { y: 0, opacity: 1, ease: "power1", duration: 0.5 * this.contentDuration }, 0.5 * this.contentDuration),
                                        this.tl.fromTo(
                                            this.introAnimContent,
                                            { y: 0.2 * innerHeight, opacity: 0 },
                                            {
                                                y: 0,
                                                opacity: 1,
                                                ease: "power1",
                                                duration: 0.5 * this.contentDuration,
                                                onComplete: function () {
                                                    t.animateHeart();
                                                },
                                            },
                                            0.5 * this.contentDuration
                                        ),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                onReverseComplete: function () {
                                                    r.ZP.killTweensOf(t.heart), r.ZP.to(t.heart, { scale: 1 });
                                                },
                                                duration: 0.01 * this.contentDuration,
                                            },
                                            0.99 * this.contentDuration
                                        ),
                                        this.tl.fromTo({}, {}, { duration: this.beforeBlocksPause }, ">");
                                    for (
                                        var e = function (e) {
                                                t.tl.addLabel("blockLabel-" + e, ">"),
                                                    t.blocks.each(function (i, n) {
                                                        i <= e
                                                            ? t.tl.to(n, { scale: "-=0.05", duration: t.blocksDuration, ease: "power1" }, "blockLabel-" + e)
                                                            : t.tl.to(n, { y: "-=".concat(o()(t.blocks[e]).outerHeight()), duration: t.blocksDuration, ease: "power1" }, "blockLabel-" + e);
                                                    });
                                            },
                                            i = 0;
                                        i <= this.blocks.length - 2;
                                        i++
                                    )
                                        e(i);
                                    var n,
                                        s = [this.titleWrap.children(), this.blocks],
                                        h = this.titleWrap.children().length + this.blocks.length;
                                    this.tl.to(s, { y: "-=".concat(0.6 * innerHeight), duration: this.postSectionDuration - h * (0.075 * this.postSectionDuration), stagger: 0.075 * this.postSectionDuration }, ">"),
                                        this.tl.fromTo({}, {}, { duration: 1 }, 0),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== t.tl) {
                                                var e = ((t.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - t.elPositionOffset) / t.canvasDurationOffset).toFixed(3);
                                                e > 1 && (e = 1), e < 0 && (e = 0), n !== e && ((n = e), t.progressTo(e));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                H = (function () {
                    function t() {
                        f(this, t),
                            o()(".cpg-logos-section").length &&
                                ((this.section = o()(".cpg-logos-section")),
                                (this.bgcEl = o()("body")),
                                (this.title = this.section.find(".section-title")),
                                (this.borderEl = this.section.find(".border-el")),
                                (this.blocksWrap = this.section.find(".blocks-outer-wrap")),
                                this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    var t = this;
                                    new IntersectionObserver(function (e) {
                                        e[0].intersectionRatio > P.threshold && (t.section.hasClass("start-anims") || (t.section.addClass("start-anims"), t.getAnimParams(), t.createTl(), t.initControls(), t.resize()));
                                    }, P).observe(this.section[0]);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)),
                                            r.ZP.ticker.remove(t.progressTween),
                                            r.ZP.set([t.title, t.borderEl, t.blocksWrap, t.section.find(".max-w-container"), t.section.find(".scroll-outer-wrap"), t.section.find(".title-wrap")], { clearProps: !0 }),
                                            t.getAnimParams(),
                                            t.createTl(),
                                            t.progressTween(),
                                            y(t.section) && r.ZP.ticker.add(t.progressTween);
                                    });
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                    }, v)),
                                        this.observer.observe(this.section[0]);
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    (this.isMobile = (0, s.tq)()),
                                        (this.sectionHeight = this.section.outerHeight()),
                                        (this.elPositionOffset = (0, s.wn)(this.section.prevAll("section")) - innerHeight),
                                        (this.canvasDurationOffset = this.sectionHeight + innerHeight),
                                        (this.contentDuration = (0.75 * innerHeight) / this.canvasDurationOffset),
                                        (this.pauseDuration = (0.25 * innerHeight) / this.canvasDurationOffset),
                                        (this.postSectionDuration = this.sectionHeight / this.canvasDurationOffset);
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t,
                                        e = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none", duration: 1 } })),
                                        this.tl.fromTo(
                                            this.title,
                                            { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", yPercent: -150 },
                                            { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", yPercent: 0, duration: 0.5 * this.contentDuration },
                                            0.5 * this.contentDuration
                                        ),
                                        this.tl.fromTo(this.borderEl, { width: "40%", opacity: 0 }, { width: "100%", opacity: 1, duration: 0.35 * this.contentDuration }, 0.65 * this.contentDuration),
                                        this.tl.fromTo(this.section.find(".fade-in-wrap"), { opacity: 0 }, { opacity: 1, duration: 0.35 * this.contentDuration }, 0.5 * this.contentDuration),
                                        this.tl.fromTo(
                                            this.blocksWrap,
                                            { clipPath: "polygon(30% 0%, 70% 0%, 70% 100%, 30% 100%)" },
                                            { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: 0.35 * this.contentDuration },
                                            0.65 * this.contentDuration
                                        ),
                                        this.tl.to({}, { duration: this.pauseDuration }, ">"),
                                        this.tl.addLabel("postSectionAnimLabel", ">"),
                                        this.tl.fromTo(this.section.find(".max-w-container"), { y: 0 }, { y: 0.2 * this.section.outerHeight(), duration: 0.5 * this.postSectionDuration }, "postSectionAnimLabel"),
                                        this.tl.fromTo(this.section.find(".scroll-outer-wrap"), { opacity: 1 }, { opacity: 0, duration: 0.5 * this.postSectionDuration }, "postSectionAnimLabel"),
                                        this.tl.fromTo(
                                            this.section.find(".title-wrap"),
                                            { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
                                            { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", duration: 0.5 * this.postSectionDuration, ease: "power1.inOut" },
                                            "postSectionAnimLabel"
                                        ),
                                        this.tl.fromTo({}, {}, { duration: 1 }, 0),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== e.tl) {
                                                var i = ((e.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - e.elPositionOffset) / e.canvasDurationOffset).toFixed(3);
                                                i > 1 && (i = 1), i < 0 && (i = 0), t !== i && ((t = i), e.progressTo(i));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                E = (function () {
                    function t() {
                        f(this, t),
                            o()(".cpg-contact-section").length &&
                                ((this.section = o()(".cpg-contact-section")),
                                (this.contentBgcEl = this.section.find(".bgc-el")),
                                (this.bgcEl = o()("body")),
                                (this.bannerTitle = this.section.find(".banner-txt")),
                                (this.bannerBtn = this.section.find(".trigger-form-btn")),
                                (this.bannerInfoTitle = this.section.find(".post-banner-info-title")),
                                (this.titleLines = this.section.find(".section-title.abs-cover-el .line-outer")),
                                this.initialStartHandler());
                    }
                    return (
                        w(t, [
                            {
                                key: "initialStartHandler",
                                value: function () {
                                    var t = this;
                                    new IntersectionObserver(function (e) {
                                        e[0].intersectionRatio > P.threshold && (t.section.hasClass("start-anims") || (t.section.addClass("start-anims"), t.getAnimParams(), t.createTl(), t.initControls(), t.resize()));
                                    }, P).observe(this.section[0]);
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)),
                                            r.ZP.ticker.remove(t.progressTween),
                                            r.ZP.set(
                                                [t.contentBgcEl, t.bannerInfoTitle, t.section.find(".section-info-title, .scroll-outer-wrap"), t.section.find(".section-title:not(.abs-cover-el)"), t.titleLines, t.bannerTitle, t.bannerBtn],
                                                { clearProps: !0 }
                                            ),
                                            t.getAnimParams(),
                                            t.createTl(),
                                            t.progressTween(),
                                            y(t.section) && r.ZP.ticker.add(t.progressTween);
                                    });
                                },
                            },
                            {
                                key: "initControls",
                                value: function () {
                                    var t = this;
                                    (this.observer = new IntersectionObserver(function (e) {
                                        e[0].isIntersecting ? r.ZP.ticker.add(t.progressTween) : r.ZP.ticker.remove(t.progressTween);
                                    }, v)),
                                        this.observer.observe(this.section[0]);
                                },
                            },
                            {
                                key: "getAnimParams",
                                value: function () {
                                    (this.isMobile = (0, s.tq)()),
                                        (this.sectionHeight = this.section.outerHeight()),
                                        (this.elPositionOffset = (0, s.wn)(this.section.prevAll("section")) - innerHeight),
                                        (this.canvasDurationOffset = this.sectionHeight),
                                        (this.contentDuration = (0.5 * innerHeight) / this.canvasDurationOffset),
                                        (this.pauseDuration = (0.5 * innerHeight) / this.canvasDurationOffset),
                                        (this.finalDuration = (this.sectionHeight - innerHeight) / this.canvasDurationOffset);
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t,
                                        e = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none", duration: 1 } })),
                                        this.tl.fromTo(this.contentBgcEl, { width: "30%", opacity: 0 }, { width: "100%", opacity: 1, duration: this.contentDuration }, 0),
                                        this.tl.fromTo(
                                            {},
                                            {},
                                            {
                                                onComplete: function () {
                                                    r.ZP.to([e.bannerTitle, e.bannerBtn], { opacity: 1, ease: "none", duration: 0.4 }),
                                                        r.ZP.to(e.bannerInfoTitle, { opacity: 1, y: 0, ease: "power2", duration: 0.4 }),
                                                        r.ZP.to(e.section.find(".section-info-title, .scroll-outer-wrap"), { opacity: 1, stagger: 0.3, ease: "none", duration: 0.4 }),
                                                        r.ZP.to(e.section.find(".section-title:not(.abs-cover-el)"), { opacity: 0.33, delay: 0.15, ease: "none", duration: 0.4 });
                                                },
                                                onReverseComplete: function () {
                                                    r.ZP.to([e.bannerTitle, e.bannerBtn], { opacity: 0, ease: "none", duration: 0.4 }),
                                                        r.ZP.to(e.bannerInfoTitle, { opacity: 0, y: 30, ease: "power2", duration: 0.4 }),
                                                        r.ZP.to([e.section.find(".section-info-title, .section-title:not(.abs-cover-el)"), e.section.find(".scroll-outer-wrap")], { opacity: 0, ease: "none" });
                                                },
                                                duration: 0.01 * this.contentDuration,
                                            },
                                            0.99 * this.contentDuration
                                        ),
                                        this.tl.to({}, { duration: this.pauseDuration }, ">"),
                                        this.tl.to({}, { duration: this.finalDuration }, ">"),
                                        this.tl.fromTo(
                                            this.titleLines,
                                            { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
                                            { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", duration: this.finalDuration / this.titleLines.length, stagger: this.finalDuration / this.titleLines.length },
                                            "<"
                                        ),
                                        this.tl.fromTo({}, {}, { duration: 1 }, 0),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        (this.progressTween = function () {
                                            if (void 0 !== e.tl) {
                                                var i = ((e.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - e.elPositionOffset) / e.canvasDurationOffset).toFixed(3);
                                                i > 1 && (i = 1), i < 0 && (i = 0), t !== i && ((t = i), e.progressTo(i));
                                            }
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                I = (function () {
                    function t(e) {
                        f(this, t), (this.sections = e), (this.observerTls = []), (this.eventTls = []), (this.isMobile = (0, s.tq)()), this.init();
                    }
                    return (
                        w(t, [
                            {
                                key: "resize",
                                value: function (t) {
                                    var e = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        (e.isMobile = (0, s.tq)()),
                                            e.observerTls.forEach(function (i, n) {
                                                t.is(o()(i.observeTarget)) && (e.observer.unobserve(i.observeTarget), "undefined" != typeof е && void 0 !== е.tl && (i.tl.kill(), (i.tl = null), e.observerTls.splice(n, 1)));
                                            }),
                                            e.eventTls.forEach(function (i, n) {
                                                i.section.parents("section").is(t) && "undefined" != typeof е && void 0 !== е.tl && (i.tl.kill(), (i.tl = null), e.eventTls.splice(n, 1));
                                            });
                                        var i = e.isMobile ? ".scrolling-block-wrap" : ".scrolling-block-wrap:not(.stop-scroll-anim-desktop)";
                                        t.find(i).each(function (t, i) {
                                            var n = o()(i),
                                                s = n.find(".js-scroll-el");
                                            (e.animSpeed = n.is("[data-anim-speed]") ? parseInt(n.attr("data-anim-speed")) : 110), r.ZP.set(s, { clearProps: !0 }), e.createTl(s, n);
                                        }),
                                            y(t) &&
                                                e.observerTls.forEach(function (e, i) {
                                                    o()(e.observeTarget).is(t) && e.tl.play();
                                                });
                                    });
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    var t = this;
                                    this.makeObserver(), this.createEventListener();
                                    var e = new IntersectionObserver(function (e) {
                                        var i = o()(e[0].target);
                                        if (e[0].intersectionRatio > P.threshold && !i.hasClass("start-horizontal-scroll")) {
                                            i.addClass("start-horizontal-scroll");
                                            var n = t.isMobile ? ".scrolling-block-wrap" : ".scrolling-block-wrap:not(.stop-scroll-anim-desktop)";
                                            i.find(n).each(function (e, i) {
                                                var n = o()(i),
                                                    r = n.find(".js-scroll-el");
                                                (t.animSpeed = n.is("[data-anim-speed]") ? parseInt(n.attr("data-anim-speed")) : 110), t.duplicateHTML(r), t.loadImages(r, n);
                                            });
                                        }
                                    }, P);
                                    this.sections.each(function (t, i) {
                                        return e.observe(i);
                                    });
                                },
                            },
                            {
                                key: "duplicateHTML",
                                value: function (t) {
                                    var e = 1;
                                    if (
                                        (t.each(function (t, i) {
                                            var n = o()(i),
                                                r = n.parents(".scrolling-block-wrap").outerWidth(),
                                                s = n.outerWidth();
                                            e = Math.ceil(r / s);
                                        }),
                                        e > 1)
                                    )
                                        for (var i = 1; i <= e; i++)
                                            t.each(function (t, e) {
                                                return o()(e).append(o()(e).html());
                                            });
                                    else
                                        t.each(function (t, e) {
                                            return o()(e).append(o()(e).html());
                                        });
                                },
                            },
                            {
                                key: "loadImages",
                                value: function (t, e) {
                                    var i = this,
                                        n = t.find("img"),
                                        r = n.length,
                                        s = 0;
                                    r > 0
                                        ? (n.on("load", function () {
                                              r === (s += 1) && (i.createTl(t, e), i.resize(e.parents("section")));
                                          }),
                                          n.each(function (t, e) {
                                              return o()(e).attr("src", o()(e).attr("data-src"));
                                          }))
                                        : (this.createTl(t, e), this.resize(e.parents("section")));
                                },
                            },
                            {
                                key: "makeObserver",
                                value: function () {
                                    var t = this;
                                    this.observer = new IntersectionObserver(function (e) {
                                        t.observerTls.forEach(function (t) {
                                            o()(e[0].target).is(o()(t.observeTarget)) && (e[0].intersectionRatio > 0 ? t.tl.play() : t.tl.pause());
                                        });
                                    }, v);
                                },
                            },
                            {
                                key: "createEventListener",
                                value: function () {
                                    var t = this;
                                    o()(window).on("scrollingAnimHandler", function (e, i) {
                                        t.eventTls.forEach(function (t) {
                                            i.element.is(t.section) && ("play" === i.state ? t.tl.play() : t.tl.pause());
                                        });
                                    });
                                },
                            },
                            {
                                key: "createTl",
                                value: function (t, e) {
                                    var i = t.first().outerWidth(),
                                        n = i / this.animSpeed,
                                        o = t.first(),
                                        s = t.last(),
                                        a = r.ZP.timeline({ paused: !0, repeat: -1, defaults: { ease: "none" } });
                                    a.fromTo(o, { x: 0 }, { x: -i, duration: n }, 0),
                                        a.fromTo(s, { x: 0 }, { x: -i, duration: n }, 0),
                                        a.fromTo(o, { x: i }, { x: 0, duration: n }, n),
                                        a.fromTo(s, { x: -i }, { x: "-=" + i, duration: n }, n);
                                    var h = t.parents("section")[0];
                                    this.isMobile
                                        ? e.parents("section").is(".services-section")
                                            ? this.eventTls.push({ tl: a, section: e })
                                            : (this.observerTls.push({ tl: a, section: e, observeTarget: h }), this.observer.observe(h))
                                        : e.is("[data-manual-scrolling-anim]")
                                        ? this.eventTls.push({ tl: a, section: e })
                                        : (this.observerTls.push({ tl: a, section: e, observeTarget: h }), this.observer.observe(h));
                                },
                            },
                        ]),
                        t
                    );
                })(),
                R = (function () {
                    function t() {
                        f(this, t), (this.body = o()("body")), this.getAnimParams(), this.createTl(), this.resize();
                    }
                    return (
                        w(t, [
                            {
                                key: "getAnimParams",
                                value: function () {
                                    (this.isMobile = (0, s.tq)()),
                                        (this.totalHeight = o()(".smooth-scroll-wrapper").outerHeight() - innerHeight),
                                        (this.section1 = o()(".brand-storytelling-section")),
                                        (this.pause1 =
                                            ((0, s.wn)(this.section1.prevAll("section")) -
                                                innerHeight +
                                                (this.section1.find(".scroll-wrap[data-scroll]").outerHeight() - innerHeight) / 2 -
                                                this.section1.find(".section-phone-final-container").outerHeight() +
                                                this.section1.find(".section-dark-content-container").outerHeight() +
                                                this.section1.find(".section-intro-title-container").outerHeight()) /
                                            this.totalHeight),
                                        (this.duration1 = this.section1.find(".section-phone-final-container").outerHeight() / this.totalHeight),
                                        (this.section2 = o()(".marketing-seo-section"));
                                    var t = this.section2.find(".desktop-spacer-el").height();
                                    (this.sectionTitleWrap = this.section2.find(".section-title-content-wrap")),
                                        (this.blocksInnerWrap = this.section2.find(".blocks-inner-wrap")),
                                        (this.stickyBlockHalfOffset = t - this.blocksInnerWrap.height()),
                                        (this.txtItems = this.section2.find(".txt-items-wrap .txt-item")),
                                        (this.pause2 =
                                            ((0, s.wn)(this.section2.prevAll("section")) -
                                                innerHeight +
                                                this.sectionTitleWrap.position().top +
                                                this.section2.find(".max-w-container").position().top +
                                                this.sectionTitleWrap.height() +
                                                this.blocksInnerWrap.position().top) /
                                            this.totalHeight),
                                        (this.duration2 = this.blocksInnerWrap.height() / this.totalHeight),
                                        (this.duration3 = (0.5 * o()(".services-section").outerHeight()) / this.totalHeight),
                                        (this.splitDur3 = (innerHeight + this.stickyBlockHalfOffset) / this.totalHeight / (this.txtItems.length - 1)),
                                        (this.section4 = o()(".key-performance-indicators-section")),
                                        (this.pause4 = ((0, s.wn)(this.section4.prevAll("section")) - innerHeight) / this.totalHeight),
                                        (this.duration4 = this.section4.find(".outer-content-wrap").outerHeight() / this.totalHeight),
                                        (this.section5 = o()(".clients-love-work-section")),
                                        (this.section5Bgc = this.section5.find(".color-wrapper")),
                                        (this.pause5 = (0, s.wn)(this.section5.prevAll("section")) / this.totalHeight),
                                        (this.duration5 = (0.1 * innerHeight) / this.totalHeight),
                                        (this.blocks5 = this.section5.find(".single-block")),
                                        (this.blocks5Duration = (this.section5.outerHeight() - innerHeight) / this.totalHeight),
                                        (this.section6 = o()(".cpg-logos-section")),
                                        (this.pause6 = ((0, s.wn)(this.section6.prevAll("section")) - innerHeight) / this.totalHeight),
                                        (this.duration6 = (0.5 * innerHeight) / this.totalHeight),
                                        (this.section7 = o()(".cpg-contact-section")),
                                        (this.pause7 = ((0, s.wn)(this.section7.prevAll("section")) - innerHeight) / this.totalHeight),
                                        (this.duration7 = (0.5 * innerHeight) / this.totalHeight),
                                        (this.pause8 = (0, s.wn)(this.section7.prevAll("section")) / this.totalHeight),
                                        (this.duration8 = (this.section7.outerHeight() - innerHeight) / this.totalHeight),
                                        (this.elPositionOffset = 0),
                                        (this.canvasDurationOffset = this.totalHeight);
                                },
                            },
                            {
                                key: "createTl",
                                value: function () {
                                    var t,
                                        e = this;
                                    (this.tl = r.ZP.timeline({ paused: !0, defaults: { ease: "none" } })),
                                        this.tl.fromTo({}, {}, { duration: this.pause1 }, 0),
                                        this.tl.fromTo(this.body, { backgroundColor: "#FFFFFF" }, { backgroundColor: "#F3F3F3", duration: this.duration1 }, this.pause1),
                                        this.tl.fromTo(this.body, { backgroundColor: "#F3F3F3" }, { backgroundColor: this.txtItems.first().data("block-color"), duration: this.duration2 }, this.pause2),
                                        this.txtItems.each(function (t, i) {
                                            if (0 !== t) {
                                                var n = o()(i);
                                                e.tl.addLabel("txtLabel".concat(t), ">");
                                                var s = "txtLabel".concat(t);
                                                e.tl.fromTo(e.body, { backgroundColor: n.prev().data("block-color") }, { backgroundColor: n.data("block-color"), duration: e.splitDur3 }, s),
                                                    t === e.txtItems.length - 1 &&
                                                        (e.tl.fromTo(
                                                            e.body,
                                                            { backgroundColor: n.data("block-color") },
                                                            {
                                                                backgroundColor: "#202020",
                                                                duration: e.duration3,
                                                                onComplete: function () {
                                                                    r.ZP.killTweensOf("#logoCanvas"), r.ZP.to("#logoCanvas", { opacity: 1, ease: "none", duration: 0.2 });
                                                                },
                                                            }
                                                        ),
                                                        e.tl.to(
                                                            {},
                                                            {
                                                                duration: 0.01 * e.duration3,
                                                                onReverseComplete: function () {
                                                                    r.ZP.killTweensOf("#logoCanvas"),
                                                                        r.ZP.to("#logoCanvas", {
                                                                            opacity: 0,
                                                                            ease: "none",
                                                                            duration: 0.2,
                                                                            onComplete: function () {
                                                                                o()(window).trigger("matterJSAnimControl", { state: "reverse" });
                                                                            },
                                                                        });
                                                                },
                                                            },
                                                            "-=".concat(0.01 * e.duration3)
                                                        ));
                                            }
                                        }),
                                        this.tl.fromTo(this.body, { backgroundColor: "#202020" }, { backgroundColor: "#F4F4F4", duration: 0.05 * this.duration4 }, this.pause4),
                                        this.blocks5.each(function (t, i) {
                                            var n = o()(i);
                                            0 === t ||
                                                (1 === t
                                                    ? (e.tl.fromTo(e.body, { backgroundColor: "#F4F4F4" }, { backgroundColor: n.attr("data-body-color"), duration: e.blocks5Duration / (e.blocks5.length - 1) }, e.pause5),
                                                      e.tl.fromTo(
                                                          e.section5Bgc,
                                                          { backgroundColor: n.prev().attr("data-body-color") },
                                                          { backgroundColor: n.attr("data-body-color"), duration: e.blocks5Duration / (e.blocks5.length - 1) },
                                                          e.pause5
                                                      ))
                                                    : e.tl.fromTo(
                                                          [e.body, e.section5Bgc],
                                                          { backgroundColor: n.prev().attr("data-body-color") },
                                                          { backgroundColor: n.attr("data-body-color"), duration: e.blocks5Duration / (e.blocks5.length - 1) }
                                                      ));
                                        }),
                                        this.tl.fromTo([this.body, this.section5Bgc], { backgroundColor: "#D8F9DC" }, { backgroundColor: "#FFF", duration: this.duration6 }, this.pause6),
                                        this.tl.fromTo([this.body, this.section5Bgc], { backgroundColor: "#FFF" }, { backgroundColor: "#397252", duration: this.duration7 }, this.pause7),
                                        this.tl.to(
                                            {},
                                            {
                                                duration: 0.25 * this.duration7,
                                                onStart: function () {
                                                    o()("html").addClass("light-theme");
                                                },
                                                onReverseComplete: function () {
                                                    o()("html").removeClass("light-theme");
                                                },
                                            },
                                            "<+".concat(0.75 * this.duration7)
                                        ),
                                        this.tl.fromTo([this.body, this.section5Bgc], { backgroundColor: "#397252" }, { backgroundColor: "#1E1E1E", duration: this.duration8 }, this.pause8),
                                        this.tl.fromTo({}, {}, { duration: 1 }, 0),
                                        (this.progressTo = r.ZP.quickTo(this.tl, "progress", { ease: "power2" })),
                                        r.ZP.set(this.body, { backgroundColor: "#FFF" }),
                                        (this.progressTween = function () {
                                            if (void 0 !== e.tl) {
                                                var i = ((e.isMobile ? document.body.scrollTop : a.x.scroll.instance.scroll.y - e.elPositionOffset) / e.canvasDurationOffset).toFixed(3);
                                                i > 1 && (i = 1), i < 0 && (i = 0), t !== i && ((t = i), e.progressTo(i));
                                            }
                                        }),
                                        r.ZP.ticker.add(this.progressTween),
                                        r.ZP.set(this.section5Bgc, { backgroundColor: this.blocks5.first().attr("data-body-color") });
                                },
                            },
                            {
                                key: "resize",
                                value: function () {
                                    var t = this;
                                    o()(window).on("resizeObserverTrigger", function () {
                                        void 0 !== t.tl && (t.tl.kill(), (t.tl = null)), r.ZP.ticker.remove(t.progressTween), t.getAnimParams(), t.createTl(), t.progressTween();
                                    });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                W = function () {
                    new p(),
                        new I(o()(".horizontal-scroll-section")),
                        new k(),
                        new G(),
                        (0, s.tq)() ||
                            (new T(),
                            new A(),
                            new x(),
                            new L(),
                            new H(),
                            new E(),
                            new R(),
                            r.ZP.delayedCall(
                                0.5,
                                function () {
                                    return a.x.start();
                                },
                                null
                            )),
                        Promise.all([i.e(898), i.e(365)])
                            .then(i.bind(i, 99021))
                            .then(function (t) {
                                new t.default();
                            });
                },
                B = (function () {
                    function t() {
                        f(this, t), this.brandsListSection(), this.marketingSeoSection(), this.clientsLoveSectionMobile();
                    }
                    return (
                        w(t, [
                            {
                                key: "brandsListSection",
                                value: function () {
                                    o()(".brands-list-section").find(".brands-small-component video").attr("autoplay", !0);
                                },
                            },
                            {
                                key: "marketingSeoSection",
                                value: function () {
                                    o()(".marketing-seo-section")
                                        .find(".mobile-content-wrap .single-block")
                                        .each(function (t, e) {
                                            var i = o()(e);
                                            r.ZP.set(i, { backgroundColor: i.attr("data-block-color") });
                                        });
                                },
                            },
                            {
                                key: "clientsLoveSectionMobile",
                                value: function () {
                                    r.ZP.to(".clients-love-work-section .heart-svg", { scale: 0.5714, ease: "elastic.out(.8, 0.3)", duration: 1, yoyo: !0, repeat: -1 });
                                },
                            },
                        ]),
                        t
                    );
                })(),
                Z = function () {
                    var t = o()("#header"),
                        e = t.find(".header-logo-link"),
                        i = t.find(".header-btn"),
                        n = function () {
                            r.ZP.set(".sticky-header-logo-link", { left: e.offset().left, top: e.position().top }), r.ZP.set(".sticky-header-btn", { left: i.offset().left, top: i.position().top });
                        };
                    n(), o()(window).on("resizeObserverTrigger", n), (0, s.tq)() && o()(".sticky-header-logo-link, .sticky-header-btn").addClass("show-link");
                },
                D = function () {
                    (0, s.tq)()
                        ? (Z(), V(), W(), new B(), o()("html").hasClass("dev") ? o()(window).trigger("introAnimComplete") : new b())
                        : (new O(),
                          o()(window).on("initAllJS", function () {
                              setTimeout(function () {
                                  Z(),
                                      V(),
                                      o()(window).on("introAnimComplete", _),
                                      new C(),
                                      a.x.stop(),
                                      o()(".btn-bgc-hover-anim").each(function (t, e) {
                                          var i = e,
                                              n = o()(e).find(".btn-bg-color"),
                                              s = 5,
                                              a = r.ZP.quickTo(n, "x", { duration: 1, ease: "power3" }),
                                              h = r.ZP.quickTo(n, "y", { duration: 1, ease: "power3" }),
                                              c = function (t) {
                                                  return r.ZP.to(n, { scale: t, id: "scaleTween", duration: 1, ease: "power3" });
                                              };
                                          i.addEventListener("mousemove", function (t) {
                                              var e = i.getBoundingClientRect(),
                                                  o = e.left + e.width / 2,
                                                  c = e.top + e.height / 2,
                                                  l = t.clientX - o,
                                                  u = t.clientY - c,
                                                  d = Math.sqrt(Math.pow(l, 2) + Math.pow(u, 2)),
                                                  g = Math.min(d, s),
                                                  p = (l / d) * g,
                                                  f = (u / d) * g;
                                              r.ZP.getTweensOf(n).forEach(function (t) {
                                                  return "scaleTween" !== t.vars.id ? t.pause() : null;
                                              }),
                                                  a(p),
                                                  h(f);
                                          }),
                                              i.addEventListener("mouseleave", function () {
                                                  r.ZP.getTweensOf(n).forEach(function (t) {
                                                      return "scaleTween" !== t.vars.id ? t.pause() : null;
                                                  }),
                                                      a(0),
                                                      h(0),
                                                      c(1);
                                              }),
                                              i.addEventListener("mouseenter", function () {
                                                  c(1.05);
                                              });
                                      }),
                                      o()("html").hasClass("dev") ? o()(window).trigger("introAnimComplete") : new b();
                              }, 100);
                          }));
                };
        },
        56074: function () {
            !(function () {
                "use strict";
                "undefined" != typeof window &&
                    ("SVGPathSeg" in window ||
                        ((window.SVGPathSeg = function (t, e, i) {
                            (this.pathSegType = t), (this.pathSegTypeAsLetter = e), (this._owningPathSegList = i);
                        }),
                        (window.SVGPathSeg.prototype.classname = "SVGPathSeg"),
                        (window.SVGPathSeg.PATHSEG_UNKNOWN = 0),
                        (window.SVGPathSeg.PATHSEG_CLOSEPATH = 1),
                        (window.SVGPathSeg.PATHSEG_MOVETO_ABS = 2),
                        (window.SVGPathSeg.PATHSEG_MOVETO_REL = 3),
                        (window.SVGPathSeg.PATHSEG_LINETO_ABS = 4),
                        (window.SVGPathSeg.PATHSEG_LINETO_REL = 5),
                        (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS = 6),
                        (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL = 7),
                        (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS = 8),
                        (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL = 9),
                        (window.SVGPathSeg.PATHSEG_ARC_ABS = 10),
                        (window.SVGPathSeg.PATHSEG_ARC_REL = 11),
                        (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS = 12),
                        (window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL = 13),
                        (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS = 14),
                        (window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL = 15),
                        (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS = 16),
                        (window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL = 17),
                        (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS = 18),
                        (window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL = 19),
                        (window.SVGPathSeg.prototype._segmentChanged = function () {
                            this._owningPathSegList && this._owningPathSegList.segmentChanged(this);
                        }),
                        (window.SVGPathSegClosePath = function (t) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CLOSEPATH, "z", t);
                        }),
                        (window.SVGPathSegClosePath.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegClosePath.prototype.toString = function () {
                            return "[object SVGPathSegClosePath]";
                        }),
                        (window.SVGPathSegClosePath.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter;
                        }),
                        (window.SVGPathSegClosePath.prototype.clone = function () {
                            return new window.SVGPathSegClosePath(void 0);
                        }),
                        (window.SVGPathSegMovetoAbs = function (t, e, i) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_ABS, "M", t), (this._x = e), (this._y = i);
                        }),
                        (window.SVGPathSegMovetoAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegMovetoAbs.prototype.toString = function () {
                            return "[object SVGPathSegMovetoAbs]";
                        }),
                        (window.SVGPathSegMovetoAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegMovetoAbs.prototype.clone = function () {
                            return new window.SVGPathSegMovetoAbs(void 0, this._x, this._y);
                        }),
                        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegMovetoAbs.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegMovetoRel = function (t, e, i) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_MOVETO_REL, "m", t), (this._x = e), (this._y = i);
                        }),
                        (window.SVGPathSegMovetoRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegMovetoRel.prototype.toString = function () {
                            return "[object SVGPathSegMovetoRel]";
                        }),
                        (window.SVGPathSegMovetoRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegMovetoRel.prototype.clone = function () {
                            return new window.SVGPathSegMovetoRel(void 0, this._x, this._y);
                        }),
                        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegMovetoRel.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegLinetoAbs = function (t, e, i) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_ABS, "L", t), (this._x = e), (this._y = i);
                        }),
                        (window.SVGPathSegLinetoAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegLinetoAbs.prototype.toString = function () {
                            return "[object SVGPathSegLinetoAbs]";
                        }),
                        (window.SVGPathSegLinetoAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegLinetoAbs.prototype.clone = function () {
                            return new window.SVGPathSegLinetoAbs(void 0, this._x, this._y);
                        }),
                        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegLinetoAbs.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegLinetoRel = function (t, e, i) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_REL, "l", t), (this._x = e), (this._y = i);
                        }),
                        (window.SVGPathSegLinetoRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegLinetoRel.prototype.toString = function () {
                            return "[object SVGPathSegLinetoRel]";
                        }),
                        (window.SVGPathSegLinetoRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegLinetoRel.prototype.clone = function () {
                            return new window.SVGPathSegLinetoRel(void 0, this._x, this._y);
                        }),
                        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegLinetoRel.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegCurvetoCubicAbs = function (t, e, i, n, o, r, s) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS, "C", t), (this._x = e), (this._y = i), (this._x1 = n), (this._y1 = o), (this._x2 = r), (this._y2 = s);
                        }),
                        (window.SVGPathSegCurvetoCubicAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegCurvetoCubicAbs.prototype.toString = function () {
                            return "[object SVGPathSegCurvetoCubicAbs]";
                        }),
                        (window.SVGPathSegCurvetoCubicAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegCurvetoCubicAbs.prototype.clone = function () {
                            return new window.SVGPathSegCurvetoCubicAbs(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x1", {
                            get: function () {
                                return this._x1;
                            },
                            set: function (t) {
                                (this._x1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y1", {
                            get: function () {
                                return this._y1;
                            },
                            set: function (t) {
                                (this._y1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "x2", {
                            get: function () {
                                return this._x2;
                            },
                            set: function (t) {
                                (this._x2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicAbs.prototype, "y2", {
                            get: function () {
                                return this._y2;
                            },
                            set: function (t) {
                                (this._y2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegCurvetoCubicRel = function (t, e, i, n, o, r, s) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL, "c", t), (this._x = e), (this._y = i), (this._x1 = n), (this._y1 = o), (this._x2 = r), (this._y2 = s);
                        }),
                        (window.SVGPathSegCurvetoCubicRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegCurvetoCubicRel.prototype.toString = function () {
                            return "[object SVGPathSegCurvetoCubicRel]";
                        }),
                        (window.SVGPathSegCurvetoCubicRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegCurvetoCubicRel.prototype.clone = function () {
                            return new window.SVGPathSegCurvetoCubicRel(void 0, this._x, this._y, this._x1, this._y1, this._x2, this._y2);
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x1", {
                            get: function () {
                                return this._x1;
                            },
                            set: function (t) {
                                (this._x1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y1", {
                            get: function () {
                                return this._y1;
                            },
                            set: function (t) {
                                (this._y1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "x2", {
                            get: function () {
                                return this._x2;
                            },
                            set: function (t) {
                                (this._x2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicRel.prototype, "y2", {
                            get: function () {
                                return this._y2;
                            },
                            set: function (t) {
                                (this._y2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegCurvetoQuadraticAbs = function (t, e, i, n, o) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS, "Q", t), (this._x = e), (this._y = i), (this._x1 = n), (this._y1 = o);
                        }),
                        (window.SVGPathSegCurvetoQuadraticAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegCurvetoQuadraticAbs.prototype.toString = function () {
                            return "[object SVGPathSegCurvetoQuadraticAbs]";
                        }),
                        (window.SVGPathSegCurvetoQuadraticAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegCurvetoQuadraticAbs.prototype.clone = function () {
                            return new window.SVGPathSegCurvetoQuadraticAbs(void 0, this._x, this._y, this._x1, this._y1);
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "x1", {
                            get: function () {
                                return this._x1;
                            },
                            set: function (t) {
                                (this._x1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticAbs.prototype, "y1", {
                            get: function () {
                                return this._y1;
                            },
                            set: function (t) {
                                (this._y1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegCurvetoQuadraticRel = function (t, e, i, n, o) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL, "q", t), (this._x = e), (this._y = i), (this._x1 = n), (this._y1 = o);
                        }),
                        (window.SVGPathSegCurvetoQuadraticRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegCurvetoQuadraticRel.prototype.toString = function () {
                            return "[object SVGPathSegCurvetoQuadraticRel]";
                        }),
                        (window.SVGPathSegCurvetoQuadraticRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x1 + " " + this._y1 + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegCurvetoQuadraticRel.prototype.clone = function () {
                            return new window.SVGPathSegCurvetoQuadraticRel(void 0, this._x, this._y, this._x1, this._y1);
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "x1", {
                            get: function () {
                                return this._x1;
                            },
                            set: function (t) {
                                (this._x1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticRel.prototype, "y1", {
                            get: function () {
                                return this._y1;
                            },
                            set: function (t) {
                                (this._y1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegArcAbs = function (t, e, i, n, o, r, s, a) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_ABS, "A", t), (this._x = e), (this._y = i), (this._r1 = n), (this._r2 = o), (this._angle = r), (this._largeArcFlag = s), (this._sweepFlag = a);
                        }),
                        (window.SVGPathSegArcAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegArcAbs.prototype.toString = function () {
                            return "[object SVGPathSegArcAbs]";
                        }),
                        (window.SVGPathSegArcAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegArcAbs.prototype.clone = function () {
                            return new window.SVGPathSegArcAbs(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
                        }),
                        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r1", {
                            get: function () {
                                return this._r1;
                            },
                            set: function (t) {
                                (this._r1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "r2", {
                            get: function () {
                                return this._r2;
                            },
                            set: function (t) {
                                (this._r2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "angle", {
                            get: function () {
                                return this._angle;
                            },
                            set: function (t) {
                                (this._angle = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "largeArcFlag", {
                            get: function () {
                                return this._largeArcFlag;
                            },
                            set: function (t) {
                                (this._largeArcFlag = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcAbs.prototype, "sweepFlag", {
                            get: function () {
                                return this._sweepFlag;
                            },
                            set: function (t) {
                                (this._sweepFlag = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegArcRel = function (t, e, i, n, o, r, s, a) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_ARC_REL, "a", t), (this._x = e), (this._y = i), (this._r1 = n), (this._r2 = o), (this._angle = r), (this._largeArcFlag = s), (this._sweepFlag = a);
                        }),
                        (window.SVGPathSegArcRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegArcRel.prototype.toString = function () {
                            return "[object SVGPathSegArcRel]";
                        }),
                        (window.SVGPathSegArcRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._r1 + " " + this._r2 + " " + this._angle + " " + (this._largeArcFlag ? "1" : "0") + " " + (this._sweepFlag ? "1" : "0") + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegArcRel.prototype.clone = function () {
                            return new window.SVGPathSegArcRel(void 0, this._x, this._y, this._r1, this._r2, this._angle, this._largeArcFlag, this._sweepFlag);
                        }),
                        Object.defineProperty(window.SVGPathSegArcRel.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcRel.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r1", {
                            get: function () {
                                return this._r1;
                            },
                            set: function (t) {
                                (this._r1 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcRel.prototype, "r2", {
                            get: function () {
                                return this._r2;
                            },
                            set: function (t) {
                                (this._r2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcRel.prototype, "angle", {
                            get: function () {
                                return this._angle;
                            },
                            set: function (t) {
                                (this._angle = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcRel.prototype, "largeArcFlag", {
                            get: function () {
                                return this._largeArcFlag;
                            },
                            set: function (t) {
                                (this._largeArcFlag = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegArcRel.prototype, "sweepFlag", {
                            get: function () {
                                return this._sweepFlag;
                            },
                            set: function (t) {
                                (this._sweepFlag = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegLinetoHorizontalAbs = function (t, e) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS, "H", t), (this._x = e);
                        }),
                        (window.SVGPathSegLinetoHorizontalAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegLinetoHorizontalAbs.prototype.toString = function () {
                            return "[object SVGPathSegLinetoHorizontalAbs]";
                        }),
                        (window.SVGPathSegLinetoHorizontalAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x;
                        }),
                        (window.SVGPathSegLinetoHorizontalAbs.prototype.clone = function () {
                            return new window.SVGPathSegLinetoHorizontalAbs(void 0, this._x);
                        }),
                        Object.defineProperty(window.SVGPathSegLinetoHorizontalAbs.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegLinetoHorizontalRel = function (t, e) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL, "h", t), (this._x = e);
                        }),
                        (window.SVGPathSegLinetoHorizontalRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegLinetoHorizontalRel.prototype.toString = function () {
                            return "[object SVGPathSegLinetoHorizontalRel]";
                        }),
                        (window.SVGPathSegLinetoHorizontalRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x;
                        }),
                        (window.SVGPathSegLinetoHorizontalRel.prototype.clone = function () {
                            return new window.SVGPathSegLinetoHorizontalRel(void 0, this._x);
                        }),
                        Object.defineProperty(window.SVGPathSegLinetoHorizontalRel.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegLinetoVerticalAbs = function (t, e) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS, "V", t), (this._y = e);
                        }),
                        (window.SVGPathSegLinetoVerticalAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegLinetoVerticalAbs.prototype.toString = function () {
                            return "[object SVGPathSegLinetoVerticalAbs]";
                        }),
                        (window.SVGPathSegLinetoVerticalAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._y;
                        }),
                        (window.SVGPathSegLinetoVerticalAbs.prototype.clone = function () {
                            return new window.SVGPathSegLinetoVerticalAbs(void 0, this._y);
                        }),
                        Object.defineProperty(window.SVGPathSegLinetoVerticalAbs.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegLinetoVerticalRel = function (t, e) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL, "v", t), (this._y = e);
                        }),
                        (window.SVGPathSegLinetoVerticalRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegLinetoVerticalRel.prototype.toString = function () {
                            return "[object SVGPathSegLinetoVerticalRel]";
                        }),
                        (window.SVGPathSegLinetoVerticalRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._y;
                        }),
                        (window.SVGPathSegLinetoVerticalRel.prototype.clone = function () {
                            return new window.SVGPathSegLinetoVerticalRel(void 0, this._y);
                        }),
                        Object.defineProperty(window.SVGPathSegLinetoVerticalRel.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegCurvetoCubicSmoothAbs = function (t, e, i, n, o) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS, "S", t), (this._x = e), (this._y = i), (this._x2 = n), (this._y2 = o);
                        }),
                        (window.SVGPathSegCurvetoCubicSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.toString = function () {
                            return "[object SVGPathSegCurvetoCubicSmoothAbs]";
                        }),
                        (window.SVGPathSegCurvetoCubicSmoothAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegCurvetoCubicSmoothAbs.prototype.clone = function () {
                            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, this._x, this._y, this._x2, this._y2);
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "x2", {
                            get: function () {
                                return this._x2;
                            },
                            set: function (t) {
                                (this._x2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothAbs.prototype, "y2", {
                            get: function () {
                                return this._y2;
                            },
                            set: function (t) {
                                (this._y2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegCurvetoCubicSmoothRel = function (t, e, i, n, o) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL, "s", t), (this._x = e), (this._y = i), (this._x2 = n), (this._y2 = o);
                        }),
                        (window.SVGPathSegCurvetoCubicSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegCurvetoCubicSmoothRel.prototype.toString = function () {
                            return "[object SVGPathSegCurvetoCubicSmoothRel]";
                        }),
                        (window.SVGPathSegCurvetoCubicSmoothRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x2 + " " + this._y2 + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegCurvetoCubicSmoothRel.prototype.clone = function () {
                            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, this._x, this._y, this._x2, this._y2);
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "x2", {
                            get: function () {
                                return this._x2;
                            },
                            set: function (t) {
                                (this._x2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoCubicSmoothRel.prototype, "y2", {
                            get: function () {
                                return this._y2;
                            },
                            set: function (t) {
                                (this._y2 = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegCurvetoQuadraticSmoothAbs = function (t, e, i) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS, "T", t), (this._x = e), (this._y = i);
                        }),
                        (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.toString = function () {
                            return "[object SVGPathSegCurvetoQuadraticSmoothAbs]";
                        }),
                        (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype.clone = function () {
                            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, this._x, this._y);
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothAbs.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegCurvetoQuadraticSmoothRel = function (t, e, i) {
                            window.SVGPathSeg.call(this, window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL, "t", t), (this._x = e), (this._y = i);
                        }),
                        (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype = Object.create(window.SVGPathSeg.prototype)),
                        (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.toString = function () {
                            return "[object SVGPathSegCurvetoQuadraticSmoothRel]";
                        }),
                        (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype._asPathString = function () {
                            return this.pathSegTypeAsLetter + " " + this._x + " " + this._y;
                        }),
                        (window.SVGPathSegCurvetoQuadraticSmoothRel.prototype.clone = function () {
                            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, this._x, this._y);
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "x", {
                            get: function () {
                                return this._x;
                            },
                            set: function (t) {
                                (this._x = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegCurvetoQuadraticSmoothRel.prototype, "y", {
                            get: function () {
                                return this._y;
                            },
                            set: function (t) {
                                (this._y = t), this._segmentChanged();
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegClosePath = function () {
                            return new window.SVGPathSegClosePath(void 0);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegMovetoAbs = function (t, e) {
                            return new window.SVGPathSegMovetoAbs(void 0, t, e);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegMovetoRel = function (t, e) {
                            return new window.SVGPathSegMovetoRel(void 0, t, e);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegLinetoAbs = function (t, e) {
                            return new window.SVGPathSegLinetoAbs(void 0, t, e);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegLinetoRel = function (t, e) {
                            return new window.SVGPathSegLinetoRel(void 0, t, e);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicAbs = function (t, e, i, n, o, r) {
                            return new window.SVGPathSegCurvetoCubicAbs(void 0, t, e, i, n, o, r);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicRel = function (t, e, i, n, o, r) {
                            return new window.SVGPathSegCurvetoCubicRel(void 0, t, e, i, n, o, r);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticAbs = function (t, e, i, n) {
                            return new window.SVGPathSegCurvetoQuadraticAbs(void 0, t, e, i, n);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticRel = function (t, e, i, n) {
                            return new window.SVGPathSegCurvetoQuadraticRel(void 0, t, e, i, n);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegArcAbs = function (t, e, i, n, o, r, s) {
                            return new window.SVGPathSegArcAbs(void 0, t, e, i, n, o, r, s);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegArcRel = function (t, e, i, n, o, r, s) {
                            return new window.SVGPathSegArcRel(void 0, t, e, i, n, o, r, s);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalAbs = function (t) {
                            return new window.SVGPathSegLinetoHorizontalAbs(void 0, t);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegLinetoHorizontalRel = function (t) {
                            return new window.SVGPathSegLinetoHorizontalRel(void 0, t);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalAbs = function (t) {
                            return new window.SVGPathSegLinetoVerticalAbs(void 0, t);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegLinetoVerticalRel = function (t) {
                            return new window.SVGPathSegLinetoVerticalRel(void 0, t);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothAbs = function (t, e, i, n) {
                            return new window.SVGPathSegCurvetoCubicSmoothAbs(void 0, t, e, i, n);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegCurvetoCubicSmoothRel = function (t, e, i, n) {
                            return new window.SVGPathSegCurvetoCubicSmoothRel(void 0, t, e, i, n);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothAbs = function (t, e) {
                            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(void 0, t, e);
                        }),
                        (window.SVGPathElement.prototype.createSVGPathSegCurvetoQuadraticSmoothRel = function (t, e) {
                            return new window.SVGPathSegCurvetoQuadraticSmoothRel(void 0, t, e);
                        }),
                        "getPathSegAtLength" in window.SVGPathElement.prototype ||
                            (window.SVGPathElement.prototype.getPathSegAtLength = function (t) {
                                if (void 0 === t || !isFinite(t)) throw "Invalid arguments.";
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                e.setAttribute("d", this.getAttribute("d"));
                                var i = e.pathSegList.numberOfItems - 1;
                                if (i <= 0) return 0;
                                do {
                                    if ((e.pathSegList.removeItem(i), t > e.getTotalLength())) break;
                                    i--;
                                } while (i > 0);
                                return i;
                            })),
                    ("SVGPathSegList" in window && "appendItem" in window.SVGPathSegList.prototype) ||
                        ((window.SVGPathSegList = function (t) {
                            (this._pathElement = t),
                                (this._list = this._parsePath(this._pathElement.getAttribute("d"))),
                                (this._mutationObserverConfig = { attributes: !0, attributeFilter: ["d"] }),
                                (this._pathElementMutationObserver = new MutationObserver(this._updateListFromPathMutations.bind(this))),
                                this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
                        }),
                        (window.SVGPathSegList.prototype.classname = "SVGPathSegList"),
                        Object.defineProperty(window.SVGPathSegList.prototype, "numberOfItems", {
                            get: function () {
                                return this._checkPathSynchronizedToList(), this._list.length;
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathSegList.prototype, "length", {
                            get: function () {
                                return this._checkPathSynchronizedToList(), this._list.length;
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathElement.prototype, "pathSegList", {
                            get: function () {
                                return this._pathSegList || (this._pathSegList = new window.SVGPathSegList(this)), this._pathSegList;
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathElement.prototype, "normalizedPathSegList", {
                            get: function () {
                                return this.pathSegList;
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathElement.prototype, "animatedPathSegList", {
                            get: function () {
                                return this.pathSegList;
                            },
                            enumerable: !0,
                        }),
                        Object.defineProperty(window.SVGPathElement.prototype, "animatedNormalizedPathSegList", {
                            get: function () {
                                return this.pathSegList;
                            },
                            enumerable: !0,
                        }),
                        (window.SVGPathSegList.prototype._checkPathSynchronizedToList = function () {
                            this._updateListFromPathMutations(this._pathElementMutationObserver.takeRecords());
                        }),
                        (window.SVGPathSegList.prototype._updateListFromPathMutations = function (t) {
                            if (this._pathElement) {
                                var e = !1;
                                t.forEach(function (t) {
                                    "d" == t.attributeName && (e = !0);
                                }),
                                    e && (this._list = this._parsePath(this._pathElement.getAttribute("d")));
                            }
                        }),
                        (window.SVGPathSegList.prototype._writeListToPath = function () {
                            this._pathElementMutationObserver.disconnect(),
                                this._pathElement.setAttribute("d", window.SVGPathSegList._pathSegArrayAsString(this._list)),
                                this._pathElementMutationObserver.observe(this._pathElement, this._mutationObserverConfig);
                        }),
                        (window.SVGPathSegList.prototype.segmentChanged = function (t) {
                            this._writeListToPath();
                        }),
                        (window.SVGPathSegList.prototype.clear = function () {
                            this._checkPathSynchronizedToList(),
                                this._list.forEach(function (t) {
                                    t._owningPathSegList = null;
                                }),
                                (this._list = []),
                                this._writeListToPath();
                        }),
                        (window.SVGPathSegList.prototype.initialize = function (t) {
                            return this._checkPathSynchronizedToList(), (this._list = [t]), (t._owningPathSegList = this), this._writeListToPath(), t;
                        }),
                        (window.SVGPathSegList.prototype._checkValidIndex = function (t) {
                            if (isNaN(t) || t < 0 || t >= this.numberOfItems) throw "INDEX_SIZE_ERR";
                        }),
                        (window.SVGPathSegList.prototype.getItem = function (t) {
                            return this._checkPathSynchronizedToList(), this._checkValidIndex(t), this._list[t];
                        }),
                        (window.SVGPathSegList.prototype.insertItemBefore = function (t, e) {
                            return (
                                this._checkPathSynchronizedToList(),
                                e > this.numberOfItems && (e = this.numberOfItems),
                                t._owningPathSegList && (t = t.clone()),
                                this._list.splice(e, 0, t),
                                (t._owningPathSegList = this),
                                this._writeListToPath(),
                                t
                            );
                        }),
                        (window.SVGPathSegList.prototype.replaceItem = function (t, e) {
                            return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._checkValidIndex(e), (this._list[e] = t), (t._owningPathSegList = this), this._writeListToPath(), t;
                        }),
                        (window.SVGPathSegList.prototype.removeItem = function (t) {
                            this._checkPathSynchronizedToList(), this._checkValidIndex(t);
                            var e = this._list[t];
                            return this._list.splice(t, 1), this._writeListToPath(), e;
                        }),
                        (window.SVGPathSegList.prototype.appendItem = function (t) {
                            return this._checkPathSynchronizedToList(), t._owningPathSegList && (t = t.clone()), this._list.push(t), (t._owningPathSegList = this), this._writeListToPath(), t;
                        }),
                        (window.SVGPathSegList._pathSegArrayAsString = function (t) {
                            var e = "",
                                i = !0;
                            return (
                                t.forEach(function (t) {
                                    i ? ((i = !1), (e += t._asPathString())) : (e += " " + t._asPathString());
                                }),
                                e
                            );
                        }),
                        (window.SVGPathSegList.prototype._parsePath = function (t) {
                            if (!t || 0 == t.length) return [];
                            var e = this,
                                i = function () {
                                    this.pathSegList = [];
                                };
                            i.prototype.appendSegment = function (t) {
                                this.pathSegList.push(t);
                            };
                            var n = function (t) {
                                (this._string = t), (this._currentIndex = 0), (this._endIndex = this._string.length), (this._previousCommand = window.SVGPathSeg.PATHSEG_UNKNOWN), this._skipOptionalSpaces();
                            };
                            (n.prototype._isCurrentSpace = function () {
                                var t = this._string[this._currentIndex];
                                return t <= " " && (" " == t || "\n" == t || "\t" == t || "\r" == t || "\f" == t);
                            }),
                                (n.prototype._skipOptionalSpaces = function () {
                                    for (; this._currentIndex < this._endIndex && this._isCurrentSpace(); ) this._currentIndex++;
                                    return this._currentIndex < this._endIndex;
                                }),
                                (n.prototype._skipOptionalSpacesOrDelimiter = function () {
                                    return (
                                        !(this._currentIndex < this._endIndex && !this._isCurrentSpace() && "," != this._string.charAt(this._currentIndex)) &&
                                        (this._skipOptionalSpaces() && this._currentIndex < this._endIndex && "," == this._string.charAt(this._currentIndex) && (this._currentIndex++, this._skipOptionalSpaces()),
                                        this._currentIndex < this._endIndex)
                                    );
                                }),
                                (n.prototype.hasMoreData = function () {
                                    return this._currentIndex < this._endIndex;
                                }),
                                (n.prototype.peekSegmentType = function () {
                                    var t = this._string[this._currentIndex];
                                    return this._pathSegTypeFromChar(t);
                                }),
                                (n.prototype._pathSegTypeFromChar = function (t) {
                                    switch (t) {
                                        case "Z":
                                        case "z":
                                            return window.SVGPathSeg.PATHSEG_CLOSEPATH;
                                        case "M":
                                            return window.SVGPathSeg.PATHSEG_MOVETO_ABS;
                                        case "m":
                                            return window.SVGPathSeg.PATHSEG_MOVETO_REL;
                                        case "L":
                                            return window.SVGPathSeg.PATHSEG_LINETO_ABS;
                                        case "l":
                                            return window.SVGPathSeg.PATHSEG_LINETO_REL;
                                        case "C":
                                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS;
                                        case "c":
                                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL;
                                        case "Q":
                                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS;
                                        case "q":
                                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL;
                                        case "A":
                                            return window.SVGPathSeg.PATHSEG_ARC_ABS;
                                        case "a":
                                            return window.SVGPathSeg.PATHSEG_ARC_REL;
                                        case "H":
                                            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS;
                                        case "h":
                                            return window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL;
                                        case "V":
                                            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS;
                                        case "v":
                                            return window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL;
                                        case "S":
                                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS;
                                        case "s":
                                            return window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL;
                                        case "T":
                                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS;
                                        case "t":
                                            return window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL;
                                        default:
                                            return window.SVGPathSeg.PATHSEG_UNKNOWN;
                                    }
                                }),
                                (n.prototype._nextCommandHelper = function (t, e) {
                                    return ("+" == t || "-" == t || "." == t || (t >= "0" && t <= "9")) && e != window.SVGPathSeg.PATHSEG_CLOSEPATH
                                        ? e == window.SVGPathSeg.PATHSEG_MOVETO_ABS
                                            ? window.SVGPathSeg.PATHSEG_LINETO_ABS
                                            : e == window.SVGPathSeg.PATHSEG_MOVETO_REL
                                            ? window.SVGPathSeg.PATHSEG_LINETO_REL
                                            : e
                                        : window.SVGPathSeg.PATHSEG_UNKNOWN;
                                }),
                                (n.prototype.initialCommandIsMoveTo = function () {
                                    if (!this.hasMoreData()) return !0;
                                    var t = this.peekSegmentType();
                                    return t == window.SVGPathSeg.PATHSEG_MOVETO_ABS || t == window.SVGPathSeg.PATHSEG_MOVETO_REL;
                                }),
                                (n.prototype._parseNumber = function () {
                                    var t = 0,
                                        e = 0,
                                        i = 1,
                                        n = 0,
                                        o = 1,
                                        r = 1,
                                        s = this._currentIndex;
                                    if (
                                        (this._skipOptionalSpaces(),
                                        this._currentIndex < this._endIndex && "+" == this._string.charAt(this._currentIndex)
                                            ? this._currentIndex++
                                            : this._currentIndex < this._endIndex && "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, (o = -1)),
                                        !(this._currentIndex == this._endIndex || ((this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9") && "." != this._string.charAt(this._currentIndex))))
                                    ) {
                                        for (var a = this._currentIndex; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9"; ) this._currentIndex++;
                                        if (this._currentIndex != a) for (var h = this._currentIndex - 1, c = 1; h >= a; ) (e += c * (this._string.charAt(h--) - "0")), (c *= 10);
                                        if (this._currentIndex < this._endIndex && "." == this._string.charAt(this._currentIndex)) {
                                            if ((this._currentIndex++, this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")) return;
                                            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9"; )
                                                (i *= 10), (n += (this._string.charAt(this._currentIndex) - "0") / i), (this._currentIndex += 1);
                                        }
                                        if (
                                            this._currentIndex != s &&
                                            this._currentIndex + 1 < this._endIndex &&
                                            ("e" == this._string.charAt(this._currentIndex) || "E" == this._string.charAt(this._currentIndex)) &&
                                            "x" != this._string.charAt(this._currentIndex + 1) &&
                                            "m" != this._string.charAt(this._currentIndex + 1)
                                        ) {
                                            if (
                                                (this._currentIndex++,
                                                "+" == this._string.charAt(this._currentIndex) ? this._currentIndex++ : "-" == this._string.charAt(this._currentIndex) && (this._currentIndex++, (r = -1)),
                                                this._currentIndex >= this._endIndex || this._string.charAt(this._currentIndex) < "0" || this._string.charAt(this._currentIndex) > "9")
                                            )
                                                return;
                                            for (; this._currentIndex < this._endIndex && this._string.charAt(this._currentIndex) >= "0" && this._string.charAt(this._currentIndex) <= "9"; )
                                                (t *= 10), (t += this._string.charAt(this._currentIndex) - "0"), this._currentIndex++;
                                        }
                                        var l = e + n;
                                        if (((l *= o), t && (l *= Math.pow(10, r * t)), s != this._currentIndex)) return this._skipOptionalSpacesOrDelimiter(), l;
                                    }
                                }),
                                (n.prototype._parseArcFlag = function () {
                                    if (!(this._currentIndex >= this._endIndex)) {
                                        var t = !1,
                                            e = this._string.charAt(this._currentIndex++);
                                        if ("0" == e) t = !1;
                                        else {
                                            if ("1" != e) return;
                                            t = !0;
                                        }
                                        return this._skipOptionalSpacesOrDelimiter(), t;
                                    }
                                }),
                                (n.prototype.parseSegment = function () {
                                    var t = this._string[this._currentIndex],
                                        i = this._pathSegTypeFromChar(t);
                                    if (i == window.SVGPathSeg.PATHSEG_UNKNOWN) {
                                        if (this._previousCommand == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                                        if ((i = this._nextCommandHelper(t, this._previousCommand)) == window.SVGPathSeg.PATHSEG_UNKNOWN) return null;
                                    } else this._currentIndex++;
                                    switch (((this._previousCommand = i), i)) {
                                        case window.SVGPathSeg.PATHSEG_MOVETO_REL:
                                            return new window.SVGPathSegMovetoRel(e, this._parseNumber(), this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_MOVETO_ABS:
                                            return new window.SVGPathSegMovetoAbs(e, this._parseNumber(), this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_LINETO_REL:
                                            return new window.SVGPathSegLinetoRel(e, this._parseNumber(), this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_LINETO_ABS:
                                            return new window.SVGPathSegLinetoAbs(e, this._parseNumber(), this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_REL:
                                            return new window.SVGPathSegLinetoHorizontalRel(e, this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_LINETO_HORIZONTAL_ABS:
                                            return new window.SVGPathSegLinetoHorizontalAbs(e, this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_REL:
                                            return new window.SVGPathSegLinetoVerticalRel(e, this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_LINETO_VERTICAL_ABS:
                                            return new window.SVGPathSegLinetoVerticalAbs(e, this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_CLOSEPATH:
                                            return this._skipOptionalSpaces(), new window.SVGPathSegClosePath(e);
                                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_REL:
                                            var n = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                                            return new window.SVGPathSegCurvetoCubicRel(e, n.x, n.y, n.x1, n.y1, n.x2, n.y2);
                                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_ABS:
                                            n = { x1: this._parseNumber(), y1: this._parseNumber(), x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                                            return new window.SVGPathSegCurvetoCubicAbs(e, n.x, n.y, n.x1, n.y1, n.x2, n.y2);
                                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_REL:
                                            n = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                                            return new window.SVGPathSegCurvetoCubicSmoothRel(e, n.x, n.y, n.x2, n.y2);
                                        case window.SVGPathSeg.PATHSEG_CURVETO_CUBIC_SMOOTH_ABS:
                                            n = { x2: this._parseNumber(), y2: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                                            return new window.SVGPathSegCurvetoCubicSmoothAbs(e, n.x, n.y, n.x2, n.y2);
                                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_REL:
                                            n = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                                            return new window.SVGPathSegCurvetoQuadraticRel(e, n.x, n.y, n.x1, n.y1);
                                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_ABS:
                                            n = { x1: this._parseNumber(), y1: this._parseNumber(), x: this._parseNumber(), y: this._parseNumber() };
                                            return new window.SVGPathSegCurvetoQuadraticAbs(e, n.x, n.y, n.x1, n.y1);
                                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL:
                                            return new window.SVGPathSegCurvetoQuadraticSmoothRel(e, this._parseNumber(), this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS:
                                            return new window.SVGPathSegCurvetoQuadraticSmoothAbs(e, this._parseNumber(), this._parseNumber());
                                        case window.SVGPathSeg.PATHSEG_ARC_REL:
                                            n = {
                                                x1: this._parseNumber(),
                                                y1: this._parseNumber(),
                                                arcAngle: this._parseNumber(),
                                                arcLarge: this._parseArcFlag(),
                                                arcSweep: this._parseArcFlag(),
                                                x: this._parseNumber(),
                                                y: this._parseNumber(),
                                            };
                                            return new window.SVGPathSegArcRel(e, n.x, n.y, n.x1, n.y1, n.arcAngle, n.arcLarge, n.arcSweep);
                                        case window.SVGPathSeg.PATHSEG_ARC_ABS:
                                            n = {
                                                x1: this._parseNumber(),
                                                y1: this._parseNumber(),
                                                arcAngle: this._parseNumber(),
                                                arcLarge: this._parseArcFlag(),
                                                arcSweep: this._parseArcFlag(),
                                                x: this._parseNumber(),
                                                y: this._parseNumber(),
                                            };
                                            return new window.SVGPathSegArcAbs(e, n.x, n.y, n.x1, n.y1, n.arcAngle, n.arcLarge, n.arcSweep);
                                        default:
                                            throw "Unknown path seg type.";
                                    }
                                });
                            var o = new i(),
                                r = new n(t);
                            if (!r.initialCommandIsMoveTo()) return [];
                            for (; r.hasMoreData(); ) {
                                var s = r.parseSegment();
                                if (!s) return [];
                                o.appendSegment(s);
                            }
                            return o.pathSegList;
                        })));
            })();
        },
    },
    function (t) {
        var e = function (e) {
            return t((t.s = e));
        };
        t.O(0, [898], function () {
            return e(96701), e(56024);
        });
        t.O();
    },
]);
