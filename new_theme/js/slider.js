(function ($, Drupal) {
    $(document).ready(function() {
      $('.slider-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 0,
        Infinite:true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow:false
    });

    });
  })(jQuery, Drupal);
