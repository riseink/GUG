//= require vendor/jquery
//= require vendor/modernizr-2.8.3.min
//= require vendor/owl.carousel
//= require vendor/slick




var app = {

    initialize: function(){
        this.initMessage();
		this.initSlickCarousel();
        this.initOwlCarousel();
		
        
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
		   
   	   });

	   
  	   $('.slider-nav').slick({
  	     slidesToShow: 4,
  	     slidesToScroll: 1,
  	     asNavFor: '.slider-for',
  	     dots: true,
  	   });
	},
	


    initOwlCarousel: function () {

		
	    $("#hero-container").owlCarousel({
	      items: 1,
		  responsive: true,
		  responsiveBaseWidth: 'span-full',
		  autoPlay: true,
		  baseClass: 'target-home-carousel',
	      dots: true
	    });
	
		
    }


    
};

$(document).ready(function(){
    app.initialize();

    $(window).on("resize", function(){
		// RESIZE
      
    });
	
	$(window).load(function() {
		// Race Conditions
	});

});

