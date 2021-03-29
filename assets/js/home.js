var preloader = document.getElementById('loading');
function myFunction() {
	preloader.style.display='none';
}






(function ($) {


  // skillbar

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});

   
// magnificPopup
	$('.popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true 
		},
	});

// mixitup
	var mixer = mixitup('.filter');

// Scroll Up
    $('#scroll-up a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

//Wow
    new WOW().init();



//   Counter up 

$('.counter').counterUp();

// sticky

jQuery(window).load(function () {

    /* Sticky Header
    ============================*/
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 688) {
        $('.nav-head').addClass("sticky");
      } else {
        $('.nav-head').removeClass("sticky");
      }
    });
  });
	

}(jQuery));




 