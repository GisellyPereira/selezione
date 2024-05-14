export default class SlideBenefits {
    constructor() {
        jQuery.noConflict();
        (function ($) {
            console.log('SlideBenefits module');
            $(document).ready(function () {
                $('.slide-benefits').addClass('slide-benefits-slick').slick({
                    dots: false,
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


