
$(document).ready(function() {
	$('.js-menu__btn').click(function () {
	  $(this).toggleClass('is-active');
	  $('.js-menu').toggleClass('is-active');
	  $('.js-menu__cont').toggleClass('is-onanimation');
	  $('.js-menu__list ul li').hide();
	  $('.js-menu__list ul li').each(function(i) {
	 	 $(this).delay(80 * i).fadeIn(500);
	  });
	  return false;
	});
});