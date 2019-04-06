$(function() {
	var element = document.querySelector('.bg_block');
	var is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	var opts = {
		reset: true,
		scale: 1.2,
		// maxTilt: 80,
		// perspective: 300,
		maxTilt: 30,
		perspective: 150
	};

	if (is_mobile) {
		opts['gyroscopeMinAngleX'] = -15;
		opts['gyroscopeMaxAngleX'] = 15;
		opts['gyroscopeMinAngleY'] = 30;
		opts['gyroscopeMaxAngleY'] = 65;
		opts['gyroscope'] = true;
	}

	VanillaTilt.init(element, opts);

	if (is_mobile) {
		$('.content_block').swipe({
			swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
				if ((direction == 'right' || direction == 'left')  && distance >= 150) {
					$('.logo.active').trigger('click');
					$('.debug').text(distance);
				}
			}
		});
	} else {
		$(document).on('mouseup touchend', function(e) {
			if ($(e.target).closest('.content_inner').length) return;

			$('.logo.active').trigger('click');

			e.stopPropagation();
		});
	}

	$(document).on('click', '.logo.active', function(e) {
		VanillaTilt.init(element, opts);

		$('.logo').removeClass('active');
		$('.bg_block').removeClass('blur');
		$('.content_block').removeClass('show');
		$('.footer_block').removeClass('scroll');
	});

	$('.bg_block').on('click', function(e) {
		element.vanillaTilt.destroy();

		$('.logo').addClass('active');
		$('.bg_block').addClass('blur');
		$('.content_block').addClass('show');
		$('.footer_block').addClass('scroll');
	});
});