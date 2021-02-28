$(function(){
	// Кнопка "Вверх"
	var btn = $('.btn-scroll-up');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, '300');
	});

	// Кнопка-гамбургер
	$('.menu-open').click(function(e) {
		e.preventDefault();
		$('ul.menu').toggleClass('show');
	});

	$('ul.menu li a').click(function(e) {  // при клике на ссылку закрыть меню
		e.preventDefault();
		$('ul.menu-open').toggleClass('show');
	});

	// Закладки на странице "О стране"
	$(".about-form").on("click", ".about-tab", function() {
		// console.log($(this).index());
		$(".about-form .about-tab").removeClass("about-tab__active");
		$(this).addClass("about-tab__active");
	});



	// Плавная прокрутка
	// 30 минут 30 секунд




//	$('.go_to').click( function(){
//		var scroll_el = $(this).attr('href');
//		if ($(scroll_el).length != 0) {
//			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1500);
//		}
//		return false;
//	});





	// $('.gallery-slider__row').slick({
	// 	centerMode: true,
	// 	centerPadding: '60px',
	// 	slidesToShow: 5,
	// 	responsive: [
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				arrows: false,
	// 				centerMode: true,
	// 				centerPadding: '40px',
	// 				slidesToShow: 3
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				arrows: false,
	// 				centerMode: true,
	// 				centerPadding: '40px',
	// 				slidesToShow: 1
	// 			}
	// 		}
	// 	]
	// });


//	при клике оставаться на том же месте    ?????????
//	$('.car-slider__href').click(function(e) {
//		e.preventDefault();
//	});

});

