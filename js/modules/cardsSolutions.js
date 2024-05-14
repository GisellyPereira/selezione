export default class CardsSolutions {
    constructor() {
        jQuery(document).ready(function($) {
            function checkWidth() {
                var windowSize = $(window).width();
                if (windowSize <= 700) {
                    $('.container-solutions').removeClass('container-solutions').addClass('container-solutions-mobile');
                    $('.container-solutions-mobile').addClass('cards-slick').slick({
                        dots: true,
                        arrows: false,
                        autoplay: false,
                        autoplaySpeed: 3000,
                        infinite: true,
                        speed: 500,
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    });
                } else {
                    $('.container-solutions-mobile').slick('unslick');
                    $('.container-solutions-mobile').removeClass('container-solutions-mobile').addClass('container-solutions');
                }
            }
            checkWidth();
            $(window).resize(checkWidth);
        });
    }
}
