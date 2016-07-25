//= require vendor/jquery
//= require vendor/modernizr-2.8.3.min
//= require vendor/owl.carousel
//= require vendor/slick
//= require vendor/jquery.magnific-popup
//= require vendor/hoverIntent




var app = {

    initialize: function(){
        this.initMessage();
		this.initSlickCarousel();
        this.initOwlCarousel();
		this.initMagnificPopup();
		this.initNavControls();
		
        
    },
    
	initMessage: function(){
		var showText = function (target, message, index, interval) {   
		  if (index < message.length) {
		    $(target).append(message[index++]);
		    setTimeout(function () { showText(target, message, index, interval); }, interval);
			
		  }
		}
		

		  showText("#msg", "June theme is LEAD A HORSE TO WATER!!", 0, 50);   


	},
	
	initSlickCarousel: function () {
   	   $('.slider-for').slick({
   	     slidesToShow: 4,
   	     slidesToScroll: 1,
  	     arrows: false,
   	     asNavFor: '.slider-nav',
   	     dots: false,
		   
		   responsive: [
		      {
		        breakpoint: 650,
		        settings: {
		          slidesToShow: 2,
		          slidesToScroll: 1,

		        }
		      },
			  
		      {
		        breakpoint: 380,
		        settings: {
		          slidesToShow: 1,
		          slidesToScroll: 1,

		        }
		      }
		    ]
		   
   	   });

	   
  	   $('.slider-nav').slick({
  	     slidesToShow: 4,
  	     slidesToScroll: 1,
  	     asNavFor: '.slider-for',
  	     dots: true,
		   
		   responsive: [
		      {
		        breakpoint: 650,
		        settings: {
		          slidesToShow: 2,
		          slidesToScroll: 1,

		        }
		      },
		      {
		        breakpoint: 380,
		        settings: {
		          slidesToShow: 1,
		          slidesToScroll: 1,

		        }
		      }
		    ]
  	   });
	},
	


    initOwlCarousel: function () {

		
	    $("#hero-container").owlCarousel({
	      items: 1,
		  responsive: true,
		  responsiveBaseWidth: 'span-full',
		  // autoPlay: true,
		  baseClass: 'target-home-carousel',
	      dots: true
	    });
	
		
    },
	
    initMagnificPopup: function () {

		
		$('.popup-contents').magnificPopup({
				type: 'inline',
				preloader: false,
				focus: '#name',

				// When elemened is focused, some mobile browsers in some cases zoom in
				// It looks not nice, so we disable it:
				callbacks: {
					beforeOpen: function() {
						if($(window).width() < 700) {
							this.st.focus = false;
						} else {
							this.st.focus = '#name';
						}
					}
				}
			});
	
		
    },
	
	initNavControls: function () {
		
		var scrollticker; // - don't need to set this in every scroll
		
      	if ($(window).width() <= 640){  
	  		  $('nav').addClass('fixed');
			  
	  		$(".hamburger").on('click',function(){
	  			$('nav.fixed').toggleClass('show-nav');
	  		});
      	}
		
		else {

		$(window).scroll(function() {
		  // Clear Timeout if one is pending
		  if(scrollticker) { window.clearTimeout(scrollticker); scrollticker = null; }
		  // Set Timeout
		  scrollticker=window.setTimeout(function(){
			  
			  if($(window).scrollTop() > 100){
				  $('nav').addClass('fixed');
			  }
			  
			  
			  else{
				  $('nav').removeClass('fixed');
			  }


		  }, 250); // Timeout in msec
		  

		  
		});
		
		
		$(".hamburger").on('click',function(){
			$('nav.fixed').toggleClass('show-nav');
		});
		
		}
	},
	
	
	initSmartScroll: function () {
		
		//https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.7zcvqslb9
		var didScroll;
		// on scroll, let the interval function know the user has scrolled
		$(window).scroll(function(event){
		  didScroll = true;
		});
		// run hasScrolled() and reset didScroll status
		setInterval(function() {
		  if (didScroll) {
		    hasScrolled();
		    didScroll = false;
		  }
		}, 250);
		function hasScrolled() {
		  // do stuff here...
		}
	}


    
};

$(document).ready(function(){
    app.initialize();

    $(window).on("resize", function(){
		this.initNavControls();
		this.initSlickCarousel();
		
    });
	
	$(window).load(function() {
		// Race Conditions
	});

});

