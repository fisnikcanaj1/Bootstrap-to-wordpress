$(function() {

	//cache the window object

	var $window = $(window);

	$('section[data-type="background"]').each(function(){

		var $bgobj = $(this);

		$(window).scroll(function() {

			var yPos = -($window.scrollTop() / $bgobj.data('speed'));

			var cords = '50%' + yPos + 'px';

			$bgobj.css({ backgroundPosition: cords });
		});

	});
	
});