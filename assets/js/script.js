(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    

    
    /* Testimonials Itesm Slide
    ============================*/



    /* Counter Up Active
    ============================*/
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });

    /* Isotope Active
    ============================*/


      /* Isotope Menu Active
    ============================*/


    /* Magnific Image Popup
    ============================*/
    $('.gallery').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
    
    /* Magnific Video Popup
    ============================*/
    $('.video-popup').magnificPopup({
      type: 'iframe'
    });


  });


  jQuery(window).load(function () {

    /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 326) {
        $('.nav-head').addClass("sticky");
      } else {
        $('.nav-head').removeClass("sticky");
      }
    });
  });
}(jQuery));
