!function(a) {
  "use strict";

  function f() {
    c.data("waypoint").context.refresh(), e.each(function(b, c) {
      var d = a(c);
      void 0 !== d.data("waypoint") && d.data("waypoint").context.refresh()
    }),
        i()
  }

  function g() {
    a(".img-as-bg").each(function(b, c) {
      var d = a(c);
      d.parent().css("background-image", 'url("' + d.attr("src") + '")'),
          d.remove()
    })
  }

  function h() {
    a("button.open-menu").on("click", function() { c.toggleClass("opened") }),
        i()
  }

  function i() {
    var a = c.find("ul.menu").innerHeight(), b = c.find(".menu-wrapper");
    a <= window.innerHeight
        ? b.css("max-height", a).css("overflow", "hidden")
        : b.css("max-height", window.innerHeight).css("overflow", "auto")
  }

  function j() {
    var a = new Waypoint({
      element : $("nav").get(0),
      handler : function(direction) {
        if ("up" === direction) {
          $("nav").removeClass("nav-fixed");
          $("div.content").css("margin-top", 0);
        } else {
          $("nav").addClass("nav-fixed");
          $("div.content").css("margin-top", $(".menu-wrapper").height());
        }
      }
    });
    c.data("waypoint", a)
  }

  function k() {
    a("a").on("click", function(d) {
      if ($(this).attr("href").indexOf("#") != 0) {
        return;
      }
      d.preventDefault();
      var e = a(this), f = e.attr("href"),
          offset = $(document).width() > 991 ? $(".menu-wrapper").height() : 54;
      0 !== f.indexOf("#") || b.hasClass("scrolling") ||
          b.addClass("scrolling")
              .add("html")
              .animate({scrollTop : a(f).offset().top - offset + 1}, 400,
                       function() {
                         b.removeClass("scrolling"),
                             e.parents("nav").length > 0 &&
                                 c.removeClass("opened")
                                     .find(".menu-wrapper")
                                     .animate({scrollTop : 0}, 400)
                       })
    })
  }

  function l() {
    e.each(function(d, e) {
      var f = a(e), g = f.attr("id"), h = $(".menu-wrapper").height(), i = null;
      if (c.find("a").each(function(a, b) { b.hash === "#" + g && (i = b) }),
          null === i)
        return !0;
      f.data("menu", i);
      var j = new Waypoint({
        element : e,
        handler : function(b) {
          var c = a(f.data("menu")).parent();
          "up" === b &&
              (c.removeClass("current-menu-item"),
               c = a(f.prevAll("section").eq(0).data("menu")).parent()),
              c.addClass("current-menu-item"),
              c.siblings().removeClass("current-menu-item")
        },
        offset : h
      });
      f.data("waypoint", j)
    })
  }

  function m() {
    var b = a(window), c = window.innerHeight, d = 0, e = b.scrollTop();
    e - d >= 0 && a(".animation-chain").each(function(b, d) {
      var f = a(d);
      if (e > f.offset().top - c / 4 * 3) {
        var g = f.data("animation");
        (void 0 === g || "" === g) && (g = "fadeInUp"), f.animateCssChain(g)
      }
    }),
        d = e, window.requestAnimationFrame(m)
  }

  function n() {
    var d = a("section.section-hero .owl-carousel");
    d.imagesLoaded(function() {
      d.owlCarousel({
        loop : !0,
        margin : 0,
        nav : !1,
        items : 1,
        autoHeight : !1,
        dots : !0,
        autoplay : !0,
        autoplayTimeout : 5e3,
        autoplayHoverPause : !1,
        smartSpeed : 1e3,
        animateOut : "fadeOut"
      }),
          setTimeout(function() {
            window.requestAnimationFrame(m), setTimeout(function() {
              a(".section-hero .cta").animateCss("fadeInUp")
            }, 1e3)
          }, 600)
    }),
        a(".section-hero .scroll-down").on("click", function() {
          b.add("html").animate({scrollTop : c.offset().top}, 1e3)
        })
  }

  function o() {
    var b = a(".separator-carousel .owl-carousel");
    b.imagesLoaded(function() {
      b.owlCarousel({
        loop : !0,
        margin : 0,
        nav : !0,
        items : 4,
        autoHeight : !0,
        dots : !1,
        autoplay : !0,
        autoplayTimeout : 5e3,
        responsive : {0 : {items : 1}, 480 : {items : 3}, 992 : {items : 4}}
      }),
          b.magnificPopup(
              {delegate : "a", type : "image", gallery : {enabled : !0}})
    })
  }

  function p() {
    function k() {
      setTimeout(function() { e.addClass("opened"), i.addClass("loaded") }, 300)
    }
    var b = a(".gallery-grid");
    void 0 !== a.fn.imagesLoaded && void 0 !== a.fn.isotope &&
        (b.imagesLoaded(function() {
          b.isotope({
             itemSelector : ".gallery-grid-item",
             layoutMode : "masonry",
             initLayout : !1
           })
              .on("layoutComplete", function(a) { l() })
              .isotope()
        }),
         b.find(".gallery-grid-item").each(function(b, c) {
           a(c).find("ul.video").length > 0 &&
               a("<img />")
                   .attr("src", "img/youtube-play.svg")
                   .addClass("gallery-video-icon")
                   .prependTo(c)
         }));
    var c = a(".gallery-cats a");
    c.on("click", function(c) {
      c.preventDefault();
      var d = a(this).data("cat");
      "*" !== d && (d = "." + d), b.isotope({filter : d})
    });
    var d = a("#gallery .gallery-grid-item"), e = a(".gallery-modal"),
        f = a(".gallery-modal .modal-nav-prev"),
        g = a(".gallery-modal .modal-nav-next"),
        h = a(".gallery-modal .modal-nav-close"), i = a(".gallery-overlay"),
        j = a(".gallery-open-modal");
    f.on("click", function(a) {
      a.preventDefault(), d.filter(".current").prev().trigger("click")
    }), g.on("click", function(a) {
      a.preventDefault(), d.filter(".current").next().trigger("click")
    }), h.on("click", function(a) {
      a.preventDefault(), i.trigger("click")
    }), j.on("click", function(b) {
      b.preventDefault(), a(this).parents(".gallery-grid-item").trigger("click")
    }), d.on("click", function(b) {
      if ("img" === b.target.tagName.toLowerCase() ||
          a(b.target).hasClass("gallery-grid-item")) {
        var c = a(this), d = c.find(".gallery-info"), h = e.find(".left"),
            j = e.find(".right"), l = c.find("ul.image-list"),
            m = c.find("ul.video");
        if (c.addClass("current").siblings().removeClass("current"),
            f.parent().toggleClass("enabled", c.prev().length > 0),
            g.parent().toggleClass("enabled", c.next().length > 0),
            h.empty().append(d.clone()), j.empty(), l.length > 0) {
          var n = a("<div />").addClass("owl-carousel owl-theme");
          l.find("img").each(function(b, c) {
            var d = a(c).clone();
            d.attr("src", d.data("src")),
                d.hasClass("img-vertical") &&
                    d.css("max-height", window.innerHeight - 240),
                a("<div />").addClass("item").append(d).appendTo(n)
          }),
              j.append(n), n.imagesLoaded(function() {
                n.owlCarousel({
                  loop : !0,
                  margin : 0,
                  nav : !1,
                  items : 1,
                  autoHeight : !0,
                  dots : !0
                }),
                    k()
              })
        }
        if (m.length > 0) {
          var o = m.find("iframe"), p = o.data("src"),
              q = a("<div />").addClass("wide-screen");
          if (-1 !== p.indexOf("youtube")) {
            var r = p.split("?"), s = null, t = null;
            if (r.length > 0) {
              s = r[0], t = s.split("/"), t = t.pop();
              var u = a("<a />").attr({href : "#"}).append(a("<img/>").attr({
                src : "http://i.ytimg.com/vi/" + t + "/maxresdefault.jpg"
              }));
              q.append(u), q.imagesLoaded(function() { j.append(q), k() }),
                  u.on("click", function(a) {
                    a.preventDefault(), p += "&autoplay=1",
                        q.empty().append(o.clone().attr({src : p}))
                  })
            }
          } else
            q.append(o.clone().attr({src : p}).on("load", function() { k() })),
                j.append(q)
        }
        i.css("display", "flex"),
            setTimeout(function() { i.addClass("opened") }, 100)
      }
    }), i.on("click", function(b) {
      a(b.target).hasClass("gallery-overlay") &&
          (e.find(".right").empty(), e.removeClass("opened"),
           setTimeout(function() {
             i.removeClass("opened"),
                 setTimeout(function() { i.hide(), i.removeClass("loaded") },
                            300)
           }, 300))
    })
  }

  function q() {
    var b = a(".countdown-area"), c = a(".countdown-title");
    b.countdown(b.data("final-date"), {
       elapse : !0
     }).on("update.countdown", function(a) {
      a.elapsed
          ? (c.html(c.data("after-countdown")),
             b.html(b.data("after-countdown")))
          : b.html(a.strftime(
                '<ul><li><span class="digits">%-D</span><span class="unit">' +
                b.data('day') +
                '</span></li><li><span class="digits">%-H</span><span class="unit">' +
                b.data('hour') +
                '</span></li><li><span class="digits">%-M</span><span class="unit">' +
                b.data('minute') +
                '</span></li><li><span class="digits">%-S</span><span class="unit">' +
                b.data('second') + '</span></li></ul>'))
    })
  }

  function r() {
    var b = a(".parallax");
    b.length > 0 && b.parallax({mode : 1})
  }

  function t() {
    if (window.innerWidth < 540) {
      a("#rsvp-form").height(1850);
    } else if (window.innerWidth < 820) {
      a("#rsvp-form").height(1600);
    } else {
      a("#rsvp-form").height(1400);
    }
  }

  var b = a("body"), c = a("nav"), d = a(".preloader"), e = a("section");
  window.onload =
      function() {
    g(), h(), j(), k(), l(), n(), o(), p(), q(), r(), t(), d.addClass("done"),
        setTimeout(function() { d.remove() }, 500)
  },
  a(window).on("resize orientationchange", function() { f() }),
  a(window).on("resize", function() { t(); }), a.fn.extend({
    animateCss : function(b) {
      var c =
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
      a(this)
          .addClass("animated " + b)
          .one(c, function() { a(this).removeClass(b) })
    },
    animateCssChain : function(b, c) {
      (void 0 === c || null === c || "" === c) && (c = .1),
          a(this).children().each(function(d, e) {
            var f = a(e);
            return f.hasClass("animated")
                       ? !0
                       : void
                             f.css({
                                "-webkit-animation-delay" : c * d + "s",
                                "animation-delay" : c * d + "s"
                              }).animateCss(b)
          })
    }
  })
}(jQuery);
