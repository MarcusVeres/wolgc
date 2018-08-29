// JavaScript Document


// supersized
jQuery(function($){
	$.supersized({
		
			// Functionality
			slideshow               :   1,			// Slideshow on/off
			autoplay				:	1,			// Slideshow starts playing automatically
			start_slide             :   1,			// Start slide (0 is random)
			stop_loop				:	1,			// Pauses slideshow on last slide
			random					: 	0,			// Randomize slide order (Ignores start slide)
			slide_interval          :   6000,		// Length between transitions
			transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
			transition_speed		:	2000,		// Speed of transition
			new_window				:	1,			// Image links open in new window/tab
			pause_hover             :   0,			// Pause slideshow on hover
			keyboard_nav            :   1,			// Keyboard navigation on/off
			performance				:	2,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
			image_protect			:	1,			// Disables image dragging and right click with Javascript
														
			// Size || Position						   
			min_width		        :   0,			// Min width allowed (in pixels)
			min_height		        :   0,			// Min height allowed (in pixels)
			vertical_center         :   1,			// Vertically center background
			horizontal_center       :   1,			// Horizontally center background
			fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
			fit_portrait         	:   1,			// Portrait images will not exceed browser height
			fit_landscape			:   0,			// Landscape images will not exceed browser width
														
			// Components							
			slide_links				:	'false',	// Individual links for each slide (Options: false, 'number', 'name', 'blank')
			thumb_links				:	1,			// Individual thumb links for each slide
			thumbnail_navigation    :   0,			// Thumbnail navigation
			slides 					:  	[			// Slideshow Images
										{image : 'images/background/1.png', title : '', thumb : '', url : ''},
										{image : 'images/background/2.png', title : '', thumb : '', url : ''}
										]
			
		});
	});


// flexslider
  $(window).load(function() {
    $('.flexslider').flexslider({
		  
		  animation: "fade",              //String: Select your animation type, "fade" or "slide"
          easing: "swing",                //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
          direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
          reverse: false,                 //{NEW} Boolean: Reverse the animation direction
          animationLoop: true,            //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
          smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode 
          startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
          slideshow: true,                //Boolean: Animate slider automatically
          slideshowSpeed: 8000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
          animationSpeed: 2000,           //Integer: Set the speed of animations, in milliseconds
          initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
          randomize: false                //Boolean: Randomize slide order

    });
  });


// top panel
$(document).ready(function() {
	$(".panel-button").click(function(){
		$("#panel").animate({
			height: "130px"
		})
		.animate({
			height: "80px"
		}, "fast");
		$(".panel-button").toggle();
	
	});	
	
   $("#close-button").click(function(){
		$("#panel").animate({
			height: "0"
		}, "fast");
		
	
   });
});


// menu active state
$('a.menu').click(function(){
    $('a.menu').removeClass("active");
    $(this).addClass("active");
});


// site loader
            $(window).load(function() {
                // $('body').css('overflow', 'hidden');
                $('.loader').fadeOut('slow');
            });
			

// mobile-detect
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };