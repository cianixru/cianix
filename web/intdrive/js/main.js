/*
* Запуск foundation
*/
$(document).foundation();


/*
* Запуск scrollToFixed 
*/
$(document).ready(function() {
/* Плавающее правое меню */

  $('.right-mnu_open .menu').scrollToFixed();
/* Зафиксированное главное меню */
    $('.head').scrollToFixed({
        preFixed: function() {
		$(this).css('border-bottom', '1px solid #ccc');
		$(this).css('border-top', '1px solid #fff');
		// HEAD
		$("head").append("<link rel=\"stylesheet\" id=\"stikytopbar\"  type=\"text/css\" href=\"/css/topbar.css\" \/>");
		},
        postFixed: function() {  
		$(this).css('border-bottom', '0');
		$(this).css('border-top', '0');
		// HEAD
		$("#stikytopbar").remove();
		}
    });
	
	 $('.arrs-btn-blk').scrollToFixed({
        marginTop: $('.head').outerHeight() + 0,
        limit: function() {
            var limit = $('footer').offset().top - $('.arrs-btn-blk').outerHeight(true) - 0;
            return limit;
        },
        zIndex: 999,
    });
});


/* 
* Настройка всплавающих окон fancyBox
*/
$(document).ready(function() {
$(".select-region-wnd")
    .attr('rel', 'gallery')
    .fancybox({
   				padding: 0,
				openEffect : 'elastic',
				openSpeed  : 350,
				closeEffect : 'elastic',
				closeSpeed  : 450,
				'speedIn'		:	600, 
				'speedOut'		:	200, 
				'overlayShow'	:	false,
			helpers : {
				overlay : {
									css : 
									{
										'background' : 'rgba(0,0,0,0.7)',
									}
								}
						  }
    });
// Открыть окно при загрузке страницы
/*
*	$(".select-region-wnd").eq(0).trigger('click'); 
*/
});

$(document).ready(function() {
$(".select-region-wnd2")
    .attr('rel', 'gallery')
    .fancybox({
   				padding: 0,
				openEffect : 'fade',
				openSpeed  : 200,
				closeEffect : 'fade',
				closeSpeed  : 200,
				'overlayShow'	:	false,
			helpers : {
				overlay : {
									css : 
									{
										'background' : 'rgba(0,0,0,0.7)',
									}
								}
						  }
    });
 
});

$(document).ready(function() {
	$(".cat-img-thumb").fancybox({
		padding: 0,
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			overlay	: {
				css : 
						{
							'background' : 'rgba(0,0,0,0.7)',
						}
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});


/*
* Запуск owl-carousel
*/
$(document).ready(function(){
	var owl = $('.cars-compare-tbl__slider');
	owl.owlCarousel(
	{
    loop:true,
    items:1,
	touchDrag: false,
	responsive:		{
	    650:  {items:2},
	    780:  {items:3},
		1200: {items:3},
        1400: {items:3},
					}
  }
  );
$('.next_btn').click(function() {owl.trigger('next.owl.carousel');})
$('.prev_btn').click(function() {owl.trigger('prev.owl.carousel');})
});