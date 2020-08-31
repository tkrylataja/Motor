'use strict';

(function($){
	$(document).ready(function() {

		// galery
		$('.motel__img').fancybox({
			buttons: [
				"fullScreen",
				"download",
				"thumbs",
				"close"
			],
			animationEffect: "zoom-in-out",
			animationDuration: 900,
			transitionEffect: "circular",
			transitionDuration: 800,
			loop: true,
		});
		
		// galery
		$('.motel__img2').fancybox({
			buttons: [
				"fullScreen",
				"download",
				"thumbs",
				"close"
			],
			animationEffect: "zoom-in-out",
			animationDuration: 900,
			transitionEffect: "circular",
			transitionDuration: 800,
			loop: true,
		});
		// galery
		$('.motel__img3').fancybox({
			buttons: [
				"fullScreen",
				"download",
				"thumbs",
				"close"
			],
			animationEffect: "zoom-in-out",
			animationDuration: 900,
			transitionEffect: "circular",
			transitionDuration: 800,
			loop: true,
    });
    	// galery
		$('.cafe__button').fancybox({
			buttons: [
				"fullScreen",
				"download",
				"thumbs",
				"close"
			],
			animationEffect: "zoom-in-out",
			animationDuration: 900,
			transitionEffect: "circular",
			transitionDuration: 800,
			loop: true,
		});

		
	});
})(jQuery);