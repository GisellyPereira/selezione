export default class CardsHome {
    constructor() {
        jQuery.noConflict();
        (function ($) {
            $(document).ready(function () {
                $('.card-slide').addClass('cards-slick').slick({
                    dots: true,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 1035,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                        },
                        {
                            breakpoint: 700,
                            settings: {
                                arrows: false,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                autoplay: true,
                            }
                        }
                    ]
                });
            });
        })(jQuery);
    }
}
