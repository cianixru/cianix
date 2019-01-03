// Responsive
function isResponsive() {
    if (window.matchMedia != undefined) {
	return (window.matchMedia("(max-width: 759px)").matches);
    }
    return true;
}

function init() {
    initScrollingH();
    initNavigation();
    initSocials();

    // On enlève le D&D des images
    $(document).bind("dragstart", function (e) {
	e.preventDefault();
	return false;
    });
    $('body').bind('touchmove', function (ev) {
	ev.pageY = 0;
    });
}

var Share = {
    twitter: function (b, title) {
	window.open("https://twitter.com/intent/tweet?source=webclient&url=" + b + "&via=_cyrilmasson&text=" + title, "_blank", "width=575, height=400");
    },
    facebook: function (b) {
	window.open("https://www.facebook.com/sharer/sharer.php?u=" + b, "_blank", "width=640, height=470");
    },
    googlePlus: function (b) {
	window.open('https://plus.google.com/share?url=' + b, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
    }
};

function initNavigation() {

    var onNav = function () {
	if ($('nav').is(':visible')) {
	    $('nav').hide();
	} else {
	    $('nav').show();
	}
    }

    $('.btnNav').bind('click', onNav).bind('tap', onNav);

    // On mets l'image de fond sous le menu
    var BG_WIDTH = 327;
    if ($('nav').length > 0) {

	var $li = $('.menu li.current-menu-item');
	if ($li.length > 0) {
	    var pos = $('nav').position().left + $li.position().left + ($li.outerWidth(true) >> 1) - (BG_WIDTH >> 1);
	    $('header').css('background-position', pos + 'px 0');
	}

	// Animation du trait
	$('.menu li:not(.current-menu-item) a').mouseover(function () {
	    var w = $(this).innerWidth();
	    TweenMax.to($(this), 0.45, {
		css: {
		    backgroundSize: w + 'px 7px'
		}
	    });
	}).mouseout(function () {
	    TweenLite.killTweensOf($(this));
	    TweenMax.to($(this), 0.2, {
		css: {
		    backgroundSize: '0px 7px'
		}
	    });
	});
    }

    TweenMax.to($('#loader div'), 1.0, {
	css: {
	    rotation: 360
	},
	repeat: -1,
	repeatDelay: 0.5
    });
}

function onResize() {
    resizeLignes();
}

function resizeLignes() {
    var maxWidth = -1;
    $('.ligne33').each(function () {
	var w = 0;
	$(this).find('img').width(function () {
	    w += $(this).width();
	})
	if (w > maxWidth)
	    maxWidth = w;
    })
}

function getScrollX() {
    return (window.pageXOffset != null) ? window.pageXOffset : (document.documentElement.scrollLeft != null) ? document.documentElement.scrollLeft : document.body.scrollLeft;
}
function getScrollY() {
    return (window.pageYOffset != null) ? window.pageYOffset : (document.documentElement.scrollTop != null) ? document.documentElement.scrollTop : document.body.scrollTop;
}

// Mousescroll H
function initScrollingH() {
    if (!isResponsive()) {
	$(window).mousewheel(function (event, delta) {
	    if (Math.abs(delta) >= 20)
		delta /= 20;

	    event.preventDefault();
	    var curScroll = {
		x: getScrollX(),
		y: getScrollY()
	    };
	    TweenMax.to(curScroll, 0.5, {
		x: curScroll.x - (delta * 500),
		onUpdate: function () {
		    window.scrollTo(curScroll.x, curScroll.y);
		}
	    });
	});
    }
}

function initSocials() {
    $('div.share').each(function (e) {
	var $t = $(this);
	if ($t.hasClass('post-to')) {
	    $t.unbind('click').click(function (e) {
		if ($(this).hasClass('share-fb')) {
		    e.preventDefault();
		    var u = $(this).attr('data-href').split('#!');
		    Share.facebook(u[0]);
		    return false;
		}
		if ($(this).hasClass('share-twitter')) {
		    e.preventDefault();
		    Share.twitter($(this).attr('data-href'), $(this).attr('title'));
		    return false;
		}
		if ($(this).hasClass('share-gplus')) {
		    e.preventDefault();
		    var u = $(this).attr('data-href').split('#!');
		    Share.googlePlus(u[0]);
		    return false;
		}
	    });
	}
    });
}

function hideLoader() {
    var onHideComplete = function () {
	$('#loader').css({
	    visibility: 'hidden'
	});
	TweenMax.to($('#container'), 0.3, {
	    opacity: 1.0
	});
    };
    TweenMax.to($('#loader'), 0.4, {
	opacity: 0.0,
	onComplete: onHideComplete
    });
}

function showLoader() {
    $('#loader').css({
	visibility: 'visible'
    });
    TweenMax.to($('#loader'), 0.4, {
	opacity: 1.0
    });
}