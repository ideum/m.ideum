/* -- homepage.js -- */

$(document).ready(function(){
	$('#submitButton').bind('click touchend', function(e){
		var email = $('#newsletterSignup').val().trim();
		var regex = /[\w\d._%+-]+@[\w|\d-]+\.[\w]{2,4}\b/g;
		if (regex.test(email)){
			console.log('matches');
		}
		else{
			console.log('bad match');
		}
	});	
});