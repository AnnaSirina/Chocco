$('accordeon-menu__item').click(function () {
	$('accordeon-menu__item.active').removeClass('active');
	$(this).addClass('active');
});
