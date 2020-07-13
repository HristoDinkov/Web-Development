$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50;
    /*-------------------------------------------------------------------------------
	  Navbar
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
    function navbarFixed(){
        if ( $('.header_area').length ){
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();


  //------- mailchimp --------//
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();


  $('.img-gal').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
  });



  if ($('.blogCarousel').length) {
    $('.blogCarousel').owlCarousel({
        loop: false,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: 2500,
        smartSpeed: 1500,
        dots: false,
        responsiveClass: true,
        navText : ["<div class='left-arrow'><i class='ti-angle-left'></i></div>","<div class='right-arrow'><i class='ti-angle-right'></i></div>"],
        responsive:{
          0:{
              items:1
          },
          1000:{
              items:2
          }
      }
    })
  }

  function makeTimer() {

  		var endTime = new Date(2019, 4, 10, 10);
  		endTime = (Date.parse(endTime) / 1000);

  		var now = new Date();
  		now = (Date.parse(now) / 1000);

  		var timeLeft = endTime - now;
		if(timeLeft < 0) timeLeft = 0;

  		var days = Math.floor(timeLeft / 86400);
  		var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
  		var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
  		var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

  		if (hours < "10") { hours = "0" + hours; }
  		if (minutes < "10") { minutes = "0" + minutes; }
  		if (seconds < "10") { seconds = "0" + seconds; }

  		$("#days").html(days + "<span>Дена</span>");
  		$("#hours").html(hours + "<span>Часа</span>");
  		$("#minutes").html(minutes + "<span>Минути</span>");
  		$("#seconds").html(seconds + "<span>Секунди</span>");

  }

  setInterval(function() { makeTimer(); }, 1000);

});
