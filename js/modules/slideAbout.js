export default class SlideAbout {
    constructor() {
        jQuery.noConflict();
        (function ($) {
            $(document).ready(function () {
                $('.slide-about-mobile').addClass('about-slick').slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    cssEase: 'linear'
                });
            });
        })(jQuery);

    }
}




