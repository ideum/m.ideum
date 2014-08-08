/* jshint jquery:true */

jQuery(function ($) {
  'use strict';

  $(document).foundation({
    orbit: {
      animation: 'slide',
      timer_show_progress_bar: false,
      timer_speed: 15000, // slow it way the heck down
      animation_speed: 5500,
      resume_on_mouseout: true,
      pause_on_hover: false,
      slide_number: false,
      navigation_arrows: false,
      bullets: true,
      swipe: true,
      circular: true
    }
  });

	$('#submitButton').bind('click touchend', function() {
		var email = $('#newsletterSignup').val().trim();
		var regex = /[\w\d._%+-]+@[\w|\d-]+\.[\w]{2,4}\b/g;
		if (regex.test(email)) {
			console.log('matches');
		} else {
			console.log('bad match');
		}
	});

  var tableNames = {
    46: {name: 'Platform 45 Drafting', img: '/img/drafting/drop-downs/photo_drafting_46.png'},
    55: {name: 'Platform 55 Drafting', img: '/img/drafting/drop-downs/photo_drafting_55.png'},
    65: {name: 'Platform 65 Drafting', img: '/img/drafting/drop-downs/photo_drafting_65.png'}
  };

  $('.superSelect').bind('change', function() {
    var which = $('select', this).val();

    $('.number').text(which);
    $('.tableName').text(tableNames[which].name);
    $('.draftingImage').attr('src', tableNames[which].img);
  });
});
