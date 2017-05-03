document.addEventListener('DOMContentLoaded', function(){

	$('#technology').click(function(){
		$.scrollTo($('#technology-section'),1000)
	});

	$('#ourWork').click(function(){
		$.scrollTo($('#ourWork-section'),1000)
	});

	$('#aboutUs').click(function(){
		$.scrollTo($('#aboutUs-section'),1000)
	});

	$('#contact').click(function(){
		$.scrollTo($('#aboutUs-section'),1000)
	});

	$('.img').click(function() {
		$('body').addClass('gallery-open');
		$('html, body').css({overflow: 'hidden', height: '100%'});
		$('.gallery').css({ position: 'absolute', zIndex : '99'});
		$(this).css({border : "1px solid red", maxWidth: '100%',flexBasis :'100%', order: '-1'});


		
	});


	// $('.hamburger').click(function(){
 //       $('.nav-container').toggleClass('open-menu');
 //   });


	
});