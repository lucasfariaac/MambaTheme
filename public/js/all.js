/**
* Template Name: Mamba - v2.0.1
* Template URL: https://bootstrapmade.com/mamba-one-page-bootstrap-template-free/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;
        var scrolled = 2;

        if ($('#header-sticky-wrapper').length) {
          scrollto -= $('#header-sticky-wrapper').outerHeight() - scrolled;
        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
      heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");
  });

  heroCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animated fadeInDown');
    $(this).find('p').addClass('animated fadeInUp');
    $(this).find('.btn-get-started').addClass('animated fadeInUp');
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the venobox plugin
  $(window).on('load', function() {
    $('.venobox').venobox();
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Initi AOS
  AOS.init({
    duration: 1000,
    easing: "ease-in-out-back"
  });

})(jQuery);
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
/*!
 * jquery.counterup.js 2.1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Amended by Jeremy Paris, Ciro Mattia Gonano and others
 *
 * Date: Feb 24, 2017
 */
 (function($){"use strict";$.fn.counterUp=function(options){var settings=$.extend({time:400,delay:10,offset:100,beginAt:0,formatter:false,context:"window",callback:function(){}},options),s;return this.each(function(){var $this=$(this),counter={time:$(this).data("counterup-time")||settings.time,delay:$(this).data("counterup-delay")||settings.delay,offset:$(this).data("counterup-offset")||settings.offset,beginAt:$(this).data("counterup-beginat")||settings.beginAt,context:$(this).data("counterup-context")||settings.context};var counterUpper=function(){var nums=[];var divisions=counter.time/counter.delay;var num=$(this).attr("data-num")?$(this).attr("data-num"):$this.text();var isComma=/[0-9]+,[0-9]+/.test(num);num=num.replace(/,/g,"");var decimalPlaces=(num.split(".")[1]||[]).length;if(counter.beginAt>num)counter.beginAt=num;var isTime=/[0-9]+:[0-9]+:[0-9]+/.test(num);if(isTime){var times=num.split(":"),m=1;s=0;while(times.length>0){s+=m*parseInt(times.pop(),10);m*=60}}for(var i=divisions;i>=counter.beginAt/num*divisions;i--){var newNum=parseFloat(num/divisions*i).toFixed(decimalPlaces);if(isTime){newNum=parseInt(s/divisions*i);var hours=parseInt(newNum/3600)%24;var minutes=parseInt(newNum/60)%60;var seconds=parseInt(newNum%60,10);newNum=(hours<10?"0"+hours:hours)+":"+(minutes<10?"0"+minutes:minutes)+":"+(seconds<10?"0"+seconds:seconds)}if(isComma){while(/(\d+)(\d{3})/.test(newNum.toString())){newNum=newNum.toString().replace(/(\d+)(\d{3})/,"$1"+","+"$2")}}if(settings.formatter){newNum=settings.formatter.call(this,newNum)}nums.unshift(newNum)}$this.data("counterup-nums",nums);$this.text(counter.beginAt);var f=function(){if(!$this.data("counterup-nums")){settings.callback.call(this);return}$this.html($this.data("counterup-nums").shift());if($this.data("counterup-nums").length){setTimeout($this.data("counterup-func"),counter.delay)}else{$this.data("counterup-nums",null);$this.data("counterup-func",null);settings.callback.call(this)}};$this.data("counterup-func",f);setTimeout($this.data("counterup-func"),counter.delay)};$this.waypoint(function(direction){counterUpper();this.destroy()},{offset:counter.offset+"%",context:counter.context})})}})(jQuery);

/*
 * VenoBox - jQuery Plugin
 * version: 1.8.6
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2019 Nicola Franchini - @nicolafranchini
 *
 */

/* global jQuery */

(function($){
    "use strict";
    var autoplay, bgcolor, blocknum, blocktitle, border, core, container, content, dest, extraCss,
        framewidth, frameheight, gallItems, infinigall, items, keyNavigationDisabled, margine, numeratio,
        overlayColor, overlay, title, thisgall, thenext, theprev, nextok, prevok, preloader, $preloader, navigation,
        obj, gallIndex, startouch, vbheader, images, startY, startX, endY, endX, diff, diffX, diffY, threshold;

    $.fn.extend({
        //plugin name - venobox
        venobox: function(options) {
            var plugin = this;
            // default options
            var defaults = {
                arrowsColor : '#B6B6B6',
                autoplay : false, // same as data-autoplay - thanks @codibit
                bgcolor: '#fff',
                border: '0',
                closeBackground : '#161617',
                closeColor : "#d2d2d2",
                framewidth: '',
                frameheight: '',
                gallItems: false,
                infinigall: false,
                htmlClose : '&times;',
                htmlNext : '<span>Next</span>',
                htmlPrev : '<span>Prev</span>',
                numeratio: false,
                numerationBackground : '#161617',
                numerationColor : '#d2d2d2',
                numerationPosition : 'top', // 'top' || 'bottom'
                overlayClose: true, // disable overlay click-close - thanx @martybalandis
                overlayColor : 'rgba(23,23,23,0.85)',
                spinner : 'double-bounce', // available: 'rotating-plane' | 'double-bounce' | 'wave' | 'wandering-cubes' | 'spinner-pulse' | 'chasing-dots' | 'three-bounce' | 'circle' | 'cube-grid' | 'fading-circle' | 'folding-cube'
                spinColor : '#d2d2d2',
                titleattr: 'title', // specific attribute to get a title (e.g. [data-title]) - thanx @mendezcode
                titleBackground: '#161617',
                titleColor: '#d2d2d2',
                titlePosition : 'top', // 'top' || 'bottom'
                cb_pre_open: function(){ return true; }, // Callbacks - thanx @garyee
                cb_post_open: function(){},
                cb_pre_close: function(){ return true; },
                cb_post_close: function(){},
                cb_post_resize: function(){},
                cb_after_nav: function(){},
                cb_content_loaded: function(){},
                cb_init: function(){}
            };

            var option = $.extend(defaults, options);

            // callback plugin initialization
            option.cb_init(plugin);

            return this.each(function() {

                obj = $(this);

                // Prevent double initialization - thanx @matthistuff
                if (obj.data('venobox')) {
                  return true;
                }

                // method to be used outside the plugin
                plugin.VBclose = function() {
                    closeVbox();
                };
                obj.addClass('vbox-item');
                obj.data('framewidth', option.framewidth);
                obj.data('frameheight', option.frameheight);
                obj.data('border', option.border);
                obj.data('bgcolor', option.bgcolor);
                obj.data('numeratio', option.numeratio);
                obj.data('gallItems', option.gallItems);
                obj.data('infinigall', option.infinigall);
                obj.data('overlaycolor', option.overlayColor);
                obj.data('titleattr', option.titleattr);

                obj.data('venobox', true);

                obj.on('click', function(e){

                    e.preventDefault();
                    obj = $(this);

                    // callback plugin initialization
                    var cb_pre_open = option.cb_pre_open(obj);

                    if (cb_pre_open === false) {
                      return false;
                    }

                    // methods to be used outside the plugin
                    plugin.VBnext = function() {
                        navigateGall(thenext);
                    };
                    plugin.VBprev = function() {
                        navigateGall(theprev);
                    };

                    overlayColor = obj.data('overlay') || obj.data('overlaycolor');

                    framewidth = obj.data('framewidth');
                    frameheight = obj.data('frameheight');
                    // set data-autoplay="true" for vimeo and youtube videos - thanx @zehfernandes
                    autoplay = obj.data('autoplay') || option.autoplay;
                    border = obj.data('border');
                    bgcolor = obj.data('bgcolor');
                    nextok = false;
                    prevok = false;
                    keyNavigationDisabled = false;

                    // set a different url to be loaded using data-href="" - thanx @pixeline
                    dest = obj.data('href') || obj.attr('href');
                    extraCss = obj.data( 'css' ) || '';
                    title = obj.attr(obj.data('titleattr')) || '';

                    preloader = '<div class="vbox-preloader">';

                    switch (option.spinner) {

                        case 'rotating-plane':
                            preloader += '<div class="sk-rotating-plane"></div>';
                            break;
                        case 'double-bounce':
                            preloader += '<div class="sk-double-bounce">'+
                            '<div class="sk-child sk-double-bounce1"></div>'+
                            '<div class="sk-child sk-double-bounce2"></div>'+
                            '</div>';
                            break;
                        case 'wave':
                            preloader += '<div class="sk-wave">'+
                            '<div class="sk-rect sk-rect1"></div>'+
                            '<div class="sk-rect sk-rect2"></div>'+
                            '<div class="sk-rect sk-rect3"></div>'+
                            '<div class="sk-rect sk-rect4"></div>'+
                            '<div class="sk-rect sk-rect5"></div>'+
                            '</div>';
                            break;
                        case 'wandering-cubes':
                            preloader += '<div class="sk-wandering-cubes">'+
                            '<div class="sk-cube sk-cube1"></div>'+
                            '<div class="sk-cube sk-cube2"></div>'+
                            '</div>';
                            break;
                          case 'spinner-pulse':
                            preloader += '<div class="sk-spinner sk-spinner-pulse"></div>';
                            break;
                        case 'chasing-dots':
                            preloader += '<div class="sk-chasing-dots">'+
                            '<div class="sk-child sk-dot1"></div>'+
                            '<div class="sk-child sk-dot2"></div>'+
                            '</div>';
                            break;
                        case 'three-bounce':
                            preloader += '<div class="sk-three-bounce">'+
                            '<div class="sk-child sk-bounce1"></div>'+
                            '<div class="sk-child sk-bounce2"></div>'+
                            '<div class="sk-child sk-bounce3"></div>'+
                            '</div>';
                            break;
                        case 'circle':
                            preloader += '<div class="sk-circle">'+
                            '<div class="sk-circle1 sk-child"></div>'+
                            '<div class="sk-circle2 sk-child"></div>'+
                            '<div class="sk-circle3 sk-child"></div>'+
                            '<div class="sk-circle4 sk-child"></div>'+
                            '<div class="sk-circle5 sk-child"></div>'+
                            '<div class="sk-circle6 sk-child"></div>'+
                            '<div class="sk-circle7 sk-child"></div>'+
                            '<div class="sk-circle8 sk-child"></div>'+
                            '<div class="sk-circle9 sk-child"></div>'+
                            '<div class="sk-circle10 sk-child"></div>'+
                            '<div class="sk-circle11 sk-child"></div>'+
                            '<div class="sk-circle12 sk-child"></div>'+
                            '</div>';
                            break;
                        case 'cube-grid':
                            preloader += '<div class="sk-cube-grid">'+
                            '<div class="sk-cube sk-cube1"></div>'+
                            '<div class="sk-cube sk-cube2"></div>'+
                            '<div class="sk-cube sk-cube3"></div>'+
                            '<div class="sk-cube sk-cube4"></div>'+
                            '<div class="sk-cube sk-cube5"></div>'+
                            '<div class="sk-cube sk-cube6"></div>'+
                            '<div class="sk-cube sk-cube7"></div>'+
                            '<div class="sk-cube sk-cube8"></div>'+
                            '<div class="sk-cube sk-cube9"></div>'+
                            '</div>';
                            break;
                        case 'fading-circle':
                            preloader += '<div class="sk-fading-circle">'+
                            '<div class="sk-circle1 sk-circle"></div>'+
                            '<div class="sk-circle2 sk-circle"></div>'+
                            '<div class="sk-circle3 sk-circle"></div>'+
                            '<div class="sk-circle4 sk-circle"></div>'+
                            '<div class="sk-circle5 sk-circle"></div>'+
                            '<div class="sk-circle6 sk-circle"></div>'+
                            '<div class="sk-circle7 sk-circle"></div>'+
                            '<div class="sk-circle8 sk-circle"></div>'+
                            '<div class="sk-circle9 sk-circle"></div>'+
                            '<div class="sk-circle10 sk-circle"></div>'+
                            '<div class="sk-circle11 sk-circle"></div>'+
                            '<div class="sk-circle12 sk-circle"></div>'+
                            '</div>';
                            break;
                        case 'folding-cube':
                            preloader += '<div class="sk-folding-cube">'+
                            '<div class="sk-cube1 sk-cube"></div>'+
                            '<div class="sk-cube2 sk-cube"></div>'+
                            '<div class="sk-cube4 sk-cube"></div>'+
                            '<div class="sk-cube3 sk-cube"></div>'+
                            '</div>';
                            break;
                    }
                    preloader += '</div>';

                    navigation = '<a class="vbox-next">' + option.htmlNext + '</a><a class="vbox-prev">' + option.htmlPrev + '</a>';
                    vbheader = '<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">' + option.htmlClose + '</div>';

                    core = '<div class="vbox-overlay ' + extraCss + '" style="background:'+ overlayColor +'">'+
                    preloader + '<div class="vbox-container"><div class="vbox-content"></div></div>' + vbheader + navigation + '</div>';

                    $('body').append(core).addClass('vbox-open');

                    $('.vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse').css('background-color', option.spinColor);

                    overlay = $('.vbox-overlay');
                    container = $('.vbox-container');
                    content = $('.vbox-content');
                    blocknum = $('.vbox-num');
                    blocktitle = $('.vbox-title');
                    $preloader = $('.vbox-preloader');

                    $preloader.show();

                    blocktitle.css(option.titlePosition, '-1px');
                    blocktitle.css({
                      'color' : option.titleColor,
                      'background-color' : option.titleBackground
                    });

                    $('.vbox-close').css({
                      'color' : option.closeColor,
                      'background-color' : option.closeBackground
                    });

                    $('.vbox-num').css(option.numerationPosition, '-1px');
                    $('.vbox-num').css({
                      'color' : option.numerationColor,
                      'background-color' : option.numerationBackground
                    });

                    $('.vbox-next span, .vbox-prev span').css({
                      'border-top-color' : option.arrowsColor,
                      'border-right-color' : option.arrowsColor
                    });

                    content.html('');
                    content.css('opacity', '0');
                    overlay.css('opacity', '0');

                    checknav();

                    // fade in overlay
                    overlay.animate({opacity:1}, 250, function(){

                        if (obj.data('vbtype') == 'iframe') {
                          loadIframe();
                        } else if (obj.data('vbtype') == 'inline') {
                          loadInline();
                        } else if (obj.data('vbtype') == 'ajax') {
                          loadAjax();
                        } else if (obj.data('vbtype') == 'video') {
                          loadVid(autoplay);
                        } else {
                          content.html('<img src="'+dest+'">');
                          preloadFirst();
                        }
                        option.cb_post_open(obj, gallIndex, thenext, theprev);
                    });

                    /* -------- KEYBOARD ACTIONS -------- */
                    $('body').keydown(keyboardHandler);

                    /* -------- PREVGALL -------- */
                    $('.vbox-prev').on('click', function(){
                        navigateGall(theprev);
                    });
                    /* -------- NEXTGALL -------- */
                    $('.vbox-next').on('click', function(){
                        navigateGall(thenext);
                    });

                    return false;

                }); // click

                /* -------- CHECK NEXT / PREV -------- */
                function checknav(){

                    thisgall = obj.data('gall');
                    numeratio = obj.data('numeratio');
                    gallItems = obj.data('gallItems');
                    infinigall = obj.data('infinigall');

                    if (gallItems) {
                        items = gallItems;
                    } else {
                        items = $('.vbox-item[data-gall="' + thisgall + '"]');
                    }

                    thenext = items.eq( items.index(obj) + 1 );
                    theprev = items.eq( items.index(obj) - 1 );

                    if (!thenext.length && infinigall === true) {
                      thenext = items.eq(0);
                    }

                    // update gall numeration
                    if (items.length >= 1) {
                      gallIndex = items.index(obj)+1;
                      blocknum.html(gallIndex + ' / ' + items.length);
                    } else {
                      gallIndex = 1;
                    }
                    if (numeratio === true) {
                      blocknum.show();
                    } else {
                      blocknum.hide();
                    }

                    // update title
                    if (title !== '') {
                      blocktitle.show();
                    } else {
                      blocktitle.hide();
                    }

                    // update navigation arrows
                    if (!thenext.length && infinigall !== true) {
                      $('.vbox-next').css('display', 'none');
                      nextok = false;
                    } else {
                      $('.vbox-next').css('display', 'block');
                      nextok = true;
                    }

                    if (items.index(obj) > 0 || infinigall === true) {
                      $('.vbox-prev').css('display', 'block');
                      prevok = true;
                    } else {
                      $('.vbox-prev').css('display', 'none');
                      prevok = false;
                    }
                    // activate swipe
                    if (prevok === true || nextok === true) {
                      content.on(TouchMouseEvent.DOWN, onDownEvent);
                      content.on(TouchMouseEvent.MOVE, onMoveEvent);
                      content.on(TouchMouseEvent.UP, onUpEvent);
                    }
                }

                /* -------- gallery navigation -------- */
                function navigateGall(destination) {

                    if (destination.length < 1) {
                      return false;
                    }
                    if (keyNavigationDisabled) {
                      return false;
                    }
                    keyNavigationDisabled = true;

                    overlayColor = destination.data('overlay') || destination.data('overlaycolor');

                    framewidth = destination.data('framewidth');
                    frameheight = destination.data('frameheight');
                    border = destination.data('border');
                    bgcolor = destination.data('bgcolor');
                    dest = destination.data('href') || destination.attr('href');

                    autoplay = destination.data('autoplay');

                    title = (destination.data('titleattr') && destination.attr(destination.data('titleattr'))) || '';

                    // swipe out item
                    if (destination === theprev) {
                      content.addClass('vbox-animated').addClass('swipe-right');
                    }
                    if (destination === thenext) {
                      content.addClass('vbox-animated').addClass('swipe-left');
                    }

                    $preloader.show();

                    content.animate({
                      opacity : 0,
                    }, 500, function(){

                      overlay.css('background',overlayColor);

                      content
                      .removeClass('vbox-animated')
                      .removeClass('swipe-left')
                      .removeClass('swipe-right')
                      .css({'margin-left': 0,'margin-right': 0});

                      if (destination.data('vbtype') == 'iframe') {
                        loadIframe();
                      } else if (destination.data('vbtype') == 'inline') {
                        loadInline();
                      } else if (destination.data('vbtype') == 'ajax') {
                        loadAjax();
                      } else if (destination.data('vbtype') == 'video') {
                        loadVid(autoplay);
                      } else {
                        content.html('<img src="'+dest+'">');
                        preloadFirst();
                      }
                      obj = destination;
                      checknav();
                      keyNavigationDisabled = false;
                      option.cb_after_nav(obj, gallIndex, thenext, theprev);
                    });
                }

                /* -------- KEYBOARD HANDLER -------- */
                function keyboardHandler(e) {
                    if (e.keyCode === 27) { // esc
                      closeVbox();
                    }

                    if (e.keyCode == 37 && prevok === true) { // left
                      navigateGall(theprev);
                    }

                    if (e.keyCode == 39 && nextok === true) { // right
                      navigateGall(thenext);
                    }
                }

                /* -------- CLOSE VBOX -------- */
                function closeVbox(){

                    var cb_pre_close = option.cb_pre_close(obj, gallIndex, thenext, theprev);

                    if (cb_pre_close === false) {
                      return false;
                    }

                    $('body').off('keydown', keyboardHandler).removeClass('vbox-open');

                    obj.focus();

                    overlay.animate({opacity:0}, 500, function(){
                      overlay.remove();
                      keyNavigationDisabled = false;
                      option.cb_post_close();
                    });
                }

                /* -------- CLOSE CLICK -------- */
                var closeclickclass = '.vbox-overlay';
                if(!option.overlayClose){
                    closeclickclass = '.vbox-close'; // close only on X
                }

                $('body').on('click touchstart', closeclickclass, function(e){
                    if ($(e.target).is('.vbox-overlay') ||
						$(e.target).is('.vbox-content') ||
						$(e.target).is('.vbox-close') ||
						$(e.target).is('.vbox-preloader') ||
						$(e.target).is('.vbox-container')
                    ) {
                        closeVbox();
                    }
                });

                startX = 0;
                endX = 0;

                diff = 0;
                threshold = 50;
                startouch = false;

                function onDownEvent(e){
                    content.addClass('vbox-animated');
                    startY = endY = e.pageY;
                    startX = endX = e.pageX;
                    startouch = true;
                }

                function onMoveEvent(e){
                    if (startouch === true) {
                        endX = e.pageX;
                        endY = e.pageY;

                        diffX = endX - startX;
                        diffY = endY - startY;

                        var absdiffX = Math.abs(diffX);
                        var absdiffY = Math.abs(diffY);

                        if ((absdiffX > absdiffY) && (absdiffX <= 100)) {
                            e.preventDefault();
                            content.css('margin-left', diffX);
                        }
                    }
                }

                function onUpEvent(e){
                    if (startouch === true) {
                        startouch = false;
                        var subject = obj;
                        var change = false;
                        diff = endX - startX;

                        if (diff < 0 && nextok === true) {
                            subject = thenext;
                            change = true;
                        }
                        if (diff > 0 && prevok === true) {
                            subject = theprev;
                            change = true;
                        }

                        if (Math.abs(diff) >= threshold && change === true) {
                            navigateGall(subject);
                        } else {
                            content.css({'margin-left': 0,'margin-right': 0});
                        }
                    }
                }

                /* == GLOBAL DECLERATIONS == */
                var TouchMouseEvent = {
                    DOWN: "touchmousedown",
                    UP: "touchmouseup",
                    MOVE: "touchmousemove"
                };

                /* == EVENT LISTENERS == */
                var onMouseEvent = function(event) {
                    var type;
                    switch (event.type) {
                        case "mousedown": type = TouchMouseEvent.DOWN; break;
                        case "mouseup":   type = TouchMouseEvent.UP;   break;
                        case "mouseout":   type = TouchMouseEvent.UP;   break;
                        case "mousemove": type = TouchMouseEvent.MOVE; break;
                        default:
                            return;
                    }
                    var touchMouseEvent = normalizeEvent(type, event, event.pageX, event.pageY);
                    $(event.target).trigger(touchMouseEvent);
                };

                var onTouchEvent = function(event) {
                    var type;
                    switch (event.type) {
                        case "touchstart": type = TouchMouseEvent.DOWN; break;
                        case "touchend":   type = TouchMouseEvent.UP;   break;
                        case "touchmove":  type = TouchMouseEvent.MOVE; break;
                        default:
                            return;
                    }

                    var touch = event.originalEvent.touches[0];
                    var touchMouseEvent;

                    if (type == TouchMouseEvent.UP) {
                         touchMouseEvent = normalizeEvent(type, event, null, null);
                    } else {
                        touchMouseEvent = normalizeEvent(type, event, touch.pageX, touch.pageY);
                    }
                    $(event.target).trigger(touchMouseEvent);
                };

                /* == NORMALIZE == */
                var normalizeEvent = function(type, original, x, y) {
                    return $.Event(type, {
                        pageX: x,
                        pageY: y,
                        originalEvent: original
                    });
                };

                /* == LISTEN TO ORIGINAL EVENT == */
                if ("ontouchstart" in window) {
                    $(document).on("touchstart", onTouchEvent);
                    $(document).on("touchmove", onTouchEvent);
                    $(document).on("touchend", onTouchEvent);
                } else {
                    $(document).on("mousedown", onMouseEvent);
                    $(document).on("mouseup", onMouseEvent);
                    $(document).on("mouseout", onMouseEvent);
                    $(document).on("mousemove", onMouseEvent);
                }

                /* -------- LOAD AJAX -------- */
                function loadAjax(){
                  $.ajax({
                  url: dest,
                  cache: false
                  }).done(function( msg ) {
                      content.html('<div class="vbox-inline">'+ msg +'</div>');
                      preloadFirst();

                  }).fail(function() {
                      content.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>');
                      updateoverlay();
                  });
                }

                /* -------- LOAD IFRAME -------- */
                function loadIframe(){
                    content.html('<iframe class="venoframe" src="'+dest+'"></iframe>');
                  //  $('.venoframe').load(function(){ // valid only for iFrames in same domain
                    updateoverlay();
                  //  });
                }

                /* -------- LOAD VIDEOs -------- */
                function loadVid(autoplay){

                    var player;
                    var videoObj = parseVideo(dest);

                    // set rel=0 to hide related videos at the end of YT + optional autoplay
                    var stringAutoplay = autoplay ? "?rel=0&autoplay=1" : "?rel=0";
                    var queryvars = stringAutoplay + getUrlParameter(dest);

                    if (videoObj.type == 'vimeo') {
                      player = 'https://player.vimeo.com/video/';
                    } else if (videoObj.type == 'youtube') {
                      player = 'https://www.youtube.com/embed/';
                    }
                    content.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="'+player+videoObj.id+queryvars+'"></iframe>');
                    updateoverlay();
                }

                /**
                * Parse Youtube or Vimeo videos and get host & ID
                */
                function parseVideo (url) {
                    url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
                    var type;
                    if (RegExp.$3.indexOf('youtu') > -1) {
                        type = 'youtube';
                    } else if (RegExp.$3.indexOf('vimeo') > -1) {
                        type = 'vimeo';
                    }
                    return {
                        type: type,
                        id: RegExp.$6
                    };
                }

                /**
                * get additional video url parameters
                */
                function getUrlParameter(name) {
                  var result = '';
                  var sPageURL = decodeURIComponent(name);
                  var firstsplit = sPageURL.split('?');

                  if (firstsplit[1] !== undefined) {
                      var sURLVariables = firstsplit[1].split('&');
                      var sParameterName;
                      var i;
                      for (i = 0; i < sURLVariables.length; i++) {
                          sParameterName = sURLVariables[i].split('=');
                          result = result + '&'+ sParameterName[0]+'='+ sParameterName[1];
                      }
                  }
                  return encodeURI(result);
                }

                /* -------- LOAD INLINE -------- */
                function loadInline(){
                    content.html('<div class="vbox-inline">'+$(dest).html()+'</div>');
                    updateoverlay();
                }

                /* -------- PRELOAD IMAGE -------- */
                function preloadFirst(){
                    images = content.find('img');

                    if (images.length) {
                        images.each(function(){
                            $(this).one('load', function() {
                                updateoverlay();
                            });
                        });
                    } else {
                        updateoverlay();
                    }
                }

                /* -------- FADE-IN THE NEW CONTENT -------- */
                function updateoverlay(){

                    blocktitle.html(title);

                    content.find(">:first-child").addClass('vbox-figlio').css({
                        'width': framewidth,
                        'height': frameheight,
                        'padding': border,
                        'background': bgcolor
                    });

                    $('img.vbox-figlio').on('dragstart', function(event) {
                        event.preventDefault();
                    });

                    updateOL();

                    content.animate({
                        'opacity': '1'
                    },'slow', function(){
                        $preloader.hide();
                    });
                    option.cb_content_loaded(obj, gallIndex, thenext, theprev);
                }

                /* -------- CENTER FRAME -------- */
                function updateOL(){

                    var sonH = content.outerHeight();
                    var finH = $(window).height();

                    if (sonH + 60 < finH) {
                        margine = (finH - sonH)/2;
                    } else {
                        margine = '30px';
                    }
                    content.css('margin-top', margine);
                    content.css('margin-bottom', margine);
                    option.cb_post_resize();
                }

                $(window).resize(function(){
                    if($('.vbox-content').length){
                        setTimeout(updateOL(), 800);
                    }
                });
            }); // each
        } // venobox
    }); // extend
})(jQuery);
