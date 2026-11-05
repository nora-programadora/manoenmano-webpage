;(function () {
	
	'use strict';

	// Lugares de Fundadora disponibles. Se actualiza manualmente por ahora.
	var SPOTS_LEFT = 42;

	var owlCarousel = function(){

        new WOW().init();

        $('.owl-carousel').owlCarousel({
            items : 4,
            loop  : true,
            margin : 170,
            center : true,
            smartSpeed :900,
            nav:true,
            navText: [
                "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                "<i class='fa carousel-right-arrow fa-chevron-right'></i>"
            ],responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:1,
                    nav:true,
                    margin : 120,
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true,
                    autoplay: true,
                    autoplayTimeout: 1500,
                    navText: [
                        "<i class='fa carousel-left-arrow fa-chevron-left'></i>",
                        "<i class='fa carousel-right-arrow fa-chevron-right'></i>"
                    ],
                }
            }
        });

	};

    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: ($(this).offset().top - $('.site-header').outerHeight()) + 'px'
        }, 'slow');
        return this; // for chaining...
    }

	$(function(){
		owlCarousel();

		$('#spots-left').text(SPOTS_LEFT);

		// Sombra y logo compacto al hacer scroll
		var $header = $('.site-header');
		var onScroll = function() {
			$header.toggleClass('is-scrolled', $(window).scrollTop() > 10);
		};
		$(window).on('scroll', onScroll);
		onScroll();

		// En mobile, cerrar el menú al elegir una opción
		$('.site-header .nav-link').on('click', function() {
			var $collapse = $('#navbarSupportedContent');
			if ($collapse.hasClass('show')) { $collapse.collapse('hide'); }
		});
	});


}());