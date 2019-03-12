$(function() {
	var element = document.querySelector('.bg_block');

	VanillaTilt.init(element, {
		reset: true,
		scale: 1.2,
		// maxTilt: 80,
		// perspective: 300,
		maxTilt: 30,
		perspective: 150,
		gyroscopeMinAngleX: -15,
		gyroscopeMaxAngleX:  15,
		gyroscopeMinAngleY: -15,
		gyroscopeMaxAngleY:  15,
		gyroscope: true
	});

	$(document).on('mouseup touchend', function(e) {
		if ($(e.target).closest('.content_block, .footer_block').length) return;

		$('.logo.active').trigger('click');

		e.stopPropagation();
	});

	$(document).on('click', '.logo.active', function(e) {
		$('.logo').removeClass('active');
		$('.bg_block').removeClass('blur');
		$('.content_block').removeClass('show');
		$('.footer_block').removeClass('scroll');
	});

	$('.bg_block').on('click', function(e) {
		$('.logo').addClass('active');
		$('.bg_block').addClass('blur');
		$('.content_block').addClass('show');
		$('.footer_block').addClass('scroll');
	});
});