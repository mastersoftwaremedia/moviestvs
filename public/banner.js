$(document).ready(function(){
	$('#top_movies .row .post').hover(
		function(){
			$(this).animate({marginTop:"-=0.5%"},500);
		},
		function(){
			$(this).animate({marginTop:"0%"},500);
		}
	);
	
	$('#top_shows .row .post').hover(
		function(){
			$(this).animate({marginTop:"-=0.5%"},500);
		},
		function(){
			$(this).animate({marginTop:"0%"},500);
		}
	);	
});