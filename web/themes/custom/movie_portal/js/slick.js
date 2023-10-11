(function ($, Drupal) {
  Drupal.behaviors.mySlickSlider = {
    attach: function (context, settings) {
      // Initialize Slick Slider on the wrapper element.
      $('.view-id-slick_slider.view-display-id-block_1 .view-content').slick({
        dots: true,
        infinite: false,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<span class="Slick-Prev arrow"><i class="lni lni-chevron-left"></i></span>',
        nextArrow: '<span class="Slick-Next arrow"><i class="lni lni-chevron-right"></i></span>',
      });
    }
  };
 
})(jQuery, Drupal);
