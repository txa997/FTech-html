/*
	Author: themexriver
	Version: 1.0
*/


(function ($) {
"use strict";

// smoooth scroll activation start
const lenis = new Lenis()
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)


// preloader
document.addEventListener("DOMContentLoaded", function () {

	let preloader = document.querySelector("#preloader");

	window.addEventListener('load', function(){

		if (preloader) {
			preloader.classList.add("preloaded");
			setTimeout(function () {
				  preloader.remove();



	  
			  }, 1000 ) ;
		}

		// text-animation
		Splitting();

		// hero-1-animation
		const h1tl = gsap.timeline();

		h1tl.fromTo(".ftc-hero-1-content" , {  opacity: 0, duration: 1 }, { opacity: 1, })
			.from(".ftc-hero-1-content .btn-wrap " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",		duration:1.5, ease: "bounce.out", opacity:0 })
			.from(".ftc-hero-1-content .inner-div " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",
			duration:1.5, ease: "bounce.out", opacity:0 }, "<.3")
			.from(".ftc-hero-1-content .title  " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",duration:1.5, ease: "bounce.out", opacity:0 }, "<.3")
			.from(".ftc-hero-1-content .subtitle  " , {  transform: "rotateX(47deg) translateY(-200px)" , transformOrigin: "50% 0%",duration:1.5, ease: "bounce.out", opacity:0 }, "<.3");


	})

});


function glystickyHeader() {
    var $window = $(window);
    var lastScrollTop = 0;
    var $header = $('.txa_sticky_header');
    var headerHeight = $header.outerHeight() + 30;

    $window.scroll(function () {
      var windowTop = $window.scrollTop();

      if (windowTop >= headerHeight) {
        $header.addClass('txa_sticky');
      } else {
        $header.removeClass('txa_sticky');
        $header.removeClass('txa_sticky_show');
      }

      if ($header.hasClass('txa_sticky')) {
        if (windowTop < lastScrollTop) {
          $header.addClass('txa_sticky_show');
        } else {
          $header.removeClass('txa_sticky_show');
        }
      }

      lastScrollTop = windowTop;
    });
}

glystickyHeader();
  


// mobile-menu-start
if($('.mobile-main-navigation li.dropdown ul').length){
	$('.mobile-main-navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa-solid fa-angle-right"></i></div>');
	$('.mobile-main-navigation li.dropdown .dropdown-btn').on('click', function() {
		$(this).prev('ul').slideToggle(500);
	});
}

$(".dropdown-btn").on("click", function () {
	$(this).toggleClass("toggle-open");
});


// search-popup-start
$('.search_btn_toggle').on('click', function() {
	$('.overlay, .search_1_popup_active').addClass('active');
});
$('.overlay, .search_1_popup_close').on('click', function() {
	$('.search_1_popup_active').removeClass('active');
	$('.overlay').removeClass('active');
})



// mobile-menu-toggle-start
gsap.registerPlugin(ScrollTrigger);

var menuToggle = document.getElementById("menuToggle")
var menuToggle2 = document.getElementById("menuToggle2")

if (menuToggle2) {

	var menuBar = gsap.timeline();
	menuBar.reverse();
	var menubgline = gsap.timeline({ paused: true });
	
	menubgline.to('.mobile-menu' , {
		duration: 0,
		display: "block",
		ease: 'Expo.easeInOut'
	});
	menubgline.to('.mobile-menu-bg span' , {
		duration: .5,
		height: "100%",
		stagger: 0.1,
		ease: 'Expo.easeInOut'
	});
	menubgline.from('.mobile-menu-logo' , {
		x: -50,
		opacity: 0,
		ease: 'Expo.easeInOut'
	});
	menubgline.to('.mobile-menu-close' , {
		duration: 0,
		x: 0,
		rotate: 0,
		opacity: 1,
		ease: 'Expo.easeInOut'
	}, "<");
	menubgline.fromTo('.mobile-main-navigation  ul li' , {
		opacity: 0,
		y: 50,
		ease: 'Expo.easeInOut',
		stagger: 0.2,
	} , {
		opacity: 1,
		y: 0,
	}, "<");
	menubgline.from('.mobile-menu-search-bar' , {
		opacity: 0,
		y: 50,
		ease: 'Expo.easeInOut'
	}, "<");

	menubgline.from('.mobile-menu-socail-link' , {
		opacity: 0,
		x: 50,
		ease: 'Expo.easeInOut'
	}, "<");

	
	menubgline.reverse();

	menuToggle.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	menuToggle2.addEventListener('click', function(){
		menubgline.reversed(!menubgline.reversed());
	});
	
}


// image-paralax-animation-start
gsap.utils.toArray(".image-pllx").forEach(function(container) {
    let image = container.querySelector("img");
  
    let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
        },
      }); 
      tl.from(image, {
        yPercent: -30,
		scale: 1.1,
        ease: "none",
      }).to(image, {
        yPercent: 30,
		scale: 1.1,
        ease: "none",
      }); 
  });

// blta-img-animation
gsap.utils.toArray('.blta-img').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 80%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { Transform: "rotateY(60deg) translateX(-190px)" }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-img-animation-2
gsap.utils.toArray('.blta-img-2').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 80%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { Transform: "rotateY(-60deg) translateX(190px)" }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-img-animation-2
gsap.utils.toArray('.blta-img-3').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 80%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { Transform: "rotateX(-60deg) translateY(190px)" }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-scale-plus
gsap.utils.toArray('.blta-scale-plus').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 85%",
		end: "buttom 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { scale: 2 }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-fade-left
gsap.utils.toArray('.blta-fade-left').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 1,
		start: "top 70%",
		end: "top 10%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { opacity: 1 , xPercent: -100 }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-fade-right
gsap.utils.toArray('.blta-fade-right').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 2,
		start: "top 70%",
		end: "top 10%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { opacity: 1 , xPercent: 100 }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-fade-down
gsap.utils.toArray('.blta-fade-down img').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: ".blta-fade-down",
		scrub: 2,
		start: "top 70%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { opacity: 1 , yPercent: 100 }, {opacity: 1, duration: 1, immediateRender: false})
})

// blta-fade-down
gsap.utils.toArray('.ftc-stitle .line').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: ".ftc-stitle",
		scrub: 2,
		start: "top 80%",
		end: "top 50%",
		toggleActions: "play none none reverse",
		 markers: true
	  }
	})
	
	tl1
	.from(el, {  background: "#c4ef17" ,  scaleX: 0, transformOrigin: "left" }, { duration: 1,  immediateRender: false})
})

// hero-2-animation
var bltahro2 = gsap.timeline({

	scrollTrigger: {
	  animation: bltahro2,
	  trigger: '.blta-hero-2-area',
	  start: "top 0%",
	  end: "bottom 0%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
bltahro2.fromTo(".blta-hero-2-bg-img .bg-building" , { scale: 1 ,  duration:1 }, { scale: 2  });

// hero-3-animation
var bltahro3 = gsap.timeline({

	scrollTrigger: {
	  animation: bltahro3,
	  trigger: '.blta-hero-3-area',
	  start: "top 0%",
	  end: "bottom 0%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
bltahro3.fromTo(".blta-hero-3-bg img" , { scale: 1 ,  duration:1 }, { scale: 2  });

// blta-categories-1-img
var bltact1 = gsap.timeline({

	scrollTrigger: {
	  animation: bltact1,
	  trigger: '.blta-categories-1-img',
	  start: "top 80%",
	  end: "top 30%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
bltact1.from( ".blta-categories-1-img img" , { yPercent: -100 , stagger: 0.2 ,  duration:1 } )

// blta-portfolio-1
var bltapot1 = gsap.timeline({

	scrollTrigger: {
	  animation: bltapot1,
	  trigger: '.blta-portfolio-1-left',
	  start: "top 80%",
	  end: "top 0%",
	  scrub: 1,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
bltapot1.fromTo( ".blta-portfolio-1-left" , { rotate: 90 ,  duration:1 } , { rotate: 35} )
		.fromTo( ".blta-portfolio-1-img-2" , { y: 0 ,  duration:1 }, { y: 80 } , "<" )
		.fromTo( ".blta-portfolio-1-grid .icon" , { rotate: 0 , scale: 3 ,  duration:1 }, { scale: 1, rotate: 360 } , "<" )



// blta-blog-3
var bltablog1 = gsap.timeline({

	scrollTrigger: {
	  animation: bltablog1,
	  trigger: '.blta-blog-3-area',
	  start: "top 0%",
	  end: "bottom 0%",
	  scrub: 3,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
bltablog1.from( ".blta-blog-3-bg-il" , { xPercent: -100 ,  duration:1 } )

// cta-4
var bltacta4 = gsap.timeline({

	scrollTrigger: {
	  animation: bltacta4,
	  trigger: '.blta-cta-4-area',
	  start: "top 90%",
	  end: "top 40%",
	  scrub: 1,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
bltacta4.from( ".blta-cta-4-img" , { yPercent: 100 ,  duration:1 } )


// hero-1-slider
if($('.ftc-hero-1-active').length) {
	let ftchero1 = new Swiper('.ftc-hero-1-active', {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 5,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},
	
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			},
			1600: {
				slidesPerView: 4,
			},
			1800: {
				slidesPerView: 5,
			},
		},
	});
}

// choose-us-1-slider
if($('.ftc-choose-us-1-client-active').length) {
	let ftchero1 = new Swiper('.ftc-choose-us-1-client-active', {
		loop: true,
		spaceBetween: 20,
		slidesPerView: 6,
		speed: 3000,
		autoplay: {
			delay: 40000000,
		},
	
		breakpoints: {
			0: {
				slidesPerView: 2,
			},
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
			1200: {
				slidesPerView: 6,
			},

		},
	});
}

  
// project-1-slider
if($('.ftc-project-1-active').length) {
	let slider = new Swiper('.ftc-project-1-active', {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 3,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".ftc_project_1_next",
			prevEl: ".ftc_project_1_prev",
		},
	
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			576: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},


		},
	});
}
  
// testimonial-1-slider
if($('.ftc-testimonial-1-active').length) {
	let slider = new Swiper('.ftc-testimonial-1-active', {
		loop: true,
		spaceBetween: 30,
		slidesPerView: 1,
		speed: 1000,
		autoplay: {
			delay: 5000,
		},

		navigation: {
			nextEl: ".ftc_testimonial_1_next",
			prevEl: ".ftc_testimonial_1_prev",
		},
	
	});
}


// bootstrap-toltip
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
})

// cursor follow
$(document).ready(function () {
	var mWrap = $(".blta-categories-1-tabs-content ");
  
	mWrap.hover(function () {
	  var mContent = $(this).find("#magnetic-content");
	  var mArea = $(this).find("#magnetic-area");
  
	  function parallaxIt(e, target, movement = 1) {
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		var boundingRect = mArea[0].getBoundingClientRect();
		var relX = e.pageX - boundingRect.left;
		var relY = e.pageY - boundingRect.top;
  
		gsap.to(mContent, {
		  x: (relX - boundingRect.width / 2) * movement,
		  y: (relY - boundingRect.height / 2 - scrollTop) * movement,
		  ease: "power1",
		  duration: 1
		});
	  }
  
	  function callParallax(e) {
		parallaxIt(e, mWrap);
	  }
  
	  mArea.mousemove(function (e) {
		callParallax(e);
	  });
	  mArea.mouseleave(function (e) {
		gsap.to(mContent, {
		  scale: 1,
		  x: 0,
		  y: 0,
		  ease: "power1",
		  duration: 1.5
		});
	  });
	});
  });



/* faq-active-class */
$(document).on('click', '.gly-accordion-item', function(){
	$(this).addClass('faq_bg').siblings().removeClass('faq_bg')
})


/* back-to-top */
var backtotop = $('.scroll-top');

$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	backtotop.addClass('show');
	} else {
	backtotop.removeClass('show');
	}
});

backtotop.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '700');
});


/* counter */
$('.counter').counterUp({
	delay: 10,
	time: 3000
});

/* data-bg-activition */
$("[data-background]").each(function(){
	$(this).css("background-image","url("+$(this).attr("data-background") + ") ")
})


// wow-activation
if($('.wow').length){
	var wow = new WOW(
	{
		boxClass:     'wow',
		animateClass: 'animated',
		offset:       0,
		mobile:       true,
		live:         true
	}
	);
	wow.init();
};


/*
popup-video-activition
====start====
*/

if($('.popup-video').length) {
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
}


/*
popup-img-activition
====start====
*/

if($('.popup_img').length) {
	$('.popup_img').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true,
		},
	});
}

/*
popup-img-activition
====start====
*/
if($('.nice-select').length) {
	$('.nice-select select').niceSelect();
}

// parallax-img
$('.parallax-img').parallaxie({
	speed: 0.5,    
	repeat: "repeat", 
	size: "auto",  
	pos_x: "center", 
	offset: 0      
});

})(jQuery);