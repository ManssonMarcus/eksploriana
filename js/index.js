$(document).ready(function(){
	$('.startTestButton').click(function() {
		console.log("start button clicked");
    	$('.questionBox').animate({opacity: '0.1'}, "slow");
	});
});