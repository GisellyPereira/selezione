export default class Guarantee {
    constructor() {
        jQuery.noConflict();
        (function ($) {
            $(document).ready(function () {
                $('.guarantee-features').addClass('guarantee-slick').slick({
                    dots: true,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
            });
        })(jQuery);

        jQuery.noConflict();
        (function ($) {
            $(document).ready(function () {
                $('.guarantee-features-mobile').addClass('mobile-guarantee-slick').slick({
                    dots: true,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                });
            });
        })(jQuery);
    }
}

