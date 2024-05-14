export default class BannerHome {
    constructor() {
        jQuery.noConflict();
        (function ($) {
            $(document).ready(function () {
                $('.banner-home').addClass('banner-slick').slick({
                    dots: true,
                    arrows: true,
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


        jQuery.noConflict();
        (function ($) {
            $(document).ready(function () {
                $('.banner-home-mobile').addClass('banner-mobile-slick').slick({
                    dots: true,
                    arrows: true,
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




