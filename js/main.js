$(function(){
    // OWL-CAROUSEL
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        navText: ['&#8678;', '&#8680;'],
        // autoplay: true,
        autoplayTimeout: 6000,
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        responsive: {
            767: {
                nav: true
            }
        }
    });

    // BURGER
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

