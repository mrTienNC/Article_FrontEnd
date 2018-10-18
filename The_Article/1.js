$(document).ready(function(){

	$('.iconscroll').click(function(){
		var offset = 2;
		$('html,body').animate({
			scrollTop: $('#main-demo').offset().top + offset
		},2000);
	});
})