$(function() {

  $('.slider__gallery-desktop').owlCarousel({
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
		autoplayHoverPause: true,
		dotClass: 'slider__dot',
    dotsClass: 'slider__dots',
    loop: true,
  });
  $('.slider__gallery-mobile').owlCarousel({
		nav: false,
    dots: true,
    items: 1,
		dotClass: 'slider__dot',
		dotsClass: 'slider__dots',
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    loop: true,
  });

});
