jQuery(function ($) {
	$('.double-click-open').dblclick(function () {
		return false;
	}).dblclick(function () {
		window.location = this.href;
		return false;
	});
});

/* from https://codepen.io/ZurabShivarbidze/pen/YwyBZM */
$(function () {
	$('.material-card > .mc-btn-action').click(function () {
		var card = $(this).parent('.material-card');
		var icon = $(this).children('i');
		icon.addClass('fa-spin-fast');

		if (card.hasClass('mc-active')) {
			card.removeClass('mc-active');

			window.setTimeout(function () {
				icon
					.removeClass('fa-arrow-left')
					.removeClass('fa-spin-fast')
					.addClass('fa-bars');

			}, 800);
		} else {
			card.addClass('mc-active');

			window.setTimeout(function () {
				icon
					.removeClass('fa-bars')
					.removeClass('fa-spin-fast')
					.addClass('fa-arrow-left');

			}, 800);
		}
	});
});
