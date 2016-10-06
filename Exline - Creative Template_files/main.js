(function() {
    "use strict";
    var e, a, t, i, o, n, s, l, r, d, f, c, p, m, u, g, h, v;
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? (h = !0, $("html").addClass("mobile")) : (h = !1, $("html").addClass("no-mobile")), $(window).load(function() {
        $(".page-loader").delay(600).fadeOut("slow")
    }), o = function() {
        var e;
        e = $(".bg-img, .parallax"), e.each(function() {
            $(this).attr("data-background") && $(this).css("background-image", "url(" + $(this).data("background") + ")")
        })
    }, o(), m = function() {
        $(window).width() >= 1024 && h === !1 && skrollr.init({
            forceHeight: !1,
            smoothScrolling: !1
        })
    }, $(window).load(function() {
        m()
    }), u = function() {
        $(".fullwidth-slider").owlCarousel({
            autoPlay: 8e3,
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !0,
            pagination: !0,
            addClassActive: !0,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"],
            afterInit: function() {
                var e;
                e = $(".owl-item.active .animate-e"), $(window).load(function() {
                    e.each(function() {
                        var e;
                        e = $(this).attr("data-effect"), $(this).addClass("animated " + e)
                    })
                })
            },
            beforeMove: function() {
                var e;
                e = $(".owl-item.active .animate-e"), e.each(function() {
                    var e;
                    e = $(this).attr("data-effect"), $(this).removeClass("animated " + e)
                })
            },
            afterMove: function() {
                var e;
                e = $(".owl-item.active .animate-e"), e.each(function() {
                    var e;
                    e = $(this).attr("data-effect"), $(this).addClass("animated " + e)
                })
            }
        }), $(".fullwidth-testimotal-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !0,
            pagination: !0,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        }), $(".small-carousel").owlCarousel({
            autoPlay: 2500,
            stopOnHover: !0,
            items: 6,
            itemsDesktop: [1199, 4],
            itemsTabletSmall: [768, 3],
            itemsMobile: [480, 2],
            pagination: !1,
            navigation: !1
        }), $(".work-full-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !0,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        }), $(".content-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !0,
            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
        }), $(".team-slider").owlCarousel({
            autoPlay: !1,
            stopOnHover: !0,
            slideSpeed: 350,
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1],
            autoHeight: !0,
            navigation: !1,
            pagination: !0
        }), $(".about-slider").owlCarousel({
            slideSpeed: 350,
            singleItem: !0,
            autoHeight: !0,
            navigation: !1,
            pagination: !0
        })
    }, u(), p = function() {
        $(window).width() >= 1024 && h === !1 ? $(".progress-bar").appear(function() {
            var e, a, t, i, o;
            t = $(this), i = t.attr("data-progress"), o = 5, a = 30, (e = function() {
                t.css("width", a + "%"), i > a && (a += o, setTimeout(e, 40))
            })()
        }) : $(".progress-bar").each(function() {
            var e, a;
            e = $(this), a = e.attr("data-progress"), e.css("width", a + "%")
        })
    }, p(), a = function(e, a) {
        e.height(a.height()), e.css({
            "line-height": a.height() + "px"
        })
    }, v = $(".navbar-mobile"), e = $(".navbar-desktop"), s = function() {
        $(".mobile-on .navbar-desktop > ul").css("max-height", $(window).height() - $(".main-nav").height() - 20 + "px"), $(window).width() <= 1024 ? $(".main-nav").addClass("mobile-on") : $(window).width() > 1024 && ($(".main-nav").removeClass("mobile-on"), e.show())
    }, n = function() {
        var t, i, o;
        t = function() {
            $(window).scrollTop() > 10 ? ($(".js-transparent").removeClass("transparent"), $(".main-nav, .nav-logo-wrap .logo, .navbar-mobile").addClass("small-height")) : ($(".js-transparent").addClass("transparent"), $(".main-nav, .nav-logo-wrap .logo, .navbar-mobile").removeClass("small-height"))
        }, $(".js-stick").sticky({
            topSpacing: 0
        }), a($(".inner-nav > ul > li > a"), $(".main-nav")), a(v, $(".main-nav")), v.css({
            width: $(".main-nav").height() + "px"
        }), $(".main-nav").hasClass("transparent") && $(".main-nav").addClass("js-transparent"), t(), $(window).scroll(function() {
            t()
        }), v.on("click", function() {
            e.hasClass("js-opened") ? (e.slideUp("slow").removeClass("js-opened"), $(this).removeClass("active")) : (e.slideDown("slow").addClass("js-opened"), $(this).addClass("active"))
        }), e.find("a:not(.menu-has-sub)").on("click", function() {
            v.hasClass("active") && (e.slideUp("slow").removeClass("js-opened"), v.removeClass("active"))
        }), i = $(".menu-has-sub"), o = void 0, $(".mobile-on .menu-has-sub").find(".fa:first").removeClass("fa-angle-right").addClass("fa-angle-down"), i.on("click", function() {
            return $(".main-nav").hasClass("mobile-on") ? (o = $(this).parent("li:first"), o.hasClass("js-opened") ? o.find(".menu-sub:first").slideUp(function() {
                o.removeClass("js-opened"), o.find(".menu-has-sub").find(".fa:first").removeClass("fa-angle-up").addClass("fa-angle-down")
            }) : ($(this).find(".fa:first").removeClass("fa-angle-down").addClass("fa-angle-up"), o.addClass("js-opened"), o.find(".menu-sub:first").slideDown()), !1) : void 0
        }), o = i.parent("li"), o.hover(function() {
            $(".main-nav").hasClass("mobile-on") || $(this).find(".menu-sub:first").stop(!0, !0).fadeIn("fast")
        }, function() {
            $(".main-nav").hasClass("mobile-on") || $(this).find(".menu-sub:first").stop(!0, !0).delay(100).fadeOut("fast")
        })
    }, n(), s(), $(window).resize(function() {
        s()
    }), c = function() {
        var e, a;
        $(".scroll > li > a, a.scroll").smoothScroll({
            speed: 1200
        }), a = $("body section"), e = $(".scroll-nav li a"), $(window).scroll(function() {
            a.filter(":in-viewport:first").each(function() {
                var a, t;
                t = $(this), a = $('.scroll-nav li a[href$="#' + t.attr("id") + '"]'), e.removeClass("active"), a.addClass("active")
            })
        })
    }, c(), t = function() {
        var e, a, t, i;
        e = 0, a = $(".work-container, .portfolio-grid"), i = ".work-item, .portfolio-item", t = "masonry", a.imagesLoaded(function() {
            a.isotope({
                itemSelector: i,
                layoutMode: t,
                filter: e
            })
        }), $(".filter li a").on("click", function() {
            return $(".filter li").removeClass("active"), $(this).parent().addClass("active"), e = $(this).attr("data-filter"), a.isotope({
                itemSelector: i,
                layoutMode: t,
                filter: e
            }), !1
        })
    }, t(), f = function() {
        var e;
        e = $(".blog-masonry"), e.imagesLoaded(function() {
            e.isotope({
                itemSelector: ".post-masonry"
            })
        })
    }, f(), d = function() {
        var e, a;
        return a = $("#map-canvas"), e = function() {
            var e, t;
            a.length && (e = a.attr("data-address"), t = a.attr("data-address"), a.gmap3({
                action: "init",
                marker: {
                    address: t,
                    data: t,
                    events: {
                        mouseover: function(e, a, t) {
                            var i, o;
                            o = $(this).gmap3("get"), i = $(this).gmap3({
                                get: {
                                    name: "infowindow"
                                }
                            }), i === !0 ? (i.open(o, e), i.setContent(t.data)) : $(this).gmap3({
                                infowindow: {
                                    anchor: e,
                                    options: {
                                        content: t.data
                                    }
                                }
                            })
                        },
                        mouseout: function() {
                            var e;
                            e = $(this).gmap3({
                                get: {
                                    name: "infowindow"
                                }
                            }), e && e.close()
                        }
                    }
                },
                map: {
                    options: {
                        zoom: 14,
                        zoomControl: !0,
                        mapTypeControl: !1,
                        scaleControl: !1,
                        scrollwheel: !1,
                        streetViewControl: !0,
                        draggable: !0,
                        styles: [{
                            featureType: "water",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#d3d3d3"
                            }]
                        }, {
                            featureType: "transit",
                            stylers: [{
                                color: "#808080"
                            }, {
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.stroke",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#b3b3b3"
                            }]
                        }, {
                            featureType: "road.highway",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#ffffff"
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#ffffff"
                            }, {
                                weight: 1.8
                            }]
                        }, {
                            featureType: "road.local",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#d7d7d7"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#ebebeb"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "geometry",
                            stylers: [{
                                color: "#a7a7a7"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#ffffff"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#ffffff"
                            }]
                        }, {
                            featureType: "landscape",
                            elementType: "geometry.fill",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#efefef"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.text.fill",
                            stylers: [{
                                color: "#696969"
                            }]
                        }, {
                            featureType: "administrative",
                            elementType: "labels.text.fill",
                            stylers: [{
                                visibility: "on"
                            }, {
                                color: "#737373"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "poi",
                            elementType: "labels",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {
                            featureType: "road.arterial",
                            elementType: "geometry.stroke",
                            stylers: [{
                                color: "#d6d6d6"
                            }]
                        }, {
                            featureType: "road",
                            elementType: "labels.icon",
                            stylers: [{
                                visibility: "off"
                            }]
                        }, {}, {
                            featureType: "poi",
                            elementType: "geometry.fill",
                            stylers: [{
                                color: "#dadada"
                            }]
                        }]
                    }
                }
            }))
        }, $(".map-section").on("click", function() {
            $(this).parent().toggleClass("js-active"), $(this).find(".toggle-open").toggle(), $(this).find(".toggle-close").toggle(), e()
        })
    }, d(), r = function() {
        var e;
        e = function() {
            var e, a;
            a = $.magnificPopup.instance, e = document.location.hash.split("="), "#portfolio" === e[0] && $.magnificPopup.open({
                items: {
                    src: e[1]
                },
                mainClass: "mfp-move-horizontal",
                removalDelay: 1e3,
                type: "ajax",
                tLoading: "",
                showCloseBtn: !1,
                callbacks: {
                    open: function() {
                        var e;
                        e = $.magnificPopup.instance.currItem.src, history.pushState({}, "", "#portfolio=" + e)
                    },
                    close: function() {
                        history.pushState({}, "", document.location.pathname)
                    },
                    ajaxContentAdded: function() {
                        $("#project").addClass("mfp-opacity"), $("#bnt-close").on("click", function() {
                            return $.magnificPopup.close(), !1
                        }), $(".work-full-slider").owlCarousel({
                            slideSpeed: 350,
                            singleItem: !0,
                            autoHeight: !0,
                            navigation: !0,
                            navigationText: ["<span class='angle'></span>", "<span class='angle'></span>"]
                        })
                    }
                }
            })
        }, e(), $(window).on("hashchange", function() {
            e()
        }), $(".work-gallery").magnificPopup({
            tLoading: "",
            gallery: {
                enabled: !0
            },
            mainClass: "mfp-fade"
        }), $(".magnific, .lightbox").magnificPopup({
            tLoading: ""
        }), $(".video, .post-thumbnail").fitVids()
    }, r(), i = function() {
        var e;
        e = $(".player"), e.length && $(window).width() >= 1024 && h === !1 && $(function() {
            e.YTPlayer()
        })
    }, i(), l = function() {
        $(window).width() >= 1024 && h === !1 && $(".focus-number").appear(function() {
            var e;
            e = $(this), e.countTo({
                from: 0,
                to: e.html(),
                speed: 1300,
                refreshInterval: 60
            })
        })
    }, l(), (g = function() {
        var e;
        e = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !1,
            live: !0
        }), $("body").hasClass("appear-animate") && e.init()
    })()
}).call(this);