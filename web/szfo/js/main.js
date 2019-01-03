// Меню-фильтр новостей на главной
/////////////////////////////////////
$(function() {
	$('ul.newsNavigation li:first').addClass ('active');
	$('ul.nws_cnts li:first').css ('display', 'block');
	$('ul.newsNavigation').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
			.parents('.mn_news').find('ul.nws_cnts li').hide()
			.eq($(this).index()).show();
	})
})
	
// Карусель партнеров
/////////////////////////////////////
var owl = $('.mp_top_slider');
owl.owlCarousel({
	items:1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    smartSpeed:250,
	loop:true,
	autoplay: true,
	autoplayTimeout: 5200,
	dots: true,
	autoplayHoverPause: false,
});

$('.sldr_btn_r').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.sldr_btn_l').click(function() {
    owl.trigger('prev.owl.carousel');
})

var owl2 = $('.mp_partners');
owl2.owlCarousel(
{
	autoHeight:true,
    items:4,
    smartSpeed:350,
	loop:true,
	autoplay: true,
	autoplayTimeout: 2500,
	dots: false,
	autoplayHoverPause: false,
    responsive:{
	    1200:
		{ items:5 }
}
});

var owl3 = $('#govs_slider');
owl3.owlCarousel(
{   
	autoHeight:true,
    items:1,
    smartSpeed:350,
	loop:true,
	autoplay: false,
	autoplayTimeout: 2500,
	dots: true,
	autoplayHoverPause: false,

});
$('.nextbtn').click(function() {
    owl3.trigger('next.owl.carousel');
})
$('.prevbtn').click(function() {
    owl3.trigger('prev.owl.carousel');
})

// Гугл карта в контактах
/////////////////////////////////////
$(document).ready(function () {
	if ($('#gmap').length) 
		$('#gmap').gmap();
});
(function ($) {
    var GLOBAL_current_custom_modal;
	$.fn.team = function() {
		var target = $(this),
			blocks = target.find('.content_top_block'),
			links = blocks.find('.text .button_block a'),
			backLinks = blocks.find('a.back');

		links.bind('click', function(e) {
			e.preventDefault();
		
			showInfo($(this));
		});
		
		backLinks.bind('click', function(e) {
			e.preventDefault();
		
			hideInfo($(this));
		});

		function showInfo(link) {
			var block = link.parent().parent().parent().find('div.info');
		
			block.fadeIn(500);
		}
		
		function hideInfo(link) {
			var block = link.parent();
			
			link.parent().fadeOut(500);
		}
	};
	
	$.fn.gmap = function() {				  
			var centerX = 59.987458,
				centerY = 30.302090,
				markerX = 59.987452,
				markerY = 30.308135;
	
		var MY_MAPTYPE_ID = 'contacts',
			mapOptions = {
				zoom: 16,
				center: new google.maps.LatLng(centerX, centerY),
				disableDefaultUI: true,
				scrollwheel: false,
				mapTypeControlOptions: {
					mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
				},
				mapTypeId: MY_MAPTYPE_ID
			},	
			
			map = new google.maps.Map(document.getElementById( $(this).attr('id') ), mapOptions),
			
			stylez = [{
				featureType: 'all',
				elementType: 'all',
				stylers: [
					{ visibility: 'on' },
					{ hue: '#000' },
					{ saturation: -100 },
					{ gamma: 1 },
					{ lightness: 8 }
				]
			}],

			jayzMapType = new google.maps.StyledMapType(stylez);
		map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);
		var marker1 = new google.maps.Marker({
			map: map,
			position: new google.maps.LatLng(markerX, markerY),
			icon: new google.maps.MarkerImage('http://waterdoctor.bio360.ru/i/icon_map.png',
				new google.maps.Size(48, 52),
				new google.maps.Point(0,0),
				new google.maps.Point(20, 52))
		});
	};
})(jQuery);