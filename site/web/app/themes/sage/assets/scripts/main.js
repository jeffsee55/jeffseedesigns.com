/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages
    'common': {
      init: function() {
        // JavaScript to be fired on all pages
        $('.portfolio-slider').slick({
          centerMode: true,
          dots: true,
          //infinite: false,
          //initialSlide: 1,
          centerPadding: '260px',
          variableWidth: true,
          slidesToShow: 1,
          prevArrow: "<i class='material-icons arrow-left'>keyboard_arrow_left</i>",
          nextArrow: "<i class='material-icons arrow-right'>keyboard_arrow_right</i>",
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                centerPadding: '100px'
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerPadding: '50px'
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: '0px'
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
        });
        $('.expand').click(function() {
          $(this).siblings('.caption').toggleClass('show-more');
          $(this).toggleClass('rotate');
        });
        var filtered = false;

        $('.filter').on('click', function(){
          if (filtered === false) {
            $(this).addClass('active-label');
            $(this).siblings().removeClass('active-label');
            var $label = $(this).attr('id');
            $('.portfolio-slider').slick('slickFilter', '.' + $label);
            filtered = true;
          } else {
            $(this).removeClass('active-label');
            $(this).siblings().removeClass('active-label');
            $('.portfolio-slider').slick('slickUnfilter');
            filtered = false;
          }
        });
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        $('#fullpage').fullpage({
          responsiveWidth: 1020,
          responsiveHeight: 500,
          css3:false
        });
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // About us page, note the change from about-us to about_us.
    'about_us': {
      init: function() {
        // JavaScript to be fired on the about us page
      }
    }
  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
