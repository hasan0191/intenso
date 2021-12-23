$(document).ready(function(){
		 
	    $('.dropdown > a').click(function(){
			$(this).parent().siblings().find('.mega-menu').fadeOut(300);
			$(this).next('.mega-menu').stop(true, false, true).fadeToggle(300);
			return false;
		});

		$('.cartdropdown > a').click(function(){
			$(this).parent().siblings().find('.cart-area').fadeOut(300);
			$(this).next('.cart-area').stop(true, false, true).fadeToggle(300);
			return false;
		});


		$('.big-slide').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplaySpeed:1000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:1
		        },
		        1000:{
		            items:1
		        }
		    }
		});


		$('.fproduct-slide').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    bullet:true,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplaySpeed:1000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
		});

		$('.brand-slide').owlCarousel({
		    loop:true,
		    margin:10,
		    nav:false,
		    bullet:true,
		    autoplay:true,
		    autoplayTimeout:2000,
		    autoplaySpeed:1000,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:6
		        }
		    }
		});



});





		