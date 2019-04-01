$(function() {
	var element = document.querySelector('.bg_block');
	var opts = {
		reset: true,
		scale: 1.2,
		// maxTilt: 80,
		// perspective: 300,
		maxTilt: 30,
		perspective: 150,
		gyroscopeMinAngleX: -15,
		gyroscopeMaxAngleX:  15,
		gyroscopeMinAngleY: 30,
		gyroscopeMaxAngleY:  65,
		gyroscope: true
	};

	VanillaTilt.init(element, opts);

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		$('.content_block').swipe({
			swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
				if ((direction == 'right' || direction == 'left')  && distance >= 150) {
					$('.logo.active').trigger('click');
				}
			}
		});
	} else {
		$(document).on('mouseup touchend', function(e) {
			if ($(e.target).closest('.content_block, .footer_block').length) return;

			$('.logo.active').trigger('click');

			e.stopPropagation();
		});
	}

	$(document).on('click', '.logo.active', function(e) {
		VanillaTilt.init(element, opts);

		$('.logo').removeClass('active');
		$('.bg_block').removeClass('blur');
		$('.content_block').removeClass('show');
		$('.header_block, .footer_block').removeClass('scroll');
	});

	$('.bg_block').on('click', function(e) {
		element.vanillaTilt.destroy();

		$('.logo').addClass('active');
		$('.bg_block').addClass('blur');
		$('.content_block').addClass('show');
		$('.header_block, .footer_block').addClass('scroll');
	});

	$(window).on('scroll', function(e) {
		var top = $(this).scrollTop();

		$('.content_block').css('background-image', 'linear-gradient(' + (30 + top/50) + 'deg, #003DA6, #FFFFFF, #003DA6, #FFFFFF, #003DA6, #FFFFFF)')
	});
});