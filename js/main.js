$(function () {
	$(".menu > li > a").click(function () {
		jQuery("html,body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 1000);
	});
});