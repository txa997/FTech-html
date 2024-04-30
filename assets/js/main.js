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




// ftc-fade-left
gsap.utils.toArray('.ftc-fade-left').forEach((el, index) => { 
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

// ftc-fade-right
gsap.utils.toArray('.ftc-fade-right').forEach((el, index) => { 
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

// ftc-fade-down
gsap.utils.toArray('.ftc-fade-down').forEach((container, index) => { 
    let images = gsap.utils.toArray(container.querySelectorAll('img'));

    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            scrub: 2,
            start: "top 70%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            markers: false
        }
    });

    tl1.from(images, { opacity: 0, yPercent: -100,  filter: "blur(30px)", stagger: 0.2, duration: 1 });
});


// ftc-line-left
gsap.utils.toArray('.ftc-line-left').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 2,
		start: "top 90%",
		end: "top 40%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { scaleX: 0, transformOrigin: "left", duration: 2, })
})

// ftc-line-right
gsap.utils.toArray('.ftc-line-right').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 2,
		start: "top 90%",
		end: "top 40%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.from(el, { scaleX: 0, transformOrigin: "right", duration: 2, })
})



// ftc-clip-left
gsap.utils.toArray('.ftc-clip-left').forEach((el, index) => { 
	let tl1 = gsap.timeline({
	  scrollTrigger: {
		trigger: el,
		scrub: 2,
		start: "top 90%",
		end: "top 60%",
		toggleActions: "play none none reverse",
		 markers: false
	  }
	})
	
	tl1
	.fromTo(el, { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", transformOrigin: "left", duration: 2, }, { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" } )
})


// subtitle-animation
gsap.utils.toArray('.ftc-subtitle-1').forEach((subtitle) => {
    gsap.utils.toArray('.line', subtitle).forEach((el, index) => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: subtitle,
                scrub: 2,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                markers: false
            }
        });

        // Apply the animation to the ".line" element
        tl1.from(el, {
            background: "#c4ef17",
            scaleX: 0,
            transformOrigin: "left",
            duration: 1,
            immediateRender: true
        });
    });
});

// class-add
const txaaddclass = gsap.utils.toArray('.ftc-add-class');
txaaddclass.forEach(img => {
	gsap.to(img, {
		scrollTrigger: {
			trigger: img,
			scrub: 1,
			start: "top 95%",
			toggleClass: "active",
			toggleActions: "play reverse play reverse",
			markers: false
		}
	});
});

// ftc-about-1
var ftcabout1 = gsap.timeline({

	scrollTrigger: {
	  animation: ftcabout1,
	  trigger: '.ftc-about-1-area',
	  start: "top 80%",
	  end: "top 50%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
ftcabout1.from(".ftc-about-1-bg-shape-1" , { opacity: 1 ,  duration:1 })
		 .from(".ftc-about-1-img" , { xPercent: -50, yPercent: -50 ,  duration:2 })
		 .from(".ftc-about-1-bg-shape-2" , { opacity: 1 ,  duration:1 });



// ftc-about-1
var ftcscl3 = gsap.timeline({

	scrollTrigger: {
	  animation: ftcscl3,
	  trigger: '.ftcscl3',
	  start: "top 80%",
	  end: "top 50%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
ftcscl3.from(".ftcscl3" , { scale: 3, rotate: 360 ,  duration:1 })

// ftc-campaign-1
var ftccampaign1 = gsap.timeline({

	scrollTrigger: {
	  animation: ftccampaign1,
	  trigger: '.ftc-campaign-1-row',
	  start: "top 90%",
	  end: "top 50%",
	  scrub: 2,
	  toggleActions: "play reverse play reverse",
	  markers: false
	}
});
	
ftccampaign1.from(".ftc-campaign-1-img" , { scale: 0,  duration:1 })
			.from(".ftc-campaign-1-card" , { opacity: 0, transform: "rotateY(-90deg)", stagger: .2,  duration:1 })






// title-animation
$(window).on('load',function(){
	var st = $(".ftc-split-text");
	if(st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function(index, el) {
	  el.split = new SplitText(el, { 
		type: "lines,words,chars",
		linesClass: "split-line"
	  });
	
	  if( $(el).hasClass('ftc-split-threed') ){
		gsap.set(el.split.chars, {
		  opacity: 1,
		  	transformOrigin: "50% 100%",
		  	transform: "rotateX(90deg)",
			ease: "elastic.out(1,0.3)",
			color:'#a249ed',
			duration: 2.5, 
		});
	  }
	  

	  el.anim = gsap.to(el.split.chars, {
		scrollTrigger: {
		  trigger: el,
		  start: "top 90%",
		},
		ease: "elastic.out(1,0.3)",
		transform: "rotateX(0deg)",
		color: 'inherit',
		opacity: 1,
		duration: 2.5, 
		stagger: 0.02,
	  });
	  
	});
})




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
			delay: 4000,
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