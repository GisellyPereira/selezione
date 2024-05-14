export default class NumbersMobile {
    constructor() {
        console.log('oiii')
        jQuery.noConflict();
        (function ($) {
            $(document).ready(function () {
                $('.content-numbers-mobile').addClass('number-slick').slick({
                    dots: true,
                    arrows: true,
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

