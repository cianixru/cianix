"use strict";

function ready() {

    var t = document.getElementById("preloader"),
        e = document.getElementById("preloader_bg_left"),
        o = document.getElementById("preloader_bg_right"),
        n = document.getElementsByClassName("block_top_logo_img")[0],
        s = document.getElementById("brand_logo"),
        i = document.getElementById("brand_logo_icon_a"),
        l = document.getElementById("brand_logo_icon_b"),
        a = document.getElementsByClassName("logo_rect_2")[0],
        r = document.getElementsByClassName("logo_rect_5")[0],
        c = document.getElementsByClassName("logo_rect_1")[0],
        _ = document.getElementsByClassName("logo_rect_3")[0],
        u = document.getElementsByClassName("logo_rect_4")[0],
        d = document.getElementsByClassName("logo_rect_6")[0],
        h = document.getElementsByClassName("brand_logo_text")[0].querySelectorAll("path"),
        p = (document.getElementById("wrapper"), new TimelineMax({
            onComplete: afterLoad
        }));
  
}

function afterLoad() {
    function t() {
        var t = new TimelineLite;
        _.classList.remove("active"), v.to(_.children[0], .5, {
            width: "100%",
            rotation: 0,
            x: 0,
            y: 0,
            ease: Expo.easeIn
        }), v.to(_.children[2], .5, {
            width: "100%",
            rotation: 0,
            x: 0,
            y: 0,
            ease: Expo.easeIn
        }), g.each(function(e) {
            t.to(this, .1, {
                x: "-100%",
                ease: Expo.easeIn
            })
        }), t.to(u, .5, {
            x: "-100%",
            ease: Expo.easeIn
        }, "-=0.2"), document.body.style.overflow = "", document.getElementById("wrapper").style.overflow = ""
    }

    function e() {
        var t = new TimelineLite;
        _.classList.add("active"), v.to(_.children[0], .5, {
            width: "50%",
            rotation: "-45deg",
            x: -1,
            y: 2,
            ease: Expo.easeIn
        }), v.to(_.children[2], .5, {
            width: "50%",
            rotation: "45deg",
            x: -1,
            y: -2,
            ease: Expo.easeIn
        }), t.to(u, .5, {
            x: "0%",
            ease: Expo.easeIn
        }), g.each(function(e) {
            t.to(this, .1, {
                x: "0%",
                ease: Expo.easeIn
            })
        }), document.body.style.overflow = "hidden", document.getElementById("wrapper").style.overflow = "hidden"
    }

    function o() {
        var t = Utils.isElementInView(a, !1),
            e = Utils.isElementInView(r, !1),
            o = Utils.isElementInView($(".block_top_content_keynote"), !1),
            c = Utils.isElementInView($(".block_calculate_intro"), !1),
            _ = Utils.isElementInView($(".block_calculate_calculator"), !1);
        o && d === !1 && s(), (t || e && h === !1) && n(), c && m === !1 && i(), _ && p === !1 && l()
    }

    function n() {
        var t = new TimelineMax;
        b.to(a, 1, {
            text: "Эффективные",
            ease: Linear.easeNone
        }), b.to(r, 1, {
            text: "web решения",
            ease: Linear.easeNone
        }), t.to(c, 1, {
            autoAlpha: 1
        }).to(c, 2, {
            text: "Мы помогаем компаниям и брендам общаться со своей аудиторией посредством сайтов или приложений для мобильных устройств"
        }, "-=0.75").to($(".block_top_content_figure_1 .dot_bottom-right"), .5, {
            autoAlpha: 1
        }, "-=2").to($(".block_top_content_figure_1_line_right"), .5, {
            height: "100%"
        }).to($(".block_top_content_figure_1 .dot_top-right"), .5, {
            autoAlpha: 1
        }).to($(".block_top_content_figure_1_line_top"), .5, {
            width: "100%"
        }).to($(".block_top_content_figure_1 .dot_top-left"), .5, {
            autoAlpha: 1
        }), setTimeout(function() {
            v.to($(".dot_pulsar"), 1.5, {
                autoAlpha: 1,
                repeat: -1
            }).yoyo(!0).play(), v.to($(".block_top_content_figure_2 .dot_bottom-right"), .5, {
                autoAlpha: 1
            }), v.to($(".block_top_content_figure_2 .dot_top-left"), .5, {
                autoAlpha: 1
            }), v.to($(".block_top_content_figure_2 .dot_top-right"), .5, {
                autoAlpha: 1
            }).delay(.5), v.to($(".block_top_content_figure_2 .dot_bottom-left"), .5, {
                autoAlpha: 1
            }).delay(.5), v.to($(".block_top_content_figure_2_line_right"), .5, {
                height: "100%"
            }), v.to($(".block_top_content_figure_2_line_bottom"), .5, {
                width: "100%"
            }), v.to($(".block_top_content_figure_2_line_top"), .5, {
                width: "100%"
            }), v.to($(".block_top_content_figure_2_line_left"), .5, {
                height: "100%"
            }), v.to($(".block_top_content_figure_2_img"), .5, {
                autoAlpha: 1
            }), v.to($(".block_top_content_figure_3 .dot_bottom-right"), .5, {
                autoAlpha: 1
            }), v.to($(".block_top_content_figure_3 .dot_top-left"), .5, {
                autoAlpha: 1
            }), v.to($(".block_top_content_figure_3 .dot_top-right"), .5, {
                autoAlpha: 1
            }).delay(.5), v.to($(".block_top_content_figure_3 .dot_bottom-left"), .5, {
                autoAlpha: 1
            }).delay(.5), v.to($(".block_top_content_figure_3_line_right"), .5, {
                height: "100%"
            }), v.to($(".block_top_content_figure_3_line_bottom"), .5, {
                width: "100%"
            }), v.to($(".block_top_content_figure_3_line_top"), .5, {
                width: "100%"
            }), v.to($(".block_top_content_figure_3_line_left"), .5, {
                height: "100%"
            }), v.to($(".block_top_content_figure_3_img"), .5, {
                autoAlpha: 1
            }), v.to($(".block_top_content_figure_4 .dot_bottom-right"), .5, {
                autoAlpha: 1
            }), v.to($(".block_top_content_figure_4 .dot_top-left"), .5, {
                autoAlpha: 1
            }), v.to($(".block_top_content_figure_4 .dot_top-right"), .5, {
                autoAlpha: 1
            }).delay(.5), v.to($(".block_top_content_figure_4 .dot_bottom-left"), .5, {
                autoAlpha: 1
            }).delay(.5), v.to($(".block_top_content_figure_4_line_right"), .5, {
                height: "100%"
            }), v.to($(".block_top_content_figure_4_line_bottom"), .5, {
                width: "100%"
            }), v.to($(".block_top_content_figure_4_line_top"), .5, {
                width: "100%"
            }), v.to($(".block_top_content_figure_4_line_left"), .5, {
                height: "100%"
            }), v.to($(".block_top_content_figure_4_img"), .5, {
                autoAlpha: 1
            })
        }, 1e3), h = !0
    }

    function s() {
        function t() {
            document.getElementById("counter_1").innerText = l.score
        }

        function e() {
            document.getElementById("counter_2").innerText = a.score
        }

        function o() {
            document.getElementById("counter_3").innerText = r.score.toLocaleString("ru-RU")
        }

        function n() {
            document.getElementById("counter_4").innerText = c.score
        }
        var s = new TimelineMax,
            i = new TimelineMax,
            l = {
                score: 0
            },
            a = {
                score: 0
            },
            r = {
                score: 0
            },
            c = {
                score: 0
            };
        s.to($(".block_top_content_keynote_1"), 1, {
            autoAlpha: 1
        }).to(l, 2, {
            score: "+=10",
            roundProps: "score",
            onUpdate: t,
            ease: Linear.easeNon
        }, "-=1").to($(".block_top_content_keynote_2"), 1, {
            autoAlpha: 1
        }, "-=3").to(a, 2, {
            score: "+=7",
            roundProps: "score",
            onUpdate: e,
            ease: Linear.easeNon
        }, "-=3").to($(".block_top_content_keynote_3"), 1, {
            autoAlpha: 1
        }, "-=6").to(r, 2, {
            score: "+=2300000",
            roundProps: "score",
            onUpdate: o,
            ease: Linear.easeNon
        }, "-=3").to($(".block_top_content_keynote_4"), 1, {
            autoAlpha: 1
        }, "-=9").to(c, 2, {
            score: "+=93",
            roundProps: "score",
            onUpdate: n,
            ease: Linear.easeNon
        }, "-=3"), i.to($(".block_top_content_keynote_1 .dot_top-left"), .5, {
            autoAlpha: 1
        }).to($(".block_top_content_keynote_2 .dot_top-left"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_keynote_3 .dot_top-left"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_keynote_4 .dot_top-left"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_figure_5_line_left"), .5, {
            height: "100%"
        }).to($(".block_top_content_figure_6_line_left"), .5, {
            height: "100%"
        }, "-=0.5").to($(".block_top_content_figure_7_line_left"), .5, {
            height: "100%"
        }, "-=0.5").to($(".block_top_content_figure_8_line_left"), .5, {
            height: "100%"
        }, "-=0.5").to($(".block_top_content_keynote_1 .dot_bottom-left"), .5, {
            autoAlpha: 1
        }).to($(".block_top_content_keynote_2 .dot_bottom-left"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_keynote_3 .dot_bottom-left"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_keynote_4 .dot_bottom-left"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_figure_5_line_bottom"), .5, {
            width: "100%"
        }).to($(".block_top_content_figure_6_line_bottom"), .5, {
            width: "100%"
        }, "-=0.5").to($(".block_top_content_figure_7_line_bottom"), .5, {
            width: "100%"
        }, "-=0.5").to($(".block_top_content_figure_8_line_bottom"), .5, {
            width: "135px"
        }, "-=0.5").to($(".block_top_content_keynote_1 .dot_bottom-right"), .5, {
            autoAlpha: 1
        }).to($(".block_top_content_keynote_2 .dot_bottom-right"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_keynote_3 .dot_bottom-right"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_figure_5_line_right"), .5, {
            height: "100%"
        }).to($(".block_top_content_figure_6_line_right"), .5, {
            height: "100%"
        }, "-=0.5").to($(".block_top_content_figure_7_line_right"), .5, {
            height: "34px"
        }, "-=0.5").to($(".block_top_content_keynote_1 .dot_top-right"), .5, {
            autoAlpha: 1
        }).to($(".block_top_content_keynote_2 .dot_top-right"), .5, {
            autoAlpha: 1
        }, "-=0.5").to($(".block_top_content_figure_5_line_top"), .5, {
            width: "100%"
        }).to($(".block_top_content_figure_6_line_top"), .5, {
            width: "34px"
        }, "-=0.5"), d = !0
    }

    function i() {
        (new TimelineMax).to($(".block_calculate_intro .section_head_line"), .3, {
            height: "378px",
            autoAlpha: 1
        }).to($(".block_calculate_intro .section_head_dot"), .3, {
            autoAlpha: 1
        }).to($(".block_calculate_intro .section_head_number"), .3, {
            y: 0,
            autoAlpha: 1
        }).to($(".block_calculate_intro .section_title"), .3, {
            y: 0,
            autoAlpha: 1
        }, "-=0.2").to($(".block_calculate_intro .section_desc"), .3, {
            y: 0,
            autoAlpha: 1
        }, "-=0.15").to($(".block_calculate_intro .section_title_border"), .3, {
            width: "60px",
            autoAlpha: 1
        }, "-=0.1"), m = !0
    }

    function l() {
        (new TimelineMax).to($(".block_calculate_calculator"), 1, {
            y: 0,
            autoAlpha: 1
        }), p = !0
    }
    var a = document.querySelector(".block_top_content_title_top"),
        r = document.querySelector(".block_top_content_title_bottom"),
        c = document.querySelector(".block_top_content_slogan"),
        _ = document.querySelector(".block_top_header_mobile_nav_trigger"),
        u = document.querySelector(".block_top_header_mobile_nav"),
        d = !1,
        h = !1,
        p = !1,
        m = !1,
        f = $(".block_top_nav_item_link"),
        g = $(".block_top_header_mobile_nav_list_item_link"),
        b = TweenLite,
        v = TweenMax,
        k = document.querySelector(".button_calc"),
        w = k.innerText;
    o(),
        function() {
            function t() {
                var t = o.x - n,
                    e = o.y - s,
                    i = e / s,
                    l = -(t / n),
                    a = Math.sqrt(Math.pow(i, 2) + Math.pow(l, 2)),
                    r = 20 * a;
                v.set($(".block_top_content_title_top, .block_top_content_title_bottom"), {
                    transform: "rotate3d(" + i + ", " + l + ", 0, " + r + "deg)"
                })
            }
            var e = null,
                o = {
                    x: 0,
                    y: 0
                },
                n = window.innerWidth / 2,
                s = window.innerHeight / 2;
            $("#block_top").mousemove(function(n) {
                o.x = n.pageX, o.y = n.pageY, cancelAnimationFrame(e), e = requestAnimationFrame(t)
            }), $(window).resize(function() {
                n = window.innerWidth / 2, s = window.innerHeight / 2
            })
        }(), $(window).on("scroll", function() {
            o()
        }), k.onmouseover = function(t) {
            b.to(this, .25, {
                text: "Узнать сейчас",
                ease: Linear.easeNone
            }), b.to(this, .25, {
                css: {
                    backgroundColor: "#fff200",
                    color: "#000000"
                },
                ease: Power2.easeOut
            })
        }, k.onmouseout = function(t) {
            b.to(this, .25, {
                text: w,
                ease: Linear.easeNone
            }), b.to(this, .25, {
                css: {
                    backgroundColor: "rgba(13,55,81,0.6)",
                    color: "#fff200"
                },
                ease: Power2.easeOut
            })
        }, _.onclick = function(o) {
            _.classList.contains("active") ? t() : e()
        }, f.click(function(t) {
            t.preventDefault();
            var e = t.target.getAttribute("href");
            "#contacts" === e ? b.to(window, 2, {
                scrollTo: {
                    y: e,
                    offsetY: -(1.5 * window.innerHeight)
                }
            }) : b.to(window, 2, {
                scrollTo: {
                    y: e
                }
            })
        }), g.click(function(e) {
            e.preventDefault();
            var o = e.target.getAttribute("href");
            t(), "#contacts" === o ? b.to(window, 2, {
                scrollTo: {
                    y: o,
                    offsetY: -(1.5 * window.innerHeight)
                }
            }) : b.to(window, 2, {
                scrollTo: {
                    y: o
                }
            })
        }), window.onbeforeunload = function() {
            window.scrollTo(0, 0)
        }, window.innerWidth >= 768 && ($(".rotator").mousemove(function(t) {
            var e = t.offsetX / 2,
                o = t.offsetY / 2;
            b.to($(this), 1, {
                transformPerspective: 500,
                rotationX: e,
                rotationY: o,
                rotation: "90_short"
            }), b.to($(this).children(), 1, {
                transformPerspective: 1e3,
                rotationX: -e / 2,
                rotationY: -o / 2,
                rotation: "-135_short"
            })
        }).mouseout(function(t) {
            b.to($(this), 1, {
                rotationX: 0,
                rotationY: 0,
                rotation: "0_short"
            }), b.to($(this).children(), 1, {
                rotationX: 0,
                rotationY: 0,
                rotation: "0_short"
            })
        }), $(".block_top_content_keynote").mousemove(function(t) {
            var e = t.offsetX / 4,
                o = t.offsetY / 4;
            b.to($(this), 1, {
                transformPerspective: 500,
                rotationX: e,
                rotationY: o,
                rotation: "45_short"
            }), b.to($(this).children().not(".block_top_content_keynote_big, .block_top_content_keynote_small"), 1, {
                transformPerspective: 600,
                rotationX: -e / 4,
                rotationY: -o / 4,
                rotation: "-135_short"
            })
        }).mouseout(function(t) {
            b.to($(this), 1, {
                rotationX: 0,
                rotationY: 0,
                rotation: "0_short"
            }), b.to($(this).children().not(".block_top_content_keynote_big, .block_top_content_keynote_small"), 1, {
                rotationX: 0,
                rotationY: 0,
                rotation: "0_short"
            })
        }))
}

function variableAssignment() {
    yl = $(".graph_yellow_line"), bl = $(".graph_blue_line"), yc = $("#yellow_count"), bc = $("#blue_count"), gsp = $("#graph_screen_pic"), prevYC = curYC = +yc.html() - rs - cs, prevBC = curBC = +bc.html() + rs + cs
}

function countChange() {
    document.getElementsByClassName("calc_adv")[0];
    yc.prop("number", prevYC).animateNumber({
        number: curYC + rs + cs
    }, at), bc.prop("number", prevBC).animateNumber({
        number: curBC - rs - cs
    }, at)
}

function heightChange() {
    var t = document.querySelector(".calc_result");
    yl.animate({
        marginBottom: (curYC + rs + cs) * perc + glmh
    }, at), bl.animate({
        marginBottom: (curBC - rs - cs) * perc + glmh
    }, at), setTimeout(function() {
        t.innerHTML = curYC + rs + cs >= 50 ? "Ваш сайт будет работать на <span>" + (curYC + rs + cs) + "%</span> эффективнее чем средний сайт в нише" : "Ваш сайт будет работать как <span>" + (curYC + rs + cs) + "%</span> лучших сайтов в нише"
    }, at)
}

function calculatorSelectChange() {
    s1v = document.getElementById("business_niche").value, s2v = document.getElementById("marketing_analysis").value, s3v = document.getElementById("structure_study").value, prevYC = curYC + rs + cs, prevBC = curBC - rs - cs, "0" == s1v && ("0" == s2v && ("0" == s3v && (curYC = s1o0 + s2o0 + s3o0, curBC = 100 - s1o0 - s2o0 - s3o0), "1" == s3v && (curYC = s1o0 + s2o0 + s3o1, curBC = 100 - s1o0 - s2o0 - s3o1)), "1" == s2v && ("0" == s3v && (curYC = s1o0 + s2o1 + s3o0, curBC = 100 - s1o0 - s2o1 - s3o0), "1" == s3v && (curYC = s1o0 + s2o1 + s3o1, curBC = 100 - s1o0 - s2o1 - s3o1)), "2" == s2v && ("0" == s3v && (curYC = s1o0 + s2o2 + s3o0, curBC = 100 - s1o0 - s2o2 - s3o0), "1" == s3v && (curYC = s1o0 + s2o2 + s3o1, curBC = 100 - s1o0 - s2o2 - s3o1))), "1" == s1v && ("0" == s2v && ("0" == s3v && (curYC = s1o1 + s2o0 + s3o0, curBC = 100 - s1o1 - s2o0 - s3o0), "1" == s3v && (curYC = s1o1 + s2o0 + s3o1, curBC = 100 - s1o1 - s2o0 - s3o1)), "1" == s2v && ("0" == s3v && (curYC = s1o1 + s2o1 + s3o0, curBC = 100 - s1o1 - s2o1 - s3o0), "1" == s3v && (curYC = s1o1 + s2o1 + s3o0, curBC = 100 - s1o1 - s2o1 - s3o1)), "2" == s2v && ("0" == s3v && (curYC = s1o1 + s2o2 + s3o0, curBC = 100 - s1o1 - s2o2 - s3o0), "1" == s3v && (curYC = s1o1 + s2o2 + s3o1, curBC = 100 - s1o1 - s2o2 - s3o1))), "2" == s1v && ("0" == s2v && ("0" == s3v && (curYC = s1o2 + s2o0 + s3o0, curBC = 100 - s1o2 - s2o0 - s3o0), "1" == s3v && (curYC = s1o2 + s2o0 + s3o1, curBC = 100 - s1o2 - s2o0 - s3o1)), "1" == s2v && ("0" == s3v && (curYC = s1o2 + s2o1 + s3o0, curBC = 100 - s1o2 - s2o1 - s3o0), "1" == s3v && (curYC = s1o2 + s2o1 + s3o1, curBC = 100 - s1o2 - s2o1 - s3o1)), "2" == s2v && ("0" == s3v && (curYC = s1o2 + s2o2 + s3o0, curBC = 100 - s1o2 - s2o2 - s3o0), "1" == s3v && (curYC = s1o2 + s2o2 + s3o1, curBC = 100 - s1o2 - s2o2 - s3o1))), "3" == s1v && ("0" == s2v && ("0" == s3v && (curYC = s1o3 + s2o0 + s3o0, curBC = 100 - s1o3 - s2o0 - s3o0), "1" == s3v && (curYC = s1o3 + s2o0 + s3o1, curBC = 100 - s1o3 - s2o0 - s3o1)), "1" == s2v && ("0" == s3v && (curYC = s1o3 + s2o1 + s3o0, curBC = 100 - s1o3 - s2o1 - s3o0), "1" == s3v && (curYC = s1o3 + s2o1 + s3o1, curBC = 100 - s1o3 - s2o1 - s3o1)), "2" == s2v && ("0" == s3v && (curYC = s1o3 + s2o2 + s3o0, curBC = 100 - s1o3 - s2o2 - s3o0), "1" == s3v && (curYC = s1o3 + s2o2 + s3o1, curBC = 100 - s1o3 - s2o2 - s3o1))), "4" == s1v && ("0" == s2v && ("0" == s3v && (curYC = s1o4 + s2o0 + s3o0, curBC = 100 - s1o4 - s2o0 - s3o0), "1" == s3v && (curYC = s1o4 + s2o0 + s3o1, curBC = 100 - s1o4 - s2o0 - s3o1)), "1" == s2v && ("0" == s3v && (curYC = s1o4 + s2o1 + s3o0, curBC = 100 - s1o4 - s2o1 - s3o0), "1" == s3v && (curYC = s1o4 + s2o1 + s3o1, curBC = 100 - s1o4 - s2o1 - s3o1)), "2" == s2v && ("0" == s3v && (curYC = s1o4 + s2o2 + s3o0, curBC = 100 - s1o4 - s2o2 - s3o0), "1" == s3v && (curYC = s1o4 + s2o2 + s3o1, curBC = 100 - s1o4 - s2o2 - s3o1)))
}

function calculatorRadioChange() {
    $("#design input").change(function() {
        prevYC = curYC + rs + cs, prevBC = curBC - rs - cs, calculatorScreenChange(), countChange(), heightChange()
    })
}

function calculatorScreenChange() {
    var t = $("input[name='design']:checked").val();
    "0" == t && ("0" == s3v ? (gsp.removeClass(), gsp.addClass("graph_design_min")) : (gsp.removeClass(), gsp.addClass("graph_design_min_detail")), rs = r0), "1" == t && ("0" == s3v ? (gsp.removeClass(), gsp.addClass("graph_design_norm")) : (gsp.removeClass(), gsp.addClass("graph_design_norm_detail")), rs = r1), "2" == t && ("0" == s3v ? (gsp.removeClass(), gsp.addClass("graph_design_max")) : (gsp.removeClass(), gsp.addClass("graph_design_max_detail")), rs = r2)
}

function calculatorCheckboxChange() {
    $('.checkbox_series input[type="checkbox"]').change(function() {
        prevYC = curYC + rs + cs, prevBC = curBC - rs - cs, cs = 0, $("#c_first").is(":checked") ? ($(".graph_advertising").fadeIn(700), cs += c0) : $(".graph_advertising").fadeOut(700), $("#c_sec").is(":checked") ? ($(".graph_adaptive").fadeIn(700), cs += c1) : $(".graph_adaptive").fadeOut(700), $("#c_third").is(":checked") ? ($(".graph_testing").fadeIn(700), cs += c2) : $(".graph_testing").fadeOut(700), $("#c_fourth").is(":checked") ? ($(".graph_integration").fadeIn(700), cs += c3) : $(".graph_integration").fadeOut(700), countChange(), heightChange()
    })
}

function tooltipShow() {
    $(".structure_study li").mouseover(function() {
        $("structure_study li").next(".tooltip").remove(), $(this).after('<div class="tooltip">text</div>'), $(".structure_study .cs-options").css("overflow", "visible");
        var t = $(this).position().left + 4,
            e = $(this).position().top - 4;
        $(this).next().css("left", t), $(this).next().css("top", e)
    }), $(".structure_study li").click(function() {
        $(this).mouseover(), $(this).next().animate({
            opacity: .9
        }, {
            duration: 2e3,
            complete: function() {
                $(this).fadeOut(1e3)
            }
        })
    }), $(".structure_study li").mouseout(function() {
        $(this).next(".tooltip").remove(), $(".structure_study .cs-options").css("overflow", "visible")
    })
}
var mobile = !1,
    Eye = function() {};
Eye.prototype = {
    constructor: Eye,
    isElementInView: function(t, e) {
        var o = $(window).scrollTop(),
            n = o + $(window).height(),
            s = $(t).offset().top,
            i = s + $(t).height();
        return e === !0 ? o < s && n > i : s <= n && i >= o
    }
};
var Utils = new Eye;
document.addEventListener("DOMContentLoaded", ready),
    function() {
        function t() {
            var t = l.isElementInView($(".block_advantages_intro"), !1),
                a = l.isElementInView($(".block_advantages_grid"), !1);
            n(!!l.isElementInView($(".block_advantages_grid_item"), !1)), t && s === !1 && e(), a && i === !1 && o()
        }

        function e() {
            (new TimelineMax).to($(".block_advantages_intro .section_head_line"), .3, {
                height: "268px",
                autoAlpha: 1
            }).to($(".block_advantages_intro .section_head_dot"), .3, {
                autoAlpha: 1
            }).to($(".block_advantages_intro .section_head_number"), .3, {
                y: 0,
                autoAlpha: 1
            }).to($(".block_advantages_intro .section_title"), .3, {
                y: 0,
                autoAlpha: 1
            }, "-=0.2").to($(".block_advantages_intro .section_desc"), .3, {
                y: 0,
                autoAlpha: 1
            }, "-=0.15").to($(".block_advantages_intro .section_title_border"), .3, {
                width: "60px",
                autoAlpha: 1
            }, "-=0.1"), s = !0
        }

        function o() {
            (new TimelineMax).to($(".block_advantages_grid"), 1, {
                y: 0,
                autoAlpha: 1
            }), i = !0
        }

        function n(t) {
            var e = new TimelineLite;
            t === !0 ? e.to($(".advantage_dot"), 3, {
                autoAlpha: 1
            }) : e.to($(".advantage_dot"), 1, {
                autoAlpha: 0
            })
        }
        var s = !1,
            i = !1,
            l = new Eye;
        $(window).on("scroll", function() {
            t()
        }), $(document).ready(t()), $(".block_advantages_grid_item_image").mousemove(function(t) {
            var e = t.offsetX / 2,
                o = t.offsetY / 2;
            TweenLite.to(t.target, 1, {
                transformPerspective: 500,
                rotationX: e,
                rotationY: o,
                rotation: "270_short"
            })
        }).mouseout(function(t) {
            TweenLite.to(t.target, 1, {
                rotationX: 0,
                rotationY: 0,
                rotation: "0_short"
            })
        })
    }(),
    function() {
        function t() {
            var t = i.isElementInView($(".block_slideshow_intro"), !1),
                l = i.isElementInView($(".block_slideshow_slider"), !1);
            t && n === !1 && e(), l && s === !1 && o()
        }

        function e() {
            (new TimelineMax).to($(".block_slideshow_intro .section_head_line"), .3, {
                height: "268px",
                autoAlpha: 1
            }).to($(".block_slideshow_intro .section_head_dot"), .3, {
                autoAlpha: 1
            }).to($(".block_slideshow_intro .section_head_number"), .3, {
                y: 0,
                autoAlpha: 1
            }).to($(".block_slideshow_intro .section_title"), .3, {
                y: 0,
                autoAlpha: 1
            }, "-=0.2").to($(".block_slideshow_intro .section_desc"), .3, {
                y: 0,
                autoAlpha: 1
            }, "-=0.15").to($(".block_slideshow_intro .section_title_border"), .3, {
                width: "60px",
                autoAlpha: 1
            }, "-=0.1"), n = !0
        }

        function o() {
            (new TimelineMax).to($(".block_slideshow_slider"), 1, {
                y: 0,
                autoAlpha: 1
            }), s = !0
        }
        var n = !1,
            s = !1,
            i = new Eye;
        $(document).ready(function() {
            t(), $(".block_slideshow_slider_image").slick({
                asNavFor: ".block_slideshow_slider_text_slick",
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                vertical: !1,
                infinite: !1,
                draggable: !1,
                swipe: !1,
                touchMove: !1
            }), $(".block_slideshow_slider_text_slick").slick({
                asNavFor: ".block_slideshow_slider_image",
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !0,
                vertical: !0,
                infinite: !1,
                draggable: !1,
                swipe: !1,
                touchMove: !1,
                prevArrow: '<button type="button" class="slick-prev uppercase"><span>ПРЕДЫДУЩИЙ этап</span></button>',
                nextArrow: '<button type="button" class="slick-next uppercase"><span>Следующий этап</span></button>'
            }), $(".block_slideshow_slider_image").on("beforeChange", function(t, e, o, n) {
                0 === n ? $(".block_slideshow_slider_timeline_prev").addClass("none") : ($(".block_slideshow_slider_timeline_prev").removeClass("none"), $(".block_slideshow_slider_timeline_prev").html(n)), $(".block_slideshow_slider_timeline_curr").html(n + 1), 4 === n ? $(".block_slideshow_slider_timeline_next").addClass("none") : ($(".block_slideshow_slider_timeline_next").removeClass("none"), $(".block_slideshow_slider_timeline_next").html(n + 2))
            }), $(".block_slideshow_slider_image").on("afterChange", function(t, e, o) {})
        }), $(window).on("scroll", function() {
            t()
        })
    }(),
    function() {
        function t() {
            var t = i.isElementInView($(".block_form_intro"), !1),
                l = i.isElementInView($(".block_form_form-wrapper"), !1);
            t && n === !1 && e(), l && s === !1 && o()
        }

        function e() {
            (new TimelineMax).to($(".block_form_intro .section_head_line"), .3, {
                height: "268px",
                autoAlpha: 1
            }).to($(".block_form_intro .section_head_dot"), .3, {
                autoAlpha: 1
            }).to($(".block_form_intro .section_head_number"), .3, {
                y: 0,
                autoAlpha: 1
            }).to($(".block_form_intro .section_title"), .3, {
                y: 0,
                autoAlpha: 1
            }, "-=0.2").to($(".block_form_intro .section_desc"), .3, {
                y: 0,
                autoAlpha: 1
            }, "-=0.15").to($(".block_form_intro .section_title_border"), .3, {
                width: "60px",
                autoAlpha: 1
            }, "-=0.1"), n = !0
        }

        function o() {
            (new TimelineMax).to(".block_form_form-wrapper", 1, {
                y: 0,
                autoAlpha: 1
            }), s = !0
        }
        var n = !1,
            s = !1,
            i = new Eye;
        $(window).on("scroll", function() {
            t()
        }), $(document).ready(function() {
            t()
        })
    }(),
    function() {
        function t() {
            var t = r.isElementInView($(".block_portfolio_intro"), !1),
                n = r.isElementInView($(".block_portfolio_grid"), !1);
            t && i === !1 && e(), n && l === !1 && (o(), s())
        }

        function e() {
            (new TimelineMax).to($(".block_portfolio_intro .section_head_line"), .3, {
                height: "268px",
                autoAlpha: 1
            }).to($(".block_portfolio_intro .section_head_dot"), .3, {
                autoAlpha: 1
            }).to($(".block_portfolio_intro .section_head_number"), .3, {
                y: 0,
                autoAlpha: 1
            }).to($(".block_portfolio_intro .section_title"), .3, {
                y: 0,
                autoAlpha: 1
            }, "-=0.2").to($(".block_portfolio_intro .section_desc"), .3, {
                y: 0,
                autoAlpha: 1
            }, "-=0.15").to($(".block_portfolio_intro .section_title_border"), .3, {
                width: "60px",
                autoAlpha: 1
            }, "-=0.1"), i = !0
        }

        function o() {
            TweenMax.to($(".block_portfolio_grid"), .5, {
                y: 0,
                autoAlpha: 1
            }), l = !0
        }

        function n() {
            var t = document.getElementsByClassName("block_portfolio_grid_item"),
                e = 0;
            for (e; e < t.length; e++) t[e].onmouseover = function() {
                var t = this.querySelector(".block_portfolio_grid_item_img"),
                    e = this.querySelector(".block_portfolio_grid_item_info"),
                    o = this.querySelector(".block_portfolio_grid_item_info_link");
                TweenMax.to(t, .25, {
                    ease: Power1.easeInOut,
                    rotationX: 90,
                    y: 100,
                    autoAlpha: 0
                }), TweenMax.to(e, .25, {
                    ease: Power1.easeInOut,
                    rotationX: 0,
                    y: 0,
                    autoAlpha: 1
                }), TweenMax.to(o, .25, {
                    x: 0,
                    ease: Power4.easeIn,
                    delay: .25
                })
            }, t[e].onmouseout = function() {
                var t = this.querySelector(".block_portfolio_grid_item_img"),
                    e = this.querySelector(".block_portfolio_grid_item_info"),
                    o = this.querySelector(".block_portfolio_grid_item_info_link");
                TweenMax.to(t, .25, {
                    ease: Power1.easeInOut,
                    rotationX: 0,
                    y: 0,
                    autoAlpha: 1
                }), TweenMax.to(e, .25, {
                    ease: Power1.easeInOut,
                    rotationX: 90,
                    y: -100,
                    autoAlpha: 0
                }), TweenMax.to(o, .25, {
                    x: -200,
                    ease: Power4.easeIn,
                    delay: .25
                })
            }
        }

        function s() {
            var t = new TimelineMax,
                e = $(".block_portfolio_grid_item");
            t.to(e, .1, {
                y: 0,
                autoAlpha: 1,
                scale: 1,
                height: e.width()
            }), a = !0
        }
        var i = !1,
            l = !1,
            a = !1,
            r = new Eye;
        $(window).on("scroll", function() {
            t()
        }), $(document).ready(function() {
            t(), n()
        }), $(window).on("resize", function() {
            s()
        })
    }(),
    function() {
        function t() {
            n.isElementInView($(".block_contacts"), !1) && o === !1 && e()
        }

        function e() {
            (new TimelineMax).to($(".block_contacts"), 1, {
                height: "800px"
            }).set($(".block_contacts"), {
                overflow: "visible"
            }).to($(".block_contacts_bage"), 1, {
                x: 0,
                autoAlpha: 1
            }).to($(".block_contacts_intro .section_head_number"), .3, {
                x: 0,
                autoAlpha: 1
            }, "-=1").to($(".block_contacts_intro .section_title"), .3, {
                x: 0,
                autoAlpha: 1
            }, "-=1").to($(".block_contacts_intro .section_head_dot"), .3, {
                autoAlpha: 1
            }, "+=0.3").to($(".block_contacts_intro .section_head_line"), .3, {
                width: "100%",
                autoAlpha: 1
            }, "+=0.3"), o = !0
        }
        var o = !1,
            n = new Eye;
        $(window).on("scroll", function() {
            t()
        }), $(document).ready(function() {
            t()
        })
    }(),
    function() {
        function t() {
            n.isElementInView($(".block_bottom"), !1) && o === !1 && e()
        }

        function e() {
            (new TimelineMax).to($(".block_bottom .section_title"), .3, {
                y: 0,
                autoAlpha: 1
            }), o = !0
        }
        var o = !1,
            n = new Eye;
        $(window).on("scroll", function() {
            t()
        }), $(document).ready(function() {
            t()
        })
    }();
var s1o0 = 12,
    s1o1 = 14,
    s1o2 = 19,
    s1o3 = 27,
    s1o4 = 17,
    s2o0 = 0,
    s2o1 = 5,
    s2o2 = 12,
    s3o0 = 0,
    s3o1 = 8,
    rs = 11,
    r0 = 0,
    r1 = 6,
    r2 = 11,
    cs = 0,
    c0 = 12,
    c1 = 6,
    c2 = 4,
    c3 = 3,
    glmh = 50,
    perc = 2,
    at = 500,
    yl, bl, yc, bc, prevYC, curYC, prevBC, curBC, gsp, s1v, s2v, s3v;
$(document).ready(function() {
        variableAssignment(), calculatorRadioChange(), calculatorScreenChange(), calculatorCheckboxChange(), calculatorSelectChange(), countChange(), heightChange()
    }),
    function(t) {
        function e(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function o(t, e) {
            (n(t, e) ? i : s)(t, e)
        }
        var n, s, i;
        "classList" in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }, s = function(t, e) {
            t.classList.add(e)
        }, i = function(t, e) {
            t.classList.remove(e)
        }) : (n = function(t, o) {
            return e(o).test(t.className)
        }, s = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }, i = function(t, o) {
            t.className = t.className.replace(e(o), " ")
        });
        var l = {
            hasClass: n,
            addClass: s,
            removeClass: i,
            toggleClass: o,
            has: n,
            add: s,
            remove: i,
            toggle: o
        };
        "function" == typeof define && define.amd ? define(l) : t.classie = l
    }(window),
    function(t) {
        function e(t, e) {
            if (!t) return !1;
            for (var o = t.target || t.srcElement || t || !1; o && o != e;) o = o.parentNode || !1;
            return o !== !1
        }

        function o(t, e) {
            for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
            return t
        }

        function n(t, e) {
            this.el = t, this.options = o({}, this.options), o(this.options, e), this._init()
        }
        n.prototype.options = {
            newTab: !0,
            stickyPlaceholder: !0,
            onChange: function(t) {
                return !1
            }
        }, n.prototype._init = function() {
            var t = this.el.querySelector("option[selected]");
            this.hasDefaultPlaceholder = t && t.disabled, this.selectedOpt = t || this.el.querySelector("option"), this._createSelectEl(), this.selOpts = [].slice.call(this.selEl.querySelectorAll("li[data-option]")), this.selOptsCount = this.selOpts.length, this.current = this.selOpts.indexOf(this.selEl.querySelector("li.cs-selected")) || -1, this.selPlaceholder = this.selEl.querySelector("span.cs-placeholder"), this._initEvents()
        }, n.prototype._createSelectEl = function() {
            var t = "",
                e = function(t) {
                    var e = "",
                        o = "",
                        n = "";
                    return !t.selectedOpt || this.foundSelected || this.hasDefaultPlaceholder || (o += "cs-selected ", this.foundSelected = !0), t.getAttribute("data-class") && (o += t.getAttribute("data-class")), t.getAttribute("data-link") && (n = "data-link=" + t.getAttribute("data-link")), "" !== o && (e = 'class="' + o + '" '), "<li " + e + n + ' data-option data-value="' + t.value + '"><span>' + t.textContent + "</span></li>"
                };
            [].slice.call(this.el.children).forEach(function(o) {
                if (!o.disabled) {
                    var n = o.tagName.toLowerCase();
                    "option" === n ? t += e(o) : "optgroup" === n && (t += '<li class="cs-optgroup"><span>' + o.label + "</span><ul>", [].slice.call(o.children).forEach(function(o) {
                        t += e(o)
                    }), t += "</ul></li>")
                }
            });
            var o = '<div class="cs-options"><ul>' + t + "</ul></div>";
            this.selEl = document.createElement("div"), this.selEl.className = this.el.className, this.selEl.tabIndex = this.el.tabIndex, this.selEl.innerHTML = '<span class="cs-placeholder">' + this.selectedOpt.textContent + "</span>" + o, this.el.parentNode.appendChild(this.selEl), this.selEl.appendChild(this.el)
        }, n.prototype._initEvents = function() {
            var t = this;
            this.selPlaceholder.addEventListener("click", function() {
                t._toggleSelect()
            }), this.selOpts.forEach(function(e, o) {
                e.addEventListener("click", function() {
                    t.current = o, t._changeOption(), t._toggleSelect()
                })
            }), document.addEventListener("click", function(o) {
                var n = o.target;
                t._isOpen() && n !== t.selEl && !e(n, t.selEl) && t._toggleSelect()
            }), this.selEl.addEventListener("keydown", function(e) {
                switch (e.keyCode || e.which) {
                    case 38:
                        e.preventDefault(), t._navigateOpts("prev");
                        break;
                    case 40:
                        e.preventDefault(), t._navigateOpts("next");
                        break;
                    case 32:
                        e.preventDefault(), t._isOpen() && void 0 !== t.preSelCurrent && t.preSelCurrent !== -1 && t._changeOption(), t._toggleSelect();
                        break;
                    case 13:
                        e.preventDefault(), t._isOpen() && void 0 !== t.preSelCurrent && t.preSelCurrent !== -1 && (t._changeOption(), t._toggleSelect());
                        break;
                    case 27:
                        e.preventDefault(), t._isOpen() && t._toggleSelect()
                }
            })
        }, n.prototype._navigateOpts = function(t) {
            this._isOpen() || this._toggleSelect();
            var e = void 0 !== this.preSelCurrent && this.preSelCurrent !== -1 ? this.preSelCurrent : this.current;
            ("prev" === t && e > 0 || "next" === t && e < this.selOptsCount - 1) && (this.preSelCurrent = "next" === t ? e + 1 : e - 1, this._removeFocus(), classie.add(this.selOpts[this.preSelCurrent], "cs-focus"))
        }, n.prototype._toggleSelect = function() {
            this._removeFocus(), this._isOpen() ? (this.current !== -1 && (this.selPlaceholder.textContent = this.selOpts[this.current].textContent), classie.remove(this.selEl, "cs-active")) : (this.hasDefaultPlaceholder && this.options.stickyPlaceholder && (this.selPlaceholder.textContent = this.selectedOpt.textContent), classie.add(this.selEl, "cs-active"))
        }, n.prototype._changeOption = function() {
            void 0 !== this.preSelCurrent && this.preSelCurrent !== -1 && (this.current = this.preSelCurrent, this.preSelCurrent = -1);
            var e = this.selOpts[this.current];
            this.selPlaceholder.textContent = e.textContent, this.el.value = e.getAttribute("data-value");
            var o = this.selEl.querySelector("li.cs-selected");
            o && classie.remove(o, "cs-selected"), classie.add(e, "cs-selected"), e.getAttribute("data-link") && (this.options.newTab ? t.open(e.getAttribute("data-link"), "_blank") : t.location = e.getAttribute("data-link")), this.options.onChange(this.el.value), calculatorSelectChange(), calculatorScreenChange(), countChange(), heightChange()
        }, n.prototype._isOpen = function(t) {
            return classie.has(this.selEl, "cs-active")
        }, n.prototype._removeFocus = function(t) {
            var e = this.selEl.querySelector("li.cs-focus");
            e && classie.remove(e, "cs-focus")
        }, t.SelectFx = n
    }(window),
    function(t) {
        var e = function(t) {
                return t.split("").reverse().join("")
            },
            o = {
                numberStep: function(e, o) {
                    var n = Math.floor(e);
                    t(o.elem).text(n)
                }
            },
            n = function(t) {
                var e = t.elem;
                if (e.nodeType && e.parentNode) {
                    var n = e._animateNumberSetter;
                    n || (n = o.numberStep), n(t.now, t)
                }
            };
        t.Tween && t.Tween.propHooks ? t.Tween.propHooks.number = {
            set: n
        } : t.fx.step.number = n;
        var s = function(t, e) {
                for (var o, n, s, i = t.split("").reverse(), l = [], a = 0, r = Math.ceil(t.length / e); a < r; a++) {
                    for (o = "", s = 0; s < e && (n = a * e + s) !== t.length; s++) o += i[n];
                    l.push(o)
                }
                return l
            },
            i = function(t) {
                var o = t.length - 1,
                    n = e(t[o]);
                return t[o] = e(parseInt(n, 10).toString()), t
            };
        t.animateNumber = {
            numberStepFactories: {
                append: function(e) {
                    return function(o, n) {
                        var s = Math.floor(o);
                        t(n.elem).prop("number", o).text(s + e)
                    }
                },
                separator: function(o, n, l) {
                    return o = o || " ", n = n || 3, l = l || "",
                        function(a, r) {
                            var c = a < 0,
                                _ = Math.floor((c ? -1 : 1) * a),
                                u = _.toString(),
                                d = t(r.elem);
                            if (u.length > n) {
                                u = i(s(u, n)).join(o), u = e(u)
                            }
                            d.prop("number", a).text((c ? "-" : "") + u + l)
                        }
                }
            }
        }, t.fn.animateNumber = function() {
            for (var e = arguments[0], n = t.extend({}, o, e), s = t(this), i = [n], l = 1, a = arguments.length; l < a; l++) i.push(arguments[l]);
            if (e.numberStep) {
                var r = this.each(function() {
                        this._animateNumberSetter = e.numberStep
                    }),
                    c = n.complete;
                n.complete = function() {
                    r.each(function() {
                        delete this._animateNumberSetter
                    }), c && c.apply(this, arguments)
                }
            }
            return s.animate.apply(s, i)
        }
    }(jQuery),
    function() {
        function t(t) {
            n.classList.contains("form-open") === !0 ? o() : (n.classList.add("form-open"), n.style.overflow = "hidden", document.body.style.overflow = "hidden", e(), setTimeout(function() {
                s.classList.add("closer"), i.focus()
            }, 1e3));
            var l = t.target.getAttribute("id");
            if (l) return window.yaCounter19000342.reachGoal(l), !0
        }

        function e() {
            (new TimelineMax).to(a, 1, {
                autoAlpha: 1
            }).to(r, 1, {
                y: 0,
                autoAlpha: 1
            }, "-=1").to(l, 1, {
                y: 0,
                autoAlpha: 1
            }, "-=1")
        }

        function o() {
            (new TimelineMax).to(a, 1, {
                autoAlpha: 0
            }).to(r, 1, {
                y: -100,
                autoAlpha: 0
            }, "-=1").to(l, 1, {
                y: 100,
                autoAlpha: 0
            }, "-=1"), n.classList.remove("form-open"), n.style.overflow = "", document.body.style.overflow = "", s.classList.remove("closer")
        }
        var n = document.getElementById("wrapper"),
            s = document.querySelector("main"),
            i = document.getElementById("feedback_form_2_name"),
            l = document.getElementById("main_form"),
            a = document.getElementsByClassName("block_form-main")[0],
            r = document.getElementsByClassName("block_form-main_intro_title")[0],
            c = document.getElementsByClassName("calc_action")[0],
            _ = document.querySelector(".button_calc"),
            u = document.getElementsByClassName("block_bottom_action_link")[0],
            d = document.getElementsByClassName("block_form-main_close")[0];
        c.onclick = t, u.onclick = t, d.onclick = t, _.onclick = t, s.onclick = function() {
            this.classList.contains("closer") && o()
        }
    }(), $("#feedback_form_1").validate({
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0
            }
        },
        messages: {
            name: {
                required: "Введите Ваше имя"
            },
            email: {
                required: "Введите Ваш e-mail",
                email: "Введите корректный e-mail, например name@domain.com"
            },
            phone: {
                required: "Введите Ваш телефон"
            }
        }
    }), $("#validate").validate({
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            phone: {
                required: !0
            }
        },
        messages: {
            name: {
                required: "Введите имя"
            },
            email: {
                required: "Введите e-mail",
                email: "Не верный формат"
            },
            phone: {
                required: "Введите номер телефона"
            }
        }
    });