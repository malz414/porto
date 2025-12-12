 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

 $(document).ready(function() {
	$('.image-link').magnificPopup({type:'image'});
  });

 function initComparisons() {
	var x, i;
	/* Find all elements with an "overlay" class: */
	x = document.getElementsByClassName("img-comp-overlay");
	for (i = 0; i < x.length; i++) {
	  /* Once for each "overlay" element:
	  pass the "overlay" element as a parameter when executing the compareImages function: */
	  compareImages(x[i]);
	}
	function compareImages(img) {
	  var slider, img, clicked = 0, w, h;
	  /* Get the width and height of the img element */
	  w = img.offsetWidth;
	  h = img.offsetHeight;
	  /* Set the width of the img element to 50%: */
	  img.style.width = (w / 2) + "px";
	  /* Create slider: */
	  slider = document.createElement("DIV");
	  slider.setAttribute("class", "img-comp-slider");
	  /* Insert slider */
	  img.parentElement.insertBefore(slider, img);
	  /* Position the slider in the middle: */
	  slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
	  slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
	  /* Execute a function when the mouse button is pressed: */
	  slider.addEventListener("mousedown", slideReady);
	  /* And another function when the mouse button is released: */
	  window.addEventListener("mouseup", slideFinish);
	  /* Or touched (for touch screens: */
	  slider.addEventListener("touchstart", slideReady);
	   /* And released (for touch screens: */
	  window.addEventListener("touchend", slideFinish);
	  function slideReady(e) {
		/* Prevent any other actions that may occur when moving over the image: */
		e.preventDefault();
		/* The slider is now clicked and ready to move: */
		clicked = 1;
		/* Execute a function when the slider is moved: */
		window.addEventListener("mousemove", slideMove);
		window.addEventListener("touchmove", slideMove);
	  }
	  function slideFinish() {
		/* The slider is no longer clicked: */
		clicked = 0;
	  }
	  function slideMove(e) {
		var pos;
		/* If the slider is no longer clicked, exit this function: */
		if (clicked == 0) return false;
		/* Get the cursor's x position: */
		pos = getCursorPos(e)
		/* Prevent the slider from being positioned outside the image: */
		if (pos < 0) pos = 0;
		if (pos > w) pos = w;
		/* Execute a function that will resize the overlay image according to the cursor: */
		slide(pos);
	  }
	  function getCursorPos(e) {
		var a, x = 0;
		e = (e.changedTouches) ? e.changedTouches[0] : e;
		/* Get the x positions of the image: */
		a = img.getBoundingClientRect();
		/* Calculate the cursor's x coordinate, relative to the image: */
		x = e.pageX - a.left;
		/* Consider any page scrolling: */
		x = x - window.pageXOffset;
		return x;
	  }
	  function slide(x) {
		/* Resize the image: */
		img.style.width = x + "px";
		/* Position the slider: */
		slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
	  }
	}
  } 

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
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
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });






  const elements = document.querySelectorAll('.scramble');
let interval;

const randomInt = max => Math.floor(Math.random() * max);
const randomFromArray = array => array[randomInt(array.length)];

const scrambleText = text => {
  const chars = '*?><[]&@#)(.%$-_:/;?!'.split('');
  return text
    .split('')
    .map(x => randomInt(3) > 1 ? randomFromArray(chars) : x)
    .join('');
}

elements.forEach(element => {
	const originalText = element.querySelector('.words').innerText;
  
	element.addEventListener('mouseover', () => {
	  interval = setInterval(() => {
		element.querySelector('.words').innerText = scrambleText(originalText);
	  }, 100);
	});
	element.addEventListener("touchstart", () => {
		interval = setInterval(() => {
			element.querySelector('.words').innerText = scrambleText(originalText);
		  }, 100);
		});


   window.addEventListener("touchend", () => {
	clearInterval(interval);
	element.querySelector('.words').innerText = originalText;
  });
	element.addEventListener('mouseout', () => {
	  clearInterval(interval);
	  element.querySelector('.words').innerText = originalText;
	});
  });

  
}


)(jQuery);

