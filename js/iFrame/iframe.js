$(document).ready(function() {
	$(".vidplay").magnificPopup({
		type : 'iframe',
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
					  '<div class="mfp-close"></div>'+
					  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
					'</div>', 
		  
			patterns: {
			  youtube: {
				index: 'youtube.com/', 
		  
				id: 'v=', 
		  
				src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
			  },
			  vimeo: {
				index: 'vimeo.com/',
				id: '/',
				src: '//player.vimeo.com/video/%id%?autoplay=1'
			  },
			  gmaps: {
				index: '//maps.google.',
				src: '%id%&output=embed'
			  }

		  
			},
		  
			srcAction: 'iframe_src', 
		  }
		  
	})
})


$(window).scroll(function () { 

    $('.right-circle').css({
       'top' : -($(this).scrollTop()/3)+"px"
    }); 
 
 });

 $('.vertical-menu a').on('click', function() {
	$('.vertical-menu a').removeClass('active');
	  $(this).addClass('active');
	});
	
	function loadXMLDoc(x){
	
	}

	// Thumbnail //

	function myFunction(imgs) {
		var image_source_location
	}